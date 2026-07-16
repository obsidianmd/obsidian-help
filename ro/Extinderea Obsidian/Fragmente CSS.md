---
permalink: snippets
publish: true
mobile: true
description: Aflați cum să modificați aspecte ale interfeței aplicației Obsidian fără a crea o temă completă.
aliases:
  - CSS snippets
---
Aflați cum să modificați aspecte ale interfeței aplicației Obsidian fără a fi nevoie să [construiți o temă](https://docs.obsidian.md/Themes/App+themes/Build+a+theme). 

> [!tip] Dacă aveți nevoie de îndrumări privind gestionarea CSS pentru [[Introducere în Obsidian Publish|Obsidian Publish]], asigurați-vă că parcurgeți [[Personalizează-ți site-ul]].

CSS este un limbaj care controlează modul în care arată HTML-ul. Adăugând fragmente CSS, puteți modifica părți ale interfeței utilizator din Obsidian, precum dimensiunea și culoarea titlurilor. Obsidian are [variabile CSS](https://docs.obsidian.md/Reference/CSS+variables/CSS+variables) care vă ajută să personalizați cu ușurință interfața.

Obsidian caută fragmente CSS în [[Directorul de configurare|directorul de configurare]] al seifului.

## Adăugarea unui fragment

Pentru a adăuga un fragment CSS pe **Desktop** ![[lucide-monitor-check.svg#icon]], urmați acești pași:

1. Deschideți **[[Setări]]** ![[lucide-settings.svg#icon]].
2. Sub **Aspect → Fragmente CSS**, selectați **Deschide directorul de fragmente** ![[lucide-folder-open.svg#icon]].
3. În directorul de fragmente, creați un fișier CSS care conține fragmentul dumneavoastră.
4. În Obsidian, sub **Aspect → Fragmente CSS**, selectați **Reîncarcă fragmentele** ![[lucide-refresh-cw.svg#icon]] pentru a vedea fragmentul în listă.
5. Activați fragmentul apăsând comutatorul.

Pentru a adăuga un fragment CSS pe **Mobil/Tabletă** ![[obsidian-icon-smartphone.svg#icon]], puteți urma acești pași:

1. Deschideți un administrator de fișiere și găsiți seiful. Puteți verifica locația seifului în _Gestionați seifurile…_ apăsând pe seif și verificând calea.
2. Deschideți [[Directorul de configurare]] și creați un director numit `snippets` dacă acesta nu există.
3. Adăugați fragmentul CSS în acest director.
4. Deschideți **[[Setări]]** ![[lucide-settings.svg#icon]] din Obsidian.
5. Selectați **Aspect** în stânga.
6. Derulați în jos până la secțiunea **Fragmente CSS**.
7. Apăsați **Reîncarcă fragmentele** ![[lucide-refresh-cw.svg#icon]] pentru a reîmprospăta lista.
8. Apăsați comutatorul pentru a activa fragmentul.

Alternativ, puteți
- [[Sincronizează-ți notițele pe toate dispozitivele|Sync]] orice modificare cu serviciul dumneavoastră de sincronizare.
- Folosi un modul al comunității pentru a crea un fragment direct din Obsidian. 

Odată activat, Obsidian va detecta automat modificările fragmentelor CSS și le va aplica la salvarea fișierului. 

> [!tip] Nu este necesar să reporniți Obsidian pentru ca modificările să aibă efect. Cu toate acestea, este posibil să fie nevoie să folosiți comanda [[Paleta de comenzi]] pentru a reîncărca Obsidian fără salvare, pentru a vedea modificările în tema sau nota curentă.

## Scrierea CSS pentru Obsidian

Obsidian oferă mai multe metode care fac scrierea CSS mai simplă și mai puternică.

Are o gamă largă de [variabile CSS](https://docs.obsidian.md/Reference/CSS+variables/CSS+variables) pentru a modifica cu ușurință părți din Obsidian și un [[Proprietăți#Property types|tip de proprietate]] încorporat pentru a schimba aspectul uneia sau mai multor note.

> [!example] Variabile
> Creați un fișier numit `headers.css` cu următorul conținut pentru a schimba culorile celor șase [[Sintaxă de bază pentru formatare#Headings|niveluri de titlu]] într-un curcubeu:
>
> ```css
> body {
>   --h1-color: red;
>   --h2-color: orange;
>   --h3-color: yellow;
>   --h4-color: green;
>   --h5-color: blue;
>   --h6-color: pink;
> }
> ```

> [!example] Clase CSS
> Atribuiți numele unei clase CSS personalizate (sau o listă de clase CSS) unei [[Proprietăți|proprietăți]] predefinite `cssclasses` pentru a face ca una sau mai multe note să arate diferit față de celelalte.
> 
> **CSS**:
> ```css
> .red-border img {
>    border-color: #ff0000;
>    border-style: solid;
> }
> ```
> 
> **YAML/Proprietăți**:
> ```yaml
> cssclasses:
>  - red-border
> ```
> 
> În fiecare notă care conține valoarea `red-border` în proprietatea `cssclasses`, imaginile sunt afișate cu o margine roșie.

Pentru a vă asigura că fișierul CSS este valid și formatat corect, vă recomandăm să îl validați cu un instrument precum [CSS Validation Service](https://jigsaw.w3.org/css-validator/), deoarece un CSS invalid nu va funcționa.

## Aflați mai multe

- Dacă sunteți nou în CSS, consultați [Learn to style HTML using CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS) de la Mozilla.
- Pentru mai multe informații despre stilizarea Obsidian, consultați:
  - [About styling](https://docs.obsidian.md/Reference/CSS+variables/About+styling)
  - [Build a theme](https://docs.obsidian.md/Themes/App+themes/Build+a+theme)
  - [Build a Publish theme](https://docs.obsidian.md/Themes/Obsidian+Publish+themes/Build+a+Publish+theme)
  - [Obsidian CSS Inspector workflow](https://forum.obsidian.md/t/obsidian-css-inspector-workflow/58178)
