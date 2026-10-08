---
permalink: pdf
publish: true
mobile: true
description: 'Lær hvordan du kan se, søge i og linke til PDF''er i Obsidian, og hvordan du eksporterer en note som PDF.'
---
Obsidian åbner PDF-filer i en indbygget fremviser. Du kan også indlejre en PDF i en note, linke til en passage i den og eksportere enhver note som en PDF. For de filtyper Obsidian understøtter, se [[Accepterede filformater]].

> [!info]+ Nogle funktioner er kun til desktop
> Obsidian-applikationen på mobil kan ikke søge i en PDF, kopiere et citat eller et link til en markering, eller eksportere en note til PDF.

## Åbn en PDF

I [[Filstifinder|stifinder]] vælger du en PDF for at åbne den i en fane.

> [!info]+ Annoteringer understøttes ikke
> Obsidian understøtter ikke tilføjelse af annoteringer eller fremhævninger til en PDF. For at markere i en PDF skal du bruge en anden applikation og derefter åbne den opdaterede fil i din boks.

Fremviseren har en værktøjslinje med disse kontroller. Obsidian-applikationen på mobil har den samme værktøjslinje.

- **Vis/skjul sidepanel** viser eller skjuler sidebjælken, og **Indstillinger for sidepanel** ændrer, hvad sidebjælken viser.
- **Zoom ud** og **Zoom ind** ændrer størrelsen på siden.
- **Visningsindstillinger** ændrer, hvordan sider er lagt ud.
- Sideboksen viser den aktuelle side. Indtast et sidetal for at gå til den side.

For at arbejde med selve PDF-filen, såsom at omdøbe eller flytte den, vælg **Flere muligheder** ![[lucide-more-horizontal.svg#icon]]. En PDF har færre elementer i denne menu end en note. Se [[Flere muligheder-menu]].

## Navigér i en PDF

Vælg **Indstillinger for sidepanel**, og vælg derefter, hvad der skal vises.

- **Miniaturebilleder** viser en lille forhåndsvisning af hver side.
- **Indholdsfortegnelse** viser PDF'ens disposition, hvis den har en.
- **Vis side i indholdsfortegnelsen** fremhæver den aktuelle side i indholdsfortegnelsen.

For at linke til en side skal du højreklikke på dens miniaturebillede og vælge **Kopiér link til side N**, hvor N er sidetallet. Indsæt linket i en note.

For at linke til en sektion skal du højreklikke på en post i indholdsfortegnelsen og vælge **Kopiér link til "Titel"**, hvor Titel er navnet på posten. På mobil skal du trykke og holde på posten.

## Ændr udseendet af en PDF

Vælg **Visningsindstillinger** for at ændre layoutet.

- **Tilpas bredde** og **Tilpas højde** tilpasser siden til fremviseren.
- **Én side** viser én side ad gangen.
- **Tosidet (ulige)** viser sider side om side, startende med en ulige side til venstre. For eksempel vises side 1 og 2 sammen, og derefter side 3 og 4.
- **Tosidet (lige)** viser sider side om side, startende med en lige side til venstre. For eksempel vises side 1 alene, og derefter vises side 2 og 3 sammen.
- **Tilpas til tema** gør PDF'ens farver mørkere, når dit Obsidian-tema er mørkt.

## Søg i en PDF

Søgning i en PDF er kun tilgængelig på desktop. Obsidian-applikationen på mobil har ikke søgning i PDF-fremviseren.

1. Tryk på `Ctrl+F` (Windows og Linux) eller `Command+F` (macOS).
2. I **Søg...** indtast den tekst, du vil finde.
3. Vælg pil op eller ned for at flytte mellem resultater.

For at ændre, hvordan søgningen fungerer, brug disse indstillinger.

- **Skeln mellem store og små bogstaver** matcher store og små bogstaver nøjagtigt. Det er **Aa**-knappen i søgefeltet.
- **Fremhæv alle** fremhæver hvert resultat. Vælg indstillingsknappen ved siden af pilene for at finde denne mulighed.
- **Match diakritiske tegn** behandler bogstaver med accenter som forskellige bogstaver. Den er i den samme indstillingsmenu.
- **Hele ord** finder kun hele ord. Den er i den samme indstillingsmenu.

Vælg luk-knappen for at forlade søgningen.

## Kopiér tekst fra en PDF

På desktop skal du markere tekst i PDF'en og derefter højreklikke på den.

- **Kopiér** kopierer teksten.
- **Kopiér som citat** kopierer teksten som et citat efterfulgt af et link til passagen.
- **Kopiér link til markering** kopierer et link til den passage, så du kan indsætte det i en note.

Et citat ser sådan ud, når du indsætter det i en note.

```md
> Obsidian is awesome

[[Gemmy.pdf#page=1&selection=32,0,32,14|Gemmy, page 1]]
```

Et link til en markering har det samme link alene.

```md
[[Gemmy.pdf#page=1&selection=32,0,32,14|Gemmy, page 1]]
```

På mobil viser markering af tekst i en PDF din enheds standard tekstmenu. **Kopiér som citat** og **Kopiér link til markering** er ikke tilgængelige.

## Indlejr en PDF

For at vise en PDF inde i en note, se hvordan du [[Indlejr filer#Indlejr en PDF i en note|indlejrer en PDF i en note]]. En indlejret PDF har den samme værktøjslinje som fremviseren. Vælg **Rediger denne blok** for at ændre indlejringslinket.

## Eksportér en note til PDF

Du kan eksportere enhver note som en PDF på desktop. Eksportering til PDF er ikke tilgængelig i Obsidian-applikationen på mobil.

1. Åbn den note, du vil eksportere.
2. Åbn [[Fastgjorte kommandoer|kommandopaletten]] og vælg **Eksportér til PDF...**. Du kan også vælge **Flere muligheder** ![[lucide-more-horizontal.svg#icon]] i noten og derefter vælge **Eksportér til PDF...**.
3. Vælg dine indstillinger.
    - **Inkluder filnavn som titel** tilføjer filnavnet øverst i PDF'en.
    - **Sidestørrelse** angiver papirstørrelsen. Du kan vælge A3, A4, A5, Legal, Letter eller Tabloid.
    - **Landskab** vender siderne på siden.
    - **Margen** sætter sidemargen til **Standard**, **Minimal** eller **Ingen**.
    - **Nedskaleringsprocent** skalerer indholdet på hver side. Ved 100 forbliver indholdet i fuld størrelse. Lavere værdier gør tekst og billeder mindre, så der kan være mere på hver side.
4. Vælg **Eksportér til PDF**.
5. Vælg, hvor filen skal gemmes.

> [!tip]- Eksportér en note med et mørkt tema
> Eksporter bruger altid lys styling, selvom dit tema er mørkt. For at ændre, hvordan en eksport ser ud, kan du bruge et [[CSS-kodestykker|CSS-kodestykke]]. Obsidian-forummet har eksempler på kodestykker til udskrivning og eksportering.[^1]

[^1]: Se [How can I make export pdf look the same as my theme?](https://forum.obsidian.md/t/how-can-i-make-export-pdf-look-the-same-as-my-theme/75849) og [PDF and print style reset with code syntax highlighting](https://forum.obsidian.md/t/pdf-and-print-style-reset-with-code-syntax-highlighting/31761).
