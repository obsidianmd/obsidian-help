---
permalink: import/onenote
aliases:
  - Import from Microsoft OneNote
---
Obsidian îți permite să îți migrezi cu ușurință notele din Microsoft OneNote folosind [[Importator|modulul Importer]]. Acest lucru îți va converti datele din OneNote în fișiere Markdown durabile, pe care le poți folosi cu Obsidian și cu multe alte aplicații.

> [!Warning] Avertisment
> Pot fi importate doar notebook-urile deținute de contul tău personal. Notele partajate sau conturile de serviciu ori de școală nu sunt acceptate.

## Importă-ți datele din OneNote în Obsidian

Vei avea nevoie de modulul oficial Obsidian [[Importator]], pe care îl poți [instala aici](obsidian://show-plugin?id=obsidian-importer).

1. Deschide **[[Setări]]**.
2. Mergi la **Module comunitare** și [instalează Importer](obsidian://show-plugin?id=obsidian-importer).
3. Activează modulul Importer.
4. Deschide modulul **Importer** folosind paleta de comenzi sau iconița din panglică.
5. La **Format fișier** alege **Microsoft OneNote**.
6. Apasă **Sign in** pentru a deschide browserul web la pagina de autentificare Microsoft. Introdu datele de autentificare pentru contul tău Microsoft care conține notebook-urile OneNote. Mai multe informații despre procesul de autentificare Microsoft sunt disponibile mai jos.
7. Apasă **Accept** pentru a acorda Obsidian permisiunea de a vedea notebook-urile tale OneNote.
8. Apasă **Open Link** pentru a permite browserului tău să te redirecționeze către aplicația Obsidian.
9. În aplicația Obsidian, fereastra de dialog Importer va afișa acum că ești autentificat și va lista notebook-urile și secțiunile tale OneNote. Bifează secțiunile pe care dorești să le imporți.

![[OneNote-Importer-Select-Sections.png]]

10. Apasă **Importă** și așteaptă până când importul este finalizat.
11. Ai terminat!

## Depanare

### Nu apar secțiuni sau notebook-uri

Asigură-te că notebook-urile pe care încerci să le imporți sunt sincronizate cu OneDrive și vizibile în OneNote Web. Trebuie să fie deținute de tine (notebook-urile partajate scrise de alții nu sunt acceptate).

Dacă lipsește o anumită secțiune, asigură-te că nu este o secțiune blocată — acestea sunt invizibile fără a elimina mai întâi blocarea.

### Notele importate sunt goale sau lipsesc conținut

Această problemă poate apărea la notebook-urile pe care le folosești rar. Pentru a rezolva problema, urmează acești pași:

1. Deschide [OneNote Web](https://onenote.com/notebooks) în browserul tău.
2. Apasă **clic dreapta** pe notebook-urile cărora le lipsește conținut.
3. Selectează **Export Notebook** din meniu.
4. **Dezarhivează** fișierul pe care tocmai l-ai descărcat, într-un director.
5. Încarcă notebook-urile tale OneNote [aici](https://www.onenote.com/notebooks/exportimport?toImport=true).
6. Deschide **Obsidian Importer** și încearcă din nou importul

Dacă ai urmat aceste sfaturi și problema persistă, este posibil să existe o problemă temporară cu serverele Microsoft. Dacă este cazul, așteaptă câteva minute și încearcă din nou. Dacă problema persistă, deschide o problemă pe [depozitul GitHub al Obsidian Importer](https://github.com/obsidianmd/obsidian-importer/issues).

## Confidențialitate

Modulul Obsidian Importer folosește [OAuth](https://learn.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-auth-code-flow) pentru a se autentifica cu contul tău Microsoft și a importa notebook-urile tale OneNote. Acest lucru acordă un token de acces pe termen scurt către contul tău, care este folosit doar de pe computerul tău și nu este niciodată stocat. După finalizarea importului, poți opțional să revoci token-ul din [pagina Microsoft apps & services](https://account.live.com/consent/Manage). 
