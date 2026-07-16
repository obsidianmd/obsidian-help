---
permalink: sync-notes
cssclasses:
  - soft-embed
publish: true
mobile: true
description: Cum să vă sincronizați notele Obsidian pe toate dispozitivele și platformele.
---
Obsidian vă stochează notele local, pe dispozitivul dumneavoastră, astfel încât aveți întotdeauna acces la ele, chiar și offline. Pentru a vă accesa notele pe mai multe dispozitive, trebuie să configurați o metodă de sincronizare.

Acest ghid acoperă metodele comune de sincronizare, inclusiv sfaturi pentru a evita pierderea datelor și pentru a asigura o experiență lină.

Vă recomandăm de asemenea să citiți [[Fă copii de rezervă ale fișierelor Obsidian|ghidul nostru de copiere de siguranță]] pentru a vă proteja datele.

## Metode de sincronizare

Cu Obsidian, datele dumneavoastră sunt stocate pur și simplu sub formă de fișiere într-un director numit [[Seifuri locale și la distanță|seif]]. Aceasta înseamnă că există numeroase modalități de a vă sincroniza datele.

Acestea sunt câteva metode de sincronizare folosite frecvent, raportate de membrii comunității Obsidian:

1. **Sincronizare de la prima parte**: [[#Obsidian Sync]]
2. **Sincronizare cloud de la terți**: [[#iCloud]], [[#OneDrive]] și [[#Google Drive]]
3. **Sincronizare locală**: [[#Syncthing]]
4. **Control al versiunilor**: [[#Git]] și [[#Working Copy]]

Zeci de opțiuni alternative de sincronizare pot fi găsite în [directorul de module comunitare](https://community.obsidian.md/search?type=plugin&categories=syncing).

## Obsidian Sync

**Sisteme recomandate**: `Windows`, `macOS`, `Linux`, `iOS`, `Android`

Cea mai simplă și oficial acceptată metodă de sincronizare este soluția noastră de la prima parte: [[Introducere în Obsidian Sync|Obsidian Sync]].

Obsidian Sync vă menține seifurile sincronizate pe toate dispozitivele, folosind un seif la distanță pentru a crea copii ale datelor dumneavoastră. O copie locală rămâne întotdeauna pe dispozitivele dumneavoastră.

Urmați [[Configurează Obsidian Sync|ghidul de configurare]] pentru a configura Obsidian Sync.

## iCloud

**Sisteme recomandate**: `macOS`, `iOS`, `iPadOS`

iCloud poate fi folosit pentru a sincroniza seifuri între iOS și macOS. Totuși, **iCloud Drive pe Windows** poate duce la duplicarea sau coruperea fișierelor.

**Cum să creați și să stocați seiful dumneavoastră în iCloud Drive**:

- **Activați iCloud Drive**:
    - Pe macOS: Accesați **System Preferences → Apple ID → iCloud → iCloud Drive**.
    - Pe iOS: Accesați **Settings → [Numele dumneavoastră] → iCloud → iCloud Drive**.
- **Creați un seif nou în iCloud**:
    - Pe macOS:
        1. Deschideți **Obsidian** și selectați **Creare seif nou**.
        2. În selectorul de fișiere, navigați la **iCloud Drive → Obsidian**.
        3. Creați un director pentru seiful dumneavoastră și denumiți-l.
        4. Selectați **Creare** pentru a finaliza.
    - Pe iOS:
        1. Deschideți **Obsidian** și apăsați **Creare seif nou**.
        2. Introduceți un nume pentru seiful dumneavoastră.
        3. Activați **Stocare în iCloud**.
        4. Apăsați **Creare**.
- **Deschideți seiful pe un alt dispozitiv Apple**:
    - Pe alt dispozitiv macOS sau iOS, deschideți **Obsidian**, mergeți la [[Gestionează seifurile|comutatorul de seifuri]] și selectați **Deschideți directorul ca seif**. Navigați la **iCloud Drive → Obsidian**.

> [!warning]+ Locația directorului pe iOS și iPadOS
> Când folosiți iCloud pe dispozitive mobile, asigurați-vă că seiful dumneavoastră este stocat în locația corectă: `iCloud Drive/Obsidian/[Numele seifului dumneavoastră]`.
> 
> Seifurile trebuie să se afle în directorul **Obsidian** din iCloud Drive. Directorul din dreapta, cu pictograma Obsidian, este cel corect. Nu folosiți directorul simplu, fără pictograma aplicației.
> 
> ![[iCloud-folder-location.png#interface]]
> 
> Pentru a verifica locația seifului dumneavoastră, deschideți aplicația **Files**, apăsați **Browse**, selectați **iCloud Drive** sub **Locations** și confirmați că seiful dumneavoastră se află în directorul **Obsidian**. Dacă seiful dumneavoastră se află într-o locație diferită, este posibil să întâmpinați probleme de sincronizare.

> [!tip] Bune practici
> - Pentru **macOS 14 (Sonoma) și versiuni anterioare**: Dezactivați **Optimize Mac Storage** din setările iCloud pentru a preveni descărcarea fișierelor de pe dispozitiv. Această setare afectează întreaga stocare iCloud a dispozitivului, nu doar Obsidian.
> - Pentru **macOS 15 (Sequoia)**: Apăsați clic dreapta pe directorul **Obsidian** din iCloud Drive și selectați **Keep Downloaded**.

## OneDrive

**Sisteme recomandate**: `Windows`, `macOS` (funcționalitate limitată pe Android)

[OneDrive](https://support.microsoft.com/en-us/office/Sync-with-OneDrive-bb89981b-e382-4969-b8fd-d413a90b6db3#ID0EAABAAA=Set_up) este o opțiune populară de stocare în cloud pentru utilizatorii Windows și macOS. Totuși, are limitări pe Android și nu este acceptat oficial pentru sincronizarea seifurilor Obsidian pe iOS.

> [!info] Păstrați fișierele disponibile offline
> Înainte de a folosi OneDrive pentru sincronizare, asigurați-vă că directorul seifului dumneavoastră este marcat ca **Always keep on this device**. Aceasta previne descărcarea fișierelor de către OneDrive și evită ca Obsidian să considere că lipsesc.

**Cum să creați și să stocați seiful dumneavoastră în OneDrive**:

1. **Configurați OneDrive**:
   - Pe Windows: Autentificați-vă prin aplicația OneDrive sau contul dumneavoastră Microsoft.
   - Pe macOS: Descărcați aplicația OneDrive și autentificați-vă.
2. **Creați un seif nou în OneDrive**:
   - Pe Windows/macOS:
     1. Deschideți **File Explorer** (Windows) sau **Finder** (macOS) și navigați la **OneDrive → Documents**.
     2. Creați un director nou (de exemplu, „Obsidian Vault”).
     3. Deschideți **Obsidian**, selectați **Creare seif nou** și selectați directorul OneDrive.
3. **Deschideți seiful pe alt dispozitiv**:
   - Pe alt dispozitiv, deschideți **Obsidian**, mergeți la [[Gestionează seifurile|comutatorul de seifuri]] și selectați **Deschideți directorul ca seif**. Navigați la **OneDrive → Documents**.

> [!info] Sincronizare pe Android
> OneDrive poate să nu funcționeze bine pentru sincronizarea pe Android. Luați în considerare aplicații precum [Dropsync](https://play.google.com/store/apps/details?id=com.ttxapps.dropsync) sau [FolderSync](https://play.google.com/store/apps/details?id=dk.tacit.android.foldersync.lite).

> [!tip] Bune practici
> - Păstrați întotdeauna fișierele seifului **Available Offline**, apăsând clic dreapta pe director și selectând **Always keep on this device**.
> - Evitați folosirea funcției **Files On-Demand** din OneDrive pentru seifuri, pentru a preveni problemele de sincronizare.

## Google Drive

**Sisteme recomandate**: `Windows`, `macOS`, `Android` (funcționalitate limitată pe iOS)

[Google Drive](https://support.google.com/drive/answer/10838124?hl=en) este o altă soluție populară de stocare în cloud. Deși nu este acceptat oficial pentru sincronizarea seifurilor Obsidian, puteți folosi aplicații și module terțe pentru a sincroniza pe mai multe dispozitive.

> [!info] Suport iOS
> Google Drive nu este acceptat oficial pentru sincronizarea seifurilor Obsidian pe iOS. Luați în considerare o soluție sau un modul terț pentru sincronizare pe iOS.

**Cum să creați și să stocați seiful dumneavoastră în Google Drive**:

1. **Configurați Google Drive**:
    - Pe Windows sau macOS: Descărcați aplicația Google Drive și autentificați-vă.
    - Pe Android: Asigurați-vă că Google Drive este activat și autentificat.
2. **Creați un seif nou în Google Drive**:
    - Pe Windows/macOS:
        1. Deschideți **File Explorer** (Windows) sau **Finder** (macOS) și navigați la **Google Drive**.
        2. Creați un director nou (de exemplu, „Obsidian Vault”).
        3. Deschideți **Obsidian**, selectați **Creare seif nou** și selectați directorul Google Drive.
3. **Deschideți seiful pe alt dispozitiv**:
    - Pe alt dispozitiv, deschideți **Obsidian**, mergeți la [[Gestionează seifurile|comutatorul de seifuri]] și selectați **Deschideți directorul ca seif**. Navigați la directorul dumneavoastră Google Drive.

> [!tip] Bune practici
> - Setați fișierele seifului ca **Available Offline** în Google Drive pentru a evita problemele de sincronizare cauzate de descărcare.
> - Pentru iOS, luați în considerare metode alternative precum [[Introducere în Obsidian Sync|Obsidian Sync]], [[#iCloud]] sau folosiți modulul **Remotely Save**.

## Syncthing

**Sisteme recomandate**: `Windows`, `macOS`, `Linux`

Syncthing este un instrument descentralizat de sincronizare a fișierelor, care nu se bazează pe stocarea în cloud. Vă sincronizează seiful direct între dispozitive, prin rețea sau internet.

> [!info]+ Suport Android
> Aplicația oficială Syncthing pentru Android nu mai este întreținută. Totuși, o ramificație comunitară numită [Syncthing-Fork](https://github.com/Catfriend1/syncthing-android) continuă dezvoltarea activă și poate fi folosită pe dispozitivele Android.

**Cum să creați și să stocați seiful dumneavoastră folosind Syncthing**:

1. **Configurați Syncthing**:
   - Instalați Syncthing pe fiecare dispozitiv. Consultați [site-ul Syncthing](https://syncthing.net/) pentru ghiduri de instalare.
   - Pe Android, instalați [Syncthing-Fork](https://github.com/Catfriend1/syncthing-android) din lansările de pe GitHub sau din F-Droid.
2. **Creați și configurați un director partajat**:
   - Pe toate dispozitivele:
     1. Deschideți Syncthing și creați un director partajat. Setați calea directorului către seiful dumneavoastră Obsidian.
     2. Asigurați-vă că același director este selectat pe toate dispozitivele.
     3. Configurați preferințele de sincronizare a directorului (de exemplu, **Send & Receive** pentru sincronizare bidirecțională).
3. **Deschideți seiful în Obsidian**:
   - După ce directorul este sincronizat pe toate dispozitivele, deschideți **Obsidian**, mergeți la [[Gestionează seifurile|comutatorul de seifuri]] și selectați **Deschideți directorul ca seif**.

> [!info] Disponibilitatea dispozitivelor
> Syncthing funcționează cel mai bine atunci când cel puțin un dispozitiv este mereu pornit, pentru a asigura sincronizarea continuă.

> [!tip] Bune practici
> - Pentru sincronizarea locală, asigurați-vă că toate dispozitivele sunt conectate la aceeași rețea.
> - Excludeți `.obsidian` din sincronizare dacă doriți setări separate pe fiecare dispozitiv.
> - Folosiți tipare de excludere (ignore patterns) pentru a evita sincronizarea fișierelor temporare sau de rezervă.

## Git

**Sisteme recomandate**: `Windows`, `macOS`, `Linux`

**Git** este un sistem de control al versiunilor care vă permite să urmăriți modificările, să colaborați cu alții și să vă sincronizați seifurile prin depozite precum GitHub, GitLab sau un server găzduit propriu.

**Cum să vă sincronizați seiful folosind Git**:

1. **Configurați un depozit la distanță**:
    - Creați un depozit pe o platformă de găzduire Git (de exemplu, GitHub, GitLab sau un server găzduit propriu).
2. **Sincronizați-vă seiful**:
    1. Deschideți un terminal sau o interfață grafică Git (de exemplu, GitKraken, Sourcetree).
    2. Inițializați un depozit Git în directorul seifului dumneavoastră folosind `git init`.
    3. Adăugați depozitul la distanță: `git remote add origin [URL]`.
    4. Confirmați modificările: `git add .` și `git commit -m \"Your message\"`.
    5. Trimiteți modificările: `git push origin main`.
3. **Extrageți modificările pe alte dispozitive**:
    - Clonați depozitul pe alt dispozitiv și extrageți modificările folosind `git pull origin main`.

> [!info] Este necesară sincronizarea manuală
> Git oferă un control al versiunilor solid, dar sincronizarea nu este automată. Trebuie să trimiteți și să extrageți modificările manual.

## Sincronizarea pe iPhone și iPad

**Opțiuni recomandate**:
- [[Introducere în Obsidian Sync|Obsidian Sync]]
- [[#iCloud]]

> [!info] Evitați combinarea serviciilor de sincronizare
> Evitați sincronizarea aceluiași seif pe mai multe servicii simultan (de exemplu, folosind atât Obsidian Sync, cât și iCloud) pentru a preveni conflictele sau coruperea datelor.

**Opțiuni neacceptate**:
Următoarele servicii nu sunt acceptate oficial pe iOS, dar unii utilizatori au găsit soluții alternative folosind instrumente sau module terțe:

- Dropbox
- Google Drive
- OneDrive
- Syncthing

Unii utilizatori au folosit cu succes module precum **Remotely Save** sau **LiveSync** pentru a sincroniza seifuri pe iOS. Totuși, aceste metode nu sunt acceptate oficial, iar rezultatele pot varia.

### Working Copy

**Sisteme recomandate**: `iOS`
**Necesită**: [[#Git]]

**Working Copy** este un client Git pentru iOS care vă permite să clonați, să confirmați și să trimiteți modificări către un depozit Git. Funcționează bine pentru sincronizarea seifurilor Obsidian prin Git, deși unele funcții necesită o achiziție plătită în aplicație.

**Cum să vă sincronizați seiful folosind Working Copy**:

1. **Instalați Working Copy**:
    - Descărcați aplicația **[Working Copy](https://apps.apple.com/us/app/working-copy-git-client/id896694807)** pe iPhone sau iPad.
2. **Clonați depozitul dumneavoastră Git**:
    - Deschideți Working Copy, apăsați **Add Repository** și introduceți URL-ul depozitului dumneavoastră (de exemplu, GitHub, GitLab).
3. **Conectați depozitul la Obsidian**:
    - Conectați directorul depozitului clonat la un seif gol în **Obsidian**.
4. **Confirmați și trimiteți modificările**:
    - După ce editați note în Obsidian, folosiți Working Copy pentru a **Commit** și **Push** modificările către depozitul la distanță.
    - Pe alte dispozitive, extrageți modificările folosind Git pentru a sincroniza seiful.

> [!info] Utilizare în comunitate
> Deși Working Copy nu este acceptat oficial, mulți utilizatori l-au folosit cu succes pentru a sincroniza seifuri cu Git.

## Întrebări frecvente

**De ce serviciul meu de sincronizare preferat nu este acceptat oficial?**

Spre deosebire de unele aplicații de luat notițe care accesează câte un fișier o dată, Obsidian necesită acces la întregul seif pentru funcțiile sale (de exemplu, actualizarea legăturilor la redenumirea unui fișier). Acest lucru face dificilă funcționarea fiabilă a unor servicii cu Obsidian.

**De ce trebuie să păstrez fișierele „Available Offline”?**

Dacă serviciile precum OneDrive sau iCloud descarcă fișierele de pe dispozitiv (de exemplu, folosind **Files On-Demand** sau **Optimize Mac Storage**), Obsidian nu le mai poate accesa, cauzând probleme de sincronizare. Marcați directorul seifului dumneavoastră ca **Always keep on this device** (OneDrive) sau asigurați-vă că **Keep Downloaded** este activat (iCloud).

**Cum gestionez configurații diferite pentru seifurile mele?**

Obsidian vă permite să personalizați directorul de configurare pe dispozitiv, folosind funcția [[Directorul de configurare|Directoare de configurare]].
