(this["webpackJsonplogin-admin"]=this["webpackJsonplogin-admin"]||[]).push([[0],{22:function(e,s,a){},23:function(e,s,a){},41:function(e,s,a){"use strict";a.r(s);var c=a(0),i=a(2),t=a.n(i),n=a(14),l=a.n(n),o=(a(22),a(3)),r=a(16),j=(a(23),a(15)),m=a.n(j),d=a(4),b=a.n(d);var u=function(){var e=Object(i.useState)({name:"",pass:""}),s=Object(r.a)(e,2),a=s[0],t=s[1];return Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)("div",{className:"forms-container",children:Object(c.jsxs)("div",{className:"signin-signup",children:[Object(c.jsxs)("form",{action:"#",className:"sign-in-form",onSubmit:function(e){return function(e){e.preventDefault(),console.log("vl",a),m.a.post("https://sever-bs.herokuapp.com/api/v1/admin/login",a,{headers:{"x-api-key":"mewmew"}}).then((function(e){console.log("res",e),"ok"===e.data.msg?(b.a.fire({icon:"success",title:"Login Success",showConfirmButton:!1,timer:1500}),setTimeout((function(){console.log("ok"),window.location.replace("https://oyasumy.github.io/admin-bs-p2")}),1500)):b.a.fire({icon:"error",title:"Login Error",showConfirmButton:!1,timer:1500})})).catch((function(e){console.log(e),b.a.fire({title:"Error!",text:"Login Error",icon:"error",confirmButtonText:"Cool"})}))}(e)},children:[Object(c.jsx)("h2",{className:"title",children:"Sign in"}),Object(c.jsxs)("div",{className:"input-field",children:[Object(c.jsx)("i",{className:"fas fa-user"}),Object(c.jsx)("input",{type:"text",placeholder:"Username",value:a.name,onChange:function(e){return t(Object(o.a)(Object(o.a)({},a),{},{name:e.target.value}))}})]}),Object(c.jsxs)("div",{className:"input-field",children:[Object(c.jsx)("i",{className:"fas fa-lock"}),Object(c.jsx)("input",{type:"password",placeholder:"Password",value:a.pass,onChange:function(e){return t(Object(o.a)(Object(o.a)({},a),{},{pass:e.target.value}))}})]}),Object(c.jsx)("input",{type:"submit",value:"Login",className:"btn solid"}),Object(c.jsx)("p",{className:"social-text",children:"Or Sign in with social platforms"}),Object(c.jsxs)("div",{className:"social-media",children:[Object(c.jsx)("a",{href:"#",className:"social-icon",children:Object(c.jsx)("i",{className:"fab fa-facebook-f"})}),Object(c.jsx)("a",{href:"#",className:"social-icon",children:Object(c.jsx)("i",{className:"fab fa-twitter"})}),Object(c.jsx)("a",{href:"#",className:"social-icon",children:Object(c.jsx)("i",{className:"fab fa-google"})}),Object(c.jsx)("a",{href:"#",className:"social-icon",children:Object(c.jsx)("i",{className:"fab fa-linkedin-in"})})]})]}),Object(c.jsxs)("form",{action:"#",className:"sign-up-form",children:[Object(c.jsx)("h2",{className:"title",children:"Sign up"}),Object(c.jsxs)("div",{className:"input-field",children:[Object(c.jsx)("i",{className:"fas fa-user"}),Object(c.jsx)("input",{type:"text",placeholder:"Username"})]}),Object(c.jsxs)("div",{className:"input-field",children:[Object(c.jsx)("i",{className:"fas fa-envelope"}),Object(c.jsx)("input",{type:"email",placeholder:"Email"})]}),Object(c.jsxs)("div",{className:"input-field",children:[Object(c.jsx)("i",{className:"fas fa-lock"}),Object(c.jsx)("input",{type:"password",placeholder:"Password"})]}),Object(c.jsx)("input",{type:"submit",className:"btn",value:"Sign up"}),Object(c.jsx)("p",{className:"social-text",children:"Or Sign up with social platforms"}),Object(c.jsxs)("div",{className:"social-media",children:[Object(c.jsx)("a",{href:"#",className:"social-icon",children:Object(c.jsx)("i",{className:"fab fa-facebook-f"})}),Object(c.jsx)("a",{href:"#",className:"social-icon",children:Object(c.jsx)("i",{className:"fab fa-twitter"})}),Object(c.jsx)("a",{href:"#",className:"social-icon",children:Object(c.jsx)("i",{className:"fab fa-google"})}),Object(c.jsx)("a",{href:"#",className:"social-icon",children:Object(c.jsx)("i",{className:"fab fa-linkedin-in"})})]})]})]})}),Object(c.jsxs)("div",{className:"panels-container",children:[Object(c.jsxs)("div",{className:"panel left-panel",children:[Object(c.jsxs)("div",{className:"content",children:[Object(c.jsx)("h3",{children:"New here ?"}),Object(c.jsx)("p",{children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, ex ratione. Aliquid!"}),Object(c.jsx)("button",{className:"btn transparent",id:"sign-up-btn",onClick:function(){document.querySelector(".container").classList.add("sign-up-mode")},children:"Sign up"})]}),Object(c.jsx)("img",{src:"img/log.svg",className:"image",alt:""})]}),Object(c.jsxs)("div",{className:"panel right-panel",children:[Object(c.jsxs)("div",{className:"content",children:[Object(c.jsx)("h3",{children:"One of us ?"}),Object(c.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum laboriosam ad deleniti."}),Object(c.jsx)("button",{className:"btn transparent",id:"sign-in-btn",onClick:function(){document.querySelector(".container").classList.remove("sign-up-mode")},children:"Sign in"})]}),Object(c.jsx)("img",{src:"img/register.svg",className:"image",alt:""})]})]})]})},f=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,42)).then((function(s){var a=s.getCLS,c=s.getFID,i=s.getFCP,t=s.getLCP,n=s.getTTFB;a(e),c(e),i(e),t(e),n(e)}))};l.a.render(Object(c.jsx)(t.a.StrictMode,{children:Object(c.jsx)(u,{})}),document.getElementById("root")),f()}},[[41,1,2]]]);
//# sourceMappingURL=main.fe148dd5.chunk.js.map