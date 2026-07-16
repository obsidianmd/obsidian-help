---
permalink: import/zettelkasten
aliases:
  - Import Zettelkasten notes
---
Dacă ai folosit metoda Zettelkasten pentru a denumi și lega notele, s-ar putea să trebuiască să convertești legăturile din `[[UID]]` în `[[UID Titlul notei mele]]`.

De exemplu, dacă ai o notă cu numele `202301011230 Titlul notei mele` și faci o legătură către ea dintr-o altă notă folosind doar UID-ul, `[[202301011230]]`. Deoarece Obsidian folosește numele complet al notei pentru a rezolva legăturile interne, astfel de legături se vor rupe.

Pentru a actualiza toate legăturile `[[UID]]` din seiful tău, astfel încât să folosească numele complet al notei, folosește [[Convertor de format]].

1. Deschide **[[Setări]]**.
2. La **Module integrate**, activează **Convertorul de format** și închide fereastra Setări.
3. În panglică, în partea stângă a ferestrei aplicației, selectează **Deschide convertorul de format** ![[lucide-binary.svg#icon]].
4. Activează **Reparator de legături Zettelkasten**.
5. Selectează **Începe conversia**. Aceasta va converti toate notele din întregul tău seif.

> [!tip] Îmbunătățitor de legături Zettelkasten
> [[Convertor de format]] poate, de asemenea, să îți înfrumusețeze legăturile eliminând UID-ul din numele afișat. De exemplu, `[[UID]]` se convertește în `[[UID Titlul notei mele|Titlul notei mele]]`.
>
> Pentru a-ți înfrumuseța legăturile Zettelkasten, activează **Îmbunătățitor de legături Zettelkasten** în fereastra convertorului de format.

Poți folosi și [[Creator de note unice]] pentru a crea note Zettelkasten în Obsidian.
