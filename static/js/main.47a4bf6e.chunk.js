(this["webpackJsonplogin-admin"]=this["webpackJsonplogin-admin"]||[]).push([[0],{22:function(e,s,c){},23:function(e,s,c){},41:function(e,s,c){"use strict";c.r(s);var a=c(0),i=c(2),t=c.n(i),n=c(14),l=c.n(n),o=(c(22),c(3)),r=c(16),j=(c(23),c(15)),m=c.n(j),d=c(4),b=c.n(d);var u=function(){var e=Object(i.useState)({name:"",pass:""}),s=Object(r.a)(e,2),c=s[0],t=s[1];return Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("div",{className:"forms-container",children:Object(a.jsxs)("div",{className:"signin-signup",children:[Object(a.jsxs)("form",{action:"#",className:"sign-in-form",onSubmit:function(e){return function(e){e.preventDefault(),console.log("vl",c),m.a.post("https://sever-bs.herokuapp.com/api/v1/admin/login",c,{headers:{"x-api-key":"mewmew"}}).then((function(e){console.log("res",e),"ok"===e.data.msg?(b.a.fire({icon:"success",title:"Login Success",showConfirmButton:!1,timer:1500}),setTimeout((function(){console.log("ok"),window.location.replace("http://www.w3schools.com")}),1500)):b.a.fire({icon:"error",title:"Login Error",showConfirmButton:!1,timer:1500})})).catch((function(e){console.log(e),b.a.fire({title:"Error!",text:"Login Error",icon:"error",confirmButtonText:"Cool"})}))}(e)},children:[Object(a.jsx)("h2",{className:"title",children:"Sign in"}),Object(a.jsxs)("div",{className:"input-field",children:[Object(a.jsx)("i",{className:"fas fa-user"}),Object(a.jsx)("input",{type:"text",placeholder:"Username",value:c.name,onChange:function(e){return t(Object(o.a)(Object(o.a)({},c),{},{name:e.target.value}))}})]}),Object(a.jsxs)("div",{className:"input-field",children:[Object(a.jsx)("i",{className:"fas fa-lock"}),Object(a.jsx)("input",{type:"password",placeholder:"Password",value:c.pass,onChange:function(e){return t(Object(o.a)(Object(o.a)({},c),{},{pass:e.target.value}))}})]}),Object(a.jsx)("input",{type:"submit",value:"Login",className:"btn solid"}),Object(a.jsx)("p",{className:"social-text",children:"Or Sign in with social platforms"}),Object(a.jsxs)("div",{className:"social-media",children:[Object(a.jsx)("a",{href:"#",className:"social-icon",children:Object(a.jsx)("i",{className:"fab fa-facebook-f"})}),Object(a.jsx)("a",{href:"#",className:"social-icon",children:Object(a.jsx)("i",{className:"fab fa-twitter"})}),Object(a.jsx)("a",{href:"#",className:"social-icon",children:Object(a.jsx)("i",{className:"fab fa-google"})}),Object(a.jsx)("a",{href:"#",className:"social-icon",children:Object(a.jsx)("i",{className:"fab fa-linkedin-in"})})]})]}),Object(a.jsxs)("form",{action:"#",className:"sign-up-form",children:[Object(a.jsx)("h2",{className:"title",children:"Sign up"}),Object(a.jsxs)("div",{className:"input-field",children:[Object(a.jsx)("i",{className:"fas fa-user"}),Object(a.jsx)("input",{type:"text",placeholder:"Username"})]}),Object(a.jsxs)("div",{className:"input-field",children:[Object(a.jsx)("i",{className:"fas fa-envelope"}),Object(a.jsx)("input",{type:"email",placeholder:"Email"})]}),Object(a.jsxs)("div",{className:"input-field",children:[Object(a.jsx)("i",{className:"fas fa-lock"}),Object(a.jsx)("input",{type:"password",placeholder:"Password"})]}),Object(a.jsx)("input",{type:"submit",className:"btn",value:"Sign up"}),Object(a.jsx)("p",{className:"social-text",children:"Or Sign up with social platforms"}),Object(a.jsxs)("div",{className:"social-media",children:[Object(a.jsx)("a",{href:"#",className:"social-icon",children:Object(a.jsx)("i",{className:"fab fa-facebook-f"})}),Object(a.jsx)("a",{href:"#",className:"social-icon",children:Object(a.jsx)("i",{className:"fab fa-twitter"})}),Object(a.jsx)("a",{href:"#",className:"social-icon",children:Object(a.jsx)("i",{className:"fab fa-google"})}),Object(a.jsx)("a",{href:"#",className:"social-icon",children:Object(a.jsx)("i",{className:"fab fa-linkedin-in"})})]})]})]})}),Object(a.jsxs)("div",{className:"panels-container",children:[Object(a.jsxs)("div",{className:"panel left-panel",children:[Object(a.jsxs)("div",{className:"content",children:[Object(a.jsx)("h3",{children:"New here ?"}),Object(a.jsx)("p",{children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, ex ratione. Aliquid!"}),Object(a.jsx)("button",{className:"btn transparent",id:"sign-up-btn",onClick:function(){document.querySelector(".container").classList.add("sign-up-mode")},children:"Sign up"})]}),Object(a.jsx)("img",{src:"img/log.svg",className:"image",alt:""})]}),Object(a.jsxs)("div",{className:"panel right-panel",children:[Object(a.jsxs)("div",{className:"content",children:[Object(a.jsx)("h3",{children:"One of us ?"}),Object(a.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum laboriosam ad deleniti."}),Object(a.jsx)("button",{className:"btn transparent",id:"sign-in-btn",onClick:function(){document.querySelector(".container").classList.remove("sign-up-mode")},children:"Sign in"})]}),Object(a.jsx)("img",{src:"img/register.svg",className:"image",alt:""})]})]})]})},f=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,42)).then((function(s){var c=s.getCLS,a=s.getFID,i=s.getFCP,t=s.getLCP,n=s.getTTFB;c(e),a(e),i(e),t(e),n(e)}))};l.a.render(Object(a.jsx)(t.a.StrictMode,{children:Object(a.jsx)(u,{})}),document.getElementById("root")),f()}},[[41,1,2]]]);
//# sourceMappingURL=main.47a4bf6e.chunk.js.map