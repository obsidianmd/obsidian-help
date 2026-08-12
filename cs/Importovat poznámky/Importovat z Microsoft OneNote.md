---
permalink: import/onenote
---
Obsidian vám umožňuje snadno migrovat vaše poznámky z Microsoft OneNote pomocí [[Importér|pluginu Importér]]. Ten převede vaše data z OneNote do trvanlivých Markdown souborů, které můžete používat s Obsidian a mnoha dalšími aplikacemi.

Obsidian nabízí dva způsoby importu dat z OneNote:

1. **Účet Microsoft** přihlásí se k vašemu účtu Microsoft a importuje poznámkové bloky synchronizované na OneDrive. Vyžaduje internetové připojení.
2. **Import souborů** používá exportní soubory OneNote (`.onepkg` a `.one`). Nevyžaduje účet ani internetové připojení a funguje i pro poznámkové bloky, které nebyly nikdy synchronizovány.

## Import z vašeho účtu Microsoft

> [!Warning]
> Importovat lze pouze poznámkové bloky vlastněné vaším účtem. Poznámkové bloky, které s vámi sdíleli jiní lidé, nejsou podporovány a u pracovního nebo školního účtu může být nutné, aby vaše organizace schválila přístup.

Budete potřebovat oficiální plugin Obsidian [[Importér]], který můžete [nainstalovat zde](obsidian://show-plugin?id=obsidian-importer).

1. Otevřete **[[Nastavení]]**.
2. Přejděte na **Komunitní pluginy** a [nainstalujte Importér](obsidian://show-plugin?id=obsidian-importer).
3. Zapněte plugin Importér.
4. Otevřete plugin **Importér** pomocí palety příkazů nebo ikony na postranním panelu nástrojů.
5. V poli **Formát souboru** vyberte **Microsoft OneNote**.
6. Klikněte na **Přihlásit se** pro otevření webového prohlížeče na přihlašovací stránce Microsoftu. Zadejte přihlašovací údaje k vašemu účtu Microsoft, který obsahuje vaše poznámkové bloky OneNote. Více informací o procesu přihlašování k Microsoftu naleznete níže.
7. Klikněte na **Přijmout** pro udělení oprávnění Obsidian k zobrazení vašich poznámkových bloků OneNote.
8. Klikněte na **Otevřít odkaz** pro povolení přesměrování prohlížeče do aplikace Obsidian.
9. V aplikaci Obsidian dialog Importéru nyní zobrazí, že jste přihlášeni, a vypíše vaše poznámkové bloky a sekce OneNote. Zaškrtněte sekce, které chcete importovat.
10. Klikněte na **Importovat** a počkejte, dokud nebude import dokončen.
11. Hotovo!

Pokud vaše poznámkové bloky patří k pracovnímu nebo školnímu účtu, OneNote může pluginu po přihlášení odmítnout přístup k nim. V takovém případě se vedle **Odhlásit se** zobrazí tlačítko **Použít pracovní nebo školní přístup**. Použijte ho k opětovnému přihlášení s širšími oprávněními, která tyto účty vyžadují. Vaše organizace může potřebovat toto oprávnění schválit, než bude fungovat.

### Řešení problémů

#### Nezobrazují se žádné sekce ani poznámkové bloky

Ujistěte se, že poznámkové bloky, které se snažíte importovat, jsou synchronizovány na OneDrive a viditelné v OneNote Web. Musí být ve vašem vlastnictví (sdílené poznámkové bloky napsané jinými uživateli nejsou podporovány).

Pokud konkrétní sekce chybí, ujistěte se, že nejde o zamčenou sekci, protože ty jsou neviditelné, dokud zámek neodstraníte.

Pokud se jedná o pracovní nebo školní poznámkový blok, podívejte se na poznámku o **Použít pracovní nebo školní přístup** výše.

#### Importované poznámky jsou prázdné nebo chybí obsah

Tento problém se může vyskytnout u poznámkových bloků, které používáte zřídka. Pro vyřešení problému postupujte podle těchto kroků:

1. Otevřete [OneNote Web](https://onenote.com/notebooks) ve svém prohlížeči.
2. **Klikněte pravým tlačítkem** na poznámkové bloky, ve kterých chybí obsah.
3. Z nabídky vyberte **Exportovat poznámkový blok**.
4. **Rozbalte** stažený soubor do složky.
5. Nahrajte své poznámkové bloky OneNote [zde](https://www.onenote.com/notebooks/exportimport?toImport=true).
6. Otevřete **Obsidian Importér** a zkuste import znovu.

Pokud jste postupovali podle těchto tipů a váš problém zůstává nevyřešen, je možné, že se jedná o dočasný problém se servery Microsoftu. V takovém případě počkejte několik minut a zkuste to znovu. Pokud problém přetrvává, otevřete prosím hlášení na [GitHub repozitáři Obsidian Importer](https://github.com/obsidianmd/obsidian-importer/issues).

## Import souborů OneNote (.one, .onepkg)

Import souborů je alternativní způsob importu dat z OneNote. Čte exportní soubory, které OneNote sám vytváří, takže nepotřebuje účet Microsoft ani internetové připojení. Použijte ho pro poznámkové bloky uložené pouze na vašem počítači, poznámkové bloky, ke kterým váš účet nemá přístup, nebo pokud se raději nechcete přihlašovat.

### Export poznámkových bloků z OneNote

Doporučujeme exportovat každý poznámkový blok jako **OneNote Package** (`.onepkg`). Jeden balíček obsahuje všechny sekce poznámkového bloku, takže můžete poznámkový blok exportovat a importovat v jednom kroku a Importér vám zobrazí seznam sekcí k výběru.

Export je dostupný pouze v **OneNote pro Windows**, desktopové aplikaci dodávané s Microsoft 365. Aplikace OneNote pro Mac a starší aplikace OneNote pro Windows 10 do těchto formátů exportovat neumí.

1. Otevřete poznámkový blok, který chcete exportovat, v OneNote pro Windows.
2. Přejděte na **Soubor → Export**.
3. V části **Exportovat aktuální** vyberte **Poznámkový blok**.
4. V části **Vybrat formát** vyberte **OneNote Package (\*.onepkg)**.
5. Klikněte na **Export** a zvolte, kam soubor uložit.
6. Opakujte pro každý poznámkový blok, který chcete importovat.

Chcete-li exportovat pouze jednu sekci, vyberte v kroku 3 **Sekce** a v kroku 4 **OneNote 2010-2016 Section (\*.one)**.

Můžete také importovat soubory sekcí, které OneNote již ukládá na disk, bez nutnosti exportu:

- Poznámkové bloky uložené na vašem počítači jsou v `Documents\OneNote Notebooks`, jeden soubor `.one` na sekci.
- Zálohy synchronizovaných poznámkových bloků jsou v `%LOCALAPPDATA%\Microsoft\OneNote\16.0\Backup`.

### Import souborů OneNote

Budete potřebovat oficiální plugin Obsidian [[Importér]], který můžete [nainstalovat zde](obsidian://show-plugin?id=obsidian-importer).

1. Otevřete **[[Nastavení]]**.
2. Přejděte na **Komunitní pluginy** a [nainstalujte Importér](obsidian://show-plugin?id=obsidian-importer).
3. Zapněte plugin Importér.
4. Otevřete plugin **Importér** pomocí palety příkazů nebo ikony na postranním panelu nástrojů.
5. V poli **Formát souboru** vyberte **Microsoft OneNote (.one, .onepkg)**.
6. Vyberte soubory `.onepkg` a `.one`, které chcete importovat. Můžete vybrat více souborů najednou, takže všechny vaše poznámkové bloky lze importovat společně.
7. V části **Sekce k importu** jsou uvedeny sekce nalezené v těchto souborech, vše je zaškrtnuté. Odškrtněte cokoli, co nechcete.
8. Volitelně zvolte **Výstupní složku** pro import, kam se mají ukládat přílohy a co se má stát s **Existujícími poznámkami**, pokud stejný poznámkový blok importujete znovu.
9. Klikněte na **Importovat** a počkejte, dokud nebude import dokončen.
10. Hotovo!

Každá sekce se stane složkou a každá stránka v ní se stane poznámkou. Podstránka se uloží do složky pojmenované podle nadřazené stránky, což zachovává strukturu zobrazenou v OneNote a zabraňuje kolizi dvou podstránek se stejným názvem. Stránky v koši poznámkového bloku se neimportují.

### Omezení

- Sekce chráněné heslem jsou uloženy zašifrovaně a jejich stránky se přeskočí. Odstraňte heslo v OneNote a exportujte znovu, abyste je mohli importovat.
- Soubory chráněné právy lze otevřít pouze účtem, který zásady povolují, a Importér je nemůže přečíst.

## Soukromí

Pokud zvolíte import pomocí vašeho účtu Microsoft, plugin Obsidian Importér používá [OAuth](https://learn.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-auth-code-flow) k ověření a importu vašich poznámkových bloků OneNote. Tím se udělí krátkodobý přístupový token k vašemu účtu, který se používá pouze z vašeho počítače a nikdy se neukládá. Po dokončení importu můžete volitelně token odvolat na [stránce aplikací a služeb Microsoftu](https://account.live.com/consent/Manage).

Import souborů se nikdy nepřipojuje k Microsoftu: vybrané soubory se čtou na vašem počítači bez jakéhokoli síťového připojení.
