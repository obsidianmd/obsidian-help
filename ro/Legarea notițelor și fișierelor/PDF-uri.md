---
permalink: pdf
publish: true
mobile: true
description: 'Învață cum să vizualizezi, să cauți și să creezi linkuri către fișiere PDF în Obsidian și cum să exporți o notă ca PDF.'
---
Obsidian deschide fișierele PDF într-un vizualizator integrat. Poți, de asemenea, să încorporezi un PDF într-o notiță, să creezi o legătură către un pasaj din acesta și să exporți orice notiță ca PDF. Pentru tipurile de fișiere pe care Obsidian le acceptă, consultă [[Formate de fișiere acceptate]].

> [!info]+ Unele funcționalități sunt disponibile doar pe desktop
> Aplicația Obsidian pe mobil nu poate căuta în interiorul unui PDF, copia un citat sau o legătură către o selecție, sau exporta o notiță ca PDF.

## Deschide un PDF

În [[Exploratorul de fișiere]], selectează un PDF pentru a-l deschide într-o filă.

> [!info]+ Adnotările nu sunt acceptate
> Obsidian nu acceptă adăugarea de adnotări sau evidențieri într-un PDF. Pentru a marca un PDF, folosește o altă aplicație și apoi deschide fișierul actualizat în seiful tău.

Vizualizatorul are o bară de instrumente cu următoarele controale. Aplicația Obsidian pe mobil are aceeași bară de instrumente.

- **Comută bara laterală** afișează sau ascunde bara laterală, iar **Opțiuni bară laterală** schimbă ce afișează bara laterală.
- **Micșorează** și **Mărește** modifică dimensiunea paginii.
- **Opțiuni de afișare** schimbă modul în care sunt aranjate paginile.
- Căsuța de pagină arată pagina curentă. Introdu un număr de pagină pentru a naviga la acea pagină.

