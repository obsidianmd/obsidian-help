---
permalink: pdf
publish: true
mobile: true
description: 'Naučte se, jak zobrazovat, vyhledávat a odkazovat na PDF soubory v Obsidianu a jak exportovat poznámku jako PDF.'
---
Obsidian otevírá PDF soubory ve vestavěném prohlížeči. Můžete také vložit PDF do poznámky, odkázat na pasáž v něm a exportovat libovolnou poznámku jako PDF. Informace o typech souborů, které Obsidian podporuje, najdete v [[Podporované formáty souborů]].

> [!info]+ Některé funkce jsou dostupné pouze na desktopu
> Mobilní aplikace Obsidian neumí vyhledávat uvnitř PDF, kopírovat citaci ani odkaz na výběr, ani exportovat poznámku do PDF.

## Otevření PDF

V [[Průzkumník souborů|Průzkumníku souborů]] vyberte PDF, abyste ho otevřeli na kartě.

> [!info]+ Anotace nejsou podporovány
> Obsidian nepodporuje přidávání anotací ani zvýraznění do PDF. K označování PDF použijte jinou aplikaci a poté otevřete aktualizovaný soubor ve svém trezoru.

Prohlížeč má nástrojový panel s těmito ovládacími prvky. Mobilní aplikace Obsidian má stejný nástrojový panel.

- **Přepnout postranní panel** zobrazí nebo skryje postranní panel a **Možnosti postranního panelu** mění, co postranní panel zobrazuje.
- **Oddálit** a **Přiblížit** mění velikost stránky.
- **Možnosti zobrazení** mění rozložení stránek.
- Pole stránky zobrazuje aktuální stránku. Zadejte číslo stránky pro přechod na ni.

