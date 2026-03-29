---
permalink: plugins/format-converter
publish: true
mobile: true
description: 'Muodon muunnin on ydinlaajennus, jonka avulla voit muuntaa muiden sovellusten Markdown-muotoilun Obsidian-muotoon.'
---
Muotoilumuunnin on [[Sisäänrakennetut lisäosat|sisäänrakennettu lisäosa]], jonka avulla voit muuntaa muiden sovellusten Markdown-muotoilun Obsidian-muotoon. Sen avulla voit myös muuntaa tietyt [[Määreet]] uusiin vaadittuihin muotoihin.

> [!warning] Varoitus
> Muotoilumuunnin muuntaa koko holvisi asetustesi mukaisesti. [[Varmuuskopioi Obsidian-tiedostosi]] ennen muuntamisen suorittamista.

Kaikkien holvin muistiinpanojen muuntaminen:

1. Valitse [[Komentovalikko|komentovalikosta]] **Avaa muotoilumuunnin**. Tämä löytyy myös [[Nauha|nauhavalikosta]] **Avaa muotoilumuunnin** ![[lucide-binary.svg#icon]] -kuvakkeella.
2. Ota käyttöön muodot, jotka haluat muuntaa.
3. Napsauta **Aloita muuntaminen**.

Lisätietoja on sivulla [[Muotoilun perussyntaksi]].

## Tuetut muodot

### Roam Research

Muotoilumuunnin voi muuntaa seuraavan Roam Research -syntaksin:

- **Tunnisteet**: Muuntaa `#tag` ja `#[[tag]]` muotoon `[[tag]]`
- **Korostukset**: Muuntaa `^^highlight^^` muotoon `==highlight==`
- **TODO-kohdat**: Muuntaa `{{[[TODO]]}}` muotoon `[ ]`

### Bear

Muotoilumuunnin voi muuntaa seuraavan Bear-syntaksin:

- **Korostukset**: Muuntaa `::highlight::` muotoon `==highlight==`

### Zettelkasten

Muotoilumuunnin voi muuntaa seuraavan Zettelkasten-syntaksin:

- **Täydelliset linkit**: Muuntaa `[[UID]]` muotoon `[[UID File Name]]`
- **Kauniit linkit**: Muuntaa `[[UID]]` muotoon `[[UID File Name|File Name]]`

### [[Määreet]]

Obsidianin versiosta `1.9.3` alkaen muotoilumuunnin voi muuntaa [[Määreet#Vanhentuneet määreet|vanhentuneet määremuodot]] nykyiseen muotoon:

**Aliakset**

```yaml
# Ennen

alias: My Note Title

# Jälkeen

aliases:
  - My Note Title
```

**Tunnisteet**

```yaml
# Ennen

tag: project, important

# Jälkeen

tags:
  - project
  - important
```

**CSS-luokat**

```yaml
# Ennen

cssclass: custom-style

# Jälkeen

cssclasses:
  - custom-style
```
