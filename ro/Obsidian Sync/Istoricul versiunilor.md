---
permalink: sync/version-history
cssclasses:
  - soft-embed
publish: true
mobile: true
description: 'Obsidian Sync păstrează o evidență a tuturor modificărilor făcute notelor tale și verifică periodic actualizările, creând versiuni noi ale notelor tale.'
aliases:
  - Version history
---
[[Introducere în Obsidian Sync|Obsidian Sync]] verifică periodic actualizările pentru [[Setări Sync și sincronizare selectivă|fișierele tale sincronizate]], păstrând o evidență a oricăror modificări. Acestea sunt stocate ca intrări noi în [[#Istoricul versiunilor]]. Aceste informații pot fi accesate în câteva moduri:

- [[#Istoricul de sincronizare]]
- [[#Istoricul versiunilor]]

Deși nu face parte din Obsidian Sync, un istoric local al versiunilor este de asemenea disponibil pe fiecare dispozitiv dacă modulul [[Recuperare fișiere]] este activat.

## Istoricul de sincronizare

Funcția de istoric al sincronizării (sau bara laterală Sync), introdusă în Obsidian versiunea 1.7, îți permite să vizualizezi rapid notele și atașamentele recent create sau modificate care au fost sincronizate. O poți considera și ca un istoric de _editare_.

În bara laterală, poți selecta un element pentru a-i deschide fișierul în fereastra ta activă. Elementele au, de asemenea, meniuri contextuale, permițându-ți să efectuezi acțiuni precum mutarea fișierului sau vizualizarea [[#Note și atașamente|istoricului versiunilor]] acestuia.

> [!compatibility] Funcție doar pentru desktop
> Când treci cu mouse-ul peste un fișier sincronizat în bara laterală, poți vedea cine a editat ultima dată fișierul. Acest lucru este util în special dacă [[Colaborează într-un seif partajat|colaborezi]] la un seif partajat.

> [!tip] 
> Setările și elementele șterse nu vor apărea în bara laterală a istoricului de sincronizare. Acestea pot fi găsite în schimb în [[#Note și atașamente|istoricul versiunilor]].

### Afișează istoricul de sincronizare

Când activezi modulul integrat [[Introducere în Obsidian Sync|Sync]], istoricul de sincronizare este activat automat, dar nu apare implicit în bara laterală. Va trebui să-l adaugi manual folosind o comandă sau o combinație de taste.

#### Activează prin Paleta de comenzi

> [!info] Această opțiune necesită activarea modulului integrat [[Paleta de comenzi|Paleta de comenzi]].

**Desktop/Tabletă** ![[lucide-monitor-check.svg#icon]]

1. Deschide **Paleta de comenzi**. ![[lucide-terminal.svg#icon]]
2. Tastează „Sync”.
3. Selectează opțiunea „Sync: Show Sync history”.

Istoricul de sincronizare va apărea apoi în [[Bara laterală|bara laterală din dreapta]].

**Mobil** ![[obsidian-icon-smartphone.svg#icon]]

1. Deschide [[Panglică|Panglica]] ![[lucide-menu.svg#icon]].
2. Deschide **Paleta de comenzi**. ![[lucide-terminal.svg#icon]]
3. Tastează „Sync”.
4. Selectează opțiunea „Sync: Show Sync history”.

Istoricul de sincronizare va apărea apoi ca o opțiune derulantă în [[Bara laterală|bara laterală din dreapta]].

#### Activează prin combinație de taste

1. Deschide **[[Setări]]**.
2. În categoria **Opțiuni**, selectează **Combinații de taste**.
3. În bara de căutare a combinațiilor de taste, tastează „Sync”.
4. Lângă „Sync: Show Sync history”, atribuie combinația de taste preferată.

## Istoricul versiunilor

Pe lângă [[#Istoricul de sincronizare]], Obsidian menține, de asemenea, un istoric al versiunilor pentru restaurarea notelor și atașamentelor. Dacă ștergi accidental o notă sau dorești să revii la o versiune anterioară, o poți restaura din istoricul versiunilor.

Perioada de păstrare pentru istoricul versiunilor tale depinde de [[Planuri și limite de stocare|planul tău Obsidian Sync]]. Pe planul Standard, notele sunt păstrate timp de 1 lună, în timp ce pe planul Plus sunt păstrate timp de 12 luni. După această perioadă, versiunile mai vechi ale notelor tale sunt șterse.

Pentru [[Atașamente|atașamente]], versiunile mai vechi sunt stocate timp de <u>două săptămâni</u>.

![[Colaborează într-un seif partajat#^version-history-image]]

### Note și atașamente

Procesul de restaurare atât pentru note, cât și pentru atașamente este identic.

#### Vizualizează istoricul versiunilor unui fișier

**Desktop/Tabletă** ![[lucide-monitor-check.svg#icon]]
1. În **Exploratorul de fișiere**, selectează nota pe care dorești să o restaurezi.
2. Selectează **Deschide istoricul versiunilor**.
3. Selectează versiunea notei pe care dorești să o vizualizezi din stânga. Conținutul va fi afișat în dreapta.

**Mobil** ![[obsidian-icon-smartphone.svg#icon]]
1. În **Exploratorul de fișiere**, selectează nota pe care dorești să o restaurezi.
2. Apasă lung pentru a afișa meniul contextual.
3. Selectează **Deschide istoricul versiunilor**.
4. În meniul pop-up, selectează versiunea notei pe care dorești să o vizualizezi.
5. Odată selectată, conținutul notei va fi disponibil pentru revizuire.

#### Vizualizează istoricul versiunilor unui fișier șters sau redenumit

1. Deschide **[[Setări]]**.
2. În bara laterală, sub **Module integrate**, selectează **Sync**.
3. Lângă **Fișiere șterse**, selectează **Vizualizare**.
4. Selectează nota pentru care dorești să vizualizezi istoricul versiunilor.
5. În fereastra pop-up a istoricului versiunilor, selectează versiunea notei pe care dorești să o vizualizezi din stânga.

#### Restaurează o versiune anterioară a unui fișier

**Desktop/Tabletă** ![[lucide-monitor-check.svg#icon]]
1. În **Exploratorul de fișiere**, selectează nota pe care dorești să o restaurezi.
2. Selectează **Deschide istoricul versiunilor**.
3. Selectează versiunea notei pe care dorești să o restaurezi din stânga. Conținutul va fi afișat în dreapta.
4. Selectează butonul **Restaurează**.
5. Conținutul notei va fi înlocuit cu versiunea restaurată.

**Mobil** ![[obsidian-icon-smartphone.svg#icon]]
1. În **Exploratorul de fișiere**, selectează nota pe care dorești să o restaurezi.
2. Apasă lung pentru a afișa meniul contextual.
3. Selectează **Deschide istoricul versiunilor**.
4. În meniul pop-up, selectează versiunea notei pe care dorești să o restaurezi.
5. Odată selectată, conținutul notei va fi disponibil pentru revizuire.
6. Selectează butonul **Restaurează**.
7. Conținutul notei va fi înlocuit cu versiunea restaurată.

#### Restaurează un fișier șters

1. Deschide **[[Setări]]**.
2. În bara laterală, sub **Module integrate**, selectează **Sync**.
3. Lângă **Fișiere șterse**, selectează **Vizualizare**.
4. Alege nota pe care dorești să o restaurezi.
5. În lista de versiuni din stânga, selectează versiunea pe care dorești să o restaurezi.
6. Selectează butonul **Restaurează** din dreapta.
7. Nota va fi restaurată la locația sa originală din sistemul de fișiere.

> [!tip] Poți selecta mai multe note cu **restaurare în masă** bifând casetele de selectare sau folosind `shift+clic`. Aceste fișiere nu vor putea fi revizuite în acest meniu.

### Istoricul setărilor

Obsidian Sync păstrează, de asemenea, o evidență a modificărilor făcute setărilor de configurare ale seifului tău.

#### Vizualizează istoricul versiunilor unei setări

1. Deschide **[[Setări]]**.
2. În bara laterală, sub **Module integrate**, selectează **Sync**.
3. Navighează în jos la **Sincronizare configurare seif**.
4. Selectează butonul **Vizualizare** lângă **Istoricul versiunilor [[Setări]]**.
5. În fereastra pop-up **Fișier [[Setări]]**, alege un fișier de setări pe care dorești să-l vizualizezi.

#### Restaurează o versiune anterioară a unei setări

1. Deschide **[[Setări]]**.
2. În bara laterală, sub **Module integrate**, selectează **Sync**.
3. Navighează în jos la **Sincronizare configurare seif**.
4. Selectează butonul **Vizualizare** lângă **Istoricul versiunilor [[Setări]]**.
5. În fereastra pop-up **Fișier [[Setări]]**, alege un fișier de setări pe care dorești să-l vizualizezi.
6. În fereastra modificărilor, selectează butonul **Restaurează**.
7. Reîncarcă sau repornește Obsidian pentru ca setarea să intre în efect. Pentru mai multe detalii, consultă instrucțiunile din [[Configurează Obsidian Sync#Ajustează setările Obsidian Sync|Ajustează setările Obsidian Sync]].
