---
permalink: ribbon
publish: true
mobile: true
description: 'Dowiedz się, jak używać wstążki — miejsca na najczęściej używane polecenia w Obsidian — oraz jak ją dostosowywać na komputerze i urządzeniach mobilnych.'
---
Wstążka pełni funkcję przestrzeni dla często używanych poleceń w Obsidian.

Na komputerze znajduje się na [[Pasek boczny#Otwieranie ukrytych pasków bocznych|lewym pasku bocznym]] i pozostaje widoczna nawet gdy lewy pasek boczny jest zamknięty.

Na urządzeniach mobilnych możesz uzyskać dostęp do [[Aplikacja mobilna#Akcje wstążki|akcji wstążki]], dotykając ikony **Menu** ![[lucide-menu.svg#icon]] w prawym dolnym rogu aplikacji, gdy nie edytujesz notatki.

## Akcje

Każda akcja jest reprezentowana przez ikonę na wstążce. Najechanie na te ikony wyświetli podpowiedź, a kliknięcie ich aktywuje powiązaną akcję. Na urządzeniach mobilnych możesz dotknąć tych ikon, aby je aktywować.

1. Otwórz **[[Zarządzaj skarbcami|Przełącznik skarbców]]** ![[obsidian-icon-vault-switcher.svg#icon]].
2. Uzyskaj dostęp do **pomocy** ![[lucide-help-circle.svg#icon]].
3. Otwórz **[[Ustawienia]]** ![[lucide-settings.svg#icon]].

W wersji mobilnej możesz skonfigurować akcję szybkiego dostępu na wstążce. Aby uzyskać więcej informacji, zobacz [[#Mobilny|sekcję mobilną]] i [[Aplikacja mobilna]].

## Dostosowywanie wstążki

Dostosowany układ wstążki jest zapamiętywany między sesjami. Synchronizuje się z innymi urządzeniami i aplikacją mobilną, gdy ustawienia aplikacji (w plikach `workspace.json` i `workspace-mobile.json`) są synchronizowane.

### Komputer

W wersji desktopowej możesz dostosować wstążkę w następujący sposób:

- Zmień kolejność akcji wstążki, przeciągając i upuszczając ikony.
- Aby ukryć określone akcje, kliknij prawym przyciskiem myszy na pustej przestrzeni wstążki i odznacz akcje, które chcesz ukryć.

#### Ukryj wstążkę

Możesz ukryć wstążkę na dwa sposoby:

- Kliknij prawym przyciskiem myszy na wstążce i wybierz **Ukryj menu wstążkowe**.
- Otwórz **[[Ustawienia]]** → **Wygląd**, przewiń w dół do **Zaawansowane** i wyłącz **Wyświetl menu wstążkowe**.

#### Wyświetl wstążkę

Jeśli ukryłeś wstążkę i chcesz ją ponownie wyświetlić:

1. Otwórz **[[Ustawienia]]** → **Wygląd**.
2. Przewiń w dół do **Zaawansowane**.
3. Włącz **Wyświetl menu wstążkowe**.
4. Wstążka pojawi się ponownie po lewej stronie okna.

> [!tip] Własny CSS
> Jeśli używasz motywu społeczności lub własnego CSS, upewnij się, że nie ukrywa on wstążki za pomocą niestandardowych reguł stylów.

### Mobilny

W mobilnej wersji Obsidian możesz wykonywać akcje szybkiego dostępu, zmieniać kolejność elementów i dostosowywać menu wstążkowe. Aby uzyskać dostęp do tych ustawień, wykonaj następujące kroki:

1. Otwórz **[[Ustawienia]]** Obsidian ![[lucide-cog.svg#icon]].
2. Przejdź do sekcji **Wygląd**.
3. Przewiń w dół do opcji **Zaawansowane**.
4. Wybierz przycisk **Zarządzaj** pod pozycją **Konfiguracja menu wstążkowego**.

#### Szybki dostęp

Domyślnie opcja szybkiego dostępu jest ustawiona na „Otwórz menu wstążkowe" przy *krótkim naciśnięciu*. Jeśli wybierzesz inną opcję jako szybki dostęp:

- Wybrana opcja zostanie uruchomiona *krótkim naciśnięciem*.
- Dostęp do menu wstążkowego zmieni się na *długie naciśnięcie*.

> [!info] Opcje szybkiego dostępu zależą od ustawień Obsidian i wbudowanych wtyczek, które masz włączone.

#### Kolejność i widoczność

Aby zmienić kolejność elementów w menu wstążkowym, naciśnij i przytrzymaj przycisk **przeciągnij i upuść** ![[lucide-menu.svg#icon]] i przesuń wybrany element w górę lub w dół.

Możesz pokazywać lub ukrywać elementy w menu wstążkowym, używając czerwonego przycisku **usuń** ![[lucide-minus-circle.svg#icon]] lub zielonego przycisku **dodaj** ![[lucide-plus-circle.svg#icon]], aby przełączać ich widoczność.
 
 ![[ribbon-rearrange-visibility.jpeg#interface]]
