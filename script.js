// =====================================
// Theme-Wechsel (Dark, Light, Kontrast)
// =====================================

// Alle Theme-Buttons sammeln
const themeButtons = document.querySelectorAll("[data-theme-btn]");
// Body- und HTML-Element (hier wird data-theme gesetzt)
const body = document.body;
const htmlElement = document.documentElement;

// verfügbare Themes aus den Buttons ableiten
const availableThemes = new Set(
  Array.from(themeButtons, (btn) => btn.dataset.themeBtn)
);

// Standard-Theme
const DEFAULT_THEME = "dark";

/**
 * wendet ein Theme an, wenn es vorhanden ist,
 * sonst fällt es auf DEFAULT_THEME zurück
 */
function applyTheme(theme) {
  if (!availableThemes.has(theme)) {
    theme = DEFAULT_THEME;
  }

  body.setAttribute("data-theme", theme);
  htmlElement.setAttribute("data-theme", theme);
  localStorage.setItem("portfolio-theme", theme);

  // aktiven Button visuell aktualisieren + ARIA
  themeButtons.forEach((btn) => {
    const isActive = btn.dataset.themeBtn === theme;
    btn.classList.toggle("active", isActive);
    btn.setAttribute("aria-pressed", String(isActive));
  });
}

// gespeichertes Theme (localStorage) beim Laden auslesen
const savedTheme = localStorage.getItem("portfolio-theme");
if (savedTheme && availableThemes.has(savedTheme)) {
  applyTheme(savedTheme);
} else {
  // Fallback, falls z.B. früher "contrast-light" gespeichert war
  applyTheme(DEFAULT_THEME);
}

// Klick-Handler für Theme-Buttons
themeButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const theme = btn.dataset.themeBtn;
    applyTheme(theme);
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

// ================================
// Leichte, richtungsabhängige Bewegung
// für Karten & Buttons bei Mausbewegung
// (um ~40 % reduziert / sehr subtil)
// ================================

const prefersReducedMotion =
  window.matchMedia &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Elemente, die sich minimal bewegen sollen
const tiltTargets = document.querySelectorAll(
  ".glass-card, .btn, .tab-button, .theme-btn, .hero-photo-wrap, .avatar, .glass-pill"
);

if (!prefersReducedMotion && tiltTargets.length > 0) {
  tiltTargets.forEach((el) => {
    let rect = null;
    const maxOffset = 6; // Basis-Verschiebung in px
    const reductionFactor = 0.6; // 40 % weniger Bewegung

    // vorhandene Transition erweitern
    const existingTransition = getComputedStyle(el).transition;
    el.style.transition =
      (existingTransition ? existingTransition + ", " : "") +
      "transform 0.12s ease";

    el.addEventListener("pointerenter", () => {
      rect = el.getBoundingClientRect();
    });

    el.addEventListener("pointermove", (event) => {
      if (!rect) return;

      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      // Werte von -1 bis 1 relativ zur Mitte
      const relativeX = (x / rect.width - 0.5) * 2;
      const relativeY = (y / rect.height - 0.5) * 2;

      // Bewegung gegenläufig zur Mausposition
      const offsetX = -relativeX * maxOffset * reductionFactor;
      const offsetY = -relativeY * maxOffset * reductionFactor;

      el.style.transform = `translate(${offsetX.toFixed(
        2
      )}px, ${offsetY.toFixed(2)}px)`;
    });

    el.addEventListener("pointerleave", () => {
      rect = null;
      el.style.transform = "translate(0px, 0px)";
    });
  });
}
