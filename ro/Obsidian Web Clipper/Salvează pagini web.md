---
permalink: web-clipper/capture
aliases:
  - Clip web pages
---
După ce instalezi extensia de browser [[Introducere în Obsidian Web Clipper|Web Clipper]], o poți accesa în mai multe moduri, în funcție de browserul tău:

1. Pictograma Obsidian din bara de instrumente a browserului.
2. Combinații de taste, pentru a activa extensia de la tastatură.
3. Meniul contextual, prin clic dreapta pe pagina web pe care o vizitezi.

Pentru a salva o pagină în Obsidian, dă clic pe butonul **Adaugă în Obsidian**.

## Capturează o pagină

Când deschizi extensia, Web Clipper extrage date din pagina web curentă urmând setările din [[Obsidian Web Clipper/Șabloane|șablonul]] tău. Poți crea propriile șabloane și personaliza rezultatul folosind [[Variabile|variabile]] și [[Filtre|filtre]].

În mod implicit, Web Clipper încearcă să extragă în mod inteligent doar conținutul principal al articolului, excluzând celelalte elemente de pe pagină. Cu toate acestea, poți suprascrie acest comportament în următoarele moduri:

- Dacă există un șablon personalizat, se folosește șablonul tău.
- Dacă există o selecție, se folosește selecția. Poți folosi `Ctrl/Cmd+A` pentru a selecta întreaga pagină.
- Dacă există [[Evidențiere|evidențieri]], se folosesc evidențierile.

## Descarcă imagini

Imaginile nu sunt descărcate automat când folosești Web Clipper. În schimb, imaginile fac trimitere către adresa lor URL de pe web. Acest lucru economisește spațiu în seiful tău, dar înseamnă că imaginile nu vor fi accesibile offline sau dacă adresa URL nu mai funcționează.

Poți descărca imaginile pentru orice fișier din Obsidian folosind [[Paleta de comenzi|comanda]] numită **Descarcă atașamentele pentru fișierul curent**. Această comandă poate fi de asemenea asociată cu o combinație de taste în Obsidian.

## Combinații de taste

Web Clipper include scurtături de tastatură pe care le poți folosi pentru a-ți accelera fluxul de lucru. Pentru a schimba asocierile de taste, mergi la **Setările Web Clipper** → **General** și urmează instrucțiunile pentru browserul tău. Asocierile pot fi schimbate pentru toate browserele, cu excepția Safari, care nu permite editarea combinațiilor de taste.

| Acțiune                | macOS         | Windows/Linux  |
| ----------------------- | ------------- | -------------- |
| Deschide clipper-ul     | `Cmd+Shift+O` | `Ctrl+Shift+O` |
| Captură rapidă          | `Opt+Shift+O` | `Alt+Shift+O`  |
| Comută evidențierea     | `Opt+Shift+H` | `Alt+Shift+H`  |
| Comută modul de citire  | `Opt+Shift+R` | `Alt+Shift+R`  |

## Funcționalitatea interfeței

Interfața Web Clipper este împărțită în patru secțiuni:

1. **Antet**, unde poți schimba șabloanele, poți activa [[Evidențiere|evidențierea]], [[Cititor|modul de citire]] și poți accesa setările.
2. **Proprietăți**, care afișează [[Proprietăți|metadatele]] extrase din pagină ce vor fi salvate ca [[Proprietăți|Proprietăți]] în Obsidian.
3. **Conținutul notei** care va fi salvat în Obsidian.
4. **Subsol**, care îți permite să selectezi seiful și directorul și să adaugi în Obsidian.

Funcționalitatea antetului include:

- ![[lucide-chevrons-up-down.svg#icon]] Selectorul de **șabloane** pentru a folosi [[Obsidian Web Clipper/Șabloane|șabloanele]] salvate, adăugate în setările extensiei.
- ![[lucide-more-horizontal.svg#icon]] Butonul **Mai multe** pentru a afișa variabilele paginii pe care le poți folosi în șabloane.
- ![[lucide-highlighter.svg#icon]] Butonul **Evidențiere** pentru a activa [[Evidențiere|evidențierea]].
- ![[lucide-book-icon.svg#icon]] Butonul **Reader** pentru a activa [[Cititor|modul de citire]].
- ![[lucide-picture-in-picture-2.svg#icon]] Butonul **Încorporare** pentru a muta Web Clipper din fereastra pop-up direct în pagină.
- ![[lucide-settings.svg#icon]] Butonul **Setări** pentru a deschide setările extensiei.

Funcționalitatea subsolului include:

- Butonul **Adaugă în Obsidian** pentru a salva datele în Obsidian.
- Meniul derulant **Seif** pentru a comuta între seifurile salvate, adăugate în setările Web Clipper.
- Câmpul **Director** pentru a defini în ce director se salvează.
- **Interpreter** pentru a rula [[Interpretor|prompturi în limbaj natural]] pe pagină.
