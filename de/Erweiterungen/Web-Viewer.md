---
permalink: plugins/web-viewer
---
Der Web-Viewer ist eine [[Obsidian-Erweiterungen|integrierte Erweiterung]], mit der du externe Links innerhalb von Obsidian auf dem Desktop öffnen kannst. So kannst du Linkinhalte lesen, ohne die App zu verlassen, und die Arbeit an Web-Rechercheprojekten wird durch einfacheres Multitasking erleichtert.

Externe Links werden als [[Tabs|Tab]] geöffnet, den du neu anordnen, teilen und in einem [[Pop-out-Fenster]] öffnen kannst. Alle in [[Canvas]]-Dateien eingebetteten Webseiten-Karten können als Web-Viewer-Tabs geöffnet werden.

Der Web-Viewer ist kein Ersatz für deinen primären Browser. Der Web-Viewer bietet eine schnelle Möglichkeit, Webseiten für die Recherche innerhalb von Obsidian aufzurufen. Er bietet jedoch nicht den vollen Funktionsumfang, die Sicherheitskontrollen oder die Erweiterbarkeit eines dedizierten Browsers.

## Leser-Ansicht

Klicke auf das Brillen-Symbol, um eine reine Textversion der Webseite anzuzeigen. Diese Funktion bereinigt den Inhalt mithilfe von Mozillas Readability-Bibliothek, die für Firefox entwickelt wurde.

## In Vault speichern

Klicke auf das Symbol für weitere Aktionen, um eine Webseite in deinem Vault zu speichern. Du kannst den Speicherort anpassen, indem du zu **[[Einstellungen]]** → **Web-Viewer** navigierst.

## Werbeblocker

Der Web-Viewer blockiert standardmäßig Werbung. Du kannst die Werbeblocker-Regeln anpassen, indem du Listen wie [Easylist](https://easylist.to/) hinzufügst.

## Sicherheit

Wenn du externe Obsidian-Erweiterungen verwendest, empfehlen wir, für sensible Aufgaben und passwortgeschützte Websites deinen primären Browser anstelle des Web-Viewers zu verwenden.

Der Web-Viewer basiert auf derselben [Chromium](https://developer.chrome.com/docs/apps/reference/webviewTag)-Funktion, mit der du Webseiten in [[Canvas]] einbetten kannst. Der Web-Viewer wurde [unabhängig geprüft](https://obsidian.md/blog/cure53-second-client-audit/), um sicherzustellen, dass er sicher implementiert wurde.

Obsidian-Erweiterungen [[Plugin-Sicherheit#Erweiterungsfähigkeiten|sind nicht in einer Sandbox isoliert]] und haben tiefgreifende Kontrolle über die App. Dieses Design ermöglicht leistungsstarke Funktionalität, bringt aber auch sicherheitsrelevante Kompromisse mit sich. Während Obsidian läuft, haben externe Erweiterungen vollen Zugriff auf Cookies im Web-Viewer.
