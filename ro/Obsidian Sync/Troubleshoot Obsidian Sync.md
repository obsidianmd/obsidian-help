---
permalink: sync/troubleshoot
cssclasses:
  - soft-embed
publish: true
mobile: true
description: Această pagină listează problemele mai puțin obișnuite pe care le poți întâlni cu Obsidian Sync și modul de rezolvare a acestora.
---

Această pagină listează problemele mai puțin obișnuite pe care le poți întâlni cu [[Introduction to Obsidian Sync|Obsidian Sync]] și modul de rezolvare a acestora. Înainte de a continua, recomandăm să consulți paginile [[Status icon and messages]] și [[Frequently asked questions]].

## General

### Rezolvarea conflictelor

Un conflict apare atunci când modifici același fișier pe două sau mai multe dispozitive înainte ca acestea să se sincronizeze. De exemplu, editezi o notă pe computerul tău. Înainte ca acea modificare să fie încărcată, modifici și tu aceeași notă pe telefonul tău.

Conflictele apar mai des atunci când lucrezi offline. Există mai multe modificări și un interval mai lung între sincronizări, ceea ce crește șansele de conflicte.

#### Cum gestionează Obsidian Sync conflictele

Când Obsidian Sync detectează un conflict, rezultatul depinde de tipul fișierului:

- **Fișiere Markdown**: Obsidian Sync îmbină modificările folosind algoritmul [diff-match-patch](https://github.com/google/diff-match-patch) al Google.
- **Alte tipuri de fișiere**: Pentru toate celelalte fișiere, inclusiv pânzele, Obsidian folosește o abordare de tip „ultima modificare câștigă”. Versiunea modificată cel mai recent înlocuiește versiunile anterioare.

Pentru conflictele din setările Obsidian, precum setările modulelor, Obsidian Sync îmbină fișierele JSON. Aplică cheile din JSON-ul local peste JSON-ul de la distanță.

#### Opțiuni de rezolvare a conflictelor

Începând cu Obsidian 1.9.7, poți alege cum să gestionezi conflictele. Pentru a configura această setare:

1. Deschide **[[Settings]]**.
2. În bara laterală, selectează **Sync**.
3. La **[[Sync settings and selective syncing#Rezolvarea conflictelor|Rezolvarea conflictelor]]**, alege opțiunea preferată:
   - **Îmbinare automată** (implicit): Obsidian Sync combină toate modificările de pe diferite dispozitive într-un singur fișier. Aceasta salvează toate editările, dar poate crea uneori text duplicat sau probleme de formatare. Va trebui să le corectezi manual.
   - **Creează fișier de conflict**: Când Obsidian detectează modificări aflate în conflict, creează un fișier separat de conflict în loc să le îmbine automat. Poți apoi revizui ambele versiuni și le poți îmbina tu însuți. Acest lucru îți oferă control total asupra rezultatului final.

> [!warning]+ Configurează pe toate dispozitivele
> Setările de rezolvare a conflictelor sunt specifice fiecărui dispozitiv. Trebuie să configurezi opțiunea preferată pe fiecare dintre dispozitivele tale. Acest lucru asigură același comportament pe toate dispozitivele tale sincronizate.

**Model de denumire a fișierelor de conflict**

Când folosești opțiunea „Creează fișier de conflict”, Obsidian creează un fișier nou cu acest model de denumire:

```
original-note-name (Conflicted copy device-name YYYYMMDDHHMM).md
```

De exemplu, dacă apare un conflict într-o notă numită `Meeting notes.md`, fișierul de conflict ar putea fi denumit:

```
Meeting notes (Conflicted copy MyMacBook2 202411281430).md
```

Fișierul de conflict conține modificările de pe dispozitivul pe care a fost detectat conflictul. Fișierul original păstrează versiunea de la distanță. Poți compara ambele fișiere și îmbina manual conținutul.

> [!info]+ Verifică jurnalul Sync
> Pentru a verifica când au avut loc conflictele, deschide [[Status icon and messages#Jurnalul de activitate Sync|jurnalul Sync]]. Filtrează după „Conflicte de îmbinare” sau caută „Conflict”.

### Sync a șters o notă pe care tocmai am creat-o pe două dispozitive

Obsidian Sync încearcă de obicei să [[#Rezolvarea conflictelor|rezolve conflictele]] prin îmbinarea notelor aflate în conflict pe diferite dispozitive. Totuși, pot apărea probleme pentru utilizatorii care creează sau modifică automat note la pornire. Acest lucru include [[Daily notes|Notele zilnice]] sau atunci când folosești modulul comunitar [Templater](https://github.com/SilentVoid13/Templater).

Dacă creezi o notă local pe un dispozitiv și, în câteva minute, Sync descarcă o versiune la distanță a aceleiași note, Sync va păstra versiunea de la distanță fără a le îmbina pe cele două. În acest caz, poți recupera versiunea locală folosind [[File recovery]].

### Sync nu îmi sincronizează actualizările modulelor și setărilor

Obsidian [[Frequently asked questions#Obsidian Sync reîncarcă automat setările mele?|nu reîncarcă instant toate setările]]. După ce actualizezi setările sau modulele, trebuie să repornești Obsidian pe celelalte dispozitive pentru a vedea modificările. Pe dispozitivele mobile, s-ar putea să fie nevoie să forțezi închiderea aplicației.

> [!example]- Schimbarea unei teme
> - Pe dispozitivul tău principal (de obicei un computer), schimbi tema înapoi la cea implicită de la o temă personalizată.
> - Jurnalul Sync confirmă că fișierele actualizate au fost trimise la seiful la distanță, dar dispozitivul tău mobil încă afișează tema personalizată.
> - Pe dispozitivul mobil, verifică jurnalul Sync pentru a confirma primirea fișierului `appearance.json` actualizat.
> - Reîncarcă sau repornește Obsidian pe dispozitivul mobil.
> - După reîncărcare sau repornire, dispozitivul mobil ar trebui să afișeze aceeași temă ca și computerul tău.

### Fișierele mele continuă să dispară din Sync imediat ce le restaurez

Această problemă este cea mai frecventă pe Windows. Windows Defender poate pune în carantină fișiere cu blocuri de cod, ceea ce face ca anumite note să dispară.

O altă cauză comună este dubla sincronizare. Aceasta se întâmplă atunci când Obsidian Sync rulează alături de un alt serviciu de sincronizare.

![[Switch to Obsidian Sync#Mută-ți seiful din serviciul tău de sincronizare terț sau din stocarea cloud]]

---

În sfârșit, acest lucru se poate întâmpla atunci când restaurezi un fișier pe un dispozitiv, dar apoi este eliminat de pe un dispozitiv secundar. Acest lucru se întâmplă când numele fișierului conține [[Status icon and messages#Mesaje omise|caractere nevalide]].

## Android

**Dispozitivul meu îmi șterge atașamentele pe care le primesc prin Sync**

Această problemă se datorează probabil faptului că Google sau Android Photos gestionează atașamentele tale. Pentru a preveni ca sistemul să modifice fișierele primite prin Sync, adaugă un [fișier `.nomedia` în seiful tău](https://support.google.com/android/thread/60342076/what-are-these-nomedia-files?hl=en) pe dispozitivul tău Android.

> [!tip]- Folosește un modul
> Modulul comunitar [Android Nomedia](https://community.obsidian.md/plugins/android-nomedia) facilitează acest lucru. Instalează-l pe telefonul tău Android. Reține că fișierele `.nomedia` nu sunt sincronizate pe dispozitive prin Obsidian Sync.
