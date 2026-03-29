---
permalink: plugins/file-recovery
publish: true
mobile: true
description: Obnova súborov pomáha chrániť vašu prácu pred neúmyselnou stratou údajov automatickým ukladaním snímok vašich poznámok v pravidelných intervaloch.
---
Obnova súboru je [[Vstavané pluginy|základný plugin]], ktorý chráni vašu prácu pred náhodným vymazaním, poškodením súborov alebo nechcenými zmenami automatickým ukladaním kompletných snímok vašich poznámok v pravidelných intervaloch. Obnova súboru nie je kompletné riešenie zálohovania a odporúčame tiež [[Zálohovanie súborov Obsidian|zálohovať]] vaše súbory Obsidian samostatne.

Aby Obsidian nezaberal [[#Úložisko a výkon|príliš veľa miesta]], uchováva snímky len určitý počet dní pred ich odstránením. Snímky zachytávajú kompletný obsah vašich súborov, nie len zmeny, čo vám umožňuje obnoviť akúkoľvek predchádzajúcu verziu.

> [!info]+ Informácia
> Predvolene sa snímky ukladajú minimálne každých 5 minút a uchovávajú sa 7 dní. Oba intervaly môžete konfigurovať v časti **[[Nastavenia]] → Vstavané pluginy → Obnova súboru**.

Snímky sa uchovávajú v [[Ako Obsidian ukladá dáta#Globálne nastavenia|Globálnych nastaveniach]], mimo trezora, aby sa zohľadnila strata údajov súvisiacich s trezorom. To znamená, že snímky sú uložené s absolútnou cestou k poznámke. Ak ste nedávno presunuli svoj trezor, možno ho budete musieť presunúť späť na miesto, kde sa nachádzal v čase vytvorenia snímky.

> [!tip] Ak používate [[Úvod do Obsidian Sync|Obsidian Sync]] alebo [[Synchronizácia poznámok medzi zariadeniami|iné synchronizačné služby]], snímky Obnovy súboru sa nebudú synchronizovať medzi zariadeniami. Snímky sú špecifické pre zariadenie a zostávajú lokálne na každom zariadení.

## Obnovenie snímky

1. Otvorte **[[Nastavenia]]**.
2. V bočnom paneli vyberte **Obnova súboru** v časti **Vstavané pluginy**.
3. V časti **Obrazy histórie** vyberte **Zobraziť**.
4. Do poľa s názvom súboru začnite písať názov súboru, ktorý chcete obnoviť, a zobrazí sa zoznam návrhov.
5. Vyberte súbor, stlačte Enter a zobrazí sa zoznam dostupných snímok.
6. Vyberte snímku, ktorú chcete obnoviť.
    1. Ak chcete skopírovať a prilepiť do novej poznámky, vyberte tlačidlo **Kopírovať**.
    2. Ak chcete súbor úplne obnoviť, vyberte tlačidlo **Obnoviť**.
7. Voliteľne môžete zobraziť rozdiely medzi snímkami prepnutím **Zobraziť zmeny**. Toto zobrazí, aký obsah bol pridaný, odstránený alebo zmenený medzi verziami snímok.

## Vymazanie histórie snímok

> [!danger] Vymazanie histórie snímok nenávratne odstráni všetky snímky vo vašom trezore.

1. Otvorte **[[Nastavenia]]**.
2. V bočnom paneli vyberte **Obnova súboru** v časti **Vstavané pluginy**.
3. V časti **Odstrániť históriu** vyberte **Vyčistiť**.
4. Potvrďte, že chcete odstrániť všetky snímky, kliknutím na **Vyčistiť**.

## Úložisko a výkon

Snímky obnovy súboru zvyčajne zaberajú minimálne miesto na disku, pretože ukladajú len zmenené súbory. Avšak v trezoroch s mnohými veľkými súbormi alebo častými úpravami sa snímky môžu časom nahromadiť. Sledujte využitie úložiska a v prípade potreby upravte dobu uchovávania.

## Obmedzenia

- **Režim uzamknutia Apple**: Táto funkcia nie je dostupná na zariadeniach Apple so zapnutým [režimom uzamknutia](https://support.apple.com/en-us/105120), pokiaľ Obsidian nemá výnimku.
- **Typy súborov**: Pomocou Obnovy súboru je možné obnoviť iba súbory `.md` a `.canvas`.
- **Umiestnenie trezora**: Ak presuniete trezor na iné miesto bez použitia [[Spravovať trezory#Presunutie trezora do iného priečinka|prepínača trezorov]], existujúce snímky nemusia byť dostupné.
