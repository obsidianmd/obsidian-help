---
permalink: backup
---
Jeśli jeszcze nie tworzysz kopii zapasowej komputera, zacznij teraz! Wtyczka [[Odzyskiwanie plików]] w Obsidian jest przydatna, ale ma ograniczenia. Może odzyskać tylko pewną ilość danych i przechowuje informacje o odzyskiwaniu na poszczególnych urządzeniach. Dla bardziej niezawodnej ochrony zalecamy wdrożenie odpowiedniego systemu kopii zapasowych.

**Dlaczego warto tworzyć kopie zapasowe danych?**

Domyślnie Obsidian przechowuje notatki **lokalnie** na Twoim urządzeniu, a nie w chmurze. Oznacza to, że [dane należą w pełni do Ciebie](https://obsidian.md/about), co daje Ci nad nimi kontrolę. Jednak lokalne przechowywanie może być narażone na problemy takie jak uszkodzenie lub utrata danych. To nie jest kwestia „czy", ale „kiedy". Tworzenie kopii zapasowych chroni przed tymi nieuniknionymi sytuacjami i zapewnia utrzymanie kontroli nad notatkami.

## Synchronizacja to nie kopia zapasowa

Usługi takie jak [[Wprowadzenie do Obsidian Sync|Obsidian Sync]], iCloud, OneDrive i Dropbox pomagają synchronizować notatki między różnymi urządzeniami. Choć mogą oferować funkcje takie jak [[Historia wersji|przywracanie notatek]], **nie są zaprojektowane jako kopie zapasowe**. Synchronizacja utrzymuje notatki w aktualnym stanie, ale nie chroni przed utratą danych.

- **Synchronizacja:** Synchronizacja zapewnia, że pliki są takie same na wszystkich urządzeniach. Gdy zmienisz plik na jednym urządzeniu, zostanie on zaktualizowany na wszystkich zsynchronizowanych urządzeniach. Usługi synchronizacji nie mają „głównego" urządzenia.
- **Kopia zapasowa:** Kopia zapasowa zapisuje kopię danych w innej lokalizacji, aby pomóc je odzyskać w przypadku utraty lub uszkodzenia danych. Kopie zapasowe nie są przeznaczone do aktualizacji w czasie rzeczywistym ani do współpracy.

Aby prawidłowo utworzyć kopię zapasową skarbca, użyj dedykowanego narzędzia do tworzenia kopii zapasowych, które tworzy jednokierunkową kopię danych. Narzędzie to wyśle dane do bezpiecznej lokalizacji kopii zapasowej bez zmieniania danych na Twoim urządzeniu.

Jeśli korzystasz z wielu urządzeń z synchronizacją, wybierz **jedno urządzenie** jako urządzenie do tworzenia kopii zapasowych. Zazwyczaj jest to Twoje główne urządzenie, czyli to, którego używasz najczęściej. Pamiętaj, że większość usług synchronizacji nie rozpoznaje żadnego urządzenia jako „głównego"; jest to jedynie koncepcja ułatwiająca zarządzanie kopiami zapasowymi.

> [!Example] Używasz Obsidian Sync na laptopie, tablecie, telefonie i komputerze stacjonarnym w pracy. Najczęściej korzystasz ze skarbca na komputerze w pracy, czasem na laptopie, a rzadko na tablecie lub telefonie. W tym przypadku komputer w pracy byłby Twoim „głównym urządzeniem" do tworzenia kopii zapasowych.

## Korzystanie z wtyczek społeczności

Chociaż zespół Obsidian nie może oficjalnie rekomendować żadnej konkretnej wtyczki, uznajemy dwie wtyczki społeczności, które stały się popularne wśród użytkowników do tworzenia kopii zapasowych plików:

- **[Obsidian Git](https://obsidian.md/plugins?id=obsidian-git):** Użyj tej wtyczki, aby tworzyć kopię zapasową skarbca poprzez commitowanie jego zawartości do [repozytorium Git](https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository). To skuteczny sposób na kontrolę wersji notatek i zapewnienie ich bezpieczeństwa na zdalnym serwerze. Pamiętaj jednak, że przy tej metodzie dane mogą być przechowywane na [[#Korzystanie z usług chmurowych|zewnętrznej platformie hostingowej]].
- **[Local Backup](https://obsidian.md/plugins?id=local-backup):** Ta wtyczka pozwala tworzyć lokalne kopie skarbca w wybranym folderze, z opcjami archiwizacji. Możesz nawet użyć folderu synchronizacji, takiego jak folder Dropbox, aby połączyć lokalne i chmurowe kopie zapasowe. Ta metoda **dobrze się łączy** z opcjami kopii zapasowych opisanymi poniżej.

## Korzystanie z usług chmurowych

> [!info] Nie zaleca się umieszczania lokalizacji skarbca w wybranej usłudze kopii zapasowych.

Przechowywanie kopii zapasowej w chmurze jest alternatywą i uzupełnieniem fizycznego przechowywania danych, zamiast zewnętrznego dysku twardego lub pamięci USB. Zewnętrzny dysk twardy lub pamięć USB mogą zostać zgubione lub uszkodzone. Największą zaletą przechowywania plików w chmurze jest to, że są dostępne w każdym czasie i miejscu. Wadą jest to, że większość usług kopii zapasowych należy do prywatnych firm.

Pod względem bezpieczeństwa należy zawsze zwracać szczególną uwagę na dostęp i zabezpieczenia kopii zapasowych w chmurze. [Worldbackupday](https://www.worldbackupday.com/en) prowadzi aktualną listę usług kopii zapasowych online, które warto rozważyć.

## Korzystanie z dysków zewnętrznych

**Dyski twarde i dyski SSD**
Kopie zapasowe na zewnętrznych dyskach twardych nadal mają wartość w coraz bardziej opartym na chmurze świecie i są głównie wykorzystywane do przechowywania danych i tworzenia kopii zapasowych komputerów. Największą wadą zewnętrznego dysku jest to, że może się zepsuć lub zostać zgubiony. Największą zaletą jest to, że przestrzeń dyskową wystarczy kupić tylko raz. Korzystanie z zewnętrznego dysku twardego jest często łączone z [[#Korzystanie z kopii zapasowych komputera|kopią zapasową komputera]].

**Pamięci USB flash**
Pamięci flash (nazywane również pendrive'ami lub pamięciami przenośnymi) to prosta i skuteczna metoda szybkiego tworzenia kopii zapasowych.

1. Włóż pamięć flash do komputera lub laptopa.
2. Upewnij się, że urządzenie jest rozpoznane i zamontowane w systemie plików. W razie potrzeby sformatuj pamięć flash, aby była kompatybilna z Twoim systemem plików.
3. Skopiuj folder skarbca z jego bieżącej lokalizacji na pamięć flash.
4. Bezpiecznie odmontuj pamięć flash.
5. Wyjmij pamięć flash z urządzenia.

**Kopia zapasowa NAS**
Dla doświadczonych użytkowników tworzenie kopii zapasowych danych na serwerze NAS (Network Attached Storage) jest dobrą i bezpieczną metodą, ponieważ posiada wiele dysków twardych i dodatkowe mechanizmy odzyskiwania.

> [!tip] Jeśli zewnętrzny dysk zawiera wrażliwe informacje, zaleca się przechowywanie go w bezpiecznym miejscu, na przykład w zabezpieczonym pomieszczeniu.

## Korzystanie z kopii zapasowych komputera

System operacyjny sam oferuje możliwość tworzenia kopii zapasowych, zarówno online w chmurze, jak i na dysku zewnętrznym.

- **[Windows](https://www.microsoft.com/en-us/windows/learning-center/back-up-files)**: Kopia zapasowa za pomocą OneDrive lub dysku zewnętrznego.
- **[Mac](https://support.apple.com/en-us/104984)**: Kopia zapasowa na urządzenie zewnętrzne za pomocą Time Machine.
- **[Linux](https://linuxize.com/post/how-to-use-rsync-for-local-and-remote-data-transfer-and-synchronization/)**: `rsync` do wybranego katalogu lub dysku.

## Następne kroki

Ta strona pomocy zawiera krótki przegląd opcji tworzenia kopii zapasowych, ale nie jest wyczerpująca. Aby uzyskać bardziej szczegółowe informacje, odwiedź [Worldbackupday.com](https://www.worldbackupday.com/en) lub zapytaj innych użytkowników Obsidian w [naszej społeczności](https://obsidian.md/community) o ich strategie tworzenia kopii zapasowych!
