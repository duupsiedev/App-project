(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function t(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(n){if(n.ep)return;n.ep=!0;const o=t(n);fetch(n.href,o)}})();const Z={dashboard:["Overview","A local workflow preview for email triage, summaries, routing suggestions, and draft preparation."],import:["Setup preview","Preview how a future Microsoft 365 connection could import mailbox structure and workflow patterns."],triage:["Inbox triage","Review AI-classified messages before any action is taken."],rules:["Rules","Approve or adjust local rule previews. They do not affect a real mailbox."],drafts:["Drafts","Review prepared replies and mark them ready for a person to send."],admin:["Admin","Manage local workspace preferences and preview future integration safeguards."]},Se=[{id:"email-1",subject:"Very unhappy about no response",sender:"Maya Chen",senderEmail:"maya@northstar-retail.ca",body:"I have followed up twice and still have not received an answer about the service issue from last week. We need someone senior to respond today.",category:"Client complaint",urgency:"High",confidence:94,suggestedAction:"Escalate to owner",requiresDraft:!0,assignedTo:"emp-1",explanation:"Courio flagged this because the client mentions repeated follow-ups, no response, and asks for senior attention today.",thread:["Client followed up twice about an unanswered service issue.","The last message uses negative sentiment and asks for owner attention."],summary:"Client is frustrated by delayed response. Recommend owner review today.",draft:"Hi, thank you for the follow-up. I'm sorry this has taken longer than expected. I am escalating this now and will make sure you receive a clear update today."},{id:"email-2",subject:"Invoice #1844 payment status",sender:"Alex Rivera",senderEmail:"alex@brightline-supplies.ca",body:"Could you confirm whether invoice #1844 has been approved for payment? It was due last Friday.",category:"Accounting",urgency:"Medium",confidence:89,suggestedAction:"Route to accounting",requiresDraft:!0,assignedTo:"emp-2",explanation:"Courio saw an invoice number, payment-status wording, and a due-date reference, so it suggested accounting review.",thread:["Supplier asks whether invoice #1844 has been scheduled for payment.","Invoice appears related to recurring monthly services."],summary:"Supplier is requesting a payment-status update for invoice #1844.",draft:"Hi, thanks for checking in. We are reviewing invoice #1844 with accounting and will send a status update shortly."},{id:"email-3",subject:"Quote request for monthly bookkeeping",sender:"Priya Nair",senderEmail:"priya@lakeside-catering.ca",body:"We are looking for monthly bookkeeping help for a small catering business. We have six employees and would like pricing before the end of the week.",category:"Sales",urgency:"Medium",confidence:86,suggestedAction:"Prepare intake draft",requiresDraft:!0,assignedTo:"emp-3",explanation:"Courio matched this to sales because the sender asks for pricing, describes company needs, and appears to be a new prospect.",thread:["New prospect requested pricing for monthly bookkeeping.","They mentioned six employees and monthly receipt volume."],summary:"New lead is asking for bookkeeping pricing. Intake details are partially available.",draft:"Hi, thanks for reaching out. We'd be happy to help with monthly bookkeeping. Could you share your approximate monthly transaction count and preferred start date?"},{id:"email-4",subject:"Payroll documents attached",sender:"Tom Bennett",senderEmail:"tom@harbour-grill.ca",body:"Please find this period's payroll documents attached. Let me know if anything is missing before Thursday.",category:"Documents",urgency:"Low",confidence:91,suggestedAction:"Apply payroll category",requiresDraft:!0,assignedTo:"emp-4",explanation:"Courio detected payroll wording and an attachment reference, so it suggested categorizing this for payroll review.",thread:["Client attached payroll documents for this period.","Message should be categorized for payroll review."],summary:"Payroll documents are attached and ready to route to payroll workflow.",draft:"Hi, thanks. We received the payroll documents and will review them for the current period."},{id:"email-5",subject:"Missing March receipts",sender:"Elena Morris",senderEmail:"elena@maple-therapy.ca",body:"I thought I sent the March receipts, but I may have missed the attachment. Can you let me know what you still need?",category:"Missing documents",urgency:"Medium",confidence:88,suggestedAction:"Prepare follow-up draft",requiresDraft:!0,assignedTo:"emp-2",explanation:"Courio flagged this because the email talks about receipts and a possibly missing attachment, which usually needs a document follow-up.",thread:["Client mentions March receipts but no attachments are present.","Follow-up should request the missing files."],summary:"March receipts appear to be missing. Prepare a concise document request.",draft:"Hi, thanks for the note. It looks like the March receipts were not attached. Could you resend them when convenient?"},{id:"email-6",subject:"Can we move tomorrow's appointment?",sender:"Jordan Lee",senderEmail:"jordan@greenway-landscaping.ca",body:"Something came up with our crew schedule. Can we move tomorrow's appointment to next Tuesday afternoon?",category:"Scheduling",urgency:"Low",confidence:82,suggestedAction:"Offer available times",requiresDraft:!0,assignedTo:"emp-5",explanation:"Courio identified a scheduling change request with a proposed new time, so it suggested a simple scheduling reply.",thread:["Client asks to move an appointment from tomorrow to next Tuesday afternoon.","No urgent sentiment or billing issue detected."],summary:"Client wants to reschedule tomorrow's appointment to next Tuesday afternoon.",draft:"Hi, thanks for letting us know. Next Tuesday afternoon should work on our side. Could you confirm your preferred time window?"}],De=[{id:"cat-client-complaint",name:"Client complaint",description:"Escalations, unhappy clients, repeated follow-ups, and high-trust replies.",color:"urgent",active:!0,system:!0},{id:"cat-accounting",name:"Accounting",description:"Invoices, payment status, receipts, bookkeeping, and supplier questions.",color:"invoice",active:!0,system:!0},{id:"cat-sales",name:"Sales",description:"New leads, quote requests, pricing questions, and intake replies.",color:"lead",active:!0,system:!0},{id:"cat-documents",name:"Documents",description:"Attached files, payroll documents, client records, and document routing.",color:"invoice",active:!0,system:!0},{id:"cat-missing-documents",name:"Missing documents",description:"Missing attachments, receipts, files, or client documents that need follow-up.",color:"invoice",active:!0,system:!0},{id:"cat-scheduling",name:"Scheduling",description:"Appointment changes, availability, calendar coordination, and time windows.",color:"pending",active:!0,system:!0},{id:"cat-general",name:"General",description:"Messages that do not need a specialized workflow yet.",color:"default",active:!0,system:!0},{id:"cat-newsletter",name:"Newsletter",description:"Marketing emails, updates, and low-priority broadcast messages.",color:"default",active:!0,system:!1},{id:"cat-follow-up",name:"Follow-up",description:"Messages that need a reminder, next step, or later response.",color:"pending",active:!0,system:!1},{id:"cat-internal",name:"Internal",description:"Team messages, internal coordination, and company updates.",color:"lead",active:!0,system:!1},{id:"cat-vendor",name:"Vendor",description:"Supplier, partner, and vendor conversations.",color:"invoice",active:!0,system:!1}],ke=[{id:"emp-1",name:"Nadia Patel",title:"Owner",email:"nadia@courio-demo.ca",department:"Leadership"},{id:"emp-2",name:"Marcus Roy",title:"Bookkeeper",email:"marcus@courio-demo.ca",department:"Accounting"},{id:"emp-3",name:"Sofia Tremblay",title:"Client Success Lead",email:"sofia@courio-demo.ca",department:"Sales"},{id:"emp-4",name:"Daniel Kim",title:"Payroll Specialist",email:"daniel@courio-demo.ca",department:"Payroll"},{id:"emp-5",name:"Avery Brooks",title:"Office Coordinator",email:"avery@courio-demo.ca",department:"Operations"}],Ae=[{id:"rule-1",title:"Supplier invoice routing",desc:"Suggest an accounting category and owner for supplier invoices and payment requests.",category:"Accounting",confidence:91,explanation:"Courio looks for invoice numbers, payment wording, supplier senders, and due-date language.",impact:"Matches the sample invoice messages in this local demo.",matches:["Invoice #1844 payment status","Supplier payment confirmation"],on:!0},{id:"rule-2",title:"Client escalation detection",desc:"Flag negative sentiment, repeated follow-ups, or unanswered client messages older than 48 hours.",category:"Client complaint",confidence:94,explanation:"Courio looks for negative sentiment, repeated follow-ups, and requests for owner attention.",impact:"Flags the sample high-risk client thread in this local demo.",matches:["Very unhappy about no response"],on:!0},{id:"rule-3",title:"Quote request intake",desc:"Prepare standardized draft replies for new prospects requesting pricing or availability.",category:"Sales",confidence:86,explanation:"Courio looks for pricing requests, new prospect language, and service-fit details.",impact:"Matches the sample quote request in this local demo.",matches:["Quote request for monthly bookkeeping"],on:!1},{id:"rule-4",title:"Missing document follow-up",desc:"Prepare client reminders when required documents are mentioned but not attached.",category:"Missing documents",confidence:88,explanation:"Courio looks for missing attachment wording, receipt requests, and document follow-up language.",impact:"Useful for bookkeeping, accounting, insurance, and service teams.",matches:["Missing March receipts"],on:!1}],O="courio.mockState.v1",z="courio.assistantHistory.v1",Q=2,u=Object.freeze({NEEDS_REVIEW:"needs_review",READY_FOR_DRAFT:"ready_for_draft",DRAFT_GENERATED:"draft_generated",DRAFT_REVIEWED:"draft_reviewed",DRAFT_SAVED:"draft_saved",COMPLETED:"completed"}),Re=new Set(Object.values(u)),Ce={status:"Simulated setup preview",safetyNote:"No account is connected. This demo does not access real email, folders, files, or contacts.",futureNote:"In a future version, this step could connect to Gmail or Microsoft 365 after explicit approval.",mailboxes:[{id:"mailbox-main",name:"Main inbox",address:"hello@demo-company.ca",type:"Primary mailbox",volume:"142 recent threads",risk:"Mixed priority",folders:["Inbox","Needs reply","Clients","Vendors","Archive"],categories:["Client complaint","Accounting","Sales","Scheduling"],frequentSenders:["Northstar Retail","Brightline Supplies","Lakeside Catering"],sharedInboxes:["info@demo-company.ca"],recentThreads:["Very unhappy about no response","Invoice #1844 payment status","Quote request for monthly bookkeeping"]},{id:"mailbox-accounting",name:"Accounting",address:"accounting@demo-company.ca",type:"Shared mailbox",volume:"88 recent threads",risk:"Document-heavy",folders:["Invoices","Receipts","Payroll","Tax documents","Vendors"],categories:["Accounting","Documents","Missing documents"],frequentSenders:["Brightline Supplies","Harbour Grill","Maple Therapy"],sharedInboxes:["payroll@demo-company.ca"],recentThreads:["Invoice #1844 payment status","Payroll documents attached","Missing March receipts"]},{id:"mailbox-sales",name:"Sales",address:"sales@demo-company.ca",type:"Shared mailbox",volume:"53 recent threads",risk:"Revenue-sensitive",folders:["Leads","Quotes","Follow up","Won","Lost"],categories:["Sales","Scheduling"],frequentSenders:["Lakeside Catering","Greenway Landscaping","New prospects"],sharedInboxes:["quotes@demo-company.ca"],recentThreads:["Quote request for monthly bookkeeping","Can we move tomorrow's appointment?"]},{id:"mailbox-operations",name:"Operations",address:"ops@demo-company.ca",type:"Team mailbox",volume:"61 recent threads",risk:"Coordination-heavy",folders:["Scheduling","Client updates","Internal","Completed"],categories:["Scheduling","Documents","General"],frequentSenders:["Greenway Landscaping","Client coordinators","Office team"],sharedInboxes:["support@demo-company.ca"],recentThreads:["Can we move tomorrow's appointment?","Payroll documents attached"]},{id:"mailbox-shared",name:"Shared inbox",address:"info@demo-company.ca",type:"Shared intake",volume:"119 recent threads",risk:"Needs routing",folders:["Inbox","Unsorted","Clients","Prospects","Vendors"],categories:["Client complaint","Sales","Accounting","Missing documents"],frequentSenders:["Clients","Suppliers","Prospects"],sharedInboxes:["hello@demo-company.ca","support@demo-company.ca"],recentThreads:["Very unhappy about no response","Quote request for monthly bookkeeping","Missing March receipts"]}],scanItems:[{label:"Folders",detail:"Inbox structure, archive folders, and team-specific folders.",count:14},{label:"Labels/categories",detail:"Existing categories that could map to Courio triage buckets.",count:9},{label:"Frequent senders",detail:"Recurring clients, vendors, prospects, and internal senders.",count:26},{label:"Shared inboxes",detail:"Mailboxes that several employees may monitor.",count:4},{label:"Recent threads",detail:"Recent local demo examples used to preview workflow suggestions.",count:142},{label:"Suggested workflow rules",detail:"Draft local rules for routing, escalation, and follow-up.",count:5}],setupSteps:[{title:"Choose mailbox",detail:"Select the mailbox Courio should preview.",state:"Available in demo"},{title:"Scan folders and labels",detail:"Preview folders, categories, and common sender patterns.",state:"Simulated"},{title:"Detect common email types",detail:"Identify invoices, quote requests, complaints, missing documents, and scheduling.",state:"Simulated"},{title:"Suggest workflows",detail:"Create local suggested rules for review before anything is used.",state:"Simulated"},{title:"Ready for review",detail:"Move to Triage and Rules to inspect the fake suggestions.",state:"Demo only"}],workflowSuggestions:[{match:"Invoices",outcome:"Accounting review",reason:"Invoice numbers, due dates, supplier language."},{match:"Quote requests",outcome:"Sales intake",reason:"Pricing requests, service-fit details, new prospect wording."},{match:"Complaints",outcome:"Owner escalation",reason:"Repeated follow-ups, negative sentiment, senior attention requests."},{match:"Missing documents",outcome:"Follow-up draft",reason:"Receipts, attachments, payroll, or document gaps."},{match:"Scheduling",outcome:"Offer available times",reason:"Appointment changes, time windows, reschedule language."}]},k={schemaVersion:Q,emails:Se.map(xe),categories:structuredClone(De),employees:structuredClone(ke),rules:structuredClone(Ae),drafts:[],settings:{productName:"Courio",mode:"Simple",companyName:"Demo PME Inc.",defaultMode:"Observation only",escalationRecipient:"owner@company.ca",confidenceThreshold:"80",observationDays:"7",allowLowRiskBulkApproval:"Yes",approvalRequired:!0,autoSend:!1},completedActions:[],deletedEmployeeIds:[],deletedRuleIds:[]},d=Ie();let N=_e();const m=(a=550)=>new Promise(e=>setTimeout(e,a));function p(a){return structuredClone(a)}function xe(a){const{status:e,workflowStatus:t,reviewed:i,...n}=p(a);return{...n,workflowState:u.NEEDS_REVIEW}}function Ie(){try{const a=window.localStorage.getItem(O);if(!a)return p(k);const e=JSON.parse(a),t=Te(e);return window.localStorage.setItem(O,JSON.stringify(t)),t}catch{return p(k)}}function Te(a){const e=a.deletedEmployeeIds||[],t=a.deletedRuleIds||[],i=Me(a.categories),n=_(k.emails,a.emails),o=Array.isArray(a.drafts)?a.drafts:[],l=Le(o),h=n.map(f=>{const be=l.find(X=>(X.emailId||X.id)===f.id),$e=Fe(f,be,a.schemaVersion),{status:_t,workflowStatus:Ot,reviewed:jt,...Ee}=f;return{...Ee,workflowState:$e}}),D=new Map(h.map(f=>[f.id,f])),y=l.filter(f=>Ne(f,D.get(f.emailId||f.id))).map(qe);return{...p(k),...a,schemaVersion:Q,emails:h,categories:i,employees:_(k.employees.filter(f=>!e.includes(f.id)),(a.employees||[]).filter(f=>!e.includes(f.id))),rules:_(k.rules.filter(f=>!t.includes(f.id)),(a.rules||[]).filter(f=>!t.includes(f.id))),drafts:y,settings:{...k.settings,...a.settings||{}},completedActions:Array.isArray(a.completedActions)?a.completedActions:[],deletedEmployeeIds:e,deletedRuleIds:t}}function Me(a=[]){return _(k.categories,a).map(t=>({description:"",color:"default",active:!0,system:!1,...t}))}function Fe(a,e,t){return t>=Q&&Re.has(a.workflowState)?a.workflowState:a.status==="Done"||a.workflowStatus==="Completed"||(e==null?void 0:e.status)==="Ready for human send"||(e==null?void 0:e.status)==="Approved"?u.COMPLETED:(e==null?void 0:e.status)==="Saved"?u.DRAFT_SAVED:e!=null&&e.reviewed?u.DRAFT_REVIEWED:e!=null&&e.generated||(e==null?void 0:e.status)==="Generated"?u.DRAFT_GENERATED:a.reviewed||a.reviewedAt?u.READY_FOR_DRAFT:u.NEEDS_REVIEW}function Le(a){const e=new Map;for(const t of a){const i=(t==null?void 0:t.emailId)||(t==null?void 0:t.id);if(!i)continue;const n=e.get(i);(!n||ee(t)>ee(n))&&e.set(i,t)}return[...e.values()]}function ee(a){return({"Needs approval":0,Generated:1,Saved:3,"Ready for human send":4,Approved:4}[a.status]||0)+(a.generated?1:0)+(a.reviewed?1:0)}function Ne(a,e){return!a||!e?!1:!!(a.generated||a.reviewed||["Generated","Saved","Ready for human send","Approved"].includes(a.status)||[u.DRAFT_GENERATED,u.DRAFT_REVIEWED,u.DRAFT_SAVED,u.COMPLETED].includes(e.workflowState))}function qe(a){const{generated:e,reviewed:t,status:i,...n}=p(a);return{...n,emailId:a.emailId||a.id}}function _(a,e=[]){const t=Array.isArray(e)?e:[],i=a.map(o=>{const l=t.find(h=>h.id===o.id);return l?{...o,...l}:p(o)}),n=t.filter(o=>!a.some(l=>l.id===o.id));return[...i,...n.map(p)]}function w(){window.localStorage.setItem(O,JSON.stringify(d))}function _e(){try{const a=window.localStorage.getItem(z);return a?JSON.parse(a):[{id:"assistant-welcome",role:"assistant",text:"Hi, I can help with urgent emails, invoices, drafts, digest updates, rules, and explanations."}]}catch{return[{id:"assistant-welcome",role:"assistant",text:"Hi, I can help with urgent emails, invoices, drafts, digest updates, rules, and explanations."}]}}function Oe(){window.localStorage.setItem(z,JSON.stringify(N))}function je(){return d.settings.allowLowRiskBulkApproval!=="No"}function Pe(){return!0}function $(a){return a.workflowState===u.COMPLETED}function U(a){const e=d.emails.find(t=>t.id===(a.emailId||a.id));return(e==null?void 0:e.workflowState)===u.DRAFT_SAVED}function j(a){return{[u.NEEDS_REVIEW]:"Review required",[u.READY_FOR_DRAFT]:"Draft needed",[u.DRAFT_GENERATED]:"Draft generated",[u.DRAFT_REVIEWED]:"Draft in review",[u.DRAFT_SAVED]:"Draft saved",[u.COMPLETED]:"Completed"}[a]||"Review required"}function ie(a){return{[u.DRAFT_GENERATED]:"Generated",[u.DRAFT_REVIEWED]:"In review",[u.DRAFT_SAVED]:"Saved",[u.COMPLETED]:"Ready for human send"}[a]||"No draft"}function I(a,e={}){d.completedActions.unshift({id:`action-${Date.now()}-${Math.random().toString(16).slice(2)}`,type:a,completedAt:new Date().toISOString(),...e}),d.completedActions=d.completedActions.slice(0,50)}function ne(a,e){a.workflowState=u.COMPLETED,e.approvedAt=new Date().toISOString(),e.updatedAt=e.approvedAt,I("draft-approved",{emailId:a.id,draftId:e.id,label:`Draft approved and workflow completed: ${a.subject}`})}function R(a){const e=d.emails.find(l=>l.id===(a.emailId||a.id)),t=$(e||{})?"Done":"Open",i=$(e||{}),n=(e==null?void 0:e.workflowState)===u.DRAFT_SAVED,o=ie(e==null?void 0:e.workflowState);return{...a,sourceEmailStatus:t,sourceWorkflowStatus:j(e==null?void 0:e.workflowState),approvalState:i?"ready_for_human_send":(e==null?void 0:e.workflowState)===u.DRAFT_SAVED?"saved":(e==null?void 0:e.workflowState)===u.DRAFT_GENERATED?"generated":"needs_review",status:o,statusLabel:o,isReadyForHumanSend:i,canApprove:n,canSelectForBulkApproval:n,approvalBlocker:n?"":i?"Source email is completed.":"Review and save this draft before approving."}}function Y(a){const e=K(a.id),t=Pe(),i=!!e,n=$(a),o=n,l=a.workflowState!==u.NEEDS_REVIEW;return{...a,reviewed:l,status:o?"Done":"Open",workflowStatus:j(a.workflowState),requiresDraft:t,draftId:i&&(e==null?void 0:e.id)||null,draftStatus:i?ie(a.workflowState):null,draftStatusLabel:i?R(e).statusLabel:"No draft",draftReadyForHumanSend:n,workflowLabel:j(a.workflowState),canComplete:!1,completeActionLabel:"Completed",draftActionLabel:o?"View approved draft":i?"Edit draft":"Generate draft",canGenerateDraft:a.workflowState===u.READY_FOR_DRAFT&&!i,canOpenDraft:i,completionBlocker:l?o?"This workflow is complete.":i?"Open the existing draft to continue this workflow.":"":"Review this email before generating a draft."}}function E(a){const e=d.emails.find(t=>t.id===a);if(!e)throw new Error("Email not found.");return e}function H(a){const e=d.drafts.find(t=>t.id===a);if(!e)throw new Error("Draft not found.");return e}function K(a){return d.drafts.find(e=>(e.emailId||e.id)===a)}function oe(a){const e=d.employees.find(t=>t.id===a);if(!e)throw new Error("Employee not found.");return e}function re(a){const e=d.categories.find(t=>t.id===a);if(!e)throw new Error("Category not found.");return e}function le(a){return d.categories.find(e=>e.name.toLowerCase()===String(a||"").trim().toLowerCase())}function de(a,e=null){var n,o;const t={name:((n=a.name)==null?void 0:n.trim())||"",description:((o=a.description)==null?void 0:o.trim())||"",color:a.color||"default"};if(!t.name)throw new Error("Category name is required.");if(d.categories.find(l=>l.id!==e&&l.name.toLowerCase()===t.name.toLowerCase()))throw new Error("A category with this name already exists.");return t}function He(a,e){d.emails.forEach(t=>{t.category===a&&(t.category=e)}),d.rules.forEach(t=>{t.category===a&&(t.category=e)})}function b(a,e){var t;return((t=d.categories.find(i=>i.id===a))==null?void 0:t.name)||e}function Be(){const a={"Client complaint":b("cat-client-complaint","Client complaint"),Accounting:b("cat-accounting","Accounting"),Sales:b("cat-sales","Sales"),Documents:b("cat-documents","Documents"),"Missing documents":b("cat-missing-documents","Missing documents"),Scheduling:b("cat-scheduling","Scheduling"),General:b("cat-general","General")},e=p(Ce);return e.mailboxes=e.mailboxes.map(t=>({...t,categories:t.categories.map(i=>a[i]||i)})),e}function ce(a,e=null){var n,o,l,h;const t={name:((n=a.name)==null?void 0:n.trim())||"",email:((o=a.email)==null?void 0:o.trim().toLowerCase())||"",title:((l=a.title)==null?void 0:l.trim())||"",department:((h=a.department)==null?void 0:h.trim())||""};if(!t.name)throw new Error("Employee name is required.");if(!t.email)throw new Error("Employee email is required.");if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t.email))throw new Error("Enter a valid employee email address.");if(!t.title)throw new Error("Employee title is required.");if(!t.department)throw new Error("Employee department is required.");if(d.employees.find(D=>{var y;return D.id!==e&&((y=D.email)==null?void 0:y.trim().toLowerCase())===t.email}))throw new Error("An employee with this email already exists.");return t}function We(){const a=d.emails.filter(l=>!$(l)),e=d.drafts.map(R),t=e.filter(l=>l.isReadyForHumanSend).length,i=e.filter(l=>l.canSelectForBulkApproval).length,n=l=>a.filter(h=>h.category===l),o=a.filter(l=>l.urgency==="High");return{generatedAt:new Date().toLocaleTimeString([],{hour:"numeric",minute:"2-digit"}),headline:`${a.length} open emails need review. ${o.length} are urgent and ${i} drafts need approval.`,urgentItems:o.map(l=>l.subject),draftsAwaitingApproval:i,readyForHumanSend:t,invoices:n(b("cat-accounting","Accounting")).map(l=>l.subject),missingDocuments:n(b("cat-missing-documents","Missing documents")).map(l=>l.subject),quoteRequests:n(b("cat-sales","Sales")).map(l=>l.subject),clientComplaints:n(b("cat-client-complaint","Client complaint")).map(l=>l.subject),recommendedActions:[o.length?"Review urgent client items first.":"No urgent client escalations are open.",i?"Review drafts before marking them ready for human send.":"No drafts are waiting for approval.","Keep observation mode on while this remains a demo."]}}function Ve(){const a=d.rules.find(t=>/invoice/i.test(`${t.title} ${t.desc}`));if(a)return a.on=!0,w(),a;const e={id:`rule-${Date.now()}`,title:"Invoice intake assistant",desc:"Flag invoice messages, payment questions, due dates, and supplier follow-ups for accounting review.",category:b("cat-accounting","Accounting"),confidence:84,explanation:"Courio would look for invoice numbers, balance-due wording, supplier names, and payment timing.",impact:"Created locally from the assistant chat. It only previews matches in this prototype.",matches:d.emails.filter(t=>t.category===b("cat-accounting","Accounting")).map(t=>t.subject),on:!0};return d.rules.push(e),w(),e}function Ge(a){return a.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9\s]/g," ").replace(/\s+/g," ")}function ze(a,e){const t=Array.from({length:e.length+1},(i,n)=>n);for(let i=1;i<=a.length;i+=1){let n=t[0];t[0]=i;for(let o=1;o<=e.length;o+=1){const l=t[o],h=a[i-1]===e[o-1]?0:1;t[o]=Math.min(t[o]+1,t[o-1]+1,n+h),n=l}}return t[e.length]}function Qe(a,e){if(a.length!==e.length)return!1;const t=[];for(let i=0;i<a.length;i+=1)a[i]!==e[i]&&t.push(i);return t.length===2&&t[1]===t[0]+1&&a[t[0]]===e[t[1]]&&a[t[1]]===e[t[0]]}function C(a,e){const t=a.split(" ").filter(Boolean);return e.some(i=>i.includes(" ")?a.includes(i):t.some(n=>{if(n===i||Qe(n,i))return!0;const o=i.length>=7?2:i.length>=4?1:0;return o>0&&Math.abs(n.length-i.length)<=o&&ze(n,i)<=o}))}function Ue(a,e={}){const t=Ge(a),i=d.emails.filter(y=>!$(y)&&y.urgency==="High").length,n=b("cat-accounting","Accounting"),o=d.emails.filter(y=>!$(y)&&y.category===n).length,l=d.drafts.map(R).filter(y=>y.canSelectForBulkApproval).length,h=C(t,["invoice","invoices","accounting"]),D=C(t,["rule","rules","create rule"]);if(C(t,["urgent","urgency"]))return{text:`${i} urgent emails are open. I switched Triage to urgent items.`,action:{type:"show_triage",filter:"urgent"}};if(C(t,["triage","inbox","show inbox","open inbox"]))return{text:"I opened the full Triage inbox.",action:{type:"show_triage",filter:"all"}};if(h&&D)return{text:"Invoice rule is ready in observation mode. It is still fake/local and will not touch a mailbox.",action:{type:"show_rule",ruleId:Ve().id}};if(h)return{text:`${o} invoice-related emails are open. I switched Triage to ${n}.`,action:{type:"show_triage",filter:"invoices"}};if(C(t,["draft","drafts","approval","approve"]))return{text:`${l} saved drafts need human approval. I opened the Drafts queue.`,action:{type:"show_drafts",filter:"needs_approval"}};if(C(t,["digest","morning digest"]))return{text:"I regenerated the morning digest from local demo data.",action:{type:"generate_digest"}};if(C(t,["explain","explanation","why"])){if(!e.selectedEmailId)return{text:"Open an email in Triage first, then ask me to explain it. I will show the flagged reason."};const y=Y(E(e.selectedEmailId));return{text:`Courio flagged "${y.subject}" because: ${y.explanation}`,action:{type:"explain_email",emailId:y.id}}}return C(t,["reset","restart"])?{text:"I can reset the fake demo data now. The page will reload so defaults come back clean.",action:{type:"reset_demo_data"}}:{text:"I did not catch that. Try one of the command hints below."}}async function A(){return await m(),p(d.emails.map(Y))}async function V(){return await m(350),p(d.employees)}async function ue(){return await m(300),p(d.categories)}async function M(){return await m(400),p(d.rules)}async function pe(){return await m(350),Be()}async function F(){return await m(700),p(We())}async function L(){return await m(400),p(d.drafts.map(R))}async function q(a){await m(450);const e=H(a),t=E(e.emailId||e.id);return t.workflowState===u.DRAFT_GENERATED&&(t.workflowState=u.DRAFT_REVIEWED,e.reviewedAt=new Date().toISOString(),e.updatedAt=e.reviewedAt,w()),p({...R(e),sourceEmail:{id:t.id,subject:t.subject,sender:t.sender,senderEmail:t.senderEmail,body:t.body,suggestedAction:t.suggestedAction,confidence:t.confidence,urgency:t.urgency,status:$(t)?"Done":"Open",workflowStatus:j(t.workflowState)}})}async function Ye(a){await m(350),E(a);const e=K(a);return e?q(e.id):null}async function Ke(){return await m(250),p(d.settings)}async function Je(a){return await m(450),d.settings={...d.settings,...a,approvalRequired:!0,autoSend:!1},w(),p(d.settings)}async function Xe(){return await m(350),window.localStorage.removeItem(O),window.localStorage.removeItem(z),p(k)}async function me(a){await m();const e=E(a);return e.workflowState===u.NEEDS_REVIEW&&(e.workflowState=u.READY_FOR_DRAFT,e.reviewedAt=new Date().toISOString(),w()),p({...Y(e),messages:e.thread})}async function Ze(a){return await m(700),E(a).summary}async function et(a){await m(750);const e=E(a);if($(e))throw new Error("This email is done. Reopen it before creating or changing a draft.");if(e.workflowState===u.NEEDS_REVIEW)throw new Error("Review this email before generating a draft.");const t=K(a);if(t)return p(R(t));if(e.workflowState!==u.READY_FOR_DRAFT)throw new Error("This workflow is not ready to generate a new draft.");const i=new Date().toISOString(),n={id:`draft-${a}`,emailId:a,title:e.suggestedAction,source:e.subject,text:e.draft,confidence:e.confidence,risk:e.urgency==="High"?"High":"Low",createdAt:i,updatedAt:i};return d.drafts.push(n),e.workflowState=u.DRAFT_GENERATED,w(),p(R(n))}async function tt(a,e){if(await m(),!e||e.trim().length<10)throw new Error("Draft is too short to save.");const t=H(a),i=E(t.emailId||t.id);if($(i))throw new Error("This email is done. Reopen it before editing the draft.");if(![u.DRAFT_REVIEWED,u.DRAFT_SAVED].includes(i.workflowState))throw new Error("Review this draft before saving it.");return t.text=e,t.updatedAt=new Date().toISOString(),i.workflowState=u.DRAFT_SAVED,w(),p(R(t))}async function at(a){await m();const e=H(a),t=E(e.emailId||e.id);if($(t))throw new Error("This email is done. Reopen it before changing draft approval.");if(!U(e))throw new Error("Review this draft before approving.");return ne(t,e),w(),p(R(e))}async function ge(a){if(await m(650),!a.length)throw new Error("Select at least one draft first.");const e=a.map(i=>{const n=H(i),o=E(n.emailId||n.id);return{draft:n,email:o}}).filter(({email:i})=>!$(i));if(!e.length)throw new Error("No selected drafts could be approved.");if(e.some(({draft:i})=>!U(i)))throw new Error("Review this draft before approving.");const t=[];for(const{draft:i,email:n}of e)ne(n,i),t.push(i.id);return w(),p({approved:t})}async function st(){if(await m(700),!je())throw new Error("Low-risk bulk approval is disabled by workspace settings.");const a=d.drafts.filter(e=>e.risk!=="High").filter(U).filter(e=>!$(E(e.emailId||e.id))).map(e=>e.id);if(!a.length)throw new Error("No low-risk drafts are awaiting approval.");return ge(a)}async function te(a){await m(450);const e=d.rules.find(t=>t.id===a);if(!e)throw new Error("Rule not found.");return e.on=!e.on,w(),p(e)}async function it(a,e){var i,n;await m(500);const t=d.rules.find(o=>o.id===a);if(!t)throw new Error("Rule not found.");if(!((i=e.title)!=null&&i.trim()))throw new Error("Rule name is required.");if(!((n=e.desc)!=null&&n.trim()))throw new Error("Rule description is required.");if(e.category&&!le(e.category))throw new Error("Choose an existing category before saving.");return t.title=e.title.trim(),t.desc=e.desc.trim(),t.category=e.category||t.category,w(),p(t)}async function nt(a){await m(450);const e=d.rules.findIndex(i=>i.id===a);if(e===-1)throw new Error("Rule not found.");const[t]=d.rules.splice(e,1);return d.deletedRuleIds=[...new Set([...d.deletedRuleIds||[],a])],I("rule-deleted",{ruleId:t.id,label:`Rule deleted: ${t.title}`}),w(),p(t)}async function ot(a,e){if(await m(400),!e)throw new Error("Choose a category before saving.");if(!le(e))throw new Error("Choose an existing category before saving.");const t=E(a);return t.category=e,w(),p(t)}async function rt(a){await m(450);const e=de(a),t={id:`cat-${Date.now()}`,...e,active:!0,system:!1};return d.categories.push(t),I("category-added",{categoryId:t.id,label:`Category added: ${t.name}`}),w(),p(t)}async function lt(a,e){await m(450);const t=re(a),i=de(e,a),n=t.name;return Object.assign(t,i),n!==t.name&&He(n,t.name),I("category-updated",{categoryId:t.id,label:`Category updated: ${t.name}`}),w(),p(t)}async function dt(a){await m(400);const e=re(a);return e.active=!e.active,I("category-toggled",{categoryId:e.id,label:`${e.active?"Category restored":"Category archived"}: ${e.name}`}),w(),p(e)}async function ct(a,e){await m(400),e&&oe(e);const t=E(a);return t.assignedTo=e,w(),p(t)}async function ut(a){await m(500);const e=ce(a),t={id:`employee-${Date.now()}`,...e};return d.employees.push(t),I("employee-added",{employeeId:t.id,label:`Employee added: ${t.name}`}),w(),p(t)}async function pt(a,e){await m(500);const t=oe(a),i=ce(e,a);return Object.assign(t,i),I("employee-updated",{employeeId:t.id,label:`Employee updated: ${t.name}`}),w(),p(t)}async function mt(a){await m(500);const e=d.employees.findIndex(n=>n.id===a);if(e===-1)throw new Error("Employee not found.");const[t]=d.employees.splice(e,1);d.deletedEmployeeIds=[...new Set([...d.deletedEmployeeIds||[],a])];let i=0;return d.emails.forEach(n=>{n.assignedTo===a&&(n.assignedTo="",i+=1)}),I("employee-deleted",{employeeId:t.id,label:`Employee removed: ${t.name}. ${i} assigned emails returned to Unassigned.`}),w(),p(t)}async function x(){return await m(250),p(d.completedActions)}async function gt(){return await m(150),p(N)}async function ft(a,e={}){if(await m(500),!(a!=null&&a.trim()))throw new Error("Type a command first.");const t={id:`user-${Date.now()}`,role:"user",text:a.trim()},i=Ue(a,e),n={id:`assistant-${Date.now()}`,role:"assistant",text:i.text};return N=[...N,t,n].slice(-24),Oe(),p({messages:N,action:i.action||null})}const vt=document.querySelector("#app"),wt=new Set(["dashboard","import","triage","rules","drafts","admin"]),yt=["Triage","Urgent emails","Drafts needing approval","Invoices","Generate digest","Create invoice rule","Reset demo data"],s={tab:"dashboard",emails:[],categories:[],employees:[],rules:[],drafts:[],settings:{companyName:"Demo PME Inc.",mode:"Simple",defaultMode:"Observation only",escalationRecipient:"owner@company.ca",approvalRequired:!0,autoSend:!1},settingsForm:null,loading:{emails:!0,rules:!0,drafts:!0},busy:{},selectedEmail:null,selectedCategory:null,selectedDraft:null,selectedRule:null,selectedEmployee:null,selectedDraftIds:[],confirmDialog:null,digest:null,triageFilter:"all",draftFilter:"all",ruleQuery:"",assistantOpen:!1,assistantMessages:[],activity:[],setupPreview:null,selectedSetupMailboxId:"",summary:"",showExplanation:!1};vt.innerHTML=`
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
`;function ae(a,e){s.busy[a]=e,v()}async function g(a,e,t){try{ae(a,!0),await e(),t&&P(t)}catch(i){P(i.message||"Something went wrong in the mock workflow.",!0)}finally{ae(a,!1)}}function c(a){return!!s.busy[a]}function P(a,e=!1){const t=document.querySelector("#toast");t.textContent=a,t.classList.toggle("error",e),t.classList.add("show"),window.clearTimeout(t.dataset.timer),t.dataset.timer=window.setTimeout(()=>t.classList.remove("show"),2400)}function T(a,e={}){if(!wt.has(a))throw new Error("That Courio section is unavailable.");const t=s.tab;t==="admin"&&a!=="admin"&&(s.settingsForm=null),a==="admin"&&t!=="admin"&&(s.settingsForm={...s.settings}),s.tab=a,e.triageFilter&&(s.triageFilter=e.triageFilter),e.draftFilter&&(s.draftFilter=e.draftFilter),e.closeDrawers!==!1&&(s.selectedEmail=null,s.selectedCategory=null,s.selectedDraft=null,s.selectedRule=null,s.selectedEmployee=null,s.summary="",s.showExplanation=!1),v()}async function G(a=(e=>(e=s.selectedEmail)==null?void 0:e.id)()){if(s.emails=await A(),a){const t=s.emails.find(i=>i.id===a);s.selectedEmail=t?{...t,messages:t.thread}:null}}async function se(a=(e=>(e=s.selectedCategory)==null?void 0:e.id)()){const[t,i,n,o,l,h]=await Promise.all([ue(),A(),M(),F(),pe(),x()]);s.categories=t,s.emails=i,s.rules=n,s.digest=o,s.setupPreview=l,s.activity=h,s.selectedCategory=a&&t.find(D=>D.id===a)||null}function ht(a){return!!(a!=null&&a.isReadyForHumanSend)}function J(){return s.settings.mode==="Advanced"}function fe(a=""){const e=s.categories.filter(i=>i.active),t=a?s.categories.find(i=>i.name===a):null;return t&&!e.some(i=>i.id===t.id)?[...e,t]:e}function bt(a,e){var t;return((t=s.categories.find(i=>i.id===a))==null?void 0:t.name)||e}function ve(){return s.settings.allowLowRiskBulkApproval!=="No"}function r(a=""){return String(a).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function S(a=[]){return a.map(e=>r(e)).join(", ")}function B(){return s.settingsForm||{...s.settings}}function $t(){return B().mode==="Advanced"}async function Et(){var a;try{const[e,t,i,n,o,l,h,D,y,f]=await Promise.all([A(),ue(),V(),M(),L(),Ke(),F(),gt(),x(),pe()]);s.emails=e,s.categories=t,s.employees=i,s.rules=n,s.drafts=o,s.settings={...s.settings,...l},s.settingsForm=null,s.digest=h,s.assistantMessages=D,s.activity=y,s.setupPreview=f,s.selectedSetupMailboxId=((a=f.mailboxes[0])==null?void 0:a.id)||""}catch(e){P(e.message||"Could not load mock data.",!0)}finally{s.loading.emails=!1,s.loading.rules=!1,s.loading.drafts=!1,v()}}function v(){document.querySelector("#pageTitle").textContent=Z[s.tab][0],document.querySelector("#pageSubtitle").textContent=Z[s.tab][1],document.querySelectorAll(".section").forEach(a=>{a.classList.toggle("active",a.id===s.tab)}),document.querySelectorAll(".nav button").forEach(a=>{a.classList.toggle("active",a.dataset.tab===s.tab)}),St(),we(),Dt(),ye(),Ft(),qt(),kt(),At(),Lt()}function St(){const a=s.emails.filter(t=>t.status!=="Done").length,e=s.digest;document.querySelector("#dashboard").innerHTML=`
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
        <div class="value">${s.drafts.filter(ht).length||0}</div>
        <div class="caption">Human approval still required to send</div>
      </div>
    </div>
    <div class="grid cols-2" style="margin-top:16px">
      <div class="panel">
        <div class="panel-title"><h2>Morning digest</h2><span>${e?`Generated ${r(e.generatedAt)}`:"Loading..."}</span></div>
        <p class="subtitle">${e?r(e.headline):"Preparing a local demo digest from mock emails and drafts."}</p>
        ${e?`
          <table class="table" style="margin-top:14px">
            <tr><td>Urgent items</td><td>${e.urgentItems.length?S(e.urgentItems):"None"}</td></tr>
            <tr><td>Invoices</td><td>${e.invoices.length?S(e.invoices):"None"}</td></tr>
            <tr><td>Missing documents</td><td>${e.missingDocuments.length?S(e.missingDocuments):"None"}</td></tr>
            <tr><td>Quote requests</td><td>${e.quoteRequests.length?S(e.quoteRequests):"None"}</td></tr>
            <tr><td>Client complaints</td><td>${e.clientComplaints.length?S(e.clientComplaints):"None"}</td></tr>
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
          ${((e==null?void 0:e.recommendedActions)||["Digest is loading."]).map(t=>`<tr><td><span class="badge lead">Action</span></td><td>${r(t)}</td></tr>`).join("")}
          ${J()?`<tr><td><span class="badge invoice">Advanced</span></td><td>${s.rules.filter(t=>t.on).length} rules are currently enabled.</td></tr>`:""}
        </table>
      </div>
    </div>
  `}function we(){const a=s.setupPreview;if(!a){document.querySelector("#import").innerHTML='<div class="loading">Loading simulated setup preview...</div>';return}const e=a.mailboxes.find(t=>t.id===s.selectedSetupMailboxId)||a.mailboxes[0];document.querySelector("#import").innerHTML=`
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
          <tr><td>Folders</td><td>${S(e.folders)}</td></tr>
          <tr><td>Labels/categories</td><td>${S(e.categories)}</td></tr>
          <tr><td>Frequent senders</td><td>${S(e.frequentSenders)}</td></tr>
          <tr><td>Shared inboxes</td><td>${S(e.sharedInboxes)}</td></tr>
          <tr><td>Recent threads</td><td>${S(e.recentThreads)}</td></tr>
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
  `}function Dt(){const a=Object.fromEntries(s.employees.map(n=>[n.id,n])),e=bt("cat-accounting","Accounting"),t=s.emails.filter(n=>s.triageFilter==="urgent"?n.status!=="Done"&&n.urgency==="High":s.triageFilter==="invoices"?n.status!=="Done"&&n.category===e:!0),i=s.loading.emails?'<div class="loading">Loading mock inbox...</div>':t.length===0?`<div class="empty-state">${s.triageFilter==="urgent"?"No urgent emails. You are caught up on high-priority work.":s.triageFilter==="invoices"?"No invoice emails are waiting for review.":"No emails are available in this local demo."}</div>`:`<table class="table">
        <thead><tr><th>Subject</th><th>Sender</th><th>Category</th><th>Assigned</th><th>Workflow</th><th>Status</th><th></th></tr></thead>
        <tbody>
          ${t.map(n=>{var o;return`
            <tr>
              <td>${r(n.subject)}</td>
              <td>${r(n.sender)}<br><small>${r(n.senderEmail||"")}</small></td>
              <td>
                <span class="badge ${W(n.category)}">${r(n.category)}</span><br>
                <small>${r(n.urgency||"Medium")} urgency - ${n.confidence||80}% confidence</small>
                <small class="triage-reason" title="${r(n.explanation||"")}">Why: ${r(n.explanation||"Matched the current local category rules.")}</small>
              </td>
              <td>${r(((o=a[n.assignedTo])==null?void 0:o.name)||"Unassigned")}</td>
              <td>${r(n.workflowLabel||"Not started")}</td>
              <td><span class="badge ${n.status==="Done"?"done":""}">${r(n.status)}</span></td>
              <td class="actions">
                <button class="btn subtle" data-review-email="${n.id}" ${c(`review-${n.id}`)?"disabled":""}>${c(`review-${n.id}`)?"Opening...":"Review"}</button>
                ${n.status==="Done"?'<span class="status-text">Complete</span>':'<span class="status-text" title="Generate, review, save, and approve a draft to complete this workflow.">Draft required</span>'}
              </td>
            </tr>
          `}).join("")}
        </tbody>
      </table>`;document.querySelector("#triage").innerHTML=`
    <div class="panel">
      <div class="panel-title"><h2>Inbox triage</h2><span>Suggested actions only</span></div>
      <div class="segmented" style="margin-bottom:14px">
        ${[["all","All inbox"],["urgent","Urgent"],["invoices","Invoices"]].map(([n,o])=>`<button class="${s.triageFilter===n?"active":""}" data-triage-filter="${n}">${o}</button>`).join("")}
      </div>
      ${i}
    </div>
  `}function kt(){const a=document.querySelector("#drawerRoot");if(s.selectedCategory){Tt(a);return}if(s.selectedEmployee){Mt(a);return}if(s.selectedRule){It(a);return}if(s.selectedDraft){xt(a);return}if(!s.selectedEmail){a.innerHTML="";return}const e=s.selectedEmail,t=e.status==="Done",i=s.employees.find(o=>o.id===e.assignedTo),n=fe(e.category);a.innerHTML=`
    <div class="drawer-backdrop" data-close-drawer></div>
    <aside class="review-drawer" aria-label="Email review">
      <div class="drawer-header">
        <div>
          <div class="badge ${W(e.category)}">${r(e.category)}</div>
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
            ${n.map(o=>`<option value="${r(o.name)}" ${o.name===e.category?"selected":""}>${r(o.name)}${o.active?"":" (archived)"}</option>`).join("")}
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
        <button class="btn primary" data-summary-email="${e.id}" ${c(`summary-${e.id}`)?"disabled":""}>${c(`summary-${e.id}`)?"Summarizing...":"Summarize"}</button>
        ${e.canOpenDraft?`<button class="btn subtle" data-open-email-draft="${e.id}" ${c(`open-email-draft-${e.id}`)?"disabled":""}>${e.draftActionLabel}</button>`:`<button class="btn subtle" data-generate-draft="${e.id}" ${!e.canGenerateDraft||c(`draft-${e.id}`)?`disabled title="${e.completionBlocker||"Draft action is unavailable."}"`:""}>${c(`draft-${e.id}`)?"Drafting...":e.draftActionLabel}</button>`}
        ${t?'<span class="status-text">Workflow complete</span>':'<span class="status-text">Approving the draft completes this workflow.</span>'}
      </div>
      <p class="drawer-note">This is a local prototype. Courio does not send email.</p>
    </aside>
  `}function At(){const a=document.querySelector("#modalRoot");if(!s.confirmDialog){a.innerHTML="";return}const e=s.confirmDialog;a.innerHTML=`
    <div class="modal-backdrop"></div>
    <div class="confirm-modal" role="dialog" aria-modal="true">
      <h2>${r(e.title)}</h2>
      <p>${r(e.message)}</p>
      <div class="actions">
        <button class="btn ${e.tone==="danger"?"danger":"primary"}" data-confirm-primary>${r(e.primaryLabel)}</button>
        <button class="btn subtle" data-confirm-cancel>Cancel</button>
      </div>
    </div>
  `}async function Rt(a){const e=await et(a);s.drafts=await L(),await G(a),s.selectedDraft=await q(e.id),s.selectedEmail=null,s.selectedRule=null,s.selectedEmployee=null,s.selectedCategory=null}async function Ct(a){var e;await at(a),s.drafts=await L(),s.emails=await A(),s.activity=await x(),s.digest=await F(),s.selectedDraftIds=s.selectedDraftIds.filter(t=>t!==a),((e=s.selectedDraft)==null?void 0:e.id)===a&&(s.selectedDraft=await q(a))}function xt(a){const e=s.selectedDraft,t=e.sourceEmail||{},i=t.status==="Done";a.innerHTML=`
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
            <button class="btn primary" data-save-draft="${e.id}" ${c(`save-${e.id}`)?"disabled":""}>${c(`save-${e.id}`)?"Saving...":"Save changes"}</button>
            <button class="btn success" data-approve-draft="${e.id}" ${!e.canApprove||c(`approve-${e.id}`)?`disabled title="${e.approvalBlocker||"Save the reviewed draft before approving."}"`:""}>${c(`approve-${e.id}`)?"Approving...":"Approve and complete"}</button>
          `}
        <button class="btn subtle" data-close-drawer>Close</button>
      </div>
      <p class="drawer-note">Approval completes this workflow and marks the draft ready for a person to send. Courio never sends email.</p>
    </aside>
  `}function It(a){var i;const e=s.selectedRule,t=fe(e.category);a.innerHTML=`
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
            ${t.map(n=>`<option value="${r(n.name)}" ${n.name===e.category?"selected":""}>${r(n.name)}${n.active?"":" (archived)"}</option>`).join("")}
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

      ${J()?`<div class="drawer-section"><h3>Advanced preview</h3><div class="preview">This rule uses the current confidence threshold of ${s.settings.confidenceThreshold||80}%. No mailbox changes happen in the prototype.</div></div>`:""}

      <div class="drawer-actions">
        <button class="btn primary" data-save-rule="${e.id}" ${c(`save-rule-${e.id}`)?"disabled":""}>${c(`save-rule-${e.id}`)?"Saving...":"Save rule"}</button>
        <button class="btn danger" data-delete-rule="${e.id}">Delete rule</button>
        <button class="btn subtle" data-close-drawer>Close</button>
      </div>
    </aside>
  `}function Tt(a){const e=s.selectedCategory,t=e.id==="new",i=[["default","Default"],["urgent","Red / urgent"],["invoice","Green"],["lead","Blue"],["pending","Amber"]];a.innerHTML=`
    <div class="drawer-backdrop" data-close-drawer></div>
    <aside class="review-drawer" aria-label="${t?"Add category":"Edit category"}">
      <div class="drawer-header">
        <div>
          <div class="badge ${W(e.name)}">${e.active===!1?"Archived":"Active"}</div>
          <h2>${t?"Add category":"Edit category"}</h2>
          <p>Categories remain fake/local and map to email category names for now.</p>
        </div>
        <button class="btn subtle" data-close-drawer>Close</button>
      </div>

      <div class="drawer-section">
        <label>Category name<input data-category-field="name" value="${r(e.name||"")}"></label>
        <label>Description<textarea data-category-field="description">${r(e.description||"")}</textarea></label>
        <label>Badge color
          <select data-category-field="color">
            ${i.map(([n,o])=>`<option value="${n}" ${n===(e.color||"default")?"selected":""}>${o}</option>`).join("")}
          </select>
        </label>
      </div>

      <div class="drawer-actions">
        <button class="btn primary" data-save-category="${e.id}" ${c(`save-category-${e.id}`)?"disabled":""}>${c(`save-category-${e.id}`)?"Saving...":t?"Add category":"Save changes"}</button>
        ${t?"":`<button class="btn subtle" data-toggle-category="${e.id}" ${c(`toggle-category-${e.id}`)?"disabled":""}>${e.active===!1?"Restore category":"Archive category"}</button>`}
        <button class="btn subtle" data-close-drawer>Close</button>
      </div>
      <p class="drawer-note">Archiving removes a category from new dropdown choices, but old emails and rules still display safely.</p>
    </aside>
  `}function Mt(a){const e=s.selectedEmployee,t=e.id==="new";a.innerHTML=`
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
        <button class="btn primary" data-save-employee="${e.id}" ${c(`save-employee-${e.id}`)?"disabled":""}>${c(`save-employee-${e.id}`)?"Saving...":t?"Add employee":"Save changes"}</button>
        ${t?"":`<button class="btn danger" data-delete-employee="${e.id}">Remove employee</button>`}
        <button class="btn subtle" data-close-drawer>Close</button>
      </div>
      <p class="drawer-note">Employee records remain fake and local to this browser. Email addresses must be valid and unique.</p>
    </aside>
  `}function ye(){const a=s.ruleQuery.trim().toLowerCase(),e=s.rules.filter(i=>!a||`${i.title} ${i.desc} ${i.category}`.toLowerCase().includes(a)),t=s.loading.rules?'<div class="loading">Loading suggested rules...</div>':e.length===0?`<div class="empty-state">${a?`No rules match “${r(s.ruleQuery)}”. Clear the search to see all local rules.`:"No rules yet. Local rule suggestions will appear here."}</div>`:`<div class="grid cols-2">
        ${e.map(i=>`
          <div class="rule-card">
            <div class="rule-top">
              <div>
                <div class="rule-title">${r(i.title)}</div>
                <div class="rule-desc">${r(i.desc)}</div>
              </div>
              <button class="toggle ${i.on?"on":""}" aria-label="Toggle ${r(i.title)}" data-toggle-rule="${i.id}" ${c(`rule-${i.id}`)?"disabled":""}></button>
            </div>
            <div class="preview"><strong>Local sample preview:</strong> ${r(i.impact)}</div>
            <div class="preview"><strong>${i.confidence||80}% confidence:</strong> ${r(i.explanation||"Based on local mock patterns.")}</div>
            ${J()?`<div class="preview"><strong>Would match:</strong> ${S(i.matches||["No samples"])}</div>`:""}
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
        <input data-rule-search type="search" value="${r(s.ruleQuery)}" placeholder="Search rules">
      </div>
    </div>
    ${t}
  `}function Ft(){const a=s.selectedDraftIds.length,e=s.drafts.filter(o=>o.risk!=="High"&&o.canSelectForBulkApproval).length,t=!ve(),i=s.drafts.filter(o=>s.draftFilter==="needs_approval"?o.canSelectForBulkApproval:s.draftFilter==="ready"?o.isReadyForHumanSend:!0),n=s.loading.drafts?'<div class="loading">Loading draft queue...</div>':i.length===0?`<div class="empty-state">${s.draftFilter==="needs_approval"?"No drafts need approval. Reviewed drafts will appear here when they are ready.":s.draftFilter==="ready"?"No drafts are ready for human send yet.":"No drafts are available in this local demo."}</div>`:`<table class="table">
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
                <button class="btn subtle" data-review-draft="${o.id}" ${c(`review-draft-${o.id}`)?"disabled":""}>${c(`review-draft-${o.id}`)?"Opening...":"Review"}</button>
                ${o.isReadyForHumanSend?'<span class="status-text">Workflow complete</span>':`<button class="btn success" data-approve-draft="${o.id}" ${!o.canApprove||c(`approve-${o.id}`)?`disabled title="${o.approvalBlocker||"Review and save this draft first."}"`:""}>${c(`approve-${o.id}`)?"Approving...":"Approve and complete"}</button>`}
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
        <button class="btn success" data-approve-selected ${a===0||c("approve-selected")?`disabled title="${a===0?"Select at least one reviewed and saved draft.":""}"`:""}>${c("approve-selected")?"Approving...":`Approve selected (${a})`}</button>
        <button class="btn subtle" data-approve-low-risk ${t||e===0||c("approve-low-risk")?`disabled title="${t?"Enable low-risk bulk approval in Advanced workspace settings.":e===0?"No reviewed low-risk drafts are ready for approval.":""}"`:""}>${t?"Low-risk bulk approval disabled":c("approve-low-risk")?"Approving...":`Approve all low-risk (${e})`}</button>
        <span class="mode">Approval completes the workflow; nothing is sent</span>
      </div>
      ${t?'<div class="preview" style="margin-bottom:14px">Low-risk bulk approval is disabled by workspace settings.</div>':""}
      ${n}
    </div>
  `}function Lt(){const a=document.querySelector("#assistantRoot"),e=s.assistantMessages.length?s.assistantMessages:[{id:"assistant-loading",role:"assistant",text:"Loading assistant history..."}];a.innerHTML=`
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
            <input data-assistant-input placeholder="Show urgent emails" autocomplete="off" ${c("assistant")?"disabled":""}>
            <button class="btn primary" type="submit" ${c("assistant")?"disabled":""}>${c("assistant")?"Working...":"Send"}</button>
          </form>
          <div class="assistant-suggestions" aria-label="Assistant command suggestions">
            ${yt.map(t=>`
              <button class="assistant-chip" data-assistant-command="${r(t)}" ${c("assistant")?"disabled":""}>
                ${r(t)}
              </button>
            `).join("")}
          </div>
        </div>
      `:""}
      <button class="assistant-fab" data-assistant-toggle aria-label="Open Courio assistant">
        AI
      </button>
    </div>
  `}async function he(a){await g("assistant",async()=>{var t;const e=await ft(a,{selectedEmailId:((t=s.selectedEmail)==null?void 0:t.id)||null});s.assistantMessages=e.messages,await Nt(e.action)})}async function Nt(a){if(a){if(a.type==="show_triage"){T("triage",{triageFilter:a.filter||"all"});return}if(a.type==="show_drafts"){T("drafts",{draftFilter:a.filter||"all"});return}if(a.type==="generate_digest"){s.digest=await F(),T("dashboard");return}if(a.type==="explain_email"){s.selectedEmail=await me(a.emailId),s.selectedDraft=null,s.selectedRule=null,s.selectedEmployee=null,s.selectedCategory=null,s.summary="",s.showExplanation=!0,T("triage",{triageFilter:"all",closeDrawers:!1});return}if(a.type==="show_rule"){s.rules=await M(),s.selectedRule=s.rules.find(e=>e.id===a.ruleId)||null,s.selectedEmail=null,s.selectedDraft=null,s.selectedEmployee=null,s.selectedCategory=null,T("rules",{closeDrawers:!1});return}a.type==="reset_demo_data"&&(s.confirmDialog={type:"reset-demo",title:"Reset demo data?",message:"This clears all local Courio changes and restores the original fake demo data.",primaryLabel:"Reset demo data",tone:"danger"},v())}}function qt(){const a=B();document.querySelector("#admin").innerHTML=`
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
          ${$t()?`
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
          <button class="btn primary" data-save-settings ${c("settings")?"disabled":""}>${c("settings")?"Saving...":"Save settings"}</button>
          <button class="btn danger" data-reset-demo ${c("reset-demo")?"disabled":""}>${c("reset-demo")?"Resetting...":"Reset Demo Data"}</button>
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
        <div class="panel-title">
          <div><h2>Categories</h2><span>Local labels</span></div>
          <button class="btn primary" data-add-category>Add category</button>
        </div>
        ${s.categories.length===0?'<div class="empty-state">No categories yet. Add one to make triage choices available.</div>':`<table class="table">
              <thead><tr><th>Name</th><th>Description</th><th>Status</th><th></th></tr></thead>
              <tbody>
                ${s.categories.map(e=>`
                  <tr>
                    <td><span class="badge ${W(e.name)}">${r(e.name)}</span>${e.system?"<br><small>System default</small>":""}</td>
                    <td>${r(e.description||"No description yet.")}</td>
                    <td>${e.active?"Active":"Archived"}</td>
                    <td><button class="btn subtle" data-edit-category="${e.id}">Edit</button></td>
                  </tr>
                `).join("")}
              </tbody>
            </table>`}
        <div class="preview" style="margin-top:14px">Archiving hides a category from new dropdown choices. Existing emails and rules keep displaying safely.</div>
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
  `}function W(a){const e=s.categories.find(t=>t.name===a);return e!=null&&e.color&&e.color!=="default"?e.color:a==="Urgent"||a==="Client complaint"?"urgent":a==="Accounting"||a==="Documents"||a==="Missing documents"?"invoice":a==="Sales"?"lead":""}document.addEventListener("click",async a=>{const e=a.target.closest("button");if(e){if(e.dataset.assistantToggle!==void 0){s.assistantOpen=!s.assistantOpen,v();return}if(e.dataset.assistantCommand){await he(e.dataset.assistantCommand);return}if(e.dataset.confirmCancel!==void 0){s.confirmDialog=null,v();return}if(e.dataset.confirmPrimary!==void 0){const t=s.confirmDialog;if(s.confirmDialog=null,(t==null?void 0:t.type)==="reset-demo"){await g("reset-demo",async()=>{await Xe(),window.location.reload()});return}if((t==null?void 0:t.type)==="delete-rule"){await g(`delete-rule-${t.ruleId}`,async()=>{await nt(t.ruleId),s.rules=await M(),s.activity=await x(),s.selectedRule=null},"Rule deleted locally.");return}if((t==null?void 0:t.type)==="delete-employee"){await g(`delete-employee-${t.employeeId}`,async()=>{await mt(t.employeeId),s.employees=await V(),s.emails=await A(),s.activity=await x(),s.selectedEmployee=null},"Employee removed and assigned emails returned to Unassigned.");return}}if(e.dataset.tab&&T(e.dataset.tab),e.dataset.tabTarget&&T(e.dataset.tabTarget),e.dataset.setupMailbox&&(s.selectedSetupMailboxId=e.dataset.setupMailbox,we()),e.dataset.triageFilter&&(s.triageFilter=e.dataset.triageFilter,v()),e.dataset.draftFilter&&(s.draftFilter=e.dataset.draftFilter,v()),e.dataset.action==="digest"&&await g("digest",async()=>{s.digest=await F()},"Morning digest regenerated from local demo data."),e.dataset.reviewEmail){const t=e.dataset.reviewEmail;await g(`review-${t}`,async()=>{s.selectedEmail=await me(t),s.emails=await A(),s.selectedDraft=null,s.selectedRule=null,s.selectedEmployee=null,s.summary="",s.showExplanation=!1},"Message thread opened.")}if(e.dataset.reviewDraft){const t=e.dataset.reviewDraft;await g(`review-draft-${t}`,async()=>{s.selectedDraft=await q(t),s.selectedEmail=null,s.selectedRule=null,s.selectedEmployee=null,s.selectedCategory=null,s.summary="",s.showExplanation=!1},"Draft opened for review.")}if(e.dataset.openEmailDraft){const t=e.dataset.openEmailDraft;await g(`open-email-draft-${t}`,async()=>{s.selectedDraft=await Ye(t),s.selectedEmail=null,s.selectedRule=null,s.selectedEmployee=null,s.selectedCategory=null,s.summary="",s.showExplanation=!1},"Draft opened for editing.")}if(e.dataset.closeDrawer!==void 0&&(s.selectedEmail=null,s.selectedDraft=null,s.selectedRule=null,s.selectedEmployee=null,s.selectedCategory=null,s.summary="",s.showExplanation=!1,v()),e.dataset.toggleExplanation!==void 0&&(s.showExplanation=!s.showExplanation,v()),e.dataset.summaryEmail){const t=e.dataset.summaryEmail;await g(`summary-${t}`,async()=>{s.summary=await Ze(t)},"Thread summary generated.")}if(e.dataset.generateDraft){const t=e.dataset.generateDraft;await g(`draft-${t}`,async()=>{await Rt(t)},"Draft opened. Existing edits were preserved.")}if(e.dataset.saveDraft){const t=e.dataset.saveDraft,i=document.querySelector("[data-draft-editor]");await g(`save-${t}`,async()=>{var n;await tt(t,i.value),s.drafts=await L(),s.emails=await A(),((n=s.selectedDraft)==null?void 0:n.id)===t&&(s.selectedDraft=await q(t))},"Draft saved locally.")}if(e.dataset.toggleRule){const t=e.dataset.toggleRule;await g(`rule-${t}`,async()=>{await te(t),s.rules=await M()},"Rule preview state updated.")}if(e.dataset.approveRule){const t=e.dataset.approveRule;await g(`approve-rule-${t}`,async()=>{s.rules.find(n=>n.id===t).on||await te(t),s.rules=await M()},"Rule approved for observation mode.")}if(e.dataset.editRule){const t=e.dataset.editRule;await g(`edit-rule-${t}`,async()=>{s.selectedRule=s.rules.find(i=>i.id===t),s.selectedEmail=null,s.selectedDraft=null,s.selectedEmployee=null,s.selectedCategory=null},"Rule opened for local editing.")}if(e.dataset.saveRule){const t=e.dataset.saveRule,i=Object.fromEntries([...document.querySelectorAll("[data-rule-field]")].map(n=>[n.dataset.ruleField,n.value]));await g(`save-rule-${t}`,async()=>{await it(t,i),s.rules=await M(),s.selectedRule=s.rules.find(n=>n.id===t)},"Rule saved locally.")}if(e.dataset.deleteRule){const t=e.dataset.deleteRule,i=s.rules.find(n=>n.id===t);s.confirmDialog={type:"delete-rule",ruleId:t,title:"Delete this rule?",message:`Delete “${(i==null?void 0:i.title)||"this rule"}” from the local demo?`,primaryLabel:"Delete rule",tone:"danger"},v()}if(e.dataset.addEmployee!==void 0&&(s.selectedEmployee={id:"new",name:"",email:"",title:"",department:""},s.selectedEmail=null,s.selectedDraft=null,s.selectedRule=null,s.selectedCategory=null,v()),e.dataset.editEmployee&&(s.selectedEmployee=s.employees.find(t=>t.id===e.dataset.editEmployee)||null,s.selectedEmail=null,s.selectedDraft=null,s.selectedRule=null,s.selectedCategory=null,v()),e.dataset.saveEmployee){const t=e.dataset.saveEmployee,i=Object.fromEntries([...document.querySelectorAll("[data-employee-field]")].map(n=>[n.dataset.employeeField,n.value]));await g(`save-employee-${t}`,async()=>{const n=t==="new"?await ut(i):await pt(t,i);s.employees=await V(),s.activity=await x(),s.selectedEmployee=s.employees.find(o=>o.id===n.id)||null},t==="new"?"Employee added locally.":"Employee changes saved locally.")}if(e.dataset.deleteEmployee){const t=e.dataset.deleteEmployee,i=s.employees.find(o=>o.id===t),n=s.emails.filter(o=>o.assignedTo===t).length;s.confirmDialog={type:"delete-employee",employeeId:t,title:"Remove this employee?",message:`Remove ${(i==null?void 0:i.name)||"this employee"}? ${n} assigned email${n===1?"":"s"} will return to Unassigned.`,primaryLabel:"Remove employee",tone:"danger"},v()}if(e.dataset.addCategory!==void 0&&(s.selectedCategory={id:"new",name:"",description:"",color:"default",active:!0,system:!1},s.selectedEmail=null,s.selectedDraft=null,s.selectedRule=null,s.selectedEmployee=null,v()),e.dataset.editCategory&&(s.selectedCategory=s.categories.find(t=>t.id===e.dataset.editCategory)||null,s.selectedEmail=null,s.selectedDraft=null,s.selectedRule=null,s.selectedEmployee=null,v()),e.dataset.saveCategory){const t=e.dataset.saveCategory,i=Object.fromEntries([...document.querySelectorAll("[data-category-field]")].map(n=>[n.dataset.categoryField,n.value]));await g(`save-category-${t}`,async()=>{const n=t==="new"?await rt(i):await lt(t,i);await se(n.id)},t==="new"?"Category added locally.":"Category changes saved locally.")}if(e.dataset.toggleCategory){const t=e.dataset.toggleCategory;await g(`toggle-category-${t}`,async()=>{const i=await dt(t);await se(i.id)},"Category visibility updated locally.")}if(e.dataset.approveDraft){const t=e.dataset.approveDraft;await g(`approve-${t}`,async()=>{await Ct(t)},"Draft approved and workflow completed. Nothing was sent.")}if(e.dataset.approveSelected!==void 0&&await g("approve-selected",async()=>{await ge(s.selectedDraftIds),s.drafts=await L(),s.emails=await A(),s.activity=await x(),s.digest=await F(),s.selectedDraftIds=[]},"Selected drafts approved and workflows completed. Nothing was sent."),e.dataset.approveLowRisk!==void 0){if(!ve()){P("Low-risk bulk approval is disabled by workspace settings.",!0);return}await g("approve-low-risk",async()=>{await st(),s.drafts=await L(),s.emails=await A(),s.activity=await x(),s.digest=await F(),s.selectedDraftIds=[]},"Low-risk drafts approved and workflows completed. Nothing was sent.")}if(e.dataset.saveSettings!==void 0){const t=Object.fromEntries([...document.querySelectorAll("[data-setting]")].map(i=>[i.dataset.setting,i.value]));await g("settings",async()=>{s.settings=await Je(t),s.settingsForm={...s.settings}},"Settings saved locally.")}e.dataset.resetDemo!==void 0&&(s.confirmDialog={type:"reset-demo",title:"Reset demo data?",message:"This clears all local Courio changes and restores the original fake demo data.",primaryLabel:"Reset demo data",tone:"danger"},v())}});document.addEventListener("change",async a=>{const e=a.target;if(e.dataset.setting!==void 0){s.settingsForm={...B(),[e.dataset.setting]:e.value},e.dataset.setting==="mode"&&v();return}if(e.dataset.emailCategory){const t=e.dataset.emailCategory;await g(`category-${t}`,async()=>{await ot(t,e.value),await G(t)},"Category updated locally.")}if(e.dataset.emailAssignee){const t=e.dataset.emailAssignee;await g(`assign-${t}`,async()=>{await ct(t,e.value),await G(t)},"Email assignment updated locally.")}if(e.dataset.selectDraft){const t=e.dataset.selectDraft;s.selectedDraftIds=e.checked?[...new Set([...s.selectedDraftIds,t])]:s.selectedDraftIds.filter(i=>i!==t),v()}});document.addEventListener("input",a=>{const e=a.target;if(e.dataset.setting!==void 0){s.settingsForm={...B(),[e.dataset.setting]:e.value};return}if(e.dataset.ruleSearch===void 0)return;s.ruleQuery=e.value,ye();const t=document.querySelector("[data-rule-search]");t==null||t.focus(),t==null||t.setSelectionRange(s.ruleQuery.length,s.ruleQuery.length)});document.addEventListener("submit",async a=>{const e=a.target.closest(".assistant-form");if(!e)return;a.preventDefault();const t=e.querySelector("[data-assistant-input]"),i=t.value.trim();i&&(t.value="",await he(i))});v();Et();
