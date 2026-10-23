---
permalink: plugins/canvas
mobile: true
---
Canvas je [[Základní pluginy|základní plugin]] pro vizuální tvorbu poznámek. Poskytuje vám nekonečný prostor pro rozmístění poznámek a jejich propojení s dalšími poznámkami, přílohami a webovými stránkami.

Uspořádání poznámek ve 2D prostoru vám pomáhá vidět a pochopit vazby mezi nimi. Propojujte poznámky čarami a seskupujte související poznámky dohromady.

Obsidian ukládá plátna jako soubory `.canvas` v otevřeném formátu [JSON Canvas](https://jsoncanvas.org/).

## Vytvoření nového plátna

Abyste mohli začít používat Canvas, musíte nejprve vytvořit soubor pro vaše plátno. Nové plátno můžete vytvořit následujícími způsoby.

**Paleta příkazů:**

1. Otevřete [[Paleta příkazů|paletu příkazů]].
2. Vyberte **Canvas: Vytvořit nový canvas** pro vytvoření plátna ve stejné složce jako aktivní soubor.

**Průzkumník souborů:**

- V [[Průzkumník souborů|průzkumníku souborů]] klikněte pravým tlačítkem na složku, ve které chcete plátno vytvořit.
- Vyberte **Nový canvas**.

**Postranní panel nástrojů:**

- Ve svislém postranním panelu nástrojů vyberte **Vytvořit nový canvas** ![[lucide-layout-dashboard.svg#icon]] pro vytvoření plátna ve stejné složce jako aktivní soubor.

> [!note] Přípona souboru .canvas
> Obsidian ukládá data plátna jako soubory `.canvas` v otevřeném formátu nazvaném [JSON Canvas](https://jsoncanvas.org/).

## Přidání karet

Do plátna můžete přetahovat soubory z Obsidian nebo z jiných aplikací. Například soubory Markdown, obrázky, zvukové soubory, PDF nebo dokonce nerozpoznané typy souborů.

### Přidání textových karet

Můžete přidávat karty obsahující pouze text, které neodkazují na žádný soubor. Můžete v nich používat Markdown, odkazy a bloky kódu stejným způsobem jako v poznámce.

Pro přidání nové textové karty na plátno:

- Vyberte nebo přetáhněte ikonu prázdného souboru ve spodní části plátna.

Textové karty můžete přidat také dvojitým kliknutím na plátno.

Pro převod textové karty na soubor:

1. Klikněte pravým tlačítkem na textovou kartu a poté vyberte **Převést do souboru...**.
2. Zadejte název poznámky a poté vyberte **Uložit**.

> [!note] Karty obsahující pouze text a zpětné odkazy
> Karty obsahující pouze text se nezobrazují ve [[Zpětné odkazy|zpětných odkazech]]. Aby se zobrazovaly, musíte je převést na soubor.

### Přidání karet z poznámek

Pro přidání poznámky z vašeho trezoru na plátno:

1. Vyberte nebo přetáhněte ikonu dokumentu ve spodní části plátna.
2. Vyberte poznámku, kterou chcete přidat.

Poznámky můžete přidat také z kontextového menu plátna:

1. Klikněte pravým tlačítkem na plátno a poté vyberte **Přidat poznámku z trezoru**.
2. Vyberte poznámku, kterou chcete přidat.

Poznámky můžete také přetáhnout z [[Průzkumník souborů|průzkumníku souborů]] na plátno.

Pro zobrazení pouze části poznámky na kartě klikněte pravým tlačítkem na kartu a vyberte **Zmenšit na nadpis...** nebo **Zmenšit na blok...**. Poté vyberte nadpis nebo blok.

### Přidání karet z médií

Pro přidání médií z vašeho trezoru na plátno:

1. Vyberte nebo přetáhněte ikonu obrázkového souboru ve spodní části plátna.
2. Vyberte mediální soubor, který chcete přidat.

Média můžete přidat také z kontextového menu plátna:

1. Klikněte pravým tlačítkem na plátno a poté vyberte **Přidat média z trezoru**.
2. Vyberte mediální soubor, který chcete přidat.

Mediální soubory můžete také přetáhnout z [[Průzkumník souborů|průzkumníku souborů]] na plátno.

### Přidání karet z webových stránek

Pro vložení webové stránky na plátno:

1. Klikněte pravým tlačítkem na plátno a poté vyberte **Přidat webovou stránku**.
2. Zadejte URL webové stránky a poté vyberte **Uložit**.

Můžete také vybrat URL ve vašem prohlížeči a poté ji přetáhnout na plátno pro vložení do karty.

Pro otevření webové stránky ve vašem prohlížeči stiskněte `Ctrl` (nebo `Cmd` na macOS) a klikněte na štítek karty. Nebo klikněte pravým tlačítkem na kartu a vyberte **Otevřít externí odkaz**.

Kliknutím pravým tlačítkem na kartu webové stránky získáte další možnosti.

- **Kopírovat URL** zkopíruje adresu webové stránky.
- **Změnit URL...** změní adresu, kterou karta zobrazuje.
- **Znovu načíst stránku** znovu načte webovou stránku.

### Přidání karet ze základen

Pro zobrazení [[Úvod do Základen|základny]] na plátně přetáhněte soubor základny z průzkumníku souborů na plátno. Karta zobrazí základnu.

Karta základny zobrazuje výchozí zobrazení základny. Pro zobrazení jiného zobrazení:

1. Klikněte pravým tlačítkem na kartu a poté vyberte **Připnout zobrazení...**.
2. Vyberte zobrazení, které chcete.

Pro návrat k výchozímu zobrazení vyberte znovu **Připnout zobrazení...** a poté vyberte **Zobrazit výchozí zobrazení**.

### Přidání karet ze složek

Přetáhněte složku z [[Průzkumník souborů|průzkumníku souborů]] pro přidání všech souborů v dané složce na plátno.

### Úprava karty

Dvojitým kliknutím na textovou kartu nebo kartu poznámky začnete její úpravu. Kliknutím kamkoli mimo kartu úpravu ukončíte. Úpravu karty můžete ukončit také stisknutím klávesy `Escape`.

Kartu můžete také upravit kliknutím pravým tlačítkem a výběrem **Upravit**. Nebo kartu vyberte a poté vyberte **Upravit** ![[lucide-square-pen.svg#icon]] v ovládacích prvcích výběru.

### Smazání karty

Vybrané karty odstraníte kliknutím pravým tlačítkem na kteroukoli z nich a výběrem **Odstranit**. Nebo stiskněte `Backspace` (nebo `Delete` na macOS).

Můžete také vybrat **Odstranit** ![[lucide-trash-2.svg#icon]] v ovládacích prvcích výběru nad vaším výběrem.

### Záměna karet

Kartu poznámky nebo média můžete zaměnit za jinou kartu stejného typu.

Pro záměnu karty poznámky:

1. Klikněte pravým tlačítkem na kartu, kterou chcete nahradit.
2. Vyberte **Zaměnit soubor**.
3. Vyberte poznámku, kterou chcete nahradit.

## Výběr karet

Vybírejte jednotlivé karty nebo přetáhněte výběr kolem více karet.

Karty můžete přidávat do stávajícího výběru nebo z něj odebírat stisknutím `Shift` a kliknutím na ně.

Stisknutím `Ctrl+a` (nebo `Cmd+a` na macOS) vyberete všechny karty na plátně.

Pro scrollování obsahu karty ji musíte nejprve vybrat.

### Uspořádání karet

Přetáhněte vybranou kartu pro její přesunutí.

Stiskněte `Alt` (nebo `Option` na macOS) a přetáhněte pro duplikování výběru.

Při přetahování můžete stisknout `Shift` pro pohyb pouze jedním směrem.

Stiskněte `Space` při přesouvání výběru pro vypnutí přichytávání.

Výběrem karty ji přesunete do popředí.

### Změna velikosti karty

Pro změnu velikosti karty přetáhněte kteroukoli její hranu.

Stisknutím `Space` při změně velikosti vypnete přichytávání.

Pro zachování poměru stran při změně velikosti stiskněte `Shift`.

### Zarovnání a uspořádání karet

Pro zarovnání více karet vyberte dvě nebo více karet. V ovládacích prvcích výběru vyberte **Zarovnat** a poté zvolte možnost.

- **Zarovnat vlevo**, **Zarovnat uprostřed** a **Zarovnat vpravo** zarovnají karty na svislou čáru.
- **Zarovnat nahoru**, **Zarovnat uprostřed** a **Zarovnat dolů** zarovnají karty na vodorovnou čáru.
- **Uspořádat do řady**, **Uspořádat do sloupce** a **Uspořádat do mřížky** přesunou karty do daného rozvržení.
- **Rozdělit horizontální mezery** a **Rozdělit vertikální mezery** rozmístí karty rovnoměrně.
- **Vyrovnat vodorovně** a **Vyrovnat vertikálně** změní velikost každé karty tak, aby odpovídala plné šířce nebo výšce výběru.

## Propojení karet

Kreslením čar mezi kartami zobrazujte vztahy. Přidávejte barvy a štítky pro popis, jak spolu souvisí.

### Propojení dvou karet

Pro propojení dvou karet směrovou čarou:

1. Najeďte kurzorem na jednu z hran karty, dokud se neobjeví vyplněný kruh.
2. Přetáhněte kruh na hranu jiné karty pro jejich propojení.

> [!tip]- Vytvoření karty z nového spojení
> Pokud přetáhnete čáru bez připojení k jiné kartě, můžete na jejím druhém konci vytvořit novou kartu.

### Odpojení dvou karet

Pro odstranění propojení mezi dvěma kartami:

1. Najeďte kurzorem na spojovací čáru, dokud se na čáře neobjeví dva malé kruhy.
2. Přetáhněte jeden z kruhů pryč od karty bez připojení k jiné kartě.

Dvě karty můžete také odpojit kliknutím pravým tlačítkem na čáru mezi nimi a výběrem **Odstranit**. Nebo výběrem čáry a stisknutím `Backspace` (nebo `Delete` na macOS).

### Připojení karty k jiné kartě

Pro přesunutí jednoho z konců spojovací čáry:

1. Najeďte kurzorem na spojovací čáru, dokud se na čáře neobjeví dva malé kruhy.
2. Přetáhněte kruh k jiné kartě pro její přepojení.

### Navigace po spojení

Pokud jsou dvě propojené karty daleko od sebe, můžete přeskočit na kartu na druhém konci spojení. Klikněte pravým tlačítkem na čáru blízko jednoho konce a poté vyberte **Sledovat spojení**. Plátno se přesune na kartu na opačném konci.

### Přidání štítku ke spojení

K čáře můžete přidat štítek popisující vztah mezi dvěma kartami.

Pro označení spojení:

1. Dvojitě klikněte na čáru.
2. Zadejte štítek a poté stiskněte `Escape` nebo klikněte kamkoli na plátno.

Spojení můžete označit také jeho výběrem a následným výběrem **Upravit štítek** z ovládacích prvků výběru.

Pro úpravu štítku spojení dvojitě klikněte na čáru nebo klikněte pravým tlačítkem na čáru a poté vyberte **Upravit štítek**.

Pro odstranění štítku vyberte spojení a poté vyberte **Odstranit štítek** v ovládacích prvcích výběru.

### Změna směru spojení

Ve výchozím nastavení má spojení šipku na konci, která ukazuje na druhou kartu. Pro změnu:

1. Vyberte spojení.
2. V ovládacích prvcích výběru vyberte **Směr čáry**.
3. Zvolte **Nesměrové**, **Jednosměrné** nebo **Obousměrné**.

### Změna barvy karty nebo spojení

1. Vyberte karty nebo spojení, které chcete obarvit.
2. V ovládacích prvcích výběru vyberte **Nastavit barvu** ![[lucide-palette.svg#icon]].
3. Vyberte barvu.

## Seskupení karet

### Seskupení vybraných karet

Pro vytvoření prázdné skupiny:

- Klikněte pravým tlačítkem na plátno a poté vyberte **Vytvořit skupinu**.

Pro seskupení souvisejících karet:

1. Vyberte karty.
2. Klikněte pravým tlačítkem na kteroukoli z vybraných karet a poté vyberte **Vytvořit skupinu**.

**Přejmenování skupiny:** Dvojitým kliknutím na název skupiny ji upravíte a poté stiskněte `Enter` pro uložení.

### Přidání pozadí ke skupině

Za kartami ve skupině můžete zobrazit obrázek.

1. Vyberte skupinu.
2. V ovládacích prvcích výběru vyberte **Nastavit pozadí**.
3. Vyberte obrázek z vašeho trezoru.

Pro změnu pozadí vyberte skupinu a poté vyberte **Upravit pozadí**.

- **Vyměnit pozadí** vybere jiný obrázek.
- **Odstranit pozadí** odstraní obrázek.
- **Krytí** způsobí, že obrázek vyplní skupinu.
- **Zachovat poměr stran** zachová proporce obrázku.
- **Opakovat** obrázek opakuje přes celou skupinu.

## Navigace po plátně

Používejte posouvání a přibližování pro pohyb po plátně.

### Posouvání plátna

Pro pohyb plátna svisle a vodorovně, také známý jako _posouvání_, můžete použít kterýkoli z následujících přístupů:

- Stiskněte `Space` a přetáhněte plátno.
- Přetáhněte plátno pomocí prostředního tlačítka myši.
- Scrollujte myší pro svislé posouvání a stiskněte `Shift` při scrollování pro vodorovné posouvání.

### Přiblížení plátna

Pro přiblížení plátna stiskněte `Space` nebo `Ctrl` (nebo `Cmd` na macOS) a scrollujte kolečkem myši. Nebo vyberte **Přiblížit** ![[lucide-plus.svg#icon]] a **Oddálit** ![[lucide-minus.svg#icon]] z ovládacích prvků přiblížení v pravém horním rohu.

#### Přiblížit, aby sedělo

Pro přiblížení plátna tak, aby byla viditelná každá položka, vyberte **Přiblížit, aby sedělo** ![[lucide-maximize.svg#icon]]. Nebo použijte klávesovou zkratku `Shift+1`.

#### Přiblížit na výběr

Pro přiblížení plátna tak, aby byly viditelné všechny vybrané položky, klikněte pravým tlačítkem na vybranou kartu a poté vyberte **Přiblížit na blok**. Nebo stiskněte `Shift+2`.

#### Obnovit přiblížení

Pro navrácení úrovně přiblížení na výchozí hodnotu vyberte **Obnovit přiblížení** v ovládacích prvcích přiblížení v pravém horním rohu.


### Přejít do skupiny

Pro přímý přesun na skupinu na velkém plátně otevřete paletu příkazů a vyberte **Canvas: Přejít do skupiny**. Zobrazí se seznam skupin na vašem plátně. Vyberte skupinu, na kterou chcete přejít, a plátno se vycentruje na ni.

## Nastavení canvas

Vyberte **Nastavení canvas** ![[lucide-settings.svg#icon]] nad ovládacími prvky plátna pro změnu chování plátna.

- **Přichytit k mřížce** přichytí karty k mřížce pozadí při přesouvání a změně velikosti.
- **Přichytit k objektům** přichytí karty k blízkým kartám při přesouvání a změně velikosti.
- **Pouze pro čtení** zabrání změnám na plátně.

## Export plátna jako obrázku

Plátno můžete exportovat jako obrázek PNG na stolním počítači. Export obrázku není k dispozici v mobilní aplikaci Obsidian.

1. Otevřete plátno, které chcete exportovat.
2. Otevřete paletu příkazů a vyberte **Canvas: Exportovat jako obrázek**.
3. Zvolte nastavení.
    - **Viditelný prostor** nastavuje, co se má exportovat. Vyberte **Celý canvas** pro celé plátno, nebo **Pouze viditelný prostor** pro část, kterou právě vidíte.
    - **Přiblížení** nastavuje kvalitu obrázku. Vyšší přiblížení vytvoří větší a ostřejší obrázek. Dialog zobrazuje odhadovanou velikost obrázku.
    - **Zobrazit logo** přidá logo Obsidian do levého dolního rohu. Ve výchozím nastavení je zapnuto.
    - **Režim soukromí** skryje veškerý text na plátně. Ve výchozím nastavení je vypnuto.
4. Vyberte **Uložit**.
5. Zvolte, kam soubor uložit. Název souboru je ve výchozím nastavení shodný s názvem plátna s příponou `.png`.

Nelze exportovat prázdný canvas.

## Zpět a znovu

Pro vrácení poslední změny vyberte **Zpět** v ovládacích prvcích plátna na pravé straně plátna. Nebo stiskněte `Ctrl+Z` (Windows a Linux) nebo `Command+Z` (macOS).

Pro zopakování změny vyberte **Znovu**. Nebo stiskněte `Ctrl+Y` nebo `Ctrl+Shift+Z` (Windows a Linux), nebo `Command+Y` nebo `Command+Shift+Z` (macOS).

## Nápověda pro canvas

Na stolním počítači vyberte **Nápověda pro canvas** ![[lucide-help-circle.svg#icon]] pod ovládacími prvky plátna pro zobrazení seznamu zkratek pro posouvání, přibližování, výběr a přesouvání karet.

## Vložení plátna

Plátno můžete vložit do poznámky pomocí standardní syntaxe pro embedování. Více informací najdete v části [[Vkládání souborů#Embed a canvas in a note|Vložení plátna do poznámky]].

## Použití Canvas na mobilním zařízení

Když otevřete plátno na telefonu nebo tabletu, Obsidian zobrazí tři nápovědy.

- **Tažení pro posun**
- **Stažením přiblížíte**
- **Dotykem a podržením přidáte / přesunete / vyberete**

### Otevření menu plátna

Dotkněte se a podržte prázdnou oblast plátna. Menu obsahuje tyto položky.

- **Přidat kartu** přidá textovou kartu.
- **Přidat poznámku z trezoru** přidá poznámku z vašeho trezoru.
- **Přidat média z trezoru** přidá média z vašeho trezoru.
- **Přidat webovou stránku** vloží webovou stránku.
- **Vytvořit skupinu** vytvoří prázdnou skupinu.
- **Přichytit k mřížce**, **Přichytit k objektům** a **Pouze pro čtení** jsou stejné možnosti jako v **Nastavení canvas**.

### Přidání karet

Karty můžete přidat z menu plátna. Můžete také vybrat ikonu ve spodní části plátna.

- Ikona prázdného souboru přidá textovou kartu.
- Ikona dokumentu přidá poznámku z vašeho trezoru.
- Ikona obrázku přidá média z vašeho trezoru.

### Práce s vybranou kartou

Klepněte na kartu pro její výběr. Nad kartou se zobrazí nástrojový panel.

- **Odstranit** ![[lucide-trash-2.svg#icon]] smaže kartu.
- **Nastavit barvu** ![[lucide-palette.svg#icon]] změní barvu karty.
- **Přiblížit na blok** přiblíží plátno na kartu.
- **Upravit** ![[lucide-square-pen.svg#icon]] upraví kartu.

### Přesunutí karty

1. Klepněte na kartu pro její výběr.
2. Dotkněte se a podržte vybranou kartu a poté ji přetáhněte na novou pozici.

### Změna velikosti karty

1. Klepněte na kartu pro její výběr.
2. Přetáhněte strany karty pro zvětšení nebo zmenšení.

### Otevření menu karty

Dotkněte se a podržte kartu. Menu obsahuje tyto položky.

- **Přiblížit na blok** přiblíží plátno na kartu.
- **Upravit** upraví kartu.
- **Převést do souboru...** převede textovou kartu na poznámku.
- **Duplikovat** vytvoří kopii karty.
- **Odstranit** smaže kartu.

### Úprava karty

Pro úpravu textové karty nebo karty poznámky použijte některý z následujících způsobů.

- Klepněte na kartu pro její výběr a poté na ni dvakrát klepněte. Otevře se klávesnice.
- Klepněte na kartu pro její výběr a poté vyberte **Upravit** ![[lucide-square-pen.svg#icon]] v nástrojovém panelu nad kartou.

### Označení spojení

1. Klepněte na čáru pro její výběr.
2. V nástrojovém panelu vyberte **Upravit štítek** ![[lucide-square-pen.svg#icon]]. Otevře se klávesnice.
3. Zadejte štítek.

Pro odstranění štítku klepněte na čáru a poté vyberte **Odstranit štítek** v nástrojovém panelu.

### Změna směru spojení

1. Klepněte na čáru pro její výběr.
2. V nástrojovém panelu vyberte **Směr čáry**.
3. Zvolte **Nesměrové**, **Jednosměrné** nebo **Obousměrné**.

### Otevření menu čáry

Dotkněte se a podržte čáru, která spojuje dvě karty. Menu obsahuje tyto položky.

- **Upravit štítek** přidá nebo změní štítek čáry.
- **Sledovat spojení** přesune plátno na kartu na opačném konci čáry.
- **Odstranit** smaže spojení.

### Propojení karet

1. Klepněte na kartu pro její výběr.
2. Přetáhněte jeden z kruhů na jejích hranách k jiné kartě.

Pokud přetáhnete čáru a pustíte ji v prázdné oblasti, otevře se menu s možnostmi **Přidat kartu** a **Přidat poznámku z trezoru**. Vyberte jednu pro přidání karty na konec čáry.

### Odpojení karet

Pro odstranění spojení použijte některý z následujících způsobů.

- Klepněte na čáru a poté vyberte **Odstranit** ![[lucide-trash-2.svg#icon]].
- Přetáhněte konec čáry se šipkou zpět ke kartě, ze které vycházel. Čára zmizí.

### Seskupení karet

Pro vytvoření skupiny:

1. Dotkněte se a podržte prázdnou oblast plátna.
2. Vyberte **Vytvořit skupinu**.
3. Přetáhněte hrany skupiny pro změnu její velikosti.

Pro přidání karet do skupiny je přetáhněte do oblasti skupiny. Když přesunete skupinu, karty uvnitř ní se přesunou také.

Pro přejmenování skupiny dvakrát klepněte na její název. Otevře se klávesnice. Zadejte nový název.

### Ovládací prvky plátna

Ovládací prvky na pravé straně plátna mění zobrazení a vaše nastavení.

- **Přiblížit** a **Oddálit** mění úroveň přiblížení.
- **Obnovit přiblížení** vrátí plátno na výchozí úroveň přiblížení.
- **Přiblížit, aby sedělo** zobrazí každou kartu na plátně.
- **Zpět** a **Znovu** vrátí nebo zopakuje vaši poslední změnu.
- **Nastavení canvas** obsahuje možnosti **Přichytit k mřížce**, **Přichytit k objektům** a **Pouze pro čtení**.

## Pokročilé tipy

Připravili jsme několik krátkých videí demonstrujících některé pokročilé případy použití Canvas.

Můžete si [prohlédnout všech 72 tipů zde](https://obsidian.md/canvas#protips). Videa s tipy jsou viditelná pouze na stolním počítači.
