---
permalink: plugins/web-viewer
---
Web viewer este un [[Core plugins|modul integrat]] care îți permite să deschizi legături externe în Obsidian pe desktop. Astfel poți citi conținutul legăturilor fără să părăsești aplicația, ceea ce facilitează multitasking-ul pe proiecte de cercetare web.

Legăturile externe se deschid ca [[Tabs|filă]], pe care o poți rearanja, împărți și deschide într-o [[pop-out windows|fereastră separată]]. Orice card cu pagină web încorporat în fișiere [[canvas]] poate fi deschis ca filă Web viewer.

Web viewer nu este un înlocuitor pentru browserul tău principal. Web viewer oferă un mod rapid de a accesa pagini web pentru cercetare în interiorul Obsidian. Totuși, nu oferă funcționalitatea completă, controalele de securitate sau extensibilitatea unui browser dedicat.

## Modul cititor

Dă clic pe pictograma cu ochelari pentru a vedea o versiune de text simplu a paginii web. Această funcție curăță conținutul folosind biblioteca Readability de la Mozilla, dezvoltată pentru Firefox.

## Salvează în seif

Dă clic pe pictograma mai multe acțiuni pentru a salva o pagină web în seiful tău. Poți personaliza locația de salvare a paginii mergând la **[[Settings|Setări]]** → **Web viewer**.

## Blocarea reclamelor

Web viewer blochează reclamele implicit. Poți personaliza regulile de blocare a reclamelor adăugând liste precum [Easylist](https://easylist.to/). 

## Securitate

Dacă folosești module Obsidian terțe, îți recomandăm să folosești browserul tău principal pentru sarcini sensibile și site-uri protejate prin parolă, în loc de Web viewer.

Web viewer se bazează pe aceeași funcție [Chromium](https://developer.chrome.com/docs/apps/reference/webviewTag) care îți permite să încorporezi pagini web în [[Canvas]]. Web viewer a fost [auditat independent](https://obsidian.md/blog/cure53-second-client-audit/) pentru a verifica dacă a fost implementat în siguranță.

Modulele Obsidian [[Plugin security#Plugin capabilities|nu sunt izolate (sandboxed)]] și au control profund asupra aplicației. Acest design permite funcționalități puternice, dar vine și cu compromisuri de securitate. În timp ce Obsidian rulează, modulele terțe au acces complet la cookie-urile din Web viewer.
