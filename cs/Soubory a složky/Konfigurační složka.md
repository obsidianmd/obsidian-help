---
permalink: configuration-folder
publish: true
mobile: true
description: 'Naučte se, jak přistupovat ke konfigurační složce a jak ji spravovat na desktopových i mobilních zařízeních.'
---
Konfigurační složka Obsidian obsahuje všechny soubory nastavení vztahující se k vašemu [[Spravovat trezory|trezoru]].

Ve výchozím nastavení se konfigurační složka jmenuje `.obsidian` a je umístěna ve složce trezoru. Pokud používáte synchronizační službu nebo chcete testovat různé profily ve stejném trezoru, možná budete chtít změnit svou konfigurační složku.

## Přístup ke konfigurační složce

### Počítač

Na počítači se složka `.obsidian` nachází ve složce vašeho trezoru. Můžete k ní přistupovat prostřednictvím systémového správce souborů.

### Mobilní zařízení

Přístup ke konfigurační složce se liší podle platformy:

**iOS a iPadOS**

Na iOS nebo iPadOS neexistuje výchozí způsob přístupu ke složce `.obsidian`. Pro zobrazení a úpravu skrytých souborů a složek budete potřebovat aplikaci třetí strany, například:

- **Taio** — Bezplatná aplikace se základními funkcemi pro zobrazení a úpravu názvů složek a souborů.
- **Textastic** — Placená aplikace s pokročilými možnostmi úpravy souborů.

**Android**

Pro přístup ke složce `.obsidian` na Androidu:

1. Otevřete systémový správce souborů.
2. V nastavení zapněte přepínač „Zobrazit skryté soubory".
3. Přejděte do složky vašeho trezoru. Složka `.obsidian` se zobrazí na nejvyšší úrovni.

> [!tip]- Alternativní správci souborů
> Pokud váš výchozí správce souborů nemá možnost „Zobrazit skryté soubory", nainstalujte aplikaci správce souborů, která tuto funkci obsahuje.

## Změna konfigurační složky

Pro nastavení konfigurační složky:

1. Otevřete **[[Nastavení]] → Soubory a odkazy**.
2. Do pole **Override nastavení folder** zadejte název svého profilu začínající tečkou (`.`). Například `.obsidian-awesome`.
3. Restartujte Obsidian, aby se změny projevily.

> [!info] Žádná nastavení z vaší konfigurační složky se nepřenesou do nové konfigurační složky. Vaše předchozí konfigurační složka však zůstane ve složce trezoru.
