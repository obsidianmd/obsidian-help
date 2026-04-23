---
permalink: web-clipper/highlight
aliases:
  - Highlight web pages
  - Evidenziare pagine web
---
[[Introduzione a Obsidian Web Clipper|Web Clipper]] ti permette di evidenziare il testo sulle pagine web e selezionare gli elementi che desideri salvare in Obsidian. Le evidenziazioni vengono salvate così puoi rivederle quando torni su una pagina.

Le evidenziazioni possono essere salvate in Obsidian usando l'estensione. Puoi definire le opzioni dell'evidenziatore nelle impostazioni dell'estensione.

<div style="padding:62.29% 0 0 0;position:relative;"><div class="interface" style="height:100%;left:0;position:absolute;top:0;width:100%;"><iframe src="https://fast.wistia.net/embed/iframe/f2674kdaot?web_component=true&seo=false" title="2026-04-22 Video" allow="autoplay; fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" width="100%" height="100%"></iframe></div></div>

## Usare l'evidenziatore

L'evidenziatore può essere usato sulle pagine web in tempo reale o nel [[Lettore]]. Nella vista Reader, la creazione di una selezione di testo offre l'opzione di evidenziarla.

Puoi anche aggiungere automaticamente le selezioni alle tue evidenziazioni, attivando l'evidenziatore:

- ![[lucide-highlighter.svg#icon]] **Icona dell'evidenziatore** nel pannello dell'estensione o nella barra degli strumenti del Reader.
- **Tasti di scelta rapida** personalizzabili nelle impostazioni dell'estensione.
- **Menu contestuale** facendo clic con il tasto destro sulla pagina web che stai visitando.

Una volta attivato l'evidenziatore, qualsiasi testo, immagine ed elemento selezionato verrà aggiunto alle tue evidenziazioni. Tutti i metodi sopra indicati permettono anche di uscire dall'evidenziatore.

## Aggiungere evidenziazioni alle note

Ci sono tre opzioni per inserire le evidenziazioni nelle note ritagliate:

- **Evidenzia il contenuto della pagina** — aggiunge le evidenziazioni direttamente nel testo con la [[Obsidian Flavored Markdown|sintassi]] `==highlight==`.
- **Sostituisci il contenuto della pagina** — restituisce un elenco di evidenziazioni, senza alcun contenuto della pagina.
- **Non fare nulla** — restituisce il contenuto originale senza evidenziazioni.
 
Queste opzioni modificano la [[Variabili|variabile]] `{{content}}` nel tuo modello. Puoi anche aggiungere le evidenziazioni direttamente al tuo modello usando la variabile `{{highlights}}`, per esempio:

```
{{highlights|map: item => item.text|join:"\n\n"}}
```

## Visualizzare e cercare le evidenziazioni

Tutte le evidenziazioni create possono essere visualizzate nella pagina Evidenziazioni. Puoi aprire questa pagina andando in **Impostazioni** → **Evidenziatore**.

## Esportare le evidenziazioni

Le evidenziazioni possono essere esportate in un file `.json`, sia dalla pagina Impostazioni che dalla pagina Evidenziazioni.
