Obsidian permette agli sviluppatori di scrivere plugin di terze parti per estendere le funzionalità di Obsidian.

Al momento, l'API dei plugin è in stato alfa. Questo significa che qualsiasi parte dell'API potrebbe ricevere radicali e irreversibili modifiche nelle sue future versioni.

### Per gli sviluppatori

Per istruzioni sulla creazione di nuovi plugin, vedi [il nostro plug-in di esempio](https://github.com/obsidianmd/obsidian-sample-plugin).

Per la documentazione sull'API, controlla la [nostra repo API dei plug-in](https://github.com/obsidianmd/obsidian-api).

Dopo aver creato il tuo plugin, puoi aggiungerlo al marketplace dei plugin della community creando un Pull Request nella [nostra repo delle pubblicazioni](https://github.com/obsidianmd/obsidian-releases). Fai riferimento al plugin di esempio per capire come fare a pubblicare aggiornamenti per il tuo plugin.

### Per gli utenti

#### Modalità sicura

Per impostazione predefinita, Obsidian ha la modalità sicura attivata per proteggere l'utente da potenziali danni. In modalità sicura, non verrà eseguito alcun plugin di terze parti.

Tieni presente che i plugin di terze parti possono accedere ai file sul tuo computer, connettersi a internet e persino installare programmi aggiuntivi. Per saperne di più sulla sicurezza dei plugin, [[Plugin di terze parti#Sicurezza del plugin|leggi qui]].

Per installare plugin di terze parti, è necessario disattivare la modalità sicura in Impostazioni -> Plugin di terze parti -> Modalità sicura.

#### Scopri e installa i plugin della community

Dopo aver disabilitato la modalità provvisoria, è possibile trovare i plugin di terze parti creati dalla comunità in Impostazioni -> Plugin di terze parti -> Plugin della community -> Sfoglia.

In questa pagina, è possibile sfogliare i plugin in base alla loro popolarità, o cercare plugin specifici. Clicca su un plugin per vedere i dettagli e le istruzioni dell'autore del plugin. Nella pagina dei dettagli, clicca su"Installa" per installare un plugin.

Dopo l'installazione, è possibile trovare i plugin installati in Impostazioni -> plugin di terze parti. Puoi disinstallarli da lì. Ricorda che devono prima essere abilitati per avere effetto.

### Sicurezza del plugin

Grazie per aver affidato i tuoi dati a Obsidian! Significa molto per noi e prendiamo molto sul serio la sicurezza. Questo riguarda anche i plugin di terze parti.

Per motivi tecnici con la nostra piattaforma, non siamo in grado di limitare i plugin a uno specifico livello di autorizzazione o di accesso. Poiché offriamo Obsidian gratuitamente, attualmente non siamo in grado di revisionare manualmente ogni plugin.

La buona notizia è che Obsidian ha una community sorprendente e appassionata, quindi ci affidiamo con fiducia a loro per garantire la sicurezza dei plugin di terze parti.

In generale, dovresti poterti fidare della maggior parte dei plugin più popolari. Inoltre, richiediamo che tutti i plugin di terze parti siano open source su GitHub. **Se stai lavorando con dati sensibili, ti raccomandiamo di controllare personalmente il codice di un plugin prima di installarlo, in modo da soddisfare le tue esigenze di sicurezza.** Puoi trovare il link al repository di un plugin nella pagina dei dettagli del plugin stesso.

Se dovessi rilevare qualsiasi problema di sicurezza con un plugin di terze parti, contatta l'autore del plugin segnalandogli il problema su GitHub. Se ritieni che il plugin possa essere dannoso, contattaci per fare in modo che venga esaminato e rimosso.