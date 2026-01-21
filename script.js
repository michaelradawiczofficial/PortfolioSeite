// =====================================
// 1. Theme-Wechsel (Dark, Light, Kontrast)
// =====================================

const THEME_STORAGE_KEY = "portfolio-theme";

// Alle Theme-Buttons sammeln
const themeButtons = document.querySelectorAll("[data-theme-btn]");
const body = document.body;
const htmlElement = document.documentElement;

// Verfügbare Themes aus den Buttons ableiten
const availableThemes = new Set(
  Array.from(themeButtons, (btn) => btn.dataset.themeBtn)
);

// Standard-Theme aus dem DOM ableiten, sonst "dark"
const initialThemeFromDom = body.dataset.theme;
const DEFAULT_THEME = availableThemes.has(initialThemeFromDom)
  ? initialThemeFromDom
  : "dark";

function applyTheme(theme) {
  if (!availableThemes.has(theme)) {
    theme = DEFAULT_THEME;
  }

  body.setAttribute("data-theme", theme);
  htmlElement.setAttribute("data-theme", theme);
  localStorage.setItem(THEME_STORAGE_KEY, theme);

  // Aktive Theme-Buttons visuell & per ARIA markieren
  themeButtons.forEach((btn) => {
    const isActive = btn.dataset.themeBtn === theme;
    btn.classList.toggle("active", isActive);
    btn.setAttribute("aria-pressed", String(isActive));
  });
}

// Beim Laden gespeichertes Theme verwenden (falls vorhanden)
const storedTheme = localStorage.getItem(THEME_STORAGE_KEY);
if (storedTheme && availableThemes.has(storedTheme)) {
  applyTheme(storedTheme);
} else {
  applyTheme(DEFAULT_THEME);
}

// Klick-Events für Theme-Buttons
themeButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const theme = btn.dataset.themeBtn;
    applyTheme(theme);
  });
});


// ================================
<<<<<<< HEAD
// 2. Tabs: Zustand & ARIA-Handling
=======
// Tabs: Zustand & ARIA-Handling
>>>>>>> 8aaa0cd6c2f1ac6300dbba9cbb2d97da076ee4bb
// ================================

const tabList = document.querySelector(".section-tabs");
const tabButtons = document.querySelectorAll(".tab-button");
const tabPanels = document.querySelectorAll(".tab-panel");

function setActiveTab(tabId, options = {}) {
  const { focus = false } = options;
  const panelId = `tab-${tabId}`;

  // Buttons aktualisieren
  tabButtons.forEach((btn) => {
    const isActive = btn.dataset.tab === tabId;
    btn.classList.toggle("active", isActive);
    btn.setAttribute("aria-selected", String(isActive));
    btn.setAttribute("tabindex", isActive ? "0" : "-1");
    if (isActive && focus) {
      btn.focus();
    }
  });

  // Panels aktualisieren
  tabPanels.forEach((panel) => {
    const isActive = panel.id === panelId;
    panel.classList.toggle("active", isActive);
    panel.hidden = !isActive;
  });
}

// Initialen Tab-Zustand herstellen
const initialActiveTabButton = document.querySelector(".tab-button.active");
if (initialActiveTabButton) {
  setActiveTab(initialActiveTabButton.dataset.tab);
}

// Klick-Events für Tab-Buttons
tabButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const tabId = btn.dataset.tab;
    if (!tabId) return;
    setActiveTab(tabId);
  });
});

// Tastaturnavigation innerhalb der Tab-Leiste
if (tabList) {
  tabList.addEventListener("keydown", (event) => {
    const current = document.activeElement;
    if (!current || !current.classList.contains("tab-button")) return;

    const buttons = Array.from(tabButtons);
    const currentIndex = buttons.indexOf(current);
    let newIndex = currentIndex;

    switch (event.key) {
      case "ArrowRight":
      case "ArrowDown":
        event.preventDefault();
        newIndex = (currentIndex + 1) % buttons.length;
        break;
      case "ArrowLeft":
      case "ArrowUp":
        event.preventDefault();
        newIndex = (currentIndex - 1 + buttons.length) % buttons.length;
        break;
      case "Home":
        event.preventDefault();
        newIndex = 0;
        break;
      case "End":
        event.preventDefault();
        newIndex = buttons.length - 1;
        break;
      default:
        return;
    }

    const newButton = buttons[newIndex];
    if (newButton) {
      const tabId = newButton.dataset.tab;
      setActiveTab(tabId, { focus: true });
    }
  });
}

