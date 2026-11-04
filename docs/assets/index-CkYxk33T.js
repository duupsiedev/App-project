(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function a(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(i){if(i.ep)return;i.ep=!0;const n=a(i);fetch(i.href,n)}})();function l(t=""){return String(t).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function Q(t=[]){return t.map(e=>l(e)).join(", ")}function La(t,e,a){t.innerHTML=`<label class="list-toolbar below-sm">${a("employee.searchTeam")}<input type="search" data-team-search></label>
    <div class="team-directory">${e.map(o=>`<article class="team-row" data-team-row>
      <div><strong>${l(o.name)}</strong><p>${l(o.title)} · ${l(o.department)}</p><span>${l(o.email)}</span></div>
      <button class="btn subtle" data-compose-colleague="${l(o.id)}">${a("employee.write")}</button>
    </article>`).join("")}</div><p class="empty-state" data-team-empty ${e.length?"hidden":""}>${a("employee.emptyTeam")}</p>`,t.querySelector("[data-team-search]").oninput=o=>{const i=o.target.value.trim().toLocaleLowerCase(),n=[...t.querySelectorAll("[data-team-row]")];n.forEach(r=>{r.hidden=!r.textContent.toLocaleLowerCase().includes(i)}),t.querySelector("[data-team-empty]").hidden=n.some(r=>!r.hidden)}}function Na(t,e,a){const o=document.createElement("section");o.className="employee-today-tasks",o.innerHTML=`<h2>${a("employee.myWork")} (${e.length})</h2>${e.length?e.map(i=>`
    <div class="team-row"><div><strong>${l(i.title)}</strong><p>${a(`employee.${i.status}`)} · ${a(`employee.${i.priority}`)}${i.dueAt?` · ${l(i.dueAt)}`:""}</p>
    <small>${l(i.assignedEmployees.map(n=>n.name).join(", "))}</small></div>
    <button class="btn subtle" data-edit-task="${l(i.id)}">${a("taskWork.edit")}</button></div>`).join(""):`<p class="empty-state">${a("employee.noTasks")}</p>`}`,t.append(o)}function Oa(t,e,a,o){const i=e.formValues||{title:e.title,notes:"",dueAt:"",assignedTo:""};t.innerHTML=`<div class="drawer-backdrop" data-close-drawer></div><aside class="review-drawer" role="dialog" aria-modal="true" aria-label="${o("employee.followUp")}">
    <div class="drawer-header"><h2>${o("employee.followUp")}</h2><button class="btn subtle" data-close-drawer>${o("taskWork.cancel")}</button></div>
    <p>${o("employee.followUpNote")}</p>
    <form data-colleague-follow-up="${l(e.id)}" class="form-grid">
      <label>${o("taskWork.title")}<input name="title" required value="${l(i.title)}"></label>
      <label>${o("employee.recipient")}<select name="assignedTo" required><option value="">${o("tasks.unassigned")}</option>${a.map(n=>`<option value="${l(n.id)}" ${i.assignedTo===n.id?"selected":""}>${l(n.name)}</option>`).join("")}</select></label>
      <label>${o("taskWork.notes")}<textarea name="notes">${l(i.notes)}</textarea></label>
      <label>${o("taskWork.dueAt")}<input name="dueAt" type="date" value="${l(i.dueAt)}"></label>
      <button class="btn primary" type="submit">${o("employee.submit")}</button>
    </form></aside>`}/**
 * @license lucide v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ja={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ut=([t,e,a])=>{const o=document.createElementNS("http://www.w3.org/2000/svg",t);return Object.keys(e).forEach(i=>{o.setAttribute(i,String(e[i]))}),a!=null&&a.length&&a.forEach(i=>{const n=Ut(i);o.appendChild(n)}),o},ot=(t,e={})=>{const a="svg",o={...ja,...e};return Ut([a,o,t])};/**
 * @license lucide v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ua=[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"}],["path",{d:"M10 12h4"}]];/**
 * @license lucide v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pa=[["path",{d:"M12 8V4H8"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2"}],["path",{d:"M2 14h2"}],["path",{d:"M20 14h2"}],["path",{d:"M15 13v2"}],["path",{d:"M9 13v2"}]];/**
 * @license lucide v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ha=[["path",{d:"M20 6 9 17l-5-5"}]];/**
 * @license lucide v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kt=[["path",{d:"m9 18 6-6-6-6"}]];/**
 * @license lucide v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ba=[["circle",{cx:"12",cy:"12",r:"10"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16"}]];/**
 * @license lucide v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _a=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m16 9-5.5 5.5L8 12"}]];/**
 * @license lucide v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wa=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}]];/**
 * @license lucide v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const za=[["line",{x1:"2",x2:"22",y1:"2",y2:"22"}],["path",{d:"M10.41 10.41a2 2 0 1 1-2.83-2.83"}],["line",{x1:"13.5",x2:"6",y1:"13.5",y2:"21"}],["line",{x1:"18",x2:"21",y1:"12",y2:"15"}],["path",{d:"M3.59 3.59A1.99 1.99 0 0 0 3 5v14a2 2 0 0 0 2 2h14c.55 0 1.052-.22 1.41-.59"}],["path",{d:"M21 15V5a2 2 0 0 0-2-2H9"}]];/**
 * @license lucide v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pt=[["polyline",{points:"22 12 16 12 14 15 10 15 8 12 2 12"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"}]];/**
 * @license lucide v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Va=[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"}],["path",{d:"M9 18h6"}],["path",{d:"M10 22h4"}]];/**
 * @license lucide v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ga=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"}]];/**
 * @license lucide v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ht=[["path",{d:"M13 5h8"}],["path",{d:"M13 12h8"}],["path",{d:"M13 19h8"}],["path",{d:"m3 17 2 2 4-4"}],["path",{d:"m3 7 2 2 4-4"}]];/**
 * @license lucide v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ya=[["path",{d:"M13 5h8"}],["path",{d:"M13 12h8"}],["path",{d:"M13 19h8"}],["path",{d:"m3 17 2 2 4-4"}],["rect",{x:"3",y:"4",width:"6",height:"6",rx:"1"}]];/**
 * @license lucide v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qa=[["path",{d:"m16 17 5-5-5-5"}],["path",{d:"M21 12H9"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}]];/**
 * @license lucide v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ja=[["path",{d:"M4 5h16"}],["path",{d:"M4 12h16"}],["path",{d:"M4 19h16"}]];/**
 * @license lucide v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ka=[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21"}]];/**
 * @license lucide v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Za=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"}]];/**
 * @license lucide v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xa=[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor"}]];/**
 * @license lucide v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const it=[["path",{d:"M13 21h8"}],["path",{d:"m15 5 4 4"}],["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"}]];/**
 * @license lucide v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bt=[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]];/**
 * @license lucide v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const es=[["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"}],["path",{d:"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6"}],["rect",{x:"6",y:"14",width:"12",height:"8",rx:"1"}]];/**
 * @license lucide v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ts=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}],["path",{d:"M3 3v5h5"}],["path",{d:"M12 7v5l4 2"}]];/**
 * @license lucide v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _t=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7"}]];/**
 * @license lucide v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const as=[["path",{d:"m21 21-4.34-4.34"}],["circle",{cx:"11",cy:"11",r:"8"}]];/**
 * @license lucide v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wt=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"}],["circle",{cx:"12",cy:"12",r:"3"}]];/**
 * @license lucide v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ss=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"m9 12 2 2 4-4"}]];/**
 * @license lucide v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qe=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"}],["path",{d:"M20 2v4"}],["path",{d:"M22 4h-4"}],["circle",{cx:"4",cy:"20",r:"2"}]];/**
 * @license lucide v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const os=[["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M12 2v2"}],["path",{d:"M12 20v2"}],["path",{d:"m4.93 4.93 1.41 1.41"}],["path",{d:"m17.66 17.66 1.41 1.41"}],["path",{d:"M2 12h2"}],["path",{d:"M20 12h2"}],["path",{d:"m6.34 17.66-1.41 1.41"}],["path",{d:"m19.07 4.93-1.41 1.41"}]];/**
 * @license lucide v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const is=[["path",{d:"M16 7h6v6"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17"}]];/**
 * @license lucide v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const At=[["path",{d:"M9 14 4 9l5-5"}],["path",{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11"}]];/**
 * @license lucide v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ns=[["path",{d:"M12 3v12"}],["path",{d:"m17 8-5-5-5 5"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}]];/**
 * @license lucide v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zt=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}],["circle",{cx:"9",cy:"7",r:"4"}]];/**
 * @license lucide v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rs=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];function de(t,e){t&&t.prepend(ot(e,{width:18,height:18,"aria-hidden":"true"}))}const St={urgent:"#cf252c",invoice:"#397e28",lead:"#1254ed",pending:"#9a6700",default:"#687186"};function Ke(t,e){var a;return((a=e==null?void 0:e.labelColors)==null?void 0:a[t.id])||St[t.color]||St.default}function Vt(t){const e=t.slice(1).match(/../g).map(n=>parseInt(n,16)/255),[a,o,i]=e.map(n=>n<=.04045?n/12.92:((n+.055)/1.055)**2.4);return .2126*a+.7152*o+.0722*i>.179?"#000000":"#ffffff"}function ls(t,{form:e,categories:a,t:o,busy:i,onChange:n,onImage:r}){if(!e){t.replaceChildren();return}const c=p=>o(`preferences.${p}`);t.innerHTML=`
    <form data-preferences-form class="preferences-form">
      <fieldset class="preferences-section" ${i?"disabled":""}><legend>${o("employee.language")}</legend><select name="language" aria-label="${o("employee.language")}">${["workspace","en","fr"].map(p=>`<option value="${p}" ${e.language===p?"selected":""}>${o(`employee.${p}`)}</option>`).join("")}</select></fieldset>
      <fieldset class="preferences-section" ${i?"disabled":""}>
        <legend>${c("theme")}</legend>
        <div class="theme-options">
          ${["light","dark","system"].map(p=>`<label><input type="radio" name="theme" value="${p}" ${e.theme===p?"checked":""}><span data-theme-icon="${p}">${c(p)}</span></label>`).join("")}
        </div>
      </fieldset>
      <fieldset class="preferences-section" ${i?"disabled":""}>
        <legend>${c("background")}</legend>
        <div class="background-controls">
          <div class="background-preview" role="img" aria-label="${c("preview")}"><span>${c("noImage")}</span></div>
          <div class="form-grid">
            <label class="image-picker"><span data-upload-icon>${c(i?"uploading":"chooseImage")}</span><input type="file" data-preference-image accept="image/png,image/jpeg,image/webp" ${i?"disabled":""}></label>
            <small>${c("imageNote")}</small>
            <label>${c("dim")} <output data-dim-output>${e.backgroundDim}%</output><input type="range" name="backgroundDim" min="50" max="95" step="5" value="${e.backgroundDim}"></label>
            <button class="btn subtle" type="button" data-remove-background ${!e.backgroundImage||i?"disabled":""}>${c("removeImage")}</button>
          </div>
        </div>
      </fieldset>
      <fieldset class="preferences-section" ${i?"disabled":""}>
        <legend>${c("labels")}</legend>
        <p class="subtitle">${c("categoryNote")}</p>
        <div class="preference-categories">
          ${a.length?a.map(p=>`<div class="preference-category">
            <span class="badge" data-color-preview="${l(p.id)}">${l(p.name)}</span>
            <label class="visibility-choice"><input type="checkbox" data-category-visible="${l(p.id)}" ${e.hiddenCategoryIds.includes(p.id)?"":"checked"} ${p.active?"":"disabled"}>${p.active?c("show"):c("archived")}</label>
            <div class="color-controls">
              <label><span class="sr-only">${c("color")}: ${l(p.name)}</span><input type="color" data-label-color="${l(p.id)}" value="${Ke(p,e)}"></label>
              <button class="btn subtle icon-button" type="button" data-reset-label="${l(p.id)}" title="${c("defaultColor")}" aria-label="${c("defaultColor")}: ${l(p.name)}"></button>
            </div>
          </div>`).join(""):`<p class="empty-state">${c("empty")}</p>`}
        </div>
      </fieldset>
      <div class="actions preferences-actions">
        <button class="btn primary" type="submit" data-save-preferences ${i?"disabled":""}>${c(i?"saving":"save")}</button>
        <button class="btn subtle" type="button" data-discard-preferences ${i?"disabled":""}>${c("cancel")}</button>
        <button class="btn subtle" type="button" data-reset-preferences ${i?"disabled":""}>${c("reset")}</button>
      </div>
    </form>`;for(const[p,u]of[["light",os],["dark",Za],["system",Ka]])de(t.querySelector(`[data-theme-icon="${p}"]`),u);de(t.querySelector("[data-upload-icon]"),ns),de(t.querySelector("[data-remove-background]"),za),de(t.querySelector("[data-save-preferences]"),_t),de(t.querySelector("[data-discard-preferences]"),rs),de(t.querySelector("[data-reset-preferences]"),At),t.querySelectorAll("[data-reset-label]").forEach(p=>de(p,At));const g=()=>{const p=t.querySelector(".background-preview");p.style.backgroundImage=e.backgroundImage?`url("${e.backgroundImage}")`:"none",p.style.setProperty("--image-shading",String(e.backgroundDim/100)),p.querySelector("span").textContent=e.backgroundImage?c("preview"):c("noImage"),t.querySelectorAll("[data-color-preview]").forEach(u=>{const y=a.find(A=>A.id===u.dataset.colorPreview),k=Ke(y,e);u.style.backgroundColor=k,u.style.color=Vt(k)})};g(),t.oninput=p=>{const u=p.target;if(u.name==="theme")e.theme=u.value;else if(u.name==="language")e.language=u.value;else if(u.name==="backgroundDim")e.backgroundDim=Number(u.value),t.querySelector("[data-dim-output]").textContent=`${e.backgroundDim}%`;else if(u.dataset.labelColor)e.labelColors[u.dataset.labelColor]=u.value;else if(u.dataset.categoryVisible)e.hiddenCategoryIds=e.hiddenCategoryIds.filter(y=>y!==u.dataset.categoryVisible),u.checked||e.hiddenCategoryIds.push(u.dataset.categoryVisible);else return;n(e),g()},t.onchange=p=>{var u;p.target.matches("[data-preference-image]")&&r((u=p.target.files)==null?void 0:u[0])},t.onclick=p=>{const u=p.target.closest("button");if(u!=null&&u.dataset.resetLabel){const y=u.dataset.resetLabel;delete e.labelColors[y];const k=Ke(a.find(A=>A.id===y),e);t.querySelectorAll("[data-label-color]").forEach(A=>{A.dataset.labelColor===y&&(A.value=k)}),n(e),g()}}}async function ds(t){if(!t||!["image/jpeg","image/png","image/webp"].includes(t.type)||t.size>5*1024*1024)throw new Error("invalidImage");const e=await createImageBitmap(t);try{if(!e.width||!e.height||e.width*e.height>4e7)throw new Error("invalidImage");const a=Math.min(1,1600/Math.max(e.width,e.height)),o=document.createElement("canvas");o.width=Math.max(1,Math.round(e.width*a)),o.height=Math.max(1,Math.round(e.height*a));const i=o.getContext("2d");i.fillStyle="#ffffff",i.fillRect(0,0,o.width,o.height),i.drawImage(e,0,0,o.width,o.height);for(const n of[.82,.65,.45,.3]){const r=o.toDataURL("image/jpeg",n);if(r.length<=7e5)return r}throw new Error("invalidImage")}finally{e.close()}}const Gt=window.matchMedia("(prefers-color-scheme: dark)");function Yt(){const t=document.documentElement;t.dataset.theme=t.dataset.themePreference==="system"?Gt.matches?"dark":"light":t.dataset.themePreference||"light"}Gt.addEventListener("change",Yt);function cs(t,e){const a=document.documentElement;a.dataset.themePreference=(t==null?void 0:t.theme)||"light",Yt(),a.classList.toggle("has-personal-background",!!(t!=null&&t.backgroundImage)),a.style.setProperty("--personal-background",t!=null&&t.backgroundImage?`url("${t.backgroundImage}")`:"none"),a.style.setProperty("--image-shading",String(((t==null?void 0:t.backgroundDim)??80)/100)),document.querySelectorAll("[data-category-label]").forEach(i=>{var c;const n=e.find(g=>g.name===i.dataset.categoryLabel),r=(c=t==null?void 0:t.labelColors)==null?void 0:c[n==null?void 0:n.id];r&&(i.style.backgroundColor=r,i.style.color=Vt(r),i.style.borderColor=r)}),[["[data-add-task],[data-add-employee],[data-add-category],[data-new-compose]",Bt],["[data-edit-task],[data-edit-employee],[data-edit-category],[data-edit-rule]",it],["[data-save-task-note],[data-save-settings],[data-save-employee],[data-save-category],[data-save-rule],[data-save-draft],[data-save-compose]",_t],["[data-archive-email],[data-archive-filtered]",Ua],["[data-review-task]",ts],["[data-approve-draft]",Ha],["[data-print-compose]",es],["[data-logout-demo]",Qa]].forEach(([i,n])=>document.querySelectorAll(i).forEach(r=>{if(r.querySelector("svg"))return;const c=ot(n,{width:18,height:18,"aria-hidden":"true"});c.classList.add("courio-icon"),r.prepend(c)}))}const xe=new Map,Xe=new Map,et=new Map;let Et;const Dt=t=>String(t||"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLocaleLowerCase();let ve="general",Ct;function f(t,e,a){const o=document.createElement(t);return e&&(o.className=e),a!==void 0&&(o.textContent=a),o}function X(t){const e=ot(t,{width:22,height:22,"aria-hidden":"true"});return e.classList.add("courio-icon"),e}function Qt(t="Courio"){return t.trim().split(/\s+/).slice(0,2).map(e=>e[0]||"").join("").toUpperCase()}function ue(t,e,a){const o=f("button","btn",t);return o.type="button",e&&o.prepend(X(e)),a&&o.addEventListener("click",a),o}function us({state:t,t:e,canAccessTab:a,navigateTo:o}){var A,C,ee,N;const i=document.querySelector(".nav"),n=F=>e(`design.${F}`),r=[["dashboard","today",Wa],["triage","inbox",Pt],["tasks","tasks",Ya],["drafts","drafts",it],["compose","compose",Bt],["rules","automation",Pa],[((A=t.session)==null?void 0:A.role)==="Employee"?"team":"admin","team",zt,"employees"],["import","connection",Ga],["admin","settings",Wt,"general"],["preferences","preferences",Xa]];i.replaceChildren();for(const[F,x,_,R]of r){x==="automation"&&i.append(f("div","nav-label workspace-label",n("workspace")));const K=ue(F==="team"?e("employee.team"):F==="preferences"?e("preferences.title"):n(x),_,()=>{R&&(ve=R),document.querySelector(".app").classList.remove("menu-open"),o(F)});K.dataset.destination=F,K.hidden=!a(F),K.classList.toggle("active",t.tab===F&&(!R||(R==="general"?ve==="general":ve!=="general"))),F==="compose"&&K.classList.add("nav-compose"),i.append(K)}document.querySelector(".brand-title").replaceChildren(X(qe),document.createTextNode("Courio")),document.querySelector(".brand-sub").textContent=n("local");let g=document.querySelector(".workspace-topbar");g||(g=f("header","workspace-topbar"),document.querySelector("main").prepend(g));const p=ue("",Ja,()=>document.querySelector(".app").classList.toggle("menu-open"));p.classList.add("mobile-menu"),p.title=n("toggleMenu"),p.setAttribute("aria-label",n("toggleMenu"));const u=ue(n("ask"),qe);u.classList.add("topbar-assistant"),u.dataset.assistantToggle="",g.replaceChildren(p,u);const y=document.querySelector(".session-pill");if(y){const F=f("span","avatar",Qt(t.session.name));F.setAttribute("aria-hidden","true"),y.prepend(F),g.append(y)}document.documentElement.lang=["en","fr"].includes((C=t.preferences)==null?void 0:C.language)?t.preferences.language:t.settings.language||"en";const k={dashboard:"today",triage:"inbox",tasks:"tasks",compose:"compose",drafts:"drafts",rules:"automation",admin:"settings",import:"connection"};document.querySelector("#pageTitle").textContent=t.tab==="dashboard"?`${n("hello")}, ${((N=(ee=t.session)==null?void 0:ee.name)==null?void 0:N.split(" ")[0])||"Courio"}`:n(k[t.tab]),t.tab==="dashboard"&&(document.querySelector("#pageSubtitle").textContent=n("attention")),t.tab==="preferences"&&(document.querySelector("#pageTitle").textContent=e("preferences.title"),document.querySelector("#pageSubtitle").textContent=e("preferences.subtitle")),t.tab==="team"&&(document.querySelector("#pageTitle").textContent=e("employee.team"),document.querySelector("#pageSubtitle").textContent=e("employee.teamNote"))}function ps({state:t,t:e,navigateTo:a}){var F;const o=document.querySelector("#dashboard"),i=o.querySelectorAll(":scope > .cols-2 > .panel"),n=i[0],r=i[1];if(!n||!r)return;const c=x=>e(`design.${x}`),g=[t.emails.filter(x=>x.urgency==="High"&&x.status!=="Done").length,t.drafts.filter(x=>x.awaitingApproval).length,t.tasks.filter(x=>x.status!=="Done").length],p=[()=>a("triage",{triageFilter:"urgent"}),()=>a("drafts",{draftFilter:"needs_approval"}),()=>a("tasks")],u=f("div","overview-metrics");[Ba,it,_a].forEach((x,_)=>{const R=ue("",null,p[_]);R.className=`overview-metric metric-tone-${_}`;const K=f("span","metric-symbol");K.append(X(x));const Ie=f("span","metric-content");Ie.append(f("strong","",String(g[_])),f("span","",c(["urgent","pending","openTasks"][_]))),R.append(K,Ie,X(kt)),u.append(R)});const y=ue(c("start"),qe,p[0]);y.classList.add("primary","start-review");const k=f("section","next-actions"),A=f("h2","");A.append(X(Ht),document.createTextNode(c("next"))),k.append(A),["urgentAction","draftAction","taskAction"].forEach((x,_)=>{const R=ue("",null,p[_]);R.className="next-action",R.append(f("span","step-num",String(_+1)),f("span","",`${c(x)} (${g[_]})`),X(kt)),k.append(R)}),n.className="digest-surface",n.querySelector("h2").textContent=c("digest"),n.querySelector("h2").prepend(X(is));const C=n.querySelector("table");if(C){const x=f("details","digest-details");x.append(f("summary","",c("fullDigest")),C),n.querySelector(".subtitle").after(x)}r.className="recommendations-surface",r.querySelector("h2").textContent=c("recommendations"),r.querySelector("h2").prepend(X(Va));const ee=f("div","overview-summary");ee.append(n,r);const N=f("div","overview-lower");N.append(k,ee),o.replaceChildren(u,y,N),((F=t.session)==null?void 0:F.role)==="Employee"&&Na(o,t.tasks,e)}function Ze({state:t,t:e},a,o){var ht;const i=document.querySelector(`#${a}`),n=i.querySelector("table");if(!(n!=null&&n.tBodies[0]))return;const r=L=>e(`design.${L}`),c=[...n.tBodies[0].rows],g=o.records,p=f("div","queue-workspace"),u=f("div","queue-list"),y=f("article","queue-detail");y.id=`${a}Detail`;const k=f("label","queue-search");k.append(X(as));const A=f("input","");A.type="search",A.placeholder=r("search"),A.setAttribute("aria-label",r("search")),A.value=Xe.get(a)||"",k.append(A),u.append(k);const C=et.get(a)||{status:"all",priority:"all",due:"all"},ee=f("div","queue-extra-filters");if(a!=="drafts"){const L=[["status",["all","Open","Done"]],["priority",["all","High","Medium","Low"]]];a==="tasks"&&L.push(["due",["all","overdue","today"]]);for(const[G,I]of L){const T=f("label","",e(`employee.${G}`)),Z=f("select");Z.dataset.queueFilter=G,I.forEach(re=>{const oe=f("option","",e(`employee.${re}`));oe.value=re,Z.append(oe)}),Z.value=C[G],Z.onchange=()=>{C[G]=Z.value,et.set(a,C),Ye()},T.append(Z),ee.append(T)}u.append(ee),A.placeholder=e(a==="tasks"?"employee.searchTasks":"employee.searchInbox")}const N=[];let F=xe.get(a);const x=a==="triage"?t.selectedEmail:a==="drafts"?t.selectedDraft:null;x&&(F=x.id),c.forEach(L=>{const G=L.querySelector(o.trigger);if(!G)return;const I=G.getAttribute(o.attribute),T=g.find(P=>P.id===I);if(!T)return;const Z=[...L.cells],re=f("div","queue-entry"),oe=f("button","queue-item");oe.type="button";const Fe=o.title(T),Qe=o.subtitle(T),Fa=f("span","avatar",Qt(o.avatar(T))),Je=f("span","queue-item-copy");Je.append(f("strong","",Fe),f("span","",Qe));const xa=f("small","",o.status(T));if(Je.append(xa),oe.append(Fa,Je),o.checkColumn!==void 0){const P=Z[o.checkColumn].querySelector("input");P&&(P.setAttribute("aria-label",`${r(a==="drafts"?"review":"done")}: ${Fe}`),re.append(P))}re.append(oe),u.append(re);const le=f("div","record-detail"),Ma=f("h2","record-heading",Fe);le.append(Ma,f("p","record-subtitle",Qe));const qa=Z.at(-1),yt=f("div","actions record-actions");if(yt.append(...qa.childNodes),le.append(yt),a==="triage"){const P=f("div","email-body",T.body||"");le.append(P);const be=f("section","reason-surface"),fe=f("h3","",r("reason"));fe.prepend(X(qe)),be.append(fe,f("p","",T.explanation||"")),le.append(be)}const wt=f("div","record-fields");Z.slice(0,-1).forEach((P,be)=>{if(o.omit.includes(be))return;const fe=f("section","record-field");fe.append(f("h3","",r(o.labels[be])));const $t=f("div","record-field-value");$t.append(...P.childNodes),fe.append($t),wt.append(fe)}),le.append(wt);const bt=()=>{xe.set(a,I),N.forEach(P=>{P.entry.classList.toggle("active",P.id===I),P.select.setAttribute("aria-pressed",String(P.id===I))}),y.replaceChildren(le)};oe.addEventListener("click",()=>{bt(),a!=="tasks"&&G.click()}),N.push({id:I,entry:re,select:oe,view:le,choose:bt,record:T,text:Dt([Fe,Qe,T.body,T.senderEmail,T.notes,T.description,T.category,...(T.assignedEmployees||[]).map(P=>P.name)].join(" "))})});const _=f("p","empty-state",r("noMatch"));_.hidden=!0,u.append(_);const R=i.querySelector("[data-archive-filtered]"),K=R==null?void 0:R.disabled,Ie=(R==null?void 0:R.title)||"",Ye=()=>{var G;const L=Dt(A.value).trim();if(Xe.set(a,A.value),N.forEach(I=>{const T=I.record;I.entry.hidden=!I.text.includes(L)||C.status!=="all"&&T.status!==C.status||C.priority!=="all"&&(T.priority||T.urgency)!==C.priority||C.due==="overdue"&&!T.overdue||C.due==="today"&&!T.dueToday}),_.hidden=N.some(I=>!I.entry.hidden),R){const I=!!L||Object.values(C).some(T=>T!=="all");R.disabled=K||I,R.title=I?e("employee.clearFilters"):Ie}_.hidden?N.some(I=>I.id===xe.get(a)&&!I.entry.hidden&&y.contains(I.view))||(G=N.find(I=>!I.entry.hidden))==null||G.choose():y.replaceChildren(f("p","empty-state",r("noMatch")))};A.addEventListener("input",Ye),Ye(),(ht=N.find(L=>L.id===F&&!L.entry.hidden)||N.find(L=>!L.entry.hidden))==null||ht.choose(),p.append(u,y),n.replaceWith(p);const Ia=p.parentElement;for(const L of[...Ia.children])(L.classList.contains("segmented")||L.classList.contains("list-toolbar"))&&k.after(L);i.classList.add("work-queue")}function ms({state:t,t:e}){var c,g,p;const a=document.querySelector("#drawerRoot > .review-drawer"),o=t.tab==="triage"&&t.selectedEmail?document.querySelector("#triageDetail"):t.tab==="drafts"&&t.selectedDraft?document.querySelector("#draftsDetail"):null;if(!a||!o)return;a.classList.add("inline-review");const i=[...a.querySelectorAll(":scope > .drawer-section")],n=[...a.querySelectorAll(":scope > .drawer-grid")],r=a.querySelector(".drawer-actions");if(t.selectedEmail){a.querySelector(".drawer-header").after(r);const y=f("details","review-extra");y.append(f("summary","",e("design.more"))),y.append(...n.slice(1),i[1],i[2],i[4]),(g=(c=i[0])==null?void 0:c.querySelector(".preview"))==null||g.classList.add("review-email-body"),(p=i[3])==null||p.classList.add("reason-surface"),a.querySelector(".drawer-note").before(y),t.summary&&i[5]&&r.after(i[5])}else{const u=f("details","review-extra");u.append(f("summary","",e("design.source")),i[0],i[1]),a.querySelector(".drawer-header").after(u),n.forEach(y=>y.classList.add("draft-summary-stats"))}o.replaceChildren(a),document.querySelector("#drawerRoot").replaceChildren()}function gs({t}){const e=document.querySelector("#compose > .grid > .panel");if(!e)return;const a=e.querySelector(":scope > .preview"),o=e.querySelector(":scope > .drawer-section"),i=e.querySelector(":scope > .actions"),n=e.querySelector(".form-grid > .preview"),r=e.querySelector(".panel-title > div");if(r==null||r.remove(),o){const c=f("details","compose-metadata");c.append(f("summary","",t("compose.attachmentMetadata")),o),n&&c.append(n),i.before(c)}a&&(a.classList.add("compose-safety"),e.append(a))}function fs({state:t,t:e}){const a=document.querySelector("#admin"),o=a.querySelector(":scope > .grid");if(!o)return;const i=[...o.children];if(i.length!==5)return;const n=["general","safety","employees","categories","activity"],r=f("div","settings-workspace"),c=f("nav","settings-nav");c.setAttribute("aria-label",e("design.settings"));const g=f("div","settings-content"),p=y=>{ve=y,i.forEach((k,A)=>{k.hidden=n[A]!==y}),c.querySelectorAll("button").forEach(k=>k.classList.toggle("active",k.dataset.settingsSection===y))};n.forEach((y,k)=>{const A=ue(e(`design.${y}`),[Wt,ss,zt,Pt,Ht][k],()=>p(y));A.dataset.settingsSection=y,c.append(A),i[k].classList.add("settings-surface"),g.append(i[k])}),r.append(c,g),a.replaceChildren(r),p(ve);const u=i[0].querySelector("[data-reset-demo]");if(u){const y=f("section","settings-reset"),k=f("h3","",e("design.reset"));y.append(k,u),i[0].append(y)}}function vs(t){var a,o;const{state:e}=t;Et!==((a=e.session)==null?void 0:a.id)&&(Xe.clear(),xe.clear(),et.clear(),Et=(o=e.session)==null?void 0:o.id),Ct==="admin"&&e.tab!=="admin"&&(ve="general"),Ct=e.tab,us(t),ps(t),Ze(t,"triage",{records:e.emails,trigger:"[data-review-email]",attribute:"data-review-email",title:i=>i.subject,subtitle:i=>i.sender,avatar:i=>i.sender,status:i=>`${i.category} · ${i.workflowLabel||i.status}`,omit:[0,1],labels:["subject","sender","category","assigned","workflow","status"]}),Ze(t,"drafts",{records:e.drafts,trigger:"[data-review-draft]",attribute:"data-review-draft",checkColumn:0,title:i=>i.title,subtitle:i=>i.source,avatar:i=>i.source,status:i=>i.statusLabel,omit:[0,1],labels:["review","subject","source","risk","status"]}),Ze(t,"tasks",{records:e.tasks,trigger:"[data-review-task]",attribute:"data-review-task",checkColumn:0,title:i=>i.title,subtitle:i=>{var n;return((n=i.assignedEmployee)==null?void 0:n.name)||t.t("tasks.unassigned")},avatar:i=>{var n;return((n=i.assignedEmployee)==null?void 0:n.name)||i.title},status:i=>`${i.priority} · ${i.status}`,omit:[0],labels:["done","details","priority","assigned","source","notes"]}),ms(t),fs(t),gs(t)}function hs(t,e,a,o,i){const n=c=>i(`taskWork.${c}`),r=(c,g)=>c.map(p=>`<option value="${p}" ${p===g?"selected":""}>${n(p)}</option>`).join("");t.innerHTML=`
    <div class="drawer-backdrop" data-close-drawer></div>
    <aside class="review-drawer" role="dialog" aria-modal="true" aria-label="${n(e.id?"edit":"add")}">
      <div class="drawer-header"><h2>${n(e.id?"edit":"add")}</h2><button class="btn subtle" data-close-drawer>${n("cancel")}</button></div>
      <form data-task-editor class="form-grid">
        <label>${n("title")}<input name="title" required value="${l(e.title||"")}"></label>
        <label>${n("notes")}<textarea name="notes">${l(e.notes||"")}</textarea></label>
        <label>${n("priority")}<select name="priority">${r(["High","Medium","Low"],e.priority||"Medium")}</select></label>
        <label>${n("dueAt")}<input type="date" name="dueAt" value="${l(e.dueAt||"")}"></label>
        ${o?`<label>${n("assignedTo")}<select name="assignedTo"><option value="">${i("tasks.unassigned")}</option>${a.map(c=>`<option value="${l(c.id)}" ${e.assignedTo===c.id?"selected":""}>${l(c.name)}</option>`).join("")}</select></label>`:""}
        ${e.id?`<label>${n("status")}<select name="status">${r(["Open","Done"],e.status)}</select></label>`:""}
        ${o||e.canManageCollaborators||!e.id?`<fieldset class="task-collaborators" data-collaborators-editable><legend>${i("employee.collaborators")}</legend>${a.filter(c=>c.id!==e.assignedTo).map(c=>{var g;return`<label><input type="checkbox" name="collaboratorIds" value="${l(c.id)}" ${(g=e.collaboratorIds)!=null&&g.includes(c.id)?"checked":""}>${l(c.name)}</label>`}).join("")}</fieldset>`:""}
        <button class="btn primary" type="submit">${n("save")}</button>
      </form>
    </aside>`}const Tt={en:{today:"Today",inbox:"Inbox",tasks:"Tasks",drafts:"Drafts",compose:"New message",automation:"Automation",team:"Team & categories",connection:"Connection",settings:"Settings",workspace:"Workspace",ask:"Ask Courio...",hello:"Hello",attention:"Here is what needs your attention today.",urgent:"urgent emails",pending:"drafts awaiting approval",openTasks:"tasks to complete",start:"Start reviewing",next:"Next actions",urgentAction:"Review urgent messages",draftAction:"Review drafts awaiting approval",taskAction:"Complete assigned tasks",digest:"Morning digest",recommendations:"Recommendations",fullDigest:"View full digest",general:"General",employees:"Team",categories:"Categories",activity:"Activity",safety:"Demo safeguards",reset:"Reset demo data",search:"Search this list...",noMatch:"No items match your search.",select:"Select an item to review its details.",review:"Review",summary:"Courio summary",reason:"Why this priority?",noSend:"Approval makes a draft ready for human send. This demo never sends email.",local:"Local demo",details:"Details",close:"Close",more:"More details",edit:"Review and edit",saved:"Saved drafts",account:"Demo account",itemCount:"items",filters:"Filters",status:"Status",source:"Source",subject:"Subject",sender:"Sender",category:"Category",assigned:"Assigned to",workflow:"Workflow",risk:"Risk",notes:"Notes",priority:"Priority",done:"Complete",toggleMenu:"Toggle navigation",clearSearch:"Clear the list search before removing filtered emails."},fr:{today:"Aujourd'hui",inbox:"Boîte de réception",tasks:"Tâches",drafts:"Brouillons",compose:"Nouveau message",automation:"Automatisation",team:"Équipe et catégories",connection:"Connexion",settings:"Paramètres",workspace:"Espace de travail",ask:"Demander à Courio...",hello:"Bonjour",attention:"Voici ce qui demande votre attention aujourd'hui.",urgent:"courriels urgents",pending:"brouillons à approuver",openTasks:"tâches à compléter",start:"Commencer la révision",next:"Prochaines actions",urgentAction:"Examiner les messages urgents",draftAction:"Réviser les brouillons en attente",taskAction:"Compléter les tâches assignées",digest:"Résumé du matin",recommendations:"Recommandations",fullDigest:"Voir le résumé complet",general:"Général",employees:"Équipe",categories:"Catégories",activity:"Activité",safety:"Garanties de la démo",reset:"Réinitialiser les données de démonstration",search:"Rechercher dans cette liste...",noMatch:"Aucun élément ne correspond à votre recherche.",select:"Sélectionnez un élément pour consulter ses détails.",review:"Réviser",summary:"Résumé par Courio",reason:"Pourquoi cette priorité?",noSend:"L'approbation prépare un brouillon pour un envoi humain. Cette démo n'envoie jamais de courriel.",local:"Démo locale",details:"Détails",close:"Fermer",more:"Plus de détails",edit:"Réviser et modifier",saved:"Brouillons enregistrés",account:"Compte de démonstration",itemCount:"éléments",filters:"Filtres",status:"Statut",source:"Source",subject:"Objet",sender:"Expéditeur",category:"Catégorie",assigned:"Assigné à",workflow:"Flux de travail",risk:"Risque",notes:"Notes",priority:"Priorité",done:"Terminer",toggleMenu:"Afficher ou masquer la navigation",clearSearch:"Effacez la recherche avant de retirer les courriels filtrés."}},Rt={en:{collaboratorIds:"Additional assignees",followUpRequested:"Follow-up requested from a colleague",add:"Add task",edit:"Edit task",emailTask:"Open / assign task",title:"Title",notes:"Notes",priority:"Priority",assignedTo:"Assigned to",dueAt:"Due date",status:"Status",High:"High",Medium:"Medium",Low:"Low",Open:"Open",Done:"Complete",save:"Save task",cancel:"Cancel",saved:"Task saved.",restored:"Task change restored.",updated:"Task updated",created:"Task created",restore:"Restore previous values",restoreTitle:"Restore this task change?",restoreMessage:"Restore the values shown below? Later changes to these fields will be replaced. Email approval is unaffected.",legacy:"Older activity has no saved values to restore.",titleRequired:"Enter a task title.",invalidPriority:"Choose a valid priority.",invalidStatus:"Choose a valid task status.",invalidAssignee:"This employee is no longer available. Choose an existing employee.",invalidDate:"Choose a valid due date.",notFound:"Task not found.",forbidden:"Your demo account cannot make this task change.",noSnapshot:"This activity has no saved values to restore.",none:"None",myTasks:"My tasks"},fr:{collaboratorIds:"Autres responsables",followUpRequested:"Suivi demandé à un collègue",add:"Ajouter une tâche",edit:"Modifier la tâche",emailTask:"Ouvrir / assigner la tâche",title:"Titre",notes:"Notes",priority:"Priorité",assignedTo:"Assignée à",dueAt:"Échéance",status:"Statut",High:"Élevée",Medium:"Moyenne",Low:"Faible",Open:"Ouverte",Done:"Terminée",save:"Enregistrer la tâche",cancel:"Annuler",saved:"Tâche enregistrée.",restored:"Modification restaurée.",updated:"Tâche modifiée",created:"Tâche créée",restore:"Restaurer les valeurs précédentes",restoreTitle:"Restaurer cette modification?",restoreMessage:"Restaurer les valeurs ci-dessous? Les modifications ultérieures de ces champs seront remplacées. L'approbation du courriel reste inchangée.",legacy:"Cette ancienne activité ne contient aucune valeur à restaurer.",titleRequired:"Saisissez un titre.",invalidPriority:"Choisissez une priorité valide.",invalidStatus:"Choisissez un statut valide.",invalidAssignee:"Cet employé n'est plus disponible. Choisissez un employé existant.",invalidDate:"Choisissez une date valide.",notFound:"Tâche introuvable.",forbidden:"Votre compte de démonstration ne peut pas effectuer cette modification.",noSnapshot:"Cette activité ne contient aucune valeur à restaurer.",none:"Aucune",myTasks:"Mes tâches"}},It={en:{title:"My preferences",subtitle:"Appearance for your demo account only.",theme:"Theme",light:"Light",dark:"Dark",system:"Use device setting",background:"Background image",chooseImage:"Choose image",removeImage:"Remove image",imageNote:"JPEG, PNG or WebP, up to 5 MB. Resized and saved only in this browser.",dim:"Background shading",preview:"Background preview",noImage:"Default background",labels:"Label colors and category shortcuts",color:"Color",show:"Show in category filter",categoryNote:"Hidden shortcuts do not hide messages. All categories still includes every message you can access.",defaultColor:"Use shared color",archived:"Archived",save:"Save my preferences",saving:"Saving...",cancel:"Discard changes",reset:"Restore my defaults",saved:"Your preferences were saved.",resetDone:"Your appearance preferences were reset.",uploading:"Preparing image...",empty:"No categories available.",invalid:"Choose valid appearance preferences.",invalidImage:"Choose a valid JPEG, PNG or WebP image within the size limit.",storageFull:"Browser storage is full. Remove the background image or choose a smaller one. Your saved preferences have not changed.",sessionRequired:"Sign in to a demo account before saving preferences.",resetTitle:"Reset your appearance?",resetMessage:"Your theme, background, label colors and category shortcuts will return to defaults. Other accounts and workspace settings will not change."},fr:{title:"Mes préférences",subtitle:"L'apparence de votre compte de démonstration seulement.",theme:"Thème",light:"Clair",dark:"Sombre",system:"Selon l'appareil",background:"Image de fond",chooseImage:"Choisir une image",removeImage:"Retirer l'image",imageNote:"JPEG, PNG ou WebP, 5 Mo maximum. Redimensionnée et enregistrée uniquement dans ce navigateur.",dim:"Voile de lisibilité",preview:"Aperçu du fond",noImage:"Fond par défaut",labels:"Couleurs et raccourcis des catégories",color:"Couleur",show:"Afficher dans le filtre des catégories",categoryNote:"Masquer un raccourci ne masque aucun message. Toutes les catégories inclut tous les messages auxquels vous avez accès.",defaultColor:"Utiliser la couleur partagée",archived:"Archivée",save:"Enregistrer mes préférences",saving:"Enregistrement...",cancel:"Annuler les modifications",reset:"Rétablir mes valeurs par défaut",saved:"Vos préférences sont enregistrées.",resetDone:"Vos préférences d'apparence ont été réinitialisées.",uploading:"Préparation de l'image...",empty:"Aucune catégorie disponible.",invalid:"Choisissez des préférences d'apparence valides.",invalidImage:"Choisissez une image JPEG, PNG ou WebP valide respectant la taille maximale.",storageFull:"Le stockage du navigateur est plein. Retirez l'image de fond ou choisissez-en une plus petite. Vos préférences enregistrées restent inchangées.",sessionRequired:"Connectez-vous à un compte de démonstration avant d'enregistrer vos préférences.",resetTitle:"Réinitialiser votre apparence?",resetMessage:"Votre thème, fond, couleurs et raccourcis reviendront aux valeurs par défaut. Les autres comptes et les paramètres de l'espace de travail resteront inchangés."}},Ft={en:{finishCompose:"Save or finish your current composed draft before starting a message to a colleague.",team:"Team directory",teamNote:"Find a colleague and prepare a message.",email:"Email",write:"Write a message",myWork:"All my assigned tasks",noTasks:"No assigned tasks yet.",collaborators:"Additional assignees",shared:"Shared task",followUp:"Request a colleague's follow-up",followUpNote:"Creates a local task for your colleague. No email is sent.",requested:"Follow-up task assigned.",requestedBy:"Requested by",recipient:"Assign follow-up to",submit:"Create follow-up task",language:"My language",workspace:"Use workspace language",en:"English",fr:"Français",status:"Status",priority:"Priority",due:"Due date",all:"All",Open:"Open",Done:"Complete",High:"High",Medium:"Medium",Low:"Low",overdue:"Overdue",today:"Due today",unassigned:"Unassigned",clearFilters:"Clear search and additional filters before removing filtered emails.",automation:"Workspace automation",automationNote:"Enabled rules apply across the workspace. Suggestions require review; nothing is sent automatically.",noRules:"No enabled workspace rule matches this message.",applyCategory:"Use suggested category",applied:"Suggested category applied.",approvalNote:"You can review and save your drafts. An admin must approve them before they are ready for human send.",composed:"My composed drafts",searchTeam:"Search name, role, department or email",emptyTeam:"No colleagues match this search.",followUpRequested:"Follow-up requested from a colleague",searchInbox:"Search sender, subject, address or message",searchTasks:"Search task, notes or assignee"},fr:{finishCompose:"Enregistrez ou terminez votre brouillon actuel avant de commencer un message pour un collègue.",team:"Répertoire de l'équipe",teamNote:"Trouvez un collègue et préparez un message.",email:"Courriel",write:"Écrire un message",myWork:"Toutes mes tâches assignées",noTasks:"Aucune tâche assignée pour le moment.",collaborators:"Autres responsables",shared:"Tâche partagée",followUp:"Demander un suivi à un collègue",followUpNote:"Crée une tâche locale pour votre collègue. Aucun courriel n'est envoyé.",requested:"Tâche de suivi assignée.",requestedBy:"Demandé par",recipient:"Assigner le suivi à",submit:"Créer la tâche de suivi",language:"Ma langue",workspace:"Langue de l'espace de travail",en:"English",fr:"Français",status:"Statut",priority:"Priorité",due:"Échéance",all:"Tous",Open:"Ouverte",Done:"Terminée",High:"Élevée",Medium:"Moyenne",Low:"Faible",overdue:"En retard",today:"Aujourd'hui",unassigned:"Non assignée",clearFilters:"Effacez la recherche et les filtres supplémentaires avant de retirer les courriels filtrés.",automation:"Automatisation de l'espace de travail",automationNote:"Les règles activées s'appliquent à toute l'équipe. Les suggestions doivent être révisées; aucun envoi automatique.",noRules:"Aucune règle active ne correspond à ce message.",applyCategory:"Utiliser la catégorie suggérée",applied:"Catégorie suggérée appliquée.",approvalNote:"Vous pouvez réviser et enregistrer vos brouillons. Un administrateur doit les approuver avant l'envoi manuel.",composed:"Mes brouillons rédigés",searchTeam:"Rechercher un nom, rôle, service ou courriel",emptyTeam:"Aucun collègue ne correspond à cette recherche.",followUpRequested:"Suivi demandé à un collègue",searchInbox:"Rechercher expéditeur, objet, adresse ou message",searchTasks:"Rechercher tâche, notes ou responsable"}},Jt={en:{employee:Ft.en,preferences:It.en,taskWork:Rt.en,design:Tt.en,brand:{subtitle:"Email assistant for small businesses",asideNote:"Courio uses fake local mailbox data in this prototype and suggests actions. It never sends email or modifies a real mailbox.",previewMode:"Preview mode enabled"},nav:{groups:{home:"Home",work:"Work",automation:"Automation",workspace:"Workspace"},dashboard:"Overview",dashboardSmall:"Today",triage:"Triage",triageSmall:"Inbox",tasks:"Tasks",tasksSmall:"Priority",compose:"Compose",composeSmall:"Local draft",drafts:"Drafts",draftsSmall:"Approval",rules:"Rules",rulesSmall:"Preview",import:"Setup preview",importSmall:"Microsoft 365",admin:"Admin",adminSmall:"Settings"},pages:{dashboard:["Overview","A local workflow preview for email triage, summaries, routing suggestions, and draft preparation."],import:["Setup preview","Preview how a future Microsoft 365 connection could import mailbox structure and workflow patterns."],triage:["Inbox triage","Review AI-classified messages before any action is taken."],tasks:["Action Center","Turn important local inbox items into a priority work list."],compose:["Compose","Create a fake/local message draft without sending anything."],rules:["Rules","Approve or adjust local rule previews. They do not affect a real mailbox."],drafts:["Drafts","Review prepared replies and mark them ready for a person to send."],admin:["Admin","Manage local workspace preferences and preview future integration safeguards."]},admin:{workspaceSettings:"Workspace settings",prototype:"Prototype",companyName:"Company name",language:"Language / Langue",mode:"Mode",escalationRecipient:"Escalation recipient",saveSettings:"Save settings",saving:"Saving...",resetDemoData:"Reset Demo Data",resetting:"Resetting...",safetyPreview:"Safety preview",prototypeBehavior:"Prototype behavior",savedLanguage:"Saved language",languageNote:"Language changes apply after saving. Internal workflow values stay stable."},auth:{demoOnly:"Demo login",title:"Choose a demo account",subtitle:"Use a premade local account to preview what an owner or employee would see.",safetyNote:"This is a local role switcher for the prototype, not real authentication or security.",logout:"Switch account",loginToast:"Demo account opened locally.",logoutToast:"Demo account closed locally."},triage:{inboxControl:"Inbox control",categoryFilter:"Category filter",allCategories:"All categories",emptyUrgent:"No urgent emails. You are caught up on high-priority work.",emptyInvoices:"No invoice emails are waiting for review.",emptyCategory:"No emails match this category filter.",emptyAll:"No emails are available in this local demo.",remove:"Remove",removing:"Removing...",removeFiltered:"Remove filtered",removeFilteredDisabled:"No removable emails in the current view.",removeConfirmTitle:"Remove this email from the demo inbox?",removeConfirmMessage:"This only hides the fake/local demo email. Nothing is deleted from a real mailbox:",removeFilteredConfirmTitle:"Remove filtered emails from the demo inbox?",removeFilteredConfirmMessage:"This only hides fake/local demo emails. Number selected:",removeSuccess:"Email removed from the demo inbox locally."},tasks:{title:"Priority tasks",subtitle:"Generated from the local demo inbox",empty:"No tasks yet. New local inbox items will appear here as work to review.",done:"Done",task:"Task",priority:"Priority",source:"Source email",notes:"Notes",followUp:"Follow-up",followUpDate:"Follow-up date",reminderOn:"Reminder on",reminderOff:"Add reminder",noReminder:"No follow-up scheduled",scheduled:"Scheduled locally",overdue:"Overdue",followUpFilter:"Follow-up filter",allFollowUps:"All follow-ups",scheduledFollowUps:"Scheduled",overdueFollowUps:"Overdue",followUpScheduledToast:"Local follow-up scheduled.",followUpRemovedToast:"Local follow-up removed.",followUpUpdatedToast:"Follow-up date updated locally.",assignedTo:"Assigned to",assigneeFilter:"Assignee filter",allAssignees:"All assignees",unassigned:"Unassigned",employeeScope:"Employee demo view: only tasks assigned to this account are shown.",notePlaceholder:"Add a local note",reviewEmail:"Review email",saveNote:"Save note",saving:"Saving...",noteSaved:"Task note saved locally.",completedToast:"Task checked off locally.",reopenedToast:"Task reopened locally.",openTasks:"Open tasks",openCaption:"From fake/local inbox items",highPriority:"High priority",highCaption:"Review these first",completed:"Completed",completedCaption:"Checked off in this browser",assignedToast:"Task assignment updated locally.",latestActivity:"Latest activity",viewHistory:"History",historyTitle:"Task history",historyFallback:"Task updated",noHistory:"No activity yet for this local task.",noNotes:"No notes yet.",historyNote:"This history is fake/local and helps show who touched the workflow in this browser.",localTask:"Local task",overdueCaption:"Needs follow-up now",noOverdueCaption:"No overdue reminders"},compose:{title:"Compose message",subtitle:"Fake/local only",safetyNote:"This composer does not connect to Gmail, Outlook, or any real mailbox. Saving creates a local draft only.",newMessage:"New message",to:"To",cc:"Cc",subject:"Subject",body:"Message body",attachments:"Attachments",attachmentNote:"Attachments are metadata only in this demo. File contents are not uploaded or stored.",attachmentMetadata:"Attachment metadata",noAttachments:"No attachments selected.",saveDraft:"Save local draft",saving:"Saving...",printPdf:"Print / save as PDF",neverSends:"Never sends email",savedDrafts:"Saved compose drafts",localOnly:"Local only",openDraft:"Open draft",emptyDrafts:"No compose drafts yet.",savedToast:"Compose draft saved locally. Nothing was sent.",printToast:"Use your browser print dialog to save as PDF. Nothing is sent."}},fr:{employee:Ft.fr,preferences:It.fr,taskWork:Rt.fr,design:Tt.fr,brand:{subtitle:"Assistant courriel pour PME",asideNote:"Courio utilise des données locales fictives dans ce prototype et suggère des actions. Il n'envoie jamais de courriel et ne modifie aucune vraie boîte courriel.",previewMode:"Mode aperçu activé"},nav:{groups:{home:"Accueil",work:"Travail",automation:"Automatisation",workspace:"Espace de travail"},dashboard:"Aperçu",dashboardSmall:"Aujourd'hui",triage:"Tri",triageSmall:"Boîte de réception",tasks:"Tâches",tasksSmall:"Priorité",compose:"Composer",composeSmall:"Brouillon local",drafts:"Brouillons",draftsSmall:"Approbation",rules:"Règles",rulesSmall:"Aperçu",import:"Aperçu configuration",importSmall:"Microsoft 365",admin:"Admin",adminSmall:"Paramètres"},pages:{dashboard:["Aperçu","Aperçu local des flux de tri courriel, résumés, suggestions de routage et préparation de brouillons."],import:["Aperçu configuration","Aperçu de la façon dont une future connexion Microsoft 365 pourrait importer la structure de boîte courriel et les habitudes de travail."],triage:["Tri de la boîte courriel","Révisez les messages classés par l'IA avant toute action."],tasks:["Centre d'action","Transformez les courriels locaux importants en liste de travail priorisée."],compose:["Composer","Créez un faux brouillon local sans rien envoyer."],rules:["Règles","Approuvez ou ajustez les aperçus de règles locales. Elles ne touchent aucune vraie boîte courriel."],drafts:["Brouillons","Révisez les réponses préparées et marquez-les prêtes pour un envoi humain."],admin:["Admin","Gérez les préférences locales de l'espace de travail et les protections des futures intégrations."]},admin:{workspaceSettings:"Paramètres de l'espace de travail",prototype:"Prototype",companyName:"Nom de l'entreprise",language:"Langue",mode:"Mode",escalationRecipient:"Responsable des escalades",saveSettings:"Enregistrer les paramètres",saving:"Enregistrement...",resetDemoData:"Réinitialiser la démo",resetting:"Réinitialisation...",safetyPreview:"Aperçu de sécurité",prototypeBehavior:"Comportement du prototype",savedLanguage:"Langue enregistrée",languageNote:"Les changements de langue s'appliquent après l'enregistrement. Les valeurs internes du flux restent stables."},auth:{demoOnly:"Connexion démo",title:"Choisir un compte démo",subtitle:"Utilisez un compte local préparé pour voir ce qu'un propriétaire ou un employé verrait.",safetyNote:"Ceci est un sélecteur de rôle local pour le prototype, pas une vraie authentification ni une vraie sécurité.",logout:"Changer de compte",loginToast:"Compte démo ouvert localement.",logoutToast:"Compte démo fermé localement."},triage:{inboxControl:"Contrôle de la boîte",categoryFilter:"Filtre de catégorie",allCategories:"Toutes les catégories",emptyUrgent:"Aucun courriel urgent. Les priorités élevées sont à jour.",emptyInvoices:"Aucun courriel de facture n'attend une révision.",emptyCategory:"Aucun courriel ne correspond à cette catégorie.",emptyAll:"Aucun courriel n'est disponible dans cette démo locale.",remove:"Retirer",removing:"Retrait...",removeFiltered:"Retirer la sélection",removeFilteredDisabled:"Aucun courriel retirable dans la vue actuelle.",removeConfirmTitle:"Retirer ce courriel de la boîte de démo?",removeConfirmMessage:"Cela cache seulement le faux courriel local. Rien n'est supprimé d'une vraie boîte:",removeFilteredConfirmTitle:"Retirer les courriels filtrés de la boîte de démo?",removeFilteredConfirmMessage:"Cela cache seulement des faux courriels locaux. Nombre sélectionné:",removeSuccess:"Courriel retiré localement de la boîte de démo."},tasks:{title:"Tâches prioritaires",subtitle:"Générées à partir de la boîte locale de démo",empty:"Aucune tâche pour l'instant. Les nouveaux courriels locaux apparaîtront ici comme travail à réviser.",done:"Fait",task:"Tâche",priority:"Priorité",source:"Courriel source",notes:"Notes",followUp:"Suivi",followUpDate:"Date de suivi",reminderOn:"Rappel actif",reminderOff:"Ajouter un rappel",noReminder:"Aucun suivi planifié",scheduled:"Planifié localement",overdue:"En retard",followUpFilter:"Filtre de suivi",allFollowUps:"Tous les suivis",scheduledFollowUps:"Planifiés",overdueFollowUps:"En retard",followUpScheduledToast:"Suivi local planifié.",followUpRemovedToast:"Suivi local retiré.",followUpUpdatedToast:"Date de suivi mise à jour localement.",assignedTo:"Assigné à",assigneeFilter:"Filtre par responsable",allAssignees:"Tous les responsables",unassigned:"Non assigné",employeeScope:"Vue employé démo : seules les tâches assignées à ce compte sont affichées.",notePlaceholder:"Ajouter une note locale",reviewEmail:"Réviser le courriel",saveNote:"Enregistrer la note",saving:"Enregistrement...",noteSaved:"Note de tâche enregistrée localement.",completedToast:"Tâche cochée localement.",reopenedToast:"Tâche rouverte localement.",openTasks:"Tâches ouvertes",openCaption:"Depuis les faux courriels locaux",highPriority:"Priorité élevée",highCaption:"À réviser en premier",completed:"Terminées",completedCaption:"Cochées dans ce navigateur",assignedToast:"Assignation de tâche mise à jour localement.",latestActivity:"Activité récente",viewHistory:"Historique",historyTitle:"Historique de la tâche",historyFallback:"Tâche mise à jour",noHistory:"Aucune activité pour cette tâche locale.",noNotes:"Aucune note pour l'instant.",historyNote:"Cet historique est faux/local et montre qui a touché au flux dans ce navigateur.",localTask:"Tâche locale",overdueCaption:"Suivi requis maintenant",noOverdueCaption:"Aucun rappel en retard"},compose:{title:"Composer un message",subtitle:"Faux/local seulement",safetyNote:"Ce compositeur ne se connecte pas à Gmail, Outlook ni à une vraie boîte courriel. L'enregistrement crée seulement un brouillon local.",newMessage:"Nouveau message",to:"À",cc:"Cc",subject:"Objet",body:"Corps du message",attachments:"Pièces jointes",attachmentNote:"Les pièces jointes sont seulement des métadonnées dans cette démo. Le contenu des fichiers n'est pas téléversé ni stocké.",attachmentMetadata:"Métadonnées des pièces jointes",noAttachments:"Aucune pièce jointe sélectionnée.",saveDraft:"Enregistrer le brouillon local",saving:"Enregistrement...",printPdf:"Imprimer / enregistrer en PDF",neverSends:"N'envoie jamais de courriel",savedDrafts:"Brouillons composés enregistrés",localOnly:"Local seulement",openDraft:"Ouvrir le brouillon",emptyDrafts:"Aucun brouillon composé pour l'instant.",savedToast:"Brouillon composé enregistré localement. Rien n'a été envoyé.",printToast:"Utilisez la fenêtre d'impression du navigateur pour enregistrer en PDF. Rien n'est envoyé."}}};function Pe(t){return t==="fr"?"fr":"en"}function Kt(t){const e=Jt[Pe(t)];return function(o){return o.split(".").reduce((i,n)=>i==null?void 0:i[n],e)||o}}function ys(t,e){const a=Jt[Pe(e)];return a.pages[t]||a.pages.dashboard}const ws=["Triage","Urgent emails","Drafts needing approval","Invoices","Generate digest","Create invoice rule","Reset demo data"];function bs({assistantOpen:t,assistantMessages:e,assistantBusy:a}){const o=e.length?e:[{id:"assistant-loading",role:"assistant",text:"Loading assistant history..."}];return`
    <div class="assistant ${t?"open":""}">
      ${t?`
        <div class="assistant-panel" aria-label="Courio assistant">
          <div class="assistant-header">
            <div>
              <strong>Courio assistant</strong>
              <span>Fake/local commands</span>
            </div>
            <button class="btn subtle" data-assistant-toggle>Close</button>
          </div>
          <div class="assistant-messages">
            ${o.map(i=>`
              <div class="assistant-message ${i.role==="user"?"user":"bot"}">
                ${l(i.text)}
              </div>
            `).join("")}
          </div>
          <form class="assistant-form">
            <input data-assistant-input placeholder="Show urgent emails" autocomplete="off" ${a?"disabled":""}>
            <button class="btn primary" type="submit" ${a?"disabled":""}>${a?"Working...":"Send"}</button>
          </form>
          <div class="assistant-suggestions" aria-label="Assistant command suggestions">
            ${ws.map(i=>`
              <button class="assistant-chip" data-assistant-command="${l(i)}" ${a?"disabled":""}>
                ${l(i)}
              </button>
            `).join("")}
          </div>
        </div>
      `:""}
      <button class="assistant-fab" data-assistant-toggle aria-label="Open Courio assistant">
        AI
      </button>
    </div>
  `}const $s=[{id:"email-1",subject:"Very unhappy about no response",sender:"Maya Chen",senderEmail:"maya@northstar-retail.ca",body:"I have followed up twice and still have not received an answer about the service issue from last week. We need someone senior to respond today.",category:"Client complaint",urgency:"High",confidence:94,suggestedAction:"Escalate to owner",requiresDraft:!0,assignedTo:"emp-1",explanation:"Courio flagged this because the client mentions repeated follow-ups, no response, and asks for senior attention today.",thread:["Client followed up twice about an unanswered service issue.","The last message uses negative sentiment and asks for owner attention."],summary:"Client is frustrated by delayed response. Recommend owner review today.",draft:"Hi, thank you for the follow-up. I'm sorry this has taken longer than expected. I am escalating this now and will make sure you receive a clear update today."},{id:"email-2",subject:"Invoice #1844 payment status",sender:"Alex Rivera",senderEmail:"alex@brightline-supplies.ca",body:"Could you confirm whether invoice #1844 has been approved for payment? It was due last Friday.",category:"Accounting",urgency:"Medium",confidence:89,suggestedAction:"Route to accounting",requiresDraft:!0,assignedTo:"emp-2",explanation:"Courio saw an invoice number, payment-status wording, and a due-date reference, so it suggested accounting review.",thread:["Supplier asks whether invoice #1844 has been scheduled for payment.","Invoice appears related to recurring monthly services."],summary:"Supplier is requesting a payment-status update for invoice #1844.",draft:"Hi, thanks for checking in. We are reviewing invoice #1844 with accounting and will send a status update shortly."},{id:"email-3",subject:"Quote request for monthly bookkeeping",sender:"Priya Nair",senderEmail:"priya@lakeside-catering.ca",body:"We are looking for monthly bookkeeping help for a small catering business. We have six employees and would like pricing before the end of the week.",category:"Sales",urgency:"Medium",confidence:86,suggestedAction:"Prepare intake draft",requiresDraft:!0,assignedTo:"emp-3",explanation:"Courio matched this to sales because the sender asks for pricing, describes company needs, and appears to be a new prospect.",thread:["New prospect requested pricing for monthly bookkeeping.","They mentioned six employees and monthly receipt volume."],summary:"New lead is asking for bookkeeping pricing. Intake details are partially available.",draft:"Hi, thanks for reaching out. We'd be happy to help with monthly bookkeeping. Could you share your approximate monthly transaction count and preferred start date?"},{id:"email-4",subject:"Payroll documents attached",sender:"Tom Bennett",senderEmail:"tom@harbour-grill.ca",body:"Please find this period's payroll documents attached. Let me know if anything is missing before Thursday.",category:"Documents",urgency:"Low",confidence:91,suggestedAction:"Apply payroll category",requiresDraft:!0,assignedTo:"emp-4",explanation:"Courio detected payroll wording and an attachment reference, so it suggested categorizing this for payroll review.",thread:["Client attached payroll documents for this period.","Message should be categorized for payroll review."],summary:"Payroll documents are attached and ready to route to payroll workflow.",draft:"Hi, thanks. We received the payroll documents and will review them for the current period."},{id:"email-5",subject:"Missing March receipts",sender:"Elena Morris",senderEmail:"elena@maple-therapy.ca",body:"I thought I sent the March receipts, but I may have missed the attachment. Can you let me know what you still need?",category:"Missing documents",urgency:"Medium",confidence:88,suggestedAction:"Prepare follow-up draft",requiresDraft:!0,assignedTo:"emp-2",explanation:"Courio flagged this because the email talks about receipts and a possibly missing attachment, which usually needs a document follow-up.",thread:["Client mentions March receipts but no attachments are present.","Follow-up should request the missing files."],summary:"March receipts appear to be missing. Prepare a concise document request.",draft:"Hi, thanks for the note. It looks like the March receipts were not attached. Could you resend them when convenient?"},{id:"email-6",subject:"Can we move tomorrow's appointment?",sender:"Jordan Lee",senderEmail:"jordan@greenway-landscaping.ca",body:"Something came up with our crew schedule. Can we move tomorrow's appointment to next Tuesday afternoon?",category:"Scheduling",urgency:"Low",confidence:82,suggestedAction:"Offer available times",requiresDraft:!0,assignedTo:"emp-5",explanation:"Courio identified a scheduling change request with a proposed new time, so it suggested a simple scheduling reply.",thread:["Client asks to move an appointment from tomorrow to next Tuesday afternoon.","No urgent sentiment or billing issue detected."],summary:"Client wants to reschedule tomorrow's appointment to next Tuesday afternoon.",draft:"Hi, thanks for letting us know. Next Tuesday afternoon should work on our side. Could you confirm your preferred time window?"},{id:"email-7",subject:"Weekly partner newsletter",sender:"Service Ledger Weekly",senderEmail:"updates@serviceledger.example",body:"This week's roundup includes product tips, partner webinars, and a checklist for organizing client documents before month end.",category:"Newsletter",urgency:"Low",confidence:79,suggestedAction:"Remove from demo inbox",requiresDraft:!0,assignedTo:"",explanation:"Courio categorized this as a newsletter because it is a broadcast update with no client request, deadline, or required reply.",thread:["Marketing-style newsletter with no direct client request.","Low-priority inbox noise that can be removed from the demo inbox after review."],summary:"Newsletter-style update. No reply appears needed.",draft:"No reply needed. This local demo item can be removed from the inbox after review."}],ks=[{id:"cat-client-complaint",name:"Client complaint",description:"Escalations, unhappy clients, repeated follow-ups, and high-trust replies.",color:"urgent",active:!0,system:!0},{id:"cat-accounting",name:"Accounting",description:"Invoices, payment status, receipts, bookkeeping, and supplier questions.",color:"invoice",active:!0,system:!0},{id:"cat-sales",name:"Sales",description:"New leads, quote requests, pricing questions, and intake replies.",color:"lead",active:!0,system:!0},{id:"cat-documents",name:"Documents",description:"Attached files, payroll documents, client records, and document routing.",color:"invoice",active:!0,system:!0},{id:"cat-missing-documents",name:"Missing documents",description:"Missing attachments, receipts, files, or client documents that need follow-up.",color:"invoice",active:!0,system:!0},{id:"cat-scheduling",name:"Scheduling",description:"Appointment changes, availability, calendar coordination, and time windows.",color:"pending",active:!0,system:!0},{id:"cat-general",name:"General",description:"Messages that do not need a specialized workflow yet.",color:"default",active:!0,system:!0},{id:"cat-newsletter",name:"Newsletter",description:"Marketing emails, updates, and low-priority broadcast messages.",color:"default",active:!0,system:!1},{id:"cat-follow-up",name:"Follow-up",description:"Messages that need a reminder, next step, or later response.",color:"pending",active:!0,system:!1},{id:"cat-internal",name:"Internal",description:"Team messages, internal coordination, and company updates.",color:"lead",active:!0,system:!1},{id:"cat-vendor",name:"Vendor",description:"Supplier, partner, and vendor conversations.",color:"invoice",active:!0,system:!1}],As=[{id:"emp-1",name:"Nadia Patel",title:"Owner",email:"nadia@courio-demo.ca",department:"Leadership"},{id:"emp-2",name:"Marcus Roy",title:"Bookkeeper",email:"marcus@courio-demo.ca",department:"Accounting"},{id:"emp-3",name:"Sofia Tremblay",title:"Client Success Lead",email:"sofia@courio-demo.ca",department:"Sales"},{id:"emp-4",name:"Daniel Kim",title:"Payroll Specialist",email:"daniel@courio-demo.ca",department:"Payroll"},{id:"emp-5",name:"Avery Brooks",title:"Office Coordinator",email:"avery@courio-demo.ca",department:"Operations"}],Ss=[{id:"rule-1",title:"Supplier invoice routing",desc:"Suggest an accounting category and owner for supplier invoices and payment requests.",category:"Accounting",confidence:91,explanation:"Courio looks for invoice numbers, payment wording, supplier senders, and due-date language.",impact:"Matches the sample invoice messages in this local demo.",matches:["Invoice #1844 payment status","Supplier payment confirmation"],on:!0},{id:"rule-2",title:"Client escalation detection",desc:"Flag negative sentiment, repeated follow-ups, or unanswered client messages older than 48 hours.",category:"Client complaint",confidence:94,explanation:"Courio looks for negative sentiment, repeated follow-ups, and requests for owner attention.",impact:"Flags the sample high-risk client thread in this local demo.",matches:["Very unhappy about no response"],on:!0},{id:"rule-3",title:"Quote request intake",desc:"Prepare standardized draft replies for new prospects requesting pricing or availability.",category:"Sales",confidence:86,explanation:"Courio looks for pricing requests, new prospect language, and service-fit details.",impact:"Matches the sample quote request in this local demo.",matches:["Quote request for monthly bookkeeping"],on:!1},{id:"rule-4",title:"Missing document follow-up",desc:"Prepare client reminders when required documents are mentioned but not attached.",category:"Missing documents",confidence:88,explanation:"Courio looks for missing attachment wording, receipt requests, and document follow-up language.",impact:"Useful for bookkeeping, accounting, insurance, and service teams.",matches:["Missing March receipts"],on:!1}],Ae="courio.mockState.v1",Le="courio.assistantHistory.v1",tt="courio.demoSession.v1",nt=2,Te=[{id:"admin-owner",role:"Admin",employeeId:"emp-1",name:"Nadia Patel",title:"Owner",email:"nadia@courio-demo.ca"},{id:"employee-marcus",role:"Employee",employeeId:"emp-2",name:"Marcus Roy",title:"Bookkeeper",email:"marcus@courio-demo.ca"}],$=Object.freeze({NEEDS_REVIEW:"needs_review",READY_FOR_DRAFT:"ready_for_draft",DRAFT_GENERATED:"draft_generated",DRAFT_REVIEWED:"draft_reviewed",DRAFT_SAVED:"draft_saved",COMPLETED:"completed"}),Es=new Set(Object.values($)),Ds={status:"Simulated setup preview",safetyNote:"No account is connected. This demo does not access real email, folders, files, or contacts.",futureNote:"In a future version, this step could connect to Gmail or Microsoft 365 after explicit approval.",mailboxes:[{id:"mailbox-main",name:"Main inbox",address:"hello@demo-company.ca",type:"Primary mailbox",volume:"142 recent threads",risk:"Mixed priority",folders:["Inbox","Needs reply","Clients","Vendors","Archive"],categories:["Client complaint","Accounting","Sales","Scheduling"],frequentSenders:["Northstar Retail","Brightline Supplies","Lakeside Catering"],sharedInboxes:["info@demo-company.ca"],recentThreads:["Very unhappy about no response","Invoice #1844 payment status","Quote request for monthly bookkeeping"]},{id:"mailbox-accounting",name:"Accounting",address:"accounting@demo-company.ca",type:"Shared mailbox",volume:"88 recent threads",risk:"Document-heavy",folders:["Invoices","Receipts","Payroll","Tax documents","Vendors"],categories:["Accounting","Documents","Missing documents"],frequentSenders:["Brightline Supplies","Harbour Grill","Maple Therapy"],sharedInboxes:["payroll@demo-company.ca"],recentThreads:["Invoice #1844 payment status","Payroll documents attached","Missing March receipts"]},{id:"mailbox-sales",name:"Sales",address:"sales@demo-company.ca",type:"Shared mailbox",volume:"53 recent threads",risk:"Revenue-sensitive",folders:["Leads","Quotes","Follow up","Won","Lost"],categories:["Sales","Scheduling"],frequentSenders:["Lakeside Catering","Greenway Landscaping","New prospects"],sharedInboxes:["quotes@demo-company.ca"],recentThreads:["Quote request for monthly bookkeeping","Can we move tomorrow's appointment?"]},{id:"mailbox-operations",name:"Operations",address:"ops@demo-company.ca",type:"Team mailbox",volume:"61 recent threads",risk:"Coordination-heavy",folders:["Scheduling","Client updates","Internal","Completed"],categories:["Scheduling","Documents","General"],frequentSenders:["Greenway Landscaping","Client coordinators","Office team"],sharedInboxes:["support@demo-company.ca"],recentThreads:["Can we move tomorrow's appointment?","Payroll documents attached"]},{id:"mailbox-shared",name:"Shared inbox",address:"info@demo-company.ca",type:"Shared intake",volume:"119 recent threads",risk:"Needs routing",folders:["Inbox","Unsorted","Clients","Prospects","Vendors"],categories:["Client complaint","Sales","Accounting","Missing documents"],frequentSenders:["Clients","Suppliers","Prospects"],sharedInboxes:["hello@demo-company.ca","support@demo-company.ca"],recentThreads:["Very unhappy about no response","Quote request for monthly bookkeeping","Missing March receipts"]}],scanItems:[{label:"Folders",detail:"Inbox structure, archive folders, and team-specific folders.",count:14},{label:"Labels/categories",detail:"Existing categories that could map to Courio triage buckets.",count:9},{label:"Frequent senders",detail:"Recurring clients, vendors, prospects, and internal senders.",count:26},{label:"Shared inboxes",detail:"Mailboxes that several employees may monitor.",count:4},{label:"Recent threads",detail:"Recent local demo examples used to preview workflow suggestions.",count:142},{label:"Suggested workflow rules",detail:"Draft local rules for routing, escalation, and follow-up.",count:5}],setupSteps:[{title:"Choose mailbox",detail:"Select the mailbox Courio should preview.",state:"Available in demo"},{title:"Scan folders and labels",detail:"Preview folders, categories, and common sender patterns.",state:"Simulated"},{title:"Detect common email types",detail:"Identify invoices, quote requests, complaints, missing documents, and scheduling.",state:"Simulated"},{title:"Suggest workflows",detail:"Create local suggested rules for review before anything is used.",state:"Simulated"},{title:"Ready for review",detail:"Move to Triage and Rules to inspect the fake suggestions.",state:"Demo only"}],workflowSuggestions:[{match:"Invoices",outcome:"Accounting review",reason:"Invoice numbers, due dates, supplier language."},{match:"Quote requests",outcome:"Sales intake",reason:"Pricing requests, service-fit details, new prospect wording."},{match:"Complaints",outcome:"Owner escalation",reason:"Repeated follow-ups, negative sentiment, senior attention requests."},{match:"Missing documents",outcome:"Follow-up draft",reason:"Receipts, attachments, payroll, or document gaps."},{match:"Scheduling",outcome:"Offer available times",reason:"Appointment changes, time windows, reschedule language."}]},te={schemaVersion:nt,emails:$s.map(Cs),categories:structuredClone(ks),employees:structuredClone(As),rules:structuredClone(Ss),drafts:[],tasks:[],composeDrafts:[],preferencesByAccount:{},settings:{productName:"Courio",mode:"Simple",language:"en",companyName:"Demo PME Inc.",defaultMode:"Observation only",escalationRecipient:"owner@company.ca",confidenceThreshold:"80",observationDays:"7",allowLowRiskBulkApproval:"Yes",approvalRequired:!0,autoSend:!1},completedActions:[],deletedEmployeeIds:[],deletedRuleIds:[]},m=Ts();let E=Ns(),pe=rt();const w=(t=550)=>new Promise(e=>setTimeout(e,t));function v(t){return structuredClone(t)}function Cs(t){const{status:e,workflowStatus:a,reviewed:o,...i}=v(t);return{...i,archivedAt:i.archivedAt||null,archiveReason:i.archiveReason||"",workflowState:$.NEEDS_REVIEW}}function Ts(){try{const t=window.localStorage.getItem(Ae);if(!t)return v(te);const e=JSON.parse(t),a=Rs(e);return window.localStorage.setItem(Ae,JSON.stringify(a)),a}catch{return v(te)}}function Rs(t){const e=t.deletedEmployeeIds||[],a=t.deletedRuleIds||[],o=Is(t.categories),i=Me(te.emails,t.emails),n=Array.isArray(t.drafts)?t.drafts:[],r=xs(n),c=i.map(u=>{const y=r.find(F=>(F.emailId||F.id)===u.id),k=Fs(u,y,t.schemaVersion),{status:A,workflowStatus:C,reviewed:ee,...N}=u;return{...N,archivedAt:N.archivedAt||null,archiveReason:N.archiveReason||"",workflowState:k}}),g=new Map(c.map(u=>[u.id,u])),p=r.filter(u=>Ms(u,g.get(u.emailId||u.id))).map(qs);return{...v(te),...t,schemaVersion:nt,emails:c,categories:o,employees:Me(te.employees.filter(u=>!e.includes(u.id)),(t.employees||[]).filter(u=>!e.includes(u.id))),rules:Me(te.rules.filter(u=>!a.includes(u.id)),(t.rules||[]).filter(u=>!a.includes(u.id))),drafts:p,tasks:Array.isArray(t.tasks)?t.tasks.map(he):[],composeDrafts:Array.isArray(t.composeDrafts)?t.composeDrafts.map(Zt):[],preferencesByAccount:Object.fromEntries(Te.map(u=>{var y;return[u.id,Ee((y=t.preferencesByAccount)==null?void 0:y[u.id])]})),settings:{...te.settings,...t.settings||{}},completedActions:Array.isArray(t.completedActions)?t.completedActions:[],deletedEmployeeIds:e,deletedRuleIds:a}}function Is(t=[]){return Me(te.categories,t).map(a=>({description:"",color:"default",active:!0,system:!1,...a}))}function Fs(t,e,a){return a>=nt&&Es.has(t.workflowState)?t.workflowState:t.status==="Done"||t.workflowStatus==="Completed"||(e==null?void 0:e.status)==="Ready for human send"||(e==null?void 0:e.status)==="Approved"?$.COMPLETED:(e==null?void 0:e.status)==="Saved"?$.DRAFT_SAVED:e!=null&&e.reviewed?$.DRAFT_REVIEWED:e!=null&&e.generated||(e==null?void 0:e.status)==="Generated"?$.DRAFT_GENERATED:t.reviewed||t.reviewedAt?$.READY_FOR_DRAFT:$.NEEDS_REVIEW}function xs(t){const e=new Map;for(const a of t){const o=(a==null?void 0:a.emailId)||(a==null?void 0:a.id);if(!o)continue;const i=e.get(o);(!i||xt(a)>xt(i))&&e.set(o,a)}return[...e.values()]}function xt(t){return({"Needs approval":0,Generated:1,Saved:3,"Ready for human send":4,Approved:4}[t.status]||0)+(t.generated?1:0)+(t.reviewed?1:0)}function Ms(t,e){return!t||!e?!1:!!(t.generated||t.reviewed||["Generated","Saved","Ready for human send","Approved"].includes(t.status)||[$.DRAFT_GENERATED,$.DRAFT_REVIEWED,$.DRAFT_SAVED,$.COMPLETED].includes(e.workflowState))}function qs(t){const{generated:e,reviewed:a,status:o,...i}=v(t);return{...i,emailId:t.emailId||t.id}}function he(t){const e=t.followUp&&typeof t.followUp=="object"?t.followUp:{},a=!!(e.enabled&&e.dueAt);return{id:t.id||`task-${t.emailId||Date.now()}`,emailId:t.emailId||"",title:t.title||"Review email",description:t.description||"",priority:t.priority||"Medium",category:t.category||"General",assignedTo:t.assignedTo||"",collaboratorIds:Array.isArray(t.collaboratorIds)?[...new Set(t.collaboratorIds.filter(o=>typeof o=="string"&&o!==t.assignedTo))]:[],parentTaskId:t.parentTaskId||null,requestedByEmployeeId:t.requestedByEmployeeId||null,status:t.status==="Done"?"Done":"Open",notes:t.notes||"",dueAt:t.dueAt||null,followUp:{enabled:a,dueAt:a?e.dueAt:null,createdAt:a?e.createdAt||t.createdAt||new Date().toISOString():null,updatedAt:a?e.updatedAt||t.updatedAt||new Date().toISOString():null},history:Array.isArray(t.history)?t.history:[],createdAt:t.createdAt||new Date().toISOString(),updatedAt:t.updatedAt||t.createdAt||new Date().toISOString(),completedAt:t.completedAt||null}}function Zt(t){var e,a,o,i;return{ownerEmployeeId:t.ownerEmployeeId||"emp-1",id:t.id||`compose-${Date.now()}`,to:((e=t.to)==null?void 0:e.trim())||"",cc:((a=t.cc)==null?void 0:a.trim())||"",subject:((o=t.subject)==null?void 0:o.trim())||"",body:((i=t.body)==null?void 0:i.trim())||"",attachments:Array.isArray(t.attachments)?t.attachments.map(n=>({id:n.id||`attachment-${Date.now()}`,name:n.name||"Local attachment",type:n.type||"Unknown",size:Number(n.size)||0})):[],status:"Draft",createdAt:t.createdAt||new Date().toISOString(),updatedAt:t.updatedAt||t.createdAt||new Date().toISOString()}}function Ls(t){const e=Zt(t);if(!e.to)throw new Error("Recipient is required.");if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.to))throw new Error("Enter a valid recipient email.");if(!e.subject)throw new Error("Subject is required.");if(!e.body)throw new Error("Message body is required.");return e}function Me(t,e=[]){const a=Array.isArray(e)?e:[],o=t.map(n=>{const r=a.find(c=>c.id===n.id);return r?{...n,...r}:v(n)}),i=a.filter(n=>!t.some(r=>r.id===n.id));return[...o,...i.map(v)]}function D(){window.localStorage.setItem(Ae,JSON.stringify(m))}function Ns(){try{const t=window.localStorage.getItem(tt);if(!t)return null;const e=JSON.parse(t);return Te.find(a=>a.id===e.id)||null}catch{return null}}function Xt(){if(!E){window.localStorage.removeItem(tt);return}window.localStorage.setItem(tt,JSON.stringify({id:E.id}))}function q(){return(E==null?void 0:E.role)==="Employee"}function U(){return(E==null?void 0:E.employeeId)||""}function H(){if(E&&E.role!=="Admin")throw new Error("This demo account cannot access admin-only actions.")}function rt(){try{const t=window.localStorage.getItem(`${Le}.${(E==null?void 0:E.id)||"signed-out"}`);return t?JSON.parse(t):[{id:"assistant-welcome",role:"assistant",text:"Hi, I can help with urgent emails, invoices, drafts, digest updates, rules, and explanations."}]}catch{return[{id:"assistant-welcome",role:"assistant",text:"Hi, I can help with urgent emails, invoices, drafts, digest updates, rules, and explanations."}]}}function Os(){window.localStorage.setItem(`${Le}.${(E==null?void 0:E.id)||"signed-out"}`,JSON.stringify(pe))}function js(){return m.settings.allowLowRiskBulkApproval!=="No"}function Us(){return!0}function z(t){return t.workflowState===$.COMPLETED}function lt(t){const e=m.emails.find(a=>a.id===(t.emailId||t.id));return(e==null?void 0:e.workflowState)===$.DRAFT_SAVED}function Ne(t){return{[$.NEEDS_REVIEW]:"Review required",[$.READY_FOR_DRAFT]:"Draft needed",[$.DRAFT_GENERATED]:"Draft generated",[$.DRAFT_REVIEWED]:"Draft in review",[$.DRAFT_SAVED]:"Draft saved",[$.COMPLETED]:"Completed"}[t]||"Review required"}function ea(t){return{[$.DRAFT_GENERATED]:"Generated",[$.DRAFT_REVIEWED]:"In review",[$.DRAFT_SAVED]:"Saved",[$.COMPLETED]:"Ready for human send"}[t]||"No draft"}function V(t,e={}){m.completedActions.unshift({id:`action-${Date.now()}-${Math.random().toString(16).slice(2)}`,type:t,completedAt:new Date().toISOString(),...e}),m.completedActions=m.completedActions.slice(0,50)}function ta(t,e){t.workflowState=$.COMPLETED,e.approvedAt=new Date().toISOString(),e.updatedAt=e.approvedAt,V("draft-approved",{emailId:t.id,draftId:e.id,label:`Draft approved and workflow completed: ${t.subject}`})}function se(t){const e=m.emails.find(c=>c.id===(t.emailId||t.id)),a=z(e||{})?"Done":"Open",o=z(e||{}),i=(e==null?void 0:e.workflowState)===$.DRAFT_SAVED,n=i&&!q(),r=ea(e==null?void 0:e.workflowState);return{...t,sourceEmailStatus:a,sourceWorkflowStatus:Ne(e==null?void 0:e.workflowState),approvalState:o?"ready_for_human_send":(e==null?void 0:e.workflowState)===$.DRAFT_SAVED?"saved":(e==null?void 0:e.workflowState)===$.DRAFT_GENERATED?"generated":"needs_review",status:r,statusLabel:r,isReadyForHumanSend:o,canApprove:n,awaitingApproval:i,canSelectForBulkApproval:n,approvalBlocker:n?"":q()&&i?"An admin must approve this draft.":o?"Source email is completed.":"Review and save this draft before approving."}}function Re(t){const e=Be(t.id),a=Us(),o=!!e,i=z(t),n=i,r=t.workflowState!==$.NEEDS_REVIEW;return{...t,automationSuggestions:oa(t).map(c=>({id:c.id,title:c.title,category:c.category,explanation:c.explanation,description:c.desc})),archived:!!t.archivedAt,reviewed:r,status:n?"Done":"Open",workflowStatus:Ne(t.workflowState),requiresDraft:a,draftId:o&&(e==null?void 0:e.id)||null,draftStatus:o?ea(t.workflowState):null,draftStatusLabel:o?se(e).statusLabel:"No draft",draftReadyForHumanSend:i,workflowLabel:Ne(t.workflowState),canComplete:!1,completeActionLabel:"Completed",draftActionLabel:n?"View approved draft":o?"Edit draft":"Generate draft",canGenerateDraft:t.workflowState===$.READY_FOR_DRAFT&&!o,canOpenDraft:o,canArchive:!o||n,archiveBlocker:o&&!n?"Finish the active draft before removing this email from the demo inbox.":"",completionBlocker:r?n?"This workflow is complete.":o?"Open the existing draft to continue this workflow.":"":"Review this email before generating a draft."}}function aa(t){return t.urgency==="High"||t.category===W("cat-client-complaint","Client complaint")?"High":t.urgency==="Low"?"Low":"Medium"}function Mt(t){return{High:0,Medium:1,Low:2}[t.priority]??3}function sa(t){const e=new Date().toISOString();return he({id:`task-${t.id}`,emailId:t.id,title:t.suggestedAction||`Review ${t.subject}`,description:t.summary||t.explanation||t.subject,priority:aa(t),category:t.category,assignedTo:t.assignedTo||"",status:"Open",notes:"",history:[{at:e,label:"Task created from local inbox item"}],createdAt:e,updatedAt:e})}function dt(){const t=new Set(m.tasks.map(e=>e.emailId));_e().filter(e=>!z(e)).forEach(e=>{t.has(e.id)||m.tasks.push(sa(e))}),m.tasks=m.tasks.map(e=>{const a=m.emails.find(o=>o.id===e.emailId);return he(a?{...e,title:e.title||a.suggestedAction,description:e.description||a.summary||a.explanation,priority:e.priority||aa(a),assignedTo:e.assignedTo,category:a.category}:e)})}function we(t){var c;const e=m.emails.find(g=>g.id===t.emailId),a=m.employees.find(g=>g.id===t.assignedTo)||null,o=(c=t.followUp)!=null&&c.enabled?t.followUp.dueAt:null,i=Array.isArray(t.history)?t.history:[],n=i.at(-1)||null,r=!!(o&&t.status!=="Done"&&new Date(o).getTime()<Date.now());return{...t,assignedEmployees:m.employees.filter(g=>ye(t).includes(g.id)).map(v),canManageCollaborators:!q()||t.assignedTo===U(),overdue:t.status!=="Done"&&!!t.dueAt&&t.dueAt<qt(),dueToday:t.status!=="Done"&&t.dueAt===qt(),followUp:{...t.followUp,status:o?r?"overdue":"scheduled":"not_scheduled",overdue:r},historySummary:{count:i.length,latestLabel:(n==null?void 0:n.label)||"",latestAction:(n==null?void 0:n.action)||null,latestAt:(n==null?void 0:n.at)||null},history:i.map(g=>({...g,canRestore:!!g.before&&(!q()||ye(t).includes(U())&&!Object.hasOwn(g.before,"assignedTo")&&(!Object.hasOwn(g.before,"collaboratorIds")||t.assignedTo===U()))})),assignedEmployee:a?v(a):null,sourceEmail:e&&ct(e)?Re(e):null,hiddenFromInbox:!!(e!=null&&e.archivedAt),sourceCompleted:e?z(e):!1}}function B(t){const e=m.emails.find(a=>a.id===t);if(!e)throw new Error("Email not found.");if(!ct(e))throw M("forbidden");return e}function He(t){const e=m.drafts.find(a=>a.id===t);if(!e)throw new Error("Draft not found.");return B(e.emailId||e.id),e}function Be(t){return m.drafts.find(e=>(e.emailId||e.id)===t)}function _e(){return m.emails.filter(t=>t.archivedAt?!1:q()?t.assignedTo===U():!0)}function ct(t){return!!t&&(!q()||t.assignedTo===U())}function ut(){return m.drafts.filter(t=>ct(m.emails.find(e=>e.id===(t.emailId||t.id))))}function ye(t){return[t.assignedTo,...t.collaboratorIds||[]].filter(Boolean)}function qt(){const t=new Date;return`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`}function oa(t){return m.rules.filter(e=>e.on&&((e.matches||[]).includes(t.subject)||e.category===t.category))}async function Ps(t,e){const a=B(t),o=oa(a).find(i=>i.id===e);if(!o)throw M("forbidden");return ya(t,o.category)}function pt(t){const e=m.employees.find(a=>a.id===t);if(!e)throw new Error("Employee not found.");return e}function ia(t){const e=m.categories.find(a=>a.id===t);if(!e)throw new Error("Category not found.");return e}function na(t){return m.categories.find(e=>e.name.toLowerCase()===String(t||"").trim().toLowerCase())}function ra(t,e=null){var i,n;const a={name:((i=t.name)==null?void 0:i.trim())||"",description:((n=t.description)==null?void 0:n.trim())||"",color:t.color||"default"};if(!a.name)throw new Error("Category name is required.");if(m.categories.find(r=>r.id!==e&&r.name.toLowerCase()===a.name.toLowerCase()))throw new Error("A category with this name already exists.");return a}function Hs(t,e){m.emails.forEach(a=>{a.category===t&&(a.category=e)}),m.rules.forEach(a=>{a.category===t&&(a.category=e)})}function W(t,e){var a;return((a=m.categories.find(o=>o.id===t))==null?void 0:a.name)||e}function Bs(){const t={"Client complaint":W("cat-client-complaint","Client complaint"),Accounting:W("cat-accounting","Accounting"),Sales:W("cat-sales","Sales"),Documents:W("cat-documents","Documents"),"Missing documents":W("cat-missing-documents","Missing documents"),Scheduling:W("cat-scheduling","Scheduling"),General:W("cat-general","General")},e=v(Ds);return e.mailboxes=e.mailboxes.map(a=>({...a,categories:a.categories.map(o=>t[o]||o)})),e}function la(t,e=null){var i,n,r,c;const a={name:((i=t.name)==null?void 0:i.trim())||"",email:((n=t.email)==null?void 0:n.trim().toLowerCase())||"",title:((r=t.title)==null?void 0:r.trim())||"",department:((c=t.department)==null?void 0:c.trim())||""};if(!a.name)throw new Error("Employee name is required.");if(!a.email)throw new Error("Employee email is required.");if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(a.email))throw new Error("Enter a valid employee email address.");if(!a.title)throw new Error("Employee title is required.");if(!a.department)throw new Error("Employee department is required.");if(m.employees.find(g=>{var p;return g.id!==e&&((p=g.email)==null?void 0:p.trim().toLowerCase())===a.email}))throw new Error("An employee with this email already exists.");return a}function _s(){const t=_e().filter(r=>!z(r)),e=ut().map(se),a=e.filter(r=>r.isReadyForHumanSend).length,o=e.filter(r=>r.awaitingApproval).length,i=r=>t.filter(c=>c.category===r),n=t.filter(r=>r.urgency==="High");return{generatedAt:new Date().toLocaleTimeString([],{hour:"numeric",minute:"2-digit"}),headline:`${t.length} open emails need review. ${n.length} are urgent and ${o} drafts need approval.`,urgentItems:n.map(r=>r.subject),draftsAwaitingApproval:o,readyForHumanSend:a,invoices:i(W("cat-accounting","Accounting")).map(r=>r.subject),missingDocuments:i(W("cat-missing-documents","Missing documents")).map(r=>r.subject),quoteRequests:i(W("cat-sales","Sales")).map(r=>r.subject),clientComplaints:i(W("cat-client-complaint","Client complaint")).map(r=>r.subject),recommendedActions:[n.length?"Review urgent client items first.":"No urgent client escalations are open.",o?"Review drafts before marking them ready for human send.":"No drafts are waiting for approval.","Keep observation mode on while this remains a demo."]}}function Ws(){H();const t=m.rules.find(a=>/invoice/i.test(`${a.title} ${a.desc}`));if(t)return t.on=!0,D(),t;const e={id:`rule-${Date.now()}`,title:"Invoice intake assistant",desc:"Flag invoice messages, payment questions, due dates, and supplier follow-ups for accounting review.",category:W("cat-accounting","Accounting"),confidence:84,explanation:"Courio would look for invoice numbers, balance-due wording, supplier names, and payment timing.",impact:"Created locally from the assistant chat. It only previews matches in this prototype.",matches:m.emails.filter(a=>a.category===W("cat-accounting","Accounting")).map(a=>a.subject),on:!0};return m.rules.push(e),D(),e}function zs(t){return t.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9\s]/g," ").replace(/\s+/g," ")}function Vs(t,e){const a=Array.from({length:e.length+1},(o,i)=>i);for(let o=1;o<=t.length;o+=1){let i=a[0];a[0]=o;for(let n=1;n<=e.length;n+=1){const r=a[n],c=t[o-1]===e[n-1]?0:1;a[n]=Math.min(a[n]+1,a[n-1]+1,i+c),i=r}}return a[e.length]}function Gs(t,e){if(t.length!==e.length)return!1;const a=[];for(let o=0;o<t.length;o+=1)t[o]!==e[o]&&a.push(o);return a.length===2&&a[1]===a[0]+1&&t[a[0]]===e[a[1]]&&t[a[1]]===e[a[0]]}function ie(t,e){const a=t.split(" ").filter(Boolean);return e.some(o=>o.includes(" ")?t.includes(o):a.some(i=>{if(i===o||Gs(i,o))return!0;const n=o.length>=7?2:o.length>=4?1:0;return n>0&&Math.abs(i.length-o.length)<=n&&Vs(i,o)<=n}))}function Ys(t,e={}){const a=zs(t),o=_e(),i=o.filter(u=>!z(u)&&u.urgency==="High").length,n=W("cat-accounting","Accounting"),r=o.filter(u=>!z(u)&&u.category===n).length,c=ut().map(se).filter(u=>u.awaitingApproval).length,g=ie(a,["invoice","invoices","accounting"]),p=ie(a,["rule","rules","create rule"]);if(ie(a,["urgent","urgency"]))return{text:`${i} urgent emails are open. I switched Triage to urgent items.`,action:{type:"show_triage",filter:"urgent"}};if(ie(a,["triage","inbox","show inbox","open inbox"]))return{text:"I opened the full Triage inbox.",action:{type:"show_triage",filter:"all"}};if(g&&p)return{text:"Invoice rule is ready in observation mode. It is still fake/local and will not touch a mailbox.",action:{type:"show_rule",ruleId:Ws().id}};if(g)return{text:`${r} invoice-related emails are open. I switched Triage to ${n}.`,action:{type:"show_triage",filter:"invoices"}};if(ie(a,["draft","drafts","approval","approve"]))return{text:`${c} saved drafts need human approval. I opened the Drafts queue.`,action:{type:"show_drafts",filter:"needs_approval"}};if(ie(a,["digest","morning digest"]))return{text:"I regenerated the morning digest from local demo data.",action:{type:"generate_digest"}};if(ie(a,["explain","explanation","why"])){if(!e.selectedEmailId)return{text:"Open an email in Triage first, then ask me to explain it. I will show the flagged reason."};const u=Re(B(e.selectedEmailId));return{text:`Courio flagged "${u.subject}" because: ${u.explanation}`,action:{type:"explain_email",emailId:u.id}}}return ie(a,["reset","restart"])?{text:"I can reset the fake demo data now. The page will reload so defaults come back clean.",action:{type:"reset_demo_data"}}:{text:"I did not catch that. Try one of the command hints below."}}async function Y(){return await w(),v(_e().map(Re))}async function Qs(){return await w(150),v(Te)}async function da(){return await w(150),v(E)}async function Js(t){await w(250);const e=Te.find(a=>a.id===t);if(!e)throw new Error("Demo account not found.");return E=e,pe=rt(),Xt(),v(E)}async function Ks(){return await w(150),E=null,pe=rt(),Xt(),null}async function j(){return await w(350),dt(),D(),v(m.tasks.map(we).filter(t=>!t.hiddenFromInbox||t.status!=="Done").filter(t=>!q()||ye(t).includes(U())).sort((t,e)=>Mt(t)-Mt(e)||(t.status==="Done")-(e.status==="Done")||t.createdAt.localeCompare(e.createdAt)))}async function at(){return await w(350),v(m.employees)}async function ca(){return await w(300),v(m.categories)}async function ne(){return await w(400),q()?[]:v(m.rules)}async function ua(){return await w(350),Bs()}async function ae(){return await w(700),v(_s())}async function me(){return await w(400),v(ut().map(se))}async function mt(){return await w(350),v(m.composeDrafts.filter(t=>!q()||t.ownerEmployeeId===U()).sort((t,e)=>e.updatedAt.localeCompare(t.updatedAt)))}async function Zs(t){await w(500);const e=Ls(t),a=m.composeDrafts.findIndex(n=>n.id===e.id);if(a!==-1&&q()&&m.composeDrafts[a].ownerEmployeeId!==U())throw M("forbidden");const o=new Date().toISOString(),i={...e,ownerEmployeeId:a===-1?U()||"emp-1":m.composeDrafts[a].ownerEmployeeId,id:a===-1?`compose-${Date.now()}`:e.id,createdAt:a===-1?o:m.composeDrafts[a].createdAt,updatedAt:o};return a===-1?m.composeDrafts.unshift(i):m.composeDrafts[a]=i,V("compose-draft-saved",{draftId:i.id,label:`Compose draft saved: ${i.subject}`}),D(),v(i)}async function Se(t){await w(450);const e=He(t),a=B(e.emailId||e.id);return a.workflowState===$.DRAFT_GENERATED&&(a.workflowState=$.DRAFT_REVIEWED,e.reviewedAt=new Date().toISOString(),e.updatedAt=e.reviewedAt,D()),v({...se(e),sourceEmail:{id:a.id,subject:a.subject,sender:a.sender,senderEmail:a.senderEmail,body:a.body,suggestedAction:a.suggestedAction,confidence:a.confidence,urgency:a.urgency,status:z(a)?"Done":"Open",workflowStatus:Ne(a.workflowState)}})}async function Xs(t){await w(350),B(t);const e=Be(t);return e?Se(e.id):null}function ce(t){const e=new Error(t);return e.translationKey=`preferences.${t}`,e}function pa(t){if(t===null)return!0;if(typeof t!="string"||t.length>7e5)return!1;const e=/^data:image\/(png|jpeg|webp);base64,([A-Za-z0-9+/]+={0,2})$/.exec(t);if(!e)return!1;try{const a=atob(e[2]);return e[1]==="png"?a.startsWith(`PNG\r

`):e[1]==="jpeg"?a.startsWith("ÿØÿ"):a.startsWith("RIFF")&&a.slice(8,12)==="WEBP"}catch{return!1}}function Ee(t={}){const e=t&&typeof t=="object"?t:{};return{theme:["light","dark","system"].includes(e.theme)?e.theme:"light",language:["en","fr"].includes(e.language)?e.language:"workspace",backgroundImage:pa(e.backgroundImage)?e.backgroundImage:null,backgroundDim:Number.isInteger(e.backgroundDim)&&e.backgroundDim>=50&&e.backgroundDim<=95?e.backgroundDim:80,labelColors:Object.fromEntries(Object.entries(e.labelColors||{}).filter(([a,o])=>/^[a-zA-Z0-9_-]+$/.test(a)&&typeof o=="string"&&/^#[0-9a-f]{6}$/i.test(o))),hiddenCategoryIds:Array.isArray(e.hiddenCategoryIds)?[...new Set(e.hiddenCategoryIds.filter(a=>typeof a=="string"))]:[]}}async function ma(){var t;return v(Ee((t=m.preferencesByAccount)==null?void 0:t[E==null?void 0:E.id]))}async function ga(t={}){var g;const e=E==null?void 0:E.id;if(await w(250),!e||(E==null?void 0:E.id)!==e)throw ce("sessionRequired");const a=["theme","language","backgroundImage","backgroundDim","labelColors","hiddenCategoryIds"];if(!t||typeof t!="object"||Object.keys(t).some(p=>!a.includes(p)))throw ce("invalid");const i={...Ee((g=m.preferencesByAccount)==null?void 0:g[e]),...t};if(!["workspace","en","fr"].includes(i.language)||!["light","dark","system"].includes(i.theme)||!Number.isInteger(i.backgroundDim)||i.backgroundDim<50||i.backgroundDim>95)throw ce("invalid");if(!pa(i.backgroundImage))throw ce("invalidImage");const n=new Set(m.categories.map(p=>p.id));if(!i.labelColors||typeof i.labelColors!="object"||Array.isArray(i.labelColors)||Object.entries(i.labelColors).some(([p,u])=>!n.has(p)||typeof u!="string"||!/^#[0-9a-f]{6}$/i.test(u))||!Array.isArray(i.hiddenCategoryIds)||i.hiddenCategoryIds.some(p=>!n.has(p)))throw ce("invalid");const r=Ee(i),c={...m.preferencesByAccount,[e]:r};try{window.localStorage.setItem(Ae,JSON.stringify({...m,preferencesByAccount:c}))}catch{throw ce("storageFull")}return m.preferencesByAccount=c,v(r)}async function eo(){return ga(Ee())}async function fa(){return await w(250),v(m.settings)}async function to(t){return await w(450),H(),m.settings={...m.settings,...t,language:t.language?t.language==="fr"?"fr":"en":m.settings.language,approvalRequired:!0,autoSend:!1},D(),v(m.settings)}async function ao(){return await w(350),H(),window.localStorage.removeItem(Ae),window.localStorage.removeItem(Le),Te.forEach(t=>window.localStorage.removeItem(`${Le}.${t.id}`)),v(te)}async function va(t){await w();const e=B(t);return e.workflowState===$.NEEDS_REVIEW&&(e.workflowState=$.READY_FOR_DRAFT,e.reviewedAt=new Date().toISOString(),D()),v({...Re(e),messages:e.thread})}async function so(t){return await w(700),B(t).summary}async function oo(t){await w(750);const e=B(t);if(z(e))throw new Error("This email is done. Reopen it before creating or changing a draft.");if(e.workflowState===$.NEEDS_REVIEW)throw new Error("Review this email before generating a draft.");const a=Be(t);if(a)return v(se(a));if(e.workflowState!==$.READY_FOR_DRAFT)throw new Error("This workflow is not ready to generate a new draft.");const o=new Date().toISOString(),i={id:`draft-${t}`,emailId:t,title:e.suggestedAction,source:e.subject,text:e.draft,confidence:e.confidence,risk:e.urgency==="High"?"High":"Low",createdAt:o,updatedAt:o};return m.drafts.push(i),e.workflowState=$.DRAFT_GENERATED,D(),v(se(i))}async function io(t,e){if(await w(),!e||e.trim().length<10)throw new Error("Draft is too short to save.");const a=He(t),o=B(a.emailId||a.id);if(z(o))throw new Error("This email is done. Reopen it before editing the draft.");if(![$.DRAFT_REVIEWED,$.DRAFT_SAVED].includes(o.workflowState))throw new Error("Review this draft before saving it.");return a.text=e,a.updatedAt=new Date().toISOString(),o.workflowState=$.DRAFT_SAVED,D(),v(se(a))}async function no(t){await w(),H();const e=He(t),a=B(e.emailId||e.id);if(z(a))throw new Error("This email is done. Reopen it before changing draft approval.");if(!lt(e))throw new Error("Review this draft before approving.");return ta(a,e),D(),v(se(e))}async function ha(t){if(await w(650),H(),!t.length)throw new Error("Select at least one draft first.");const e=t.map(o=>{const i=He(o),n=B(i.emailId||i.id);return{draft:i,email:n}}).filter(({email:o})=>!z(o));if(!e.length)throw new Error("No selected drafts could be approved.");if(e.some(({draft:o})=>!lt(o)))throw new Error("Review this draft before approving.");const a=[];for(const{draft:o,email:i}of e)ta(i,o),a.push(o.id);return D(),v({approved:a})}async function ro(){if(await w(700),H(),!js())throw new Error("Low-risk bulk approval is disabled by workspace settings.");const t=m.drafts.filter(e=>e.risk!=="High").filter(lt).filter(e=>!z(B(e.emailId||e.id))).map(e=>e.id);if(!t.length)throw new Error("No low-risk drafts are awaiting approval.");return ha(t)}async function Lt(t){await w(450),H();const e=m.rules.find(a=>a.id===t);if(!e)throw new Error("Rule not found.");return e.on=!e.on,D(),v(e)}async function lo(t,e){var o,i;await w(500),H();const a=m.rules.find(n=>n.id===t);if(!a)throw new Error("Rule not found.");if(!((o=e.title)!=null&&o.trim()))throw new Error("Rule name is required.");if(!((i=e.desc)!=null&&i.trim()))throw new Error("Rule description is required.");if(e.category&&!na(e.category))throw new Error("Choose an existing category before saving.");return a.title=e.title.trim(),a.desc=e.desc.trim(),a.category=e.category||a.category,D(),v(a)}async function co(t){await w(450),H();const e=m.rules.findIndex(o=>o.id===t);if(e===-1)throw new Error("Rule not found.");const[a]=m.rules.splice(e,1);return m.deletedRuleIds=[...new Set([...m.deletedRuleIds||[],t])],V("rule-deleted",{ruleId:a.id,label:`Rule deleted: ${a.title}`}),D(),v(a)}async function ya(t,e){if(await w(400),!e)throw new Error("Choose a category before saving.");if(!na(e))throw new Error("Choose an existing category before saving.");const a=B(t);return a.category=e,D(),v(a)}async function uo(t,e="Removed from demo inbox"){await w(500);const a=[...new Set((t||[]).filter(Boolean))];if(!a.length)throw new Error("Choose at least one email to remove from the demo inbox.");const o=new Date().toISOString(),i=a.map(n=>{const r=B(n),c=Be(r.id),g=z(r);if(c&&!g)throw new Error("Finish active drafts before removing those emails from the demo inbox.");return r.archivedAt=o,r.archiveReason=e,r});return V("emails-archived",{emailIds:i.map(n=>n.id),label:`${i.length} email${i.length===1?"":"s"} removed from the demo inbox`}),D(),v(i.map(Re))}function M(t){const e=new Error(t);return e.code=t,e}function We(t){const e={};for(const a of["title","notes","priority","status","assignedTo","collaboratorIds","dueAt"])Object.hasOwn(t,a)&&(e[a]=t[a]);if("title"in e&&(e.title=String(e.title||"").trim(),!e.title))throw M("titleRequired");if("notes"in e&&(e.notes=String(e.notes||"").trim()),"priority"in e&&!["High","Medium","Low"].includes(e.priority))throw M("invalidPriority");if("status"in e&&!["Open","Done"].includes(e.status))throw M("invalidStatus");if("assignedTo"in e&&e.assignedTo&&!m.employees.some(a=>a.id===e.assignedTo))throw M("invalidAssignee");if("collaboratorIds"in e){if(!Array.isArray(e.collaboratorIds)||e.collaboratorIds.some(a=>!m.employees.some(o=>o.id===a)))throw M("invalidAssignee");e.collaboratorIds=[...new Set(e.collaboratorIds)]}if("dueAt"in e&&(e.dueAt=e.dueAt||null,e.dueAt&&(!/^\d{4}-\d{2}-\d{2}$/.test(e.dueAt)||Number.isNaN(Date.parse(e.dueAt))||new Date(e.dueAt).toISOString().slice(0,10)!==e.dueAt)))throw M("invalidDate");return e}function gt(t){const e=m.tasks.find(a=>a.id===t);if(!e)throw M("notFound");if(q()&&!ye(e).includes(U()))throw M("forbidden");return e}function ft(t,e,a="updated",o=null){("assignedTo"in e||"collaboratorIds"in e)&&(e.collaboratorIds=(e.collaboratorIds||t.collaboratorIds||[]).filter(r=>r!==(e.assignedTo??t.assignedTo)));const i={};for(const[r,c]of Object.entries(e))JSON.stringify(t[r])!==JSON.stringify(c)&&(i[r]=v(t[r]??null));if(!Object.keys(i).length)return;const n=new Date().toISOString();Object.assign(t,e),t.completedAt=t.status==="Done"?t.completedAt||n:null,t.updatedAt=n,t.history.push({id:crypto.randomUUID(),at:n,action:a,before:i,restoredEntryId:o,label:a==="restored"?"Task change restored":"Task updated"}),V(a==="restored"?"task-restored":e.status==="Done"?"task-completed":"task-updated",{taskId:t.id,emailId:t.emailId,label:`Task ${a}: ${t.title}`})}async function po(t={}){await w(400);const e=We({title:t.title,notes:t.notes||"",priority:t.priority||"Medium",dueAt:t.dueAt,assignedTo:t.assignedTo??U(),collaboratorIds:t.collaboratorIds||[]});if(q()&&e.assignedTo!==U())throw M("forbidden");const a=he({...e,id:`task-${crypto.randomUUID()}`});return a.history.push({id:crypto.randomUUID(),at:a.createdAt,action:"created",label:"Task created"}),m.tasks.push(a),V("task-created",{taskId:a.id,label:`Task created: ${a.title}`}),D(),v(we(a))}async function mo(t){await w(300);const e=B(t);if(q()&&e.assignedTo!==U())throw M("forbidden");let a=m.tasks.find(o=>o.emailId===t);if(a&&q()&&!ye(a).includes(U()))throw M("forbidden");return a||(a=sa(e),m.tasks.push(a),D()),v(we(a))}async function go(t,e){await w(300);const a=gt(t),o=a.history.find(n=>n.id===e);if(!(o!=null&&o.before))throw M("noSnapshot");if(q()&&Object.hasOwn(o.before,"assignedTo")||q()&&Object.hasOwn(o.before,"collaboratorIds")&&a.assignedTo!==U())throw M("forbidden");const i=We(o.before);return ft(a,i,"restored",e),D(),v(we(a))}async function Oe(t,e={}){await w(400),dt();const a=gt(t),o=We(e);if(q()&&Object.hasOwn(o,"assignedTo")||q()&&Object.hasOwn(o,"collaboratorIds")&&a.assignedTo!==U())throw M("forbidden");return ft(a,o),D(),v(we(a))}async function Nt(t,e={}){var r;await w(400),dt();const a=m.tasks.find(c=>c.id===t);if(!a)throw new Error("Task not found.");if(q()&&!ye(a).includes(U()))throw new Error("This demo employee can only update assigned tasks.");const o=!!e.enabled,i=new Date().toISOString();let n=null;if(o){const c=e.dueAt?new Date(`${e.dueAt}T17:00:00`):new Date(Date.now()+2592e5);if(Number.isNaN(c.getTime()))throw new Error("Choose a valid follow-up date.");n=c.toISOString()}return a.followUp={enabled:o,dueAt:n,createdAt:o?((r=a.followUp)==null?void 0:r.createdAt)||i:null,updatedAt:o?i:null},a.updatedAt=i,a.history=[...a.history||[],{at:i,label:o?`Follow-up scheduled for ${n.slice(0,10)}`:"Follow-up reminder removed"}],V(o?"follow-up-scheduled":"follow-up-removed",{taskId:a.id,emailId:a.emailId,dueAt:n,label:o?`Follow-up scheduled: ${a.title}`:`Follow-up removed: ${a.title}`}),D(),v(we(a))}async function fo(t,e={}){await w(400);const a=gt(t),o=We({title:e.title,notes:e.notes||"",assignedTo:e.assignedTo,dueAt:e.dueAt,priority:a.priority});if(!o.assignedTo)throw M("invalidAssignee");const i=he({...o,id:`task-${crypto.randomUUID()}`,parentTaskId:a.id,requestedByEmployeeId:U()});return i.history.push({id:crypto.randomUUID(),at:i.createdAt,action:"created",label:"Follow-up task created"}),m.tasks.push(i),a.history.push({id:crypto.randomUUID(),at:i.createdAt,action:"followUpRequested",label:`Follow-up requested from ${pt(o.assignedTo).name}`}),V("task-follow-up-requested",{taskId:i.id,label:`Follow-up requested: ${i.title}`}),D(),v({id:i.id})}async function vo(t){await w(450),H();const e=ra(t),a={id:`cat-${Date.now()}`,...e,active:!0,system:!1};return m.categories.push(a),V("category-added",{categoryId:a.id,label:`Category added: ${a.name}`}),D(),v(a)}async function ho(t,e){await w(450),H();const a=ia(t),o=ra(e,t),i=a.name;return Object.assign(a,o),i!==a.name&&Hs(i,a.name),V("category-updated",{categoryId:a.id,label:`Category updated: ${a.name}`}),D(),v(a)}async function yo(t){await w(400),H();const e=ia(t);return e.active=!e.active,V("category-toggled",{categoryId:e.id,label:`${e.active?"Category restored":"Category archived"}: ${e.name}`}),D(),v(e)}async function wo(t,e){await w(400),H(),e&&pt(e);const a=B(t);a.assignedTo=e;const o=m.tasks.find(i=>i.emailId===t);return o&&ft(o,{assignedTo:e}),D(),v(a)}async function bo(t){await w(500),H();const e=la(t),a={id:`employee-${Date.now()}`,...e};return m.employees.push(a),V("employee-added",{employeeId:a.id,label:`Employee added: ${a.name}`}),D(),v(a)}async function $o(t,e){await w(500),H();const a=pt(t),o=la(e,t);return Object.assign(a,o),V("employee-updated",{employeeId:a.id,label:`Employee updated: ${a.name}`}),D(),v(a)}async function ko(t){await w(500),H();const e=m.employees.findIndex(i=>i.id===t);if(e===-1)throw new Error("Employee not found.");const[a]=m.employees.splice(e,1);m.deletedEmployeeIds=[...new Set([...m.deletedEmployeeIds||[],t])];let o=0;return m.emails.forEach(i=>{i.assignedTo===t&&(i.assignedTo="",o+=1)}),m.tasks.forEach(i=>{i.collaboratorIds=(i.collaboratorIds||[]).filter(n=>n!==t),i.assignedTo===t&&(i.assignedTo="",i.updatedAt=new Date().toISOString(),i.history=[...i.history||[],{at:i.updatedAt,label:"Assigned employee was removed; task returned to Unassigned"}])}),V("employee-deleted",{employeeId:a.id,label:`Employee removed: ${a.name}. ${o} assigned emails returned to Unassigned.`}),D(),v(a)}async function O(){return await w(250),q()?[]:v(m.completedActions)}async function wa(){return await w(150),v(pe)}async function Ao(t,e={}){if(await w(500),!(t!=null&&t.trim()))throw new Error("Type a command first.");const a={id:`user-${Date.now()}`,role:"user",text:t.trim()},o=Ys(t,e),i={id:`assistant-${Date.now()}`,role:"assistant",text:o.text};return pe=[...pe,a,i].slice(-24),Os(),v({messages:pe,action:o.action||null})}const So=document.querySelector("#app"),ba=new Set(["dashboard","import","triage","tasks","compose","rules","drafts","admin","preferences","team"]),s={tab:"dashboard",demoAccounts:[],session:null,emails:[],categories:[],employees:[],rules:[],drafts:[],tasks:[],composeDrafts:[],settings:{companyName:"Demo PME Inc.",language:"en",mode:"Simple",defaultMode:"Observation only",escalationRecipient:"owner@company.ca",approvalRequired:!0,autoSend:!1},settingsForm:null,preferences:null,preferencesForm:null,loading:{emails:!0,rules:!0,drafts:!0},busy:{},selectedEmail:null,selectedCategory:null,selectedDraft:null,selectedRule:null,selectedEmployee:null,selectedTask:null,taskEditor:null,colleagueFollowUp:null,selectedDraftIds:[],confirmDialog:null,digest:null,triageFilter:"all",triageCategoryFilter:"all",taskAssigneeFilter:"all",taskFollowUpFilter:"all",draftFilter:"all",ruleQuery:"",assistantOpen:!1,assistantMessages:[],activity:[],setupPreview:null,selectedSetupMailboxId:"",composeForm:{id:"new",to:"",cc:"",subject:"",body:"",attachments:[]},summary:"",showExplanation:!1};So.innerHTML=`
  <div class="app">
    <aside>
      <div class="brand">
        <div class="brand-title">Courio</div>
        <div class="brand-sub" data-copy="brand.subtitle">Email assistant for small businesses</div>
      </div>
      <nav class="nav">
        <div class="nav-group">
          <div class="nav-label" data-copy="nav.groups.home">Home</div>
          <button class="active" data-tab="dashboard"><span data-copy="nav.dashboard">Overview</span> <small data-copy="nav.dashboardSmall">Today</small></button>
        </div>
        <div class="nav-group">
          <div class="nav-label" data-copy="nav.groups.work">Work</div>
          <button data-tab="triage"><span data-copy="nav.triage">Triage</span> <small data-copy="nav.triageSmall">Inbox</small></button>
          <button data-tab="tasks"><span data-copy="nav.tasks">Tasks</span> <small data-copy="nav.tasksSmall">Priority</small></button>
          <button data-tab="compose"><span data-copy="nav.compose">Compose</span> <small data-copy="nav.composeSmall">Local draft</small></button>
          <button data-tab="drafts"><span data-copy="nav.drafts">Drafts</span> <small data-copy="nav.draftsSmall">Approval</small></button>
        </div>
        <div class="nav-group">
          <div class="nav-label" data-copy="nav.groups.automation">Automation</div>
          <button data-tab="rules"><span data-copy="nav.rules">Rules</span> <small data-copy="nav.rulesSmall">Preview</small></button>
        </div>
        <div class="nav-group">
          <div class="nav-label" data-copy="nav.groups.workspace">Workspace</div>
          <button data-tab="import"><span data-copy="nav.import">Setup preview</span> <small data-copy="nav.importSmall">Microsoft 365</small></button>
          <button data-tab="admin"><span data-copy="nav.admin">Admin</span> <small data-copy="nav.adminSmall">Settings</small></button>
        </div>
      </nav>
      <div class="aside-note" data-copy="brand.asideNote">Courio uses fake local mailbox data in this prototype and suggests actions. It never sends email or modifies a real mailbox.</div>
    </aside>
    <main>
      <div class="header">
        <div>
          <h1 id="pageTitle"></h1>
          <p class="subtitle" id="pageSubtitle"></p>
        </div>
        <div class="mode" data-copy="brand.previewMode">Preview mode enabled</div>
      </div>
      <section id="dashboard" class="section"></section>
      <section id="import" class="section"></section>
      <section id="triage" class="section"></section>
      <section id="tasks" class="section"></section>
      <section id="compose" class="section"></section>
      <section id="rules" class="section"></section>
      <section id="drafts" class="section"></section>
      <section id="admin" class="section"></section>
      <section id="preferences" class="section"></section>
      <section id="team" class="section"></section>
    </main>
  </div>
  <div id="drawerRoot"></div>
  <div id="modalRoot"></div>
  <div id="assistantRoot"></div>
  <div id="authRoot"></div>
  <div class="toast" id="toast"></div>
`;function je(t,e){s.busy[t]=e,S()}async function b(t,e,a){try{je(t,!0),await e(),a&&ge(a)}catch(o){ge(o.translationKey?d(o.translationKey):o.code?d(`taskWork.${o.code}`):o.message||"Something went wrong in the mock workflow.",!0)}finally{je(t,!1)}}function h(t){return!!s.busy[t]}function ge(t,e=!1){const a=document.querySelector("#toast");a.textContent=t,a.classList.toggle("error",e),a.classList.add("show"),window.clearTimeout(a.dataset.timer),a.dataset.timer=window.setTimeout(()=>a.classList.remove("show"),2400)}function $e(){var t;return((t=s.session)==null?void 0:t.role)==="Admin"}function De(){var t;return((t=s.session)==null?void 0:t.role)==="Employee"}function Eo(){return s.session?De()?new Set(["dashboard","triage","tasks","drafts","team","compose","preferences"]):ba:new Set([])}function ke(t){return Eo().has(t)}function J(t,e={}){if(!ba.has(t)||!ke(t))throw new Error("That Courio section is unavailable.");const a=s.tab;a==="preferences"&&t!=="preferences"&&(s.preferencesForm=null),t==="preferences"&&a!=="preferences"&&(s.preferencesForm=structuredClone(s.preferences)),a==="admin"&&t!=="admin"&&(s.settingsForm=null),t==="admin"&&a!=="admin"&&(s.settingsForm={...s.settings}),s.tab=t,e.triageFilter&&(s.triageFilter=e.triageFilter),e.draftFilter&&(s.draftFilter=e.draftFilter),e.closeDrawers!==!1&&(s.colleagueFollowUp=null,s.taskEditor=null,s.selectedTask=null,s.selectedEmail=null,s.selectedCategory=null,s.selectedDraft=null,s.selectedRule=null,s.selectedEmployee=null,s.summary="",s.showExplanation=!1),S()}async function Ue(t=(e=>(e=s.selectedEmail)==null?void 0:e.id)()){if(s.emails=await Y(),t){const a=s.emails.find(o=>o.id===t);s.selectedEmail=a?{...a,messages:a.thread}:null}}async function Ot(t=(e=>(e=s.selectedCategory)==null?void 0:e.id)()){const[a,o,i,n,r,c,g]=await Promise.all([ca(),Y(),ne(),j(),ae(),ua(),O()]);s.categories=a,s.emails=o,s.rules=i,s.tasks=n,s.digest=r,s.setupPreview=c,s.activity=g,s.selectedCategory=t&&a.find(p=>p.id===t)||null}async function jt(){s.colleagueFollowUp=null,s.composeForm={id:"new",to:"",cc:"",subject:"",body:"",attachments:[]},s.selectedDraftIds=[],s.taskAssigneeFilter="all",s.taskFollowUpFilter="all",s.settings=await fa(),s.rules=await ne(),s.assistantMessages=await wa(),s.preferencesForm=null,s.triageCategoryFilter="all",s.taskEditor=null,s.selectedTask=null;const[t,e,a,o,i,n,r,c]=await Promise.all([da(),Y(),j(),me(),mt(),ae(),O(),ma()]);s.session=t,s.preferences=c,s.emails=e,s.tasks=a,s.drafts=o,s.composeDrafts=i,s.digest=n,s.activity=r,s.selectedEmail=null,s.selectedDraft=null,s.selectedRule=null,s.selectedEmployee=null,s.selectedCategory=null}function Do(t){return!!(t!=null&&t.isReadyForHumanSend)}function vt(){return s.settings.mode==="Advanced"}function $a(t=""){const e=s.categories.filter(o=>o.active),a=t?s.categories.find(o=>o.name===t):null;return a&&!e.some(o=>o.id===a.id)?[...e,a]:e}function Co(t,e){var a;return((a=s.categories.find(o=>o.id===t))==null?void 0:a.name)||e}function To(){const t=new Map;return s.categories.forEach(e=>{e.active&&t.set(e.name,e)}),s.emails.forEach(e=>{t.has(e.category)||t.set(e.category,{id:`current-${e.category}`,name:e.category,active:!0})}),[...t.values()].sort((e,a)=>e.name.localeCompare(a.name))}function ka(){const t=Co("cat-accounting","Accounting");return s.emails.filter(e=>s.triageCategoryFilter!=="all"&&e.category!==s.triageCategoryFilter?!1:s.triageFilter==="urgent"?e.status!=="Done"&&e.urgency==="High":s.triageFilter==="invoices"?e.status!=="Done"&&e.category===t:!0)}function Ce(){return{id:"new",to:"",cc:"",subject:"",body:"",attachments:[]}}function Ro(t=0){return t<1024?`${t} B`:t<1024*1024?`${Math.round(t/1024)} KB`:`${(t/(1024*1024)).toFixed(1)} MB`}function Aa(){return s.settings.allowLowRiskBulkApproval!=="No"}function ze(){return s.settingsForm||{...s.settings}}function Io(){return ze().mode==="Advanced"}function Ve(){var t;return Pe(["en","fr"].includes((t=s.preferences)==null?void 0:t.language)?s.preferences.language:s.settings.language)}function d(t){return Kt(Ve())(t)}function Sa(t){if(!t)return"";const e=new Date(t);return Number.isNaN(e.getTime())?"":e.toLocaleString()}function st(t){if(!t)return"";const e=new Date(t);return Number.isNaN(e.getTime())?"":e.toLocaleDateString()}function Fo(){const t=Kt(Ve());document.querySelectorAll("[data-copy]").forEach(e=>{e.textContent=t(e.dataset.copy)})}async function xo(){var t;try{const[e,a,o,i,n,r,c,g,p,u,y,k,A,C]=await Promise.all([Qs(),da(),Y(),ca(),at(),ne(),me(),j(),mt(),fa(),ae(),wa(),O(),ua()]);s.demoAccounts=e,s.session=a,s.preferences=await ma(),s.preferencesForm=null,s.emails=o,s.categories=i,s.employees=n,s.rules=r,s.drafts=c,s.tasks=g,s.composeDrafts=p,s.settings={...s.settings,...u},s.settingsForm=null,s.digest=y,s.assistantMessages=k,s.activity=A,s.setupPreview=C,s.selectedSetupMailboxId=((t=C.mailboxes[0])==null?void 0:t.id)||"",s.session&&!ke(s.tab)&&(s.tab=De()?"tasks":"dashboard")}catch(e){ge(e.message||"Could not load mock data.",!0)}finally{s.loading.emails=!1,s.loading.rules=!1,s.loading.drafts=!1,S()}}function S(){s.session&&!ke(s.tab)&&(s.tab="dashboard");const t=ys(s.tab,Ve());Fo(),document.querySelector("#pageTitle").textContent=t[0],document.querySelector("#pageSubtitle").textContent=t[1],document.querySelectorAll(".section").forEach(e=>{e.classList.toggle("active",e.id===s.tab)}),document.querySelectorAll(".nav button").forEach(e=>{e.hidden=!ke(e.dataset.tab),e.classList.toggle("active",e.dataset.tab===s.tab)}),qo(),Ea(),Lo(),No(),Da(),Ta(),Go(),Jo(),Mo(),La(document.querySelector("#team"),s.employees,d),Oo(),jo(),Yo(),Uo(),vs({state:s,t:d,canAccessTab:ke,navigateTo:J}),cs(s.session?s.preferences:null,s.categories)}function Mo(){const t=document.querySelector("#preferences");if(s.tab!=="preferences"||!s.session){t.replaceChildren();return}s.preferencesForm||(s.preferencesForm=structuredClone(s.preferences)),ls(t,{form:s.preferencesForm,categories:s.categories,t:d,busy:h("preferences")||h("preference-image"),onChange:e=>{s.preferencesForm=e},onImage:async e=>{var i,n;if(!e)return;const a=s.preferencesForm,o=(i=s.session)==null?void 0:i.id;je("preference-image",!0);try{const r=await ds(e);s.preferencesForm===a&&((n=s.session)==null?void 0:n.id)===o&&(a.backgroundImage=r)}catch{s.preferencesForm===a&&ge(d("preferences.invalidImage"),!0)}finally{je("preference-image",!1)}}})}function qo(){const t=s.emails.filter(a=>a.status!=="Done").length,e=s.digest;document.querySelector("#dashboard").innerHTML=`
    <div class="grid cols-3">
      <div class="panel metric positive">
        <div class="label">Open emails</div>
        <div class="value">${s.loading.emails?"...":t}</div>
        <div class="caption">Built from local demo inbox data</div>
      </div>
      <div class="panel metric">
        <div class="label">Drafts awaiting approval</div>
        <div class="value">${s.drafts.filter(a=>a.canSelectForBulkApproval).length||0}</div>
        <div class="caption">No messages are sent automatically</div>
      </div>
      <div class="panel metric">
        <div class="label">Ready for human send</div>
        <div class="value">${s.drafts.filter(Do).length||0}</div>
        <div class="caption">Human approval still required to send</div>
      </div>
    </div>
    <div class="grid cols-2 stack-md">
      <div class="panel">
        <div class="panel-title"><h2>Morning digest</h2><span>${e?`Generated ${l(e.generatedAt)}`:"Loading..."}</span></div>
        <p class="subtitle">${e?l(e.headline):"Preparing a local demo digest from mock emails and drafts."}</p>
        ${e?`
          <table class="table stack-sm">
            <tr><td>Urgent items</td><td>${e.urgentItems.length?Q(e.urgentItems):"None"}</td></tr>
            <tr><td>Invoices</td><td>${e.invoices.length?Q(e.invoices):"None"}</td></tr>
            <tr><td>Missing documents</td><td>${e.missingDocuments.length?Q(e.missingDocuments):"None"}</td></tr>
            <tr><td>Quote requests</td><td>${e.quoteRequests.length?Q(e.quoteRequests):"None"}</td></tr>
            <tr><td>Client complaints</td><td>${e.clientComplaints.length?Q(e.clientComplaints):"None"}</td></tr>
          </table>
        `:""}
        <div class="actions stack-sm">
          <button class="btn primary" data-action="digest" ${h("digest")?"disabled":""}>${h("digest")?"Regenerating...":"Regenerate digest"}</button>
          <button class="btn subtle" data-tab-target="triage">Review triage</button>
        </div>
      </div>
      <div class="panel">
        <div class="panel-title"><h2>Recommended next actions</h2><span>${(e==null?void 0:e.recommendedActions.length)||0} items</span></div>
        <table class="table">
          ${((e==null?void 0:e.recommendedActions)||["Digest is loading."]).map(a=>`<tr><td><span class="badge lead">Action</span></td><td>${l(a)}</td></tr>`).join("")}
          ${vt()?`<tr><td><span class="badge invoice">Advanced</span></td><td>${s.rules.filter(a=>a.on).length} rules are currently enabled.</td></tr>`:""}
        </table>
      </div>
    </div>
  `}function Ea(){const t=s.setupPreview;if(!t){document.querySelector("#import").innerHTML='<div class="loading">Loading simulated setup preview...</div>';return}const e=t.mailboxes.find(a=>a.id===s.selectedSetupMailboxId)||t.mailboxes[0];document.querySelector("#import").innerHTML=`
    <div class="grid cols-2">
      <div class="panel">
        <div class="panel-title"><h2>${l(t.status)}</h2><span>No account connected</span></div>
        <div class="preview">${l(t.safetyNote)}</div>
        <div class="preview stack-xs">${l(t.futureNote)}</div>
        <div class="actions stack-sm">
          <button class="btn primary" disabled title="Real OAuth/provider connection is intentionally unavailable in this fake/local prototype.">Connect demo only</button>
          <button class="btn subtle" data-tab-target="triage">Review local triage</button>
        </div>
      </div>

      <div class="panel">
        <div class="panel-title"><h2>Choose simulated mailbox</h2><span>${t.mailboxes.length} demo options</span></div>
        <div class="setup-mailbox-list">
          ${t.mailboxes.map(a=>`
            <button class="setup-mailbox ${a.id===e.id?"active":""}" data-setup-mailbox="${a.id}">
              <strong>${l(a.name)}</strong>
              <span>${l(a.address)}</span>
              <small>${l(a.type)} - ${l(a.volume)}</small>
            </button>
          `).join("")}
        </div>
      </div>
    </div>

    <div class="grid cols-2 stack-md">
      <div class="panel">
        <div class="panel-title"><h2>${l(e.name)} preview</h2><span>${l(e.risk)}</span></div>
        <table class="table">
          <tr><td>Folders</td><td>${Q(e.folders)}</td></tr>
          <tr><td>Labels/categories</td><td>${Q(e.categories)}</td></tr>
          <tr><td>Frequent senders</td><td>${Q(e.frequentSenders)}</td></tr>
          <tr><td>Shared inboxes</td><td>${Q(e.sharedInboxes)}</td></tr>
          <tr><td>Recent threads</td><td>${Q(e.recentThreads)}</td></tr>
        </table>
      </div>

      <div class="panel">
        <div class="panel-title"><h2>What Courio would scan</h2><span>Simulated only</span></div>
        <table class="table">
          ${t.scanItems.map(a=>`
            <tr>
              <td><span class="badge lead">${a.count}</span><br>${l(a.label)}</td>
              <td>${l(a.detail)}</td>
            </tr>
          `).join("")}
        </table>
      </div>
    </div>

    <div class="grid cols-2 stack-md">
      <div class="panel">
        <div class="panel-title"><h2>Simulated setup flow</h2><span>Fake progress</span></div>
        <div class="workflow">
          ${t.setupSteps.map((a,o)=>`
            <div class="step">
              <div class="step-num">${o+1}</div>
              <div><strong>${l(a.title)}</strong><p>${l(a.detail)}</p></div>
              <span class="badge ${o===0?"lead":"done"}">${l(a.state)}</span>
            </div>
          `).join("")}
        </div>
      </div>

      <div class="panel">
        <div class="panel-title"><h2>Suggested workflow preview</h2><span>Needs human review</span></div>
        <table class="table">
          ${t.workflowSuggestions.map(a=>`
            <tr>
              <td><strong>${l(a.match)}</strong><br><small>${l(a.reason)}</small></td>
              <td><span class="badge invoice">${l(a.outcome)}</span></td>
            </tr>
          `).join("")}
        </table>
        <div class="preview stack-sm">These are local examples. Courio does not create mailbox rules or send email from this page.</div>
      </div>
    </div>
  `}function Lo(){const t=Object.fromEntries(s.employees.map(r=>[r.id,r])),e=To().filter(r=>{var c;return!((c=s.preferences)!=null&&c.hiddenCategoryIds.includes(r.id))||r.name===s.triageCategoryFilter}),a=ka(),o=a.filter(r=>r.canArchive),i=s.triageCategoryFilter==="all"?d("triage.allCategories"):s.triageCategoryFilter,n=s.loading.emails?'<div class="loading">Loading mock inbox...</div>':a.length===0?`<div class="empty-state">${s.triageFilter==="urgent"?d("triage.emptyUrgent"):s.triageFilter==="invoices"?d("triage.emptyInvoices"):s.triageCategoryFilter!=="all"?d("triage.emptyCategory"):d("triage.emptyAll")}</div>`:`<table class="table">
        <thead><tr><th>Subject</th><th>Sender</th><th>Category</th><th>Assigned</th><th>Workflow</th><th>Status</th><th></th></tr></thead>
        <tbody>
          ${a.map(r=>{var c;return`
            <tr>
              <td>${l(r.subject)}</td>
              <td>${l(r.sender)}<br><small>${l(r.senderEmail||"")}</small></td>
              <td>
                <span class="badge ${Ge(r.category)}" data-category-label="${l(r.category)}">${l(r.category)}</span><br>
                <small>${l(r.urgency||"Medium")} urgency - ${r.confidence||80}% confidence</small>
                <small class="triage-reason" title="${l(r.explanation||"")}">Why: ${l(r.explanation||"Matched the current local category rules.")}</small>
              </td>
              <td>${l(((c=t[r.assignedTo])==null?void 0:c.name)||"Unassigned")}</td>
              <td>${l(r.workflowLabel||"Not started")}</td>
              <td><span class="badge ${r.status==="Done"?"done":""}">${l(r.status)}</span></td>
              <td class="actions">
                <button class="btn subtle" data-review-email="${r.id}" ${h(`review-${r.id}`)?"disabled":""}>${h(`review-${r.id}`)?"Opening...":"Review"}</button>
                <button class="btn subtle" data-archive-email="${r.id}" ${!r.canArchive||h(`archive-${r.id}`)?`disabled title="${l(r.archiveBlocker||"Remove this fake/local email from the demo inbox.")}"`:""}>${h(`archive-${r.id}`)?d("triage.removing"):d("triage.remove")}</button>
                ${r.status==="Done"?'<span class="status-text">Complete</span>':'<span class="status-text" title="Generate, review, save, and approve a draft to complete this workflow.">Draft required</span>'}
              </td>
            </tr>
          `}).join("")}
        </tbody>
      </table>`;document.querySelector("#triage").innerHTML=`
    <div class="panel">
      <div class="panel-title"><h2>Inbox triage</h2><span>${d("triage.inboxControl")}</span></div>
      <div class="segmented below-sm">
        ${[["all","All inbox"],["urgent","Urgent"],["invoices","Invoices"]].map(([r,c])=>`<button class="${s.triageFilter===r?"active":""}" data-triage-filter="${r}">${c}</button>`).join("")}
      </div>
      <div class="list-toolbar below-sm">
        <select data-triage-category-filter aria-label="${d("triage.categoryFilter")}">
          <option value="all" ${s.triageCategoryFilter==="all"?"selected":""}>${d("triage.allCategories")}</option>
          ${e.map(r=>`<option value="${l(r.name)}" ${s.triageCategoryFilter===r.name?"selected":""}>${l(r.name)}</option>`).join("")}
        </select>
        <button class="btn subtle" data-archive-filtered ${a.length===0||o.length===0||h("archive-filtered")?`disabled title="${d("triage.removeFilteredDisabled")}"`:""}>${h("archive-filtered")?d("triage.removing"):`${d("triage.removeFiltered")} (${o.length})`}</button>
        <span class="mode">${l(i)}</span>
      </div>
      ${n}
    </div>
  `}function No(){const t=s.tasks.filter(n=>{var g,p;const r=!$e()||s.taskAssigneeFilter==="all"||(s.taskAssigneeFilter==="unassigned"?!n.assignedEmployees.length:n.assignedEmployees.some(u=>u.id===s.taskAssigneeFilter)),c=s.taskFollowUpFilter==="all"||s.taskFollowUpFilter==="scheduled"&&((g=n.followUp)==null?void 0:g.enabled)||s.taskFollowUpFilter==="overdue"&&((p=n.followUp)==null?void 0:p.overdue);return r&&c}),e=t.filter(n=>n.status!=="Done").length,a=t.filter(n=>n.status!=="Done"&&n.priority==="High").length,o=t.filter(n=>{var r;return(r=n.followUp)==null?void 0:r.overdue}).length,i=t.length===0?`<div class="empty-state">${d("tasks.empty")}</div>`:`<table class="table">
        <thead><tr><th>${d("tasks.done")}</th><th>${d("tasks.task")}</th><th>${d("tasks.priority")}</th><th>${d("tasks.assignedTo")}</th><th>${d("tasks.source")}</th><th>${d("tasks.notes")}</th><th></th></tr></thead>
        <tbody>
          ${t.map(n=>{var r,c,g,p,u,y,k,A;return`
            <tr>
              <td><input type="checkbox" data-task-status="${n.id}" ${n.status==="Done"?"checked":""}></td>
              <td>
                <strong>${l(n.title)}</strong><br>
                <small>${l(n.description)}</small>
                ${n.dueAt?`<p>${d("taskWork.dueAt")}: ${l(n.dueAt)}</p>`:""}
                ${(r=n.historySummary)!=null&&r.latestLabel?`
                  <div class="task-history-summary">
                    <span>${d("tasks.latestActivity")}:</span> ${l(n.historySummary.latestAction?d(`taskWork.${n.historySummary.latestAction}`):n.historySummary.latestLabel)}
                    ${n.historySummary.latestAt?`<small>${l(Sa(n.historySummary.latestAt))}</small>`:""}
                  </div>
                `:""}
                <div class="follow-up-control">
                  <label class="follow-up-toggle">
                    <input type="checkbox" data-task-follow-up="${n.id}" ${(c=n.followUp)!=null&&c.enabled?"checked":""}>
                    <span>${(g=n.followUp)!=null&&g.enabled?d("tasks.reminderOn"):d("tasks.reminderOff")}</span>
                  </label>
                  ${(p=n.followUp)!=null&&p.enabled?`
                    <input class="follow-up-date" type="date" data-task-follow-up-date="${n.id}" value="${l(((u=n.followUp.dueAt)==null?void 0:u.slice(0,10))||"")}" aria-label="${d("tasks.followUpDate")}">
                    <small class="${n.followUp.overdue?"follow-up-overdue":""}">${n.followUp.overdue?d("tasks.overdue"):`${d("tasks.scheduled")} ${st(n.followUp.dueAt)}`}</small>
                  `:""}
                </div>
              </td>
              <td><span class="badge ${n.priority==="High"?"urgent":n.priority==="Low"?"done":"pending"}">${l(n.priority)}</span><br><small>${l(n.category)}</small></td>
              <td>
                ${$e()?`<select data-task-assignee="${n.id}">
                      <option value="" ${n.assignedTo?"":"selected"}>${d("tasks.unassigned")}</option>
                      ${s.employees.map(C=>`<option value="${C.id}" ${n.assignedTo===C.id?"selected":""}>${l(C.name)}</option>`).join("")}
                    </select>`:l(((y=n.assignedEmployee)==null?void 0:y.name)||d("tasks.unassigned"))}
                <small>${l(n.assignedEmployees.filter(C=>C.id!==n.assignedTo).map(C=>C.name).join(", "))}</small>
              </td>
              <td>${l(((k=n.sourceEmail)==null?void 0:k.subject)||"Local task")}<br><small>${l(((A=n.sourceEmail)==null?void 0:A.sender)||"Demo inbox")}</small></td>
              <td><textarea data-task-note="${n.id}" placeholder="${d("tasks.notePlaceholder")}">${l(n.notes||"")}</textarea></td>
              <td class="actions">
                ${n.sourceEmail?`<button class="btn subtle" data-review-email="${n.sourceEmail.id}">${d("tasks.reviewEmail")}</button>`:""}
                <button class="btn subtle" data-review-task="${n.id}">${d("tasks.viewHistory")}</button>
                <button class="btn subtle" data-edit-task="${n.id}">${d("taskWork.edit")}</button>
                <button class="btn subtle" data-request-task-follow-up="${n.id}">${d("employee.followUp")}</button>
                <button class="btn subtle" data-save-task-note="${n.id}" ${h(`task-note-${n.id}`)?"disabled":""}>${h(`task-note-${n.id}`)?d("tasks.saving"):d("tasks.saveNote")}</button>
              </td>
            </tr>
          `}).join("")}
        </tbody>
      </table>`;document.querySelector("#tasks").innerHTML=`
    <div class="grid cols-3">
      <div class="panel metric">
        <div class="label">${d("tasks.openTasks")}</div>
        <div class="value">${e}</div>
        <div class="caption">${d("tasks.openCaption")}</div>
      </div>
      <div class="panel metric positive">
        <div class="label">${d("tasks.highPriority")}</div>
        <div class="value">${a}</div>
        <div class="caption">${d("tasks.highCaption")}</div>
      </div>
      <div class="panel metric">
        <div class="label">${d("tasks.followUp")}</div>
        <div class="value">${o}</div>
        <div class="caption">${d(o?"tasks.overdueCaption":"tasks.noOverdueCaption")}</div>
      </div>
    </div>
    <div class="panel stack-md">
      <div class="panel-title"><h2>${De()?d("taskWork.myTasks"):d("tasks.title")}</h2><button class="btn primary" data-add-task>${d("taskWork.add")}</button></div>
      ${$e()?`
        <div class="list-toolbar task-filters below-sm">
          <select data-task-assignee-filter aria-label="${d("tasks.assigneeFilter")}">
            <option value="all" ${s.taskAssigneeFilter==="all"?"selected":""}>${d("tasks.allAssignees")}</option>
            <option value="unassigned" ${s.taskAssigneeFilter==="unassigned"?"selected":""}>${d("tasks.unassigned")}</option>
            ${s.employees.map(n=>`<option value="${n.id}" ${s.taskAssigneeFilter===n.id?"selected":""}>${l(n.name)}</option>`).join("")}
          </select>
          <select data-task-follow-up-filter aria-label="${d("tasks.followUpFilter")}">
            <option value="all" ${s.taskFollowUpFilter==="all"?"selected":""}>${d("tasks.allFollowUps")}</option>
            <option value="scheduled" ${s.taskFollowUpFilter==="scheduled"?"selected":""}>${d("tasks.scheduledFollowUps")}</option>
            <option value="overdue" ${s.taskFollowUpFilter==="overdue"?"selected":""}>${d("tasks.overdueFollowUps")}</option>
          </select>
        </div>
      `:`
        <div class="preview below-sm">${d("tasks.employeeScope")}</div>
        <div class="list-toolbar task-filters below-sm">
          <select data-task-follow-up-filter aria-label="${d("tasks.followUpFilter")}">
            <option value="all" ${s.taskFollowUpFilter==="all"?"selected":""}>${d("tasks.allFollowUps")}</option>
            <option value="scheduled" ${s.taskFollowUpFilter==="scheduled"?"selected":""}>${d("tasks.scheduledFollowUps")}</option>
            <option value="overdue" ${s.taskFollowUpFilter==="overdue"?"selected":""}>${d("tasks.overdueFollowUps")}</option>
          </select>
        </div>
      `}
      ${i}
    </div>
  `}function Da(){const t=s.composeForm||Ce(),e=t.attachments.length?`<ul>${t.attachments.map(o=>`<li>${l(o.name)} <small>${l(o.type||"Unknown")} - ${Ro(o.size)}</small></li>`).join("")}</ul>`:`<div class="empty-state">${d("compose.noAttachments")}</div>`,a=s.composeDrafts.length?`<table class="table">
        <thead><tr><th>${d("compose.subject")}</th><th>${d("compose.to")}</th><th>${d("compose.attachments")}</th><th></th></tr></thead>
        <tbody>
          ${s.composeDrafts.map(o=>`
            <tr>
              <td>${l(o.subject)}<br><small>${l(new Date(o.updatedAt).toLocaleString())}</small></td>
              <td>${l(o.to)}</td>
              <td>${o.attachments.length}</td>
              <td><button class="btn subtle" data-open-compose-draft="${o.id}">${d("compose.openDraft")}</button></td>
            </tr>
          `).join("")}
        </tbody>
      </table>`:`<div class="empty-state">${d("compose.emptyDrafts")}</div>`;document.querySelector("#compose").innerHTML=`
    <div class="grid cols-2">
      <div class="panel">
        <div class="panel-title">
          <div><h2>${d("compose.title")}</h2><span>${d("compose.subtitle")}</span></div>
          <button class="btn subtle" data-new-compose>${d("compose.newMessage")}</button>
        </div>
        <div class="preview">${d("compose.safetyNote")}</div>
        <div class="form-grid stack-sm">
          <label>${d("compose.to")}<input data-compose-field="to" type="email" value="${l(t.to)}" placeholder="client@example.ca"></label>
          <label>${d("compose.cc")}<input data-compose-field="cc" value="${l(t.cc)}" placeholder="optional@example.ca"></label>
          <label>${d("compose.subject")}<input data-compose-field="subject" value="${l(t.subject)}"></label>
          <label>${d("compose.body")}<textarea data-compose-field="body">${l(t.body)}</textarea></label>
          <label>${d("compose.attachments")}
            <input data-compose-attachments type="file" multiple>
          </label>
          <div class="preview">${d("compose.attachmentNote")}</div>
        </div>
        <div class="drawer-section">
          <h3>${d("compose.attachmentMetadata")}</h3>
          ${e}
        </div>
        <div class="actions">
          <button class="btn primary" data-save-compose ${h("save-compose")?"disabled":""}>${h("save-compose")?d("compose.saving"):d("compose.saveDraft")}</button>
          <button class="btn subtle" data-print-compose>${d("compose.printPdf")}</button>
          <span class="mode">${d("compose.neverSends")}</span>
        </div>
      </div>
      <div class="panel">
        <div class="panel-title"><h2>${d("compose.savedDrafts")}</h2><span>${d("compose.localOnly")}</span></div>
        ${a}
      </div>
    </div>
  `}function Oo(){const t=document.querySelector("#drawerRoot");if(s.colleagueFollowUp){Oa(t,s.colleagueFollowUp,s.employees,d);return}if(s.taskEditor){hs(t,s.taskEditor,s.employees,$e(),d);return}if(s.selectedCategory){Wo(t);return}if(s.selectedEmployee){zo(t);return}if(s.selectedRule){_o(t);return}if(s.selectedDraft){Bo(t);return}if(s.selectedTask){Vo(t);return}if(!s.selectedEmail){t.innerHTML="";return}const e=s.selectedEmail,a=e.status==="Done",o=s.employees.find(n=>n.id===e.assignedTo),i=$a(e.category);t.innerHTML=`
    <div class="drawer-backdrop" data-close-drawer></div>
    <aside class="review-drawer" aria-label="Email review">
      <div class="drawer-header">
        <div>
          <div class="badge ${Ge(e.category)}" data-category-label="${l(e.category)}">${l(e.category)}</div>
          <h2>${l(e.subject)}</h2>
          <p>${l(e.sender)} - ${l(e.senderEmail)}</p>
        </div>
        <button class="btn subtle" data-close-drawer>Close</button>
      </div>

      <div class="drawer-section">
        <h3>Email body</h3>
        <div class="preview">${l(e.body)}</div>
      </div>

      <div class="drawer-grid">
        <label>Category
          <select data-email-category="${e.id}">
            ${i.map(n=>`<option value="${l(n.name)}" ${n.name===e.category?"selected":""}>${l(n.name)}${n.active?"":" (archived)"}</option>`).join("")}
          </select>
        </label>
        ${$e()?`<label>Assigned employee
              <select data-email-assignee="${e.id}">
                <option value="" ${e.assignedTo?"":"selected"}>Unassigned</option>
                ${s.employees.map(n=>`<option value="${l(n.id)}" ${n.id===e.assignedTo?"selected":""}>${l(n.name)} - ${l(n.department)}</option>`).join("")}
              </select>
            </label>`:`<div class="mini-stat"><span>${d("tasks.assignedTo")}</span><strong>${l((o==null?void 0:o.name)||d("tasks.unassigned"))}</strong></div>`}
      </div>

      <div class="drawer-grid">
        <div class="mini-stat"><span>Urgency</span><strong>${l(e.urgency)}</strong></div>
        <div class="mini-stat"><span>Confidence</span><strong>${e.confidence}%</strong></div>
        <div class="mini-stat"><span>Status</span><strong>${l(e.status)}</strong></div>
        <div class="mini-stat"><span>Owner</span><strong>${l((o==null?void 0:o.name)||"Unassigned")}</strong></div>
      </div>

      <div class="drawer-section">
        <h3>Draft workflow</h3>
        <div class="preview">
          ${a?"This email is completed. Draft actions are locked unless the email is reopened later.":e.draftId?`${e.draftReadyForHumanSend?"Draft approved and ready for human send.":`Draft exists: ${l(e.draftStatusLabel)}.`} One email uses one draft record.`:"No active draft exists for this email."}
        </div>
      </div>

      <div class="drawer-section">
        <h3>Suggested action</h3>
        <div class="preview">${l(e.suggestedAction)}</div>
      </div>

      <div class="drawer-section">
        <div class="panel-title compact-title">
          <h3>Why was this flagged?</h3>
          <button class="btn subtle" data-toggle-explanation>${s.showExplanation?"Less context":"More context"}</button>
        </div>
        <div class="preview">${l(e.explanation)}</div>
        ${s.showExplanation?'<div class="preview explanation-detail">This recommendation is based only on wording and patterns in the local demo message. A person must review it before acting.</div>':""}
      </div>

      <div class="drawer-section">
        <h3>Thread</h3>
        <ul>${e.messages.map(n=>`<li>${l(n)}</li>`).join("")}</ul>
      </div>

      ${s.summary?`<div class="drawer-section"><h3>Summary</h3><div class="preview">${l(s.summary)}</div></div>`:""}
      <div class="drawer-actions">
        <button class="btn primary" data-summary-email="${e.id}" ${h(`summary-${e.id}`)?"disabled":""}>${h(`summary-${e.id}`)?"Summarizing...":"Summarize"}</button>
        <button class="btn subtle" data-email-task="${e.id}">${d("taskWork.emailTask")}</button>
        ${e.canOpenDraft?`<button class="btn subtle" data-open-email-draft="${e.id}" ${h(`open-email-draft-${e.id}`)?"disabled":""}>${e.draftActionLabel}</button>`:`<button class="btn subtle" data-generate-draft="${e.id}" ${!e.canGenerateDraft||h(`draft-${e.id}`)?`disabled title="${e.completionBlocker||"Draft action is unavailable."}"`:""}>${h(`draft-${e.id}`)?"Drafting...":e.draftActionLabel}</button>`}
        <button class="btn subtle" data-archive-email="${e.id}" ${!e.canArchive||h(`archive-${e.id}`)?`disabled title="${l(e.archiveBlocker||"Remove this fake/local email from the demo inbox.")}"`:""}>${h(`archive-${e.id}`)?d("triage.removing"):d("triage.remove")}</button>
        ${a?'<span class="status-text">Workflow complete</span>':'<span class="status-text">Approving the draft completes this workflow.</span>'}
      </div>
      <section class="workspace-rule-suggestions"><h3>${d("employee.automation")}</h3><p>${d("employee.automationNote")}</p>
        ${(e.automationSuggestions||[]).map(n=>`<div><strong>${l(n.title)}</strong><p>${l(n.explanation)}</p>${n.category!==e.category&&!a?`<button class="btn subtle" data-apply-workspace-rule="${l(n.id)}" data-rule-email="${l(e.id)}">${d("employee.applyCategory")}: ${l(n.category)}</button>`:""}</div>`).join("")||`<p>${d("employee.noRules")}</p>`}
      </section>
      <p class="drawer-note">This is a local prototype. Courio does not send email.</p>
    </aside>
  `}function jo(){const t=document.querySelector("#modalRoot");if(!s.confirmDialog){t.innerHTML="";return}const e=s.confirmDialog;t.innerHTML=`
    <div class="modal-backdrop"></div>
    <div class="confirm-modal" role="dialog" aria-modal="true">
      <h2>${l(e.title)}</h2>
      <p>${l(e.message)}</p>
      <div class="actions">
        <button class="btn ${e.tone==="danger"?"danger":"primary"}" data-confirm-primary>${l(e.primaryLabel)}</button>
        <button class="btn subtle" data-confirm-cancel>${d("taskWork.cancel")}</button>
      </div>
    </div>
  `}function Uo(){const t=document.querySelector("#authRoot");if(!s.session){t.innerHTML=`
      <div class="auth-overlay">
        <div class="auth-panel">
          <div>
            <div class="badge lead">${d("auth.demoOnly")}</div>
            <h1>${d("auth.title")}</h1>
            <p>${d("auth.subtitle")}</p>
          </div>
          <div class="auth-grid">
            ${s.demoAccounts.map(e=>`
              <button class="auth-card" data-login-account="${e.id}">
                <strong>${l(e.name)}</strong>
                <span>${l(e.role)} - ${l(e.title)}</span>
                <small>${l(e.email)}</small>
              </button>
            `).join("")}
          </div>
          <div class="preview">${d("auth.safetyNote")}</div>
        </div>
      </div>
    `;return}t.innerHTML=`
    <div class="session-pill">
      <span>${l(s.session.name)} · ${l(s.session.role)}</span>
      <button class="btn subtle" data-logout-demo>${d("auth.logout")}</button>
    </div>
  `}async function Po(t){const e=await oo(t);s.drafts=await me(),await Ue(t),s.selectedDraft=await Se(e.id),s.selectedEmail=null,s.selectedRule=null,s.selectedEmployee=null,s.selectedCategory=null}async function Ho(t){var e;await no(t),s.drafts=await me(),s.emails=await Y(),s.activity=await O(),s.digest=await ae(),s.selectedDraftIds=s.selectedDraftIds.filter(a=>a!==t),((e=s.selectedDraft)==null?void 0:e.id)===t&&(s.selectedDraft=await Se(t))}function Bo(t){const e=s.selectedDraft,a=e.sourceEmail||{},o=a.status==="Done";t.innerHTML=`
    <div class="drawer-backdrop" data-close-drawer></div>
    <aside class="review-drawer" aria-label="Draft review">
      <div class="drawer-header">
        <div>
          <div class="badge ${e.isReadyForHumanSend?"done":"pending"}">${l(e.statusLabel)}</div>
          <h2>${l(e.title)}</h2>
          <p>Source: ${l(a.subject||e.source)}</p>
        </div>
        <button class="btn subtle" data-close-drawer>Close</button>
      </div>

      <div class="drawer-section">
        <h3>Source email</h3>
        <div class="preview">
          <strong>${l(a.sender||"Mock sender")}</strong><br>
          ${l(a.senderEmail||"")}<br><br>
          ${l(a.body||"This draft is based on a local mock email.")}
        </div>
      </div>

      <div class="drawer-grid">
        <div class="mini-stat"><span>Status</span><strong>${l(o?"Completed":e.statusLabel)}</strong></div>
        <div class="mini-stat"><span>Risk level</span><strong>${l(e.risk||"Low")}</strong></div>
        <div class="mini-stat"><span>Confidence</span><strong>${e.confidence||a.confidence||80}%</strong></div>
        <div class="mini-stat"><span>Sending</span><strong>Never automatic</strong></div>
      </div>

      <div class="drawer-section">
        <h3>Suggested reply</h3>
        <div class="preview">${l(a.suggestedAction||e.title)}</div>
      </div>

      <div class="drawer-section">
        <label>Editable draft body
          <textarea data-draft-editor>${l(e.text)}</textarea>
        </label>
      </div>

      <div class="drawer-actions">
        ${o?'<span class="status-text">Workflow complete. This draft is ready for human send.</span>':`
            <button class="btn primary" data-save-draft="${e.id}" ${h(`save-${e.id}`)?"disabled":""}>${h(`save-${e.id}`)?"Saving...":"Save changes"}</button>
            <button class="btn success" data-approve-draft="${e.id}" ${!e.canApprove||h(`approve-${e.id}`)?`disabled title="${e.approvalBlocker||"Save the reviewed draft before approving."}"`:""}>${h(`approve-${e.id}`)?"Approving...":"Approve and complete"}</button>
          `}
        <button class="btn subtle" data-close-drawer>Close</button>
      </div>
      <p class="drawer-note">Approval completes this workflow and marks the draft ready for a person to send. Courio never sends email.</p>
    </aside>
  `}function _o(t){var o;const e=s.selectedRule,a=$a(e.category);t.innerHTML=`
    <div class="drawer-backdrop" data-close-drawer></div>
    <aside class="review-drawer" aria-label="Rule editor">
      <div class="drawer-header">
        <div>
          <div class="badge ${e.on?"done":"pending"}">${e.on?"Enabled":"Disabled"}</div>
          <h2>Edit rule</h2>
          <p>Rules remain fake and local in this prototype.</p>
        </div>
        <button class="btn subtle" data-close-drawer>Close</button>
      </div>

      <div class="drawer-section">
        <label>Rule name<input data-rule-field="title" value="${l(e.title)}"></label>
        <label>Description<textarea data-rule-field="desc">${l(e.desc)}</textarea></label>
        <label>Category
          <select data-rule-field="category">
            ${a.map(i=>`<option value="${l(i.name)}" ${i.name===e.category?"selected":""}>${l(i.name)}${i.active?"":" (archived)"}</option>`).join("")}
          </select>
        </label>
      </div>

      <div class="drawer-grid">
        <div class="mini-stat"><span>Confidence</span><strong>${e.confidence||80}%</strong></div>
        <div class="mini-stat"><span>Would match</span><strong>${((o=e.matches)==null?void 0:o.length)||0} samples</strong></div>
      </div>

      <div class="drawer-section">
        <h3>Why Courio suggested it</h3>
        <div class="preview">${l(e.explanation||"This rule is based on repeated wording patterns in the mock inbox.")}</div>
      </div>

      <div class="drawer-section">
        <h3>Match preview</h3>
        <ul>${(e.matches||["No sample matches yet."]).map(i=>`<li>${l(i)}</li>`).join("")}</ul>
      </div>

      ${vt()?`<div class="drawer-section"><h3>Advanced preview</h3><div class="preview">This rule uses the current confidence threshold of ${s.settings.confidenceThreshold||80}%. No mailbox changes happen in the prototype.</div></div>`:""}

      <div class="drawer-actions">
        <button class="btn primary" data-save-rule="${e.id}" ${h(`save-rule-${e.id}`)?"disabled":""}>${h(`save-rule-${e.id}`)?"Saving...":"Save rule"}</button>
        <button class="btn danger" data-delete-rule="${e.id}">Delete rule</button>
        <button class="btn subtle" data-close-drawer>Close</button>
      </div>
    </aside>
  `}function Wo(t){const e=s.selectedCategory,a=e.id==="new",o=[["default","Default"],["urgent","Red / urgent"],["invoice","Green"],["lead","Blue"],["pending","Amber"]];t.innerHTML=`
    <div class="drawer-backdrop" data-close-drawer></div>
    <aside class="review-drawer" aria-label="${a?"Add category":"Edit category"}">
      <div class="drawer-header">
        <div>
          <div class="badge ${Ge(e.name)}">${e.active===!1?"Archived":"Active"}</div>
          <h2>${a?"Add category":"Edit category"}</h2>
          <p>Categories remain fake/local and map to email category names for now.</p>
        </div>
        <button class="btn subtle" data-close-drawer>Close</button>
      </div>

      <div class="drawer-section">
        <label>Category name<input data-category-field="name" value="${l(e.name||"")}"></label>
        <label>Description<textarea data-category-field="description">${l(e.description||"")}</textarea></label>
        <label>Badge color
          <select data-category-field="color">
            ${o.map(([i,n])=>`<option value="${i}" ${i===(e.color||"default")?"selected":""}>${n}</option>`).join("")}
          </select>
        </label>
      </div>

      <div class="drawer-actions">
        <button class="btn primary" data-save-category="${e.id}" ${h(`save-category-${e.id}`)?"disabled":""}>${h(`save-category-${e.id}`)?"Saving...":a?"Add category":"Save changes"}</button>
        ${a?"":`<button class="btn subtle" data-toggle-category="${e.id}" ${h(`toggle-category-${e.id}`)?"disabled":""}>${e.active===!1?"Restore category":"Archive category"}</button>`}
        <button class="btn subtle" data-close-drawer>Close</button>
      </div>
      <p class="drawer-note">Archiving removes a category from new dropdown choices, but old emails and rules still display safely.</p>
    </aside>
  `}function zo(t){const e=s.selectedEmployee,a=e.id==="new";t.innerHTML=`
    <div class="drawer-backdrop" data-close-drawer></div>
    <aside class="review-drawer" aria-label="${a?"Add employee":"Edit employee"}">
      <div class="drawer-header">
        <div>
          <div class="badge lead">Team member</div>
          <h2>${a?"Add employee":"Edit employee"}</h2>
          <p>${a?"Add a local demo team member.":`Reviewing ${l(e.name)}`}</p>
        </div>
        <button class="btn subtle" data-close-drawer>Close</button>
      </div>

      <div class="drawer-section">
        <label>Name<input data-employee-field="name" value="${l(e.name||"")}"></label>
        <label>Email<input data-employee-field="email" type="email" value="${l(e.email||"")}"></label>
        <label>Role / title<input data-employee-field="title" value="${l(e.title||"")}"></label>
        <label>Department<input data-employee-field="department" value="${l(e.department||"")}"></label>
      </div>

      <div class="drawer-actions">
        <button class="btn primary" data-save-employee="${e.id}" ${h(`save-employee-${e.id}`)?"disabled":""}>${h(`save-employee-${e.id}`)?"Saving...":a?"Add employee":"Save changes"}</button>
        ${a?"":`<button class="btn danger" data-delete-employee="${e.id}">Remove employee</button>`}
        <button class="btn subtle" data-close-drawer>Close</button>
      </div>
      <p class="drawer-note">Employee records remain fake and local to this browser. Email addresses must be valid and unique.</p>
    </aside>
  `}function Ca(t){return Object.entries(t).map(([e,a])=>{var i;const o=e==="assignedTo"?((i=s.employees.find(n=>n.id===a))==null?void 0:i.name)||a||d("tasks.unassigned"):e==="collaboratorIds"?(a||[]).map(n=>{var r;return((r=s.employees.find(c=>c.id===n))==null?void 0:r.name)||n}).join(", ")||d("taskWork.none"):["priority","status"].includes(e)?d(`taskWork.${a}`):a||d("taskWork.none");return`${d(`taskWork.${e}`)}: ${o}`}).join("; ")}function Vo(t){var i,n,r;const e=s.selectedTask,a=Array.isArray(e.history)?e.history:[],o=(i=e.followUp)!=null&&i.enabled?e.followUp.overdue?`${d("tasks.overdue")} - ${st(e.followUp.dueAt)}`:`${d("tasks.scheduled")} ${st(e.followUp.dueAt)}`:d("tasks.noReminder");t.innerHTML=`
    <div class="drawer-backdrop" data-close-drawer></div>
    <aside class="review-drawer" aria-label="${d("tasks.historyTitle")}">
      <div class="drawer-header">
        <div>
          <div class="badge ${e.priority==="High"?"urgent":e.priority==="Low"?"done":"pending"}">${l(e.priority)}</div>
          <h2>${l(e.title)}</h2>
          <p>${l(((n=e.sourceEmail)==null?void 0:n.subject)||d("tasks.localTask"))}</p>
        </div>
        <button class="btn subtle" data-close-drawer>Close</button>
      </div>

      <div class="drawer-grid">
        <div class="mini-stat"><span>${d("tasks.assignedTo")}</span><strong>${l(((r=e.assignedEmployee)==null?void 0:r.name)||d("tasks.unassigned"))}</strong></div>
        <div class="mini-stat"><span>${d("tasks.followUp")}</span><strong>${l(o)}</strong></div>
      </div>

      <div class="drawer-section">
        <h3>${d("tasks.historyTitle")}</h3>
        ${a.length?`<ol class="task-history-list">${a.map(c=>`
              <li>
                <strong>${l(c.action?d(`taskWork.${c.action}`):c.label||d("tasks.historyFallback"))}</strong>
                ${c.at?`<time>${l(Sa(c.at))}</time>`:""}
                ${c.before?`<p>${l(Ca(c.before))}</p>`:""}
                ${c.canRestore?`<button class="btn subtle" data-restore-task="${e.id}" data-history-id="${l(c.id)}">${d("taskWork.restore")}</button>`:!c.before&&!c.action?`<small>${d("taskWork.legacy")}</small>`:""}
              </li>
            `).join("")}</ol>`:`<div class="empty-state">${d("tasks.noHistory")}</div>`}
      </div>

      <div class="drawer-section">
        <h3>${d("tasks.notes")}</h3>
        <div class="preview">${l(e.notes||d("tasks.noNotes"))}</div>
      </div>

      <div class="drawer-actions">
        ${e.sourceEmail?`<button class="btn subtle" data-review-email="${e.sourceEmail.id}">${d("tasks.reviewEmail")}</button>`:""}
        <button class="btn subtle" data-close-drawer>Close</button>
      </div>
      <p class="drawer-note">${d("tasks.historyNote")}</p>
    </aside>
  `}function Ta(){const t=s.ruleQuery.trim().toLowerCase(),e=s.rules.filter(o=>!t||`${o.title} ${o.desc} ${o.category}`.toLowerCase().includes(t)),a=s.loading.rules?'<div class="loading">Loading suggested rules...</div>':e.length===0?`<div class="empty-state">${t?`No rules match “${l(s.ruleQuery)}”. Clear the search to see all local rules.`:"No rules yet. Local rule suggestions will appear here."}</div>`:`<div class="grid cols-2">
        ${e.map(o=>`
          <div class="rule-card">
            <div class="rule-top">
              <div>
                <div class="rule-title">${l(o.title)}</div>
                <div class="rule-desc">${l(o.desc)}</div>
              </div>
              <button class="toggle ${o.on?"on":""}" aria-label="Toggle ${l(o.title)}" data-toggle-rule="${o.id}" ${h(`rule-${o.id}`)?"disabled":""}></button>
            </div>
            <div class="preview"><strong>Local sample preview:</strong> ${l(o.impact)}</div>
            <div class="preview"><strong>${o.confidence||80}% confidence:</strong> ${l(o.explanation||"Based on local mock patterns.")}</div>
            ${vt()?`<div class="preview"><strong>Would match:</strong> ${Q(o.matches||["No samples"])}</div>`:""}
            <div class="actions">
              ${o.on?'<span class="status-text">In observation</span>':`<button class="btn primary" data-approve-rule="${o.id}" ${h(`approve-rule-${o.id}`)?"disabled":""}>${h(`approve-rule-${o.id}`)?"Approving...":"Approve for observation"}</button>`}
              <button class="btn subtle" data-edit-rule="${o.id}" ${h(`edit-rule-${o.id}`)?"disabled":""}>${h(`edit-rule-${o.id}`)?"Opening...":"Edit"}</button>
            </div>
          </div>
        `).join("")}
      </div>`;document.querySelector("#rules").innerHTML=`
    <div class="section-toolbar">
      <div><h2>Suggested rules</h2><span>${e.length} shown</span></div>
      <div class="list-toolbar">
        <input data-rule-search type="search" value="${l(s.ruleQuery)}" placeholder="Search rules">
      </div>
    </div>
    ${a}
  `}function Go(){var n;const t=s.selectedDraftIds.length,e=s.drafts.filter(r=>r.risk!=="High"&&r.canSelectForBulkApproval).length,a=!Aa(),o=s.drafts.filter(r=>s.draftFilter==="needs_approval"?r.awaitingApproval:s.draftFilter==="ready"?r.isReadyForHumanSend:!0),i=s.loading.drafts?'<div class="loading">Loading draft queue...</div>':o.length===0?`<div class="empty-state">${s.draftFilter==="needs_approval"?"No drafts need approval. Reviewed drafts will appear here when they are ready.":s.draftFilter==="ready"?"No drafts are ready for human send yet.":"No drafts are available in this local demo."}</div>`:`<table class="table">
        <thead><tr><th>Select</th><th>Draft</th><th>Source</th><th>Risk</th><th>Status</th><th></th></tr></thead>
        <tbody>
          ${o.map(r=>`
            <tr>
              <td><input type="checkbox" data-select-draft="${r.id}" ${s.selectedDraftIds.includes(r.id)?"checked":""} ${r.canSelectForBulkApproval?"":`disabled title="${r.approvalBlocker||"Review and save this draft first."}"`}></td>
              <td>${l(r.title)}</td>
              <td>${l(r.source)}</td>
              <td><span class="badge ${r.risk==="High"?"urgent":"done"}">${l(r.risk||"Low")}</span></td>
              <td><span class="badge ${r.isReadyForHumanSend?"done":"pending"}">${l(r.statusLabel)}</span></td>
              <td class="actions">
                <button class="btn subtle" data-review-draft="${r.id}" ${h(`review-draft-${r.id}`)?"disabled":""}>${h(`review-draft-${r.id}`)?"Opening...":"Review"}</button>
                ${r.isReadyForHumanSend?'<span class="status-text">Workflow complete</span>':`<button class="btn success" data-approve-draft="${r.id}" ${!r.canApprove||h(`approve-${r.id}`)?`disabled title="${r.approvalBlocker||"Review and save this draft first."}"`:""}>${h(`approve-${r.id}`)?"Approving...":"Approve and complete"}</button>`}
              </td>
            </tr>
          `).join("")}
        </tbody>
      </table>`;document.querySelector("#drafts").innerHTML=`
    <div class="panel">
      <div class="panel-title"><h2>Draft approval queue</h2><span>Human approval required</span></div>
      <div class="segmented below-sm">
        ${[["all","All drafts"],["needs_approval","Needs approval"],["ready","Ready"]].map(([r,c])=>`<button class="${s.draftFilter===r?"active":""}" data-draft-filter="${r}">${c}</button>`).join("")}
      </div>
      <div class="actions below-sm">
        <button class="btn success" data-approve-selected ${t===0||h("approve-selected")?`disabled title="${t===0?"Select at least one reviewed and saved draft.":""}"`:""}>${h("approve-selected")?"Approving...":`Approve selected (${t})`}</button>
        <button class="btn subtle" data-approve-low-risk ${a||e===0||h("approve-low-risk")?`disabled title="${a?"Enable low-risk bulk approval in Advanced workspace settings.":e===0?"No reviewed low-risk drafts are ready for approval.":""}"`:""}>${a?"Low-risk bulk approval disabled":h("approve-low-risk")?"Approving...":`Approve all low-risk (${e})`}</button>
        <span class="mode">Approval completes the workflow; nothing is sent</span>
      </div>
      ${a?'<div class="preview below-sm">Low-risk bulk approval is disabled by workspace settings.</div>':""}
      ${i}
    </div>
    ${De()?`<p>${d("employee.approvalNote")}</p><section class="composed-draft-links"><h2>${d("employee.composed")}</h2>${s.composeDrafts.map(r=>`<button class="btn subtle" data-open-compose-draft="${l(r.id)}">${l(r.subject||d("compose.openDraft"))}</button>`).join("")}</section>`:""}
  `,De()&&((n=document.querySelector("#drafts [data-approve-selected]"))==null||n.parentElement.remove())}function Yo(){const t=document.querySelector("#assistantRoot");t.innerHTML=bs({assistantOpen:s.assistantOpen,assistantMessages:s.assistantMessages,assistantBusy:h("assistant")})}async function Ra(t){await b("assistant",async()=>{var a;const e=await Ao(t,{selectedEmailId:((a=s.selectedEmail)==null?void 0:a.id)||null});s.assistantMessages=e.messages,await Qo(e.action)})}async function Qo(t){if(t){if(t.type==="show_triage"){J("triage",{triageFilter:t.filter||"all"});return}if(t.type==="show_drafts"){J("drafts",{draftFilter:t.filter||"all"});return}if(t.type==="generate_digest"){s.digest=await ae(),J("dashboard");return}if(t.type==="explain_email"){s.selectedEmail=await va(t.emailId),s.selectedDraft=null,s.selectedRule=null,s.selectedEmployee=null,s.selectedCategory=null,s.summary="",s.showExplanation=!0,J("triage",{triageFilter:"all",closeDrawers:!1});return}if(t.type==="show_rule"){s.rules=await ne(),s.selectedRule=s.rules.find(e=>e.id===t.ruleId)||null,s.selectedEmail=null,s.selectedDraft=null,s.selectedEmployee=null,s.selectedCategory=null,J("rules",{closeDrawers:!1});return}t.type==="reset_demo_data"&&(s.confirmDialog={type:"reset-demo",title:"Reset demo data?",message:"This clears all local Courio changes and restores the original fake demo data.",primaryLabel:"Reset demo data",tone:"danger"},S())}}function Jo(){const t=ze();document.querySelector("#admin").innerHTML=`
    <div class="grid cols-2">
      <div class="panel">
        <div class="panel-title"><h2>${d("admin.workspaceSettings")}</h2><span>${d("admin.prototype")}</span></div>
        <div class="form-grid">
          <label>${d("admin.companyName")}<input data-setting="companyName" value="${l(t.companyName||"Demo PME Inc.")}"></label>
          <label>${d("admin.language")}
            <select data-setting="language">
              ${[["en","English"],["fr","Français"]].map(([e,a])=>`<option value="${e}" ${e===Pe(t.language)?"selected":""}>${a}</option>`).join("")}
            </select>
          </label>
          <label>${d("admin.mode")}
            <select data-setting="mode">
              ${["Simple","Advanced"].map(e=>`<option ${e===t.mode?"selected":""}>${e}</option>`).join("")}
            </select>
          </label>
          <label>${d("admin.escalationRecipient")}<input data-setting="escalationRecipient" value="${l(t.escalationRecipient||"owner@company.ca")}"></label>
          ${Io()?`
          <label>Default mode
            <select data-setting="defaultMode">
              ${["Observation only","Drafts allowed, no auto-send","Auto-categorize after approval"].map(e=>`<option ${e===t.defaultMode?"selected":""}>${e}</option>`).join("")}
            </select>
          </label>
          <label>Confidence threshold<input data-setting="confidenceThreshold" value="${l(t.confidenceThreshold||"80")}"></label>
          <label>Observation days<input data-setting="observationDays" value="${l(t.observationDays||"7")}"></label>
          <label>Low-risk bulk approval
            <select data-setting="allowLowRiskBulkApproval">
              ${["Yes","No"].map(e=>`<option ${e===t.allowLowRiskBulkApproval?"selected":""}>${e}</option>`).join("")}
            </select>
          </label>
          `:'<div class="preview">Simple Mode keeps settings focused: company name, escalation recipient, and no automatic sending.</div>'}
          <div class="preview">${d("admin.languageNote")}</div>
          <button class="btn primary" data-save-settings ${h("settings")?"disabled":""}>${h("settings")?d("admin.saving"):d("admin.saveSettings")}</button>
          <button class="btn danger" data-reset-demo ${h("reset-demo")?"disabled":""}>${h("reset-demo")?d("admin.resetting"):d("admin.resetDemoData")}</button>
        </div>
      </div>
      <div class="panel">
        <div class="panel-title"><h2>${d("admin.safetyPreview")}</h2><span>${d("admin.prototypeBehavior")}</span></div>
        <table class="table">
          <tr><td>No automatic sending</td><td>Enforced in this local demo</td></tr>
          <tr><td>Activity history</td><td>Simulated actions stored in this browser</td></tr>
          <tr><td>Account disconnect</td><td>Planned for a future provider integration</td></tr>
          <tr><td>Mailbox permissions</td><td>Not requested or connected in this prototype</td></tr>
          <tr><td>Saved workspace mode</td><td>${l(s.settings.mode||"Simple")}</td></tr>
          <tr><td>${d("admin.savedLanguage")}</td><td>${Ve()==="fr"?"Français":"English"}</td></tr>
        </table>
      </div>
      <div class="panel">
        <div class="panel-title">
          <div><h2>Employee directory</h2><span>Mock team</span></div>
          <button class="btn primary" data-add-employee>Add employee</button>
        </div>
        ${s.employees.length===0?'<div class="empty-state">No employees yet. Add a team member to make triage assignments available.</div>':`<table class="table">
              <thead><tr><th>Name</th><th>Role</th><th>Department</th><th></th></tr></thead>
              <tbody>
                ${s.employees.map(e=>`
                  <tr>
                    <td>${l(e.name)}<br><small>${l(e.email)}</small></td>
                    <td>${l(e.title)}</td>
                    <td>${l(e.department)}</td>
                    <td><button class="btn subtle" data-edit-employee="${e.id}">Edit</button></td>
                  </tr>
                `).join("")}
              </tbody>
            </table>`}
      </div>
      <div class="panel">
        <div class="panel-title">
          <div><h2>Categories</h2><span>Local labels</span></div>
          <button class="btn primary" data-add-category>Add category</button>
        </div>
        ${s.categories.length===0?'<div class="empty-state">No categories yet. Add one to make triage choices available.</div>':`<table class="table">
              <thead><tr><th>Name</th><th>Description</th><th>Status</th><th></th></tr></thead>
              <tbody>
                ${s.categories.map(e=>`
                  <tr>
                    <td><span class="badge ${Ge(e.name)}" data-category-label="${l(e.name)}">${l(e.name)}</span>${e.system?"<br><small>System default</small>":""}</td>
                    <td>${l(e.description||"No description yet.")}</td>
                    <td>${e.active?"Active":"Archived"}</td>
                    <td><button class="btn subtle" data-edit-category="${e.id}">Edit</button></td>
                  </tr>
                `).join("")}
              </tbody>
            </table>`}
        <div class="preview stack-sm">Archiving hides a category from new dropdown choices. Existing emails and rules keep displaying safely.</div>
      </div>
      <div class="panel">
        <div class="panel-title"><h2>Recent activity</h2><span>Local audit preview</span></div>
        ${s.activity.length===0?'<div class="empty-state">No activity yet. Completed workflows and team changes will appear here.</div>':`<div class="activity-list">
              ${s.activity.slice(0,8).map(e=>`
                <div class="activity-item">
                  <span>${l(e.label||"Local action completed")}</span>
                  <time>${new Date(e.completedAt).toLocaleString()}</time>
                </div>
              `).join("")}
            </div>`}
      </div>
    </div>
  `}function Ge(t){const e=s.categories.find(a=>a.name===t);return e!=null&&e.color&&e.color!=="default"?e.color:t==="Urgent"||t==="Client complaint"?"urgent":t==="Accounting"||t==="Documents"||t==="Missing documents"?"invoice":t==="Sales"?"lead":""}document.addEventListener("click",async t=>{var a;const e=t.target.closest("button");if(e){if(e.dataset.discardPreferences!==void 0){s.preferencesForm=structuredClone(s.preferences),S();return}if(e.dataset.removeBackground!==void 0){s.preferencesForm.backgroundImage=null,S();return}if(e.dataset.resetPreferences!==void 0){await b("preferences",async()=>{s.preferences=await eo(),s.preferencesForm=structuredClone(s.preferences)},d("preferences.resetDone"));return}if(e.dataset.closeDrawer!==void 0&&(s.taskEditor=null,s.colleagueFollowUp=null),e.dataset.requestTaskFollowUp){s.colleagueFollowUp=s.tasks.find(o=>o.id===e.dataset.requestTaskFollowUp),S();return}if(e.dataset.composeColleague){const o=s.employees.find(i=>i.id===e.dataset.composeColleague);if(!o)return;if(s.composeForm.to||s.composeForm.subject||s.composeForm.body||s.composeForm.attachments.length){ge(d("employee.finishCompose"),!0);return}s.composeForm={...Ce(),to:o.email},J("compose");return}if(e.dataset.applyWorkspaceRule){await b("apply-rule",async()=>{await Ps(e.dataset.ruleEmail,e.dataset.applyWorkspaceRule),await Ue(),s.tasks=await j()},d("employee.applied"));return}if(e.dataset.addTask!==void 0||e.dataset.editTask){s.taskEditor=e.dataset.editTask?{...s.tasks.find(o=>o.id===e.dataset.editTask)}:{},s.selectedEmail=null,s.selectedTask=null,S();return}if(e.dataset.emailTask){await b("email-task",async()=>{s.taskEditor=await mo(e.dataset.emailTask),s.selectedEmail=null,s.tasks=await j()});return}if(e.dataset.restoreTask){const o=s.tasks.find(n=>n.id===e.dataset.restoreTask),i=o==null?void 0:o.history.find(n=>n.id===e.dataset.historyId);if(!(i!=null&&i.canRestore))return;s.confirmDialog={type:"restore-task",taskId:o.id,historyId:i.id,title:d("taskWork.restoreTitle"),message:`${d("taskWork.restoreMessage")} ${Ca(i.before)}`,primaryLabel:d("taskWork.restore")},S();return}if(e.dataset.assistantToggle!==void 0){s.assistantOpen=!s.assistantOpen,S();return}if(e.dataset.assistantCommand){await Ra(e.dataset.assistantCommand);return}if(e.dataset.confirmCancel!==void 0){s.confirmDialog=null,S();return}if(e.dataset.confirmPrimary!==void 0){const o=s.confirmDialog;if(s.confirmDialog=null,(o==null?void 0:o.type)==="restore-task"){await b("restore-task",async()=>{await go(o.taskId,o.historyId),s.tasks=await j(),s.selectedTask=s.tasks.find(i=>i.id===o.taskId)||null,s.activity=await O()},d("taskWork.restored"));return}if((o==null?void 0:o.type)==="reset-demo"){await b("reset-demo",async()=>{await ao(),window.location.reload()});return}if((o==null?void 0:o.type)==="delete-rule"){await b(`delete-rule-${o.ruleId}`,async()=>{await co(o.ruleId),s.rules=await ne(),s.activity=await O(),s.selectedRule=null},"Rule deleted locally.");return}if((o==null?void 0:o.type)==="delete-employee"){await b(`delete-employee-${o.employeeId}`,async()=>{await ko(o.employeeId),s.employees=await at(),s.emails=await Y(),s.tasks=await j(),s.activity=await O(),s.selectedEmployee=null},"Employee removed and assigned emails returned to Unassigned.");return}if((o==null?void 0:o.type)==="archive-emails"){await b("archive-emails",async()=>{await uo(o.emailIds,o.reason),s.emails=await Y(),s.tasks=await j(),s.digest=await ae(),s.activity=await O(),s.selectedEmail=null},d("triage.removeSuccess"));return}}if(e.dataset.loginAccount){await b("login-demo",async()=>{const o=await Js(e.dataset.loginAccount);await jt(),s.tab="dashboard"},d("auth.loginToast"));return}if(e.dataset.logoutDemo!==void 0){await b("logout-demo",async()=>{await Ks(),await jt()},d("auth.logoutToast"));return}if(e.dataset.tab&&J(e.dataset.tab),e.dataset.tabTarget&&J(e.dataset.tabTarget),e.dataset.newCompose!==void 0){s.composeForm=Ce(),S();return}if(e.dataset.openComposeDraft){const o=s.composeDrafts.find(i=>i.id===e.dataset.openComposeDraft);o&&(s.composeForm={...o,attachments:[...o.attachments]},J("compose",{closeDrawers:!1}));return}if(e.dataset.saveCompose!==void 0){await b("save-compose",async()=>{const o=await Zs(s.composeForm);s.composeForm={...o,attachments:[...o.attachments]},s.composeDrafts=await mt(),s.activity=await O()},d("compose.savedToast"));return}if(e.dataset.printCompose!==void 0){ge(d("compose.printToast")),window.print();return}if(e.dataset.setupMailbox&&(s.selectedSetupMailboxId=e.dataset.setupMailbox,Ea()),e.dataset.triageFilter&&(s.triageFilter=e.dataset.triageFilter,S()),e.dataset.archiveEmail){const o=s.emails.find(i=>i.id===e.dataset.archiveEmail);if(!o)return;s.confirmDialog={type:"archive-emails",emailIds:[o.id],reason:"Removed from demo inbox",title:d("triage.removeConfirmTitle"),message:`${d("triage.removeConfirmMessage")} "${o.subject}"`,primaryLabel:d("triage.remove"),tone:"danger"},S();return}if(e.dataset.archiveFiltered!==void 0){const o=ka().filter(i=>i.canArchive);if(!o.length)return;s.confirmDialog={type:"archive-emails",emailIds:o.map(i=>i.id),reason:"Bulk removed from demo inbox",title:d("triage.removeFilteredConfirmTitle"),message:`${d("triage.removeFilteredConfirmMessage")} ${o.length}`,primaryLabel:d("triage.removeFiltered"),tone:"danger"},S();return}if(e.dataset.draftFilter&&(s.draftFilter=e.dataset.draftFilter,S()),e.dataset.action==="digest"&&await b("digest",async()=>{s.digest=await ae()},"Morning digest regenerated from local demo data."),e.dataset.reviewEmail){const o=e.dataset.reviewEmail;await b(`review-${o}`,async()=>{s.selectedEmail=await va(o),s.emails=await Y(),s.selectedDraft=null,s.selectedRule=null,s.selectedEmployee=null,s.selectedCategory=null,s.selectedTask=null,s.summary="",s.showExplanation=!1},"Message thread opened.")}if(e.dataset.reviewDraft){const o=e.dataset.reviewDraft;await b(`review-draft-${o}`,async()=>{s.selectedDraft=await Se(o),s.selectedEmail=null,s.selectedRule=null,s.selectedEmployee=null,s.selectedCategory=null,s.selectedTask=null,s.summary="",s.showExplanation=!1},"Draft opened for review.")}if(e.dataset.openEmailDraft){const o=e.dataset.openEmailDraft;await b(`open-email-draft-${o}`,async()=>{s.selectedDraft=await Xs(o),s.selectedEmail=null,s.selectedRule=null,s.selectedEmployee=null,s.selectedCategory=null,s.selectedTask=null,s.summary="",s.showExplanation=!1},"Draft opened for editing.")}if(e.dataset.reviewTask){const o=e.dataset.reviewTask;s.selectedTask=s.tasks.find(i=>i.id===o)||null,s.selectedEmail=null,s.selectedDraft=null,s.selectedRule=null,s.selectedEmployee=null,s.selectedCategory=null,S();return}if(e.dataset.saveTaskNote){const o=e.dataset.saveTaskNote,i=((a=document.querySelector(`[data-task-note="${o}"]`))==null?void 0:a.value)||"";await b(`task-note-${o}`,async()=>{await Oe(o,{notes:i}),s.tasks=await j(),s.activity=await O()},d("tasks.noteSaved"));return}if(e.dataset.closeDrawer!==void 0&&(s.selectedEmail=null,s.selectedDraft=null,s.selectedRule=null,s.selectedEmployee=null,s.selectedCategory=null,s.selectedTask=null,s.summary="",s.showExplanation=!1,S()),e.dataset.toggleExplanation!==void 0&&(s.showExplanation=!s.showExplanation,S()),e.dataset.summaryEmail){const o=e.dataset.summaryEmail;await b(`summary-${o}`,async()=>{s.summary=await so(o)},"Thread summary generated.")}if(e.dataset.generateDraft){const o=e.dataset.generateDraft;await b(`draft-${o}`,async()=>{await Po(o)},"Draft opened. Existing edits were preserved.")}if(e.dataset.saveDraft){const o=e.dataset.saveDraft,i=document.querySelector("[data-draft-editor]");await b(`save-${o}`,async()=>{var n;await io(o,i.value),s.drafts=await me(),s.emails=await Y(),((n=s.selectedDraft)==null?void 0:n.id)===o&&(s.selectedDraft=await Se(o))},"Draft saved locally.")}if(e.dataset.toggleRule){const o=e.dataset.toggleRule;await b(`rule-${o}`,async()=>{await Lt(o),s.rules=await ne()},"Rule preview state updated.")}if(e.dataset.approveRule){const o=e.dataset.approveRule;await b(`approve-rule-${o}`,async()=>{s.rules.find(n=>n.id===o).on||await Lt(o),s.rules=await ne()},"Rule approved for observation mode.")}if(e.dataset.editRule){const o=e.dataset.editRule;await b(`edit-rule-${o}`,async()=>{s.selectedRule=s.rules.find(i=>i.id===o),s.selectedEmail=null,s.selectedDraft=null,s.selectedEmployee=null,s.selectedCategory=null,s.selectedTask=null},"Rule opened for local editing.")}if(e.dataset.saveRule){const o=e.dataset.saveRule,i=Object.fromEntries([...document.querySelectorAll("[data-rule-field]")].map(n=>[n.dataset.ruleField,n.value]));await b(`save-rule-${o}`,async()=>{await lo(o,i),s.rules=await ne(),s.selectedRule=s.rules.find(n=>n.id===o)},"Rule saved locally.")}if(e.dataset.deleteRule){const o=e.dataset.deleteRule,i=s.rules.find(n=>n.id===o);s.confirmDialog={type:"delete-rule",ruleId:o,title:"Delete this rule?",message:`Delete “${(i==null?void 0:i.title)||"this rule"}” from the local demo?`,primaryLabel:"Delete rule",tone:"danger"},S()}if(e.dataset.addEmployee!==void 0&&(s.selectedEmployee={id:"new",name:"",email:"",title:"",department:""},s.selectedEmail=null,s.selectedDraft=null,s.selectedRule=null,s.selectedCategory=null,S()),e.dataset.editEmployee&&(s.selectedEmployee=s.employees.find(o=>o.id===e.dataset.editEmployee)||null,s.selectedEmail=null,s.selectedDraft=null,s.selectedRule=null,s.selectedCategory=null,S()),e.dataset.saveEmployee){const o=e.dataset.saveEmployee,i=Object.fromEntries([...document.querySelectorAll("[data-employee-field]")].map(n=>[n.dataset.employeeField,n.value]));await b(`save-employee-${o}`,async()=>{const n=o==="new"?await bo(i):await $o(o,i);s.employees=await at(),s.tasks=await j(),s.activity=await O(),s.selectedEmployee=s.employees.find(r=>r.id===n.id)||null},o==="new"?"Employee added locally.":"Employee changes saved locally.")}if(e.dataset.deleteEmployee){const o=e.dataset.deleteEmployee,i=s.employees.find(r=>r.id===o),n=s.emails.filter(r=>r.assignedTo===o).length;s.confirmDialog={type:"delete-employee",employeeId:o,title:"Remove this employee?",message:`Remove ${(i==null?void 0:i.name)||"this employee"}? ${n} assigned email${n===1?"":"s"} will return to Unassigned.`,primaryLabel:"Remove employee",tone:"danger"},S()}if(e.dataset.addCategory!==void 0&&(s.selectedCategory={id:"new",name:"",description:"",color:"default",active:!0,system:!1},s.selectedEmail=null,s.selectedDraft=null,s.selectedRule=null,s.selectedEmployee=null,S()),e.dataset.editCategory&&(s.selectedCategory=s.categories.find(o=>o.id===e.dataset.editCategory)||null,s.selectedEmail=null,s.selectedDraft=null,s.selectedRule=null,s.selectedEmployee=null,S()),e.dataset.saveCategory){const o=e.dataset.saveCategory,i=Object.fromEntries([...document.querySelectorAll("[data-category-field]")].map(n=>[n.dataset.categoryField,n.value]));await b(`save-category-${o}`,async()=>{const n=o==="new"?await vo(i):await ho(o,i);await Ot(n.id)},o==="new"?"Category added locally.":"Category changes saved locally.")}if(e.dataset.toggleCategory){const o=e.dataset.toggleCategory;await b(`toggle-category-${o}`,async()=>{const i=await yo(o);await Ot(i.id)},"Category visibility updated locally.")}if(e.dataset.approveDraft){const o=e.dataset.approveDraft;await b(`approve-${o}`,async()=>{await Ho(o)},"Draft approved and workflow completed. Nothing was sent.")}if(e.dataset.approveSelected!==void 0&&await b("approve-selected",async()=>{await ha(s.selectedDraftIds),s.drafts=await me(),s.emails=await Y(),s.activity=await O(),s.digest=await ae(),s.selectedDraftIds=[]},"Selected drafts approved and workflows completed. Nothing was sent."),e.dataset.approveLowRisk!==void 0){if(!Aa()){ge("Low-risk bulk approval is disabled by workspace settings.",!0);return}await b("approve-low-risk",async()=>{await ro(),s.drafts=await me(),s.emails=await Y(),s.activity=await O(),s.digest=await ae(),s.selectedDraftIds=[]},"Low-risk drafts approved and workflows completed. Nothing was sent.")}if(e.dataset.saveSettings!==void 0){const o=Object.fromEntries([...document.querySelectorAll("[data-setting]")].map(i=>[i.dataset.setting,i.value]));await b("settings",async()=>{s.settings=await to(o),s.settingsForm={...s.settings}},"Settings saved locally.")}e.dataset.resetDemo!==void 0&&(s.confirmDialog={type:"reset-demo",title:"Reset demo data?",message:"This clears all local Courio changes and restores the original fake demo data.",primaryLabel:"Reset demo data",tone:"danger"},S())}});document.addEventListener("change",async t=>{const e=t.target;if(e.dataset.setting!==void 0){s.settingsForm={...ze(),[e.dataset.setting]:e.value},e.dataset.setting==="mode"&&S();return}if(e.dataset.taskStatus){const a=e.dataset.taskStatus;await b(`task-status-${a}`,async()=>{await Oe(a,{status:e.checked?"Done":"Open"}),s.tasks=await j(),s.activity=await O()},e.checked?d("tasks.completedToast"):d("tasks.reopenedToast"));return}if(e.dataset.taskAssignee){const a=e.dataset.taskAssignee;await b(`task-assignee-${a}`,async()=>{await Oe(a,{assignedTo:e.value}),s.tasks=await j(),s.activity=await O()},d("tasks.assignedToast"));return}if(e.dataset.taskAssigneeFilter!==void 0){s.taskAssigneeFilter=e.value,S();return}if(e.dataset.taskFollowUp!==void 0){const a=e.dataset.taskFollowUp;await b(`task-follow-up-${a}`,async()=>{await Nt(a,{enabled:e.checked}),s.tasks=await j(),s.activity=await O()},e.checked?d("tasks.followUpScheduledToast"):d("tasks.followUpRemovedToast"));return}if(e.dataset.taskFollowUpDate!==void 0){const a=e.dataset.taskFollowUpDate;await b(`task-follow-up-${a}`,async()=>{await Nt(a,{enabled:!0,dueAt:e.value}),s.tasks=await j(),s.activity=await O()},d("tasks.followUpUpdatedToast"));return}if(e.dataset.taskFollowUpFilter!==void 0){s.taskFollowUpFilter=e.value,S();return}if(e.dataset.composeAttachments!==void 0){s.composeForm={...Ce(),...s.composeForm,attachments:[...e.files].map((a,o)=>({id:`local-${Date.now()}-${o}`,name:a.name,type:a.type||"Unknown",size:a.size}))},Da();return}if(e.dataset.triageCategoryFilter!==void 0){s.triageCategoryFilter=e.value,S();return}if(e.dataset.emailCategory){const a=e.dataset.emailCategory;await b(`category-${a}`,async()=>{await ya(a,e.value),await Ue(a),s.tasks=await j()},"Category updated locally.")}if(e.dataset.emailAssignee){const a=e.dataset.emailAssignee;await b(`assign-${a}`,async()=>{await wo(a,e.value),await Ue(a),s.tasks=await j()},"Email assignment updated locally.")}if(e.dataset.selectDraft){const a=e.dataset.selectDraft;s.selectedDraftIds=e.checked?[...new Set([...s.selectedDraftIds,a])]:s.selectedDraftIds.filter(o=>o!==a),S()}});document.addEventListener("input",t=>{const e=t.target;if(e.dataset.setting!==void 0){s.settingsForm={...ze(),[e.dataset.setting]:e.value};return}if(e.dataset.composeField!==void 0){s.composeForm={...Ce(),...s.composeForm,[e.dataset.composeField]:e.value};return}if(e.dataset.ruleSearch===void 0)return;s.ruleQuery=e.value,Ta();const a=document.querySelector("[data-rule-search]");a==null||a.focus(),a==null||a.setSelectionRange(s.ruleQuery.length,s.ruleQuery.length)});document.addEventListener("submit",async t=>{var r;const e=t.target.closest("[data-colleague-follow-up]");if(e){if(t.preventDefault(),h("colleague-follow-up"))return;const c=Object.fromEntries(new FormData(e)),g=e.dataset.colleagueFollowUp;s.colleagueFollowUp={...s.colleagueFollowUp,formValues:c},await b("colleague-follow-up",async()=>{await fo(g,c),s.tasks=await j(),s.colleagueFollowUp=null},d("employee.requested"));return}if(t.target.matches("[data-preferences-form]")){if(t.preventDefault(),h("preferences")||h("preference-image"))return;const c=structuredClone(s.preferencesForm);await b("preferences",async()=>{const g=await ga(c);s.preferences=g,s.preferencesForm=s.tab==="preferences"?structuredClone(g):null,s.preferences.hiddenCategoryIds.some(p=>{var u;return((u=s.categories.find(y=>y.id===p))==null?void 0:u.name)===s.triageCategoryFilter})&&(s.triageCategoryFilter="all")},d("preferences.saved"));return}const a=t.target.closest("[data-task-editor]");if(a){if(t.preventDefault(),h("save-task"))return;const c=Object.fromEntries(new FormData(a));a.querySelector("[data-collaborators-editable]")&&(c.collaboratorIds=new FormData(a).getAll("collaboratorIds"));const g=(r=s.taskEditor)==null?void 0:r.id;s.taskEditor={...s.taskEditor,...c},await b("save-task",async()=>{g?await Oe(g,c):await po(c),s.tasks=await j(),s.activity=await O(),s.taskEditor=null,s.selectedTask=null,s.taskAssigneeFilter="all",s.taskFollowUpFilter="all",J("tasks")},d("taskWork.saved"));return}const o=t.target.closest(".assistant-form");if(!o)return;t.preventDefault();const i=o.querySelector("[data-assistant-input]"),n=i.value.trim();n&&(i.value="",await Ra(n))});S();xo();
