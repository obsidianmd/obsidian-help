iOS appen er nu offentlig tilgængelig og et link til app store kan findes her: https://obsidian.md/mobile

## Hvor bliver mine bokse gemt?
Hvis du vælger det, kan du gemme din bokse på dit iCloud drev. Disse bokse kan i din iCloud mappe under en app mappe kaldet "Obsidian", der har et icon med Obsidians logo.

Hvis du ikke vælger at anvende iCloud til en boks, så vil den blive gemt i sandboks filsystemet, som Obsidian har til rådighed. De lokale bokse kan nu kunne tilgås fra alle andre apps, som understøtter at kunne vælge en mappe fra filsystemet. Derved kan apps som Working Copy benyttes til at synkronisere med Obsidians lokale bokse.

Bemærk at hvis du vælger at gemme din boks lokalt, så vil den blive slettet automatisk af iOS, hvis du afinstallerer Obsidian app'en.

## Synkronisering

### Kom hurtig i gang
Hvis du allerede har en boks i din desktop applikation, så er her to måder du kan synkronisere dine bokse til en mobilenhed og få adgang i dem: 

![[#iCloud synkronisering]]

![[Android app#Obsidian Sync]]

De to nuværende officielle supporterede synkroniseringsløsninger er iCloud og Obsidian Sync.
Working Copy (git) er et andet alternativ, som er blevet testet og virker med Obsidian på iOS.

På nuværende tidspunkt er der **ingen** kendt support for de følgende synkroniseringsservices på iOS:
- Dropbox
- Google Drive
- OneDrive
- Syncthing

Hvis du finder ud af en måde at synkronisere Obsidian ved brug af en af disse services på iOS, vil vi blive meget glad hvis du kan tilmelde dig vores Discord server og lære os, hvordan det kan opsættes.
  
I teorien kan enhver tredjeparts synkroniseringsudbyder der kan tilbyde baggrundssynkronisering af en bestemt mappe på din enhed skulle også virke, men vi har ikke kendskab til nogen andre end "Working Copy". Det skyldes begrænsningerne i den meget komplekse fildelingsfunktion mellem apps i iOS, til forskel fra Android, som stiller en offentlig mappe til rådighed, som alle apps kan benytte. På grund af dette, har de fleste tredjeparts  synkroniseringsudbydere ikke en ordentlig implementering af baggrundssynkronisering på iOS.

På nuværende tidspunkt understøtter Obsidian ikke tredjeparts synkroniseringsudbydere, der skaber et virtuelt fil system gennem FileProvider. Vi vil foresøge at kunne dette i fremtiden som en forbedring.

### Obsidian Sync
Du kan følge de samme trin som for synkronisering på Android som ses herunder, og husk at oprette en ikke-iCloud mappe,  da vi ikke anbefaler at du benytter både Obsidian Sync og iCloud samtidig, hvilket nogle brugere har rapporteret giver datatab.

![[Android app#Obsidian Sync]]

### iCloud synkronisering

Sådan sætter du en **ny** synkroniseret boks op på et iCloud drev:

1. Start iOS appen og vælg "Opret ny boks";
2. På desktop applikationen skal du benytte "Åben en anden boks" og pege på den nye boks i iCloud.

Sådan sætter du en **eksisterende** synkroniseret boks op på et iCloud drev:

1. Start mobil appen og vælg: "Opret ny boks";
2. Giv den samme navn som din boks i din desktop applikation for at få [[Brug af obsidian URI|URIs]] til at fungere;
3. Vent på at iCloud synkroniserer denne tomme mappe til din desktop applikation;
4. Kopier og indsæt alt fra din boks til denne nye mappe, som nu vil blive din synkroniserede mappe;
5. I desktop applikationen skal du benytte "Åben en anden boks" og vælge på den nye boks placering på dit iCloud drev;
6. Vent på at iCloud får synkroniseret hele boksen over på din mobil enhed.

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

Hvis du oplever at du ikke kan trække og slippe filer ind i iCloud mappen i FInder på macOS, så hent venligst den nyeste udgave af Obsidian Desktop fra https://obsidian.md da den indeholder et fix for det problem. Når den er installeret og startet første gang skulle den automatisk får iCloud til at opdatere mappetilladelser. Hvis det ikke virker med det samme skal du prøve at genstarte din computer.

### Indsæt menu vises ikke nogle gange
Nogle brugere er løbet ind i det problem, at når de trykker på markøren, så vises indsæt menuen ikke.

Som en midlertidig løsning kan du benytte tre-finger tryk håndbevægelsen for at aktivere den globale redigeringsmenu, som kan benyttes til at indsætte teksten.
