---
permalink: uri
---
URI do Obsidian é um protocolo URI personalizado suportado pelo Obsidian que permite acionar várias ações, como abrir uma nota ou criar uma nota. O URI do Obsidian possibilita automação e fluxos de trabalho entre aplicativos.

## Formato de URI

Os URIs do Obsidian usam o seguinte formato:

```
obsidian://action?param1=value&param2=value
```

O parâmetro `action` é a ação que você deseja realizar. As ações disponíveis incluem:

- `open` para abrir uma nota.
- `new` para criar ou adicionar a uma nota existente.
- `daily` para criar ou abrir sua nota diária.
- `unique` para criar uma nova nota única.
- `search` para abrir uma pesquisa.
- `choose-vault` para abrir o gerenciador de cofres.

> [!warning] Codificação
> Certifique-se de que seus valores estejam devidamente codificados em URI. Por exemplo, caracteres de barra `/` devem ser codificados como `%2F` e caracteres de espaço devem ser codificados como `%20`.
> 
 Isso é especialmente importante porque um caractere "reservado" codificado incorretamente pode comprometer a interpretação do URI. [Veja aqui para detalhes](https://en.wikipedia.org/wiki/Percent-encoding).

## Abrir nota

A ação `open` abre um cofre do Obsidian, ou abre um arquivo dentro desse cofre.

### Exemplos

- `obsidian://open?vault=my%20vault`
  Isso abre o cofre `my vault`. Se o cofre já estiver aberto, foca na janela.
- `obsidian://open?vault=ef6ca3e3b524d22f`
  Isso abre o cofre identificado pela ID `ef6ca3e3b524d22f`.
- `obsidian://open?vault=my%20vault&file=my%20note`
  Isso abre a nota `my note.md` no cofre `my vault`, assumindo que o arquivo existe.
- `obsidian://open?path=%2Fhome%2Fuser%2Fmy%20vault%2Fpath%2Fto%2Fmy%20note`
  Isso procurará qualquer cofre que contenha o caminho `/home/user/my vault/path/to/my note`. Em seguida, o restante do caminho é passado para o parâmetro `file`. Por exemplo, se um cofre existir em `/home/user/my vault`, então isso seria equivalente ao parâmetro `file` definido como `path/to/my note`.


> [!tip] Abrir um cabeçalho ou bloco
> Com a codificação URI adequada, você pode navegar até um cabeçalho ou bloco dentro de uma nota. `Note%23Heading` navegaria até o cabeçalho chamado "Heading", enquanto `Note%23%5EBlock` navegaria até o bloco chamado "Block".

### Parâmetros

- `vault` pode ser o nome do cofre ou a ID do cofre[^1].
- `file` pode ser um nome de arquivo ou um caminho da raiz do cofre até o arquivo especificado. Se a extensão do arquivo for `md`, a extensão pode ser omitida.
- `path` um caminho absoluto do sistema de arquivos para um arquivo.
  - Usar este parâmetro substituirá tanto `vault` quanto `file`.
  - Isso fará com que o aplicativo procure o cofre mais específico que contém o caminho de arquivo especificado.
  - Em seguida, o restante do caminho substitui o parâmetro `file`.
- `prepend` adicionará ao topo do arquivo e tentará mesclar propriedades.
- `append` adicionará ao final do arquivo e também tentará mesclar propriedades.
- `paneType` (opcional) determina onde a nota será aberta na interface.
  - se não estiver presente, a última aba ativa é substituída.
  - `paneType=tab` abre em uma nova aba.
  - `paneType=split` abre em um novo grupo de abas.
  - `paneType=window` abre em uma janela destacável (apenas Desktop).

## Criar nota

A ação `new` cria uma nova nota no cofre, opcionalmente com algum conteúdo.

### Exemplos

- `obsidian://new?vault=my%20vault&name=my%20note`
  Isso abre o cofre `my vault` e cria uma nova nota chamada `my note`.
- `obsidian://new?vault=my%20vault&file=path%2Fto%2Fmy%20note`
  Isso abre o cofre `my vault` e cria uma nova nota em `path/to/my note`.

### Parâmetros

- `vault` pode ser o nome do cofre ou a ID do cofre[^1]. Igual à ação `open`.
- `name` o nome do arquivo a ser criado. Se especificado, a localização do arquivo será escolhida com base nas suas preferências de "Local padrão para novas notas".
- `file` um caminho absoluto do cofre, incluindo o nome. Substituirá `name` se especificado.
- `path` um caminho globalmente absoluto. Funciona de forma semelhante à opção `path` na ação `open`, que substituirá tanto `vault` quanto `file`.
- `paneType` (opcional) determina onde a nota será aberta na interface. Igual à ação `open`.
- `content` (opcional) o conteúdo da nota.
- `clipboard` (opcional) usa o conteúdo da área de transferência em vez de especificar `content`.
- `silent` (opcional) inclua este parâmetro se você não quiser abrir a nova nota.
- `append` (opcional) inclua este parâmetro para anexar a um arquivo existente, se houver um.
- `overwrite` (opcional) sobrescreve um arquivo existente, se houver um, mas apenas se `append` não estiver definido.
- `x-success` (opcional) veja [[#Usar parâmetros x-callback-url]].

## Criar ou abrir nota diária

A ação `daily` cria ou abre sua nota diária. O plugin [[Notas diárias]] deve estar ativado.

### Exemplos

- `obsidian://daily?vault=my%20vault`
  Isso abre o cofre `my vault` e cria ou abre a nota diária.

### Parâmetros

A ação `daily` aceita os mesmos parâmetros que a ação `new`.

## Nota Única

A ação `unique` cria uma nova nota única no cofre. O plugin [[Plugins/Criador de nota única|Criador de nota única]] deve estar ativado.

### Exemplos

- `obsidian://unique?vault=my%20vault`
  Isso abre o cofre `my vault` e cria uma nova nota única.
- - `obsidian://unique?vault=my%20vault&content=Hello%20World`
  Isso abre o cofre `my vault` e cria uma nova nota única com o conteúdo `Hello World`.

### Parâmetros

- `vault` pode ser o nome do cofre ou a ID do cofre[^1]. Igual à ação `open`.
- `paneType` (opcional) determina onde a nota será aberta na interface. Igual à ação `open`.
- `content` (opcional) o conteúdo da nota.
- `clipboard` (opcional) usa o conteúdo da área de transferência em vez de especificar `content`.
- `x-success` (opcional) veja [[#Usar parâmetros x-callback-url]].

## Abrir pesquisa

A ação `search` abre a [[Pesquisa]] no cofre especificado e, opcionalmente, realiza um termo de pesquisa.

### Exemplos

- `obsidian://search?vault=my%20vault`
  Isso abre o cofre `my vault` e abre a [[Pesquisa]].
- `obsidian://search?vault=my%20vault&query=Obsidian`
  Isso abre o cofre `my vault`, abre a [[Pesquisa]] e realiza uma pesquisa por `Obsidian`.

### Parâmetros

- `vault` pode ser o nome do cofre ou a ID do cofre[^1]. Igual à ação `open`.
- `query` (opcional) o termo de pesquisa a ser realizado.

## Abrir Gerenciador de Cofres

A ação `choose-vault` abre o [[Gerenciar cofres|gerenciador de cofres]].

### Exemplos

- `obsidian://choose-vault`

## Integrar com Hook

Esta ação de URI do Obsidian é para ser usada com o [Hook](https://hookproductivity.com/).

### Exemplo

`obsidian://hook-get-address`

### Parâmetros

- `vault` (opcional) pode ser o nome do cofre ou a ID do cofre[^1]. Se não fornecido, o cofre atual ou o último cofre focado será usado.
- `x-success` (opcional) veja [[#Usar parâmetros x-callback-url]].
- `x-error` (opcional) veja [[#Usar parâmetros x-callback-url]].

Se `x-success` estiver definido, esta API o usará como x-callback-url. Caso contrário, copiará um link Markdown da nota focada atual para a área de transferência, como uma URL `obsidian://open`.

## Usar parâmetros x-callback-url

Alguns endpoints aceitam os parâmetros x-callback-url `x-success` e `x-error`. Quando fornecido, o Obsidian fornecerá o seguinte ao callback `x-success`:

- `name` o nome do arquivo, sem a extensão do arquivo.
- `url` o URI `obsidian://` para este arquivo.
- `file` (apenas desktop) a URL `file://` para este arquivo.

Por exemplo, se o Obsidian receber
`obsidian://.....x-success=myapp://x-callback-url`, a resposta seria `myapp://x-callback-url?name=...&url=obsidian%3A%2F%2Fopen...&file=file%3A%2F%2F...`

## Formatos abreviados

Além dos formatos acima, existem mais dois formatos "abreviados" disponíveis para abrir cofres e arquivos:

1. `obsidian://vault/my vault/my note` é equivalente a `obsidian://open?vault=my%20vault&file=my%20note`.
2. `obsidian:///absolute/path/to/my note` é equivalente a `obsidian://open?path=%2Fabsolute%2Fpath%2Fto%2Fmy%20note`.

## Solução de problemas

### Registrar URI do Obsidian

No Windows e macOS, executar o aplicativo uma vez deve ser suficiente para registrar o protocolo URI do Obsidian em seu computador.

No Linux, é um processo muito mais complexo:

1. Certifique-se de criar um arquivo `obsidian.desktop`. [Veja aqui para detalhes](https://developer.gnome.org/documentation/guidelines/maintainer/integrating.html#desktop-files).
2. Certifique-se de que seu arquivo desktop especifique o campo `Exec` como `Exec=executable %u`. O `%u` é usado para passar os URIs `obsidian://` para o aplicativo.
3. Se você estiver usando o instalador AppImage, pode ser necessário descompactá-lo usando `Obsidian-x.y.z.AppImage --appimage-extract`. Em seguida, certifique-se de que a diretiva `Exec` aponte para o executável descompactado.


[^1]: A ID do cofre é o código aleatório de 16 caracteres atribuído ao cofre, por exemplo `ef6ca3e3b524d22f`. Esta ID é única por pasta em seu computador. A ID pode ser encontrada abrindo o alternador de cofres e clicando em "Copiar a ID do Cofre" no menu de contexto do cofre desejado.
