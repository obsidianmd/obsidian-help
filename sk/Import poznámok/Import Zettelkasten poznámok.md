---
permalink: import/zettelkasten
---
Ak ste na pomenovanie a prepojenie poznámok používali metódu Zettelkasten, možno budete musieť konvertovať odkazy z `[[UID]]` na `[[UID Názov mojej poznámky]]`.

Napríklad, ak máte poznámku s názvom `202301011230 Názov mojej poznámky` a odkazujete na ňu z inej poznámky len pomocou UID, `[[202301011230]]`. Keďže Obsidian na rozpoznanie interných odkazov používa celý názov poznámky, takéto odkazy prestanú fungovať.

Na aktualizáciu všetkých odkazov `[[UID]]` vo vašom trezore tak, aby používali celý názov poznámky, použite [[Prevodník formátov]].

1. Otvorte **[[Nastavenia]]**.
2. V časti **Vstavané pluginy** zapnite **Prevodník formátov** a zatvorte okno Nastavenia.
3. Na paneli nástrojov na ľavej strane okna aplikácie vyberte **Open format convert** ![[lucide-binary.svg#icon]].
4. Zapnite **Oprava Zettelkasten odkazov**.
5. Vyberte **Spustiť konverziu**. Tým sa skonvertujú všetky poznámky v celom vašom trezore.

> [!tip] Skrášlenie Zettelkasten odkazov
> [[Prevodník formátov]] môže tiež skrášliť vaše odkazy odstránením UID zo zobrazovaného mena. Napríklad, `[[UID]]` sa skonvertuje na `[[UID Názov mojej poznámky|Názov mojej poznámky]]`.
>
> Na skrášlenie vašich Zettelkasten odkazov zapnite **Skrášlenie Zettelkasten odkazov** v okne prevodníka formátov.

Na vytváranie Zettelkasten poznámok v Obsidian môžete tiež použiť [[Unikátny tvorca poznámok|Unikátny tvorca poznámok]].
