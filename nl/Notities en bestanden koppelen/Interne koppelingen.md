---
permalink: links
cssclasses:
  - soft-embed
publish: true
mobile: true
description: 'Leer hoe je vanuit je notities naar notities, bijlagen en andere bestanden kunt linken met behulp van interne links.'
---
Leer hoe je vanuit je notities kunt koppelen naar notities, bijlagen en andere bestanden met behulp van _interne koppelingen_. Door notities te koppelen kun je een netwerk van kennis opbouwen. ^b15695

Obsidian kan automatisch interne koppelingen in je kluis bijwerken wanneer je een bestand hernoemt. Als je liever eerst een bevestiging krijgt, kun je dit uitschakelen onder:

**[[Instellingen]]** → **[[Instellingen#Bestanden & Links|Bestanden & Links]]** → **[[Instellingen#Altijd interne links bijwerken|Altijd interne links bijwerken]]**.

## Ondersteunde formaten voor interne koppelingen

Obsidian ondersteunt de volgende koppelingsformaten:

- Wiki-link: `[[Three laws of motion]]` of `[[Three laws of motion.md]]`
- Markdown: `[Three laws of motion](Three%20laws%20of%20motion)` of `[Three laws of motion](Three%20laws%20of%20motion.md)`

De bovenstaande voorbeelden zijn equivalent en ze zien er hetzelfde uit in de editor en verwijzen naar dezelfde notitie.

> [!note] Opmerking
> Wanneer je het Markdown-formaat gebruikt, zorg er dan voor dat je de koppelingsbestemming [URL-codeert](https://en.wikipedia.org/wiki/Percent-encoding). Spaties worden bijvoorbeeld `%20`.

Standaard genereert Obsidian koppelingen in het wiki-link-formaat vanwege het compactere formaat. Als interoperabiliteit belangrijk voor je is, kun je wiki-links uitschakelen en in plaats daarvan Markdown-koppelingen gebruiken.

Om het Markdown-formaat te gebruiken:

1. Open **[[Instellingen]]**.
2. Schakel onder **Bestanden & Links** de optie **Gebruik \[\[Wikilinks\]\]** uit.

Zelfs als je het wiki-link-formaat uitschakelt, kun je koppelingen nog steeds automatisch aanvullen door twee vierkante haken `[[` te typen. Wanneer je een van de voorgestelde bestanden selecteert, genereert Obsidian in plaats daarvan een Markdown-koppeling.

> [!note] Ongeldige tekens
> Een tekenreeks die de volgende tekens bevat, werkt mogelijk niet als koppeling: `# | ^ : %% [[ ]]`.
> 
> We raden aan deze tekens te vermijden en [veilige bestandsnaamconventies](https://stackoverflow.com/questions/1976007/what-characters-are-forbidden-in-windows-and-linux-directory-names) te hanteren.

## Koppelen naar een bestand

Om een koppeling te maken in de bewerkingsweergave, gebruik je een van de volgende manieren:

- Typ `[[` in de editor en selecteer vervolgens het bestand waarnaar je een koppeling wilt maken.
- Selecteer tekst in de editor en typ vervolgens `[[`.
- Open het [[Opdrachtenpaneel]] en selecteer vervolgens Voeg interne link toe.

![[Snel wisselen#^search-autocomplete-large]]

Hoewel je naar elk van de [[Geaccepteerde bestandsformaten]] kunt koppelen, moeten koppelingen naar andere bestandsformaten dan Markdown een bestandsextensie bevatten, zoals `[[Figuur 1.png]]`.

> [!tip] Door een interne koppeling vooraf te laten gaan door een uitroepteken (!) kun je de gekoppelde inhoud insluiten. Zie [[Bestanden insluiten]] voor meer informatie.

> [!info] Uitgesloten bestanden
> Bestanden die overeenkomen met je [[Instellingen#Uitgesloten bestanden|Uitgesloten bestanden]]-patronen krijgen een lagere prioriteit in koppelingsuggesties bij het aanmaken van interne koppelingen.

## Koppelen naar een kop in een notitie

Je kunt koppelen naar specifieke koppen in notities, ook wel _ankerkoppelingen_ genoemd.

**Koppelen naar een kop binnen dezelfde notitie**

Om naar een kop binnen dezelfde notitie te koppelen, typ je `[[#` om een lijst van koppen in de notitie te krijgen waarnaar je kunt koppelen.

Bijvoorbeeld, `[[#Een gekoppeld bestand voorbekijken]]` maakt een koppeling naar [[#Een gekoppeld bestand voorbekijken]].

**Koppelen naar een kop in een andere notitie**

Om naar een kop in een andere notitie te koppelen, voeg je een hekje (`#`) toe aan het einde van de koppelingsbestemming, gevolgd door de koptekst.

Bijvoorbeeld, `[[Over Obsidian#Koppelingen zijn eersteklas burgers]]` maakt een koppeling naar [[Over Obsidian#Koppelingen zijn eersteklas burgers]].

**Koppelen naar subkoppen**

Je kunt meerdere hekjes toevoegen voor elke subkop.

Bijvoorbeeld, `[[Hulp en ondersteuning#Questions and advice#Report bugs and request features]]` maakt een koppeling naar [[Hulp en ondersteuning#Questions and advice#Report bugs and request features]].

**Zoeken naar koppen door de hele kluis**

Om naar koppen door de hele kluis te zoeken, gebruik je de `[[## kop]]`-syntaxis.

Bijvoorbeeld, `[[##` zoekt generiek door de hele kluis, terwijl `[[## team]]` zoekt naar alle koppen die het woord _team_ bevatten.

> [!info]- Schermafbeelding van het zoeken naar een kopkoppeling
>
> ![[internal-links-header.png#interface]]

## Koppelen naar een blok in een notitie

Een blok is een eenheid tekst in je notitie, zoals een alinea, blokcitaat of lijstitem.

Je kunt naar een blok koppelen door `#^` toe te voegen aan het einde van je koppelingsbestemming, gevolgd door een unieke blok-ID. Bijvoorbeeld: `[[2023-01-01#^37066d]]`. Gelukkig hoef je de ID niet handmatig te vinden — wanneer je het dakje (`^`) typt, verschijnt er een lijst met suggesties waarmee je het juiste blok kunt selecteren.

Voor *gewone alinea's* plaats je een spatie gevolgd door een dakje `^` en de blok-ID aan het einde van de regel:

```md
The quick purple gem dashes through the paragraph with blazing speed. Pen in hand and a paperclip in the other, Gemmy works toward her goal of making the world of note-taking a happier place. ^37066d
```

Voor *gestructureerde blokken* (lijsten, citaten, infoblokken, tabellen) moet de blok-ID op een aparte regel staan, met een lege regel ervoor en erna:

```md
> The quick purple gem dashes through the paragraph with blazing speed. Pen in hand and a paperclip in the other, Gemmy works toward her goal of making the world of note-taking a happier place.

^37066f

This is the tale of Gemmy, the Unhelpful assistant.  
```

Voor *specifieke regels binnen een lijst* kan de blok-ID direct op een opsommingsteken worden geplaatst:

```mathjax
- Gemmy
    $$Paperclip / Pen$$ 
    ^37006f
- Unhelpful assistant
```

> [!warning] We ondersteunen geen koppelingen naar specifieke delen van citaten, infoblokken en tabellen.

**Zoeken naar blokken door de hele kluis**

Je kunt ook naar blokken zoeken om naar te koppelen vanuit je hele kluis met de `[[^^blok]]`-syntaxis. Er komen echter meer items in aanmerking als blokken in vergelijking met [[#Koppelen naar een kop in een notitie|kopkoppelingen]], dus deze lijst zal veel langer zijn.

> [!info]- Schermafbeelding van het zoeken naar een blokkoppeling
> ![[link-block-heading.png#interface]]

Je kunt ook leesbare blok-ID's maken door een spatie toe te voegen gevolgd door een dakje (`^`) en de ID. Blok-ID's kunnen alleen bestaan uit Latijnse letters, cijfers en streepjes.

Voeg bijvoorbeeld `^quote-of-the-day` toe aan het einde van een blok:

```md
"You do not rise to the level of your goals. You fall to the level of your systems." by James Clear ^quote-of-the-day
```

Nu kun je naar het blok koppelen door `[[2023-01-01#^quote-of-the-day]]` te typen.

> [!warning] Interoperabiliteit
> Blokverwijzingen zijn specifiek voor Obsidian en maken geen deel uit van het standaard Markdown-formaat. Koppelingen die blokverwijzingen bevatten werken niet buiten Obsidian.

## De weergavetekst van een koppeling wijzigen

Standaard toont Obsidian de koppelingstekst zoals deze verschijnt. Bijvoorbeeld:
- `[[Voorbeeld]]` wordt weergegeven als [[Voorbeeld]]
- `[[Voorbeeld#Details]]` wordt weergegeven als [[Voorbeeld#Details]]

Je kunt wijzigen hoe een koppeling wordt weergegeven door de weergavetekst aan te passen:

**Wiki-link-formaat**:
Gebruik een verticale streep (`|`) om de weergavetekst te wijzigen.

- `[[Voorbeeld|Aangepaste naam]]` verschijnt als [[Voorbeeld|Aangepaste naam]]
- `[[Voorbeeld#Details|Sectienaam]]` verschijnt als [[Voorbeeld#Details|Sectienaam]]

**Markdown-formaat**:
Gebruik `[Weergavetekst](Koppeling-URL)` om aan te passen hoe de koppeling verschijnt.

- `[Aangepaste naam](Voorbeeld.md)` verschijnt als [Aangepaste naam](Voorbeeld.md)
- `[Sectienaam](Voorbeeld.md#Details)` verschijnt als [Sectienaam](Voorbeeld.md#Details)

Deze methode is handig voor eenmalige situaties waarin je wilt wijzigen hoe een koppeling er in een specifieke context uitziet. Als je een alternatieve koppelingsnaam wilt instellen die je door je hele kluis kunt hergebruiken, overweeg dan in plaats daarvan een [[Aliassen|alias]] te gebruiken.

Als je bijvoorbeeld regelmatig verwijst naar `[[Three laws of motion]]` als `[[The 3 laws]]`, kun je "3 laws" als alias toevoegen, zodat je alleen dat hoeft te typen — zonder elke keer aangepaste weergavetekst toe te voegen.

> [!tip] Tip
> Gebruik [[#De weergavetekst van een koppeling wijzigen|weergavetekst voor koppelingen]] wanneer je wilt aanpassen hoe een koppeling eruitziet *op een specifieke plek*.
> 
> Gebruik [[Aliassen|aliassen]] wanneer je naar dezelfde notitie wilt verwijzen met *verschillende namen* door je hele kluis.
^callout-internal-links-link-text

## Een gekoppeld bestand voorbekijken

> [!note] Opmerking
> Om gekoppelde bestanden voor te bekijken, moet je eerst [[Paginavoorbeeld]] inschakelen.

Om een gekoppeld bestand voor te bekijken, zweef je over een interne koppeling. In de bewerkingsmodus houd je `Ctrl` (of `Cmd` op macOS) ingedrukt terwijl je de cursor over de koppeling beweegt. Een voorbeeld van de bestandsinhoud verschijnt naast de cursor.
