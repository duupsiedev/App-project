(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function a(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(r){if(r.ep)return;r.ep=!0;const n=a(r);fetch(r.href,n)}})();const q={dashboard:["Overview","A professional workflow layer for Outlook: triage, summaries, routing suggestions, and draft preparation for small and mid-sized businesses."],import:["Setup import","Import the client's Microsoft 365 mailbox structure, categories, contacts, and existing workflow patterns."],triage:["Inbox triage","Review AI-classified messages before any action is taken."],rules:["Rules","Approve or adjust suggested workflow rules before they affect the mailbox."],drafts:["Drafts","Review prepared replies before they are sent through Outlook."],admin:["Admin","Control approval modes, escalation, security, and Microsoft 365 access."]},O=[{id:"email-1",subject:"Very unhappy about no response",sender:"Maya Chen",senderEmail:"maya@northstar-retail.ca",body:"I have followed up twice and still have not received an answer about the service issue from last week. We need someone senior to respond today.",category:"Client complaint",urgency:"High",confidence:94,suggestedAction:"Escalate to owner",assignedTo:"emp-1",status:"Open",explanation:"Courio flagged this because the client mentions repeated follow-ups, no response, and asks for senior attention today.",thread:["Client followed up twice about an unanswered service issue.","The last message uses negative sentiment and asks for owner attention."],summary:"Client is frustrated by delayed response. Recommend owner review today.",draft:"Hi, thank you for the follow-up. I'm sorry this has taken longer than expected. I am escalating this now and will make sure you receive a clear update today."},{id:"email-2",subject:"Invoice #1844 payment status",sender:"Alex Rivera",senderEmail:"alex@brightline-supplies.ca",body:"Could you confirm whether invoice #1844 has been approved for payment? It was due last Friday.",category:"Accounting",urgency:"Medium",confidence:89,suggestedAction:"Route to accounting",assignedTo:"emp-2",status:"Open",explanation:"Courio saw an invoice number, payment-status wording, and a due-date reference, so it suggested accounting review.",thread:["Supplier asks whether invoice #1844 has been scheduled for payment.","Invoice appears related to recurring monthly services."],summary:"Supplier is requesting a payment-status update for invoice #1844.",draft:"Hi, thanks for checking in. We are reviewing invoice #1844 with accounting and will send a status update shortly."},{id:"email-3",subject:"Quote request for monthly bookkeeping",sender:"Priya Nair",senderEmail:"priya@lakeside-catering.ca",body:"We are looking for monthly bookkeeping help for a small catering business. We have six employees and would like pricing before the end of the week.",category:"Sales",urgency:"Medium",confidence:86,suggestedAction:"Prepare intake draft",assignedTo:"emp-3",status:"Open",explanation:"Courio matched this to sales because the sender asks for pricing, describes company needs, and appears to be a new prospect.",thread:["New prospect requested pricing for monthly bookkeeping.","They mentioned six employees and monthly receipt volume."],summary:"New lead is asking for bookkeeping pricing. Intake details are partially available.",draft:"Hi, thanks for reaching out. We'd be happy to help with monthly bookkeeping. Could you share your approximate monthly transaction count and preferred start date?"},{id:"email-4",subject:"Payroll documents attached",sender:"Tom Bennett",senderEmail:"tom@harbour-grill.ca",body:"Please find this period's payroll documents attached. Let me know if anything is missing before Thursday.",category:"Documents",urgency:"Low",confidence:91,suggestedAction:"Apply payroll category",assignedTo:"emp-4",status:"Open",explanation:"Courio detected payroll wording and an attachment reference, so it suggested categorizing this for payroll review.",thread:["Client attached payroll documents for this period.","Message should be categorized for payroll review."],summary:"Payroll documents are attached and ready to route to payroll workflow.",draft:"Hi, thanks. We received the payroll documents and will review them for the current period."},{id:"email-5",subject:"Missing March receipts",sender:"Elena Morris",senderEmail:"elena@maple-therapy.ca",body:"I thought I sent the March receipts, but I may have missed the attachment. Can you let me know what you still need?",category:"Missing documents",urgency:"Medium",confidence:88,suggestedAction:"Prepare follow-up draft",assignedTo:"emp-2",status:"Open",explanation:"Courio flagged this because the email talks about receipts and a possibly missing attachment, which usually needs a document follow-up.",thread:["Client mentions March receipts but no attachments are present.","Follow-up should request the missing files."],summary:"March receipts appear to be missing. Prepare a concise document request.",draft:"Hi, thanks for the note. It looks like the March receipts were not attached. Could you resend them when convenient?"},{id:"email-6",subject:"Can we move tomorrow's appointment?",sender:"Jordan Lee",senderEmail:"jordan@greenway-landscaping.ca",body:"Something came up with our crew schedule. Can we move tomorrow's appointment to next Tuesday afternoon?",category:"Scheduling",urgency:"Low",confidence:82,suggestedAction:"Offer available times",assignedTo:"emp-5",status:"Open",explanation:"Courio identified a scheduling change request with a proposed new time, so it suggested a simple scheduling reply.",thread:["Client asks to move an appointment from tomorrow to next Tuesday afternoon.","No urgent sentiment or billing issue detected."],summary:"Client wants to reschedule tomorrow's appointment to next Tuesday afternoon.",draft:"Hi, thanks for letting us know. Next Tuesday afternoon should work on our side. Could you confirm your preferred time window?"}],K=[{id:"emp-1",name:"Nadia Patel",title:"Owner",email:"nadia@courio-demo.ca",department:"Leadership"},{id:"emp-2",name:"Marcus Roy",title:"Bookkeeper",email:"marcus@courio-demo.ca",department:"Accounting"},{id:"emp-3",name:"Sofia Tremblay",title:"Client Success Lead",email:"sofia@courio-demo.ca",department:"Sales"},{id:"emp-4",name:"Daniel Kim",title:"Payroll Specialist",email:"daniel@courio-demo.ca",department:"Payroll"},{id:"emp-5",name:"Avery Brooks",title:"Office Coordinator",email:"avery@courio-demo.ca",department:"Operations"}],Q=[{id:"rule-1",title:"Supplier invoice routing",desc:"Categorize supplier invoices and payment requests, then notify the accounting contact.",category:"Accounting",confidence:91,explanation:"Courio looks for invoice numbers, payment wording, supplier senders, and due-date language.",impact:"Would have matched 31 messages this month.",matches:["Invoice #1844 payment status","Supplier payment confirmation"],on:!0},{id:"rule-2",title:"Client escalation detection",desc:"Flag negative sentiment, repeated follow-ups, or unanswered client messages older than 48 hours.",category:"Client complaint",confidence:94,explanation:"Courio looks for negative sentiment, repeated follow-ups, and requests for owner attention.",impact:"Would have flagged 4 high-risk threads in the last 14 days.",matches:["Very unhappy about no response"],on:!0},{id:"rule-3",title:"Quote request intake",desc:"Prepare standardized draft replies for new prospects requesting pricing or availability.",category:"Sales",confidence:86,explanation:"Courio looks for pricing requests, new prospect language, and service-fit details.",impact:"Would have prepared 6 drafts this month.",matches:["Quote request for monthly bookkeeping"],on:!1},{id:"rule-4",title:"Missing document follow-up",desc:"Prepare client reminders when required documents are mentioned but not attached.",category:"Missing documents",confidence:88,explanation:"Courio looks for missing attachment wording, receipt requests, and document follow-up language.",impact:"Useful for bookkeeping, accounting, insurance, and service teams.",matches:["Missing March receipts"],on:!1}],L="courio.mockState.v1",B="courio.assistantHistory.v1",v={emails:structuredClone(O),employees:structuredClone(K),rules:structuredClone(Q),drafts:O.map(t=>({id:t.id,emailId:t.id,title:t.suggestedAction,source:t.subject,text:t.draft,confidence:t.confidence,risk:t.urgency==="High"?"High":"Low",generated:!1,reviewed:!1,status:"Needs approval"})),settings:{productName:"Courio",mode:"Simple",companyName:"Demo PME Inc.",defaultMode:"Observation only",escalationRecipient:"owner@company.ca",confidenceThreshold:"80",observationDays:"7",allowLowRiskBulkApproval:"Yes",approvalRequired:!0,autoSend:!1},completedActions:[]},d=Y();let y=X();const u=(t=550)=>new Promise(e=>setTimeout(e,t));function l(t){return structuredClone(t)}function Y(){try{const t=window.localStorage.getItem(L);if(!t)return l(v);const e=JSON.parse(t);return{...l(v),...e,emails:D(v.emails,e.emails),employees:D(v.employees,e.employees),rules:D(v.rules,e.rules),drafts:D(v.drafts,e.drafts),settings:{...v.settings,...e.settings||{}}}}catch{return l(v)}}function D(t,e=[]){const a=t.map(r=>{const n=e.find(c=>c.id===r.id);return n?{...r,...n}:l(r)}),i=e.filter(r=>!t.some(n=>n.id===r.id));return[...a,...i.map(l)]}function g(){window.localStorage.setItem(L,JSON.stringify(d))}function X(){try{const t=window.localStorage.getItem(B);return t?JSON.parse(t):[{id:"assistant-welcome",role:"assistant",text:"Hi, I can help with urgent emails, invoices, drafts, digest updates, rules, and explanations."}]}catch{return[{id:"assistant-welcome",role:"assistant",text:"Hi, I can help with urgent emails, invoices, drafts, digest updates, rules, and explanations."}]}}function Z(){window.localStorage.setItem(B,JSON.stringify(y))}function ee(){return d.settings.allowLowRiskBulkApproval!=="No"}function _(t){return/draft|reply|follow-up|offer|escalate/i.test(t.suggestedAction)}function T(t){return t.generated&&t.reviewed&&t.status==="Saved"}function A(t){return t.status==="Ready for human send"||t.status==="Approved"}function R(t){const e=d.emails.find(n=>n.id===(t.emailId||t.id)),a=(e==null?void 0:e.status)||"Open",i=A(t),r=a!=="Done"&&T(t);return{...t,sourceEmailStatus:a,sourceWorkflowStatus:(e==null?void 0:e.workflowStatus)||"",approvalState:i?"ready_for_human_send":t.status==="Saved"?"saved":t.status==="Generated"?"generated":"needs_review",statusLabel:i?"Ready for human send":t.status,isReadyForHumanSend:i,canApprove:r,canSelectForBulkApproval:a!=="Done"&&!i,approvalBlocker:r?"":a==="Done"?"Source email is completed.":"Review this draft before approving."}}function C(t){const e=x(t.id),a=_(t),i=e?A(e):!1,r=t.status==="Done";return{...t,requiresDraft:a,draftId:(e==null?void 0:e.id)||null,draftStatus:(e==null?void 0:e.status)||null,draftStatusLabel:e?R(e).statusLabel:"No draft",draftReadyForHumanSend:i,workflowLabel:r?"Completed":i?"Draft approved":(e==null?void 0:e.status)==="Saved"?"Draft saved":e?"Draft in review":t.workflowStatus||"Not started",canComplete:r?!1:!a||i,completeActionLabel:r?"Completed":"Done",draftActionLabel:r?"Draft locked":e?i?"View approved draft":"Edit draft":"Generate draft",canGenerateDraft:!r&&!e,canOpenDraft:!!e,completionBlocker:a&&!i?"This workflow still needs a draft before it can be completed.":""}}function te(t){const e=C(t);return e.canComplete?{allowed:!0,type:"mark-done",emailId:t.id,title:"Complete workflow",message:"Mark this workflow complete?",primaryLabel:"Mark complete"}:e.draftId?{allowed:!1,type:"review-draft",emailId:t.id,draftId:e.draftId,title:"Draft approval needed",message:"This workflow needs a reviewed and approved draft before it can be completed.",primaryLabel:"Review draft"}:{allowed:!1,type:"generate-draft",emailId:t.id,title:"Draft needed",message:"This workflow still needs a draft before it can be completed.",primaryLabel:"Generate draft"}}function ae(t){return R(t).canApprove?{allowed:!0,type:"approve-draft",draftId:t.id,title:"Approve draft",message:"Mark this draft as ready for human send? Courio will not send it.",primaryLabel:"Approve"}:{allowed:!1,type:"review-draft",draftId:t.id,title:"Review required",message:"Review this draft before approving.",primaryLabel:"Review draft"}}function f(t){const e=d.emails.find(a=>a.id===t);if(!e)throw new Error("Email not found.");return e}function k(t){const e=d.drafts.find(a=>a.id===t);if(!e)throw new Error("Draft not found.");return e}function x(t){return d.drafts.find(e=>(e.emailId||e.id)===t)}function se(t){const e=d.employees.find(a=>a.id===t);if(!e)throw new Error("Employee not found.");return e}function W(){const t=d.emails.filter(n=>n.status!=="Done"),e=d.drafts.filter(n=>n.status==="Ready for human send").length,a=d.drafts.filter(n=>n.status!=="Ready for human send"&&n.status!=="Approved").length,i=n=>t.filter(c=>c.category===n),r=t.filter(n=>n.urgency==="High");return{generatedAt:new Date().toLocaleTimeString([],{hour:"numeric",minute:"2-digit"}),headline:`${t.length} open emails need review. ${r.length} are urgent and ${a} drafts need approval.`,urgentItems:r.map(n=>n.subject),draftsAwaitingApproval:a,readyForHumanSend:e,invoices:i("Accounting").map(n=>n.subject),missingDocuments:i("Missing documents").map(n=>n.subject),quoteRequests:i("Sales").map(n=>n.subject),clientComplaints:i("Client complaint").map(n=>n.subject),recommendedActions:[r.length?"Review urgent client items first.":"No urgent client escalations are open.",a?"Review drafts before marking them ready for human send.":"No drafts are waiting for approval.","Keep observation mode on while this remains a demo."]}}function ie(){const t=d.rules.find(a=>/invoice/i.test(`${a.title} ${a.desc}`));if(t)return t.on=!0,g(),t;const e={id:`rule-${Date.now()}`,title:"Invoice intake assistant",desc:"Flag invoice messages, payment questions, due dates, and supplier follow-ups for accounting review.",category:"Accounting",confidence:84,explanation:"Courio would look for invoice numbers, balance-due wording, supplier names, and payment timing.",impact:"Created locally from the assistant chat. It only previews matches in this prototype.",matches:d.emails.filter(a=>a.category==="Accounting").map(a=>a.subject),on:!0};return d.rules.push(e),g(),e}function ne(t,e={}){const a=t.trim().toLowerCase(),i=d.emails.filter(c=>c.status!=="Done"&&c.urgency==="High").length,r=d.emails.filter(c=>c.status!=="Done"&&c.category==="Accounting").length,n=d.drafts.filter(c=>!A(c)&&f(c.emailId||c.id).status!=="Done").length;if(/urgent/.test(a))return{text:`${i} urgent emails are open. I switched Triage to urgent items.`,action:{type:"show_triage",filter:"urgent"}};if(/invoice|invoices|accounting/.test(a)&&/create|rule/.test(a))return{text:"Invoice rule is ready in observation mode. It is still fake/local and will not touch a mailbox.",action:{type:"show_rule",ruleId:ie().id}};if(/invoice|invoices|accounting/.test(a))return{text:`${r} invoice-related emails are open. I switched Triage to Accounting.`,action:{type:"show_triage",filter:"invoices"}};if(/draft/.test(a)&&/approval|approve|need|waiting/.test(a))return{text:`${n} drafts need human review or approval. I opened the Drafts queue.`,action:{type:"show_drafts",filter:"needs_approval"}};if(/digest|morning/.test(a))return{text:"I regenerated the morning digest from local demo data.",action:{type:"generate_digest",digest:W()}};if(/explain|why/.test(a)){if(!e.selectedEmailId)return{text:"Open an email in Triage first, then ask me to explain it. I will show the flagged reason."};const c=C(f(e.selectedEmailId));return{text:`Courio flagged "${c.subject}" because: ${c.explanation}`,action:{type:"explain_email",emailId:c.id}}}return/reset/.test(a)&&/demo|data/.test(a)?{text:"I can reset the fake demo data now. The page will reload so defaults come back clean.",action:{type:"reset_demo_data"}}:{text:"Try: Show urgent emails, Show invoices, Show drafts needing approval, Generate digest, Explain selected email, Create invoice rule, or Reset demo data."}}async function h(){return await u(),l(d.emails.map(C))}async function re(){return await u(350),l(d.employees)}async function $(){return await u(400),l(d.rules)}async function M(){return await u(700),l(W())}async function w(){return await u(400),l(d.drafts.map(R))}async function b(t){await u(450);const e=k(t),a=f(e.emailId||e.id);return e.generated&&!e.reviewed&&(e.reviewed=!0,g()),l({...R(e),sourceEmail:{id:a.id,subject:a.subject,sender:a.sender,senderEmail:a.senderEmail,body:a.body,suggestedAction:a.suggestedAction,confidence:a.confidence,urgency:a.urgency,status:a.status,workflowStatus:a.workflowStatus}})}async function oe(t){await u(350),f(t);const e=x(t);return e?b(e.id):null}async function de(){return await u(250),l(d.settings)}async function le(t){return await u(450),d.settings={...d.settings,...t,approvalRequired:!0,autoSend:!1},g(),l(d.settings)}async function G(){return await u(350),window.localStorage.removeItem(L),l(v)}async function z(t){await u();const e=f(t);return l({...C(e),messages:e.thread})}async function ce(t){return await u(250),l(te(f(t)))}async function ue(t){return await u(250),l(ae(k(t)))}async function pe(t){return await u(700),f(t).summary}async function me(t){await u(750);const e=f(t);if(e.status==="Done")throw new Error("This email is done. Reopen it before creating or changing a draft.");let a=x(t);return a?a.status==="Needs approval"&&a.text===e.draft&&(a.generated=!0,a.status="Generated"):(a={id:t,emailId:t,title:e.suggestedAction,source:e.subject,text:e.draft,confidence:e.confidence,risk:e.urgency==="High"?"High":"Low",generated:!0,reviewed:!1,status:"Generated"},d.drafts.push(a)),e.workflowStatus=a.status==="Ready for human send"?"Draft approved":"Draft in review",g(),l(a)}async function fe(t,e){if(await u(),!e||e.trim().length<10)throw new Error("Draft is too short to save.");const a=k(t),i=f(a.emailId||a.id);if(i.status==="Done")throw new Error("This email is done. Reopen it before editing the draft.");return a.text=e,a.generated=!0,a.reviewed=!0,a.status="Saved",i.workflowStatus="Draft saved",g(),l(a)}async function ge(t){await u();const e=k(t),a=f(e.emailId||e.id);if(a.status==="Done")throw new Error("This email is done. Reopen it before changing draft approval.");if(!T(e))throw new Error("Review this draft before approving.");return e.status="Ready for human send",a.workflowStatus="Draft approved",g(),l(e)}async function V(t){if(await u(650),!t.length)throw new Error("Select at least one draft first.");const e=t.map(i=>{const r=k(i),n=f(r.emailId||r.id);return{draft:r,email:n}}).filter(({email:i})=>i.status!=="Done");if(!e.length)throw new Error("No selected drafts could be approved.");if(e.some(({draft:i})=>!T(i)))throw new Error("Review this draft before approving.");const a=[];for(const{draft:i,email:r}of e)i.status="Ready for human send",r.workflowStatus="Draft approved",a.push(i.id);return g(),l({approved:a})}async function ve(){if(await u(700),!ee())throw new Error("Low-risk bulk approval is disabled by workspace settings.");const t=d.drafts.filter(e=>e.risk!=="High").filter(e=>e.status!=="Ready for human send"&&e.status!=="Approved").filter(e=>f(e.emailId||e.id).status!=="Done").map(e=>e.id);if(!t.length)throw new Error("No low-risk drafts are awaiting approval.");return V(t)}async function H(t){await u(450);const e=d.rules.find(a=>a.id===t);if(!e)throw new Error("Rule not found.");return e.on=!e.on,g(),l(e)}async function we(t,e){var i,r;await u(500);const a=d.rules.find(n=>n.id===t);if(!a)throw new Error("Rule not found.");if(!((i=e.title)!=null&&i.trim()))throw new Error("Rule name is required.");if(!((r=e.desc)!=null&&r.trim()))throw new Error("Rule description is required.");return a.title=e.title.trim(),a.desc=e.desc.trim(),a.category=e.category||a.category,g(),l(a)}async function he(t){await u();const e=f(t),a=x(t);if(_(e)&&!A(a||{}))throw new Error("This workflow still needs a draft before it can be completed.");return e.status="Done",e.workflowStatus="Completed",d.completedActions.push({id:`action-${Date.now()}`,type:"email-done",emailId:t,completedAt:new Date().toISOString()}),g(),l(e)}async function be(t,e){if(await u(400),!e)throw new Error("Choose a category before saving.");const a=f(t);return a.category=e,g(),l(a)}async function ye(t,e){await u(400),se(e);const a=f(t);return a.assignedTo=e,g(),l(a)}async function $e(){return await u(150),l(y)}async function ke(t,e={}){if(await u(500),!(t!=null&&t.trim()))throw new Error("Type a command first.");const a={id:`user-${Date.now()}`,role:"user",text:t.trim()},i=ne(t,e),r={id:`assistant-${Date.now()}`,role:"assistant",text:i.text};return y=[...y,a,r].slice(-24),Z(),l({messages:y,action:i.action||null})}const De=document.querySelector("#app"),s={tab:"dashboard",emails:[],employees:[],rules:[],drafts:[],settings:{companyName:"Demo PME Inc.",mode:"Simple",defaultMode:"Observation only",escalationRecipient:"owner@company.ca",approvalRequired:!0,autoSend:!1},loading:{emails:!0,rules:!0,drafts:!0},busy:{},selectedEmail:null,selectedDraft:null,selectedRule:null,selectedDraftIds:[],confirmDialog:null,digest:null,triageFilter:"all",draftFilter:"all",assistantOpen:!1,assistantMessages:[],summary:"",showExplanation:!1};De.innerHTML=`
  <div class="app">
    <aside>
      <div class="brand">
        <div class="brand-title">Courio</div>
        <div class="brand-sub">Assistant Outlook pour PME</div>
      </div>
      <nav class="nav">
        <button class="active" data-tab="dashboard">Overview <small>Today</small></button>
        <button data-tab="import">Setup import <small>Microsoft 365</small></button>
        <button data-tab="triage">Triage <small>Inbox</small></button>
        <button data-tab="rules">Rules <small>Preview</small></button>
        <button data-tab="drafts">Drafts <small>Approval</small></button>
        <button data-tab="admin">Admin <small>Security</small></button>
      </nav>
      <div class="aside-note">Courio uses fake local mailbox data in this prototype and suggests actions. It never sends email or modifies a real mailbox.</div>
    </aside>
    <main>
      <div class="header">
        <div>
          <h1 id="pageTitle"></h1>
          <p class="subtitle" id="pageSubtitle"></p>
        </div>
        <div class="mode">Preview mode enabled</div>
      </div>
      <section id="dashboard" class="section"></section>
      <section id="import" class="section"></section>
      <section id="triage" class="section"></section>
      <section id="rules" class="section"></section>
      <section id="drafts" class="section"></section>
      <section id="admin" class="section"></section>
    </main>
  </div>
  <div id="drawerRoot"></div>
  <div id="modalRoot"></div>
  <div id="assistantRoot"></div>
  <div class="toast" id="toast"></div>
`;function j(t,e){s.busy[t]=e,m()}async function p(t,e,a){try{j(t,!0),await e(),a&&S(a)}catch(i){S(i.message||"Something went wrong in the mock workflow.",!0)}finally{j(t,!1)}}function o(t){return!!s.busy[t]}function S(t,e=!1){const a=document.querySelector("#toast");a.textContent=t,a.classList.toggle("error",e),a.classList.add("show"),window.clearTimeout(a.dataset.timer),a.dataset.timer=window.setTimeout(()=>a.classList.remove("show"),2400)}function N(t){s.tab=t,m()}async function E(t=(e=>(e=s.selectedEmail)==null?void 0:e.id)()){if(s.emails=await h(),t){const a=s.emails.find(i=>i.id===t);s.selectedEmail=a?{...a,messages:a.thread}:null}}function F(t){return!!(t!=null&&t.isReadyForHumanSend)}function I(){return s.settings.mode==="Advanced"}function U(){return s.settings.allowLowRiskBulkApproval!=="No"}function Se(t=""){return String(t).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}async function Ee(){try{const[t,e,a,i,r,n,c]=await Promise.all([h(),re(),$(),w(),de(),M(),$e()]);s.emails=t,s.employees=e,s.rules=a,s.drafts=i,s.settings={...s.settings,...r},s.digest=n,s.assistantMessages=c}catch(t){S(t.message||"Could not load mock data.",!0)}finally{s.loading.emails=!1,s.loading.rules=!1,s.loading.drafts=!1,m()}}function m(){document.querySelector("#pageTitle").textContent=q[s.tab][0],document.querySelector("#pageSubtitle").textContent=q[s.tab][1],document.querySelectorAll(".section").forEach(t=>{t.classList.toggle("active",t.id===s.tab)}),document.querySelectorAll(".nav button").forEach(t=>{t.classList.toggle("active",t.dataset.tab===s.tab)}),Ae(),Re(),Ce(),je(),Ne(),Be(),xe(),Ie(),Fe()}function Ae(){const t=s.emails.filter(a=>a.status!=="Done").length,e=s.digest;document.querySelector("#dashboard").innerHTML=`
    <div class="grid cols-3">
      <div class="panel metric positive">
        <div class="label">Open emails</div>
        <div class="value">${s.loading.emails?"...":t}</div>
        <div class="caption">Built from local demo inbox data</div>
      </div>
      <div class="panel metric">
        <div class="label">Drafts awaiting approval</div>
        <div class="value">${s.drafts.filter(a=>!F(a)).length||0}</div>
        <div class="caption">No messages are sent automatically</div>
      </div>
      <div class="panel metric">
        <div class="label">Ready for human send</div>
        <div class="value">${s.drafts.filter(F).length||0}</div>
        <div class="caption">Human approval still required to send</div>
      </div>
    </div>
    <div class="grid cols-2" style="margin-top:16px">
      <div class="panel">
        <div class="panel-title"><h2>Morning digest</h2><span>${e?`Generated ${e.generatedAt}`:"Loading..."}</span></div>
        <p class="subtitle">${e?e.headline:"Preparing a local demo digest from mock emails and drafts."}</p>
        ${e?`
          <table class="table" style="margin-top:14px">
            <tr><td>Urgent items</td><td>${e.urgentItems.length?e.urgentItems.join(", "):"None"}</td></tr>
            <tr><td>Invoices</td><td>${e.invoices.length?e.invoices.join(", "):"None"}</td></tr>
            <tr><td>Missing documents</td><td>${e.missingDocuments.length?e.missingDocuments.join(", "):"None"}</td></tr>
            <tr><td>Quote requests</td><td>${e.quoteRequests.length?e.quoteRequests.join(", "):"None"}</td></tr>
            <tr><td>Client complaints</td><td>${e.clientComplaints.length?e.clientComplaints.join(", "):"None"}</td></tr>
          </table>
        `:""}
        <div class="actions" style="margin-top:14px">
          <button class="btn primary" data-action="digest" ${o("digest")?"disabled":""}>${o("digest")?"Regenerating...":"Regenerate digest"}</button>
          <button class="btn subtle" data-tab-target="triage">Review triage</button>
        </div>
      </div>
      <div class="panel">
        <div class="panel-title"><h2>Recommended next actions</h2><span>${(e==null?void 0:e.recommendedActions.length)||0} items</span></div>
        <table class="table">
          ${((e==null?void 0:e.recommendedActions)||["Digest is loading."]).map(a=>`<tr><td><span class="badge lead">Action</span></td><td>${a}</td></tr>`).join("")}
          ${I()?`<tr><td><span class="badge invoice">Advanced</span></td><td>${s.rules.filter(a=>a.on).length} rules are currently enabled.</td></tr>`:""}
        </table>
      </div>
    </div>
  `}function Re(){const t=[["Connect Microsoft 365","Admin authorizes access to selected Outlook mailboxes, folders, categories, and contacts.","Connect"],["Import mailbox structure","Courio detects folders, categories, shared mailboxes, frequent senders, and existing work habits.","Import"],["Generate workflow suggestions","Suggested triage rules are created but remain inactive until approved.","View suggestions"],["Run in observation mode","The system previews actions for one week before any mailbox changes are enabled.","Enable"]];document.querySelector("#import").innerHTML=`
    <div class="panel">
      <div class="panel-title"><h2>Microsoft 365 setup import</h2><span>Designed to reduce switching friction</span></div>
      <div class="workflow">
        ${t.map((e,a)=>`
          <div class="step">
            <div class="step-num">${a+1}</div>
            <div><strong>${e[0]}</strong><p>${e[1]}</p></div>
            <button class="btn ${a===0?"primary":a===3?"success":"subtle"}" data-import-step="${a}" ${o(`import-${a}`)?"disabled":""}>
              ${o(`import-${a}`)?"Working...":e[2]}
            </button>
          </div>
        `).join("")}
      </div>
    </div>
  `}function Ce(){const t=Object.fromEntries(s.employees.map(i=>[i.id,i])),e=s.emails.filter(i=>s.triageFilter==="urgent"?i.status!=="Done"&&i.urgency==="High":s.triageFilter==="invoices"?i.status!=="Done"&&i.category==="Accounting":!0),a=s.loading.emails?'<div class="loading">Loading mock inbox...</div>':e.length===0?'<div class="empty-state">No emails match this view. Try All inbox or reset the demo data.</div>':`<table class="table">
        <thead><tr><th>Subject</th><th>Sender</th><th>Category</th><th>Assigned</th><th>Workflow</th><th>Status</th><th></th></tr></thead>
        <tbody>
          ${e.map(i=>{var r;return`
            <tr>
              <td>${i.subject}</td>
              <td>${i.sender}<br><small>${i.senderEmail||""}</small></td>
              <td><span class="badge ${J(i.category)}">${i.category}</span><br><small>${i.urgency||"Medium"} urgency - ${i.confidence||80}% confidence</small></td>
              <td>${((r=t[i.assignedTo])==null?void 0:r.name)||"Unassigned"}</td>
              <td>${i.workflowLabel||"Not started"}</td>
              <td><span class="badge ${i.status==="Done"?"done":""}">${i.status}</span></td>
              <td class="actions">
                <button class="btn subtle" data-review-email="${i.id}" ${o(`review-${i.id}`)?"disabled":""}>${o(`review-${i.id}`)?"Opening...":"Review"}</button>
                <button class="btn success" data-done-email="${i.id}" ${i.status==="Done"||o(`done-${i.id}`)?"disabled":""}>${i.status==="Done"?"Completed":o(`done-${i.id}`)?"Saving...":"Done"}</button>
              </td>
            </tr>
          `}).join("")}
        </tbody>
      </table>`;document.querySelector("#triage").innerHTML=`
    <div class="panel">
      <div class="panel-title"><h2>Inbox triage</h2><span>Suggested actions only</span></div>
      <div class="segmented" style="margin-bottom:14px">
        ${[["all","All inbox"],["urgent","Urgent"],["invoices","Invoices"]].map(([i,r])=>`<button class="${s.triageFilter===i?"active":""}" data-triage-filter="${i}">${r}</button>`).join("")}
      </div>
      ${a}
    </div>
  `}function xe(){const t=document.querySelector("#drawerRoot");if(s.selectedRule){He(t);return}if(s.selectedDraft){Oe(t);return}if(!s.selectedEmail){t.innerHTML="";return}const e=s.selectedEmail,a=e.status==="Done",i=s.employees.find(n=>n.id===e.assignedTo),r=["Client complaint","Accounting","Sales","Documents","Missing documents","Scheduling","General"];t.innerHTML=`
    <div class="drawer-backdrop" data-close-drawer></div>
    <aside class="review-drawer" aria-label="Email review">
      <div class="drawer-header">
        <div>
          <div class="badge ${J(e.category)}">${e.category}</div>
          <h2>${e.subject}</h2>
          <p>${e.sender} - ${e.senderEmail}</p>
        </div>
        <button class="btn subtle" data-close-drawer>Close</button>
      </div>

      <div class="drawer-section">
        <h3>Email body</h3>
        <div class="preview">${e.body}</div>
      </div>

      <div class="drawer-grid">
        <label>Category
          <select data-email-category="${e.id}">
            ${r.map(n=>`<option value="${n}" ${n===e.category?"selected":""}>${n}</option>`).join("")}
          </select>
        </label>
        <label>Assigned employee
          <select data-email-assignee="${e.id}">
            ${s.employees.map(n=>`<option value="${n.id}" ${n.id===e.assignedTo?"selected":""}>${n.name} - ${n.department}</option>`).join("")}
          </select>
        </label>
      </div>

      <div class="drawer-grid">
        <div class="mini-stat"><span>Urgency</span><strong>${e.urgency}</strong></div>
        <div class="mini-stat"><span>Confidence</span><strong>${e.confidence}%</strong></div>
        <div class="mini-stat"><span>Status</span><strong>${e.status}</strong></div>
        <div class="mini-stat"><span>Owner</span><strong>${(i==null?void 0:i.name)||"Unassigned"}</strong></div>
      </div>

      <div class="drawer-section">
        <h3>Draft workflow</h3>
        <div class="preview">
          ${a?"This email is completed. Draft actions are locked unless the email is reopened later.":e.draftId?`${e.draftReadyForHumanSend?"Draft approved and ready for human send.":`Draft exists: ${e.draftStatusLabel}.`} One email uses one draft record.`:"No active draft exists for this email."}
        </div>
      </div>

      <div class="drawer-section">
        <h3>Suggested action</h3>
        <div class="preview">${e.suggestedAction}</div>
      </div>

      <div class="drawer-section">
        <div class="panel-title compact-title">
          <h3>Why was this flagged?</h3>
          <button class="btn subtle" data-toggle-explanation>${s.showExplanation?"Hide":"Show"}</button>
        </div>
        ${s.showExplanation?`<div class="preview">${e.explanation}</div>`:""}
      </div>

      <div class="drawer-section">
        <h3>Thread</h3>
        <ul>${e.messages.map(n=>`<li>${n}</li>`).join("")}</ul>
      </div>

      ${s.summary?`<div class="drawer-section"><h3>Summary</h3><div class="preview">${s.summary}</div></div>`:""}
      <div class="drawer-actions">
        <button class="btn primary" data-summary-email="${e.id}" ${o(`summary-${e.id}`)?"disabled":""}>${o(`summary-${e.id}`)?"Summarizing...":"Summarize"}</button>
        ${e.canOpenDraft?`<button class="btn subtle" data-open-email-draft="${e.id}" ${o(`open-email-draft-${e.id}`)?"disabled":""}>${e.draftActionLabel}</button>`:`<button class="btn subtle" data-generate-draft="${e.id}" ${!e.canGenerateDraft||o(`draft-${e.id}`)?"disabled":""}>${o(`draft-${e.id}`)?"Drafting...":e.draftActionLabel}</button>`}
        <button class="btn success" data-done-email="${e.id}" ${a||o(`done-${e.id}`)?"disabled":""}>${a?"Completed":o(`done-${e.id}`)?"Saving...":"Mark done"}</button>
      </div>
      <p class="drawer-note">This is a local prototype. Courio does not send email.</p>
    </aside>
  `}function Ie(){const t=document.querySelector("#modalRoot");if(!s.confirmDialog){t.innerHTML="";return}const e=s.confirmDialog;t.innerHTML=`
    <div class="modal-backdrop"></div>
    <div class="confirm-modal" role="dialog" aria-modal="true">
      <h2>${e.title}</h2>
      <p>${e.message}</p>
      <div class="actions">
        <button class="btn primary" data-confirm-primary>${e.primaryLabel}</button>
        <button class="btn subtle" data-confirm-cancel>Cancel</button>
      </div>
    </div>
  `}async function Le(t){s.confirmDialog=await ce(t),m()}async function Te(t){s.confirmDialog=await ue(t),m()}async function P(t){const e=await me(t);s.drafts=await w(),await E(t),s.selectedDraft=await b(e.id),s.selectedEmail=null}async function Me(t){await he(t),await E(t),s.drafts=await w()}async function qe(t){var e;await ge(t),s.drafts=await w(),s.emails=await h(),s.selectedDraftIds=s.selectedDraftIds.filter(a=>a!==t),((e=s.selectedDraft)==null?void 0:e.id)===t&&(s.selectedDraft=await b(t))}function Oe(t){const e=s.selectedDraft,a=e.sourceEmail||{},i=a.status==="Done";t.innerHTML=`
    <div class="drawer-backdrop" data-close-drawer></div>
    <aside class="review-drawer" aria-label="Draft review">
      <div class="drawer-header">
        <div>
          <div class="badge ${e.isReadyForHumanSend?"done":"pending"}">${e.statusLabel}</div>
          <h2>${e.title}</h2>
          <p>Source: ${a.subject||e.source}</p>
        </div>
        <button class="btn subtle" data-close-drawer>Close</button>
      </div>

      <div class="drawer-section">
        <h3>Source email</h3>
        <div class="preview">
          <strong>${a.sender||"Mock sender"}</strong><br>
          ${a.senderEmail||""}<br><br>
          ${a.body||"This draft is based on a local mock email."}
        </div>
      </div>

      <div class="drawer-grid">
        <div class="mini-stat"><span>Status</span><strong>${i?"Completed":e.statusLabel}</strong></div>
        <div class="mini-stat"><span>Risk level</span><strong>${e.risk||"Low"}</strong></div>
        <div class="mini-stat"><span>Confidence</span><strong>${e.confidence||a.confidence||80}%</strong></div>
        <div class="mini-stat"><span>Sending</span><strong>Never automatic</strong></div>
      </div>

      <div class="drawer-section">
        <h3>Suggested reply</h3>
        <div class="preview">${a.suggestedAction||e.title}</div>
      </div>

      <div class="drawer-section">
        <label>Editable draft body
          <textarea data-draft-editor>${e.text}</textarea>
        </label>
      </div>

      <div class="drawer-actions">
        <button class="btn primary" data-save-draft="${e.id}" ${i||o(`save-${e.id}`)?"disabled":""}>${i?"Completed":o(`save-${e.id}`)?"Saving...":"Save changes"}</button>
        <button class="btn success" data-approve-draft="${e.id}" ${i||e.isReadyForHumanSend||o(`approve-${e.id}`)?"disabled":""}>${i?"Completed":o(`approve-${e.id}`)?"Approving...":"Approve"}</button>
        <button class="btn subtle" data-close-drawer>Close</button>
      </div>
      <p class="drawer-note">Approval only marks this draft as ready for a person to send. Courio never sends email.</p>
    </aside>
  `}function He(t){var i;const e=s.selectedRule,a=["Client complaint","Accounting","Sales","Documents","Missing documents","Scheduling","General"];t.innerHTML=`
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
        <label>Rule name<input data-rule-field="title" value="${e.title}"></label>
        <label>Description<textarea data-rule-field="desc">${e.desc}</textarea></label>
        <label>Category
          <select data-rule-field="category">
            ${a.map(r=>`<option value="${r}" ${r===e.category?"selected":""}>${r}</option>`).join("")}
          </select>
        </label>
      </div>

      <div class="drawer-grid">
        <div class="mini-stat"><span>Confidence</span><strong>${e.confidence||80}%</strong></div>
        <div class="mini-stat"><span>Would match</span><strong>${((i=e.matches)==null?void 0:i.length)||0} samples</strong></div>
      </div>

      <div class="drawer-section">
        <h3>Why Courio suggested it</h3>
        <div class="preview">${e.explanation||"This rule is based on repeated wording patterns in the mock inbox."}</div>
      </div>

      <div class="drawer-section">
        <h3>Match preview</h3>
        <ul>${(e.matches||["No sample matches yet."]).map(r=>`<li>${r}</li>`).join("")}</ul>
      </div>

      ${I()?`<div class="drawer-section"><h3>Advanced preview</h3><div class="preview">This rule uses the current confidence threshold of ${s.settings.confidenceThreshold||80}%. No mailbox changes happen in the prototype.</div></div>`:""}

      <div class="drawer-actions">
        <button class="btn primary" data-save-rule="${e.id}" ${o(`save-rule-${e.id}`)?"disabled":""}>${o(`save-rule-${e.id}`)?"Saving...":"Save rule"}</button>
        <button class="btn subtle" data-close-drawer>Close</button>
      </div>
    </aside>
  `}function je(){const t=s.loading.rules?'<div class="loading">Loading suggested rules...</div>':`<div class="grid cols-2">
        ${s.rules.map(e=>`
          <div class="rule-card">
            <div class="rule-top">
              <div>
                <div class="rule-title">${e.title}</div>
                <div class="rule-desc">${e.desc}</div>
              </div>
              <button class="toggle ${e.on?"on":""}" aria-label="Toggle ${e.title}" data-toggle-rule="${e.id}" ${o(`rule-${e.id}`)?"disabled":""}></button>
            </div>
            <div class="preview">${e.impact}</div>
            <div class="preview"><strong>${e.confidence||80}% confidence:</strong> ${e.explanation||"Based on local mock patterns."}</div>
            ${I()?`<div class="preview"><strong>Would match:</strong> ${(e.matches||["No samples"]).join(", ")}</div>`:""}
            <div class="actions">
              <button class="btn primary" data-approve-rule="${e.id}" ${o(`approve-rule-${e.id}`)?"disabled":""}>${o(`approve-rule-${e.id}`)?"Approving...":"Approve for observation"}</button>
              <button class="btn subtle" data-edit-rule="${e.id}" ${o(`edit-rule-${e.id}`)?"disabled":""}>${o(`edit-rule-${e.id}`)?"Opening...":"Edit"}</button>
            </div>
          </div>
        `).join("")}
      </div>`;document.querySelector("#rules").innerHTML=t}function Ne(){const t=s.selectedDraftIds.length,e=s.drafts.filter(n=>n.risk!=="High"&&n.canSelectForBulkApproval).length,a=!U(),i=s.drafts.filter(n=>s.draftFilter==="needs_approval"?n.canSelectForBulkApproval:s.draftFilter==="ready"?n.isReadyForHumanSend:!0),r=s.loading.drafts?'<div class="loading">Loading draft queue...</div>':i.length===0?'<div class="empty-state">No drafts match this view. Drafts appear here after Courio prepares local suggested replies.</div>':`<table class="table">
        <thead><tr><th>Select</th><th>Draft</th><th>Source</th><th>Risk</th><th>Status</th><th></th></tr></thead>
        <tbody>
          ${i.map(n=>`
            <tr>
              <td><input type="checkbox" data-select-draft="${n.id}" ${s.selectedDraftIds.includes(n.id)?"checked":""} ${n.canSelectForBulkApproval?"":"disabled"}></td>
              <td>${n.title}</td>
              <td>${n.source}</td>
              <td><span class="badge ${n.risk==="High"?"urgent":"done"}">${n.risk||"Low"}</span></td>
              <td><span class="badge ${n.isReadyForHumanSend?"done":"pending"}">${n.statusLabel}</span></td>
              <td class="actions">
                <button class="btn subtle" data-review-draft="${n.id}" ${o(`review-draft-${n.id}`)?"disabled":""}>${o(`review-draft-${n.id}`)?"Opening...":"Review"}</button>
                <button class="btn success" data-approve-draft="${n.id}" ${n.sourceEmailStatus==="Done"||n.isReadyForHumanSend||o(`approve-${n.id}`)?"disabled":""}>${n.sourceEmailStatus==="Done"?"Completed":o(`approve-${n.id}`)?"Approving...":"Approve"}</button>
              </td>
            </tr>
          `).join("")}
        </tbody>
      </table>`;document.querySelector("#drafts").innerHTML=`
    <div class="panel">
      <div class="panel-title"><h2>Draft approval queue</h2><span>Human approval required</span></div>
      <div class="segmented" style="margin-bottom:14px">
        ${[["all","All drafts"],["needs_approval","Needs approval"],["ready","Ready"]].map(([n,c])=>`<button class="${s.draftFilter===n?"active":""}" data-draft-filter="${n}">${c}</button>`).join("")}
      </div>
      <div class="actions" style="margin-bottom:14px">
        <button class="btn success" data-approve-selected ${t===0||o("approve-selected")?"disabled":""}>${o("approve-selected")?"Approving...":`Approve selected (${t})`}</button>
        <button class="btn subtle" data-approve-low-risk ${a||e===0||o("approve-low-risk")?"disabled":""}>${a?"Low-risk bulk approval disabled":o("approve-low-risk")?"Approving...":`Approve all low-risk (${e})`}</button>
        <span class="mode">Approval only marks drafts ready for human send</span>
      </div>
      ${a?'<div class="preview" style="margin-bottom:14px">Low-risk bulk approval is disabled by workspace settings.</div>':""}
      ${r}
    </div>
  `}function Fe(){const t=document.querySelector("#assistantRoot"),e=s.assistantMessages.length?s.assistantMessages:[{id:"assistant-loading",role:"assistant",text:"Loading assistant history..."}];t.innerHTML=`
    <div class="assistant ${s.assistantOpen?"open":""}">
      ${s.assistantOpen?`
        <div class="assistant-panel" aria-label="Courio assistant">
          <div class="assistant-header">
            <div>
              <strong>Courio assistant</strong>
              <span>Fake/local commands</span>
            </div>
            <button class="btn subtle" data-assistant-toggle>Close</button>
          </div>
          <div class="assistant-messages">
            ${e.map(a=>`
              <div class="assistant-message ${a.role}">
                ${Se(a.text)}
              </div>
            `).join("")}
          </div>
          <form class="assistant-form">
            <input data-assistant-input placeholder="Show urgent emails" autocomplete="off" ${o("assistant")?"disabled":""}>
            <button class="btn primary" type="submit" ${o("assistant")?"disabled":""}>${o("assistant")?"Working...":"Send"}</button>
          </form>
        </div>
      `:""}
      <button class="assistant-fab" data-assistant-toggle aria-label="Open Courio assistant">
        AI
      </button>
    </div>
  `}async function Pe(t){if(t){if(t.type==="show_triage"){s.tab="triage",s.triageFilter=t.filter||"all",s.selectedDraft=null,s.selectedRule=null,m();return}if(t.type==="show_drafts"){s.tab="drafts",s.draftFilter=t.filter||"all",s.selectedEmail=null,s.selectedRule=null,m();return}if(t.type==="generate_digest"){s.digest=t.digest||await M(),s.tab="dashboard",m();return}if(t.type==="explain_email"){s.selectedEmail=await z(t.emailId),s.selectedDraft=null,s.selectedRule=null,s.summary="",s.showExplanation=!0,s.tab="triage",s.triageFilter="all",m();return}if(t.type==="show_rule"){s.rules=await $(),s.selectedRule=s.rules.find(e=>e.id===t.ruleId)||null,s.selectedEmail=null,s.selectedDraft=null,s.tab="rules",m();return}t.type==="reset_demo_data"&&(await G(),window.location.reload())}}function Be(){document.querySelector("#admin").innerHTML=`
    <div class="grid cols-2">
      <div class="panel">
        <div class="panel-title"><h2>Workspace settings</h2><span>Prototype</span></div>
        <div class="form-grid">
          <label>Company name<input data-setting="companyName" value="${s.settings.companyName||"Demo PME Inc."}"></label>
          <label>Mode
            <select data-setting="mode">
              ${["Simple","Advanced"].map(t=>`<option ${t===s.settings.mode?"selected":""}>${t}</option>`).join("")}
            </select>
          </label>
          <label>Escalation recipient<input data-setting="escalationRecipient" value="${s.settings.escalationRecipient||"owner@company.ca"}"></label>
          ${I()?`
          <label>Default mode
            <select data-setting="defaultMode">
              ${["Observation only","Drafts allowed, no auto-send","Auto-categorize after approval"].map(t=>`<option ${t===s.settings.defaultMode?"selected":""}>${t}</option>`).join("")}
            </select>
          </label>
          <label>Confidence threshold<input data-setting="confidenceThreshold" value="${s.settings.confidenceThreshold||"80"}"></label>
          <label>Observation days<input data-setting="observationDays" value="${s.settings.observationDays||"7"}"></label>
          <label>Low-risk bulk approval
            <select data-setting="allowLowRiskBulkApproval">
              ${["Yes","No"].map(t=>`<option ${t===s.settings.allowLowRiskBulkApproval?"selected":""}>${t}</option>`).join("")}
            </select>
          </label>
          `:'<div class="preview">Simple Mode keeps settings focused: company name, escalation recipient, and no automatic sending.</div>'}
          <button class="btn primary" data-save-settings ${o("settings")?"disabled":""}>${o("settings")?"Saving...":"Save settings"}</button>
          <button class="btn danger" data-reset-demo ${o("reset-demo")?"disabled":""}>${o("reset-demo")?"Resetting...":"Reset Demo Data"}</button>
        </div>
      </div>
      <div class="panel">
        <div class="panel-title"><h2>Security controls</h2><span>Client-facing language</span></div>
        <table class="table">
          <tr><td>No automatic sending</td><td>Enabled by default</td></tr>
          <tr><td>Audit log</td><td>All approved actions recorded</td></tr>
          <tr><td>Admin disconnect</td><td>Available at any time</td></tr>
          <tr><td>Least-privilege access</td><td>Mailbox permissions reviewed during setup</td></tr>
          <tr><td>Current mode</td><td>${s.settings.mode||"Simple"}</td></tr>
        </table>
      </div>
      <div class="panel">
        <div class="panel-title"><h2>Employee directory</h2><span>Mock team</span></div>
        <table class="table">
          <thead><tr><th>Name</th><th>Role</th><th>Department</th></tr></thead>
          <tbody>
            ${s.employees.map(t=>`
              <tr>
                <td>${t.name}<br><small>${t.email}</small></td>
                <td>${t.title}</td>
                <td>${t.department}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    </div>
  `}function J(t){return t==="Urgent"||t==="Client complaint"?"urgent":t==="Accounting"||t==="Documents"||t==="Missing documents"?"invoice":t==="Sales"?"lead":""}document.addEventListener("click",async t=>{const e=t.target.closest("button");if(e){if(e.dataset.assistantToggle!==void 0){s.assistantOpen=!s.assistantOpen,m();return}if(e.dataset.confirmCancel!==void 0){s.confirmDialog=null,m();return}if(e.dataset.confirmPrimary!==void 0){const a=s.confirmDialog;if(s.confirmDialog=null,(a==null?void 0:a.type)==="generate-draft"){await p(`draft-${a.emailId}`,async()=>{await P(a.emailId)},"Draft opened. Existing edits were preserved.");return}if((a==null?void 0:a.type)==="review-draft"){await p(`review-draft-${a.draftId}`,async()=>{s.selectedDraft=await b(a.draftId),s.selectedEmail=null,s.summary="",s.showExplanation=!1},"Draft opened for review.");return}if((a==null?void 0:a.type)==="mark-done"){await p(`done-${a.emailId}`,async()=>{await Me(a.emailId)},"Email marked done.");return}if((a==null?void 0:a.type)==="approve-draft"){await p(`approve-${a.draftId}`,async()=>{await qe(a.draftId)},"Draft marked ready for human send. Nothing was sent.");return}}if(e.dataset.tab&&N(e.dataset.tab),e.dataset.tabTarget&&N(e.dataset.tabTarget),e.dataset.triageFilter&&(s.triageFilter=e.dataset.triageFilter,m()),e.dataset.draftFilter&&(s.draftFilter=e.dataset.draftFilter,m()),e.dataset.action==="digest"&&await p("digest",async()=>{s.digest=await M()},"Morning digest regenerated from local demo data."),e.dataset.importStep){const a=`import-${e.dataset.importStep}`;await p(a,()=>new Promise(i=>setTimeout(i,650)),"Setup step completed in mock mode.")}if(e.dataset.reviewEmail){const a=e.dataset.reviewEmail;await p(`review-${a}`,async()=>{s.selectedEmail=await z(a),s.selectedDraft=null,s.summary="",s.showExplanation=!1},"Message thread opened.")}if(e.dataset.reviewDraft){const a=e.dataset.reviewDraft;await p(`review-draft-${a}`,async()=>{s.selectedDraft=await b(a),s.selectedEmail=null,s.summary="",s.showExplanation=!1},"Draft opened for review.")}if(e.dataset.openEmailDraft){const a=e.dataset.openEmailDraft;await p(`open-email-draft-${a}`,async()=>{s.selectedDraft=await oe(a),s.selectedEmail=null,s.summary="",s.showExplanation=!1},"Draft opened for editing.")}if(e.dataset.closeDrawer!==void 0&&(s.selectedEmail=null,s.selectedDraft=null,s.selectedRule=null,s.summary="",s.showExplanation=!1,m()),e.dataset.toggleExplanation!==void 0&&(s.showExplanation=!s.showExplanation,m()),e.dataset.summaryEmail){const a=e.dataset.summaryEmail;await p(`summary-${a}`,async()=>{s.summary=await pe(a)},"Thread summary generated.")}if(e.dataset.generateDraft){const a=e.dataset.generateDraft;await p(`draft-${a}`,async()=>{await P(a)},"Draft opened. Existing edits were preserved.")}if(e.dataset.saveDraft){const a=e.dataset.saveDraft,i=document.querySelector("[data-draft-editor]");await p(`save-${a}`,async()=>{var r;await fe(a,i.value),s.drafts=await w(),s.emails=await h(),((r=s.selectedDraft)==null?void 0:r.id)===a&&(s.selectedDraft=await b(a))},"Draft saved locally.")}if(e.dataset.doneEmail){const a=e.dataset.doneEmail;await p(`check-done-${a}`,async()=>{await Le(a)})}if(e.dataset.toggleRule){const a=e.dataset.toggleRule;await p(`rule-${a}`,async()=>{await H(a),s.rules=await $()},"Rule preview state updated.")}if(e.dataset.approveRule){const a=e.dataset.approveRule;await p(`approve-rule-${a}`,async()=>{s.rules.find(r=>r.id===a).on||await H(a),s.rules=await $()},"Rule approved for observation mode.")}if(e.dataset.editRule){const a=e.dataset.editRule;await p(`edit-rule-${a}`,async()=>{s.selectedRule=s.rules.find(i=>i.id===a),s.selectedEmail=null,s.selectedDraft=null},"Rule opened for local editing.")}if(e.dataset.saveRule){const a=e.dataset.saveRule,i=Object.fromEntries([...document.querySelectorAll("[data-rule-field]")].map(r=>[r.dataset.ruleField,r.value]));await p(`save-rule-${a}`,async()=>{await we(a,i),s.rules=await $(),s.selectedRule=s.rules.find(r=>r.id===a)},"Rule saved locally.")}if(e.dataset.approveDraft){const a=e.dataset.approveDraft;await p(`check-approve-${a}`,async()=>{await Te(a)})}if(e.dataset.approveSelected!==void 0&&await p("approve-selected",async()=>{await V(s.selectedDraftIds),s.drafts=await w(),s.emails=await h(),s.selectedDraftIds=[]},"Selected drafts marked ready for human send. Nothing was sent."),e.dataset.approveLowRisk!==void 0){if(!U()){S("Low-risk bulk approval is disabled by workspace settings.",!0);return}await p("approve-low-risk",async()=>{await ve(),s.drafts=await w(),s.emails=await h(),s.selectedDraftIds=[]},"Low-risk drafts marked ready for human send. Nothing was sent.")}if(e.dataset.saveSettings!==void 0){const a=Object.fromEntries([...document.querySelectorAll("[data-setting]")].map(i=>[i.dataset.setting,i.value]));await p("settings",async()=>{s.settings=await le(a)},"Settings saved locally.")}e.dataset.resetDemo!==void 0&&await p("reset-demo",async()=>{await G(),window.location.reload()},"Demo data reset.")}});document.addEventListener("change",async t=>{const e=t.target;if(e.dataset.setting==="mode"){s.settings.mode=e.value,m();return}if(e.dataset.setting==="allowLowRiskBulkApproval"){s.settings.allowLowRiskBulkApproval=e.value,m();return}if(e.dataset.emailCategory){const a=e.dataset.emailCategory;await p(`category-${a}`,async()=>{await be(a,e.value),await E(a)},"Category updated locally.")}if(e.dataset.emailAssignee){const a=e.dataset.emailAssignee;await p(`assign-${a}`,async()=>{await ye(a,e.value),await E(a)},"Email assignment updated locally.")}if(e.dataset.selectDraft){const a=e.dataset.selectDraft;s.selectedDraftIds=e.checked?[...new Set([...s.selectedDraftIds,a])]:s.selectedDraftIds.filter(i=>i!==a),m()}});document.addEventListener("submit",async t=>{const e=t.target.closest(".assistant-form");if(!e)return;t.preventDefault();const a=e.querySelector("[data-assistant-input]"),i=a.value.trim();i&&await p("assistant",async()=>{var n;const r=await ke(i,{selectedEmailId:((n=s.selectedEmail)==null?void 0:n.id)||null});s.assistantMessages=r.messages,a.value="",await Pe(r.action)})});m();Ee();
