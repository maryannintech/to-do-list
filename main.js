(()=>{"use strict";var e,n,r,t,o,a,c,i,s,l,d,u,m,p,f={426:(e,n,r)=>{r.d(n,{Z:()=>i});var t=r(81),o=r.n(t),a=r(645),c=r.n(a)()(o());c.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Wix+Madefor+Display:wght@400;500;600;700&display=swap);"]),c.push([e.id,'* {\r\n  box-sizing: border-box;\r\n  font-family: "Wix Madefor Display", sans-serif;\r\n}\r\n\r\n:root {\r\n  --bg-color: #f6eaef;\r\n  --text-color: #070305;\r\n  --primary-color: #88bdc3;\r\n  --secondary-color: #ffffff;\r\n  --accent: #994d91;\r\n  --bg-color-dark: #23200b;\r\n  --bg-text-color-dark: #fcedf8;\r\n}\r\n\r\n/* DARK MODE */\r\n\r\n.dark-mode {\r\n  background-color: var(--bg-color-dark);\r\n  color: var(--bg-text-color-dark);\r\n}\r\n\r\n.dark-mode-btn {\r\n  background-color: var(--bg-color-dark);\r\n  color: var(--bg-text-color-dark);\r\n}\r\n\r\n.dark-mode-task {\r\n  color: var(--text-color);\r\n}\r\n\r\n.dark-mode-btn:hover {\r\n  background-color: #312f13;\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n  background-color: var(--bg-color);\r\n}\r\n\r\n/* HEADER */\r\n\r\nheader {\r\n  text-align: center;\r\n  padding: 10px 0;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.toggle {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 5px;\r\n}\r\n\r\n.mode {\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.bx-brightness {\r\n  font-size: 2rem;\r\n  margin-top: 10px;\r\n}\r\n\r\nheader > p {\r\n  color: var(--text-color);\r\n  font-style: italic;\r\n  font-weight: 500;\r\n  margin: 0;\r\n}\r\n\r\n.title {\r\n  background: linear-gradient(to right, #88bdc3, #994d91);\r\n  -webkit-background-clip: text;\r\n  -webkit-text-fill-color: transparent;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 5px;\r\n}\r\n\r\nh1 {\r\n  margin: 0;\r\n}\r\n\r\n/* MAIN */\r\n\r\nmain {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n  align-items: center;\r\n  color: var(--text-color);\r\n  gap: 20px;\r\n  padding: 10px 20px;\r\n  height: 80vh;\r\n  margin-bottom: 5px;\r\n}\r\n\r\n.folders {\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin: 0;\r\n  gap: 20px;\r\n  flex: 1;\r\n  height: 100%;\r\n}\r\n\r\n/* PROJECT */\r\n\r\n.projects > button {\r\n  margin-bottom: 5px;\r\n}\r\n\r\n.projects > ul > button {\r\n  margin-bottom: 5px;\r\n}\r\n\r\n.projects,\r\n.lists {\r\n  border-radius: 15px;\r\n  border: 2px solid var(--accent);\r\n  padding: 5px 10px;\r\n  overflow-y: auto;\r\n  height: 100%;\r\n}\r\n\r\n.projlist-btn {\r\n  display: flex;\r\n  align-items: center;\r\n  flex-wrap: wrap;\r\n}\r\n\r\nul {\r\n  list-style: none;\r\n  padding: 0;\r\n}\r\n\r\nbutton {\r\n  background-color: var(--bg-color);\r\n  font-size: 1.2rem;\r\n  color: var(--text-color);\r\n  font-weight: 500;\r\n  border: none;\r\n  border-radius: 5px;\r\n  text-align: left;\r\n  width: 100%;\r\n}\r\n\r\nh2 {\r\n  color: var(--primary-btn);\r\n  margin: 0;\r\n}\r\n\r\n.bx {\r\n  color: var(--accent);\r\n  cursor: pointer;\r\n}\r\n\r\n/* LIST */\r\n\r\n.main-list {\r\n  flex: 3;\r\n  border: 2px solid var(--accent);\r\n  border-radius: 15px;\r\n  padding: 5px 10px;\r\n  height: 100%;\r\n  overflow-y: auto;\r\n}\r\n\r\n.main-list > h2 {\r\n  margin: 0;\r\n  color: var(--primary-btn);\r\n}\r\n\r\n.lists > button {\r\n  margin-bottom: 5px;\r\n}\r\n\r\n.lists > ul > button {\r\n  margin-bottom: 5px;\r\n}\r\n\r\n.button-center {\r\n  text-align: center;\r\n}\r\n\r\nform {\r\n  background-color: var(--primary-color);\r\n  padding: 10px;\r\n  width: fit-content;\r\n  border-radius: 15px;\r\n  color: var(--text-color);\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin: 0 auto;\r\n}\r\n\r\nbutton:hover {\r\n  background-color: #d3d3d3;\r\n}\r\n\r\ninput,\r\nselect {\r\n  display: block;\r\n  text-align: center;\r\n  margin: 4px 0;\r\n  border-radius: 15px;\r\n  border: none;\r\n}\r\n\r\n.form-buttons {\r\n  display: flex;\r\n  text-align: center;\r\n  gap: 10px;\r\n}\r\n\r\nform > button {\r\n  padding: 10px 5px;\r\n  text-align: center;\r\n  width: fit-content;\r\n  text-align: center;\r\n  font-size: 0.5rem;\r\n}\r\n\r\n.bxs-folder,\r\n.bx-circle,\r\n.bxs-circle,\r\n.bxs-right-arrow,\r\n.bx-task {\r\n  margin-right: 5px;\r\n}\r\n\r\n.bx-circle:hover {\r\n  color: darkgreen;\r\n}\r\n\r\n.bxs-trash,\r\n.bx-edit-alt {\r\n  margin-left: 10px;\r\n}\r\n\r\n.bxs-trash:hover {\r\n  color: darkred;\r\n}\r\n\r\n.bx-trash-alt:hover {\r\n  color: darkred;\r\n}\r\n\r\n.done-task {\r\n  text-decoration: line-through;\r\n}\r\n\r\n.hide {\r\n  display: none;\r\n}\r\n\r\n.show {\r\n  display: block;\r\n}\r\n\r\n/* TASK */\r\n\r\n.task-content {\r\n  padding: 5px;\r\n}\r\n\r\n.task {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.task-details {\r\n  font-size: 1rem;\r\n  padding-top: 5px;\r\n}\r\n\r\n.all-task-btn {\r\n  margin-top: 5px;\r\n}\r\n\r\np:not(.mode) {\r\n  margin: 0;\r\n}\r\n\r\n.right {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\nli {\r\n  font-weight: 500;\r\n  font-size: 1.1rem;\r\n}\r\n\r\n.prio {\r\n  background-color: #a1a7a0;\r\n  border-radius: 15px;\r\n  margin-bottom: 5px;\r\n}\r\n\r\nfooter {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.icons {\r\n  display: flex;\r\n  margin-left: auto;\r\n  gap: 5px;\r\n}',""]);const i=c},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var r="",t=void 0!==n[5];return n[4]&&(r+="@supports (".concat(n[4],") {")),n[2]&&(r+="@media ".concat(n[2]," {")),t&&(r+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),r+=e(n),t&&(r+="}"),n[2]&&(r+="}"),n[4]&&(r+="}"),r})).join("")},n.i=function(e,r,t,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(t)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(c[s]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);t&&c[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),r&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=r):d[2]=r),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),n.push(d))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function r(e){for(var r=-1,t=0;t<n.length;t++)if(n[t].identifier===e){r=t;break}return r}function t(e,t){for(var a={},c=[],i=0;i<e.length;i++){var s=e[i],l=t.base?s[0]+t.base:s[0],d=a[l]||0,u="".concat(l," ").concat(d);a[l]=d+1;var m=r(u),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==m)n[m].references++,n[m].updater(p);else{var f=o(p,t);t.byIndex=i,n.splice(i,0,{identifier:u,updater:f,references:1})}c.push(u)}return c}function o(e,n){var r=n.domAPI(n);return r.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;r.update(e=n)}else r.remove()}}e.exports=function(e,o){var a=t(e=e||[],o=o||{});return function(e){e=e||[];for(var c=0;c<a.length;c++){var i=r(a[c]);n[i].references--}for(var s=t(e,o),l=0;l<a.length;l++){var d=r(a[l]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}a=s}}},569:e=>{var n={};e.exports=function(e,r){var t=function(e){if(void 0===n[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}n[e]=r}return n[e]}(e);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(r)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,r)=>{e.exports=function(e){var n=r.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(r){!function(e,n,r){var t="";r.supports&&(t+="@supports (".concat(r.supports,") {")),r.media&&(t+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(t+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),t+=r.css,o&&(t+="}"),r.media&&(t+="}"),r.supports&&(t+="}");var a=r.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(t,e,n.options)}(n,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},h={};function g(e){var n=h[e];if(void 0!==n)return n.exports;var r=h[e]={id:e,exports:{}};return f[e](r,r.exports,g),r.exports}g.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return g.d(n,{a:n}),n},g.d=(e,n)=>{for(var r in n)g.o(n,r)&&!g.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},g.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),g.nc=void 0,e=g(379),n=g.n(e),r=g(795),t=g.n(r),o=g(569),a=g.n(o),c=g(565),i=g.n(c),s=g(216),l=g.n(s),d=g(589),u=g.n(d),m=g(426),(p={}).styleTagTransform=u(),p.setAttributes=i(),p.insert=a().bind(null,"head"),p.domAPI=t(),p.insertStyleElement=l(),n()(m.Z,p),m.Z&&m.Z.locals&&m.Z.locals,function(){const e=document.querySelector(".toggle"),n=document.querySelector(".tagline"),r=document.querySelector("body"),t=document.querySelector("main");e.addEventListener("click",(()=>{t.classList.toggle("dark-mode"),r.classList.toggle("dark-mode"),n.classList.toggle("dark-mode")}))}(),function(){let e=null;const n=document.querySelector(".proj-form");n.addEventListener("submit",(function(e){e.preventDefault();const t=document.querySelector("#proj-name");var i;i=t.value.trim(),o.push(i),a(),c(),n.classList.add("hide"),r.classList.remove("hide"),n.reset()})),document.querySelector(".proj-cancel").addEventListener("click",(()=>{n.classList.add("hide"),r.classList.remove("hide"),n.reset()}));const r=document.querySelector(".addproj");r.addEventListener("click",(()=>{n.classList.remove("hide"),r.classList.add("hide")}));const t=document.querySelector(".proj-tasks");document.querySelector(".task-proj").addEventListener("click",(()=>{t.classList.remove("hide"),f.textContent="Things to do: Project",d.classList.add("hide"),x.classList.add("hide"),w(),t.classList.remove("hide")}));let o=[];function a(){const n=document.querySelector(".projects-ul");n.innerHTML="";for(const r of o){const a=document.createElement("button");a.className="projlist-btn";const i=r.replace(/\s+/g,"");a.addEventListener("click",(()=>{f.textContent=`Things to do: ${r}`,e=i,d.classList.add("hide"),x.classList.add("hide"),t.classList.add("hide"),console.log(e),w(),j(i)}));const s=document.createElement("i");s.className="bx bxs-folder";const l=document.createElement("div");l.className="icons";const u=document.createElement("i");u.className="bx bx-trash-alt",u.addEventListener("click",(()=>{var e;e=r,o.splice(e,1),c(),location.reload()})),l.appendChild(u),a.appendChild(s),a.appendChild(document.createTextNode(r)),a.appendChild(l),n.appendChild(a),N(i)}}function c(){localStorage.setItem("projList",JSON.stringify(o))}localStorage.getItem("projList")&&(o=JSON.parse(localStorage.getItem("projList")));const i=document.querySelector(".list-form");i.addEventListener("submit",(function(e){e.preventDefault();const n=document.querySelector("#list-name");var r;r=n.value.trim(),u.push(r),m(),p(),i.classList.add("hide"),s.classList.remove("hide"),i.reset()})),document.querySelector(".list-cancel").addEventListener("click",(()=>{i.classList.add("hide"),s.classList.remove("hide")}));const s=document.querySelector(".addlist");s.addEventListener("click",(()=>{i.classList.remove("hide"),s.classList.add("hide"),i.reset()}));const l=document.querySelector(".task-list"),d=document.querySelector(".list-tasks");l.addEventListener("click",(()=>{d.classList.remove("hide"),f.textContent="Things to do: List",t.classList.add("hide"),x.classList.add("hide"),w(),d.classList.remove("hide")}));let u=[];function m(){const n=document.querySelector(".lists-ul");n.innerHTML="";for(const r of u){const o=document.createElement("button");o.className="projlist-btn";const a=r.replace(/\s+/g,"");o.addEventListener("click",(()=>{f.textContent=`Things to do: ${r}`,e=a,d.classList.add("hide"),x.classList.add("hide"),t.classList.add("hide"),console.log(e),w(),j(a)}));const c=document.createElement("i");c.className="bx bxs-folder";const i=document.createElement("div");i.className="icons";const s=document.createElement("i");s.className="bx bx-trash-alt",s.addEventListener("click",(()=>{var e;e=r,u.splice(e,1),p(),location.reload()})),i.appendChild(s),o.appendChild(c),o.appendChild(document.createTextNode(r)),o.appendChild(i),n.appendChild(o),N(a)}}function p(){localStorage.setItem("listItems",JSON.stringify(u))}localStorage.getItem("listItems")&&(u=JSON.parse(localStorage.getItem("listItems")));const f=document.querySelector(".task-h2"),h=document.querySelector(".task-form");h.addEventListener("submit",(function(n){n.preventDefault();const r=document.querySelector("#task-title"),t=document.querySelector("#details"),o=document.querySelector("#dueDate"),a=document.querySelector("#priority"),c=document.querySelector("#type");var i;i={name:r.value,dueDate:o.value,details:t.value,priority:a.checked,category:c.value},v.push({...i,folder:e}),y(),T(),h.classList.add("hide"),g.classList.remove("hide"),h.reset(),location.reload()}));const g=document.querySelector(".addtask");g.addEventListener("click",(()=>{h.classList.remove("hide"),g.classList.add("hide")})),document.querySelector(".task-cancel").addEventListener("click",(()=>{h.classList.add("hide"),g.classList.remove("hide"),h.reset()})),document.querySelector(".all-task-btn").addEventListener("click",(()=>{x.classList.remove("hide"),d.classList.add("hide"),t.classList.add("hide"),f.textContent="Things to do: All",w(),x.classList.remove("hide")}));const x=document.querySelector(".all-tasks");let v=[];function y(){d.innerHTML="",t.innerHTML="",x.innerHTML="";for(const e of v){const n=document.createElement("li");n.className="task-content";const r=document.createElement("div");r.className="task";const o=document.createElement("div");o.className="name";const a=document.createElement("i");a.className="bx bx-circle",a.addEventListener("click",(()=>{var e;e=o,a.classList.toggle("bxs-circle"),e.classList.toggle("done-task")})),o.appendChild(a),o.appendChild(document.createTextNode(e.name));const c=document.createElement("div");c.className="right";const i=document.createElement("i");i.className="bx bxs-trash",i.addEventListener("click",(()=>{let n=v.indexOf(e);q(parseInt(n))}));const s=document.createElement("i");s.className="bx bx-edit-alt",s.addEventListener("click",(()=>{b(o,e),L(c,e),k(u,e),alert("you can only edit one input at a time")})),c.appendChild(document.createTextNode(e.dueDate)),c.append(i,s),r.append(o,c);const l=document.createElement("div");l.className="detail-content";const u=document.createElement("p");u.className="task-details";const m=document.createElement("i");if(m.className="bx bxs-right-arrow",u.appendChild(m),u.appendChild(document.createTextNode(e.details)),l.appendChild(u),e.priority&&n.classList.add("prio"),n.append(r,l),"proj"===e.category){const r=n.cloneNode(!0),o=n.cloneNode(!0);C(o,e.folder),t.appendChild(r);const a=r.querySelectorAll(".bx.bxs-trash"),c=o.querySelectorAll(".bx.bxs-trash");S(a,e),S(c,e);const i=r.querySelectorAll(".bx.bx-edit-alt"),s=o.querySelectorAll(".bx.bx-edit-alt"),l=r.querySelector(".name"),d=o.querySelector(".name"),u=r.querySelector(".right"),m=o.querySelector(".right"),p=r.querySelector(".detail-content"),f=o.querySelector(".detail-content");E(i,l,e,"name"),E(i,u,e,"date"),E(i,p,e,"detail"),E(s,d,e,"name"),E(s,m,e,"date"),E(s,f,e,"detail")}else if("list"===e.category){const r=n.cloneNode(!0),t=n.cloneNode(!0);C(t,e.folder),d.appendChild(r);const o=r.querySelectorAll(".bx.bxs-trash"),a=t.querySelectorAll(".bx.bxs-trash");S(o,e),S(a,e);const c=r.querySelectorAll(".bx.bx-edit-alt"),i=t.querySelectorAll(".bx.bx-edit-alt"),s=r.querySelector(".name"),l=t.querySelector(".name"),u=r.querySelector(".right"),m=t.querySelector(".right"),p=r.querySelector(".detail-content"),f=t.querySelector(".detail-content");E(c,s,e,"name"),E(c,u,e,"date"),E(c,p,e,"detail"),E(i,l,e,"name"),E(i,m,e,"date"),E(i,f,e,"detail")}x.appendChild(n)}}function b(e,n){const r=document.createElement("input");r.type="text",r.value=n.name,e.replaceWith(r),r.addEventListener("keydown",(e=>{if("Enter"===e.key){const e=r.value;n.name=e,T(),y()}})),r.focus()}function L(e,n){const r=document.createElement("input");r.type="date",r.value=n.dueDate,e.replaceWith(r),r.addEventListener("keydown",(e=>{if("Enter"===e.key){const e=r.value;n.dueDate=e,T(),y()}}))}function k(e,n){const r=document.createElement("input");r.type="text",r.value=n.details,e.replaceWith(r),r.addEventListener("keydown",(e=>{if("Enter"===e.key){const e=r.value;n.details=e,T(),y()}}))}function S(e,n){e.forEach((e=>{e.addEventListener("click",(()=>{let e=v.indexOf(n);q(parseInt(e))}))}))}function E(e,n,r,t){"name"===t?e.forEach((e=>{e.addEventListener("click",(()=>{b(n,r),alert("you can only edit one input at a time")}))})):"date"===t?e.forEach((e=>{e.addEventListener("click",(()=>{L(n,r)}))})):"detail"===t&&e.forEach((e=>{e.addEventListener("click",(()=>{k(n,r)}))}))}function q(e){v.splice(e,1),T(),location.reload()}function N(e){const n=document.querySelector(".main-list"),r=document.createElement("ul");r.className=`${e}-ul`,n.appendChild(r)}function C(e,n){const r=document.querySelector(`.${n}-ul`);r&&r.appendChild(e)}function w(){document.querySelectorAll(".main-list ul").forEach((e=>{e.classList.add("hide")}))}function j(e){const n=document.querySelector(`.${e}-ul`);n&&n.classList.remove("hide")}function T(){localStorage.setItem("taskItems",JSON.stringify(v))}localStorage.getItem("taskItems")&&(v=JSON.parse(localStorage.getItem("taskItems"))),window.onload=function(){a(),m(),y(),w(),x.classList.remove("hide")}}()})();