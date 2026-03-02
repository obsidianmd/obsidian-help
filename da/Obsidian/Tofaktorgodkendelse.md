---
permalink: to-faktor-godkendelse
---
Hvis du har en [Obsidian konto](https://obsidian.md/account) kan du aktivere tofaktorgodkendelse (2FA) til at beskytte din konto med et ekstra verifikationstrin.

## Sådan aktiverer du 2FA

- Log ind på [din Obsidian konto](https://obsidian.md/account/profile) fra en internet browser
- Går til **2-factor authentication** og vælg aktivér i **Profile** sektionen
- Der vil åbne et popop vindue, som beder dig forbinde til en autorisationsapplikation med enten en **QR kode** eller en **opsætningsnøgle**.

> [!hint]- Populære autorisationsapplikationer
> - [Authy](https://authy.com)
> - [Google Authenticator](https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2)
> - [Microsoft Authenticator](https://www.microsoft.com/en-us/security/mobile-authenticator-app)
> - [iCloud Keychain](https://support.apple.com/en-gb/guide/iphone/ipha6173c19f/ios)

- Når du er forbundet, vil autorisationsapplikationen sende en 6 cifret talkode. Skriv koden nedenunder i sektionen **QR code/setup key**
- Derefter skal du angive dit kodeord
- VÆlg **Complete set up**.
- Popop vinduet bliver erstatet af et beskræftelsesvindue og koder til genopretning. Gem genopretningskoderne, da du kan få brug for dem til at læse din konto op

Din 2FA er nu opsat.

> [!warning]- QR kode/nøgle backup
> Hvis du beslutter dig for at gemme en backup af din **QR kode** eller **opsætningsnøgle** udover dine genopretningskoder, anbefaler vi at du gemmer informationen i et krypteret password system.

## Opret genopretelseskoder

Hvis du aktiverer 2FA før dine genopretningskoder er tilgængelige, eller hvis du vil oprette nye ggenopretningskoder, så følg disse trin:

- Log ind på [din Obsidian konto](https://obsidian.md/account/profile) fra en internet browser
- Ved siden af "2-factor authentication" skal du vælge**Refresh recovery codes**
- Angiv dit **kodeord** og **6 cifrede autorisationkode** i popop vinduet
- Popop vinduet bliver erstatet af et beskræftelsesvindue, der viser dine genopretningskoder. Du har to muligheder:
    - **Copy recovery codes**: Kopiér koderne, så du kan indsætte dem et andet sted
    - **Download recovery codes**: Downloade en `obsidian-recovery-codes.txt` filsom, som indeholder dine koder
- Vælg **Got it** for at lukke popopp vinduet

Du kan anvende en genopretningskode **én** gang i stedet for din **6 cifrede kode**. uU kan altid oprette nye genopretningskoder, hvis du har brug for det.

## Sådan deaktiverer du 2FA

- Log ind på [din Obsidian konto](https://obsidian.md/account/profile) fra en internet browser
- Går til **2-factor authentication** og vælg deaktivér i **Profile** sektionen
- Angiv dit Obsidian kodeord
- Skriv den gældende 6 cifrede kode fra din autorisationsapplikation
- Vælg **Disable 2FA**.
- Du bliver ført tilbage til **Account management** skærmen

**2-factor authentication** indstillingen vil igen vise **Enable** knappen, der indukerer at 2FA er blevet deaktiveret.

## Ofte stillede spørgsmål

**Jeg har aktiveret 2FA. Vil jeg blive logget ud af mine nuværende Obsidian enheder?**
Nej. Aktivering af 2FA logger dig ikke ud nogen steder. Hvis du har brug for det, kan du manuelt gøre det fra din kontoside, og logge ind igen på hver enhed du anvender.

**Jeg har aktiveret og derefter deaktiveret 2FA. Jeg vil gerne aktivere 2FA igen. Kan jeg benytte den originale QR kode eller opsætningsnøgle?**
Nej. Du vil få en ny **QR kode** og en ny **opsætningsnøgle** hver gang du aktiverer 2FA.

**Jeg har aktiveret 2FA. Jeg er ikke blevet spurgt efter QR kode eller opsætningsnøgle selom jeg har looget ind og ud flere gange på min enhed. Virker 2FA overhovedet?**
Din browser cache kan tillade dig, at få det til at se ud som at du laver ændringer på en side, mens du faktisk benytter cachen. Prøv at åbne et privat browservindue og login for at sikre dig, at 2FA faktisk virker.

Hvis du fortsat oplever denne opførsel, så [opret en fejlrapport](https://forum.obsidian.md/c/bug-reports/7).

**Jeg har mistet mine genopretningskoder, autorisationsapplikation og al information, som er nødvendig for at logge ind på min konto. Hvad gør jeg**

Hvis du har mistet dine genopretningskoder og autorisationsapplikation, så skriv en mail til [support@obsidian.md](mailto:support@obsidian.md?subject=I%20lost%20my%202FA) for at få hjælp til at give dig adgang til din konto igen.
