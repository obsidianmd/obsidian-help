---
permalink: teams/deploy
cssclasses:
  - soft-embed
---
Obsidian běží jako lokální aplikace na zařízeních každého člena vašeho týmu. Je navržen tak, aby fungoval online i offline, bezpečně a soukromě, a poskytuje vám plnou kontrolu nad daty vašeho týmu. Obsidian není dostupný jako webová aplikace, proto budete muset aplikaci nasadit na zařízení členů vašeho týmu.

## Instalace a aktualizace Obsidian

Váš tým si může stáhnout Obsidian z naší [stránky ke stažení](https://obsidian.md/download). Vydání jsou také dostupná na naší [stránce GitHub releases](https://github.com/obsidianmd/obsidian-releases/releases), která obsahuje odkazy na [seznam změn](https://obsidian.md/changelog/).

> [!tip] Pro uživatele Windows, kteří potřebují systémový instalátor, univerzální `.exe` obsahuje možnost nainstalovat Obsidian pro všechny uživatele.

Pokud jsou v aplikaci zapnuté automatické aktualizace, budoucí verze se nainstalují automaticky, když uživatelé restartují Obsidian. Kromě toho doporučujeme pravidelně provádět [[Aktualizace Obsidian#Aktualizace instalátoru|aktualizace instalátoru]], abyste získali nejnovější aktualizace frameworku Electron, včetně bezpečnostních oprav.

Pokud hledáte, jak omezit síťový přístup k Obsidian během tohoto procesu, podívejte se na [[Bezpečnostní aspekty pro týmy#Síť a přístup|síť a přístup]].

## Přizpůsobení Obsidian

Obsidian je snadné upravit podle potřeb vašeho týmu. S rozsáhlým API a velkým ekosystémem uživatelů nabízí Obsidian přístup k mnoha pluginům, motivům a doplňkovým nástrojům.

Pro otázky týkající se bezpečnosti v souvislosti s těmito tématy se prosím podívejte na [[Bezpečnostní aspekty pro týmy]].

### Konfigurační složky

[[Konfigurační složka]] je místo, kde [[Slovníček pojmů#Vault|trezor]] Obsidian ukládá svá nastavení aplikace. Ve výchozím nastavení se tato složka jmenuje `.obsidian`, ale máte flexibilitu [[Konfigurační složka#Změna konfigurační složky|změnit název konfigurační složky]] podle svých preferencí.

Doporučujeme vytvořit standardizovanou šablonu konfigurační složky, která bude nasazena na zařízení vašeho týmu.

### Pluginy

[[Základní pluginy]] jsou volitelné funkce vytvořené týmem Obsidian. Tyto funkce jsou integrovány v základním kódu aplikace a lze je zapnout nebo vypnout.

[[Komunitní pluginy]] jsou funkce třetích stran přidané do aplikace Obsidian a lze je nainstalovat prostřednictvím komunitního adresáře. Pluginy třetích stran využívají [Obsidian API](https://github.com/obsidianmd/obsidian-api). Pluginy se nacházejí ve složce `.obsidian/plugins` v rámci trezoru a lze je do tohoto umístění nainstalovat ručně.

### Motivy a úryvky

[[Motivy]] vizuálně mění rozhraní Obsidian. Stejně jako pluginy lze motivy stáhnout z našeho komunitního adresáře. Motivy se nacházejí ve složce `.obsidian/themes` v rámci trezoru.

[[CSS úryvky|Úryvky]] jsou malé soubory `.css`, které vizuálně upravují aspekty rozhraní Obsidian. V některých případech mohou také přidávat funkční vylepšení. Úryvky se nacházejí ve složce `.obsidian/snippets` v rámci trezoru.

## Často kladené otázky

Pro otázky týkající se správy účtů a bezpečnosti se prosím podívejte na [[Bezpečnostní aspekty pro týmy#Zabezpečení účtu|zabezpečení účtu]].

### Nasazení

**Mohu nasadit licence napříč více instalacemi?**
V současné době nepodporujeme nasazení licencí prostřednictvím nasazovacího skriptu, například v souboru `.json`. Pokud máte zájem o tuto funkci pro váš tým, prosím odešlete [žádost o funkci](https://forum.obsidian.md/c/feature-requests/8).

**Může Obsidian uzamknout určité funkce nebo konfigurace prostřednictvím nastavení nebo přepínače aplikace?**
V současné době to můžete provést zablokováním přístupu k úpravám složky `.obsidian` nebo konkrétních souborů a složek v ní, jak je popsáno výše. Pokud máte zájem o více možností řízení přístupu pro váš tým, prosím odešlete [žádost o funkci](https://forum.obsidian.md/c/feature-requests/8).
