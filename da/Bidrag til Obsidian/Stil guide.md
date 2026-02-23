---
description: Denne side indeholder stil guiden til at skrive den engelske hjælpedokumentation.
publish: true
permalink: stil-guide
---
> [!warning] Fra den danske oversætter
>Denne side er primært henvendt til brugere, der ønsker at opdatere den engelske referencedokumentation eller udvikler tredjepartsplugins på engelsk! Har du rettelser til den danske udgave, så kontakt nuværende oversætter eller lav et "pull request" på GitHub.

Obsidian dokumentationen anvender: [Google developer documentation style guide](https://developers.google.com/style). Hvis emnet ikke er dækket af denne guide, så benyt: [Microsoft Style Guide](https://learn.microsoft.com/en-us/style-guide/).

Denne side gennemgår eventuelle afvigelser fra Google Stil guiden, eller terminologi, som er værd at fremhæve.

> [!tip] Bidrag
> Det meste dokumentation fandtes før denne stil guide. Hvis du finder brud denne stil guide, så [opret en issue på GitHub](https://github.com/obsidianmd/obsidian-help/issues/new) eller lav et "pull request" i [obsidianmd/obsidian-help](https://github.com/obsidianmd/obsidian-help).

## Terminologi og grammatik

### Sprogstil

Til den engelske dokumentation anbefales det at benytte [Global English](https://docs.openedx.org/en/latest/documentors/references/doc_english_writing.html) for bedre at dække hele verden.

### Termer

- Foretræk "keyboard shortcut" i stedet for "hotkey". Benyt "Hotkey", når det refererer til en bestemt funktion
- Foretræk "the Obsidian app" på mobil, og "the Obsidian application" på desktop
- Foretræk "sync" eller "syncing" fremfor "synchronize" or "synchronizing".
- Foretræk "search term" fremfor "search query".
- Foretræk "heading" fremfor "header", når der refereres toæ en tekst, der introducerer en sektion tekst
- Foretræk "maximun" over "max" og "minimum" over "min".

### Produktnavne

Obsidian produktnavne starter med "Obsidian", f.eks. "Obsidian Publish" og "Obsidian Sync".

Hvis et afsnit indholder mange referencer til et produkt, kan du anvende kort form efter første fulde navn.

F.eks.
_For at kunne tillade enhedsspecifik konfiguraion, synkroniserer Obsidian Sync ikke sine egne indstillinger. Du skal derfor konfigurere Sync for hver af dine enheder._

### UI (Brugergrænseflade) og interaktioner

- Benyt **Bold** for at indikere tekst på knapper
- Foretræk "select" fremfor "tap" eller "click".
- Foretræk "sidebar" fremfor "side barl".
- Foretræk "perform" fremfor "invoke" og "execute", når der refereres til kommandoer eller aktioner

Når der refereres til flere UI interaktioner efter hinanden, så benyt → (U+2192) symbolet. F.eks. , "**Settings → Community plugins**".

### Noter, filer og mapper

- Benyt "note", når der refereres til en Markdown fil i boksen
- Benyt "file", når der refereres til en anden fil type end Markdown
- Foretræk "note name" fremfor "note title"
- Benyt "active note" fremfor "current note"
- Benyt "folder" fremfor "directory"
- Benyt "file type" fremfor "file format" medmindre der specifikt refereres til dataformatet of filindholdet.

Når der skiftes mellem noter, så benyt "open" hvis destinationen er skjult, og "switch" hvis både kilde- og destinations noterne er åbne samtidig.

### Reference dokumentation for indstillinger

Alle indstillinger i Obsidian bør dokumenteres ved brug af beskrivende tekst, når det er muligt. Undgå at dokumentere en specifik indstilling i Obsidian hjælpen medmindre:

- Det kræver en mere dyb viden om hvordan og hvornår den anvendes
- Den ofte bliver brugt forkert eller spurgt til
- Den _drastisk_ ændrer brugeroplevelsen

Overvej at benytte en "tip boble", hvis du ønsker at henlede opmærksomheden på en specifik indstilling.

### Retningsbestemmelser

Sæt bindeled på retningsbestemte udtryk, når du bruger dem som adjektiver. Undgå orddeling, når retning bruges som substantiv.

**Anbefalet:**

- Select **Settings** in the bottom-left corner.
- Select **Settings** in the bottom left.

**Ikke anbefalet:**

- Select **Settings** in the bottom left corner.
- Select **Settings** in the bottom-left.

Foretræk "upper-left" og "upper-right" i stedet for "top-left" og "top-right".

Angiv ikke en retning, når der refereres til indstillinger. Indstillingerne kan befinde sig forskellige steder afhængig af enheden.

**Anbefalet:**

- Next to **Pick remote vault**, click **Choose**.

**Ikke anbefalet:**

- To the right of **Pick remote vault**, click **Choose**.

### Instruktioner

Brug imperativer til navnene på guider, afsnitsoverskrifter og trin-for-trin instruktioner. Imperativformen er kortfattet og handlingsorienteret, hvilket gør det nemmere for brugere at følge instruktioner.

- Foretræk "Set up" fremfor "Setting up"
- Foretræk "Move a file" fremfor "Moving a file"
- Foretræk "Import your notes" fremfor "Importing your notes"

### Små og store bogstaver

Foretræk *sentence case* fremfor *title case* for overskrifter, knapper og titler. Når der refereres til UI elementer, så bevar altid teksten med store og små bogstaver som i brugergrænsefladden.

**Anbefalet:**

- How Obsidian stores data

**Ikke anbefalet:**

- How Obsidian Stores Data


### Eksempler

Foretræk realistiske eksempler i stedet for nonsens udtryk.

**Anbefalet:**

- `task:(call OR schedule)`

**Ikke anbefalet:**

- `task:(foo OR bar)`

## Tastatur navne

Når der refereres til et tegn på tastaturet med navn, så tilføj tegnet i parentes lige efter navnet:

**Anbefalet:**

- Add a hyphen (-) in front of the word. På dansk: Tilføj en bindestreg (-) foran ordet

**Ikke anbefalet:**

- Add a hyphen in front of the word. På dansk: Tilføj en bindestreg foran ordet
- Add a `-` in front of the word. På dansk: Tilføj et `-` foran ordet

### Markdown

Benyt linjeskift mellem Markdown blokke:

**Anbefalet:**

```md
# Heading 1

This is a section.

1. First item
2. Second item
3. Third item
```

**Ikke anbefalet:**

```md
# Heading 1
This is a section.
1. First item
2. Second item
3. Third item
```

### Billeder

Benyt "**width** x **height** pixels" for at beskrive billed- eller skærmstørrelse.

**Eksempel:**

Recommended image dimensions: 1920 x 1080 pixels.

## Ikoner og billeder

Inkluder ikoner og billeder når det er nemmere at forklare noget, som er svært at beskrive med ord, eller når du har brug for at vise vigtige dele af Obsidian brugergrænsefladen. Du kan gemme billeder i `Attachments` mappen.

- Et billede skal kunne få en tekst til nemmere at kunne forstås.

 **Eksempel**: Once enabled, the [[Word count]] plugin will create a new entry on your bottom statusbar.
 
![[Style-guide-zoomed-example.png#interface|300]]

- Billeder skal være i `.png` eller `.svg` format
- Hvis et billede ser for stort ud i en note, så gør det mindre i et billedredigeringsprogram udenfor Obsidian, eller juster billedets visudelle dimensioner, som forklaret i [[Embed files#Embed an image in a note|embedding an image in a note]]
- I sjældne tilfælde kan du placere meget store og komplekse billeder i en  [[Callouts#Foldable callouts|folded callout]]
- Hvis du viser pop-up vinduer eller modal vinduer, så skal man kunne se hele Obsidian applikationsvinduet
![[Style-guide-modal-example.png#interface]]

### Ikoner

[Lucide](https://lucide.dev/icons/) og brugerdefinerede Obsidian ikoner kan bruges sideløbende med detaljerede elementer for give en feature bedre visuel repræsentation.

**Eksempel:** In the ribbon on the left, select **Create new canvas** ( ![[lucide-layout-dashboard.svg#icon]] ) to create a canvas in the same folder as the active file.

**Guidelines for Ikoner**

- Gem ikoner i `Attachments/icons` mappen
- Tilføj præfiks `lucide-` i starten af navnet for et Lucide ikon
- Tilføj præfiks `obsidian-icon-` i starten af navnet for et Obsidian ikon

**Eksempel:** The icon for creating a new canvas should be named `lucide-layout-dashboard`.

- Benyt SVG udgaver af ikonerne, hvis de er tilgængelige
- Ikoner skal være `18` pixels brede, `18` pixels høje, og have en stregbredde på `1.5`. Du kan justere disse indstillinger i SVG filens data.

> [!info]- Justering af størrelse og stregbredde i et SVG billede
> ```html
> <svg xmlns="http://www.w3.org/2000/svg" width="WIDTH" height="HEIGHT" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="STROKE-WIDTH" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-layout-dashboard"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>
>```

- Brug `ikon`-ankeret i integrerede billeder til at justere afstanden omkring ikonet, så det justeres pænt i forhold til teksten i nærheden
- Ikoner skal være angives i paranteser. ( ![[lucide-cog.svg#icon]] )

**Eksempel**: `( ![[lucide-cog.svg#icon]] )`

### Billed anker tags

Det er muligt at angive billed anker tags for at tilføje ændringer til indlejrede billeder.

> [!warning] Advarsel for live forhånsvisningstilstand
> Billed anker tags bliver ikke vist korrekt i **live forhånsvisningstilstand.** Benyt **Læsningstilstand** for at tjekke, at billed tagget virker.

**Ikoner**

`![[lucide-menu.svg#icon]]`

Ikon anker tagget sikrer korrekt vertikal justering for ikoner, der benyttes til at indikere brugergrænseflade elementer.

Det første menu ikon anvender anker tagget ( ![[lucide-menu.svg#icon]] ), mens det andet menu ikon ( ![[lucide-menu.svg]] ) ikke gør det.

**Brugergrænseflade**

`![[Vault picker.png#interface]]`

'interface' anker tagget tilføjer en skyggeboks dekoration rundt om billedet. På det første billede bliver 'interface' tagget anvendt.
![[Vault picker.png#interface]]
I modsætning har det andet billede ikke brugergrænseflade ankeret anvendt.

![[Vault picker.png]]

**Disposition (outline)**

`![[Backlinks.png#outline]]`

'outline' anker tagget tilføjer en diskret kant rundt om billedet. På det første billede bliver 'outline' tagget anvendt.

> [!tip] Læg mærke til nederste venstre del af billedet for at se forskellen.

![[Backlinks.png#outline]]

Det andet billede har ikke noget 'outline' anker tag.

![[Backlinks.png]]

### Optimering

Billeder forsinker en sides indlæsningstid, og fylder meget i [[Introduktion til Obsidian Publish|Publish]]. Hvis billederne bliver komprimeret kan filstørrelsen mindskes, uden helt store visuelle tab.

Både billeder og ikoner bør komprimeres.

> [!success] Værktøjer til komprimering af billeder
> Her er nogle anbefalede progammer til at reducere størrelsen på dine billeder.
> - **Windows:** [FileOptimizer](https://sourceforge.net/projects/nikkhokkho/)
> - **macOS:** [ImageOptim](https://imageoptim.com/)
> - **Linux/Unix** [Trimage](https://trimage.org)
> 
> Vi anbefaler en komprimeringsrate på omkring 65-75%.

## Layout

### Ødelagte links

Før du laver et 'Pull Request' på GitHub skal du tjekke dokumentatione igennem for ødelagte links og sikre at alle links virker. Ødelagte links kan opstår hen over tid, så sørg for at verificere alle links, da det sikrer kvaliteten af dokumentationen.

Du kan tjekke for ødelagte links ved at anvende [[Fællesskabsplugins]] eller andre værktøjer, der kan være tilgængelige i dit IDE.

### Beskrivelser

Denne dokumentation er redigeret på GitHub og hostet online ved hjælp via  [[Introduktion til Obsidian Publish|Obsidian Publish]], som indeholder  [[Social media link previews#Description|beskrivelser]] til social kort og andre [[SEO]] elementer.

Hvis siden du arbejder på ikke har en `description` [[Egenskaber|egenskab]], så tilføj en. Beskrivelsen skal være maximum 150 karaterer og give et objektiv sammendrag af sidens indhold.

**God beskrivelse**: Learn to create templates that capture and organize web page metadata automatically with Web Clipper.
**Kan forbedres**: Learn how to create templates that automatically capture and organize metadata from web pages with Web Clipper.

### Retninger

Når der skrives eller omskrives [[#Instruktioner]], hvordan man udfører en handling i Obsidian, så forklar med trin både for desktop- og mobilversionen.

Hvis du ikke har adgang til en mobil- eller desktop enhed, så nævn det, når du indsender dit 'Pull Request'.

## Oversættelser

Oversæt al indhold, når du færdiggør en oversættelse. Dette inkluderer og er ikke begrænset til:

- Note navne
- Mappe navne
- Aliaser
- Vedhæftningsnavne
- Alternativ link tekst
