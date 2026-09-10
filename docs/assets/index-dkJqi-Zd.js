(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function a(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(n){if(n.ep)return;n.ep=!0;const i=a(n);fetch(n.href,i)}})();/**
 * @license lucide v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xt={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ft=([t,e,a])=>{const o=document.createElementNS("http://www.w3.org/2000/svg",t);return Object.keys(e).forEach(n=>{o.setAttribute(n,String(e[n]))}),a!=null&&a.length&&a.forEach(n=>{const i=ft(n);o.appendChild(i)}),o},Zt=(t,e={})=>{const a="svg",o={...Xt,...e};return ft([a,o,t])};/**
 * @license lucide v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ea=[["path",{d:"M12 8V4H8"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2"}],["path",{d:"M2 14h2"}],["path",{d:"M20 14h2"}],["path",{d:"M15 13v2"}],["path",{d:"M9 13v2"}]];/**
 * @license lucide v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ot=[["path",{d:"m9 18 6-6-6-6"}]];/**
 * @license lucide v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ta=[["circle",{cx:"12",cy:"12",r:"10"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16"}]];/**
 * @license lucide v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aa=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m16 9-5.5 5.5L8 12"}]];/**
 * @license lucide v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sa=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}]];/**
 * @license lucide v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vt=[["polyline",{points:"22 12 16 12 14 15 10 15 8 12 2 12"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"}]];/**
 * @license lucide v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oa=[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"}],["path",{d:"M9 18h6"}],["path",{d:"M10 22h4"}]];/**
 * @license lucide v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ia=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"}]];/**
 * @license lucide v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ht=[["path",{d:"M13 5h8"}],["path",{d:"M13 12h8"}],["path",{d:"M13 19h8"}],["path",{d:"m3 17 2 2 4-4"}],["path",{d:"m3 7 2 2 4-4"}]];/**
 * @license lucide v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const na=[["path",{d:"M13 5h8"}],["path",{d:"M13 12h8"}],["path",{d:"M13 19h8"}],["path",{d:"m3 17 2 2 4-4"}],["rect",{x:"3",y:"4",width:"6",height:"6",rx:"1"}]];/**
 * @license lucide v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ra=[["path",{d:"M4 5h16"}],["path",{d:"M4 12h16"}],["path",{d:"M4 19h16"}]];/**
 * @license lucide v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wt=[["path",{d:"M13 21h8"}],["path",{d:"m15 5 4 4"}],["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"}]];/**
 * @license lucide v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const la=[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]];/**
 * @license lucide v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const da=[["path",{d:"m21 21-4.34-4.34"}],["circle",{cx:"11",cy:"11",r:"8"}]];/**
 * @license lucide v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yt=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"}],["circle",{cx:"12",cy:"12",r:"3"}]];/**
 * @license lucide v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ca=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"m9 12 2 2 4-4"}]];/**
 * @license lucide v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const be=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"}],["path",{d:"M20 2v4"}],["path",{d:"M22 4h-4"}],["circle",{cx:"4",cy:"20",r:"2"}]];/**
 * @license lucide v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ua=[["path",{d:"M16 7h6v6"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17"}]];/**
 * @license lucide v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bt=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}],["circle",{cx:"9",cy:"7",r:"4"}]],qe=new Map,it=new Map;let ie="general",nt;function m(t,e,a){const o=document.createElement(t);return e&&(o.className=e),a!==void 0&&(o.textContent=a),o}function V(t){const e=Zt(t,{width:22,height:22,"aria-hidden":"true"});return e.classList.add("courio-icon"),e}function $t(t="Courio"){return t.trim().split(/\s+/).slice(0,2).map(e=>e[0]||"").join("").toUpperCase()}function ee(t,e,a){const o=m("button","btn",t);return o.type="button",e&&o.prepend(V(e)),a&&o.addEventListener("click",a),o}function pa({state:t,t:e,canAccessTab:a,navigateTo:o}){var S,T;const n=document.querySelector(".nav"),i=R=>e(`design.${R}`),r=[["dashboard","today",sa],["triage","inbox",vt],["tasks","tasks",na],["drafts","drafts",wt],["compose","compose",la],["rules","automation",ea],["admin","team",bt,"employees"],["import","connection",ia],["admin","settings",yt,"general"]];n.replaceChildren();for(const[R,_,A,C]of r){_==="automation"&&n.append(m("div","nav-label workspace-label",i("workspace")));const I=ee(i(_),A,()=>{C&&(ie=C),document.querySelector(".app").classList.remove("menu-open"),o(R)});I.dataset.destination=R,I.hidden=!a(R),I.classList.toggle("active",t.tab===R&&(!C||(C==="general"?ie==="general":ie!=="general"))),R==="compose"&&I.classList.add("nav-compose"),n.append(I)}document.querySelector(".brand-title").replaceChildren(V(be),document.createTextNode("Courio")),document.querySelector(".brand-sub").textContent=i("local");let h=document.querySelector(".workspace-topbar");h||(h=m("header","workspace-topbar"),document.querySelector("main").prepend(h));const y=ee("",ra,()=>document.querySelector(".app").classList.toggle("menu-open"));y.classList.add("mobile-menu"),y.title=i("toggleMenu"),y.setAttribute("aria-label",i("toggleMenu"));const p=ee(i("ask"),be);p.classList.add("topbar-assistant"),p.dataset.assistantToggle="",h.replaceChildren(y,p);const b=document.querySelector(".session-pill");if(b){const R=m("span","avatar",$t(t.session.name));R.setAttribute("aria-hidden","true"),b.prepend(R),h.append(b)}document.documentElement.lang=t.settings.language||"en";const k={dashboard:"today",triage:"inbox",tasks:"tasks",compose:"compose",drafts:"drafts",rules:"automation",admin:"settings",import:"connection"};document.querySelector("#pageTitle").textContent=t.tab==="dashboard"?`${i("hello")}, ${((T=(S=t.session)==null?void 0:S.name)==null?void 0:T.split(" ")[0])||"Courio"}`:i(k[t.tab]),t.tab==="dashboard"&&(document.querySelector("#pageSubtitle").textContent=i("attention"))}function ma({state:t,t:e,navigateTo:a}){const o=document.querySelector("#dashboard"),n=o.querySelectorAll(":scope > .cols-2 > .panel"),i=n[0],r=n[1];if(!i||!r)return;const u=A=>e(`design.${A}`),h=[t.emails.filter(A=>A.urgency==="High"&&A.status!=="Done").length,t.drafts.filter(A=>A.canSelectForBulkApproval).length,t.tasks.filter(A=>A.status!=="Done").length],y=[()=>a("triage",{triageFilter:"urgent"}),()=>a("drafts",{draftFilter:"needs_approval"}),()=>a("tasks")],p=m("div","overview-metrics");[ta,wt,aa].forEach((A,C)=>{const I=ee("",null,y[C]);I.className=`overview-metric metric-tone-${C}`;const fe=m("span","metric-symbol");fe.append(V(A));const ne=m("span","metric-content");ne.append(m("strong","",String(h[C])),m("span","",u(["urgent","pending","openTasks"][C]))),I.append(fe,ne,V(ot)),p.append(I)});const b=ee(u("start"),be,y[0]);b.classList.add("primary","start-review");const k=m("section","next-actions"),S=m("h2","");S.append(V(ht),document.createTextNode(u("next"))),k.append(S),["urgentAction","draftAction","taskAction"].forEach((A,C)=>{const I=ee("",null,y[C]);I.className="next-action",I.append(m("span","step-num",String(C+1)),m("span","",`${u(A)} (${h[C]})`),V(ot)),k.append(I)}),i.className="digest-surface",i.querySelector("h2").textContent=u("digest"),i.querySelector("h2").prepend(V(ua));const T=i.querySelector("table");if(T){const A=m("details","digest-details");A.append(m("summary","",u("fullDigest")),T),i.querySelector(".subtitle").after(A)}r.className="recommendations-surface",r.querySelector("h2").textContent=u("recommendations"),r.querySelector("h2").prepend(V(oa));const R=m("div","overview-summary");R.append(i,r);const _=m("div","overview-lower");_.append(k,R),o.replaceChildren(p,b,_)}function Oe({state:t,t:e},a,o){var Ze;const n=document.querySelector(`#${a}`),i=n.querySelector("table");if(!(i!=null&&i.tBodies[0]))return;const r=x=>e(`design.${x}`),u=[...i.tBodies[0].rows],h=o.records,y=m("div","queue-workspace"),p=m("div","queue-list"),b=m("article","queue-detail");b.id=`${a}Detail`;const k=m("label","queue-search");k.append(V(da));const S=m("input","");S.type="search",S.placeholder=r("search"),S.setAttribute("aria-label",r("search")),S.value=it.get(a)||"",k.append(S),p.append(k);const T=[];let R=qe.get(a);const _=a==="triage"?t.selectedEmail:a==="drafts"?t.selectedDraft:null;_&&(R=_.id),u.forEach(x=>{const se=x.querySelector(o.trigger);if(!se)return;const L=se.getAttribute(o.attribute),J=h.find(O=>O.id===L);if(!J)return;const Le=[...x.cells],ve=m("div","queue-entry"),re=m("button","queue-item");re.type="button";const he=o.title(J),Me=o.subtitle(J),Qt=m("span","avatar",$t(o.avatar(J))),Ne=m("span","queue-item-copy");Ne.append(m("strong","",he),m("span","",Me));const Yt=m("small","",o.status(J));if(Ne.append(Yt),re.append(Qt,Ne),o.checkColumn!==void 0){const O=Le[o.checkColumn].querySelector("input");O&&(O.setAttribute("aria-label",`${r(a==="drafts"?"review":"done")}: ${he}`),ve.append(O))}ve.append(re),p.append(ve);const X=m("div","record-detail"),Kt=m("h2","record-heading",he);X.append(Kt,m("p","record-subtitle",Me));const Jt=Le.at(-1),et=m("div","actions record-actions");if(et.append(...Jt.childNodes),X.append(et),a==="triage"){const O=m("div","email-body",J.body||"");X.append(O);const le=m("section","reason-surface"),oe=m("h3","",r("reason"));oe.prepend(V(be)),le.append(oe,m("p","",J.explanation||"")),X.append(le)}const tt=m("div","record-fields");Le.slice(0,-1).forEach((O,le)=>{if(o.omit.includes(le))return;const oe=m("section","record-field");oe.append(m("h3","",r(o.labels[le])));const st=m("div","record-field-value");st.append(...O.childNodes),oe.append(st),tt.append(oe)}),X.append(tt);const at=()=>{qe.set(a,L),T.forEach(O=>{O.entry.classList.toggle("active",O.id===L),O.select.setAttribute("aria-pressed",String(O.id===L))}),b.replaceChildren(X)};re.addEventListener("click",()=>{at(),a!=="tasks"&&se.click()}),T.push({id:L,entry:ve,select:re,view:X,choose:at,text:`${he} ${Me}`.toLocaleLowerCase()})});const A=m("p","empty-state",r("noMatch"));A.hidden=!0,p.append(A);const C=n.querySelector("[data-archive-filtered]"),I=C==null?void 0:C.disabled,fe=(C==null?void 0:C.title)||"",ne=()=>{var se;const x=S.value.toLocaleLowerCase().trim();it.set(a,S.value),T.forEach(L=>{L.entry.hidden=!L.text.includes(x)}),A.hidden=T.some(L=>!L.entry.hidden),C&&(C.disabled=I||!!x,C.title=x?r("clearSearch"):fe),A.hidden?T.some(L=>L.id===qe.get(a)&&!L.entry.hidden)||(se=T.find(L=>!L.entry.hidden))==null||se.choose():b.replaceChildren(m("p","empty-state",r("noMatch")))};S.addEventListener("input",ne),ne(),(Ze=T.find(x=>x.id===R&&!x.entry.hidden)||T.find(x=>!x.entry.hidden))==null||Ze.choose(),y.append(p,b),i.replaceWith(y);const Gt=y.parentElement;for(const x of[...Gt.children])(x.classList.contains("segmented")||x.classList.contains("list-toolbar"))&&k.after(x);n.classList.add("work-queue")}function ga({state:t,t:e}){var u,h,y;const a=document.querySelector("#drawerRoot > .review-drawer"),o=t.tab==="triage"&&t.selectedEmail?document.querySelector("#triageDetail"):t.tab==="drafts"&&t.selectedDraft?document.querySelector("#draftsDetail"):null;if(!a||!o)return;a.classList.add("inline-review");const n=[...a.querySelectorAll(":scope > .drawer-section")],i=[...a.querySelectorAll(":scope > .drawer-grid")],r=a.querySelector(".drawer-actions");if(t.selectedEmail){a.querySelector(".drawer-header").after(r);const b=m("details","review-extra");b.append(m("summary","",e("design.more"))),b.append(...i.slice(1),n[1],n[2],n[4]),(h=(u=n[0])==null?void 0:u.querySelector(".preview"))==null||h.classList.add("review-email-body"),(y=n[3])==null||y.classList.add("reason-surface"),a.querySelector(".drawer-note").before(b),t.summary&&n[5]&&r.after(n[5])}else{const p=m("details","review-extra");p.append(m("summary","",e("design.source")),n[0],n[1]),a.querySelector(".drawer-header").after(p),i.forEach(b=>b.classList.add("draft-summary-stats"))}o.replaceChildren(a),document.querySelector("#drawerRoot").replaceChildren()}function fa({t}){const e=document.querySelector("#compose > .grid > .panel");if(!e)return;const a=e.querySelector(":scope > .preview"),o=e.querySelector(":scope > .drawer-section"),n=e.querySelector(":scope > .actions"),i=e.querySelector(".form-grid > .preview"),r=e.querySelector(".panel-title > div");if(r==null||r.remove(),o){const u=m("details","compose-metadata");u.append(m("summary","",t("compose.attachmentMetadata")),o),i&&u.append(i),n.before(u)}a&&(a.classList.add("compose-safety"),e.append(a))}function va({state:t,t:e}){const a=document.querySelector("#admin"),o=a.querySelector(":scope > .grid");if(!o)return;const n=[...o.children];if(n.length!==5)return;const i=["general","safety","employees","categories","activity"],r=m("div","settings-workspace"),u=m("nav","settings-nav");u.setAttribute("aria-label",e("design.settings"));const h=m("div","settings-content"),y=b=>{ie=b,n.forEach((k,S)=>{k.hidden=i[S]!==b}),u.querySelectorAll("button").forEach(k=>k.classList.toggle("active",k.dataset.settingsSection===b))};i.forEach((b,k)=>{const S=ee(e(`design.${b}`),[yt,ca,bt,vt,ht][k],()=>y(b));S.dataset.settingsSection=b,u.append(S),n[k].classList.add("settings-surface"),h.append(n[k])}),r.append(u,h),a.replaceChildren(r),y(ie);const p=n[0].querySelector("[data-reset-demo]");if(p){const b=m("section","settings-reset"),k=m("h3","",e("design.reset"));b.append(k,p),n[0].append(b)}}function ha(t){const{state:e}=t;nt==="admin"&&e.tab!=="admin"&&(ie="general"),nt=e.tab,pa(t),ma(t),Oe(t,"triage",{records:e.emails,trigger:"[data-review-email]",attribute:"data-review-email",title:a=>a.subject,subtitle:a=>a.sender,avatar:a=>a.sender,status:a=>`${a.category} · ${a.workflowLabel||a.status}`,omit:[0,1],labels:["subject","sender","category","assigned","workflow","status"]}),Oe(t,"drafts",{records:e.drafts,trigger:"[data-review-draft]",attribute:"data-review-draft",checkColumn:0,title:a=>a.title,subtitle:a=>a.source,avatar:a=>a.source,status:a=>a.statusLabel,omit:[0,1],labels:["review","subject","source","risk","status"]}),Oe(t,"tasks",{records:e.tasks,trigger:"[data-review-task]",attribute:"data-review-task",checkColumn:0,title:a=>a.title,subtitle:a=>{var o;return((o=a.assignedEmployee)==null?void 0:o.name)||t.t("tasks.unassigned")},avatar:a=>{var o;return((o=a.assignedEmployee)==null?void 0:o.name)||a.title},status:a=>`${a.priority} · ${a.status}`,omit:[0],labels:["done","details","priority","assigned","source","notes"]}),ga(t),va(t),fa(t)}const rt={en:{today:"Today",inbox:"Inbox",tasks:"Tasks",drafts:"Drafts",compose:"New message",automation:"Automation",team:"Team & categories",connection:"Connection",settings:"Settings",workspace:"Workspace",ask:"Ask Courio...",hello:"Hello",attention:"Here is what needs your attention today.",urgent:"urgent emails",pending:"drafts awaiting approval",openTasks:"tasks to complete",start:"Start reviewing",next:"Next actions",urgentAction:"Review urgent messages",draftAction:"Review drafts awaiting approval",taskAction:"Complete assigned tasks",digest:"Morning digest",recommendations:"Recommendations",fullDigest:"View full digest",general:"General",employees:"Team",categories:"Categories",activity:"Activity",safety:"Demo safeguards",reset:"Reset demo data",search:"Search this list...",noMatch:"No items match your search.",select:"Select an item to review its details.",review:"Review",summary:"Courio summary",reason:"Why this priority?",noSend:"Approval makes a draft ready for human send. This demo never sends email.",local:"Local demo",details:"Details",close:"Close",more:"More details",edit:"Review and edit",saved:"Saved drafts",account:"Demo account",itemCount:"items",filters:"Filters",status:"Status",source:"Source",subject:"Subject",sender:"Sender",category:"Category",assigned:"Assigned to",workflow:"Workflow",risk:"Risk",notes:"Notes",priority:"Priority",done:"Complete",toggleMenu:"Toggle navigation",clearSearch:"Clear the list search before removing filtered emails."},fr:{today:"Aujourd'hui",inbox:"Boîte de réception",tasks:"Tâches",drafts:"Brouillons",compose:"Nouveau message",automation:"Automatisation",team:"Équipe et catégories",connection:"Connexion",settings:"Paramètres",workspace:"Espace de travail",ask:"Demander à Courio...",hello:"Bonjour",attention:"Voici ce qui demande votre attention aujourd'hui.",urgent:"courriels urgents",pending:"brouillons à approuver",openTasks:"tâches à compléter",start:"Commencer la révision",next:"Prochaines actions",urgentAction:"Examiner les messages urgents",draftAction:"Réviser les brouillons en attente",taskAction:"Compléter les tâches assignées",digest:"Résumé du matin",recommendations:"Recommandations",fullDigest:"Voir le résumé complet",general:"Général",employees:"Équipe",categories:"Catégories",activity:"Activité",safety:"Garanties de la démo",reset:"Réinitialiser les données de démonstration",search:"Rechercher dans cette liste...",noMatch:"Aucun élément ne correspond à votre recherche.",select:"Sélectionnez un élément pour consulter ses détails.",review:"Réviser",summary:"Résumé par Courio",reason:"Pourquoi cette priorité?",noSend:"L'approbation prépare un brouillon pour un envoi humain. Cette démo n'envoie jamais de courriel.",local:"Démo locale",details:"Détails",close:"Fermer",more:"Plus de détails",edit:"Réviser et modifier",saved:"Brouillons enregistrés",account:"Compte de démonstration",itemCount:"éléments",filters:"Filtres",status:"Statut",source:"Source",subject:"Objet",sender:"Expéditeur",category:"Catégorie",assigned:"Assigné à",workflow:"Flux de travail",risk:"Risque",notes:"Notes",priority:"Priorité",done:"Terminer",toggleMenu:"Afficher ou masquer la navigation",clearSearch:"Effacez la recherche avant de retirer les courriels filtrés."}},kt={en:{design:rt.en,brand:{subtitle:"Email assistant for small businesses",asideNote:"Courio uses fake local mailbox data in this prototype and suggests actions. It never sends email or modifies a real mailbox.",previewMode:"Preview mode enabled"},nav:{groups:{home:"Home",work:"Work",automation:"Automation",workspace:"Workspace"},dashboard:"Overview",dashboardSmall:"Today",triage:"Triage",triageSmall:"Inbox",tasks:"Tasks",tasksSmall:"Priority",compose:"Compose",composeSmall:"Local draft",drafts:"Drafts",draftsSmall:"Approval",rules:"Rules",rulesSmall:"Preview",import:"Setup preview",importSmall:"Microsoft 365",admin:"Admin",adminSmall:"Settings"},pages:{dashboard:["Overview","A local workflow preview for email triage, summaries, routing suggestions, and draft preparation."],import:["Setup preview","Preview how a future Microsoft 365 connection could import mailbox structure and workflow patterns."],triage:["Inbox triage","Review AI-classified messages before any action is taken."],tasks:["Action Center","Turn important local inbox items into a priority work list."],compose:["Compose","Create a fake/local message draft without sending anything."],rules:["Rules","Approve or adjust local rule previews. They do not affect a real mailbox."],drafts:["Drafts","Review prepared replies and mark them ready for a person to send."],admin:["Admin","Manage local workspace preferences and preview future integration safeguards."]},admin:{workspaceSettings:"Workspace settings",prototype:"Prototype",companyName:"Company name",language:"Language / Langue",mode:"Mode",escalationRecipient:"Escalation recipient",saveSettings:"Save settings",saving:"Saving...",resetDemoData:"Reset Demo Data",resetting:"Resetting...",safetyPreview:"Safety preview",prototypeBehavior:"Prototype behavior",savedLanguage:"Saved language",languageNote:"Language changes apply after saving. Internal workflow values stay stable."},auth:{demoOnly:"Demo login",title:"Choose a demo account",subtitle:"Use a premade local account to preview what an owner or employee would see.",safetyNote:"This is a local role switcher for the prototype, not real authentication or security.",logout:"Switch account",loginToast:"Demo account opened locally.",logoutToast:"Demo account closed locally."},triage:{inboxControl:"Inbox control",categoryFilter:"Category filter",allCategories:"All categories",emptyUrgent:"No urgent emails. You are caught up on high-priority work.",emptyInvoices:"No invoice emails are waiting for review.",emptyCategory:"No emails match this category filter.",emptyAll:"No emails are available in this local demo.",remove:"Remove",removing:"Removing...",removeFiltered:"Remove filtered",removeFilteredDisabled:"No removable emails in the current view.",removeConfirmTitle:"Remove this email from the demo inbox?",removeConfirmMessage:"This only hides the fake/local demo email. Nothing is deleted from a real mailbox:",removeFilteredConfirmTitle:"Remove filtered emails from the demo inbox?",removeFilteredConfirmMessage:"This only hides fake/local demo emails. Number selected:",removeSuccess:"Email removed from the demo inbox locally."},tasks:{title:"Priority tasks",subtitle:"Generated from the local demo inbox",empty:"No tasks yet. New local inbox items will appear here as work to review.",done:"Done",task:"Task",priority:"Priority",source:"Source email",notes:"Notes",followUp:"Follow-up",followUpDate:"Follow-up date",reminderOn:"Reminder on",reminderOff:"Add reminder",noReminder:"No follow-up scheduled",scheduled:"Scheduled locally",overdue:"Overdue",followUpFilter:"Follow-up filter",allFollowUps:"All follow-ups",scheduledFollowUps:"Scheduled",overdueFollowUps:"Overdue",followUpScheduledToast:"Local follow-up scheduled.",followUpRemovedToast:"Local follow-up removed.",followUpUpdatedToast:"Follow-up date updated locally.",assignedTo:"Assigned to",assigneeFilter:"Assignee filter",allAssignees:"All assignees",unassigned:"Unassigned",employeeScope:"Employee demo view: only tasks assigned to this account are shown.",notePlaceholder:"Add a local note",reviewEmail:"Review email",saveNote:"Save note",saving:"Saving...",noteSaved:"Task note saved locally.",completedToast:"Task checked off locally.",reopenedToast:"Task reopened locally.",openTasks:"Open tasks",openCaption:"From fake/local inbox items",highPriority:"High priority",highCaption:"Review these first",completed:"Completed",completedCaption:"Checked off in this browser",assignedToast:"Task assignment updated locally.",latestActivity:"Latest activity",viewHistory:"History",historyTitle:"Task history",historyFallback:"Task updated",noHistory:"No activity yet for this local task.",noNotes:"No notes yet.",historyNote:"This history is fake/local and helps show who touched the workflow in this browser.",localTask:"Local task",overdueCaption:"Needs follow-up now",noOverdueCaption:"No overdue reminders"},compose:{title:"Compose message",subtitle:"Fake/local only",safetyNote:"This composer does not connect to Gmail, Outlook, or any real mailbox. Saving creates a local draft only.",newMessage:"New message",to:"To",cc:"Cc",subject:"Subject",body:"Message body",attachments:"Attachments",attachmentNote:"Attachments are metadata only in this demo. File contents are not uploaded or stored.",attachmentMetadata:"Attachment metadata",noAttachments:"No attachments selected.",saveDraft:"Save local draft",saving:"Saving...",printPdf:"Print / save as PDF",neverSends:"Never sends email",savedDrafts:"Saved compose drafts",localOnly:"Local only",openDraft:"Open draft",emptyDrafts:"No compose drafts yet.",savedToast:"Compose draft saved locally. Nothing was sent.",printToast:"Use your browser print dialog to save as PDF. Nothing is sent."}},fr:{design:rt.fr,brand:{subtitle:"Assistant courriel pour PME",asideNote:"Courio utilise des données locales fictives dans ce prototype et suggère des actions. Il n'envoie jamais de courriel et ne modifie aucune vraie boîte courriel.",previewMode:"Mode aperçu activé"},nav:{groups:{home:"Accueil",work:"Travail",automation:"Automatisation",workspace:"Espace de travail"},dashboard:"Aperçu",dashboardSmall:"Aujourd'hui",triage:"Tri",triageSmall:"Boîte de réception",tasks:"Tâches",tasksSmall:"Priorité",compose:"Composer",composeSmall:"Brouillon local",drafts:"Brouillons",draftsSmall:"Approbation",rules:"Règles",rulesSmall:"Aperçu",import:"Aperçu configuration",importSmall:"Microsoft 365",admin:"Admin",adminSmall:"Paramètres"},pages:{dashboard:["Aperçu","Aperçu local des flux de tri courriel, résumés, suggestions de routage et préparation de brouillons."],import:["Aperçu configuration","Aperçu de la façon dont une future connexion Microsoft 365 pourrait importer la structure de boîte courriel et les habitudes de travail."],triage:["Tri de la boîte courriel","Révisez les messages classés par l'IA avant toute action."],tasks:["Centre d'action","Transformez les courriels locaux importants en liste de travail priorisée."],compose:["Composer","Créez un faux brouillon local sans rien envoyer."],rules:["Règles","Approuvez ou ajustez les aperçus de règles locales. Elles ne touchent aucune vraie boîte courriel."],drafts:["Brouillons","Révisez les réponses préparées et marquez-les prêtes pour un envoi humain."],admin:["Admin","Gérez les préférences locales de l'espace de travail et les protections des futures intégrations."]},admin:{workspaceSettings:"Paramètres de l'espace de travail",prototype:"Prototype",companyName:"Nom de l'entreprise",language:"Langue",mode:"Mode",escalationRecipient:"Responsable des escalades",saveSettings:"Enregistrer les paramètres",saving:"Enregistrement...",resetDemoData:"Réinitialiser la démo",resetting:"Réinitialisation...",safetyPreview:"Aperçu de sécurité",prototypeBehavior:"Comportement du prototype",savedLanguage:"Langue enregistrée",languageNote:"Les changements de langue s'appliquent après l'enregistrement. Les valeurs internes du flux restent stables."},auth:{demoOnly:"Connexion démo",title:"Choisir un compte démo",subtitle:"Utilisez un compte local préparé pour voir ce qu'un propriétaire ou un employé verrait.",safetyNote:"Ceci est un sélecteur de rôle local pour le prototype, pas une vraie authentification ni une vraie sécurité.",logout:"Changer de compte",loginToast:"Compte démo ouvert localement.",logoutToast:"Compte démo fermé localement."},triage:{inboxControl:"Contrôle de la boîte",categoryFilter:"Filtre de catégorie",allCategories:"Toutes les catégories",emptyUrgent:"Aucun courriel urgent. Les priorités élevées sont à jour.",emptyInvoices:"Aucun courriel de facture n'attend une révision.",emptyCategory:"Aucun courriel ne correspond à cette catégorie.",emptyAll:"Aucun courriel n'est disponible dans cette démo locale.",remove:"Retirer",removing:"Retrait...",removeFiltered:"Retirer la sélection",removeFilteredDisabled:"Aucun courriel retirable dans la vue actuelle.",removeConfirmTitle:"Retirer ce courriel de la boîte de démo?",removeConfirmMessage:"Cela cache seulement le faux courriel local. Rien n'est supprimé d'une vraie boîte:",removeFilteredConfirmTitle:"Retirer les courriels filtrés de la boîte de démo?",removeFilteredConfirmMessage:"Cela cache seulement des faux courriels locaux. Nombre sélectionné:",removeSuccess:"Courriel retiré localement de la boîte de démo."},tasks:{title:"Tâches prioritaires",subtitle:"Générées à partir de la boîte locale de démo",empty:"Aucune tâche pour l'instant. Les nouveaux courriels locaux apparaîtront ici comme travail à réviser.",done:"Fait",task:"Tâche",priority:"Priorité",source:"Courriel source",notes:"Notes",followUp:"Suivi",followUpDate:"Date de suivi",reminderOn:"Rappel actif",reminderOff:"Ajouter un rappel",noReminder:"Aucun suivi planifié",scheduled:"Planifié localement",overdue:"En retard",followUpFilter:"Filtre de suivi",allFollowUps:"Tous les suivis",scheduledFollowUps:"Planifiés",overdueFollowUps:"En retard",followUpScheduledToast:"Suivi local planifié.",followUpRemovedToast:"Suivi local retiré.",followUpUpdatedToast:"Date de suivi mise à jour localement.",assignedTo:"Assigné à",assigneeFilter:"Filtre par responsable",allAssignees:"Tous les responsables",unassigned:"Non assigné",employeeScope:"Vue employé démo : seules les tâches assignées à ce compte sont affichées.",notePlaceholder:"Ajouter une note locale",reviewEmail:"Réviser le courriel",saveNote:"Enregistrer la note",saving:"Enregistrement...",noteSaved:"Note de tâche enregistrée localement.",completedToast:"Tâche cochée localement.",reopenedToast:"Tâche rouverte localement.",openTasks:"Tâches ouvertes",openCaption:"Depuis les faux courriels locaux",highPriority:"Priorité élevée",highCaption:"À réviser en premier",completed:"Terminées",completedCaption:"Cochées dans ce navigateur",assignedToast:"Assignation de tâche mise à jour localement.",latestActivity:"Activité récente",viewHistory:"Historique",historyTitle:"Historique de la tâche",historyFallback:"Tâche mise à jour",noHistory:"Aucune activité pour cette tâche locale.",noNotes:"Aucune note pour l'instant.",historyNote:"Cet historique est faux/local et montre qui a touché au flux dans ce navigateur.",localTask:"Tâche locale",overdueCaption:"Suivi requis maintenant",noOverdueCaption:"Aucun rappel en retard"},compose:{title:"Composer un message",subtitle:"Faux/local seulement",safetyNote:"Ce compositeur ne se connecte pas à Gmail, Outlook ni à une vraie boîte courriel. L'enregistrement crée seulement un brouillon local.",newMessage:"Nouveau message",to:"À",cc:"Cc",subject:"Objet",body:"Corps du message",attachments:"Pièces jointes",attachmentNote:"Les pièces jointes sont seulement des métadonnées dans cette démo. Le contenu des fichiers n'est pas téléversé ni stocké.",attachmentMetadata:"Métadonnées des pièces jointes",noAttachments:"Aucune pièce jointe sélectionnée.",saveDraft:"Enregistrer le brouillon local",saving:"Enregistrement...",printPdf:"Imprimer / enregistrer en PDF",neverSends:"N'envoie jamais de courriel",savedDrafts:"Brouillons composés enregistrés",localOnly:"Local seulement",openDraft:"Ouvrir le brouillon",emptyDrafts:"Aucun brouillon composé pour l'instant.",savedToast:"Brouillon composé enregistré localement. Rien n'a été envoyé.",printToast:"Utilisez la fenêtre d'impression du navigateur pour enregistrer en PDF. Rien n'est envoyé."}}};function Ae(t){return t==="fr"?"fr":"en"}function St(t){const e=kt[Ae(t)];return function(o){return o.split(".").reduce((n,i)=>n==null?void 0:n[i],e)||o}}function wa(t,e){const a=kt[Ae(e)];return a.pages[t]||a.pages.dashboard}function l(t=""){return String(t).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function W(t=[]){return t.map(e=>l(e)).join(", ")}const ya=["Triage","Urgent emails","Drafts needing approval","Invoices","Generate digest","Create invoice rule","Reset demo data"];function ba({assistantOpen:t,assistantMessages:e,assistantBusy:a}){const o=e.length?e:[{id:"assistant-loading",role:"assistant",text:"Loading assistant history..."}];return`
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
            ${ya.map(n=>`
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
  `}const $a=[{id:"email-1",subject:"Very unhappy about no response",sender:"Maya Chen",senderEmail:"maya@northstar-retail.ca",body:"I have followed up twice and still have not received an answer about the service issue from last week. We need someone senior to respond today.",category:"Client complaint",urgency:"High",confidence:94,suggestedAction:"Escalate to owner",requiresDraft:!0,assignedTo:"emp-1",explanation:"Courio flagged this because the client mentions repeated follow-ups, no response, and asks for senior attention today.",thread:["Client followed up twice about an unanswered service issue.","The last message uses negative sentiment and asks for owner attention."],summary:"Client is frustrated by delayed response. Recommend owner review today.",draft:"Hi, thank you for the follow-up. I'm sorry this has taken longer than expected. I am escalating this now and will make sure you receive a clear update today."},{id:"email-2",subject:"Invoice #1844 payment status",sender:"Alex Rivera",senderEmail:"alex@brightline-supplies.ca",body:"Could you confirm whether invoice #1844 has been approved for payment? It was due last Friday.",category:"Accounting",urgency:"Medium",confidence:89,suggestedAction:"Route to accounting",requiresDraft:!0,assignedTo:"emp-2",explanation:"Courio saw an invoice number, payment-status wording, and a due-date reference, so it suggested accounting review.",thread:["Supplier asks whether invoice #1844 has been scheduled for payment.","Invoice appears related to recurring monthly services."],summary:"Supplier is requesting a payment-status update for invoice #1844.",draft:"Hi, thanks for checking in. We are reviewing invoice #1844 with accounting and will send a status update shortly."},{id:"email-3",subject:"Quote request for monthly bookkeeping",sender:"Priya Nair",senderEmail:"priya@lakeside-catering.ca",body:"We are looking for monthly bookkeeping help for a small catering business. We have six employees and would like pricing before the end of the week.",category:"Sales",urgency:"Medium",confidence:86,suggestedAction:"Prepare intake draft",requiresDraft:!0,assignedTo:"emp-3",explanation:"Courio matched this to sales because the sender asks for pricing, describes company needs, and appears to be a new prospect.",thread:["New prospect requested pricing for monthly bookkeeping.","They mentioned six employees and monthly receipt volume."],summary:"New lead is asking for bookkeeping pricing. Intake details are partially available.",draft:"Hi, thanks for reaching out. We'd be happy to help with monthly bookkeeping. Could you share your approximate monthly transaction count and preferred start date?"},{id:"email-4",subject:"Payroll documents attached",sender:"Tom Bennett",senderEmail:"tom@harbour-grill.ca",body:"Please find this period's payroll documents attached. Let me know if anything is missing before Thursday.",category:"Documents",urgency:"Low",confidence:91,suggestedAction:"Apply payroll category",requiresDraft:!0,assignedTo:"emp-4",explanation:"Courio detected payroll wording and an attachment reference, so it suggested categorizing this for payroll review.",thread:["Client attached payroll documents for this period.","Message should be categorized for payroll review."],summary:"Payroll documents are attached and ready to route to payroll workflow.",draft:"Hi, thanks. We received the payroll documents and will review them for the current period."},{id:"email-5",subject:"Missing March receipts",sender:"Elena Morris",senderEmail:"elena@maple-therapy.ca",body:"I thought I sent the March receipts, but I may have missed the attachment. Can you let me know what you still need?",category:"Missing documents",urgency:"Medium",confidence:88,suggestedAction:"Prepare follow-up draft",requiresDraft:!0,assignedTo:"emp-2",explanation:"Courio flagged this because the email talks about receipts and a possibly missing attachment, which usually needs a document follow-up.",thread:["Client mentions March receipts but no attachments are present.","Follow-up should request the missing files."],summary:"March receipts appear to be missing. Prepare a concise document request.",draft:"Hi, thanks for the note. It looks like the March receipts were not attached. Could you resend them when convenient?"},{id:"email-6",subject:"Can we move tomorrow's appointment?",sender:"Jordan Lee",senderEmail:"jordan@greenway-landscaping.ca",body:"Something came up with our crew schedule. Can we move tomorrow's appointment to next Tuesday afternoon?",category:"Scheduling",urgency:"Low",confidence:82,suggestedAction:"Offer available times",requiresDraft:!0,assignedTo:"emp-5",explanation:"Courio identified a scheduling change request with a proposed new time, so it suggested a simple scheduling reply.",thread:["Client asks to move an appointment from tomorrow to next Tuesday afternoon.","No urgent sentiment or billing issue detected."],summary:"Client wants to reschedule tomorrow's appointment to next Tuesday afternoon.",draft:"Hi, thanks for letting us know. Next Tuesday afternoon should work on our side. Could you confirm your preferred time window?"},{id:"email-7",subject:"Weekly partner newsletter",sender:"Service Ledger Weekly",senderEmail:"updates@serviceledger.example",body:"This week's roundup includes product tips, partner webinars, and a checklist for organizing client documents before month end.",category:"Newsletter",urgency:"Low",confidence:79,suggestedAction:"Remove from demo inbox",requiresDraft:!0,assignedTo:"",explanation:"Courio categorized this as a newsletter because it is a broadcast update with no client request, deadline, or required reply.",thread:["Marketing-style newsletter with no direct client request.","Low-priority inbox noise that can be removed from the demo inbox after review."],summary:"Newsletter-style update. No reply appears needed.",draft:"No reply needed. This local demo item can be removed from the inbox after review."}],ka=[{id:"cat-client-complaint",name:"Client complaint",description:"Escalations, unhappy clients, repeated follow-ups, and high-trust replies.",color:"urgent",active:!0,system:!0},{id:"cat-accounting",name:"Accounting",description:"Invoices, payment status, receipts, bookkeeping, and supplier questions.",color:"invoice",active:!0,system:!0},{id:"cat-sales",name:"Sales",description:"New leads, quote requests, pricing questions, and intake replies.",color:"lead",active:!0,system:!0},{id:"cat-documents",name:"Documents",description:"Attached files, payroll documents, client records, and document routing.",color:"invoice",active:!0,system:!0},{id:"cat-missing-documents",name:"Missing documents",description:"Missing attachments, receipts, files, or client documents that need follow-up.",color:"invoice",active:!0,system:!0},{id:"cat-scheduling",name:"Scheduling",description:"Appointment changes, availability, calendar coordination, and time windows.",color:"pending",active:!0,system:!0},{id:"cat-general",name:"General",description:"Messages that do not need a specialized workflow yet.",color:"default",active:!0,system:!0},{id:"cat-newsletter",name:"Newsletter",description:"Marketing emails, updates, and low-priority broadcast messages.",color:"default",active:!0,system:!1},{id:"cat-follow-up",name:"Follow-up",description:"Messages that need a reminder, next step, or later response.",color:"pending",active:!0,system:!1},{id:"cat-internal",name:"Internal",description:"Team messages, internal coordination, and company updates.",color:"lead",active:!0,system:!1},{id:"cat-vendor",name:"Vendor",description:"Supplier, partner, and vendor conversations.",color:"invoice",active:!0,system:!1}],Sa=[{id:"emp-1",name:"Nadia Patel",title:"Owner",email:"nadia@courio-demo.ca",department:"Leadership"},{id:"emp-2",name:"Marcus Roy",title:"Bookkeeper",email:"marcus@courio-demo.ca",department:"Accounting"},{id:"emp-3",name:"Sofia Tremblay",title:"Client Success Lead",email:"sofia@courio-demo.ca",department:"Sales"},{id:"emp-4",name:"Daniel Kim",title:"Payroll Specialist",email:"daniel@courio-demo.ca",department:"Payroll"},{id:"emp-5",name:"Avery Brooks",title:"Office Coordinator",email:"avery@courio-demo.ca",department:"Operations"}],Aa=[{id:"rule-1",title:"Supplier invoice routing",desc:"Suggest an accounting category and owner for supplier invoices and payment requests.",category:"Accounting",confidence:91,explanation:"Courio looks for invoice numbers, payment wording, supplier senders, and due-date language.",impact:"Matches the sample invoice messages in this local demo.",matches:["Invoice #1844 payment status","Supplier payment confirmation"],on:!0},{id:"rule-2",title:"Client escalation detection",desc:"Flag negative sentiment, repeated follow-ups, or unanswered client messages older than 48 hours.",category:"Client complaint",confidence:94,explanation:"Courio looks for negative sentiment, repeated follow-ups, and requests for owner attention.",impact:"Flags the sample high-risk client thread in this local demo.",matches:["Very unhappy about no response"],on:!0},{id:"rule-3",title:"Quote request intake",desc:"Prepare standardized draft replies for new prospects requesting pricing or availability.",category:"Sales",confidence:86,explanation:"Courio looks for pricing requests, new prospect language, and service-fit details.",impact:"Matches the sample quote request in this local demo.",matches:["Quote request for monthly bookkeeping"],on:!1},{id:"rule-4",title:"Missing document follow-up",desc:"Prepare client reminders when required documents are mentioned but not attached.",category:"Missing documents",confidence:88,explanation:"Courio looks for missing attachment wording, receipt requests, and document follow-up language.",impact:"Useful for bookkeeping, accounting, insurance, and service teams.",matches:["Missing March receipts"],on:!1}],$e="courio.mockState.v1",We="courio.assistantHistory.v1",je="courio.demoSession.v1",Ve=2,ze=[{id:"admin-owner",role:"Admin",employeeId:"emp-1",name:"Nadia Patel",title:"Owner",email:"nadia@courio-demo.ca"},{id:"employee-marcus",role:"Employee",employeeId:"emp-2",name:"Marcus Roy",title:"Bookkeeper",email:"marcus@courio-demo.ca"}],w=Object.freeze({NEEDS_REVIEW:"needs_review",READY_FOR_DRAFT:"ready_for_draft",DRAFT_GENERATED:"draft_generated",DRAFT_REVIEWED:"draft_reviewed",DRAFT_SAVED:"draft_saved",COMPLETED:"completed"}),Da=new Set(Object.values(w)),Ea={status:"Simulated setup preview",safetyNote:"No account is connected. This demo does not access real email, folders, files, or contacts.",futureNote:"In a future version, this step could connect to Gmail or Microsoft 365 after explicit approval.",mailboxes:[{id:"mailbox-main",name:"Main inbox",address:"hello@demo-company.ca",type:"Primary mailbox",volume:"142 recent threads",risk:"Mixed priority",folders:["Inbox","Needs reply","Clients","Vendors","Archive"],categories:["Client complaint","Accounting","Sales","Scheduling"],frequentSenders:["Northstar Retail","Brightline Supplies","Lakeside Catering"],sharedInboxes:["info@demo-company.ca"],recentThreads:["Very unhappy about no response","Invoice #1844 payment status","Quote request for monthly bookkeeping"]},{id:"mailbox-accounting",name:"Accounting",address:"accounting@demo-company.ca",type:"Shared mailbox",volume:"88 recent threads",risk:"Document-heavy",folders:["Invoices","Receipts","Payroll","Tax documents","Vendors"],categories:["Accounting","Documents","Missing documents"],frequentSenders:["Brightline Supplies","Harbour Grill","Maple Therapy"],sharedInboxes:["payroll@demo-company.ca"],recentThreads:["Invoice #1844 payment status","Payroll documents attached","Missing March receipts"]},{id:"mailbox-sales",name:"Sales",address:"sales@demo-company.ca",type:"Shared mailbox",volume:"53 recent threads",risk:"Revenue-sensitive",folders:["Leads","Quotes","Follow up","Won","Lost"],categories:["Sales","Scheduling"],frequentSenders:["Lakeside Catering","Greenway Landscaping","New prospects"],sharedInboxes:["quotes@demo-company.ca"],recentThreads:["Quote request for monthly bookkeeping","Can we move tomorrow's appointment?"]},{id:"mailbox-operations",name:"Operations",address:"ops@demo-company.ca",type:"Team mailbox",volume:"61 recent threads",risk:"Coordination-heavy",folders:["Scheduling","Client updates","Internal","Completed"],categories:["Scheduling","Documents","General"],frequentSenders:["Greenway Landscaping","Client coordinators","Office team"],sharedInboxes:["support@demo-company.ca"],recentThreads:["Can we move tomorrow's appointment?","Payroll documents attached"]},{id:"mailbox-shared",name:"Shared inbox",address:"info@demo-company.ca",type:"Shared intake",volume:"119 recent threads",risk:"Needs routing",folders:["Inbox","Unsorted","Clients","Prospects","Vendors"],categories:["Client complaint","Sales","Accounting","Missing documents"],frequentSenders:["Clients","Suppliers","Prospects"],sharedInboxes:["hello@demo-company.ca","support@demo-company.ca"],recentThreads:["Very unhappy about no response","Quote request for monthly bookkeeping","Missing March receipts"]}],scanItems:[{label:"Folders",detail:"Inbox structure, archive folders, and team-specific folders.",count:14},{label:"Labels/categories",detail:"Existing categories that could map to Courio triage buckets.",count:9},{label:"Frequent senders",detail:"Recurring clients, vendors, prospects, and internal senders.",count:26},{label:"Shared inboxes",detail:"Mailboxes that several employees may monitor.",count:4},{label:"Recent threads",detail:"Recent local demo examples used to preview workflow suggestions.",count:142},{label:"Suggested workflow rules",detail:"Draft local rules for routing, escalation, and follow-up.",count:5}],setupSteps:[{title:"Choose mailbox",detail:"Select the mailbox Courio should preview.",state:"Available in demo"},{title:"Scan folders and labels",detail:"Preview folders, categories, and common sender patterns.",state:"Simulated"},{title:"Detect common email types",detail:"Identify invoices, quote requests, complaints, missing documents, and scheduling.",state:"Simulated"},{title:"Suggest workflows",detail:"Create local suggested rules for review before anything is used.",state:"Simulated"},{title:"Ready for review",detail:"Move to Triage and Rules to inspect the fake suggestions.",state:"Demo only"}],workflowSuggestions:[{match:"Invoices",outcome:"Accounting review",reason:"Invoice numbers, due dates, supplier language."},{match:"Quote requests",outcome:"Sales intake",reason:"Pricing requests, service-fit details, new prospect wording."},{match:"Complaints",outcome:"Owner escalation",reason:"Repeated follow-ups, negative sentiment, senior attention requests."},{match:"Missing documents",outcome:"Follow-up draft",reason:"Receipts, attachments, payroll, or document gaps."},{match:"Scheduling",outcome:"Offer available times",reason:"Appointment changes, time windows, reschedule language."}]},z={schemaVersion:Ve,emails:$a.map(Ca),categories:structuredClone(ka),employees:structuredClone(Sa),rules:structuredClone(Aa),drafts:[],tasks:[],composeDrafts:[],settings:{productName:"Courio",mode:"Simple",language:"en",companyName:"Demo PME Inc.",defaultMode:"Observation only",escalationRecipient:"owner@company.ca",confidenceThreshold:"80",observationDays:"7",allowLowRiskBulkApproval:"Yes",approvalRequired:!0,autoSend:!1},completedActions:[],deletedEmployeeIds:[],deletedRuleIds:[]},c=Ta();let de=Oa(),j=qa();const v=(t=550)=>new Promise(e=>setTimeout(e,t));function f(t){return structuredClone(t)}function Ca(t){const{status:e,workflowStatus:a,reviewed:o,...n}=f(t);return{...n,archivedAt:n.archivedAt||null,archiveReason:n.archiveReason||"",workflowState:w.NEEDS_REVIEW}}function Ta(){try{const t=window.localStorage.getItem($e);if(!t)return f(z);const e=JSON.parse(t),a=Ra(e);return window.localStorage.setItem($e,JSON.stringify(a)),a}catch{return f(z)}}function Ra(t){const e=t.deletedEmployeeIds||[],a=t.deletedRuleIds||[],o=xa(t.categories),n=we(z.emails,t.emails),i=Array.isArray(t.drafts)?t.drafts:[],r=Ia(i),u=n.map(p=>{const b=r.find(A=>(A.emailId||A.id)===p.id),k=Fa(p,b,t.schemaVersion),{status:S,workflowStatus:T,reviewed:R,..._}=p;return{..._,archivedAt:_.archivedAt||null,archiveReason:_.archiveReason||"",workflowState:k}}),h=new Map(u.map(p=>[p.id,p])),y=r.filter(p=>La(p,h.get(p.emailId||p.id))).map(Ma);return{...f(z),...t,schemaVersion:Ve,emails:u,categories:o,employees:we(z.employees.filter(p=>!e.includes(p.id)),(t.employees||[]).filter(p=>!e.includes(p.id))),rules:we(z.rules.filter(p=>!a.includes(p.id)),(t.rules||[]).filter(p=>!a.includes(p.id))),drafts:y,tasks:Array.isArray(t.tasks)?t.tasks.map(ke):[],composeDrafts:Array.isArray(t.composeDrafts)?t.composeDrafts.map(At):[],settings:{...z.settings,...t.settings||{}},completedActions:Array.isArray(t.completedActions)?t.completedActions:[],deletedEmployeeIds:e,deletedRuleIds:a}}function xa(t=[]){return we(z.categories,t).map(a=>({description:"",color:"default",active:!0,system:!1,...a}))}function Fa(t,e,a){return a>=Ve&&Da.has(t.workflowState)?t.workflowState:t.status==="Done"||t.workflowStatus==="Completed"||(e==null?void 0:e.status)==="Ready for human send"||(e==null?void 0:e.status)==="Approved"?w.COMPLETED:(e==null?void 0:e.status)==="Saved"?w.DRAFT_SAVED:e!=null&&e.reviewed?w.DRAFT_REVIEWED:e!=null&&e.generated||(e==null?void 0:e.status)==="Generated"?w.DRAFT_GENERATED:t.reviewed||t.reviewedAt?w.READY_FOR_DRAFT:w.NEEDS_REVIEW}function Ia(t){const e=new Map;for(const a of t){const o=(a==null?void 0:a.emailId)||(a==null?void 0:a.id);if(!o)continue;const n=e.get(o);(!n||lt(a)>lt(n))&&e.set(o,a)}return[...e.values()]}function lt(t){return({"Needs approval":0,Generated:1,Saved:3,"Ready for human send":4,Approved:4}[t.status]||0)+(t.generated?1:0)+(t.reviewed?1:0)}function La(t,e){return!t||!e?!1:!!(t.generated||t.reviewed||["Generated","Saved","Ready for human send","Approved"].includes(t.status)||[w.DRAFT_GENERATED,w.DRAFT_REVIEWED,w.DRAFT_SAVED,w.COMPLETED].includes(e.workflowState))}function Ma(t){const{generated:e,reviewed:a,status:o,...n}=f(t);return{...n,emailId:t.emailId||t.id}}function ke(t){const e=t.followUp&&typeof t.followUp=="object"?t.followUp:{},a=!!(e.enabled&&e.dueAt);return{id:t.id||`task-${t.emailId||Date.now()}`,emailId:t.emailId||"",title:t.title||"Review email",description:t.description||"",priority:t.priority||"Medium",category:t.category||"General",assignedTo:t.assignedTo||"",status:t.status==="Done"?"Done":"Open",notes:t.notes||"",followUp:{enabled:a,dueAt:a?e.dueAt:null,createdAt:a?e.createdAt||t.createdAt||new Date().toISOString():null,updatedAt:a?e.updatedAt||t.updatedAt||new Date().toISOString():null},history:Array.isArray(t.history)?t.history:[],createdAt:t.createdAt||new Date().toISOString(),updatedAt:t.updatedAt||t.createdAt||new Date().toISOString(),completedAt:t.completedAt||null}}function At(t){var e,a,o,n;return{id:t.id||`compose-${Date.now()}`,to:((e=t.to)==null?void 0:e.trim())||"",cc:((a=t.cc)==null?void 0:a.trim())||"",subject:((o=t.subject)==null?void 0:o.trim())||"",body:((n=t.body)==null?void 0:n.trim())||"",attachments:Array.isArray(t.attachments)?t.attachments.map(i=>({id:i.id||`attachment-${Date.now()}`,name:i.name||"Local attachment",type:i.type||"Unknown",size:Number(i.size)||0})):[],status:"Draft",createdAt:t.createdAt||new Date().toISOString(),updatedAt:t.updatedAt||t.createdAt||new Date().toISOString()}}function Na(t){const e=At(t);if(!e.to)throw new Error("Recipient is required.");if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.to))throw new Error("Enter a valid recipient email.");if(!e.subject)throw new Error("Subject is required.");if(!e.body)throw new Error("Message body is required.");return e}function we(t,e=[]){const a=Array.isArray(e)?e:[],o=t.map(i=>{const r=a.find(u=>u.id===i.id);return r?{...i,...r}:f(i)}),n=a.filter(i=>!t.some(r=>r.id===i.id));return[...o,...n.map(f)]}function E(){window.localStorage.setItem($e,JSON.stringify(c))}function qa(){try{const t=window.localStorage.getItem(je);if(!t)return null;const e=JSON.parse(t);return ze.find(a=>a.id===e.id)||null}catch{return null}}function Dt(){if(!j){window.localStorage.removeItem(je);return}window.localStorage.setItem(je,JSON.stringify({id:j.id}))}function ae(){return(j==null?void 0:j.role)==="Employee"}function De(){return(j==null?void 0:j.employeeId)||""}function q(){if(j&&j.role!=="Admin")throw new Error("This demo account cannot access admin-only actions.")}function Oa(){try{const t=window.localStorage.getItem(We);return t?JSON.parse(t):[{id:"assistant-welcome",role:"assistant",text:"Hi, I can help with urgent emails, invoices, drafts, digest updates, rules, and explanations."}]}catch{return[{id:"assistant-welcome",role:"assistant",text:"Hi, I can help with urgent emails, invoices, drafts, digest updates, rules, and explanations."}]}}function ja(){window.localStorage.setItem(We,JSON.stringify(de))}function Ua(){return c.settings.allowLowRiskBulkApproval!=="No"}function Pa(){return!0}function N(t){return t.workflowState===w.COMPLETED}function Ge(t){const e=c.emails.find(a=>a.id===(t.emailId||t.id));return(e==null?void 0:e.workflowState)===w.DRAFT_SAVED}function Se(t){return{[w.NEEDS_REVIEW]:"Review required",[w.READY_FOR_DRAFT]:"Draft needed",[w.DRAFT_GENERATED]:"Draft generated",[w.DRAFT_REVIEWED]:"Draft in review",[w.DRAFT_SAVED]:"Draft saved",[w.COMPLETED]:"Completed"}[t]||"Review required"}function Et(t){return{[w.DRAFT_GENERATED]:"Generated",[w.DRAFT_REVIEWED]:"In review",[w.DRAFT_SAVED]:"Saved",[w.COMPLETED]:"Ready for human send"}[t]||"No draft"}function H(t,e={}){c.completedActions.unshift({id:`action-${Date.now()}-${Math.random().toString(16).slice(2)}`,type:t,completedAt:new Date().toISOString(),...e}),c.completedActions=c.completedActions.slice(0,50)}function Ct(t,e){t.workflowState=w.COMPLETED,e.approvedAt=new Date().toISOString(),e.updatedAt=e.approvedAt,H("draft-approved",{emailId:t.id,draftId:e.id,label:`Draft approved and workflow completed: ${t.subject}`})}function Y(t){const e=c.emails.find(r=>r.id===(t.emailId||t.id)),a=N(e||{})?"Done":"Open",o=N(e||{}),n=(e==null?void 0:e.workflowState)===w.DRAFT_SAVED,i=Et(e==null?void 0:e.workflowState);return{...t,sourceEmailStatus:a,sourceWorkflowStatus:Se(e==null?void 0:e.workflowState),approvalState:o?"ready_for_human_send":(e==null?void 0:e.workflowState)===w.DRAFT_SAVED?"saved":(e==null?void 0:e.workflowState)===w.DRAFT_GENERATED?"generated":"needs_review",status:i,statusLabel:i,isReadyForHumanSend:o,canApprove:n,canSelectForBulkApproval:n,approvalBlocker:n?"":o?"Source email is completed.":"Review and save this draft before approving."}}function ge(t){const e=Ce(t.id),a=Pa(),o=!!e,n=N(t),i=n,r=t.workflowState!==w.NEEDS_REVIEW;return{...t,archived:!!t.archivedAt,reviewed:r,status:i?"Done":"Open",workflowStatus:Se(t.workflowState),requiresDraft:a,draftId:o&&(e==null?void 0:e.id)||null,draftStatus:o?Et(t.workflowState):null,draftStatusLabel:o?Y(e).statusLabel:"No draft",draftReadyForHumanSend:n,workflowLabel:Se(t.workflowState),canComplete:!1,completeActionLabel:"Completed",draftActionLabel:i?"View approved draft":o?"Edit draft":"Generate draft",canGenerateDraft:t.workflowState===w.READY_FOR_DRAFT&&!o,canOpenDraft:o,canArchive:!o||i,archiveBlocker:o&&!i?"Finish the active draft before removing this email from the demo inbox.":"",completionBlocker:r?i?"This workflow is complete.":o?"Open the existing draft to continue this workflow.":"":"Review this email before generating a draft."}}function Tt(t){return t.urgency==="High"||t.category===M("cat-client-complaint","Client complaint")?"High":t.urgency==="Low"?"Low":"Medium"}function dt(t){return{High:0,Medium:1,Low:2}[t.priority]??3}function _a(t){const e=new Date().toISOString();return ke({id:`task-${t.id}`,emailId:t.id,title:t.suggestedAction||`Review ${t.subject}`,description:t.summary||t.explanation||t.subject,priority:Tt(t),category:t.category,assignedTo:t.assignedTo||"",status:"Open",notes:"",history:[{at:e,label:"Task created from local inbox item"}],createdAt:e,updatedAt:e})}function Qe(){const t=new Set(c.tasks.map(e=>e.emailId));Te().filter(e=>!N(e)).forEach(e=>{t.has(e.id)||c.tasks.push(_a(e))}),c.tasks=c.tasks.map(e=>{const a=c.emails.find(o=>o.id===e.emailId);return ke(a?{...e,title:e.title||a.suggestedAction,description:e.description||a.summary||a.explanation,priority:e.priority||Tt(a),assignedTo:e.assignedTo||a.assignedTo||"",category:a.category}:e)})}function Ye(t){var u;const e=c.emails.find(h=>h.id===t.emailId),a=c.employees.find(h=>h.id===t.assignedTo)||null,o=(u=t.followUp)!=null&&u.enabled?t.followUp.dueAt:null,n=Array.isArray(t.history)?t.history:[],i=n.at(-1)||null,r=!!(o&&t.status!=="Done"&&new Date(o).getTime()<Date.now());return{...t,followUp:{...t.followUp,status:o?r?"overdue":"scheduled":"not_scheduled",overdue:r},historySummary:{count:n.length,latestLabel:(i==null?void 0:i.label)||"",latestAt:(i==null?void 0:i.at)||null},assignedEmployee:a?f(a):null,sourceEmail:e?ge(e):null,hiddenFromInbox:!!(e!=null&&e.archivedAt),sourceCompleted:e?N(e):!1}}function P(t){const e=c.emails.find(a=>a.id===t);if(!e)throw new Error("Email not found.");return e}function Ee(t){const e=c.drafts.find(a=>a.id===t);if(!e)throw new Error("Draft not found.");return e}function Ce(t){return c.drafts.find(e=>(e.emailId||e.id)===t)}function Te(){return c.emails.filter(t=>t.archivedAt?!1:ae()?t.assignedTo===De():!0)}function ue(t){const e=c.employees.find(a=>a.id===t);if(!e)throw new Error("Employee not found.");return e}function Rt(t){const e=c.categories.find(a=>a.id===t);if(!e)throw new Error("Category not found.");return e}function xt(t){return c.categories.find(e=>e.name.toLowerCase()===String(t||"").trim().toLowerCase())}function Ft(t,e=null){var n,i;const a={name:((n=t.name)==null?void 0:n.trim())||"",description:((i=t.description)==null?void 0:i.trim())||"",color:t.color||"default"};if(!a.name)throw new Error("Category name is required.");if(c.categories.find(r=>r.id!==e&&r.name.toLowerCase()===a.name.toLowerCase()))throw new Error("A category with this name already exists.");return a}function Ha(t,e){c.emails.forEach(a=>{a.category===t&&(a.category=e)}),c.rules.forEach(a=>{a.category===t&&(a.category=e)})}function M(t,e){var a;return((a=c.categories.find(o=>o.id===t))==null?void 0:a.name)||e}function Ba(){const t={"Client complaint":M("cat-client-complaint","Client complaint"),Accounting:M("cat-accounting","Accounting"),Sales:M("cat-sales","Sales"),Documents:M("cat-documents","Documents"),"Missing documents":M("cat-missing-documents","Missing documents"),Scheduling:M("cat-scheduling","Scheduling"),General:M("cat-general","General")},e=f(Ea);return e.mailboxes=e.mailboxes.map(a=>({...a,categories:a.categories.map(o=>t[o]||o)})),e}function It(t,e=null){var n,i,r,u;const a={name:((n=t.name)==null?void 0:n.trim())||"",email:((i=t.email)==null?void 0:i.trim().toLowerCase())||"",title:((r=t.title)==null?void 0:r.trim())||"",department:((u=t.department)==null?void 0:u.trim())||""};if(!a.name)throw new Error("Employee name is required.");if(!a.email)throw new Error("Employee email is required.");if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(a.email))throw new Error("Enter a valid employee email address.");if(!a.title)throw new Error("Employee title is required.");if(!a.department)throw new Error("Employee department is required.");if(c.employees.find(h=>{var y;return h.id!==e&&((y=h.email)==null?void 0:y.trim().toLowerCase())===a.email}))throw new Error("An employee with this email already exists.");return a}function Wa(){const t=Te().filter(r=>!N(r)),e=c.drafts.map(Y),a=e.filter(r=>r.isReadyForHumanSend).length,o=e.filter(r=>r.canSelectForBulkApproval).length,n=r=>t.filter(u=>u.category===r),i=t.filter(r=>r.urgency==="High");return{generatedAt:new Date().toLocaleTimeString([],{hour:"numeric",minute:"2-digit"}),headline:`${t.length} open emails need review. ${i.length} are urgent and ${o} drafts need approval.`,urgentItems:i.map(r=>r.subject),draftsAwaitingApproval:o,readyForHumanSend:a,invoices:n(M("cat-accounting","Accounting")).map(r=>r.subject),missingDocuments:n(M("cat-missing-documents","Missing documents")).map(r=>r.subject),quoteRequests:n(M("cat-sales","Sales")).map(r=>r.subject),clientComplaints:n(M("cat-client-complaint","Client complaint")).map(r=>r.subject),recommendedActions:[i.length?"Review urgent client items first.":"No urgent client escalations are open.",o?"Review drafts before marking them ready for human send.":"No drafts are waiting for approval.","Keep observation mode on while this remains a demo."]}}function Va(){const t=c.rules.find(a=>/invoice/i.test(`${a.title} ${a.desc}`));if(t)return t.on=!0,E(),t;const e={id:`rule-${Date.now()}`,title:"Invoice intake assistant",desc:"Flag invoice messages, payment questions, due dates, and supplier follow-ups for accounting review.",category:M("cat-accounting","Accounting"),confidence:84,explanation:"Courio would look for invoice numbers, balance-due wording, supplier names, and payment timing.",impact:"Created locally from the assistant chat. It only previews matches in this prototype.",matches:c.emails.filter(a=>a.category===M("cat-accounting","Accounting")).map(a=>a.subject),on:!0};return c.rules.push(e),E(),e}function za(t){return t.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9\s]/g," ").replace(/\s+/g," ")}function Ga(t,e){const a=Array.from({length:e.length+1},(o,n)=>n);for(let o=1;o<=t.length;o+=1){let n=a[0];a[0]=o;for(let i=1;i<=e.length;i+=1){const r=a[i],u=t[o-1]===e[i-1]?0:1;a[i]=Math.min(a[i]+1,a[i-1]+1,n+u),n=r}}return a[e.length]}function Qa(t,e){if(t.length!==e.length)return!1;const a=[];for(let o=0;o<t.length;o+=1)t[o]!==e[o]&&a.push(o);return a.length===2&&a[1]===a[0]+1&&t[a[0]]===e[a[1]]&&t[a[1]]===e[a[0]]}function K(t,e){const a=t.split(" ").filter(Boolean);return e.some(o=>o.includes(" ")?t.includes(o):a.some(n=>{if(n===o||Qa(n,o))return!0;const i=o.length>=7?2:o.length>=4?1:0;return i>0&&Math.abs(n.length-o.length)<=i&&Ga(n,o)<=i}))}function Ya(t,e={}){const a=za(t),o=Te(),n=o.filter(p=>!N(p)&&p.urgency==="High").length,i=M("cat-accounting","Accounting"),r=o.filter(p=>!N(p)&&p.category===i).length,u=c.drafts.map(Y).filter(p=>p.canSelectForBulkApproval).length,h=K(a,["invoice","invoices","accounting"]),y=K(a,["rule","rules","create rule"]);if(K(a,["urgent","urgency"]))return{text:`${n} urgent emails are open. I switched Triage to urgent items.`,action:{type:"show_triage",filter:"urgent"}};if(K(a,["triage","inbox","show inbox","open inbox"]))return{text:"I opened the full Triage inbox.",action:{type:"show_triage",filter:"all"}};if(h&&y)return{text:"Invoice rule is ready in observation mode. It is still fake/local and will not touch a mailbox.",action:{type:"show_rule",ruleId:Va().id}};if(h)return{text:`${r} invoice-related emails are open. I switched Triage to ${i}.`,action:{type:"show_triage",filter:"invoices"}};if(K(a,["draft","drafts","approval","approve"]))return{text:`${u} saved drafts need human approval. I opened the Drafts queue.`,action:{type:"show_drafts",filter:"needs_approval"}};if(K(a,["digest","morning digest"]))return{text:"I regenerated the morning digest from local demo data.",action:{type:"generate_digest"}};if(K(a,["explain","explanation","why"])){if(!e.selectedEmailId)return{text:"Open an email in Triage first, then ask me to explain it. I will show the flagged reason."};const p=ge(P(e.selectedEmailId));return{text:`Courio flagged "${p.subject}" because: ${p.explanation}`,action:{type:"explain_email",emailId:p.id}}}return K(a,["reset","restart"])?{text:"I can reset the fake demo data now. The page will reload so defaults come back clean.",action:{type:"reset_demo_data"}}:{text:"I did not catch that. Try one of the command hints below."}}async function B(){return await v(),f(Te().map(ge))}async function Ka(){return await v(150),f(ze)}async function Lt(){return await v(150),f(j)}async function Ja(t){await v(250);const e=ze.find(a=>a.id===t);if(!e)throw new Error("Demo account not found.");return j=e,Dt(),f(j)}async function Xa(){return await v(150),j=null,Dt(),null}async function U(){return await v(350),Qe(),E(),f(c.tasks.map(Ye).filter(t=>!t.hiddenFromInbox).filter(t=>!ae()||t.assignedTo===De()).sort((t,e)=>dt(t)-dt(e)||(t.status==="Done")-(e.status==="Done")||t.createdAt.localeCompare(e.createdAt)))}async function Ue(){return await v(350),f(c.employees)}async function Mt(){return await v(300),f(c.categories)}async function Z(){return await v(400),ae()?[]:f(c.rules)}async function Nt(){return await v(350),Ba()}async function Q(){return await v(700),f(Wa())}async function te(){return await v(400),ae()?[]:f(c.drafts.map(Y))}async function Ke(){return await v(350),f([...c.composeDrafts].sort((t,e)=>e.updatedAt.localeCompare(t.updatedAt)))}async function Za(t){await v(500);const e=Na(t),a=c.composeDrafts.findIndex(i=>i.id===e.id),o=new Date().toISOString(),n={...e,id:a===-1?`compose-${Date.now()}`:e.id,createdAt:a===-1?o:c.composeDrafts[a].createdAt,updatedAt:o};return a===-1?c.composeDrafts.unshift(n):c.composeDrafts[a]=n,H("compose-draft-saved",{draftId:n.id,label:`Compose draft saved: ${n.subject}`}),E(),f(n)}async function pe(t){await v(450);const e=Ee(t),a=P(e.emailId||e.id);return a.workflowState===w.DRAFT_GENERATED&&(a.workflowState=w.DRAFT_REVIEWED,e.reviewedAt=new Date().toISOString(),e.updatedAt=e.reviewedAt,E()),f({...Y(e),sourceEmail:{id:a.id,subject:a.subject,sender:a.sender,senderEmail:a.senderEmail,body:a.body,suggestedAction:a.suggestedAction,confidence:a.confidence,urgency:a.urgency,status:N(a)?"Done":"Open",workflowStatus:Se(a.workflowState)}})}async function es(t){await v(350),P(t);const e=Ce(t);return e?pe(e.id):null}async function ts(){return await v(250),f(c.settings)}async function as(t){return await v(450),q(),c.settings={...c.settings,...t,language:t.language?t.language==="fr"?"fr":"en":c.settings.language,approvalRequired:!0,autoSend:!1},E(),f(c.settings)}async function ss(){return await v(350),q(),window.localStorage.removeItem($e),window.localStorage.removeItem(We),f(z)}async function qt(t){await v();const e=P(t);return e.workflowState===w.NEEDS_REVIEW&&(e.workflowState=w.READY_FOR_DRAFT,e.reviewedAt=new Date().toISOString(),E()),f({...ge(e),messages:e.thread})}async function os(t){return await v(700),P(t).summary}async function is(t){await v(750);const e=P(t);if(N(e))throw new Error("This email is done. Reopen it before creating or changing a draft.");if(e.workflowState===w.NEEDS_REVIEW)throw new Error("Review this email before generating a draft.");const a=Ce(t);if(a)return f(Y(a));if(e.workflowState!==w.READY_FOR_DRAFT)throw new Error("This workflow is not ready to generate a new draft.");const o=new Date().toISOString(),n={id:`draft-${t}`,emailId:t,title:e.suggestedAction,source:e.subject,text:e.draft,confidence:e.confidence,risk:e.urgency==="High"?"High":"Low",createdAt:o,updatedAt:o};return c.drafts.push(n),e.workflowState=w.DRAFT_GENERATED,E(),f(Y(n))}async function ns(t,e){if(await v(),!e||e.trim().length<10)throw new Error("Draft is too short to save.");const a=Ee(t),o=P(a.emailId||a.id);if(N(o))throw new Error("This email is done. Reopen it before editing the draft.");if(![w.DRAFT_REVIEWED,w.DRAFT_SAVED].includes(o.workflowState))throw new Error("Review this draft before saving it.");return a.text=e,a.updatedAt=new Date().toISOString(),o.workflowState=w.DRAFT_SAVED,E(),f(Y(a))}async function rs(t){await v(),q();const e=Ee(t),a=P(e.emailId||e.id);if(N(a))throw new Error("This email is done. Reopen it before changing draft approval.");if(!Ge(e))throw new Error("Review this draft before approving.");return Ct(a,e),E(),f(Y(e))}async function Ot(t){if(await v(650),q(),!t.length)throw new Error("Select at least one draft first.");const e=t.map(o=>{const n=Ee(o),i=P(n.emailId||n.id);return{draft:n,email:i}}).filter(({email:o})=>!N(o));if(!e.length)throw new Error("No selected drafts could be approved.");if(e.some(({draft:o})=>!Ge(o)))throw new Error("Review this draft before approving.");const a=[];for(const{draft:o,email:n}of e)Ct(n,o),a.push(o.id);return E(),f({approved:a})}async function ls(){if(await v(700),q(),!Ua())throw new Error("Low-risk bulk approval is disabled by workspace settings.");const t=c.drafts.filter(e=>e.risk!=="High").filter(Ge).filter(e=>!N(P(e.emailId||e.id))).map(e=>e.id);if(!t.length)throw new Error("No low-risk drafts are awaiting approval.");return Ot(t)}async function ct(t){await v(450),q();const e=c.rules.find(a=>a.id===t);if(!e)throw new Error("Rule not found.");return e.on=!e.on,E(),f(e)}async function ds(t,e){var o,n;await v(500),q();const a=c.rules.find(i=>i.id===t);if(!a)throw new Error("Rule not found.");if(!((o=e.title)!=null&&o.trim()))throw new Error("Rule name is required.");if(!((n=e.desc)!=null&&n.trim()))throw new Error("Rule description is required.");if(e.category&&!xt(e.category))throw new Error("Choose an existing category before saving.");return a.title=e.title.trim(),a.desc=e.desc.trim(),a.category=e.category||a.category,E(),f(a)}async function cs(t){await v(450),q();const e=c.rules.findIndex(o=>o.id===t);if(e===-1)throw new Error("Rule not found.");const[a]=c.rules.splice(e,1);return c.deletedRuleIds=[...new Set([...c.deletedRuleIds||[],t])],H("rule-deleted",{ruleId:a.id,label:`Rule deleted: ${a.title}`}),E(),f(a)}async function us(t,e){if(await v(400),!e)throw new Error("Choose a category before saving.");if(!xt(e))throw new Error("Choose an existing category before saving.");const a=P(t);return a.category=e,E(),f(a)}async function ps(t,e="Removed from demo inbox"){await v(500);const a=[...new Set((t||[]).filter(Boolean))];if(!a.length)throw new Error("Choose at least one email to remove from the demo inbox.");const o=new Date().toISOString(),n=a.map(i=>{const r=P(i),u=Ce(r.id),h=N(r);if(u&&!h)throw new Error("Finish active drafts before removing those emails from the demo inbox.");return r.archivedAt=o,r.archiveReason=e,r});return H("emails-archived",{emailIds:n.map(i=>i.id),label:`${n.length} email${n.length===1?"":"s"} removed from the demo inbox`}),E(),f(n.map(ge))}async function Pe(t,e={}){await v(400),Qe();const a=c.tasks.find(i=>i.id===t);if(!a)throw new Error("Task not found.");if(ae()&&a.assignedTo!==De())throw new Error("This demo employee can only update assigned tasks.");const o=a.status==="Done",n=new Date().toISOString();if(e.assignedTo!==void 0){if(ae())throw new Error("Only the demo admin can reassign tasks.");e.assignedTo&&ue(e.assignedTo),a.assignedTo=e.assignedTo,a.history=[...a.history||[],{at:n,label:e.assignedTo?`Assigned to ${ue(e.assignedTo).name}`:"Returned to Unassigned"}]}return e.notes!==void 0&&(a.notes=String(e.notes).trim()),e.status!==void 0&&(a.status=e.status==="Done"?"Done":"Open",a.completedAt=a.status==="Done"?a.completedAt||n:null,a.history=[...a.history||[],{at:n,label:a.status==="Done"?"Marked complete":"Reopened"}]),a.updatedAt=n,!o&&a.status==="Done"&&H("task-completed",{taskId:a.id,emailId:a.emailId,label:`Task completed: ${a.title}`}),E(),f(Ye(a))}async function ut(t,e={}){var r;await v(400),Qe();const a=c.tasks.find(u=>u.id===t);if(!a)throw new Error("Task not found.");if(ae()&&a.assignedTo!==De())throw new Error("This demo employee can only update assigned tasks.");const o=!!e.enabled,n=new Date().toISOString();let i=null;if(o){const u=e.dueAt?new Date(`${e.dueAt}T17:00:00`):new Date(Date.now()+2592e5);if(Number.isNaN(u.getTime()))throw new Error("Choose a valid follow-up date.");i=u.toISOString()}return a.followUp={enabled:o,dueAt:i,createdAt:o?((r=a.followUp)==null?void 0:r.createdAt)||n:null,updatedAt:o?n:null},a.updatedAt=n,a.history=[...a.history||[],{at:n,label:o?`Follow-up scheduled for ${i.slice(0,10)}`:"Follow-up reminder removed"}],H(o?"follow-up-scheduled":"follow-up-removed",{taskId:a.id,emailId:a.emailId,dueAt:i,label:o?`Follow-up scheduled: ${a.title}`:`Follow-up removed: ${a.title}`}),E(),f(Ye(a))}async function ms(t){await v(450),q();const e=Ft(t),a={id:`cat-${Date.now()}`,...e,active:!0,system:!1};return c.categories.push(a),H("category-added",{categoryId:a.id,label:`Category added: ${a.name}`}),E(),f(a)}async function gs(t,e){await v(450),q();const a=Rt(t),o=Ft(e,t),n=a.name;return Object.assign(a,o),n!==a.name&&Ha(n,a.name),H("category-updated",{categoryId:a.id,label:`Category updated: ${a.name}`}),E(),f(a)}async function fs(t){await v(400),q();const e=Rt(t);return e.active=!e.active,H("category-toggled",{categoryId:e.id,label:`${e.active?"Category restored":"Category archived"}: ${e.name}`}),E(),f(e)}async function vs(t,e){await v(400),q(),e&&ue(e);const a=P(t);a.assignedTo=e;const o=c.tasks.find(n=>n.emailId===t);return o&&(o.assignedTo=e,o.updatedAt=new Date().toISOString(),o.history=[...o.history||[],{at:o.updatedAt,label:e?`Assigned from email to ${ue(e).name}`:"Returned to Unassigned from email"}]),E(),f(a)}async function hs(t){await v(500),q();const e=It(t),a={id:`employee-${Date.now()}`,...e};return c.employees.push(a),H("employee-added",{employeeId:a.id,label:`Employee added: ${a.name}`}),E(),f(a)}async function ws(t,e){await v(500),q();const a=ue(t),o=It(e,t);return Object.assign(a,o),H("employee-updated",{employeeId:a.id,label:`Employee updated: ${a.name}`}),E(),f(a)}async function ys(t){await v(500),q();const e=c.employees.findIndex(n=>n.id===t);if(e===-1)throw new Error("Employee not found.");const[a]=c.employees.splice(e,1);c.deletedEmployeeIds=[...new Set([...c.deletedEmployeeIds||[],t])];let o=0;return c.emails.forEach(n=>{n.assignedTo===t&&(n.assignedTo="",o+=1)}),c.tasks.forEach(n=>{n.assignedTo===t&&(n.assignedTo="",n.updatedAt=new Date().toISOString(),n.history=[...n.history||[],{at:n.updatedAt,label:"Assigned employee was removed; task returned to Unassigned"}])}),H("employee-deleted",{employeeId:a.id,label:`Employee removed: ${a.name}. ${o} assigned emails returned to Unassigned.`}),E(),f(a)}async function F(){return await v(250),f(c.completedActions)}async function bs(){return await v(150),f(de)}async function $s(t,e={}){if(await v(500),!(t!=null&&t.trim()))throw new Error("Type a command first.");const a={id:`user-${Date.now()}`,role:"user",text:t.trim()},o=Ya(t,e),n={id:`assistant-${Date.now()}`,role:"assistant",text:o.text};return de=[...de,a,n].slice(-24),ja(),f({messages:de,action:o.action||null})}const ks=document.querySelector("#app"),jt=new Set(["dashboard","import","triage","tasks","compose","rules","drafts","admin"]),s={tab:"dashboard",demoAccounts:[],session:null,emails:[],categories:[],employees:[],rules:[],drafts:[],tasks:[],composeDrafts:[],settings:{companyName:"Demo PME Inc.",language:"en",mode:"Simple",defaultMode:"Observation only",escalationRecipient:"owner@company.ca",approvalRequired:!0,autoSend:!1},settingsForm:null,loading:{emails:!0,rules:!0,drafts:!0},busy:{},selectedEmail:null,selectedCategory:null,selectedDraft:null,selectedRule:null,selectedEmployee:null,selectedTask:null,selectedDraftIds:[],confirmDialog:null,digest:null,triageFilter:"all",triageCategoryFilter:"all",taskAssigneeFilter:"all",taskFollowUpFilter:"all",draftFilter:"all",ruleQuery:"",assistantOpen:!1,assistantMessages:[],activity:[],setupPreview:null,selectedSetupMailboxId:"",composeForm:{id:"new",to:"",cc:"",subject:"",body:"",attachments:[]},summary:"",showExplanation:!1};ks.innerHTML=`
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
    </main>
  </div>
  <div id="drawerRoot"></div>
  <div id="modalRoot"></div>
  <div id="assistantRoot"></div>
  <div id="authRoot"></div>
  <div class="toast" id="toast"></div>
`;function pt(t,e){s.busy[t]=e,D()}async function $(t,e,a){try{pt(t,!0),await e(),a&&me(a)}catch(o){me(o.message||"Something went wrong in the mock workflow.",!0)}finally{pt(t,!1)}}function g(t){return!!s.busy[t]}function me(t,e=!1){const a=document.querySelector("#toast");a.textContent=t,a.classList.toggle("error",e),a.classList.add("show"),window.clearTimeout(a.dataset.timer),a.dataset.timer=window.setTimeout(()=>a.classList.remove("show"),2400)}function ye(){var t;return((t=s.session)==null?void 0:t.role)==="Admin"}function Je(){var t;return((t=s.session)==null?void 0:t.role)==="Employee"}function Ss(){return s.session?Je()?new Set(["triage","tasks","compose"]):jt:new Set([])}function ce(t){return Ss().has(t)}function G(t,e={}){if(!jt.has(t)||!ce(t))throw new Error("That Courio section is unavailable.");const a=s.tab;a==="admin"&&t!=="admin"&&(s.settingsForm=null),t==="admin"&&a!=="admin"&&(s.settingsForm={...s.settings}),s.tab=t,e.triageFilter&&(s.triageFilter=e.triageFilter),e.draftFilter&&(s.draftFilter=e.draftFilter),e.closeDrawers!==!1&&(s.selectedEmail=null,s.selectedCategory=null,s.selectedDraft=null,s.selectedRule=null,s.selectedEmployee=null,s.summary="",s.showExplanation=!1),D()}async function _e(t=(e=>(e=s.selectedEmail)==null?void 0:e.id)()){if(s.emails=await B(),t){const a=s.emails.find(o=>o.id===t);s.selectedEmail=a?{...a,messages:a.thread}:null}}async function mt(t=(e=>(e=s.selectedCategory)==null?void 0:e.id)()){const[a,o,n,i,r,u,h]=await Promise.all([Mt(),B(),Z(),U(),Q(),Nt(),F()]);s.categories=a,s.emails=o,s.rules=n,s.tasks=i,s.digest=r,s.setupPreview=u,s.activity=h,s.selectedCategory=t&&a.find(y=>y.id===t)||null}async function gt(){const[t,e,a,o,n,i,r]=await Promise.all([Lt(),B(),U(),te(),Ke(),Q(),F()]);s.session=t,s.emails=e,s.tasks=a,s.drafts=o,s.composeDrafts=n,s.digest=i,s.activity=r,s.selectedEmail=null,s.selectedDraft=null,s.selectedRule=null,s.selectedEmployee=null,s.selectedCategory=null}function As(t){return!!(t!=null&&t.isReadyForHumanSend)}function Xe(){return s.settings.mode==="Advanced"}function Ut(t=""){const e=s.categories.filter(o=>o.active),a=t?s.categories.find(o=>o.name===t):null;return a&&!e.some(o=>o.id===a.id)?[...e,a]:e}function Ds(t,e){var a;return((a=s.categories.find(o=>o.id===t))==null?void 0:a.name)||e}function Es(){const t=new Map;return s.categories.forEach(e=>{e.active&&t.set(e.name,e)}),s.emails.forEach(e=>{t.has(e.category)||t.set(e.category,{id:`current-${e.category}`,name:e.category,active:!0})}),[...t.values()].sort((e,a)=>e.name.localeCompare(a.name))}function Pt(){const t=Ds("cat-accounting","Accounting");return s.emails.filter(e=>s.triageCategoryFilter!=="all"&&e.category!==s.triageCategoryFilter?!1:s.triageFilter==="urgent"?e.status!=="Done"&&e.urgency==="High":s.triageFilter==="invoices"?e.status!=="Done"&&e.category===t:!0)}function Re(){return{id:"new",to:"",cc:"",subject:"",body:"",attachments:[]}}function Cs(t=0){return t<1024?`${t} B`:t<1024*1024?`${Math.round(t/1024)} KB`:`${(t/(1024*1024)).toFixed(1)} MB`}function _t(){return s.settings.allowLowRiskBulkApproval!=="No"}function xe(){return s.settingsForm||{...s.settings}}function Ts(){return xe().mode==="Advanced"}function Fe(){return Ae(s.settings.language)}function d(t){return St(Fe())(t)}function Ht(t){if(!t)return"";const e=new Date(t);return Number.isNaN(e.getTime())?"":e.toLocaleString()}function He(t){if(!t)return"";const e=new Date(t);return Number.isNaN(e.getTime())?"":e.toLocaleDateString()}function Rs(){const t=St(Fe());document.querySelectorAll("[data-copy]").forEach(e=>{e.textContent=t(e.dataset.copy)})}async function xs(){var t;try{const[e,a,o,n,i,r,u,h,y,p,b,k,S,T]=await Promise.all([Ka(),Lt(),B(),Mt(),Ue(),Z(),te(),U(),Ke(),ts(),Q(),bs(),F(),Nt()]);s.demoAccounts=e,s.session=a,s.emails=o,s.categories=n,s.employees=i,s.rules=r,s.drafts=u,s.tasks=h,s.composeDrafts=y,s.settings={...s.settings,...p},s.settingsForm=null,s.digest=b,s.assistantMessages=k,s.activity=S,s.setupPreview=T,s.selectedSetupMailboxId=((t=T.mailboxes[0])==null?void 0:t.id)||"",s.session&&!ce(s.tab)&&(s.tab=Je()?"tasks":"dashboard")}catch(e){me(e.message||"Could not load mock data.",!0)}finally{s.loading.emails=!1,s.loading.rules=!1,s.loading.drafts=!1,D()}}function D(){s.session&&!ce(s.tab)&&(s.tab=Je()?"tasks":"dashboard");const t=wa(s.tab,Fe());Rs(),document.querySelector("#pageTitle").textContent=t[0],document.querySelector("#pageSubtitle").textContent=t[1],document.querySelectorAll(".section").forEach(e=>{e.classList.toggle("active",e.id===s.tab)}),document.querySelectorAll(".nav button").forEach(e=>{e.hidden=!ce(e.dataset.tab),e.classList.toggle("active",e.dataset.tab===s.tab)}),Fs(),Bt(),Is(),Be(),Wt(),Vt(),Bs(),zs(),Ls(),Ms(),Ws(),Ns(),ha({state:s,t:d,canAccessTab:ce,navigateTo:G})}function Fs(){const t=s.emails.filter(a=>a.status!=="Done").length,e=s.digest;document.querySelector("#dashboard").innerHTML=`
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
        <div class="value">${s.drafts.filter(As).length||0}</div>
        <div class="caption">Human approval still required to send</div>
      </div>
    </div>
    <div class="grid cols-2 stack-md">
      <div class="panel">
        <div class="panel-title"><h2>Morning digest</h2><span>${e?`Generated ${l(e.generatedAt)}`:"Loading..."}</span></div>
        <p class="subtitle">${e?l(e.headline):"Preparing a local demo digest from mock emails and drafts."}</p>
        ${e?`
          <table class="table stack-sm">
            <tr><td>Urgent items</td><td>${e.urgentItems.length?W(e.urgentItems):"None"}</td></tr>
            <tr><td>Invoices</td><td>${e.invoices.length?W(e.invoices):"None"}</td></tr>
            <tr><td>Missing documents</td><td>${e.missingDocuments.length?W(e.missingDocuments):"None"}</td></tr>
            <tr><td>Quote requests</td><td>${e.quoteRequests.length?W(e.quoteRequests):"None"}</td></tr>
            <tr><td>Client complaints</td><td>${e.clientComplaints.length?W(e.clientComplaints):"None"}</td></tr>
          </table>
        `:""}
        <div class="actions stack-sm">
          <button class="btn primary" data-action="digest" ${g("digest")?"disabled":""}>${g("digest")?"Regenerating...":"Regenerate digest"}</button>
          <button class="btn subtle" data-tab-target="triage">Review triage</button>
        </div>
      </div>
      <div class="panel">
        <div class="panel-title"><h2>Recommended next actions</h2><span>${(e==null?void 0:e.recommendedActions.length)||0} items</span></div>
        <table class="table">
          ${((e==null?void 0:e.recommendedActions)||["Digest is loading."]).map(a=>`<tr><td><span class="badge lead">Action</span></td><td>${l(a)}</td></tr>`).join("")}
          ${Xe()?`<tr><td><span class="badge invoice">Advanced</span></td><td>${s.rules.filter(a=>a.on).length} rules are currently enabled.</td></tr>`:""}
        </table>
      </div>
    </div>
  `}function Bt(){const t=s.setupPreview;if(!t){document.querySelector("#import").innerHTML='<div class="loading">Loading simulated setup preview...</div>';return}const e=t.mailboxes.find(a=>a.id===s.selectedSetupMailboxId)||t.mailboxes[0];document.querySelector("#import").innerHTML=`
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
          <tr><td>Folders</td><td>${W(e.folders)}</td></tr>
          <tr><td>Labels/categories</td><td>${W(e.categories)}</td></tr>
          <tr><td>Frequent senders</td><td>${W(e.frequentSenders)}</td></tr>
          <tr><td>Shared inboxes</td><td>${W(e.sharedInboxes)}</td></tr>
          <tr><td>Recent threads</td><td>${W(e.recentThreads)}</td></tr>
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
  `}function Is(){const t=Object.fromEntries(s.employees.map(r=>[r.id,r])),e=Es(),a=Pt(),o=a.filter(r=>r.canArchive),n=s.triageCategoryFilter==="all"?d("triage.allCategories"):s.triageCategoryFilter,i=s.loading.emails?'<div class="loading">Loading mock inbox...</div>':a.length===0?`<div class="empty-state">${s.triageFilter==="urgent"?d("triage.emptyUrgent"):s.triageFilter==="invoices"?d("triage.emptyInvoices"):s.triageCategoryFilter!=="all"?d("triage.emptyCategory"):d("triage.emptyAll")}</div>`:`<table class="table">
        <thead><tr><th>Subject</th><th>Sender</th><th>Category</th><th>Assigned</th><th>Workflow</th><th>Status</th><th></th></tr></thead>
        <tbody>
          ${a.map(r=>{var u;return`
            <tr>
              <td>${l(r.subject)}</td>
              <td>${l(r.sender)}<br><small>${l(r.senderEmail||"")}</small></td>
              <td>
                <span class="badge ${Ie(r.category)}">${l(r.category)}</span><br>
                <small>${l(r.urgency||"Medium")} urgency - ${r.confidence||80}% confidence</small>
                <small class="triage-reason" title="${l(r.explanation||"")}">Why: ${l(r.explanation||"Matched the current local category rules.")}</small>
              </td>
              <td>${l(((u=t[r.assignedTo])==null?void 0:u.name)||"Unassigned")}</td>
              <td>${l(r.workflowLabel||"Not started")}</td>
              <td><span class="badge ${r.status==="Done"?"done":""}">${l(r.status)}</span></td>
              <td class="actions">
                <button class="btn subtle" data-review-email="${r.id}" ${g(`review-${r.id}`)?"disabled":""}>${g(`review-${r.id}`)?"Opening...":"Review"}</button>
                <button class="btn subtle" data-archive-email="${r.id}" ${!r.canArchive||g(`archive-${r.id}`)?`disabled title="${l(r.archiveBlocker||"Remove this fake/local email from the demo inbox.")}"`:""}>${g(`archive-${r.id}`)?d("triage.removing"):d("triage.remove")}</button>
                ${r.status==="Done"?'<span class="status-text">Complete</span>':'<span class="status-text" title="Generate, review, save, and approve a draft to complete this workflow.">Draft required</span>'}
              </td>
            </tr>
          `}).join("")}
        </tbody>
      </table>`;document.querySelector("#triage").innerHTML=`
    <div class="panel">
      <div class="panel-title"><h2>Inbox triage</h2><span>${d("triage.inboxControl")}</span></div>
      <div class="segmented below-sm">
        ${[["all","All inbox"],["urgent","Urgent"],["invoices","Invoices"]].map(([r,u])=>`<button class="${s.triageFilter===r?"active":""}" data-triage-filter="${r}">${u}</button>`).join("")}
      </div>
      <div class="list-toolbar below-sm">
        <select data-triage-category-filter aria-label="${d("triage.categoryFilter")}">
          <option value="all" ${s.triageCategoryFilter==="all"?"selected":""}>${d("triage.allCategories")}</option>
          ${e.map(r=>`<option value="${l(r.name)}" ${s.triageCategoryFilter===r.name?"selected":""}>${l(r.name)}</option>`).join("")}
        </select>
        <button class="btn subtle" data-archive-filtered ${a.length===0||o.length===0||g("archive-filtered")?`disabled title="${d("triage.removeFilteredDisabled")}"`:""}>${g("archive-filtered")?d("triage.removing"):`${d("triage.removeFiltered")} (${o.length})`}</button>
        <span class="mode">${l(n)}</span>
      </div>
      ${i}
    </div>
  `}function Be(){const t=s.tasks.filter(i=>{var h,y;const r=!ye()||s.taskAssigneeFilter==="all"||(s.taskAssigneeFilter==="unassigned"?!i.assignedTo:i.assignedTo===s.taskAssigneeFilter),u=s.taskFollowUpFilter==="all"||s.taskFollowUpFilter==="scheduled"&&((h=i.followUp)==null?void 0:h.enabled)||s.taskFollowUpFilter==="overdue"&&((y=i.followUp)==null?void 0:y.overdue);return r&&u}),e=t.filter(i=>i.status!=="Done").length,a=t.filter(i=>i.status!=="Done"&&i.priority==="High").length,o=t.filter(i=>{var r;return(r=i.followUp)==null?void 0:r.overdue}).length,n=t.length===0?`<div class="empty-state">${d("tasks.empty")}</div>`:`<table class="table">
        <thead><tr><th>${d("tasks.done")}</th><th>${d("tasks.task")}</th><th>${d("tasks.priority")}</th><th>${d("tasks.assignedTo")}</th><th>${d("tasks.source")}</th><th>${d("tasks.notes")}</th><th></th></tr></thead>
        <tbody>
          ${t.map(i=>{var r,u,h,y,p,b,k,S;return`
            <tr>
              <td><input type="checkbox" data-task-status="${i.id}" ${i.status==="Done"?"checked":""}></td>
              <td>
                <strong>${l(i.title)}</strong><br>
                <small>${l(i.description)}</small>
                ${(r=i.historySummary)!=null&&r.latestLabel?`
                  <div class="task-history-summary">
                    <span>${d("tasks.latestActivity")}:</span> ${l(i.historySummary.latestLabel)}
                    ${i.historySummary.latestAt?`<small>${l(Ht(i.historySummary.latestAt))}</small>`:""}
                  </div>
                `:""}
                <div class="follow-up-control">
                  <label class="follow-up-toggle">
                    <input type="checkbox" data-task-follow-up="${i.id}" ${(u=i.followUp)!=null&&u.enabled?"checked":""}>
                    <span>${(h=i.followUp)!=null&&h.enabled?d("tasks.reminderOn"):d("tasks.reminderOff")}</span>
                  </label>
                  ${(y=i.followUp)!=null&&y.enabled?`
                    <input class="follow-up-date" type="date" data-task-follow-up-date="${i.id}" value="${l(((p=i.followUp.dueAt)==null?void 0:p.slice(0,10))||"")}" aria-label="${d("tasks.followUpDate")}">
                    <small class="${i.followUp.overdue?"follow-up-overdue":""}">${i.followUp.overdue?d("tasks.overdue"):`${d("tasks.scheduled")} ${He(i.followUp.dueAt)}`}</small>
                  `:""}
                </div>
              </td>
              <td><span class="badge ${i.priority==="High"?"urgent":i.priority==="Low"?"done":"pending"}">${l(i.priority)}</span><br><small>${l(i.category)}</small></td>
              <td>
                ${ye()?`<select data-task-assignee="${i.id}">
                      <option value="" ${i.assignedTo?"":"selected"}>${d("tasks.unassigned")}</option>
                      ${s.employees.map(T=>`<option value="${T.id}" ${i.assignedTo===T.id?"selected":""}>${l(T.name)}</option>`).join("")}
                    </select>`:l(((b=i.assignedEmployee)==null?void 0:b.name)||d("tasks.unassigned"))}
              </td>
              <td>${l(((k=i.sourceEmail)==null?void 0:k.subject)||"Local task")}<br><small>${l(((S=i.sourceEmail)==null?void 0:S.sender)||"Demo inbox")}</small></td>
              <td><textarea data-task-note="${i.id}" placeholder="${d("tasks.notePlaceholder")}">${l(i.notes||"")}</textarea></td>
              <td class="actions">
                ${i.sourceEmail?`<button class="btn subtle" data-review-email="${i.sourceEmail.id}">${d("tasks.reviewEmail")}</button>`:""}
                <button class="btn subtle" data-review-task="${i.id}">${d("tasks.viewHistory")}</button>
                <button class="btn subtle" data-save-task-note="${i.id}" ${g(`task-note-${i.id}`)?"disabled":""}>${g(`task-note-${i.id}`)?d("tasks.saving"):d("tasks.saveNote")}</button>
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
      <div class="panel-title"><h2>${d("tasks.title")}</h2><span>${d("tasks.subtitle")}</span></div>
      ${ye()?`
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
  `}function Wt(){const t=s.composeForm||Re(),e=t.attachments.length?`<ul>${t.attachments.map(o=>`<li>${l(o.name)} <small>${l(o.type||"Unknown")} - ${Cs(o.size)}</small></li>`).join("")}</ul>`:`<div class="empty-state">${d("compose.noAttachments")}</div>`,a=s.composeDrafts.length?`<table class="table">
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
          <button class="btn primary" data-save-compose ${g("save-compose")?"disabled":""}>${g("save-compose")?d("compose.saving"):d("compose.saveDraft")}</button>
          <button class="btn subtle" data-print-compose>${d("compose.printPdf")}</button>
          <span class="mode">${d("compose.neverSends")}</span>
        </div>
      </div>
      <div class="panel">
        <div class="panel-title"><h2>${d("compose.savedDrafts")}</h2><span>${d("compose.localOnly")}</span></div>
        ${a}
      </div>
    </div>
  `}function Ls(){const t=document.querySelector("#drawerRoot");if(s.selectedCategory){Ps(t);return}if(s.selectedEmployee){_s(t);return}if(s.selectedRule){Us(t);return}if(s.selectedDraft){js(t);return}if(s.selectedTask){Hs(t);return}if(!s.selectedEmail){t.innerHTML="";return}const e=s.selectedEmail,a=e.status==="Done",o=s.employees.find(i=>i.id===e.assignedTo),n=Ut(e.category);t.innerHTML=`
    <div class="drawer-backdrop" data-close-drawer></div>
    <aside class="review-drawer" aria-label="Email review">
      <div class="drawer-header">
        <div>
          <div class="badge ${Ie(e.category)}">${l(e.category)}</div>
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
        ${ye()?`<label>Assigned employee
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
        <button class="btn primary" data-summary-email="${e.id}" ${g(`summary-${e.id}`)?"disabled":""}>${g(`summary-${e.id}`)?"Summarizing...":"Summarize"}</button>
        ${e.canOpenDraft?`<button class="btn subtle" data-open-email-draft="${e.id}" ${g(`open-email-draft-${e.id}`)?"disabled":""}>${e.draftActionLabel}</button>`:`<button class="btn subtle" data-generate-draft="${e.id}" ${!e.canGenerateDraft||g(`draft-${e.id}`)?`disabled title="${e.completionBlocker||"Draft action is unavailable."}"`:""}>${g(`draft-${e.id}`)?"Drafting...":e.draftActionLabel}</button>`}
        <button class="btn subtle" data-archive-email="${e.id}" ${!e.canArchive||g(`archive-${e.id}`)?`disabled title="${l(e.archiveBlocker||"Remove this fake/local email from the demo inbox.")}"`:""}>${g(`archive-${e.id}`)?d("triage.removing"):d("triage.remove")}</button>
        ${a?'<span class="status-text">Workflow complete</span>':'<span class="status-text">Approving the draft completes this workflow.</span>'}
      </div>
      <p class="drawer-note">This is a local prototype. Courio does not send email.</p>
    </aside>
  `}function Ms(){const t=document.querySelector("#modalRoot");if(!s.confirmDialog){t.innerHTML="";return}const e=s.confirmDialog;t.innerHTML=`
    <div class="modal-backdrop"></div>
    <div class="confirm-modal" role="dialog" aria-modal="true">
      <h2>${l(e.title)}</h2>
      <p>${l(e.message)}</p>
      <div class="actions">
        <button class="btn ${e.tone==="danger"?"danger":"primary"}" data-confirm-primary>${l(e.primaryLabel)}</button>
        <button class="btn subtle" data-confirm-cancel>Cancel</button>
      </div>
    </div>
  `}function Ns(){const t=document.querySelector("#authRoot");if(!s.session){t.innerHTML=`
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
  `}async function qs(t){const e=await is(t);s.drafts=await te(),await _e(t),s.selectedDraft=await pe(e.id),s.selectedEmail=null,s.selectedRule=null,s.selectedEmployee=null,s.selectedCategory=null}async function Os(t){var e;await rs(t),s.drafts=await te(),s.emails=await B(),s.activity=await F(),s.digest=await Q(),s.selectedDraftIds=s.selectedDraftIds.filter(a=>a!==t),((e=s.selectedDraft)==null?void 0:e.id)===t&&(s.selectedDraft=await pe(t))}function js(t){const e=s.selectedDraft,a=e.sourceEmail||{},o=a.status==="Done";t.innerHTML=`
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
            <button class="btn primary" data-save-draft="${e.id}" ${g(`save-${e.id}`)?"disabled":""}>${g(`save-${e.id}`)?"Saving...":"Save changes"}</button>
            <button class="btn success" data-approve-draft="${e.id}" ${!e.canApprove||g(`approve-${e.id}`)?`disabled title="${e.approvalBlocker||"Save the reviewed draft before approving."}"`:""}>${g(`approve-${e.id}`)?"Approving...":"Approve and complete"}</button>
          `}
        <button class="btn subtle" data-close-drawer>Close</button>
      </div>
      <p class="drawer-note">Approval completes this workflow and marks the draft ready for a person to send. Courio never sends email.</p>
    </aside>
  `}function Us(t){var o;const e=s.selectedRule,a=Ut(e.category);t.innerHTML=`
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

      ${Xe()?`<div class="drawer-section"><h3>Advanced preview</h3><div class="preview">This rule uses the current confidence threshold of ${s.settings.confidenceThreshold||80}%. No mailbox changes happen in the prototype.</div></div>`:""}

      <div class="drawer-actions">
        <button class="btn primary" data-save-rule="${e.id}" ${g(`save-rule-${e.id}`)?"disabled":""}>${g(`save-rule-${e.id}`)?"Saving...":"Save rule"}</button>
        <button class="btn danger" data-delete-rule="${e.id}">Delete rule</button>
        <button class="btn subtle" data-close-drawer>Close</button>
      </div>
    </aside>
  `}function Ps(t){const e=s.selectedCategory,a=e.id==="new",o=[["default","Default"],["urgent","Red / urgent"],["invoice","Green"],["lead","Blue"],["pending","Amber"]];t.innerHTML=`
    <div class="drawer-backdrop" data-close-drawer></div>
    <aside class="review-drawer" aria-label="${a?"Add category":"Edit category"}">
      <div class="drawer-header">
        <div>
          <div class="badge ${Ie(e.name)}">${e.active===!1?"Archived":"Active"}</div>
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
        <button class="btn primary" data-save-category="${e.id}" ${g(`save-category-${e.id}`)?"disabled":""}>${g(`save-category-${e.id}`)?"Saving...":a?"Add category":"Save changes"}</button>
        ${a?"":`<button class="btn subtle" data-toggle-category="${e.id}" ${g(`toggle-category-${e.id}`)?"disabled":""}>${e.active===!1?"Restore category":"Archive category"}</button>`}
        <button class="btn subtle" data-close-drawer>Close</button>
      </div>
      <p class="drawer-note">Archiving removes a category from new dropdown choices, but old emails and rules still display safely.</p>
    </aside>
  `}function _s(t){const e=s.selectedEmployee,a=e.id==="new";t.innerHTML=`
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
        <button class="btn primary" data-save-employee="${e.id}" ${g(`save-employee-${e.id}`)?"disabled":""}>${g(`save-employee-${e.id}`)?"Saving...":a?"Add employee":"Save changes"}</button>
        ${a?"":`<button class="btn danger" data-delete-employee="${e.id}">Remove employee</button>`}
        <button class="btn subtle" data-close-drawer>Close</button>
      </div>
      <p class="drawer-note">Employee records remain fake and local to this browser. Email addresses must be valid and unique.</p>
    </aside>
  `}function Hs(t){var n,i,r;const e=s.selectedTask,a=Array.isArray(e.history)?e.history:[],o=(n=e.followUp)!=null&&n.enabled?e.followUp.overdue?`${d("tasks.overdue")} - ${He(e.followUp.dueAt)}`:`${d("tasks.scheduled")} ${He(e.followUp.dueAt)}`:d("tasks.noReminder");t.innerHTML=`
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
        ${a.length?`<ol class="task-history-list">${a.map(u=>`
              <li>
                <strong>${l(u.label||d("tasks.historyFallback"))}</strong>
                ${u.at?`<time>${l(Ht(u.at))}</time>`:""}
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
  `}function Vt(){const t=s.ruleQuery.trim().toLowerCase(),e=s.rules.filter(o=>!t||`${o.title} ${o.desc} ${o.category}`.toLowerCase().includes(t)),a=s.loading.rules?'<div class="loading">Loading suggested rules...</div>':e.length===0?`<div class="empty-state">${t?`No rules match “${l(s.ruleQuery)}”. Clear the search to see all local rules.`:"No rules yet. Local rule suggestions will appear here."}</div>`:`<div class="grid cols-2">
        ${e.map(o=>`
          <div class="rule-card">
            <div class="rule-top">
              <div>
                <div class="rule-title">${l(o.title)}</div>
                <div class="rule-desc">${l(o.desc)}</div>
              </div>
              <button class="toggle ${o.on?"on":""}" aria-label="Toggle ${l(o.title)}" data-toggle-rule="${o.id}" ${g(`rule-${o.id}`)?"disabled":""}></button>
            </div>
            <div class="preview"><strong>Local sample preview:</strong> ${l(o.impact)}</div>
            <div class="preview"><strong>${o.confidence||80}% confidence:</strong> ${l(o.explanation||"Based on local mock patterns.")}</div>
            ${Xe()?`<div class="preview"><strong>Would match:</strong> ${W(o.matches||["No samples"])}</div>`:""}
            <div class="actions">
              ${o.on?'<span class="status-text">In observation</span>':`<button class="btn primary" data-approve-rule="${o.id}" ${g(`approve-rule-${o.id}`)?"disabled":""}>${g(`approve-rule-${o.id}`)?"Approving...":"Approve for observation"}</button>`}
              <button class="btn subtle" data-edit-rule="${o.id}" ${g(`edit-rule-${o.id}`)?"disabled":""}>${g(`edit-rule-${o.id}`)?"Opening...":"Edit"}</button>
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
  `}function Bs(){const t=s.selectedDraftIds.length,e=s.drafts.filter(i=>i.risk!=="High"&&i.canSelectForBulkApproval).length,a=!_t(),o=s.drafts.filter(i=>s.draftFilter==="needs_approval"?i.canSelectForBulkApproval:s.draftFilter==="ready"?i.isReadyForHumanSend:!0),n=s.loading.drafts?'<div class="loading">Loading draft queue...</div>':o.length===0?`<div class="empty-state">${s.draftFilter==="needs_approval"?"No drafts need approval. Reviewed drafts will appear here when they are ready.":s.draftFilter==="ready"?"No drafts are ready for human send yet.":"No drafts are available in this local demo."}</div>`:`<table class="table">
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
                <button class="btn subtle" data-review-draft="${i.id}" ${g(`review-draft-${i.id}`)?"disabled":""}>${g(`review-draft-${i.id}`)?"Opening...":"Review"}</button>
                ${i.isReadyForHumanSend?'<span class="status-text">Workflow complete</span>':`<button class="btn success" data-approve-draft="${i.id}" ${!i.canApprove||g(`approve-${i.id}`)?`disabled title="${i.approvalBlocker||"Review and save this draft first."}"`:""}>${g(`approve-${i.id}`)?"Approving...":"Approve and complete"}</button>`}
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
        <button class="btn success" data-approve-selected ${t===0||g("approve-selected")?`disabled title="${t===0?"Select at least one reviewed and saved draft.":""}"`:""}>${g("approve-selected")?"Approving...":`Approve selected (${t})`}</button>
        <button class="btn subtle" data-approve-low-risk ${a||e===0||g("approve-low-risk")?`disabled title="${a?"Enable low-risk bulk approval in Advanced workspace settings.":e===0?"No reviewed low-risk drafts are ready for approval.":""}"`:""}>${a?"Low-risk bulk approval disabled":g("approve-low-risk")?"Approving...":`Approve all low-risk (${e})`}</button>
        <span class="mode">Approval completes the workflow; nothing is sent</span>
      </div>
      ${a?'<div class="preview below-sm">Low-risk bulk approval is disabled by workspace settings.</div>':""}
      ${n}
    </div>
  `}function Ws(){const t=document.querySelector("#assistantRoot");t.innerHTML=ba({assistantOpen:s.assistantOpen,assistantMessages:s.assistantMessages,assistantBusy:g("assistant")})}async function zt(t){await $("assistant",async()=>{var a;const e=await $s(t,{selectedEmailId:((a=s.selectedEmail)==null?void 0:a.id)||null});s.assistantMessages=e.messages,await Vs(e.action)})}async function Vs(t){if(t){if(t.type==="show_triage"){G("triage",{triageFilter:t.filter||"all"});return}if(t.type==="show_drafts"){G("drafts",{draftFilter:t.filter||"all"});return}if(t.type==="generate_digest"){s.digest=await Q(),G("dashboard");return}if(t.type==="explain_email"){s.selectedEmail=await qt(t.emailId),s.selectedDraft=null,s.selectedRule=null,s.selectedEmployee=null,s.selectedCategory=null,s.summary="",s.showExplanation=!0,G("triage",{triageFilter:"all",closeDrawers:!1});return}if(t.type==="show_rule"){s.rules=await Z(),s.selectedRule=s.rules.find(e=>e.id===t.ruleId)||null,s.selectedEmail=null,s.selectedDraft=null,s.selectedEmployee=null,s.selectedCategory=null,G("rules",{closeDrawers:!1});return}t.type==="reset_demo_data"&&(s.confirmDialog={type:"reset-demo",title:"Reset demo data?",message:"This clears all local Courio changes and restores the original fake demo data.",primaryLabel:"Reset demo data",tone:"danger"},D())}}function zs(){const t=xe();document.querySelector("#admin").innerHTML=`
    <div class="grid cols-2">
      <div class="panel">
        <div class="panel-title"><h2>${d("admin.workspaceSettings")}</h2><span>${d("admin.prototype")}</span></div>
        <div class="form-grid">
          <label>${d("admin.companyName")}<input data-setting="companyName" value="${l(t.companyName||"Demo PME Inc.")}"></label>
          <label>${d("admin.language")}
            <select data-setting="language">
              ${[["en","English"],["fr","Français"]].map(([e,a])=>`<option value="${e}" ${e===Ae(t.language)?"selected":""}>${a}</option>`).join("")}
            </select>
          </label>
          <label>${d("admin.mode")}
            <select data-setting="mode">
              ${["Simple","Advanced"].map(e=>`<option ${e===t.mode?"selected":""}>${e}</option>`).join("")}
            </select>
          </label>
          <label>${d("admin.escalationRecipient")}<input data-setting="escalationRecipient" value="${l(t.escalationRecipient||"owner@company.ca")}"></label>
          ${Ts()?`
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
          <button class="btn primary" data-save-settings ${g("settings")?"disabled":""}>${g("settings")?d("admin.saving"):d("admin.saveSettings")}</button>
          <button class="btn danger" data-reset-demo ${g("reset-demo")?"disabled":""}>${g("reset-demo")?d("admin.resetting"):d("admin.resetDemoData")}</button>
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
          <tr><td>${d("admin.savedLanguage")}</td><td>${Fe()==="fr"?"Français":"English"}</td></tr>
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
                    <td><span class="badge ${Ie(e.name)}">${l(e.name)}</span>${e.system?"<br><small>System default</small>":""}</td>
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
  `}function Ie(t){const e=s.categories.find(a=>a.name===t);return e!=null&&e.color&&e.color!=="default"?e.color:t==="Urgent"||t==="Client complaint"?"urgent":t==="Accounting"||t==="Documents"||t==="Missing documents"?"invoice":t==="Sales"?"lead":""}document.addEventListener("click",async t=>{var a;const e=t.target.closest("button");if(e){if(e.dataset.assistantToggle!==void 0){s.assistantOpen=!s.assistantOpen,D();return}if(e.dataset.assistantCommand){await zt(e.dataset.assistantCommand);return}if(e.dataset.confirmCancel!==void 0){s.confirmDialog=null,D();return}if(e.dataset.confirmPrimary!==void 0){const o=s.confirmDialog;if(s.confirmDialog=null,(o==null?void 0:o.type)==="reset-demo"){await $("reset-demo",async()=>{await ss(),window.location.reload()});return}if((o==null?void 0:o.type)==="delete-rule"){await $(`delete-rule-${o.ruleId}`,async()=>{await cs(o.ruleId),s.rules=await Z(),s.activity=await F(),s.selectedRule=null},"Rule deleted locally.");return}if((o==null?void 0:o.type)==="delete-employee"){await $(`delete-employee-${o.employeeId}`,async()=>{await ys(o.employeeId),s.employees=await Ue(),s.emails=await B(),s.tasks=await U(),s.activity=await F(),s.selectedEmployee=null},"Employee removed and assigned emails returned to Unassigned.");return}if((o==null?void 0:o.type)==="archive-emails"){await $("archive-emails",async()=>{await ps(o.emailIds,o.reason),s.emails=await B(),s.tasks=await U(),s.digest=await Q(),s.activity=await F(),s.selectedEmail=null},d("triage.removeSuccess"));return}}if(e.dataset.loginAccount){await $("login-demo",async()=>{const o=await Ja(e.dataset.loginAccount);await gt(),s.tab=o.role==="Employee"?"tasks":"dashboard"},d("auth.loginToast"));return}if(e.dataset.logoutDemo!==void 0){await $("logout-demo",async()=>{await Xa(),await gt()},d("auth.logoutToast"));return}if(e.dataset.tab&&G(e.dataset.tab),e.dataset.tabTarget&&G(e.dataset.tabTarget),e.dataset.newCompose!==void 0){s.composeForm=Re(),D();return}if(e.dataset.openComposeDraft){const o=s.composeDrafts.find(n=>n.id===e.dataset.openComposeDraft);o&&(s.composeForm={...o,attachments:[...o.attachments]},G("compose",{closeDrawers:!1}));return}if(e.dataset.saveCompose!==void 0){await $("save-compose",async()=>{const o=await Za(s.composeForm);s.composeForm={...o,attachments:[...o.attachments]},s.composeDrafts=await Ke(),s.activity=await F()},d("compose.savedToast"));return}if(e.dataset.printCompose!==void 0){me(d("compose.printToast")),window.print();return}if(e.dataset.setupMailbox&&(s.selectedSetupMailboxId=e.dataset.setupMailbox,Bt()),e.dataset.triageFilter&&(s.triageFilter=e.dataset.triageFilter,D()),e.dataset.archiveEmail){const o=s.emails.find(n=>n.id===e.dataset.archiveEmail);if(!o)return;s.confirmDialog={type:"archive-emails",emailIds:[o.id],reason:"Removed from demo inbox",title:d("triage.removeConfirmTitle"),message:`${d("triage.removeConfirmMessage")} "${o.subject}"`,primaryLabel:d("triage.remove"),tone:"danger"},D();return}if(e.dataset.archiveFiltered!==void 0){const o=Pt().filter(n=>n.canArchive);if(!o.length)return;s.confirmDialog={type:"archive-emails",emailIds:o.map(n=>n.id),reason:"Bulk removed from demo inbox",title:d("triage.removeFilteredConfirmTitle"),message:`${d("triage.removeFilteredConfirmMessage")} ${o.length}`,primaryLabel:d("triage.removeFiltered"),tone:"danger"},D();return}if(e.dataset.draftFilter&&(s.draftFilter=e.dataset.draftFilter,D()),e.dataset.action==="digest"&&await $("digest",async()=>{s.digest=await Q()},"Morning digest regenerated from local demo data."),e.dataset.reviewEmail){const o=e.dataset.reviewEmail;await $(`review-${o}`,async()=>{s.selectedEmail=await qt(o),s.emails=await B(),s.selectedDraft=null,s.selectedRule=null,s.selectedEmployee=null,s.selectedCategory=null,s.selectedTask=null,s.summary="",s.showExplanation=!1},"Message thread opened.")}if(e.dataset.reviewDraft){const o=e.dataset.reviewDraft;await $(`review-draft-${o}`,async()=>{s.selectedDraft=await pe(o),s.selectedEmail=null,s.selectedRule=null,s.selectedEmployee=null,s.selectedCategory=null,s.selectedTask=null,s.summary="",s.showExplanation=!1},"Draft opened for review.")}if(e.dataset.openEmailDraft){const o=e.dataset.openEmailDraft;await $(`open-email-draft-${o}`,async()=>{s.selectedDraft=await es(o),s.selectedEmail=null,s.selectedRule=null,s.selectedEmployee=null,s.selectedCategory=null,s.selectedTask=null,s.summary="",s.showExplanation=!1},"Draft opened for editing.")}if(e.dataset.reviewTask){const o=e.dataset.reviewTask;s.selectedTask=s.tasks.find(n=>n.id===o)||null,s.selectedEmail=null,s.selectedDraft=null,s.selectedRule=null,s.selectedEmployee=null,s.selectedCategory=null,D();return}if(e.dataset.saveTaskNote){const o=e.dataset.saveTaskNote,n=((a=document.querySelector(`[data-task-note="${o}"]`))==null?void 0:a.value)||"";await $(`task-note-${o}`,async()=>{await Pe(o,{notes:n}),s.tasks=await U(),s.activity=await F()},d("tasks.noteSaved"));return}if(e.dataset.closeDrawer!==void 0&&(s.selectedEmail=null,s.selectedDraft=null,s.selectedRule=null,s.selectedEmployee=null,s.selectedCategory=null,s.selectedTask=null,s.summary="",s.showExplanation=!1,D()),e.dataset.toggleExplanation!==void 0&&(s.showExplanation=!s.showExplanation,D()),e.dataset.summaryEmail){const o=e.dataset.summaryEmail;await $(`summary-${o}`,async()=>{s.summary=await os(o)},"Thread summary generated.")}if(e.dataset.generateDraft){const o=e.dataset.generateDraft;await $(`draft-${o}`,async()=>{await qs(o)},"Draft opened. Existing edits were preserved.")}if(e.dataset.saveDraft){const o=e.dataset.saveDraft,n=document.querySelector("[data-draft-editor]");await $(`save-${o}`,async()=>{var i;await ns(o,n.value),s.drafts=await te(),s.emails=await B(),((i=s.selectedDraft)==null?void 0:i.id)===o&&(s.selectedDraft=await pe(o))},"Draft saved locally.")}if(e.dataset.toggleRule){const o=e.dataset.toggleRule;await $(`rule-${o}`,async()=>{await ct(o),s.rules=await Z()},"Rule preview state updated.")}if(e.dataset.approveRule){const o=e.dataset.approveRule;await $(`approve-rule-${o}`,async()=>{s.rules.find(i=>i.id===o).on||await ct(o),s.rules=await Z()},"Rule approved for observation mode.")}if(e.dataset.editRule){const o=e.dataset.editRule;await $(`edit-rule-${o}`,async()=>{s.selectedRule=s.rules.find(n=>n.id===o),s.selectedEmail=null,s.selectedDraft=null,s.selectedEmployee=null,s.selectedCategory=null,s.selectedTask=null},"Rule opened for local editing.")}if(e.dataset.saveRule){const o=e.dataset.saveRule,n=Object.fromEntries([...document.querySelectorAll("[data-rule-field]")].map(i=>[i.dataset.ruleField,i.value]));await $(`save-rule-${o}`,async()=>{await ds(o,n),s.rules=await Z(),s.selectedRule=s.rules.find(i=>i.id===o)},"Rule saved locally.")}if(e.dataset.deleteRule){const o=e.dataset.deleteRule,n=s.rules.find(i=>i.id===o);s.confirmDialog={type:"delete-rule",ruleId:o,title:"Delete this rule?",message:`Delete “${(n==null?void 0:n.title)||"this rule"}” from the local demo?`,primaryLabel:"Delete rule",tone:"danger"},D()}if(e.dataset.addEmployee!==void 0&&(s.selectedEmployee={id:"new",name:"",email:"",title:"",department:""},s.selectedEmail=null,s.selectedDraft=null,s.selectedRule=null,s.selectedCategory=null,D()),e.dataset.editEmployee&&(s.selectedEmployee=s.employees.find(o=>o.id===e.dataset.editEmployee)||null,s.selectedEmail=null,s.selectedDraft=null,s.selectedRule=null,s.selectedCategory=null,D()),e.dataset.saveEmployee){const o=e.dataset.saveEmployee,n=Object.fromEntries([...document.querySelectorAll("[data-employee-field]")].map(i=>[i.dataset.employeeField,i.value]));await $(`save-employee-${o}`,async()=>{const i=o==="new"?await hs(n):await ws(o,n);s.employees=await Ue(),s.tasks=await U(),s.activity=await F(),s.selectedEmployee=s.employees.find(r=>r.id===i.id)||null},o==="new"?"Employee added locally.":"Employee changes saved locally.")}if(e.dataset.deleteEmployee){const o=e.dataset.deleteEmployee,n=s.employees.find(r=>r.id===o),i=s.emails.filter(r=>r.assignedTo===o).length;s.confirmDialog={type:"delete-employee",employeeId:o,title:"Remove this employee?",message:`Remove ${(n==null?void 0:n.name)||"this employee"}? ${i} assigned email${i===1?"":"s"} will return to Unassigned.`,primaryLabel:"Remove employee",tone:"danger"},D()}if(e.dataset.addCategory!==void 0&&(s.selectedCategory={id:"new",name:"",description:"",color:"default",active:!0,system:!1},s.selectedEmail=null,s.selectedDraft=null,s.selectedRule=null,s.selectedEmployee=null,D()),e.dataset.editCategory&&(s.selectedCategory=s.categories.find(o=>o.id===e.dataset.editCategory)||null,s.selectedEmail=null,s.selectedDraft=null,s.selectedRule=null,s.selectedEmployee=null,D()),e.dataset.saveCategory){const o=e.dataset.saveCategory,n=Object.fromEntries([...document.querySelectorAll("[data-category-field]")].map(i=>[i.dataset.categoryField,i.value]));await $(`save-category-${o}`,async()=>{const i=o==="new"?await ms(n):await gs(o,n);await mt(i.id)},o==="new"?"Category added locally.":"Category changes saved locally.")}if(e.dataset.toggleCategory){const o=e.dataset.toggleCategory;await $(`toggle-category-${o}`,async()=>{const n=await fs(o);await mt(n.id)},"Category visibility updated locally.")}if(e.dataset.approveDraft){const o=e.dataset.approveDraft;await $(`approve-${o}`,async()=>{await Os(o)},"Draft approved and workflow completed. Nothing was sent.")}if(e.dataset.approveSelected!==void 0&&await $("approve-selected",async()=>{await Ot(s.selectedDraftIds),s.drafts=await te(),s.emails=await B(),s.activity=await F(),s.digest=await Q(),s.selectedDraftIds=[]},"Selected drafts approved and workflows completed. Nothing was sent."),e.dataset.approveLowRisk!==void 0){if(!_t()){me("Low-risk bulk approval is disabled by workspace settings.",!0);return}await $("approve-low-risk",async()=>{await ls(),s.drafts=await te(),s.emails=await B(),s.activity=await F(),s.digest=await Q(),s.selectedDraftIds=[]},"Low-risk drafts approved and workflows completed. Nothing was sent.")}if(e.dataset.saveSettings!==void 0){const o=Object.fromEntries([...document.querySelectorAll("[data-setting]")].map(n=>[n.dataset.setting,n.value]));await $("settings",async()=>{s.settings=await as(o),s.settingsForm={...s.settings}},"Settings saved locally.")}e.dataset.resetDemo!==void 0&&(s.confirmDialog={type:"reset-demo",title:"Reset demo data?",message:"This clears all local Courio changes and restores the original fake demo data.",primaryLabel:"Reset demo data",tone:"danger"},D())}});document.addEventListener("change",async t=>{const e=t.target;if(e.dataset.setting!==void 0){s.settingsForm={...xe(),[e.dataset.setting]:e.value},e.dataset.setting==="mode"&&D();return}if(e.dataset.taskStatus){const a=e.dataset.taskStatus;await $(`task-status-${a}`,async()=>{await Pe(a,{status:e.checked?"Done":"Open"}),s.tasks=await U(),s.activity=await F()},e.checked?d("tasks.completedToast"):d("tasks.reopenedToast"));return}if(e.dataset.taskAssignee){const a=e.dataset.taskAssignee;await $(`task-assignee-${a}`,async()=>{await Pe(a,{assignedTo:e.value}),s.tasks=await U(),s.activity=await F()},d("tasks.assignedToast"));return}if(e.dataset.taskAssigneeFilter!==void 0){s.taskAssigneeFilter=e.value,Be();return}if(e.dataset.taskFollowUp!==void 0){const a=e.dataset.taskFollowUp;await $(`task-follow-up-${a}`,async()=>{await ut(a,{enabled:e.checked}),s.tasks=await U(),s.activity=await F()},e.checked?d("tasks.followUpScheduledToast"):d("tasks.followUpRemovedToast"));return}if(e.dataset.taskFollowUpDate!==void 0){const a=e.dataset.taskFollowUpDate;await $(`task-follow-up-${a}`,async()=>{await ut(a,{enabled:!0,dueAt:e.value}),s.tasks=await U(),s.activity=await F()},d("tasks.followUpUpdatedToast"));return}if(e.dataset.taskFollowUpFilter!==void 0){s.taskFollowUpFilter=e.value,Be();return}if(e.dataset.composeAttachments!==void 0){s.composeForm={...Re(),...s.composeForm,attachments:[...e.files].map((a,o)=>({id:`local-${Date.now()}-${o}`,name:a.name,type:a.type||"Unknown",size:a.size}))},Wt();return}if(e.dataset.triageCategoryFilter!==void 0){s.triageCategoryFilter=e.value,D();return}if(e.dataset.emailCategory){const a=e.dataset.emailCategory;await $(`category-${a}`,async()=>{await us(a,e.value),await _e(a),s.tasks=await U()},"Category updated locally.")}if(e.dataset.emailAssignee){const a=e.dataset.emailAssignee;await $(`assign-${a}`,async()=>{await vs(a,e.value),await _e(a),s.tasks=await U()},"Email assignment updated locally.")}if(e.dataset.selectDraft){const a=e.dataset.selectDraft;s.selectedDraftIds=e.checked?[...new Set([...s.selectedDraftIds,a])]:s.selectedDraftIds.filter(o=>o!==a),D()}});document.addEventListener("input",t=>{const e=t.target;if(e.dataset.setting!==void 0){s.settingsForm={...xe(),[e.dataset.setting]:e.value};return}if(e.dataset.composeField!==void 0){s.composeForm={...Re(),...s.composeForm,[e.dataset.composeField]:e.value};return}if(e.dataset.ruleSearch===void 0)return;s.ruleQuery=e.value,Vt();const a=document.querySelector("[data-rule-search]");a==null||a.focus(),a==null||a.setSelectionRange(s.ruleQuery.length,s.ruleQuery.length)});document.addEventListener("submit",async t=>{const e=t.target.closest(".assistant-form");if(!e)return;t.preventDefault();const a=e.querySelector("[data-assistant-input]"),o=a.value.trim();o&&(a.value="",await zt(o))});D();xs();
