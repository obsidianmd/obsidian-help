---
permalink: uri
---
Obsidian URI je vlastní protokol URI podporovaný aplikací Obsidian, který umožňuje spouštět různé akce, jako je otevření poznámky nebo vytvoření poznámky. Obsidian URI umožňuje automatizaci a pracovní postupy napříč aplikacemi.

## Formát URI

Obsidian URI používají následující formát:

```
obsidian://action?param1=value&param2=value
```

Parametr `action` je akce, kterou chcete provést. Dostupné akce zahrnují:

- `open` pro otevření poznámky.
- `new` pro vytvoření nebo přidání do existující poznámky.
- `daily` pro vytvoření nebo otevření denní poznámky.
- `unique` pro vytvoření nové jedinečné poznámky.
- `search` pro otevření vyhledávání.
- `choose-vault` pro otevření správce trezorů.

> [!warning] Kódování
> Ujistěte se, že vaše hodnoty jsou správně kódovány v URI. Například znaky lomítka `/` musí být kódovány jako `%2F` a znaky mezer musí být kódovány jako `%20`.
> 
> To je obzvláště důležité, protože nesprávně kódovaný „vyhrazený" znak může narušit interpretaci URI. [Podrobnosti naleznete zde](https://en.wikipedia.org/wiki/Percent-encoding).

## Otevření poznámky

Akce `open` otevře trezor Obsidian nebo otevře soubor v tomto trezoru.

### Příklady

- `obsidian://open?vault=my%20vault`
  Toto otevře trezor `my vault`. Pokud je trezor již otevřen, zaměří se na okno.
- `obsidian://open?vault=ef6ca3e3b524d22f`
  Toto otevře trezor identifikovaný ID `ef6ca3e3b524d22f`.
- `obsidian://open?vault=my%20vault&file=my%20note`
  Toto otevře poznámku `my note.md` v trezoru `my vault`, za předpokladu, že soubor existuje.
- `obsidian://open?path=%2Fhome%2Fuser%2Fmy%20vault%2Fpath%2Fto%2Fmy%20note`
  Toto vyhledá jakýkoli trezor, který obsahuje cestu `/home/user/my vault/path/to/my note`. Poté se zbytek cesty předá parametru `file`. Například pokud trezor existuje na `/home/user/my vault`, pak by to bylo ekvivalentní parametru `file` nastavenému na `path/to/my note`.


> [!tip] Otevření nadpisu nebo bloku
> Se správným kódováním URI můžete přejít na nadpis nebo blok v rámci poznámky. `Note%23Heading` by přešel na nadpis nazvaný „Heading", zatímco `Note%23%5EBlock` by přešel na blok nazvaný „Block".

### Parametry

- `vault` může být buď název trezoru, nebo ID trezoru[^1].
- `file` může být buď název souboru, nebo cesta od kořene trezoru k určenému souboru. Pokud je přípona souboru `md`, příponu lze vynechat.
- `path` absolutní cesta v souborovém systému k souboru.
  - Použití tohoto parametru přepíše jak `vault`, tak `file`.
  - Aplikace vyhledá nejkonkrétnější trezor, který obsahuje zadanou cestu k souboru.
  - Poté zbytek cesty nahradí parametr `file`.
- `prepend` přidá na začátek souboru a pokusí se sloučit vlastnosti.
- `append` přidá na konec souboru a také se pokusí sloučit vlastnosti.
- `paneType` (volitelné) určuje, kde se poznámka otevře v uživatelském rozhraní.
  - pokud není přítomen, nahradí se naposledy aktivní karta.
  - `paneType=tab` otevře v nové kartě.
  - `paneType=split` otevře v nové skupině karet.
  - `paneType=window` otevře ve vyskakovacím okně (pouze desktop).

## Vytvoření poznámky

Akce `new` vytvoří novou poznámku v trezoru, volitelně s určitým obsahem.

### Příklady

- `obsidian://new?vault=my%20vault&name=my%20note`
  Toto otevře trezor `my vault` a vytvoří novou poznámku nazvanou `my note`.
- `obsidian://new?vault=my%20vault&file=path%2Fto%2Fmy%20note`
  Toto otevře trezor `my vault` a vytvoří novou poznámku na `path/to/my note`.

### Parametry

