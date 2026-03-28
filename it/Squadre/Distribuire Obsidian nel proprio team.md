---
permalink: teams/deploy
cssclasses:
  - soft-embed
aliases:
  - Deploy Obsidian across your team
---
Obsidian funziona come applicazione locale su ciascun dispositivo dei membri del tuo team. È progettato per funzionare sia online che offline, in modo sicuro e privato, dandoti il pieno controllo sui dati del tuo team. Obsidian non è disponibile come applicazione web, pertanto sarà necessario distribuire l'app ai membri del tuo team.

## Installa e aggiorna Obsidian

Il tuo team può scaricare Obsidian dalla nostra [pagina di download](https://obsidian.md/it/download). Le versioni sono disponibili anche nella nostra [pagina delle release su GitHub](https://github.com/obsidianmd/obsidian-releases/releases) che include collegamenti al [registro delle modifiche](https://obsidian.md/it/changelog/).

> [!tip] Per gli utenti Windows che necessitano di un programma di installazione di sistema, l'`.exe` universale include l'opzione per installare Obsidian per tutti gli utenti.

Se gli aggiornamenti automatici sono abilitati nell'app, le versioni future verranno installate automaticamente quando gli utenti riavviano Obsidian. Inoltre, raccomandiamo di eseguire periodicamente [[Aggiorna Obsidian#Aggiornamenti del programma di installazione|aggiornamenti del programma di installazione]] per ricevere gli ultimi aggiornamenti del framework Electron, incluse le correzioni di sicurezza.

Se stai cercando come limitare l'accesso di rete a Obsidian durante questo processo, consulta [[Considerazioni sulla sicurezza per i team#Rete e accesso|rete e accesso]].

## Personalizzare Obsidian

Obsidian è facile da modificare per adattarsi alle esigenze del tuo team. Con un'ampia API e un vasto ecosistema di utenti, Obsidian offre accesso a numerosi plugin, temi e strumenti complementari.

Per domande relative alla sicurezza riguardanti questi argomenti, fai riferimento a [[Considerazioni sulla sicurezza per i team]].

### Cartelle di configurazione

La [[Cartella di configurazione]] è dove una [[Glossario#Cassaforte|cassaforte]] di Obsidian memorizza le impostazioni dell'applicazione. Per impostazione predefinita, questa cartella si chiama `.obsidian`, ma hai la flessibilità di [[Cartella di configurazione#Cambiare la cartella di configurazione|cambiare la cartella di configurazione]] secondo le tue preferenze.

Raccomandiamo di creare un modello standardizzato della cartella di configurazione da distribuire sui dispositivi del tuo team.

### Plugin

I [[Plugin principali]] sono funzionalità opzionali create dal team di Obsidian. Queste funzionalità sono integrate nel codice base dell'applicazione e possono essere attivate o disattivate.

I [[Plugin della comunità]] sono funzionalità di terze parti aggiunte all'applicazione Obsidian e possono essere installate tramite la directory della community. I plugin di terze parti utilizzano l'[API di Obsidian](https://github.com/obsidianmd/obsidian-api). I plugin si trovano nella cartella `.obsidian/plugins` all'interno di una cassaforte e possono essere installati manualmente in questa posizione.

### Temi e snippet

I [[Temi]] modificano visivamente l'interfaccia di Obsidian. Come i plugin, i temi possono essere scaricati dalla nostra directory della community. I temi si trovano nella cartella `.obsidian/themes` all'interno di una cassaforte.

Gli [[Snippet CSS|Snippet]] sono piccoli file `.css` che modificano visivamente aspetti dell'interfaccia di Obsidian. In alcuni casi, possono anche aggiungere miglioramenti funzionali. Gli snippet si trovano nella cartella `.obsidian/snippets` all'interno di una cassaforte.

## Domande frequenti

Per domande sulla gestione dell'account e sulla sicurezza, fai riferimento a [[Considerazioni sulla sicurezza per i team#Sicurezza dell'account|sicurezza dell'account]].

### Distribuzione

**Posso distribuire licenze su più installazioni?**
Attualmente, non supportiamo la distribuzione di licenze tramite uno script di distribuzione, come in un file `.json`. Se sei interessato a questa funzionalità per il tuo team, invia una [richiesta di funzionalità](https://forum.obsidian.md/c/feature-requests/8).

**Obsidian può bloccare determinate funzionalità o configurazioni tramite un'impostazione o un flag dell'applicazione?**
Attualmente puoi farlo bloccando l'accesso in modifica alla cartella `.obsidian`, o a file e cartelle specifici al suo interno, come descritto sopra. Se sei interessato a maggiori controlli di accesso per il tuo team, invia una [richiesta di funzionalità](https://forum.obsidian.md/c/feature-requests/8).
