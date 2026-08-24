---
permalink: import/onenote
cssclasses:
  - soft-embed
---
Obsidian umożliwia łatwe przeniesienie notatek z Microsoft OneNote za pomocą [[Importer|wtyczki Importer]]. Skonwertuje ona dane z OneNote do trwałych plików Markdown, które możesz używać z Obsidian i wieloma innymi aplikacjami.

Obsidian oferuje dwa sposoby importowania danych z OneNote:

1. **Konto Microsoft** — loguje się na Twoje konto Microsoft i importuje notatniki zsynchronizowane z OneDrive. Wymaga połączenia z internetem.
2. **Import plików** — korzysta z plików eksportu OneNote (`.onepkg` i `.one`). Nie wymaga konta ani połączenia z internetem i działa w przypadku notatników, które nigdy nie były synchronizowane.

## Import z konta Microsoft

> [!Warning]
> Można importować tylko notatniki należące do Twojego konta. Notatniki udostępnione Ci przez inne osoby nie są obsługiwane, a konto służbowe lub szkolne może wymagać zatwierdzenia dostępu przez organizację.

Potrzebujesz oficjalnej wtyczki Obsidian [[Importer]], którą możesz [zainstalować tutaj](obsidian://show-plugin?id=obsidian-importer).

1. Otwórz **[[Ustawienia]]**.
2. Przejdź do **Wtyczki społeczności** i [zainstaluj Importer](obsidian://show-plugin?id=obsidian-importer).
3. Włącz wtyczkę Importer.
4. Otwórz wtyczkę **Importer** za pomocą palety poleceń lub ikony na wstążce.
5. W polu **Format** wybierz **Microsoft OneNote**.
6. Kliknij **Zaloguj się**, aby otworzyć przeglądarkę internetową na stronie logowania Microsoft. Wprowadź dane logowania do konta Microsoft, na którym znajdują się Twoje notatniki OneNote. Więcej informacji o procesie logowania Microsoft znajduje się poniżej.
7. Kliknij **Accept**, aby przyznać Obsidian uprawnienia do przeglądania Twoich notatników OneNote.
8. Kliknij **Otwórz łącze**, aby pozwolić przeglądarce przekierować Cię do aplikacji Obsidian.
9. W aplikacji Obsidian okno dialogowe Importera wyświetli teraz informację, że jesteś zalogowany, oraz listę Twoich notatników i sekcji OneNote. Zaznacz sekcje, które chcesz zaimportować.
10. Kliknij **Importuj** i poczekaj, aż import się zakończy.
11. Gotowe!

Jeśli Twoje notatniki należą do konta służbowego lub szkolnego, OneNote może odmówić wtyczce dostępu do nich po zalogowaniu. W takim przypadku obok przycisku **Wyloguj się** pojawi się przycisk **Użyj dostępu służbowego lub szkolnego**. Użyj go, aby zalogować się ponownie z szerszymi uprawnieniami wymaganymi przez takie konta. Twoja organizacja może być zmuszona zatwierdzić te uprawnienia, zanim zadziałają.

### Rozwiązywanie problemów

#### Nie pojawiają się żadne sekcje ani notatniki

Upewnij się, że notatniki, które próbujesz zaimportować, są zsynchronizowane z OneDrive i widoczne w OneNote Web. Muszą należeć do Ciebie (udostępnione notatniki napisane przez inne osoby nie są obsługiwane).

Jeśli brakuje konkretnej sekcji, upewnij się, że nie jest to sekcja zablokowana, ponieważ takie sekcje są niewidoczne bez uprzedniego usunięcia blokady.

Jeśli to notatnik służbowy lub szkolny, zapoznaj się z informacją o przycisku **Użyj dostępu służbowego lub szkolnego** powyżej.

#### Zaimportowane notatki są puste lub brakuje treści

Ten problem może wystąpić w przypadku notatników, z których rzadko korzystasz. Aby rozwiązać problem, wykonaj następujące kroki:

1. Otwórz [OneNote Web](https://onenote.com/notebooks) w przeglądarce.
2. **Kliknij prawym przyciskiem myszy** na notatniki, w których brakuje treści.
3. Wybierz **Export Notebook** z menu.
4. **Rozpakuj** pobrany plik do folderu.
5. Prześlij swoje notatniki OneNote [tutaj](https://www.onenote.com/notebooks/exportimport?toImport=true).
6. Otwórz **Obsidian Importer** i spróbuj zaimportować ponownie.

Jeśli zastosowałeś się do powyższych wskazówek i problem nadal nie został rozwiązany, możliwe, że występuje tymczasowy problem z serwerami Microsoft. W takim przypadku poczekaj kilka minut i spróbuj ponownie. Jeśli problem się utrzymuje, zgłoś problem w [repozytorium GitHub Obsidian Importer](https://github.com/obsidianmd/obsidian-importer/issues).

## Import plików OneNote (.one, .onepkg)

Import plików to alternatywny sposób importowania danych z OneNote. Odczytuje pliki eksportu tworzone przez sam OneNote, więc nie wymaga konta Microsoft ani połączenia z internetem. Użyj go w przypadku notatników przechowywanych tylko na komputerze, notatników niedostępnych z Twojego konta lub gdy wolisz się nie logować.

### Eksportowanie notatników z OneNote

Zalecamy eksportowanie każdego notatnika jako **pakietu OneNote** (`.onepkg`). Jeden pakiet zawiera wszystkie sekcje notatnika, więc można wyeksportować i zaimportować notatnik w jednym kroku, a Importer wyświetli listę sekcji do wyboru.

Eksportowanie jest dostępne tylko w **OneNote dla Windows** — aplikacji desktopowej dostarczanej z Microsoft 365. Aplikacja OneNote dla Maca i starsza aplikacja OneNote dla Windows 10 nie obsługują eksportu do tych formatów.

1. Otwórz notatnik, który chcesz wyeksportować, w OneNote dla Windows.
2. Przejdź do **Plik → Eksportuj**.
3. W sekcji **Eksportuj bieżący** wybierz **Notatnik**.
4. W sekcji **Wybierz format** wybierz **Pakiet OneNote (\*.onepkg)**.
5. Kliknij **Eksportuj** i wybierz miejsce zapisu pliku.
6. Powtórz dla każdego notatnika, który chcesz zaimportować.

Aby wyeksportować pojedynczą sekcję, wybierz **Sekcja** w kroku 3 i **Sekcja OneNote 2010-2016 (\*.one)** w kroku 4.

Możesz również zaimportować pliki sekcji, które OneNote już przechowuje na dysku, bez konieczności eksportowania:

- Notatniki przechowywane na komputerze znajdują się w `Documents\OneNote Notebooks`, jeden plik `.one` na sekcję.
- Kopie zapasowe zsynchronizowanych notatników znajdują się w `%LOCALAPPDATA%\Microsoft\OneNote\16.0\Backup`.

### Importowanie plików OneNote

Potrzebujesz oficjalnej wtyczki Obsidian [[Importer]], którą możesz [zainstalować tutaj](obsidian://show-plugin?id=obsidian-importer).

1. Otwórz **[[Ustawienia]]**.
2. Przejdź do **Wtyczki społeczności** i [zainstaluj Importer](obsidian://show-plugin?id=obsidian-importer).
3. Włącz wtyczkę Importer.
4. Otwórz wtyczkę **Importer** za pomocą palety poleceń lub ikony na wstążce.
5. W polu **Format** wybierz **Microsoft OneNote (.one, .onepkg)**.
6. Wybierz pliki `.onepkg` i `.one`, które chcesz zaimportować. Możesz wybrać więcej niż jeden plik naraz, dzięki czemu wszystkie notatniki mogą być zaimportowane razem.
7. W sekcji **Sekcje do importu** wyświetlone są sekcje znalezione w tych plikach, wszystkie zaznaczone. Odznacz te, których nie chcesz.
8. Opcjonalnie wybierz **Folder docelowy** dla importu, miejsce zapisu załączników oraz sposób postępowania z **Istniejącymi notatkami**, jeśli importujesz ten sam notatnik ponownie.
9. Kliknij **Importuj** i poczekaj, aż import się zakończy.
10. Gotowe!

Każda sekcja staje się folderem, a każda strona w niej — notatką. Podstrona jest zapisywana w folderze nazwanym jak strona nadrzędna, co zachowuje strukturę wyświetlaną w OneNote i zapobiega kolizji dwóch podstron o tej samej nazwie. Strony w koszu notatnika nie są importowane.

### Ograniczenia

- Sekcje chronione hasłem są przechowywane w postaci zaszyfrowanej, a ich strony są pomijane. Usuń hasło w OneNote i wyeksportuj ponownie, aby je zaimportować.
- Pliki chronione prawami dostępu mogą być otwierane tylko przez konto dozwolone przez politykę i nie mogą być odczytane przez Importer.

## Prywatność

Jeśli zdecydujesz się na import za pomocą konta Microsoft, wtyczka Obsidian Importer używa [OAuth](https://learn.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-auth-code-flow) do uwierzytelnienia i importowania notatników OneNote. Przyznaje to krótkoterminowy token dostępu do Twojego konta, który jest używany wyłącznie z Twojego komputera i nigdy nie jest przechowywany. Po zakończeniu importu możesz opcjonalnie odwołać token na [stronie aplikacji i usług Microsoft](https://account.live.com/consent/Manage).

Import plików nigdy nie łączy się z Microsoft: wybrane pliki są odczytywane na Twoim komputerze, bez żadnego połączenia sieciowego.
