---
permalink: teams/security
cssclasses:
  - soft-embed
aliases:
  - Security considerations for teams
---
La nostra pagina [Sicurezza](https://obsidian.md/security) raccoglie informazioni su come Obsidian si occupa della protezione dei tuoi dati. È anche il punto di riferimento per gli audit di sicurezza completati da terze parti.

## Considerazioni

Obsidian è progettato per funzionare come un'applicazione offline e autonoma. Obsidian supporta anche plugin e temi personalizzati. Inoltre, forniamo supporto sia ufficiale che non ufficiale per vari servizi di sincronizzazione file.

Se non si intende utilizzare plugin o temi della community, né [[Introduction to Obsidian Sync|Obsidian Sync]] né [[Introduction to Obsidian Publish|Obsidian Publish]], si applicano le procedure standard per la protezione delle applicazioni. Tuttavia, se si prevede di utilizzare una qualsiasi di queste funzionalità, si consiglia di valutarne attentamente l'idoneità per il proprio ambiente di lavoro.

## Plugin e temi della community

Si prega di consultare la pagina [[Plugin security|Sicurezza dei plugin]] oltre a questa sezione.

Il team di Obsidian esamina tutti i plugin e i temi della community inviati alla directory ufficiale, tramite il nostro [repository delle release](https://github.com/obsidianmd/obsidian-releases/pulls?q=is%3Apr+is%3Aopen+sort%3Aupdated-desc). Non esaminiamo elementi della community che non sono stati inviati alla directory ufficiale.

Non disponiamo di uno store della community per i [[CSS snippets|frammenti CSS]]. Questi file vengono tipicamente ottenuti dalla nostra [Community di Obsidian](https://obsidian.md/community) o da repository pubblici su GitHub.

Richiediamo il raggruppamento delle risorse nei frammenti CSS e nei temi. Tuttavia, abbiamo fatto un'eccezione per [Google Fonts](https://fonts.google.com/) per mantenere le prestazioni sui dispositivi mobile, dove l'impatto del raggruppamento dei font è più evidente.

## Rete e accesso

Pur dando priorità all'approccio local-first della nostra applicazione, Obsidian effettua chiamate di rete in base ai servizi e alle funzionalità utilizzate. Queste connessioni di rete possono essere disabilitate tramite un firewall di dominio o il blocco dell'applicazione.

Obsidian effettua queste connessioni di rete sulla porta HTTPS 443.

Di seguito è riportato un elenco delle connessioni di rete effettuate da Obsidian.

### Connessioni originate da Obsidian

- **Aggiornamenti ad accesso anticipato**: Utilizza `releases.obsidian.md`.
- **Gestione account e licenze**: Quando si accede al proprio account Obsidian nelle Impostazioni e si applica una licenza commerciale, viene effettuata una chiamata a `api.obsidian.md`.
- **Obsidian Sync**: Utilizzato per sincronizzare le note tra i dispositivi.
	- `sync-xx.obsidian.md`, dove `xx` è un numero compreso tra 01-100.
- **Obsidian Publish**:
    1. Backend: `publish-main.obsidian.md` e `publish-xx.obsidian.md`, dove `xx` è un numero.
    2. Frontend: `publish.obsidian.md`.

### Connessioni originate da GitHub

Obsidian effettua richieste di rete sia verso `github.com` che verso `raw.githubusercontent.com`.

- **Release pubbliche**: Se gli aggiornamenti automatici sono abilitati, Obsidian verifica su GitHub la disponibilità di release pubbliche.
- **Temi e plugin di terze parti**:
    - Viene effettuato un controllo ogni 12 ore dall'avvio dell'app per recuperare un file ospitato su GitHub utilizzato per le "deprecazioni dei plugin". Questo file aiuta a disabilitare da remoto versioni specifiche di plugin noti per malfunzionamenti, perdita di dati o potenziali vulnerabilità o comportamenti dannosi.
    - I plugin abilitati possono generare traffico di rete al di fuori del controllo di Obsidian e GitHub.

### Altre connessioni

- **Contenuti online incorporati**: Quando si aprono note che incorporano contenuti online, come un'immagine (`![gatto](https://upload.wikimedia.org/wikipedia/commons/0/0b/Cat_poster_1.jpg)`).
- **Richieste DNS**: Se un nome host deve essere risolto prima di stabilire una connessione, incluso DNS over HTTPS. Fare riferimento alla [documentazione di Chromium](https://source.chromium.org/chromium/chromium/src/+/main:net/dns/public/doh_provider_entry.cc;l=120?q=chrome.cloudflare-dns.com&ss=chromium) per ulteriori informazioni.

## Domande frequenti

### Sicurezza dell'account

**Obsidian supporta il Single Sign-On (SSO)?**
Obsidian non supporta l'SSO. Nella maggior parte dei casi d'uso, Obsidian non richiede un account o un accesso nel proprio ambiente di lavoro, a meno che non si utilizzi [[Introduction to Obsidian Publish|Obsidian Publish]] o [[Introduction to Obsidian Sync|Obsidian Sync]].

**Obsidian supporta l'Autenticazione Multi-Fattore (MFA)?**
Obsidian supporta l'[[2-factor authentication|autenticazione a 2 fattori]] (2FA) per gli account Obsidian, ma non supporta la 2FA per l'apertura e l'utilizzo dell'applicazione base. Gli utenti di [[Introduction to Obsidian Sync|Obsidian Sync]] e [[Introduction to Obsidian Publish|Obsidian Publish]] che hanno la 2FA abilitata dovranno confermare la propria chiave 2FA al primo accesso all'applicazione.

### Valutazioni e certificazioni

**Accettate valutazioni di sicurezza dalla nostra azienda?**
Richiediamo un importo minimo di ordine di acquisto preventivato prima di prendere in considerazione il completamento di una valutazione di sicurezza. Queste valutazioni richiedono spesso molto tempo e potrebbero non essere applicabili ad applicazioni offline come Obsidian, poiché sono tipicamente orientate a servizi basati sul cloud.

Tuttavia, è possibile rinunciare a questo importo minimo di ordine di acquisto accettando di pagare una tariffa di anticipo. Si prega di contattare il [[Help and support#Contattare il supporto Obsidian|supporto Obsidian]] per informazioni su questa opzione.

**Disponete di certificazioni riconosciute relative alla Sicurezza delle Informazioni o a standard di qualità, come ISO27001, NIST, COBIT o altre certificazioni ISO o CSA?**
Non al momento. Potrebbe essere qualcosa che esploreremo in futuro, ma per ora il nostro focus è sugli [audit di sicurezza](https://obsidian.md/security).
