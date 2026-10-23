---
permalink: plugins/note-composer
aliases:
  - Note composer
---
Note composer este un [[Module de bază|modul integrat]] care îți permite să îmbini două note sau să extragi o parte dintr-o notă într-o notă nouă.

## Îmbină note

Îmbinarea notelor adaugă o notă la alta și o elimină pe prima. Note composer actualizează toate legăturile pentru a face referire la nota îmbinată.

Când selectezi nota în care vrei să îmbini, poți alege dintre următoarele metode:

- `Enter`: Adaugă nota sursă la _sfârșitul_ notei destinație.
- `Shift+Enter`: Adaugă nota sursă la _începutul_ notei destinație.
- `Ctrl+Enter` (sau `Cmd+Enter` pe macOS): Creează o notă nouă cu conținutul notei sursă.

Pentru a îmbina nota activă cu o altă notă din seiful tău:

**Explorator de fișiere**

1. În Exploratorul de fișiere, dă clic dreapta pe nota pe care vrei să o îmbini.
2. Dă clic pe **Merge entire file with...**.
3. Selectează nota în care vrei să o îmbini.
4. Dă clic pe **Merge** pentru a confirma.

**Paleta de comenzi**

1. Deschide [[Paleta de comenzi|Paleta de comenzi]].
2. Selectează **Note composer: Merge current file with another file...**.
3. Selectează nota în care vrei să o îmbini.
4. Dă clic pe **Merge** pentru a confirma.

> [!tip] Sfat
> Implicit, Note composer îți cere confirmarea atunci când îmbini note. Dacă dezactivezi confirmarea și îmbini o notă din greșeală, o poți totuși recupera cu modulul [[Recuperare fișiere]].

## Extrage o notă

Când selectezi nota în care vrei să extragi selecția, poți alege dintre următoarele metode:

- `Enter`: Adaugă textul selectat la _sfârșitul_ notei destinație.
- `Shift+Enter`: Adaugă textul selectat la _începutul_ notei destinație.
- `Ctrl+Enter` (sau `Cmd+Enter` pe macOS): Creează o notă nouă cu textul selectat.

Pentru a extrage text într-o notă nouă:

**Editor**

1. În **Modul de editare**, selectează textul pe care vrei să-l extragi.
2. Dă clic dreapta pe textul selectat.
3. Dă clic pe **Extract current selection...**.
4. Selectează nota în care vrei să extragi.

**Paleta de comenzi**

1. În **Modul de editare**, selectează textul pe care vrei să-l extragi.
2. Deschide [[Paleta de comenzi|Paleta de comenzi]].
3. Selectează **Note composer: Extract current selection...**.
4. Selectează nota în care vrei să extragi.

> [!tip] Sfat
> Implicit, Note composer înlocuiește textul extras cu o legătură către nota destinație. În setări, poți schimba și să [[Încorporează fișiere|încorporezi]] nota destinație în loc, sau să nu lași nimic în urmă.

## Fișier șablon

Configurând un șablon, poți personaliza conținutul înainte de a-l adăuga la nota nouă. Pentru a folosi un șablon, introdu o **Locație a fișierului șablon** în setările modulului.

Șablonul poate conține următoarele variabile:

| Variabilă         | Descriere                                                                                                                                              |
|-------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------|
| `{{content}}`     | Conținutul de îmbinat, sau textul selectat extras. Dacă nu incluzi această variabilă, Note composer adaugă conținutul la finalul șablonului. |
| `{{fromTitle}}`   | Numele notei sursă.                                                                                                                                 |
| `{{newTitle}}`    | Numele notei destinație. De exemplu, pentru a adăuga numele fișierului ca titlu în partea de sus a fișierului.                                                     |
| `{{date:FORMAT}}` | Data creării noii note. De exemplu, `{{date:YYYY-MM-DD}}`.                                                                                                       |
