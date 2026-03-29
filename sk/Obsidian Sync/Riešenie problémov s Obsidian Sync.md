---
permalink: sync/troubleshoot
cssclasses:
  - soft-embed
publish: true
mobile: true
description: 'Táto stránka uvádza neobvyklé problémy, s ktorými sa môžete stretnúť pri používaní Obsidian Sync, a spôsoby ich riešenia.'
---
Táto stránka obsahuje zoznam neobvyklých problémov, na ktoré môžete naraziť pri používaní [[Úvod do Obsidian Sync|Obsidian Sync]], a spôsoby ich riešenia. Pred pokračovaním odporúčame prejsť si stránky [[Ikona stavu a správy]] a [[Často kladené otázky]].

## Všeobecné

### Riešenie konfliktov

Konflikt nastane, keď zmeníte ten istý súbor na dvoch alebo viacerých zariadeniach skôr, než sa synchronizujú. Napríklad upravíte poznámku na počítači. Predtým, než sa zmena nahrá, upravíte tú istú poznámku aj na telefóne.

Konflikty sa vyskytujú častejšie, keď pracujete offline. Zmien je viac a čas medzi synchronizáciami je dlhší, čo zvyšuje pravdepodobnosť konfliktov.

#### Ako Obsidian Sync spracováva konflikty

Keď Obsidian Sync nájde konflikt, výsledok závisí od typu súboru:

