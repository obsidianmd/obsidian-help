Jeśli chcesz dodać własne style do swojego sejfu, możesz to zrobić na dwa sposoby:

## Style sejfu

### Motywy

Motywy pozwalają Ci przełączać wygląd Twojego sejfu za pomocą rozwijanego menu, gdy tylko zostaną dodane do katalogu motywów sejfu.

Ta konfiguracja może być znaleziona w sekcji `Ustawienia` > `Wygląd` > `Motywy` w ustawieniach sejfu.

### Tworzenie własnego motywu

Jeśli tworzysz swój własny motyw, możesz to zrobić przez:

1. Tworząc plik CSS własnego motywu w katalogu themes `TWÓJ_SEJF/.obsidian/themes/TWOJ_STYL_NIESTANDARDOWY.css`.
2. Włączenie go w menu rozwijanym motywu w zakładce `Ustawienia` > `Wygląd` > `Motywy`.

Więcej informacji o tym, jak dostosować style widoku grafu, można znaleźć w [[Widok grafu]].

### Użyj motywów i/lub arkuszy CSS

Możesz znaleźć tą konfigurację w zakładce `Wygląd` w ustawieniach. Możesz wybrać motyw społeczności lub ustawić motyw, który sam stworzyłeś. Jeśli ustawisz motyw społeczności, zostanie on automatycznie umieszczony w odpowiednim folderze. Jeśli stworzysz własny motyw, musisz sam umieścić go we wskazanej lokalizacji folderu.

Snippety CSS powinny być małymi fragmentami CSS dla małych zmian, które chcesz wprowadzić/rzeczy, które chcesz dodać. Te snippety muszą być umieszczone w pokazanym katalogu.

Możesz przejść do odpowiednich katalogów klikając na przyciski folderów. Jeśli folder nie jest jeszcze utworzony, zostanie utworzony. W przypadku, gdy po umieszczeniu snippetów lub motywu nie pojawią się one na liście, możesz kliknąć przycisk obok ikony folderu, aby odświeżyć listę.

## Style Obsidian Publish

W tym momencie [[Obsidian Publish]] nie jest w stanie automatycznie wykryć skonfigurowanych [[Dodawanie stylów niestandardowych#Motywy|Motywów]] i opublikować odpowiednich stylów. 

Obejściem dla tego ograniczenia jest:

1. Wejdź do `TWÓJ_SEJF/.obsidian/themes/AKTUALNY_FOLDER_MOTYWU`;
2. Skopiuj główny plik CSS `AKTUALNY_MOTYW.css` znajdujący się w tym folderze;
3. Wklej go do głównego katalogu swojego sejfu (`TWÓJ_SEJF`);
4. Zmień nazwę pliku CSS na `publish.css`;
5. W pluginie publish, załaduj plik `publish.css`;
6. Jeśli twój CSS nie zacznie działać w ciągu kilku minut, spróbuj odświeżyć pamięć podręczną przeglądarki, ponieważ stara wersja arkusza CSS mogła zostać zbuforowana.