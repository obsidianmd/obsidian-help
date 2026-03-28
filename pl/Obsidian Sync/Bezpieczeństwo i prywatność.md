---
permalink: sync/security
publish: true
mobile: false
description: Dowiedz się o kwestiach bezpieczeństwa i prywatności dotyczących Obsidian Sync.
---
## Szyfrowanie

Dla Twojego bezpieczeństwa, [[Wprowadzenie do Obsidian Sync|Obsidian Sync]] szyfruje Twój [[Sejfy lokalne i zdalne|zdalny sejf]] oraz całą komunikację z serwerami Obsidian.

Podczas tworzenia nowego zdalnego sejfu masz dwie opcje:

- **Szyfrowanie end-to-end (domyślne)** zapewnia najsilniejsze zabezpieczenia, ale wymaga zachowania hasła szyfrowania w bezpiecznym miejscu. Gwarantuje to, że nikt — nawet zespół Obsidian — nie może uzyskać dostępu do Twoich notatek.
- **Standardowe szyfrowanie** wykorzystuje klucz szyfrowania zarządzany przez Obsidian do ochrony Twoich danych podczas przesyłania i na naszym serwerze.

Zalecamy szyfrowanie end-to-end wszystkim użytkownikom, ponieważ jest to najbardziej prywatna i bezpieczna opcja. Pamiętaj jednak, że jeśli zapomnisz lub zgubisz hasło szyfrowania, Twoje dane pozostaną zaszyfrowane i bezużyteczne na zawsze. Nie jesteśmy w stanie odzyskać Twojego hasła ani żadnych zaszyfrowanych danych.

Twój wybór dotyczy wyłącznie zdalnego sejfu. Obsidian nie szyfruje Twojego lokalnego sejfu.

### Co oznacza szyfrowanie end-to-end?

Szyfrowanie end-to-end oznacza, że dane są szyfrowane od momentu opuszczenia Twojego urządzenia i mogą zostać odszyfrowane wyłącznie przy użyciu Twojego klucza szyfrowania, gdy powrócą na jedno z Twoich urządzeń.

Nie możemy odczytać Twoich danych. Podobnie jak żadni potencjalni podsłuchujący, tacy jak Twój dostawca usług internetowych.

W rzadkim przypadku całkowitego naruszenia bezpieczeństwa serwera Twoje dane pozostają zaszyfrowane — nikt nie może odszyfrować Twoich plików bez znajomości Twojego hasła.

### Jakie są ryzyka związane z używaniem standardowego szyfrowania?

Standardowe szyfrowanie jest zasadniczo mniej bezpieczne niż szyfrowanie end-to-end, ale może być wygodną opcją, jeśli nie oczekujesz, że synchronizowane dane będą całkowicie prywatne. Na przykład, jeśli Twój synchronizowany sejf jest [[Wprowadzenie do Obsidian Publish|opublikowany]] na publicznej stronie internetowej, takiej jak ta strona Pomocy, szyfrowanie end-to-end nie jest konieczne.

Standardowe szyfrowanie to ta sama metoda szyfrowania, która jest stosowana przez firmy oferujące przechowywanie w chmurze i platformy SaaS (oprogramowanie jako usługa), takie jak Google Docs, Dropbox i iCloud (bez zaawansowanej ochrony danych). Klucz szyfrowania jest generowany przez aplikację i służy do ochrony Twoich danych podczas przesyłania i na serwerze. Ponieważ klucz szyfrowania jest przechowywany na serwerach firmy, może zostać użyty do odszyfrowania Twoich danych, np. w przypadku, gdy firma podlega nakazowi przeszukania, lub gdy chcesz uzyskać dostęp do swoich danych przez przeglądarkę internetową.

Szyfrowanie end-to-end gwarantuje, że Obsidian nigdy nie będzie miał dostępu do Twoich danych i powinno być zawsze stosowane do synchronizacji danych, które mają pozostać całkowicie prywatne i bezpieczne.

