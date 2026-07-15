---
permalink: aliases
cssclasses:
  - soft-embed
---

Dacă vrei să faci referire la un fișier folosind nume diferite, poți adăuga _alias-uri_ la însemnare. Un alias este un nume alternativ pentru o însemnare.

Folosește alias-uri pentru lucruri precum acronime, porecle sau pentru a face referire la o însemnare într-o altă limbă.

Dacă vrei doar să schimbi modul în care apare o legătură într-un singur loc, vezi cum să [[Internal links#Modifică textul afișat al legăturii|Modifici textul afișat al legăturii]] în schimb.

![[Internal links#^callout-internal-links-link-text]]

## Adaugă un alias la o însemnare

Pentru a adăuga un alias pentru o însemnare, adaugă proprietatea `aliases` în [[Properties|Proprietățile]] însemnării. Alias-urile trebuie formatate întotdeauna ca o listă în YAML.

```md
---
aliases:
  - Doggo
  - Woofer
  - Yapper
---

# Dog
```

## Creează o legătură către o însemnare folosind un alias

Pentru a crea o legătură către o însemnare folosind un alias:

1. Începe să scrii alias-ul într-o [[Internal links|legătură internă]]. Orice alias apare în lista de sugestii, cu o pictogramă de săgeată curbată lângă el.
2. Apasă `Enter` pentru a selecta alias-ul.

Obsidian creează legătura cu alias-ul ca text afișat personalizat, de exemplu `[[Artificial Intelligence|AI]]`.

> [!note] Notă
> În loc să folosească pur și simplu alias-ul ca destinație a legăturii (`[[AI]]`), Obsidian folosește formatul de legătură `[[Artificial Intelligence|AI]]` pentru a asigura interoperabilitatea cu alte aplicații care folosesc formatul Wikilink.

## Găsește mențiunile nelegate ale unui alias

Folosind [[Backlinks|Referințele]], poți găsi mențiuni nelegate ale alias-urilor.

De exemplu, după ce ai setat „AI” ca alias pentru „Artificial intelligence”, poți vedea mențiunile „AI” din alte însemnări.

Dacă legi o mențiune nelegată la un alias, Obsidian transformă mențiunea într-o [[Internal links|legătură internă]] cu alias-ul ca text afișat.
