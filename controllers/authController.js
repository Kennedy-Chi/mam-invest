const crypto = require("crypto");
const { promisify } = require("util");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const Email = require("../models/emailModel");
const AppError = require("../utils/appError");
const SendEmail = require("../utils/email");
const catchAsync = require("../utils/catchAsync");
const { findByIdAndUpdate } = require("../models/userModel");

const signToken = (id) => {
  return jwt.sign({ id: id }, process.env.JWT_SECRETE, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const createSendToken = (user, statusCode, res) => {
  const token = signToken(user._id);

  const cookieOptions = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };

  if (process.env.NODE_ENV === "production") cookieOptions.secure = true;
  res.cookie("jwt", token, cookieOptions);

  user.password = undefined;
  res.status(statusCode).json({
    status: "success",
    token,
    user,
  });
};

exports.signup = catchAsync(async (req, res, next) => {
  req.body.profilePicture = req.files.profilePicture[0].filename;
  req.body.idPicture = req.files.idPicture[0].filename;

  req.body.accounts = JSON.parse(req.body.accounts);
  req.body.suspension = true;

  const existingUsers = await User.find();

  if (existingUsers.length == 0) {
    req.body.staffType = "Admin";
    req.body.status = "Staff";
  }

  const user = await User.create(req.body);

  if (req.body.autoRegister) {
    res.status(200).json({
      status: "success",
    });
    return;
  }

  // GET THE EMAIL AND THE USERS TO SEND TO
  const email = await Email.find({ name: "confirm-registration" });
  const users = [user];

  // const resetURL = `${req.protocol}://${req.get(
  //   "host"
  // )}/api/vi/users/resetPassword/?token=${resetToken}`;

  // CALL THE EMAIL METHOD AND SEND THE EMAIL
  const from = `info@zivikbank.com`;

  const domainName = "https://zivikbank.com";

  users.forEach((user) => {
    try {
      const resetURL = `${domainName}/confirm-registration?token=${user._id}`;

      const banner = `${domainName}/uploads/${email.banner}`;
      new SendEmail(
        from,
        user,
        email[0].name,
        email[0].title,
        banner,
        email[0].content,
        email[0].headerColor,
        email[0].footerColor,
        email[0].mainColor,
        email[0].greeting,
        email[0].warning,
        resetURL
      ).sendEmail();
    } catch (err) {
      return next(
        new AppError(
          `There was an error sending the email. Try again later!, ${err}`,
          500
        )
      );
    }
  });

  // createSendToken(user, 201, res);

  res.status(200).json({
    status: "success",
    data: user,
  });
});

exports.login = catchAsync(async (req, res, next) => {
  const { username, password } = req.body;
  //1) check if email and password exist
  if (!username || !password) {
    return next(new AppError("Please provide username and password!", 400));
  }

  //2) check if user exists && password is correct
  const user = await User.findOne({ username }).select("+password");

  if (!user || !(await user.correctPassword(password, user.password))) {
    return next(new AppError("Incorrect username or password", 401));
  }

  if (user.suspension) {
    return next(
      new AppError(
        "Activate your account by verifying the Zivik email sent to you",
        401
      )
    );
  }

  //3) if everything is ok, send token to client
  createSendToken(user, 200, res);
});

exports.getAUser = catchAsync(async (req, res, next) => {
  let token;
  // let io = req.io;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRETE);

  // //3) Check if user still exists
  const currentUser = await User.findById(decoded.id);
  if (!currentUser) return next();

  createSendToken(currentUser, 200, res);
});

exports.forgotPassword = catchAsync(async (req, res, next) => {
  //1) Get user based on Posted email
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return next(new AppError("There is no user with that email address", 404));
  }
  //2) Generate the random reset token
  const resetToken = user.createPasswordResetToken();
  await user.save({ validateBeforeSave: false });

  try {
    const resetURL = `localhost:3000/?token=${resetToken}`;
    // const resetURL = `${req.protocol}://${req.get(
    //   "host"
    // )}/api/vi/users/resetPassword/?token=${resetToken}`;

    new Email(user, resetURL).sendForgottenPassword();
    res.status(200).json({
      status: "success",
      message: "Please check your email to reset password",
    });
  } catch (err) {
    (user.passwordResetToken = undefined),
      (user.passwordResetExpires = undefined);
    await user.save({ validateBeforeSave: false });

    return next(
      new AppError(
        "There was an error sending the email. Try again later!",
        500
      )
    );
  }
});