### Jakiego szyfrowania używacie?

Dla bezpieczeństwa danych stosujemy standardowe w branży protokoły szyfrowania. W szczególności używamy [AES-256](https://www.nist.gov/publications/advanced-encryption-standard-aes-0), najsilniejszego standardu szyfrowania, szeroko stosowanego w kontekstach takich jak bankowość internetowa. Proces szyfrowania obejmuje następujące szczegóły techniczne:

- **Funkcja wyprowadzania klucza:** [scrypt](https://en.wikipedia.org/wiki/Scrypt) z solą
- **Algorytm szyfrowania:** AES-256 z użyciem [Galois/Counter Mode (GCM)](https://en.wikipedia.org/wiki/Galois/Counter_Mode)

### Czy mogę zweryfikować, że moje dane są szyfrowane end-to-end?

Tak. Zobacz nasz przewodnik [jak zweryfikować szyfrowanie end-to-end Obsidian Sync](https://obsidian.md/blog/verify-obsidian-sync-encryption/). Ten przewodnik zawiera instrukcje krok po kroku umożliwiające bezpieczną weryfikację szyfrowania end-to-end Twoich danych podczas wysyłania i odbierania za pośrednictwem serwerów Sync.

### Czy Obsidian przeszedł niezależny audyt bezpieczeństwa?

Tak. Obsidian został niezależnie zaudytowany. Odwiedź naszą [stronę Bezpieczeństwo](https://obsidian.md/security), aby zapoznać się z raportami z audytów. Regularne audyty przeprowadzane przez zewnętrzne firmy zajmujące się bezpieczeństwem zapewniają, że kod i procedury Obsidian spełniają najwyższe standardy bezpieczeństwa.

### Co się stanie, jeśli zapomnę hasła szyfrowania?

Jeśli kiedykolwiek zgubisz lub zapomnisz hasło szyfrowania, nie będziesz w stanie połączyć dodatkowych sejfów ze swoim zdalnym sejfem. Ponieważ hasło szyfrowania nie jest nigdzie zapisywane, jest bezpowrotnie utracone.

Twoje dane są jednak zazwyczaj bezpiecznie przechowywane lokalnie na każdym z Twoich urządzeń.

Aby kontynuować korzystanie z Obsidian Sync, zalecamy przeprowadzenie pełnej ponownej konfiguracji, aby móc dodawać nowe urządzenia do systemu Sync:

1. Wykonaj pełną kopię zapasową sejfu na swoim głównym urządzeniu, na wypadek gdyby coś poszło nie tak. Może to być tak proste jak skopiowanie folderu sejfu lub utworzenie pliku zip z sejfu.
2. Odłącz zdalny sejf na każdym ze swoich urządzeń. Można to zrobić, przechodząc do **[[Ustawienia]] → Sync → Wybierz zdalny sejf → Rozłącz**.
3. [[Konfiguracja Obsidian Sync#Tworzenie nowego zdalnego sejfu|Utwórz nowy zdalny sejf]] na swoim głównym urządzeniu z tej samej strony Ustawień. Opcjonalnie możesz usunąć poprzedni zdalny sejf, ponieważ i tak nie masz do niego hasła. (Może być konieczne usunięcie poprzedniego zdalnego sejfu, jeśli osiągnąłeś [[Najczęściej zadawane pytania#Ile zdalnych sejfów mogę mieć?|limit sejfów]])
4. Poczekaj, aż Twoje główne urządzenie zakończy synchronizację. Obserwuj wskaźnik synchronizacji w prawym dolnym rogu ekranu, aż wyświetli zielony znacznik wyboru.
5. Połącz każde ze swoich urządzeń z tym samym nowo utworzonym zdalnym sejfem. Podczas łączenia zostanie wyświetlone ostrzeżenie o scalaniu sejfu — jest to oczekiwane i możesz kontynuować. Poczekaj, aż każde urządzenie w pełni się zsynchronizuje, zanim przejdziesz do następnego. Zmniejsza to ryzyko problemów.
6. Teraz wszystkie Twoje urządzenia powinny być połączone z nowym zdalnym sejfem.

## Hosting

### Gdzie hostujecie serwery Obsidian Sync?

Nasze centra danych, obsługiwane przez [DigitalOcean](https://www.digitalocean.com), oferują opcje hostingu zdalnych sejfów w regionach geograficznych w następujących lokalizacjach:

> [!abstract] Regiony Sync
> **Automatycznie**: Centrum danych jest wybierane na podstawie lokalizacji Twojego adresu IP w momencie pierwszej konfiguracji.
> 
> **Azja**: Singapur
> **Europa**: Frankfurt, Niemcy
> **Ameryka Północna**: San Francisco, USA
> **Oceania**: Sydney, Australia
^sync-geo-regions

### Gdzie mogę znaleźć mój obecny serwer Sync i gdzie jest hostowany?

Aby zlokalizować swój serwer Obsidian Sync, wykonaj następujące kroki:
1. Przejdź do **[[Ustawienia]]** → **Sync** → **Kopiuj informacje debugowania**.
2. Wklej skopiowane informacje do notatki lub pliku.
3. Poszukaj linii podobnej do: `Host server: wss://sync-xx.obsidian.md`

Ta linia wskazuje serwer, na którym hostowany jest Twój zdalny sejf. Więcej szczegółów na temat lokalizacji serwera i czasu działania znajdziesz na naszej [stronie statusu](https://status.obsidian.md/).

## Sieć i dostęp

### Zarządzanie dostępem do Obsidian Sync w Twojej sieci

Aby regulować dostęp do Obsidian Sync w swojej sieci, musisz zarządzać następującymi domenami:

`sync-xx.obsidian.md`

Gdzie `xx` oznacza liczbę z zakresu od `1 - 100`.

> [!tip] Jeśli Twój system zapory sieciowej to obsługuje, zalecamy dodanie do białej listy `sync-*.obsidian.md`, aby uwzględnić ciągły wzrost liczby subdomen.

## Ograniczenia

Obsidian Sync jest zaprojektowany, aby Twoje notatki pozostały prywatne i bezpieczne. Aby zapewnić szybką, niezawodną synchronizację i wydajne przechowywanie na różnych urządzeniach, dokonujemy pewnych świadomych kompromisów w sposobie stosowania szyfrowania.

### Deterministyczne szyfrowanie skrótów plików

Szyfrujemy skróty plików deterministycznie: ta sama zawartość pliku, przy użyciu tego samego klucza szyfrowania i soli, zawsze generuje ten sam zaszyfrowany skrót na serwerze. Pomaga to Sync wykrywać duplikaty i unikać ponownego przesyłania lub przechowywania identycznych danych, co oszczędza przepustowość i zdalne miejsce na dane, szczególnie w historii wersji lub gdy powtarzają się duże pliki.

Jednakże jeśli atakujący naruszy bezpieczeństwo serwera Sync i ma niezależny sposób na wymuszenie przesyłania wybranych przez siebie plików przez użytkownika, może zmusić użytkownika do przesłania konkretnych plików i ustalić, czy plik odpowiada plikowi wcześniej przesłanemu przez użytkownika.

### Brak kryptograficznego powiązania między ścieżką a zawartością

Niektóre metadane nie są szyfrowane end-to-end: które urządzenie przesłało lub usunęło plik, kiedy został przesłany, oraz *mapowanie* między zaszyfrowanymi ścieżkami plików a zaszyfrowaną zawartością. Te dane są czytelne dla serwera, aby mógł kierować zmiany, określać historię wersji pliku i utrzymywać synchronizację urządzeń.

Gdyby serwer Sync został naruszony, atakujący mógłby manipulować tym mapowaniem, powodując dostarczenie zawartości jednego zaszyfrowanego pliku pod inną ścieżką pliku. Nie ujawnia to Twoich danych w postaci zwykłego tekstu — pozostają one zaszyfrowane.
