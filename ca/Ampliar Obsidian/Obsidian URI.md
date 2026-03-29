---
permalink: uri
---
L'URI d'Obsidian és un protocol URI personalitzat compatible amb Obsidian que et permet activar diverses accions, com ara obrir una nota o crear-ne una. L'URI d'Obsidian permet l'automatització i fluxos de treball entre aplicacions.

## Format URI

Els URIs d'Obsidian utilitzen el format següent:

```
obsidian://action?param1=value&param2=value
```

El paràmetre `action` és l'acció que vols realitzar. Les accions disponibles inclouen:

- `open` per obrir una nota.
- `new` per crear o afegir a una nota existent.
- `daily` per crear o obrir la teva nota diària.
- `unique` per crear una nova nota única.
- `search` per obrir una cerca.
- `choose-vault` per obrir el gestor de cambres fortes.

> [!warning] Codificació
> Assegura't que els teus valors estiguin correctament codificats per URI. Per exemple, els caràcters de barra inclinada `/` s'han de codificar com `%2F` i els caràcters d'espai s'han de codificar com `%20`.
> 
> Això és especialment important perquè un caràcter "reservat" mal codificat pot trencar la interpretació de l'URI. [Consulta aquí per a més detalls](https://en.wikipedia.org/wiki/Percent-encoding).

## Obrir nota

L'acció `open` obre una cambra forta d'Obsidian, o obre un fitxer dins d'aquesta cambra forta.

### Exemples

- `obsidian://open?vault=my%20vault`
  Això obre la cambra forta `my vault`. Si la cambra forta ja està oberta, enfoca la finestra.
- `obsidian://open?vault=ef6ca3e3b524d22f`
  Això obre la cambra forta identificada per l'ID `ef6ca3e3b524d22f`.
- `obsidian://open?vault=my%20vault&file=my%20note`
  Això obre la nota `my note.md` a la cambra forta `my vault`, assumint que el fitxer existeix.
- `obsidian://open?path=%2Fhome%2Fuser%2Fmy%20vault%2Fpath%2Fto%2Fmy%20note`
  Això cercarà qualsevol cambra forta que contingui la ruta `/home/user/my vault/path/to/my note`. Llavors, la resta de la ruta es passa al paràmetre `file`. Per exemple, si existeix una cambra forta a `/home/user/my vault`, llavors això seria equivalent al paràmetre `file` establert com `path/to/my note`.


> [!tip] Obrir un encapçalament o bloc
> Amb la codificació URI adequada, pots navegar a un encapçalament o bloc dins d'una nota. `Note%23Heading` navegaria a l'encapçalament anomenat "Heading", mentre que `Note%23%5EBlock` navegaria al bloc anomenat "Block".

### Paràmetres

- `vault` pot ser el nom de la cambra forta o l'ID de la cambra forta[^1].
- `file` pot ser un nom de fitxer, o una ruta des de l'arrel de la cambra forta fins al fitxer especificat. Si l'extensió del fitxer és `md`, l'extensió es pot ometre.
- `path` una ruta absoluta del sistema de fitxers a un fitxer.
  - L'ús d'aquest paràmetre anul·larà tant `vault` com `file`.
  - Això farà que l'aplicació cerqui la cambra forta més específica que contingui la ruta del fitxer especificada.
  - Llavors la resta de la ruta reemplaça el paràmetre `file`.
- `prepend` afegirà al principi del fitxer i intentarà fusionar propietats.
- `append` afegirà al final del fitxer i també intentarà fusionar propietats.
- `paneType` (opcional) determina on s'obrirà la nota a la interfície.
  - si no és present, es reemplaça la darrera pestanya activa.
  - `paneType=tab` obre en una pestanya nova.
  - `paneType=split` obre en un grup de pestanyes nou.
  - `paneType=window` obre en una finestra emergent (només escriptori).

## Crear nota

L'acció `new` crea una nota nova a la cambra forta, opcionalment amb contingut.

### Exemples

- `obsidian://new?vault=my%20vault&name=my%20note`
  Això obre la cambra forta `my vault` i crea una nota nova anomenada `my note`.
- `obsidian://new?vault=my%20vault&file=path%2Fto%2Fmy%20note`
  Això obre la cambra forta `my vault` i crea una nota nova a `path/to/my note`.

### Paràmetres

