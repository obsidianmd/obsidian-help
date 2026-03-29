---
permalink: teams/deploy
cssclasses:
  - soft-embed
---
Obsidian kjører som en lokal applikasjon på hver av teammedlemmenes enheter. Den er designet for å fungere både med og uten nettilgang, sikkert og privat, og gir deg full kontroll over teamets data. Obsidian er ikke tilgjengelig som en nettbasert applikasjon, og du må derfor distribuere appen til teammedlemmene dine.

## Installer og oppdater Obsidian

Teamet ditt kan laste ned Obsidian fra vår [nedlastingsside](https://obsidian.md/download). Utgivelser er også tilgjengelige på vår [GitHub-utgivelsesside](https://github.com/obsidianmd/obsidian-releases/releases) som inkluderer lenker til [endringsloggen](https://obsidian.md/changelog/).

> [!tip] For Windows-brukere som trenger et systeminstallasjonsprogram, inkluderer den universelle `.exe`-filen muligheten til å installere Obsidian for alle brukere.

Hvis automatiske oppdateringer er aktivert i appen, vil fremtidige versjoner installeres automatisk når brukerne starter Obsidian på nytt. I tillegg anbefaler vi å jevnlig utføre [[Oppdater Obsidian#Oppdateringer av installasjonsprogram|oppdateringer av installasjonsprogrammet]] for å motta de siste oppdateringene til Electron-rammeverket, inkludert sikkerhetsfikser.

Hvis du ønsker å begrense nettverkstilgang til Obsidian under denne prosessen, se [[Sikkerhetshensyn for team#Nettverk og tilgang|nettverk og tilgang]].

## Tilpasse Obsidian

Obsidian er enkelt å modifisere for å passe teamets behov. Med et omfattende API og et stort økosystem av brukere, gir Obsidian tilgang til en rekke utvidelser, temaer og komplementære verktøy.

For sikkerhetsrelaterte spørsmål om disse temaene, se [[Sikkerhetshensyn for team]].

### Konfigurasjonsmapper

[[Konfigurasjonsmappe|Konfigurasjonsmappen]] er der et Obsidian-[[Ordliste#Hvelv|hvelv]] lagrer applikasjonsinnstillingene sine. Som standard heter denne mappen `.obsidian`, men du har fleksibilitet til å [[Konfigurasjonsmappe#Endre konfigurasjonsmappen|endre konfigurasjonsmappen]] etter eget ønske.

Vi anbefaler å opprette en standardisert mal av konfigurasjonsmappen som kan distribueres på tvers av teamets enheter.

### Utvidelser

[[Kjerneutvidelser]] er valgfrie funksjoner laget av Obsidian-teamet. Disse funksjonene er integrert i applikasjonens kjernekodebase og kan slås på eller av.

[[Community-utvidelser]] er tredjepartsfunksjoner som legges til Obsidian-applikasjonen, og kan installeres via community-katalogen. Tredjepartsutvidelser bruker [Obsidian API](https://github.com/obsidianmd/obsidian-api). Utvidelser ligger i `.obsidian/plugins`-mappen i et hvelv, og kan installeres manuelt på denne plasseringen.

### Temaer og utdrag

[[Temaer]] endrer det visuelle utseendet til Obsidian-grensesnittet. Som utvidelser kan temaer lastes ned fra vår community-katalog. Temaer ligger i `.obsidian/themes`-mappen i et hvelv.

[[CSS-utdrag|Utdrag]] er små `.css`-filer som visuelt endrer aspekter av Obsidian-grensesnittet. I noen tilfeller kan de også legge til funksjonelle forbedringer. Utdrag ligger i `.obsidian/snippets`-mappen i et hvelv.

## Ofte stilte spørsmål

For spørsmål om kontoadministrasjon og sikkerhet, se [[Sikkerhetshensyn for team#Kontosikkerhet|kontosikkerhet]].

### Distribusjon

**Kan jeg distribuere lisenser på tvers av flere installasjoner?**
For øyeblikket støtter vi ikke distribusjon av lisenser via et distribusjonsskript, for eksempel i en `.json`-fil. Hvis du er interessert i denne funksjonen for teamet ditt, vennligst send inn en [funksjonsforespørsel](https://forum.obsidian.md/c/feature-requests/8).

**Kan Obsidian låse visse funksjoner eller konfigurasjoner via en innstilling eller et applikasjonsflagg?**
For øyeblikket kan du gjøre dette ved å blokkere redigeringstilgang til `.obsidian`-mappen, eller spesifikke filer og mapper innenfor den, som beskrevet ovenfor. Hvis du er interessert i flere tilgangskontroller for teamet ditt, vennligst send inn en [funksjonsforespørsel](https://forum.obsidian.md/c/feature-requests/8).
