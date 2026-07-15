---
permalink: publish/sites
---
Această pagină explică cum să administrezi siteurile [[Introduction to Obsidian Publish|Obsidian Publish]].

Un site este o colecție de note găzduită de Obsidian Publish și disponibilă online, fie printr-o adresă Obsidian Publish, fie printr-un [[Custom domains|domeniu personalizat]].

## Creează un site nou

> [!note] Numărul de siteuri pe care le poți avea în același timp este determinat de abonamentul tău Obsidian Publish. Înainte de a crea un site nou, asigură-te că abonamentul tău îl permite.

1. În panglică, în partea stângă a ferestrei aplicației, apasă pe **Publică schimbările** ![[lucide-send.svg#icon]].
2. Dacă ai deja un site existent, apasă pe **Comută la alt site** ![[lucide-repeat.svg#icon]].
3. La **ID-ul siteului**, introdu calea pe care o vrei pentru site-ul tău. De exemplu, un site cu ID-ul `my-amazing-site` este disponibil la publish.obsidian.md/my-amazing-site.
4. Apasă pe **Creează**.

## Șterge un site existent

> [!note] Notele rămân în seiful tău chiar și după ce ștergi un site.

1. În panglică, în partea stângă a ferestrei aplicației, apasă pe **Publică schimbările** ![[lucide-send.svg#icon]].
2. Apasă pe **Comută la alt site** ![[lucide-repeat.svg#icon]].
3. Apasă pe **Șterge siteul** ![[lucide-x.svg#icon]] din dreapta siteului pe care vrei să-l ștergi.
4. Apasă pe **Șterge** pentru a confirma.

## Comută între siteuri

1. În panglică, în partea stângă a ferestrei aplicației, apasă pe **Publică schimbările** ![[lucide-send.svg#icon]].
2. Apasă pe **Comută la alt site** ![[lucide-repeat.svg#icon]].
3. Apasă pe **Alege** din dreapta siteului la care vrei să comuți.

## Schimbă ID-ul siteului

1. În panglică, în partea stângă a ferestrei aplicației, apasă pe **Publică schimbările** ![[lucide-send.svg#icon]].
2. Apasă pe **Comută la alt site** ![[lucide-repeat.svg#icon]].
3. Apasă pe **Editează ID-ul siteului** ![[lucide-edit-3.svg#icon]] din dreapta siteului pe care vrei să-l editezi.
4. La **ID-ul siteului**, introdu noul ID pentru site-ul tău.
5. Apasă pe **Schimbă**.

## Vizualizează opțiunile siteului

1. În panglică, în partea stângă a ferestrei aplicației, apasă pe **Publică schimbările** ![[lucide-send.svg#icon]].
2. În fereastra de dialog **Publică schimbările**, apasă pe **Schimbă opțiunile siteului** ![[lucide-cog.svg#icon]].

## Opțiunile siteului

### General

| Opțiune                          | Tip   | Descriere                                                                                                                |
| ------------------------------- | ------ | -------------------------------------------------------------------------------------------------------------------------- |
| Numele siteului                       | Câmp  | Numele public și titlul site-ului tău Obsidian Publish.                                                                   |
| Pagina principală                   | Câmp  | Locația fișierului markdown pe care vrei să acționeze ca pagină de start.                                                    |
| Siglă                            | Câmp  | Imaginea pe care vrei să o folosești ca banner pentru site-ul tău. Imaginea trebuie [[Publish your content#Publică note\|să fie publicată]]. |
| Colaborare pe site              | Buton | Declară alți utilizatori cărora vrei să le acorzi acces pentru a-ți edita notele publicate. Utilizatorii trebuie să aibă un cont Obsidian.             |
| Domeniu personalizat                   | Buton | [[Custom domains|Domenii personalizate]]                                                                                                         |
| Nu permite indexarea de către motoarele de căutare | Comutator | Împiedică motoarele de căutare respectuoase să-ți indexeze site-ul, adăugând un fișier `robots.txt`.                                   |

### Aparență

| Opțiune            | Tip     | Descriere                                                                               |
|-------------------|----------|-------------------------------------------------------------------------------------------|
| Tema             | Meniu derulant | Alege cum este afișată tema pe site-ul tău; **Luminoasă**, **Întunecată** sau **Adaptare la sistem**. |
| Comutator luminos/întunecat | Comutator   | Permite utilizatorilor să comute între modul **luminos**/**întunecat** cu un buton de pe site-ul tău.          |

## Experiența de citire

| Opțiune               | Tip   | Descriere                                                                                |
|----------------------|--------|--------------------------------------------------------------------------------------------|
| Afișează previzualizarea plutitoare   | Comutator | Activează sau dezactivează previzualizarea paginii la trecerea cursorului peste o legătură internă activă. |
| Ascunde titlul paginii      | Comutator | Activează sau dezactivează afișarea titlului inline al unei note publicate.                    |
| Lungimea lizibilă a rândului | Comutator | Activează sau dezactivează lungimea lizibilă a rândului pe site-ul tău.                                   |
| Întreruperi stricte de rând   | Comutator | Activează sau dezactivează afișarea întreruperilor de rând simple pe site-ul tău.                    |
| Stivuiește paginile          | Comutator | Activează sau dezactivează [[Tabs#Stivuiește grupurile de file|filele stivuite]] pe site-ul tău.    |

### Componente

| Opțiune                 | Tip   | Descriere                                                                                                                          |
|------------------------|--------|--------------------------------------------------------------------------------------------------------------------------------------|
| Afișează navigarea        | Comutator | Activează sau dezactivează afișajul [[File explorer|exploratorul de fișiere]] pe site-ul tău Publish.                                                                   |
| Personalizează navigarea   | Buton | [[Customize your site#Personalizează navigarea\|Personalizează]] ordinea în care sunt listate fișierele tale, dacă **Afișează navigarea** este activat. |
| Afișează bara de căutare        | Comutator | Activează sau dezactivează o bară de căutare pe site-ul tău.                                                                         |
| Afișează afișajul grafic        | Comutator | Activează sau dezactivează afișajul grafic din bara laterală dreaptă a site-ului tău.                                                              |
| Afișează cuprinsul | Comutator | Activează sau dezactivează afișajul [[Outline|cuprinsului]] pe site-ul tău.                                                              |
| Afișează referințele         | Comutator | Activează sau dezactivează [[Backlinks|referințele]] pe site-ul tău.                                                                        |

### Alte setări ale site-ului

| Opțiune                         | Tip   | Descriere                                            |
| ------------------------------ | ------ | ------------------------------------------------------ |
| Parole                      | Buton | [[Obsidian Publish/Security and privacy#Adaugă o parolă pentru site\|Setează o parolă]] pentru a restricționa accesul la întregul tău site. |
| Cod de tracking Google Analytics | Câmp  | **Doar pentru URL-ul domeniului personalizat**. Introdu aici codul tău de tracking Google Analytics.                                                       |
