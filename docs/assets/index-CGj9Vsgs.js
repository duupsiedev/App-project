(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(n){if(n.ep)return;n.ep=!0;const r=t(n);fetch(n.href,r)}})();const P={dashboard:["Overview","A professional workflow layer for Outlook: triage, summaries, routing suggestions, and draft preparation for small and mid-sized businesses."],import:["Setup import","Import the client's Microsoft 365 mailbox structure, categories, contacts, and existing workflow patterns."],triage:["Inbox triage","Review AI-classified messages before any action is taken."],rules:["Rules","Approve or adjust suggested workflow rules before they affect the mailbox."],drafts:["Drafts","Review prepared replies before they are sent through Outlook."],admin:["Admin","Control approval modes, escalation, security, and Microsoft 365 access."]},W=[{id:"email-1",subject:"Very unhappy about no response",sender:"Maya Chen",senderEmail:"maya@northstar-retail.ca",body:"I have followed up twice and still have not received an answer about the service issue from last week. We need someone senior to respond today.",category:"Client complaint",urgency:"High",confidence:94,suggestedAction:"Escalate to owner",requiresDraft:!0,assignedTo:"emp-1",status:"Open",explanation:"Courio flagged this because the client mentions repeated follow-ups, no response, and asks for senior attention today.",thread:["Client followed up twice about an unanswered service issue.","The last message uses negative sentiment and asks for owner attention."],summary:"Client is frustrated by delayed response. Recommend owner review today.",draft:"Hi, thank you for the follow-up. I'm sorry this has taken longer than expected. I am escalating this now and will make sure you receive a clear update today."},{id:"email-2",subject:"Invoice #1844 payment status",sender:"Alex Rivera",senderEmail:"alex@brightline-supplies.ca",body:"Could you confirm whether invoice #1844 has been approved for payment? It was due last Friday.",category:"Accounting",urgency:"Medium",confidence:89,suggestedAction:"Route to accounting",requiresDraft:!0,assignedTo:"emp-2",status:"Open",explanation:"Courio saw an invoice number, payment-status wording, and a due-date reference, so it suggested accounting review.",thread:["Supplier asks whether invoice #1844 has been scheduled for payment.","Invoice appears related to recurring monthly services."],summary:"Supplier is requesting a payment-status update for invoice #1844.",draft:"Hi, thanks for checking in. We are reviewing invoice #1844 with accounting and will send a status update shortly."},{id:"email-3",subject:"Quote request for monthly bookkeeping",sender:"Priya Nair",senderEmail:"priya@lakeside-catering.ca",body:"We are looking for monthly bookkeeping help for a small catering business. We have six employees and would like pricing before the end of the week.",category:"Sales",urgency:"Medium",confidence:86,suggestedAction:"Prepare intake draft",requiresDraft:!0,assignedTo:"emp-3",status:"Open",explanation:"Courio matched this to sales because the sender asks for pricing, describes company needs, and appears to be a new prospect.",thread:["New prospect requested pricing for monthly bookkeeping.","They mentioned six employees and monthly receipt volume."],summary:"New lead is asking for bookkeeping pricing. Intake details are partially available.",draft:"Hi, thanks for reaching out. We'd be happy to help with monthly bookkeeping. Could you share your approximate monthly transaction count and preferred start date?"},{id:"email-4",subject:"Payroll documents attached",sender:"Tom Bennett",senderEmail:"tom@harbour-grill.ca",body:"Please find this period's payroll documents attached. Let me know if anything is missing before Thursday.",category:"Documents",urgency:"Low",confidence:91,suggestedAction:"Apply payroll category",requiresDraft:!0,assignedTo:"emp-4",status:"Open",explanation:"Courio detected payroll wording and an attachment reference, so it suggested categorizing this for payroll review.",thread:["Client attached payroll documents for this period.","Message should be categorized for payroll review."],summary:"Payroll documents are attached and ready to route to payroll workflow.",draft:"Hi, thanks. We received the payroll documents and will review them for the current period."},{id:"email-5",subject:"Missing March receipts",sender:"Elena Morris",senderEmail:"elena@maple-therapy.ca",body:"I thought I sent the March receipts, but I may have missed the attachment. Can you let me know what you still need?",category:"Missing documents",urgency:"Medium",confidence:88,suggestedAction:"Prepare follow-up draft",requiresDraft:!0,assignedTo:"emp-2",status:"Open",explanation:"Courio flagged this because the email talks about receipts and a possibly missing attachment, which usually needs a document follow-up.",thread:["Client mentions March receipts but no attachments are present.","Follow-up should request the missing files."],summary:"March receipts appear to be missing. Prepare a concise document request.",draft:"Hi, thanks for the note. It looks like the March receipts were not attached. Could you resend them when convenient?"},{id:"email-6",subject:"Can we move tomorrow's appointment?",sender:"Jordan Lee",senderEmail:"jordan@greenway-landscaping.ca",body:"Something came up with our crew schedule. Can we move tomorrow's appointment to next Tuesday afternoon?",category:"Scheduling",urgency:"Low",confidence:82,suggestedAction:"Offer available times",requiresDraft:!0,assignedTo:"emp-5",status:"Open",explanation:"Courio identified a scheduling change request with a proposed new time, so it suggested a simple scheduling reply.",thread:["Client asks to move an appointment from tomorrow to next Tuesday afternoon.","No urgent sentiment or billing issue detected."],summary:"Client wants to reschedule tomorrow's appointment to next Tuesday afternoon.",draft:"Hi, thanks for letting us know. Next Tuesday afternoon should work on our side. Could you confirm your preferred time window?"}],te=[{id:"emp-1",name:"Nadia Patel",title:"Owner",email:"nadia@courio-demo.ca",department:"Leadership"},{id:"emp-2",name:"Marcus Roy",title:"Bookkeeper",email:"marcus@courio-demo.ca",department:"Accounting"},{id:"emp-3",name:"Sofia Tremblay",title:"Client Success Lead",email:"sofia@courio-demo.ca",department:"Sales"},{id:"emp-4",name:"Daniel Kim",title:"Payroll Specialist",email:"daniel@courio-demo.ca",department:"Payroll"},{id:"emp-5",name:"Avery Brooks",title:"Office Coordinator",email:"avery@courio-demo.ca",department:"Operations"}],ae=[{id:"rule-1",title:"Supplier invoice routing",desc:"Categorize supplier invoices and payment requests, then notify the accounting contact.",category:"Accounting",confidence:91,explanation:"Courio looks for invoice numbers, payment wording, supplier senders, and due-date language.",impact:"Would have matched 31 messages this month.",matches:["Invoice #1844 payment status","Supplier payment confirmation"],on:!0},{id:"rule-2",title:"Client escalation detection",desc:"Flag negative sentiment, repeated follow-ups, or unanswered client messages older than 48 hours.",category:"Client complaint",confidence:94,explanation:"Courio looks for negative sentiment, repeated follow-ups, and requests for owner attention.",impact:"Would have flagged 4 high-risk threads in the last 14 days.",matches:["Very unhappy about no response"],on:!0},{id:"rule-3",title:"Quote request intake",desc:"Prepare standardized draft replies for new prospects requesting pricing or availability.",category:"Sales",confidence:86,explanation:"Courio looks for pricing requests, new prospect language, and service-fit details.",impact:"Would have prepared 6 drafts this month.",matches:["Quote request for monthly bookkeeping"],on:!1},{id:"rule-4",title:"Missing document follow-up",desc:"Prepare client reminders when required documents are mentioned but not attached.",category:"Missing documents",confidence:88,explanation:"Courio looks for missing attachment wording, receipt requests, and document follow-up language.",impact:"Useful for bookkeeping, accounting, insurance, and service teams.",matches:["Missing March receipts"],on:!1}],F="courio.mockState.v1",B="courio.assistantHistory.v1",w={emails:structuredClone(W),employees:structuredClone(te),rules:structuredClone(ae),drafts:W.map(a=>({id:a.id,emailId:a.id,title:a.suggestedAction,source:a.subject,text:a.draft,confidence:a.confidence,risk:a.urgency==="High"?"High":"Low",generated:!1,reviewed:!1,status:"Needs approval"})),settings:{productName:"Courio",mode:"Simple",companyName:"Demo PME Inc.",defaultMode:"Observation only",escalationRecipient:"owner@company.ca",confidenceThreshold:"80",observationDays:"7",allowLowRiskBulkApproval:"Yes",approvalRequired:!0,autoSend:!1},completedActions:[],deletedEmployeeIds:[],deletedRuleIds:[]},l=se();let S=ie();const u=(a=550)=>new Promise(e=>setTimeout(e,a));function c(a){return structuredClone(a)}function se(){try{const a=window.localStorage.getItem(F);if(!a)return c(w);const e=JSON.parse(a),t={...c(w),...e,emails:A(w.emails,e.emails),employees:A(w.employees.filter(i=>!(e.deletedEmployeeIds||[]).includes(i.id)),(e.employees||[]).filter(i=>!(e.deletedEmployeeIds||[]).includes(i.id))),rules:A(w.rules.filter(i=>!(e.deletedRuleIds||[]).includes(i.id)),(e.rules||[]).filter(i=>!(e.deletedRuleIds||[]).includes(i.id))),drafts:A(w.drafts,e.drafts),settings:{...w.settings,...e.settings||{}}};return t.drafts.forEach(i=>{if(!g(i))return;const n=t.emails.find(r=>r.id===(i.emailId||i.id));n&&(n.status="Done",n.workflowStatus="Completed")}),t}catch{return c(w)}}function A(a,e=[]){const t=a.map(n=>{const r=e.find(o=>o.id===n.id);return r?{...n,...r}:c(n)}),i=e.filter(n=>!a.some(r=>r.id===n.id));return[...t,...i.map(c)]}function f(){window.localStorage.setItem(F,JSON.stringify(l))}function ie(){try{const a=window.localStorage.getItem(B);return a?JSON.parse(a):[{id:"assistant-welcome",role:"assistant",text:"Hi, I can help with urgent emails, invoices, drafts, digest updates, rules, and explanations."}]}catch{return[{id:"assistant-welcome",role:"assistant",text:"Hi, I can help with urgent emails, invoices, drafts, digest updates, rules, and explanations."}]}}function ne(){window.localStorage.setItem(B,JSON.stringify(S))}function re(){return l.settings.allowLowRiskBulkApproval!=="No"}function oe(){return!0}function I(a){return a.generated&&a.reviewed&&a.status==="Saved"}function g(a){return a.status==="Ready for human send"||a.status==="Approved"}function R(a,e={}){l.completedActions.unshift({id:`action-${Date.now()}-${Math.random().toString(16).slice(2)}`,type:a,completedAt:new Date().toISOString(),...e}),l.completedActions=l.completedActions.slice(0,50)}function V(a,e){e.status="Ready for human send",a.status="Done",a.workflowStatus="Completed",R("draft-approved",{emailId:a.id,draftId:e.id,label:`Draft approved and workflow completed: ${a.subject}`})}function L(a){const e=l.emails.find(r=>r.id===(a.emailId||a.id)),t=(e==null?void 0:e.status)||"Open",i=g(a),n=t!=="Done"&&I(a);return{...a,sourceEmailStatus:t,sourceWorkflowStatus:(e==null?void 0:e.workflowStatus)||"",approvalState:i?"ready_for_human_send":a.status==="Saved"?"saved":a.status==="Generated"?"generated":"needs_review",statusLabel:i?"Ready for human send":a.status,isReadyForHumanSend:i,canApprove:n,canSelectForBulkApproval:n,approvalBlocker:n?"":t==="Done"?"Source email is completed.":"Review this draft before approving."}}function T(a){const e=M(a.id),t=oe(),i=!!(e!=null&&e.generated||e!=null&&e.reviewed||g(e||{})),n=e?g(e):!1,r=a.status==="Done";return{...a,requiresDraft:t,draftId:i&&(e==null?void 0:e.id)||null,draftStatus:i&&(e==null?void 0:e.status)||null,draftStatusLabel:i?L(e).statusLabel:"No draft",draftReadyForHumanSend:n,workflowLabel:r?"Completed":t?n?"Draft approved":(e==null?void 0:e.status)==="Saved"?"Draft saved":i?"Draft in review":"Draft needed":a.reviewed?"Ready to complete":"Review required",canComplete:r?!1:t?n:!!a.reviewed,completeActionLabel:r?"Completed":"Done",draftActionLabel:r?"Draft locked":i?n?"View approved draft":"Edit draft":"Generate draft",canGenerateDraft:!r&&!i,canOpenDraft:i,completionBlocker:t&&!n?"This workflow still needs a draft before it can be completed.":""}}function le(a){const e=T(a);return e.canComplete?{allowed:!0,type:"mark-done",emailId:a.id,title:"Complete workflow",message:"Mark this workflow complete?",primaryLabel:"Mark complete"}:e.requiresDraft?e.draftId?{allowed:!1,type:"review-draft",emailId:a.id,draftId:e.draftId,title:"Draft approval needed",message:"This workflow needs a reviewed and approved draft before it can be completed.",primaryLabel:"Review draft"}:{allowed:!1,type:"generate-draft",emailId:a.id,title:"Draft needed",message:"This workflow still needs a draft before it can be completed.",primaryLabel:"Generate draft"}:{allowed:!1,type:"review-email",emailId:a.id,title:"Review required",message:"Review this email before completing the workflow.",primaryLabel:"Review email"}}function v(a){const e=l.emails.find(t=>t.id===a);if(!e)throw new Error("Email not found.");return e}function q(a){const e=l.drafts.find(t=>t.id===a);if(!e)throw new Error("Draft not found.");return e}function M(a){return l.drafts.find(e=>(e.emailId||e.id)===a)}function J(a){const e=l.employees.find(t=>t.id===a);if(!e)throw new Error("Employee not found.");return e}function K(){const a=l.emails.filter(o=>o.status!=="Done"),e=l.drafts.filter(o=>o.generated||o.reviewed||g(o)),t=e.filter(o=>g(o)).length,i=e.filter(o=>!g(o)).length,n=o=>a.filter(O=>O.category===o),r=a.filter(o=>o.urgency==="High");return{generatedAt:new Date().toLocaleTimeString([],{hour:"numeric",minute:"2-digit"}),headline:`${a.length} open emails need review. ${r.length} are urgent and ${i} drafts need approval.`,urgentItems:r.map(o=>o.subject),draftsAwaitingApproval:i,readyForHumanSend:t,invoices:n("Accounting").map(o=>o.subject),missingDocuments:n("Missing documents").map(o=>o.subject),quoteRequests:n("Sales").map(o=>o.subject),clientComplaints:n("Client complaint").map(o=>o.subject),recommendedActions:[r.length?"Review urgent client items first.":"No urgent client escalations are open.",i?"Review drafts before marking them ready for human send.":"No drafts are waiting for approval.","Keep observation mode on while this remains a demo."]}}function de(){const a=l.rules.find(t=>/invoice/i.test(`${t.title} ${t.desc}`));if(a)return a.on=!0,f(),a;const e={id:`rule-${Date.now()}`,title:"Invoice intake assistant",desc:"Flag invoice messages, payment questions, due dates, and supplier follow-ups for accounting review.",category:"Accounting",confidence:84,explanation:"Courio would look for invoice numbers, balance-due wording, supplier names, and payment timing.",impact:"Created locally from the assistant chat. It only previews matches in this prototype.",matches:l.emails.filter(t=>t.category==="Accounting").map(t=>t.subject),on:!0};return l.rules.push(e),f(),e}function ce(a,e={}){const t=a.trim().toLowerCase(),i=l.emails.filter(o=>o.status!=="Done"&&o.urgency==="High").length,n=l.emails.filter(o=>o.status!=="Done"&&o.category==="Accounting").length,r=l.drafts.filter(o=>!g(o)&&v(o.emailId||o.id).status!=="Done").length;if(/urgent/.test(t))return{text:`${i} urgent emails are open. I switched Triage to urgent items.`,action:{type:"show_triage",filter:"urgent"}};if(/invoice|invoices|accounting/.test(t)&&/create|rule/.test(t))return{text:"Invoice rule is ready in observation mode. It is still fake/local and will not touch a mailbox.",action:{type:"show_rule",ruleId:de().id}};if(/invoice|invoices|accounting/.test(t))return{text:`${n} invoice-related emails are open. I switched Triage to Accounting.`,action:{type:"show_triage",filter:"invoices"}};if(/draft/.test(t)&&/approval|approve|need|waiting/.test(t))return{text:`${r} drafts need human review or approval. I opened the Drafts queue.`,action:{type:"show_drafts",filter:"needs_approval"}};if(/digest|morning/.test(t))return{text:"I regenerated the morning digest from local demo data.",action:{type:"generate_digest",digest:K()}};if(/explain|why/.test(t)){if(!e.selectedEmailId)return{text:"Open an email in Triage first, then ask me to explain it. I will show the flagged reason."};const o=T(v(e.selectedEmailId));return{text:`Courio flagged "${o.subject}" because: ${o.explanation}`,action:{type:"explain_email",emailId:o.id}}}return/reset/.test(t)&&/demo|data/.test(t)?{text:"I can reset the fake demo data now. The page will reload so defaults come back clean.",action:{type:"reset_demo_data"}}:{text:"Try: Show urgent emails, Show invoices, Show drafts needing approval, Generate digest, Explain selected email, Create invoice rule, or Reset demo data."}}async function y(){return await u(),c(l.emails.map(T))}async function j(){return await u(350),c(l.employees)}async function D(){return await u(400),c(l.rules)}async function $(){return await u(700),c(K())}async function k(){return await u(400),c(l.drafts.filter(a=>a.generated||a.reviewed||g(a)).map(L))}async function E(a){await u(450);const e=q(a),t=v(e.emailId||e.id);return e.generated&&!e.reviewed&&(e.reviewed=!0,f()),c({...L(e),sourceEmail:{id:t.id,subject:t.subject,sender:t.sender,senderEmail:t.senderEmail,body:t.body,suggestedAction:t.suggestedAction,confidence:t.confidence,urgency:t.urgency,status:t.status,workflowStatus:t.workflowStatus}})}async function ue(a){await u(350),v(a);const e=M(a);return e?E(e.id):null}async function pe(){return await u(250),c(l.settings)}async function me(a){return await u(450),l.settings={...l.settings,...a,approvalRequired:!0,autoSend:!1},f(),c(l.settings)}async function fe(){return await u(350),window.localStorage.removeItem(F),window.localStorage.removeItem(B),c(w)}async function H(a){await u();const e=v(a);return e.reviewed||(e.reviewed=!0,e.reviewedAt=new Date().toISOString(),f()),c({...T(e),messages:e.thread})}async function ve(a){return await u(250),c(le(v(a)))}async function ge(a){return await u(700),v(a).summary}async function we(a){await u(750);const e=v(a);if(e.status==="Done")throw new Error("This email is done. Reopen it before creating or changing a draft.");let t=M(a);return t?t.status==="Needs approval"&&t.text===e.draft&&(t.generated=!0,t.status="Generated"):(t={id:a,emailId:a,title:e.suggestedAction,source:e.subject,text:e.draft,confidence:e.confidence,risk:e.urgency==="High"?"High":"Low",generated:!0,reviewed:!1,status:"Generated"},l.drafts.push(t)),e.workflowStatus=t.status==="Ready for human send"?"Draft approved":"Draft in review",f(),c(t)}async function ye(a,e){if(await u(),!e||e.trim().length<10)throw new Error("Draft is too short to save.");const t=q(a),i=v(t.emailId||t.id);if(i.status==="Done")throw new Error("This email is done. Reopen it before editing the draft.");return t.text=e,t.generated=!0,t.reviewed=!0,t.status="Saved",i.workflowStatus="Draft saved",f(),c(t)}async function he(a){await u();const e=q(a),t=v(e.emailId||e.id);if(t.status==="Done")throw new Error("This email is done. Reopen it before changing draft approval.");if(!I(e))throw new Error("Review this draft before approving.");return V(t,e),f(),c(L(e))}async function Y(a){if(await u(650),!a.length)throw new Error("Select at least one draft first.");const e=a.map(i=>{const n=q(i),r=v(n.emailId||n.id);return{draft:n,email:r}}).filter(({email:i})=>i.status!=="Done");if(!e.length)throw new Error("No selected drafts could be approved.");if(e.some(({draft:i})=>!I(i)))throw new Error("Review this draft before approving.");const t=[];for(const{draft:i,email:n}of e)V(n,i),t.push(i.id);return f(),c({approved:t})}async function be(){if(await u(700),!re())throw new Error("Low-risk bulk approval is disabled by workspace settings.");const a=l.drafts.filter(e=>e.risk!=="High").filter(I).filter(e=>v(e.emailId||e.id).status!=="Done").map(e=>e.id);if(!a.length)throw new Error("No low-risk drafts are awaiting approval.");return Y(a)}async function _(a){await u(450);const e=l.rules.find(t=>t.id===a);if(!e)throw new Error("Rule not found.");return e.on=!e.on,f(),c(e)}async function $e(a,e){var i,n;await u(500);const t=l.rules.find(r=>r.id===a);if(!t)throw new Error("Rule not found.");if(!((i=e.title)!=null&&i.trim()))throw new Error("Rule name is required.");if(!((n=e.desc)!=null&&n.trim()))throw new Error("Rule description is required.");return t.title=e.title.trim(),t.desc=e.desc.trim(),t.category=e.category||t.category,f(),c(t)}async function ke(a){await u(450);const e=l.rules.findIndex(i=>i.id===a);if(e===-1)throw new Error("Rule not found.");const[t]=l.rules.splice(e,1);return l.deletedRuleIds=[...new Set([...l.deletedRuleIds||[],a])],R("rule-deleted",{ruleId:t.id,label:`Rule deleted: ${t.title}`}),f(),c(t)}async function De(a){await u();const e=v(a),t=M(a);if(!g(t||{}))throw new Error("This workflow still needs a draft before it can be completed.");return e.status="Done",e.workflowStatus="Completed",R("email-done",{emailId:a,label:`Workflow completed: ${e.subject}`}),f(),c(e)}async function Ee(a,e){if(await u(400),!e)throw new Error("Choose a category before saving.");const t=v(a);return t.category=e,f(),c(t)}async function Se(a,e){await u(400),e&&J(e);const t=v(a);return t.assignedTo=e,f(),c(t)}async function Re(a){var t,i,n,r;if(await u(500),!((t=a.name)!=null&&t.trim()))throw new Error("Employee name is required.");if(!((i=a.email)!=null&&i.trim()))throw new Error("Employee email is required.");if(!((n=a.title)!=null&&n.trim()))throw new Error("Employee title is required.");if(!((r=a.department)!=null&&r.trim()))throw new Error("Employee department is required.");const e={id:`employee-${Date.now()}`,name:a.name.trim(),email:a.email.trim(),title:a.title.trim(),department:a.department.trim()};return l.employees.push(e),R("employee-added",{employeeId:e.id,label:`Employee added: ${e.name}`}),f(),c(e)}async function Ae(a,e){var i,n,r,o;await u(500);const t=J(a);if(!((i=e.name)!=null&&i.trim()))throw new Error("Employee name is required.");if(!((n=e.email)!=null&&n.trim()))throw new Error("Employee email is required.");if(!((r=e.title)!=null&&r.trim()))throw new Error("Employee title is required.");if(!((o=e.department)!=null&&o.trim()))throw new Error("Employee department is required.");return Object.assign(t,{name:e.name.trim(),email:e.email.trim(),title:e.title.trim(),department:e.department.trim()}),f(),c(t)}async function Ce(a){await u(500);const e=l.employees.findIndex(i=>i.id===a);if(e===-1)throw new Error("Employee not found.");const[t]=l.employees.splice(e,1);return l.deletedEmployeeIds=[...new Set([...l.deletedEmployeeIds||[],a])],l.emails.forEach(i=>{i.assignedTo===a&&(i.assignedTo="")}),R("employee-deleted",{employeeId:t.id,label:`Employee removed: ${t.name}`}),f(),c(t)}async function h(){return await u(250),c(l.completedActions)}async function xe(){return await u(150),c(S)}async function Ie(a,e={}){if(await u(500),!(a!=null&&a.trim()))throw new Error("Type a command first.");const t={id:`user-${Date.now()}`,role:"user",text:a.trim()},i=ce(a,e),n={id:`assistant-${Date.now()}`,role:"assistant",text:i.text};return S=[...S,t,n].slice(-24),ne(),c({messages:S,action:i.action||null})}const Le=document.querySelector("#app"),s={tab:"dashboard",emails:[],employees:[],rules:[],drafts:[],settings:{companyName:"Demo PME Inc.",mode:"Simple",defaultMode:"Observation only",escalationRecipient:"owner@company.ca",approvalRequired:!0,autoSend:!1},loading:{emails:!0,rules:!0,drafts:!0},busy:{},selectedEmail:null,selectedDraft:null,selectedRule:null,selectedEmployee:null,selectedDraftIds:[],confirmDialog:null,digest:null,triageFilter:"all",draftFilter:"all",ruleQuery:"",assistantOpen:!1,assistantMessages:[],activity:[],summary:"",showExplanation:!1};Le.innerHTML=`
  <div class="app">
    <aside>
      <div class="brand">
        <div class="brand-title">Courio</div>
        <div class="brand-sub">Assistant Outlook pour PME</div>
      </div>
      <nav class="nav">
        <div class="nav-group">
          <div class="nav-label">Home</div>
          <button class="active" data-tab="dashboard">Overview <small>Today</small></button>
        </div>
        <div class="nav-group">
          <div class="nav-label">Work</div>
          <button data-tab="triage">Triage <small>Inbox</small></button>
          <button data-tab="drafts">Drafts <small>Approval</small></button>
        </div>
        <div class="nav-group">
          <div class="nav-label">Automation</div>
          <button data-tab="rules">Rules <small>Preview</small></button>
        </div>
        <div class="nav-group">
          <div class="nav-label">Workspace</div>
          <button data-tab="import">Setup import <small>Microsoft 365</small></button>
          <button data-tab="admin">Admin <small>Settings</small></button>
        </div>
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
`;function G(a,e){s.busy[a]=e,m()}async function p(a,e,t){try{G(a,!0),await e(),t&&C(t)}catch(i){C(i.message||"Something went wrong in the mock workflow.",!0)}finally{G(a,!1)}}function d(a){return!!s.busy[a]}function C(a,e=!1){const t=document.querySelector("#toast");t.textContent=a,t.classList.toggle("error",e),t.classList.add("show"),window.clearTimeout(t.dataset.timer),t.dataset.timer=window.setTimeout(()=>t.classList.remove("show"),2400)}function Q(a){s.tab=a,m()}async function x(a=(e=>(e=s.selectedEmail)==null?void 0:e.id)()){if(s.emails=await y(),a){const t=s.emails.find(i=>i.id===a);s.selectedEmail=t?{...t,messages:t.thread}:null}}function z(a){return!!(a!=null&&a.isReadyForHumanSend)}function N(){return s.settings.mode==="Advanced"}function X(){return s.settings.allowLowRiskBulkApproval!=="No"}function b(a=""){return String(a).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}async function Te(){try{const[a,e,t,i,n,r,o,O]=await Promise.all([y(),j(),D(),k(),pe(),$(),xe(),h()]);s.emails=a,s.employees=e,s.rules=t,s.drafts=i,s.settings={...s.settings,...n},s.digest=r,s.assistantMessages=o,s.activity=O}catch(a){C(a.message||"Could not load mock data.",!0)}finally{s.loading.emails=!1,s.loading.rules=!1,s.loading.drafts=!1,m()}}function m(){document.querySelector("#pageTitle").textContent=P[s.tab][0],document.querySelector("#pageSubtitle").textContent=P[s.tab][1],document.querySelectorAll(".section").forEach(a=>{a.classList.toggle("active",a.id===s.tab)}),document.querySelectorAll(".nav button").forEach(a=>{a.classList.toggle("active",a.dataset.tab===s.tab)}),qe(),Me(),Ne(),Z(),Ge(),Ue(),Oe(),je(),Qe()}function qe(){const a=s.emails.filter(t=>t.status!=="Done").length,e=s.digest;document.querySelector("#dashboard").innerHTML=`
    <div class="grid cols-3">
      <div class="panel metric positive">
        <div class="label">Open emails</div>
        <div class="value">${s.loading.emails?"...":a}</div>
        <div class="caption">Built from local demo inbox data</div>
      </div>
      <div class="panel metric">
        <div class="label">Drafts awaiting approval</div>
        <div class="value">${s.drafts.filter(t=>!z(t)).length||0}</div>
        <div class="caption">No messages are sent automatically</div>
      </div>
      <div class="panel metric">
        <div class="label">Ready for human send</div>
        <div class="value">${s.drafts.filter(z).length||0}</div>
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
          <button class="btn primary" data-action="digest" ${d("digest")?"disabled":""}>${d("digest")?"Regenerating...":"Regenerate digest"}</button>
          <button class="btn subtle" data-tab-target="triage">Review triage</button>
        </div>
      </div>
      <div class="panel">
        <div class="panel-title"><h2>Recommended next actions</h2><span>${(e==null?void 0:e.recommendedActions.length)||0} items</span></div>
        <table class="table">
          ${((e==null?void 0:e.recommendedActions)||["Digest is loading."]).map(t=>`<tr><td><span class="badge lead">Action</span></td><td>${t}</td></tr>`).join("")}
          ${N()?`<tr><td><span class="badge invoice">Advanced</span></td><td>${s.rules.filter(t=>t.on).length} rules are currently enabled.</td></tr>`:""}
        </table>
      </div>
    </div>
  `}function Me(){const a=[["Connect Microsoft 365","Admin authorizes access to selected Outlook mailboxes, folders, categories, and contacts.","Connect"],["Import mailbox structure","Courio detects folders, categories, shared mailboxes, frequent senders, and existing work habits.","Import"],["Generate workflow suggestions","Suggested triage rules are created but remain inactive until approved.","View suggestions"],["Run in observation mode","The system previews actions for one week before any mailbox changes are enabled.","Enable"]];document.querySelector("#import").innerHTML=`
    <div class="panel">
      <div class="panel-title"><h2>Microsoft 365 setup import</h2><span>Designed to reduce switching friction</span></div>
      <div class="workflow">
        ${a.map((e,t)=>`
          <div class="step">
            <div class="step-num">${t+1}</div>
            <div><strong>${e[0]}</strong><p>${e[1]}</p></div>
            <button class="btn subtle" disabled title="Real Microsoft 365 setup is intentionally unavailable in this fake/local prototype.">
              Demo only
            </button>
          </div>
        `).join("")}
      </div>
    </div>
  `}function Ne(){const a=Object.fromEntries(s.employees.map(i=>[i.id,i])),e=s.emails.filter(i=>s.triageFilter==="urgent"?i.status!=="Done"&&i.urgency==="High":s.triageFilter==="invoices"?i.status!=="Done"&&i.category==="Accounting":!0),t=s.loading.emails?'<div class="loading">Loading mock inbox...</div>':e.length===0?`<div class="empty-state">${s.triageFilter==="urgent"?"No urgent emails. You are caught up on high-priority work.":s.triageFilter==="invoices"?"No invoice emails are waiting for review.":"No emails are available in this local demo."}</div>`:`<table class="table">
        <thead><tr><th>Subject</th><th>Sender</th><th>Category</th><th>Assigned</th><th>Workflow</th><th>Status</th><th></th></tr></thead>
        <tbody>
          ${e.map(i=>{var n;return`
            <tr>
              <td>${i.subject}</td>
              <td>${i.sender}<br><small>${i.senderEmail||""}</small></td>
              <td><span class="badge ${ee(i.category)}">${i.category}</span><br><small>${i.urgency||"Medium"} urgency - ${i.confidence||80}% confidence</small></td>
              <td>${((n=a[i.assignedTo])==null?void 0:n.name)||"Unassigned"}</td>
              <td>${i.workflowLabel||"Not started"}</td>
              <td><span class="badge ${i.status==="Done"?"done":""}">${i.status}</span></td>
              <td class="actions">
                <button class="btn subtle" data-review-email="${i.id}" ${d(`review-${i.id}`)?"disabled":""}>${d(`review-${i.id}`)?"Opening...":"Review"}</button>
                ${i.status==="Done"?'<span class="status-text">Complete</span>':i.requiresDraft?'<span class="status-text" title="Generate, review, and approve a draft to complete this workflow.">Draft required</span>':'<span class="status-text" title="Open the email and review its details before completing the workflow.">Review before completing</span>'}
              </td>
            </tr>
          `}).join("")}
        </tbody>
      </table>`;document.querySelector("#triage").innerHTML=`
    <div class="panel">
      <div class="panel-title"><h2>Inbox triage</h2><span>Suggested actions only</span></div>
      <div class="segmented" style="margin-bottom:14px">
        ${[["all","All inbox"],["urgent","Urgent"],["invoices","Invoices"]].map(([i,n])=>`<button class="${s.triageFilter===i?"active":""}" data-triage-filter="${i}">${n}</button>`).join("")}
      </div>
      ${t}
    </div>
  `}function Oe(){const a=document.querySelector("#drawerRoot");if(s.selectedEmployee){_e(a);return}if(s.selectedRule){We(a);return}if(s.selectedDraft){Pe(a);return}if(!s.selectedEmail){a.innerHTML="";return}const e=s.selectedEmail,t=e.status==="Done",i=s.employees.find(r=>r.id===e.assignedTo),n=["Client complaint","Accounting","Sales","Documents","Missing documents","Scheduling","General"];a.innerHTML=`
    <div class="drawer-backdrop" data-close-drawer></div>
    <aside class="review-drawer" aria-label="Email review">
      <div class="drawer-header">
        <div>
          <div class="badge ${ee(e.category)}">${e.category}</div>
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
            ${n.map(r=>`<option value="${r}" ${r===e.category?"selected":""}>${r}</option>`).join("")}
          </select>
        </label>
        <label>Assigned employee
          <select data-email-assignee="${e.id}">
            <option value="" ${e.assignedTo?"":"selected"}>Unassigned</option>
            ${s.employees.map(r=>`<option value="${r.id}" ${r.id===e.assignedTo?"selected":""}>${r.name} - ${r.department}</option>`).join("")}
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
          ${t?"This email is completed. Draft actions are locked unless the email is reopened later.":e.draftId?`${e.draftReadyForHumanSend?"Draft approved and ready for human send.":`Draft exists: ${e.draftStatusLabel}.`} One email uses one draft record.`:"No active draft exists for this email."}
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
        <ul>${e.messages.map(r=>`<li>${r}</li>`).join("")}</ul>
      </div>

      ${s.summary?`<div class="drawer-section"><h3>Summary</h3><div class="preview">${s.summary}</div></div>`:""}
      <div class="drawer-actions">
        <button class="btn primary" data-summary-email="${e.id}" ${d(`summary-${e.id}`)?"disabled":""}>${d(`summary-${e.id}`)?"Summarizing...":"Summarize"}</button>
        ${e.canOpenDraft?`<button class="btn subtle" data-open-email-draft="${e.id}" ${d(`open-email-draft-${e.id}`)?"disabled":""}>${e.draftActionLabel}</button>`:`<button class="btn subtle" data-generate-draft="${e.id}" ${!e.canGenerateDraft||d(`draft-${e.id}`)?`disabled title="${e.completionBlocker||"Draft action is unavailable."}"`:""}>${d(`draft-${e.id}`)?"Drafting...":e.draftActionLabel}</button>`}
        ${t?'<span class="status-text">Workflow complete</span>':e.requiresDraft?'<span class="status-text">Approving the draft completes this workflow.</span>':`<button class="btn success" data-done-email="${e.id}" ${d(`done-${e.id}`)?"disabled":""}>${d(`done-${e.id}`)?"Saving...":"Mark complete"}</button>`}
      </div>
      <p class="drawer-note">This is a local prototype. Courio does not send email.</p>
    </aside>
  `}function je(){const a=document.querySelector("#modalRoot");if(!s.confirmDialog){a.innerHTML="";return}const e=s.confirmDialog;a.innerHTML=`
    <div class="modal-backdrop"></div>
    <div class="confirm-modal" role="dialog" aria-modal="true">
      <h2>${e.title}</h2>
      <p>${e.message}</p>
      <div class="actions">
        <button class="btn ${e.tone==="danger"?"danger":"primary"}" data-confirm-primary>${e.primaryLabel}</button>
        <button class="btn subtle" data-confirm-cancel>Cancel</button>
      </div>
    </div>
  `}async function He(a){s.confirmDialog=await ve(a),m()}async function U(a){const e=await we(a);s.drafts=await k(),await x(a),s.selectedDraft=await E(e.id),s.selectedEmail=null}async function Fe(a){await De(a),await x(a),s.drafts=await k(),s.activity=await h(),s.digest=await $()}async function Be(a){var e;await he(a),s.drafts=await k(),s.emails=await y(),s.activity=await h(),s.digest=await $(),s.selectedDraftIds=s.selectedDraftIds.filter(t=>t!==a),((e=s.selectedDraft)==null?void 0:e.id)===a&&(s.selectedDraft=await E(a))}function Pe(a){const e=s.selectedDraft,t=e.sourceEmail||{},i=t.status==="Done";a.innerHTML=`
    <div class="drawer-backdrop" data-close-drawer></div>
    <aside class="review-drawer" aria-label="Draft review">
      <div class="drawer-header">
        <div>
          <div class="badge ${e.isReadyForHumanSend?"done":"pending"}">${e.statusLabel}</div>
          <h2>${e.title}</h2>
          <p>Source: ${t.subject||e.source}</p>
        </div>
        <button class="btn subtle" data-close-drawer>Close</button>
      </div>

      <div class="drawer-section">
        <h3>Source email</h3>
        <div class="preview">
          <strong>${t.sender||"Mock sender"}</strong><br>
          ${t.senderEmail||""}<br><br>
          ${t.body||"This draft is based on a local mock email."}
        </div>
      </div>

      <div class="drawer-grid">
        <div class="mini-stat"><span>Status</span><strong>${i?"Completed":e.statusLabel}</strong></div>
        <div class="mini-stat"><span>Risk level</span><strong>${e.risk||"Low"}</strong></div>
        <div class="mini-stat"><span>Confidence</span><strong>${e.confidence||t.confidence||80}%</strong></div>
        <div class="mini-stat"><span>Sending</span><strong>Never automatic</strong></div>
      </div>

      <div class="drawer-section">
        <h3>Suggested reply</h3>
        <div class="preview">${t.suggestedAction||e.title}</div>
      </div>

      <div class="drawer-section">
        <label>Editable draft body
          <textarea data-draft-editor>${e.text}</textarea>
        </label>
      </div>

      <div class="drawer-actions">
        ${i?'<span class="status-text">Workflow complete. This draft is ready for human send.</span>':`
            <button class="btn primary" data-save-draft="${e.id}" ${d(`save-${e.id}`)?"disabled":""}>${d(`save-${e.id}`)?"Saving...":"Save changes"}</button>
            <button class="btn success" data-approve-draft="${e.id}" ${!e.canApprove||d(`approve-${e.id}`)?`disabled title="${e.approvalBlocker||"Save the reviewed draft before approving."}"`:""}>${d(`approve-${e.id}`)?"Approving...":"Approve and complete"}</button>
          `}
        <button class="btn subtle" data-close-drawer>Close</button>
      </div>
      <p class="drawer-note">Approval completes this workflow and marks the draft ready for a person to send. Courio never sends email.</p>
    </aside>
  `}function We(a){var i;const e=s.selectedRule,t=["Client complaint","Accounting","Sales","Documents","Missing documents","Scheduling","General"];a.innerHTML=`
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
            ${t.map(n=>`<option value="${n}" ${n===e.category?"selected":""}>${n}</option>`).join("")}
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
        <ul>${(e.matches||["No sample matches yet."]).map(n=>`<li>${n}</li>`).join("")}</ul>
      </div>

      ${N()?`<div class="drawer-section"><h3>Advanced preview</h3><div class="preview">This rule uses the current confidence threshold of ${s.settings.confidenceThreshold||80}%. No mailbox changes happen in the prototype.</div></div>`:""}

      <div class="drawer-actions">
        <button class="btn primary" data-save-rule="${e.id}" ${d(`save-rule-${e.id}`)?"disabled":""}>${d(`save-rule-${e.id}`)?"Saving...":"Save rule"}</button>
        <button class="btn danger" data-delete-rule="${e.id}">Delete rule</button>
        <button class="btn subtle" data-close-drawer>Close</button>
      </div>
    </aside>
  `}function _e(a){const e=s.selectedEmployee,t=e.id==="new";a.innerHTML=`
    <div class="drawer-backdrop" data-close-drawer></div>
    <aside class="review-drawer" aria-label="${t?"Add employee":"Edit employee"}">
      <div class="drawer-header">
        <div>
          <div class="badge lead">Team member</div>
          <h2>${t?"Add employee":"Edit employee"}</h2>
          <p>${t?"Add a local demo team member.":`Reviewing ${e.name}`}</p>
        </div>
        <button class="btn subtle" data-close-drawer>Close</button>
      </div>

      <div class="drawer-section">
        <label>Name<input data-employee-field="name" value="${b(e.name||"")}"></label>
        <label>Email<input data-employee-field="email" type="email" value="${b(e.email||"")}"></label>
        <label>Title<input data-employee-field="title" value="${b(e.title||"")}"></label>
        <label>Department<input data-employee-field="department" value="${b(e.department||"")}"></label>
      </div>

      <div class="drawer-actions">
        <button class="btn primary" data-save-employee="${e.id}" ${d(`save-employee-${e.id}`)?"disabled":""}>${d(`save-employee-${e.id}`)?"Saving...":t?"Add employee":"Save changes"}</button>
        ${t?"":`<button class="btn danger" data-delete-employee="${e.id}">Remove employee</button>`}
        <button class="btn subtle" data-close-drawer>Close</button>
      </div>
      <p class="drawer-note">Employee records remain fake and local to this browser.</p>
    </aside>
  `}function Z(){const a=s.ruleQuery.trim().toLowerCase(),e=s.rules.filter(i=>!a||`${i.title} ${i.desc} ${i.category}`.toLowerCase().includes(a)),t=s.loading.rules?'<div class="loading">Loading suggested rules...</div>':e.length===0?`<div class="empty-state">${a?`No rules match “${b(s.ruleQuery)}”. Clear the search to see all local rules.`:"No rules yet. Local rule suggestions will appear here."}</div>`:`<div class="grid cols-2">
        ${e.map(i=>`
          <div class="rule-card">
            <div class="rule-top">
              <div>
                <div class="rule-title">${i.title}</div>
                <div class="rule-desc">${i.desc}</div>
              </div>
              <button class="toggle ${i.on?"on":""}" aria-label="Toggle ${i.title}" data-toggle-rule="${i.id}" ${d(`rule-${i.id}`)?"disabled":""}></button>
            </div>
            <div class="preview">${i.impact}</div>
            <div class="preview"><strong>${i.confidence||80}% confidence:</strong> ${i.explanation||"Based on local mock patterns."}</div>
            ${N()?`<div class="preview"><strong>Would match:</strong> ${(i.matches||["No samples"]).join(", ")}</div>`:""}
            <div class="actions">
              ${i.on?'<span class="status-text">In observation</span>':`<button class="btn primary" data-approve-rule="${i.id}" ${d(`approve-rule-${i.id}`)?"disabled":""}>${d(`approve-rule-${i.id}`)?"Approving...":"Approve for observation"}</button>`}
              <button class="btn subtle" data-edit-rule="${i.id}" ${d(`edit-rule-${i.id}`)?"disabled":""}>${d(`edit-rule-${i.id}`)?"Opening...":"Edit"}</button>
            </div>
          </div>
        `).join("")}
      </div>`;document.querySelector("#rules").innerHTML=`
    <div class="section-toolbar">
      <div><h2>Suggested rules</h2><span>${e.length} shown</span></div>
      <div class="list-toolbar">
        <input data-rule-search type="search" value="${b(s.ruleQuery)}" placeholder="Search rules">
      </div>
    </div>
    ${t}
  `}function Ge(){const a=s.selectedDraftIds.length,e=s.drafts.filter(r=>r.risk!=="High"&&r.canSelectForBulkApproval).length,t=!X(),i=s.drafts.filter(r=>s.draftFilter==="needs_approval"?r.canSelectForBulkApproval:s.draftFilter==="ready"?r.isReadyForHumanSend:!0),n=s.loading.drafts?'<div class="loading">Loading draft queue...</div>':i.length===0?`<div class="empty-state">${s.draftFilter==="needs_approval"?"No drafts need approval. Reviewed drafts will appear here when they are ready.":s.draftFilter==="ready"?"No drafts are ready for human send yet.":"No drafts are available in this local demo."}</div>`:`<table class="table">
        <thead><tr><th>Select</th><th>Draft</th><th>Source</th><th>Risk</th><th>Status</th><th></th></tr></thead>
        <tbody>
          ${i.map(r=>`
            <tr>
              <td><input type="checkbox" data-select-draft="${r.id}" ${s.selectedDraftIds.includes(r.id)?"checked":""} ${r.canSelectForBulkApproval?"":`disabled title="${r.approvalBlocker||"Review and save this draft first."}"`}></td>
              <td>${r.title}</td>
              <td>${r.source}</td>
              <td><span class="badge ${r.risk==="High"?"urgent":"done"}">${r.risk||"Low"}</span></td>
              <td><span class="badge ${r.isReadyForHumanSend?"done":"pending"}">${r.statusLabel}</span></td>
              <td class="actions">
                <button class="btn subtle" data-review-draft="${r.id}" ${d(`review-draft-${r.id}`)?"disabled":""}>${d(`review-draft-${r.id}`)?"Opening...":"Review"}</button>
                ${r.isReadyForHumanSend?'<span class="status-text">Workflow complete</span>':`<button class="btn success" data-approve-draft="${r.id}" ${!r.canApprove||d(`approve-${r.id}`)?`disabled title="${r.approvalBlocker||"Review and save this draft first."}"`:""}>${d(`approve-${r.id}`)?"Approving...":"Approve and complete"}</button>`}
              </td>
            </tr>
          `).join("")}
        </tbody>
      </table>`;document.querySelector("#drafts").innerHTML=`
    <div class="panel">
      <div class="panel-title"><h2>Draft approval queue</h2><span>Human approval required</span></div>
      <div class="segmented" style="margin-bottom:14px">
        ${[["all","All drafts"],["needs_approval","Needs approval"],["ready","Ready"]].map(([r,o])=>`<button class="${s.draftFilter===r?"active":""}" data-draft-filter="${r}">${o}</button>`).join("")}
      </div>
      <div class="actions" style="margin-bottom:14px">
        <button class="btn success" data-approve-selected ${a===0||d("approve-selected")?`disabled title="${a===0?"Select at least one reviewed and saved draft.":""}"`:""}>${d("approve-selected")?"Approving...":`Approve selected (${a})`}</button>
        <button class="btn subtle" data-approve-low-risk ${t||e===0||d("approve-low-risk")?`disabled title="${t?"Enable low-risk bulk approval in Advanced workspace settings.":e===0?"No reviewed low-risk drafts are ready for approval.":""}"`:""}>${t?"Low-risk bulk approval disabled":d("approve-low-risk")?"Approving...":`Approve all low-risk (${e})`}</button>
        <span class="mode">Approval completes the workflow; nothing is sent</span>
      </div>
      ${t?'<div class="preview" style="margin-bottom:14px">Low-risk bulk approval is disabled by workspace settings.</div>':""}
      ${n}
    </div>
  `}function Qe(){const a=document.querySelector("#assistantRoot"),e=s.assistantMessages.length?s.assistantMessages:[{id:"assistant-loading",role:"assistant",text:"Loading assistant history..."}];a.innerHTML=`
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
            ${e.map(t=>`
              <div class="assistant-message ${t.role}">
                ${b(t.text)}
              </div>
            `).join("")}
          </div>
          <form class="assistant-form">
            <input data-assistant-input placeholder="Show urgent emails" autocomplete="off" ${d("assistant")?"disabled":""}>
            <button class="btn primary" type="submit" ${d("assistant")?"disabled":""}>${d("assistant")?"Working...":"Send"}</button>
          </form>
        </div>
      `:""}
      <button class="assistant-fab" data-assistant-toggle aria-label="Open Courio assistant">
        AI
      </button>
    </div>
  `}async function ze(a){if(a){if(a.type==="show_triage"){s.tab="triage",s.triageFilter=a.filter||"all",s.selectedDraft=null,s.selectedRule=null,m();return}if(a.type==="show_drafts"){s.tab="drafts",s.draftFilter=a.filter||"all",s.selectedEmail=null,s.selectedRule=null,m();return}if(a.type==="generate_digest"){s.digest=a.digest||await $(),s.tab="dashboard",m();return}if(a.type==="explain_email"){s.selectedEmail=await H(a.emailId),s.selectedDraft=null,s.selectedRule=null,s.summary="",s.showExplanation=!0,s.tab="triage",s.triageFilter="all",m();return}if(a.type==="show_rule"){s.rules=await D(),s.selectedRule=s.rules.find(e=>e.id===a.ruleId)||null,s.selectedEmail=null,s.selectedDraft=null,s.tab="rules",m();return}a.type==="reset_demo_data"&&(s.confirmDialog={type:"reset-demo",title:"Reset demo data?",message:"This clears all local Courio changes and restores the original fake demo data.",primaryLabel:"Reset demo data",tone:"danger"},m())}}function Ue(){document.querySelector("#admin").innerHTML=`
    <div class="grid cols-2">
      <div class="panel">
        <div class="panel-title"><h2>Workspace settings</h2><span>Prototype</span></div>
        <div class="form-grid">
          <label>Company name<input data-setting="companyName" value="${s.settings.companyName||"Demo PME Inc."}"></label>
          <label>Mode
            <select data-setting="mode">
              ${["Simple","Advanced"].map(a=>`<option ${a===s.settings.mode?"selected":""}>${a}</option>`).join("")}
            </select>
          </label>
          <label>Escalation recipient<input data-setting="escalationRecipient" value="${s.settings.escalationRecipient||"owner@company.ca"}"></label>
          ${N()?`
          <label>Default mode
            <select data-setting="defaultMode">
              ${["Observation only","Drafts allowed, no auto-send","Auto-categorize after approval"].map(a=>`<option ${a===s.settings.defaultMode?"selected":""}>${a}</option>`).join("")}
            </select>
          </label>
          <label>Confidence threshold<input data-setting="confidenceThreshold" value="${s.settings.confidenceThreshold||"80"}"></label>
          <label>Observation days<input data-setting="observationDays" value="${s.settings.observationDays||"7"}"></label>
          <label>Low-risk bulk approval
            <select data-setting="allowLowRiskBulkApproval">
              ${["Yes","No"].map(a=>`<option ${a===s.settings.allowLowRiskBulkApproval?"selected":""}>${a}</option>`).join("")}
            </select>
          </label>
          `:'<div class="preview">Simple Mode keeps settings focused: company name, escalation recipient, and no automatic sending.</div>'}
          <button class="btn primary" data-save-settings ${d("settings")?"disabled":""}>${d("settings")?"Saving...":"Save settings"}</button>
          <button class="btn danger" data-reset-demo ${d("reset-demo")?"disabled":""}>${d("reset-demo")?"Resetting...":"Reset Demo Data"}</button>
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
        <div class="panel-title">
          <div><h2>Employee directory</h2><span>Mock team</span></div>
          <button class="btn primary" data-add-employee>Add employee</button>
        </div>
        ${s.employees.length===0?'<div class="empty-state">No employees yet. Add a team member to make triage assignments available.</div>':`<table class="table">
              <thead><tr><th>Name</th><th>Role</th><th>Department</th><th></th></tr></thead>
              <tbody>
                ${s.employees.map(a=>`
                  <tr>
                    <td>${a.name}<br><small>${a.email}</small></td>
                    <td>${a.title}</td>
                    <td>${a.department}</td>
                    <td><button class="btn subtle" data-edit-employee="${a.id}">Edit</button></td>
                  </tr>
                `).join("")}
              </tbody>
            </table>`}
      </div>
      <div class="panel">
        <div class="panel-title"><h2>Recent activity</h2><span>Local audit preview</span></div>
        ${s.activity.length===0?'<div class="empty-state">No activity yet. Completed workflows and team changes will appear here.</div>':`<div class="activity-list">
              ${s.activity.slice(0,8).map(a=>`
                <div class="activity-item">
                  <span>${b(a.label||"Local action completed")}</span>
                  <time>${new Date(a.completedAt).toLocaleString()}</time>
                </div>
              `).join("")}
            </div>`}
      </div>
    </div>
  `}function ee(a){return a==="Urgent"||a==="Client complaint"?"urgent":a==="Accounting"||a==="Documents"||a==="Missing documents"?"invoice":a==="Sales"?"lead":""}document.addEventListener("click",async a=>{const e=a.target.closest("button");if(e){if(e.dataset.assistantToggle!==void 0){s.assistantOpen=!s.assistantOpen,m();return}if(e.dataset.confirmCancel!==void 0){s.confirmDialog=null,m();return}if(e.dataset.confirmPrimary!==void 0){const t=s.confirmDialog;if(s.confirmDialog=null,(t==null?void 0:t.type)==="generate-draft"){await p(`draft-${t.emailId}`,async()=>{await U(t.emailId)},"Draft opened. Existing edits were preserved.");return}if((t==null?void 0:t.type)==="review-draft"){await p(`review-draft-${t.draftId}`,async()=>{s.selectedDraft=await E(t.draftId),s.selectedEmail=null,s.summary="",s.showExplanation=!1},"Draft opened for review.");return}if((t==null?void 0:t.type)==="review-email"){await p(`review-${t.emailId}`,async()=>{s.selectedEmail=await H(t.emailId),s.emails=await y(),s.selectedDraft=null,s.selectedRule=null,s.selectedEmployee=null,s.summary="",s.showExplanation=!1},"Email opened for review.");return}if((t==null?void 0:t.type)==="mark-done"){await p(`done-${t.emailId}`,async()=>{await Fe(t.emailId)},"Email marked done.");return}if((t==null?void 0:t.type)==="reset-demo"){await p("reset-demo",async()=>{await fe(),window.location.reload()});return}if((t==null?void 0:t.type)==="delete-rule"){await p(`delete-rule-${t.ruleId}`,async()=>{await ke(t.ruleId),s.rules=await D(),s.activity=await h(),s.selectedRule=null},"Rule deleted locally.");return}if((t==null?void 0:t.type)==="delete-employee"){await p(`delete-employee-${t.employeeId}`,async()=>{await Ce(t.employeeId),s.employees=await j(),s.emails=await y(),s.activity=await h(),s.selectedEmployee=null},"Employee removed and assigned emails returned to Unassigned.");return}}if(e.dataset.tab&&Q(e.dataset.tab),e.dataset.tabTarget&&Q(e.dataset.tabTarget),e.dataset.triageFilter&&(s.triageFilter=e.dataset.triageFilter,m()),e.dataset.draftFilter&&(s.draftFilter=e.dataset.draftFilter,m()),e.dataset.action==="digest"&&await p("digest",async()=>{s.digest=await $()},"Morning digest regenerated from local demo data."),e.dataset.reviewEmail){const t=e.dataset.reviewEmail;await p(`review-${t}`,async()=>{s.selectedEmail=await H(t),s.emails=await y(),s.selectedDraft=null,s.selectedRule=null,s.selectedEmployee=null,s.summary="",s.showExplanation=!1},"Message thread opened.")}if(e.dataset.reviewDraft){const t=e.dataset.reviewDraft;await p(`review-draft-${t}`,async()=>{s.selectedDraft=await E(t),s.selectedEmail=null,s.selectedRule=null,s.selectedEmployee=null,s.summary="",s.showExplanation=!1},"Draft opened for review.")}if(e.dataset.openEmailDraft){const t=e.dataset.openEmailDraft;await p(`open-email-draft-${t}`,async()=>{s.selectedDraft=await ue(t),s.selectedEmail=null,s.selectedRule=null,s.selectedEmployee=null,s.summary="",s.showExplanation=!1},"Draft opened for editing.")}if(e.dataset.closeDrawer!==void 0&&(s.selectedEmail=null,s.selectedDraft=null,s.selectedRule=null,s.selectedEmployee=null,s.summary="",s.showExplanation=!1,m()),e.dataset.toggleExplanation!==void 0&&(s.showExplanation=!s.showExplanation,m()),e.dataset.summaryEmail){const t=e.dataset.summaryEmail;await p(`summary-${t}`,async()=>{s.summary=await ge(t)},"Thread summary generated.")}if(e.dataset.generateDraft){const t=e.dataset.generateDraft;await p(`draft-${t}`,async()=>{await U(t)},"Draft opened. Existing edits were preserved.")}if(e.dataset.saveDraft){const t=e.dataset.saveDraft,i=document.querySelector("[data-draft-editor]");await p(`save-${t}`,async()=>{var n;await ye(t,i.value),s.drafts=await k(),s.emails=await y(),((n=s.selectedDraft)==null?void 0:n.id)===t&&(s.selectedDraft=await E(t))},"Draft saved locally.")}if(e.dataset.doneEmail){const t=e.dataset.doneEmail;await p(`check-done-${t}`,async()=>{await He(t)})}if(e.dataset.toggleRule){const t=e.dataset.toggleRule;await p(`rule-${t}`,async()=>{await _(t),s.rules=await D()},"Rule preview state updated.")}if(e.dataset.approveRule){const t=e.dataset.approveRule;await p(`approve-rule-${t}`,async()=>{s.rules.find(n=>n.id===t).on||await _(t),s.rules=await D()},"Rule approved for observation mode.")}if(e.dataset.editRule){const t=e.dataset.editRule;await p(`edit-rule-${t}`,async()=>{s.selectedRule=s.rules.find(i=>i.id===t),s.selectedEmail=null,s.selectedDraft=null,s.selectedEmployee=null},"Rule opened for local editing.")}if(e.dataset.saveRule){const t=e.dataset.saveRule,i=Object.fromEntries([...document.querySelectorAll("[data-rule-field]")].map(n=>[n.dataset.ruleField,n.value]));await p(`save-rule-${t}`,async()=>{await $e(t,i),s.rules=await D(),s.selectedRule=s.rules.find(n=>n.id===t)},"Rule saved locally.")}if(e.dataset.deleteRule){const t=e.dataset.deleteRule,i=s.rules.find(n=>n.id===t);s.confirmDialog={type:"delete-rule",ruleId:t,title:"Delete this rule?",message:`Delete “${(i==null?void 0:i.title)||"this rule"}” from the local demo?`,primaryLabel:"Delete rule",tone:"danger"},m()}if(e.dataset.addEmployee!==void 0&&(s.selectedEmployee={id:"new",name:"",email:"",title:"",department:""},s.selectedEmail=null,s.selectedDraft=null,s.selectedRule=null,m()),e.dataset.editEmployee&&(s.selectedEmployee=s.employees.find(t=>t.id===e.dataset.editEmployee)||null,s.selectedEmail=null,s.selectedDraft=null,s.selectedRule=null,m()),e.dataset.saveEmployee){const t=e.dataset.saveEmployee,i=Object.fromEntries([...document.querySelectorAll("[data-employee-field]")].map(n=>[n.dataset.employeeField,n.value]));await p(`save-employee-${t}`,async()=>{const n=t==="new"?await Re(i):await Ae(t,i);s.employees=await j(),s.activity=await h(),s.selectedEmployee=s.employees.find(r=>r.id===n.id)||null},t==="new"?"Employee added locally.":"Employee changes saved locally.")}if(e.dataset.deleteEmployee){const t=e.dataset.deleteEmployee,i=s.employees.find(n=>n.id===t);s.confirmDialog={type:"delete-employee",employeeId:t,title:"Remove this employee?",message:`Remove ${(i==null?void 0:i.name)||"this employee"}? Their assigned emails will return to Unassigned.`,primaryLabel:"Remove employee",tone:"danger"},m()}if(e.dataset.approveDraft){const t=e.dataset.approveDraft;await p(`approve-${t}`,async()=>{await Be(t)},"Draft approved and workflow completed. Nothing was sent.")}if(e.dataset.approveSelected!==void 0&&await p("approve-selected",async()=>{await Y(s.selectedDraftIds),s.drafts=await k(),s.emails=await y(),s.activity=await h(),s.digest=await $(),s.selectedDraftIds=[]},"Selected drafts approved and workflows completed. Nothing was sent."),e.dataset.approveLowRisk!==void 0){if(!X()){C("Low-risk bulk approval is disabled by workspace settings.",!0);return}await p("approve-low-risk",async()=>{await be(),s.drafts=await k(),s.emails=await y(),s.activity=await h(),s.digest=await $(),s.selectedDraftIds=[]},"Low-risk drafts approved and workflows completed. Nothing was sent.")}if(e.dataset.saveSettings!==void 0){const t=Object.fromEntries([...document.querySelectorAll("[data-setting]")].map(i=>[i.dataset.setting,i.value]));await p("settings",async()=>{s.settings=await me(t)},"Settings saved locally.")}e.dataset.resetDemo!==void 0&&(s.confirmDialog={type:"reset-demo",title:"Reset demo data?",message:"This clears all local Courio changes and restores the original fake demo data.",primaryLabel:"Reset demo data",tone:"danger"},m())}});document.addEventListener("change",async a=>{const e=a.target;if(e.dataset.setting==="mode"){s.settings.mode=e.value,m();return}if(e.dataset.setting==="allowLowRiskBulkApproval"){s.settings.allowLowRiskBulkApproval=e.value,m();return}if(e.dataset.emailCategory){const t=e.dataset.emailCategory;await p(`category-${t}`,async()=>{await Ee(t,e.value),await x(t)},"Category updated locally.")}if(e.dataset.emailAssignee){const t=e.dataset.emailAssignee;await p(`assign-${t}`,async()=>{await Se(t,e.value),await x(t)},"Email assignment updated locally.")}if(e.dataset.selectDraft){const t=e.dataset.selectDraft;s.selectedDraftIds=e.checked?[...new Set([...s.selectedDraftIds,t])]:s.selectedDraftIds.filter(i=>i!==t),m()}});document.addEventListener("input",a=>{const e=a.target;if(e.dataset.ruleSearch===void 0)return;s.ruleQuery=e.value,Z();const t=document.querySelector("[data-rule-search]");t==null||t.focus(),t==null||t.setSelectionRange(s.ruleQuery.length,s.ruleQuery.length)});document.addEventListener("submit",async a=>{const e=a.target.closest(".assistant-form");if(!e)return;a.preventDefault();const t=e.querySelector("[data-assistant-input]"),i=t.value.trim();i&&await p("assistant",async()=>{var r;const n=await Ie(i,{selectedEmailId:((r=s.selectedEmail)==null?void 0:r.id)||null});s.assistantMessages=n.messages,t.value="",await ze(n.action)})});m();Te();
