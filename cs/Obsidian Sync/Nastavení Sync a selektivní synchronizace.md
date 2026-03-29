---
permalink: sync/settings
publish: true
mobile: true
description: 'Tato stránka vysvětluje nastavení synchronizace a pomůže vám vybrat, které soubory synchronizovat.'
---
Když [[Plány a limity úložiště#Vytvoření nového vzdáleného trezoru|vytvoříte vzdálený trezor]] a [[Nastavení Obsidian Sync#Připojení ke vzdálenému trezoru|připojíte se k němu]], základní plugin Sync se stane místem pro správu vašeho vzdáleného trezoru.

## Nastavení Sync

**Vzdálený trezor**
Tato sekce zobrazuje váš aktuálně připojený vzdálený trezor. Obsahuje tlačítko **Odpojit** pro odpojení od vzdáleného trezoru a tlačítko **Spravovat** pro zobrazení všech vzdálených trezorů, ke kterým má váš účet přístup (včetně sdílených trezorů prostřednictvím [[Spolupráce na sdíleném trezoru|spolupráce]]).

> [!warning]+ Vzdálený trezor ve službě synchronizace třetí strany
> Pokud se váš vzdálený trezor nachází ve službě synchronizace třetí strany, uvidíte červenou chybovou zprávu. Postupujte podle kroků v [[Přechod na Obsidian Sync]] k vyřešení tohoto problému.

**Stav synchronizace**
Zobrazuje aktuální stav synchronizace vzdáleného trezoru. Tato sekce obsahuje buď tlačítko **Pozastavit**, nebo **Obnovit**, v závislosti na stavu.

**Název zařízení**
Přiřaďte jedinečný název zařízení, které aktuálně synchronizuje. To pomáhá sledovat aktivitu v [[Stavová ikona a zprávy#Záznam aktivity Sync|záznamu synchronizace]]. Toto nastavení je specifické pro zařízení, stejně jako [[#Selektivní synchronizace]].

**[[#Řešení konfliktů]]**
Zvolte způsob řešení konfliktů, když upravíte soubor na více zařízeních. Toto nastavení je specifické pro zařízení, stejně jako [[#Selektivní synchronizace]].

**Odstraněné soubory**
Obsahuje tlačítko pro **Zobrazení** nebo **Obnovení** smazaných souborů. Další podrobnosti naleznete v [[Historie verzí]].

**Velikost trezoru**
Zobrazuje ukazatel průběhu znázorňující, kolik úložiště pro synchronizaci je využito.

> [!tip]- Doba zpracování na serveru
> Aktualizace aktuálního využití může trvat až 30 minut kvůli zpracování na straně serveru.

**Kontaktovat podporu**
Poskytuje pokyny, jak [[Nápověda a podpora#Kontaktování podpory Obsidian|kontaktovat podporu Obsidian]], včetně možností **Kopírovat debug informace** a **E-mailová podpora**.

### Řešení konfliktů

Zvolte způsob řešení konfliktů, když upravíte soubor na více zařízeních před synchronizací. Můžete automaticky sloučit změny nebo vytvořit samostatné konfliktní soubory pro ruční kontrolu. Podrobnosti o tom, jak konflikty fungují a jak toto nastavení konfigurovat, naleznete v [[Řešení problémů s Obsidian Sync#Řešení konfliktů|Řešení konfliktů]].

> [!warning]+ Nastavte na každém zařízení
> Toto nastavení musí být nakonfigurováno zvlášť na každém zařízení.

---

V nastavení základního pluginu Sync si také můžete zvolit, co synchronizovat. Tato sekce pokrývá **selektivní synchronizaci** a **synchronizaci nastavení trezoru** spolu s příslušnými upozorněními.

## Selektivní synchronizace

Soubory synchronizované do vašeho [[Místní a vzdálené trezory|vzdáleného trezoru]] přispívají k vašemu [[Často kladené otázky#How large can each remote vault be|limitu úložiště]]. Ve výchozím nastavení Obsidian Sync aktivuje **selektivní synchronizaci** pro následující typy souborů:
- Obrázky
- Audio
- Videa
- PDF

Pro synchronizaci dalších typů souborů přepněte možnost `Synchronizovat všechny ostatní typy souborů`.

Výchozí nastavení **synchronizace nastavení trezoru** zahrnuje:
- Jiné typy souborů
- Hlavní nastavení
- Vzhled
- Motivy a úryvky
- Klávesové zkratky
- Seznam aktivních základních pluginů
- Nastavení základních pluginů

Pro synchronizaci komunitních pluginů ručně povolte **Seznam aktivních komunitních pluginů** a **Seznam nainstalovaných komunitních pluginů**.

### Změna typů souborů pro synchronizaci

1. Otevřete **[[Nastavení]] → Sync**.
2. V sekci **Selektivní synchronizace** povolte typy souborů, které chcete synchronizovat.
3. Restartujte aplikaci pro použití nových nastavení. Na mobilních zařízeních nebo tabletech může být nutné vynucené ukončení.

Upozorňujeme, že váš [[Plány a limity úložiště|plán Sync]] definuje maximální velikost souboru, který můžete synchronizovat. Standardní plán umožňuje synchronizaci souborů do 5 MB, zatímco plán Plus podporuje soubory do 200 MB.

> [!info]+ Vyloučené soubory zůstávají ve vzdáleném trezoru
> Přidání souboru do seznamu **Vyloučené soubory** jej neodstraní ze vzdáleného trezoru, pokud již byl synchronizován. Nakonfigurujte nastavení Sync před synchronizací, abyste se vyhnuli zbytečnému využití úložiště.

### Vyloučení složky ze synchronizace

Ve výchozím nastavení Obsidian synchronizuje všechny soubory a složky ve vašem trezoru. Pro vyloučení konkrétní složky ze synchronizace:
1. Otevřete **[[Nastavení]] → Sync**.
2. Vedle **Vyloučené složky** vyberte **Spravovat**.
3. Vyberte složku, kterou chcete vyloučit, ze seznamu.
4. Vyberte **Hotovo**.

Pro odebrání složky ze seznamu vyloučení vyberte tlačítko ![[lucide-x.svg#icon]] vedle názvu složky.

#### Vždy vyloučeno ze synchronizace

##### Snímky obnovení souborů

Snímky v pluginu [[Obnovení souborů]] nejsou synchronizovány prostřednictvím Obsidian Sync, protože snímky jsou uchovávány v [[Jak Obsidian ukládá data#Globální nastavení|Globálním nastavení]].

##### Skryté soubory a složky

Soubory a složky začínající `.` jsou považovány za skryté a jsou vyloučeny ze synchronizace. Jedinou výjimkou je [[Konfigurační složka|konfigurační složka]] trezoru (`.obsidian`), která se synchronizuje.

Běžné příklady skrytých souborů a složek, které nejsou synchronizovány:
- `.vscode`
- `.git`
- `.idea`
- `.gitignore`

##### Nastavení Sync

Nastavení Sync se nesynchronizují mezi zařízeními. Je třeba je na každém zařízení nakonfigurovat zvlášť podle potřeby.

## Aktualizace nastavení synchronizovaného trezoru

Pro úpravu nastavení synchronizace na více zařízeních postupujte podle těchto kroků:

> [!tip]- Primární a sekundární zařízení
> Pojmy „primární" a „sekundární" zařízení slouží pouze pro přehlednost. Sync mezi nimi nerozlišuje.

### Primární zařízení

Primární zařízení slouží jako zdroj pravdy. Změny provedené zde se synchronizují na všechna ostatní zařízení.

1. Přejděte na **[[Nastavení]] → Sync**.
2. Aktivujte požadovaná nastavení v sekci **Synchronizovat nastavení trezoru**.
3. Znovu načtěte nebo restartujte Obsidian. Na mobilních zařízeních nebo tabletech může být nutné vynucené ukončení.
4. Počkejte, než se nastavení synchronizuje s vaším vzdáleným trezorem.

### Sekundární zařízení

Sekundární zařízení (například váš telefon) přijímají aktualizace z primárního zařízení.

1. Přejděte na **[[Nastavení]] → Sync**.
2. Povolte potřebná nastavení v sekci **Synchronizovat nastavení trezoru**.
3. Počkejte na stažení změn ze vzdáleného trezoru.
4. Znovu načtěte nebo restartujte aplikaci pro použití synchronizovaných nastavení. Na mobilních zařízeních nebo tabletech může být nutné vynucené ukončení.

### Znovu načtení nastavení

Některá nastavení lze znovu načíst za běhu, zatímco jiná vyžadují restart:

- **Načtení za běhu**: Většina konfigurací Obsidian, včetně klávesových zkratek a vlastností, nastavení vzhledu a konfigurací již povolených základních pluginů.
- **Vyžaduje restart**: Změny CSS (např. [[CSS úryvky]], [[Motivy]]), konfigurace zobrazení grafu a stavy základních pluginů (např. zapnutí/vypnutí Každodenních poznámek).

Komunitní pluginy obvykle nepodporují načtení za běhu a vyžadují restart při použití nových nastavení.

> [!info]+ Pro vývojáře pluginů
> Zjistěte, jak [integrovat funkcionalitu načtení za běhu s Obsidian Sync](https://docs.obsidian.md/Reference/TypeScript+API/Plugin/onExternalSettingsChange).

## Profily nastavení

Obsidian Sync může synchronizovat více [[Konfigurační složka|konfiguračních složek]] do stejného vzdáleného trezoru, což vám umožňuje vytvořit samostatné profily (např. jeden pro mobilní zařízení, druhý pro notebook).

### Vytvoření profilu nastavení

Pro vytvoření nového profilu nastavení:

1. Otevřete **[[Nastavení]] → Soubory a odkazy**.
2. V sekci **Override nastavení folder** zadejte název vašeho profilu začínající tečkou (`.`), např. `.obsidian-mobile`.
3. Restartujte Obsidian pro použití změn.

> [!info]+ Vyvarujte se opětovnému stahování pluginů a motivů
> Změna profilu nastavení bude vyžadovat překonfigurování nastavení synchronizace. Abyste se vyhnuli opětovnému stahování pluginů a motivů, zkopírujte svou stávající složku `.obsidian` a přejmenujte ji tak, aby odpovídala vašemu novému profilu (např. `.obsidian-mobile`), než provedete změny.
