(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function a(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(n){if(n.ep)return;n.ep=!0;const i=a(n);fetch(n.href,i)}})();/**
 * @license lucide v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ba={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dt=([t,e,a])=>{const o=document.createElementNS("http://www.w3.org/2000/svg",t);return Object.keys(e).forEach(n=>{o.setAttribute(n,String(e[n]))}),a!=null&&a.length&&a.forEach(n=>{const i=Dt(n);o.appendChild(i)}),o},Ke=(t,e={})=>{const a="svg",o={...ba,...e};return Dt([a,o,t])};/**
 * @license lucide v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $a=[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"}],["path",{d:"M10 12h4"}]];/**
 * @license lucide v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ka=[["path",{d:"M12 8V4H8"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2"}],["path",{d:"M2 14h2"}],["path",{d:"M20 14h2"}],["path",{d:"M15 13v2"}],["path",{d:"M9 13v2"}]];/**
 * @license lucide v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sa=[["path",{d:"M20 6 9 17l-5-5"}]];/**
 * @license lucide v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pt=[["path",{d:"m9 18 6-6-6-6"}]];/**
 * @license lucide v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Aa=[["circle",{cx:"12",cy:"12",r:"10"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16"}]];/**
 * @license lucide v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ea=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m16 9-5.5 5.5L8 12"}]];/**
 * @license lucide v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Da=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}]];/**
 * @license lucide v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ca=[["line",{x1:"2",x2:"22",y1:"2",y2:"22"}],["path",{d:"M10.41 10.41a2 2 0 1 1-2.83-2.83"}],["line",{x1:"13.5",x2:"6",y1:"13.5",y2:"21"}],["line",{x1:"18",x2:"21",y1:"12",y2:"15"}],["path",{d:"M3.59 3.59A1.99 1.99 0 0 0 3 5v14a2 2 0 0 0 2 2h14c.55 0 1.052-.22 1.41-.59"}],["path",{d:"M21 15V5a2 2 0 0 0-2-2H9"}]];/**
 * @license lucide v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ct=[["polyline",{points:"22 12 16 12 14 15 10 15 8 12 2 12"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"}]];/**
 * @license lucide v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ta=[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"}],["path",{d:"M9 18h6"}],["path",{d:"M10 22h4"}]];/**
 * @license lucide v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ra=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"}]];/**
 * @license lucide v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tt=[["path",{d:"M13 5h8"}],["path",{d:"M13 12h8"}],["path",{d:"M13 19h8"}],["path",{d:"m3 17 2 2 4-4"}],["path",{d:"m3 7 2 2 4-4"}]];/**
 * @license lucide v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xa=[["path",{d:"M13 5h8"}],["path",{d:"M13 12h8"}],["path",{d:"M13 19h8"}],["path",{d:"m3 17 2 2 4-4"}],["rect",{x:"3",y:"4",width:"6",height:"6",rx:"1"}]];/**
 * @license lucide v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ia=[["path",{d:"m16 17 5-5-5-5"}],["path",{d:"M21 12H9"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}]];/**
 * @license lucide v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fa=[["path",{d:"M4 5h16"}],["path",{d:"M4 12h16"}],["path",{d:"M4 19h16"}]];/**
 * @license lucide v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ma=[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21"}]];/**
 * @license lucide v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const La=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"}]];/**
 * @license lucide v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qa=[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor"}]];/**
 * @license lucide v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ze=[["path",{d:"M13 21h8"}],["path",{d:"m15 5 4 4"}],["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"}]];/**
 * @license lucide v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rt=[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]];/**
 * @license lucide v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Na=[["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"}],["path",{d:"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6"}],["rect",{x:"6",y:"14",width:"12",height:"8",rx:"1"}]];/**
 * @license lucide v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oa=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}],["path",{d:"M3 3v5h5"}],["path",{d:"M12 7v5l4 2"}]];/**
 * @license lucide v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xt=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7"}]];/**
 * @license lucide v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ja=[["path",{d:"m21 21-4.34-4.34"}],["circle",{cx:"11",cy:"11",r:"8"}]];/**
 * @license lucide v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const It=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"}],["circle",{cx:"12",cy:"12",r:"3"}]];/**
 * @license lucide v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pa=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"m9 12 2 2 4-4"}]];/**
 * @license lucide v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ce=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"}],["path",{d:"M20 2v4"}],["path",{d:"M22 4h-4"}],["circle",{cx:"4",cy:"20",r:"2"}]];/**
 * @license lucide v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ua=[["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M12 2v2"}],["path",{d:"M12 20v2"}],["path",{d:"m4.93 4.93 1.41 1.41"}],["path",{d:"m17.66 17.66 1.41 1.41"}],["path",{d:"M2 12h2"}],["path",{d:"M20 12h2"}],["path",{d:"m6.34 17.66-1.41 1.41"}],["path",{d:"m19.07 4.93-1.41 1.41"}]];/**
 * @license lucide v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _a=[["path",{d:"M16 7h6v6"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17"}]];/**
 * @license lucide v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mt=[["path",{d:"M9 14 4 9l5-5"}],["path",{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11"}]];/**
 * @license lucide v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ba=[["path",{d:"M12 3v12"}],["path",{d:"m17 8-5-5-5 5"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}]];/**
 * @license lucide v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ft=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}],["circle",{cx:"9",cy:"7",r:"4"}]];/**
 * @license lucide v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ha=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];function l(t=""){return String(t).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function V(t=[]){return t.map(e=>l(e)).join(", ")}function ae(t,e){t&&t.prepend(Ke(e,{width:18,height:18,"aria-hidden":"true"}))}const gt={urgent:"#cf252c",invoice:"#397e28",lead:"#1254ed",pending:"#9a6700",default:"#687186"};function We(t,e){var a;return((a=e==null?void 0:e.labelColors)==null?void 0:a[t.id])||gt[t.color]||gt.default}function Mt(t){const e=t.slice(1).match(/../g).map(i=>parseInt(i,16)/255),[a,o,n]=e.map(i=>i<=.04045?i/12.92:((i+.055)/1.055)**2.4);return .2126*a+.7152*o+.0722*n>.179?"#000000":"#ffffff"}function Wa(t,{form:e,categories:a,t:o,busy:n,onChange:i,onImage:r}){if(!e){t.replaceChildren();return}const c=p=>o(`preferences.${p}`);t.innerHTML=`
    <form data-preferences-form class="preferences-form">
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
            <span class="badge" data-color-preview="${l(p.id)}">${l(p.name)}</span>
            <label class="visibility-choice"><input type="checkbox" data-category-visible="${l(p.id)}" ${e.hiddenCategoryIds.includes(p.id)?"":"checked"} ${p.active?"":"disabled"}>${p.active?c("show"):c("archived")}</label>
            <div class="color-controls">
              <label><span class="sr-only">${c("color")}: ${l(p.name)}</span><input type="color" data-label-color="${l(p.id)}" value="${We(p,e)}"></label>
              <button class="btn subtle icon-button" type="button" data-reset-label="${l(p.id)}" title="${c("defaultColor")}" aria-label="${c("defaultColor")}: ${l(p.name)}"></button>
            </div>
          </div>`).join(""):`<p class="empty-state">${c("empty")}</p>`}
        </div>
      </fieldset>
      <div class="actions preferences-actions">
        <button class="btn primary" type="submit" data-save-preferences ${n?"disabled":""}>${c(n?"saving":"save")}</button>
        <button class="btn subtle" type="button" data-discard-preferences ${n?"disabled":""}>${c("cancel")}</button>
        <button class="btn subtle" type="button" data-reset-preferences ${n?"disabled":""}>${c("reset")}</button>
      </div>
    </form>`;for(const[p,u]of[["light",Ua],["dark",La],["system",Ma]])ae(t.querySelector(`[data-theme-icon="${p}"]`),u);ae(t.querySelector("[data-upload-icon]"),Ba),ae(t.querySelector("[data-remove-background]"),Ca),ae(t.querySelector("[data-save-preferences]"),xt),ae(t.querySelector("[data-discard-preferences]"),Ha),ae(t.querySelector("[data-reset-preferences]"),mt),t.querySelectorAll("[data-reset-label]").forEach(p=>ae(p,mt));const g=()=>{const p=t.querySelector(".background-preview");p.style.backgroundImage=e.backgroundImage?`url("${e.backgroundImage}")`:"none",p.style.setProperty("--image-shading",String(e.backgroundDim/100)),p.querySelector("span").textContent=e.backgroundImage?c("preview"):c("noImage"),t.querySelectorAll("[data-color-preview]").forEach(u=>{const w=a.find(S=>S.id===u.dataset.colorPreview),k=We(w,e);u.style.backgroundColor=k,u.style.color=Mt(k)})};g(),t.oninput=p=>{const u=p.target;if(u.name==="theme")e.theme=u.value;else if(u.name==="backgroundDim")e.backgroundDim=Number(u.value),t.querySelector("[data-dim-output]").textContent=`${e.backgroundDim}%`;else if(u.dataset.labelColor)e.labelColors[u.dataset.labelColor]=u.value;else if(u.dataset.categoryVisible)e.hiddenCategoryIds=e.hiddenCategoryIds.filter(w=>w!==u.dataset.categoryVisible),u.checked||e.hiddenCategoryIds.push(u.dataset.categoryVisible);else return;i(e),g()},t.onchange=p=>{var u;p.target.matches("[data-preference-image]")&&r((u=p.target.files)==null?void 0:u[0])},t.onclick=p=>{const u=p.target.closest("button");if(u!=null&&u.dataset.resetLabel){const w=u.dataset.resetLabel;delete e.labelColors[w];const k=We(a.find(S=>S.id===w),e);t.querySelectorAll("[data-label-color]").forEach(S=>{S.dataset.labelColor===w&&(S.value=k)}),i(e),g()}}}async function za(t){if(!t||!["image/jpeg","image/png","image/webp"].includes(t.type)||t.size>5*1024*1024)throw new Error("invalidImage");const e=await createImageBitmap(t);try{if(!e.width||!e.height||e.width*e.height>4e7)throw new Error("invalidImage");const a=Math.min(1,1600/Math.max(e.width,e.height)),o=document.createElement("canvas");o.width=Math.max(1,Math.round(e.width*a)),o.height=Math.max(1,Math.round(e.height*a));const n=o.getContext("2d");n.fillStyle="#ffffff",n.fillRect(0,0,o.width,o.height),n.drawImage(e,0,0,o.width,o.height);for(const i of[.82,.65,.45,.3]){const r=o.toDataURL("image/jpeg",i);if(r.length<=7e5)return r}throw new Error("invalidImage")}finally{e.close()}}const Lt=window.matchMedia("(prefers-color-scheme: dark)");function qt(){const t=document.documentElement;t.dataset.theme=t.dataset.themePreference==="system"?Lt.matches?"dark":"light":t.dataset.themePreference||"light"}Lt.addEventListener("change",qt);function Va(t,e){const a=document.documentElement;a.dataset.themePreference=(t==null?void 0:t.theme)||"light",qt(),a.classList.toggle("has-personal-background",!!(t!=null&&t.backgroundImage)),a.style.setProperty("--personal-background",t!=null&&t.backgroundImage?`url("${t.backgroundImage}")`:"none"),a.style.setProperty("--image-shading",String(((t==null?void 0:t.backgroundDim)??80)/100)),document.querySelectorAll("[data-category-label]").forEach(n=>{var c;const i=e.find(g=>g.name===n.dataset.categoryLabel),r=(c=t==null?void 0:t.labelColors)==null?void 0:c[i==null?void 0:i.id];r&&(n.style.backgroundColor=r,n.style.color=Mt(r),n.style.borderColor=r)}),[["[data-add-task],[data-add-employee],[data-add-category],[data-new-compose]",Rt],["[data-edit-task],[data-edit-employee],[data-edit-category],[data-edit-rule]",Ze],["[data-save-task-note],[data-save-settings],[data-save-employee],[data-save-category],[data-save-rule],[data-save-draft],[data-save-compose]",xt],["[data-archive-email],[data-archive-filtered]",$a],["[data-review-task]",Oa],["[data-approve-draft]",Sa],["[data-print-compose]",Na],["[data-logout-demo]",Ia]].forEach(([n,i])=>document.querySelectorAll(n).forEach(r=>{if(r.querySelector("svg"))return;const c=Ke(i,{width:18,height:18,"aria-hidden":"true"});c.classList.add("courio-icon"),r.prepend(c)}))}const ze=new Map,ft=new Map;let de="general",vt;function f(t,e,a){const o=document.createElement(t);return e&&(o.className=e),a!==void 0&&(o.textContent=a),o}function G(t){const e=Ke(t,{width:22,height:22,"aria-hidden":"true"});return e.classList.add("courio-icon"),e}function Nt(t="Courio"){return t.trim().split(/\s+/).slice(0,2).map(e=>e[0]||"").join("").toUpperCase()}function oe(t,e,a){const o=f("button","btn",t);return o.type="button",e&&o.prepend(G(e)),a&&o.addEventListener("click",a),o}function Ga({state:t,t:e,canAccessTab:a,navigateTo:o}){var S,R;const n=document.querySelector(".nav"),i=x=>e(`design.${x}`),r=[["dashboard","today",Da],["triage","inbox",Ct],["tasks","tasks",xa],["drafts","drafts",Ze],["compose","compose",Rt],["rules","automation",ka],["admin","team",Ft,"employees"],["import","connection",Ra],["admin","settings",It,"general"],["preferences","preferences",qa]];n.replaceChildren();for(const[x,H,D,C]of r){H==="automation"&&n.append(f("div","nav-label workspace-label",i("workspace")));const L=oe(x==="preferences"?e("preferences.title"):i(H),D,()=>{C&&(de=C),document.querySelector(".app").classList.remove("menu-open"),o(x)});L.dataset.destination=x,L.hidden=!a(x),L.classList.toggle("active",t.tab===x&&(!C||(C==="general"?de==="general":de!=="general"))),x==="compose"&&L.classList.add("nav-compose"),n.append(L)}document.querySelector(".brand-title").replaceChildren(G(Ce),document.createTextNode("Courio")),document.querySelector(".brand-sub").textContent=i("local");let g=document.querySelector(".workspace-topbar");g||(g=f("header","workspace-topbar"),document.querySelector("main").prepend(g));const p=oe("",Fa,()=>document.querySelector(".app").classList.toggle("menu-open"));p.classList.add("mobile-menu"),p.title=i("toggleMenu"),p.setAttribute("aria-label",i("toggleMenu"));const u=oe(i("ask"),Ce);u.classList.add("topbar-assistant"),u.dataset.assistantToggle="",g.replaceChildren(p,u);const w=document.querySelector(".session-pill");if(w){const x=f("span","avatar",Nt(t.session.name));x.setAttribute("aria-hidden","true"),w.prepend(x),g.append(w)}document.documentElement.lang=t.settings.language||"en";const k={dashboard:"today",triage:"inbox",tasks:"tasks",compose:"compose",drafts:"drafts",rules:"automation",admin:"settings",import:"connection"};document.querySelector("#pageTitle").textContent=t.tab==="dashboard"?`${i("hello")}, ${((R=(S=t.session)==null?void 0:S.name)==null?void 0:R.split(" ")[0])||"Courio"}`:i(k[t.tab]),t.tab==="dashboard"&&(document.querySelector("#pageSubtitle").textContent=i("attention")),t.tab==="preferences"&&(document.querySelector("#pageTitle").textContent=e("preferences.title"),document.querySelector("#pageSubtitle").textContent=e("preferences.subtitle"))}function Qa({state:t,t:e,navigateTo:a}){const o=document.querySelector("#dashboard"),n=o.querySelectorAll(":scope > .cols-2 > .panel"),i=n[0],r=n[1];if(!i||!r)return;const c=D=>e(`design.${D}`),g=[t.emails.filter(D=>D.urgency==="High"&&D.status!=="Done").length,t.drafts.filter(D=>D.canSelectForBulkApproval).length,t.tasks.filter(D=>D.status!=="Done").length],p=[()=>a("triage",{triageFilter:"urgent"}),()=>a("drafts",{draftFilter:"needs_approval"}),()=>a("tasks")],u=f("div","overview-metrics");[Aa,Ze,Ea].forEach((D,C)=>{const L=oe("",null,p[C]);L.className=`overview-metric metric-tone-${C}`;const Se=f("span","metric-symbol");Se.append(G(D));const pe=f("span","metric-content");pe.append(f("strong","",String(g[C])),f("span","",c(["urgent","pending","openTasks"][C]))),L.append(Se,pe,G(pt)),u.append(L)});const w=oe(c("start"),Ce,p[0]);w.classList.add("primary","start-review");const k=f("section","next-actions"),S=f("h2","");S.append(G(Tt),document.createTextNode(c("next"))),k.append(S),["urgentAction","draftAction","taskAction"].forEach((D,C)=>{const L=oe("",null,p[C]);L.className="next-action",L.append(f("span","step-num",String(C+1)),f("span","",`${c(D)} (${g[C]})`),G(pt)),k.append(L)}),i.className="digest-surface",i.querySelector("h2").textContent=c("digest"),i.querySelector("h2").prepend(G(_a));const R=i.querySelector("table");if(R){const D=f("details","digest-details");D.append(f("summary","",c("fullDigest")),R),i.querySelector(".subtitle").after(D)}r.className="recommendations-surface",r.querySelector("h2").textContent=c("recommendations"),r.querySelector("h2").prepend(G(Ta));const x=f("div","overview-summary");x.append(i,r);const H=f("div","overview-lower");H.append(k,x),o.replaceChildren(u,w,H)}function Ve({state:t,t:e},a,o){var rt;const n=document.querySelector(`#${a}`),i=n.querySelector("table");if(!(i!=null&&i.tBodies[0]))return;const r=F=>e(`design.${F}`),c=[...i.tBodies[0].rows],g=o.records,p=f("div","queue-workspace"),u=f("div","queue-list"),w=f("article","queue-detail");w.id=`${a}Detail`;const k=f("label","queue-search");k.append(G(ja));const S=f("input","");S.type="search",S.placeholder=r("search"),S.setAttribute("aria-label",r("search")),S.value=ft.get(a)||"",k.append(S),u.append(k);const R=[];let x=ze.get(a);const H=a==="triage"?t.selectedEmail:a==="drafts"?t.selectedDraft:null;H&&(x=H.id),c.forEach(F=>{const ne=F.querySelector(o.trigger);if(!ne)return;const q=ne.getAttribute(o.attribute),ee=g.find(P=>P.id===q);if(!ee)return;const _e=[...F.cells],Ae=f("div","queue-entry"),me=f("button","queue-item");me.type="button";const Ee=o.title(ee),Be=o.subtitle(ee),va=f("span","avatar",Nt(o.avatar(ee))),He=f("span","queue-item-copy");He.append(f("strong","",Ee),f("span","",Be));const ha=f("small","",o.status(ee));if(He.append(ha),me.append(va,He),o.checkColumn!==void 0){const P=_e[o.checkColumn].querySelector("input");P&&(P.setAttribute("aria-label",`${r(a==="drafts"?"review":"done")}: ${Ee}`),Ae.append(P))}Ae.append(me),u.append(Ae);const te=f("div","record-detail"),ya=f("h2","record-heading",Ee);te.append(ya,f("p","record-subtitle",Be));const wa=_e.at(-1),lt=f("div","actions record-actions");if(lt.append(...wa.childNodes),te.append(lt),a==="triage"){const P=f("div","email-body",ee.body||"");te.append(P);const ge=f("section","reason-surface"),re=f("h3","",r("reason"));re.prepend(G(Ce)),ge.append(re,f("p","",ee.explanation||"")),te.append(ge)}const dt=f("div","record-fields");_e.slice(0,-1).forEach((P,ge)=>{if(o.omit.includes(ge))return;const re=f("section","record-field");re.append(f("h3","",r(o.labels[ge])));const ut=f("div","record-field-value");ut.append(...P.childNodes),re.append(ut),dt.append(re)}),te.append(dt);const ct=()=>{ze.set(a,q),R.forEach(P=>{P.entry.classList.toggle("active",P.id===q),P.select.setAttribute("aria-pressed",String(P.id===q))}),w.replaceChildren(te)};me.addEventListener("click",()=>{ct(),a!=="tasks"&&ne.click()}),R.push({id:q,entry:Ae,select:me,view:te,choose:ct,text:`${Ee} ${Be}`.toLocaleLowerCase()})});const D=f("p","empty-state",r("noMatch"));D.hidden=!0,u.append(D);const C=n.querySelector("[data-archive-filtered]"),L=C==null?void 0:C.disabled,Se=(C==null?void 0:C.title)||"",pe=()=>{var ne;const F=S.value.toLocaleLowerCase().trim();ft.set(a,S.value),R.forEach(q=>{q.entry.hidden=!q.text.includes(F)}),D.hidden=R.some(q=>!q.entry.hidden),C&&(C.disabled=L||!!F,C.title=F?r("clearSearch"):Se),D.hidden?R.some(q=>q.id===ze.get(a)&&!q.entry.hidden)||(ne=R.find(q=>!q.entry.hidden))==null||ne.choose():w.replaceChildren(f("p","empty-state",r("noMatch")))};S.addEventListener("input",pe),pe(),(rt=R.find(F=>F.id===x&&!F.entry.hidden)||R.find(F=>!F.entry.hidden))==null||rt.choose(),p.append(u,w),i.replaceWith(p);const fa=p.parentElement;for(const F of[...fa.children])(F.classList.contains("segmented")||F.classList.contains("list-toolbar"))&&k.after(F);n.classList.add("work-queue")}function Ya({state:t,t:e}){var c,g,p;const a=document.querySelector("#drawerRoot > .review-drawer"),o=t.tab==="triage"&&t.selectedEmail?document.querySelector("#triageDetail"):t.tab==="drafts"&&t.selectedDraft?document.querySelector("#draftsDetail"):null;if(!a||!o)return;a.classList.add("inline-review");const n=[...a.querySelectorAll(":scope > .drawer-section")],i=[...a.querySelectorAll(":scope > .drawer-grid")],r=a.querySelector(".drawer-actions");if(t.selectedEmail){a.querySelector(".drawer-header").after(r);const w=f("details","review-extra");w.append(f("summary","",e("design.more"))),w.append(...i.slice(1),n[1],n[2],n[4]),(g=(c=n[0])==null?void 0:c.querySelector(".preview"))==null||g.classList.add("review-email-body"),(p=n[3])==null||p.classList.add("reason-surface"),a.querySelector(".drawer-note").before(w),t.summary&&n[5]&&r.after(n[5])}else{const u=f("details","review-extra");u.append(f("summary","",e("design.source")),n[0],n[1]),a.querySelector(".drawer-header").after(u),i.forEach(w=>w.classList.add("draft-summary-stats"))}o.replaceChildren(a),document.querySelector("#drawerRoot").replaceChildren()}function Ja({t}){const e=document.querySelector("#compose > .grid > .panel");if(!e)return;const a=e.querySelector(":scope > .preview"),o=e.querySelector(":scope > .drawer-section"),n=e.querySelector(":scope > .actions"),i=e.querySelector(".form-grid > .preview"),r=e.querySelector(".panel-title > div");if(r==null||r.remove(),o){const c=f("details","compose-metadata");c.append(f("summary","",t("compose.attachmentMetadata")),o),i&&c.append(i),n.before(c)}a&&(a.classList.add("compose-safety"),e.append(a))}function Ka({state:t,t:e}){const a=document.querySelector("#admin"),o=a.querySelector(":scope > .grid");if(!o)return;const n=[...o.children];if(n.length!==5)return;const i=["general","safety","employees","categories","activity"],r=f("div","settings-workspace"),c=f("nav","settings-nav");c.setAttribute("aria-label",e("design.settings"));const g=f("div","settings-content"),p=w=>{de=w,n.forEach((k,S)=>{k.hidden=i[S]!==w}),c.querySelectorAll("button").forEach(k=>k.classList.toggle("active",k.dataset.settingsSection===w))};i.forEach((w,k)=>{const S=oe(e(`design.${w}`),[It,Pa,Ft,Ct,Tt][k],()=>p(w));S.dataset.settingsSection=w,c.append(S),n[k].classList.add("settings-surface"),g.append(n[k])}),r.append(c,g),a.replaceChildren(r),p(de);const u=n[0].querySelector("[data-reset-demo]");if(u){const w=f("section","settings-reset"),k=f("h3","",e("design.reset"));w.append(k,u),n[0].append(w)}}function Za(t){const{state:e}=t;vt==="admin"&&e.tab!=="admin"&&(de="general"),vt=e.tab,Ga(t),Qa(t),Ve(t,"triage",{records:e.emails,trigger:"[data-review-email]",attribute:"data-review-email",title:a=>a.subject,subtitle:a=>a.sender,avatar:a=>a.sender,status:a=>`${a.category} · ${a.workflowLabel||a.status}`,omit:[0,1],labels:["subject","sender","category","assigned","workflow","status"]}),Ve(t,"drafts",{records:e.drafts,trigger:"[data-review-draft]",attribute:"data-review-draft",checkColumn:0,title:a=>a.title,subtitle:a=>a.source,avatar:a=>a.source,status:a=>a.statusLabel,omit:[0,1],labels:["review","subject","source","risk","status"]}),Ve(t,"tasks",{records:e.tasks,trigger:"[data-review-task]",attribute:"data-review-task",checkColumn:0,title:a=>a.title,subtitle:a=>{var o;return((o=a.assignedEmployee)==null?void 0:o.name)||t.t("tasks.unassigned")},avatar:a=>{var o;return((o=a.assignedEmployee)==null?void 0:o.name)||a.title},status:a=>`${a.priority} · ${a.status}`,omit:[0],labels:["done","details","priority","assigned","source","notes"]}),Ya(t),Ka(t),Ja(t)}function Xa(t,e,a,o,n){const i=c=>n(`taskWork.${c}`),r=(c,g)=>c.map(p=>`<option value="${p}" ${p===g?"selected":""}>${i(p)}</option>`).join("");t.innerHTML=`
    <div class="drawer-backdrop" data-close-drawer></div>
    <aside class="review-drawer" role="dialog" aria-modal="true" aria-label="${i(e.id?"edit":"add")}">
      <div class="drawer-header"><h2>${i(e.id?"edit":"add")}</h2><button class="btn subtle" data-close-drawer>${i("cancel")}</button></div>
      <form data-task-editor class="form-grid">
        <label>${i("title")}<input name="title" required value="${l(e.title||"")}"></label>
        <label>${i("notes")}<textarea name="notes">${l(e.notes||"")}</textarea></label>
        <label>${i("priority")}<select name="priority">${r(["High","Medium","Low"],e.priority||"Medium")}</select></label>
        <label>${i("dueAt")}<input type="date" name="dueAt" value="${l(e.dueAt||"")}"></label>
        ${o?`<label>${i("assignedTo")}<select name="assignedTo"><option value="">${n("tasks.unassigned")}</option>${a.map(c=>`<option value="${l(c.id)}" ${e.assignedTo===c.id?"selected":""}>${l(c.name)}</option>`).join("")}</select></label>`:""}
        ${e.id?`<label>${i("status")}<select name="status">${r(["Open","Done"],e.status)}</select></label>`:""}
        <button class="btn primary" type="submit">${i("save")}</button>
      </form>
    </aside>`}const ht={en:{today:"Today",inbox:"Inbox",tasks:"Tasks",drafts:"Drafts",compose:"New message",automation:"Automation",team:"Team & categories",connection:"Connection",settings:"Settings",workspace:"Workspace",ask:"Ask Courio...",hello:"Hello",attention:"Here is what needs your attention today.",urgent:"urgent emails",pending:"drafts awaiting approval",openTasks:"tasks to complete",start:"Start reviewing",next:"Next actions",urgentAction:"Review urgent messages",draftAction:"Review drafts awaiting approval",taskAction:"Complete assigned tasks",digest:"Morning digest",recommendations:"Recommendations",fullDigest:"View full digest",general:"General",employees:"Team",categories:"Categories",activity:"Activity",safety:"Demo safeguards",reset:"Reset demo data",search:"Search this list...",noMatch:"No items match your search.",select:"Select an item to review its details.",review:"Review",summary:"Courio summary",reason:"Why this priority?",noSend:"Approval makes a draft ready for human send. This demo never sends email.",local:"Local demo",details:"Details",close:"Close",more:"More details",edit:"Review and edit",saved:"Saved drafts",account:"Demo account",itemCount:"items",filters:"Filters",status:"Status",source:"Source",subject:"Subject",sender:"Sender",category:"Category",assigned:"Assigned to",workflow:"Workflow",risk:"Risk",notes:"Notes",priority:"Priority",done:"Complete",toggleMenu:"Toggle navigation",clearSearch:"Clear the list search before removing filtered emails."},fr:{today:"Aujourd'hui",inbox:"Boîte de réception",tasks:"Tâches",drafts:"Brouillons",compose:"Nouveau message",automation:"Automatisation",team:"Équipe et catégories",connection:"Connexion",settings:"Paramètres",workspace:"Espace de travail",ask:"Demander à Courio...",hello:"Bonjour",attention:"Voici ce qui demande votre attention aujourd'hui.",urgent:"courriels urgents",pending:"brouillons à approuver",openTasks:"tâches à compléter",start:"Commencer la révision",next:"Prochaines actions",urgentAction:"Examiner les messages urgents",draftAction:"Réviser les brouillons en attente",taskAction:"Compléter les tâches assignées",digest:"Résumé du matin",recommendations:"Recommandations",fullDigest:"Voir le résumé complet",general:"Général",employees:"Équipe",categories:"Catégories",activity:"Activité",safety:"Garanties de la démo",reset:"Réinitialiser les données de démonstration",search:"Rechercher dans cette liste...",noMatch:"Aucun élément ne correspond à votre recherche.",select:"Sélectionnez un élément pour consulter ses détails.",review:"Réviser",summary:"Résumé par Courio",reason:"Pourquoi cette priorité?",noSend:"L'approbation prépare un brouillon pour un envoi humain. Cette démo n'envoie jamais de courriel.",local:"Démo locale",details:"Détails",close:"Fermer",more:"Plus de détails",edit:"Réviser et modifier",saved:"Brouillons enregistrés",account:"Compte de démonstration",itemCount:"éléments",filters:"Filtres",status:"Statut",source:"Source",subject:"Objet",sender:"Expéditeur",category:"Catégorie",assigned:"Assigné à",workflow:"Flux de travail",risk:"Risque",notes:"Notes",priority:"Priorité",done:"Terminer",toggleMenu:"Afficher ou masquer la navigation",clearSearch:"Effacez la recherche avant de retirer les courriels filtrés."}},yt={en:{add:"Add task",edit:"Edit task",emailTask:"Open / assign task",title:"Title",notes:"Notes",priority:"Priority",assignedTo:"Assigned to",dueAt:"Due date",status:"Status",High:"High",Medium:"Medium",Low:"Low",Open:"Open",Done:"Complete",save:"Save task",cancel:"Cancel",saved:"Task saved.",restored:"Task change restored.",updated:"Task updated",created:"Task created",restore:"Restore previous values",restoreTitle:"Restore this task change?",restoreMessage:"Restore the values shown below? Later changes to these fields will be replaced. Email approval is unaffected.",legacy:"Older activity has no saved values to restore.",titleRequired:"Enter a task title.",invalidPriority:"Choose a valid priority.",invalidStatus:"Choose a valid task status.",invalidAssignee:"This employee is no longer available. Choose an existing employee.",invalidDate:"Choose a valid due date.",notFound:"Task not found.",forbidden:"Your demo account cannot make this task change.",noSnapshot:"This activity has no saved values to restore.",none:"None",myTasks:"My tasks"},fr:{add:"Ajouter une tâche",edit:"Modifier la tâche",emailTask:"Ouvrir / assigner la tâche",title:"Titre",notes:"Notes",priority:"Priorité",assignedTo:"Assignée à",dueAt:"Échéance",status:"Statut",High:"Élevée",Medium:"Moyenne",Low:"Faible",Open:"Ouverte",Done:"Terminée",save:"Enregistrer la tâche",cancel:"Annuler",saved:"Tâche enregistrée.",restored:"Modification restaurée.",updated:"Tâche modifiée",created:"Tâche créée",restore:"Restaurer les valeurs précédentes",restoreTitle:"Restaurer cette modification?",restoreMessage:"Restaurer les valeurs ci-dessous? Les modifications ultérieures de ces champs seront remplacées. L'approbation du courriel reste inchangée.",legacy:"Cette ancienne activité ne contient aucune valeur à restaurer.",titleRequired:"Saisissez un titre.",invalidPriority:"Choisissez une priorité valide.",invalidStatus:"Choisissez un statut valide.",invalidAssignee:"Cet employé n'est plus disponible. Choisissez un employé existant.",invalidDate:"Choisissez une date valide.",notFound:"Tâche introuvable.",forbidden:"Votre compte de démonstration ne peut pas effectuer cette modification.",noSnapshot:"Cette activité ne contient aucune valeur à restaurer.",none:"Aucune",myTasks:"Mes tâches"}},wt={en:{title:"My preferences",subtitle:"Appearance for your demo account only.",theme:"Theme",light:"Light",dark:"Dark",system:"Use device setting",background:"Background image",chooseImage:"Choose image",removeImage:"Remove image",imageNote:"JPEG, PNG or WebP, up to 5 MB. Resized and saved only in this browser.",dim:"Background shading",preview:"Background preview",noImage:"Default background",labels:"Label colors and category shortcuts",color:"Color",show:"Show in category filter",categoryNote:"Hidden shortcuts do not hide messages. All categories still includes every message you can access.",defaultColor:"Use shared color",archived:"Archived",save:"Save my preferences",saving:"Saving...",cancel:"Discard changes",reset:"Restore my defaults",saved:"Your preferences were saved.",resetDone:"Your appearance preferences were reset.",uploading:"Preparing image...",empty:"No categories available.",invalid:"Choose valid appearance preferences.",invalidImage:"Choose a valid JPEG, PNG or WebP image within the size limit.",storageFull:"Browser storage is full. Remove the background image or choose a smaller one. Your saved preferences have not changed.",sessionRequired:"Sign in to a demo account before saving preferences.",resetTitle:"Reset your appearance?",resetMessage:"Your theme, background, label colors and category shortcuts will return to defaults. Other accounts and workspace settings will not change."},fr:{title:"Mes préférences",subtitle:"L'apparence de votre compte de démonstration seulement.",theme:"Thème",light:"Clair",dark:"Sombre",system:"Selon l'appareil",background:"Image de fond",chooseImage:"Choisir une image",removeImage:"Retirer l'image",imageNote:"JPEG, PNG ou WebP, 5 Mo maximum. Redimensionnée et enregistrée uniquement dans ce navigateur.",dim:"Voile de lisibilité",preview:"Aperçu du fond",noImage:"Fond par défaut",labels:"Couleurs et raccourcis des catégories",color:"Couleur",show:"Afficher dans le filtre des catégories",categoryNote:"Masquer un raccourci ne masque aucun message. Toutes les catégories inclut tous les messages auxquels vous avez accès.",defaultColor:"Utiliser la couleur partagée",archived:"Archivée",save:"Enregistrer mes préférences",saving:"Enregistrement...",cancel:"Annuler les modifications",reset:"Rétablir mes valeurs par défaut",saved:"Vos préférences sont enregistrées.",resetDone:"Vos préférences d'apparence ont été réinitialisées.",uploading:"Préparation de l'image...",empty:"Aucune catégorie disponible.",invalid:"Choisissez des préférences d'apparence valides.",invalidImage:"Choisissez une image JPEG, PNG ou WebP valide respectant la taille maximale.",storageFull:"Le stockage du navigateur est plein. Retirez l'image de fond ou choisissez-en une plus petite. Vos préférences enregistrées restent inchangées.",sessionRequired:"Connectez-vous à un compte de démonstration avant d'enregistrer vos préférences.",resetTitle:"Réinitialiser votre apparence?",resetMessage:"Votre thème, fond, couleurs et raccourcis reviendront aux valeurs par défaut. Les autres comptes et les paramètres de l'espace de travail resteront inchangés."}},Ot={en:{preferences:wt.en,taskWork:yt.en,design:ht.en,brand:{subtitle:"Email assistant for small businesses",asideNote:"Courio uses fake local mailbox data in this prototype and suggests actions. It never sends email or modifies a real mailbox.",previewMode:"Preview mode enabled"},nav:{groups:{home:"Home",work:"Work",automation:"Automation",workspace:"Workspace"},dashboard:"Overview",dashboardSmall:"Today",triage:"Triage",triageSmall:"Inbox",tasks:"Tasks",tasksSmall:"Priority",compose:"Compose",composeSmall:"Local draft",drafts:"Drafts",draftsSmall:"Approval",rules:"Rules",rulesSmall:"Preview",import:"Setup preview",importSmall:"Microsoft 365",admin:"Admin",adminSmall:"Settings"},pages:{dashboard:["Overview","A local workflow preview for email triage, summaries, routing suggestions, and draft preparation."],import:["Setup preview","Preview how a future Microsoft 365 connection could import mailbox structure and workflow patterns."],triage:["Inbox triage","Review AI-classified messages before any action is taken."],tasks:["Action Center","Turn important local inbox items into a priority work list."],compose:["Compose","Create a fake/local message draft without sending anything."],rules:["Rules","Approve or adjust local rule previews. They do not affect a real mailbox."],drafts:["Drafts","Review prepared replies and mark them ready for a person to send."],admin:["Admin","Manage local workspace preferences and preview future integration safeguards."]},admin:{workspaceSettings:"Workspace settings",prototype:"Prototype",companyName:"Company name",language:"Language / Langue",mode:"Mode",escalationRecipient:"Escalation recipient",saveSettings:"Save settings",saving:"Saving...",resetDemoData:"Reset Demo Data",resetting:"Resetting...",safetyPreview:"Safety preview",prototypeBehavior:"Prototype behavior",savedLanguage:"Saved language",languageNote:"Language changes apply after saving. Internal workflow values stay stable."},auth:{demoOnly:"Demo login",title:"Choose a demo account",subtitle:"Use a premade local account to preview what an owner or employee would see.",safetyNote:"This is a local role switcher for the prototype, not real authentication or security.",logout:"Switch account",loginToast:"Demo account opened locally.",logoutToast:"Demo account closed locally."},triage:{inboxControl:"Inbox control",categoryFilter:"Category filter",allCategories:"All categories",emptyUrgent:"No urgent emails. You are caught up on high-priority work.",emptyInvoices:"No invoice emails are waiting for review.",emptyCategory:"No emails match this category filter.",emptyAll:"No emails are available in this local demo.",remove:"Remove",removing:"Removing...",removeFiltered:"Remove filtered",removeFilteredDisabled:"No removable emails in the current view.",removeConfirmTitle:"Remove this email from the demo inbox?",removeConfirmMessage:"This only hides the fake/local demo email. Nothing is deleted from a real mailbox:",removeFilteredConfirmTitle:"Remove filtered emails from the demo inbox?",removeFilteredConfirmMessage:"This only hides fake/local demo emails. Number selected:",removeSuccess:"Email removed from the demo inbox locally."},tasks:{title:"Priority tasks",subtitle:"Generated from the local demo inbox",empty:"No tasks yet. New local inbox items will appear here as work to review.",done:"Done",task:"Task",priority:"Priority",source:"Source email",notes:"Notes",followUp:"Follow-up",followUpDate:"Follow-up date",reminderOn:"Reminder on",reminderOff:"Add reminder",noReminder:"No follow-up scheduled",scheduled:"Scheduled locally",overdue:"Overdue",followUpFilter:"Follow-up filter",allFollowUps:"All follow-ups",scheduledFollowUps:"Scheduled",overdueFollowUps:"Overdue",followUpScheduledToast:"Local follow-up scheduled.",followUpRemovedToast:"Local follow-up removed.",followUpUpdatedToast:"Follow-up date updated locally.",assignedTo:"Assigned to",assigneeFilter:"Assignee filter",allAssignees:"All assignees",unassigned:"Unassigned",employeeScope:"Employee demo view: only tasks assigned to this account are shown.",notePlaceholder:"Add a local note",reviewEmail:"Review email",saveNote:"Save note",saving:"Saving...",noteSaved:"Task note saved locally.",completedToast:"Task checked off locally.",reopenedToast:"Task reopened locally.",openTasks:"Open tasks",openCaption:"From fake/local inbox items",highPriority:"High priority",highCaption:"Review these first",completed:"Completed",completedCaption:"Checked off in this browser",assignedToast:"Task assignment updated locally.",latestActivity:"Latest activity",viewHistory:"History",historyTitle:"Task history",historyFallback:"Task updated",noHistory:"No activity yet for this local task.",noNotes:"No notes yet.",historyNote:"This history is fake/local and helps show who touched the workflow in this browser.",localTask:"Local task",overdueCaption:"Needs follow-up now",noOverdueCaption:"No overdue reminders"},compose:{title:"Compose message",subtitle:"Fake/local only",safetyNote:"This composer does not connect to Gmail, Outlook, or any real mailbox. Saving creates a local draft only.",newMessage:"New message",to:"To",cc:"Cc",subject:"Subject",body:"Message body",attachments:"Attachments",attachmentNote:"Attachments are metadata only in this demo. File contents are not uploaded or stored.",attachmentMetadata:"Attachment metadata",noAttachments:"No attachments selected.",saveDraft:"Save local draft",saving:"Saving...",printPdf:"Print / save as PDF",neverSends:"Never sends email",savedDrafts:"Saved compose drafts",localOnly:"Local only",openDraft:"Open draft",emptyDrafts:"No compose drafts yet.",savedToast:"Compose draft saved locally. Nothing was sent.",printToast:"Use your browser print dialog to save as PDF. Nothing is sent."}},fr:{preferences:wt.fr,taskWork:yt.fr,design:ht.fr,brand:{subtitle:"Assistant courriel pour PME",asideNote:"Courio utilise des données locales fictives dans ce prototype et suggère des actions. Il n'envoie jamais de courriel et ne modifie aucune vraie boîte courriel.",previewMode:"Mode aperçu activé"},nav:{groups:{home:"Accueil",work:"Travail",automation:"Automatisation",workspace:"Espace de travail"},dashboard:"Aperçu",dashboardSmall:"Aujourd'hui",triage:"Tri",triageSmall:"Boîte de réception",tasks:"Tâches",tasksSmall:"Priorité",compose:"Composer",composeSmall:"Brouillon local",drafts:"Brouillons",draftsSmall:"Approbation",rules:"Règles",rulesSmall:"Aperçu",import:"Aperçu configuration",importSmall:"Microsoft 365",admin:"Admin",adminSmall:"Paramètres"},pages:{dashboard:["Aperçu","Aperçu local des flux de tri courriel, résumés, suggestions de routage et préparation de brouillons."],import:["Aperçu configuration","Aperçu de la façon dont une future connexion Microsoft 365 pourrait importer la structure de boîte courriel et les habitudes de travail."],triage:["Tri de la boîte courriel","Révisez les messages classés par l'IA avant toute action."],tasks:["Centre d'action","Transformez les courriels locaux importants en liste de travail priorisée."],compose:["Composer","Créez un faux brouillon local sans rien envoyer."],rules:["Règles","Approuvez ou ajustez les aperçus de règles locales. Elles ne touchent aucune vraie boîte courriel."],drafts:["Brouillons","Révisez les réponses préparées et marquez-les prêtes pour un envoi humain."],admin:["Admin","Gérez les préférences locales de l'espace de travail et les protections des futures intégrations."]},admin:{workspaceSettings:"Paramètres de l'espace de travail",prototype:"Prototype",companyName:"Nom de l'entreprise",language:"Langue",mode:"Mode",escalationRecipient:"Responsable des escalades",saveSettings:"Enregistrer les paramètres",saving:"Enregistrement...",resetDemoData:"Réinitialiser la démo",resetting:"Réinitialisation...",safetyPreview:"Aperçu de sécurité",prototypeBehavior:"Comportement du prototype",savedLanguage:"Langue enregistrée",languageNote:"Les changements de langue s'appliquent après l'enregistrement. Les valeurs internes du flux restent stables."},auth:{demoOnly:"Connexion démo",title:"Choisir un compte démo",subtitle:"Utilisez un compte local préparé pour voir ce qu'un propriétaire ou un employé verrait.",safetyNote:"Ceci est un sélecteur de rôle local pour le prototype, pas une vraie authentification ni une vraie sécurité.",logout:"Changer de compte",loginToast:"Compte démo ouvert localement.",logoutToast:"Compte démo fermé localement."},triage:{inboxControl:"Contrôle de la boîte",categoryFilter:"Filtre de catégorie",allCategories:"Toutes les catégories",emptyUrgent:"Aucun courriel urgent. Les priorités élevées sont à jour.",emptyInvoices:"Aucun courriel de facture n'attend une révision.",emptyCategory:"Aucun courriel ne correspond à cette catégorie.",emptyAll:"Aucun courriel n'est disponible dans cette démo locale.",remove:"Retirer",removing:"Retrait...",removeFiltered:"Retirer la sélection",removeFilteredDisabled:"Aucun courriel retirable dans la vue actuelle.",removeConfirmTitle:"Retirer ce courriel de la boîte de démo?",removeConfirmMessage:"Cela cache seulement le faux courriel local. Rien n'est supprimé d'une vraie boîte:",removeFilteredConfirmTitle:"Retirer les courriels filtrés de la boîte de démo?",removeFilteredConfirmMessage:"Cela cache seulement des faux courriels locaux. Nombre sélectionné:",removeSuccess:"Courriel retiré localement de la boîte de démo."},tasks:{title:"Tâches prioritaires",subtitle:"Générées à partir de la boîte locale de démo",empty:"Aucune tâche pour l'instant. Les nouveaux courriels locaux apparaîtront ici comme travail à réviser.",done:"Fait",task:"Tâche",priority:"Priorité",source:"Courriel source",notes:"Notes",followUp:"Suivi",followUpDate:"Date de suivi",reminderOn:"Rappel actif",reminderOff:"Ajouter un rappel",noReminder:"Aucun suivi planifié",scheduled:"Planifié localement",overdue:"En retard",followUpFilter:"Filtre de suivi",allFollowUps:"Tous les suivis",scheduledFollowUps:"Planifiés",overdueFollowUps:"En retard",followUpScheduledToast:"Suivi local planifié.",followUpRemovedToast:"Suivi local retiré.",followUpUpdatedToast:"Date de suivi mise à jour localement.",assignedTo:"Assigné à",assigneeFilter:"Filtre par responsable",allAssignees:"Tous les responsables",unassigned:"Non assigné",employeeScope:"Vue employé démo : seules les tâches assignées à ce compte sont affichées.",notePlaceholder:"Ajouter une note locale",reviewEmail:"Réviser le courriel",saveNote:"Enregistrer la note",saving:"Enregistrement...",noteSaved:"Note de tâche enregistrée localement.",completedToast:"Tâche cochée localement.",reopenedToast:"Tâche rouverte localement.",openTasks:"Tâches ouvertes",openCaption:"Depuis les faux courriels locaux",highPriority:"Priorité élevée",highCaption:"À réviser en premier",completed:"Terminées",completedCaption:"Cochées dans ce navigateur",assignedToast:"Assignation de tâche mise à jour localement.",latestActivity:"Activité récente",viewHistory:"Historique",historyTitle:"Historique de la tâche",historyFallback:"Tâche mise à jour",noHistory:"Aucune activité pour cette tâche locale.",noNotes:"Aucune note pour l'instant.",historyNote:"Cet historique est faux/local et montre qui a touché au flux dans ce navigateur.",localTask:"Tâche locale",overdueCaption:"Suivi requis maintenant",noOverdueCaption:"Aucun rappel en retard"},compose:{title:"Composer un message",subtitle:"Faux/local seulement",safetyNote:"Ce compositeur ne se connecte pas à Gmail, Outlook ni à une vraie boîte courriel. L'enregistrement crée seulement un brouillon local.",newMessage:"Nouveau message",to:"À",cc:"Cc",subject:"Objet",body:"Corps du message",attachments:"Pièces jointes",attachmentNote:"Les pièces jointes sont seulement des métadonnées dans cette démo. Le contenu des fichiers n'est pas téléversé ni stocké.",attachmentMetadata:"Métadonnées des pièces jointes",noAttachments:"Aucune pièce jointe sélectionnée.",saveDraft:"Enregistrer le brouillon local",saving:"Enregistrement...",printPdf:"Imprimer / enregistrer en PDF",neverSends:"N'envoie jamais de courriel",savedDrafts:"Brouillons composés enregistrés",localOnly:"Local seulement",openDraft:"Ouvrir le brouillon",emptyDrafts:"Aucun brouillon composé pour l'instant.",savedToast:"Brouillon composé enregistré localement. Rien n'a été envoyé.",printToast:"Utilisez la fenêtre d'impression du navigateur pour enregistrer en PDF. Rien n'est envoyé."}}};function Ie(t){return t==="fr"?"fr":"en"}function jt(t){const e=Ot[Ie(t)];return function(o){return o.split(".").reduce((n,i)=>n==null?void 0:n[i],e)||o}}function es(t,e){const a=Ot[Ie(e)];return a.pages[t]||a.pages.dashboard}const ts=["Triage","Urgent emails","Drafts needing approval","Invoices","Generate digest","Create invoice rule","Reset demo data"];function as({assistantOpen:t,assistantMessages:e,assistantBusy:a}){const o=e.length?e:[{id:"assistant-loading",role:"assistant",text:"Loading assistant history..."}];return`
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
                ${l(n.text)}
              </div>
            `).join("")}
          </div>
          <form class="assistant-form">
            <input data-assistant-input placeholder="Show urgent emails" autocomplete="off" ${a?"disabled":""}>
            <button class="btn primary" type="submit" ${a?"disabled":""}>${a?"Working...":"Send"}</button>
          </form>
          <div class="assistant-suggestions" aria-label="Assistant command suggestions">
            ${ts.map(n=>`
              <button class="assistant-chip" data-assistant-command="${l(n)}" ${a?"disabled":""}>
                ${l(n)}
              </button>
            `).join("")}
          </div>
        </div>
      `:""}
      <button class="assistant-fab" data-assistant-toggle aria-label="Open Courio assistant">
        AI
      </button>
    </div>
  `}const ss=[{id:"email-1",subject:"Very unhappy about no response",sender:"Maya Chen",senderEmail:"maya@northstar-retail.ca",body:"I have followed up twice and still have not received an answer about the service issue from last week. We need someone senior to respond today.",category:"Client complaint",urgency:"High",confidence:94,suggestedAction:"Escalate to owner",requiresDraft:!0,assignedTo:"emp-1",explanation:"Courio flagged this because the client mentions repeated follow-ups, no response, and asks for senior attention today.",thread:["Client followed up twice about an unanswered service issue.","The last message uses negative sentiment and asks for owner attention."],summary:"Client is frustrated by delayed response. Recommend owner review today.",draft:"Hi, thank you for the follow-up. I'm sorry this has taken longer than expected. I am escalating this now and will make sure you receive a clear update today."},{id:"email-2",subject:"Invoice #1844 payment status",sender:"Alex Rivera",senderEmail:"alex@brightline-supplies.ca",body:"Could you confirm whether invoice #1844 has been approved for payment? It was due last Friday.",category:"Accounting",urgency:"Medium",confidence:89,suggestedAction:"Route to accounting",requiresDraft:!0,assignedTo:"emp-2",explanation:"Courio saw an invoice number, payment-status wording, and a due-date reference, so it suggested accounting review.",thread:["Supplier asks whether invoice #1844 has been scheduled for payment.","Invoice appears related to recurring monthly services."],summary:"Supplier is requesting a payment-status update for invoice #1844.",draft:"Hi, thanks for checking in. We are reviewing invoice #1844 with accounting and will send a status update shortly."},{id:"email-3",subject:"Quote request for monthly bookkeeping",sender:"Priya Nair",senderEmail:"priya@lakeside-catering.ca",body:"We are looking for monthly bookkeeping help for a small catering business. We have six employees and would like pricing before the end of the week.",category:"Sales",urgency:"Medium",confidence:86,suggestedAction:"Prepare intake draft",requiresDraft:!0,assignedTo:"emp-3",explanation:"Courio matched this to sales because the sender asks for pricing, describes company needs, and appears to be a new prospect.",thread:["New prospect requested pricing for monthly bookkeeping.","They mentioned six employees and monthly receipt volume."],summary:"New lead is asking for bookkeeping pricing. Intake details are partially available.",draft:"Hi, thanks for reaching out. We'd be happy to help with monthly bookkeeping. Could you share your approximate monthly transaction count and preferred start date?"},{id:"email-4",subject:"Payroll documents attached",sender:"Tom Bennett",senderEmail:"tom@harbour-grill.ca",body:"Please find this period's payroll documents attached. Let me know if anything is missing before Thursday.",category:"Documents",urgency:"Low",confidence:91,suggestedAction:"Apply payroll category",requiresDraft:!0,assignedTo:"emp-4",explanation:"Courio detected payroll wording and an attachment reference, so it suggested categorizing this for payroll review.",thread:["Client attached payroll documents for this period.","Message should be categorized for payroll review."],summary:"Payroll documents are attached and ready to route to payroll workflow.",draft:"Hi, thanks. We received the payroll documents and will review them for the current period."},{id:"email-5",subject:"Missing March receipts",sender:"Elena Morris",senderEmail:"elena@maple-therapy.ca",body:"I thought I sent the March receipts, but I may have missed the attachment. Can you let me know what you still need?",category:"Missing documents",urgency:"Medium",confidence:88,suggestedAction:"Prepare follow-up draft",requiresDraft:!0,assignedTo:"emp-2",explanation:"Courio flagged this because the email talks about receipts and a possibly missing attachment, which usually needs a document follow-up.",thread:["Client mentions March receipts but no attachments are present.","Follow-up should request the missing files."],summary:"March receipts appear to be missing. Prepare a concise document request.",draft:"Hi, thanks for the note. It looks like the March receipts were not attached. Could you resend them when convenient?"},{id:"email-6",subject:"Can we move tomorrow's appointment?",sender:"Jordan Lee",senderEmail:"jordan@greenway-landscaping.ca",body:"Something came up with our crew schedule. Can we move tomorrow's appointment to next Tuesday afternoon?",category:"Scheduling",urgency:"Low",confidence:82,suggestedAction:"Offer available times",requiresDraft:!0,assignedTo:"emp-5",explanation:"Courio identified a scheduling change request with a proposed new time, so it suggested a simple scheduling reply.",thread:["Client asks to move an appointment from tomorrow to next Tuesday afternoon.","No urgent sentiment or billing issue detected."],summary:"Client wants to reschedule tomorrow's appointment to next Tuesday afternoon.",draft:"Hi, thanks for letting us know. Next Tuesday afternoon should work on our side. Could you confirm your preferred time window?"},{id:"email-7",subject:"Weekly partner newsletter",sender:"Service Ledger Weekly",senderEmail:"updates@serviceledger.example",body:"This week's roundup includes product tips, partner webinars, and a checklist for organizing client documents before month end.",category:"Newsletter",urgency:"Low",confidence:79,suggestedAction:"Remove from demo inbox",requiresDraft:!0,assignedTo:"",explanation:"Courio categorized this as a newsletter because it is a broadcast update with no client request, deadline, or required reply.",thread:["Marketing-style newsletter with no direct client request.","Low-priority inbox noise that can be removed from the demo inbox after review."],summary:"Newsletter-style update. No reply appears needed.",draft:"No reply needed. This local demo item can be removed from the inbox after review."}],os=[{id:"cat-client-complaint",name:"Client complaint",description:"Escalations, unhappy clients, repeated follow-ups, and high-trust replies.",color:"urgent",active:!0,system:!0},{id:"cat-accounting",name:"Accounting",description:"Invoices, payment status, receipts, bookkeeping, and supplier questions.",color:"invoice",active:!0,system:!0},{id:"cat-sales",name:"Sales",description:"New leads, quote requests, pricing questions, and intake replies.",color:"lead",active:!0,system:!0},{id:"cat-documents",name:"Documents",description:"Attached files, payroll documents, client records, and document routing.",color:"invoice",active:!0,system:!0},{id:"cat-missing-documents",name:"Missing documents",description:"Missing attachments, receipts, files, or client documents that need follow-up.",color:"invoice",active:!0,system:!0},{id:"cat-scheduling",name:"Scheduling",description:"Appointment changes, availability, calendar coordination, and time windows.",color:"pending",active:!0,system:!0},{id:"cat-general",name:"General",description:"Messages that do not need a specialized workflow yet.",color:"default",active:!0,system:!0},{id:"cat-newsletter",name:"Newsletter",description:"Marketing emails, updates, and low-priority broadcast messages.",color:"default",active:!0,system:!1},{id:"cat-follow-up",name:"Follow-up",description:"Messages that need a reminder, next step, or later response.",color:"pending",active:!0,system:!1},{id:"cat-internal",name:"Internal",description:"Team messages, internal coordination, and company updates.",color:"lead",active:!0,system:!1},{id:"cat-vendor",name:"Vendor",description:"Supplier, partner, and vendor conversations.",color:"invoice",active:!0,system:!1}],is=[{id:"emp-1",name:"Nadia Patel",title:"Owner",email:"nadia@courio-demo.ca",department:"Leadership"},{id:"emp-2",name:"Marcus Roy",title:"Bookkeeper",email:"marcus@courio-demo.ca",department:"Accounting"},{id:"emp-3",name:"Sofia Tremblay",title:"Client Success Lead",email:"sofia@courio-demo.ca",department:"Sales"},{id:"emp-4",name:"Daniel Kim",title:"Payroll Specialist",email:"daniel@courio-demo.ca",department:"Payroll"},{id:"emp-5",name:"Avery Brooks",title:"Office Coordinator",email:"avery@courio-demo.ca",department:"Operations"}],ns=[{id:"rule-1",title:"Supplier invoice routing",desc:"Suggest an accounting category and owner for supplier invoices and payment requests.",category:"Accounting",confidence:91,explanation:"Courio looks for invoice numbers, payment wording, supplier senders, and due-date language.",impact:"Matches the sample invoice messages in this local demo.",matches:["Invoice #1844 payment status","Supplier payment confirmation"],on:!0},{id:"rule-2",title:"Client escalation detection",desc:"Flag negative sentiment, repeated follow-ups, or unanswered client messages older than 48 hours.",category:"Client complaint",confidence:94,explanation:"Courio looks for negative sentiment, repeated follow-ups, and requests for owner attention.",impact:"Flags the sample high-risk client thread in this local demo.",matches:["Very unhappy about no response"],on:!0},{id:"rule-3",title:"Quote request intake",desc:"Prepare standardized draft replies for new prospects requesting pricing or availability.",category:"Sales",confidence:86,explanation:"Courio looks for pricing requests, new prospect language, and service-fit details.",impact:"Matches the sample quote request in this local demo.",matches:["Quote request for monthly bookkeeping"],on:!1},{id:"rule-4",title:"Missing document follow-up",desc:"Prepare client reminders when required documents are mentioned but not attached.",category:"Missing documents",confidence:88,explanation:"Courio looks for missing attachment wording, receipt requests, and document follow-up language.",impact:"Useful for bookkeeping, accounting, insurance, and service teams.",matches:["Missing March receipts"],on:!1}],ye="courio.mockState.v1",Xe="courio.assistantHistory.v1",Ge="courio.demoSession.v1",et=2,Fe=[{id:"admin-owner",role:"Admin",employeeId:"emp-1",name:"Nadia Patel",title:"Owner",email:"nadia@courio-demo.ca"},{id:"employee-marcus",role:"Employee",employeeId:"emp-2",name:"Marcus Roy",title:"Bookkeeper",email:"marcus@courio-demo.ca"}],b=Object.freeze({NEEDS_REVIEW:"needs_review",READY_FOR_DRAFT:"ready_for_draft",DRAFT_GENERATED:"draft_generated",DRAFT_REVIEWED:"draft_reviewed",DRAFT_SAVED:"draft_saved",COMPLETED:"completed"}),rs=new Set(Object.values(b)),ls={status:"Simulated setup preview",safetyNote:"No account is connected. This demo does not access real email, folders, files, or contacts.",futureNote:"In a future version, this step could connect to Gmail or Microsoft 365 after explicit approval.",mailboxes:[{id:"mailbox-main",name:"Main inbox",address:"hello@demo-company.ca",type:"Primary mailbox",volume:"142 recent threads",risk:"Mixed priority",folders:["Inbox","Needs reply","Clients","Vendors","Archive"],categories:["Client complaint","Accounting","Sales","Scheduling"],frequentSenders:["Northstar Retail","Brightline Supplies","Lakeside Catering"],sharedInboxes:["info@demo-company.ca"],recentThreads:["Very unhappy about no response","Invoice #1844 payment status","Quote request for monthly bookkeeping"]},{id:"mailbox-accounting",name:"Accounting",address:"accounting@demo-company.ca",type:"Shared mailbox",volume:"88 recent threads",risk:"Document-heavy",folders:["Invoices","Receipts","Payroll","Tax documents","Vendors"],categories:["Accounting","Documents","Missing documents"],frequentSenders:["Brightline Supplies","Harbour Grill","Maple Therapy"],sharedInboxes:["payroll@demo-company.ca"],recentThreads:["Invoice #1844 payment status","Payroll documents attached","Missing March receipts"]},{id:"mailbox-sales",name:"Sales",address:"sales@demo-company.ca",type:"Shared mailbox",volume:"53 recent threads",risk:"Revenue-sensitive",folders:["Leads","Quotes","Follow up","Won","Lost"],categories:["Sales","Scheduling"],frequentSenders:["Lakeside Catering","Greenway Landscaping","New prospects"],sharedInboxes:["quotes@demo-company.ca"],recentThreads:["Quote request for monthly bookkeeping","Can we move tomorrow's appointment?"]},{id:"mailbox-operations",name:"Operations",address:"ops@demo-company.ca",type:"Team mailbox",volume:"61 recent threads",risk:"Coordination-heavy",folders:["Scheduling","Client updates","Internal","Completed"],categories:["Scheduling","Documents","General"],frequentSenders:["Greenway Landscaping","Client coordinators","Office team"],sharedInboxes:["support@demo-company.ca"],recentThreads:["Can we move tomorrow's appointment?","Payroll documents attached"]},{id:"mailbox-shared",name:"Shared inbox",address:"info@demo-company.ca",type:"Shared intake",volume:"119 recent threads",risk:"Needs routing",folders:["Inbox","Unsorted","Clients","Prospects","Vendors"],categories:["Client complaint","Sales","Accounting","Missing documents"],frequentSenders:["Clients","Suppliers","Prospects"],sharedInboxes:["hello@demo-company.ca","support@demo-company.ca"],recentThreads:["Very unhappy about no response","Quote request for monthly bookkeeping","Missing March receipts"]}],scanItems:[{label:"Folders",detail:"Inbox structure, archive folders, and team-specific folders.",count:14},{label:"Labels/categories",detail:"Existing categories that could map to Courio triage buckets.",count:9},{label:"Frequent senders",detail:"Recurring clients, vendors, prospects, and internal senders.",count:26},{label:"Shared inboxes",detail:"Mailboxes that several employees may monitor.",count:4},{label:"Recent threads",detail:"Recent local demo examples used to preview workflow suggestions.",count:142},{label:"Suggested workflow rules",detail:"Draft local rules for routing, escalation, and follow-up.",count:5}],setupSteps:[{title:"Choose mailbox",detail:"Select the mailbox Courio should preview.",state:"Available in demo"},{title:"Scan folders and labels",detail:"Preview folders, categories, and common sender patterns.",state:"Simulated"},{title:"Detect common email types",detail:"Identify invoices, quote requests, complaints, missing documents, and scheduling.",state:"Simulated"},{title:"Suggest workflows",detail:"Create local suggested rules for review before anything is used.",state:"Simulated"},{title:"Ready for review",detail:"Move to Triage and Rules to inspect the fake suggestions.",state:"Demo only"}],workflowSuggestions:[{match:"Invoices",outcome:"Accounting review",reason:"Invoice numbers, due dates, supplier language."},{match:"Quote requests",outcome:"Sales intake",reason:"Pricing requests, service-fit details, new prospect wording."},{match:"Complaints",outcome:"Owner escalation",reason:"Repeated follow-ups, negative sentiment, senior attention requests."},{match:"Missing documents",outcome:"Follow-up draft",reason:"Receipts, attachments, payroll, or document gaps."},{match:"Scheduling",outcome:"Offer available times",reason:"Appointment changes, time windows, reschedule language."}]},Y={schemaVersion:et,emails:ss.map(ds),categories:structuredClone(os),employees:structuredClone(is),rules:structuredClone(ns),drafts:[],tasks:[],composeDrafts:[],preferencesByAccount:{},settings:{productName:"Courio",mode:"Simple",language:"en",companyName:"Demo PME Inc.",defaultMode:"Observation only",escalationRecipient:"owner@company.ca",confidenceThreshold:"80",observationDays:"7",allowLowRiskBulkApproval:"Yes",approvalRequired:!0,autoSend:!1},completedActions:[],deletedEmployeeIds:[],deletedRuleIds:[]},m=cs();let fe=ws(),T=ys();const y=(t=550)=>new Promise(e=>setTimeout(e,t));function h(t){return structuredClone(t)}function ds(t){const{status:e,workflowStatus:a,reviewed:o,...n}=h(t);return{...n,archivedAt:n.archivedAt||null,archiveReason:n.archiveReason||"",workflowState:b.NEEDS_REVIEW}}function cs(){try{const t=window.localStorage.getItem(ye);if(!t)return h(Y);const e=JSON.parse(t),a=us(e);return window.localStorage.setItem(ye,JSON.stringify(a)),a}catch{return h(Y)}}function us(t){const e=t.deletedEmployeeIds||[],a=t.deletedRuleIds||[],o=ps(t.categories),n=De(Y.emails,t.emails),i=Array.isArray(t.drafts)?t.drafts:[],r=gs(i),c=n.map(u=>{const w=r.find(D=>(D.emailId||D.id)===u.id),k=ms(u,w,t.schemaVersion),{status:S,workflowStatus:R,reviewed:x,...H}=u;return{...H,archivedAt:H.archivedAt||null,archiveReason:H.archiveReason||"",workflowState:k}}),g=new Map(c.map(u=>[u.id,u])),p=r.filter(u=>fs(u,g.get(u.emailId||u.id))).map(vs);return{...h(Y),...t,schemaVersion:et,emails:c,categories:o,employees:De(Y.employees.filter(u=>!e.includes(u.id)),(t.employees||[]).filter(u=>!e.includes(u.id))),rules:De(Y.rules.filter(u=>!a.includes(u.id)),(t.rules||[]).filter(u=>!a.includes(u.id))),drafts:p,tasks:Array.isArray(t.tasks)?t.tasks.map(we):[],composeDrafts:Array.isArray(t.composeDrafts)?t.composeDrafts.map(Pt):[],preferencesByAccount:Object.fromEntries(Fe.map(u=>{var w;return[u.id,$e((w=t.preferencesByAccount)==null?void 0:w[u.id])]})),settings:{...Y.settings,...t.settings||{}},completedActions:Array.isArray(t.completedActions)?t.completedActions:[],deletedEmployeeIds:e,deletedRuleIds:a}}function ps(t=[]){return De(Y.categories,t).map(a=>({description:"",color:"default",active:!0,system:!1,...a}))}function ms(t,e,a){return a>=et&&rs.has(t.workflowState)?t.workflowState:t.status==="Done"||t.workflowStatus==="Completed"||(e==null?void 0:e.status)==="Ready for human send"||(e==null?void 0:e.status)==="Approved"?b.COMPLETED:(e==null?void 0:e.status)==="Saved"?b.DRAFT_SAVED:e!=null&&e.reviewed?b.DRAFT_REVIEWED:e!=null&&e.generated||(e==null?void 0:e.status)==="Generated"?b.DRAFT_GENERATED:t.reviewed||t.reviewedAt?b.READY_FOR_DRAFT:b.NEEDS_REVIEW}function gs(t){const e=new Map;for(const a of t){const o=(a==null?void 0:a.emailId)||(a==null?void 0:a.id);if(!o)continue;const n=e.get(o);(!n||bt(a)>bt(n))&&e.set(o,a)}return[...e.values()]}function bt(t){return({"Needs approval":0,Generated:1,Saved:3,"Ready for human send":4,Approved:4}[t.status]||0)+(t.generated?1:0)+(t.reviewed?1:0)}function fs(t,e){return!t||!e?!1:!!(t.generated||t.reviewed||["Generated","Saved","Ready for human send","Approved"].includes(t.status)||[b.DRAFT_GENERATED,b.DRAFT_REVIEWED,b.DRAFT_SAVED,b.COMPLETED].includes(e.workflowState))}function vs(t){const{generated:e,reviewed:a,status:o,...n}=h(t);return{...n,emailId:t.emailId||t.id}}function we(t){const e=t.followUp&&typeof t.followUp=="object"?t.followUp:{},a=!!(e.enabled&&e.dueAt);return{id:t.id||`task-${t.emailId||Date.now()}`,emailId:t.emailId||"",title:t.title||"Review email",description:t.description||"",priority:t.priority||"Medium",category:t.category||"General",assignedTo:t.assignedTo||"",status:t.status==="Done"?"Done":"Open",notes:t.notes||"",dueAt:t.dueAt||null,followUp:{enabled:a,dueAt:a?e.dueAt:null,createdAt:a?e.createdAt||t.createdAt||new Date().toISOString():null,updatedAt:a?e.updatedAt||t.updatedAt||new Date().toISOString():null},history:Array.isArray(t.history)?t.history:[],createdAt:t.createdAt||new Date().toISOString(),updatedAt:t.updatedAt||t.createdAt||new Date().toISOString(),completedAt:t.completedAt||null}}function Pt(t){var e,a,o,n;return{id:t.id||`compose-${Date.now()}`,to:((e=t.to)==null?void 0:e.trim())||"",cc:((a=t.cc)==null?void 0:a.trim())||"",subject:((o=t.subject)==null?void 0:o.trim())||"",body:((n=t.body)==null?void 0:n.trim())||"",attachments:Array.isArray(t.attachments)?t.attachments.map(i=>({id:i.id||`attachment-${Date.now()}`,name:i.name||"Local attachment",type:i.type||"Unknown",size:Number(i.size)||0})):[],status:"Draft",createdAt:t.createdAt||new Date().toISOString(),updatedAt:t.updatedAt||t.createdAt||new Date().toISOString()}}function hs(t){const e=Pt(t);if(!e.to)throw new Error("Recipient is required.");if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.to))throw new Error("Enter a valid recipient email.");if(!e.subject)throw new Error("Subject is required.");if(!e.body)throw new Error("Message body is required.");return e}function De(t,e=[]){const a=Array.isArray(e)?e:[],o=t.map(i=>{const r=a.find(c=>c.id===i.id);return r?{...i,...r}:h(i)}),n=a.filter(i=>!t.some(r=>r.id===i.id));return[...o,...n.map(h)]}function E(){window.localStorage.setItem(ye,JSON.stringify(m))}function ys(){try{const t=window.localStorage.getItem(Ge);if(!t)return null;const e=JSON.parse(t);return Fe.find(a=>a.id===e.id)||null}catch{return null}}function Ut(){if(!T){window.localStorage.removeItem(Ge);return}window.localStorage.setItem(Ge,JSON.stringify({id:T.id}))}function W(){return(T==null?void 0:T.role)==="Employee"}function K(){return(T==null?void 0:T.employeeId)||""}function j(){if(T&&T.role!=="Admin")throw new Error("This demo account cannot access admin-only actions.")}function ws(){try{const t=window.localStorage.getItem(Xe);return t?JSON.parse(t):[{id:"assistant-welcome",role:"assistant",text:"Hi, I can help with urgent emails, invoices, drafts, digest updates, rules, and explanations."}]}catch{return[{id:"assistant-welcome",role:"assistant",text:"Hi, I can help with urgent emails, invoices, drafts, digest updates, rules, and explanations."}]}}function bs(){window.localStorage.setItem(Xe,JSON.stringify(fe))}function $s(){return m.settings.allowLowRiskBulkApproval!=="No"}function ks(){return!0}function O(t){return t.workflowState===b.COMPLETED}function tt(t){const e=m.emails.find(a=>a.id===(t.emailId||t.id));return(e==null?void 0:e.workflowState)===b.DRAFT_SAVED}function Te(t){return{[b.NEEDS_REVIEW]:"Review required",[b.READY_FOR_DRAFT]:"Draft needed",[b.DRAFT_GENERATED]:"Draft generated",[b.DRAFT_REVIEWED]:"Draft in review",[b.DRAFT_SAVED]:"Draft saved",[b.COMPLETED]:"Completed"}[t]||"Review required"}function _t(t){return{[b.DRAFT_GENERATED]:"Generated",[b.DRAFT_REVIEWED]:"In review",[b.DRAFT_SAVED]:"Saved",[b.COMPLETED]:"Ready for human send"}[t]||"No draft"}function B(t,e={}){m.completedActions.unshift({id:`action-${Date.now()}-${Math.random().toString(16).slice(2)}`,type:t,completedAt:new Date().toISOString(),...e}),m.completedActions=m.completedActions.slice(0,50)}function Bt(t,e){t.workflowState=b.COMPLETED,e.approvedAt=new Date().toISOString(),e.updatedAt=e.approvedAt,B("draft-approved",{emailId:t.id,draftId:e.id,label:`Draft approved and workflow completed: ${t.subject}`})}function Z(t){const e=m.emails.find(r=>r.id===(t.emailId||t.id)),a=O(e||{})?"Done":"Open",o=O(e||{}),n=(e==null?void 0:e.workflowState)===b.DRAFT_SAVED,i=_t(e==null?void 0:e.workflowState);return{...t,sourceEmailStatus:a,sourceWorkflowStatus:Te(e==null?void 0:e.workflowState),approvalState:o?"ready_for_human_send":(e==null?void 0:e.workflowState)===b.DRAFT_SAVED?"saved":(e==null?void 0:e.workflowState)===b.DRAFT_GENERATED?"generated":"needs_review",status:i,statusLabel:i,isReadyForHumanSend:o,canApprove:n,canSelectForBulkApproval:n,approvalBlocker:n?"":o?"Source email is completed.":"Review and save this draft before approving."}}function ke(t){const e=Le(t.id),a=ks(),o=!!e,n=O(t),i=n,r=t.workflowState!==b.NEEDS_REVIEW;return{...t,archived:!!t.archivedAt,reviewed:r,status:i?"Done":"Open",workflowStatus:Te(t.workflowState),requiresDraft:a,draftId:o&&(e==null?void 0:e.id)||null,draftStatus:o?_t(t.workflowState):null,draftStatusLabel:o?Z(e).statusLabel:"No draft",draftReadyForHumanSend:n,workflowLabel:Te(t.workflowState),canComplete:!1,completeActionLabel:"Completed",draftActionLabel:i?"View approved draft":o?"Edit draft":"Generate draft",canGenerateDraft:t.workflowState===b.READY_FOR_DRAFT&&!o,canOpenDraft:o,canArchive:!o||i,archiveBlocker:o&&!i?"Finish the active draft before removing this email from the demo inbox.":"",completionBlocker:r?i?"This workflow is complete.":o?"Open the existing draft to continue this workflow.":"":"Review this email before generating a draft."}}function Ht(t){return t.urgency==="High"||t.category===N("cat-client-complaint","Client complaint")?"High":t.urgency==="Low"?"Low":"Medium"}function $t(t){return{High:0,Medium:1,Low:2}[t.priority]??3}function Wt(t){const e=new Date().toISOString();return we({id:`task-${t.id}`,emailId:t.id,title:t.suggestedAction||`Review ${t.subject}`,description:t.summary||t.explanation||t.subject,priority:Ht(t),category:t.category,assignedTo:t.assignedTo||"",status:"Open",notes:"",history:[{at:e,label:"Task created from local inbox item"}],createdAt:e,updatedAt:e})}function at(){const t=new Set(m.tasks.map(e=>e.emailId));qe().filter(e=>!O(e)).forEach(e=>{t.has(e.id)||m.tasks.push(Wt(e))}),m.tasks=m.tasks.map(e=>{const a=m.emails.find(o=>o.id===e.emailId);return we(a?{...e,title:e.title||a.suggestedAction,description:e.description||a.summary||a.explanation,priority:e.priority||Ht(a),assignedTo:e.assignedTo,category:a.category}:e)})}function ue(t){var c;const e=m.emails.find(g=>g.id===t.emailId),a=m.employees.find(g=>g.id===t.assignedTo)||null,o=(c=t.followUp)!=null&&c.enabled?t.followUp.dueAt:null,n=Array.isArray(t.history)?t.history:[],i=n.at(-1)||null,r=!!(o&&t.status!=="Done"&&new Date(o).getTime()<Date.now());return{...t,followUp:{...t.followUp,status:o?r?"overdue":"scheduled":"not_scheduled",overdue:r},historySummary:{count:n.length,latestLabel:(i==null?void 0:i.label)||"",latestAction:(i==null?void 0:i.action)||null,latestAt:(i==null?void 0:i.at)||null},history:n.map(g=>({...g,canRestore:!!g.before&&(!W()||t.assignedTo===K()&&!Object.hasOwn(g.before,"assignedTo"))})),assignedEmployee:a?h(a):null,sourceEmail:e?ke(e):null,hiddenFromInbox:!!(e!=null&&e.archivedAt),sourceCompleted:e?O(e):!1}}function U(t){const e=m.emails.find(a=>a.id===t);if(!e)throw new Error("Email not found.");return e}function Me(t){const e=m.drafts.find(a=>a.id===t);if(!e)throw new Error("Draft not found.");return e}function Le(t){return m.drafts.find(e=>(e.emailId||e.id)===t)}function qe(){return m.emails.filter(t=>t.archivedAt?!1:W()?t.assignedTo===K():!0)}function zt(t){const e=m.employees.find(a=>a.id===t);if(!e)throw new Error("Employee not found.");return e}function Vt(t){const e=m.categories.find(a=>a.id===t);if(!e)throw new Error("Category not found.");return e}function Gt(t){return m.categories.find(e=>e.name.toLowerCase()===String(t||"").trim().toLowerCase())}function Qt(t,e=null){var n,i;const a={name:((n=t.name)==null?void 0:n.trim())||"",description:((i=t.description)==null?void 0:i.trim())||"",color:t.color||"default"};if(!a.name)throw new Error("Category name is required.");if(m.categories.find(r=>r.id!==e&&r.name.toLowerCase()===a.name.toLowerCase()))throw new Error("A category with this name already exists.");return a}function Ss(t,e){m.emails.forEach(a=>{a.category===t&&(a.category=e)}),m.rules.forEach(a=>{a.category===t&&(a.category=e)})}function N(t,e){var a;return((a=m.categories.find(o=>o.id===t))==null?void 0:a.name)||e}function As(){const t={"Client complaint":N("cat-client-complaint","Client complaint"),Accounting:N("cat-accounting","Accounting"),Sales:N("cat-sales","Sales"),Documents:N("cat-documents","Documents"),"Missing documents":N("cat-missing-documents","Missing documents"),Scheduling:N("cat-scheduling","Scheduling"),General:N("cat-general","General")},e=h(ls);return e.mailboxes=e.mailboxes.map(a=>({...a,categories:a.categories.map(o=>t[o]||o)})),e}function Yt(t,e=null){var n,i,r,c;const a={name:((n=t.name)==null?void 0:n.trim())||"",email:((i=t.email)==null?void 0:i.trim().toLowerCase())||"",title:((r=t.title)==null?void 0:r.trim())||"",department:((c=t.department)==null?void 0:c.trim())||""};if(!a.name)throw new Error("Employee name is required.");if(!a.email)throw new Error("Employee email is required.");if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(a.email))throw new Error("Enter a valid employee email address.");if(!a.title)throw new Error("Employee title is required.");if(!a.department)throw new Error("Employee department is required.");if(m.employees.find(g=>{var p;return g.id!==e&&((p=g.email)==null?void 0:p.trim().toLowerCase())===a.email}))throw new Error("An employee with this email already exists.");return a}function Es(){const t=qe().filter(r=>!O(r)),e=m.drafts.map(Z),a=e.filter(r=>r.isReadyForHumanSend).length,o=e.filter(r=>r.canSelectForBulkApproval).length,n=r=>t.filter(c=>c.category===r),i=t.filter(r=>r.urgency==="High");return{generatedAt:new Date().toLocaleTimeString([],{hour:"numeric",minute:"2-digit"}),headline:`${t.length} open emails need review. ${i.length} are urgent and ${o} drafts need approval.`,urgentItems:i.map(r=>r.subject),draftsAwaitingApproval:o,readyForHumanSend:a,invoices:n(N("cat-accounting","Accounting")).map(r=>r.subject),missingDocuments:n(N("cat-missing-documents","Missing documents")).map(r=>r.subject),quoteRequests:n(N("cat-sales","Sales")).map(r=>r.subject),clientComplaints:n(N("cat-client-complaint","Client complaint")).map(r=>r.subject),recommendedActions:[i.length?"Review urgent client items first.":"No urgent client escalations are open.",o?"Review drafts before marking them ready for human send.":"No drafts are waiting for approval.","Keep observation mode on while this remains a demo."]}}function Ds(){const t=m.rules.find(a=>/invoice/i.test(`${a.title} ${a.desc}`));if(t)return t.on=!0,E(),t;const e={id:`rule-${Date.now()}`,title:"Invoice intake assistant",desc:"Flag invoice messages, payment questions, due dates, and supplier follow-ups for accounting review.",category:N("cat-accounting","Accounting"),confidence:84,explanation:"Courio would look for invoice numbers, balance-due wording, supplier names, and payment timing.",impact:"Created locally from the assistant chat. It only previews matches in this prototype.",matches:m.emails.filter(a=>a.category===N("cat-accounting","Accounting")).map(a=>a.subject),on:!0};return m.rules.push(e),E(),e}function Cs(t){return t.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9\s]/g," ").replace(/\s+/g," ")}function Ts(t,e){const a=Array.from({length:e.length+1},(o,n)=>n);for(let o=1;o<=t.length;o+=1){let n=a[0];a[0]=o;for(let i=1;i<=e.length;i+=1){const r=a[i],c=t[o-1]===e[i-1]?0:1;a[i]=Math.min(a[i]+1,a[i-1]+1,n+c),n=r}}return a[e.length]}function Rs(t,e){if(t.length!==e.length)return!1;const a=[];for(let o=0;o<t.length;o+=1)t[o]!==e[o]&&a.push(o);return a.length===2&&a[1]===a[0]+1&&t[a[0]]===e[a[1]]&&t[a[1]]===e[a[0]]}function X(t,e){const a=t.split(" ").filter(Boolean);return e.some(o=>o.includes(" ")?t.includes(o):a.some(n=>{if(n===o||Rs(n,o))return!0;const i=o.length>=7?2:o.length>=4?1:0;return i>0&&Math.abs(n.length-o.length)<=i&&Ts(n,o)<=i}))}function xs(t,e={}){const a=Cs(t),o=qe(),n=o.filter(u=>!O(u)&&u.urgency==="High").length,i=N("cat-accounting","Accounting"),r=o.filter(u=>!O(u)&&u.category===i).length,c=m.drafts.map(Z).filter(u=>u.canSelectForBulkApproval).length,g=X(a,["invoice","invoices","accounting"]),p=X(a,["rule","rules","create rule"]);if(X(a,["urgent","urgency"]))return{text:`${n} urgent emails are open. I switched Triage to urgent items.`,action:{type:"show_triage",filter:"urgent"}};if(X(a,["triage","inbox","show inbox","open inbox"]))return{text:"I opened the full Triage inbox.",action:{type:"show_triage",filter:"all"}};if(g&&p)return{text:"Invoice rule is ready in observation mode. It is still fake/local and will not touch a mailbox.",action:{type:"show_rule",ruleId:Ds().id}};if(g)return{text:`${r} invoice-related emails are open. I switched Triage to ${i}.`,action:{type:"show_triage",filter:"invoices"}};if(X(a,["draft","drafts","approval","approve"]))return{text:`${c} saved drafts need human approval. I opened the Drafts queue.`,action:{type:"show_drafts",filter:"needs_approval"}};if(X(a,["digest","morning digest"]))return{text:"I regenerated the morning digest from local demo data.",action:{type:"generate_digest"}};if(X(a,["explain","explanation","why"])){if(!e.selectedEmailId)return{text:"Open an email in Triage first, then ask me to explain it. I will show the flagged reason."};const u=ke(U(e.selectedEmailId));return{text:`Courio flagged "${u.subject}" because: ${u.explanation}`,action:{type:"explain_email",emailId:u.id}}}return X(a,["reset","restart"])?{text:"I can reset the fake demo data now. The page will reload so defaults come back clean.",action:{type:"reset_demo_data"}}:{text:"I did not catch that. Try one of the command hints below."}}async function z(){return await y(),h(qe().map(ke))}async function Is(){return await y(150),h(Fe)}async function Jt(){return await y(150),h(T)}async function Fs(t){await y(250);const e=Fe.find(a=>a.id===t);if(!e)throw new Error("Demo account not found.");return T=e,Ut(),h(T)}async function Ms(){return await y(150),T=null,Ut(),null}async function M(){return await y(350),at(),E(),h(m.tasks.map(ue).filter(t=>!t.hiddenFromInbox).filter(t=>!W()||t.assignedTo===K()).sort((t,e)=>$t(t)-$t(e)||(t.status==="Done")-(e.status==="Done")||t.createdAt.localeCompare(e.createdAt)))}async function Qe(){return await y(350),h(m.employees)}async function Kt(){return await y(300),h(m.categories)}async function se(){return await y(400),W()?[]:h(m.rules)}async function Zt(){return await y(350),As()}async function J(){return await y(700),h(Es())}async function ie(){return await y(400),W()?[]:h(m.drafts.map(Z))}async function st(){return await y(350),h([...m.composeDrafts].sort((t,e)=>e.updatedAt.localeCompare(t.updatedAt)))}async function Ls(t){await y(500);const e=hs(t),a=m.composeDrafts.findIndex(i=>i.id===e.id),o=new Date().toISOString(),n={...e,id:a===-1?`compose-${Date.now()}`:e.id,createdAt:a===-1?o:m.composeDrafts[a].createdAt,updatedAt:o};return a===-1?m.composeDrafts.unshift(n):m.composeDrafts[a]=n,B("compose-draft-saved",{draftId:n.id,label:`Compose draft saved: ${n.subject}`}),E(),h(n)}async function be(t){await y(450);const e=Me(t),a=U(e.emailId||e.id);return a.workflowState===b.DRAFT_GENERATED&&(a.workflowState=b.DRAFT_REVIEWED,e.reviewedAt=new Date().toISOString(),e.updatedAt=e.reviewedAt,E()),h({...Z(e),sourceEmail:{id:a.id,subject:a.subject,sender:a.sender,senderEmail:a.senderEmail,body:a.body,suggestedAction:a.suggestedAction,confidence:a.confidence,urgency:a.urgency,status:O(a)?"Done":"Open",workflowStatus:Te(a.workflowState)}})}async function qs(t){await y(350),U(t);const e=Le(t);return e?be(e.id):null}function le(t){const e=new Error(t);return e.translationKey=`preferences.${t}`,e}function Xt(t){if(t===null)return!0;if(typeof t!="string"||t.length>7e5)return!1;const e=/^data:image\/(png|jpeg|webp);base64,([A-Za-z0-9+/]+={0,2})$/.exec(t);if(!e)return!1;try{const a=atob(e[2]);return e[1]==="png"?a.startsWith(`PNG\r

`):e[1]==="jpeg"?a.startsWith("ÿØÿ"):a.startsWith("RIFF")&&a.slice(8,12)==="WEBP"}catch{return!1}}function $e(t={}){const e=t&&typeof t=="object"?t:{};return{theme:["light","dark","system"].includes(e.theme)?e.theme:"light",backgroundImage:Xt(e.backgroundImage)?e.backgroundImage:null,backgroundDim:Number.isInteger(e.backgroundDim)&&e.backgroundDim>=50&&e.backgroundDim<=95?e.backgroundDim:80,labelColors:Object.fromEntries(Object.entries(e.labelColors||{}).filter(([a,o])=>/^[a-zA-Z0-9_-]+$/.test(a)&&typeof o=="string"&&/^#[0-9a-f]{6}$/i.test(o))),hiddenCategoryIds:Array.isArray(e.hiddenCategoryIds)?[...new Set(e.hiddenCategoryIds.filter(a=>typeof a=="string"))]:[]}}async function ea(){var t;return h($e((t=m.preferencesByAccount)==null?void 0:t[T==null?void 0:T.id]))}async function ta(t={}){var g;const e=T==null?void 0:T.id;if(await y(250),!e||(T==null?void 0:T.id)!==e)throw le("sessionRequired");const a=["theme","backgroundImage","backgroundDim","labelColors","hiddenCategoryIds"];if(!t||typeof t!="object"||Object.keys(t).some(p=>!a.includes(p)))throw le("invalid");const n={...$e((g=m.preferencesByAccount)==null?void 0:g[e]),...t};if(!["light","dark","system"].includes(n.theme)||!Number.isInteger(n.backgroundDim)||n.backgroundDim<50||n.backgroundDim>95)throw le("invalid");if(!Xt(n.backgroundImage))throw le("invalidImage");const i=new Set(m.categories.map(p=>p.id));if(!n.labelColors||typeof n.labelColors!="object"||Array.isArray(n.labelColors)||Object.entries(n.labelColors).some(([p,u])=>!i.has(p)||typeof u!="string"||!/^#[0-9a-f]{6}$/i.test(u))||!Array.isArray(n.hiddenCategoryIds)||n.hiddenCategoryIds.some(p=>!i.has(p)))throw le("invalid");const r=$e(n),c={...m.preferencesByAccount,[e]:r};try{window.localStorage.setItem(ye,JSON.stringify({...m,preferencesByAccount:c}))}catch{throw le("storageFull")}return m.preferencesByAccount=c,h(r)}async function Ns(){return ta($e())}async function Os(){return await y(250),h(m.settings)}async function js(t){return await y(450),j(),m.settings={...m.settings,...t,language:t.language?t.language==="fr"?"fr":"en":m.settings.language,approvalRequired:!0,autoSend:!1},E(),h(m.settings)}async function Ps(){return await y(350),j(),window.localStorage.removeItem(ye),window.localStorage.removeItem(Xe),h(Y)}async function aa(t){await y();const e=U(t);return e.workflowState===b.NEEDS_REVIEW&&(e.workflowState=b.READY_FOR_DRAFT,e.reviewedAt=new Date().toISOString(),E()),h({...ke(e),messages:e.thread})}async function Us(t){return await y(700),U(t).summary}async function _s(t){await y(750);const e=U(t);if(O(e))throw new Error("This email is done. Reopen it before creating or changing a draft.");if(e.workflowState===b.NEEDS_REVIEW)throw new Error("Review this email before generating a draft.");const a=Le(t);if(a)return h(Z(a));if(e.workflowState!==b.READY_FOR_DRAFT)throw new Error("This workflow is not ready to generate a new draft.");const o=new Date().toISOString(),n={id:`draft-${t}`,emailId:t,title:e.suggestedAction,source:e.subject,text:e.draft,confidence:e.confidence,risk:e.urgency==="High"?"High":"Low",createdAt:o,updatedAt:o};return m.drafts.push(n),e.workflowState=b.DRAFT_GENERATED,E(),h(Z(n))}async function Bs(t,e){if(await y(),!e||e.trim().length<10)throw new Error("Draft is too short to save.");const a=Me(t),o=U(a.emailId||a.id);if(O(o))throw new Error("This email is done. Reopen it before editing the draft.");if(![b.DRAFT_REVIEWED,b.DRAFT_SAVED].includes(o.workflowState))throw new Error("Review this draft before saving it.");return a.text=e,a.updatedAt=new Date().toISOString(),o.workflowState=b.DRAFT_SAVED,E(),h(Z(a))}async function Hs(t){await y(),j();const e=Me(t),a=U(e.emailId||e.id);if(O(a))throw new Error("This email is done. Reopen it before changing draft approval.");if(!tt(e))throw new Error("Review this draft before approving.");return Bt(a,e),E(),h(Z(e))}async function sa(t){if(await y(650),j(),!t.length)throw new Error("Select at least one draft first.");const e=t.map(o=>{const n=Me(o),i=U(n.emailId||n.id);return{draft:n,email:i}}).filter(({email:o})=>!O(o));if(!e.length)throw new Error("No selected drafts could be approved.");if(e.some(({draft:o})=>!tt(o)))throw new Error("Review this draft before approving.");const a=[];for(const{draft:o,email:n}of e)Bt(n,o),a.push(o.id);return E(),h({approved:a})}async function Ws(){if(await y(700),j(),!$s())throw new Error("Low-risk bulk approval is disabled by workspace settings.");const t=m.drafts.filter(e=>e.risk!=="High").filter(tt).filter(e=>!O(U(e.emailId||e.id))).map(e=>e.id);if(!t.length)throw new Error("No low-risk drafts are awaiting approval.");return sa(t)}async function kt(t){await y(450),j();const e=m.rules.find(a=>a.id===t);if(!e)throw new Error("Rule not found.");return e.on=!e.on,E(),h(e)}async function zs(t,e){var o,n;await y(500),j();const a=m.rules.find(i=>i.id===t);if(!a)throw new Error("Rule not found.");if(!((o=e.title)!=null&&o.trim()))throw new Error("Rule name is required.");if(!((n=e.desc)!=null&&n.trim()))throw new Error("Rule description is required.");if(e.category&&!Gt(e.category))throw new Error("Choose an existing category before saving.");return a.title=e.title.trim(),a.desc=e.desc.trim(),a.category=e.category||a.category,E(),h(a)}async function Vs(t){await y(450),j();const e=m.rules.findIndex(o=>o.id===t);if(e===-1)throw new Error("Rule not found.");const[a]=m.rules.splice(e,1);return m.deletedRuleIds=[...new Set([...m.deletedRuleIds||[],t])],B("rule-deleted",{ruleId:a.id,label:`Rule deleted: ${a.title}`}),E(),h(a)}async function Gs(t,e){if(await y(400),!e)throw new Error("Choose a category before saving.");if(!Gt(e))throw new Error("Choose an existing category before saving.");const a=U(t);return a.category=e,E(),h(a)}async function Qs(t,e="Removed from demo inbox"){await y(500);const a=[...new Set((t||[]).filter(Boolean))];if(!a.length)throw new Error("Choose at least one email to remove from the demo inbox.");const o=new Date().toISOString(),n=a.map(i=>{const r=U(i),c=Le(r.id),g=O(r);if(c&&!g)throw new Error("Finish active drafts before removing those emails from the demo inbox.");return r.archivedAt=o,r.archiveReason=e,r});return B("emails-archived",{emailIds:n.map(i=>i.id),label:`${n.length} email${n.length===1?"":"s"} removed from the demo inbox`}),E(),h(n.map(ke))}function _(t){const e=new Error(t);return e.code=t,e}function ot(t){const e={};for(const a of["title","notes","priority","status","assignedTo","dueAt"])Object.hasOwn(t,a)&&(e[a]=t[a]);if("title"in e&&(e.title=String(e.title||"").trim(),!e.title))throw _("titleRequired");if("notes"in e&&(e.notes=String(e.notes||"").trim()),"priority"in e&&!["High","Medium","Low"].includes(e.priority))throw _("invalidPriority");if("status"in e&&!["Open","Done"].includes(e.status))throw _("invalidStatus");if("assignedTo"in e&&e.assignedTo&&!m.employees.some(a=>a.id===e.assignedTo))throw _("invalidAssignee");if("dueAt"in e&&(e.dueAt=e.dueAt||null,e.dueAt&&(!/^\d{4}-\d{2}-\d{2}$/.test(e.dueAt)||Number.isNaN(Date.parse(e.dueAt))||new Date(e.dueAt).toISOString().slice(0,10)!==e.dueAt)))throw _("invalidDate");return e}function oa(t){const e=m.tasks.find(a=>a.id===t);if(!e)throw _("notFound");if(W()&&e.assignedTo!==K())throw _("forbidden");return e}function it(t,e,a="updated",o=null){const n={};for(const[r,c]of Object.entries(e))t[r]!==c&&(n[r]=t[r]??null);if(!Object.keys(n).length)return;const i=new Date().toISOString();Object.assign(t,e),t.completedAt=t.status==="Done"?t.completedAt||i:null,t.updatedAt=i,t.history.push({id:crypto.randomUUID(),at:i,action:a,before:n,restoredEntryId:o,label:a==="restored"?"Task change restored":"Task updated"}),B(a==="restored"?"task-restored":e.status==="Done"?"task-completed":"task-updated",{taskId:t.id,emailId:t.emailId,label:`Task ${a}: ${t.title}`})}async function Ys(t={}){await y(400);const e=ot({title:t.title,notes:t.notes||"",priority:t.priority||"Medium",dueAt:t.dueAt,assignedTo:t.assignedTo??K()});if(W()&&e.assignedTo!==K())throw _("forbidden");const a=we({...e,id:`task-${crypto.randomUUID()}`});return a.history.push({id:crypto.randomUUID(),at:a.createdAt,action:"created",label:"Task created"}),m.tasks.push(a),B("task-created",{taskId:a.id,label:`Task created: ${a.title}`}),E(),h(ue(a))}async function Js(t){await y(300);const e=U(t);if(W()&&e.assignedTo!==K())throw _("forbidden");let a=m.tasks.find(o=>o.emailId===t);if(a&&W()&&a.assignedTo!==K())throw _("forbidden");return a||(a=Wt(e),m.tasks.push(a),E()),h(ue(a))}async function Ks(t,e){await y(300);const a=oa(t),o=a.history.find(i=>i.id===e);if(!(o!=null&&o.before))throw _("noSnapshot");if(W()&&Object.hasOwn(o.before,"assignedTo"))throw _("forbidden");const n=ot(o.before);return it(a,n,"restored",e),E(),h(ue(a))}async function Re(t,e={}){await y(400),at();const a=oa(t),o=ot(e);if(W()&&Object.hasOwn(o,"assignedTo"))throw _("forbidden");return it(a,o),E(),h(ue(a))}async function St(t,e={}){var r;await y(400),at();const a=m.tasks.find(c=>c.id===t);if(!a)throw new Error("Task not found.");if(W()&&a.assignedTo!==K())throw new Error("This demo employee can only update assigned tasks.");const o=!!e.enabled,n=new Date().toISOString();let i=null;if(o){const c=e.dueAt?new Date(`${e.dueAt}T17:00:00`):new Date(Date.now()+2592e5);if(Number.isNaN(c.getTime()))throw new Error("Choose a valid follow-up date.");i=c.toISOString()}return a.followUp={enabled:o,dueAt:i,createdAt:o?((r=a.followUp)==null?void 0:r.createdAt)||n:null,updatedAt:o?n:null},a.updatedAt=n,a.history=[...a.history||[],{at:n,label:o?`Follow-up scheduled for ${i.slice(0,10)}`:"Follow-up reminder removed"}],B(o?"follow-up-scheduled":"follow-up-removed",{taskId:a.id,emailId:a.emailId,dueAt:i,label:o?`Follow-up scheduled: ${a.title}`:`Follow-up removed: ${a.title}`}),E(),h(ue(a))}async function Zs(t){await y(450),j();const e=Qt(t),a={id:`cat-${Date.now()}`,...e,active:!0,system:!1};return m.categories.push(a),B("category-added",{categoryId:a.id,label:`Category added: ${a.name}`}),E(),h(a)}async function Xs(t,e){await y(450),j();const a=Vt(t),o=Qt(e,t),n=a.name;return Object.assign(a,o),n!==a.name&&Ss(n,a.name),B("category-updated",{categoryId:a.id,label:`Category updated: ${a.name}`}),E(),h(a)}async function eo(t){await y(400),j();const e=Vt(t);return e.active=!e.active,B("category-toggled",{categoryId:e.id,label:`${e.active?"Category restored":"Category archived"}: ${e.name}`}),E(),h(e)}async function to(t,e){await y(400),j(),e&&zt(e);const a=U(t);a.assignedTo=e;const o=m.tasks.find(n=>n.emailId===t);return o&&it(o,{assignedTo:e}),E(),h(a)}async function ao(t){await y(500),j();const e=Yt(t),a={id:`employee-${Date.now()}`,...e};return m.employees.push(a),B("employee-added",{employeeId:a.id,label:`Employee added: ${a.name}`}),E(),h(a)}async function so(t,e){await y(500),j();const a=zt(t),o=Yt(e,t);return Object.assign(a,o),B("employee-updated",{employeeId:a.id,label:`Employee updated: ${a.name}`}),E(),h(a)}async function oo(t){await y(500),j();const e=m.employees.findIndex(n=>n.id===t);if(e===-1)throw new Error("Employee not found.");const[a]=m.employees.splice(e,1);m.deletedEmployeeIds=[...new Set([...m.deletedEmployeeIds||[],t])];let o=0;return m.emails.forEach(n=>{n.assignedTo===t&&(n.assignedTo="",o+=1)}),m.tasks.forEach(n=>{n.assignedTo===t&&(n.assignedTo="",n.updatedAt=new Date().toISOString(),n.history=[...n.history||[],{at:n.updatedAt,label:"Assigned employee was removed; task returned to Unassigned"}])}),B("employee-deleted",{employeeId:a.id,label:`Employee removed: ${a.name}. ${o} assigned emails returned to Unassigned.`}),E(),h(a)}async function I(){return await y(250),h(m.completedActions)}async function io(){return await y(150),h(fe)}async function no(t,e={}){if(await y(500),!(t!=null&&t.trim()))throw new Error("Type a command first.");const a={id:`user-${Date.now()}`,role:"user",text:t.trim()},o=xs(t,e),n={id:`assistant-${Date.now()}`,role:"assistant",text:o.text};return fe=[...fe,a,n].slice(-24),bs(),h({messages:fe,action:o.action||null})}const ro=document.querySelector("#app"),ia=new Set(["dashboard","import","triage","tasks","compose","rules","drafts","admin","preferences"]),s={tab:"dashboard",demoAccounts:[],session:null,emails:[],categories:[],employees:[],rules:[],drafts:[],tasks:[],composeDrafts:[],settings:{companyName:"Demo PME Inc.",language:"en",mode:"Simple",defaultMode:"Observation only",escalationRecipient:"owner@company.ca",approvalRequired:!0,autoSend:!1},settingsForm:null,preferences:null,preferencesForm:null,loading:{emails:!0,rules:!0,drafts:!0},busy:{},selectedEmail:null,selectedCategory:null,selectedDraft:null,selectedRule:null,selectedEmployee:null,selectedTask:null,taskEditor:null,selectedDraftIds:[],confirmDialog:null,digest:null,triageFilter:"all",triageCategoryFilter:"all",taskAssigneeFilter:"all",taskFollowUpFilter:"all",draftFilter:"all",ruleQuery:"",assistantOpen:!1,assistantMessages:[],activity:[],setupPreview:null,selectedSetupMailboxId:"",composeForm:{id:"new",to:"",cc:"",subject:"",body:"",attachments:[]},summary:"",showExplanation:!1};ro.innerHTML=`
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
    </main>
  </div>
  <div id="drawerRoot"></div>
  <div id="modalRoot"></div>
  <div id="assistantRoot"></div>
  <div id="authRoot"></div>
  <div class="toast" id="toast"></div>
`;function xe(t,e){s.busy[t]=e,A()}async function $(t,e,a){try{xe(t,!0),await e(),a&&ce(a)}catch(o){ce(o.translationKey?d(o.translationKey):o.code?d(`taskWork.${o.code}`):o.message||"Something went wrong in the mock workflow.",!0)}finally{xe(t,!1)}}function v(t){return!!s.busy[t]}function ce(t,e=!1){const a=document.querySelector("#toast");a.textContent=t,a.classList.toggle("error",e),a.classList.add("show"),window.clearTimeout(a.dataset.timer),a.dataset.timer=window.setTimeout(()=>a.classList.remove("show"),2400)}function ve(){var t;return((t=s.session)==null?void 0:t.role)==="Admin"}function Ne(){var t;return((t=s.session)==null?void 0:t.role)==="Employee"}function lo(){return s.session?Ne()?new Set(["triage","tasks","compose","preferences"]):ia:new Set([])}function he(t){return lo().has(t)}function Q(t,e={}){if(!ia.has(t)||!he(t))throw new Error("That Courio section is unavailable.");const a=s.tab;a==="preferences"&&t!=="preferences"&&(s.preferencesForm=null),t==="preferences"&&a!=="preferences"&&(s.preferencesForm=structuredClone(s.preferences)),a==="admin"&&t!=="admin"&&(s.settingsForm=null),t==="admin"&&a!=="admin"&&(s.settingsForm={...s.settings}),s.tab=t,e.triageFilter&&(s.triageFilter=e.triageFilter),e.draftFilter&&(s.draftFilter=e.draftFilter),e.closeDrawers!==!1&&(s.taskEditor=null,s.selectedTask=null,s.selectedEmail=null,s.selectedCategory=null,s.selectedDraft=null,s.selectedRule=null,s.selectedEmployee=null,s.summary="",s.showExplanation=!1),A()}async function Ye(t=(e=>(e=s.selectedEmail)==null?void 0:e.id)()){if(s.emails=await z(),t){const a=s.emails.find(o=>o.id===t);s.selectedEmail=a?{...a,messages:a.thread}:null}}async function At(t=(e=>(e=s.selectedCategory)==null?void 0:e.id)()){const[a,o,n,i,r,c,g]=await Promise.all([Kt(),z(),se(),M(),J(),Zt(),I()]);s.categories=a,s.emails=o,s.rules=n,s.tasks=i,s.digest=r,s.setupPreview=c,s.activity=g,s.selectedCategory=t&&a.find(p=>p.id===t)||null}async function Et(){s.preferencesForm=null,s.triageCategoryFilter="all",s.taskEditor=null,s.selectedTask=null;const[t,e,a,o,n,i,r,c]=await Promise.all([Jt(),z(),M(),ie(),st(),J(),I(),ea()]);s.session=t,s.preferences=c,s.emails=e,s.tasks=a,s.drafts=o,s.composeDrafts=n,s.digest=i,s.activity=r,s.selectedEmail=null,s.selectedDraft=null,s.selectedRule=null,s.selectedEmployee=null,s.selectedCategory=null}function co(t){return!!(t!=null&&t.isReadyForHumanSend)}function nt(){return s.settings.mode==="Advanced"}function na(t=""){const e=s.categories.filter(o=>o.active),a=t?s.categories.find(o=>o.name===t):null;return a&&!e.some(o=>o.id===a.id)?[...e,a]:e}function uo(t,e){var a;return((a=s.categories.find(o=>o.id===t))==null?void 0:a.name)||e}function po(){const t=new Map;return s.categories.forEach(e=>{e.active&&t.set(e.name,e)}),s.emails.forEach(e=>{t.has(e.category)||t.set(e.category,{id:`current-${e.category}`,name:e.category,active:!0})}),[...t.values()].sort((e,a)=>e.name.localeCompare(a.name))}function ra(){const t=uo("cat-accounting","Accounting");return s.emails.filter(e=>s.triageCategoryFilter!=="all"&&e.category!==s.triageCategoryFilter?!1:s.triageFilter==="urgent"?e.status!=="Done"&&e.urgency==="High":s.triageFilter==="invoices"?e.status!=="Done"&&e.category===t:!0)}function Oe(){return{id:"new",to:"",cc:"",subject:"",body:"",attachments:[]}}function mo(t=0){return t<1024?`${t} B`:t<1024*1024?`${Math.round(t/1024)} KB`:`${(t/(1024*1024)).toFixed(1)} MB`}function la(){return s.settings.allowLowRiskBulkApproval!=="No"}function je(){return s.settingsForm||{...s.settings}}function go(){return je().mode==="Advanced"}function Pe(){return Ie(s.settings.language)}function d(t){return jt(Pe())(t)}function da(t){if(!t)return"";const e=new Date(t);return Number.isNaN(e.getTime())?"":e.toLocaleString()}function Je(t){if(!t)return"";const e=new Date(t);return Number.isNaN(e.getTime())?"":e.toLocaleDateString()}function fo(){const t=jt(Pe());document.querySelectorAll("[data-copy]").forEach(e=>{e.textContent=t(e.dataset.copy)})}async function vo(){var t;try{const[e,a,o,n,i,r,c,g,p,u,w,k,S,R]=await Promise.all([Is(),Jt(),z(),Kt(),Qe(),se(),ie(),M(),st(),Os(),J(),io(),I(),Zt()]);s.demoAccounts=e,s.session=a,s.preferences=await ea(),s.preferencesForm=null,s.emails=o,s.categories=n,s.employees=i,s.rules=r,s.drafts=c,s.tasks=g,s.composeDrafts=p,s.settings={...s.settings,...u},s.settingsForm=null,s.digest=w,s.assistantMessages=k,s.activity=S,s.setupPreview=R,s.selectedSetupMailboxId=((t=R.mailboxes[0])==null?void 0:t.id)||"",s.session&&!he(s.tab)&&(s.tab=Ne()?"tasks":"dashboard")}catch(e){ce(e.message||"Could not load mock data.",!0)}finally{s.loading.emails=!1,s.loading.rules=!1,s.loading.drafts=!1,A()}}function A(){s.session&&!he(s.tab)&&(s.tab=Ne()?"tasks":"dashboard");const t=es(s.tab,Pe());fo(),document.querySelector("#pageTitle").textContent=t[0],document.querySelector("#pageSubtitle").textContent=t[1],document.querySelectorAll(".section").forEach(e=>{e.classList.toggle("active",e.id===s.tab)}),document.querySelectorAll(".nav button").forEach(e=>{e.hidden=!he(e.dataset.tab),e.classList.toggle("active",e.dataset.tab===s.tab)}),yo(),ca(),wo(),bo(),ua(),ma(),Io(),Lo(),ho(),$o(),ko(),Fo(),So(),Za({state:s,t:d,canAccessTab:he,navigateTo:Q}),Va(s.session?s.preferences:null,s.categories)}function ho(){const t=document.querySelector("#preferences");if(s.tab!=="preferences"||!s.session){t.replaceChildren();return}s.preferencesForm||(s.preferencesForm=structuredClone(s.preferences)),Wa(t,{form:s.preferencesForm,categories:s.categories,t:d,busy:v("preferences")||v("preference-image"),onChange:e=>{s.preferencesForm=e},onImage:async e=>{var n,i;if(!e)return;const a=s.preferencesForm,o=(n=s.session)==null?void 0:n.id;xe("preference-image",!0);try{const r=await za(e);s.preferencesForm===a&&((i=s.session)==null?void 0:i.id)===o&&(a.backgroundImage=r)}catch{s.preferencesForm===a&&ce(d("preferences.invalidImage"),!0)}finally{xe("preference-image",!1)}}})}function yo(){const t=s.emails.filter(a=>a.status!=="Done").length,e=s.digest;document.querySelector("#dashboard").innerHTML=`
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
        <div class="value">${s.drafts.filter(co).length||0}</div>
        <div class="caption">Human approval still required to send</div>
      </div>
    </div>
    <div class="grid cols-2 stack-md">
      <div class="panel">
        <div class="panel-title"><h2>Morning digest</h2><span>${e?`Generated ${l(e.generatedAt)}`:"Loading..."}</span></div>
        <p class="subtitle">${e?l(e.headline):"Preparing a local demo digest from mock emails and drafts."}</p>
        ${e?`
          <table class="table stack-sm">
            <tr><td>Urgent items</td><td>${e.urgentItems.length?V(e.urgentItems):"None"}</td></tr>
            <tr><td>Invoices</td><td>${e.invoices.length?V(e.invoices):"None"}</td></tr>
            <tr><td>Missing documents</td><td>${e.missingDocuments.length?V(e.missingDocuments):"None"}</td></tr>
            <tr><td>Quote requests</td><td>${e.quoteRequests.length?V(e.quoteRequests):"None"}</td></tr>
            <tr><td>Client complaints</td><td>${e.clientComplaints.length?V(e.clientComplaints):"None"}</td></tr>
          </table>
        `:""}
        <div class="actions stack-sm">
          <button class="btn primary" data-action="digest" ${v("digest")?"disabled":""}>${v("digest")?"Regenerating...":"Regenerate digest"}</button>
          <button class="btn subtle" data-tab-target="triage">Review triage</button>
        </div>
      </div>
      <div class="panel">
        <div class="panel-title"><h2>Recommended next actions</h2><span>${(e==null?void 0:e.recommendedActions.length)||0} items</span></div>
        <table class="table">
          ${((e==null?void 0:e.recommendedActions)||["Digest is loading."]).map(a=>`<tr><td><span class="badge lead">Action</span></td><td>${l(a)}</td></tr>`).join("")}
          ${nt()?`<tr><td><span class="badge invoice">Advanced</span></td><td>${s.rules.filter(a=>a.on).length} rules are currently enabled.</td></tr>`:""}
        </table>
      </div>
    </div>
  `}function ca(){const t=s.setupPreview;if(!t){document.querySelector("#import").innerHTML='<div class="loading">Loading simulated setup preview...</div>';return}const e=t.mailboxes.find(a=>a.id===s.selectedSetupMailboxId)||t.mailboxes[0];document.querySelector("#import").innerHTML=`
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
          <tr><td>Folders</td><td>${V(e.folders)}</td></tr>
          <tr><td>Labels/categories</td><td>${V(e.categories)}</td></tr>
          <tr><td>Frequent senders</td><td>${V(e.frequentSenders)}</td></tr>
          <tr><td>Shared inboxes</td><td>${V(e.sharedInboxes)}</td></tr>
          <tr><td>Recent threads</td><td>${V(e.recentThreads)}</td></tr>
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
  `}function wo(){const t=Object.fromEntries(s.employees.map(r=>[r.id,r])),e=po().filter(r=>{var c;return!((c=s.preferences)!=null&&c.hiddenCategoryIds.includes(r.id))||r.name===s.triageCategoryFilter}),a=ra(),o=a.filter(r=>r.canArchive),n=s.triageCategoryFilter==="all"?d("triage.allCategories"):s.triageCategoryFilter,i=s.loading.emails?'<div class="loading">Loading mock inbox...</div>':a.length===0?`<div class="empty-state">${s.triageFilter==="urgent"?d("triage.emptyUrgent"):s.triageFilter==="invoices"?d("triage.emptyInvoices"):s.triageCategoryFilter!=="all"?d("triage.emptyCategory"):d("triage.emptyAll")}</div>`:`<table class="table">
        <thead><tr><th>Subject</th><th>Sender</th><th>Category</th><th>Assigned</th><th>Workflow</th><th>Status</th><th></th></tr></thead>
        <tbody>
          ${a.map(r=>{var c;return`
            <tr>
              <td>${l(r.subject)}</td>
              <td>${l(r.sender)}<br><small>${l(r.senderEmail||"")}</small></td>
              <td>
                <span class="badge ${Ue(r.category)}" data-category-label="${l(r.category)}">${l(r.category)}</span><br>
                <small>${l(r.urgency||"Medium")} urgency - ${r.confidence||80}% confidence</small>
                <small class="triage-reason" title="${l(r.explanation||"")}">Why: ${l(r.explanation||"Matched the current local category rules.")}</small>
              </td>
              <td>${l(((c=t[r.assignedTo])==null?void 0:c.name)||"Unassigned")}</td>
              <td>${l(r.workflowLabel||"Not started")}</td>
              <td><span class="badge ${r.status==="Done"?"done":""}">${l(r.status)}</span></td>
              <td class="actions">
                <button class="btn subtle" data-review-email="${r.id}" ${v(`review-${r.id}`)?"disabled":""}>${v(`review-${r.id}`)?"Opening...":"Review"}</button>
                <button class="btn subtle" data-archive-email="${r.id}" ${!r.canArchive||v(`archive-${r.id}`)?`disabled title="${l(r.archiveBlocker||"Remove this fake/local email from the demo inbox.")}"`:""}>${v(`archive-${r.id}`)?d("triage.removing"):d("triage.remove")}</button>
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
        <button class="btn subtle" data-archive-filtered ${a.length===0||o.length===0||v("archive-filtered")?`disabled title="${d("triage.removeFilteredDisabled")}"`:""}>${v("archive-filtered")?d("triage.removing"):`${d("triage.removeFiltered")} (${o.length})`}</button>
        <span class="mode">${l(n)}</span>
      </div>
      ${i}
    </div>
  `}function bo(){const t=s.tasks.filter(i=>{var g,p;const r=!ve()||s.taskAssigneeFilter==="all"||(s.taskAssigneeFilter==="unassigned"?!i.assignedTo:i.assignedTo===s.taskAssigneeFilter),c=s.taskFollowUpFilter==="all"||s.taskFollowUpFilter==="scheduled"&&((g=i.followUp)==null?void 0:g.enabled)||s.taskFollowUpFilter==="overdue"&&((p=i.followUp)==null?void 0:p.overdue);return r&&c}),e=t.filter(i=>i.status!=="Done").length,a=t.filter(i=>i.status!=="Done"&&i.priority==="High").length,o=t.filter(i=>{var r;return(r=i.followUp)==null?void 0:r.overdue}).length,n=t.length===0?`<div class="empty-state">${d("tasks.empty")}</div>`:`<table class="table">
        <thead><tr><th>${d("tasks.done")}</th><th>${d("tasks.task")}</th><th>${d("tasks.priority")}</th><th>${d("tasks.assignedTo")}</th><th>${d("tasks.source")}</th><th>${d("tasks.notes")}</th><th></th></tr></thead>
        <tbody>
          ${t.map(i=>{var r,c,g,p,u,w,k,S;return`
            <tr>
              <td><input type="checkbox" data-task-status="${i.id}" ${i.status==="Done"?"checked":""}></td>
              <td>
                <strong>${l(i.title)}</strong><br>
                <small>${l(i.description)}</small>
                ${i.dueAt?`<p>${d("taskWork.dueAt")}: ${l(i.dueAt)}</p>`:""}
                ${(r=i.historySummary)!=null&&r.latestLabel?`
                  <div class="task-history-summary">
                    <span>${d("tasks.latestActivity")}:</span> ${l(i.historySummary.latestAction?d(`taskWork.${i.historySummary.latestAction}`):i.historySummary.latestLabel)}
                    ${i.historySummary.latestAt?`<small>${l(da(i.historySummary.latestAt))}</small>`:""}
                  </div>
                `:""}
                <div class="follow-up-control">
                  <label class="follow-up-toggle">
                    <input type="checkbox" data-task-follow-up="${i.id}" ${(c=i.followUp)!=null&&c.enabled?"checked":""}>
                    <span>${(g=i.followUp)!=null&&g.enabled?d("tasks.reminderOn"):d("tasks.reminderOff")}</span>
                  </label>
                  ${(p=i.followUp)!=null&&p.enabled?`
                    <input class="follow-up-date" type="date" data-task-follow-up-date="${i.id}" value="${l(((u=i.followUp.dueAt)==null?void 0:u.slice(0,10))||"")}" aria-label="${d("tasks.followUpDate")}">
                    <small class="${i.followUp.overdue?"follow-up-overdue":""}">${i.followUp.overdue?d("tasks.overdue"):`${d("tasks.scheduled")} ${Je(i.followUp.dueAt)}`}</small>
                  `:""}
                </div>
              </td>
              <td><span class="badge ${i.priority==="High"?"urgent":i.priority==="Low"?"done":"pending"}">${l(i.priority)}</span><br><small>${l(i.category)}</small></td>
              <td>
                ${ve()?`<select data-task-assignee="${i.id}">
                      <option value="" ${i.assignedTo?"":"selected"}>${d("tasks.unassigned")}</option>
                      ${s.employees.map(R=>`<option value="${R.id}" ${i.assignedTo===R.id?"selected":""}>${l(R.name)}</option>`).join("")}
                    </select>`:l(((w=i.assignedEmployee)==null?void 0:w.name)||d("tasks.unassigned"))}
              </td>
              <td>${l(((k=i.sourceEmail)==null?void 0:k.subject)||"Local task")}<br><small>${l(((S=i.sourceEmail)==null?void 0:S.sender)||"Demo inbox")}</small></td>
              <td><textarea data-task-note="${i.id}" placeholder="${d("tasks.notePlaceholder")}">${l(i.notes||"")}</textarea></td>
              <td class="actions">
                ${i.sourceEmail?`<button class="btn subtle" data-review-email="${i.sourceEmail.id}">${d("tasks.reviewEmail")}</button>`:""}
                <button class="btn subtle" data-review-task="${i.id}">${d("tasks.viewHistory")}</button>
                <button class="btn subtle" data-edit-task="${i.id}">${d("taskWork.edit")}</button>
                <button class="btn subtle" data-save-task-note="${i.id}" ${v(`task-note-${i.id}`)?"disabled":""}>${v(`task-note-${i.id}`)?d("tasks.saving"):d("tasks.saveNote")}</button>
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
      <div class="panel-title"><h2>${Ne()?d("taskWork.myTasks"):d("tasks.title")}</h2><button class="btn primary" data-add-task>${d("taskWork.add")}</button></div>
      ${ve()?`
        <div class="list-toolbar task-filters below-sm">
          <select data-task-assignee-filter aria-label="${d("tasks.assigneeFilter")}">
            <option value="all" ${s.taskAssigneeFilter==="all"?"selected":""}>${d("tasks.allAssignees")}</option>
            <option value="unassigned" ${s.taskAssigneeFilter==="unassigned"?"selected":""}>${d("tasks.unassigned")}</option>
            ${s.employees.map(i=>`<option value="${i.id}" ${s.taskAssigneeFilter===i.id?"selected":""}>${l(i.name)}</option>`).join("")}
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
      ${n}
    </div>
  `}function ua(){const t=s.composeForm||Oe(),e=t.attachments.length?`<ul>${t.attachments.map(o=>`<li>${l(o.name)} <small>${l(o.type||"Unknown")} - ${mo(o.size)}</small></li>`).join("")}</ul>`:`<div class="empty-state">${d("compose.noAttachments")}</div>`,a=s.composeDrafts.length?`<table class="table">
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
          <button class="btn primary" data-save-compose ${v("save-compose")?"disabled":""}>${v("save-compose")?d("compose.saving"):d("compose.saveDraft")}</button>
          <button class="btn subtle" data-print-compose>${d("compose.printPdf")}</button>
          <span class="mode">${d("compose.neverSends")}</span>
        </div>
      </div>
      <div class="panel">
        <div class="panel-title"><h2>${d("compose.savedDrafts")}</h2><span>${d("compose.localOnly")}</span></div>
        ${a}
      </div>
    </div>
  `}function $o(){const t=document.querySelector("#drawerRoot");if(s.taskEditor){Xa(t,s.taskEditor,s.employees,ve(),d);return}if(s.selectedCategory){To(t);return}if(s.selectedEmployee){Ro(t);return}if(s.selectedRule){Co(t);return}if(s.selectedDraft){Do(t);return}if(s.selectedTask){xo(t);return}if(!s.selectedEmail){t.innerHTML="";return}const e=s.selectedEmail,a=e.status==="Done",o=s.employees.find(i=>i.id===e.assignedTo),n=na(e.category);t.innerHTML=`
    <div class="drawer-backdrop" data-close-drawer></div>
    <aside class="review-drawer" aria-label="Email review">
      <div class="drawer-header">
        <div>
          <div class="badge ${Ue(e.category)}" data-category-label="${l(e.category)}">${l(e.category)}</div>
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
            ${n.map(i=>`<option value="${l(i.name)}" ${i.name===e.category?"selected":""}>${l(i.name)}${i.active?"":" (archived)"}</option>`).join("")}
          </select>
        </label>
        ${ve()?`<label>Assigned employee
              <select data-email-assignee="${e.id}">
                <option value="" ${e.assignedTo?"":"selected"}>Unassigned</option>
                ${s.employees.map(i=>`<option value="${l(i.id)}" ${i.id===e.assignedTo?"selected":""}>${l(i.name)} - ${l(i.department)}</option>`).join("")}
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
        <ul>${e.messages.map(i=>`<li>${l(i)}</li>`).join("")}</ul>
      </div>

      ${s.summary?`<div class="drawer-section"><h3>Summary</h3><div class="preview">${l(s.summary)}</div></div>`:""}
      <div class="drawer-actions">
        <button class="btn primary" data-summary-email="${e.id}" ${v(`summary-${e.id}`)?"disabled":""}>${v(`summary-${e.id}`)?"Summarizing...":"Summarize"}</button>
        <button class="btn subtle" data-email-task="${e.id}">${d("taskWork.emailTask")}</button>
        ${e.canOpenDraft?`<button class="btn subtle" data-open-email-draft="${e.id}" ${v(`open-email-draft-${e.id}`)?"disabled":""}>${e.draftActionLabel}</button>`:`<button class="btn subtle" data-generate-draft="${e.id}" ${!e.canGenerateDraft||v(`draft-${e.id}`)?`disabled title="${e.completionBlocker||"Draft action is unavailable."}"`:""}>${v(`draft-${e.id}`)?"Drafting...":e.draftActionLabel}</button>`}
        <button class="btn subtle" data-archive-email="${e.id}" ${!e.canArchive||v(`archive-${e.id}`)?`disabled title="${l(e.archiveBlocker||"Remove this fake/local email from the demo inbox.")}"`:""}>${v(`archive-${e.id}`)?d("triage.removing"):d("triage.remove")}</button>
        ${a?'<span class="status-text">Workflow complete</span>':'<span class="status-text">Approving the draft completes this workflow.</span>'}
      </div>
      <p class="drawer-note">This is a local prototype. Courio does not send email.</p>
    </aside>
  `}function ko(){const t=document.querySelector("#modalRoot");if(!s.confirmDialog){t.innerHTML="";return}const e=s.confirmDialog;t.innerHTML=`
    <div class="modal-backdrop"></div>
    <div class="confirm-modal" role="dialog" aria-modal="true">
      <h2>${l(e.title)}</h2>
      <p>${l(e.message)}</p>
      <div class="actions">
        <button class="btn ${e.tone==="danger"?"danger":"primary"}" data-confirm-primary>${l(e.primaryLabel)}</button>
        <button class="btn subtle" data-confirm-cancel>${d("taskWork.cancel")}</button>
      </div>
    </div>
  `}function So(){const t=document.querySelector("#authRoot");if(!s.session){t.innerHTML=`
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
  `}async function Ao(t){const e=await _s(t);s.drafts=await ie(),await Ye(t),s.selectedDraft=await be(e.id),s.selectedEmail=null,s.selectedRule=null,s.selectedEmployee=null,s.selectedCategory=null}async function Eo(t){var e;await Hs(t),s.drafts=await ie(),s.emails=await z(),s.activity=await I(),s.digest=await J(),s.selectedDraftIds=s.selectedDraftIds.filter(a=>a!==t),((e=s.selectedDraft)==null?void 0:e.id)===t&&(s.selectedDraft=await be(t))}function Do(t){const e=s.selectedDraft,a=e.sourceEmail||{},o=a.status==="Done";t.innerHTML=`
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
            <button class="btn primary" data-save-draft="${e.id}" ${v(`save-${e.id}`)?"disabled":""}>${v(`save-${e.id}`)?"Saving...":"Save changes"}</button>
            <button class="btn success" data-approve-draft="${e.id}" ${!e.canApprove||v(`approve-${e.id}`)?`disabled title="${e.approvalBlocker||"Save the reviewed draft before approving."}"`:""}>${v(`approve-${e.id}`)?"Approving...":"Approve and complete"}</button>
          `}
        <button class="btn subtle" data-close-drawer>Close</button>
      </div>
      <p class="drawer-note">Approval completes this workflow and marks the draft ready for a person to send. Courio never sends email.</p>
    </aside>
  `}function Co(t){var o;const e=s.selectedRule,a=na(e.category);t.innerHTML=`
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
            ${a.map(n=>`<option value="${l(n.name)}" ${n.name===e.category?"selected":""}>${l(n.name)}${n.active?"":" (archived)"}</option>`).join("")}
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
        <ul>${(e.matches||["No sample matches yet."]).map(n=>`<li>${l(n)}</li>`).join("")}</ul>
      </div>

      ${nt()?`<div class="drawer-section"><h3>Advanced preview</h3><div class="preview">This rule uses the current confidence threshold of ${s.settings.confidenceThreshold||80}%. No mailbox changes happen in the prototype.</div></div>`:""}

      <div class="drawer-actions">
        <button class="btn primary" data-save-rule="${e.id}" ${v(`save-rule-${e.id}`)?"disabled":""}>${v(`save-rule-${e.id}`)?"Saving...":"Save rule"}</button>
        <button class="btn danger" data-delete-rule="${e.id}">Delete rule</button>
        <button class="btn subtle" data-close-drawer>Close</button>
      </div>
    </aside>
  `}function To(t){const e=s.selectedCategory,a=e.id==="new",o=[["default","Default"],["urgent","Red / urgent"],["invoice","Green"],["lead","Blue"],["pending","Amber"]];t.innerHTML=`
    <div class="drawer-backdrop" data-close-drawer></div>
    <aside class="review-drawer" aria-label="${a?"Add category":"Edit category"}">
      <div class="drawer-header">
        <div>
          <div class="badge ${Ue(e.name)}">${e.active===!1?"Archived":"Active"}</div>
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
            ${o.map(([n,i])=>`<option value="${n}" ${n===(e.color||"default")?"selected":""}>${i}</option>`).join("")}
          </select>
        </label>
      </div>

      <div class="drawer-actions">
        <button class="btn primary" data-save-category="${e.id}" ${v(`save-category-${e.id}`)?"disabled":""}>${v(`save-category-${e.id}`)?"Saving...":a?"Add category":"Save changes"}</button>
        ${a?"":`<button class="btn subtle" data-toggle-category="${e.id}" ${v(`toggle-category-${e.id}`)?"disabled":""}>${e.active===!1?"Restore category":"Archive category"}</button>`}
        <button class="btn subtle" data-close-drawer>Close</button>
      </div>
      <p class="drawer-note">Archiving removes a category from new dropdown choices, but old emails and rules still display safely.</p>
    </aside>
  `}function Ro(t){const e=s.selectedEmployee,a=e.id==="new";t.innerHTML=`
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
        <button class="btn primary" data-save-employee="${e.id}" ${v(`save-employee-${e.id}`)?"disabled":""}>${v(`save-employee-${e.id}`)?"Saving...":a?"Add employee":"Save changes"}</button>
        ${a?"":`<button class="btn danger" data-delete-employee="${e.id}">Remove employee</button>`}
        <button class="btn subtle" data-close-drawer>Close</button>
      </div>
      <p class="drawer-note">Employee records remain fake and local to this browser. Email addresses must be valid and unique.</p>
    </aside>
  `}function pa(t){return Object.entries(t).map(([e,a])=>{var n;const o=e==="assignedTo"?((n=s.employees.find(i=>i.id===a))==null?void 0:n.name)||a||d("tasks.unassigned"):["priority","status"].includes(e)?d(`taskWork.${a}`):a||d("taskWork.none");return`${d(`taskWork.${e}`)}: ${o}`}).join("; ")}function xo(t){var n,i,r;const e=s.selectedTask,a=Array.isArray(e.history)?e.history:[],o=(n=e.followUp)!=null&&n.enabled?e.followUp.overdue?`${d("tasks.overdue")} - ${Je(e.followUp.dueAt)}`:`${d("tasks.scheduled")} ${Je(e.followUp.dueAt)}`:d("tasks.noReminder");t.innerHTML=`
    <div class="drawer-backdrop" data-close-drawer></div>
    <aside class="review-drawer" aria-label="${d("tasks.historyTitle")}">
      <div class="drawer-header">
        <div>
          <div class="badge ${e.priority==="High"?"urgent":e.priority==="Low"?"done":"pending"}">${l(e.priority)}</div>
          <h2>${l(e.title)}</h2>
          <p>${l(((i=e.sourceEmail)==null?void 0:i.subject)||d("tasks.localTask"))}</p>
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
                ${c.at?`<time>${l(da(c.at))}</time>`:""}
                ${c.before?`<p>${l(pa(c.before))}</p>`:""}
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
  `}function ma(){const t=s.ruleQuery.trim().toLowerCase(),e=s.rules.filter(o=>!t||`${o.title} ${o.desc} ${o.category}`.toLowerCase().includes(t)),a=s.loading.rules?'<div class="loading">Loading suggested rules...</div>':e.length===0?`<div class="empty-state">${t?`No rules match “${l(s.ruleQuery)}”. Clear the search to see all local rules.`:"No rules yet. Local rule suggestions will appear here."}</div>`:`<div class="grid cols-2">
        ${e.map(o=>`
          <div class="rule-card">
            <div class="rule-top">
              <div>
                <div class="rule-title">${l(o.title)}</div>
                <div class="rule-desc">${l(o.desc)}</div>
              </div>
              <button class="toggle ${o.on?"on":""}" aria-label="Toggle ${l(o.title)}" data-toggle-rule="${o.id}" ${v(`rule-${o.id}`)?"disabled":""}></button>
            </div>
            <div class="preview"><strong>Local sample preview:</strong> ${l(o.impact)}</div>
            <div class="preview"><strong>${o.confidence||80}% confidence:</strong> ${l(o.explanation||"Based on local mock patterns.")}</div>
            ${nt()?`<div class="preview"><strong>Would match:</strong> ${V(o.matches||["No samples"])}</div>`:""}
            <div class="actions">
              ${o.on?'<span class="status-text">In observation</span>':`<button class="btn primary" data-approve-rule="${o.id}" ${v(`approve-rule-${o.id}`)?"disabled":""}>${v(`approve-rule-${o.id}`)?"Approving...":"Approve for observation"}</button>`}
              <button class="btn subtle" data-edit-rule="${o.id}" ${v(`edit-rule-${o.id}`)?"disabled":""}>${v(`edit-rule-${o.id}`)?"Opening...":"Edit"}</button>
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
  `}function Io(){const t=s.selectedDraftIds.length,e=s.drafts.filter(i=>i.risk!=="High"&&i.canSelectForBulkApproval).length,a=!la(),o=s.drafts.filter(i=>s.draftFilter==="needs_approval"?i.canSelectForBulkApproval:s.draftFilter==="ready"?i.isReadyForHumanSend:!0),n=s.loading.drafts?'<div class="loading">Loading draft queue...</div>':o.length===0?`<div class="empty-state">${s.draftFilter==="needs_approval"?"No drafts need approval. Reviewed drafts will appear here when they are ready.":s.draftFilter==="ready"?"No drafts are ready for human send yet.":"No drafts are available in this local demo."}</div>`:`<table class="table">
        <thead><tr><th>Select</th><th>Draft</th><th>Source</th><th>Risk</th><th>Status</th><th></th></tr></thead>
        <tbody>
          ${o.map(i=>`
            <tr>
              <td><input type="checkbox" data-select-draft="${i.id}" ${s.selectedDraftIds.includes(i.id)?"checked":""} ${i.canSelectForBulkApproval?"":`disabled title="${i.approvalBlocker||"Review and save this draft first."}"`}></td>
              <td>${l(i.title)}</td>
              <td>${l(i.source)}</td>
              <td><span class="badge ${i.risk==="High"?"urgent":"done"}">${l(i.risk||"Low")}</span></td>
              <td><span class="badge ${i.isReadyForHumanSend?"done":"pending"}">${l(i.statusLabel)}</span></td>
              <td class="actions">
                <button class="btn subtle" data-review-draft="${i.id}" ${v(`review-draft-${i.id}`)?"disabled":""}>${v(`review-draft-${i.id}`)?"Opening...":"Review"}</button>
                ${i.isReadyForHumanSend?'<span class="status-text">Workflow complete</span>':`<button class="btn success" data-approve-draft="${i.id}" ${!i.canApprove||v(`approve-${i.id}`)?`disabled title="${i.approvalBlocker||"Review and save this draft first."}"`:""}>${v(`approve-${i.id}`)?"Approving...":"Approve and complete"}</button>`}
              </td>
            </tr>
          `).join("")}
        </tbody>
      </table>`;document.querySelector("#drafts").innerHTML=`
    <div class="panel">
      <div class="panel-title"><h2>Draft approval queue</h2><span>Human approval required</span></div>
      <div class="segmented below-sm">
        ${[["all","All drafts"],["needs_approval","Needs approval"],["ready","Ready"]].map(([i,r])=>`<button class="${s.draftFilter===i?"active":""}" data-draft-filter="${i}">${r}</button>`).join("")}
      </div>
      <div class="actions below-sm">
        <button class="btn success" data-approve-selected ${t===0||v("approve-selected")?`disabled title="${t===0?"Select at least one reviewed and saved draft.":""}"`:""}>${v("approve-selected")?"Approving...":`Approve selected (${t})`}</button>
        <button class="btn subtle" data-approve-low-risk ${a||e===0||v("approve-low-risk")?`disabled title="${a?"Enable low-risk bulk approval in Advanced workspace settings.":e===0?"No reviewed low-risk drafts are ready for approval.":""}"`:""}>${a?"Low-risk bulk approval disabled":v("approve-low-risk")?"Approving...":`Approve all low-risk (${e})`}</button>
        <span class="mode">Approval completes the workflow; nothing is sent</span>
      </div>
      ${a?'<div class="preview below-sm">Low-risk bulk approval is disabled by workspace settings.</div>':""}
      ${n}
    </div>
  `}function Fo(){const t=document.querySelector("#assistantRoot");t.innerHTML=as({assistantOpen:s.assistantOpen,assistantMessages:s.assistantMessages,assistantBusy:v("assistant")})}async function ga(t){await $("assistant",async()=>{var a;const e=await no(t,{selectedEmailId:((a=s.selectedEmail)==null?void 0:a.id)||null});s.assistantMessages=e.messages,await Mo(e.action)})}async function Mo(t){if(t){if(t.type==="show_triage"){Q("triage",{triageFilter:t.filter||"all"});return}if(t.type==="show_drafts"){Q("drafts",{draftFilter:t.filter||"all"});return}if(t.type==="generate_digest"){s.digest=await J(),Q("dashboard");return}if(t.type==="explain_email"){s.selectedEmail=await aa(t.emailId),s.selectedDraft=null,s.selectedRule=null,s.selectedEmployee=null,s.selectedCategory=null,s.summary="",s.showExplanation=!0,Q("triage",{triageFilter:"all",closeDrawers:!1});return}if(t.type==="show_rule"){s.rules=await se(),s.selectedRule=s.rules.find(e=>e.id===t.ruleId)||null,s.selectedEmail=null,s.selectedDraft=null,s.selectedEmployee=null,s.selectedCategory=null,Q("rules",{closeDrawers:!1});return}t.type==="reset_demo_data"&&(s.confirmDialog={type:"reset-demo",title:"Reset demo data?",message:"This clears all local Courio changes and restores the original fake demo data.",primaryLabel:"Reset demo data",tone:"danger"},A())}}function Lo(){const t=je();document.querySelector("#admin").innerHTML=`
    <div class="grid cols-2">
      <div class="panel">
        <div class="panel-title"><h2>${d("admin.workspaceSettings")}</h2><span>${d("admin.prototype")}</span></div>
        <div class="form-grid">
          <label>${d("admin.companyName")}<input data-setting="companyName" value="${l(t.companyName||"Demo PME Inc.")}"></label>
          <label>${d("admin.language")}
            <select data-setting="language">
              ${[["en","English"],["fr","Français"]].map(([e,a])=>`<option value="${e}" ${e===Ie(t.language)?"selected":""}>${a}</option>`).join("")}
            </select>
          </label>
          <label>${d("admin.mode")}
            <select data-setting="mode">
              ${["Simple","Advanced"].map(e=>`<option ${e===t.mode?"selected":""}>${e}</option>`).join("")}
            </select>
          </label>
          <label>${d("admin.escalationRecipient")}<input data-setting="escalationRecipient" value="${l(t.escalationRecipient||"owner@company.ca")}"></label>
          ${go()?`
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
          <button class="btn primary" data-save-settings ${v("settings")?"disabled":""}>${v("settings")?d("admin.saving"):d("admin.saveSettings")}</button>
          <button class="btn danger" data-reset-demo ${v("reset-demo")?"disabled":""}>${v("reset-demo")?d("admin.resetting"):d("admin.resetDemoData")}</button>
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
          <tr><td>${d("admin.savedLanguage")}</td><td>${Pe()==="fr"?"Français":"English"}</td></tr>
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
                    <td><span class="badge ${Ue(e.name)}" data-category-label="${l(e.name)}">${l(e.name)}</span>${e.system?"<br><small>System default</small>":""}</td>
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
  `}function Ue(t){const e=s.categories.find(a=>a.name===t);return e!=null&&e.color&&e.color!=="default"?e.color:t==="Urgent"||t==="Client complaint"?"urgent":t==="Accounting"||t==="Documents"||t==="Missing documents"?"invoice":t==="Sales"?"lead":""}document.addEventListener("click",async t=>{var a;const e=t.target.closest("button");if(e){if(e.dataset.discardPreferences!==void 0){s.preferencesForm=structuredClone(s.preferences),A();return}if(e.dataset.removeBackground!==void 0){s.preferencesForm.backgroundImage=null,A();return}if(e.dataset.resetPreferences!==void 0){await $("preferences",async()=>{s.preferences=await Ns(),s.preferencesForm=structuredClone(s.preferences)},d("preferences.resetDone"));return}if(e.dataset.closeDrawer!==void 0&&(s.taskEditor=null),e.dataset.addTask!==void 0||e.dataset.editTask){s.taskEditor=e.dataset.editTask?{...s.tasks.find(o=>o.id===e.dataset.editTask)}:{},s.selectedEmail=null,s.selectedTask=null,A();return}if(e.dataset.emailTask){await $("email-task",async()=>{s.taskEditor=await Js(e.dataset.emailTask),s.selectedEmail=null,s.tasks=await M()});return}if(e.dataset.restoreTask){const o=s.tasks.find(i=>i.id===e.dataset.restoreTask),n=o==null?void 0:o.history.find(i=>i.id===e.dataset.historyId);if(!(n!=null&&n.canRestore))return;s.confirmDialog={type:"restore-task",taskId:o.id,historyId:n.id,title:d("taskWork.restoreTitle"),message:`${d("taskWork.restoreMessage")} ${pa(n.before)}`,primaryLabel:d("taskWork.restore")},A();return}if(e.dataset.assistantToggle!==void 0){s.assistantOpen=!s.assistantOpen,A();return}if(e.dataset.assistantCommand){await ga(e.dataset.assistantCommand);return}if(e.dataset.confirmCancel!==void 0){s.confirmDialog=null,A();return}if(e.dataset.confirmPrimary!==void 0){const o=s.confirmDialog;if(s.confirmDialog=null,(o==null?void 0:o.type)==="restore-task"){await $("restore-task",async()=>{await Ks(o.taskId,o.historyId),s.tasks=await M(),s.selectedTask=s.tasks.find(n=>n.id===o.taskId)||null,s.activity=await I()},d("taskWork.restored"));return}if((o==null?void 0:o.type)==="reset-demo"){await $("reset-demo",async()=>{await Ps(),window.location.reload()});return}if((o==null?void 0:o.type)==="delete-rule"){await $(`delete-rule-${o.ruleId}`,async()=>{await Vs(o.ruleId),s.rules=await se(),s.activity=await I(),s.selectedRule=null},"Rule deleted locally.");return}if((o==null?void 0:o.type)==="delete-employee"){await $(`delete-employee-${o.employeeId}`,async()=>{await oo(o.employeeId),s.employees=await Qe(),s.emails=await z(),s.tasks=await M(),s.activity=await I(),s.selectedEmployee=null},"Employee removed and assigned emails returned to Unassigned.");return}if((o==null?void 0:o.type)==="archive-emails"){await $("archive-emails",async()=>{await Qs(o.emailIds,o.reason),s.emails=await z(),s.tasks=await M(),s.digest=await J(),s.activity=await I(),s.selectedEmail=null},d("triage.removeSuccess"));return}}if(e.dataset.loginAccount){await $("login-demo",async()=>{const o=await Fs(e.dataset.loginAccount);await Et(),s.tab=o.role==="Employee"?"tasks":"dashboard"},d("auth.loginToast"));return}if(e.dataset.logoutDemo!==void 0){await $("logout-demo",async()=>{await Ms(),await Et()},d("auth.logoutToast"));return}if(e.dataset.tab&&Q(e.dataset.tab),e.dataset.tabTarget&&Q(e.dataset.tabTarget),e.dataset.newCompose!==void 0){s.composeForm=Oe(),A();return}if(e.dataset.openComposeDraft){const o=s.composeDrafts.find(n=>n.id===e.dataset.openComposeDraft);o&&(s.composeForm={...o,attachments:[...o.attachments]},Q("compose",{closeDrawers:!1}));return}if(e.dataset.saveCompose!==void 0){await $("save-compose",async()=>{const o=await Ls(s.composeForm);s.composeForm={...o,attachments:[...o.attachments]},s.composeDrafts=await st(),s.activity=await I()},d("compose.savedToast"));return}if(e.dataset.printCompose!==void 0){ce(d("compose.printToast")),window.print();return}if(e.dataset.setupMailbox&&(s.selectedSetupMailboxId=e.dataset.setupMailbox,ca()),e.dataset.triageFilter&&(s.triageFilter=e.dataset.triageFilter,A()),e.dataset.archiveEmail){const o=s.emails.find(n=>n.id===e.dataset.archiveEmail);if(!o)return;s.confirmDialog={type:"archive-emails",emailIds:[o.id],reason:"Removed from demo inbox",title:d("triage.removeConfirmTitle"),message:`${d("triage.removeConfirmMessage")} "${o.subject}"`,primaryLabel:d("triage.remove"),tone:"danger"},A();return}if(e.dataset.archiveFiltered!==void 0){const o=ra().filter(n=>n.canArchive);if(!o.length)return;s.confirmDialog={type:"archive-emails",emailIds:o.map(n=>n.id),reason:"Bulk removed from demo inbox",title:d("triage.removeFilteredConfirmTitle"),message:`${d("triage.removeFilteredConfirmMessage")} ${o.length}`,primaryLabel:d("triage.removeFiltered"),tone:"danger"},A();return}if(e.dataset.draftFilter&&(s.draftFilter=e.dataset.draftFilter,A()),e.dataset.action==="digest"&&await $("digest",async()=>{s.digest=await J()},"Morning digest regenerated from local demo data."),e.dataset.reviewEmail){const o=e.dataset.reviewEmail;await $(`review-${o}`,async()=>{s.selectedEmail=await aa(o),s.emails=await z(),s.selectedDraft=null,s.selectedRule=null,s.selectedEmployee=null,s.selectedCategory=null,s.selectedTask=null,s.summary="",s.showExplanation=!1},"Message thread opened.")}if(e.dataset.reviewDraft){const o=e.dataset.reviewDraft;await $(`review-draft-${o}`,async()=>{s.selectedDraft=await be(o),s.selectedEmail=null,s.selectedRule=null,s.selectedEmployee=null,s.selectedCategory=null,s.selectedTask=null,s.summary="",s.showExplanation=!1},"Draft opened for review.")}if(e.dataset.openEmailDraft){const o=e.dataset.openEmailDraft;await $(`open-email-draft-${o}`,async()=>{s.selectedDraft=await qs(o),s.selectedEmail=null,s.selectedRule=null,s.selectedEmployee=null,s.selectedCategory=null,s.selectedTask=null,s.summary="",s.showExplanation=!1},"Draft opened for editing.")}if(e.dataset.reviewTask){const o=e.dataset.reviewTask;s.selectedTask=s.tasks.find(n=>n.id===o)||null,s.selectedEmail=null,s.selectedDraft=null,s.selectedRule=null,s.selectedEmployee=null,s.selectedCategory=null,A();return}if(e.dataset.saveTaskNote){const o=e.dataset.saveTaskNote,n=((a=document.querySelector(`[data-task-note="${o}"]`))==null?void 0:a.value)||"";await $(`task-note-${o}`,async()=>{await Re(o,{notes:n}),s.tasks=await M(),s.activity=await I()},d("tasks.noteSaved"));return}if(e.dataset.closeDrawer!==void 0&&(s.selectedEmail=null,s.selectedDraft=null,s.selectedRule=null,s.selectedEmployee=null,s.selectedCategory=null,s.selectedTask=null,s.summary="",s.showExplanation=!1,A()),e.dataset.toggleExplanation!==void 0&&(s.showExplanation=!s.showExplanation,A()),e.dataset.summaryEmail){const o=e.dataset.summaryEmail;await $(`summary-${o}`,async()=>{s.summary=await Us(o)},"Thread summary generated.")}if(e.dataset.generateDraft){const o=e.dataset.generateDraft;await $(`draft-${o}`,async()=>{await Ao(o)},"Draft opened. Existing edits were preserved.")}if(e.dataset.saveDraft){const o=e.dataset.saveDraft,n=document.querySelector("[data-draft-editor]");await $(`save-${o}`,async()=>{var i;await Bs(o,n.value),s.drafts=await ie(),s.emails=await z(),((i=s.selectedDraft)==null?void 0:i.id)===o&&(s.selectedDraft=await be(o))},"Draft saved locally.")}if(e.dataset.toggleRule){const o=e.dataset.toggleRule;await $(`rule-${o}`,async()=>{await kt(o),s.rules=await se()},"Rule preview state updated.")}if(e.dataset.approveRule){const o=e.dataset.approveRule;await $(`approve-rule-${o}`,async()=>{s.rules.find(i=>i.id===o).on||await kt(o),s.rules=await se()},"Rule approved for observation mode.")}if(e.dataset.editRule){const o=e.dataset.editRule;await $(`edit-rule-${o}`,async()=>{s.selectedRule=s.rules.find(n=>n.id===o),s.selectedEmail=null,s.selectedDraft=null,s.selectedEmployee=null,s.selectedCategory=null,s.selectedTask=null},"Rule opened for local editing.")}if(e.dataset.saveRule){const o=e.dataset.saveRule,n=Object.fromEntries([...document.querySelectorAll("[data-rule-field]")].map(i=>[i.dataset.ruleField,i.value]));await $(`save-rule-${o}`,async()=>{await zs(o,n),s.rules=await se(),s.selectedRule=s.rules.find(i=>i.id===o)},"Rule saved locally.")}if(e.dataset.deleteRule){const o=e.dataset.deleteRule,n=s.rules.find(i=>i.id===o);s.confirmDialog={type:"delete-rule",ruleId:o,title:"Delete this rule?",message:`Delete “${(n==null?void 0:n.title)||"this rule"}” from the local demo?`,primaryLabel:"Delete rule",tone:"danger"},A()}if(e.dataset.addEmployee!==void 0&&(s.selectedEmployee={id:"new",name:"",email:"",title:"",department:""},s.selectedEmail=null,s.selectedDraft=null,s.selectedRule=null,s.selectedCategory=null,A()),e.dataset.editEmployee&&(s.selectedEmployee=s.employees.find(o=>o.id===e.dataset.editEmployee)||null,s.selectedEmail=null,s.selectedDraft=null,s.selectedRule=null,s.selectedCategory=null,A()),e.dataset.saveEmployee){const o=e.dataset.saveEmployee,n=Object.fromEntries([...document.querySelectorAll("[data-employee-field]")].map(i=>[i.dataset.employeeField,i.value]));await $(`save-employee-${o}`,async()=>{const i=o==="new"?await ao(n):await so(o,n);s.employees=await Qe(),s.tasks=await M(),s.activity=await I(),s.selectedEmployee=s.employees.find(r=>r.id===i.id)||null},o==="new"?"Employee added locally.":"Employee changes saved locally.")}if(e.dataset.deleteEmployee){const o=e.dataset.deleteEmployee,n=s.employees.find(r=>r.id===o),i=s.emails.filter(r=>r.assignedTo===o).length;s.confirmDialog={type:"delete-employee",employeeId:o,title:"Remove this employee?",message:`Remove ${(n==null?void 0:n.name)||"this employee"}? ${i} assigned email${i===1?"":"s"} will return to Unassigned.`,primaryLabel:"Remove employee",tone:"danger"},A()}if(e.dataset.addCategory!==void 0&&(s.selectedCategory={id:"new",name:"",description:"",color:"default",active:!0,system:!1},s.selectedEmail=null,s.selectedDraft=null,s.selectedRule=null,s.selectedEmployee=null,A()),e.dataset.editCategory&&(s.selectedCategory=s.categories.find(o=>o.id===e.dataset.editCategory)||null,s.selectedEmail=null,s.selectedDraft=null,s.selectedRule=null,s.selectedEmployee=null,A()),e.dataset.saveCategory){const o=e.dataset.saveCategory,n=Object.fromEntries([...document.querySelectorAll("[data-category-field]")].map(i=>[i.dataset.categoryField,i.value]));await $(`save-category-${o}`,async()=>{const i=o==="new"?await Zs(n):await Xs(o,n);await At(i.id)},o==="new"?"Category added locally.":"Category changes saved locally.")}if(e.dataset.toggleCategory){const o=e.dataset.toggleCategory;await $(`toggle-category-${o}`,async()=>{const n=await eo(o);await At(n.id)},"Category visibility updated locally.")}if(e.dataset.approveDraft){const o=e.dataset.approveDraft;await $(`approve-${o}`,async()=>{await Eo(o)},"Draft approved and workflow completed. Nothing was sent.")}if(e.dataset.approveSelected!==void 0&&await $("approve-selected",async()=>{await sa(s.selectedDraftIds),s.drafts=await ie(),s.emails=await z(),s.activity=await I(),s.digest=await J(),s.selectedDraftIds=[]},"Selected drafts approved and workflows completed. Nothing was sent."),e.dataset.approveLowRisk!==void 0){if(!la()){ce("Low-risk bulk approval is disabled by workspace settings.",!0);return}await $("approve-low-risk",async()=>{await Ws(),s.drafts=await ie(),s.emails=await z(),s.activity=await I(),s.digest=await J(),s.selectedDraftIds=[]},"Low-risk drafts approved and workflows completed. Nothing was sent.")}if(e.dataset.saveSettings!==void 0){const o=Object.fromEntries([...document.querySelectorAll("[data-setting]")].map(n=>[n.dataset.setting,n.value]));await $("settings",async()=>{s.settings=await js(o),s.settingsForm={...s.settings}},"Settings saved locally.")}e.dataset.resetDemo!==void 0&&(s.confirmDialog={type:"reset-demo",title:"Reset demo data?",message:"This clears all local Courio changes and restores the original fake demo data.",primaryLabel:"Reset demo data",tone:"danger"},A())}});document.addEventListener("change",async t=>{const e=t.target;if(e.dataset.setting!==void 0){s.settingsForm={...je(),[e.dataset.setting]:e.value},e.dataset.setting==="mode"&&A();return}if(e.dataset.taskStatus){const a=e.dataset.taskStatus;await $(`task-status-${a}`,async()=>{await Re(a,{status:e.checked?"Done":"Open"}),s.tasks=await M(),s.activity=await I()},e.checked?d("tasks.completedToast"):d("tasks.reopenedToast"));return}if(e.dataset.taskAssignee){const a=e.dataset.taskAssignee;await $(`task-assignee-${a}`,async()=>{await Re(a,{assignedTo:e.value}),s.tasks=await M(),s.activity=await I()},d("tasks.assignedToast"));return}if(e.dataset.taskAssigneeFilter!==void 0){s.taskAssigneeFilter=e.value,A();return}if(e.dataset.taskFollowUp!==void 0){const a=e.dataset.taskFollowUp;await $(`task-follow-up-${a}`,async()=>{await St(a,{enabled:e.checked}),s.tasks=await M(),s.activity=await I()},e.checked?d("tasks.followUpScheduledToast"):d("tasks.followUpRemovedToast"));return}if(e.dataset.taskFollowUpDate!==void 0){const a=e.dataset.taskFollowUpDate;await $(`task-follow-up-${a}`,async()=>{await St(a,{enabled:!0,dueAt:e.value}),s.tasks=await M(),s.activity=await I()},d("tasks.followUpUpdatedToast"));return}if(e.dataset.taskFollowUpFilter!==void 0){s.taskFollowUpFilter=e.value,A();return}if(e.dataset.composeAttachments!==void 0){s.composeForm={...Oe(),...s.composeForm,attachments:[...e.files].map((a,o)=>({id:`local-${Date.now()}-${o}`,name:a.name,type:a.type||"Unknown",size:a.size}))},ua();return}if(e.dataset.triageCategoryFilter!==void 0){s.triageCategoryFilter=e.value,A();return}if(e.dataset.emailCategory){const a=e.dataset.emailCategory;await $(`category-${a}`,async()=>{await Gs(a,e.value),await Ye(a),s.tasks=await M()},"Category updated locally.")}if(e.dataset.emailAssignee){const a=e.dataset.emailAssignee;await $(`assign-${a}`,async()=>{await to(a,e.value),await Ye(a),s.tasks=await M()},"Email assignment updated locally.")}if(e.dataset.selectDraft){const a=e.dataset.selectDraft;s.selectedDraftIds=e.checked?[...new Set([...s.selectedDraftIds,a])]:s.selectedDraftIds.filter(o=>o!==a),A()}});document.addEventListener("input",t=>{const e=t.target;if(e.dataset.setting!==void 0){s.settingsForm={...je(),[e.dataset.setting]:e.value};return}if(e.dataset.composeField!==void 0){s.composeForm={...Oe(),...s.composeForm,[e.dataset.composeField]:e.value};return}if(e.dataset.ruleSearch===void 0)return;s.ruleQuery=e.value,ma();const a=document.querySelector("[data-rule-search]");a==null||a.focus(),a==null||a.setSelectionRange(s.ruleQuery.length,s.ruleQuery.length)});document.addEventListener("submit",async t=>{var i;if(t.target.matches("[data-preferences-form]")){if(t.preventDefault(),v("preferences")||v("preference-image"))return;const r=structuredClone(s.preferencesForm);await $("preferences",async()=>{const c=await ta(r);s.preferences=c,s.preferencesForm=s.tab==="preferences"?structuredClone(c):null,s.preferences.hiddenCategoryIds.some(g=>{var p;return((p=s.categories.find(u=>u.id===g))==null?void 0:p.name)===s.triageCategoryFilter})&&(s.triageCategoryFilter="all")},d("preferences.saved"));return}const e=t.target.closest("[data-task-editor]");if(e){if(t.preventDefault(),v("save-task"))return;const r=Object.fromEntries(new FormData(e)),c=(i=s.taskEditor)==null?void 0:i.id;s.taskEditor={...s.taskEditor,...r},await $("save-task",async()=>{c?await Re(c,r):await Ys(r),s.tasks=await M(),s.activity=await I(),s.taskEditor=null,s.selectedTask=null,s.taskAssigneeFilter="all",s.taskFollowUpFilter="all",Q("tasks")},d("taskWork.saved"));return}const a=t.target.closest(".assistant-form");if(!a)return;t.preventDefault();const o=a.querySelector("[data-assistant-input]"),n=o.value.trim();n&&(o.value="",await ga(n))});A();vo();
