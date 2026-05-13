---
permalink: import/google-keep
---
Met Obsidian kun je eenvoudig je notities migreren vanuit Google Keep met behulp van de [[Importer|Importer-plug-in]]. Hiermee worden je Google Keep-gegevens omgezet naar duurzame Markdown-bestanden die je kunt gebruiken met Obsidian en vele andere apps.

## Exporteer je gegevens vanuit Google Keep

1. Ga naar [Google Takeout](https://takeout.google.com/settings/takeout) en log in op je Google-account.
2. Klik op **Alles deselecteren** in de rechterbovenhoek.
3. Scroll naar beneden en selecteer **Keep** uit de lijst.
4. Scroll naar de onderkant van de pagina en klik op **Volgende stap**.
5. Klik op het volgende scherm op de knop **Export aanmaken**.
6. Download het `.zip`-bestand zodra het beschikbaar is.

## Importeer je Google Keep-gegevens in Obsidian

Je hebt de officiële Obsidian [[Importer]]-plug-in nodig, die je [hier kunt installeren](obsidian://show-plugin?id=obsidian-importer).

1. Open **[[Instellingen]]**.
2. Ga naar **Communityplug-ins** en [installeer Importer](obsidian://show-plugin?id=obsidian-importer).
3. Activeer de Importer-plug-in.
4. Open de **Importer**-plug-in via het opdrachtenpalet of het werkbalkpictogram.
5. Kies onder **Bestandsformaat** de optie **Google Keep (.zip).**
6. Selecteer de locatie van je `.zip`-bestand.
7. Klik op **Importeren** en wacht tot het importeren is voltooid.
8. Je bent klaar!

### Ondersteunde functies

- Alle checklists worden geïmporteerd als items op het hoogste niveau, omdat Google Keep geen inspringinformatie exporteert.
- Herinneringen en gebruikerstoewijzingen bij notities worden niet geïmporteerd, omdat deze functies niet worden ondersteund door Obsidian.
- Alle overige informatie wordt geïmporteerd als een combinatie van inhoud en labels.
