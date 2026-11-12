---
permalink: import/samsung-notes
cssclasses:
  - soft-embed
---
Obsidian vám umožňuje migrovať vaše poznámky zo Samsung Notes pomocou [[Importér|pluginu Importér]]. Toto skonvertuje vaše poznámky na trvanlivé Markdown súbory, ktoré môžete používať s Obsidian a mnohými ďalšími aplikáciami.

## Export poznámok zo Samsung Notes

Samsung Notes ukladá každú poznámku ako súbor Samsung Notes (`.sdocx`).

1. Otvorte Samsung Notes na telefóne alebo tablete.
2. Dotknite sa a podržte poznámku, potom vyberte všetky poznámky, ktoré chcete exportovať.
3. Ťuknite na **Uložiť ako súbor**, potom vyberte **Samsung Notes file**.
4. Vyberte priečinok a ťuknite na **Uložiť**.
5. Presuňte súbory `.sdocx` na zariadenie, kde používate Obsidian, napríklad pomocou USB kábla, Quick Share alebo cloudového úložiska.

Ak máte veľa súborov, môžete ich vložiť do súboru `.zip` a importovať namiesto toho ten. Samsung Notes nezahŕňa svoje priečinky do súborov, ktoré ukladá, ale Importér zachováva priečinky v súbore `.zip`. Ak chcete mať poznámky usporiadané, uložte poznámky z každého priečinka Samsung Notes do priečinka s rovnakým názvom predtým, než ich zazipujete.

## Import dát Samsung Notes do Obsidian

Budete potrebovať oficiálny plugin Obsidian [[Importér]], ktorý si môžete [nainštalovať tu](obsidian://show-plugin?id=obsidian-importer).

1. Otvorte **[[Nastavenia]]**.
2. Prejdite na **Komunitné pluginy** a [nainštalujte Importér](obsidian://show-plugin?id=obsidian-importer).
3. Zapnite plugin Importér.
4. Otvorte plugin **Importér** pomocou palety príkazov alebo ikony na paneli nástrojov.
5. V časti **Formát súboru** vyberte **Samsung Notes (.sdocx)**.
6. Vyberte vaše súbory `.sdocx` alebo súbor `.zip`, ktorý ich obsahuje.
7. Vyberte **Import** na kontrolu vygenerovanej šablóny a náhľad príkladov z vašich poznámok.
8. Vyberte **Import** znova a počkajte, kým sa import dokončí.

## Obmedzenia

- Ručné písmo a nakreslené tvary sa importujú ako obrázok SVG na konci poznámky. Ťahy si zachovajú svoj tvar a farbu, ale nie meniace sa šírky pera citlivého na tlak. Tvary a čiary sa importujú čiernou farbou.
- Textové polia, obrázky umiestnené na stránke a anotované PDF súbory zatiaľ nie sú importované.
- Položky kontrolného zoznamu sa importujú ako nezačiarknuté.
- Farby textu, písma a veľkosti písma sa nezachovávajú.
- Pred exportom odomknite zamknuté poznámky v Samsung Notes.

## Šablóny

Použite [[Šablóny importéra|Šablóny importéra]] na plnú konfiguráciu spôsobu importu vašich dát zo Samsung Notes.

![[Šablóny importéra#Premenné]]
