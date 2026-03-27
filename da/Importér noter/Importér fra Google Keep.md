---
permalink: import/google-keep
aliases:
  - Import fra Google Keep
  - Import af noter/Import fra Google Keep
---
Obsidian gør det nemt at migrere dine noter fra Google Keep ved hjælp af [[Importer|Importer-pluginnet]]. Dette vil konvertere dine Google Keep-data til holdbare Markdown-filer, som du kan bruge med Obsidian og mange andre applikationer.

## Eksportér dine data fra Google Keep

1. Gå til [Google Takeout](https://takeout.google.com/settings/takeout) og log ind på din Google-konto.
2. Klik på **Fravælg alle** i øverste højre hjørne.
3. Rul ned og vælg **Keep** fra listen.
4. Rul ned til bunden af siden og klik på **Næste trin**.
5. På den næste skærm skal du klikke på knappen **Opret eksport**.
6. Hent `.zip`-filen, når den er tilgængelig.

## Importér dine Google Keep-data til Obsidian

Du skal bruge det officielle Obsidian [[Importer]]-plugin, som du kan [installere her](obsidian://show-plugin?id=obsidian-importer).

1. Åbn **[[Indstillinger]]**.
2. Gå til **Fællesskabsplugins** og [installér Importer](obsidian://show-plugin?id=obsidian-importer).
3. Aktivér Importer-pluginnet.
4. Åbn **Importer**-pluginnet ved hjælp af kommandopaletten eller værktøjslinjeikonet.
5. Under **Filformat** vælg **Google Keep (.zip).**
6. Vælg placeringen af din `.zip`-fil.
7. Klik på **Importér** og vent, indtil importen er fuldført.
8. Så er du færdig!

### Understøttede funktioner

- Alle tjeklister vil blive importeret som elementer på øverste niveau, fordi Google Keep ikke eksporterer indrykningsinformation.
- Påmindelser og brugertildelinger på noter vil ikke blive importeret, fordi disse funktioner ikke understøttes af Obsidian.
- Alle andre oplysninger bør importeres som en kombination af indhold og tags.
