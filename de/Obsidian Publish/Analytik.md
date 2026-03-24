---
permalink: publish/analytics
---
## Voraussetzungen

Um Analytik auf deiner [[Einführung in Obsidian Publish|Obsidian Publish]]-Website zu verwenden, benötigst du eine [[Benutzerdefinierte Domains|eigene Domain]].

> [!important] Wichtig
> Bevor du Analytik aktivierst, stelle sicher, dass deine lokalen Gesetze und Vorschriften es dir erlauben, deine Besucher zu tracken. Abhängig von den verwendeten Tools musst du möglicherweise ein Einwilligungsbanner zu deiner Website hinzufügen.

## Google Analytics

Um Google Analytics für deine Obsidian Publish-Website zu aktivieren:

1. Klicke in der Werkzeugleiste links im Anwendungsfenster auf **Änderungen veröffentlichen** ( ![[lucide-send.svg#icon]] ).
2. Klicke im Dialog **Änderungen veröffentlichen** auf **Seiteneinstellungen ändern** ( ![[lucide-cog.svg#icon]] ).
3. Gib unter **Google Analytics Tracking-Code** deinen Tracking-Code ein.

Um statt Google Analytics den Google Tag Manager zu verwenden, nutze benutzerdefiniertes JavaScript, um deine eigenen Skripte hinzuzufügen.

## Plausible, Fathom und andere Analytik-Dienste

Du kannst die meisten Analytik-Dienste über deine [[Website anpassen|publish.js]]-Datei zu deiner Website hinzufügen. Stelle sicher, dass du `yourdomain.com` durch deine Domain und das Skript `src` durch das Skript deines Analytik-Anbieters ersetzt.

Hier ist ein Beispiel mit [Plausible Analytics](https://plausible.io/):

```js
var analyticsScript = document.createElement('script');
analyticsScript.defer = true;
analyticsScript.setAttribute('data-domain', 'yourdomain.com');
analyticsScript.src = 'https://plausible.io/js/plausible.js';
document.head.appendChild(analyticsScript);
```

Der gleiche Ansatz kann für [Fathom Analytics](https://usefathom.com/) verwendet werden. Beachte die Änderung von `data-domain` zu `data-site` — verschiedene Analytik-Anbieter können ein unterschiedliches Format für die Einbindung des Skripts verwenden.

```javascript
var fathom = analyticsScript.createElement('script');
analyticsScript.defer = true;
analyticsScript.setAttribute('data-site', 'yourdomain.com');
analyticsScript.src = 'https://cdn.usefathom.com/script.js';
document.head.appendChild(analyticsScript);
```

## Fehlerbehebung

Um zu überprüfen, ob deine Website deinen Analytik-Dienst verwendet, deaktiviere alle Werbeblocker-Browsererweiterungen wie uBlock Origin, die möglicherweise die Ausführung des Tracking-Skripts blockieren.
