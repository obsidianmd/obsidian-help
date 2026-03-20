---
permalink: publish/troubleshoot
publish: true
mobile: true
description: Questa pagina descrive alcuni problemi comuni che potresti incontrare durante l'uso di Obsidian Publish
aliases:
  - Troubleshoot Obsidian Publish
---
Questa pagina elenca i problemi comuni che potresti incontrare con [[Introduzione a Obsidian Publish|Obsidian Publish]] e come risolverli.

Assicurati di consultare prima [[File multimediali]] e [[Limitazioni di Publish|Limitazioni di Publish]].

## Generale

### Pubblicazione delle note

**Ricevo un errore di hash quando provo a pubblicare una nota.**

Stai usando un [[Plugin della comunità|plugin della community]] che modifica la data di modifica del file durante l'aggiornamento? In tal caso, questo plugin potrebbe entrare in conflitto con Publish. Segnala il bug allo sviluppatore del plugin per risolvere il problema.

**Ricevo uno strano errore di rete e ho un sito Publish molto grande.**

È probabile che sia necessario esaminare il tuo database. [[Aiuto e supporto#Contattare il supporto di Obsidian|Contatta il supporto di Obsidian]] per assistenza.

## CSS e temi

**Il mio CSS nella mia [[Cartella di configurazione]] non funziona su Publish. Perché?**

Publish non legge dalla cartella di configurazione. Dovrai invece creare un file `publish.css` nella directory principale della tua cassaforte di pubblicazione. Puoi saperne di più in [[Personalizzare il sito]].

**Il mio CSS non ha lo stesso aspetto su Publish come nell'app. Perché?**

Il CSS di Obsidian Publish non è esattamente lo stesso dell'applicazione. Raccomandiamo di [sviluppare qualsiasi CSS e tema](https://docs.obsidian.md/Themes/Obsidian+Publish+themes/About+Obsidian+Publish+themes) specificamente per Publish partendo da zero.

In _generale_, ciò che funziona per la [[Viste e modalità di modifica#Vista lettura|vista lettura]] ha buone probabilità di funzionare su Publish.
