---
permalink: plugins/canvas
---
Canvas je [[Základní pluginy|základní plugin]] pro vizuální tvorbu poznámek. Poskytuje vám nekonečný prostor pro rozmístění poznámek a jejich propojení s dalšími poznámkami, přílohami a webovými stránkami.

Vizuální tvorba poznámek vám pomáhá pochopit vaše poznámky tím, že je organizujete ve 2D prostoru. Propojujte poznámky čarami a seskupujte související poznámky dohromady, abyste lépe porozuměli vztahům mezi nimi.

Data Canvas, která vytvoříte v Obsidian, se ukládají jako soubory `.canvas` v otevřeném formátu [JSON Canvas](https://jsoncanvas.org/).

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

Můžete přidávat karty obsahující pouze text, které neodkazují na žádný soubor. Můžete v nich používat Markdown, odkazy a bloky kódu stejně jako v poznámce.

Pro přidání nové textové karty na plátno:

- Vyberte nebo přetáhněte ikonu prázdného souboru ve spodní části plátna.

Textové karty můžete přidat také dvojitým kliknutím na plátno.

Pro převod textové karty na soubor:

1. Klikněte pravým tlačítkem na textovou kartu a poté vyberte **Převést do souboru...**.
2. Zadejte název poznámky a poté vyberte **Uložit**.

> [!note] Poznámka
> Karty obsahující pouze text se nezobrazují ve [[Zpětné odkazy|zpětných odkazech]]. Aby se zobrazovaly, musíte je převést na soubor.

### Přidání karet z poznámek

Pro přidání poznámky z vašeho trezoru na plátno:

1. Vyberte nebo přetáhněte ikonu dokumentu ve spodní části plátna.
2. Vyberte poznámku, kterou chcete přidat.

Poznámky můžete přidat také z kontextového menu plátna:

1. Klikněte pravým tlačítkem na plátno a poté vyberte **Přidat poznámku z trezoru**.
2. Vyberte poznámku, kterou chcete přidat.

Nebo je můžete přidat na plátno přetažením souboru z [[Průzkumník souborů|průzkumníku souborů]].

### Přidání karet z médií

Pro přidání médií z vašeho trezoru na plátno:

1. Vyberte nebo přetáhněte ikonu obrázkového souboru ve spodní části plátna.
2. Vyberte mediální soubor, který chcete přidat.

Média můžete přidat také z kontextového menu plátna:

1. Klikněte pravým tlačítkem na plátno a poté vyberte **Přidat média z trezoru**.
2. Vyberte mediální soubor, který chcete přidat.

Nebo je můžete přidat na plátno přetažením souboru z [[Průzkumník souborů|průzkumníku souborů]].

### Přidání karet z webových stránek

Pro vložení webové stránky na plátno:

1. Klikněte pravým tlačítkem na plátno a poté vyberte **Přidat webovou stránku**.
2. Zadejte URL webové stránky a poté vyberte **Uložit**.

Můžete také vybrat URL ve vašem prohlížeči a poté ji přetáhnout na plátno pro vložení do karty.

Pro otevření webové stránky ve vašem prohlížeči stiskněte `Ctrl` (nebo `Cmd` na macOS) a klikněte na štítek karty. Nebo klikněte pravým tlačítkem na kartu a vyberte **Otevřít v prohlížeči**.

### Přidání karet ze složek

Přetáhněte složku z průzkumníku souborů pro přidání všech souborů v dané složce na plátno.

### Úprava karty

Dvojitým kliknutím na textovou kartu nebo kartu poznámky začnete její úpravu. Kliknutím mimo kartu úpravu ukončíte. Úpravu karty můžete ukončit také stisknutím klávesy `Escape`.

Kartu můžete také upravit kliknutím pravým tlačítkem a výběrem **Upravit**.

### Smazání karty

Vybrané karty odstraníte kliknutím pravým tlačítkem na kteroukoli z nich a výběrem **Smazat**. Nebo stiskněte `Backspace` (nebo `Delete` na macOS).

Můžete také vybrat **Odstranit** ![[lucide-trash-2.svg#icon]] v ovládacích prvcích výběru nad vaším výběrem.

### Záměna karet

Kartu poznámky nebo média můžete zaměnit za jinou kartu stejného typu.

Pro záměnu karty poznámky:

1. Klikněte pravým tlačítkem na kartu, kterou chcete nahradit.
2. Vyberte **Zaměnit soubor**.
3. Vyberte poznámku, kterou chcete nahradit.

## Výběr karet

Karty na plátně vybíráte kliknutím na ně. Více karet můžete vybrat přetažením výběru kolem nich.

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

## Propojení karet

Kreslením čar mezi kartami vytváříte vztahy mezi nimi. Pomocí barev a štítků popisujte, jak spolu souvisí.

### Propojení dvou karet

Pro propojení dvou karet směrovou čarou:

1. Najeďte kurzorem na jednu z hran karty, dokud se neobjeví vyplněný kruh.
2. Přetáhněte kruh na hranu jiné karty pro jejich propojení.

> [!tip] Tip
> Pokud přetáhnete čáru bez připojení k jiné kartě, můžete poté přidat kartu, ke které ji chcete připojit.

### Odpojení dvou karet

Pro odstranění propojení mezi dvěma kartami:

1. Najeďte kurzorem na spojovací čáru, dokud se na čáře neobjeví dva malé kruhy.
2. Přetáhněte jeden z kruhů pryč od karty bez připojení k jiné kartě.

Dvě karty můžete také odpojit kliknutím pravým tlačítkem na čáru mezi nimi a výběrem **Odstranit**. Nebo výběrem čáry a stisknutím `Backspace` (nebo `Delete` na macOS).

### Připojení karty k jiné kartě

Pro přesunutí jednoho z konců spojovací čáry:

1. Najeďte kurzorem na spojovací čáru, dokud se na čáře neobjeví dva malé kruhy.
2. Přetáhněte kruh na konci, který chcete přepojit, k jiné kartě.

### Navigace po spojení

Pokud jsou dvě propojené karty daleko od sebe, můžete přejít na zdroj nebo cíl spojení kliknutím pravým tlačítkem na čáru a výběrem **Přejít na cíl** nebo **Přejít na zdroj**.

### Přidání štítku ke spojení

K čáře můžete přidat štítek popisující vztah mezi dvěma kartami.

Pro označení spojení:

1. Dvojitě klikněte na čáru.
2. Zadejte štítek a poté stiskněte `Escape` nebo klikněte kamkoli na plátno.

Spojení můžete označit také jeho výběrem a následným výběrem **Upravit štítek** z ovládacích prvků výběru.

Pro úpravu štítku spojení dvojitě klikněte na čáru nebo klikněte pravým tlačítkem na čáru a poté vyberte **Upravit štítek**.

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

## Navigace po plátně

Jakmile začnete na plátno přidávat více karet, budete chtít vědět, jak se po plátně pohybovat a prohlížet jeho jednotlivé části. Naučte se posouvat a přibližovat, abyste se po plátně pohybovali snadno.

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

Pro přiblížení plátna tak, aby byly viditelné všechny vybrané položky, klikněte pravým tlačítkem na vybranou kartu a poté vyberte **Přiblížit na blok**. Nebo použijte klávesovou zkratku `Shift+2`.

#### Obnovit přiblížení

Pro navrácení úrovně přiblížení na výchozí hodnotu vyberte **Obnovit přiblížení** v ovládacích prvcích přiblížení v pravém horním rohu.

## Pokročilé tipy

Připravili jsme několik krátkých videí demonstrujících některé pokročilé případy použití Canvas.

Můžete si [prohlédnout všech 72 tipů zde](https://obsidian.md/canvas#protips). Upozorňujeme, že videa s tipy jsou viditelná pouze na stolním počítači.
