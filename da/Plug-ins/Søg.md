![[Search.png]]

"Søg" plug-in'et er en stærk funktion, og kan også være forvirrende.
I de fleste tilfælde virker det, hvis du bare skriver det du søger efter.
Men "Søg" har mange muligheder for at indsnævre søgningen for at finde præcis det, du ønsker.

## Hurtige tip

### Start søgning

Du kan aktivere søgning ved at trykke `Ctrl-Shift-F` eller `Cmd-Shift-F`. Du kan også ændre denne genvejstast i "Indstillinger -> Genvejstaster". Når en søgning er aktiveret vil fokus automatisk blive sat til søgebaren, så du kan begynde at taste din forespørgsel med det samme.

### Søge for markeret tekst

Når du har markeret noge tekst, kan du søge efter det ved at aktivere søgning som ovenfor.

## Søgehistorik

Obsidian husker dine sidste anvendte søgeforespørgsler.

Disse forespørgsler vil blive vist, når din søgeforespørgsel er tom. Du kan klikke på en af dem for at søge med den forespørgsel igen, hvilket gør dig i stand til hurtigt at benytte tidligere forespørgsler.

For at slette søgehistorikken, så klik på "X" knappen i søgeindtastningsfeltet.

## Søgeindstillinger

Der er en række funktioner til rådighed for at søge:

