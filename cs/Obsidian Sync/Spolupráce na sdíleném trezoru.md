---
permalink: sync/collaborate
publish: true
mobile: true
description: 'Tato stránka popisuje, jak můžete spolupracovat s ostatními uživateli Obsidian Sync.'
---
S [[Úvod do Obsidian Sync|Obsidian Sync]] můžete spolupracovat na sdíleném trezoru se svým týmem.

Všichni spolupracovníci musí mít aktivní předplatné Sync pro přístup ke sdílenému trezoru. Připojení ke sdílenému trezoru se nezapočítává do vašeho [[Často kladené otázky#Kolik vzdálených trezorů mohu mít?|limitu trezorů]].

Pokud je vzdálený trezor [[Zabezpečení a soukromí|end-to-end šifrovaný]], spolupracovníci musí při nastavení trezoru zadat šifrovací heslo.

## Správa uživatelů

### Přidání uživatelů

Chcete-li pozvat uživatele ke sdílení vzdáleného trezoru:

1. Otevřete **[[Nastavení]]**.
2. V postranním menu vyberte **Sync**.
3. Vedle **Vzdálený trezor** vyberte **Spravovat**.
4. Vedle vzdáleného trezoru, který chcete sdílet, vyberte **Spravovat sdílení** ![[lucide-users.svg#icon]].
5. V poli **Pozvat uživatele** zadejte e-mail uživatele, kterého chcete pozvat.
6. Vyberte **Přidat**.

### Odebrání uživatelů

1. Otevřete **[[Nastavení]]**.
2. V postranním menu vyberte **Sync**.
3. Vedle **Vzdálený trezor** vyberte **Spravovat**.
4. Vedle uživatele, kterému chcete odebrat přístup, vyberte **Odebrat uživatele** ![[lucide-x.svg#icon]].

## Spolupráce s vaším týmem

### Oprávnění

Podrobná oprávnění zatím nejsou podporována. Všichni spolupracovníci obdrží stejná oprávnění jako vlastník trezoru, s jednou výjimkou: pouze vlastník trezoru může zvát spolupracovníky.

### Úpravy v reálném čase

Sdílené trezory umožňují týmům pracovat společně na sadě souborů, nicméně Obsidian zatím nepodporuje společné úpravy stejného souboru v reálném čase. Neuvidíte kurzor druhého uživatele a jeho úpravy se zobrazí až po synchronizaci změn.

Pokud více uživatelů upravuje stejný soubor současně, [[Řešení problémů s Obsidian Sync#Řešení konfliktů|změny budou sloučeny]] během procesu synchronizace. Změny lze zobrazit a obnovit pomocí [[Historie verzí]].

![[version-history-collaboration.png]]^version-history-image

## Omezení

Mějte na paměti, že Obsidian Sync má [[Často kladené otázky|omezení]], která mohou ovlivnit váš tým:

- Maximální počet spolupracovníků na sdíleném trezoru je 20 uživatelů.
- Maximální velikost souboru pro přílohy závisí na [[Plány a limity úložiště|plánu]] hostitele vašeho vzdáleného trezoru, přičemž Standard plán nabízí 5 MB a Plus plán 200 MB.

Zjistěte více o [[Synchronizace pro týmy|synchronizaci pro týmy]].
