---
permalink: import/apple-notes
---
Obsidian lar deg enkelt migrere notatene dine fra Apple Notes ved hjelp av [[Importer|Importer-tillegget]]. Dette vil konvertere Apple Notes-dataene dine til varige Markdown-filer som du kan bruke med Obsidian og mange andre apper.

For øyeblikket støtter Importer kun migrering fra Apple Notes på macOS. Det er ikke tilgjengelig på iOS ennå.

## Importer Apple Notes-data til Obsidian

Du trenger det offisielle Obsidian [[Importer]]-tillegget, som du kan [installere her](obsidian://show-plugin?id=obsidian-importer).

1. Åpne **[[Innstillinger]]**.
2. Gå til **Community-utvidelser** og [installer Importer](obsidian://show-plugin?id=obsidian-importer).
3. Aktiver Importer-tillegget.
4. Åpne **Importer**-tillegget ved hjelp av kommandopaletten eller verktøylinje-ikonet.
5. Under **Filformat** velg **Apple Notes**.
6. Klikk **Importer**.
7. Klikk **Åpne** på popup-vinduet som vises med tittelen `Select the "group.com.apple.notes" folder to allow Obsidian to read Apple Notes data`.
8. Vent til importen er fullført.
9. Da er du ferdig!

## Støttet innhold

Obsidian Importer-tillegget støtter så godt som alle innholdstyper i Apple Notes. Dette inkluderer tabeller, bilder, tegninger, skanninger, PDF-er og lenker introdusert i iOS 17.

> [!Warning]
> Passordbeskyttede notater er kryptert av Apple, og må derfor låses opp før du importerer dem. Eventuelle låste notater vil bli hoppet over.

### Skanninger

Apple lagrer skanninger i en rekke formater avhengig av hvordan de ble opprettet. For å bevare de originale dataene betyr dette at de vil bli eksportert på forskjellige måter.

* Skanninger opprettet eller vist på eldre versjoner av macOS eller iOS vil bli eksportert som en serie ubeskårede bilder.
* Skanninger opprettet eller vist på nyere versjoner av macOS eller iOS vil vanligvis bli eksportert som beskårede bilder.
* Skanninger som har blitt redigert med funksjonene introdusert i iOS 17 vil vanligvis bli eksportert som PDF-er.

## Alternative eksportmetoder

Apple tilbyr ikke et innebygd alternativ for å eksportere notatene dine. Det finnes imidlertid flere tredjepartsverktøy som [Exporter](https://apps.apple.com/us/app/exporter/id1099120373) av Chintan Ghate. Vær oppmerksom på at de fleste verktøy er begrenset i hvilke data de eksporterer fra Apple Notes, og de gir kanskje ikke de mest kompatible utdataene. Disse verktøyene fungerer best hvis Apple Notes-notatene dine hovedsakelig er ren tekst, og har få vedlegg eller spesielle funksjoner som tegninger og skanninger.

Avhengig av verktøyet du brukte, kan eksporten være i Markdown-format eller HTML-format. Følg instruksjonene basert på filformatet du eksporterte til:

- [[Importer HTML-filer]]
- [[Importer Markdown-filer]]
