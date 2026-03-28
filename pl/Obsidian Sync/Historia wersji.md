---
permalink: sync/version-history
cssclasses:
  - soft-embed
publish: true
mobile: true
description: Obsidian Sync prowadzi rejestr wszystkich zmian wprowadzonych w notatkach i regularnie sprawdza aktualizacje oraz tworzy nowe wersje notatek.
---
[[Wprowadzenie do Obsidian Sync|Obsidian Sync]] regularnie sprawdza aktualizacje [[Opcje synchronizacji i synchronizacja selektywna|synchronizowanych plików]], prowadząc rejestr wszelkich zmian. Są one zapisywane jako nowe wpisy w [[#Historia wersji]]. Dostęp do tych informacji można uzyskać na kilka sposobów:

- [[#Historia synchronizacji]]
- [[#Historia wersji]]

Choć nie jest to część Obsidian Sync, na każdym urządzeniu dostępna jest również lokalna historia wersji, jeśli wtyczka [[Odzyskiwanie plików]] jest włączona.

## Historia synchronizacji

Funkcja historii synchronizacji (lub paska bocznego synchronizacji), wprowadzona w Obsidian w wersji 1.7, pozwala szybko przeglądać ostatnio utworzone lub zmodyfikowane notatki i załączniki, które zostały zsynchronizowane. Można ją również traktować jako historię _edycji_.

Na pasku bocznym możesz wybrać element, aby otworzyć jego plik w aktywnym oknie. Elementy mają również menu kontekstowe, umożliwiające wykonywanie działań takich jak przenoszenie pliku lub przeglądanie jego [[#Notatki i załączniki|Historii wersji]].

> [!compatibility] Funkcja dostępna tylko na komputerze
> Gdy najedziesz kursorem na zsynchronizowany plik na pasku bocznym, możesz zobaczyć, kto ostatnio edytował plik. Jest to szczególnie przydatne, gdy [[Współpraca nad wspólnym sejfem|współpracujesz]] nad wspólnym sejfem.

> [!tip] 
> Ustawienia i usunięte elementy nie pojawią się na pasku bocznym historii synchronizacji. Można je znaleźć w [[#Notatki i załączniki|Historii wersji]].

### Pokaż historię synchronizacji

Gdy włączysz wbudowaną wtyczkę [[Wprowadzenie do Obsidian Sync|Sync]], historia synchronizacji jest automatycznie włączona, ale domyślnie nie pojawia się na pasku bocznym. Musisz ją ręcznie dodać za pomocą polecenia lub skrótu klawiszowego.

#### Włączanie przez paletę poleceń

> [!info] Ta opcja wymaga włączenia wbudowanej wtyczki [[Lista poleceń]].

**Komputer/Tablet** ![[lucide-monitor-check.svg#icon]]

1. Otwórz **Paletę poleceń**. ![[lucide-terminal.svg#icon]]
2. Wpisz „Sync".
3. Wybierz opcję „Sync: Show Sync history".

Historia synchronizacji pojawi się na [[Pasek boczny|prawym pasku bocznym]].

**Urządzenie mobilne** ![[obsidian-icon-smartphone.svg#icon]]

1. Otwórz [[Menu wstążkowe]] ![[lucide-menu.svg#icon]].
2. Otwórz **Paletę poleceń**. ![[lucide-terminal.svg#icon]]
3. Wpisz „Sync".
4. Wybierz opcję „Sync: Show Sync history".

Historia synchronizacji pojawi się jako opcja rozwijana na [[Pasek boczny|prawym pasku bocznym]].

#### Włączanie przez skrót klawiszowy

1. Otwórz **[[Ustawienia]]**.
2. W kategorii **Opcje** wybierz **Skróty klawiszowe**.
3. W pasku wyszukiwania skrótów klawiszowych wpisz „Sync".
4. Obok „Sync: Show Sync history" przypisz preferowany skrót klawiszowy.

## Historia wersji

Oprócz [[#Historia synchronizacji|historii synchronizacji]] Obsidian prowadzi również historię wersji umożliwiającą przywracanie notatek i załączników. Jeśli przypadkowo usuniesz notatkę lub chcesz wrócić do poprzedniej wersji, możesz ją przywrócić z historii wersji.

Okres przechowywania historii wersji zależy od Twojego [[Plany i limity przechowywania|planu Obsidian Sync]]. W planie Standard notatki są przechowywane przez 1 miesiąc, natomiast w planie Plus przez 12 miesięcy. Po upływie tego okresu starsze wersje notatek są usuwane.

W przypadku [[Załączniki|załączników]] starsze wersje są przechowywane przez <u>dwa tygodnie</u>.

![[Współpraca nad wspólnym sejfem#^version-history-image]]

### Notatki i załączniki

Proces przywracania notatek i załączników jest taki sam.

#### Wyświetlanie historii wersji pliku

**Komputer/Tablet** ![[lucide-monitor-check.svg#icon]]
1. W **Eksploratorze plików** wybierz notatkę, którą chcesz przywrócić.
2. Wybierz **Otwórz historię wersji**.
3. Wybierz wersję notatki, którą chcesz wyświetlić, po lewej stronie. Zawartość zostanie wyświetlona po prawej.

**Urządzenie mobilne** ![[obsidian-icon-smartphone.svg#icon]]
1. W **Eksploratorze plików** wybierz notatkę, którą chcesz przywrócić.
2. Przytrzymaj, aby wywołać menu kontekstowe.
3. Wybierz **Otwórz historię wersji**.
4. W wyskakującym menu wybierz wersję notatki, którą chcesz wyświetlić.
5. Po wybraniu zawartość notatki będzie dostępna do przeglądu.

#### Wyświetlanie historii wersji usuniętego lub przemianowanego pliku

1. Otwórz **[[Ustawienia]]**.
2. Na pasku bocznym, w sekcji **Wbudowane wtyczki**, wybierz **Sync**.
3. Obok **Usunięte pliki** wybierz **Podgląd**.
4. Wybierz notatkę, której historię wersji chcesz wyświetlić.
5. W wyskakującym oknie historii wersji wybierz wersję notatki, którą chcesz wyświetlić, po lewej stronie.

#### Przywracanie poprzedniej wersji pliku

**Komputer/Tablet** ![[lucide-monitor-check.svg#icon]]
1. W **Eksploratorze plików** wybierz notatkę, którą chcesz przywrócić.
2. Wybierz **Otwórz historię wersji**.
3. Wybierz wersję notatki, którą chcesz przywrócić, po lewej stronie. Zawartość zostanie wyświetlona po prawej.
4. Wybierz przycisk **Przywróć**.
5. Zawartość notatki zostanie zastąpiona przywróconą wersją.

**Urządzenie mobilne** ![[obsidian-icon-smartphone.svg#icon]]
1. W **Eksploratorze plików** wybierz notatkę, którą chcesz przywrócić.
2. Przytrzymaj, aby wywołać menu kontekstowe.
3. Wybierz **Otwórz historię wersji**.
4. W wyskakującym menu wybierz wersję notatki, którą chcesz przywrócić.
5. Po wybraniu zawartość notatki będzie dostępna do przeglądu.
6. Wybierz przycisk **Przywróć**.
7. Zawartość notatki zostanie zastąpiona przywróconą wersją.

#### Przywracanie usuniętego pliku

1. Otwórz **[[Ustawienia]]**.
2. Na pasku bocznym, w sekcji **Wbudowane wtyczki**, wybierz **Sync**.
3. Obok **Usunięte pliki** wybierz **Podgląd**.
4. Wybierz notatkę, którą chcesz przywrócić.
5. Na liście wersji po lewej wybierz wersję, którą chcesz przywrócić.
6. Wybierz przycisk **Przywróć** po prawej stronie.
7. Notatka zostanie przywrócona do pierwotnej lokalizacji w systemie plików.

> [!tip] Możesz wybrać wiele notatek za pomocą **przywracania zbiorczego**, zaznaczając pola wyboru lub używając `shift+click`. Tych plików nie będzie można przeglądać w tym menu.

### Historia ustawień

Obsidian Sync śledzi również zmiany wprowadzone w ustawieniach konfiguracji sejfu.

#### Wyświetlanie historii wersji ustawienia

1. Otwórz **[[Ustawienia]]**.
2. Na pasku bocznym, w sekcji **Wbudowane wtyczki**, wybierz **Sync**.
3. Przejdź do sekcji **Synchronizacja ustawień sejfu**.
4. Wybierz przycisk **Podgląd** obok **Historia wersji [[Ustawienia|ustawień]]**.
5. W wyskakującym oknie **Plik [[Ustawienia|ustawień]]** wybierz plik ustawień, który chcesz wyświetlić.

#### Przywracanie poprzedniej wersji ustawienia

1. Otwórz **[[Ustawienia]]**.
2. Na pasku bocznym, w sekcji **Wbudowane wtyczki**, wybierz **Sync**.
3. Przejdź do sekcji **Synchronizacja ustawień sejfu**.
4. Wybierz przycisk **Podgląd** obok **Historia wersji [[Ustawienia|ustawień]]**.
5. W wyskakującym oknie **Plik [[Ustawienia|ustawień]]** wybierz plik ustawień, który chcesz wyświetlić.
6. W oknie zmian wybierz przycisk **Przywróć**.
7. Odśwież lub uruchom ponownie Obsidian, aby ustawienie zaczęło obowiązywać. Więcej szczegółów znajdziesz w instrukcjach w [[Konfiguracja Obsidian Sync#Dostosuj ustawienia Obsidian Sync|Dostosowywanie ustawień Obsidian Sync]].
