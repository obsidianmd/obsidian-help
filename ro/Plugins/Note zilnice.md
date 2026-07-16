---
permalink: plugins/daily-notes
aliases:
  - Daily notes
---

Daily notes este un [[Module de bază|modul integrat]] care deschide o notă pe baza datei de azi sau o creează dacă nu există. Folosește notele zilnice pentru a crea jurnale, liste de sarcini sau evidențe zilnice ale lucrurilor pe care le-ai descoperit în timpul zilei.

Pentru a deschide nota zilnică de azi, fie:

- Dă clic pe **Open today's daily note** ![[lucide-calendar.svg#icon]] în [[Panglică|panglică]].
- Rulează **Open today's daily note** din [[Paleta de comenzi|Paleta de comenzi]].
- [[Combinații de taste#Set a hotkey|Folosește o combinație de taste]] pentru comanda **Open today's daily note**.

Implicit, Obsidian creează o notă nouă, goală, denumită după data de azi, în formatul YYYY-MM-DD.

> [!tip] Dacă preferi să ai notele zilnice într-un director separat, poți seta <u>Locația pentru fișiere noi</u> în opțiunile modulului pentru a schimba unde creează Obsidian notele zilnice noi.

> [!example]- Subdirectoare automate
> Îți poți organiza automat notele zilnice în directoare folosind funcția **Format dată**.
> 
> De exemplu, dacă setezi formatul datei ca `YYYY/MMMM/YYYY-MMM-DD`, notele tale vor fi create ca `2023/January/2023-Jan-01`. 
> 
> Poți explora mai multe opțiuni de formatare pe site-ul de documentație [momentJS](https://momentjs.com/docs/#/displaying/format/).

## Creează o notă zilnică dintr-un șablon

Dacă notele tale zilnice au aceeași structură, poți folosi un [[Plugins/Șabloane|șablon]] pentru a adăuga conținut predefinit la notele zilnice atunci când le creezi.

1. Creează o notă nouă numită „Daily template” cu următorul text (sau orice altceva are sens pentru tine!):

   ```md
   # {{date:YYYY-MM-DD}}

   ## Tasks

   - [ ]
   ```

2. Deschide **[[Setări]]**.
3. În bara laterală, dă clic pe **Daily notes** sub **Opțiunile modulului**.
4. În câmpul de text de lângă **Template file location**, selectează nota „Daily template”.

Obsidian folosește șablonul data următoare când creezi o notă zilnică nouă.

## Notele zilnice și proprietățile

Când modulul Daily notes este activat și o proprietate de tip dată este prezentă în orice notă, Obsidian va încerca automat să genereze o legătură către nota zilnică pentru acea zi anume. De exemplu, dacă o notă numită `example.md` include o proprietate de tip dată precum `2023-01-01`, această dată se va transforma într-o legătură pe care se poate da clic, în secțiunea [[Moduri de vizualizare și editare#Live Preview|previzualizare în direct]].

![[daily-notes-and-date-properties.png#interface|300]]
^daily-notes-date
