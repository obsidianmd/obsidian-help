---
permalink: publish/social-share
aliases:
  - Social media link previews
---
Multe rețele sociale afișează o previzualizare bogată a site-ului tău atunci când un utilizator partajează o legătură către acesta. Folosind [[Proprietăți|Proprietăți]], poți personaliza modul în care apar notele tale în previzualizare.

> [!warning] Avertisment
> Etichetele suprascrise în această secțiune sunt **vizibile doar** de către roboții web (web crawlers). Browserele web obișnuite primesc pagina nemodificată, pentru performanță.

## Descriere

Obsidian generează automat o descriere pe baza conținutului notei, dar poți furniza propria descriere folosind `description`.

```yaml
---
description: An introduction to our solar system.
---
```

> [!note] Etichete meta
> `description` suprascrie descrierea generată automat în `<meta name="description" content="...">` și echivalentele pentru `og:description` și `twitter:description`.

## Imagine

Poți folosi o imagine personalizată pentru previzualizarea legăturii, adăugând `image` sau `cover` cu o cale către imagine. Imaginea trebuie încărcată pe Publish. 

Calea poate fi o cale absolută din rădăcina seifului tău:

```yaml
---
cover: "Attachments/Cover image.png"
---
```


Calea către imagine ține cont de majuscule și minuscule. În exemplul nostru anterior, avem o cale către o imagine numită `Cover image.png`. Calea de mai jos nu va funcționa, deoarece folosește majusculele greșite.

```yaml
---
cover: "Attachments/cover Image.png"
---
```


În locul unei căi absolute din seiful tău, poți folosi și un URL extern:

```yaml
---
image: "https://example.com/cover%20image.png"
---
```


`image` și `cover` sunt identice. Folosește doar una dintre ele.

> [!note] Etichete meta
> `image` și `cover` suprascriu imaginea generată automat în `<meta property="og:image" content="...">`.
