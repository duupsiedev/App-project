(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function a(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(n){if(n.ep)return;n.ep=!0;const i=a(n);fetch(n.href,i)}})();function d(t=""){return String(t).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function J(t=[]){return t.map(e=>d(e)).join(", ")}function Ua(t,e,a){t.innerHTML=`<label class="list-toolbar below-sm">${a("employee.searchTeam")}<input type="search" data-team-search></label>
    <div class="team-directory">${e.map(o=>`<article class="team-row" data-team-row>
      <div><strong>${d(o.name)}</strong><p>${d(o.title)} · ${d(o.department)}</p><span>${d(o.email)}</span></div>
      <button class="btn subtle" data-compose-colleague="${d(o.id)}">${a("employee.write")}</button>
    </article>`).join("")}</div><p class="empty-state" data-team-empty ${e.length?"hidden":""}>${a("employee.emptyTeam")}</p>`,t.querySelector("[data-team-search]").oninput=o=>{const n=o.target.value.trim().toLocaleLowerCase(),i=[...t.querySelectorAll("[data-team-row]")];i.forEach(r=>{r.hidden=!r.textContent.toLocaleLowerCase().includes(n)}),t.querySelector("[data-team-empty]").hidden=i.some(r=>!r.hidden)}}function Pa(t,e,a){const o=document.createElement("section");o.className="employee-today-tasks",o.innerHTML=`<h2>${a("employee.myWork")} (${e.length})</h2>${e.length?e.map(n=>`
    <div class="team-row"><div><strong>${d(n.title)}</strong><p>${a(`employee.${n.status}`)} · ${a(`employee.${n.priority}`)}${n.dueAt?` · ${d(n.dueAt)}`:""}</p>
    <small>${d(n.assignedEmployees.map(i=>i.name).join(", "))}</small></div>
    <button class="btn subtle" data-edit-task="${d(n.id)}">${a("taskWork.edit")}</button></div>`).join(""):`<p class="empty-state">${a("employee.noTasks")}</p>`}`,t.append(o)}function Ha(t,e,a,o){const n=e.formValues||{title:e.title,notes:"",dueAt:"",assignedTo:""};t.innerHTML=`<div class="drawer-backdrop" data-close-drawer></div><aside class="review-drawer" role="dialog" aria-modal="true" aria-label="${o("employee.followUp")}">
    <div class="drawer-header"><h2>${o("employee.followUp")}</h2><button class="btn subtle" data-close-drawer>${o("taskWork.cancel")}</button></div>
    <p>${o("employee.followUpNote")}</p>
    <form data-colleague-follow-up="${d(e.id)}" class="form-grid">
      <label>${o("taskWork.title")}<input name="title" required value="${d(n.title)}"></label>
      <label>${o("employee.recipient")}<select name="assignedTo" required><option value="">${o("tasks.unassigned")}</option>${a.map(i=>`<option value="${d(i.id)}" ${n.assignedTo===i.id?"selected":""}>${d(i.name)}</option>`).join("")}</select></label>
      <label>${o("taskWork.notes")}<textarea name="notes">${d(n.notes)}</textarea></label>
      <label>${o("taskWork.dueAt")}<input name="dueAt" type="date" value="${d(n.dueAt)}"></label>
      <button class="btn primary" type="submit">${o("employee.submit")}</button>
    </form></aside>`}/**
 * @license lucide v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _a={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ht=([t,e,a])=>{const o=document.createElementNS("http://www.w3.org/2000/svg",t);return Object.keys(e).forEach(n=>{o.setAttribute(n,String(e[n]))}),a!=null&&a.length&&a.forEach(n=>{const i=Ht(n);o.appendChild(i)}),o},lt=(t,e={})=>{const a="svg",o={..._a,...e};return Ht([a,o,t])};/**
 * @license lucide v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ba=[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"}],["path",{d:"M10 12h4"}]];/**
 * @license lucide v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wa=[["path",{d:"M12 8V4H8"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2"}],["path",{d:"M2 14h2"}],["path",{d:"M20 14h2"}],["path",{d:"M15 13v2"}],["path",{d:"M9 13v2"}]];/**
 * @license lucide v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const za=[["path",{d:"M20 6 9 17l-5-5"}]];/**
 * @license lucide v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const At=[["path",{d:"m9 18 6-6-6-6"}]];/**
 * @license lucide v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Va=[["circle",{cx:"12",cy:"12",r:"10"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16"}]];/**
 * @license lucide v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ga=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m16 9-5.5 5.5L8 12"}]];/**
 * @license lucide v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ya=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}]];/**
 * @license lucide v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qa=[["line",{x1:"2",x2:"22",y1:"2",y2:"22"}],["path",{d:"M10.41 10.41a2 2 0 1 1-2.83-2.83"}],["line",{x1:"13.5",x2:"6",y1:"13.5",y2:"21"}],["line",{x1:"18",x2:"21",y1:"12",y2:"15"}],["path",{d:"M3.59 3.59A1.99 1.99 0 0 0 3 5v14a2 2 0 0 0 2 2h14c.55 0 1.052-.22 1.41-.59"}],["path",{d:"M21 15V5a2 2 0 0 0-2-2H9"}]];/**
 * @license lucide v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _t=[["polyline",{points:"22 12 16 12 14 15 10 15 8 12 2 12"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"}]];/**
 * @license lucide v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ja=[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"}],["path",{d:"M9 18h6"}],["path",{d:"M10 22h4"}]];/**
 * @license lucide v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ka=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"}]];/**
 * @license lucide v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bt=[["path",{d:"M13 5h8"}],["path",{d:"M13 12h8"}],["path",{d:"M13 19h8"}],["path",{d:"m3 17 2 2 4-4"}],["path",{d:"m3 7 2 2 4-4"}]];/**
 * @license lucide v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Za=[["path",{d:"M13 5h8"}],["path",{d:"M13 12h8"}],["path",{d:"M13 19h8"}],["path",{d:"m3 17 2 2 4-4"}],["rect",{x:"3",y:"4",width:"6",height:"6",rx:"1"}]];/**
 * @license lucide v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xa=[["path",{d:"m16 17 5-5-5-5"}],["path",{d:"M21 12H9"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}]];/**
 * @license lucide v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const es=[["path",{d:"M4 5h16"}],["path",{d:"M4 12h16"}],["path",{d:"M4 19h16"}]];/**
 * @license lucide v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ts=[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21"}]];/**
 * @license lucide v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const as=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"}]];/**
 * @license lucide v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ss=[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor"}]];/**
 * @license lucide v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ue=[["path",{d:"M13 21h8"}],["path",{d:"m15 5 4 4"}],["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"}]];/**
 * @license lucide v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wt=[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]];/**
 * @license lucide v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const os=[["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"}],["path",{d:"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6"}],["rect",{x:"6",y:"14",width:"12",height:"8",rx:"1"}]];/**
 * @license lucide v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ns=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}],["path",{d:"M3 3v5h5"}],["path",{d:"M12 7v5l4 2"}]];/**
 * @license lucide v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zt=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7"}]];/**
 * @license lucide v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const is=[["path",{d:"m21 21-4.34-4.34"}],["circle",{cx:"11",cy:"11",r:"8"}]];/**
 * @license lucide v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vt=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"}],["circle",{cx:"12",cy:"12",r:"3"}]];/**
 * @license lucide v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rs=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"m9 12 2 2 4-4"}]];/**
 * @license lucide v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pe=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"}],["path",{d:"M20 2v4"}],["path",{d:"M22 4h-4"}],["circle",{cx:"4",cy:"20",r:"2"}]];/**
 * @license lucide v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ls=[["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M12 2v2"}],["path",{d:"M12 20v2"}],["path",{d:"m4.93 4.93 1.41 1.41"}],["path",{d:"m17.66 17.66 1.41 1.41"}],["path",{d:"M2 12h2"}],["path",{d:"M20 12h2"}],["path",{d:"m6.34 17.66-1.41 1.41"}],["path",{d:"m19.07 4.93-1.41 1.41"}]];/**
 * @license lucide v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ds=[["path",{d:"M16 7h6v6"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17"}]];/**
 * @license lucide v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Et=[["path",{d:"M9 14 4 9l5-5"}],["path",{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11"}]];/**
 * @license lucide v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cs=[["path",{d:"M12 3v12"}],["path",{d:"m17 8-5-5-5 5"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}]];/**
 * @license lucide v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gt=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}],["circle",{cx:"9",cy:"7",r:"4"}]];/**
 * @license lucide v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const us=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];function ce(t,e){t&&t.prepend(lt(e,{width:18,height:18,"aria-hidden":"true"}))}const Dt={urgent:"#cf252c",invoice:"#397e28",lead:"#1254ed",pending:"#9a6700",default:"#687186"};function et(t,e){var a;return((a=e==null?void 0:e.labelColors)==null?void 0:a[t.id])||Dt[t.color]||Dt.default}function Yt(t){const e=t.slice(1).match(/../g).map(i=>parseInt(i,16)/255),[a,o,n]=e.map(i=>i<=.04045?i/12.92:((i+.055)/1.055)**2.4);return .2126*a+.7152*o+.0722*n>.179?"#000000":"#ffffff"}function ps(t,{form:e,categories:a,t:o,busy:n,onChange:i,onImage:r}){if(!e){t.replaceChildren();return}const c=p=>o(`preferences.${p}`);t.innerHTML=`
    <form data-preferences-form class="preferences-form">
      <fieldset class="preferences-section" ${n?"disabled":""}><legend>${o("employee.language")}</legend><select name="language" aria-label="${o("employee.language")}">${["workspace","en","fr"].map(p=>`<option value="${p}" ${e.language===p?"selected":""}>${o(`employee.${p}`)}</option>`).join("")}</select></fieldset>
      <fieldset class="preferences-section" ${n?"disabled":""}>
        <legend>${c("theme")}</legend>
        <div class="theme-options">
          ${["light","dark","system"].map(p=>`<label><input type="radio" name="theme" value="${p}" ${e.theme===p?"checked":""}><span data-theme-icon="${p}">${c(p)}</span></label>`).join("")}
        </div>
      </fieldset>
      <fieldset class="preferences-section" ${n?"disabled":""}>
        <legend>${c("background")}</legend>
        <div class="background-controls">
          <div class="background-preview" role="img" aria-label="${c("preview")}"><span>${c("noImage")}</span></div>
          <div class="form-grid">
            <label class="image-picker"><span data-upload-icon>${c(n?"uploading":"chooseImage")}</span><input type="file" data-preference-image accept="image/png,image/jpeg,image/webp" ${n?"disabled":""}></label>
            <small>${c("imageNote")}</small>
            <label>${c("dim")} <output data-dim-output>${e.backgroundDim}%</output><input type="range" name="backgroundDim" min="50" max="95" step="5" value="${e.backgroundDim}"></label>
            <button class="btn subtle" type="button" data-remove-background ${!e.backgroundImage||n?"disabled":""}>${c("removeImage")}</button>
          </div>
        </div>
      </fieldset>
      <fieldset class="preferences-section" ${n?"disabled":""}>
        <legend>${c("labels")}</legend>
        <p class="subtitle">${c("categoryNote")}</p>
        <div class="preference-categories">
          ${a.length?a.map(p=>`<div class="preference-category">
            <span class="badge" data-color-preview="${d(p.id)}">${d(p.name)}</span>
            <label class="visibility-choice"><input type="checkbox" data-category-visible="${d(p.id)}" ${e.hiddenCategoryIds.includes(p.id)?"":"checked"} ${p.active?"":"disabled"}>${p.active?c("show"):c("archived")}</label>
            <div class="color-controls">
              <label><span class="sr-only">${c("color")}: ${d(p.name)}</span><input type="color" data-label-color="${d(p.id)}" value="${et(p,e)}"></label>
              <button class="btn subtle icon-button" type="button" data-reset-label="${d(p.id)}" title="${c("defaultColor")}" aria-label="${c("defaultColor")}: ${d(p.name)}"></button>
            </div>
          </div>`).join(""):`<p class="empty-state">${c("empty")}</p>`}
        </div>
      </fieldset>
      <div class="actions preferences-actions">
        <button class="btn primary" type="submit" data-save-preferences ${n?"disabled":""}>${c(n?"saving":"save")}</button>
        <button class="btn subtle" type="button" data-discard-preferences ${n?"disabled":""}>${c("cancel")}</button>
        <button class="btn subtle" type="button" data-reset-preferences ${n?"disabled":""}>${c("reset")}</button>
      </div>
    </form>`;for(const[p,u]of[["light",ls],["dark",as],["system",ts]])ce(t.querySelector(`[data-theme-icon="${p}"]`),u);ce(t.querySelector("[data-upload-icon]"),cs),ce(t.querySelector("[data-remove-background]"),Qa),ce(t.querySelector("[data-save-preferences]"),zt),ce(t.querySelector("[data-discard-preferences]"),us),ce(t.querySelector("[data-reset-preferences]"),Et),t.querySelectorAll("[data-reset-label]").forEach(p=>ce(p,Et));const g=()=>{const p=t.querySelector(".background-preview");p.style.backgroundImage=e.backgroundImage?`url("${e.backgroundImage}")`:"none",p.style.setProperty("--image-shading",String(e.backgroundDim/100)),p.querySelector("span").textContent=e.backgroundImage?c("preview"):c("noImage"),t.querySelectorAll("[data-color-preview]").forEach(u=>{const w=a.find(S=>S.id===u.dataset.colorPreview),k=et(w,e);u.style.backgroundColor=k,u.style.color=Yt(k)})};g(),t.oninput=p=>{const u=p.target;if(u.name==="theme")e.theme=u.value;else if(u.name==="language")e.language=u.value;else if(u.name==="backgroundDim")e.backgroundDim=Number(u.value),t.querySelector("[data-dim-output]").textContent=`${e.backgroundDim}%`;else if(u.dataset.labelColor)e.labelColors[u.dataset.labelColor]=u.value;else if(u.dataset.categoryVisible)e.hiddenCategoryIds=e.hiddenCategoryIds.filter(w=>w!==u.dataset.categoryVisible),u.checked||e.hiddenCategoryIds.push(u.dataset.categoryVisible);else return;i(e),g()},t.onchange=p=>{var u;p.target.matches("[data-preference-image]")&&r((u=p.target.files)==null?void 0:u[0])},t.onclick=p=>{const u=p.target.closest("button");if(u!=null&&u.dataset.resetLabel){const w=u.dataset.resetLabel;delete e.labelColors[w];const k=et(a.find(S=>S.id===w),e);t.querySelectorAll("[data-label-color]").forEach(S=>{S.dataset.labelColor===w&&(S.value=k)}),i(e),g()}}}async function ms(t){if(!t||!["image/jpeg","image/png","image/webp"].includes(t.type)||t.size>5*1024*1024)throw new Error("invalidImage");const e=await createImageBitmap(t);try{if(!e.width||!e.height||e.width*e.height>4e7)throw new Error("invalidImage");const a=Math.min(1,1600/Math.max(e.width,e.height)),o=document.createElement("canvas");o.width=Math.max(1,Math.round(e.width*a)),o.height=Math.max(1,Math.round(e.height*a));const n=o.getContext("2d");n.fillStyle="#ffffff",n.fillRect(0,0,o.width,o.height),n.drawImage(e,0,0,o.width,o.height);for(const i of[.82,.65,.45,.3]){const r=o.toDataURL("image/jpeg",i);if(r.length<=7e5)return r}throw new Error("invalidImage")}finally{e.close()}}const Qt=window.matchMedia("(prefers-color-scheme: dark)");function Jt(){const t=document.documentElement;t.dataset.theme=t.dataset.themePreference==="system"?Qt.matches?"dark":"light":t.dataset.themePreference||"light"}Qt.addEventListener("change",Jt);function gs(t,e){const a=document.documentElement;a.dataset.themePreference=(t==null?void 0:t.theme)||"light",Jt(),a.classList.toggle("has-personal-background",!!(t!=null&&t.backgroundImage)),a.style.setProperty("--personal-background",t!=null&&t.backgroundImage?`url("${t.backgroundImage}")`:"none"),a.style.setProperty("--image-shading",String(((t==null?void 0:t.backgroundDim)??80)/100)),document.querySelectorAll("[data-category-label]").forEach(n=>{var c;const i=e.find(g=>g.name===n.dataset.categoryLabel),r=(c=t==null?void 0:t.labelColors)==null?void 0:c[i==null?void 0:i.id];r&&(n.style.backgroundColor=r,n.style.color=Yt(r),n.style.borderColor=r)}),[["[data-add-task],[data-add-employee],[data-add-category],[data-new-compose]",Wt],["[data-edit-task],[data-edit-employee],[data-edit-category],[data-edit-rule]",Ue],["[data-save-task-note],[data-save-settings],[data-save-employee],[data-save-category],[data-save-rule],[data-save-draft],[data-save-compose]",zt],["[data-archive-email],[data-archive-filtered]",Ba],["[data-review-task]",ns],["[data-approve-draft]",za],["[data-print-compose]",os],["[data-logout-demo]",Xa]].forEach(([n,i])=>document.querySelectorAll(n).forEach(r=>{if(r.querySelector("svg"))return;const c=lt(i,{width:18,height:18,"aria-hidden":"true"});c.classList.add("courio-icon"),r.prepend(c)}))}const Oe=new Map,at=new Map,st=new Map;let Ct;const Rt=t=>String(t||"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLocaleLowerCase();let ye="general",Tt;function f(t,e,a){const o=document.createElement(t);return e&&(o.className=e),a!==void 0&&(o.textContent=a),o}function X(t){const e=lt(t,{width:22,height:22,"aria-hidden":"true"});return e.classList.add("courio-icon"),e}function Kt(t="Courio"){return t.trim().split(/\s+/).slice(0,2).map(e=>e[0]||"").join("").toUpperCase()}function ie(t,e,a){const o=f("button","btn",t);return o.type="button",e&&o.prepend(X(e)),a&&o.addEventListener("click",a),o}function fs({state:t,t:e,canAccessTab:a,navigateTo:o}){var S,C,ee,j;const n=document.querySelector(".nav"),i=x=>e(`design.${x}`),r=[["dashboard","today",Ya],["triage","inbox",_t],["tasks","tasks",Za],["drafts","drafts",Ue],["compose","compose",Wt],["rules","automation",Wa],[((S=t.session)==null?void 0:S.role)==="Employee"?"team":"admin","team",Gt,"employees"],["import","connection",Ka],["admin","settings",Vt,"general"],["preferences","preferences",ss]];n.replaceChildren();for(const[x,se,R,I]of r){se==="automation"&&n.append(f("div","nav-label workspace-label",i("workspace")));const W=ie(x==="team"?e("employee.team"):x==="preferences"?e("preferences.title"):i(se),R,()=>{I&&(ye=I),document.querySelector(".app").classList.remove("menu-open"),o(x)});W.dataset.destination=x,W.hidden=!a(x),W.classList.toggle("active",t.tab===x&&(!I||(I==="general"?ye==="general":ye!=="general"))),x==="compose"&&W.classList.add("nav-compose"),n.append(W)}document.querySelector(".brand-title").replaceChildren(X(Pe),document.createTextNode("Courio")),document.querySelector(".brand-sub").textContent=i("local");let g=document.querySelector(".workspace-topbar");g||(g=f("header","workspace-topbar"),document.querySelector("main").prepend(g));const p=ie("",es,()=>document.querySelector(".app").classList.toggle("menu-open"));p.classList.add("mobile-menu"),p.title=i("toggleMenu"),p.setAttribute("aria-label",i("toggleMenu"));const u=ie(i("ask"),Pe);u.classList.add("topbar-assistant"),u.dataset.assistantToggle="",g.replaceChildren(p,u);const w=document.querySelector(".session-pill");if(w){const x=f("span","avatar",Kt(t.session.name));x.setAttribute("aria-hidden","true"),w.prepend(x),g.append(w)}document.documentElement.lang=["en","fr"].includes((C=t.preferences)==null?void 0:C.language)?t.preferences.language:t.settings.language||"en";const k={dashboard:"today",triage:"inbox",tasks:"tasks",compose:"compose",drafts:"drafts",rules:"automation",admin:"settings",import:"connection"};document.querySelector("#pageTitle").textContent=t.tab==="dashboard"?`${i("hello")}, ${((j=(ee=t.session)==null?void 0:ee.name)==null?void 0:j.split(" ")[0])||"Courio"}`:i(k[t.tab]),t.tab==="dashboard"&&(document.querySelector("#pageSubtitle").textContent=i("attention")),t.tab==="preferences"&&(document.querySelector("#pageTitle").textContent=e("preferences.title"),document.querySelector("#pageSubtitle").textContent=e("preferences.subtitle")),t.tab==="team"&&(document.querySelector("#pageTitle").textContent=e("employee.team"),document.querySelector("#pageSubtitle").textContent=e("employee.teamNote"))}function vs({state:t,t:e,navigateTo:a}){var se;const o=document.querySelector("#dashboard"),n=o.querySelectorAll(":scope > .cols-2 > .panel"),i=n[0],r=n[1];if(!i||!r)return;const c=R=>e(`design.${R}`),g=[t.emails.filter(R=>R.urgency==="High"&&R.status!=="Done").length,t.drafts.filter(R=>R.awaitingApproval).length,t.tasks.filter(R=>R.status!=="Done").length],p=[()=>a("triage",{triageFilter:"urgent"}),()=>a("drafts",{draftFilter:"needs_approval"}),()=>a("tasks")],u=f("div","overview-metrics");[Va,Ue,Ga].forEach((R,I)=>{const W=ie("",null,p[I]);W.className=`overview-metric metric-tone-${I}`;const qe=f("span","metric-symbol");qe.append(X(R));const ve=f("span","metric-content");ve.append(f("strong","",String(g[I])),f("span","",c(["urgent","pending","openTasks"][I]))),W.append(qe,ve,X(At)),u.append(W)});const w=ie(c("start"),Pe,p[0]);w.classList.add("primary","start-review");const k=f("section","next-actions"),S=f("h2","");S.append(X(Bt),document.createTextNode(c("next"))),k.append(S),["urgentAction","draftAction","taskAction"].forEach((R,I)=>{const W=ie("",null,p[I]);W.className="next-action",W.append(f("span","step-num",String(I+1)),f("span","",`${c(R)} (${g[I]})`),X(At)),k.append(W)}),i.className="digest-surface",i.querySelector("h2").textContent=c("digest"),i.querySelector("h2").prepend(X(ds));const C=i.querySelector("table");if(C){const R=f("details","digest-details");R.append(f("summary","",c("fullDigest")),C),i.querySelector(".subtitle").after(R)}r.className="recommendations-surface",r.querySelector("h2").textContent=c("recommendations"),r.querySelector("h2").prepend(X(Ja));const ee=f("div","overview-summary");ee.append(i,r);const j=f("div","overview-lower");j.append(k,ee),o.replaceChildren(u,w,j);const x=t.drafts.filter(R=>R.isReadyForHumanSend).length;if(x){const R=f("section","employee-today-tasks");R.append(f("h2","",`${e("trust.readyQueue")} (${x})`),f("p","",e("trust.readyNote")),ie(e("trust.viewReady"),Ue,()=>a("drafts",{draftFilter:"ready"}))),u.after(R)}((se=t.session)==null?void 0:se.role)==="Employee"&&Pa(o,t.tasks,e)}function tt({state:t,t:e},a,o){var wt;const n=document.querySelector(`#${a}`),i=n.querySelector("table");if(!(i!=null&&i.tBodies[0]))return;const r=L=>e(`design.${L}`),c=[...i.tBodies[0].rows],g=o.records,p=f("div","queue-workspace"),u=f("div","queue-list"),w=f("article","queue-detail");w.id=`${a}Detail`;const k=f("label","queue-search");k.append(X(is));const S=f("input","");S.type="search",S.placeholder=r("search"),S.setAttribute("aria-label",r("search")),S.value=at.get(a)||"",k.append(S),u.append(k);const C=st.get(a)||{status:"all",priority:"all",due:"all"},ee=f("div","queue-extra-filters");if(a!=="drafts"){const L=[["status",["all","Open","Done"]],["priority",["all","High","Medium","Low"]]];a==="tasks"&&L.push(["due",["all","overdue","today"]]);for(const[G,F]of L){const T=f("label","",e(`employee.${G}`)),Z=f("select");Z.dataset.queueFilter=G,F.forEach(le=>{const oe=f("option","",e(`employee.${le}`));oe.value=le,Z.append(oe)}),Z.value=C[G],Z.onchange=()=>{C[G]=Z.value,st.set(a,C),ve()},T.append(Z),ee.append(T)}u.append(ee),S.placeholder=e(a==="tasks"?"employee.searchTasks":"employee.searchInbox")}const j=[];let x=Oe.get(a);const se=a==="triage"?t.selectedEmail:a==="drafts"?t.selectedDraft:null;se&&(x=se.id),c.forEach(L=>{const G=L.querySelector(o.trigger);if(!G)return;const F=G.getAttribute(o.attribute),T=g.find(H=>H.id===F);if(!T)return;const Z=[...L.cells],le=f("div","queue-entry"),oe=f("button","queue-item");oe.type="button";const Le=o.title(T),Ze=o.subtitle(T),qa=f("span","avatar",Kt(o.avatar(T))),Xe=f("span","queue-item-copy");Xe.append(f("strong","",Le),f("span","",Ze));const La=f("small","",o.status(T));if(Xe.append(La),oe.append(qa,Xe),o.checkColumn!==void 0){const H=Z[o.checkColumn].querySelector("input");H&&(H.setAttribute("aria-label",`${r(a==="drafts"?"review":"done")}: ${Le}`),le.append(H))}le.append(oe),u.append(le);const de=f("div","record-detail"),Oa=f("h2","record-heading",Le);de.append(Oa,f("p","record-subtitle",Ze));const ja=Z.at(-1),bt=f("div","actions record-actions");if(bt.append(...ja.childNodes),de.append(bt),a==="triage"){const H=f("div","email-body",T.body||"");de.append(H);const Ae=f("section","reason-surface"),he=f("h3","",r("reason"));he.prepend(X(Pe)),Ae.append(he,f("p","",T.explanation||"")),de.append(Ae)}const $t=f("div","record-fields");Z.slice(0,-1).forEach((H,Ae)=>{if(o.omit.includes(Ae))return;const he=f("section","record-field");he.append(f("h3","",r(o.labels[Ae])));const St=f("div","record-field-value");St.append(...H.childNodes),he.append(St),$t.append(he)}),de.append($t);const kt=()=>{Oe.set(a,F),j.forEach(H=>{H.entry.classList.toggle("active",H.id===F),H.select.setAttribute("aria-pressed",String(H.id===F))}),w.replaceChildren(de)};oe.addEventListener("click",()=>{kt(),a!=="tasks"&&G.click()}),j.push({id:F,entry:le,select:oe,view:de,choose:kt,record:T,text:Rt([Le,Ze,T.body,T.senderEmail,T.notes,T.description,T.category,...(T.assignedEmployees||[]).map(H=>H.name)].join(" "))})});const R=f("p","empty-state",r("noMatch"));R.hidden=!0,u.append(R);const I=n.querySelector("[data-archive-filtered]"),W=I==null?void 0:I.disabled,qe=(I==null?void 0:I.title)||"",ve=()=>{var G;const L=Rt(S.value).trim();if(at.set(a,S.value),j.forEach(F=>{const T=F.record;F.entry.hidden=!F.text.includes(L)||C.status!=="all"&&T.status!==C.status||C.priority!=="all"&&(T.priority||T.urgency)!==C.priority||C.due==="overdue"&&!T.overdue||C.due==="today"&&!T.dueToday}),R.hidden=j.some(F=>!F.entry.hidden),I){const F=!!L||Object.values(C).some(T=>T!=="all");I.disabled=W||F,I.title=F?e("employee.clearFilters"):qe}R.hidden?j.some(F=>F.id===Oe.get(a)&&!F.entry.hidden&&w.contains(F.view))||(G=j.find(F=>!F.entry.hidden))==null||G.choose():w.replaceChildren(f("p","empty-state",r("noMatch")))};S.addEventListener("input",ve),ve(),(wt=j.find(L=>L.id===x&&!L.entry.hidden)||j.find(L=>!L.entry.hidden))==null||wt.choose(),p.append(u,w),i.replaceWith(p);const Na=p.parentElement;for(const L of[...Na.children])(L.classList.contains("segmented")||L.classList.contains("list-toolbar"))&&k.after(L);n.classList.add("work-queue")}function hs({state:t,t:e}){var c,g,p;const a=document.querySelector("#drawerRoot > .review-drawer"),o=t.tab==="triage"&&t.selectedEmail?document.querySelector("#triageDetail"):t.tab==="drafts"&&t.selectedDraft?document.querySelector("#draftsDetail"):null;if(!a||!o)return;a.classList.add("inline-review");const n=[...a.querySelectorAll(":scope > .drawer-section")],i=[...a.querySelectorAll(":scope > .drawer-grid")],r=a.querySelector(".drawer-actions");if(t.selectedEmail){a.querySelector(".drawer-header").after(r);const w=f("details","review-extra");w.append(f("summary","",e("design.more"))),w.append(...i.slice(1),n[1],n[2],n[4]),(g=(c=n[0])==null?void 0:c.querySelector(".preview"))==null||g.classList.add("review-email-body"),(p=n[3])==null||p.classList.add("reason-surface"),a.querySelector(".drawer-note").before(w),t.summary&&n[5]&&r.after(n[5])}else{const u=f("details","review-extra");u.append(f("summary","",e("design.source")),n[0],n[1]),a.querySelector(".drawer-header").after(u),i.forEach(w=>w.classList.add("draft-summary-stats"))}o.replaceChildren(a),document.querySelector("#drawerRoot").replaceChildren()}function ys({t}){const e=document.querySelector("#compose > .grid > .panel");if(!e)return;const a=e.querySelector(":scope > .preview"),o=e.querySelector(":scope > .drawer-section"),n=e.querySelector(":scope > .actions"),i=e.querySelector(".form-grid > .preview"),r=e.querySelector(".panel-title > div");if(r==null||r.remove(),o){const c=f("details","compose-metadata");c.append(f("summary","",t("compose.attachmentMetadata")),o),i&&c.append(i),n.before(c)}a&&(a.classList.add("compose-safety"),e.append(a))}function ws({state:t,t:e}){const a=document.querySelector("#admin"),o=a.querySelector(":scope > .grid");if(!o)return;const n=[...o.children];if(n.length!==5)return;const i=["general","safety","employees","categories","activity"],r=f("div","settings-workspace"),c=f("nav","settings-nav");c.setAttribute("aria-label",e("design.settings"));const g=f("div","settings-content"),p=w=>{ye=w,n.forEach((k,S)=>{k.hidden=i[S]!==w}),c.querySelectorAll("button").forEach(k=>k.classList.toggle("active",k.dataset.settingsSection===w))};i.forEach((w,k)=>{const S=ie(e(`design.${w}`),[Vt,rs,Gt,_t,Bt][k],()=>p(w));S.dataset.settingsSection=w,c.append(S),n[k].classList.add("settings-surface"),g.append(n[k])}),r.append(c,g),a.replaceChildren(r),p(ye);const u=n[0].querySelector("[data-reset-demo]");if(u){const w=f("section","settings-reset"),k=f("h3","",e("design.reset"));w.append(k,u),n[0].append(w)}}function bs(t){var a,o;const{state:e}=t;Ct!==((a=e.session)==null?void 0:a.id)&&(at.clear(),Oe.clear(),st.clear(),Ct=(o=e.session)==null?void 0:o.id),Tt==="admin"&&e.tab!=="admin"&&(ye="general"),Tt=e.tab,fs(t),vs(t),tt(t,"triage",{records:e.emails,trigger:"[data-review-email]",attribute:"data-review-email",title:n=>n.subject,subtitle:n=>n.sender,avatar:n=>n.sender,status:n=>`${n.category} · ${n.noReplyNeeded?t.t("trust.noReply"):n.noReplySuggested?t.t("trust.reviewFirst"):n.draftReadyForHumanSend?t.t("trust.ready"):n.workflowLabel||n.status}`,omit:[0,1],labels:["subject","sender","category","assigned","workflow","status"]}),tt(t,"drafts",{records:e.drafts,trigger:"[data-review-draft]",attribute:"data-review-draft",checkColumn:0,title:n=>n.title,subtitle:n=>n.source,avatar:n=>n.source,status:n=>n.isReadyForHumanSend?t.t("trust.ready"):n.statusLabel,omit:[0,1],labels:["review","subject","source","risk","status"]}),tt(t,"tasks",{records:e.tasks,trigger:"[data-review-task]",attribute:"data-review-task",checkColumn:0,title:n=>n.title,subtitle:n=>{var i;return((i=n.assignedEmployee)==null?void 0:i.name)||t.t("tasks.unassigned")},avatar:n=>{var i;return((i=n.assignedEmployee)==null?void 0:i.name)||n.title},status:n=>`${n.priority} · ${n.status}`,omit:[0],labels:["done","details","priority","assigned","source","notes"]}),hs(t),ws(t),ys(t)}function $s(t,e,a,o,n){const i=c=>n(`taskWork.${c}`),r=(c,g)=>c.map(p=>`<option value="${p}" ${p===g?"selected":""}>${i(p)}</option>`).join("");t.innerHTML=`
    <div class="drawer-backdrop" data-close-drawer></div>
    <aside class="review-drawer" role="dialog" aria-modal="true" aria-label="${i(e.id?"edit":"add")}">
      <div class="drawer-header"><h2>${i(e.id?"edit":"add")}</h2><button class="btn subtle" data-close-drawer>${i("cancel")}</button></div>
      <form data-task-editor class="form-grid">
        <label>${i("title")}<input name="title" required value="${d(e.title||"")}"></label>
        <label>${i("notes")}<textarea name="notes">${d(e.notes||"")}</textarea></label>
        <label>${i("priority")}<select name="priority">${r(["High","Medium","Low"],e.priority||"Medium")}</select></label>
        <label>${i("dueAt")}<input type="date" name="dueAt" value="${d(e.dueAt||"")}"></label>
        ${o?`<label>${i("assignedTo")}<select name="assignedTo"><option value="">${n("tasks.unassigned")}</option>${a.map(c=>`<option value="${d(c.id)}" ${e.assignedTo===c.id?"selected":""}>${d(c.name)}</option>`).join("")}</select></label>`:""}
        ${e.id?`<label>${i("status")}<select name="status">${r(["Open","Done"],e.status)}</select></label>`:""}
        ${o||e.canManageCollaborators||!e.id?`<fieldset class="task-collaborators" data-collaborators-editable><legend>${n("employee.collaborators")}</legend>${a.filter(c=>c.id!==e.assignedTo).map(c=>{var g;return`<label><input type="checkbox" name="collaboratorIds" value="${d(c.id)}" ${(g=e.collaboratorIds)!=null&&g.includes(c.id)?"checked":""}>${d(c.name)}</label>`}).join("")}</fieldset>`:""}
        <button class="btn primary" type="submit">${i("save")}</button>
      </form>
    </aside>`}const It={en:{today:"Today",inbox:"Inbox",tasks:"Tasks",drafts:"Drafts",compose:"New message",automation:"Automation",team:"Team & categories",connection:"Connection",settings:"Settings",workspace:"Workspace",ask:"Ask Courio...",hello:"Hello",attention:"Here is what needs your attention today.",urgent:"urgent emails",pending:"drafts awaiting approval",openTasks:"tasks to complete",start:"Start reviewing",next:"Next actions",urgentAction:"Review urgent messages",draftAction:"Review drafts awaiting approval",taskAction:"Complete assigned tasks",digest:"Morning digest",recommendations:"Recommendations",fullDigest:"View full digest",general:"General",employees:"Team",categories:"Categories",activity:"Activity",safety:"Demo safeguards",reset:"Reset demo data",search:"Search this list...",noMatch:"No items match your search.",select:"Select an item to review its details.",review:"Review",summary:"Courio summary",reason:"Why this priority?",noSend:"Approval makes a draft ready for human send. This demo never sends email.",local:"Local demo",details:"Details",close:"Close",more:"More details",edit:"Review and edit",saved:"Saved drafts",account:"Demo account",itemCount:"items",filters:"Filters",status:"Status",source:"Source",subject:"Subject",sender:"Sender",category:"Category",assigned:"Assigned to",workflow:"Workflow",risk:"Risk",notes:"Notes",priority:"Priority",done:"Complete",toggleMenu:"Toggle navigation",clearSearch:"Clear the list search before removing filtered emails."},fr:{today:"Aujourd'hui",inbox:"Boîte de réception",tasks:"Tâches",drafts:"Brouillons",compose:"Nouveau message",automation:"Automatisation",team:"Équipe et catégories",connection:"Connexion",settings:"Paramètres",workspace:"Espace de travail",ask:"Demander à Courio...",hello:"Bonjour",attention:"Voici ce qui demande votre attention aujourd'hui.",urgent:"courriels urgents",pending:"brouillons à approuver",openTasks:"tâches à compléter",start:"Commencer la révision",next:"Prochaines actions",urgentAction:"Examiner les messages urgents",draftAction:"Réviser les brouillons en attente",taskAction:"Compléter les tâches assignées",digest:"Résumé du matin",recommendations:"Recommandations",fullDigest:"Voir le résumé complet",general:"Général",employees:"Équipe",categories:"Catégories",activity:"Activité",safety:"Garanties de la démo",reset:"Réinitialiser les données de démonstration",search:"Rechercher dans cette liste...",noMatch:"Aucun élément ne correspond à votre recherche.",select:"Sélectionnez un élément pour consulter ses détails.",review:"Réviser",summary:"Résumé par Courio",reason:"Pourquoi cette priorité?",noSend:"L'approbation prépare un brouillon pour un envoi humain. Cette démo n'envoie jamais de courriel.",local:"Démo locale",details:"Détails",close:"Fermer",more:"Plus de détails",edit:"Réviser et modifier",saved:"Brouillons enregistrés",account:"Compte de démonstration",itemCount:"éléments",filters:"Filtres",status:"Statut",source:"Source",subject:"Objet",sender:"Expéditeur",category:"Catégorie",assigned:"Assigné à",workflow:"Flux de travail",risk:"Risque",notes:"Notes",priority:"Priorité",done:"Terminer",toggleMenu:"Afficher ou masquer la navigation",clearSearch:"Effacez la recherche avant de retirer les courriels filtrés."}},Ft={en:{collaboratorIds:"Additional assignees",followUpRequested:"Follow-up requested from a colleague",add:"Add task",edit:"Edit task",emailTask:"Open / assign task",title:"Title",notes:"Notes",priority:"Priority",assignedTo:"Assigned to",dueAt:"Due date",status:"Status",High:"High",Medium:"Medium",Low:"Low",Open:"Open",Done:"Complete",save:"Save task",cancel:"Cancel",saved:"Task saved.",restored:"Task change restored.",updated:"Task updated",created:"Task created",restore:"Restore previous values",restoreTitle:"Restore this task change?",restoreMessage:"Restore the values shown below? Later changes to these fields will be replaced. Email approval is unaffected.",legacy:"Older activity has no saved values to restore.",titleRequired:"Enter a task title.",invalidPriority:"Choose a valid priority.",invalidStatus:"Choose a valid task status.",invalidAssignee:"This employee is no longer available. Choose an existing employee.",invalidDate:"Choose a valid due date.",notFound:"Task not found.",forbidden:"Your demo account cannot make this task change.",noSnapshot:"This activity has no saved values to restore.",none:"None",myTasks:"My tasks"},fr:{collaboratorIds:"Autres responsables",followUpRequested:"Suivi demandé à un collègue",add:"Ajouter une tâche",edit:"Modifier la tâche",emailTask:"Ouvrir / assigner la tâche",title:"Titre",notes:"Notes",priority:"Priorité",assignedTo:"Assignée à",dueAt:"Échéance",status:"Statut",High:"Élevée",Medium:"Moyenne",Low:"Faible",Open:"Ouverte",Done:"Terminée",save:"Enregistrer la tâche",cancel:"Annuler",saved:"Tâche enregistrée.",restored:"Modification restaurée.",updated:"Tâche modifiée",created:"Tâche créée",restore:"Restaurer les valeurs précédentes",restoreTitle:"Restaurer cette modification?",restoreMessage:"Restaurer les valeurs ci-dessous? Les modifications ultérieures de ces champs seront remplacées. L'approbation du courriel reste inchangée.",legacy:"Cette ancienne activité ne contient aucune valeur à restaurer.",titleRequired:"Saisissez un titre.",invalidPriority:"Choisissez une priorité valide.",invalidStatus:"Choisissez un statut valide.",invalidAssignee:"Cet employé n'est plus disponible. Choisissez un employé existant.",invalidDate:"Choisissez une date valide.",notFound:"Tâche introuvable.",forbidden:"Votre compte de démonstration ne peut pas effectuer cette modification.",noSnapshot:"Cette activité ne contient aucune valeur à restaurer.",none:"Aucune",myTasks:"Mes tâches"}},xt={en:{title:"My preferences",subtitle:"Appearance for your demo account only.",theme:"Theme",light:"Light",dark:"Dark",system:"Use device setting",background:"Background image",chooseImage:"Choose image",removeImage:"Remove image",imageNote:"JPEG, PNG or WebP, up to 5 MB. Resized and saved only in this browser.",dim:"Background shading",preview:"Background preview",noImage:"Default background",labels:"Label colors and category shortcuts",color:"Color",show:"Show in category filter",categoryNote:"Hidden shortcuts do not hide messages. All categories still includes every message you can access.",defaultColor:"Use shared color",archived:"Archived",save:"Save my preferences",saving:"Saving...",cancel:"Discard changes",reset:"Restore my defaults",saved:"Your preferences were saved.",resetDone:"Your appearance preferences were reset.",uploading:"Preparing image...",empty:"No categories available.",invalid:"Choose valid appearance preferences.",invalidImage:"Choose a valid JPEG, PNG or WebP image within the size limit.",storageFull:"Browser storage is full. Remove the background image or choose a smaller one. Your saved preferences have not changed.",sessionRequired:"Sign in to a demo account before saving preferences.",resetTitle:"Reset your appearance?",resetMessage:"Your theme, background, label colors and category shortcuts will return to defaults. Other accounts and workspace settings will not change."},fr:{title:"Mes préférences",subtitle:"L'apparence de votre compte de démonstration seulement.",theme:"Thème",light:"Clair",dark:"Sombre",system:"Selon l'appareil",background:"Image de fond",chooseImage:"Choisir une image",removeImage:"Retirer l'image",imageNote:"JPEG, PNG ou WebP, 5 Mo maximum. Redimensionnée et enregistrée uniquement dans ce navigateur.",dim:"Voile de lisibilité",preview:"Aperçu du fond",noImage:"Fond par défaut",labels:"Couleurs et raccourcis des catégories",color:"Couleur",show:"Afficher dans le filtre des catégories",categoryNote:"Masquer un raccourci ne masque aucun message. Toutes les catégories inclut tous les messages auxquels vous avez accès.",defaultColor:"Utiliser la couleur partagée",archived:"Archivée",save:"Enregistrer mes préférences",saving:"Enregistrement...",cancel:"Annuler les modifications",reset:"Rétablir mes valeurs par défaut",saved:"Vos préférences sont enregistrées.",resetDone:"Vos préférences d'apparence ont été réinitialisées.",uploading:"Préparation de l'image...",empty:"Aucune catégorie disponible.",invalid:"Choisissez des préférences d'apparence valides.",invalidImage:"Choisissez une image JPEG, PNG ou WebP valide respectant la taille maximale.",storageFull:"Le stockage du navigateur est plein. Retirez l'image de fond ou choisissez-en une plus petite. Vos préférences enregistrées restent inchangées.",sessionRequired:"Connectez-vous à un compte de démonstration avant d'enregistrer vos préférences.",resetTitle:"Réinitialiser votre apparence?",resetMessage:"Votre thème, fond, couleurs et raccourcis reviendront aux valeurs par défaut. Les autres comptes et les paramètres de l'espace de travail resteront inchangés."}},Mt={en:{finishCompose:"Save or finish your current composed draft before starting a message to a colleague.",team:"Team directory",teamNote:"Find a colleague and prepare a message.",email:"Email",write:"Write a message",myWork:"All my assigned tasks",noTasks:"No assigned tasks yet.",collaborators:"Additional assignees",shared:"Shared task",followUp:"Request a colleague's follow-up",followUpNote:"Creates a local task for your colleague. No email is sent.",requested:"Follow-up task assigned.",requestedBy:"Requested by",recipient:"Assign follow-up to",submit:"Create follow-up task",language:"My language",workspace:"Use workspace language",en:"English",fr:"Français",status:"Status",priority:"Priority",due:"Due date",all:"All",Open:"Open",Done:"Complete",High:"High",Medium:"Medium",Low:"Low",overdue:"Overdue",today:"Due today",unassigned:"Unassigned",clearFilters:"Clear search and additional filters before removing filtered emails.",automation:"Workspace automation",automationNote:"Enabled rules apply across the workspace. Suggestions require review; nothing is sent automatically.",noRules:"No enabled workspace rule matches this message.",applyCategory:"Use suggested category",applied:"Suggested category applied.",approvalNote:"You can review and save your drafts. An admin must approve them before they are ready for human send.",composed:"My composed drafts",searchTeam:"Search name, role, department or email",emptyTeam:"No colleagues match this search.",followUpRequested:"Follow-up requested from a colleague",searchInbox:"Search sender, subject, address or message",searchTasks:"Search task, notes or assignee"},fr:{finishCompose:"Enregistrez ou terminez votre brouillon actuel avant de commencer un message pour un collègue.",team:"Répertoire de l'équipe",teamNote:"Trouvez un collègue et préparez un message.",email:"Courriel",write:"Écrire un message",myWork:"Toutes mes tâches assignées",noTasks:"Aucune tâche assignée pour le moment.",collaborators:"Autres responsables",shared:"Tâche partagée",followUp:"Demander un suivi à un collègue",followUpNote:"Crée une tâche locale pour votre collègue. Aucun courriel n'est envoyé.",requested:"Tâche de suivi assignée.",requestedBy:"Demandé par",recipient:"Assigner le suivi à",submit:"Créer la tâche de suivi",language:"Ma langue",workspace:"Langue de l'espace de travail",en:"English",fr:"Français",status:"Statut",priority:"Priorité",due:"Échéance",all:"Tous",Open:"Ouverte",Done:"Terminée",High:"Élevée",Medium:"Moyenne",Low:"Faible",overdue:"En retard",today:"Aujourd'hui",unassigned:"Non assignée",clearFilters:"Effacez la recherche et les filtres supplémentaires avant de retirer les courriels filtrés.",automation:"Automatisation de l'espace de travail",automationNote:"Les règles activées s'appliquent à toute l'équipe. Les suggestions doivent être révisées; aucun envoi automatique.",noRules:"Aucune règle active ne correspond à ce message.",applyCategory:"Utiliser la catégorie suggérée",applied:"Catégorie suggérée appliquée.",approvalNote:"Vous pouvez réviser et enregistrer vos brouillons. Un administrateur doit les approuver avant l'envoi manuel.",composed:"Mes brouillons rédigés",searchTeam:"Rechercher un nom, rôle, service ou courriel",emptyTeam:"Aucun collègue ne correspond à cette recherche.",followUpRequested:"Suivi demandé à un collègue",searchInbox:"Rechercher expéditeur, objet, adresse ou message",searchTasks:"Rechercher tâche, notes ou responsable"}},ot={en:{noReply:"Reviewed - no reply needed",markNoReply:"No reply needed",noReplyHint:"This message appears informational. Review it, then confirm no reply is needed or prepare a reply if appropriate.",noReplyConfirm:"Confirm no reply is needed?",noReplyConfirmNote:"This closes the email review without a draft or sending anything. Existing edited tasks remain open. You can reopen this decision from the inbox.",noReplyBlocked:"Open and review an eligible informational message first. Messages with an existing draft must keep their draft workflow.",noReplyDone:"Review finished without a reply. Nothing was sent. Existing tasks are unchanged.",reopen:"Reopen for review",reopened:"Reopened. Review the message before choosing the next action.",reviewFirst:"Review before deciding",ready:"Ready for human send",approve:"Approve for human send",approvalHint:"Approval finishes preparation only; nothing is sent.",notSent:"Preparation is complete. Nothing has been sent, and the customer's issue is not marked resolved.",readyQueue:"Approved drafts awaiting human send",readyNote:"These replies have not been sent by Courio. Important follow-ups still need attention.",viewReady:"View approved drafts",draftCheck:"Before approving, confirm any dates, availability, prices or commitments in this draft.",unsupported:"This local demo supports navigation commands, not open-ended analysis. Try Triage, urgent emails, drafts, invoices or digest. I have not changed anything."},fr:{noReply:"Révisé - aucune réponse requise",markNoReply:"Aucune réponse requise",noReplyHint:"Ce message semble informatif. Révisez-le, puis confirmez qu'aucune réponse n'est nécessaire ou préparez une réponse au besoin.",noReplyConfirm:"Confirmer qu'aucune réponse n'est requise?",noReplyConfirmNote:"Cette action termine la révision sans brouillon ni envoi. Les tâches déjà modifiées restent ouvertes. Vous pouvez rouvrir cette décision depuis la boîte de réception.",noReplyBlocked:"Ouvrez et révisez d'abord un message informatif admissible. Un message ayant déjà un brouillon conserve son parcours de révision du brouillon.",noReplyDone:"Révision terminée sans réponse. Aucun envoi. Les tâches existantes restent inchangées.",reopen:"Rouvrir pour révision",reopened:"Message rouvert. Révisez-le avant de choisir la prochaine action.",reviewFirst:"Réviser avant de décider",ready:"Prêt pour l'envoi manuel",approve:"Approuver pour l'envoi manuel",approvalHint:"L'approbation termine seulement la préparation; aucun envoi n'a lieu.",notSent:"La préparation est terminée. Aucun envoi n'a eu lieu et le problème du client n'est pas considéré comme résolu.",readyQueue:"Brouillons approuvés en attente d'envoi manuel",readyNote:"Courio n'a pas envoyé ces réponses. Les suivis importants demandent encore votre attention.",viewReady:"Voir les brouillons approuvés",draftCheck:"Avant d'approuver, confirmez les dates, disponibilités, prix et engagements du brouillon.",unsupported:"Cette démo locale comprend des commandes de navigation, pas des analyses libres. Essayez triage, courriels urgents, brouillons, factures ou résumé. Je n'ai rien modifié."}},Zt={en:{trust:ot.en,employee:Mt.en,preferences:xt.en,taskWork:Ft.en,design:It.en,brand:{subtitle:"Email assistant for small businesses",asideNote:"Courio uses fake local mailbox data in this prototype and suggests actions. It never sends email or modifies a real mailbox.",previewMode:"Preview mode enabled"},nav:{groups:{home:"Home",work:"Work",automation:"Automation",workspace:"Workspace"},dashboard:"Overview",dashboardSmall:"Today",triage:"Triage",triageSmall:"Inbox",tasks:"Tasks",tasksSmall:"Priority",compose:"Compose",composeSmall:"Local draft",drafts:"Drafts",draftsSmall:"Approval",rules:"Rules",rulesSmall:"Preview",import:"Setup preview",importSmall:"Microsoft 365",admin:"Admin",adminSmall:"Settings"},pages:{dashboard:["Overview","A local workflow preview for email triage, summaries, routing suggestions, and draft preparation."],import:["Setup preview","Preview how a future Microsoft 365 connection could import mailbox structure and workflow patterns."],triage:["Inbox triage","Review AI-classified messages before any action is taken."],tasks:["Action Center","Turn important local inbox items into a priority work list."],compose:["Compose","Create a fake/local message draft without sending anything."],rules:["Rules","Approve or adjust local rule previews. They do not affect a real mailbox."],drafts:["Drafts","Review prepared replies and mark them ready for a person to send."],admin:["Admin","Manage local workspace preferences and preview future integration safeguards."]},admin:{workspaceSettings:"Workspace settings",prototype:"Prototype",companyName:"Company name",language:"Language / Langue",mode:"Mode",escalationRecipient:"Escalation recipient",saveSettings:"Save settings",saving:"Saving...",resetDemoData:"Reset Demo Data",resetting:"Resetting...",safetyPreview:"Safety preview",prototypeBehavior:"Prototype behavior",savedLanguage:"Saved language",languageNote:"Language changes apply after saving. Internal workflow values stay stable."},auth:{demoOnly:"Demo login",title:"Choose a demo account",subtitle:"Use a premade local account to preview what an owner or employee would see.",safetyNote:"This is a local role switcher for the prototype, not real authentication or security.",logout:"Switch account",loginToast:"Demo account opened locally.",logoutToast:"Demo account closed locally."},triage:{inboxControl:"Inbox control",categoryFilter:"Category filter",allCategories:"All categories",emptyUrgent:"No urgent emails. You are caught up on high-priority work.",emptyInvoices:"No invoice emails are waiting for review.",emptyCategory:"No emails match this category filter.",emptyAll:"No emails are available in this local demo.",remove:"Archive from demo inbox",removing:"Removing...",removeFiltered:"Archive filtered emails",removeFilteredDisabled:"No removable emails in the current view.",removeConfirmTitle:"Remove this email from the demo inbox?",removeConfirmMessage:"This only hides the fake/local demo email. Nothing is deleted from a real mailbox:",removeFilteredConfirmTitle:"Remove filtered emails from the demo inbox?",removeFilteredConfirmMessage:"This only hides fake/local demo emails. Number selected:",removeSuccess:"Email removed from the demo inbox locally."},tasks:{title:"Priority tasks",subtitle:"Generated from the local demo inbox",empty:"No tasks yet. New local inbox items will appear here as work to review.",done:"Done",task:"Task",priority:"Priority",source:"Source email",notes:"Notes",followUp:"Follow-up",followUpDate:"Follow-up date",reminderOn:"Reminder on",reminderOff:"Add reminder",noReminder:"No follow-up scheduled",scheduled:"Scheduled locally",overdue:"Overdue",followUpFilter:"Follow-up filter",allFollowUps:"All follow-ups",scheduledFollowUps:"Scheduled",overdueFollowUps:"Overdue",followUpScheduledToast:"Local follow-up scheduled.",followUpRemovedToast:"Local follow-up removed.",followUpUpdatedToast:"Follow-up date updated locally.",assignedTo:"Assigned to",assigneeFilter:"Assignee filter",allAssignees:"All assignees",unassigned:"Unassigned",employeeScope:"Employee demo view: only tasks assigned to this account are shown.",notePlaceholder:"Add a local note",reviewEmail:"Review email",saveNote:"Save note",saving:"Saving...",noteSaved:"Task note saved locally.",completedToast:"Task checked off locally.",reopenedToast:"Task reopened locally.",openTasks:"Open tasks",openCaption:"From fake/local inbox items",highPriority:"High priority",highCaption:"Review these first",completed:"Completed",completedCaption:"Checked off in this browser",assignedToast:"Task assignment updated locally.",latestActivity:"Latest activity",viewHistory:"History",historyTitle:"Task history",historyFallback:"Task updated",noHistory:"No activity yet for this local task.",noNotes:"No notes yet.",historyNote:"This history is fake/local and helps show who touched the workflow in this browser.",localTask:"Local task",overdueCaption:"Needs follow-up now",noOverdueCaption:"No overdue reminders"},compose:{title:"Compose message",subtitle:"Fake/local only",safetyNote:"This composer does not connect to Gmail, Outlook, or any real mailbox. Saving creates a local draft only.",newMessage:"New message",to:"To",cc:"Cc",subject:"Subject",body:"Message body",attachments:"Attachments",attachmentNote:"Attachments are metadata only in this demo. File contents are not uploaded or stored.",attachmentMetadata:"Attachment metadata",noAttachments:"No attachments selected.",saveDraft:"Save local draft",saving:"Saving...",printPdf:"Print / save as PDF",neverSends:"Never sends email",savedDrafts:"Saved compose drafts",localOnly:"Local only",openDraft:"Open draft",emptyDrafts:"No compose drafts yet.",savedToast:"Compose draft saved locally. Nothing was sent.",printToast:"Use your browser print dialog to save as PDF. Nothing is sent."}},fr:{trust:ot.fr,employee:Mt.fr,preferences:xt.fr,taskWork:Ft.fr,design:It.fr,brand:{subtitle:"Assistant courriel pour PME",asideNote:"Courio utilise des données locales fictives dans ce prototype et suggère des actions. Il n'envoie jamais de courriel et ne modifie aucune vraie boîte courriel.",previewMode:"Mode aperçu activé"},nav:{groups:{home:"Accueil",work:"Travail",automation:"Automatisation",workspace:"Espace de travail"},dashboard:"Aperçu",dashboardSmall:"Aujourd'hui",triage:"Tri",triageSmall:"Boîte de réception",tasks:"Tâches",tasksSmall:"Priorité",compose:"Composer",composeSmall:"Brouillon local",drafts:"Brouillons",draftsSmall:"Approbation",rules:"Règles",rulesSmall:"Aperçu",import:"Aperçu configuration",importSmall:"Microsoft 365",admin:"Admin",adminSmall:"Paramètres"},pages:{dashboard:["Aperçu","Aperçu local des flux de tri courriel, résumés, suggestions de routage et préparation de brouillons."],import:["Aperçu configuration","Aperçu de la façon dont une future connexion Microsoft 365 pourrait importer la structure de boîte courriel et les habitudes de travail."],triage:["Tri de la boîte courriel","Révisez les messages classés par l'IA avant toute action."],tasks:["Centre d'action","Transformez les courriels locaux importants en liste de travail priorisée."],compose:["Composer","Créez un faux brouillon local sans rien envoyer."],rules:["Règles","Approuvez ou ajustez les aperçus de règles locales. Elles ne touchent aucune vraie boîte courriel."],drafts:["Brouillons","Révisez les réponses préparées et marquez-les prêtes pour un envoi humain."],admin:["Admin","Gérez les préférences locales de l'espace de travail et les protections des futures intégrations."]},admin:{workspaceSettings:"Paramètres de l'espace de travail",prototype:"Prototype",companyName:"Nom de l'entreprise",language:"Langue",mode:"Mode",escalationRecipient:"Responsable des escalades",saveSettings:"Enregistrer les paramètres",saving:"Enregistrement...",resetDemoData:"Réinitialiser la démo",resetting:"Réinitialisation...",safetyPreview:"Aperçu de sécurité",prototypeBehavior:"Comportement du prototype",savedLanguage:"Langue enregistrée",languageNote:"Les changements de langue s'appliquent après l'enregistrement. Les valeurs internes du flux restent stables."},auth:{demoOnly:"Connexion démo",title:"Choisir un compte démo",subtitle:"Utilisez un compte local préparé pour voir ce qu'un propriétaire ou un employé verrait.",safetyNote:"Ceci est un sélecteur de rôle local pour le prototype, pas une vraie authentification ni une vraie sécurité.",logout:"Changer de compte",loginToast:"Compte démo ouvert localement.",logoutToast:"Compte démo fermé localement."},triage:{inboxControl:"Contrôle de la boîte",categoryFilter:"Filtre de catégorie",allCategories:"Toutes les catégories",emptyUrgent:"Aucun courriel urgent. Les priorités élevées sont à jour.",emptyInvoices:"Aucun courriel de facture n'attend une révision.",emptyCategory:"Aucun courriel ne correspond à cette catégorie.",emptyAll:"Aucun courriel n'est disponible dans cette démo locale.",remove:"Archiver de la boîte de démo",removing:"Retrait...",removeFiltered:"Archiver les courriels filtrés",removeFilteredDisabled:"Aucun courriel retirable dans la vue actuelle.",removeConfirmTitle:"Retirer ce courriel de la boîte de démo?",removeConfirmMessage:"Cela cache seulement le faux courriel local. Rien n'est supprimé d'une vraie boîte:",removeFilteredConfirmTitle:"Retirer les courriels filtrés de la boîte de démo?",removeFilteredConfirmMessage:"Cela cache seulement des faux courriels locaux. Nombre sélectionné:",removeSuccess:"Courriel retiré localement de la boîte de démo."},tasks:{title:"Tâches prioritaires",subtitle:"Générées à partir de la boîte locale de démo",empty:"Aucune tâche pour l'instant. Les nouveaux courriels locaux apparaîtront ici comme travail à réviser.",done:"Fait",task:"Tâche",priority:"Priorité",source:"Courriel source",notes:"Notes",followUp:"Suivi",followUpDate:"Date de suivi",reminderOn:"Rappel actif",reminderOff:"Ajouter un rappel",noReminder:"Aucun suivi planifié",scheduled:"Planifié localement",overdue:"En retard",followUpFilter:"Filtre de suivi",allFollowUps:"Tous les suivis",scheduledFollowUps:"Planifiés",overdueFollowUps:"En retard",followUpScheduledToast:"Suivi local planifié.",followUpRemovedToast:"Suivi local retiré.",followUpUpdatedToast:"Date de suivi mise à jour localement.",assignedTo:"Assigné à",assigneeFilter:"Filtre par responsable",allAssignees:"Tous les responsables",unassigned:"Non assigné",employeeScope:"Vue employé démo : seules les tâches assignées à ce compte sont affichées.",notePlaceholder:"Ajouter une note locale",reviewEmail:"Réviser le courriel",saveNote:"Enregistrer la note",saving:"Enregistrement...",noteSaved:"Note de tâche enregistrée localement.",completedToast:"Tâche cochée localement.",reopenedToast:"Tâche rouverte localement.",openTasks:"Tâches ouvertes",openCaption:"Depuis les faux courriels locaux",highPriority:"Priorité élevée",highCaption:"À réviser en premier",completed:"Terminées",completedCaption:"Cochées dans ce navigateur",assignedToast:"Assignation de tâche mise à jour localement.",latestActivity:"Activité récente",viewHistory:"Historique",historyTitle:"Historique de la tâche",historyFallback:"Tâche mise à jour",noHistory:"Aucune activité pour cette tâche locale.",noNotes:"Aucune note pour l'instant.",historyNote:"Cet historique est faux/local et montre qui a touché au flux dans ce navigateur.",localTask:"Tâche locale",overdueCaption:"Suivi requis maintenant",noOverdueCaption:"Aucun rappel en retard"},compose:{title:"Composer un message",subtitle:"Faux/local seulement",safetyNote:"Ce compositeur ne se connecte pas à Gmail, Outlook ni à une vraie boîte courriel. L'enregistrement crée seulement un brouillon local.",newMessage:"Nouveau message",to:"À",cc:"Cc",subject:"Objet",body:"Corps du message",attachments:"Pièces jointes",attachmentNote:"Les pièces jointes sont seulement des métadonnées dans cette démo. Le contenu des fichiers n'est pas téléversé ni stocké.",attachmentMetadata:"Métadonnées des pièces jointes",noAttachments:"Aucune pièce jointe sélectionnée.",saveDraft:"Enregistrer le brouillon local",saving:"Enregistrement...",printPdf:"Imprimer / enregistrer en PDF",neverSends:"N'envoie jamais de courriel",savedDrafts:"Brouillons composés enregistrés",localOnly:"Local seulement",openDraft:"Ouvrir le brouillon",emptyDrafts:"Aucun brouillon composé pour l'instant.",savedToast:"Brouillon composé enregistré localement. Rien n'a été envoyé.",printToast:"Utilisez la fenêtre d'impression du navigateur pour enregistrer en PDF. Rien n'est envoyé."}}};function ze(t){return t==="fr"?"fr":"en"}function Xt(t){const e=Zt[ze(t)];return function(o){return o.split(".").reduce((n,i)=>n==null?void 0:n[i],e)||o}}function ks(t,e){const a=Zt[ze(e)];return a.pages[t]||a.pages.dashboard}const Ss=["Triage","Urgent emails","Drafts needing approval","Invoices","Generate digest","Create invoice rule","Reset demo data"];function As({assistantOpen:t,assistantMessages:e,assistantBusy:a}){const o=e.length?e:[{id:"assistant-loading",role:"assistant",text:"Loading assistant history..."}];return`
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
            ${o.map(n=>`
              <div class="assistant-message ${n.role==="user"?"user":"bot"}">
                ${d(n.text)}
              </div>
            `).join("")}
          </div>
          <form class="assistant-form">
            <input data-assistant-input placeholder="Show urgent emails" autocomplete="off" ${a?"disabled":""}>
            <button class="btn primary" type="submit" ${a?"disabled":""}>${a?"Working...":"Send"}</button>
          </form>
          <div class="assistant-suggestions" aria-label="Assistant command suggestions">
            ${Ss.map(n=>`
              <button class="assistant-chip" data-assistant-command="${d(n)}" ${a?"disabled":""}>
                ${d(n)}
              </button>
            `).join("")}
          </div>
        </div>
      `:""}
      <button class="assistant-fab" data-assistant-toggle aria-label="Open Courio assistant">
        AI
      </button>
    </div>
  `}const ea=[{id:"email-1",subject:"Very unhappy about no response",sender:"Maya Chen",senderEmail:"maya@northstar-retail.ca",body:"I have followed up twice and still have not received an answer about the service issue from last week. We need someone senior to respond today.",category:"Client complaint",urgency:"High",confidence:94,suggestedAction:"Escalate to owner",requiresDraft:!0,assignedTo:"emp-1",explanation:"Courio flagged this because the client mentions repeated follow-ups, no response, and asks for senior attention today.",thread:["Client followed up twice about an unanswered service issue.","The last message uses negative sentiment and asks for owner attention."],summary:"Client is frustrated by delayed response. Recommend owner review today.",draft:"Hi, thank you for following up. I'm sorry you are still waiting for a response about this service issue. The next steps and timing need to be confirmed with the person responsible."},{id:"email-2",subject:"Invoice #1844 payment status",sender:"Alex Rivera",senderEmail:"alex@brightline-supplies.ca",body:"Could you confirm whether invoice #1844 has been approved for payment? It was due last Friday.",category:"Accounting",urgency:"Medium",confidence:89,suggestedAction:"Route to accounting",requiresDraft:!0,assignedTo:"emp-2",explanation:"Courio saw an invoice number, payment-status wording, and a due-date reference, so it suggested accounting review.",thread:["Supplier asks whether invoice #1844 has been scheduled for payment.","Invoice appears related to recurring monthly services."],summary:"Supplier is requesting a payment-status update for invoice #1844.",draft:"Hi, thanks for checking in about invoice #1844. The payment status and timing still need to be confirmed with accounting."},{id:"email-3",subject:"Quote request for monthly bookkeeping",sender:"Priya Nair",senderEmail:"priya@lakeside-catering.ca",body:"We are looking for monthly bookkeeping help for a small catering business. We have six employees and would like pricing before the end of the week.",category:"Sales",urgency:"Medium",confidence:86,suggestedAction:"Prepare intake draft",requiresDraft:!0,assignedTo:"emp-3",explanation:"Courio matched this to sales because the sender asks for pricing, describes company needs, and appears to be a new prospect.",thread:["New prospect requested pricing for monthly bookkeeping.","They mentioned six employees and monthly receipt volume."],summary:"New lead is asking for bookkeeping pricing. Intake details are partially available.",draft:"Hi, thanks for reaching out. We'd be happy to help with monthly bookkeeping. Could you share your approximate monthly transaction count and preferred start date?"},{id:"email-4",subject:"Payroll documents attached",sender:"Tom Bennett",senderEmail:"tom@harbour-grill.ca",body:"Please find this period's payroll documents attached. Let me know if anything is missing before Thursday.",category:"Documents",urgency:"Low",confidence:91,suggestedAction:"Apply payroll category",requiresDraft:!0,assignedTo:"emp-4",explanation:"Courio detected payroll wording and an attachment reference, so it suggested categorizing this for payroll review.",thread:["Client attached payroll documents for this period.","Message should be categorized for payroll review."],summary:"Payroll documents are attached and ready to route to payroll workflow.",draft:"Hi, thank you for your message about the payroll documents. Receipt of the attachments and the review timing still need to be confirmed."},{id:"email-5",subject:"Missing March receipts",sender:"Elena Morris",senderEmail:"elena@maple-therapy.ca",body:"I thought I sent the March receipts, but I may have missed the attachment. Can you let me know what you still need?",category:"Missing documents",urgency:"Medium",confidence:88,suggestedAction:"Prepare follow-up draft",requiresDraft:!0,assignedTo:"emp-2",explanation:"Courio flagged this because the email talks about receipts and a possibly missing attachment, which usually needs a document follow-up.",thread:["Client mentions March receipts but no attachments are present.","Follow-up should request the missing files."],summary:"March receipts appear to be missing. Prepare a concise document request.",draft:"Hi, thanks for the note. It looks like the March receipts were not attached. Could you resend them when convenient?"},{id:"email-6",subject:"Can we move tomorrow's appointment?",sender:"Jordan Lee",senderEmail:"jordan@greenway-landscaping.ca",body:"Something came up with our crew schedule. Can we move tomorrow's appointment to next Tuesday afternoon?",category:"Scheduling",urgency:"Low",confidence:82,suggestedAction:"Offer available times",requiresDraft:!0,assignedTo:"emp-5",explanation:"Courio identified a scheduling change request with a proposed new time, so it suggested a simple scheduling reply.",thread:["Client asks to move an appointment from tomorrow to next Tuesday afternoon.","No urgent sentiment or billing issue detected."],summary:"Client wants to reschedule tomorrow's appointment to next Tuesday afternoon.",draft:"Hi, thanks for letting us know. Availability for next Tuesday afternoon has not yet been confirmed. Could you share your preferred time window?"},{id:"email-7",subject:"Weekly partner newsletter",suggestedDisposition:"information_only",sender:"Service Ledger Weekly",senderEmail:"updates@serviceledger.example",body:"This week's roundup includes product tips, partner webinars, and a checklist for organizing client documents before month end.",category:"Newsletter",urgency:"Low",confidence:79,suggestedAction:"Review as information only",requiresDraft:!0,assignedTo:"",explanation:"Courio categorized this as a newsletter because it is a broadcast update with no client request, deadline, or required reply.",thread:["Marketing-style newsletter with no direct client request.","Low-priority inbox noise that can be removed from the demo inbox after review."],summary:"Newsletter-style update. No reply appears needed.",draft:"Hi, thank you for sharing this update."}],Es=[{id:"cat-client-complaint",name:"Client complaint",description:"Escalations, unhappy clients, repeated follow-ups, and high-trust replies.",color:"urgent",active:!0,system:!0},{id:"cat-accounting",name:"Accounting",description:"Invoices, payment status, receipts, bookkeeping, and supplier questions.",color:"invoice",active:!0,system:!0},{id:"cat-sales",name:"Sales",description:"New leads, quote requests, pricing questions, and intake replies.",color:"lead",active:!0,system:!0},{id:"cat-documents",name:"Documents",description:"Attached files, payroll documents, client records, and document routing.",color:"invoice",active:!0,system:!0},{id:"cat-missing-documents",name:"Missing documents",description:"Missing attachments, receipts, files, or client documents that need follow-up.",color:"invoice",active:!0,system:!0},{id:"cat-scheduling",name:"Scheduling",description:"Appointment changes, availability, calendar coordination, and time windows.",color:"pending",active:!0,system:!0},{id:"cat-general",name:"General",description:"Messages that do not need a specialized workflow yet.",color:"default",active:!0,system:!0},{id:"cat-newsletter",name:"Newsletter",description:"Marketing emails, updates, and low-priority broadcast messages.",color:"default",active:!0,system:!1},{id:"cat-follow-up",name:"Follow-up",description:"Messages that need a reminder, next step, or later response.",color:"pending",active:!0,system:!1},{id:"cat-internal",name:"Internal",description:"Team messages, internal coordination, and company updates.",color:"lead",active:!0,system:!1},{id:"cat-vendor",name:"Vendor",description:"Supplier, partner, and vendor conversations.",color:"invoice",active:!0,system:!1}],Ds=[{id:"emp-1",name:"Nadia Patel",title:"Owner",email:"nadia@courio-demo.ca",department:"Leadership"},{id:"emp-2",name:"Marcus Roy",title:"Bookkeeper",email:"marcus@courio-demo.ca",department:"Accounting"},{id:"emp-3",name:"Sofia Tremblay",title:"Client Success Lead",email:"sofia@courio-demo.ca",department:"Sales"},{id:"emp-4",name:"Daniel Kim",title:"Payroll Specialist",email:"daniel@courio-demo.ca",department:"Payroll"},{id:"emp-5",name:"Avery Brooks",title:"Office Coordinator",email:"avery@courio-demo.ca",department:"Operations"}],Cs=[{id:"rule-1",title:"Supplier invoice routing",desc:"Suggest an accounting category and owner for supplier invoices and payment requests.",category:"Accounting",confidence:91,explanation:"Courio looks for invoice numbers, payment wording, supplier senders, and due-date language.",impact:"Matches the sample invoice messages in this local demo.",matches:["Invoice #1844 payment status","Supplier payment confirmation"],on:!0},{id:"rule-2",title:"Client escalation detection",desc:"Flag negative sentiment, repeated follow-ups, or unanswered client messages older than 48 hours.",category:"Client complaint",confidence:94,explanation:"Courio looks for negative sentiment, repeated follow-ups, and requests for owner attention.",impact:"Flags the sample high-risk client thread in this local demo.",matches:["Very unhappy about no response"],on:!0},{id:"rule-3",title:"Quote request intake",desc:"Prepare standardized draft replies for new prospects requesting pricing or availability.",category:"Sales",confidence:86,explanation:"Courio looks for pricing requests, new prospect language, and service-fit details.",impact:"Matches the sample quote request in this local demo.",matches:["Quote request for monthly bookkeeping"],on:!1},{id:"rule-4",title:"Missing document follow-up",desc:"Prepare client reminders when required documents are mentioned but not attached.",category:"Missing documents",confidence:88,explanation:"Courio looks for missing attachment wording, receipt requests, and document follow-up language.",impact:"Useful for bookkeeping, accounting, insurance, and service teams.",matches:["Missing March receipts"],on:!1}],Ce="courio.mockState.v1",He="courio.assistantHistory.v1",nt="courio.demoSession.v1",dt=2,Me=[{id:"admin-owner",role:"Admin",employeeId:"emp-1",name:"Nadia Patel",title:"Owner",email:"nadia@courio-demo.ca"},{id:"employee-marcus",role:"Employee",employeeId:"emp-2",name:"Marcus Roy",title:"Bookkeeper",email:"marcus@courio-demo.ca"}],b=Object.freeze({NEEDS_REVIEW:"needs_review",READY_FOR_DRAFT:"ready_for_draft",DRAFT_GENERATED:"draft_generated",DRAFT_REVIEWED:"draft_reviewed",DRAFT_SAVED:"draft_saved",COMPLETED:"completed",NO_REPLY_NEEDED:"no_reply_needed"}),Rs=new Set(Object.values(b)),Ts={status:"Simulated setup preview",safetyNote:"No account is connected. This demo does not access real email, folders, files, or contacts.",futureNote:"In a future version, this step could connect to Gmail or Microsoft 365 after explicit approval.",mailboxes:[{id:"mailbox-main",name:"Main inbox",address:"hello@demo-company.ca",type:"Primary mailbox",volume:"142 recent threads",risk:"Mixed priority",folders:["Inbox","Needs reply","Clients","Vendors","Archive"],categories:["Client complaint","Accounting","Sales","Scheduling"],frequentSenders:["Northstar Retail","Brightline Supplies","Lakeside Catering"],sharedInboxes:["info@demo-company.ca"],recentThreads:["Very unhappy about no response","Invoice #1844 payment status","Quote request for monthly bookkeeping"]},{id:"mailbox-accounting",name:"Accounting",address:"accounting@demo-company.ca",type:"Shared mailbox",volume:"88 recent threads",risk:"Document-heavy",folders:["Invoices","Receipts","Payroll","Tax documents","Vendors"],categories:["Accounting","Documents","Missing documents"],frequentSenders:["Brightline Supplies","Harbour Grill","Maple Therapy"],sharedInboxes:["payroll@demo-company.ca"],recentThreads:["Invoice #1844 payment status","Payroll documents attached","Missing March receipts"]},{id:"mailbox-sales",name:"Sales",address:"sales@demo-company.ca",type:"Shared mailbox",volume:"53 recent threads",risk:"Revenue-sensitive",folders:["Leads","Quotes","Follow up","Won","Lost"],categories:["Sales","Scheduling"],frequentSenders:["Lakeside Catering","Greenway Landscaping","New prospects"],sharedInboxes:["quotes@demo-company.ca"],recentThreads:["Quote request for monthly bookkeeping","Can we move tomorrow's appointment?"]},{id:"mailbox-operations",name:"Operations",address:"ops@demo-company.ca",type:"Team mailbox",volume:"61 recent threads",risk:"Coordination-heavy",folders:["Scheduling","Client updates","Internal","Completed"],categories:["Scheduling","Documents","General"],frequentSenders:["Greenway Landscaping","Client coordinators","Office team"],sharedInboxes:["support@demo-company.ca"],recentThreads:["Can we move tomorrow's appointment?","Payroll documents attached"]},{id:"mailbox-shared",name:"Shared inbox",address:"info@demo-company.ca",type:"Shared intake",volume:"119 recent threads",risk:"Needs routing",folders:["Inbox","Unsorted","Clients","Prospects","Vendors"],categories:["Client complaint","Sales","Accounting","Missing documents"],frequentSenders:["Clients","Suppliers","Prospects"],sharedInboxes:["hello@demo-company.ca","support@demo-company.ca"],recentThreads:["Very unhappy about no response","Quote request for monthly bookkeeping","Missing March receipts"]}],scanItems:[{label:"Folders",detail:"Inbox structure, archive folders, and team-specific folders.",count:14},{label:"Labels/categories",detail:"Existing categories that could map to Courio triage buckets.",count:9},{label:"Frequent senders",detail:"Recurring clients, vendors, prospects, and internal senders.",count:26},{label:"Shared inboxes",detail:"Mailboxes that several employees may monitor.",count:4},{label:"Recent threads",detail:"Recent local demo examples used to preview workflow suggestions.",count:142},{label:"Suggested workflow rules",detail:"Draft local rules for routing, escalation, and follow-up.",count:5}],setupSteps:[{title:"Choose mailbox",detail:"Select the mailbox Courio should preview.",state:"Available in demo"},{title:"Scan folders and labels",detail:"Preview folders, categories, and common sender patterns.",state:"Simulated"},{title:"Detect common email types",detail:"Identify invoices, quote requests, complaints, missing documents, and scheduling.",state:"Simulated"},{title:"Suggest workflows",detail:"Create local suggested rules for review before anything is used.",state:"Simulated"},{title:"Ready for review",detail:"Move to Triage and Rules to inspect the fake suggestions.",state:"Demo only"}],workflowSuggestions:[{match:"Invoices",outcome:"Accounting review",reason:"Invoice numbers, due dates, supplier language."},{match:"Quote requests",outcome:"Sales intake",reason:"Pricing requests, service-fit details, new prospect wording."},{match:"Complaints",outcome:"Owner escalation",reason:"Repeated follow-ups, negative sentiment, senior attention requests."},{match:"Missing documents",outcome:"Follow-up draft",reason:"Receipts, attachments, payroll, or document gaps."},{match:"Scheduling",outcome:"Offer available times",reason:"Appointment changes, time windows, reschedule language."}]},te={schemaVersion:dt,emails:ea.map(Is),categories:structuredClone(Es),employees:structuredClone(Ds),rules:structuredClone(Cs),drafts:[],tasks:[],composeDrafts:[],preferencesByAccount:{},settings:{productName:"Courio",mode:"Simple",language:"en",companyName:"Demo PME Inc.",defaultMode:"Observation only",escalationRecipient:"owner@company.ca",confidenceThreshold:"80",observationDays:"7",allowLowRiskBulkApproval:"Yes",approvalRequired:!0,autoSend:!1},completedActions:[],deletedEmployeeIds:[],deletedRuleIds:[]},m=Fs();let D=Us(),pe=ct();const y=(t=550)=>new Promise(e=>setTimeout(e,t));function v(t){return structuredClone(t)}function Is(t){const{status:e,workflowStatus:a,reviewed:o,...n}=v(t);return{...n,archivedAt:n.archivedAt||null,archiveReason:n.archiveReason||"",workflowState:b.NEEDS_REVIEW}}function Fs(){try{const t=window.localStorage.getItem(Ce);if(!t)return v(te);const e=JSON.parse(t),a=xs(e);return window.localStorage.setItem(Ce,JSON.stringify(a)),a}catch{return v(te)}}function xs(t){const e=t.deletedEmployeeIds||[],a=t.deletedRuleIds||[],o=Ms(t.categories),n=je(te.emails,t.emails),i=Array.isArray(t.drafts)?t.drafts:[],r=qs(i),c=n.map(u=>{const w=r.find(x=>(x.emailId||x.id)===u.id),k=Ns(u,w,t.schemaVersion),{status:S,workflowStatus:C,reviewed:ee,...j}=u;return{...j,archivedAt:j.archivedAt||null,archiveReason:j.archiveReason||"",workflowState:k}}),g=new Map(c.map(u=>[u.id,u])),p=r.filter(u=>Ls(u,g.get(u.emailId||u.id))).map(Os);return{...v(te),...t,schemaVersion:dt,emails:c,categories:o,employees:je(te.employees.filter(u=>!e.includes(u.id)),(t.employees||[]).filter(u=>!e.includes(u.id))),rules:je(te.rules.filter(u=>!a.includes(u.id)),(t.rules||[]).filter(u=>!a.includes(u.id))),drafts:p,tasks:Array.isArray(t.tasks)?t.tasks.map(be):[],composeDrafts:Array.isArray(t.composeDrafts)?t.composeDrafts.map(ta):[],preferencesByAccount:Object.fromEntries(Me.map(u=>{var w;return[u.id,Ie((w=t.preferencesByAccount)==null?void 0:w[u.id])]})),settings:{...te.settings,...t.settings||{}},completedActions:Array.isArray(t.completedActions)?t.completedActions:[],deletedEmployeeIds:e,deletedRuleIds:a}}function Ms(t=[]){return je(te.categories,t).map(a=>({description:"",color:"default",active:!0,system:!1,...a}))}function Ns(t,e,a){return a>=dt&&Rs.has(t.workflowState)?t.workflowState:t.status==="Done"||t.workflowStatus==="Completed"||(e==null?void 0:e.status)==="Ready for human send"||(e==null?void 0:e.status)==="Approved"?b.COMPLETED:(e==null?void 0:e.status)==="Saved"?b.DRAFT_SAVED:e!=null&&e.reviewed?b.DRAFT_REVIEWED:e!=null&&e.generated||(e==null?void 0:e.status)==="Generated"?b.DRAFT_GENERATED:t.reviewed||t.reviewedAt?b.READY_FOR_DRAFT:b.NEEDS_REVIEW}function qs(t){const e=new Map;for(const a of t){const o=(a==null?void 0:a.emailId)||(a==null?void 0:a.id);if(!o)continue;const n=e.get(o);(!n||Nt(a)>Nt(n))&&e.set(o,a)}return[...e.values()]}function Nt(t){return({"Needs approval":0,Generated:1,Saved:3,"Ready for human send":4,Approved:4}[t.status]||0)+(t.generated?1:0)+(t.reviewed?1:0)}function Ls(t,e){return!t||!e?!1:!!(t.generated||t.reviewed||["Generated","Saved","Ready for human send","Approved"].includes(t.status)||[b.DRAFT_GENERATED,b.DRAFT_REVIEWED,b.DRAFT_SAVED,b.COMPLETED].includes(e.workflowState))}function Os(t){const{generated:e,reviewed:a,status:o,...n}=v(t);return{...n,emailId:t.emailId||t.id}}function be(t){const e=t.followUp&&typeof t.followUp=="object"?t.followUp:{},a=!!(e.enabled&&e.dueAt);return{id:t.id||`task-${t.emailId||Date.now()}`,emailId:t.emailId||"",origin:t.origin||null,title:t.title||"Review email",description:t.description||"",priority:t.priority||"Medium",category:t.category||"General",assignedTo:t.assignedTo||"",collaboratorIds:Array.isArray(t.collaboratorIds)?[...new Set(t.collaboratorIds.filter(o=>typeof o=="string"&&o!==t.assignedTo))]:[],parentTaskId:t.parentTaskId||null,requestedByEmployeeId:t.requestedByEmployeeId||null,status:t.status==="Done"?"Done":"Open",notes:t.notes||"",dueAt:t.dueAt||null,followUp:{enabled:a,dueAt:a?e.dueAt:null,createdAt:a?e.createdAt||t.createdAt||new Date().toISOString():null,updatedAt:a?e.updatedAt||t.updatedAt||new Date().toISOString():null},history:Array.isArray(t.history)?t.history:[],createdAt:t.createdAt||new Date().toISOString(),updatedAt:t.updatedAt||t.createdAt||new Date().toISOString(),completedAt:t.completedAt||null}}function ta(t){var e,a,o,n;return{ownerEmployeeId:t.ownerEmployeeId||"emp-1",id:t.id||`compose-${Date.now()}`,to:((e=t.to)==null?void 0:e.trim())||"",cc:((a=t.cc)==null?void 0:a.trim())||"",subject:((o=t.subject)==null?void 0:o.trim())||"",body:((n=t.body)==null?void 0:n.trim())||"",attachments:Array.isArray(t.attachments)?t.attachments.map(i=>({id:i.id||`attachment-${Date.now()}`,name:i.name||"Local attachment",type:i.type||"Unknown",size:Number(i.size)||0})):[],status:"Draft",createdAt:t.createdAt||new Date().toISOString(),updatedAt:t.updatedAt||t.createdAt||new Date().toISOString()}}function js(t){const e=ta(t);if(!e.to)throw new Error("Recipient is required.");if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.to))throw new Error("Enter a valid recipient email.");if(!e.subject)throw new Error("Subject is required.");if(!e.body)throw new Error("Message body is required.");return e}function je(t,e=[]){const a=Array.isArray(e)?e:[],o=t.map(i=>{const r=a.find(c=>c.id===i.id);return r?{...i,...r}:v(i)}),n=a.filter(i=>!t.some(r=>r.id===i.id));return[...o,...n.map(v)]}function E(){window.localStorage.setItem(Ce,JSON.stringify(m))}function Us(){try{const t=window.localStorage.getItem(nt);if(!t)return null;const e=JSON.parse(t);return Me.find(a=>a.id===e.id)||null}catch{return null}}function aa(){if(!D){window.localStorage.removeItem(nt);return}window.localStorage.setItem(nt,JSON.stringify({id:D.id}))}function q(){return(D==null?void 0:D.role)==="Employee"}function U(){return(D==null?void 0:D.employeeId)||""}function _(){if(D&&D.role!=="Admin")throw new Error("This demo account cannot access admin-only actions.")}function ct(){try{const t=window.localStorage.getItem(`${He}.${(D==null?void 0:D.id)||"signed-out"}`);return t?JSON.parse(t):[{id:"assistant-welcome",role:"assistant",text:"Hi, I can help with urgent emails, invoices, drafts, digest updates, rules, and explanations."}]}catch{return[{id:"assistant-welcome",role:"assistant",text:"Hi, I can help with urgent emails, invoices, drafts, digest updates, rules, and explanations."}]}}function Ps(){window.localStorage.setItem(`${He}.${(D==null?void 0:D.id)||"signed-out"}`,JSON.stringify(pe))}function Hs(){return m.settings.allowLowRiskBulkApproval!=="No"}function Re(t){return t.suggestedDisposition==="information_only"&&t.urgency==="Low"}function sa(t){return Re(t)&&t.workflowState===b.READY_FOR_DRAFT&&!t.archivedAt&&!Se(t.id)}function V(t){return t.workflowState===b.COMPLETED||t.workflowState===b.NO_REPLY_NEEDED}function ut(t){const e=m.emails.find(a=>a.id===(t.emailId||t.id));return(e==null?void 0:e.workflowState)===b.DRAFT_SAVED}function _e(t){return{[b.NEEDS_REVIEW]:"Review required",[b.READY_FOR_DRAFT]:"Draft needed",[b.DRAFT_GENERATED]:"Draft generated",[b.DRAFT_REVIEWED]:"Draft in review",[b.DRAFT_SAVED]:"Draft saved",[b.COMPLETED]:"Ready for human send",[b.NO_REPLY_NEEDED]:"Reviewed - no reply needed"}[t]||"Review required"}function oa(t){return{[b.DRAFT_GENERATED]:"Generated",[b.DRAFT_REVIEWED]:"In review",[b.DRAFT_SAVED]:"Saved",[b.COMPLETED]:"Ready for human send"}[t]||"No draft"}function B(t,e={}){m.completedActions.unshift({id:`action-${Date.now()}-${Math.random().toString(16).slice(2)}`,type:t,completedAt:new Date().toISOString(),...e}),m.completedActions=m.completedActions.slice(0,50)}function na(t,e){t.workflowState=b.COMPLETED,e.approvedAt=new Date().toISOString(),e.updatedAt=e.approvedAt,B("draft-approved",{emailId:t.id,draftId:e.id,label:`Draft approved for human send; not sent: ${t.subject}`})}function ae(t){const e=m.emails.find(c=>c.id===(t.emailId||t.id)),a=V(e||{})?"Done":"Open",o=V(e||{}),n=(e==null?void 0:e.workflowState)===b.DRAFT_SAVED,i=n&&!q(),r=oa(e==null?void 0:e.workflowState);return{...t,sourceEmailStatus:a,sourceWorkflowStatus:_e(e==null?void 0:e.workflowState),approvalState:o?"ready_for_human_send":(e==null?void 0:e.workflowState)===b.DRAFT_SAVED?"saved":(e==null?void 0:e.workflowState)===b.DRAFT_GENERATED?"generated":"needs_review",status:r,statusLabel:r,isReadyForHumanSend:o,canApprove:i,awaitingApproval:n,canSelectForBulkApproval:i,approvalBlocker:i?"":q()&&n?"An admin must approve this draft.":o?"Source email is completed.":"Review and save this draft before approving."}}function fe(t){const e=Se(t.id),a=t.workflowState===b.NO_REPLY_NEEDED,o=!a&&(!Re(t)||!!e),n=!!e,i=t.workflowState===b.COMPLETED,r=V(t),c=t.workflowState!==b.NEEDS_REVIEW;return{...t,automationSuggestions:la(t).map(g=>({id:g.id,title:g.title,category:g.category,explanation:g.explanation,description:g.desc})),archived:!!t.archivedAt,reviewed:c,noReplyNeeded:a,noReplySuggested:Re(t)&&!n&&!r,canMarkNoReply:sa(t),canReopenNoReply:a&&!t.archivedAt,status:r?"Done":"Open",workflowStatus:_e(t.workflowState),requiresDraft:o,draftId:n&&(e==null?void 0:e.id)||null,draftStatus:n?oa(t.workflowState):null,draftStatusLabel:n?ae(e).statusLabel:"No draft",draftReadyForHumanSend:i,workflowLabel:_e(t.workflowState),canComplete:!1,completeActionLabel:"Completed",draftActionLabel:r?"View approved draft":n?"Edit draft":"Generate draft",canGenerateDraft:t.workflowState===b.READY_FOR_DRAFT&&!n,canOpenDraft:n,canArchive:!n||r,archiveBlocker:n&&!r?"Finish the active draft before removing this email from the demo inbox.":"",completionBlocker:c?r?"This workflow is complete.":n?"Open the existing draft to continue this workflow.":"":"Review this email before generating a draft."}}function ia(t){return t.urgency==="High"||t.category===z("cat-client-complaint","Client complaint")?"High":t.urgency==="Low"?"Low":"Medium"}function qt(t){return{High:0,Medium:1,Low:2}[t.priority]??3}function ra(t){const e=new Date().toISOString();return be({id:`task-${t.id}`,origin:"automatic_email",emailId:t.id,title:t.suggestedAction||`Review ${t.subject}`,description:t.summary||t.explanation||t.subject,priority:ia(t),category:t.category,assignedTo:t.assignedTo||"",status:"Open",notes:"",history:[{at:e,label:"Task created from local inbox item"}],createdAt:e,updatedAt:e})}function Ve(){m.tasks=m.tasks.filter(e=>{var n;const a=m.emails.find(i=>i.id===e.emailId);return!a||!Re(a)||Se(a.id)?!0:!(e.id===`task-${a.id}`&&e.origin!=="manual"&&e.history.length===1&&e.history[0].label==="Task created from local inbox item"&&e.status==="Open"&&!e.notes&&!e.dueAt&&!((n=e.followUp)!=null&&n.enabled)&&!e.collaboratorIds.length&&e.assignedTo===(a.assignedTo||"")&&e.createdAt===e.updatedAt)});const t=new Set(m.tasks.map(e=>e.emailId));Ye().filter(e=>!V(e)&&!Re(e)).forEach(e=>{t.has(e.id)||m.tasks.push(ra(e))}),m.tasks=m.tasks.map(e=>{const a=m.emails.find(o=>o.id===e.emailId);return be(a?{...e,title:e.title||a.suggestedAction,description:e.description||a.summary||a.explanation,priority:e.priority||ia(a),assignedTo:e.assignedTo,category:a.category}:e)})}function ke(t){var c;const e=m.emails.find(g=>g.id===t.emailId),a=m.employees.find(g=>g.id===t.assignedTo)||null,o=(c=t.followUp)!=null&&c.enabled?t.followUp.dueAt:null,n=Array.isArray(t.history)?t.history:[],i=n.at(-1)||null,r=!!(o&&t.status!=="Done"&&new Date(o).getTime()<Date.now());return{...t,assignedEmployees:m.employees.filter(g=>$e(t).includes(g.id)).map(v),canManageCollaborators:!q()||t.assignedTo===U(),overdue:t.status!=="Done"&&!!t.dueAt&&t.dueAt<Lt(),dueToday:t.status!=="Done"&&t.dueAt===Lt(),followUp:{...t.followUp,status:o?r?"overdue":"scheduled":"not_scheduled",overdue:r},historySummary:{count:n.length,latestLabel:(i==null?void 0:i.label)||"",latestAction:(i==null?void 0:i.action)||null,latestAt:(i==null?void 0:i.at)||null},history:n.map(g=>({...g,canRestore:!!g.before&&(!q()||$e(t).includes(U())&&!Object.hasOwn(g.before,"assignedTo")&&(!Object.hasOwn(g.before,"collaboratorIds")||t.assignedTo===U()))})),assignedEmployee:a?v(a):null,sourceEmail:e&&pt(e)?fe(e):null,hiddenFromInbox:!!(e!=null&&e.archivedAt),sourceCompleted:e?V(e):!1}}function P(t){const e=m.emails.find(a=>a.id===t);if(!e)throw new Error("Email not found.");if(!pt(e))throw N("forbidden");return e}function Ge(t){const e=m.drafts.find(a=>a.id===t);if(!e)throw new Error("Draft not found.");return P(e.emailId||e.id),e}function Se(t){return m.drafts.find(e=>(e.emailId||e.id)===t)}function Ye(){return m.emails.filter(t=>t.archivedAt?!1:q()?t.assignedTo===U():!0)}function pt(t){return!!t&&(!q()||t.assignedTo===U())}function mt(){return m.drafts.filter(t=>pt(m.emails.find(e=>e.id===(t.emailId||t.id))))}function $e(t){return[t.assignedTo,...t.collaboratorIds||[]].filter(Boolean)}function Lt(){const t=new Date;return`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`}function la(t){return m.rules.filter(e=>e.on&&((e.matches||[]).includes(t.subject)||e.category===t.category))}async function _s(t,e){const a=P(t),o=la(a).find(n=>n.id===e);if(!o)throw N("forbidden");return ka(t,o.category)}function gt(t){const e=m.employees.find(a=>a.id===t);if(!e)throw new Error("Employee not found.");return e}function da(t){const e=m.categories.find(a=>a.id===t);if(!e)throw new Error("Category not found.");return e}function ca(t){return m.categories.find(e=>e.name.toLowerCase()===String(t||"").trim().toLowerCase())}function ua(t,e=null){var n,i;const a={name:((n=t.name)==null?void 0:n.trim())||"",description:((i=t.description)==null?void 0:i.trim())||"",color:t.color||"default"};if(!a.name)throw new Error("Category name is required.");if(m.categories.find(r=>r.id!==e&&r.name.toLowerCase()===a.name.toLowerCase()))throw new Error("A category with this name already exists.");return a}function Bs(t,e){m.emails.forEach(a=>{a.category===t&&(a.category=e)}),m.rules.forEach(a=>{a.category===t&&(a.category=e)})}function z(t,e){var a;return((a=m.categories.find(o=>o.id===t))==null?void 0:a.name)||e}function Ws(){const t={"Client complaint":z("cat-client-complaint","Client complaint"),Accounting:z("cat-accounting","Accounting"),Sales:z("cat-sales","Sales"),Documents:z("cat-documents","Documents"),"Missing documents":z("cat-missing-documents","Missing documents"),Scheduling:z("cat-scheduling","Scheduling"),General:z("cat-general","General")},e=v(Ts);return e.mailboxes=e.mailboxes.map(a=>({...a,categories:a.categories.map(o=>t[o]||o)})),e}function pa(t,e=null){var n,i,r,c;const a={name:((n=t.name)==null?void 0:n.trim())||"",email:((i=t.email)==null?void 0:i.trim().toLowerCase())||"",title:((r=t.title)==null?void 0:r.trim())||"",department:((c=t.department)==null?void 0:c.trim())||""};if(!a.name)throw new Error("Employee name is required.");if(!a.email)throw new Error("Employee email is required.");if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(a.email))throw new Error("Enter a valid employee email address.");if(!a.title)throw new Error("Employee title is required.");if(!a.department)throw new Error("Employee department is required.");if(m.employees.find(g=>{var p;return g.id!==e&&((p=g.email)==null?void 0:p.trim().toLowerCase())===a.email}))throw new Error("An employee with this email already exists.");return a}function zs(){const t=Ye().filter(r=>!V(r)),e=mt().map(ae),a=e.filter(r=>r.isReadyForHumanSend).length,o=e.filter(r=>r.awaitingApproval).length,n=r=>t.filter(c=>c.category===r),i=t.filter(r=>r.urgency==="High");return{generatedAt:new Date().toLocaleTimeString([],{hour:"numeric",minute:"2-digit"}),headline:`${t.length} open emails need review. ${i.length} are urgent and ${o} drafts need approval.`,urgentItems:i.map(r=>r.subject),draftsAwaitingApproval:o,readyForHumanSend:a,invoices:n(z("cat-accounting","Accounting")).map(r=>r.subject),missingDocuments:n(z("cat-missing-documents","Missing documents")).map(r=>r.subject),quoteRequests:n(z("cat-sales","Sales")).map(r=>r.subject),clientComplaints:n(z("cat-client-complaint","Client complaint")).map(r=>r.subject),recommendedActions:[i.length?"Review urgent client items first.":"No urgent client escalations are open.",o?"Review drafts before marking them ready for human send.":"No drafts are waiting for approval.","Keep observation mode on while this remains a demo."]}}function Vs(){_();const t=m.rules.find(a=>/invoice/i.test(`${a.title} ${a.desc}`));if(t)return t.on=!0,E(),t;const e={id:`rule-${Date.now()}`,title:"Invoice intake assistant",desc:"Flag invoice messages, payment questions, due dates, and supplier follow-ups for accounting review.",category:z("cat-accounting","Accounting"),confidence:84,explanation:"Courio would look for invoice numbers, balance-due wording, supplier names, and payment timing.",impact:"Created locally from the assistant chat. It only previews matches in this prototype.",matches:m.emails.filter(a=>a.category===z("cat-accounting","Accounting")).map(a=>a.subject),on:!0};return m.rules.push(e),E(),e}function Gs(t){return t.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9\s]/g," ").replace(/\s+/g," ")}function Ys(t,e){const a=Array.from({length:e.length+1},(o,n)=>n);for(let o=1;o<=t.length;o+=1){let n=a[0];a[0]=o;for(let i=1;i<=e.length;i+=1){const r=a[i],c=t[o-1]===e[i-1]?0:1;a[i]=Math.min(a[i]+1,a[i-1]+1,n+c),n=r}}return a[e.length]}function Qs(t,e){if(t.length!==e.length)return!1;const a=[];for(let o=0;o<t.length;o+=1)t[o]!==e[o]&&a.push(o);return a.length===2&&a[1]===a[0]+1&&t[a[0]]===e[a[1]]&&t[a[1]]===e[a[0]]}function ne(t,e){return e.some(a=>t===a||t.split(" ").length===a.split(" ").length&&(Qs(t,a)||a.length>=4&&Ys(t,a)<=1))}function Js(t,e={}){const a=Gs(t).replace(/^(please |s il te plait |svp )/,"").replace(/^(show |open |go to |affiche |afficher |montre |montrer |ouvre |ouvrir )/,"").replace(/^(the |les |la |le |l )/,""),o=Ye(),n=o.filter(u=>!V(u)&&u.urgency==="High").length,i=z("cat-accounting","Accounting"),r=o.filter(u=>!V(u)&&u.category===i).length,c=mt().map(ae).filter(u=>u.awaitingApproval).length,g=ne(a,["invoice","invoices","invoice emails","accounting","factures","courriels de facture"]),p=ne(a,["invoice rule","create invoice rule","regle de facture","creer une regle de facture"]);if(ne(a,["urgent","urgency","urgent emails","urgent messages","courriels urgents","urgents"]))return{text:`${n} urgent emails are open. I switched Triage to urgent items.`,action:{type:"show_triage",filter:"urgent"}};if(ne(a,["triage","inbox","boite de reception"]))return{text:"I opened the full Triage inbox.",action:{type:"show_triage",filter:"all"}};if(p)return{text:"Invoice rule is ready in observation mode. It is still fake/local and will not touch a mailbox.",action:{type:"show_rule",ruleId:Vs().id}};if(g)return{text:`${r} invoice-related emails are open. I switched Triage to ${i}.`,action:{type:"show_triage",filter:"invoices"}};if(ne(a,["draft","drafts","approval","draft approval","draft needing approval","drafts needing approval","brouillons","brouillons a approuver"]))return{text:`${c} saved drafts need human approval. I opened the Drafts queue.`,action:{type:"show_drafts",filter:"needs_approval"}};if(ne(a,["digest","morning digest","generate digest","regenerate digest","resume","generer le resume"]))return{text:"I regenerated the morning digest from local demo data.",action:{type:"generate_digest"}};if(ne(a,["explain","explanation","why","explain this email","pourquoi","explique ce courriel"])){if(!e.selectedEmailId)return{text:"Open an email in Triage first, then ask me to explain it. I will show the flagged reason."};const u=fe(P(e.selectedEmailId));return{text:`Courio flagged "${u.subject}" because: ${u.explanation}`,action:{type:"explain_email",emailId:u.id}}}return ne(a,["reset","restart","reset demo","reset demo data","reinitialiser la demo"])?{text:"I can reset the fake demo data now. The page will reload so defaults come back clean.",action:{type:"reset_demo_data"}}:{text:ot[e.language==="fr"?"fr":"en"].unsupported}}async function Y(){return await y(),v(Ye().map(fe))}async function Ks(){return await y(150),v(Me)}async function ma(){return await y(150),v(D)}async function Zs(t){await y(250);const e=Me.find(a=>a.id===t);if(!e)throw new Error("Demo account not found.");return D=e,pe=ct(),aa(),v(D)}async function Xs(){return await y(150),D=null,pe=ct(),aa(),null}async function O(){return await y(350),Ve(),E(),v(m.tasks.map(ke).filter(t=>!t.hiddenFromInbox||t.status!=="Done").filter(t=>!q()||$e(t).includes(U())).sort((t,e)=>qt(t)-qt(e)||(t.status==="Done")-(e.status==="Done")||t.createdAt.localeCompare(e.createdAt)))}async function it(){return await y(350),v(m.employees)}async function ga(){return await y(300),v(m.categories)}async function re(){return await y(400),q()?[]:v(m.rules)}async function fa(){return await y(350),Ws()}async function Q(){return await y(700),v(zs())}async function me(){return await y(400),v(mt().map(ae))}async function ft(){return await y(350),v(m.composeDrafts.filter(t=>!q()||t.ownerEmployeeId===U()).sort((t,e)=>e.updatedAt.localeCompare(t.updatedAt)))}async function eo(t){await y(500);const e=js(t),a=m.composeDrafts.findIndex(i=>i.id===e.id);if(a!==-1&&q()&&m.composeDrafts[a].ownerEmployeeId!==U())throw N("forbidden");const o=new Date().toISOString(),n={...e,ownerEmployeeId:a===-1?U()||"emp-1":m.composeDrafts[a].ownerEmployeeId,id:a===-1?`compose-${Date.now()}`:e.id,createdAt:a===-1?o:m.composeDrafts[a].createdAt,updatedAt:o};return a===-1?m.composeDrafts.unshift(n):m.composeDrafts[a]=n,B("compose-draft-saved",{draftId:n.id,label:`Compose draft saved: ${n.subject}`}),E(),v(n)}async function Te(t){await y(450);const e=Ge(t),a=P(e.emailId||e.id);return a.workflowState===b.DRAFT_GENERATED&&(a.workflowState=b.DRAFT_REVIEWED,e.reviewedAt=new Date().toISOString(),e.updatedAt=e.reviewedAt,E()),v({...ae(e),sourceEmail:{id:a.id,subject:a.subject,sender:a.sender,senderEmail:a.senderEmail,body:a.body,suggestedAction:a.suggestedAction,confidence:a.confidence,urgency:a.urgency,status:V(a)?"Done":"Open",workflowStatus:_e(a.workflowState)}})}async function to(t){await y(350),P(t);const e=Se(t);return e?Te(e.id):null}function ue(t){const e=new Error(t);return e.translationKey=`preferences.${t}`,e}function va(t){if(t===null)return!0;if(typeof t!="string"||t.length>7e5)return!1;const e=/^data:image\/(png|jpeg|webp);base64,([A-Za-z0-9+/]+={0,2})$/.exec(t);if(!e)return!1;try{const a=atob(e[2]);return e[1]==="png"?a.startsWith(`PNG\r

`):e[1]==="jpeg"?a.startsWith("ÿØÿ"):a.startsWith("RIFF")&&a.slice(8,12)==="WEBP"}catch{return!1}}function Ie(t={}){const e=t&&typeof t=="object"?t:{};return{theme:["light","dark","system"].includes(e.theme)?e.theme:"light",language:["en","fr"].includes(e.language)?e.language:"workspace",backgroundImage:va(e.backgroundImage)?e.backgroundImage:null,backgroundDim:Number.isInteger(e.backgroundDim)&&e.backgroundDim>=50&&e.backgroundDim<=95?e.backgroundDim:80,labelColors:Object.fromEntries(Object.entries(e.labelColors||{}).filter(([a,o])=>/^[a-zA-Z0-9_-]+$/.test(a)&&typeof o=="string"&&/^#[0-9a-f]{6}$/i.test(o))),hiddenCategoryIds:Array.isArray(e.hiddenCategoryIds)?[...new Set(e.hiddenCategoryIds.filter(a=>typeof a=="string"))]:[]}}async function ha(){var t;return v(Ie((t=m.preferencesByAccount)==null?void 0:t[D==null?void 0:D.id]))}async function ya(t={}){var g;const e=D==null?void 0:D.id;if(await y(250),!e||(D==null?void 0:D.id)!==e)throw ue("sessionRequired");const a=["theme","language","backgroundImage","backgroundDim","labelColors","hiddenCategoryIds"];if(!t||typeof t!="object"||Object.keys(t).some(p=>!a.includes(p)))throw ue("invalid");const n={...Ie((g=m.preferencesByAccount)==null?void 0:g[e]),...t};if(!["workspace","en","fr"].includes(n.language)||!["light","dark","system"].includes(n.theme)||!Number.isInteger(n.backgroundDim)||n.backgroundDim<50||n.backgroundDim>95)throw ue("invalid");if(!va(n.backgroundImage))throw ue("invalidImage");const i=new Set(m.categories.map(p=>p.id));if(!n.labelColors||typeof n.labelColors!="object"||Array.isArray(n.labelColors)||Object.entries(n.labelColors).some(([p,u])=>!i.has(p)||typeof u!="string"||!/^#[0-9a-f]{6}$/i.test(u))||!Array.isArray(n.hiddenCategoryIds)||n.hiddenCategoryIds.some(p=>!i.has(p)))throw ue("invalid");const r=Ie(n),c={...m.preferencesByAccount,[e]:r};try{window.localStorage.setItem(Ce,JSON.stringify({...m,preferencesByAccount:c}))}catch{throw ue("storageFull")}return m.preferencesByAccount=c,v(r)}async function ao(){return ya(Ie())}async function wa(){return await y(250),v(m.settings)}async function so(t){return await y(450),_(),m.settings={...m.settings,...t,language:t.language?t.language==="fr"?"fr":"en":m.settings.language,approvalRequired:!0,autoSend:!1},E(),v(m.settings)}async function oo(){return await y(350),_(),window.localStorage.removeItem(Ce),window.localStorage.removeItem(He),Me.forEach(t=>window.localStorage.removeItem(`${He}.${t.id}`)),v(te)}async function ba(t){await y();const e=P(t);return e.workflowState===b.NEEDS_REVIEW&&(e.workflowState=b.READY_FOR_DRAFT,e.reviewedAt=new Date().toISOString(),E()),v({...fe(e),messages:e.thread})}async function no(t){return await y(700),P(t).summary}async function io(t){var i;await y(750);const e=P(t);if(V(e))throw new Error("This email is done. Reopen it before creating or changing a draft.");if(e.workflowState===b.NEEDS_REVIEW)throw new Error("Review this email before generating a draft.");const a=Se(t);if(a)return v(ae(a));if(e.workflowState!==b.READY_FOR_DRAFT)throw new Error("This workflow is not ready to generate a new draft.");const o=new Date().toISOString(),n={id:`draft-${t}`,emailId:t,title:e.suggestedAction,source:e.subject,text:((i=ea.find(r=>r.id===e.id))==null?void 0:i.draft)||e.draft,confidence:e.confidence,risk:e.urgency==="High"?"High":"Low",createdAt:o,updatedAt:o};return m.drafts.push(n),e.workflowState=b.DRAFT_GENERATED,E(),v(ae(n))}async function ro(t,e){if(await y(),!e||e.trim().length<10)throw new Error("Draft is too short to save.");const a=Ge(t),o=P(a.emailId||a.id);if(V(o))throw new Error("This email is done. Reopen it before editing the draft.");if(![b.DRAFT_REVIEWED,b.DRAFT_SAVED].includes(o.workflowState))throw new Error("Review this draft before saving it.");return a.text=e,a.updatedAt=new Date().toISOString(),o.workflowState=b.DRAFT_SAVED,E(),v(ae(a))}async function lo(t){await y(),_();const e=Ge(t),a=P(e.emailId||e.id);if(V(a))throw new Error("This email is done. Reopen it before changing draft approval.");if(!ut(e))throw new Error("Review this draft before approving.");return na(a,e),E(),v(ae(e))}async function $a(t){if(await y(650),_(),!t.length)throw new Error("Select at least one draft first.");const e=t.map(o=>{const n=Ge(o),i=P(n.emailId||n.id);return{draft:n,email:i}}).filter(({email:o})=>!V(o));if(!e.length)throw new Error("No selected drafts could be approved.");if(e.some(({draft:o})=>!ut(o)))throw new Error("Review this draft before approving.");const a=[];for(const{draft:o,email:n}of e)na(n,o),a.push(o.id);return E(),v({approved:a})}async function co(){if(await y(700),_(),!Hs())throw new Error("Low-risk bulk approval is disabled by workspace settings.");const t=m.drafts.filter(e=>e.risk!=="High").filter(ut).filter(e=>!V(P(e.emailId||e.id))).map(e=>e.id);if(!t.length)throw new Error("No low-risk drafts are awaiting approval.");return $a(t)}async function Ot(t){await y(450),_();const e=m.rules.find(a=>a.id===t);if(!e)throw new Error("Rule not found.");return e.on=!e.on,E(),v(e)}async function uo(t,e){var o,n;await y(500),_();const a=m.rules.find(i=>i.id===t);if(!a)throw new Error("Rule not found.");if(!((o=e.title)!=null&&o.trim()))throw new Error("Rule name is required.");if(!((n=e.desc)!=null&&n.trim()))throw new Error("Rule description is required.");if(e.category&&!ca(e.category))throw new Error("Choose an existing category before saving.");return a.title=e.title.trim(),a.desc=e.desc.trim(),a.category=e.category||a.category,E(),v(a)}async function po(t){await y(450),_();const e=m.rules.findIndex(o=>o.id===t);if(e===-1)throw new Error("Rule not found.");const[a]=m.rules.splice(e,1);return m.deletedRuleIds=[...new Set([...m.deletedRuleIds||[],t])],B("rule-deleted",{ruleId:a.id,label:`Rule deleted: ${a.title}`}),E(),v(a)}async function mo(t){await y(300);const e=P(t);if(!sa(e)){const a=new Error("Review an eligible informational email with no draft first.");throw a.translationKey="trust.noReplyBlocked",a}return e.workflowState=b.NO_REPLY_NEEDED,B("email-no-reply-needed",{emailId:t,label:`Reviewed; no reply needed: ${e.subject}`}),Ve(),E(),v(fe(e))}async function go(t){await y(300);const e=P(t);if(e.workflowState!==b.NO_REPLY_NEEDED||e.archivedAt){const a=new Error("This no-reply decision cannot be reopened.");throw a.translationKey="trust.noReplyBlocked",a}return e.workflowState=b.NEEDS_REVIEW,B("email-review-reopened",{emailId:t,label:`Reopened for review: ${e.subject}`}),E(),v(fe(e))}async function ka(t,e){if(await y(400),!e)throw new Error("Choose a category before saving.");if(!ca(e))throw new Error("Choose an existing category before saving.");const a=P(t);return a.category=e,E(),v(a)}async function fo(t,e="Removed from demo inbox"){await y(500);const a=[...new Set((t||[]).filter(Boolean))];if(!a.length)throw new Error("Choose at least one email to remove from the demo inbox.");const o=new Date().toISOString(),n=a.map(i=>{const r=P(i),c=Se(r.id),g=V(r);if(c&&!g)throw new Error("Finish active drafts before removing those emails from the demo inbox.");return r.archivedAt=o,r.archiveReason=e,r});return B("emails-archived",{emailIds:n.map(i=>i.id),label:`${n.length} email${n.length===1?"":"s"} removed from the demo inbox`}),E(),v(n.map(fe))}function N(t){const e=new Error(t);return e.code=t,e}function Qe(t){const e={};for(const a of["title","notes","priority","status","assignedTo","collaboratorIds","dueAt"])Object.hasOwn(t,a)&&(e[a]=t[a]);if("title"in e&&(e.title=String(e.title||"").trim(),!e.title))throw N("titleRequired");if("notes"in e&&(e.notes=String(e.notes||"").trim()),"priority"in e&&!["High","Medium","Low"].includes(e.priority))throw N("invalidPriority");if("status"in e&&!["Open","Done"].includes(e.status))throw N("invalidStatus");if("assignedTo"in e&&e.assignedTo&&!m.employees.some(a=>a.id===e.assignedTo))throw N("invalidAssignee");if("collaboratorIds"in e){if(!Array.isArray(e.collaboratorIds)||e.collaboratorIds.some(a=>!m.employees.some(o=>o.id===a)))throw N("invalidAssignee");e.collaboratorIds=[...new Set(e.collaboratorIds)]}if("dueAt"in e&&(e.dueAt=e.dueAt||null,e.dueAt&&(!/^\d{4}-\d{2}-\d{2}$/.test(e.dueAt)||Number.isNaN(Date.parse(e.dueAt))||new Date(e.dueAt).toISOString().slice(0,10)!==e.dueAt)))throw N("invalidDate");return e}function vt(t){const e=m.tasks.find(a=>a.id===t);if(!e)throw N("notFound");if(q()&&!$e(e).includes(U()))throw N("forbidden");return e}function ht(t,e,a="updated",o=null){("assignedTo"in e||"collaboratorIds"in e)&&(e.collaboratorIds=(e.collaboratorIds||t.collaboratorIds||[]).filter(r=>r!==(e.assignedTo??t.assignedTo)));const n={};for(const[r,c]of Object.entries(e))JSON.stringify(t[r])!==JSON.stringify(c)&&(n[r]=v(t[r]??null));if(!Object.keys(n).length)return;const i=new Date().toISOString();Object.assign(t,e),t.completedAt=t.status==="Done"?t.completedAt||i:null,t.updatedAt=i,t.history.push({id:crypto.randomUUID(),at:i,action:a,before:n,restoredEntryId:o,label:a==="restored"?"Task change restored":"Task updated"}),B(a==="restored"?"task-restored":e.status==="Done"?"task-completed":"task-updated",{taskId:t.id,emailId:t.emailId,label:`Task ${a}: ${t.title}`})}async function vo(t={}){await y(400);const e=Qe({title:t.title,notes:t.notes||"",priority:t.priority||"Medium",dueAt:t.dueAt,assignedTo:t.assignedTo??U(),collaboratorIds:t.collaboratorIds||[]});if(q()&&e.assignedTo!==U())throw N("forbidden");const a=be({...e,id:`task-${crypto.randomUUID()}`});return a.history.push({id:crypto.randomUUID(),at:a.createdAt,action:"created",label:"Task created"}),m.tasks.push(a),B("task-created",{taskId:a.id,label:`Task created: ${a.title}`}),E(),v(ke(a))}async function ho(t){await y(300);const e=P(t);if(q()&&e.assignedTo!==U())throw N("forbidden");let a=m.tasks.find(o=>o.emailId===t);if(a&&q()&&!$e(a).includes(U()))throw N("forbidden");return a||(a=ra(e),a.origin="manual",m.tasks.push(a),E()),v(ke(a))}async function yo(t,e){await y(300);const a=vt(t),o=a.history.find(i=>i.id===e);if(!(o!=null&&o.before))throw N("noSnapshot");if(q()&&Object.hasOwn(o.before,"assignedTo")||q()&&Object.hasOwn(o.before,"collaboratorIds")&&a.assignedTo!==U())throw N("forbidden");const n=Qe(o.before);return ht(a,n,"restored",e),E(),v(ke(a))}async function Be(t,e={}){await y(400),Ve();const a=vt(t),o=Qe(e);if(q()&&Object.hasOwn(o,"assignedTo")||q()&&Object.hasOwn(o,"collaboratorIds")&&a.assignedTo!==U())throw N("forbidden");return ht(a,o),E(),v(ke(a))}async function jt(t,e={}){var r;await y(400),Ve();const a=m.tasks.find(c=>c.id===t);if(!a)throw new Error("Task not found.");if(q()&&!$e(a).includes(U()))throw new Error("This demo employee can only update assigned tasks.");const o=!!e.enabled,n=new Date().toISOString();let i=null;if(o){const c=e.dueAt?new Date(`${e.dueAt}T17:00:00`):new Date(Date.now()+2592e5);if(Number.isNaN(c.getTime()))throw new Error("Choose a valid follow-up date.");i=c.toISOString()}return a.followUp={enabled:o,dueAt:i,createdAt:o?((r=a.followUp)==null?void 0:r.createdAt)||n:null,updatedAt:o?n:null},a.updatedAt=n,a.history=[...a.history||[],{at:n,label:o?`Follow-up scheduled for ${i.slice(0,10)}`:"Follow-up reminder removed"}],B(o?"follow-up-scheduled":"follow-up-removed",{taskId:a.id,emailId:a.emailId,dueAt:i,label:o?`Follow-up scheduled: ${a.title}`:`Follow-up removed: ${a.title}`}),E(),v(ke(a))}async function wo(t,e={}){await y(400);const a=vt(t),o=Qe({title:e.title,notes:e.notes||"",assignedTo:e.assignedTo,dueAt:e.dueAt,priority:a.priority});if(!o.assignedTo)throw N("invalidAssignee");const n=be({...o,id:`task-${crypto.randomUUID()}`,parentTaskId:a.id,requestedByEmployeeId:U()});return n.history.push({id:crypto.randomUUID(),at:n.createdAt,action:"created",label:"Follow-up task created"}),m.tasks.push(n),a.history.push({id:crypto.randomUUID(),at:n.createdAt,action:"followUpRequested",label:`Follow-up requested from ${gt(o.assignedTo).name}`}),B("task-follow-up-requested",{taskId:n.id,label:`Follow-up requested: ${n.title}`}),E(),v({id:n.id})}async function bo(t){await y(450),_();const e=ua(t),a={id:`cat-${Date.now()}`,...e,active:!0,system:!1};return m.categories.push(a),B("category-added",{categoryId:a.id,label:`Category added: ${a.name}`}),E(),v(a)}async function $o(t,e){await y(450),_();const a=da(t),o=ua(e,t),n=a.name;return Object.assign(a,o),n!==a.name&&Bs(n,a.name),B("category-updated",{categoryId:a.id,label:`Category updated: ${a.name}`}),E(),v(a)}async function ko(t){await y(400),_();const e=da(t);return e.active=!e.active,B("category-toggled",{categoryId:e.id,label:`${e.active?"Category restored":"Category archived"}: ${e.name}`}),E(),v(e)}async function So(t,e){await y(400),_(),e&&gt(e);const a=P(t);a.assignedTo=e;const o=m.tasks.find(n=>n.emailId===t);return o&&ht(o,{assignedTo:e}),E(),v(a)}async function Ao(t){await y(500),_();const e=pa(t),a={id:`employee-${Date.now()}`,...e};return m.employees.push(a),B("employee-added",{employeeId:a.id,label:`Employee added: ${a.name}`}),E(),v(a)}async function Eo(t,e){await y(500),_();const a=gt(t),o=pa(e,t);return Object.assign(a,o),B("employee-updated",{employeeId:a.id,label:`Employee updated: ${a.name}`}),E(),v(a)}async function Do(t){await y(500),_();const e=m.employees.findIndex(n=>n.id===t);if(e===-1)throw new Error("Employee not found.");const[a]=m.employees.splice(e,1);m.deletedEmployeeIds=[...new Set([...m.deletedEmployeeIds||[],t])];let o=0;return m.emails.forEach(n=>{n.assignedTo===t&&(n.assignedTo="",o+=1)}),m.tasks.forEach(n=>{n.collaboratorIds=(n.collaboratorIds||[]).filter(i=>i!==t),n.assignedTo===t&&(n.assignedTo="",n.updatedAt=new Date().toISOString(),n.history=[...n.history||[],{at:n.updatedAt,label:"Assigned employee was removed; task returned to Unassigned"}])}),B("employee-deleted",{employeeId:a.id,label:`Employee removed: ${a.name}. ${o} assigned emails returned to Unassigned.`}),E(),v(a)}async function M(){return await y(250),q()?[]:v(m.completedActions)}async function Sa(){return await y(150),v(pe)}async function Co(t,e={}){if(await y(500),!(t!=null&&t.trim()))throw new Error("Type a command first.");const a={id:`user-${Date.now()}`,role:"user",text:t.trim()},o=Js(t,e),n={id:`assistant-${Date.now()}`,role:"assistant",text:o.text};return pe=[...pe,a,n].slice(-24),Ps(),v({messages:pe,action:o.action||null})}const Ro=document.querySelector("#app"),Aa=new Set(["dashboard","import","triage","tasks","compose","rules","drafts","admin","preferences","team"]),s={tab:"dashboard",demoAccounts:[],session:null,emails:[],categories:[],employees:[],rules:[],drafts:[],tasks:[],composeDrafts:[],settings:{companyName:"Demo PME Inc.",language:"en",mode:"Simple",defaultMode:"Observation only",escalationRecipient:"owner@company.ca",approvalRequired:!0,autoSend:!1},settingsForm:null,preferences:null,preferencesForm:null,loading:{emails:!0,rules:!0,drafts:!0},busy:{},selectedEmail:null,selectedCategory:null,selectedDraft:null,selectedRule:null,selectedEmployee:null,selectedTask:null,taskEditor:null,colleagueFollowUp:null,selectedDraftIds:[],confirmDialog:null,digest:null,triageFilter:"all",triageCategoryFilter:"all",taskAssigneeFilter:"all",taskFollowUpFilter:"all",draftFilter:"all",ruleQuery:"",assistantOpen:!1,assistantMessages:[],activity:[],setupPreview:null,selectedSetupMailboxId:"",composeForm:{id:"new",to:"",cc:"",subject:"",body:"",attachments:[]},summary:"",showExplanation:!1};Ro.innerHTML=`
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
`;function We(t,e){s.busy[t]=e,A()}async function $(t,e,a){try{We(t,!0),await e(),a&&ge(a)}catch(o){ge(o.translationKey?l(o.translationKey):o.code?l(`taskWork.${o.code}`):o.message||"Something went wrong in the mock workflow.",!0)}finally{We(t,!1)}}function h(t){return!!s.busy[t]}function ge(t,e=!1){const a=document.querySelector("#toast");a.textContent=t,a.classList.toggle("error",e),a.classList.add("show"),window.clearTimeout(a.dataset.timer),a.dataset.timer=window.setTimeout(()=>a.classList.remove("show"),2400)}function Ee(){var t;return((t=s.session)==null?void 0:t.role)==="Admin"}function Fe(){var t;return((t=s.session)==null?void 0:t.role)==="Employee"}function To(){return s.session?Fe()?new Set(["dashboard","triage","tasks","drafts","team","compose","preferences"]):Aa:new Set([])}function De(t){return To().has(t)}function K(t,e={}){if(!Aa.has(t)||!De(t))throw new Error("That Courio section is unavailable.");const a=s.tab;a==="preferences"&&t!=="preferences"&&(s.preferencesForm=null),t==="preferences"&&a!=="preferences"&&(s.preferencesForm=structuredClone(s.preferences)),a==="admin"&&t!=="admin"&&(s.settingsForm=null),t==="admin"&&a!=="admin"&&(s.settingsForm={...s.settings}),s.tab=t,e.triageFilter&&(s.triageFilter=e.triageFilter),e.draftFilter&&(s.draftFilter=e.draftFilter),e.closeDrawers!==!1&&(s.colleagueFollowUp=null,s.taskEditor=null,s.selectedTask=null,s.selectedEmail=null,s.selectedCategory=null,s.selectedDraft=null,s.selectedRule=null,s.selectedEmployee=null,s.summary="",s.showExplanation=!1),A()}async function we(t=(e=>(e=s.selectedEmail)==null?void 0:e.id)()){if(s.emails=await Y(),t){const a=s.emails.find(o=>o.id===t);s.selectedEmail=a?{...a,messages:a.thread}:null}}async function Ut(t=(e=>(e=s.selectedCategory)==null?void 0:e.id)()){const[a,o,n,i,r,c,g]=await Promise.all([ga(),Y(),re(),O(),Q(),fa(),M()]);s.categories=a,s.emails=o,s.rules=n,s.tasks=i,s.digest=r,s.setupPreview=c,s.activity=g,s.selectedCategory=t&&a.find(p=>p.id===t)||null}async function Pt(){s.colleagueFollowUp=null,s.composeForm={id:"new",to:"",cc:"",subject:"",body:"",attachments:[]},s.selectedDraftIds=[],s.taskAssigneeFilter="all",s.taskFollowUpFilter="all",s.settings=await wa(),s.rules=await re(),s.assistantMessages=await Sa(),s.preferencesForm=null,s.triageCategoryFilter="all",s.taskEditor=null,s.selectedTask=null;const[t,e,a,o,n,i,r,c]=await Promise.all([ma(),Y(),O(),me(),ft(),Q(),M(),ha()]);s.session=t,s.preferences=c,s.emails=e,s.tasks=a,s.drafts=o,s.composeDrafts=n,s.digest=i,s.activity=r,s.selectedEmail=null,s.selectedDraft=null,s.selectedRule=null,s.selectedEmployee=null,s.selectedCategory=null}function Io(t){return!!(t!=null&&t.isReadyForHumanSend)}function yt(){return s.settings.mode==="Advanced"}function Ea(t=""){const e=s.categories.filter(o=>o.active),a=t?s.categories.find(o=>o.name===t):null;return a&&!e.some(o=>o.id===a.id)?[...e,a]:e}function Fo(t,e){var a;return((a=s.categories.find(o=>o.id===t))==null?void 0:a.name)||e}function xo(){const t=new Map;return s.categories.forEach(e=>{e.active&&t.set(e.name,e)}),s.emails.forEach(e=>{t.has(e.category)||t.set(e.category,{id:`current-${e.category}`,name:e.category,active:!0})}),[...t.values()].sort((e,a)=>e.name.localeCompare(a.name))}function Da(){const t=Fo("cat-accounting","Accounting");return s.emails.filter(e=>s.triageCategoryFilter!=="all"&&e.category!==s.triageCategoryFilter?!1:s.triageFilter==="urgent"?e.status!=="Done"&&e.urgency==="High":s.triageFilter==="invoices"?e.status!=="Done"&&e.category===t:!0)}function xe(){return{id:"new",to:"",cc:"",subject:"",body:"",attachments:[]}}function Mo(t=0){return t<1024?`${t} B`:t<1024*1024?`${Math.round(t/1024)} KB`:`${(t/(1024*1024)).toFixed(1)} MB`}function Ca(){return s.settings.allowLowRiskBulkApproval!=="No"}function Je(){return s.settingsForm||{...s.settings}}function No(){return Je().mode==="Advanced"}function Ne(){var t;return ze(["en","fr"].includes((t=s.preferences)==null?void 0:t.language)?s.preferences.language:s.settings.language)}function l(t){return Xt(Ne())(t)}function Ra(t){if(!t)return"";const e=new Date(t);return Number.isNaN(e.getTime())?"":e.toLocaleString()}function rt(t){if(!t)return"";const e=new Date(t);return Number.isNaN(e.getTime())?"":e.toLocaleDateString()}function qo(){const t=Xt(Ne());document.querySelectorAll("[data-copy]").forEach(e=>{e.textContent=t(e.dataset.copy)})}async function Lo(){var t;try{const[e,a,o,n,i,r,c,g,p,u,w,k,S,C]=await Promise.all([Ks(),ma(),Y(),ga(),it(),re(),me(),O(),ft(),wa(),Q(),Sa(),M(),fa()]);s.demoAccounts=e,s.session=a,s.preferences=await ha(),s.preferencesForm=null,s.emails=o,s.categories=n,s.employees=i,s.rules=r,s.drafts=c,s.tasks=g,s.composeDrafts=p,s.settings={...s.settings,...u},s.settingsForm=null,s.digest=w,s.assistantMessages=k,s.activity=S,s.setupPreview=C,s.selectedSetupMailboxId=((t=C.mailboxes[0])==null?void 0:t.id)||"",s.session&&!De(s.tab)&&(s.tab=Fe()?"tasks":"dashboard")}catch(e){ge(e.message||"Could not load mock data.",!0)}finally{s.loading.emails=!1,s.loading.rules=!1,s.loading.drafts=!1,A()}}function A(){s.session&&!De(s.tab)&&(s.tab="dashboard");const t=ks(s.tab,Ne());qo(),document.querySelector("#pageTitle").textContent=t[0],document.querySelector("#pageSubtitle").textContent=t[1],document.querySelectorAll(".section").forEach(e=>{e.classList.toggle("active",e.id===s.tab)}),document.querySelectorAll(".nav button").forEach(e=>{e.hidden=!De(e.dataset.tab),e.classList.toggle("active",e.dataset.tab===s.tab)}),jo(),Ta(),Uo(),Po(),Ia(),xa(),Ko(),en(),Oo(),Ua(document.querySelector("#team"),s.employees,l),Ho(),_o(),Zo(),Bo(),bs({state:s,t:l,canAccessTab:De,navigateTo:K}),gs(s.session?s.preferences:null,s.categories)}function Oo(){const t=document.querySelector("#preferences");if(s.tab!=="preferences"||!s.session){t.replaceChildren();return}s.preferencesForm||(s.preferencesForm=structuredClone(s.preferences)),ps(t,{form:s.preferencesForm,categories:s.categories,t:l,busy:h("preferences")||h("preference-image"),onChange:e=>{s.preferencesForm=e},onImage:async e=>{var n,i;if(!e)return;const a=s.preferencesForm,o=(n=s.session)==null?void 0:n.id;We("preference-image",!0);try{const r=await ms(e);s.preferencesForm===a&&((i=s.session)==null?void 0:i.id)===o&&(a.backgroundImage=r)}catch{s.preferencesForm===a&&ge(l("preferences.invalidImage"),!0)}finally{We("preference-image",!1)}}})}function jo(){const t=s.emails.filter(a=>a.status!=="Done").length,e=s.digest;document.querySelector("#dashboard").innerHTML=`
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
        <div class="value">${s.drafts.filter(Io).length||0}</div>
        <div class="caption">Human approval still required to send</div>
      </div>
    </div>
    <div class="grid cols-2 stack-md">
      <div class="panel">
        <div class="panel-title"><h2>Morning digest</h2><span>${e?`Generated ${d(e.generatedAt)}`:"Loading..."}</span></div>
        <p class="subtitle">${e?d(e.headline):"Preparing a local demo digest from mock emails and drafts."}</p>
        ${e?`
          <table class="table stack-sm">
            <tr><td>Urgent items</td><td>${e.urgentItems.length?J(e.urgentItems):"None"}</td></tr>
            <tr><td>Invoices</td><td>${e.invoices.length?J(e.invoices):"None"}</td></tr>
            <tr><td>Missing documents</td><td>${e.missingDocuments.length?J(e.missingDocuments):"None"}</td></tr>
            <tr><td>Quote requests</td><td>${e.quoteRequests.length?J(e.quoteRequests):"None"}</td></tr>
            <tr><td>Client complaints</td><td>${e.clientComplaints.length?J(e.clientComplaints):"None"}</td></tr>
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
          ${((e==null?void 0:e.recommendedActions)||["Digest is loading."]).map(a=>`<tr><td><span class="badge lead">Action</span></td><td>${d(a)}</td></tr>`).join("")}
          ${yt()?`<tr><td><span class="badge invoice">Advanced</span></td><td>${s.rules.filter(a=>a.on).length} rules are currently enabled.</td></tr>`:""}
        </table>
      </div>
    </div>
  `}function Ta(){const t=s.setupPreview;if(!t){document.querySelector("#import").innerHTML='<div class="loading">Loading simulated setup preview...</div>';return}const e=t.mailboxes.find(a=>a.id===s.selectedSetupMailboxId)||t.mailboxes[0];document.querySelector("#import").innerHTML=`
    <div class="grid cols-2">
      <div class="panel">
        <div class="panel-title"><h2>${d(t.status)}</h2><span>No account connected</span></div>
        <div class="preview">${d(t.safetyNote)}</div>
        <div class="preview stack-xs">${d(t.futureNote)}</div>
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
              <strong>${d(a.name)}</strong>
              <span>${d(a.address)}</span>
              <small>${d(a.type)} - ${d(a.volume)}</small>
            </button>
          `).join("")}
        </div>
      </div>
    </div>

    <div class="grid cols-2 stack-md">
      <div class="panel">
        <div class="panel-title"><h2>${d(e.name)} preview</h2><span>${d(e.risk)}</span></div>
        <table class="table">
          <tr><td>Folders</td><td>${J(e.folders)}</td></tr>
          <tr><td>Labels/categories</td><td>${J(e.categories)}</td></tr>
          <tr><td>Frequent senders</td><td>${J(e.frequentSenders)}</td></tr>
          <tr><td>Shared inboxes</td><td>${J(e.sharedInboxes)}</td></tr>
          <tr><td>Recent threads</td><td>${J(e.recentThreads)}</td></tr>
        </table>
      </div>

      <div class="panel">
        <div class="panel-title"><h2>What Courio would scan</h2><span>Simulated only</span></div>
        <table class="table">
          ${t.scanItems.map(a=>`
            <tr>
              <td><span class="badge lead">${a.count}</span><br>${d(a.label)}</td>
              <td>${d(a.detail)}</td>
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
              <div><strong>${d(a.title)}</strong><p>${d(a.detail)}</p></div>
              <span class="badge ${o===0?"lead":"done"}">${d(a.state)}</span>
            </div>
          `).join("")}
        </div>
      </div>

      <div class="panel">
        <div class="panel-title"><h2>Suggested workflow preview</h2><span>Needs human review</span></div>
        <table class="table">
          ${t.workflowSuggestions.map(a=>`
            <tr>
              <td><strong>${d(a.match)}</strong><br><small>${d(a.reason)}</small></td>
              <td><span class="badge invoice">${d(a.outcome)}</span></td>
            </tr>
          `).join("")}
        </table>
        <div class="preview stack-sm">These are local examples. Courio does not create mailbox rules or send email from this page.</div>
      </div>
    </div>
  `}function Uo(){const t=Object.fromEntries(s.employees.map(r=>[r.id,r])),e=xo().filter(r=>{var c;return!((c=s.preferences)!=null&&c.hiddenCategoryIds.includes(r.id))||r.name===s.triageCategoryFilter}),a=Da(),o=a.filter(r=>r.canArchive),n=s.triageCategoryFilter==="all"?l("triage.allCategories"):s.triageCategoryFilter,i=s.loading.emails?'<div class="loading">Loading mock inbox...</div>':a.length===0?`<div class="empty-state">${s.triageFilter==="urgent"?l("triage.emptyUrgent"):s.triageFilter==="invoices"?l("triage.emptyInvoices"):s.triageCategoryFilter!=="all"?l("triage.emptyCategory"):l("triage.emptyAll")}</div>`:`<table class="table">
        <thead><tr><th>Subject</th><th>Sender</th><th>Category</th><th>Assigned</th><th>Workflow</th><th>Status</th><th></th></tr></thead>
        <tbody>
          ${a.map(r=>{var c;return`
            <tr>
              <td>${d(r.subject)}</td>
              <td>${d(r.sender)}<br><small>${d(r.senderEmail||"")}</small></td>
              <td>
                <span class="badge ${Ke(r.category)}" data-category-label="${d(r.category)}">${d(r.category)}</span><br>
                <small>${d(r.urgency||"Medium")} urgency - ${r.confidence||80}% confidence</small>
                <small class="triage-reason" title="${d(r.explanation||"")}">Why: ${d(r.explanation||"Matched the current local category rules.")}</small>
              </td>
              <td>${d(((c=t[r.assignedTo])==null?void 0:c.name)||"Unassigned")}</td>
              <td>${d(r.noReplyNeeded?l("trust.noReply"):r.noReplySuggested?l("trust.reviewFirst"):r.draftReadyForHumanSend?l("trust.ready"):r.workflowLabel||"Not started")}</td>
              <td><span class="badge ${r.status==="Done"?"done":""}">${d(r.noReplyNeeded?l("trust.noReply"):r.draftReadyForHumanSend?l("trust.ready"):r.status)}</span></td>
              <td class="actions">
                <button class="btn subtle" data-review-email="${r.id}" ${h(`review-${r.id}`)?"disabled":""}>${h(`review-${r.id}`)?"Opening...":"Review"}</button>
                <button class="btn subtle" data-archive-email="${r.id}" ${!r.canArchive||h(`archive-${r.id}`)?`disabled title="${d(r.archiveBlocker||"Remove this fake/local email from the demo inbox.")}"`:""}>${h(`archive-${r.id}`)?l("triage.removing"):l("triage.remove")}</button>
                ${r.status==="Done"?`<span class="status-text">${l(r.noReplyNeeded?"trust.noReply":"trust.ready")}</span>`:r.noReplySuggested?`<span class="status-text">${l("trust.reviewFirst")}</span>`:'<span class="status-text" title="Generate, review, save, and approve a draft to complete this workflow.">Draft required</span>'}
              </td>
            </tr>
          `}).join("")}
        </tbody>
      </table>`;document.querySelector("#triage").innerHTML=`
    <div class="panel">
      <div class="panel-title"><h2>Inbox triage</h2><span>${l("triage.inboxControl")}</span></div>
      <div class="segmented below-sm">
        ${[["all","All inbox"],["urgent","Urgent"],["invoices","Invoices"]].map(([r,c])=>`<button class="${s.triageFilter===r?"active":""}" data-triage-filter="${r}">${c}</button>`).join("")}
      </div>
      <div class="list-toolbar below-sm">
        <select data-triage-category-filter aria-label="${l("triage.categoryFilter")}">
          <option value="all" ${s.triageCategoryFilter==="all"?"selected":""}>${l("triage.allCategories")}</option>
          ${e.map(r=>`<option value="${d(r.name)}" ${s.triageCategoryFilter===r.name?"selected":""}>${d(r.name)}</option>`).join("")}
        </select>
        <button class="btn subtle" data-archive-filtered ${a.length===0||o.length===0||h("archive-filtered")?`disabled title="${l("triage.removeFilteredDisabled")}"`:""}>${h("archive-filtered")?l("triage.removing"):`${l("triage.removeFiltered")} (${o.length})`}</button>
        <span class="mode">${d(n)}</span>
      </div>
      ${i}
    </div>
  `}function Po(){const t=s.tasks.filter(i=>{var g,p;const r=!Ee()||s.taskAssigneeFilter==="all"||(s.taskAssigneeFilter==="unassigned"?!i.assignedEmployees.length:i.assignedEmployees.some(u=>u.id===s.taskAssigneeFilter)),c=s.taskFollowUpFilter==="all"||s.taskFollowUpFilter==="scheduled"&&((g=i.followUp)==null?void 0:g.enabled)||s.taskFollowUpFilter==="overdue"&&((p=i.followUp)==null?void 0:p.overdue);return r&&c}),e=t.filter(i=>i.status!=="Done").length,a=t.filter(i=>i.status!=="Done"&&i.priority==="High").length,o=t.filter(i=>{var r;return(r=i.followUp)==null?void 0:r.overdue}).length,n=t.length===0?`<div class="empty-state">${l("tasks.empty")}</div>`:`<table class="table">
        <thead><tr><th>${l("tasks.done")}</th><th>${l("tasks.task")}</th><th>${l("tasks.priority")}</th><th>${l("tasks.assignedTo")}</th><th>${l("tasks.source")}</th><th>${l("tasks.notes")}</th><th></th></tr></thead>
        <tbody>
          ${t.map(i=>{var r,c,g,p,u,w,k,S;return`
            <tr>
              <td><input type="checkbox" data-task-status="${i.id}" ${i.status==="Done"?"checked":""}></td>
              <td>
                <strong>${d(i.title)}</strong><br>
                <small>${d(i.description)}</small>
                ${i.dueAt?`<p>${l("taskWork.dueAt")}: ${d(i.dueAt)}</p>`:""}
                ${(r=i.historySummary)!=null&&r.latestLabel?`
                  <div class="task-history-summary">
                    <span>${l("tasks.latestActivity")}:</span> ${d(i.historySummary.latestAction?l(`taskWork.${i.historySummary.latestAction}`):i.historySummary.latestLabel)}
                    ${i.historySummary.latestAt?`<small>${d(Ra(i.historySummary.latestAt))}</small>`:""}
                  </div>
                `:""}
                <div class="follow-up-control">
                  <label class="follow-up-toggle">
                    <input type="checkbox" data-task-follow-up="${i.id}" ${(c=i.followUp)!=null&&c.enabled?"checked":""}>
                    <span>${(g=i.followUp)!=null&&g.enabled?l("tasks.reminderOn"):l("tasks.reminderOff")}</span>
                  </label>
                  ${(p=i.followUp)!=null&&p.enabled?`
                    <input class="follow-up-date" type="date" data-task-follow-up-date="${i.id}" value="${d(((u=i.followUp.dueAt)==null?void 0:u.slice(0,10))||"")}" aria-label="${l("tasks.followUpDate")}">
                    <small class="${i.followUp.overdue?"follow-up-overdue":""}">${i.followUp.overdue?l("tasks.overdue"):`${l("tasks.scheduled")} ${rt(i.followUp.dueAt)}`}</small>
                  `:""}
                </div>
              </td>
              <td><span class="badge ${i.priority==="High"?"urgent":i.priority==="Low"?"done":"pending"}">${d(i.priority)}</span><br><small>${d(i.category)}</small></td>
              <td>
                ${Ee()?`<select data-task-assignee="${i.id}">
                      <option value="" ${i.assignedTo?"":"selected"}>${l("tasks.unassigned")}</option>
                      ${s.employees.map(C=>`<option value="${C.id}" ${i.assignedTo===C.id?"selected":""}>${d(C.name)}</option>`).join("")}
                    </select>`:d(((w=i.assignedEmployee)==null?void 0:w.name)||l("tasks.unassigned"))}
                <small>${d(i.assignedEmployees.filter(C=>C.id!==i.assignedTo).map(C=>C.name).join(", "))}</small>
              </td>
              <td>${d(((k=i.sourceEmail)==null?void 0:k.subject)||"Local task")}<br><small>${d(((S=i.sourceEmail)==null?void 0:S.sender)||"Demo inbox")}</small></td>
              <td><textarea data-task-note="${i.id}" placeholder="${l("tasks.notePlaceholder")}">${d(i.notes||"")}</textarea></td>
              <td class="actions">
                ${i.sourceEmail?`<button class="btn subtle" data-review-email="${i.sourceEmail.id}">${l("tasks.reviewEmail")}</button>`:""}
                <button class="btn subtle" data-review-task="${i.id}">${l("tasks.viewHistory")}</button>
                <button class="btn subtle" data-edit-task="${i.id}">${l("taskWork.edit")}</button>
                <button class="btn subtle" data-request-task-follow-up="${i.id}">${l("employee.followUp")}</button>
                <button class="btn subtle" data-save-task-note="${i.id}" ${h(`task-note-${i.id}`)?"disabled":""}>${h(`task-note-${i.id}`)?l("tasks.saving"):l("tasks.saveNote")}</button>
              </td>
            </tr>
          `}).join("")}
        </tbody>
      </table>`;document.querySelector("#tasks").innerHTML=`
    <div class="grid cols-3">
      <div class="panel metric">
        <div class="label">${l("tasks.openTasks")}</div>
        <div class="value">${e}</div>
        <div class="caption">${l("tasks.openCaption")}</div>
      </div>
      <div class="panel metric positive">
        <div class="label">${l("tasks.highPriority")}</div>
        <div class="value">${a}</div>
        <div class="caption">${l("tasks.highCaption")}</div>
      </div>
      <div class="panel metric">
        <div class="label">${l("tasks.followUp")}</div>
        <div class="value">${o}</div>
        <div class="caption">${l(o?"tasks.overdueCaption":"tasks.noOverdueCaption")}</div>
      </div>
    </div>
    <div class="panel stack-md">
      <div class="panel-title"><h2>${Fe()?l("taskWork.myTasks"):l("tasks.title")}</h2><button class="btn primary" data-add-task>${l("taskWork.add")}</button></div>
      ${Ee()?`
        <div class="list-toolbar task-filters below-sm">
          <select data-task-assignee-filter aria-label="${l("tasks.assigneeFilter")}">
            <option value="all" ${s.taskAssigneeFilter==="all"?"selected":""}>${l("tasks.allAssignees")}</option>
            <option value="unassigned" ${s.taskAssigneeFilter==="unassigned"?"selected":""}>${l("tasks.unassigned")}</option>
            ${s.employees.map(i=>`<option value="${i.id}" ${s.taskAssigneeFilter===i.id?"selected":""}>${d(i.name)}</option>`).join("")}
          </select>
          <select data-task-follow-up-filter aria-label="${l("tasks.followUpFilter")}">
            <option value="all" ${s.taskFollowUpFilter==="all"?"selected":""}>${l("tasks.allFollowUps")}</option>
            <option value="scheduled" ${s.taskFollowUpFilter==="scheduled"?"selected":""}>${l("tasks.scheduledFollowUps")}</option>
            <option value="overdue" ${s.taskFollowUpFilter==="overdue"?"selected":""}>${l("tasks.overdueFollowUps")}</option>
          </select>
        </div>
      `:`
        <div class="preview below-sm">${l("tasks.employeeScope")}</div>
        <div class="list-toolbar task-filters below-sm">
          <select data-task-follow-up-filter aria-label="${l("tasks.followUpFilter")}">
            <option value="all" ${s.taskFollowUpFilter==="all"?"selected":""}>${l("tasks.allFollowUps")}</option>
            <option value="scheduled" ${s.taskFollowUpFilter==="scheduled"?"selected":""}>${l("tasks.scheduledFollowUps")}</option>
            <option value="overdue" ${s.taskFollowUpFilter==="overdue"?"selected":""}>${l("tasks.overdueFollowUps")}</option>
          </select>
        </div>
      `}
      ${n}
    </div>
  `}function Ia(){const t=s.composeForm||xe(),e=t.attachments.length?`<ul>${t.attachments.map(o=>`<li>${d(o.name)} <small>${d(o.type||"Unknown")} - ${Mo(o.size)}</small></li>`).join("")}</ul>`:`<div class="empty-state">${l("compose.noAttachments")}</div>`,a=s.composeDrafts.length?`<table class="table">
        <thead><tr><th>${l("compose.subject")}</th><th>${l("compose.to")}</th><th>${l("compose.attachments")}</th><th></th></tr></thead>
        <tbody>
          ${s.composeDrafts.map(o=>`
            <tr>
              <td>${d(o.subject)}<br><small>${d(new Date(o.updatedAt).toLocaleString())}</small></td>
              <td>${d(o.to)}</td>
              <td>${o.attachments.length}</td>
              <td><button class="btn subtle" data-open-compose-draft="${o.id}">${l("compose.openDraft")}</button></td>
            </tr>
          `).join("")}
        </tbody>
      </table>`:`<div class="empty-state">${l("compose.emptyDrafts")}</div>`;document.querySelector("#compose").innerHTML=`
    <div class="grid cols-2">
      <div class="panel">
        <div class="panel-title">
          <div><h2>${l("compose.title")}</h2><span>${l("compose.subtitle")}</span></div>
          <button class="btn subtle" data-new-compose>${l("compose.newMessage")}</button>
        </div>
        <div class="preview">${l("compose.safetyNote")}</div>
        <div class="form-grid stack-sm">
          <label>${l("compose.to")}<input data-compose-field="to" type="email" value="${d(t.to)}" placeholder="client@example.ca"></label>
          <label>${l("compose.cc")}<input data-compose-field="cc" value="${d(t.cc)}" placeholder="optional@example.ca"></label>
          <label>${l("compose.subject")}<input data-compose-field="subject" value="${d(t.subject)}"></label>
          <label>${l("compose.body")}<textarea data-compose-field="body">${d(t.body)}</textarea></label>
          <label>${l("compose.attachments")}
            <input data-compose-attachments type="file" multiple>
          </label>
          <div class="preview">${l("compose.attachmentNote")}</div>
        </div>
        <div class="drawer-section">
          <h3>${l("compose.attachmentMetadata")}</h3>
          ${e}
        </div>
        <div class="actions">
          <button class="btn primary" data-save-compose ${h("save-compose")?"disabled":""}>${h("save-compose")?l("compose.saving"):l("compose.saveDraft")}</button>
          <button class="btn subtle" data-print-compose>${l("compose.printPdf")}</button>
          <span class="mode">${l("compose.neverSends")}</span>
        </div>
      </div>
      <div class="panel">
        <div class="panel-title"><h2>${l("compose.savedDrafts")}</h2><span>${l("compose.localOnly")}</span></div>
        ${a}
      </div>
    </div>
  `}function Ho(){const t=document.querySelector("#drawerRoot");if(s.colleagueFollowUp){Ha(t,s.colleagueFollowUp,s.employees,l);return}if(s.taskEditor){$s(t,s.taskEditor,s.employees,Ee(),l);return}if(s.selectedCategory){Yo(t);return}if(s.selectedEmployee){Qo(t);return}if(s.selectedRule){Go(t);return}if(s.selectedDraft){Vo(t);return}if(s.selectedTask){Jo(t);return}if(!s.selectedEmail){t.innerHTML="";return}const e=s.selectedEmail,a=e.status==="Done",o=s.employees.find(i=>i.id===e.assignedTo),n=Ea(e.category);t.innerHTML=`
    <div class="drawer-backdrop" data-close-drawer></div>
    <aside class="review-drawer" aria-label="Email review">
      <div class="drawer-header">
        <div>
          <div class="badge ${Ke(e.category)}" data-category-label="${d(e.category)}">${d(e.category)}</div>
          <h2>${d(e.subject)}</h2>
          <p>${d(e.sender)} - ${d(e.senderEmail)}</p>
        </div>
        <button class="btn subtle" data-close-drawer>Close</button>
      </div>

      <div class="drawer-section">
        <h3>Email body</h3>
        <div class="preview">${d(e.body)}</div>
      </div>

      <div class="drawer-grid">
        <label>Category
          <select data-email-category="${e.id}">
            ${n.map(i=>`<option value="${d(i.name)}" ${i.name===e.category?"selected":""}>${d(i.name)}${i.active?"":" (archived)"}</option>`).join("")}
          </select>
        </label>
        ${Ee()?`<label>Assigned employee
              <select data-email-assignee="${e.id}">
                <option value="" ${e.assignedTo?"":"selected"}>Unassigned</option>
                ${s.employees.map(i=>`<option value="${d(i.id)}" ${i.id===e.assignedTo?"selected":""}>${d(i.name)} - ${d(i.department)}</option>`).join("")}
              </select>
            </label>`:`<div class="mini-stat"><span>${l("tasks.assignedTo")}</span><strong>${d((o==null?void 0:o.name)||l("tasks.unassigned"))}</strong></div>`}
      </div>

      <div class="drawer-grid">
        <div class="mini-stat"><span>Urgency</span><strong>${d(e.urgency)}</strong></div>
        <div class="mini-stat"><span>Confidence</span><strong>${e.confidence}%</strong></div>
        <div class="mini-stat"><span>Status</span><strong>${d(e.noReplyNeeded?l("trust.noReply"):e.draftReadyForHumanSend?l("trust.ready"):e.status)}</strong></div>
        <div class="mini-stat"><span>Owner</span><strong>${d((o==null?void 0:o.name)||"Unassigned")}</strong></div>
      </div>

      <div class="drawer-section">
        <h3>Draft workflow</h3>
        <div class="preview">
          ${e.noReplyNeeded?l("trust.noReplyDone"):e.noReplySuggested?l("trust.noReplyHint"):a?l("trust.notSent"):e.draftId?`${e.draftReadyForHumanSend?l("trust.ready"):`Draft exists: ${d(e.draftStatusLabel)}.`} One email uses one draft record.`:"No active draft exists for this email."}
        </div>
      </div>

      <div class="drawer-section">
        <h3>Suggested action</h3>
        <div class="preview">${d(e.suggestedAction)}</div>
      </div>

      <div class="drawer-section">
        <div class="panel-title compact-title">
          <h3>Why was this flagged?</h3>
          <button class="btn subtle" data-toggle-explanation>${s.showExplanation?"Less context":"More context"}</button>
        </div>
        <div class="preview">${d(e.explanation)}</div>
        ${s.showExplanation?'<div class="preview explanation-detail">This recommendation is based only on wording and patterns in the local demo message. A person must review it before acting.</div>':""}
      </div>

      <div class="drawer-section">
        <h3>Thread</h3>
        <ul>${e.messages.map(i=>`<li>${d(i)}</li>`).join("")}</ul>
      </div>

      ${s.summary?`<div class="drawer-section"><h3>Summary</h3><div class="preview">${d(s.summary)}</div></div>`:""}
      <div class="drawer-actions">
        <button class="btn primary" data-summary-email="${e.id}" ${h(`summary-${e.id}`)?"disabled":""}>${h(`summary-${e.id}`)?"Summarizing...":"Summarize"}</button>
        <button class="btn subtle" data-email-task="${e.id}">${l("taskWork.emailTask")}</button>
        ${e.canMarkNoReply?`<button class="btn primary" data-no-reply-email="${e.id}">${l("trust.markNoReply")}</button>`:""}
        ${e.canReopenNoReply?`<button class="btn subtle" data-reopen-no-reply="${e.id}">${l("trust.reopen")}</button>`:""}
        ${e.noReplyNeeded?"":e.canOpenDraft?`<button class="btn subtle" data-open-email-draft="${e.id}" ${h(`open-email-draft-${e.id}`)?"disabled":""}>${e.draftActionLabel}</button>`:`<button class="btn subtle" data-generate-draft="${e.id}" ${!e.canGenerateDraft||h(`draft-${e.id}`)?`disabled title="${e.completionBlocker||"Draft action is unavailable."}"`:""}>${h(`draft-${e.id}`)?"Drafting...":e.draftActionLabel}</button>`}
        <button class="btn subtle" data-archive-email="${e.id}" ${!e.canArchive||h(`archive-${e.id}`)?`disabled title="${d(e.archiveBlocker||"Remove this fake/local email from the demo inbox.")}"`:""}>${h(`archive-${e.id}`)?l("triage.removing"):l("triage.remove")}</button>
        ${a?`<span class="status-text">${l(e.noReplyNeeded?"trust.noReplyDone":"trust.notSent")}</span>`:`<span class="status-text">${l(e.noReplySuggested?"trust.noReplyHint":"trust.approvalHint")}</span>`}
      </div>
      <section class="workspace-rule-suggestions"><h3>${l("employee.automation")}</h3><p>${l("employee.automationNote")}</p>
        ${(e.automationSuggestions||[]).map(i=>`<div><strong>${d(i.title)}</strong><p>${d(i.explanation)}</p>${i.category!==e.category&&!a?`<button class="btn subtle" data-apply-workspace-rule="${d(i.id)}" data-rule-email="${d(e.id)}">${l("employee.applyCategory")}: ${d(i.category)}</button>`:""}</div>`).join("")||`<p>${l("employee.noRules")}</p>`}
      </section>
      <p class="drawer-note">This is a local prototype. Courio does not send email.</p>
    </aside>
  `}function _o(){const t=document.querySelector("#modalRoot");if(!s.confirmDialog){t.innerHTML="";return}const e=s.confirmDialog;t.innerHTML=`
    <div class="modal-backdrop"></div>
    <div class="confirm-modal" role="dialog" aria-modal="true">
      <h2>${d(e.title)}</h2>
      <p>${d(e.message)}</p>
      <div class="actions">
        <button class="btn ${e.tone==="danger"?"danger":"primary"}" data-confirm-primary>${d(e.primaryLabel)}</button>
        <button class="btn subtle" data-confirm-cancel>${l("taskWork.cancel")}</button>
      </div>
    </div>
  `}function Bo(){const t=document.querySelector("#authRoot");if(!s.session){t.innerHTML=`
      <div class="auth-overlay">
        <div class="auth-panel">
          <div>
            <div class="badge lead">${l("auth.demoOnly")}</div>
            <h1>${l("auth.title")}</h1>
            <p>${l("auth.subtitle")}</p>
          </div>
          <div class="auth-grid">
            ${s.demoAccounts.map(e=>`
              <button class="auth-card" data-login-account="${e.id}">
                <strong>${d(e.name)}</strong>
                <span>${d(e.role)} - ${d(e.title)}</span>
                <small>${d(e.email)}</small>
              </button>
            `).join("")}
          </div>
          <div class="preview">${l("auth.safetyNote")}</div>
        </div>
      </div>
    `;return}t.innerHTML=`
    <div class="session-pill">
      <span>${d(s.session.name)} · ${d(s.session.role)}</span>
      <button class="btn subtle" data-logout-demo>${l("auth.logout")}</button>
    </div>
  `}async function Wo(t){const e=await io(t);s.drafts=await me(),await we(t),s.selectedDraft=await Te(e.id),s.selectedEmail=null,s.selectedRule=null,s.selectedEmployee=null,s.selectedCategory=null}async function zo(t){var e;await lo(t),s.drafts=await me(),s.emails=await Y(),s.activity=await M(),s.digest=await Q(),s.selectedDraftIds=s.selectedDraftIds.filter(a=>a!==t),((e=s.selectedDraft)==null?void 0:e.id)===t&&(s.selectedDraft=await Te(t))}function Vo(t){const e=s.selectedDraft,a=e.sourceEmail||{},o=a.status==="Done";t.innerHTML=`
    <div class="drawer-backdrop" data-close-drawer></div>
    <aside class="review-drawer" aria-label="Draft review">
      <div class="drawer-header">
        <div>
          <div class="badge ${e.isReadyForHumanSend?"done":"pending"}">${d(e.isReadyForHumanSend?l("trust.ready"):e.statusLabel)}</div>
          <h2>${d(e.title)}</h2>
          <p>Source: ${d(a.subject||e.source)}</p>
        </div>
        <button class="btn subtle" data-close-drawer>Close</button>
      </div>

      <div class="drawer-section">
        <h3>Source email</h3>
        <div class="preview">
          <strong>${d(a.sender||"Mock sender")}</strong><br>
          ${d(a.senderEmail||"")}<br><br>
          ${d(a.body||"This draft is based on a local mock email.")}
        </div>
      </div>

      <div class="drawer-grid">
        <div class="mini-stat"><span>Status</span><strong>${d(o?l("trust.ready"):e.statusLabel)}</strong></div>
        <div class="mini-stat"><span>Risk level</span><strong>${d(e.risk||"Low")}</strong></div>
        <div class="mini-stat"><span>Confidence</span><strong>${e.confidence||a.confidence||80}%</strong></div>
        <div class="mini-stat"><span>Sending</span><strong>Never automatic</strong></div>
      </div>

      <div class="drawer-section">
        <h3>Suggested reply</h3>
        <div class="preview">${d(a.suggestedAction||e.title)}</div>
      </div>

      <div class="drawer-section">
        <label>Editable draft body
          <textarea data-draft-editor>${d(e.text)}</textarea>
        </label>
      </div>

      <div class="drawer-actions">
        ${o?`<span class="status-text">${l("trust.notSent")}</span>`:`
            <button class="btn primary" data-save-draft="${e.id}" ${h(`save-${e.id}`)?"disabled":""}>${h(`save-${e.id}`)?"Saving...":"Save changes"}</button>
            <button class="btn success" data-approve-draft="${e.id}" ${!e.canApprove||h(`approve-${e.id}`)?`disabled title="${e.approvalBlocker||"Save the reviewed draft before approving."}"`:""}>${h(`approve-${e.id}`)?"Approving...":l("trust.approve")}</button>
          `}
        <button class="btn subtle" data-close-drawer>Close</button>
      </div>
      <p class="drawer-note">${l("trust.draftCheck")} ${l("trust.notSent")}</p>
    </aside>
  `}function Go(t){var o;const e=s.selectedRule,a=Ea(e.category);t.innerHTML=`
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
        <label>Rule name<input data-rule-field="title" value="${d(e.title)}"></label>
        <label>Description<textarea data-rule-field="desc">${d(e.desc)}</textarea></label>
        <label>Category
          <select data-rule-field="category">
            ${a.map(n=>`<option value="${d(n.name)}" ${n.name===e.category?"selected":""}>${d(n.name)}${n.active?"":" (archived)"}</option>`).join("")}
          </select>
        </label>
      </div>

      <div class="drawer-grid">
        <div class="mini-stat"><span>Confidence</span><strong>${e.confidence||80}%</strong></div>
        <div class="mini-stat"><span>Would match</span><strong>${((o=e.matches)==null?void 0:o.length)||0} samples</strong></div>
      </div>

      <div class="drawer-section">
        <h3>Why Courio suggested it</h3>
        <div class="preview">${d(e.explanation||"This rule is based on repeated wording patterns in the mock inbox.")}</div>
      </div>

      <div class="drawer-section">
        <h3>Match preview</h3>
        <ul>${(e.matches||["No sample matches yet."]).map(n=>`<li>${d(n)}</li>`).join("")}</ul>
      </div>

      ${yt()?`<div class="drawer-section"><h3>Advanced preview</h3><div class="preview">This rule uses the current confidence threshold of ${s.settings.confidenceThreshold||80}%. No mailbox changes happen in the prototype.</div></div>`:""}

      <div class="drawer-actions">
        <button class="btn primary" data-save-rule="${e.id}" ${h(`save-rule-${e.id}`)?"disabled":""}>${h(`save-rule-${e.id}`)?"Saving...":"Save rule"}</button>
        <button class="btn danger" data-delete-rule="${e.id}">Delete rule</button>
        <button class="btn subtle" data-close-drawer>Close</button>
      </div>
    </aside>
  `}function Yo(t){const e=s.selectedCategory,a=e.id==="new",o=[["default","Default"],["urgent","Red / urgent"],["invoice","Green"],["lead","Blue"],["pending","Amber"]];t.innerHTML=`
    <div class="drawer-backdrop" data-close-drawer></div>
    <aside class="review-drawer" aria-label="${a?"Add category":"Edit category"}">
      <div class="drawer-header">
        <div>
          <div class="badge ${Ke(e.name)}">${e.active===!1?"Archived":"Active"}</div>
          <h2>${a?"Add category":"Edit category"}</h2>
          <p>Categories remain fake/local and map to email category names for now.</p>
        </div>
        <button class="btn subtle" data-close-drawer>Close</button>
      </div>

      <div class="drawer-section">
        <label>Category name<input data-category-field="name" value="${d(e.name||"")}"></label>
        <label>Description<textarea data-category-field="description">${d(e.description||"")}</textarea></label>
        <label>Badge color
          <select data-category-field="color">
            ${o.map(([n,i])=>`<option value="${n}" ${n===(e.color||"default")?"selected":""}>${i}</option>`).join("")}
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
  `}function Qo(t){const e=s.selectedEmployee,a=e.id==="new";t.innerHTML=`
    <div class="drawer-backdrop" data-close-drawer></div>
    <aside class="review-drawer" aria-label="${a?"Add employee":"Edit employee"}">
      <div class="drawer-header">
        <div>
          <div class="badge lead">Team member</div>
          <h2>${a?"Add employee":"Edit employee"}</h2>
          <p>${a?"Add a local demo team member.":`Reviewing ${d(e.name)}`}</p>
        </div>
        <button class="btn subtle" data-close-drawer>Close</button>
      </div>

      <div class="drawer-section">
        <label>Name<input data-employee-field="name" value="${d(e.name||"")}"></label>
        <label>Email<input data-employee-field="email" type="email" value="${d(e.email||"")}"></label>
        <label>Role / title<input data-employee-field="title" value="${d(e.title||"")}"></label>
        <label>Department<input data-employee-field="department" value="${d(e.department||"")}"></label>
      </div>

      <div class="drawer-actions">
        <button class="btn primary" data-save-employee="${e.id}" ${h(`save-employee-${e.id}`)?"disabled":""}>${h(`save-employee-${e.id}`)?"Saving...":a?"Add employee":"Save changes"}</button>
        ${a?"":`<button class="btn danger" data-delete-employee="${e.id}">Remove employee</button>`}
        <button class="btn subtle" data-close-drawer>Close</button>
      </div>
      <p class="drawer-note">Employee records remain fake and local to this browser. Email addresses must be valid and unique.</p>
    </aside>
  `}function Fa(t){return Object.entries(t).map(([e,a])=>{var n;const o=e==="assignedTo"?((n=s.employees.find(i=>i.id===a))==null?void 0:n.name)||a||l("tasks.unassigned"):e==="collaboratorIds"?(a||[]).map(i=>{var r;return((r=s.employees.find(c=>c.id===i))==null?void 0:r.name)||i}).join(", ")||l("taskWork.none"):["priority","status"].includes(e)?l(`taskWork.${a}`):a||l("taskWork.none");return`${l(`taskWork.${e}`)}: ${o}`}).join("; ")}function Jo(t){var n,i,r;const e=s.selectedTask,a=Array.isArray(e.history)?e.history:[],o=(n=e.followUp)!=null&&n.enabled?e.followUp.overdue?`${l("tasks.overdue")} - ${rt(e.followUp.dueAt)}`:`${l("tasks.scheduled")} ${rt(e.followUp.dueAt)}`:l("tasks.noReminder");t.innerHTML=`
    <div class="drawer-backdrop" data-close-drawer></div>
    <aside class="review-drawer" aria-label="${l("tasks.historyTitle")}">
      <div class="drawer-header">
        <div>
          <div class="badge ${e.priority==="High"?"urgent":e.priority==="Low"?"done":"pending"}">${d(e.priority)}</div>
          <h2>${d(e.title)}</h2>
          <p>${d(((i=e.sourceEmail)==null?void 0:i.subject)||l("tasks.localTask"))}</p>
        </div>
        <button class="btn subtle" data-close-drawer>Close</button>
      </div>

      <div class="drawer-grid">
        <div class="mini-stat"><span>${l("tasks.assignedTo")}</span><strong>${d(((r=e.assignedEmployee)==null?void 0:r.name)||l("tasks.unassigned"))}</strong></div>
        <div class="mini-stat"><span>${l("tasks.followUp")}</span><strong>${d(o)}</strong></div>
      </div>

      <div class="drawer-section">
        <h3>${l("tasks.historyTitle")}</h3>
        ${a.length?`<ol class="task-history-list">${a.map(c=>`
              <li>
                <strong>${d(c.action?l(`taskWork.${c.action}`):c.label||l("tasks.historyFallback"))}</strong>
                ${c.at?`<time>${d(Ra(c.at))}</time>`:""}
                ${c.before?`<p>${d(Fa(c.before))}</p>`:""}
                ${c.canRestore?`<button class="btn subtle" data-restore-task="${e.id}" data-history-id="${d(c.id)}">${l("taskWork.restore")}</button>`:!c.before&&!c.action?`<small>${l("taskWork.legacy")}</small>`:""}
              </li>
            `).join("")}</ol>`:`<div class="empty-state">${l("tasks.noHistory")}</div>`}
      </div>

      <div class="drawer-section">
        <h3>${l("tasks.notes")}</h3>
        <div class="preview">${d(e.notes||l("tasks.noNotes"))}</div>
      </div>

      <div class="drawer-actions">
        ${e.sourceEmail?`<button class="btn subtle" data-review-email="${e.sourceEmail.id}">${l("tasks.reviewEmail")}</button>`:""}
        <button class="btn subtle" data-close-drawer>Close</button>
      </div>
      <p class="drawer-note">${l("tasks.historyNote")}</p>
    </aside>
  `}function xa(){const t=s.ruleQuery.trim().toLowerCase(),e=s.rules.filter(o=>!t||`${o.title} ${o.desc} ${o.category}`.toLowerCase().includes(t)),a=s.loading.rules?'<div class="loading">Loading suggested rules...</div>':e.length===0?`<div class="empty-state">${t?`No rules match “${d(s.ruleQuery)}”. Clear the search to see all local rules.`:"No rules yet. Local rule suggestions will appear here."}</div>`:`<div class="grid cols-2">
        ${e.map(o=>`
          <div class="rule-card">
            <div class="rule-top">
              <div>
                <div class="rule-title">${d(o.title)}</div>
                <div class="rule-desc">${d(o.desc)}</div>
              </div>
              <button class="toggle ${o.on?"on":""}" aria-label="Toggle ${d(o.title)}" data-toggle-rule="${o.id}" ${h(`rule-${o.id}`)?"disabled":""}></button>
            </div>
            <div class="preview"><strong>Local sample preview:</strong> ${d(o.impact)}</div>
            <div class="preview"><strong>${o.confidence||80}% confidence:</strong> ${d(o.explanation||"Based on local mock patterns.")}</div>
            ${yt()?`<div class="preview"><strong>Would match:</strong> ${J(o.matches||["No samples"])}</div>`:""}
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
        <input data-rule-search type="search" value="${d(s.ruleQuery)}" placeholder="Search rules">
      </div>
    </div>
    ${a}
  `}function Ko(){var i;const t=s.selectedDraftIds.length,e=s.drafts.filter(r=>r.risk!=="High"&&r.canSelectForBulkApproval).length,a=!Ca(),o=s.drafts.filter(r=>s.draftFilter==="needs_approval"?r.awaitingApproval:s.draftFilter==="ready"?r.isReadyForHumanSend:!0),n=s.loading.drafts?'<div class="loading">Loading draft queue...</div>':o.length===0?`<div class="empty-state">${s.draftFilter==="needs_approval"?"No drafts need approval. Reviewed drafts will appear here when they are ready.":s.draftFilter==="ready"?"No drafts are ready for human send yet.":"No drafts are available in this local demo."}</div>`:`<table class="table">
        <thead><tr><th>Select</th><th>Draft</th><th>Source</th><th>Risk</th><th>Status</th><th></th></tr></thead>
        <tbody>
          ${o.map(r=>`
            <tr>
              <td><input type="checkbox" data-select-draft="${r.id}" ${s.selectedDraftIds.includes(r.id)?"checked":""} ${r.canSelectForBulkApproval?"":`disabled title="${r.approvalBlocker||"Review and save this draft first."}"`}></td>
              <td>${d(r.title)}</td>
              <td>${d(r.source)}</td>
              <td><span class="badge ${r.risk==="High"?"urgent":"done"}">${d(r.risk||"Low")}</span></td>
              <td><span class="badge ${r.isReadyForHumanSend?"done":"pending"}">${d(r.isReadyForHumanSend?l("trust.ready"):r.statusLabel)}</span></td>
              <td class="actions">
                <button class="btn subtle" data-review-draft="${r.id}" ${h(`review-draft-${r.id}`)?"disabled":""}>${h(`review-draft-${r.id}`)?"Opening...":"Review"}</button>
                ${r.isReadyForHumanSend?`<span class="status-text">${l("trust.ready")}</span>`:`<button class="btn success" data-approve-draft="${r.id}" ${!r.canApprove||h(`approve-${r.id}`)?`disabled title="${r.approvalBlocker||"Review and save this draft first."}"`:""}>${h(`approve-${r.id}`)?"Approving...":l("trust.approve")}</button>`}
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
        <span class="mode">${l("trust.approvalHint")}</span>
      </div>
      ${a?'<div class="preview below-sm">Low-risk bulk approval is disabled by workspace settings.</div>':""}
      ${n}
    </div>
    ${Fe()?`<p>${l("employee.approvalNote")}</p><section class="composed-draft-links"><h2>${l("employee.composed")}</h2>${s.composeDrafts.map(r=>`<button class="btn subtle" data-open-compose-draft="${d(r.id)}">${d(r.subject||l("compose.openDraft"))}</button>`).join("")}</section>`:""}
  `,Fe()&&((i=document.querySelector("#drafts [data-approve-selected]"))==null||i.parentElement.remove())}function Zo(){const t=document.querySelector("#assistantRoot");t.innerHTML=As({assistantOpen:s.assistantOpen,assistantMessages:s.assistantMessages,assistantBusy:h("assistant")})}async function Ma(t){await $("assistant",async()=>{var a;const e=await Co(t,{language:Ne(),selectedEmailId:((a=s.selectedEmail)==null?void 0:a.id)||null});s.assistantMessages=e.messages,await Xo(e.action)})}async function Xo(t){if(t){if(t.type==="show_triage"){K("triage",{triageFilter:t.filter||"all"});return}if(t.type==="show_drafts"){K("drafts",{draftFilter:t.filter||"all"});return}if(t.type==="generate_digest"){s.digest=await Q(),K("dashboard");return}if(t.type==="explain_email"){s.selectedEmail=await ba(t.emailId),s.selectedDraft=null,s.selectedRule=null,s.selectedEmployee=null,s.selectedCategory=null,s.summary="",s.showExplanation=!0,K("triage",{triageFilter:"all",closeDrawers:!1});return}if(t.type==="show_rule"){s.rules=await re(),s.selectedRule=s.rules.find(e=>e.id===t.ruleId)||null,s.selectedEmail=null,s.selectedDraft=null,s.selectedEmployee=null,s.selectedCategory=null,K("rules",{closeDrawers:!1});return}t.type==="reset_demo_data"&&(s.confirmDialog={type:"reset-demo",title:"Reset demo data?",message:"This clears all local Courio changes and restores the original fake demo data.",primaryLabel:"Reset demo data",tone:"danger"},A())}}function en(){const t=Je();document.querySelector("#admin").innerHTML=`
    <div class="grid cols-2">
      <div class="panel">
        <div class="panel-title"><h2>${l("admin.workspaceSettings")}</h2><span>${l("admin.prototype")}</span></div>
        <div class="form-grid">
          <label>${l("admin.companyName")}<input data-setting="companyName" value="${d(t.companyName||"Demo PME Inc.")}"></label>
          <label>${l("admin.language")}
            <select data-setting="language">
              ${[["en","English"],["fr","Français"]].map(([e,a])=>`<option value="${e}" ${e===ze(t.language)?"selected":""}>${a}</option>`).join("")}
            </select>
          </label>
          <label>${l("admin.mode")}
            <select data-setting="mode">
              ${["Simple","Advanced"].map(e=>`<option ${e===t.mode?"selected":""}>${e}</option>`).join("")}
            </select>
          </label>
          <label>${l("admin.escalationRecipient")}<input data-setting="escalationRecipient" value="${d(t.escalationRecipient||"owner@company.ca")}"></label>
          ${No()?`
          <label>Default mode
            <select data-setting="defaultMode">
              ${["Observation only","Drafts allowed, no auto-send","Auto-categorize after approval"].map(e=>`<option ${e===t.defaultMode?"selected":""}>${e}</option>`).join("")}
            </select>
          </label>
          <label>Confidence threshold<input data-setting="confidenceThreshold" value="${d(t.confidenceThreshold||"80")}"></label>
          <label>Observation days<input data-setting="observationDays" value="${d(t.observationDays||"7")}"></label>
          <label>Low-risk bulk approval
            <select data-setting="allowLowRiskBulkApproval">
              ${["Yes","No"].map(e=>`<option ${e===t.allowLowRiskBulkApproval?"selected":""}>${e}</option>`).join("")}
            </select>
          </label>
          `:'<div class="preview">Simple Mode keeps settings focused: company name, escalation recipient, and no automatic sending.</div>'}
          <div class="preview">${l("admin.languageNote")}</div>
          <button class="btn primary" data-save-settings ${h("settings")?"disabled":""}>${h("settings")?l("admin.saving"):l("admin.saveSettings")}</button>
          <button class="btn danger" data-reset-demo ${h("reset-demo")?"disabled":""}>${h("reset-demo")?l("admin.resetting"):l("admin.resetDemoData")}</button>
        </div>
      </div>
      <div class="panel">
        <div class="panel-title"><h2>${l("admin.safetyPreview")}</h2><span>${l("admin.prototypeBehavior")}</span></div>
        <table class="table">
          <tr><td>No automatic sending</td><td>Enforced in this local demo</td></tr>
          <tr><td>Activity history</td><td>Simulated actions stored in this browser</td></tr>
          <tr><td>Account disconnect</td><td>Planned for a future provider integration</td></tr>
          <tr><td>Mailbox permissions</td><td>Not requested or connected in this prototype</td></tr>
          <tr><td>Saved workspace mode</td><td>${d(s.settings.mode||"Simple")}</td></tr>
          <tr><td>${l("admin.savedLanguage")}</td><td>${Ne()==="fr"?"Français":"English"}</td></tr>
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
                    <td>${d(e.name)}<br><small>${d(e.email)}</small></td>
                    <td>${d(e.title)}</td>
                    <td>${d(e.department)}</td>
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
                    <td><span class="badge ${Ke(e.name)}" data-category-label="${d(e.name)}">${d(e.name)}</span>${e.system?"<br><small>System default</small>":""}</td>
                    <td>${d(e.description||"No description yet.")}</td>
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
                  <span>${d(e.label||"Local action completed")}</span>
                  <time>${new Date(e.completedAt).toLocaleString()}</time>
                </div>
              `).join("")}
            </div>`}
      </div>
    </div>
  `}function Ke(t){const e=s.categories.find(a=>a.name===t);return e!=null&&e.color&&e.color!=="default"?e.color:t==="Urgent"||t==="Client complaint"?"urgent":t==="Accounting"||t==="Documents"||t==="Missing documents"?"invoice":t==="Sales"?"lead":""}document.addEventListener("click",async t=>{var a;const e=t.target.closest("button");if(e){if(e.dataset.discardPreferences!==void 0){s.preferencesForm=structuredClone(s.preferences),A();return}if(e.dataset.removeBackground!==void 0){s.preferencesForm.backgroundImage=null,A();return}if(e.dataset.resetPreferences!==void 0){await $("preferences",async()=>{s.preferences=await ao(),s.preferencesForm=structuredClone(s.preferences)},l("preferences.resetDone"));return}if(e.dataset.closeDrawer!==void 0&&(s.taskEditor=null,s.colleagueFollowUp=null),e.dataset.requestTaskFollowUp){s.colleagueFollowUp=s.tasks.find(o=>o.id===e.dataset.requestTaskFollowUp),A();return}if(e.dataset.composeColleague){const o=s.employees.find(n=>n.id===e.dataset.composeColleague);if(!o)return;if(s.composeForm.to||s.composeForm.subject||s.composeForm.body||s.composeForm.attachments.length){ge(l("employee.finishCompose"),!0);return}s.composeForm={...xe(),to:o.email},K("compose");return}if(e.dataset.applyWorkspaceRule){await $("apply-rule",async()=>{await _s(e.dataset.ruleEmail,e.dataset.applyWorkspaceRule),await we(),s.tasks=await O()},l("employee.applied"));return}if(e.dataset.addTask!==void 0||e.dataset.editTask){s.taskEditor=e.dataset.editTask?{...s.tasks.find(o=>o.id===e.dataset.editTask)}:{},s.selectedEmail=null,s.selectedTask=null,A();return}if(e.dataset.emailTask){await $("email-task",async()=>{s.taskEditor=await ho(e.dataset.emailTask),s.selectedEmail=null,s.tasks=await O()});return}if(e.dataset.noReplyEmail){s.confirmDialog={type:"no-reply",emailId:e.dataset.noReplyEmail,title:l("trust.noReplyConfirm"),message:l("trust.noReplyConfirmNote"),primaryLabel:l("trust.markNoReply")},A();return}if(e.dataset.reopenNoReply){await $("reopen-no-reply",async()=>{await go(e.dataset.reopenNoReply),await we(),s.selectedEmail=null,s.digest=await Q(),s.activity=await M()},l("trust.reopened"));return}if(e.dataset.restoreTask){const o=s.tasks.find(i=>i.id===e.dataset.restoreTask),n=o==null?void 0:o.history.find(i=>i.id===e.dataset.historyId);if(!(n!=null&&n.canRestore))return;s.confirmDialog={type:"restore-task",taskId:o.id,historyId:n.id,title:l("taskWork.restoreTitle"),message:`${l("taskWork.restoreMessage")} ${Fa(n.before)}`,primaryLabel:l("taskWork.restore")},A();return}if(e.dataset.assistantToggle!==void 0){s.assistantOpen=!s.assistantOpen,A();return}if(e.dataset.assistantCommand){await Ma(e.dataset.assistantCommand);return}if(e.dataset.confirmCancel!==void 0){s.confirmDialog=null,A();return}if(e.dataset.confirmPrimary!==void 0){const o=s.confirmDialog;if(s.confirmDialog=null,(o==null?void 0:o.type)==="no-reply"){await $("no-reply",async()=>{await mo(o.emailId),await we(o.emailId),s.tasks=await O(),s.digest=await Q(),s.activity=await M()},l("trust.noReplyDone"));return}if((o==null?void 0:o.type)==="restore-task"){await $("restore-task",async()=>{await yo(o.taskId,o.historyId),s.tasks=await O(),s.selectedTask=s.tasks.find(n=>n.id===o.taskId)||null,s.activity=await M()},l("taskWork.restored"));return}if((o==null?void 0:o.type)==="reset-demo"){await $("reset-demo",async()=>{await oo(),window.location.reload()});return}if((o==null?void 0:o.type)==="delete-rule"){await $(`delete-rule-${o.ruleId}`,async()=>{await po(o.ruleId),s.rules=await re(),s.activity=await M(),s.selectedRule=null},"Rule deleted locally.");return}if((o==null?void 0:o.type)==="delete-employee"){await $(`delete-employee-${o.employeeId}`,async()=>{await Do(o.employeeId),s.employees=await it(),s.emails=await Y(),s.tasks=await O(),s.activity=await M(),s.selectedEmployee=null},"Employee removed and assigned emails returned to Unassigned.");return}if((o==null?void 0:o.type)==="archive-emails"){await $("archive-emails",async()=>{await fo(o.emailIds,o.reason),s.emails=await Y(),s.tasks=await O(),s.digest=await Q(),s.activity=await M(),s.selectedEmail=null},l("triage.removeSuccess"));return}}if(e.dataset.loginAccount){await $("login-demo",async()=>{const o=await Zs(e.dataset.loginAccount);await Pt(),s.tab="dashboard"},l("auth.loginToast"));return}if(e.dataset.logoutDemo!==void 0){await $("logout-demo",async()=>{await Xs(),await Pt()},l("auth.logoutToast"));return}if(e.dataset.tab&&K(e.dataset.tab),e.dataset.tabTarget&&K(e.dataset.tabTarget),e.dataset.newCompose!==void 0){s.composeForm=xe(),A();return}if(e.dataset.openComposeDraft){const o=s.composeDrafts.find(n=>n.id===e.dataset.openComposeDraft);o&&(s.composeForm={...o,attachments:[...o.attachments]},K("compose",{closeDrawers:!1}));return}if(e.dataset.saveCompose!==void 0){await $("save-compose",async()=>{const o=await eo(s.composeForm);s.composeForm={...o,attachments:[...o.attachments]},s.composeDrafts=await ft(),s.activity=await M()},l("compose.savedToast"));return}if(e.dataset.printCompose!==void 0){ge(l("compose.printToast")),window.print();return}if(e.dataset.setupMailbox&&(s.selectedSetupMailboxId=e.dataset.setupMailbox,Ta()),e.dataset.triageFilter&&(s.triageFilter=e.dataset.triageFilter,A()),e.dataset.archiveEmail){const o=s.emails.find(n=>n.id===e.dataset.archiveEmail);if(!o)return;s.confirmDialog={type:"archive-emails",emailIds:[o.id],reason:"Removed from demo inbox",title:l("triage.removeConfirmTitle"),message:`${l("triage.removeConfirmMessage")} "${o.subject}"`,primaryLabel:l("triage.remove"),tone:"danger"},A();return}if(e.dataset.archiveFiltered!==void 0){const o=Da().filter(n=>n.canArchive);if(!o.length)return;s.confirmDialog={type:"archive-emails",emailIds:o.map(n=>n.id),reason:"Bulk removed from demo inbox",title:l("triage.removeFilteredConfirmTitle"),message:`${l("triage.removeFilteredConfirmMessage")} ${o.length}`,primaryLabel:l("triage.removeFiltered"),tone:"danger"},A();return}if(e.dataset.draftFilter&&(s.draftFilter=e.dataset.draftFilter,A()),e.dataset.action==="digest"&&await $("digest",async()=>{s.digest=await Q()},"Morning digest regenerated from local demo data."),e.dataset.reviewEmail){const o=e.dataset.reviewEmail;await $(`review-${o}`,async()=>{s.selectedEmail=await ba(o),s.emails=await Y(),s.selectedDraft=null,s.selectedRule=null,s.selectedEmployee=null,s.selectedCategory=null,s.selectedTask=null,s.summary="",s.showExplanation=!1},"Message thread opened.")}if(e.dataset.reviewDraft){const o=e.dataset.reviewDraft;await $(`review-draft-${o}`,async()=>{s.selectedDraft=await Te(o),s.selectedEmail=null,s.selectedRule=null,s.selectedEmployee=null,s.selectedCategory=null,s.selectedTask=null,s.summary="",s.showExplanation=!1},"Draft opened for review.")}if(e.dataset.openEmailDraft){const o=e.dataset.openEmailDraft;await $(`open-email-draft-${o}`,async()=>{s.selectedDraft=await to(o),s.selectedEmail=null,s.selectedRule=null,s.selectedEmployee=null,s.selectedCategory=null,s.selectedTask=null,s.summary="",s.showExplanation=!1},"Draft opened for editing.")}if(e.dataset.reviewTask){const o=e.dataset.reviewTask;s.selectedTask=s.tasks.find(n=>n.id===o)||null,s.selectedEmail=null,s.selectedDraft=null,s.selectedRule=null,s.selectedEmployee=null,s.selectedCategory=null,A();return}if(e.dataset.saveTaskNote){const o=e.dataset.saveTaskNote,n=((a=document.querySelector(`[data-task-note="${o}"]`))==null?void 0:a.value)||"";await $(`task-note-${o}`,async()=>{await Be(o,{notes:n}),s.tasks=await O(),s.activity=await M()},l("tasks.noteSaved"));return}if(e.dataset.closeDrawer!==void 0&&(s.selectedEmail=null,s.selectedDraft=null,s.selectedRule=null,s.selectedEmployee=null,s.selectedCategory=null,s.selectedTask=null,s.summary="",s.showExplanation=!1,A()),e.dataset.toggleExplanation!==void 0&&(s.showExplanation=!s.showExplanation,A()),e.dataset.summaryEmail){const o=e.dataset.summaryEmail;await $(`summary-${o}`,async()=>{s.summary=await no(o)},"Thread summary generated.")}if(e.dataset.generateDraft){const o=e.dataset.generateDraft;await $(`draft-${o}`,async()=>{await Wo(o)},"Draft opened. Existing edits were preserved.")}if(e.dataset.saveDraft){const o=e.dataset.saveDraft,n=document.querySelector("[data-draft-editor]");await $(`save-${o}`,async()=>{var i;await ro(o,n.value),s.drafts=await me(),s.emails=await Y(),((i=s.selectedDraft)==null?void 0:i.id)===o&&(s.selectedDraft=await Te(o))},"Draft saved locally.")}if(e.dataset.toggleRule){const o=e.dataset.toggleRule;await $(`rule-${o}`,async()=>{await Ot(o),s.rules=await re()},"Rule preview state updated.")}if(e.dataset.approveRule){const o=e.dataset.approveRule;await $(`approve-rule-${o}`,async()=>{s.rules.find(i=>i.id===o).on||await Ot(o),s.rules=await re()},"Rule approved for observation mode.")}if(e.dataset.editRule){const o=e.dataset.editRule;await $(`edit-rule-${o}`,async()=>{s.selectedRule=s.rules.find(n=>n.id===o),s.selectedEmail=null,s.selectedDraft=null,s.selectedEmployee=null,s.selectedCategory=null,s.selectedTask=null},"Rule opened for local editing.")}if(e.dataset.saveRule){const o=e.dataset.saveRule,n=Object.fromEntries([...document.querySelectorAll("[data-rule-field]")].map(i=>[i.dataset.ruleField,i.value]));await $(`save-rule-${o}`,async()=>{await uo(o,n),s.rules=await re(),s.selectedRule=s.rules.find(i=>i.id===o)},"Rule saved locally.")}if(e.dataset.deleteRule){const o=e.dataset.deleteRule,n=s.rules.find(i=>i.id===o);s.confirmDialog={type:"delete-rule",ruleId:o,title:"Delete this rule?",message:`Delete “${(n==null?void 0:n.title)||"this rule"}” from the local demo?`,primaryLabel:"Delete rule",tone:"danger"},A()}if(e.dataset.addEmployee!==void 0&&(s.selectedEmployee={id:"new",name:"",email:"",title:"",department:""},s.selectedEmail=null,s.selectedDraft=null,s.selectedRule=null,s.selectedCategory=null,A()),e.dataset.editEmployee&&(s.selectedEmployee=s.employees.find(o=>o.id===e.dataset.editEmployee)||null,s.selectedEmail=null,s.selectedDraft=null,s.selectedRule=null,s.selectedCategory=null,A()),e.dataset.saveEmployee){const o=e.dataset.saveEmployee,n=Object.fromEntries([...document.querySelectorAll("[data-employee-field]")].map(i=>[i.dataset.employeeField,i.value]));await $(`save-employee-${o}`,async()=>{const i=o==="new"?await Ao(n):await Eo(o,n);s.employees=await it(),s.tasks=await O(),s.activity=await M(),s.selectedEmployee=s.employees.find(r=>r.id===i.id)||null},o==="new"?"Employee added locally.":"Employee changes saved locally.")}if(e.dataset.deleteEmployee){const o=e.dataset.deleteEmployee,n=s.employees.find(r=>r.id===o),i=s.emails.filter(r=>r.assignedTo===o).length;s.confirmDialog={type:"delete-employee",employeeId:o,title:"Remove this employee?",message:`Remove ${(n==null?void 0:n.name)||"this employee"}? ${i} assigned email${i===1?"":"s"} will return to Unassigned.`,primaryLabel:"Remove employee",tone:"danger"},A()}if(e.dataset.addCategory!==void 0&&(s.selectedCategory={id:"new",name:"",description:"",color:"default",active:!0,system:!1},s.selectedEmail=null,s.selectedDraft=null,s.selectedRule=null,s.selectedEmployee=null,A()),e.dataset.editCategory&&(s.selectedCategory=s.categories.find(o=>o.id===e.dataset.editCategory)||null,s.selectedEmail=null,s.selectedDraft=null,s.selectedRule=null,s.selectedEmployee=null,A()),e.dataset.saveCategory){const o=e.dataset.saveCategory,n=Object.fromEntries([...document.querySelectorAll("[data-category-field]")].map(i=>[i.dataset.categoryField,i.value]));await $(`save-category-${o}`,async()=>{const i=o==="new"?await bo(n):await $o(o,n);await Ut(i.id)},o==="new"?"Category added locally.":"Category changes saved locally.")}if(e.dataset.toggleCategory){const o=e.dataset.toggleCategory;await $(`toggle-category-${o}`,async()=>{const n=await ko(o);await Ut(n.id)},"Category visibility updated locally.")}if(e.dataset.approveDraft){const o=e.dataset.approveDraft;await $(`approve-${o}`,async()=>{await zo(o)},l("trust.approvalHint"))}if(e.dataset.approveSelected!==void 0&&await $("approve-selected",async()=>{await $a(s.selectedDraftIds),s.drafts=await me(),s.emails=await Y(),s.activity=await M(),s.digest=await Q(),s.selectedDraftIds=[]},l("trust.approvalHint")),e.dataset.approveLowRisk!==void 0){if(!Ca()){ge("Low-risk bulk approval is disabled by workspace settings.",!0);return}await $("approve-low-risk",async()=>{await co(),s.drafts=await me(),s.emails=await Y(),s.activity=await M(),s.digest=await Q(),s.selectedDraftIds=[]},l("trust.approvalHint"))}if(e.dataset.saveSettings!==void 0){const o=Object.fromEntries([...document.querySelectorAll("[data-setting]")].map(n=>[n.dataset.setting,n.value]));await $("settings",async()=>{s.settings=await so(o),s.settingsForm={...s.settings}},"Settings saved locally.")}e.dataset.resetDemo!==void 0&&(s.confirmDialog={type:"reset-demo",title:"Reset demo data?",message:"This clears all local Courio changes and restores the original fake demo data.",primaryLabel:"Reset demo data",tone:"danger"},A())}});document.addEventListener("change",async t=>{const e=t.target;if(e.dataset.setting!==void 0){s.settingsForm={...Je(),[e.dataset.setting]:e.value},e.dataset.setting==="mode"&&A();return}if(e.dataset.taskStatus){const a=e.dataset.taskStatus;await $(`task-status-${a}`,async()=>{await Be(a,{status:e.checked?"Done":"Open"}),s.tasks=await O(),s.activity=await M()},e.checked?l("tasks.completedToast"):l("tasks.reopenedToast"));return}if(e.dataset.taskAssignee){const a=e.dataset.taskAssignee;await $(`task-assignee-${a}`,async()=>{await Be(a,{assignedTo:e.value}),s.tasks=await O(),s.activity=await M()},l("tasks.assignedToast"));return}if(e.dataset.taskAssigneeFilter!==void 0){s.taskAssigneeFilter=e.value,A();return}if(e.dataset.taskFollowUp!==void 0){const a=e.dataset.taskFollowUp;await $(`task-follow-up-${a}`,async()=>{await jt(a,{enabled:e.checked}),s.tasks=await O(),s.activity=await M()},e.checked?l("tasks.followUpScheduledToast"):l("tasks.followUpRemovedToast"));return}if(e.dataset.taskFollowUpDate!==void 0){const a=e.dataset.taskFollowUpDate;await $(`task-follow-up-${a}`,async()=>{await jt(a,{enabled:!0,dueAt:e.value}),s.tasks=await O(),s.activity=await M()},l("tasks.followUpUpdatedToast"));return}if(e.dataset.taskFollowUpFilter!==void 0){s.taskFollowUpFilter=e.value,A();return}if(e.dataset.composeAttachments!==void 0){s.composeForm={...xe(),...s.composeForm,attachments:[...e.files].map((a,o)=>({id:`local-${Date.now()}-${o}`,name:a.name,type:a.type||"Unknown",size:a.size}))},Ia();return}if(e.dataset.triageCategoryFilter!==void 0){s.triageCategoryFilter=e.value,A();return}if(e.dataset.emailCategory){const a=e.dataset.emailCategory;await $(`category-${a}`,async()=>{await ka(a,e.value),await we(a),s.tasks=await O()},"Category updated locally.")}if(e.dataset.emailAssignee){const a=e.dataset.emailAssignee;await $(`assign-${a}`,async()=>{await So(a,e.value),await we(a),s.tasks=await O()},"Email assignment updated locally.")}if(e.dataset.selectDraft){const a=e.dataset.selectDraft;s.selectedDraftIds=e.checked?[...new Set([...s.selectedDraftIds,a])]:s.selectedDraftIds.filter(o=>o!==a),A()}});document.addEventListener("input",t=>{const e=t.target;if(e.dataset.setting!==void 0){s.settingsForm={...Je(),[e.dataset.setting]:e.value};return}if(e.dataset.composeField!==void 0){s.composeForm={...xe(),...s.composeForm,[e.dataset.composeField]:e.value};return}if(e.dataset.ruleSearch===void 0)return;s.ruleQuery=e.value,xa();const a=document.querySelector("[data-rule-search]");a==null||a.focus(),a==null||a.setSelectionRange(s.ruleQuery.length,s.ruleQuery.length)});document.addEventListener("submit",async t=>{var r;const e=t.target.closest("[data-colleague-follow-up]");if(e){if(t.preventDefault(),h("colleague-follow-up"))return;const c=Object.fromEntries(new FormData(e)),g=e.dataset.colleagueFollowUp;s.colleagueFollowUp={...s.colleagueFollowUp,formValues:c},await $("colleague-follow-up",async()=>{await wo(g,c),s.tasks=await O(),s.colleagueFollowUp=null},l("employee.requested"));return}if(t.target.matches("[data-preferences-form]")){if(t.preventDefault(),h("preferences")||h("preference-image"))return;const c=structuredClone(s.preferencesForm);await $("preferences",async()=>{const g=await ya(c);s.preferences=g,s.preferencesForm=s.tab==="preferences"?structuredClone(g):null,s.preferences.hiddenCategoryIds.some(p=>{var u;return((u=s.categories.find(w=>w.id===p))==null?void 0:u.name)===s.triageCategoryFilter})&&(s.triageCategoryFilter="all")},l("preferences.saved"));return}const a=t.target.closest("[data-task-editor]");if(a){if(t.preventDefault(),h("save-task"))return;const c=Object.fromEntries(new FormData(a));a.querySelector("[data-collaborators-editable]")&&(c.collaboratorIds=new FormData(a).getAll("collaboratorIds"));const g=(r=s.taskEditor)==null?void 0:r.id;s.taskEditor={...s.taskEditor,...c},await $("save-task",async()=>{g?await Be(g,c):await vo(c),s.tasks=await O(),s.activity=await M(),s.taskEditor=null,s.selectedTask=null,s.taskAssigneeFilter="all",s.taskFollowUpFilter="all",K("tasks")},l("taskWork.saved"));return}const o=t.target.closest(".assistant-form");if(!o)return;t.preventDefault();const n=o.querySelector("[data-assistant-input]"),i=n.value.trim();i&&(n.value="",await Ma(i))});A();Lo();
