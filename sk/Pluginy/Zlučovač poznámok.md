---
permalink: plugins/note-composer
---
[[Zlučovač poznámok]] je [[Vstavané pluginy|základný plugin]], ktorý vám umožňuje zlúčiť dve poznámky alebo extrahovať časť poznámky do novej poznámky.

## Zlúčenie poznámok

Zlúčenie poznámok pridá jednu poznámku k druhej a odstráni prvú. Zlučovač poznámok aktualizuje všetky odkazy tak, aby odkazovali na zlúčenú poznámku.

Keď vyberiete poznámku, do ktorej chcete zlúčiť, môžete si vybrať z nasledujúcich metód:

- `Enter`: Pridá zdrojovú poznámku na _koniec_ cieľovej poznámky.
- `Shift+Enter`: Pridá zdrojovú poznámku na _začiatok_ cieľovej poznámky.
- `Ctrl+Enter` (alebo `Cmd+Enter` na macOS): Vytvorí novú poznámku s obsahom zdrojovej poznámky.

Ak chcete zlúčiť aktívnu poznámku s inou poznámkou vo vašom trezore:

**Prieskumník súborov**

1. V prieskumníku súborov kliknite pravým tlačidlom myši na poznámku, ktorú chcete zlúčiť.
2. Kliknite na **Zlúčiť celý súbor s...**.
3. Vyberte poznámku, do ktorej chcete zlúčiť.
4. Kliknite na **Zlúčiť** pre potvrdenie.

**Paleta príkazov**

1. Otvorte [[Paleta príkazov|paletu príkazov]].
2. Vyberte **Zlučovač poznámok: Zlúčiť aktuálny súbor s ďalším súborom...**.
3. Vyberte poznámku, do ktorej chcete zlúčiť.
4. Kliknite na **Zlúčiť** pre potvrdenie.

> [!tip] Tip
> V predvolenom nastavení vás Zlučovač poznámok požiada o potvrdenie pri zlučovaní poznámok. Ak potvrdenie vypnete a zlúčite poznámku omylom, stále ju môžete obnoviť pomocou pluginu [[Obnova súboru]].

## Extrahovanie poznámky

Keď vyberiete poznámku, do ktorej chcete extrahovať výber, môžete si vybrať z nasledujúcich metód:

- `Enter`: Pridá vybraný text na _koniec_ cieľovej poznámky.
- `Shift+Enter`: Pridá vybraný text na _začiatok_ cieľovej poznámky.
- `Ctrl+Enter` (alebo `Cmd+Enter` na macOS): Vytvorí novú poznámku s vybraným textom.

Ak chcete extrahovať text do novej poznámky:

**Editor**

1. V **Editore** vyberte text, ktorý chcete extrahovať.
2. Kliknite pravým tlačidlom myši na vybraný text.
3. Kliknite na **Extrahovať aktuálny výber...**.
4. Vyberte poznámku, do ktorej chcete extrahovať.

**Paleta príkazov**

1. V **Editore** vyberte text, ktorý chcete extrahovať.
2. Otvorte [[Paleta príkazov|paletu príkazov]].
3. Vyberte **Zlučovač poznámok: Extrahovať aktuálny výber...**.
4. Vyberte poznámku, do ktorej chcete extrahovať.

> [!tip] Tip
> V predvolenom nastavení Zlučovač poznámok nahradí extrahovaný text odkazom na cieľovú poznámku. V nastaveniach môžete tiež zmeniť správanie tak, aby sa namiesto toho cieľová poznámka [[Vkladanie súborov|vložila]], alebo aby sa na mieste nič nenechalo.

## Súbor šablóny

Nakonfigurovaním šablóny môžete prispôsobiť obsah predtým, než ho pridáte do novej poznámky. Ak chcete použiť šablónu, zadajte **Umiestnenie šablóny súboru** v nastaveniach pluginu.

Šablóna môže obsahovať nasledujúce premenné:

| Premenná          | Popis                                                                                                                                                    |
|-------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------|
| `{{content}}`     | Obsah na zlúčenie alebo extrahovaný výber textu. Ak túto premennú nezahrniete, Zlučovač poznámok pridá obsah na koniec šablóny. |
| `{{fromTitle}}`   | Názov zdrojovej poznámky.                                                                                                                                |
| `{{newTitle}}`    | Názov cieľovej poznámky. Napríklad na pridanie názvu súboru ako nadpisu na začiatok súboru.                                                              |
| `{{date:FORMAT}}` | Dátum vytvorenia novej poznámky. Napríklad `{{date:YYYY-MM-DD}}`.                                                                                       |
