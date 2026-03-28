---
permalink: publish/security
---
Możesz wybrać notatki, które chcesz opublikować w [[Wprowadzenie do Obsidian Publish|Obsidian Publish]]. Reszta Twoich notatek pozostaje bezpiecznie w Twoim skarbcu.

Tylko wybrane przez Ciebie notatki są wysyłane na serwery Obsidian, a notatki, które cofniesz z publikacji, zostaną usunięte.

## Ochrona hasłem

Aby uzyskać lepszą kontrolę dostępu do swojej strony Publish, zastosuj hasło strony. Odwiedzający zostaną poproszeni o podanie hasła podczas próby uzyskania dostępu. Jeśli później zdecydujesz się usunąć hasło strony, cała strona stanie się ponownie widoczna publicznie.

> [!warning] Indywidualna ochrona hasłem poszczególnych opublikowanych notatek nie jest obecnie obsługiwana.

### Dodawanie hasła strony

1. Na wstążce, po lewej stronie okna aplikacji, kliknij **Opublikuj zmiany** ![[lucide-send.svg#icon]].
2. W oknie dialogowym **Opublikuj zmiany** kliknij **Zmień ustawienia strony** ![[lucide-cog.svg#icon]].
3. W sekcji **Inne ustawienia strony**, obok **Hasła**, kliknij **Zarządzaj**.
4. Kliknij **Nowe hasło**.
5. W polu **Hasło** wprowadź hasło dla swojej strony.
6. (Opcjonalne) W polu **Nazwa**, wprowadź nazwę dla hasła, na przykład imię osoby, której chcesz dać dostęp do strony.
7. Kliknij **Dodaj to hasło**.

### Usuwanie hasła strony

1. Na wstążce, po lewej stronie okna aplikacji, kliknij **Opublikuj zmiany** ![[lucide-send.svg#icon]].
2. W oknie dialogowym **Opublikuj zmiany** kliknij **Zmień ustawienia strony** ![[lucide-cog.svg#icon]].
3. W sekcji **Inne ustawienia strony**, obok **Hasła**, kliknij **Zarządzaj**.
5. Kliknij ikonę krzyżyka obok hasła, które chcesz usunąć.

## Gromadzenie danych
### Dane odwiedzających

Domyślnie Obsidian Publish **nie** gromadzi danych odwiedzających, nie przechowuje ciasteczek ani nie przetwarza danych osobowych. Możesz jednak wdrożyć analitykę lub rejestrować inne dane użytkowników, [[Dostosuj swoją stronę|dostosowując swoją stronę]].

Jako właściciel strony jesteś odpowiedzialny za przestrzeganie RODO i przepisów dotyczących prywatności w swoim regionie. Obejmuje to stworzenie własnego banera z powiadomieniem, który można zaimplementować za pomocą publish.js, oraz dodanie strony z polityką prywatności do swojej witryny.

## Dostęp

Obsidian korzysta z usług [Cloudflare](https://www.cloudflare.com) do hostowania stron Publish. Serwery znajdują się w San Francisco, Kalifornia.

### Zarządzanie dostępem do Obsidian Publish w Twojej sieci

Aby regulować dostęp do Obsidian Publish w swojej sieci, musisz zarządzać następującymi domenami:

- Frontend: `publish.obsidian.md`
- Backend: `publish-main.obsidian.md`

Ponadto usługi backendowe wykorzystują następujące subdomeny: `publish-xx.obsidian.md`, gdzie `xx` to liczba z zakresu od `1` do `100`.

> [!tip] Jeśli Twój system zapory sieciowej to obsługuje, zalecamy dodanie `publish-*.obsidian.md` do białej listy, aby uwzględnić ciągłe rozszerzanie subdomen.
