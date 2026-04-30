---
permalink: web-clipper/templates
description: Leer sjablonen te maken die automatisch metadata van webpagina's vastleggen en organiseren met Web Clipper.
---
[[Introductie tot Obsidian Web Clipper|Web Clipper]] stelt je in staat om sjablonen te maken die automatisch metadata van webpagina's vastleggen en organiseren. Voorbeeldsjablonen zijn beschikbaar in de [clipper-templates repo](https://github.com/kepano/clipper-templates).

## Een sjabloon aanmaken of bewerken

Om een sjabloon **aan te maken**, ga je naar de Web Clipper-instellingen en klik je op de knop **Nieuw sjabloon** in de zijbalk. Je kunt ook een sjabloon **dupliceren** via het menu **Meer** in de rechterbovenhoek.

Om een sjabloon te **bewerken**, kies je een sjabloon uit de zijbalk. Je wijzigingen worden automatisch opgeslagen.

Sjablonen maken gebruik van [[Variabelen]] en [[Filters]], waarmee je kunt aanpassen hoe inhoud wordt opgeslagen.

## Web Clipper-sjablonen importeren en exporteren

Om een sjabloon te importeren:

1. Open de extensie en klik op het tandwielpictogram **[[Instellingen]]**.
2. Ga naar een willekeurig sjabloon in de lijst.
3. Klik op **Importeren** rechtsboven of sleep je `.json`-sjabloonbestand(en) naar het sjabloongebied.

Om een sjabloon te exporteren, klik je op **Exporteren** rechtsboven. Dit downloadt het `.json`-sjabloonbestand. Je kunt de sjabloongegevens ook naar je klembord kopiëren via het menu **Meer**.

## Sjablooninstellingen

### Gedrag

Definieer hoe inhoud van Web Clipper aan Obsidian wordt toegevoegd:

- **Nieuwe notitie aanmaken**
- **Toevoegen aan een bestaande notitie**, boven- of onderaan
- **Toevoegen aan dagelijkse notitie**, boven- of onderaan (vereist dat de plug-in [[Dagnotities]] actief is)

### Automatisch een sjabloon activeren

Sjabloontriggers stellen je in staat om automatisch een sjabloon te selecteren op basis van de huidige pagina-URL of [schema.org](https://schema.org/)-gegevens. Je kunt meerdere regels per sjabloon definiëren, gescheiden door een nieuwe regel.

De eerste overeenkomst in je sjabloonlijst bepaalt welk sjabloon wordt gebruikt. Je kunt sjablonen omhoog en omlaag slepen in de Web Clipper-instellingen om de volgorde te wijzigen waarin sjablonen worden gematcht.

#### Eenvoudige URL-matching

Eenvoudige matching activeert een sjabloon als de huidige pagina-URL *begint met* het opgegeven patroon. Bijvoorbeeld:

- `https://obsidian.md` matcht elke URL die met deze tekst begint.

#### Reguliere-expressiematching

Je kunt sjablonen activeren op basis van complexere URL-patronen met behulp van reguliere expressies. Omsluit je regex-patroon met schuine strepen (`/`). Vergeet niet om speciale tekens in regex-patronen (zoals `.` en `/`) te escapen met een backslash (`\`). Bijvoorbeeld:

- `/^https:\/\/www\.imdb\.com\/title\/tt\d+\/reference\/?$/` matcht elke IMDB-referentiepagina.

#### Schema.org-matching

Je kunt sjablonen activeren op basis van [schema.org](https://schema.org/)-gegevens die op de pagina aanwezig zijn. Gebruik het voorvoegsel `schema:` gevolgd door de schemasleutel die je wilt matchen. Je kunt optioneel een verwachte waarde opgeven. Bijvoorbeeld:

- `schema:@Recipe` matcht pagina's waarvan het schematype "Recipe" is.
- `schema:@Recipe.name` matcht pagina's waar `@Recipe.name` aanwezig is.
- `schema:@Recipe.name=Cookie` matcht pagina's waar `@Recipe.name` "Cookie" is.

Schema.org-waarden kunnen ook worden gebruikt om [[Variabelen#Schema.org-variabelen|gegevens vooraf in te vullen in sjablonen]].

### Interpreter context

Wanneer [[Webpagina's interpreteren|Interpreter]] is ingeschakeld, kun je [[Variabelen#Promptvariabelen|promptvariabelen]] gebruiken om pagina-inhoud te extraheren met natuurlijke taal. Voor elk sjabloon kun je de [[Webpagina's interpreteren#Context|context]] definiëren waartoe Interpreter toegang heeft.
