---
permalink: sync-notes
cssclasses:
  - soft-embed
publish: true
mobile: true
description: Jak synchronizovat poznámky v Obsidianu napříč zařízeními a platformami.
---
Obsidian ukládá poznámky lokálně na vašem zařízení, takže k nim máte vždy přístup, i offline. Pro přístup k poznámkám na více zařízeních je potřeba nastavit metodu synchronizace.

Tato příručka pokrývá běžné metody synchronizace, včetně tipů pro prevenci ztráty dat a zajištění bezproblémového fungování.

Doporučujeme také přečíst si naši [[Zálohování souborů Obsidian|příručku zálohování]] pro ochranu vašich dat.

## Metody synchronizace

V Obsidian jsou vaše data jednoduše uložena jako soubory ve složce zvané [[Místní a vzdálené trezory|trezor]]. To znamená, že existuje mnoho způsobů, jak svá data synchronizovat.

Zde je několik běžně používaných metod synchronizace, které hlásí členové [komunity Obsidian](https://obsidian.md/community):

1. **Synchronizace první strany**: [[#Obsidian Sync]]
2. **Cloudová synchronizace třetích stran**: [[#iCloud]], [[#OneDrive]] a [[#Google Drive]]
3. **Lokální synchronizace**: [[#Syncthing]]
4. **Správa verzí**: [[#Git]] a [[#Working Copy]]

## Obsidian Sync

**Doporučené systémy**: `Windows`, `macOS`, `Linux`, `iOS`, `Android`

Nejpřímočařejší a oficiálně podporovaná metoda synchronizace je naše řešení první strany: [[Úvod do Obsidian Sync|Obsidian Sync]].

Obsidian Sync udržuje vaše trezory synchronizované na všech zařízeních pomocí vzdáleného trezoru, který vytváří kopie vašich dat. Lokální kopie zůstává na vašich zařízeních po celou dobu.

Postupujte podle [[Nastavení Obsidian Sync|průvodce nastavením]] pro konfiguraci Obsidian Sync.

## iCloud

**Doporučené systémy**: `macOS`, `iOS`, `iPadOS`

iCloud lze použít k synchronizaci trezorů mezi iOS a macOS. Nicméně **iCloud Drive na Windows** může vést k duplikaci nebo poškození souborů.

**Jak vytvořit a uložit trezor na iCloud Drive**:

- **Zapněte iCloud Drive**:
    - Na macOS: Přejděte na **Předvolby systému → Apple ID → iCloud → iCloud Drive**.
    - Na iOS: Přejděte na **Nastavení → [Vaše jméno] → iCloud → iCloud Drive**.
- **Vytvořte nový trezor na iCloudu**:
    - Na macOS:
        1. Otevřete **Obsidian** a vyberte **Vytvořit nový trezor**.
        2. V dialogu pro výběr souboru přejděte na **iCloud Drive → Obsidian**.
        3. Vytvořte složku pro svůj trezor a pojmenujte ji.
        4. Vyberte **Vytvořit** pro dokončení.
    - Na iOS:
        1. Otevřete **Obsidian** a klepněte na **Vytvořit nový trezor**.
        2. Zadejte název svého trezoru.
        3. Zapněte **Uložit na iCloud**.
        4. Klepněte na **Vytvořit**.
- **Otevřete trezor na jiném zařízení Apple**:
    - Na jiném macOS nebo iOS zařízení otevřete **Obsidian**, přejděte do [[Spravovat trezory|Přepínače trezorů]] a vyberte **Použít složku jako trezor**. Přejděte na **iCloud Drive → Obsidian**.

> [!warning]+ Umístění složky na iOS a iPadOS
> Při používání iCloudu na mobilních zařízeních se ujistěte, že je váš trezor uložen na správném místě: `iCloud Drive/Obsidian/[Název vašeho trezoru]`.
> 
> Trezory by měly být uvnitř složky **Obsidian** v rámci iCloud Drive. Správná je složka napravo s ikonou Obsidian. Nepoužívejte obyčejnou složku bez ikony aplikace.
> 
> ![[iCloud-folder-location.png#interface]]
> 
> Pro ověření umístění trezoru otevřete aplikaci **Soubory**, klepněte na **Procházet**, vyberte **iCloud Drive** v části **Umístění** a potvrďte, že je váš trezor uvnitř složky **Obsidian**. Pokud je váš trezor na jiném místě, mohou se vyskytnout problémy se synchronizací.

> [!tip] Osvědčené postupy
> - Pro **macOS 14 (Sonoma) a starší**: Vypněte **Optimalizovat úložiště Macu** v nastavení iCloudu, aby se zabránilo odložení souborů. Toto nastavení ovlivňuje veškeré úložiště iCloudu na zařízení, nejen Obsidian.
> - Pro **macOS 15 (Sequoia)**: Klikněte pravým tlačítkem na složku **Obsidian** v iCloud Drive a vyberte **Ponechat stažené**.

## OneDrive

**Doporučené systémy**: `Windows`, `macOS` (omezená funkčnost na Androidu)

[OneDrive](https://support.microsoft.com/en-us/office/Sync-with-OneDrive-bb89981b-e382-4969-b8fd-d413a90b6db3#ID0EAABAAA=Set_up) je populární cloudové úložiště pro uživatele Windows a macOS. Má však omezení na Androidu a není oficiálně podporováno pro synchronizaci trezorů Obsidian na iOS.

> [!info] Ponechte soubory dostupné offline
> Před použitím OneDrive pro synchronizaci se ujistěte, že je vaše složka trezoru označena jako **Vždy ponechat na tomto zařízení**. To zabrání OneDrive v odložení souborů a tomu, aby si Obsidian myslel, že chybí.

**Jak vytvořit a uložit trezor na OneDrive**:

1. **Nastavte OneDrive**:
   - Na Windows: Přihlaste se prostřednictvím aplikace OneDrive nebo svého účtu Microsoft.
   - Na macOS: Stáhněte si aplikaci OneDrive a přihlaste se.
2. **Vytvořte nový trezor na OneDrive**:
   - Na Windows/macOS:
     1. Otevřete **Průzkumník souborů** (Windows) nebo **Finder** (macOS) a přejděte na **OneDrive → Dokumenty**.
     2. Vytvořte novou složku (např. „Obsidian Vault").
     3. Otevřete **Obsidian**, vyberte **Vytvořit nový trezor** a vyberte složku OneDrive.
3. **Otevřete trezor na jiném zařízení**:
   - Na jiném zařízení otevřete **Obsidian**, přejděte do [[Spravovat trezory|Přepínače trezorů]] a vyberte **Použít složku jako trezor**. Přejděte na **OneDrive → Dokumenty**.

> [!info] Synchronizace na Androidu
> OneDrive nemusí pro synchronizaci na Androidu fungovat dobře. Zvažte použití aplikací jako [Dropsync](https://play.google.com/store/apps/details?id=com.ttxapps.dropsync) nebo [FolderSync](https://play.google.com/store/apps/details?id=dk.tacit.android.foldersync.lite).

> [!tip] Osvědčené postupy
> - Vždy ponechte soubory trezoru **Dostupné offline** kliknutím pravým tlačítkem na složku a výběrem **Vždy ponechat na tomto zařízení**.
> - Nepoužívejte funkci **Soubory na vyžádání** OneDrive pro trezory, abyste předešli problémům se synchronizací.

## Google Drive

**Doporučené systémy**: `Windows`, `macOS`, `Android` (omezená funkčnost na iOS)

[Google Drive](https://support.google.com/drive/answer/10838124?hl=en) je další populární řešení cloudového úložiště. I když není oficiálně podporováno pro synchronizaci trezorů Obsidian, můžete k synchronizaci mezi zařízeními použít aplikace a pluginy třetích stran.

> [!info] Podpora iOS
> Google Drive není oficiálně podporováno pro synchronizaci trezorů Obsidian na iOS. Zvažte použití řešení třetích stran nebo pluginu pro synchronizaci na iOS.

**Jak vytvořit a uložit trezor na Google Drive**:

1. **Nastavte Google Drive**:
    - Na Windows nebo macOS: Stáhněte si aplikaci Google Drive a přihlaste se.
    - Na Androidu: Ujistěte se, že je Google Drive zapnutý a přihlášený.
2. **Vytvořte nový trezor na Google Drive**:
    - Na Windows/macOS:
        1. Otevřete **Průzkumník souborů** (Windows) nebo **Finder** (macOS) a přejděte na **Google Drive**.
        2. Vytvořte novou složku (např. „Obsidian Vault").
        3. Otevřete **Obsidian**, vyberte **Vytvořit nový trezor** a vyberte složku Google Drive.
3. **Otevřete trezor na jiném zařízení**:
    - Na jiném zařízení otevřete **Obsidian**, přejděte do [[Spravovat trezory|Přepínače trezorů]] a vyberte **Použít složku jako trezor**. Přejděte do své složky Google Drive.

> [!tip] Osvědčené postupy
> - Nastavte soubory trezoru jako **Dostupné offline** v Google Drive, abyste předešli problémům se synchronizací kvůli odložení souborů.
> - Pro iOS zvažte alternativní metody jako [[Úvod do Obsidian Sync|Obsidian Sync]], [[#iCloud]], nebo použijte plugin **Remotely Save**.

## Syncthing

**Doporučené systémy**: `Windows`, `macOS`, `Linux`

Syncthing je decentralizovaný nástroj pro synchronizaci souborů, který nespoléhá na cloudové úložiště. Synchronizuje váš trezor přímo mezi zařízeními přes síť nebo internet.

> [!info]+ Podpora Androidu
> Oficiální aplikace Syncthing pro Android již není udržována. Nicméně komunitní fork nazvaný [Syncthing-Fork](https://github.com/Catfriend1/syncthing-android) pokračuje v aktivním vývoji a lze jej použít na zařízeních s Androidem.

**Jak vytvořit a uložit trezor pomocí Syncthing**:

1. **Nastavte Syncthing**:
   - Nainstalujte Syncthing na každé zařízení. Instalační průvodce naleznete na [webových stránkách Syncthing](https://syncthing.net/).
   - Na Androidu nainstalujte [Syncthing-Fork](https://github.com/Catfriend1/syncthing-android) z GitHub releases nebo F-Droid.
2. **Vytvořte a nakonfigurujte sdílenou složku**:
   - Na všech zařízeních:
     1. Otevřete Syncthing a vytvořte sdílenou složku. Nastavte cestu složky na váš trezor Obsidian.
     2. Ujistěte se, že je na všech zařízeních vybrána stejná složka.
     3. Nakonfigurujte předvolby synchronizace složky (např. **Odesílat a přijímat** pro obousměrnou synchronizaci).
3. **Otevřete trezor v Obsidian**:
   - Jakmile je složka synchronizována mezi zařízeními, otevřete **Obsidian**, přejděte do [[Spravovat trezory|Přepínače trezorů]] a vyberte **Použít složku jako trezor**.

> [!info] Dostupnost zařízení
> Syncthing funguje nejlépe, když je alespoň jedno zařízení vždy zapnuté, aby byla zajištěna nepřetržitá synchronizace.

> [!tip] Osvědčené postupy
> - Pro lokální synchronizaci se ujistěte, že jsou všechna zařízení připojena ke stejné síti.
> - Vyloučte `.obsidian` ze synchronizace, pokud chcete na každém zařízení samostatná nastavení.
> - Použijte vzory ignorování, abyste se vyhnuli synchronizaci dočasných nebo záložních souborů.

## Git

**Doporučené systémy**: `Windows`, `macOS`, `Linux`

**Git** je systém správy verzí, který umožňuje sledovat změny, spolupracovat s ostatními a synchronizovat trezory prostřednictvím repozitářů jako GitHub, GitLab nebo vlastní server.

**Jak synchronizovat trezor pomocí Gitu**:

1. **Nastavte vzdálený repozitář**:
    - Vytvořte repozitář na platformě pro hostování Gitu (např. GitHub, GitLab nebo vlastní server).
2. **Synchronizujte trezor**:
    1. Otevřete terminál nebo Git GUI (např. GitKraken, Sourcetree).
    2. Inicializujte Git repozitář ve složce trezoru pomocí `git init`.
    3. Přidejte vzdálený repozitář: `git remote add origin [URL]`.
    4. Commitněte změny: `git add .` a `git commit -m "Vaše zpráva"`.
    5. Pushněte změny: `git push origin main`.
3. **Stáhněte změny na jiných zařízeních**:
    - Naklonujte repozitář na jiném zařízení a stáhněte změny pomocí `git pull origin main`.

> [!info] Vyžadována ruční synchronizace
> Git poskytuje silnou správu verzí, ale synchronizace není automatická. Musíte ručně pushovat a pullovat změny.

## Synchronizace na iPhonu a iPadu

**Doporučené možnosti**:
- [[Úvod do Obsidian Sync|Obsidian Sync]]
- [[#iCloud]]

> [!info] Nekombinujte synchronizační služby
> Vyhněte se synchronizaci stejného trezoru přes více služeb (např. současné použití Obsidian Sync a iCloudu), abyste předešli konfliktům nebo poškození dat.

**Nepodporované možnosti**:
Následující služby nejsou na iOS oficiálně podporovány, ale uživatelé našli řešení pomocí nástrojů nebo pluginů třetích stran:

- Dropbox
- Google Drive
- OneDrive
- Syncthing

Někteří uživatelé úspěšně použili pluginy jako **Remotely Save** nebo **LiveSync** k synchronizaci trezorů na iOS. Tyto metody však nejsou oficiálně podporovány a výsledky se mohou lišit.

### Working Copy

**Doporučené systémy**: `iOS`
**Vyžaduje**: [[#Git]]

**Working Copy** je Git klient pro iOS, který umožňuje klonovat, commitovat a pushovat změny do Git repozitáře. Funguje dobře pro synchronizaci trezorů Obsidian přes Git, i když některé funkce vyžadují placený nákup v aplikaci.

**Jak synchronizovat trezor pomocí Working Copy**:

1. **Nainstalujte Working Copy**:
    - Stáhněte si aplikaci **[Working Copy](https://apps.apple.com/us/app/working-copy-git-client/id896694807)** na svůj iPhone nebo iPad.
2. **Naklonujte svůj Git repozitář**:
    - Otevřete Working Copy, klepněte na **Add Repository** a zadejte URL svého repozitáře (např. GitHub, GitLab).
3. **Propojte repozitář s Obsidian**:
    - Propojte naklonovanou složku repozitáře s prázdným trezorem v **Obsidian**.
4. **Commitujte a pushujte změny**:
    - Po úpravě poznámek v Obsidian použijte Working Copy k **commitnutí** a **pushnutí** změn do vzdáleného repozitáře.
    - Na jiných zařízeních stáhněte změny pomocí Gitu pro synchronizaci trezoru.

> [!info] Komunitní využití
> I když Working Copy není oficiálně podporováno, mnoho uživatelů jej úspěšně používá k synchronizaci trezorů přes Git.

## Často kladené otázky

**Proč není moje preferovaná synchronizační služba oficiálně podporována?**

Na rozdíl od některých aplikací pro poznámky, které přistupují k jednomu souboru najednou, Obsidian vyžaduje přístup k celému trezoru pro své funkce (např. aktualizace odkazů při přejmenování souboru). To znesnadňuje některým službám spolehlivě fungovat s Obsidian.

**Proč potřebuji ponechat soubory „Dostupné offline"?**

Pokud služby jako OneDrive nebo iCloud odloží soubory (např. pomocí **Souborů na vyžádání** nebo **Optimalizace úložiště Macu**), Obsidian k nim nemá přístup, což způsobuje problémy se synchronizací. Označte složku trezoru jako **Vždy ponechat na tomto zařízení** (OneDrive) nebo se ujistěte, že je zapnuté **Ponechat stažené** (iCloud).

**Jak mohu spravovat různé konfigurace pro své trezory?**

Obsidian umožňuje přizpůsobit konfigurační složku pro každé zařízení pomocí funkce [[Konfigurační složka|Konfigurační složky]].
