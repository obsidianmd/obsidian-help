---
permalink: baser/views
---
Views tillader dig at organisere information i en [[Introduktion til Baser|base]] på flere måder. En base kan indeholde flere views, og hver view kan have en unik visnings-, sorterings-, og filtreringskonfiguration.

Fx. vil du måske oprette en base kaldet "Bøger", som har separate views for "Skal læses" og "Læst fornyligt".

## Værktøjslinjen

I toppen af en base finder du værktøjslinjen, som lader sig interagere med views og deres resultater.

- ![[lucide-table.svg#icon]] **View menu** — opret, rediger og skift views
- **Resultater** — begræns, kopiér og eksportér filer
- ![[lucide-arrow-up-down.svg#icon]] **Sortér** — sorter og grupper filer
- ![[lucide-list-filter.svg#icon]] **Filtrer** — filtrer filer.
- ![[lucide-list.svg#icon]] **Egenskaber** — vælg egenskaber som skal vises og opret [[Formler|formler]]
- ![[lucide-plus.svg#icon]] **Ny** — opret en ny fil i det nuværende vier

## Sådan tilføjer du og skifter views

Der er to måder, hvorpå du kan tilføje et view til en base_

- Klik på view navnet øverst til venstre og vælg ![[lucide-plus.svg#icon]] **Tilføj view**
- Brug [[Kommandopaletten|kommandopaletten]] og vælg **Baser: Tilføj view**

Som standard vil det første view i listen af views vises først. Du kan ændre rækkefølgen ved at trække og slippe deres ikoner til en anden position i listen.

## View indstillinger

Hvert view har sin egne instaillinger. For at redigere dem, skal du:

1. Klik på view navnet øverst til venstre
2. Klik på højrepilen ved siden af det view, som du vil ændre indstillinger på

Du kan alternativet *højreklikke* på viewets navn i basens værktøjslinje of at gå til views instaillinger,

## Layout

Views kan vises med forskellige layouts, såsom en ![[lucide-table.svg#icon]] **tabel**, en ![[lucide-list.svg#icon]] **liste**, som ![[lucide-layout-grid.svg#icon]] **kort**, eller ![[lucide-map.svg#icon]] **landkort**. YDerligere layouts kan blive tilføjet af [[Fællesskabsplugins|fællesskabsplugins]]. Nogle layouts er stadig under udvikling og kræver en [[Tidlig adgang til nye versioner|insiderversion]] af Obsidian.

| Layout                | Beskrivelse                                                                                   | App&nbsp;version |
| --------------------- | --------------------------------------------------------------------------------------------- | ---------------- |
| [[Tabel view\|Tabel]] | Viser filer som rækker i en tabel. Kolonner udfyldes ud fra dine noters [[Egenskaber\|egenskaber]].    | 1.9              |
| [[Kort view\|kort]] | Viser filer som et gitter af kort. Lader dig oprette gallerilignende views med billeder.             | 1.9              |
| [[Liste view\|Liste]]   | Viser filer som [[Grundlæggende formaterings syntaks#Lister\|lister]] med punkttegn eller nummereret. | 1.10             |
| [[Landkort view\|Landkort]]     | DViser filer som nåle på et interaktivt kort. Kræver "Maps" pluginet.                        | 1.10             |


## Filtre

Du tilføjer filtre ved at åbne ![[lucide-list-filter.svg#icon]] **Filter** menuen i toppen af en base.

En base uden filtre viser alle filer i din boks. Filtre kan indsnævrer resultaterne, så der kun vises filer, som opfylder specifikke kriterier. Fx. kan du anvende filtre til kun at vise filer med et specifikt ·[[Tags|tag]] eller filer i en bestemt mappe. Du kan vælge mellem mange forskellige typer af filtre.

Filtre kan anvendes på alle views i en base, eller på et specifikt view ved at vælge fra de to sektioner i ![[lucide-list-filter.svg#icon]] **Filter** menuen.

- **Alle views** anvender filtre på alle views i basen
- **Dette view** anvender filter på det aktive view

#### Filterkomponenter

Filtre kan have tre komponenter:

1. **Egenskab** — lader dig vælge en [[Egenskaber\|egenskaber]] i din boks, inklusiv [[Basesyntaks#Filegenskaber|filegenskaber]]
2. **Operator** — lader dig vælge, hvordan betingelser skal sammenlignes. Listen af operatorer afhænger at egenskabstypen (tekst, dato, tal osv.)
3. **Værdi** — lader dig vælge den værdi, som du sammenligner med. Værdier kan indholde matematik og [[Funktioner|funkrioner]]

#### Konjunktioner

- **Alt det følgende er sandt** er en `og` erklæring - resultater vil kun blive vist, hvis *alle* betingelser i filtergruppen er opfyldt
- **Én af det følgende er sandt** er en `eller` erklæring — resultater vil blive vist hvis *bare én* betingelse i filtergruppen er opfyldt
- **Intet det følgende er sandt** er en `ikke` erklæring — resultater cil ikke blive vist, hvis *én* af betingelserne i filtergrupen er opfyldt

#### Filtergrupper

Filtergrupper tillader dig, at udføre mere kompleks logik ved at lave kombinationer af konjunktioner.

#### Den avancerede filtereditor

For at anvende den **avancerede filter** editor skal du klikke på kodeknappen ![[lucide-code-xml.svg#icon]]. Den viser filterets underliggende [[Basesyntaks|basesyntaks]], og kan anvendes til mere komplekse [[Funktioner|funktioner]] som ikke kan vises med en klik-og-peg grlnseflade.

## Sådan sorterer og grupperer du resultater

For at sortere og gruppere resultaterne i et view skal du åbne ![[lucide-arrow-up-down.svg#icon]] **Sorter** menuen.

Du kan arrangere resultaterne med en eller flere egenskaber i stigende eller faldende rækkefølge. Det gør det nemt at liste noter efter deres navn, sidst redigeret eller enhver anden egenskab - inklusiv formler.

Du kan også gruppere resulater efter en egenskab for at organisere poster, som ligner hinanden, i visuelt forskellige sektioner. For nuværende understøtter Obsidian kun gruppering af en egenskab.

### Sådan tilføjer du en sortering

1. Åbn ![[lucide-arrow-up-down.svg#icon]] **Sorter** menuen i toppen af viewet
2. Vælg den egenskab, som du vil sortere (eller gruppere) ud fra
3. Hvis du har mange sorteringer, så træk dem op og ned i listen ved hjælp af ![[lucide-grip-vertical.svg#icon]] gribeikonet, for at ændre deres prioritet

Sorteringsmulighederne afhænger af egenskabstypen:

- **Tekst**: sorterer *alfabetisk* (A→Å) eller i *omvendt alfabetisk rækkefølge* (Å→A)
- **Tal**: sorterer fra *mindst til størst* (0→1) eller *størst til mindst* (1→0).
- **Dato og tid**: sorterer fra *gammel til ny*, eller *ny til gammel*.

### Sådan fjerner du en sortering

1. Åbn ![[lucide-arrow-up-down.svg#icon]] **Sorter** menuen i toppen af viewet
2. Klik på ![[lucide-trash-2.svg#icon]] skraldespandsikonet ved siden af den sortering eller gruppe, som du vil fjerne

## Sådan begrænser, kopierer og eksporterer du resulatter

### Sådan begrænser du resultater

*Resultater* menuen viser antallet af resultater i viewet. Klik på resultatknappen for at begrænse antallet af resultater, og tilgå yderlige funktioner.

### Sådan kopierer du til udklipsholderen

Denen funktion kopier viewet til udklipsholderen. Når viewet er kopieret til udklipsholderen kan du indsætte den i en Mardown fil, eller i en anden dokumenthåndterings applikation inklusiv regneark som fx. Google Sheets, Exel og Numbers.

### Sådan eksporterer du til CSV

Denne funktion gemmer en CSV fil af det nuværende view.

## Sådan indlejrer du et view

Du kan indlejre basefiler i [[Indlejr filer|enhver anden fil]] ved hjælp af `![[File.base]]` syntaksen. Det første view i listen vil blive anvendt. Du kan ændre rækkefølgen af views i view menuen.

Anvend `![[File.base#View]]` for at specificere standardviewet.
