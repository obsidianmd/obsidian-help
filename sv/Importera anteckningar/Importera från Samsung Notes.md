---
permalink: import/samsung-notes
cssclasses:
  - soft-embed
---
Obsidian låter dig migrera dina anteckningar från Samsung Notes med hjälp av [[Importerare|Importer-tillägget]]. Detta konverterar dina anteckningar till hållbara Markdown-filer som du kan använda med Obsidian och många andra appar.

## Exportera dina anteckningar från Samsung Notes

Samsung Notes sparar varje anteckning som en Samsung Notes-fil (`.sdocx`).

1. Öppna Samsung Notes på din telefon eller surfplatta.
2. Tryck och håll på en anteckning, välj sedan varje anteckning du vill exportera.
3. Tryck på **Spara som fil** och välj sedan **Samsung Notes-fil**.
4. Välj en mapp och tryck på **Spara**.
5. Flytta `.sdocx`-filerna till enheten där du använder Obsidian, till exempel med en USB-kabel, Quick Share eller en molnlagring.

Om du har många filer kan du lägga dem i en `.zip`-fil och importera den istället. Samsung Notes inkluderar inte sina mappar i filerna den sparar, men Importer behåller mapparna inuti `.zip`-filen. För att hålla dina anteckningar organiserade, spara varje Samsung Notes-mapps anteckningar i en mapp med samma namn innan du zippar dem.

## Importera dina Samsung Notes-data till Obsidian

Du behöver det officiella Obsidian-tillägget [[Importerare]], som du kan [installera här](obsidian://show-plugin?id=obsidian-importer).

1. Öppna **[[Inställningar]]**.
2. Gå till **Användartillägg** och [installera Importer](obsidian://show-plugin?id=obsidian-importer).
3. Aktivera Importer-tillägget.
4. Öppna **Importer**-tillägget med kommandopaletten eller ribbon-ikonen.
5. Under **Filformat** väljer du **Samsung Notes (.sdocx)**.
6. Välj dina `.sdocx`-filer, eller en `.zip`-fil som innehåller dem.
7. Välj **Importera** för att granska den genererade mallen och förhandsgranska exempel från dina anteckningar.
8. Välj **Importera** igen och vänta tills importen är klar.

## Begränsningar

- Handskrift och ritade former importeras som en SVG-bild i slutet av anteckningen. Streck behåller sin form och färg, men inte den varierande bredden från en tryckkänslig penna. Former och linjer importeras i svart.
- Textrutor, bilder placerade på sidan och annoterade PDF-filer importeras inte ännu.
- Checklistepunkter importeras som omarkerade.
- Textfärger, typsnitt och typsnittsstorlekar behålls inte.
- Lås upp låsta anteckningar i Samsung Notes innan du exporterar dem.

## Mallar

Använd [[Mallar för Importer]] för att fullt ut konfigurera hur dina Samsung Notes-data importeras.

![[Mallar för Importer#Variabler]]
