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

1. Nell'angolo in basso a sinistra, fare clic su **[[Impostazioni|Impostazioni]]** ![[lucide-cog.svg#icon]].
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

È possibile usare `{{date}}` e `{{time}}` in modo intercambiabile con le stringhe di formato, ad esempio `{{time:YYYY-MM-DD}}`.

È possibile modificare i formati predefiniti di data e ora in **[[Impostazioni|Impostazioni]] → Modelli → Formato data** e **[[Impostazioni|Impostazioni]] → Modelli → Formato ora**. ^template-settings-date-time-formatting

> [!tip] Suggerimento
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

## Inserire un modello nella nota attiva

**Importante:** Per inserire un modello, è necessario prima [[#Impostare la cartella dei modelli]].

1. Nella barra degli strumenti, fare clic su **Inserisci modello**.
2. Selezionare il modello da inserire nella posizione del cursore nella nota attiva.

Per inserire un modello utilizzando la [[Riquadro comandi|tavolozza dei comandi]] o [[Tasti di scelta rapida#Impostare una scorciatoia da tastiera|una scorciatoia da tastiera personalizzata]], usare il comando `Modelli: Inserisci modello`.

Il contenuto del modello viene inserito nella posizione corrente del cursore. Se il cursore non si trova nel corpo della nota, il contenuto viene inserito nell'ultima posizione del cursore.

### Proprietà dei modelli

![[Proprietà#^templates-properties]]

## Inserire la data e l'ora correnti nella nota attiva

Usare i comandi `Modelli: Inserisci data corrente` e `Modelli: Inserisci ora corrente` per inserire la data e l'ora correnti nella posizione attuale del cursore. Come il comando `Inserisci modello`, è possibile farlo con la [[Riquadro comandi|tavolozza dei comandi]] o [[Tasti di scelta rapida#Impostare una scorciatoia da tastiera|una scorciatoia da tastiera personalizzata]].

La data e l'ora inserite utilizzano la [[#^template-settings-date-time-formatting|formattazione impostata nelle impostazioni del plugin]].
