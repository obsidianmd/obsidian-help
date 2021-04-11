# Obsidian til Android
Android appen er i øjeblikket i [[Mobil app beta|lukket beta]] og er tilgængelig som en signeret APK.

## Hvordan synkroniserer jeg mine data?
Obsidian til Android gemmer alle bokse lokalt i den offentlige dokumentmappe på din enhed. Du kan vælge at benytte [[Obsidian Sync]] til at synkronisere dine filer, eller brug enhver anden tredjeparts udbyder, hvor du har mulighed for at synkronisere med den offentlige dokumentmappe.

### Obsidian Sync
Som med Obsidian applikationen tilbyder vi en indbygget betalt [[Obsidian Sync]] service.

For at opsætte en synkroniseret boks gennem Obsidian Sync skal du først oprette en nu lokal tom boks. Når den tomme boks er åbnet, åben den venstre sidebjælke, tryk på knappen til indstillinger, og opsæt Obsidian Sync på samme måde som på PC versionen:

1. Log på din Obsidian konto på Konto siden.
2. Aktiver "Synkroniser" under "Kerne plug-ins".
3. Vælg den eksterne boks, der skal synkroniseres med.
4. Hold din app åben indtil alle dine filer er synkroniseret over på mobilen.

For at se synkroniseringsstatus i Obsidian Sync, så swipe den rigtige skuffe ud, og du vil kunne se en status indikator på samme måde som på PC versionen. Tryk på indikatoren for at få mere information, f.eks. for at se synkroniseringsloggen, hvis du har brug for at fejlfinde eventuelle problemer.

Note: Hvis du benytter Obsidian Sync sammen med andre tredjeparts synkroniseringsservices, så sørg for at ekskludere `.obsidian/sync.json` i din tredjeparts synkronisering for at forhindre at ødelægge Obsidian Sync funktionaliteten. Denne fil benyttes til at holde øje med synkroniseringstilstanden for den lokale enhed, og det kan skabe problemer hvis den ved en fejl bliver synkroniseret.

### Tredjeparts synkronisering
Du kan også benytte din egen foretrukne synkroniseringsløsning for at holde den lokale mappe på din mobil synkroniseret med andre enheder.

