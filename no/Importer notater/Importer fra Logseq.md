---
permalink: import/logseq
cssclasses:
  - soft-embed
---
Obsidian lar deg migrere notater fra en filbasert Logseq-graf (nå kalt «Logseq OG») ved hjelp av den offisielle [[Importer|Importer-utvidelsen]]. Importer leser Logseqs Markdown-filer direkte og konverterer Logseq-spesifikk formatering til holdbare filer som du kan bruke frakoblet med Obsidian og andre apper.

## Før du begynner

- Sikkerhetskopier Logseq-grafen og Obsidian-hvelvet ditt.
- Finn rotmappen til Logseq-grafen din. Den inneholder vanligvis mapper kalt `pages`, `journals`, `assets` og `logseq`.
- Sørg for at du bruker en filbasert Logseq-graf. Logseq-databasegrafer støttes ikke ennå.

## Importer Logseq-grafen din

Du trenger den offisielle Obsidian [[Importer]]-utvidelsen, som du kan [installere her](obsidian://show-plugin?id=obsidian-importer).

1. Åpne **[[Innstillinger]] → Community-utvidelser** og [installer Importer](obsidian://show-plugin?id=obsidian-importer).
2. Aktiver Importer-utvidelsen.
3. Åpne **Importer** ved hjelp av [[Kommandovelger|kommandopaletten]] eller verktøylinjeikonet.
4. Under **Filformat**, velg **Logseq**.
5. Under **Velg mapper**, velg rotmappen til grafen din. Velg mappen som inneholder `pages` og `journals`, ikke en av disse mappene individuelt.
6. Gå gjennom de oppdagede mappene og ekskluder de du ikke ønsker å importere.
7. Velg en utdatamappe og hvor importerte vedlegg skal lagres.
8. Gå gjennom importalternativene og forhåndsvis eksempler på de konverterte notatene.
9. Velg **Importer** og vent til importen er ferdig.

## Begrensninger

- Tavler importeres ikke.
- Spørringer bevares som kodeblokker hvis du velger å beholde dem.
- Dynamiske Logseq-malmakroer forblir som bokstavelig tekst.
- Logseq-flashcard-planlegging, PDF-merknader og andre appspesifikke data migreres ikke.

## Innstillinger

Importer konverterer vanlige Logseq-konvensjoner, inkludert:

- Sideegenskaper til Obsidian-[[Egenskaper]].
- Sidealiaser, tagger, navnerom og lenker.
- Arbeidsflyttilstander til avkrysningsboks-listemarkører, med prioriteringer og datoer bevart som lesbar tekst.
- Blokk-ID-er, blokkreferanser og blokkinnbygginger til Obsidian-lenker og innbygginger.
- Journalfilnavn og datolenker.
- Uthevinger, nummererte lister, Org-blokker, medieinnbygginger og lenkede filer fra grafens `assets`-mappe.

### Journaler

Som standard er **Bruk daglige notatinnstillinger** aktivert. Importerte journaler bruker mappen og datoformatet konfigurert av kjerneutvidelsen [[Daglige notater]]. Dette kan plassere journaler utenfor utdatamappen valgt i Importer.

Hvis du deaktiverer dette alternativet, skrives journaler til en `Journals`-mappe inne i den valgte utdatamappen og bruker `YYYY-MM-DD`-notatnavnformatet.

### Flat ut disposisjoner

Logseq bruker nestede punktmerkinger som strukturen på en side. Som standard bevarer Importer denne disposisjonsstrukturen. Aktiver **Flat ut disposisjoner** for å konvertere disposisjonsblokker til en kombinasjon av avsnitt, overskrifter og konvensjonelle lister. Oppgaver og grupper av listelignende elementer forblir listeelementer, men konverteringen er heuristisk. Gå gjennom flere eksempler i forhåndsvisningen før du importerer en stor graf.

### Bevar inkompatible data

Logseq-spørringer, flashcards og tidssporingsoppføringer har ikke direkte ekvivalenter i Obsidian. Importalternativene lar deg velge om du vil beholde hver type innhold. Når det beholdes, forblir det som ren tekst.

- **Behold spørringer** bevarer spørringer som inngjerdede kodeblokker eller innebygd kode.
- **Behold flashcards** bevarer `#card`-markører og cloze-innpakninger som ren tekst.
- **Behold tidssporing** bevarer `LOGBOOK`- og `CLOCK`-oppføringer som ren tekst.

## Maler

Bruk [[Importer-maler]] for å fullstendig konfigurere hvordan Logseq-dataene dine importeres.

![[Importer-maler#Variabler]]

## Feilsøking

Hvis Importer ikke finner noen notater, sørg for at du valgte grafens rotmappe og at de konfigurerte side- eller journalmappene inneholder Markdown-filer.

Hvis et vedlegg rapporteres som manglende, bekreft at den refererte filen fortsatt finnes i grafens `assets`-mappe.

For andre problemer, søk i [Importer-feilsporeren](https://github.com/obsidianmd/obsidian-importer/issues) eller send inn en feilrapport med en liten eksempelgraf.
