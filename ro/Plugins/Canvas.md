---
permalink: plugins/canvas
description: 'Canvas este un modul integrat pentru notițe vizuale. Aranjează și conectează notițe, imagini și alte fișiere într-un spațiu 2D.'
mobile: true
---
Canvas este un [[Module de bază|modul integrat]] pentru notițe vizuale. Îți oferă un spațiu infinit pentru a aranja notele și a le conecta cu alte note, atașamente și pagini web.

Aranjarea notelor tale într-un spațiu 2D te ajută să vezi și să înțelegi conexiunile dintre ele. Conectează notele cu linii și grupează-le pe cele înrudite.

Obsidian salvează pânzele ca fișiere `.canvas` folosind formatul deschis [JSON Canvas](https://jsoncanvas.org/).

## Creează o pânză nouă

Pentru a începe să folosești Canvas, trebuie mai întâi să creezi un fișier care să conțină pânza ta. Poți crea o pânză nouă folosind următoarele metode.

**Paleta de comenzi:**

1. Deschide [[Paleta de comenzi|Paleta de comenzi]].
2. Selectează **Canvas: Create new canvas** pentru a crea o pânză în același director cu fișierul activ.

**Exploratorul de fișiere:**

- În [[Exploratorul de fișiere|Exploratorul de fișiere]], dă clic dreapta pe directorul în care vrei să creezi pânza.
- Selectează **New canvas**.

**Panglică:**

- În meniul vertical al panglicii, selectează **Create new canvas** ![[lucide-layout-dashboard.svg#icon]] pentru a crea o pânză în același director cu fișierul activ.

> [!note] Extensia de fișier .canvas
> Obsidian stochează datele pânzei tale ca fișiere `.canvas`, folosind un format de fișier deschis numit [JSON Canvas](https://jsoncanvas.org/).

## Adaugă carduri

Poți trage fișiere în pânza ta din Obsidian sau din alte aplicații. De exemplu, fișiere Markdown, imagini, sunet, PDF-uri sau chiar tipuri de fișiere nerecunoscute.

### Adaugă carduri de text

Poți adăuga carduri doar de text, care nu fac trimitere la un fișier. Poți folosi Markdown, legături și blocuri de cod la fel ca într-o notă.

Pentru a adăuga un card de text nou în pânza ta:

- Selectează sau trage pictograma de fișier gol din partea de jos a pânzei.

Poți adăuga carduri de text și dând dublu clic pe pânză.

Pentru a converti un card de text într-un fișier:

1. Dă clic dreapta pe cardul de text și apoi selectează **Convert to file...**.
2. Introdu numele notei și apoi selectează **Save**.

> [!note] Cardurile doar de text și referințele
> Cardurile doar de text nu apar în [[Referințe|Referințe]]. Pentru a le face să apară, trebuie să le convertești în fișiere.

### Adaugă carduri din note

Pentru a adăuga o notă din seiful tău în pânza ta:

1. Selectează sau trage pictograma de document din partea de jos a pânzei.
2. Selectează nota pe care vrei să o adaugi.

Poți adăuga note și din meniul contextual al pânzei:

1. Dă clic dreapta pe pânză și apoi selectează **Add note from vault**.
2. Selectează nota pe care vrei să o adaugi.

Poți trage note și din [[Exploratorul de fișiere|Exploratorul de fișiere]] în pânză.

Pentru a afișa doar o parte dintr-o notă într-un card, dă clic dreapta pe card și selectează **Narrow to heading...** sau **Narrow to block...**. Apoi alege titlul sau blocul.

### Adaugă carduri din fișiere media

Pentru a adăuga conținut media din seiful tău în pânza ta:

1. Selectează sau trage pictograma de fișier imagine din partea de jos a pânzei.
2. Selectează fișierul media pe care vrei să-l adaugi.

Poți adăuga fișiere media și din meniul contextual al pânzei:

1. Dă clic dreapta pe pânză și apoi selectează **Add media from vault**.
2. Selectează fișierul media pe care vrei să-l adaugi.

Poți trage fișiere media și din [[Exploratorul de fișiere|Exploratorul de fișiere]] în pânză.

### Adaugă carduri din pagini web

Pentru a încorpora o pagină web în pânza ta:

1. Dă clic dreapta pe pânză și apoi selectează **Add web page**.
2. Introdu adresa URL a paginii web și apoi selectează **Save**.

Poți, de asemenea, să selectezi o adresă URL în browserul tău și apoi să o tragi în pânză pentru a o încorpora într-un card.

Pentru a deschide pagina web în browserul tău, apasă `Ctrl` (sau `Cmd` pe macOS) și selectează eticheta cardului. Sau, dă clic dreapta pe card și selectează **Open external link**.

Dă clic dreapta pe un card de pagină web pentru mai multe opțiuni.

- **Copy URL** copiază adresa paginii web.
- **Change URL...** schimbă adresa pe care o afișează cardul.
- **Reload page** reîncarcă pagina web.

### Adaugă carduri din baze

Pentru a afișa o [[Introducere în Baze|bază]] în pânza ta, trage fișierul bazei din Exploratorul de fișiere în pânză. Cardul afișează baza.

Un card de bază afișează vizualizarea implicită a bazei. Pentru a afișa o vizualizare diferită:

1. Dă clic dreapta pe card și apoi selectează **Pin view...**.
2. Selectează vizualizarea dorită.

Pentru a reveni la vizualizarea implicită, selectează din nou **Pin view...** și apoi selectează **Show default view**.

### Adaugă carduri din directoare

Trage un director din [[Exploratorul de fișiere|Exploratorul de fișiere]] pentru a adăuga toate fișierele din acel director în pânză.

### Editează un card

Dă dublu clic pe un card de text sau de notă pentru a începe să-l editezi. Selectează oriunde în afara cardului pentru a opri editarea. Poți apăsa și `Escape` pentru a opri editarea unui card.

Poți edita un card și dând clic dreapta pe el și selectând **Edit**. Sau, selectează cardul și apoi selectează **Edit** ![[lucide-square-pen.svg#icon]] în controalele de selecție.

### Șterge un card

Elimină cardurile selectate dând clic dreapta pe oricare dintre ele și apoi selectând **Remove**. Sau, apasă `Backspace` (sau `Delete` pe macOS).

Poți selecta și **Remove** ![[lucide-trash-2.svg#icon]] în controalele de selecție de deasupra selecției tale.

### Înlocuiește carduri

Poți înlocui un card de notă sau media cu un alt card de același tip.

Pentru a înlocui un card de notă:

1. Dă clic dreapta pe cardul pe care vrei să-l înlocuiești.
2. Selectează **Swap file**.
3. Selectează nota cu care vrei să-l înlocuiești.

## Selectează carduri

Selectează carduri individuale sau trage o selecție în jurul mai multor carduri.

Poți adăuga și elimina carduri dintr-o selecție existentă apăsând `Shift` și selectându-le.

Apasă `Ctrl+a` (sau `Cmd+a` pe macOS) pentru a selecta toate cardurile din pânză.

Pentru a derula conținutul unui card, trebuie mai întâi să-l selectezi.

### Aranjează carduri

Trage un card selectat pentru a-l muta.

Apasă `Alt` (sau `Option` pe macOS) și trage pentru a duplica selecția.

Poți apăsa `Shift` în timp ce tragi pentru a muta doar într-o singură direcție.

Apasă `Space` în timp ce muți o selecție pentru a dezactiva alinierea automată.

Selectarea unui card îl mută în prim-plan.

### Redimensionează un card

Trage oricare dintre marginile unui card pentru a-l redimensiona.

Poți apăsa `Space` în timp ce redimensionezi pentru a dezactiva alinierea automată.

Pentru a păstra raportul de aspect în timpul redimensionării, apasă `Shift` în timp ce redimensionezi.

### Aliniază și aranjează carduri

Pentru a alinia mai multe carduri, selectează două sau mai multe carduri. În controalele de selecție, selectează **Align** și apoi alege o opțiune.

- **Align left**, **Align center** și **Align right** aliniază cardurile pe o linie verticală.
- **Align top**, **Align middle** și **Align bottom** aliniază cardurile pe o linie orizontală.
- **Arrange in a row**, **Arrange in a column** și **Arrange in a grid** mută cardurile în acel aranjament.
- **Distribute horizontal spacing** și **Distribute vertical spacing** spațiază cardurile uniform.
- **Justify horizontally** și **Justify vertically** redimensionează fiecare card pentru a se potrivi cu lățimea sau înălțimea totală a selecției.

## Conectează carduri

Trasează linii între carduri pentru a arăta relații. Adaugă culori și etichete pentru a descrie modul în care se relaționează.

### Conectează două carduri

Pentru a conecta două carduri cu o linie direcționată:

1. Plasează cursorul deasupra uneia dintre marginile unui card până vezi un cerc plin.
2. Trage cercul spre marginea unui alt card pentru a le conecta.

> [!tip]- Creează un card dintr-o conexiune nouă
> Dacă tragi linia fără să o conectezi la alt card, poți crea un card nou la celălalt capăt.

### Deconectează două carduri

Pentru a elimina conexiunea dintre două carduri:

1. Plasează cursorul deasupra unei linii de conexiune până apar două cercuri mici pe linie.
2. Trage unul dintre cercuri de pe card fără să-l conectezi la alt card.

Poți deconecta două carduri și dând clic dreapta pe linia dintre ele și apoi selectând **Remove**. Sau, selectează linia și apoi apasă `Backspace` (sau `Delete` pe macOS).

### Conectează un card la un card diferit

Pentru a muta unul dintre capetele unei linii de conexiune:

1. Plasează cursorul deasupra unei linii de conexiune până apar două cercuri mici pe linie.
2. Trage cercul spre un alt card pentru a-l reconecta.

### Navighează o conexiune

Dacă două carduri conectate sunt la mare distanță, poți sări la cardul de la celălalt capăt al conexiunii. Dă clic dreapta pe linie aproape de un capăt și apoi selectează **Follow connection**. Pânza se mută la cardul de la capătul opus.

### Adaugă o etichetă la o conexiune

Poți adăuga o etichetă la o linie pentru a descrie relația dintre două carduri.

Pentru a eticheta o conexiune:

1. Dă dublu clic pe linie.
2. Introdu eticheta și apoi apasă `Escape` sau selectează oriunde pe pânză.

Poți eticheta o conexiune și selectând-o și apoi selectând **Edit label** din controalele de selecție.

Pentru a edita eticheta unei conexiuni, dă dublu clic pe linie sau dă clic dreapta pe linie și apoi selectează **Edit label**.

Pentru a elimina o etichetă, selectează conexiunea și apoi selectează **Remove label** în controalele de selecție.

### Schimbă direcția unei conexiuni

În mod implicit, o conexiune are o săgeată la capătul care indică spre al doilea card. Pentru a schimba acest lucru:

1. Selectează conexiunea.
2. În controalele de selecție, selectează **Line direction**.
3. Alege **Nondirectional**, **Unidirectional** sau **Bidirectional**.

### Schimbă culoarea unui card sau a unei conexiuni

1. Selectează cardurile sau conexiunile pe care vrei să le colorezi.
2. În controalele de selecție, selectează **Set color** ![[lucide-palette.svg#icon]].
3. Selectează o culoare.

## Grupează carduri

### Grupează cardurile selectate

Pentru a crea un grup gol:

- Dă clic dreapta pe pânză și apoi selectează **Create group**.

Pentru a grupa carduri înrudite:

1. Selectează cardurile.
2. Dă clic dreapta pe oricare dintre cardurile selectate și apoi selectează **Create group**.

**Redenumește grupul:** Dă dublu clic pe numele grupului pentru a-l edita, apoi apasă `Enter` pentru a salva.

### Adaugă un fundal unui grup

Poți afișa o imagine în spatele cardurilor dintr-un grup.

1. Selectează grupul.
2. În controalele de selecție, selectează **Set background**.
3. Alege o imagine din seiful tău.

Pentru a schimba fundalul, selectează grupul și apoi selectează **Edit background**.

- **Replace background** alege o imagine diferită.
- **Remove background** elimină imaginea.
- **Cover** face imaginea să umple grupul.
- **Keep aspect ratio** păstrează proporțiile imaginii.
- **Repeat** repetă imaginea pe toată suprafața grupului.

## Navighează pe pânză

Folosește deplasarea și mărirea/micșorarea pentru a te deplasa pe pânză.

### Deplasează-te pe pânză

Pentru a muta pânza vertical și orizontal, cunoscut și sub numele de _panning_, poți folosi oricare dintre următoarele metode:

- Apasă `Space` și trage pânza.
- Trage pânza folosind butonul din mijloc al mouse-ului.
- Derulează mouse-ul pentru a te deplasa vertical și apasă `Shift` în timp ce derulezi pentru a te deplasa orizontal.

### Mărește sau micșorează pânza

Pentru a mări sau micșora pânza, apasă `Space` sau `Ctrl` (sau `Cmd` pe macOS) și derulează cu rotița mouse-ului. Sau, selectează **Zoom in** ![[lucide-plus.svg#icon]] și **Zoom out** ![[lucide-minus.svg#icon]] din controalele de mărire din colțul din dreapta sus.

#### Mărește pentru a se potrivi

Pentru a mări pânza astfel încât fiecare element să fie vizibil, selectează **Zoom to fit** ![[lucide-maximize.svg#icon]]. Sau, folosește combinația de taste `Shift+1`.

#### Mărește la selecție

Pentru a mări pânza astfel încât toate elementele selectate să fie vizibile, dă clic dreapta pe un card selectat și apoi selectează **Zoom to selection**. Sau, apasă `Shift+2`.

#### Resetează mărirea

Pentru a readuce nivelul de mărire la valoarea implicită, selectează **Reset zoom** în controalele de mărire din colțul din dreapta sus.


### Salt la un grup

Pentru a te deplasa direct la un grup într-o pânză mare, deschide paleta de comenzi și selectează **Canvas: Jump to group**. Apare o listă cu grupurile din pânza ta. Selectează grupul la care vrei să ajungi, iar pânza se mută pentru a-l centra.

## Setările pânzei

Selectează **Canvas settings** ![[lucide-settings.svg#icon]] deasupra controalelor pânzei pentru a schimba modul în care se comportă pânza ta.

- **Snap to grid** aliniază cardurile la grila de fundal când le muți și le redimensionezi.
- **Snap to objects** aliniază cardurile la cardurile din apropiere când le muți și le redimensionezi.
- **Read-only** împiedică modificările pe pânză.

## Exportă o pânză ca imagine

Poți exporta o pânză ca imagine PNG pe desktop. Exportarea imaginii nu este disponibilă în aplicația Obsidian pe mobil.

1. Deschide pânza pe care vrei să o exporți.
2. Deschide paleta de comenzi și selectează **Canvas: Export as image**.
3. Alege setările.
    - **Viewport** stabilește ce să se exporte. Selectează **Full canvas** pentru întreaga pânză sau **Viewport only** pentru partea vizibilă în prezent.
    - **Zoom** stabilește calitatea imaginii. O mărire mai mare produce o imagine mai mare și mai clară. Dialogul afișează dimensiunea estimată a imaginii.
    - **Show logo** adaugă un logo Obsidian în stânga jos. Această opțiune este activată implicit.
    - **Privacy mode** ascunde tot textul de pe pânza ta. Această opțiune este dezactivată implicit.
4. Selectează **Save**.
5. Alege unde să salvezi fișierul. Numele fișierului este implicit numele pânzei tale, cu extensia `.png`.

Nu poți exporta o pânză goală.

## Anulează și refă

Pentru a anula ultima modificare, selectează **Undo** în controalele pânzei din partea dreaptă a pânzei. Sau, apasă `Ctrl+Z` (Windows și Linux) sau `Command+Z` (macOS).

Pentru a reface o modificare, selectează **Redo**. Sau, apasă `Ctrl+Y` sau `Ctrl+Shift+Z` (Windows și Linux), sau `Command+Y` sau `Command+Shift+Z` (macOS).

## Ajutor pentru pânză

Pe desktop, selectează **Canvas help** ![[lucide-help-circle.svg#icon]] sub controalele pânzei pentru a vedea o listă cu scurtăturile pentru deplasare, mărire, selectare și mutare a cardurilor.

## Încorporează o pânză

Poți încorpora o pânză într-o notă folosind sintaxa standard de încorporare. Pentru mai multe informații, consultă [[Încorporează fișiere#Embed a canvas in a note|Încorporează o pânză într-o notă]].

## Folosește Canvas pe mobil

Când deschizi o pânză pe un telefon sau o tabletă, Obsidian afișează trei indicii.

- **Drag to pan**
- **Pinch to zoom**
- **Touch and hold to add / move / select**

### Deschide meniul pânzei

Atinge și ține apăsat pe o zonă goală a pânzei. Meniul conține aceste elemente.

- **Add card** adaugă un card de text.
- **Add note from vault** adaugă o notă din seiful tău.
- **Add media from vault** adaugă conținut media din seiful tău.
- **Add web page** încorporează o pagină web.
- **Create group** creează un grup gol.
- **Snap to grid**, **Snap to objects** și **Read-only** sunt aceleași opțiuni ca în **Canvas settings**.

### Adaugă carduri

Poți adăuga carduri din meniul pânzei. Poți, de asemenea, să selectezi o pictogramă din partea de jos a pânzei.

- Pictograma de fișier gol adaugă un card de text.
- Pictograma de document adaugă o notă din seiful tău.
- Pictograma de imagine adaugă conținut media din seiful tău.

### Lucrează cu un card selectat

Atinge un card pentru a-l selecta. O bară de instrumente apare deasupra cardului.

- **Remove** ![[lucide-trash-2.svg#icon]] șterge cardul.
- **Set color** ![[lucide-palette.svg#icon]] schimbă culoarea cardului.
- **Zoom to selection** mărește pânza la card.
- **Edit** ![[lucide-square-pen.svg#icon]] editează cardul.

### Mută un card

1. Atinge cardul pentru a-l selecta.
2. Atinge și ține apăsat cardul selectat, apoi trage-l într-o nouă poziție.

### Redimensionează un card

1. Atinge cardul pentru a-l selecta.
2. Trage laturile cardului pentru a-l face mai mare sau mai mic.

### Deschide meniul cardului

Atinge și ține apăsat un card. Meniul conține aceste elemente.

- **Zoom to selection** mărește pânza la card.
- **Edit** editează cardul.
- **Convert to file...** convertește un card de text într-o notă.
- **Duplicate** face o copie a cardului.
- **Remove** șterge cardul.

### Editează un card

Pentru a edita un card de text sau un card de notă, folosește oricare din metode.

- Atinge cardul pentru a-l selecta, apoi atinge-l de două ori. Se deschide tastatura.
- Atinge cardul pentru a-l selecta, apoi selectează **Edit** ![[lucide-square-pen.svg#icon]] în bara de instrumente de deasupra cardului.

### Etichetează o conexiune

1. Atinge linia pentru a o selecta.
2. În bara de instrumente, selectează **Edit label** ![[lucide-square-pen.svg#icon]]. Se deschide tastatura.
3. Introdu eticheta.

Pentru a elimina o etichetă, atinge linia și apoi selectează **Remove label** în bara de instrumente.

### Schimbă direcția unei conexiuni

1. Atinge linia pentru a o selecta.
2. În bara de instrumente, selectează **Line direction**.
3. Alege **Nondirectional**, **Unidirectional** sau **Bidirectional**.

### Deschide meniul liniei

Atinge și ține apăsată o linie care conectează două carduri. Meniul conține aceste elemente.

- **Edit label** adaugă sau schimbă eticheta liniei.
- **Follow connection** mută pânza la cardul de la capătul opus al liniei.
- **Remove** șterge conexiunea.

### Conectează carduri

1. Atinge un card pentru a-l selecta.
2. Trage unul dintre cercurile de pe marginile sale spre un alt card.

Dacă tragi linia și o eliberezi într-o zonă goală, se deschide un meniu cu **Add card** și **Add note from vault**. Selectează una pentru a adăuga un card la capătul liniei.

### Deconectează carduri

Pentru a elimina o conexiune, folosește oricare din metode.

- Atinge linia, apoi selectează **Remove** ![[lucide-trash-2.svg#icon]].
- Trage capătul cu săgeata al liniei înapoi la cardul de la care a pornit. Linia dispare.

### Grupează carduri

Pentru a crea un grup:

1. Atinge și ține apăsat pe o zonă goală a pânzei.
2. Selectează **Create group**.
3. Trage marginile grupului pentru a-i schimba dimensiunea.

Pentru a adăuga carduri într-un grup, trage-le în zona grupului. Când muți grupul, cardurile din interior se mută și ele.

Pentru a redenumi un grup, atinge de două ori numele său. Se deschide tastatura. Introdu noul nume.

### Controalele pânzei

Controalele din partea dreaptă a pânzei schimbă vizualizarea și setările.

- **Zoom in** și **Zoom out** schimbă nivelul de mărire.
- **Reset zoom** readuce pânza la nivelul de mărire implicit.
- **Zoom to fit** afișează fiecare card din pânză.
- **Undo** și **Redo** anulează sau repetă ultima modificare.
- **Canvas settings** conține opțiunile **Snap to grid**, **Snap to objects** și **Read-only**.

## Sfaturi avansate

Am realizat câteva videoclipuri scurte pentru a demonstra câteva cazuri de utilizare avansată a modulului Canvas.

Poți [vedea toate cele 72 de sfaturi aici](https://obsidian.md/canvas#protips). Videoclipurile cu sfaturi sunt vizibile doar pe desktop.
