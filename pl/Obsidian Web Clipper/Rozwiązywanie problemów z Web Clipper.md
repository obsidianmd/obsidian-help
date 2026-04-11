---
permalink: web-clipper/troubleshoot
---
Jeśli napotkasz problemy z [[Wprowadzenie do Obsidian Web Clipper|Web Clipper]], możesz uzyskać pomoc poprzez [oficjalny kanał Discord](https://discord.com/channels/686053708261228577/1285652864089198672). Możesz również zgłaszać błędy w [repozytorium GitHub](https://github.com/obsidianmd/obsidian-clipper).

## Ogólne

### Brakuje niektórych treści

Domyślnie Web Clipper próbuje inteligentnie przechwytywać zawartość ze strony. Jednak może mu się to nie udać na wszystkich stronach internetowych.

Web Clipper używa [Defuddle](https://github.com/kepano/defuddle) do przechwytywania jedynie głównej zawartości strony. Wyklucza to nagłówek, stopkę i inne elementy, ale czasami może być zbyt konserwatywny i usuwać treści, które chcesz zachować. Możesz [zgłaszać błędy](https://github.com/kepano/defuddle) do Defuddle.

Aby ominąć Defuddle w Web Clipper, użyj następujących metod:

- Zaznacz tekst lub użyj `Cmd/Ctrl+A`, aby zaznaczyć cały tekst.
- [[Highlighter|Wyróżnij zawartość]], aby wybrać dokładnie to, co chcesz przechwycić.
- Użyj [[Obsidian Web Clipper/Szablony|niestandardowego szablonu]] dla danej strony.

### Żadna treść nie pojawia się w Obsidian

Jeśli nie widzisz żadnej treści w Obsidian po kliknięciu **Zapisz w Obsidian**:

- Sprawdź błędy w [[Pomoc i wsparcie#Przechwytywanie logów konsoli|konsoli deweloperskiej]] Obsidian.
- Sprawdź, czy nazwa sejfu w ustawieniach Web Clipper dokładnie odpowiada *nazwie sejfu* w Obsidian, a *nie ścieżce do sejfu*.
- Sprawdź, czy nazwa folderu jest poprawnie sformatowana.

## Linux

#### Obsidian się nie otwiera

- Upewnij się, że protokół [[Obsidian URI]] jest [[Obsidian URI#Rejestrowanie Obsidian URI|zarejestrowany]].
- Jeśli używasz Firefoksa, może być konieczne [zarejestrowanie go w ustawieniach przeglądarki](https://kb.mozillazine.org/Register_protocol).

#### Obsidian się otwiera, ale zapisywana jest tylko nazwa pliku

Prawdopodobnie Obsidian nie ma dostępu do schowka. Dostęp do schowka jest niezbędny do przekazywania danych z przeglądarki do Obsidian. Twoja konfiguracja może wpływać na sposób izolacji aplikacji oraz uprawnienia do schowka.

Jeśli używasz Wayland, upewnij się, że Obsidian ma uprawnienia do odczytu schowka, gdy aplikacja nie jest aktywna. To ustawienie może znajdować się w Twoim menedżerze okien kafelkowych, np. Hyprland lub Sway.

Jeśli używasz Hyprland:

```ini
# ~/.config/hypr/hyprland.conf
misc {
    focus_on_activate = true
}
```

Jeśli używasz Sway:

```ini
# ~/.config/sway/config
for_window [class="obsidian"] focus_on_window_activation focus
```

- Jeśli używasz Flatpak, rozważ wypróbowanie [oficjalnie wspieranej wersji Obsidian](https://obsidian.md/download).
- Jeśli używasz KDE, przejdź do **Ustawienia systemowe** → **Zarządzanie oknami** → **Reguły okien** i zezwól Obsidian na przejmowanie fokusu, [[web-clipper-kde.png|zobacz zrzut ekranu]].
- W ostateczności spróbuj przełączyć się na **Tryb klasyczny** w **Ustawienia Web Clipper** → **Ogólne**. Pozwoli to ominąć schowek i zapisać zawartość bezpośrednio przez URI. Pamiętaj, że ograniczy to liczbę znaków, które można wyciąć, w zależności od przeglądarki i dystrybucji Linux.

## iOS i iPadOS

Aby włączyć rozszerzenie Web Clipper dla Safari:

1. Przejdź do Safari, dotknij najbardziej wysuniętego na lewo przycisku na pasku adresu URL przeglądarki — wygląda jak prostokąt z liniami pod nim.
2. Dotknij **Zarządzaj rozszerzeniami**.
3. Włącz **Obsidian Web Clipper** na liście rozszerzeń.
4. Wyjdź z menu.
5. Aby użyć rozszerzenia, **dotknij ikony puzzla** na pasku adresu URL.

Aby zezwolić Web Clipper na działanie na wszystkich stronach:

1. Przejdź do iOS **[[Ustawienia]]** → **Aplikacje** → **Safari** → **Rozszerzenia**.
2. W sekcji **Uprawnienia** zezwól na działanie na wszystkich stronach.

Aby Obsidian zawsze mógł odbierać treści z Web Clipper:

1. Przejdź do iOS **[[Ustawienia]]** → **Aplikacje** → **Obsidian**.
2. Ustaw **Wklejanie z innych aplikacji** na **Zezwalaj**.
