---
permalink: plugins/file-recovery
publish: true
mobile: true
description: 'File Recovery te ajută să-ți protejezi munca de pierderi accidentale de date, salvând automat instantanee ale notelor tale la intervale regulate.'
aliases:
  - File recovery
---

File recovery este un [[Module de bază|modul integrat]] care îți protejează munca de ștergeri accidentale, coruperea fișierelor sau modificări nedorite, salvând automat instantanee complete ale notelor tale la intervale regulate. File recovery nu este o soluție completă de backup și îți recomandăm să faci și [[Fă copii de rezervă ale fișierelor Obsidian|copii de siguranță]] pentru fișierele tale Obsidian, separat.

Pentru a evita ocuparea a [[#Stocare și performanță|prea mult spațiu]], Obsidian păstrează instantaneele pentru un anumit număr de zile înainte de a le șterge. Instantaneele captează conținutul complet al fișierelor tale, nu doar modificările, permițându-ți să restaurezi orice versiune anterioară.

> [!info]+ Info
> Implicit, instantaneele sunt salvate la un interval minim de 5 minute între ele și sunt păstrate timp de 7 zile. Poți configura ambele intervale sub **[[Setări|Setări]] → Module integrate → File recovery**.

Instantaneele sunt păstrate în [[Cum stochează Obsidian datele#Global settings|setările globale]], în afara seifului, pentru a ține cont de pierderea datelor legate de seif. Aceasta înseamnă că instantaneele sunt stocate cu calea absolută către notă. Dacă ți-ai mutat seiful recent, s-ar putea să fie nevoie să-l muți înapoi la locația unde se afla atunci când a fost făcut instantaneul.

> [!tip] Dacă folosești [[Introducere în Obsidian Sync|Obsidian Sync]] sau [[Sincronizează-ți notițele pe toate dispozitivele|alte servicii de sincronizare]], instantaneele File recovery nu se vor sincroniza între dispozitive. Instantaneele sunt specifice fiecărui dispozitiv și rămân locale pe acel dispozitiv.

## Recuperează un instantaneu

1. Deschide **[[Setări|Setări]]**.
2. În bara laterală, selectează **File recovery** sub **Module integrate**.
3. Sub **Snapshots**, selectează **View**.
4. În câmpul cu numele fișierului, începe să scrii numele fișierului pe care vrei să-l recuperezi și vei vedea o listă de sugestii.
5. Selectează fișierul, apasă Enter și vei vedea o listă cu instantaneele disponibile.
6. Selectează instantaneul pe care vrei să-l recuperezi.
    1. Dacă vrei să copiezi și să lipești într-o notă nouă, selectează butonul **Copy**.
    2. Dacă vrei să restaurezi complet fișierul, selectează butonul **Restore**.
7. Poți opțional afișa diferențele dintre instantanee comutând **Show changes**. Aceasta afișează ce conținut a fost adăugat, eliminat sau modificat între versiunile instantaneelor.

## Golește istoricul instantaneelor

> [!danger] Golirea istoricului instantaneelor șterge ireversibil toate instantaneele din seiful tău.

1. Deschide **[[Setări|Setări]]**.
2. În bara laterală, selectează **File recovery** sub **Module integrate**.
3. Sub **Clear history**, selectează **Clear**.
4. Confirmă că vrei să ștergi toate instantaneele, dând clic pe **Clear**.

## Stocare și performanță

Instantaneele File recovery folosesc de obicei un spațiu minim pe disc, deoarece stochează doar fișierele modificate. Totuși, în seifuri cu multe fișiere mari sau editări frecvente, instantaneele se pot acumula în timp. Monitorizează-ți utilizarea spațiului de stocare și ajustează perioada de păstrare dacă este necesar.

## Limitări

- **Modul blocare Apple**: Această funcție nu este disponibilă pe dispozitivele Apple cu [modul Lockdown](https://support.apple.com/en-us/105120) activat, decât dacă Obsidian este exceptat.
- **Tipuri de fișiere**: Doar fișierele `.md` și `.canvas` pot fi restaurate folosind File recovery.
- **Locația seifului**: Dacă îți muți seiful într-o locație diferită fără să folosești [[Gestionează seifurile#Move vault to a different folder|comutatorul de seifuri]], este posibil ca instantaneele existente să nu mai fie accesibile.

