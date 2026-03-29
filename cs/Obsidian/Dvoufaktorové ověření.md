---
permalink: 2fa
---
Pokud máte [Obsidian účet](https://obsidian.md/account), můžete zapnout dvoufaktorové ověření (2FA), které ochrání váš účet pomocí druhého ověřovacího kroku.

## Zapnutí 2FA

- Přihlaste se do [svého Obsidian účtu](https://obsidian.md/account/profile) prostřednictvím webového prohlížeče.
- V sekci **Profil** přejděte na **Dvoufaktorové ověření** a vyberte **Zapnout**.
- Zobrazí se vyskakovací okno s výzvou k připojení autentizační aplikace pomocí **QR kódu** nebo **nastavovacího klíče**.

> [!hint]- Oblíbené autentizační aplikace
> - [Authy](https://authy.com)
> - [Google Authenticator](https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2)
> - [Microsoft Authenticator](https://www.microsoft.com/en-us/security/mobile-authenticator-app)
> - [iCloud Klíčenka](https://support.apple.com/en-gb/guide/iphone/ipha6173c19f/ios)

- Po připojení vám autentizační aplikace poskytne šestimístný kód. Zadejte tento kód pod sekci **QR kód/nastavovací klíč**, v kroku 3.
- Nakonec zadejte své aktuální heslo.
- Vyberte **Dokončit nastavení**.
- Vyskakovací okno bude nahrazeno potvrzovacím oknem a vašimi obnovovacími kódy. Prosím stáhněte si své obnovovací kódy, protože je budete potřebovat k odemknutí svého účtu.

Vaše 2FA je nyní nastaveno.

> [!warning]- Zálohy QR kódu/nastavovacího klíče
> Pokud se rozhodnete uchovávat zálohu svého **QR kódu** nebo **nastavovacího klíče** vedle obnovovacích kódů, důrazně doporučujeme uchovávat ji v systému chráněném heslem.

## Generování obnovovacích kódů

Pokud jste zapnuli 2FA ještě před tím, než byly obnovovací kódy k dispozici, nebo pokud chcete obnovit své obnovovací kódy, postupujte podle těchto kroků:

- Přihlaste se do [svého Obsidian účtu](https://obsidian.md/account/profile) prostřednictvím webového prohlížeče.
- Vedle položky Dvoufaktorové ověření vyberte **Obnovit obnovovací kódy**.
- Ve vyskakovacím okně zadejte své **heslo** a **6místný autentizační kód**.
- V potvrzovacím okně se zobrazí vaše obnovovací kódy. Máte dvě možnosti:
    - **Kopírovat obnovovací kódy**: Zkopírujte kódy pro vložení jinam.
    - **Stáhnout obnovovací kódy**: Stáhněte soubor `obsidian-recovery-codes.txt` obsahující vaše kódy.
- Vyberte **Rozumím** pro zavření vyskakovacího okna.

Obnovovací kód můžete použít **pouze jednou** místo **6místného autentizačního kódu**. Obnovovací kódy můžete také kdykoli obnovit.

## Vypnutí 2FA

- Přihlaste se do [svého Obsidian účtu](https://obsidian.md/account/profile) prostřednictvím webového prohlížeče.
- V sekci **Profil** přejděte na **Dvoufaktorové ověření** a vyberte **Vypnout**.
- Zadejte své heslo k Obsidian.
- Zadejte aktuální šestimístný kód z vaší autentizační aplikace.
- Vyberte **Vypnout 2FA**.
- Budete přesměrováni zpět na obrazovku správy účtu.

U nastavení **Dvoufaktorové ověření** se opět zobrazí tlačítko **Zapnout**, což značí, že 2FA bylo vypnuto.

## Často kladené otázky

**Zapnul/a jsem 2FA. Budu odhlášen/a ze svých aktuálních Obsidian zařízení?**
Ne. Zapnutí 2FA vás pro vaše pohodlí neodhlásí ze všech zařízení. Pokud potřebujete, můžete to provést ručně ze stránky svého účtu a následně se znovu přihlásit na každém ze svých zařízení.

**Zapnul/a jsem a poté vypnul/a 2FA. Chtěl/a bych ho znovu nastavit. Mohu použít původní QR kód nebo nastavovací klíč?**
Ne. Při každém novém nastavení 2FA obdržíte nový **QR kód** a nový **nastavovací klíč**.

**Zapnul/a jsem 2FA. Po několika pokusech o odhlášení/přihlášení jsem nebyl/a požádán/a o zadání kódu. Funguje to?**
Mezipaměť vašeho prohlížeče vám může umožnit zdánlivě provádět změny na stránce (jako přihlášení nebo odhlášení), zatímco ve skutečnosti přistupujete k uloženým datům. Zkuste se přihlásit v okně anonymního prohlížení a potvrďte, že 2FA funguje.

Pokud tento problém přetrvává, prosím [nahlaste chybu](https://forum.obsidian.md/c/bug-reports/7).

**Ztratil/a jsem obnovovací kódy, autentizátor a vše potřebné k přihlášení do svého účtu. Co mám dělat?**

Pokud jste ztratili obnovovací kódy a autentizátor, napište prosím na [support@obsidian.md](mailto:support@obsidian.md?subject=I%20lost%20my%202FA) pro pomoc se znovuzískáním přístupu k vašemu účtu.
