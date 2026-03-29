---
permalink: import/apple-notes
---
Obsidian låter dig enkelt migrera dina anteckningar från Apple Notes med hjälp av [[Importerare|Importerare-tillägget]]. Detta konverterar dina Apple Notes-data till hållbara Markdown-filer som du kan använda med Obsidian och många andra appar.

För närvarande stöder Importerare bara migrering från Apple Notes på macOS. Det är inte tillgängligt på iOS ännu.

## Importera Apple Notes-data till Obsidian

Du behöver det officiella Obsidian-tillägget [[Importerare]], som du kan [installera här](obsidian://show-plugin?id=obsidian-importer).

1. Öppna **[[Inställningar]]**.
2. Gå till **Gemenskapstillägg** och [installera Importerare](obsidian://show-plugin?id=obsidian-importer).
3. Aktivera Importerare-tillägget.
4. Öppna **Importerare**-tillägget med kommandopaletten eller ribbon-ikonen.
5. Under **Filformat** välj **Apple Notes**.
6. Klicka på **Importera**.
7. Klicka på **Öppna** i popupen som visas med titeln `Select the "group.com.apple.notes" folder to allow Obsidian to read Apple Notes data`.
8. Vänta tills importen är klar.
9. Du är klar!

## Innehåll som stöds

Obsidians Importerare-tillägg stöder i princip alla innehållstyper i Apple Notes. Detta inkluderar tabeller, bilder, teckningar, skanningar, PDF:er och länkar som introducerades i iOS 17.

> [!Warning]
> Lösenordsskyddade anteckningar krypteras av Apple och måste därför låsas upp innan de importeras. Låsta anteckningar kommer att hoppas över.

### Skanningar

Apple lagrar skanningar i olika format beroende på hur de skapades. För att bevara originaldata innebär detta att de exporteras på olika sätt.

* Skanningar som skapats eller visats på äldre versioner av macOS eller iOS exporteras som en serie obeskurna bilder.
* Skanningar som skapats eller visats på nyare versioner av macOS eller iOS exporteras vanligtvis som beskurna bilder.
* Skanningar som har redigerats med funktionerna som introducerades i iOS 17 exporteras vanligtvis som PDF:er.

## Alternativa exportmetoder

Apple erbjuder inget inbyggt alternativ för att exportera dina anteckningar. Dock finns det flera tredjepartsverktyg som [Exporter](https://apps.apple.com/us/app/exporter/id1099120373) av Chintan Ghate. Observera att de flesta verktyg är begränsade i vilken data de exporterar från Apple Notes och kanske inte ger den mest kompatibla utdatan. Dessa verktyg fungerar bäst om dina Apple Notes främst består av text och har få bilagor eller specialfunktioner som teckningar och skanningar.

Beroende på vilket verktyg du använde kan exporten vara i Markdown-format eller HTML-format. Följ instruktionerna baserat på filformatet du exporterade till:

- [[Importera HTML-filer]]
- [[Importera Markdown-filer]]
