---
permalink: embeds
cssclasses:
  - soft-embed
description: Află cum să încorporezi fișiere din seiful tău în însemnările tale pentru a reutiliza conținut în mai multe locuri.
---

Fișierele încorporate își afișează conținutul direct în cadrul unei însemnări și rămân actualizate atunci când fișierul sursă se schimbă.

Pentru a încorpora un fișier din seiful tău, adaugă un semn de exclamare (`!`) în fața unei [[Internal links|legături interne]]. Poți încorpora fișiere în oricare dintre [[Accepted file formats|formatele de fișiere acceptate]].

> [!tip]- Încorporare prin tragere și plasare
> Pe desktop, poți de asemenea să tragi și să plasezi fișierele acceptate direct în însemnarea ta pentru a le încorpora automat.

## Încorporează o însemnare în altă însemnare

Pentru a încorpora o însemnare:

```md
![[Internal links]]
```

Poți încorpora și anumite [[Internal links#Creează o legătură către un titlu dintr-o însemnare|titluri]] și [[Internal links#Creează o legătură către un bloc dintr-o însemnare|blocuri]].

```md
![[Internal links#^b15695]]
```

Textul de mai jos este un exemplu de bloc încorporat:

![[Internal links#^b15695]]

## Încorporează o imagine într-o însemnare

Pentru a încorpora o imagine:

```md
![[Engelbart.jpg]]
```

![[Engelbart.jpg#outline]]

Poți schimba dimensiunile imaginii adăugând `|640x480` la destinația legăturii, unde 640 este lățimea, iar 480 este înălțimea.

```md
![[Engelbart.jpg|100x145]]
```

Dacă specifici doar lățimea, imaginea se scalează proporțional. De exemplu, `![[Engelbart.jpg|100]]`.

![[Engelbart.jpg#outline|100]]

Poți încorpora și o imagine găzduită extern folosind o legătură Markdown. Poți controla lățimea și înălțimea folosind aceeași sintaxă ca la o legătură wiki.

```md
![250](https://publish-01.obsidian.md/access/f786db9fac45774fa4f0d8112e232d67/Attachments/Engelbart.jpg)
```

![250](https://publish-01.obsidian.md/access/f786db9fac45774fa4f0d8112e232d67/Attachments/Engelbart.jpg)

## Încorporează un fișier audio într-o însemnare

Pentru a încorpora un fișier audio:

```md
![[Excerpt from Mother of All Demos (1968).ogg]]
```

![[Excerpt from Mother of All Demos (1968).ogg]]

## Încorporează un PDF într-o însemnare

Pentru a încorpora un PDF:

```md
![[Document.pdf]]
```

Poți deschide și o anumită pagină din PDF adăugând `#page=N` la destinația legăturii, unde `N` este numărul paginii:

```md
![[Document.pdf#page=3]]
```

Poți specifica și înălțimea în pixeli pentru vizualizatorul de PDF încorporat adăugând `#height=[number]` la legătură. De exemplu:

```md
![[Document.pdf#height=400]]
```

## Încorporează o pânză într-o însemnare

Pentru a încorpora o [[Canvas|pânză]]:

```md
![[My canvas.canvas]]
```

> [!info]+ Pânzele încorporate afișează doar formele
> Pânzele încorporate afișează formele, dar nu și textul din interiorul cardurilor. Pentru a vedea pânza completă, deschide-o direct.

## Încorporează o listă într-o însemnare

Pentru a încorpora o listă dintr-o altă însemnare, adaugă mai întâi un [[Internal links#Creează o legătură către un bloc dintr-o însemnare|identificator de bloc]] la lista ta:

```md

- list item 1
- list item 2

^my-list-id
```

Apoi creează o legătură către listă folosind identificatorul de bloc:

```md
![[My note#^my-list-id]]
```

## Încorporează rezultatele căutării

![[Search#Embed search results in a note]]