- `Forskel på små og store bogstaver` aktiver matching eller ignorering af forskel på store og små bogstaver. Bemærk at dette kan tilsidesættes for en søgning ved at anvende `match-case:` og `ignore-case:` operatorene, der er forklaret i afsnittet [[Søg#Søgeoperatorer]]
- `Forklar søgeord` viser dig hvad søgeforespørgslen faktisk gør i almindelig tekst
- `Sammenfold resultater` skifter mellem at vise kun note navne for rasultater og vise de linjer i noterne hvor de optræder. Disse udvidede resultater kan udfoldes og sammenfoldes for hver note ved at klikke på trekantsikonet ved siden af filnavnet.
- `Vis mere kontekst` udvider med mere tekst omkring selve det matchede.
- `Skift sorteringsrækkefølge` sorterer resultaterne på forskellige måder, ligesom filer kan sorteres i [[Stifinder|stifinderen]].

## Kopier søgeresultater

For hurtigt og nemt at kunne gemme dine søgeresultater et sted som en liste, f.eks. i en note, kan du benytte "Kopier søgeresultater" funktionen.

Du kan tilpasse om du vil se stier, hvilken link type du vil anvende (wikilink eller Markdown link), og hvordan du vil have listen til at vise sig.

## indlejrede søgeresultater

Du kan indlejre søgeresultater i en note.

Hvis du f.eks. skriver:

<pre><code>```query
indlejr OR søg
```</code></pre>

vil du se denne indlejrede søging: (note: Dette virker ikke i [[Obsidian Publish]] efter 18. januar 2020):

```query
indlejr OR søg
```

## Søgesyntaks

### Kombinere del-forespørgsler

Når du skal skrive en søgeforspørgsel, så husk, at hvis du klikker på "Forklar søgeord" får du en forklaring på hvad der søges efter, hvilket kan være meget anvendeligt, hvis du leder efter fejl i en kompliceret søging.

- Ord der er delt med mellemrum i søgeforespørgsler, vil blive individuelt søgt efter i hver note. F.eks. vil `foo bar` finde en note, som indeholder både `foo` og `bar` et eller andet sted i noten.
- `"Citater i anførselstegn"` kan benyttes til at søge efter flere sammenhængende ord delt med mellemrum, eller i andre ord, eller udtryk. Så, en søgning efter `"foo bar"` med anførselstegn vil kun finde noter som inkluderer disse ord ved siden af hinanden. Du kan benytte omvendt skråstreg og anførselstegn `\"` hvis du faktisk ønsker at søge på anførselstegn. Og `\\` vil søge på omvendt skråstreg.
- Du kan benytte boolske operatorer. Benyt `OR` som "ELLER"-operator. Benyt `-` for negation. Et mellemrum mellem to søgeord svarer til en "OG"-operator.
	- `foo OR bar` vil finde alle noter som indeholder et af ordene. De behøver ikke være i samme note.
	- `foo -bar` vil finde alle de noter, som indeholder `foo`, men ikke hvis de også indeholder `bar`.
-Der kan benyttes paranteser til at gruppere boolske operatorer, f.eks. `((a OR b) (c OR d))`. Det er brugbart, når der skal laves komplekse søgninger, hvor du vil sikre dig at forespørgslen sker i den rækkefølge du ønsker.
- Du kan også anvende regulære søgeudtryk (regex) i søgninger. Benyt skråstreg som start på et regulært søgeudtryk, f.eks. `/[a-z]{3}/`. Obsidian accepterer de regulære udtryk, som JavaScript understøtter. Du kan lære mere om dem [her](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular\_Expressions).

### Søgeoperatorer

Der er flere specielle søgeoperatorer til rådighed. Nogle operatorer tillader indlejrede forespørgsler ved at benytte paranteser, f.eks. `file:("at være" OR -"2B")`.

- `file:(...)`  vil udføre en underforespørgsel på filnavnet. F.eks. `file:".jpg"`. Hvis du benytter Zettelkasten-type UID'er kan det være anvendelligt, hvis du vi lbegrænse søgninger til tidsperioder, f.eks. vil `file:"202007"`finde filer oprettet i juli 2020.
- `path:(...)` vil udføre en underforespørgsel på mappestien, sbosult fra roden. F.eks. `path:"Daglige noter/2020-07"`.
- `content:(...)`  vil udføre en underforespørgsel på fil indholdet. F.eks. `content:"den glade kat"`.
- `match-case:(...)` og `ignore-case:(...)` vil tilsidesætte store og små bogstaver i søgelogikken for den følgende underforespørgsel.
- `tag:`  vil søge efter det specificerede tag i en fil, f.eks. `tag:#arbejde`. Det er hurtigere og mere præcist end at søge efter tagget i klar tekst `#arbejde`, da det benytter den cascede information og ignorerer tekst i kodeblokke og sektioner som ikke er markdowntekst.
- `line:(...)`  vil udføre en underforespørgsel på en linje-på-linje basis i stedet for en fil-på-fil basis. Hvis du f.eks. søger på `foo bar`, kunne det matche en fil der har `foo` i det første afsnit og `bar` i det sidste afsnit. Søgning på `line:(foo bar)` vil kun matche hvis `foo` og `bar` er på den samme linje.
- `block:(...)`  vil udføre en underforespørgsel på en blok-på-blok basis, hvor hver blok er defineret som en markdown blok, som typisk er delt af tomme linjer eller listepunkter. Dette er en tung operation, da den kræver at hver fil bliver analyseret, hvilket betyder at denne søgemåde sandsynligvis er langsommere end andre typer søgninger.
- `section:(...)` vil udføre en underforespørgsel på en sektion-på-sektion basis, hvor hver sektion er teksten mellem to overskrifter, inklusiv den første overskrift.
- `task:(...)` vil udføre en underforespørgsel på hver [[Formater dine noter#Opgaveliste|opgave]] og det sker på en sektion-på-sektion basis. Benyt task:"" for at matche alle opgaver.
- `task-todo:(...)` vil udføre en underforespørgsel på hver [[Formater dine noter#Opgaveliste|opgave]], som ikke er færdige og det sker på en sektion-på-sektion basis. Benyt task-todo:"" for at matche alle ikke-færdige opgaver.
- `task-done:(...)` vil udføre en underforespørgsel på hver [[Formater dine noter#Opgaveliste|opgave]], som er færdige og det sker på en sektion-på-sektion basis. Benyt task-done:"" for at matche alle færdige opgaver.
