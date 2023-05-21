(()=>{"use strict";var e={426:(e,r,n)=>{n.d(r,{Z:()=>s});var t=n(81),o=n.n(t),a=n(645),c=n.n(a)()(o());c.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Wix+Madefor+Display:wght@400;500;600;700&display=swap);"]),c.push([e.id,'* {\r\n  box-sizing: border-box;\r\n  font-family: "Wix Madefor Display", sans-serif;\r\n}\r\n\r\n:root {\r\n  --bg-color: #f6eaef;\r\n  --text-color: #070305;\r\n  --primary-color: #88bdc3;\r\n  --secondary-color: #ffffff;\r\n  --accent: #994d91;\r\n  --bg-color-dark: #23200b;\r\n  --bg-text-color-dark: #f5f3e0;\r\n}\r\n\r\n.dark-mode {\r\n  background-color: var(--bg-color-dark);\r\n  color: var(--bg-text-color-dark);\r\n}\r\n\r\n.dark-mode-btn {\r\n  background-color: var(--bg-color-dark);\r\n  color: var(--bg-text-color-dark);\r\n}\r\n\r\n.dark-mode-task {\r\n  color: var(--text-color);\r\n}\r\n\r\n.dark-mode-btn:hover {\r\n  background-color: #312f13;\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n  background-color: var(--bg-color);\r\n}\r\n\r\nheader {\r\n  text-align: center;\r\n  padding: 10px 0;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.toggle {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 5px;\r\n}\r\n\r\n.mode {\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.bx-brightness {\r\n  font-size: 2rem;\r\n  margin-top: 10px;\r\n}\r\n\r\nheader > p {\r\n  color: var(--text-color);\r\n  font-style: italic;\r\n  font-weight: 500;\r\n  margin: 0;\r\n}\r\n\r\n.title {\r\n  background: linear-gradient(to right, #88bdc3, #994d91);\r\n  -webkit-background-clip: text;\r\n  -webkit-text-fill-color: transparent;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 5px;\r\n}\r\n\r\nh1 {\r\n  margin: 0;\r\n}\r\n\r\nmain {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n  align-items: center;\r\n  color: var(--text-color);\r\n  gap: 20px;\r\n  padding: 10px 20px;\r\n  height: 80vh;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.folders {\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin: 0;\r\n  gap: 20px;\r\n  flex: 1;\r\n  height: 100%;\r\n}\r\n\r\n.projects > button {\r\n  margin-bottom: 5px;\r\n}\r\n\r\n.lists > button {\r\n  margin-bottom: 5px;\r\n}\r\n\r\n.projects > ul > button {\r\n  margin-bottom: 5px;\r\n}\r\n\r\n.lists > ul > button {\r\n  margin-bottom: 5px;\r\n}\r\n\r\n.projects,\r\n.lists {\r\n  border-radius: 15px;\r\n  border: 2px solid var(--accent);\r\n  padding: 5px 10px;\r\n  overflow-y: auto;\r\n  height: 100%;\r\n}\r\n\r\nul {\r\n  list-style: none;\r\n  padding: 0;\r\n}\r\n\r\nbutton {\r\n  background-color: var(--bg-color);\r\n  font-size: 1.2rem;\r\n  color: var(--text-color);\r\n  font-weight: 500;\r\n  border: none;\r\n  border-radius: 5px;\r\n  text-align: left;\r\n  width: 100%;\r\n}\r\n\r\nh2 {\r\n  color: var(--primary-btn);\r\n  margin: 0;\r\n}\r\n\r\n.bx {\r\n  color: var(--accent);\r\n  cursor: pointer;\r\n}\r\n\r\n.main-list {\r\n  flex: 3;\r\n  border: 2px solid var(--accent);\r\n  border-radius: 15px;\r\n  padding: 5px 10px;\r\n  height: 100%;\r\n  overflow-y: auto;\r\n}\r\n\r\n.main-list > h2 {\r\n  margin: 0;\r\n  color: var(--primary-btn);\r\n}\r\n\r\n.button-center {\r\n  text-align: center;\r\n}\r\n\r\nform {\r\n  background-color: var(--primary-color);\r\n  padding: 10px;\r\n  width: fit-content;\r\n  border-radius: 15px;\r\n  color: var(--text-color);\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin: 0 auto;\r\n}\r\n\r\nbutton:hover {\r\n  background-color: #d3d3d3;\r\n}\r\n\r\ninput,\r\nselect {\r\n  display: block;\r\n  text-align: center;\r\n  margin: 4px 0;\r\n  border-radius: 15px;\r\n  border: none;\r\n}\r\n\r\n.form-buttons {\r\n  display: flex;\r\n  text-align: center;\r\n  gap: 10px;\r\n}\r\n\r\nform > button {\r\n  padding: 10px 5px;\r\n  text-align: center;\r\n  width: fit-content;\r\n  text-align: center;\r\n  font-size: 0.5rem;\r\n}\r\n\r\n.bxs-folder,\r\n.bx-task-x,\r\n.bxs-right-arrow,\r\n.bx-task {\r\n  margin-right: 5px;\r\n}\r\n\r\n.bx-task-x:hover {\r\n  color: darkgreen;\r\n}\r\n\r\n.bxs-trash,\r\n.bx-edit-alt {\r\n  margin-left: 10px;\r\n}\r\n\r\n.bxs-trash:hover {\r\n  color: darkred;\r\n}\r\n\r\n.done-task {\r\n  text-decoration: line-through;\r\n}\r\n\r\n.hide {\r\n  display: none;\r\n}\r\n\r\n.show {\r\n  display: block;\r\n}\r\n\r\n.task-content {\r\n  padding: 5px;\r\n}\r\n\r\n.task {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.task-details {\r\n  font-size: 1rem;\r\n  padding-top: 5px;\r\n}\r\n\r\n.all-task-btn {\r\n  margin-top: 5px;\r\n}\r\n\r\np:not(.mode) {\r\n  margin: 0;\r\n}\r\n\r\n.right {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\nli {\r\n  font-weight: 500;\r\n  font-size: 1.1rem;\r\n}\r\n\r\n.prio {\r\n  background-color: var(--primary-color);\r\n  border-radius: 15px;\r\n}\r\n\r\n',""]);const s=c},645:e=>{e.exports=function(e){var r=[];return r.toString=function(){return this.map((function(r){var n="",t=void 0!==r[5];return r[4]&&(n+="@supports (".concat(r[4],") {")),r[2]&&(n+="@media ".concat(r[2]," {")),t&&(n+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),n+=e(r),t&&(n+="}"),r[2]&&(n+="}"),r[4]&&(n+="}"),n})).join("")},r.i=function(e,n,t,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(t)for(var s=0;s<this.length;s++){var i=this[s][0];null!=i&&(c[i]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);t&&c[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),r.push(l))}},r}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var r=[];function n(e){for(var n=-1,t=0;t<r.length;t++)if(r[t].identifier===e){n=t;break}return n}function t(e,t){for(var a={},c=[],s=0;s<e.length;s++){var i=e[s],d=t.base?i[0]+t.base:i[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var p=n(u),m={css:i[1],media:i[2],sourceMap:i[3],supports:i[4],layer:i[5]};if(-1!==p)r[p].references++,r[p].updater(m);else{var f=o(m,t);t.byIndex=s,r.splice(s,0,{identifier:u,updater:f,references:1})}c.push(u)}return c}function o(e,r){var n=r.domAPI(r);return n.update(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap&&r.supports===e.supports&&r.layer===e.layer)return;n.update(e=r)}else n.remove()}}e.exports=function(e,o){var a=t(e=e||[],o=o||{});return function(e){e=e||[];for(var c=0;c<a.length;c++){var s=n(a[c]);r[s].references--}for(var i=t(e,o),d=0;d<a.length;d++){var l=n(a[d]);0===r[l].references&&(r[l].updater(),r.splice(l,1))}a=i}}},569:e=>{var r={};e.exports=function(e,n){var t=function(e){if(void 0===r[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}r[e]=n}return r[e]}(e);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(n)}},216:e=>{e.exports=function(e){var r=document.createElement("style");return e.setAttributes(r,e.attributes),e.insert(r,e.options),r}},565:(e,r,n)=>{e.exports=function(e){var r=n.nc;r&&e.setAttribute("nonce",r)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var r=e.insertStyleElement(e);return{update:function(n){!function(e,r,n){var t="";n.supports&&(t+="@supports (".concat(n.supports,") {")),n.media&&(t+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(t+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),t+=n.css,o&&(t+="}"),n.media&&(t+="}"),n.supports&&(t+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),r.styleTagTransform(t,e,r.options)}(r,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)}}}},589:e=>{e.exports=function(e,r){if(r.styleSheet)r.styleSheet.cssText=e;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(e))}}}},r={};function n(t){var o=r[t];if(void 0!==o)return o.exports;var a=r[t]={id:t,exports:{}};return e[t](a,a.exports,n),a.exports}n.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return n.d(r,{a:r}),r},n.d=(e,r)=>{for(var t in r)n.o(r,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},n.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),n.nc=void 0,(()=>{var e=n(379),r=n.n(e),t=n(795),o=n.n(t),a=n(569),c=n.n(a),s=n(565),i=n.n(s),d=n(216),l=n.n(d),u=n(589),p=n.n(u),m=n(426),f={};f.styleTagTransform=p(),f.setAttributes=i(),f.insert=c().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=l(),r()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;const g=document.querySelector(".toggle"),h=document.querySelector(".tagline"),x=document.querySelector("body"),v=document.querySelector("main");g.addEventListener("click",(()=>{v.classList.toggle("dark-mode"),x.classList.toggle("dark-mode"),h.classList.toggle("dark-mode")}));const b=document.querySelector(".proj-form");b.addEventListener("submit",(function(e){e.preventDefault();const r=document.querySelector("#proj-name");var n;n=r.value.trim(),L.push(n),S(),localStorage.setItem("projList",JSON.stringify(L)),b.classList.add("hide"),y.classList.remove("hide"),b.reset()})),document.querySelector(".proj-cancel").addEventListener("click",(()=>{b.classList.add("hide"),y.classList.remove("hide"),b.reset()}));const y=document.querySelector(".addproj");y.addEventListener("click",(()=>{b.classList.remove("hide"),y.classList.add("hide")}));const k=document.querySelector(".proj-tasks");document.querySelector(".task-proj").addEventListener("click",(()=>{k.classList.remove("hide"),T.textContent="Things to do: Project",N.classList.add("hide"),O.classList.add("hide")}));let L=[];function S(){const e=document.querySelector(".projects-ul");e.innerHTML="";for(const r of L){const n=document.createElement("button");n.addEventListener("click",(()=>{T.textContent=`Things to do: ${r}`}));const t=document.createElement("i");t.className="bx bxs-folder",n.appendChild(t),n.appendChild(document.createTextNode(r)),e.appendChild(n),J(r)}}localStorage.getItem("projList")&&(L=JSON.parse(localStorage.getItem("projList")));const E=document.querySelector(".list-form");E.addEventListener("submit",(function(e){e.preventDefault();const r=document.querySelector("#list-name");var n;n=r.value.trim(),w.push(n),j(),localStorage.setItem("listItems",JSON.stringify(w)),E.classList.add("hide"),q.classList.remove("hide"),E.reset()})),document.querySelector(".list-cancel").addEventListener("click",(()=>{E.classList.add("hide"),q.classList.remove("hide")}));const q=document.querySelector(".addlist");q.addEventListener("click",(()=>{E.classList.remove("hide"),q.classList.add("hide"),E.reset()}));const C=document.querySelector(".task-list"),N=document.querySelector(".list-tasks");C.addEventListener("click",(()=>{N.classList.remove("hide"),T.textContent="Things to do: List",k.classList.add("hide"),O.classList.add("hide")}));let w=[];function j(){const e=document.querySelector(".lists-ul");e.innerHTML="";for(const r of w){const n=document.createElement("button");n.addEventListener("click",(()=>{T.textContent=`Things to do: ${r}`}));const t=document.createElement("i");t.className="bx bxs-folder",n.appendChild(t),n.appendChild(document.createTextNode(r)),e.appendChild(n),J(r)}}localStorage.getItem("listItems")&&(w=JSON.parse(localStorage.getItem("listItems")));const T=document.querySelector(".task-h2"),I=document.querySelector(".task-form");I.addEventListener("submit",(function(e){e.preventDefault();const r=document.querySelector("#task-title"),n=document.querySelector("#details"),t=document.querySelector("#dueDate"),o=document.querySelector("#priority"),a=document.querySelector("#type");var c;c={name:r.value,dueDate:t.value,details:n.value,priority:o.checked,category:a.value},D.push(c),H(),localStorage.setItem("taskItems",JSON.stringify(D)),I.classList.add("hide"),M.classList.remove("hide"),I.reset()}));const M=document.querySelector(".addtask");M.addEventListener("click",(()=>{I.classList.remove("hide"),M.classList.add("hide")})),document.querySelector(".task-cancel").addEventListener("click",(()=>{I.classList.add("hide"),M.classList.remove("hide"),I.reset()})),document.querySelector(".all-task-btn").addEventListener("click",(()=>{O.classList.remove("hide"),N.classList.add("hide"),k.classList.add("hide"),T.textContent="Things to do: All"}));const O=document.querySelector(".all-tasks");let D=[];function H(){N.innerHTML="",k.innerHTML="",O.innerHTML="";for(const e of D){const r=document.createElement("li");r.className="task-content";const n=document.createElement("div");n.className="task";const t=document.createElement("div");t.className="name";const o=document.createElement("i");o.className="bx bx-task-x",t.appendChild(o),t.appendChild(document.createTextNode(e.name));const a=document.createElement("div");a.className="right";const c=document.createElement("i");c.className="bx bxs-trash";const s=document.createElement("i");s.className="bx bx-edit-alt",a.appendChild(document.createTextNode(e.dueDate)),a.append(c,s),n.append(t,a);const i=document.createElement("div");i.className="detail-content";const d=document.createElement("p");d.className="task-details";const l=document.createElement("i");if(l.className="bx bxs-right-arrow",d.appendChild(l),d.appendChild(document.createTextNode(e.details)),i.appendChild(d),e.priority&&r.classList.add("prio"),r.append(n,i),"proj"===e.category){const e=r.cloneNode(!0);k.appendChild(e),O.appendChild(r)}else if("list"===e.category){const e=r.cloneNode(!0);N.appendChild(e),O.appendChild(r)}}}function J(e){const r=document.querySelector(".main-list"),n=document.createElement("ul");n.className=`${e}-ul`,r.appendChild(n)}localStorage.getItem("taskItems")&&(D=JSON.parse(localStorage.getItem("taskItems"))),window.onload=function(){S(),j(),H()}})()})();