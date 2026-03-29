---
permalink: aliases
cssclasses:
  - soft-embed
---
Hvis du vil referere til en fil ved hjelp av forskjellige navn, kan du vurdere å legge til _aliaser_ i notatet. Et alias er et alternativt navn for et notat.

Bruk aliaser for ting som forkortelser, kallenavn, eller for å referere til et notat på et annet språk.

Hvis du bare prøver å endre hvordan en lenke ser ut på ett sted, se hvordan du kan [[Interne lenker#Endre visningsteksten for lenken|Endre visningsteksten for lenken]] i stedet.

![[Interne lenker#^callout-internal-links-link-text]]

## Legg til et alias i et notat

For å legge til et alias for et notat, legg til `aliases`-egenskapen i notatets [[Egenskaper]]. Aliaser bør alltid formateres som en liste i YAML.

```md
---
aliases:
  - Doggo
  - Woofer
  - Yapper
---

# Dog
```

## Lenke til et notat ved hjelp av et alias

For å lenke til et notat ved hjelp av et alias:

1. Begynn å skrive aliaset i en [[Interne lenker|intern lenke]]. Alle aliaser vises i listen over forslag, med et buet pil-ikon ved siden av.
2. Trykk `Enter` for å velge aliaset.

Obsidian oppretter lenken med aliaset som egendefinert visningstekst, for eksempel `[[Artificial Intelligence|AI]]`.

> [!note] Merk
> I stedet for å bare bruke aliaset som lenkedestinasjon (`[[AI]]`), bruker Obsidian lenkeformatet `[[Artificial Intelligence|AI]]` for å sikre interoperabilitet med andre applikasjoner som bruker wiki-lenkeformatet.

## Finn ulenkede omtaler for et alias

Ved å bruke [[Lenker tilbake]], kan du finne ulenkede omtaler av aliaser.

For eksempel, etter å ha satt "AI" som et alias for "Artificial intelligence", kan du se omtaler av "AI" i andre notater.

Hvis du lenker en ulenket omtale til et alias, gjør Obsidian omtalen om til en [[Interne lenker|intern lenke]] med aliaset som visningstekst.
