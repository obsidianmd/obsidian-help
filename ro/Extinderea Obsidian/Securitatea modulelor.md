---
permalink: plugin-security
aliases:
  - Plugin security
---
Echipa Obsidian tratează securitatea cu maximă seriozitate. Această pagină explică riscurile implicate la instalarea modulelor comunității și ce face echipa Obsidian pentru a le aborda.

## Modul restricționat

Implicit, Obsidian rulează în Modul restricționat pentru a preveni executarea de cod terț. Dezactivați Modul restricționat doar dacă aveți încredere în autorii modulelor pe care le instalați.

Pentru a dezactiva Modul restricționat:

1. Deschideți **[[Setări]]**.
2. În meniul lateral, selectați **Module ale comunității**.
3. Selectați **Activează modulele comunității**.

Pentru a activa Modul restricționat:

1. Deschideți **[[Setări]]**.
2. În meniul lateral, selectați **Module ale comunității**.
3. Lângă **Modul restricționat**, selectați **Activează**.

Modulele instalate rămân în seif chiar dacă activați Modul restricționat, dar sunt ignorate de Obsidian.

## Capabilitățile modulelor

Din cauza limitărilor tehnice, Obsidian nu poate restricționa în mod fiabil modulele la permisiuni sau niveluri de acces specifice. Aceasta înseamnă că modulele vor moșteni nivelurile de acces ale Obsidian. Ca urmare, luați în considerare următoarele exemple despre ce pot face modulele comunității:

- Modulele comunității pot accesa fișiere de pe computerul dumneavoastră.
- Modulele comunității se pot conecta la internet.
- Modulele comunității pot instala programe suplimentare.

> [!tip] 
> Dacă lucrați cu date sensibile și doriți să instalați un modul al comunității, vă recomandăm să efectuați un audit de securitate independent al modulului înainte de a-l folosi.

## Procesul de recenzie al modulelor

Toate modulele comunității trebuie să respecte [Politicile pentru dezvoltatori Obsidian](https://docs.obsidian.md/Developer+policies). Obsidian scanează automat fiecare versiune de modul pentru vulnerabilități de securitate, probleme de calitate a codului și programe malware. Pagina fiecărui modul din [directorul de module](https://community.obsidian.md) afișează rezultatele sub forma unui scor de siguranță.

Recenziile manuale continuă pentru modulele populare, promovate și semnalate.

- Dacă descoperiți o vulnerabilitate de securitate într-un modul al comunității, consultați fișierul `security.md` sau `readme.md` al autorului modulului pentru modul de raportare. Pentru defecte critice, raportați problema și către [[Ajutor și suport#Contactează asistența Obsidian|asistența Obsidian]].
- Dacă suspectați că un modul al comunității este malițios, îl puteți semnala direct din pagina sa din director, îl puteți raporta către [[Ajutor și suport#Contactează asistența Obsidian|asistența Obsidian]], sau puteți trimite un mesaj privat moderatorilor noștri.
