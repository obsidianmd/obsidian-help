---
permalink: sync/faq
publish: true
mobile: true
description: Ta strona zawiera listę typowych pytań dotyczących zagadnień i ograniczeń Obsidian Sync.
---
Ta strona zawiera najczęściej zadawane pytania dotyczące [[Wprowadzenie do Obsidian Sync|Obsidian Sync]] oraz jego ograniczeń.

## Ogólne

### Jakie systemy operacyjne obsługuje Obsidian Sync?

Obsidian Sync obsługuje każdą platformę, na której może działać Obsidian. Obecnie są to Windows, macOS, Linux, Android i iOS.

### Czy Obsidian działa z trybem blokady Apple?

Obsidian może być używany w [Trybie blokady](https://support.apple.com/en-us/105120), o ile Obsidian zostanie dodany jako wyjątek.

### Jakie typy danych są synchronizowane?

Domyślnie synchronizowane są notatki Obsidian, obrazy oraz [[Folder konfiguracji]].

Możesz dodać dodatkowe opcje synchronizacji plików PDF, plików audio, plików wideo i innych plików, konfigurując [[Opcje synchronizacji i synchronizacja selektywna|opcje synchronizacji i synchronizację selektywną]].

### Ile mam miejsca na dane?

Limit przechowywania zależy od Twojego [[Plany i limity przechowywania#Plany|planu Sync]]. Maksymalna ilość miejsca to 100 GB. Ten limit obejmuje [[Historia wersji|historię wersji]].

Możesz sprawdzić **Rozmiar sejfu** w aplikacji Obsidian, przechodząc do **[[Ustawienia]] → Sync**.

### Ile zdalnych sejfów mogę mieć?

Liczba zdalnych sejfów zależy od Twojego [[Plany i limity przechowywania#Plany|planu Sync]]. Plan Standard obejmuje 1 sejf, a plan Plus obejmuje 10 sejfów. Sejfy udostępniane tobie nie wliczają się do limitu sejfów.

### Jak duży może być każdy zdalny sejf?

Nie ma limitu na pojedynczy sejf. Limit przechowywania jest powiązany z Twoim kontem i może być wykorzystywany we wszystkich sejfach.

### Z iloma osobami mogę udostępnić zdalny sejf?

Możesz [[Współpraca nad wspólnym sejfem|udostępnić zdalny sejf]] maksymalnie 20 osobom.

### Jak duży może być każdy plik?

Maksymalny rozmiar pliku zależy od Twojego [[Plany i limity przechowywania|planu Obsidian Sync]]. W planie Standard limit wynosi 5 MB. W planie Plus limit wynosi 200 MB na plik.

### Czy moje dane są synchronizowane w tle?

Nie, pliki są synchronizowane tylko wtedy, gdy Obsidian jest uruchomiony.

### Czy Obsidian Sync automatycznie przeładowuje moje ustawienia?

Obsidian Sync może automatycznie przeładowywać niektóre ustawienia, ale istnieją pewne ograniczenia. Więcej szczegółów znajdziesz w sekcji [[Opcje synchronizacji i synchronizacja selektywna#Ponowne ładowanie ustawień|Przeładowywanie ustawień]].

### Czy mogę używać zewnętrznej synchronizacji z Obsidian Sync?

Nie zalecamy korzystania z usługi zewnętrznej synchronizacji równocześnie z Obsidian Sync. Używanie usługi zewnętrznej i Obsidian Sync na wielu urządzeniach może prowadzić do konfliktów, skutkujących duplikatami lub uszkodzeniem plików.

Usługi przechowywania w chmurze, takie jak OneDrive i Dropbox, oferują funkcje „Pliki na żądanie" lub „Pliki tylko online", które pobierają pliki tylko w razie potrzeby i usuwają je lokalnie, aby zaoszczędzić miejsce. Ponieważ jednak te pliki nie są zawsze dostępne lokalnie, Obsidian Sync zinterpretuje je jako usunięte, co doprowadzi do ich usunięcia ze zdalnego sejfu.

Aby uniknąć tych problemów, wyłącz pobieranie na żądanie podczas korzystania z Obsidian Sync z usługami takimi jak OneDrive lub Dropbox. Musisz upewnić się, że ustawienia usługi zewnętrznej są skonfigurowane tak, aby pliki były zawsze przechowywane na urządzeniu.

## Przechowywanie danych

Poniżej znajdziesz najczęściej zadawane pytania dotyczące przechowywania danych w Obsidian. Bardziej szczegółowe odpowiedzi znajdziesz w sekcji [[Obsidian Sync/Bezpieczeństwo i prywatność|Bezpieczeństwo i prywatność]].

### Jak długo przechowywana jest historia wersji?

[[Historia wersji]] zależy od Twojego [[Plany i limity przechowywania|planu Obsidian Sync]]. W planie Standard notatki są przechowywane przez 1 miesiąc. W planie Plus notatki są przechowywane przez 12 miesięcy. Po upływie tego okresu starsze wersje są usuwane.

Starsze wersje [[Załączniki|załączników]] są przechowywane przez dwa tygodnie.

### Jak długo przechowujecie moje dane po wygaśnięciu subskrypcji?

Przechowujemy dane w Twoich zdalnych sejfach, w tym historię wersji, przez jeden miesiąc po wygaśnięciu subskrypcji. Lokalne sejfy na Twoich urządzeniach nie są dotknięte.

Jeśli odnowisz subskrypcję w ciągu jednego miesiąca, nie powinno to mieć wpływu na Twoje dane. Jeśli odnowisz po miesiącu, gdy Twoje zdalne sejfy zostały już usunięte, możesz [[Konfiguracja Obsidian Sync|utworzyć nowy zdalny sejf]] i połączyć go z lokalnym sejfem.

### Czy przechowujecie moje dane, jeśli zażądam zwrotu kosztów subskrypcji?

Nie. Dane są natychmiast usuwane z serwerów Obsidian Sync. Dane w Twoim [[Sejfy lokalne i zdalne|lokalnym sejfie]] nie są dotknięte.
