---
permalink: import/logseq
cssclasses:
  - soft-embed
---
Obsidian lader dig migrere noter fra en filbaseret Logseq-graf (nu kaldet "Logseq OG") ved hjælp af det officielle [[Importér|Importer-plugin]]. Importer læser Logseqs Markdown-filer direkte og konverterer Logseq-specifik formatering til holdbare filer, som du kan bruge offline med Obsidian og andre applikationer.

## Før du begynder

- Sikkerhedskopiér din Logseq-graf og Obsidian-boks.
- Find rodmappen for din Logseq-graf. Den indeholder normalt mapper med navnene `pages`, `journals`, `assets` og `logseq`.
- Sørg for, at du bruger en filbaseret Logseq-graf. Logseq-databasegrafer understøttes endnu ikke.

## Importér din Logseq-graf

Du har brug for det officielle Obsidian [[Importér]]-plugin, som du kan [installere her](obsidian://show-plugin?id=obsidian-importer).

1. Åbn **[[Indstillinger]] → Fællesskabsplugins** og [installér Importer](obsidian://show-plugin?id=obsidian-importer).
2. Aktivér Importer-pluginet.
3. Åbn **Importer** via [[Fastgjorte kommandoer|kommandopaletten]] eller værktøjslinjeikonet.
4. Under **Filformat** vælg **Logseq**.
5. Under **Vælg mappe** vælg rodmappen for din graf. Vælg den mappe, der indeholder `pages` og `journals`, ikke en af disse mapper individuelt.
6. Gennemgå de fundne mapper og ekskludér dem, du ikke ønsker at importere.
7. Vælg en outputmappe og hvor importerede vedhæftninger skal gemmes.
8. Gennemgå importindstillingerne og forhåndsvis eksempler på de konverterede noter.
9. Vælg **Importér** og vent på, at importen er færdig.

## Begrænsninger

- Whiteboards importeres ikke.
- Forespørgsler bevares som kodeblokke, hvis du vælger at beholde dem.
- Dynamiske Logseq-skabelonmakroer forbliver som bogstavelig tekst.
- Logseq-flashcard-planlægning, PDF-annoteringer og andre applikationsspecifikke data migreres ikke.

## Indstillinger

Importer konverterer almindelige Logseq-konventioner, herunder:

- Sideegenskaber til Obsidian-[[Egenskaber]].
- Sidealiasser, tags, navnerum og links.
- Arbejdsgangstilstande til afkrydsningsfelter i lister, med prioriteter og datoer bevaret som læsbar tekst.
- Blok-ID'er, blokreferencer og blokindlejringer til Obsidian-links og indlejringer.
- Journalfilnavne og datolinks.
- Fremhævninger, nummererede lister, Org-blokke, medieindlejringer og linkede filer fra grafens `assets`-mappe.

### Journaler

Som standard er **Brug daglige noter-indstillinger** aktiveret. Importerede journaler bruger mappen og datoformatet konfigureret af [[Daglige noter]]-kernepluginet. Dette kan placere journaler uden for den outputmappe, der er valgt i Importer.

Hvis du deaktiverer denne indstilling, skrives journaler til en `Journals`-mappe i den valgte outputmappe og bruger notenavnformatet `YYYY-MM-DD`.

### Udfold dispositioner

Logseq bruger indlejrede punktopstillinger som en sides struktur. Som standard bevarer Importer denne dispositionsstruktur. Aktivér **Udfold dispositioner** for at konvertere dispositionsblokke til en kombination af afsnit, overskrifter og konventionelle lister. Opgaver og grupper af listelignende elementer forbliver listeelementer, men konverteringen er heuristisk. Gennemgå flere eksempler i forhåndsvisningen, før du importerer en stor graf.

### Bevar inkompatible data

Logseq-forespørgsler, flashcards og tidsregistreringsposter har ingen direkte ækvivalenter i Obsidian. Importindstillingerne lader dig vælge, om du vil beholde hver type indhold. Når det beholdes, forbliver det som almindelig tekst.

- **Behold forespørgsler** bevarer forespørgsler som afskærmede kodeblokke eller inline-kode.
- **Behold flashcards** bevarer `#card`-markører og cloze-ombrydninger som almindelig tekst.
- **Behold tidsregistrering** bevarer `LOGBOOK`- og `CLOCK`-poster som almindelig tekst.

## Skabeloner

Brug [[Importér skabeloner|Importer-skabeloner]] til fuldt ud at konfigurere, hvordan dine Logseq-data importeres.

![[Importér skabeloner#Variabler]]

## Fejlfinding

Hvis Importer ikke finder nogen noter, skal du sikre dig, at du har valgt grafens rodmappe, og at de konfigurerede side- eller journalmapper indeholder Markdown-filer.

Hvis en vedhæftning rapporteres som manglende, skal du bekræfte, at den refererede fil stadig findes i grafens `assets`-mappe.

For andre problemer, søg i [Importer-fejlsporingen](https://github.com/obsidianmd/obsidian-importer/issues) eller indsend en fejlrapport med en lille eksempelgraf.
