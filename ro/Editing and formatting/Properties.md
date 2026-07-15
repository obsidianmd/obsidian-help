---
permalink: properties
cssclasses:
  - soft-embed
publish: true
mobile: false
description: 'Proprietățile vă permit să organizați informații despre o notă. Proprietățile conțin date structurate, precum text, legături, date calendaristice, casete de bifare și numere.'
---

Proprietățile vă permit să organizați informații despre o notă. Proprietățile conțin date structurate, precum text, legături, date calendaristice, casete de bifare și numere. Proprietățile pot fi folosite și în combinație cu [[Community plugins|module ale comunității]] care pot face lucruri utile cu datele dvs. structurate.

## Adăugați proprietăți la o notă

Există mai multe moduri de a adăuga o proprietate la o notă:

- Folosiți [[Command palette|comanda]] **Add file property**.
- Folosiți combinația de taste **`Cmd/Ctrl+;`**.
- Alegeți **Add file property** din meniul **More actions** (accesat prin pictograma cu trei puncte sau printr-un clic dreapta pe filă).
- Introduceți `---` chiar la începutul unui fișier.

Odată ce adăugați o proprietate, va apărea un rând în partea de sus a fișierului cu două câmpuri: _numele_ proprietății și _valoarea_ proprietății.

Pentru nume, puteți alege orice doriți. Obsidian oferă mai multe proprietăți implicite: `tags`, `cssclasses` și `aliases`.

Odată ce ați ales numele proprietății, îi puteți da o valoare.

### Tipuri de proprietăți

Pe lângă un nume și o valoare, proprietățile au și un _tip_. Tipul unei proprietăți determină ce fel de valori poate stoca și modul în care Obsidian le gestionează. Pentru a schimba tipul unei proprietăți, faceți clic pe pictograma de tip de lângă numele proprietății și selectați o altă opțiune. Puteți gestiona tipurile de proprietăți și folosind modulul principal [[Properties view]].

Obsidian acceptă următoarele tipuri de proprietăți:

- **[[#Text]]**
- **[[#List]]**
- **[[#Number]]**
- **[[#Checkbox]]**
- **[[#Date]]**
- **[[#Date & time]]**
- **[[#Tags]]**

Odată ce un tip de proprietate este atribuit unui nume de proprietate, toate proprietățile cu acel nume din seiful dvs. vor folosi același tip.

## Utilizări avansate

### Căutarea proprietăților

Proprietățile au propria [[Search|sintaxă de căutare]] pe care o puteți folosi împreună cu alți termeni și operatori de căutare. [[Search#Search properties|Consultați sintaxa de căutare pentru proprietăți]].

### Șabloane

Puteți adăuga proprietăți la [[Plugins/Templates|Șabloane]].

Când inserați un șablon în nota activă, toate proprietățile din șablon vor fi adăugate la notă. Obsidian va combina, de asemenea, orice proprietăți care există deja în nota dvs. cu proprietățile din șablon. ^templates-properties

### Redenumiți proprietăți

Puteți redenumi o proprietate făcând clic dreapta pe ea în [[Properties view|modul de vizualizare a tuturor proprietăților]].

### Moduri de afișare

Puteți schimba modul în care sunt afișate proprietățile în nota dvs. accesând **[[Settings]] → Editor → Properties in document**. Opțiunile sunt:

- **Visible** (implicit) – afișează proprietățile în partea de sus a notei, dacă există.
- **Hidden** – ascunde proprietățile, care pot fi afișate în continuare în bara laterală prin [[Properties view]].
- **Source** – afișează proprietățile în format YAML text simplu.

### Fragmente CSS

Puteți folosi [[CSS snippets|fragmente CSS]] pentru a schimba aspectul unor note specifice.

### Neacceptate

Câteva funcții nu sunt momentan acceptate în Obsidian:

- **Proprietăți imbricate**: Pentru a vizualiza proprietăți imbricate, vă recomandăm să folosiți [[Views and editing mode#Source mode|modul sursă]].
- **Editarea în masă a proprietăților**: Pentru editare în masă aprofundată în afara [[Properties view]], vă recomandăm să folosiți instrumente de editare în masă precum VSCode, scripturi și module ale comunității.
- **Markdown în proprietăți**: Aceasta este o limitare intenționată, deoarece proprietățile sunt destinate unor informații mici, atomice, care sunt lizibile atât pentru oameni, cât și pentru mașini.

## Combinații de taste

### Adăugați o proprietate

| Acțiune | Combinație de taste |
|---|---|
|Adăugați o proprietate nouă|`Cmd + ;`|

### Navigați între proprietăți

Când o proprietate este focalizată 

| Acțiune | Combinație de taste |
|---|---|
|Focalizați proprietatea următoare|`Down arrow` sau `Tab`|
|Focalizați proprietatea anterioară|`Up arrow` sau `Shift+Tab`|
|Treceți la editor|`Alt+Down arrow`|

### Selectați proprietăți

| Acțiune | Combinație de taste |
|---|---|
|Extindeți selecția în sus|`Shift+Up arrow`|
|Extindeți selecția în jos|`Shift+Down arrow`|
|Selectare totală|`Cmd+A`|

### Editați proprietăți

| Acțiune | Combinație de taste |
|---|---|
|Editați numele proprietății|`Left arrow`|
|Editați valoarea proprietății|`Right arrow`|
|Focalizați proprietatea|`Escape`|
|Ștergeți proprietatea|`Cmd+Backspace`<br><br>dacă sunt selectate proprietăți, va șterge selecția în schimb.|
|Anulare|`Cmd+Z`|
|Refacere|`Cmd+Shift+Z`|

### Vim (avansat)

| Acțiune | Combinație de taste |
|---|---|
|Deplasare în jos|`j`|
|Deplasare în sus|`k`|
|Focalizați cheia|`h`|
|Focalizați valoarea|`l`|
|Focalizați valoarea (cursorul la sfârșit)|`A`|
|Focalizați valoarea (cursorul la început)|`i`|
|Creați o proprietate nouă|`o`|

## Formatul proprietăților

Proprietățile sunt stocate în format [YAML](https://yaml.org/) în partea de sus a fișierului. YAML este un format popular, ușor de citit atât pentru oameni, cât și pentru calculatoare.

Numele proprietăților sunt separate de valorile lor printr-un semn de două puncte urmat de un spațiu:

```yaml
---
name: value
---
```

Deși ordinea fiecărei perechi nume-valoare nu contează, fiecare nume trebuie să fie unic în cadrul unei note. De exemplu, nu puteți avea mai mult de o proprietate `tags`.

Valorile pot fi [[#Text|text]], [[#Number|numere]], [[#Checkbox|casete de bifare]], [[#Date|date calendaristice]], [[#Date & time|date și ore]], sau [[#List|liste]].

### Text

Proprietățile de tip text conțin un singur rând de text. Formatarea Markdown nu este afișată în proprietățile de tip text. Hashtag-urile nu creează etichete atunci când sunt folosite în proprietăți de tip text.

Proprietățile de tip text pot conține URL-uri și [[Internal links|legături interne]] folosind sintaxa `[[Link]]`. [[Internal links|Legăturile interne]] din proprietățile de tip text trebuie încadrate cu ghilimele. Obsidian le va adăuga automat dacă introduceți manual legături interne în proprietăți, dar aveți grijă să le adăugați atunci când folosiți module de creare a șabloanelor.

```yaml
---
title: A New Hope
link: "[[Episode IV]]"
url: https://www.example.com
---
```

### List

Proprietățile de tip listă conțin mai multe valori. Fiecare valoare dintr-o listă apare pe propriul rând, precedată de o cratimă (-) și un spațiu.

Valorile din listă pot conține text, numere și [[Internal links|legături interne]]. Când folosiți [[Internal links|legături interne]] în proprietăți de tip listă, încadrați-le cu ghilimele.

```yaml
---
cast: 
  - Mark Hamill
  - Harrison Ford
  - Carrie Fisher
links:
  - "[[Link]]" 
  - "[[Link2]]"
---
```

### Number

Proprietățile de tip număr trebuie să fie întotdeauna un număr literal, nu o expresie cu operatori. Sunt permise atât numere întregi, cât și zecimale.

```yaml
---
year: 1977
pie: 3.14
---
```

### Checkbox

Proprietățile de tip casetă de bifare sunt fie `true`, fie `false`. În Live Preview, aceasta se afișează ca o casetă de bifare.

```yaml
---
favorite: true
reply: false
last: # Valoare nedeterminată; adesea tratată ca false
```

### Date

Proprietățile de tip dată sunt stocate în următorul format: 

```yaml
---
date: 2020-08-21
---
```

Selectorul de dată urmează formatul implicit de dată și oră al sistemului dvs. de operare. Îl puteți schimba din preferințele sistemului dvs.: 

> [!info]- Windows
> **[[Settings]] → Time & Language → Language & Region → Regional Format → Change Formats**
> 
> ![[Windows-OS-DateTime.png#interface]]

> [!info]- Mac OS
> **System Preferences → Language and Region → Date format**
> 
> ![[Mac-OS-DateTime.png|450]]

Cu modulul [[Daily notes|Note zilnice]] activat, proprietatea de dată va funcționa suplimentar ca o legătură internă către nota zilnică corespunzătoare acelei date.

![[Daily notes#^daily-notes-date]]

### Date & time

Proprietățile de tip dată și oră includ atât o dată, cât și o oră specifică, stocate în următorul format:

```yaml
---
time: 2020-08-21T10:30:00
---
```

La fel ca [[#Date|proprietățile de tip dată]], selectorul de dată și oră urmează formatul implicit al sistemului dvs. de operare. Îl puteți schimba din preferințele sistemului dvs.

### Tags

Proprietățile de tip etichete sunt un tip special de proprietate, folosit exclusiv de proprietatea `tags`. Acest tip de proprietate nu poate fi atribuit altor proprietăți.

Proprietățile de tip etichete sunt formatate ca o listă, cu fiecare etichetă pe propriul rând, precedată de o cratimă (-) și un spațiu. 

```yaml
---
tags: 
  - journal
  - personal
  - draft
---
```

Proprietatea `tags` este una dintre [[#Default properties|proprietățile implicite]] ale Obsidian. Consultați [[Tags|Etichete]] pentru mai multe informații despre folosirea etichetelor în Obsidian.

### Proprietăți JSON

Deși recomandăm folosirea YAML pentru definirea proprietăților, puteți defini proprietăți și folosind [JSON](https://www.json.org/):

```json
---
{
  "tags": ["journal"],
  "publish": false
}
---
```

Rețineți că blocul JSON va fi citit, interpretat și salvat ca YAML.

## Proprietăți implicite

Obsidian vine cu un set de proprietăți implicite:

| Proprietate     | Tip | Descriere                                                  |
| ------------ | ---- | ------------------------------------------------------------ |
| `tags`       | Listă | Consultați [[Editing and formatting/Tags\|Etichete]].                   |
| `aliases`    | Listă | Consultați [[Aliases]].                                             |
| `cssclasses` | Listă | Vă permite să stilizați note individuale folosind [[CSS snippets|fragmente CSS]]. |

### Proprietăți pentru Obsidian Publish

Următoarele proprietăți implicite pot fi folosite cu [[Introduction to Obsidian Publish|Obsidian Publish]]:

| Proprietate      | Descriere                                                                                                |
| ------------- | ---------------------------------------------------------------------------------------------------------- |
| `publish`     | Consultați [[Publish your content#Automatically select data to publish\|Selectați automat datele de publicat]]. |
| `permalink`   | Consultați [[Permalinks]].                                                                            |
| `description` | Consultați [[Social media link previews#Description\|Descriere]].                                               |
| `image`       | Consultați [[Social media link previews#Image\|Imagine]].                                                           |
| `cover`       | Consultați [[Social media link previews#Image\|Imagine]].                                                           |

### Proprietăți depreciate

Aceste proprietăți au fost depreciate în Obsidian 1.4 și ar trebui înlocuite cu echivalentele lor moderne. Suportul pentru acestea ca [[#Default properties|proprietăți implicite]] este eliminat în Obsidian 1.9.

| Proprietate | Descriere |
|-|-|
| `tag` | Alias depreciat pentru `tags`. |
| `alias` | Alias depreciat pentru `aliases`. |
| `cssclass` | Alias depreciat pentru `cssclasses`. |

> [!tip] Dacă trebuie să convertiți fișierele din seiful dvs. la formatul [[#Default properties|proprietăților implicite]], puteți folosi [[Format converter]] pentru a vă schimba seiful în masă.