<<<<<<< HEAD

// =====================================
// 3. Kontaktformular: Mockup
// =====================================

const contactForm = document.querySelector(".contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const note = contactForm.querySelector(".form-note");
    if (note) {
      note.textContent =
        "Hinweis: Dieses Formular ist ein Mockup. Für eine echte Anfrage nutzen Sie bitte GitHub-Issues.";
      note.style.color = "var(--text-highlight)"; // Visuelles Feedback
    }
  });
}


// =====================================
// 4. Tilt Motion (Maus-Parallaxe)
// =====================================

const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

function setupTiltMotion() {
  if (motionQuery.matches) return;

  const tiltTargets = document.querySelectorAll(
    ".hero-main, .hero-photo-wrap, .project-card, .btn-primary"
  );
  const MAX_OFFSET = 8; 
=======
// =====================================
// Kontaktformular: Mockup klar kennzeichnen
// =====================================

const contactForm = document.querySelector(".contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const note = contactForm.querySelector(".form-note");
    if (note) {
      note.textContent =
        "Hinweis: Dieses Formular ist ein Mockup. Für eine echte Anfrage nutzen Sie bitte die Kontaktdaten in meinen Bewerbungsunterlagen oder GitHub-Issues im passenden Repository.";
    }
  });
}

// =====================================
// Leichte, richtungsabhängige Bewegung
// nur für wichtige Elemente
// =====================================

const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

function setupTiltMotion() {
  if (motionQuery.matches) {
    return;
  }

  // Nur wichtige Elemente bewegen (Hero, Projekte, Primary-Buttons, Tabs)
  const tiltTargets = document.querySelectorAll(
    ".hero-main, .hero-photo-wrap, .project-card, .btn-primary, .tab-button"
  );

  const MAX_OFFSET = 8; // maximale Verschiebung in px
>>>>>>> 8aaa0cd6c2f1ac6300dbba9cbb2d97da076ee4bb

  tiltTargets.forEach((el) => {
    let rect = null;
    const existingTransition = getComputedStyle(el).transition;

    el.addEventListener("pointerenter", () => {
      rect = el.getBoundingClientRect();
<<<<<<< HEAD
      // Nur Transform animieren, Rest behalten
      el.style.transition = "transform 0.1s ease-out";
    });

    el.addEventListener("pointermove", (event) => {
      if (!rect) rect = el.getBoundingClientRect();

      const relativeX = (event.clientX - rect.left) / rect.width - 0.5;
      const relativeY = (event.clientY - rect.top) / rect.height - 0.5;
      
      const offsetX = -relativeX * MAX_OFFSET * 0.6;
      const offsetY = -relativeY * MAX_OFFSET * 0.6;

      el.style.transform = `translate(${offsetX.toFixed(2)}px, ${offsetY.toFixed(2)}px)`;
=======
      el.style.transition =
        (existingTransition ? existingTransition + ", " : "") +
        "transform 0.15s ease-out";
    });

    el.addEventListener("pointermove", (event) => {
      if (!rect) {
        rect = el.getBoundingClientRect();
      }

      const relativeX = (event.clientX - rect.left) / rect.width - 0.5;
      const relativeY = (event.clientY - rect.top) / rect.height - 0.5;

      // leichte Reduktion der Bewegung
      const reductionFactor = 0.6;

      const offsetX = -relativeX * MAX_OFFSET * reductionFactor;
      const offsetY = -relativeY * MAX_OFFSET * reductionFactor;

      el.style.transform = `translate(${offsetX.toFixed(
        2
      )}px, ${offsetY.toFixed(2)}px)`;
>>>>>>> 8aaa0cd6c2f1ac6300dbba9cbb2d97da076ee4bb
    });

    el.addEventListener("pointerleave", () => {
      rect = null;
      el.style.transform = "translate(0px, 0px)";
      // Transition zurücksetzen für smooth reset
      el.style.transition = existingTransition;
    });
  });
}

