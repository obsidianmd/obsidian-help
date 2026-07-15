---
permalink: publish/troubleshoot
publish: true
mobile: true
description: Această pagină detaliază unele probleme comune pe care le poți întâmpina la folosirea Obsidian Publish
---
Această pagină listează problemele comune pe care le poți întâmpina cu [[Introduction to Obsidian Publish|Obsidian Publish]] și cum să le rezolvi.

Asigură-te că treci mai întâi prin [[Media files|Fișiere media]] și [[Publish limitations|Limitările Publish]].

## General

### Publicarea notelor

**Primesc o eroare de hash când încerc să public o notă.**

Folosești un [[Community plugins|modul comunitar]] care editează ora de modificare a fișierului la actualizare? Dacă da, acest modul poate intra în conflict cu Publish. Te rugăm să raportezi problema dezvoltatorului modulului pentru a o rezolva.

**Primesc o eroare ciudată de rețea, iar site-ul meu Publish este foarte mare.**

Este posibil să fie nevoie să examinăm baza ta de date. Te rugăm să [[Help and support#Contact Obsidian support|contactezi asistența Obsidian]] pentru ajutor.

## CSS și teme

**CSS-ul meu din [[Configuration folder|directorul de configurare]] nu funcționează pe Publish. De ce?**

Publish nu citește din directorul de configurare. În schimb, trebuie să creezi un fișier `publish.css` în directorul de nivel superior al seifului tău publicat. Poți afla mai multe despre acest lucru în [[Customize your site|Personalizează-ți site-ul]].

**CSS-ul meu nu arată la fel pe Publish cum arată în aplicație. De ce?**

CSS-ul Obsidian Publish nu este exact identic cu cel din aplicație. Îți recomandăm să [dezvolți orice CSS și teme](https://docs.obsidian.md/Themes/Obsidian+Publish+themes/About+Obsidian+Publish+themes) special pentru Publish, de la zero.

În _general_, ceea ce funcționează pentru [[Views and editing mode#Reading view|modul de citire]] are șanse mari să funcționeze și pe Publish.

