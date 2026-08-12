---
permalink: import/onenote
aliases:
  - Import from Microsoft OneNote
---
Obsidian îți permite să îți migrezi cu ușurință notele din Microsoft OneNote folosind [[Importator|modulul Importer]]. Acest lucru îți va converti datele din OneNote în fișiere Markdown durabile, pe care le poți folosi cu Obsidian și cu multe alte aplicații.

Obsidian oferă două moduri de a importa datele tale din OneNote:

1. **Cont Microsoft** — te autentifici în contul tău Microsoft și imporți notebook-urile sincronizate cu OneDrive. Necesită conexiune la internet.
2. **Import din fișiere** — folosește fișierele de export ale OneNote (`.onepkg` și `.one`). Nu necesită cont sau conexiune la internet și funcționează pentru notebook-urile care nu au fost niciodată sincronizate.

## Import din contul tău Microsoft

> [!Warning] Avertisment
> Pot fi importate doar notebook-urile deținute de contul tău. Notebook-urile pe care alte persoane le-au partajat cu tine nu sunt acceptate, iar un cont de serviciu sau de școală poate necesita aprobarea organizației tale pentru acces.

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
10. Apasă **Importă** și așteaptă până când importul este finalizat.
11. Ai terminat!

Dacă notebook-urile tale aparțin unui cont de serviciu sau de școală, OneNote poate refuza accesul modulului la ele după ce te autentifici. Când se întâmplă acest lucru, apare un buton **Use work or school access** lângă **Sign out**. Folosește-l pentru a te autentifica din nou cu permisiunea extinsă de care au nevoie aceste conturi. Este posibil ca organizația ta să fie nevoită să aprobe acea permisiune înainte ca aceasta să funcționeze.

### Depanare

#### Nu apar secțiuni sau notebook-uri

Asigură-te că notebook-urile pe care încerci să le imporți sunt sincronizate cu OneDrive și vizibile în OneNote Web. Trebuie să fie deținute de tine (notebook-urile partajate scrise de alții nu sunt acceptate).

Dacă lipsește o anumită secțiune, asigură-te că nu este o secțiune blocată, deoarece acestea sunt invizibile fără a elimina mai întâi blocarea.

Dacă este un notebook de serviciu sau de școală, vezi nota despre **Use work or school access** de mai sus.

#### Notele importate sunt goale sau lipsesc conținut

Această problemă poate apărea la notebook-urile pe care le folosești rar. Pentru a rezolva problema, urmează acești pași:

