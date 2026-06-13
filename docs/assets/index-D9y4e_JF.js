(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function a(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(n){if(n.ep)return;n.ep=!0;const r=a(n);fetch(n.href,r)}})();const Y={dashboard:["Overview","A professional workflow layer for Outlook: triage, summaries, routing suggestions, and draft preparation for small and mid-sized businesses."],import:["Setup import","Import the client's Microsoft 365 mailbox structure, categories, contacts, and existing workflow patterns."],triage:["Inbox triage","Review AI-classified messages before any action is taken."],rules:["Rules","Approve or adjust suggested workflow rules before they affect the mailbox."],drafts:["Drafts","Review prepared replies before they are sent through Outlook."],admin:["Admin","Control approval modes, escalation, security, and Microsoft 365 access."]},de=[{id:"email-1",subject:"Very unhappy about no response",sender:"Maya Chen",senderEmail:"maya@northstar-retail.ca",body:"I have followed up twice and still have not received an answer about the service issue from last week. We need someone senior to respond today.",category:"Client complaint",urgency:"High",confidence:94,suggestedAction:"Escalate to owner",requiresDraft:!0,assignedTo:"emp-1",explanation:"Courio flagged this because the client mentions repeated follow-ups, no response, and asks for senior attention today.",thread:["Client followed up twice about an unanswered service issue.","The last message uses negative sentiment and asks for owner attention."],summary:"Client is frustrated by delayed response. Recommend owner review today.",draft:"Hi, thank you for the follow-up. I'm sorry this has taken longer than expected. I am escalating this now and will make sure you receive a clear update today."},{id:"email-2",subject:"Invoice #1844 payment status",sender:"Alex Rivera",senderEmail:"alex@brightline-supplies.ca",body:"Could you confirm whether invoice #1844 has been approved for payment? It was due last Friday.",category:"Accounting",urgency:"Medium",confidence:89,suggestedAction:"Route to accounting",requiresDraft:!0,assignedTo:"emp-2",explanation:"Courio saw an invoice number, payment-status wording, and a due-date reference, so it suggested accounting review.",thread:["Supplier asks whether invoice #1844 has been scheduled for payment.","Invoice appears related to recurring monthly services."],summary:"Supplier is requesting a payment-status update for invoice #1844.",draft:"Hi, thanks for checking in. We are reviewing invoice #1844 with accounting and will send a status update shortly."},{id:"email-3",subject:"Quote request for monthly bookkeeping",sender:"Priya Nair",senderEmail:"priya@lakeside-catering.ca",body:"We are looking for monthly bookkeeping help for a small catering business. We have six employees and would like pricing before the end of the week.",category:"Sales",urgency:"Medium",confidence:86,suggestedAction:"Prepare intake draft",requiresDraft:!0,assignedTo:"emp-3",explanation:"Courio matched this to sales because the sender asks for pricing, describes company needs, and appears to be a new prospect.",thread:["New prospect requested pricing for monthly bookkeeping.","They mentioned six employees and monthly receipt volume."],summary:"New lead is asking for bookkeeping pricing. Intake details are partially available.",draft:"Hi, thanks for reaching out. We'd be happy to help with monthly bookkeeping. Could you share your approximate monthly transaction count and preferred start date?"},{id:"email-4",subject:"Payroll documents attached",sender:"Tom Bennett",senderEmail:"tom@harbour-grill.ca",body:"Please find this period's payroll documents attached. Let me know if anything is missing before Thursday.",category:"Documents",urgency:"Low",confidence:91,suggestedAction:"Apply payroll category",requiresDraft:!0,assignedTo:"emp-4",explanation:"Courio detected payroll wording and an attachment reference, so it suggested categorizing this for payroll review.",thread:["Client attached payroll documents for this period.","Message should be categorized for payroll review."],summary:"Payroll documents are attached and ready to route to payroll workflow.",draft:"Hi, thanks. We received the payroll documents and will review them for the current period."},{id:"email-5",subject:"Missing March receipts",sender:"Elena Morris",senderEmail:"elena@maple-therapy.ca",body:"I thought I sent the March receipts, but I may have missed the attachment. Can you let me know what you still need?",category:"Missing documents",urgency:"Medium",confidence:88,suggestedAction:"Prepare follow-up draft",requiresDraft:!0,assignedTo:"emp-2",explanation:"Courio flagged this because the email talks about receipts and a possibly missing attachment, which usually needs a document follow-up.",thread:["Client mentions March receipts but no attachments are present.","Follow-up should request the missing files."],summary:"March receipts appear to be missing. Prepare a concise document request.",draft:"Hi, thanks for the note. It looks like the March receipts were not attached. Could you resend them when convenient?"},{id:"email-6",subject:"Can we move tomorrow's appointment?",sender:"Jordan Lee",senderEmail:"jordan@greenway-landscaping.ca",body:"Something came up with our crew schedule. Can we move tomorrow's appointment to next Tuesday afternoon?",category:"Scheduling",urgency:"Low",confidence:82,suggestedAction:"Offer available times",requiresDraft:!0,assignedTo:"emp-5",explanation:"Courio identified a scheduling change request with a proposed new time, so it suggested a simple scheduling reply.",thread:["Client asks to move an appointment from tomorrow to next Tuesday afternoon.","No urgent sentiment or billing issue detected."],summary:"Client wants to reschedule tomorrow's appointment to next Tuesday afternoon.",draft:"Hi, thanks for letting us know. Next Tuesday afternoon should work on our side. Could you confirm your preferred time window?"}],ce=[{id:"emp-1",name:"Nadia Patel",title:"Owner",email:"nadia@courio-demo.ca",department:"Leadership"},{id:"emp-2",name:"Marcus Roy",title:"Bookkeeper",email:"marcus@courio-demo.ca",department:"Accounting"},{id:"emp-3",name:"Sofia Tremblay",title:"Client Success Lead",email:"sofia@courio-demo.ca",department:"Sales"},{id:"emp-4",name:"Daniel Kim",title:"Payroll Specialist",email:"daniel@courio-demo.ca",department:"Payroll"},{id:"emp-5",name:"Avery Brooks",title:"Office Coordinator",email:"avery@courio-demo.ca",department:"Operations"}],ue=[{id:"rule-1",title:"Supplier invoice routing",desc:"Categorize supplier invoices and payment requests, then notify the accounting contact.",category:"Accounting",confidence:91,explanation:"Courio looks for invoice numbers, payment wording, supplier senders, and due-date language.",impact:"Would have matched 31 messages this month.",matches:["Invoice #1844 payment status","Supplier payment confirmation"],on:!0},{id:"rule-2",title:"Client escalation detection",desc:"Flag negative sentiment, repeated follow-ups, or unanswered client messages older than 48 hours.",category:"Client complaint",confidence:94,explanation:"Courio looks for negative sentiment, repeated follow-ups, and requests for owner attention.",impact:"Would have flagged 4 high-risk threads in the last 14 days.",matches:["Very unhappy about no response"],on:!0},{id:"rule-3",title:"Quote request intake",desc:"Prepare standardized draft replies for new prospects requesting pricing or availability.",category:"Sales",confidence:86,explanation:"Courio looks for pricing requests, new prospect language, and service-fit details.",impact:"Would have prepared 6 drafts this month.",matches:["Quote request for monthly bookkeeping"],on:!1},{id:"rule-4",title:"Missing document follow-up",desc:"Prepare client reminders when required documents are mentioned but not attached.",category:"Missing documents",confidence:88,explanation:"Courio looks for missing attachment wording, receipt requests, and document follow-up language.",impact:"Useful for bookkeeping, accounting, insurance, and service teams.",matches:["Missing March receipts"],on:!1}],F="courio.mockState.v1",B="courio.assistantHistory.v1",P=2,d=Object.freeze({NEEDS_REVIEW:"needs_review",READY_FOR_DRAFT:"ready_for_draft",DRAFT_GENERATED:"draft_generated",DRAFT_REVIEWED:"draft_reviewed",DRAFT_SAVED:"draft_saved",COMPLETED:"completed"}),pe=new Set(Object.values(d)),D={schemaVersion:P,emails:de.map(me),employees:structuredClone(ce),rules:structuredClone(ue),drafts:[],settings:{productName:"Courio",mode:"Simple",companyName:"Demo PME Inc.",defaultMode:"Observation only",escalationRecipient:"owner@company.ca",confidenceThreshold:"80",observationDays:"7",allowLowRiskBulkApproval:"Yes",approvalRequired:!0,autoSend:!1},completedActions:[],deletedEmployeeIds:[],deletedRuleIds:[]},l=fe();let C=be();const p=(t=550)=>new Promise(e=>setTimeout(e,t));function u(t){return structuredClone(t)}function me(t){const{status:e,workflowStatus:a,reviewed:i,...n}=u(t);return{...n,workflowState:d.NEEDS_REVIEW}}function fe(){try{const t=window.localStorage.getItem(F);if(!t)return u(D);const e=JSON.parse(t),a=ge(e);return window.localStorage.setItem(F,JSON.stringify(a)),a}catch{return u(D)}}function ge(t){const e=t.deletedEmployeeIds||[],a=t.deletedRuleIds||[],i=j(D.emails,t.emails),n=Array.isArray(t.drafts)?t.drafts:[],r=we(n),o=i.map(g=>{const re=r.find(Q=>(Q.emailId||Q.id)===g.id),oe=ve(g,re,t.schemaVersion),{status:pt,workflowStatus:mt,reviewed:ft,...le}=g;return{...le,workflowState:oe}}),b=new Map(o.map(g=>[g.id,g])),w=r.filter(g=>ye(g,b.get(g.emailId||g.id))).map(he);return{...u(D),...t,schemaVersion:P,emails:o,employees:j(D.employees.filter(g=>!e.includes(g.id)),(t.employees||[]).filter(g=>!e.includes(g.id))),rules:j(D.rules.filter(g=>!a.includes(g.id)),(t.rules||[]).filter(g=>!a.includes(g.id))),drafts:w,settings:{...D.settings,...t.settings||{}},completedActions:Array.isArray(t.completedActions)?t.completedActions:[],deletedEmployeeIds:e,deletedRuleIds:a}}function ve(t,e,a){return a>=P&&pe.has(t.workflowState)?t.workflowState:t.status==="Done"||t.workflowStatus==="Completed"||(e==null?void 0:e.status)==="Ready for human send"||(e==null?void 0:e.status)==="Approved"?d.COMPLETED:(e==null?void 0:e.status)==="Saved"?d.DRAFT_SAVED:e!=null&&e.reviewed?d.DRAFT_REVIEWED:e!=null&&e.generated||(e==null?void 0:e.status)==="Generated"?d.DRAFT_GENERATED:t.reviewed||t.reviewedAt?d.READY_FOR_DRAFT:d.NEEDS_REVIEW}function we(t){const e=new Map;for(const a of t){const i=(a==null?void 0:a.emailId)||(a==null?void 0:a.id);if(!i)continue;const n=e.get(i);(!n||U(a)>U(n))&&e.set(i,a)}return[...e.values()]}function U(t){return({"Needs approval":0,Generated:1,Saved:3,"Ready for human send":4,Approved:4}[t.status]||0)+(t.generated?1:0)+(t.reviewed?1:0)}function ye(t,e){return!t||!e?!1:!!(t.generated||t.reviewed||["Generated","Saved","Ready for human send","Approved"].includes(t.status)||[d.DRAFT_GENERATED,d.DRAFT_REVIEWED,d.DRAFT_SAVED,d.COMPLETED].includes(e.workflowState))}function he(t){const{generated:e,reviewed:a,status:i,...n}=u(t);return{...n,emailId:t.emailId||t.id}}function j(t,e=[]){const a=Array.isArray(e)?e:[],i=t.map(r=>{const o=a.find(b=>b.id===r.id);return o?{...r,...o}:u(r)}),n=a.filter(r=>!t.some(o=>o.id===r.id));return[...i,...n.map(u)]}function v(){window.localStorage.setItem(F,JSON.stringify(l))}function be(){try{const t=window.localStorage.getItem(B);return t?JSON.parse(t):[{id:"assistant-welcome",role:"assistant",text:"Hi, I can help with urgent emails, invoices, drafts, digest updates, rules, and explanations."}]}catch{return[{id:"assistant-welcome",role:"assistant",text:"Hi, I can help with urgent emails, invoices, drafts, digest updates, rules, and explanations."}]}}function $e(){window.localStorage.setItem(B,JSON.stringify(C))}function Ee(){return l.settings.allowLowRiskBulkApproval!=="No"}function De(){return!0}function y(t){return t.workflowState===d.COMPLETED}function V(t){const e=l.emails.find(a=>a.id===(t.emailId||t.id));return(e==null?void 0:e.workflowState)===d.DRAFT_SAVED}function _(t){return{[d.NEEDS_REVIEW]:"Review required",[d.READY_FOR_DRAFT]:"Draft needed",[d.DRAFT_GENERATED]:"Draft generated",[d.DRAFT_REVIEWED]:"Draft in review",[d.DRAFT_SAVED]:"Draft saved",[d.COMPLETED]:"Completed"}[t]||"Review required"}function X(t){return{[d.DRAFT_GENERATED]:"Generated",[d.DRAFT_REVIEWED]:"In review",[d.DRAFT_SAVED]:"Saved",[d.COMPLETED]:"Ready for human send"}[t]||"No draft"}function O(t,e={}){l.completedActions.unshift({id:`action-${Date.now()}-${Math.random().toString(16).slice(2)}`,type:t,completedAt:new Date().toISOString(),...e}),l.completedActions=l.completedActions.slice(0,50)}function Z(t,e){t.workflowState=d.COMPLETED,e.approvedAt=new Date().toISOString(),e.updatedAt=e.approvedAt,O("draft-approved",{emailId:t.id,draftId:e.id,label:`Draft approved and workflow completed: ${t.subject}`})}function $(t){const e=l.emails.find(o=>o.id===(t.emailId||t.id)),a=y(e||{})?"Done":"Open",i=y(e||{}),n=(e==null?void 0:e.workflowState)===d.DRAFT_SAVED,r=X(e==null?void 0:e.workflowState);return{...t,sourceEmailStatus:a,sourceWorkflowStatus:_(e==null?void 0:e.workflowState),approvalState:i?"ready_for_human_send":(e==null?void 0:e.workflowState)===d.DRAFT_SAVED?"saved":(e==null?void 0:e.workflowState)===d.DRAFT_GENERATED?"generated":"needs_review",status:r,statusLabel:r,isReadyForHumanSend:i,canApprove:n,canSelectForBulkApproval:n,approvalBlocker:n?"":i?"Source email is completed.":"Review and save this draft before approving."}}function G(t){const e=z(t.id),a=De(),i=!!e,n=y(t),r=n,o=t.workflowState!==d.NEEDS_REVIEW;return{...t,reviewed:o,status:r?"Done":"Open",workflowStatus:_(t.workflowState),requiresDraft:a,draftId:i&&(e==null?void 0:e.id)||null,draftStatus:i?X(t.workflowState):null,draftStatusLabel:i?$(e).statusLabel:"No draft",draftReadyForHumanSend:n,workflowLabel:_(t.workflowState),canComplete:!1,completeActionLabel:"Completed",draftActionLabel:r?"View approved draft":i?"Edit draft":"Generate draft",canGenerateDraft:t.workflowState===d.READY_FOR_DRAFT&&!i,canOpenDraft:i,completionBlocker:o?r?"This workflow is complete.":i?"Open the existing draft to continue this workflow.":"":"Review this email before generating a draft."}}function h(t){const e=l.emails.find(a=>a.id===t);if(!e)throw new Error("Email not found.");return e}function N(t){const e=l.drafts.find(a=>a.id===t);if(!e)throw new Error("Draft not found.");return e}function z(t){return l.drafts.find(e=>(e.emailId||e.id)===t)}function ee(t){const e=l.employees.find(a=>a.id===t);if(!e)throw new Error("Employee not found.");return e}function ke(){const t=l.emails.filter(o=>!y(o)),e=l.drafts.map($),a=e.filter(o=>o.isReadyForHumanSend).length,i=e.filter(o=>o.canSelectForBulkApproval).length,n=o=>t.filter(b=>b.category===o),r=t.filter(o=>o.urgency==="High");return{generatedAt:new Date().toLocaleTimeString([],{hour:"numeric",minute:"2-digit"}),headline:`${t.length} open emails need review. ${r.length} are urgent and ${i} drafts need approval.`,urgentItems:r.map(o=>o.subject),draftsAwaitingApproval:i,readyForHumanSend:a,invoices:n("Accounting").map(o=>o.subject),missingDocuments:n("Missing documents").map(o=>o.subject),quoteRequests:n("Sales").map(o=>o.subject),clientComplaints:n("Client complaint").map(o=>o.subject),recommendedActions:[r.length?"Review urgent client items first.":"No urgent client escalations are open.",i?"Review drafts before marking them ready for human send.":"No drafts are waiting for approval.","Keep observation mode on while this remains a demo."]}}function Se(){const t=l.rules.find(a=>/invoice/i.test(`${a.title} ${a.desc}`));if(t)return t.on=!0,v(),t;const e={id:`rule-${Date.now()}`,title:"Invoice intake assistant",desc:"Flag invoice messages, payment questions, due dates, and supplier follow-ups for accounting review.",category:"Accounting",confidence:84,explanation:"Courio would look for invoice numbers, balance-due wording, supplier names, and payment timing.",impact:"Created locally from the assistant chat. It only previews matches in this prototype.",matches:l.emails.filter(a=>a.category==="Accounting").map(a=>a.subject),on:!0};return l.rules.push(e),v(),e}function Re(t){return t.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9\s]/g," ").replace(/\s+/g," ")}function Ae(t,e){const a=Array.from({length:e.length+1},(i,n)=>n);for(let i=1;i<=t.length;i+=1){let n=a[0];a[0]=i;for(let r=1;r<=e.length;r+=1){const o=a[r],b=t[i-1]===e[r-1]?0:1;a[r]=Math.min(a[r]+1,a[r-1]+1,n+b),n=o}}return a[e.length]}function Te(t,e){if(t.length!==e.length)return!1;const a=[];for(let i=0;i<t.length;i+=1)t[i]!==e[i]&&a.push(i);return a.length===2&&a[1]===a[0]+1&&t[a[0]]===e[a[1]]&&t[a[1]]===e[a[0]]}function E(t,e){const a=t.split(" ").filter(Boolean);return e.some(i=>i.includes(" ")?t.includes(i):a.some(n=>{if(n===i||Te(n,i))return!0;const r=i.length>=7?2:i.length>=4?1:0;return r>0&&Math.abs(n.length-i.length)<=r&&Ae(n,i)<=r}))}function Ie(t,e={}){const a=Re(t),i=l.emails.filter(w=>!y(w)&&w.urgency==="High").length,n=l.emails.filter(w=>!y(w)&&w.category==="Accounting").length,r=l.drafts.map($).filter(w=>w.canSelectForBulkApproval).length,o=E(a,["invoice","invoices","accounting"]),b=E(a,["rule","rules","create rule"]);if(E(a,["urgent","urgency"]))return{text:`${i} urgent emails are open. I switched Triage to urgent items.`,action:{type:"show_triage",filter:"urgent"}};if(E(a,["triage","inbox","show inbox","open inbox"]))return{text:"I opened the full Triage inbox.",action:{type:"show_triage",filter:"all"}};if(o&&b)return{text:"Invoice rule is ready in observation mode. It is still fake/local and will not touch a mailbox.",action:{type:"show_rule",ruleId:Se().id}};if(o)return{text:`${n} invoice-related emails are open. I switched Triage to Accounting.`,action:{type:"show_triage",filter:"invoices"}};if(E(a,["draft","drafts","approval","approve"]))return{text:`${r} saved drafts need human approval. I opened the Drafts queue.`,action:{type:"show_drafts",filter:"needs_approval"}};if(E(a,["digest","morning digest"]))return{text:"I regenerated the morning digest from local demo data.",action:{type:"generate_digest"}};if(E(a,["explain","explanation","why"])){if(!e.selectedEmailId)return{text:"Open an email in Triage first, then ask me to explain it. I will show the flagged reason."};const w=G(h(e.selectedEmailId));return{text:`Courio flagged "${w.subject}" because: ${w.explanation}`,action:{type:"explain_email",emailId:w.id}}}return E(a,["reset","restart"])?{text:"I can reset the fake demo data now. The page will reload so defaults come back clean.",action:{type:"reset_demo_data"}}:{text:"I did not catch that. Try one of the command hints below."}}async function k(){return await p(),u(l.emails.map(G))}async function H(){return await p(350),u(l.employees)}async function T(){return await p(400),u(l.rules)}async function I(){return await p(700),u(ke())}async function x(){return await p(400),u(l.drafts.map($))}async function L(t){await p(450);const e=N(t),a=h(e.emailId||e.id);return a.workflowState===d.DRAFT_GENERATED&&(a.workflowState=d.DRAFT_REVIEWED,e.reviewedAt=new Date().toISOString(),e.updatedAt=e.reviewedAt,v()),u({...$(e),sourceEmail:{id:a.id,subject:a.subject,sender:a.sender,senderEmail:a.senderEmail,body:a.body,suggestedAction:a.suggestedAction,confidence:a.confidence,urgency:a.urgency,status:y(a)?"Done":"Open",workflowStatus:_(a.workflowState)}})}async function xe(t){await p(350),h(t);const e=z(t);return e?L(e.id):null}async function Ce(){return await p(250),u(l.settings)}async function Le(t){return await p(450),l.settings={...l.settings,...t,approvalRequired:!0,autoSend:!1},v(),u(l.settings)}async function Fe(){return await p(350),window.localStorage.removeItem(F),window.localStorage.removeItem(B),u(D)}async function te(t){await p();const e=h(t);return e.workflowState===d.NEEDS_REVIEW&&(e.workflowState=d.READY_FOR_DRAFT,e.reviewedAt=new Date().toISOString(),v()),u({...G(e),messages:e.thread})}async function _e(t){return await p(700),h(t).summary}async function Me(t){await p(750);const e=h(t);if(y(e))throw new Error("This email is done. Reopen it before creating or changing a draft.");if(e.workflowState===d.NEEDS_REVIEW)throw new Error("Review this email before generating a draft.");const a=z(t);if(a)return u($(a));if(e.workflowState!==d.READY_FOR_DRAFT)throw new Error("This workflow is not ready to generate a new draft.");const i=new Date().toISOString(),n={id:`draft-${t}`,emailId:t,title:e.suggestedAction,source:e.subject,text:e.draft,confidence:e.confidence,risk:e.urgency==="High"?"High":"Low",createdAt:i,updatedAt:i};return l.drafts.push(n),e.workflowState=d.DRAFT_GENERATED,v(),u($(n))}async function Oe(t,e){if(await p(),!e||e.trim().length<10)throw new Error("Draft is too short to save.");const a=N(t),i=h(a.emailId||a.id);if(y(i))throw new Error("This email is done. Reopen it before editing the draft.");if(![d.DRAFT_REVIEWED,d.DRAFT_SAVED].includes(i.workflowState))throw new Error("Review this draft before saving it.");return a.text=e,a.updatedAt=new Date().toISOString(),i.workflowState=d.DRAFT_SAVED,v(),u($(a))}async function Ne(t){await p();const e=N(t),a=h(e.emailId||e.id);if(y(a))throw new Error("This email is done. Reopen it before changing draft approval.");if(!V(e))throw new Error("Review this draft before approving.");return Z(a,e),v(),u($(e))}async function ae(t){if(await p(650),!t.length)throw new Error("Select at least one draft first.");const e=t.map(i=>{const n=N(i),r=h(n.emailId||n.id);return{draft:n,email:r}}).filter(({email:i})=>!y(i));if(!e.length)throw new Error("No selected drafts could be approved.");if(e.some(({draft:i})=>!V(i)))throw new Error("Review this draft before approving.");const a=[];for(const{draft:i,email:n}of e)Z(n,i),a.push(i.id);return v(),u({approved:a})}async function qe(){if(await p(700),!Ee())throw new Error("Low-risk bulk approval is disabled by workspace settings.");const t=l.drafts.filter(e=>e.risk!=="High").filter(V).filter(e=>!y(h(e.emailId||e.id))).map(e=>e.id);if(!t.length)throw new Error("No low-risk drafts are awaiting approval.");return ae(t)}async function K(t){await p(450);const e=l.rules.find(a=>a.id===t);if(!e)throw new Error("Rule not found.");return e.on=!e.on,v(),u(e)}async function je(t,e){var i,n;await p(500);const a=l.rules.find(r=>r.id===t);if(!a)throw new Error("Rule not found.");if(!((i=e.title)!=null&&i.trim()))throw new Error("Rule name is required.");if(!((n=e.desc)!=null&&n.trim()))throw new Error("Rule description is required.");return a.title=e.title.trim(),a.desc=e.desc.trim(),a.category=e.category||a.category,v(),u(a)}async function He(t){await p(450);const e=l.rules.findIndex(i=>i.id===t);if(e===-1)throw new Error("Rule not found.");const[a]=l.rules.splice(e,1);return l.deletedRuleIds=[...new Set([...l.deletedRuleIds||[],t])],O("rule-deleted",{ruleId:a.id,label:`Rule deleted: ${a.title}`}),v(),u(a)}async function We(t,e){if(await p(400),!e)throw new Error("Choose a category before saving.");const a=h(t);return a.category=e,v(),u(a)}async function Be(t,e){await p(400),e&&ee(e);const a=h(t);return a.assignedTo=e,v(),u(a)}async function Pe(t){var a,i,n,r;if(await p(500),!((a=t.name)!=null&&a.trim()))throw new Error("Employee name is required.");if(!((i=t.email)!=null&&i.trim()))throw new Error("Employee email is required.");if(!((n=t.title)!=null&&n.trim()))throw new Error("Employee title is required.");if(!((r=t.department)!=null&&r.trim()))throw new Error("Employee department is required.");const e={id:`employee-${Date.now()}`,name:t.name.trim(),email:t.email.trim(),title:t.title.trim(),department:t.department.trim()};return l.employees.push(e),O("employee-added",{employeeId:e.id,label:`Employee added: ${e.name}`}),v(),u(e)}async function Ve(t,e){var i,n,r,o;await p(500);const a=ee(t);if(!((i=e.name)!=null&&i.trim()))throw new Error("Employee name is required.");if(!((n=e.email)!=null&&n.trim()))throw new Error("Employee email is required.");if(!((r=e.title)!=null&&r.trim()))throw new Error("Employee title is required.");if(!((o=e.department)!=null&&o.trim()))throw new Error("Employee department is required.");return Object.assign(a,{name:e.name.trim(),email:e.email.trim(),title:e.title.trim(),department:e.department.trim()}),v(),u(a)}async function Ge(t){await p(500);const e=l.employees.findIndex(i=>i.id===t);if(e===-1)throw new Error("Employee not found.");const[a]=l.employees.splice(e,1);return l.deletedEmployeeIds=[...new Set([...l.deletedEmployeeIds||[],t])],l.emails.forEach(i=>{i.assignedTo===t&&(i.assignedTo="")}),O("employee-deleted",{employeeId:a.id,label:`Employee removed: ${a.name}`}),v(),u(a)}async function R(){return await p(250),u(l.completedActions)}async function ze(){return await p(150),u(C)}async function Qe(t,e={}){if(await p(500),!(t!=null&&t.trim()))throw new Error("Type a command first.");const a={id:`user-${Date.now()}`,role:"user",text:t.trim()},i=Ie(t,e),n={id:`assistant-${Date.now()}`,role:"assistant",text:i.text};return C=[...C,a,n].slice(-24),$e(),u({messages:C,action:i.action||null})}const Ye=document.querySelector("#app"),Ue=new Set(["dashboard","import","triage","rules","drafts","admin"]),s={tab:"dashboard",emails:[],employees:[],rules:[],drafts:[],settings:{companyName:"Demo PME Inc.",mode:"Simple",defaultMode:"Observation only",escalationRecipient:"owner@company.ca",approvalRequired:!0,autoSend:!1},loading:{emails:!0,rules:!0,drafts:!0},busy:{},selectedEmail:null,selectedDraft:null,selectedRule:null,selectedEmployee:null,selectedDraftIds:[],confirmDialog:null,digest:null,triageFilter:"all",draftFilter:"all",ruleQuery:"",assistantOpen:!1,assistantMessages:[],activity:[],summary:"",showExplanation:!1};Ye.innerHTML=`
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
`;function J(t,e){s.busy[t]=e,f()}async function m(t,e,a){try{J(t,!0),await e(),a&&M(a)}catch(i){M(i.message||"Something went wrong in the mock workflow.",!0)}finally{J(t,!1)}}function c(t){return!!s.busy[t]}function M(t,e=!1){const a=document.querySelector("#toast");a.textContent=t,a.classList.toggle("error",e),a.classList.add("show"),window.clearTimeout(a.dataset.timer),a.dataset.timer=window.setTimeout(()=>a.classList.remove("show"),2400)}function A(t,e={}){if(!Ue.has(t))throw new Error("That Courio section is unavailable.");s.tab=t,e.triageFilter&&(s.triageFilter=e.triageFilter),e.draftFilter&&(s.draftFilter=e.draftFilter),e.closeDrawers!==!1&&(s.selectedEmail=null,s.selectedDraft=null,s.selectedRule=null,s.selectedEmployee=null,s.summary="",s.showExplanation=!1),f()}async function W(t=(e=>(e=s.selectedEmail)==null?void 0:e.id)()){if(s.emails=await k(),t){const a=s.emails.find(i=>i.id===t);s.selectedEmail=a?{...a,messages:a.thread}:null}}function Ke(t){return!!(t!=null&&t.isReadyForHumanSend)}function q(){return s.settings.mode==="Advanced"}function se(){return s.settings.allowLowRiskBulkApproval!=="No"}function S(t=""){return String(t).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}async function Je(){try{const[t,e,a,i,n,r,o,b]=await Promise.all([k(),H(),T(),x(),Ce(),I(),ze(),R()]);s.emails=t,s.employees=e,s.rules=a,s.drafts=i,s.settings={...s.settings,...n},s.digest=r,s.assistantMessages=o,s.activity=b}catch(t){M(t.message||"Could not load mock data.",!0)}finally{s.loading.emails=!1,s.loading.rules=!1,s.loading.drafts=!1,f()}}function f(){document.querySelector("#pageTitle").textContent=Y[s.tab][0],document.querySelector("#pageSubtitle").textContent=Y[s.tab][1],document.querySelectorAll(".section").forEach(t=>{t.classList.toggle("active",t.id===s.tab)}),document.querySelectorAll(".nav button").forEach(t=>{t.classList.toggle("active",t.dataset.tab===s.tab)}),Xe(),Ze(),et(),ie(),lt(),ut(),tt(),at(),dt()}function Xe(){const t=s.emails.filter(a=>a.status!=="Done").length,e=s.digest;document.querySelector("#dashboard").innerHTML=`
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
        <div class="value">${s.drafts.filter(Ke).length||0}</div>
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
          <button class="btn primary" data-action="digest" ${c("digest")?"disabled":""}>${c("digest")?"Regenerating...":"Regenerate digest"}</button>
          <button class="btn subtle" data-tab-target="triage">Review triage</button>
        </div>
      </div>
      <div class="panel">
        <div class="panel-title"><h2>Recommended next actions</h2><span>${(e==null?void 0:e.recommendedActions.length)||0} items</span></div>
        <table class="table">
          ${((e==null?void 0:e.recommendedActions)||["Digest is loading."]).map(a=>`<tr><td><span class="badge lead">Action</span></td><td>${a}</td></tr>`).join("")}
          ${q()?`<tr><td><span class="badge invoice">Advanced</span></td><td>${s.rules.filter(a=>a.on).length} rules are currently enabled.</td></tr>`:""}
        </table>
      </div>
    </div>
  `}function Ze(){const t=[["Connect Microsoft 365","Admin authorizes access to selected Outlook mailboxes, folders, categories, and contacts.","Connect"],["Import mailbox structure","Courio detects folders, categories, shared mailboxes, frequent senders, and existing work habits.","Import"],["Generate workflow suggestions","Suggested triage rules are created but remain inactive until approved.","View suggestions"],["Run in observation mode","The system previews actions for one week before any mailbox changes are enabled.","Enable"]];document.querySelector("#import").innerHTML=`
    <div class="panel">
      <div class="panel-title"><h2>Microsoft 365 setup import</h2><span>Designed to reduce switching friction</span></div>
      <div class="workflow">
        ${t.map((e,a)=>`
          <div class="step">
            <div class="step-num">${a+1}</div>
            <div><strong>${e[0]}</strong><p>${e[1]}</p></div>
            <button class="btn subtle" disabled title="Real Microsoft 365 setup is intentionally unavailable in this fake/local prototype.">
              Demo only
            </button>
          </div>
        `).join("")}
      </div>
    </div>
  `}function et(){const t=Object.fromEntries(s.employees.map(i=>[i.id,i])),e=s.emails.filter(i=>s.triageFilter==="urgent"?i.status!=="Done"&&i.urgency==="High":s.triageFilter==="invoices"?i.status!=="Done"&&i.category==="Accounting":!0),a=s.loading.emails?'<div class="loading">Loading mock inbox...</div>':e.length===0?`<div class="empty-state">${s.triageFilter==="urgent"?"No urgent emails. You are caught up on high-priority work.":s.triageFilter==="invoices"?"No invoice emails are waiting for review.":"No emails are available in this local demo."}</div>`:`<table class="table">
        <thead><tr><th>Subject</th><th>Sender</th><th>Category</th><th>Assigned</th><th>Workflow</th><th>Status</th><th></th></tr></thead>
        <tbody>
          ${e.map(i=>{var n;return`
            <tr>
              <td>${i.subject}</td>
              <td>${i.sender}<br><small>${i.senderEmail||""}</small></td>
              <td><span class="badge ${ne(i.category)}">${i.category}</span><br><small>${i.urgency||"Medium"} urgency - ${i.confidence||80}% confidence</small></td>
              <td>${((n=t[i.assignedTo])==null?void 0:n.name)||"Unassigned"}</td>
              <td>${i.workflowLabel||"Not started"}</td>
              <td><span class="badge ${i.status==="Done"?"done":""}">${i.status}</span></td>
              <td class="actions">
                <button class="btn subtle" data-review-email="${i.id}" ${c(`review-${i.id}`)?"disabled":""}>${c(`review-${i.id}`)?"Opening...":"Review"}</button>
                ${i.status==="Done"?'<span class="status-text">Complete</span>':'<span class="status-text" title="Generate, review, save, and approve a draft to complete this workflow.">Draft required</span>'}
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
      ${a}
    </div>
  `}function tt(){const t=document.querySelector("#drawerRoot");if(s.selectedEmployee){ot(t);return}if(s.selectedRule){rt(t);return}if(s.selectedDraft){nt(t);return}if(!s.selectedEmail){t.innerHTML="";return}const e=s.selectedEmail,a=e.status==="Done",i=s.employees.find(r=>r.id===e.assignedTo),n=["Client complaint","Accounting","Sales","Documents","Missing documents","Scheduling","General"];t.innerHTML=`
    <div class="drawer-backdrop" data-close-drawer></div>
    <aside class="review-drawer" aria-label="Email review">
      <div class="drawer-header">
        <div>
          <div class="badge ${ne(e.category)}">${e.category}</div>
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
        <ul>${e.messages.map(r=>`<li>${r}</li>`).join("")}</ul>
      </div>

      ${s.summary?`<div class="drawer-section"><h3>Summary</h3><div class="preview">${s.summary}</div></div>`:""}
      <div class="drawer-actions">
        <button class="btn primary" data-summary-email="${e.id}" ${c(`summary-${e.id}`)?"disabled":""}>${c(`summary-${e.id}`)?"Summarizing...":"Summarize"}</button>
        ${e.canOpenDraft?`<button class="btn subtle" data-open-email-draft="${e.id}" ${c(`open-email-draft-${e.id}`)?"disabled":""}>${e.draftActionLabel}</button>`:`<button class="btn subtle" data-generate-draft="${e.id}" ${!e.canGenerateDraft||c(`draft-${e.id}`)?`disabled title="${e.completionBlocker||"Draft action is unavailable."}"`:""}>${c(`draft-${e.id}`)?"Drafting...":e.draftActionLabel}</button>`}
        ${a?'<span class="status-text">Workflow complete</span>':'<span class="status-text">Approving the draft completes this workflow.</span>'}
      </div>
      <p class="drawer-note">This is a local prototype. Courio does not send email.</p>
    </aside>
  `}function at(){const t=document.querySelector("#modalRoot");if(!s.confirmDialog){t.innerHTML="";return}const e=s.confirmDialog;t.innerHTML=`
    <div class="modal-backdrop"></div>
    <div class="confirm-modal" role="dialog" aria-modal="true">
      <h2>${e.title}</h2>
      <p>${e.message}</p>
      <div class="actions">
        <button class="btn ${e.tone==="danger"?"danger":"primary"}" data-confirm-primary>${e.primaryLabel}</button>
        <button class="btn subtle" data-confirm-cancel>Cancel</button>
      </div>
    </div>
  `}async function st(t){const e=await Me(t);s.drafts=await x(),await W(t),s.selectedDraft=await L(e.id),s.selectedEmail=null}async function it(t){var e;await Ne(t),s.drafts=await x(),s.emails=await k(),s.activity=await R(),s.digest=await I(),s.selectedDraftIds=s.selectedDraftIds.filter(a=>a!==t),((e=s.selectedDraft)==null?void 0:e.id)===t&&(s.selectedDraft=await L(t))}function nt(t){const e=s.selectedDraft,a=e.sourceEmail||{},i=a.status==="Done";t.innerHTML=`
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
        ${i?'<span class="status-text">Workflow complete. This draft is ready for human send.</span>':`
            <button class="btn primary" data-save-draft="${e.id}" ${c(`save-${e.id}`)?"disabled":""}>${c(`save-${e.id}`)?"Saving...":"Save changes"}</button>
            <button class="btn success" data-approve-draft="${e.id}" ${!e.canApprove||c(`approve-${e.id}`)?`disabled title="${e.approvalBlocker||"Save the reviewed draft before approving."}"`:""}>${c(`approve-${e.id}`)?"Approving...":"Approve and complete"}</button>
          `}
        <button class="btn subtle" data-close-drawer>Close</button>
      </div>
      <p class="drawer-note">Approval completes this workflow and marks the draft ready for a person to send. Courio never sends email.</p>
    </aside>
  `}function rt(t){var i;const e=s.selectedRule,a=["Client complaint","Accounting","Sales","Documents","Missing documents","Scheduling","General"];t.innerHTML=`
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
            ${a.map(n=>`<option value="${n}" ${n===e.category?"selected":""}>${n}</option>`).join("")}
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

      ${q()?`<div class="drawer-section"><h3>Advanced preview</h3><div class="preview">This rule uses the current confidence threshold of ${s.settings.confidenceThreshold||80}%. No mailbox changes happen in the prototype.</div></div>`:""}

      <div class="drawer-actions">
        <button class="btn primary" data-save-rule="${e.id}" ${c(`save-rule-${e.id}`)?"disabled":""}>${c(`save-rule-${e.id}`)?"Saving...":"Save rule"}</button>
        <button class="btn danger" data-delete-rule="${e.id}">Delete rule</button>
        <button class="btn subtle" data-close-drawer>Close</button>
      </div>
    </aside>
  `}function ot(t){const e=s.selectedEmployee,a=e.id==="new";t.innerHTML=`
    <div class="drawer-backdrop" data-close-drawer></div>
    <aside class="review-drawer" aria-label="${a?"Add employee":"Edit employee"}">
      <div class="drawer-header">
        <div>
          <div class="badge lead">Team member</div>
          <h2>${a?"Add employee":"Edit employee"}</h2>
          <p>${a?"Add a local demo team member.":`Reviewing ${e.name}`}</p>
        </div>
        <button class="btn subtle" data-close-drawer>Close</button>
      </div>

      <div class="drawer-section">
        <label>Name<input data-employee-field="name" value="${S(e.name||"")}"></label>
        <label>Email<input data-employee-field="email" type="email" value="${S(e.email||"")}"></label>
        <label>Title<input data-employee-field="title" value="${S(e.title||"")}"></label>
        <label>Department<input data-employee-field="department" value="${S(e.department||"")}"></label>
      </div>

      <div class="drawer-actions">
        <button class="btn primary" data-save-employee="${e.id}" ${c(`save-employee-${e.id}`)?"disabled":""}>${c(`save-employee-${e.id}`)?"Saving...":a?"Add employee":"Save changes"}</button>
        ${a?"":`<button class="btn danger" data-delete-employee="${e.id}">Remove employee</button>`}
        <button class="btn subtle" data-close-drawer>Close</button>
      </div>
      <p class="drawer-note">Employee records remain fake and local to this browser.</p>
    </aside>
  `}function ie(){const t=s.ruleQuery.trim().toLowerCase(),e=s.rules.filter(i=>!t||`${i.title} ${i.desc} ${i.category}`.toLowerCase().includes(t)),a=s.loading.rules?'<div class="loading">Loading suggested rules...</div>':e.length===0?`<div class="empty-state">${t?`No rules match “${S(s.ruleQuery)}”. Clear the search to see all local rules.`:"No rules yet. Local rule suggestions will appear here."}</div>`:`<div class="grid cols-2">
        ${e.map(i=>`
          <div class="rule-card">
            <div class="rule-top">
              <div>
                <div class="rule-title">${i.title}</div>
                <div class="rule-desc">${i.desc}</div>
              </div>
              <button class="toggle ${i.on?"on":""}" aria-label="Toggle ${i.title}" data-toggle-rule="${i.id}" ${c(`rule-${i.id}`)?"disabled":""}></button>
            </div>
            <div class="preview">${i.impact}</div>
            <div class="preview"><strong>${i.confidence||80}% confidence:</strong> ${i.explanation||"Based on local mock patterns."}</div>
            ${q()?`<div class="preview"><strong>Would match:</strong> ${(i.matches||["No samples"]).join(", ")}</div>`:""}
            <div class="actions">
              ${i.on?'<span class="status-text">In observation</span>':`<button class="btn primary" data-approve-rule="${i.id}" ${c(`approve-rule-${i.id}`)?"disabled":""}>${c(`approve-rule-${i.id}`)?"Approving...":"Approve for observation"}</button>`}
              <button class="btn subtle" data-edit-rule="${i.id}" ${c(`edit-rule-${i.id}`)?"disabled":""}>${c(`edit-rule-${i.id}`)?"Opening...":"Edit"}</button>
            </div>
          </div>
        `).join("")}
      </div>`;document.querySelector("#rules").innerHTML=`
    <div class="section-toolbar">
      <div><h2>Suggested rules</h2><span>${e.length} shown</span></div>
      <div class="list-toolbar">
        <input data-rule-search type="search" value="${S(s.ruleQuery)}" placeholder="Search rules">
      </div>
    </div>
    ${a}
  `}function lt(){const t=s.selectedDraftIds.length,e=s.drafts.filter(r=>r.risk!=="High"&&r.canSelectForBulkApproval).length,a=!se(),i=s.drafts.filter(r=>s.draftFilter==="needs_approval"?r.canSelectForBulkApproval:s.draftFilter==="ready"?r.isReadyForHumanSend:!0),n=s.loading.drafts?'<div class="loading">Loading draft queue...</div>':i.length===0?`<div class="empty-state">${s.draftFilter==="needs_approval"?"No drafts need approval. Reviewed drafts will appear here when they are ready.":s.draftFilter==="ready"?"No drafts are ready for human send yet.":"No drafts are available in this local demo."}</div>`:`<table class="table">
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
                <button class="btn subtle" data-review-draft="${r.id}" ${c(`review-draft-${r.id}`)?"disabled":""}>${c(`review-draft-${r.id}`)?"Opening...":"Review"}</button>
                ${r.isReadyForHumanSend?'<span class="status-text">Workflow complete</span>':`<button class="btn success" data-approve-draft="${r.id}" ${!r.canApprove||c(`approve-${r.id}`)?`disabled title="${r.approvalBlocker||"Review and save this draft first."}"`:""}>${c(`approve-${r.id}`)?"Approving...":"Approve and complete"}</button>`}
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
        <button class="btn success" data-approve-selected ${t===0||c("approve-selected")?`disabled title="${t===0?"Select at least one reviewed and saved draft.":""}"`:""}>${c("approve-selected")?"Approving...":`Approve selected (${t})`}</button>
        <button class="btn subtle" data-approve-low-risk ${a||e===0||c("approve-low-risk")?`disabled title="${a?"Enable low-risk bulk approval in Advanced workspace settings.":e===0?"No reviewed low-risk drafts are ready for approval.":""}"`:""}>${a?"Low-risk bulk approval disabled":c("approve-low-risk")?"Approving...":`Approve all low-risk (${e})`}</button>
        <span class="mode">Approval completes the workflow; nothing is sent</span>
      </div>
      ${a?'<div class="preview" style="margin-bottom:14px">Low-risk bulk approval is disabled by workspace settings.</div>':""}
      ${n}
    </div>
  `}function dt(){const t=document.querySelector("#assistantRoot"),e=s.assistantMessages.length?s.assistantMessages:[{id:"assistant-loading",role:"assistant",text:"Loading assistant history..."}];t.innerHTML=`
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
              <div class="assistant-message ${a.role==="user"?"user":"bot"}">
                ${S(a.text)}
              </div>
            `).join("")}
          </div>
          <form class="assistant-form">
            <input data-assistant-input placeholder="Show urgent emails" autocomplete="off" ${c("assistant")?"disabled":""}>
            <button class="btn primary" type="submit" ${c("assistant")?"disabled":""}>${c("assistant")?"Working...":"Send"}</button>
          </form>
          <p class="assistant-hint">Try: triage, urgent emails, drafts, invoices, digest, invoice rule, or reset.</p>
        </div>
      `:""}
      <button class="assistant-fab" data-assistant-toggle aria-label="Open Courio assistant">
        AI
      </button>
    </div>
  `}async function ct(t){if(t){if(t.type==="show_triage"){A("triage",{triageFilter:t.filter||"all"});return}if(t.type==="show_drafts"){A("drafts",{draftFilter:t.filter||"all"});return}if(t.type==="generate_digest"){s.digest=await I(),A("dashboard");return}if(t.type==="explain_email"){s.selectedEmail=await te(t.emailId),s.selectedDraft=null,s.selectedRule=null,s.selectedEmployee=null,s.summary="",s.showExplanation=!0,A("triage",{triageFilter:"all",closeDrawers:!1});return}if(t.type==="show_rule"){s.rules=await T(),s.selectedRule=s.rules.find(e=>e.id===t.ruleId)||null,s.selectedEmail=null,s.selectedDraft=null,s.selectedEmployee=null,A("rules",{closeDrawers:!1});return}t.type==="reset_demo_data"&&(s.confirmDialog={type:"reset-demo",title:"Reset demo data?",message:"This clears all local Courio changes and restores the original fake demo data.",primaryLabel:"Reset demo data",tone:"danger"},f())}}function ut(){document.querySelector("#admin").innerHTML=`
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
          ${q()?`
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
          <button class="btn primary" data-save-settings ${c("settings")?"disabled":""}>${c("settings")?"Saving...":"Save settings"}</button>
          <button class="btn danger" data-reset-demo ${c("reset-demo")?"disabled":""}>${c("reset-demo")?"Resetting...":"Reset Demo Data"}</button>
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
                ${s.employees.map(t=>`
                  <tr>
                    <td>${t.name}<br><small>${t.email}</small></td>
                    <td>${t.title}</td>
                    <td>${t.department}</td>
                    <td><button class="btn subtle" data-edit-employee="${t.id}">Edit</button></td>
                  </tr>
                `).join("")}
              </tbody>
            </table>`}
      </div>
      <div class="panel">
        <div class="panel-title"><h2>Recent activity</h2><span>Local audit preview</span></div>
        ${s.activity.length===0?'<div class="empty-state">No activity yet. Completed workflows and team changes will appear here.</div>':`<div class="activity-list">
              ${s.activity.slice(0,8).map(t=>`
                <div class="activity-item">
                  <span>${S(t.label||"Local action completed")}</span>
                  <time>${new Date(t.completedAt).toLocaleString()}</time>
                </div>
              `).join("")}
            </div>`}
      </div>
    </div>
  `}function ne(t){return t==="Urgent"||t==="Client complaint"?"urgent":t==="Accounting"||t==="Documents"||t==="Missing documents"?"invoice":t==="Sales"?"lead":""}document.addEventListener("click",async t=>{const e=t.target.closest("button");if(e){if(e.dataset.assistantToggle!==void 0){s.assistantOpen=!s.assistantOpen,f();return}if(e.dataset.confirmCancel!==void 0){s.confirmDialog=null,f();return}if(e.dataset.confirmPrimary!==void 0){const a=s.confirmDialog;if(s.confirmDialog=null,(a==null?void 0:a.type)==="reset-demo"){await m("reset-demo",async()=>{await Fe(),window.location.reload()});return}if((a==null?void 0:a.type)==="delete-rule"){await m(`delete-rule-${a.ruleId}`,async()=>{await He(a.ruleId),s.rules=await T(),s.activity=await R(),s.selectedRule=null},"Rule deleted locally.");return}if((a==null?void 0:a.type)==="delete-employee"){await m(`delete-employee-${a.employeeId}`,async()=>{await Ge(a.employeeId),s.employees=await H(),s.emails=await k(),s.activity=await R(),s.selectedEmployee=null},"Employee removed and assigned emails returned to Unassigned.");return}}if(e.dataset.tab&&A(e.dataset.tab),e.dataset.tabTarget&&A(e.dataset.tabTarget),e.dataset.triageFilter&&(s.triageFilter=e.dataset.triageFilter,f()),e.dataset.draftFilter&&(s.draftFilter=e.dataset.draftFilter,f()),e.dataset.action==="digest"&&await m("digest",async()=>{s.digest=await I()},"Morning digest regenerated from local demo data."),e.dataset.reviewEmail){const a=e.dataset.reviewEmail;await m(`review-${a}`,async()=>{s.selectedEmail=await te(a),s.emails=await k(),s.selectedDraft=null,s.selectedRule=null,s.selectedEmployee=null,s.summary="",s.showExplanation=!1},"Message thread opened.")}if(e.dataset.reviewDraft){const a=e.dataset.reviewDraft;await m(`review-draft-${a}`,async()=>{s.selectedDraft=await L(a),s.selectedEmail=null,s.selectedRule=null,s.selectedEmployee=null,s.summary="",s.showExplanation=!1},"Draft opened for review.")}if(e.dataset.openEmailDraft){const a=e.dataset.openEmailDraft;await m(`open-email-draft-${a}`,async()=>{s.selectedDraft=await xe(a),s.selectedEmail=null,s.selectedRule=null,s.selectedEmployee=null,s.summary="",s.showExplanation=!1},"Draft opened for editing.")}if(e.dataset.closeDrawer!==void 0&&(s.selectedEmail=null,s.selectedDraft=null,s.selectedRule=null,s.selectedEmployee=null,s.summary="",s.showExplanation=!1,f()),e.dataset.toggleExplanation!==void 0&&(s.showExplanation=!s.showExplanation,f()),e.dataset.summaryEmail){const a=e.dataset.summaryEmail;await m(`summary-${a}`,async()=>{s.summary=await _e(a)},"Thread summary generated.")}if(e.dataset.generateDraft){const a=e.dataset.generateDraft;await m(`draft-${a}`,async()=>{await st(a)},"Draft opened. Existing edits were preserved.")}if(e.dataset.saveDraft){const a=e.dataset.saveDraft,i=document.querySelector("[data-draft-editor]");await m(`save-${a}`,async()=>{var n;await Oe(a,i.value),s.drafts=await x(),s.emails=await k(),((n=s.selectedDraft)==null?void 0:n.id)===a&&(s.selectedDraft=await L(a))},"Draft saved locally.")}if(e.dataset.toggleRule){const a=e.dataset.toggleRule;await m(`rule-${a}`,async()=>{await K(a),s.rules=await T()},"Rule preview state updated.")}if(e.dataset.approveRule){const a=e.dataset.approveRule;await m(`approve-rule-${a}`,async()=>{s.rules.find(n=>n.id===a).on||await K(a),s.rules=await T()},"Rule approved for observation mode.")}if(e.dataset.editRule){const a=e.dataset.editRule;await m(`edit-rule-${a}`,async()=>{s.selectedRule=s.rules.find(i=>i.id===a),s.selectedEmail=null,s.selectedDraft=null,s.selectedEmployee=null},"Rule opened for local editing.")}if(e.dataset.saveRule){const a=e.dataset.saveRule,i=Object.fromEntries([...document.querySelectorAll("[data-rule-field]")].map(n=>[n.dataset.ruleField,n.value]));await m(`save-rule-${a}`,async()=>{await je(a,i),s.rules=await T(),s.selectedRule=s.rules.find(n=>n.id===a)},"Rule saved locally.")}if(e.dataset.deleteRule){const a=e.dataset.deleteRule,i=s.rules.find(n=>n.id===a);s.confirmDialog={type:"delete-rule",ruleId:a,title:"Delete this rule?",message:`Delete “${(i==null?void 0:i.title)||"this rule"}” from the local demo?`,primaryLabel:"Delete rule",tone:"danger"},f()}if(e.dataset.addEmployee!==void 0&&(s.selectedEmployee={id:"new",name:"",email:"",title:"",department:""},s.selectedEmail=null,s.selectedDraft=null,s.selectedRule=null,f()),e.dataset.editEmployee&&(s.selectedEmployee=s.employees.find(a=>a.id===e.dataset.editEmployee)||null,s.selectedEmail=null,s.selectedDraft=null,s.selectedRule=null,f()),e.dataset.saveEmployee){const a=e.dataset.saveEmployee,i=Object.fromEntries([...document.querySelectorAll("[data-employee-field]")].map(n=>[n.dataset.employeeField,n.value]));await m(`save-employee-${a}`,async()=>{const n=a==="new"?await Pe(i):await Ve(a,i);s.employees=await H(),s.activity=await R(),s.selectedEmployee=s.employees.find(r=>r.id===n.id)||null},a==="new"?"Employee added locally.":"Employee changes saved locally.")}if(e.dataset.deleteEmployee){const a=e.dataset.deleteEmployee,i=s.employees.find(n=>n.id===a);s.confirmDialog={type:"delete-employee",employeeId:a,title:"Remove this employee?",message:`Remove ${(i==null?void 0:i.name)||"this employee"}? Their assigned emails will return to Unassigned.`,primaryLabel:"Remove employee",tone:"danger"},f()}if(e.dataset.approveDraft){const a=e.dataset.approveDraft;await m(`approve-${a}`,async()=>{await it(a)},"Draft approved and workflow completed. Nothing was sent.")}if(e.dataset.approveSelected!==void 0&&await m("approve-selected",async()=>{await ae(s.selectedDraftIds),s.drafts=await x(),s.emails=await k(),s.activity=await R(),s.digest=await I(),s.selectedDraftIds=[]},"Selected drafts approved and workflows completed. Nothing was sent."),e.dataset.approveLowRisk!==void 0){if(!se()){M("Low-risk bulk approval is disabled by workspace settings.",!0);return}await m("approve-low-risk",async()=>{await qe(),s.drafts=await x(),s.emails=await k(),s.activity=await R(),s.digest=await I(),s.selectedDraftIds=[]},"Low-risk drafts approved and workflows completed. Nothing was sent.")}if(e.dataset.saveSettings!==void 0){const a=Object.fromEntries([...document.querySelectorAll("[data-setting]")].map(i=>[i.dataset.setting,i.value]));await m("settings",async()=>{s.settings=await Le(a)},"Settings saved locally.")}e.dataset.resetDemo!==void 0&&(s.confirmDialog={type:"reset-demo",title:"Reset demo data?",message:"This clears all local Courio changes and restores the original fake demo data.",primaryLabel:"Reset demo data",tone:"danger"},f())}});document.addEventListener("change",async t=>{const e=t.target;if(e.dataset.setting==="mode"){s.settings.mode=e.value,f();return}if(e.dataset.setting==="allowLowRiskBulkApproval"){s.settings.allowLowRiskBulkApproval=e.value,f();return}if(e.dataset.emailCategory){const a=e.dataset.emailCategory;await m(`category-${a}`,async()=>{await We(a,e.value),await W(a)},"Category updated locally.")}if(e.dataset.emailAssignee){const a=e.dataset.emailAssignee;await m(`assign-${a}`,async()=>{await Be(a,e.value),await W(a)},"Email assignment updated locally.")}if(e.dataset.selectDraft){const a=e.dataset.selectDraft;s.selectedDraftIds=e.checked?[...new Set([...s.selectedDraftIds,a])]:s.selectedDraftIds.filter(i=>i!==a),f()}});document.addEventListener("input",t=>{const e=t.target;if(e.dataset.ruleSearch===void 0)return;s.ruleQuery=e.value,ie();const a=document.querySelector("[data-rule-search]");a==null||a.focus(),a==null||a.setSelectionRange(s.ruleQuery.length,s.ruleQuery.length)});document.addEventListener("submit",async t=>{const e=t.target.closest(".assistant-form");if(!e)return;t.preventDefault();const a=e.querySelector("[data-assistant-input]"),i=a.value.trim();i&&await m("assistant",async()=>{var r;const n=await Qe(i,{selectedEmailId:((r=s.selectedEmail)==null?void 0:r.id)||null});s.assistantMessages=n.messages,a.value="",await ct(n.action)})});f();Je();
