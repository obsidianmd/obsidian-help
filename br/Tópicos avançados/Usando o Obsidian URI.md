O obsidian suporta um protocolo URI customizado `obsidian://` que pode ser usado para ativar várias ações dentro do aplicativo. Isso é comumente usado nos aplicativos do macOS e de dispositivos móveis para automações e fluxos de trabalho multi-plataforma.

Se você tem o Obsidian instalado, esse link irá abrir o aplicativo em seu dispositivo: [Clique aqui](obsidian://open)

## Instalando o Obsidian URI

Para garantir que seu sistema operacional redirecione URIs `obsidian://` para o aplicativo do Obsidian, pode ser que você tenha que realizar alguns passos a mais.

- No Windows, executar o aplicativo uma vez deve ser o suficiente. Isto irá registar o manipulador de protocolo personalizado `obsidian://` no registo do Windows.
- No macOs, executar o aplicativo uma vez deve ser o suficiente, no entanto, seu aplicativo **deve** ser a versão 0.8.12 ou posterior do instladaor..
- No Linux, temos um processo mais complexo:
  - Primeiro, garanta que você criou um arquivo `obsidian.desktop`. [Clique aqui para mais detalhes](https://developer.gnome.org/documentation/guidelines/maintainer/integrating.html#desktop-files)
  - Garanta que seu arquivo desktop especifique  o campo `Exec` como `Exec=executable %u`. O `%u` é usado para passar a URI `obsidian://` para o aplicativo
  - Se você estiver usando o instalador AppImage, você talvez precise descompactá-lo usando `x.y.x.AppImage --appimage-extract`. Depois, tenha certeza que a diretiva `Exec` aponte para o executável descompactado.

## Usando URIs do Obsidian

As URIs do Obsidian são tipicamente neste formato:

```
obsidian://action?param1=value&param2=value
```

- O `action` geralmente é a ação que você quer que seja executada.

### Codificação

==Importante==

Garante que seus valores estão codificados em URI propriamente. Por exemplo, caracteres barra `/` devem ser codificadas como `%2F` e caracteres espaço devem ser codificados como `%20`.

Isso é especialmente importante porque um caractere "reservado" impropriamente codificado pode quebrar a interpretação da URI. [Clique aqui para mais detalhes](https://en.wikipedia.org/wiki/Percent-encoding)

### Ações disponíveis

#### Ação `open`

Descrição: Abre um cofre do Obsidian, e possivelmente abre um arquivo contido no cofre.

Parâmetros possíveis:

- `vault` pode tato ser o nome do cofre quanto o ID do cofre.
  - O nome do cofre é simplesmente o nome da pasta do cofre.
  - O ID do cofre é o código de 16 caracteres aleatórios designado ao cofre. Este ID é único por pasta do seu computador. Exemplo: `ef6ca3e3b524d22f`. Não existe uma forma fácil de encontrar esse ID até o momento, mas uma forma será disponibilizada futuramente na tela de troca de cofres. Atualmente, ele pode ser encontrado em `%appdata%/obsidian/obsidian.json` no Windows. No macOS, troque `%appdata%` por `~/Library/Application Support/`. No Linux, troque `%appdata%` por `~/.config/`.
- `file` pode tanto ser o nome de um arquivo quanto o caminho da raiz do cofre ao arquivos especificado.
  - Para resolver o arquivo alvo, o Obsidian usa o mesmo sistema de resolução de links de um regular `[[wikilink]]` contido no cofre.
  - Se a extensão do arquivo for `md`, a extensão pode ser omitida.
- `path` um caminho absoluto do sistema de arquivos .
  - Usar esse parâmetro vai sobrescrever tanto `vault` quanto `file`.
  - Isso causará com que o aplicativo busque pelo cofre mais específico que contém o caminho do arquivo especificado.
  - Então, o resto do caminho substitui o parâmetro `file`.

Exemplos:

- `obsidian://open?vault=my%20vault`
  Isso abre o cofre `my vault`. Se o cofre já estiver aberto, a janela será focada.

- `obsidian://open?vault=ef6ca3e3b524d22f`
  Isso abre o cofre identificado pelo ID `ef6ca3e3b524d22f`.

- `obsidian://open?vault=my%20vault&file=my%20note`
  Isso abre a anotação `my note` no cofre `my vault`, assumindo que `my note` existe e que o arquivo é `my note.md`.

- `obsidian://open?vault=my%20vault&file=my%20note.md`
  Isso também abre a anotação `my note` no cofre `my vault`.

- `obsidian://open?vault=my%20vault&file=path%2Fto%2Fmy%20note`
 Isso abre a anotação localizada em `path/to/my note` no cofre `my vault`.

- `obsidian://open?path=%2Fhome%2Fuser%2Fmy%20vault%2Fpath%2Fto%2Fmy%20note`
  Isso irá buscar por qualquer cofre que contenha o caminho `/home/user/my vault/path/to/my note`. Depois, o resto do caminho será passado ao parâmetro `file`. Por exemplo, se um cofre existe em `/home/user/my vault`, então isso seria equivalente ao parâmetro `file` configurado para `path/to/my note`.

- `obsidian://open?path=D%3A%5CDocuments%5CMy%20vault%5CMy%20note`
  Isso irá buscar por qualquer cofre que contenha o caminho `D:\Documents\My vault\My note`. Depois, o resto do caminho é passado ao parâmetro `file`. Por exemplo, se um cofre existe em `D:\Documents\My vault`, então isso seria equivalente ao prâmetro `file` configurado para `My note`.

#### Ação `search`

Descrição: Abre um painel de busca para um cofre, e, opcionalmente, executa uma busca.

Parâmetros possíveis:

- `vault` pode tanto ser o nome do cofre quanto seu ID. O mesmo que a ação `open`.
- `query` (opcional) A busca a ser feita.

Exemplos:

- `obsidian://search?vault=my%20vault`
  Isso abre o cofre `my vault`, e abre o painel de busca.

- `obsidian://search?vault=my%20vault&query=MOC`
  Isso abre o cofre `my vault`, abre o painel de busca, e busca por `MOC`.

#### Ação `new`

Descrição: Cria uma nova nota no cofre, opcionalmente com algum conteúdo.

Parâmetros possíveis:

- `vault` pode ser tanto o nome do cofre quanto seu ID. O mesmo que a ação `open`.
- `name` o nome do arquivo a ser criado. Se isso for especificado, a localização do arquivo será escolhida de acordo com suas preferências de "Local padrão para novas anotações".
- `file` um caminho absoluto do cofre, incluindo o nome. Sobrescreverá `name` se especificado.
- `path` um caminho global absoluto. Funciona de forma similar à opção `path` na ação `open`, que irá sobrescrever tanto `vault` quando `file`. 
- `content` (opcional) o conteúdo da anotação.
- `silent` (opcional) defina isso se você não quer abrir a nova anotação.
- `append` (opcional) adicionará a um arquivo pré-existente se este existe
- `overwrite` (opcional) sobrescreve um arquivo pré-existente, mas apenas se `append` não for definido.
- `x-success` (opcional) veja [[#x-callback-url]].

Exemplos:

- `obsidian://new?vault=my%20vault&name=my%20note`
  Isso abre o cofre `my vault`, e cria uma nova anotação chamada `my note`.
- `obsidian://new?vault=my%20vault&path=path%2Fto%2Fmy%20note`
  Isso cria um cofre `my vault`, e cria uma nova anotação à `path/to/my note`.

#### Ação `hook-get-address`

Descrição: Ponto final para o uso com [Hook](https://hookproductivity.com/). Uso: `obsidian://hook-get-address`

Se `x-success` for definido, essa API irá usá-lo como o x-callback-url. Caso contrário, irá copiar um link Markdown da anotação focada no momento para a área de transferência, como uma URL `obsidian://open`.

Parâmetros possíveis:

- `vault` (opcional) pode tanto ser o nome do cofre quando o seu ID. Se não definido, o cofre atual ou o último a ser focado será usado.
- `x-success` (opcional) veja [[#x-callback-url]].
- `x-error` (opcional) veja [[#x-callback-url]].

## x-callback-url

Disponível desde v0.14.3.

Alguns pontos finais aceitarão os parâmetros `x-success` e `x-error` do x-callback-url. Quando for definido, o Obsidian irá prover o seguinte ao callback `x-success`:

- `name` o nome do arquivo, sem sua extensão.
- `url` a URI `obsidian://` para esse arquivo.
- `file` (apenas desktop) a URL `file://` para esse arquivo.

Por exemplo, se recebermos
`obsidian://.....x-success=myapp://x-callback-url`
A resposta pode ser
`myapp://x-callback-url?name=...&url=obsidian%3A%2F%2Fopen...&file=file%3A%2F%2F...`

## Formatos de Shorthand

Em adição aos formatos acima, existem mais dois formatos "shorthand" disponíveis para abrir cofres e arquivos:

- `obsidian://vault/my vault/my note` é equivalente a `obsidian://open?vault=my%20vault&file=my%20note`
- `obsidian:///absolute/path/to/my note` é equivalente a `obsidian://open?path=%2Fabsolute%2Fpath%2Fto%2Fmy%20note`
