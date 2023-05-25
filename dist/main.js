(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(81),o=t.n(r),a=t(645),c=t.n(a)()(o());c.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Wix+Madefor+Display:wght@400;500;600;700&display=swap);"]),c.push([e.id,'* {\r\n  box-sizing: border-box;\r\n  font-family: "Wix Madefor Display", sans-serif;\r\n}\r\n\r\n:root {\r\n  --bg-color: #f6eaef;\r\n  --text-color: #070305;\r\n  --primary-color: #88bdc3;\r\n  --secondary-color: #ffffff;\r\n  --accent: #994d91;\r\n  --bg-color-dark: #23200b;\r\n  --bg-text-color-dark: #fcedf8;\r\n}\r\n\r\n.dark-mode {\r\n  background-color: var(--bg-color-dark);\r\n  color: var(--bg-text-color-dark);\r\n}\r\n\r\n.dark-mode-btn {\r\n  background-color: var(--bg-color-dark);\r\n  color: var(--bg-text-color-dark);\r\n}\r\n\r\n.dark-mode-task {\r\n  color: var(--text-color);\r\n}\r\n\r\n.dark-mode-btn:hover {\r\n  background-color: #312f13;\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n  background-color: var(--bg-color);\r\n}\r\n\r\nheader {\r\n  text-align: center;\r\n  padding: 10px 0;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.toggle {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 5px;\r\n}\r\n\r\n.mode {\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.bx-brightness {\r\n  font-size: 2rem;\r\n  margin-top: 10px;\r\n}\r\n\r\nheader > p {\r\n  color: var(--text-color);\r\n  font-style: italic;\r\n  font-weight: 500;\r\n  margin: 0;\r\n}\r\n\r\n.title {\r\n  background: linear-gradient(to right, #88bdc3, #994d91);\r\n  -webkit-background-clip: text;\r\n  -webkit-text-fill-color: transparent;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 5px;\r\n}\r\n\r\nh1 {\r\n  margin: 0;\r\n}\r\n\r\nmain {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n  align-items: center;\r\n  color: var(--text-color);\r\n  gap: 20px;\r\n  padding: 10px 20px;\r\n  height: 80vh;\r\n  margin-bottom: 5px;\r\n}\r\n\r\n.folders {\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin: 0;\r\n  gap: 20px;\r\n  flex: 1;\r\n  height: 100%;\r\n}\r\n\r\n.projects > button {\r\n  margin-bottom: 5px;\r\n}\r\n\r\n.lists > button {\r\n  margin-bottom: 5px;\r\n}\r\n\r\n.projects > ul > button {\r\n  margin-bottom: 5px;\r\n}\r\n\r\n.lists > ul > button {\r\n  margin-bottom: 5px;\r\n}\r\n\r\n.projects,\r\n.lists {\r\n  border-radius: 15px;\r\n  border: 2px solid var(--accent);\r\n  padding: 5px 10px;\r\n  overflow-y: auto;\r\n  height: 100%;\r\n}\r\n\r\nul {\r\n  list-style: none;\r\n  padding: 0;\r\n}\r\n\r\nbutton {\r\n  background-color: var(--bg-color);\r\n  font-size: 1.2rem;\r\n  color: var(--text-color);\r\n  font-weight: 500;\r\n  border: none;\r\n  border-radius: 5px;\r\n  text-align: left;\r\n  width: 100%;\r\n}\r\n\r\nh2 {\r\n  color: var(--primary-btn);\r\n  margin: 0;\r\n}\r\n\r\n.bx {\r\n  color: var(--accent);\r\n  cursor: pointer;\r\n}\r\n\r\n.main-list {\r\n  flex: 3;\r\n  border: 2px solid var(--accent);\r\n  border-radius: 15px;\r\n  padding: 5px 10px;\r\n  height: 100%;\r\n  overflow-y: auto;\r\n}\r\n\r\n.main-list > h2 {\r\n  margin: 0;\r\n  color: var(--primary-btn);\r\n}\r\n\r\n.button-center {\r\n  text-align: center;\r\n}\r\n\r\nform {\r\n  background-color: var(--primary-color);\r\n  padding: 10px;\r\n  width: fit-content;\r\n  border-radius: 15px;\r\n  color: var(--text-color);\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin: 0 auto;\r\n}\r\n\r\nbutton:hover {\r\n  background-color: #d3d3d3;\r\n}\r\n\r\ninput,\r\nselect {\r\n  display: block;\r\n  text-align: center;\r\n  margin: 4px 0;\r\n  border-radius: 15px;\r\n  border: none;\r\n}\r\n\r\n.form-buttons {\r\n  display: flex;\r\n  text-align: center;\r\n  gap: 10px;\r\n}\r\n\r\nform > button {\r\n  padding: 10px 5px;\r\n  text-align: center;\r\n  width: fit-content;\r\n  text-align: center;\r\n  font-size: 0.5rem;\r\n}\r\n\r\n.bxs-folder,\r\n.bx-circle,\r\n.bxs-circle,\r\n.bxs-right-arrow,\r\n.bx-task {\r\n  margin-right: 5px;\r\n}\r\n\r\n.bx-circle:hover {\r\n  color: darkgreen;\r\n}\r\n\r\n.bxs-trash,\r\n.bx-edit-alt {\r\n  margin-left: 10px;\r\n}\r\n\r\n.bxs-trash:hover {\r\n  color: darkred;\r\n}\r\n\r\n.done-task {\r\n  text-decoration: line-through;\r\n}\r\n\r\n.hide {\r\n  display: none;\r\n}\r\n\r\n.show {\r\n  display: block;\r\n}\r\n\r\n.task-content {\r\n  padding: 5px;\r\n}\r\n\r\n.task {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.task-details {\r\n  font-size: 1rem;\r\n  padding-top: 5px;\r\n}\r\n\r\n.all-task-btn {\r\n  margin-top: 5px;\r\n}\r\n\r\np:not(.mode) {\r\n  margin: 0;\r\n}\r\n\r\n.right {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\nli {\r\n  font-weight: 500;\r\n  font-size: 1.1rem;\r\n}\r\n\r\n.prio {\r\n  background-color: #a1a7a0;\r\n  border-radius: 15px;\r\n  margin-bottom: 5px;\r\n}\r\n\r\nfooter {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.projlist-btn {\r\n  display: flex;\r\n  align-items: center;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.icons {\r\n  display: flex;\r\n  margin-left: auto;\r\n  gap: 5px;\r\n}',""]);const i=c},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(r)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(c[s]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);r&&c[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),n.push(d))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},c=[],i=0;i<e.length;i++){var s=e[i],l=r.base?s[0]+r.base:s[0],d=a[l]||0,u="".concat(l," ").concat(d);a[l]=d+1;var m=t(u),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==m)n[m].references++,n[m].updater(p);else{var f=o(p,r);r.byIndex=i,n.splice(i,0,{identifier:u,updater:f,references:1})}c.push(u)}return c}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var c=0;c<a.length;c++){var i=t(a[c]);n[i].references--}for(var s=r(e,o),l=0;l<a.length;l++){var d=t(a[l]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}a=s}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{var e=t(379),n=t.n(e),r=t(795),o=t.n(r),a=t(569),c=t.n(a),i=t(565),s=t.n(i),l=t(216),d=t.n(l),u=t(589),m=t.n(u),p=t(426),f={};f.styleTagTransform=m(),f.setAttributes=s(),f.insert=c().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=d(),n()(p.Z,f),p.Z&&p.Z.locals&&p.Z.locals;const x=document.querySelector(".toggle"),g=document.querySelector(".tagline"),h=document.querySelector("body"),v=document.querySelector("main");x.addEventListener("click",(()=>{v.classList.toggle("dark-mode"),h.classList.toggle("dark-mode"),g.classList.toggle("dark-mode")}));let y=null;const b=document.querySelector(".proj-form");b.addEventListener("submit",(function(e){e.preventDefault();const n=document.querySelector("#proj-name");var t;t=n.value.trim(),S.push(t),E(),q(),b.classList.add("hide"),L.classList.remove("hide"),b.reset()})),document.querySelector(".proj-cancel").addEventListener("click",(()=>{b.classList.add("hide"),L.classList.remove("hide"),b.reset()}));const L=document.querySelector(".addproj");L.addEventListener("click",(()=>{b.classList.remove("hide"),L.classList.add("hide")}));const k=document.querySelector(".proj-tasks");document.querySelector(".task-proj").addEventListener("click",(()=>{k.classList.remove("hide"),M.textContent="Things to do: Project",j.classList.add("hide"),H.classList.add("hide"),B(),k.classList.remove("hide")}));let S=[];function E(){const e=document.querySelector(".projects-ul");e.innerHTML="";for(const n of S){const t=document.createElement("button");t.className="projlist-btn";const r=n.replace(/\s+/g,"");t.addEventListener("click",(()=>{M.textContent=`Things to do: ${n}`,y=r,j.classList.add("hide"),H.classList.add("hide"),k.classList.add("hide"),console.log(y),B(),G(r)}));const o=document.createElement("i");o.className="bx bxs-folder";const a=document.createElement("div");a.className="icons";const c=document.createElement("i");c.className="bx bxs-edit";const i=document.createElement("i");i.className="bx bxs-folder-minus",i.addEventListener("click",(()=>{var e;e=n,S.splice(e,1),q(),location.reload()})),a.append(c,i),t.appendChild(o),t.appendChild(document.createTextNode(n)),t.appendChild(a),e.appendChild(t),U(r)}}function q(){localStorage.setItem("projList",JSON.stringify(S))}localStorage.getItem("projList")&&(S=JSON.parse(localStorage.getItem("projList")));const N=document.querySelector(".list-form");N.addEventListener("submit",(function(e){e.preventDefault();const n=document.querySelector("#list-name");var t;t=n.value.trim(),T.push(t),I(),A(),N.classList.add("hide"),w.classList.remove("hide"),N.reset()})),document.querySelector(".list-cancel").addEventListener("click",(()=>{N.classList.add("hide"),w.classList.remove("hide")}));const w=document.querySelector(".addlist");w.addEventListener("click",(()=>{N.classList.remove("hide"),w.classList.add("hide"),N.reset()}));const C=document.querySelector(".task-list"),j=document.querySelector(".list-tasks");C.addEventListener("click",(()=>{j.classList.remove("hide"),M.textContent="Things to do: List",k.classList.add("hide"),H.classList.add("hide"),B(),j.classList.remove("hide")}));let T=[];function I(){const e=document.querySelector(".lists-ul");e.innerHTML="";for(const n of T){const t=document.createElement("button");t.className="projlist-btn";const r=n.replace(/\s+/g,"");t.addEventListener("click",(()=>{M.textContent=`Things to do: ${n}`,y=r,j.classList.add("hide"),H.classList.add("hide"),k.classList.add("hide"),console.log(y),B(),G(r)}));const o=document.createElement("i");o.className="bx bxs-folder";const a=document.createElement("div");a.className="icons";const c=document.createElement("i");c.className="bx bxs-edit";const i=document.createElement("i");i.className="bx bxs-folder-minus",i.addEventListener("click",(()=>{var e;e=n,T.splice(e,1),A(),location.reload()})),a.append(c,i),t.appendChild(o),t.appendChild(document.createTextNode(n)),t.appendChild(a),e.appendChild(t),U(r)}}function A(){localStorage.setItem("listItems",JSON.stringify(T))}localStorage.getItem("listItems")&&(T=JSON.parse(localStorage.getItem("listItems")));const M=document.querySelector(".task-h2"),O=document.querySelector(".task-form");O.addEventListener("submit",(function(e){e.preventDefault();const n=document.querySelector("#task-title"),t=document.querySelector("#details"),r=document.querySelector("#dueDate"),o=document.querySelector("#priority"),a=document.querySelector("#type");var c;c={name:n.value,dueDate:r.value,details:t.value,priority:o.checked,category:a.value},J.push({...c,folder:y}),z(),K(),O.classList.add("hide"),D.classList.remove("hide"),O.reset(),location.reload()}));const D=document.querySelector(".addtask");D.addEventListener("click",(()=>{O.classList.remove("hide"),D.classList.add("hide")})),document.querySelector(".task-cancel").addEventListener("click",(()=>{O.classList.add("hide"),D.classList.remove("hide"),O.reset()})),document.querySelector(".all-task-btn").addEventListener("click",(()=>{H.classList.remove("hide"),j.classList.add("hide"),k.classList.add("hide"),M.textContent="Things to do: All",B(),H.classList.remove("hide")}));const H=document.querySelector(".all-tasks");let J=[];function z(){j.innerHTML="",k.innerHTML="",H.innerHTML="";for(const e of J){const n=document.createElement("li");n.className="task-content";const t=document.createElement("div");t.className="task";const r=document.createElement("div");r.className="name";const o=document.createElement("i");o.className="bx bx-circle",o.addEventListener("click",(()=>{var e;e=r,o.classList.toggle("bxs-circle"),e.classList.toggle("done-task")})),r.appendChild(o),r.appendChild(document.createTextNode(e.name));const a=document.createElement("div");a.className="right";const c=document.createElement("i");c.className="bx bxs-trash",c.addEventListener("click",(()=>{let n=J.indexOf(e);R(parseInt(n))}));const i=document.createElement("i");i.className="bx bx-edit-alt",i.addEventListener("click",(()=>{P(r,e),W(a,e),Z(l,e),alert("you can only edit one input at a time")})),a.appendChild(document.createTextNode(e.dueDate)),a.append(c,i),t.append(r,a);const s=document.createElement("div");s.className="detail-content";const l=document.createElement("p");l.className="task-details";const d=document.createElement("i");if(d.className="bx bxs-right-arrow",l.appendChild(d),l.appendChild(document.createTextNode(e.details)),s.appendChild(l),e.priority&&n.classList.add("prio"),n.append(t,s),"proj"===e.category){const t=n.cloneNode(!0),r=n.cloneNode(!0);_(r,e.folder),k.appendChild(t);const o=t.querySelectorAll(".bx.bxs-trash"),a=r.querySelectorAll(".bx.bxs-trash");$(o,e),$(a,e);const c=t.querySelectorAll(".bx.bx-edit-alt"),i=r.querySelectorAll(".bx.bx-edit-alt"),s=t.querySelector(".name"),l=r.querySelector(".name"),d=t.querySelector(".right"),u=r.querySelector(".right"),m=t.querySelector(".detail-content"),p=r.querySelector(".detail-content");F(c,s,e,"name"),F(c,d,e,"date"),F(c,m,e,"detail"),F(i,l,e,"name"),F(i,u,e,"date"),F(i,p,e,"detail")}else if("list"===e.category){const t=n.cloneNode(!0),r=n.cloneNode(!0);_(r,e.folder),j.appendChild(t);const o=t.querySelectorAll(".bx.bxs-trash"),a=r.querySelectorAll(".bx.bxs-trash");$(o,e),$(a,e);const c=t.querySelectorAll(".bx.bx-edit-alt"),i=r.querySelectorAll(".bx.bx-edit-alt"),s=t.querySelector(".name"),l=r.querySelector(".name"),d=t.querySelector(".right"),u=r.querySelector(".right"),m=t.querySelector(".detail-content"),p=r.querySelector(".detail-content");F(c,s,e,"name"),F(c,d,e,"date"),F(c,m,e,"detail"),F(i,l,e,"name"),F(i,u,e,"date"),F(i,p,e,"detail")}H.appendChild(n)}}function P(e,n){const t=document.createElement("input");t.type="text",t.value=n.name,e.replaceWith(t),t.addEventListener("keydown",(e=>{if("Enter"===e.key){const e=t.value;n.name=e,K(),z()}})),t.focus()}function W(e,n){const t=document.createElement("input");t.type="date",t.value=n.dueDate,e.replaceWith(t),t.addEventListener("keydown",(e=>{if("Enter"===e.key){const e=t.value;n.dueDate=e,K(),z()}}))}function Z(e,n){const t=document.createElement("input");t.type="text",t.value=n.details,e.replaceWith(t),t.addEventListener("keydown",(e=>{if("Enter"===e.key){const e=t.value;n.details=e,K(),z()}}))}function $(e,n){e.forEach((e=>{e.addEventListener("click",(()=>{let e=J.indexOf(n);R(parseInt(e))}))}))}function F(e,n,t,r){"name"===r?e.forEach((e=>{e.addEventListener("click",(()=>{P(n,t),alert("you can only edit one input at a time")}))})):"date"===r?e.forEach((e=>{e.addEventListener("click",(()=>{W(n,t)}))})):"detail"===r&&e.forEach((e=>{e.addEventListener("click",(()=>{Z(n,t)}))}))}function R(e){J.splice(e,1),K(),location.reload()}function U(e){const n=document.querySelector(".main-list"),t=document.createElement("ul");t.className=`${e}-ul`,n.appendChild(t)}function _(e,n){const t=document.querySelector(`.${n}-ul`);t&&t.appendChild(e)}function B(){document.querySelectorAll(".main-list ul").forEach((e=>{e.classList.add("hide")}))}function G(e){const n=document.querySelector(`.${e}-ul`);n&&n.classList.remove("hide")}function K(){localStorage.setItem("taskItems",JSON.stringify(J))}localStorage.getItem("taskItems")&&(J=JSON.parse(localStorage.getItem("taskItems"))),window.onload=function(){E(),I(),z(),B(),H.classList.remove("hide")}})()})();