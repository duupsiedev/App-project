(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const d of i.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function a(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(n){if(n.ep)return;n.ep=!0;const i=a(n);fetch(n.href,i)}})();const Le={en:{brand:{subtitle:"Email assistant for small businesses",asideNote:"Courio uses fake local mailbox data in this prototype and suggests actions. It never sends email or modifies a real mailbox.",previewMode:"Preview mode enabled"},nav:{groups:{home:"Home",work:"Work",automation:"Automation",workspace:"Workspace"},dashboard:"Overview",dashboardSmall:"Today",triage:"Triage",triageSmall:"Inbox",tasks:"Tasks",tasksSmall:"Priority",compose:"Compose",composeSmall:"Local draft",drafts:"Drafts",draftsSmall:"Approval",rules:"Rules",rulesSmall:"Preview",import:"Setup preview",importSmall:"Microsoft 365",admin:"Admin",adminSmall:"Settings"},pages:{dashboard:["Overview","A local workflow preview for email triage, summaries, routing suggestions, and draft preparation."],import:["Setup preview","Preview how a future Microsoft 365 connection could import mailbox structure and workflow patterns."],triage:["Inbox triage","Review AI-classified messages before any action is taken."],tasks:["Action Center","Turn important local inbox items into a priority work list."],compose:["Compose","Create a fake/local message draft without sending anything."],rules:["Rules","Approve or adjust local rule previews. They do not affect a real mailbox."],drafts:["Drafts","Review prepared replies and mark them ready for a person to send."],admin:["Admin","Manage local workspace preferences and preview future integration safeguards."]},admin:{workspaceSettings:"Workspace settings",prototype:"Prototype",companyName:"Company name",language:"Language / Langue",mode:"Mode",escalationRecipient:"Escalation recipient",saveSettings:"Save settings",saving:"Saving...",resetDemoData:"Reset Demo Data",resetting:"Resetting...",safetyPreview:"Safety preview",prototypeBehavior:"Prototype behavior",savedLanguage:"Saved language",languageNote:"Language changes apply after saving. Internal workflow values stay stable."},auth:{demoOnly:"Demo login",title:"Choose a demo account",subtitle:"Use a premade local account to preview what an owner or employee would see.",safetyNote:"This is a local role switcher for the prototype, not real authentication or security.",logout:"Switch account",loginToast:"Demo account opened locally.",logoutToast:"Demo account closed locally."},triage:{inboxControl:"Inbox control",categoryFilter:"Category filter",allCategories:"All categories",emptyUrgent:"No urgent emails. You are caught up on high-priority work.",emptyInvoices:"No invoice emails are waiting for review.",emptyCategory:"No emails match this category filter.",emptyAll:"No emails are available in this local demo.",remove:"Remove",removing:"Removing...",removeFiltered:"Remove filtered",removeFilteredDisabled:"No removable emails in the current view.",removeConfirmTitle:"Remove this email from the demo inbox?",removeConfirmMessage:"This only hides the fake/local demo email. Nothing is deleted from a real mailbox:",removeFilteredConfirmTitle:"Remove filtered emails from the demo inbox?",removeFilteredConfirmMessage:"This only hides fake/local demo emails. Number selected:",removeSuccess:"Email removed from the demo inbox locally."},tasks:{title:"Priority tasks",subtitle:"Generated from the local demo inbox",empty:"No tasks yet. New local inbox items will appear here as work to review.",done:"Done",task:"Task",priority:"Priority",source:"Source email",notes:"Notes",followUp:"Follow-up",followUpDate:"Follow-up date",reminderOn:"Reminder on",reminderOff:"Add reminder",noReminder:"No follow-up scheduled",scheduled:"Scheduled locally",overdue:"Overdue",followUpFilter:"Follow-up filter",allFollowUps:"All follow-ups",scheduledFollowUps:"Scheduled",overdueFollowUps:"Overdue",followUpScheduledToast:"Local follow-up scheduled.",followUpRemovedToast:"Local follow-up removed.",followUpUpdatedToast:"Follow-up date updated locally.",assignedTo:"Assigned to",assigneeFilter:"Assignee filter",allAssignees:"All assignees",unassigned:"Unassigned",employeeScope:"Employee demo view: only tasks assigned to this account are shown.",notePlaceholder:"Add a local note",reviewEmail:"Review email",saveNote:"Save note",saving:"Saving...",noteSaved:"Task note saved locally.",completedToast:"Task checked off locally.",reopenedToast:"Task reopened locally.",openTasks:"Open tasks",openCaption:"From fake/local inbox items",highPriority:"High priority",highCaption:"Review these first",completed:"Completed",completedCaption:"Checked off in this browser",assignedToast:"Task assignment updated locally.",latestActivity:"Latest activity",viewHistory:"History",historyTitle:"Task history",historyFallback:"Task updated",noHistory:"No activity yet for this local task.",noNotes:"No notes yet.",historyNote:"This history is fake/local and helps show who touched the workflow in this browser.",localTask:"Local task",overdueCaption:"Needs follow-up now",noOverdueCaption:"No overdue reminders"},compose:{title:"Compose message",subtitle:"Fake/local only",safetyNote:"This composer does not connect to Gmail, Outlook, or any real mailbox. Saving creates a local draft only.",newMessage:"New message",to:"To",cc:"Cc",subject:"Subject",body:"Message body",attachments:"Attachments",attachmentNote:"Attachments are metadata only in this demo. File contents are not uploaded or stored.",attachmentMetadata:"Attachment metadata",noAttachments:"No attachments selected.",saveDraft:"Save local draft",saving:"Saving...",printPdf:"Print / save as PDF",neverSends:"Never sends email",savedDrafts:"Saved compose drafts",localOnly:"Local only",openDraft:"Open draft",emptyDrafts:"No compose drafts yet.",savedToast:"Compose draft saved locally. Nothing was sent.",printToast:"Use your browser print dialog to save as PDF. Nothing is sent."}},fr:{brand:{subtitle:"Assistant courriel pour PME",asideNote:"Courio utilise des données locales fictives dans ce prototype et suggère des actions. Il n'envoie jamais de courriel et ne modifie aucune vraie boîte courriel.",previewMode:"Mode aperçu activé"},nav:{groups:{home:"Accueil",work:"Travail",automation:"Automatisation",workspace:"Espace de travail"},dashboard:"Aperçu",dashboardSmall:"Aujourd'hui",triage:"Tri",triageSmall:"Boîte de réception",tasks:"Tâches",tasksSmall:"Priorité",compose:"Composer",composeSmall:"Brouillon local",drafts:"Brouillons",draftsSmall:"Approbation",rules:"Règles",rulesSmall:"Aperçu",import:"Aperçu configuration",importSmall:"Microsoft 365",admin:"Admin",adminSmall:"Paramètres"},pages:{dashboard:["Aperçu","Aperçu local des flux de tri courriel, résumés, suggestions de routage et préparation de brouillons."],import:["Aperçu configuration","Aperçu de la façon dont une future connexion Microsoft 365 pourrait importer la structure de boîte courriel et les habitudes de travail."],triage:["Tri de la boîte courriel","Révisez les messages classés par l'IA avant toute action."],tasks:["Centre d'action","Transformez les courriels locaux importants en liste de travail priorisée."],compose:["Composer","Créez un faux brouillon local sans rien envoyer."],rules:["Règles","Approuvez ou ajustez les aperçus de règles locales. Elles ne touchent aucune vraie boîte courriel."],drafts:["Brouillons","Révisez les réponses préparées et marquez-les prêtes pour un envoi humain."],admin:["Admin","Gérez les préférences locales de l'espace de travail et les protections des futures intégrations."]},admin:{workspaceSettings:"Paramètres de l'espace de travail",prototype:"Prototype",companyName:"Nom de l'entreprise",language:"Langue",mode:"Mode",escalationRecipient:"Responsable des escalades",saveSettings:"Enregistrer les paramètres",saving:"Enregistrement...",resetDemoData:"Réinitialiser la démo",resetting:"Réinitialisation...",safetyPreview:"Aperçu de sécurité",prototypeBehavior:"Comportement du prototype",savedLanguage:"Langue enregistrée",languageNote:"Les changements de langue s'appliquent après l'enregistrement. Les valeurs internes du flux restent stables."},auth:{demoOnly:"Connexion démo",title:"Choisir un compte démo",subtitle:"Utilisez un compte local préparé pour voir ce qu'un propriétaire ou un employé verrait.",safetyNote:"Ceci est un sélecteur de rôle local pour le prototype, pas une vraie authentification ni une vraie sécurité.",logout:"Changer de compte",loginToast:"Compte démo ouvert localement.",logoutToast:"Compte démo fermé localement."},triage:{inboxControl:"Contrôle de la boîte",categoryFilter:"Filtre de catégorie",allCategories:"Toutes les catégories",emptyUrgent:"Aucun courriel urgent. Les priorités élevées sont à jour.",emptyInvoices:"Aucun courriel de facture n'attend une révision.",emptyCategory:"Aucun courriel ne correspond à cette catégorie.",emptyAll:"Aucun courriel n'est disponible dans cette démo locale.",remove:"Retirer",removing:"Retrait...",removeFiltered:"Retirer la sélection",removeFilteredDisabled:"Aucun courriel retirable dans la vue actuelle.",removeConfirmTitle:"Retirer ce courriel de la boîte de démo?",removeConfirmMessage:"Cela cache seulement le faux courriel local. Rien n'est supprimé d'une vraie boîte:",removeFilteredConfirmTitle:"Retirer les courriels filtrés de la boîte de démo?",removeFilteredConfirmMessage:"Cela cache seulement des faux courriels locaux. Nombre sélectionné:",removeSuccess:"Courriel retiré localement de la boîte de démo."},tasks:{title:"Tâches prioritaires",subtitle:"Générées à partir de la boîte locale de démo",empty:"Aucune tâche pour l'instant. Les nouveaux courriels locaux apparaîtront ici comme travail à réviser.",done:"Fait",task:"Tâche",priority:"Priorité",source:"Courriel source",notes:"Notes",followUp:"Suivi",followUpDate:"Date de suivi",reminderOn:"Rappel actif",reminderOff:"Ajouter un rappel",noReminder:"Aucun suivi planifié",scheduled:"Planifié localement",overdue:"En retard",followUpFilter:"Filtre de suivi",allFollowUps:"Tous les suivis",scheduledFollowUps:"Planifiés",overdueFollowUps:"En retard",followUpScheduledToast:"Suivi local planifié.",followUpRemovedToast:"Suivi local retiré.",followUpUpdatedToast:"Date de suivi mise à jour localement.",assignedTo:"Assigné à",assigneeFilter:"Filtre par responsable",allAssignees:"Tous les responsables",unassigned:"Non assigné",employeeScope:"Vue employé démo : seules les tâches assignées à ce compte sont affichées.",notePlaceholder:"Ajouter une note locale",reviewEmail:"Réviser le courriel",saveNote:"Enregistrer la note",saving:"Enregistrement...",noteSaved:"Note de tâche enregistrée localement.",completedToast:"Tâche cochée localement.",reopenedToast:"Tâche rouverte localement.",openTasks:"Tâches ouvertes",openCaption:"Depuis les faux courriels locaux",highPriority:"Priorité élevée",highCaption:"À réviser en premier",completed:"Terminées",completedCaption:"Cochées dans ce navigateur",assignedToast:"Assignation de tâche mise à jour localement.",latestActivity:"Activité récente",viewHistory:"Historique",historyTitle:"Historique de la tâche",historyFallback:"Tâche mise à jour",noHistory:"Aucune activité pour cette tâche locale.",noNotes:"Aucune note pour l'instant.",historyNote:"Cet historique est faux/local et montre qui a touché au flux dans ce navigateur.",localTask:"Tâche locale",overdueCaption:"Suivi requis maintenant",noOverdueCaption:"Aucun rappel en retard"},compose:{title:"Composer un message",subtitle:"Faux/local seulement",safetyNote:"Ce compositeur ne se connecte pas à Gmail, Outlook ni à une vraie boîte courriel. L'enregistrement crée seulement un brouillon local.",newMessage:"Nouveau message",to:"À",cc:"Cc",subject:"Objet",body:"Corps du message",attachments:"Pièces jointes",attachmentNote:"Les pièces jointes sont seulement des métadonnées dans cette démo. Le contenu des fichiers n'est pas téléversé ni stocké.",attachmentMetadata:"Métadonnées des pièces jointes",noAttachments:"Aucune pièce jointe sélectionnée.",saveDraft:"Enregistrer le brouillon local",saving:"Enregistrement...",printPdf:"Imprimer / enregistrer en PDF",neverSends:"N'envoie jamais de courriel",savedDrafts:"Brouillons composés enregistrés",localOnly:"Local seulement",openDraft:"Ouvrir le brouillon",emptyDrafts:"Aucun brouillon composé pour l'instant.",savedToast:"Brouillon composé enregistré localement. Rien n'a été envoyé.",printToast:"Utilisez la fenêtre d'impression du navigateur pour enregistrer en PDF. Rien n'est envoyé."}}};function te(t){return t==="fr"?"fr":"en"}function Me(t){const e=Le[te(t)];return function(o){return o.split(".").reduce((n,i)=>n==null?void 0:n[i],e)||o}}function it(t,e){const a=Le[te(e)];return a.pages[t]||a.pages.dashboard}function r(t=""){return String(t).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function x(t=[]){return t.map(e=>r(e)).join(", ")}const nt=["Triage","Urgent emails","Drafts needing approval","Invoices","Generate digest","Create invoice rule","Reset demo data"];function rt({assistantOpen:t,assistantMessages:e,assistantBusy:a}){const o=e.length?e:[{id:"assistant-loading",role:"assistant",text:"Loading assistant history..."}];return`
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
                ${r(n.text)}
              </div>
            `).join("")}
          </div>
          <form class="assistant-form">
            <input data-assistant-input placeholder="Show urgent emails" autocomplete="off" ${a?"disabled":""}>
            <button class="btn primary" type="submit" ${a?"disabled":""}>${a?"Working...":"Send"}</button>
          </form>
          <div class="assistant-suggestions" aria-label="Assistant command suggestions">
            ${nt.map(n=>`
              <button class="assistant-chip" data-assistant-command="${r(n)}" ${a?"disabled":""}>
                ${r(n)}
              </button>
            `).join("")}
          </div>
        </div>
      `:""}
      <button class="assistant-fab" data-assistant-toggle aria-label="Open Courio assistant">
        AI
      </button>
    </div>
  `}const lt=[{id:"email-1",subject:"Very unhappy about no response",sender:"Maya Chen",senderEmail:"maya@northstar-retail.ca",body:"I have followed up twice and still have not received an answer about the service issue from last week. We need someone senior to respond today.",category:"Client complaint",urgency:"High",confidence:94,suggestedAction:"Escalate to owner",requiresDraft:!0,assignedTo:"emp-1",explanation:"Courio flagged this because the client mentions repeated follow-ups, no response, and asks for senior attention today.",thread:["Client followed up twice about an unanswered service issue.","The last message uses negative sentiment and asks for owner attention."],summary:"Client is frustrated by delayed response. Recommend owner review today.",draft:"Hi, thank you for the follow-up. I'm sorry this has taken longer than expected. I am escalating this now and will make sure you receive a clear update today."},{id:"email-2",subject:"Invoice #1844 payment status",sender:"Alex Rivera",senderEmail:"alex@brightline-supplies.ca",body:"Could you confirm whether invoice #1844 has been approved for payment? It was due last Friday.",category:"Accounting",urgency:"Medium",confidence:89,suggestedAction:"Route to accounting",requiresDraft:!0,assignedTo:"emp-2",explanation:"Courio saw an invoice number, payment-status wording, and a due-date reference, so it suggested accounting review.",thread:["Supplier asks whether invoice #1844 has been scheduled for payment.","Invoice appears related to recurring monthly services."],summary:"Supplier is requesting a payment-status update for invoice #1844.",draft:"Hi, thanks for checking in. We are reviewing invoice #1844 with accounting and will send a status update shortly."},{id:"email-3",subject:"Quote request for monthly bookkeeping",sender:"Priya Nair",senderEmail:"priya@lakeside-catering.ca",body:"We are looking for monthly bookkeeping help for a small catering business. We have six employees and would like pricing before the end of the week.",category:"Sales",urgency:"Medium",confidence:86,suggestedAction:"Prepare intake draft",requiresDraft:!0,assignedTo:"emp-3",explanation:"Courio matched this to sales because the sender asks for pricing, describes company needs, and appears to be a new prospect.",thread:["New prospect requested pricing for monthly bookkeeping.","They mentioned six employees and monthly receipt volume."],summary:"New lead is asking for bookkeeping pricing. Intake details are partially available.",draft:"Hi, thanks for reaching out. We'd be happy to help with monthly bookkeeping. Could you share your approximate monthly transaction count and preferred start date?"},{id:"email-4",subject:"Payroll documents attached",sender:"Tom Bennett",senderEmail:"tom@harbour-grill.ca",body:"Please find this period's payroll documents attached. Let me know if anything is missing before Thursday.",category:"Documents",urgency:"Low",confidence:91,suggestedAction:"Apply payroll category",requiresDraft:!0,assignedTo:"emp-4",explanation:"Courio detected payroll wording and an attachment reference, so it suggested categorizing this for payroll review.",thread:["Client attached payroll documents for this period.","Message should be categorized for payroll review."],summary:"Payroll documents are attached and ready to route to payroll workflow.",draft:"Hi, thanks. We received the payroll documents and will review them for the current period."},{id:"email-5",subject:"Missing March receipts",sender:"Elena Morris",senderEmail:"elena@maple-therapy.ca",body:"I thought I sent the March receipts, but I may have missed the attachment. Can you let me know what you still need?",category:"Missing documents",urgency:"Medium",confidence:88,suggestedAction:"Prepare follow-up draft",requiresDraft:!0,assignedTo:"emp-2",explanation:"Courio flagged this because the email talks about receipts and a possibly missing attachment, which usually needs a document follow-up.",thread:["Client mentions March receipts but no attachments are present.","Follow-up should request the missing files."],summary:"March receipts appear to be missing. Prepare a concise document request.",draft:"Hi, thanks for the note. It looks like the March receipts were not attached. Could you resend them when convenient?"},{id:"email-6",subject:"Can we move tomorrow's appointment?",sender:"Jordan Lee",senderEmail:"jordan@greenway-landscaping.ca",body:"Something came up with our crew schedule. Can we move tomorrow's appointment to next Tuesday afternoon?",category:"Scheduling",urgency:"Low",confidence:82,suggestedAction:"Offer available times",requiresDraft:!0,assignedTo:"emp-5",explanation:"Courio identified a scheduling change request with a proposed new time, so it suggested a simple scheduling reply.",thread:["Client asks to move an appointment from tomorrow to next Tuesday afternoon.","No urgent sentiment or billing issue detected."],summary:"Client wants to reschedule tomorrow's appointment to next Tuesday afternoon.",draft:"Hi, thanks for letting us know. Next Tuesday afternoon should work on our side. Could you confirm your preferred time window?"},{id:"email-7",subject:"Weekly partner newsletter",sender:"Service Ledger Weekly",senderEmail:"updates@serviceledger.example",body:"This week's roundup includes product tips, partner webinars, and a checklist for organizing client documents before month end.",category:"Newsletter",urgency:"Low",confidence:79,suggestedAction:"Remove from demo inbox",requiresDraft:!0,assignedTo:"",explanation:"Courio categorized this as a newsletter because it is a broadcast update with no client request, deadline, or required reply.",thread:["Marketing-style newsletter with no direct client request.","Low-priority inbox noise that can be removed from the demo inbox after review."],summary:"Newsletter-style update. No reply appears needed.",draft:"No reply needed. This local demo item can be removed from the inbox after review."}],dt=[{id:"cat-client-complaint",name:"Client complaint",description:"Escalations, unhappy clients, repeated follow-ups, and high-trust replies.",color:"urgent",active:!0,system:!0},{id:"cat-accounting",name:"Accounting",description:"Invoices, payment status, receipts, bookkeeping, and supplier questions.",color:"invoice",active:!0,system:!0},{id:"cat-sales",name:"Sales",description:"New leads, quote requests, pricing questions, and intake replies.",color:"lead",active:!0,system:!0},{id:"cat-documents",name:"Documents",description:"Attached files, payroll documents, client records, and document routing.",color:"invoice",active:!0,system:!0},{id:"cat-missing-documents",name:"Missing documents",description:"Missing attachments, receipts, files, or client documents that need follow-up.",color:"invoice",active:!0,system:!0},{id:"cat-scheduling",name:"Scheduling",description:"Appointment changes, availability, calendar coordination, and time windows.",color:"pending",active:!0,system:!0},{id:"cat-general",name:"General",description:"Messages that do not need a specialized workflow yet.",color:"default",active:!0,system:!0},{id:"cat-newsletter",name:"Newsletter",description:"Marketing emails, updates, and low-priority broadcast messages.",color:"default",active:!0,system:!1},{id:"cat-follow-up",name:"Follow-up",description:"Messages that need a reminder, next step, or later response.",color:"pending",active:!0,system:!1},{id:"cat-internal",name:"Internal",description:"Team messages, internal coordination, and company updates.",color:"lead",active:!0,system:!1},{id:"cat-vendor",name:"Vendor",description:"Supplier, partner, and vendor conversations.",color:"invoice",active:!0,system:!1}],ct=[{id:"emp-1",name:"Nadia Patel",title:"Owner",email:"nadia@courio-demo.ca",department:"Leadership"},{id:"emp-2",name:"Marcus Roy",title:"Bookkeeper",email:"marcus@courio-demo.ca",department:"Accounting"},{id:"emp-3",name:"Sofia Tremblay",title:"Client Success Lead",email:"sofia@courio-demo.ca",department:"Sales"},{id:"emp-4",name:"Daniel Kim",title:"Payroll Specialist",email:"daniel@courio-demo.ca",department:"Payroll"},{id:"emp-5",name:"Avery Brooks",title:"Office Coordinator",email:"avery@courio-demo.ca",department:"Operations"}],ut=[{id:"rule-1",title:"Supplier invoice routing",desc:"Suggest an accounting category and owner for supplier invoices and payment requests.",category:"Accounting",confidence:91,explanation:"Courio looks for invoice numbers, payment wording, supplier senders, and due-date language.",impact:"Matches the sample invoice messages in this local demo.",matches:["Invoice #1844 payment status","Supplier payment confirmation"],on:!0},{id:"rule-2",title:"Client escalation detection",desc:"Flag negative sentiment, repeated follow-ups, or unanswered client messages older than 48 hours.",category:"Client complaint",confidence:94,explanation:"Courio looks for negative sentiment, repeated follow-ups, and requests for owner attention.",impact:"Flags the sample high-risk client thread in this local demo.",matches:["Very unhappy about no response"],on:!0},{id:"rule-3",title:"Quote request intake",desc:"Prepare standardized draft replies for new prospects requesting pricing or availability.",category:"Sales",confidence:86,explanation:"Courio looks for pricing requests, new prospect language, and service-fit details.",impact:"Matches the sample quote request in this local demo.",matches:["Quote request for monthly bookkeeping"],on:!1},{id:"rule-4",title:"Missing document follow-up",desc:"Prepare client reminders when required documents are mentioned but not attached.",category:"Missing documents",confidence:88,explanation:"Courio looks for missing attachment wording, receipt requests, and document follow-up language.",impact:"Useful for bookkeeping, accounting, insurance, and service teams.",matches:["Missing March receipts"],on:!1}],J="courio.mockState.v1",we="courio.assistantHistory.v1",ue="courio.demoSession.v1",ye=2,he=[{id:"admin-owner",role:"Admin",employeeId:"emp-1",name:"Nadia Patel",title:"Owner",email:"nadia@courio-demo.ca"},{id:"employee-marcus",role:"Employee",employeeId:"emp-2",name:"Marcus Roy",title:"Bookkeeper",email:"marcus@courio-demo.ca"}],f=Object.freeze({NEEDS_REVIEW:"needs_review",READY_FOR_DRAFT:"ready_for_draft",DRAFT_GENERATED:"draft_generated",DRAFT_REVIEWED:"draft_reviewed",DRAFT_SAVED:"draft_saved",COMPLETED:"completed"}),mt=new Set(Object.values(f)),pt={status:"Simulated setup preview",safetyNote:"No account is connected. This demo does not access real email, folders, files, or contacts.",futureNote:"In a future version, this step could connect to Gmail or Microsoft 365 after explicit approval.",mailboxes:[{id:"mailbox-main",name:"Main inbox",address:"hello@demo-company.ca",type:"Primary mailbox",volume:"142 recent threads",risk:"Mixed priority",folders:["Inbox","Needs reply","Clients","Vendors","Archive"],categories:["Client complaint","Accounting","Sales","Scheduling"],frequentSenders:["Northstar Retail","Brightline Supplies","Lakeside Catering"],sharedInboxes:["info@demo-company.ca"],recentThreads:["Very unhappy about no response","Invoice #1844 payment status","Quote request for monthly bookkeeping"]},{id:"mailbox-accounting",name:"Accounting",address:"accounting@demo-company.ca",type:"Shared mailbox",volume:"88 recent threads",risk:"Document-heavy",folders:["Invoices","Receipts","Payroll","Tax documents","Vendors"],categories:["Accounting","Documents","Missing documents"],frequentSenders:["Brightline Supplies","Harbour Grill","Maple Therapy"],sharedInboxes:["payroll@demo-company.ca"],recentThreads:["Invoice #1844 payment status","Payroll documents attached","Missing March receipts"]},{id:"mailbox-sales",name:"Sales",address:"sales@demo-company.ca",type:"Shared mailbox",volume:"53 recent threads",risk:"Revenue-sensitive",folders:["Leads","Quotes","Follow up","Won","Lost"],categories:["Sales","Scheduling"],frequentSenders:["Lakeside Catering","Greenway Landscaping","New prospects"],sharedInboxes:["quotes@demo-company.ca"],recentThreads:["Quote request for monthly bookkeeping","Can we move tomorrow's appointment?"]},{id:"mailbox-operations",name:"Operations",address:"ops@demo-company.ca",type:"Team mailbox",volume:"61 recent threads",risk:"Coordination-heavy",folders:["Scheduling","Client updates","Internal","Completed"],categories:["Scheduling","Documents","General"],frequentSenders:["Greenway Landscaping","Client coordinators","Office team"],sharedInboxes:["support@demo-company.ca"],recentThreads:["Can we move tomorrow's appointment?","Payroll documents attached"]},{id:"mailbox-shared",name:"Shared inbox",address:"info@demo-company.ca",type:"Shared intake",volume:"119 recent threads",risk:"Needs routing",folders:["Inbox","Unsorted","Clients","Prospects","Vendors"],categories:["Client complaint","Sales","Accounting","Missing documents"],frequentSenders:["Clients","Suppliers","Prospects"],sharedInboxes:["hello@demo-company.ca","support@demo-company.ca"],recentThreads:["Very unhappy about no response","Quote request for monthly bookkeeping","Missing March receipts"]}],scanItems:[{label:"Folders",detail:"Inbox structure, archive folders, and team-specific folders.",count:14},{label:"Labels/categories",detail:"Existing categories that could map to Courio triage buckets.",count:9},{label:"Frequent senders",detail:"Recurring clients, vendors, prospects, and internal senders.",count:26},{label:"Shared inboxes",detail:"Mailboxes that several employees may monitor.",count:4},{label:"Recent threads",detail:"Recent local demo examples used to preview workflow suggestions.",count:142},{label:"Suggested workflow rules",detail:"Draft local rules for routing, escalation, and follow-up.",count:5}],setupSteps:[{title:"Choose mailbox",detail:"Select the mailbox Courio should preview.",state:"Available in demo"},{title:"Scan folders and labels",detail:"Preview folders, categories, and common sender patterns.",state:"Simulated"},{title:"Detect common email types",detail:"Identify invoices, quote requests, complaints, missing documents, and scheduling.",state:"Simulated"},{title:"Suggest workflows",detail:"Create local suggested rules for review before anything is used.",state:"Simulated"},{title:"Ready for review",detail:"Move to Triage and Rules to inspect the fake suggestions.",state:"Demo only"}],workflowSuggestions:[{match:"Invoices",outcome:"Accounting review",reason:"Invoice numbers, due dates, supplier language."},{match:"Quote requests",outcome:"Sales intake",reason:"Pricing requests, service-fit details, new prospect wording."},{match:"Complaints",outcome:"Owner escalation",reason:"Repeated follow-ups, negative sentiment, senior attention requests."},{match:"Missing documents",outcome:"Follow-up draft",reason:"Receipts, attachments, payroll, or document gaps."},{match:"Scheduling",outcome:"Offer available times",reason:"Appointment changes, time windows, reschedule language."}]},I={schemaVersion:ye,emails:lt.map(gt),categories:structuredClone(dt),employees:structuredClone(ct),rules:structuredClone(ut),drafts:[],tasks:[],composeDrafts:[],settings:{productName:"Courio",mode:"Simple",language:"en",companyName:"Demo PME Inc.",defaultMode:"Observation only",escalationRecipient:"owner@company.ca",confidenceThreshold:"80",observationDays:"7",allowLowRiskBulkApproval:"Yes",approvalRequired:!0,autoSend:!1},completedActions:[],deletedEmployeeIds:[],deletedRuleIds:[]},c=ft();let W=St(),E=At();const p=(t=550)=>new Promise(e=>setTimeout(e,t));function m(t){return structuredClone(t)}function gt(t){const{status:e,workflowStatus:a,reviewed:o,...n}=m(t);return{...n,archivedAt:n.archivedAt||null,archiveReason:n.archiveReason||"",workflowState:f.NEEDS_REVIEW}}function ft(){try{const t=window.localStorage.getItem(J);if(!t)return m(I);const e=JSON.parse(t),a=vt(e);return window.localStorage.setItem(J,JSON.stringify(a)),a}catch{return m(I)}}function vt(t){const e=t.deletedEmployeeIds||[],a=t.deletedRuleIds||[],o=wt(t.categories),n=Y(I.emails,t.emails),i=Array.isArray(t.drafts)?t.drafts:[],d=ht(i),g=n.map(v=>{const P=d.find(Ee=>(Ee.emailId||Ee.id)===v.id),H=yt(v,P,t.schemaVersion),{status:B,workflowStatus:q,reviewed:La,...ce}=v;return{...ce,archivedAt:ce.archivedAt||null,archiveReason:ce.archiveReason||"",workflowState:H}}),b=new Map(g.map(v=>[v.id,v])),$=d.filter(v=>bt(v,b.get(v.emailId||v.id))).map($t);return{...m(I),...t,schemaVersion:ye,emails:g,categories:o,employees:Y(I.employees.filter(v=>!e.includes(v.id)),(t.employees||[]).filter(v=>!e.includes(v.id))),rules:Y(I.rules.filter(v=>!a.includes(v.id)),(t.rules||[]).filter(v=>!a.includes(v.id))),drafts:$,tasks:Array.isArray(t.tasks)?t.tasks.map(X):[],composeDrafts:Array.isArray(t.composeDrafts)?t.composeDrafts.map(Oe):[],settings:{...I.settings,...t.settings||{}},completedActions:Array.isArray(t.completedActions)?t.completedActions:[],deletedEmployeeIds:e,deletedRuleIds:a}}function wt(t=[]){return Y(I.categories,t).map(a=>({description:"",color:"default",active:!0,system:!1,...a}))}function yt(t,e,a){return a>=ye&&mt.has(t.workflowState)?t.workflowState:t.status==="Done"||t.workflowStatus==="Completed"||(e==null?void 0:e.status)==="Ready for human send"||(e==null?void 0:e.status)==="Approved"?f.COMPLETED:(e==null?void 0:e.status)==="Saved"?f.DRAFT_SAVED:e!=null&&e.reviewed?f.DRAFT_REVIEWED:e!=null&&e.generated||(e==null?void 0:e.status)==="Generated"?f.DRAFT_GENERATED:t.reviewed||t.reviewedAt?f.READY_FOR_DRAFT:f.NEEDS_REVIEW}function ht(t){const e=new Map;for(const a of t){const o=(a==null?void 0:a.emailId)||(a==null?void 0:a.id);if(!o)continue;const n=e.get(o);(!n||Ce(a)>Ce(n))&&e.set(o,a)}return[...e.values()]}function Ce(t){return({"Needs approval":0,Generated:1,Saved:3,"Ready for human send":4,Approved:4}[t.status]||0)+(t.generated?1:0)+(t.reviewed?1:0)}function bt(t,e){return!t||!e?!1:!!(t.generated||t.reviewed||["Generated","Saved","Ready for human send","Approved"].includes(t.status)||[f.DRAFT_GENERATED,f.DRAFT_REVIEWED,f.DRAFT_SAVED,f.COMPLETED].includes(e.workflowState))}function $t(t){const{generated:e,reviewed:a,status:o,...n}=m(t);return{...n,emailId:t.emailId||t.id}}function X(t){const e=t.followUp&&typeof t.followUp=="object"?t.followUp:{},a=!!(e.enabled&&e.dueAt);return{id:t.id||`task-${t.emailId||Date.now()}`,emailId:t.emailId||"",title:t.title||"Review email",description:t.description||"",priority:t.priority||"Medium",category:t.category||"General",assignedTo:t.assignedTo||"",status:t.status==="Done"?"Done":"Open",notes:t.notes||"",followUp:{enabled:a,dueAt:a?e.dueAt:null,createdAt:a?e.createdAt||t.createdAt||new Date().toISOString():null,updatedAt:a?e.updatedAt||t.updatedAt||new Date().toISOString():null},history:Array.isArray(t.history)?t.history:[],createdAt:t.createdAt||new Date().toISOString(),updatedAt:t.updatedAt||t.createdAt||new Date().toISOString(),completedAt:t.completedAt||null}}function Oe(t){var e,a,o,n;return{id:t.id||`compose-${Date.now()}`,to:((e=t.to)==null?void 0:e.trim())||"",cc:((a=t.cc)==null?void 0:a.trim())||"",subject:((o=t.subject)==null?void 0:o.trim())||"",body:((n=t.body)==null?void 0:n.trim())||"",attachments:Array.isArray(t.attachments)?t.attachments.map(i=>({id:i.id||`attachment-${Date.now()}`,name:i.name||"Local attachment",type:i.type||"Unknown",size:Number(i.size)||0})):[],status:"Draft",createdAt:t.createdAt||new Date().toISOString(),updatedAt:t.updatedAt||t.createdAt||new Date().toISOString()}}function kt(t){const e=Oe(t);if(!e.to)throw new Error("Recipient is required.");if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.to))throw new Error("Enter a valid recipient email.");if(!e.subject)throw new Error("Subject is required.");if(!e.body)throw new Error("Message body is required.");return e}function Y(t,e=[]){const a=Array.isArray(e)?e:[],o=t.map(i=>{const d=a.find(g=>g.id===i.id);return d?{...i,...d}:m(i)}),n=a.filter(i=>!t.some(d=>d.id===i.id));return[...o,...n.map(m)]}function h(){window.localStorage.setItem(J,JSON.stringify(c))}function At(){try{const t=window.localStorage.getItem(ue);if(!t)return null;const e=JSON.parse(t);return he.find(a=>a.id===e.id)||null}catch{return null}}function qe(){if(!E){window.localStorage.removeItem(ue);return}window.localStorage.setItem(ue,JSON.stringify({id:E.id}))}function _(){return(E==null?void 0:E.role)==="Employee"}function ae(){return(E==null?void 0:E.employeeId)||""}function D(){if(E&&E.role!=="Admin")throw new Error("This demo account cannot access admin-only actions.")}function St(){try{const t=window.localStorage.getItem(we);return t?JSON.parse(t):[{id:"assistant-welcome",role:"assistant",text:"Hi, I can help with urgent emails, invoices, drafts, digest updates, rules, and explanations."}]}catch{return[{id:"assistant-welcome",role:"assistant",text:"Hi, I can help with urgent emails, invoices, drafts, digest updates, rules, and explanations."}]}}function Dt(){window.localStorage.setItem(we,JSON.stringify(W))}function Et(){return c.settings.allowLowRiskBulkApproval!=="No"}function Ct(){return!0}function S(t){return t.workflowState===f.COMPLETED}function be(t){const e=c.emails.find(a=>a.id===(t.emailId||t.id));return(e==null?void 0:e.workflowState)===f.DRAFT_SAVED}function Z(t){return{[f.NEEDS_REVIEW]:"Review required",[f.READY_FOR_DRAFT]:"Draft needed",[f.DRAFT_GENERATED]:"Draft generated",[f.DRAFT_REVIEWED]:"Draft in review",[f.DRAFT_SAVED]:"Draft saved",[f.COMPLETED]:"Completed"}[t]||"Review required"}function Ue(t){return{[f.DRAFT_GENERATED]:"Generated",[f.DRAFT_REVIEWED]:"In review",[f.DRAFT_SAVED]:"Saved",[f.COMPLETED]:"Ready for human send"}[t]||"No draft"}function R(t,e={}){c.completedActions.unshift({id:`action-${Date.now()}-${Math.random().toString(16).slice(2)}`,type:t,completedAt:new Date().toISOString(),...e}),c.completedActions=c.completedActions.slice(0,50)}function je(t,e){t.workflowState=f.COMPLETED,e.approvedAt=new Date().toISOString(),e.updatedAt=e.approvedAt,R("draft-approved",{emailId:t.id,draftId:e.id,label:`Draft approved and workflow completed: ${t.subject}`})}function L(t){const e=c.emails.find(d=>d.id===(t.emailId||t.id)),a=S(e||{})?"Done":"Open",o=S(e||{}),n=(e==null?void 0:e.workflowState)===f.DRAFT_SAVED,i=Ue(e==null?void 0:e.workflowState);return{...t,sourceEmailStatus:a,sourceWorkflowStatus:Z(e==null?void 0:e.workflowState),approvalState:o?"ready_for_human_send":(e==null?void 0:e.workflowState)===f.DRAFT_SAVED?"saved":(e==null?void 0:e.workflowState)===f.DRAFT_GENERATED?"generated":"needs_review",status:i,statusLabel:i,isReadyForHumanSend:o,canApprove:n,canSelectForBulkApproval:n,approvalBlocker:n?"":o?"Source email is completed.":"Review and save this draft before approving."}}function Q(t){const e=oe(t.id),a=Ct(),o=!!e,n=S(t),i=n,d=t.workflowState!==f.NEEDS_REVIEW;return{...t,archived:!!t.archivedAt,reviewed:d,status:i?"Done":"Open",workflowStatus:Z(t.workflowState),requiresDraft:a,draftId:o&&(e==null?void 0:e.id)||null,draftStatus:o?Ue(t.workflowState):null,draftStatusLabel:o?L(e).statusLabel:"No draft",draftReadyForHumanSend:n,workflowLabel:Z(t.workflowState),canComplete:!1,completeActionLabel:"Completed",draftActionLabel:i?"View approved draft":o?"Edit draft":"Generate draft",canGenerateDraft:t.workflowState===f.READY_FOR_DRAFT&&!o,canOpenDraft:o,canArchive:!o||i,archiveBlocker:o&&!i?"Finish the active draft before removing this email from the demo inbox.":"",completionBlocker:d?i?"This workflow is complete.":o?"Open the existing draft to continue this workflow.":"":"Review this email before generating a draft."}}function _e(t){return t.urgency==="High"||t.category===A("cat-client-complaint","Client complaint")?"High":t.urgency==="Low"?"Low":"Medium"}function Te(t){return{High:0,Medium:1,Low:2}[t.priority]??3}function Tt(t){const e=new Date().toISOString();return X({id:`task-${t.id}`,emailId:t.id,title:t.suggestedAction||`Review ${t.subject}`,description:t.summary||t.explanation||t.subject,priority:_e(t),category:t.category,assignedTo:t.assignedTo||"",status:"Open",notes:"",history:[{at:e,label:"Task created from local inbox item"}],createdAt:e,updatedAt:e})}function $e(){const t=new Set(c.tasks.map(e=>e.emailId));ie().filter(e=>!S(e)).forEach(e=>{t.has(e.id)||c.tasks.push(Tt(e))}),c.tasks=c.tasks.map(e=>{const a=c.emails.find(o=>o.id===e.emailId);return X(a?{...e,title:e.title||a.suggestedAction,description:e.description||a.summary||a.explanation,priority:e.priority||_e(a),assignedTo:e.assignedTo||a.assignedTo||"",category:a.category}:e)})}function ke(t){var g;const e=c.emails.find(b=>b.id===t.emailId),a=c.employees.find(b=>b.id===t.assignedTo)||null,o=(g=t.followUp)!=null&&g.enabled?t.followUp.dueAt:null,n=Array.isArray(t.history)?t.history:[],i=n.at(-1)||null,d=!!(o&&t.status!=="Done"&&new Date(o).getTime()<Date.now());return{...t,followUp:{...t.followUp,status:o?d?"overdue":"scheduled":"not_scheduled",overdue:d},historySummary:{count:n.length,latestLabel:(i==null?void 0:i.label)||"",latestAt:(i==null?void 0:i.at)||null},assignedEmployee:a?m(a):null,sourceEmail:e?Q(e):null,hiddenFromInbox:!!(e!=null&&e.archivedAt),sourceCompleted:e?S(e):!1}}function T(t){const e=c.emails.find(a=>a.id===t);if(!e)throw new Error("Email not found.");return e}function se(t){const e=c.drafts.find(a=>a.id===t);if(!e)throw new Error("Draft not found.");return e}function oe(t){return c.drafts.find(e=>(e.emailId||e.id)===t)}function ie(){return c.emails.filter(t=>t.archivedAt?!1:_()?t.assignedTo===ae():!0)}function V(t){const e=c.employees.find(a=>a.id===t);if(!e)throw new Error("Employee not found.");return e}function Pe(t){const e=c.categories.find(a=>a.id===t);if(!e)throw new Error("Category not found.");return e}function He(t){return c.categories.find(e=>e.name.toLowerCase()===String(t||"").trim().toLowerCase())}function Be(t,e=null){var n,i;const a={name:((n=t.name)==null?void 0:n.trim())||"",description:((i=t.description)==null?void 0:i.trim())||"",color:t.color||"default"};if(!a.name)throw new Error("Category name is required.");if(c.categories.find(d=>d.id!==e&&d.name.toLowerCase()===a.name.toLowerCase()))throw new Error("A category with this name already exists.");return a}function Rt(t,e){c.emails.forEach(a=>{a.category===t&&(a.category=e)}),c.rules.forEach(a=>{a.category===t&&(a.category=e)})}function A(t,e){var a;return((a=c.categories.find(o=>o.id===t))==null?void 0:a.name)||e}function Ft(){const t={"Client complaint":A("cat-client-complaint","Client complaint"),Accounting:A("cat-accounting","Accounting"),Sales:A("cat-sales","Sales"),Documents:A("cat-documents","Documents"),"Missing documents":A("cat-missing-documents","Missing documents"),Scheduling:A("cat-scheduling","Scheduling"),General:A("cat-general","General")},e=m(pt);return e.mailboxes=e.mailboxes.map(a=>({...a,categories:a.categories.map(o=>t[o]||o)})),e}function We(t,e=null){var n,i,d,g;const a={name:((n=t.name)==null?void 0:n.trim())||"",email:((i=t.email)==null?void 0:i.trim().toLowerCase())||"",title:((d=t.title)==null?void 0:d.trim())||"",department:((g=t.department)==null?void 0:g.trim())||""};if(!a.name)throw new Error("Employee name is required.");if(!a.email)throw new Error("Employee email is required.");if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(a.email))throw new Error("Enter a valid employee email address.");if(!a.title)throw new Error("Employee title is required.");if(!a.department)throw new Error("Employee department is required.");if(c.employees.find(b=>{var $;return b.id!==e&&(($=b.email)==null?void 0:$.trim().toLowerCase())===a.email}))throw new Error("An employee with this email already exists.");return a}function xt(){const t=ie().filter(d=>!S(d)),e=c.drafts.map(L),a=e.filter(d=>d.isReadyForHumanSend).length,o=e.filter(d=>d.canSelectForBulkApproval).length,n=d=>t.filter(g=>g.category===d),i=t.filter(d=>d.urgency==="High");return{generatedAt:new Date().toLocaleTimeString([],{hour:"numeric",minute:"2-digit"}),headline:`${t.length} open emails need review. ${i.length} are urgent and ${o} drafts need approval.`,urgentItems:i.map(d=>d.subject),draftsAwaitingApproval:o,readyForHumanSend:a,invoices:n(A("cat-accounting","Accounting")).map(d=>d.subject),missingDocuments:n(A("cat-missing-documents","Missing documents")).map(d=>d.subject),quoteRequests:n(A("cat-sales","Sales")).map(d=>d.subject),clientComplaints:n(A("cat-client-complaint","Client complaint")).map(d=>d.subject),recommendedActions:[i.length?"Review urgent client items first.":"No urgent client escalations are open.",o?"Review drafts before marking them ready for human send.":"No drafts are waiting for approval.","Keep observation mode on while this remains a demo."]}}function It(){const t=c.rules.find(a=>/invoice/i.test(`${a.title} ${a.desc}`));if(t)return t.on=!0,h(),t;const e={id:`rule-${Date.now()}`,title:"Invoice intake assistant",desc:"Flag invoice messages, payment questions, due dates, and supplier follow-ups for accounting review.",category:A("cat-accounting","Accounting"),confidence:84,explanation:"Courio would look for invoice numbers, balance-due wording, supplier names, and payment timing.",impact:"Created locally from the assistant chat. It only previews matches in this prototype.",matches:c.emails.filter(a=>a.category===A("cat-accounting","Accounting")).map(a=>a.subject),on:!0};return c.rules.push(e),h(),e}function Nt(t){return t.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9\s]/g," ").replace(/\s+/g," ")}function Lt(t,e){const a=Array.from({length:e.length+1},(o,n)=>n);for(let o=1;o<=t.length;o+=1){let n=a[0];a[0]=o;for(let i=1;i<=e.length;i+=1){const d=a[i],g=t[o-1]===e[i-1]?0:1;a[i]=Math.min(a[i]+1,a[i-1]+1,n+g),n=d}}return a[e.length]}function Mt(t,e){if(t.length!==e.length)return!1;const a=[];for(let o=0;o<t.length;o+=1)t[o]!==e[o]&&a.push(o);return a.length===2&&a[1]===a[0]+1&&t[a[0]]===e[a[1]]&&t[a[1]]===e[a[0]]}function M(t,e){const a=t.split(" ").filter(Boolean);return e.some(o=>o.includes(" ")?t.includes(o):a.some(n=>{if(n===o||Mt(n,o))return!0;const i=o.length>=7?2:o.length>=4?1:0;return i>0&&Math.abs(n.length-o.length)<=i&&Lt(n,o)<=i}))}function Ot(t,e={}){const a=Nt(t),o=ie(),n=o.filter(v=>!S(v)&&v.urgency==="High").length,i=A("cat-accounting","Accounting"),d=o.filter(v=>!S(v)&&v.category===i).length,g=c.drafts.map(L).filter(v=>v.canSelectForBulkApproval).length,b=M(a,["invoice","invoices","accounting"]),$=M(a,["rule","rules","create rule"]);if(M(a,["urgent","urgency"]))return{text:`${n} urgent emails are open. I switched Triage to urgent items.`,action:{type:"show_triage",filter:"urgent"}};if(M(a,["triage","inbox","show inbox","open inbox"]))return{text:"I opened the full Triage inbox.",action:{type:"show_triage",filter:"all"}};if(b&&$)return{text:"Invoice rule is ready in observation mode. It is still fake/local and will not touch a mailbox.",action:{type:"show_rule",ruleId:It().id}};if(b)return{text:`${d} invoice-related emails are open. I switched Triage to ${i}.`,action:{type:"show_triage",filter:"invoices"}};if(M(a,["draft","drafts","approval","approve"]))return{text:`${g} saved drafts need human approval. I opened the Drafts queue.`,action:{type:"show_drafts",filter:"needs_approval"}};if(M(a,["digest","morning digest"]))return{text:"I regenerated the morning digest from local demo data.",action:{type:"generate_digest"}};if(M(a,["explain","explanation","why"])){if(!e.selectedEmailId)return{text:"Open an email in Triage first, then ask me to explain it. I will show the flagged reason."};const v=Q(T(e.selectedEmailId));return{text:`Courio flagged "${v.subject}" because: ${v.explanation}`,action:{type:"explain_email",emailId:v.id}}}return M(a,["reset","restart"])?{text:"I can reset the fake demo data now. The page will reload so defaults come back clean.",action:{type:"reset_demo_data"}}:{text:"I did not catch that. Try one of the command hints below."}}async function F(){return await p(),m(ie().map(Q))}async function qt(){return await p(150),m(he)}async function Ve(){return await p(150),m(E)}async function Ut(t){await p(250);const e=he.find(a=>a.id===t);if(!e)throw new Error("Demo account not found.");return E=e,qe(),m(E)}async function jt(){return await p(150),E=null,qe(),null}async function C(){return await p(350),$e(),h(),m(c.tasks.map(ke).filter(t=>!t.hiddenFromInbox).filter(t=>!_()||t.assignedTo===ae()).sort((t,e)=>Te(t)-Te(e)||(t.status==="Done")-(e.status==="Done")||t.createdAt.localeCompare(e.createdAt)))}async function me(){return await p(350),m(c.employees)}async function ze(){return await p(300),m(c.categories)}async function U(){return await p(400),_()?[]:m(c.rules)}async function Ge(){return await p(350),Ft()}async function N(){return await p(700),m(xt())}async function j(){return await p(400),_()?[]:m(c.drafts.map(L))}async function Ae(){return await p(350),m([...c.composeDrafts].sort((t,e)=>e.updatedAt.localeCompare(t.updatedAt)))}async function _t(t){await p(500);const e=kt(t),a=c.composeDrafts.findIndex(i=>i.id===e.id),o=new Date().toISOString(),n={...e,id:a===-1?`compose-${Date.now()}`:e.id,createdAt:a===-1?o:c.composeDrafts[a].createdAt,updatedAt:o};return a===-1?c.composeDrafts.unshift(n):c.composeDrafts[a]=n,R("compose-draft-saved",{draftId:n.id,label:`Compose draft saved: ${n.subject}`}),h(),m(n)}async function z(t){await p(450);const e=se(t),a=T(e.emailId||e.id);return a.workflowState===f.DRAFT_GENERATED&&(a.workflowState=f.DRAFT_REVIEWED,e.reviewedAt=new Date().toISOString(),e.updatedAt=e.reviewedAt,h()),m({...L(e),sourceEmail:{id:a.id,subject:a.subject,sender:a.sender,senderEmail:a.senderEmail,body:a.body,suggestedAction:a.suggestedAction,confidence:a.confidence,urgency:a.urgency,status:S(a)?"Done":"Open",workflowStatus:Z(a.workflowState)}})}async function Pt(t){await p(350),T(t);const e=oe(t);return e?z(e.id):null}async function Ht(){return await p(250),m(c.settings)}async function Bt(t){return await p(450),D(),c.settings={...c.settings,...t,language:t.language?t.language==="fr"?"fr":"en":c.settings.language,approvalRequired:!0,autoSend:!1},h(),m(c.settings)}async function Wt(){return await p(350),D(),window.localStorage.removeItem(J),window.localStorage.removeItem(we),m(I)}async function Qe(t){await p();const e=T(t);return e.workflowState===f.NEEDS_REVIEW&&(e.workflowState=f.READY_FOR_DRAFT,e.reviewedAt=new Date().toISOString(),h()),m({...Q(e),messages:e.thread})}async function Vt(t){return await p(700),T(t).summary}async function zt(t){await p(750);const e=T(t);if(S(e))throw new Error("This email is done. Reopen it before creating or changing a draft.");if(e.workflowState===f.NEEDS_REVIEW)throw new Error("Review this email before generating a draft.");const a=oe(t);if(a)return m(L(a));if(e.workflowState!==f.READY_FOR_DRAFT)throw new Error("This workflow is not ready to generate a new draft.");const o=new Date().toISOString(),n={id:`draft-${t}`,emailId:t,title:e.suggestedAction,source:e.subject,text:e.draft,confidence:e.confidence,risk:e.urgency==="High"?"High":"Low",createdAt:o,updatedAt:o};return c.drafts.push(n),e.workflowState=f.DRAFT_GENERATED,h(),m(L(n))}async function Gt(t,e){if(await p(),!e||e.trim().length<10)throw new Error("Draft is too short to save.");const a=se(t),o=T(a.emailId||a.id);if(S(o))throw new Error("This email is done. Reopen it before editing the draft.");if(![f.DRAFT_REVIEWED,f.DRAFT_SAVED].includes(o.workflowState))throw new Error("Review this draft before saving it.");return a.text=e,a.updatedAt=new Date().toISOString(),o.workflowState=f.DRAFT_SAVED,h(),m(L(a))}async function Qt(t){await p(),D();const e=se(t),a=T(e.emailId||e.id);if(S(a))throw new Error("This email is done. Reopen it before changing draft approval.");if(!be(e))throw new Error("Review this draft before approving.");return je(a,e),h(),m(L(e))}async function Ye(t){if(await p(650),D(),!t.length)throw new Error("Select at least one draft first.");const e=t.map(o=>{const n=se(o),i=T(n.emailId||n.id);return{draft:n,email:i}}).filter(({email:o})=>!S(o));if(!e.length)throw new Error("No selected drafts could be approved.");if(e.some(({draft:o})=>!be(o)))throw new Error("Review this draft before approving.");const a=[];for(const{draft:o,email:n}of e)je(n,o),a.push(o.id);return h(),m({approved:a})}async function Yt(){if(await p(700),D(),!Et())throw new Error("Low-risk bulk approval is disabled by workspace settings.");const t=c.drafts.filter(e=>e.risk!=="High").filter(be).filter(e=>!S(T(e.emailId||e.id))).map(e=>e.id);if(!t.length)throw new Error("No low-risk drafts are awaiting approval.");return Ye(t)}async function Re(t){await p(450),D();const e=c.rules.find(a=>a.id===t);if(!e)throw new Error("Rule not found.");return e.on=!e.on,h(),m(e)}async function Kt(t,e){var o,n;await p(500),D();const a=c.rules.find(i=>i.id===t);if(!a)throw new Error("Rule not found.");if(!((o=e.title)!=null&&o.trim()))throw new Error("Rule name is required.");if(!((n=e.desc)!=null&&n.trim()))throw new Error("Rule description is required.");if(e.category&&!He(e.category))throw new Error("Choose an existing category before saving.");return a.title=e.title.trim(),a.desc=e.desc.trim(),a.category=e.category||a.category,h(),m(a)}async function Jt(t){await p(450),D();const e=c.rules.findIndex(o=>o.id===t);if(e===-1)throw new Error("Rule not found.");const[a]=c.rules.splice(e,1);return c.deletedRuleIds=[...new Set([...c.deletedRuleIds||[],t])],R("rule-deleted",{ruleId:a.id,label:`Rule deleted: ${a.title}`}),h(),m(a)}async function Xt(t,e){if(await p(400),!e)throw new Error("Choose a category before saving.");if(!He(e))throw new Error("Choose an existing category before saving.");const a=T(t);return a.category=e,h(),m(a)}async function Zt(t,e="Removed from demo inbox"){await p(500);const a=[...new Set((t||[]).filter(Boolean))];if(!a.length)throw new Error("Choose at least one email to remove from the demo inbox.");const o=new Date().toISOString(),n=a.map(i=>{const d=T(i),g=oe(d.id),b=S(d);if(g&&!b)throw new Error("Finish active drafts before removing those emails from the demo inbox.");return d.archivedAt=o,d.archiveReason=e,d});return R("emails-archived",{emailIds:n.map(i=>i.id),label:`${n.length} email${n.length===1?"":"s"} removed from the demo inbox`}),h(),m(n.map(Q))}async function pe(t,e={}){await p(400),$e();const a=c.tasks.find(i=>i.id===t);if(!a)throw new Error("Task not found.");if(_()&&a.assignedTo!==ae())throw new Error("This demo employee can only update assigned tasks.");const o=a.status==="Done",n=new Date().toISOString();if(e.assignedTo!==void 0){if(_())throw new Error("Only the demo admin can reassign tasks.");e.assignedTo&&V(e.assignedTo),a.assignedTo=e.assignedTo,a.history=[...a.history||[],{at:n,label:e.assignedTo?`Assigned to ${V(e.assignedTo).name}`:"Returned to Unassigned"}]}return e.notes!==void 0&&(a.notes=String(e.notes).trim()),e.status!==void 0&&(a.status=e.status==="Done"?"Done":"Open",a.completedAt=a.status==="Done"?a.completedAt||n:null,a.history=[...a.history||[],{at:n,label:a.status==="Done"?"Marked complete":"Reopened"}]),a.updatedAt=n,!o&&a.status==="Done"&&R("task-completed",{taskId:a.id,emailId:a.emailId,label:`Task completed: ${a.title}`}),h(),m(ke(a))}async function Fe(t,e={}){var d;await p(400),$e();const a=c.tasks.find(g=>g.id===t);if(!a)throw new Error("Task not found.");if(_()&&a.assignedTo!==ae())throw new Error("This demo employee can only update assigned tasks.");const o=!!e.enabled,n=new Date().toISOString();let i=null;if(o){const g=e.dueAt?new Date(`${e.dueAt}T17:00:00`):new Date(Date.now()+2592e5);if(Number.isNaN(g.getTime()))throw new Error("Choose a valid follow-up date.");i=g.toISOString()}return a.followUp={enabled:o,dueAt:i,createdAt:o?((d=a.followUp)==null?void 0:d.createdAt)||n:null,updatedAt:o?n:null},a.updatedAt=n,a.history=[...a.history||[],{at:n,label:o?`Follow-up scheduled for ${i.slice(0,10)}`:"Follow-up reminder removed"}],R(o?"follow-up-scheduled":"follow-up-removed",{taskId:a.id,emailId:a.emailId,dueAt:i,label:o?`Follow-up scheduled: ${a.title}`:`Follow-up removed: ${a.title}`}),h(),m(ke(a))}async function ea(t){await p(450),D();const e=Be(t),a={id:`cat-${Date.now()}`,...e,active:!0,system:!1};return c.categories.push(a),R("category-added",{categoryId:a.id,label:`Category added: ${a.name}`}),h(),m(a)}async function ta(t,e){await p(450),D();const a=Pe(t),o=Be(e,t),n=a.name;return Object.assign(a,o),n!==a.name&&Rt(n,a.name),R("category-updated",{categoryId:a.id,label:`Category updated: ${a.name}`}),h(),m(a)}async function aa(t){await p(400),D();const e=Pe(t);return e.active=!e.active,R("category-toggled",{categoryId:e.id,label:`${e.active?"Category restored":"Category archived"}: ${e.name}`}),h(),m(e)}async function sa(t,e){await p(400),D(),e&&V(e);const a=T(t);a.assignedTo=e;const o=c.tasks.find(n=>n.emailId===t);return o&&(o.assignedTo=e,o.updatedAt=new Date().toISOString(),o.history=[...o.history||[],{at:o.updatedAt,label:e?`Assigned from email to ${V(e).name}`:"Returned to Unassigned from email"}]),h(),m(a)}async function oa(t){await p(500),D();const e=We(t),a={id:`employee-${Date.now()}`,...e};return c.employees.push(a),R("employee-added",{employeeId:a.id,label:`Employee added: ${a.name}`}),h(),m(a)}async function ia(t,e){await p(500),D();const a=V(t),o=We(e,t);return Object.assign(a,o),R("employee-updated",{employeeId:a.id,label:`Employee updated: ${a.name}`}),h(),m(a)}async function na(t){await p(500),D();const e=c.employees.findIndex(n=>n.id===t);if(e===-1)throw new Error("Employee not found.");const[a]=c.employees.splice(e,1);c.deletedEmployeeIds=[...new Set([...c.deletedEmployeeIds||[],t])];let o=0;return c.emails.forEach(n=>{n.assignedTo===t&&(n.assignedTo="",o+=1)}),c.tasks.forEach(n=>{n.assignedTo===t&&(n.assignedTo="",n.updatedAt=new Date().toISOString(),n.history=[...n.history||[],{at:n.updatedAt,label:"Assigned employee was removed; task returned to Unassigned"}])}),R("employee-deleted",{employeeId:a.id,label:`Employee removed: ${a.name}. ${o} assigned emails returned to Unassigned.`}),h(),m(a)}async function k(){return await p(250),m(c.completedActions)}async function ra(){return await p(150),m(W)}async function la(t,e={}){if(await p(500),!(t!=null&&t.trim()))throw new Error("Type a command first.");const a={id:`user-${Date.now()}`,role:"user",text:t.trim()},o=Ot(t,e),n={id:`assistant-${Date.now()}`,role:"assistant",text:o.text};return W=[...W,a,n].slice(-24),Dt(),m({messages:W,action:o.action||null})}const da=document.querySelector("#app"),Ke=new Set(["dashboard","import","triage","tasks","compose","rules","drafts","admin"]),s={tab:"dashboard",demoAccounts:[],session:null,emails:[],categories:[],employees:[],rules:[],drafts:[],tasks:[],composeDrafts:[],settings:{companyName:"Demo PME Inc.",language:"en",mode:"Simple",defaultMode:"Observation only",escalationRecipient:"owner@company.ca",approvalRequired:!0,autoSend:!1},settingsForm:null,loading:{emails:!0,rules:!0,drafts:!0},busy:{},selectedEmail:null,selectedCategory:null,selectedDraft:null,selectedRule:null,selectedEmployee:null,selectedTask:null,selectedDraftIds:[],confirmDialog:null,digest:null,triageFilter:"all",triageCategoryFilter:"all",taskAssigneeFilter:"all",taskFollowUpFilter:"all",draftFilter:"all",ruleQuery:"",assistantOpen:!1,assistantMessages:[],activity:[],setupPreview:null,selectedSetupMailboxId:"",composeForm:{id:"new",to:"",cc:"",subject:"",body:"",attachments:[]},summary:"",showExplanation:!1};da.innerHTML=`
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
`;function xe(t,e){s.busy[t]=e,y()}async function w(t,e,a){try{xe(t,!0),await e(),a&&G(a)}catch(o){G(o.message||"Something went wrong in the mock workflow.",!0)}finally{xe(t,!1)}}function u(t){return!!s.busy[t]}function G(t,e=!1){const a=document.querySelector("#toast");a.textContent=t,a.classList.toggle("error",e),a.classList.add("show"),window.clearTimeout(a.dataset.timer),a.dataset.timer=window.setTimeout(()=>a.classList.remove("show"),2400)}function K(){var t;return((t=s.session)==null?void 0:t.role)==="Admin"}function Se(){var t;return((t=s.session)==null?void 0:t.role)==="Employee"}function ca(){return s.session?Se()?new Set(["triage","tasks","compose"]):Ke:new Set([])}function ee(t){return ca().has(t)}function O(t,e={}){if(!Ke.has(t)||!ee(t))throw new Error("That Courio section is unavailable.");const a=s.tab;a==="admin"&&t!=="admin"&&(s.settingsForm=null),t==="admin"&&a!=="admin"&&(s.settingsForm={...s.settings}),s.tab=t,e.triageFilter&&(s.triageFilter=e.triageFilter),e.draftFilter&&(s.draftFilter=e.draftFilter),e.closeDrawers!==!1&&(s.selectedEmail=null,s.selectedCategory=null,s.selectedDraft=null,s.selectedRule=null,s.selectedEmployee=null,s.summary="",s.showExplanation=!1),y()}async function ge(t=(e=>(e=s.selectedEmail)==null?void 0:e.id)()){if(s.emails=await F(),t){const a=s.emails.find(o=>o.id===t);s.selectedEmail=a?{...a,messages:a.thread}:null}}async function Ie(t=(e=>(e=s.selectedCategory)==null?void 0:e.id)()){const[a,o,n,i,d,g,b]=await Promise.all([ze(),F(),U(),C(),N(),Ge(),k()]);s.categories=a,s.emails=o,s.rules=n,s.tasks=i,s.digest=d,s.setupPreview=g,s.activity=b,s.selectedCategory=t&&a.find($=>$.id===t)||null}async function Ne(){const[t,e,a,o,n,i,d]=await Promise.all([Ve(),F(),C(),j(),Ae(),N(),k()]);s.session=t,s.emails=e,s.tasks=a,s.drafts=o,s.composeDrafts=n,s.digest=i,s.activity=d,s.selectedEmail=null,s.selectedDraft=null,s.selectedRule=null,s.selectedEmployee=null,s.selectedCategory=null}function ua(t){return!!(t!=null&&t.isReadyForHumanSend)}function De(){return s.settings.mode==="Advanced"}function Je(t=""){const e=s.categories.filter(o=>o.active),a=t?s.categories.find(o=>o.name===t):null;return a&&!e.some(o=>o.id===a.id)?[...e,a]:e}function ma(t,e){var a;return((a=s.categories.find(o=>o.id===t))==null?void 0:a.name)||e}function pa(){const t=new Map;return s.categories.forEach(e=>{e.active&&t.set(e.name,e)}),s.emails.forEach(e=>{t.has(e.category)||t.set(e.category,{id:`current-${e.category}`,name:e.category,active:!0})}),[...t.values()].sort((e,a)=>e.name.localeCompare(a.name))}function Xe(){const t=ma("cat-accounting","Accounting");return s.emails.filter(e=>s.triageCategoryFilter!=="all"&&e.category!==s.triageCategoryFilter?!1:s.triageFilter==="urgent"?e.status!=="Done"&&e.urgency==="High":s.triageFilter==="invoices"?e.status!=="Done"&&e.category===t:!0)}function ne(){return{id:"new",to:"",cc:"",subject:"",body:"",attachments:[]}}function ga(t=0){return t<1024?`${t} B`:t<1024*1024?`${Math.round(t/1024)} KB`:`${(t/(1024*1024)).toFixed(1)} MB`}function Ze(){return s.settings.allowLowRiskBulkApproval!=="No"}function re(){return s.settingsForm||{...s.settings}}function fa(){return re().mode==="Advanced"}function le(){return te(s.settings.language)}function l(t){return Me(le())(t)}function et(t){if(!t)return"";const e=new Date(t);return Number.isNaN(e.getTime())?"":e.toLocaleString()}function fe(t){if(!t)return"";const e=new Date(t);return Number.isNaN(e.getTime())?"":e.toLocaleDateString()}function va(){const t=Me(le());document.querySelectorAll("[data-copy]").forEach(e=>{e.textContent=t(e.dataset.copy)})}async function wa(){var t;try{const[e,a,o,n,i,d,g,b,$,v,P,H,B,q]=await Promise.all([qt(),Ve(),F(),ze(),me(),U(),j(),C(),Ae(),Ht(),N(),ra(),k(),Ge()]);s.demoAccounts=e,s.session=a,s.emails=o,s.categories=n,s.employees=i,s.rules=d,s.drafts=g,s.tasks=b,s.composeDrafts=$,s.settings={...s.settings,...v},s.settingsForm=null,s.digest=P,s.assistantMessages=H,s.activity=B,s.setupPreview=q,s.selectedSetupMailboxId=((t=q.mailboxes[0])==null?void 0:t.id)||"",s.session&&!ee(s.tab)&&(s.tab=Se()?"tasks":"dashboard")}catch(e){G(e.message||"Could not load mock data.",!0)}finally{s.loading.emails=!1,s.loading.rules=!1,s.loading.drafts=!1,y()}}function y(){s.session&&!ee(s.tab)&&(s.tab=Se()?"tasks":"dashboard");const t=it(s.tab,le());va(),document.querySelector("#pageTitle").textContent=t[0],document.querySelector("#pageSubtitle").textContent=t[1],document.querySelectorAll(".section").forEach(e=>{e.classList.toggle("active",e.id===s.tab)}),document.querySelectorAll(".nav button").forEach(e=>{e.hidden=!ee(e.dataset.tab),e.classList.toggle("active",e.dataset.tab===s.tab)}),ya(),tt(),ha(),ve(),at(),st(),Fa(),Na(),ba(),$a(),xa(),ka()}function ya(){const t=s.emails.filter(a=>a.status!=="Done").length,e=s.digest;document.querySelector("#dashboard").innerHTML=`
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
        <div class="value">${s.drafts.filter(ua).length||0}</div>
        <div class="caption">Human approval still required to send</div>
      </div>
    </div>
    <div class="grid cols-2 stack-md">
      <div class="panel">
        <div class="panel-title"><h2>Morning digest</h2><span>${e?`Generated ${r(e.generatedAt)}`:"Loading..."}</span></div>
        <p class="subtitle">${e?r(e.headline):"Preparing a local demo digest from mock emails and drafts."}</p>
        ${e?`
          <table class="table stack-sm">
            <tr><td>Urgent items</td><td>${e.urgentItems.length?x(e.urgentItems):"None"}</td></tr>
            <tr><td>Invoices</td><td>${e.invoices.length?x(e.invoices):"None"}</td></tr>
            <tr><td>Missing documents</td><td>${e.missingDocuments.length?x(e.missingDocuments):"None"}</td></tr>
            <tr><td>Quote requests</td><td>${e.quoteRequests.length?x(e.quoteRequests):"None"}</td></tr>
            <tr><td>Client complaints</td><td>${e.clientComplaints.length?x(e.clientComplaints):"None"}</td></tr>
          </table>
        `:""}
        <div class="actions stack-sm">
          <button class="btn primary" data-action="digest" ${u("digest")?"disabled":""}>${u("digest")?"Regenerating...":"Regenerate digest"}</button>
          <button class="btn subtle" data-tab-target="triage">Review triage</button>
        </div>
      </div>
      <div class="panel">
        <div class="panel-title"><h2>Recommended next actions</h2><span>${(e==null?void 0:e.recommendedActions.length)||0} items</span></div>
        <table class="table">
          ${((e==null?void 0:e.recommendedActions)||["Digest is loading."]).map(a=>`<tr><td><span class="badge lead">Action</span></td><td>${r(a)}</td></tr>`).join("")}
          ${De()?`<tr><td><span class="badge invoice">Advanced</span></td><td>${s.rules.filter(a=>a.on).length} rules are currently enabled.</td></tr>`:""}
        </table>
      </div>
    </div>
  `}function tt(){const t=s.setupPreview;if(!t){document.querySelector("#import").innerHTML='<div class="loading">Loading simulated setup preview...</div>';return}const e=t.mailboxes.find(a=>a.id===s.selectedSetupMailboxId)||t.mailboxes[0];document.querySelector("#import").innerHTML=`
    <div class="grid cols-2">
      <div class="panel">
        <div class="panel-title"><h2>${r(t.status)}</h2><span>No account connected</span></div>
        <div class="preview">${r(t.safetyNote)}</div>
        <div class="preview stack-xs">${r(t.futureNote)}</div>
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
              <strong>${r(a.name)}</strong>
              <span>${r(a.address)}</span>
              <small>${r(a.type)} - ${r(a.volume)}</small>
            </button>
          `).join("")}
        </div>
      </div>
    </div>

    <div class="grid cols-2 stack-md">
      <div class="panel">
        <div class="panel-title"><h2>${r(e.name)} preview</h2><span>${r(e.risk)}</span></div>
        <table class="table">
          <tr><td>Folders</td><td>${x(e.folders)}</td></tr>
          <tr><td>Labels/categories</td><td>${x(e.categories)}</td></tr>
          <tr><td>Frequent senders</td><td>${x(e.frequentSenders)}</td></tr>
          <tr><td>Shared inboxes</td><td>${x(e.sharedInboxes)}</td></tr>
          <tr><td>Recent threads</td><td>${x(e.recentThreads)}</td></tr>
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

    <div class="grid cols-2 stack-md">
      <div class="panel">
        <div class="panel-title"><h2>Simulated setup flow</h2><span>Fake progress</span></div>
        <div class="workflow">
          ${t.setupSteps.map((a,o)=>`
            <div class="step">
              <div class="step-num">${o+1}</div>
              <div><strong>${r(a.title)}</strong><p>${r(a.detail)}</p></div>
              <span class="badge ${o===0?"lead":"done"}">${r(a.state)}</span>
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
        <div class="preview stack-sm">These are local examples. Courio does not create mailbox rules or send email from this page.</div>
      </div>
    </div>
  `}function ha(){const t=Object.fromEntries(s.employees.map(d=>[d.id,d])),e=pa(),a=Xe(),o=a.filter(d=>d.canArchive),n=s.triageCategoryFilter==="all"?l("triage.allCategories"):s.triageCategoryFilter,i=s.loading.emails?'<div class="loading">Loading mock inbox...</div>':a.length===0?`<div class="empty-state">${s.triageFilter==="urgent"?l("triage.emptyUrgent"):s.triageFilter==="invoices"?l("triage.emptyInvoices"):s.triageCategoryFilter!=="all"?l("triage.emptyCategory"):l("triage.emptyAll")}</div>`:`<table class="table">
        <thead><tr><th>Subject</th><th>Sender</th><th>Category</th><th>Assigned</th><th>Workflow</th><th>Status</th><th></th></tr></thead>
        <tbody>
          ${a.map(d=>{var g;return`
            <tr>
              <td>${r(d.subject)}</td>
              <td>${r(d.sender)}<br><small>${r(d.senderEmail||"")}</small></td>
              <td>
                <span class="badge ${de(d.category)}">${r(d.category)}</span><br>
                <small>${r(d.urgency||"Medium")} urgency - ${d.confidence||80}% confidence</small>
                <small class="triage-reason" title="${r(d.explanation||"")}">Why: ${r(d.explanation||"Matched the current local category rules.")}</small>
              </td>
              <td>${r(((g=t[d.assignedTo])==null?void 0:g.name)||"Unassigned")}</td>
              <td>${r(d.workflowLabel||"Not started")}</td>
              <td><span class="badge ${d.status==="Done"?"done":""}">${r(d.status)}</span></td>
              <td class="actions">
                <button class="btn subtle" data-review-email="${d.id}" ${u(`review-${d.id}`)?"disabled":""}>${u(`review-${d.id}`)?"Opening...":"Review"}</button>
                <button class="btn subtle" data-archive-email="${d.id}" ${!d.canArchive||u(`archive-${d.id}`)?`disabled title="${r(d.archiveBlocker||"Remove this fake/local email from the demo inbox.")}"`:""}>${u(`archive-${d.id}`)?l("triage.removing"):l("triage.remove")}</button>
                ${d.status==="Done"?'<span class="status-text">Complete</span>':'<span class="status-text" title="Generate, review, save, and approve a draft to complete this workflow.">Draft required</span>'}
              </td>
            </tr>
          `}).join("")}
        </tbody>
      </table>`;document.querySelector("#triage").innerHTML=`
    <div class="panel">
      <div class="panel-title"><h2>Inbox triage</h2><span>${l("triage.inboxControl")}</span></div>
      <div class="segmented below-sm">
        ${[["all","All inbox"],["urgent","Urgent"],["invoices","Invoices"]].map(([d,g])=>`<button class="${s.triageFilter===d?"active":""}" data-triage-filter="${d}">${g}</button>`).join("")}
      </div>
      <div class="list-toolbar below-sm">
        <select data-triage-category-filter aria-label="${l("triage.categoryFilter")}">
          <option value="all" ${s.triageCategoryFilter==="all"?"selected":""}>${l("triage.allCategories")}</option>
          ${e.map(d=>`<option value="${r(d.name)}" ${s.triageCategoryFilter===d.name?"selected":""}>${r(d.name)}</option>`).join("")}
        </select>
        <button class="btn subtle" data-archive-filtered ${a.length===0||o.length===0||u("archive-filtered")?`disabled title="${l("triage.removeFilteredDisabled")}"`:""}>${u("archive-filtered")?l("triage.removing"):`${l("triage.removeFiltered")} (${o.length})`}</button>
        <span class="mode">${r(n)}</span>
      </div>
      ${i}
    </div>
  `}function ve(){const t=s.tasks.filter(i=>{var b,$;const d=!K()||s.taskAssigneeFilter==="all"||(s.taskAssigneeFilter==="unassigned"?!i.assignedTo:i.assignedTo===s.taskAssigneeFilter),g=s.taskFollowUpFilter==="all"||s.taskFollowUpFilter==="scheduled"&&((b=i.followUp)==null?void 0:b.enabled)||s.taskFollowUpFilter==="overdue"&&(($=i.followUp)==null?void 0:$.overdue);return d&&g}),e=t.filter(i=>i.status!=="Done").length,a=t.filter(i=>i.status!=="Done"&&i.priority==="High").length,o=t.filter(i=>{var d;return(d=i.followUp)==null?void 0:d.overdue}).length,n=t.length===0?`<div class="empty-state">${l("tasks.empty")}</div>`:`<table class="table">
        <thead><tr><th>${l("tasks.done")}</th><th>${l("tasks.task")}</th><th>${l("tasks.priority")}</th><th>${l("tasks.assignedTo")}</th><th>${l("tasks.source")}</th><th>${l("tasks.notes")}</th><th></th></tr></thead>
        <tbody>
          ${t.map(i=>{var d,g,b,$,v,P,H,B;return`
            <tr>
              <td><input type="checkbox" data-task-status="${i.id}" ${i.status==="Done"?"checked":""}></td>
              <td>
                <strong>${r(i.title)}</strong><br>
                <small>${r(i.description)}</small>
                ${(d=i.historySummary)!=null&&d.latestLabel?`
                  <div class="task-history-summary">
                    <span>${l("tasks.latestActivity")}:</span> ${r(i.historySummary.latestLabel)}
                    ${i.historySummary.latestAt?`<small>${r(et(i.historySummary.latestAt))}</small>`:""}
                  </div>
                `:""}
                <div class="follow-up-control">
                  <label class="follow-up-toggle">
                    <input type="checkbox" data-task-follow-up="${i.id}" ${(g=i.followUp)!=null&&g.enabled?"checked":""}>
                    <span>${(b=i.followUp)!=null&&b.enabled?l("tasks.reminderOn"):l("tasks.reminderOff")}</span>
                  </label>
                  ${($=i.followUp)!=null&&$.enabled?`
                    <input class="follow-up-date" type="date" data-task-follow-up-date="${i.id}" value="${r(((v=i.followUp.dueAt)==null?void 0:v.slice(0,10))||"")}" aria-label="${l("tasks.followUpDate")}">
                    <small class="${i.followUp.overdue?"follow-up-overdue":""}">${i.followUp.overdue?l("tasks.overdue"):`${l("tasks.scheduled")} ${fe(i.followUp.dueAt)}`}</small>
                  `:""}
                </div>
              </td>
              <td><span class="badge ${i.priority==="High"?"urgent":i.priority==="Low"?"done":"pending"}">${r(i.priority)}</span><br><small>${r(i.category)}</small></td>
              <td>
                ${K()?`<select data-task-assignee="${i.id}">
                      <option value="" ${i.assignedTo?"":"selected"}>${l("tasks.unassigned")}</option>
                      ${s.employees.map(q=>`<option value="${q.id}" ${i.assignedTo===q.id?"selected":""}>${r(q.name)}</option>`).join("")}
                    </select>`:r(((P=i.assignedEmployee)==null?void 0:P.name)||l("tasks.unassigned"))}
              </td>
              <td>${r(((H=i.sourceEmail)==null?void 0:H.subject)||"Local task")}<br><small>${r(((B=i.sourceEmail)==null?void 0:B.sender)||"Demo inbox")}</small></td>
              <td><textarea data-task-note="${i.id}" placeholder="${l("tasks.notePlaceholder")}">${r(i.notes||"")}</textarea></td>
              <td class="actions">
                ${i.sourceEmail?`<button class="btn subtle" data-review-email="${i.sourceEmail.id}">${l("tasks.reviewEmail")}</button>`:""}
                <button class="btn subtle" data-review-task="${i.id}">${l("tasks.viewHistory")}</button>
                <button class="btn subtle" data-save-task-note="${i.id}" ${u(`task-note-${i.id}`)?"disabled":""}>${u(`task-note-${i.id}`)?l("tasks.saving"):l("tasks.saveNote")}</button>
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
      <div class="panel-title"><h2>${l("tasks.title")}</h2><span>${l("tasks.subtitle")}</span></div>
      ${K()?`
        <div class="list-toolbar task-filters below-sm">
          <select data-task-assignee-filter aria-label="${l("tasks.assigneeFilter")}">
            <option value="all" ${s.taskAssigneeFilter==="all"?"selected":""}>${l("tasks.allAssignees")}</option>
            <option value="unassigned" ${s.taskAssigneeFilter==="unassigned"?"selected":""}>${l("tasks.unassigned")}</option>
            ${s.employees.map(i=>`<option value="${i.id}" ${s.taskAssigneeFilter===i.id?"selected":""}>${r(i.name)}</option>`).join("")}
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
  `}function at(){const t=s.composeForm||ne(),e=t.attachments.length?`<ul>${t.attachments.map(o=>`<li>${r(o.name)} <small>${r(o.type||"Unknown")} - ${ga(o.size)}</small></li>`).join("")}</ul>`:`<div class="empty-state">${l("compose.noAttachments")}</div>`,a=s.composeDrafts.length?`<table class="table">
        <thead><tr><th>${l("compose.subject")}</th><th>${l("compose.to")}</th><th>${l("compose.attachments")}</th><th></th></tr></thead>
        <tbody>
          ${s.composeDrafts.map(o=>`
            <tr>
              <td>${r(o.subject)}<br><small>${r(new Date(o.updatedAt).toLocaleString())}</small></td>
              <td>${r(o.to)}</td>
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
          <label>${l("compose.to")}<input data-compose-field="to" type="email" value="${r(t.to)}" placeholder="client@example.ca"></label>
          <label>${l("compose.cc")}<input data-compose-field="cc" value="${r(t.cc)}" placeholder="optional@example.ca"></label>
          <label>${l("compose.subject")}<input data-compose-field="subject" value="${r(t.subject)}"></label>
          <label>${l("compose.body")}<textarea data-compose-field="body">${r(t.body)}</textarea></label>
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
          <button class="btn primary" data-save-compose ${u("save-compose")?"disabled":""}>${u("save-compose")?l("compose.saving"):l("compose.saveDraft")}</button>
          <button class="btn subtle" data-print-compose>${l("compose.printPdf")}</button>
          <span class="mode">${l("compose.neverSends")}</span>
        </div>
      </div>
      <div class="panel">
        <div class="panel-title"><h2>${l("compose.savedDrafts")}</h2><span>${l("compose.localOnly")}</span></div>
        ${a}
      </div>
    </div>
  `}function ba(){const t=document.querySelector("#drawerRoot");if(s.selectedCategory){Ca(t);return}if(s.selectedEmployee){Ta(t);return}if(s.selectedRule){Ea(t);return}if(s.selectedDraft){Da(t);return}if(s.selectedTask){Ra(t);return}if(!s.selectedEmail){t.innerHTML="";return}const e=s.selectedEmail,a=e.status==="Done",o=s.employees.find(i=>i.id===e.assignedTo),n=Je(e.category);t.innerHTML=`
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
            ${n.map(i=>`<option value="${r(i.name)}" ${i.name===e.category?"selected":""}>${r(i.name)}${i.active?"":" (archived)"}</option>`).join("")}
          </select>
        </label>
        ${K()?`<label>Assigned employee
              <select data-email-assignee="${e.id}">
                <option value="" ${e.assignedTo?"":"selected"}>Unassigned</option>
                ${s.employees.map(i=>`<option value="${r(i.id)}" ${i.id===e.assignedTo?"selected":""}>${r(i.name)} - ${r(i.department)}</option>`).join("")}
              </select>
            </label>`:`<div class="mini-stat"><span>${l("tasks.assignedTo")}</span><strong>${r((o==null?void 0:o.name)||l("tasks.unassigned"))}</strong></div>`}
      </div>

      <div class="drawer-grid">
        <div class="mini-stat"><span>Urgency</span><strong>${r(e.urgency)}</strong></div>
        <div class="mini-stat"><span>Confidence</span><strong>${e.confidence}%</strong></div>
        <div class="mini-stat"><span>Status</span><strong>${r(e.status)}</strong></div>
        <div class="mini-stat"><span>Owner</span><strong>${r((o==null?void 0:o.name)||"Unassigned")}</strong></div>
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
        <ul>${e.messages.map(i=>`<li>${r(i)}</li>`).join("")}</ul>
      </div>

      ${s.summary?`<div class="drawer-section"><h3>Summary</h3><div class="preview">${r(s.summary)}</div></div>`:""}
      <div class="drawer-actions">
        <button class="btn primary" data-summary-email="${e.id}" ${u(`summary-${e.id}`)?"disabled":""}>${u(`summary-${e.id}`)?"Summarizing...":"Summarize"}</button>
        ${e.canOpenDraft?`<button class="btn subtle" data-open-email-draft="${e.id}" ${u(`open-email-draft-${e.id}`)?"disabled":""}>${e.draftActionLabel}</button>`:`<button class="btn subtle" data-generate-draft="${e.id}" ${!e.canGenerateDraft||u(`draft-${e.id}`)?`disabled title="${e.completionBlocker||"Draft action is unavailable."}"`:""}>${u(`draft-${e.id}`)?"Drafting...":e.draftActionLabel}</button>`}
        <button class="btn subtle" data-archive-email="${e.id}" ${!e.canArchive||u(`archive-${e.id}`)?`disabled title="${r(e.archiveBlocker||"Remove this fake/local email from the demo inbox.")}"`:""}>${u(`archive-${e.id}`)?l("triage.removing"):l("triage.remove")}</button>
        ${a?'<span class="status-text">Workflow complete</span>':'<span class="status-text">Approving the draft completes this workflow.</span>'}
      </div>
      <p class="drawer-note">This is a local prototype. Courio does not send email.</p>
    </aside>
  `}function $a(){const t=document.querySelector("#modalRoot");if(!s.confirmDialog){t.innerHTML="";return}const e=s.confirmDialog;t.innerHTML=`
    <div class="modal-backdrop"></div>
    <div class="confirm-modal" role="dialog" aria-modal="true">
      <h2>${r(e.title)}</h2>
      <p>${r(e.message)}</p>
      <div class="actions">
        <button class="btn ${e.tone==="danger"?"danger":"primary"}" data-confirm-primary>${r(e.primaryLabel)}</button>
        <button class="btn subtle" data-confirm-cancel>Cancel</button>
      </div>
    </div>
  `}function ka(){const t=document.querySelector("#authRoot");if(!s.session){t.innerHTML=`
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
                <strong>${r(e.name)}</strong>
                <span>${r(e.role)} - ${r(e.title)}</span>
                <small>${r(e.email)}</small>
              </button>
            `).join("")}
          </div>
          <div class="preview">${l("auth.safetyNote")}</div>
        </div>
      </div>
    `;return}t.innerHTML=`
    <div class="session-pill">
      <span>${r(s.session.name)} · ${r(s.session.role)}</span>
      <button class="btn subtle" data-logout-demo>${l("auth.logout")}</button>
    </div>
  `}async function Aa(t){const e=await zt(t);s.drafts=await j(),await ge(t),s.selectedDraft=await z(e.id),s.selectedEmail=null,s.selectedRule=null,s.selectedEmployee=null,s.selectedCategory=null}async function Sa(t){var e;await Qt(t),s.drafts=await j(),s.emails=await F(),s.activity=await k(),s.digest=await N(),s.selectedDraftIds=s.selectedDraftIds.filter(a=>a!==t),((e=s.selectedDraft)==null?void 0:e.id)===t&&(s.selectedDraft=await z(t))}function Da(t){const e=s.selectedDraft,a=e.sourceEmail||{},o=a.status==="Done";t.innerHTML=`
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
        <div class="mini-stat"><span>Status</span><strong>${r(o?"Completed":e.statusLabel)}</strong></div>
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
        ${o?'<span class="status-text">Workflow complete. This draft is ready for human send.</span>':`
            <button class="btn primary" data-save-draft="${e.id}" ${u(`save-${e.id}`)?"disabled":""}>${u(`save-${e.id}`)?"Saving...":"Save changes"}</button>
            <button class="btn success" data-approve-draft="${e.id}" ${!e.canApprove||u(`approve-${e.id}`)?`disabled title="${e.approvalBlocker||"Save the reviewed draft before approving."}"`:""}>${u(`approve-${e.id}`)?"Approving...":"Approve and complete"}</button>
          `}
        <button class="btn subtle" data-close-drawer>Close</button>
      </div>
      <p class="drawer-note">Approval completes this workflow and marks the draft ready for a person to send. Courio never sends email.</p>
    </aside>
  `}function Ea(t){var o;const e=s.selectedRule,a=Je(e.category);t.innerHTML=`
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
            ${a.map(n=>`<option value="${r(n.name)}" ${n.name===e.category?"selected":""}>${r(n.name)}${n.active?"":" (archived)"}</option>`).join("")}
          </select>
        </label>
      </div>

      <div class="drawer-grid">
        <div class="mini-stat"><span>Confidence</span><strong>${e.confidence||80}%</strong></div>
        <div class="mini-stat"><span>Would match</span><strong>${((o=e.matches)==null?void 0:o.length)||0} samples</strong></div>
      </div>

      <div class="drawer-section">
        <h3>Why Courio suggested it</h3>
        <div class="preview">${r(e.explanation||"This rule is based on repeated wording patterns in the mock inbox.")}</div>
      </div>

      <div class="drawer-section">
        <h3>Match preview</h3>
        <ul>${(e.matches||["No sample matches yet."]).map(n=>`<li>${r(n)}</li>`).join("")}</ul>
      </div>

      ${De()?`<div class="drawer-section"><h3>Advanced preview</h3><div class="preview">This rule uses the current confidence threshold of ${s.settings.confidenceThreshold||80}%. No mailbox changes happen in the prototype.</div></div>`:""}

      <div class="drawer-actions">
        <button class="btn primary" data-save-rule="${e.id}" ${u(`save-rule-${e.id}`)?"disabled":""}>${u(`save-rule-${e.id}`)?"Saving...":"Save rule"}</button>
        <button class="btn danger" data-delete-rule="${e.id}">Delete rule</button>
        <button class="btn subtle" data-close-drawer>Close</button>
      </div>
    </aside>
  `}function Ca(t){const e=s.selectedCategory,a=e.id==="new",o=[["default","Default"],["urgent","Red / urgent"],["invoice","Green"],["lead","Blue"],["pending","Amber"]];t.innerHTML=`
    <div class="drawer-backdrop" data-close-drawer></div>
    <aside class="review-drawer" aria-label="${a?"Add category":"Edit category"}">
      <div class="drawer-header">
        <div>
          <div class="badge ${de(e.name)}">${e.active===!1?"Archived":"Active"}</div>
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
            ${o.map(([n,i])=>`<option value="${n}" ${n===(e.color||"default")?"selected":""}>${i}</option>`).join("")}
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
  `}function Ta(t){const e=s.selectedEmployee,a=e.id==="new";t.innerHTML=`
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
  `}function Ra(t){var n,i,d;const e=s.selectedTask,a=Array.isArray(e.history)?e.history:[],o=(n=e.followUp)!=null&&n.enabled?e.followUp.overdue?`${l("tasks.overdue")} - ${fe(e.followUp.dueAt)}`:`${l("tasks.scheduled")} ${fe(e.followUp.dueAt)}`:l("tasks.noReminder");t.innerHTML=`
    <div class="drawer-backdrop" data-close-drawer></div>
    <aside class="review-drawer" aria-label="${l("tasks.historyTitle")}">
      <div class="drawer-header">
        <div>
          <div class="badge ${e.priority==="High"?"urgent":e.priority==="Low"?"done":"pending"}">${r(e.priority)}</div>
          <h2>${r(e.title)}</h2>
          <p>${r(((i=e.sourceEmail)==null?void 0:i.subject)||l("tasks.localTask"))}</p>
        </div>
        <button class="btn subtle" data-close-drawer>Close</button>
      </div>

      <div class="drawer-grid">
        <div class="mini-stat"><span>${l("tasks.assignedTo")}</span><strong>${r(((d=e.assignedEmployee)==null?void 0:d.name)||l("tasks.unassigned"))}</strong></div>
        <div class="mini-stat"><span>${l("tasks.followUp")}</span><strong>${r(o)}</strong></div>
      </div>

      <div class="drawer-section">
        <h3>${l("tasks.historyTitle")}</h3>
        ${a.length?`<ol class="task-history-list">${a.map(g=>`
              <li>
                <strong>${r(g.label||l("tasks.historyFallback"))}</strong>
                ${g.at?`<time>${r(et(g.at))}</time>`:""}
              </li>
            `).join("")}</ol>`:`<div class="empty-state">${l("tasks.noHistory")}</div>`}
      </div>

      <div class="drawer-section">
        <h3>${l("tasks.notes")}</h3>
        <div class="preview">${r(e.notes||l("tasks.noNotes"))}</div>
      </div>

      <div class="drawer-actions">
        ${e.sourceEmail?`<button class="btn subtle" data-review-email="${e.sourceEmail.id}">${l("tasks.reviewEmail")}</button>`:""}
        <button class="btn subtle" data-close-drawer>Close</button>
      </div>
      <p class="drawer-note">${l("tasks.historyNote")}</p>
    </aside>
  `}function st(){const t=s.ruleQuery.trim().toLowerCase(),e=s.rules.filter(o=>!t||`${o.title} ${o.desc} ${o.category}`.toLowerCase().includes(t)),a=s.loading.rules?'<div class="loading">Loading suggested rules...</div>':e.length===0?`<div class="empty-state">${t?`No rules match “${r(s.ruleQuery)}”. Clear the search to see all local rules.`:"No rules yet. Local rule suggestions will appear here."}</div>`:`<div class="grid cols-2">
        ${e.map(o=>`
          <div class="rule-card">
            <div class="rule-top">
              <div>
                <div class="rule-title">${r(o.title)}</div>
                <div class="rule-desc">${r(o.desc)}</div>
              </div>
              <button class="toggle ${o.on?"on":""}" aria-label="Toggle ${r(o.title)}" data-toggle-rule="${o.id}" ${u(`rule-${o.id}`)?"disabled":""}></button>
            </div>
            <div class="preview"><strong>Local sample preview:</strong> ${r(o.impact)}</div>
            <div class="preview"><strong>${o.confidence||80}% confidence:</strong> ${r(o.explanation||"Based on local mock patterns.")}</div>
            ${De()?`<div class="preview"><strong>Would match:</strong> ${x(o.matches||["No samples"])}</div>`:""}
            <div class="actions">
              ${o.on?'<span class="status-text">In observation</span>':`<button class="btn primary" data-approve-rule="${o.id}" ${u(`approve-rule-${o.id}`)?"disabled":""}>${u(`approve-rule-${o.id}`)?"Approving...":"Approve for observation"}</button>`}
              <button class="btn subtle" data-edit-rule="${o.id}" ${u(`edit-rule-${o.id}`)?"disabled":""}>${u(`edit-rule-${o.id}`)?"Opening...":"Edit"}</button>
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
  `}function Fa(){const t=s.selectedDraftIds.length,e=s.drafts.filter(i=>i.risk!=="High"&&i.canSelectForBulkApproval).length,a=!Ze(),o=s.drafts.filter(i=>s.draftFilter==="needs_approval"?i.canSelectForBulkApproval:s.draftFilter==="ready"?i.isReadyForHumanSend:!0),n=s.loading.drafts?'<div class="loading">Loading draft queue...</div>':o.length===0?`<div class="empty-state">${s.draftFilter==="needs_approval"?"No drafts need approval. Reviewed drafts will appear here when they are ready.":s.draftFilter==="ready"?"No drafts are ready for human send yet.":"No drafts are available in this local demo."}</div>`:`<table class="table">
        <thead><tr><th>Select</th><th>Draft</th><th>Source</th><th>Risk</th><th>Status</th><th></th></tr></thead>
        <tbody>
          ${o.map(i=>`
            <tr>
              <td><input type="checkbox" data-select-draft="${i.id}" ${s.selectedDraftIds.includes(i.id)?"checked":""} ${i.canSelectForBulkApproval?"":`disabled title="${i.approvalBlocker||"Review and save this draft first."}"`}></td>
              <td>${r(i.title)}</td>
              <td>${r(i.source)}</td>
              <td><span class="badge ${i.risk==="High"?"urgent":"done"}">${r(i.risk||"Low")}</span></td>
              <td><span class="badge ${i.isReadyForHumanSend?"done":"pending"}">${r(i.statusLabel)}</span></td>
              <td class="actions">
                <button class="btn subtle" data-review-draft="${i.id}" ${u(`review-draft-${i.id}`)?"disabled":""}>${u(`review-draft-${i.id}`)?"Opening...":"Review"}</button>
                ${i.isReadyForHumanSend?'<span class="status-text">Workflow complete</span>':`<button class="btn success" data-approve-draft="${i.id}" ${!i.canApprove||u(`approve-${i.id}`)?`disabled title="${i.approvalBlocker||"Review and save this draft first."}"`:""}>${u(`approve-${i.id}`)?"Approving...":"Approve and complete"}</button>`}
              </td>
            </tr>
          `).join("")}
        </tbody>
      </table>`;document.querySelector("#drafts").innerHTML=`
    <div class="panel">
      <div class="panel-title"><h2>Draft approval queue</h2><span>Human approval required</span></div>
      <div class="segmented below-sm">
        ${[["all","All drafts"],["needs_approval","Needs approval"],["ready","Ready"]].map(([i,d])=>`<button class="${s.draftFilter===i?"active":""}" data-draft-filter="${i}">${d}</button>`).join("")}
      </div>
      <div class="actions below-sm">
        <button class="btn success" data-approve-selected ${t===0||u("approve-selected")?`disabled title="${t===0?"Select at least one reviewed and saved draft.":""}"`:""}>${u("approve-selected")?"Approving...":`Approve selected (${t})`}</button>
        <button class="btn subtle" data-approve-low-risk ${a||e===0||u("approve-low-risk")?`disabled title="${a?"Enable low-risk bulk approval in Advanced workspace settings.":e===0?"No reviewed low-risk drafts are ready for approval.":""}"`:""}>${a?"Low-risk bulk approval disabled":u("approve-low-risk")?"Approving...":`Approve all low-risk (${e})`}</button>
        <span class="mode">Approval completes the workflow; nothing is sent</span>
      </div>
      ${a?'<div class="preview below-sm">Low-risk bulk approval is disabled by workspace settings.</div>':""}
      ${n}
    </div>
  `}function xa(){const t=document.querySelector("#assistantRoot");t.innerHTML=rt({assistantOpen:s.assistantOpen,assistantMessages:s.assistantMessages,assistantBusy:u("assistant")})}async function ot(t){await w("assistant",async()=>{var a;const e=await la(t,{selectedEmailId:((a=s.selectedEmail)==null?void 0:a.id)||null});s.assistantMessages=e.messages,await Ia(e.action)})}async function Ia(t){if(t){if(t.type==="show_triage"){O("triage",{triageFilter:t.filter||"all"});return}if(t.type==="show_drafts"){O("drafts",{draftFilter:t.filter||"all"});return}if(t.type==="generate_digest"){s.digest=await N(),O("dashboard");return}if(t.type==="explain_email"){s.selectedEmail=await Qe(t.emailId),s.selectedDraft=null,s.selectedRule=null,s.selectedEmployee=null,s.selectedCategory=null,s.summary="",s.showExplanation=!0,O("triage",{triageFilter:"all",closeDrawers:!1});return}if(t.type==="show_rule"){s.rules=await U(),s.selectedRule=s.rules.find(e=>e.id===t.ruleId)||null,s.selectedEmail=null,s.selectedDraft=null,s.selectedEmployee=null,s.selectedCategory=null,O("rules",{closeDrawers:!1});return}t.type==="reset_demo_data"&&(s.confirmDialog={type:"reset-demo",title:"Reset demo data?",message:"This clears all local Courio changes and restores the original fake demo data.",primaryLabel:"Reset demo data",tone:"danger"},y())}}function Na(){const t=re();document.querySelector("#admin").innerHTML=`
    <div class="grid cols-2">
      <div class="panel">
        <div class="panel-title"><h2>${l("admin.workspaceSettings")}</h2><span>${l("admin.prototype")}</span></div>
        <div class="form-grid">
          <label>${l("admin.companyName")}<input data-setting="companyName" value="${r(t.companyName||"Demo PME Inc.")}"></label>
          <label>${l("admin.language")}
            <select data-setting="language">
              ${[["en","English"],["fr","Français"]].map(([e,a])=>`<option value="${e}" ${e===te(t.language)?"selected":""}>${a}</option>`).join("")}
            </select>
          </label>
          <label>${l("admin.mode")}
            <select data-setting="mode">
              ${["Simple","Advanced"].map(e=>`<option ${e===t.mode?"selected":""}>${e}</option>`).join("")}
            </select>
          </label>
          <label>${l("admin.escalationRecipient")}<input data-setting="escalationRecipient" value="${r(t.escalationRecipient||"owner@company.ca")}"></label>
          ${fa()?`
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
          <div class="preview">${l("admin.languageNote")}</div>
          <button class="btn primary" data-save-settings ${u("settings")?"disabled":""}>${u("settings")?l("admin.saving"):l("admin.saveSettings")}</button>
          <button class="btn danger" data-reset-demo ${u("reset-demo")?"disabled":""}>${u("reset-demo")?l("admin.resetting"):l("admin.resetDemoData")}</button>
        </div>
      </div>
      <div class="panel">
        <div class="panel-title"><h2>${l("admin.safetyPreview")}</h2><span>${l("admin.prototypeBehavior")}</span></div>
        <table class="table">
          <tr><td>No automatic sending</td><td>Enforced in this local demo</td></tr>
          <tr><td>Activity history</td><td>Simulated actions stored in this browser</td></tr>
          <tr><td>Account disconnect</td><td>Planned for a future provider integration</td></tr>
          <tr><td>Mailbox permissions</td><td>Not requested or connected in this prototype</td></tr>
          <tr><td>Saved workspace mode</td><td>${r(s.settings.mode||"Simple")}</td></tr>
          <tr><td>${l("admin.savedLanguage")}</td><td>${le()==="fr"?"Français":"English"}</td></tr>
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
                    <td><span class="badge ${de(e.name)}">${r(e.name)}</span>${e.system?"<br><small>System default</small>":""}</td>
                    <td>${r(e.description||"No description yet.")}</td>
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
                  <span>${r(e.label||"Local action completed")}</span>
                  <time>${new Date(e.completedAt).toLocaleString()}</time>
                </div>
              `).join("")}
            </div>`}
      </div>
    </div>
  `}function de(t){const e=s.categories.find(a=>a.name===t);return e!=null&&e.color&&e.color!=="default"?e.color:t==="Urgent"||t==="Client complaint"?"urgent":t==="Accounting"||t==="Documents"||t==="Missing documents"?"invoice":t==="Sales"?"lead":""}document.addEventListener("click",async t=>{var a;const e=t.target.closest("button");if(e){if(e.dataset.assistantToggle!==void 0){s.assistantOpen=!s.assistantOpen,y();return}if(e.dataset.assistantCommand){await ot(e.dataset.assistantCommand);return}if(e.dataset.confirmCancel!==void 0){s.confirmDialog=null,y();return}if(e.dataset.confirmPrimary!==void 0){const o=s.confirmDialog;if(s.confirmDialog=null,(o==null?void 0:o.type)==="reset-demo"){await w("reset-demo",async()=>{await Wt(),window.location.reload()});return}if((o==null?void 0:o.type)==="delete-rule"){await w(`delete-rule-${o.ruleId}`,async()=>{await Jt(o.ruleId),s.rules=await U(),s.activity=await k(),s.selectedRule=null},"Rule deleted locally.");return}if((o==null?void 0:o.type)==="delete-employee"){await w(`delete-employee-${o.employeeId}`,async()=>{await na(o.employeeId),s.employees=await me(),s.emails=await F(),s.tasks=await C(),s.activity=await k(),s.selectedEmployee=null},"Employee removed and assigned emails returned to Unassigned.");return}if((o==null?void 0:o.type)==="archive-emails"){await w("archive-emails",async()=>{await Zt(o.emailIds,o.reason),s.emails=await F(),s.tasks=await C(),s.digest=await N(),s.activity=await k(),s.selectedEmail=null},l("triage.removeSuccess"));return}}if(e.dataset.loginAccount){await w("login-demo",async()=>{const o=await Ut(e.dataset.loginAccount);await Ne(),s.tab=o.role==="Employee"?"tasks":"dashboard"},l("auth.loginToast"));return}if(e.dataset.logoutDemo!==void 0){await w("logout-demo",async()=>{await jt(),await Ne()},l("auth.logoutToast"));return}if(e.dataset.tab&&O(e.dataset.tab),e.dataset.tabTarget&&O(e.dataset.tabTarget),e.dataset.newCompose!==void 0){s.composeForm=ne(),y();return}if(e.dataset.openComposeDraft){const o=s.composeDrafts.find(n=>n.id===e.dataset.openComposeDraft);o&&(s.composeForm={...o,attachments:[...o.attachments]},O("compose",{closeDrawers:!1}));return}if(e.dataset.saveCompose!==void 0){await w("save-compose",async()=>{const o=await _t(s.composeForm);s.composeForm={...o,attachments:[...o.attachments]},s.composeDrafts=await Ae(),s.activity=await k()},l("compose.savedToast"));return}if(e.dataset.printCompose!==void 0){G(l("compose.printToast")),window.print();return}if(e.dataset.setupMailbox&&(s.selectedSetupMailboxId=e.dataset.setupMailbox,tt()),e.dataset.triageFilter&&(s.triageFilter=e.dataset.triageFilter,y()),e.dataset.archiveEmail){const o=s.emails.find(n=>n.id===e.dataset.archiveEmail);if(!o)return;s.confirmDialog={type:"archive-emails",emailIds:[o.id],reason:"Removed from demo inbox",title:l("triage.removeConfirmTitle"),message:`${l("triage.removeConfirmMessage")} "${o.subject}"`,primaryLabel:l("triage.remove"),tone:"danger"},y();return}if(e.dataset.archiveFiltered!==void 0){const o=Xe().filter(n=>n.canArchive);if(!o.length)return;s.confirmDialog={type:"archive-emails",emailIds:o.map(n=>n.id),reason:"Bulk removed from demo inbox",title:l("triage.removeFilteredConfirmTitle"),message:`${l("triage.removeFilteredConfirmMessage")} ${o.length}`,primaryLabel:l("triage.removeFiltered"),tone:"danger"},y();return}if(e.dataset.draftFilter&&(s.draftFilter=e.dataset.draftFilter,y()),e.dataset.action==="digest"&&await w("digest",async()=>{s.digest=await N()},"Morning digest regenerated from local demo data."),e.dataset.reviewEmail){const o=e.dataset.reviewEmail;await w(`review-${o}`,async()=>{s.selectedEmail=await Qe(o),s.emails=await F(),s.selectedDraft=null,s.selectedRule=null,s.selectedEmployee=null,s.selectedCategory=null,s.selectedTask=null,s.summary="",s.showExplanation=!1},"Message thread opened.")}if(e.dataset.reviewDraft){const o=e.dataset.reviewDraft;await w(`review-draft-${o}`,async()=>{s.selectedDraft=await z(o),s.selectedEmail=null,s.selectedRule=null,s.selectedEmployee=null,s.selectedCategory=null,s.selectedTask=null,s.summary="",s.showExplanation=!1},"Draft opened for review.")}if(e.dataset.openEmailDraft){const o=e.dataset.openEmailDraft;await w(`open-email-draft-${o}`,async()=>{s.selectedDraft=await Pt(o),s.selectedEmail=null,s.selectedRule=null,s.selectedEmployee=null,s.selectedCategory=null,s.selectedTask=null,s.summary="",s.showExplanation=!1},"Draft opened for editing.")}if(e.dataset.reviewTask){const o=e.dataset.reviewTask;s.selectedTask=s.tasks.find(n=>n.id===o)||null,s.selectedEmail=null,s.selectedDraft=null,s.selectedRule=null,s.selectedEmployee=null,s.selectedCategory=null,y();return}if(e.dataset.saveTaskNote){const o=e.dataset.saveTaskNote,n=((a=document.querySelector(`[data-task-note="${o}"]`))==null?void 0:a.value)||"";await w(`task-note-${o}`,async()=>{await pe(o,{notes:n}),s.tasks=await C(),s.activity=await k()},l("tasks.noteSaved"));return}if(e.dataset.closeDrawer!==void 0&&(s.selectedEmail=null,s.selectedDraft=null,s.selectedRule=null,s.selectedEmployee=null,s.selectedCategory=null,s.selectedTask=null,s.summary="",s.showExplanation=!1,y()),e.dataset.toggleExplanation!==void 0&&(s.showExplanation=!s.showExplanation,y()),e.dataset.summaryEmail){const o=e.dataset.summaryEmail;await w(`summary-${o}`,async()=>{s.summary=await Vt(o)},"Thread summary generated.")}if(e.dataset.generateDraft){const o=e.dataset.generateDraft;await w(`draft-${o}`,async()=>{await Aa(o)},"Draft opened. Existing edits were preserved.")}if(e.dataset.saveDraft){const o=e.dataset.saveDraft,n=document.querySelector("[data-draft-editor]");await w(`save-${o}`,async()=>{var i;await Gt(o,n.value),s.drafts=await j(),s.emails=await F(),((i=s.selectedDraft)==null?void 0:i.id)===o&&(s.selectedDraft=await z(o))},"Draft saved locally.")}if(e.dataset.toggleRule){const o=e.dataset.toggleRule;await w(`rule-${o}`,async()=>{await Re(o),s.rules=await U()},"Rule preview state updated.")}if(e.dataset.approveRule){const o=e.dataset.approveRule;await w(`approve-rule-${o}`,async()=>{s.rules.find(i=>i.id===o).on||await Re(o),s.rules=await U()},"Rule approved for observation mode.")}if(e.dataset.editRule){const o=e.dataset.editRule;await w(`edit-rule-${o}`,async()=>{s.selectedRule=s.rules.find(n=>n.id===o),s.selectedEmail=null,s.selectedDraft=null,s.selectedEmployee=null,s.selectedCategory=null,s.selectedTask=null},"Rule opened for local editing.")}if(e.dataset.saveRule){const o=e.dataset.saveRule,n=Object.fromEntries([...document.querySelectorAll("[data-rule-field]")].map(i=>[i.dataset.ruleField,i.value]));await w(`save-rule-${o}`,async()=>{await Kt(o,n),s.rules=await U(),s.selectedRule=s.rules.find(i=>i.id===o)},"Rule saved locally.")}if(e.dataset.deleteRule){const o=e.dataset.deleteRule,n=s.rules.find(i=>i.id===o);s.confirmDialog={type:"delete-rule",ruleId:o,title:"Delete this rule?",message:`Delete “${(n==null?void 0:n.title)||"this rule"}” from the local demo?`,primaryLabel:"Delete rule",tone:"danger"},y()}if(e.dataset.addEmployee!==void 0&&(s.selectedEmployee={id:"new",name:"",email:"",title:"",department:""},s.selectedEmail=null,s.selectedDraft=null,s.selectedRule=null,s.selectedCategory=null,y()),e.dataset.editEmployee&&(s.selectedEmployee=s.employees.find(o=>o.id===e.dataset.editEmployee)||null,s.selectedEmail=null,s.selectedDraft=null,s.selectedRule=null,s.selectedCategory=null,y()),e.dataset.saveEmployee){const o=e.dataset.saveEmployee,n=Object.fromEntries([...document.querySelectorAll("[data-employee-field]")].map(i=>[i.dataset.employeeField,i.value]));await w(`save-employee-${o}`,async()=>{const i=o==="new"?await oa(n):await ia(o,n);s.employees=await me(),s.tasks=await C(),s.activity=await k(),s.selectedEmployee=s.employees.find(d=>d.id===i.id)||null},o==="new"?"Employee added locally.":"Employee changes saved locally.")}if(e.dataset.deleteEmployee){const o=e.dataset.deleteEmployee,n=s.employees.find(d=>d.id===o),i=s.emails.filter(d=>d.assignedTo===o).length;s.confirmDialog={type:"delete-employee",employeeId:o,title:"Remove this employee?",message:`Remove ${(n==null?void 0:n.name)||"this employee"}? ${i} assigned email${i===1?"":"s"} will return to Unassigned.`,primaryLabel:"Remove employee",tone:"danger"},y()}if(e.dataset.addCategory!==void 0&&(s.selectedCategory={id:"new",name:"",description:"",color:"default",active:!0,system:!1},s.selectedEmail=null,s.selectedDraft=null,s.selectedRule=null,s.selectedEmployee=null,y()),e.dataset.editCategory&&(s.selectedCategory=s.categories.find(o=>o.id===e.dataset.editCategory)||null,s.selectedEmail=null,s.selectedDraft=null,s.selectedRule=null,s.selectedEmployee=null,y()),e.dataset.saveCategory){const o=e.dataset.saveCategory,n=Object.fromEntries([...document.querySelectorAll("[data-category-field]")].map(i=>[i.dataset.categoryField,i.value]));await w(`save-category-${o}`,async()=>{const i=o==="new"?await ea(n):await ta(o,n);await Ie(i.id)},o==="new"?"Category added locally.":"Category changes saved locally.")}if(e.dataset.toggleCategory){const o=e.dataset.toggleCategory;await w(`toggle-category-${o}`,async()=>{const n=await aa(o);await Ie(n.id)},"Category visibility updated locally.")}if(e.dataset.approveDraft){const o=e.dataset.approveDraft;await w(`approve-${o}`,async()=>{await Sa(o)},"Draft approved and workflow completed. Nothing was sent.")}if(e.dataset.approveSelected!==void 0&&await w("approve-selected",async()=>{await Ye(s.selectedDraftIds),s.drafts=await j(),s.emails=await F(),s.activity=await k(),s.digest=await N(),s.selectedDraftIds=[]},"Selected drafts approved and workflows completed. Nothing was sent."),e.dataset.approveLowRisk!==void 0){if(!Ze()){G("Low-risk bulk approval is disabled by workspace settings.",!0);return}await w("approve-low-risk",async()=>{await Yt(),s.drafts=await j(),s.emails=await F(),s.activity=await k(),s.digest=await N(),s.selectedDraftIds=[]},"Low-risk drafts approved and workflows completed. Nothing was sent.")}if(e.dataset.saveSettings!==void 0){const o=Object.fromEntries([...document.querySelectorAll("[data-setting]")].map(n=>[n.dataset.setting,n.value]));await w("settings",async()=>{s.settings=await Bt(o),s.settingsForm={...s.settings}},"Settings saved locally.")}e.dataset.resetDemo!==void 0&&(s.confirmDialog={type:"reset-demo",title:"Reset demo data?",message:"This clears all local Courio changes and restores the original fake demo data.",primaryLabel:"Reset demo data",tone:"danger"},y())}});document.addEventListener("change",async t=>{const e=t.target;if(e.dataset.setting!==void 0){s.settingsForm={...re(),[e.dataset.setting]:e.value},e.dataset.setting==="mode"&&y();return}if(e.dataset.taskStatus){const a=e.dataset.taskStatus;await w(`task-status-${a}`,async()=>{await pe(a,{status:e.checked?"Done":"Open"}),s.tasks=await C(),s.activity=await k()},e.checked?l("tasks.completedToast"):l("tasks.reopenedToast"));return}if(e.dataset.taskAssignee){const a=e.dataset.taskAssignee;await w(`task-assignee-${a}`,async()=>{await pe(a,{assignedTo:e.value}),s.tasks=await C(),s.activity=await k()},l("tasks.assignedToast"));return}if(e.dataset.taskAssigneeFilter!==void 0){s.taskAssigneeFilter=e.value,ve();return}if(e.dataset.taskFollowUp!==void 0){const a=e.dataset.taskFollowUp;await w(`task-follow-up-${a}`,async()=>{await Fe(a,{enabled:e.checked}),s.tasks=await C(),s.activity=await k()},e.checked?l("tasks.followUpScheduledToast"):l("tasks.followUpRemovedToast"));return}if(e.dataset.taskFollowUpDate!==void 0){const a=e.dataset.taskFollowUpDate;await w(`task-follow-up-${a}`,async()=>{await Fe(a,{enabled:!0,dueAt:e.value}),s.tasks=await C(),s.activity=await k()},l("tasks.followUpUpdatedToast"));return}if(e.dataset.taskFollowUpFilter!==void 0){s.taskFollowUpFilter=e.value,ve();return}if(e.dataset.composeAttachments!==void 0){s.composeForm={...ne(),...s.composeForm,attachments:[...e.files].map((a,o)=>({id:`local-${Date.now()}-${o}`,name:a.name,type:a.type||"Unknown",size:a.size}))},at();return}if(e.dataset.triageCategoryFilter!==void 0){s.triageCategoryFilter=e.value,y();return}if(e.dataset.emailCategory){const a=e.dataset.emailCategory;await w(`category-${a}`,async()=>{await Xt(a,e.value),await ge(a),s.tasks=await C()},"Category updated locally.")}if(e.dataset.emailAssignee){const a=e.dataset.emailAssignee;await w(`assign-${a}`,async()=>{await sa(a,e.value),await ge(a),s.tasks=await C()},"Email assignment updated locally.")}if(e.dataset.selectDraft){const a=e.dataset.selectDraft;s.selectedDraftIds=e.checked?[...new Set([...s.selectedDraftIds,a])]:s.selectedDraftIds.filter(o=>o!==a),y()}});document.addEventListener("input",t=>{const e=t.target;if(e.dataset.setting!==void 0){s.settingsForm={...re(),[e.dataset.setting]:e.value};return}if(e.dataset.composeField!==void 0){s.composeForm={...ne(),...s.composeForm,[e.dataset.composeField]:e.value};return}if(e.dataset.ruleSearch===void 0)return;s.ruleQuery=e.value,st();const a=document.querySelector("[data-rule-search]");a==null||a.focus(),a==null||a.setSelectionRange(s.ruleQuery.length,s.ruleQuery.length)});document.addEventListener("submit",async t=>{const e=t.target.closest(".assistant-form");if(!e)return;t.preventDefault();const a=e.querySelector("[data-assistant-input]"),o=a.value.trim();o&&(a.value="",await ot(o))});y();wa();
