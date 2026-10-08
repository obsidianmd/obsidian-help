---
permalink: publish/permalinks
aliases:
  - Permalinks
---
Poți redenumi URL-ul notelor tale, folosind _permalinkuri_.

De exemplu, poți transforma asta:

```
https://publish.obsidian.md/username/Company/About+us
```

În asta:

```
https://publish.obsidian.md/username/about
```

Pentru a crea un permalink pentru o notă, adaugă proprietatea `permalink` în [[Proprietăți|Proprietățile]] tale.

```yaml
---
permalink: about
---
```

Dacă cineva vizitează o notă folosind URL-ul original, va fi redirecționat automat către permalink.

## Redirecționează notele vechi

Redenumirea și eliminarea notelor fac parte din menținerea unui seif viu. Deși Obsidian actualizează automat legăturile atunci când muți o notă în cadrul seifului tău local, alte site-uri web pot continua să facă legătura către notele tale vechi de pe site-ul [[Introducere în Obsidian Publish|Obsidian Publish]] publicat. Poți redirecționa cititorii de la o notă la alta.

Imaginează-ți că vrei să muți o notă dintr-un director în altul:

- **Guides**
  - ~~Making friends.md~~ (eliminat)
- **Tutorials**
  - *How to make friends.md* (adăugat)

După ce muți nota, Obsidian actualizează automat toate legăturile din cadrul seifului. Totuși, dacă publici schimbarea pe site-ul tău Publish, orice legătură către `/Guides/Making+friends` va rezulta într-o eroare 404.

Pentru a redirecționa cititorii de la `/Guides/Making+friends` la `/Tutorials/How+to+make+friends`, trebuie să adaugi un [[Pseudonime|pseudonim]] în `How to make friends.md`, nota către care vrei să redirecționezi.

```md
---
alias: Guides/Making friends
---

# How to make friends
```

> [!important] Important
> Asigură-te că incluzi calea completă către nota veche în pseudonim. Deși folosirea doar a numelui notei ca pseudonim funcționează în seiful tău local, Publish are nevoie de calea completă către notă pentru a putea redirecționa către ea.

Poți redirecționa mai multe note adăugând câte un pseudonim pentru fiecare.

```md
---
aliases: 
  - Guides/Making friends
  - Developing friendships
---

# How to make friends
```
