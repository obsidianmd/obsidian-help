---
permalink: web-clipper/highlight
aliases:
  - Highlight web pages
---
[[Introduction to Obsidian Web Clipper|Web Clipper]] ti permette di evidenziare il testo sulle pagine web e selezionare gli elementi che desideri salvare in Obsidian. Le tue evidenziazioni vengono salvate, così puoi rivederle quando torni su una pagina.

Le evidenziazioni possono essere [[Clip web pages|catturate]] e salvate in Obsidian quando apri l'estensione.

## Attivare l'evidenziatore

Puoi attivare l'evidenziazione in diversi modi, a seconda del tuo browser:

- L'icona dell'evidenziatore nel pannello dell'estensione.
- Tasti di scelta rapida, per attivare l'estensione dalla tastiera.
- Menu contestuale, facendo clic con il tasto destro sulla pagina web che stai visitando.

Una volta attivata l'evidenziazione, puoi selezionare testo, immagini ed elementi che desideri evidenziare.

## Impostazioni dell'evidenziatore

Puoi modificare il comportamento dell'evidenziatore andando nelle impostazioni di Web Clipper. Qui puoi anche esportare le tue evidenziazioni in un file `.json`.

Ci sono tre opzioni per inserire le evidenziazioni nella nota ritagliata tramite la [[Variables|variabile]] `{{content}}`:

- **Evidenzia il contenuto della pagina** — aggiunge le evidenziazioni direttamente nel testo con la [[Obsidian Flavored Markdown|sintassi]] `==highlight==`.
- **Sostituisci il contenuto della pagina** — restituisce un elenco di evidenziazioni, senza alcun contenuto della pagina.
- **Non fare nulla** — restituisce il contenuto originale senza evidenziazioni.

Puoi aggiungere le evidenziazioni direttamente al tuo modello usando la variabile `{{highlights}}`, per esempio:

```
{{highlights|map: item => item.text|join:"\n\n"}}
```