Der er flere apps i Play butikken, som kan synkronisere en mappe på din mobil med andre enheder, f.eks. [Dropsync](https://play.google.com/store/apps/details?id=com.ttxapps.dropsync&hl=en&gl=US).

Men vi har ikke testet disse løsninger. Hvis du har succes med dem eller har erfaringer med nogle af dem, så giv os besked, så vi kan tilføje informationen på denne side.

## Hvor bliver mine bokse gemt?
På Android er alle bokse placeret i Obsidian hjemmemappen `Documents/Obsidian`. `Documents` mappen er typisk gemt på et SD kort eller i "Emulated storage".

Enhver mappe i `Documents/Obsidian` vil blive betragtet som en boks. Hvis du kopierer en mappe ind i Obsidian hjemmemappen vil den blive åbnet som en boks i Obsidian.

# Obsidian til iOS
iOS appen er i øjeblikket i [[Mobil app beta|lukket beta]], og er tilgængelig gennem TestFlight.

## Hvordan synkroniserer jeg mine data?
Obsidian til iOS kan gemme din boks enten i iCloud eller lokalt. De to testede og anbefalede synkroniseringsløsninger for øjeblikket er iCloud og Obsidian Sync.

Enhver tredjeparts synkroniseringsudbyder der kan tilbyde baggrundssynkronisering af en bestemt mappe på din enhed skulle også virke, men vi har ikke kendskab til nogen. Det skyldes begrænsningerne i den meget komplekse fildelingsfunktion mellem apps i iOS, til forskel fra Android, som stiller en offentlig mappe til rådighed, som alle apps kan benytte. På grund af dette, har de fleste tredjeparts  synkroniseringsudbydere ikke en ordentlig implementering af baggrundssynkronisering på iOS.

### Obsidian Sync
Du kan følge de samme trin som for synkronisering på Android som ses herunder, og husk at oprette en ikke-iCloud mappe, hvis du ikke ønsker at gemme en kopi af dine boks i iCloud: 

![[#Obsidian til Android#Obsidian Sync]]

### iCloud synkronisering
For at opsætte en synkroniseret boks gennem iCloud skal du først installere og åbne Obsidian iOS appen. Dette vil oprette en app mappe kaldet Obsidian, med Obsidian app logoet, på dit iCloud drev. Bemærk at denne mappe bliver betragtet som en speciel mappe af iCloud og den er anderledes end en mappe du manuelt opretter på dit iCloud drev.

Derefter skal du på din computer flytte din boks ind `iCloud Drive/Obsidian/`. Ved at gøre dette giver du Obsidian tilladelse til at læse den specielle app mappe på dit iCloud drev.

Lad iCloud synkronisere hele boks mappen. Når det er gjort, skal du åbne Obsidian appen på din iOS enhed. Du skulle nu kunne se boksen med et skyikon, der indikerer at den er gemt i iCloud.

Første gang du åbner denne boks, vil Obsidian måske fryse et lille stykke tid fordi iCloud downloader alle filerne i baggrunden. Når ICloud er færdig med synkronisere alt over på mobilen skulle appen fungere uden problemer. Det kan dog kræve at du genstarter appen et par gange for den er klar.

## Hvor bliver mine bokse gemt?
Hvis du vælger at gemme din boks i iCloud, så er den gemt i en container på din iCloud drev konto under en app mappe kaldet "Obsidian", og mappen har et icon med Obsidians logo.

Hvis du ikke vælger at anvende iCloud, så vil din boks blive gemt i sandboks filsystemet, som Obsidian har til rådighed. I v0.0.13 vil den lokale boks kun kunne tilgås af Obsidian. I kommende udgaver vil boksen blive synlig gennem "Filer", så du kan tilgå den fra andre apps på din enhed.

I øjeblikket understøtter Obsidian ikke "Working Copy" eller andre lignende apps, der eksponerer et virtuelt filsystem gennem "FileProvider".
Vi vi forsøge at understøtte "Working Copy" på et tidspunkt som en forbedring.

# Tredjeparts synkroniseringssupport
Mange brugere spørger os, hvorfor Obsidian til mobil ikke understøtter deres foretrukne synkroniseringsløsning. Her er en kort forklaring på den nuværende status af synkroniseringssupport for mobil apps.

Det som gør Obsidian forskellig fra andre apps, som f.eks. 1Writer og iA Writer er, at Obsidian arbejder ovenpå en boks og ikke på en enkelt note af gangen. Meget af Obsidians kernefunktionalitet afhænger af hele boksen og alle filerne i den, såsom automatisk færdiggørelse af links, indlejring af billeder, tags panelet, tilbagelinks og alt funtionalitet på tværs af noter.

Til sammenligning, så åbner de fleste Markdown redigeringsapps bare en enkelt note, lader brugeren redigere i den, og gemmer derefter noten. På baggrund af det, så stiller OS (Operativsystemet) og tredjeparts synlroniseringsudbydere typisk kun er API til rådighed til at tilgå og arbejde med en enkelt fil af gangen, og sjældent et API til at arbejde med en boks (som jo er en mappe med filer og muligvis undermapper).

For at synkronisere kan en almindelig Markdown editor nøjes med at implementere en basal "download fil, når du åbner en valgt fil" og "upload filen, når du trykker gem". Obsidian har brug for at downloade hele boksen til sin funktionalitet, og holde øje med alle modificerede filer (F.eks. når du ændrer et filnavn har Obsidian måske brug for at opdatere en lang række andre filer med links, som er ændret pga. ændringen af filnavn). Udover det har Obsidian brug for at overvåge ændringer gennem synkroniseringsløsningen for at kunne opdatere et internt cachesystem når filer ændres, så alle links bliver opdateret korrekt.

Hvis Obsidian skal synkronisere al dette med en tredjeparts synkroniseringsudbyder vil det blive meget omstændigt - og det er derfor en af grundene til, at mange synkroniseringsudbydere ikke laver en ordentlig synkroniseringsklient til mobil og du har derfor brug for en tredjeparts app (Som f.eks. DropSync eller FolderSync) til at gøre det. Desværre findes sådanne apps ikke til iOS pga. dens app sandkasse arkitektur.
