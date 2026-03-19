---
permalink: baser/opret-en-base
---
[[Introduktion til Baser|Baser]] lader dig oprette databaseligenende views af dine noter. Her kan du læse om, hvordan du opretter en base og indlejrer den i en note. HVer base kan have en eller flere [[Views|views]], som viser information på forskellige måder.

## Sådan opretter du en base

**Kommandopaletten:**

1. Åben **Kommandopaletten**.
2. Vælg
	- **Baser: Opret ny base** for at oprette en base i den samme mappe som den aktive fil
	- **Baser: Indsæt ny base** for at oprette en base og indlejre den i den nuværende fil

**Stifinderen:**

1. Højreklik på den mappe, som du vil oprette basen i
2. vælg **Ny base**

**Båndmenuen:**

- Vælg **Opret ny base** i det lodrette båndmenu, for at oprette en base i den same mappe, som den aktive fil

## Sådan indlejrer du en base

### Sådan indlejrer du en base fil

Du kan indlejre base filer i [[Indlejr filer|enhver anden fil]] ved at anvende synktaksen `![[File.base]]`. Anvend `![[File.base#View]]` for at specificere standardviewet.

### Sådan indlejrer du en base som en kodeblok

Baser kan også indlejres direkte ind i en note ved at anvende en `base` kodeblok og [[Basesyntaks|basesyntaks]].

~~~yaml
```base
filters:
  and:
    - file.hasTag("Eksempel")
views:
  - type: table
    name: Tabel
```
~~~
