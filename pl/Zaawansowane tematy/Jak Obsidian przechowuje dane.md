Wierzymy, że [[Obsidian#Jak się różnimy|Twoje dane są zawsze Twoje i masz nad nimi kontrolę]]. Twoje notatki są zapisane w markdownie, który jest otwartym formatem opartym na plikach tekstowych, więc powinien być w przyszłości czytelny dla każdego komputera, który radzi sobie z plikami tekstowymi. Możesz swobodnie edytować notatki w innych programach, nawet jeśli masz je otwarte w Obsidianie.

### Dane dotyczące sejfu

Jest jednak kilka danych potrzebnych oprogramowaniu, które nie są przechowywane w markdownie. Obsidian tworzy katalog o nazwie `.obsidian` w katalogu głównym każdego sejfu, który utworzysz. Zawiera on Twoją konfigurację, w tym własne klawisze skrótów i włączone wtyczki. Każdy katalog zaczynający się od `.` jest niewidoczny w większości systemów, więc prawdopodobnie nigdy go nie zobaczysz, chyba że spróbujesz. Jeśli usuniesz ten katalog, żadne z Twoich danych nie znikną, ale stracisz swoje niestandardowe ustawienia. Zostanie on stworzony ponownie, gdy otworzysz sejf w Obsidianie. Jeśli używasz `git`, prawdopodobnie najlepiej jest ignorować (`.gitignore`) plik `.obsidian/workspace`, ponieważ przechowuje on twoje panele i otwarte pliki, ale nie zaobserwowaliśmy żadnych innych problemów z pozostawieniem go w gicie.

### Katalog systemowy

Obsidian przechowuje również pewne informacje w katalogu systemowym. Jest on różny dla każdego systemu operacyjnego; na Macu jest to `/Users/twojanazwauzytkownika/Library/Application Support/obsidian`, na Windows `%APPDATA%/Obsidian`, i `$XDG_CONFIG_HOME/Obsidian/` lub `~/.config/Obsidian/` na Linuksie. W rezultacie, zalecamy nie tworzyć sejfu w tym katalogu.

Poza tym możesz jednak utworzyć sejf w dowolnym miejscu, na które pozwoli Ci system operacyjny. Pliki z Obsidiana synchronizują się dobrze z Dropboxem, iCloud, OneDrive, git i każdą inną usługą synchronizacji, jaką do tej pory wypróbowaliśmy.

### Łącza symboliczne

Począwszy od wersji 0.11.1, Obsidian będzie rozpoznawał linki symboliczne (symbolic links) i połączenia (junctions). Oficjalnie nie zalecamy ich używania, ale zdajemy sobie sprawę, że istnieją dla nich ważne przypadki użycia. Używaj ich na własne ryzyko.

Pamiętaj, że istnieje wiele pułapek związanych z używaniem linków symbolicznych, a niektóre z nich mogą mieć poważne konsekwencje, takie jak utrata danych, uszkodzenie plików lub awaria Obsidiana.

Poniżej przedstawiamy kilka ograniczeń i problemów, o których wiemy, że warto o nich pamiętać:

- Pętle symlinków są niedozwolone, aby zapobiec zawieszeniu Obsidiana z powodu nieskończonej pętli.
- Cele symlinków muszą być całkowicie odseparowane od głównego katalogu sejfu lub innych celów symlinków. Rozłączność oznacza, że jeden folder nie zawiera drugiego, lub odwrotnie. Obsidian zignoruje każde symlinkowanie do folderu nadrzędnego sejfu, lub z jednego folderu w sejfie do innego folderu w tym samym sejfie. Jest to zabezpieczenie przed duplikowaniem plików w sejfie, co mogłoby spowodować, że łącza stałyby się niejednoznaczne.
- Symlinki mogą nie działać dobrze z synchronizacją Obsidianu lub _jakimkolwiek innym rodzajem synchronizacji_. Jeśli celem symlinka jest katalog, który jest synchronizowany przez inny sejf Obsidianu, możesz (potencjalnie) doprowadzić do konfliktów synchronizacji lub utraty danych. Niektóre narzędzia do synchronizacji (np. git) nie podążają za symlinkami, ale raczej synchronizują _ścieżkę_, na którą wskazuje symlink, co może przynieść niepożądane rezultaty, jeśli w ten sposób udostępnisz swój sejf innym osobom.
- Menedżer plików Obsidiana nie może przenosić plików ponad granicami urządzeń, więc jeśli utworzysz symlink do folderu na innym dysku niż sejf, nie będziesz mógł przeciągać plików między tym folderem a innymi folderami za pomocą eksploratora plików Obsidiana. (Będziesz musiał użyć do tego celu eksploratora systemu operacyjnego, a Obsidian potraktuje to jako usunięcie i utworzenie nowego pliku. Nie zaktualizuje również żadnych odnośników, które zależały od ścieżki tego pliku).
- Symlinki do plików (w przeciwieństwie do symlinków do folderów) _mogą_ działać, ale nie są oficjalnie wspierane w tym momencie. Zmiany dokonywane poza Obsidianem nie są obserwowane, więc jeśli zmienisz plik bezpośrednio, Obsidian nie wykryje zmiany, nie zaktualizuje indeksów wyszukiwania, itp.
- Symlinkowanie rzeczy pod katalogiem `.obsidian/` w celu dzielenia ich między sejfami **ma duże szanse na uszkodzenie ustawień**, chyba że _naprawdę_ wiesz co robisz. Jeśli zdecydujesz się pójść tą drogą, przynajmniej miej kopie zapasowe.
