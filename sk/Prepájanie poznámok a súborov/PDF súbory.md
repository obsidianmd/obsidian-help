---
permalink: pdf
publish: true
mobile: true
description: 'Naučte sa, ako zobrazovať, vyhľadávať a odkazovať na súbory PDF v Obsidiane a ako exportovať poznámku ako PDF.'
---
Obsidian otvára PDF súbory vo vstavanom prehliadači. PDF môžete tiež vložiť do poznámky, vytvoriť odkaz na pasáž v ňom a exportovať akúkoľvek poznámku ako PDF. Informácie o typoch súborov, ktoré Obsidian podporuje, nájdete v časti [[Akceptované formáty súborov]].

> [!info]+ Niektoré funkcie sú dostupné len na desktope
> Mobilná aplikácia Obsidian nedokáže vyhľadávať v PDF, kopírovať citáciu alebo odkaz na výber, ani exportovať poznámku do PDF.

## Otvorenie PDF

V [[Prieskumník súborov|Prieskumníkovi súborov]] vyberte PDF, aby sa otvoril na karte.

> [!info]+ Anotácie nie sú podporované
> Obsidian nepodporuje pridávanie anotácií ani zvýraznení do PDF. Na označovanie v PDF použite inú aplikáciu a potom otvorte aktualizovaný súbor vo vašom trezore.

Prehliadač má panel nástrojov s týmito ovládacími prvkami. Mobilná aplikácia Obsidian má rovnaký panel nástrojov.

- **Prepnutie bočného panela** zobrazí alebo skryje bočný panel a **Možnosti bočného panela** mení, čo bočný panel zobrazuje.
- **Oddialiť** a **Priblížiť** menia veľkosť strany.
- **Možnosti zobrazenia** menia rozloženie strán.
- Pole strany zobrazuje aktuálnu stranu. Zadajte číslo strany pre prechod na danú stranu.

