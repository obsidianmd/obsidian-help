---
permalink: sync/migrate
cssclasses:
  - soft-embed
publish: true
mobile: true
description: 'Presuňte svoj Sync trezor do iného regiónu, vykonajte aktualizáciu šifrovania.'
---
Predvolene Obsidian Sync používa [[Bezpečnosť a súkromie#Šifrovanie|šifrovanie end-to-end]] pre všetky vaše dáta. To zaručuje, že nikto — ani tím Obsidian — nemá prístup k vašim poznámkam.

Obsidian príležitostne aktualizuje šifrovanie Sync, aby udržal najvyššie štandardy [[Bezpečnosť a súkromie|bezpečnosti]]. Ak je k dispozícii aktualizácia šifrovania, uvidíte možnosť s názvom **Aktualizovať šifrovanie trezoru** v **Nastavenia Obsidian → Sync**. Tento proces vám tiež umožňuje zmeniť vašu [[Oblasti Sync|oblasť Sync]].

## Verzie šifrovania

Všetky nové trezory automaticky používajú najnovšie šifrovanie. Existujúce trezory je možné aktualizovať pomocou asistenta migrácie. Upozorňujeme, že všetky zariadenia musia používať verziu aplikácie Obsidian, ktorá podporuje verziu šifrovania Sync, na ktorú migrujete.

| Dátum vydania                                                           | Verzia Sync  | Minimálna verzia aplikácie |
| ----------------------------------------------------------------------- | ------------ | -------------------------- |
| [2025-08-22](https://obsidian.md/changelog/2025-08-22-sync/)            | 3            | 1.8.3                      |
| [2020-12-07](https://obsidian.md/changelog/2020-12-07-desktop-v0.9.21/) | 0            | 0.9.21                     |

## Aktualizácia šifrovania pomocou asistenta migrácie

Pred tým, ako budete pokračovať, vytvorte [[Zálohovanie súborov Obsidian|zálohu]] vášho trezoru, aby ste predišli prípadnej strate dát. Tento proces permanentne odstráni všetky dáta vo vašom vzdialenom trezore so starým šifrovaním, vrátane histórie verzií.

> [!danger] Migrácie sú deštruktívne
> 
> **Vždy si [[Zálohovanie súborov Obsidian|zálohujte]] trezor pred pokračovaním v migrácii.**
> 
> Pri migrácii vzdialeného trezoru budú vaše dáta nahradené. To znamená:
> 
> 1. Vzdialené dáta budú odstránené zo serverov Obsidian a dáta trezoru budú nanovo nahrané na ich miesto.
> 2. Celá [[História verzií|história verzií]] trezoru bude stratená.

1. Otvorte **[[Nastavenia]]**.
2. Na bočnom paneli vyberte **Sync**.
3. Kliknite na **Aktualizovať trezor**. Táto možnosť bude viditeľná iba vtedy, ak je pre váš vzdialený trezor k dispozícii aktualizácia.
4. Skontrolujte si zálohy a kliknite na **Pokračovať**.
5. Do poľa **Názov trezoru** zadajte názov vzdialeného trezoru.
6. V poli **Oblasť** vyberte serverovú [[Nastavenie Obsidian Sync#Regionálne synchronizačné servery|oblasť]] pre váš vzdialený trezor.
7. V poli **Šifrovacie heslo** zvoľte heslo pre váš trezor. Tým sa vytvorí trezor so šifrovaním end-to-end. Heslo trezoru je oddelené od vášho účtu Obsidian a môže byť pre každý váš trezor odlišné. Viac informácií nájdete v časti [[Bezpečnosť a súkromie]].
8. Po opätovnom nahratí vašich dát s novým šifrovaním sa znova pripojte k novému Sync trezoru na vašich ostatných zariadeniach.