- **Markdown súbory**: Obsidian Sync zlúči zmeny pomocou algoritmu [diff-match-patch](https://github.com/google/diff-match-patch) od Google.
- **Ostatné typy súborov**: Pre všetky ostatné súbory, vrátane Canvas, Obsidian používa prístup „posledná úprava vyhráva". Naposledy upravená verzia nahradí staršie verzie.

Pri konfliktoch v nastaveniach Obsidian, ako sú nastavenia pluginov, Obsidian Sync zlúči JSON súbory. Aplikuje kľúče z lokálneho JSON na vzdialený JSON.

#### Možnosti riešenia konfliktov

Od verzie Obsidian 1.9.7 si môžete vybrať, ako spracovávať konflikty. Na konfiguráciu tohto nastavenia:

1. Otvorte **[[Nastavenia]]**.
2. Na bočnom paneli vyberte **Sync**.
3. V časti **[[Nastavenia Sync a selektívna synchronizácia#Riešenie konfliktov|Riešenie konfliktov]]** vyberte preferovanú možnosť:
   - **Automaticky zlúčiť** (predvolené): Obsidian Sync skombinuje všetky zmeny z rôznych zariadení do jedného súboru. Tým sa uložia všetky úpravy, ale niekedy to môže vytvoriť duplicitný text alebo problémy s formátovaním. Tieto budete musieť opraviť manuálne.
   - **Vytvoriť konfliktný súbor**: Keď Obsidian nájde konfliktné zmeny, vytvorí samostatný konfliktný súbor namiesto automatického zlúčenia. Potom si môžete prezrieť obe verzie a zlúčiť ich sami. To vám dáva plnú kontrolu nad konečným výsledkom.

> [!warning]+ Nastavte na všetkých zariadeniach
> Nastavenia riešenia konfliktov sú špecifické pre zariadenie. Musíte nakonfigurovať preferovanú možnosť na každom zo svojich zariadení. Tým sa zabezpečí rovnaké správanie na všetkých synchronizovaných zariadeniach.

**Vzor pomenovania konfliktného súboru**

Keď použijete možnosť „Vytvoriť konfliktný súbor", Obsidian vytvorí nový súbor s nasledujúcim vzorom pomenovania:

```
pôvodný-názov-poznámky (Conflicted copy názov-zariadenia RRRRMMDDHHMI).md
```

Napríklad, ak konflikt nastane v poznámke s názvom `Meeting notes.md`, konfliktný súbor sa môže volať:

```
Meeting notes (Conflicted copy MyMacBook2 202411281430).md
```

Konfliktný súbor obsahuje zmeny zo zariadenia, na ktorom bol konflikt zistený. Pôvodný súbor si ponechá vzdialenú verziu. Môžete porovnať oba súbory a manuálne zlúčiť obsah.

> [!info]+ Skontrolujte záznam synchronizácií
> Ak chcete skontrolovať, kedy nastali konflikty, otvorte [[Ikona stavu a správy#Synchronizovať aktivitu|záznam synchronizácií]]. Filtrujte podľa „Merge Conflicts" alebo hľadajte „Conflict".

### Sync odstránil poznámku, ktorú som práve vytvoril na dvoch zariadeniach

Obsidian Sync sa zvyčajne pokúša [[#Riešenie konfliktov|riešiť konflikty]] zlúčením konfliktných poznámok medzi zariadeniami. Problémy sa však môžu vyskytnúť u používateľov, ktorí automaticky vytvárajú alebo menia poznámky pri spustení. To zahŕňa [[Každodenné poznámky]] alebo používanie komunitného pluginu [Templater](https://github.com/SilentVoid13/Templater).

Ak vytvoríte poznámku lokálne na jednom zariadení a v priebehu niekoľkých minút Sync stiahne vzdialenú verziu tej istej poznámky, Sync ponechá vzdialenú verziu bez zlúčenia oboch. V takom prípade môžete lokálnu verziu obnoviť pomocou [[Obnova súboru]].

### Sync nesynchronizuje moje aktualizácie pluginov a nastavení

Obsidian [[Často kladené otázky#Načítava Obsidian Sync moje nastavenia živým obnovením?|nenačítava všetky nastavenia v reálnom čase]]. Po aktualizácii nastavení alebo pluginov musíte Obsidian na ostatných zariadeniach reštartovať, aby sa zmeny prejavili. Na mobilných zariadeniach možno budete musieť aplikáciu vynútene ukončiť.

> [!example]- Zmena témy
> - Na primárnom zariadení (zvyčajne počítač) zmeníte tému späť na predvolenú z vlastnej témy.
> - Záznam synchronizácií potvrdí, že aktualizované súbory boli odoslané do vzdialeného trezora, ale vaše mobilné zariadenie stále zobrazuje vlastnú tému.
> - Na mobilnom zariadení skontrolujte záznam synchronizácií a overte prijatie aktualizovaného súboru `appearance.json`.
> - Znovu načítajte alebo reštartujte Obsidian na mobilnom zariadení.
> - Po znovu načítaní alebo reštartovaní by mobilné zariadenie malo zobrazovať rovnakú tému ako váš počítač.

### Moje súbory stále miznú zo Sync hneď, ako ich obnovím

Tento problém je najčastejší v systéme Windows. Windows Defender môže umiestniť do karantény súbory s blokmi kódu, čo spôsobí, že niektoré poznámky zmiznú.

Ďalšou bežnou príčinou je dvojitá synchronizácia. K tomu dochádza, keď Obsidian Sync beží súčasne s inou synchronizačnou službou.

![[Prechod na Obsidian Sync#Presuňte váš trezor mimo synchronizačnú službu tretej strany alebo cloudové úložisko]]

---

Napokon sa to môže stať, keď obnovíte súbor na jednom zariadení, ale potom je odstránený zo sekundárneho zariadenia. To sa stáva, keď názov súboru obsahuje [[Ikona stavu a správy#Preskočené správy|nepovolené znaky]].

## Android

**Moje zariadenie odstraňuje prílohy, ktoré prijímam cez Sync**

Tento problém je pravdepodobne spôsobený tým, že Google alebo Android Photos spravujú vaše prílohy. Aby ste zabránili systému meniť súbory prijaté cez Sync, pridajte súbor `.nomedia` [do vášho trezora](https://support.google.com/android/thread/60342076/what-are-these-nomedia-files?hl=en) na vašom Android zariadení.

> [!tip]- Použite plugin
> Komunitný plugin [Android Nomedia](https://obsidian.md/plugins?id=android-nomedia) to uľahčuje. Nainštalujte si ho na svoj Android telefón. Upozorňujeme, že súbory `.nomedia` sa nesynchronizujú medzi zariadeniami cez Obsidian Sync.
