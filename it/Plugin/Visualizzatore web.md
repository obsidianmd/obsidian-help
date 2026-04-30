---
permalink: plugins/web-viewer
aliases:
  - Web viewer
---
Il visualizzatore web è un [[Plugin principali|plugin principale]] che consente di aprire collegamenti esterni all'interno di Obsidian su desktop. Questo permette di leggere il contenuto dei collegamenti senza uscire dall'app e facilita il multitasking nei progetti di ricerca web.

I collegamenti esterni si aprono come [[Schede|schede]] che puoi riorganizzare, dividere e aprire in una [[Finestre pop-out|finestra esterna]]. Qualsiasi scheda di pagine web incorporata nei file [[Lavagna]] può essere aperta come scheda del visualizzatore web.

Il visualizzatore web non sostituisce il tuo browser principale. Il visualizzatore web offre un modo rapido per accedere alle pagine web per la ricerca all'interno di Obsidian. Tuttavia, non offre la piena funzionalità, i controlli di sicurezza o l'estensibilità di un browser dedicato.

## Vista lettore

Fai clic sull'icona degli occhiali per visualizzare una versione in testo normale della pagina web. Questa funzionalità opera pulendo il contenuto tramite la libreria Readability di Mozilla sviluppata per Firefox.

## Salva nel vault

Fai clic sull'icona altre azioni per salvare una pagina web nella tua cassaforte. Puoi personalizzare la posizione di salvataggio della pagina andando su **[[Impostazioni|Impostazioni]]** → **Visualizzatore web**.

## Blocco pubblicità

Il visualizzatore web blocca la pubblicità per impostazione predefinita. Puoi personalizzare le regole blocco pubblicità aggiungendo liste come [Easylist](https://easylist.to/).

## Sicurezza

Se utilizzi plugin di Obsidian di terze parti, ti consigliamo di usare il tuo browser principale per attività sensibili e siti web protetti da password invece del visualizzatore web.

Il visualizzatore web è basato sulla stessa funzionalità [Chromium](https://developer.chrome.com/docs/apps/reference/webviewTag) che consente di incorporare pagine web in [[Lavagna]]. Il visualizzatore web è stato [sottoposto a un audit indipendente](https://obsidian.md/it/blog/cure53-second-client-audit/) per verificare che sia stato implementato in modo sicuro.

I plugin di Obsidian [[Sicurezza dei plugin#Funzionalità dei plugin|non sono isolati in sandbox]] e hanno un controllo profondo sull'app. Questo design consente funzionalità potenti ma comporta anche compromessi in termini di sicurezza. Mentre Obsidian è in esecuzione, i plugin di terze parti hanno pieno accesso ai cookie nel visualizzatore web.
