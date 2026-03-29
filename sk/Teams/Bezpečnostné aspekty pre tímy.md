---
permalink: teams/security
cssclasses:
  - soft-embed
---
Naša stránka [Bezpečnosť](https://obsidian.md/security) zhromažďuje informácie o tom, ako Obsidian pristupuje k ochrane vašich dát. Je tiež domovom bezpečnostných auditov vykonaných tretími stranami.

## Zváženia

Obsidian je navrhnutý tak, aby fungoval ako offline a samostatná aplikácia. Obsidian tiež podporuje vlastné pluginy a témy. Okrem toho poskytujeme oficiálnu aj neoficiálnu podporu pre rôzne služby synchronizácie súborov.

Ak nemáte v pláne používať komunitné pluginy alebo témy, ani [[Úvod do Obsidian Sync|Obsidian Sync]] alebo [[Úvod do Obsidian Publish|Obsidian Publish]], budú platiť vaše štandardné postupy na zabezpečenie aplikácií. Ak však plánujete používať niektorú z týchto funkcií, odporúčame dôkladne vyhodnotiť ich vhodnosť pre vaše pracovisko.

## Komunitné pluginy a témy

Okrem tejto sekcie si prečítajte aj stránku [[Bezpečnosť pluginov]].

Tím Obsidian kontroluje všetky komunitné pluginy a témy odoslané do oficiálneho adresára prostredníctvom nášho [repozitára vydaní](https://github.com/obsidianmd/obsidian-releases/pulls?q=is%3Apr+is%3Aopen+sort%3Aupdated-desc). Nekontrolujeme komunitné položky, ktoré neboli odoslané do oficiálneho adresára.

Nemáme komunitný obchod pre [[CSS snippety]]. Tieto súbory sa zvyčajne získavajú z našej [Obsidian komunity](https://obsidian.md/community) alebo z verejných GitHub repozitárov.

Vyžadujeme zbalenie zdrojov v CSS snippetoch a témach. Urobili sme však výnimku pre [Google Fonts](https://fonts.google.com/), aby sme zachovali výkon na mobilných zariadeniach, kde je dopad zbalenia písiem výraznejší.

## Sieť a prístup

Napriek uprednostňovaniu prístupu local-first našej aplikácie, Obsidian vykonáva sieťové volania na základe služieb a funkcií, ktoré používate. Tieto sieťové pripojenia je možné zakázať prostredníctvom doménového firewallu alebo uzamknutia aplikácie.

Obsidian vytvára tieto sieťové pripojenia cez HTTPS port 443.

Nasleduje zoznam sieťových pripojení, ktoré Obsidian vykonáva.

### Pripojenia z Obsidian

- **Aktualizácie s predčasným prístupom**: Používajú `releases.obsidian.md`.
- **Správa účtu a licencií**: Pri prístupe k vášmu účtu Obsidian v Nastaveniach a pri uplatňovaní komerčnej licencie voláme `api.obsidian.md`.
- **Obsidian Sync**: Používa sa na synchronizáciu vašich poznámok medzi zariadeniami.
	- `sync-xx.obsidian.md`, kde `xx` je číslo medzi 01-100.
- **Obsidian Publish**:
    1. Backend: `publish-main.obsidian.md` a `publish-xx.obsidian.md`, kde `xx` je číslo.
    2. Frontend: `publish.obsidian.md`.

### Pripojenia z GitHub

Obsidian vykonáva sieťové požiadavky na `github.com` aj `raw.githubusercontent.com`.

- **Verejné vydania**: Ak sú povolené automatické aktualizácie, Obsidian kontroluje GitHub pre verejné vydania.
- **Pluginy a témy tretích strán**:
    - Každých 12 hodín od spustenia aplikácie sa vykonáva kontrola na stiahnutie súboru hostovaného na GitHub, ktorý sa používa na „zastaranie pluginov." Tento súbor pomáha vzdialene zakázať konkrétne verzie pluginov, o ktorých je známe, že nefungujú správne, spôsobujú stratu dát alebo sú potenciálne zraniteľné či škodlivé.
    - Povolené pluginy môžu generovať sieťovú prevádzku mimo kontroly Obsidian a GitHub.

### Ostatné pripojenia

- **Vložený online obsah**: Pri otváraní poznámok, ktoré vkladajú online obsah, napríklad obrázok (`![cat](https://upload.wikimedia.org/wikipedia/commons/0/0b/Cat_poster_1.jpg)`).
- **DNS požiadavky**: Ak je potrebné rozlíšiť názov hostiteľa pred nadviazaním pripojenia, vrátane DNS cez HTTPS. Viac informácií nájdete v [dokumentácii Chromium](https://source.chromium.org/chromium/chromium/src/+/main:net/dns/public/doh_provider_entry.cc;l=120?q=chrome.cloudflare-dns.com&ss=chromium).

## Často kladené otázky

### Bezpečnosť účtu

**Podporuje Obsidian jednotné prihlásenie (SSO)?**
Obsidian nepodporuje SSO. Vo väčšine prípadov použitia Obsidian nevyžaduje účet ani prihlásenie na vašom pracovisku, pokiaľ nepoužívate [[Úvod do Obsidian Publish|Obsidian Publish]] alebo [[Úvod do Obsidian Sync|Obsidian Sync]].

**Podporuje Obsidian viacfaktorové overenie (MFA)?**
Obsidian podporuje [[Dvojfaktorová autentifikácia|dvojfaktorovú autentifikáciu]] (2FA) pre účty Obsidian, ale nepodporuje 2FA na otvorenie a používanie základnej aplikácie. Používatelia [[Úvod do Obsidian Sync|Obsidian Sync]] a [[Úvod do Obsidian Publish|Obsidian Publish]], ktorí majú povolenú 2FA, budú musieť potvrdiť svoj 2FA kľúč pri prvom prihlásení do aplikácie.

### Hodnotenia a certifikácie

**Prijmete bezpečnostné hodnotenia od našej spoločnosti?**
Vyžadujeme minimálnu sumu ponúknutej objednávky pred zvážením vyplnenia bezpečnostného hodnotenia. Tieto hodnotenia sú často časovo náročné a nemusia byť aplikovateľné na offline aplikácie ako Obsidian, pretože sú zvyčajne zamerané na cloudové služby.

Túto sumu ponúknutej objednávky však môžete odpustiť súhlasom s platbou zálohy. Kontaktujte prosím [[Nápoveda a podpora#Kontaktovať podporu Obsidian|podporu Obsidian]] a informujte sa o tejto možnosti.

**Máte nejaké uznávané certifikácie súvisiace s informačnou bezpečnosťou alebo štandardmi kvality, ako ISO27001, NIST, COBIT alebo iné certifikácie ISO alebo CSA?**
V súčasnosti nie. Je možné, že to v budúcnosti preskúmame, ale zatiaľ sa zameriavame na naše [bezpečnostné audity](https://obsidian.md/security).
