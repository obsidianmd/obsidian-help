---
permalink: style-guide
publish: true
mobile: true
description: Táto stránka vysvetľuje štylistickú príručku pre písanie našej podpornej dokumentácie.
---
Dokumentácia Obsidian sa riadi štýlovými pokynmi uvedenými na tejto stránke. Tieto pokyny sú založené na osvedčených postupoch v odvetví, najmä na [sprievodcovi štýlom dokumentácie Google pre vývojárov](https://developers.google.com/style) a [sprievodcovi štýlom Microsoft](https://learn.microsoft.com/en-us/style-guide/). Pre okrajové prípady, ktoré nie sú pokryté nižšie, konzultujte tieto externé príručky ako sekundárne referencie.

> [!tip]- Prispejte
> Väčšina dokumentácie existovala ešte pred vznikom tejto príručky štýlu.
> 
> Ak nájdete akékoľvek porušenia tejto príručky štýlu, prosím [vytvorte issue](https://github.com/obsidianmd/obsidian-docs/issues/new) a odošlite pull request do [obsidianmd/obsidian-docs](https://github.com/obsidianmd/obsidian-docs).

## Terminológia a gramatika

### Jazykový štýl

Pre našu anglickú dokumentáciu sa odporúča používať [globálnu angličtinu](https://docs.openedx.org/en/latest/documentors/references/doc_english_writing.html), aby sme lepšie slúžili nášmu celosvetovému publiku a pomohli s [[#Preklady|prekladmi]]. To znamená:

- Vyhýbanie sa idiómom a kultúrne špecifickým výrazom
- Používanie činného rodu a priamej stavby viet
- Uprednostňovanie jednoduchých, bežných slov pred zložitou terminológiou
- Byť explicitný namiesto implicitného
- Pre pravopisné konvencie používať americkú angličtinu (napr. 'organize' nie 'organise').

### Pojmy

- Uprednostňujte "klávesová skratka" pred "horúci kláves". Horúci kláves používajte len pri odkazovaní na konkrétnu funkciu.
- Uprednostňujte "aplikácia Obsidian" na mobile a "aplikácia Obsidian" na desktope.
- Uprednostňujte "sync" alebo "synchronizácia" pred "synchronizovanie".
- Uprednostňujte "hľadaný výraz" pred "hľadaný dopyt".
- Uprednostňujte "nadpis" pred "hlavička" pri odkazovaní na text, ktorý uvádza sekciu.
- Uprednostňujte "maximum" pred "max" a "minimum" pred "min".

### Názvy produktov

Názvy produktov Obsidian začínajú slovom "Obsidian", napríklad "Obsidian Publish" a "Obsidian Sync".

Ak sa odsek stáva príliš opakujúcim, pri ďalších odkazoch môžete použiť skrátenú formu.

Napríklad:

_Aby Obsidian Sync umožnil konfiguráciu špecifickú pre zariadenie, nesynchronizuje svoje vlastné nastavenia. Sync musíte nakonfigurovať pre každé vaše zariadenie._

### Používateľské rozhranie a interakcie

- Použite **tučné písmo** na označenie textu tlačidla.
- Uprednostňujte "vyberte" pred "ťuknite" alebo "kliknite".
	- Pre inštrukcie špecifické pre mobilné zariadenia je "ťuknite" prijateľné pri popise dotykových interakcií, keďže "kliknutie" nie je dostupné.
- Uprednostňujte "bočný panel" pred "bočný panel" (bez medzery).
- Uprednostňujte "vykonajte" pred "spustite" pri odkazovaní na príkazy alebo akcie.

Pri odkazovaní na viacero interakcií s používateľským rozhraním v poradí použite symbol → (U+2192). Napríklad "**[[Nastavenia]] → Komunitné pluginy**".

### Poznámky, súbory a priečinky

- Použite "poznámka" pri odkazovaní na Markdown súbor v trezore.
- Použite "súbor" pri odkazovaní na iné prípony súborov než Markdown.
- Uprednostňujte "názov poznámky" pred "titulok poznámky".
- Uprednostňujte "aktívna poznámka" pred "aktuálna poznámka".
- Uprednostňujte "priečinok" pred "adresár".
- Uprednostňujte "typ súboru" pred "formát súboru", pokiaľ sa konkrétne neodkazujete na dátový formát obsahu súboru.

Pri navigácii medzi poznámkami použite "otvoriť", ak je cieľ skrytý, a "prepnúť", ak sú zdrojová aj cieľová poznámka otvorené v samostatných rozdeleniach.

### Referenčná dokumentácia pre nastavenia

Pokiaľ je to možné, všetky nastavenia by mali byť zdokumentované priamo v Obsidian pomocou popisného textu. Vyhnite sa dokumentovaniu konkrétneho nastavenia v Nápovede Obsidian, pokiaľ:

- Vyžaduje hlbšie znalosti o tom, ako a kedy ho použiť.
- Je bežne nesprávne používané alebo sa naň často pýtajú.
- _Drasticky_ mení používateľskú skúsenosť.

Zvážte použitie zvýrazneného bloku s tipom, ak chcete upozorniť na konkrétne nastavenie.

### Smerové výrazy

Pri použití smerových výrazov ako prídavných mien ich spojujte spojovníkom. Pri použití smeru ako podstatného mena sa spojovníku vyhnite.

**Odporúčané:**

- Vyberte **[[Nastavenia]]** v ľavom dolnom rohu.
- Vyberte **[[Nastavenia]]** vľavo dole.

**Neodporúčané:**

- Vyberte **[[Nastavenia]]** v ľavom dolnom rohu. (bez spojovníka)
- Vyberte **[[Nastavenia]]** v ľavom-dolnom.

Uprednostňujte "ľavý horný" a "pravý horný" pred "ľavý vrchný" a "pravý vrchný".

Neuvádzajte smer pri odkazovaní na nastavenia. Umiestnenie ovládacieho prvku nastavení závisí od zariadenia.

**Odporúčané:**

- Vedľa **Vybrať vzdialený trezor** vyberte **Vybrať**.

**Neodporúčané:**

- Napravo od **Vybrať vzdialený trezor** vyberte **Vybrať**.

Pri popise vertikálneho smeru v prvkoch používateľského rozhrania používajte "nad" a "pod" pre priestorové vzťahy. Vyhýbajte sa "hore" a "dole", pretože môžu byť v rôznych kontextoch nejednoznačné.

**Odporúčané:**

- Vyhľadávacie pole sa zobrazí nad zoznamom súborov.
- Ďalšie možnosti sú dostupné nižšie.

**Neodporúčané:**

- Vyhľadávacie pole je hore od zoznamu súborov.
- Ďalšie možnosti sú dole pod tým.

### Inštrukcie

Používajte rozkazovacie spôsoby pre názvy sprievodcov, nadpisy sekcií a postupné inštrukcie. Rozkazovací spôsob je stručný a orientovaný na akciu, čo je pre používateľov sledujúcich inštrukcie priamočiarejšie.

- Uprednostňujte "Nastavte" pred "Nastavovanie"
- Uprednostňujte "Presuňte súbor" pred "Presúvanie súboru"
- Uprednostňujte "Importujte svoje poznámky" pred "Importovanie vašich poznámok"

### Veľkosť písmen vo vetách

Uprednostňujte *veľkosť písmen ako vo vete* pred *veľkými začiatočnými písmenami všetkých slov* pre nadpisy, tlačidlá a titulky. Pri odkazovaní na prvky používateľského rozhrania vždy zhodnoťte veľkosť písmen s textom v rozhraní.

**Odporúčané:**

- Ako Obsidian ukladá dáta

**Neodporúčané:**

- Ako Obsidian Ukladá Dáta

### Príklady

Uprednostňujte realistické príklady pred nezmyselnými výrazmi.

**Odporúčané:**

- `task:(telefonát OR plánovanie)`

**Neodporúčané:**

- `task:(foo OR bar)`

### Názvy kláves a klávesové skratky

Pri odkazovaní na klávesy a klávesové skratky používajte konzistentný zápis.

**Jednotlivé názvy kláves:**

Pri odkazovaní na znak na klávesnici podľa názvu pridajte znak medzi zátvorky hneď za názov.

**Odporúčané:**

- Stlačte kláves spojovník (-) na pridanie pomlčky.
- Použite otáznik (?) na vyhľadávanie.

**Neodporúčané:**

- Stlačte kláves spojovník na pridanie pomlčky.
- Použite ? na vyhľadávanie.
- Pridajte `-` pred slovo.

**Klávesové skratky:**

Formátujte klávesové skratky bez medzier okolo znamienka plus. Keď sa skratka líši medzi operačnými systémami, uveďte obe.

**Odporúčané:**

- Stlačte `Ctrl+Z` (Windows) alebo `Command+Z` (macOS) na vrátenie zmeny.
- Stlačte `Escape` na zatvorenie tohto okna.
- Použite `Tab` na presun medzi poľami.

**Neodporúčané:**

- Stlačte `Cmd+Z` na vrátenie zmeny.
- Stlačte `Ctrl + Z` (s medzerami) na vrátenie zmeny.
- Stlačte `Ctrl/Cmd+Z` na vrátenie zmeny.

Pre skratky, ktoré sú identické na všetkých platformách, nemusíte uvádzať operačný systém. Ak si nie ste istí, či sa skratka líši podľa platformy, pre istotu uveďte operačný systém. Windows a Linux zvyčajne používajú rovnaké skratky.

### Markdown

Používajte prázdne riadky medzi Markdown blokmi:

**Odporúčané:**

```md
# Nadpis 1

Toto je sekcia.

1. Prvá položka
2. Druhá položka
3. Tretia položka
```

**Neodporúčané:**

```md
# Nadpis 1
Toto je sekcia.
1. Prvá položka
2. Druhá položka
3. Tretia položka
```

**Dlhé pomlčky v zoznamoch:**

Používajte dlhé pomlčky (—) na oddelenie tučných výrazov od ich popisov v odrážkových zoznamoch. Nepoužívajte dlhé pomlčky v jednoduchých vnorených odrážkových zoznamoch s odkazmi.

**Odporúčané:**

- **Ponuka zobrazenia** — vytvárajte, upravujte a prepínajte zobrazenia.
- **Výpočet hodnôt** — pridajte ceny, vypočítajte súčty alebo vykonajte matematické operácie.

**Neodporúčané:**

- [[Vytvorenie databázy]] — Naučte sa, ako vytvoriť a vložiť databázu.

### Obrázky

Používajte "**šírka** x **výška** pixelov" na opis rozmerov obrázka alebo obrazovky.

**Príklad:**

Odporúčané rozmery obrázka: 1920 x 1080 pixelov.

## Štruktúra informácií

### Typy zvýraznených blokov

Používajte zvýraznené bloky strategicky na zvýraznenie konkrétnych typov informácií:

**Tip** (`[!tip]-`) - Praktické rady alebo osvedčené postupy, ktoré vylepšujú pracovný postup používateľa. Používajte pre skratky, obchádzky alebo nepodstatné, ale užitočné informácie. Tieto zvýraznené bloky sú predvolene zbalené.

**Informácia** (`[!info]+`) - Dodatočný kontext, doplňujúce informácie alebo vysvetlenia. Používajte, keď informácia pridáva porozumenie, ale nie je potrebná na dokončenie úlohy. Tieto zvýraznené bloky sú predvolene rozbalené.

**Varovanie** (`[!warning]+`) - Dôležité upozornenia, ktoré zabraňujú strate dát, chybám alebo nežiaducim následkom. Používajte opatrne pre skutočne rizikové situácie. Tieto zvýraznené bloky by nikdy nemali byť zbalené.

**Príklad** (`[!example]-`) - Všeobecné vedľajšie poznámky alebo doplňujúce detaily. Používajte pre okrajové informácie, ktoré niektorí používatelia môžu považovať za relevantné. Tieto zvýraznené bloky sú predvolene zbalené.

**Príklady:**
```md
> [!tip]- Používajte klávesové skratky
> Svoj pracovný postup môžete urýchliť zapamätaním si najpoužívanejších skratiek.

> [!info]+ Toto je platený doplnok
> Táto funkcia vyžaduje platené predplatné.

> [!warning]+ Túto akciu nie je možné vrátiť späť
> Odstránenie trezora je trvalé. Zvážte najprv export svojich poznámok.

> [!example]- Pokročilé použitie
> Toto nastavenie môžete konfigurovať aj cez ponuku Grafu.
```

### Zoznamy vs. súvislý text

Používajte zoznamy pri prezentácii jednotlivých položiek, ktoré nemajú silné sekvenčné alebo kauzálne vzťahy. Používajte súvislý text a odseky, keď položky na seba nadväzujú, vyžadujú vysvetlenie alebo profitujú z naratívneho toku.

**Zoznam použite pre:**
- Množinu nesúvisiacich funkcií
- Požiadavky na inštaláciu
- Konfiguračné možnosti
- Kroky pri riešení problémov

**Súvislý text použite pre:**
- Vysvetlenia, ako niečo funguje
- Pracovné postupy so závislosťami
- Koncepčné prehľady
- Pokyny vyžadujúce kontext

### Tabuľky

Používajte tabuľky na porovnanie funkcií, verzií alebo súvisiacich údajových bodov, kde zarovnanie napomáha porozumeniu. Vyhýbajte sa tabuľkám pre jednoduché zoznamy alebo jednostĺpcové dáta.

**Dobrý prípad použitia:**

| Funkcia | Mobil | Desktop |
|---------|-------|---------|
| Sync | Áno | Áno |
| Pluginy | Nie | Áno |
| Témy | Obmedzené | Plné |

### Krížové odkazy

Používajte interné wiki odkazy (`[[Názov poznámky]]`) slobodne, aby ste pomohli používateľom navigovať k súvisiacim témam. Avšak vyhnite sa nadmernému odkazovaniu:

- Neodkazujte rovnaký výraz viackrát na jednej stránke
- Odkazujte len vtedy, keď odkazovaná stránka poskytuje významný dodatočný kontext
- Keď je to užitočné, použite popisný text odkazu: `[[Názov poznámky#Sekcia|popisný text]]`

**Príklad:**

Prvá zmienka: "Dozviete sa o [[Úvod do Obsidian Sync|Obsidian Sync]], aby ste mali trezor aktualizovaný naprieč zariadeniami."
Ďalšia zmienka: "Sync môžete konfigurovať pre každé zariadenie samostatne."

### Obsah špecifický pre platformu

Pri dokumentovaní funkcií, ktoré sa líšia medzi platformami, použite nadpisy sekcií na organizáciu obsahu.

Použite `Desktop` a `Mobil` ako nadpisy podsekcií na oddelenie inštrukcií alebo funkcií špecifických pre platformu.

**Odporúčané:**
```md
## Prispôsobenie panelu nástrojov

### Desktop

V desktopovej verzii môžete panel nástrojov prispôsobiť nasledovne:

- Zmeňte poradie akcií panelu nástrojov presúvaním ikon.
- Na skrytie konkrétnych akcií kliknite pravým tlačidlom na prázdne miesto a odškrtnite akcie, ktoré chcete skryť.

### Mobil

V mobilnej verzii môžete panel nástrojov prispôsobiť cez nastavenia:

1. Otvorte **[[Nastavenia]]**.
2. Prejdite na **Vzhľad**.
3. Kliknite na **Spravovať** pod **Konfigurácia panelu nástrojov**.
```

> [!info]+ Kedy vytvoriť sekcie?
> Vytvárajte samostatné sekcie len ak sa obsah výrazne líši. Ak sú inštrukcie vo veľkej miere rovnaké s drobnými odchýlkami, použite namiesto toho vložené poznámky.

## Ikony a obrázky

Zahrňte ikony a obrázky, keď uľahčujú vysvetlenie vecí, ktoré je ťažké opísať slovami, alebo keď potrebujete ukázať dôležité časti aplikácie Obsidian. Obrázky môžete ukladať do priečinka `Attachments`.

- Obrázok by mal uľahčiť pochopenie textu, ktorý sprevádza.

 **Príklad**: Po povolení plugin [[Počet slov]] vytvorí nový záznam na vašom stavovom riadku dole.
 
![[Style-guide-zoomed-example.png#interface|300]]

- Obrázky by mali byť vo formáte `.png` alebo `.svg`.
- Ak obrázok vyzerá v poznámke príliš veľký, zmenšite ho mimo Obsidian alebo upravte jeho rozmery podľa popisu v [[Vkladanie súborov#Vloženie obrázka do poznámky|vložení obrázka do poznámky]].
- V ojedinelých prípadoch môžete umiestniť obzvlášť veľké alebo zložité obrázky do [[Popisy#Zbaliteľné popisy|zbaleného zvýrazneného bloku]].
- Pre vyskakovacie okná alebo modálne okná by obrázok mal zobrazovať celé okno aplikácie Obsidian.
 ![[Style-guide-modal-example.png#interface]]

### Ikony

Ikony [Lucide](https://lucide.dev/icons/) a vlastné ikony Obsidian je možné použiť vedľa detailných prvkov na vizuálne znázornenie funkcie.

**Príklad:** V paneli nástrojov vľavo vyberte **Vytvoriť nové plátno** ![[lucide-layout-dashboard.svg#icon]] na vytvorenie plátna v rovnakom priečinku ako aktívny súbor.

**Pokyny pre ikony**

- Ukladajte ikony do priečinka `Attachments/icons`.
- Pridajte predponu `lucide-` pred názov ikony Lucide.
- Pridajte predponu `obsidian-icon-` pred názov ikony Obsidian.

**Príklad:** Ikona na vytvorenie nového plátna by mala byť pomenovaná `lucide-layout-dashboard`.

- Používajte SVG verziu dostupných ikon.
- Ikony by mali mať šírku `18` pixelov, výšku `18` pixelov a šírku ťahu `1.5`. Tieto nastavenia môžete upraviť v SVG dátach.

> [!info]- Úprava veľkosti a ťahu v SVG
> ```html
> <svg xmlns="http://www.w3.org/2000/svg" width="ŠÍRKA" height="VÝŠKA" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="ŠÍRKA-ŤAHU" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-layout-dashboard"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>
>```

- Využite kotvu `icon` vo vložených obrázkoch na úpravu medzier okolo ikony, aby sa prehľadne zarovnala s textom v okolí.
- Ikony by mali byť obklopené zátvorkami. ![[lucide-cog.svg#icon]]

**Príklad**: `![[lucide-cog.svg#icon]]`

### Kotviace značky obrázkov

Kotviace značky obrázkov sú k dispozícii na pridanie dekoratívnych zmien do vložených obrázkov.

> [!warning] Upozornenie na živý náhľad
> Kotviace značky ikon sa nezobrazia správne v **živom náhľade.** Použite **režim čítania** na potvrdenie, že kotviaca značka bola aplikovaná.

**Ikona**

`![[lucide-menu.svg#icon]]`

Kotviaca značka ikony zabezpečuje správne vertikálne zarovnanie ikon používaných na označenie prvkov rozhrania.

Prvá ikona ponuky používa kotviacu značku ![[lucide-menu.svg#icon]], zatiaľ čo druhá ikona ponuky ( ![[lucide-menu.svg]] ) nie.

**Rozhranie**

`![[Vault picker.png#interface]]`

Kotviaca značka rozhrania pridáva dekoratívny tieň rámčeka okolo obrázka. Na prvom obrázku je kotviaca značka rozhrania aplikovaná.
![[Vault picker.png#interface]]
Naopak, druhý obrázok nemá kotviacu značku rozhrania aplikovanú.

![[Vault picker.png]]

**Obrys**

`![[Backlinks.png#outline]]`

Kotviaca značka obrysu pridáva jemný okraj okolo obrázka. Na prvom obrázku je kotviaca značka obrysu aplikovaná.

> [!tip] Sledujte ľavý dolný roh obrázka, aby ste videli rozdiel.

![[Backlinks.png#outline]]

Druhý obrázok nemá kotviacu značku obrysu.

![[Backlinks.png]]

### Optimalizácia

Obrázky spomaľujú načítanie stránky a zaberajú cenný úložný priestor [[Úvod do Obsidian Publish|Publish]]. Optimalizácia obrázkov umožňuje zníženie veľkosti súboru pri zachovaní vizuálnej integrity obrázka.

Obrázky aj ikony by mali byť optimalizované.

> [!info] Nástroje na optimalizáciu obrázkov
> Tu je niekoľko odporúčaných programov na zmenšenie veľkosti vašich obrázkov.
> - **Windows:** [FileOptimizer](https://sourceforge.net/projects/nikkhokkho/)
> - **macOS:** [ImageOptim](https://imageoptim.com/)
> - **Linux/Unix** [Trimage](https://trimage.org)
> 
> Odporúčame mieru optimalizácie 65-75%.

## Rozloženie

### Nefunkčné odkazy

Pred odoslaním Pull Requestu skontrolujte, či v dokumentácii prekladu, na ktorom pracujete, nie sú nefunkčné odkazy, a opravte ich. Nefunkčné odkazy sa môžu objaviť prirodzene v priebehu času, preto overenie ich presnosti pomáha udržiavať kvalitu dokumentácie.

Nefunkčné odkazy môžete skontrolovať pomocou [[Komunitné pluginy|komunitných pluginov]] alebo nástrojov dostupných vo vašom IDE.

### Popisy

Táto dokumentácia sa upravuje na GitHube a hostuje online prostredníctvom [[Úvod do Obsidian Publish|Obsidian Publish]], ktorý zahŕňa [[Náhľady odkazov na sociálnych sieťach#Popis|popisy]] pre sociálne karty a ďalšie [[SEO]] prvky.

Ak stránka, na ktorej pracujete, nemá [[Vlastnosti|vlastnosť]] `description`, pridajte ju prosím. Popis by mal mať 150 znakov alebo menej a poskytovať objektívny súhrn obsahu stránky.

**Dobre**: Naučte sa vytvárať šablóny, ktoré automaticky zachytávajú a organizujú metadáta webových stránok pomocou Web Clipper.
**Mohlo by sa vylepšiť**: Naučte sa, ako vytvárať šablóny, ktoré automaticky zachytávajú a organizujú metadáta z webových stránok pomocou Web Clipper.

### Smery

Pri písaní alebo prepisovaní [[#Inštrukcie|inštrukcií]] o tom, ako vykonať akciu v rámci aplikácie, nezabudnite zahrnúť kroky pre mobilnú aj desktopovú verziu.

Ak nemáte prístup k mobilnému alebo desktopovému zariadeniu, uveďte to prosím pri odoslaní vášho Pull Requestu.

## Preklady

Pri dokončovaní prekladu preložte celý obsah. To zahŕňa a nie je obmedzené na:

- Názvy poznámok
- Názvy priečinkov
- Aliasy
- Názvy príloh
- Alternatívny text odkazov
