---
permalink: sync/setup
cssclasses:
  - soft-embed
publish: true
mobile: true
description: Ai achiziționat Obsidian Sync și ești gata să începi. Acest ghid te va ajuta să configurezi și să ajustezi setările Obsidian Sync pentru utilizarea zilnică.
---
Ai achiziționat Obsidian Sync și ești gata să începi. Acest ghid te va ajuta să configurezi și să ajustezi setările Obsidian Sync pentru utilizarea zilnică.

- **Ești nou la Obsidian Sync?** Vezi: [[#Configurează Obsidian Sync pentru prima dată]]
- **Conectezi un al doilea dispozitiv?** Vezi: [[#Sincronizează un seif la distanță pe alt dispozitiv]]
- **Trebuie să faci modificări?** Vezi: [[#Gestionează-ți seifurile la distanță]]

## Configurează Obsidian Sync pentru prima dată

În această secțiune, vei crea un nou [[Local and remote vaults|seif la distanță]] și îl vei conecta la un seif local existent. Nu este nevoie să creezi un seif local nou, gol, pentru a folosi Obsidian Sync în acest scop.

> [!info] Seiful tău actual se află într-un director iCloud, OneDrive, Dropbox sau alt director de sincronizare? Dacă **da**, sau nu ești **sigur**, te rugăm să citești [[Frequently asked questions#Pot folosi un serviciu de sincronizare terț împreună cu Obsidian Sync?|acest articol]] și [[Switch to Obsidian Sync]] înainte de a continua.

**Cerințe preliminare**

- Un cont Obsidian. Dacă nu ai unul, [înscrie-te acum](https://obsidian.md/auth?returnto=%2Faccount%2Fsync#signup).
- Un [[Plans and storage limits|abonament]] Obsidian Sync activ. Dacă nu ai unul, abonează-te din [panoul de control al contului tău](https://obsidian.md/account/sync).
- **Recomandat**: Un [[Back up your Obsidian files|sistem de backup]] pentru fișierele tale Obsidian. Un serviciu de sincronizare nu este o copie de rezervă.

### Autentifică-te cu contul tău Obsidian

1. Deschide **[[Settings]]**.
2. În bara laterală, selectează **General**.
3. Sub **Cont → Contul tău**, selectează **Autentificare**.
4. La **E-mail**, introdu adresa ta de e-mail.
5. La **Parolă**, introdu parola ta.
6. Selectează **Autentificare**.

### Activează Obsidian Sync

1. Deschide **[[Settings]]**.
2. În bara laterală, sub **Opțiuni**, selectează **Module integrate**.
3. Comută **Sync**.

### Creează un nou seif la distanță

1. Deschide **[[Settings]]**.
2. În bara laterală, selectează **Sync**.
3. Lângă **Seif la distanță**, selectează **Alege**.
4. Selectează **Creează seif nou**.
5. La **Numele seifului**, introdu numele seifului la distanță.
6. La **Regiune**, alege [[Set up Obsidian Sync#Servere de sincronizare regionale|regiunea]] serverului pentru seiful tău la distanță.
7. La **Parolă de criptare**, alege o parolă pentru seiful tău. Aceasta creează un seif criptat integral. Parola seifului este separată de contul tău Obsidian și poate fi diferită pentru fiecare dintre seifurile tale. Pentru mai multe informații, consultă [[Security and privacy]].
8. Selectează **Creează**.

### Conectează-te la un seif la distanță

1. Selectează **Conectează** lângă seiful nou creat.
2. Introdu parola configurată pentru seif în câmpul **Parolă de criptare**, dacă ai optat pentru [[Obsidian Sync/Security and privacy#Ce înseamnă criptarea integrală?|criptare integrală]].
3. Selectează **Deblochează seiful**.
4. **Nu începe încă sincronizarea.** Verifică-ți setările de sincronizare la [[#Ajustează setările Obsidian Sync|ajustează setările Obsidian Sync]].
    - Dacă dorești să începi sincronizarea imediat, treci la [[#Începe sincronizarea cu Obsidian Sync|începe sincronizarea cu Obsidian Sync]].
5. Dacă nu ai făcut-o deja, închide sau ignoră fereastra pop-up care te solicită să **Excluzi directoare** și să **Începi sincronizarea**. Continuă la pasul următor.

#### Ajustează setările Obsidian Sync

1. Navighează la **[[Settings]]** → **Sync**, dacă este necesar.
2. Dacă nu a fost adăugat un nume de dispozitiv, adaugă unul pentru a facilita citirea jurnalelor tale Sync!
3. Comută setările de la **Sincronizare selectivă** și **Sincronizare configurare seif** pentru a indica ce elemente ar trebui sincronizate către și de la seiful la distanță.
    - **Notă**: Dacă te-ai deconectat recent de la un seif la distanță și te reconectezi fără a reporni aplicația, este posibil ca unele setări să fie deja activate.
4. Dacă faci modificări la orice setare, repornește complet Obsidian.
5. După repornirea Obsidian, revino la **[[Settings]]** → **Sync**.

#### Începe sincronizarea cu Obsidian Sync

Dacă începi sincronizarea după conectarea la un seif la distanță, vei vedea un buton **Începe sincronizarea**. Selectează acest buton pentru a începe sincronizarea.

Dacă începi sincronizarea după ajustarea setărilor Obsidian Sync și repornirea aplicației, vei vedea un buton **Reia** în setările Sync. Selectează acest buton pentru a începe sincronizarea.

> [!done] Starea sincronizării
> Când Obsidian Sync termină, un cerc verde cu o bifă ![[obsidian-icon-sync-synced.svg#icon]] apare în colțul din dreapta jos (desktop) sau în bara laterală din dreapta (mobil). Jurnalul Sync va afișa, de asemenea, „Sincronizat complet” ca unul dintre cele mai recente mesaje.
>
> Pentru mai multe detalii despre stările de sincronizare, consultă [[Status icon and messages]].
^obsidian-sync-status

Pentru a conecta alte dispozitive la seiful tău nou creat și sincronizat, treci la [[Set up Obsidian Sync#Sincronizează un seif la distanță pe alt dispozitiv|Sincronizează un seif la distanță pe alt dispozitiv]].

Pentru a afla mai multe despre setări și fișiere, treci la [[Sync settings and selective syncing]].

## Sincronizează un seif la distanță pe alt dispozitiv

În această secțiune, ai creat deja un seif la distanță și ai încărcat date în el. Acum, dorești să-ți conectezi celelalte dispozitive la el.

**Cerințe preliminare**
- Un cont Obsidian. Dacă nu ai unul, [înscrie-te acum](https://obsidian.md/account#mode=signup).
- Un abonament Obsidian Sync activ. Dacă nu ai unul, abonează-te din [panoul de control al contului tău](https://obsidian.md/account).
- Sync activat în setările [[Core plugins]].
- Un seif la distanță activ. Dacă nu ai creat încă unul, te rugăm mai întâi să creezi un [[Set up Obsidian Sync#Creează un nou seif la distanță|seif la distanță]].
- **Recomandat**: Un [[Back up your Obsidian files|sistem de backup]] pentru fișierele tale Obsidian pe dispozitivul cel mai folosit. Un serviciu de sincronizare nu este o copie de rezervă.

### Sincronizează-ți seiful din comutatorul de seifuri

Dacă ai instalat recent Obsidian, când deschizi programul vei fi întâmpinat de [[Manage vaults|comutatorul de seifuri]]. Pentru a crea un nou seif local din conținutul unui seif la distanță, va trebui să urmezi pașii de mai jos.

1. Deschide Obsidian (presupunând că este prima dată când îl deschizi)
2. Selectează una dintre opțiuni, în funcție de instalarea ta:
	1. **Desktop**: În secțiunea care spune Deschide seif din Obsidian Sync, alege **Configurare**
	2. **Mobil/Tabletă**: **Configurează Obsidian Sync**
3. Autentifică-te cu contul tău de utilizator Obsidian
	1. Dacă [[2-factor authentication|autentificarea în doi pași]] este configurată, introdu codul tău 2FA.
4. Ți se va cere să alegi ce seif la distanță dorești să sincronizezi cu acest dispozitiv. Selectează **Conectează**.
5. Ți se va cere să alegi un nume pentru seiful local care va fi creat pe dispozitiv pentru a stoca aceste date. Introdu numele dorit.
	1. Dacă folosești [[Obsidian URI]]-uri, va trebui să folosești același nume ca seiful local de pe celălalt dispozitiv al tău.
6. Selectează **Creează**.
7. Fereastra seifurilor la distanță va apărea momentan pe măsură ce Obsidian Sync se conectează la serverul tău și validează abonamentul. Apoi îți va afișa o fereastră *Configurare conexiune*.
	1. Este recomandat să închizi sau să glisezi în jos această fereastră și să [[#Ajustează setările Obsidian Sync|ajustezi setările Obsidian Sync]] mai întâi.
	2. Dacă modifici orice setare Sync, te rugăm să reîncarci sau să repornești Obsidian.

### Sincronizează-ți seiful din Setările Obsidian

Dacă ai creat deja un seif local pe acest dispozitiv și dorești să conectezi acest seif local la un seif la distanță, instrucțiunile sunt foarte similare cu [[#Configurează Obsidian Sync pentru prima dată|Configurează Obsidian Sync pentru prima dată]].

![[Set up Obsidian Sync#Autentifică-te cu contul tău Obsidian]]

![[Set up Obsidian Sync#Activează Obsidian Sync]]

#### Conectează-te la un seif la distanță

1. Deschide **[[Settings]]**.
2. În bara laterală, selectează **Sync**.
3. Lângă **Alege seiful la distanță**, clic pe **Alege**.
4. Clic pe **Conectează** lângă seiful la distanță la care dorești să te conectezi.
5. La **Parolă de criptare**, introdu parola pentru seiful tău, dacă ai una.
6. Vei fi solicitat să începi sincronizarea. Este recomandat să aștepți și să-ți ajustezi mai întâi setările de sincronizare. Dacă dorești să sincronizezi întregul seif pe dispozitiv așa cum este, poți selecta **Începe sincronizarea**.

> [!warning] Dacă seiful de pe dispozitivul tău conține deja niște note (nerecomandat), vei fi avertizat că acele note vor fi îmbinate înainte de a continua. Conflictele vor fi rezolvate prin [[Troubleshoot Obsidian Sync#Rezolvarea conflictelor|rezolvarea conflictelor Sync]].

![[Set up Obsidian Sync#Ajustează setările Obsidian Sync]]

![[Set up Obsidian Sync#Începe sincronizarea cu Obsidian Sync]]

## Gestionează-ți seifurile la distanță

Ai creat și te-ai conectat la un seif la distanță. Este posibil să fi sincronizat, de asemenea, acest seif la distanță pe mai multe dispozitive. Această secțiune trece în revistă alte instrucțiuni comune de care s-ar putea să ai nevoie pentru gestionarea acestui seif la distanță.

### Deconectează-te de la un seif la distanță

1. Deschide **[[Settings]]** din Obsidian.
2. Selectează **Sync** în bara laterală.
3. Clic pe butonul **Deconectează** lângă seifurile la distanță.

Ești acum deconectat de la seiful la distanță și nu mai sincronizezi pe acest dispozitiv.

### Șterge un seif la distanță

> [!tip] Ștergerea unui seif la distanță nu va șterge datele tale locale de pe dispozitiv.

1. Deschide **[[Settings]]**.
2. În bara laterală, selectează **Sync**.
3. Selectează **Gestionează** lângă Seifuri la distanță. Se va deschide o fereastră cu lista ta de seifuri la distanță.
4. Selectează pictograma coșului de gunoi ![[lucide-trash-2.svg#icon]] lângă seiful la distanță pe care dorești să-l ștergi.
5. Confirmă ștergerea selectând butonul roșu **Șterge**.
6. Seiful tău la distanță a fost șters.

> [!info] Dacă nu este vizibilă nicio pictogramă de coș de gunoi, s-ar putea să fie nevoie mai întâi să te deconectezi de la seiful la distanță. Odată deconectat, selectează butonul **Alege** pentru a deschide lista de seifuri la distanță.

### Servere de sincronizare regionale

Obsidian Sync îți permite să alegi locația de găzduire pentru seiful tău la distanță. Dacă folosești versiunea `1.4.16` sau mai veche a Obsidian, locația va fi aleasă automat pentru tine.

Dacă nu ești sigur unde este regiunea seifului tău curent, consultă [[Obsidian Sync/Security and privacy#Unde pot găsi serverul meu Sync curent și unde este găzduit?|Unde pot găsi serverul meu Sync curent și unde este găzduit?]] pentru îndrumare.

![[sync-regional-sync-servers.png#interface|300]]

După selectarea unei locații, centrul tău de date **nu poate** fi mutat pe un alt server fără reîncărcarea datelor tale. Pentru a schimba regiunile, urmează [[Sync regions|ghidul de regiuni Sync ale seifului]].

![[Obsidian Sync/Security and privacy#^sync-geo-regions]]

## Pașii următori

Iată câteva documente sugerate pentru citire ulterioară.

- Explorează mai multe despre [[Sync settings and selective syncing|selectarea fișierelor și setărilor de sincronizat]].
- Află ce se întâmplă dacă seiful tău la distanță [[Version history|se umple]].
- [[Collaborate on a shared vault|Colaborează]] cu un alt utilizator Obsidian Sync.
- Consultă [[Frequently asked questions|întrebările frecvente Sync]] pentru răspunsuri la întrebări comune.
