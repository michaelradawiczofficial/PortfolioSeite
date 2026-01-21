<<<<<<< HEAD
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
=======
# 🌐 PortfolioSeite – Persönliches Entwickler-Portfolio

Dieses Projekt ist meine **persönliche Portfolio-Website**, entwickelt in **HTML, CSS und JavaScript**.  
Die Seite stellt meine Softwareprojekte vor und zeigt, wie ich **moderne Weboberflächen strukturiert aufbaue** – ohne Frameworks, mit klar geordnetem Code und responsivem Layout.

Das Projekt entstand im Rahmen meiner **Umschulung zum Fachinformatiker für Anwendungsentwicklung**, um Arbeitgebern einen **überblickbaren und echten Eindruck** meiner Arbeit zu geben.

---

## 🎯 Ziel des Projekts

Mein Ziel war eine **klare, professionelle Darstellung** meiner Projekte, die sowohl für Personalverantwortliche als auch für technische Fachkräfte leicht verständlich ist:

- aufgeräumtes Design
- klare Struktur der Inhalte
- kurze Projektbeschreibungen
- Fokus auf **funktionale Ergebnisse**
- moderne Darstellung (Dark Theme)
- responsive Ansicht für Desktop & Tablet

Die Website zeigt bewusst **keine übertriebenen Animationen**, sondern konzentriert sich auf **Inhalte und Lesbarkeit**.

---

## 🧑‍💻 Funktionsumfang (einfach erklärt)

- Startseite mit persönlicher Vorstellung
- Übersicht der Projekte als **Projektkacheln**
- kurzer Einblick in jedes Projekt:
  - technisch: Sprache, Technologie
  - inhaltlich: Funktion, Ziel
- Links zu GitHub-Repos
- Kontaktbereich (E-Mail, GitHub)
- **frei erweiterbare Struktur**, um neue Projekte aufzunehmen

Die Darstellung ist **bewusst minimalistisch**, um die Aufmerksamkeit auf die Inhalte zu lenken.

---

## 🏛️ Aufbau der Anwendung

Die Portfolio-Seite basiert auf einer **klaren, nachvollziehbaren Struktur**:

- **index.html**  
  Inhalt und Aufbau der Seite

- **style.css**  
  Gestaltung: Farbschema, Kontraste, Layout, Projektkarten

- **script.js**  
  kleinere Interaktionen und Logik (z. B. Theme oder UI-Effekte)

- **/asset**  
  Bilder

Diese Struktur zeigt, dass ich die **Trennung von Inhalt, Design und Logik** konsequent umsetze.

---

## 📂 Assets & Datenstruktur

Alle grafischen Inhalte befinden sich **separat im Ordner**:

/asset

Dort liegen:
- Projektbilder

Die Webseite **lädt keine externen Daten**, sondern nutzt statische Inhalte, wie für ein Portfolio üblich.  
Damit ist die Seite **leicht wartbar**, und Projekte lassen sich einfach ergänzen.

---

## 🧠 Was ich dabei gelernt habe

Dieses Projekt war ein wichtiger Schritt, um **Webentwicklung kundenorientiert** zu denken, nicht nur technisch:

### Design & Struktur
- **UI-Design** mit Fokus auf Lesbarkeit
- Arbeiten mit **Kontrasten, Abständen und Typografie**
- Projektkarten-Konzept für klare Darstellung
- responsive Layout mit flexibler Breite

### Webentwicklung
- Trennung von **HTML, CSS, JavaScript**
- Strukturierung von Projektinhalten
- leichte Erweiterbarkeit für neue Projekte
- Deploy-Vorbereitung (z. B. GitHub Pages)

### Kommunikation
- **Projektbeschreibungen für HR**
- Wie erkläre ich Projekte **kurz und verständlich**
- Reduktion auf das Wesentliche

---

## 🚀 Start

Die Webseite kann **direkt im Browser** geöffnet werden:

1. Dateien entpacken
2. `index.html` per Doppelklick öffnen

Keine Installation oder Konfiguration nötig.

---

## 📌 Warum dieses Projekt wichtig ist

Das Portfolio ist für mich **mehr als eine Website** – es ist ein Werkzeug, um:

- meine Projekte transparent zu machen,
- meinen Lernfortschritt sichtbar zu zeigen,
- und auch **nicht-technische Betrachter** mitzunehmen.

Ich trainiere damit, **komplexe Inhalte einfach zu kommunizieren**, Projekte verständlich aufzubereiten und mich professionell zu präsentieren.

---

## ✍️ Autor

**Michael Radawicz**  
Umschulung zum Fachinformatiker Anwendungsentwicklung  
Portfolio-Seite zur Präsentation von Softwareprojekten
>>>>>>> 8aaa0cd6c2f1ac6300dbba9cbb2d97da076ee4bb
