---
permalink: links
cssclasses:
  - soft-embed
publish: true
mobile: true
description: 'Află cum să creezi legături către însemnări, atașamente și alte fișiere din însemnările tale, folosind legături interne.'
aliases:
  - Internal links
---

Află cum să creezi legături către însemnări, atașamente și alte fișiere din însemnările tale, folosind _legături interne_. Prin legarea însemnărilor, poți crea o rețea de cunoștințe. ^b15695

Obsidian poate actualiza automat legăturile interne din seiful tău atunci când redenumești un fișier. Dacă preferi să fii întrebat în schimb, poți dezactiva această opțiune în:

**[[Setări|Setări]]** → **[[Setări#Files and links|Fișiere și legături]]** → **[[Setări#Automatically update internal links|Actualizează automat legăturile interne]]**.

## Formate acceptate pentru legăturile interne

Obsidian acceptă următoarele formate de legături:

- Legătură wiki: `[[Three laws of motion]]` sau `[[Three laws of motion.md]]`
- Markdown: `[Three laws of motion](Three%20laws%20of%20motion)` sau `[Three laws of motion](Three%20laws%20of%20motion.md)`

Exemplele de mai sus sunt echivalente și apar la fel în editor, făcând legătura către aceeași însemnare.

Pentru a crea o legătură către o însemnare dintr-un folder, include calea folderului înaintea numelui însemnării. Căile de folder pornesc de la rădăcina seifului și folosesc bare oblice (`/`), chiar și pe Windows: `[[Projects/Three laws of motion]]` sau `[Three laws of motion](Projects/Three%20laws%20of%20motion.md)`.

Dacă legătura indică spre o însemnare care nu există încă, Obsidian creează însemnarea la acea cale de folder, în loc să folosească [[Setări#Default location for new notes|locul implicit pentru note noi]].

> [!note] Notă
> Când folosești formatul Markdown, asigură-te că faci [codare URL](https://en.wikipedia.org/wiki/Percent-encoding) pentru destinația legăturii. De exemplu, spațiile devin `%20`.

Implicit, datorită formatului său mai compact, Obsidian generează legături folosind formatul de legătură wiki. Dacă interoperabilitatea este importantă pentru tine, poți dezactiva legăturile wiki și poți folosi în schimb legături Markdown.

Pentru a folosi formatul Markdown:

1. Deschide **[[Setări|Setări]]**.
2. Sub **Fișiere și legături**, dezactivează **Permiteți folosirea legăturilor în format \[\[wiki\]\]**.

Chiar dacă dezactivezi formatul de legătură wiki, poți folosi în continuare completarea automată a legăturilor tastând două paranteze pătrate `[[`. Când selectezi unul dintre fișierele sugerate, Obsidian generează în schimb o legătură Markdown.

> [!note] Caractere nevalide
> Un șir care conține următoarele caractere s-ar putea să nu funcționeze ca legătură: `# | ^ : %% [[ ]]`.
>
> Îți recomandăm să eviți folosirea acestor caractere și să respecți [practicile sigure pentru numele de fișiere](https://stackoverflow.com/questions/1976007/what-characters-are-forbidden-in-windows-and-linux-directory-names).

## Creează o legătură către un fișier

Pentru a crea o legătură în timp ce te afli în afișajul de editare, folosește oricare dintre următoarele metode:

- Tastează `[[` în editor, apoi selectează fișierul către care vrei să creezi o legătură.
- Selectează text în editor, apoi tastează `[[`.
- Deschide [[Paleta de comenzi|Paleta de comenzi]] și selectează Adaugă o legătură internă.

![[Comutare rapidă#^search-autocomplete-large]]

Deși poți crea legături către oricare dintre [[Formate de fișiere acceptate|formatele de fișiere acceptate]], legăturile către formate de fișiere altele decât Markdown trebuie să includă extensia fișierului, precum `[[Figure 1.png]]`.

> [!tip] Adăugarea unui semn de exclamare (!) în fața unei legături interne îți permite să încorporezi conținutul legat. Pentru mai multe detalii, vezi [[Încorporează fișiere|Încorporarea fișierelor]].

> [!info] Fișiere excluse
> Fișierele care se potrivesc tiparelor tale de [[Setări#Excluded files|fișiere excluse]] au prioritate mai mică în sugestiile de legături atunci când creezi legături interne.

## Creează o legătură către un titlu dintr-o însemnare

Poți crea legături către titluri specifice din însemnări, cunoscute și sub numele de _legături-ancoră_.

**Crearea unei legături către un titlu din aceeași însemnare**

Pentru a crea o legătură către un titlu din aceeași însemnare, tastează `[[#` pentru a obține o listă cu titlurile din însemnare către care poți crea o legătură.

De exemplu, `[[#Preview a linked file]]` va crea o legătură către [[#Previzualizează un fișier legat]].

**Crearea unei legături către un titlu dintr-o altă însemnare**

Pentru a crea o legătură către un titlu dintr-o altă însemnare, adaugă un diez (`#`) la finalul destinației legăturii, urmat de textul titlului.

De exemplu, `[[Despre Obsidian#Links are first-class citizens]]` va crea o legătură către [[Despre Obsidian#Links are first-class citizens]].

**Crearea de legături către subtitluri**

Poți adăuga mai multe simboluri diez pentru fiecare subtitlu.

De exemplu, `[[Ajutor și suport#Questions and advice#Report bugs and request features]]` va crea o legătură către [[Ajutor și suport#Questions and advice#Report bugs and request features]].

**Căutarea titlurilor în întregul seif**

Pentru a căuta titluri în întregul seif, folosește sintaxa `[[## header]]`.

De exemplu, `[[##` va căuta generic în întregul seif, în timp ce `[[## team]]` va căuta toate titlurile care conțin cuvântul _team_.

> [!info]- Captură de ecran cu căutarea unei legături către un titlu
>
> ![[internal-links-header.png#interface]]

## Creează o legătură către un bloc dintr-o însemnare

Un bloc este o unitate de text din însemnarea ta, precum un paragraf, un citat sau un element de listă.

Poți crea o legătură către un bloc adăugând `#^` la finalul destinației legăturii tale, urmat de un identificator unic de bloc. De exemplu: `[[2023-01-01#^37066d]]`. Din fericire, nu trebuie să găsești manual identificatorul — când tastezi accentul circumflex (`^`), va apărea o listă de sugestii, care îți permite să selectezi blocul corect.

Pentru *paragrafe simple*, plasează un spațiu urmat de un accent circumflex `^` și identificatorul de bloc la finalul liniei:

```md
The quick purple gem dashes through the paragraph with blazing speed. Pen in hand and a paperclip in the other, Gemmy works toward her goal of making the world of note-taking a happier place. ^37066d
```

Pentru *blocuri structurate* (liste, citate, explicații, tabele), identificatorul de bloc trebuie să fie pe o linie separată, cu o linie goală înainte și după:

```md
> The quick purple gem dashes through the paragraph with blazing speed. Pen in hand and a paperclip in the other, Gemmy works toward her goal of making the world of note-taking a happier place.

^37066f

This is the tale of Gemmy, the Unhelpful assistant.  
```

Pentru *linii specifice dintr-o listă*, identificatorul de bloc poate fi plasat direct pe un element de listă:

```mathjax
- Gemmy
    $$Paperclip / Pen$$ 
    ^37006f
- Unhelpful assistant
```

> [!warning] Nu oferim suport pentru legături către părți specifice ale citatelor, explicațiilor și tabelelor.

**Căutarea blocurilor în întregul seif**

Poți de asemenea să cauți blocuri către care să creezi o legătură din întregul tău seif folosind sintaxa `[[^^block]]`. Totuși, mai multe elemente se califică drept blocuri comparativ cu [[#Creează o legătură către un titlu dintr-o însemnare|legăturile către titluri]], astfel încât această listă va fi mult mai lungă.

> [!info]- Captură de ecran cu căutarea unei legături către un bloc
> ![[link-block-heading.png#interface]]

Poți de asemenea crea identificatori de bloc ușor de citit adăugând un spațiu urmat de un accent circumflex (`^`) și identificatorul. Identificatorii de bloc pot fi formați doar din litere latine, cifre și cratime.

De exemplu, adaugă `^quote-of-the-day` la finalul unui bloc:

```md
"You do not rise to the level of your goals. You fall to the level of your systems." by James Clear ^quote-of-the-day
```

Acum poți crea o legătură către bloc tastând `[[2023-01-01#^quote-of-the-day]]`.

> [!warning] Interoperabilitate
> Referințele către blocuri sunt specifice Obsidian și nu fac parte din formatul Markdown standard. Legăturile care conțin referințe către blocuri nu vor funcționa în afara Obsidian.

## Modifică textul afișat al legăturii

Implicit, Obsidian va afișa textul legăturii așa cum apare. De exemplu:
- `[[Example]]` se afișează ca [[Example]]
- `[[Example#Details]]` se afișează ca [[Example#Details]]

Poți schimba modul în care este afișată o legătură personalizând textul acesteia:

**Format legătură wiki**:
Folosește o bară verticală (`|`) pentru a schimba textul afișat.

- `[[Example|Custom name]]` apare ca [[Example|Custom name]]
- `[[Example#Details|Section name]]` apare ca [[Example#Details|Section name]]

**Format Markdown**:
Folosește `[Display text](Link URL)` pentru a personaliza modul în care apare legătura.

- `[Custom name](Example.md)` apare ca [Custom name](Example.md)
- `[Section name](Example.md#Details)` apare ca [Section name](Example.md#Details)

Această metodă este utilă pentru situații punctuale în care vrei să schimbi modul în care arată o legătură într-un context specific. Dacă vrei să configurezi un nume alternativ pentru legătură pe care să-l poți reutiliza în întregul tău seif, ia în considerare folosirea unui [[Pseudonime|alias]] în schimb.

De exemplu, dacă te referi în mod regulat la `[[Three laws of motion]]` ca `[[The 3 laws]]`, adăugarea „3 laws” ca alias îți permite să tastezi doar acel text — fără să fie nevoie să adaugi text afișat personalizat de fiecare dată.

> [!tip] Sfat
> Folosește [[#Modifică textul afișat al legăturii|textul afișat al legăturii]] atunci când vrei să personalizezi modul în care arată o legătură *într-un anumit loc*.
>
> Folosește [[Pseudonime|alias-urile]] atunci când vrei să faci referire la aceeași însemnare folosind *nume diferite* în întregul tău seif.
^callout-internal-links-link-text

## Previzualizează un fișier legat

> [!note] Notă
> Pentru a previzualiza fișierele legate, trebuie mai întâi să activezi [[Previzualizare pagină|Previzualizarea paginii]].

Pentru a previzualiza un fișier legat, treci cu cursorul peste o legătură internă. În modul de editare, apasă `Ctrl` (sau `Cmd` pe macOS) în timp ce ții cursorul deasupra legăturii. O previzualizare a conținutului fișierului apare lângă cursor.
