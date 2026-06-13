(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function t(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(n){if(n.ep)return;n.ep=!0;const r=t(n);fetch(n.href,r)}})();const K={dashboard:["Overview","A local workflow preview for email triage, summaries, routing suggestions, and draft preparation."],import:["Setup preview","Preview how a future Microsoft 365 connection could import mailbox structure and workflow patterns."],triage:["Inbox triage","Review AI-classified messages before any action is taken."],rules:["Rules","Approve or adjust local rule previews. They do not affect a real mailbox."],drafts:["Drafts","Review prepared replies and mark them ready for a person to send."],admin:["Admin","Manage local workspace preferences and preview future integration safeguards."]},ue=[{id:"email-1",subject:"Very unhappy about no response",sender:"Maya Chen",senderEmail:"maya@northstar-retail.ca",body:"I have followed up twice and still have not received an answer about the service issue from last week. We need someone senior to respond today.",category:"Client complaint",urgency:"High",confidence:94,suggestedAction:"Escalate to owner",requiresDraft:!0,assignedTo:"emp-1",explanation:"Courio flagged this because the client mentions repeated follow-ups, no response, and asks for senior attention today.",thread:["Client followed up twice about an unanswered service issue.","The last message uses negative sentiment and asks for owner attention."],summary:"Client is frustrated by delayed response. Recommend owner review today.",draft:"Hi, thank you for the follow-up. I'm sorry this has taken longer than expected. I am escalating this now and will make sure you receive a clear update today."},{id:"email-2",subject:"Invoice #1844 payment status",sender:"Alex Rivera",senderEmail:"alex@brightline-supplies.ca",body:"Could you confirm whether invoice #1844 has been approved for payment? It was due last Friday.",category:"Accounting",urgency:"Medium",confidence:89,suggestedAction:"Route to accounting",requiresDraft:!0,assignedTo:"emp-2",explanation:"Courio saw an invoice number, payment-status wording, and a due-date reference, so it suggested accounting review.",thread:["Supplier asks whether invoice #1844 has been scheduled for payment.","Invoice appears related to recurring monthly services."],summary:"Supplier is requesting a payment-status update for invoice #1844.",draft:"Hi, thanks for checking in. We are reviewing invoice #1844 with accounting and will send a status update shortly."},{id:"email-3",subject:"Quote request for monthly bookkeeping",sender:"Priya Nair",senderEmail:"priya@lakeside-catering.ca",body:"We are looking for monthly bookkeeping help for a small catering business. We have six employees and would like pricing before the end of the week.",category:"Sales",urgency:"Medium",confidence:86,suggestedAction:"Prepare intake draft",requiresDraft:!0,assignedTo:"emp-3",explanation:"Courio matched this to sales because the sender asks for pricing, describes company needs, and appears to be a new prospect.",thread:["New prospect requested pricing for monthly bookkeeping.","They mentioned six employees and monthly receipt volume."],summary:"New lead is asking for bookkeeping pricing. Intake details are partially available.",draft:"Hi, thanks for reaching out. We'd be happy to help with monthly bookkeeping. Could you share your approximate monthly transaction count and preferred start date?"},{id:"email-4",subject:"Payroll documents attached",sender:"Tom Bennett",senderEmail:"tom@harbour-grill.ca",body:"Please find this period's payroll documents attached. Let me know if anything is missing before Thursday.",category:"Documents",urgency:"Low",confidence:91,suggestedAction:"Apply payroll category",requiresDraft:!0,assignedTo:"emp-4",explanation:"Courio detected payroll wording and an attachment reference, so it suggested categorizing this for payroll review.",thread:["Client attached payroll documents for this period.","Message should be categorized for payroll review."],summary:"Payroll documents are attached and ready to route to payroll workflow.",draft:"Hi, thanks. We received the payroll documents and will review them for the current period."},{id:"email-5",subject:"Missing March receipts",sender:"Elena Morris",senderEmail:"elena@maple-therapy.ca",body:"I thought I sent the March receipts, but I may have missed the attachment. Can you let me know what you still need?",category:"Missing documents",urgency:"Medium",confidence:88,suggestedAction:"Prepare follow-up draft",requiresDraft:!0,assignedTo:"emp-2",explanation:"Courio flagged this because the email talks about receipts and a possibly missing attachment, which usually needs a document follow-up.",thread:["Client mentions March receipts but no attachments are present.","Follow-up should request the missing files."],summary:"March receipts appear to be missing. Prepare a concise document request.",draft:"Hi, thanks for the note. It looks like the March receipts were not attached. Could you resend them when convenient?"},{id:"email-6",subject:"Can we move tomorrow's appointment?",sender:"Jordan Lee",senderEmail:"jordan@greenway-landscaping.ca",body:"Something came up with our crew schedule. Can we move tomorrow's appointment to next Tuesday afternoon?",category:"Scheduling",urgency:"Low",confidence:82,suggestedAction:"Offer available times",requiresDraft:!0,assignedTo:"emp-5",explanation:"Courio identified a scheduling change request with a proposed new time, so it suggested a simple scheduling reply.",thread:["Client asks to move an appointment from tomorrow to next Tuesday afternoon.","No urgent sentiment or billing issue detected."],summary:"Client wants to reschedule tomorrow's appointment to next Tuesday afternoon.",draft:"Hi, thanks for letting us know. Next Tuesday afternoon should work on our side. Could you confirm your preferred time window?"}],pe=[{id:"emp-1",name:"Nadia Patel",title:"Owner",email:"nadia@courio-demo.ca",department:"Leadership"},{id:"emp-2",name:"Marcus Roy",title:"Bookkeeper",email:"marcus@courio-demo.ca",department:"Accounting"},{id:"emp-3",name:"Sofia Tremblay",title:"Client Success Lead",email:"sofia@courio-demo.ca",department:"Sales"},{id:"emp-4",name:"Daniel Kim",title:"Payroll Specialist",email:"daniel@courio-demo.ca",department:"Payroll"},{id:"emp-5",name:"Avery Brooks",title:"Office Coordinator",email:"avery@courio-demo.ca",department:"Operations"}],me=[{id:"rule-1",title:"Supplier invoice routing",desc:"Suggest an accounting category and owner for supplier invoices and payment requests.",category:"Accounting",confidence:91,explanation:"Courio looks for invoice numbers, payment wording, supplier senders, and due-date language.",impact:"Matches the sample invoice messages in this local demo.",matches:["Invoice #1844 payment status","Supplier payment confirmation"],on:!0},{id:"rule-2",title:"Client escalation detection",desc:"Flag negative sentiment, repeated follow-ups, or unanswered client messages older than 48 hours.",category:"Client complaint",confidence:94,explanation:"Courio looks for negative sentiment, repeated follow-ups, and requests for owner attention.",impact:"Flags the sample high-risk client thread in this local demo.",matches:["Very unhappy about no response"],on:!0},{id:"rule-3",title:"Quote request intake",desc:"Prepare standardized draft replies for new prospects requesting pricing or availability.",category:"Sales",confidence:86,explanation:"Courio looks for pricing requests, new prospect language, and service-fit details.",impact:"Matches the sample quote request in this local demo.",matches:["Quote request for monthly bookkeeping"],on:!1},{id:"rule-4",title:"Missing document follow-up",desc:"Prepare client reminders when required documents are mentioned but not attached.",category:"Missing documents",confidence:88,explanation:"Courio looks for missing attachment wording, receipt requests, and document follow-up language.",impact:"Useful for bookkeeping, accounting, insurance, and service teams.",matches:["Missing March receipts"],on:!1}],M="courio.mockState.v1",B="courio.assistantHistory.v1",V=2,c=Object.freeze({NEEDS_REVIEW:"needs_review",READY_FOR_DRAFT:"ready_for_draft",DRAFT_GENERATED:"draft_generated",DRAFT_REVIEWED:"draft_reviewed",DRAFT_SAVED:"draft_saved",COMPLETED:"completed"}),fe=new Set(Object.values(c)),S={schemaVersion:V,emails:ue.map(ge),employees:structuredClone(pe),rules:structuredClone(me),drafts:[],settings:{productName:"Courio",mode:"Simple",companyName:"Demo PME Inc.",defaultMode:"Observation only",escalationRecipient:"owner@company.ca",confidenceThreshold:"80",observationDays:"7",allowLowRiskBulkApproval:"Yes",approvalRequired:!0,autoSend:!1},completedActions:[],deletedEmployeeIds:[],deletedRuleIds:[]},d=ve();let F=Ee();const m=(a=550)=>new Promise(e=>setTimeout(e,a));function p(a){return structuredClone(a)}function ge(a){const{status:e,workflowStatus:t,reviewed:i,...n}=p(a);return{...n,workflowState:c.NEEDS_REVIEW}}function ve(){try{const a=window.localStorage.getItem(M);if(!a)return p(S);const e=JSON.parse(a),t=we(e);return window.localStorage.setItem(M,JSON.stringify(t)),t}catch{return p(S)}}function we(a){const e=a.deletedEmployeeIds||[],t=a.deletedRuleIds||[],i=j(S.emails,a.emails),n=Array.isArray(a.drafts)?a.drafts:[],r=he(n),l=i.map(g=>{const le=r.find(U=>(U.emailId||U.id)===g.id),de=ye(g,le,a.schemaVersion),{status:gt,workflowStatus:vt,reviewed:wt,...ce}=g;return{...ce,workflowState:de}}),$=new Map(l.map(g=>[g.id,g])),y=r.filter(g=>be(g,$.get(g.emailId||g.id))).map($e);return{...p(S),...a,schemaVersion:V,emails:l,employees:j(S.employees.filter(g=>!e.includes(g.id)),(a.employees||[]).filter(g=>!e.includes(g.id))),rules:j(S.rules.filter(g=>!t.includes(g.id)),(a.rules||[]).filter(g=>!t.includes(g.id))),drafts:y,settings:{...S.settings,...a.settings||{}},completedActions:Array.isArray(a.completedActions)?a.completedActions:[],deletedEmployeeIds:e,deletedRuleIds:t}}function ye(a,e,t){return t>=V&&fe.has(a.workflowState)?a.workflowState:a.status==="Done"||a.workflowStatus==="Completed"||(e==null?void 0:e.status)==="Ready for human send"||(e==null?void 0:e.status)==="Approved"?c.COMPLETED:(e==null?void 0:e.status)==="Saved"?c.DRAFT_SAVED:e!=null&&e.reviewed?c.DRAFT_REVIEWED:e!=null&&e.generated||(e==null?void 0:e.status)==="Generated"?c.DRAFT_GENERATED:a.reviewed||a.reviewedAt?c.READY_FOR_DRAFT:c.NEEDS_REVIEW}function he(a){const e=new Map;for(const t of a){const i=(t==null?void 0:t.emailId)||(t==null?void 0:t.id);if(!i)continue;const n=e.get(i);(!n||J(t)>J(n))&&e.set(i,t)}return[...e.values()]}function J(a){return({"Needs approval":0,Generated:1,Saved:3,"Ready for human send":4,Approved:4}[a.status]||0)+(a.generated?1:0)+(a.reviewed?1:0)}function be(a,e){return!a||!e?!1:!!(a.generated||a.reviewed||["Generated","Saved","Ready for human send","Approved"].includes(a.status)||[c.DRAFT_GENERATED,c.DRAFT_REVIEWED,c.DRAFT_SAVED,c.COMPLETED].includes(e.workflowState))}function $e(a){const{generated:e,reviewed:t,status:i,...n}=p(a);return{...n,emailId:a.emailId||a.id}}function j(a,e=[]){const t=Array.isArray(e)?e:[],i=a.map(r=>{const l=t.find($=>$.id===r.id);return l?{...r,...l}:p(r)}),n=t.filter(r=>!a.some(l=>l.id===r.id));return[...i,...n.map(p)]}function w(){window.localStorage.setItem(M,JSON.stringify(d))}function Ee(){try{const a=window.localStorage.getItem(B);return a?JSON.parse(a):[{id:"assistant-welcome",role:"assistant",text:"Hi, I can help with urgent emails, invoices, drafts, digest updates, rules, and explanations."}]}catch{return[{id:"assistant-welcome",role:"assistant",text:"Hi, I can help with urgent emails, invoices, drafts, digest updates, rules, and explanations."}]}}function De(){window.localStorage.setItem(B,JSON.stringify(F))}function Se(){return d.settings.allowLowRiskBulkApproval!=="No"}function ke(){return!0}function h(a){return a.workflowState===c.COMPLETED}function G(a){const e=d.emails.find(t=>t.id===(a.emailId||a.id));return(e==null?void 0:e.workflowState)===c.DRAFT_SAVED}function _(a){return{[c.NEEDS_REVIEW]:"Review required",[c.READY_FOR_DRAFT]:"Draft needed",[c.DRAFT_GENERATED]:"Draft generated",[c.DRAFT_REVIEWED]:"Draft in review",[c.DRAFT_SAVED]:"Draft saved",[c.COMPLETED]:"Completed"}[a]||"Review required"}function ee(a){return{[c.DRAFT_GENERATED]:"Generated",[c.DRAFT_REVIEWED]:"In review",[c.DRAFT_SAVED]:"Saved",[c.COMPLETED]:"Ready for human send"}[a]||"No draft"}function q(a,e={}){d.completedActions.unshift({id:`action-${Date.now()}-${Math.random().toString(16).slice(2)}`,type:a,completedAt:new Date().toISOString(),...e}),d.completedActions=d.completedActions.slice(0,50)}function te(a,e){a.workflowState=c.COMPLETED,e.approvedAt=new Date().toISOString(),e.updatedAt=e.approvedAt,q("draft-approved",{emailId:a.id,draftId:e.id,label:`Draft approved and workflow completed: ${a.subject}`})}function E(a){const e=d.emails.find(l=>l.id===(a.emailId||a.id)),t=h(e||{})?"Done":"Open",i=h(e||{}),n=(e==null?void 0:e.workflowState)===c.DRAFT_SAVED,r=ee(e==null?void 0:e.workflowState);return{...a,sourceEmailStatus:t,sourceWorkflowStatus:_(e==null?void 0:e.workflowState),approvalState:i?"ready_for_human_send":(e==null?void 0:e.workflowState)===c.DRAFT_SAVED?"saved":(e==null?void 0:e.workflowState)===c.DRAFT_GENERATED?"generated":"needs_review",status:r,statusLabel:r,isReadyForHumanSend:i,canApprove:n,canSelectForBulkApproval:n,approvalBlocker:n?"":i?"Source email is completed.":"Review and save this draft before approving."}}function z(a){const e=Q(a.id),t=ke(),i=!!e,n=h(a),r=n,l=a.workflowState!==c.NEEDS_REVIEW;return{...a,reviewed:l,status:r?"Done":"Open",workflowStatus:_(a.workflowState),requiresDraft:t,draftId:i&&(e==null?void 0:e.id)||null,draftStatus:i?ee(a.workflowState):null,draftStatusLabel:i?E(e).statusLabel:"No draft",draftReadyForHumanSend:n,workflowLabel:_(a.workflowState),canComplete:!1,completeActionLabel:"Completed",draftActionLabel:r?"View approved draft":i?"Edit draft":"Generate draft",canGenerateDraft:a.workflowState===c.READY_FOR_DRAFT&&!i,canOpenDraft:i,completionBlocker:l?r?"This workflow is complete.":i?"Open the existing draft to continue this workflow.":"":"Review this email before generating a draft."}}function b(a){const e=d.emails.find(t=>t.id===a);if(!e)throw new Error("Email not found.");return e}function O(a){const e=d.drafts.find(t=>t.id===a);if(!e)throw new Error("Draft not found.");return e}function Q(a){return d.drafts.find(e=>(e.emailId||e.id)===a)}function ae(a){const e=d.employees.find(t=>t.id===a);if(!e)throw new Error("Employee not found.");return e}function Re(){const a=d.emails.filter(l=>!h(l)),e=d.drafts.map(E),t=e.filter(l=>l.isReadyForHumanSend).length,i=e.filter(l=>l.canSelectForBulkApproval).length,n=l=>a.filter($=>$.category===l),r=a.filter(l=>l.urgency==="High");return{generatedAt:new Date().toLocaleTimeString([],{hour:"numeric",minute:"2-digit"}),headline:`${a.length} open emails need review. ${r.length} are urgent and ${i} drafts need approval.`,urgentItems:r.map(l=>l.subject),draftsAwaitingApproval:i,readyForHumanSend:t,invoices:n("Accounting").map(l=>l.subject),missingDocuments:n("Missing documents").map(l=>l.subject),quoteRequests:n("Sales").map(l=>l.subject),clientComplaints:n("Client complaint").map(l=>l.subject),recommendedActions:[r.length?"Review urgent client items first.":"No urgent client escalations are open.",i?"Review drafts before marking them ready for human send.":"No drafts are waiting for approval.","Keep observation mode on while this remains a demo."]}}function Ae(){const a=d.rules.find(t=>/invoice/i.test(`${t.title} ${t.desc}`));if(a)return a.on=!0,w(),a;const e={id:`rule-${Date.now()}`,title:"Invoice intake assistant",desc:"Flag invoice messages, payment questions, due dates, and supplier follow-ups for accounting review.",category:"Accounting",confidence:84,explanation:"Courio would look for invoice numbers, balance-due wording, supplier names, and payment timing.",impact:"Created locally from the assistant chat. It only previews matches in this prototype.",matches:d.emails.filter(t=>t.category==="Accounting").map(t=>t.subject),on:!0};return d.rules.push(e),w(),e}function Te(a){return a.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9\s]/g," ").replace(/\s+/g," ")}function Ie(a,e){const t=Array.from({length:e.length+1},(i,n)=>n);for(let i=1;i<=a.length;i+=1){let n=t[0];t[0]=i;for(let r=1;r<=e.length;r+=1){const l=t[r],$=a[i-1]===e[r-1]?0:1;t[r]=Math.min(t[r]+1,t[r-1]+1,n+$),n=l}}return t[e.length]}function xe(a,e){if(a.length!==e.length)return!1;const t=[];for(let i=0;i<a.length;i+=1)a[i]!==e[i]&&t.push(i);return t.length===2&&t[1]===t[0]+1&&a[t[0]]===e[t[1]]&&a[t[1]]===e[t[0]]}function D(a,e){const t=a.split(" ").filter(Boolean);return e.some(i=>i.includes(" ")?a.includes(i):t.some(n=>{if(n===i||xe(n,i))return!0;const r=i.length>=7?2:i.length>=4?1:0;return r>0&&Math.abs(n.length-i.length)<=r&&Ie(n,i)<=r}))}function Ce(a,e={}){const t=Te(a),i=d.emails.filter(y=>!h(y)&&y.urgency==="High").length,n=d.emails.filter(y=>!h(y)&&y.category==="Accounting").length,r=d.drafts.map(E).filter(y=>y.canSelectForBulkApproval).length,l=D(t,["invoice","invoices","accounting"]),$=D(t,["rule","rules","create rule"]);if(D(t,["urgent","urgency"]))return{text:`${i} urgent emails are open. I switched Triage to urgent items.`,action:{type:"show_triage",filter:"urgent"}};if(D(t,["triage","inbox","show inbox","open inbox"]))return{text:"I opened the full Triage inbox.",action:{type:"show_triage",filter:"all"}};if(l&&$)return{text:"Invoice rule is ready in observation mode. It is still fake/local and will not touch a mailbox.",action:{type:"show_rule",ruleId:Ae().id}};if(l)return{text:`${n} invoice-related emails are open. I switched Triage to Accounting.`,action:{type:"show_triage",filter:"invoices"}};if(D(t,["draft","drafts","approval","approve"]))return{text:`${r} saved drafts need human approval. I opened the Drafts queue.`,action:{type:"show_drafts",filter:"needs_approval"}};if(D(t,["digest","morning digest"]))return{text:"I regenerated the morning digest from local demo data.",action:{type:"generate_digest"}};if(D(t,["explain","explanation","why"])){if(!e.selectedEmailId)return{text:"Open an email in Triage first, then ask me to explain it. I will show the flagged reason."};const y=z(b(e.selectedEmailId));return{text:`Courio flagged "${y.subject}" because: ${y.explanation}`,action:{type:"explain_email",emailId:y.id}}}return D(t,["reset","restart"])?{text:"I can reset the fake demo data now. The page will reload so defaults come back clean.",action:{type:"reset_demo_data"}}:{text:"I did not catch that. Try one of the command hints below."}}async function k(){return await m(),p(d.emails.map(z))}async function P(){return await m(350),p(d.employees)}async function I(){return await m(400),p(d.rules)}async function x(){return await m(700),p(Re())}async function C(){return await m(400),p(d.drafts.map(E))}async function L(a){await m(450);const e=O(a),t=b(e.emailId||e.id);return t.workflowState===c.DRAFT_GENERATED&&(t.workflowState=c.DRAFT_REVIEWED,e.reviewedAt=new Date().toISOString(),e.updatedAt=e.reviewedAt,w()),p({...E(e),sourceEmail:{id:t.id,subject:t.subject,sender:t.sender,senderEmail:t.senderEmail,body:t.body,suggestedAction:t.suggestedAction,confidence:t.confidence,urgency:t.urgency,status:h(t)?"Done":"Open",workflowStatus:_(t.workflowState)}})}async function Fe(a){await m(350),b(a);const e=Q(a);return e?L(e.id):null}async function Le(){return await m(250),p(d.settings)}async function Me(a){return await m(450),d.settings={...d.settings,...a,approvalRequired:!0,autoSend:!1},w(),p(d.settings)}async function _e(){return await m(350),window.localStorage.removeItem(M),window.localStorage.removeItem(B),p(S)}async function se(a){await m();const e=b(a);return e.workflowState===c.NEEDS_REVIEW&&(e.workflowState=c.READY_FOR_DRAFT,e.reviewedAt=new Date().toISOString(),w()),p({...z(e),messages:e.thread})}async function Ne(a){return await m(700),b(a).summary}async function qe(a){await m(750);const e=b(a);if(h(e))throw new Error("This email is done. Reopen it before creating or changing a draft.");if(e.workflowState===c.NEEDS_REVIEW)throw new Error("Review this email before generating a draft.");const t=Q(a);if(t)return p(E(t));if(e.workflowState!==c.READY_FOR_DRAFT)throw new Error("This workflow is not ready to generate a new draft.");const i=new Date().toISOString(),n={id:`draft-${a}`,emailId:a,title:e.suggestedAction,source:e.subject,text:e.draft,confidence:e.confidence,risk:e.urgency==="High"?"High":"Low",createdAt:i,updatedAt:i};return d.drafts.push(n),e.workflowState=c.DRAFT_GENERATED,w(),p(E(n))}async function Oe(a,e){if(await m(),!e||e.trim().length<10)throw new Error("Draft is too short to save.");const t=O(a),i=b(t.emailId||t.id);if(h(i))throw new Error("This email is done. Reopen it before editing the draft.");if(![c.DRAFT_REVIEWED,c.DRAFT_SAVED].includes(i.workflowState))throw new Error("Review this draft before saving it.");return t.text=e,t.updatedAt=new Date().toISOString(),i.workflowState=c.DRAFT_SAVED,w(),p(E(t))}async function He(a){await m();const e=O(a),t=b(e.emailId||e.id);if(h(t))throw new Error("This email is done. Reopen it before changing draft approval.");if(!G(e))throw new Error("Review this draft before approving.");return te(t,e),w(),p(E(e))}async function ie(a){if(await m(650),!a.length)throw new Error("Select at least one draft first.");const e=a.map(i=>{const n=O(i),r=b(n.emailId||n.id);return{draft:n,email:r}}).filter(({email:i})=>!h(i));if(!e.length)throw new Error("No selected drafts could be approved.");if(e.some(({draft:i})=>!G(i)))throw new Error("Review this draft before approving.");const t=[];for(const{draft:i,email:n}of e)te(n,i),t.push(i.id);return w(),p({approved:t})}async function je(){if(await m(700),!Se())throw new Error("Low-risk bulk approval is disabled by workspace settings.");const a=d.drafts.filter(e=>e.risk!=="High").filter(G).filter(e=>!h(b(e.emailId||e.id))).map(e=>e.id);if(!a.length)throw new Error("No low-risk drafts are awaiting approval.");return ie(a)}async function X(a){await m(450);const e=d.rules.find(t=>t.id===a);if(!e)throw new Error("Rule not found.");return e.on=!e.on,w(),p(e)}async function Pe(a,e){var i,n;await m(500);const t=d.rules.find(r=>r.id===a);if(!t)throw new Error("Rule not found.");if(!((i=e.title)!=null&&i.trim()))throw new Error("Rule name is required.");if(!((n=e.desc)!=null&&n.trim()))throw new Error("Rule description is required.");return t.title=e.title.trim(),t.desc=e.desc.trim(),t.category=e.category||t.category,w(),p(t)}async function We(a){await m(450);const e=d.rules.findIndex(i=>i.id===a);if(e===-1)throw new Error("Rule not found.");const[t]=d.rules.splice(e,1);return d.deletedRuleIds=[...new Set([...d.deletedRuleIds||[],a])],q("rule-deleted",{ruleId:t.id,label:`Rule deleted: ${t.title}`}),w(),p(t)}async function Be(a,e){if(await m(400),!e)throw new Error("Choose a category before saving.");const t=b(a);return t.category=e,w(),p(t)}async function Ve(a,e){await m(400),e&&ae(e);const t=b(a);return t.assignedTo=e,w(),p(t)}async function Ge(a){var t,i,n,r;if(await m(500),!((t=a.name)!=null&&t.trim()))throw new Error("Employee name is required.");if(!((i=a.email)!=null&&i.trim()))throw new Error("Employee email is required.");if(!((n=a.title)!=null&&n.trim()))throw new Error("Employee title is required.");if(!((r=a.department)!=null&&r.trim()))throw new Error("Employee department is required.");const e={id:`employee-${Date.now()}`,name:a.name.trim(),email:a.email.trim(),title:a.title.trim(),department:a.department.trim()};return d.employees.push(e),q("employee-added",{employeeId:e.id,label:`Employee added: ${e.name}`}),w(),p(e)}async function ze(a,e){var i,n,r,l;await m(500);const t=ae(a);if(!((i=e.name)!=null&&i.trim()))throw new Error("Employee name is required.");if(!((n=e.email)!=null&&n.trim()))throw new Error("Employee email is required.");if(!((r=e.title)!=null&&r.trim()))throw new Error("Employee title is required.");if(!((l=e.department)!=null&&l.trim()))throw new Error("Employee department is required.");return Object.assign(t,{name:e.name.trim(),email:e.email.trim(),title:e.title.trim(),department:e.department.trim()}),w(),p(t)}async function Qe(a){await m(500);const e=d.employees.findIndex(i=>i.id===a);if(e===-1)throw new Error("Employee not found.");const[t]=d.employees.splice(e,1);return d.deletedEmployeeIds=[...new Set([...d.deletedEmployeeIds||[],a])],d.emails.forEach(i=>{i.assignedTo===a&&(i.assignedTo="")}),q("employee-deleted",{employeeId:t.id,label:`Employee removed: ${t.name}`}),w(),p(t)}async function R(){return await m(250),p(d.completedActions)}async function Ye(){return await m(150),p(F)}async function Ue(a,e={}){if(await m(500),!(a!=null&&a.trim()))throw new Error("Type a command first.");const t={id:`user-${Date.now()}`,role:"user",text:a.trim()},i=Ce(a,e),n={id:`assistant-${Date.now()}`,role:"assistant",text:i.text};return F=[...F,t,n].slice(-24),De(),p({messages:F,action:i.action||null})}const Ke=document.querySelector("#app"),Je=new Set(["dashboard","import","triage","rules","drafts","admin"]),s={tab:"dashboard",emails:[],employees:[],rules:[],drafts:[],settings:{companyName:"Demo PME Inc.",mode:"Simple",defaultMode:"Observation only",escalationRecipient:"owner@company.ca",approvalRequired:!0,autoSend:!1},settingsForm:null,loading:{emails:!0,rules:!0,drafts:!0},busy:{},selectedEmail:null,selectedDraft:null,selectedRule:null,selectedEmployee:null,selectedDraftIds:[],confirmDialog:null,digest:null,triageFilter:"all",draftFilter:"all",ruleQuery:"",assistantOpen:!1,assistantMessages:[],activity:[],summary:"",showExplanation:!1};Ke.innerHTML=`
  <div class="app">
    <aside>
      <div class="brand">
        <div class="brand-title">Courio</div>
        <div class="brand-sub">Assistant courriel pour PME</div>
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
          <button data-tab="import">Setup preview <small>Microsoft 365</small></button>
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
`;function Z(a,e){s.busy[a]=e,v()}async function f(a,e,t){try{Z(a,!0),await e(),t&&N(t)}catch(i){N(i.message||"Something went wrong in the mock workflow.",!0)}finally{Z(a,!1)}}function u(a){return!!s.busy[a]}function N(a,e=!1){const t=document.querySelector("#toast");t.textContent=a,t.classList.toggle("error",e),t.classList.add("show"),window.clearTimeout(t.dataset.timer),t.dataset.timer=window.setTimeout(()=>t.classList.remove("show"),2400)}function A(a,e={}){if(!Je.has(a))throw new Error("That Courio section is unavailable.");const t=s.tab;t==="admin"&&a!=="admin"&&(s.settingsForm=null),a==="admin"&&t!=="admin"&&(s.settingsForm={...s.settings}),s.tab=a,e.triageFilter&&(s.triageFilter=e.triageFilter),e.draftFilter&&(s.draftFilter=e.draftFilter),e.closeDrawers!==!1&&(s.selectedEmail=null,s.selectedDraft=null,s.selectedRule=null,s.selectedEmployee=null,s.summary="",s.showExplanation=!1),v()}async function W(a=(e=>(e=s.selectedEmail)==null?void 0:e.id)()){if(s.emails=await k(),a){const t=s.emails.find(i=>i.id===a);s.selectedEmail=t?{...t,messages:t.thread}:null}}function Xe(a){return!!(a!=null&&a.isReadyForHumanSend)}function Y(){return s.settings.mode==="Advanced"}function ne(){return s.settings.allowLowRiskBulkApproval!=="No"}function o(a=""){return String(a).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function T(a=[]){return a.map(e=>o(e)).join(", ")}function H(){return s.settingsForm||{...s.settings}}function Ze(){return H().mode==="Advanced"}async function et(){try{const[a,e,t,i,n,r,l,$]=await Promise.all([k(),P(),I(),C(),Le(),x(),Ye(),R()]);s.emails=a,s.employees=e,s.rules=t,s.drafts=i,s.settings={...s.settings,...n},s.settingsForm=null,s.digest=r,s.assistantMessages=l,s.activity=$}catch(a){N(a.message||"Could not load mock data.",!0)}finally{s.loading.emails=!1,s.loading.rules=!1,s.loading.drafts=!1,v()}}function v(){document.querySelector("#pageTitle").textContent=K[s.tab][0],document.querySelector("#pageSubtitle").textContent=K[s.tab][1],document.querySelectorAll(".section").forEach(a=>{a.classList.toggle("active",a.id===s.tab)}),document.querySelectorAll(".nav button").forEach(a=>{a.classList.toggle("active",a.dataset.tab===s.tab)}),tt(),at(),st(),re(),ut(),ft(),it(),nt(),pt()}function tt(){const a=s.emails.filter(t=>t.status!=="Done").length,e=s.digest;document.querySelector("#dashboard").innerHTML=`
    <div class="grid cols-3">
      <div class="panel metric positive">
        <div class="label">Open emails</div>
        <div class="value">${s.loading.emails?"...":a}</div>
        <div class="caption">Built from local demo inbox data</div>
      </div>
      <div class="panel metric">
        <div class="label">Drafts awaiting approval</div>
        <div class="value">${s.drafts.filter(t=>t.canSelectForBulkApproval).length||0}</div>
        <div class="caption">No messages are sent automatically</div>
      </div>
      <div class="panel metric">
        <div class="label">Ready for human send</div>
        <div class="value">${s.drafts.filter(Xe).length||0}</div>
        <div class="caption">Human approval still required to send</div>
      </div>
    </div>
    <div class="grid cols-2" style="margin-top:16px">
      <div class="panel">
        <div class="panel-title"><h2>Morning digest</h2><span>${e?`Generated ${o(e.generatedAt)}`:"Loading..."}</span></div>
        <p class="subtitle">${e?o(e.headline):"Preparing a local demo digest from mock emails and drafts."}</p>
        ${e?`
          <table class="table" style="margin-top:14px">
            <tr><td>Urgent items</td><td>${e.urgentItems.length?T(e.urgentItems):"None"}</td></tr>
            <tr><td>Invoices</td><td>${e.invoices.length?T(e.invoices):"None"}</td></tr>
            <tr><td>Missing documents</td><td>${e.missingDocuments.length?T(e.missingDocuments):"None"}</td></tr>
            <tr><td>Quote requests</td><td>${e.quoteRequests.length?T(e.quoteRequests):"None"}</td></tr>
            <tr><td>Client complaints</td><td>${e.clientComplaints.length?T(e.clientComplaints):"None"}</td></tr>
          </table>
        `:""}
        <div class="actions" style="margin-top:14px">
          <button class="btn primary" data-action="digest" ${u("digest")?"disabled":""}>${u("digest")?"Regenerating...":"Regenerate digest"}</button>
          <button class="btn subtle" data-tab-target="triage">Review triage</button>
        </div>
      </div>
      <div class="panel">
        <div class="panel-title"><h2>Recommended next actions</h2><span>${(e==null?void 0:e.recommendedActions.length)||0} items</span></div>
        <table class="table">
          ${((e==null?void 0:e.recommendedActions)||["Digest is loading."]).map(t=>`<tr><td><span class="badge lead">Action</span></td><td>${o(t)}</td></tr>`).join("")}
          ${Y()?`<tr><td><span class="badge invoice">Advanced</span></td><td>${s.rules.filter(t=>t.on).length} rules are currently enabled.</td></tr>`:""}
        </table>
      </div>
    </div>
  `}function at(){const a=[["Preview Microsoft 365 connection","Shows how an admin could later choose Outlook mailboxes, folders, categories, and contacts. No account is connected now."],["Preview mailbox import","Demonstrates the mailbox structure and workflow patterns Courio could import after a real integration is approved."],["Preview workflow suggestions","Generates local suggestions from fake demo messages. No mailbox rules are created."],["Preview observation mode","Shows how suggested actions could be reviewed before any future mailbox integration is enabled."]];document.querySelector("#import").innerHTML=`
    <div class="panel">
      <div class="panel-title"><h2>Microsoft 365 setup preview</h2><span>Simulated locally</span></div>
      <div class="workflow">
        ${a.map((e,t)=>`
          <div class="step">
            <div class="step-num">${t+1}</div>
            <div><strong>${o(e[0])}</strong><p>${o(e[1])}</p></div>
            <button class="btn subtle" disabled title="Real Microsoft 365 setup is intentionally unavailable in this fake/local prototype.">
              Demo only
            </button>
          </div>
        `).join("")}
      </div>
    </div>
  `}function st(){const a=Object.fromEntries(s.employees.map(i=>[i.id,i])),e=s.emails.filter(i=>s.triageFilter==="urgent"?i.status!=="Done"&&i.urgency==="High":s.triageFilter==="invoices"?i.status!=="Done"&&i.category==="Accounting":!0),t=s.loading.emails?'<div class="loading">Loading mock inbox...</div>':e.length===0?`<div class="empty-state">${s.triageFilter==="urgent"?"No urgent emails. You are caught up on high-priority work.":s.triageFilter==="invoices"?"No invoice emails are waiting for review.":"No emails are available in this local demo."}</div>`:`<table class="table">
        <thead><tr><th>Subject</th><th>Sender</th><th>Category</th><th>Assigned</th><th>Workflow</th><th>Status</th><th></th></tr></thead>
        <tbody>
          ${e.map(i=>{var n;return`
            <tr>
              <td>${o(i.subject)}</td>
              <td>${o(i.sender)}<br><small>${o(i.senderEmail||"")}</small></td>
              <td>
                <span class="badge ${oe(i.category)}">${o(i.category)}</span><br>
                <small>${o(i.urgency||"Medium")} urgency - ${i.confidence||80}% confidence</small>
                <small class="triage-reason" title="${o(i.explanation||"")}">Why: ${o(i.explanation||"Matched the current local category rules.")}</small>
              </td>
              <td>${o(((n=a[i.assignedTo])==null?void 0:n.name)||"Unassigned")}</td>
              <td>${o(i.workflowLabel||"Not started")}</td>
              <td><span class="badge ${i.status==="Done"?"done":""}">${o(i.status)}</span></td>
              <td class="actions">
                <button class="btn subtle" data-review-email="${i.id}" ${u(`review-${i.id}`)?"disabled":""}>${u(`review-${i.id}`)?"Opening...":"Review"}</button>
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
      ${t}
    </div>
  `}function it(){const a=document.querySelector("#drawerRoot");if(s.selectedEmployee){ct(a);return}if(s.selectedRule){dt(a);return}if(s.selectedDraft){lt(a);return}if(!s.selectedEmail){a.innerHTML="";return}const e=s.selectedEmail,t=e.status==="Done",i=s.employees.find(r=>r.id===e.assignedTo),n=["Client complaint","Accounting","Sales","Documents","Missing documents","Scheduling","General"];a.innerHTML=`
    <div class="drawer-backdrop" data-close-drawer></div>
    <aside class="review-drawer" aria-label="Email review">
      <div class="drawer-header">
        <div>
          <div class="badge ${oe(e.category)}">${o(e.category)}</div>
          <h2>${o(e.subject)}</h2>
          <p>${o(e.sender)} - ${o(e.senderEmail)}</p>
        </div>
        <button class="btn subtle" data-close-drawer>Close</button>
      </div>

      <div class="drawer-section">
        <h3>Email body</h3>
        <div class="preview">${o(e.body)}</div>
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
            ${s.employees.map(r=>`<option value="${o(r.id)}" ${r.id===e.assignedTo?"selected":""}>${o(r.name)} - ${o(r.department)}</option>`).join("")}
          </select>
        </label>
      </div>

      <div class="drawer-grid">
        <div class="mini-stat"><span>Urgency</span><strong>${o(e.urgency)}</strong></div>
        <div class="mini-stat"><span>Confidence</span><strong>${e.confidence}%</strong></div>
        <div class="mini-stat"><span>Status</span><strong>${o(e.status)}</strong></div>
        <div class="mini-stat"><span>Owner</span><strong>${o((i==null?void 0:i.name)||"Unassigned")}</strong></div>
      </div>

      <div class="drawer-section">
        <h3>Draft workflow</h3>
        <div class="preview">
          ${t?"This email is completed. Draft actions are locked unless the email is reopened later.":e.draftId?`${e.draftReadyForHumanSend?"Draft approved and ready for human send.":`Draft exists: ${o(e.draftStatusLabel)}.`} One email uses one draft record.`:"No active draft exists for this email."}
        </div>
      </div>

      <div class="drawer-section">
        <h3>Suggested action</h3>
        <div class="preview">${o(e.suggestedAction)}</div>
      </div>

      <div class="drawer-section">
        <div class="panel-title compact-title">
          <h3>Why was this flagged?</h3>
          <button class="btn subtle" data-toggle-explanation>${s.showExplanation?"Less context":"More context"}</button>
        </div>
        <div class="preview">${o(e.explanation)}</div>
        ${s.showExplanation?'<div class="preview explanation-detail">This recommendation is based only on wording and patterns in the local demo message. A person must review it before acting.</div>':""}
      </div>

      <div class="drawer-section">
        <h3>Thread</h3>
        <ul>${e.messages.map(r=>`<li>${o(r)}</li>`).join("")}</ul>
      </div>

      ${s.summary?`<div class="drawer-section"><h3>Summary</h3><div class="preview">${o(s.summary)}</div></div>`:""}
      <div class="drawer-actions">
        <button class="btn primary" data-summary-email="${e.id}" ${u(`summary-${e.id}`)?"disabled":""}>${u(`summary-${e.id}`)?"Summarizing...":"Summarize"}</button>
        ${e.canOpenDraft?`<button class="btn subtle" data-open-email-draft="${e.id}" ${u(`open-email-draft-${e.id}`)?"disabled":""}>${e.draftActionLabel}</button>`:`<button class="btn subtle" data-generate-draft="${e.id}" ${!e.canGenerateDraft||u(`draft-${e.id}`)?`disabled title="${e.completionBlocker||"Draft action is unavailable."}"`:""}>${u(`draft-${e.id}`)?"Drafting...":e.draftActionLabel}</button>`}
        ${t?'<span class="status-text">Workflow complete</span>':'<span class="status-text">Approving the draft completes this workflow.</span>'}
      </div>
      <p class="drawer-note">This is a local prototype. Courio does not send email.</p>
    </aside>
  `}function nt(){const a=document.querySelector("#modalRoot");if(!s.confirmDialog){a.innerHTML="";return}const e=s.confirmDialog;a.innerHTML=`
    <div class="modal-backdrop"></div>
    <div class="confirm-modal" role="dialog" aria-modal="true">
      <h2>${o(e.title)}</h2>
      <p>${o(e.message)}</p>
      <div class="actions">
        <button class="btn ${e.tone==="danger"?"danger":"primary"}" data-confirm-primary>${o(e.primaryLabel)}</button>
        <button class="btn subtle" data-confirm-cancel>Cancel</button>
      </div>
    </div>
  `}async function rt(a){const e=await qe(a);s.drafts=await C(),await W(a),s.selectedDraft=await L(e.id),s.selectedEmail=null}async function ot(a){var e;await He(a),s.drafts=await C(),s.emails=await k(),s.activity=await R(),s.digest=await x(),s.selectedDraftIds=s.selectedDraftIds.filter(t=>t!==a),((e=s.selectedDraft)==null?void 0:e.id)===a&&(s.selectedDraft=await L(a))}function lt(a){const e=s.selectedDraft,t=e.sourceEmail||{},i=t.status==="Done";a.innerHTML=`
    <div class="drawer-backdrop" data-close-drawer></div>
    <aside class="review-drawer" aria-label="Draft review">
      <div class="drawer-header">
        <div>
          <div class="badge ${e.isReadyForHumanSend?"done":"pending"}">${o(e.statusLabel)}</div>
          <h2>${o(e.title)}</h2>
          <p>Source: ${o(t.subject||e.source)}</p>
        </div>
        <button class="btn subtle" data-close-drawer>Close</button>
      </div>

      <div class="drawer-section">
        <h3>Source email</h3>
        <div class="preview">
          <strong>${o(t.sender||"Mock sender")}</strong><br>
          ${o(t.senderEmail||"")}<br><br>
          ${o(t.body||"This draft is based on a local mock email.")}
        </div>
      </div>

      <div class="drawer-grid">
        <div class="mini-stat"><span>Status</span><strong>${o(i?"Completed":e.statusLabel)}</strong></div>
        <div class="mini-stat"><span>Risk level</span><strong>${o(e.risk||"Low")}</strong></div>
        <div class="mini-stat"><span>Confidence</span><strong>${e.confidence||t.confidence||80}%</strong></div>
        <div class="mini-stat"><span>Sending</span><strong>Never automatic</strong></div>
      </div>

      <div class="drawer-section">
        <h3>Suggested reply</h3>
        <div class="preview">${o(t.suggestedAction||e.title)}</div>
      </div>

      <div class="drawer-section">
        <label>Editable draft body
          <textarea data-draft-editor>${o(e.text)}</textarea>
        </label>
      </div>

      <div class="drawer-actions">
        ${i?'<span class="status-text">Workflow complete. This draft is ready for human send.</span>':`
            <button class="btn primary" data-save-draft="${e.id}" ${u(`save-${e.id}`)?"disabled":""}>${u(`save-${e.id}`)?"Saving...":"Save changes"}</button>
            <button class="btn success" data-approve-draft="${e.id}" ${!e.canApprove||u(`approve-${e.id}`)?`disabled title="${e.approvalBlocker||"Save the reviewed draft before approving."}"`:""}>${u(`approve-${e.id}`)?"Approving...":"Approve and complete"}</button>
          `}
        <button class="btn subtle" data-close-drawer>Close</button>
      </div>
      <p class="drawer-note">Approval completes this workflow and marks the draft ready for a person to send. Courio never sends email.</p>
    </aside>
  `}function dt(a){var i;const e=s.selectedRule,t=["Client complaint","Accounting","Sales","Documents","Missing documents","Scheduling","General"];a.innerHTML=`
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
        <label>Rule name<input data-rule-field="title" value="${o(e.title)}"></label>
        <label>Description<textarea data-rule-field="desc">${o(e.desc)}</textarea></label>
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
        <div class="preview">${o(e.explanation||"This rule is based on repeated wording patterns in the mock inbox.")}</div>
      </div>

      <div class="drawer-section">
        <h3>Match preview</h3>
        <ul>${(e.matches||["No sample matches yet."]).map(n=>`<li>${o(n)}</li>`).join("")}</ul>
      </div>

      ${Y()?`<div class="drawer-section"><h3>Advanced preview</h3><div class="preview">This rule uses the current confidence threshold of ${s.settings.confidenceThreshold||80}%. No mailbox changes happen in the prototype.</div></div>`:""}

      <div class="drawer-actions">
        <button class="btn primary" data-save-rule="${e.id}" ${u(`save-rule-${e.id}`)?"disabled":""}>${u(`save-rule-${e.id}`)?"Saving...":"Save rule"}</button>
        <button class="btn danger" data-delete-rule="${e.id}">Delete rule</button>
        <button class="btn subtle" data-close-drawer>Close</button>
      </div>
    </aside>
  `}function ct(a){const e=s.selectedEmployee,t=e.id==="new";a.innerHTML=`
    <div class="drawer-backdrop" data-close-drawer></div>
    <aside class="review-drawer" aria-label="${t?"Add employee":"Edit employee"}">
      <div class="drawer-header">
        <div>
          <div class="badge lead">Team member</div>
          <h2>${t?"Add employee":"Edit employee"}</h2>
          <p>${t?"Add a local demo team member.":`Reviewing ${o(e.name)}`}</p>
        </div>
        <button class="btn subtle" data-close-drawer>Close</button>
      </div>

      <div class="drawer-section">
        <label>Name<input data-employee-field="name" value="${o(e.name||"")}"></label>
        <label>Email<input data-employee-field="email" type="email" value="${o(e.email||"")}"></label>
        <label>Title<input data-employee-field="title" value="${o(e.title||"")}"></label>
        <label>Department<input data-employee-field="department" value="${o(e.department||"")}"></label>
      </div>

      <div class="drawer-actions">
        <button class="btn primary" data-save-employee="${e.id}" ${u(`save-employee-${e.id}`)?"disabled":""}>${u(`save-employee-${e.id}`)?"Saving...":t?"Add employee":"Save changes"}</button>
        ${t?"":`<button class="btn danger" data-delete-employee="${e.id}">Remove employee</button>`}
        <button class="btn subtle" data-close-drawer>Close</button>
      </div>
      <p class="drawer-note">Employee records remain fake and local to this browser.</p>
    </aside>
  `}function re(){const a=s.ruleQuery.trim().toLowerCase(),e=s.rules.filter(i=>!a||`${i.title} ${i.desc} ${i.category}`.toLowerCase().includes(a)),t=s.loading.rules?'<div class="loading">Loading suggested rules...</div>':e.length===0?`<div class="empty-state">${a?`No rules match “${o(s.ruleQuery)}”. Clear the search to see all local rules.`:"No rules yet. Local rule suggestions will appear here."}</div>`:`<div class="grid cols-2">
        ${e.map(i=>`
          <div class="rule-card">
            <div class="rule-top">
              <div>
                <div class="rule-title">${o(i.title)}</div>
                <div class="rule-desc">${o(i.desc)}</div>
              </div>
              <button class="toggle ${i.on?"on":""}" aria-label="Toggle ${o(i.title)}" data-toggle-rule="${i.id}" ${u(`rule-${i.id}`)?"disabled":""}></button>
            </div>
            <div class="preview"><strong>Local sample preview:</strong> ${o(i.impact)}</div>
            <div class="preview"><strong>${i.confidence||80}% confidence:</strong> ${o(i.explanation||"Based on local mock patterns.")}</div>
            ${Y()?`<div class="preview"><strong>Would match:</strong> ${T(i.matches||["No samples"])}</div>`:""}
            <div class="actions">
              ${i.on?'<span class="status-text">In observation</span>':`<button class="btn primary" data-approve-rule="${i.id}" ${u(`approve-rule-${i.id}`)?"disabled":""}>${u(`approve-rule-${i.id}`)?"Approving...":"Approve for observation"}</button>`}
              <button class="btn subtle" data-edit-rule="${i.id}" ${u(`edit-rule-${i.id}`)?"disabled":""}>${u(`edit-rule-${i.id}`)?"Opening...":"Edit"}</button>
            </div>
          </div>
        `).join("")}
      </div>`;document.querySelector("#rules").innerHTML=`
    <div class="section-toolbar">
      <div><h2>Suggested rules</h2><span>${e.length} shown</span></div>
      <div class="list-toolbar">
        <input data-rule-search type="search" value="${o(s.ruleQuery)}" placeholder="Search rules">
      </div>
    </div>
    ${t}
  `}function ut(){const a=s.selectedDraftIds.length,e=s.drafts.filter(r=>r.risk!=="High"&&r.canSelectForBulkApproval).length,t=!ne(),i=s.drafts.filter(r=>s.draftFilter==="needs_approval"?r.canSelectForBulkApproval:s.draftFilter==="ready"?r.isReadyForHumanSend:!0),n=s.loading.drafts?'<div class="loading">Loading draft queue...</div>':i.length===0?`<div class="empty-state">${s.draftFilter==="needs_approval"?"No drafts need approval. Reviewed drafts will appear here when they are ready.":s.draftFilter==="ready"?"No drafts are ready for human send yet.":"No drafts are available in this local demo."}</div>`:`<table class="table">
        <thead><tr><th>Select</th><th>Draft</th><th>Source</th><th>Risk</th><th>Status</th><th></th></tr></thead>
        <tbody>
          ${i.map(r=>`
            <tr>
              <td><input type="checkbox" data-select-draft="${r.id}" ${s.selectedDraftIds.includes(r.id)?"checked":""} ${r.canSelectForBulkApproval?"":`disabled title="${r.approvalBlocker||"Review and save this draft first."}"`}></td>
              <td>${o(r.title)}</td>
              <td>${o(r.source)}</td>
              <td><span class="badge ${r.risk==="High"?"urgent":"done"}">${o(r.risk||"Low")}</span></td>
              <td><span class="badge ${r.isReadyForHumanSend?"done":"pending"}">${o(r.statusLabel)}</span></td>
              <td class="actions">
                <button class="btn subtle" data-review-draft="${r.id}" ${u(`review-draft-${r.id}`)?"disabled":""}>${u(`review-draft-${r.id}`)?"Opening...":"Review"}</button>
                ${r.isReadyForHumanSend?'<span class="status-text">Workflow complete</span>':`<button class="btn success" data-approve-draft="${r.id}" ${!r.canApprove||u(`approve-${r.id}`)?`disabled title="${r.approvalBlocker||"Review and save this draft first."}"`:""}>${u(`approve-${r.id}`)?"Approving...":"Approve and complete"}</button>`}
              </td>
            </tr>
          `).join("")}
        </tbody>
      </table>`;document.querySelector("#drafts").innerHTML=`
    <div class="panel">
      <div class="panel-title"><h2>Draft approval queue</h2><span>Human approval required</span></div>
      <div class="segmented" style="margin-bottom:14px">
        ${[["all","All drafts"],["needs_approval","Needs approval"],["ready","Ready"]].map(([r,l])=>`<button class="${s.draftFilter===r?"active":""}" data-draft-filter="${r}">${l}</button>`).join("")}
      </div>
      <div class="actions" style="margin-bottom:14px">
        <button class="btn success" data-approve-selected ${a===0||u("approve-selected")?`disabled title="${a===0?"Select at least one reviewed and saved draft.":""}"`:""}>${u("approve-selected")?"Approving...":`Approve selected (${a})`}</button>
        <button class="btn subtle" data-approve-low-risk ${t||e===0||u("approve-low-risk")?`disabled title="${t?"Enable low-risk bulk approval in Advanced workspace settings.":e===0?"No reviewed low-risk drafts are ready for approval.":""}"`:""}>${t?"Low-risk bulk approval disabled":u("approve-low-risk")?"Approving...":`Approve all low-risk (${e})`}</button>
        <span class="mode">Approval completes the workflow; nothing is sent</span>
      </div>
      ${t?'<div class="preview" style="margin-bottom:14px">Low-risk bulk approval is disabled by workspace settings.</div>':""}
      ${n}
    </div>
  `}function pt(){const a=document.querySelector("#assistantRoot"),e=s.assistantMessages.length?s.assistantMessages:[{id:"assistant-loading",role:"assistant",text:"Loading assistant history..."}];a.innerHTML=`
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
              <div class="assistant-message ${t.role==="user"?"user":"bot"}">
                ${o(t.text)}
              </div>
            `).join("")}
          </div>
          <form class="assistant-form">
            <input data-assistant-input placeholder="Show urgent emails" autocomplete="off" ${u("assistant")?"disabled":""}>
            <button class="btn primary" type="submit" ${u("assistant")?"disabled":""}>${u("assistant")?"Working...":"Send"}</button>
          </form>
          <p class="assistant-hint">Try: triage, urgent emails, drafts, invoices, digest, invoice rule, or reset.</p>
        </div>
      `:""}
      <button class="assistant-fab" data-assistant-toggle aria-label="Open Courio assistant">
        AI
      </button>
    </div>
  `}async function mt(a){if(a){if(a.type==="show_triage"){A("triage",{triageFilter:a.filter||"all"});return}if(a.type==="show_drafts"){A("drafts",{draftFilter:a.filter||"all"});return}if(a.type==="generate_digest"){s.digest=await x(),A("dashboard");return}if(a.type==="explain_email"){s.selectedEmail=await se(a.emailId),s.selectedDraft=null,s.selectedRule=null,s.selectedEmployee=null,s.summary="",s.showExplanation=!0,A("triage",{triageFilter:"all",closeDrawers:!1});return}if(a.type==="show_rule"){s.rules=await I(),s.selectedRule=s.rules.find(e=>e.id===a.ruleId)||null,s.selectedEmail=null,s.selectedDraft=null,s.selectedEmployee=null,A("rules",{closeDrawers:!1});return}a.type==="reset_demo_data"&&(s.confirmDialog={type:"reset-demo",title:"Reset demo data?",message:"This clears all local Courio changes and restores the original fake demo data.",primaryLabel:"Reset demo data",tone:"danger"},v())}}function ft(){const a=H();document.querySelector("#admin").innerHTML=`
    <div class="grid cols-2">
      <div class="panel">
        <div class="panel-title"><h2>Workspace settings</h2><span>Prototype</span></div>
        <div class="form-grid">
          <label>Company name<input data-setting="companyName" value="${o(a.companyName||"Demo PME Inc.")}"></label>
          <label>Mode
            <select data-setting="mode">
              ${["Simple","Advanced"].map(e=>`<option ${e===a.mode?"selected":""}>${e}</option>`).join("")}
            </select>
          </label>
          <label>Escalation recipient<input data-setting="escalationRecipient" value="${o(a.escalationRecipient||"owner@company.ca")}"></label>
          ${Ze()?`
          <label>Default mode
            <select data-setting="defaultMode">
              ${["Observation only","Drafts allowed, no auto-send","Auto-categorize after approval"].map(e=>`<option ${e===a.defaultMode?"selected":""}>${e}</option>`).join("")}
            </select>
          </label>
          <label>Confidence threshold<input data-setting="confidenceThreshold" value="${o(a.confidenceThreshold||"80")}"></label>
          <label>Observation days<input data-setting="observationDays" value="${o(a.observationDays||"7")}"></label>
          <label>Low-risk bulk approval
            <select data-setting="allowLowRiskBulkApproval">
              ${["Yes","No"].map(e=>`<option ${e===a.allowLowRiskBulkApproval?"selected":""}>${e}</option>`).join("")}
            </select>
          </label>
          `:'<div class="preview">Simple Mode keeps settings focused: company name, escalation recipient, and no automatic sending.</div>'}
          <button class="btn primary" data-save-settings ${u("settings")?"disabled":""}>${u("settings")?"Saving...":"Save settings"}</button>
          <button class="btn danger" data-reset-demo ${u("reset-demo")?"disabled":""}>${u("reset-demo")?"Resetting...":"Reset Demo Data"}</button>
        </div>
      </div>
      <div class="panel">
        <div class="panel-title"><h2>Safety preview</h2><span>Prototype behavior</span></div>
        <table class="table">
          <tr><td>No automatic sending</td><td>Enforced in this local demo</td></tr>
          <tr><td>Activity history</td><td>Simulated actions stored in this browser</td></tr>
          <tr><td>Account disconnect</td><td>Planned for a future provider integration</td></tr>
          <tr><td>Mailbox permissions</td><td>Not requested or connected in this prototype</td></tr>
          <tr><td>Saved workspace mode</td><td>${o(s.settings.mode||"Simple")}</td></tr>
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
                    <td>${o(e.name)}<br><small>${o(e.email)}</small></td>
                    <td>${o(e.title)}</td>
                    <td>${o(e.department)}</td>
                    <td><button class="btn subtle" data-edit-employee="${e.id}">Edit</button></td>
                  </tr>
                `).join("")}
              </tbody>
            </table>`}
      </div>
      <div class="panel">
        <div class="panel-title"><h2>Recent activity</h2><span>Local audit preview</span></div>
        ${s.activity.length===0?'<div class="empty-state">No activity yet. Completed workflows and team changes will appear here.</div>':`<div class="activity-list">
              ${s.activity.slice(0,8).map(e=>`
                <div class="activity-item">
                  <span>${o(e.label||"Local action completed")}</span>
                  <time>${new Date(e.completedAt).toLocaleString()}</time>
                </div>
              `).join("")}
            </div>`}
      </div>
    </div>
  `}function oe(a){return a==="Urgent"||a==="Client complaint"?"urgent":a==="Accounting"||a==="Documents"||a==="Missing documents"?"invoice":a==="Sales"?"lead":""}document.addEventListener("click",async a=>{const e=a.target.closest("button");if(e){if(e.dataset.assistantToggle!==void 0){s.assistantOpen=!s.assistantOpen,v();return}if(e.dataset.confirmCancel!==void 0){s.confirmDialog=null,v();return}if(e.dataset.confirmPrimary!==void 0){const t=s.confirmDialog;if(s.confirmDialog=null,(t==null?void 0:t.type)==="reset-demo"){await f("reset-demo",async()=>{await _e(),window.location.reload()});return}if((t==null?void 0:t.type)==="delete-rule"){await f(`delete-rule-${t.ruleId}`,async()=>{await We(t.ruleId),s.rules=await I(),s.activity=await R(),s.selectedRule=null},"Rule deleted locally.");return}if((t==null?void 0:t.type)==="delete-employee"){await f(`delete-employee-${t.employeeId}`,async()=>{await Qe(t.employeeId),s.employees=await P(),s.emails=await k(),s.activity=await R(),s.selectedEmployee=null},"Employee removed and assigned emails returned to Unassigned.");return}}if(e.dataset.tab&&A(e.dataset.tab),e.dataset.tabTarget&&A(e.dataset.tabTarget),e.dataset.triageFilter&&(s.triageFilter=e.dataset.triageFilter,v()),e.dataset.draftFilter&&(s.draftFilter=e.dataset.draftFilter,v()),e.dataset.action==="digest"&&await f("digest",async()=>{s.digest=await x()},"Morning digest regenerated from local demo data."),e.dataset.reviewEmail){const t=e.dataset.reviewEmail;await f(`review-${t}`,async()=>{s.selectedEmail=await se(t),s.emails=await k(),s.selectedDraft=null,s.selectedRule=null,s.selectedEmployee=null,s.summary="",s.showExplanation=!1},"Message thread opened.")}if(e.dataset.reviewDraft){const t=e.dataset.reviewDraft;await f(`review-draft-${t}`,async()=>{s.selectedDraft=await L(t),s.selectedEmail=null,s.selectedRule=null,s.selectedEmployee=null,s.summary="",s.showExplanation=!1},"Draft opened for review.")}if(e.dataset.openEmailDraft){const t=e.dataset.openEmailDraft;await f(`open-email-draft-${t}`,async()=>{s.selectedDraft=await Fe(t),s.selectedEmail=null,s.selectedRule=null,s.selectedEmployee=null,s.summary="",s.showExplanation=!1},"Draft opened for editing.")}if(e.dataset.closeDrawer!==void 0&&(s.selectedEmail=null,s.selectedDraft=null,s.selectedRule=null,s.selectedEmployee=null,s.summary="",s.showExplanation=!1,v()),e.dataset.toggleExplanation!==void 0&&(s.showExplanation=!s.showExplanation,v()),e.dataset.summaryEmail){const t=e.dataset.summaryEmail;await f(`summary-${t}`,async()=>{s.summary=await Ne(t)},"Thread summary generated.")}if(e.dataset.generateDraft){const t=e.dataset.generateDraft;await f(`draft-${t}`,async()=>{await rt(t)},"Draft opened. Existing edits were preserved.")}if(e.dataset.saveDraft){const t=e.dataset.saveDraft,i=document.querySelector("[data-draft-editor]");await f(`save-${t}`,async()=>{var n;await Oe(t,i.value),s.drafts=await C(),s.emails=await k(),((n=s.selectedDraft)==null?void 0:n.id)===t&&(s.selectedDraft=await L(t))},"Draft saved locally.")}if(e.dataset.toggleRule){const t=e.dataset.toggleRule;await f(`rule-${t}`,async()=>{await X(t),s.rules=await I()},"Rule preview state updated.")}if(e.dataset.approveRule){const t=e.dataset.approveRule;await f(`approve-rule-${t}`,async()=>{s.rules.find(n=>n.id===t).on||await X(t),s.rules=await I()},"Rule approved for observation mode.")}if(e.dataset.editRule){const t=e.dataset.editRule;await f(`edit-rule-${t}`,async()=>{s.selectedRule=s.rules.find(i=>i.id===t),s.selectedEmail=null,s.selectedDraft=null,s.selectedEmployee=null},"Rule opened for local editing.")}if(e.dataset.saveRule){const t=e.dataset.saveRule,i=Object.fromEntries([...document.querySelectorAll("[data-rule-field]")].map(n=>[n.dataset.ruleField,n.value]));await f(`save-rule-${t}`,async()=>{await Pe(t,i),s.rules=await I(),s.selectedRule=s.rules.find(n=>n.id===t)},"Rule saved locally.")}if(e.dataset.deleteRule){const t=e.dataset.deleteRule,i=s.rules.find(n=>n.id===t);s.confirmDialog={type:"delete-rule",ruleId:t,title:"Delete this rule?",message:`Delete “${(i==null?void 0:i.title)||"this rule"}” from the local demo?`,primaryLabel:"Delete rule",tone:"danger"},v()}if(e.dataset.addEmployee!==void 0&&(s.selectedEmployee={id:"new",name:"",email:"",title:"",department:""},s.selectedEmail=null,s.selectedDraft=null,s.selectedRule=null,v()),e.dataset.editEmployee&&(s.selectedEmployee=s.employees.find(t=>t.id===e.dataset.editEmployee)||null,s.selectedEmail=null,s.selectedDraft=null,s.selectedRule=null,v()),e.dataset.saveEmployee){const t=e.dataset.saveEmployee,i=Object.fromEntries([...document.querySelectorAll("[data-employee-field]")].map(n=>[n.dataset.employeeField,n.value]));await f(`save-employee-${t}`,async()=>{const n=t==="new"?await Ge(i):await ze(t,i);s.employees=await P(),s.activity=await R(),s.selectedEmployee=s.employees.find(r=>r.id===n.id)||null},t==="new"?"Employee added locally.":"Employee changes saved locally.")}if(e.dataset.deleteEmployee){const t=e.dataset.deleteEmployee,i=s.employees.find(n=>n.id===t);s.confirmDialog={type:"delete-employee",employeeId:t,title:"Remove this employee?",message:`Remove ${(i==null?void 0:i.name)||"this employee"}? Their assigned emails will return to Unassigned.`,primaryLabel:"Remove employee",tone:"danger"},v()}if(e.dataset.approveDraft){const t=e.dataset.approveDraft;await f(`approve-${t}`,async()=>{await ot(t)},"Draft approved and workflow completed. Nothing was sent.")}if(e.dataset.approveSelected!==void 0&&await f("approve-selected",async()=>{await ie(s.selectedDraftIds),s.drafts=await C(),s.emails=await k(),s.activity=await R(),s.digest=await x(),s.selectedDraftIds=[]},"Selected drafts approved and workflows completed. Nothing was sent."),e.dataset.approveLowRisk!==void 0){if(!ne()){N("Low-risk bulk approval is disabled by workspace settings.",!0);return}await f("approve-low-risk",async()=>{await je(),s.drafts=await C(),s.emails=await k(),s.activity=await R(),s.digest=await x(),s.selectedDraftIds=[]},"Low-risk drafts approved and workflows completed. Nothing was sent.")}if(e.dataset.saveSettings!==void 0){const t=Object.fromEntries([...document.querySelectorAll("[data-setting]")].map(i=>[i.dataset.setting,i.value]));await f("settings",async()=>{s.settings=await Me(t),s.settingsForm={...s.settings}},"Settings saved locally.")}e.dataset.resetDemo!==void 0&&(s.confirmDialog={type:"reset-demo",title:"Reset demo data?",message:"This clears all local Courio changes and restores the original fake demo data.",primaryLabel:"Reset demo data",tone:"danger"},v())}});document.addEventListener("change",async a=>{const e=a.target;if(e.dataset.setting!==void 0){s.settingsForm={...H(),[e.dataset.setting]:e.value},e.dataset.setting==="mode"&&v();return}if(e.dataset.emailCategory){const t=e.dataset.emailCategory;await f(`category-${t}`,async()=>{await Be(t,e.value),await W(t)},"Category updated locally.")}if(e.dataset.emailAssignee){const t=e.dataset.emailAssignee;await f(`assign-${t}`,async()=>{await Ve(t,e.value),await W(t)},"Email assignment updated locally.")}if(e.dataset.selectDraft){const t=e.dataset.selectDraft;s.selectedDraftIds=e.checked?[...new Set([...s.selectedDraftIds,t])]:s.selectedDraftIds.filter(i=>i!==t),v()}});document.addEventListener("input",a=>{const e=a.target;if(e.dataset.setting!==void 0){s.settingsForm={...H(),[e.dataset.setting]:e.value};return}if(e.dataset.ruleSearch===void 0)return;s.ruleQuery=e.value,re();const t=document.querySelector("[data-rule-search]");t==null||t.focus(),t==null||t.setSelectionRange(s.ruleQuery.length,s.ruleQuery.length)});document.addEventListener("submit",async a=>{const e=a.target.closest(".assistant-form");if(!e)return;a.preventDefault();const t=e.querySelector("[data-assistant-input]"),i=t.value.trim();i&&await f("assistant",async()=>{var r;const n=await Ue(i,{selectedEmailId:((r=s.selectedEmail)==null?void 0:r.id)||null});s.assistantMessages=n.messages,t.value="",await mt(n.action)})});v();et();
