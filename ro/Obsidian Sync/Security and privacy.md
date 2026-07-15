---
permalink: sync/security
publish: true
mobile: false
description: Află mai multe despre considerentele de securitate și confidențialitate pentru Obsidian Sync.
---

## Criptare

Pentru siguranța ta, [[Introduction to Obsidian Sync|Obsidian Sync]] criptează [[Local and remote vaults|seiful tău la distanță]] și toate comunicările cu serverele Obsidian.

Când creezi un nou seif la distanță, ai două opțiuni:

- **Criptare integrală (implicită)** oferă cea mai puternică securitate, dar necesită să îți stochezi în siguranță parola de criptare. Aceasta garantează că nimeni — nici măcar echipa Obsidian — nu îți poate accesa notele.
- **Criptare standard** folosește o cheie de criptare gestionată de Obsidian pentru a-ți proteja datele în tranzit și pe serverul nostru.

Recomandăm criptarea integrală pentru toți utilizatorii, deoarece este cea mai privată și sigură opțiune. Totuși, reține că, dacă uiți sau pierzi parola de criptare, datele tale rămân criptate și inutilizabile pentru totdeauna. Noi nu putem recupera parola ta sau nicio dată criptată în locul tău.

Alegerea ta afectează doar seiful tău la distanță. Obsidian nu criptează seiful tău local.

### Ce înseamnă criptarea integrală?

Criptarea integrală înseamnă că datele sunt criptate din momentul în care părăsesc dispozitivul tău și pot fi decriptate doar folosind cheia ta de criptare, odată ajunse pe unul dintre dispozitivele tale.

Noi nu putem citi datele tale. Nici eventualii intruși, precum furnizorul tău de servicii de internet.

În cazul rar al unei breșe complete de securitate a serverului, datele tale rămân criptate — nimeni nu îți poate decripta fișierele fără a-ți cunoaște parola.

### Care sunt riscurile utilizării criptării standard?

Criptarea standard este fundamental mai puțin sigură decât criptarea integrală, dar poate fi o opțiune convenabilă dacă nu te aștepți ca datele pe care le sincronizezi să fie complet private. De exemplu, dacă seiful tău sincronizat este [[Introduction to Obsidian Publish|publicat]] pe un site web public, precum acest site de asistență, atunci criptarea integrală nu este necesară.

Criptarea standard este aceeași metodă de criptare folosită de companiile de stocare în cloud și platformele software-as-a-service, precum Google Docs, Dropbox și iCloud (fără Protecție avansată a datelor). Cheia ta de criptare este generată de aplicație și folosită pentru a-ți proteja datele în tranzit și pe server. Deoarece cheia de criptare este stocată pe serverele companiei, aceasta poate fi folosită pentru a-ți decripta datele, de exemplu în cazul în care compania face obiectul unui mandat de percheziție, sau în cazul în care dorești să-ți accesezi datele printr-un browser web.

Criptarea integrală garantează că Obsidian nu îți poate accesa niciodată datele și ar trebui folosită întotdeauna pentru a sincroniza date pe care dorești să rămână complet private și sigure.

### Ce tip de criptare folosiți?

