---
permalink: teams/security
cssclasses:
  - soft-embed
---
Naše stránka [Zabezpečení](https://obsidian.md/security) shromažďuje informace o tom, jak Obsidian přistupuje k ochraně vašich dat. Je také místem pro bezpečnostní audity provedené třetími stranami.

## Aspekty k zvážení

Obsidian je navržen tak, aby fungoval jako offline a samostatná aplikace. Obsidian také podporuje vlastní pluginy a motivy. Navíc poskytujeme jak oficiální, tak neoficiální podporu pro různé služby synchronizace souborů.

Pokud nemáte v úmyslu používat komunitní pluginy nebo motivy, ani [[Úvod do Obsidian Sync|Obsidian Sync]] nebo [[Úvod do Obsidian Publish|Obsidian Publish]], budou platit vaše standardní postupy pro zabezpečení aplikací. Pokud však plánujete některou z těchto funkcí používat, doporučujeme důkladně vyhodnotit jejich vhodnost pro vaše pracoviště.

## Komunitní pluginy a motivy

Kromě této části si prosím prostudujte stránku [[Bezpečnost pluginů]].

Tým Obsidian kontroluje všechny komunitní pluginy a motivy odeslané do oficiálního adresáře prostřednictvím našeho [repozitáře vydání](https://github.com/obsidianmd/obsidian-releases/pulls?q=is%3Apr+is%3Aopen+sort%3Aupdated-desc). Nekontrolujeme komunitní položky, které nebyly odeslány do oficiálního adresáře.

Nemáme komunitní obchod pro [[CSS úryvky]]. Tyto soubory se obvykle získávají z naší [komunity Obsidian](https://obsidian.md/community) nebo z veřejných repozitářů na GitHubu.

Vyžadujeme sdružování prostředků do CSS úryvků a motivů. Udělali jsme však výjimku pro [Google Fonts](https://fonts.google.com/), aby byl zachován výkon na mobilních zařízeních, kde je dopad sdružování písem výraznější.

## Síť a přístup

I přes prioritní přístup lokálního zpracování naší aplikace provádí Obsidian síťová volání na základě služeb a funkcí, které používáte. Tato síťová připojení lze zakázat pomocí doménového firewallu nebo uzamčení aplikace.

Obsidian navazuje tato síťová připojení přes HTTPS port 443.

Následuje seznam síťových připojení, která Obsidian navazuje.

### Připojení ze zdrojů Obsidian

- **Aktualizace s předběžným přístupem**: Používá `releases.obsidian.md`.
- **Správa účtu a licencí**: Při přístupu k vašemu účtu Obsidian v Nastavení a při uplatňování komerční licence voláme `api.obsidian.md`.
- **Obsidian Sync**: Používá se pro synchronizaci vašich poznámek mezi zařízeními.
	- `sync-xx.obsidian.md`, kde `xx` je číslo mezi 01-100.
- **Obsidian Publish**:
    1. Backend: `publish-main.obsidian.md` a `publish-xx.obsidian.md`, kde `xx` je číslo.
    2. Frontend: `publish.obsidian.md`.

### Připojení ze zdrojů GitHub

Obsidian provádí síťové požadavky na `github.com` i `raw.githubusercontent.com`.

- **Veřejná vydání**: Pokud jsou povoleny automatické aktualizace, Obsidian kontroluje na GitHubu veřejná vydání.
- **Pluginy a motivy třetích stran**:
    - Jednou za 12 hodin od spuštění aplikace se provádí kontrola za účelem stažení souboru hostovaného na GitHubu, který se používá pro „zastarávání pluginů." Tento soubor pomáhá vzdáleně zakázat konkrétní verze pluginů, o kterých je známo, že nefungují správně, způsobují ztrátu dat nebo mohou být zranitelné či škodlivé.
    - Zapnuté pluginy mohou generovat síťový provoz mimo kontrolu Obsidian a GitHubu.

### Další připojení

- **Vložený online obsah**: Při otevírání poznámek, které vkládají online obsah, například obrázek (`![cat](https://upload.wikimedia.org/wikipedia/commons/0/0b/Cat_poster_1.jpg)`).
- **DNS požadavky**: Pokud je třeba přeložit název hostitele před navázáním připojení, včetně DNS přes HTTPS. Další informace najdete v [dokumentaci Chromia](https://source.chromium.org/chromium/chromium/src/+/main:net/dns/public/doh_provider_entry.cc;l=120?q=chrome.cloudflare-dns.com&ss=chromium).

## Často kladené otázky

### Zabezpečení účtu

**Podporuje Obsidian jednotné přihlášení (SSO)?**
Obsidian nepodporuje SSO. Ve většině případů použití Obsidian nevyžaduje účet ani přihlášení na vašem pracovišti, pokud nepoužíváte [[Úvod do Obsidian Publish|Obsidian Publish]] nebo [[Úvod do Obsidian Sync|Obsidian Sync]].

**Podporuje Obsidian vícefaktorové ověření (MFA)?**
Obsidian podporuje [[Dvoufaktorové ověření|dvoufaktorové ověření]] (2FA) pro účty Obsidian, ale nepodporuje 2FA pro otevření a používání základní aplikace. Uživatelé [[Úvod do Obsidian Sync|Obsidian Sync]] a [[Úvod do Obsidian Publish|Obsidian Publish]], kteří mají povolené 2FA, budou muset potvrdit svůj 2FA klíč při prvním přihlášení do aplikace.

### Posouzení a certifikace

**Přijmete bezpečnostní posouzení od naší společnosti?**
Před zvážením provedení bezpečnostního posouzení vyžadujeme minimální částku objednávky. Tato posouzení jsou často časově náročná a nemusí být aplikovatelná na offline aplikace jako Obsidian, protože jsou obvykle zaměřena na cloudové služby.

Tuto požadovanou částku objednávky však můžete obejít souhlasem s platbou zálohy. Pro dotazy ohledně této možnosti kontaktujte [[Nápověda a podpora#Contact Obsidian support|podporu Obsidian]].

**Máte nějaké uznávané certifikace související s informační bezpečností nebo standardy kvality, jako jsou ISO27001, NIST, COBIT nebo jiné certifikace ISO či CSA?**
V současné době ne. Je to něco, co možná prozkoumáme v budoucnu, ale prozatím se zaměřujeme na naše [bezpečnostní audity](https://obsidian.md/security).
