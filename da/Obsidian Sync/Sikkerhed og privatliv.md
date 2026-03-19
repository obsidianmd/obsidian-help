Af sikkerhedshensyn krypterer [[Introduktion til Obsidian Sync|Obsidian Sync]] din [[[Lokal- og fjernbokse|fjernbokse]]] og al kommunikation med Obsidian servere. Før nogen kan tilgå din fjernboks, skal de først dekryptere den med et _Krypterings kodeord_.

Når du oprette en ny fjernboks, har du to muligheder:

- **Slutpunkt-til-slutpunkt (end-to-end) kryptering**: Obsidian krypterer boksen på din enhed med en brugerdefineret krypteringsnøgle før den sendes til Obsidian servere. Dette garanterer, at ingen - selv ikke Obsidian teamet - kan tilgå dine noter
- **Administreret kryptering**: Hvis du ikke ønsker, at huske endnu et kodeord, kan du lade Obsidian håndtere krypteringskodeordet for dig. Selvom vi gemmer krypteringgskodeordet på vores servere, så bruger vi det kun, som en mere praktisk måde at administrere dine bokse. Obsidian vil aldrig tilgå din boks uden din udtrykkelige tillladelse

Hvis du glemmer eller msiter dit selvvalgte kodeord, vil dine data forblive krypteret og ubrugelige for evigt. Vi vil ikke være i stand til at gendanne dit kodeord, eller noget krypteret data for dig.

Dit valg har kun effekt på dine fjernbokse. Obsidian krypterer ikke dine lokale bokse.

## Hvad betyder slutpunkt-til-slutpunkt (end-to-end) kryptering?

Slutpunkt-til-slutpunkt (end-to-end) kryptering betyder, at data er krypteret fra det øjeblik, det forlader din enhed, og kan kun dekrypteres ved hjælp af din krypteringsnøgle, når den er tilbage på en af dine enheder.

Vi kan ikke læse dine data. Heller ikke potentielle data aflyttere, så som din internet udbyder kan.

Hvis det skulle ske, at serverne bliver hacket, vi ldine data forbi krypteret - Ingen kan dekryptere dine filer uden at kende dit kodeord.

## Hvilken krypteringsmetode benytter Obsidian?

Vi benytter industristandarden AES-256 til at kryptere dine data. AES-256 er en militærgrads krypteringsspecifikation, som er bredt anvendt i fx. bankverdenen.

Her er de tekniske detaljer:

- Anvendt nøgleafledningsfunktion: scrypt med frø
- Benyttet krypteringsalgoritme: AES-256 med brug af GCM

## Hvad sker der, hvis jeg glemmer mit krypteringskodeord?

Hvis du nogensinde glemmer krypteringskodeordet, vil du ikke være i stand til at forbinde yderligere bokse til din fjernboks. Da krypteringskodeordet ikke gemmes nogle steder, er det forevigt tabt.

Dine data er som regel sikkert gemt lokalt på hver enhed.

For fortsat at anvende Obsidian Sync, foreslår vi at du foretager en fuld genopsætning, så du igen kan tilføje nye enheder til dit synkroniserede system:

1. Foretag en fuld backup af din boks på din primære enhed i tilfælde af, at et eller andet går galt. Det kan være noget så simpelt, som at lave en nackup af boks mappen, eller at lave en zip fil af boksen
2. Afkoble forbindelsen til fjernboksen på alle de forbundne enheder. Dette kan gøres ved at gå til **Indstillinger → Sync → Fjernboks** og klikke på knappen **Afbryd**
3. Opret en ny fjernboks på din primære enhed fra samme sted i instaillingerne. Du kan også slette den forrige fjernboks, da du jo alligevel ikke har kodeordet. (Hvis du har nået boksen maksimale størrelse, kan du blive nådt til at slette den)
4. Vent på at din primære enhed er synkroniseret færdig. Hold øje med synkroniseirngsindikatoren i statusbaren indtil den viser et grønt flueben ikon
5. Forbind hver enhed igen til den samme nyoprettede fjernboks. Når Sync opretter forbindelse, vil du se en advarsel om, at den vil flette boksene. Det er normalt, og du kan lade Sync fortsætte. Vent på at hver enhed er fuldt sykroniseret før du går videre til den næste. De reducerer chancen for problemer
6. Nu burde alle dine enheder være forbundet til den nye fjernboks
