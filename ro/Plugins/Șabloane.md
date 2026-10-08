---
permalink: plugins/templates
cssclasses:
  - soft-embed
publish: true
mobile: true
description: Templates este un modul integrat care îți permite să inserezi fragmente de text predefinite în nota activă.
aliases:
  - Templates
---

Templates este un [[Module de bază|modul integrat]] care îți permite să inserezi fragmente de text predefinite în nota activă.

## Setează directorul de șabloane

1. În colțul din stânga jos, selectează **[[Setări|Setări]]** ![[lucide-cog.svg#icon]].
2. Sub **Module integrate → Templates → Template folder location**, introdu directorul care conține șabloanele tale.

## Variabile de șablon

Poți adăuga informații dinamice în șabloanele tale, folosind _variabile de șablon_. Când inserezi un șablon care conține o variabilă de șablon, Templates o înlocuiește cu valoarea corespunzătoare.

| Variabilă    | Descriere                                     |
|-------------|-------------------------------------------------|
| `{{title}}` | Titlul notei active.                       |
| `{{date}}`  | Data de azi. **Format implicit:** `YYYY-MM-DD`. |
| `{{time}}`  | Ora curentă. **Format implicit:** `HH:mm`.      |

Atât `{{date}}`, cât și `{{time}}` îți permit să schimbi formatul implicit folosind un _șir de format_.

Pentru a seta un șir de format, adaugă două puncte (`:`) urmate de un șir de [jetoane de format Moment.js](https://momentjs.com/docs/#/displaying/format/), de exemplu `{{date:YYYY-MM-DD}}`.

Poți folosi `{{date}}` și `{{time}}` cu șiruri de format în același mod, de exemplu `{{time:YYYY-MM-DD}}`.

Poți schimba formatele implicite de dată și oră sub **[[Setări|Setări]] → Module integrate → Templates → Date format** și **[[Setări|Setări]] → Module integrate → Templates → Time format**. ^template-settings-date-time-formatting

> [!tip]- Folosește variabilele de dată și oră în alte module
> Poți folosi variabilele de șablon `{{date}}` și `{{time}}` și în modulele [[Note zilnice|Note zilnice]] și [[Creator de note unice]].

## Creează un șablon

În [[#Setează directorul de șabloane|directorul de șabloane]], [[Gestionează notițele#Create a new note|creează o notă]] care conține textul pe care vrei să-l vezi apărând atunci când folosești șablonul. Poți folosi [[#Variabile de șablon|variabilele de șablon]] pentru text dinamic, cum ar fi data curentă.

De exemplu, iată un șablon pentru note de studiu:

```markdown
---
topic: 
date: "{{date}}"
course: 
tags:
  - studies
---

# {{title}}

## Key Concepts


## Important Details


## Examples


## Questions
- 

## Summary


## Related Topics
- [[]]
```

> [!warning]+ Editează șabloanele în Modul sursă
> În [[Moduri de vizualizare și editare#Live Preview|Previzualizare în direct]], panoul **Proprietăți în document** poate suprascrie variabilele de șablon care nu au ghilimele.
>
> Pentru a evita acest lucru, editează șabloanele în [[Moduri de vizualizare și editare#Source mode|Mod sursă]], sau setează **[[Setări|Setări]] → Editor → [[Setări#Properties in document|Proprietăți în document]]** la **Sursă**.

## Inserează un șablon în nota activă

> [!todo] [[#Setează directorul de șabloane]] înainte de a insera un șablon.

1. În panglică, selectează **Insert template**.
2. Selectează șablonul de inserat la poziția cursorului în nota activă.

Pentru a insera un șablon folosind [[Paleta de comenzi|Paleta de comenzi]] sau [[Combinații de taste#Set a hotkey|o combinație de taste personalizată]], folosește comanda `Templates: Insert template`.

Conținutul șablonului este inserat la poziția curentă a cursorului tău. Dacă cursorul tău nu este în corpul notei, conținutul este inserat la ultima poziție a cursorului tău.

### Proprietățile șablonului

![[Proprietăți#^templates-properties]]

## Inserează data și ora curente în nota activă

Folosește comenzile `Templates: Insert current date` și `Templates: Insert current time` pentru a insera data și ora curente la poziția curentă a cursorului tău. La fel ca și comanda `Insert template`, poți executa și aceste comenzi folosind Paleta de comenzi sau o combinație de taste personalizată.

Data și ora inserate folosesc [[#^template-settings-date-time-formatting|formatarea setată în opțiunile modulului]].
