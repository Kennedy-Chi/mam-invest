const mongoose = require("mongoose");

const activeSchema = new mongoose.Schema({
  symbol: String,
  username: String,
  amount: Number,
  earning: Number,
  planName: String,
  planDuration: Number,
  planPeriod: Number,
  percent: Number,
  planCycle: Number,
  daysRemaining: Number,
  referredBy: String,
  walletName: String,
  walletId: String,
  serverTime: Number,
  time: Number,
});

const Active = mongoose.model("Active", activeSchema);

module.exports = Active;