- `vault` může být buď název trezoru, nebo ID trezoru[^1]. Stejné jako u akce `open`.
- `name` název souboru, který se má vytvořit. Pokud je zadán, umístění souboru se zvolí na základě vašich nastavení „Výchozí umístění nové poznámky".
- `file` absolutní cesta v trezoru včetně názvu. Přepíše `name`, pokud je zadán.
- `path` globálně absolutní cesta. Funguje podobně jako volba `path` u akce `open`, která přepíše jak `vault`, tak `file`.
- `paneType` (volitelné) určuje, kde se poznámka otevře v uživatelském rozhraní. Stejné jako u akce `open`.
- `content` (volitelné) obsah poznámky.
- `clipboard` (volitelné) použití obsahu schránky namísto zadání `content`.
- `silent` (volitelné) zahrňte tento parametr, pokud nechcete novou poznámku otevřít.
- `append` (volitelné) zahrňte tento parametr pro přidání k existujícímu souboru, pokud existuje.
- `overwrite` (volitelné) přepíše existující soubor, pokud existuje, ale pouze pokud není nastaven `append`.
- `x-success` (volitelné) viz [[#Použití parametrů x-callback-url]].

## Vytvoření nebo otevření denní poznámky

Akce `daily` vytvoří nebo otevře vaši denní poznámku. Plugin [[Každodenní poznámky]] musí být zapnutý.

### Příklady

- `obsidian://daily?vault=my%20vault`
  Toto otevře trezor `my vault` a vytvoří nebo otevře denní poznámku.

### Parametry

Akce `daily` přijímá stejné parametry jako akce `new`.

## Jedinečná poznámka

Akce `unique` vytvoří novou jedinečnou poznámku v trezoru. Plugin [[Tvůrce jedinečných poznámek|Tvůrce jedinečných poznámek]] musí být zapnutý.

### Příklady

- `obsidian://unique?vault=my%20vault`
  Toto otevře trezor `my vault` a vytvoří novou jedinečnou poznámku.
- - `obsidian://unique?vault=my%20vault&content=Hello%20World`
  Toto otevře trezor `my vault` a vytvoří novou jedinečnou poznámku s obsahem `Hello World`.

### Parametry

- `vault` může být buď název trezoru, nebo ID trezoru[^1]. Stejné jako u akce `open`.
- `paneType` (volitelné) určuje, kde se poznámka otevře v uživatelském rozhraní. Stejné jako u akce `open`.
- `content` (volitelné) obsah poznámky.
- `clipboard` (volitelné) použití obsahu schránky namísto zadání `content`.
- `x-success` (volitelné) viz [[#Použití parametrů x-callback-url]].

## Otevření vyhledávání

Akce `search` otevře [[Hledat|Hledání]] v určeném trezoru a volitelně provede vyhledávání zadaného výrazu.

### Příklady

- `obsidian://search?vault=my%20vault`
  Toto otevře trezor `my vault` a otevře [[Hledat|Hledání]].
- `obsidian://search?vault=my%20vault&query=Obsidian`
  Toto otevře trezor `my vault`, otevře [[Hledat|Hledání]] a vyhledá výraz `Obsidian`.

### Parametry

- `vault` může být buď název trezoru, nebo ID trezoru[^1]. Stejné jako u akce `open`.
- `query` (volitelné) vyhledávací výraz k provedení.

## Otevření správce trezorů

Akce `choose-vault` otevře [[Spravovat trezory|správce trezorů]].

### Příklady

- `obsidian://choose-vault`

## Integrace s Hook

Tato akce Obsidian URI je určena pro použití s [Hook](https://hookproductivity.com/).

### Příklad

`obsidian://hook-get-address`

### Parametry

- `vault` (volitelné) může být buď název trezoru, nebo ID trezoru[^1]. Pokud není zadán, použije se aktuální nebo naposledy zaměřený trezor.
- `x-success` (volitelné) viz [[#Použití parametrů x-callback-url]].
- `x-error` (volitelné) viz [[#Použití parametrů x-callback-url]].

Pokud je definován `x-success`, toto API jej použije jako x-callback-url. V opačném případě zkopíruje Markdown odkaz na aktuálně zaměřenou poznámku do schránky jako URL `obsidian://open`.

## Použití parametrů x-callback-url

Některé koncové body přijímají parametry x-callback-url `x-success` a `x-error`. Když jsou poskytnuty, Obsidian předá následující do callbacku `x-success`:

- `name` název souboru bez přípony.
- `url` URI `obsidian://` pro tento soubor.
- `file` (pouze desktop) URL `file://` pro tento soubor.

Například pokud Obsidian obdrží
`obsidian://.....x-success=myapp://x-callback-url`, odpověď bude `myapp://x-callback-url?name=...&url=obsidian%3A%2F%2Fopen...&file=file%3A%2F%2F...`

## Zkrácené formáty

Kromě výše uvedených formátů jsou k dispozici dva další „zkrácené" formáty pro otevírání trezorů a souborů:

1. `obsidian://vault/my vault/my note` je ekvivalentní `obsidian://open?vault=my%20vault&file=my%20note`.
2. `obsidian:///absolute/path/to/my note` je ekvivalentní `obsidian://open?path=%2Fabsolute%2Fpath%2Fto%2Fmy%20note`.

## Řešení problémů

### Registrace Obsidian URI

Na Windows a macOS by mělo stačit jednou spustit aplikaci k registraci protokolu Obsidian URI na vašem počítači.

Na Linuxu je to mnohem složitější proces:

1. Ujistěte se, že jste vytvořili soubor `obsidian.desktop`. [Podrobnosti naleznete zde](https://developer.gnome.org/documentation/guidelines/maintainer/integrating.html#desktop-files).
2. Ujistěte se, že váš soubor desktop specifikuje pole `Exec` jako `Exec=executable %u`. Parametr `%u` se používá k předání URI `obsidian://` aplikaci.
3. Pokud používáte instalátor AppImage, možná jej budete muset rozbalit pomocí `Obsidian-x.y.z.AppImage --appimage-extract`. Poté se ujistěte, že direktiva `Exec` ukazuje na rozbalený spustitelný soubor.


[^1]: ID trezoru je náhodný 16znakový kód přiřazený trezoru, například `ef6ca3e3b524d22f`. Toto ID je jedinečné pro každou složku na vašem počítači. ID lze najít otevřením přepínače trezorů a kliknutím na „Kopírovat ID trezoru" v kontextové nabídce požadovaného trezoru.
