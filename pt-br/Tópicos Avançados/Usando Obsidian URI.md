O Obsidian oferece suporte a um protocolo de URI personalizado `obsidian://`, que pode ser usado para acionar várias ações no aplicativo. Isso é comumente usado em macOS e aplicativos móveis para automação e fluxos de trabalho entre aplicativos.

Se você tiver o Obsidian instalado, este link abrirá o aplicativo no seu dispositivo: [Clique aqui](obsidian://open)

## Instalando Obsidian URI

Para garantir que seu sistema operacional redirecione URIs `obsidian://` para o aplicativo Obsidian, pode haver etapas adicionais que você precisa executar.

- No Windows, executar o aplicativo uma vez deve ser suficiente. Isso registrará o manipulador de protocolo personalizado `obsidian://` no registro do Windows.
- No macOS, executar o aplicativo uma vez deve ser suficiente, no entanto, seu aplicativo **deve** ser instalador versão 0.8.12 ou posterior.
- No Linux, há um processo muito mais complicado:
   - Primeiro, certifique-se de criar um arquivo `obsidian.desktop`. [Veja aqui para detalhes](https://developer.gnome.org/documentation/guidelines/maintainer/integrating.html#desktop-files)
   - Certifique-se de que seu arquivo de área de trabalho especifique o campo `Exec` como `Exec=executable %u`. O `%u` é usado para passar os URIs `obsidian://` para o aplicativo.
   - Se você estiver usando o instalador AppImage, talvez seja necessário descompactá-lo usando `Obsidian-x.y.z.AppImage --appimage-extract`. Em seguida, certifique-se de que a diretiva `Exec` aponta para o executável descompactado.

## Usando URIs Obsidian

Obsidian URIs são tipicamente neste formato:

```
obsidian://action?param1=value&param2=value
```

- A `ação` geralmente é a ação que você gostaria de realizar.

### Codificação

==Importante==

Assegure-se de que seus valores estejam devidamente codificados em URI. Por exemplo, os caracteres de barra `/` devem ser codificados como `%2F` e os caracteres de espaço devem ser codificados como `%20`.

Isso é especialmente importante porque um caractere "reservado" codificado incorretamente pode interromper a interpretação do URI. [Veja aqui para mais detalhes](https://en.wikipedia.org/wiki/Percent-encoding)

### Ações disponíveis

#### Ação `abrir`

Descrição: Abre um cofre de obsidiana e possivelmente abre um arquivo dentro desse cofre.

Parâmetros possíveis:

- `cofre` pode ser o nome do cofre ou o ID do cofre.
   - O nome do cofre é simplesmente o nome da pasta do cofre.
   - A ID do cofre é o código aleatório de 16 caracteres atribuído ao cofre. Esse ID é exclusivo por pasta em seu computador. Exemplo: `ef6ca3e3b524d22f`. Ainda não há uma maneira fácil de encontrar esse ID, um será oferecido posteriormente no alternador de cofre. Atualmente pode ser encontrado em `%appdata%/obsidian/obsidian.json` para Windows. Para macOS, substitua `%appdata%` por `~/Library/Application Support/`. Para Linux, substitua `%appdata%` por `~/.config/`.
- `arquivo` pode ser um nome de arquivo ou um caminho da raiz do cofre para o arquivo especificado.
   - Para resolver o arquivo de destino, a Obsidian usa o mesmo sistema de resolução de link que um `[[wikilink]]` normal dentro do cofre.
   - Se a extensão do arquivo for `md`, a extensão pode ser omitida.
- `path` um caminho absoluto do sistema de arquivos para um arquivo.
   - O uso deste parâmetro substituirá `cofre` e `arquivo`.
   - Isso fará com que o aplicativo procure o cofre mais específico que contém o caminho de arquivo especificado.
   - Em seguida, o restante do caminho substitui o parâmetro `arquivo`.

Exemplos:

- `obsidian://open?vault=my%20vault`
   Isso abre o cofre `meu cofre`. Se o cofre já estiver aberto, concentre-se na janela.

- `obsidiana://open?vault=ef6ca3e3b524d22f`
   Isso abre o cofre identificado pelo ID `ef6ca3e3b524d22f`.

- `obsidian://open?vault=my%20vault&file=my%20note`
   Isso abre a nota `minha nota` no cofre `meu cofre`, assumindo que `minha nota` existe e o arquivo é `minha nota.md`.

- `obsidian://open?vault=my%20vault&file=my%20note.md`
   Isso também abre a nota `minha nota` no cofre `meu cofre`.

- `obsidian://open?vault=my%20vault&file=path%2Fto%2Fmy%20note`
   Isso abre a nota localizada em `caminho/para/minha nota` no cofre `meu cofre`.

- `obsidian://open?path=%2Fhome%2Fuser%2Fmy%20vault%2Fpath%2Fto%2Fmy%20note`
   Isso procurará qualquer vault que contenha o caminho `/home/user/my vault/path/to/my note`. Em seguida, o restante do caminho é passado para o parâmetro `arquivo`. Por exemplo, se existe um cofre em `/home/user/my vault`, isso seria equivalente ao parâmetro `file` definido como `path/to/my note`.

- `obsidian://open?path=D%3A%5CDocuments%5CMy%20vault%5CMy%20note`
   Isso procurará qualquer cofre que contenha o caminho `D:\Documentos\Meu cofre\Minha nota`. Em seguida, o restante do caminho é passado para o parâmetro `arquivo`. Por exemplo, se existir um cofre em `D:\Documentos\Meu cofre`, isso seria equivalente ao parâmetro `arquivo` definido como `Minha nota`.

#### Ação `pesquisar`

Descrição: abre o painel de pesquisa de um cofre e, opcionalmente, executa uma consulta de pesquisa.

Parâmetros possíveis:

- `cofre` pode ser o nome do cofre ou o ID do cofre. Igual à ação 'abrir'.
- `query` (opcional) A consulta de pesquisa a ser executada.

Exemplos:

- `obsidian://search?vault=my%20vault`
   Isso abre o cofre `meu cofre` e abre o painel de pesquisa.

- `obsidian://search?vault=my%20vault&query=MOC`
   Isso abre o cofre `meu cofre`, abre