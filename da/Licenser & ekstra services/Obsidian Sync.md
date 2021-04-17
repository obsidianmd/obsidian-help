Obsidian Sync™ er en betalt service, hvor du kan synkronisere bokse på tværs af forskellige enheder.

### Hvordan Obsidian Sync fungerer
Obsidian Sync er ret simpel: når du har forbundet lokale bokse fra flere enheder til den samme eksterne boks, vil ændringer automatisk blive synkroniseret mellem disse lokale bokse, bortset fra filer og mapper, som du har bedt Obsidian om at ignorere.

### Funktioner

I øjeblikket har Obsidian Sync følgende funktioner:

- Slut-til-slut kryptering
- Versionshistorik integreret i Obsidian
- Vis slettede filer
- Selektiv synkronisering
	- Fravælg bestemte mapper
	- Vælge og fravælge synkronisering af billeder, lyd, video og PDF filer
- Skifte mellem flere eksterne bokse

I fremtiden forbedrer vi Obsidian Sync med:

- Deling af bokse
- Synkronisere `.obsidian` konfigurationer, hvis det ønskes (for at synkronisere plug-ins og temaer)

### Aktivere Obsidian Sync plug-in'et

I Obsidian v0.9.21 eller nyere kan du aktivere Obsidian Sync ved at aktivere "Synkroniser" plug-in'et i "Indstillinger -> Kerne plug-ins".

