(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{"56b4":function(r,e,s){"use strict";s.r(e);var t=function(){var r=this,e=r.$createElement,s=r._self._c||e;return s("q-page",{staticClass:" window-height window-width row justify-center items-center"},[s("div",{staticClass:"column q-px-lg",staticStyle:{width:"500px"}},[s("div",{staticClass:"row"},[s("h5",{staticClass:"text-h5 text-white q-my-md"},[r._v("Create Account")])]),s("div",{staticClass:"row text-center"},[s("q-card",{staticClass:"q-pa-lg shadow-1 login-card",staticStyle:{width:"100%"},attrs:{bordered:""}},[s("q-card-section",[s("q-form",{staticClass:"q-gutter-md"},[s("q-input",{attrs:{square:"",clearable:"",type:"text",label:"Your Name","error-message":r.getError("name"),error:!1!==r.getError("name")},model:{value:r.user.name,callback:function(e){r.$set(r.user,"name",e)},expression:"user.name"}}),s("q-input",{attrs:{square:"",clearable:"",type:"email",label:"Enter email","error-message":r.getError("email"),error:!1!==r.getError("email")},model:{value:r.user.email,callback:function(e){r.$set(r.user,"email",e)},expression:"user.email"}}),s("q-input",{attrs:{square:"",clearable:"",type:"password",label:"Create Password","error-message":r.getError("password"),error:!1!==r.getError("password")},model:{value:r.user.password,callback:function(e){r.$set(r.user,"password",e)},expression:"user.password"}}),s("q-input",{attrs:{square:"",clearable:"",type:"password",label:"Confirm Password","error-message":r.getError("password_confirmation"),error:!1!==r.getError("password_confirmation")},model:{value:r.user.password_confirmation,callback:function(e){r.$set(r.user,"password_confirmation",e)},expression:"user.password_confirmation"}})],1)],1),s("q-card-actions",{staticClass:"q-px-md"},[s("q-btn",{staticClass:"full-width",attrs:{unelevated:"",color:"light-blue-7",size:"lg",label:"Register"},on:{click:r.RegisterNewUser}})],1),s("q-card-section",{staticClass:"text-center q-pa-none"},[s("p",{staticClass:"text-grey-6 q-pt-lg"},[s("router-link",{attrs:{to:"/"}},[r._v("Already have an account? Click here to login")])],1)])],1)],1)])])},a=[],o=(s("5319"),s("c973")),i=s.n(o),l=s("ded3"),n=s.n(l),c=s("2f62"),u={name:"RegisterPage",data(){return{formErrors:[],user:{email:"",password:null,password_confirmation:null,name:""}}},methods:n()({RegisterNewUser(){var r=this;return i()((function*(){let e=r;try{yield r.RegisterUser(r.user),e.$router.replace("/")}catch(s){r.formErrors=s.response.data}}))()},getError(r){return!(!this.formErrors["errors"]||!this.formErrors["errors"][r])&&this.formErrors["errors"][r][0]}},Object(c["b"])({RegisterUser:"auth/RegisterUser"}))},d=u,m=s("2877"),p=s("9989"),w=s("f09f"),g=s("a370"),f=s("0378"),b=s("27f9"),h=s("4b7e"),q=s("9c40"),C=s("eebe"),E=s.n(C),v=Object(m["a"])(d,t,a,!1,null,null,null);e["default"]=v.exports;E()(v,"components",{QPage:p["a"],QCard:w["a"],QCardSection:g["a"],QForm:f["a"],QInput:b["a"],QCardActions:h["a"],QBtn:q["a"]})}}]);