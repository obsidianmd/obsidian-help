---
permalink: sync/settings
publish: true
mobile: true
description: Această pagină explică setările Sync și te ghidează în selectarea fișierelor pe care dorești să le sincronizezi.
aliases:
  - Sync settings and selective syncing
---

Când [[Planuri și limite de stocare#Creează un nou seif la distanță|creezi un seif la distanță]] și te [[Configurează Obsidian Sync#Conectează-te la un seif la distanță|conectezi la el]], modulul integrat Sync devine locul unde îți gestionezi seiful la distanță.

## Setări Sync

**Seif la distanță**  
Această secțiune afișează seiful tău la distanță conectat în prezent. Include un buton **Deconectează** pentru a te deconecta de la seiful la distanță și un buton **Gestionează** pentru a vizualiza toate seifurile la distanță la care contul tău are acces (inclusiv seifurile partajate prin [[Colaborează într-un seif partajat|colaborare]]).

> [!warning]+ Seif la distanță într-un serviciu de sincronizare terț
> Dacă seiful tău la distanță se află într-un serviciu de sincronizare terț, vei vedea un mesaj de eroare roșu. Urmează pașii din [[Trece la Obsidian Sync]] pentru a rezolva această problemă.

**Starea sincronizării**  
Afișează starea curentă de sincronizare a seifului la distanță. Această secțiune include fie un buton **Pauză**, fie un buton **Reia**, în funcție de stare.

**Numele dispozitivului**  
Atribuie un nume unic dispozitivului care se sincronizează în prezent. Acest lucru te ajută să urmărești activitatea în [[Pictograma de status și mesaje#Jurnalul de activitate Sync|jurnalul Sync]]. Această setare este specifică dispozitivului, la fel ca [[#Sincronizare selectivă]].

**[[#Rezolvarea conflictelor]]**
Alege modul de rezolvare a conflictelor atunci când modifici un fișier pe mai multe dispozitive. Această setare este specifică dispozitivului, la fel ca [[#Sincronizare selectivă]].

**Fișiere șterse**  
Conține un buton pentru **Vizualizare** sau **Restaurare** fișiere șterse. Pentru mai multe detalii, vezi [[Istoricul versiunilor]].

**Utilizarea stocării**  
Afișează o bară de progres care arată cât din stocarea ta Sync este folosită.

> [!tip]- Timp de procesare server
> Poate dura până la 30 de minute pentru actualizarea utilizării curente, din cauza procesării pe partea de server.

**Contactează asistența**  
Oferă instrucțiuni despre cum să [[Ajutor și suport#Contact Obsidian support|contactezi asistența Obsidian]], inclusiv opțiuni pentru **Copiază informațiile de depanare** și **Trimite e-mail asistenței**.

### Rezolvarea conflictelor

Alege modul de rezolvare a conflictelor atunci când modifici un fișier pe mai multe dispozitive înainte de sincronizare. Poți îmbina automat modificările sau poți crea fișiere separate de conflict pentru revizuire manuală. Vezi [[Depanează Obsidian Sync#Rezolvarea conflictelor|Rezolvarea conflictelor]] pentru detalii despre modul în care funcționează conflictele și cum să configurezi această setare.

> [!warning]+ Configurează pe fiecare dispozitiv
> Această setare trebuie configurată separat pe fiecare dintre dispozitivele tale.

---

Poți alege, de asemenea, ce să sincronizezi din setările modulului integrat Sync. Această secțiune acoperă **sincronizarea selectivă** și **sincronizarea configurării seifului**, împreună cu precauțiile asociate.

## Sincronizare selectivă

Fișierele sincronizate în [[Seifuri locale și la distanță|seiful tău la distanță]] contribuie la [[Întrebări frecvente#Cât de mare poate fi fiecare seif la distanță|limita ta de stocare]]. Implicit, Obsidian Sync activează **sincronizarea selectivă** pentru următoarele tipuri de fișiere:
- Imagini
- Audio
- Videoclipuri
- PDF-uri

Pentru a sincroniza tipuri de fișiere suplimentare, comută opțiunea `Sincronizează toate celelalte tipuri`.

Setările implicite de **sincronizare a configurării seifului** includ:
- Alte tipuri de fișiere
- Setări principale
- Aspect
- Teme și fragmente de cod
- Combinații de taste
- Lista modulelor integrate active
- Setările modulelor integrate

Pentru a sincroniza modulele comunitare, activează manual **Lista modulelor comunitare active** și **Lista modulelor comunitare instalate**.

### Modifică tipurile de fișiere pe care dorești să le sincronizezi

1. Deschide **[[Setări]] → Sync**.
2. La **Sincronizare selectivă**, activează tipurile de fișiere pe care dorești să le sincronizezi.
3. Repornește aplicația pentru a aplica noile setări. Pe mobil sau tabletă, acest lucru poate necesita o închidere forțată.

Reține că [[Planuri și limite de stocare|planul tău Sync]] definește dimensiunea maximă de fișier pe care o poți sincroniza. Planul Standard permite sincronizarea fișierelor de până la 5 MB, în timp ce planul Plus acceptă fișiere de până la 200 MB.

> [!info]+ Fișierele excluse rămân în seiful la distanță
> Adăugarea unui fișier în lista **Fișiere excluse** nu îl elimină din seiful la distanță dacă a fost deja sincronizat. Configurează-ți setările Sync înainte de sincronizare pentru a evita utilizarea inutilă a stocării.

### Exclude un director din sincronizare

Implicit, Obsidian sincronizează toate fișierele și directoarele din seiful tău. Pentru a exclude un anumit director din sincronizare:
1. Deschide **[[Setări]] → Sync**.
2. Lângă **Directoare excluse**, selectează **Gestionează**.
3. Selectează directorul pe care dorești să-l excluzi din listă.
4. Selectează **Gata**.

Pentru a elimina un director din lista de excluderi, selectează butonul ![[lucide-x.svg#icon]] de lângă numele directorului.

#### Întotdeauna excluse din sincronizare

##### Instantanee de recuperare a fișierelor

Instantaneele din modulul [[Recuperare fișiere]] nu sunt sincronizate prin Obsidian Sync, deoarece instantaneele sunt păstrate în [[Cum stochează Obsidian datele#Global settings|setările globale]].

##### Fișiere și directoare ascunse

Fișierele și directoarele care încep cu un `.` sunt tratate ca ascunse și excluse din sincronizare. Singura excepție este [[Directorul de configurare|directorul de configurare]] al seifului (`.obsidian`), care se sincronizează.

Exemple comune de fișiere și directoare ascunse care nu sunt sincronizate:
- `.vscode`
- `.git`
- `.idea`
- `.gitignore`

##### Setări Sync

Setările Sync nu se sincronizează pe toate dispozitivele. Trebuie să le configurezi separat pe fiecare dispozitiv, după cum este necesar.

## Actualizarea setărilor seifului tău sincronizat

Pentru a modifica setările de sincronizare pe mai multe dispozitive, urmează acești pași:

> [!tip]- Dispozitive primare și secundare
> Termenii „primar” și „secundar” pentru dispozitive sunt folosiți doar pentru claritate. Sync nu face nicio diferență între ele.

### Dispozitivul principal

Dispozitivul principal acționează ca sursă de adevăr. Modificările făcute aici sunt sincronizate pe toate celelalte dispozitive.

1. Accesează **[[Setări]] → Sync**.
2. Activează setările dorite la **Sincronizare configurare seif**.
3. Reîncarcă sau repornește Obsidian. Pe mobil sau tabletă, poate fi necesară o închidere forțată.
4. Așteaptă până când setările se sincronizează cu seiful tău la distanță.

### Dispozitivul(ele) secundar(e)

Dispozitivele secundare (precum telefonul tău) primesc actualizări de la dispozitivul principal.

1. Accesează **[[Setări]] → Sync**.
2. Activează setările necesare la **Sincronizare configurare seif**.
3. Așteaptă ca modificările să se descarce din seiful la distanță.
4. Reîncarcă sau repornește aplicația pentru a aplica setările sincronizate. Pe mobil sau tabletă, poate fi necesară o închidere forțată.

### Reîncărcarea setărilor

Anumite setări pot fi reîncărcate instant (hot reload), în timp ce altele necesită o repornire:

- **Reîncărcabile instant**: Majoritatea configurațiilor Obsidian, inclusiv combinațiile de taste și proprietățile, setările de aspect și configurațiile pentru modulele integrate deja activate.
- **Necesită reîncărcare**: Modificările CSS (de ex., [[Fragmente CSS|fragmente CSS]], [[Teme|teme]]), configurațiile afișajului grafic și stările modulelor integrate (de ex., activarea/dezactivarea Note zilnice).

Modulele comunitare, de obicei, nu acceptă reîncărcarea instant și necesită o repornire atunci când sunt aplicate setări noi.

> [!info]+ Pentru dezvoltatorii de module
> Află cum să [integrezi funcționalitatea de reîncărcare instant cu Obsidian Sync](https://docs.obsidian.md/Reference/TypeScript+API/Plugin/onExternalSettingsChange).

## Profiluri de setări

Obsidian Sync poate sincroniza mai multe [[Directorul de configurare|directoare de configurare]] cu același seif la distanță, permițându-ți să creezi profiluri separate (de ex., unul pentru mobil, altul pentru laptop).

### Creează un profil de setări

Pentru a crea un profil de setări nou:

1. Deschide **[[Setări]] → Fișiere și legături**.
2. La **Suprascrie directorul de configurare**, introdu un nume pentru profilul tău, începând cu un punct (`.`), de ex., `.obsidian-mobile`.
3. Repornește Obsidian pentru a aplica modificările.

> [!info]+ Evită redescărcarea modulelor și temelor
> Schimbarea profilului de setări va necesita reconfigurarea setărilor tale Sync. Pentru a evita redescărcarea modulelor și temelor, copiază directorul `.obsidian` existent și redenumește-l pentru a se potrivi cu noul profil (de ex., `.obsidian-mobile`) înainte de a face modificări.
