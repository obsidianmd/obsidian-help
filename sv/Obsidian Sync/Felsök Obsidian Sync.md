---
permalink: sync/troubleshoot
cssclasses:
  - soft-embed
publish: true
mobile: true
description: Den här sidan listar ovanliga problem som du kan stöta på med Obsidian Sync och hur du löser dem.
---
Denna sida listar ovanliga problem som du kan stöta på med [[Introduktion till Obsidian Sync|Obsidian Sync]] och hur du löser dem. Innan du fortsätter rekommenderar vi att du läser igenom sidorna [[Statusikon och meddelanden]] och [[Vanliga frågor]].

## Allmänt

### Konfliktlösning

En konflikt uppstår när du ändrar samma fil på två eller fler enheter innan de synkroniseras. Till exempel redigerar du en anteckning på din dator. Innan ändringen laddas upp ändrar du även samma anteckning på din telefon.

Konflikter sker oftare när du arbetar offline. Det finns fler ändringar och längre tid mellan synkroniseringar, vilket ökar risken för konflikter.

#### Hur Obsidian Sync hanterar konflikter

När Obsidian Sync upptäcker en konflikt beror resultatet på filtypen:

- **Markdown-filer**: Obsidian Sync sammanfogar ändringarna med Googles [diff-match-patch](https://github.com/google/diff-match-patch)-algoritm.
- **Andra filtyper**: För alla andra filer, inklusive canvas-filer, använder Obsidian en "senast ändrad vinner"-metod. Den senast ändrade versionen ersätter tidigare versioner.

För konflikter i Obsidian-inställningar, såsom tilläggsinställningar, sammanfogar Obsidian Sync JSON-filerna. Den applicerar nycklar från den lokala JSON-filen ovanpå den fjärranslutna JSON-filen.

#### Alternativ för konfliktlösning

Från och med Obsidian 1.9.7 kan du välja hur konflikter ska hanteras. Så här konfigurerar du inställningen:

1. Öppna **[[Inställningar]]**.
2. Välj **Sync** i sidofältet.
3. Under **[[Synkroniseringsinställningar och selektiv synkronisering#Konfliktlösning|Konfliktlösning]]**, välj ditt föredragna alternativ:
   - **Sammanfoga automatiskt** (standard): Obsidian Sync kombinerar alla ändringar från olika enheter till en enda fil. Detta sparar alla redigeringar, men det kan ibland skapa duplicerad text eller formateringsproblem. Du behöver åtgärda dessa manuellt.
   - **Skapa konfliktfil**: När Obsidian hittar motstridiga ändringar skapar den en separat konfliktfil istället för att sammanfoga automatiskt. Du kan sedan granska båda versionerna och sammanfoga dem själv. Detta ger dig full kontroll över slutresultatet.

> [!warning]+ Konfigurera på alla enheter
> Inställningar för konfliktlösning är enhetsspecifika. Du måste konfigurera ditt föredragna alternativ på var och en av dina enheter. Detta säkerställer samma beteende på alla dina synkroniserade enheter.

**Namnmönster för konfliktfiler**

När du använder alternativet "Skapa konfliktfil" skapar Obsidian en ny fil med detta namnmönster:

```
original-anteckningsnamn (Conflicted copy enhetsnamn ÅÅÅÅMMDDTTMM).md
```

Till exempel, om en konflikt uppstår i en anteckning som heter `Mötesanteckningar.md`, kan konfliktfilen heta:

```
Mötesanteckningar (Conflicted copy MinMacBook2 202411281430).md
```

Konfliktfilen innehåller ändringarna från enheten där konflikten upptäcktes. Originalfilen behåller fjärrversionen. Du kan jämföra båda filerna och manuellt sammanfoga innehållet.

> [!info]+ Kontrollera Sync-loggen
> För att kontrollera när konflikter inträffade, öppna [[Statusikon och meddelanden#Sync-aktivitet|Sync-loggen]]. Filtrera på "Merge Conflicts" eller sök efter "Conflict".

### Sync raderade en anteckning jag just skapade på två enheter

Obsidian Sync försöker vanligtvis [[#Konfliktlösning|lösa konflikter]] genom att sammanfoga motstridiga anteckningar mellan enheter. Dock kan problem uppstå för användare som automatiskt skapar eller ändrar anteckningar vid uppstart. Detta inkluderar [[Dagliga anteckningar]] eller när gemenskapstillägget [Templater](https://github.com/SilentVoid13/Templater) används.

Om du skapar en anteckning lokalt på en enhet och Sync inom ett par minuter laddar ner en fjärrversion av samma anteckning, kommer Sync att behålla fjärrversionen utan att sammanfoga de två. I det här fallet kan du återställa den lokala versionen med [[Filåterställning]].

### Sync synkroniserar inte mina tillägg och inställningsuppdateringar

Obsidian [[Vanliga frågor#Laddar Obsidian Sync om mina inställningar i realtid?|laddar inte om alla inställningar i realtid]]. Efter att du uppdaterat inställningar eller tillägg behöver du starta om Obsidian på andra enheter för att se ändringarna. På mobila enheter kan du behöva tvångsavsluta appen.

> [!example]- Byta tema
> - På din primära enhet (vanligtvis en dator) byter du tillbaka temat till standard från ett anpassat tema.
> - Sync-loggen bekräftar att de uppdaterade filerna skickades till fjärrvalvet, men din mobila enhet visar fortfarande det anpassade temat.
> - På den mobila enheten, kontrollera Sync-loggen för att bekräfta mottagandet av den uppdaterade filen `appearance.json`.
> - Ladda om eller starta om Obsidian på den mobila enheten.
> - Efter omladdning eller omstart bör den mobila enheten visa samma tema som din dator.

### Mina filer försvinner hela tiden från Sync så fort jag återställer dem

Det här problemet är vanligast på Windows. Windows Defender kan sätta filer med kodblock i karantän, vilket gör att vissa anteckningar försvinner.

En annan vanlig orsak är dubbelsynkronisering. Detta händer när Obsidian Sync körs tillsammans med en annan synkroniseringstjänst.

![[Byt till Obsidian Sync#Flytta ditt valv ut ur din synktjänst från tredje part eller molnlagring]]

---

Slutligen kan detta hända när du återställer en fil på en enhet, men sedan tas den bort från en sekundär enhet. Detta sker när filnamnet innehåller [[Statusikon och meddelanden#Meddelanden om överhoppade filer|otillåtna tecken]].

## Android

**Min enhet raderar bilagor jag tar emot genom Sync**

Det här problemet beror troligen på att Google eller Android Photos hanterar dina bilagor. För att förhindra att systemet ändrar filer mottagna via Sync, lägg till en `.nomedia`-[fil i ditt valv](https://support.google.com/android/thread/60342076/what-are-these-nomedia-files?hl=en) på din Android-enhet.

> [!tip]- Använd ett tillägg
> Gemenskapstillägget [Android Nomedia](https://obsidian.md/plugins?id=android-nomedia) gör detta enklare. Installera det på din Android-telefon. Observera att `.nomedia`-filer inte synkroniseras mellan enheter genom Obsidian Sync.
