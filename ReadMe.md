Portfolio Website – Michael Radawicz
Dies ist das Repository meiner persönlichen Portfolio-Webseite. Das Projekt wurde entwickelt, um meine Fähigkeiten als angehender Fachinformatiker für Anwendungsentwicklung zu demonstrieren. Der Fokus lag auf sauberem Code, Barrierefreiheit und einem modernen UI-Design ohne die Verwendung großer Frameworks.

🌟 Features
Modernes Design: "Glassmorphism"-Look mit halbtransparenten Karten und Hintergrund-Unschärfe (backdrop-filter).

Theme-System: Vollständiger Support für Dark Mode, Light Mode und einen High-Contrast Mode.

Die Auswahl wird via localStorage gespeichert.

Automatische Erkennung der Systempräferenz.

Barrierefreiheit (Accessibility):

ARIA-konforme Tab-Navigation (Tastatursteuerung via Pfeiltasten).

Semantisches HTML5 (<main>, <article>, <nav>, etc.).

Respektiert prefers-reduced-motion Systemeinstellungen, um Animationen für empfindliche Nutzer zu deaktivieren.

Responsive Design: Vollständig angepasst für Desktop, Tablet und Mobile (CSS Grid & Flexbox).

Interaktive UI: Leichte 3D-Tilt-Effekte auf Karten (mit Mausbewegung), implementiert in Vanilla JavaScript.

🛠 Technologien
Das Projekt verzichtet bewusst auf schwere Frameworks, um fundierte Grundlagenkenntnisse in den Web-Core-Technologien zu zeigen:

HTML5: Semantische Strukturierung.

CSS3:

CSS Custom Properties (Variables) für das Theming.

Modernes Layout mit Grid und Flexbox.

Media Queries für Responsiveness.

JavaScript (ES6+):

DOM-Manipulation ohne jQuery.

Event-Handling für Tabs und Theme-Switcher.

State-Management für UI-Komponenten.

🚀 Installation & Nutzung
Da es sich um eine statische Webseite handelt, ist keine komplexe Installation (npm/node) notwendig.

Repository klonen:

Bash

git clone https://github.com/michaelradawiczofficial/portfolio-website.git
Öffnen: Öffne einfach die Datei index.html in einem modernen Webbrowser.

Alternativ (für Live-Reloading während der Entwicklung): Verwende die "Live Server" Extension in VS Code.

📂 Projektstruktur
Plaintext

/
├── index.html      # Hauptstruktur und Inhalt
├── style.css       # Alle Styles, Themes und Animationen
├── script.js       # Logik für Themes, Tabs und Motion-Effects
└── asset/
    └── Bilder/     # Profilbilder und Hintergründe
🎨 Design-Details
Theme Switcher Logik
Der Theme-Switcher (script.js) prüft beim Laden, ob ein Theme im localStorage hinterlegt ist. Falls nicht, wird ein Fallback-Wert genutzt. Das CSS nutzt Attribut-Selektoren ([data-theme="light"]), um Farben dynamisch auszutauschen.

Tab-System
Die Tabs unter "Inhalte" sind nicht nur visuell, sondern auch logisch verknüpft. Das JavaScript sorgt dafür, dass aria-selected und tabindex Attribute korrekt gesetzt werden, um Screenreadern und Tastaturnutzern eine reibungslose Navigation zu ermöglichen.

📢 Kontakt & Praktikum
Ich befinde mich aktuell in der Umschulung zum Fachinformatiker Anwendungsentwicklung (Lutz & Grub AG) und suche ein Pflichtpraktikum ab dem 16.01.2026 (Raum Karlsruhe/Baden-Baden).

Interesse an einer Zusammenarbeit? Erstellen Sie gerne ein Issue in diesem Repository mit dem Betreff "Kontaktaufnahme".

Hinweis: Das Kontaktformular auf der Webseite ist ein technisches Mockup (Demonstration).

© 2025 Michael Radawicz