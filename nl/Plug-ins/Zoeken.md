---
permalink: plugins/search
publish: true
mobile: true
description: Zoeken is een kernplug-in waarmee je gegevens in je Obsidian-kluis kunt vinden door zoektermen en operatoren te gebruiken om de resultaten te verfijnen.
---
Zoeken is een [[Ingebouwde plug-ins|kernplug-in]] die je helpt gegevens in je Obsidian-kluis te vinden door zoektermen en operatoren te gebruiken om resultaten te verfijnen.

Standaard vind je Zoeken in de linker zijbalk ![[lucide-search.svg#icon]]. Je kunt Zoeken ook openen door `Ctrl+Shift+F` (Windows/Linux) of `Command+Shift+F` (macOS) in te drukken.

- **Geselecteerde tekst zoeken**: Als je tekst selecteert in de editor en Zoeken opent met de sneltoets, toont Zoeken je de zoekresultaten voor de geselecteerde tekst.
- **Recente zoektermen doorzoeken**: Open Zoeken met een lege zoekterm om recente zoektermen weer te geven. Klik op een ervan om de zoekterm opnieuw te gebruiken.

> [!info] Uitgesloten bestanden
> Bestanden die overeenkomen met je [[Instellingen#Uitgesloten bestanden|Uitgesloten bestanden]]-patronen verschijnen niet in zoekresultaten.

## Zoektermen

Een zoekterm is het woord of de zin die je invoert in het zoekveld. Leren hoe je effectief zoektermen schrijft kan je helpen snel te vinden wat je zoekt, zelfs in grote kluizen. Obsidian doorzoekt alleen de inhoud van notities en canvassen.

> [!tip]- Paden en bestandsnamen zoeken
> Standaard kun je alleen de paden en bestandsnamen van notities en canvassen doorzoeken. Om een pad of bestandsnaam van elk bestand in de kluis te zoeken, gebruik je de `path`- of `file`-operator.

Elk woord in de zoekterm wordt onafhankelijk gematcht binnen elk bestand. Om naar een exacte zin te zoeken, omring je deze met aanhalingstekens, bijvoorbeeld `"star wars"`. Om naar tekst met aanhalingstekens binnen een exacte zin te zoeken, kun je de aanhalingstekens _escapen_ door een backslash (`\`) voor het aanhalingsteken te plaatsen, bijvoorbeeld `"they said \"hello\" to each other"`.

Je kunt bepalen of bestanden worden geretourneerd die _alle_ woorden in je zoekterm bevatten, of _een_ van de woorden:

- `meeting work` retourneert bestanden die zowel `meeting` als `work` bevatten.
- `meeting OR work` retourneert bestanden die `meeting` of `work` bevatten.

Je kunt de twee zelfs combineren in dezelfde zoekterm.

- `meeting work OR meetup personal` retourneert bestanden voor werkvergaderingen en persoonlijke bijeenkomsten.

Je kunt haakjes gebruiken om de prioriteit van elke expressie te bepalen.

- `meeting (work OR meetup) personal` retourneert bestanden die `meeting`, `personal` en ofwel `work` of `meetup` bevatten.

Om een woord uit te sluiten, of te negeren, uit de zoekresultaten, voeg je een koppelteken (`-`) ervoor toe:

- `meeting -work` retourneert bestanden die `meeting` bevatten maar niet `work`.

Je kunt meerdere expressies uitsluiten:

- `meeting -work -meetup` retourneert bestanden die `meeting` bevatten maar niet `work` of `meetup`.

Je kunt een combinatie van expressies uitsluiten met behulp van haakjes:

- `meeting -(work meetup)` retourneert bestanden die `meeting` bevatten maar niet _zowel_ `work` als `meetup`.

Om resultaten te filteren met de kleiner-dan (`<`) en groter-dan (`>`) operatoren, omring je ze met vierkante haken (`[]`) of aanhalingstekens (`""`):

- `meeting [duration:<5]` retourneert bestanden waar meeting aanwezig is en duration kleiner is dan 5.
- `meeting [duration:>5]` retourneert bestanden waar meeting aanwezig is en duration groter is dan 5.

> [!tip]- Zoekterm uitleggen
> Als je een complexe zoekterm moet debuggen, kun je op **Zoekterm uitleggen** klikken in Zoeken voor een uitleg van je zoekterm.

## Zoekoperatoren

Zoekoperatoren maken fijnmazigere zoektermen mogelijk om je resultaten nog verder te filteren.

Sommige operatoren staan je zelfs toe om een geneste zoekterm toe te voegen binnen haakjes, bijvoorbeeld: `task:(call OR email)`.

| Zoekoperator    | Beschrijving                                                                                                                                                                                                                                                                                                       |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `file:`         | Zoek tekst in bestandsnaam. Matcht elk bestand in de kluis.<p/>Voorbeeld: `file:.jpg` of `file:202209`.                                                                                                                                                                                                            |
| `path:`         | Zoek tekst in bestandspad. Matcht elk bestand in de kluis.<p/>Voorbeeld: `path:"Daily notes/2022-07"`.                                                                                                                                                                                                             |
| `content:`      | Zoek tekst in bestandsinhoud.<p/>Voorbeeld: `content:"happy cat"`.                                                                                                                                                                                                                                                 |
| `match-case:`   | Hoofdlettergevoelig matchen.<p/>Voorbeeld: `match-case:HappyCat`.                                                                                                                                                                                                                                                  |
| `ignore-case:`  | Niet-hoofdlettergevoelig matchen.<p/>Voorbeeld: `ignore-case:ikea`.                                                                                                                                                                                                                                                |
| `tag:`          | Zoek tag in bestand.<p/>Voorbeeld: `tag:#work`.<p/>Houd er rekening mee dat zoeken naar `tag:#work` geen resultaten retourneert voor `#myjob/work`.<br /><br />**Opmerking**: Aangezien `tag:` overeenkomsten in codeblokken en in niet-Markdown-inhoud negeert, is het vaak sneller en nauwkeuriger dan een gewone volledige-tekstzoekopdracht naar `#work`. |
| `line:`         | Zoek bestanden die ten minste één regel bevatten die overeenkomt met `x`.<p/>Voorbeeld: `line:(mix flour)`.<p/><br>**Opmerking:** Het gebruik van `-line` negeert de zoekopdracht, wat betekent dat het bestanden vindt waar geen regel overeenkomt met `x`.                                                        |
| `block:`        | Zoek overeenkomsten in hetzelfde blok.<p/>Voorbeeld: `block:(dog cat)`.<p/>**Opmerking**: Aangezien `block:` vereist dat Zoeken de Markdown-inhoud in elk bestand parseert, kan het ervoor zorgen dat je zoekterm langer duurt om te voltooien.                                                                       |
| `section:`      | Zoek overeenkomsten in dezelfde sectie (tekst tussen twee koppen).<p/>Voorbeeld: `section:(dog cat)`.                                                                                                                                                                                                               |
| `task:`         | Zoek overeenkomsten in een [[Basis opmaaksyntaxis#Takenlijsten\|taak]] op blok-per-blok basis.<p/>Voorbeeld: `task:call`.                                                                                                                                                                                           |
| `task-todo:`    | Zoek overeenkomsten in een *onvoltooide* [[Basis opmaaksyntaxis#Takenlijsten\|taak]] op blok-per-blok basis.<p/>Voorbeeld: `task-todo:call`.                                                                                                                                                                        |
| `task-done:`    | Zoek overeenkomsten in een *voltooide* [[Basis opmaaksyntaxis#Takenlijsten\|taak]] op blok-per-blok basis.<p/>Voorbeeld: `task-done:call`.                                                                                                                                                                          |

## Eigenschappen doorzoeken

Je kunt gegevens die zijn opgeslagen in [[Eigenschappen]] gebruiken in je zoektermen.

Gebruik vierkante haken rond een eigenschapnaam `[eigenschap]` om bestanden met die eigenschap te retourneren:

- `[aliases]` retourneert bestanden die de eigenschap `aliases` bevatten

Gebruik vierkante haken en een dubbele punt `[eigenschap:waarde]` om bestanden met die eigenschap en waarde te retourneren:

- `[aliases:Name]` retourneert bestanden waarvan de waarde van de eigenschap `aliases` gelijk is aan `Name`

Gebruik `null` als waarde om eigenschappen te vinden die geen waarde hebben:

- `[aliases:null]` retourneert bestanden waar de eigenschap `aliases` bestaat maar geen waarde heeft

> [!info]+ Lege waarden
> De `null`-operator werkt wanneer een eigenschap leeg is (bijv. `aliases: `), maar niet wanneer de eigenschap lege aanhalingstekens (`""`) of lege haken (`[]`) bevat.

Zowel eigenschap als waarde ondersteunen sub-query's, zoals haakjes voor groepering, de `OR`-operator, dubbele aanhalingstekens voor exacte overeenkomsten en regex.

- `[status:Draft OR Published]` retourneert bestanden waarvan de waarde van de eigenschap `status` gelijk is aan `Draft` of `Published`

## Hoofdlettergevoeligheid wijzigen

Standaard zijn zoektermen niet hoofdlettergevoelig. Als je wilt zoeken op de exacte hoofdletters van je zoekterm, selecteer je **Hoofdletters moeten overeenkomen** ![[obsidian-icon-upper-lowercase.svg#icon]] in de zoekbalk.

Deze instelling kan worden omgeschakeld. Als het pictogram **Hoofdletters moeten overeenkomen** gemarkeerd is, betekent dit dat je momenteel een hoofdlettergevoelige zoekopdracht uitvoert.

## Sorteervolgorde van resultaten wijzigen

1. Voer een [[#Zoektermen|zoekterm]] in.
2. Selecteer onder het zoekveld de dropdown aan de rechterkant.
3. Selecteer de gewenste sorteervolgorde. Standaard is "Sorteer op bestandsnaam (A tot Z)".

De volgende opties zijn beschikbaar:

- Sorteer op bestandsnaam (A tot Z)
- Sorteer op bestandsnaam (Z tot A)
- Sorteer op recente wijziging (nieuw naar oud)
- Sorteer op recente wijziging (oud naar nieuw)
- Aangemaakt (nieuw naar oud)
- Aangemaakt (oud naar nieuw)

## Zoekresultaten kopiëren

1. Voer een [[#Zoektermen|zoekterm]] in.
2. Selecteer onder het zoekveld het pictogram met drie stippen naast het aantal resultaten.
3. Selecteer **Zoekresultaten kopiëren**.

## Reguliere expressies gebruiken

Een reguliere expressie is een reeks tekens die een tekstpatroon beschrijven. Om reguliere expressies in je zoekterm te gebruiken, omring je de expressie met schuine strepen (`/`).

- `/\d{4}-\d{2}-\d{2}/` matcht een ISO 8601-datum, zoals 2022-01-01.

Je kunt reguliere expressies zelfs combineren met zoekoperatoren:

- `path:/\d{4}-\d{2}-\d{2}/` retourneert bestanden met een datum in het bestandspad.

Voor meer informatie over het schrijven van reguliere expressies, raadpleeg FreeCodeCamp's [Practical Regex guide](https://www.freecodecamp.org/news/practical-regex-guide-with-real-life-examples/) of Mozilla's [Regular expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions).

> [!info]+ JavaScript-reguliere expressies
> Reguliere expressies bestaan in verschillende varianten die er anders uit kunnen zien. Obsidian gebruikt JavaScript-reguliere expressies.

## Zoekinstellingen configureren

Om Zoeken te configureren, selecteer je **Zoekinstellingen** ![[lucide-sliders-horizontal.svg#icon]] aan de rechterkant van de zoekbalk om de schakelaars te zien.

| Instelling                   | Beschrijving                                                                |
|------------------------------|-----------------------------------------------------------------------------|
| **Zoekterm uitleggen**       | Splitst de zoektermen op en legt ze uit in platte tekst.                    |
| **Resultaten samenvouwen**   | Schakelt in of de zoekcontext wordt weergegeven.                            |
| **Toon meer context**        | Breidt het zoekresultaat uit om meer tekst rond de overeenkomst te tonen.   |

## Zoekresultaten insluiten in een notitie

Om zoekresultaten in een notitie in te sluiten, voeg je een `query`-codeblok toe:

````
```query
embed OR search
```
````

[[Inleiding tot Obsidian Publish|Obsidian Publish]] ondersteunt geen ingesloten [[Publish-beperkingen#Zoeken|zoekresultaten]]. Om een live weergegeven voorbeeld te zien, gebruik je het codeblok hierboven in je kluis.

![[search-query-rendered.png]]
