---
permalink: import/onenote
---
Obsidian vám umožňuje snadno migrovat vaše poznámky z Microsoft OneNote pomocí [[Importér|pluginu Importér]]. Ten převede vaše data z OneNote do trvanlivých Markdown souborů, které můžete používat s Obsidian a mnoha dalšími aplikacemi.

> [!Warning]
> Importovat lze pouze poznámkové bloky vlastněné vaším osobním účtem. Sdílené poznámky nebo účty z pracovních a školních účtů nejsou podporovány.

## Import dat z OneNote do Obsidian

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

![[OneNote-Importer-Select-Sections.png]]

10. Klikněte na **Importovat** a počkejte, dokud nebude import dokončen.
11. Hotovo!

## Řešení problémů

### Nezobrazují se žádné sekce ani poznámkové bloky

Ujistěte se, že poznámkové bloky, které se snažíte importovat, jsou synchronizovány na OneDrive a viditelné v OneNote Web. Musí být ve vašem vlastnictví (sdílené poznámkové bloky napsané jinými uživateli nejsou podporovány).

Pokud konkrétní sekce chybí, ujistěte se, že nejde o zamčenou sekci — ty jsou neviditelné, dokud zámek neodstraníte.

### Importované poznámky jsou prázdné nebo chybí obsah

Tento problém se může vyskytnout u poznámkových bloků, které používáte zřídka. Pro vyřešení problému postupujte podle těchto kroků:

1. Otevřete [OneNote Web](https://onenote.com/notebooks) ve svém prohlížeči.
2. **Klikněte pravým tlačítkem** na poznámkové bloky, ve kterých chybí obsah.
3. Z nabídky vyberte **Exportovat poznámkový blok**.
4. **Rozbalte** stažený soubor do složky.
5. Nahrajte své poznámkové bloky OneNote [zde](https://www.onenote.com/notebooks/exportimport?toImport=true).
6. Otevřete **Obsidian Importér** a zkuste import znovu.

Pokud jste postupovali podle těchto tipů a váš problém zůstává nevyřešen, je možné, že se jedná o dočasný problém se servery Microsoftu. V takovém případě počkejte několik minut a zkuste to znovu. Pokud problém přetrvává, otevřete prosím hlášení na [GitHub repozitáři Obsidian Importer](https://github.com/obsidianmd/obsidian-importer/issues).

## Soukromí

Plugin Obsidian Importér používá [OAuth](https://learn.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-auth-code-flow) k ověření vašeho účtu Microsoft a importu vašich poznámkových bloků OneNote. Tím se udělí krátkodobý přístupový token k vašemu účtu, který se používá pouze z vašeho počítače a nikdy se neukládá. Po dokončení importu můžete volitelně token odvolat na [stránce aplikací a služeb Microsoftu](https://account.live.com/consent/Manage).
