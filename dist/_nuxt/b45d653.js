(window.webpackJsonp=window.webpackJsonp||[]).push([[36,5,6,7,8,16],{303:function(t,e,n){var content=n(310);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(143).default)("c33cd76c",content,!0,{sourceMap:!1})},304:function(t,e,n){"use strict";n.r(e);var r={props:{msg:{type:String},state:{type:Boolean}},methods:{getState:function(){return this.$store.state.confirmState},confirm:function(data){this.$emit("confirm",data)}},computed:{}},c=n(56),component=Object(c.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"confirm-action",class:{hide:t.state}},[e("div",{staticClass:"confirm-box"},[e("div",[t._v(t._s(t.msg))]),t._v(" "),e("div",{staticClass:"confirm-holder"},[e("span",{staticClass:"button w-button",on:{click:function(e){return t.confirm("yes")}}},[t._v("Yes")]),e("span",{staticClass:"button w-button",on:{click:function(e){return t.confirm("no")}}},[t._v("No")])])])])}),[],!1,null,null,null);e.default=component.exports},306:function(t,e,n){"use strict";n.r(e);var r={methods:{setFileURL:function(){this.$store.commit("SET_URL",this.$config.FILE_URL)}},mounted:function(){this.setFileURL()}},c=n(56),component=Object(c.a)(r,(function(){this._self._c;return this._m(0)}),[function(){var t=this._self._c;return t("div",{staticClass:"footer",attrs:{id:"footer"}},[t("div",[this._v("www.kennytechstudios.com")])])}],!1,null,null,null);e.default=component.exports},307:function(t,e,n){"use strict";n.r(e);n(49),n(58),n(26);var r={data:function(){return{navItems:[{name:"Dashboard",image:"dashboard.svg",colored:"colored-dashboard.svg",route:"/admin",activeLink:!1,imageSrc:"dashboard.svg",routePath:"admin"},{name:"Profile",image:"profile.svg",colored:"colored-profile.svg",route:"/admin/profile",activeLink:!1,imageSrc:"profile.svg",routePath:"admin-profile"},{name:"Users",image:"users.svg",colored:"colored-users.svg",route:"/admin/users",activeLink:!1,imageSrc:"users.svg",routePath:"admin-users"},{name:"Add User",image:"user.svg",colored:"colored-user.svg",route:"/admin/add-user/new",activeLink:!1,imageSrc:"user.svg",routePath:"admin-add-user"},{name:"Plans/Accounts",image:"plans.svg",colored:"colored-plans.svg",route:"/admin/plans",activeLink:!1,imageSrc:"plans.svg",routePath:"admin-plans"},{name:"Reviews",image:"reviews.svg",colored:"colored-reviews.svg",route:"/admin/reviews",activeLink:!1,imageSrc:"reviews.svg",routePath:"admin-reviews"},{route:"/admin/currencies",name:"Currency",image:"currency.svg",colored:"colored-currency.svg",activeLink:!1,imageSrc:"currency.svg",routePath:"admin-currencies"},{route:"/admin/transactions/list",name:"Transactions",image:"deposit.svg",colored:"colored-deposit.svg",activeLink:!1,imageSrc:"deposit.svg",routePath:"admin-transactions"},{route:"/admin/email",name:"Emails",image:"emails.svg",colored:"colored-emails.svg",activeLink:!1,imageSrc:"emails.svg",routePath:"admin-email"},{route:"/admin/pages",name:"Pages",image:"pages.svg",colored:"colored-pages.svg",activeLink:!1,imageSrc:"pages.svg",routePath:"admin-pages"},{route:"/admin/settings",name:"Settings",image:"settings.svg",colored:"colored-settings.svg",activeLink:!1,imageSrc:"settings.svg",routePath:"admin-settings"},{name:"Referrals",image:"referrals.svg",colored:"colored-referrals.svg",activeLink:!1,imageSrc:"referrals.svg"},{name:"Logout",image:"logout.svg",colored:"colored-logout.svg",activeLink:!1,imageSrc:"logout.svg"}],route:""}},computed:{navState:function(){return this.$store.state.navState},user:function(){return this.$store.state.auth.user}},methods:{toggleNav:function(){this.$store.commit("TOGGLE_ADMIN_NAV")},activateLink:function(t){t.activeLink=!0,t.imageSrc=t.colored},deactivateLink:function(t){t.activeLink=!1,t.imageSrc=t.image}},mounted:function(){this.route=this.$route.name}},c=(n(309),n(56)),component=Object(c.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"vertical-navbar",class:{show:t.navState}},[e("div",{staticClass:"sticky-navbar"},[e("nuxt-link",{staticClass:"navbar-header",attrs:{to:"/"}},[e("img",{staticClass:"brand",attrs:{src:"/images/Logo.png",loading:"lazy",sizes:"130px",srcset:"/images/Logo.png 500w, /images/Logo.png 800w, /images/Logo.png 1080w, /images/Logo.png 2284w",alt:""}})]),t._v(" "),e("img",{staticClass:"menu-close",attrs:{src:"/images/menu-close.svg",alt:""},on:{click:t.toggleNav}}),t._v(" "),e("ul",{staticClass:"nav-list",attrs:{role:"list"}},[e("li",{staticClass:"nav-list"},t._l(t.navItems,(function(n,i){return e("nuxt-link",{key:i,staticClass:"nav-link w-inline-block",class:{active:t.route==n.routePath||t.route.includes(n.routePath)||n.activeLink},attrs:{to:"".concat(n.route)},on:{mouseenter:function(e){return t.activateLink(n)},mouseleave:function(e){return t.deactivateLink(n)}}},[e("img",{staticClass:"nav-icon",attrs:{src:"/images/".concat(t.route==n.routePath||t.route.includes(n.routePath)?n.colored:n.imageSrc),loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"link-text"},[t._v(t._s(n.name))])])})),1)])],1)])}),[],!1,null,null,null);e.default=component.exports},308:function(t,e,n){"use strict";n.r(e);var r={head:function(){return{link:[{rel:"stylesheet",href:"/css/main.css",type:"text/css"}]}},methods:{toggleNav:function(){this.$store.commit("TOGGLE_ADMIN_NAV")}},computed:{isAuthenticated:function(){return this.$store.getters.isAuthenticated}}},c=n(56),component=Object(c.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-header"},[e("img",{staticClass:"menu",attrs:{src:"/images/menu.svg",loading:"lazy",alt:""},on:{click:t.toggleNav}}),t._v(" "),t._m(0)])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"top-icons"},[e("img",{staticClass:"top-icon",attrs:{src:"/images/profile.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"notification"},[e("div",{staticClass:"badge"}),t._v(" "),e("img",{staticClass:"top-icon",attrs:{src:"/images/notification.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"custom-card pie-chart-holder notify"},[e("h4",{staticClass:"activites"},[t._v("Recent Activies")]),t._v(" "),e("div",{staticClass:"each-activity"},[e("div",{staticClass:"activity-title"},[t._v("Deposit")]),t._v(" "),e("div",{staticClass:"activity-coin"},[e("img",{staticClass:"activity-img",attrs:{src:"https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f1737ae1e45a0c67433779_bitcoin-btc-logo.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"activity-line"})]),t._v(" "),e("div",{staticClass:"activity-value"},[e("h4",{staticClass:"activity-amount"},[t._v("$12.00")]),t._v(" "),e("div",{staticClass:"activity-time"},[t._v("12/06/2022 9:04 AM")])])]),t._v(" "),e("div",{staticClass:"each-activity"},[e("div",{staticClass:"activity-title"},[t._v("Withdrawal")]),t._v(" "),e("div",{staticClass:"activity-coin"},[e("img",{staticClass:"activity-img",attrs:{src:"https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f173795a0b873c5097be44_tether-usdt-logo.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"activity-line"})]),t._v(" "),e("div",{staticClass:"activity-value"},[e("h4",{staticClass:"activity-amount"},[t._v("$12.00")]),t._v(" "),e("div",{staticClass:"activity-time"},[t._v("12/06/2022 9:04 AM")])])]),t._v(" "),e("div",{staticClass:"each-activity"},[e("div",{staticClass:"activity-title"},[t._v("Deposit")]),t._v(" "),e("div",{staticClass:"activity-coin"},[e("img",{staticClass:"activity-img",attrs:{src:"https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f173795a0b8708f697be43_tron-trx-logo.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"activity-line"})]),t._v(" "),e("div",{staticClass:"activity-value"},[e("h4",{staticClass:"activity-amount"},[t._v("$12.00")]),t._v(" "),e("div",{staticClass:"activity-time"},[t._v("12/06/2022 9:04 AM")])])]),t._v(" "),e("div",{staticClass:"each-activity"},[e("div",{staticClass:"activity-title"},[t._v("Deposit")]),t._v(" "),e("div",{staticClass:"activity-coin"},[e("img",{staticClass:"activity-img",attrs:{src:"https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f1737ae1e45a0c67433779_bitcoin-btc-logo.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"activity-line"})]),t._v(" "),e("div",{staticClass:"activity-value"},[e("h4",{staticClass:"activity-amount"},[t._v("$12.00")]),t._v(" "),e("div",{staticClass:"activity-time"},[t._v("12/06/2022 9:04 AM")])])])])]),t._v(" "),e("img",{staticClass:"top-icon",attrs:{src:"/images/logout.svg",loading:"lazy",alt:""}})])}],!1,null,null,null);e.default=component.exports},309:function(t,e,n){"use strict";n(303)},310:function(t,e,n){var r=n(142)((function(i){return i[1]}));r.push([t.i,".vertical-navbar{transition:all .3s}.menu-close{display:none;position:absolute;right:20px;top:90px;width:20px}.menu-close,.nav-list a{cursor:pointer}@media screen and (max-width:991px){.vertical-navbar.show{left:0;z-index:999}.menu-close{display:block}}@media screen and (max-width:380px){.vertical-navbar.show{width:100%}}",""]),r.locals={},t.exports=r},311:function(t,e,n){"use strict";n.r(e);var r={},c=n(56),component=Object(c.a)(r,(function(){this._self._c;return this._m(0)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"custom-card plan"},[e("h4",{staticClass:"page-title"},[t._v("INSTRUCTION")]),t._v(" "),e("div",{staticClass:"instruction"},[t._v("\n    Kindly fill in the required fields above to create a plan, in the case of\n    any confusion on how the above form works, kindly visit our\n    "),e("span",{staticClass:"custom-link"},[t._v("youtub link")]),t._v(", or our\n    "),e("span",{staticClass:"custom-link"},[t._v("website ")]),t._v("to watch the video tutorial\n    related to this form.\n  ")])])}],!1,null,null,null);e.default=component.exports},342:function(t,e,n){var content=n(380);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(143).default)("73116bbe",content,!0,{sourceMap:!1})},379:function(t,e,n){"use strict";n(342)},380:function(t,e,n){var r=n(142)((function(i){return i[1]}));r.push([t.i,".banner.symbol{height:35px;width:auto}",""]),r.locals={},t.exports=r},409:function(t,e,n){"use strict";n.r(e);n(57),n(26);var r=n(8),c=(n(48),n(90),n(304)),o={data:function(){return{showEditButton:"",showTransactionList:!1,showAccountList:!1,transactionTypes:["Deposit","Loan","Withdrawal","Transfer"],transactionType:"Choose Transaction Type",transactions:[],transaction:"",accountType:"Choose Account",account:"",narration:"",amount:"",date:"",user:"",receiverBank:"",receiverName:"",receiverAddress:"",response:"",responseState:!1,showResponse:!1,confirmMessage:"",confirmState:!0,editingItem:""}},methods:{checkId:function(){return null==this.$route.params||24!=this.$route.params.id.length?(this.showEditButton=!1,!1):(this.showEditButton=!0,!0)},formatDate:function(data){var t=new Date(data).getTime();return new Intl.DateTimeFormat("en-US",{year:"numeric",month:"long",day:"numeric",suffix:function(t){return 1===t||21===t||31===t?"st":2===t||22===t?"nd":3===t||23===t?"rd":"th"}}).format(t)},showResponseMsg:function(t,e){var n=this;this.response=t,this.responseState=e,this.showResponse=!0,setTimeout((function(){n.response="",n.showResponse=!1}),6e3)},cleareInputs:function(){this.editingItem="",this.transactionType="Choose Transaction Type",this.accountType="Choose Account",this.account="",this.narration="",this.amount="",this.date="",this.receiverBank="",this.receiverName="",this.receiverAddress=""},selectTransaction:function(t){this.transactionType=t,this.showTransactionList=!1},selectAccount:function(t){this.accountType=t.name,this.account=t,this.showAccountList=!1},returnConfirmation:function(data){this.confirmState=!0,this.confirmMessage="","yes"==data&&this.approveTransaction()},startAproveTransaction:function(t){this.confirmMessage="Are you sure you want to approve this transaction?",this.confirmState=!1,this.editingItem=t},procesTransactionData:function(){var form=new FormData;form.append("transactionType",this.transactionType),form.append("account",JSON.stringify(this.account)),form.append("amount",this.amount),form.append("narration",this.narration),this.user&&form.append("username",this.user.username),"Transfer"==this.transactionType&&(form.append("receiverName",this.receiverName),form.append("receiverAddress",this.receiverAddress),form.append("receiverBank",this.receiverBank),form.append("sender",this.user.username)),this.createTransaction(form)},createTransaction:function(form){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.post("/transactions",form);case 3:t.getTransactions(),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),t.showResponseMsg(e.t0.response.data.message);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))()},getUser:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,e.$axios.get("/users/".concat(t));case 3:r=n.sent,e.user=r.data.data,n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0.response.data.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))()},approveTransaction:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat((new Date).getDate(),"/").concat((new Date).getMonth(),"/").concat((new Date).getFullYear()),t.editingItem.date=n,e.prev=2,e.next=5,t.$axios.patch("/transactions/".concat(t.editingItem._id),t.editingItem);case 5:t.getTransactions(),t.cleareInputs(),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),console.log(e.t0.response.data.message);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})))()},getTransactions:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/transactions");case 3:n=e.sent,t.transactions=n.data.data,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.response.data.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}},mounted:function(){this.checkId()&&this.getUser(this.$route.params.id),this.getTransactions()},computed:{FILE_URL:function(){return this.$store.state.fileURL}},components:{Instruction:n(311).default,AdminConfirmation:c.default}},l=(n(379),n(56)),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"main-wrapper transactions"},[e("admin-confirmation",{attrs:{msg:t.confirmMessage,state:t.confirmState},on:{confirm:t.returnConfirmation}}),t._v(" "),e("admin-navigation"),t._v(" "),e("div",{staticClass:"body-wrapper"},[e("admin-top-header"),t._v(" "),e("div",{staticClass:"content-wrapper"},[e("div",{staticClass:"custom-card plan"},[e("h4",{staticClass:"page-title"},[t._v("TRANSACTION HISTORY")]),t._v(" "),t._m(0),t._v(" "),e("div",{staticClass:"table-wrapper"},[e("table",{staticClass:"custom-table"},[t._m(1),t._v(" "),e("tbody",t._l(t.transactions,(function(n,r){return e("tr",{key:n._id},[e("td",[t._v(t._s(r+1))]),t._v(" "),e("td",[e("img",{staticClass:"banner symbol",attrs:{src:"".concat(t.FILE_URL,"/").concat(n.symbol),alt:""}})]),t._v(" "),e("td",[t._v(t._s(n.username))]),t._v(" "),e("td",[t._v(t._s(n.account.name))]),t._v(" "),e("td",[t._v(t._s(n.amount))]),t._v(" "),e("td",[t._v(t._s(n.transactionType))]),t._v(" "),e("td",[t._v(t._s(t.formatDate(n.dateCreated)))]),t._v(" "),e("td",[t._v(t._s(n.receiverBank))]),t._v(" "),e("td",[t._v(t._s(n.receiverName))]),t._v(" "),e("td",[t._v(t._s(n.receiverAddress))]),t._v(" "),e("td",[t._v("\n                  "+t._s(n.narration)+"\n                ")]),t._v(" "),e("td",[n.status?e("div",{staticClass:"status success"},[t._v("\n                    Approved\n                  ")]):e("div",{staticClass:"status",on:{click:function(e){return t.startAproveTransaction(n)}}},[t._v("\n                    Draft\n                  ")])])])})),0)])]),t._v(" "),t._m(2),t._v(" "),t.showEditButton?e("div",{staticClass:"input-wrapper w-form"},[e("form",{staticClass:"input-form",attrs:{action:"#"}},[e("div",{staticClass:"each-input"},[e("label",{staticClass:"input-label",attrs:{for:"name-4"}},[t._v("Transaction Type")]),t._v(" "),e("h4",{staticClass:"select-display",on:{click:function(e){t.showTransactionList=!t.showTransactionList}}},[t._v("\n                "+t._s(t.transactionType)+"\n              ")]),t._v(" "),e("ul",{staticClass:"filter-list down",class:{hide:!t.showTransactionList},attrs:{role:"list"}},t._l(t.transactionTypes,(function(n,i){return e("li",{key:i,staticClass:"filter-items"},[e("div",{on:{click:function(e){return t.selectTransaction(n)}}},[t._v("\n                    "+t._s(n)+"\n                  ")])])})),0),t._v(" "),e("img",{staticClass:"filter-icon middle",attrs:{src:"/images/caret-down-gray.svg",loading:"lazy",alt:""},on:{click:function(e){t.showTransactionList=!t.showTransactionList}}})]),t._v(" "),e("div",{staticClass:"each-input"},[e("label",{staticClass:"input-label",attrs:{for:"name-4"}},[t._v("Account Type")]),t._v(" "),e("h4",{staticClass:"select-display",on:{click:function(e){t.showAccountList=!t.showAccountList}}},[t._v("\n                "+t._s(t.accountType)+"\n              ")]),t._v(" "),e("ul",{staticClass:"filter-list down",class:{hide:!t.showAccountList},attrs:{role:"list"}},t._l(t.user.accounts,(function(n,i){return e("li",{key:i,staticClass:"filter-items"},[e("div",{on:{click:function(e){return t.selectAccount(n)}}},[t._v("\n                    "+t._s(n.name)+"\n                  ")])])})),0),t._v(" "),e("img",{staticClass:"filter-icon middle",attrs:{src:"/images/caret-down-gray.svg",loading:"lazy",alt:""},on:{click:function(e){t.showAccountList=!t.showAccountList}}})]),t._v(" "),e("div",{staticClass:"each-input"},[t._m(3),e("input",{directives:[{name:"model",rawName:"v-model",value:t.amount,expression:"amount"}],staticClass:"plan-input w-input",attrs:{type:"number"},domProps:{value:t.amount},on:{input:function(e){e.target.composing||(t.amount=e.target.value)}}})]),t._v(" "),"Transfer"==t.transactionType?e("div",{staticClass:"each-input"},[t._m(4),e("input",{directives:[{name:"model",rawName:"v-model",value:t.receiverName,expression:"receiverName"}],staticClass:"plan-input w-input",attrs:{type:"text"},domProps:{value:t.receiverName},on:{input:function(e){e.target.composing||(t.receiverName=e.target.value)}}})]):t._e(),t._v(" "),"Transfer"==t.transactionType?e("div",{staticClass:"each-input"},[t._m(5),e("input",{directives:[{name:"model",rawName:"v-model",value:t.receiverAddress,expression:"receiverAddress"}],staticClass:"plan-input w-input",attrs:{type:"text"},domProps:{value:t.receiverAddress},on:{input:function(e){e.target.composing||(t.receiverAddress=e.target.value)}}})]):t._e(),t._v(" "),"Transfer"==t.transactionType?e("div",{staticClass:"each-input"},[t._m(6),e("input",{directives:[{name:"model",rawName:"v-model",value:t.receiverBank,expression:"receiverBank"}],staticClass:"plan-input w-input",attrs:{type:"text"},domProps:{value:t.receiverBank},on:{input:function(e){e.target.composing||(t.receiverBank=e.target.value)}}})]):t._e(),t._v(" "),e("div",{staticClass:"each-input content"},[e("label",{staticClass:"input-label",attrs:{for:"field-2"}},[t._v("Narration\n                "),e("nuxt-link",{attrs:{to:"/admin/add-user/".concat(t.user._id)}},[t._v(t._s(t.user.username))])],1),t._v(" "),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.narration,expression:"narration"}],staticClass:"plan-input w-input",domProps:{value:t.narration},on:{input:function(e){e.target.composing||(t.narration=e.target.value)}}})]),t._v(" "),t.showResponse?e("div",{staticClass:"response",class:{success:t.responseState}},[t._v("\n              "+t._s(t.response)+"\n            ")]):t._e(),t._v(" "),e("div",{staticClass:"button-holder"},[e("input",{staticClass:"button w-button",attrs:{type:"button",value:"Create Transaction"},on:{click:t.procesTransactionData}}),e("input",{staticClass:"button w-button",attrs:{type:"submit",value:"Cancel","data-wait":"Please wait..."}})])])]):t._e()]),t._v(" "),e("Instruction")],1),t._v(" "),e("admin-footer")],1)],1)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"table-filters"},[e("div",{staticClass:"each-filter-option"},[e("div",{staticClass:"filter-page"},[t._v("Filter")]),t._v(" "),e("img",{staticClass:"filter-icon drop",attrs:{src:"/images/caret-down-gray.svg",loading:"lazy",alt:""}}),t._v(" "),e("h4",{staticClass:"filter-label"},[t._v("All Users")]),t._v(" "),e("ul",{staticClass:"filter-list hide",attrs:{role:"list"}},[e("li",{staticClass:"filter-items"},[e("div",[t._v("All Users")])]),t._v(" "),e("li",{staticClass:"filter-items"},[e("div",[t._v("Active")])]),t._v(" "),e("li",{staticClass:"filter-items"},[e("div",[t._v("Suspended")])]),t._v(" "),e("li",{staticClass:"filter-items"},[e("div",[t._v("Blocked")])])])]),t._v(" "),e("div",{staticClass:"each-filter-option"},[e("div",{staticClass:"filter-page"},[t._v("Sort")]),t._v(" "),e("h4",{staticClass:"filter-label"},[t._v("Name")]),t._v(" "),e("ul",{staticClass:"filter-list hide",attrs:{role:"list"}},[e("li",{staticClass:"filter-items"},[e("div",[t._v("Reg. Date")])]),t._v(" "),e("li",{staticClass:"filter-items"},[e("div",[t._v("Deposit")])]),t._v(" "),e("li",{staticClass:"filter-items"},[e("div",[t._v("Suspended")])]),t._v(" "),e("li",{staticClass:"filter-items"},[e("div",[t._v("Blocked")])])]),t._v(" "),e("img",{staticClass:"filter-icon drop",attrs:{src:"/images/caret-down-gray.svg",loading:"lazy",alt:""}})]),t._v(" "),e("div",{staticClass:"each-filter-option"},[e("div",{staticClass:"filter-page"},[t._v("Results")]),t._v(" "),e("h4",{staticClass:"filter-label input"},[t._v("10")]),t._v(" "),e("div",{staticClass:"filter-box"},[e("img",{staticClass:"filter-icon check",attrs:{src:"/images/check-gray.svg",loading:"lazy",alt:""}})])])])},function(){var t=this,e=t._self._c;return e("thead",[e("tr",[e("td",[t._v("S/N")]),t._v(" "),e("td",[t._v("Symbol")]),t._v(" "),e("td",[t._v("Username")]),t._v(" "),e("td",[t._v("Account Name")]),t._v(" "),e("td",[t._v("Amount")]),t._v(" "),e("td",[t._v("Transaction")]),t._v(" "),e("td",[t._v("Date")]),t._v(" "),e("td",[t._v("Reciever Bank")]),t._v(" "),e("td",[t._v("Reciever Name")]),t._v(" "),e("td",[t._v("Reciever Address")]),t._v(" "),e("td",[t._v("Narration")]),t._v(" "),e("td",[t._v("Status")])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"table-label"},[e("div",[e("strong",{staticClass:"bold-text"},[t._v("Results")]),t._v(": 10\n            "),e("strong",{staticClass:"bold-text-2"},[t._v("Page")]),t._v(" 1 of 12\n          ")]),t._v(" "),e("ul",{staticClass:"min-table-pagination",attrs:{role:"list"}},[e("li",{staticClass:"pagination-item"},[e("img",{staticClass:"pagination-img",attrs:{src:"https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f1982bc1672608295369ae_arrow-thin-chevron-left-icon.svg",loading:"lazy",alt:""}})]),t._v(" "),e("li",{staticClass:"pagination-item"},[e("div",[t._v("1")])]),t._v(" "),e("li",{staticClass:"pagination-item active"},[e("div",[t._v("2")])]),t._v(" "),e("li",{staticClass:"pagination-item"},[e("div",[t._v("3")])]),t._v(" "),e("li",{staticClass:"pagination-item"},[e("img",{staticClass:"pagination-img",attrs:{src:"https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f1982b466e626df4567c6d_arrow-thin-chevron-right-icon.svg",loading:"lazy",alt:""}})])])])},function(){var t=this,e=t._self._c;return e("label",{staticClass:"input-label",attrs:{for:"email-3"}},[t._v("Amount"),e("span",{staticClass:"important"},[t._v("*")])])},function(){var t=this,e=t._self._c;return e("label",{staticClass:"input-label",attrs:{for:"name-4"}},[t._v("Reciever Name"),e("span",{staticClass:"important"},[t._v("*")])])},function(){var t=this,e=t._self._c;return e("label",{staticClass:"input-label",attrs:{for:"name-4"}},[t._v("Reciever Address"),e("span",{staticClass:"important"},[t._v("*")])])},function(){var t=this,e=t._self._c;return e("label",{staticClass:"input-label",attrs:{for:"name-4"}},[t._v("Reciever Bank"),e("span",{staticClass:"important"},[t._v("*")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{AdminConfirmation:n(304).default,AdminNavigation:n(307).default,AdminTopHeader:n(308).default,AdminFooter:n(306).default})}}]);