(window.webpackJsonp=window.webpackJsonp||[]).push([[45,20,21],{360:function(t,e,n){var content=n(370);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(151).default)("2faaf950",content,!0,{sourceMap:!1})},361:function(t,e,n){var content=n(372);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(151).default)("4212b4ce",content,!0,{sourceMap:!1})},362:function(t,e,n){"use strict";n.r(e);var r=n(8),o=(n(49),{data:function(){return{company:""}},methods:{loadScript:function(){var t=document.getElementById("translator");null!=t&&document.body.removeChild(t);var e=document.createElement("script");e.type="text/javascript",e.src="https://translate.yandex.net/website-widget/v1/widget.js?widgetId=ytWidget&pageLang=en&widgetTheme=light&autoMode=false",e.async=!0,e.id="translator";var n=document.querySelector("#footer");n?n.appendChild(e):console.error("Could not find app node to append script element")},setFileURL:function(){this.$store.commit("SET_URL",this.$config.FILE_URL)},getCompany:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/company");case 3:n=e.sent,t.company=n.data.data,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.response.data);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}},mounted:function(){var t=this;this.setFileURL(),this.getCompany(),this.loadScript(),this.$socket.on("fetchedUsers",(function(data,e){t.users=data}))}}),l=(n(369),n(57)),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"footer wf-section",attrs:{id:"footer"}},[t.company?e("div",{staticClass:"div-block-117"},[e("div",{staticClass:"cumstom-container"},[e("div",{staticClass:"div-block-85"},[e("div",{staticClass:"div-block-87"},[e("nuxt-link",{staticClass:"link-block-4 w-inline-block",attrs:{to:{path:"/",query:{username:t.$route.query.username}}}},[e("img",{staticClass:"image-13 logo",attrs:{src:"/images/Mam-Logo.png",loading:"lazy",alt:""}}),t._v(" "),e("h1",{staticClass:"heading-20"},[t._v("\n              © "+t._s((new Date).getFullYear())+", "+t._s(t.company.companyName)+".\n            ")])])],1),t._v(" "),t._m(0),t._v(" "),t._m(1)])])]):t._e()])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"div-block-156"},[e("div",{staticClass:"div-block-86"},[e("a",{staticClass:"link-block-5 w-inline-block",attrs:{href:"#"}},[e("h1",{staticClass:"heading-19"},[t._v("About")])]),e("a",{staticClass:"link-block-5 w-inline-block",attrs:{href:"#"}},[e("h1",{staticClass:"heading-19"},[t._v("Road Map")])]),e("a",{staticClass:"link-block-5 w-inline-block",attrs:{href:"#"}},[e("h1",{staticClass:"heading-19"},[t._v("Document")])]),e("a",{staticClass:"link-block-5 w-inline-block",attrs:{href:"#"}},[e("h1",{staticClass:"heading-19"},[t._v("Distribution")])])]),t._v(" "),e("div",{staticClass:"div-block-88"},[e("a",{staticClass:"link-block-6 w-inline-block",attrs:{href:"#"}},[e("h1",{staticClass:"heading-19"},[t._v("Statistics")])]),e("a",{staticClass:"link-block-6 w-inline-block",attrs:{href:"#"}},[e("h1",{staticClass:"heading-19"},[t._v("FAQ")])]),e("a",{staticClass:"link-block-6 w-inline-block",attrs:{href:"#"}},[e("h1",{staticClass:"heading-19"},[t._v("Plan")])]),e("a",{staticClass:"link-block-6 w-inline-block",attrs:{href:"#"}},[e("h1",{staticClass:"heading-19"},[t._v("Team")])])]),t._v(" "),e("div",{staticClass:"div-block-89"},[e("a",{staticClass:"link-block-7 w-inline-block",attrs:{href:"#"}},[e("h1",{staticClass:"heading-19"},[t._v("Prospectus")])]),e("a",{staticClass:"link-block-7 w-inline-block",attrs:{href:"#"}},[e("h1",{staticClass:"heading-19"},[t._v("Code of Ethics")])]),e("a",{staticClass:"link-block-7 w-inline-block",attrs:{href:"#"}},[e("h1",{staticClass:"heading-19"},[t._v("Annual Reports")])]),e("a",{staticClass:"link-block-7 w-inline-block",attrs:{href:"#"}},[e("h1",{staticClass:"heading-19"},[t._v("Shareholder Reports")])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"div-block-90"},[e("div",{staticClass:"form-block w-form"},[e("div",{staticClass:"form"},[e("label",{staticClass:"heading-19 s",attrs:{for:"email-4"}},[t._v("Subscribe")]),t._v(" "),e("div",{staticClass:"div-block-91"},[e("input",{staticClass:"text-field-3 w-input",attrs:{type:"email",maxlength:"256",placeholder:"Email",id:"email-2"}}),e("input",{staticClass:"submit-button-2 w-button",attrs:{type:"submit",value:"Send","data-wait":"Please wait..."}})])])])])}],!1,null,null,null);e.default=component.exports},363:function(t,e,n){"use strict";n.r(e);n(26);var r=n(8),o=(n(49),{data:function(){return{}},head:function(){return{link:[{rel:"stylesheet",type:"text/css",href:"/css/client.css"}]}},methods:{scrollDown:function(data){document.querySelector("#".concat(data)).scrollIntoView({behavior:"smooth"})},logout:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$auth.logout();case 2:t.$router.push("/");case 3:case"end":return e.stop()}}),e)})))()}},computed:{isAuthenticated:function(){return this.$store.getters.isAuthenticated}}}),l=(n(371),n(57)),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"nav-section top wf-section"},[e("div",{staticClass:"navbar w-nav",attrs:{"data-animation":"default","data-collapse":"medium","data-duration":"400","data-easing":"ease","data-easing2":"ease",role:"banner"}},[e("div",{staticClass:"nav-container"},[e("div",{staticClass:"div-block-165"},[e("div",{staticClass:"brand-holder"},[e("nuxt-link",{staticClass:"brand w-nav-brand",attrs:{to:{path:"/",query:{username:t.$route.query.username}}}},[e("img",{staticClass:"image-brand",attrs:{src:"/images/Mam-Logo.png",loading:"lazy",alt:""}})]),t._v(" "),e("div",{attrs:{id:"ytWidget"}})],1),t._v(" "),e("nav",{staticClass:"nav-menu w-nav-menu",attrs:{role:"navigation"}},["index"==t.$route.name?e("span",{staticClass:"nav-link w-nav-link",on:{click:function(e){return t.scrollDown("about")}}},[t._v("About")]):t._e(),t._v(" "),"index"==t.$route.name?e("span",{staticClass:"nav-link w-nav-link",on:{click:function(e){return t.scrollDown("map")}}},[t._v("Map")]):t._e(),"index"==t.$route.name?e("span",{staticClass:"nav-link w-nav-link",on:{click:function(e){return t.scrollDown("faq")}}},[t._v("Faq")]):t._e(),"index"==t.$route.name?e("span",{staticClass:"nav-link w-nav-link",on:{click:function(e){return t.scrollDown("plan")}}},[t._v("Investment Plan")]):t._e(),"index"==t.$route.name?e("span",{staticClass:"nav-link w-nav-link",on:{click:function(e){return t.scrollDown("team")}}},[t._v("\n            Team")]):t._e(),"index"==t.$route.name?e("span",{staticClass:"nav-link w-nav-link",on:{click:function(e){return t.scrollDown("blog")}}},[t._v("News/Blog")]):t._e(),t._v(" "),"index"==t.$route.name?e("span",{staticClass:"nav-link w-nav-link",on:{click:function(e){return t.scrollDown("contact")}}},[t._v("Contact")]):t._e(),t._v(" "),"index"!=t.$route.name?e("nuxt-link",{staticClass:"nav-link w-nav-link",attrs:{to:{path:"/",query:{username:t.$route.query.username}}}},[t._v("Home")]):t._e(),t._v(" "),e("nuxt-link",{staticClass:"nav-link w-nav-link",class:{hide:t.isAuthenticated},attrs:{to:{path:"/signup",query:{username:t.$route.query.username}}}},[t._v("Sign Up")]),t._v(" "),e("nuxt-link",{staticClass:"nav-link w-nav-link",class:{hide:t.isAuthenticated},attrs:{to:{path:"/login",query:{username:t.$route.query.username}}}},[t._v("Login")]),t._v(" "),e("nuxt-link",{staticClass:"nav-link w-nav-link",class:{hide:!t.isAuthenticated},attrs:{to:"/dashboard"}},[t._v("Dashboard")]),t._v(" "),e("span",{staticClass:"nav-link w-nav-link",class:{hide:!t.isAuthenticated},on:{click:t.logout}},[t._v("Logout")])],1),t._v(" "),t._m(0)])])])])}),[function(){var t=this._self._c;return t("div",{staticClass:"menu-button w-nav-button"},[t("div",{staticClass:"icon-7 w-icon-nav-menu"})])}],!1,null,null,null);e.default=component.exports},369:function(t,e,n){"use strict";n(360)},370:function(t,e,n){var r=n(150)((function(i){return i[1]}));r.push([t.i,"img.image-13.logo{min-width:150px}",""]),r.locals={},t.exports=r},371:function(t,e,n){"use strict";n(361)},372:function(t,e,n){var r=n(150)((function(i){return i[1]}));r.push([t.i,".image-brand{width:100}.nav-link.w-nav-link{cursor:pointer}.nav-link.hide{display:none}",""]),r.locals={},t.exports=r},414:function(t,e,n){var content=n(454);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(151).default)("4f0447c9",content,!0,{sourceMap:!1})},453:function(t,e,n){"use strict";n(414)},454:function(t,e,n){var r=n(150)((function(i){return i[1]}));r.push([t.i,".field-label-2{color:#fb3434;margin-bottom:0;opacity:0}.field-label-2.active{opacity:1}.response-text{color:#09c109}.response-text.error{color:#fb3434}",""]),r.locals={},t.exports=r},533:function(t,e,n){"use strict";n.r(e);var r=n(8),o=n(28),l=(n(49),n(93),n(20),n(11),n(42),n(26),n(362)),c={data:function(){return Object(o.a)({email:"",complete:!0,user:"",company:"",showResponse:!1,isError:!1,response:"",onRequest:!1},"isError",!1)},methods:{callResponse:function(t,e){var n=this;this.response=t,this.isError=e,this.showResponse=!0,this.onRequest=!1,setTimeout((function(){n.showResponse=!1}),6e3)},checkErrorInputs:function(input,data){if("email"==input){if(""==data||!data||!/^\S+@\S+\.\S+$/.test(data))return this.$el.querySelector(".email").classList.add("active"),void(this.isError=!1);this.$el.querySelector(".email").classList.remove("active"),this.isError=!0}},processUserData:function(){var t=this;this.setArray(),this.checkArray.forEach((function(e){t.checkErrorInputs(e.name,e.data)})),this.isError&&this.processEmail()},processEmail:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var form;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return form={email:t.email},e.prev=1,e.next=4,t.$axios.patch("/users/forgotten-password",form);case 4:t.callResponse("Please verify your email and click on the link button to continue.",!1),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),t.callResponse(e.t0.response.data.message,!0);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})))()},setArray:function(){this.checkArray=[{name:"email",data:this.email}]},loadScript:function(){var t=document.getElementById("script");null!=t&&document.body.removeChild(t);var script=document.createElement("script");script.type="text/javascript",script.src="/scripts/client.js",script.async=!0,script.id="script";var e=document.querySelector("#footer");e?e.appendChild(script):console.error("Could not find app node to append script element")},getCompany:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/company");case 3:n=e.sent,t.company=n.data.data,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.response.data);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}},mounted:function(){this.getCompany(),this.loadScript(),this.isAuthenticated&&this.$router.push("/dashboard")},computed:{isAuthenticated:function(){return this.$store.getters.isAuthenticated}},components:{ClientHeader:n(363).default,ClientFooter:l.default}},d=(n(453),n(57)),component=Object(d.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"login"},[e("client-header"),t._v(" "),e("div",{staticClass:"loginhero-section wf-section"},[t._m(0),t._v(" "),e("div",{staticClass:"cumstom-container"},[e("div",{staticClass:"div-block-95 log-hero"},[e("h1",{staticClass:"heading-2"},[t._v(t._s(t.company.companyName))]),t._v(" "),e("h1",{staticClass:"heading-2-second"},[t._v("\n          The best platform to grow your capital.\n        ")]),t._v(" "),e("div",{staticClass:"text-block-16"},[t._v("\n          Make sound investment decisions with the help of our research &\n          analytical assets. With our AI powered market analyzer, our accuracy\n          of daily return is nothing less than expected. All our payments are\n          instant payments.\n        ")])])])]),t._v(" "),e("div",{staticClass:"forgotten-password wf-section"},[e("div",{staticClass:"cumstom-container"},[e("div",{staticClass:"div-block-142"},[e("div",{staticClass:"div-block-140"},[e("h1",{staticClass:"heading-43"},[t._v("FORGOTTEN PASSWORD")]),t._v(" "),e("div",{staticClass:"w-form"},[e("div",[e("label",{staticClass:"field-label-2 email",attrs:{for:"name"}},[t._v("Please fill in your username")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"text-field-4 w-input",attrs:{type:"email",maxlength:"256",placeholder:"Enter Email Address"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._v(" "),e("div",{staticClass:"terms-text"},[t._v("\n                Already have an account?\n                "),e("nuxt-link",{staticClass:"link-2",attrs:{to:{path:"/login",query:{username:t.$route.query.username}}}},[t._v("\n                  click here")])],1),t._v(" "),e("div",{staticClass:"terms-text"},[t._v("\n                Don't have an account?\n                "),e("nuxt-link",{staticClass:"link-2",attrs:{to:{path:"/signup",query:{username:t.$route.query.username}}}},[t._v("\n                  click here")])],1),t._v(" "),t.showResponse?e("div",{staticClass:"response-text",class:{error:t.isError}},[t._v("\n                "+t._s(t.response)+"\n              ")]):t._e(),t._v(" "),e("input",{staticClass:"link-block-2 w-button",attrs:{type:"submit",value:"LOGIN"},on:{click:t.processUserData}})])])])])])]),t._v(" "),e("client-footer")],1)}),[function(){var t=this._self._c;return t("div",{staticClass:"div-block-163"},[t("img",{staticClass:"image-45",attrs:{src:"https://uploads-ssl.webflow.com/634f65db6f66af39a9853ff1/6356149fa7b90c075dd07b8e_scroll-down%20(1).png",loading:"lazy",alt:""}})])}],!1,null,null,null);e.default=component.exports;installComponents(component,{ClientHeader:n(363).default,ClientFooter:n(362).default})}}]);