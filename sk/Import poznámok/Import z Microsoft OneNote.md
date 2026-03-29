---
permalink: import/onenote
---
Obsidian vám umožňuje jednoducho migrovať vaše poznámky z Microsoft OneNote pomocou [[Importér|pluginu Importér]]. Toto skonvertuje vaše dáta z OneNote do odolných Markdown súborov, ktoré môžete používať s Obsidian a mnohými ďalšími aplikáciami.

> [!Warning]
> Importovať je možné len zápisníky vlastnené vaším osobným účtom. Zdieľané poznámky alebo účty z pracovných a školských účtov nie sú podporované.

## Import dát z OneNote do Obsidian

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

![[OneNote-Importer-Select-Sections.png]]

10. Kliknite na **Importovať** a počkajte, kým sa import dokončí.
11. Hotovo!

## Riešenie problémov

### Nezobrazujú sa žiadne sekcie ani zápisníky

Uistite sa, že zápisníky, ktoré sa pokúšate importovať, sú synchronizované na OneDrive a viditeľné vo OneNote Web. Musia byť vo vašom vlastníctve (zdieľané zápisníky napísané inými používateľmi nie sú podporované).

Ak chýba konkrétna sekcia, uistite sa, že nie je uzamknutá — uzamknuté sekcie sú neviditeľné bez predchádzajúceho odstránenia zámku.

### Importované poznámky sú prázdne alebo im chýba obsah

Tento problém sa môže vyskytnúť pri zápisníkoch, ktoré zriedka používate. Na vyriešenie problému postupujte podľa týchto krokov:

1. Otvorte [OneNote Web](https://onenote.com/notebooks) vo vašom prehliadači.
2. **Kliknite pravým tlačidlom** na zápisníky, ktorým chýba obsah.
3. Z menu vyberte **Exportovať zápisník**.
4. **Rozbaľte** stiahnutý súbor do priečinka.
5. Nahrajte vaše zápisníky OneNote [sem](https://www.onenote.com/notebooks/exportimport?toImport=true).
6. Otvorte **Obsidian Importér** a skúste importovať znova.

Ak ste postupovali podľa týchto tipov a váš problém zostáva nevyriešený, je možné, že ide o dočasný problém so servermi Microsoftu. V takom prípade počkajte niekoľko minút a skúste to znova. Ak problém pretrváva, prosím otvorte problém na [GitHub repozitári Obsidian Importer](https://github.com/obsidianmd/obsidian-importer/issues).

## Súkromie

Plugin Obsidian Importér používa [OAuth](https://learn.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-auth-code-flow) na autentifikáciu s vaším účtom Microsoft a import vašich zápisníkov OneNote. Toto udelí krátkodobý prístupový token k vášmu účtu, ktorý sa používa len z vášho počítača a nikdy sa neukladá. Po dokončení importu môžete voliteľne odvolať token na [stránke aplikácií a služieb Microsoftu](https://account.live.com/consent/Manage).
