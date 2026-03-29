---
permalink: plugins/slides
---
Bildspel är ett [[Kärntillägg|kärntillägg]] som låter dig skapa presentationer från dina anteckningar. För att starta en presentation:

**Filmeny:**

- Högerklicka på fliken för en anteckning och klicka på **Starta presentation**.

**Kommandopalett:**

1. Tryck `Ctrl+P` (eller `Cmd+P` på macOS) för att öppna [[Kommandopalett|kommandopaletten]].
2. Sök efter kommandot **Starta presentation**.
3. Tryck `Enter` med kommandot valt för att starta en presentation med den aktiva anteckningen.

För att navigera mellan bilderna, klicka på vänster- och högerpilarna i det nedre högra hörnet, eller tryck på vänster och höger piltangent på tangentbordet.

Du kan också gå vidare till nästa bild genom att trycka på mellanslag.

För att stoppa presentationen, tryck `Escape` eller klicka på krysset i det övre högra hörnet av presentationen.

Du kan använda vilken giltig Markdown-fil som helst som en presentation. För att separera bilder, skriv `---` i början av en rad omgiven av tomma rader.

```md
# Presentationer med Bildspel

En demo om hur man bygger presentationer med Bildspel.

---

## Formatering

Du kan använda vanlig Markdown-formatering, som *betonad* och **fet** text.

---

## Bilder

Använd `---` för att separera bilder.
```
