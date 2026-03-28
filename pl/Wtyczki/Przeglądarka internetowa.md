---
permalink: plugins/web-viewer
---
Przeglądarka internetowa to [[Wbudowane wtyczki|wbudowana wtyczka]], która pozwala otwierać łącza zewnętrzne w Obsidian na komputerze. Umożliwia to czytanie zawartości linków bez opuszczania aplikacji i ułatwia wielozadaniowość w projektach wymagających badań w sieci.

Łącza zewnętrzne otwierają się jako [[Karty|karta]], którą można przestawiać, dzielić i otwierać w [[Okna wyskakujące|oknie wyskakującym]]. Karty stron internetowych osadzone w plikach [[Tablica]] można otwierać jako karty przeglądarki internetowej.

Przeglądarka internetowa nie jest zamiennikiem głównej przeglądarki. Przeglądarka internetowa zapewnia szybki sposób dostępu do stron internetowych na potrzeby badań w Obsidian. Nie oferuje jednak pełnej funkcjonalności, mechanizmów bezpieczeństwa ani rozszerzalności dedykowanej przeglądarki.

## Widok czytania

Kliknij ikonę okularów, aby wyświetlić wersję strony w postaci zwykłego tekstu. Ta funkcja działa poprzez oczyszczenie zawartości za pomocą biblioteki Readability firmy Mozilla, opracowanej dla przeglądarki Firefox.

## Zapisz w sejfie

Kliknij ikonę więcej akcji, aby zapisać stronę internetową w skarbcu. Możesz dostosować lokalizację zapisu strony, przechodząc do **[[Ustawienia]]** → **Przeglądarka internetowa**.

## Blokowanie reklam

Przeglądarka internetowa domyślnie blokuje reklamy. Możesz dostosować zasady blokowania reklam, dodając listy takie jak [Easylist](https://easylist.to/).

## Bezpieczeństwo

Jeśli korzystasz z wtyczek społeczności Obsidian, zalecamy używanie głównej przeglądarki do wrażliwych zadań i stron chronionych hasłem zamiast przeglądarki internetowej.

Przeglądarka internetowa opiera się na tej samej funkcji [Chromium](https://developer.chrome.com/docs/apps/reference/webviewTag), która umożliwia osadzanie stron internetowych w [[Tablica]]. Przeglądarka internetowa przeszła [niezależny audyt](https://obsidian.md/blog/cure53-second-client-audit/), potwierdzający bezpieczną implementację.

Wtyczki Obsidian [[Bezpieczeństwo wtyczek#Możliwości wtyczek|nie działają w piaskownicy]] i mają głęboką kontrolę nad aplikacją. Taka architektura umożliwia zaawansowane funkcje, ale wiąże się z kompromisami w zakresie bezpieczeństwa. Gdy Obsidian jest uruchomiony, wtyczki społeczności mają pełny dostęp do ciasteczek w przeglądarce internetowej.