Chcete-li pracovat se samotným PDF souborem, například ho přejmenovat nebo přemístit, vyberte **Více možností** ![[lucide-more-horizontal.svg#icon]]. PDF má v tomto menu méně položek než poznámka. Viz [[Více možností menu]].

## Navigace v PDF

Vyberte **Možnosti postranního panelu** a poté zvolte, co zobrazit.

- **Náhledy** zobrazí malý náhled každé stránky.
- **Obsah** zobrazí osnovu PDF, pokud ji má.
- **Zobrazit stránku v obsahu** zvýrazní aktuální stránku v obsahu.

Chcete-li vytvořit odkaz na stránku, klikněte pravým tlačítkem na její náhled a vyberte **Kopírovat odkaz na stránku N**, kde N je číslo stránky. Vložte odkaz do poznámky.

Chcete-li vytvořit odkaz na sekci, klikněte pravým tlačítkem na položku v obsahu a vyberte **Kopírovat odkaz na „Název"**, kde Název je název položky. Na mobilním zařízení podržte položku stisknutou.

## Změna vzhledu PDF

Vyberte **Možnosti zobrazení** pro změnu rozložení.

- **Přizpůsobit šířce** a **Přizpůsobit výšce** přizpůsobí stránku prohlížeči.
- **Jedna stránka** zobrazí jednu stránku najednou.
- **Two page (odd)** zobrazí stránky vedle sebe, počínaje lichou stránkou vlevo. Například stránky 1 a 2 se zobrazí společně a poté stránky 3 a 4.
- **Two page (even)** zobrazí stránky vedle sebe, počínaje sudou stránkou vlevo. Například stránka 1 se zobrazí sama a poté se stránky 2 a 3 zobrazí společně.
- **Přizpůsobit motivu** ztmaví barvy PDF, pokud je váš motiv Obsidian tmavý.

## Vyhledávání v PDF

Vyhledávání uvnitř PDF je dostupné pouze na desktopu. Mobilní aplikace Obsidian nemá vyhledávání v prohlížeči PDF.

1. Stiskněte `Ctrl+F` (Windows a Linux) nebo `Command+F` (macOS).
2. Do pole **Pište pro vyhledání ...** zadejte text, který chcete najít.
3. Vyberte šipku nahoru nebo dolů pro přesun mezi nalezenými výskyty.

Pro změnu fungování vyhledávání použijte tyto možnosti.

- **Rozlišovat velká a malá písmena** přesně rozlišuje velká a malá písmena. Je to tlačítko **Aa** ve vyhledávacím poli.
- **Zvýraznit vše** zvýrazní každý nalezený výskyt. Vyberte tlačítko nastavení vedle šipek pro nalezení této možnosti.
- **Rozlišovat diakritiku** zachází s písmeny s diakritikou jako s odlišnými písmeny. Nachází se ve stejném menu nastavení.
- **Celá slova** najde pouze celá slova. Nachází se ve stejném menu nastavení.

Vyberte tlačítko zavřít pro opuštění vyhledávání.

## Kopírování textu z PDF

Na desktopu vyberte text v PDF a poté na něj klikněte pravým tlačítkem.

- **Kopírovat** zkopíruje text.
- **Kopírovat jako citaci** zkopíruje text jako citaci, následovanou odkazem na pasáž.
- **Kopírovat odkaz na výběr** zkopíruje odkaz na danou pasáž, abyste ho mohli vložit do poznámky.

Citace vypadá takto, když ji vložíte do poznámky.

```md
> Obsidian is awesome

[[Gemmy.pdf#page=1&selection=32,0,32,14|Gemmy, page 1]]
```

Odkaz na výběr obsahuje stejný odkaz samostatně.

```md
[[Gemmy.pdf#page=1&selection=32,0,32,14|Gemmy, page 1]]
```

Na mobilním zařízení se při výběru textu v PDF zobrazí standardní textové menu vašeho zařízení. **Kopírovat jako citaci** a **Kopírovat odkaz na výběr** nejsou dostupné.

## Vložení PDF

Chcete-li zobrazit PDF uvnitř poznámky, podívejte se, jak [[Vkládání souborů#Vložení PDF do poznámky|vložit PDF do poznámky]]. Vložené PDF má stejný nástrojový panel jako prohlížeč. Vyberte **Upravit tento blok** pro změnu odkazu vložení.

## Export poznámky do PDF

Na desktopu můžete exportovat libovolnou poznámku jako PDF. Export do PDF není dostupný v mobilní aplikaci Obsidian.

1. Otevřete poznámku, kterou chcete exportovat.
2. Otevřete [[Paleta příkazů|paletu příkazů]] a vyberte **Export PDF**. Můžete také vybrat **Více možností** ![[lucide-more-horizontal.svg#icon]] v poznámce a poté vybrat **Export PDF**.
3. Zvolte nastavení.
    - **Zahrnout název souboru jako titulek** přidá název souboru na začátek PDF.
    - **Velikost stránky** nastaví velikost papíru. Můžete vybrat A3, A4, A5, Legal, Letter nebo Tabloid.
    - **Na šířku** otočí stránky na šířku.
    - **Okraj** nastaví okraj stránky na **Výchozí**, **Minimální** nebo **Žádný**.
    - **Procento zmenšení** škáluje obsah na každé stránce. Při hodnotě 100 zůstane obsah v plné velikosti. Nižší hodnoty zmenší text a obrázky, takže se na každou stránku vejde více obsahu.
4. Vyberte **Exportovat do PDF**.
5. Zvolte, kam soubor uložit.

> [!tip]- Export poznámky s tmavým motivem
> Exporty vždy používají světlý styl, i když je váš motiv tmavý. Chcete-li změnit vzhled exportu, můžete použít [[CSS úryvky|CSS úryvek]]. Na fóru Obsidian najdete příklady úryvků pro tisk a export.[^1]

[^1]: Viz [How can I make export pdf look the same as my theme?](https://forum.obsidian.md/t/how-can-i-make-export-pdf-look-the-same-as-my-theme/75849) a [PDF and print style reset with code syntax highlighting](https://forum.obsidian.md/t/pdf-and-print-style-reset-with-code-syntax-highlighting/31761).
