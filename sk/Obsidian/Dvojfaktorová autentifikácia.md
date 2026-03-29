---
permalink: 2fa
---
Ak máte [Obsidian účet](https://obsidian.md/account), môžete zapnúť dvojfaktorovú autentifikáciu (2FA) na ochranu vášho účtu pomocou druhého overovacieho kroku.

## Zapnutie 2FA

- Prihláste sa do [vášho Obsidian účtu](https://obsidian.md/account/profile) z webového prehliadača.
- V sekcii **Profil** prejdite na **2-faktorová autentifikácia** a vyberte **Zapnúť**.
- Zobrazí sa vyskakovacie okno, ktoré vás vyzve na pripojenie autentifikačnej aplikácie pomocou **QR kódu** alebo **kľúča nastavenia**.

> [!hint]- Populárne autentifikačné aplikácie
> - [Authy](https://authy.com)
> - [Google Authenticator](https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2)
> - [Microsoft Authenticator](https://www.microsoft.com/en-us/security/mobile-authenticator-app)
> - [iCloud Kľúčenka](https://support.apple.com/en-gb/guide/iphone/ipha6173c19f/ios)

- Po pripojení vám autentifikačná aplikácia poskytne šesťmiestny kód. Zadajte tento kód pod sekciou **QR kód/kľúč nastavenia** v kroku 3.
- Nakoniec zadajte vaše aktuálne heslo.
- Vyberte **Dokončiť nastavenie**.
- Vyskakovacie okno bude nahradené potvrdením a vašimi obnovovacími kódmi. Prosím, stiahnite si obnovovacie kódy, pretože ich budete potrebovať na odomknutie vášho účtu.

Vaša 2FA je teraz nastavená.

> [!warning]- Zálohy QR kódu/kľúča nastavenia
> Ak sa rozhodnete uchovávať zálohu vášho **QR kódu** alebo **kľúča nastavenia** popri obnovovacích kódoch, dôrazne odporúčame uchovávať ich v systéme šifrovanom heslom.

## Generovanie obnovovacích kódov

Ak ste zapli 2FA pred tým, než boli obnovovacie kódy dostupné, alebo ak chcete obnoviť vaše obnovovacie kódy, postupujte podľa týchto krokov:

- Prihláste sa do [vášho Obsidian účtu](https://obsidian.md/account/profile) z webového prehliadača.
- Vedľa 2-faktorovej autentifikácie vyberte **Obnoviť obnovovacie kódy**.
- Vo vyskakovacom okne zadajte vaše **heslo** a **6-miestny autentifikačný kód**.
- Potvrdzovacie okno zobrazí vaše obnovovacie kódy. Máte dve možnosti:
    - **Kopírovať obnovovacie kódy**: Skopírujte kódy na prilepenie inde.
    - **Stiahnuť obnovovacie kódy**: Stiahnite súbor `obsidian-recovery-codes.txt` obsahujúci vaše kódy.
- Vyberte **Rozumiem** na zatvorenie vyskakovacieho okna.

Obnovovací kód môžete použiť **jedenkrát** namiesto vášho **6-miestneho autentifikačného kódu**. Obnovovacie kódy môžete tiež kedykoľvek obnoviť.

## Vypnutie 2FA

- Prihláste sa do [vášho Obsidian účtu](https://obsidian.md/account/profile) z webového prehliadača.
- V sekcii **Profil** prejdite na **2-faktorová autentifikácia** a vyberte **Vypnúť**.
- Zadajte vaše Obsidian heslo.
- Zadajte aktuálny šesťmiestny kód z vašej autentifikačnej aplikácie.
- Vyberte **Vypnúť 2FA**.
- Budete presmerovaní späť na obrazovku správy účtu.

Nastavenie **2-faktorová autentifikácia** bude opäť zobrazovať tlačidlo **Zapnúť**, čo znamená, že 2FA bola vypnutá.

## Často kladené otázky

**Zapol som 2FA. Budem odhlásený zo všetkých mojich aktuálnych Obsidian zariadení?**
Nie. Zapnutie 2FA vás pre vaše pohodlie neodhlási všade. Ak to potrebujete, môžete to urobiť manuálne zo stránky vášho účtu a následne sa znova prihlásiť na každom zo svojich zariadení.

**Zapol som a potom vypol 2FA. Chcel by som to nastaviť znova. Môžem použiť pôvodný QR kód alebo kľúč nastavenia?**
Nie. Pri každom novom nastavení 2FA vám bude poskytnutý nový **QR kód** a nový **kľúč nastavenia**.

**Zapol som 2FA. Po niekoľkých pokusoch o odhlásenie/prihlásenie som ešte nebol požiadaný o overenie. Funguje to?**
Vyrovnávacia pamäť vášho prehliadača vám môže umožňovať javiť sa, akoby ste robili zmeny na stránke (ako prihlásenie alebo odhlásenie), keď v skutočnosti pristupujete k uloženým dátam. Skúste sa prihlásiť v okne súkromného prehliadania, aby ste potvrdili, že 2FA funguje.

Ak tento problém pretrváva, prosím [odošlite hlásenie o chybe](https://forum.obsidian.md/c/bug-reports/7).

**Stratil som obnovovacie kódy, autentifikátor a všetko potrebné na prihlásenie do účtu. Čo mám robiť?**

Ak ste stratili obnovovacie kódy a autentifikátor, prosím napíšte na [support@obsidian.md](mailto:support@obsidian.md?subject=I%20lost%20my%202FA) pre pomoc so znovuzískaním prístupu k vášmu účtu.
