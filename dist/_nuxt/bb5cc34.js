(window.webpackJsonp=window.webpackJsonp||[]).push([[44,15,16],{359:function(t,e,n){var content=n(368);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(150).default)("48d5506b",content,!0,{sourceMap:!1})},361:function(t,e,n){"use strict";n.r(e);var r=n(8),o=(n(49),{data:function(){return{company:""}},methods:{loadScript:function(){var t=document.getElementById("translator");null!=t&&document.body.removeChild(t);var e=document.createElement("script");e.type="text/javascript",e.src="https://translate.yandex.net/website-widget/v1/widget.js?widgetId=ytWidget&pageLang=en&widgetTheme=light&autoMode=false",e.async=!0,e.id="translator";var n=document.querySelector("#footer");n?n.appendChild(e):console.error("Could not find app node to append script element")},getCompany:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/company");case 3:n=e.sent,t.company=n.data.data,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.response.data);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}},mounted:function(){this.getCompany(),this.loadScript()}}),l=n(57),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"footer wf-section",attrs:{id:"footer"}},[t.company?e("div",{staticClass:"div-block-117"},[e("div",{staticClass:"cumstom-container"},[e("div",{staticClass:"div-block-85"},[e("div",{staticClass:"div-block-87"},[e("nuxt-link",{staticClass:"link-block-4 w-inline-block",attrs:{to:{path:"/",query:{username:t.$route.query.username}}}},[e("img",{staticClass:"image-13",attrs:{src:"/images/Mam-Logo.png",loading:"lazy",alt:""}}),t._v(" "),e("h1",{staticClass:"heading-20"},[t._v("\n              © "+t._s((new Date).getFullYear())+", "+t._s(t.company.companyName)+".\n            ")])])],1),t._v(" "),t._m(0),t._v(" "),t._m(1)])])]):t._e()])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"div-block-156"},[e("div",{staticClass:"div-block-86"},[e("a",{staticClass:"link-block-5 w-inline-block",attrs:{href:"#"}},[e("h1",{staticClass:"heading-19"},[t._v("About")])]),e("a",{staticClass:"link-block-5 w-inline-block",attrs:{href:"#"}},[e("h1",{staticClass:"heading-19"},[t._v("Road Map")])]),e("a",{staticClass:"link-block-5 w-inline-block",attrs:{href:"#"}},[e("h1",{staticClass:"heading-19"},[t._v("Token")])]),e("a",{staticClass:"link-block-5 w-inline-block",attrs:{href:"#"}},[e("h1",{staticClass:"heading-19"},[t._v("Team")])])]),t._v(" "),e("div",{staticClass:"div-block-88"},[e("a",{staticClass:"link-block-6 w-inline-block",attrs:{href:"#"}},[e("h1",{staticClass:"heading-19"},[t._v("Services")])]),e("a",{staticClass:"link-block-6 w-inline-block",attrs:{href:"#"}},[e("h1",{staticClass:"heading-19"},[t._v("Statistic")])]),e("a",{staticClass:"link-block-6 w-inline-block",attrs:{href:"#"}},[e("h1",{staticClass:"heading-19"},[t._v("White Paper")])]),e("a",{staticClass:"link-block-6 w-inline-block",attrs:{href:"#"}},[e("h1",{staticClass:"heading-19"},[t._v("FAQ")])])]),t._v(" "),e("div",{staticClass:"div-block-89"},[e("a",{staticClass:"link-block-7 w-inline-block",attrs:{href:"#"}},[e("h1",{staticClass:"heading-19"},[t._v("White Paper")])]),e("a",{staticClass:"link-block-7 w-inline-block",attrs:{href:"#"}},[e("h1",{staticClass:"heading-19"},[t._v("Technical Paper")])]),e("a",{staticClass:"link-block-7 w-inline-block",attrs:{href:"#"}},[e("h1",{staticClass:"heading-19"},[t._v("Business Summary")])]),e("a",{staticClass:"link-block-7 w-inline-block",attrs:{href:"#"}},[e("h1",{staticClass:"heading-19"},[t._v("Brand Resources")])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"div-block-90"},[e("div",{staticClass:"form-block w-form"},[e("div",{staticClass:"form"},[e("label",{staticClass:"heading-19 s",attrs:{for:"email-4"}},[t._v("Subscribe")]),t._v(" "),e("div",{staticClass:"div-block-91"},[e("input",{staticClass:"text-field-3 w-input",attrs:{type:"email",maxlength:"256",placeholder:"Email",id:"email-2"}}),e("input",{staticClass:"submit-button-2 w-button",attrs:{type:"submit",value:"Send","data-wait":"Please wait..."}})])])])])}],!1,null,null,null);e.default=component.exports},362:function(t,e,n){"use strict";n.r(e);var r=n(8),o=(n(49),{data:function(){return{}},head:function(){return{link:[{rel:"stylesheet",type:"text/css",href:"/css/client.css"}]}},methods:{scrollDown:function(data){document.querySelector("#".concat(data)).scrollIntoView({behavior:"smooth"})},logout:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$auth.logout();case 2:t.$router.push("/");case 3:case"end":return e.stop()}}),e)})))()}},computed:{isAuthenticated:function(){return this.$store.getters.isAuthenticated}}}),l=(n(367),n(57)),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"nav-section top wf-section"},[e("div",{staticClass:"navbar w-nav",attrs:{"data-animation":"default","data-collapse":"medium","data-duration":"400","data-easing":"ease","data-easing2":"ease",role:"banner"}},[e("div",{staticClass:"nav-container"},[e("div",{staticClass:"div-block-165"},[e("div",{staticClass:"brand-holder"},[e("nuxt-link",{staticClass:"brand w-nav-brand",attrs:{to:{path:"/",query:{username:t.$route.query.username}}}},[e("img",{staticClass:"image-brand",attrs:{src:"/images/Mam-Logo.png",loading:"lazy",alt:""}})]),t._v(" "),e("div",{attrs:{id:"ytWidget"}})],1),t._v(" "),e("nav",{staticClass:"nav-menu w-nav-menu",attrs:{role:"navigation"}},[e("span",{staticClass:"nav-link w-nav-link",on:{click:function(e){return t.scrollDown("about")}}},[t._v("About")]),t._v(" "),e("span",{staticClass:"nav-link w-nav-link",on:{click:function(e){return t.scrollDown("map")}}},[t._v("Map")]),e("span",{staticClass:"nav-link w-nav-link",on:{click:function(e){return t.scrollDown("faq")}}},[t._v("Faq")]),e("span",{staticClass:"nav-link w-nav-link",on:{click:function(e){return t.scrollDown("plan")}}},[t._v("Investment Plan")]),e("span",{staticClass:"nav-link w-nav-link",on:{click:function(e){return t.scrollDown("team")}}},[t._v("\n            Team")]),e("span",{staticClass:"nav-link w-nav-link",on:{click:function(e){return t.scrollDown("blog")}}},[t._v("News/Blog")]),t._v(" "),e("span",{staticClass:"nav-link w-nav-link",on:{click:function(e){return t.scrollDown("contact")}}},[t._v("Contact")]),t._v(" "),t.isAuthenticated?t._e():e("nuxt-link",{staticClass:"nav-link w-nav-link",attrs:{to:{path:"/signup",query:{username:t.$route.query.username}}}},[t._v("Sign Up")]),t._v(" "),t.isAuthenticated?t._e():e("nuxt-link",{staticClass:"nav-link w-nav-link",attrs:{to:{path:"/login",query:{username:t.$route.query.username}}}},[t._v("Login")]),t._v(" "),t.isAuthenticated?e("nuxt-link",{staticClass:"nav-link w-nav-link",attrs:{to:"/dashboard"}},[t._v("Dashboard")]):t._e()],1),t._v(" "),t._m(0)])])])])}),[function(){var t=this._self._c;return t("div",{staticClass:"menu-button w-nav-button"},[t("div",{staticClass:"icon-7 w-icon-nav-menu"})])}],!1,null,null,null);e.default=component.exports},367:function(t,e,n){"use strict";n(359)},368:function(t,e,n){var r=n(149)((function(i){return i[1]}));r.push([t.i,".image-brand{width:100}",""]),r.locals={},t.exports=r},393:function(t,e,n){var content=n(433);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(150).default)("24098f86",content,!0,{sourceMap:!1})},432:function(t,e,n){"use strict";n(393)},433:function(t,e,n){var r=n(149)((function(i){return i[1]}));r.push([t.i,".field-label-2{color:#fb3434;margin-bottom:0;opacity:0}.field-label-2.active{opacity:1}.response-text{color:#09c109}.response-text.error{color:#fb3434}",""]),r.locals={},t.exports=r},470:function(t,e,n){"use strict";n.r(e);var r=n(8),o=n(28),l=(n(49),n(93),n(13),n(42),n(26),n(361)),c={data:function(){return Object(o.a)({cPassword:"",password:"",complete:!0,user:"",showResponse:!1,isError:!1,response:"",onRequest:!1},"isError",!1)},methods:{callResponse:function(t,e){var n=this;this.response=t,this.isError=e,this.showResponse=!0,this.onRequest=!1,setTimeout((function(){n.showResponse=!1}),6e3)},checkErrorInputs:function(input,data){if("password"==input){if(""==data||!data||data.length<6)return this.$el.querySelector(".password").classList.add("active"),this.isError=!1,!1;this.$el.querySelector(".password").classList.remove("active"),this.isError=!0}else if("cPassword"==input){if(!data||data!=this.password)return this.$el.querySelector(".cPassword").classList.add("active"),this.isError=!1,!1;this.$el.querySelector(".cPassword").classList.remove("active"),this.isError=!0}},processUserData:function(){var t=this;this.setArray(),this.checkArray.forEach((function(e){t.checkErrorInputs(e.name,e.data)})),this.isError&&this.processPassword()},processPassword:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var form;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return form={password:t.password,cPassword:t.cPassword},e.prev=1,e.next=4,t.$axios.patch("/users/reset-password/".concat(t.$route.query.token),form);case 4:t.cPassword="",t.password="",t.callResponse("Your password has been reset successfully, kindly login to continue.",!1),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),t.callResponse(e.t0.response.data.message,!0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))()},setArray:function(){this.checkArray=[{name:"password",data:this.password},{name:"cPassword",data:this.cPassword}]},loadScript:function(){var t=document.getElementById("script");null!=t&&document.body.removeChild(t);var script=document.createElement("script");script.type="text/javascript",script.src="/scripts/client.js",script.async=!0,script.id="script";var e=document.querySelector("#footer");e?e.appendChild(script):console.error("Could not find app node to append script element")}},mounted:function(){this.loadScript(),this.isAuthenticated&&this.$router.push("/dashboard")},computed:{isAuthenticated:function(){return this.$store.getters.isAuthenticated}},components:{ClientHeader:n(362).default,ClientFooter:l.default}},d=(n(432),n(57)),component=Object(d.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"login"},[e("client-header"),t._v(" "),t._m(0),t._v(" "),e("div",{staticClass:"forgotten-password wf-section"},[e("div",{staticClass:"cumstom-container"},[e("div",{staticClass:"div-block-142"},[e("div",{staticClass:"div-block-140"},[e("h1",{staticClass:"heading-43"},[t._v("RESET PASSWORD")]),t._v(" "),e("div",{staticClass:"w-form"},[e("div",[e("label",{staticClass:"field-label-2 password",attrs:{for:"name"}},[t._v("Please fill in your password")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"text-field-4 w-input",attrs:{type:"password",maxlength:"256",placeholder:"Enter Password"},domProps:{value:t.password},on:{blur:function(e){return t.checkErrorInputs("password",t.password)},input:function(e){e.target.composing||(t.password=e.target.value)}}}),e("label",{staticClass:"field-label-2 cPassword",attrs:{for:"email"}},[t._v("Sorry, passwords do not match")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.cPassword,expression:"cPassword"}],staticClass:"text-field-5 w-input",attrs:{type:"password",maxlength:"256",placeholder:"Confirm Password"},domProps:{value:t.cPassword},on:{blur:function(e){return t.checkErrorInputs("cPassword",t.cPassword)},keypress:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.processUserData.apply(null,arguments)},input:function(e){e.target.composing||(t.cPassword=e.target.value)}}}),t._v(" "),t.showResponse?e("div",{staticClass:"response-text",class:{error:t.isError}},[t._v("\n                "+t._s(t.response)+"\n              ")]):t._e(),t._v(" "),e("input",{staticClass:"link-block-2 w-button",attrs:{type:"submit",value:"LOGIN"},on:{click:t.processUserData}})])])])])])]),t._v(" "),e("client-footer")],1)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"loginhero-section wf-section"},[e("div",{staticClass:"div-block-163"},[e("img",{staticClass:"image-45",attrs:{src:"https://uploads-ssl.webflow.com/634f65db6f66af39a9853ff1/6356149fa7b90c075dd07b8e_scroll-down%20(1).png",loading:"lazy",alt:""}})]),t._v(" "),e("div",{staticClass:"cumstom-container"},[e("div",{staticClass:"div-block-95 log-hero"},[e("h1",{staticClass:"heading-2"},[t._v("Global Stock Investment")]),t._v(" "),e("h1",{staticClass:"heading-2-second"},[t._v("for stock investment business")]),t._v(" "),e("div",{staticClass:"text-block-16"},[t._v("\n          Make sound investment decisions with the help of our research &\n          analytical assets. The minimum deposit is $5, and maximum is\n          $100,000. We pay 7 days per week. You may make additional deposits\n          at any time. All our payments are instant payments.\n        ")]),t._v(" "),e("div",{staticClass:"div-block-96"},[e("a",{staticClass:"link-block-8 w-inline-block",attrs:{href:"#"}},[e("img",{staticClass:"image-14",attrs:{src:"https://uploads-ssl.webflow.com/634f65db6f66af39a9853ff1/634f78e65675d95b9dc4502b_smart%20contract.svg",loading:"lazy",alt:""}}),t._v(" "),e("h1",{staticClass:"heading-21"},[t._v("Smart Contact")])]),e("a",{staticClass:"link-block-8 w-inline-block",attrs:{href:"#"}},[e("img",{staticClass:"image-14",attrs:{src:"https://uploads-ssl.webflow.com/634f65db6f66af39a9853ff1/6357dc2cfd34f9fb0426bd59_1220316_youtube_video_icon%201.svg",loading:"lazy",alt:""}}),t._v(" "),e("h1",{staticClass:"heading-21"},[t._v("How to buy Token")])])]),t._v(" "),e("div",{staticClass:"div-block-98"},[e("a",{staticClass:"button-2 w-button",attrs:{href:"#"}},[t._v("White Papper")]),e("a",{staticClass:"button-2 _2nd w-button",attrs:{href:"#"}},[t._v("One Pager")])])])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{ClientHeader:n(362).default,ClientFooter:n(361).default})}}]);