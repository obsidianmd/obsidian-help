---
permalink: symlinks
---
Ve svém trezoru můžete používat [symbolické odkazy](https://en.wikipedia.org/wiki/Symbolic_link) (symlinky) a [spojení](https://learn.microsoft.com/en-us/windows/win32/fileio/hard-links-and-junctions#junctions) k ukládání souborů mimo trezor a [[Jak Obsidian ukládá data#Globální nastavení|systémovou složku]].

> [!danger] Používejte na vlastní riziko
> Důrazně nedoporučujeme používat symbolické odkazy. Používáním symbolických odkazů a spojení ve svém trezoru riskujete ztrátu nebo poškození dat, případně pád Obsidian. Ujistěte se, že pravidelně zálohujete svůj trezor a nastavení.

Níže jsou uvedena některá omezení nebo problémy, o kterých víme a které byste měli mít na paměti:

- Smyčky symbolických odkazů nejsou povoleny, aby se předešlo pádu Obsidian kvůli nekonečné smyčce.
- Cíle symbolických odkazů musí být zcela oddělené od kořenové složky trezoru nebo jakýchkoli jiných cílů symbolických odkazů. Oddělené znamená, že jedna složka neobsahuje druhou, ani naopak. Obsidian ignoruje jakýkoli symbolický odkaz na nadřazenou složku trezoru nebo z jedné složky v trezoru na jinou složku ve stejném trezoru. Jedná se o ochranu, která zajišťuje, že ve vašem trezoru neskončí duplicitní soubory, což by mohlo způsobit nejednoznačnost odkazů.
- Symbolické odkazy nemusí dobře fungovat s Obsidian Sync ani s _jakýmkoli jiným druhem synchronizace_. Pokud je cíl symbolického odkazu sám o sobě složkou synchronizovanou jiným trezorem Obsidian, může (potenciálně) dojít ke konfliktům při synchronizaci nebo ztrátě dat. Některé synchronizační nástroje, jako je Git, nenásledují symbolické odkazy, ale synchronizují _cestu_, na kterou symbolický odkaz ukazuje, což může vést k nežádoucím výsledkům, pokud tímto způsobem sdílíte svůj trezor s jinými lidmi.
- Správce souborů Obsidian nemůže přesouvat soubory přes hranice zařízení, takže pokud vytvoříte symbolický odkaz na složku na jiném disku než váš trezor, nebudete moci přetahovat soubory mezi touto složkou a ostatními složkami pomocí průzkumníku souborů Obsidian. (Pro takové přesuny budete muset použít průzkumník vašeho operačního systému a Obsidian bude přesun vnímat jako smazání a vytvoření nového souboru. Také _neaktualizuje_ žádné odkazy, které závisely na cestě daného souboru.)
- Symbolické odkazy na soubory (na rozdíl od symbolických odkazů na složky) _mohou_ fungovat, ale v současné době nejsou oficiálně podporovány. Změny provedené mimo Obsidian nejsou sledovány, takže pokud soubor změníte přímo, Obsidian změnu nezaznamená, neaktualizuje vyhledávací indexy atd.
- Vytváření symbolických odkazů na položky uvnitř složky `.obsidian/` za účelem jejich sdílení mezi trezory **s vysokou pravděpodobností poškodí vaše nastavení**, pokud _opravdu_ nevíte, co děláte. Pokud se pro tuto cestu rozhodnete, mějte alespoň zálohy.
