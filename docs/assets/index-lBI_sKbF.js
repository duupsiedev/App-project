(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function t(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(n){if(n.ep)return;n.ep=!0;const o=t(n);fetch(n.href,o)}})();const K={dashboard:["Overview","A local workflow preview for email triage, summaries, routing suggestions, and draft preparation."],import:["Setup preview","Preview how a future Microsoft 365 connection could import mailbox structure and workflow patterns."],triage:["Inbox triage","Review AI-classified messages before any action is taken."],rules:["Rules","Approve or adjust local rule previews. They do not affect a real mailbox."],drafts:["Drafts","Review prepared replies and mark them ready for a person to send."],admin:["Admin","Manage local workspace preferences and preview future integration safeguards."]},me=[{id:"email-1",subject:"Very unhappy about no response",sender:"Maya Chen",senderEmail:"maya@northstar-retail.ca",body:"I have followed up twice and still have not received an answer about the service issue from last week. We need someone senior to respond today.",category:"Client complaint",urgency:"High",confidence:94,suggestedAction:"Escalate to owner",requiresDraft:!0,assignedTo:"emp-1",explanation:"Courio flagged this because the client mentions repeated follow-ups, no response, and asks for senior attention today.",thread:["Client followed up twice about an unanswered service issue.","The last message uses negative sentiment and asks for owner attention."],summary:"Client is frustrated by delayed response. Recommend owner review today.",draft:"Hi, thank you for the follow-up. I'm sorry this has taken longer than expected. I am escalating this now and will make sure you receive a clear update today."},{id:"email-2",subject:"Invoice #1844 payment status",sender:"Alex Rivera",senderEmail:"alex@brightline-supplies.ca",body:"Could you confirm whether invoice #1844 has been approved for payment? It was due last Friday.",category:"Accounting",urgency:"Medium",confidence:89,suggestedAction:"Route to accounting",requiresDraft:!0,assignedTo:"emp-2",explanation:"Courio saw an invoice number, payment-status wording, and a due-date reference, so it suggested accounting review.",thread:["Supplier asks whether invoice #1844 has been scheduled for payment.","Invoice appears related to recurring monthly services."],summary:"Supplier is requesting a payment-status update for invoice #1844.",draft:"Hi, thanks for checking in. We are reviewing invoice #1844 with accounting and will send a status update shortly."},{id:"email-3",subject:"Quote request for monthly bookkeeping",sender:"Priya Nair",senderEmail:"priya@lakeside-catering.ca",body:"We are looking for monthly bookkeeping help for a small catering business. We have six employees and would like pricing before the end of the week.",category:"Sales",urgency:"Medium",confidence:86,suggestedAction:"Prepare intake draft",requiresDraft:!0,assignedTo:"emp-3",explanation:"Courio matched this to sales because the sender asks for pricing, describes company needs, and appears to be a new prospect.",thread:["New prospect requested pricing for monthly bookkeeping.","They mentioned six employees and monthly receipt volume."],summary:"New lead is asking for bookkeeping pricing. Intake details are partially available.",draft:"Hi, thanks for reaching out. We'd be happy to help with monthly bookkeeping. Could you share your approximate monthly transaction count and preferred start date?"},{id:"email-4",subject:"Payroll documents attached",sender:"Tom Bennett",senderEmail:"tom@harbour-grill.ca",body:"Please find this period's payroll documents attached. Let me know if anything is missing before Thursday.",category:"Documents",urgency:"Low",confidence:91,suggestedAction:"Apply payroll category",requiresDraft:!0,assignedTo:"emp-4",explanation:"Courio detected payroll wording and an attachment reference, so it suggested categorizing this for payroll review.",thread:["Client attached payroll documents for this period.","Message should be categorized for payroll review."],summary:"Payroll documents are attached and ready to route to payroll workflow.",draft:"Hi, thanks. We received the payroll documents and will review them for the current period."},{id:"email-5",subject:"Missing March receipts",sender:"Elena Morris",senderEmail:"elena@maple-therapy.ca",body:"I thought I sent the March receipts, but I may have missed the attachment. Can you let me know what you still need?",category:"Missing documents",urgency:"Medium",confidence:88,suggestedAction:"Prepare follow-up draft",requiresDraft:!0,assignedTo:"emp-2",explanation:"Courio flagged this because the email talks about receipts and a possibly missing attachment, which usually needs a document follow-up.",thread:["Client mentions March receipts but no attachments are present.","Follow-up should request the missing files."],summary:"March receipts appear to be missing. Prepare a concise document request.",draft:"Hi, thanks for the note. It looks like the March receipts were not attached. Could you resend them when convenient?"},{id:"email-6",subject:"Can we move tomorrow's appointment?",sender:"Jordan Lee",senderEmail:"jordan@greenway-landscaping.ca",body:"Something came up with our crew schedule. Can we move tomorrow's appointment to next Tuesday afternoon?",category:"Scheduling",urgency:"Low",confidence:82,suggestedAction:"Offer available times",requiresDraft:!0,assignedTo:"emp-5",explanation:"Courio identified a scheduling change request with a proposed new time, so it suggested a simple scheduling reply.",thread:["Client asks to move an appointment from tomorrow to next Tuesday afternoon.","No urgent sentiment or billing issue detected."],summary:"Client wants to reschedule tomorrow's appointment to next Tuesday afternoon.",draft:"Hi, thanks for letting us know. Next Tuesday afternoon should work on our side. Could you confirm your preferred time window?"}],fe=[{id:"emp-1",name:"Nadia Patel",title:"Owner",email:"nadia@courio-demo.ca",department:"Leadership"},{id:"emp-2",name:"Marcus Roy",title:"Bookkeeper",email:"marcus@courio-demo.ca",department:"Accounting"},{id:"emp-3",name:"Sofia Tremblay",title:"Client Success Lead",email:"sofia@courio-demo.ca",department:"Sales"},{id:"emp-4",name:"Daniel Kim",title:"Payroll Specialist",email:"daniel@courio-demo.ca",department:"Payroll"},{id:"emp-5",name:"Avery Brooks",title:"Office Coordinator",email:"avery@courio-demo.ca",department:"Operations"}],ge=[{id:"rule-1",title:"Supplier invoice routing",desc:"Suggest an accounting category and owner for supplier invoices and payment requests.",category:"Accounting",confidence:91,explanation:"Courio looks for invoice numbers, payment wording, supplier senders, and due-date language.",impact:"Matches the sample invoice messages in this local demo.",matches:["Invoice #1844 payment status","Supplier payment confirmation"],on:!0},{id:"rule-2",title:"Client escalation detection",desc:"Flag negative sentiment, repeated follow-ups, or unanswered client messages older than 48 hours.",category:"Client complaint",confidence:94,explanation:"Courio looks for negative sentiment, repeated follow-ups, and requests for owner attention.",impact:"Flags the sample high-risk client thread in this local demo.",matches:["Very unhappy about no response"],on:!0},{id:"rule-3",title:"Quote request intake",desc:"Prepare standardized draft replies for new prospects requesting pricing or availability.",category:"Sales",confidence:86,explanation:"Courio looks for pricing requests, new prospect language, and service-fit details.",impact:"Matches the sample quote request in this local demo.",matches:["Quote request for monthly bookkeeping"],on:!1},{id:"rule-4",title:"Missing document follow-up",desc:"Prepare client reminders when required documents are mentioned but not attached.",category:"Missing documents",confidence:88,explanation:"Courio looks for missing attachment wording, receipt requests, and document follow-up language.",impact:"Useful for bookkeeping, accounting, insurance, and service teams.",matches:["Missing March receipts"],on:!1}],q="courio.mockState.v1",B="courio.assistantHistory.v1",V=2,c=Object.freeze({NEEDS_REVIEW:"needs_review",READY_FOR_DRAFT:"ready_for_draft",DRAFT_GENERATED:"draft_generated",DRAFT_REVIEWED:"draft_reviewed",DRAFT_SAVED:"draft_saved",COMPLETED:"completed"}),ve=new Set(Object.values(c)),we={status:"Simulated setup preview",safetyNote:"No account is connected. This demo does not access real email, folders, files, or contacts.",futureNote:"In a future version, this step could connect to Gmail or Microsoft 365 after explicit approval.",mailboxes:[{id:"mailbox-main",name:"Main inbox",address:"hello@demo-company.ca",type:"Primary mailbox",volume:"142 recent threads",risk:"Mixed priority",folders:["Inbox","Needs reply","Clients","Vendors","Archive"],categories:["Client complaint","Accounting","Sales","Scheduling"],frequentSenders:["Northstar Retail","Brightline Supplies","Lakeside Catering"],sharedInboxes:["info@demo-company.ca"],recentThreads:["Very unhappy about no response","Invoice #1844 payment status","Quote request for monthly bookkeeping"]},{id:"mailbox-accounting",name:"Accounting",address:"accounting@demo-company.ca",type:"Shared mailbox",volume:"88 recent threads",risk:"Document-heavy",folders:["Invoices","Receipts","Payroll","Tax documents","Vendors"],categories:["Accounting","Documents","Missing documents"],frequentSenders:["Brightline Supplies","Harbour Grill","Maple Therapy"],sharedInboxes:["payroll@demo-company.ca"],recentThreads:["Invoice #1844 payment status","Payroll documents attached","Missing March receipts"]},{id:"mailbox-sales",name:"Sales",address:"sales@demo-company.ca",type:"Shared mailbox",volume:"53 recent threads",risk:"Revenue-sensitive",folders:["Leads","Quotes","Follow up","Won","Lost"],categories:["Sales","Scheduling"],frequentSenders:["Lakeside Catering","Greenway Landscaping","New prospects"],sharedInboxes:["quotes@demo-company.ca"],recentThreads:["Quote request for monthly bookkeeping","Can we move tomorrow's appointment?"]},{id:"mailbox-operations",name:"Operations",address:"ops@demo-company.ca",type:"Team mailbox",volume:"61 recent threads",risk:"Coordination-heavy",folders:["Scheduling","Client updates","Internal","Completed"],categories:["Scheduling","Documents","General"],frequentSenders:["Greenway Landscaping","Client coordinators","Office team"],sharedInboxes:["support@demo-company.ca"],recentThreads:["Can we move tomorrow's appointment?","Payroll documents attached"]},{id:"mailbox-shared",name:"Shared inbox",address:"info@demo-company.ca",type:"Shared intake",volume:"119 recent threads",risk:"Needs routing",folders:["Inbox","Unsorted","Clients","Prospects","Vendors"],categories:["Client complaint","Sales","Accounting","Missing documents"],frequentSenders:["Clients","Suppliers","Prospects"],sharedInboxes:["hello@demo-company.ca","support@demo-company.ca"],recentThreads:["Very unhappy about no response","Quote request for monthly bookkeeping","Missing March receipts"]}],scanItems:[{label:"Folders",detail:"Inbox structure, archive folders, and team-specific folders.",count:14},{label:"Labels/categories",detail:"Existing categories that could map to Courio triage buckets.",count:9},{label:"Frequent senders",detail:"Recurring clients, vendors, prospects, and internal senders.",count:26},{label:"Shared inboxes",detail:"Mailboxes that several employees may monitor.",count:4},{label:"Recent threads",detail:"Recent local demo examples used to preview workflow suggestions.",count:142},{label:"Suggested workflow rules",detail:"Draft local rules for routing, escalation, and follow-up.",count:5}],setupSteps:[{title:"Choose mailbox",detail:"Select the mailbox Courio should preview.",state:"Available in demo"},{title:"Scan folders and labels",detail:"Preview folders, categories, and common sender patterns.",state:"Simulated"},{title:"Detect common email types",detail:"Identify invoices, quote requests, complaints, missing documents, and scheduling.",state:"Simulated"},{title:"Suggest workflows",detail:"Create local suggested rules for review before anything is used.",state:"Simulated"},{title:"Ready for review",detail:"Move to Triage and Rules to inspect the fake suggestions.",state:"Demo only"}],workflowSuggestions:[{match:"Invoices",outcome:"Accounting review",reason:"Invoice numbers, due dates, supplier language."},{match:"Quote requests",outcome:"Sales intake",reason:"Pricing requests, service-fit details, new prospect wording."},{match:"Complaints",outcome:"Owner escalation",reason:"Repeated follow-ups, negative sentiment, senior attention requests."},{match:"Missing documents",outcome:"Follow-up draft",reason:"Receipts, attachments, payroll, or document gaps."},{match:"Scheduling",outcome:"Offer available times",reason:"Appointment changes, time windows, reschedule language."}]},k={schemaVersion:V,emails:me.map(ye),employees:structuredClone(fe),rules:structuredClone(ge),drafts:[],settings:{productName:"Courio",mode:"Simple",companyName:"Demo PME Inc.",defaultMode:"Observation only",escalationRecipient:"owner@company.ca",confidenceThreshold:"80",observationDays:"7",allowLowRiskBulkApproval:"Yes",approvalRequired:!0,autoSend:!1},completedActions:[],deletedEmployeeIds:[],deletedRuleIds:[]},d=he();let F=ke();const m=(a=550)=>new Promise(e=>setTimeout(e,a));function p(a){return structuredClone(a)}function ye(a){const{status:e,workflowStatus:t,reviewed:i,...n}=p(a);return{...n,workflowState:c.NEEDS_REVIEW}}function he(){try{const a=window.localStorage.getItem(q);if(!a)return p(k);const e=JSON.parse(a),t=be(e);return window.localStorage.setItem(q,JSON.stringify(t)),t}catch{return p(k)}}function be(a){const e=a.deletedEmployeeIds||[],t=a.deletedRuleIds||[],i=j(k.emails,a.emails),n=Array.isArray(a.drafts)?a.drafts:[],o=Ee(n),l=i.map(f=>{const ce=o.find(Y=>(Y.emailId||Y.id)===f.id),ue=$e(f,ce,a.schemaVersion),{status:yt,workflowStatus:ht,reviewed:bt,...pe}=f;return{...pe,workflowState:ue}}),h=new Map(l.map(f=>[f.id,f])),v=o.filter(f=>De(f,h.get(f.emailId||f.id))).map(Se);return{...p(k),...a,schemaVersion:V,emails:l,employees:j(k.employees.filter(f=>!e.includes(f.id)),(a.employees||[]).filter(f=>!e.includes(f.id))),rules:j(k.rules.filter(f=>!t.includes(f.id)),(a.rules||[]).filter(f=>!t.includes(f.id))),drafts:v,settings:{...k.settings,...a.settings||{}},completedActions:Array.isArray(a.completedActions)?a.completedActions:[],deletedEmployeeIds:e,deletedRuleIds:t}}function $e(a,e,t){return t>=V&&ve.has(a.workflowState)?a.workflowState:a.status==="Done"||a.workflowStatus==="Completed"||(e==null?void 0:e.status)==="Ready for human send"||(e==null?void 0:e.status)==="Approved"?c.COMPLETED:(e==null?void 0:e.status)==="Saved"?c.DRAFT_SAVED:e!=null&&e.reviewed?c.DRAFT_REVIEWED:e!=null&&e.generated||(e==null?void 0:e.status)==="Generated"?c.DRAFT_GENERATED:a.reviewed||a.reviewedAt?c.READY_FOR_DRAFT:c.NEEDS_REVIEW}function Ee(a){const e=new Map;for(const t of a){const i=(t==null?void 0:t.emailId)||(t==null?void 0:t.id);if(!i)continue;const n=e.get(i);(!n||J(t)>J(n))&&e.set(i,t)}return[...e.values()]}function J(a){return({"Needs approval":0,Generated:1,Saved:3,"Ready for human send":4,Approved:4}[a.status]||0)+(a.generated?1:0)+(a.reviewed?1:0)}function De(a,e){return!a||!e?!1:!!(a.generated||a.reviewed||["Generated","Saved","Ready for human send","Approved"].includes(a.status)||[c.DRAFT_GENERATED,c.DRAFT_REVIEWED,c.DRAFT_SAVED,c.COMPLETED].includes(e.workflowState))}function Se(a){const{generated:e,reviewed:t,status:i,...n}=p(a);return{...n,emailId:a.emailId||a.id}}function j(a,e=[]){const t=Array.isArray(e)?e:[],i=a.map(o=>{const l=t.find(h=>h.id===o.id);return l?{...o,...l}:p(o)}),n=t.filter(o=>!a.some(l=>l.id===o.id));return[...i,...n.map(p)]}function y(){window.localStorage.setItem(q,JSON.stringify(d))}function ke(){try{const a=window.localStorage.getItem(B);return a?JSON.parse(a):[{id:"assistant-welcome",role:"assistant",text:"Hi, I can help with urgent emails, invoices, drafts, digest updates, rules, and explanations."}]}catch{return[{id:"assistant-welcome",role:"assistant",text:"Hi, I can help with urgent emails, invoices, drafts, digest updates, rules, and explanations."}]}}function Re(){window.localStorage.setItem(B,JSON.stringify(F))}function Ae(){return d.settings.allowLowRiskBulkApproval!=="No"}function xe(){return!0}function b(a){return a.workflowState===c.COMPLETED}function G(a){const e=d.emails.find(t=>t.id===(a.emailId||a.id));return(e==null?void 0:e.workflowState)===c.DRAFT_SAVED}function _(a){return{[c.NEEDS_REVIEW]:"Review required",[c.READY_FOR_DRAFT]:"Draft needed",[c.DRAFT_GENERATED]:"Draft generated",[c.DRAFT_REVIEWED]:"Draft in review",[c.DRAFT_SAVED]:"Draft saved",[c.COMPLETED]:"Completed"}[a]||"Review required"}function ee(a){return{[c.DRAFT_GENERATED]:"Generated",[c.DRAFT_REVIEWED]:"In review",[c.DRAFT_SAVED]:"Saved",[c.COMPLETED]:"Ready for human send"}[a]||"No draft"}function L(a,e={}){d.completedActions.unshift({id:`action-${Date.now()}-${Math.random().toString(16).slice(2)}`,type:a,completedAt:new Date().toISOString(),...e}),d.completedActions=d.completedActions.slice(0,50)}function te(a,e){a.workflowState=c.COMPLETED,e.approvedAt=new Date().toISOString(),e.updatedAt=e.approvedAt,L("draft-approved",{emailId:a.id,draftId:e.id,label:`Draft approved and workflow completed: ${a.subject}`})}function D(a){const e=d.emails.find(l=>l.id===(a.emailId||a.id)),t=b(e||{})?"Done":"Open",i=b(e||{}),n=(e==null?void 0:e.workflowState)===c.DRAFT_SAVED,o=ee(e==null?void 0:e.workflowState);return{...a,sourceEmailStatus:t,sourceWorkflowStatus:_(e==null?void 0:e.workflowState),approvalState:i?"ready_for_human_send":(e==null?void 0:e.workflowState)===c.DRAFT_SAVED?"saved":(e==null?void 0:e.workflowState)===c.DRAFT_GENERATED?"generated":"needs_review",status:o,statusLabel:o,isReadyForHumanSend:i,canApprove:n,canSelectForBulkApproval:n,approvalBlocker:n?"":i?"Source email is completed.":"Review and save this draft before approving."}}function z(a){const e=Q(a.id),t=xe(),i=!!e,n=b(a),o=n,l=a.workflowState!==c.NEEDS_REVIEW;return{...a,reviewed:l,status:o?"Done":"Open",workflowStatus:_(a.workflowState),requiresDraft:t,draftId:i&&(e==null?void 0:e.id)||null,draftStatus:i?ee(a.workflowState):null,draftStatusLabel:i?D(e).statusLabel:"No draft",draftReadyForHumanSend:n,workflowLabel:_(a.workflowState),canComplete:!1,completeActionLabel:"Completed",draftActionLabel:o?"View approved draft":i?"Edit draft":"Generate draft",canGenerateDraft:a.workflowState===c.READY_FOR_DRAFT&&!i,canOpenDraft:i,completionBlocker:l?o?"This workflow is complete.":i?"Open the existing draft to continue this workflow.":"":"Review this email before generating a draft."}}function $(a){const e=d.emails.find(t=>t.id===a);if(!e)throw new Error("Email not found.");return e}function O(a){const e=d.drafts.find(t=>t.id===a);if(!e)throw new Error("Draft not found.");return e}function Q(a){return d.drafts.find(e=>(e.emailId||e.id)===a)}function ae(a){const e=d.employees.find(t=>t.id===a);if(!e)throw new Error("Employee not found.");return e}function se(a,e=null){var n,o,l,h;const t={name:((n=a.name)==null?void 0:n.trim())||"",email:((o=a.email)==null?void 0:o.trim().toLowerCase())||"",title:((l=a.title)==null?void 0:l.trim())||"",department:((h=a.department)==null?void 0:h.trim())||""};if(!t.name)throw new Error("Employee name is required.");if(!t.email)throw new Error("Employee email is required.");if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t.email))throw new Error("Enter a valid employee email address.");if(!t.title)throw new Error("Employee title is required.");if(!t.department)throw new Error("Employee department is required.");if(d.employees.find(v=>{var f;return v.id!==e&&((f=v.email)==null?void 0:f.trim().toLowerCase())===t.email}))throw new Error("An employee with this email already exists.");return t}function Ie(){const a=d.emails.filter(l=>!b(l)),e=d.drafts.map(D),t=e.filter(l=>l.isReadyForHumanSend).length,i=e.filter(l=>l.canSelectForBulkApproval).length,n=l=>a.filter(h=>h.category===l),o=a.filter(l=>l.urgency==="High");return{generatedAt:new Date().toLocaleTimeString([],{hour:"numeric",minute:"2-digit"}),headline:`${a.length} open emails need review. ${o.length} are urgent and ${i} drafts need approval.`,urgentItems:o.map(l=>l.subject),draftsAwaitingApproval:i,readyForHumanSend:t,invoices:n("Accounting").map(l=>l.subject),missingDocuments:n("Missing documents").map(l=>l.subject),quoteRequests:n("Sales").map(l=>l.subject),clientComplaints:n("Client complaint").map(l=>l.subject),recommendedActions:[o.length?"Review urgent client items first.":"No urgent client escalations are open.",i?"Review drafts before marking them ready for human send.":"No drafts are waiting for approval.","Keep observation mode on while this remains a demo."]}}function Te(){const a=d.rules.find(t=>/invoice/i.test(`${t.title} ${t.desc}`));if(a)return a.on=!0,y(),a;const e={id:`rule-${Date.now()}`,title:"Invoice intake assistant",desc:"Flag invoice messages, payment questions, due dates, and supplier follow-ups for accounting review.",category:"Accounting",confidence:84,explanation:"Courio would look for invoice numbers, balance-due wording, supplier names, and payment timing.",impact:"Created locally from the assistant chat. It only previews matches in this prototype.",matches:d.emails.filter(t=>t.category==="Accounting").map(t=>t.subject),on:!0};return d.rules.push(e),y(),e}function Ce(a){return a.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9\s]/g," ").replace(/\s+/g," ")}function Fe(a,e){const t=Array.from({length:e.length+1},(i,n)=>n);for(let i=1;i<=a.length;i+=1){let n=t[0];t[0]=i;for(let o=1;o<=e.length;o+=1){const l=t[o],h=a[i-1]===e[o-1]?0:1;t[o]=Math.min(t[o]+1,t[o-1]+1,n+h),n=l}}return t[e.length]}function Me(a,e){if(a.length!==e.length)return!1;const t=[];for(let i=0;i<a.length;i+=1)a[i]!==e[i]&&t.push(i);return t.length===2&&t[1]===t[0]+1&&a[t[0]]===e[t[1]]&&a[t[1]]===e[t[0]]}function S(a,e){const t=a.split(" ").filter(Boolean);return e.some(i=>i.includes(" ")?a.includes(i):t.some(n=>{if(n===i||Me(n,i))return!0;const o=i.length>=7?2:i.length>=4?1:0;return o>0&&Math.abs(n.length-i.length)<=o&&Fe(n,i)<=o}))}function Le(a,e={}){const t=Ce(a),i=d.emails.filter(v=>!b(v)&&v.urgency==="High").length,n=d.emails.filter(v=>!b(v)&&v.category==="Accounting").length,o=d.drafts.map(D).filter(v=>v.canSelectForBulkApproval).length,l=S(t,["invoice","invoices","accounting"]),h=S(t,["rule","rules","create rule"]);if(S(t,["urgent","urgency"]))return{text:`${i} urgent emails are open. I switched Triage to urgent items.`,action:{type:"show_triage",filter:"urgent"}};if(S(t,["triage","inbox","show inbox","open inbox"]))return{text:"I opened the full Triage inbox.",action:{type:"show_triage",filter:"all"}};if(l&&h)return{text:"Invoice rule is ready in observation mode. It is still fake/local and will not touch a mailbox.",action:{type:"show_rule",ruleId:Te().id}};if(l)return{text:`${n} invoice-related emails are open. I switched Triage to Accounting.`,action:{type:"show_triage",filter:"invoices"}};if(S(t,["draft","drafts","approval","approve"]))return{text:`${o} saved drafts need human approval. I opened the Drafts queue.`,action:{type:"show_drafts",filter:"needs_approval"}};if(S(t,["digest","morning digest"]))return{text:"I regenerated the morning digest from local demo data.",action:{type:"generate_digest"}};if(S(t,["explain","explanation","why"])){if(!e.selectedEmailId)return{text:"Open an email in Triage first, then ask me to explain it. I will show the flagged reason."};const v=z($(e.selectedEmailId));return{text:`Courio flagged "${v.subject}" because: ${v.explanation}`,action:{type:"explain_email",emailId:v.id}}}return S(t,["reset","restart"])?{text:"I can reset the fake demo data now. The page will reload so defaults come back clean.",action:{type:"reset_demo_data"}}:{text:"I did not catch that. Try one of the command hints below."}}async function R(){return await m(),p(d.emails.map(z))}async function P(){return await m(350),p(d.employees)}async function I(){return await m(400),p(d.rules)}async function qe(){return await m(350),p(we)}async function T(){return await m(700),p(Ie())}async function C(){return await m(400),p(d.drafts.map(D))}async function M(a){await m(450);const e=O(a),t=$(e.emailId||e.id);return t.workflowState===c.DRAFT_GENERATED&&(t.workflowState=c.DRAFT_REVIEWED,e.reviewedAt=new Date().toISOString(),e.updatedAt=e.reviewedAt,y()),p({...D(e),sourceEmail:{id:t.id,subject:t.subject,sender:t.sender,senderEmail:t.senderEmail,body:t.body,suggestedAction:t.suggestedAction,confidence:t.confidence,urgency:t.urgency,status:b(t)?"Done":"Open",workflowStatus:_(t.workflowState)}})}async function _e(a){await m(350),$(a);const e=Q(a);return e?M(e.id):null}async function Ne(){return await m(250),p(d.settings)}async function Oe(a){return await m(450),d.settings={...d.settings,...a,approvalRequired:!0,autoSend:!1},y(),p(d.settings)}async function He(){return await m(350),window.localStorage.removeItem(q),window.localStorage.removeItem(B),p(k)}async function ie(a){await m();const e=$(a);return e.workflowState===c.NEEDS_REVIEW&&(e.workflowState=c.READY_FOR_DRAFT,e.reviewedAt=new Date().toISOString(),y()),p({...z(e),messages:e.thread})}async function je(a){return await m(700),$(a).summary}async function Pe(a){await m(750);const e=$(a);if(b(e))throw new Error("This email is done. Reopen it before creating or changing a draft.");if(e.workflowState===c.NEEDS_REVIEW)throw new Error("Review this email before generating a draft.");const t=Q(a);if(t)return p(D(t));if(e.workflowState!==c.READY_FOR_DRAFT)throw new Error("This workflow is not ready to generate a new draft.");const i=new Date().toISOString(),n={id:`draft-${a}`,emailId:a,title:e.suggestedAction,source:e.subject,text:e.draft,confidence:e.confidence,risk:e.urgency==="High"?"High":"Low",createdAt:i,updatedAt:i};return d.drafts.push(n),e.workflowState=c.DRAFT_GENERATED,y(),p(D(n))}async function We(a,e){if(await m(),!e||e.trim().length<10)throw new Error("Draft is too short to save.");const t=O(a),i=$(t.emailId||t.id);if(b(i))throw new Error("This email is done. Reopen it before editing the draft.");if(![c.DRAFT_REVIEWED,c.DRAFT_SAVED].includes(i.workflowState))throw new Error("Review this draft before saving it.");return t.text=e,t.updatedAt=new Date().toISOString(),i.workflowState=c.DRAFT_SAVED,y(),p(D(t))}async function Be(a){await m();const e=O(a),t=$(e.emailId||e.id);if(b(t))throw new Error("This email is done. Reopen it before changing draft approval.");if(!G(e))throw new Error("Review this draft before approving.");return te(t,e),y(),p(D(e))}async function ne(a){if(await m(650),!a.length)throw new Error("Select at least one draft first.");const e=a.map(i=>{const n=O(i),o=$(n.emailId||n.id);return{draft:n,email:o}}).filter(({email:i})=>!b(i));if(!e.length)throw new Error("No selected drafts could be approved.");if(e.some(({draft:i})=>!G(i)))throw new Error("Review this draft before approving.");const t=[];for(const{draft:i,email:n}of e)te(n,i),t.push(i.id);return y(),p({approved:t})}async function Ve(){if(await m(700),!Ae())throw new Error("Low-risk bulk approval is disabled by workspace settings.");const a=d.drafts.filter(e=>e.risk!=="High").filter(G).filter(e=>!b($(e.emailId||e.id))).map(e=>e.id);if(!a.length)throw new Error("No low-risk drafts are awaiting approval.");return ne(a)}async function X(a){await m(450);const e=d.rules.find(t=>t.id===a);if(!e)throw new Error("Rule not found.");return e.on=!e.on,y(),p(e)}async function Ge(a,e){var i,n;await m(500);const t=d.rules.find(o=>o.id===a);if(!t)throw new Error("Rule not found.");if(!((i=e.title)!=null&&i.trim()))throw new Error("Rule name is required.");if(!((n=e.desc)!=null&&n.trim()))throw new Error("Rule description is required.");return t.title=e.title.trim(),t.desc=e.desc.trim(),t.category=e.category||t.category,y(),p(t)}async function ze(a){await m(450);const e=d.rules.findIndex(i=>i.id===a);if(e===-1)throw new Error("Rule not found.");const[t]=d.rules.splice(e,1);return d.deletedRuleIds=[...new Set([...d.deletedRuleIds||[],a])],L("rule-deleted",{ruleId:t.id,label:`Rule deleted: ${t.title}`}),y(),p(t)}async function Qe(a,e){if(await m(400),!e)throw new Error("Choose a category before saving.");const t=$(a);return t.category=e,y(),p(t)}async function Ue(a,e){await m(400),e&&ae(e);const t=$(a);return t.assignedTo=e,y(),p(t)}async function Ye(a){await m(500);const e=se(a),t={id:`employee-${Date.now()}`,...e};return d.employees.push(t),L("employee-added",{employeeId:t.id,label:`Employee added: ${t.name}`}),y(),p(t)}async function Ke(a,e){await m(500);const t=ae(a),i=se(e,a);return Object.assign(t,i),L("employee-updated",{employeeId:t.id,label:`Employee updated: ${t.name}`}),y(),p(t)}async function Je(a){await m(500);const e=d.employees.findIndex(n=>n.id===a);if(e===-1)throw new Error("Employee not found.");const[t]=d.employees.splice(e,1);d.deletedEmployeeIds=[...new Set([...d.deletedEmployeeIds||[],a])];let i=0;return d.emails.forEach(n=>{n.assignedTo===a&&(n.assignedTo="",i+=1)}),L("employee-deleted",{employeeId:t.id,label:`Employee removed: ${t.name}. ${i} assigned emails returned to Unassigned.`}),y(),p(t)}async function A(){return await m(250),p(d.completedActions)}async function Xe(){return await m(150),p(F)}async function Ze(a,e={}){if(await m(500),!(a!=null&&a.trim()))throw new Error("Type a command first.");const t={id:`user-${Date.now()}`,role:"user",text:a.trim()},i=Le(a,e),n={id:`assistant-${Date.now()}`,role:"assistant",text:i.text};return F=[...F,t,n].slice(-24),Re(),p({messages:F,action:i.action||null})}const et=document.querySelector("#app"),tt=new Set(["dashboard","import","triage","rules","drafts","admin"]),s={tab:"dashboard",emails:[],employees:[],rules:[],drafts:[],settings:{companyName:"Demo PME Inc.",mode:"Simple",defaultMode:"Observation only",escalationRecipient:"owner@company.ca",approvalRequired:!0,autoSend:!1},settingsForm:null,loading:{emails:!0,rules:!0,drafts:!0},busy:{},selectedEmail:null,selectedDraft:null,selectedRule:null,selectedEmployee:null,selectedDraftIds:[],confirmDialog:null,digest:null,triageFilter:"all",draftFilter:"all",ruleQuery:"",assistantOpen:!1,assistantMessages:[],activity:[],setupPreview:null,selectedSetupMailboxId:"",summary:"",showExplanation:!1};et.innerHTML=`
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
`;function Z(a,e){s.busy[a]=e,w()}async function g(a,e,t){try{Z(a,!0),await e(),t&&N(t)}catch(i){N(i.message||"Something went wrong in the mock workflow.",!0)}finally{Z(a,!1)}}function u(a){return!!s.busy[a]}function N(a,e=!1){const t=document.querySelector("#toast");t.textContent=a,t.classList.toggle("error",e),t.classList.add("show"),window.clearTimeout(t.dataset.timer),t.dataset.timer=window.setTimeout(()=>t.classList.remove("show"),2400)}function x(a,e={}){if(!tt.has(a))throw new Error("That Courio section is unavailable.");const t=s.tab;t==="admin"&&a!=="admin"&&(s.settingsForm=null),a==="admin"&&t!=="admin"&&(s.settingsForm={...s.settings}),s.tab=a,e.triageFilter&&(s.triageFilter=e.triageFilter),e.draftFilter&&(s.draftFilter=e.draftFilter),e.closeDrawers!==!1&&(s.selectedEmail=null,s.selectedDraft=null,s.selectedRule=null,s.selectedEmployee=null,s.summary="",s.showExplanation=!1),w()}async function W(a=(e=>(e=s.selectedEmail)==null?void 0:e.id)()){if(s.emails=await R(),a){const t=s.emails.find(i=>i.id===a);s.selectedEmail=t?{...t,messages:t.thread}:null}}function at(a){return!!(a!=null&&a.isReadyForHumanSend)}function U(){return s.settings.mode==="Advanced"}function oe(){return s.settings.allowLowRiskBulkApproval!=="No"}function r(a=""){return String(a).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function E(a=[]){return a.map(e=>r(e)).join(", ")}function H(){return s.settingsForm||{...s.settings}}function st(){return H().mode==="Advanced"}async function it(){var a;try{const[e,t,i,n,o,l,h,v,f]=await Promise.all([R(),P(),I(),C(),Ne(),T(),Xe(),A(),qe()]);s.emails=e,s.employees=t,s.rules=i,s.drafts=n,s.settings={...s.settings,...o},s.settingsForm=null,s.digest=l,s.assistantMessages=h,s.activity=v,s.setupPreview=f,s.selectedSetupMailboxId=((a=f.mailboxes[0])==null?void 0:a.id)||""}catch(e){N(e.message||"Could not load mock data.",!0)}finally{s.loading.emails=!1,s.loading.rules=!1,s.loading.drafts=!1,w()}}function w(){document.querySelector("#pageTitle").textContent=K[s.tab][0],document.querySelector("#pageSubtitle").textContent=K[s.tab][1],document.querySelectorAll(".section").forEach(a=>{a.classList.toggle("active",a.id===s.tab)}),document.querySelectorAll(".nav button").forEach(a=>{a.classList.toggle("active",a.dataset.tab===s.tab)}),nt(),re(),ot(),le(),ft(),wt(),rt(),lt(),gt()}function nt(){const a=s.emails.filter(t=>t.status!=="Done").length,e=s.digest;document.querySelector("#dashboard").innerHTML=`
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
        <div class="value">${s.drafts.filter(at).length||0}</div>
        <div class="caption">Human approval still required to send</div>
      </div>
    </div>
    <div class="grid cols-2" style="margin-top:16px">
      <div class="panel">
        <div class="panel-title"><h2>Morning digest</h2><span>${e?`Generated ${r(e.generatedAt)}`:"Loading..."}</span></div>
        <p class="subtitle">${e?r(e.headline):"Preparing a local demo digest from mock emails and drafts."}</p>
        ${e?`
          <table class="table" style="margin-top:14px">
            <tr><td>Urgent items</td><td>${e.urgentItems.length?E(e.urgentItems):"None"}</td></tr>
            <tr><td>Invoices</td><td>${e.invoices.length?E(e.invoices):"None"}</td></tr>
            <tr><td>Missing documents</td><td>${e.missingDocuments.length?E(e.missingDocuments):"None"}</td></tr>
            <tr><td>Quote requests</td><td>${e.quoteRequests.length?E(e.quoteRequests):"None"}</td></tr>
            <tr><td>Client complaints</td><td>${e.clientComplaints.length?E(e.clientComplaints):"None"}</td></tr>
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
          ${((e==null?void 0:e.recommendedActions)||["Digest is loading."]).map(t=>`<tr><td><span class="badge lead">Action</span></td><td>${r(t)}</td></tr>`).join("")}
          ${U()?`<tr><td><span class="badge invoice">Advanced</span></td><td>${s.rules.filter(t=>t.on).length} rules are currently enabled.</td></tr>`:""}
        </table>
      </div>
    </div>
  `}function re(){const a=s.setupPreview;if(!a){document.querySelector("#import").innerHTML='<div class="loading">Loading simulated setup preview...</div>';return}const e=a.mailboxes.find(t=>t.id===s.selectedSetupMailboxId)||a.mailboxes[0];document.querySelector("#import").innerHTML=`
    <div class="grid cols-2">
      <div class="panel">
        <div class="panel-title"><h2>${r(a.status)}</h2><span>No account connected</span></div>
        <div class="preview">${r(a.safetyNote)}</div>
        <div class="preview" style="margin-top:12px">${r(a.futureNote)}</div>
        <div class="actions" style="margin-top:14px">
          <button class="btn primary" disabled title="Real OAuth/provider connection is intentionally unavailable in this fake/local prototype.">Connect demo only</button>
          <button class="btn subtle" data-tab-target="triage">Review local triage</button>
        </div>
      </div>

      <div class="panel">
        <div class="panel-title"><h2>Choose simulated mailbox</h2><span>${a.mailboxes.length} demo options</span></div>
        <div class="setup-mailbox-list">
          ${a.mailboxes.map(t=>`
            <button class="setup-mailbox ${t.id===e.id?"active":""}" data-setup-mailbox="${t.id}">
              <strong>${r(t.name)}</strong>
              <span>${r(t.address)}</span>
              <small>${r(t.type)} - ${r(t.volume)}</small>
            </button>
          `).join("")}
        </div>
      </div>
    </div>

    <div class="grid cols-2" style="margin-top:16px">
      <div class="panel">
        <div class="panel-title"><h2>${r(e.name)} preview</h2><span>${r(e.risk)}</span></div>
        <table class="table">
          <tr><td>Folders</td><td>${E(e.folders)}</td></tr>
          <tr><td>Labels/categories</td><td>${E(e.categories)}</td></tr>
          <tr><td>Frequent senders</td><td>${E(e.frequentSenders)}</td></tr>
          <tr><td>Shared inboxes</td><td>${E(e.sharedInboxes)}</td></tr>
          <tr><td>Recent threads</td><td>${E(e.recentThreads)}</td></tr>
        </table>
      </div>

      <div class="panel">
        <div class="panel-title"><h2>What Courio would scan</h2><span>Simulated only</span></div>
        <table class="table">
          ${a.scanItems.map(t=>`
            <tr>
              <td><span class="badge lead">${t.count}</span><br>${r(t.label)}</td>
              <td>${r(t.detail)}</td>
            </tr>
          `).join("")}
        </table>
      </div>
    </div>

    <div class="grid cols-2" style="margin-top:16px">
      <div class="panel">
        <div class="panel-title"><h2>Simulated setup flow</h2><span>Fake progress</span></div>
        <div class="workflow">
          ${a.setupSteps.map((t,i)=>`
            <div class="step">
              <div class="step-num">${i+1}</div>
              <div><strong>${r(t.title)}</strong><p>${r(t.detail)}</p></div>
              <span class="badge ${i===0?"lead":"done"}">${r(t.state)}</span>
            </div>
          `).join("")}
        </div>
      </div>

      <div class="panel">
        <div class="panel-title"><h2>Suggested workflow preview</h2><span>Needs human review</span></div>
        <table class="table">
          ${a.workflowSuggestions.map(t=>`
            <tr>
              <td><strong>${r(t.match)}</strong><br><small>${r(t.reason)}</small></td>
              <td><span class="badge invoice">${r(t.outcome)}</span></td>
            </tr>
          `).join("")}
        </table>
        <div class="preview" style="margin-top:14px">These are local examples. Courio does not create mailbox rules or send email from this page.</div>
      </div>
    </div>
  `}function ot(){const a=Object.fromEntries(s.employees.map(i=>[i.id,i])),e=s.emails.filter(i=>s.triageFilter==="urgent"?i.status!=="Done"&&i.urgency==="High":s.triageFilter==="invoices"?i.status!=="Done"&&i.category==="Accounting":!0),t=s.loading.emails?'<div class="loading">Loading mock inbox...</div>':e.length===0?`<div class="empty-state">${s.triageFilter==="urgent"?"No urgent emails. You are caught up on high-priority work.":s.triageFilter==="invoices"?"No invoice emails are waiting for review.":"No emails are available in this local demo."}</div>`:`<table class="table">
        <thead><tr><th>Subject</th><th>Sender</th><th>Category</th><th>Assigned</th><th>Workflow</th><th>Status</th><th></th></tr></thead>
        <tbody>
          ${e.map(i=>{var n;return`
            <tr>
              <td>${r(i.subject)}</td>
              <td>${r(i.sender)}<br><small>${r(i.senderEmail||"")}</small></td>
              <td>
                <span class="badge ${de(i.category)}">${r(i.category)}</span><br>
                <small>${r(i.urgency||"Medium")} urgency - ${i.confidence||80}% confidence</small>
                <small class="triage-reason" title="${r(i.explanation||"")}">Why: ${r(i.explanation||"Matched the current local category rules.")}</small>
              </td>
              <td>${r(((n=a[i.assignedTo])==null?void 0:n.name)||"Unassigned")}</td>
              <td>${r(i.workflowLabel||"Not started")}</td>
              <td><span class="badge ${i.status==="Done"?"done":""}">${r(i.status)}</span></td>
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
  `}function rt(){const a=document.querySelector("#drawerRoot");if(s.selectedEmployee){mt(a);return}if(s.selectedRule){pt(a);return}if(s.selectedDraft){ut(a);return}if(!s.selectedEmail){a.innerHTML="";return}const e=s.selectedEmail,t=e.status==="Done",i=s.employees.find(o=>o.id===e.assignedTo),n=["Client complaint","Accounting","Sales","Documents","Missing documents","Scheduling","General"];a.innerHTML=`
    <div class="drawer-backdrop" data-close-drawer></div>
    <aside class="review-drawer" aria-label="Email review">
      <div class="drawer-header">
        <div>
          <div class="badge ${de(e.category)}">${r(e.category)}</div>
          <h2>${r(e.subject)}</h2>
          <p>${r(e.sender)} - ${r(e.senderEmail)}</p>
        </div>
        <button class="btn subtle" data-close-drawer>Close</button>
      </div>

      <div class="drawer-section">
        <h3>Email body</h3>
        <div class="preview">${r(e.body)}</div>
      </div>

      <div class="drawer-grid">
        <label>Category
          <select data-email-category="${e.id}">
            ${n.map(o=>`<option value="${o}" ${o===e.category?"selected":""}>${o}</option>`).join("")}
          </select>
        </label>
        <label>Assigned employee
          <select data-email-assignee="${e.id}">
            <option value="" ${e.assignedTo?"":"selected"}>Unassigned</option>
            ${s.employees.map(o=>`<option value="${r(o.id)}" ${o.id===e.assignedTo?"selected":""}>${r(o.name)} - ${r(o.department)}</option>`).join("")}
          </select>
        </label>
      </div>

      <div class="drawer-grid">
        <div class="mini-stat"><span>Urgency</span><strong>${r(e.urgency)}</strong></div>
        <div class="mini-stat"><span>Confidence</span><strong>${e.confidence}%</strong></div>
        <div class="mini-stat"><span>Status</span><strong>${r(e.status)}</strong></div>
        <div class="mini-stat"><span>Owner</span><strong>${r((i==null?void 0:i.name)||"Unassigned")}</strong></div>
      </div>

      <div class="drawer-section">
        <h3>Draft workflow</h3>
        <div class="preview">
          ${t?"This email is completed. Draft actions are locked unless the email is reopened later.":e.draftId?`${e.draftReadyForHumanSend?"Draft approved and ready for human send.":`Draft exists: ${r(e.draftStatusLabel)}.`} One email uses one draft record.`:"No active draft exists for this email."}
        </div>
      </div>

      <div class="drawer-section">
        <h3>Suggested action</h3>
        <div class="preview">${r(e.suggestedAction)}</div>
      </div>

      <div class="drawer-section">
        <div class="panel-title compact-title">
          <h3>Why was this flagged?</h3>
          <button class="btn subtle" data-toggle-explanation>${s.showExplanation?"Less context":"More context"}</button>
        </div>
        <div class="preview">${r(e.explanation)}</div>
        ${s.showExplanation?'<div class="preview explanation-detail">This recommendation is based only on wording and patterns in the local demo message. A person must review it before acting.</div>':""}
      </div>

      <div class="drawer-section">
        <h3>Thread</h3>
        <ul>${e.messages.map(o=>`<li>${r(o)}</li>`).join("")}</ul>
      </div>

      ${s.summary?`<div class="drawer-section"><h3>Summary</h3><div class="preview">${r(s.summary)}</div></div>`:""}
      <div class="drawer-actions">
        <button class="btn primary" data-summary-email="${e.id}" ${u(`summary-${e.id}`)?"disabled":""}>${u(`summary-${e.id}`)?"Summarizing...":"Summarize"}</button>
        ${e.canOpenDraft?`<button class="btn subtle" data-open-email-draft="${e.id}" ${u(`open-email-draft-${e.id}`)?"disabled":""}>${e.draftActionLabel}</button>`:`<button class="btn subtle" data-generate-draft="${e.id}" ${!e.canGenerateDraft||u(`draft-${e.id}`)?`disabled title="${e.completionBlocker||"Draft action is unavailable."}"`:""}>${u(`draft-${e.id}`)?"Drafting...":e.draftActionLabel}</button>`}
        ${t?'<span class="status-text">Workflow complete</span>':'<span class="status-text">Approving the draft completes this workflow.</span>'}
      </div>
      <p class="drawer-note">This is a local prototype. Courio does not send email.</p>
    </aside>
  `}function lt(){const a=document.querySelector("#modalRoot");if(!s.confirmDialog){a.innerHTML="";return}const e=s.confirmDialog;a.innerHTML=`
    <div class="modal-backdrop"></div>
    <div class="confirm-modal" role="dialog" aria-modal="true">
      <h2>${r(e.title)}</h2>
      <p>${r(e.message)}</p>
      <div class="actions">
        <button class="btn ${e.tone==="danger"?"danger":"primary"}" data-confirm-primary>${r(e.primaryLabel)}</button>
        <button class="btn subtle" data-confirm-cancel>Cancel</button>
      </div>
    </div>
  `}async function dt(a){const e=await Pe(a);s.drafts=await C(),await W(a),s.selectedDraft=await M(e.id),s.selectedEmail=null}async function ct(a){var e;await Be(a),s.drafts=await C(),s.emails=await R(),s.activity=await A(),s.digest=await T(),s.selectedDraftIds=s.selectedDraftIds.filter(t=>t!==a),((e=s.selectedDraft)==null?void 0:e.id)===a&&(s.selectedDraft=await M(a))}function ut(a){const e=s.selectedDraft,t=e.sourceEmail||{},i=t.status==="Done";a.innerHTML=`
    <div class="drawer-backdrop" data-close-drawer></div>
    <aside class="review-drawer" aria-label="Draft review">
      <div class="drawer-header">
        <div>
          <div class="badge ${e.isReadyForHumanSend?"done":"pending"}">${r(e.statusLabel)}</div>
          <h2>${r(e.title)}</h2>
          <p>Source: ${r(t.subject||e.source)}</p>
        </div>
        <button class="btn subtle" data-close-drawer>Close</button>
      </div>

      <div class="drawer-section">
        <h3>Source email</h3>
        <div class="preview">
          <strong>${r(t.sender||"Mock sender")}</strong><br>
          ${r(t.senderEmail||"")}<br><br>
          ${r(t.body||"This draft is based on a local mock email.")}
        </div>
      </div>

      <div class="drawer-grid">
        <div class="mini-stat"><span>Status</span><strong>${r(i?"Completed":e.statusLabel)}</strong></div>
        <div class="mini-stat"><span>Risk level</span><strong>${r(e.risk||"Low")}</strong></div>
        <div class="mini-stat"><span>Confidence</span><strong>${e.confidence||t.confidence||80}%</strong></div>
        <div class="mini-stat"><span>Sending</span><strong>Never automatic</strong></div>
      </div>

      <div class="drawer-section">
        <h3>Suggested reply</h3>
        <div class="preview">${r(t.suggestedAction||e.title)}</div>
      </div>

      <div class="drawer-section">
        <label>Editable draft body
          <textarea data-draft-editor>${r(e.text)}</textarea>
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
  `}function pt(a){var i;const e=s.selectedRule,t=["Client complaint","Accounting","Sales","Documents","Missing documents","Scheduling","General"];a.innerHTML=`
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
        <label>Rule name<input data-rule-field="title" value="${r(e.title)}"></label>
        <label>Description<textarea data-rule-field="desc">${r(e.desc)}</textarea></label>
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
        <div class="preview">${r(e.explanation||"This rule is based on repeated wording patterns in the mock inbox.")}</div>
      </div>

      <div class="drawer-section">
        <h3>Match preview</h3>
        <ul>${(e.matches||["No sample matches yet."]).map(n=>`<li>${r(n)}</li>`).join("")}</ul>
      </div>

      ${U()?`<div class="drawer-section"><h3>Advanced preview</h3><div class="preview">This rule uses the current confidence threshold of ${s.settings.confidenceThreshold||80}%. No mailbox changes happen in the prototype.</div></div>`:""}

      <div class="drawer-actions">
        <button class="btn primary" data-save-rule="${e.id}" ${u(`save-rule-${e.id}`)?"disabled":""}>${u(`save-rule-${e.id}`)?"Saving...":"Save rule"}</button>
        <button class="btn danger" data-delete-rule="${e.id}">Delete rule</button>
        <button class="btn subtle" data-close-drawer>Close</button>
      </div>
    </aside>
  `}function mt(a){const e=s.selectedEmployee,t=e.id==="new";a.innerHTML=`
    <div class="drawer-backdrop" data-close-drawer></div>
    <aside class="review-drawer" aria-label="${t?"Add employee":"Edit employee"}">
      <div class="drawer-header">
        <div>
          <div class="badge lead">Team member</div>
          <h2>${t?"Add employee":"Edit employee"}</h2>
          <p>${t?"Add a local demo team member.":`Reviewing ${r(e.name)}`}</p>
        </div>
        <button class="btn subtle" data-close-drawer>Close</button>
      </div>

      <div class="drawer-section">
        <label>Name<input data-employee-field="name" value="${r(e.name||"")}"></label>
        <label>Email<input data-employee-field="email" type="email" value="${r(e.email||"")}"></label>
        <label>Role / title<input data-employee-field="title" value="${r(e.title||"")}"></label>
        <label>Department<input data-employee-field="department" value="${r(e.department||"")}"></label>
      </div>

      <div class="drawer-actions">
        <button class="btn primary" data-save-employee="${e.id}" ${u(`save-employee-${e.id}`)?"disabled":""}>${u(`save-employee-${e.id}`)?"Saving...":t?"Add employee":"Save changes"}</button>
        ${t?"":`<button class="btn danger" data-delete-employee="${e.id}">Remove employee</button>`}
        <button class="btn subtle" data-close-drawer>Close</button>
      </div>
      <p class="drawer-note">Employee records remain fake and local to this browser. Email addresses must be valid and unique.</p>
    </aside>
  `}function le(){const a=s.ruleQuery.trim().toLowerCase(),e=s.rules.filter(i=>!a||`${i.title} ${i.desc} ${i.category}`.toLowerCase().includes(a)),t=s.loading.rules?'<div class="loading">Loading suggested rules...</div>':e.length===0?`<div class="empty-state">${a?`No rules match “${r(s.ruleQuery)}”. Clear the search to see all local rules.`:"No rules yet. Local rule suggestions will appear here."}</div>`:`<div class="grid cols-2">
        ${e.map(i=>`
          <div class="rule-card">
            <div class="rule-top">
              <div>
                <div class="rule-title">${r(i.title)}</div>
                <div class="rule-desc">${r(i.desc)}</div>
              </div>
              <button class="toggle ${i.on?"on":""}" aria-label="Toggle ${r(i.title)}" data-toggle-rule="${i.id}" ${u(`rule-${i.id}`)?"disabled":""}></button>
            </div>
            <div class="preview"><strong>Local sample preview:</strong> ${r(i.impact)}</div>
            <div class="preview"><strong>${i.confidence||80}% confidence:</strong> ${r(i.explanation||"Based on local mock patterns.")}</div>
            ${U()?`<div class="preview"><strong>Would match:</strong> ${E(i.matches||["No samples"])}</div>`:""}
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
        <input data-rule-search type="search" value="${r(s.ruleQuery)}" placeholder="Search rules">
      </div>
    </div>
    ${t}
  `}function ft(){const a=s.selectedDraftIds.length,e=s.drafts.filter(o=>o.risk!=="High"&&o.canSelectForBulkApproval).length,t=!oe(),i=s.drafts.filter(o=>s.draftFilter==="needs_approval"?o.canSelectForBulkApproval:s.draftFilter==="ready"?o.isReadyForHumanSend:!0),n=s.loading.drafts?'<div class="loading">Loading draft queue...</div>':i.length===0?`<div class="empty-state">${s.draftFilter==="needs_approval"?"No drafts need approval. Reviewed drafts will appear here when they are ready.":s.draftFilter==="ready"?"No drafts are ready for human send yet.":"No drafts are available in this local demo."}</div>`:`<table class="table">
        <thead><tr><th>Select</th><th>Draft</th><th>Source</th><th>Risk</th><th>Status</th><th></th></tr></thead>
        <tbody>
          ${i.map(o=>`
            <tr>
              <td><input type="checkbox" data-select-draft="${o.id}" ${s.selectedDraftIds.includes(o.id)?"checked":""} ${o.canSelectForBulkApproval?"":`disabled title="${o.approvalBlocker||"Review and save this draft first."}"`}></td>
              <td>${r(o.title)}</td>
              <td>${r(o.source)}</td>
              <td><span class="badge ${o.risk==="High"?"urgent":"done"}">${r(o.risk||"Low")}</span></td>
              <td><span class="badge ${o.isReadyForHumanSend?"done":"pending"}">${r(o.statusLabel)}</span></td>
              <td class="actions">
                <button class="btn subtle" data-review-draft="${o.id}" ${u(`review-draft-${o.id}`)?"disabled":""}>${u(`review-draft-${o.id}`)?"Opening...":"Review"}</button>
                ${o.isReadyForHumanSend?'<span class="status-text">Workflow complete</span>':`<button class="btn success" data-approve-draft="${o.id}" ${!o.canApprove||u(`approve-${o.id}`)?`disabled title="${o.approvalBlocker||"Review and save this draft first."}"`:""}>${u(`approve-${o.id}`)?"Approving...":"Approve and complete"}</button>`}
              </td>
            </tr>
          `).join("")}
        </tbody>
      </table>`;document.querySelector("#drafts").innerHTML=`
    <div class="panel">
      <div class="panel-title"><h2>Draft approval queue</h2><span>Human approval required</span></div>
      <div class="segmented" style="margin-bottom:14px">
        ${[["all","All drafts"],["needs_approval","Needs approval"],["ready","Ready"]].map(([o,l])=>`<button class="${s.draftFilter===o?"active":""}" data-draft-filter="${o}">${l}</button>`).join("")}
      </div>
      <div class="actions" style="margin-bottom:14px">
        <button class="btn success" data-approve-selected ${a===0||u("approve-selected")?`disabled title="${a===0?"Select at least one reviewed and saved draft.":""}"`:""}>${u("approve-selected")?"Approving...":`Approve selected (${a})`}</button>
        <button class="btn subtle" data-approve-low-risk ${t||e===0||u("approve-low-risk")?`disabled title="${t?"Enable low-risk bulk approval in Advanced workspace settings.":e===0?"No reviewed low-risk drafts are ready for approval.":""}"`:""}>${t?"Low-risk bulk approval disabled":u("approve-low-risk")?"Approving...":`Approve all low-risk (${e})`}</button>
        <span class="mode">Approval completes the workflow; nothing is sent</span>
      </div>
      ${t?'<div class="preview" style="margin-bottom:14px">Low-risk bulk approval is disabled by workspace settings.</div>':""}
      ${n}
    </div>
  `}function gt(){const a=document.querySelector("#assistantRoot"),e=s.assistantMessages.length?s.assistantMessages:[{id:"assistant-loading",role:"assistant",text:"Loading assistant history..."}];a.innerHTML=`
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
                ${r(t.text)}
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
  `}async function vt(a){if(a){if(a.type==="show_triage"){x("triage",{triageFilter:a.filter||"all"});return}if(a.type==="show_drafts"){x("drafts",{draftFilter:a.filter||"all"});return}if(a.type==="generate_digest"){s.digest=await T(),x("dashboard");return}if(a.type==="explain_email"){s.selectedEmail=await ie(a.emailId),s.selectedDraft=null,s.selectedRule=null,s.selectedEmployee=null,s.summary="",s.showExplanation=!0,x("triage",{triageFilter:"all",closeDrawers:!1});return}if(a.type==="show_rule"){s.rules=await I(),s.selectedRule=s.rules.find(e=>e.id===a.ruleId)||null,s.selectedEmail=null,s.selectedDraft=null,s.selectedEmployee=null,x("rules",{closeDrawers:!1});return}a.type==="reset_demo_data"&&(s.confirmDialog={type:"reset-demo",title:"Reset demo data?",message:"This clears all local Courio changes and restores the original fake demo data.",primaryLabel:"Reset demo data",tone:"danger"},w())}}function wt(){const a=H();document.querySelector("#admin").innerHTML=`
    <div class="grid cols-2">
      <div class="panel">
        <div class="panel-title"><h2>Workspace settings</h2><span>Prototype</span></div>
        <div class="form-grid">
          <label>Company name<input data-setting="companyName" value="${r(a.companyName||"Demo PME Inc.")}"></label>
          <label>Mode
            <select data-setting="mode">
              ${["Simple","Advanced"].map(e=>`<option ${e===a.mode?"selected":""}>${e}</option>`).join("")}
            </select>
          </label>
          <label>Escalation recipient<input data-setting="escalationRecipient" value="${r(a.escalationRecipient||"owner@company.ca")}"></label>
          ${st()?`
          <label>Default mode
            <select data-setting="defaultMode">
              ${["Observation only","Drafts allowed, no auto-send","Auto-categorize after approval"].map(e=>`<option ${e===a.defaultMode?"selected":""}>${e}</option>`).join("")}
            </select>
          </label>
          <label>Confidence threshold<input data-setting="confidenceThreshold" value="${r(a.confidenceThreshold||"80")}"></label>
          <label>Observation days<input data-setting="observationDays" value="${r(a.observationDays||"7")}"></label>
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
          <tr><td>Saved workspace mode</td><td>${r(s.settings.mode||"Simple")}</td></tr>
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
                    <td>${r(e.name)}<br><small>${r(e.email)}</small></td>
                    <td>${r(e.title)}</td>
                    <td>${r(e.department)}</td>
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
                  <span>${r(e.label||"Local action completed")}</span>
                  <time>${new Date(e.completedAt).toLocaleString()}</time>
                </div>
              `).join("")}
            </div>`}
      </div>
    </div>
  `}function de(a){return a==="Urgent"||a==="Client complaint"?"urgent":a==="Accounting"||a==="Documents"||a==="Missing documents"?"invoice":a==="Sales"?"lead":""}document.addEventListener("click",async a=>{const e=a.target.closest("button");if(e){if(e.dataset.assistantToggle!==void 0){s.assistantOpen=!s.assistantOpen,w();return}if(e.dataset.confirmCancel!==void 0){s.confirmDialog=null,w();return}if(e.dataset.confirmPrimary!==void 0){const t=s.confirmDialog;if(s.confirmDialog=null,(t==null?void 0:t.type)==="reset-demo"){await g("reset-demo",async()=>{await He(),window.location.reload()});return}if((t==null?void 0:t.type)==="delete-rule"){await g(`delete-rule-${t.ruleId}`,async()=>{await ze(t.ruleId),s.rules=await I(),s.activity=await A(),s.selectedRule=null},"Rule deleted locally.");return}if((t==null?void 0:t.type)==="delete-employee"){await g(`delete-employee-${t.employeeId}`,async()=>{await Je(t.employeeId),s.employees=await P(),s.emails=await R(),s.activity=await A(),s.selectedEmployee=null},"Employee removed and assigned emails returned to Unassigned.");return}}if(e.dataset.tab&&x(e.dataset.tab),e.dataset.tabTarget&&x(e.dataset.tabTarget),e.dataset.setupMailbox&&(s.selectedSetupMailboxId=e.dataset.setupMailbox,re()),e.dataset.triageFilter&&(s.triageFilter=e.dataset.triageFilter,w()),e.dataset.draftFilter&&(s.draftFilter=e.dataset.draftFilter,w()),e.dataset.action==="digest"&&await g("digest",async()=>{s.digest=await T()},"Morning digest regenerated from local demo data."),e.dataset.reviewEmail){const t=e.dataset.reviewEmail;await g(`review-${t}`,async()=>{s.selectedEmail=await ie(t),s.emails=await R(),s.selectedDraft=null,s.selectedRule=null,s.selectedEmployee=null,s.summary="",s.showExplanation=!1},"Message thread opened.")}if(e.dataset.reviewDraft){const t=e.dataset.reviewDraft;await g(`review-draft-${t}`,async()=>{s.selectedDraft=await M(t),s.selectedEmail=null,s.selectedRule=null,s.selectedEmployee=null,s.summary="",s.showExplanation=!1},"Draft opened for review.")}if(e.dataset.openEmailDraft){const t=e.dataset.openEmailDraft;await g(`open-email-draft-${t}`,async()=>{s.selectedDraft=await _e(t),s.selectedEmail=null,s.selectedRule=null,s.selectedEmployee=null,s.summary="",s.showExplanation=!1},"Draft opened for editing.")}if(e.dataset.closeDrawer!==void 0&&(s.selectedEmail=null,s.selectedDraft=null,s.selectedRule=null,s.selectedEmployee=null,s.summary="",s.showExplanation=!1,w()),e.dataset.toggleExplanation!==void 0&&(s.showExplanation=!s.showExplanation,w()),e.dataset.summaryEmail){const t=e.dataset.summaryEmail;await g(`summary-${t}`,async()=>{s.summary=await je(t)},"Thread summary generated.")}if(e.dataset.generateDraft){const t=e.dataset.generateDraft;await g(`draft-${t}`,async()=>{await dt(t)},"Draft opened. Existing edits were preserved.")}if(e.dataset.saveDraft){const t=e.dataset.saveDraft,i=document.querySelector("[data-draft-editor]");await g(`save-${t}`,async()=>{var n;await We(t,i.value),s.drafts=await C(),s.emails=await R(),((n=s.selectedDraft)==null?void 0:n.id)===t&&(s.selectedDraft=await M(t))},"Draft saved locally.")}if(e.dataset.toggleRule){const t=e.dataset.toggleRule;await g(`rule-${t}`,async()=>{await X(t),s.rules=await I()},"Rule preview state updated.")}if(e.dataset.approveRule){const t=e.dataset.approveRule;await g(`approve-rule-${t}`,async()=>{s.rules.find(n=>n.id===t).on||await X(t),s.rules=await I()},"Rule approved for observation mode.")}if(e.dataset.editRule){const t=e.dataset.editRule;await g(`edit-rule-${t}`,async()=>{s.selectedRule=s.rules.find(i=>i.id===t),s.selectedEmail=null,s.selectedDraft=null,s.selectedEmployee=null},"Rule opened for local editing.")}if(e.dataset.saveRule){const t=e.dataset.saveRule,i=Object.fromEntries([...document.querySelectorAll("[data-rule-field]")].map(n=>[n.dataset.ruleField,n.value]));await g(`save-rule-${t}`,async()=>{await Ge(t,i),s.rules=await I(),s.selectedRule=s.rules.find(n=>n.id===t)},"Rule saved locally.")}if(e.dataset.deleteRule){const t=e.dataset.deleteRule,i=s.rules.find(n=>n.id===t);s.confirmDialog={type:"delete-rule",ruleId:t,title:"Delete this rule?",message:`Delete “${(i==null?void 0:i.title)||"this rule"}” from the local demo?`,primaryLabel:"Delete rule",tone:"danger"},w()}if(e.dataset.addEmployee!==void 0&&(s.selectedEmployee={id:"new",name:"",email:"",title:"",department:""},s.selectedEmail=null,s.selectedDraft=null,s.selectedRule=null,w()),e.dataset.editEmployee&&(s.selectedEmployee=s.employees.find(t=>t.id===e.dataset.editEmployee)||null,s.selectedEmail=null,s.selectedDraft=null,s.selectedRule=null,w()),e.dataset.saveEmployee){const t=e.dataset.saveEmployee,i=Object.fromEntries([...document.querySelectorAll("[data-employee-field]")].map(n=>[n.dataset.employeeField,n.value]));await g(`save-employee-${t}`,async()=>{const n=t==="new"?await Ye(i):await Ke(t,i);s.employees=await P(),s.activity=await A(),s.selectedEmployee=s.employees.find(o=>o.id===n.id)||null},t==="new"?"Employee added locally.":"Employee changes saved locally.")}if(e.dataset.deleteEmployee){const t=e.dataset.deleteEmployee,i=s.employees.find(o=>o.id===t),n=s.emails.filter(o=>o.assignedTo===t).length;s.confirmDialog={type:"delete-employee",employeeId:t,title:"Remove this employee?",message:`Remove ${(i==null?void 0:i.name)||"this employee"}? ${n} assigned email${n===1?"":"s"} will return to Unassigned.`,primaryLabel:"Remove employee",tone:"danger"},w()}if(e.dataset.approveDraft){const t=e.dataset.approveDraft;await g(`approve-${t}`,async()=>{await ct(t)},"Draft approved and workflow completed. Nothing was sent.")}if(e.dataset.approveSelected!==void 0&&await g("approve-selected",async()=>{await ne(s.selectedDraftIds),s.drafts=await C(),s.emails=await R(),s.activity=await A(),s.digest=await T(),s.selectedDraftIds=[]},"Selected drafts approved and workflows completed. Nothing was sent."),e.dataset.approveLowRisk!==void 0){if(!oe()){N("Low-risk bulk approval is disabled by workspace settings.",!0);return}await g("approve-low-risk",async()=>{await Ve(),s.drafts=await C(),s.emails=await R(),s.activity=await A(),s.digest=await T(),s.selectedDraftIds=[]},"Low-risk drafts approved and workflows completed. Nothing was sent.")}if(e.dataset.saveSettings!==void 0){const t=Object.fromEntries([...document.querySelectorAll("[data-setting]")].map(i=>[i.dataset.setting,i.value]));await g("settings",async()=>{s.settings=await Oe(t),s.settingsForm={...s.settings}},"Settings saved locally.")}e.dataset.resetDemo!==void 0&&(s.confirmDialog={type:"reset-demo",title:"Reset demo data?",message:"This clears all local Courio changes and restores the original fake demo data.",primaryLabel:"Reset demo data",tone:"danger"},w())}});document.addEventListener("change",async a=>{const e=a.target;if(e.dataset.setting!==void 0){s.settingsForm={...H(),[e.dataset.setting]:e.value},e.dataset.setting==="mode"&&w();return}if(e.dataset.emailCategory){const t=e.dataset.emailCategory;await g(`category-${t}`,async()=>{await Qe(t,e.value),await W(t)},"Category updated locally.")}if(e.dataset.emailAssignee){const t=e.dataset.emailAssignee;await g(`assign-${t}`,async()=>{await Ue(t,e.value),await W(t)},"Email assignment updated locally.")}if(e.dataset.selectDraft){const t=e.dataset.selectDraft;s.selectedDraftIds=e.checked?[...new Set([...s.selectedDraftIds,t])]:s.selectedDraftIds.filter(i=>i!==t),w()}});document.addEventListener("input",a=>{const e=a.target;if(e.dataset.setting!==void 0){s.settingsForm={...H(),[e.dataset.setting]:e.value};return}if(e.dataset.ruleSearch===void 0)return;s.ruleQuery=e.value,le();const t=document.querySelector("[data-rule-search]");t==null||t.focus(),t==null||t.setSelectionRange(s.ruleQuery.length,s.ruleQuery.length)});document.addEventListener("submit",async a=>{const e=a.target.closest(".assistant-form");if(!e)return;a.preventDefault();const t=e.querySelector("[data-assistant-input]"),i=t.value.trim();i&&await g("assistant",async()=>{var o;const n=await Ze(i,{selectedEmailId:((o=s.selectedEmail)==null?void 0:o.id)||null});s.assistantMessages=n.messages,t.value="",await vt(n.action)})});w();it();
