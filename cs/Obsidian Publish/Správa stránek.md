---
permalink: publish/sites
---
Tato stránka vysvětluje, jak spravovat stránky [[Úvod do Obsidian Publish|Obsidian Publish]].

Stránka je kolekce poznámek hostovaná na Obsidian Publish a dostupná online, buď prostřednictvím adresy Obsidian Publish, nebo [[Vlastní domény|vlastní domény]].

## Vytvoření nové stránky

> [!note] Počet stránek, které můžete mít současně, je určen vaším předplatným Obsidian Publish. Před vytvořením nové stránky se ujistěte, že to vaše předplatné umožňuje.

1. Na postranním panelu nástrojů nalevo od okna aplikace klikněte na **Publikovat změny** ![[lucide-send.svg#icon]].
2. Pokud již máte existující stránku, klikněte na **Změnit stránku** ![[lucide-repeat.svg#icon]].
3. Do pole **ID stránky** zadejte cestu, kterou chcete pro svou stránku. Například stránka s ID `my-amazing-site` je dostupná na publish.obsidian.md/my-amazing-site.
4. Klikněte na **Vytvořit**.

## Odstranění existující stránky

> [!note] Poznámky zůstanou ve vašem trezoru i po odstranění stránky.

1. Na postranním panelu nástrojů nalevo od okna aplikace klikněte na **Publikovat změny** ![[lucide-send.svg#icon]].
2. Klikněte na **Změnit stránku** ![[lucide-repeat.svg#icon]].
3. Klikněte na **Odstranit stránku** ![[lucide-x.svg#icon]] napravo od stránky, kterou chcete odstranit.
4. Klikněte na **Smazat** pro potvrzení.

## Přepínání mezi stránkami

1. Na postranním panelu nástrojů nalevo od okna aplikace klikněte na **Publikovat změny** ![[lucide-send.svg#icon]].
2. Klikněte na **Změnit stránku** ![[lucide-repeat.svg#icon]].
3. Klikněte na **Vybrat** napravo od stránky, na kterou chcete přepnout.

## Změna ID stránky

1. Na postranním panelu nástrojů nalevo od okna aplikace klikněte na **Publikovat změny** ![[lucide-send.svg#icon]].
2. Klikněte na **Změnit stránku** ![[lucide-repeat.svg#icon]].
3. Klikněte na **Změnit ID stránky** ![[lucide-edit-3.svg#icon]] napravo od stránky, kterou chcete upravit.
4. Do pole **ID stránky** zadejte nové ID pro vaši stránku.
5. Klikněte na **Změnit**.

## Zobrazení nastavení stránky

1. Na postranním panelu nástrojů nalevo od okna aplikace klikněte na **Publikovat změny** ![[lucide-send.svg#icon]].
2. V dialogu **Publikovat změny** klikněte na **Změna nastavení stránky** ![[lucide-cog.svg#icon]].

## Nastavení stránky

### Obecné

| Možnost                                | Typ      | Popis                                                                                                                                 |
| -------------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| Jméno stránky                          | Vstup    | Veřejný název a titulek vaší stránky Obsidian Publish.                                                                                |
| Soubor domovské stránky                | Vstup    | Umístění souboru Markdown, který chcete použít jako úvodní stránku.                                                                   |
| Logo                                   | Vstup    | Obrázek, který chcete použít jako banner stránky. Obrázek musí [[Publikování obsahu#Publikovat poznámky\|být publikován]].            |
| Spolupráce na webu                     | Tlačítko | Určete další uživatele, kterým chcete umožnit upravovat vaše publikované poznámky. Uživatelé musí mít účet Obsidian.                 |
| Vlastní doména                         | Tlačítko | [[Vlastní domény]]                                                                                                                    |
| Zakázat indexování vyhledávači         | Přepínač | Zabraňte vyhledávačům procházet vaši stránku přidáním souboru `robots.txt`.                                                           |

### Vzhled

| Možnost                  | Typ          | Popis                                                                                                     |
|--------------------------|--------------|-----------------------------------------------------------------------------------------------------------|
| Motiv                    | Rozbalovací  | Zvolte, jak se motiv zobrazí na vaší stránce; **Světlý**, **Tmavý** nebo **Přizpůsobit systému**.         |
| Přepínač světlý/tmavý   | Přepínač     | Umožněte uživatelům přepínat režim **Světlý**/**Tmavý** pomocí přepínacího tlačítka na vaší stránce.     |

## Zážitek ze čtení

| Možnost                     | Typ      | Popis                                                                                                      |
|-----------------------------|----------|------------------------------------------------------------------------------------------------------------|
| Zobrazovat náhled při najetí kurzorem | Přepínač | Zapněte nebo vypněte náhled stránky při najetí kurzorem na aktivní interní odkaz.                          |
| Skrýt název stránky        | Přepínač | Zapněte nebo vypněte zobrazení vloženého názvu publikované poznámky.                                       |
| Čitelná délka řádku        | Přepínač | Zapněte nebo vypněte čitelnou délku řádku na vaší stránce.                                                 |
| Striktní zalomení řádku    | Přepínač | Zapněte nebo vypněte zobrazení jednoduchých zalomení řádku na vaší stránce.                                |
| Použít posuvná okna        | Přepínač | Zapněte nebo vypněte [[Karty#Skupiny karet\|skládané karty]] na vaší stránce.                              |

### Komponenty

| Možnost                    | Typ      | Popis                                                                                                                                          |
|----------------------------|----------|------------------------------------------------------------------------------------------------------------------------------------------------|
| Zobrazovat navigaci        | Přepínač | Zapněte nebo vypněte zobrazení [[Průzkumník souborů|průzkumníka souborů]] na vaší publikované stránce.                                         |
| Přizpůsobit navigaci       | Tlačítko | [[Přizpůsobení stránky#Přizpůsobit navigaci\|Přizpůsobte]] pořadí, v jakém jsou vaše soubory uvedeny, pokud je zapnuta **Zobrazovat navigaci**. |
| Zobrazovat vyhledávací pole | Přepínač | Zapněte nebo vypněte vyhledávací pole na vaší stránce.                                                                                         |
| Zobrazovat graf            | Přepínač | Zapněte nebo vypněte zobrazení grafu v pravém postranním panelu vaší stránky.                                                                  |
| Zobrazovat tabulku obsahu  | Přepínač | Zapněte nebo vypněte zobrazení [[Přehled|tabulky obsahu]] na vaší stránce.                                                                     |
| Zobrazovat zpáteční odkazy | Přepínač | Zapněte nebo vypněte [[Zpětné odkazy]] na vaší stránce.                                                                                        |

### Další nastavení webu

| Možnost                               | Typ      | Popis                                                                                                                   |
| ------------------------------------- | -------- | ----------------------------------------------------------------------------------------------------------------------- |
| Hesla                                 | Tlačítko | [[Obsidian Publish/Zabezpečení a soukromí#Add a site password\|Nastavte heslo]] pro omezení přístupu k celé vaší stránce. |
| Sledovací kód Google Analytics        | Vstup    | **Pouze s vlastní doménou**. Vložte sem sledovací kód Google Analytics pro vaši stránku.                                |
