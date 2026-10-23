---
permalink: plugins/canvas
mobile: true
---
Canvas je [[Vstavané pluginy|vstavaný plugin]] pre vizuálne poznámkovanie. Poskytuje vám nekonečný priestor na rozloženie poznámok a ich prepojenie s inými poznámkami, prílohami a webovými stránkami.

Usporiadanie poznámok v 2D priestore vám pomáha vidieť a pochopiť vzťahy medzi nimi. Prepojte poznámky čiarami a zoskupte súvisiace poznámky.

Obsidian ukladá plátna ako súbory `.canvas` pomocou otvoreného formátu [JSON Canvas](https://jsoncanvas.org/).

## Vytvorenie nového plátna

Ak chcete začať používať Canvas, musíte najprv vytvoriť súbor na uloženie vášho plátna. Nové plátno môžete vytvoriť nasledujúcimi spôsobmi.

**Paleta príkazov:**

1. Otvorte [[Paleta príkazov|paletu príkazov]].
2. Vyberte **Canvas: Vytvoriť nové plátno** na vytvorenie plátna v rovnakom priečinku ako aktívny súbor.

**Prieskumník súborov:**

- V [[Prieskumník súborov|prieskumníku súborov]] kliknite pravým tlačidlom myši na priečinok, v ktorom chcete plátno vytvoriť.
- Vyberte **Nové plátno**.

**Panel nástrojov:**

- Vo vertikálnom paneli nástrojov vyberte **Vytvoriť nové plátno** ![[lucide-layout-dashboard.svg#icon]] na vytvorenie plátna v rovnakom priečinku ako aktívny súbor.

> [!note] Prípona súboru .canvas
> Obsidian ukladá vaše dáta plátna ako súbory `.canvas` pomocou otvoreného formátu súborov nazývaného [JSON Canvas](https://jsoncanvas.org/).

## Pridávanie kariet

Do plátna môžete presúvať súbory z Obsidian alebo z iných aplikácií. Napríklad Markdown súbory, obrázky, audio, PDF alebo dokonca nerozpoznané typy súborov.

### Pridanie textových kariet

Môžete pridať karty obsahujúce iba text, ktoré neodkazujú na žiadny súbor. Rovnako ako v poznámke môžete používať Markdown, odkazy a bloky kódu.

Pridanie novej textovej karty na plátno:

- Vyberte alebo potiahnite ikonu prázdneho súboru v spodnej časti plátna.

Textové karty môžete pridať aj dvojitým kliknutím na plátno.

Konvertovanie textovej karty na súbor:

1. Kliknite pravým tlačidlom myši na textovú kartu a vyberte **Konvertovať na súbor...**.
2. Zadajte názov poznámky a vyberte **Uložiť**.

> [!note] Textové karty a spätné odkazy
> Karty obsahujúce iba text sa nezobrazujú v [[Spätné odkazy|spätných odkazoch]]. Ak chcete, aby sa zobrazovali, musíte ich konvertovať na súbor.

### Pridanie kariet z poznámok

Pridanie poznámky z vášho trezoru na plátno:

1. Vyberte alebo potiahnite ikonu dokumentu v spodnej časti plátna.
2. Vyberte poznámku, ktorú chcete pridať.

Poznámky môžete pridať aj z kontextovej ponuky plátna:

1. Kliknite pravým tlačidlom myši na plátno a vyberte **Pridať poznámku z trezoru**.
2. Vyberte poznámku, ktorú chcete pridať.

Poznámky môžete tiež pretiahnuť z [[Prieskumník súborov|prieskumníka súborov]] na plátno.

Ak chcete v karte zobraziť iba časť poznámky, kliknite pravým tlačidlom myši na kartu a vyberte **Zmenšiť na nadpis...** alebo **Zmenšiť na blok...**. Potom vyberte nadpis alebo blok.

### Pridanie kariet z médií

Pridanie médií z vášho trezoru na plátno:

1. Vyberte alebo potiahnite ikonu obrázkového súboru v spodnej časti plátna.
2. Vyberte mediálny súbor, ktorý chcete pridať.

Médiá môžete pridať aj z kontextovej ponuky plátna:

1. Kliknite pravým tlačidlom myši na plátno a vyberte **Pridať média z trezoru**.
2. Vyberte mediálny súbor, ktorý chcete pridať.

Mediálne súbory môžete tiež pretiahnuť z [[Prieskumník súborov|prieskumníka súborov]] na plátno.

### Pridanie kariet z webových stránok

Vloženie webovej stránky na plátno:

1. Kliknite pravým tlačidlom myši na plátno a vyberte **Pridať webstránku**.
2. Zadajte URL webovej stránky a vyberte **Uložiť**.

Môžete tiež vybrať URL vo vašom prehliadači a potom ho pretiahnuť na plátno na vloženie do karty.

Na otvorenie webovej stránky vo vašom prehliadači stlačte `Ctrl` (alebo `Cmd` na macOS) a vyberte štítok karty. Alebo kliknite pravým tlačidlom myši na kartu a vyberte **Otvoriť externý odkaz**.

Kliknutím pravého tlačidla myši na kartu webovej stránky získate ďalšie možnosti.

- **Kopírovať URL** skopíruje adresu webovej stránky.
- **Zmeniť URL...** zmení adresu, ktorú karta zobrazuje.
- **Znovu načítať stránku** znova načíta webovú stránku.

### Pridanie kariet z databáz

Ak chcete zobraziť [[Úvod do Databáz|databázu]] na plátne, potiahnite súbor databázy z prieskumníka súborov na plátno. Karta zobrazí databázu.

Karta databázy zobrazuje predvolené zobrazenie databázy. Ak chcete zobraziť iné zobrazenie:

1. Kliknite pravým tlačidlom myši na kartu a vyberte **Pripnuté zobrazenie...**.
2. Vyberte zobrazenie, ktoré chcete.

Ak sa chcete vrátiť na predvolené zobrazenie, znova vyberte **Pripnuté zobrazenie...** a potom vyberte **Zobraziť predvolené zobrazenie**.

### Pridanie kariet z priečinkov

Pretiahnutím priečinka z [[Prieskumník súborov|prieskumníka súborov]] pridáte na plátno všetky súbory v danom priečinku.

### Úprava karty

Dvojitým kliknutím na textovú kartu alebo kartu poznámky začnete jej úpravu. Kliknutím kamkoľvek mimo karty úpravu ukončíte. Úpravu karty môžete ukončiť aj stlačením `Escape`.

Kartu môžete upraviť aj kliknutím pravého tlačidla myši a výberom **Upraviť**. Alebo vyberte kartu a potom vyberte **Upraviť** ![[lucide-square-pen.svg#icon]] v ovládacích prvkoch výberu.

### Odstránenie karty

Vybrané karty odstránite kliknutím pravého tlačidla myši na ktorúkoľvek z nich a výberom **Odstrániť**. Alebo stlačte `Backspace` (alebo `Delete` na macOS).

Môžete tiež vybrať **Odstrániť** ![[lucide-trash-2.svg#icon]] v ovládacích prvkoch výberu nad vašim výberom.

### Výmena kariet

Kartu poznámky alebo médií môžete vymeniť za inú kartu rovnakého typu.

Výmena karty poznámky:

1. Kliknite pravým tlačidlom myši na kartu, ktorú chcete nahradiť.
2. Vyberte **Zameniť súbor**.
3. Vyberte poznámku, ktorou chcete nahradiť.

## Výber kariet

Vyberte jednotlivé karty alebo potiahnutím výberu okolo viacerých kariet.

Karty môžete pridávať a odoberať z existujúceho výberu stlačením `Shift` a ich výberom.

Stlačením `Ctrl+a` (alebo `Cmd+a` na macOS) vyberiete všetky karty na plátne.

Na posúvanie obsahu karty ju musíte najprv vybrať.

### Usporiadanie kariet

Pretiahnutím vybranej karty ju presuniete.

Stlačte `Alt` (alebo `Option` na macOS) a potiahnutím duplikujete výber.

Stlačením `Shift` počas presúvania sa pohybujete iba jedným smerom.

Stlačením `Space` počas presúvania výberu zakážete prichytávanie.

Výber karty ju presunie dopredu.

### Zmena veľkosti karty

Potiahnutím ľubovoľného okraja karty zmeníte jej veľkosť.

Stlačením `Space` počas zmeny veľkosti zakážete prichytávanie.

Na zachovanie pomeru strán počas zmeny veľkosti stlačte `Shift` počas zmeny veľkosti.

### Zarovnanie a usporiadanie kariet

Na zarovnanie viacerých kariet vyberte dve alebo viac kariet. V ovládacích prvkoch výberu vyberte **Zarovnať** a potom vyberte možnosť.

- **Zarovnať vľavo**, **Zarovnať na stred** a **Zarovnať vpravo** zarovnajú karty na vertikálnu čiaru.
- **Zarovnať navrch**, **Zarovnať do stredu** a **Zarovnať nadol** zarovnajú karty na horizontálnu čiaru.
- **Usporiadať do riadku**, **Usporiadať do stĺpca** a **Usporiadať do mriežky** presunú karty do daného rozloženia.
- **Distribuovať horizontálne** a **Distribuovať vertikálne** rovnomerne rozmiestnia karty.
- **Vyrovnať horizontálne** a **Vyrovnať vertikálne** zmenia veľkosť každej karty tak, aby zodpovedala celej šírke alebo výške výberu.

## Prepájanie kariet

Kreslite čiary medzi kartami na zobrazenie vzťahov. Pridajte farby a štítky na opísanie toho, ako spolu súvisia.

### Prepojenie dvoch kariet

Prepojenie dvoch kariet smerovou čiarou:

1. Podržte kurzor nad jedným z okrajov karty, kým neuvidíte vyplnený kruh.
2. Potiahnite kruh k okraju inej karty na ich prepojenie.

> [!tip]- Vytvorenie karty z nového prepojenia
> Ak potiahnete čiaru bez prepojenia s inou kartou, môžete vytvoriť novú kartu na druhom konci.

### Odpojenie dvoch kariet

Odstránenie prepojenia medzi dvoma kartami:

1. Podržte kurzor nad prepojovacou čiarou, kým sa na nej nezobrazia dva malé kruhy.
2. Potiahnite jeden z kruhov od karty bez pripojenia k inej.

Dve karty môžete odpojiť aj kliknutím pravého tlačidla myši na čiaru medzi nimi a výberom **Odstrániť**. Alebo výberom čiary a stlačením `Backspace` (alebo `Delete` na macOS).

### Prepojenie karty s inou kartou

Presunutie jedného konca prepojovacej čiary:

1. Podržte kurzor nad prepojovacou čiarou, kým sa na nej nezobrazia dva malé kruhy.
2. Potiahnite kruh k inej karte na opätovné prepojenie.

### Navigácia prepojením

Ak sú dve prepojené karty ďaleko od seba, môžete preskočiť na kartu na druhom konci prepojenia. Kliknite pravým tlačidlom myši na čiaru blízko jedného konca a potom vyberte **Sledovať pripojenie**. Plátno sa presunie na kartu na opačnom konci.

### Pridanie štítku k prepojeniu

K čiare môžete pridať štítok na opísanie vzťahu medzi dvoma kartami.

Označenie prepojenia:

1. Dvojitým kliknutím na čiaru.
2. Zadajte štítok a stlačte `Escape` alebo kliknite kamkoľvek na plátno.

Prepojenie môžete označiť aj jeho výberom a potom výberom **Upraviť štítok** z ovládacích prvkov výberu.

Na úpravu štítku prepojenia dvojito kliknite na čiaru alebo kliknite pravým tlačidlom myši na čiaru a vyberte **Upraviť štítok**.

Na odstránenie štítku vyberte prepojenie a potom vyberte **Odstrániť štítok** v ovládacích prvkoch výberu.

### Zmena smeru prepojenia

V predvolenom nastavení má prepojenie šípku na konci, ktorá ukazuje na druhú kartu. Ak to chcete zmeniť:

1. Vyberte prepojenie.
2. V ovládacích prvkoch výberu vyberte **Smer čiary**.
3. Vyberte **Bez smeru**, **Jednosmerné** alebo **Obojsmerné**.

### Zmena farby karty alebo prepojenia

1. Vyberte karty alebo prepojenia, ktoré chcete zafarbiť.
2. V ovládacích prvkoch výberu vyberte **Nastaviť farbu** ![[lucide-palette.svg#icon]].
3. Vyberte farbu.

## Zoskupovanie kariet

### Zoskupenie vybraných kariet

Vytvorenie prázdnej skupiny:

- Kliknite pravým tlačidlom myši na plátno a vyberte **Vytvoriť skupinu**.

Zoskupenie súvisiacich kariet:

1. Vyberte karty.
2. Kliknite pravým tlačidlom myši na ktorúkoľvek z vybraných kariet a vyberte **Vytvoriť skupinu**.

**Premenovanie skupiny:** Dvojitým kliknutím na názov skupiny ho upravíte a stlačením `Enter` uložíte.

### Pridanie pozadia do skupiny

Za kartami v skupine môžete zobraziť obrázok.

1. Vyberte skupinu.
2. V ovládacích prvkoch výberu vyberte **Nastaviť pozadie**.
3. Vyberte obrázok z vášho trezoru.

Na zmenu pozadia vyberte skupinu a potom vyberte **Upraviť pozadie**.

- **Nahradiť pozadie** vyberie iný obrázok.
- **Odstrániť pozadie** odstráni obrázok.
- **Krytie** spôsobí, že obrázok vyplní skupinu.
- **Zachovať pomer strán** zachová proporcie obrázka.
- **Opakovať** rozloží obrázok dlaždicovo cez skupinu.

## Navigácia na plátne

Použite posúvanie a priblíženie na pohyb po plátne.

### Posúvanie plátna

Na posúvanie plátna vertikálne a horizontálne, známe tiež ako _posúvanie_, môžete použiť ktorýkoľvek z nasledujúcich prístupov:

- Stlačte `Space` a potiahnite plátno.
- Potiahnite plátno pomocou stredného tlačidla myši.
- Posúvaním kolieska myši posúvate vertikálne a stlačením `Shift` počas posúvania posúvate horizontálne.

### Priblíženie plátna

Na priblíženie plátna stlačte `Space` alebo `Ctrl` (alebo `Cmd` na macOS) a posúvajte kolieskom myši. Alebo vyberte **Priblížiť** ![[lucide-plus.svg#icon]] a **Oddialiť** ![[lucide-minus.svg#icon]] z ovládacích prvkov priblíženia v pravom hornom rohu.

#### Priblíženie na prispôsobenie

Na priblíženie plátna tak, aby bola viditeľná každá položka, vyberte **Priblížiť na prispôsobenie oknu** ![[lucide-maximize.svg#icon]]. Alebo použite klávesovú skratku `Shift+1`.

#### Priblíženie na výber

Na priblíženie plátna tak, aby boli viditeľné všetky vybrané položky, kliknite pravým tlačidlom myši na vybranú kartu a vyberte **Priblížiť na výber**. Alebo stlačte `Shift+2`.

#### Resetovanie priblíženia

Na zmenu veľkosti priblíženia späť na predvolenú hodnotu vyberte **Resetovať priblíženie** v ovládacích prvkoch priblíženia v pravom hornom rohu.


### Preskočenie na skupinu

Na rýchly presun na skupinu na veľkom plátne otvorte paletu príkazov a vyberte **Canvas: Prejsť na skupinu**. Zobrazí sa zoznam skupín na vašom plátne. Vyberte skupinu, na ktorú chcete prejsť, a plátno sa vycentruje na ňu.

## Nastavenia plátna

Vyberte **Nastavenie plátna** ![[lucide-settings.svg#icon]] nad ovládacími prvkami plátna na zmenu správania vášho plátna.

- **Prichytiť k mriežke** prichytí karty k mriežke na pozadí pri presúvaní a zmene veľkosti.
- **Prichytiť k objektom** prichytí karty k blízkym kartám pri presúvaní a zmene veľkosti.
- **Iba pre čítanie** zabraňuje zmenám na plátne.

## Export plátna ako obrázka

Plátno môžete exportovať ako obrázok PNG na počítači. Export obrázka nie je dostupný v mobilnej aplikácii Obsidian.

1. Otvorte plátno, ktoré chcete exportovať.
2. Otvorte paletu príkazov a vyberte **Canvas: Exportovať ako obrázok**.
3. Vyberte nastavenia.
    - **Viditeľný priestor** nastaví, čo sa má exportovať. Vyberte **Celé plátno** pre celé plátno alebo **Iba viditeľný priestor** pre časť, ktorú práve vidíte.
    - **Priblíženie** nastaví kvalitu obrázka. Vyššie priblíženie vytvorí väčší a ostrejší obrázok. Dialóg zobrazí odhadovanú veľkosť obrázka.
    - **Zobraziť logo** pridá logo Obsidianu do ľavého dolného rohu. Toto je predvolene zapnuté.
    - **Režim súkromia** skryje všetok text na vašom plátne. Toto je predvolene vypnuté.
4. Vyberte **Uložiť**.
5. Vyberte, kam uložiť súbor. Názov súboru je predvolene názov vášho plátna s príponou `.png`.

Prázdne plátno nie je možné exportovať.

## Späť a znova

Na vrátenie poslednej zmeny vyberte **Späť** v ovládacích prvkoch plátna na pravej strane plátna. Alebo stlačte `Ctrl+Z` (Windows a Linux) alebo `Command+Z` (macOS).

Na zopakovanie zmeny vyberte **Znova**. Alebo stlačte `Ctrl+Y` alebo `Ctrl+Shift+Z` (Windows a Linux) alebo `Command+Y` alebo `Command+Shift+Z` (macOS).

## Nápoveda pre plátno

Na počítači vyberte **Nápoveda pre plátno** ![[lucide-help-circle.svg#icon]] pod ovládacími prvkami plátna na zobrazenie zoznamu skratiek pre posúvanie, priblíženie, výber a presúvanie kariet.

## Vloženie plátna

Plátno môžete vložiť do poznámky pomocou štandardnej syntaxe na vkladanie. Viac informácií nájdete v časti [[Vkladanie súborov#Embed a canvas in a note|Vloženie plátna do poznámky]].

## Používanie Canvas na mobile

Keď otvoríte plátno na telefóne alebo tablete, Obsidian zobrazí tri nápovedy.

- **Potiahnutím posuniete**
- **Posunom od seba priblížite**
- **Dotykom a podržaním pridáte / presuniete / vyberiete**

### Otvorenie ponuky plátna

Dotknite sa a podržte prázdnu oblasť plátna. Ponuka obsahuje tieto položky.

- **Pridať kartu** pridá textovú kartu.
- **Pridať poznámku z trezoru** pridá poznámku z vášho trezoru.
- **Pridať média z trezoru** pridá médiá z vášho trezoru.
- **Pridať webstránku** vloží webovú stránku.
- **Vytvoriť skupinu** vytvorí prázdnu skupinu.
- **Prichytiť k mriežke**, **Prichytiť k objektom** a **Iba pre čítanie** sú rovnaké možnosti ako v **Nastavenia plátna**.

### Pridávanie kariet

Karty môžete pridať z ponuky plátna. Môžete tiež vybrať ikonu v spodnej časti plátna.

- Ikona prázdneho súboru pridá textovú kartu.
- Ikona dokumentu pridá poznámku z vášho trezoru.
- Ikona obrázka pridá médiá z vášho trezoru.

### Práca s vybranou kartou

Ťuknutím na kartu ju vyberiete. Nad kartou sa zobrazí panel nástrojov.

- **Odstrániť** ![[lucide-trash-2.svg#icon]] odstráni kartu.
- **Nastaviť farbu** ![[lucide-palette.svg#icon]] zmení farbu karty.
- **Priblížiť na výber** priblíži plátno na kartu.
- **Upraviť** ![[lucide-square-pen.svg#icon]] upraví kartu.

### Presúvanie karty

1. Ťuknutím na kartu ju vyberiete.
2. Dotknite sa a podržte vybranú kartu a potom ju potiahnite na novú pozíciu.

### Zmena veľkosti karty

1. Ťuknutím na kartu ju vyberiete.
2. Potiahnutím strán karty ju zväčšíte alebo zmenšíte.

### Otvorenie ponuky karty

Dotknite sa a podržte kartu. Ponuka obsahuje tieto položky.

- **Priblížiť na výber** priblíži plátno na kartu.
- **Upraviť** upraví kartu.
- **Konvertovať na súbor...** konvertuje textovú kartu na poznámku.
- **Duplikovať** vytvorí kópiu karty.
- **Odstrániť** odstráni kartu.

### Úprava karty

Na úpravu textovej karty alebo karty poznámky použite ktorýkoľvek spôsob.

- Ťuknutím na kartu ju vyberiete a potom na ňu dvakrát ťuknete. Otvorí sa klávesnica.
- Ťuknutím na kartu ju vyberiete a potom vyberte **Upraviť** ![[lucide-square-pen.svg#icon]] v paneli nástrojov nad kartou.

### Označenie prepojenia

1. Ťuknutím na čiaru ju vyberiete.
2. V paneli nástrojov vyberte **Upraviť štítok** ![[lucide-square-pen.svg#icon]]. Otvorí sa klávesnica.
3. Zadajte štítok.

Na odstránenie štítku ťuknite na čiaru a potom vyberte **Odstrániť štítok** v paneli nástrojov.

### Zmena smeru prepojenia

1. Ťuknutím na čiaru ju vyberiete.
2. V paneli nástrojov vyberte **Smer čiary**.
3. Vyberte **Bez smeru**, **Jednosmerné** alebo **Obojsmerné**.

### Otvorenie ponuky čiary

Dotknite sa a podržte čiaru, ktorá prepája dve karty. Ponuka obsahuje tieto položky.

- **Upraviť štítok** pridá alebo zmení štítok čiary.
- **Sledovať pripojenie** presunie plátno na kartu na opačnom konci čiary.
- **Odstrániť** odstráni prepojenie.

### Prepájanie kariet

1. Ťuknutím na kartu ju vyberiete.
2. Potiahnite jeden z kruhov na jej okrajoch na inú kartu.

Ak potiahnete čiaru a pustíte ju na prázdnu oblasť, otvorí sa ponuka s možnosťami **Pridať kartu** a **Pridať poznámku z trezoru**. Vyberte jednu na pridanie karty na konci čiary.

### Odpojenie kariet

Na odstránenie prepojenia použite ktorýkoľvek spôsob.

- Ťuknite na čiaru a potom vyberte **Odstrániť** ![[lucide-trash-2.svg#icon]].
- Potiahnite koniec čiary so šípkou späť na kartu, z ktorej začínala. Čiara zmizne.

### Zoskupovanie kariet

Vytvorenie skupiny:

1. Dotknite sa a podržte prázdnu oblasť plátna.
2. Vyberte **Vytvoriť skupinu**.
3. Potiahnutím okrajov skupiny zmeníte jej veľkosť.

Na pridanie kariet do skupiny ich potiahnite do oblasti skupiny. Keď presuniete skupinu, karty v nej sa presunú tiež.

Na premenovanie skupiny dvakrát ťuknite na jej názov. Otvorí sa klávesnica. Zadajte nový názov.

### Ovládacie prvky plátna

Ovládacie prvky na pravej strane plátna menia zobrazenie a vaše nastavenia.

- **Priblížiť** a **Oddialiť** menia veľkosť priblíženia.
- **Resetovať priblíženie** vráti plátno na predvolenú úroveň priblíženia.
- **Priblížiť na prispôsobenie oknu** zobrazí každú kartu na plátne.
- **Späť** a **Znova** vrátia alebo zopakujú poslednú zmenu.
- **Nastavenia plátna** obsahujú možnosti **Prichytiť k mriežke**, **Prichytiť k objektom** a **Iba pre čítanie**.

## Pokročilé tipy

Pripravili sme niekoľko krátkych videí na demonštráciu niektorých pokročilých prípadov použitia Canvas.

Môžete si [pozrieť všetkých 72 tipov tu](https://obsidian.md/canvas#protips). Videá s tipmi sú viditeľné iba na počítači.
