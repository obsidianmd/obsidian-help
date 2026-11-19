---
permalink: manage-notes
publish: true
mobile: false
description: null
aliases:
  - Manage notes
---
Puteți gestiona fișiere și directoare în mai multe moduri, folosind [[Combinații de taste|combinațiile de taste]], [[Paleta de comenzi|comenzile]] sau [[Exploratorul de fișiere|exploratorul de fișiere]].

## Creați o notă nouă

Pentru a crea un fișier nou:

1. Apăsați `Ctrl+N` (sau `Cmd+N` pe macOS).
2. Introduceți numele notei, apoi apăsați `Enter` pentru a începe editarea notei.

Puteți crea note și folosind [[Exploratorul de fișiere#Creați o notă nouă|exploratorul de fișiere]], sau selectând **Creează notă nouă** din [[Paleta de comenzi|paleta de comenzi]].

> [!hint] Limitarea caracterelor la nivel de sistem
> Obsidian va respecta limitările de nume de fișier ale sistemului de operare pe care creați nota. Dacă intenționați să [[Sincronizează-ți notițele pe toate dispozitivele|sincronizați notele între dispozitive]], asigurați-vă că numele fișierelor sunt [sigure pentru alte sisteme de operare](https://stackoverflow.com/q/1976007).
^blockquote-system-limitation

## Deschideți fișiere din afara seifului

Pe desktop, puteți deschide și edita fișiere Markdown individuale din afara seifului. Fișierele se deschid în fereastra curentă și rămân în locația lor originală.

> [!note] Necesită Obsidian 1.14 și cel mai recent pachet de instalare
> [[Actualizează Obsidian#Actualizări ale pachetului de instalare|Actualizați pachetul de instalare]] descărcând Obsidian de pe [obsidian.md/download](https://obsidian.md/download) și reinstalând aplicația.

Pentru a deschide un fișier Markdown:

1. Deschideți [[Paleta de comenzi|paleta de comenzi]].
2. Selectați **Deschide un fișier din afara seifului...**.
3. Alegeți un fișier Markdown de pe computer.

Puteți folosi și meniul **Deschide cu** al sistemului de operare și selectați **Obsidian**. Pentru a deschide fișierele Markdown în Obsidian implicit, setați-l ca aplicație implicită pentru fișierele `.md`.

Încorporările de imagini și legăturile către alte fișiere locale se rezolvă relativ la directorul fișierului Markdown. Folosiți [[Sumar|Sumarul]] pentru a naviga prin titluri și [[Legături de ieșire|legăturile de ieșire]] pentru a răsfoi fișierele legate.

### Previzualizați fișiere cu Quick Look

Pe macOS, selectați un fișier Markdown în Finder și apăsați `Space` pentru a-l previzualiza cu **Quick Look**. Previzualizările Quick Look funcționează chiar și când Obsidian este închis.

## Redenumiți o notă

Pentru a redenumi o notă activă:

1. Selectați numele notei din partea de sus a editorului (sau apăsați `F2`).
2. Introduceți noul nume, apoi apăsați `Enter`.

Când redenumiți un fișier, Obsidian actualizează automat toate legăturile către acel fișier.

Puteți redenumi o notă sau un director fără a-l deschide, folosind [[Exploratorul de fișiere#Redenumiți un fișier sau un director|exploratorul de fișiere]]

## Ștergeți o notă

Pentru a șterge o notă, selectați **Mai multe opțiuni → Șterge fișierul** din partea din dreapta sus a unei note active.

Sau, selectați **Șterge fișierul curent** din [[Paleta de comenzi|paleta de comenzi]].

Puteți șterge de asemenea o notă sau un director folosind [[Exploratorul de fișiere#Ștergeți un fișier sau un director|exploratorul de fișiere]].

> [!note] Ce se întâmplă cu fișierele după ce le șterg?
> Pentru a schimba ce se întâmplă cu fișierele șterse, selectați una din următoarele opțiuni din **[[Setări]] → Fișiere și legături**:
>
> - **Coșul de gunoi al sistemului**: Implicit, fișierele șterse ajung în coșul de gunoi al sistemului de operare. Pentru a restaura un fișier, folosiți managerul de fișiere preferat.
> - **Coșul de gunoi al Obsidian**: Puteți trimite fișierele șterse într-un director `.trash` din seiful dumneavoastră.
> - **Ștergere permanentă**: Fișierele sunt șterse imediat, fără nicio posibilitate de restaurare.
