const translations = {
  en: {
    brand: {
      subtitle: "Email assistant for small businesses",
      asideNote: "Courio uses fake local mailbox data in this prototype and suggests actions. It never sends email or modifies a real mailbox.",
      previewMode: "Preview mode enabled"
    },
    nav: {
      groups: {
        home: "Home",
        work: "Work",
        automation: "Automation",
        workspace: "Workspace"
      },
      dashboard: "Overview",
      dashboardSmall: "Today",
      triage: "Triage",
      triageSmall: "Inbox",
      tasks: "Tasks",
      tasksSmall: "Priority",
      compose: "Compose",
      composeSmall: "Local draft",
      drafts: "Drafts",
      draftsSmall: "Approval",
      rules: "Rules",
      rulesSmall: "Preview",
      import: "Setup preview",
      importSmall: "Microsoft 365",
      admin: "Admin",
      adminSmall: "Settings"
    },
    pages: {
      dashboard: ["Overview", "A local workflow preview for email triage, summaries, routing suggestions, and draft preparation."],
      import: ["Setup preview", "Preview how a future Microsoft 365 connection could import mailbox structure and workflow patterns."],
      triage: ["Inbox triage", "Review AI-classified messages before any action is taken."],
      tasks: ["Action Center", "Turn important local inbox items into a priority work list."],
      compose: ["Compose", "Create a fake/local message draft without sending anything."],
      rules: ["Rules", "Approve or adjust local rule previews. They do not affect a real mailbox."],
      drafts: ["Drafts", "Review prepared replies and mark them ready for a person to send."],
      admin: ["Admin", "Manage local workspace preferences and preview future integration safeguards."]
    },
    admin: {
      workspaceSettings: "Workspace settings",
      prototype: "Prototype",
      companyName: "Company name",
      language: "Language / Langue",
      mode: "Mode",
      escalationRecipient: "Escalation recipient",
      saveSettings: "Save settings",
      saving: "Saving...",
      resetDemoData: "Reset Demo Data",
      resetting: "Resetting...",
      safetyPreview: "Safety preview",
      prototypeBehavior: "Prototype behavior",
      savedLanguage: "Saved language",
      languageNote: "Language changes apply after saving. Internal workflow values stay stable."
    },
    triage: {
      inboxControl: "Inbox control",
      categoryFilter: "Category filter",
      allCategories: "All categories",
      emptyUrgent: "No urgent emails. You are caught up on high-priority work.",
      emptyInvoices: "No invoice emails are waiting for review.",
      emptyCategory: "No emails match this category filter.",
      emptyAll: "No emails are available in this local demo.",
      remove: "Remove",
      removing: "Removing...",
      removeFiltered: "Remove filtered",
      removeFilteredDisabled: "No removable emails in the current view.",
      removeConfirmTitle: "Remove this email from the demo inbox?",
      removeConfirmMessage: "This only hides the fake/local demo email. Nothing is deleted from a real mailbox:",
      removeFilteredConfirmTitle: "Remove filtered emails from the demo inbox?",
      removeFilteredConfirmMessage: "This only hides fake/local demo emails. Number selected:",
      removeSuccess: "Email removed from the demo inbox locally."
    },
    tasks: {
      title: "Priority tasks",
      subtitle: "Generated from the local demo inbox",
      empty: "No tasks yet. New local inbox items will appear here as work to review.",
      done: "Done",
      task: "Task",
      priority: "Priority",
      source: "Source email",
      notes: "Notes",
      notePlaceholder: "Add a local note",
      reviewEmail: "Review email",
      saveNote: "Save note",
      saving: "Saving...",
      noteSaved: "Task note saved locally.",
      completedToast: "Task checked off locally.",
      reopenedToast: "Task reopened locally.",
      openTasks: "Open tasks",
      openCaption: "From fake/local inbox items",
      highPriority: "High priority",
      highCaption: "Review these first",
      completed: "Completed",
      completedCaption: "Checked off in this browser"
    },
    compose: {
      title: "Compose message",
      subtitle: "Fake/local only",
      safetyNote: "This composer does not connect to Gmail, Outlook, or any real mailbox. Saving creates a local draft only.",
      newMessage: "New message",
      to: "To",
      cc: "Cc",
      subject: "Subject",
      body: "Message body",
      attachments: "Attachments",
      attachmentNote: "Attachments are metadata only in this demo. File contents are not uploaded or stored.",
      attachmentMetadata: "Attachment metadata",
      noAttachments: "No attachments selected.",
      saveDraft: "Save local draft",
      saving: "Saving...",
      printPdf: "Print / save as PDF",
      neverSends: "Never sends email",
      savedDrafts: "Saved compose drafts",
      localOnly: "Local only",
      openDraft: "Open draft",
      emptyDrafts: "No compose drafts yet.",
      savedToast: "Compose draft saved locally. Nothing was sent.",
      printToast: "Use your browser print dialog to save as PDF. Nothing is sent."
    }
  },
  fr: {
    brand: {
      subtitle: "Assistant courriel pour PME",
      asideNote: "Courio utilise des données locales fictives dans ce prototype et suggère des actions. Il n'envoie jamais de courriel et ne modifie aucune vraie boîte courriel.",
      previewMode: "Mode aperçu activé"
    },
    nav: {
      groups: {
        home: "Accueil",
        work: "Travail",
        automation: "Automatisation",
        workspace: "Espace de travail"
      },
      dashboard: "Aperçu",
      dashboardSmall: "Aujourd'hui",
      triage: "Tri",
      triageSmall: "Boîte de réception",
      tasks: "Tâches",
      tasksSmall: "Priorité",
      compose: "Composer",
      composeSmall: "Brouillon local",
      drafts: "Brouillons",
      draftsSmall: "Approbation",
      rules: "Règles",
      rulesSmall: "Aperçu",
      import: "Aperçu configuration",
      importSmall: "Microsoft 365",
      admin: "Admin",
      adminSmall: "Paramètres"
    },
    pages: {
      dashboard: ["Aperçu", "Aperçu local des flux de tri courriel, résumés, suggestions de routage et préparation de brouillons."],
      import: ["Aperçu configuration", "Aperçu de la façon dont une future connexion Microsoft 365 pourrait importer la structure de boîte courriel et les habitudes de travail."],
      triage: ["Tri de la boîte courriel", "Révisez les messages classés par l'IA avant toute action."],
      tasks: ["Centre d'action", "Transformez les courriels locaux importants en liste de travail priorisée."],
      compose: ["Composer", "Créez un faux brouillon local sans rien envoyer."],
      rules: ["Règles", "Approuvez ou ajustez les aperçus de règles locales. Elles ne touchent aucune vraie boîte courriel."],
      drafts: ["Brouillons", "Révisez les réponses préparées et marquez-les prêtes pour un envoi humain."],
      admin: ["Admin", "Gérez les préférences locales de l'espace de travail et les protections des futures intégrations."]
    },
    admin: {
      workspaceSettings: "Paramètres de l'espace de travail",
      prototype: "Prototype",
      companyName: "Nom de l'entreprise",
      language: "Langue",
      mode: "Mode",
      escalationRecipient: "Responsable des escalades",
      saveSettings: "Enregistrer les paramètres",
      saving: "Enregistrement...",
      resetDemoData: "Réinitialiser la démo",
      resetting: "Réinitialisation...",
      safetyPreview: "Aperçu de sécurité",
      prototypeBehavior: "Comportement du prototype",
      savedLanguage: "Langue enregistrée",
      languageNote: "Les changements de langue s'appliquent après l'enregistrement. Les valeurs internes du flux restent stables."
    },
    triage: {
      inboxControl: "Contrôle de la boîte",
      categoryFilter: "Filtre de catégorie",
      allCategories: "Toutes les catégories",
      emptyUrgent: "Aucun courriel urgent. Les priorités élevées sont à jour.",
      emptyInvoices: "Aucun courriel de facture n'attend une révision.",
      emptyCategory: "Aucun courriel ne correspond à cette catégorie.",
      emptyAll: "Aucun courriel n'est disponible dans cette démo locale.",
      remove: "Retirer",
      removing: "Retrait...",
      removeFiltered: "Retirer la sélection",
      removeFilteredDisabled: "Aucun courriel retirable dans la vue actuelle.",
      removeConfirmTitle: "Retirer ce courriel de la boîte de démo?",
      removeConfirmMessage: "Cela cache seulement le faux courriel local. Rien n'est supprimé d'une vraie boîte:",
      removeFilteredConfirmTitle: "Retirer les courriels filtrés de la boîte de démo?",
      removeFilteredConfirmMessage: "Cela cache seulement des faux courriels locaux. Nombre sélectionné:",
      removeSuccess: "Courriel retiré localement de la boîte de démo."
    },
    tasks: {
      title: "Tâches prioritaires",
      subtitle: "Générées à partir de la boîte locale de démo",
      empty: "Aucune tâche pour l'instant. Les nouveaux courriels locaux apparaîtront ici comme travail à réviser.",
      done: "Fait",
      task: "Tâche",
      priority: "Priorité",
      source: "Courriel source",
      notes: "Notes",
      notePlaceholder: "Ajouter une note locale",
      reviewEmail: "Réviser le courriel",
      saveNote: "Enregistrer la note",
      saving: "Enregistrement...",
      noteSaved: "Note de tâche enregistrée localement.",
      completedToast: "Tâche cochée localement.",
      reopenedToast: "Tâche rouverte localement.",
      openTasks: "Tâches ouvertes",
      openCaption: "Depuis les faux courriels locaux",
      highPriority: "Priorité élevée",
      highCaption: "À réviser en premier",
      completed: "Terminées",
      completedCaption: "Cochées dans ce navigateur"
    },
    compose: {
      title: "Composer un message",
      subtitle: "Faux/local seulement",
      safetyNote: "Ce compositeur ne se connecte pas à Gmail, Outlook ni à une vraie boîte courriel. L'enregistrement crée seulement un brouillon local.",
      newMessage: "Nouveau message",
      to: "À",
      cc: "Cc",
      subject: "Objet",
      body: "Corps du message",
      attachments: "Pièces jointes",
      attachmentNote: "Les pièces jointes sont seulement des métadonnées dans cette démo. Le contenu des fichiers n'est pas téléversé ni stocké.",
      attachmentMetadata: "Métadonnées des pièces jointes",
      noAttachments: "Aucune pièce jointe sélectionnée.",
      saveDraft: "Enregistrer le brouillon local",
      saving: "Enregistrement...",
      printPdf: "Imprimer / enregistrer en PDF",
      neverSends: "N'envoie jamais de courriel",
      savedDrafts: "Brouillons composés enregistrés",
      localOnly: "Local seulement",
      openDraft: "Ouvrir le brouillon",
      emptyDrafts: "Aucun brouillon composé pour l'instant.",
      savedToast: "Brouillon composé enregistré localement. Rien n'a été envoyé.",
      printToast: "Utilisez la fenêtre d'impression du navigateur pour enregistrer en PDF. Rien n'est envoyé."
    }
  }
};

export function normalizeLanguage(language) {
  return language === "fr" ? "fr" : "en";
}

export function createTranslator(language) {
  const current = translations[normalizeLanguage(language)];
  return function translate(key) {
    return key.split(".").reduce((value, part) => value?.[part], current) || key;
  };
}

export function getPageCopy(tab, language) {
  const current = translations[normalizeLanguage(language)];
  return current.pages[tab] || current.pages.dashboard;
}
