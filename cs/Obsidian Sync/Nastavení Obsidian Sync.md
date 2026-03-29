---
permalink: sync/setup
cssclasses:
  - soft-embed
publish: true
mobile: true
description: Zakoupili jste Obsidian Sync a jste připraveni začít. Tato příručka vám pomůže nastavit a upravit nastavení Obsidian Sync pro každodenní používání.
---
Zakoupili jste Obsidian Sync a jste připraveni začít. Tento průvodce vám pomůže nastavit a upravit nastavení Obsidian Sync pro každodenní použití.

- **Jste nový uživatel Obsidian Sync?** Viz: [[#Nastavení Obsidian Sync poprvé]]
- **Připojujete druhé zařízení?** Viz: [[#Synchronizace vzdáleného trezoru na jiném zařízení]]
- **Potřebujete provést změny?** Viz: [[#Správa vzdálených trezorů]]

## Nastavení Obsidian Sync poprvé

V této části vytvoříte nový [[Místní a vzdálené trezory|vzdálený trezor]] a připojíte ho k existujícímu místnímu trezoru. Pro tento účel nemusíte vytvářet nový, prázdný místní trezor.

> [!info] Je váš současný trezor ve složce iCloud, OneDrive, Dropbox nebo jiné synchronizační složce? Pokud **ano**, nebo si **nejste jisti**, přečtěte si prosím [[Často kladené otázky#Mohu používat synchronizaci třetí strany s Obsidian Sync?|toto]] a [[Přechod na Obsidian Sync]] před pokračováním.

**Předpoklady**

- Účet Obsidian. Pokud ho nemáte, [zaregistrujte se](https://obsidian.md/auth?returnto=%2Faccount%2Fsync#signup).
- Aktivní [[Plány a limity úložiště|předplatné]] Obsidian Sync. Pokud ho nemáte, přihlaste se k odběru z [řídicího panelu vašeho účtu](https://obsidian.md/account/sync).
- **Doporučeno**: Zavedený [[Zálohování souborů Obsidian|zálohovací systém]] pro vaše soubory Obsidian. Synchronizační služba není záloha.

### Přihlášení pomocí účtu Obsidian

1. Otevřete **[[Nastavení]]**.
2. Na postranním panelu vyberte **Obecné**.
3. V části **Účet → Váš účet** vyberte **Přihlásit**.
4. Do pole **E-mail** zadejte svůj e-mail.
5. Do pole **Heslo** zadejte své heslo.
6. Vyberte **Přihlásit**.

### Zapnutí Obsidian Sync

1. Otevřete **[[Nastavení]]**.
2. Na postranním panelu v části **Nastavení** vyberte **Základní pluginy**.
3. Zapněte **Sync**.

### Vytvoření nového vzdáleného trezoru

1. Otevřete **[[Nastavení]]**.
2. Na postranním panelu vyberte **Sync**.
3. Vedle **Vzdálený trezor** vyberte **Vybrat**.
4. Vyberte **Vytvořit nový trezor**.
5. Do pole **Název trezoru** zadejte název vzdáleného trezoru.
6. V poli **Oblast** zvolte [[Nastavení Obsidian Sync#Regionální synchronizační servery|oblast]] serveru pro váš vzdálený trezor.
7. Do pole **Šifrovací heslo** zvolte heslo pro svůj trezor. Tím vytvoříte end-to-end šifrovaný trezor. Heslo trezoru je oddělené od vašeho účtu Obsidian a může být pro každý trezor jiné. Více informací najdete v části [[Zabezpečení a soukromí]].
8. Vyberte **Vytvořit**.

### Připojení ke vzdálenému trezoru

1. Vyberte **Připojit** vedle nově vytvořeného trezoru.
2. Zadejte heslo, které jste nastavili pro trezor, do pole **Šifrovací heslo**, pokud jste zvolili [[Obsidian Sync/Zabezpečení a soukromí#Co znamená end-to-end šifrování?|end-to-end šifrování]].
3. Vyberte **Odemknout trezor**.
4. **Zatím nezačínejte synchronizovat.** Zkontrolujte nastavení synchronizace v části [[#Úprava nastavení Obsidian Sync|úprava nastavení Obsidian Sync]].
    - Pokud chcete začít synchronizovat okamžitě, přejděte na [[#Zahájení synchronizace s Obsidian Sync|zahájení synchronizace s Obsidian Sync]].
5. Pokud jste tak ještě neučinili, zavřete vyskakovací okno s výzvou k **Vyloučení složek** a **Zahájení synchronizace**. Pokračujte dalším krokem.

#### Úprava nastavení Obsidian Sync

1. V případě potřeby přejděte do **[[Nastavení]]** → **Sync**.
2. Pokud jste ještě nezadali název zařízení, přidejte ho, aby bylo čtení záznamů Sync jednodušší!
3. Přepněte nastavení v části **Selektivní synchronizace** a **Synchronizovat nastavení trezoru**, abyste určili, které položky mají být synchronizovány do vzdáleného trezoru a z něj.
    - **Poznámka**: Pokud jste se nedávno odpojili od vzdáleného trezoru a znovu se připojujete bez restartu aplikace, některá nastavení již mohou být zapnutá.
4. Pokud provedete změny v jakémkoli nastavení, restartujte Obsidian úplně.
5. Po restartu Obsidian se vraťte do **[[Nastavení]]** → **Sync**.

#### Zahájení synchronizace s Obsidian Sync

Pokud zahajujete synchronizaci po připojení ke vzdálenému trezoru, uvidíte tlačítko **Zahájit synchronizaci**. Vyberte toto tlačítko pro zahájení synchronizace.

Pokud zahajujete synchronizaci po úpravě nastavení Obsidian Sync a restartu aplikace, uvidíte v nastavení Sync tlačítko **Obnovit**. Vyberte toto tlačítko pro zahájení synchronizace.

> [!done] Stav synchronizace
> Když Obsidian Sync dokončí synchronizaci, v pravém dolním rohu (počítač) nebo na pravém postranním panelu (mobilní) se zobrazí zelený kroužek se zaškrtnutím ![[obsidian-icon-sync-synced.svg#icon]]. Záznam o synchronizaci také zobrazí „Plně synchronizováno" jako jednu z posledních zpráv.
>
> Více podrobností o stavech synchronizace najdete v části [[Stavová ikona a zprávy]].
^obsidian-sync-status

Pro připojení dalších zařízení k nově vytvořenému a synchronizovanému vzdálenému trezoru přejděte na [[Nastavení Obsidian Sync#Synchronizace vzdáleného trezoru na jiném zařízení|Synchronizace vzdáleného trezoru na jiném zařízení]].

Chcete-li se dozvědět více o nastaveních a souborech, přejděte na [[Nastavení Sync a selektivní synchronizace]].

## Synchronizace vzdáleného trezoru na jiném zařízení

V této části jste již vytvořili vzdálený trezor a nahráli do něj data. Nyní chcete připojit svá další zařízení.

**Předpoklady**
- Účet Obsidian. Pokud ho nemáte, [zaregistrujte se](https://obsidian.md/account#mode=signup).
- Aktivní předplatné Obsidian Sync. Pokud ho nemáte, přihlaste se k odběru z [řídicího panelu vašeho účtu](https://obsidian.md/account).
- Sync zapnutý v nastavení [[Základní pluginy|Základních pluginů]].
- Aktivní vzdálený trezor. Pokud jste ho ještě nevytvořili, nejprve prosím vytvořte [[Nastavení Obsidian Sync#Vytvoření nového vzdáleného trezoru|vzdálený trezor]].
- **Doporučeno**: Zavedený [[Zálohování souborů Obsidian|zálohovací systém]] pro vaše soubory Obsidian na vašem nejpoužívanějším zařízení. Synchronizační služba není záloha.

### Synchronizace trezoru z přepínače trezorů

Pokud jste právě nainstalovali Obsidian, po otevření programu se vám zobrazí [[Spravovat trezory|Přepínač trezorů]]. Chcete-li vytvořit nový místní trezor z obsahu vzdáleného trezoru, postupujte následovně.

1. Otevřete Obsidian (za předpokladu, že ho otevíráte poprvé)
2. Vyberte jednu z možností v závislosti na vaší instalaci:
	1. **Počítač**: V sekci Připojit k Obsidian Sync vyberte **Nastavit**
	2. **Mobilní/Tablet**: **Nastavit Obsidian Sync**
3. Přihlaste se svým uživatelským účtem Obsidian
	1. Pokud je nastavené [[Dvoufaktorové ověření|2FA]], zadejte svůj 2FA kód.
4. Budete požádáni o výběr vzdáleného trezoru, který chcete synchronizovat na toto zařízení. Vyberte **Připojit**.
5. Budete požádáni o výběr názvu místního trezoru, který bude na zařízení vytvořen pro uložení těchto dat. Zadejte název podle svého výběru.
	1. Pokud používáte [[Obsidian URI]], budete chtít použít stejný název jako místní trezor na vašem jiném zařízení.
6. Vyberte **Vytvořit**.
7. Na okamžik se zobrazí okno vzdálených trezorů, zatímco se Obsidian Sync připojuje k vašemu serveru a ověřuje předplatné. Poté se zobrazí okno *Nastavit připojení*.
	1. Důrazně se doporučuje zavřít nebo potáhnout dolů z tohoto okna a nejprve [[#Úprava nastavení Obsidian Sync|upravit nastavení Obsidian Sync]].
	2. Pokud změníte jakékoli nastavení Sync, prosím znovu načtěte nebo restartujte Obsidian.

### Synchronizace trezoru z nastavení Obsidian

Pokud jste na tomto zařízení již vytvořili místní trezor a chcete tento místní trezor připojit ke vzdálenému trezoru, postup je velmi podobný jako v části [[#Nastavení Obsidian Sync poprvé]].

![[Nastavení Obsidian Sync#Přihlášení pomocí účtu Obsidian]]

![[Nastavení Obsidian Sync#Zapnutí Obsidian Sync]]

#### Připojení ke vzdálenému trezoru

1. Otevřete **[[Nastavení]]**.
2. Na postranním panelu vyberte **Sync**.
3. Vedle **Vybrat vzdálený trezor** klikněte na **Vybrat**.
4. Klikněte na **Připojit** vedle vzdáleného trezoru, ke kterému se chcete připojit.
5. Do pole **Šifrovací heslo** zadejte heslo pro svůj trezor, pokud ho máte.
6. Budete vyzváni k zahájení synchronizace. Doporučuje se počkat a nejprve upravit nastavení synchronizace. Pokud chcete synchronizovat celý trezor na zařízení tak, jak je, můžete **Zahájit synchronizaci**.

> [!warning] Pokud trezor na vašem zařízení již obsahuje některé poznámky (nedoporučuje se), budete upozorněni, že tyto poznámky budou před pokračováním sloučeny. Konflikty budou vyřešeny prostřednictvím [[Řešení problémů s Obsidian Sync#Řešení konfliktů|řešení konfliktů Sync]].

![[Nastavení Obsidian Sync#Úprava nastavení Obsidian Sync]]

![[Nastavení Obsidian Sync#Zahájení synchronizace s Obsidian Sync]]

## Správa vzdálených trezorů

Vytvořili jste vzdálený trezor a připojili se k němu. Možná jste také synchronizovali tento vzdálený trezor na více zařízení. Tato část obsahuje některé další běžné pokyny, které můžete potřebovat při správě tohoto vzdáleného trezoru.

### Odpojení od vzdáleného trezoru

1. Otevřete **[[Nastavení]]** Obsidian.
2. Na postranním panelu vyberte **Sync**.
3. Klikněte na tlačítko **Odpojit** vedle Vzdálených trezorů.

Nyní jste odpojeni od vzdáleného trezoru a na tomto zařízení již nesynchronizujete.

### Smazání vzdáleného trezoru

> [!tip] Smazání vzdáleného trezoru nesmaže vaše místní data na vašem zařízení.

1. Otevřete **[[Nastavení]]**.
2. Na postranním panelu vyberte **Sync**.
3. Vyberte **Spravovat** vedle Vzdálených trezorů. Otevře se okno se seznamem vašich vzdálených trezorů.
4. Vyberte ikonu koše ![[lucide-trash-2.svg#icon]] vedle vzdáleného trezoru, který chcete smazat.
5. Potvrďte smazání výběrem červeného tlačítka **Smazat**.
6. Váš vzdálený trezor byl smazán.

> [!info] Pokud ikona koše není viditelná, možná se budete muset nejprve odpojit od vzdáleného trezoru. Po odpojení vyberte tlačítko **Vybrat** pro otevření seznamu vzdálených trezorů.

### Regionální synchronizační servery

Obsidian Sync vám umožňuje zvolit umístění hostingu pro váš vzdálený trezor. Pokud používáte verzi `1.4.16` nebo starší Obsidian, umístění bude vybráno automaticky.

Pokud si nejste jisti, v jaké oblasti je váš současný trezor, podívejte se na [[Obsidian Sync/Zabezpečení a soukromí#Kde najdu svůj aktuální server Sync a kde je hostován?|Kde najdu svůj aktuální Sync server a kde je hostován?]] pro návod.

![[sync-regional-sync-servers.png#interface|300]]

Po výběru umístění **nelze** vaše datové centrum přesunout na jiný server bez opětovného nahrání dat. Chcete-li změnit oblast, postupujte podle [[Oblasti Sync|průvodce oblastmi Sync trezoru]].

![[Obsidian Sync/Zabezpečení a soukromí#^sync-geo-regions]]

## Další kroky

Zde jsou některé doporučené dokumenty ke čtení.

- Zjistěte více o [[Nastavení Sync a selektivní synchronizace|výběru souborů a nastavení k synchronizaci]].
- Zjistěte, co se stane, když se váš vzdálený trezor [[Historie verzí|zaplní]].
- [[Spolupráce na sdíleném trezoru]] s dalším uživatelem Obsidian Sync.
- Podívejte se na [[Často kladené otázky|Sync FAQ]] pro odpovědi na běžné otázky.
