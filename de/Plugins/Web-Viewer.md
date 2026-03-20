---
permalink: plugins/web-viewer
---
Der Web-Viewer ist eine [[Obsidian-Erweiterungen|integrierte Erweiterung]], mit der Sie externe Links innerhalb von Obsidian auf dem Desktop öffnen können. So können Sie Linkinhalte lesen, ohne die App zu verlassen, und die Arbeit an Web-Rechercheprojekten wird durch einfacheres Multitasking erleichtert.

Externe Links werden als [[Tabs|Tab]] geöffnet, den Sie neu anordnen, teilen und in einem [[Pop-out-Fenster]] öffnen können. Alle in [[Canvas]]-Dateien eingebetteten Webseiten-Karten können als Web-Viewer-Tabs geöffnet werden.

Der Web-Viewer ist kein Ersatz für Ihren primären Browser. Der Web-Viewer bietet eine schnelle Möglichkeit, Webseiten für die Recherche innerhalb von Obsidian aufzurufen. Er bietet jedoch nicht den vollen Funktionsumfang, die Sicherheitskontrollen oder die Erweiterbarkeit eines dedizierten Browsers.

## Leser-Ansicht

Klicken Sie auf das Brillen-Symbol, um eine reine Textversion der Webseite anzuzeigen. Diese Funktion bereinigt den Inhalt mithilfe von Mozillas Readability-Bibliothek, die für Firefox entwickelt wurde.

## In Vault speichern

Klicken Sie auf das Symbol für weitere Aktionen, um eine Webseite in Ihrem Vault zu speichern. Sie können den Speicherort anpassen, indem Sie zu **[[Einstellungen]]** → **Web-Viewer** navigieren.

## Werbeblocker

Der Web-Viewer blockiert standardmäßig Werbung. Sie können die Werbeblocker-Regeln anpassen, indem Sie Listen wie [Easylist](https://easylist.to/) hinzufügen.

## Sicherheit

Wenn Sie externe Obsidian-Erweiterungen verwenden, empfehlen wir, für sensible Aufgaben und passwortgeschützte Websites Ihren primären Browser anstelle des Web-Viewers zu verwenden.

Der Web-Viewer basiert auf derselben [Chromium](https://developer.chrome.com/docs/apps/reference/webviewTag)-Funktion, mit der Sie Webseiten in [[Canvas]] einbetten können. Der Web-Viewer wurde [unabhängig geprüft](https://obsidian.md/blog/cure53-second-client-audit/), um sicherzustellen, dass er sicher implementiert wurde.

Obsidian-Erweiterungen [[Plugin-Sicherheit#Erweiterungsfähigkeiten|sind nicht in einer Sandbox isoliert]] und haben tiefgreifende Kontrolle über die App. Dieses Design ermöglicht leistungsstarke Funktionalität, bringt aber auch sicherheitsrelevante Kompromisse mit sich. Während Obsidian läuft, haben externe Erweiterungen vollen Zugriff auf Cookies im Web-Viewer.
