---
permalink: tabs
publish: true
mobile: true
description: 'Naučte se, jak otevírat, organizovat a spravovat karty v Obsidianu, včetně připínání, skládání a propojených zobrazení.'
---
Karty v Obsidian fungují podobně jako karty v jiných aplikacích, například ve webových prohlížečích.

V Obsidian můžete otevřít tolik karet, kolik chcete. Karty můžete také uspořádat a vytvořit tak vlastní rozložení, která zůstanou zachována až do příštího otevření aplikace.

> [!note] Mobilní karty
> Na mobilním zařízení můžete spravovat otevřené karty pomocí počítadla karet v [[Mobilní aplikace#Navigační lišta|navigační liště]].

## Otevření nové karty

V horní části okna aplikace, vedle poslední karty vpravo, vyberte **Nová karta** ![[lucide-plus.svg#icon]]. Nebo použijte klávesovou zkratku:

- **Windows a Linux:** `Ctrl+t`
- **macOS:** `Cmd+t`

## Otevření odkazu

Vyberte odkaz v Obsidian, aby se otevřel v aktivní kartě.

Pro otevření odkazu v nové kartě stiskněte `Ctrl` (nebo `Cmd` na macOS) a vyberte odkaz.

Zde jsou všechny modifikační klávesy, které můžete použít k otevření odkazů různými způsoby:

|Akce|MacOS|Windows/Linux|
|---|---|---|
|**Navigace**|_Žádný_|_Žádný_|
|**Nová karta**|`⌘` (+ `Shift` v režimu zdroje)|`Ctrl` (+ `Shift` v režimu zdroje)|
|**Nová skupina karet**|`⌘` `⌥`| `Ctrl` `Alt`|
|**Nové okno**|`⌘` `⌥` `Shift`|`Ctrl` `Alt` `Shift`|

## Uspořádání karet a oken

Každá karta patří do _skupiny karet_. Karty můžete přetahovat a přeuspořádávat v rámci skupiny karet, přesouvat je do jiné skupiny karet nebo vytvořit novou skupinu karet. Na desktopu můžete karty přetáhnout mimo okno a otevřít je v samostatném [[Vyskakovací okna|vyskakovacím okně]].

Karty v postranních panelech zobrazují pouze ikonu. Najetím na ikonu se zobrazí popisek s názvem karty.

### Uspořádání karet

Chcete-li změnit pořadí karet, přetáhněte kartu podél karet ve skupině karet.

Při přetahování karty se zvýrazní _oblasti pro přetažení_ — místa, kam můžete kartu přesunout. Oblast pro přetažení určuje, kam bude karta vložena. Některé karty mohou být pouze v jednom z postranních panelů.

### Rozdělení skupiny karet

Klikněte pravým tlačítkem na kartu a vyberte **Rozdělit doprava** nebo **Rozdělit dolů** pro vytvoření nové skupiny karet s touto kartou.

Skupinu karet můžete také rozdělit přetažením karty na spodní okraj jiné karty.

### Změna velikosti skupiny karet

Chcete-li změnit velikost skupiny karet, najeďte kurzorem na okraj skupiny karet. Okraj se zvýrazní, když jej lze přetáhnout ke změně velikosti.

Podobně můžete měnit velikost postranních panelů, abyste vytvořili více prostoru pro skupiny karet uprostřed.

### Přesunutí karty do nového okna

**Přetažením:**

- Vyberte kartu a přetáhněte ji mimo okno aplikace, aby se otevřela v novém okně.

**Paleta příkazů:**

- Otevřete paletu příkazů a vyberte **Move current pane to new window**.

### Přesunutí karty do jiného okna

Chcete-li přesunout kartu do jiného existujícího okna, přetáhněte kartu do okna, kam ji chcete přesunout.

### Připnutí karty

Chcete-li připnout kartu v hlavním editoru, klikněte pravým tlačítkem na kartu a vyberte **Připnout**. Odkazy v připnuté kartě se vždy otevírají v samostatné kartě.

Chcete-li odepnout připnutou kartu v hlavním editoru, klikněte pravým tlačítkem na kartu a vyberte **Odepnout**.

Informace o připnutí nebo odepnutí karty v postranním panelu najdete v [[Postranní panel#Připnutí karet|připnutí karet v postranním panelu]].

## Přepnutí na jinou kartu

Vyberte kartu, na kterou chcete přepnout. Nebo použijte klávesovou zkratku:

| Přepnout na                 | MacOS            | Windows/Linux        |
|-----------------------------|------------------|----------------------|
| **Následující karta**       | `⌃`+`⇥`         | `Ctrl`+`Tab`         |
| **Předchozí karta**         | `⌃`+`⇧`+`⇥`    | `Ctrl`+`Shift`+`Tab` |
| **První karta vlevo**       | `⌘`+`1`          | `Ctrl`+`1`           |
| **2. až 8. karta**          | `⌘`+`2`..`8`     | `Ctrl`+`2`..`8`      |
| **Poslední karta vpravo**   | `⌘`+`9`          | `Ctrl`+`9`           |
| **Naposledy zavřená karta** | `⌘`+`⇧`+`t`     | `Ctrl`+`Shift`+`t`   |

## Seskupení karet

Karty můžete seskupit tak, aby se posunuly přes ostatní karty ve stejné skupině karet.

Chcete-li seskupit poznámky, vyberte šipku dolů v pravém horním rohu skupiny karet a poté vyberte **Seskupit karty**.

![tab-stacks](https://user-images.githubusercontent.com/693981/188205363-0f24b2a5-3706-4a8c-b38b-7a66baa68ce6.gif)

Seskupení karet je inspirováno [posuvnými poznámkami Andyho Matuschaka](https://notes.andymatuschak.org/).

## Propojená zobrazení

_Propojená zobrazení_ jsou karty, které odkazují na jinou kartu. Když se změní obsah odkazované karty, změní se i propojené zobrazení.

Pro karty s poznámkami můžete jako propojená zobrazení použít následující pluginy:

- [[Graf]] (lokální)
- [[Zpětné odkazy]]
- [[Přehled]]

Chcete-li otevřít propojené zobrazení pro kartu s poznámkou:

1. Vyberte **Více možností** ![[lucide-more-horizontal.svg#icon]] v pravém horním rohu poznámky.
2. V části **Otevřít propojené zobrazení** vyberte propojené zobrazení, které chcete otevřít.

## Uložení rozložení

Rozložení oken můžete ukládat a obnovovat pomocí pluginu [[Pracovní prostory]].
