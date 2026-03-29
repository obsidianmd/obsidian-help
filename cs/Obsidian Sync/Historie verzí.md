---
permalink: sync/version-history
cssclasses:
  - soft-embed
publish: true
mobile: true
description: Obsidian Sync uchovává záznam o všech změnách provedených ve vašich poznámkách a pravidelně kontroluje aktualizace a vytváří nové verze vašich poznámek.
---
[[Úvod do Obsidian Sync|Obsidian Sync]] pravidelně kontroluje aktualizace vašich [[Nastavení Sync a selektivní synchronizace|synchronizovaných souborů]] a uchovává záznamy o všech změnách. Ty jsou uloženy jako nové položky v [[#Historie verzí]]. K těmto informacím lze přistupovat několika způsoby:

- [[#Historie Sync]]
- [[#Historie verzí]]

Ačkoli není součástí Obsidian Sync, na každém zařízení je dostupná také lokální historie verzí, pokud je zapnutý plugin [[Obnovení souborů]].

## Historie Sync

Funkce historie Sync (neboli postranní panel Sync), představená v Obsidian verzi 1.7, umožňuje rychle zobrazit nedávno vytvořené nebo upravené poznámky a přílohy, které byly synchronizovány. Můžete ji také chápat jako historii _úprav_.

V postranním panelu můžete vybrat položku a otevřít její soubor v aktivním okně. Položky mají také kontextové nabídky, které vám umožňují provádět akce jako přesunutí souboru nebo zobrazení jeho [[#Poznámky a přílohy|Historie verzí]].

> [!compatibility] Funkce pouze pro počítače
> Když najedete myší na synchronizovaný soubor v postranním panelu, uvidíte, kdo soubor naposledy upravil. To je obzvláště užitečné, pokud [[Spolupráce na sdíleném trezoru|spolupracujete]] na sdíleném trezoru.

> [!tip] 
> Nastavení a smazané položky se v postranním panelu historie Sync nezobrazují. Ty lze najít v [[#Poznámky a přílohy|Historii verzí]].

### Zobrazení historie Sync

Když zapnete základní plugin [[Úvod do Obsidian Sync|Sync]], historie Sync je automaticky zapnuta, ale ve výchozím nastavení se v postranním panelu nezobrazuje. Budete ji muset ručně přidat pomocí příkazu nebo klávesové zkratky.

#### Zapnutí přes paletu příkazů

> [!info] Tato možnost vyžaduje zapnutý základní plugin [[Paleta příkazů]].

**Počítač/Tablet** ![[lucide-monitor-check.svg#icon]]

1. Otevřete **Paletu příkazů**. ![[lucide-terminal.svg#icon]]
2. Zadejte „Sync".
3. Vyberte možnost „Sync: Zobrazit historii Sync".

Historie Sync se poté zobrazí v [[Postranní panel|pravém postranním panelu]].

**Mobilní zařízení** ![[obsidian-icon-smartphone.svg#icon]]

1. Otevřete [[Postranní panel nástrojů]] ![[lucide-menu.svg#icon]].
2. Otevřete **Paletu příkazů**. ![[lucide-terminal.svg#icon]]
3. Zadejte „Sync".
4. Vyberte možnost „Sync: Zobrazit historii Sync".

Historie Sync se poté zobrazí jako rozbalovací možnost v [[Postranní panel|pravém postranním panelu]].

#### Zapnutí přes klávesovou zkratku

1. Otevřete **[[Nastavení]]**.
2. V kategorii **Nastavení** vyberte **Klávesové zkratky**.
3. Do vyhledávacího pole klávesových zkratek zadejte „Sync".
4. Vedle „Sync: Zobrazit historii Sync" přiřaďte požadovanou klávesovou zkratku.

## Historie verzí

Kromě [[#Historie Sync|historie Sync]] Obsidian také uchovává historii verzí pro obnovení poznámek a příloh. Pokud omylem smažete poznámku nebo se chcete vrátit k předchozí verzi, můžete ji obnovit z historie verzí.

Doba uchování historie verzí závisí na vašem [[Plány a limity úložiště|plánu Obsidian Sync]]. V plánu Standard jsou poznámky uchovávány po dobu 1 měsíce, zatímco v plánu Plus jsou uchovávány po dobu 12 měsíců. Po uplynutí této doby jsou starší verze vašich poznámek smazány.

U [[Přílohy|příloh]] jsou starší verze uchovávány po dobu <u>dvou týdnů</u>.

![[Spolupráce na sdíleném trezoru#^version-history-image]]

### Poznámky a přílohy

Postup pro obnovení poznámek i příloh je stejný.

#### Zobrazení historie verzí souboru

**Počítač/Tablet** ![[lucide-monitor-check.svg#icon]]
1. V **Průzkumníku souborů** vyberte poznámku, kterou chcete obnovit.
2. Vyberte **Otevřít historii verzí**.
3. Vlevo vyberte verzi poznámky, kterou chcete zobrazit. Obsah se zobrazí vpravo.

**Mobilní zařízení** ![[obsidian-icon-smartphone.svg#icon]]
1. V **Průzkumníku souborů** vyberte poznámku, kterou chcete obnovit.
2. Dlouhým stisknutím vyvolejte kontextovou nabídku.
3. Vyberte **Otevřít historii verzí**.
4. Ve vyskakovací nabídce vyberte verzi poznámky, kterou chcete zobrazit.
5. Po výběru bude obsah poznámky k dispozici k nahlédnutí.

#### Zobrazení historie verzí smazaného nebo přejmenovaného souboru

1. Otevřete **[[Nastavení]]**.
2. V postranním panelu pod **Základní pluginy*** vyberte **Sync**.
3. Vedle **Odstraněné soubory** vyberte **Zobrazení**.
4. Vyberte poznámku, jejíž historii verzí chcete zobrazit.
5. Ve vyskakovacím okně historie verzí vyberte vlevo verzi poznámky, kterou chcete zobrazit.

#### Obnovení předchozí verze souboru

**Počítač/Tablet** ![[lucide-monitor-check.svg#icon]]
1. V **Průzkumníku souborů** vyberte poznámku, kterou chcete obnovit.
2. Vyberte **Otevřít historii verzí**.
3. Vlevo vyberte verzi poznámky, kterou chcete obnovit. Obsah se zobrazí vpravo.
4. Vyberte tlačítko **Obnovit**.
5. Obsah poznámky bude nahrazen obnovenou verzí.

**Mobilní zařízení** ![[obsidian-icon-smartphone.svg#icon]]
1. V **Průzkumníku souborů** vyberte poznámku, kterou chcete obnovit.
2. Dlouhým stisknutím vyvolejte kontextovou nabídku.
3. Vyberte **Otevřít historii verzí**.
4. Ve vyskakovací nabídce vyberte verzi poznámky, kterou chcete obnovit.
5. Po výběru bude obsah poznámky k dispozici k nahlédnutí.
6. Vyberte tlačítko **Obnovit**.
7. Obsah poznámky bude nahrazen obnovenou verzí.

#### Obnovení smazaného souboru

1. Otevřete **[[Nastavení]]**.
2. V postranním panelu pod **Základní pluginy*** vyberte **Sync**.
3. Vedle **Odstraněné soubory** vyberte **Zobrazení**.
4. Zvolte poznámku, kterou chcete obnovit.
5. V seznamu verzí vlevo vyberte verzi, kterou chcete obnovit.
6. Vpravo vyberte tlačítko **Obnovit**.
7. Poznámka bude obnovena na své původní místo v souborovém systému.

> [!tip] Můžete vybrat více poznámek pomocí **hromadného obnovení** zaškrtnutím políček nebo pomocí `shift+click`. Tyto soubory nebude možné v této nabídce prohlížet.

### Historie nastavení

Obsidian Sync také sleduje změny provedené v nastavení konfigurace vašeho trezoru.

#### Zobrazení historie verzí nastavení

1. Otevřete **[[Nastavení]]**.
2. V postranním panelu pod **Základní pluginy*** vyberte **Sync**.
3. Přejděte dolů na **Synchronizovat nastavení trezoru**.
4. Vyberte tlačítko **Zobrazení** vedle **Historie verzí [[Nastavení|nastavení]]**.
5. Ve vyskakovacím okně **Soubor [[Nastavení|nastavení]]** zvolte soubor nastavení, který chcete zobrazit.

#### Obnovení předchozí verze nastavení

1. Otevřete **[[Nastavení]]**.
2. V postranním panelu pod **Základní pluginy** vyberte **Sync**.
3. Přejděte dolů na **Synchronizovat nastavení trezoru**.
4. Vyberte tlačítko **Zobrazení** vedle **Historie verzí [[Nastavení|nastavení]]**.
5. Ve vyskakovacím okně **Soubor [[Nastavení|nastavení]]** zvolte soubor nastavení, který chcete zobrazit.
6. V okně změn vyberte tlačítko **Obnovit**.
7. Znovu načtěte nebo restartujte Obsidian, aby se nastavení projevilo. Další podrobnosti najdete v pokynech v [[Nastavení Obsidian Sync#Úprava nastavení Obsidian Sync|Úprava nastavení Obsidian Sync]].
