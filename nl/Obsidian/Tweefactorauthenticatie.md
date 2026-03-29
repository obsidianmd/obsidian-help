---
permalink: 2fa
---
Als je een [Obsidian-account](https://obsidian.md/account) hebt, kun je tweefactorauthenticatie (2FA) inschakelen om je account te beschermen met een extra verificatiestap.

## 2FA inschakelen

- Log in op [je Obsidian-account](https://obsidian.md/account/profile) vanuit je webbrowser.
- Ga in het gedeelte **Profiel** naar **2-factor authentication** en selecteer **Activeer**.
- Er verschijnt een pop-upvenster waarin je wordt gevraagd om een authenticator-app te verbinden met een **QR-code** of een **installatieSleutel**.

> [!hint]- Populaire authenticatie-applicaties
> - [Authy](https://authy.com)
> - [Google Authenticator](https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2)
> - [Microsoft Authenticator](https://www.microsoft.com/en-us/security/mobile-authenticator-app)
> - [iCloud Sleutelbos](https://support.apple.com/en-gb/guide/iphone/ipha6173c19f/ios)

- Zodra de verbinding is gemaakt, geeft je authenticator-app je een zescijferige code. Voer die code in onder het gedeelte **QR-code/installatieSleutel**, in stap 3.
- Voer ten slotte je huidige wachtwoord in.
- Selecteer **Complete set up**.
- Het pop-upvenster wordt vervangen door een bevestigingsvenster met je herstelcodes. Download je herstelcodes, want je hebt deze nodig om je account te ontgrendelen.

Je 2FA is nu ingesteld.

> [!warning]- Back-ups van QR-code/installatieSleutel
> Als je besluit een back-up te bewaren van je **QR-code** of **installatieSleutel** naast je herstelcodes, raden we sterk aan om deze in een met een wachtwoord versleuteld systeem te bewaren.

## Herstelcodes genereren

Als je 2FA hebt ingeschakeld voordat herstelcodes beschikbaar waren, of als je je herstelcodes wilt vernieuwen, volg dan deze stappen:

- Log in op [je Obsidian-account](https://obsidian.md/account/profile) vanuit je webbrowser.
- Selecteer naast 2-factor authentication de optie **Refresh recovery codes**.
- Voer in het pop-upvenster je **wachtwoord** en **6-cijferige authenticatorcode** in.
- Een bevestigingsvenster toont je herstelcodes. Je hebt twee opties:
    - **Copy recovery codes**: Kopieer de codes om ze elders te plakken.
    - **Download recovery codes**: Download een `obsidian-recovery-codes.txt`-bestand met je codes.
- Selecteer **Got it** om het pop-upvenster te sluiten.

Je kunt een herstelcode **eenmalig** gebruiken in plaats van je **6-cijferige authenticatorcode**. Je kunt je herstelcodes ook op elk moment vernieuwen.

## 2FA uitschakelen

- Log in op [je Obsidian-account](https://obsidian.md/account/profile) vanuit je webbrowser.
- Ga in het gedeelte **Profiel** naar **2-factor authentication** en selecteer **Deactiveer**.
- Voer je Obsidian-wachtwoord in.
- Voer de huidige zescijferige code van je authenticatie-app in.
- Selecteer **Disable 2FA**.
- Je wordt teruggebracht naar het accountbeheerscherm.

De instelling **2-factor authentication** toont weer een knop **Activeer**, wat aangeeft dat 2FA is uitgeschakeld.

## Veelgestelde vragen

**Ik heb 2FA ingeschakeld. Word ik uitgelogd op mijn huidige Obsidian-apparaten?**
Nee. Het inschakelen van 2FA logt je voor het gemak niet overal uit. Als dat nodig is, kun je dat handmatig doen vanaf je accountpagina en vervolgens opnieuw inloggen op elk van je apparaten.

**Ik heb 2FA ingeschakeld en daarna uitgeschakeld. Ik wil het opnieuw instellen. Kan ik de oorspronkelijke QR-code of installatieSleutel gebruiken?**
Nee. Je krijgt elke keer dat je een nieuwe installatie van 2FA start een nieuwe **QR-code** en een nieuwe **installatieSleutel**.

**Ik heb 2FA ingeschakeld. Na meerdere uitlog-/inlogpogingen is er nog niet om gevraagd. Werkt het wel?**
Je browsercache kan ervoor zorgen dat het lijkt alsof je wijzigingen aanbrengt op de pagina (zoals in- of uitloggen), terwijl je in werkelijkheid de opgeslagen gegevens benadert. Probeer een privévenster te gebruiken om in te loggen en te bevestigen dat 2FA werkt.

Als je dit gedrag blijft ervaren, [dien dan een bugrapport in](https://forum.obsidian.md/c/bug-reports/7).

**Ik ben mijn herstelcodes, authenticator en alles wat nodig is om in te loggen op mijn account kwijt. Wat moet ik doen?**

Als je je herstelcodes en authenticator bent kwijtgeraakt, neem dan contact op met [support@obsidian.md](mailto:support@obsidian.md?subject=I%20lost%20my%202FA) voor hulp bij het herkrijgen van toegang tot je account.
