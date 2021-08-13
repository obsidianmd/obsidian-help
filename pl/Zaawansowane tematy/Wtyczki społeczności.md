Obsidian pozwala deweloperom na pisanie wtyczek społeczności, które rozszerzają funkcjonalność Obsidiana.

W tej chwili API wtyczek jest w fazie alpha. Oznacza to, że każda część API może wprowadzić psujące zmiany w przyszłym wydaniu.

### Dla deweloperów

Instrukcje tworzenia nowych wtyczek znajdziesz w [naszej przykładowej wtyczce](https://github.com/obsidianmd/obsidian-sample-plugin).

Aby uzyskać dokumentację dla API, sprawdź [nasze repozytorium API wtyczek](https://github.com/obsidianmd/obsidian-api).

Po utworzeniu wtyczki możesz dodać ją do naszego społecznościowego rynku wtyczek, tworząc pull request w [naszym repozytorium wydań](https://github.com/obsidianmd/obsidian-releases). Odnieś się do przykładowej wtyczki, aby dowiedzieć się, jak wydawać aktualizacje dla swojej wtyczki.

### Dla użytkowników

#### Tryb Bezpieczny

Domyślnie Obsidian ma włączony tryb bezpieczny, aby chronić Cię przed potencjalnymi szkodami. W trybie bezpiecznym nie będą uruchamiane żadne wtyczki społeczności.

Pamiętaj, że wtyczki społeczności mogą uzyskiwać dostęp do plików na Twoim komputerze, łączyć się z internetem, a nawet instalować dodatkowe programy. Aby przeczytać więcej o bezpieczeństwie wtyczek, [[#Bezpieczeństwo wtyczek|spójrz tutaj]].

Aby zainstalować wtyczki społeczności, musisz wyłączyć tryb bezpieczny w Ustawienia -> Wtyczki społeczności -> Tryb bezpieczny.

#### Odkryj i zainstaluj wtyczki społecznościowe

Po wyłączeniu trybu bezpiecznego, możesz znaleźć wtyczki utworzone przez społeczność w Ustawienia -> Wtyczki społeczności -> Przeglądaj.

Na tej stronie możesz przeglądać wtyczki według popularności lub wyszukiwać określone wtyczki. Kliknij na wtyczkę, aby zobaczyć szczegóły i instrukcje od autora wtyczki. Na stronie szczegółów, możesz kliknąć "Zainstaluj", aby zainstalować wtyczkę.

Po zainstalowaniu, możesz znaleźć zainstalowane wtyczki w Ustawienia -> Wtyczki społeczności. Muszą one być włączone, aby działały. Można je tam również odinstalować.

### Bezpieczeństwo wtyczek

Dziękujemy za powierzenie Obsidianowi swoich danych! To wiele dla nas znaczy i bardzo poważnie podchodzimy do kwestii bezpieczeństwa. Dotyczy to również wtyczek innych firm.

Z przyczyn technicznych naszej platformy, nie jesteśmy w stanie ograniczyć wtyczek do określonego poziomu uprawnień lub dostępu. Ponieważ oferujemy Obsidiana za darmo, obecnie nie jesteśmy w stanie ręcznie sprawdzać każdej wtyczki.

Dobrą wiadomością jest to, że Obsidian ma niesamowitą i pełną pasji społeczność, więc polegamy na zaufaniu społeczności, aby zapewnić bezpieczeństwo wtyczek innych firm.

Ogólnie rzecz biorąc, powinieneś być w stanie zaufać większości popularnych wtyczek ze społeczności. Wymagamy, aby wszystkie wtyczki innych firm były otwarte na GitHubie. **Jeśli pracujesz z poufnymi danymi, zalecamy sprawdzenie kodu wtyczki przed jej zainstalowaniem, aby Twoje potrzeby bezpieczeństwa zostały spełnione.** Możesz znaleźć link do repozytorium wtyczek na stronie szczegółów wtyczki.

Jeśli znajdziesz jakiekolwiek błędy w zabezpieczeniach wtyczek społeczności, skontaktuj się z autorem wtyczki, tworząc Issue na GitHubie. Jeśli uważasz, że wtyczka jest złośliwa, skontaktuj się z nami, aby wtyczka została sprawdzona i usunięta.
