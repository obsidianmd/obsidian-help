---
permalink: import/apple-notes
---
Obsidian vám umožňuje jednoducho migrovať vaše poznámky z Apple Notes pomocou [[Importér|pluginu Importér]]. Tento nástroj skonvertuje vaše dáta z Apple Notes do trvanlivých Markdown súborov, ktoré môžete používať s Obsidian a mnohými ďalšími aplikáciami.

V súčasnosti Importér podporuje migráciu z Apple Notes iba na macOS. Na iOS zatiaľ nie je k dispozícii.

## Import dát z Apple Notes do Obsidian

Budete potrebovať oficiálny Obsidian plugin [[Importér]], ktorý môžete [nainštalovať tu](obsidian://show-plugin?id=obsidian-importer).

1. Otvorte **[[Nastavenia]]**.
2. Prejdite na **Komunitné pluginy** a [nainštalujte Importér](obsidian://show-plugin?id=obsidian-importer).
3. Zapnite plugin Importér.
4. Otvorte plugin **Importér** pomocou palety príkazov alebo ikony na paneli nástrojov.
5. V časti **Formátovať** vyberte **Apple Notes**.
6. Kliknite na **Importovať**.
7. Kliknite na **Otvoriť** vo vyskakovacom okne s názvom `Select the "group.com.apple.notes" folder to allow Obsidian to read Apple Notes data`.
8. Počkajte, kým sa import dokončí.
9. Hotovo!

## Podporovaný obsah

Plugin Obsidian Importér podporuje prakticky všetky typy obsahu Apple Notes. To zahŕňa tabuľky, obrázky, kresby, skeny, PDF súbory a odkazy zavedené v iOS 17.

> [!Warning]
> Poznámky chránené heslom sú šifrované spoločnosťou Apple, preto ich pred importom musíte odomknúť. Všetky zamknuté poznámky budú preskočené.

### Skeny

Apple ukladá skeny v rôznych formátoch v závislosti od spôsobu ich vytvorenia. Na zachovanie pôvodných dát to znamená, že budú exportované rôzne.

* Skeny vytvorené alebo zobrazené na starších verziách macOS alebo iOS budú exportované ako séria neorezaných obrázkov.
* Skeny vytvorené alebo zobrazené na novších verziách macOS alebo iOS budú zvyčajne exportované ako orezané obrázky.
* Skeny, ktoré boli upravené pomocou funkcií zavedených v iOS 17, budú zvyčajne exportované ako PDF súbory.

## Alternatívne metódy exportu

Apple neposkytuje natívnu možnosť exportu vašich poznámok. Existuje však niekoľko nástrojov tretích strán, ako napríklad [Exporter](https://apps.apple.com/us/app/exporter/id1099120373) od Chintana Ghateho. Majte na pamäti, že väčšina nástrojov je obmedzená v tom, aké dáta z Apple Notes dokáže exportovať, a nemusí poskytnúť najkompatibilnejší výstup. Tieto nástroje fungujú najlepšie, ak vaše Apple Notes obsahujú prevažne iba text a majú málo príloh alebo špeciálnych funkcií, ako sú kresby a skeny.

V závislosti od nástroja, ktorý ste použili, môže byť export vo formáte Markdown alebo HTML. Postupujte podľa pokynov na základe formátu súboru, do ktorého ste exportovali:

- [[Import HTML súborov]]
- [[Import Markdown súborov]]
