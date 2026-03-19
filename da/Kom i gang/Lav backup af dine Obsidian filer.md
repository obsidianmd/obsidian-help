---
permalink: backup
---
Hvis ikke du har taget backup af din computer, så begynd på det nu! Obsidians [[Filgenoprettelse|filgenoprettelses]] plugin er brugbart, men begrænset. Det kan kun genoprette en vis mængde data, og den gemmer genoprettelsesinformation per enhed. Vi anbefaler, at du implementerer et rigtigt backup system, for mere robust beskyttelse.

**Hvorfor tage backup af dine data?**

Obsidian gemmer dine noter **lokalt** på din enhed som standard og ikke i clouden. Det betyder at dine [data er helt dine egne](https://obsidian.md/about), så du har fuld kontrol over dem. Men data gemt lokalt kan være påvirket af problemer som ødelagte filer eller datatab. Det er ikke et spøærgsmål om **hvis**, men om **hvornår**. Ved at tage backup af dine data er du beskyttet mod disse uundgåeligheder og sikrer at du har kontrol over dine noter.

## Synkronisering er ikke en backup

Services som fx. [[Introduktion til Obsidian Sync|Obsidian Sync]], iCloud, OneDrive og Dropbox hjælper dig til at synkronisere dine noter på tværs af enheder. Selvom de måske tilbyder funktioner som [[Versionshistorik|versionshistorik]] **er de ikke designet til være en backup**. Synkronisering holder dine noter opdateret, men beskytter ikke mod datatab.

- **Synkronisering:** Synkronisering sikrer at dine filer er ens på alle enheder. Når du ændrer en fil på en enhed, opdaterer den filen på alle andre synkroniserede enheder. Synkroniserings services har ikke en "primær' enhed
- **Backup**: En backup gemmer en kopi af dine data på en anden lokation for at sikre, at du kan gendanne den i tilfælde af datatab eller ødelæggelse. Det er ikke meningen at man skal anvende backups til realtime opdateringer eller samarbejde.

Benyt et dedikeret backup værktøj, som laver en envejs kopi af dine data, til at lave backup af din boks. Dette værktøj vil gemme dine data på et sikkert backupsted uden at ændre data på din enhed.

Hvis du anvender flere enheder med synkronisering, så vælg **en enhed** til at være din backup enhed. Dette er normalt din præmære enhed, som du oftest anvender; dette er blot for at huske dig på, at få taget backup.

> [!Eksempel] Du anvender Obsidian Sync på din bærbare computer, tablet, mobil og arbejdscomputer. Du anvender mest din boks på din arbejdscomputer, nogle gange på din bærbare computer og sjældent på din tablet eller din mobil. I det tilfælde vil din arbejdscomputer være din "primære enhed", som den som du bør tage backup af.

## Benyt fællesskabsplugins
Selvom Obsidian teamet ikke officielt kan anbefale et specifikt plugin, så anerkender vi to fællesskabsplugins som er blevet populære blandt brugerne til at tage backup af deres filer:

- **[Obsidian Git](https://obsidian.md/plugins?id=obsidian-git):** Du kan anvende dette plugin til at tage backup af din noks ved at udføre commit til et [Git repository](https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository). Det er en effektiv måde, at versionere dine noter på og sikre deres sikkerhed på en fjernserver. Bemærk dog, at dine data kan blive gemt på en [[#Benyt Cloudbaserede services|ekstern hosting platform]], når denne metode anvendes.

- **[Local Backup](https://obsidian.md/plugins?id=local-backup):** Dette plugin tillader dig, at lave lokale kopier af din boks i en mappe efter dit valg, med mulighed for arkivering. Du kan endda bruge en synkroniseret mappe, som fx. en Dropbox mappe til at kombinere lakal og cloud backup. Denne metode går **godt i spænd** med backumulighedene beskrevet forneden.

## Benyt Cloudbaserede services

> [!info] Det kan ikke anbefales, at du har din boks placeret direkte et sted hos din valgte backup service.

Du kan som alternativ gemme din backup i clouden da det et supplement til fysisk datalagring på en eksternt harddisk eller et USB drev, Den største fordel ved at gemme data i clouden er at de altid er tilgængelige overalt. Ulempen er at de fleste backup services er privatejede.

## Benyt eksterne drev

**Harddiske of SDD drev**
Backup på eksterne harddiske er stadig værdifuldt i en verden med flere cloudbaserede løsninger, og beruges hovedsagelig til at gemme data og til computer backups. Den største ulempe med eksterne harddiske er at de kan gå i stykker eller blive væk. Den største fordel er, at opbevaringspladsen kun skal købes én gang. Eksterne harddiske bliver ofte kombineret med en [[#Benyt comnputer backup|computer backup]]

**USB drev**
USB drev (også kaldet memorysticks eller flashdrev) er en simpel og effektiv måde, at tage backup på:

1. Indsæt USB drevet i din computer eller bærbare
2. Vær sikker på at drevet bliver genkendt og monteret til dit filsystem. Det kan være nødvendigt at formatere det til det filsystem, som er kompatibelt med dit operativsystem
3. Kopier mappen med din boks fra dens lokation over på UDB drevet
4. Afmonter UDB drevet sikkert
5. Fjerne UDB drevet fra din enhed

**NAS backup**
En god og sikker metode for erfarne brugere er at lave backup på en NAS server, da den har flere harddiske og yderligere genopretningsmekanismer.

> [!tip] Hvis dine eksterne drev indeholder sensitiv information, anbefaler vi at det eksterne drev opbevares sikkert, fx. i et sikkerhedsrum eller på en anden lokation.

## Benyt comnputer backup

Dit operativsystem giver dig også mulighed for at hjælpe til med at tage backup, enten i clouden, eller på et eksternt drev:

- **[Windows](https://www.microsoft.com/en-us/windows/learning-center/back-up-files)**: Backup med OneDrive eller et eksternt drev
- **[Mac](https://support.apple.com/en-us/104984)**: Backup til en ekstern enhed ved hjælpo af "Time Machine".
- **[Linux](https://linuxize.com/post/how-to-use-rsync-for-local-and-remote-data-transfer-and-synchronization/)**: `rsync` til en valgt mappe eller et valgt drev

## Yderligere information

Denne side giver en kun kort overblik over backup muliheder, som den er ikke udtømmende. Besøg [Worldbackupday.com](https://www.worldbackupday.com/en) for mere dybdegående information eller spørgs andre Obsidian brugere i [vores fællesskab](https://obsidian.md/community) om deres backup strategier!

