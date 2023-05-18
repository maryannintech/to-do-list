(()=>{"use strict";var r={426:(r,e,n)=>{n.d(e,{Z:()=>i});var t=n(81),o=n.n(t),a=n(645),c=n.n(a)()(o());c.push([r.id,"@import url(https://fonts.googleapis.com/css2?family=Wix+Madefor+Display:wght@400;500;600;700&display=swap);"]),c.push([r.id,'* {\r\n  box-sizing: border-box;\r\n  font-family: "Wix Madefor Display", sans-serif;\r\n}\r\n\r\n:root {\r\n  --bg-color: #f6eaef;\r\n  --text-color: #070305;\r\n  --primary-color: #88bdc3;\r\n  --secondary-color: #ffffff;\r\n  --accent: #994d91;\r\n  --bg-color-dark: #23200b;\r\n  --bg-text-color-dark: #f5f3e0;\r\n}\r\n\r\n.dark-mode-bg {\r\n  background-color: var(--bg-color-dark);\r\n}\r\n\r\n.dark-mode-text {\r\n  color: var(--bg-text-color-dark);\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n  background-color: var(--bg-color);\r\n}\r\n\r\nheader {\r\n  text-align: center;\r\n  padding: 20px 0;\r\n}\r\n\r\nheader > p {\r\n  color: var(--text-color);\r\n  font-style: italic;\r\n  font-weight: 500;\r\n  margin: 0;\r\n}\r\n\r\n.title {\r\n  background: linear-gradient(to right, #88bdc3, #994d91);\r\n  -webkit-background-clip: text;\r\n  -webkit-text-fill-color: transparent;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 5px;\r\n}\r\n\r\nh1 {\r\n  margin: 0;\r\n}\r\n\r\nmain {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n  align-items: center;\r\n  color: var(--text-color);\r\n  gap: 20px;\r\n  padding: 10px 20px;\r\n  height: 80vh;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.folders {\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin: 0;\r\n  gap: 20px;\r\n  flex: 1;\r\n  height: 100%;\r\n}\r\n\r\n.projects,\r\n.lists {\r\n  border-radius: 15px;\r\n  border: 2px solid var(--accent);\r\n  padding: 5px 10px;\r\n  overflow-y: auto;\r\n  height: 100%;\r\n}\r\n\r\nul {\r\n  list-style: none;\r\n  padding: 0;\r\n}\r\n\r\nbutton {\r\n  background-color: var(--bg-color);\r\n  font-size: 1.2rem;\r\n  color: var(--text-color);\r\n  font-weight: 500;\r\n  border: none;\r\n  border-radius: 5px;\r\n  text-align: left;\r\n  width: 100%;\r\n}\r\n\r\nh2 {\r\n  color: var(--primary-btn);\r\n  margin: 0;\r\n}\r\n\r\n.bx {\r\n  color: var(--accent);\r\n  cursor: pointer;\r\n}\r\n\r\n.main-list {\r\n  flex: 3;\r\n  border: 2px solid var(--accent);\r\n  border-radius: 15px;\r\n  padding: 5px 10px;\r\n  height: 100%;\r\n  overflow-y: auto;\r\n}\r\n\r\n.main-list > h2 {\r\n  margin: 0;\r\n  color: var(--primary-btn);\r\n}\r\n\r\n.button-center {\r\n  text-align: center;\r\n}\r\n\r\nform {\r\n  background-color: var(--primary-color);\r\n  padding: 10px;\r\n  width: fit-content;\r\n  border-radius: 15px;\r\n  color: var(--text-color);\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin: 0 auto;\r\n}\r\n\r\nbutton:hover {\r\n  background-color: #d3d3d3;\r\n}\r\n\r\ninput {\r\n  display: block;\r\n  text-align: center;\r\n  margin: 4px 0;\r\n  border-radius: 15px;\r\n  border: none;\r\n}\r\n\r\n.form-buttons {\r\n  display: flex;\r\n  text-align: center;\r\n  gap: 10px;\r\n}\r\n\r\nform > button {\r\n  padding: 10px 5px;\r\n  text-align: center;\r\n  width: fit-content;\r\n  text-align: center;\r\n  font-size: 0.5rem;\r\n}\r\n\r\n.bxs-folder,\r\n.bx-task-x,\r\n.bxs-right-arrow,\r\n.bx-task {\r\n  margin-right: 5px;\r\n}\r\n\r\n.bx-task-x:hover {\r\n  color: darkgreen;\r\n}\r\n\r\n.bxs-trash,\r\n.bx-edit-alt {\r\n  margin-left: 10px;\r\n}\r\n\r\n.bxs-trash:hover {\r\n  color: darkred;\r\n}\r\n\r\n.done-task {\r\n  text-decoration: line-through;\r\n}\r\n\r\n.hide {\r\n  display: none;\r\n}\r\n\r\n.show {\r\n  display: block;\r\n}\r\n\r\n.task-content {\r\n  padding: 5px;\r\n}\r\n\r\n.task {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.task-details {\r\n  font-size: 1rem;\r\n  padding-top: 5px;\r\n}\r\n\r\np {\r\n  margin: 0;\r\n}\r\n\r\n.right {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\nli {\r\n  font-weight: 500;\r\n  font-size: 1.1rem;\r\n}\r\n\r\n.prio {\r\n  background-color: var(--primary-color);\r\n  border-radius: 15px;\r\n}\r\n',""]);const i=c},645:r=>{r.exports=function(r){var e=[];return e.toString=function(){return this.map((function(e){var n="",t=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),t&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=r(e),t&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(r,n,t,o,a){"string"==typeof r&&(r=[[null,r,void 0]]);var c={};if(t)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(c[s]=!0)}for(var d=0;d<r.length;d++){var l=[].concat(r[d]);t&&c[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},81:r=>{r.exports=function(r){return r[1]}},379:r=>{var e=[];function n(r){for(var n=-1,t=0;t<e.length;t++)if(e[t].identifier===r){n=t;break}return n}function t(r,t){for(var a={},c=[],i=0;i<r.length;i++){var s=r[i],d=t.base?s[0]+t.base:s[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var p=n(u),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(m);else{var f=o(m,t);t.byIndex=i,e.splice(i,0,{identifier:u,updater:f,references:1})}c.push(u)}return c}function o(r,e){var n=e.domAPI(e);return n.update(r),function(e){if(e){if(e.css===r.css&&e.media===r.media&&e.sourceMap===r.sourceMap&&e.supports===r.supports&&e.layer===r.layer)return;n.update(r=e)}else n.remove()}}r.exports=function(r,o){var a=t(r=r||[],o=o||{});return function(r){r=r||[];for(var c=0;c<a.length;c++){var i=n(a[c]);e[i].references--}for(var s=t(r,o),d=0;d<a.length;d++){var l=n(a[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=s}}},569:r=>{var e={};r.exports=function(r,n){var t=function(r){if(void 0===e[r]){var n=document.querySelector(r);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(r){n=null}e[r]=n}return e[r]}(r);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(n)}},216:r=>{r.exports=function(r){var e=document.createElement("style");return r.setAttributes(e,r.attributes),r.insert(e,r.options),e}},565:(r,e,n)=>{r.exports=function(r){var e=n.nc;e&&r.setAttribute("nonce",e)}},795:r=>{r.exports=function(r){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=r.insertStyleElement(r);return{update:function(n){!function(r,e,n){var t="";n.supports&&(t+="@supports (".concat(n.supports,") {")),n.media&&(t+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(t+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),t+=n.css,o&&(t+="}"),n.media&&(t+="}"),n.supports&&(t+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(t,r,e.options)}(e,r,n)},remove:function(){!function(r){if(null===r.parentNode)return!1;r.parentNode.removeChild(r)}(e)}}}},589:r=>{r.exports=function(r,e){if(e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}}},e={};function n(t){var o=e[t];if(void 0!==o)return o.exports;var a=e[t]={id:t,exports:{}};return r[t](a,a.exports,n),a.exports}n.n=r=>{var e=r&&r.__esModule?()=>r.default:()=>r;return n.d(e,{a:e}),e},n.d=(r,e)=>{for(var t in e)n.o(e,t)&&!n.o(r,t)&&Object.defineProperty(r,t,{enumerable:!0,get:e[t]})},n.o=(r,e)=>Object.prototype.hasOwnProperty.call(r,e),n.nc=void 0,(()=>{var r=n(379),e=n.n(r),t=n(795),o=n.n(t),a=n(569),c=n.n(a),i=n(565),s=n.n(i),d=n(216),l=n.n(d),u=n(589),p=n.n(u),m=n(426),f={};f.styleTagTransform=p(),f.setAttributes=s(),f.insert=c().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=l(),e()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;const g=document.querySelector(".proj-form");g.addEventListener("submit",(function(r){r.preventDefault();const e=document.querySelector("#proj-name");var n;n=e.value.trim(),h.push(n),v(),localStorage.setItem("projList",JSON.stringify(h)),g.classList.add("hide"),x.classList.remove("hide"),g.reset()})),document.querySelector(".proj-cancel").addEventListener("click",(()=>{g.classList.add("hide"),x.classList.remove("hide"),g.reset()}));const x=document.querySelector(".addproj");x.addEventListener("click",(()=>{g.classList.remove("hide"),x.classList.add("hide")}));let h=[];function v(){const r=document.querySelector(".projects-ul");r.innerHTML="";for(const e of h){const n=document.createElement("button"),t=document.createElement("i");t.className="bx bxs-folder",n.appendChild(t),n.appendChild(document.createTextNode(e)),r.appendChild(n)}}localStorage.getItem("projList")&&(h=JSON.parse(localStorage.getItem("projList")));const b=document.querySelector(".list-form");b.addEventListener("submit",(function(r){r.preventDefault();const e=document.querySelector("#list-name");var n;n=e.value.trim(),k.push(n),S(),localStorage.setItem("listItems",JSON.stringify(k)),b.classList.add("hide"),y.classList.remove("hide"),b.reset()})),document.querySelector(".list-cancel").addEventListener("click",(()=>{b.classList.add("hide"),y.classList.remove("hide")}));const y=document.querySelector(".addlist");y.addEventListener("click",(()=>{b.classList.remove("hide"),y.classList.add("hide"),b.reset()}));let k=[];function S(){const r=document.querySelector(".lists-ul");r.innerHTML="";for(const e of k){const n=document.createElement("button"),t=document.createElement("i");t.className="bx bxs-folder",n.appendChild(t),n.appendChild(document.createTextNode(e)),r.appendChild(n)}}localStorage.getItem("listItems")&&(k=JSON.parse(localStorage.getItem("listItems")));const L=document.querySelector(".task-form");L.addEventListener("submit",(function(r){r.preventDefault();const e=document.querySelector("#task-title"),n=document.querySelector("#details"),t=document.querySelector("#dueDate"),o=document.querySelector("#priority");var a;a={name:e.value,dueDate:t.value,details:n.value,priority:o.checked},E.push(a),N(),localStorage.setItem("taskItems",JSON.stringify(E)),L.classList.add("hide"),w.classList.remove("hide"),L.reset()}));const w=document.querySelector(".addtask");w.addEventListener("click",(()=>{L.classList.remove("hide"),w.classList.add("hide")})),document.querySelector(".task-cancel").addEventListener("click",(()=>{L.classList.add("hide"),w.classList.remove("hide"),L.reset()}));let E=[];function N(){const r=document.querySelector(".all-tasks-ul");r.innerHTML="";for(const e of E){const n=document.createElement("li");n.className="task-content";const t=document.createElement("div");t.className="task";const o=document.createElement("div");o.className="name";const a=document.createElement("i");a.className="bx bx-task-x",o.appendChild(a),o.appendChild(document.createTextNode(e.name));const c=document.createElement("div");c.className="right";const i=document.createElement("i");i.className="bx bxs-trash";const s=document.createElement("i");s.className="bx bx-edit-alt",c.appendChild(document.createTextNode(e.dueDate)),c.append(i,s),t.append(o,c);const d=document.createElement("div");d.className="detail-content";const l=document.createElement("p");l.className="task-details";const u=document.createElement("i");u.className="bx bxs-right-arrow",l.appendChild(u),l.appendChild(document.createTextNode(e.details)),d.appendChild(l),e.priority&&n.classList.add("prio"),n.append(t,d),r.appendChild(n)}}localStorage.getItem("taskItems")&&(E=JSON.parse(localStorage.getItem("taskItems"))),window.onload=function(){v(),S(),N()}})()})();