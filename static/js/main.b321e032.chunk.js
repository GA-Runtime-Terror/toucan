(this["webpackJsonpto-do-list"]=this["webpackJsonpto-do-list"]||[]).push([[0],{29:function(e,t,n){},30:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n(23),i=n.n(s),a=(n(29),n(3)),r=(n(30),n(2)),j=n(24),o=n.n(j).a.create({baseURL:"https://toucan-do-it.herokuapp.com"}),l=n(4),u=n(0);var d=function(){return Object(u.jsx)("div",{className:"footer-two",children:Object(u.jsx)("h3",{children:Object(u.jsx)(l.b,{to:"/sign-up",children:"Sign up "})})})},b=function(e){var t=Object(r.f)(),n=Object(c.useRef)(null),s=Object(c.useRef)(null);return Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:"signup-header",children:Object(u.jsxs)("div",{className:"header-div",children:[Object(u.jsx)("img",{className:"toucan-logo",src:"https://i.ibb.co/Jt8zy7x/toucan-1.png",alt:"toucan-1"}),Object(u.jsx)("h1",{children:" Toucan "})]})}),Object(u.jsx)("h2",{children:" User Login"}),Object(u.jsxs)("div",{className:"signup-input",children:[Object(u.jsx)("h4",{children:"Enter username"}),Object(u.jsx)("input",{ref:n,type:"text"}),Object(u.jsx)("h4",{children:"Enter password"}),Object(u.jsx)("input",{type:"password",ref:s}),Object(u.jsx)("button",{id:"register-button",type:"submit",onClick:function(c){c.preventDefault(c);var i=n.current.value,a=s.current.value;i.length&&a.length?o.get("/users/login/",{params:{userName:i,password:a}}).then((function(n){var c=n.data;200===c.status&&(e.handleLogin(c),t("/logged-in"))})):alert("Please enter username or password")},children:"login"})]}),Object(u.jsx)(d,{})]})};var h=function(){return Object(u.jsxs)("div",{className:"footer-two",children:[Object(u.jsx)("h3",{children:Object(u.jsx)(l.b,{to:"/sign-in",children:" Log in "})}),Object(u.jsx)("p",{className:"footer-two-words",children:"words "})]})},O=function(e){var t=Object(r.f)(),n=Object(c.useRef)(null),s=Object(c.useRef)(null);return Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:"signup-header",children:Object(u.jsxs)("div",{className:"header-div",children:[Object(u.jsx)(l.b,{to:"/",children:Object(u.jsx)("img",{id:"toucan-logo",src:"https://i.ibb.co/Jt8zy7x/toucan-1.png",alt:"toucan-1"})}),Object(u.jsx)("h1",{children:" Toucan "})]})}),Object(u.jsx)("h2",{children:" User Registration "}),Object(u.jsxs)("div",{className:"signup-input",children:[Object(u.jsx)("h4",{children:"Create username"}),Object(u.jsx)("input",{type:"text",ref:n}),Object(u.jsx)("h4",{children:"Create password"}),Object(u.jsx)("input",{type:"password",ref:s}),Object(u.jsx)("button",{id:"register-button",onClick:function(c){c.preventDefault(c);var i=n.current.value,a=s.current.value;i.length&&a.length?o.post("/users",{userName:i,password:a}).then((function(n){var c=n.data;console.log(c),200===c.status?o.get("/users/login/",{params:{userName:i,password:a}}).then((function(n){var c=n.data;200===c.status&&(e.handleLogin(c),t("/logged-in"))})):alert("ERROR : "+c.msg)})):alert("Please enter username or password")},children:"register"}),Object(u.jsx)("div",{className:"register-footer-div"})]}),Object(u.jsx)(h,{})]})},x=n(8),p=n.n(x),m=n(12);var f=function(){return Object(u.jsxs)("div",{className:"footer-div",children:[Object(u.jsx)("h3",{children:Object(u.jsx)(l.b,{to:"/sign-up",children:"Sign up "})}),Object(u.jsx)("br",{}),Object(u.jsx)("h3",{children:Object(u.jsx)(l.b,{to:"/sign-in",children:" Log in "})})]})};var v=function(){var e=Object(c.useState)(!1),t=Object(a.a)(e,2),n=t[0],s=t[1];Object(c.useEffect)((function(){i()}),[]);var i=function(){return!0===n?Object(u.jsx)("div",{id:"menu-div",children:Object(u.jsx)("div",{children:Object(u.jsxs)("label",{className:"switch",children:[Object(u.jsx)("input",{type:"checkbox"}),Object(u.jsx)("span",{className:"slider round"})]})})}):Object(u.jsx)(u.Fragment,{})};return Object(u.jsx)("div",{children:Object(u.jsxs)("div",{className:"header-div",children:[Object(u.jsx)(l.b,{to:"/",children:Object(u.jsx)("img",{id:"toucan-logo",src:"https://i.ibb.co/Jt8zy7x/toucan-1.png",alt:"toucan-1"})}),i(),Object(u.jsx)("h1",{children:" Toucan "}),Object(u.jsx)("i",{onClick:function(){s(!n)},className:"fas fa-bars fa-2x"})]})})},g=n(14);var N=function(e){var t=Object(c.useState)([]),n=Object(a.a)(t,2),s=n[0],i=n[1],r=Object(c.useRef)(null),j=function(e){return function(t){t.preventDefault();var n=Object(g.a)(s);n.splice(e,1),i(n)}},o=s.map((function(e,t){return Object(u.jsxs)("li",{className:"listItem-form",children:[Object(u.jsx)("div",{className:"listItem-landing",children:e}),Object(u.jsx)("button",{className:"button",onClick:j(t),children:"remove"})]},t)}));return Object(u.jsxs)("ul",{children:[Object(u.jsxs)("li",{className:"listItem-form",children:[Object(u.jsx)("div",{className:"listItem-landing",children:"Example Item"}),Object(u.jsx)("button",{className:"button",children:"remove"})]}),o,Object(u.jsx)("li",{className:"listItem-form",children:Object(u.jsx)("div",{className:"listItem-landing",children:Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),i([].concat(Object(g.a)(s),[r.current.value])),e.target[0].value=""},children:[Object(u.jsx)("input",{ref:r,className:"input-landing list-input",type:"text",placeholder:"Add new item"}),Object(u.jsx)("button",{className:"button",type:"submit",children:"Submit"})]})})})]})},w=function(){var e=Object(c.useState)([]),t=Object(a.a)(e,2),n=t[0],s=t[1];function i(){return(i=Object(m.a)(p.a.mark((function e(t){var n,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return n=e.sent,e.next=5,n.json();case 5:c=e.sent,s(c);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(c.useEffect)((function(){!function(e){i.apply(this,arguments)}("https://zenquotes.io/api/random/a8d087f3df39b78ba4412d5c810d601af7cc7969")}),[]);var r=n.map((function(e,t){return Object(u.jsxs)("p",{children:['"',e.q,'" - ',e.a]},t)}));return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(v,{}),Object(u.jsxs)("div",{className:"body-div",children:[Object(u.jsx)("div",{id:"quote-div",children:r}),Object(u.jsx)("h2",{children:"Toucan do it! "}),Object(u.jsx)(N,{})]}),Object(u.jsx)(f,{})]})},y=function(e){var t=Object(c.useState)([]),n=Object(a.a)(t,2),s=n[0],i=n[1],r=Object(c.useState)(),j=Object(a.a)(r,2),o=j[0],l=j[1],d=Object(c.useRef)(null);function b(){return(b=Object(m.a)(p.a.mark((function e(t){var n,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return n=e.sent,e.next=5,n.json();case 5:c=e.sent,i(c);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(c.useEffect)((function(){!function(e){b.apply(this,arguments)}("https://zenquotes.io/api/random/a8d087f3df39b78ba4412d5c810d601af7cc7969"),fetch("https://toucan-do-it.herokuapp.com/lists/".concat(e.user.toDoList)).then((function(e){return e.json()})).then((function(e){return l(e.list[0].toDoItems)}))}),[]);var h=s.map((function(e,t){return Object(u.jsxs)("p",{children:['"',e.q,'" - ',e.a]},t)})),O=[];return o&&(O=o.map((function(t){return Object(u.jsxs)("li",{className:"listItem-form",children:[Object(u.jsx)("div",{className:"listItem-landing",children:t.name}),Object(u.jsx)("button",{onClick:function(){return n=t._id,void fetch("https://toucan-do-it.herokuapp.com/lists/".concat(e.user.toDoList,"/").concat(n),{method:"DELETE"}).then((function(e){return e.json()})).then((function(e){return l(e.list.toDoItems)}));var n},className:"button",children:"remove"})]},t._id)}))),Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(v,{}),Object(u.jsxs)("div",{className:"body-div",children:[Object(u.jsx)("div",{id:"quote-div",children:h}),Object(u.jsx)("h2",{children:"Toucan do it! "}),Object(u.jsxs)("ul",{children:[O,Object(u.jsx)("li",{className:"listItem-form",children:Object(u.jsx)("div",{className:"listItem-landing",children:Object(u.jsxs)("form",{onSubmit:function(t){t.preventDefault(),fetch("https://toucan-do-it.herokuapp.com/lists/".concat(e.user.toDoList),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({name:d.current.value})}).then((function(e){return e.json()})).then((function(e){return l(e.list)})),t.target[0].value=""},children:[Object(u.jsx)("input",{ref:d,className:"input-landing list-input",type:"text",placeholder:"Add new item"}),Object(u.jsx)("button",{className:"button",type:"submit",children:"Submit"})]})})})]})]}),Object(u.jsx)(f,{})]})};var k=function(){var e=Object(c.useState)({}),t=Object(a.a)(e,2),n=t[0],s=t[1],i=function(e){s(e)};return Object(u.jsx)("div",{children:Object(u.jsxs)(r.c,{children:[Object(u.jsx)(r.a,{exact:!0,path:"/",element:Object(u.jsx)(w,{})}),Object(u.jsx)(r.a,{exact:!0,path:"/sign-in",element:Object(u.jsx)(b,{handleLogin:i})}),Object(u.jsx)(r.a,{exact:!0,path:"/sign-up",element:Object(u.jsx)(O,{handleLogin:i})}),Object(u.jsx)(r.a,{exact:!0,path:"/logged-in",element:Object(u.jsx)(y,{user:n})})]})})};i.a.render(Object(u.jsx)(l.a,{children:Object(u.jsx)(k,{})}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.b321e032.chunk.js.map