---
permalink: tags
---
Labels zijn trefwoorden of onderwerpen waarmee je snel de gewenste notities kunt vinden.

## Een label aan een notitie toevoegen

Om een label aan te maken, typ je een hekje (`#`) in de editor, gevolgd door een trefwoord. Bijvoorbeeld `#vergadering`.

Je kunt ook labels toevoegen met behulp van de `tags` [[Eigenschappen|eigenschap]]. Labels in YAML moeten altijd als lijst worden opgemaakt:

```yaml
---
tags:
  - recept
  - koken
---
```

## Notities zoeken met labels

Om notities te vinden met de [[Zoeken]]-plug-in, gebruik je de `tag` [[Zoeken#Zoekoperatoren|zoekoperator]] in je zoekterm, bijvoorbeeld `tag:#vergadering`.

Je kunt ook naar labels zoeken door erop te klikken in je notities.

Om notities te vinden met de [[Labelvenster|Labelvenster]]-plug-in, selecteer je **Labels: Toon label venster** in het [[Opdrachtenpaneel]] en selecteer je vervolgens het label waarnaar je wilt zoeken.

## Geneste labels

Geneste labels definiëren labelhiërarchieën die het gemakkelijker maken om gerelateerde labels te vinden en te filteren.

Maak geneste labels door schuine strepen (`/`) te gebruiken in de labelnaam, bijvoorbeeld `#inbox/te-lezen` en `#inbox/verwerken`.

- In [[Zoeken]] komt `tag:inbox` overeen met `#inbox` en alle geneste labels zoals `#inbox/te-lezen`.
- In het [[Labelvenster]] worden geneste labels weergegeven als behorend bij hun bovenliggend label.
- In [[Introductie tot Bases|Bases]] worden geneste labels herkend door de [[Functies#hasTag|`hasTag`]]-functie, dus `file.hasTag("a")` komt overeen met zowel `#a` als `#a/b`.

## Labelformaat

Je kunt de volgende tekens gebruiken in je labels:

- Alfabetische letters
- Cijfers
- Onderstrepingsteken (`_`)
- Koppelteken (`-`)
- Schuine streep (`/`) voor [[#Geneste labels]]
- Algemeen geaccepteerde Unicode-tekens, inclusief emoji's en andere symbolen

Labels moeten ten minste één niet-numeriek teken bevatten. Bijvoorbeeld, #1984 is geen geldig label, maar #j1984 wel.

Labels zijn niet hoofdlettergevoelig. Bijvoorbeeld, #label en #LABEL worden als identiek behandeld.

> [!note]
> Labels worden weergegeven met de hoofdletters waarmee ze voor het eerst zijn aangemaakt in het [[Labelvenster]].
> Als je bijvoorbeeld #Label aanmaakt en daarna #LABEL, wordt voor beide #Label weergegeven.

Labels mogen geen spaties bevatten. Om twee of meer woorden te scheiden, kun je in plaats daarvan de volgende formaten gebruiken:

- #camelCase
- #PascalCase
- #snake_case
- #kebab-case
