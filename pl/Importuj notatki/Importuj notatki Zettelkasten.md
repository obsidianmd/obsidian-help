---
permalink: import/zettelkasten
---
Jeśli korzystasz z metody Zettelkasten do nazywania i łączenia notatek, może być konieczna konwersja łączy z `[[UID]]` na `[[UID Tytuł mojej notatki]]`.

Na przykład, jeśli masz notatkę o nazwie `202301011230 Tytuł mojej notatki` i linkujesz do niej z innej notatki, używając tylko UID, `[[202301011230]]`. Ponieważ Obsidian używa pełnej nazwy notatki do rozwiązywania łączy wewnętrznych, takie łącza przestaną działać.

Aby zaktualizować wszystkie łącza `[[UID]]` w swoim skarbcu, tak aby używały pełnej nazwy notatki, użyj [[Konwerter formatowania|Konwertera formatowania]].

1. Otwórz **[[Ustawienia]]**.
2. W sekcji **Wbudowane wtyczki** włącz **Konwerter formatowania** i zamknij okno Ustawień.
3. Na wstążce, po lewej stronie okna aplikacji, wybierz **Otwórz konwerter formatowania** ![[lucide-binary.svg#icon]].
4. Włącz **Napraw łącza systemu Zettelkasten**.
5. Wybierz **Rozpocznij konwertowanie**. Spowoduje to konwersję wszystkich notatek w całym skarbcu.

> [!tip] Popraw łącza systemu Zettelkasten
> [[Konwerter formatowania]] może również upiększyć Twoje łącza, usuwając UID z wyświetlanej nazwy. Na przykład `[[UID]]` zostanie przekonwertowane na `[[UID Tytuł mojej notatki|Tytuł mojej notatki]]`.
>
> Aby upiększyć łącza Zettelkasten, włącz opcję **Popraw łącza systemu Zettelkasten** w oknie konwertera formatowania.

Możesz również użyć [[Kreator niepowtarzalnych notatek|Kreatora niepowtarzalnych notatek]], aby tworzyć notatki Zettelkasten w Obsidian.
