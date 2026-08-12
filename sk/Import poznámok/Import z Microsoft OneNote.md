---
permalink: import/onenote
---
Obsidian vám umožňuje jednoducho migrovať vaše poznámky z Microsoft OneNote pomocou [[Importér|pluginu Importér]]. Toto skonvertuje vaše dáta z OneNote do odolných Markdown súborov, ktoré môžete používať s Obsidian a mnohými ďalšími aplikáciami.

Obsidian ponúka dva spôsoby importu dát z OneNote:

1. **Účet Microsoft** prihlási sa do vášho účtu Microsoft a importuje zápisníky synchronizované na OneDrive. Vyžaduje internetové pripojenie.
2. **Import súborov** používa exportné súbory OneNote (`.onepkg` a `.one`). Nevyžaduje účet ani internetové pripojenie a funguje pre zápisníky, ktoré neboli nikdy synchronizované.

## Import z účtu Microsoft

> [!Warning]
> Importovať je možné len zápisníky vlastnené vaším účtom. Zápisníky, ktoré s vami zdieľali iní ľudia, nie sú podporované a pracovný alebo školský účet môže vyžadovať schválenie prístupu vašou organizáciou.

Budete potrebovať oficiálny plugin Obsidian [[Importér]], ktorý si môžete [nainštalovať tu](obsidian://show-plugin?id=obsidian-importer).

1. Otvorte **[[Nastavenia]]**.
2. Prejdite na **Komunitné pluginy** a [nainštalujte Importér](obsidian://show-plugin?id=obsidian-importer).
3. Zapnite plugin Importér.
4. Otvorte plugin **Importér** pomocou palety príkazov alebo ikony na paneli nástrojov.
5. Pod **Formát súboru** vyberte **Microsoft OneNote**.
6. Kliknite na **Prihlásiť sa** pre otvorenie webového prehliadača na prihlasovaciu stránku Microsoftu. Zadajte prihlasovacie údaje pre váš účet Microsoft, ktorý obsahuje vaše zápisníky OneNote. Viac informácií o procese prihlásenia do Microsoftu nájdete nižšie.
7. Kliknite na **Prijať** pre udelenie povolenia Obsidianu na zobrazenie vašich zápisníkov OneNote.
8. Kliknite na **Otvoriť odkaz** pre povolenie presmerovanie prehliadača do aplikácie Obsidian.
9. V aplikácii Obsidian dialógové okno Importéra teraz zobrazí, že ste prihlásení a vypíše vaše zápisníky a sekcie OneNote. Zaškrtnite sekcie, ktoré chcete importovať.
10. Kliknite na **Importovať** a počkajte, kým sa import dokončí.
11. Hotovo!

Ak vaše zápisníky patria k pracovnému alebo školskému účtu, OneNote môže po prihlásení odmietnuť prístup pluginu k nim. V takom prípade sa vedľa **Odhlásiť sa** zobrazí tlačidlo **Použiť pracovný alebo školský prístup**. Použite ho na opätovné prihlásenie s rozšírenými oprávneniami, ktoré tieto účty vyžadujú. Vaša organizácia možno bude musieť toto oprávnenie schváliť, aby fungovalo.

### Riešenie problémov

#### Nezobrazujú sa žiadne sekcie ani zápisníky

Uistite sa, že zápisníky, ktoré sa pokúšate importovať, sú synchronizované na OneDrive a viditeľné vo OneNote Web. Musia byť vo vašom vlastníctve (zdieľané zápisníky napísané inými používateľmi nie sú podporované).

Ak chýba konkrétna sekcia, uistite sa, že nie je uzamknutá, pretože uzamknuté sekcie sú neviditeľné bez predchádzajúceho odstránenia zámku.

Ak ide o pracovný alebo školský zápisník, pozrite si poznámku o **Použiť pracovný alebo školský prístup** vyššie.

#### Importované poznámky sú prázdne alebo im chýba obsah

Tento problém sa môže vyskytnúť pri zápisníkoch, ktoré zriedka používate. Na vyriešenie problému postupujte podľa týchto krokov:

1. Otvorte [OneNote Web](https://onenote.com/notebooks) vo vašom prehliadači.
2. **Kliknite pravým tlačidlom** na zápisníky, ktorým chýba obsah.
3. Z menu vyberte **Exportovať zápisník**.
4. **Rozbaľte** stiahnutý súbor do priečinka.
5. Nahrajte vaše zápisníky OneNote [sem](https://www.onenote.com/notebooks/exportimport?toImport=true).
6. Otvorte **Obsidian Importér** a skúste importovať znova.

Ak ste postupovali podľa týchto tipov a váš problém zostáva nevyriešený, je možné, že ide o dočasný problém so servermi Microsoftu. V takom prípade počkajte niekoľko minút a skúste to znova. Ak problém pretrváva, prosím otvorte problém na [GitHub repozitári Obsidian Importer](https://github.com/obsidianmd/obsidian-importer/issues).

## Import súborov OneNote (.one, .onepkg)

Import súborov je alternatívny spôsob importu dát z OneNote. Číta exportné súbory, ktoré OneNote sám vytvára, takže nepotrebuje účet Microsoft ani internetové pripojenie. Použite ho pre zápisníky uložené len na vašom počítači, zápisníky, ku ktorým váš účet nemá prístup, alebo keď sa radšej nechcete prihlasovať.

### Export zápisníkov z OneNote

Odporúčame exportovať každý zápisník ako **OneNote Package** (`.onepkg`). Jeden balíček obsahuje všetky sekcie zápisníka, takže môžete exportovať a importovať zápisník v jednom kroku a Importér zobrazí jeho sekcie na výber.

Export je dostupný len v **OneNote pre Windows**, desktopovej aplikácii dodávanej s Microsoft 365. Aplikácia OneNote pre Mac a staršia aplikácia OneNote pre Windows 10 nedokážu exportovať do týchto formátov.

1. Otvorte zápisník, ktorý chcete exportovať, v OneNote pre Windows.
2. Prejdite na **Súbor → Export**.
3. Pod **Exportovať aktuálny** vyberte **Zápisník**.
4. Pod **Vybrať formát** vyberte **OneNote Package (\*.onepkg)**.
5. Kliknite na **Export** a vyberte, kam chcete súbor uložiť.
6. Zopakujte pre každý zápisník, ktorý chcete importovať.

Na export jednej sekcie vyberte v kroku 3 **Sekciu** a v kroku 4 **OneNote 2010-2016 Section (\*.one)**.

Môžete tiež importovať súbory sekcií, ktoré OneNote už uchováva na disku, bez exportovania:

- Zápisníky uložené na vašom počítači sú v `Documents\OneNote Notebooks`, jeden súbor `.one` na sekciu.
- Zálohy synchronizovaných zápisníkov sú v `%LOCALAPPDATA%\Microsoft\OneNote\16.0\Backup`.

### Import súborov OneNote

Budete potrebovať oficiálny plugin Obsidian [[Importér]], ktorý si môžete [nainštalovať tu](obsidian://show-plugin?id=obsidian-importer).

1. Otvorte **[[Nastavenia]]**.
2. Prejdite na **Komunitné pluginy** a [nainštalujte Importér](obsidian://show-plugin?id=obsidian-importer).
3. Zapnite plugin Importér.
4. Otvorte plugin **Importér** pomocou palety príkazov alebo ikony na paneli nástrojov.
5. Pod **Formát súboru** vyberte **Microsoft OneNote (.one, .onepkg)**.
6. Vyberte súbory `.onepkg` a `.one`, ktoré chcete importovať. Môžete vybrať viacero súborov naraz, takže všetky vaše zápisníky je možné importovať spolu.
7. Pod **Sekcie na import** sú uvedené sekcie nájdené v týchto súboroch, všetky zaškrtnuté. Odškrtnite čokoľvek, čo nechcete.
8. Voliteľne vyberte **Výstupný priečinok** pre import, kam sa majú uložiť prílohy a čo sa má stať s **Existujúcimi poznámkami**, ak importujete rovnaký zápisník znova.
9. Kliknite na **Importovať** a počkajte, kým sa import dokončí.
10. Hotovo!

Každá sekcia sa stane priečinkom a každá stránka v nej sa stane poznámkou. Podstránka sa uloží do priečinka pomenovaného podľa stránky nad ňou, čo zachováva štruktúru, ktorú OneNote zobrazoval, a zabraňuje kolízii dvoch podstránok s rovnakým názvom. Stránky v koši zápisníka sa neimportujú.

### Obmedzenia

- Sekcie chránené heslom sú uložené šifrovane a ich stránky sa preskočia. Odstráňte heslo v OneNote a znova exportujte, aby ste ich mohli importovať.
- Súbory chránené právami môže otvoriť len účet, ktorý to politika povoľuje, a Importér ich nedokáže prečítať.

## Súkromie

Ak sa rozhodnete importovať pomocou účtu Microsoft, plugin Obsidian Importér používa [OAuth](https://learn.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-auth-code-flow) na autentifikáciu a import vašich zápisníkov OneNote. Toto udelí krátkodobý prístupový token k vášmu účtu, ktorý sa používa len z vášho počítača a nikdy sa neukladá. Po dokončení importu môžete voliteľne odvolať token na [stránke aplikácií a služieb Microsoftu](https://account.live.com/consent/Manage).

Import súborov sa nikdy nepripája k Microsoftu: vybrané súbory sa čítajú na vašom počítači bez akéhokoľvek sieťového pripojenia.
