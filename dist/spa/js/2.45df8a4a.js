(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{dead:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-layout",{attrs:{view:"hHh Lpr fFf"}},[a("q-toolbar",{staticClass:"bg-secondary text-white shadow-2 q-py-md"},[t.CurrentUser?a("div",{staticClass:"text-h5"},[t._v("Welcome"),a("br"),a("b",[t._v(t._s(t.CurrentUser.name))])]):t._e(),a("q-space"),a("q-btn",{attrs:{active:"",label:"Holidays","no-caps":"",unelevated:"",flat:"",to:"/dashboard/home"}}),a("q-btn",{attrs:{label:"Logs","no-caps":"",unelevated:"",flat:"",to:"/dashboard/logs"}}),a("q-btn",{attrs:{label:"Logout","no-caps":"",unelevated:"",color:"black"},on:{click:t.signOutAction}})],1),a("q-page-container",[a("router-view")],1)],1)},s=[],o=a("ded3"),r=a.n(o),c=a("2f62"),l={name:"Dashboard",data(){return{}},computed:r()({},Object(c["c"])({CurrentUser:"auth/CurrentUser"})),methods:r()({signOutAction(){this.signOut().then(()=>{this.$router.push({path:"/"})})}},Object(c["b"])({signOut:"auth/signOut"}))},u=l,i=a("2877"),d=a("4d5a"),b=a("65c6"),h=a("2c91"),p=a("9c40"),g=a("09e3"),v=a("eebe"),w=a.n(v),f=Object(i["a"])(u,n,s,!1,null,null,null);e["default"]=f.exports;w()(f,"components",{QLayout:d["a"],QToolbar:b["a"],QSpace:h["a"],QBtn:p["a"],QPageContainer:g["a"]})}}]);