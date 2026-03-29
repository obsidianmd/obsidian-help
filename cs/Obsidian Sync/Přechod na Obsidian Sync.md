---
permalink: sync/switch
cssclasses:
  - soft-embed
publish: true
mobile: true
description: 'Zjistěte, jak přejít ze svého současného synchronizačního řešení na Obsidian Sync.'
---
Naučte se, jak přejít z vašeho současného řešení synchronizace na Obsidian Sync.

> [!warning] Vyhněte se používání více řešení pro synchronizaci stejných souborů
> [[Často kladené otázky#Mohu používat synchronizaci třetí strany s Obsidian Sync?|Nedoporučujeme]] používat Obsidian Sync společně s cloudovými úložišti (např. iCloud, Dropbox, OneDrive, Google Drive), protože to může způsobit konflikty. Cloudové služby však mohou hrát roli ve vaší strategii [[Zálohování souborů Obsidian|zálohování]].

## Přesuňte svůj trezor mimo synchronizační službu třetí strany nebo cloudové úložiště

Pokud je váš trezor uložen v některém z následujících umístění, je pravděpodobně synchronizován službou třetí strany:

- **Windows**: `C:\Users\Username\Desktop` nebo `C:\Users\Username\Documents`
- **macOS**: `/users/username/Desktop` nebo `/users/username/Documents`
- **iOS**: Složka **iCloud** v aplikaci Soubory
- **Jiné**: Jakákoli složka pod synchronizační službou, jako `Drive/my-vault`, `Dropbox/my-vault`, `pSync/my-vault` atd.

Android a Linux mají s tímto obvykle méně problémů, ale i tak stojí za to zkontrolovat umístění trezoru na těchto zařízeních.

> [!tip] Pokud je váš aktuální místní trezor připojen ke vzdálenému trezoru, Obsidian se pokusí zjistit, zda se trezor nachází v synchronizační službě. Pokud ano, zobrazí se zpráva v horní části nastavení Obsidian Sync.

Abyste se vyhnuli konfliktům se synchronizačními službami, doporučujeme ukládat trezory Obsidian na následujících místech:

- **Windows**: Doporučená umístění v pořadí:
    1. `D:\` nebo jakýkoli jiný disk na vašem zařízení, který není C: ani síťový
    2. `C:\Vaults` (pokud máte oprávnění používat disk C:\)
    3. `C:\Users\Username\Vaults` (pokud musíte mít trezor v C:\Users\Username, ujistěte se, že OneDrive není nastaven na odstraňování souborů. OneDrive je obecně méně agresivní mimo složky `Desktop` a `Documents`.)
- **macOS**: `/users/username/vaults`
- **Linux**: Žádné specifické doporučení kvůli rozmanitosti souborových systémů. Jen se ujistěte, že Obsidian má plný přístup ke čtení/zápisu a že žádná synchronizační služba nespravuje danou složku.
- **iOS/iPadOS**: Uložte trezor **Na můj iPhone** nebo **Na zařízení**.
- **Android**: Použijte složku `Documents/` na vašem zařízení.

## Přesunutí trezoru pomocí Obsidian na desktopu

![[Spravovat trezory#Přesunutí trezoru do jiné složky]]

## Přesunutí trezoru na mobilním zařízení

Na mobilních zařízeních Obsidian funguje v sandboxovaném prostředí, což znamená, že nemůžete přesouvat trezory v rámci aplikace tak jako na desktopu.

### Android

Souborové systémy Androidu se velmi liší podle zařízení, ale obecně postupujte stejně jako při ručním přesunu trezoru a ujistěte se, že je odstraněn z jakékoli synchronizační služby na vašem zařízení.

### iOS a iPadOS

Pro přesunutí existujícího trezoru z iCloudu na vaše zařízení postupujte takto:

> [!note] Pokud již máte data na jiném zařízení a máte nastavený Obsidian Sync, doporučujeme místo toho [[Nastavení Obsidian Sync#Synchronizace vzdáleného trezoru na jiném zařízení|nastavit nový místní trezor ze Sync]].

- [[Zálohování souborů Obsidian|Zazálohujte]] svůj trezor.
- Vytvořte nový trezor na svém zařízení a ujistěte se, že je **Uložit na iCloud Drive** vypnuto.
- Vynuťte ukončení aplikace Obsidian na všech zařízeních, abyste pozastavili Sync.
- Otevřete aplikaci **Soubory** na svém iOS/iPadOS zařízení.
- Dlouze stiskněte složku trezoru v **iCloud Drive → Obsidian** a poté vyberte **Přesunout**.
- Přesuňte trezor do **Na můj iPhone/Zařízení → Obsidian** a potvrďte, že je nyní viditelný.
- Klepněte na **Kopírovat**.
- Vraťte se do **iCloud Drive → Obsidian** a smažte starou složku trezoru.

Jakmile znovu otevřete Obsidian, trezor by měl zobrazovat ikonu trezoru místo ikony cloudu, což potvrzuje, že již není v iCloud Drive. Obsidian Sync také přestane zobrazovat varovnou zprávu ve svém nastavení.

## Další kroky

- Chcete začít s Obsidian Sync? [[Nastavení Obsidian Sync]]
- Potřebujete ještě pomoc? Podívejte se na [[Řešení problémů s Obsidian Sync]]
