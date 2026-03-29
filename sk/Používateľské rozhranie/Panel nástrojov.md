---
permalink: ribbon
publish: true
mobile: true
description: 'Naučte sa, ako používať pás s nástrojmi – priestor pre bežné príkazy v Obsidiane – a ako ho prispôsobiť na počítači a mobile.'
---
Panel nástrojov slúži ako priestor pre bežné príkazy v Obsidian.

Na počítači sa nachádza v [[Bočný panel#Otvorenie skrytých bočných panelov|ľavom bočnom paneli]] a zostáva viditeľný aj keď je ľavý bočný panel zatvorený.

Na mobile môžete pristupovať k [[Mobilná aplikácia#Akcie panelu nástrojov|akciám panelu nástrojov]] ťuknutím na **Možnosti ponuky** ![[lucide-menu.svg#icon]] v pravom dolnom rohu aplikácie, keď neupravujete poznámku.

## Akcie

Každá akcia je v paneli nástrojov reprezentovaná ikonou. Naídením na tieto ikony sa zobrazí popisok, zatiaľ čo ich výberom sa aktivuje priradená akcia. Na mobile môžete tieto ikony aktivovať ťuknutím.

1. Otvoriť **[[Spravovať trezory|Prepínač trezorov]]** ![[obsidian-icon-vault-switcher.svg#icon]].
2. Prístup k **pomocníkovi** ![[lucide-help-circle.svg#icon]].
3. Otvoriť **[[Nastavenia]]** ![[lucide-settings.svg#icon]].

V mobilnej verzii si môžete nakonfigurovať akciu rýchleho prístupu na paneli nástrojov. Pre viac informácií pozrite [[#Mobil|sekciu mobil]] a [[Mobilná aplikácia]].

## Prispôsobenie panelu nástrojov

Vaše prispôsobené rozloženie panelu nástrojov sa zapamätá medzi reláciami. Synchronizuje sa s inými zariadeniami a mobilnou aplikáciou, keď sú nastavenia aplikácie (v súboroch `workspace.json` a `workspace-mobile.json`) synchronizované.

### Počítač

Na desktopovej verzii môžete panel nástrojov prispôsobiť nasledovne:

- Zmeňte poradie akcií panelu nástrojov presúvaním ikon.
- Na skrytie konkrétnych akcií kliknite pravým tlačidlom na prázdne miesto v paneli nástrojov a odznačte akcie, ktoré chcete skryť.

#### Skrytie panelu nástrojov

Panel nástrojov môžete skryť dvoma spôsobmi:

- Kliknite pravým tlačidlom na panel nástrojov a vyberte **Skryť panel nástrojov**.
- Otvorte **[[Nastavenia]]** → **Vzhľad**, prejdite nadol na **Rozšírené** a vypnite **Zobraziť panel nástrojov**.

#### Zobrazenie panelu nástrojov

Ak ste panel nástrojov skryli a chcete ho znova zobraziť:

1. Otvorte **[[Nastavenia]]** → **Vzhľad**.
2. Prejdite nadol na **Rozšírené**.
3. Zapnite **Zobraziť panel nástrojov**.
4. Panel nástrojov sa znova objaví na ľavej strane okna.

> [!tip] Vlastné CSS
> Ak používate komunitnú tému alebo vlastné CSS, uistite sa, že neskrýva panel nástrojov prostredníctvom vlastných pravidiel štýlu.

### Mobil

V mobilnej verzii Obsidian môžete vykonávať akcie rýchleho prístupu, meniť poradie položiek a prispôsobiť ponuku panelu nástrojov. Pre prístup k týmto prispôsobeniam postupujte nasledovne:

1. Otvorte **[[Nastavenia]]** Obsidian ![[lucide-cog.svg#icon]].
2. Prejdite do sekcie **Vzhľad**.
3. Prejdite nadol na **Rozšírené** možnosti.
4. Vyberte tlačidlo **Spravovať** pod položkou **Konfigurácia panelu nástrojov**.

#### Rýchly prístup

Predvolene je možnosť rýchleho prístupu nastavená na „Otvoriť panel nástrojov" pri *krátkom stlačení*. Ak si vyberiete inú možnosť ako rýchly prístup:

- Vybraná možnosť sa aktivuje *krátkym stlačením*.
- Prístup k ponuke panelu nástrojov sa zmení na *dlhé stlačenie*.

> [!info] Možnosti rýchleho prístupu závisia od nastavení Obsidian a základných pluginov, ktoré máte zapnuté.

#### Zmena poradia a viditeľnosť

Pre zmenu poradia položiek v ponuke panelu nástrojov stlačte a podržte tlačidlo **presunúť a pustiť** ![[lucide-menu.svg#icon]] a presuňte vybranú položku hore alebo dole.

Položky v ponuke panelu nástrojov môžete zobraziť alebo skryť pomocou červeného tlačidla **odstrániť** ![[lucide-minus-circle.svg#icon]] alebo zeleného tlačidla **pridať** ![[lucide-plus-circle.svg#icon]] na prepínanie ich viditeľnosti.

 ![[ribbon-rearrange-visibility.jpeg#interface]]