Na prácu so samotným PDF súborom, napríklad premenovanie alebo presunutie, vyberte **Viac možností** ![[lucide-more-horizontal.svg#icon]]. PDF má v tomto menu menej položiek ako poznámka. Pozri [[Menu viac možností]].

## Navigácia v PDF

Vyberte **Možnosti bočného panela** a potom zvoľte, čo sa má zobraziť.

- **Miniatúry** zobrazujú malý náhľad každej strany.
- **Obsah** zobrazuje osnovu PDF, ak ju má.
- **Zobraziť stranu v obsahu** zvýrazní aktuálnu stranu v obsahu.

Na vytvorenie odkazu na stranu kliknite pravým tlačidlom na jej miniatúru a vyberte **Kopírovať odkaz na stranu N**, kde N je číslo strany. Odkaz prilepte do poznámky.

Na vytvorenie odkazu na sekciu kliknite pravým tlačidlom na položku v obsahu a vyberte **Kopírovať odkaz na "Nadpis"**, kde Nadpis je názov položky. Na mobile podržte položku stlačenú.

## Zmena vzhľadu PDF

Vyberte **Možnosti zobrazenia** pre zmenu rozloženia.

- **Prispôsobiť šírke** a **Prispôsobiť výške** prispôsobia stranu prehliadaču.
- **Jedna strana** zobrazuje jednu stranu naraz.
- **Dve strany (nepárne)** zobrazuje strany vedľa seba, začínajúc nepárnou stranou vľavo. Napríklad strany 1 a 2 sa zobrazia spolu a potom strany 3 a 4.
- **Dve strany (párne)** zobrazuje strany vedľa seba, začínajúc párnou stranou vľavo. Napríklad strana 1 sa zobrazí samostatne a potom strany 2 a 3 spolu.
- **Prispôsobiť téme** stmaví farby PDF, keď je vaša téma Obsidian tmavá.

## Vyhľadávanie v PDF

Vyhľadávanie v PDF je dostupné len na desktope. Mobilná aplikácia Obsidian nemá vyhľadávanie v prehliadači PDF.

1. Stlačte `Ctrl+F` (Windows a Linux) alebo `Command+F` (macOS).
2. Do poľa **Píšte pre spustenie hľadania...** zadajte text, ktorý chcete nájsť.
3. Vyberte šípku nahor alebo nadol pre presun medzi výsledkami.

Na zmenu spôsobu vyhľadávania použite tieto možnosti.

- **Rozlišovať malé/veľké písmená** presne rozlišuje veľké a malé písmená. Je to tlačidlo **Aa** v poli vyhľadávania.
- **Zvýrazniť všetko** zvýrazní každý výsledok. Vyberte tlačidlo nastavení vedľa šípok, aby ste našli túto možnosť.
- **Zhoda diakritiky** považuje písmená s diakritikou za odlišné písmená. Nachádza sa v rovnakom menu nastavení.
- **Celé slová** hľadá len celé slová. Nachádza sa v rovnakom menu nastavení.

Vyberte tlačidlo zavrieť pre opustenie vyhľadávania.

## Kopírovanie textu z PDF

Na desktope vyberte text v PDF a potom naň kliknite pravým tlačidlom.

- **Kopírovať** skopíruje text.
- **Kopírovať ako citáciu** skopíruje text ako citáciu, za ktorou nasleduje odkaz na pasáž.
- **Kopírovať odkaz na výber** skopíruje odkaz na danú pasáž, aby ste ho mohli prilepiť do poznámky.

Citácia vyzerá takto, keď ju prilepíte do poznámky.

```md
> Obsidian is awesome

[[Gemmy.pdf#page=1&selection=32,0,32,14|Gemmy, page 1]]
```

Odkaz na výber obsahuje rovnaký odkaz samostatne.

```md
[[Gemmy.pdf#page=1&selection=32,0,32,14|Gemmy, page 1]]
```

Na mobile výber textu v PDF zobrazí štandardné textové menu vášho zariadenia. **Kopírovať ako citáciu** a **Kopírovať odkaz na výber** nie sú dostupné.

## Vloženie PDF

Ak chcete zobraziť PDF v poznámke, pozrite si, ako [[Vkladanie súborov#Vloženie PDF do poznámky|vložiť PDF do poznámky]]. Vložené PDF má rovnaký panel nástrojov ako prehliadač. Vyberte **Upraviť blok** pre zmenu odkazu na vloženie.

## Export poznámky do PDF

Akúkoľvek poznámku môžete exportovať ako PDF na desktope. Export do PDF nie je dostupný v mobilnej aplikácii Obsidian.

1. Otvorte poznámku, ktorú chcete exportovať.
2. Otvorte [[Paleta príkazov|Paletu príkazov]] a vyberte **Exportovať do PDF...**. Môžete tiež vybrať **Viac možností** ![[lucide-more-horizontal.svg#icon]] v poznámke a potom vybrať **Exportovať do PDF...**.
3. Zvoľte vaše nastavenia.
    - **Použiť názov súboru ako nadpis** pridá názov súboru na začiatok PDF.
    - **Veľkosť strany** nastavuje veľkosť papiera. Môžete zvoliť A3, A4, A5, Legal, Letter alebo Tabloid.
    - **Na šírku** otočí strany na šírku.
    - **Okraj** nastavuje okraj strany na **Predvolené**, **Minimálny** alebo **Žiadny**.
    - **Percentuálne zmenšenie** škáluje obsah na každej strane. Pri 100 zostáva obsah v plnej veľkosti. Nižšie hodnoty zmenšujú text a obrázky, takže sa na každú stranu zmestí viac.
4. Vyberte **Exportovať do PDF**.
5. Zvoľte, kam uložiť súbor.

> [!tip]- Export poznámky s tmavou témou
> Exporty vždy používajú svetlý štýl, aj keď je vaša téma tmavá. Na zmenu vzhľadu exportu môžete použiť [[CSS snippety|CSS snippet]]. Na fóre Obsidian nájdete príklady snippetov pre tlač a export.[^1]

[^1]: Pozri [How can I make export pdf look the same as my theme?](https://forum.obsidian.md/t/how-can-i-make-export-pdf-look-the-same-as-my-theme/75849) a [PDF and print style reset with code syntax highlighting](https://forum.obsidian.md/t/pdf-and-print-style-reset-with-code-syntax-highlighting/31761).
