---
permalink: install
---
Obsidian jest dostępny na wszystkich głównych platformach desktopowych i mobilnych. Oto wszystkie obsługiwane sposoby pobierania i instalowania Obsidian.

## Instalacja Obsidian na Windows

1. Otwórz przeglądarkę i przejdź do strony [Pobierz Obsidian](https://obsidian.md/download).
2. W sekcji **Windows** kliknij **Universal**, aby pobrać plik instalacyjny.
3. Otwórz plik instalacyjny i postępuj zgodnie z instrukcjami.
4. Otwórz Obsidian tak samo, jak otwierasz każdą inną aplikację.

## Instalacja Obsidian na macOS

1. Otwórz przeglądarkę i przejdź do strony [Pobierz Obsidian](https://obsidian.md/download).
2. W sekcji **macOS** kliknij **Universal**, aby pobrać plik instalacyjny.
3. Otwórz plik instalacyjny.
4. W oknie, które się otworzy, przeciągnij Obsidian do folderu Aplikacje.
5. Otwórz Obsidian tak samo, jak otwierasz każdą inną aplikację.

## Instalacja Obsidian na Linux

Jeśli używasz Linuxa, możesz zainstalować Obsidian na kilka sposobów. Postępuj zgodnie z instrukcjami dla systemu pakietów, którego używasz.

### Instalacja Obsidian za pomocą Snap

1. Otwórz przeglądarkę i przejdź do strony [Pobierz Obsidian](https://obsidian.md/download).
2. W sekcji **Linux** kliknij **Snap**, aby pobrać plik instalacyjny.
3. Otwórz terminal i przejdź do folderu, w którym pobrałeś plik instalacyjny.
4. W terminalu uruchom następujące polecenie, aby zainstalować pakiet Snap: (flaga `--dangerous` jest wymagana, ponieważ Canonical, firma która stworzyła Snap, nie zweryfikowała naszego pakietu; flaga `--classic` pozwala Obsidian na dostęp poza piaskownicą, gdzie przechowywane są Twoje notatki)

   ```bash
   snap install obsidian_<version>_<arch>.snap --dangerous --classic
   ```

5. Otwórz Obsidian tak samo, jak otwierasz każdą inną aplikację.

### Instalacja Obsidian za pomocą AppImage

1. Otwórz przeglądarkę i przejdź do strony [Pobierz Obsidian](https://obsidian.md/download).
2. W sekcji **Linux** kliknij **AppImage**, aby pobrać plik instalacyjny.
3. Otwórz terminal i przejdź do folderu, w którym pobrałeś plik instalacyjny.
4. W terminalu uruchom następujące polecenie, aby otworzyć Obsidian:

   ```bash
   chmod u+x Obsidian-<version>.AppImage
   ./Obsidian-<version>.AppImage --no-sandbox
   ```
Uwaga: Na Chromebookach musi być zainstalowany pakiet `libnss3-dev`, w przeciwnym razie może pojawić się błąd `error while loading shared libraries: libnss3.so: cannot open shared object file: No such file or directory`.

### Instalacja Obsidian za pomocą Flatpak

1. W terminalu uruchom następujące polecenie, aby zainstalować Obsidian:

   ```bash
   flatpak install flathub md.obsidian.Obsidian
   ```

2. Otwórz Obsidian, uruchamiając następujące polecenie:

   ```bash
   flatpak run md.obsidian.Obsidian
   ```

## Instalacja Obsidian na Androidzie

1. Znajdź Obsidian w [Play Store](https://play.google.com/store/apps/details?id=md.obsidian).
2. Dotknij **Instaluj**, aby pobrać aplikację.
3. Otwórz Obsidian tak samo, jak otwierasz każdą inną aplikację.

Opcjonalnie możesz pobrać plik APK dla Androida ze strony [Pobierz Obsidian](https://obsidian.md/download).

## Instalacja Obsidian na iPhonie i iPadzie

1. Znajdź Obsidian w [App Store](https://apps.apple.com/us/app/obsidian-connected-notes/id1557175442).
2. Dotknij **Pobierz**, aby pobrać aplikację.
3. Otwórz Obsidian tak samo, jak otwierasz każdą inną aplikację.
