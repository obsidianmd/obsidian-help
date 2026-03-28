---
permalink: plugin-security
---
Zespół Obsidian traktuje bezpieczeństwo poważnie. Ta strona wyjaśnia zagrożenia związane z instalowaniem wtyczek społeczności oraz co zespół Obsidian robi, aby im przeciwdziałać.

## Tryb ograniczony

Domyślnie Obsidian działa w trybie ograniczonym, aby zapobiec wykonywaniu kodu stron trzecich. Wyłączaj tryb ograniczony tylko wtedy, gdy ufasz autorom wtyczek, które instalujesz.

Aby wyłączyć tryb ograniczony:

1. Otwórz **[[Ustawienia]]**.
2. W menu bocznym wybierz **Wtyczki społeczności**.
3. Wybierz **Włącz wtyczki stworzone przez społeczność**.

Aby włączyć tryb ograniczony:

1. Otwórz **[[Ustawienia]]**.
2. W menu bocznym wybierz **Wtyczki społeczności**.
3. Obok opcji **Tryb ograniczony** wybierz **Włącz**.

Zainstalowane wtyczki pozostają w skarbcu nawet po włączeniu trybu ograniczonego, ale są ignorowane przez Obsidian.

## Możliwości wtyczek

Ze względu na ograniczenia techniczne Obsidian nie może w niezawodny sposób ograniczyć wtyczek do określonych uprawnień lub poziomów dostępu. Oznacza to, że wtyczki dziedziczą poziomy dostępu Obsidian. W związku z tym weź pod uwagę następujące przykłady tego, co mogą robić wtyczki społeczności:

- Wtyczki społeczności mogą uzyskiwać dostęp do plików na Twoim komputerze.
- Wtyczki społeczności mogą łączyć się z internetem.
- Wtyczki społeczności mogą instalować dodatkowe programy.

> [!tip] 
> Jeśli pracujesz z wrażliwymi danymi i chcesz zainstalować wtyczkę społeczności, zalecamy przeprowadzenie niezależnego audytu bezpieczeństwa wtyczki przed jej użyciem.

## Proces recenzji wtyczek

Wtyczki społeczności przechodzą wstępną recenzję przy zgłaszaniu ich do sklepu z wtyczkami. Wszystkie wtyczki muszą być zgodne z [Zasadami dla deweloperów Obsidian](https://docs.obsidian.md/Developer+policies).

Zespół Obsidian jest mały i nie jest w stanie ręcznie przeglądać każdego nowego wydania wtyczek społeczności. Zamiast tego polegamy na pomocy społeczności w identyfikowaniu i zgłaszaniu problemów z wtyczkami.

- Jeśli odkryjesz drobne luki bezpieczeństwa we wtyczce społeczności, sprawdź plik `security.md` lub `readme.md` autora wtyczki, aby dowiedzieć się, jak je zgłaszać. W przypadku krytycznych błędów zgłoś problem również do [[Pomoc i wsparcie#Kontakt z pomocą techniczną Obsidian|pomocy technicznej Obsidian]].
- Jeśli podejrzewasz, że wtyczka społeczności jest złośliwa, zgłoś to do [[Pomoc i wsparcie#Kontakt z pomocą techniczną Obsidian|pomocy technicznej Obsidian]] lub wyślij prywatną wiadomość do naszych moderatorów.
