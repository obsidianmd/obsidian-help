---
permalink: 2fa
---
Hvis du har en [Obsidian-konto](https://obsidian.md/account) kan du aktivere tofaktorautentisering (2FA) for å beskytte kontoen din med et ekstra verifiseringssteg.

## Aktiver 2FA

- Logg inn på [Obsidian-kontoen din](https://obsidian.md/account/profile) fra nettleseren.
- I **Profil**-seksjonen, gå til **2-factor authentication** og velg **Enable**.
- Et popup-vindu vil be deg om å koble til en autentiseringsapp med enten en **QR-kode** eller en **konfigurasjonsnøkkel**.

> [!hint]- Populære autentiseringsapper
> - [Authy](https://authy.com)
> - [Google Authenticator](https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2)
> - [Microsoft Authenticator](https://www.microsoft.com/en-us/security/mobile-authenticator-app)
> - [iCloud Nøkkelring](https://support.apple.com/en-gb/guide/iphone/ipha6173c19f/ios)

- Når appen er koblet til, vil autentiseringsappen gi deg en sekssifret kode. Skriv inn koden under **QR-kode/konfigurasjonsnøkkel**-seksjonen, i steg 3.
- Til slutt, skriv inn ditt nåværende passord.
- Velg **Complete set up**.
- Popup-vinduet vil bli erstattet med et bekreftelsesvindu og dine gjenopprettingskoder. Vennligst last ned gjenopprettingskodene dine, da du trenger disse for å låse opp kontoen din.

Din 2FA er nå satt opp.

> [!warning]- Sikkerhetskopi av QR-kode/konfigurasjonsnøkkel
> Hvis du velger å beholde en sikkerhetskopi av **QR-koden** eller **konfigurasjonsnøkkelen** i tillegg til gjenopprettingskodene, anbefaler vi sterkt å oppbevare den i et passordkryptert system.

## Generer gjenopprettingskoder

Hvis du aktiverte 2FA før gjenopprettingskoder var tilgjengelig, eller hvis du ønsker å oppdatere gjenopprettingskodene dine, følg disse stegene:

- Logg inn på [Obsidian-kontoen din](https://obsidian.md/account/profile) fra nettleseren.
- Ved siden av 2-factor authentication, velg **Refresh recovery codes**.
- I popup-vinduet, skriv inn ditt **passord** og **6-sifret autentiseringskode**.
- Et bekreftelsesvindu vil vise gjenopprettingskodene dine. Du har to alternativer:
    - **Copy recovery codes**: Kopier kodene for å lime dem inn et annet sted.
    - **Download recovery codes**: Last ned en `obsidian-recovery-codes.txt`-fil som inneholder kodene dine.
- Velg **Got it** for å lukke popup-vinduet.

Du kan bruke en gjenopprettingskode **én gang** i stedet for din **6-sifrede autentiseringskode**. Du kan også oppdatere gjenopprettingskodene dine når som helst.

## Deaktiver 2FA

- Logg inn på [Obsidian-kontoen din](https://obsidian.md/account/profile) fra nettleseren.
- I **Profil**-seksjonen, gå til **2-factor authentication** og velg **Disable**.
- Skriv inn ditt Obsidian-passord.
- Skriv inn den nåværende sekssifrede koden fra autentiseringsappen din.
- Velg **Disable 2FA**.
- Du blir ført tilbake til kontoadministrasjonsskjermen.

Innstillingen for **2-factor authentication** vil igjen vise en **Enable**-knapp, som indikerer at 2FA er deaktivert.

## Ofte stilte spørsmål

**Jeg har aktivert 2FA. Blir jeg logget ut av mine nåværende Obsidian-enheter?**
Nei. Aktivering av 2FA logger deg ikke ut overalt, for din bekvemmelighet. Hvis du trenger det, kan du manuelt gjøre dette fra kontosiden din, og deretter logge inn igjen på hver av enhetene dine.

**Jeg aktiverte, og deretter deaktiverte 2FA. Jeg vil sette det opp igjen. Kan jeg bruke den opprinnelige QR-koden eller konfigurasjonsnøkkelen?**
Nei. Du vil få en ny **QR-kode** og ny **konfigurasjonsnøkkel** hver gang du starter et nytt oppsett av 2FA.

**Jeg har aktivert 2FA. Jeg har ennå ikke blitt bedt om det etter flere utlogging/innlogging-forsøk. Fungerer dette?**
Nettleserens hurtigbuffer kan gjøre at det ser ut som du gjør endringer på siden (som å logge inn eller ut) når du i virkeligheten får tilgang til lagrede data. Prøv å bruke et privat nettleservindu for å logge inn og bekrefte at 2FA fungerer.

Hvis du fortsetter å oppleve denne oppførselen, vennligst [send inn en feilrapport](https://forum.obsidian.md/c/bug-reports/7).

**Jeg har mistet gjenopprettingskodene mine, autentiseringsappen og alt som trengs for å logge inn på kontoen min. Hva gjør jeg?**

Hvis du har mistet gjenopprettingskodene og autentiseringsappen din, vennligst send en e-post til [support@obsidian.md](mailto:support@obsidian.md?subject=I%20lost%20my%202FA) for hjelp med å gjenopprette tilgang til kontoen din.
