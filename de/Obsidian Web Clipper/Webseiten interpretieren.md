---
permalink: web-clipper/interpreter
---
Interpreter ist eine Funktion des [[Einführung in Obsidian Web Clipper|Web Clippers]], mit der du über natürliche Sprache mit Webseiten interagieren kannst. Interpreter hilft dir, Daten zu erfassen und zu modifizieren, die du in Obsidian speichern möchtest. Zum Beispiel:

- Bestimmte Textfragmente extrahieren.
- Informationen zusammenfassen oder erklären.
- Text von einem Format in ein anderes konvertieren.
- Text in eine andere Sprache übersetzen.

Interpreter nutzt Sprachmodelle, um Informationen auf einer Webseite zu verarbeiten und Ergebnisse mithilfe von [[Variablen]] zurückzugeben, die du deinen [[Obsidian Web Clipper/Vorlagen|Web Clipper-Vorlagen]] hinzufügen kannst.

![[web-clipper-interpreter-demo.mp4#interface]]

## Beispiele für Prompts

Prompts verwenden die [[Variablen|Variablen]]-Syntax `{{"dein Prompt"}}`. Du kannst diese Syntax mit jeder Anfrage in natürlicher Sprache verwenden, z. B.

- `{{"a summary of the page"}}` um eine Zusammenfassung der Seite zu extrahieren.
- `{{"a three bullet point summary, translated to French"}}` um Aufzählungspunkte über die Seite zu extrahieren und sie ins Französische zu übersetzen.
- `{{"un resumé de la page en trois points"}}` um drei Aufzählungspunkte mit einem Prompt auf Französisch zu extrahieren.

Die Ausgabe deiner Prompts kann mit [[Filter|Filtern]] weiter bearbeitet werden. Filter werden verarbeitet, nachdem die Prompt-Antwort vom Modell empfangen wurde. Zum Beispiel: `{{"a summary of the page"|blockquote}}` wandelt die Antwort in ein Blockzitat um.

## Erste Schritte

Interpreter funktioniert mit fast jedem Sprachmodell-Anbieter, einschließlich Optionen, die privat auf deinem Gerät laufen. So richtest du Interpreter ein:

1. Gehe zum Abschnitt **Interpreter** in den Web Clipper-Einstellungen.
2. Aktiviere **Interpreter aktivieren**.
3. Konfiguriere deinen Anbieter und dein Modell, siehe Abschnitt [[Webseiten interpretieren#Modelle|Modelle]] unten.
4. Füge [[Variablen|Prompt-Variablen]] zu deinen [[Obsidian Web Clipper/Vorlagen|Vorlagen]] hinzu.
5. Wenn deine Vorlage Prompt-Variablen enthält, wird der Interpreter-Abschnitt sichtbar, wenn du [[Webseiten ausschneiden|eine Seite ausschneidest]]. Klicke auf **Interpretieren**, um die Prompt-Variablen zu verarbeiten.

## Funktionsweise

Wenn Interpreter aktiviert ist *und* deine Vorlage [[Variablen#Prompt-Variablen|Prompt-Variablen]] enthält, wird ein neuer Interpreter-Abschnitt im Erweiterungsfenster über der Schaltfläche **Zu Obsidian hinzufügen** angezeigt. In diesem Abschnitt kannst du ein Modell auswählen und Interpreter für die aktuelle Seite ausführen.

Wenn du auf **Interpretieren** klickst, sendet Interpreter den Seitenkontext an dein ausgewähltes Modell, zusammen mit *allen* Prompts in deiner Vorlage in einer einzigen Anfrage. Je nach gewähltem Modellanbieter kann dies ein externer Aufruf oder lokal auf deinem Gerät sein. Das Modell wertet deine Prompts gegen den Seitenkontext aus und gibt seine Antworten zurück. Interpreter ersetzt dann die Prompt-Variablen durch die Antwortdaten.

Der gesamte Prozess kann Millisekunden oder mehr als 30 Sekunden dauern, abhängig vom verwendeten Modell und der zu verarbeitenden Datenmenge.

## Kontext

Der Begriff *Kontext* bezieht sich auf die Seitendaten, die Interpreter zur Verarbeitung von Prompts verwendet. Je kleiner der Kontext, desto schneller läuft Interpreter.

Standardmäßig verwendet Interpreter das gesamte HTML der Seite als Kontext, was Prompts jedoch langsamer und teurer als nötig machen kann.

Du kannst den Standardkontext in den **Erweiterten Einstellungen** von Interpreter überschreiben und den Kontext pro [[Obsidian Web Clipper/Vorlagen|Vorlage]] definieren.

Um einen gezielteren Kontext zu definieren, verwende [[Variablen#Selektor-Variablen|Selektor-Variablen]] (oder andere Variablentypen), um einen Abschnitt der Seite zu interpretieren. Zum Beispiel könntest du die folgende Selektor-Variable im Interpreter-Kontext deiner Vorlage verwenden:

```
{{selectorHtml:#main}}
```

Dies würde Interpreter nur auf das `#main`-Element einer Webseite ausführen, falls es existiert. [[Filter#HTML-Verarbeitung|HTML-Verarbeitungsfilter]] wie `remove_html`, `strip_tags` und `strip_attr` können nützlich sein, um die Kontextlänge weiter zu reduzieren und die Verarbeitung zu beschleunigen.

## Modelle

> [!warning] Datenschutz
> Durch die Nutzung eines Drittanbieter-Modellanbieters stimmst du dessen Nutzungsbedingungen und Datenschutzrichtlinie zu. Interpreter-Anfragen werden direkt an den von dir gewählten Anbieter gesendet. Obsidian sammelt oder speichert keine Daten über deine Anfragen.

### Voreingestellte Anbieter

Interpreter enthält mehrere voreingestellte Anbieter. Um diese Anbieter zu nutzen, benötigst du einen API-Schlüssel, den du durch Anmelden bei deinem Anbieterkonto erhältst. Du musst auch entscheiden, welche(s) Modell(e) du verwenden möchtest.

| Anbieter           | API-Schlüssel                                                | Modelle                                                                               |
| ------------------ | ----------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| Anthropic          | [API-Schlüssel](https://console.anthropic.com/settings/keys) | [Modelle](https://docs.anthropic.com/en/docs/about-claude/models)                     |
| Azure&nbsp;OpenAI  | [API-Schlüssel](https://oai.azure.com/portal/)               | [Modelle](https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/models) |
| DeepSeek           | [API-Schlüssel](https://platform.deepseek.com/api_keys)           | [Modelle](https://api-docs.deepseek.com/quick_start/pricing)                          |
| Google&nbsp;Gemini | [API-Schlüssel](https://aistudio.google.com/apikey)          | [Modelle](https://ai.google.dev/gemini-api/docs/models/gemini)                        |
| Hugging Face       | [API-Schlüssel](https://huggingface.co/settings/tokens)           | [Modelle](https://huggingface.co/models?pipeline_tag=text-generation&sort=trending)   |
| Meta               | [API-Schlüssel](https://llama.developer.meta.com)                 | [Modelle](https://llama.developer.meta.com/docs/models)                               |
| Ollama             | n/a                                                         | [Modelle](https://ollama.com/search)                                                  |
| OpenAI             | [API-Schlüssel](https://platform.openai.com/api-keys)        | [Modelle](https://platform.openai.com/docs/models)                                    |
| OpenRouter         | [API-Schlüssel](https://openrouter.ai/settings/keys)         | [Modelle](https://openrouter.ai/models)                                               |
| Perplexity         | [API-Schlüssel](https://www.perplexity.ai/settings/api)           | [Modelle](https://docs.perplexity.ai/guides/model-cards)                              |
| xAI Grok           | [API-Schlüssel](https://console.x.ai/team/default/api-keys)       | [Modelle](https://docs.x.ai/docs/models)                                              |

### Ein Modell auswählen

Im Allgemeinen empfehlen wir die Verwendung kleiner Modelle mit Web Clipper, da sie schneller sind und für diese Aufgabe recht genau arbeiten. Beispiele für kleinere Modelle sind **Anthropics Claude Haiku**, **Google Gemini Flash**, **Llama** mit 3B oder 8B Parametern oder **OpenAIs Mini**-Modellreihe.

### Benutzerdefinierte Anbieter und Modelle

Um einen benutzerdefinierten Anbieter und/oder ein Modell hinzuzufügen, gehe zu Web Clipper **[[Einstellungen]]** → **Interpreter**:

- **Anbieter hinzufügen**, um voreingestellte und benutzerdefinierte Anbieter zu konfigurieren.
- **Modell hinzufügen**, um voreingestellte und benutzerdefinierte Modelle zu konfigurieren.

Beim Hinzufügen eines benutzerdefinierten Anbieters empfehlen wir, dessen Chat-Completions-Endpunkt als **Basis-URL** zu verwenden — dieser endet typischerweise mit `/chat/completions`.

### Lokale Modelle

Interpreter kann lokale Modelle verwenden, die mehr Datenschutz und Offline-Kompatibilität bieten. Es gibt mehrere Möglichkeiten, lokale Modelle auszuführen. Eine der am einfachsten zu konfigurierenden ist Ollama.

#### Ollama

[Ollama](https://ollama.com/) ermöglicht es dir, Sprachmodelle lokal und privat auf deinem Gerät auszuführen.

Nachdem du Ollama heruntergeladen und installiert hast, füge Ollama über **Anbieter hinzufügen** in den Interpreter-Einstellungen hinzu. Ollama benötigt keinen API-Schlüssel. Wähle dann ein Modell aus der [Modellliste](https://ollama.com/search). Wenn du beispielsweise [Llama 3.2](https://ollama.com/library/llama3.2) verwenden möchtest, klicke auf **Modell hinzufügen** und gib ein:

- **Anbieter:** Ollama
- **Anzeigename:** Llama 3.2, dieser Wert ist anpassbar.
- **Modell-ID:** `llama3.2`, dies muss exakt mit der Modell-ID von Ollama übereinstimmen.

**Den Ollama-Server starten**

Um einer Browser-Erweiterung die Interaktion mit Ollama zu ermöglichen, musst du beim Starten des Servers eine [explizite Anweisung geben](https://github.com/ollama/ollama/issues/2308), da du andernfalls einen `403`-Fehler erhältst.

Schließe die Ollama-App und führe den folgenden Befehl in deinem Terminal aus. Das Protokoll sollte auf das Erweiterungsprotokoll deines Browsers geändert werden, wenn du nicht Chrome oder Firefox verwendest.

```
OLLAMA_ORIGINS=moz-extension://*,chrome-extension://*,safari-web-extension://* ollama serve
```

Führe dann dein Modell wie gewohnt mit Ollama aus, z. B.

```
ollama run llama3.2
```

**Kontextlänge**

Das Kontextfenster von Ollama beträgt standardmäßig 2048 Token. Dies ist die maximale Anzahl an Token für die Nachricht und die Antwort. Beim Ausschneiden einer langen Webseite kannst du dieses Limit leicht überschreiten. Ollama schlägt dann stillschweigend fehl und gibt irrelevante Ergebnisse zurück. Einige Optionen:

- Erhöhe den `num_ctx`-Parameter von Ollama. Beachte, dass ein längerer Kontext mehr Arbeitsspeicher benötigt.
- Verwende das Feld [[#Kontext]] in deiner Vorlage, um einen gezielteren Abschnitt der Seite bereitzustellen, oder kürze den Kontext mit einem [[Filter]], z. B. `{{content|slice:0,1000}}`.
