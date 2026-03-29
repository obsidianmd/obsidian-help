---
permalink: teams/deploy
cssclasses:
  - soft-embed
---
Obsidian kører som en lokal applikation på hver af dine teammedlemmers enheder. Den er designet til at fungere både online og offline, sikkert og privat, og give dig fuld kontrol over dit teams data. Obsidian er ikke tilgængelig som en webbaseret applikation, og derfor skal du udrulle applikationen til dine teammedlemmer.

## Installér og opdatér Obsidian

Dit team kan hente Obsidian fra vores [Hent-side](https://obsidian.md/download). Udgivelser er også tilgængelige på vores [GitHub-udgivelsesside](https://github.com/obsidianmd/obsidian-releases/releases), som inkluderer links til [ændringsloggen](https://obsidian.md/changelog/).

> [!tip] For Windows-brugere, der har brug for et systeminstallationsprogram, inkluderer den universelle `.exe` muligheden for at installere Obsidian for alle brugere.

Hvis automatiske opdateringer er aktiveret i applikationen, vil fremtidige versioner automatisk blive installeret, når brugerne genstarter Obsidian. Derudover anbefaler vi periodisk at udføre [[Opdatér Obsidian#Installationsprogramopdateringer|installationsprogramopdateringer]] for at modtage de seneste opdateringer til Electron-frameworket, herunder sikkerhedsrettelser.

Hvis du vil vide, hvordan du begrænser netværksadgang til Obsidian under denne proces, kan du gennemgå [[Sikkerhedsovervejelser for teams#Netværk og adgang|netværk og adgang]].

## Tilpasning af Obsidian

Obsidian er nem at tilpasse til dit teams behov. Med en omfattende API og et stort økosystem af brugere tilbyder Obsidian adgang til talrige plugins, temaer og supplerende værktøjer.

For sikkerhedsrelaterede spørgsmål vedrørende disse emner, se venligst [[Sikkerhedsovervejelser for teams]].

### Konfigurationsmapper

[[Konfigurationsmappe|Konfigurationsmappen]] er det sted, hvor en Obsidian-[[Ordliste#Boks|boks]] gemmer sine applikationsindstillinger. Som standard hedder denne mappe `.obsidian`, men du har fleksibiliteten til at [[Konfigurationsmappe#Skift din konfigurationsmappe|ændre konfigurationsmappens]] navn efter dine præferencer.

Vi anbefaler at oprette en standardiseret skabelon af konfigurationsmappen, der kan udrulles på tværs af dit teams enheder.

### Plugins

[[Kerneplugins]] er valgfrie funktioner skabt af Obsidian-teamet. Disse funktioner er integreret i den centrale applikationskodebase og kan slås til eller fra.

[[Fællesskabsplugins]] er tredjepartsfunktioner, der tilføjes til Obsidian-applikationen og kan installeres via fællesskabsbiblioteket. Tredjepartsplugins udnytter [Obsidian API](https://github.com/obsidianmd/obsidian-api). Plugins er placeret i mappen `.obsidian/plugins` i en boks og kan installeres manuelt på denne placering.

### Temaer og uddrag

[[Temaer]] ændrer Obsidians grænseflade visuelt. Ligesom plugins kan temaer hentes fra vores fællesskabsbibliotek. Temaer er placeret i mappen `.obsidian/themes` i en boks.

[[CSS-kodestykker|Uddrag]] er små `.css`-filer, der visuelt ændrer aspekter af Obsidians grænseflade. I nogle tilfælde kan de også tilføje funktionelle forbedringer. Uddrag er placeret i mappen `.obsidian/snippets` i en boks.

## Ofte stillede spørgsmål

For spørgsmål om kontoadministration og sikkerhed, se venligst [[Sikkerhedsovervejelser for teams#Kontosikkerhed|kontosikkerhed]].

### Udrulning

**Kan jeg udrulle licenser på tværs af flere installationer?**
I øjeblikket understøtter vi ikke udrulning af licenser via et udrulningsscript, f.eks. i en `.json`-fil. Hvis du er interesseret i denne funktion til dit team, kan du indsende en [funktionsanmodning](https://forum.obsidian.md/c/feature-requests/8).

**Kan Obsidian låse bestemte funktioner eller konfigurationer via en indstilling eller et applikationsflag?**
I øjeblikket kan du gøre dette ved at blokere redigeringsadgang til mappen `.obsidian` eller specifikke filer og mapper i den, som beskrevet ovenfor. Hvis du er interesseret i flere adgangskontroller til dit team, kan du indsende en [funktionsanmodning](https://forum.obsidian.md/c/feature-requests/8).
