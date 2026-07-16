---
permalink: backup
aliases:
  - Back up your Obsidian files
---
Dacă nu ați făcut încă o copie de siguranță a calculatorului, începeți acum! Modulul [[Recuperare fișiere]] al Obsidian este util, dar limitat. Poate recupera doar o anumită cantitate de date și stochează informațiile de recuperare per dispozitiv. Pentru o protecție mai solidă, vă recomandăm să implementați un sistem propriu de copiere de siguranță.

**De ce să faceți o copie de siguranță a datelor?**

Implicit, Obsidian vă stochează notele **local**, pe dispozitivul dumneavoastră, nu în cloud. Aceasta înseamnă că [datele vă aparțin în totalitate](https://obsidian.md/about), oferindu-vă control asupra lor. Totuși, stocarea locală poate fi afectată de probleme precum coruperea sau pierderea datelor. Nu este o chestiune de „dacă”, ci de „când”. Realizarea copiilor de siguranță vă protejează împotriva acestor situații inevitabile și vă asigură controlul asupra notelor.

## Sincronizarea nu este o copie de siguranță

Servicii precum [[Introducere în Obsidian Sync|Obsidian Sync]], iCloud, OneDrive și Dropbox vă ajută să sincronizați notele între diferite dispozitive. Deși pot oferi funcții precum [[Istoricul versiunilor|restaurarea notelor]], **nu sunt concepute pentru copii de siguranță**. Sincronizarea vă menține notele actualizate, dar nu vă protejează împotriva pierderii datelor.

- **Sincronizare:** Sincronizarea asigură că fișierele dumneavoastră sunt identice pe toate dispozitivele. Când modificați un fișier pe un dispozitiv, acesta se actualizează pe toate dispozitivele sincronizate. Serviciile de sincronizare nu au un dispozitiv „principal”.
- **Copie de siguranță:** O copie de siguranță salvează o copie a datelor dumneavoastră într-o altă locație, pentru a ajuta la recuperarea lor în caz de pierdere sau corupere a datelor. Copiile de siguranță nu sunt destinate actualizărilor în timp real sau colaborării.

Pentru a face corect o copie de siguranță a seifului, folosiți un instrument dedicat care creează o copie unidirecțională a datelor. Acest instrument va trimite datele dumneavoastră către o locație sigură de rezervă, fără a modifica datele de pe dispozitivul dumneavoastră.

Dacă folosiți mai multe dispozitive cu sincronizare, alegeți **un singur dispozitiv** care să fie dispozitivul dumneavoastră pentru copii de siguranță. De obicei, acesta este dispozitivul principal, cel pe care îl folosiți cel mai mult. Rețineți că majoritatea serviciilor de sincronizare nu recunosc niciun dispozitiv drept „principal”; acesta este doar un concept care vă ajută să gestionați copiile de siguranță.

> [!Example] Folosiți Obsidian Sync pe laptop, tabletă, telefon și calculatorul de la serviciu. Vă folosiți seiful mai ales pe calculatorul de la serviciu, uneori pe laptop și rareori pe tabletă sau telefon. În acest caz, calculatorul de la serviciu ar fi „dispozitivul dumneavoastră principal” pentru copiile de siguranță.

## Folosiți module comunitare

Deși Echipa Obsidian nu poate recomanda oficial niciun modul anume, recunoaștem două [module comunitare](https://community.obsidian.md/search?type=plugin&categories=backup) care au devenit populare printre utilizatori pentru a-și copia fișierele de rezervă:

- **[Obsidian Git](https://community.obsidian.md/plugins/obsidian-git):** Folosiți acest modul pentru a face o copie de siguranță a seifului, trimițând conținutul acestuia într-un [depozit Git](https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository). Este o modalitate eficientă de a controla versiunile notelor și de a le asigura siguranța pe un server la distanță. Totuși, rețineți că datele dumneavoastră pot fi stocate pe o [[#Folosiți servicii bazate pe cloud|platformă de găzduire externă]] folosind această metodă.
- **[Local Backup](https://community.obsidian.md/plugins/local-backup):** Acest modul vă permite să creați copii locale ale seifului într-un director la alegere, cu opțiuni de arhivare. Puteți folosi chiar și un director de sincronizare, precum un director Dropbox, pentru a combina copiile de siguranță locale cu cele din cloud. Această metodă **se potrivește bine** cu opțiunile de copiere de siguranță descrise mai jos.

Consultați categoria [Backup](https://community.obsidian.md/search?type=plugin&categories=backup) pentru mai multe opțiuni de module comunitare.

## Folosiți servicii bazate pe cloud

> [!info] Nu este recomandat să păstrați locația seifului în serviciul de copiere de siguranță ales.

Păstrarea copiei de siguranță în cloud este o alternativă și un complement la stocarea fizică a datelor, în locul unui hard disk extern sau al unui stick USB. Un hard disk extern sau un stick USB se poate pierde sau deteriora. Cel mai mare avantaj al stocării fișierelor în cloud este că sunt disponibile oricând, de oriunde. Dezavantajul este că majoritatea serviciilor de copiere de siguranță sunt deținute de o companie privată.

În privința securității, ar trebui să acordați întotdeauna atenție sporită accesului și securității în cazul copiilor de siguranță din cloud. [Worldbackupday](https://www.worldbackupday.com/en) menține o listă actualizată de servicii de copiere de siguranță online pe care le puteți lua în considerare.

## Folosiți unități externe

**Hard disk-uri și unități SSD**
Copiile de siguranță pe hard disk extern rămân valoroase într-o lume tot mai orientată către cloud și sunt folosite în principal pentru stocarea datelor și copierea de siguranță a calculatorului. Cel mai mare dezavantaj al unei unități externe este că aceasta se poate defecta sau pierde. Cel mai mare avantaj este că spațiul de stocare trebuie achiziționat o singură dată. Folosirea unui hard disk extern este adesea combinată cu o [[#Folosiți copii de siguranță ale calculatorului|copie de siguranță a calculatorului]].

**Stick-uri USB**
Stick-urile USB (numite și memorii flash sau pen drive-uri) reprezintă o metodă simplă și eficientă pentru copii de siguranță rapide.

1. Introduceți stick-ul USB în calculator sau laptop.
2. Asigurați-vă că dispozitivul este recunoscut și montat în sistemul de fișiere. Dacă este necesar, formatați stick-ul USB pentru a fi compatibil cu sistemul dumneavoastră de fișiere.
3. Copiați directorul seifului din locația curentă pe stick-ul USB.
4. Demontați în siguranță stick-ul USB.
5. Scoateți stick-ul USB din dispozitiv.

**Copie de siguranță NAS**
Pentru utilizatorii experimentați, realizarea unei copii de siguranță a datelor pe un server NAS (Network Attached Storage) este o metodă bună și sigură, deoarece dispune de mai multe hard disk-uri și mecanisme suplimentare de recuperare.

> [!tip] Dacă unitatea externă conține informații sensibile, este recomandat să o păstrați într-un loc sigur, cum ar fi o încăpere securizată.

## Folosiți copii de siguranță ale calculatorului

Sistemul de operare în sine oferă posibilitatea de a crea copii de siguranță, fie online în cloud, fie pe o unitate externă.

- **[Windows](https://www.microsoft.com/en-us/windows/learning-center/back-up-files)**: Copie de siguranță cu OneDrive sau o unitate externă.
- **[Mac](https://support.apple.com/en-us/104984)**: Copie de siguranță pe un dispozitiv extern cu Time Machine.
- **[Linux](https://linuxize.com/post/how-to-use-rsync-for-local-and-remote-data-transfer-and-synchronization/)**: `rsync` către un director sau o unitate la alegere.

## Pașii următori

Această pagină de ajutor oferă o scurtă prezentare a opțiunilor de copiere de siguranță, dar nu este exhaustivă. Pentru informații mai detaliate, vizitați [Worldbackupday.com](https://www.worldbackupday.com/en) sau întrebați alți utilizatori Obsidian în [comunitatea noastră](https://obsidian.md/community) despre strategiile lor de copiere de siguranță!
