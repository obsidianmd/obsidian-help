---
permalink: ios
aliases:
  - Obsidian for iOS and iPadOS
---
Aplicația mobilă Obsidian pentru iOS și iPadOS aduce funcții puternice de luare de notițe pe iPhone-ul și iPad-ul tău. O poți descărca din [Apple App Store](https://apps.apple.com/us/app/obsidian-connected-notes/id1557175442).

Această pagină acoperă funcțiile specifice iOS, inclusiv widget-uri, integrarea cu Siri și Scurtăturile (Shortcuts). 

## Sync

Pentru informații despre sincronizarea notelor între dispozitive, te rugăm să consulți [[Sincronizează-ți notițele pe toate dispozitivele]].

## Widget-uri

Obsidian pentru iOS oferă mai multe widget-uri pentru a efectua acțiuni rapide asupra seifului tău.

> [!note] Notă
> Widget-urile sunt disponibile pe iOS și iPadOS 18 și versiuni mai noi.
> Widget-urile nu sunt disponibile atunci când se folosește „Necesită Face ID” pentru a debloca aplicația.


### Widget-uri pentru ecranul de blocare și Centrul de control

Widget-urile pentru ecranul de blocare și Centrul de control îți permit să:
- Creezi o notă nouă
- Deschizi o notă anume
- Deschizi nota zilnică
- Deschizi căutarea
- Deschizi Obsidian

### Widget-uri pentru ecranul de start

Widget-urile pentru ecranul de start îți permit să:
- Creezi o notă
- Vizualizezi o notă
- Deschizi nota ta zilnică

### Personalizarea widget-urilor

Poți personaliza widget-urile pentru a se potrivi fluxului tău de lucru, cum ar fi alegerea seifului de folosit sau specificarea unei anumite note de deschis.

- **Widget-uri pentru ecranul de start:** Apasă și menține apăsat widget-ul, apoi selectează **Editează widget**.
- **Widget-uri pentru ecranul de blocare:** Atinge și menține apăsat ecranul de blocare, apasă **Personalizează**, selectează ecranul de blocare, apoi apasă widget-ul pe care vrei să-l personalizezi.
- **Widget-uri pentru Centrul de control:** Deschide Centrul de control, apasă butonul **+** din stânga sus pentru a începe editarea, apoi apasă widget-ul pe care vrei să-l personalizezi.

Opțiuni de configurare pentru widget-ul **Notă nouă**:

![[ios-new-note-configuration.png|400]]

Opțiuni de configurare pentru widget-ul **Vizualizează notă**:

![[ios-view-note-configuration.png|400]]

## Scurtături

Obsidian se integrează cu aplicația Shortcuts de la Apple, permițându-ți să creezi automatizări puternice. Scurtăturile disponibile includ:

- **Deschide o notă** — Deschide o notă anume din seiful tău
- **Creează o notă nouă** — Creează o notă nouă în seiful tău
- **Deschide nota zilnică** — Sari direct la nota ta zilnică de astăzi
- **Captează în nota zilnică** — Adaugă text la începutul sau sfârșitul notei zilnice fără a deschide aplicația Obsidian
- **Captează în marcaj** — Adaugă text la începutul sau sfârșitul unei note marcate fără a deschide aplicația Obsidian

Scurtăturile de captare sunt deosebit de utile pentru luarea rapidă de notițe, deoarece îți permit să adaugi conținut la o notă în fundal.

## Meniul de partajare (Share Sheet)

Meniul de partajare al Obsidian îți permite să captezi conținut din pagini web. De asemenea, funcționează cu aplicații precum YouTube și alte rețele sociale.

> [!note]
> - Meniul de partajare nativ este disponibil pe iOS și iPadOS 18 și versiuni mai noi.
> - Funcțiile meniului de partajare descrise în această secțiune necesită Obsidian 1.13.0 sau o versiune mai nouă.

Folosește meniul de partajare pentru a trimite rapid conținut dintr-o altă aplicație în Obsidian:
1. Într-o altă aplicație, apasă butonul **Partajează**.
2. Selectează **Obsidian**.
3. Alege o locație.
4. Revizuiește sau editează conținutul captat.
5. Apasă **Salvează**.

![[ios-share-sheet-extension.png|400]]

### Locații

Locațiile îți permit să decizi unde ar trebui să ajungă conținutul partajat, înainte de a-l salva.

Locațiile pot capta către:
- **Notă nouă** — Creează o notă nouă într-un seif sau folder.
- **Notă zilnică** — Adaugă conținut la începutul sau sfârșitul notei zilnice de astăzi.
- **Notă marcată** — Adaugă conținut la începutul sau sfârșitul unei note marcate.
- **Notă** — Alege o notă existentă din seiful tău.
- **Marcaj nou** — Salvează un URL partajat în marcajele Obsidian.

![[ios-share-sheet-locations.png|400]]

### Personalizarea locațiilor

Poți crea locații pentru fluxuri de lucru comune, cum ar fi salvarea articolelor într-un inbox, adăugarea de citate la nota ta zilnică sau adăugarea de linkuri la marcaje.

Pentru a personaliza locațiile:

1. Deschide Obsidian din meniul de partajare iOS.
2. Apasă locația curentă din bara de instrumente.
3. Apasă butonul **+** pentru a crea o locație nouă, sau selectează o locație existentă pentru a o edita.
4. Alege seiful, comportamentul și setările opționale.

În funcție de tipul `Comportament`, poți configura opțiuni precum:
- Folder
- Șablon
- Grup de marcaje
- Poziția de adăugare (la început sau la sfârșit)
- Dacă linkurile partajate captează **textul integral** sau doar **URL-ul**

![[ios-share-sheet-add-location.png|400]]

### Folosirea unui șablon la partajare

Poți folosi un șablon atunci când partajezi conținut din meniul de partajare. Șabloanele îți permit să formatezi conținutul web captat cu detalii precum titlul paginii, autorul, site-ul sursă și data publicării.

Pentru a configura o locație cu un șablon:

1. Deschide Obsidian din meniul de partajare iOS.
2. Apasă locația curentă din bara de instrumente.
3. Apasă butonul **+** pentru a crea o locație nouă.
4. Introdu un nume pentru locație.
5. Selectează un seif.
6. Setează **Comportament** la **Notă nouă**.
7. În secțiunea **Opțional**, apasă **Șablon**.
8. Selectează o notă din seiful tău pentru a o folosi drept șablon.
9. Apasă **Salvează** pentru a salva locația.

![[ios-share-sheet-set-template.png|400]]

Când partajezi un link folosind această locație, Obsidian aplică mai întâi șablonul, apoi adaugă conținutul partajat.

Substituenți de șablon acceptați:

| Substituent | Descriere |
| --- | --- |
| `{{author}}` | Autorul articolului |
| `{{description}}` | Descrierea sau rezumatul articolului |
| `{{domain}}` | Numele de domeniu al site-ului |
| `{{favicon}}` | URL-ul favicon-ului site-ului |
| `{{image}}` | URL-ul imaginii principale a articolului |
| `{{published}}` | Data publicării articolului, folosind formatul implicit de dată |
| `{{published: YYYY-MM-DD}}` | Data publicării, folosind un format de dată personalizat |
| `{{site}}` | Numele site-ului |
| `{{title}}` | Titlul articolului |
| `{{url}}` | URL-ul articolului |
| `{{wordCount}}` | Numărul total de cuvinte din conținutul extras |

Poți folosi și substituenții standard de dată și oră ai șabloanelor:

| Substituent | Descriere |
| --- | --- |
| `{{date}}` | Data curentă |
| `{{date: YYYY-MM-DD}}` | Data curentă, folosind un format personalizat |
| `{{time}}` | Ora curentă |
| `{{time: HH:mm}}` | Ora curentă, folosind un format personalizat |

## Integrarea cu Siri

Poți folosi comenzi vocale Siri pentru a interacționa cu Obsidian:

- „Capture using Obsidian”
- „Capture to Obsidian”
- „Open my daily note in Obsidian”
- „Search in Obsidian”

## Integrarea cu Spotlight

Când cauți „Obsidian” în Spotlight pe iOS, vei vedea acțiuni rapide:
- Notă nouă
- Caută
- Notă zilnică


