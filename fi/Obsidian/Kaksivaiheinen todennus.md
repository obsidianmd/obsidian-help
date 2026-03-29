---
permalink: 2fa
---
Jos sinulla on [Obsidian-tili](https://obsidian.md/account), voit ottaa käyttöön kaksivaiheisen todennuksen (2FA) suojataksesi tilisi toisella varmistusvaiheella.

## Ota 2FA käyttöön

- Kirjaudu [Obsidian-tilillesi](https://obsidian.md/account/profile) verkkoselaimella.
- Siirry **Profiili**-osiossa kohtaan **2-factor authentication** ja valitse **Ota käyttöön**.
- Ponnahdusikkuna kehottaa sinua yhdistämään todennussovelluksen joko **QR-koodilla** tai **asetusavaimella**.

> [!hint]- Suosittuja todennussovelluksia
> - [Authy](https://authy.com)
> - [Google Authenticator](https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2)
> - [Microsoft Authenticator](https://www.microsoft.com/en-us/security/mobile-authenticator-app)
> - [iCloud Avainnippu](https://support.apple.com/en-gb/guide/iphone/ipha6173c19f/ios)

- Kun yhdistäminen on tehty, todennussovelluksesi antaa sinulle kuusinumeroisen koodin. Syötä koodi **QR-koodin/asetusavaimen** alapuolelle vaiheeseen 3.
- Syötä lopuksi nykyinen salasanasi.
- Valitse **Complete set up**.
- Ponnahdusikkuna korvataan vahvistusikkunalla ja palautuskoodeillasi. Lataa palautuskoodisi, sillä tarvitset niitä tilisi lukituksen avaamiseen.

Kaksivaiheinen todennuksesi on nyt käytössä.

> [!warning]- QR-koodin/asetusavaimen varmuuskopiot
> Jos päätät säilyttää varmuuskopion **QR-koodistasi** tai **asetusavaimestasi** palautuskoodien lisäksi, suosittelemme vahvasti säilyttämään ne salasanalla suojatussa järjestelmässä.

## Luo palautuskoodit

Jos otit 2FA:n käyttöön ennen kuin palautuskoodit olivat saatavilla, tai jos haluat päivittää palautuskoodisi, noudata näitä ohjeita:

- Kirjaudu [Obsidian-tilillesi](https://obsidian.md/account/profile) verkkoselaimella.
- Valitse 2-factor authentication -kohdan vierestä **Refresh recovery codes**.
- Syötä ponnahdusikkunassa **salasanasi** ja **kuusinumeroinen todennuskoodi**.
- Vahvistusikkuna näyttää palautuskoodisi. Sinulla on kaksi vaihtoehtoa:
    - **Copy recovery codes**: Kopioi koodit liitettäväksi muualle.
    - **Download recovery codes**: Lataa `obsidian-recovery-codes.txt`-tiedosto, joka sisältää koodisi.
- Valitse **Got it** sulkeaksesi ponnahdusikkunan.

Voit käyttää palautuskoodin **kerran** **kuusinumeroisen todennuskoodin** sijasta. Voit myös päivittää palautuskoodisi milloin tahansa.

## Poista 2FA käytöstä

- Kirjaudu [Obsidian-tilillesi](https://obsidian.md/account/profile) verkkoselaimella.
- Siirry **Profiili**-osiossa kohtaan **2-factor authentication** ja valitse **Poista käytöstä**.
- Syötä Obsidian-salasanasi.
- Syötä todennussovelluksesi antama kuusinumeroinen koodi.
- Valitse **Disable 2FA**.
- Sinut ohjataan takaisin tilinhallinnan näkymään.

**2-factor authentication** -asetus näyttää jälleen **Ota käyttöön** -painikkeen, mikä osoittaa, että 2FA on poistettu käytöstä.

## UKK

**Olen ottanut 2FA:n käyttöön. Kirjaudunko ulos nykyisistä Obsidian-laitteistani?**
Et. Kaksivaiheisen todennuksen käyttöönotto ei kirjaa sinua ulos kaikkialta käyttömukavuuden vuoksi. Tarvittaessa voit tehdä sen manuaalisesti tilisivultasi ja kirjautua sen jälkeen uudelleen sisään kullakin laitteellasi.

**Otin 2FA:n käyttöön ja poistin sen sitten käytöstä. Haluaisin ottaa sen uudelleen käyttöön. Voinko käyttää alkuperäistä QR-koodia tai asetusavainta?**
Et. Saat uuden **QR-koodin** ja uuden **asetusavaimen** joka kerta, kun aloitat uuden 2FA-käyttöönoton.

**Olen ottanut 2FA:n käyttöön. Sitä ei ole pyydetty useiden ulos- ja sisäänkirjautumisten jälkeen. Toimiiko se?**
Selaimesi välimuisti saattaa saada sinut näyttämään siltä, että teet muutoksia sivulla (kuten kirjaudut sisään tai ulos), vaikka todellisuudessa käytät tallennettua tietoa. Kokeile kirjautua sisään yksityisen selausikkunan kautta varmistaaksesi, että 2FA toimii.

Jos ongelma jatkuu, [lähetä virheraportti](https://forum.obsidian.md/c/bug-reports/7).

**Menetin palautuskoodini, todennussovellukseni ja kaiken mitä tarvitsen tililleni kirjautumiseen. Mitä teen?**

Jos olet menettänyt palautuskoodisi ja todennussovelluksesi, lähetä sähköpostia osoitteeseen [support@obsidian.md](mailto:support@obsidian.md?subject=I%20lost%20my%202FA) saadaksesi apua tilisi käyttöoikeuden palauttamiseen.
