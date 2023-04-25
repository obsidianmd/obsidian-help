Du kan benytte søge pluginnet til at finde filer i din boks.

Som standard kan du finde **Søg** i venstre sidepanel (Forstørrelsesikonet). Du kan også åbne **Søg** ved at trykke `Ctrl+Skift+F` (eller `Cmd+Skift+F` på macOS).

- **Søg i den markerede tekst:** Hvis du markerer noget tekst i editoren og åbner **Søg** med genvejtasten, så vil der kun blive vist søgeresultater for den markerede tekst
- **Søg med senest benyttede søgeterm:** Hvis du åbner **Søg** uden et søgeterm vil der blive vist en liste af de senest benyttede søgetermer. Klik på en af dem for at anvende søgetermet igen.

## Søgetermer

Et søgeterm er ord eller fraser, som du skriver i søgefeltet. Du kan lære at skrive effektive søgetermer, så du hurtigt kan finde det du søger efter selv i store bokse.
Der vil blive søgt efter et match i hver fil for hvert ord i en søgeterm. For at søge efter en eksakt frase, skal du omslutte søgeordene med citationstegn, f.eks. `"star wars"`.  Hvis du skal søge efter en eksakt frase, der indeholder citationstegn, så kan du benytte baglæns skråstreger (`\`) før hver citationstegn, f.eks. `"de sagde \"hej\" til hinanden"`.

Du kan kontrollere om en søgning skal finde filer der indeholder _alle_ ord i din søgefrase eller blot _nogle_ af dem:

- `møde arbejde` returnerer filer, der indeholder både `møde` og `arbejde`
- `møde OR arbejde` returnerer filer, der indeholder enten `møde` eller `arbejde`

Du kan endda kombinere de måder i den samme søgefrase:

- `møde arbejde OR sammenkomst personlig` returnere filer, der indholder ord med møder på arbejde og personlige sammenkomster

Du kan benytte parenteser til at kontrollere hver udtryks prioritet:

- `møde (arbejde OR sammenkomst) personlig` returnerer filer, der indholder `møde`, `personlig` og  enten `arbejde` eller `sammenkomst`

For at udelukke et ord fra søgeresultater kan du tilføje en bindestreg (`-`) foran det:

- `møde -arbejde` returnerer filer, som indholder `møde`, men ikke `arbejde`

> [!tip] Forklar søgeterm
> Hvis du har brug for at fejlfinde en kompleks søgeterm, kan du få en forklaring ved at klikke på **Forklar søgeterm** (Ikonet med et spørgsmålstegn indeni en cirkel) nederst på søgepanelet

## Søgeoperatorer

Du kan anvende søgeoperatorer til at filtrere din søgning og derved foretage en mere præcis søgning.

Nogle operatorer tillader dig endda at indlejre søgetermer i parenteser, f.eks. `task:(opkald OR email)`

| Søgeoperator | Beskrivelse                                                                                                                                                                                                          |
|-----------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `file:`         | Søg efter tekst i filnavnet.<p/>Eksempel: `file:.jpg` or `file:202209`.                                                                                                                                                     |
| `path:`         | Søg efter tekst i filstien.<p/>Eksempel: `path:"Daglige noter/2022-07"`.                                                                                                                                                    |
| `content:`      | Søg efter tekst i filindholdet.<p/>Eksempel: `content:"glad kat"`.                                                                                                                                                        |
| `match-case:`   | Match store og små bogstaver.<p/>Eksempel: `match-case:GladKat`.                                                                                                                                                             |
| `ignore-case:`  | Ignorer store og små bogstaver.<p/>Eksempel: `ignore-case:ikea`.                                                                                                                                                              |
| `tag:`          | Søg efter tag i filer.<p/>Eksempel: `tag:#arbejde`.<p/>**Note**: Da `tag:` ignorerer en match i kodeblokke og i ikke-markdown indhold, er det ofte hurtigere og mere præcist end en fuldtekst søgning efter `#arbejde`.     |
| `line:`         | Søg efter tekst på samme linje.<p/>Eksempel: `line:(blandet mel)`.                                                                                                                                                       |
| `block:`        | Søg efter tekst i samme blok.<p/>Eksempel: `block:(hund kat)`.<p/>**Note**: Da `block:` kræver at der søges i Markdown indhold i hver eneste fil i boksen, kan det resultere i en søgning som tager længere tid. |
| `section:`      | Søg efter tekst i samme sektion (Tekst mellem to overskrifter).<p/>Eksempel: `section:(hund kat)`.                                                                                                                         |
| `task:`         | Søg efter tekst i en opgave, blok for blok. Se: [[Formater dine noter#Opgaveliste|opgave]].<p/>Eksempel: `task:opkald`.                                                                                                          |
| `task-todo:`    | Søg efter tekst i en uafsluttet opgave, blok for blok. Se: [[Formater dine noter#Opgaveliste]].<p/>Eksempel: `task-todo:opkald`.                                                                                      |
| `task-done:`    | Søg efter tekst i en afsluttet opgave, blok for blok. Se: [[Formater dine noter#Opgaveliste]].<p/>Eksempel: `task-done:opkald`.                                                                                         |


## Brug af regulære udtryk i søgetermer

Et regulært udtryk er et sæt af tegn, som beskriver et tekstmønster. For at anvende regulære udtryk i dine søgetermer skal du omkranse udtrykket med slash (`/`).

- `/\d{4}-\d{2}-\d{2}/` matcher en ISO 8601 dato, f.eks., 2022-01-01.

Du kan endda kombinere regulære udtryk med søge operatorer;

- `path:/\d{4}-\d{2}-\d{2}/` søger efter filer med en dato i den angivne filsti

Du kan få mere information om [regulære udtryk her](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)

> [!note]
> Regulære udtryk findes i flere forskelige udgaver, som kan set ret forskellige ud. Obsidian benytter JavaScript udgaven af regulære udtryk.

## Konfiguration af søgeindstillinger

Du kan konfigurere **Søg** i indstillingerne i toppen af søgepanelet (Med standard temaet):

| Setting                 | Description                                                                 |
|-------------------------|-----------------------------------------------------------------------------|
| **Forskel på store og små bogstaver**          | Skifter mellem søgning med eller uden forskel på store og små bogstaver.                                            |
| **Forklar søgeterm** | Opdeler søgetermerne og forklarer dem i almindelig tekst.                 |
| **Sammenfold resultater**    | Skifter mellem at vise filer med søgeindhold eller kun filnavne.                                 |
| **Vis mere kontekst**   | Udfolder søgereultater, så der ses mere tekst omrking søgeresultaterne.               |
| **Skift sorteringsrækkefølge**   | Skifter sorteringsrækkefølge for søgeresultaterne.                                     |
| **Kopier søgeresultater** | Konverterer og kopierer søgeresultaterne som en Markdownliste, hvor du også kan få links indlejret. |

## Indlejr søgeresultater i en note

For at indlejre søgeresultater i en note skal du tilføje en `query` kodeblok:

<pre><code>```query
indlejer OR søg
```</code></pre>

F.eks.

> [!note]
> [[Introduction to Obsidian Publish|Obsidian Publish]] inderstøtter ikke indlejrede søgeresultater. For at se et eksempel skal du åbne Obsidian hjælpen lokalt i Obsidian.

```query
indlejr OR søg
```
