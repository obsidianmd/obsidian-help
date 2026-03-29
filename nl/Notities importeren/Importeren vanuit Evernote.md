---
permalink: import/evernote
---
Met Obsidian kun je eenvoudig je notities migreren vanuit Evernote met behulp van de [[Importer|Importer-plug-in]]. Dit converteert je Evernote-gegevens naar duurzame Markdown-bestanden die je kunt gebruiken met Obsidian en veel andere apps.

## Je gegevens exporteren vanuit Evernote

Obsidian gebruikt het Evernote-exportformaat `.enex`-bestanden.

Je kunt de instructies van Evernote voor het exporteren van je gegevens vinden [op de website van Evernote](https://help.evernote.com/hc/en-us/articles/209005557-Export-notes-and-notebooks-as-ENEX-or-HTML). Met deze methode kun je volledige notitieboeken exporteren in de desktopclient.

1. Ga naar het scherm Notitieboeken.
2. Klik op **Meer acties** ( `•••` ) en kies **Notitieboek exporteren...**
3. Selecteer **ENEX** als bestandsformaat.
3. Kies een locatie voor je geëxporteerde `.enex`-bestand.

## Je Evernote-gegevens importeren in Obsidian

Je hebt de officiële Obsidian [[Importer]]-plug-in nodig, die je [hier kunt installeren](obsidian://show-plugin?id=obsidian-importer).

1. Open **[[Instellingen]]**.
2. Ga naar **Communityplug-ins** en [installeer Importer](obsidian://show-plugin?id=obsidian-importer).
3. Schakel de Importer-plug-in in.
4. Open de **Importer**-plug-in via het opdrachtenpalet of het werkbalkpictogram.
5. Kies onder **Bestandsformaat** de optie **Evernote (.enex)**.
6. Selecteer de locatie van je Evernote-back-upbestand.
7. Klik op **Importeren** en wacht tot het importeren is voltooid.
8. Je bent klaar!

## Geavanceerde importopties

### Taghiërarchie behouden

De Evernote-export behoudt de taghiërarchie niet. Om je taghiërarchie te behouden, kun je tags "platslaan" gescheiden door "/". Stel bijvoorbeeld dat je de volgende tagstructuur hebt:

```
ParentTag
    ChildTag
```

Wat je moet doen om tags gerelateerd te houden in Obsidian is:

1. Klik met de rechtermuisknop op de ChildTag.
2. Selecteer "Naam wijzigen."
3. Hernoem het naar `ParentTag/ChildTag`.

### Notitieboekstapels verwerken

Aangezien het exportproces beperkt is tot enkele notitieboeken, bevat het standaard exportbestand geen informatie over notitieboekstapels. De importer kan echter patronen in de enex-bestandsnaam herkennen om notitieboekstapels opnieuw als mappen aan te maken.

Stel dat je een notitieboek hebt met de naam ```NotitieboekA``` in een stapel genaamd ```Stapel1```, dan kun je een notitieboekstapel opnieuw aanmaken door het enex-bestand te hernoemen naar ```Stapel1@@@NotitieboekA```.

Dit resulteert erin dat de geconverteerde notities worden gegenereerd in de map Stapel1/NotitieboekA.

### Meer opties

Voor meer geavanceerde importopties vanuit Evernote kun je ook [importeren via Yarle](https://github.com/akosbalasko/yarle) proberen.
