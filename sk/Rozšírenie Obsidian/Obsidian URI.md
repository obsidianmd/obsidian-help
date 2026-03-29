---
permalink: uri
---
Obsidian URI je vlastný URI protokol podporovaný aplikáciou Obsidian, ktorý umožňuje spúšťať rôzne akcie, ako napríklad otvorenie poznámky alebo vytvorenie poznámky. Obsidian URI umožňuje automatizáciu a pracovné postupy medzi aplikáciami.

## Formát URI

Obsidian URI používa nasledujúci formát:

```
obsidian://action?param1=value&param2=value
```

Parameter `action` je akcia, ktorú chcete vykonať. Dostupné akcie zahŕňajú:

- `open` na otvorenie poznámky.
- `new` na vytvorenie alebo pridanie do existujúcej poznámky.
- `daily` na vytvorenie alebo otvorenie dennej poznámky.
- `unique` na vytvorenie novej jedinečnej poznámky.
- `search` na otvorenie vyhľadávania.
- `choose-vault` na otvorenie správcu trezorov.

> [!warning] Kódovanie
> Uistite sa, že vaše hodnoty sú správne URI kódované. Napríklad lomky `/` musia byť kódované ako `%2F` a medzery musia byť kódované ako `%20`.
> 
 Toto je obzvlášť dôležité, pretože nesprávne zakódovaný "rezervovaný" znak môže narušiť interpretáciu URI. [Podrobnosti nájdete tu](https://en.wikipedia.org/wiki/Percent-encoding).

## Otvorenie poznámky

Akcia `open` otvorí trezor Obsidian alebo otvorí súbor v rámci tohto trezoru.

### Príklady

- `obsidian://open?vault=my%20vault`
  Toto otvorí trezor `my vault`. Ak je trezor už otvorený, okno sa zaostrí.
- `obsidian://open?vault=ef6ca3e3b524d22f`
  Toto otvorí trezor identifikovaný ID `ef6ca3e3b524d22f`.
- `obsidian://open?vault=my%20vault&file=my%20note`
  Toto otvorí poznámku `my note.md` v trezore `my vault`, za predpokladu, že súbor existuje.
- `obsidian://open?path=%2Fhome%2Fuser%2Fmy%20vault%2Fpath%2Fto%2Fmy%20note`
  Toto vyhľadá akýkoľvek trezor, ktorý obsahuje cestu `/home/user/my vault/path/to/my note`. Potom sa zvyšok cesty odovzdá parametru `file`. Napríklad, ak trezor existuje na `/home/user/my vault`, potom by to bolo ekvivalentné parametru `file` nastavenému na `path/to/my note`.


> [!tip] Otvorenie nadpisu alebo bloku
> So správnym URI kódovaním môžete navigovať na nadpis alebo blok v rámci poznámky. `Note%23Heading` by navigoval na nadpis s názvom "Heading", zatiaľ čo `Note%23%5EBlock` by navigoval na blok s názvom "Block".

### Parametre

- `vault` môže byť buď názov trezoru, alebo ID trezoru[^1].
- `file` môže byť buď názov súboru, alebo cesta od koreňa trezoru k zadanému súboru. Ak je prípona súboru `md`, príponu je možné vynechať.
- `path` absolútna cesta v súborovom systéme k súboru.
  - Použitie tohto parametra prepíše `vault` aj `file`.
  - Toto spôsobí, že aplikácia vyhľadá najšpecifickejší trezor, ktorý obsahuje zadanú cestu k súboru.
  - Potom zvyšok cesty nahradí parameter `file`.
- `prepend` pridá obsah na začiatok súboru a pokúsi sa zlúčiť vlastnosti.
- `append` pridá obsah na koniec súboru a tiež sa pokúsi zlúčiť vlastnosti.
- `paneType` (voliteľné) určuje, kde sa poznámka otvorí v používateľskom rozhraní.
  - ak nie je uvedený, nahradí sa posledná aktívna karta.
  - `paneType=tab` otvorí v novej karte.
  - `paneType=split` otvorí v novej skupine kariet.
  - `paneType=window` otvorí vo vyskakovacom okne (iba desktop).

## Vytvorenie poznámky

Akcia `new` vytvorí novú poznámku v trezore, voliteľne s nejakým obsahom.

### Príklady

- `obsidian://new?vault=my%20vault&name=my%20note`
  Toto otvorí trezor `my vault` a vytvorí novú poznámku s názvom `my note`.
- `obsidian://new?vault=my%20vault&file=path%2Fto%2Fmy%20note`
  Toto otvorí trezor `my vault` a vytvorí novú poznámku na `path/to/my note`.

### Parametre

- `vault` môže byť buď názov trezoru, alebo ID trezoru[^1]. Rovnaké ako pri akcii `open`.
- `name` názov súboru, ktorý sa má vytvoriť. Ak je zadaný, umiestnenie súboru sa zvolí na základe vašich preferencií "Predvolené umiestnenie novej poznámky".
- `file` absolútna cesta v rámci trezoru vrátane názvu. Ak je zadaný, prepíše `name`.
- `path` globálne absolútna cesta. Funguje podobne ako parameter `path` v akcii `open`, ktorý prepíše `vault` aj `file`.
- `paneType` (voliteľné) určuje, kde sa poznámka otvorí v používateľskom rozhraní. Rovnaké ako pri akcii `open`.
- `content` (voliteľné) obsah poznámky.
- `clipboard` (voliteľné) použitie obsahu schránky namiesto zadania `content`.
- `silent` (voliteľné) zahrňte tento parameter, ak nechcete otvoriť novú poznámku.
- `append` (voliteľné) zahrňte tento parameter na pridanie do existujúceho súboru, ak taký existuje.
- `overwrite` (voliteľné) prepíše existujúci súbor, ak taký existuje, ale iba ak nie je nastavený `append`.
- `x-success` (voliteľné) pozri [[#Použitie parametrov x-callback-url]].

## Vytvorenie alebo otvorenie dennej poznámky

Akcia `daily` vytvorí alebo otvorí vašu dennú poznámku. Plugin [[Každodenné poznámky]] musí byť povolený.

### Príklady

- `obsidian://daily?vault=my%20vault`
  Toto otvorí trezor `my vault` a vytvorí alebo otvorí dennú poznámku.

### Parametre

Akcia `daily` akceptuje rovnaké parametre ako akcia `new`.

## Jedinečná poznámka

Akcia `unique` vytvorí novú jedinečnú poznámku v trezore. Plugin [[Unikátny tvorca poznámok|Unikátny tvorca poznámok]] musí byť povolený.

### Príklady

- `obsidian://unique?vault=my%20vault`
  Toto otvorí trezor `my vault` a vytvorí novú jedinečnú poznámku.
- - `obsidian://unique?vault=my%20vault&content=Hello%20World`
  Toto otvorí trezor `my vault` a vytvorí novú jedinečnú poznámku s obsahom `Hello World`.

### Parametre

- `vault` môže byť buď názov trezoru, alebo ID trezoru[^1]. Rovnaké ako pri akcii `open`.
- `paneType` (voliteľné) určuje, kde sa poznámka otvorí v používateľskom rozhraní. Rovnaké ako pri akcii `open`.
- `content` (voliteľné) obsah poznámky.
- `clipboard` (voliteľné) použitie obsahu schránky namiesto zadania `content`.
- `x-success` (voliteľné) pozri [[#Použitie parametrov x-callback-url]].

## Otvorenie vyhľadávania

Akcia `search` otvorí [[Hľadať]] v zadanom trezore a voliteľne vykoná vyhľadávanie.

### Príklady

- `obsidian://search?vault=my%20vault`
  Toto otvorí trezor `my vault` a otvorí [[Hľadať]].
- `obsidian://search?vault=my%20vault&query=Obsidian`
  Toto otvorí trezor `my vault`, otvorí [[Hľadať]] a vykoná vyhľadávanie výrazu `Obsidian`.

### Parametre

- `vault` môže byť buď názov trezoru, alebo ID trezoru[^1]. Rovnaké ako pri akcii `open`.
- `query` (voliteľné) hľadaný výraz na vyhľadanie.

## Otvorenie správcu trezorov

Akcia `choose-vault` otvorí [[Spravovať trezory|správcu trezorov]].

### Príklady

- `obsidian://choose-vault`

## Integrácia s Hook

Táto akcia Obsidian URI je určená na použitie s [Hook](https://hookproductivity.com/).

### Príklad

`obsidian://hook-get-address`

### Parametre

- `vault` (voliteľné) môže byť buď názov trezoru, alebo ID trezoru[^1]. Ak nie je zadaný, použije sa aktuálny alebo naposledy zaostrený trezor.
- `x-success` (voliteľné) pozri [[#Použitie parametrov x-callback-url]].
- `x-error` (voliteľné) pozri [[#Použitie parametrov x-callback-url]].

Ak je definovaný `x-success`, toto API ho použije ako x-callback-url. V opačnom prípade skopíruje Markdown odkaz aktuálne zaostrenej poznámky do schránky ako `obsidian://open` URL.

## Použitie parametrov x-callback-url

Niektoré koncové body akceptujú parametre x-callback-url `x-success` a `x-error`. Keď sú poskytnuté, Obsidian odovzdá nasledujúce do spätného volania `x-success`:

- `name` názov súboru bez prípony.
- `url` URI `obsidian://` pre tento súbor.
- `file` (iba desktop) URL `file://` pre tento súbor.

Napríklad, ak Obsidian prijme
`obsidian://.....x-success=myapp://x-callback-url`, odpoveď by bola `myapp://x-callback-url?name=...&url=obsidian%3A%2F%2Fopen...&file=file%3A%2F%2F...`

## Skrátené formáty

Okrem vyššie uvedených formátov sú k dispozícii aj dva ďalšie "skrátené" formáty na otváranie trezorov a súborov:

1. `obsidian://vault/my vault/my note` je ekvivalentné `obsidian://open?vault=my%20vault&file=my%20note`.
2. `obsidian:///absolute/path/to/my note` je ekvivalentné `obsidian://open?path=%2Fabsolute%2Fpath%2Fto%2Fmy%20note`.

## Riešenie problémov

### Registrácia Obsidian URI

V systémoch Windows a macOS by malo stačiť jednorazové spustenie aplikácie na registráciu protokolu Obsidian URI na vašom počítači.

V systéme Linux je to oveľa zložitejší proces:

1. Uistite sa, že ste vytvorili súbor `obsidian.desktop`. [Podrobnosti nájdete tu](https://developer.gnome.org/documentation/guidelines/maintainer/integrating.html#desktop-files).
2. Uistite sa, že váš desktop súbor špecifikuje pole `Exec` ako `Exec=executable %u`. Parameter `%u` sa používa na odovzdanie URI `obsidian://` do aplikácie.
3. Ak používate inštalátor AppImage, možno ho budete musieť rozbaliť pomocou `Obsidian-x.y.z.AppImage --appimage-extract`. Potom sa uistite, že direktíva `Exec` ukazuje na rozbalený spustiteľný súbor.


[^1]: ID trezoru je náhodný 16-znakový kód priradený trezoru, napríklad `ef6ca3e3b524d22f`. Toto ID je jedinečné pre každý priečinok na vašom počítači. ID nájdete otvorením prepínača trezorov a kliknutím na "Kopírovať ID trezora" v kontextovom menu pre požadovaný trezor.