setupTiltMotion();

<<<<<<< HEAD
motionQuery.addEventListener("change", () => {
  // Reset bei Änderung der Systemeinstellung
  document.querySelectorAll(".hero-main, .hero-photo-wrap, .project-card").forEach((el) => {
      el.style.transform = "";
  });
  if (!motionQuery.matches) setupTiltMotion();
});


// =====================================
// 5. Bildvorschau (NEU & REFACTORED)
// =====================================

(function setupImagePreview() {
  const previewOverlay = document.getElementById('image-preview');
  const previewImage = document.getElementById('image-preview-image');
  const previewClose = document.getElementById('image-preview-close');

  if (!previewOverlay || !previewImage || !previewClose) return;

  // Funktion zum Öffnen
  const openPreview = (src, alt) => {
    previewImage.src = src;
    previewImage.alt = alt || '';
    
    // Klasse 'hidden' entfernen (falls im HTML vorhanden)
    previewOverlay.classList.remove('hidden');
    // Klasse 'visible' hinzufügen (für CSS Opacity Transition)
    // Kleiner Timeout, damit der Browser den Display-Change registriert
    requestAnimationFrame(() => {
      previewOverlay.classList.add('visible');
    });
  };

  // Funktion zum Schließen
  const closePreview = () => {
    previewOverlay.classList.remove('visible');
    
    // Nach Transition (0.3s) 'hidden' wieder setzen und src leeren
    setTimeout(() => {
      previewOverlay.classList.add('hidden');
      previewImage.src = '';
    }, 300);
  };

  // Event Delegation für alle Projektbilder
  // Wir hören auf Klicks im gesamten Dokument, prüfen aber, ob es ein .project-image ist
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('project-image')) {
      openPreview(e.target.src, e.target.alt);
    }
  });

  // Schließen-Button
  previewClose.addEventListener('click', closePreview);

  // Schließen bei Klick auf den Hintergrund
  previewOverlay.addEventListener('click', (e) => {
    if (e.target === previewOverlay) {
      closePreview();
    }
  });

  // Schließen mit ESC-Taste
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && previewOverlay.classList.contains('visible')) {
      closePreview();
    }
  });
})();

=======
// Wenn der Nutzer die Systemeinstellung ändert, Bewegung neu bewerten
if (typeof motionQuery.addEventListener === "function") {
  motionQuery.addEventListener("change", () => {
    document
      .querySelectorAll(
        ".hero-main, .hero-photo-wrap, .project-card, .btn-primary, .tab-button"
      )
      .forEach((el) => {
        el.style.transform = "translate(0px, 0px)";
      });
    setupTiltMotion();
  });
}

// =====================================
// Einfache Bildvorschau unter den Projektkarten
// =====================================
(function setupImagePreview() {
  const previewSection = document.getElementById('image-preview');
  const previewImage = document.getElementById('image-preview-image');
  const previewClose = document.getElementById('image-preview-close');

  if (!previewSection || !previewImage || !previewClose) return;

  const projectImages = document.querySelectorAll('.project-card .project-image');

  // gemerkte Scrollposition
  let lastScrollPosition = 0;

  projectImages.forEach(img => {
    img.addEventListener('click', () => {
      // Scrollposition merken
      lastScrollPosition = window.scrollY;

      // Bild einsetzen
      previewImage.src = img.src;
      previewImage.alt = img.alt || '';

      // Bereich anzeigen
      previewSection.classList.remove('hidden');

      // smooth zur Vorschau scrollen
      previewSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  // schließen
  previewClose.addEventListener('click', () => {
    previewSection.classList.add('hidden');
    previewImage.src = '';
    previewImage.alt = '';

    // zurück zur alten Scrollposition
    window.scrollTo({ top: lastScrollPosition, behavior: 'smooth' });
  });
})();
>>>>>>> 8aaa0cd6c2f1ac6300dbba9cbb2d97da076ee4bb
