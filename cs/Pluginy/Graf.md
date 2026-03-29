---
permalink: plugins/graph
publish: true
mobile: true
description: 'Zobrazení grafu je základní plugin, který umožňuje vizualizovat vztahy mezi poznámkami ve vašem trezoru.'
---
Zobrazení grafu je [[Základní pluginy|základní plugin]], který vám umožňuje vizualizovat vztahy mezi poznámkami ve vašem trezoru.

Pro otevření zobrazení grafu klikněte na **Otevřít graf** v [[Postranní panel nástrojů|postranním panelu nástrojů]].

- Kruhy představují poznámky, neboli _uzly_.
- Čáry představují [[Interní odkazy]] mezi dvěma uzly.

Čím více uzlů odkazuje na daný uzel, tím větší se zobrazí.

Pro interakci s poznámkami v grafu:

- Najeďte na libovolný kruh pro zvýraznění spojení dané poznámky.
- Klikněte na poznámku v grafu pro její otevření.
- Klikněte pravým tlačítkem na poznámku pro otevření kontextového menu s dostupnými akcemi.

Pro navigaci v grafu:

- Přibližujte a oddalujte pomocí kolečka myši nebo pomocí kláves `+` a `-`.
- Posunujte graf přetažením kurzorem myši nebo pomocí šipek.

Podržením klávesy Shift při používání klávesnice můžete pohyby zrychlit.

## Nastavení

Pro otevření nastavení grafu klikněte na ikonu ozubeného kola v pravém horním rohu zobrazení grafu.

Klikněte na **Obnovit výchozí nastavení** v pravém horním rohu panelu nastavení pro resetování všech provedených změn.

### Filtry

Tato sekce ovládá, které uzly se zobrazí v grafu.

- **Hledat soubory** umožňuje filtrovat poznámky na základě vyhledávacího výrazu. Pro informace o pokročilejších vyhledávacích výrazech se podívejte na [[Hledat]].
- **Tagy** přepíná zobrazení štítků v grafu.
- **Přílohy** přepíná zobrazení příloh v grafu.
- **Jenom existující soubory** přepíná zobrazení pouze poznámek, které existují ve vašem trezoru. Protože poznámka nemusí existovat, aby na ni bylo možné odkazovat, tato možnost pomáhá omezit graf na poznámky, které skutečně máte ve svém trezoru.
- **Sirotci** přepíná zobrazení poznámek bez jakýchkoli odkazů.

> [!info] Vyloučené soubory
> Soubory odpovídající vzorům ve vašich [[Nastavení#Vyloučené soubory|Vyloučených souborech]] se v zobrazení grafu nezobrazí.

### Skupiny

Vytvořte skupiny poznámek, abyste je od sebe odlišili pomocí barev.

Pro vytvoření nové skupiny:

1. Klikněte na **Nová skupina**.
2. Do vyhledávacího pole zadejte vyhledávací výraz pro poznámky, které chcete přidat do skupiny.
3. Klikněte na barevný kruh pro přiřazení barvy skupině.

Pro informace o pokročilejších vyhledávacích výrazech se podívejte na [[Hledat]].

### Zobrazení

Tato sekce ovládá, jak se vizualizují uzly a odkazy v grafu.

- **Šipky** přepíná zobrazení směru každého odkazu.
- **Prahová hodnota zmizení textů** ovládá průhlednost textu pro název každé poznámky.
- **Velikost uzlů** ovládá velikost kruhu představujícího každou poznámku.
- **Tloušťka čar** ovládá šířku čáry pro každý odkaz.
- **Animovat** spustí [[#Spuštění animace časové řady|animaci časové řady]].

### Síly

Tato sekce ovládá síly, které působí na každý uzel v grafu.

- **Gravitace středu** ovládá, jak kompaktní je graf. Vyšší hodnota vytvoří kruhovější graf.
- **Odpudivá síla** ovládá, jak moc uzel odtlačuje ostatní uzly od sebe.
- **Síla propojení** ovládá přitažlivost každého odkazu. Pokud by odkaz byl gumičkou, síla propojení ovládá, jak napjatá nebo volná gumička je.
- **Délka propojení** ovládá délku čar mezi jednotlivými poznámkami.

## Spuštění animace časové řady

Poznámky a přílohy se zobrazují v chronologickém pořadí podle času jejich vytvoření.

![[obsidian-graph-view.png#interface]]

## Lokální graf

Pro otevření lokálního zobrazení grafu použijte příkaz **Otevřít lokální graf**. Zatímco zobrazení grafu ukazuje všechny poznámky ve vašem trezoru, lokální zobrazení grafu ukazuje poznámky spojené s aktivní poznámkou.

Lokální zobrazení grafu může využívat všechna [[#Nastavení]] dostupná pro globální zobrazení grafu. Navíc můžete změnit hloubku lokálního grafu. Každá úroveň hloubky zobrazí poznámky spojené s poznámkami odkrytými na předchozí úrovni hloubky. Pro ovládání hloubky lokálního grafu použijte posuvník v horní části panelu nastavení filtrů lokálního grafu.
