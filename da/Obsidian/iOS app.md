iOS appen er i øjeblikket i [[Mobil app beta|lukket beta]], og er tilgængelig gennem TestFlight.

## Hvor bliver mine bokse gemt?
Hvis du vælger det, kan du gemme din bokse på dit iCloud drev. Disse bokse kan i din iCloud mappe under en app container kaldet "Obsidian", der har et icon med Obsidians logo.

Hvis du ikke vælger at anvende iCloud til en boks, så vil den blive gemt i sandboks filsystemet, som Obsidian har til rådighed. Fra og med v0.0.14, vil den lokale boks nu kunne tilgås fra alle andre apps, som understøtter at kunne vælge en mappe fra filsystemet. Derved kan apps som Working Copy benyttes til at synkronisere med Obsidians lokale bokse.

I øjeblikket understøtter Obsidian ikke tredjeparts synkroniserings udbydere, der eksponerer et virtuelt filsystem gennem "FileProvider".
Vi vi forsøge at understøtte dette på et tidspunkt som en forbedring.

## Synkronisering
De to nuværende officielle supporterede synkroniseringsløsninger er iCloud og Obsidian Sync.

På nuværende tidspunkt er der ingen kendt support for de følgende synkroniseringsservices på iOS:
- Dropbox
- Google Drive
- OneDrive
- Syncthing

Hvis du finder ud af en måde at synkronisere Obsidian ved brug af en af disse services på iOS, vil vi blive meget glad hvis du kan tilmelde dig vores Discord server og lære os, hvordan det kan opsættes.
  
I teorien kan enhver tredjeparts synkroniseringsudbyder der kan tilbyde baggrundssynkronisering af en bestemt mappe på din enhed skulle også virke, men vi har ikke kendskab til nogen andre end "Working Copy". Det skyldes begrænsningerne i den meget komplekse fildelingsfunktion mellem apps i iOS, til forskel fra Android, som stiller en offentlig mappe til rådighed, som alle apps kan benytte. På grund af dette, har de fleste tredjeparts  synkroniseringsudbydere ikke en ordentlig implementering af baggrundssynkronisering på iOS.

### Obsidian Sync
Du kan følge de samme trin som for synkronisering på Android som ses herunder, og husk at oprette en ikke-iCloud mappe,  da vi ikke anbefaler at du benytter både Obsidian Sync og iCloud samtidig, hvilket nogle brugere har rapporteret giver datatab.

![[Android app#Obsidian Sync]]

### iCloud synkronisering
For at opsætte en synkroniseret boks gennem iCloud skal du først installere og åbne Obsidian iOS appen. Dette vil oprette en app mappe kaldet Obsidian, med Obsidian app logoet, på dit iCloud drev. Bemærk at denne mappe bliver betragtet som en speciel mappe af iCloud og den er anderledes end en mappe du manuelt opretter på dit iCloud drev.

Derefter skal du på din computer flytte din boks ind `iCloud Drive/Obsidian/`. Ved at gøre dette giver du Obsidian tilladelse til at læse den specielle app mappe på dit iCloud drev.

Lad iCloud synkronisere hele boks mappen. Når det er gjort, skal du åbne Obsidian appen på din iOS enhed. Du skulle nu kunne se boksen med et skyikon, der indikerer at den er gemt i iCloud.

Første gang du åbner denne boks, vil Obsidian måske fryse et lille stykke tid fordi iCloud downloader alle filerne i baggrunden. Når ICloud er færdig med synkronisere alt over på mobilen skulle appen fungere uden problemer. Det kan dog kræve at du genstarter appen et par gange for den er klar.

### Working Copy
Du kan alternativt opsætte en Working Copy til at benytte Git for at synkronisere din boks på iOS. For at benytte den metode, skal du oprette en tom lokal boks på din enhed først. Derefter kan du "Setup Folder Sync" og vælge en lokal boks i Obsidian applikationen. Derefter kan du manuelt udføre commit og push.


# Tredjeparts synkroniseringssupport
Mange brugere spørger os, hvorfor Obsidian til mobil ikke understøtter deres foretrukne synkroniseringsløsning. Her er en kort forklaring på den nuværende status af synkroniseringssupport for mobil apps.

Det som gør Obsidian forskellig fra andre apps, som f.eks. 1Writer og iA Writer er, at Obsidian arbejder ovenpå en boks og ikke på en enkelt note af gangen. Meget af Obsidians kernefunktionalitet afhænger af hele boksen og alle filerne i den, såsom automatisk færdiggørelse af links, indlejring af billeder, tags panelet, tilbagelinks og alt funtionalitet på tværs af noter.

Til sammenligning, så åbner de fleste Markdown redigeringsapps bare en enkelt note, lader brugeren redigere i den, og gemmer derefter noten. På baggrund af det, så stiller OS (Operativsystemet) og tredjeparts synlroniseringsudbydere typisk kun er API til rådighed til at tilgå og arbejde med en enkelt fil af gangen, og sjældent et API til at arbejde med en boks (som jo er en mappe med filer og muligvis undermapper).

For at synkronisere kan en almindelig Markdown editor nøjes med at implementere en basal "download fil, når du åbner en valgt fil" og "upload filen, når du trykker gem". Obsidian har brug for at downloade hele boksen til sin funktionalitet, og holde øje med alle modificerede filer (F.eks. når du ændrer et filnavn har Obsidian måske brug for at opdatere en lang række andre filer med links, som er ændret pga. ændringen af filnavn). Udover det har Obsidian brug for at overvåge ændringer gennem synkroniseringsløsningen for at kunne opdatere et internt cachesystem når filer ændres, så alle links bliver opdateret korrekt.

Hvis Obsidian skal synkronisere al dette med en tredjeparts synkroniseringsudbyder vil det blive meget omstændigt - og det er derfor en af grundene til, at mange synkroniseringsudbydere ikke laver en ordentlig synkroniseringsklient til mobil og du har derfor brug for en tredjeparts app (Som f.eks. DropSync eller FolderSync) til at gøre det. Desværre findes sådanne apps ikke til iOS pga. dens app sandkasse arkitektur.

## Kendte problemer
### iCloud mappe på macOS
Når man på macOS synkroniserer med iCloud, vil "Finder" ikke tillade dig at trække og slippe filer ind i Obsidians iClod mappe. Det er en macOS fejl, som vi arbejder med Apple om at rette. Du kan også opleve at nogle applikationer ikke vil lade dig gemme filer direkte i Obsidians iCloud mappe.

Som en midlertidig løsning kan du benytte kopier og indsæt i stedet for træk og slip, eller alternativr benytte `mv` fra en kommandolinje for at flytte filen.

### Indsæt menu vises ikke nogle gange
Nogle brugere er løbet ind i det problem, at når de trykker på markøren, så vises indsæt menuen ikke.

Som en midlertidig løsning kan du benytte tre-finger tryk håndbevægelsen for at aktivere den globale redigeringsmenu, som kan benyttes til at indsætte teksten.
