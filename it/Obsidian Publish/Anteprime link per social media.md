---
permalink: publish/social-share
aliases:
  - Social media link previews
---
Molti social network mostrano un'anteprima arricchita del tuo sito web quando un utente condivide un collegamento ad esso. Usando le [[Proprietà]], puoi personalizzare l'aspetto delle tue note nell'anteprima.

> [!warning] Avvertimento
> I tag sovrascritti in questa sezione sono visibili **solo** dai web crawler. I normali browser web ricevono la pagina non modificata per motivi di prestazioni.

## Descrizione

Obsidian genera automaticamente una descrizione basata sul contenuto della nota, ma puoi fornirne una personalizzata usando `description`.

```yaml
---
description: Un'introduzione al nostro sistema solare.
---
```

> [!note] Meta tag
> `description` sovrascrive la descrizione generata automaticamente in `<meta name="description" content="...">` e gli equivalenti per `og:description` e `twitter:description`.

## Immagine

Puoi usare un'immagine personalizzata per l'anteprima del collegamento, aggiungendo `image` o `cover` con un percorso all'immagine. L'immagine deve essere caricata su Obsidian Publish.

Il percorso può essere un percorso assoluto dalla radice della tua cassaforte:

```yaml
---
cover: "Attachments/Cover image.png"
---
```


Il percorso dell'immagine è sensibile alla distinzione maiuscole/minuscole. Nel nostro esempio precedente, abbiamo un percorso a un'immagine chiamata `Cover image.png`. Il percorso seguente non funzionerà, perché utilizza le maiuscole/minuscole in modo errato.

```yaml
---
cover: "Attachments/cover Image.png"
---
```


Al posto di un percorso assoluto nella tua cassaforte, puoi anche usare un URL esterno:

```yaml
---
image: "https://example.com/cover%20image.png"
---
```


`image` e `cover` sono identici. Usa solo uno dei due.

> [!note] Meta tag
> `image` e `cover` sovrascrivono l'immagine generata automaticamente in `<meta property="og:image" content="...">`.
