---
permalink: web-clipper/troubleshoot
aliases:
  - Troubleshoot Web Clipper
---
Dacă întâmpini probleme cu [[Introducere în Obsidian Web Clipper|Web Clipper]], poți obține ajutor prin [canalul oficial de Discord](https://discord.com/channels/686053708261228577/1285652864089198672). Poți de asemenea raporta erori pe [repozitoriul GitHub](https://github.com/obsidianmd/obsidian-clipper).

## General

### Lipsește o parte din conținut

Implicit, Web Clipper încearcă să capteze inteligent conținutul de pe pagină. Cu toate acestea, s-ar putea să nu reușească acest lucru pe toate site-urile web.

Web Clipper folosește [Defuddle](https://github.com/kepano/defuddle) pentru a capta doar conținutul principal al paginii. Acesta exclude antetul, subsolul și alte elemente, dar uneori poate fi excesiv de conservator și poate elimina conținut pe care vrei să îl păstrezi. Poți [raporta erori](https://github.com/kepano/defuddle) către Defuddle.

Pentru a ocoli Defuddle în Web Clipper, folosește următoarele metode:

- Selectează text, sau folosește `Cmd/Ctrl+A` pentru a selecta tot textul.
- [[Evidențiere|Evidențiază conținutul]] pentru a alege exact ce vrei să captezi.
- Folosește un [[Obsidian Web Clipper/Șabloane|șablon personalizat]] pentru site.

### Niciun conținut nu apare în Obsidian

Dacă nu vezi niciun conținut în Obsidian atunci când dai clic pe **Adaugă în Obsidian**:

- Verifică dacă există erori în [[Ajutor și suport#Capture console logs|consola pentru dezvoltatori]] a Obsidian.
- Verifică dacă numele seifului din setările Web Clipper corespunde exact cu *numele seifului* tău din Obsidian, *nu calea seifului*.
- Verifică dacă numele directorului este formatat corect.

## Linux

#### Obsidian nu se deschide

- Asigură-te că protocolul [[Obsidian URI]] [[Obsidian URI#Register Obsidian URI|este înregistrat]].
- Dacă folosești Firefox, s-ar putea să fie nevoie să-l [înregistrezi în setările browserului](https://kb.mozillazine.org/Register_protocol).

#### Obsidian se deschide, dar se salvează doar numele fișierului

Este probabil ca Obsidian să nu poată accesa clipboard-ul. Accesul la clipboard este necesar pentru a transmite date din browser către Obsidian. Configurația ta poate afecta modul în care aplicațiile sunt izolate (sandboxed) și permisiunile de clipboard.

Dacă folosești Wayland, asigură-te că Obsidian are permisiunile de a citi clipboard-ul atunci când aplicația nu este focalizată. Această preferință se poate afla în managerul tău de ferestre tiling, de ex. Hyprland sau Sway.

Dacă folosești Hyprland:

```ini
# ~/.config/hypr/hyprland.conf
misc {
    focus_on_activate = true
}
```

Dacă folosești Sway:

```ini
# ~/.config/sway/config
for_window [class="obsidian"] focus_on_window_activation focus
```

- Dacă folosești Flatpak, ia în considerare încercarea unei [versiuni Obsidian susținute oficial](https://obsidian.md/download).
- Dacă folosești KDE, mergi la **Setările sistemului** → **Gestionarea ferestrelor** → **Reguli de fereastră** și permite-i lui Obsidian să preia focalizarea, [[web-clipper-kde.png|vezi captura de ecran]].
- Ca soluție de rezervă, încearcă să comuți la **Modul vechi (Legacy)** în **Setările Web Clipper** → **General**. Aceasta va ocoli clipboard-ul și va salva conținutul direct prin URI. Reține că aceasta va limita numărul de caractere care pot fi salvate, în funcție de browserul și distribuția Linux pe care le folosești.

## iOS și iPadOS

Pentru a activa extensia Web Clipper pentru Safari:

1. Mergi la Safari, apasă butonul din stânga barei de adrese URL a browserului, care arată ca un dreptunghi cu linii dedesubt.
2. Apasă **Gestionează extensiile**.
3. Activează **Obsidian Web Clipper** în lista de extensii.
4. Ieși din meniu.
5. Pentru a folosi extensia, **apasă pictograma de puzzle** din bara de adrese URL.

Pentru a permite Web Clipper să funcționeze pe toate site-urile web:

1. Mergi la **[[Setări|Setări]]** iOS →  **Aplicații** →  **Safari** →  **Extensii**.
2. Sub **Permisiuni**, permite-i să funcționeze pe toate site-urile web.

Pentru a permite Obsidian să primească întotdeauna conținut de la Web Clipper:

1. Mergi la **[[Setări|Setări]]** iOS →  **Aplicații** →  **Obsidian**.
2. Setează **Lipește din alte aplicații** pe **Permite**.
