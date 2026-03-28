---
permalink: teams/security
cssclasses:
  - soft-embed
---
Nasza strona [Bezpieczeństwo](https://obsidian.md/security) zawiera informacje o tym, jak Obsidian podchodzi do ochrony Twoich danych. Jest to również miejsce, w którym znajdziesz audyty bezpieczeństwa przeprowadzone przez strony trzecie.

## Kwestie do rozważenia

Obsidian jest zaprojektowany do działania jako aplikacja offline i samodzielna. Obsidian obsługuje również niestandardowe wtyczki i motywy. Ponadto zapewniamy zarówno oficjalne, jak i nieoficjalne wsparcie dla różnych usług synchronizacji plików.

Jeśli nie zamierzasz korzystać z wtyczek społeczności ani motywów, ani z [[Wprowadzenie do Obsidian Sync|Obsidian Sync]] lub [[Wprowadzenie do Obsidian Publish|Obsidian Publish]], zastosowanie będą miały Twoje standardowe procedury zabezpieczania aplikacji. Jednak jeśli planujesz korzystać z którejkolwiek z tych funkcji, zalecamy dokładną ocenę ich przydatności w Twoim miejscu pracy.

## Wtyczki społeczności i motywy

Zapoznaj się ze stroną [[Bezpieczeństwo wtyczek]] oprócz tej sekcji.

Zespół Obsidian przegląda wszystkie wtyczki społeczności i motywy przesłane do oficjalnego katalogu za pośrednictwem naszego [repozytorium wydań](https://github.com/obsidianmd/obsidian-releases/pulls?q=is%3Apr+is%3Aopen+sort%3Aupdated-desc). Nie przeglądamy elementów społeczności, które nie zostały przesłane do oficjalnego katalogu.

Nie mamy sklepu społeczności dla [[Snippety CSS|snippetów CSS]]. Pliki te są zazwyczaj pozyskiwane z naszej [Społeczności Obsidian](https://obsidian.md/community) lub z publicznych repozytoriów GitHub.

Wymagamy dołączania zasobów w snippetach CSS i motywach. Jednak zrobiliśmy wyjątek dla [Google Fonts](https://fonts.google.com/), aby utrzymać wydajność na urządzeniach mobilnych, gdzie wpływ dołączania czcionek jest bardziej odczuwalny.

## Sieć i dostęp

Stawiając na pierwszym miejscu lokalne podejście naszej aplikacji, Obsidian wykonuje połączenia sieciowe w zależności od używanych usług i funkcji. Te połączenia sieciowe można wyłączyć za pomocą zapory domenowej lub blokady aplikacji.

Obsidian nawiązuje te połączenia sieciowe przez HTTPS na porcie 443.

Poniżej znajduje się lista połączeń sieciowych nawiązywanych przez Obsidian.

### Połączenia pochodzące z Obsidian

- **Aktualizacje wczesnego dostępu**: Wykorzystują `releases.obsidian.md`.
- **Zarządzanie kontem i licencjami**: Podczas uzyskiwania dostępu do konta Obsidian w Ustawieniach i stosowania licencji komercyjnej, wysyłamy zapytania do `api.obsidian.md`.
- **Obsidian Sync**: Używany do synchronizacji notatek między urządzeniami.
	- `sync-xx.obsidian.md`, gdzie `xx` to liczba od 01 do 100.
- **Obsidian Publish**:
    1. Backend: `publish-main.obsidian.md` i `publish-xx.obsidian.md`, gdzie `xx` to liczba.
    2. Frontend: `publish.obsidian.md`.

### Połączenia pochodzące z GitHub

Obsidian wykonuje zapytania sieciowe zarówno do `github.com`, jak i `raw.githubusercontent.com`.

- **Wydania publiczne**: Jeśli aktualizacje automatyczne są włączone, Obsidian sprawdza GitHub pod kątem publicznych wydań.
- **Motywy i wtyczki stron trzecich**:
    - Co 12 godzin od uruchomienia aplikacji wykonywane jest sprawdzenie w celu pobrania pliku hostowanego na GitHubie, używanego do „wycofywania wtyczek". Plik ten pomaga zdalnie wyłączać konkretne wersje wtyczek, o których wiadomo, że działają nieprawidłowo, powodują utratę danych lub mogą być podatne na ataki lub złośliwe.
    - Włączone wtyczki mogą generować ruch sieciowy poza kontrolą Obsidian i GitHub.

### Inne połączenia

- **Osadzona zawartość online**: Podczas otwierania notatek zawierających osadzoną zawartość online, np. obraz (`![cat](https://upload.wikimedia.org/wikipedia/commons/0/0b/Cat_poster_1.jpg)`).
- **Zapytania DNS**: Jeśli nazwa hosta musi zostać rozwiązana przed nawiązaniem połączenia, w tym DNS przez HTTPS. Więcej informacji znajdziesz w [dokumentacji Chromium](https://source.chromium.org/chromium/chromium/src/+/main:net/dns/public/doh_provider_entry.cc;l=120?q=chrome.cloudflare-dns.com&ss=chromium).

## Najczęściej zadawane pytania

### Bezpieczeństwo konta

**Czy Obsidian obsługuje Single Sign-On (SSO)?**
Obsidian nie obsługuje SSO. W większości przypadków użycia Obsidian nie wymaga konta ani logowania w Twoim miejscu pracy, chyba że korzystasz z [[Wprowadzenie do Obsidian Publish|Obsidian Publish]] lub [[Wprowadzenie do Obsidian Sync|Obsidian Sync]].

**Czy Obsidian obsługuje uwierzytelnianie wieloskładnikowe (MFA)?**
Obsidian obsługuje [[Uwierzytelnianie dwuskładnikowe|uwierzytelnianie dwuskładnikowe]] (2FA) dla kont Obsidian, ale nie obsługuje 2FA do otwierania i używania podstawowej aplikacji. Użytkownicy [[Wprowadzenie do Obsidian Sync|Obsidian Sync]] i [[Wprowadzenie do Obsidian Publish|Obsidian Publish]], którzy mają włączone 2FA, będą musieli potwierdzić swój klucz 2FA przy pierwszym logowaniu do aplikacji.

### Oceny i certyfikaty

**Czy akceptujecie oceny bezpieczeństwa od naszej firmy?**
Wymagamy minimalnej kwoty zamówienia zakupu przed rozważeniem przeprowadzenia oceny bezpieczeństwa. Takie oceny są często czasochłonne i mogą nie mieć zastosowania do aplikacji offline, takich jak Obsidian, ponieważ są zazwyczaj skierowane do usług opartych na chmurze.

Możesz jednak zrezygnować z tej minimalnej kwoty zamówienia, zgadzając się na opłatę zaliczkową. Skontaktuj się z [[Pomoc i wsparcie#Kontakt z pomocą techniczną Obsidian|pomocą techniczną Obsidian]], aby zapytać o tę opcję.

**Czy posiadacie uznane certyfikaty związane z bezpieczeństwem informacji lub standardami jakości, takie jak ISO27001, NIST, COBIT lub inne certyfikaty ISO lub CSA?**
Nie w tej chwili. Być może zbadamy to w przyszłości, ale na razie koncentrujemy się na naszych [audytach bezpieczeństwa](https://obsidian.md/security).
