Obsidian permette agli sviluppatori di scrivere plugin di terze parti per estendere le funzionalità di Obsidian.

Al momento, l'API dei plugin è in versione alfa. Ciò significa che, nelle versioni future, l'API potrebbe ricevere radicali e irreversibili modifiche.

### Per gli sviluppatori

Per istruzioni sulla creazione di nuovi plugin, vedere [il nostro plug-in di esempio](https://github.com/obsidianmd/obsidian-sample-plugin).

Per la documentazione sull'API, controllare il [nostro repo API dei plug-in](https://github.com/obsidianmd/obsidian-api).

Dopo aver creato un plugin, è possibile aggiungerlo al marketplace dei plugin della comunità inviando un Pull Request nel [nostro repo delle pubblicazioni](https://github.com/obsidianmd/obsidian-releases). Fare riferimento al plugin di esempio per capire come fare a pubblicare aggiornamenti per un plugin.

### Per gli utenti

#### Modalità sicura

Per impostazione predefinita, Obsidian ha la Modalità sicura attivata per proteggere l'utente da potenziali danni. In Modalità sicura, non verrà eseguito alcun plugin di terze parti.

I plugin di terze parti possono accedere ai file sul computer, connettersi a internet e persino installare programmi aggiuntivi. Per saperne di più sulla sicurezza dei plugin, [[Plugin di terze parti#Sicurezza del plugin|leggere qui]].

Per installare plugin di terze parti, è necessario disattivare la modalità sicura in Impostazioni -> Plugin di terze parti -> Modalità sicura.

#### Scoprire e installare i plugin della comunità

Dopo aver disabilitato la modalità provvisoria, è possibile trovare i plugin di terze parti creati dalla comunità in Impostazioni -> Plugin di terze parti -> Plugin della comunità -> Sfoglia.

In questa pagina, è possibile esplorare i plugin in base alla loro popolarità o cercare plugin specifici. Per vedere i dettagli o le istruzioni dell'autore del plugin, fare clic su "Installa".

Dopo l'installazione, i plugin devono essere abilitati per avere effetto. È possibile trovarli in Impostazioni -> Plugin di terze parti. Possono essere abilitati o disinstallati da lì.

### Sicurezza del plugin

Grazie per aver affidato i vostri dati a Obsidian! Significa molto per noi e prendiamo molto sul serio la sicurezza. Questo riguarda anche i plugin di terze parti.

Per motivi tecnici con la nostra piattaforma, non siamo in grado di limitare i plugin a uno specifico livello di autorizzazione o di accesso. Poiché offriamo Obsidian gratuitamente, attualmente non siamo in grado di revisionare manualmente ogni plugin.

La buona notizia è che Obsidian ha una community sorprendente e appassionata, quindi ci affidiamo con fiducia a loro per garantire la sicurezza dei plugin di terze parti.

In generale, è possibile fidarsi della maggior parte dei plugin più popolari. Inoltre, richiediamo che tutti i plugin di terze parti siano open source su GitHub. **Se state lavorando con dati sensibili, raccomandiamo di controllare personalmente il codice di un plugin prima di installarlo, in modo da soddisfare le vostre esigenze di sicurezza**. È possibile accedere al repository di un plugin nella pagina dei dettagli del plugin stesso.

Se doveste riscontrare qualsiasi problema di sicurezza con un plugin di terze parti, contattate l'autore del plugin segnalandogli il problema su GitHub. Se ritenete che il plugin possa essere dannoso, contattateci per fare in modo che venga esaminato e rimosso.