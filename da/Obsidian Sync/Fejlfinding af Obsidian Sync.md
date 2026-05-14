---
permalink: sync/troubleshoot
cssclasses:
  - soft-embed
publish: true
mobile: true
aliases:
  - Fejlsøg Obsidian Sync
  - Obsidian Sync/Fejlsøg Obsidian Sync
---
Denne side gennemgår ualmindelige problemer, du kan støde på med [[Introduktion til Obsidian Sync|Obsidian Sync]], og hvordan du kan løse dem. Før du fortsætter, anbefaler vi at gennemgå siderne [[Statusikon og meddelelser]] og [[Ofte stillede spørgsmål]].

## Generelt

### Konfliktløsning

En konflikt opstår, når du ændrer den samme fil på to eller flere enheder, før de synkroniserer. Fx. kan du redigere en note på din computer. Før ændringen uploades, ændrer du også den samme note på din mobil.

Konflikter opstår oftere, hvis du arbejder offline. Der er flere ændringer og længere tid mellem synkroniseringer, hvilket øger risikoen for konflikter.

#### Sådan håndterer Obsidian Sync konflikter

Når Obsidian Sync finder en konflikt, afhænger resultatet af filtypen:

- **Markdown-filer**: Obsidian Sync fletter ændringerne ved hjælp af Googles [diff-match-patch](https://github.com/google/diff-match-patch)-algoritme.
- **Andre filtyper**: For alle andre filer, inklusiv lærreder, bruger Obsidian en "sidst ændret vinder"-tilgang. Den senest ændrede version erstatter tidligere versioner.

For konflikter i Obsidian-indstillinger, som f.eks. pluginindstillinger, fletter Obsidian Sync JSON-filerne. Den anvender nøgler fra den lokale JSON oven på den eksterne JSON.

#### Muligheder for konfliktløsning

Fra Obsidian 1.9.7 kan du vælge, hvordan konflikter skal håndteres. Sådan konfigurerer du denne indstilling:

1. Åbn **[[Indstillinger|Indstillinger]]**.
2. Vælg **Sync** i sidebjælken.
3. Under **[[Sync indstillinger og selektiv synkronisering#Conflict resolution|Konfliktløsning]]** vælger du din foretrukne mulighed:
   - **Flet automatisk** (standard): Obsidian Sync kombinerer alle ændringer fra forskellige enheder til en enkelt fil. Dette gemmer alle redigeringer, men det kan nogle gange skabe duplikeret tekst eller formateringsproblemer. Du skal rette disse manuelt.
   - **Opret konfliktfil**: Når Obsidian finder modstridende ændringer, opretter den en separat konfliktfil i stedet for at flette automatisk. Du kan derefter gennemgå begge versioner og flette dem selv. Dette giver dig fuld kontrol over det endelige resultat.

> [!warning]+ Konfigurér på alle enheder
> Indstillinger for konfliktløsning er enhedsspecifikke. Du skal konfigurere din foretrukne mulighed på hver af dine enheder. Dette sikrer den samme adfærd på tværs af alle dine synkroniserede enheder.

**Navngivningsmønster for konfliktfiler**

Når du bruger muligheden "Opret konfliktfil", opretter Obsidian en ny fil med dette navngivningsmønster:

```
original-notenavn (Conflicted copy enhedsnavn YYYYMMDDHHMM).md
```

For eksempel, hvis en konflikt opstår i en note kaldet `Meeting notes.md`, kan konfliktfilen hedde:

```
Meeting notes (Conflicted copy MyMacBook2 202411281430).md
```

Konfliktfilen indeholder ændringerne fra den enhed, hvor konflikten blev opdaget. Den originale fil beholder fjernversionen. Du kan sammenligne begge filer og manuelt flette indholdet.

> [!info]+ Tjek Sync-loggen
> For at tjekke, hvornår konflikter opstod, kan du åbne [[Statusikon og meddelelser#Sync activity log|Sync-loggen]]. Filtrér efter "Merge Conflicts" eller søg efter "Conflict".

### Sync slettede en note, som jeg netop havde oprettet på to enheder

Obsidian Sync prøver normalt at [[#Konfliktløsning|løse konflikter]] ved at flette modstridende noter på tværs af enheder. Der kan dog opstå problemer for brugere, som automatisk opretter eller ændrer noter ved opstart. Dette inkluderer [[Daglige noter|Daglige noter]] eller brug af fællesskabspluginet [Templater](https://github.com/SilentVoid13/Templater).

Hvis du opretter en note lokalt på én enhed, og Sync inden for et par minutter downloader en fjernversion af den samme note, vil Sync beholde fjernversionen uden at flette de to. I dette tilfælde kan du gendanne den lokale version ved hjælp af [[Filgenoprettelse|Filgenoprettelse]].

### Sync synkroniserer ikke mine plugin- og indstillingsopdateringer

Obsidian [[Ofte stillede spørgsmål#Does Obsidian Sync live-reload my settings?|genindlæser ikke alle indstillinger live]]. Når du opdaterer indstillinger eller plugins, skal du genstarte Obsidian på andre enheder for at se ændringerne. På mobile enheder kan det være nødvendigt at tvangslukke appen.

> [!example]- Ændring af tema
> - På din primære enhed (normalt en computer) skifter du dit tema tilbage til standarden fra et brugerdefineret tema.
> - Sync-loggen bekræfter, at de opdaterede filer blev sendt til fjernboksen, men din mobile enhed viser stadig det brugerdefinerede tema.
> - På den mobile enhed: tjek Sync-loggen for at bekræfte modtagelsen af den opdaterede `appearance.json`-fil.
> - Genindlæs eller genstart Obsidian på den mobile enhed.
> - Efter genindlæsning eller genstart bør den mobile enhed vise det samme tema som din computer.

### Mine filer forsvinder fra Sync, så snart jeg gendanner dem

Dette problem er mest almindeligt på Windows. Windows Defender kan sætte filer med kodeblokke i karantæne, hvilket får visse noter til at forsvinde.

En anden almindelig årsag er dobbelt synkronisering. Dette sker, når Obsidian Sync kører sammen med en anden synkroniseringstjeneste.

![[Skift til Obsidian Sync#Move your vault out of your third-party syncing service or cloud storage]]

---

Endelig kan dette ske, når du gendanner en fil på én enhed, men den derefter fjernes fra en sekundær enhed. Dette sker, når filnavnet har [[Statusikon og meddelelser#Skipped messages|ugyldige tegn]].

## Android

**Min enhed sletter mine vedhæftninger, som jeg modtager gennem Sync**

Dette problem skyldes sandsynligvis, at Google eller Android Photos håndterer dine vedhæftninger. For at forhindre systemet i at ændre filer modtaget via Sync, skal du tilføje en `.nomedia`-[fil til din boks](https://support.google.com/android/thread/60342076/what-are-these-nomedia-files?hl=en) på din Android-enhed.

> [!tip]- Brug et plugin
> Fællesskabspluginet [Android Nomedia](https://community.obsidian.md/plugins/android-nomedia) gør dette lettere. Installér det på din Android-telefon. Bemærk, at `.nomedia`-filer ikke synkroniseres på tværs af enheder gennem Obsidian Sync.
