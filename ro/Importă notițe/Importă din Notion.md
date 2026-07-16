---
permalink: import/notion
aliases:
  - Import from Notion
---
Obsidian îți permite să îți migrezi cu ușurință notele din Notion folosind [[Importator|modulul Importer]]. Acest lucru îți va converti datele din Notion în fișiere Markdown durabile, pe care le poți folosi offline cu Obsidian și cu multe alte aplicații.

Obsidian oferă două moduri de a-ți importa datele din Notion:

1. **Importul prin API** păstrează întregul tău spațiu de lucru, inclusiv bazele de date și formulele, care sunt convertite în [[Introducere în Baze|Baze]], dar necesită un token de integrare Notion și o conexiune la internet.
2. **Importul de fișiere** nu păstrează bazele de date, dar nu necesită un token de API sau o conexiune la internet.

## Importul prin API

### Creează un token de integrare API Notion

Pentru a accesa datele tale din Notion prin API, ai nevoie de un token de integrare. Acest pas durează aproximativ 2 minute.

Token-ul este un șir lung de cifre și litere, care de obicei începe cu `ntn_...`, care îți va permite să îți descarci datele din Notion.

1. Conectează-te la panoul tău [Notion Integrations](https://www.notion.so/profile/integrations/internal).
2. Alege **New integration**.

![[notion-integration.png#interface]]

2. Dă integrării tale un nume, de exemplu „Personal”. Poate fi folosit orice nume.
3. Alege spațiul de lucru pe care dorești să îl exporți.
4. Apasă **Save** și continuă la **Configure integration settings**.
5. În tab-ul **Configuration**, token-ul tău API este accesibil în câmpul **Internal Integration Secret**. 
6. Selectează **Show**, apoi **Copy**.
7. Salvează token-ul într-un loc sigur, precum administratorul tău de parole.

![[notion-token.png#interface]]

Apoi, acordă integrării tale acces la paginile și bazele de date Notion pe care dorești să le imporți.

1. Mergi la tab-ul **Access** al integrării pe care tocmai ai creat-o.
2. Apasă **Edit access**.
3. Adaugă paginile și bazele de date pe care dorești să le imporți.

Acum îți poți converti datele folosind Obsidian Importer.

### Importă-ți datele din Notion prin API

Vei avea nevoie de modulul oficial Obsidian [[Importator]], pe care îl poți [instala aici](obsidian://show-plugin?id=obsidian-importer).

1. Deschide **[[Setări]]**.
2. Mergi la **Module comunitare** și [instalează Importer](obsidian://show-plugin?id=obsidian-importer).
3. Activează modulul Importer.
4. Deschide modulul **Importer** folosind paleta de comenzi sau iconița din panglică.
5. La **Format fișier** selectează **Notion (API)**
6. La **API token**, inserează **Internal Integration Secret**-ul tău din Notion.
7. Apasă **Load** pentru a alege bazele de date și paginile pe care dorești să le imporți.
8. Revizuiește și modifică opțiunile de import.
9. Selectează **Importă** și așteaptă până când importul este finalizat
10. Ai terminat!

### Limitări

> [!info] Importul prin API este nou
> Importul prin API din Notion este nou. Din cauza complexității spațiilor de lucru Notion, este posibil ca unele cazuri limită să nu fi fost luate în considerare. Dacă întâmpini probleme cu conversia, [trimite un raport de eroare](https://github.com/obsidianmd/obsidian-importer/issues) ca să îl putem îmbunătăți. 

Din cauza limitelor de rată ale API-ului Notion, importul spațiilor de lucru mari poate dura considerabil. Te rugăm să ai răbdare.

Din cauza limitărilor API-ului Notion, unele date nu sunt disponibile sau nu pot fi convertite:

- Este importată doar vizualizarea principală pentru fiecare bază de date.
- [Sursele de date conectate](https://developers.notion.com/docs/working-with-databases#additional-types-of-databases) nu sunt importate: *„Notion's API does not currently support linked data sources. When sharing a database with your integration, make sure it contains the original data source!”*
- Funcțiile `People`: `name()` și `email()`
- Funcțiile `Text`: `style()` și `unstyle()`

În plus, Importer va face următoarele modificări:

- Paginile fără pagini sau baze de date subordonate vor fi importate ca `[nume-fișier].md` în loc de `[nume-fișier]/[nume-fișier].md`.
- Bazele de date sunt întotdeauna reprezentate ca directoare numite `[nume bază de date]`, cu un fișier `[nume bază de date].base` în interior.

## Importul de fișiere

Importul de fișiere este o metodă alternativă de a-ți importa datele din Notion. Această metodă nu păstrează bazele de date, dar nu necesită un token de API sau o conexiune la internet.

### Exportă-ți datele din Notion

Pentru a-ți pregăti datele pentru import, va trebui să îți exporți întregul spațiu de lucru folosind formatul de export HTML al Notion. Îți recomandăm să nu folosești exportul Markdown al Notion, deoarece omite date importante. Trebuie să ai acces de administrator la spațiul de lucru Notion pentru a exporta tot conținutul spațiului de lucru.

1. Mergi la **[[Setări]]** din partea de sus a barei laterale Notion.
2. La **Workspace** selectează **General**.
3. Găsește și selectează **Export all workspace content**.
4. La **Export format** selectează **HTML**.
5. Alege **Include everything**.
6. Activează **Create folders for subpages**.
7. Vei primi un fișier `.zip` prin email sau direct în browser.

![[notion-export.png#interface]]

![[notion-export-2.png#interface]]

### Importă-ți fișierul .zip din Notion

Vei avea nevoie de modulul oficial Obsidian [[Importator]], pe care îl poți [instala aici](obsidian://show-plugin?id=obsidian-importer).

1. Deschide **[[Setări]]**.
2. Mergi la **Module comunitare** și [instalează Importer](obsidian://show-plugin?id=obsidian-importer).
3. Activează modulul Importer.
4. Deschide modulul **Importer** folosind paleta de comenzi sau iconița din panglică.
5. La **Format fișier** selectează **Notion (.zip)**
6. Alege fișierul `.zip` cu fișierele Notion pe care dorești să le imporți. *Este recomandat să îți imporți tot conținutul din Notion o singură dată, astfel încât legăturile interne să poată fi reconciliate corect.*
7. _Opțional_, selectează un director pentru import. Paginile și bazele de date Notion vor fi imbricate în acest director.
8. Activează **Save parent pages in subfolders** pentru a păstra structura Notion. *Reține că în Notion poți scrie conținut în directoare, ceea ce nu este posibil în Obsidian, iar aceste pagini vor fi adăugate ca subpagină în cadrul directorului.*
9. Selectează **Importă** și așteaptă până când importul este finalizat
10. Ai terminat!

### Depanare

Dacă întâmpini probleme la importul din Notion:

- Asigură-te că folosești **HTML** ca format de export în Notion, **nu Markdown**.
- Dacă Obsidian pare să se blocheze în timpul importului, dezactivează modulele comunitare și încearcă din nou.

Ai întâmpinat altceva? Caută în [depozitul Importer](https://github.com/obsidianmd/obsidian-importer/issues) pentru a vedea dacă alții au întâmpinat aceeași problemă.

#### Importul spațiilor de lucru mari

Dacă imporți un spațiu de lucru cu mai mulți gigabytes de date, exportul din Notion poate conține fișiere `.zip` imbricate. În acest caz, poți vedea un mesaj de eroare de import care arată cam așa:

```
Import failed {id}.zip/{id}-Part-1.zip undefined.
```

Dacă vezi această eroare, poți dezarhiva fișierul din Notion și apoi poți importa fișierele `Export-{id}-Part-1.zip` imbricate.
