---
permalink: import/apple-journal
---
Obsidian gør det nemt at migrere dine dagbogsindlæg fra Apple Journal ved hjælp af [[Importer|Importer-plugin'et]].
Dette vil konvertere dine dagbogsindlæg til holdbare Markdown-filer, som du kan bruge med Obsidian og mange andre applikationer.

## Eksportér dine data fra Apple Journal

### På iPhone
Følg instruktionerne for [Udskriv og eksportér indlæg i Journal på iPhone](https://support.apple.com/guide/iphone/print-and-export-entries-iph4cad323fe/ios#iph1edf66806):

1. Gå til Journal-applikationen på din iPhone.
2. Vælg en dagbog, eller tryk på Alle indlæg.
3. Tryk på Mere-knappen øverst på skærmen.
4. Tryk på Eksportér, og vælg derefter Eksportér.
5. Vælg en placering, og tryk derefter på knappen Valgt.

### På Mac (Tahoe)
Følg instruktionerne for [Udskriv og eksportér indlæg i Journal på Mac](https://support.apple.com/guide/journal/print-and-export-entries-dev883fc2329/mac#devc24a8f09a):

1. Gå til Journal-applikationen på din Mac.
2. Gå til Arkiv > Eksportér, og vælg derefter Eksportér.

## Importér Apple Journal-data til Obsidian

Du skal bruge det officielle Obsidian [[Importer]]-plugin, som du kan [installere her](obsidian://show-plugin?id=obsidian-importer).

1. Åbn **[[Indstillinger]]**.
2. Gå til **Fællesskabsplugins** og [installér Importer](obsidian://show-plugin?id=obsidian-importer).
3. Aktivér Importer-plugin'et.
4. Åbn **Importer**-plugin'et ved hjælp af kommandopaletten eller ikonet på værktøjslinjen.
5. Under **Filformat**, vælg **Apple Journal (HTML Export)**.
6. Under **Filer til import**, vælg mappen med eksporterede data, normalt _AppleJournalEntries_, eller individuelle filer fra _Entries_.
7. Gennemgå og rediger de øvrige importindstillinger.
8. Vælg Importér, og vent til importen er fuldført.
9. Du er færdig!


## Understøttet indhold

Plugin'et kan importere Journal-metadata som metadata, såsom _state-of-mind_, _contacts_, _location_ og _workout-route_.

> [!note] Bemærk
> Plugin'et importerer ikke ressourcer. Vedhæftninger som fotos, videoer og lydoptagelser ignoreres.
