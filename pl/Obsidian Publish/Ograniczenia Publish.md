---
permalink: publish/limitations
---
> [!tip] Członkowie naszej wspaniałej społeczności opracowali obejścia dla niektórych z tych ograniczeń. Więcej informacji można znaleźć w wątku [Publish Resources](https://forum.obsidian.md/t/obsidian-publish-resources/74582) na forum Obsidian.

## Wtyczki społeczności

Obsidian Publish ma minimalne wsparcie dla [[Wtyczki społeczności|Wtyczek społeczności]].

Wtyczki, które generują surowy Markdown, takie jak Waypoint, są kompatybilne z Publish, ponieważ nie wymagają aplikacji do renderowania swoich danych.

Natomiast wtyczki wymagające bloku kodu wtyczki do renderowania, takie jak Dataview czy Fantasy Statblocks, domyślnie nie będą działać w Publish.

## Graf

Publish oferuje podstawową personalizację kolorów widoku grafu za pomocą CSS. Możesz modyfikować kolory węzłów w swoim pliku `publish.css`, korzystając ze [zmiennych CSS widoku grafu](https://docs.obsidian.md/Reference/CSS+variables/Plugins/Graph).

Należy pamiętać, że opublikowany graf nie obsługuje kompleksowych opcji sortowania i wyświetlania dostępnych w [[Podgląd grafu|widoku grafu]] aplikacji.

## Pliki multimedialne

Obsidian Publish nie jest zoptymalizowany do strumieniowania wideo ani dużych plików audio. W tej dokumentacji zamieszczamy najlepsze praktyki dotyczące obsługi [[Pliki multimedialne|plików multimedialnych]].

Aby poprawić doświadczenie odwiedzających, zalecamy korzystanie z usług hostingu wideo, takich jak YouTube lub Vimeo.

Na swoją stronę Publish możesz przesyłać pliki o rozmiarze **do 50 MB**. ^publish-media-limit

## Pliki PDF

Na urządzeniach mobilnych, tabletach i komputerach z małymi ekranami mogą wystąpić problemy, w których osadzony plik PDF nie zostanie załadowany lub zostanie wyświetlona tylko pierwsza strona. Jest to spowodowane ograniczeniami renderera PDF na urządzeniach mobilnych.

W przypadku treści skierowanych do użytkowników mobilnych sugerujemy udostępnianie linków do plików PDF hostowanych zewnętrznie lub dołączanie łączy wewnętrznych umożliwiających użytkownikom pobranie pliku PDF bezpośrednio na urządzenie.

## Wyszukiwanie

Publish oferuje podstawowe wsparcie dla wyszukiwania zwykłego tekstu w opublikowanej zawartości. Priorytet w wynikach wyszukiwania mają:

- Nazwy plików
- Aliasy
- Nazwy nagłówków

Po przeszukaniu powyższych elementów wyszukiwanie obejmuje również zwykły tekst opublikowanych notatek.

Aby poprawić możliwości wyszukiwania na opublikowanej stronie, zaleca się stosowanie opisowych nazw plików, dodawanie wielu aliasów oraz wybieranie nazw nagłówków, które dokładnie odzwierciedlają zawartość.

Ponadto Publish nie obsługuje obecnie funkcji [[Szukaj#Osadzanie wyników wyszukiwania w notatce|osadzonych wyników wyszukiwania]] dostępnej w aplikacji.
