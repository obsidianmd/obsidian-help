---
permalink: data-storage
publish: true
mobile: true
description: 'Tato stránka vysvětluje, jak Obsidian ukládá svá data na vašem zařízení.'
---
Obsidian ukládá vaše poznámky jako [[Základní syntaxe formátování|Markdown-formátované]] soubory v prostém textu v _trezoru_. Trezor je složka ve vašem lokálním souborovém systému, včetně všech podsložek.

Protože jsou poznámky soubory v prostém textu, můžete k úpravám a správě poznámek používat i jiné textové editory a správce souborů. Obsidian automaticky obnoví váš trezor, aby odpovídal případným externím změnám.

Trezor můžete vytvořit kdekoli, kde to váš operační systém umožňuje. Obsidian se synchronizuje prostřednictvím [[Úvod do Obsidian Sync|Obsidian Sync]], Dropboxu, iCloudu, OneDrive, Gitu a mnoha dalších služeb třetích stran.

Můžete otevřít více složek jako samostatné trezory, například pro oddělení poznámek pro práci a školu.

> [!warning] Trezory uvnitř trezorů
> Protože [[Interní odkazy]] jsou lokální v rámci trezoru, doporučujeme nevytvářet trezory uvnitř trezorů. Odkazy nemusí být správně aktualizovány.

## Nastavení trezoru

Obsidian vytvoří [[Konfigurační složka|konfigurační složku]] `.obsidian` v kořenové složce trezoru, která obsahuje předvolby specifické pro daný trezor, jako jsou [[Klávesové zkratky|klávesové zkratky]], [[Motivy|motivy]] a [[Komunitní pluginy|komunitní pluginy]].

Ve výchozím nastavení většina operačních systémů skrývá složky začínající tečkou (`.`), takže pro její zobrazení možná budete muset upravit nastavení správce souborů.

- **macOS**: Ve Finderu stiskněte `Cmd+Shift+.` (tečka) pro zobrazení skrytých souborů.
- **Windows**: [Zobrazení skrytých souborů](https://support.microsoft.com/en-us/windows/show-hidden-files-0320fe58-0117-fd59-6851-9b7f9840fdb2)
+ **GNU/Linux:** Ve většině průzkumníků souborů stiskněte `Ctrl + h` pro zobrazení skrytých souborů.

> [!tip] Přidání `.obsidian` do Gitu
> Soubory `.obsidian/workspace.json` a `.obsidian/workspaces.json` ukládají aktuální rozvržení pracovního prostoru a aktualizují se při každém otevření nového souboru. Pokud používáte [Git](https://git-scm.com) ke správě svého trezoru, možná budete chtít tyto soubory přidat do `.gitignore`.

## Globální nastavení

Obsidian ukládá globální nastavení do systémové složky. Umístění systémové složky závisí na operačním systému, který používáte.

- **macOS**: `/Users/vašeuživatelskéjméno/Library/Application Support/obsidian`
- **Windows**: `%APPDATA%\Obsidian\`
- **Linux**: `$XDG_CONFIG_HOME/obsidian/` nebo `~/.config/obsidian/`

> [!warning] Nevytvářejte trezor v systémové složce. Může to vést k poškození dat nebo jejich ztrátě.

## IndexedDB

IndexedDB je nízkoúrovňová klientská databáze, kterou Obsidian používá pro backendové úložiště. Pomáhá udržovat stav připojení [[Úvod do Obsidian Sync|Obsidian Sync]] a uchovává [[#Mezipaměť metadat]], když je aplikace zavřena.

> [!warning] Pokud je aktivní Apple [režim uzamčení](<https://support.apple.com/en-us/105120>) a Obsidian není z něj vyloučen, tyto databázové soubory se neuloží, což vyžaduje přeindexování při každém spuštění aplikace.

### Mezipaměť metadat

Za účelem zajištění rychlého chodu aplikace udržuje Obsidian lokální záznam metadat o souborech ve vašem trezoru nazývaný **mezipaměť metadat**. Tato metadata pohánějí mnoho funkcí napříč aplikací, od zobrazení grafu po osnovu.

Obsidian udržuje tuto mezipaměť synchronizovanou se soubory ve vašem trezoru, ale je možné, že se data dostanou do nesouladu s podkladovými soubory. Pokud k tomu ve vašem trezoru dojde, můžete mezipaměť metadat znovu vytvořit v nastavení aplikace v sekci *Soubory a odkazy*.
