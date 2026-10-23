---
permalink: symlinks
---
Możesz używać [dowiązań symbolicznych](https://en.wikipedia.org/wiki/Symbolic_link) (symlinków) i [połączeń](https://learn.microsoft.com/en-us/windows/win32/fileio/hard-links-and-junctions#junctions) w swoim sejfie, aby przechowywać pliki poza sejfem i [[Jak Obsidian przechowuje dane#Ustawienia globalne|folderem systemowym]].

> [!danger] Używasz na własne ryzyko
> Zdecydowanie odradzamy korzystanie z dowiązań symbolicznych. Używając dowiązań symbolicznych i połączeń w sejfie, ryzykujesz utratę lub uszkodzenie danych albo awarię Obsidian. Upewnij się, że regularnie tworzysz kopie zapasowe sejfu i ustawień.

Poniżej znajdują się niektóre ograniczenia lub problemy, o których wiemy i które warto mieć na uwadze:

- Pętle dowiązań symbolicznych są niedozwolone, aby zapobiec awarii Obsidian spowodowanej nieskończoną pętlą.
- Cele dowiązań symbolicznych muszą być całkowicie rozłączne z katalogiem głównym sejfu lub innymi celami dowiązań symbolicznych. Rozłączność oznacza, że jeden folder nie zawiera drugiego i odwrotnie. Obsidian ignoruje wszelkie dowiązania symboliczne do folderu nadrzędnego sejfu lub z jednego folderu w sejfie do innego folderu w tym samym sejfie. Jest to zabezpieczenie, które zapobiega powstawaniu zduplikowanych plików w sejfie, co mogłoby powodować niejednoznaczność łączy.
- Dowiązania symboliczne mogą nie działać dobrze z Obsidian Sync ani z _żadnym innym rodzajem synchronizacji_. Jeśli cel dowiązania symbolicznego jest jednocześnie folderem synchronizowanym przez inny sejf Obsidian, możesz (potencjalnie) napotkać konflikty synchronizacji lub utratę danych. Niektóre narzędzia synchronizacji, takie jak Git, nie podążają za dowiązaniami symbolicznymi, lecz synchronizują _ścieżkę_, na którą wskazuje dowiązanie symboliczne, co może dawać niepożądane wyniki, jeśli udostępniasz swój sejf innym osobom w ten sposób.
- Menedżer plików Obsidian nie może przenosić plików pomiędzy granicami urządzeń, więc jeśli utworzysz dowiązanie symboliczne do folderu na innym dysku niż sejf, nie będziesz mógł przeciągać plików między tym folderem a innymi folderami za pomocą przeglądarki plików Obsidian. (Będziesz musiał użyć przeglądarki plików swojego systemu operacyjnego do takich przeniesień, a Obsidian potraktuje przeniesienie jako usunięcie i utworzenie nowego pliku. Ponadto _nie_ zaktualizuje żadnych łączy, które zależały od ścieżki tego pliku.)
- Dowiązania symboliczne do plików (w przeciwieństwie do dowiązań symbolicznych do folderów) _mogą_ działać, ale nie są obecnie oficjalnie obsługiwane. Zmiany dokonane poza Obsidian nie są monitorowane, więc jeśli zmienisz plik bezpośrednio, Obsidian nie wykryje zmiany, nie zaktualizuje indeksów wyszukiwania itp.
- Tworzenie dowiązań symbolicznych do elementów wewnątrz folderu `.obsidian/` w celu współdzielenia ich między sejfami **wiąże się z dużym ryzykiem uszkodzenia ustawień**, chyba że _naprawdę_ wiesz, co robisz. Jeśli zdecydujesz się na takie rozwiązanie, przynajmniej posiadaj kopie zapasowe.
