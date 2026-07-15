---
permalink: publish/limitations
---

> [!tip] Membri ai comunității noastre minunate au găsit soluții pentru unele dintre aceste limitări. Pentru mai multe informații, te rugăm să vizitezi subiectul nostru [Publish Resources](https://forum.obsidian.md/t/obsidian-publish-resources/74582) de pe forumurile Obsidian.

## Module comunitare

Obsidian Publish are suport minim pentru [[Community plugins|module comunitare]]. 

Modulele care generează markdown brut, precum modulul Waypoint, sunt compatibile cu Publish deoarece nu necesită randarea datelor lor de către aplicație. 

În schimb, un modul care necesită un bloc de cod de modul pentru randare, precum Dataview sau Fantasy Statblocks, nu va funcționa implicit pe Publish. 

## Afișaj grafic

Publish oferă personalizare de bază a culorilor pentru afișajul său grafic folosind CSS. Poți modifica culorile nodurilor în fișierul tău `publish.css` utilizând [variabilele CSS ale afișajului grafic](https://docs.obsidian.md/Reference/CSS+variables/Plugins/Graph).

Reține că afișajul grafic publicat nu suportă opțiunile complete de sortare și vizualizare disponibile în [[Graph view|afișajul grafic]] al aplicației.

## Fișiere media

Obsidian Publish nu este optimizat pentru streaming de video sau fișiere audio de mari dimensiuni. Includem câteva bune practici pentru gestionarea [[Media files|fișierelor media]] în aceste documente. 

Pentru a îmbunătăți experiența vizitatorilor tăi, îți recomandăm să folosești în schimb un serviciu de găzduire video, precum YouTube sau Vimeo.

Poți încărca fișiere de **până la 50 MB** pe site-ul tău Publish. ^publish-media-limit

## PDF-uri

Pe dispozitive mobile, tablete și computere cu ecrane mici, poți întâmpina probleme în care un PDF încorporat nu se încarcă sau este afișată doar prima pagină. Acest lucru se datorează limitărilor motorului de randare PDF pe dispozitivele mobile. 

Pentru conținut destinat utilizatorilor de mobil, sugerăm să oferi legături către PDF-uri găzduite extern sau să incluzi legături interne care permit utilizatorilor să descarce PDF-ul direct pe dispozitivul lor.

## Căutare

Publish are suport de bază pentru căutarea de text simplu în conținutul publicat. Preferința pentru rezultatele căutării este acordată:

- Numelor fișierelor
- Pseudonimelor
- Numelor titlurilor

După căutarea potrivirilor în cele de mai sus, căutarea va include apoi textul simplu al notelor publicate.

Pentru a îmbunătăți capacitatea de căutare a site-ului tău publicat, se recomandă să folosești nume de fișiere descriptive, să incorporezi mai multe pseudonime și să selectezi nume de titluri care reflectă cu acuratețe conținutul.

În plus, Publish nu suportă în prezent funcția aplicației de [[Search#Embed search results in a note|rezultate de căutare încorporate]].

