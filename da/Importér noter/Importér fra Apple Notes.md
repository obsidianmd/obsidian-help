---
permalink: import/apple-notes
aliases:
  - Import fra Apple Notes
  - Import af noter/Import fra Apple Notes
---
Obsidian gør det nemt at migrere dine noter fra Apple Notes ved hjælp af [[Importer|Importer-pluginet]]. Dette vil konvertere dine Apple Notes-data til holdbare Markdown-filer, som du kan bruge med Obsidian og mange andre applikationer.

I øjeblikket understøtter Importer kun migrering fra Apple Notes på macOS. Det er endnu ikke tilgængeligt på iOS.

## Importér Apple Notes-data til Obsidian

Du skal bruge det officielle Obsidian [[Importer]]-plugin, som du kan [installere her](obsidian://show-plugin?id=obsidian-importer).

1. Åbn **[[Indstillinger]]**.
2. Gå til **Fællesskabsplugins** og [installér Importer](obsidian://show-plugin?id=obsidian-importer).
3. Aktivér Importer-pluginet.
4. Åbn **Importer**-pluginet via kommandopaletten eller ikonet i værktøjslinjen.
5. Under **Formatering** vælg **Apple Notes**.
6. Klik **Importér**.
7. Klik **Åbn** på den popup, der vises med titlen `Select the "group.com.apple.notes" folder to allow Obsidian to read Apple Notes data`.
8. Vent til importen er fuldført.
9. Du er færdig!

## Understøttet indhold

Obsidian Importer-pluginet understøtter stort set alle Apple Notes-indholdstyper. Dette inkluderer tabeller, billeder, tegninger, scanninger, PDF'er og links introduceret i iOS 17.

> [!Warning]
> Adgangskodebeskyttede noter er krypteret af Apple, så de skal låses op, før de importeres. Eventuelle låste noter vil blive sprunget over.

### Scanninger

Apple gemmer scanninger i en række formater afhængigt af, hvordan de blev oprettet. For at bevare de originale data betyder det, at de eksporteres forskelligt.

* Scanninger oprettet eller vist på ældre versioner af macOS eller iOS vil blive eksporteret som en serie ubeskårede billeder.
* Scanninger oprettet eller vist på nyere versioner af macOS eller iOS vil normalt blive eksporteret som beskårede billeder.
* Scanninger, der er blevet redigeret med funktionerne introduceret i iOS 17, vil normalt blive eksporteret som PDF'er.

## Alternative eksportmetoder

Apple tilbyder ikke en indbygget mulighed for at eksportere dine noter. Dog findes der flere tredjepartsværktøjer, såsom [Exporter](https://apps.apple.com/us/app/exporter/id1099120373) af Chintan Ghate. Vær opmærksom på, at de fleste værktøjer er begrænsede i, hvilke data de kan eksportere fra Apple Notes, og de leverer muligvis ikke de mest kompatible outputdata. Disse værktøjer fungerer bedst, hvis dine Apple Notes primært er tekstbaserede og har få vedhæftninger eller specielle funktioner som tegninger og scanninger.

Afhængigt af det værktøj, du brugte, kan eksporten være i Markdown-format eller HTML-format. Følg instruktionerne baseret på det filformat, du eksporterede til:

- [[Importér HTML-filer]]
- [[Importér Markdown-filer]]
