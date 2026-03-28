---
permalink: import/onenote
---
Obsidian umożliwia łatwe przeniesienie notatek z Microsoft OneNote za pomocą [[Importer|wtyczki Importer]]. Skonwertuje ona dane z OneNote do trwałych plików Markdown, które możesz używać z Obsidian i wieloma innymi aplikacjami.

> [!Warning]
> Można importować tylko notatniki należące do Twojego konta osobistego. Udostępnione notatki oraz konta służbowe i szkolne nie są obsługiwane.

## Importowanie danych z OneNote do Obsidian

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

![[OneNote-Importer-Select-Sections.png]]

10. Kliknij **Importuj** i poczekaj, aż import się zakończy.
11. Gotowe!

## Rozwiązywanie problemów

### Nie pojawiają się żadne sekcje ani notatniki

Upewnij się, że notatniki, które próbujesz zaimportować, są zsynchronizowane z OneDrive i widoczne w OneNote Web. Muszą należeć do Ciebie (udostępnione notatniki napisane przez inne osoby nie są obsługiwane).

Jeśli brakuje konkretnej sekcji, upewnij się, że nie jest to sekcja zablokowana — takie sekcje są niewidoczne bez uprzedniego usunięcia blokady.

### Zaimportowane notatki są puste lub brakuje treści

Ten problem może wystąpić w przypadku notatników, z których rzadko korzystasz. Aby rozwiązać problem, wykonaj następujące kroki:

1. Otwórz [OneNote Web](https://onenote.com/notebooks) w przeglądarce.
2. **Kliknij prawym przyciskiem myszy** na notatniki, w których brakuje treści.
3. Wybierz **Export Notebook** z menu.
4. **Rozpakuj** pobrany plik do folderu.
5. Prześlij swoje notatniki OneNote [tutaj](https://www.onenote.com/notebooks/exportimport?toImport=true).
6. Otwórz **Obsidian Importer** i spróbuj zaimportować ponownie.

Jeśli zastosowałeś się do powyższych wskazówek i problem nadal nie został rozwiązany, możliwe, że występuje tymczasowy problem z serwerami Microsoft. W takim przypadku poczekaj kilka minut i spróbuj ponownie. Jeśli problem się utrzymuje, zgłoś problem w [repozytorium GitHub Obsidian Importer](https://github.com/obsidianmd/obsidian-importer/issues).

## Prywatność

Wtyczka Obsidian Importer używa [OAuth](https://learn.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-auth-code-flow) do uwierzytelnienia z Twoim kontem Microsoft i importowania notatników OneNote. Przyznaje to krótkoterminowy token dostępu do Twojego konta, który jest używany wyłącznie z Twojego komputera i nigdy nie jest przechowywany. Po zakończeniu importu możesz opcjonalnie odwołać token na [stronie aplikacji i usług Microsoft](https://account.live.com/consent/Manage).
