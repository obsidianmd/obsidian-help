---
permalink: plugins/canvas
---
Canvas je [[Vstavané pluginy|vstavaný plugin]] pre vizuálne poznámkovanie. Poskytuje vám nekonečný priestor na rozloženie poznámok a ich prepojenie s inými poznámkami, prílohami a webovými stránkami.

Vizuálne poznámkovanie vám pomáha pochopiť vaše poznámky tým, že ich organizujete v 2D priestore. Prepojte poznámky čiarami a zoskupte súvisiace poznámky, aby ste lepšie pochopili vzťahy medzi nimi.

Dáta Canvas, ktoré vytvoríte v Obsidian, sa ukladajú ako súbory `.canvas` pomocou otvoreného formátu súborov [JSON Canvas](https://jsoncanvas.org/).

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

> [!note] Poznámka
> Karty obsahujúce iba text sa nezobrazujú v [[Spätné odkazy|spätných odkazoch]]. Ak chcete, aby sa zobrazovali, musíte ich konvertovať na súbor.

### Pridanie kariet z poznámok

Pridanie poznámky z vášho trezoru na plátno:

1. Vyberte alebo potiahnite ikonu dokumentu v spodnej časti plátna.
2. Vyberte poznámku, ktorú chcete pridať.

Poznámky môžete pridať aj z kontextovej ponuky plátna:

1. Kliknite pravým tlačidlom myši na plátno a vyberte **Pridať poznámku z trezoru**.
2. Vyberte poznámku, ktorú chcete pridať.

Alebo ich môžete pridať na plátno pretiahnutím súboru z [[Prieskumník súborov|prieskumníka súborov]].

### Pridanie kariet z médií

Pridanie médií z vášho trezoru na plátno:

1. Vyberte alebo potiahnite ikonu obrázkového súboru v spodnej časti plátna.
2. Vyberte mediálny súbor, ktorý chcete pridať.

Médiá môžete pridať aj z kontextovej ponuky plátna:

1. Kliknite pravým tlačidlom myši na plátno a vyberte **Pridať média z trezoru**.
2. Vyberte mediálny súbor, ktorý chcete pridať.

Alebo ich môžete pridať na plátno pretiahnutím súboru z [[Prieskumník súborov|prieskumníka súborov]].

### Pridanie kariet z webových stránok

Vloženie webovej stránky na plátno:

1. Kliknite pravým tlačidlom myši na plátno a vyberte **Pridať webstránku**.
2. Zadajte URL webovej stránky a vyberte **Uložiť**.

Môžete tiež vybrať URL vo vašom prehliadači a potom ho pretiahnuť na plátno na vloženie do karty.

Na otvorenie webovej stránky vo vašom prehliadači stlačte `Ctrl` (alebo `Cmd` na macOS) a vyberte štítok karty. Alebo kliknite pravým tlačidlom myši na kartu a vyberte **Otvoriť v prehliadači**.

### Pridanie kariet z priečinkov

Pretiahnutím priečinka z prieskumníka súborov pridáte na plátno všetky súbory v danom priečinku.

### Úprava karty

Dvojitým kliknutím na textovú kartu alebo kartu poznámky začnete jej úpravu. Kliknutím mimo karty úpravu ukončíte. Úpravu karty môžete ukončiť aj stlačením `Escape`.

Kartu môžete upraviť aj kliknutím pravého tlačidla myši a výberom **Upraviť**.

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

Karty na plátne vyberiete kliknutím na ne. Viaceré karty môžete vybrať potiahnutím výberu okolo nich.

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

## Prepájanie kariet

Kreslite čiary medzi kartami na vytváranie vzťahov medzi nimi. Použite farby a štítky na opísanie toho, ako spolu súvisia.

### Prepojenie dvoch kariet

Prepojenie dvoch kariet smerovou čiarou:

1. Podržte kurzor nad jedným z okrajov karty, kým neuvidíte vyplnený kruh.
2. Potiahnite kruh k okraju inej karty na ich prepojenie.

> [!tip] Tip
> Ak potiahnete čiaru bez prepojenia s inou kartou, môžete potom pridať kartu, ku ktorej ju chcete pripojiť.

### Odpojenie dvoch kariet

Odstránenie prepojenia medzi dvoma kartami:

1. Podržte kurzor nad prepojovacou čiarou, kým sa na nej nezobrazia dva malé kruhy.
2. Potiahnite jeden z kruhov od karty bez pripojenia k inej.

Dve karty môžete odpojiť aj kliknutím pravého tlačidla myši na čiaru medzi nimi a výberom **Odstrániť**. Alebo výberom čiary a stlačením `Backspace` (alebo `Delete` na macOS).

### Prepojenie karty s inou kartou

Presunutie jedného konca prepojovacej čiary:

1. Podržte kurzor nad prepojovacou čiarou, kým sa na nej nezobrazia dva malé kruhy.
2. Potiahnite kruh na konci, ktorý chcete prepojiť, k inej karte.

### Navigácia prepojením

Ak sú dve prepojené karty ďaleko od seba, môžete prejsť na zdroj alebo cieľ prepojenia kliknutím pravého tlačidla myši na čiaru a výberom **Prejsť na cieľ** alebo **Prejsť na zdroj**.

### Pridanie štítku k prepojeniu

K čiare môžete pridať štítok na opísanie vzťahu medzi dvoma kartami.

Označenie prepojenia:

1. Dvojitým kliknutím na čiaru.
2. Zadajte štítok a stlačte `Escape` alebo kliknite kamkoľvek na plátno.

Prepojenie môžete označiť aj jeho výberom a potom výberom **Upraviť štítok** z ovládacích prvkov výberu.

Na úpravu štítku prepojenia dvojito kliknite na čiaru alebo kliknite pravým tlačidlom myši na čiaru a vyberte **Upraviť štítok**.

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

## Navigácia na plátne

Keď začnete pridávať viac kariet na plátno, budete chcieť vedieť, ako sa na plátne pohybovať a pozerať na jeho rôzne časti. Naučte sa posúvať a priblížiť na jednoduchý pohyb po plátne.

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

Na priblíženie plátna tak, aby boli viditeľné všetky vybrané položky, kliknite pravým tlačidlom myši na vybranú kartu a vyberte **Priblížiť na výber**. Alebo použite klávesovú skratku `Shift+2`.

#### Resetovanie priblíženia

Na zmenu veľkosti priblíženia späť na predvolenú hodnotu vyberte **Resetovať priblíženie** v ovládacích prvkoch priblíženia v pravom hornom rohu.

## Pokročilé tipy

Pripravili sme niekoľko krátkych videí na demonštráciu niektorých pokročilých prípadov použitia Canvas.

Môžete si [pozrieť všetkých 72 tipov tu](https://obsidian.md/canvas#protips). Upozorňujeme, že videá s tipmi sú viditeľné iba na počítači.
