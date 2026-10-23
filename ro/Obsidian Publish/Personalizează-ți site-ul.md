---
permalink: publish/customize
publish: true
description: Află cum să personalizezi aspectul și stilul site-ului tău Obsidian Publish.
aliases:
  - Customize your site
---
Această pagină explică cum poți personaliza modul în care arată și se simte site-ul tău [[Introducere în Obsidian Publish|Obsidian Publish]].

## Fișiere statice

Poți personaliza site-ul tău [[Publică-ți conținutul#Publish notes|publicând]] următoarele fișiere pe site-ul tău:

- `publish.css` pentru a adăuga CSS personalizat
- `publish.js` pentru a adăuga JavaScript personalizat
- `favicon-32x32.png` pentru a seta favicon-ul

**Note:**

- [Variabilele CSS pentru Publish](https://docs.obsidian.md/Reference/CSS+variables/Publish/Publish) pot fi găsite pe site-ul nostru de documentație.
- Deoarece Obsidian nu suportă fișiere CSS sau JavaScript, trebuie să folosești o altă aplicație pentru a le crea și edita.
- Atât `publish.css`, cât și `publish.js` trebuie să se afle în directorul rădăcină (`/`) al seifului tău.
- Implicit, `publish.css` și `publish.js` nu apar în exploratorul de fișiere, dar poți totuși să le publici din fereastra de dialog **Publică schimbările**.
- Pentru a folosi JavaScript personalizat cu `publish.js`, ai nevoie de un [[Domenii personalizate|domeniu personalizat]].

Pentru favicon-uri, Obsidian Publish suportă următoarele convenții de denumire, unde `32` reprezintă dimensiunile pictogramei în pixeli:

- `favicon-32.png`
- `favicon-32x32.png`
- `favicon.ico`

Îți recomandăm să furnizezi una sau mai multe dintre următoarele dimensiuni:

- `favicon-32x32.png`
- `favicon-128x128.png`
- `favicon-152x152.png`
- `favicon-167x167.png`
- `favicon-180x180.png`
- `favicon-192x192.png`
- `favicon-196x196.png`

Ai libertatea de a plasa favicon-urile oriunde în seif, atâta timp cât sunt publicate pe site-ul tău.

## Folosește o temă comunitară

Pentru a folosi una dintre temele comunitare pentru site-ul tău:

1. Deschide seiful tău în exploratorul de fișiere implicit al sistemului tău de operare.
2. Mergi la directorul de setări al seifului (implicit: `.obsidian`).
3. Deschide directorul `themes`.
4. Copiază fișierul CSS al temei pe care vrei să o folosești pentru site-ul tău.
5. Lipește fișierul în directorul rădăcină al seifului tău.
6. Redenumește fișierul CSS în `publish.css`.
7. [[Publică-ți conținutul#Publish notes|Publică]] `publish.css`.

**Note:**

- Dacă stilul nu se actualizează în câteva minute, încearcă să reîmprospătezi memoria cache a browserului.
- Poți comuta între modul luminos și modul întunecat în [[Gestionează site-urile#View site options|opțiunile siteului]].
- Multe teme comunitare folosesc **Style Settings** pentru stilizare personalizată, dar aceste setări nu funcționează pe Obsidian Publish.

> [!tip] Dezvoltarea temelor
> Nu găsești tema potrivită pentru tine? Află cum să [construiești o temă Publish](https://docs.obsidian.md/Themes/Obsidian+Publish+themes/Build+a+Publish+theme) chiar tu.

## Activează funcții de interfață

Poți comuta mai multe funcții de interfață pentru site-ul tău, precum afișajul grafic sau un cuprins.

Răsfoiește funcțiile de interfață disponibile în secțiunile **Experiența de citire** și **Componente** din [[Gestionează site-urile#View site options|opțiunile siteului]]

### Personalizează navigarea

În cadrul Obsidian Publish, ai posibilitatea să personalizezi ordinea de navigare și afișarea fișierelor și directoarelor din [[Exploratorul de fișiere|exploratorul de fișiere]] Publish. Elementele de navigare sunt listate implicit în ordinea publicării. Notele nepublicate nu vor apărea în acest panou.

#### Accesarea opțiunilor de personalizare a navigării

1. În [[Panglică|Panglică]], selectează **Publică schimbările** ![[lucide-send.svg#icon]] sau deschide [[Paleta de comenzi|Paleta de comenzi]] și scrie **Publish: Publish changes...**
2. În fereastra de dialog **Publică schimbările**, selectează **Schimbă opțiunile siteului** ![[lucide-cog.svg#icon]].
3. Sub **Setările componentelor**, lângă **Personalizează navigarea**, selectează butonul **gestionează**. 

O nouă fereastră pop-up intitulată **Navigare** va apărea peste fereastra **Schimbă opțiunile siteului**.

#### Ajustează elementele de navigare

În secțiunea etichetată **Previzualizare navigare**, poți ajusta ordinea de afișare a conținutului tău publicat.

1. Selectează directorul sau nota pe care vrei să o ajustezi.
2. Trage nota sau directorul în sus sau în jos până ajunge în locul dorit.
3. În partea dreaptă jos a ferestrei **Navigare**, selectează **Gata**. 

Publish va trimite schimbările tale de navigare către site-ul tău. 

#### Ascunde și afișează elemente de navigare

Dacă există note sau directoare pe care le-ai publicat, dar pe care nu vrei să le vezi în navigare, poți opta să le ascunzi. 

1. Selectează directorul sau nota pe care vrei să o ajustezi.
2. Apasă click-dreapta și selectează **Ascunde din navigare**. Elementul ar trebui să dispară acum din **Previzualizare navigare**.
3. În partea dreaptă jos a ferestrei **Navigare**, selectează **Gata**. 

Publish va trimite schimbările tale de navigare către site-ul tău. 

> [!tip] Poți **afișa elementele ascunse** selectând căsuța de bifare din dreapta titlului **Previzualizare navigare**

## Întrebări frecvente

**Pot muta fișiere dintr-un director în altul în cadrul navigării?**

Nu. Structura de navigare a fișierelor pentru notele din directoare trebuie păstrată. Poți ajusta ordinea notelor în cadrul directoarelor (inclusiv rădăcina seifului), precum și ordinea directoarelor în cadrul altor directoare. 

**Pot edita ordinea mai multor note și directoare înainte de a selecta Gata?**

Da.

**Cum revin la aceste schimbări?**

- **Ordinea de afișare**: Selectează pictograma **Restaurare implicită** (săgeata de rotire în sens invers acelor de ceasornic) de lângă **Ordinea de afișare a elementelor de navigare**. Aceasta va restaura elementele tale de navigare la ordinea alfabetică.
- **Starea de ascundere**: Selectează pictograma **Restaurare implicită** (săgeata de rotire în sens invers acelor de ceasornic) de lângă **Ascunde pagini sau directoare din navigare**. Aceasta va readuce elementele de navigare ascunse la o stare vizibilă.
