(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function a(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(o){if(o.ep)return;o.ep=!0;const n=a(o);fetch(o.href,n)}})();const Te={en:{brand:{subtitle:"Email assistant for small businesses",asideNote:"Courio uses fake local mailbox data in this prototype and suggests actions. It never sends email or modifies a real mailbox.",previewMode:"Preview mode enabled"},nav:{groups:{home:"Home",work:"Work",automation:"Automation",workspace:"Workspace"},dashboard:"Overview",dashboardSmall:"Today",triage:"Triage",triageSmall:"Inbox",tasks:"Tasks",tasksSmall:"Priority",compose:"Compose",composeSmall:"Local draft",drafts:"Drafts",draftsSmall:"Approval",rules:"Rules",rulesSmall:"Preview",import:"Setup preview",importSmall:"Microsoft 365",admin:"Admin",adminSmall:"Settings"},pages:{dashboard:["Overview","A local workflow preview for email triage, summaries, routing suggestions, and draft preparation."],import:["Setup preview","Preview how a future Microsoft 365 connection could import mailbox structure and workflow patterns."],triage:["Inbox triage","Review AI-classified messages before any action is taken."],tasks:["Action Center","Turn important local inbox items into a priority work list."],compose:["Compose","Create a fake/local message draft without sending anything."],rules:["Rules","Approve or adjust local rule previews. They do not affect a real mailbox."],drafts:["Drafts","Review prepared replies and mark them ready for a person to send."],admin:["Admin","Manage local workspace preferences and preview future integration safeguards."]},admin:{workspaceSettings:"Workspace settings",prototype:"Prototype",companyName:"Company name",language:"Language / Langue",mode:"Mode",escalationRecipient:"Escalation recipient",saveSettings:"Save settings",saving:"Saving...",resetDemoData:"Reset Demo Data",resetting:"Resetting...",safetyPreview:"Safety preview",prototypeBehavior:"Prototype behavior",savedLanguage:"Saved language",languageNote:"Language changes apply after saving. Internal workflow values stay stable."},auth:{demoOnly:"Demo login",title:"Choose a demo account",subtitle:"Use a premade local account to preview what an owner or employee would see.",safetyNote:"This is a local role switcher for the prototype, not real authentication or security.",logout:"Switch account",loginToast:"Demo account opened locally.",logoutToast:"Demo account closed locally."},triage:{inboxControl:"Inbox control",categoryFilter:"Category filter",allCategories:"All categories",emptyUrgent:"No urgent emails. You are caught up on high-priority work.",emptyInvoices:"No invoice emails are waiting for review.",emptyCategory:"No emails match this category filter.",emptyAll:"No emails are available in this local demo.",remove:"Remove",removing:"Removing...",removeFiltered:"Remove filtered",removeFilteredDisabled:"No removable emails in the current view.",removeConfirmTitle:"Remove this email from the demo inbox?",removeConfirmMessage:"This only hides the fake/local demo email. Nothing is deleted from a real mailbox:",removeFilteredConfirmTitle:"Remove filtered emails from the demo inbox?",removeFilteredConfirmMessage:"This only hides fake/local demo emails. Number selected:",removeSuccess:"Email removed from the demo inbox locally."},tasks:{title:"Priority tasks",subtitle:"Generated from the local demo inbox",empty:"No tasks yet. New local inbox items will appear here as work to review.",done:"Done",task:"Task",priority:"Priority",source:"Source email",notes:"Notes",assignedTo:"Assigned to",assigneeFilter:"Assignee filter",allAssignees:"All assignees",unassigned:"Unassigned",employeeScope:"Employee demo view: only tasks assigned to this account are shown.",notePlaceholder:"Add a local note",reviewEmail:"Review email",saveNote:"Save note",saving:"Saving...",noteSaved:"Task note saved locally.",completedToast:"Task checked off locally.",reopenedToast:"Task reopened locally.",openTasks:"Open tasks",openCaption:"From fake/local inbox items",highPriority:"High priority",highCaption:"Review these first",completed:"Completed",completedCaption:"Checked off in this browser",assignedToast:"Task assignment updated locally."},compose:{title:"Compose message",subtitle:"Fake/local only",safetyNote:"This composer does not connect to Gmail, Outlook, or any real mailbox. Saving creates a local draft only.",newMessage:"New message",to:"To",cc:"Cc",subject:"Subject",body:"Message body",attachments:"Attachments",attachmentNote:"Attachments are metadata only in this demo. File contents are not uploaded or stored.",attachmentMetadata:"Attachment metadata",noAttachments:"No attachments selected.",saveDraft:"Save local draft",saving:"Saving...",printPdf:"Print / save as PDF",neverSends:"Never sends email",savedDrafts:"Saved compose drafts",localOnly:"Local only",openDraft:"Open draft",emptyDrafts:"No compose drafts yet.",savedToast:"Compose draft saved locally. Nothing was sent.",printToast:"Use your browser print dialog to save as PDF. Nothing is sent."}},fr:{brand:{subtitle:"Assistant courriel pour PME",asideNote:"Courio utilise des données locales fictives dans ce prototype et suggère des actions. Il n'envoie jamais de courriel et ne modifie aucune vraie boîte courriel.",previewMode:"Mode aperçu activé"},nav:{groups:{home:"Accueil",work:"Travail",automation:"Automatisation",workspace:"Espace de travail"},dashboard:"Aperçu",dashboardSmall:"Aujourd'hui",triage:"Tri",triageSmall:"Boîte de réception",tasks:"Tâches",tasksSmall:"Priorité",compose:"Composer",composeSmall:"Brouillon local",drafts:"Brouillons",draftsSmall:"Approbation",rules:"Règles",rulesSmall:"Aperçu",import:"Aperçu configuration",importSmall:"Microsoft 365",admin:"Admin",adminSmall:"Paramètres"},pages:{dashboard:["Aperçu","Aperçu local des flux de tri courriel, résumés, suggestions de routage et préparation de brouillons."],import:["Aperçu configuration","Aperçu de la façon dont une future connexion Microsoft 365 pourrait importer la structure de boîte courriel et les habitudes de travail."],triage:["Tri de la boîte courriel","Révisez les messages classés par l'IA avant toute action."],tasks:["Centre d'action","Transformez les courriels locaux importants en liste de travail priorisée."],compose:["Composer","Créez un faux brouillon local sans rien envoyer."],rules:["Règles","Approuvez ou ajustez les aperçus de règles locales. Elles ne touchent aucune vraie boîte courriel."],drafts:["Brouillons","Révisez les réponses préparées et marquez-les prêtes pour un envoi humain."],admin:["Admin","Gérez les préférences locales de l'espace de travail et les protections des futures intégrations."]},admin:{workspaceSettings:"Paramètres de l'espace de travail",prototype:"Prototype",companyName:"Nom de l'entreprise",language:"Langue",mode:"Mode",escalationRecipient:"Responsable des escalades",saveSettings:"Enregistrer les paramètres",saving:"Enregistrement...",resetDemoData:"Réinitialiser la démo",resetting:"Réinitialisation...",safetyPreview:"Aperçu de sécurité",prototypeBehavior:"Comportement du prototype",savedLanguage:"Langue enregistrée",languageNote:"Les changements de langue s'appliquent après l'enregistrement. Les valeurs internes du flux restent stables."},auth:{demoOnly:"Connexion démo",title:"Choisir un compte démo",subtitle:"Utilisez un compte local préparé pour voir ce qu'un propriétaire ou un employé verrait.",safetyNote:"Ceci est un sélecteur de rôle local pour le prototype, pas une vraie authentification ni une vraie sécurité.",logout:"Changer de compte",loginToast:"Compte démo ouvert localement.",logoutToast:"Compte démo fermé localement."},triage:{inboxControl:"Contrôle de la boîte",categoryFilter:"Filtre de catégorie",allCategories:"Toutes les catégories",emptyUrgent:"Aucun courriel urgent. Les priorités élevées sont à jour.",emptyInvoices:"Aucun courriel de facture n'attend une révision.",emptyCategory:"Aucun courriel ne correspond à cette catégorie.",emptyAll:"Aucun courriel n'est disponible dans cette démo locale.",remove:"Retirer",removing:"Retrait...",removeFiltered:"Retirer la sélection",removeFilteredDisabled:"Aucun courriel retirable dans la vue actuelle.",removeConfirmTitle:"Retirer ce courriel de la boîte de démo?",removeConfirmMessage:"Cela cache seulement le faux courriel local. Rien n'est supprimé d'une vraie boîte:",removeFilteredConfirmTitle:"Retirer les courriels filtrés de la boîte de démo?",removeFilteredConfirmMessage:"Cela cache seulement des faux courriels locaux. Nombre sélectionné:",removeSuccess:"Courriel retiré localement de la boîte de démo."},tasks:{title:"Tâches prioritaires",subtitle:"Générées à partir de la boîte locale de démo",empty:"Aucune tâche pour l'instant. Les nouveaux courriels locaux apparaîtront ici comme travail à réviser.",done:"Fait",task:"Tâche",priority:"Priorité",source:"Courriel source",notes:"Notes",assignedTo:"Assigné à",assigneeFilter:"Filtre par responsable",allAssignees:"Tous les responsables",unassigned:"Non assigné",employeeScope:"Vue employé démo : seules les tâches assignées à ce compte sont affichées.",notePlaceholder:"Ajouter une note locale",reviewEmail:"Réviser le courriel",saveNote:"Enregistrer la note",saving:"Enregistrement...",noteSaved:"Note de tâche enregistrée localement.",completedToast:"Tâche cochée localement.",reopenedToast:"Tâche rouverte localement.",openTasks:"Tâches ouvertes",openCaption:"Depuis les faux courriels locaux",highPriority:"Priorité élevée",highCaption:"À réviser en premier",completed:"Terminées",completedCaption:"Cochées dans ce navigateur",assignedToast:"Assignation de tâche mise à jour localement."},compose:{title:"Composer un message",subtitle:"Faux/local seulement",safetyNote:"Ce compositeur ne se connecte pas à Gmail, Outlook ni à une vraie boîte courriel. L'enregistrement crée seulement un brouillon local.",newMessage:"Nouveau message",to:"À",cc:"Cc",subject:"Objet",body:"Corps du message",attachments:"Pièces jointes",attachmentNote:"Les pièces jointes sont seulement des métadonnées dans cette démo. Le contenu des fichiers n'est pas téléversé ni stocké.",attachmentMetadata:"Métadonnées des pièces jointes",noAttachments:"Aucune pièce jointe sélectionnée.",saveDraft:"Enregistrer le brouillon local",saving:"Enregistrement...",printPdf:"Imprimer / enregistrer en PDF",neverSends:"N'envoie jamais de courriel",savedDrafts:"Brouillons composés enregistrés",localOnly:"Local seulement",openDraft:"Ouvrir le brouillon",emptyDrafts:"Aucun brouillon composé pour l'instant.",savedToast:"Brouillon composé enregistré localement. Rien n'a été envoyé.",printToast:"Utilisez la fenêtre d'impression du navigateur pour enregistrer en PDF. Rien n'est envoyé."}}};function J(t){return t==="fr"?"fr":"en"}function xe(t){const e=Te[J(t)];return function(i){return i.split(".").reduce((o,n)=>o==null?void 0:o[n],e)||i}}function at(t,e){const a=Te[J(e)];return a.pages[t]||a.pages.dashboard}function r(t=""){return String(t).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function T(t=[]){return t.map(e=>r(e)).join(", ")}const st=["Triage","Urgent emails","Drafts needing approval","Invoices","Generate digest","Create invoice rule","Reset demo data"];function it({assistantOpen:t,assistantMessages:e,assistantBusy:a}){const i=e.length?e:[{id:"assistant-loading",role:"assistant",text:"Loading assistant history..."}];return`
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
            ${i.map(o=>`
              <div class="assistant-message ${o.role==="user"?"user":"bot"}">
                ${r(o.text)}
              </div>
            `).join("")}
          </div>
          <form class="assistant-form">
            <input data-assistant-input placeholder="Show urgent emails" autocomplete="off" ${a?"disabled":""}>
            <button class="btn primary" type="submit" ${a?"disabled":""}>${a?"Working...":"Send"}</button>
          </form>
          <div class="assistant-suggestions" aria-label="Assistant command suggestions">
            ${st.map(o=>`
              <button class="assistant-chip" data-assistant-command="${r(o)}" ${a?"disabled":""}>
                ${r(o)}
              </button>
            `).join("")}
          </div>
        </div>
      `:""}
      <button class="assistant-fab" data-assistant-toggle aria-label="Open Courio assistant">
        AI
      </button>
    </div>
  `}const ot=[{id:"email-1",subject:"Very unhappy about no response",sender:"Maya Chen",senderEmail:"maya@northstar-retail.ca",body:"I have followed up twice and still have not received an answer about the service issue from last week. We need someone senior to respond today.",category:"Client complaint",urgency:"High",confidence:94,suggestedAction:"Escalate to owner",requiresDraft:!0,assignedTo:"emp-1",explanation:"Courio flagged this because the client mentions repeated follow-ups, no response, and asks for senior attention today.",thread:["Client followed up twice about an unanswered service issue.","The last message uses negative sentiment and asks for owner attention."],summary:"Client is frustrated by delayed response. Recommend owner review today.",draft:"Hi, thank you for the follow-up. I'm sorry this has taken longer than expected. I am escalating this now and will make sure you receive a clear update today."},{id:"email-2",subject:"Invoice #1844 payment status",sender:"Alex Rivera",senderEmail:"alex@brightline-supplies.ca",body:"Could you confirm whether invoice #1844 has been approved for payment? It was due last Friday.",category:"Accounting",urgency:"Medium",confidence:89,suggestedAction:"Route to accounting",requiresDraft:!0,assignedTo:"emp-2",explanation:"Courio saw an invoice number, payment-status wording, and a due-date reference, so it suggested accounting review.",thread:["Supplier asks whether invoice #1844 has been scheduled for payment.","Invoice appears related to recurring monthly services."],summary:"Supplier is requesting a payment-status update for invoice #1844.",draft:"Hi, thanks for checking in. We are reviewing invoice #1844 with accounting and will send a status update shortly."},{id:"email-3",subject:"Quote request for monthly bookkeeping",sender:"Priya Nair",senderEmail:"priya@lakeside-catering.ca",body:"We are looking for monthly bookkeeping help for a small catering business. We have six employees and would like pricing before the end of the week.",category:"Sales",urgency:"Medium",confidence:86,suggestedAction:"Prepare intake draft",requiresDraft:!0,assignedTo:"emp-3",explanation:"Courio matched this to sales because the sender asks for pricing, describes company needs, and appears to be a new prospect.",thread:["New prospect requested pricing for monthly bookkeeping.","They mentioned six employees and monthly receipt volume."],summary:"New lead is asking for bookkeeping pricing. Intake details are partially available.",draft:"Hi, thanks for reaching out. We'd be happy to help with monthly bookkeeping. Could you share your approximate monthly transaction count and preferred start date?"},{id:"email-4",subject:"Payroll documents attached",sender:"Tom Bennett",senderEmail:"tom@harbour-grill.ca",body:"Please find this period's payroll documents attached. Let me know if anything is missing before Thursday.",category:"Documents",urgency:"Low",confidence:91,suggestedAction:"Apply payroll category",requiresDraft:!0,assignedTo:"emp-4",explanation:"Courio detected payroll wording and an attachment reference, so it suggested categorizing this for payroll review.",thread:["Client attached payroll documents for this period.","Message should be categorized for payroll review."],summary:"Payroll documents are attached and ready to route to payroll workflow.",draft:"Hi, thanks. We received the payroll documents and will review them for the current period."},{id:"email-5",subject:"Missing March receipts",sender:"Elena Morris",senderEmail:"elena@maple-therapy.ca",body:"I thought I sent the March receipts, but I may have missed the attachment. Can you let me know what you still need?",category:"Missing documents",urgency:"Medium",confidence:88,suggestedAction:"Prepare follow-up draft",requiresDraft:!0,assignedTo:"emp-2",explanation:"Courio flagged this because the email talks about receipts and a possibly missing attachment, which usually needs a document follow-up.",thread:["Client mentions March receipts but no attachments are present.","Follow-up should request the missing files."],summary:"March receipts appear to be missing. Prepare a concise document request.",draft:"Hi, thanks for the note. It looks like the March receipts were not attached. Could you resend them when convenient?"},{id:"email-6",subject:"Can we move tomorrow's appointment?",sender:"Jordan Lee",senderEmail:"jordan@greenway-landscaping.ca",body:"Something came up with our crew schedule. Can we move tomorrow's appointment to next Tuesday afternoon?",category:"Scheduling",urgency:"Low",confidence:82,suggestedAction:"Offer available times",requiresDraft:!0,assignedTo:"emp-5",explanation:"Courio identified a scheduling change request with a proposed new time, so it suggested a simple scheduling reply.",thread:["Client asks to move an appointment from tomorrow to next Tuesday afternoon.","No urgent sentiment or billing issue detected."],summary:"Client wants to reschedule tomorrow's appointment to next Tuesday afternoon.",draft:"Hi, thanks for letting us know. Next Tuesday afternoon should work on our side. Could you confirm your preferred time window?"},{id:"email-7",subject:"Weekly partner newsletter",sender:"Service Ledger Weekly",senderEmail:"updates@serviceledger.example",body:"This week's roundup includes product tips, partner webinars, and a checklist for organizing client documents before month end.",category:"Newsletter",urgency:"Low",confidence:79,suggestedAction:"Remove from demo inbox",requiresDraft:!0,assignedTo:"",explanation:"Courio categorized this as a newsletter because it is a broadcast update with no client request, deadline, or required reply.",thread:["Marketing-style newsletter with no direct client request.","Low-priority inbox noise that can be removed from the demo inbox after review."],summary:"Newsletter-style update. No reply appears needed.",draft:"No reply needed. This local demo item can be removed from the inbox after review."}],nt=[{id:"cat-client-complaint",name:"Client complaint",description:"Escalations, unhappy clients, repeated follow-ups, and high-trust replies.",color:"urgent",active:!0,system:!0},{id:"cat-accounting",name:"Accounting",description:"Invoices, payment status, receipts, bookkeeping, and supplier questions.",color:"invoice",active:!0,system:!0},{id:"cat-sales",name:"Sales",description:"New leads, quote requests, pricing questions, and intake replies.",color:"lead",active:!0,system:!0},{id:"cat-documents",name:"Documents",description:"Attached files, payroll documents, client records, and document routing.",color:"invoice",active:!0,system:!0},{id:"cat-missing-documents",name:"Missing documents",description:"Missing attachments, receipts, files, or client documents that need follow-up.",color:"invoice",active:!0,system:!0},{id:"cat-scheduling",name:"Scheduling",description:"Appointment changes, availability, calendar coordination, and time windows.",color:"pending",active:!0,system:!0},{id:"cat-general",name:"General",description:"Messages that do not need a specialized workflow yet.",color:"default",active:!0,system:!0},{id:"cat-newsletter",name:"Newsletter",description:"Marketing emails, updates, and low-priority broadcast messages.",color:"default",active:!0,system:!1},{id:"cat-follow-up",name:"Follow-up",description:"Messages that need a reminder, next step, or later response.",color:"pending",active:!0,system:!1},{id:"cat-internal",name:"Internal",description:"Team messages, internal coordination, and company updates.",color:"lead",active:!0,system:!1},{id:"cat-vendor",name:"Vendor",description:"Supplier, partner, and vendor conversations.",color:"invoice",active:!0,system:!1}],rt=[{id:"emp-1",name:"Nadia Patel",title:"Owner",email:"nadia@courio-demo.ca",department:"Leadership"},{id:"emp-2",name:"Marcus Roy",title:"Bookkeeper",email:"marcus@courio-demo.ca",department:"Accounting"},{id:"emp-3",name:"Sofia Tremblay",title:"Client Success Lead",email:"sofia@courio-demo.ca",department:"Sales"},{id:"emp-4",name:"Daniel Kim",title:"Payroll Specialist",email:"daniel@courio-demo.ca",department:"Payroll"},{id:"emp-5",name:"Avery Brooks",title:"Office Coordinator",email:"avery@courio-demo.ca",department:"Operations"}],lt=[{id:"rule-1",title:"Supplier invoice routing",desc:"Suggest an accounting category and owner for supplier invoices and payment requests.",category:"Accounting",confidence:91,explanation:"Courio looks for invoice numbers, payment wording, supplier senders, and due-date language.",impact:"Matches the sample invoice messages in this local demo.",matches:["Invoice #1844 payment status","Supplier payment confirmation"],on:!0},{id:"rule-2",title:"Client escalation detection",desc:"Flag negative sentiment, repeated follow-ups, or unanswered client messages older than 48 hours.",category:"Client complaint",confidence:94,explanation:"Courio looks for negative sentiment, repeated follow-ups, and requests for owner attention.",impact:"Flags the sample high-risk client thread in this local demo.",matches:["Very unhappy about no response"],on:!0},{id:"rule-3",title:"Quote request intake",desc:"Prepare standardized draft replies for new prospects requesting pricing or availability.",category:"Sales",confidence:86,explanation:"Courio looks for pricing requests, new prospect language, and service-fit details.",impact:"Matches the sample quote request in this local demo.",matches:["Quote request for monthly bookkeeping"],on:!1},{id:"rule-4",title:"Missing document follow-up",desc:"Prepare client reminders when required documents are mentioned but not attached.",category:"Missing documents",confidence:88,explanation:"Courio looks for missing attachment wording, receipt requests, and document follow-up language.",impact:"Useful for bookkeeping, accounting, insurance, and service teams.",matches:["Missing March receipts"],on:!1}],U="courio.mockState.v1",pe="courio.assistantHistory.v1",de="courio.demoSession.v1",ge=2,ve=[{id:"admin-owner",role:"Admin",employeeId:"emp-1",name:"Nadia Patel",title:"Owner",email:"nadia@courio-demo.ca"},{id:"employee-marcus",role:"Employee",employeeId:"emp-2",name:"Marcus Roy",title:"Bookkeeper",email:"marcus@courio-demo.ca"}],g=Object.freeze({NEEDS_REVIEW:"needs_review",READY_FOR_DRAFT:"ready_for_draft",DRAFT_GENERATED:"draft_generated",DRAFT_REVIEWED:"draft_reviewed",DRAFT_SAVED:"draft_saved",COMPLETED:"completed"}),dt=new Set(Object.values(g)),ct={status:"Simulated setup preview",safetyNote:"No account is connected. This demo does not access real email, folders, files, or contacts.",futureNote:"In a future version, this step could connect to Gmail or Microsoft 365 after explicit approval.",mailboxes:[{id:"mailbox-main",name:"Main inbox",address:"hello@demo-company.ca",type:"Primary mailbox",volume:"142 recent threads",risk:"Mixed priority",folders:["Inbox","Needs reply","Clients","Vendors","Archive"],categories:["Client complaint","Accounting","Sales","Scheduling"],frequentSenders:["Northstar Retail","Brightline Supplies","Lakeside Catering"],sharedInboxes:["info@demo-company.ca"],recentThreads:["Very unhappy about no response","Invoice #1844 payment status","Quote request for monthly bookkeeping"]},{id:"mailbox-accounting",name:"Accounting",address:"accounting@demo-company.ca",type:"Shared mailbox",volume:"88 recent threads",risk:"Document-heavy",folders:["Invoices","Receipts","Payroll","Tax documents","Vendors"],categories:["Accounting","Documents","Missing documents"],frequentSenders:["Brightline Supplies","Harbour Grill","Maple Therapy"],sharedInboxes:["payroll@demo-company.ca"],recentThreads:["Invoice #1844 payment status","Payroll documents attached","Missing March receipts"]},{id:"mailbox-sales",name:"Sales",address:"sales@demo-company.ca",type:"Shared mailbox",volume:"53 recent threads",risk:"Revenue-sensitive",folders:["Leads","Quotes","Follow up","Won","Lost"],categories:["Sales","Scheduling"],frequentSenders:["Lakeside Catering","Greenway Landscaping","New prospects"],sharedInboxes:["quotes@demo-company.ca"],recentThreads:["Quote request for monthly bookkeeping","Can we move tomorrow's appointment?"]},{id:"mailbox-operations",name:"Operations",address:"ops@demo-company.ca",type:"Team mailbox",volume:"61 recent threads",risk:"Coordination-heavy",folders:["Scheduling","Client updates","Internal","Completed"],categories:["Scheduling","Documents","General"],frequentSenders:["Greenway Landscaping","Client coordinators","Office team"],sharedInboxes:["support@demo-company.ca"],recentThreads:["Can we move tomorrow's appointment?","Payroll documents attached"]},{id:"mailbox-shared",name:"Shared inbox",address:"info@demo-company.ca",type:"Shared intake",volume:"119 recent threads",risk:"Needs routing",folders:["Inbox","Unsorted","Clients","Prospects","Vendors"],categories:["Client complaint","Sales","Accounting","Missing documents"],frequentSenders:["Clients","Suppliers","Prospects"],sharedInboxes:["hello@demo-company.ca","support@demo-company.ca"],recentThreads:["Very unhappy about no response","Quote request for monthly bookkeeping","Missing March receipts"]}],scanItems:[{label:"Folders",detail:"Inbox structure, archive folders, and team-specific folders.",count:14},{label:"Labels/categories",detail:"Existing categories that could map to Courio triage buckets.",count:9},{label:"Frequent senders",detail:"Recurring clients, vendors, prospects, and internal senders.",count:26},{label:"Shared inboxes",detail:"Mailboxes that several employees may monitor.",count:4},{label:"Recent threads",detail:"Recent local demo examples used to preview workflow suggestions.",count:142},{label:"Suggested workflow rules",detail:"Draft local rules for routing, escalation, and follow-up.",count:5}],setupSteps:[{title:"Choose mailbox",detail:"Select the mailbox Courio should preview.",state:"Available in demo"},{title:"Scan folders and labels",detail:"Preview folders, categories, and common sender patterns.",state:"Simulated"},{title:"Detect common email types",detail:"Identify invoices, quote requests, complaints, missing documents, and scheduling.",state:"Simulated"},{title:"Suggest workflows",detail:"Create local suggested rules for review before anything is used.",state:"Simulated"},{title:"Ready for review",detail:"Move to Triage and Rules to inspect the fake suggestions.",state:"Demo only"}],workflowSuggestions:[{match:"Invoices",outcome:"Accounting review",reason:"Invoice numbers, due dates, supplier language."},{match:"Quote requests",outcome:"Sales intake",reason:"Pricing requests, service-fit details, new prospect wording."},{match:"Complaints",outcome:"Owner escalation",reason:"Repeated follow-ups, negative sentiment, senior attention requests."},{match:"Missing documents",outcome:"Follow-up draft",reason:"Receipts, attachments, payroll, or document gaps."},{match:"Scheduling",outcome:"Offer available times",reason:"Appointment changes, time windows, reschedule language."}]},F={schemaVersion:ge,emails:ot.map(ut),categories:structuredClone(nt),employees:structuredClone(rt),rules:structuredClone(lt),drafts:[],tasks:[],composeDrafts:[],settings:{productName:"Courio",mode:"Simple",language:"en",companyName:"Demo PME Inc.",defaultMode:"Observation only",escalationRecipient:"owner@company.ca",confidenceThreshold:"80",observationDays:"7",allowLowRiskBulkApproval:"Yes",approvalRequired:!0,autoSend:!1},completedActions:[],deletedEmployeeIds:[],deletedRuleIds:[]},c=mt();let P=$t(),E=bt();const p=(t=550)=>new Promise(e=>setTimeout(e,t));function m(t){return structuredClone(t)}function ut(t){const{status:e,workflowStatus:a,reviewed:i,...o}=m(t);return{...o,archivedAt:o.archivedAt||null,archiveReason:o.archiveReason||"",workflowState:g.NEEDS_REVIEW}}function mt(){try{const t=window.localStorage.getItem(U);if(!t)return m(F);const e=JSON.parse(t),a=pt(e);return window.localStorage.setItem(U,JSON.stringify(a)),a}catch{return m(F)}}function pt(t){const e=t.deletedEmployeeIds||[],a=t.deletedRuleIds||[],i=gt(t.categories),o=z(F.emails,t.emails),n=Array.isArray(t.drafts)?t.drafts:[],l=ft(n),y=o.map(v=>{const oe=l.find(Se=>(Se.emailId||Se.id)===v.id),ne=vt(v,oe,t.schemaVersion),{status:$e,workflowStatus:re,reviewed:xa,...le}=v;return{...le,archivedAt:le.archivedAt||null,archiveReason:le.archiveReason||"",workflowState:ne}}),b=new Map(y.map(v=>[v.id,v])),D=l.filter(v=>yt(v,b.get(v.emailId||v.id))).map(ht);return{...m(F),...t,schemaVersion:ge,emails:y,categories:i,employees:z(F.employees.filter(v=>!e.includes(v.id)),(t.employees||[]).filter(v=>!e.includes(v.id))),rules:z(F.rules.filter(v=>!a.includes(v.id)),(t.rules||[]).filter(v=>!a.includes(v.id))),drafts:D,tasks:Array.isArray(t.tasks)?t.tasks.map(Q):[],composeDrafts:Array.isArray(t.composeDrafts)?t.composeDrafts.map(Ie):[],settings:{...F.settings,...t.settings||{}},completedActions:Array.isArray(t.completedActions)?t.completedActions:[],deletedEmployeeIds:e,deletedRuleIds:a}}function gt(t=[]){return z(F.categories,t).map(a=>({description:"",color:"default",active:!0,system:!1,...a}))}function vt(t,e,a){return a>=ge&&dt.has(t.workflowState)?t.workflowState:t.status==="Done"||t.workflowStatus==="Completed"||(e==null?void 0:e.status)==="Ready for human send"||(e==null?void 0:e.status)==="Approved"?g.COMPLETED:(e==null?void 0:e.status)==="Saved"?g.DRAFT_SAVED:e!=null&&e.reviewed?g.DRAFT_REVIEWED:e!=null&&e.generated||(e==null?void 0:e.status)==="Generated"?g.DRAFT_GENERATED:t.reviewed||t.reviewedAt?g.READY_FOR_DRAFT:g.NEEDS_REVIEW}function ft(t){const e=new Map;for(const a of t){const i=(a==null?void 0:a.emailId)||(a==null?void 0:a.id);if(!i)continue;const o=e.get(i);(!o||ke(a)>ke(o))&&e.set(i,a)}return[...e.values()]}function ke(t){return({"Needs approval":0,Generated:1,Saved:3,"Ready for human send":4,Approved:4}[t.status]||0)+(t.generated?1:0)+(t.reviewed?1:0)}function yt(t,e){return!t||!e?!1:!!(t.generated||t.reviewed||["Generated","Saved","Ready for human send","Approved"].includes(t.status)||[g.DRAFT_GENERATED,g.DRAFT_REVIEWED,g.DRAFT_SAVED,g.COMPLETED].includes(e.workflowState))}function ht(t){const{generated:e,reviewed:a,status:i,...o}=m(t);return{...o,emailId:t.emailId||t.id}}function Q(t){return{id:t.id||`task-${t.emailId||Date.now()}`,emailId:t.emailId||"",title:t.title||"Review email",description:t.description||"",priority:t.priority||"Medium",category:t.category||"General",assignedTo:t.assignedTo||"",status:t.status==="Done"?"Done":"Open",notes:t.notes||"",history:Array.isArray(t.history)?t.history:[],createdAt:t.createdAt||new Date().toISOString(),updatedAt:t.updatedAt||t.createdAt||new Date().toISOString(),completedAt:t.completedAt||null}}function Ie(t){var e,a,i,o;return{id:t.id||`compose-${Date.now()}`,to:((e=t.to)==null?void 0:e.trim())||"",cc:((a=t.cc)==null?void 0:a.trim())||"",subject:((i=t.subject)==null?void 0:i.trim())||"",body:((o=t.body)==null?void 0:o.trim())||"",attachments:Array.isArray(t.attachments)?t.attachments.map(n=>({id:n.id||`attachment-${Date.now()}`,name:n.name||"Local attachment",type:n.type||"Unknown",size:Number(n.size)||0})):[],status:"Draft",createdAt:t.createdAt||new Date().toISOString(),updatedAt:t.updatedAt||t.createdAt||new Date().toISOString()}}function wt(t){const e=Ie(t);if(!e.to)throw new Error("Recipient is required.");if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.to))throw new Error("Enter a valid recipient email.");if(!e.subject)throw new Error("Subject is required.");if(!e.body)throw new Error("Message body is required.");return e}function z(t,e=[]){const a=Array.isArray(e)?e:[],i=t.map(n=>{const l=a.find(y=>y.id===n.id);return l?{...n,...l}:m(n)}),o=a.filter(n=>!t.some(l=>l.id===n.id));return[...i,...o.map(m)]}function w(){window.localStorage.setItem(U,JSON.stringify(c))}function bt(){try{const t=window.localStorage.getItem(de);if(!t)return null;const e=JSON.parse(t);return ve.find(a=>a.id===e.id)||null}catch{return null}}function Fe(){if(!E){window.localStorage.removeItem(de);return}window.localStorage.setItem(de,JSON.stringify({id:E.id}))}function _(){return(E==null?void 0:E.role)==="Employee"}function fe(){return(E==null?void 0:E.employeeId)||""}function k(){if(E&&E.role!=="Admin")throw new Error("This demo account cannot access admin-only actions.")}function $t(){try{const t=window.localStorage.getItem(pe);return t?JSON.parse(t):[{id:"assistant-welcome",role:"assistant",text:"Hi, I can help with urgent emails, invoices, drafts, digest updates, rules, and explanations."}]}catch{return[{id:"assistant-welcome",role:"assistant",text:"Hi, I can help with urgent emails, invoices, drafts, digest updates, rules, and explanations."}]}}function St(){window.localStorage.setItem(pe,JSON.stringify(P))}function kt(){return c.settings.allowLowRiskBulkApproval!=="No"}function Dt(){return!0}function S(t){return t.workflowState===g.COMPLETED}function ye(t){const e=c.emails.find(a=>a.id===(t.emailId||t.id));return(e==null?void 0:e.workflowState)===g.DRAFT_SAVED}function Y(t){return{[g.NEEDS_REVIEW]:"Review required",[g.READY_FOR_DRAFT]:"Draft needed",[g.DRAFT_GENERATED]:"Draft generated",[g.DRAFT_REVIEWED]:"Draft in review",[g.DRAFT_SAVED]:"Draft saved",[g.COMPLETED]:"Completed"}[t]||"Review required"}function Le(t){return{[g.DRAFT_GENERATED]:"Generated",[g.DRAFT_REVIEWED]:"In review",[g.DRAFT_SAVED]:"Saved",[g.COMPLETED]:"Ready for human send"}[t]||"No draft"}function I(t,e={}){c.completedActions.unshift({id:`action-${Date.now()}-${Math.random().toString(16).slice(2)}`,type:t,completedAt:new Date().toISOString(),...e}),c.completedActions=c.completedActions.slice(0,50)}function Me(t,e){t.workflowState=g.COMPLETED,e.approvedAt=new Date().toISOString(),e.updatedAt=e.approvedAt,I("draft-approved",{emailId:t.id,draftId:e.id,label:`Draft approved and workflow completed: ${t.subject}`})}function M(t){const e=c.emails.find(l=>l.id===(t.emailId||t.id)),a=S(e||{})?"Done":"Open",i=S(e||{}),o=(e==null?void 0:e.workflowState)===g.DRAFT_SAVED,n=Le(e==null?void 0:e.workflowState);return{...t,sourceEmailStatus:a,sourceWorkflowStatus:Y(e==null?void 0:e.workflowState),approvalState:i?"ready_for_human_send":(e==null?void 0:e.workflowState)===g.DRAFT_SAVED?"saved":(e==null?void 0:e.workflowState)===g.DRAFT_GENERATED?"generated":"needs_review",status:n,statusLabel:n,isReadyForHumanSend:i,canApprove:o,canSelectForBulkApproval:o,approvalBlocker:o?"":i?"Source email is completed.":"Review and save this draft before approving."}}function V(t){const e=Z(t.id),a=Dt(),i=!!e,o=S(t),n=o,l=t.workflowState!==g.NEEDS_REVIEW;return{...t,archived:!!t.archivedAt,reviewed:l,status:n?"Done":"Open",workflowStatus:Y(t.workflowState),requiresDraft:a,draftId:i&&(e==null?void 0:e.id)||null,draftStatus:i?Le(t.workflowState):null,draftStatusLabel:i?M(e).statusLabel:"No draft",draftReadyForHumanSend:o,workflowLabel:Y(t.workflowState),canComplete:!1,completeActionLabel:"Completed",draftActionLabel:n?"View approved draft":i?"Edit draft":"Generate draft",canGenerateDraft:t.workflowState===g.READY_FOR_DRAFT&&!i,canOpenDraft:i,canArchive:!i||n,archiveBlocker:i&&!n?"Finish the active draft before removing this email from the demo inbox.":"",completionBlocker:l?n?"This workflow is complete.":i?"Open the existing draft to continue this workflow.":"":"Review this email before generating a draft."}}function Ne(t){return t.urgency==="High"||t.category===$("cat-client-complaint","Client complaint")?"High":t.urgency==="Low"?"Low":"Medium"}function De(t){return{High:0,Medium:1,Low:2}[t.priority]??3}function At(t){const e=new Date().toISOString();return Q({id:`task-${t.id}`,emailId:t.id,title:t.suggestedAction||`Review ${t.subject}`,description:t.summary||t.explanation||t.subject,priority:Ne(t),category:t.category,assignedTo:t.assignedTo||"",status:"Open",notes:"",history:[{at:e,label:"Task created from local inbox item"}],createdAt:e,updatedAt:e})}function Oe(){const t=new Set(c.tasks.map(e=>e.emailId));ee().filter(e=>!S(e)).forEach(e=>{t.has(e.id)||c.tasks.push(At(e))}),c.tasks=c.tasks.map(e=>{const a=c.emails.find(i=>i.id===e.emailId);return Q(a?{...e,title:e.title||a.suggestedAction,description:e.description||a.summary||a.explanation,priority:e.priority||Ne(a),assignedTo:e.assignedTo||a.assignedTo||"",category:a.category}:e)})}function qe(t){const e=c.emails.find(i=>i.id===t.emailId),a=c.employees.find(i=>i.id===t.assignedTo)||null;return{...t,assignedEmployee:a?m(a):null,sourceEmail:e?V(e):null,hiddenFromInbox:!!(e!=null&&e.archivedAt),sourceCompleted:e?S(e):!1}}function C(t){const e=c.emails.find(a=>a.id===t);if(!e)throw new Error("Email not found.");return e}function X(t){const e=c.drafts.find(a=>a.id===t);if(!e)throw new Error("Draft not found.");return e}function Z(t){return c.drafts.find(e=>(e.emailId||e.id)===t)}function ee(){return c.emails.filter(t=>t.archivedAt?!1:_()?t.assignedTo===fe():!0)}function H(t){const e=c.employees.find(a=>a.id===t);if(!e)throw new Error("Employee not found.");return e}function je(t){const e=c.categories.find(a=>a.id===t);if(!e)throw new Error("Category not found.");return e}function _e(t){return c.categories.find(e=>e.name.toLowerCase()===String(t||"").trim().toLowerCase())}function Pe(t,e=null){var o,n;const a={name:((o=t.name)==null?void 0:o.trim())||"",description:((n=t.description)==null?void 0:n.trim())||"",color:t.color||"default"};if(!a.name)throw new Error("Category name is required.");if(c.categories.find(l=>l.id!==e&&l.name.toLowerCase()===a.name.toLowerCase()))throw new Error("A category with this name already exists.");return a}function Et(t,e){c.emails.forEach(a=>{a.category===t&&(a.category=e)}),c.rules.forEach(a=>{a.category===t&&(a.category=e)})}function $(t,e){var a;return((a=c.categories.find(i=>i.id===t))==null?void 0:a.name)||e}function Ct(){const t={"Client complaint":$("cat-client-complaint","Client complaint"),Accounting:$("cat-accounting","Accounting"),Sales:$("cat-sales","Sales"),Documents:$("cat-documents","Documents"),"Missing documents":$("cat-missing-documents","Missing documents"),Scheduling:$("cat-scheduling","Scheduling"),General:$("cat-general","General")},e=m(ct);return e.mailboxes=e.mailboxes.map(a=>({...a,categories:a.categories.map(i=>t[i]||i)})),e}function He(t,e=null){var o,n,l,y;const a={name:((o=t.name)==null?void 0:o.trim())||"",email:((n=t.email)==null?void 0:n.trim().toLowerCase())||"",title:((l=t.title)==null?void 0:l.trim())||"",department:((y=t.department)==null?void 0:y.trim())||""};if(!a.name)throw new Error("Employee name is required.");if(!a.email)throw new Error("Employee email is required.");if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(a.email))throw new Error("Enter a valid employee email address.");if(!a.title)throw new Error("Employee title is required.");if(!a.department)throw new Error("Employee department is required.");if(c.employees.find(b=>{var D;return b.id!==e&&((D=b.email)==null?void 0:D.trim().toLowerCase())===a.email}))throw new Error("An employee with this email already exists.");return a}function Rt(){const t=ee().filter(l=>!S(l)),e=c.drafts.map(M),a=e.filter(l=>l.isReadyForHumanSend).length,i=e.filter(l=>l.canSelectForBulkApproval).length,o=l=>t.filter(y=>y.category===l),n=t.filter(l=>l.urgency==="High");return{generatedAt:new Date().toLocaleTimeString([],{hour:"numeric",minute:"2-digit"}),headline:`${t.length} open emails need review. ${n.length} are urgent and ${i} drafts need approval.`,urgentItems:n.map(l=>l.subject),draftsAwaitingApproval:i,readyForHumanSend:a,invoices:o($("cat-accounting","Accounting")).map(l=>l.subject),missingDocuments:o($("cat-missing-documents","Missing documents")).map(l=>l.subject),quoteRequests:o($("cat-sales","Sales")).map(l=>l.subject),clientComplaints:o($("cat-client-complaint","Client complaint")).map(l=>l.subject),recommendedActions:[n.length?"Review urgent client items first.":"No urgent client escalations are open.",i?"Review drafts before marking them ready for human send.":"No drafts are waiting for approval.","Keep observation mode on while this remains a demo."]}}function Tt(){const t=c.rules.find(a=>/invoice/i.test(`${a.title} ${a.desc}`));if(t)return t.on=!0,w(),t;const e={id:`rule-${Date.now()}`,title:"Invoice intake assistant",desc:"Flag invoice messages, payment questions, due dates, and supplier follow-ups for accounting review.",category:$("cat-accounting","Accounting"),confidence:84,explanation:"Courio would look for invoice numbers, balance-due wording, supplier names, and payment timing.",impact:"Created locally from the assistant chat. It only previews matches in this prototype.",matches:c.emails.filter(a=>a.category===$("cat-accounting","Accounting")).map(a=>a.subject),on:!0};return c.rules.push(e),w(),e}function xt(t){return t.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9\s]/g," ").replace(/\s+/g," ")}function It(t,e){const a=Array.from({length:e.length+1},(i,o)=>o);for(let i=1;i<=t.length;i+=1){let o=a[0];a[0]=i;for(let n=1;n<=e.length;n+=1){const l=a[n],y=t[i-1]===e[n-1]?0:1;a[n]=Math.min(a[n]+1,a[n-1]+1,o+y),o=l}}return a[e.length]}function Ft(t,e){if(t.length!==e.length)return!1;const a=[];for(let i=0;i<t.length;i+=1)t[i]!==e[i]&&a.push(i);return a.length===2&&a[1]===a[0]+1&&t[a[0]]===e[a[1]]&&t[a[1]]===e[a[0]]}function N(t,e){const a=t.split(" ").filter(Boolean);return e.some(i=>i.includes(" ")?t.includes(i):a.some(o=>{if(o===i||Ft(o,i))return!0;const n=i.length>=7?2:i.length>=4?1:0;return n>0&&Math.abs(o.length-i.length)<=n&&It(o,i)<=n}))}function Lt(t,e={}){const a=xt(t),i=ee(),o=i.filter(v=>!S(v)&&v.urgency==="High").length,n=$("cat-accounting","Accounting"),l=i.filter(v=>!S(v)&&v.category===n).length,y=c.drafts.map(M).filter(v=>v.canSelectForBulkApproval).length,b=N(a,["invoice","invoices","accounting"]),D=N(a,["rule","rules","create rule"]);if(N(a,["urgent","urgency"]))return{text:`${o} urgent emails are open. I switched Triage to urgent items.`,action:{type:"show_triage",filter:"urgent"}};if(N(a,["triage","inbox","show inbox","open inbox"]))return{text:"I opened the full Triage inbox.",action:{type:"show_triage",filter:"all"}};if(b&&D)return{text:"Invoice rule is ready in observation mode. It is still fake/local and will not touch a mailbox.",action:{type:"show_rule",ruleId:Tt().id}};if(b)return{text:`${l} invoice-related emails are open. I switched Triage to ${n}.`,action:{type:"show_triage",filter:"invoices"}};if(N(a,["draft","drafts","approval","approve"]))return{text:`${y} saved drafts need human approval. I opened the Drafts queue.`,action:{type:"show_drafts",filter:"needs_approval"}};if(N(a,["digest","morning digest"]))return{text:"I regenerated the morning digest from local demo data.",action:{type:"generate_digest"}};if(N(a,["explain","explanation","why"])){if(!e.selectedEmailId)return{text:"Open an email in Triage first, then ask me to explain it. I will show the flagged reason."};const v=V(C(e.selectedEmailId));return{text:`Courio flagged "${v.subject}" because: ${v.explanation}`,action:{type:"explain_email",emailId:v.id}}}return N(a,["reset","restart"])?{text:"I can reset the fake demo data now. The page will reload so defaults come back clean.",action:{type:"reset_demo_data"}}:{text:"I did not catch that. Try one of the command hints below."}}async function R(){return await p(),m(ee().map(V))}async function Mt(){return await p(150),m(ve)}async function Be(){return await p(150),m(E)}async function Nt(t){await p(250);const e=ve.find(a=>a.id===t);if(!e)throw new Error("Demo account not found.");return E=e,Fe(),m(E)}async function Ot(){return await p(150),E=null,Fe(),null}async function x(){return await p(350),Oe(),w(),m(c.tasks.map(qe).filter(t=>!t.hiddenFromInbox).filter(t=>!_()||t.assignedTo===fe()).sort((t,e)=>De(t)-De(e)||(t.status==="Done")-(e.status==="Done")||t.createdAt.localeCompare(e.createdAt)))}async function ce(){return await p(350),m(c.employees)}async function We(){return await p(300),m(c.categories)}async function q(){return await p(400),_()?[]:m(c.rules)}async function Ve(){return await p(350),Ct()}async function L(){return await p(700),m(Rt())}async function j(){return await p(400),_()?[]:m(c.drafts.map(M))}async function he(){return await p(350),m([...c.composeDrafts].sort((t,e)=>e.updatedAt.localeCompare(t.updatedAt)))}async function qt(t){await p(500);const e=wt(t),a=c.composeDrafts.findIndex(n=>n.id===e.id),i=new Date().toISOString(),o={...e,id:a===-1?`compose-${Date.now()}`:e.id,createdAt:a===-1?i:c.composeDrafts[a].createdAt,updatedAt:i};return a===-1?c.composeDrafts.unshift(o):c.composeDrafts[a]=o,I("compose-draft-saved",{draftId:o.id,label:`Compose draft saved: ${o.subject}`}),w(),m(o)}async function B(t){await p(450);const e=X(t),a=C(e.emailId||e.id);return a.workflowState===g.DRAFT_GENERATED&&(a.workflowState=g.DRAFT_REVIEWED,e.reviewedAt=new Date().toISOString(),e.updatedAt=e.reviewedAt,w()),m({...M(e),sourceEmail:{id:a.id,subject:a.subject,sender:a.sender,senderEmail:a.senderEmail,body:a.body,suggestedAction:a.suggestedAction,confidence:a.confidence,urgency:a.urgency,status:S(a)?"Done":"Open",workflowStatus:Y(a.workflowState)}})}async function jt(t){await p(350),C(t);const e=Z(t);return e?B(e.id):null}async function _t(){return await p(250),m(c.settings)}async function Pt(t){return await p(450),k(),c.settings={...c.settings,...t,language:t.language?t.language==="fr"?"fr":"en":c.settings.language,approvalRequired:!0,autoSend:!1},w(),m(c.settings)}async function Ht(){return await p(350),k(),window.localStorage.removeItem(U),window.localStorage.removeItem(pe),m(F)}async function ze(t){await p();const e=C(t);return e.workflowState===g.NEEDS_REVIEW&&(e.workflowState=g.READY_FOR_DRAFT,e.reviewedAt=new Date().toISOString(),w()),m({...V(e),messages:e.thread})}async function Bt(t){return await p(700),C(t).summary}async function Wt(t){await p(750);const e=C(t);if(S(e))throw new Error("This email is done. Reopen it before creating or changing a draft.");if(e.workflowState===g.NEEDS_REVIEW)throw new Error("Review this email before generating a draft.");const a=Z(t);if(a)return m(M(a));if(e.workflowState!==g.READY_FOR_DRAFT)throw new Error("This workflow is not ready to generate a new draft.");const i=new Date().toISOString(),o={id:`draft-${t}`,emailId:t,title:e.suggestedAction,source:e.subject,text:e.draft,confidence:e.confidence,risk:e.urgency==="High"?"High":"Low",createdAt:i,updatedAt:i};return c.drafts.push(o),e.workflowState=g.DRAFT_GENERATED,w(),m(M(o))}async function Vt(t,e){if(await p(),!e||e.trim().length<10)throw new Error("Draft is too short to save.");const a=X(t),i=C(a.emailId||a.id);if(S(i))throw new Error("This email is done. Reopen it before editing the draft.");if(![g.DRAFT_REVIEWED,g.DRAFT_SAVED].includes(i.workflowState))throw new Error("Review this draft before saving it.");return a.text=e,a.updatedAt=new Date().toISOString(),i.workflowState=g.DRAFT_SAVED,w(),m(M(a))}async function zt(t){await p(),k();const e=X(t),a=C(e.emailId||e.id);if(S(a))throw new Error("This email is done. Reopen it before changing draft approval.");if(!ye(e))throw new Error("Review this draft before approving.");return Me(a,e),w(),m(M(e))}async function Ge(t){if(await p(650),k(),!t.length)throw new Error("Select at least one draft first.");const e=t.map(i=>{const o=X(i),n=C(o.emailId||o.id);return{draft:o,email:n}}).filter(({email:i})=>!S(i));if(!e.length)throw new Error("No selected drafts could be approved.");if(e.some(({draft:i})=>!ye(i)))throw new Error("Review this draft before approving.");const a=[];for(const{draft:i,email:o}of e)Me(o,i),a.push(i.id);return w(),m({approved:a})}async function Gt(){if(await p(700),k(),!kt())throw new Error("Low-risk bulk approval is disabled by workspace settings.");const t=c.drafts.filter(e=>e.risk!=="High").filter(ye).filter(e=>!S(C(e.emailId||e.id))).map(e=>e.id);if(!t.length)throw new Error("No low-risk drafts are awaiting approval.");return Ge(t)}async function Ae(t){await p(450),k();const e=c.rules.find(a=>a.id===t);if(!e)throw new Error("Rule not found.");return e.on=!e.on,w(),m(e)}async function Ut(t,e){var i,o;await p(500),k();const a=c.rules.find(n=>n.id===t);if(!a)throw new Error("Rule not found.");if(!((i=e.title)!=null&&i.trim()))throw new Error("Rule name is required.");if(!((o=e.desc)!=null&&o.trim()))throw new Error("Rule description is required.");if(e.category&&!_e(e.category))throw new Error("Choose an existing category before saving.");return a.title=e.title.trim(),a.desc=e.desc.trim(),a.category=e.category||a.category,w(),m(a)}async function Qt(t){await p(450),k();const e=c.rules.findIndex(i=>i.id===t);if(e===-1)throw new Error("Rule not found.");const[a]=c.rules.splice(e,1);return c.deletedRuleIds=[...new Set([...c.deletedRuleIds||[],t])],I("rule-deleted",{ruleId:a.id,label:`Rule deleted: ${a.title}`}),w(),m(a)}async function Yt(t,e){if(await p(400),!e)throw new Error("Choose a category before saving.");if(!_e(e))throw new Error("Choose an existing category before saving.");const a=C(t);return a.category=e,w(),m(a)}async function Kt(t,e="Removed from demo inbox"){await p(500);const a=[...new Set((t||[]).filter(Boolean))];if(!a.length)throw new Error("Choose at least one email to remove from the demo inbox.");const i=new Date().toISOString(),o=a.map(n=>{const l=C(n),y=Z(l.id),b=S(l);if(y&&!b)throw new Error("Finish active drafts before removing those emails from the demo inbox.");return l.archivedAt=i,l.archiveReason=e,l});return I("emails-archived",{emailIds:o.map(n=>n.id),label:`${o.length} email${o.length===1?"":"s"} removed from the demo inbox`}),w(),m(o.map(V))}async function ue(t,e={}){await p(400),Oe();const a=c.tasks.find(n=>n.id===t);if(!a)throw new Error("Task not found.");if(_()&&a.assignedTo!==fe())throw new Error("This demo employee can only update assigned tasks.");const i=a.status==="Done",o=new Date().toISOString();if(e.assignedTo!==void 0){if(_())throw new Error("Only the demo admin can reassign tasks.");e.assignedTo&&H(e.assignedTo),a.assignedTo=e.assignedTo,a.history=[...a.history||[],{at:o,label:e.assignedTo?`Assigned to ${H(e.assignedTo).name}`:"Returned to Unassigned"}]}return e.notes!==void 0&&(a.notes=String(e.notes).trim()),e.status!==void 0&&(a.status=e.status==="Done"?"Done":"Open",a.completedAt=a.status==="Done"?a.completedAt||o:null,a.history=[...a.history||[],{at:o,label:a.status==="Done"?"Marked complete":"Reopened"}]),a.updatedAt=o,!i&&a.status==="Done"&&I("task-completed",{taskId:a.id,emailId:a.emailId,label:`Task completed: ${a.title}`}),w(),m(qe(a))}async function Jt(t){await p(450),k();const e=Pe(t),a={id:`cat-${Date.now()}`,...e,active:!0,system:!1};return c.categories.push(a),I("category-added",{categoryId:a.id,label:`Category added: ${a.name}`}),w(),m(a)}async function Xt(t,e){await p(450),k();const a=je(t),i=Pe(e,t),o=a.name;return Object.assign(a,i),o!==a.name&&Et(o,a.name),I("category-updated",{categoryId:a.id,label:`Category updated: ${a.name}`}),w(),m(a)}async function Zt(t){await p(400),k();const e=je(t);return e.active=!e.active,I("category-toggled",{categoryId:e.id,label:`${e.active?"Category restored":"Category archived"}: ${e.name}`}),w(),m(e)}async function ea(t,e){await p(400),k(),e&&H(e);const a=C(t);a.assignedTo=e;const i=c.tasks.find(o=>o.emailId===t);return i&&(i.assignedTo=e,i.updatedAt=new Date().toISOString(),i.history=[...i.history||[],{at:i.updatedAt,label:e?`Assigned from email to ${H(e).name}`:"Returned to Unassigned from email"}]),w(),m(a)}async function ta(t){await p(500),k();const e=He(t),a={id:`employee-${Date.now()}`,...e};return c.employees.push(a),I("employee-added",{employeeId:a.id,label:`Employee added: ${a.name}`}),w(),m(a)}async function aa(t,e){await p(500),k();const a=H(t),i=He(e,t);return Object.assign(a,i),I("employee-updated",{employeeId:a.id,label:`Employee updated: ${a.name}`}),w(),m(a)}async function sa(t){await p(500),k();const e=c.employees.findIndex(o=>o.id===t);if(e===-1)throw new Error("Employee not found.");const[a]=c.employees.splice(e,1);c.deletedEmployeeIds=[...new Set([...c.deletedEmployeeIds||[],t])];let i=0;return c.emails.forEach(o=>{o.assignedTo===t&&(o.assignedTo="",i+=1)}),c.tasks.forEach(o=>{o.assignedTo===t&&(o.assignedTo="",o.updatedAt=new Date().toISOString(),o.history=[...o.history||[],{at:o.updatedAt,label:"Assigned employee was removed; task returned to Unassigned"}])}),I("employee-deleted",{employeeId:a.id,label:`Employee removed: ${a.name}. ${i} assigned emails returned to Unassigned.`}),w(),m(a)}async function A(){return await p(250),m(c.completedActions)}async function ia(){return await p(150),m(P)}async function oa(t,e={}){if(await p(500),!(t!=null&&t.trim()))throw new Error("Type a command first.");const a={id:`user-${Date.now()}`,role:"user",text:t.trim()},i=Lt(t,e),o={id:`assistant-${Date.now()}`,role:"assistant",text:i.text};return P=[...P,a,o].slice(-24),St(),m({messages:P,action:i.action||null})}const na=document.querySelector("#app"),Ue=new Set(["dashboard","import","triage","tasks","compose","rules","drafts","admin"]),s={tab:"dashboard",demoAccounts:[],session:null,emails:[],categories:[],employees:[],rules:[],drafts:[],tasks:[],composeDrafts:[],settings:{companyName:"Demo PME Inc.",language:"en",mode:"Simple",defaultMode:"Observation only",escalationRecipient:"owner@company.ca",approvalRequired:!0,autoSend:!1},settingsForm:null,loading:{emails:!0,rules:!0,drafts:!0},busy:{},selectedEmail:null,selectedCategory:null,selectedDraft:null,selectedRule:null,selectedEmployee:null,selectedDraftIds:[],confirmDialog:null,digest:null,triageFilter:"all",triageCategoryFilter:"all",taskAssigneeFilter:"all",draftFilter:"all",ruleQuery:"",assistantOpen:!1,assistantMessages:[],activity:[],setupPreview:null,selectedSetupMailboxId:"",composeForm:{id:"new",to:"",cc:"",subject:"",body:"",attachments:[]},summary:"",showExplanation:!1};na.innerHTML=`
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
`;function Ee(t,e){s.busy[t]=e,h()}async function f(t,e,a){try{Ee(t,!0),await e(),a&&W(a)}catch(i){W(i.message||"Something went wrong in the mock workflow.",!0)}finally{Ee(t,!1)}}function u(t){return!!s.busy[t]}function W(t,e=!1){const a=document.querySelector("#toast");a.textContent=t,a.classList.toggle("error",e),a.classList.add("show"),window.clearTimeout(a.dataset.timer),a.dataset.timer=window.setTimeout(()=>a.classList.remove("show"),2400)}function G(){var t;return((t=s.session)==null?void 0:t.role)==="Admin"}function we(){var t;return((t=s.session)==null?void 0:t.role)==="Employee"}function ra(){return s.session?we()?new Set(["triage","tasks","compose"]):Ue:new Set([])}function K(t){return ra().has(t)}function O(t,e={}){if(!Ue.has(t)||!K(t))throw new Error("That Courio section is unavailable.");const a=s.tab;a==="admin"&&t!=="admin"&&(s.settingsForm=null),t==="admin"&&a!=="admin"&&(s.settingsForm={...s.settings}),s.tab=t,e.triageFilter&&(s.triageFilter=e.triageFilter),e.draftFilter&&(s.draftFilter=e.draftFilter),e.closeDrawers!==!1&&(s.selectedEmail=null,s.selectedCategory=null,s.selectedDraft=null,s.selectedRule=null,s.selectedEmployee=null,s.summary="",s.showExplanation=!1),h()}async function me(t=(e=>(e=s.selectedEmail)==null?void 0:e.id)()){if(s.emails=await R(),t){const a=s.emails.find(i=>i.id===t);s.selectedEmail=a?{...a,messages:a.thread}:null}}async function Ce(t=(e=>(e=s.selectedCategory)==null?void 0:e.id)()){const[a,i,o,n,l,y,b]=await Promise.all([We(),R(),q(),x(),L(),Ve(),A()]);s.categories=a,s.emails=i,s.rules=o,s.tasks=n,s.digest=l,s.setupPreview=y,s.activity=b,s.selectedCategory=t&&a.find(D=>D.id===t)||null}async function Re(){const[t,e,a,i,o,n,l]=await Promise.all([Be(),R(),x(),j(),he(),L(),A()]);s.session=t,s.emails=e,s.tasks=a,s.drafts=i,s.composeDrafts=o,s.digest=n,s.activity=l,s.selectedEmail=null,s.selectedDraft=null,s.selectedRule=null,s.selectedEmployee=null,s.selectedCategory=null}function la(t){return!!(t!=null&&t.isReadyForHumanSend)}function be(){return s.settings.mode==="Advanced"}function Qe(t=""){const e=s.categories.filter(i=>i.active),a=t?s.categories.find(i=>i.name===t):null;return a&&!e.some(i=>i.id===a.id)?[...e,a]:e}function da(t,e){var a;return((a=s.categories.find(i=>i.id===t))==null?void 0:a.name)||e}function ca(){const t=new Map;return s.categories.forEach(e=>{e.active&&t.set(e.name,e)}),s.emails.forEach(e=>{t.has(e.category)||t.set(e.category,{id:`current-${e.category}`,name:e.category,active:!0})}),[...t.values()].sort((e,a)=>e.name.localeCompare(a.name))}function Ye(){const t=da("cat-accounting","Accounting");return s.emails.filter(e=>s.triageCategoryFilter!=="all"&&e.category!==s.triageCategoryFilter?!1:s.triageFilter==="urgent"?e.status!=="Done"&&e.urgency==="High":s.triageFilter==="invoices"?e.status!=="Done"&&e.category===t:!0)}function te(){return{id:"new",to:"",cc:"",subject:"",body:"",attachments:[]}}function ua(t=0){return t<1024?`${t} B`:t<1024*1024?`${Math.round(t/1024)} KB`:`${(t/(1024*1024)).toFixed(1)} MB`}function Ke(){return s.settings.allowLowRiskBulkApproval!=="No"}function ae(){return s.settingsForm||{...s.settings}}function ma(){return ae().mode==="Advanced"}function se(){return J(s.settings.language)}function d(t){return xe(se())(t)}function pa(){const t=xe(se());document.querySelectorAll("[data-copy]").forEach(e=>{e.textContent=t(e.dataset.copy)})}async function ga(){var t;try{const[e,a,i,o,n,l,y,b,D,v,oe,ne,$e,re]=await Promise.all([Mt(),Be(),R(),We(),ce(),q(),j(),x(),he(),_t(),L(),ia(),A(),Ve()]);s.demoAccounts=e,s.session=a,s.emails=i,s.categories=o,s.employees=n,s.rules=l,s.drafts=y,s.tasks=b,s.composeDrafts=D,s.settings={...s.settings,...v},s.settingsForm=null,s.digest=oe,s.assistantMessages=ne,s.activity=$e,s.setupPreview=re,s.selectedSetupMailboxId=((t=re.mailboxes[0])==null?void 0:t.id)||"",s.session&&!K(s.tab)&&(s.tab=we()?"tasks":"dashboard")}catch(e){W(e.message||"Could not load mock data.",!0)}finally{s.loading.emails=!1,s.loading.rules=!1,s.loading.drafts=!1,h()}}function h(){s.session&&!K(s.tab)&&(s.tab=we()?"tasks":"dashboard");const t=at(s.tab,se());pa(),document.querySelector("#pageTitle").textContent=t[0],document.querySelector("#pageSubtitle").textContent=t[1],document.querySelectorAll(".section").forEach(e=>{e.classList.toggle("active",e.id===s.tab)}),document.querySelectorAll(".nav button").forEach(e=>{e.hidden=!K(e.dataset.tab),e.classList.toggle("active",e.dataset.tab===s.tab)}),va(),Je(),fa(),Xe(),Ze(),et(),Ea(),Ta(),ya(),ha(),Ca(),wa()}function va(){const t=s.emails.filter(a=>a.status!=="Done").length,e=s.digest;document.querySelector("#dashboard").innerHTML=`
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
        <div class="value">${s.drafts.filter(la).length||0}</div>
        <div class="caption">Human approval still required to send</div>
      </div>
    </div>
    <div class="grid cols-2" style="margin-top:16px">
      <div class="panel">
        <div class="panel-title"><h2>Morning digest</h2><span>${e?`Generated ${r(e.generatedAt)}`:"Loading..."}</span></div>
        <p class="subtitle">${e?r(e.headline):"Preparing a local demo digest from mock emails and drafts."}</p>
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
          ${((e==null?void 0:e.recommendedActions)||["Digest is loading."]).map(a=>`<tr><td><span class="badge lead">Action</span></td><td>${r(a)}</td></tr>`).join("")}
          ${be()?`<tr><td><span class="badge invoice">Advanced</span></td><td>${s.rules.filter(a=>a.on).length} rules are currently enabled.</td></tr>`:""}
        </table>
      </div>
    </div>
  `}function Je(){const t=s.setupPreview;if(!t){document.querySelector("#import").innerHTML='<div class="loading">Loading simulated setup preview...</div>';return}const e=t.mailboxes.find(a=>a.id===s.selectedSetupMailboxId)||t.mailboxes[0];document.querySelector("#import").innerHTML=`
    <div class="grid cols-2">
      <div class="panel">
        <div class="panel-title"><h2>${r(t.status)}</h2><span>No account connected</span></div>
        <div class="preview">${r(t.safetyNote)}</div>
        <div class="preview" style="margin-top:12px">${r(t.futureNote)}</div>
        <div class="actions" style="margin-top:14px">
          <button class="btn primary" disabled title="Real OAuth/provider connection is intentionally unavailable in this fake/local prototype.">Connect demo only</button>
          <button class="btn subtle" data-tab-target="triage">Review local triage</button>
        </div>
      </div>

      <div class="panel">
        <div class="panel-title"><h2>Choose simulated mailbox</h2><span>${t.mailboxes.length} demo options</span></div>
        <div class="setup-mailbox-list">
          ${t.mailboxes.map(a=>`
            <button class="setup-mailbox ${a.id===e.id?"active":""}" data-setup-mailbox="${a.id}">
              <strong>${r(a.name)}</strong>
              <span>${r(a.address)}</span>
              <small>${r(a.type)} - ${r(a.volume)}</small>
            </button>
          `).join("")}
        </div>
      </div>
    </div>

    <div class="grid cols-2" style="margin-top:16px">
      <div class="panel">
        <div class="panel-title"><h2>${r(e.name)} preview</h2><span>${r(e.risk)}</span></div>
        <table class="table">
          <tr><td>Folders</td><td>${T(e.folders)}</td></tr>
          <tr><td>Labels/categories</td><td>${T(e.categories)}</td></tr>
          <tr><td>Frequent senders</td><td>${T(e.frequentSenders)}</td></tr>
          <tr><td>Shared inboxes</td><td>${T(e.sharedInboxes)}</td></tr>
          <tr><td>Recent threads</td><td>${T(e.recentThreads)}</td></tr>
        </table>
      </div>

      <div class="panel">
        <div class="panel-title"><h2>What Courio would scan</h2><span>Simulated only</span></div>
        <table class="table">
          ${t.scanItems.map(a=>`
            <tr>
              <td><span class="badge lead">${a.count}</span><br>${r(a.label)}</td>
              <td>${r(a.detail)}</td>
            </tr>
          `).join("")}
        </table>
      </div>
    </div>

    <div class="grid cols-2" style="margin-top:16px">
      <div class="panel">
        <div class="panel-title"><h2>Simulated setup flow</h2><span>Fake progress</span></div>
        <div class="workflow">
          ${t.setupSteps.map((a,i)=>`
            <div class="step">
              <div class="step-num">${i+1}</div>
              <div><strong>${r(a.title)}</strong><p>${r(a.detail)}</p></div>
              <span class="badge ${i===0?"lead":"done"}">${r(a.state)}</span>
            </div>
          `).join("")}
        </div>
      </div>

      <div class="panel">
        <div class="panel-title"><h2>Suggested workflow preview</h2><span>Needs human review</span></div>
        <table class="table">
          ${t.workflowSuggestions.map(a=>`
            <tr>
              <td><strong>${r(a.match)}</strong><br><small>${r(a.reason)}</small></td>
              <td><span class="badge invoice">${r(a.outcome)}</span></td>
            </tr>
          `).join("")}
        </table>
        <div class="preview" style="margin-top:14px">These are local examples. Courio does not create mailbox rules or send email from this page.</div>
      </div>
    </div>
  `}function fa(){const t=Object.fromEntries(s.employees.map(l=>[l.id,l])),e=ca(),a=Ye(),i=a.filter(l=>l.canArchive),o=s.triageCategoryFilter==="all"?d("triage.allCategories"):s.triageCategoryFilter,n=s.loading.emails?'<div class="loading">Loading mock inbox...</div>':a.length===0?`<div class="empty-state">${s.triageFilter==="urgent"?d("triage.emptyUrgent"):s.triageFilter==="invoices"?d("triage.emptyInvoices"):s.triageCategoryFilter!=="all"?d("triage.emptyCategory"):d("triage.emptyAll")}</div>`:`<table class="table">
        <thead><tr><th>Subject</th><th>Sender</th><th>Category</th><th>Assigned</th><th>Workflow</th><th>Status</th><th></th></tr></thead>
        <tbody>
          ${a.map(l=>{var y;return`
            <tr>
              <td>${r(l.subject)}</td>
              <td>${r(l.sender)}<br><small>${r(l.senderEmail||"")}</small></td>
              <td>
                <span class="badge ${ie(l.category)}">${r(l.category)}</span><br>
                <small>${r(l.urgency||"Medium")} urgency - ${l.confidence||80}% confidence</small>
                <small class="triage-reason" title="${r(l.explanation||"")}">Why: ${r(l.explanation||"Matched the current local category rules.")}</small>
              </td>
              <td>${r(((y=t[l.assignedTo])==null?void 0:y.name)||"Unassigned")}</td>
              <td>${r(l.workflowLabel||"Not started")}</td>
              <td><span class="badge ${l.status==="Done"?"done":""}">${r(l.status)}</span></td>
              <td class="actions">
                <button class="btn subtle" data-review-email="${l.id}" ${u(`review-${l.id}`)?"disabled":""}>${u(`review-${l.id}`)?"Opening...":"Review"}</button>
                <button class="btn subtle" data-archive-email="${l.id}" ${!l.canArchive||u(`archive-${l.id}`)?`disabled title="${r(l.archiveBlocker||"Remove this fake/local email from the demo inbox.")}"`:""}>${u(`archive-${l.id}`)?d("triage.removing"):d("triage.remove")}</button>
                ${l.status==="Done"?'<span class="status-text">Complete</span>':'<span class="status-text" title="Generate, review, save, and approve a draft to complete this workflow.">Draft required</span>'}
              </td>
            </tr>
          `}).join("")}
        </tbody>
      </table>`;document.querySelector("#triage").innerHTML=`
    <div class="panel">
      <div class="panel-title"><h2>Inbox triage</h2><span>${d("triage.inboxControl")}</span></div>
      <div class="segmented" style="margin-bottom:14px">
        ${[["all","All inbox"],["urgent","Urgent"],["invoices","Invoices"]].map(([l,y])=>`<button class="${s.triageFilter===l?"active":""}" data-triage-filter="${l}">${y}</button>`).join("")}
      </div>
      <div class="list-toolbar" style="margin-bottom:14px">
        <select data-triage-category-filter aria-label="${d("triage.categoryFilter")}">
          <option value="all" ${s.triageCategoryFilter==="all"?"selected":""}>${d("triage.allCategories")}</option>
          ${e.map(l=>`<option value="${r(l.name)}" ${s.triageCategoryFilter===l.name?"selected":""}>${r(l.name)}</option>`).join("")}
        </select>
        <button class="btn subtle" data-archive-filtered ${a.length===0||i.length===0||u("archive-filtered")?`disabled title="${d("triage.removeFilteredDisabled")}"`:""}>${u("archive-filtered")?d("triage.removing"):`${d("triage.removeFiltered")} (${i.length})`}</button>
        <span class="mode">${r(o)}</span>
      </div>
      ${n}
    </div>
  `}function Xe(){const t=s.tasks.filter(o=>!G()||s.taskAssigneeFilter==="all"?!0:s.taskAssigneeFilter==="unassigned"?!o.assignedTo:o.assignedTo===s.taskAssigneeFilter),e=t.filter(o=>o.status!=="Done").length,a=t.filter(o=>o.status!=="Done"&&o.priority==="High").length,i=t.length===0?`<div class="empty-state">${d("tasks.empty")}</div>`:`<table class="table">
        <thead><tr><th>${d("tasks.done")}</th><th>${d("tasks.task")}</th><th>${d("tasks.priority")}</th><th>${d("tasks.assignedTo")}</th><th>${d("tasks.source")}</th><th>${d("tasks.notes")}</th><th></th></tr></thead>
        <tbody>
          ${t.map(o=>{var n,l,y,b;return`
            <tr>
              <td><input type="checkbox" data-task-status="${o.id}" ${o.status==="Done"?"checked":""}></td>
              <td>
                <strong>${r(o.title)}</strong><br>
                <small>${r(o.description)}</small>
                ${(o.history||[]).length?`<br><small>${r(((n=o.history.at(-1))==null?void 0:n.label)||"")}</small>`:""}
              </td>
              <td><span class="badge ${o.priority==="High"?"urgent":o.priority==="Low"?"done":"pending"}">${r(o.priority)}</span><br><small>${r(o.category)}</small></td>
              <td>
                ${G()?`<select data-task-assignee="${o.id}">
                      <option value="" ${o.assignedTo?"":"selected"}>${d("tasks.unassigned")}</option>
                      ${s.employees.map(D=>`<option value="${D.id}" ${o.assignedTo===D.id?"selected":""}>${r(D.name)}</option>`).join("")}
                    </select>`:r(((l=o.assignedEmployee)==null?void 0:l.name)||d("tasks.unassigned"))}
              </td>
              <td>${r(((y=o.sourceEmail)==null?void 0:y.subject)||"Local task")}<br><small>${r(((b=o.sourceEmail)==null?void 0:b.sender)||"Demo inbox")}</small></td>
              <td><textarea data-task-note="${o.id}" placeholder="${d("tasks.notePlaceholder")}">${r(o.notes||"")}</textarea></td>
              <td class="actions">
                ${o.sourceEmail?`<button class="btn subtle" data-review-email="${o.sourceEmail.id}">${d("tasks.reviewEmail")}</button>`:""}
                <button class="btn subtle" data-save-task-note="${o.id}" ${u(`task-note-${o.id}`)?"disabled":""}>${u(`task-note-${o.id}`)?d("tasks.saving"):d("tasks.saveNote")}</button>
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
        <div class="label">${d("tasks.completed")}</div>
        <div class="value">${t.filter(o=>o.status==="Done").length}</div>
        <div class="caption">${d("tasks.completedCaption")}</div>
      </div>
    </div>
    <div class="panel" style="margin-top:16px">
      <div class="panel-title"><h2>${d("tasks.title")}</h2><span>${d("tasks.subtitle")}</span></div>
      ${G()?`
        <div class="list-toolbar" style="margin-bottom:14px">
          <select data-task-assignee-filter aria-label="${d("tasks.assigneeFilter")}">
            <option value="all" ${s.taskAssigneeFilter==="all"?"selected":""}>${d("tasks.allAssignees")}</option>
            <option value="unassigned" ${s.taskAssigneeFilter==="unassigned"?"selected":""}>${d("tasks.unassigned")}</option>
            ${s.employees.map(o=>`<option value="${o.id}" ${s.taskAssigneeFilter===o.id?"selected":""}>${r(o.name)}</option>`).join("")}
          </select>
        </div>
      `:`<div class="preview" style="margin-bottom:14px">${d("tasks.employeeScope")}</div>`}
      ${i}
    </div>
  `}function Ze(){const t=s.composeForm||te(),e=t.attachments.length?`<ul>${t.attachments.map(i=>`<li>${r(i.name)} <small>${r(i.type||"Unknown")} - ${ua(i.size)}</small></li>`).join("")}</ul>`:`<div class="empty-state">${d("compose.noAttachments")}</div>`,a=s.composeDrafts.length?`<table class="table">
        <thead><tr><th>${d("compose.subject")}</th><th>${d("compose.to")}</th><th>${d("compose.attachments")}</th><th></th></tr></thead>
        <tbody>
          ${s.composeDrafts.map(i=>`
            <tr>
              <td>${r(i.subject)}<br><small>${r(new Date(i.updatedAt).toLocaleString())}</small></td>
              <td>${r(i.to)}</td>
              <td>${i.attachments.length}</td>
              <td><button class="btn subtle" data-open-compose-draft="${i.id}">${d("compose.openDraft")}</button></td>
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
        <div class="form-grid" style="margin-top:14px">
          <label>${d("compose.to")}<input data-compose-field="to" type="email" value="${r(t.to)}" placeholder="client@example.ca"></label>
          <label>${d("compose.cc")}<input data-compose-field="cc" value="${r(t.cc)}" placeholder="optional@example.ca"></label>
          <label>${d("compose.subject")}<input data-compose-field="subject" value="${r(t.subject)}"></label>
          <label>${d("compose.body")}<textarea data-compose-field="body">${r(t.body)}</textarea></label>
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
          <button class="btn primary" data-save-compose ${u("save-compose")?"disabled":""}>${u("save-compose")?d("compose.saving"):d("compose.saveDraft")}</button>
          <button class="btn subtle" data-print-compose>${d("compose.printPdf")}</button>
          <span class="mode">${d("compose.neverSends")}</span>
        </div>
      </div>
      <div class="panel">
        <div class="panel-title"><h2>${d("compose.savedDrafts")}</h2><span>${d("compose.localOnly")}</span></div>
        ${a}
      </div>
    </div>
  `}function ya(){const t=document.querySelector("#drawerRoot");if(s.selectedCategory){Da(t);return}if(s.selectedEmployee){Aa(t);return}if(s.selectedRule){ka(t);return}if(s.selectedDraft){Sa(t);return}if(!s.selectedEmail){t.innerHTML="";return}const e=s.selectedEmail,a=e.status==="Done",i=s.employees.find(n=>n.id===e.assignedTo),o=Qe(e.category);t.innerHTML=`
    <div class="drawer-backdrop" data-close-drawer></div>
    <aside class="review-drawer" aria-label="Email review">
      <div class="drawer-header">
        <div>
          <div class="badge ${ie(e.category)}">${r(e.category)}</div>
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
            ${o.map(n=>`<option value="${r(n.name)}" ${n.name===e.category?"selected":""}>${r(n.name)}${n.active?"":" (archived)"}</option>`).join("")}
          </select>
        </label>
        ${G()?`<label>Assigned employee
              <select data-email-assignee="${e.id}">
                <option value="" ${e.assignedTo?"":"selected"}>Unassigned</option>
                ${s.employees.map(n=>`<option value="${r(n.id)}" ${n.id===e.assignedTo?"selected":""}>${r(n.name)} - ${r(n.department)}</option>`).join("")}
              </select>
            </label>`:`<div class="mini-stat"><span>${d("tasks.assignedTo")}</span><strong>${r((i==null?void 0:i.name)||d("tasks.unassigned"))}</strong></div>`}
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
          ${a?"This email is completed. Draft actions are locked unless the email is reopened later.":e.draftId?`${e.draftReadyForHumanSend?"Draft approved and ready for human send.":`Draft exists: ${r(e.draftStatusLabel)}.`} One email uses one draft record.`:"No active draft exists for this email."}
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
        <ul>${e.messages.map(n=>`<li>${r(n)}</li>`).join("")}</ul>
      </div>

      ${s.summary?`<div class="drawer-section"><h3>Summary</h3><div class="preview">${r(s.summary)}</div></div>`:""}
      <div class="drawer-actions">
        <button class="btn primary" data-summary-email="${e.id}" ${u(`summary-${e.id}`)?"disabled":""}>${u(`summary-${e.id}`)?"Summarizing...":"Summarize"}</button>
        ${e.canOpenDraft?`<button class="btn subtle" data-open-email-draft="${e.id}" ${u(`open-email-draft-${e.id}`)?"disabled":""}>${e.draftActionLabel}</button>`:`<button class="btn subtle" data-generate-draft="${e.id}" ${!e.canGenerateDraft||u(`draft-${e.id}`)?`disabled title="${e.completionBlocker||"Draft action is unavailable."}"`:""}>${u(`draft-${e.id}`)?"Drafting...":e.draftActionLabel}</button>`}
        <button class="btn subtle" data-archive-email="${e.id}" ${!e.canArchive||u(`archive-${e.id}`)?`disabled title="${r(e.archiveBlocker||"Remove this fake/local email from the demo inbox.")}"`:""}>${u(`archive-${e.id}`)?d("triage.removing"):d("triage.remove")}</button>
        ${a?'<span class="status-text">Workflow complete</span>':'<span class="status-text">Approving the draft completes this workflow.</span>'}
      </div>
      <p class="drawer-note">This is a local prototype. Courio does not send email.</p>
    </aside>
  `}function ha(){const t=document.querySelector("#modalRoot");if(!s.confirmDialog){t.innerHTML="";return}const e=s.confirmDialog;t.innerHTML=`
    <div class="modal-backdrop"></div>
    <div class="confirm-modal" role="dialog" aria-modal="true">
      <h2>${r(e.title)}</h2>
      <p>${r(e.message)}</p>
      <div class="actions">
        <button class="btn ${e.tone==="danger"?"danger":"primary"}" data-confirm-primary>${r(e.primaryLabel)}</button>
        <button class="btn subtle" data-confirm-cancel>Cancel</button>
      </div>
    </div>
  `}function wa(){const t=document.querySelector("#authRoot");if(!s.session){t.innerHTML=`
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
                <strong>${r(e.name)}</strong>
                <span>${r(e.role)} - ${r(e.title)}</span>
                <small>${r(e.email)}</small>
              </button>
            `).join("")}
          </div>
          <div class="preview">${d("auth.safetyNote")}</div>
        </div>
      </div>
    `;return}t.innerHTML=`
    <div class="session-pill">
      <span>${r(s.session.name)} · ${r(s.session.role)}</span>
      <button class="btn subtle" data-logout-demo>${d("auth.logout")}</button>
    </div>
  `}async function ba(t){const e=await Wt(t);s.drafts=await j(),await me(t),s.selectedDraft=await B(e.id),s.selectedEmail=null,s.selectedRule=null,s.selectedEmployee=null,s.selectedCategory=null}async function $a(t){var e;await zt(t),s.drafts=await j(),s.emails=await R(),s.activity=await A(),s.digest=await L(),s.selectedDraftIds=s.selectedDraftIds.filter(a=>a!==t),((e=s.selectedDraft)==null?void 0:e.id)===t&&(s.selectedDraft=await B(t))}function Sa(t){const e=s.selectedDraft,a=e.sourceEmail||{},i=a.status==="Done";t.innerHTML=`
    <div class="drawer-backdrop" data-close-drawer></div>
    <aside class="review-drawer" aria-label="Draft review">
      <div class="drawer-header">
        <div>
          <div class="badge ${e.isReadyForHumanSend?"done":"pending"}">${r(e.statusLabel)}</div>
          <h2>${r(e.title)}</h2>
          <p>Source: ${r(a.subject||e.source)}</p>
        </div>
        <button class="btn subtle" data-close-drawer>Close</button>
      </div>

      <div class="drawer-section">
        <h3>Source email</h3>
        <div class="preview">
          <strong>${r(a.sender||"Mock sender")}</strong><br>
          ${r(a.senderEmail||"")}<br><br>
          ${r(a.body||"This draft is based on a local mock email.")}
        </div>
      </div>

      <div class="drawer-grid">
        <div class="mini-stat"><span>Status</span><strong>${r(i?"Completed":e.statusLabel)}</strong></div>
        <div class="mini-stat"><span>Risk level</span><strong>${r(e.risk||"Low")}</strong></div>
        <div class="mini-stat"><span>Confidence</span><strong>${e.confidence||a.confidence||80}%</strong></div>
        <div class="mini-stat"><span>Sending</span><strong>Never automatic</strong></div>
      </div>

      <div class="drawer-section">
        <h3>Suggested reply</h3>
        <div class="preview">${r(a.suggestedAction||e.title)}</div>
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
  `}function ka(t){var i;const e=s.selectedRule,a=Qe(e.category);t.innerHTML=`
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
            ${a.map(o=>`<option value="${r(o.name)}" ${o.name===e.category?"selected":""}>${r(o.name)}${o.active?"":" (archived)"}</option>`).join("")}
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
        <ul>${(e.matches||["No sample matches yet."]).map(o=>`<li>${r(o)}</li>`).join("")}</ul>
      </div>

      ${be()?`<div class="drawer-section"><h3>Advanced preview</h3><div class="preview">This rule uses the current confidence threshold of ${s.settings.confidenceThreshold||80}%. No mailbox changes happen in the prototype.</div></div>`:""}

      <div class="drawer-actions">
        <button class="btn primary" data-save-rule="${e.id}" ${u(`save-rule-${e.id}`)?"disabled":""}>${u(`save-rule-${e.id}`)?"Saving...":"Save rule"}</button>
        <button class="btn danger" data-delete-rule="${e.id}">Delete rule</button>
        <button class="btn subtle" data-close-drawer>Close</button>
      </div>
    </aside>
  `}function Da(t){const e=s.selectedCategory,a=e.id==="new",i=[["default","Default"],["urgent","Red / urgent"],["invoice","Green"],["lead","Blue"],["pending","Amber"]];t.innerHTML=`
    <div class="drawer-backdrop" data-close-drawer></div>
    <aside class="review-drawer" aria-label="${a?"Add category":"Edit category"}">
      <div class="drawer-header">
        <div>
          <div class="badge ${ie(e.name)}">${e.active===!1?"Archived":"Active"}</div>
          <h2>${a?"Add category":"Edit category"}</h2>
          <p>Categories remain fake/local and map to email category names for now.</p>
        </div>
        <button class="btn subtle" data-close-drawer>Close</button>
      </div>

      <div class="drawer-section">
        <label>Category name<input data-category-field="name" value="${r(e.name||"")}"></label>
        <label>Description<textarea data-category-field="description">${r(e.description||"")}</textarea></label>
        <label>Badge color
          <select data-category-field="color">
            ${i.map(([o,n])=>`<option value="${o}" ${o===(e.color||"default")?"selected":""}>${n}</option>`).join("")}
          </select>
        </label>
      </div>

      <div class="drawer-actions">
        <button class="btn primary" data-save-category="${e.id}" ${u(`save-category-${e.id}`)?"disabled":""}>${u(`save-category-${e.id}`)?"Saving...":a?"Add category":"Save changes"}</button>
        ${a?"":`<button class="btn subtle" data-toggle-category="${e.id}" ${u(`toggle-category-${e.id}`)?"disabled":""}>${e.active===!1?"Restore category":"Archive category"}</button>`}
        <button class="btn subtle" data-close-drawer>Close</button>
      </div>
      <p class="drawer-note">Archiving removes a category from new dropdown choices, but old emails and rules still display safely.</p>
    </aside>
  `}function Aa(t){const e=s.selectedEmployee,a=e.id==="new";t.innerHTML=`
    <div class="drawer-backdrop" data-close-drawer></div>
    <aside class="review-drawer" aria-label="${a?"Add employee":"Edit employee"}">
      <div class="drawer-header">
        <div>
          <div class="badge lead">Team member</div>
          <h2>${a?"Add employee":"Edit employee"}</h2>
          <p>${a?"Add a local demo team member.":`Reviewing ${r(e.name)}`}</p>
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
        <button class="btn primary" data-save-employee="${e.id}" ${u(`save-employee-${e.id}`)?"disabled":""}>${u(`save-employee-${e.id}`)?"Saving...":a?"Add employee":"Save changes"}</button>
        ${a?"":`<button class="btn danger" data-delete-employee="${e.id}">Remove employee</button>`}
        <button class="btn subtle" data-close-drawer>Close</button>
      </div>
      <p class="drawer-note">Employee records remain fake and local to this browser. Email addresses must be valid and unique.</p>
    </aside>
  `}function et(){const t=s.ruleQuery.trim().toLowerCase(),e=s.rules.filter(i=>!t||`${i.title} ${i.desc} ${i.category}`.toLowerCase().includes(t)),a=s.loading.rules?'<div class="loading">Loading suggested rules...</div>':e.length===0?`<div class="empty-state">${t?`No rules match “${r(s.ruleQuery)}”. Clear the search to see all local rules.`:"No rules yet. Local rule suggestions will appear here."}</div>`:`<div class="grid cols-2">
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
            ${be()?`<div class="preview"><strong>Would match:</strong> ${T(i.matches||["No samples"])}</div>`:""}
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
    ${a}
  `}function Ea(){const t=s.selectedDraftIds.length,e=s.drafts.filter(n=>n.risk!=="High"&&n.canSelectForBulkApproval).length,a=!Ke(),i=s.drafts.filter(n=>s.draftFilter==="needs_approval"?n.canSelectForBulkApproval:s.draftFilter==="ready"?n.isReadyForHumanSend:!0),o=s.loading.drafts?'<div class="loading">Loading draft queue...</div>':i.length===0?`<div class="empty-state">${s.draftFilter==="needs_approval"?"No drafts need approval. Reviewed drafts will appear here when they are ready.":s.draftFilter==="ready"?"No drafts are ready for human send yet.":"No drafts are available in this local demo."}</div>`:`<table class="table">
        <thead><tr><th>Select</th><th>Draft</th><th>Source</th><th>Risk</th><th>Status</th><th></th></tr></thead>
        <tbody>
          ${i.map(n=>`
            <tr>
              <td><input type="checkbox" data-select-draft="${n.id}" ${s.selectedDraftIds.includes(n.id)?"checked":""} ${n.canSelectForBulkApproval?"":`disabled title="${n.approvalBlocker||"Review and save this draft first."}"`}></td>
              <td>${r(n.title)}</td>
              <td>${r(n.source)}</td>
              <td><span class="badge ${n.risk==="High"?"urgent":"done"}">${r(n.risk||"Low")}</span></td>
              <td><span class="badge ${n.isReadyForHumanSend?"done":"pending"}">${r(n.statusLabel)}</span></td>
              <td class="actions">
                <button class="btn subtle" data-review-draft="${n.id}" ${u(`review-draft-${n.id}`)?"disabled":""}>${u(`review-draft-${n.id}`)?"Opening...":"Review"}</button>
                ${n.isReadyForHumanSend?'<span class="status-text">Workflow complete</span>':`<button class="btn success" data-approve-draft="${n.id}" ${!n.canApprove||u(`approve-${n.id}`)?`disabled title="${n.approvalBlocker||"Review and save this draft first."}"`:""}>${u(`approve-${n.id}`)?"Approving...":"Approve and complete"}</button>`}
              </td>
            </tr>
          `).join("")}
        </tbody>
      </table>`;document.querySelector("#drafts").innerHTML=`
    <div class="panel">
      <div class="panel-title"><h2>Draft approval queue</h2><span>Human approval required</span></div>
      <div class="segmented" style="margin-bottom:14px">
        ${[["all","All drafts"],["needs_approval","Needs approval"],["ready","Ready"]].map(([n,l])=>`<button class="${s.draftFilter===n?"active":""}" data-draft-filter="${n}">${l}</button>`).join("")}
      </div>
      <div class="actions" style="margin-bottom:14px">
        <button class="btn success" data-approve-selected ${t===0||u("approve-selected")?`disabled title="${t===0?"Select at least one reviewed and saved draft.":""}"`:""}>${u("approve-selected")?"Approving...":`Approve selected (${t})`}</button>
        <button class="btn subtle" data-approve-low-risk ${a||e===0||u("approve-low-risk")?`disabled title="${a?"Enable low-risk bulk approval in Advanced workspace settings.":e===0?"No reviewed low-risk drafts are ready for approval.":""}"`:""}>${a?"Low-risk bulk approval disabled":u("approve-low-risk")?"Approving...":`Approve all low-risk (${e})`}</button>
        <span class="mode">Approval completes the workflow; nothing is sent</span>
      </div>
      ${a?'<div class="preview" style="margin-bottom:14px">Low-risk bulk approval is disabled by workspace settings.</div>':""}
      ${o}
    </div>
  `}function Ca(){const t=document.querySelector("#assistantRoot");t.innerHTML=it({assistantOpen:s.assistantOpen,assistantMessages:s.assistantMessages,assistantBusy:u("assistant")})}async function tt(t){await f("assistant",async()=>{var a;const e=await oa(t,{selectedEmailId:((a=s.selectedEmail)==null?void 0:a.id)||null});s.assistantMessages=e.messages,await Ra(e.action)})}async function Ra(t){if(t){if(t.type==="show_triage"){O("triage",{triageFilter:t.filter||"all"});return}if(t.type==="show_drafts"){O("drafts",{draftFilter:t.filter||"all"});return}if(t.type==="generate_digest"){s.digest=await L(),O("dashboard");return}if(t.type==="explain_email"){s.selectedEmail=await ze(t.emailId),s.selectedDraft=null,s.selectedRule=null,s.selectedEmployee=null,s.selectedCategory=null,s.summary="",s.showExplanation=!0,O("triage",{triageFilter:"all",closeDrawers:!1});return}if(t.type==="show_rule"){s.rules=await q(),s.selectedRule=s.rules.find(e=>e.id===t.ruleId)||null,s.selectedEmail=null,s.selectedDraft=null,s.selectedEmployee=null,s.selectedCategory=null,O("rules",{closeDrawers:!1});return}t.type==="reset_demo_data"&&(s.confirmDialog={type:"reset-demo",title:"Reset demo data?",message:"This clears all local Courio changes and restores the original fake demo data.",primaryLabel:"Reset demo data",tone:"danger"},h())}}function Ta(){const t=ae();document.querySelector("#admin").innerHTML=`
    <div class="grid cols-2">
      <div class="panel">
        <div class="panel-title"><h2>${d("admin.workspaceSettings")}</h2><span>${d("admin.prototype")}</span></div>
        <div class="form-grid">
          <label>${d("admin.companyName")}<input data-setting="companyName" value="${r(t.companyName||"Demo PME Inc.")}"></label>
          <label>${d("admin.language")}
            <select data-setting="language">
              ${[["en","English"],["fr","Français"]].map(([e,a])=>`<option value="${e}" ${e===J(t.language)?"selected":""}>${a}</option>`).join("")}
            </select>
          </label>
          <label>${d("admin.mode")}
            <select data-setting="mode">
              ${["Simple","Advanced"].map(e=>`<option ${e===t.mode?"selected":""}>${e}</option>`).join("")}
            </select>
          </label>
          <label>${d("admin.escalationRecipient")}<input data-setting="escalationRecipient" value="${r(t.escalationRecipient||"owner@company.ca")}"></label>
          ${ma()?`
          <label>Default mode
            <select data-setting="defaultMode">
              ${["Observation only","Drafts allowed, no auto-send","Auto-categorize after approval"].map(e=>`<option ${e===t.defaultMode?"selected":""}>${e}</option>`).join("")}
            </select>
          </label>
          <label>Confidence threshold<input data-setting="confidenceThreshold" value="${r(t.confidenceThreshold||"80")}"></label>
          <label>Observation days<input data-setting="observationDays" value="${r(t.observationDays||"7")}"></label>
          <label>Low-risk bulk approval
            <select data-setting="allowLowRiskBulkApproval">
              ${["Yes","No"].map(e=>`<option ${e===t.allowLowRiskBulkApproval?"selected":""}>${e}</option>`).join("")}
            </select>
          </label>
          `:'<div class="preview">Simple Mode keeps settings focused: company name, escalation recipient, and no automatic sending.</div>'}
          <div class="preview">${d("admin.languageNote")}</div>
          <button class="btn primary" data-save-settings ${u("settings")?"disabled":""}>${u("settings")?d("admin.saving"):d("admin.saveSettings")}</button>
          <button class="btn danger" data-reset-demo ${u("reset-demo")?"disabled":""}>${u("reset-demo")?d("admin.resetting"):d("admin.resetDemoData")}</button>
        </div>
      </div>
      <div class="panel">
        <div class="panel-title"><h2>${d("admin.safetyPreview")}</h2><span>${d("admin.prototypeBehavior")}</span></div>
        <table class="table">
          <tr><td>No automatic sending</td><td>Enforced in this local demo</td></tr>
          <tr><td>Activity history</td><td>Simulated actions stored in this browser</td></tr>
          <tr><td>Account disconnect</td><td>Planned for a future provider integration</td></tr>
          <tr><td>Mailbox permissions</td><td>Not requested or connected in this prototype</td></tr>
          <tr><td>Saved workspace mode</td><td>${r(s.settings.mode||"Simple")}</td></tr>
          <tr><td>${d("admin.savedLanguage")}</td><td>${se()==="fr"?"Français":"English"}</td></tr>
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
                    <td><span class="badge ${ie(e.name)}">${r(e.name)}</span>${e.system?"<br><small>System default</small>":""}</td>
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
  `}function ie(t){const e=s.categories.find(a=>a.name===t);return e!=null&&e.color&&e.color!=="default"?e.color:t==="Urgent"||t==="Client complaint"?"urgent":t==="Accounting"||t==="Documents"||t==="Missing documents"?"invoice":t==="Sales"?"lead":""}document.addEventListener("click",async t=>{var a;const e=t.target.closest("button");if(e){if(e.dataset.assistantToggle!==void 0){s.assistantOpen=!s.assistantOpen,h();return}if(e.dataset.assistantCommand){await tt(e.dataset.assistantCommand);return}if(e.dataset.confirmCancel!==void 0){s.confirmDialog=null,h();return}if(e.dataset.confirmPrimary!==void 0){const i=s.confirmDialog;if(s.confirmDialog=null,(i==null?void 0:i.type)==="reset-demo"){await f("reset-demo",async()=>{await Ht(),window.location.reload()});return}if((i==null?void 0:i.type)==="delete-rule"){await f(`delete-rule-${i.ruleId}`,async()=>{await Qt(i.ruleId),s.rules=await q(),s.activity=await A(),s.selectedRule=null},"Rule deleted locally.");return}if((i==null?void 0:i.type)==="delete-employee"){await f(`delete-employee-${i.employeeId}`,async()=>{await sa(i.employeeId),s.employees=await ce(),s.emails=await R(),s.tasks=await x(),s.activity=await A(),s.selectedEmployee=null},"Employee removed and assigned emails returned to Unassigned.");return}if((i==null?void 0:i.type)==="archive-emails"){await f("archive-emails",async()=>{await Kt(i.emailIds,i.reason),s.emails=await R(),s.tasks=await x(),s.digest=await L(),s.activity=await A(),s.selectedEmail=null},d("triage.removeSuccess"));return}}if(e.dataset.loginAccount){await f("login-demo",async()=>{const i=await Nt(e.dataset.loginAccount);await Re(),s.tab=i.role==="Employee"?"tasks":"dashboard"},d("auth.loginToast"));return}if(e.dataset.logoutDemo!==void 0){await f("logout-demo",async()=>{await Ot(),await Re()},d("auth.logoutToast"));return}if(e.dataset.tab&&O(e.dataset.tab),e.dataset.tabTarget&&O(e.dataset.tabTarget),e.dataset.newCompose!==void 0){s.composeForm=te(),h();return}if(e.dataset.openComposeDraft){const i=s.composeDrafts.find(o=>o.id===e.dataset.openComposeDraft);i&&(s.composeForm={...i,attachments:[...i.attachments]},O("compose",{closeDrawers:!1}));return}if(e.dataset.saveCompose!==void 0){await f("save-compose",async()=>{const i=await qt(s.composeForm);s.composeForm={...i,attachments:[...i.attachments]},s.composeDrafts=await he(),s.activity=await A()},d("compose.savedToast"));return}if(e.dataset.printCompose!==void 0){W(d("compose.printToast")),window.print();return}if(e.dataset.setupMailbox&&(s.selectedSetupMailboxId=e.dataset.setupMailbox,Je()),e.dataset.triageFilter&&(s.triageFilter=e.dataset.triageFilter,h()),e.dataset.archiveEmail){const i=s.emails.find(o=>o.id===e.dataset.archiveEmail);if(!i)return;s.confirmDialog={type:"archive-emails",emailIds:[i.id],reason:"Removed from demo inbox",title:d("triage.removeConfirmTitle"),message:`${d("triage.removeConfirmMessage")} "${i.subject}"`,primaryLabel:d("triage.remove"),tone:"danger"},h();return}if(e.dataset.archiveFiltered!==void 0){const i=Ye().filter(o=>o.canArchive);if(!i.length)return;s.confirmDialog={type:"archive-emails",emailIds:i.map(o=>o.id),reason:"Bulk removed from demo inbox",title:d("triage.removeFilteredConfirmTitle"),message:`${d("triage.removeFilteredConfirmMessage")} ${i.length}`,primaryLabel:d("triage.removeFiltered"),tone:"danger"},h();return}if(e.dataset.draftFilter&&(s.draftFilter=e.dataset.draftFilter,h()),e.dataset.action==="digest"&&await f("digest",async()=>{s.digest=await L()},"Morning digest regenerated from local demo data."),e.dataset.reviewEmail){const i=e.dataset.reviewEmail;await f(`review-${i}`,async()=>{s.selectedEmail=await ze(i),s.emails=await R(),s.selectedDraft=null,s.selectedRule=null,s.selectedEmployee=null,s.selectedCategory=null,s.summary="",s.showExplanation=!1},"Message thread opened.")}if(e.dataset.reviewDraft){const i=e.dataset.reviewDraft;await f(`review-draft-${i}`,async()=>{s.selectedDraft=await B(i),s.selectedEmail=null,s.selectedRule=null,s.selectedEmployee=null,s.selectedCategory=null,s.summary="",s.showExplanation=!1},"Draft opened for review.")}if(e.dataset.openEmailDraft){const i=e.dataset.openEmailDraft;await f(`open-email-draft-${i}`,async()=>{s.selectedDraft=await jt(i),s.selectedEmail=null,s.selectedRule=null,s.selectedEmployee=null,s.selectedCategory=null,s.summary="",s.showExplanation=!1},"Draft opened for editing.")}if(e.dataset.saveTaskNote){const i=e.dataset.saveTaskNote,o=((a=document.querySelector(`[data-task-note="${i}"]`))==null?void 0:a.value)||"";await f(`task-note-${i}`,async()=>{await ue(i,{notes:o}),s.tasks=await x(),s.activity=await A()},d("tasks.noteSaved"));return}if(e.dataset.closeDrawer!==void 0&&(s.selectedEmail=null,s.selectedDraft=null,s.selectedRule=null,s.selectedEmployee=null,s.selectedCategory=null,s.summary="",s.showExplanation=!1,h()),e.dataset.toggleExplanation!==void 0&&(s.showExplanation=!s.showExplanation,h()),e.dataset.summaryEmail){const i=e.dataset.summaryEmail;await f(`summary-${i}`,async()=>{s.summary=await Bt(i)},"Thread summary generated.")}if(e.dataset.generateDraft){const i=e.dataset.generateDraft;await f(`draft-${i}`,async()=>{await ba(i)},"Draft opened. Existing edits were preserved.")}if(e.dataset.saveDraft){const i=e.dataset.saveDraft,o=document.querySelector("[data-draft-editor]");await f(`save-${i}`,async()=>{var n;await Vt(i,o.value),s.drafts=await j(),s.emails=await R(),((n=s.selectedDraft)==null?void 0:n.id)===i&&(s.selectedDraft=await B(i))},"Draft saved locally.")}if(e.dataset.toggleRule){const i=e.dataset.toggleRule;await f(`rule-${i}`,async()=>{await Ae(i),s.rules=await q()},"Rule preview state updated.")}if(e.dataset.approveRule){const i=e.dataset.approveRule;await f(`approve-rule-${i}`,async()=>{s.rules.find(n=>n.id===i).on||await Ae(i),s.rules=await q()},"Rule approved for observation mode.")}if(e.dataset.editRule){const i=e.dataset.editRule;await f(`edit-rule-${i}`,async()=>{s.selectedRule=s.rules.find(o=>o.id===i),s.selectedEmail=null,s.selectedDraft=null,s.selectedEmployee=null,s.selectedCategory=null},"Rule opened for local editing.")}if(e.dataset.saveRule){const i=e.dataset.saveRule,o=Object.fromEntries([...document.querySelectorAll("[data-rule-field]")].map(n=>[n.dataset.ruleField,n.value]));await f(`save-rule-${i}`,async()=>{await Ut(i,o),s.rules=await q(),s.selectedRule=s.rules.find(n=>n.id===i)},"Rule saved locally.")}if(e.dataset.deleteRule){const i=e.dataset.deleteRule,o=s.rules.find(n=>n.id===i);s.confirmDialog={type:"delete-rule",ruleId:i,title:"Delete this rule?",message:`Delete “${(o==null?void 0:o.title)||"this rule"}” from the local demo?`,primaryLabel:"Delete rule",tone:"danger"},h()}if(e.dataset.addEmployee!==void 0&&(s.selectedEmployee={id:"new",name:"",email:"",title:"",department:""},s.selectedEmail=null,s.selectedDraft=null,s.selectedRule=null,s.selectedCategory=null,h()),e.dataset.editEmployee&&(s.selectedEmployee=s.employees.find(i=>i.id===e.dataset.editEmployee)||null,s.selectedEmail=null,s.selectedDraft=null,s.selectedRule=null,s.selectedCategory=null,h()),e.dataset.saveEmployee){const i=e.dataset.saveEmployee,o=Object.fromEntries([...document.querySelectorAll("[data-employee-field]")].map(n=>[n.dataset.employeeField,n.value]));await f(`save-employee-${i}`,async()=>{const n=i==="new"?await ta(o):await aa(i,o);s.employees=await ce(),s.tasks=await x(),s.activity=await A(),s.selectedEmployee=s.employees.find(l=>l.id===n.id)||null},i==="new"?"Employee added locally.":"Employee changes saved locally.")}if(e.dataset.deleteEmployee){const i=e.dataset.deleteEmployee,o=s.employees.find(l=>l.id===i),n=s.emails.filter(l=>l.assignedTo===i).length;s.confirmDialog={type:"delete-employee",employeeId:i,title:"Remove this employee?",message:`Remove ${(o==null?void 0:o.name)||"this employee"}? ${n} assigned email${n===1?"":"s"} will return to Unassigned.`,primaryLabel:"Remove employee",tone:"danger"},h()}if(e.dataset.addCategory!==void 0&&(s.selectedCategory={id:"new",name:"",description:"",color:"default",active:!0,system:!1},s.selectedEmail=null,s.selectedDraft=null,s.selectedRule=null,s.selectedEmployee=null,h()),e.dataset.editCategory&&(s.selectedCategory=s.categories.find(i=>i.id===e.dataset.editCategory)||null,s.selectedEmail=null,s.selectedDraft=null,s.selectedRule=null,s.selectedEmployee=null,h()),e.dataset.saveCategory){const i=e.dataset.saveCategory,o=Object.fromEntries([...document.querySelectorAll("[data-category-field]")].map(n=>[n.dataset.categoryField,n.value]));await f(`save-category-${i}`,async()=>{const n=i==="new"?await Jt(o):await Xt(i,o);await Ce(n.id)},i==="new"?"Category added locally.":"Category changes saved locally.")}if(e.dataset.toggleCategory){const i=e.dataset.toggleCategory;await f(`toggle-category-${i}`,async()=>{const o=await Zt(i);await Ce(o.id)},"Category visibility updated locally.")}if(e.dataset.approveDraft){const i=e.dataset.approveDraft;await f(`approve-${i}`,async()=>{await $a(i)},"Draft approved and workflow completed. Nothing was sent.")}if(e.dataset.approveSelected!==void 0&&await f("approve-selected",async()=>{await Ge(s.selectedDraftIds),s.drafts=await j(),s.emails=await R(),s.activity=await A(),s.digest=await L(),s.selectedDraftIds=[]},"Selected drafts approved and workflows completed. Nothing was sent."),e.dataset.approveLowRisk!==void 0){if(!Ke()){W("Low-risk bulk approval is disabled by workspace settings.",!0);return}await f("approve-low-risk",async()=>{await Gt(),s.drafts=await j(),s.emails=await R(),s.activity=await A(),s.digest=await L(),s.selectedDraftIds=[]},"Low-risk drafts approved and workflows completed. Nothing was sent.")}if(e.dataset.saveSettings!==void 0){const i=Object.fromEntries([...document.querySelectorAll("[data-setting]")].map(o=>[o.dataset.setting,o.value]));await f("settings",async()=>{s.settings=await Pt(i),s.settingsForm={...s.settings}},"Settings saved locally.")}e.dataset.resetDemo!==void 0&&(s.confirmDialog={type:"reset-demo",title:"Reset demo data?",message:"This clears all local Courio changes and restores the original fake demo data.",primaryLabel:"Reset demo data",tone:"danger"},h())}});document.addEventListener("change",async t=>{const e=t.target;if(e.dataset.setting!==void 0){s.settingsForm={...ae(),[e.dataset.setting]:e.value},e.dataset.setting==="mode"&&h();return}if(e.dataset.taskStatus){const a=e.dataset.taskStatus;await f(`task-status-${a}`,async()=>{await ue(a,{status:e.checked?"Done":"Open"}),s.tasks=await x(),s.activity=await A()},e.checked?d("tasks.completedToast"):d("tasks.reopenedToast"));return}if(e.dataset.taskAssignee){const a=e.dataset.taskAssignee;await f(`task-assignee-${a}`,async()=>{await ue(a,{assignedTo:e.value}),s.tasks=await x(),s.activity=await A()},d("tasks.assignedToast"));return}if(e.dataset.taskAssigneeFilter!==void 0){s.taskAssigneeFilter=e.value,Xe();return}if(e.dataset.composeAttachments!==void 0){s.composeForm={...te(),...s.composeForm,attachments:[...e.files].map((a,i)=>({id:`local-${Date.now()}-${i}`,name:a.name,type:a.type||"Unknown",size:a.size}))},Ze();return}if(e.dataset.triageCategoryFilter!==void 0){s.triageCategoryFilter=e.value,h();return}if(e.dataset.emailCategory){const a=e.dataset.emailCategory;await f(`category-${a}`,async()=>{await Yt(a,e.value),await me(a),s.tasks=await x()},"Category updated locally.")}if(e.dataset.emailAssignee){const a=e.dataset.emailAssignee;await f(`assign-${a}`,async()=>{await ea(a,e.value),await me(a),s.tasks=await x()},"Email assignment updated locally.")}if(e.dataset.selectDraft){const a=e.dataset.selectDraft;s.selectedDraftIds=e.checked?[...new Set([...s.selectedDraftIds,a])]:s.selectedDraftIds.filter(i=>i!==a),h()}});document.addEventListener("input",t=>{const e=t.target;if(e.dataset.setting!==void 0){s.settingsForm={...ae(),[e.dataset.setting]:e.value};return}if(e.dataset.composeField!==void 0){s.composeForm={...te(),...s.composeForm,[e.dataset.composeField]:e.value};return}if(e.dataset.ruleSearch===void 0)return;s.ruleQuery=e.value,et();const a=document.querySelector("[data-rule-search]");a==null||a.focus(),a==null||a.setSelectionRange(s.ruleQuery.length,s.ruleQuery.length)});document.addEventListener("submit",async t=>{const e=t.target.closest(".assistant-form");if(!e)return;t.preventDefault();const a=e.querySelector("[data-assistant-input]"),i=a.value.trim();i&&(a.value="",await tt(i))});h();ga();
