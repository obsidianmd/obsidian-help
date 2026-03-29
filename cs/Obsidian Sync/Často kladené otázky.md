---
permalink: sync/faq
publish: true
mobile: true
description: Tato stránka uvádí některé z častých dotazů týkajících se otázek a omezení služby Obsidian Sync.
---
Tato stránka obsahuje seznam běžných otázek týkajících se dotazů a omezení pro [[Úvod do Obsidian Sync|Obsidian Sync]].

## Obecné

### Jaké operační systémy Obsidian Sync podporuje?

Obsidian Sync podporuje každou platformu, na které může Obsidian běžet. V současnosti to zahrnuje Windows, macOS, Linux, Android a iOS.

### Funguje Obsidian s režimem uzamčení od Apple?

Obsidian lze používat v [režimu uzamčení](https://support.apple.com/en-us/105120), pokud je Obsidian přidán jako výjimka.

### Jaký typ dat se synchronizuje?

Ve výchozím nastavení se synchronizují vaše poznámky Obsidian, obrázky a vaše [[Konfigurační složka]].

Můžete přidat další možnosti synchronizace pro PDF, zvukové soubory, video soubory a další soubory, když [[Nastavení Sync a selektivní synchronizace|nastavíte Sync a selektivní synchronizaci]].

### Kolik úložiště mám k dispozici?

Limit úložiště závisí na vašem [[Plány a limity úložiště#Plány|plánu Sync]] Obsidian. Maximální velikost úložiště je 100 GB. Tento limit úložiště zahrnuje [[Historie verzí|historii verzí]].

Můžete zobrazit **Velikost trezoru** v aplikaci Obsidian přechodem na **[[Nastavení]] → Sync**.

### Kolik vzdálených trezorů mohu mít?

Počet vzdálených trezorů, které můžete mít, je určen na základě vašeho [[Plány a limity úložiště#Plány|plánu Sync]]. Plán Standard zahrnuje 1 trezor, plán Plus zahrnuje 10 trezorů. Trezory sdílené s vámi se nezapočítávají do limitu trezorů.

### Jak velký může být každý vzdálený trezor?

Neexistuje žádný limit na jednotlivý trezor. Limit úložiště je vázán na váš použitý účet a lze jej rozložit mezi všechny vaše trezory.

### S kolika lidmi mohu sdílet vzdálený trezor?

Můžete [[Spolupráce na sdíleném trezoru|sdílet vzdálený trezor]] až s 20 lidmi.

### Jak velký může být každý soubor?

Maximální velikost souboru závisí na vašem [[Plány a limity úložiště|plánu Obsidian Sync]]. Pro plán Standard je limit 5 MB. Pro plán Plus je limit 200 MB na soubor.

### Synchronizují se moje data na pozadí?

Ne, soubory se synchronizují pouze tehdy, když je Obsidian spuštěn.

### Načítá Obsidian Sync moje nastavení živě?

Obsidian Sync může automaticky znovu načíst určitá nastavení, ale existují některá omezení. Další podrobnosti naleznete v [[Nastavení Sync a selektivní synchronizace#Znovunačtení nastavení|Znovunačtení nastavení]].

### Mohu používat synchronizaci třetí strany s Obsidian Sync?

Nedoporučujeme používat synchronizační službu třetí strany společně s Obsidian Sync. Používání služby třetí strany a Obsidian Sync na více zařízeních může vést ke konfliktům, které způsobí duplikované nebo poškozené soubory.

Služby cloudového úložiště jako OneDrive a Dropbox nabízejí funkce „Soubory na vyžádání" nebo „Pouze online soubory", které stahují soubory pouze v případě potřeby a odstraňují je lokálně, aby ušetřily místo. Protože však tyto soubory nejsou vždy dostupné lokálně, Obsidian Sync je bude interpretovat jako smazané, což povede k jejich odstranění z vašeho vzdáleného trezoru.

Abyste se těmto problémům vyhnuli, zakažte stahování na vyžádání při používání Obsidian Sync se službami jako OneDrive nebo Dropbox. Budete muset zajistit, aby nastavení služby třetí strany bylo nakonfigurováno tak, aby soubory byly na zařízení vždy uchovávány.

## Uchovávání dat

Toto jsou běžně kladené otázky ohledně uchovávání dat v Obsidian. Podrobnější odpovědi naleznete v [[Zabezpečení a soukromí|Zabezpečení a soukromí]].

### Jak dlouho uchováváte historii verzí?

[[Historie verzí]] závisí na vašem [[Plány a limity úložiště|plánu Obsidian Sync]]. Na plánu Standard jsou vaše poznámky uchovávány po dobu 1 měsíce. Na plánu Plus jsou vaše poznámky uchovávány po dobu 12 měsíců. Po uplynutí tohoto období jsou starší verze smazány.

Starší verze [[Přílohy|příloh]] jsou uchovávány po dobu dvou týdnů.

### Jak dlouho uchováváte moje data po vypršení předplatného?

Uchováváme data ve vašich vzdálených trezorech, včetně historie verzí, po dobu jednoho měsíce po vypršení předplatného. Jakékoli místní trezory na vašich zařízeních nejsou dotčeny.

Pokud obnovíte předplatné do jednoho měsíce, nemělo by to mít žádný dopad na vaše používání. Pokud obnovíte po měsíci, kdy byly vaše vzdálené trezory odstraněny, můžete [[Nastavení Obsidian Sync|vytvořit nový vzdálený trezor]] a připojit svůj místní trezor.

### Uchováváte moje data, pokud požádám o vrácení peněz za předplatné?

Ne. Data jsou okamžitě smazána ze serverů Obsidian Sync. Data ve vašem [[Místní a vzdálené trezory|místním trezoru]] nejsou dotčena.
