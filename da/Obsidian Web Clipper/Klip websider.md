---
permalink: web-clipper/capture
---
Når du har installeret [[Introduktion til Obsidian Web Clipper|Web Clipper]] browserudvidelsen, kan du tilgå den på flere måder, afhængigt af din browser:

1. Obsidian-ikonet i din browsers værktøjslinje.
2. Genvejstaster, til at aktivere udvidelsen fra dit tastatur.
3. Kontekstmenu, ved at højreklikke på den webside du besøger.

For at gemme en side til Obsidian skal du klikke på knappen **Tilføj til Obsidian**.

## Indfang en side

Når du åbner udvidelsen, udtrækker Web Clipper data fra den aktuelle webside ud fra indstillingerne i din [[Obsidian Web Clipper/Skabeloner|skabelon]]. Du kan oprette dine egne skabeloner og tilpasse outputtet ved hjælp af [[Variabler|variabler]] og [[Filtre|filtre]].

Som standard forsøger Web Clipper intelligent kun at udtrække det primære artikelindhold og udelukke andre elementer på siden. Du kan dog tilsidesætte denne adfærd på følgende måder:

- Hvis en brugerdefineret skabelon er til stede, bruger den din skabelon.
- Hvis en markering er til stede, bruger den markeringen. Du kan bruge `Ctrl/Cmd+A` til at markere hele siden.
- Hvis der er [[Fremhæv websider|fremhævninger]] til stede, bruger den fremhævningerne.

## Hent billeder

Billeder hentes ikke automatisk, når du bruger Web Clipper. I stedet linker billeder til deres webbaserede URL. Dette sparer plads i din boks, men det betyder, at billederne ikke vil være tilgængelige offline, eller hvis URL'en holder op med at virke.

Du kan hente billeder for enhver fil i Obsidian ved hjælp af [[Fastgjorte kommandoer|kommandoen]] med navnet **Hent vedhæftninger for nuværende fil**. Denne kommando kan også knyttes til en tastaturgenvej i Obsidian.

## Genvejstaster

Web Clipper inkluderer tastaturgenveje, du kan bruge til at fremskynde dit workflow. For at ændre tastetilknytninger skal du gå til **Web Clipper-indstillinger** → **Generelt** og følge instruktionerne for din browser. Tilknytninger kan ændres for alle browsere undtagen Safari, som ikke understøtter redigering af genvejstaster.

| Handling                | macOS         | Windows/Linux  |
| ----------------------- | ------------- | -------------- |
| Åbn clipper             | `Cmd+Shift+O` | `Ctrl+Shift+O` |
| Hurtigklip              | `Opt+Shift+O` | `Alt+Shift+O`  |
| Skift fremhævning       | `Opt+Shift+H` | `Alt+Shift+H`  |

## Grænsefladefunktionalitet

Web Clipper-grænsefladen er opdelt i fire sektioner:

1. **Overskrift** hvor du kan skifte skabeloner, slå [[Fremhæv websider|fremhævning]] til, [[Læser|læsetilstand]], og tilgå indstillinger.
2. **Egenskaber** viser de [[Egenskaber|metadata]], der er udtrukket fra siden, som vil blive gemt som [[Egenskaber]] i Obsidian.
3. **Noteindhold** der vil blive gemt i Obsidian.
4. **Sidefod** giver dig mulighed for at vælge boks og mappe, og tilføje til Obsidian.

Overskriftsfunktionalitet inkluderer:

- **Skabelon**-rullemenu til at skifte mellem dine gemte [[Obsidian Web Clipper/Skabeloner|skabeloner]] tilføjet i Web Clipper-indstillinger.
- **Mere (...)**-knap til at vise sidevariabler, du kan bruge i skabeloner.
- **Fremhævning**-knap til at slå [[Fremhæv websider|fremhævning]] til.
- **Tandhjul**-knap til at åbne Web Clipper-indstillinger.

Sidefodsfunktionalitet inkluderer:

- **Tilføj til Obsidian**-knap til at gemme data i Obsidian.
- **Boks**-rullemenu til at skifte mellem gemte bokse tilføjet i Web Clipper-indstillinger.
- **Mappe**-felt til at definere, hvilken mappe der skal gemmes i.
- **Fortolker** til at køre [[Fortolk websider|naturlige sprogprompter]] på siden.
