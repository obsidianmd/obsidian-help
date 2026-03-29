---
permalink: publish/limitations
---
> [!tip] Členovia našej úžasnej komunity vymysleli riešenia pre niektoré z týchto obmedzení. Pre viac informácií Navštívte naše vlákno [Publish Resources](https://forum.obsidian.md/t/obsidian-publish-resources/74582) na fórach Obsidian.

## Komunitné pluginy

Obsidian Publish má minimálnu podporu pre [[Komunitné pluginy]].

Pluginy, ktoré generujú výstup v surovom Markdown, ako napríklad plugin Waypoint, sú kompatibilné s Publish, pretože na vykreslenie svojich dát nevyžadujú aplikáciu.

Naproti tomu plugin, ktorý vyžaduje blok kódu pluginu na vykreslenie, ako napríklad Dataview alebo Fantasy Statblocks, nebude v Publish štandardne fungovať.

## Graf

Publish ponúka základné prispôsobenie farieb pre zobrazenie grafu pomocou CSS. Farby uzlov môžete upraviť vo svojom súbore `publish.css` pomocou [CSS premenných zobrazenia grafu](https://docs.obsidian.md/Reference/CSS+variables/Plugins/Graph).

Upozorňujeme, že publikovaný graf nepodporuje komplexné možnosti triedenia a zobrazenia dostupné v aplikácii [[Graf]].

## Mediálne súbory

Obsidian Publish nie je optimalizovaný na streamovanie videa alebo veľkých zvukových súborov. V týchto dokumentoch uvádzame niektoré osvedčené postupy na prácu s vašimi [[Mediálne súbory|mediálnymi súbormi]].

Na zlepšenie zážitku pre vašich návštevníkov odporúčame namiesto toho použiť službu na hosťovanie videí, ako napríklad YouTube alebo Vimeo.

Na svoju Publish stránku môžete nahrávať súbory s veľkosťou **do 50 MB**. ^publish-media-limit

## PDF

Na mobilných zariadeniach, tabletoch a počítačoch s malými obrazovkami sa môžete stretnúť s problémami, keď sa vložené PDF nenačíta alebo sa zobrazí len prvá strana. Je to spôsobené obmedzeniami vykresľovača PDF na mobilných zariadeniach.

Pre obsah určený mobilným používateľom odporúčame poskytnúť odkazy na PDF súbory hostované externe alebo zahrnúť interné odkazy, ktoré používateľom umožnia stiahnuť PDF priamo do ich zariadenia.

## Vyhľadávanie

Publish má základnú podporu pre vyhľadávanie obyčajného textu v publikovanom obsahu. Prednosť vo výsledkoch vyhľadávania sa dáva:

- Názvom súborov
- Aliasom
- Názvom nadpisov

Po prehľadaní vyššie uvedeného na zhody vyhľadávanie následne zahrnie obyčajný text publikovaných poznámok.

Na zlepšenie vyhľadateľnosti vašej publikovanej stránky sa odporúča používať popisné názvy súborov, začleniť viacero aliasov a vyberať názvy nadpisov, ktoré presne odrážajú obsah.

Okrem toho Publish momentálne nepodporuje funkciu [[Hľadať#Vloženie výsledkov vyhľadávania do poznámky|vložených výsledkov vyhľadávania]] aplikácie.
