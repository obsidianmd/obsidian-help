---
permalink: community-directory
description: Co zobrazuje veřejná stránka pluginu nebo motivu v adresáři komunity Obsidian.
---
Každý plugin a motiv má svou veřejnou stránku v [komunitním adresáři Obsidian](https://community.obsidian.md). Vyberte plugin z [[Komunitní pluginy#Procházení komunitních pluginů|Procházet]], nebo motiv z [[Motivy#Procházení motivů|Procházet]], přímo v Obsidian, nebo navštivte [community.obsidian.md](https://community.obsidian.md), a otevřete jeho stránku.

Tato stránka vám pomůže pochopit, co jednotlivé sekce obsahují, z pohledu uživatele Obsidian.

> [!tip]- Jste vývojář pluginu nebo motivu?
> Naučte se, jak odesílat a spravovat vlastní pluginy a motivy v [dokumentaci komunitního adresáře](https://docs.obsidian.md/community-directory).

## Záhlaví

Záhlaví zobrazuje ikonu a název položky s označením **Official**, pokud ji vytvořili původní tvůrci pluginu nebo motivu, spolu s ikonou a jménem autora a celkovým počtem stažení položky.

Vyberte **Add to Obsidian** pro otevření položky přímo v Obsidian a její instalaci.

## Přehled

Karta **Overview** zobrazuje snímky obrazovky položky, její podrobný popis, výňatek ze souboru README a mřížku souvisejících pluginů nebo motivů ve stejné kategorii.

## Hodnocení

Karta **Scorecard** zobrazuje automatizované metriky stavu a kontroly položky.

Celkové hodnocení stavu, například Excellent, je rozepsáno do kategorií: hygiena (zda je přítomen README, licence, průvodce přispěváním a popis), údržba (nedávná aktivita commitů a vydání), responsivita (kolik problémů bylo uzavřeno a kolik přispěvatelů bylo nedávno aktivních) a adopce (počet instalací a hvězdiček).

Sekce kontroly zobrazuje výsledek posledního automatizovaného skenování, například Passed, seskupený do úspěšných kontrol (například žádné známé zranitelné závislosti, žádný obfuskovaný kód, ověřené atestace artefaktů z GitHubu a které API Obsidian položka používá, jako Vault Read nebo Vault Write), odhalení (věci, které položka dělá a které nemusí být nutně problémy, ale měli byste o nich vědět, například přístup ke schránce nebo požadavky na externí domény) a další poznámky (například použití úložiště prohlížeče místo API pro data pluginů v Obsidian).

> [!info]+ Interpretace nižšího skóre
> Plugin nebo motiv s nižším skóre stavu nebo kontroly nemusí být nutně nebezpečný, ale před instalací stojí za to se blíže podívat na jeho odhalení. Představte si to jako semafor:
> - 🟢 Málo nebo žádná odhalení znamenají nízké riziko
> - 🟡 Několik odhalení, stojí za to zkontrolovat věci jako přístup ke schránce nebo síťový přístup
> - 🔴 Více odhalení nebo varování znamená, že byste měli pečlivě zkontrolovat, co položka dělá, než ji nainstalujete.

## Aktualizace

Karta **Updates** uvádí historii vydání položky s verzí a datem každého vydání. Vyberte **View all releases on GitHub** pro zobrazení úplné historie v repozitáři položky.

## Postranní panel

Vedle karet postranní panel zobrazuje souhrny stavu a kontroly odpovídající kartě Scorecard, podrobný popis položky a detaily jako aktuální verze, datum poslední aktualizace a vytvoření, počet aktualizací a stažení, kompatibilní verze Obsidian, podporované platformy a licence. Pokud položka není zdarma, sekce Payments vysvětluje, jak funguje její cenotvorba, například placené úrovně nebo limity využití. Pokud autor přidal odkazy na podporu, objeví se zde také odkaz Support spolu s ikonou autora nebo organizace, jménem a odkazy na jejich další profily.

## Často kladené otázky

**Jaký je rozdíl mezi Free, Optional payment a Paid na stránce položky?**
Free znamená, že nejsou zapojeny žádné platby. Optional payment znamená, že položka spoléhá na placenou službu třetí strany nebo uzamyká určité funkce za platbu, přičemž zůstává zdarma použitelná. Paid znamená, že položka je přístupná pouze s platbou.

Podrobnosti o cenotvorbě konkrétní položky najdete v sekci Payments v postranním panelu.

**Proč nemohu najít nebo nainstalovat plugin nebo motiv, o kterém jsem slyšel jinde?**
Autor jej mohl archivovat. Archivace odstraní položku z komunitního adresáře a zabrání novým instalacím.

**Jaký je rozdíl mezi skóre Health a Review na stránce položky?**
Health odráží průběžnou hygienu a údržbu položky, jako jsou nedávné commity a responsivita u problémů. Review odráží výsledek posledního automatizovaného skenování vydání.
