---
permalink: backup
---
Pokud jste si ještě nezálohovali počítač, začněte hned teď! Plugin [[Obnovení souborů]] v Obsidian je užitečný, ale omezený. Dokáže obnovit jen určité množství dat a ukládá informace pro obnovení na každém zařízení zvlášť. Pro robustnější ochranu doporučujeme implementovat řádný zálohovací systém.

**Proč zálohovat data?**

Ve výchozím nastavení Obsidian ukládá vaše poznámky **lokálně** na vašem zařízení, nikoli v cloudu. To znamená, že [data jsou plně vaše](https://obsidian.md/about), což vám dává kontrolu nad nimi. Lokální úložiště však může být postiženo problémy, jako je poškození nebo ztráta dat. Není otázkou zda, ale kdy. Zálohování dat chrání před těmito nevyhnutelnostmi a zajišťuje, že si udržíte kontrolu nad svými poznámkami.

## Synchronizace není záloha

Služby jako [[Úvod do Obsidian Sync|Obsidian Sync]], iCloud, OneDrive a Dropbox vám pomáhají synchronizovat poznámky mezi různými zařízeními. I když mohou nabízet funkce jako [[Historie verzí|obnovení poznámek]], **nejsou navrženy pro zálohování**. Synchronizace udržuje vaše poznámky aktuální, ale nechrání před ztrátou dat.

- **Synchronizace:** Synchronizace zajišťuje, že vaše soubory jsou na všech zařízeních stejné. Když změníte soubor na jednom zařízení, aktualizuje se na všech synchronizovaných zařízeních. Synchronizační služby nemají „primární" zařízení.
- **Záloha:** Záloha ukládá kopii vašich dat na jiné místo, aby bylo možné je obnovit v případě ztráty dat nebo poškození. Zálohy nejsou určeny pro aktualizace v reálném čase ani pro spolupráci.

Pro řádné zálohování trezoru použijte specializovaný zálohovací nástroj, který vytváří jednosměrnou kopii vašich dat. Tento nástroj odešle vaše data na bezpečné zálohovací místo bez změny dat na vašem zařízení.

Pokud používáte více zařízení se synchronizací, zvolte **jedno zařízení** jako zálohovací zařízení. Obvykle se jedná o vaše hlavní nebo „primární" zařízení, tedy to, které používáte nejvíce. Upozorňujeme, že většina synchronizačních služeb nerozlišuje žádné zařízení jako „primární"; jedná se pouze o koncept, který vám pomáhá spravovat zálohy.

> [!Example] Používáte Obsidian Sync na notebooku, tabletu, telefonu a pracovním stolním počítači. Trezor používáte převážně na pracovním stolním počítači, občas na notebooku a zřídka na tabletu nebo telefonu. V tomto případě by váš pracovní stolní počítač byl vaším „primárním zařízením" pro zálohování.

## Použijte komunitní pluginy

Ačkoli tým Obsidian nemůže oficiálně doporučit žádný konkrétní plugin, uznáváme dva komunitní pluginy, které se staly mezi uživateli oblíbenými pro zálohování souborů:

- **[Obsidian Git](https://obsidian.md/plugins?id=obsidian-git):** Tento plugin použijte pro zálohování trezoru commitováním jeho obsahu do [Git repozitáře](https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository). Je to efektivní způsob verzování poznámek a zajištění jejich bezpečnosti na vzdáleném serveru. Mějte však na paměti, že vaše data mohou být při této metodě uložena na [[#Použijte cloudové služby|externí hostingové platformě]].
- **[Local Backup](https://obsidian.md/plugins?id=local-backup):** Tento plugin vám umožňuje vytvářet lokální kopie trezoru ve složce dle vašeho výběru s možností archivace. Můžete dokonce použít synchronizační složku, například složku Dropboxu, a kombinovat tak lokální a cloudové zálohy. Tato metoda **se dobře doplňuje** s níže popsanými možnostmi zálohování.

## Použijte cloudové služby

> [!info] Nedoporučuje se umísťovat trezor přímo do složky zvolené zálohovací služby.

Uchovávání záloh v cloudu je alternativou a doplňkem k fyzickému ukládání dat, namísto externího pevného disku nebo USB flash disku. Externí pevný disk nebo USB flash disk se může ztratit nebo poškodit. Největší výhodou ukládání souborů v cloudu je, že jsou dostupné kdykoli a odkudkoli. Nevýhodou je, že většina zálohovacích služeb je vlastněna soukromou společností.

Z hlediska zabezpečení byste měli vždy věnovat zvýšenou pozornost přístupu a bezpečnosti u cloudových záloh. [Worldbackupday](https://www.worldbackupday.com/en) udržuje aktuální seznam online zálohovacích služeb, které můžete zvážit.

## Použijte externí disky

**Pevné disky a SSD disky**
Zálohy na externích pevných discích jsou stále cenné ve stále více cloudově orientovaném světě a používají se hlavně pro ukládání dat a zálohování počítačů. Největší nevýhodou externího disku je, že se může porouchat nebo ztratit. Největší výhodou je, že úložný prostor stačí zakoupit pouze jednou. Použití externího pevného disku se často kombinuje se [[#Použijte zálohy počítače|zálohováním počítače]].

**USB flash disky**
Flash disky (nazývané také USB klíčenky, paměťové karty nebo pera) jsou jednoduchá a efektivní metoda pro rychlé zálohování.

1. Připojte flash disk k počítači nebo notebooku.
2. Ujistěte se, že zařízení je rozpoznáno a připojeno ve vašem souborovém systému. V případě potřeby flash disk naformátujte tak, aby byl kompatibilní s vaším souborovým systémem.
3. Zkopírujte složku trezoru z jejího aktuálního umístění na flash disk.
4. Bezpečně odpojte flash disk.
5. Odeberte flash disk ze zařízení.

**NAS záloha**
Pro zkušené uživatele je zálohování dat na NAS (Network Attached Storage) server dobrá a bezpečná metoda, protože má více pevných disků a další mechanismy obnovy.

> [!tip] Pokud váš externí disk obsahuje citlivé informace, doporučuje se uchovávat externí disk na bezpečném místě, například v zabezpečené místnosti.

## Použijte zálohy počítače

Váš operační systém sám nabízí možnosti vytváření záloh, ať už online v cloudu, nebo na externím disku.

- **[Windows](https://www.microsoft.com/en-us/windows/learning-center/back-up-files)**: Zálohování pomocí OneDrive nebo externího disku.
- **[Mac](https://support.apple.com/en-us/104984)**: Zálohování na externí zařízení pomocí Time Machine.
- **[Linux](https://linuxize.com/post/how-to-use-rsync-for-local-and-remote-data-transfer-and-synchronization/)**: `rsync` do adresáře nebo na disk dle výběru.

## Další kroky

Tato stránka nápovědy poskytuje stručný přehled možností zálohování, ale není vyčerpávající. Pro podrobnější informace navštivte [Worldbackupday.com](https://www.worldbackupday.com/en) nebo se zeptejte ostatních uživatelů Obsidian v [naší komunitě](https://obsidian.md/community) na jejich zálohovací strategie!
