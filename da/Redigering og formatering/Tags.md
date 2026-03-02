---
permalink: tags
---
Tags er nøgleord eller emneord, som kan hjælpe dig hurtigt til at finde de noter, du leder efter.

## Tilføj et tag til en note

Skriv en havelåge/et hashtag (`#`) tegn i editoren, efterfulgt af nøgleordet. Fx. `#møde`.

Du kan også tilføje tags ved at anvende standard [[Egenskaber|egenskaben]] `tags`. Tags i YAML skal formateres som en liste:

```yaml
---
tags:
  - opskrift
  - ingrediens
---
```

## Find noter ved hjælp af tags

Anvend `tag` [[Søg#Søgeoperatorer|søgeoperatoren]] for søge efter noter med det angivne nøgleord, fx. `tag:#møde`.

Du kan også søge efter tags i visningstilstand ved at klikke på dem i dine noter.

Vælg **Tagspanel: Vis tags** i [[Kommandopaletten|kommandopaletten]] og derefter det tag du søger efter, for at finde noter ved hjælp af [[Tagsvisning]] pluginnet.

## Indlejrede tags

Indlejrede tags definerer hierakier af nøgleord, som kan gøre det nemmere at finde og filtrere relaterede tags.

Opret indlejrede tags ved at tilføje en skråstreg (`/`) i navnet på tagget, fx. `#indbakke/ulæste` and `#indbakke/læst`.

Både [[Søg|søge]]- og [[Tagsvisning|tagsvisnings]]panelet understøtter indlejdrede tags.

## Tag formatet

Du kan benytte følgende tegn i dine tags:

- Alfabetiske bogstaver
- Heltal
- Understreg (`_`)
- Bindestreg (`-`)
- Skråstreg (`/`) for [[#Indlejrede tags]]

Tags skal indeholde mindst et ikke-nummerisk tegn, fx. er #1984 ikke et legalt tag, men #y1984 er.

Der tages ikke hensyn til store eller små bogstaver i tags. Fx. er #tag og #TAG identiske tags. 

> [!note] 
I [[Tagsvisning|Tagsvisnings]] panelet vil tags stå med samme brug af store og små bogstaver, som første gang det blev oprettet. 
> Fx. Hvis #Tag er defineret først og man derefter skriver #TAG, så vil #Tag blive vist.

Tags kan ikke indeholde mellemrum. Du kan i stedet for anvende fx. en af følgende formater:

- #camelCase
- #PascalCase
- #snake_case
- #kebab-case
