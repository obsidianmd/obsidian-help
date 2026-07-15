---
permalink: plugins/canvas
description: 'Canvas este un modul integrat pentru notițe vizuale. Aranjează și conectează notițe, imagini și alte fișiere într-un spațiu 2D.'
---
Canvas este un [[Core plugins|modul integrat]] pentru notițe vizuale. Îți oferă un spațiu infinit pentru a aranja notele și a le conecta cu alte note, atașamente și pagini web.

Aranjarea notelor tale într-un spațiu 2D te ajută să vezi și să înțelegi conexiunile dintre ele. Conectează notele cu linii și grupează-le pe cele înrudite.

Obsidian salvează pânzele ca fișiere `.canvas` folosind formatul deschis [JSON Canvas](https://jsoncanvas.org/).

## Creează o pânză nouă

Pentru a începe să folosești Canvas, trebuie mai întâi să creezi un fișier care să conțină pânza ta. Poți crea o pânză nouă folosind următoarele metode.

**Paleta de comenzi:**

1. Deschide [[Command palette|Paleta de comenzi]].
2. Selectează **Canvas: Create new canvas** pentru a crea o pânză în același director cu fișierul activ.

**Exploratorul de fișiere:**

- În [[File explorer|Exploratorul de fișiere]], dă clic dreapta pe directorul în care vrei să creezi pânza.
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
> Cardurile doar de text nu apar în [[Backlinks|Referințe]]. Pentru a le face să apară, trebuie să le convertești în fișiere.

### Adaugă carduri din note

Pentru a adăuga o notă din seiful tău în pânza ta:

1. Selectează sau trage pictograma de document din partea de jos a pânzei.
2. Selectează nota pe care vrei să o adaugi.

Poți adăuga note și din meniul contextual al pânzei:

1. Dă clic dreapta pe pânză și apoi selectează **Add note from vault**.
2. Selectează nota pe care vrei să o adaugi.

Poți trage note și din [[File explorer|Exploratorul de fișiere]] în pânză.

### Adaugă carduri din fișiere media

Pentru a adăuga conținut media din seiful tău în pânza ta:

1. Selectează sau trage pictograma de fișier imagine din partea de jos a pânzei.
2. Selectează fișierul media pe care vrei să-l adaugi.

Poți adăuga fișiere media și din meniul contextual al pânzei:

1. Dă clic dreapta pe pânză și apoi selectează **Add media from vault**.
2. Selectează fișierul media pe care vrei să-l adaugi.

Poți trage fișiere media și din [[File explorer|Exploratorul de fișiere]] în pânză.

### Adaugă carduri din pagini web

Pentru a încorpora o pagină web în pânza ta:

1. Dă clic dreapta pe pânză și apoi selectează **Add web page**.
2. Introdu adresa URL a paginii web și apoi selectează **Save**.

Poți, de asemenea, să selectezi o adresă URL în browserul tău și apoi să o tragi în pânză pentru a o încorpora într-un card.

Pentru a deschide pagina web în browserul tău, apasă `Ctrl` (sau `Cmd` pe macOS) și selectează eticheta cardului. Sau, dă clic dreapta pe card și selectează **Open in browser**.

### Adaugă carduri din directoare

Trage un director din [[File explorer|Exploratorul de fișiere]] pentru a adăuga toate fișierele din acel director în pânză.

### Editează un card

Dă dublu clic pe un card de text sau de notă pentru a începe să-l editezi. Selectează oriunde în afara cardului pentru a opri editarea. Poți apăsa și `Escape` pentru a opri editarea unui card.

Poți edita un card și dând clic dreapta pe el și selectând **Edit**.

### Șterge un card

Elimină cardurile selectate dând clic dreapta pe oricare dintre ele și apoi selectând **Delete**. Sau, apasă `Backspace` (sau `Delete` pe macOS).

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

Dacă două carduri conectate sunt la mare distanță, poți naviga la sursa sau la ținta conexiunii dând clic dreapta pe linie și apoi selectând **Go to target** sau **Go to source**.

### Adaugă o etichetă la o conexiune

Poți adăuga o etichetă la o linie pentru a descrie relația dintre două carduri.

Pentru a eticheta o conexiune:

1. Dă dublu clic pe linie.
2. Introdu eticheta și apoi apasă `Escape` sau selectează oriunde pe pânză.

Poți eticheta o conexiune și selectând-o și apoi selectând **Edit label** din controalele de selecție.

Pentru a edita eticheta unei conexiuni, dă dublu clic pe linie sau dă clic dreapta pe linie și apoi selectează **Edit label**.

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

## Încorporează o pânză

Poți încorpora o pânză într-o notă folosind sintaxa standard de încorporare. Pentru mai multe informații, consultă [[Embed files#Embed a canvas in a note|Încorporează o pânză într-o notă]].

## Sfaturi avansate

Am realizat câteva videoclipuri scurte pentru a demonstra câteva cazuri de utilizare avansată a modulului Canvas.

Poți [vedea toate cele 72 de sfaturi aici](https://obsidian.md/canvas#protips). Videoclipurile cu sfaturi sunt vizibile doar pe desktop.