### Opsætte eksterne bokse
Advarsel: Vi anbefaler ikke at du benytter tredjeparts synkroniserings services med den samme boks som med Obsidian Sync. [[#Tredjeparts synkronisering|Mere om det senere]].

For at begynde synkronisering skal du først oprette en ekstern boks, som gemmer dine krypterede data.

Du gør dette ved at gå til "Indstillinger -> Synkroniser -> Vælg ekstern boks -> Vælg -> Opret ny ekstern boks"

Når boksen er oprettet kan du med det samme forbinde dig til boksen ved at klikke på "Forbind" knappen ved siden af.

Du kan vælge enten at begynde synkronisering øjblikkeligt efter du er forbundet eller vælge mapper, som du vil ignorere.

##### Sæt krypteringskodeord

Som standard skal du angive et krypteret kodeord til din boks. Detter kodeord benyttes til at kryptere og dekryptere dine data og det er ekstremt vigtigt at huske det.

Du bliver spurgt efter kodeordet hver gang du opsætter synkronisering med en krypteret boks. ==Hvis du glemmer kodeordet vil dine data forblive krypteret og ubrugelige for altid Vi er ikke i stand til at gendanne dit kodeord eller det krypterede data for dig==. Dine lokale filer er ikke berørt.

Du kan også vælge at slå indstillingen "Tilpas kodeord til slutpunkt-til-slutpunkt (end-to-end) kryptering" fra og overlade krypteringen til os. Dette er rimeligt sikkert og betyder, at du ikke behøver at skulle huske et kodeord.

### Tjek synkroniseringsstatus

Når du er forbundet til ekstern boks, kan du tjekke den nuværende synkroniseringsstatus i statusbaren nederst i Obsidian. Du kan føre musemarkøren henover statusikonet for at læse mere om, hvad der sker lige nu.

En genvej til at åbne synkroniseirngsindstillingerne er at klikke på statusikonet.

### Versionshistorik
Der gemmes versioner af dine noter cirka hver 10 sekund, mens du redigerer i dem.
==Versionshistorik er kun ilgængelig for noter. Ikke for vedhæftninger.==

Du kan højreklikke på en fil i stifinderpanelet for at se dens versionshistorik. Denne funktion er også tilgængelig i "Flere muligheder" menuen.

Når du har valgt en version i den venstre kolonne på versionshistorikskærmen, kan du genskabe filen i den version ved at klikke på "Gendan denne version".

### Slettede filer

Når du har slettet en fil kan du se den i "Indstillinger -> Synkroniser -> Slettede filer".

Klikker du på en slettet fil vil dens versionshistorik blive åbnet. Du kan nu vælge at gendanne filen til en tidligere version.

### Selektiv synkronisering

Du kan foretage selektive synkroniseringer af filer efter mappe eller filtype. ==Selektiv synkronisering gælder kun for fremtidige ændringer. Filer, der allerede er lagt i den eksterne boks vil ikke blive slettet selv hvis du vælger at ignorere dem. Så sørg for at konfigurere dette inden du starter synkroniseringsprocessen.==

##### Fravælge mapper
Du kan fravælge mapper i "Indstillinger -> Synkroniser -> Udelukkede mapper -> Administrer", så de ikke bliver synkroniseret.

Udelukkede mapper vil blive ignoreret af synkroniseringen begge veje.

#### Fil typer

Du kan vælge og fravælge synkronisering af billeder, lyd, video og PDF filer i "Indstillinger -> Synkroniser -> Selektiv synkronisering".

### Tredjeparts synkronisering
Hvis du benytter Obsidian Sync, anbefaler vi ikke at du benytter tredjeparts synkroniseringsservices som Dropbox, Google Drive, OneDrive, eller iCloud til at synkronisere den samme boks mellem enheder, hvor du også benytter Obsidian Sync. Hvis du gør det, kan det skabe konflikter, duplikerede filer, eller i værste fald kan det lede til ødelagte filer.

Hvis du sætter Obsidian Sync og en tredjeparts synkroniseringsservice til at syknronisere en boks mellem to enheder samtidig kan det følgende ske:
- Hvis Obsidian Sync "vinder" løbet og synkroniserer din fil først, vil din tredieparts synkroniseringsservice generere en "konfliktende kopi".
- Hvis din tredjeparts synkroniseringsservice "vinder" løbet og synkroniserer din fil først, vil Obsidian Sync forsøge at flette de meget ens versioner, hvilket ofte leder til, at de sidste tegn du har skrevet bliver rullet tilbage.

Hvis du vil opretholde en backup af din boks ved hjælp af en tredjeparts synkroniseringsservice, kan du stadig gøre dette ved at sætte den til at synkronisere boksen på din primære enhed, men ikke på dine sekundære enheder. Dette vil sikre at din tredjeparts synkroniseringsservice ikke konfliker med Obsidian Sync.

### Ofte stillede spørgsmål

##### Hvad er slut-til-slut kryptering?

Slut-til-slut kryptering betyder at data er krypteret i det øjeblik det forlader din enhed, og kan kun dekrypteres ved at benytte din krypteringsnøgle, når den er tilbage på en af dine enheder.

Vi har ikke mulighed for at lsæe dine data, heller ikke potentielle aflyttere, såsom din internetudbyder.

I sjældne tilfælde af fuldstændig serverbrud, vil dine data forblive krypterede og ingen vil kunne dekryptere dine filer uden at kende dit kdoeord.

##### hvor mange eksterne bokse kan jeg have?

Hver konto med Obsidian Sync kan have på til 5 eksterne bokse.

##### Hvor længe gemmes historikken?

Versionshidtorikken gemmes i op til et år før vi rydder op i den.

##### Hvor meget kan hver eksterne boks fylde?

I øjeblikket kan hver eksterne boks indholde op til 4 GB data inkusiv versionshistorik.

##### Er min data krypteret på min harddisk?

Nej, dine data ligger stadig i almindelig tekst på din harddisk. Hvis du ønsker at kryptere den for andre, der benytter din computer, så skal du selv finde en disk krypteringsløsning.

##### Hvor længe bliver min data gemt efter at mit abonnement udløber?

Data i dine eksterne bokse, inklusiv versionshistorik, bliver gemt i en måned, efter dit abonnement udløber.

Så længe, at du fornyer dit abonnement indenfor en måned, skulle det ikke have indflydelse på din brug.

##### Kan jeg benytte Obsidian Sync som en backupløsning?

Obsidian Sync er designet som en data synkroniseringsservice og ikke en backup service.

Med versionshistorik tilbyder den nogle backup funktioner, men vi anbefaler stadig at du har yderligere backup foranstaltninger.

Obsidian Sync er for nuværende i beta testning, så vi anbefaler stærkt at du selv tager backup i tilfælde af software fejl eller andre fejl.

##### Skal jeg vælge mit eget krypteringskodeord?

Ved at vælge dit eget kodeord opnår du det højeste niveau af sikkerhed og privatliv. Dette garanterer at alle, som ikke kender dit kodeord, aldrig vil være i stand til at læse dine noter.

Det kan være lettere, at lade os håndtere din krypteringsnøgle, da du ikke behøver tænke på at glemme eller miste dit kdoeord.

Din lokale boks er ikke påvirket af denne mulighed. Hvis du sørger for ordentlig backup af din boks, bliver det ikke et problem for dig. 

##### Er slut-til-slut krypteringen stærk?

Vi benytter industristandarden AES-256 til at kryptere dine data. AES-256 er en militær sikkerhedskrypterings specifikation, som også er udbredt blandt online banker.

Her er de tekniske detaljer, hvis du er interesseret:

- Anvendt nøgleafledningsfunktion: scrypt med frø
- Anvendt krypteringsalgoritme: AES-256 med GCM
