---
aliases: alias, aliaser, Tilføj alias til note
---

Hvis du vil referere til en fil under et andet navn, så overvej at tilføje _aliaser_ til noten. Et alias er et alternativt navn for en note.

Brug aliaser til akronymer (Forkortelser), øgenavne, eller til at referere til en not på et andet sprog.

## Tilføj et alias til en note

Du tilføjer et alias til en note ved at tilføje et `alias`, eller `aliases` metatag i en notes [[YAML markdown metadata]] sektion:

```md
---
alias: Fido
---

# Hund
```

Du kan tilføje flere aliaser ved at separere hvert alias med et komma:

```md
---
aliases: Fido, Hvalp, Dog
---

# Hund
```

Eller, du kan også tilføje flere aliaser ved at benytte en YAML liste:

```md
---
aliases: 
  - Fido
  - Hvalp
  - Dog
---

# Hund
```

## Sådan benyttes et alias til at linke til en note

Du kan linke til en note ved at bruge et alias ved at:

1. Starte med at skrive et alias i et [[Link noter og filer/Interne links|internet link]]. Alle aliaser i listen af forslag har et bøjet-pil ikon ved siden af
2. Trykke `Retur` for at vælge aliaset

Obsidian opretter linket med aliaset som dets visningstekst, f.eks. `[[Kunstig intelligens|AI]]`.

> [!note]
> Obsidian benytter link formatet `[[Kunstig intelligens|AI]]` i stedet for at benytte aliasets navn som destination for at sikre kompabilitet med applikationer, sombenytter Wikilink formatet.

## Find ikke-linkede omtaler for et alias

Du kan benytte [[Tilbagelinks|tilbagelinks]] til at finde ikke-linkede omtaler af aliaser.

Hvis du f.eks. benytter "AI" som et alias for "Kunstig inteligens" kan du se linkede omtaler af "AI" i andre noter.

Hvis du linker en ikke-linket omtale  til et alias vil Obsidian ændre omtalen til et [[Link noter og filer/Interne links|Internt link]] med aliaset som visningstekst.