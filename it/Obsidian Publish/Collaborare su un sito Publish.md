---
permalink: publish/collaborate
publish: true
mobile: true
description: Scopri come collaborare con altri utenti Obsidian sul tuo sito Obsidian Publish.
aliases:
  - Collaborate on a Publish site
---
Scopri come collaborare sul tuo sito [[Introduction to Obsidian Publish|Obsidian Publish]] con altri utenti Obsidian. Aggiungendo amici e colleghi come collaboratori, potranno pubblicare modifiche sul tuo sito.

Solo il proprietario del sito necessita di un abbonamento attivo per Obsidian Publish. I collaboratori hanno bisogno solo di un [account Obsidian](https://obsidian.md/it/account).

> [!warning] Prima di pubblicare modifiche su un sito condiviso, assicurati di [[#Sincronizzare le modifiche tra collaboratori|sincronizzare le modifiche tra collaboratori]]. Altrimenti, rischi di sovrascrivere le modifiche di altri collaboratori.

## Aggiungere un collaboratore a un sito

1. Nella [[Ribbon|barra degli strumenti]], seleziona **Pubblica modifiche** (![[lucide-send.svg#icon]]) oppure apri la [[Command palette|tavolozza dei comandi]] e digita **Publish: Pubblica modifiche**
2. Nella finestra di dialogo **Pubblica modifiche**, fai clic su **Modifica le opzioni del sito** ![[lucide-cog.svg#icon]].
3. Accanto a **Collaboratori sito**, seleziona **Gestisci**.
4. In **Invita utente**, inserisci l'email del collaboratore.
5. Seleziona **Aggiungi**.

## Rimuovere un collaboratore da un sito

1. Nella [[Ribbon|barra degli strumenti]], seleziona **Pubblica modifiche** (![[lucide-send.svg#icon]]) oppure apri la [[Command palette|tavolozza dei comandi]] e digita **Publish: Pubblica modifiche**
2. Nella finestra di dialogo **Pubblica modifiche**, fai clic su **Modifica le opzioni del sito** ( ![[lucide-cog.svg#icon]] ).
3. Accanto a **Collaboratori sito**, seleziona **Gestisci**.
4. Accanto al collaboratore che vuoi rimuovere, seleziona **Rimuovi utente** ( ![[lucide-x.svg#icon]]).

## Sincronizzare le modifiche tra collaboratori

Obsidian Publish non sincronizza automaticamente le modifiche pubblicate tra le cassaforti locali. I collaboratori devono invece sincronizzare manualmente le modifiche degli altri collaboratori.

Per aggiornare una nota locale con le modifiche dal sito live:

1. Nella [[Ribbon|barra degli strumenti]], seleziona **Pubblica modifiche** (![[lucide-send.svg#icon]]) oppure apri la [[Command palette|tavolozza dei comandi]] e digita **Publish: Pubblica modifiche**
2. Fai clic con il tasto destro o premi a lungo sulla modifica che vuoi sincronizzare, quindi seleziona **Usa versione live**. **Questo sovrascriverà la nota nella tua cassaforte locale.**

> [!tip] Ti consigliamo di utilizzare un altro strumento per sincronizzare le modifiche tra le cassaforti, come [[Introduction to Obsidian Sync|Obsidian Sync]] o [git](https://git-scm.com/).

## Permessi

La seguente tabella elenca i permessi disponibili per il sito per proprietari e collaboratori:

| Azione                                        | Collaboratore | Proprietario |
|-----------------------------------------------|:-------------:|:------------:|
| Pubblicare nuove pagine                       | ✓             | ✓            |
| Pubblicare modifiche a pagine pubblicate      | ✓             | ✓            |
| Rimuovere dalla pubblicazione le pagine       | ✓             | ✓            |
| Configurare le opzioni del sito               |               | ✓            |
| Gestire i permessi                            |               | ✓            |
