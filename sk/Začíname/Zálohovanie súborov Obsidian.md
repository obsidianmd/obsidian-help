---
permalink: backup
---
Ak ste si ešte nezálohovali počítač, začnite teraz! Plugin [[Obnova súboru]] v Obsidian je užitočný, ale obmedzený. Dokáže obnoviť iba určité množstvo dát a informácie o obnove ukladá na zariadenie. Pre robustnejšiu ochranu odporúčame implementovať riadny zálohovací systém.

**Prečo zálohovať vaše dáta?**

V predvolenom nastavení Obsidian ukladá vaše poznámky **lokálne** na vašom zariadení, nie v cloude. To znamená, že [dáta sú plne vaše](https://obsidian.md/about), čo vám dáva kontrolu nad nimi. Lokálne úložisko však môže byť ovplyvnené problémami ako poškodenie alebo strata dát. Nikdy nie je otázkou či, ale kedy. Zálohovanie vašich dát chráni pred týmito nevyhnutnosťami a zaisťuje, že si udržíte kontrolu nad svojimi poznámkami.

## Synchronizácia nie je záloha

Služby ako [[Úvod do Obsidian Sync|Obsidian Sync]], iCloud, OneDrive a Dropbox vám pomáhajú synchronizovať poznámky medzi rôznymi zariadeniami. Aj keď môžu ponúkať funkcie ako [[História verzií|obnovenie poznámok]], **nie sú navrhnuté na zálohovanie**. Synchronizácia udržuje vaše poznámky aktuálne, ale nechráni pred stratou dát.

- **Synchronizácia:** Synchronizácia zabezpečuje, že vaše súbory sú rovnaké na všetkých zariadeniach. Keď zmeníte súbor na jednom zariadení, aktualizuje sa na všetkých synchronizovaných zariadeniach. Synchronizačné služby nemajú „primárne" zariadenie.
- **Záloha:** Záloha ukladá kópiu vašich dát na inom mieste, aby bolo možné ich obnoviť v prípade straty dát alebo poškodenia. Zálohy nie sú určené na aktualizácie v reálnom čase ani na spoluprácu.

Na správne zálohovanie vášho trezoru použite dedikovaný zálohovací nástroj, ktorý vytvorí jednosmernú kópiu vašich dát. Tento nástroj odošle vaše dáta na bezpečné zálohovacie miesto bez zmeny dát na vašom zariadení.

Ak používate viacero zariadení so synchronizáciou, vyberte **jedno zariadenie** ako svoje zálohovacie zariadenie. Zvyčajne to je vaše hlavné alebo „primárne" zariadenie, to, ktoré používate najčastejšie. Upozorňujeme, že väčšina synchronizačných služieb nerozpoznáva žiadne zariadenie ako „primárne"; je to len koncept, ktorý vám pomôže spravovať zálohy.

> [!Example] Používate Obsidian Sync na notebooku, tablete, telefóne a pracovnom stolnom počítači. Svoj trezor používate väčšinou na pracovnom stolnom počítači, niekedy na notebooku a zriedkavo na tablete alebo telefóne. V tomto prípade by váš pracovný stolný počítač bol vaším „primárnym zariadením" na zálohovanie.

## Použitie komunitných pluginov

Aj keď tím Obsidian nemôže oficiálne odporučiť žiadny konkrétny plugin, uznávame dva komunitné pluginy, ktoré sa stali populárnymi medzi používateľmi na zálohovanie ich súborov:

- **[Obsidian Git](https://obsidian.md/plugins?id=obsidian-git):** Použite tento plugin na zálohovanie vášho trezoru commitovaním jeho obsahu do [Git repozitára](https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository). Je to efektívny spôsob verzionovania vašich poznámok a zabezpečenia ich bezpečnosti na vzdialenom serveri. Upozorňujeme však, že vaše dáta môžu byť pri tejto metóde uložené na [[#Použitie cloudových služieb|externej hostingovej platforme]].
- **[Local Backup](https://obsidian.md/plugins?id=local-backup):** Tento plugin vám umožňuje vytvárať lokálne kópie vášho trezoru v priečinku podľa vášho výberu s možnosťami archivácie. Môžete dokonca použiť synchronizačný priečinok, ako je priečinok Dropbox, na kombinovanie lokálnych a cloudových záloh. Táto metóda sa **dobre dopĺňa** s možnosťami zálohovania popísanými nižšie.

## Použitie cloudových služieb

> [!info] Neodporúča sa uchovávať umiestnenie vášho trezoru vo vami zvolenej zálohovacej službe.

Uchovávanie zálohy v cloude je alternatívou a doplnkom k fyzickému úložisku dát, namiesto externého pevného disku alebo USB kľúča. Externý pevný disk alebo USB kľúč sa môže stratiť alebo poškodiť. Najväčšou výhodou ukladania súborov v cloude je, že sú dostupné kedykoľvek a kdekoľvek. Nevýhodou je, že väčšina zálohovacích služieb je vlastnená súkromnou spoločnosťou.

Z hľadiska bezpečnosti by ste mali vždy venovať veľkú pozornosť prístupu a zabezpečeniu cloudových záloh. [Worldbackupday](https://www.worldbackupday.com/en) udržiava aktuálny zoznam online zálohovacích služieb, ktoré je vhodné zvážiť.

## Použitie externých diskov

**Pevné disky a SSD disky**
Zálohy na externom pevnom disku sú stále hodnotné v čoraz viac cloudovom svete a používajú sa hlavne na ukladanie dát a zálohovanie počítačov. Najväčšou nevýhodou externého disku je, že sa môže pokaziť alebo stratiť. Najväčšou výhodou je, že úložný priestor je potrebné zakúpiť iba raz. Používanie externého pevného disku sa často kombinuje so [[#Použitie záloh počítača|zálohou počítača]].

**USB flash disky**
Flash disky (nazývané aj pamäťové kľúče alebo USB kľúče) sú jednoduchý a efektívny spôsob na rýchle zálohy.

1. Vložte flash disk do počítača alebo notebooku.
2. Uistite sa, že zariadenie je rozpoznané a pripojené vo vašom súborovom systéme. V prípade potreby naformátujte flash disk tak, aby bol kompatibilný s vaším súborovým systémom.
3. Skopírujte priečinok vášho trezoru z jeho aktuálneho umiestnenia na flash disk.
4. Bezpečne odpojte flash disk.
5. Vyberte flash disk z vášho zariadenia.

**Záloha na NAS**
Pre skúsených používateľov je zálohovanie dát na NAS (Network Attached Storage) serveri dobrá a bezpečná metóda, keďže má viacero pevných diskov a ďalšie mechanizmy obnovy.

> [!tip] Ak váš externý disk obsahuje citlivé informácie, odporúča sa uchovávať externý disk na bezpečnom mieste, napríklad v zabezpečenej miestnosti.

## Použitie záloh počítača

Váš operačný systém sám ponúka možnosť pomôcť vytvoriť zálohy, či už online v cloude, alebo na externom disku.

- **[Windows](https://www.microsoft.com/en-us/windows/learning-center/back-up-files)**: Zálohovanie pomocou OneDrive alebo externého disku.
- **[Mac](https://support.apple.com/en-us/104984)**: Zálohovanie na externé zariadenie pomocou Time Machine.
- **[Linux](https://linuxize.com/post/how-to-use-rsync-for-local-and-remote-data-transfer-and-synchronization/)**: `rsync` do adresára alebo na disk podľa výberu.

## Ďalšie kroky

Táto stránka pomocníka poskytuje stručný prehľad možností zálohovania, ale nie je vyčerpávajúca. Pre podrobnejšie informácie navštívte [Worldbackupday.com](https://www.worldbackupday.com/en) alebo sa opýtajte ostatných používateľov Obsidian v [našej komunite](https://obsidian.md/community) na ich zálohovacie stratégie!
