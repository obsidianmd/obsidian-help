---
permalink: backup
---
Hvis du ikke har sikkerhetskopiert datamaskinen din ennå, begynn nå! Obsidians [[Filgjenoppretting]]-utvidelse er nyttig, men begrenset. Den kan bare gjenopprette en viss mengde data, og den lagrer gjenopprettingsinformasjon per enhet. For mer robust beskyttelse anbefaler vi at du implementerer et skikkelig sikkerhetskopieringssystem.

**Hvorfor sikkerhetskopiere dataene dine?**

Som standard lagrer Obsidian notatene dine **lokalt** på enheten din, ikke i skyen. Dette betyr at [dataene er helt dine](https://obsidian.md/about), noe som gir deg kontroll over dem. Lokal lagring kan imidlertid bli påvirket av problemer som korrupsjon eller datatap. Det er aldri et spørsmål om det skjer, men når. Sikkerhetskopiering av data beskytter mot disse uunngåelighetene og sikrer at du beholder kontrollen over notatene dine.

## Synkronisering er ikke en sikkerhetskopi

Tjenester som [[Introduksjon til Obsidian Sync|Obsidian Sync]], iCloud, OneDrive og Dropbox hjelper deg med å synkronisere notatene dine på tvers av forskjellige enheter. Selv om de kan tilby funksjoner som [[Versjonshistorikk|notatgjenoppretting]], **er de ikke designet for sikkerhetskopiering**. Synkronisering holder notatene dine oppdatert, men det beskytter ikke mot datatap.

- **Sync:** Synkronisering sikrer at filene dine er de samme på alle enheter. Når du endrer en fil på én enhet, oppdateres den på alle synkroniserte enheter. Synkroniseringstjenester har ingen «primær» enhet.
- **Sikkerhetskopi:** En sikkerhetskopi lagrer en kopi av dataene dine på en annen plassering for å hjelpe med å gjenopprette dem ved datatap eller korrupsjon. Sikkerhetskopier er ikke ment for sanntidsoppdateringer eller samarbeid.

For å sikkerhetskopiere hvelvet ditt på en ordentlig måte, bruk et dedikert sikkerhetskopieringsverktøy som lager en enveiskopi av dataene dine. Dette verktøyet sender dataene dine til en trygg sikkerhetskopiplassering uten å endre dataene på enheten din.

Hvis du bruker flere enheter med synkronisering, velg **én enhet** som sikkerhetskopienheten din. Dette er vanligvis hoved- eller «primær»-enheten din, den du bruker mest. Merk at de fleste synkroniseringstjenester ikke anerkjenner noen enhet som «primær»; dette er bare et konsept for å hjelpe deg med å administrere sikkerhetskopier.

> [!Example] Du bruker Obsidian Sync på den bærbare datamaskinen, nettbrettet, telefonen og jobb-datamaskinen. Du bruker hvelvet mest på jobb-datamaskinen, noen ganger på den bærbare, og sjelden på nettbrettet eller telefonen. I dette tilfellet ville jobb-datamaskinen være din «primære enhet» for sikkerhetskopiering.

## Bruk community-utvidelser

Selv om Obsidian-teamet ikke offisielt kan anbefale noen spesifikk utvidelse, anerkjenner vi to community-utvidelser som har blitt populære blant brukere for sikkerhetskopiering av filer:

- **[Obsidian Git](https://obsidian.md/plugins?id=obsidian-git):** Bruk denne utvidelsen til å sikkerhetskopiere hvelvet ditt ved å committe innholdet til et [Git-repository](https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository). Det er en effektiv måte å versjonskontrollere notatene dine og sikre at de er trygge på en ekstern server. Vær imidlertid oppmerksom på at dataene dine kan lagres på en [[#Bruk skybaserte tjenester|ekstern hostingplattform]] med denne metoden.
- **[Local Backup](https://obsidian.md/plugins?id=local-backup):** Denne utvidelsen lar deg lage lokale kopier av hvelvet ditt i en mappe du velger, med alternativer for arkivering. Du kan til og med bruke en synkroniseringsmappe, som en Dropbox-mappe, for å kombinere lokale og skybaserte sikkerhetskopier. Denne metoden **fungerer godt sammen med** sikkerhetskopieringsalternativene beskrevet nedenfor.

## Bruk skybaserte tjenester

> [!info] Det anbefales ikke å ha hvelvplasseringen inne i den valgte sikkerhetskopieringstjenesten.

Å lagre sikkerhetskopien i skyen er et alternativ og et supplement til fysisk datalagring, i stedet for en ekstern harddisk eller USB-minnepinne. En ekstern harddisk eller USB-minnepinne kan gå tapt eller bli skadet. Den største fordelen med å lagre filer i skyen er at de er tilgjengelige når som helst, hvor som helst. Ulempen er at de fleste sikkerhetskopieringstjenester eies av et privat selskap.

Når det gjelder sikkerhet, bør du alltid være nøye med tilgang og sikkerhet for skysikkerhetskopier. [Worldbackupday](https://www.worldbackupday.com/en) har en oppdatert liste over nettbaserte sikkerhetskopieringstjenester du kan vurdere å bruke.

## Bruk eksterne stasjoner

**Harddisker og SSD-stasjoner**
Sikkerhetskopier på eksterne harddisker er fortsatt verdifulle i en stadig mer skybasert verden, og brukes hovedsakelig til datalagring og sikkerhetskopier av datamaskiner. Den største ulempen med en ekstern stasjon er at den kan gå i stykker eller bli borte. Den største fordelen er at lagringsplassen bare trenger å kjøpes én gang. Bruk av en ekstern harddisk kombineres ofte med en [[#Bruk sikkerhetskopier på datamaskinen|sikkerhetskopiering av datamaskinen]].

**USB-minnepinner**
Minnepinner (også kalt USB-pinner eller minnebrikker) er en enkel og effektiv metode for raske sikkerhetskopier.

1. Sett minnepinnen inn i datamaskinen eller den bærbare.
2. Sørg for at enheten gjenkjennes og monteres i filsystemet. Formater minnepinnen om nødvendig for å være kompatibel med filsystemet ditt.
3. Kopier hvelvmappen fra den nåværende plasseringen til minnepinnen.
4. Avmonter minnepinnen på en trygg måte.
5. Fjern minnepinnen fra enheten.

**NAS-sikkerhetskopi**
For erfarne brukere er sikkerhetskopiering av data på en NAS-server (Network Attached Storage) en god og sikker metode, ettersom den har flere harddisker og ekstra gjenopprettingsmekanismer.

> [!tip] Hvis den eksterne stasjonen inneholder sensitiv informasjon, anbefales det å oppbevare den på et trygt sted, for eksempel i et sikret rom.

## Bruk sikkerhetskopier på datamaskinen

Operativsystemet ditt tilbyr selv muligheten til å hjelpe med å lage sikkerhetskopier, enten på nett i skyen eller på en ekstern stasjon.

- **[Windows](https://www.microsoft.com/en-us/windows/learning-center/back-up-files)**: Sikkerhetskopier med OneDrive eller en ekstern stasjon.
- **[Mac](https://support.apple.com/en-us/104984)**: Sikkerhetskopier til en ekstern enhet med Time Machine.
- **[Linux](https://linuxize.com/post/how-to-use-rsync-for-local-and-remote-data-transfer-and-synchronization/)**: `rsync` til en katalog eller stasjon du velger.

## Neste steg

Denne hjelpesiden gir en kort oversikt over sikkerhetskopieringsalternativer, men den er ikke uttømmende. For mer utdypende informasjon, besøk [Worldbackupday.com](https://www.worldbackupday.com/en) eller spør andre Obsidian-brukere i [fellesskapet vårt](https://obsidian.md/community) om deres sikkerhetskopieringsstrategier!
