---
permalink: publish/customize
publish: true
aliases:
  - Obsidian Publish/Tilpas dit websted
---
Denne side forklarer, hvordan du kan tilpasse udseendet og oplevelsen af dit [[Introduktion til Obsidian Publish|Obsidian Publish]] websted.

## Statiske aktiver

Du kan tilpasse dit websted ved at [[Publicer og håndter udgivelser af noter#Udgiv noter|udgive]] følgende typer filer på dit websted:

- `publish.css` for at tilføje brugerdefineret CSS
- `publish.js` for at tilføje brugerdefineret JavaScript
- `favicon-32x32.png` for at sætte webstedets favicon

**Noter:**

- [CSS-variabler til Publish](https://docs.obsidian.md/Reference/CSS+variables/Publish/Publish) kan findes på vores dokumentationsside.
- Da Obsidian ikke undersøtter CSS eller Javscript filer, har du brug for et andet program for at oprette og redigere dem.
- Både `publish.css` og `publish.js` skal placeres i rodmappen (`/`) af din boks.
- Som standard vil `publish.css` og `publish.js` ikke blive vist i stifinderen, men du kan stadig udgive dem fra **Udgiv ændringer** dialogen.
- Du bliver nødt til at opsætte dit [[Opsætning på eget domæne|eget domæne]], hvis du vil anvende brugerdefineret JavaScript med `publish.js`.

Obsidian Publish understøtter de følgende navnekonventioner for favicons, hvor `32` er ikon størrelsen i pixels:

- `favicon-32.png`
- `favicon-32x32.png`
- `favicon.ico`

Vi anbefaler, at du anvender en eller flere af de følgende størrelser:

- `favicon-32x32.png`
- `favicon-128x128.png`
- `favicon-152x152.png`
- `favicon-167x167.png`
- `favicon-180x180.png`
- `favicon-192x192.png`
- `favicon-196x196.png`

Du kan frit placere favicons hvor som helst i boksen, så længe de er udgivet på dit websted.

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

- Hvis dit websted stil ikke ændrer sig inden for nogle minutter, kan det være nødvendigt at du opfrisker din browser cache.
- Du kan skifte mellem lyst og mørt tema i [[Administration af websteder#Vis indstillinger for et websted|websteds indstillingerne]].
- Mange fællesskabstemaer bruger **Style Settings** til brugerdefineret styling, men disse indstillinger virker ikke på Obsidian Publish.

> [!tip] Udvikling af temaer
> Kan du ikke finde det rette tema? Lær hvordan du selv kan [bygge et Publish-tema](https://docs.obsidian.md/Themes/Obsidian+Publish+themes/Build+a+Publish+theme).

## Aktiver brugergrænseflade funktioner

Du kan skifte mellem flere forskellige brugergrænseflade funktioner, såom grafvisning, eller indholdsfortegnelse.

Du kan se de forskellige mulige brugergrænseflade funktioner under sektionerne **Læseoplevelse** og **Komponenter** i [[Administration af websteder#Vis indstillinger for et websted|websteds indstillingerne]].

### Tilpas navigation

I Obsidian Publish har du mulighed for at tilpasse navigationsrækkefølgen og visningen af filer og mapper i Publish-[[Stifinder|stifinderen]]. Navigationselementer vises som standard i udgivelsesrækkefølge. Noter, der ikke er udgivet, vises ikke i dette panel.

#### Adgang til tilpasning af navigation

1. I [[Værktøjslinje|værktøjslinjen]] vælg **Udgiv ændringer** ![[lucide-send.svg#icon]] eller åbn [[Kommandopalet|kommandopaletten]] og skriv **Publish: Publish changes...**
2. I dialogen **Udgiv ændringer** vælg **Ændr sideindstillinger** ![[lucide-cog.svg#icon]].
3. Under **Komponentindstillinger**, ud for **Tilpas navigation**, vælg knappen **Administrer**.

Et nyt pop-up vindue med titlen **Navigation** vises oven på dit vindue med **Ændr sideindstillinger**.

#### Juster navigationselementer

I sektionen **Navigationsforhåndsvisning** kan du justere visningsrækkefølgen af dit udgivne indhold.

1. Vælg den mappe eller note, du vil justere.
2. Træk noten eller mappen op eller ned til den ønskede placering.
3. Nederst til højre i vinduet **Navigation** vælg **Færdig**.

Publish sender dine navigationsændringer til dit websted.

#### Skjul og vis navigationselementer

Hvis der er noter eller mapper, du har udgivet, men ikke ønsker synlige i din navigation, kan du vælge at skjule disse elementer i stedet.

1. Vælg den mappe eller note, du vil justere.
2. Højreklik og vælg **Skjul i navigation**. Elementet bør nu forsvinde fra **Navigationsforhåndsvisningen**.
3. Nederst til højre i vinduet **Navigation** vælg **Færdig**.

Publish sender dine navigationsændringer til dit websted.

> [!tip] Du kan **Vis skjulte** filer ved at markere afkrydsningsfeltet til højre for titlen **Navigationsforhåndsvisning**

## FAQ

**Kan jeg flytte filer fra en mappe til en anden i navigationen?**

Nej. Filnavigationsstrukturen for noter inden i mapper skal bevares. Du kan justere noterækkefølgen inden i mapper (inklusive boksens rod) og mapperækkefølgen inden i andre mapper.

**Kan jeg redigere rækkefølgen af flere noter og mapper, før jeg vælger Færdig?**

Ja.

**Hvordan fortryder jeg disse ændringer?**

- **Visningsrækkefølge**: Vælg ikonet **Gendan standard** (pil der roterer mod uret) ud for **Visningsrækkefølge for navigationspunkter**. Dette gendanner dine navigationselementer til alfabetisk rækkefølge.
- **Skjult status**: Vælg ikonet **Gendan standard** (pil der roterer mod uret) ud for **Skjul sider eller mapper fra navigation**. Dette gendanner dine skjulte navigationselementer til en synlig tilstand.
