> [!warning] Fra dansk oversætter
>Denne side er primært henvendt til brugere, der ønsker at opdatere den engelske referencedokumentation eller udvikler tredjeparts plugins på engelsk! Har du rettelser til den danske udgave, så kontakt nuværende oversætter eller lav et "pull request" på GitHub.

Obsidian dokumentationen anvender: [Google developer documentation style guide](https://developers.google.com/style). Hvis emnet ikke er dækket af denne guide, så benyt: [Microsoft Style Guide](https://learn.microsoft.com/en-us/style-guide/).

Denne side gennemgår eventuelle afvigelser fra Google Stil guiden, eller terminologi, som er værd at fremhæve.

> [!tip] Bidrag
> Det meste dokumentation fandtes før denne stil guide. Hvis du finder brud denne stil guide, så [opret en issue på GitHub](https://github.com/obsidianmd/obsidian-docs/issues/new) eller lav et "pull request" i [obsidianmd/obsidian-docs](https://github.com/obsidianmd/obsidian-docs).

## Terminologi

- Foretræk "keyboard shortcut" i stedet for "hotkey". Benyt "Hotkey", når det refererer til en bestemt funktion
- Foretræk "the Obsidian app" på mobil, og "the Obsidian application" på desktop
- Foretræk "sync" eller "syncing" i stedet for "synchronize" or "synchronizing".
- Foretræk "search term" i stedet for "search query".
- Foretræk "heading" i stedet for "header", når der refereres toæ en tekst, der introducerer en sektion tekst

### UI (Brugergrænseflade) og interaktioner

- Foretræk "select" i stedet for "tap" eller "click".
- Foretræk "sidebar" i stedet for "side bar".
- Foretræk "perform" i stedet for "invoke" og "execute", når der refereres til kommandoer eller aktioner

### Noter, filer og mapper

- Benyt "note", når der refereres til en Markdown fil i boksen
- Benyt "file", når der refereres til en anden fil type end Markdown
- Benyt "note name" i stedet for "note title"
- Benyt "active note" i stedet for "current note"
- Benyt "folder" i stedet for "directory"

Når der skiftes mellem noter, så benyt "open" hvis destinationen er skjult, og "switch" hvis både kilde- og destinations noterne er åbne samtidig.

## Reference dokumentation for indstillinger

Alle indstillinger i Obsidian bør dokumenteres ved brug af beskrivende tekst, når det er muligt. Undgå at dokumentere en specifik indstilling i Obsidian hjælpen medmindre:

- Det kræver en mere dyb viden om hvordan og hvornår den anvendes
- Den ofte bliver brugt forkert eller spurgt til
- Den _drastisk_ ændrer brugeroplevelsen

Overvej at benytte en "tip boble", hvis du ønsker at henlede opmærksomheden på en specifik indstilling.

## Retningsbestemmelser

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

## Eksempler

Foretræk realistiske eksempler i stedet for nonsens udtryk.

**Anbefalet:**

- `task:(opkald OR skema)`

**Ikke anbefalet:**

- `task:(foo OR bar)`

## Tastatur navne

Når der refereres til et tegn på tastaturet med navn, så tilføj tegnet i parentes lige efter navnet:

**Anbefalet:**

- Add a hyphen (-) in front of the word. På dansk: Tilføj en bindestreg (-) foran ordet

**Ikke anbefalet:**

- Add a hyphen in front of the word. På dansk: Tilføj en bindestreg foran ordet
- Add a `-` in front of the word. På dansk: Tilføj et `-` foran ordet
