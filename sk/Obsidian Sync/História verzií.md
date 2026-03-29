---
permalink: sync/version-history
cssclasses:
  - soft-embed
publish: true
mobile: true
description: Obsidian Sync uchováva záznam o všetkých zmenách vykonaných vo vašich poznámkach a pravidelne kontroluje aktualizácie a vytvára nové verzie vašich poznámok.
---
[[Úvod do Obsidian Sync|Obsidian Sync]] pravidelne kontroluje aktualizácie vašich [[Nastavenia Sync a selektívna synchronizácia|synchronizovaných súborov]] a zaznamenáva všetky zmeny. Tieto sú uložené ako nové záznamy v [[#História verzií]]. K týmto informáciám je možné pristupovať niekoľkými spôsobmi:

- [[#História synchronizácie]]
- [[#História verzií]]

Aj keď nie je súčasťou Obsidian Sync, lokálna história verzií je tiež dostupná na každom zariadení, ak je povolený plugin [[Obnova súboru]].

## História synchronizácie

Funkcia História synchronizácie (alebo bočný panel Sync), predstavená vo verzii Obsidian 1.7, umožňuje rýchlo zobraziť nedávno vytvorené alebo upravené poznámky a prílohy, ktoré boli synchronizované. Môžete ju tiež chápať ako históriu _úprav_.

V bočnom paneli môžete vybrať položku a otvoriť jej súbor v aktívnom okne. Položky majú tiež kontextové ponuky, ktoré vám umožňujú vykonávať akcie ako presun súboru alebo zobrazenie jeho [[#Poznámky a prílohy|Histórie verzií]].

> [!compatibility] Funkcia len pre desktop
> Keď najazdíte na synchronizovaný súbor v bočnom paneli, môžete vidieť, kto súbor naposledy upravil. To je obzvlášť užitočné, ak [[Spolupráca na zdieľanom trezore|spolupracujete]] na zdieľanom trezore.

> [!tip] 
> Nastavenia a odstránené položky sa v bočnom paneli Histórie synchronizácie nezobrazia. Tieto nájdete v [[#Poznámky a prílohy|Histórii verzií]].

### Zobrazenie histórie synchronizácie

Keď povolíte základný plugin [[Úvod do Obsidian Sync|Sync]], História synchronizácie sa automaticky zapne, ale predvolene sa nezobrazuje v bočnom paneli. Budete ju musieť manuálne pridať pomocou príkazu alebo klávesovej skratky.

#### Povolenie cez Paletu príkazov

> [!info] Táto možnosť vyžaduje, aby bol povolený základný plugin [[Paleta príkazov]].

**Desktop/Tablet** ![[lucide-monitor-check.svg#icon]]

1. Otvorte **Paletu príkazov**. ![[lucide-terminal.svg#icon]]
2. Zadajte „Sync".
3. Vyberte možnosť „Sync: Zobraziť históriu synchronizácie".

História synchronizácie sa potom zobrazí v [[Bočný panel|pravom bočnom paneli]].

**Mobil** ![[obsidian-icon-smartphone.svg#icon]]

1. Otvorte [[Panel nástrojov]] ![[lucide-menu.svg#icon]].
2. Otvorte **Paletu príkazov**. ![[lucide-terminal.svg#icon]]
3. Zadajte „Sync".
4. Vyberte možnosť „Sync: Zobraziť históriu synchronizácie".

História synchronizácie sa potom zobrazí ako rozbaľovacia možnosť v [[Bočný panel|pravom bočnom paneli]].

#### Povolenie cez klávesovú skratku

1. Otvorte **[[Nastavenia]]**.
2. V kategórii **Možnosti** vyberte **Klávesové skratky**.
3. Do vyhľadávacieho panela klávesových skratiek zadajte „Sync".
4. Vedľa „Sync: Zobraziť históriu synchronizácie" priraďte preferovanú klávesovú skratku.

## História verzií

Okrem [[#História synchronizácie|Histórie synchronizácie]] Obsidian udržiava aj históriu verzií na obnovenie poznámok a príloh. Ak omylom odstránite poznámku alebo sa chcete vrátiť k predchádzajúcej verzii, môžete ju obnoviť z histórie verzií.

Doba uchovávania histórie verzií závisí od vášho [[Plány a limity úložiska|plánu Obsidian Sync]]. Na pláne Standard sa poznámky uchovávajú 1 mesiac, zatiaľ čo na pláne Plus sa uchovávajú 12 mesiacov. Po uplynutí tejto doby sa staršie verzie vašich poznámok odstránia.

Pre [[Prílohy|prílohy]] sa staršie verzie uchovávajú <u>dva týždne</u>.

![[Spolupráca na zdieľanom trezore#^version-history-image]]

### Poznámky a prílohy

Proces obnovy poznámok aj príloh je rovnaký.

#### Zobrazenie histórie verzií súboru

**Desktop/Tablet** ![[lucide-monitor-check.svg#icon]]
1. V **Prieskumníkovi súborov** vyberte poznámku, ktorú chcete obnoviť.
2. Vyberte **Otvoriť históriu verzií**.
3. Na ľavej strane vyberte verziu poznámky, ktorú chcete zobraziť. Obsah sa zobrazí na pravej strane.

**Mobil** ![[obsidian-icon-smartphone.svg#icon]]
1. V **Prieskumníkovi súborov** vyberte poznámku, ktorú chcete obnoviť.
2. Dlhým stlačením vyvolajte kontextovú ponuku.
3. Vyberte **Otvoriť históriu verzií**.
4. V rozbaľovacej ponuke vyberte verziu poznámky, ktorú chcete zobraziť.
5. Po výbere bude obsah poznámky k dispozícii na preskúmanie.

#### Zobrazenie histórie verzií odstráneného alebo premenovaného súboru

1. Otvorte **[[Nastavenia]]**.
2. V bočnom paneli pod **Vstavané pluginy** vyberte **Sync**.
3. Vedľa **Odstránené súbory** vyberte **Zobraziť**.
4. Vyberte poznámku, pre ktorú chcete zobraziť históriu verzií.
5. V rozbaľovacom okne histórie verzií vyberte na ľavej strane verziu poznámky, ktorú chcete zobraziť.

#### Obnovenie predchádzajúcej verzie súboru

**Desktop/Tablet** ![[lucide-monitor-check.svg#icon]]
1. V **Prieskumníkovi súborov** vyberte poznámku, ktorú chcete obnoviť.
2. Vyberte **Otvoriť históriu verzií**.
3. Na ľavej strane vyberte verziu poznámky, ktorú chcete obnoviť. Obsah sa zobrazí na pravej strane.
4. Vyberte tlačidlo **Obnoviť**.
5. Obsah poznámky bude nahradený obnovenou verziou.

**Mobil** ![[obsidian-icon-smartphone.svg#icon]]
1. V **Prieskumníkovi súborov** vyberte poznámku, ktorú chcete obnoviť.
2. Dlhým stlačením vyvolajte kontextovú ponuku.
3. Vyberte **Otvoriť históriu verzií**.
4. V rozbaľovacej ponuke vyberte verziu poznámky, ktorú chcete obnoviť.
5. Po výbere bude obsah poznámky k dispozícii na preskúmanie.
6. Vyberte tlačidlo **Obnoviť**.
7. Obsah poznámky bude nahradený obnovenou verziou.

#### Obnovenie odstráneného súboru

1. Otvorte **[[Nastavenia]]**.
2. V bočnom paneli pod **Vstavané pluginy** vyberte **Sync**.
3. Vedľa **Odstránené súbory** vyberte **Zobraziť**.
4. Vyberte poznámku, ktorú chcete obnoviť.
5. V zozname verzií na ľavej strane vyberte verziu, ktorú chcete obnoviť.
6. Na pravej strane vyberte tlačidlo **Obnoviť**.
7. Poznámka bude obnovená na pôvodné miesto v súborovom systéme.

> [!tip] Môžete vybrať viacero poznámok pomocou **hromadného obnovenia** zaškrtnutím políčok alebo použitím `shift+klik`. Tieto súbory nebude možné v tejto ponuke preskúmať.

### História nastavení

Obsidian Sync tiež sleduje zmeny vykonané v konfiguračných nastaveniach vášho trezora.

#### Zobrazenie histórie verzií nastavenia

1. Otvorte **[[Nastavenia]]**.
2. V bočnom paneli pod **Vstavané pluginy** vyberte **Sync**.
3. Prejdite nadol na **Synchronizácia konfigurácie trezoru**.
4. Vyberte tlačidlo **Zobraziť** vedľa **História verzií [[Nastavenia|nastavení]]**.
5. V rozbaľovacom okne **Súbor [[Nastavenia|nastavení]]** vyberte súbor nastavení, ktorý chcete zobraziť.

#### Obnovenie predchádzajúcej verzie nastavenia

1. Otvorte **[[Nastavenia]]**.
2. V bočnom paneli pod **Vstavané pluginy** vyberte **Sync**.
3. Prejdite nadol na **Synchronizácia konfigurácie trezoru**.
4. Vyberte tlačidlo **Zobraziť** vedľa **História verzií [[Nastavenia|nastavení]]**.
5. V rozbaľovacom okne **Súbor [[Nastavenia|nastavení]]** vyberte súbor nastavení, ktorý chcete zobraziť.
6. V okne zmien vyberte tlačidlo **Obnoviť**.
7. Znovu načítajte alebo reštartujte Obsidian, aby sa nastavenie prejavilo. Ďalšie podrobnosti nájdete v pokynoch v [[Nastavenie Obsidian Sync#Úprava nastavení Obsidian Sync|Úprava nastavení Obsidian Sync]].