Pentru securitatea datelor, implementăm protocoale de criptare standard în industrie. Mai exact, folosim [AES-256](https://www.nist.gov/publications/advanced-encryption-standard-aes-0), cel mai puternic standard de criptare, utilizat pe scară largă în contexte precum operațiunile bancare online. Procesul de criptare implică următoarele detalii tehnice:

- **Funcție de derivare a cheii:** [scrypt](https://en.wikipedia.org/wiki/Scrypt) cu salt
- **Algoritm de criptare:** AES-256 folosind [Galois/Counter Mode (GCM)](https://en.wikipedia.org/wiki/Galois/Counter_Mode)

### Pot verifica dacă datele mele sunt criptate integral?

Da. Vezi ghidul nostru, [cum să verifici criptarea integrală a Obsidian Sync](https://obsidian.md/blog/verify-obsidian-sync-encryption/). Acest ghid oferă instrucțiuni pas cu pas pentru a verifica, fără a fi nevoie să ai încredere în noi, criptarea integrală a datelor tale atunci când sunt trimise și primite prin serverele Sync.

### A trecut Obsidian printr-un audit de securitate independent?

Da. Obsidian a fost auditat independent. Vizitează [pagina noastră de securitate](https://obsidian.md/security) pentru a vedea rapoartele de audit. Auditurile periodice efectuate de firme de securitate terțe asigură că codul și procedurile Obsidian respectă cele mai înalte standarde de securitate.

### Ce se întâmplă dacă îmi uit parola de criptare?

Dacă vreodată pierzi sau uiți parola de criptare, nu vei mai putea conecta seifuri suplimentare la seiful tău la distanță. Deoarece parola de criptare nu este salvată nicăieri, aceasta este pierdută definitiv.

Datele tale, totuși, sunt de obicei stocate în siguranță local pe fiecare dintre dispozitivele tale.

Pentru a continua să folosești Obsidian Sync, îți sugerăm să faci o reconfigurare completă pentru a putea adăuga dispozitive noi la sistemul tău Sync:

1. Fă o copie de rezervă completă a seifului pe dispozitivul tău principal, doar în caz că ceva nu merge bine. Aceasta poate fi la fel de simplă precum copierea directorului seifului sau crearea unui fișier zip din seif.
2. Deconectează seiful la distanță pe fiecare dintre dispozitivele tale. Acest lucru se poate face accesând **[[Settings]] → Sync → Alege seiful la distanță → Deconectează**.
3. [[Set up Obsidian Sync#Creează un nou seif la distanță|Creează un nou seif la distanță]] pe dispozitivul tău principal din aceeași pagină de setări. Opțional, poți șterge seiful la distanță anterior, deoarece oricum nu ai parola pentru el. (Este posibil să fie nevoie să ștergi seiful la distanță anterior dacă ai atins [[Frequently asked questions#Câte seifuri la distanță pot avea?|limita de seifuri]])
4. Așteaptă ca dispozitivul tău principal să se sincronizeze. Urmărește indicatorul de sincronizare din colțul din dreapta jos al ecranului până când afișează o bifă verde.
5. Conectează fiecare dintre dispozitivele tale la același seif la distanță nou creat. La conectare, ți se va afișa un avertisment despre îmbinarea seifurilor; acest lucru este normal și poți continua. Așteaptă ca fiecare dispozitiv să se sincronizeze complet înainte de a trece la următorul. Acest lucru reduce șansele de probleme.
6. Acum toate dispozitivele tale ar trebui să fie conectate la noul seif la distanță.

## Găzduire

### Unde găzduiți serverele pentru Obsidian Sync?

Serverele Obsidian Sync sunt găzduite de [DigitalOcean](https://www.digitalocean.com) în următoarele locații regionale:

> [!abstract] Regiuni Sync
> **Automat**: Centrul de date este ales pe baza locației IP-ului tău, în momentul în care îl configurezi pentru prima dată.
> 
> **Asia**: Singapore
> **Europa**: Frankfurt, Germania
> **America de Nord**: San Francisco, SUA 
> **Oceania**: Sydney, Australia
^sync-geo-regions

### Unde pot găsi serverul meu Sync curent și unde este găzduit?

Pentru a localiza serverul tău Obsidian Sync, urmează acești pași:
1. Accesează **[[Settings]]** → **Sync** → **Copiază informațiile de depanare**.
2. Lipește informațiile copiate într-o notă sau fișier.
3. Caută o linie similară cu aceasta: `Host server: wss://sync-xx.obsidian.md`

Această linie indică serverul pe care este găzduit seiful tău la distanță. Pentru mai multe detalii despre locațiile și timpul de funcționare al serverelor, vizitează [pagina noastră de stare](https://status.obsidian.md/).

## Rețea și acces

### Gestionarea accesului la Obsidian Sync în rețeaua ta

Pentru a reglementa accesul la Obsidian Sync în rețeaua ta, trebuie să gestionezi următoarele domenii:

`sync-xx.obsidian.md`

`xx` în acest caz reprezintă un număr cuprins între `1 - 100`.

> [!tip] Dacă sistemul tău firewall acceptă, recomandăm să adaugi pe lista albă `sync-*.obsidian.md` pentru a ține cont de creșterea continuă a numărului de subdomenii.

## Limitări

Obsidian Sync este conceput să îți păstreze notele private și sigure. Pentru a oferi o sincronizare rapidă, fiabilă și o stocare eficientă pe toate dispozitivele, facem unele compromisuri deliberate în modul în care este aplicată criptarea.

### Criptarea deterministă a hash-urilor de fișiere

Criptăm hash-urile fișierelor în mod determinist: același conținut de fișier, folosind aceeași cheie de criptare și același salt, produce întotdeauna același hash criptat pe server. Acest lucru ajută Sync să detecteze duplicatele și să evite reîncărcarea sau restocarea acelorași date, ceea ce economisește lățime de bandă și stocare la distanță, în special în istoricul versiunilor sau atunci când fișierele mari se repetă.

Totuși, dacă un atacator compromite un server Sync și are o metodă separată de a forța un utilizator să încarce fișiere la alegerea sa, atunci atacatorul ar putea forța utilizatorul să încarce fișiere specifice și să determine dacă acel fișier corespunde unui fișier pe care utilizatorul l-a încărcat anterior.

### Nicio legătură criptografică între cale și conținut

Unele metadate nu sunt criptate integral: ce dispozitiv a încărcat sau a șters un fișier, când a fost încărcat și *maparea* dintre căile de fișiere criptate și conținutul criptat. Aceste date pot fi citite de server astfel încât acesta să poată direcționa modificările, să determine istoricul versiunilor pentru un fișier și să mențină dispozitivele sincronizate.

Dacă un server Sync ar fi compromis, un atacator ar putea modifica acea mapare, făcând ca conținutul unui fișier criptat să fie livrat sub o altă cale de fișier. Acest lucru nu îți dezvăluie datele necriptate, acestea rămân criptate.
