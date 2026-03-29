---
permalink: plugins/search
publish: true
mobile: true
description: Sök är ett kärnplugin som hjälper dig att hitta data i ditt Obsidian-valv genom att använda söktermer och operatorer för att begränsa resultaten.
---
Sök är ett [[Kärntillägg|kärntillägg]] som hjälper dig hitta data i ditt Obsidian-valv genom att använda söktermer och operatorer för att begränsa resultaten.

Som standard hittar du Sök i vänster sidofält ![[lucide-search.svg#icon]]. Du kan också öppna Sök genom att trycka på `Ctrl+Shift+F` (Windows/Linux) eller `Command+Shift+F` (macOS).

- **Sök markerad text**: Om du markerar text i redigeraren och öppnar Sök med tangentbordsgenvägen visar Sök sökresultaten för den markerade texten.
- **Sök bland senaste söktermer**: Öppna Sök med en tom sökterm för att lista senaste söktermer. Klicka på någon av dem för att använda söktermen igen.

> [!info] Exkluderade filer
> Filer som matchar dina mönster för [[Inställningar#Exkluderade filer|Exkluderade filer]] visas inte i sökresultaten.

## Söktermer

En sökterm är ordet eller frasen som du skriver i sökfältet. Att lära sig skriva söktermer effektivt kan hjälpa dig att snabbt hitta det du letar efter, även i stora valv. Obsidian söker bara i innehållet i anteckningar och canvasar.

> [!tip]- Söka sökvägar och filnamn
> Som standard kan du bara söka i sökvägar och filnamn för anteckningar och canvasar. För att söka efter en sökväg eller ett filnamn för vilken fil som helst i valvet, använd operatorn `path` eller `file`.

Varje ord i söktermen matchas oberoende inom varje fil. För att söka efter en exakt fras, omge den med citattecken, till exempel `"star wars"`. För att söka efter citerad text inom en exakt fras kan du _escape:a_ citattecknen genom att lägga till ett omvänt snedstreck (`\`) framför citattecknet, till exempel `"they said \"hello\" to each other"`.

Du kan styra om filer som innehåller _alla_ orden i din sökterm, eller _något_ av orden, ska returneras:

- `meeting work` returnerar filer som innehåller både `meeting` och `work`.
- `meeting OR work` returnerar filer som innehåller antingen `meeting` eller `work`.

Du kan till och med kombinera de två i samma sökterm.

- `meeting work OR meetup personal` returnerar filer för arbetsmöten och personliga träffar.

Du kan använda parenteser för att styra prioriteten för varje uttryck.

- `meeting (work OR meetup) personal` returnerar filer som innehåller `meeting`, `personal`, och antingen `work` eller `meetup`.

För att exkludera, eller negera, ett ord från sökresultaten, lägg till ett bindestreck (`-`) framför det:

- `meeting -work` returnerar filer som innehåller `meeting` men inte `work`.

Du kan exkludera flera uttryck:

- `meeting -work -meetup` returnerar filer som innehåller `meeting` men inte `work` eller `meetup`.

Du kan exkludera en kombination av uttryck med parenteser:

- `meeting -(work meetup)` returnerar filer som innehåller `meeting` men inte _både_ `work` och `meetup`.

För att filtrera resultat med operatorerna mindre än (`<`) och större än (`>`), omge dem med hakparenteser (`[]`) eller citattecken (`""`):

- `meeting [duration:<5]` returnerar filer där meeting finns och duration är mindre än 5.
- `meeting [duration:>5]` returnerar filer där meeting finns och duration är större än 5.

> [!tip]- Förklara sökterm
> Om du behöver felsöka en komplex sökterm kan du klicka på **Förklara sökterm** i Sök för att få en förklaring av din sökterm.

## Sökoperatorer

Sökoperatorer möjliggör mer detaljerade söktermer för att filtrera dina resultat ytterligare.

Vissa operatorer tillåter till och med att du lägger till en nästlad sökterm inom parenteser, till exempel: `task:(call OR email)`.

| Sökoperator     | Beskrivning                                                                                                                                                                                                                                                                                                        |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `file:`         | Hitta text i filnamn. Matchar vilken fil som helst i valvet.<p/>Exempel: `file:.jpg` eller `file:202209`.                                                                                                                                                                                                          |
| `path:`         | Hitta text i filsökväg. Matchar vilken fil som helst i valvet.<p/>Exempel: `path:"Daily notes/2022-07"`.                                                                                                                                                                                                           |
| `content:`      | Hitta text i filinnehåll.<p/>Exempel: `content:"happy cat"`.                                                                                                                                                                                                                                                       |
| `match-case:`   | Skiftlägeskänslig matchning.<p/>Exempel: `match-case:HappyCat`.                                                                                                                                                                                                                                                    |
| `ignore-case:`  | Skiftlägesokänslig matchning.<p/>Exempel: `ignore-case:ikea`.                                                                                                                                                                                                                                                      |
| `tag:`          | Hitta tagg i fil.<p/>Exempel: `tag:#work`.<p/>Tänk på att sökning efter `tag:#work` inte returnerar resultat för `#myjob/work`.<br /><br />**Obs**: Eftersom `tag:` ignorerar matchningar i kodblock och i icke-Markdown-innehåll är det ofta snabbare och mer exakt än en vanlig fulltextsökning efter `#work`.     |
| `line:`         | Hitta filer som innehåller minst en rad som matchar `x`.<p/>Exempel: `line:(mix flour)`.<p/><br>**Obs:** Att använda `-line` negerar sökningen, vilket innebär att den hittar filer där ingen rad matchar `x`.                                                                                                      |
| `block:`        | Hitta matchningar i samma block.<p/>Exempel: `block:(dog cat)`.<p/>**Obs**: Eftersom `block:` kräver att Sök tolkar Markdown-innehållet i varje fil kan det göra att din sökterm tar längre tid att slutföra.                                                                                                       |
| `section:`      | Hitta matchningar i samma avsnitt (text mellan två rubriker).<p/>Exempel: `section:(dog cat)`.                                                                                                                                                                                                                     |
| `task:`         | Hitta matchningar i en [[Grundläggande formateringssyntax#Att göra-listor\|uppgift]] block för block.<p/>Exempel: `task:call`.                                                                                                                                                                                     |
| `task-todo:`    | Hitta matchningar i en *ofullständig* [[Grundläggande formateringssyntax#Att göra-listor\|uppgift]] block för block.<p/>Exempel: `task-todo:call`.                                                                                                                                                                 |
| `task-done:`    | Hitta matchningar i en *avslutad* [[Grundläggande formateringssyntax#Att göra-listor\|uppgift]] block för block.<p/>Exempel: `task-done:call`.                                                                                                                                                                     |

## Sök egenskaper

Du kan använda data lagrad i [[Egenskaper]] i dina söktermer.

Använd hakparenteser runt ett egenskapsnamn `[egenskap]` för att returnera filer med den egenskapen:

- `[aliases]` returnerar filer som innehåller egenskapen `aliases`

Använd hakparenteser och ett kolon `[egenskap:värde]` för att returnera filer med den egenskapen och det värdet:

- `[aliases:Name]` returnerar filer där egenskapsvärdet `aliases` är `Name`

Använd `null` som värde för att hitta egenskaper som inte har något värde:

- `[aliases:null]` returnerar filer där egenskapen `aliases` finns men inte har något värde

> [!info]+ Tomma värden
> Operatorn `null` fungerar när en egenskap är tom (t.ex. `aliases: `), men inte när egenskapen innehåller tomma citattecken (`""`) eller tomma hakparenteser (`[]`).

Både egenskap och värde tillåter underfrågor, som parenteser för gruppering, operatorn `OR`, dubbla citattecken för exakt matchning och regex.

- `[status:Draft OR Published]` returnerar filer där egenskapsvärdet `status` är `Draft` eller `Published`

## Ändra skiftlägeskänslighet

Som standard är söktermer inte skiftlägeskänsliga. Om du vill söka efter exakt skiftläge i din sökterm, välj **Matcha skiftläge** ![[obsidian-icon-upper-lowercase.svg#icon]] inuti sökfältet.

Denna inställning kan växlas. Om ikonen **Matcha skiftläge** är markerad betyder det att du för närvarande gör en skiftlägeskänslig sökning.

## Ändra sorteringsordning för resultat

1. Ange en [[#Söktermer|sökterm]].
2. Under sökfältet, välj rullgardinsmenyn till höger.
3. Välj den sorteringsordning du vill ha. Standard är "Sortera efter filnamn (A till Ö)".

Följande alternativ är tillgängliga:

- Sortera efter filnamn (A till Ö)
- Sortera efter filnamn (Ö till A)
- Sortera efter redigeringstid (ny till gammal)
- Sortera efter redigeringstid (gammal till ny)
- Skapad tid (ny till gammal)
- Skapad tid (gammal till ny)

## Kopiera sökresultat

1. Ange en [[#Söktermer|sökterm]].
2. Under sökfältet, välj ikonen med tre punkter bredvid antalet resultat.
3. Välj **Kopiera sökresultat**.

## Använda reguljära uttryck

Ett reguljärt uttryck är en uppsättning tecken som beskriver ett textmönster. För att använda reguljära uttryck i din sökterm, omge uttrycket med snedstreck (`/`).

- `/\d{4}-\d{2}-\d{2}/` matchar ett ISO 8601-datum, som 2022-01-01.

Du kan till och med kombinera reguljära uttryck med sökoperatorer:

- `path:/\d{4}-\d{2}-\d{2}/` returnerar filer med ett datum i filsökvägen.

För mer information om hur du skriver reguljära uttryck, se FreeCodeCamps [Practical Regex guide](https://www.freecodecamp.org/news/practical-regex-guide-with-real-life-examples/) eller Mozillas [Regular expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions).

> [!info]+ JavaScript-baserade reguljära uttryck
> Reguljära uttryck finns i olika varianter som kan se olika ut. Obsidian använder JavaScript-baserade reguljära uttryck.

## Konfigurera sökinställningar

För att konfigurera Sök, välj **Sökinställningar** ![[lucide-sliders-horizontal.svg#icon]] på höger sida av sökfältet för att se växlarna.

| Inställning              | Beskrivning                                                                 |
|--------------------------|-----------------------------------------------------------------------------|
| **Förklara sökterm**     | Bryter ner söktermerna och förklarar dem i oformaterad text.                 |
| **Kollapsa resultat**    | Växlar om söksammanhanget ska visas.                                        |
| **Visa mer sammanhang**  | Expanderar sökresultatet för att visa mer text runt matchningen.            |

## Bädda in sökresultat i en anteckning

För att bädda in sökresultat i en anteckning, lägg till ett `query`-kodblock:

````
```query
embed OR search
```
````

[[Introduktion till Obsidian Publish|Obsidian Publish]] stöder inte inbäddade [[Publish-begränsningar#Sök|sökresultat]]. För att se ett liverenderat exempel, använd kodblocket ovan i ditt valv.

![[search-query-rendered.png]]
