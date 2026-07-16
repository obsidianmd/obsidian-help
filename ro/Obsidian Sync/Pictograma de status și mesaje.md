---
permalink: sync/messages
publish: true
mobile: true
description: Această pagină explică pictogramele de stare Obsidian Sync și oferă detalii despre jurnalul de activitate al sincronizării.
aliases:
  - Status icon and messages
---

Obsidian Sync oferă mai multe elemente pentru a indica starea sincronizării, în principal [[#Pictograma de stare Sync]] și [[#Jurnalul de activitate Sync]]. Detaliile despre controlul versiunilor în Obsidian Sync sunt tratate pe pagina [[Istoricul versiunilor]].

## Pictograma de stare Sync

Pictograma de stare Sync se află în [[Bara de status|bara de stare]] pe versiunea desktop și în [[Bara laterală#Open hidden sidebars|bara laterală din dreapta]] pe mobil și tabletă. Pictograma reflectă diverse stări de sincronizare:

- ![[obsidian-icon-sync-synced.svg#icon]] **Sincronizat**: Obsidian Sync ți-a sincronizat complet fișierele. Această pictogramă este de obicei verde.
- ![[obsidian-icon-sync-syncing.svg#icon]] **Se sincronizează**: Obsidian actualizează în prezent seiful la distanță. Această pictogramă este de obicei violet.
- ![[obsidian-icon-sync-paused.svg#icon]] **În pauză**: Sincronizarea a fost pusă în pauză, dar Obsidian este încă conectat la seiful la distanță. Pictograma este de obicei violet.
- ![[obsidian-icon-sync-disconnected.svg#icon]] **Deconectat**: Modulul integrat Sync este activ, dar [[Seifuri locale și la distanță|seiful local]] nu este conectat la un seif la distanță. Această pictogramă este de obicei roșie.

Făcând clic sau atingând pictograma se deschide un meniu contextual cu următoarele opțiuni:
- ![[obsidian-icon-sync-paused.svg#icon]] Pauză (sau ![[lucide-circle-play.svg#icon]] Reia dacă este în pauză)
- ![[lucide-history.svg#icon]] [[Istoricul versiunilor]] (Estompat dacă nu vizualizezi o notă)
- ![[lucide-align-left.svg#icon]] Deschide [[#Jurnalul de activitate Sync|Jurnalul Sync]]
- ![[lucide-trash-2.svg#icon]] [[Istoricul versiunilor#Restaurează un fișier șters|Fișiere șterse]]
- ![[lucide-cog.svg#icon]] [[Setări Sync și sincronizare selectivă|Setări Sync]]

## Jurnalul de activitate Sync

Obsidian Sync include un jurnal de sincronizare detaliat care urmărește toate interacțiunile dintre fișierele tale locale și seiful la distanță. Jurnalul afișează încărcările, descărcările, ștergerile și orice probleme, precum conflictele de îmbinare sau problemele de conectivitate.

**Accesează jurnalul de activitate:**
- Clic pe pictograma de stare Sync din bara de stare
- Accesează **[[Setări]] → Sync → Jurnal de activitate**
- Folosește **Paleta de comenzi → Sync: Deschide jurnalul de activitate**

Jurnalul oferă marcaje temporale și detalii pentru fiecare operațiune de sincronizare, fiind util pentru depanarea problemelor de sincronizare.

> [!warning] Jurnalul Sync nu persistă după închiderea Obsidian. Dacă întâmpini o problemă, asigură-te că copiezi jurnalul _înainte_ de a închide aplicația.

Jurnalul clasifică mesajele în următoarele tipuri:

- [[#Mesaje generale]]
- [[#Mesaje de eroare]]
- [[#Mesaje omise]]
- [[#Mesaje de cont]]

Poți filtra jurnalul Sync după **Toate**, **Erori**, **Omise** și **Conflicte de îmbinare**. În plus, poți căuta în jurnalul Sync folosind caseta de căutare din fereastra Sync.

> [!summary] Am inclus mai jos câteva dintre mesajele posibile pe care le-ai putea întâlni. Lista nu este exhaustivă. Dacă întâmpini o problemă și ai un mesaj din jurnalul Sync de care nu ești sigur, [[Ajutor și suport#Contact Obsidian support|contactează asistența Obsidian]].

### Mesaje generale

Acestea sunt mesaje comune, întâlnite zi de zi.

**Se conectează la server**  
Obsidian încearcă să se conecteze la [[Obsidian Sync/Securitate și confidențialitate#Unde pot găsi serverul meu Sync curent și unde este găzduit?|serverul Sync]] al seifului tău la distanță.

**Conectat la server. Se detectează modificările...**  
Obsidian a stabilit o conexiune și compară seiful local cu seiful la distanță pentru a determina dacă sunt necesare modificări.

> [!info] Acest mesaj poate indica, de asemenea, alte probleme Sync potențiale. Dacă îl vezi în mod repetat și crezi că mai sunt elemente de sincronizat, [[Ajutor și suport#Contact Obsidian support|contactează asistența Obsidian]].

**Sincronizat complet**  
- Seifurile local și la distanță sunt complet sincronizate.

**Se îmbină fișierul aflat în conflict**  
A fost detectat un conflict în timpul sincronizării, iar fișierul a fost îmbinat în loc să fie suprascris. Consultă [[Depanează Obsidian Sync#Rezolvarea conflictelor|rezolvarea conflictelor]] pentru mai multe informații. Dacă îmbinarea este nedorită, poți restaura versiuni anterioare prin [[Istoricul versiunilor]] sau [[Recuperare fișiere]].

**Modificare de server respinsă**  
Modificările din seiful la distanță sunt mai vechi decât versiunea de pe dispozitivul tău local, așa că versiunea locală este păstrată, iar modificarea de la distanță este ignorată.

### Mesaje de eroare

Acestea sunt mesaje care detaliază o eroare la sincronizarea unui fișier.

**Memorie insuficientă**  
Această problemă apare de obicei pe dispozitivele mobile atunci când nu există suficient spațiu de stocare sau memorie disponibilă pentru a descărca un fișier. Este cel mai frecventă la fișierele mari, precum videoclipurile.

### Mesaje omise

Acestea sunt mesaje care detaliază ce a fost omis și, posibil, de ce.

**Fișierul nu poate fi descărcat din cauza unui nume nevalid**

Numele fișierului folosește un [caracter special sau o convenție de denumire](https://stackoverflow.com/questions/1976007/what-characters-are-forbidden-in-windows-and-linux-directory-names) pe care sistemul de operare destinatar nu îl poate stoca. Redenumește fișierul pe dispozitivul sursă, apoi lasă Sync să încarce din nou fișierul redenumit.

Pentru seifurile sincronizate pe diferite sisteme de operare, evită următoarele în numele de fișiere și directoare:

- Caractere frecvent rezervate de sistemele de fișiere, precum `/`, `\`, `:`, `*`, `?`, `"`, `<`, `>` și `|`
- Un spațiu sau punct la finalul numelui
- Nume de dispozitive rezervate de Windows, precum `CON`, `PRN`, `AUX`, `NUL`, `COM1` până la `COM9` sau `LPT1` până la `LPT9`
- Caractere pe care Obsidian le folosește pentru legături, precum `#`, `^`, `[` și `]`, dacă dorești nume de note compatibile cu legăturile
- Mai multe puncte `.` într-un nume de fișier, sau emoji, ambele fiind posibil respinse de unele dispozitive Android

Dacă ai dubii, folosește litere, cifre, spații obișnuite în interiorul numelui, cratime `-`, underscore `_` și un singur punct înainte de extensia fișierului.

### Mesaje de cont

Acestea sunt mesaje legate de o modificare a abonamentului sau contului tău.

**Limita seifului a fost depășită**  
Contul tău a depășit [[Întrebări frecvente#Cât de mare poate fi fiecare seif la distanță|dimensiunea maximă de stocare]]. Atașamentele și istoricul versiunilor contribuie la această dimensiune. Chiar dacă seiful tău pare mai mic decât limita, versiunile mai vechi și fișierele îl pot depăși.

Pentru a reduce dimensiunea seifului:
1. Deschide **[[Setări]] → Sync**.
2. Folosește opțiunile de la **Dimensiunea seifului depășește limita** pentru a elimina fișierele mari.

**Seif negăsit**  
`{"res":"err","msg":"Vault not found."}`

Această eroare poate apărea în următoarele cazuri:

1. Seiful a fost șters de pe alt dispozitiv.
2. Abonamentul Sync a fost inactiv timp de peste 30 de zile, ceea ce a cauzat eliminarea seifului la distanță.
3. Abonamentul a fost anulat sau rambursat, rezultând în ștergerea seifului la distanță.
 
În aceste cazuri, va trebui să te [[Configurează Obsidian Sync#Deconectează-te de la un seif la distanță|deconectezi de la seiful la distanță]] și să [[Configurează Obsidian Sync#Creează un nou seif la distanță|creezi un nou seif la distanță]], asigurându-te că datele tale locale sunt păstrate.

**Autentificare eșuată: Abonamentul tău la Obsidian Sync a expirat**  
Contul tău este acum într-o stare complet expirată, deoarece nu am putut procesa plata înregistrată.

Pentru a continua să folosești Obsidian Sync, va trebui să te reabonezi din [contul tău](https://obsidian.md/account/sync).

**Autentificare eșuată: Neautentificat**

Obsidian Sync a detectat că nu ești autentificat în prezent. Va trebui să te autentifici din nou în aplicație, în secțiunea [[Setări#General#Account|Cont]] din **[[Setări]]**.

În unele cazuri, un modul comunitar poate, de asemenea, împiedica Obsidian Sync să poată confirma starea de autentificare a contului tău. Te rugăm să activezi **[[Securitatea modulelor#Restricted mode|Modul restricționat]]** și să încerci din nou.

### Mesaje de rețea

**Deconectat de la server**
`Unable to connect to server`

Obsidian Sync s-a deconectat de la serverul Sync dintr-un motiv necunoscut. Sync va încerca să se reconecteze periodic la server.

Pe iOS, acest mesaj apare sub forma următoarei erori:
`Null is not an object (evaluating 'this.socket.send')`

Are exact aceeași semnificație ca mesajul `Unable to connect to server` și nu indică în niciun fel că altceva ar fi în neregulă.
