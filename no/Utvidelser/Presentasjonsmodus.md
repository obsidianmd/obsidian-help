---
permalink: plugins/slides
---
Presentasjonsmodus er en [[Kjerneutvidelser|kjerneutvidelse]] som lar deg lage presentasjoner fra notatene dine. For å starte en presentasjon:

**Filmeny:**

- Høyreklikk på fanen til et notat og klikk **Start presentasjon**.

**Kommandopalett:**

1. Trykk `Ctrl+P` (eller `Cmd+P` på macOS) for å åpne [[Kommandovelger|kommandopaletten]].
2. Søk etter kommandoen **Start presentasjon**.
3. Trykk `Enter` med kommandoen valgt for å starte en presentasjon med det aktive notatet.

For å navigere mellom lysbilder, klikk på venstre og høyre pil i nedre høyre hjørne, eller trykk på venstre og høyre piltast på tastaturet.

Du kan også gå videre til neste lysbilde ved å trykke mellomromstasten.

For å stoppe presentasjonen, trykk `Escape` eller klikk på krysset i øvre høyre hjørne av presentasjonen.

Du kan bruke hvilken som helst gyldig Markdown-fil som en presentasjon. For å skille lysbilder, skriv `---` i starten av en linje omgitt av tomme linjer.

```md
# Presentasjoner med Presentasjonsmodus

En demo om hvordan du bygger presentasjoner med Presentasjonsmodus.

---

## Formatering

Du kan bruke vanlig Markdown-formatering, som *uthevet* og **fet** tekst.

---

## Lysbilder

Bruk `---` for å skille lysbilder.
```
