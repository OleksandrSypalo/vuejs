webpackJsonp([1],{0:function(t,e,r){t.exports=r("NHnr")},"0dda":function(t,e){},"1/oy":function(t,e){},"9M+g":function(t,e){},AJqI:function(t,e,r){"use strict";var n=r("fKPv"),a=r.n(n),i=(r("VjuZ"),r("ueVu")),o=r("yxUK"),s=o["a"].getToken(),u=s?+i["a"].get("users",s).id:null,c={data:function(){return{id:null,form:{title:"",description:""}}},beforeMount:function(){var t=+this.$route.params.id,e=i["a"].get("ads",{id:t});e&&u!==+e.authorID&&this.$router.replace("/"+t),t&&e&&(this.form.title=e.title,this.form.description=e.description,this.id=e.id)},methods:{onSubmit:function(){var t,e,r=o["a"].getToken(),n=r?+i["a"].get("users",r).id:null;this.id?(t=this.id,e=i["a"].getID("ads",{id:t})):(t=i["a"].getLastID("ads")+1,e=i["a"].uniq()),i["a"].set("ads",a()({},e,{id:t,title:this.form.title,description:this.form.description,authorID:n,date:Date.now()})),this.$router.replace("/"+t)}}},l=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("b-card",{attrs:{tag:"article","bg-variant":"light",title:"Create Ad"}},[r("b-form",{on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[r("b-form-group",{attrs:{label:"Title:","label-for":"titleArea"}},[r("b-form-input",{attrs:{id:"titleArea",type:"text",required:"",placeholder:"Enter title"},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1),r("b-form-group",{attrs:{label:"Description:","label-for":"descriptionArea"}},[r("b-form-textarea",{attrs:{id:"descriptionArea",placeholder:"Enter description",rows:3,"max-rows":6},model:{value:t.form.description,callback:function(e){t.$set(t.form,"description",e)},expression:"form.description"}})],1),r("b-button",{attrs:{type:"submit",variant:"primary"}},[t._v("\n                "+t._s(t.$route.params.id?"Save":"Create")+"\n            ")])],1)],1)],1)},d=[],f=r("XyMi"),m=!1,g=null,h=null,p=null,b=Object(f["a"])(c,l,d,m,g,h,p);e["a"]=b.exports},BB2M:function(t,e,r){"use strict";r("uDYd"),r("YVn/");var n=r("ueVu"),a=r("L/hj"),i=r("yxUK"),o=i["a"].getToken(),s=o?+n["a"].get("users",o).id:null,u=Object.values(n["a"].get("users")),c={data:function(){return{perPage:5,currentPage:1,fields:[{key:"id",label:"#"},{key:"title",label:"Title",formatter:function(t,e,r){return{title:a["a"].substring(t,16),id:r.id}}},{key:"description",label:"Description",formatter:function(t){return a["a"].substring(t,50)}},{key:"authorID",label:"Author",formatter:function(t){var e="-";return u.forEach(function(r){if(+r.id===+t)return e=r.username,!1}),e}},{key:"date",label:"Date",formatter:function(t){return t?a["a"].replaceDate(t):"-"}},{key:"hasEdit",label:"Edit",formatter:function(t,e,r){return{is:!(!s||+s!==+r.authorID),id:r.id}}}],items:l()}},computed:{currentItems:function(){var t=(this.currentPage-1)*this.perPage;return this.items.slice(t,t+this.perPage)},totalRows:function(){return this.items.length}},created:function(){var t=this;i["a"].onChangeTriggersData.push(function(e){var r=e?+n["a"].get("users",i["a"].getToken()).id:null;t.fields[5].formatter=function(t,e,n){return{is:!(!r||+r!==+n.authorID),id:n.id}}}),n["a"].setTrigger(["set","drop"],"ads",function(){t.items=l()})}};function l(){return Object.values(n["a"].get("ads")).sort(function(t,e){return t.id>e.id?1:-1})}var d=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"margin-bottom-1rem"},[r("component-login")],1),r("b-table",{staticClass:"margin-bottom-1rem",attrs:{responsive:"",striped:"",fields:t.fields,items:t.currentItems,"show-empty":!0},scopedSlots:t._u([{key:"hasEdit",fn:function(e){return[e.value.is?r("div",{staticClass:"width-4_5"},[r("b-button",{attrs:{to:{name:"delete",params:{id:e.value.id}},variant:"danger",size:"sm"}},[r("v-icon",{attrs:{name:"trash-2"}})],1),r("b-button",{attrs:{to:{name:"edit",params:{id:e.value.id}},variant:"primary",size:"sm"}},[r("v-icon",{attrs:{name:"edit-2"}})],1)],1):t._e()]}},{key:"title",fn:function(e){return[r("router-link",{attrs:{to:{name:"ad",params:{id:e.value.id}}}},[t._v("\n                "+t._s(e.value.title)+"\n            ")])]}}])},[r("template",{slot:"empty"},[r("div",[r("p",[t._v("There are no records to show")]),r("b-link",{attrs:{to:"/init-demo"}},[t._v("Create ads and users for demo")])],1)])],2),r("b-pagination",{attrs:{align:"right","per-page":t.perPage,"total-rows":t.totalRows},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)},f=[],m=r("XyMi");function g(t){r("ME10")}var h=!1,p=g,b=null,v=null,y=Object(m["a"])(c,d,f,h,p,b,v);e["a"]=y.exports},EWfp:function(t,e,r){"use strict";var n=r("0dda"),a=r.n(n),i=r("TIGI"),o=r("XyMi");function s(t){r("mCNX")}var u=!1,c=s,l=null,d=null,f=Object(o["a"])(a.a,i["a"],i["b"],u,c,l,d);e["default"]=f.exports},EiBX:function(t,e,r){"use strict";var n=r("ueVu"),a=r("L/hj"),i=r("yxUK"),o=i["a"].getToken(),s=o?+n["a"].get("users",o).id:null,u={data:function(){return{author:"",date:0,title:",",description:"",currentUserHasThisAd:!1}},beforeMount:function(){var t=this.$route.params.id,e=n["a"].get("ads",{id:+t});this.author=n["a"].get("users",{id:e.authorID}).username,this.date=e.date,this.title=e.title,this.description=e.description,this.currentUserHasThisAd=+e.authorID===s},computed:{subtitle:function(){var t=a["a"].replaceDate(this.date),e=this.author.trim();return"".concat(e," (").concat(t,")")}}},c=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("b-card",{attrs:{title:t.title,tag:"article","sub-title":t.subtitle}},[r("p",{staticClass:"card-text"},[t._v("\n            "+t._s(t.description)+"\n        ")]),t.currentUserHasThisAd?r("div",[r("b-button",{attrs:{to:{name:"delete",params:{id:t.$route.params.id}},variant:"danger"}},[t._v("\n                Delete\n            ")]),t._v("\n             \n            "),r("b-button",{attrs:{to:{name:"edit",params:{id:t.$route.params.id}},variant:"primary"}},[t._v("\n                Edit\n            ")])],1):t._e()])],1)},l=[],d=r("XyMi"),f=!1,m=null,g=null,h=null,p=Object(d["a"])(u,c,l,f,m,g,h);e["a"]=p.exports},Id91:function(t,e){},Jmt5:function(t,e){},"L/hj":function(t,e,r){"use strict";var n=r("I+bT"),a=r.n(n);e["a"]={randomText:function(t){return a.a.getTextBlock({minWords:t.wordsLength,maxWords:t.wordsLength,minSentences:t.sentencesLength||1,maxSentences:t.sentencesLength||1,terminalPunctuation:t.sentencesLength?".":" "}).trim()},randomNumber:function(t){return Math.floor(Math.random()*t)},transformNumber:function(t){return(1===(""+t).length?"0":"")+t},replaceDate:function(t){var e=new Date(t),r=[this.transformNumber(e.getMonth()+1),this.transformNumber(e.getDate()),this.transformNumber(e.getFullYear())].join("/"),n=[this.transformNumber(e.getHours()),this.transformNumber(e.getMinutes())].join(":");return"".concat(r," ").concat(n)},substring:function(t,e){return t.length>e?t.substring(0,e)+"...":t}}},ME10:function(t,e){},NHnr:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(t){var e=r("XtiL"),n=(r.n(e),r("/5sW")),a=r("/ocq"),i=r("e6fC"),o=r("Jmt5"),s=(r.n(o),r("9M+g")),u=(r.n(s),r("yJzH")),c=r("ueVu"),l=r("mSix"),d=r("yxUK"),f=r("EWfp"),m=r("BB2M"),g=r("EiBX"),h=r("xJsL"),p=r("lfLh"),b=r("AJqI");n["a"].use(a["a"]),n["a"].use(i["a"]),n["a"].use(u["a"],"v-icon"),n["a"].component("component-navbar",p["a"]),n["a"].component("component-login",h["a"]);var v=new a["a"]({mode:"history",base:t,routes:[{path:"/",component:m["a"]},{path:"/edit",component:b["a"],beforeEnter:function(t,e,r){d["a"].loggedIn()?r():r({path:"/login",query:{redirect:t.fullPath}})}},{path:"/edit/:id",component:b["a"],name:"edit",beforeEnter:function(t,e,r){d["a"].loggedIn()?r():r({path:"/login",query:{redirect:t.fullPath}})}},{path:"/login",component:h["a"]},{path:"/logout",beforeEnter:function(t,e,r){d["a"].logout(),r("/")}},{path:"/delete/:id",name:"delete",beforeEnter:function(t,e,r){t.params&&t.params.id&&c["a"].drop("ads",{id:+t.params.id}),r("/")}},{path:"/init-demo",beforeEnter:function(t,e,r){d["a"].logout(),c["a"].use(l["a"]).initForDemo(!0),r("/"),window.setTimeout(function(){window.location.reload()},1)}},{path:"/:id",name:"ad",component:g["a"],beforeEnter:function(t,e,r){/^[0-9]+$/.test(t.params.id)&&Number.isInteger(+t.params.id)?r():r("/")}}]});new n["a"]({el:"#app",router:v,render:function(t){return t(f["default"])}})}.call(e,"/")},TIGI:function(t,e,r){"use strict";r.d(e,"a",function(){return n}),r.d(e,"b",function(){return a});var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-container",{attrs:{id:"app"}},[r("div",{staticClass:"row justify-content-center"},[r("div",{staticClass:"col-12 margin-bottom-1rem"},[r("component-navbar")],1),r("div",{staticClass:"col-12 margin-bottom-1rem"},[r("router-view")],1)])])},a=[]},fZI6:function(t,e){},iRvD:function(t,e){},lfLh:function(t,e,r){"use strict";var n=r("yxUK"),a={data:function(){return{loggedIn:n["a"].loggedIn(),customUsername:n["a"].username()}},created:function(){var t=this;n["a"].onChangeTriggersData.push(function(e){t.loggedIn=e,t.customUsername=e?n["a"].username():""})}},i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"navbar-shadow"},[r("b-navbar",{attrs:{toggleable:"md",fixed:"top",type:"dark",variant:"primary"}},[r("b-navbar-brand",{attrs:{to:"/"}},[t._v("Hello "+t._s(t.customUsername||"guest")+"!")]),r("b-navbar-nav",[t.loggedIn?r("b-nav-item",{attrs:{to:"/edit",left:""}},[t._v("Create Ad")]):t._e()],1),r("b-navbar-nav",{staticClass:"ml-auto"},[t.loggedIn?r("b-nav-item",{attrs:{to:"/logout",left:""}},[t._v("Logout")]):t._e()],1)],1)],1)},o=[],s=r("XyMi");function u(t){r("fZI6")}var c=!1,l=u,d=null,f=null,m=Object(s["a"])(a,i,o,c,l,d,f);e["a"]=m.exports},mCNX:function(t,e){},mSix:function(t,e,r){"use strict";var n=r("fKPv"),a=r.n(n),i=r("L/hj");function o(t){return{id:t,username:"user"+t,password:"1111"}}function s(t){return{id:t,title:i["a"].randomText({wordsLength:i["a"].randomNumber(5)}),description:i["a"].randomText({wordsLength:i["a"].randomNumber(12),sentencesLength:2}),authorID:Math.random()>.5?1:2,date:Date.now()-(i["a"].randomNumber(1e8)+1e8)}}e["a"]={initForDemo:function(t){if(t||!Object.keys(this.get("users")).length){this.drop("users");for(var e=0;e<2;e++)this.set("users",a()({},this.uniq(),o(e+1)))}if(t||!Object.keys(this.get("ads")).length){this.drop("ads");for(var r=0;r<20;r++)this.set("ads",a()({},this.uniq(),s(r+1)))}}}},ueVu:function(t,e,r){"use strict";var n=r("n12u"),a=(r.n(n),"__db__");e["a"]={opers:["get","set","drop"],uniq:function(){return Date.now()+""+Math.ceil(1e4*Math.random())},getLastID:function(t){var e=this.get(t),r=0;for(var n in e)r=Math.max(r,+e[n].id);return r=Math.max(r,Object.keys(e).length),r},triggersData:{},setTrigger:function(t,e,r){var n=this,a="*"===t?this.opers:t instanceof Array?t:[t];a.forEach(function(t){n.triggersData[t+"."+e]=n.triggersData[t+"."+e]||[],n.triggersData[t+"."+e].push(r)})},getTrigger:function(t,e){this.triggersData[t+"."+e]instanceof Array&&this.triggersData[t+"."+e].forEach(function(t){t()})},pingToDb:function(t){return JSON.parse(localStorage[a+t]||"{}")},getID:function(t,e){var r=this.pingToDb(t),n=!1;if(e instanceof Object)for(var a in r){for(var i in e){if(r[a][i]!==e[i]){n=!1;break}n=a}if(n)break}return n||null},get:function(t,e){var r=this.pingToDb(t);if(!(e instanceof Object))return this.getTrigger("get",t),e?r[e]||{}:r;for(var n in r){var a=!1;for(var i in e){if(r[n][i]!==e[i]){a=!1;break}a=!0}if(a)return this.get(t,n)}},set:function(t,e,r){var n;return r?localStorage[a+t]=JSON.stringify(e):(n=this.pingToDb(t),localStorage[a+t]=JSON.stringify(Object.assign(n,e)),this.getTrigger("set",t)),e},drop:function(t,e){var r;if(e)if(r=this.pingToDb(t),e instanceof Object)for(var n in r){var i=!1;for(var o in e){if(r[n][o]!==e[o]){i=!1;break}i=!0}i&&this.drop(t,n)}else delete r[e],this.set(t,r,!0),this.getTrigger("drop",t);else localStorage.removeItem(a+t)},use:function(t){return Object.assign(this,t)}}},xJsL:function(t,e,r){"use strict";r("VjuZ");var n=r("yxUK"),a={data:function(){return{loggedIn:n["a"].loggedIn(),customUsername:n["a"].username(),username:"user1",password:"1111",error:!1}},methods:{login:function(){var t=this;this.error=!1,n["a"].login({username:this.username,password:this.password},function(e,r){e?t.$router.replace(t.$route.query.redirect||"/"):t.error=r.error||"Unknown error"})}},created:function(){var t=this;n["a"].onChangeTriggersData.push(function(e){t.loggedIn=e,t.customUsername=e?n["a"].username():""})}},i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.loggedIn?t._e():r("div",[r("b-card",{attrs:{tag:"article","bg-variant":"light",title:"Login Form"}},[r("b-form",{staticClass:"row",on:{submit:function(e){return e.preventDefault(),t.login(e)}}},[r("b-form-group",{staticClass:"col-4",attrs:{label:"Username:","label-class":"text-sm-left"}},[r("b-input",{attrs:{id:"username",placeholder:"Enter Username"},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}})],1),r("b-form-group",{staticClass:"col-4",attrs:{label:"Password:","label-class":"text-sm-left"}},[r("b-input",{attrs:{type:"password",id:"password",placeholder:"Enter Password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),r("b-form-group",{staticClass:"col-4",attrs:{label:"&nbsp;"}},[r("b-button",{staticClass:"btn-block",attrs:{type:"submit",variant:"primary"}},[t._v("Submit")])],1)],1),t.error?r("div",[r("b-alert",{staticClass:"no-margin-bottom",attrs:{show:"",variant:"danger"}},[t._v(t._s(t.error)+"\n            ")])],1):t._e()],1)],1)},o=[],s=r("XyMi");function u(t){r("iRvD")}var c=!1,l=u,d=null,f=null,m=Object(s["a"])(a,i,o,c,l,d,f);e["a"]=m.exports},yxUK:function(t,e,r){"use strict";var n=r("fKPv"),a=r.n(n),i=r("ueVu");function o(t,e){var r,n=!1,o=!1,s=0;if(!t.username)return e({error:"Please enter username"});for(var u in r=i["a"].get("users"),r)if(r[u].username===t.username){if(r[u].password===t.password){n=!0,o=u;break}return e({error:"Invalid password!"})}n||(s=i["a"].getLastID("users"),o=i["a"].uniq(),i["a"].set("users",a()({},o,{id:s+1,username:t.username,password:""}))),e({token:o})}e["a"]={login:function(t,e){var r=this,n="function"===typeof e;localStorage.token?n&&e(!0):o(t,function(t){t.error?n&&e(!1,t):(localStorage.token=t.token,n&&e(!0),r.onChange(!0))})},logout:function(t){localStorage.removeItem("token"),"function"===typeof t&&t(),this.onChange(!1)},getToken:function(){return localStorage.token},loggedIn:function(){return!!this.getToken()},username:function(){var t=i["a"].get("users",this.getToken());return t?t.username:null},onChange:function(t){return this.onChangeTriggers(t),t},onChangeTriggersData:[],onChangeTriggers:function(t){this.onChangeTriggersData.forEach(function(e){e(t)})}}},zj2Q:function(t,e){}},[0]);
//# sourceMappingURL=app.59dd133d.js.map