---
permalink: import/samsung-notes
cssclasses:
  - soft-embed
---
Obsidian lader dig migrere dine noter fra Samsung Notes ved hjælp af [[Importér|Importer-pluginet]]. Dette konverterer dine noter til holdbare Markdown-filer, som du kan bruge med Obsidian og mange andre applikationer.

## Eksportér dine noter fra Samsung Notes

Samsung Notes gemmer hver note som en Samsung Notes-fil (`.sdocx`).

1. Åbn Samsung Notes på din telefon eller tablet.
2. Tryk og hold på en note, og vælg derefter alle noter, du vil eksportere.
3. Tryk på **Gem som fil**, og vælg derefter **Samsung Notes-fil**.
4. Vælg en mappe, og tryk på **Gem**.
5. Flyt `.sdocx`-filerne til den enhed, hvor du bruger Obsidian, for eksempel med et USB-kabel, Quick Share eller et cloud-drev.

Hvis du har mange filer, kan du lægge dem i en `.zip`-fil og importere den i stedet. Samsung Notes inkluderer ikke sine mapper i de filer, det gemmer, men Importer bevarer mapperne inde i `.zip`-filen. For at holde dine noter organiserede, gem hver Samsung Notes-mappes noter i en mappe med samme navn, før du zipper dem.

## Importér dine Samsung Notes-data til Obsidian

Du skal bruge det officielle Obsidian [[Importér]]-plugin, som du kan [installere her](obsidian://show-plugin?id=obsidian-importer).

1. Åbn **[[Indstillinger]]**.
2. Gå til **Fællesskabsplugins** og [installér Importer](obsidian://show-plugin?id=obsidian-importer).
3. Aktivér Importer-pluginet.
4. Åbn **Importer**-pluginet ved hjælp af kommandopaletten eller værktøjslinjeikonet.
5. Under **Filformat** vælg **Samsung Notes (.sdocx)**.
6. Vælg dine `.sdocx`-filer eller en `.zip`-fil, der indeholder dem.
7. Vælg **Importér** for at gennemse den genererede skabelon og forhåndsvise eksempler fra dine noter.
8. Vælg **Importér** igen, og vent på, at importen er færdig.

## Begrænsninger

- Håndskrift og tegnede former importeres som et SVG-billede i slutningen af noten. Streger bevarer deres form og farve, men ikke den varierende bredde fra en trykfølsom pen. Former og linjer importeres i sort.
- Tekstbokse, billeder placeret på siden og annoterede PDF-filer importeres endnu ikke.
- Tjeklisteelementer importeres som umarkerede.
- Tekstfarver, skrifttyper og skriftstørrelser bevares ikke.
- Lås låste noter op i Samsung Notes, før du eksporterer dem.

## Skabeloner

Brug [[Importér skabeloner]] til fuldt ud at konfigurere, hvordan dine Samsung Notes-data importeres.

![[Importér skabeloner#Variabler]]
