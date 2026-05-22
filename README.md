# claudiu.info

Dieses Repository enthält die statische GitHub-Pages-Seite `claudiu.info`.

Die Seite dient als persönlicher SAP-Coding- und Lernpfad von Claudiu Dangulea. Sie bündelt Kursinformationen, Lernmodule, Ressourcen, Dokumentation und persönliche Notizbereiche rund um ABAP, SAP BTP, SAPUI5, CDS Views, Workflows, Formulare sowie Integrations- und Erweiterungsthemen.

## Zweck der Seite

Ziel des Projekts ist eine übersichtliche, statische Lernplattform für SAP-Entwicklungsthemen. Die Inhalte sollen Lernpfade, offizielle Kursressourcen, kurze fachliche Einordnungen und praktische Beispiele an einem Ort zusammenführen.

Die Seite ist bewusst einfach gehalten:

- statische HTML-Seiten
- keine Build-Pipeline
- keine Framework-Abhängigkeit
- direkte Veröffentlichung über GitHub Pages
- lokale Notizfunktionen im Browser bzw. Download als Textdatei

## Aktuelle Seitenstruktur

```text
/
├── index.html
├── abap-code-lernen/
├── btp-abap-trial/
├── cds-views/
├── dokumentation/
├── impressum/
├── integration-erweiterungen/
├── sapui5/
└── workflow-formulare/
```

## Inhaltliche Bereiche

### Übersicht

Die Startseite enthält eine Übersicht über die wichtigsten Themenbereiche und verweist auf die jeweiligen Unterseiten.

### ABAP Code lernen

Die Seite `abap-code-lernen/` behandelt Grundlagen der ABAP-Programmierung, einfache Minimalbeispiele, objektorientierte Konzepte und Ressourcen zu einzelnen Lernmodulen.

### BTP ABAP Trial einrichten

Die Seite `btp-abap-trial/` dokumentiert den Aufbau einer ABAP-Cloud-Trial-Umgebung. Sie enthält eine zusammenfassende Einführung, eingebettete externe Dokumentation und eine Screenshot-Galerie zum Einrichtungsprozess.

### SAPUI5

Die Seite `sapui5/` sammelt Ressourcen und Hinweise zur Entwicklung moderner Benutzeroberflächen mit SAPUI5.

### CDS Views

Die Seite `cds-views/` behandelt Grundlagen der Datenmodellierung, semantische Datenmodelle und erweiterte Datenabfragen mit CDS Views.

### Workflow und Formulare

Die Seite `workflow-formulare/` bündelt Inhalte zu SAP Workflows, Formularentwicklung und der Verbindung von Prozesslogik und Benutzerinteraktion.

### Integration und Erweiterungen

Die Seite `integration-erweiterungen/` behandelt Schnittstellen, Erweiterungsmöglichkeiten, User-Exits, BAdIs, Webservices und Integrationsaspekte.

### Dokumentation

Die Seite `dokumentation/` dokumentiert die Erstellung und Weiterentwicklung dieser GitHub-Pages-Seite.

### Impressum

Die Seite `impressum/` enthält die rechtlich relevanten Angaben zum Seitenbetreiber.

## Offizielle Lernressourcen

Die Seite verweist unter anderem auf folgende SAP-Lernressourcen:

- SAP Learning: Developing UIs with SAPUI5
- SAP Learning: Advanced SAPUI5 Development
- SAP Learning Journey: Acquiring Core ABAP Skills
- SAP Learning Journey: Developing SAPUI5 Applications
- SAP Learning Journey: Developing Business Processes with SAP Process Orchestration
- ergänzende YouTube-Ressource zur SAP- bzw. ABAP-Lernumgebung

## Technischer Aufbau

Das Repository ist als einfache statische Website aufgebaut. Jede Unterseite liegt in einem eigenen Ordner und verwendet dort eine eigene `index.html`.

Beispiel:

```text
abap-code-lernen/index.html
btp-abap-trial/index.html
sapui5/index.html
```

Dadurch sind die Seiten unter GitHub Pages direkt als Pfade erreichbar, z. B.:

```text
https://intiequals1.github.io/claudiu.info/abap-code-lernen/
https://intiequals1.github.io/claudiu.info/btp-abap-trial/
```

## GitHub Pages

Die Seite wird über GitHub Pages aus dem Branch `main` veröffentlicht.

Aktuelle technische Basis:

```text
Branch: main
Source: Deploy from a branch
Ordner: / root
```

Die Domain `claudiu.info` wurde im Projektkontext als Custom Domain vorbereitet. DNS-seitig wurden GitHub-Pages-A-Records und ein `www`-CNAME eingerichtet. Die endgültige Aktivierung in GitHub Pages hängt von der Custom-Domain-Zuordnung in GitHub ab.

## Assets

Screenshots und Bilddateien für die BTP-ABAP-Trial-Dokumentation liegen im Bereich:

```text
btp-abap-trial/assets/screenshots/
```

Diese Dateien werden für die Screenshot-Galerie auf der BTP-ABAP-Trial-Seite verwendet.

## Bearbeitungshinweise

Für neue Seiten:

1. Neuen Ordner im Repository anlegen.
2. Darin eine `index.html` erstellen.
3. Von der Startseite oder einer passenden Unterseite verlinken.
4. Optional einen Link `Zurueck zur Uebersicht` ergänzen.
5. Änderungen committen.
6. GitHub Pages Deployment abwarten.

Für bestehende Seiten:

1. Gewünschte `index.html` öffnen.
2. Inhalt bearbeiten.
3. Commit mit sprechender Commit Message erstellen.
4. Veröffentlichung auf GitHub Pages prüfen.

## Status

Dieses Repository befindet sich im Aufbau. Die wichtigsten Lernseiten sind angelegt, einzelne Inhalte und Ressourcen werden laufend ergänzt.

## Lizenz und Nutzung

Die Inhalte dienen primär als persönliche Lern- und Dokumentationsseite. Externe Ressourcen bleiben Eigentum der jeweiligen Anbieter. Offizielle SAP-Inhalte werden nur verlinkt und nicht als eigene Inhalte übernommen.
