// =====================================
// Theme-Wechsel (Dark, Light, Kontrast)
// =====================================

// Alle Theme-Buttons sammeln
const themeButtons = document.querySelectorAll("[data-theme-btn]");
// Body-Element (hier wird data-theme gesetzt)
const body = document.body;

// gespeichertes Theme (localStorage) beim Laden auslesen
const savedTheme = localStorage.getItem("portfolio-theme");
if (savedTheme) {
  body.setAttribute("data-theme", savedTheme);
  document.documentElement.setAttribute("data-theme", savedTheme);

  // aktiven Button visuell aktualisieren
  themeButtons.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.themeBtn === savedTheme);
  });
}

// Klick-Handler für Theme-Buttons
themeButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const theme = btn.dataset.themeBtn;

    // data-theme auf <body> und <html> setzen
    body.setAttribute("data-theme", theme);
    document.documentElement.setAttribute("data-theme", theme);

    // Auswahl speichern (damit das Theme beim nächsten Laden bleibt)
    localStorage.setItem("portfolio-theme", theme);

    // aktiven Button markieren
    themeButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
  });
});

// ================================
// Tabs: Section-Überschriften-Buttons
// ================================

// Alle Tab-Buttons (Section-Überschriften)
const tabButtons = document.querySelectorAll(".tab-button");
// Alle Tab-Panels (Inhaltsbereiche)
const tabPanels = document.querySelectorAll(".tab-panel");

/**
 * Aktiviert einen Tab anhand seiner ID (about, skills, projects, timeline, contact)
 * und blendet andere Tabs aus.
 */
function activateTab(tabId) {
  // Buttons aktualisieren
  tabButtons.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.tab === tabId);
  });

  // Panels aktualisieren
  tabPanels.forEach((panel) => {
    const panelId = panel.id.replace("tab-", "");
    panel.classList.toggle("active", panelId === tabId);
  });
}

// Klick-Events für Tab-Buttons
tabButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const targetTab = btn.dataset.tab;
    activateTab(targetTab);
  });
});

// ================================
// Hero-Buttons: direkt zu Tab springen
// ================================

// Buttons im Hero, die direkt ein Tab öffnen sollen (data-tab-jump)
const tabJumpButtons = document.querySelectorAll("[data-tab-jump]");

tabJumpButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const targetTab = btn.dataset.tabJump;
    activateTab(targetTab);

    // sanft zum Tab-Bereich scrollen
    const sectionsElement = document.getElementById("sections");
    if (sectionsElement) {
      sectionsElement.scrollIntoView({ behavior: "smooth" });
    }
  });
});
