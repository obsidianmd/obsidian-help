---
permalink: plugins/file-recovery
publish: true
mobile: true
description: Obnova souborů pomáhá chránit vaši práci před neúmyslnou ztrátou dat automatickým ukládáním snímků vašich poznámek v pravidelných intervalech.
---
Obnovení souborů je [[Základní pluginy|základní plugin]], který chrání vaši práci před náhodným smazáním, poškozením souborů nebo nechtěnými změnami tím, že v pravidelných intervalech automaticky ukládá kompletní snímky vašich poznámek. Obnovení souborů není kompletní zálohovací řešení a doporučujeme také [[Zálohování souborů Obsidian|zálohovat]] vaše soubory Obsidian samostatně.

Aby se zabránilo zabírání [[#Úložiště a výkon|příliš velkého prostoru]], Obsidian uchovává snímky po určitý počet dní a poté je smaže. Snímky zachycují úplný obsah vašich souborů, nikoli pouze změny, což vám umožňuje obnovit jakoukoli předchozí verzi.

> [!info]+ Informace
> Ve výchozím nastavení se snímky ukládají minimálně každých 5 minut a uchovávají se po dobu 7 dní. Oba intervaly můžete nastavit v **[[Nastavení]] → Základní pluginy → Obnovení souborů**.

Snímky jsou uchovávány v [[Jak Obsidian ukládá data#Globální nastavení|Globálním nastavení]], mimo trezor, aby bylo možné řešit ztrátu dat souvisejících s trezorem. To znamená, že snímky jsou uloženy s absolutní cestou k poznámce. Pokud jste nedávno přesunuli svůj trezor, možná ho budete muset přesunout zpět na místo, kde se nacházel v době pořízení snímku.

> [!tip] Pokud používáte [[Úvod do Obsidian Sync|Obsidian Sync]] nebo [[Synchronizace poznámek mezi zařízeními|jiné synchronizační služby]], snímky Obnovení souborů se mezi zařízeními nesynchronizují. Snímky jsou specifické pro dané zařízení a zůstávají uloženy lokálně na každém zařízení.

## Obnovení snímku

1. Otevřete **[[Nastavení]]**.
2. V postranním panelu vyberte **Obnovení souborů** pod **Základní pluginy**.
3. V části **Snímky** vyberte **Zobrazit**.
4. Do pole s názvem souboru začněte psát název souboru, který chcete obnovit, a zobrazí se seznam návrhů.
5. Vyberte soubor, stiskněte Enter a uvidíte seznam dostupných snímků.
6. Vyberte snímek, který chcete obnovit.
    1. Pokud chcete obsah zkopírovat a vložit do nové poznámky, vyberte tlačítko **Kopírovat**.
    2. Pokud chcete soubor kompletně obnovit, vyberte tlačítko **Obnovit**.
7. Volitelně můžete zobrazit rozdíly mezi snímky přepnutím **Zobrazit rozdíl**. To zobrazí, jaký obsah byl mezi verzemi snímků přidán, odebrán nebo upraven.

## Vymazání historie snímků

> [!danger] Vymazání historie snímků nevratně smaže všechny snímky ve vašem trezoru.

1. Otevřete **[[Nastavení]]**.
2. V postranním panelu vyberte **Obnovení souborů** pod **Základní pluginy**.
3. V části **Vymazat historii** vyberte **Vymazat**.
4. Potvrďte, že chcete smazat všechny snímky, kliknutím na **Vymazat**.

## Úložiště a výkon

Snímky Obnovení souborů obvykle zabírají minimální místo na disku, protože ukládají pouze změněné soubory. Nicméně v trezorech s mnoha velkými soubory nebo častými úpravami se snímky mohou postupem času nahromadit. Sledujte využití úložiště a v případě potřeby upravte dobu uchovávání.

## Omezení

- **Režim uzamčení Apple**: Tato funkce není dostupná na zařízeních Apple se zapnutým [režimem uzamčení](https://support.apple.com/en-us/105120), pokud není Obsidian z tohoto režimu vyňat.
- **Typy souborů**: Pomocí Obnovení souborů lze obnovit pouze soubory `.md` a `.canvas`.
- **Umístění trezoru**: Pokud přesunete trezor na jiné místo bez použití [[Spravovat trezory#Přesunutí trezoru do jiné složky|přepínače trezorů]], stávající snímky nemusí být přístupné.
