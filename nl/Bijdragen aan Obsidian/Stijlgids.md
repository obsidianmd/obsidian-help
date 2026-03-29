---
permalink: style-guide
publish: true
mobile: true
description: Deze pagina beschrijft de stijlgids voor het schrijven van onze ondersteuningsdocumentatie.
---
De Obsidian-documentatie volgt de stijlrichtlijnen op deze pagina. Deze richtlijnen zijn gebaseerd op best practices uit de branche, met name de [Google developer documentation style guide](<https://developers.google.com/style>) en [Microsoft Style Guide](https://learn.microsoft.com/en-us/style-guide/). Raadpleeg voor randgevallen die hieronder niet worden behandeld die externe handleidingen als secundaire referenties.

> [!tip]- Bijdragen
> Het grootste deel van de documentatie bestond al voordat deze stijlgids er was.
> 
> Als je overtredingen van deze stijlgids vindt, maak dan een [issue aan](https://github.com/obsidianmd/obsidian-docs/issues/new) en dien een pull request in bij [obsidianmd/obsidian-docs](https://github.com/obsidianmd/obsidian-docs).

## Terminologie en grammatica

### Taalstijl

Voor onze Engelstalige documentatie wordt aangeraden [Global English](https://docs.openedx.org/en/latest/documentors/references/doc_english_writing.html) te gebruiken om ons wereldwijde publiek beter te bedienen en te helpen met [[#Vertalingen]]. Dit betekent:

- Vermijd idiomen en cultuurgebonden uitdrukkingen
- Gebruik een actieve stijl en directe zinsbouw
- Geef de voorkeur aan eenvoudige, veelgebruikte woorden boven complexe terminologie
- Wees expliciet in plaats van impliciet
- Gebruik voor spellingconventies Amerikaans Engels (bijvoorbeeld 'organize' in plaats van 'organise').

### Termen

- Geef de voorkeur aan "sneltoets" boven "hotkey". Gebruik Hotkey wanneer je verwijst naar de specifieke functie.
- Geef de voorkeur aan "de Obsidian-app" op mobiel, en "de Obsidian-applicatie" op desktop.
- Geef de voorkeur aan "synchroniseren" boven "synchronisatie uitvoeren".
- Geef de voorkeur aan "zoekterm" boven "zoekopdracht".
- Geef de voorkeur aan "kop" boven "header" wanneer je verwijst naar tekst die een sectie inleidt.
- Geef de voorkeur aan "maximum" boven "max" en "minimum" boven "min".

### Productnamen

Obsidian-productnamen beginnen met "Obsidian", bijvoorbeeld "Obsidian Publish" en "Obsidian Sync".

Als een alinea te repetitief wordt, kun je in volgende verwijzingen de verkorte vorm gebruiken.

Bijvoorbeeld:

_Om apparaatspecifieke configuratie mogelijk te maken, synchroniseert Obsidian Sync zijn eigen instellingen niet. Je moet Sync configureren voor elk van je apparaten._

### UI en interacties

- Gebruik **vet** om knoptekst aan te duiden
- Geef de voorkeur aan "selecteer" boven "tik" of "klik".
	- Voor mobielspecifieke instructies is "tik" acceptabel bij het beschrijven van aanraakinteracties, aangezien "klik" niet beschikbaar is.
- Geef de voorkeur aan "zijbalk" boven "zij balk".
- Geef de voorkeur aan "uitvoeren" boven "aanroepen" wanneer je verwijst naar opdrachten of acties.

Wanneer je verwijst naar meerdere UI-interacties in een reeks, gebruik dan het →-symbool (U+2192). Bijvoorbeeld: "**[[Instellingen]] → Communityplug-ins**".

### Notities, bestanden en mappen

- Gebruik "notitie" wanneer je verwijst naar een Markdown-bestand in de kluis.
- Gebruik "bestand" wanneer je verwijst naar andere bestandsextensies dan Markdown.
- Geef de voorkeur aan "notitienaam" boven "notitietitel".
- Geef de voorkeur aan "actieve notitie" boven "huidige notitie".
- Geef de voorkeur aan "map" boven "directory".
- Geef de voorkeur aan "bestandstype" boven "bestandsformaat", tenzij je specifiek verwijst naar het gegevensformaat van de bestandsinhoud.

Gebruik bij het navigeren tussen notities "open" als de bestemming verborgen is, en "wissel" als zowel de bron- als bestemmingsnotitie geopend zijn in afzonderlijke vensters.

### Referentiedocumentatie voor instellingen

Waar mogelijk moeten instellingen binnen Obsidian worden gedocumenteerd met een beschrijvende tekst. Vermijd het documenteren van een specifieke instelling in Obsidian Help, tenzij:

- Er meer diepgaande kennis nodig is over hoe en wanneer je deze moet gebruiken.
- De instelling veelvuldig verkeerd wordt gebruikt of over wordt gevraagd.
- De instelling de gebruikerservaring _drastisch_ verandert.

Overweeg een tip-infoblok te gebruiken als je de aandacht wilt vestigen op een specifieke instelling.

### Richtingsaanduidingen

Gebruik een koppelteken bij richtingsaanduidingen wanneer ze als bijvoeglijk naamwoord worden gebruikt. Vermijd koppeltekens wanneer de richting als zelfstandig naamwoord wordt gebruikt.

**Aanbevolen:**

- Selecteer **[[Instellingen]]** in de hoek linksonder.
- Selecteer **[[Instellingen]]** linksonder.

**Niet aanbevolen:**

- Selecteer **[[Instellingen]]** in de hoek links onder.
- Selecteer **[[Instellingen]]** in de linksonder.

Geef de voorkeur aan "linksboven" en "rechtsboven" boven "links-boven" en "rechts-boven".

Geef geen richting aan wanneer je verwijst naar instellingen. De locatie van de instellingsknop hangt af van het apparaat.

**Aanbevolen:**

- Selecteer naast **Externe kluis kiezen** de optie **Kiezen**.

**Niet aanbevolen:**

- Selecteer rechts van **Externe kluis kiezen** de optie **Kiezen**.

Gebruik bij het beschrijven van verticale richting in UI-elementen "boven" en "onder" voor ruimtelijke relaties. Vermijd "omhoog" en "omlaag" omdat ze in verschillende contexten dubbelzinnig zijn.

**Aanbevolen:**

- Het zoekveld verschijnt boven de bestandslijst.
- Extra opties zijn hieronder beschikbaar.

**Niet aanbevolen:**

- Het zoekveld staat boven de bestandslijst omhoog.
- Meer opties staan verder naar beneden.

### Instructies

Gebruik gebiedende wijs voor de namen van handleidingen, sectiekoppen en stapsgewijze instructies. De gebiedende wijs is beknopt en actiegericht, wat duidelijker is voor gebruikers die instructies volgen.

- Geef de voorkeur aan "Instellen" boven "Het instellen van"
- Geef de voorkeur aan "Een bestand verplaatsen" boven "Het verplaatsen van een bestand"
- Geef de voorkeur aan "Je notities importeren" boven "Het importeren van je notities"

### Hoofdlettergebruik

Geef de voorkeur aan *zinsgewijze hoofdletters* boven *titelgewijze hoofdletters* voor koppen, knoppen en titels. Gebruik bij het verwijzen naar UI-elementen altijd dezelfde hoofdletters als in de UI.

**Aanbevolen:**

- Hoe Obsidian gegevens opslaat

**Niet aanbevolen:**

- Hoe Obsidian Gegevens Opslaat

### Voorbeelden

Geef de voorkeur aan realistische voorbeelden boven onzintermen.

**Aanbevolen:**

- `task:(bellen OR plannen)`

**Niet aanbevolen:**

- `task:(foo OR bar)`

### Toetsnamen en sneltoetsen

Gebruik consistente notatie wanneer je verwijst naar toetsenbordtoetsen en sneltoetsen.

**Individuele toetsnamen:**

Wanneer je verwijst naar een teken op het toetsenbord bij naam, voeg het teken dan tussen haakjes toe direct na de naam.

**Aanbevolen:**

- Druk op de koppeltekentoets (-) om een streepje toe te voegen.
- Gebruik het vraagteken (?) om te zoeken.

**Niet aanbevolen:**

- Druk op de koppeltekentoets om een streepje toe te voegen.
- Gebruik het ? om te zoeken.
- Voeg een `-` toe vóór het woord.

**Sneltoetsen:**

Gebruik geen spaties rond het plusteken bij sneltoetsen. Wanneer een sneltoets verschilt tussen besturingssystemen, vermeld dan beide.

**Aanbevolen:**

- Druk op `Ctrl+Z` (Windows) of `Command+Z` (macOS) om ongedaan te maken.
- Druk op `Escape` om dit venster te sluiten.
- Gebruik `Tab` om tussen velden te navigeren.

**Niet aanbevolen:**

- Druk op `Cmd+Z` om ongedaan te maken.
- Druk op `Ctrl + Z` (met spaties) om ongedaan te maken.
- Druk op `Ctrl/Cmd+Z` om ongedaan te maken.

Voor sneltoetsen die op alle platforms identiek zijn, hoef je het besturingssysteem niet te vermelden. Als je niet zeker weet of een sneltoets per platform verschilt, vermeld dan het besturingssysteem voor de zekerheid. Windows en Linux gebruiken doorgaans dezelfde sneltoetsen.

### Markdown

Gebruik lege regels tussen Markdown-blokken:

**Aanbevolen:**

```md
# Kop 1

Dit is een sectie.

1. Eerste item
2. Tweede item
3. Derde item
```

**Niet aanbevolen:**

```md
# Kop 1
Dit is een sectie.
1. Eerste item
2. Tweede item
3. Derde item
```

**Gedachtestreepjes in lijsten:**

Gebruik gedachtestreepjes (—) om vetgedrukte termen te scheiden van hun beschrijvingen in opsommingslijsten. Gebruik geen gedachtestreepjes in eenvoudige geneste opsommingslijsten met koppelingen.

**Aanbevolen:**

- **Weergavemenu** — maak weergaven aan, bewerk en wissel van weergave.
- **Waarden berekenen** — voeg prijzen toe, bereken totalen of voer wiskundige bewerkingen uit.

**Niet aanbevolen:**

- [[Een base aanmaken]] — Leer hoe je een basis aanmaakt en insluit.

### Afbeeldingen

Gebruik "**breedte** x **hoogte** pixels" voor het beschrijven van afbeeldings- of schermafmetingen.

**Voorbeeld:**

Aanbevolen afbeeldingsafmetingen: 1920 x 1080 pixels.

## Informatiestructuur

### Infobloktypen

Gebruik infoblokken strategisch om specifieke soorten informatie te benadrukken:

**Tip** (`[!tip]-`) - Praktisch advies of best practices die de werkstroom van de gebruiker verbeteren. Gebruik voor sneltoetsen, workarounds of niet-essentiële maar nuttige informatie. Deze infoblokken starten ingeklapt.

**Info** (`[!info]+`) - Aanvullende context, achtergrondinformatie of verduidelijkingen. Gebruik wanneer informatie begrip toevoegt maar niet nodig is om een taak te voltooien. Deze infoblokken starten uitgeklapt.

**Waarschuwing** (`[!warning]+`) - Belangrijke waarschuwingen die gegevensverlies, fouten of onbedoelde gevolgen voorkomen. Gebruik spaarzaam voor daadwerkelijk risicovolle situaties. Deze infoblokken mogen nooit ingeklapt zijn.

**Voorbeeld** (`[!example]-`) - Algemene kanttekeningen of aanvullende details. Gebruik voor zijdelingse informatie die sommige gebruikers relevant kunnen vinden. Deze infoblokken starten ingeklapt.

**Voorbeelden:**
```md
> [!tip]- Gebruik sneltoetsen
> Je kunt je werkstroom versnellen door de meestgebruikte sneltoetsen uit het hoofd te leren.

> [!info]+ Dit is een betaalde add-on
> Voor deze functie is een betaald abonnement vereist.

> [!warning]+ Deze actie kan niet ongedaan worden gemaakt
> Het verwijderen van een kluis is permanent. Overweeg eerst je notities te exporteren.

> [!example]- Geavanceerd gebruik
> Je kunt deze instelling ook configureren via het Grafiekmenu.
```

### Lijsten versus lopende tekst

Gebruik lijsten bij het presenteren van afzonderlijke items die geen sterke opeenvolgende of causale relaties hebben. Gebruik lopende tekst en alinea's wanneer items op elkaar voortbouwen, uitleg vereisen of baat hebben bij een verhalende opbouw.

**Gebruik een lijst voor:**
- Een reeks ongerelateerde functies
- Installatievereisten
- Configuratieopties
- Stappen voor probleemoplossing

**Gebruik lopende tekst voor:**
- Uitleg over hoe iets werkt
- Werkstromen met afhankelijkheden
- Conceptuele overzichten
- Richtlijnen die context vereisen

### Tabellen

Gebruik tabellen om functies, versies of gerelateerde gegevenspunten te vergelijken waarbij uitlijning het begrip bevordert. Vermijd tabellen voor eenvoudige lijsten of gegevens met één kolom.

**Goed gebruiksvoorbeeld:**

| Functie | Mobiel | Desktop |
|---------|--------|---------|
| Sync | Ja | Ja |
| Plug-ins | Nee | Ja |
| Thema's | Beperkt | Volledig |

### Kruisverwijzingen

Gebruik interne wiki-links (`[[Notitienaam]]`) ruimschoots om gebruikers te helpen navigeren naar gerelateerde onderwerpen. Vermijd echter overmatig linken:

- Link niet meerdere keren naar dezelfde term op één pagina
- Link alleen wanneer de verwezen pagina aanzienlijke aanvullende context biedt
- Gebruik beschrijvende linktekst wanneer dat nuttig is: `[[Notitienaam#Sectie|beschrijvende tekst]]`

**Voorbeeld:**

Eerste vermelding: "Lees meer over [[Introductie tot Obsidian Sync|Obsidian Sync]] om je kluis up-to-date te houden op al je apparaten."
Latere vermelding: "Je kunt Sync afzonderlijk configureren voor elk apparaat."

### Platformspecifieke inhoud

Wanneer je functies documenteert die per platform verschillen, gebruik dan sectiekoppen om de inhoud te organiseren.

Gebruik `Desktop` en `Mobiel` als subsectiekoppen om platformspecifieke instructies of functies te scheiden.

**Aanbevolen:**
```md
## De werkbalk aanpassen

### Desktop

In de desktopversie kun je de werkbalk als volgt aanpassen:

- Wijzig de volgorde van werkbalkacties door de pictogrammen te slepen en neer te zetten.
- Om specifieke acties te verbergen, klik met de rechtermuisknop op een lege ruimte en schakel de acties uit die je wilt verbergen.

### Mobiel

In de mobiele versie kun je de werkbalk aanpassen via de instellingen:

1. Open **[[Instellingen]]**.
2. Navigeer naar **Uiterlijk**.
3. Klik op **Beheren** onder **Lint configuratie**.
```

> [!info]+ Wanneer aparte secties aanmaken?
> Maak alleen aparte secties aan als de inhoud aanzienlijk verschilt. Als de instructies grotendeels hetzelfde zijn met kleine variaties, gebruik dan inline opmerkingen.

## Pictogrammen en afbeeldingen

Voeg pictogrammen en afbeeldingen toe wanneer ze het gemakkelijker maken om zaken uit te leggen die moeilijk met woorden te beschrijven zijn, of wanneer je belangrijke onderdelen van de Obsidian-applicatie wilt tonen. Je kunt afbeeldingen opslaan in de map `Attachments`.

- De afbeelding moet de bijbehorende tekst begrijpelijker maken.

 **Voorbeeld**: Eenmaal ingeschakeld maakt de plug-in [[Woordenaantal]] een nieuwe vermelding aan in je statusbalk onderaan.
 
![[Style-guide-zoomed-example.png#interface|300]]

- Afbeeldingen moeten in `.png`- of `.svg`-formaat zijn.
- Als een afbeelding te groot is in de notitie, maak deze dan kleiner buiten Obsidian, of pas de afmetingen aan zoals uitgelegd in [[Bestanden insluiten#Een afbeelding insluiten in een notitie|een afbeelding insluiten in een notitie]].
- In zeldzame gevallen kun je bijzonder grote of complexe afbeeldingen in een [[Bijschriften#Inklapbare infoblokken|ingeklapt infoblok]] plaatsen.
- Voor pop-upvensters of dialoogvensters moet de afbeelding het volledige Obsidian-applicatievenster tonen.
 ![[Style-guide-modal-example.png#interface]]

### Pictogrammen

[Lucide](https://lucide.dev/icons/)-pictogrammen en aangepaste Obsidian-pictogrammen kunnen naast gedetailleerde elementen worden gebruikt om een visuele weergave van een functie te bieden.

**Voorbeeld:** Selecteer in de werkbalk aan de linkerkant **Nieuw doek aanmaken** ![[lucide-layout-dashboard.svg#icon]] om een canvas aan te maken in dezelfde map als het actieve bestand.

**Richtlijnen voor pictogrammen**

- Sla pictogrammen op in de map `Attachments/icons`.
- Voeg het voorvoegsel `lucide-` toe vóór de Lucide-pictogramnaam.
- Voeg het voorvoegsel `obsidian-icon-` toe vóór de Obsidian-pictogramnaam.

**Voorbeeld:** Het pictogram voor het aanmaken van een nieuw canvas moet `lucide-layout-dashboard` worden genoemd.

- Gebruik de SVG-versie van de beschikbare pictogrammen.
- Pictogrammen moeten `18` pixels breed zijn, `18` pixels hoog, en een lijndikte van `1.5` hebben. Je kunt deze instellingen aanpassen in de SVG-gegevens.

> [!info]- Grootte en lijndikte aanpassen in een SVG
> ```html
> <svg xmlns="http://www.w3.org/2000/svg" width="WIDTH" height="HEIGHT" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="STROKE-WIDTH" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-layout-dashboard"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>
>```

- Gebruik het `icon`-anker in ingesloten afbeeldingen om de ruimte rond het pictogram aan te passen zodat het netjes uitgelijnd is met de omringende tekst.
- Pictogrammen moeten omgeven zijn door haakjes. ![[lucide-cog.svg#icon]]

**Voorbeeld**: `![[lucide-cog.svg#icon]]`

### Afbeeldingsankertags

Afbeeldingsankertags zijn beschikbaar om decoratieve wijzigingen toe te voegen aan ingesloten afbeeldingen.

> [!warning] Waarschuwing voor live voorbeeld
> De pictogramankertags worden niet correct weergegeven in **Live voorbeeld.** Gebruik **Leesweergave** om te bevestigen dat de ankertag is toegepast.

**Pictogram**

`![[lucide-menu.svg#icon]]`

De pictogramankertag zorgt voor correcte verticale uitlijning voor pictogrammen die worden gebruikt om interface-elementen aan te duiden.

Het eerste menupictogram gebruikt de ankertag ![[lucide-menu.svg#icon]], terwijl het tweede menupictogram ( ![[lucide-menu.svg]] ) dat niet doet.

**Interface**

`![[Vault picker.png#interface]]`

De interface-ankertag voegt een decoratieve schaduw toe rond de afbeelding. In de eerste afbeelding is de interface-ankertag toegepast.
![[Vault picker.png#interface]]
De tweede afbeelding heeft daarentegen geen interface-anker toegepast.

![[Vault picker.png]]

**Omtrek**

`![[Backlinks.png#outline]]`

De omtrekankertag voegt een subtiele rand toe rond de afbeelding. In de eerste afbeelding is de omtrekankertag toegepast.

> [!tip] Let op de linkerbenedenhoek van de afbeelding om het verschil te zien.

![[Backlinks.png#outline]]

De tweede afbeelding heeft geen omtrekankertag.

![[Backlinks.png]]

### Optimalisatie

Afbeeldingen vertragen de laadtijd van de pagina en nemen waardevolle [[Inleiding tot Obsidian Publish|Publish]]-opslagruimte in beslag. Het optimaliseren van afbeeldingen maakt verkleining van de bestandsgrootte mogelijk, maar behoudt de visuele integriteit van de afbeelding.

Zowel afbeeldingen als pictogrammen moeten worden geoptimaliseerd.

> [!info] Hulpmiddelen voor het optimaliseren van afbeeldingen
> Hier zijn enkele aanbevolen programma's voor het verkleinen van je afbeeldingen.
> - **Windows:** [FileOptimizer](https://sourceforge.net/projects/nikkhokkho/)
> - **macOS:** [ImageOptim](https://imageoptim.com/)
> - **Linux/Unix** [Trimage](https://trimage.org)
> 
> We raden een optimalisatiegraad van 65-75% aan.

## Lay-out

### Gebroken koppelingen

Controleer voordat je je Pull Request indient of er gebroken koppelingen in de documentatie van de vertaling waar je aan werkt, en corrigeer deze. Gebroken koppelingen kunnen na verloop van tijd vanzelf ontstaan, dus het verifiëren van hun juistheid helpt de kwaliteit van de documentatie te behouden.

Je kunt gebroken koppelingen controleren met [[Communityplug-ins]] of hulpmiddelen die beschikbaar zijn in je IDE.

### Beschrijvingen

Deze documentatie wordt bewerkt op GitHub en online gehost via [[Inleiding tot Obsidian Publish|Obsidian Publish]], dat [[Linkvoorbeelden op sociale media#Beschrijving|beschrijvingen]] bevat voor sociale kaarten en andere [[SEO]]-elementen.

Als de pagina waar je aan werkt geen `description`-[[Eigenschappen|eigenschap]] heeft, voeg er dan een toe. De beschrijving moet 150 tekens of minder zijn en een objectieve samenvatting van de pagina-inhoud bieden.

**Goed**: Leer sjablonen te maken die automatisch metadata van webpagina's vastleggen en ordenen met Web Clipper.
**Kan beter**: Leer hoe je sjablonen maakt die automatisch metadata van webpagina's vastleggen en ordenen met Web Clipper.

### Richtingen

Wanneer je [[#Instructies]] schrijft of herschrijft over het uitvoeren van een actie binnen de app, zorg er dan voor dat je stappen opneemt voor zowel de mobiele als de desktopversie.

Als je geen toegang hebt tot een mobiel of desktopapparaat, vermeld dit dan bij het indienen van je Pull Request.

## Vertalingen

Vertaal de volledige inhoud bij het afronden van een vertaling. Dit omvat onder andere:

- Notitienamen
- Mapnamen
- Aliassen
- Bijlagenamen
- Alternatieve linktekst
