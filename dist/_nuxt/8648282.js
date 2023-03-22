(window.webpackJsonp=window.webpackJsonp||[]).push([[37,5,6,7,8,16],{303:function(t,e,n){var content=n(310);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(143).default)("c33cd76c",content,!0,{sourceMap:!1})},304:function(t,e,n){"use strict";n.r(e);var c={props:{msg:{type:String},state:{type:Boolean}},methods:{getState:function(){return this.$store.state.confirmState},confirm:function(data){this.$emit("confirm",data)}},computed:{}},r=n(56),component=Object(r.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"confirm-action",class:{hide:t.state}},[e("div",{staticClass:"confirm-box"},[e("div",[t._v(t._s(t.msg))]),t._v(" "),e("div",{staticClass:"confirm-holder"},[e("span",{staticClass:"button w-button",on:{click:function(e){return t.confirm("yes")}}},[t._v("Yes")]),e("span",{staticClass:"button w-button",on:{click:function(e){return t.confirm("no")}}},[t._v("No")])])])])}),[],!1,null,null,null);e.default=component.exports},306:function(t,e,n){"use strict";n.r(e);var c={methods:{setFileURL:function(){this.$store.commit("SET_URL",this.$config.FILE_URL)}},mounted:function(){this.setFileURL()}},r=n(56),component=Object(r.a)(c,(function(){this._self._c;return this._m(0)}),[function(){var t=this._self._c;return t("div",{staticClass:"footer",attrs:{id:"footer"}},[t("div",[this._v("www.kennytechstudios.com")])])}],!1,null,null,null);e.default=component.exports},307:function(t,e,n){"use strict";n.r(e);n(49),n(58),n(26);var c={data:function(){return{navItems:[{name:"Dashboard",image:"dashboard.svg",colored:"colored-dashboard.svg",route:"/admin",activeLink:!1,imageSrc:"dashboard.svg",routePath:"admin"},{name:"Profile",image:"profile.svg",colored:"colored-profile.svg",route:"/admin/profile",activeLink:!1,imageSrc:"profile.svg",routePath:"admin-profile"},{name:"Users",image:"users.svg",colored:"colored-users.svg",route:"/admin/users",activeLink:!1,imageSrc:"users.svg",routePath:"admin-users"},{name:"Add User",image:"user.svg",colored:"colored-user.svg",route:"/admin/add-user/new",activeLink:!1,imageSrc:"user.svg",routePath:"admin-add-user"},{name:"Plans/Accounts",image:"plans.svg",colored:"colored-plans.svg",route:"/admin/plans",activeLink:!1,imageSrc:"plans.svg",routePath:"admin-plans"},{name:"Reviews",image:"reviews.svg",colored:"colored-reviews.svg",route:"/admin/reviews",activeLink:!1,imageSrc:"reviews.svg",routePath:"admin-reviews"},{route:"/admin/currencies",name:"Currency",image:"currency.svg",colored:"colored-currency.svg",activeLink:!1,imageSrc:"currency.svg",routePath:"admin-currencies"},{route:"/admin/transactions/list",name:"Transactions",image:"deposit.svg",colored:"colored-deposit.svg",activeLink:!1,imageSrc:"deposit.svg",routePath:"admin-transactions"},{route:"/admin/email",name:"Emails",image:"emails.svg",colored:"colored-emails.svg",activeLink:!1,imageSrc:"emails.svg",routePath:"admin-email"},{route:"/admin/pages",name:"Pages",image:"pages.svg",colored:"colored-pages.svg",activeLink:!1,imageSrc:"pages.svg",routePath:"admin-pages"},{route:"/admin/settings",name:"Settings",image:"settings.svg",colored:"colored-settings.svg",activeLink:!1,imageSrc:"settings.svg",routePath:"admin-settings"},{name:"Referrals",image:"referrals.svg",colored:"colored-referrals.svg",activeLink:!1,imageSrc:"referrals.svg"},{name:"Logout",image:"logout.svg",colored:"colored-logout.svg",activeLink:!1,imageSrc:"logout.svg"}],route:""}},computed:{navState:function(){return this.$store.state.navState},user:function(){return this.$store.state.auth.user}},methods:{toggleNav:function(){this.$store.commit("TOGGLE_ADMIN_NAV")},activateLink:function(t){t.activeLink=!0,t.imageSrc=t.colored},deactivateLink:function(t){t.activeLink=!1,t.imageSrc=t.image}},mounted:function(){this.route=this.$route.name}},r=(n(309),n(56)),component=Object(r.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"vertical-navbar",class:{show:t.navState}},[e("div",{staticClass:"sticky-navbar"},[e("nuxt-link",{staticClass:"navbar-header",attrs:{to:"/"}},[e("img",{staticClass:"brand",attrs:{src:"/images/Logo.png",loading:"lazy",sizes:"130px",srcset:"/images/Logo.png 500w, /images/Logo.png 800w, /images/Logo.png 1080w, /images/Logo.png 2284w",alt:""}})]),t._v(" "),e("img",{staticClass:"menu-close",attrs:{src:"/images/menu-close.svg",alt:""},on:{click:t.toggleNav}}),t._v(" "),e("ul",{staticClass:"nav-list",attrs:{role:"list"}},[e("li",{staticClass:"nav-list"},t._l(t.navItems,(function(n,i){return e("nuxt-link",{key:i,staticClass:"nav-link w-inline-block",class:{active:t.route==n.routePath||t.route.includes(n.routePath)||n.activeLink},attrs:{to:"".concat(n.route)},on:{mouseenter:function(e){return t.activateLink(n)},mouseleave:function(e){return t.deactivateLink(n)}}},[e("img",{staticClass:"nav-icon",attrs:{src:"/images/".concat(t.route==n.routePath||t.route.includes(n.routePath)?n.colored:n.imageSrc),loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"link-text"},[t._v(t._s(n.name))])])})),1)])],1)])}),[],!1,null,null,null);e.default=component.exports},308:function(t,e,n){"use strict";n.r(e);var c={head:function(){return{link:[{rel:"stylesheet",href:"/css/main.css",type:"text/css"}]}},methods:{toggleNav:function(){this.$store.commit("TOGGLE_ADMIN_NAV")}},computed:{isAuthenticated:function(){return this.$store.getters.isAuthenticated}}},r=n(56),component=Object(r.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-header"},[e("img",{staticClass:"menu",attrs:{src:"/images/menu.svg",loading:"lazy",alt:""},on:{click:t.toggleNav}}),t._v(" "),t._m(0)])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"top-icons"},[e("img",{staticClass:"top-icon",attrs:{src:"/images/profile.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"notification"},[e("div",{staticClass:"badge"}),t._v(" "),e("img",{staticClass:"top-icon",attrs:{src:"/images/notification.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"custom-card pie-chart-holder notify"},[e("h4",{staticClass:"activites"},[t._v("Recent Activies")]),t._v(" "),e("div",{staticClass:"each-activity"},[e("div",{staticClass:"activity-title"},[t._v("Deposit")]),t._v(" "),e("div",{staticClass:"activity-coin"},[e("img",{staticClass:"activity-img",attrs:{src:"https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f1737ae1e45a0c67433779_bitcoin-btc-logo.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"activity-line"})]),t._v(" "),e("div",{staticClass:"activity-value"},[e("h4",{staticClass:"activity-amount"},[t._v("$12.00")]),t._v(" "),e("div",{staticClass:"activity-time"},[t._v("12/06/2022 9:04 AM")])])]),t._v(" "),e("div",{staticClass:"each-activity"},[e("div",{staticClass:"activity-title"},[t._v("Withdrawal")]),t._v(" "),e("div",{staticClass:"activity-coin"},[e("img",{staticClass:"activity-img",attrs:{src:"https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f173795a0b873c5097be44_tether-usdt-logo.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"activity-line"})]),t._v(" "),e("div",{staticClass:"activity-value"},[e("h4",{staticClass:"activity-amount"},[t._v("$12.00")]),t._v(" "),e("div",{staticClass:"activity-time"},[t._v("12/06/2022 9:04 AM")])])]),t._v(" "),e("div",{staticClass:"each-activity"},[e("div",{staticClass:"activity-title"},[t._v("Deposit")]),t._v(" "),e("div",{staticClass:"activity-coin"},[e("img",{staticClass:"activity-img",attrs:{src:"https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f173795a0b8708f697be43_tron-trx-logo.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"activity-line"})]),t._v(" "),e("div",{staticClass:"activity-value"},[e("h4",{staticClass:"activity-amount"},[t._v("$12.00")]),t._v(" "),e("div",{staticClass:"activity-time"},[t._v("12/06/2022 9:04 AM")])])]),t._v(" "),e("div",{staticClass:"each-activity"},[e("div",{staticClass:"activity-title"},[t._v("Deposit")]),t._v(" "),e("div",{staticClass:"activity-coin"},[e("img",{staticClass:"activity-img",attrs:{src:"https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f1737ae1e45a0c67433779_bitcoin-btc-logo.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"activity-line"})]),t._v(" "),e("div",{staticClass:"activity-value"},[e("h4",{staticClass:"activity-amount"},[t._v("$12.00")]),t._v(" "),e("div",{staticClass:"activity-time"},[t._v("12/06/2022 9:04 AM")])])])])]),t._v(" "),e("img",{staticClass:"top-icon",attrs:{src:"/images/logout.svg",loading:"lazy",alt:""}})])}],!1,null,null,null);e.default=component.exports},309:function(t,e,n){"use strict";n(303)},310:function(t,e,n){var c=n(142)((function(i){return i[1]}));c.push([t.i,".vertical-navbar{transition:all .3s}.menu-close{display:none;position:absolute;right:20px;top:90px;width:20px}.menu-close,.nav-list a{cursor:pointer}@media screen and (max-width:991px){.vertical-navbar.show{left:0;z-index:999}.menu-close{display:block}}@media screen and (max-width:380px){.vertical-navbar.show{width:100%}}",""]),c.locals={},t.exports=c},314:function(t,e,n){"use strict";n.r(e);var c={},r=n(56),component=Object(r.a)(c,(function(){this._self._c;return this._m(0)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"custom-card plan"},[e("h4",{staticClass:"page-title"},[t._v("INSTRUCTION")]),t._v(" "),e("div",{staticClass:"instruction"},[t._v("\n    Kindly fill in the required fields above to create a plan, in the case of\n    any confusion on how the above form works, kindly visit our\n    "),e("span",{staticClass:"custom-link"},[t._v("youtub link")]),t._v(", or our\n    "),e("span",{staticClass:"custom-link"},[t._v("website ")]),t._v("to watch the video tutorial\n    related to this form.\n  ")])])}],!1,null,null,null);e.default=component.exports},349:function(t,e,n){var content=n(386);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(143).default)("2e630d5a",content,!0,{sourceMap:!1})},385:function(t,e,n){"use strict";n(349)},386:function(t,e,n){var c=n(142)((function(i){return i[1]}));c.push([t.i,".filter-label.point{cursor:pointer}.check-td{position:relative}.check-wrapper.check-item{position:absolute;right:-30px;top:-20px}.user-image{align-items:center;background:linear-gradient(135deg,#e84c89,#9863a3);border-radius:50%;color:#fff;display:flex;font-size:20px;font-weight:500;height:50px;justify-content:center;width:50px}",""]),c.locals={},t.exports=c},425:function(t,e,n){"use strict";n.r(e);n(26),n(57);var c=n(8),r=(n(48),n(91),n(13),n(38),n(212),n(304)),o=n(306),l=n(307),v=n(308),d={data:function(){return{users:[],limit:4,selectedEmailName:"Select Email",selectedEmail:"",emails:[],hideEmail:!0,isBulk:!1,confirmMessage:"",confirmStatus:!0,response:"",responseState:!1,height:0,showResponse:!1,deleteId:""}},methods:{showResponseMsg:function(t,e){var n=this;this.response=t,this.responseState=e,this.showResponse=!0,setTimeout((function(){n.response="",n.showResponse=!1}),6e3)},getTotal:function(data){var t=0;return data.forEach((function(e){t+=Number(e.balance)})),t},getAge:function(t){var e=(new Date).getTime()-new Date(t).getTime();return Math.floor(e/31536e6)},clearSelected:function(){this.selectedEmailName="Select Email",this.isBulk=!1,this.users.forEach((function(t){t.checked=!1}))},formatDate:function(data){var t=new Date(data);return new Intl.DateTimeFormat("en-US",{weekday:"short",day:"numeric",month:"long"}).format(t)},toggleCheck:function(t,e){e.checked=!e.checked},showConfirmation:function(t){"Select Email"==this.selectedEmailName?this.showResponseMsg("Please select email template",!1):(this.confirmMessage=t,this.confirmStatus=!1)},deleteConfirmation:function(t,e){this.deleteId=e,this.confirmMessage=t,this.confirmStatus=!1},returnConfirmation:function(data){this.confirmStatus=!this.confirmStatus,console.log(this.deleteId.length)},selectEmail:function(t){this.selectedEmailName=t.name,this.selectedEmail=t,this.hideEmail=!this.hideEmail},bulkSelection:function(){this.isBulk=!this.isBulk,this.isBulk?this.users.forEach((function(t){t.checked=!0})):this.users.forEach((function(t){t.checked=!1}))},checkItems:function(t){return t.forEach((function(t){t.checked=!1})),t},toggleUserStatus:function(t,e){var n=this;return Object(c.a)(regeneratorRuntime.mark((function c(){var form;return regeneratorRuntime.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return(form=new FormData).append("status","User"==e?"Staff":"User"),c.prev=2,c.next=5,n.$axios.patch("/users/".concat(t),form);case 5:n.getUsers(),c.next=11;break;case 8:c.prev=8,c.t0=c.catch(2),n.showResponseMsg(c.t0.response.data.message,!0);case 11:case"end":return c.stop()}}),c,null,[[2,8]])})))()},sendEmail:function(t){var e=this;return Object(c.a)(regeneratorRuntime.mark((function n(){var form;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return form={users:t,email:e.selectedEmail},n.prev=1,n.next=4,e.$axios.post("/emails/send-email",form);case 4:e.showResponseMsg("The email was sent successfully",!0),e.clearSelected(),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0.response.data.message);case 11:case"end":return n.stop()}}),n,null,[[1,8]])})))()},getEmails:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/emails");case 3:n=e.sent,t.emails=n.data.data,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.response.data.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},getUsers:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var n,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="?limit=".concat(t.limit),e.prev=1,e.next=4,t.$axios.get("/users/".concat(n));case 4:c=e.sent,t.users=t.checkItems(c.data.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0.response);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))()},deleteUser:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.delete("/users/".concat(t.deleteId));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0.response.data.message);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})))()}},mounted:function(){this.getUsers(),this.getEmails()},computed:{FILE_URL:function(){return this.$store.state.fileURL}},components:{Instruction:n(314).default,AdminFooter:o.default,AdminNavigation:l.default,AdminTopHeader:v.default,AdminConfirmation:r.default}},m=(n(385),n(56)),component=Object(m.a)(d,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"main-wrapper users"},[e("admin-confirmation",{attrs:{msg:t.confirmMessage,state:t.confirmStatus},on:{confirm:t.returnConfirmation}}),t._v(" "),e("AdminNavigation"),t._v(" "),e("div",{staticClass:"body-wrapper"},[e("AdminTopHeader"),t._v(" "),e("div",{staticClass:"content-wrapper"},[e("div",{staticClass:"custom-card plan"},[e("h4",{staticClass:"page-title"},[t._v("Users Page")]),t._v(" "),e("div",{staticClass:"table-filters"},[t._m(0),t._v(" "),e("div",{staticClass:"each-filter-option"},[e("div",{staticClass:"filter-page"},[t._v("Email")]),t._v(" "),e("h4",{staticClass:"filter-label point",on:{click:function(e){t.hideEmail=!t.hideEmail}}},[t._v("\n              "+t._s(t.selectedEmailName)+"\n            ")]),t._v(" "),e("ul",{staticClass:"filter-list",class:{hide:t.hideEmail},attrs:{role:"list"}},t._l(t.emails,(function(n){return e("li",{key:n._id,staticClass:"filter-items",on:{click:function(e){return t.selectEmail(n)}}},[e("div",[t._v(t._s(n.name))])])})),0)]),t._v(" "),t._m(1),t._v(" "),t._m(2)]),t._v(" "),e("div",{staticClass:"table-wrapper"},[e("table",{staticClass:"custom-table"},[t._m(3),t._v(" "),e("tbody",t._l(t.users,(function(n,c){return e("tr",{key:n._id},[e("td",{staticClass:"check-td"},[t._v("\n                  "+t._s(c+1)+"\n                  "),e("div",{staticClass:"each-input sm"},[e("div",{staticClass:"check-wrapper check-item",on:{click:function(e){return t.toggleCheck(e,n)}}},[e("div",{staticClass:"check-indicator",class:{active:n.checked}})])])]),t._v(" "),e("td",[n.image?e("div",[e("img",{staticClass:"banner",attrs:{src:"".concat(t.FILE_URL,"/").concat(n.image),alt:""}})]):e("div",{staticClass:"user-image"},[t._v("\n                    "+t._s(n.username.charAt(0).toUpperCase())+"\n                  ")])]),t._v(" "),e("td",[e("nuxt-link",{attrs:{to:"/admin/add-user/".concat(n._id)}},[t._v(t._s(n.username))]),t._v(" "),e("nuxt-link",{attrs:{to:"/admin/transactions/".concat(n._id)}},[e("div",{staticClass:"filter-box"},[e("img",{staticClass:"filter-icon check action-icon",attrs:{src:"/images/deposit.svg",loading:"lazy",alt:""}})])])],1),t._v(" "),e("td",[t._v(t._s(t.getAge(n.dob)))]),t._v(" "),e("td",[t._v(t._s(n.phoneNumber1))]),t._v(" "),e("td",[t._v(t._s(n.email))]),t._v(" "),e("td",[t._v(t._s(n.originCountry))]),t._v(" "),e("td",[t._v(t._s(t.getTotal(n.accounts)))]),t._v(" "),e("td",[t._v(t._s(t.formatDate(n.regDate)))]),t._v(" "),e("td",[n.autoRegister?e("div",{staticClass:"autoRegister"},[t._v("\n                    Internal\n                  ")]):e("div",{staticClass:"autoRegister"},[t._v("External")])]),t._v(" "),e("td",[e("div",{staticClass:"status",on:{click:function(e){return t.toggleUserStatus(n._id,n.status)}}},[t._v("\n                    "+t._s(n.status)+"\n                  ")])]),t._v(" "),e("td",[e("nuxt-link",{attrs:{to:"/admin/add-user/".concat(n._id)}},[e("div",{staticClass:"filter-box"},[e("img",{staticClass:"filter-icon check action-icon",attrs:{src:"/images/edit-gray.svg",loading:"lazy",alt:""}})])]),t._v(" "),e("div",{staticClass:"filter-box",on:{click:function(e){return t.deleteConfirmation("Are you sure you want to delete this user?",n._id)}}},[e("img",{staticClass:"filter-icon check action-icon",attrs:{src:"/images/delete-gray.svg",loading:"lazy",alt:""}})])],1)])})),0)])]),t._v(" "),t._m(4),t._v(" "),t.showResponse?e("div",{staticClass:"response",class:{success:t.responseState}},[t._v("\n          "+t._s(t.response)+"\n        ")]):t._e(),t._v(" "),e("div",{staticClass:"table-actions"},[t._m(5),t._v(" "),e("div",{staticClass:"each-filter-option min"},[e("div",{staticClass:"filter-page"},[t._v("Bulk")]),t._v(" "),e("div",{staticClass:"filter-box",on:{click:t.bulkSelection}},[e("img",{staticClass:"filter-icon check",attrs:{src:"/images/bulk-gray.svg",loading:"lazy",alt:""}})])]),t._v(" "),e("div",{staticClass:"each-filter-option min"},[e("div",{staticClass:"filter-page"},[t._v("Send Email")]),t._v(" "),e("div",{staticClass:"filter-box",on:{click:function(e){return t.showConfirmation("Are you sure you want to send  ".concat(t.selectedEmailName," email to the selected users?"))}}},[e("img",{staticClass:"filter-icon check",attrs:{src:"/images/emails.svg",loading:"lazy",alt:""}})])])])]),t._v(" "),e("Instruction")],1),t._v(" "),e("AdminFooter")],1)],1)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"each-filter-option"},[e("div",{staticClass:"filter-page"},[t._v("Filter")]),t._v(" "),e("img",{staticClass:"filter-icon drop",attrs:{src:"/images/caret-down-gray.svg",loading:"lazy",alt:""}}),t._v(" "),e("h4",{staticClass:"filter-label"},[t._v("All Users")]),t._v(" "),e("ul",{staticClass:"filter-list hide",attrs:{role:"list"}},[e("li",{staticClass:"filter-items"},[e("div",[t._v("All Users")])]),t._v(" "),e("li",{staticClass:"filter-items"},[e("div",[t._v("Active")])]),t._v(" "),e("li",{staticClass:"filter-items"},[e("div",[t._v("Suspended")])]),t._v(" "),e("li",{staticClass:"filter-items"},[e("div",[t._v("Blocked")])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"each-filter-option"},[e("div",{staticClass:"filter-page"},[t._v("Sort")]),t._v(" "),e("h4",{staticClass:"filter-label"},[t._v("Name")]),t._v(" "),e("ul",{staticClass:"filter-list hide",attrs:{role:"list"}},[e("li",{staticClass:"filter-items"},[e("div",[t._v("Reg. Date")])]),t._v(" "),e("li",{staticClass:"filter-items"},[e("div",[t._v("Deposit")])]),t._v(" "),e("li",{staticClass:"filter-items"},[e("div",[t._v("Suspended")])]),t._v(" "),e("li",{staticClass:"filter-items"},[e("div",[t._v("Blocked")])])]),t._v(" "),e("img",{staticClass:"filter-icon drop",attrs:{src:"/images/caret-down-gray.svg",loading:"lazy",alt:""}})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"each-filter-option"},[e("div",{staticClass:"filter-page"},[t._v("Results")]),t._v(" "),e("h4",{staticClass:"filter-label input"},[t._v("10")]),t._v(" "),e("div",{staticClass:"filter-box"},[e("img",{staticClass:"filter-icon check",attrs:{src:"https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f1f6007a954c77c293682c_check-mark-icon%201.svg",loading:"lazy",alt:""}})])])},function(){var t=this,e=t._self._c;return e("thead",[e("tr",[e("td",[t._v("S/N")]),t._v(" "),e("td",[t._v("Image")]),t._v(" "),e("td",[t._v("Username")]),t._v(" "),e("td",[t._v("Age")]),t._v(" "),e("td",[t._v("Phone")]),t._v(" "),e("td",[t._v("Email")]),t._v(" "),e("td",[t._v("Nationality")]),t._v(" "),e("td",[t._v("(N) Balance")]),t._v(" "),e("td",[t._v("Registered")]),t._v(" "),e("td",[t._v("From")]),t._v(" "),e("td",[t._v("Status")]),t._v(" "),e("td",[t._v("Actions")])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"table-label"},[e("div",[e("strong",{staticClass:"bold-text"},[t._v("Results")]),t._v(": 10\n            "),e("strong",{staticClass:"bold-text-2"},[t._v("Page")]),t._v(" 1 of 12\n          ")]),t._v(" "),e("ul",{staticClass:"min-table-pagination",attrs:{role:"list"}},[e("li",{staticClass:"pagination-item"},[e("img",{staticClass:"pagination-img",attrs:{src:"https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f1982bc1672608295369ae_arrow-thin-chevron-left-icon.svg",loading:"lazy",alt:""}})]),t._v(" "),e("li",{staticClass:"pagination-item"},[e("div",[t._v("1")])]),t._v(" "),e("li",{staticClass:"pagination-item active"},[e("div",[t._v("2")])]),t._v(" "),e("li",{staticClass:"pagination-item"},[e("div",[t._v("3")])]),t._v(" "),e("li",{staticClass:"pagination-item"},[e("img",{staticClass:"pagination-img",attrs:{src:"https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f1982b466e626df4567c6d_arrow-thin-chevron-right-icon.svg",loading:"lazy",alt:""}})])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"each-filter-option min"},[e("div",{staticClass:"filter-page"},[t._v("Delete")]),t._v(" "),e("div",{staticClass:"filter-box"},[e("img",{staticClass:"filter-icon check",attrs:{src:"https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f1da3b461fa0e7e3c7163c_trash-bin-icon%201.svg",loading:"lazy",alt:""}})])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{AdminConfirmation:n(304).default,AdminNavigation:n(307).default,AdminTopHeader:n(308).default,AdminFooter:n(306).default})}}]);