- `vault` pot ser el nom de la cambra forta o l'ID de la cambra forta[^1]. Igual que l'acció `open`.
- `name` el nom del fitxer a crear. Si s'especifica, la ubicació del fitxer es triarà segons les preferències de "Ubicació predeterminada de les notes noves".
- `file` una ruta absoluta de la cambra forta, incloent el nom. Anul·larà `name` si s'especifica.
- `path` una ruta globalment absoluta. Funciona de manera similar a l'opció `path` de l'acció `open`, que anul·larà tant `vault` com `file`.
- `paneType` (opcional) determina on s'obrirà la nota a la interfície. Igual que l'acció `open`.
- `content` (opcional) el contingut de la nota.
- `clipboard` (opcional) ús del contingut del porta-retalls en lloc d'especificar `content`.
- `silent` (opcional) inclou aquest paràmetre si no vols obrir la nota nova.
- `append` (opcional) inclou aquest paràmetre per afegir a un fitxer existent si n'hi ha un.
- `overwrite` (opcional) sobreescriu un fitxer existent si n'hi ha un, però només si `append` no està establert.
- `x-success` (opcional) consulta [[#Ús de paràmetres x-callback-url]].

## Crear o obrir nota diària

L'acció `daily` crea o obre la teva nota diària. El connector [[Notes diàries]] ha d'estar activat.

### Exemples

- `obsidian://daily?vault=my%20vault`
  Això obre la cambra forta `my vault` i crea o obre la nota diària.

### Paràmetres

L'acció `daily` accepta els mateixos paràmetres que l'acció `new`.

## Nota única

L'acció `unique` crea una nova nota única a la cambra forta. El connector [[Creador de notes úniques|Creador de notes úniques]] ha d'estar activat.

### Exemples

- `obsidian://unique?vault=my%20vault`
  Això obre la cambra forta `my vault` i crea una nova nota única.
- - `obsidian://unique?vault=my%20vault&content=Hello%20World`
  Això obre la cambra forta `my vault` i crea una nova nota única amb el contingut `Hello World`.

### Paràmetres

- `vault` pot ser el nom de la cambra forta o l'ID de la cambra forta[^1]. Igual que l'acció `open`.
- `paneType` (opcional) determina on s'obrirà la nota a la interfície. Igual que l'acció `open`.
- `content` (opcional) el contingut de la nota.
- `clipboard` (opcional) ús del contingut del porta-retalls en lloc d'especificar `content`.
- `x-success` (opcional) consulta [[#Ús de paràmetres x-callback-url]].

## Obrir cerca

L'acció `search` obre la [[Cerca]] a la cambra forta especificada, i opcionalment realitza un terme de cerca.

### Exemples

- `obsidian://search?vault=my%20vault`
  Això obre la cambra forta `my vault` i obre la [[Cerca]].
- `obsidian://search?vault=my%20vault&query=Obsidian`
  Això obre la cambra forta `my vault`, obre la [[Cerca]] i realitza una cerca per `Obsidian`.

### Paràmetres

- `vault` pot ser el nom de la cambra forta o l'ID de la cambra forta[^1]. Igual que l'acció `open`.
- `query` (opcional) el terme de cerca a realitzar.

## Obrir el gestor de cambres fortes

L'acció `choose-vault` obre el [[Gestiona les cambres fortes|gestor de cambres fortes]].

### Exemples

- `obsidian://choose-vault`

## Integrar amb Hook

Aquesta acció URI d'Obsidian està dissenyada per ser utilitzada amb [Hook](https://hookproductivity.com/).

### Exemple

`obsidian://hook-get-address`

### Paràmetres

- `vault` (opcional) pot ser el nom de la cambra forta o l'ID de la cambra forta[^1]. Si no es proporciona, s'utilitzarà la cambra forta actual o la darrera amb focus.
- `x-success` (opcional) consulta [[#Ús de paràmetres x-callback-url]].
- `x-error` (opcional) consulta [[#Ús de paràmetres x-callback-url]].

Si `x-success` està definit, aquesta API l'utilitzarà com a x-callback-url. En cas contrari, copiarà un enllaç Markdown de la nota amb focus actual al porta-retalls, com a URL `obsidian://open`.

## Ús de paràmetres x-callback-url

Alguns endpoints accepten els paràmetres x-callback-url `x-success` i `x-error`. Quan es proporcionen, Obsidian oferirà el següent al callback `x-success`:

- `name` el nom del fitxer, sense l'extensió del fitxer.
- `url` l'URI `obsidian://` per a aquest fitxer.
- `file` (només escriptori) l'URL `file://` per a aquest fitxer.

Per exemple, si Obsidian rep
`obsidian://.....x-success=myapp://x-callback-url`, la resposta seria `myapp://x-callback-url?name=...&url=obsidian%3A%2F%2Fopen...&file=file%3A%2F%2F...`

## Formats abreujats

A més dels formats anteriors, hi ha dos formats "abreujats" més disponibles per obrir cambres fortes i fitxers:

1. `obsidian://vault/my vault/my note` és equivalent a `obsidian://open?vault=my%20vault&file=my%20note`.
2. `obsidian:///absolute/path/to/my note` és equivalent a `obsidian://open?path=%2Fabsolute%2Fpath%2Fto%2Fmy%20note`.

## Resolució de problemes

### Registrar l'URI d'Obsidian

A Windows i macOS, executar l'aplicació una vegada hauria de ser suficient per registrar el protocol URI d'Obsidian al teu ordinador.

A Linux, és un procés molt més complex:

1. Assegura't de crear un fitxer `obsidian.desktop`. [Consulta aquí per a més detalls](https://developer.gnome.org/documentation/guidelines/maintainer/integrating.html#desktop-files).
2. Assegura't que el teu fitxer desktop especifiqui el camp `Exec` com `Exec=executable %u`. El `%u` s'utilitza per passar els URIs `obsidian://` a l'aplicació.
3. Si estàs utilitzant l'instal·lador AppImage, pot ser que hagis de desempaquetar-lo amb `Obsidian-x.y.z.AppImage --appimage-extract`. Després assegura't que la directiva `Exec` apunti a l'executable desempaquetat.


[^1]: L'ID de la cambra forta és el codi aleatori de 16 caràcters assignat a la cambra forta, per exemple `ef6ca3e3b524d22f`. Aquest ID és únic per carpeta al teu ordinador. L'ID es pot trobar obrint el commutador de cambres fortes i fent clic a "Copia la ID de l'arca" al menú contextual de la cambra forta desitjada.
