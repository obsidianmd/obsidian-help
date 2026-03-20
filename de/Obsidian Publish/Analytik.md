---
permalink: publish/analytics
---
## Voraussetzungen

Um Analytik auf Ihrer [[Einführung in Obsidian Publish|Obsidian Publish]]-Website zu verwenden, benötigen Sie eine [[Benutzerdefinierte Domains|eigene Domain]].

> [!important] Wichtig
> Bevor Sie Analytik aktivieren, stellen Sie sicher, dass Ihre lokalen Gesetze und Vorschriften es Ihnen erlauben, Ihre Besucher zu tracken. Abhängig von den verwendeten Tools müssen Sie möglicherweise ein Einwilligungsbanner zu Ihrer Website hinzufügen.

## Google Analytics

Um Google Analytics für Ihre Obsidian Publish-Website zu aktivieren:

1. Klicken Sie in der Werkzeugleiste links im Anwendungsfenster auf **Änderungen veröffentlichen** ( ![[lucide-send.svg#icon]] ).
2. Klicken Sie im Dialog **Änderungen veröffentlichen** auf **Seiteneinstellungen ändern** ( ![[lucide-cog.svg#icon]] ).
3. Geben Sie unter **Google Analytics Tracking-Code** Ihren Tracking-Code ein.

Um statt Google Analytics den Google Tag Manager zu verwenden, nutzen Sie benutzerdefiniertes JavaScript, um Ihre eigenen Skripte hinzuzufügen.

## Plausible, Fathom und andere Analytik-Dienste

Sie können die meisten Analytik-Dienste über Ihre [[Website anpassen|publish.js]]-Datei zu Ihrer Website hinzufügen. Stellen Sie sicher, dass Sie `yourdomain.com` durch Ihre Domain und das Skript `src` durch das Skript Ihres Analytik-Anbieters ersetzen.

Hier ist ein Beispiel mit [Plausible Analytics](https://plausible.io/):

```js
var analyticsScript = document.createElement('script');
analyticsScript.defer = true;
analyticsScript.setAttribute('data-domain', 'yourdomain.com');
analyticsScript.src = 'https://plausible.io/js/plausible.js';
document.head.appendChild(analyticsScript);
```

Der gleiche Ansatz kann für [Fathom Analytics](https://usefathom.com/) verwendet werden. Beachten Sie die Änderung von `data-domain` zu `data-site` — verschiedene Analytik-Anbieter können ein unterschiedliches Format für die Einbindung des Skripts verwenden.

```javascript
var fathom = analyticsScript.createElement('script');
analyticsScript.defer = true;
analyticsScript.setAttribute('data-site', 'yourdomain.com');
analyticsScript.src = 'https://cdn.usefathom.com/script.js';
document.head.appendChild(analyticsScript);
```

## Fehlerbehebung

Um zu überprüfen, ob Ihre Website Ihren Analytik-Dienst verwendet, deaktivieren Sie alle Werbeblocker-Browsererweiterungen wie uBlock Origin, die möglicherweise die Ausführung des Tracking-Skripts blockieren.