Pentru a lucra cu fișierul PDF în sine, cum ar fi redenumirea sau mutarea acestuia, selectează **Mai multe opțiuni** ![[lucide-more-horizontal.svg#icon]]. Un PDF are mai puține elemente în acest meniu decât o notiță. Consultă [[Meniul Mai multe opțiuni]].

## Navighează într-un PDF

Selectează **Opțiuni bară laterală**, apoi alege ce să afișezi.

- **Miniaturi** afișează o previzualizare mică a fiecărei pagini.
- **Cuprins** afișează structura PDF-ului, dacă aceasta există.
- **Afișează pagina în cuprins** evidențiază pagina curentă în cuprins.

Pentru a crea o legătură către o pagină, dă clic dreapta pe miniatura acesteia și selectează **Copy link to page N**, unde N este numărul paginii. Lipește legătura într-o notiță.

Pentru a crea o legătură către o secțiune, dă clic dreapta pe o intrare din cuprins și selectează **Copy link to "Title"**, unde Title este numele intrării. Pe mobil, apasă și menține intrarea.

## Schimbă aspectul unui PDF

Selectează **Opțiuni de afișare** pentru a schimba aspectul.

- **Potrivește la lățime** și **Potrivește la înălțime** redimensionează pagina la vizualizator.
- **Pagină unică** afișează câte o pagină pe rând.
- **Two page (odd)** afișează paginile una lângă alta, începând cu o pagină impară în stânga. De exemplu, paginile 1 și 2 se afișează împreună, apoi paginile 3 și 4.
- **Two page (even)** afișează paginile una lângă alta, începând cu o pagină pară în stânga. De exemplu, pagina 1 se afișează singură, apoi paginile 2 și 3 se afișează împreună.
- **Adaptează la temă** întunecă culorile PDF-ului când tema Obsidian este întunecată.

## Caută într-un PDF

Căutarea în interiorul unui PDF este disponibilă doar pe desktop. Aplicația Obsidian pe mobil nu are funcția de căutare în vizualizatorul PDF.

1. Apasă `Ctrl+F` (Windows și Linux) sau `Command+F` (macOS).
2. În **Scrie pentru a începe căutarea...**, introdu textul pe care vrei să-l găsești.
3. Selectează săgeata sus sau jos pentru a naviga între rezultate.

Pentru a schimba modul în care funcționează căutarea, folosește aceste opțiuni.

- **Căutare exactă după minuscule sau majuscule** potrivește exact majusculele și minusculele. Este butonul **Aa** din câmpul de căutare.
- **Evidențiază tot** evidențiază fiecare rezultat. Selectează butonul de setări de lângă săgeți pentru a găsi această opțiune.
- **Potrivește diacriticele** tratează literele cu accente ca litere diferite. Se găsește în același meniu de setări.
- **Cuvinte întregi** găsește doar cuvinte întregi. Se găsește în același meniu de setări.

Selectează butonul de închidere pentru a părăsi căutarea.

## Copiază text dintr-un PDF

Pe desktop, selectează text în PDF, apoi dă clic dreapta pe acesta.

- **Copy** copiază textul.
- **Copiază ca citat** copiază textul ca citat, urmat de o legătură către pasajul respectiv.
- **Copiază linkul către selecție** copiază o legătură către acel pasaj, astfel încât să o poți lipi într-o notiță.

Un citat arată astfel când îl lipești într-o notiță.

```md
> Obsidian is awesome

[[Gemmy.pdf#page=1&selection=32,0,32,14|Gemmy, page 1]]
```

O legătură către o selecție conține aceeași legătură de sine stătătoare.

```md
[[Gemmy.pdf#page=1&selection=32,0,32,14|Gemmy, page 1]]
```

Pe mobil, selectarea textului într-un PDF afișează meniul standard de text al dispozitivului. **Copiază ca citat** și **Copiază linkul către selecție** nu sunt disponibile.

## Încorporează un PDF

Pentru a afișa un PDF în interiorul unei notițe, consultă cum să [[Încorporează fișiere#Încorporează un PDF într-o notiță|încorporezi un PDF într-o notiță]]. Un PDF încorporat are aceeași bară de instrumente ca vizualizatorul. Selectează **Modificați acest bloc** pentru a schimba legătura de încorporare.

## Exportă o notiță ca PDF

Poți exporta orice notiță ca PDF pe desktop. Exportul ca PDF nu este disponibil în aplicația Obsidian pe mobil.

1. Deschide notița pe care vrei să o exporți.
2. Deschide [[Paleta de comenzi]] și selectează **Export PDF**. Poți, de asemenea, să selectezi **Mai multe opțiuni** ![[lucide-more-horizontal.svg#icon]] în notiță, apoi să selectezi **Export PDF**.
3. Alege setările dorite.
    - **Includeți numele fișierului ca titlu** adaugă numele fișierului în partea de sus a PDF-ului.
    - **Dimensiunea paginii** setează dimensiunea hârtiei. Poți alege A3, A4, A5, Legal, Letter sau Tabloid.
    - **Pagină de tip vedere** rotește paginile pe orizontală.
    - **Margine** setează marginea paginii la **Implicită**, **Minimă** sau **Niciunul**.
    - **Procentul de subdimensionare** scalează conținutul de pe fiecare pagină. La 100, conținutul rămâne la dimensiunea completă. Valorile mai mici fac textul și imaginile mai mici, astfel încât mai mult conținut încape pe fiecare pagină.
4. Selectează **Salvați ca PDF**.
5. Alege unde să salvezi fișierul.

> [!tip]- Exportă o notiță cu o temă întunecată
> Exporturile folosesc întotdeauna stilul luminos, chiar dacă tema ta este întunecată. Pentru a schimba aspectul unui export, poți folosi un [[Fragmente CSS|fragment CSS]]. Forumul Obsidian are exemple de fragmente pentru tipărire și export.[^1]

[^1]: Consultă [How can I make export pdf look the same as my theme?](https://forum.obsidian.md/t/how-can-i-make-export-pdf-look-the-same-as-my-theme/75849) și [PDF and print style reset with code syntax highlighting](https://forum.obsidian.md/t/pdf-and-print-style-reset-with-code-syntax-highlighting/31761).
