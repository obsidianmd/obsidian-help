---
permalink: plugins/templates
cssclasses:
  - soft-embed
publish: true
mobile: true
description: Sjablonen is een kernplug-in waarmee je vooraf gedefinieerde tekstfragmenten in je actieve notitie kunt invoegen.
---
Sjablonen is een [[Ingebouwde plug-ins|kernplug-in]] waarmee je vooraf gedefinieerde tekst-snippets kunt invoegen in je actieve notitie.

## Je sjabloonmap instellen

1. Klik linksonder op **[[Instellingen]]** ![[lucide-cog.svg#icon]].
2. Voer onder **Ingebouwde plug-ins → Sjablonen → Sjabloonmaplocatie** de map in die je sjablonen bevat.

## Sjabloonvariabelen

Je kunt dynamische informatie toevoegen aan je sjablonen met behulp van _sjabloonvariabelen_. Wanneer je een sjabloon invoegt dat een sjabloonvariabele bevat, vervangt Sjablonen deze door de bijbehorende waarde.

| Variabele   | Beschrijving                                                |
|-------------|-------------------------------------------------------------|
| `{{title}}` | Titel van de actieve notitie.                               |
| `{{date}}`  | De datum van vandaag. **Standaardindeling:** `YYYY-MM-DD`.  |
| `{{time}}`  | De huidige tijd. **Standaardindeling:** `HH:mm`.            |

Zowel `{{date}}` als `{{time}}` stellen je in staat om de standaardindeling te wijzigen met een _indelingsreeks_.

Om een indelingsreeks in te stellen, voeg je een dubbele punt (`:`) toe gevolgd door een reeks [Moment.js-indelingstokens](https://momentjs.com/docs/#/displaying/format/), bijvoorbeeld `{{date:YYYY-MM-DD}}`.

Je kunt `{{date}}` en `{{time}}` onderling uitwisselen met indelingsreeksen, bijvoorbeeld `{{time:YYYY-MM-DD}}`.

Je kunt de standaard datum- en tijdsindeling wijzigen onder **[[Instellingen]] → Sjablonen → Datumindeling** en **[[Instellingen]] → Sjablonen → Tijdsindeling**. ^template-settings-date-time-formatting

> [!tip] Tip
> Je kunt de sjabloonvariabelen `{{date}}` en `{{time}}` ook gebruiken in de plug-ins [[Dagnotities]] en [[Uniekenotitiesmaker]].

## Een sjabloon aanmaken

Maak in de [[#Je sjabloonmap instellen|sjabloonmap]] [[Notities beheren#Een nieuwe notitie aanmaken|een notitie aan]] met de tekst die je wilt laten verschijnen wanneer je het sjabloon gebruikt. Je kunt [[#Sjabloonvariabelen|sjabloonvariabelen]] gebruiken voor dynamische tekst zoals de huidige datum.

Hier is bijvoorbeeld een sjabloon voor studienotities:

```markdown
---
topic: 
date: "{{date}}"
course: 
tags:
  - studies
---

# {{title}}

## Kernconcepten


## Belangrijke details


## Voorbeelden


## Vragen
- 

## Samenvatting


## Gerelateerde onderwerpen
- [[]]
```

## Een sjabloon invoegen in de actieve notitie

**Belangrijk:** Om een sjabloon in te voegen, moet je eerst [[#Je sjabloonmap instellen]].

1. Klik in de werkbalk op **Sjabloon invoegen**.
2. Selecteer het sjabloon dat je wilt invoegen op de cursorpositie in de actieve notitie.

Om een sjabloon in te voegen met het [[Opdrachtenpaneel]] of [[Sneltoetsen#Een sneltoets instellen|een aangepaste sneltoets]], gebruik je de opdracht `Sjablonen: Sjabloon invoegen`.

De inhoud van het sjabloon wordt ingevoegd op je huidige cursorpositie. Als je cursor zich niet in de notitietekst bevindt, wordt de inhoud ingevoegd op je laatste cursorpositie.

### Sjablooneigenschappen

![[Eigenschappen#^templates-properties]]

## Huidige datum en tijd invoegen in de actieve notitie

Gebruik de opdrachten `Sjablonen: Voeg huidige datum in` en `Sjablonen: Voeg huidige tijd in` om de huidige datum en tijd in te voegen op je huidige cursorpositie. Net als de opdracht `Sjabloon invoegen` kan dit worden gedaan met het [[Opdrachtenpaneel]] of [[Sneltoetsen#Een sneltoets instellen|een aangepaste sneltoets]].

De ingevoegde datum en tijd gebruiken de [[#^template-settings-date-time-formatting|indeling die is ingesteld in de plug-ininstellingen]].
