---
permalink: html
publish: true
mobile: true
description: 'Leer hoe je HTML kunt gebruiken in Obsidian, inclusief beperkingen bij Markdown-rendering en vereisten voor HTML-blokken.'
---
Obsidian ondersteunt HTML om je notities weer te geven zoals jij dat wilt, of zelfs [[Webpagina's insluiten|webpagina's in te sluiten]]. Het toestaan van HTML in je notities brengt risico's met zich mee. Om te voorkomen dat kwaadaardige code schade aanricht, *zuivert* Obsidian alle HTML in je notities.

> [!example] 
> Het `<script>`-element laat normaal gesproken JavaScript uitvoeren wanneer het wordt geladen. Als Obsidian HTML niet zou zuiveren, zou een aanvaller je kunnen overtuigen om tekst te plakken die JavaScript bevat dat gevoelige informatie van je computer haalt en naar hen terugstuurt.

Dat gezegd hebbende, omdat Markdown-syntaxis niet alle vormen van opmaak ondersteunt, kan het gebruik van gezuiverde HTML nog een andere manier zijn om de kwaliteit van je notities te verbeteren. We hebben een aantal veelvoorkomende toepassingen van HTML opgenomen.

## HTML-beperkingen

Obsidian heeft specifieke beperkingen bij het gebruik van HTML in je notities:

### Geen Markdown in HTML

Obsidian rendert geen Markdown-syntaxis binnen HTML-elementen. Dit is een bewuste ontwerpkeuze voor prestatie-optimalisatie en om de complexiteit van de parser laag te houden bij het beheren van grote documenten.

Dit werkt bijvoorbeeld niet zoals verwacht:

```md
<div>
Dit **wordt niet** vetgedrukt en dit `wordt geen` code.
</div>
```

### HTML-blokken moeten op zichzelf staan

HTML-blokken moeten volledig zijn en mogen geen lege regels bevatten. Lege regels zullen het HTML-blok onderbreken.

Dit werkt:

```md
<table>
<tr>
<td>Inhoud hier</td>
</tr>
</table>
```

Dit werkt niet correct:

```md
<table>

<tr>

<td>Inhoud hier</td>

</tr>

</table>
```

### Wanneer Markdown lijkt te werken in HTML

Sommige inline HTML-tags zoals `<span>` of `<a>` hebben beperkte functionaliteit en lijken Markdown te renderen, maar dat is niet wat er daadwerkelijk gebeurt. De Markdown wordt buiten de HTML-context verwerkt.

Zie [[Obsidian Flavored Markdown]] voor meer details over hoe Obsidian Markdown verwerkt.

## Veelvoorkomend HTML-gebruik

> [!info] Meer details over het gebruik van `<iframe>` zijn te vinden in [[Webpagina's insluiten]].

### Opmerkingen

[[Basis opmaaksyntaxis#Opmerkingen|Markdown-opmerkingen]] zijn de voorkeursmethode om verborgen opmerkingen aan je notities toe te voegen. Sommige methoden om Markdown-notities te converteren, zoals [Pandoc](https://pandoc.org), hebben echter beperkte ondersteuning voor Markdown-opmerkingen. In die gevallen kun je in plaats daarvan `<!-- HTML-opmerking -->` gebruiken!

### Onderstrepen

Als je snel een item in je notities wilt onderstrepen, kun je `<u>Voorbeeld</u>` gebruiken om <u>je onderstreepte tekst</u> te maken.

### Span/Div

Span- en div-tags kunnen worden gebruikt om aangepaste klassen uit een [[CSS-fragmenten|CSS-fragment]], of aangepast gedefinieerde opmaak, toe te passen op een geselecteerd tekstgebied. Bijvoorbeeld, met `<span style="font-family: cursive">je tekst</span>` kun je snel <span style="font-family: cursive">je lettertype wijzigen</span>.

## Doorhalen

Wil je <s>wat tekst</s> doorhalen? Gebruik `<s>dit</s>` om het door te strepen.
