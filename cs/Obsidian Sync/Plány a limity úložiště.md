---
permalink: sync/plans
publish: true
mobile: true
description: 'Seznamte se s různými možnostmi plánů, které nabízíme pro Obsidian Sync.'
---
## Plány

Pro synchronizaci poznámek pomocí [[Úvod do Obsidian Sync|Obsidian Sync]] potřebujete předplatné. Plán Sync si můžete zakoupit po přihlášení do [svého účtu](https://obsidian.md/account/sync). Ceny naleznete na [stránce Sync](https://obsidian.md/sync).

Níže je srovnání plánu Standard a Plus:

|                                                              | Sync Standard | Sync Plus       |
| ------------------------------------------------------------ | ------------- | --------------- |
| Synchronizované trezory                                      | 1             | 10              |
| Maximální velikost souboru                                   | 5 MB          | 200 MB          |
| Celkové úložiště                                             | 1 GB          | 10 GB až 100 GB |
| [[Historie verzí]]                                           | 1 měsíc       | 12 měsíců       |
| Zařízení                                                     | Neomezeně     | Neomezeně       |
| [[Spolupráce na sdíleném trezoru\|Sdílené trezory]]          | Ano           | Ano             |

## Limity úložiště

Množství dat, které můžete ukládat pomocí [[Úvod do Obsidian Sync|Obsidian Sync]], závisí na vašem předplatném. V plánu Sync Plus si můžete zakoupit dodatečné úložiště až do 100 GB přes [panel svého účtu](https://obsidian.md/account/sync). Více podrobností najdete v [[Často kladené otázky]].

Pro všechny poznámky ve všech vašich trezorech platí jeden společný limit úložiště na úrovni účtu. [[Historie verzí]] a [[Přílohy|přílohy]] se rovněž započítávají do limitu úložiště vašeho účtu.

Když dosáhnete limitu úložiště vašeho účtu, plugin Sync přestane synchronizovat soubory a budete vyzváni k vyčištění vzdáleného trezoru (vzdálených trezorů).

### Identifikace a smazání velkých souborů

Pro identifikaci a smazání velkých souborů z trezoru:

1. Otevřete **[[Nastavení]] → Sync**.
2. Vyberte **Zobrazit největší soubory** vedle **Velikost trezoru je nad limitem**.
	1. Pokud nevidíte **Velikost trezoru je nad limitem**, znamená to, že ==jste ještě nedosáhli limitu velikosti==.
3. Zavřete dialogové okno **Zobrazit největší soubory**.
4. Smažte některé velké soubory, které již nepotřebujete.
5. Počkejte, až Obsidian Sync dokončí úlohu. Může to chvíli trvat.
6. Otevřete **[[Nastavení]] → Sync**.
7. Vyberte **Vyčistit** vedle **Velikost trezoru je nad limitem**. Tím se odstraní smazané soubory ze vzdáleného trezoru a uvolní se místo.

Po synchronizaci vyčištění na server by měl Obsidian Sync opět začít fungovat.

### Vytvoření nového vzdáleného trezoru

Můžete **vytvořit nový vzdálený trezor**, abyste před synchronizací vyloučili velké soubory. Pokud vytvoříte nový vzdálený trezor, historie verzí vašich souborů bude resetována. Před pokračováním se ujistěte, že nepotřebujete historii verzí starších souborů.

Pro synchronizaci s novým vzdáleným trezorem postupujte takto:

1. Otevřete **[[Nastavení]] → Sync**.
2. Vyberte **Spravovat** vedle **Vzdálený trezor**.
3. Zvolte **Vytvořit nový trezor** a postupujte podle kroků k jeho vytvoření. Pokud vám dojdou trezory, možná budete muset nejprve [[Nastavení Obsidian Sync#Odpojení od vzdáleného trezoru|odpojit]] aktuální vzdálený trezor a [[Nastavení Obsidian Sync#Smazání vzdáleného trezoru|smazat]] ho.
4. Nastavte vyloučené soubory před zahájením synchronizace s novým vzdáleným trezorem.
5. Restartujte Obsidian, aby se změny projevily.
6. Otevřete **[[Nastavení]] → Sync**.
7. Vyberte Obnovit pro zahájení synchronizace s novým vzdáleným trezorem.

Nový vzdálený trezor by měl být menší než předchozí, díky absenci historie verzí a vyloučených souborů.

## Upgrade plánu

Svůj plán můžete upgradovat po přihlášení do [panelu svého účtu](https://obsidian.md/account/sync). Odtud budete moci upgradovat plán ze Sync Standard na Sync Plus a zvýšit úložiště až na 100 GB.

## Downgrade plánu

Pokud chcete svůj plán Sync downgradovat, ale vaše využití úložiště přesahuje limit nového plánu, budete muset uvolnit místo ve vzdáleném trezoru. V současné době neexistuje přímá metoda, jak rychle odstranit konkrétní soubory z existujícího vzdáleného trezoru. Je to proto, že přílohy jsou uchovávány v historii verzí až dva týdny a historie verzí se započítává do limitu úložiště.

Nejrychlejší způsob, jak snížit využití úložiště Sync, je vytvořit nový vzdálený trezor s vypnutými přílohami a poté smazat starý vzdálený trezor, který překračuje limity úložiště. Uvědomte si, že tím přijdete o historii verzí.

Pokud downgradujete ze Sync Plus na Sync Standard, budete muset také před povolením downgradu snížit počet trezorů na jeden.

### Zachování historie verzí

Přílohy jsou uchovávány ve vaší [[Historie verzí|historii verzí]] až dva týdny. Pokud plánujete downgrade v blízké budoucnosti, můžete začít odstraněním příloh z místního trezoru.

Po dvou týdnech budou tyto soubory vyčištěny ze vzdáleného trezoru a nebudou se již započítávat do limitu úložiště. V tomto okamžiku budete moci svůj plán downgradovat a zachovat přitom historii verzí pro ostatní typy souborů, jako jsou soubory Markdown.