1. Deschide [OneNote Web](https://onenote.com/notebooks) în browserul tău.
2. Apasă **clic dreapta** pe notebook-urile cărora le lipsește conținut.
3. Selectează **Export Notebook** din meniu.
4. **Dezarhivează** fișierul pe care tocmai l-ai descărcat, într-un director.
5. Încarcă notebook-urile tale OneNote [aici](https://www.onenote.com/notebooks/exportimport?toImport=true).
6. Deschide **Obsidian Importer** și încearcă din nou importul

Dacă ai urmat aceste sfaturi și problema persistă, este posibil să existe o problemă temporară cu serverele Microsoft. Dacă este cazul, așteaptă câteva minute și încearcă din nou. Dacă problema persistă, deschide o problemă pe [depozitul GitHub al Obsidian Importer](https://github.com/obsidianmd/obsidian-importer/issues).

## Import fișiere OneNote (.one, .onepkg)

Importul din fișiere este o modalitate alternativă de a importa datele tale din OneNote. Citește fișierele de export pe care OneNote le scrie, așa că nu necesită cont Microsoft și nici conexiune la internet. Folosește-l pentru notebook-urile stocate doar pe computerul tău, notebook-urile la care contul tău nu poate ajunge sau când preferi să nu te autentifici.

### Exportă-ți notebook-urile din OneNote

Recomandăm exportarea fiecărui notebook ca **OneNote Package** (`.onepkg`). Un pachet conține fiecare secțiune a notebook-ului, astfel încât poți exporta și importa un notebook într-un singur pas, iar Importer va lista secțiunile pentru a alege din ele.

Exportul este disponibil doar în **OneNote pentru Windows**, aplicația desktop care vine cu Microsoft 365. Aplicația OneNote pentru Mac și vechea aplicație OneNote pentru Windows 10 nu pot exporta în aceste formate.

1. Deschide notebook-ul pe care vrei să îl exporți în OneNote pentru Windows.
2. Mergi la **File → Export**.
3. La **Export current** alege **Notebook**.
4. La **Select format** alege **OneNote Package (\*.onepkg)**.
5. Apasă **Export** și alege unde să salvezi fișierul.
6. Repetă pentru fiecare notebook pe care vrei să îl imporți.

Pentru a exporta o singură secțiune, alege **Section** la pasul 3 și **OneNote 2010-2016 Section (\*.one)** la pasul 4.

Poți importa și fișierele de secțiune pe care OneNote le păstrează deja pe disc, fără a exporta nimic:

- Notebook-urile stocate pe computerul tău se află în `Documents\OneNote Notebooks`, câte un fișier `.one` per secțiune.
- Backup-urile notebook-urilor sincronizate se află în `%LOCALAPPDATA%\Microsoft\OneNote\16.0\Backup`.

### Importă-ți fișierele OneNote

Vei avea nevoie de modulul oficial Obsidian [[Importator]], pe care îl poți [instala aici](obsidian://show-plugin?id=obsidian-importer).

1. Deschide **[[Setări]]**.
2. Mergi la **Module comunitare** și [instalează Importer](obsidian://show-plugin?id=obsidian-importer).
3. Activează modulul Importer.
4. Deschide modulul **Importer** folosind paleta de comenzi sau iconița din panglică.
5. La **Format fișier** alege **Microsoft OneNote (.one, .onepkg)**.
6. Alege fișierele `.onepkg` și `.one` pe care vrei să le imporți. Poți selecta mai multe fișiere deodată, astfel încât toate notebook-urile tale pot fi importate împreună.
7. La **Sections to import** sunt listate secțiunile găsite în acele fișiere, toate bifate. Debifează ce nu dorești.
8. Opțional, alege un **Output folder** pentru import, unde să fie salvate atașamentele și ce ar trebui să se întâmple cu **Existing notes** dacă imporți același notebook din nou.
9. Apasă **Importă** și așteaptă până când importul este finalizat.
10. Ai terminat!

Fiecare secțiune devine un director, iar fiecare pagină din ea devine o însemnare. O subpagină este salvată într-un director numit după pagina de deasupra ei, ceea ce păstrează structura pe care OneNote o afișa și împiedică două subpagini cu același nume să se ciocnească. Paginile din coșul de reciclare al notebook-ului nu sunt importate.

### Limitări

- Secțiunile protejate cu parolă sunt stocate criptat, iar paginile lor sunt omise. Elimină parola din OneNote și exportă din nou pentru a le importa.
- Fișierele protejate prin drepturi pot fi deschise doar de un cont pe care politica îl permite și nu pot fi citite de Importer.

## Confidențialitate

Dacă alegi să imporți folosind contul tău Microsoft, modulul Obsidian Importer folosește [OAuth](https://learn.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-auth-code-flow) pentru a se autentifica și a importa notebook-urile tale OneNote. Acest lucru acordă un token de acces pe termen scurt către contul tău, care este folosit doar de pe computerul tău și nu este niciodată stocat. După finalizarea importului, poți opțional să revoci token-ul din [pagina Microsoft apps & services](https://account.live.com/consent/Manage).

Importul din fișiere nu se conectează niciodată la Microsoft: fișierele pe care le alegi sunt citite pe computerul tău, fără nicio conexiune la rețea.
