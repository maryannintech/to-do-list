(()=>{"use strict";var e={426:(e,r,n)=>{n.d(r,{Z:()=>c});var t=n(81),o=n.n(t),a=n(645),s=n.n(a)()(o());s.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Wix+Madefor+Display:wght@400;500;600;700&display=swap);"]),s.push([e.id,'* {\r\n  box-sizing: border-box;\r\n  font-family: "Wix Madefor Display", sans-serif;\r\n}\r\n\r\n:root {\r\n  --bg-color: #f6eaef;\r\n  --text-color: #070305;\r\n  --primary-color: #88bdc3;\r\n  --secondary-color: #ffffff;\r\n  --accent: #994d91;\r\n  --bg-color-dark: #23200b;\r\n  --bg-text-color-dark: #fcedf8;\r\n}\r\n\r\n.dark-mode {\r\n  background-color: var(--bg-color-dark);\r\n  color: var(--bg-text-color-dark);\r\n}\r\n\r\n.dark-mode-btn {\r\n  background-color: var(--bg-color-dark);\r\n  color: var(--bg-text-color-dark);\r\n}\r\n\r\n.dark-mode-task {\r\n  color: var(--text-color);\r\n}\r\n\r\n.dark-mode-btn:hover {\r\n  background-color: #312f13;\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n  background-color: var(--bg-color);\r\n}\r\n\r\nheader {\r\n  text-align: center;\r\n  padding: 10px 0;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.toggle {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 5px;\r\n}\r\n\r\n.mode {\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.bx-brightness {\r\n  font-size: 2rem;\r\n  margin-top: 10px;\r\n}\r\n\r\nheader > p {\r\n  color: var(--text-color);\r\n  font-style: italic;\r\n  font-weight: 500;\r\n  margin: 0;\r\n}\r\n\r\n.title {\r\n  background: linear-gradient(to right, #88bdc3, #994d91);\r\n  -webkit-background-clip: text;\r\n  -webkit-text-fill-color: transparent;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 5px;\r\n}\r\n\r\nh1 {\r\n  margin: 0;\r\n}\r\n\r\nmain {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n  align-items: center;\r\n  color: var(--text-color);\r\n  gap: 20px;\r\n  padding: 10px 20px;\r\n  height: 80vh;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.folders {\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin: 0;\r\n  gap: 20px;\r\n  flex: 1;\r\n  height: 100%;\r\n}\r\n\r\n.projects > button {\r\n  margin-bottom: 5px;\r\n}\r\n\r\n.lists > button {\r\n  margin-bottom: 5px;\r\n}\r\n\r\n.projects > ul > button {\r\n  margin-bottom: 5px;\r\n}\r\n\r\n.lists > ul > button {\r\n  margin-bottom: 5px;\r\n}\r\n\r\n.projects,\r\n.lists {\r\n  border-radius: 15px;\r\n  border: 2px solid var(--accent);\r\n  padding: 5px 10px;\r\n  overflow-y: auto;\r\n  height: 100%;\r\n}\r\n\r\nul {\r\n  list-style: none;\r\n  padding: 0;\r\n}\r\n\r\nbutton {\r\n  background-color: var(--bg-color);\r\n  font-size: 1.2rem;\r\n  color: var(--text-color);\r\n  font-weight: 500;\r\n  border: none;\r\n  border-radius: 5px;\r\n  text-align: left;\r\n  width: 100%;\r\n}\r\n\r\nh2 {\r\n  color: var(--primary-btn);\r\n  margin: 0;\r\n}\r\n\r\n.bx {\r\n  color: var(--accent);\r\n  cursor: pointer;\r\n}\r\n\r\n.main-list {\r\n  flex: 3;\r\n  border: 2px solid var(--accent);\r\n  border-radius: 15px;\r\n  padding: 5px 10px;\r\n  height: 100%;\r\n  overflow-y: auto;\r\n}\r\n\r\n.main-list > h2 {\r\n  margin: 0;\r\n  color: var(--primary-btn);\r\n}\r\n\r\n.button-center {\r\n  text-align: center;\r\n}\r\n\r\nform {\r\n  background-color: var(--primary-color);\r\n  padding: 10px;\r\n  width: fit-content;\r\n  border-radius: 15px;\r\n  color: var(--text-color);\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin: 0 auto;\r\n}\r\n\r\nbutton:hover {\r\n  background-color: #d3d3d3;\r\n}\r\n\r\ninput,\r\nselect {\r\n  display: block;\r\n  text-align: center;\r\n  margin: 4px 0;\r\n  border-radius: 15px;\r\n  border: none;\r\n}\r\n\r\n.form-buttons {\r\n  display: flex;\r\n  text-align: center;\r\n  gap: 10px;\r\n}\r\n\r\nform > button {\r\n  padding: 10px 5px;\r\n  text-align: center;\r\n  width: fit-content;\r\n  text-align: center;\r\n  font-size: 0.5rem;\r\n}\r\n\r\n.bxs-folder,\r\n.bx-task-x,\r\n.bxs-right-arrow,\r\n.bx-task {\r\n  margin-right: 5px;\r\n}\r\n\r\n.bx-task-x:hover {\r\n  color: darkgreen;\r\n}\r\n\r\n.bxs-trash,\r\n.bx-edit-alt {\r\n  margin-left: 10px;\r\n}\r\n\r\n.bxs-trash:hover {\r\n  color: darkred;\r\n}\r\n\r\n.done-task {\r\n  text-decoration: line-through;\r\n}\r\n\r\n.hide {\r\n  display: none;\r\n}\r\n\r\n.show {\r\n  display: block;\r\n}\r\n\r\n.task-content {\r\n  padding: 5px;\r\n}\r\n\r\n.task {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.task-details {\r\n  font-size: 1rem;\r\n  padding-top: 5px;\r\n}\r\n\r\n.all-task-btn {\r\n  margin-top: 5px;\r\n}\r\n\r\np:not(.mode) {\r\n  margin: 0;\r\n}\r\n\r\n.right {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\nli {\r\n  font-weight: 500;\r\n  font-size: 1.1rem;\r\n}\r\n\r\n.prio {\r\n  background-color: #a1a7a0;\r\n  border-radius: 15px;\r\n}\r\n\r\n',""]);const c=s},645:e=>{e.exports=function(e){var r=[];return r.toString=function(){return this.map((function(r){var n="",t=void 0!==r[5];return r[4]&&(n+="@supports (".concat(r[4],") {")),r[2]&&(n+="@media ".concat(r[2]," {")),t&&(n+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),n+=e(r),t&&(n+="}"),r[2]&&(n+="}"),r[4]&&(n+="}"),n})).join("")},r.i=function(e,n,t,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(t)for(var c=0;c<this.length;c++){var i=this[c][0];null!=i&&(s[i]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);t&&s[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),r.push(l))}},r}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var r=[];function n(e){for(var n=-1,t=0;t<r.length;t++)if(r[t].identifier===e){n=t;break}return n}function t(e,t){for(var a={},s=[],c=0;c<e.length;c++){var i=e[c],d=t.base?i[0]+t.base:i[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var p=n(u),m={css:i[1],media:i[2],sourceMap:i[3],supports:i[4],layer:i[5]};if(-1!==p)r[p].references++,r[p].updater(m);else{var f=o(m,t);t.byIndex=c,r.splice(c,0,{identifier:u,updater:f,references:1})}s.push(u)}return s}function o(e,r){var n=r.domAPI(r);return n.update(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap&&r.supports===e.supports&&r.layer===e.layer)return;n.update(e=r)}else n.remove()}}e.exports=function(e,o){var a=t(e=e||[],o=o||{});return function(e){e=e||[];for(var s=0;s<a.length;s++){var c=n(a[s]);r[c].references--}for(var i=t(e,o),d=0;d<a.length;d++){var l=n(a[d]);0===r[l].references&&(r[l].updater(),r.splice(l,1))}a=i}}},569:e=>{var r={};e.exports=function(e,n){var t=function(e){if(void 0===r[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}r[e]=n}return r[e]}(e);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(n)}},216:e=>{e.exports=function(e){var r=document.createElement("style");return e.setAttributes(r,e.attributes),e.insert(r,e.options),r}},565:(e,r,n)=>{e.exports=function(e){var r=n.nc;r&&e.setAttribute("nonce",r)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var r=e.insertStyleElement(e);return{update:function(n){!function(e,r,n){var t="";n.supports&&(t+="@supports (".concat(n.supports,") {")),n.media&&(t+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(t+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),t+=n.css,o&&(t+="}"),n.media&&(t+="}"),n.supports&&(t+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),r.styleTagTransform(t,e,r.options)}(r,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)}}}},589:e=>{e.exports=function(e,r){if(r.styleSheet)r.styleSheet.cssText=e;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(e))}}}},r={};function n(t){var o=r[t];if(void 0!==o)return o.exports;var a=r[t]={id:t,exports:{}};return e[t](a,a.exports,n),a.exports}n.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return n.d(r,{a:r}),r},n.d=(e,r)=>{for(var t in r)n.o(r,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},n.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),n.nc=void 0,(()=>{var e=n(379),r=n.n(e),t=n(795),o=n.n(t),a=n(569),s=n.n(a),c=n(565),i=n.n(c),d=n(216),l=n.n(d),u=n(589),p=n.n(u),m=n(426),f={};f.styleTagTransform=p(),f.setAttributes=i(),f.insert=s().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=l(),r()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;const g=document.querySelector(".toggle"),h=document.querySelector(".tagline"),x=document.querySelector("body"),v=document.querySelector("main");g.addEventListener("click",(()=>{v.classList.toggle("dark-mode"),x.classList.toggle("dark-mode"),h.classList.toggle("dark-mode")}));let b=null;const y=document.querySelector(".proj-form");y.addEventListener("submit",(function(e){e.preventDefault();const r=document.querySelector("#proj-name");var n;n=r.value.trim(),S.push(n),E(),localStorage.setItem("projList",JSON.stringify(S)),y.classList.add("hide"),k.classList.remove("hide"),y.reset()})),document.querySelector(".proj-cancel").addEventListener("click",(()=>{y.classList.add("hide"),k.classList.remove("hide"),y.reset()}));const k=document.querySelector(".addproj");k.addEventListener("click",(()=>{y.classList.remove("hide"),k.classList.add("hide")}));const L=document.querySelector(".proj-tasks");document.querySelector(".task-proj").addEventListener("click",(()=>{L.classList.remove("hide"),I.textContent="Things to do: Project",w.classList.add("hide"),D.classList.add("hide"),P(),L.classList.remove("hide")}));let S=[];function E(){const e=document.querySelector(".projects-ul");e.innerHTML="";for(const r of S){const n=document.createElement("button"),t=r.replace(/\s+/g,"");n.addEventListener("click",(()=>{I.textContent=`Things to do: ${r}`,b=t,w.classList.add("hide"),D.classList.add("hide"),L.classList.add("hide"),console.log(b),P(),Z(t)}));const o=document.createElement("i");o.className="bx bxs-folder",n.appendChild(o),n.appendChild(document.createTextNode(r)),e.appendChild(n),J(t)}}localStorage.getItem("projList")&&(S=JSON.parse(localStorage.getItem("projList")));const q=document.querySelector(".list-form");q.addEventListener("submit",(function(e){e.preventDefault();const r=document.querySelector("#list-name");var n;n=r.value.trim(),j.push(n),T(),localStorage.setItem("listItems",JSON.stringify(j)),q.classList.add("hide"),N.classList.remove("hide"),q.reset()})),document.querySelector(".list-cancel").addEventListener("click",(()=>{q.classList.add("hide"),N.classList.remove("hide")}));const N=document.querySelector(".addlist");N.addEventListener("click",(()=>{q.classList.remove("hide"),N.classList.add("hide"),q.reset()}));const C=document.querySelector(".task-list"),w=document.querySelector(".list-tasks");C.addEventListener("click",(()=>{w.classList.remove("hide"),I.textContent="Things to do: List",L.classList.add("hide"),D.classList.add("hide"),P(),w.classList.remove("hide")}));let j=[];function T(){const e=document.querySelector(".lists-ul");e.innerHTML="";for(const r of j){const n=document.createElement("button"),t=r.replace(/\s+/g,"");n.addEventListener("click",(()=>{I.textContent=`Things to do: ${r}`,b=t,w.classList.add("hide"),D.classList.add("hide"),L.classList.add("hide"),console.log(b),P(),Z(t)}));const o=document.createElement("i");o.className="bx bxs-folder",n.appendChild(o),n.appendChild(document.createTextNode(r)),e.appendChild(n),J(t)}}localStorage.getItem("listItems")&&(j=JSON.parse(localStorage.getItem("listItems")));const I=document.querySelector(".task-h2"),M=document.querySelector(".task-form");M.addEventListener("submit",(function(e){e.preventDefault();const r=document.querySelector("#task-title"),n=document.querySelector("#details"),t=document.querySelector("#dueDate"),o=document.querySelector("#priority"),a=document.querySelector("#type");var s;s={name:r.value,dueDate:t.value,details:n.value,priority:o.checked,category:a.value},A.push({...s,folder:b}),H(),localStorage.setItem("taskItems",JSON.stringify(A)),M.classList.add("hide"),O.classList.remove("hide"),M.reset()}));const O=document.querySelector(".addtask");O.addEventListener("click",(()=>{M.classList.remove("hide"),O.classList.add("hide")})),document.querySelector(".task-cancel").addEventListener("click",(()=>{M.classList.add("hide"),O.classList.remove("hide"),M.reset()})),document.querySelector(".all-task-btn").addEventListener("click",(()=>{D.classList.remove("hide"),w.classList.add("hide"),L.classList.add("hide"),I.textContent="Things to do: All",P(),D.classList.remove("hide")}));const D=document.querySelector(".all-tasks");let A=[];function H(){w.innerHTML="",L.innerHTML="",D.innerHTML="";for(const e of A){const r=document.createElement("li");r.className="task-content";const n=document.createElement("div");n.className="task";const t=document.createElement("div");t.className="name";const o=document.createElement("i");o.className="bx bx-task-x",t.appendChild(o),t.appendChild(document.createTextNode(e.name));const a=document.createElement("div");a.className="right";const s=document.createElement("i");s.className="bx bxs-trash";const c=document.createElement("i");c.className="bx bx-edit-alt",a.appendChild(document.createTextNode(e.dueDate)),a.append(s,c),n.append(t,a);const i=document.createElement("div");i.className="detail-content";const d=document.createElement("p");d.className="task-details";const l=document.createElement("i");if(l.className="bx bxs-right-arrow",d.appendChild(l),d.appendChild(document.createTextNode(e.details)),i.appendChild(d),e.priority&&r.classList.add("prio"),r.append(n,i),"proj"===e.category){const n=r.cloneNode(!0);z(r.cloneNode(!0),e.folder),L.appendChild(n)}else if("list"===e.category){const n=r.cloneNode(!0);z(r.cloneNode(!0),e.folder),w.appendChild(n)}D.appendChild(r)}}function J(e){const r=document.querySelector(".main-list"),n=document.createElement("ul");n.className=`${e}-ul`,r.appendChild(n)}function z(e,r){const n=document.querySelector(`.${r}-ul`);n&&n.appendChild(e)}function P(){document.querySelectorAll(".main-list ul").forEach((e=>{e.classList.add("hide")}))}function Z(e){const r=document.querySelector(`.${e}-ul`);r&&r.classList.remove("hide")}localStorage.getItem("taskItems")&&(A=JSON.parse(localStorage.getItem("taskItems"))),window.onload=function(){E(),T(),H(),P()}})()})();