exports.resetPassword = catchAsync(async (req, res, next) => {
  //1) Get user based on the token
  const hashedToken = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");

  const user = await User.findOne({
    passwordResetToken: hashedToken,
    passwordResetExpires: { $gt: Date.now() },
  });

  //2) If token has not expired, and there is a user, set the new password
  if (!user) {
    return next(new AppError("Token is invalid or has expired", 400));
  }
  user.password = req.body.password;
  user.cPassword = req.body.cPassword;
  user.passwordResetToken = undefined;
  user.passwordResetExpires = undefined;

  await user.save();

  //3) Update changedPasswordAt property for the user

  //4) Log the user in, send JWT
  createSendToken(user, 200, res);
});

exports.updatePassword = catchAsync(async (req, res, next) => {
  //1) Get user based on the id
  const user = await User.findById(req.user.id).select("+password");

  //2) If token has not expired, and there is a user, set the new password
  if (!(await user.correctPassword(req.body.oldPassword, user.password))) {
    return next(new AppError("Your current password is wrong", 401));
  }

  if (req.body.password != req.body.cPassword) {
    return next(new AppError("Your passwords do not match"));
  }
  user.password = req.body.password;
  user.cPassword = req.body.cPassword;

  await user.save();

  //3) Update changedPasswordAt property for the user

  //4) Log the user in, send JWT
  createSendToken(user, 200, res);
});

exports.protect = catchAsync(async (req, res, next) => {
  // 1) Getting the token and check if it exist
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    return next(
      new AppError(
        "Sorry, you are not logged in! Please login to get access",
        401
      )
    );
  }

  //2) Verification of token
  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRETE);
  //3) Check if user still exists
  const currentUser = await User.findById(decoded.id);
  if (!currentUser)
    return next(new AppError("Sorry you no longer exist in the database", 401));

  //4) Check if user changed password after the token was issued
  if (currentUser.changedPasswordAfter(decoded.iat)) {
    return next(
      new AppError(`User recently changed password! Please login again`, 401)
    );
  }

  //GRANT ACCESS TO PROTECTED ROUTE
  req.user = currentUser;
  req.token = token;
  next();
});

exports.restrictTo = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.staffType)) {
      return next(
        new AppError("You do not have permission to perform this action", 403)
      );
    }

    next();
  };
};

exports.activateAUser = catchAsync(async (req, res, next) => {
  let token = req.params.id;

  const oldUser = await User.findById(token);

  //2) If token has not expired, and there is a user, set the new password
  if (!oldUser) {
    return next(
      new AppError("User does not exist, please signup to continue.", 400)
    );
  }

  const user = await User.findByIdAndUpdate(oldUser._id, { suspension: false });
  const email = await Email.find({ name: "registration-successful" });

  const content = email.content
    .replace("{{full-name}}", `${user.firstName} ${user.lastName}`)
    .replace("{{account-number}}", `${user.accounts[0].address}`)
    .replace("{{account-type}}", `${user.accounts[0].name}`)
    .replace("{{currency}}", `${user.accounts[0].currency}`);

  try {
    const resetURL = `${domainName}`;

    const banner = `${domainName}/uploads/${email.banner}`;
    new SendEmail(
      from,
      user,
      email[0].name,
      email[0].title,
      banner,
      content,
      email[0].headerColor,
      email[0].footerColor,
      email[0].mainColor,
      email[0].greeting,
      email[0].warning,
      resetURL
    ).sendEmail();
  } catch (err) {
    return next(
      new AppError(
        `There was an error sending the email. Try again later!, ${err}`,
        500
      )
    );
  }

  createSendToken(user, 200, res);
});
