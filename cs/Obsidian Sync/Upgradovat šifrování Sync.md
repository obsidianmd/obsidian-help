---
permalink: sync/migrate
cssclasses:
  - soft-embed
publish: true
mobile: true
description: 'Přesuňte svůj trezor Sync do jiného regionu, proveďte upgrade šifrování.'
---
Ve výchozím nastavení Obsidian Sync používá [[Obsidian Sync/Zabezpečení a soukromí#Šifrování|end-to-end šifrování]] pro všechna vaše data. To zaručuje, že nikdo — ani tým Obsidian — nemá přístup k vašim poznámkám.

Obsidian příležitostně upgraduje šifrování Sync, aby udržoval nejvyšší standardy [[Obsidian Sync/Zabezpečení a soukromí|zabezpečení]]. Pokud je k dispozici upgrade šifrování, zobrazí se vám možnost s názvem **Upgrade šifrování trezoru** v **Nastavení Obsidian → Sync**. Tento proces vám také umožňuje změnit vaši [[Oblasti Sync|oblast Sync]].

## Verze šifrování

Všechny nové trezory automaticky používají nejnovější šifrování. Stávající trezory lze upgradovat pomocí průvodce migrací. Upozorňujeme, že všechna zařízení musí používat verzi aplikace Obsidian, která podporuje verzi šifrování Sync, na kterou migrujete.

| Datum vydání                                                            | Verze Sync | Minimální verze aplikace |
| ----------------------------------------------------------------------- | ---------- | ------------------------ |
| [2025-08-22](https://obsidian.md/changelog/2025-08-22-sync/)            | 3          | 1.8.3                    |
| [2020-12-07](https://obsidian.md/changelog/2020-12-07-desktop-v0.9.21/) | 0          | 0.9.21                   |

## Upgrade šifrování pomocí průvodce migrací

Než budete pokračovat, vytvořte si [[Zálohování souborů Obsidian|zálohu]] svého trezoru, abyste předešli případné ztrátě dat. Tento proces trvale smaže všechna data ve vašem vzdáleném trezoru se starým šifrováním, včetně historie verzí.

> [!danger] Migrace jsou destruktivní
> 
> **Vždy si [[Zálohování souborů Obsidian|zazálohujte]] svůj trezor, než budete pokračovat v migraci.**
> 
> Při migraci vzdáleného trezoru budou vaše data nahrazena. To znamená:
> 
> 1. Vzdálená data budou odstraněna ze serverů Obsidian a na jejich místo budou znovu nahrána data trezoru.
> 2. Veškerá [[Historie verzí|historie verzí]] trezoru bude ztracena.

1. Otevřete **[[Nastavení]]**.
2. V postranním panelu vyberte **Sync**.
3. Klikněte na **Upgrade trezoru**. Tato možnost bude viditelná pouze v případě, že je pro váš vzdálený trezor k dispozici upgrade.
4. Zkontrolujte si zálohy a klikněte na **Pokračovat**.
5. Do pole **Název trezoru** zadejte název vzdáleného trezoru.
6. V poli **Oblast** vyberte [[Nastavení Obsidian Sync#Regionální synchronizační servery|oblast]] serveru pro váš vzdálený trezor.
7. V poli **Šifrovací heslo** zvolte heslo pro svůj trezor. Tím se vytvoří end-to-end šifrovaný trezor. Heslo trezoru je oddělené od vašeho účtu Obsidian a může být pro každý z vašich trezorů jiné. Více informací najdete v [[Zabezpečení a soukromí]].
8. Jakmile znovu nahrajete svá data s novým šifrováním, znovu se připojte k novému trezoru Sync na vašich ostatních zařízeních.
