---
permalink: teams/deploy
cssclasses:
  - soft-embed
aliases:
  - Deploy Obsidian across your team
---
Obsidian rulează ca aplicație locală pe fiecare dintre dispozitivele membrilor echipei dumneavoastră. Este proiectat să funcționeze atât online, cât și offline, în siguranță și confidențial, oferindu-vă control total asupra datelor echipei dumneavoastră. Obsidian nu este disponibil ca aplicație bazată pe web, așadar va trebui să implementați aplicația pentru membrii echipei dumneavoastră.

## Instalați și actualizați Obsidian

Echipa dumneavoastră poate descărca Obsidian de pe [pagina noastră de descărcare](https://obsidian.md/download). Versiunile sunt disponibile și pe [pagina noastră de versiuni GitHub](https://github.com/obsidianmd/obsidian-releases/releases), care include legături către [jurnalul de modificări](https://obsidian.md/changelog/).

> [!tip] Pentru utilizatorii Windows care au nevoie de un program de instalare la nivel de sistem, fișierul Universal `.exe` include opțiunea de a instala Obsidian pentru toți utilizatorii.

Dacă actualizările automate sunt activate în aplicație, versiunile viitoare vor fi instalate automat când utilizatorii repornesc Obsidian. În plus, vă recomandăm să efectuați periodic [[Actualizează Obsidian#Installer updates|actualizări ale programului de instalare]] pentru a primi cele mai recente actualizări ale framework-ului Electron, inclusiv remedieri de securitate.

Dacă doriți să aflați cum să limitați accesul la rețea pentru Obsidian în timpul acestui proces, consultați secțiunea [[Considerații de securitate pentru echipe#Network and access|rețea și acces]].

## Personalizarea Obsidian

Obsidian este ușor de modificat pentru a se potrivi nevoilor echipei dumneavoastră. Cu un API extins și un ecosistem vast de utilizatori, Obsidian oferă acces la numeroase module, teme și instrumente complementare.

Pentru întrebări legate de securitate privind aceste subiecte, consultați [[Considerații de securitate pentru echipe|Considerații de securitate pentru echipe]].

### Dosare de configurare

[[Directorul de configurare|Dosarul de configurare]] este locul în care un [[Glosar#Vault|seif]] Obsidian își stochează setările aplicației. Implicit, acest dosar se numește `.obsidian`, dar aveți flexibilitatea de a [[Directorul de configurare#Change your configuration folder|schimba numele dosarului de configurare]] după preferință.

Vă recomandăm să creați un șablon standardizat al dosarului de configurare, care să fie implementat pe toate dispozitivele echipei dumneavoastră.

### Module

[[Module de bază|Modulele integrate]] sunt funcționalități opționale create de echipa Obsidian. Aceste funcționalități sunt integrate în codul de bază al aplicației și pot fi activate sau dezactivate.

[[Module comunitare|Modulele comunitare]] sunt funcționalități terțe adăugate aplicației Obsidian și pot fi instalate din directorul comunității. Modulele terțe folosesc [API-ul Obsidian](https://github.com/obsidianmd/obsidian-api). Modulele sunt localizate în dosarul `.obsidian/plugins` din cadrul unui seif și pot fi instalate manual în această locație.

### Teme și fragmente

[[Teme|Temele]] modifică vizual interfața Obsidian. La fel ca modulele, temele pot fi descărcate din directorul nostru al comunității. Temele sunt localizate în dosarul `.obsidian/themes` din cadrul unui seif.

[[Fragmente CSS|Fragmentele]] sunt fișiere `.css` mici care modifică vizual aspecte ale interfeței Obsidian. În unele cazuri, pot adăuga și îmbunătățiri funcționale. Fragmentele sunt localizate în dosarul `.obsidian/snippets` din cadrul unui seif.

## Întrebări frecvente

Pentru întrebări despre gestionarea conturilor și securitate, consultați secțiunea [[Considerații de securitate pentru echipe#Account security|securitatea contului]].

### Implementare

**Pot implementa licențe pe mai multe instalări?**
În prezent, nu susținem implementarea licențelor printr-un script de implementare, cum ar fi un fișier `.json`. Dacă sunteți interesat de această funcționalitate pentru echipa dumneavoastră, vă rugăm să trimiteți o [solicitare de funcționalitate](https://forum.obsidian.md/c/feature-requests/8).

**Poate Obsidian să blocheze anumite funcționalități sau configurații printr-o setare sau un indicator al aplicației?**
În prezent puteți face acest lucru blocând accesul de editare la dosarul `.obsidian`, sau la fișiere și dosare specifice din interiorul acestuia, așa cum s-a descris mai sus. Dacă sunteți interesat de mai multe controale de acces pentru echipa dumneavoastră, vă rugăm să trimiteți o [solicitare de funcționalitate](https://forum.obsidian.md/c/feature-requests/8).
