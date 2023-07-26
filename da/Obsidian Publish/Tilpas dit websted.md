Denne side forklarer, hvordan du kan tilpasse udseendet og oplevelsen af dit [[Introduktion til Obsidian Publish|Obsidian Publish]] websted.

## Statiske aktiver

Du kan tilpasse dit websted ved at [[Publicer og håndter udgivelser af noter#Udgiv noter|udgive]] følgende typer filer på dit websted:

- `publish.css` for at tilføje brugerdefineret CSS
- `publish.js` for at tilføje brugerdefineret JavaScript
- `favicon-32x32.png` for at sætte webstedets favicon

**Noter:**

- Da Obsidian ikke undersøtter CSS eller Javscript filer, har du brug for et andet program for at oprette og redigere dem
- Som standard vil `publish.css` og `publish.js` ikke blive vist i stifinderen, men du kan stadig udgive dem fra **Udgiv ændringer** dialogen
- Du bliver nødt til at opsætte dit [[Opsætning på eget domæne|eget domæne]], hvis du vil anvende brugerdefineret JavaScript med `publish.js`

Obsidian Publish understøtter de følgende navnekonventioner for favicons, hvor `32` er ikon størrelsen i pixels:

- `favicon-32.png`
- `favicon-32x32.png`
- `favicon.ico`

Vi anbefaler, at du anvender en af de følgende størrelser:

- `favicon-32x32.png`
- `favicon-128x128.png`
- `favicon-152x152.png`
- `favicon-167x167.png`
- `favicon-180x180.png`
- `favicon-192x192.png`
- `favicon-196x196.png`

## Brug af fællesskabstema

Sådan anvender du et fællesskabstema på dit websted:

1. Åben din boks med dit operativsystems stifinder
2. Gå til dine mappe med indstillinger for din boks (standard: `.obsidian`)
3. Åben mappen `themes`
4. Kopier CSS filen for det tema, som du ønsker for dit websted
5. Indsæt filen i din boks rodmappe
6. Omdøb CSS filen til `publish.css`
7. [[Publicer og håndter udgivelser af noter#Udgiv noter|Udgiv]] `publish.css`

**Noter:**

- Hvis dit websted stil ikke ændrer sig inden for nogle minutter, kan det være nødvendigt at du opfrisker din browser cache
- Du kan skifte mellem lyst og mørt tema i [[Administration af websteder#Vis indstillinger for et websted|websteds indstillingerne]]

## Aktiver brugergrænseflade funktioner

Du kan skifte mellem flere forskellige brugergrænseflade funktioner, såom grafvisning, eller indholdsfortegnelse.

Du kan se de forskellige mulige brugergrænseflade funktioner under sektionerne **Læseoplevelse** og **Komponenter** i [[Administration af websteder#Vis indstillinger for et websted|websteds indstillingerne]].
