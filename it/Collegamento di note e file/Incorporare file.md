---
permalink: embeds
cssclasses:
  - soft-embed
aliases:
  - Embed files
---
Per incorporare un file nella tua cassaforte, aggiungi un punto esclamativo (`!`) davanti a un [[Collegamenti interni|collegamento interno]]. Puoi incorporare file in qualsiasi dei [[Formati di file accettati]].

> [!tip] Incorpora con trascina e rilascia
> Su desktop, puoi anche trascinare e rilasciare i file supportati direttamente nella tua nota per incorporarli automaticamente.

## Incorporare una nota in un'altra nota

Per incorporare una nota:

```md
![[Collegamenti interni]]
```

Puoi anche incorporare collegamenti a [[Collegamenti interni#Collegamento a un'intestazione in una nota|intestazioni]] e [[Collegamenti interni#Collegamento a un blocco in una nota|blocchi]].

```md
![[Collegamenti interni#^b15695]]
```

Il testo seguente è un esempio di un blocco incorporato:

![[Collegamenti interni#^b15695]]

## Incorporare un'immagine in una nota

Per incorporare un'immagine:

```md
![[Engelbart.jpg]]
```

![[Engelbart.jpg#outline]]

Puoi modificare le dimensioni dell'immagine aggiungendo `|640x480` alla destinazione del collegamento, dove 640 è la larghezza e 480 è l'altezza.

```md
![[Engelbart.jpg|100x145]]
```

Se specifichi solo la larghezza, l'immagine viene ridimensionata in base alle sue proporzioni originali. Ad esempio, `![[Engelbart.jpg|100]]`.

![[Engelbart.jpg#outline|100]]

Puoi anche incorporare un'immagine ospitata esternamente utilizzando un collegamento Markdown. Puoi controllare la larghezza e l'altezza allo stesso modo di un collegamento wiki.

```md
![250](https://publish-01.obsidian.md/access/f786db9fac45774fa4f0d8112e232d67/Attachments/Engelbart.jpg)
```

![250](https://publish-01.obsidian.md/access/f786db9fac45774fa4f0d8112e232d67/Attachments/Engelbart.jpg)

## Incorporare un file audio in una nota

Per incorporare un file audio:

```md
![[Excerpt from Mother of All Demos (1968).ogg]]
```

![[Excerpt from Mother of All Demos (1968).ogg]]

## Incorporare un PDF in una nota

Per incorporare un PDF:

```md
![[Document.pdf]]
```

Puoi anche aprire una pagina specifica del PDF aggiungendo `#page=N` alla destinazione del collegamento, dove `N` è il numero della pagina:

```md
![[Document.pdf#page=3]]
```

Puoi anche specificare l'altezza in pixel per il visualizzatore PDF incorporato aggiungendo `#height=[number]` al collegamento. Ad esempio:

```md
![[Document.pdf#height=400]]
```

## Incorporare un elenco in una nota

Per incorporare un elenco da una nota diversa, aggiungi prima un [[Collegamenti interni#Collegamento a un blocco in una nota|identificatore di blocco]] al tuo elenco:

```md

- elemento elenco 1
- elemento elenco 2

^my-list-id
```

Poi collega all'elenco usando l'identificatore di blocco:

```md
![[La mia nota#^my-list-id]]
```

## Incorporare risultati di ricerca

![[Cerca#Incorporare risultati di ricerca in una nota]]
