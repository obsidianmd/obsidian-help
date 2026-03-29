---
permalink: data-storage
publish: true
mobile: true
description: 'Táto stránka vysvetľuje, ako Obsidian ukladá svoje dáta na vašom zariadení.'
---
Obsidian ukladá vaše poznámky ako [[Základná syntax formátovania|Markdown-formátované]] obyčajné textové súbory v _trezore_. Trezor je priečinok na vašom lokálnom súborovom systéme, vrátane všetkých podpriečinkov.

Keďže poznámky sú obyčajné textové súbory, môžete na úpravu a správu poznámok používať aj iné textové editory a správcov súborov. Obsidian automaticky obnovuje váš trezor, aby držal krok s akýmikoľvek externými zmenami.

Trezor môžete vytvoriť kdekoľvek, kde to váš operačný systém umožňuje. Obsidian sa synchronizuje pomocou [[Úvod do Obsidian Sync|Obsidian Sync]], Dropbox, iCloud, OneDrive, Git a mnohých ďalších služieb tretích strán.

Môžete otvoriť viacero priečinkov ako jednotlivé trezory, napríklad na oddelenie poznámok pre prácu a školu.

> [!warning] Trezory v trezoroch
> Keďže [[Interné odkazy]] sú lokálne v rámci trezora, odporúčame nevytvárať trezory v trezoroch. Odkazy sa nemusia správne aktualizovať.

## Nastavenia trezora

Obsidian vytvára [[Konfiguračný priečinok|konfiguračný priečinok]] `.obsidian` v koreňovom priečinku trezora, ktorý obsahuje predvoľby špecifické pre daný trezor, ako sú [[Klávesové skratky|klávesové skratky]], [[Témy|témy]] a [[Komunitné pluginy|komunitné pluginy]].

Väčšina operačných systémov predvolene skrýva priečinky, ktoré začínajú bodkou (`.`), takže na jeho zobrazenie možno budete musieť aktualizovať nastavenia vášho správcu súborov.

- **macOS**: Vo Finderi stlačte `Cmd+Shift+.` (bodka) na zobrazenie skrytých súborov.
- **Windows**: [Zobraziť skryté súbory](https://support.microsoft.com/en-us/windows/show-hidden-files-0320fe58-0117-fd59-6851-9b7f9840fdb2)
+ **GNU/Linux:** Vo väčšine prieskumníkov súborov stlačte `Ctrl + h` na zobrazenie skrytých súborov.

> [!tip] Pridanie `.obsidian` do Gitu
> Súbory `.obsidian/workspace.json` a `.obsidian/workspaces.json` ukladajú aktuálne rozloženie pracovného priestoru a aktualizujú sa vždy, keď otvoríte nový súbor. Ak na správu svojho trezora používate [Git](https://git-scm.com), možno budete chcieť tieto súbory pridať do `.gitignore`.

## Globálne nastavenia

Obsidian ukladá globálne nastavenia v systémovom priečinku. Umiestnenie systémového priečinka závisí od operačného systému, ktorý používate.

- **macOS**: `/Users/vašeužívateľskémeno/Library/Application Support/obsidian`
- **Windows**: `%APPDATA%\Obsidian\`
- **Linux**: `$XDG_CONFIG_HOME/obsidian/` alebo `~/.config/obsidian/`

> [!warning] Nevytvárajte trezor v systémovom priečinku. Môže to viesť k poškodeniu dát alebo strate dát.

## IndexedDB

IndexedDB je nízkoúrovňová klientska databáza, ktorú Obsidian používa na backendové úložisko. Pomáha udržiavať stav pripojení [[Úvod do Obsidian Sync|Obsidian Sync]] a zachováva [[#Vyrovnávacia pamäť metadát]] po zatvorení aplikácie.

> [!warning] Ak je aktivovaný [režim uzamknutia](https://support.apple.com/en-us/105120) od Apple a Obsidian nie je vyňatý, tieto databázové súbory sa neuložia, čo vyžaduje opätovné indexovanie pri každom spustení aplikácie.

### Vyrovnávacia pamäť metadát

Na zabezpečenie rýchleho zážitku pri používaní aplikácie Obsidian udržiava lokálny záznam metadát o súboroch vo vašom trezore nazývaný **vyrovnávacia pamäť metadát**. Tieto metadáta poháňajú mnohé funkcie naprieč aplikáciou, od zobrazenia grafu po zobrazenie osnovy.

Obsidian udržiava túto vyrovnávaciu pamäť synchronizovanú so súbormi vo vašom trezore, ale je možné, že sa dáta dostanú do nesúladu s podkladovými súbormi. V prípade, že sa to stane vášmu trezoru, môžete obnoviť vyrovnávaciu pamäť metadát z nastavení aplikácie v sekcii *Súbory a odkazy*.
