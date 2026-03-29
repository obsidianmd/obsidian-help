---
permalink: glossary
---
Tento slovníček pojmů obsahuje běžnou terminologii Obsidian.

## Alias

**Alias** je typ [[#vlastnost|vlastnosti]], který definuje alternativní názvy pro [[#poznámka|poznámku]].

## Příloha

**Příloha** je soubor v [[Podporované formáty souborů|podporovaném formátu]], který byl vytvořen mimo trezor a přidán později.

## Příkaz

**Příkaz** je akce, kterou lze provést buď výběrem z [[Paleta příkazů|palety příkazů]], nebo přiřazením [[#klávesová zkratka|klávesové zkratky]].

## Embed

**Vkládání** (embedding) znamená nahrazení odkazu na externí obsah samotným obsahem, například pro zahrnutí obrázku do poznámky. Viz také [[Vkládání souborů]].

## Úvodní metadata

Úvodní metadata (frontmatter) jsou způsob, jak definovat [[#vlastnost|vlastnosti]] přidáním [YAML](https://yaml.org/) nebo [JSON](https://www.json.org/) na začátek poznámky. Viz také [[Vlastnosti#Formát vlastností|Formát vlastností]].

## Graf

**Graf** je vizualizace, která zvýrazňuje propojení mezi [[#poznámka|poznámkami]]. Viz také [[Graf]].

## Klávesová zkratka

**Klávesová zkratka** je kombinace kláves pro [[#příkaz]]. Viz také [[Klávesové zkratky]] a [[Klávesové zkratky|Jak používat klávesové zkratky]].

## Odkaz

**Odkaz** odkazuje na jinou poznámku nebo soubor. [[Interní odkazy|Interní odkaz]] směřuje na soubor umístěný v aktuálním trezoru. [[Základní syntaxe formátování#Externí odkazy|Externí odkaz]] směřuje na umístění mimo trezor, obvykle na webovou stránku.

## Hlavní oblast

**Hlavní oblast** je centrální oblast aplikace Obsidian, kde primárně upravujete [[#poznámka|poznámky]].

## Markdown

Markdown je značkovací jazyk pro formátování textu a primární formát souborů používaný pro poznámky v Obsidian, soubory `.md`. Viz také [[Základní syntaxe formátování]].

## Poznámka

**Poznámka** je soubor Markdown uvnitř [[#trezor|trezoru]].

## Plugin

**Plugin** rozšiřuje Obsidian o další funkce.

- [[Základní pluginy]] jsou vytvořeny týmem Obsidian a jsou součástí výchozí instalace.
- [[Komunitní pluginy]] jsou vytvořeny vývojáři třetích stran a je třeba je [[Komunitní pluginy#Instalace komunitního pluginu|nainstalovat]], než je budete moci používat.

Můžete si [vytvořit vlastní plugin](https://docs.obsidian.md/Plugins/Getting+started/Build+a+plugin).

## Vyskakovací okno

Ve výchozím nastavení se všechny poznámky v trezoru otevírají ve stejném okně aplikace. **Vyskakovací okno** umožňuje otevírat poznámky ze stejného trezoru v samostatných oknech, například pro zobrazení na druhém monitoru.

Viz také [[Vyskakovací okna]].

## Vlastnost

[[Vlastnosti]] definují další informace o poznámce, jako je datum splnění nebo autor.

## Postranní panel nástrojů

**Postranní panel nástrojů** funguje jako kontejner pro často používané ikony akcí.

V desktopové verzi se jedná o svislou oblast umístěnou zcela vlevo.

V mobilní verzi je reprezentován tlačítkem nabídky ![[lucide-menu.svg#icon]] na [[#stavový řádek|stavovém řádku]].

## Postranní panel

Oblast, která obsahuje podpůrná [[#zobrazení]] uspořádaná jako [[#karta|karty]]. Postranní panel lze rozdělit do více [[#skupina karet|skupin karet]].

Desktopová verze Obsidian má dva postranní panely, jeden na každé straně [[#hlavní oblast|hlavní oblasti]]. Oba postranní panely jsou přístupné přes ikony v levém horním a pravém horním rohu aplikace Obsidian, a také přejetím doleva nebo doprava. Ikonu v pravém horním rohu je třeba podržet pro otevření okna.

## Úryvek

**Úryvek**, neboli [[CSS úryvky|CSS úryvek]], mění vzhled Obsidian, stejně jako [[#motiv]]. Na rozdíl od motivů můžete aplikovat více úryvků současně.

## Stavový řádek

**Stavový řádek** v aplikaci Obsidian zobrazuje základní statistiky a stavy. V desktopové verzi jej najdete v pravém dolním rohu, zatímco na mobilních zařízeních je umístěn podél spodní části aplikace.

## Karta

**Karta** obsahuje [[#zobrazení]]. Karty lze přemísťovat v rámci [[#hlavní oblast|hlavní oblasti]] a [[#postranní panel|postranních panelů]]. Viz také [[Karty]].

## Skupina karet

**Skupina karet** je kolekce [[#karta|karet]] v [[#hlavní oblast|hlavní oblasti]]. Karty ve skupině karet mohou být naskládány.

## Štítek

**Štítek** je slovo, které začíná křížkem (`#`), například `#kniha`. Štítky se primárně používají k nalezení souvisejících [[#poznámka|poznámek]].

## Motiv

**Motiv** mění vzhled aplikace Obsidian pomocí [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS). Části motivu můžete přepsat pomocí [[#úryvek|úryvků]].

## Trezor

`Aliasy: místní trezor, místní data`

**Trezor** je složka ve vašem souborovém systému, která obsahuje [[#poznámka|poznámky]] a složku `.obsidian` s konfigurací specifickou pro Obsidian. Viz také [[Jak Obsidian ukládá data]].

### Vzdálený trezor

`Aliasy: Vzdálená data`

[[Místní a vzdálené trezory|Vzdálený trezor]] je kopie vašeho místního trezoru, která je udržována pomocí [[Úvod do Obsidian Sync|Obsidian Sync]]. Data vzdáleného trezoru jsou aktualizována na základě změn v místních datech.

## Zobrazení

**Zobrazení** zobrazuje informace, například [[Hledat|zobrazení Hledat]].
