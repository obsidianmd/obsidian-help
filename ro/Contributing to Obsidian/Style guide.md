---
permalink: style-guide
publish: true
mobile: true
description: Această pagină explică ghidul de stil pentru redactarea documentației noastre de asistență.
---

Documentația Obsidian respectă liniile directoare de stil listate pe această pagină. Aceste linii directoare se bazează pe cele mai bune practici din industrie, în special pe [Google developer documentation style guide](<https://developers.google.com/style>) și [Microsoft Style Guide](https://learn.microsoft.com/en-us/style-guide/). Pentru cazuri particulare care nu sunt acoperite mai jos, consultă acele ghiduri externe ca referințe secundare.

> [!tip]- Contribuie
> Cea mai mare parte a documentației a existat înainte de acest ghid de stil.
> 
> Dacă găsești vreo încălcare a acestui ghid de stil, te rugăm să [creezi o problemă (issue)](https://github.com/obsidianmd/obsidian-docs/issues/new) și să trimiți un pull request către [obsidianmd/obsidian-docs](https://github.com/obsidianmd/obsidian-docs).

## Terminologie și gramatică

### Stilul limbii

Pentru documentația noastră în limba engleză, se recomandă folosirea [Global English](https://docs.openedx.org/en/latest/documentors/references/doc_english_writing.html) pentru a servi mai bine publicul nostru din întreaga lume și pentru a ajuta la [[#Traduceri]]. Aceasta înseamnă:

- Evitarea idiomurilor și a expresiilor specifice unei culturi
- Folosirea vocii active și a construcțiilor de propoziții directe
- Preferarea cuvintelor simple, comune, în locul terminologiei complexe
- Fiind explicit, nu implicit
- Pentru convențiile de ortografie, folosește engleza americană (de exemplu, „organize” nu „organise”).

### Termeni

- Preferă „combinație de taste” în locul „hotkey”. Folosește Hotkey doar atunci când te referi la funcția specifică.
- Preferă „aplicația Obsidian” pe mobil și „aplicația Obsidian” pe desktop.
- Preferă „sincronizare” sau „sincronizează” în locul „sincronizare” (evită formele nestandard).
- Preferă „termen de căutare” în locul „interogare de căutare”.
- Preferă „titlu” în locul „antet” atunci când te referi la un text care introduce o secțiune.
- Preferă „maxim” în locul „max” și „minim” în locul „min”.

### Nume de produse

Numele produselor Obsidian încep cu „Obsidian”, de exemplu „Obsidian Publish” și „Obsidian Sync”.

Dacă un paragraf devine excesiv de repetitiv, poți folosi forma scurtă în referințele ulterioare.

De exemplu:

_Pentru a permite configurarea specifică fiecărui dispozitiv, Obsidian Sync nu își sincronizează propriile setări. Trebuie să configurezi Sync pentru fiecare dintre dispozitivele tale._

### Interfață și interacțiuni

- Folosește **aldin** pentru a indica textul unui buton
- Preferă „selectează” în locul „atinge” sau „apasă”.
	- Pentru instrucțiuni specifice mobilului, „atinge” este acceptabil atunci când descrii interacțiuni tactile, deoarece „apasă” (click) nu este disponibil.
- Preferă „bară laterală” în locul „bară de margine”.
- Preferă „efectuează” în locul „invocă” și „execută” atunci când te referi la comenzi sau acțiuni.

Atunci când te referi la mai multe interacțiuni ale interfeței într-o secvență, folosește simbolul → (U+2192). De exemplu, „**[[Settings]] → Community plugins**”.

### Note, fișiere și foldere

- Folosește „notă” atunci când te referi la un fișier Markdown din boltă.
- Folosește „fișier” atunci când te referi la alte extensii de fișier decât Markdown.
- Preferă „numele notei” în locul „titlul notei”.
- Preferă „nota activă” în locul „nota curentă”.
- Preferă „folder” în locul „director”.
- Preferă „tip de fișier” în locul „format de fișier”, cu excepția cazului în care te referi în mod specific la formatul de date al conținutului fișierului.

Atunci când te muți între note, folosește „deschide” dacă destinația este ascunsă și „comută” dacă atât nota sursă, cât și cea de destinație sunt deschise în ecrane separate.

### Documentație de referință pentru setări

Atunci când este posibil, orice setare ar trebui documentată în Obsidian folosind un text descriptiv. Evită documentarea unei setări specifice în Ajutor Obsidian, cu excepția cazului în care:

- Necesită cunoștințe mai aprofundate despre cum și când să fie folosită.
- Este frecvent utilizată greșit sau frecvent întrebată.
- _Schimbă drastic_ experiența utilizatorului.

Ia în considerare folosirea unei explicații de tip sfat dacă vrei să atragi atenția asupra unei setări specifice.

### Termeni de direcție

Cratimă termenii de direcție atunci când sunt folosiți ca adjective. Evită cratima atunci când direcția este folosită ca substantiv.

**Recomandat:**

- Selectează **[[Settings]]** în colțul din stânga jos.
- Selectează **[[Settings]]** în stânga jos.

**Nerecomandat:**

- Selectează **[[Settings]]** în colțul stânga jos.
- Selectează **[[Settings]]** în stânga-jos.

Preferă „stânga sus” și „dreapta sus” în locul „sus-stânga” și „sus-dreapta”.

Nu indica o direcție atunci când te referi la setări. Locația controlului de setări depinde de dispozitiv.

**Recomandat:**

- Lângă **Alege bolta la distanță**, selectează **Alege**.

**Nerecomandat:**

- În dreapta lui **Alege bolta la distanță**, selectează **Alege**.

Atunci când descrii direcția verticală în elementele interfeței, folosește „deasupra” și „dedesubt” pentru relații spațiale. Evită „sus” și „jos” deoarece sunt ambigue în contexte diferite.

**Recomandat:**

- Caseta de căutare apare deasupra listei de fișiere.
- Opțiuni suplimentare sunt disponibile mai jos.

**Nerecomandat:**

- Caseta de căutare este sus, de la lista de fișiere.
- Mai multe opțiuni sunt jos, mai jos.

### Instrucțiuni

Folosește imperativul pentru numele ghidurilor, titlurile secțiunilor și instrucțiunile pas cu pas. Modul imperativ este concis și orientat spre acțiune, ceea ce este mai direct pentru utilizatorii care urmează instrucțiuni.

- Preferă „Configurează” în locul „Configurarea”
- Preferă „Mută un fișier” în locul „Mutarea unui fișier”
- Preferă „Importă-ți notele” în locul „Importarea notelor tale”

### Scriere cu literă mică (sentence case)

Preferă *scrierea cu literă mică* (sentence case) în locul *scrierii cu majusculă la fiecare cuvânt* (title case) pentru titluri, butoane și denumiri. Atunci când faci referire la elemente ale interfeței, potrivește întotdeauna forma textului din interfață.

**Recomandat:**

- Cum stochează Obsidian datele

**Nerecomandat:**

- Cum Stochează Obsidian Datele

### Exemple

Preferă exemple realiste în locul termenilor fără sens.

**Recomandat:**

- `task:(call OR schedule)`

**Nerecomandat:**

- `task:(foo OR bar)`

### Nume de taste și combinații de taste

Atunci când te referi la tastele și combinațiile de taste ale tastaturii, folosește o notație consecventă.

**Nume de taste individuale:**

Atunci când te referi la un caracter de pe tastatură după nume, adaugă caracterul între paranteze imediat după nume.

**Recomandat:**

- Apasă tasta cratimă (-) pentru a adăuga o linie.
- Folosește semnul întrebării (?) pentru a căuta.

**Nerecomandat:**

- Apasă tasta cratimă pentru a adăuga o linie.
- Folosește ? pentru a căuta.
- Adaugă un `-` în fața cuvântului.

**Combinații de taste:**

Formatează combinațiile de taste fără spații în jurul semnului plus. Atunci când o combinație diferă între sistemele de operare, specifică-le pe amândouă.

**Recomandat:**

- Apasă `Ctrl+Z` (Windows) sau `Command+Z` (macOS) pentru a anula.
- Apasă `Escape` pentru a închide această fereastră.
- Folosește `Tab` pentru a te deplasa între câmpuri.

**Nerecomandat:**

- Apasă `Cmd+Z` pentru a anula.
- Apasă `Ctrl + Z` (cu spații) pentru a anula.
- Apasă `Ctrl/Cmd+Z` pentru a anula.

Pentru combinațiile care sunt identice pe toate platformele, nu este nevoie să specifici sistemul de operare. Dacă nu ești sigur dacă o combinație diferă în funcție de platformă, specifică sistemul de operare pentru siguranță. Windows și Linux folosesc de obicei aceleași combinații.

### Markdown

Folosește linii noi între blocurile Markdown:

**Recomandat:**

```md
# Titlu 1

Aceasta este o secțiune.

1. Primul element
2. Al doilea element
3. Al treilea element
```

**Nerecomandat:**

```md
# Titlu 1
Aceasta este o secțiune.
1. Primul element
2. Al doilea element
3. Al treilea element
```

**Liniuțe lungi (em dash) în liste:**

Folosește liniuțe lungi (—) pentru a separa termenii îngroșați de descrierile lor în listele cu marcatori. Nu folosi liniuțe lungi în liste imbricate simple cu legături.

**Recomandat:**

- **Meniul Vizualizare** — creează, editează și comută vizualizări.
- **Calculează valori** — adaugă prețuri, calculează totaluri sau efectuează operații matematice.

**Nerecomandat:**

- [[Create a base]] — Află cum să creezi și să integrezi o bază.

### Imagini

Folosește „**lățime** x **înălțime** pixeli” pentru a descrie dimensiunile unei imagini sau ale ecranului.

**Exemplu:**

Dimensiuni recomandate pentru imagine: 1920 x 1080 pixeli.

## Structura informației

### Tipuri de explicații (callout)

Folosește explicații (callout) în mod strategic pentru a evidenția tipuri specifice de informații:

**Sfat** (`[!tip]-`) - Sfaturi practice sau bune practici care îmbunătățesc fluxul de lucru al utilizatorului. Folosește pentru scurtături, soluții alternative sau informații utile, dar neesențiale. Aceste explicații încep pliate.

**Informație** (`[!info]+`) - Context suplimentar, informații de fundal sau clarificări. Folosește atunci când informația adaugă înțelegere, dar nu este necesară pentru a finaliza o sarcină. Aceste explicații încep deschise.

**Avertisment** (`[!warning]+`) - Avertismente importante care previn pierderea de date, erori sau consecințe neintenționate. Folosește cu moderație, pentru situații cu adevărat riscante. Aceste explicații nu trebuie niciodată pliate.

**Exemplu** (`[!example]-`) - Digresiuni generale sau detalii suplimentare. Folosește pentru informații tangențiale pe care unii utilizatori le-ar putea găsi relevante. Aceste explicații încep pliate.

**Exemple:**
```md
> [!tip]- Folosește combinații de taste
> Poți accelera fluxul de lucru memorând cele mai folosite combinații.

> [!info]+ Acesta este un modul suplimentar cu plată
> Această funcție necesită un abonament cu plată pentru a fi folosită.

> [!warning]+ Această acțiune nu poate fi anulată
> Ștergerea unei bolți este permanentă. Ia în considerare exportarea notelor tale mai întâi.

> [!example]- Utilizare avansată
> Poți configura, de asemenea, această setare prin meniul Afișaj grafic.
```

### Liste vs. text continuu

Folosește liste atunci când prezinți elemente discrete care nu au relații puternice secvențiale sau cauzale. Folosește text continuu și paragrafe atunci când elementele se construiesc unele pe baza altora, necesită explicații sau beneficiază de un flux narativ.

**Folosește o listă pentru:**
- Un set de funcții fără legătură între ele
- Cerințe de instalare
- Opțiuni de configurare
- Pași de depanare

**Folosește text continuu pentru:**
- Explicații despre cum funcționează ceva
- Fluxuri de lucru cu dependențe
- Prezentări conceptuale generale
- Îndrumări care necesită context

### Tabele

Folosește tabele pentru a compara funcții, versiuni sau puncte de date conexe, acolo unde alinierea ajută la înțelegere. Evită tabelele pentru liste simple sau date cu o singură coloană.

**Exemplu bun de utilizare:**

| Funcție | Mobil | Desktop |
|---------|--------|---------|
| Sync | Da | Da |
| Plugin-uri | Nu | Da |
| Teme | Limitat | Complet |

### Trimiteri încrucișate

Folosește legături wiki interne (`[[Nume notă]]`) cu generozitate pentru a ajuta utilizatorii să navigheze subiecte conexe. Totuși, evită supra-legarea:

- Nu lega același termen de mai multe ori pe aceeași pagină
- Fă legătura doar atunci când pagina referită oferă context semnificativ suplimentar
- Folosește text de legătură descriptiv atunci când este util: `[[Nume notă#Secțiune|text descriptiv]]`

**Exemplu:**

Prima mențiune: „Află despre [[Introduction to Obsidian Sync|Obsidian Sync]] pentru a-ți menține bolta actualizată pe toate dispozitivele.”
Mențiune ulterioară: „Poți configura Sync separat pentru fiecare dispozitiv.”

### Conținut specific platformei

Atunci când documentezi funcții care diferă între platforme, folosește titluri de secțiune pentru a organiza conținutul.

Folosește `Desktop` și `Mobil` ca titluri de subsecțiune pentru a separa instrucțiunile sau funcțiile specifice platformei.

**Recomandat:**
```md
## Personalizarea panglicii

### Desktop

În versiunea desktop, poți personaliza panglica astfel:

- Rearanjează ordinea acțiunilor din panglică trăgând și plasând pictogramele.
- Pentru a ascunde acțiuni specifice, dă clic dreapta pe un spațiu gol și debifează acțiunile pe care vrei să le ascunzi.

### Mobil

În versiunea mobilă, poți personaliza panglica prin setări:

1. Deschide **[[Settings]]**.
2. Navighează la **Aspect**.
3. Apasă **Gestionează** sub **Meniul panglicii**.
```

> [!info]+ Când să creezi secțiuni?
> Creează secțiuni separate doar dacă conținutul diferă semnificativ. Dacă instrucțiunile sunt în mare parte aceleași, cu variații minore, folosește note inline în schimb.

## Pictograme și imagini

Include pictograme și imagini atunci când fac mai ușoară explicarea unor lucruri greu de descris în cuvinte sau atunci când trebuie să arăți părți importante ale aplicației Obsidian. Poți salva imagini în folderul `Attachments`.

- Imaginea ar trebui să facă textul pe care îl însoțește mai ușor de înțeles.

 **Exemplu**: Odată activat, pluginul [[Word count]] va crea o intrare nouă pe bara de stare din partea de jos.
 
![[Style-guide-zoomed-example.png#interface|300]]

- Imaginile ar trebui să fie în format `.png` sau `.svg`.
- Dacă o imagine pare prea mare în notă, fă-o mai mică în afara Obsidian sau ajustează-i dimensiunile așa cum este explicat în [[Embed files#Embed an image in a note|integrarea unei imagini într-o notă]].
- În cazuri rare, s-ar putea să vrei să plasezi imagini deosebit de mari sau complexe într-o [[Callouts#Foldable callouts|explicație pliabilă]]. 
- Pentru ferestre pop-up sau ferestre modale, imaginea ar trebui să arate întreaga fereastră a aplicației Obsidian.
 ![[Style-guide-modal-example.png#interface]]

### Pictograme

[Lucide](https://lucide.dev/icons/) și pictogramele personalizate Obsidian pot fi folosite alături de elemente detaliate pentru a oferi o reprezentare vizuală a unei funcții.

**Exemplu:** În panglica din stânga, selectează **Creează o pânză nouă** ![[lucide-layout-dashboard.svg#icon]] pentru a crea o pânză în același folder cu fișierul activ.

**Linii directoare pentru pictograme**

- Stochează pictogramele în folderul `Attachments/icons`.
- Adaugă prefixul `lucide-` înaintea numelui pictogramei Lucide.
- Adaugă prefixul `obsidian-icon-` înaintea numelui pictogramei Obsidian.

**Exemplu:** Pictograma pentru crearea unei pânze noi ar trebui să fie denumită `lucide-layout-dashboard`.

- Folosește versiunea SVG a pictogramelor disponibile.
- Pictogramele ar trebui să aibă `18` pixeli lățime, `18` pixeli înălțime și o grosime a conturului de `1.5`. Poți ajusta aceste setări în datele SVG.

> [!info]- Ajustarea dimensiunii și a conturului într-un SVG
> ```html
> <svg xmlns="http://www.w3.org/2000/svg" width="WIDTH" height="HEIGHT" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="STROKE-WIDTH" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-layout-dashboard"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>
>```

- Folosește ancora `icon` în imaginile integrate, pentru a ajusta spațierea din jurul pictogramei astfel încât să se alinieze corect cu textul din vecinătate.
- Pictogramele ar trebui să fie încadrate de paranteze. ![[lucide-cog.svg#icon]]

**Exemplu**: `![[lucide-cog.svg#icon]]`

### Etichete de ancorare pentru imagini

Etichetele de ancorare pentru imagini sunt disponibile pentru a adăuga modificări decorative imaginilor integrate. 

> [!warning] Avertisment pentru Vizualizare live
> Etichetele de ancorare pentru pictograme nu se vor afișa corect în **Vizualizare live.** Folosește **Vizualizarea de citire** pentru a confirma că eticheta de ancorare a fost aplicată. 

**Pictogramă**

`![[lucide-menu.svg#icon]]`

Eticheta de ancorare pentru pictogramă asigură alinierea verticală corectă pentru pictogramele folosite pentru a indica elemente ale interfeței.

Prima pictogramă de meniu folosește eticheta de ancorare ![[lucide-menu.svg#icon]], în timp ce a doua pictogramă de meniu ( ![[lucide-menu.svg]] ) nu o folosește.

**Interfață**

`![[Vault picker.png#interface]]`

Eticheta de ancorare pentru interfață adaugă o umbră decorativă în jurul imaginii. În prima imagine, eticheta de ancorare pentru interfață este aplicată.
![[Vault picker.png#interface]]
În schimb, a doua imagine nu are eticheta de ancorare pentru interfață aplicată.

![[Vault picker.png]]

**Sumar**

`![[Backlinks.png#outline]]`

Eticheta de ancorare pentru sumar adaugă un chenar subtil în jurul imaginii. În prima imagine, eticheta de ancorare pentru sumar este aplicată. 

> [!tip] Observă partea stângă jos a imaginii pentru a vedea diferența.

![[Backlinks.png#outline]]

A doua imagine nu are eticheta de ancorare pentru sumar.

![[Backlinks.png]]

### Optimizare

Imaginile încetinesc timpul de încărcare a paginii și ocupă spațiu de stocare valoros pe [[Introduction to Obsidian Publish|Publish]]. Optimizarea imaginilor permite reducerea dimensiunii fișierului, dar menține integritatea vizuală a imaginii. 

Atât imaginile, cât și pictogramele ar trebui optimizate.

> [!info] Instrumente pentru optimizarea imaginilor
> Iată câteva programe recomandate pentru reducerea dimensiunii imaginilor tale.
> - **Windows:** [FileOptimizer](https://sourceforge.net/projects/nikkhokkho/)
> - **macOS:** [ImageOptim](https://imageoptim.com/)
> - **Linux/Unix** [Trimage](https://trimage.org)
> 
> Recomandăm o rată de optimizare de 65-75%.

## Aspect

### Legături nefuncționale

Înainte de a trimite Pull Request-ul tău, te rugăm să verifici dacă există legături nefuncționale în documentația traducerii la care lucrezi și să le corectezi. Legăturile nefuncționale pot apărea în mod natural în timp, așa că verificarea acurateței lor ajută la menținerea calității documentației.

Poți verifica legăturile nefuncționale folosind [[Community plugins]] sau instrumente disponibile în IDE-ul tău.

### Descrieri

Această documentație este editată pe GitHub și găzduită online prin [[Introduction to Obsidian Publish|Obsidian Publish]], care include [[Social media link previews#Description|descrieri]] pentru cardurile pentru rețele sociale și alte elemente de [[SEO]].

Dacă pagina la care lucrezi nu are o [[Properties|proprietate]] `description`, te rugăm să adaugi una. Descrierea ar trebui să aibă 150 de caractere sau mai puțin și să ofere un rezumat obiectiv al conținutului paginii.

**Bine**: Învață să creezi șabloane care captează și organizează automat metadatele paginilor web cu Web Clipper.
**Ar putea fi îmbunătățit**: Învață cum să creezi șabloane care captează și organizează automat metadatele din paginile web cu Web Clipper.

### Direcții

Atunci când scrii sau rescrii [[#Instrucțiuni]] despre cum să efectuezi o acțiune în aplicație, asigură-te că incluzi pași atât pentru versiunea mobilă, cât și pentru cea desktop.

Dacă nu ai acces la un dispozitiv mobil sau desktop, te rugăm să menționezi acest lucru atunci când trimiți Pull Request-ul tău.

## Traduceri

  Tradu întregul conținut atunci când finalizezi o traducere. Aceasta include, dar nu se limitează la:

- Numele notelor
- Numele folderelor
- Alias-uri
- Numele atașamentelor
- Textul alternativ al legăturilor
