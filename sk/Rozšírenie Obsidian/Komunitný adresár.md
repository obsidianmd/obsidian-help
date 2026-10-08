---
permalink: community-directory
description: Čo zobrazuje verejná stránka pluginu alebo témy v adresári komunity Obsidian.
---
Každý plugin a téma má verejnú stránku v [komunitnom adresári Obsidian](https://community.obsidian.md). Vyberte plugin z [[Komunitné pluginy#Prehľadávanie komunitných pluginov|Prehľadávania]], alebo tému z [[Témy#Prehľadávanie tém|Prehľadávania]], v Obsidian, alebo navštívte priamo [community.obsidian.md](https://community.obsidian.md), aby ste otvorili jeho stránku.

Táto stránka vám pomôže pochopiť, čo každá sekcia robí, z pohľadu používateľa Obsidian.

> [!tip]- Ste vývojár pluginov alebo tém?
> Naučte sa, ako odoslať a spravovať vlastné pluginy a témy v [dokumentácii komunitného adresára](https://docs.obsidian.md/community-directory).

## Hlavička

Hlavička zobrazuje ikonu a názov záznamu so značkou **Official** (Oficiálne), ak bol vytvorený pôvodnými tvorcami pluginu alebo témy, spolu s ikonou a menom autora a celkovým počtom stiahnutí záznamu.

Výberom **Add to Obsidian** (Pridať do Obsidian) otvoríte záznam priamo v Obsidian a nainštalujete ho.

## Prehľad

Karta **Overview** (Prehľad) zobrazuje snímky obrazovky záznamu, jeho dlhý popis, úryvok zo súboru README a mriežku súvisiacich pluginov alebo tém v rovnakej kategórii.

## Hodnotenie

Karta **Scorecard** (Hodnotenie) zobrazuje automatizované metriky zdravia a recenzie záznamu.

Celkové hodnotenie zdravia, ako napríklad Excellent (Vynikajúce), sa rozdeľuje na hygienu (či sú prítomné README, licencia, príručka pre prispievateľov a popis), údržbu (nedávna aktivita commitov a vydaní), responzívnosť (koľko issues bolo uzavretých a koľko prispievateľov bolo nedávno aktívnych) a adopciu (počet inštalácií a hviezdičiek).

Sekcia recenzie zobrazuje výsledok posledného automatizovaného skenu, ako napríklad Passed (Prešiel), zoskupený do úspešných kontrol (napríklad žiadne známe zraniteľné závislosti, žiadny obfuskovaný kód, overené GitHub artefaktové atestácie a ktoré Obsidian API záznam používa, ako Vault Read alebo Vault Write), zverejnení (veci, ktoré záznam robí a ktoré nie sú nevyhnutne problémy, ale o ktorých by ste mali vedieť, ako prístup k schránke alebo požiadavky na externé domény) a ďalších poznámok (ako používanie úložiska prehliadača namiesto API pre dáta pluginov Obsidian).

> [!info]+ Interpretácia nižšieho skóre
> Plugin alebo téma s nižším skóre zdravia alebo recenzie nie sú nevyhnutne nebezpečné, ale stojí za to bližšie sa pozrieť na ich zverejnenia pred inštaláciou. Predstavte si to ako semafor:
> - 🟢 Málo alebo žiadne zverejnenia znamená nízke riziko
> - 🟡 Niekoľko zverejnení, stojí za to skontrolovať veci ako prístup k schránke alebo sieti
> - 🔴 Viacero zverejnení alebo varovaní znamená, že by ste mali starostlivo preskúmať, čo záznam robí, pred jeho inštaláciou.

## Aktualizácie

Karta **Updates** (Aktualizácie) zobrazuje históriu vydaní záznamu s verziou a dátumom každého vydania. Výberom **View all releases on GitHub** (Zobraziť všetky vydania na GitHub) zobrazíte úplnú históriu v repozitári záznamu.

## Bočný panel

Vedľa kariet bočný panel zobrazuje súhrny zdravia a recenzie zodpovedajúce karte Hodnotenie, dlhý popis záznamu a podrobnosti ako jeho aktuálna verzia, kedy bol naposledy aktualizovaný a vytvorený, počet aktualizácií a stiahnutí, kompatibilná verzia Obsidian, podporované platformy a licencia. Ak záznam nie je Free (Zadarmo), sekcia Payments (Platby) vysvetľuje, ako funguje jeho cenová politika, napríklad platené úrovne alebo limity používania. Ak autor pridal odkazy na financovanie, objaví sa tu aj odkaz Support (Podpora), spolu s ikonou autora alebo organizácie, menom a odkazmi na ich ďalšie profily.

## Často kladené otázky

**Aký je rozdiel medzi Free (Zadarmo), Optional payment (Voliteľná platba) a Paid (Platené) na stránke záznamu?**
Free znamená, že nie sú zahrnuté žiadne platby. Optional payment znamená, že záznam závisí od platenej služby tretej strany alebo zamyká určité funkcie za platbu, pričom zostáva bezplatne použiteľný. Paid znamená, že záznam je prístupný len s platbou.

Skontrolujte sekciu Payments (Platby) v bočnom paneli záznamu pre konkrétne informácie o tom, ako funguje cenová politika daného záznamu.

**Prečo nemôžem nájsť alebo nainštalovať plugin alebo tému, o ktorých som počul inde?**
Autor ich mohol archivovať. Archivácia odstráni záznam z komunitného adresára a zabráni novým inštaláciám.

**Aký je rozdiel medzi skóre Health (Zdravie) a Review (Recenzia) na stránke záznamu?**
Health odráža priebežnú hygienu a údržbu záznamu, ako napríklad nedávne commity a responzívnosť na issues. Review odráža výsledok posledného automatizovaného skenu vydania.
