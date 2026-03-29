---
permalink: snippets
publish: true
mobile: true
description: 'Naučte se, jak změnit části vzhledu aplikace Obsidian bez nutnosti vytvářet kompletní téma.'
---
Naučte se upravovat různé aspekty vzhledu aplikace Obsidian bez nutnosti [vytvářet motiv](https://docs.obsidian.md/Themes/App+themes/Build+a+theme).

> [!tip] Pokud hledáte návod na práci s CSS pro [[Úvod do Obsidian Publish|Obsidian Publish]], nezapomeňte si projít [[Přizpůsobení stránky]].

CSS je jazyk, který řídí vzhled HTML. Přidáním CSS úryvků můžete měnit části uživatelského rozhraní Obsidian, jako je velikost a barva nadpisů. Obsidian obsahuje [CSS proměnné](https://docs.obsidian.md/Reference/CSS+variables/CSS+variables), které vám pomohou snadno přizpůsobit rozhraní.

Obsidian hledá CSS úryvky uvnitř [[Konfigurační složka|konfigurační složky]] trezoru.

## Přidání úryvku

Pro přidání CSS úryvku na **počítači** ![[lucide-monitor-check.svg#icon]] postupujte takto:

1. Otevřete **[[Nastavení]]** ![[lucide-settings.svg#icon]].
2. V části **Vzhled → CSS úryvky** vyberte **Otevřít složku úryvků** ![[lucide-folder-open.svg#icon]].
3. Ve složce úryvků vytvořte CSS soubor obsahující váš úryvek.
4. V Obsidian v části **Vzhled → CSS úryvky** vyberte **Znovu načíst úryvky** ![[lucide-refresh-cw.svg#icon]], abyste úryvek viděli v seznamu.
5. Zapněte úryvek kliknutím na přepínač.

Pro přidání CSS úryvku na **mobilním zařízení/tabletu** ![[obsidian-icon-smartphone.svg#icon]] postupujte takto:

1. Otevřete správce souborů a najděte svůj trezor. Umístění trezoru můžete ověřit v _Spravovat trezory…_ klepnutím na trezor a zobrazením cesty.
2. Otevřete [[Konfigurační složka|konfigurační složku]] a vytvořte složku `snippets`, pokud neexistuje.
3. Přidejte svůj CSS úryvek do této složky.
4. Otevřete **[[Nastavení]]** ![[lucide-settings.svg#icon]] v Obsidian.
5. Na levé straně vyberte **Vzhled**.
6. Přejděte dolů k sekci **CSS úryvky**.
7. Klepněte na **Znovu načíst úryvky** ![[lucide-refresh-cw.svg#icon]] pro obnovení seznamu.
8. Klepnutím na přepínač úryvek zapněte.

Alternativně můžete
- [[Synchronizace poznámek mezi zařízeními|Synchronizovat]] jakékoli změny pomocí vaší synchronizační služby.
- Použít komunitní plugin k vytvoření úryvku přímo z Obsidian.

Po zapnutí bude Obsidian automaticky detekovat změny CSS úryvků a aplikovat je, když soubor uložíte.

> [!tip] Pro uplatnění změn nemusíte Obsidian restartovat. Nicméně může být potřeba použít příkaz v [[Paleta příkazů|paletě příkazů]] pro znovunačtení Obsidian bez ukládání, abyste viděli změny v aktuálním motivu nebo poznámce.

## Psaní CSS pro Obsidian

Obsidian nabízí několik metod, které usnadňují a zefektivňují psaní CSS.

Obsahuje řadu [CSS proměnných](https://docs.obsidian.md/Reference/CSS+variables/CSS+variables) pro snadnou úpravu částí Obsidian a vestavěný [[Vlastnosti#Typ vlastnosti|typ vlastnosti]] pro změnu vzhledu jedné nebo více poznámek.

> [!example] Proměnné
> Vytvořte soubor s názvem `headers.css` s následujícím obsahem pro změnu barev šesti [[Základní syntaxe formátování#Nadpisy|úrovní nadpisů]] na duhu:
>
> ```css
> body {
>   --h1-color: red;
>   --h2-color: orange;
>   --h3-color: yellow;
>   --h4-color: green;
>   --h5-color: blue;
>   --h6-color: pink;
> }
> ```

> [!example] CSS třídy
> Přiřaďte název vlastní CSS třídy (nebo seznam CSS tříd) předdefinované [[Vlastnosti|vlastnosti]] `cssclasses`, aby jedna nebo více poznámek vypadala odlišně od ostatních.
> 
> **CSS**:
> ```css
> .red-border img {
>    border-color: #ff0000;
>    border-style: solid;
> }
> ```
> 
> **YAML/Vlastnosti**:
> ```yaml
> cssclasses:
>  - red-border
> ```
> 
> V každé poznámce, která obsahuje hodnotu `red-border` ve vlastnosti `cssclasses`, jsou obrázky zobrazeny s červeným okrajem.

Pro zajištění platnosti a správného formátování CSS souboru doporučujeme jej ověřit pomocí nástroje jako [CSS Validation Service](https://jigsaw.w3.org/css-validator/), protože neplatné CSS nebude fungovat.

## Zjistit více

- Pokud jste v CSS nováčci, podívejte se na [Learn to style HTML using CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS) od Mozilly.
- Pro více informací o stylování Obsidian se podívejte na:
  - [About styling](https://docs.obsidian.md/Reference/CSS+variables/About+styling)
  - [Build a theme](https://docs.obsidian.md/Themes/App+themes/Build+a+theme)
  - [Build a Publish theme](https://docs.obsidian.md/Themes/Obsidian+Publish+themes/Build+a+Publish+theme)
  - [Obsidian CSS Inspector workflow](https://forum.obsidian.md/t/obsidian-css-inspector-workflow/58178)
