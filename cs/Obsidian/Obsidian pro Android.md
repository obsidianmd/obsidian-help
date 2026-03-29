---
permalink: android
---
Mobilní aplikace Obsidian pro Android přináší výkonné možnosti pro psaní poznámek na vaše zařízení s Androidem. Můžete ji stáhnout z [Google Play](https://play.google.com/store/apps/details?id=md.obsidian) nebo jako [soubor APK](https://obsidian.md/download).
Podporuje Android verze 5.1 a vyšší.

Tato stránka popisuje funkce specifické pro Android, včetně widgetů, integrace Rychlých nastavení a zkratek.

## Synchronizace

Pro synchronizaci poznámek s Obsidian na Androidu viz [[Synchronizace poznámek mezi zařízeními]].

## Umístění trezoru

Při prvním spuštění Obsidian na Androidu budete požádáni o výběr místa pro uložení dat trezoru. Můžete zvolit **úložiště zařízení** (doporučeno) nebo **úložiště aplikace**.

### Úložiště zařízení

S volbou **úložiště zařízení** jsou vaše data uložena ve sdíleném umístění na vašem zařízení. To umožňuje přístup k vašemu trezoru Obsidian z jiných aplikací a služeb, jako jsou nástroje pro [[Synchronizace poznámek mezi zařízeními|synchronizaci]] třetích stran.

Tato volba je doporučená, protože nabízí lepší kompatibilitu s nástroji pro synchronizaci a zajišťuje, že vaše data zůstanou zachována i po odinstalování aplikace. Tato volba však vyžaduje další oprávnění pro přístup k souborům na vašem zařízení.

Kvůli omezením Androidu si Obsidian vyžádá přístup „Ke všem souborům", aby mohl spolehlivě fungovat. Google toto doporučuje pro aplikace jako Obsidian, které jsou považovány za „aplikace pro správu dokumentů". [Zjistit více](https://developer.android.com/training/data-storage/manage-all-files).

Aplikace toto oprávnění používá pouze k tomu, aby vám umožnila přístup k vašim datům na vašem zařízení. Vaše data pro nás nikdy nejsou přístupná. Chcete-li se dozvědět více o tom, jak chráníme vaše data a zajišťujeme vaše soukromí, navštivte naši [stránku o zabezpečení](https://obsidian.md/security).

### Úložiště aplikace

S volbou **úložiště aplikace** jsou vaše data uložena v soukromém úložišti aplikace Obsidian. To udržuje vaše data izolovaná od ostatních aplikací pro zvýšení soukromí.

Toto je dobrá volba, pokud nepoužíváte žádné externí nástroje pro synchronizaci a dáváte přednost přísnějšímu sandboxingu na úrovni aplikace pro vaše poznámky.

S touto volbou můžete používat [[Úvod do Obsidian Sync|Obsidian Sync]] a synchronizační pluginy třetích stran dostupné prostřednictvím [[Komunitní pluginy|Komunitních pluginů]], ale nemůžete používat nástroje jako Syncthing, které spoléhají na sdílené úložiště.

> [!warning] Odinstalování Obsidian smaže vaše místní poznámky, pokud používáte úložiště aplikace
> Pokud používáte volbu **Úložiště aplikace**, vaše místní data trezoru budou při odinstalování aplikace smazána. Data vašeho trezoru Obsidian na jiných zařízeních nebudou smazána.

## Widgety

Obsidian pro Android nabízí několik možností widgetů pro rychlý přístup k vašim trezorům a poznámkám z domovské obrazovky. Dostupné widgety zahrnují:

- **Otevřít poznámku** — Otevře konkrétní poznámku
- **Nová poznámka** — Vytvoří novou poznámku
- **Hledat** — Spustí vyhledávací dotaz
- **Denní poznámka** — Otevře vaši denní poznámku
- **Otevřít Obsidian** — Spustí aplikaci

> [!note] Poznámka
> Tyto widgety jsou statické a nezobrazují žádné náhledy vybrané poznámky ani trezoru.

Přidání widgetů na domovskou obrazovku:
1. Klepněte a podržte kdekoli na domovské obrazovce
2. Vyberte „Widgety"
3. Najděte Obsidian a poté vyberte widget, který chcete použít.

> [!note] Poznámka
> Widgety Obsidian lze měnit velikost. Pro změnu velikosti widgetu na něj klepněte a podržte, poté přetáhněte úchyty pro změnu velikosti.

Můžete přidat více widgetů stejného typu pro otevírání různých souborů nebo spouštění různých vyhledávacích dotazů.

Pro konfiguraci widgetu na něj na domovské obrazovce dlouze stiskněte a poté najděte možnost „Upravit" nebo „Nastavit". To vám umožní zadat konkrétní parametry potřebné pro akci widgetu po klepnutí, jako je Soubor nebo Cesta, Vyhledávací dotaz a Název trezoru.

Více informací o widgetech na Androidu najdete v tomto [článku podpory Google](https://support.google.com/android/answer/9450271?hl=en).

## Dlaždice Rychlých nastavení

Vyžaduje Android 7.0 nebo vyšší.

Přidejte dlaždici Rychlých nastavení Obsidian pro rychlý přístup k aplikaci z oznamovací lišty. Funguje na domovské obrazovce i na zamykací obrazovce.

> [!note] Poznámka
> Na rozdíl od widgetů aplikace můžete přidat pouze jednu dlaždici Rychlých nastavení stejného typu.

Přidání dlaždice Rychlých nastavení do oznamovací lišty:

1. Otevřete oznamovací lištu, obvykle potažením dolů ze stavového řádku. Poznámka: pro zobrazení dalších možností může být nutné potáhnout ještě jednou.
2. V dlaždicích Rychlých nastavení vyberte „Upravit" – obvykle se jedná o stejnou sekci, kde se nacházejí přepínače jako Wi-Fi, Bluetooth a Zámek orientace.
3. Najděte a vyberte dlaždici Rychlých nastavení Obsidian a poté ji přesuňte na požadované místo.
4. Pro konfiguraci dlaždice Rychlých nastavení na ni klepněte a podržte, čímž se zobrazí obrazovka konfigurace.

Více informací o Rychlých nastaveních na Androidu najdete v tomto [článku podpory Google](https://support.google.com/android/answer/9083864?hl=en).

## Zkratky

Vyžaduje Android 7.1 nebo vyšší.

Obsidian poskytuje zkratky aplikace, ke kterým lze přistupovat několika způsoby:

- Dlouhým stisknutím ikony aplikace Obsidian
- Přetažením ikony zkratky na domovskou obrazovku
- Přístupem přes vyhledávací lištu na launcheru (dostupné u většiny výrobců zařízení)

Dostupné zkratky:

- **Otevřít poznámku** — Otevře konkrétní poznámku ve vašem trezoru
- **Denní poznámka** — Přejde přímo na dnešní denní poznámku

> [!note] Poznámka
> Zkratky v Obsidian 1.11 nejsou konfigurovatelné a v pozdějších verzích budou přepracovány tak, aby nabízely dynamičtější možnosti přizpůsobené vašim konkrétním poznámkám.
