---
permalink: 2fa
---
Om du har ett [Obsidian-konto](https://obsidian.md/account) kan du aktivera tvåfaktorsautentisering (2FA) för att skydda ditt konto med ett extra verifieringssteg.

## Aktivera 2FA

- Logga in på [ditt Obsidian-konto](https://obsidian.md/account/profile) från din webbläsare.
- I avsnittet **Profil**, gå till **2-factor authentication** och välj **Aktivera**.
- Ett popup-fönster visas som uppmanar dig att ansluta en autentiseringsapp med antingen en **QR-kod** eller en **konfigurationsnyckel**.

> [!hint]- Populära autentiseringsappar
> - [Authy](https://authy.com)
> - [Google Authenticator](https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2)
> - [Microsoft Authenticator](https://www.microsoft.com/en-us/security/mobile-authenticator-app)
> - [iCloud Nyckelring](https://support.apple.com/en-gb/guide/iphone/ipha6173c19f/ios)

- När appen är ansluten kommer den att ge dig en sexsiffrig kod. Ange koden under avsnittet **QR-kod/konfigurationsnyckel**, i steg 3.
- Ange slutligen ditt nuvarande lösenord.
- Välj **Complete set up**.
- Popup-fönstret ersätts med ett bekräftelsefönster och dina återställningskoder. Ladda ner dina återställningskoder, eftersom du behöver dem för att låsa upp ditt konto.

Din 2FA är nu konfigurerad.

> [!warning]- Säkerhetskopior av QR-kod/konfigurationsnyckel
> Om du väljer att behålla en säkerhetskopia av din **QR-kod** eller **konfigurationsnyckel** utöver dina återställningskoder rekommenderar vi starkt att du förvarar den i ett lösenordskrypterat system.

## Generera återställningskoder

Om du aktiverade 2FA innan återställningskoder var tillgängliga, eller om du vill uppdatera dina återställningskoder, följ dessa steg:

- Logga in på [ditt Obsidian-konto](https://obsidian.md/account/profile) från din webbläsare.
- Bredvid 2-factor authentication, välj **Refresh recovery codes**.
- I popup-fönstret anger du ditt **lösenord** och din **6-siffriga autentiseringskod**.
- Ett bekräftelsefönster visar dina återställningskoder. Du har två alternativ:
    - **Copy recovery codes**: Kopiera koderna för att klistra in dem någon annanstans.
    - **Download recovery codes**: Ladda ner en `obsidian-recovery-codes.txt`-fil som innehåller dina koder.
- Välj **Got it** för att stänga popup-fönstret.

Du kan använda en återställningskod **en gång** istället för din **6-siffriga autentiseringskod**. Du kan också uppdatera dina återställningskoder när som helst.

## Inaktivera 2FA

- Logga in på [ditt Obsidian-konto](https://obsidian.md/account/profile) från din webbläsare.
- I avsnittet **Profil**, gå till **2-factor authentication** och välj **Inaktivera**.
- Ange ditt Obsidian-lösenord.
- Ange den aktuella sexsiffriga koden från din autentiseringsapp.
- Välj **Disable 2FA**.
- Du kommer att föras tillbaka till kontoinställningarna.

Inställningen **2-factor authentication** visar återigen en **Aktivera**-knapp, vilket indikerar att 2FA har inaktiverats.

## Vanliga frågor

**Jag har aktiverat 2FA. Kommer jag att loggas ut från mina nuvarande Obsidian-enheter?**
Nej. Att aktivera 2FA loggar inte ut dig överallt, för din bekvämlighet. Om du behöver kan du göra det manuellt från din kontosida och sedan logga in igen på var och en av dina enheter.

**Jag aktiverade och inaktiverade sedan 2FA. Jag vill ställa in det igen. Kan jag använda den ursprungliga QR-koden eller konfigurationsnyckeln?**
Nej. Du får en ny **QR-kod** och en ny **konfigurationsnyckel** varje gång du påbörjar en ny konfiguration av 2FA.

**Jag har aktiverat 2FA. Jag har ännu inte blivit tillfrågad om det efter flera utloggnings-/inloggningsförsök. Fungerar det?**
Din webbläsarcache kan göra att det ser ut som att du gör ändringar på sidan (som att logga in eller ut) när du i verkligheten använder lagrad data. Prova att använda ett privat webbläsarfönster för att logga in och bekräfta att 2FA fungerar.

Om du fortsätter att uppleva detta beteende, vänligen [skicka en felrapport](https://forum.obsidian.md/c/bug-reports/7).

**Jag har förlorat mina återställningskoder, autentiseringsapp och allt som behövs för att logga in på mitt konto. Vad gör jag?**

Om du har förlorat dina återställningskoder och autentiseringsapp, vänligen skicka e-post till [support@obsidian.md](mailto:support@obsidian.md?subject=I%20lost%20my%202FA) för hjälp med att återfå åtkomst till ditt konto.
