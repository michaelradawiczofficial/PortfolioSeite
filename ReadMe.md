# Portfolio Website – Michael Radawicz

Dies ist das Repository meiner persönlichen Portfolio-Webseite. Das Projekt wurde entwickelt, um meine Fähigkeiten als angehender Fachinformatiker für Anwendungsentwicklung zu demonstrieren. Der Fokus lag auf sauberem Code, Barrierefreiheit und einem modernen UI-Design ohne die Verwendung großer Frameworks.

**Aktueller Status:** Code-Refactoring durchgeführt (Januar 2026) – Umstellung auf CSS-Variablen & Optimierung für Foldables.

## 🌟 Features

* **Modernes Design:**
    * "Glassmorphism"-Look mit halbtransparenten Karten und Hintergrund-Unschärfe (`backdrop-filter`).
    * Verwendung von CSS Custom Properties (Variablen) für konsistentes Styling.

* **Erweitertes Theme-System:**
    * Vollständiger Support für **Dark Mode**, **Light Mode** und einen **Kontrast-Modus** (High-Contrast).
    * Die Auswahl wird via `localStorage` dauerhaft gespeichert.
    * Automatische Erkennung der Systempräferenz beim ersten Besuch.

* **Barrierefreiheit (Accessibility):**
    * ARIA-konforme Tab-Navigation (Tastatursteuerung via Pfeiltasten).
    * Semantisches HTML5 (`<main>`, `<article>`, `<nav>`, etc.).
    * **NEU:** Verbesserte Fokus-Indikatoren (dicker gelber Rahmen) im Kontrast-Modus für Tastaturnutzer.
    * Respektiert `prefers-reduced-motion` Systemeinstellungen, um Animationen für empfindliche Nutzer zu deaktivieren.

* **Responsive Design & Mobile Optimierung:**
    * Vollständig angepasst für Desktop, Tablet und Mobile (CSS Grid & Flexbox).
    * **NEU:** Spezielle Layout-Regeln für sehr schmale Displays (z. B. **Galaxy Z Fold**), bei denen Header-Elemente gestapelt und Schriftgrößen angepasst werden.

* **Interaktive UI:**
    * Projekt-Galerie mit **Bildvorschau (Lightbox)** ohne externe Bibliotheken.
    * Leichte 3D-Tilt-Effekte auf Karten (mit Mausbewegung), implementiert in Vanilla JavaScript.

## 🛠 Technologien

Das Projekt verzichtet bewusst auf schwere Frameworks, um fundierte Grundlagenkenntnisse in den Web-Core-Technologien zu zeigen:

* **HTML5:** Semantische Strukturierung und Validierung (Doppelte IDs entfernt).
* **CSS3:**
    * **CSS Custom Properties (Variables):** Zentrale Steuerung von Farben und Transparenzen für einfaches Theming.
    * Modernes Layout mit Grid und Flexbox.
    * Granulare Media Queries für Responsiveness.
* **JavaScript (ES6+):**
    * DOM-Manipulation ohne jQuery.
    * **Event Delegation:** Performance-optimiertes Handling für die Bildvorschau.
    * State-Management für Tabs und Theme-Switcher.

## 🚀 Installation & Nutzung

Da es sich um eine statische Webseite handelt, ist keine komplexe Installation (npm/node) notwendig.

1.  **Repository klonen:**
    bash
    git clone [https://github.com/michaelradawiczofficial/portfolio-website.git](https://github.com/michaelradawiczofficial/portfolio-website.git)
    
2.  **Öffnen:**
    Öffne einfach die Datei `index.html` in einem modernen Webbrowser.

*Alternativ (für Live-Reloading während der Entwicklung): Verwende die "Live Server" Extension in VS Code.*

## 📂 Projektstruktur

/
├── index.html      # Hauptstruktur und Inhalt
├── style.css       # Alle Styles (Variablen, Themes, Responsive Rules)
├── script.js       # Logik für Themes, Tabs, Lightbox und Motion-Effects
└── asset/
    └── Bilder/     # Profilbilder und Projekt-Screenshots

🎨 Design-Details & Refactoring
Theme Switcher Logik
Der Theme-Switcher (script.js) prüft beim Laden, ob ein Theme im localStorage hinterlegt ist. Falls nicht, wird ein Fallback-Wert genutzt. Das CSS wurde im Refactoring komplett auf Variablen umgestellt (z. B. --bg-body, --text-main), sodass Themes keine riesigen CSS-Blöcke mehr benötigen, sondern nur noch Variablenwerte austauschen.

Tab-System
Die Tabs unter "Inhalte" sind nicht nur visuell, sondern auch logisch verknüpft. Das JavaScript sorgt dafür, dass aria-selected und tabindex Attribute korrekt gesetzt werden, um Screenreadern und Tastaturnutzern eine reibungslose Navigation zu ermöglichen.

Bildvorschau (Lightbox)
Die Bildvorschau wurde refactorisiert, um Event Delegation zu nutzen. Statt jedem Bild einen einzelnen Event-Listener hinzuzufügen, lauscht das Skript zentral auf Klicks im Container. Dies verbessert die Performance und erleichtert das dynamische Hinzufügen neuer Projekte. Zudem wurden HTML-Validierungsfehler (doppelte IDs) behoben.

📢 Kontakt & Praktikum
Ich befinde mich aktuell in der Umschulung zum Fachinformatiker Anwendungsentwicklung (Lutz & Grub ACADEMY) und suche ein Pflichtpraktikum ab dem 16.01.2026 (Raum Karlsruhe/Baden-Baden).

Interesse an einer Zusammenarbeit? Erstellen Sie gerne ein Issue in diesem Repository mit dem Betreff "Kontaktaufnahme".

Hinweis: Das Kontaktformular auf der Webseite ist ein technisches Mockup (Demonstration).

© 2026 Michael Radawicz