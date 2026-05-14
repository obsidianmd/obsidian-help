---
permalink: plugins/templates
cssclasses:
  - soft-embed
publish: true
mobile: true
description: Modelli è un plugin principale che consente di inserire frammenti di testo predefiniti nella nota attiva.
aliases:
  - Templates
---
Modelli è un [[Plugin principali|plugin principale]] che consente di inserire frammenti di testo predefiniti nella nota attiva.

## Impostare la cartella dei modelli

1. Nell'angolo in basso a sinistra, selezionare **[[Impostazioni|Impostazioni]]** ![[lucide-cog.svg#icon]].
2. In **Plugin principali → Modelli → Posizione cartella dei modelli**, inserire la cartella contenente i modelli.

## Variabili dei modelli

È possibile aggiungere informazioni dinamiche ai modelli utilizzando le _variabili dei modelli_. Quando si inserisce un modello contenente una variabile, Modelli la sostituisce con il valore corrispondente.

| Variabile   | Descrizione                                                   |
|-------------|---------------------------------------------------------------|
| `{{title}}` | Titolo della nota attiva.                                     |
| `{{date}}`  | La data odierna. **Formato predefinito:** `YYYY-MM-DD`.       |
| `{{time}}`  | L'ora corrente. **Formato predefinito:** `HH:mm`.             |

Sia `{{date}}` che `{{time}}` consentono di modificare il formato predefinito utilizzando una _stringa di formato_.

Per impostare una stringa di formato, aggiungere i due punti (`:`) seguiti da una stringa di [token di formato Moment.js](https://momentjs.com/docs/#/displaying/format/), ad esempio `{{date:YYYY-MM-DD}}`.

È possibile usare `{{date}}` e `{{time}}` con le stringhe di formato allo stesso modo, ad esempio `{{time:YYYY-MM-DD}}`.

È possibile modificare i formati predefiniti di data e ora in **[[Impostazioni|Impostazioni]] → Plugin principali → Modelli → Formato data** e **[[Impostazioni|Impostazioni]] → Plugin principali → Modelli → Formato ora**. ^template-settings-date-time-formatting

> [!tip]- Usare le variabili di data e ora in altri plugin
> È possibile utilizzare le variabili dei modelli `{{date}}` e `{{time}}` anche nei plugin [[Note del giorno|Note del giorno]] e [[Note univoche|Note univoche]].

## Creare un modello

Nella [[#Impostare la cartella dei modelli|cartella dei modelli]], [[Gestisci le note#Creare una nuova nota|creare una nota]] contenente il testo che si desidera far apparire quando si utilizza il modello. È possibile usare le [[#Variabili dei modelli|variabili dei modelli]] per il testo dinamico come la data corrente.

Ad esempio, ecco un modello per appunti di studio:

```markdown
---
topic: 
date: "{{date}}"
course: 
tags:
  - studies
---

# {{title}}

## Concetti chiave


## Dettagli importanti


## Esempi


## Domande
- 

## Riepilogo


## Argomenti correlati
- [[]]
```

> [!warning]+ Modificare i modelli in modalità Sorgente
> In [[Viste e modalità di modifica#Anteprima dinamica|Anteprima dinamica]], il pannello **Proprietà nel documento** può sovrascrivere le variabili dei modelli che non hanno virgolette.
>
> Per evitare questo problema, modificare i modelli in [[Viste e modalità di modifica#Modalità sorgente|modalità sorgente]], oppure impostare **[[Impostazioni|Impostazioni]] → Editor → [[Impostazioni#Proprietà nel documento|Proprietà nel documento]]** su **Sorgente**.

## Inserire un modello nella nota attiva

> [!todo] [[#Impostare la cartella dei modelli]] prima di inserire un modello.

1. Nella barra degli strumenti, selezionare **Inserisci modello**.
2. Selezionare il modello da inserire nella posizione del cursore nella nota attiva.

Per inserire un modello utilizzando la [[Riquadro comandi|tavolozza dei comandi]] o [[Tasti di scelta rapida#Impostare una scorciatoia da tastiera|una scorciatoia da tastiera personalizzata]], usare il comando `Modelli: Inserisci modello`.

Il contenuto del modello viene inserito nella posizione corrente del cursore. Se il cursore non si trova nel corpo della nota, il contenuto viene inserito nell'ultima posizione del cursore.

### Proprietà dei modelli

![[Proprietà#^templates-properties]]

## Inserire la data e l'ora correnti nella nota attiva

Usare i comandi `Modelli: Inserisci data corrente` e `Modelli: Inserisci ora corrente` per inserire la data e l'ora correnti nella posizione attuale del cursore. Come il comando `Inserisci modello`, è possibile eseguirli anche con il riquadro comandi o una scorciatoia da tastiera personalizzata.

La data e l'ora inserite utilizzano la [[#^template-settings-date-time-formatting|formattazione impostata nelle impostazioni del plugin]].
