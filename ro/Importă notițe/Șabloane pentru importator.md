---
permalink: import/templates
description: 'Personalizați numele notei, proprietățile și conținutul create de Importer.'
---
[[Importator|Importatorul]] îți permite să definești șabloane care controlează modul în care notițele tale sunt importate din alte aplicații. Aceasta înseamnă că poți modifica titlul, proprietățile și conținutul notițelor pe care le importi.

## Editează șablonul de import

Selectează **Editați** deasupra previzualizării pentru a edita șablonul implicit. Poți edita:

- Numele notiței afișat ca titlu inline.
- Proprietățile de la începutul notiței.
- Conținutul Markdown al notiței.

Selectează **Salvează** pentru a reveni la previzualizare. Importatorul reține un șablon inline editat pentru importurile viitoare care folosesc același format.

Alternativ, poți încărca un șablon dintr-un fișier Markdown din seiful curent.

## Previzualizează rezultatele

Previzualizarea arată până la zece exemple din datele pe care le-ai selectat. Folosește butoanele cu săgeți pentru a naviga între exemple. Modificările aduse setărilor de import și șablonului actualizează previzualizarea înainte ca ceva să fie adăugat în seiful tău.

Unele atașamente, elemente la distanță și referințe între notițe nu pot fi rezolvate complet până când importul nu rulează. În aceste cazuri, previzualizarea poate păstra legătura sursă sau poate afișa un substituent.

## Sintaxa șabloanelor

Șabloanele importatorului folosesc o sintaxă care constă din variabile, [[Filtre]] și [[Logică]]. Aceasta utilizează aceeași sintaxă [Knap](https://github.com/obsidianmd/knap) ca și [[Introducere în Obsidian Web Clipper|Web Clipper]].

Inserează variabile cu paranteze duble, cum ar fi `{{title}}`, `{{content}}` sau `{{date}}`. Variabilele pot fi folosite în numele notiței, proprietăți și conținut.

Poți modifica variabilele folosind [[Filtre]]. De exemplu, pentru a schimba formatul datei folosind `{{date|date:"YYYY-MM-DD"}}`. Folosește [[Logică]] pentru condiții mai avansate, bucle și atribuirea variabilelor.

## Variabile

Următoarele variabile sunt disponibile pentru utilizare în orice șablon al importatorului:

| Variabilă        | Descriere                                                                                                |
| ---------------- | -------------------------------------------------------------------------------------------------------- |
| `{{body}}`       | Corpul Markdown fără proprietăți (fără metadate inițiale).                                               |
| `{{content}}`    | Markdown-ul complet înainte de aplicarea șablonului selectat.                                             |
| `{{ctime}}`      | Momentul creării sursei ca marcaj temporal ISO 8601; gol când nu este disponibil.                         |
| `{{date}}`       | Data și ora curentă când șablonul este procesat, ca marcaj temporal ISO 8601.                            |
| `{{importer}}`   | ID-ul importatorului, cum ar fi `keep`, `html` sau `notion-api`.                                         |
| `{{folder}}`     | Directorul părinte final relativ la seif. Gol când notița se află în rădăcina seifului.                  |
| `{{mtime}}`      | Momentul modificării sursei ca marcaj temporal ISO 8601; gol când nu este disponibil.                    |
| `{{noteName}}`   | Numele final rezolvat al notiței, după eliminarea caracterelor invalide și adăugarea sufixelor pentru duplicate. |
| `{{path}}`       | Calea finală relativă la seif, inclusiv extensia `.md`.                                                  |
| `{{properties}}` | Obiect care conține proprietățile din metadatele inițiale.                                                |
| `{{source}}`     | Obiect care conține proprietățile generate și valorile specifice sursei.                                  |
| `{{sourceId}}`   | Identificator stabil al sursei când importatorul furnizează unul; altfel gol.                            |
| `{{time}}`       | Alias pentru `{{date}}`.                                                                                 |
| `{{title}}`      | Titlul original al notiței înainte de sanitizare și deduplicare.                                         |

## Valorile sursei pentru proprietăți

Pentru formatele de import care acceptă [[Proprietăți]], valorile sursei sunt de asemenea disponibile ca variabile de nivel superior pentru comoditate.

Dacă o valoare a sursei are același nume cu o variabilă partajată, accesează-o prin `{{source}}`. De exemplu, dacă sursa de import are o proprietate numită `content`, aceasta este disponibilă ca `{{source.content}}`, în timp ce `{{content}}` rămâne variabila implicită a importatorului.

Folosește notația cu paranteze pătrate când un nume de câmp conține spații, punctuație sau alte caractere speciale:

```twig
{{source["Project: status"]}}
```

## Exemplu de șablon

Iată un exemplu de șablon care folosește variabile și [[Filtre|filtre]]:

```twig
---
created: {{ctime | date:"YYYY-MM-DD"}}
modified: {{mtime | date:"YYYY-MM-DD"}}
source: {{importer}}
---
# {{title}}

{{body}}
```

Poți adăuga date într-o notiță condiționat folosind [[Logică]]:

```twig
{% if tags %}
## Etichete
{% for tag in tags %}
- {{tag}}
{% endfor %}
{% endif %}
```
