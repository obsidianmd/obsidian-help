---
permalink: settings
publish: true
mobile: true
description: Lær hvordan du tilpasser Obsidian gennem indstillingsgrænsefladen.
---
Indstillinger giver dig mulighed for at tilpasse din Obsidian-oplevelse. Konfigurer generelle indstillinger, editorpræferencer, udseende, tastaturgenveje, og administrer både kerne- og fællesskabsplugins.

## Åbn Indstillinger

### Desktop

I den [[Sidebjælke#Åbn skjulte sidebjælker|venstre sidebjælke]] vælger du **[[Indstillinger]]** ![[lucide-cog.svg#icon]]. Du kan også åbne Indstillinger med [[Fastgjorte kommandoer|kommandopaletten]].

### Mobil

I den venstre sidebjælke vælger du **[[Indstillinger]]** ![[lucide-cog.svg#icon]].

## Organisering af indstillinger

Indstillinger er organiseret i følgende kategorier:

- **Indstillinger** — Grundlæggende applikationsindstillinger inklusiv [[#Generelt]], [[#Editor]], [[#Filer og links]], [[#Udseende]] og [[#Genvejstaster]].
- **[[Kerneplugins]]** — Indbyggede plugins, der følger med Obsidian.
- **[[Fællesskabsplugins]]** — Tredjepartsplugins installeret fra fællesskabet.

## Generelt

Siden Generelt indeholder versionsinformation, opdateringsindstillinger, sprogpræferencer og kontoadministration.

### Version og opdateringer

Se din aktuelle Obsidian-version og installationsprogramversion øverst på siden. Vælg **Tjek for opdateringer** for manuelt at søge efter nye versioner, eller vælg **[Læs ændringsloggen](<https://obsidian.md/changelog/>)** for at se udgivelsesnoter.

**Automatiske opdateringer**

Når aktiveret, tjekker Obsidian automatisk for nye versioner og giver dig besked, når opdateringer er tilgængelige.

**Modtag insider versioner**

Auto-opdater til de nyeste [[Tidlig adgang-versioner]]. Disse versioner indeholder nye funktioner, men kan være mindre stabile.

> [!info]+ Catalyst-licens påkrævet
> Denne mulighed er kun tilgængelig for brugere med en [[Catalyst-licens]].

### Sprog

Vælg dit foretrukne sprog til Obsidians grænseflade. Vælg **[[Oversættelser|Lær hvordan du tilføjer et nyt sprog til Obsidian]]** for at bidrage med en oversættelse.

### Hjælp

Vælg **[[Hjem|Åbn]]** for at få adgang til hjælperessourcer, herunder dokumentation, fællesskabsfora og fejlfindingsguider.

### Konto

Administrer din Obsidian-konto og licenser.

**Din konto**

Se dine kontooplysninger, herunder brugernavn og e-mail. Vælg **[Administrer](https://obsidian.md/account)** for at få adgang til kontoindstillinger, eller vælg **Log ud** for at logge ud af applikationen.

**Catalyst-licens**

Se din catalyst-licensstatus. Hvis du har en aktiv [[Catalyst-licens]], vises dit licensniveau her.

**Kommerciel licens**

Hvis du støtter [Obsidian til arbejde](<https://obsidian.md/blog/free-for-work/>), vælg **Aktiver** for at indtaste en kommerciel licensnøgle, eller vælg **[Køb](https://obsidian.md/account/commercial)** for at købe en licens. Vælg **[[Kommerciel licens|Få mere at vide]]** for information om kommercielle licenser.

### Avanceret

#### Notificer hvis opstarten tager længere tid end forventet

Når aktiveret, viser Obsidian en notifikation, hvis opstarten er usædvanligt langsom. Notifikationen indeholder diagnostisk information om, hvad der forårsager forsinkelsen. Vælg ur-ikonet ![[lucide-timer.svg#icon]] ud for denne indstilling for at [[Hjælp og support#Tjek opstartstid|tjekke din opstartstid]].

## Editor

Editorsiden indeholder indstillinger for, hvordan du ser og redigerer noter.

### Fokuser altid på nye faner

Når du åbner et link i en ny fane, skift til det med det samme.

### Standardview for nye faner

Standardvisningen, som en ny Markdown-filfane åbnes i. Vælg mellem [[Visninger og redigeringstilstand#Læsevisning|Læsevisning]] eller [[Visninger og redigeringstilstand#Redigeringsvisning|Redigeringsvisning]].

### Standard redigeringstilstand

Den standard redigeringstilstand, som en ny fane starter med. Vælg mellem [[Visninger og redigeringstilstand#Live-forhåndsvisning|Live-forhåndsvisning]] eller [[Visninger og redigeringstilstand#Kildetilstand|Kildetilstand]].

### Vis redigeringstilstand i statusbar

Vis redigeringstilstand-skifteren i [[Statuslinje|statuslinjen]].

### Visning

#### Læsbar linjelængde

Begræns maksimal linjelængde. Rummer mindre indhold på skærmen, men gør lange afsnit mere læsbare.

#### Strikse linjeskift

Markdown-specifikationer ignorerer enkelte [[Grundlæggende formateringssyntaks#Linjeskift|Linjeskift]] i læsevisning. Slå dette fra for at gøre enkelte linjeskift synlige.

#### Egenskaber i dokument

Vælg hvordan [[Egenskaber|egenskaber]] vises øverst i noter. Vælg **kilde** for at vise egenskaber som rå YAML.

#### Fold overskrift

[[Foldning|Fold]] alt indhold under en overskrift ved at vælge fold-ikonet ved siden af den.

### Fold indrykning

[[Foldning|Fold]] dele af en indrykning, såsom lister, ved at vælge fold-ikonet.

#### Vis linjenumre

Vis linjenumre i margen.

#### Vis indrykningshjælpelinjer

Vis lodrette hjælpelinjer mellem listepunkter.

#### Højre-til-venstre (RTL)

Indstiller tekstretningen for noter til at vises fra højre mod venstre.

#### Auto-par paranteser

Par parenteser og anførselstegn automatisk.

#### Auto-par Markdown-syntaks

Par automatisk symboler for fed, kursiv, kode og mere.

#### Smart listeindrykning

Ordner indrykning og listepunkter for dig.

#### Brug tabulatorer

Brug tabulatorer til indrykning ved at trykke på Tab-tasten. Slå dette fra for at indrykke med 4 mellemrum.

#### Auto-konverter HTML

Konverter automatisk HTML til Markdown ved indsætning og træk-og-slip fra websider.

Brug `Ctrl/Cmd+Shift+V` til at indsætte HTML uden konvertering.

### Adfærd

#### Stavekontrol

Aktiverer stavekontrol. Vælg tandhjulsikonet for at fjerne gemte elementer fra den brugerdefinerede ordbog.

#### Stavekontrolsprog

**Windows og Linux:**

Vælg de sprog, som stavekontrollen skal bruge. Vælg plus (+)-ikonet for at tilføje sprog. For at fjerne et sprog, vælg X ud for det.

**macOS:**

Den indbyggede stavekontrol registrerer automatisk sproget, der bruges af styresystemet.

#### Tabulatorstørrelse

Antal mellemrum, en tabulator svarer til.

### Avanceret

#### Vim-tastaturgenveje

Lader dig bruge Vim-tastaturgenveje ved redigering.

## Filer og links

Siden Filer og links indeholder indstillinger for filhåndtering, links og boksadfærd.

### Standardplacering for nye noter

Hvor nye noter placeres. Mulighederne inkluderer:

- **Boksmappe** — Noter oprettes i roden af din boks.
- **I Samme mappe som nuværende fil** — Noter oprettes i samme mappe som den aktuelt aktive note.
- **I mappen angivet nedenfor** — Noter oprettes i en specifik mappe, du vælger.

### Standardplacering for nye vedhæftninger

Hvor nyligt tilføjede [[Vedhæftninger|vedhæftninger]] placeres. Mulighederne inkluderer:

- **Boksmappe** — Vedhæftninger placeres i roden af din boks.
- **I mappen angivet nedenfor** — Vedhæftninger placeres i en specifik mappe, du vælger.
- **I Samme mappe som nuværende fil** — Vedhæftninger placeres i samme mappe som den aktuelt aktive note.
- **I undermappe under nuværende mappe** — Vedhæftninger placeres i en undermappe inden for den aktuelle notes mappe.

### Links

#### Nyt linkformat

Hvilket linkformat der indsættes ved automatisk generering af [[Interne links|interne links]]. Mulighederne inkluderer:

- **Korteste sti, når muligt** — Bruger den korteste unikke sti til den linkede fil.
- **Relativ sti til fil** — Bruger en sti relativ til den aktuelle fil.
- **Absolut sti i boks** — Bruger den fulde sti fra boksens rod.

#### Opdater altid interne links

Når aktiveret, opdaterer Obsidian automatisk interne links, når du omdøber en fil. Slå dette fra for at blive bedt om at opdatere links efter omdøbning.

#### Brug Wikilinks

Auto-generer Wikilinks for `[[links]]` og `![[billeder]]` i stedet for Markdown-links og billeder. Deaktiver denne mulighed for at generere Markdown-links i stedet.

#### Vis alle filtyper

Vis alle filtyper, selvom Obsidian ikke kan åbne dem direkte, så du kan linke til dem og se dem i stifinder og hurtigskifter.

### Papirkurv

#### Bekræft filsletning

Spørg før sletning af en fil.

#### Slettede filer

Hvad der sker med en fil, efter du sletter den. Mulighederne inkluderer:

- **Flyt til systemets papirkurv** — Filer flyttes til dit styresystems papirkurv.
- **Flyt til Obsidians papirkurv** — Filer flyttes til `.trash`-mappen i din boks.
- **Slet permanent** — Filer slettes permanent og kan ikke gendannes.

### Avanceret

#### Ekskluderede filer

Ekskluderede filer vil være skjult i [[Søg]], [[Grafvisning]] og ikke-linkede omtaler ([[Tilbagelinks]] og [[Udgående Links]]), og mindre synlige i [[Hurtig Skifter]] og linkforslag. Vælg **Administrer** for at konfigurere ekskluderede filer.

#### Tilsidesæt konfigurationsmappe

Brug en anden [[Konfigurationsmappe|konfigurationsmappe]] end standardmappen. Skal starte med et punktum.

#### Tillad URI callbacks

Aktiver brug af x-callback-url gennem x-success eller x-error ved håndtering af [[Obsidian URI|Obsidian URI'er]].

#### Genopbyg boks cache

Genopbygger boksens [[Hvordan Obsidian gemmer data#Metadata cache|metadatacache]]. Genopbygning af cachen kan tage fra et par sekunder til et par minutter afhængig af størrelsen på din boks. Vælg **Genopbyg** for at starte processen.

## Udseende

Udseendesiden indeholder indstillinger til at tilpasse, hvordan Obsidian ser ud.

### Basistema

Vælg Obsidians standard farvetema. Mulighederne inkluderer:

- **Tilpas til system** — Matcher dit styresystems lyse eller mørke tilstand.
- **Lys** — Bruger lys tilstand.
- **Mørk** — Bruger mørk tilstand.

### Accentfarve

Vælg accentfarven, der bruges i hele applikationen. Vælg farvevælgeren eller nulstillingsikonet for at tilpasse.

### Temaer

Administrer installerede [[Temaer|temaer]] og gennemse fællesskabstemaer. Vælg **Administrer** for at se og installere temaer. Rullemenuen viser dit aktuelt aktive tema. Mappeikonet ![[lucide-folder-open.svg#icon]] åbner temamappen i din [[Konfigurationsmappe|konfigurationsmappe]].

### Nuværende fællesskabstemaer

Viser antallet af fællesskabstemaer, du har installeret.

### Skrifttype

#### Grænsefladeskrifttype

Indstil basisskrifttype for hele Obsidian. Vælg **Administrer** for at vælge en brugerdefineret skrifttype eller indtaste et skrifttypenavn.

#### Tekstskrifttype

Indstil skrifttype for redigerings- og læsevisninger. Vælg **Administrer** for at vælge en brugerdefineret skrifttype eller indtaste et skrifttypenavn.

#### Monospace-skrifttype

Indstil skrifttype til steder som kodeblokke og metadata. Vælg **Administrer** for at vælge en brugerdefineret skrifttype eller indtaste et skrifttypenavn.

#### Skriftstørrelse

Skriftstørrelse i pixels, der påvirker redigerings- og læsevisninger. Juster med skyderen.

#### Hurtig justering af skriftstørrelse

Juster skriftstørrelsen med `Ctrl+Scroll` (Windows/Linux) eller `Cmd+Scroll` (macOS), eller ved at bruge pinch-zoom-bevægelsen på pegefeltet.

### Grænseflade

#### Vis indlejret titel

Viser filnavnet som en redigerbar titel indlejret med filindholdet. Den indlejrede titel fungerer som en overskrift i Obsidian, men tilføjer ikke en overskrift til din note.

#### Vis fanens titellinje

Vis overskriften øverst på hver fane.

#### Vis båndmenu

Vis lodret værktøjslinje på siden af vinduet. Få mere at vide om [[Båndmenu|værktøjslinjen]].

#### Båndkonfiguration

Konfigurer hvilke kommandoer, der vises i båndmenuen. Vælg **Administrer** for at tilpasse.

> [!info]+ Mobilkonfiguration af båndmenu
> På mobil fungerer tilpasning af båndmenuen anderledes. Se [[Båndmenu#Mobil|Tilpasning af båndmenu på mobil]] for detaljer.

### Avanceret

#### Zoomniveau

Styrer appens overordnede zoomniveau. Juster med skyderen.

#### Styresystemets menuer

Menuer i hele applikationen vil matche styresystemets menuer. De påvirkes ikke af dit tema.

#### Vinduesrammestil

Bestemmer stilen for titellinjen i Obsidian-vinduer. Kræver en fuld genstart for at træde i kraft. Mulighederne inkluderer:

- **Obsidian stil** — Bruger Obsidians brugerdefinerede vinduesramme.
- **Styresystem stil** — Bruger dit styresystems standard vinduesramme.
- **Skjult ramme** — Skjuler titellinjen helt.

#### Brugerdefineret applikationsikon

Indstil et brugerdefineret ikon til applikationen. Vælg **Vælg** for at vælge en ikonfil (`.icns`, `.ico`, `.png` eller `.svg`). Få mere at vide om [[Udseende#Brugerdefineret applikationsikon|brugerdefinerede appikoner]].

#### Gennemsigtigt vindue

Slå gennemsigtighedseffekten til for at forstærke dybdefornemmelsen. Bruges bedst med mørk tilstand. Understøttes ikke på Linux.

> [!info]+ Kun macOS
> Denne funktion er primært designet til macOS. Få mere at vide om [[Udseende#Gennemsigtighed|gennemsigtighed]].

#### Hardwareacceleration

Slår hardwareacceleration til, som bruger din GPU til at forbedre Obsidians ydeevne. Hvis du slår dette fra, kan appens ydeevne blive betydeligt forringet, men det kan løse sjældne problemer.

### CSS-kodestykker

Administrer og se [[CSS-kodestykker|CSS-kodestykker]] gemt i din boks. CSS-kodestykker gemmes i `/boks/.obsidian/snippets/`. Vælg opdateringsikonet for at genindlæse kodestykker, eller mappeikonet ![[lucide-folder-open.svg#icon]] for at åbne kodestykke-mappen.

## Genvejstaster

Siden [[Genvejstaster]] giver dig mulighed for at se, indstille og tilpasse [[Redigeringsgenveje|tastaturgenveje]] for kommandoer i Obsidian.

Brug søgefeltet til at filtrere kommandoer, og vælg filterikonet for kun at vise kommandoer med tildelte genvejstaster. For at tilføje en genvejstast, vælg plus (+)-ikonet ud for en kommando. For at fjerne en genvejstast, vælg X-ikonet ud for tastekombinationen.

## Kerneplugins

[[Kerneplugins]] er indbyggede plugins, der følger med Obsidian. Hvert plugin tilføjer specifik funktionalitet til applikationen.

For at aktivere eller deaktivere et kerneplugin, vælg kontakten ud for pluginnens navn. Vælg plus-ikonet ![[lucide-plus-circle.svg#icon]] for at se [[Genvejstaster|genvejstasterne]] for pluginnen. Vælg indstillingsikonet ![[lucide-settings.svg#icon]] for at åbne pluginnens indstillingsside.

Brug søgefeltet til at filtrere plugins efter navn.

## Fællesskabsplugins

[[Fællesskabsplugins]] er tredjepartsplugins oprettet af Obsidian-fællesskabet. Gennemse og installer plugins ved at vælge **Gennemse**.

### Begrænset tilstand

[[Pluginsikkerhed#Begrænset tilstand|Begrænset tilstand]] deaktiverer alle fællesskabsplugins af sikkerhedshensyn. Vælg **Slå til** for at aktivere begrænset tilstand.

### Nuværende plugins

Viser antallet af fællesskabsplugins, du har installeret. Vælg **Tjek for opdateringer** for at søge efter pluginopdateringer.

### Installerede plugins

Se og administrer dine installerede fællesskabsplugins. Brug søgefeltet til at filtrere plugins efter navn. Hvert plugin har ikoner for indstillinger, genvejstaster, finansiering, afinstallering og en kontakt til at aktivere eller deaktivere det.
