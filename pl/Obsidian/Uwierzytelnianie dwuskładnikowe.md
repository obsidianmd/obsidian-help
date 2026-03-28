---
permalink: 2fa
---
Jeśli posiadasz [konto Obsidian](https://obsidian.md/account), możesz włączyć uwierzytelnianie dwuskładnikowe (2FA), aby chronić swoje konto dodatkowym krokiem weryfikacji.

## Włączanie 2FA

- Zaloguj się na [swoje konto Obsidian](https://obsidian.md/account/profile) z poziomu przeglądarki internetowej.
- W sekcji **Profil** przejdź do **Uwierzytelnianie dwuskładnikowe** i wybierz **Włącz**.
- Pojawi się wyskakujące okienko z prośbą o połączenie aplikacji uwierzytelniającej za pomocą **kodu QR** lub **klucza konfiguracyjnego**.

> [!hint]- Popularne aplikacje uwierzytelniające
> - [Authy](https://authy.com)
> - [Google Authenticator](https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2)
> - [Microsoft Authenticator](https://www.microsoft.com/en-us/security/mobile-authenticator-app)
> - [iCloud Keychain](https://support.apple.com/en-gb/guide/iphone/ipha6173c19f/ios)

- Po połączeniu aplikacja uwierzytelniająca wygeneruje sześciocyfrowy kod. Wprowadź ten kod poniżej sekcji **Kod QR/klucz konfiguracyjny**, w kroku 3.
- Na koniec wprowadź swoje aktualne hasło.
- Wybierz **Zakończ konfigurację**.
- Wyskakujące okienko zostanie zastąpione oknem potwierdzenia z kodami odzyskiwania. Pobierz swoje kody odzyskiwania, ponieważ będą potrzebne do odblokowania konta.

Twoje 2FA jest teraz skonfigurowane.

> [!warning]- Kopie zapasowe kodu QR/klucza konfiguracyjnego
> Jeśli zdecydujesz się zachować kopię zapasową **kodu QR** lub **klucza konfiguracyjnego** oprócz kodów odzyskiwania, zdecydowanie zalecamy przechowywanie ich w systemie zabezpieczonym hasłem.

## Generowanie kodów odzyskiwania

Jeśli włączyłeś 2FA zanim kody odzyskiwania były dostępne, lub jeśli chcesz odświeżyć swoje kody odzyskiwania, wykonaj następujące kroki:

- Zaloguj się na [swoje konto Obsidian](https://obsidian.md/account/profile) z poziomu przeglądarki internetowej.
- Obok pozycji Uwierzytelnianie dwuskładnikowe wybierz **Odśwież kody odzyskiwania**.
- W wyskakującym okienku wprowadź swoje **hasło** i **6-cyfrowy kod uwierzytelniający**.
- W oknie potwierdzenia zostaną wyświetlone Twoje kody odzyskiwania. Masz dwie opcje:
    - **Kopiuj kody odzyskiwania**: Skopiuj kody, aby wkleić je w innym miejscu.
    - **Pobierz kody odzyskiwania**: Pobierz plik `obsidian-recovery-codes.txt` zawierający Twoje kody.
- Wybierz **Rozumiem**, aby zamknąć wyskakujące okienko.

Każdego kodu odzyskiwania możesz użyć **tylko raz** zamiast **6-cyfrowego kodu uwierzytelniającego**. Możesz również odświeżyć swoje kody odzyskiwania w dowolnym momencie.

## Wyłączanie 2FA

- Zaloguj się na [swoje konto Obsidian](https://obsidian.md/account/profile) z poziomu przeglądarki internetowej.
- W sekcji **Profil** przejdź do **Uwierzytelnianie dwuskładnikowe** i wybierz **Wyłącz**.
- Wprowadź swoje hasło Obsidian.
- Wprowadź aktualny sześciocyfrowy kod z aplikacji uwierzytelniającej.
- Wybierz **Wyłącz 2FA**.
- Zostaniesz przeniesiony z powrotem na ekran zarządzania kontem.

Ustawienie **Uwierzytelnianie dwuskładnikowe** ponownie wyświetli przycisk **Włącz**, co oznacza, że 2FA zostało wyłączone.

## FAQ

**Włączyłem 2FA. Czy zostanę wylogowany z moich obecnych urządzeń z Obsidian?**
Nie. Włączenie 2FA nie wylogowuje Cię ze wszystkich urządzeń dla Twojej wygody. Jeśli potrzebujesz, możesz to zrobić ręcznie ze strony swojego konta, a następnie zalogować się ponownie na każdym ze swoich urządzeń.

**Włączyłem, a potem wyłączyłem 2FA. Chciałbym skonfigurować je ponownie. Czy mogę użyć oryginalnego kodu QR lub klucza konfiguracyjnego?**
Nie. Przy każdej nowej konfiguracji 2FA otrzymasz nowy **kod QR** i nowy **klucz konfiguracyjny**.

**Włączyłem 2FA. Po kilku próbach wylogowania/zalogowania nie zostałem o nie zapytany. Czy to działa?**
Pamięć podręczna przeglądarki może powodować, że wydaje się, jakbyś wprowadzał zmiany na stronie (takie jak logowanie lub wylogowywanie), podczas gdy w rzeczywistości korzystasz z zapisanych danych. Spróbuj zalogować się w oknie przeglądania prywatnego, aby potwierdzić, że 2FA działa.

Jeśli ten problem nadal występuje, [zgłoś błąd](https://forum.obsidian.md/c/bug-reports/7).

**Zgubiłem swoje kody odzyskiwania, aplikację uwierzytelniającą i wszystko, co potrzebne do zalogowania się na moje konto. Co mam zrobić?**

Jeśli zgubiłeś kody odzyskiwania i aplikację uwierzytelniającą, napisz na adres [support@obsidian.md](mailto:support@obsidian.md?subject=I%20lost%20my%202FA), aby uzyskać pomoc w odzyskaniu dostępu do konta.
