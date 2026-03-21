---
permalink: cli
description: Qualquer coisa que você pode fazer no Obsidian pode ser feita pela linha de comando.
---
O Obsidian CLI é uma interface de linha de comando que permite controlar o Obsidian a partir do seu terminal para scripts, automação e integração com ferramentas externas.

Qualquer coisa que você pode fazer no Obsidian, pode fazer pela linha de comando. O Obsidian CLI inclui até [[#Comandos para desenvolvedores|comandos para desenvolvedores]] para acessar ferramentas de desenvolvimento, inspecionar elementos, tirar capturas de tela, recarregar plugins e mais.

![[obsidian-cli.mp4#interface]]

> [!warning] Requer o instalador do Obsidian 1.12
> Usar o CLI requer o instalador do Obsidian 1.12. Consulte o [[Atualizar o Obsidian#Atualizações do instalador|guia de atualização da versão do instalador]].

## Instalar o Obsidian CLI

Atualize para a versão mais recente do [[Atualizar o Obsidian|instalador do Obsidian]] (1.11.7) e para a [[Versões de acesso antecipado|versão de acesso antecipado]] mais recente (1.12.x).

Ative o Obsidian CLI no Obsidian:

1. Vá para **Configurações** → **Geral**.
2. Ative a **Interface de linha de comando**.
3. Siga o prompt para registrar o Obsidian CLI.

Se encontrar problemas ao instalar o Obsidian CLI, consulte [[#Solução de problemas]].

## Primeiros passos

O Obsidian CLI suporta tanto comandos individuais quanto uma interface de terminal (TUI) com ajuda interativa e autocompletar.

> [!info] O aplicativo Obsidian deve estar em execução
> O Obsidian CLI requer que o aplicativo Obsidian esteja em execução. Se o Obsidian não estiver em execução, o primeiro comando que você executar iniciará o Obsidian.
>
> Quer sincronizar sem o aplicativo desktop? Consulte [[Sync sem interface|Obsidian Headless]].

### Executar um comando

Execute um comando individual sem abrir a TUI:

```shell
# Executar o comando de ajuda
obsidian help
```

### Usar a interface de terminal

Use a TUI digitando `obsidian`. Os comandos subsequentes podem ser inseridos sem `obsidian`.

```shell
# Abrir a TUI, depois executar ajuda
obsidian
help
```

A TUI suporta autocompletar, histórico de comandos e busca reversa. Use `Ctrl+R` para pesquisar no histórico de comandos. Consulte [[#Atalhos de teclado]] para todos os atalhos disponíveis.

## Exemplos

Aqui estão alguns exemplos do que o Obsidian CLI pode fazer.

### Uso cotidiano

```shell
# Abrir a nota diária de hoje
obsidian daily

# Adicionar uma tarefa à sua nota diária
obsidian daily:append content="- [ ] Comprar mantimentos"

# Pesquisar no seu cofre
obsidian search query="notas de reunião"

# Ler o arquivo ativo
obsidian read

# Listar todas as tarefas da sua nota diária
obsidian tasks daily

# Criar uma nova nota a partir de um modelo
obsidian create name="Viagem a Paris" template=Viagem

# Listar todas as etiquetas no seu cofre com contagens
obsidian tags counts

# Comparar duas versões de um arquivo
obsidian diff file=README from=1 to=3
```

### Para desenvolvedores

Muitos [[#Comandos para desenvolvedores]] estão disponíveis para desenvolvimento de plugins e temas. Esses comandos permitem que ferramentas de codificação agêntica testem e depurem automaticamente.

```shell
# Abrir ferramentas de desenvolvimento
obsidian devtools

# Recarregar um plugin da comunidade que você está desenvolvendo
obsidian plugin:reload id=my-plugin

# Tirar uma captura de tela do aplicativo
obsidian dev:screenshot path=screenshot.png

# Executar JavaScript no console do aplicativo
obsidian eval code="app.vault.getFiles().length"
```

## Como fazer

### Usar parâmetros e flags

Os comandos podem usar **parâmetros** e **flags**. A maioria dos comandos não requer nenhum parâmetro ou flag. Parâmetros obrigatórios são marcados como `required`. Por exemplo:

```shell
# Criar uma nova nota usando o nome padrão "Sem título"
obsidian create
```

Um **parâmetro** recebe um valor, escrito como `parâmetro=valor`. Se o valor tiver espaços, coloque-o entre aspas:

```shell
# Criar uma nova nota chamada "Nota" com conteúdo "Olá mundo"
obsidian create name=Nota content="Olá mundo"
```

Uma **flag** é um interruptor booleano sem valor. Inclua-a para ativá-la, por exemplo `open` e `overwrite` são flags:

```shell
# Criar uma nota e abri-la
obsidian create name=Nota content="Olá" open overwrite
```

Para conteúdo multilinha, use `\n` para nova linha. Use `\t` para tabulação.

```bash
obsidian create name=Nota content="# Título\n\nTexto do corpo"
```

### Selecionar um cofre

Se o diretório de trabalho atual do seu terminal for uma pasta de cofre, esse cofre será usado por padrão. Caso contrário, o cofre ativo no momento será usado.

Use `vault=<nome>` ou `vault=<id>` para selecionar um cofre específico. Isso deve ser o primeiro parâmetro antes do seu comando:

```shell
obsidian vault=Notas daily
obsidian vault="Meu Cofre" search query="teste"
```

Na TUI, use `vault:open <nome>` ou `<id>` para alternar para um cofre diferente.

### Selecionar um arquivo

Muitos comandos aceitam parâmetros `file` e `path` para selecionar um arquivo específico. Se nenhum for fornecido, o comando usa o arquivo ativo por padrão.

- `file=<nome>` resolve o arquivo usando a mesma resolução de links dos [[Links internos|links wiki]], correspondendo pelo nome do arquivo sem exigir o caminho completo ou extensão.
- `path=<caminho>` requer o caminho exato a partir da raiz do cofre, ex.: `pasta/nota.md`.

```shell
# Estes são equivalentes se "Receita.md" for o único arquivo com esse nome
obsidian read file=Receita
obsidian read path="Modelos/Receita.md"
```

### Copiar saída

Adicione `--copy` a qualquer comando para copiar a saída para a área de transferência:

```shell
read --copy
search query="TODO" --copy
```


## Comandos gerais

### `help`

Mostrar lista de todos os comandos disponíveis.

| Parâmetro   | Descrição                              |
| ----------- | -------------------------------------- |
| `<comando>` | Mostrar ajuda para um comando específico. |

### `version`

Mostrar versão do Obsidian.

### `reload`

Recarregar a janela do aplicativo.

### `restart`

Reiniciar o aplicativo.


## Bases

Comandos para [[Introdução ao Bases|Bases]].

### `bases`

Listar todos os arquivos `.base` no cofre.

### `base:views`

Listar visualizações no arquivo base atual.

### `base:create`

Criar um novo item em uma base. Usa a visualização da base ativa por padrão se nenhum arquivo for especificado.

```bash
file=<nome>        # nome do arquivo base
path=<caminho>     # caminho do arquivo base
view=<nome>        # nome da visualização
name=<nome>        # nome do novo arquivo
content=<texto>    # conteúdo inicial

open               # abrir arquivo após criar
newtab             # abrir em nova aba
```

### `base:query`

Consultar uma base e retornar resultados.

```bash
file=<nome>                    # nome do arquivo base
path=<caminho>                 # caminho do arquivo base
view=<nome>                    # nome da visualização a consultar
format=json|csv|tsv|md|paths   # formato de saída (padrão: json)
```

## Favoritos

Comandos para [[Favoritos]].

### `bookmarks`

Listar favoritos.

```bash
total              # retornar contagem de favoritos
verbose            # incluir tipos de favoritos
format=json|tsv|csv  # formato de saída (padrão: tsv)
```

### `bookmark`

Adicionar um favorito.

```bash
file=<caminho>     # arquivo para favoritar
subpath=<subcaminho>  # subcaminho (cabeçalho ou bloco) dentro do arquivo
folder=<caminho>   # pasta para favoritar
search=<consulta>  # consulta de pesquisa para favoritar
url=<url>          # URL para favoritar
title=<título>     # título do favorito
```

## Paleta de comandos

Comandos para [[Paleta de comandos]] e [[Teclas de atalho]]. Isso inclui todos os comandos registrados por plugins.

### `commands`

Listar IDs de comandos disponíveis.

```bash
filter=<prefixo>   # filtrar por prefixo de ID
```

### `command`

Executar um comando do Obsidian.

```bash
id=<id-do-comando>    # (obrigatório) ID do comando a executar
```

### `hotkeys`

Listar teclas de atalho para todos os comandos.

```bash
total              # retornar contagem de teclas de atalho
verbose            # mostrar se a tecla de atalho é personalizada
format=json|tsv|csv  # formato de saída (padrão: tsv)
```

### `hotkey`

Obter tecla de atalho para um comando.

```bash
id=<id-do-comando>    # (obrigatório) ID do comando

verbose            # mostrar se é personalizada ou padrão
```

## Notas diárias

Comandos para [[Notas diárias]].

### `daily`

Abrir nota diária.

```bash
paneType=tab|split|window    # tipo de painel para abrir
```

### `daily:path`

Obter caminho da nota diária. Retorna o caminho esperado mesmo se o arquivo ainda não foi criado.

### `daily:read`

Ler conteúdo da nota diária.

### `daily:append`

Anexar conteúdo à nota diária.

```bash
content=<texto>    # (obrigatório) conteúdo a anexar
paneType=tab|split|window    # tipo de painel para abrir

inline             # anexar sem nova linha
open               # abrir arquivo após adicionar
```

### `daily:prepend`

Inserir conteúdo no início da nota diária.

```bash
content=<texto>    # (obrigatório) conteúdo a inserir no início
paneType=tab|split|window    # tipo de painel para abrir

inline             # inserir sem nova linha
open               # abrir arquivo após adicionar
```

## Histórico de arquivo

### `diff`

Listar ou comparar versões da [[Recuperação de arquivos]] local e do [[Introdução ao Obsidian Sync|Sync]]. As versões são numeradas da mais nova para a mais antiga.

```bash
file=<nome>          # nome do arquivo
path=<caminho>       # caminho do arquivo
from=<n>             # número da versão para comparar a partir
to=<n>               # número da versão para comparar até
filter=local|sync    # filtrar por origem da versão
```

**Exemplos:**

```shell
# Listar todas as versões do arquivo ativo
diff

# Listar todas as versões de um arquivo específico
diff file=Receita

# Comparar a versão mais recente com o arquivo atual
diff file=Receita from=1

# Comparar duas versões
diff file=Receita from=2 to=1

# Mostrar apenas versões do Sync
diff filter=sync
```

### `history`

Listar versões apenas da [[Recuperação de arquivos]]. Veja [[#Sync|sync:history]] para o comando equivalente do Sync.

```bash
file=<nome>        # nome do arquivo
path=<caminho>     # caminho do arquivo
```

### `history:list`

Listar todos os arquivos com histórico local.

### `history:read`

Ler uma versão do histórico local.

```bash
file=<nome>        # nome do arquivo
path=<caminho>     # caminho do arquivo
version=<n>        # número da versão (padrão: 1)
```

### `history:restore`

Restaurar uma versão do histórico local.

```bash
file=<nome>        # nome do arquivo
path=<caminho>     # caminho do arquivo
version=<n>        # (obrigatório) número da versão
```

### `history:open`

Abrir recuperação de arquivos.

```bash
file=<nome>        # nome do arquivo
path=<caminho>     # caminho do arquivo
```

## Arquivos e pastas

### `file`

Mostrar informações do arquivo (padrão: arquivo ativo).

```bash
file=<nome>        # nome do arquivo
path=<caminho>     # caminho do arquivo
```

Exemplo:

```
path       Notas/Receita.md
name       Receita
extension  md
size       1024
created    1700000000000
modified   1700001000000
```

### `files`

Listar arquivos no cofre.

```bash
folder=<caminho>   # filtrar por pasta
ext=<extensão>     # filtrar por extensão

total              # retornar contagem de arquivos
```

### `folder`

Mostrar informações da pasta.

```bash
path=<caminho>           # (obrigatório) caminho da pasta
info=files|folders|size  # retornar apenas informação específica
```

### `folders`

Listar pastas no cofre.

```bash
folder=<caminho>   # filtrar por pasta pai

total              # retornar contagem de pastas
```

### `open`

Abrir um arquivo.

```bash
file=<nome>        # nome do arquivo
path=<caminho>     # caminho do arquivo

newtab             # abrir em nova aba
```

### `create`

Criar ou sobrescrever um arquivo.

```bash
name=<nome>        # nome do arquivo
path=<caminho>     # caminho do arquivo
content=<texto>    # conteúdo inicial
template=<nome>    # modelo a usar

overwrite          # sobrescrever se o arquivo existir
open               # abrir arquivo após criar
newtab             # abrir em nova aba
```

### `read`

Ler conteúdo do arquivo (padrão: arquivo ativo).

```bash
file=<nome>        # nome do arquivo
path=<caminho>     # caminho do arquivo
```

### `append`

Anexar conteúdo a um arquivo (padrão: arquivo ativo).

```bash
file=<nome>        # nome do arquivo
path=<caminho>     # caminho do arquivo
content=<texto>    # (obrigatório) conteúdo a anexar

inline             # anexar sem nova linha
```

### `prepend`

Inserir conteúdo após o frontmatter (padrão: arquivo ativo).

```bash
file=<nome>        # nome do arquivo
path=<caminho>     # caminho do arquivo
content=<texto>    # (obrigatório) conteúdo a inserir no início

inline             # inserir sem nova linha
```

### `move`

Mover ou renomear um arquivo (padrão: arquivo ativo). Isso atualizará automaticamente os [[Links internos]] se estiver ativado nas [[Configurações#Sempre atualizar os links internos|configurações do cofre]].

```bash
file=<nome>        # nome do arquivo
path=<caminho>     # caminho do arquivo
to=<caminho>       # (obrigatório) pasta ou caminho de destino
```

### `rename`

Renomear um arquivo (padrão: arquivo ativo). A extensão do arquivo é preservada automaticamente se omitida do novo nome. Use [[#`move`|move]] para renomear e mover um arquivo ao mesmo tempo. Isso atualizará automaticamente os [[Links internos]] se estiver ativado nas [[Configurações#Sempre atualizar os links internos|configurações do cofre]].

```bash
file=<nome>        # nome do arquivo
path=<caminho>     # caminho do arquivo
name=<nome>        # (obrigatório) novo nome do arquivo
```

### `delete`

Excluir um arquivo (padrão: arquivo ativo, lixeira por padrão).

```bash
file=<nome>        # nome do arquivo
path=<caminho>     # caminho do arquivo

permanent          # pular lixeira, excluir permanentemente
```

## Links

Comandos para [[Links inversos]] e [[Links de saída]].

### `backlinks`

Listar links inversos para um arquivo (padrão: arquivo ativo).

```bash
file=<nome>        # nome do arquivo alvo
path=<caminho>     # caminho do arquivo alvo

counts             # incluir contagem de links
total              # retornar contagem de links inversos
format=json|tsv|csv  # formato de saída (padrão: tsv)
```

### `links`

Listar links de saída de um arquivo (padrão: arquivo ativo).

```bash
file=<nome>        # nome do arquivo
path=<caminho>     # caminho do arquivo

total              # retornar contagem de links
```

### `unresolved`

Listar links não resolvidos no cofre.

```bash
total              # retornar contagem de links não resolvidos
counts             # incluir contagem de links
verbose            # incluir arquivos de origem
format=json|tsv|csv  # formato de saída (padrão: tsv)
```

### `orphans`

Listar arquivos sem links de entrada.

```bash
total              # retornar contagem de órfãos
```

### `deadends`

Listar arquivos sem links de saída.

```bash
total              # retornar contagem de becos sem saída
```

## Sumário

Comandos para [[Sumário]].

### `outline`

Mostrar cabeçalhos do arquivo atual.

```bash
file=<nome>        # nome do arquivo
path=<caminho>     # caminho do arquivo
format=tree|md|json  # formato de saída (padrão: tree)

total              # retornar contagem de cabeçalhos
```

## Plugins

Comandos para [[Plugins nativos]] e [[Plugins da comunidade]].

### `plugins`

Listar plugins instalados.

```bash
filter=core|community  # filtrar por tipo de plugin

versions               # incluir números de versão
format=json|tsv|csv    # formato de saída (padrão: tsv)
```

### `plugins:enabled`

Listar plugins ativados.

```bash
filter=core|community  # filtrar por tipo de plugin

versions               # incluir números de versão
format=json|tsv|csv    # formato de saída (padrão: tsv)
```

### `plugins:restrict`

Alternar ou verificar o modo restrito.

```bash
on                 # ativar modo restrito
off                # desativar modo restrito
```

### `plugin`

Obter informações do plugin.

```bash
id=<id-do-plugin>  # (obrigatório) ID do plugin
```

### `plugin:enable`

Ativar um plugin.

```bash
id=<id>                # (obrigatório) ID do plugin
filter=core|community  # tipo de plugin
```

### `plugin:disable`

Desativar um plugin.

```bash
id=<id>                # (obrigatório) ID do plugin
filter=core|community  # tipo de plugin
```

### `plugin:install`

Instalar um plugin da comunidade.

```bash
id=<id>            # (obrigatório) ID do plugin

enable             # ativar após instalar
```

### `plugin:uninstall`

Desinstalar um plugin da comunidade.

```bash
id=<id>            # (obrigatório) ID do plugin
```

### `plugin:reload`

Recarregar um plugin (para desenvolvedores).

```bash
id=<id>            # (obrigatório) ID do plugin
```

## Propriedades

Comandos relacionados a [[Propriedades]].

### `aliases`

Listar apelidos no cofre. Use `active` ou `file`/`path` para mostrar apelidos de um arquivo específico.

```bash
file=<nome>        # nome do arquivo
path=<caminho>     # caminho do arquivo

total              # retornar contagem de apelidos
verbose            # incluir caminhos dos arquivos
active             # mostrar apelidos do arquivo ativo
```

### `properties`

Listar propriedades no cofre. Use `active` ou `file`/`path` para mostrar propriedades de um arquivo específico.

```bash
file=<nome>        # mostrar propriedades do arquivo
path=<caminho>     # mostrar propriedades do caminho
name=<nome>        # obter contagem de propriedade específica
sort=count         # ordenar por contagem (padrão: nome)
format=yaml|json|tsv  # formato de saída (padrão: yaml)

total              # retornar contagem de propriedades
counts             # incluir contagens de ocorrências
active             # mostrar propriedades do arquivo ativo
```

### `property:set`

Definir uma propriedade em um arquivo (padrão: arquivo ativo).

```bash
name=<nome>                                    # (obrigatório) nome da propriedade
value=<valor>                                  # (obrigatório) valor da propriedade
type=text|list|number|checkbox|date|datetime   # tipo de propriedade
file=<nome>                                    # nome do arquivo
path=<caminho>                                 # caminho do arquivo
```

### `property:remove`

Remover uma propriedade de um arquivo (padrão: arquivo ativo).

```bash
name=<nome>        # (obrigatório) nome da propriedade
file=<nome>        # nome do arquivo
path=<caminho>     # caminho do arquivo
```

### `property:read`

Ler o valor de uma propriedade de um arquivo (padrão: arquivo ativo).

```bash
name=<nome>        # (obrigatório) nome da propriedade
file=<nome>        # nome do arquivo
path=<caminho>     # caminho do arquivo
```

## Publish

Comandos para [[Introdução ao Obsidian Publish|Obsidian Publish]].

### `publish:site`

Mostrar informações do site publish (slug, URL).

### `publish:list`

Listar arquivos publicados.

```bash
total              # retornar contagem de arquivos publicados
```

### `publish:status`

Listar mudanças de publicação.

```bash
total              # retornar contagem de mudanças
new                # mostrar apenas arquivos novos
changed            # mostrar apenas arquivos alterados
deleted            # mostrar apenas arquivos deletados
```

### `publish:add`

Publicar um arquivo ou todos os arquivos alterados (padrão: arquivo ativo).

```bash
file=<nome>        # nome do arquivo
path=<caminho>     # caminho do arquivo

changed            # publicar todos os arquivos alterados
```

### `publish:remove`

Despublicar um arquivo (padrão: arquivo ativo).

```bash
file=<nome>        # nome do arquivo
path=<caminho>     # caminho do arquivo
```

### `publish:open`

Abrir arquivo no site publicado (padrão: arquivo ativo).

```bash
file=<nome>        # nome do arquivo
path=<caminho>     # caminho do arquivo
```

## Notas aleatórias

Comandos para [[Nota aleatória]].

### `random`

Abrir uma nota aleatória.

```bash
folder=<caminho>   # limitar a uma pasta

newtab             # abrir em nova aba
```

### `random:read`

Ler uma nota aleatória (inclui caminho).

```bash
folder=<caminho>   # limitar a uma pasta
```

## Pesquisa

Comandos para [[Pesquisa]].

### `search`

Pesquisar texto no cofre. Retorna caminhos de arquivos correspondentes.

```bash
query=<texto>      # (obrigatório) consulta de pesquisa
path=<pasta>       # limitar a uma pasta
limit=<n>          # máximo de arquivos
format=text|json   # formato de saída (padrão: text)

total              # retornar contagem de correspondências
case               # diferencia letras maiúsculas de minúsculas
```

### `search:context`

Pesquisar com contexto de linha correspondente. Retorna saída estilo grep `caminho:linha: texto`.

```bash
query=<texto>      # (obrigatório) consulta de pesquisa
path=<pasta>       # limitar a uma pasta
limit=<n>          # máximo de arquivos
format=text|json   # formato de saída (padrão: text)

case               # diferencia letras maiúsculas de minúsculas
```

### `search:open`

Abrir visualização de pesquisa.

```bash
query=<texto>      # consulta de pesquisa inicial
```

## Sync

Comandos para [[Introdução ao Obsidian Sync|Obsidian Sync]].

> [!tip] Sincronizar sem o aplicativo desktop
> Esses comandos controlam o Sync dentro do aplicativo Obsidian em execução. Para sincronizar cofres pela linha de comando sem o aplicativo desktop, consulte [[Sync sem interface]].

### `sync`

Pausar ou retomar a sincronização.

```bash
on                 # retomar sincronização
off                # pausar sincronização
```

### `sync:status`

Mostrar status e uso da sincronização.

### `sync:history`

Listar histórico de versões do Sync para um arquivo (padrão: arquivo ativo).

```bash
file=<nome>        # nome do arquivo
path=<caminho>     # caminho do arquivo

total              # retornar contagem de versões
```

### `sync:read`

Ler uma versão do Sync (padrão: arquivo ativo).

```bash
file=<nome>        # nome do arquivo
path=<caminho>     # caminho do arquivo
version=<n>        # (obrigatório) número da versão
```

### `sync:restore`

Restaurar uma versão do Sync (padrão: arquivo ativo).

```bash
file=<nome>        # nome do arquivo
path=<caminho>     # caminho do arquivo
version=<n>        # (obrigatório) número da versão
```

### `sync:open`

Abrir histórico do Sync (padrão: arquivo ativo).

```bash
file=<nome>        # nome do arquivo
path=<caminho>     # caminho do arquivo
```

### `sync:deleted`

Listar arquivos deletados no Sync.

```bash
total              # retornar contagem de arquivos deletados
```

## Etiquetas

Comandos para [[Tags]].

### `tags`

Listar etiquetas no cofre. Use `active` ou `file`/`path` para mostrar etiquetas de um arquivo específico.

```bash
file=<nome>        # nome do arquivo
path=<caminho>     # caminho do arquivo
sort=count         # ordenar por contagem (padrão: nome)

total              # retornar contagem de etiquetas
counts             # incluir contagens de etiquetas
format=json|tsv|csv  # formato de saída (padrão: tsv)
active             # mostrar etiquetas do arquivo ativo
```

### `tag`

Obter informações da etiqueta.

```bash
name=<etiqueta>    # (obrigatório) nome da etiqueta

total              # retornar contagem de ocorrências
verbose            # incluir lista de arquivos e contagem
```

## Tarefas

Comandos para gerenciamento de tarefas.

### `tasks`

Listar tarefas no cofre. Use `active` ou `file`/`path` para mostrar tarefas de um arquivo específico.

```bash
file=<nome>        # filtrar por nome de arquivo
path=<caminho>     # filtrar por caminho de arquivo
status="<char>"    # filtrar por caractere de status

total              # retornar contagem de tarefas
done               # mostrar tarefas concluídas
todo               # mostrar tarefas incompletas
verbose            # agrupar por arquivo com números de linha
format=json|tsv|csv  # formato de saída (padrão: text)
active             # mostrar tarefas do arquivo ativo
daily              # mostrar tarefas da nota diária
```

**Exemplos:**

```bash
# Listar todas as tarefas no cofre
tasks

# Listar tarefas incompletas no cofre
tasks todo

# Listar tarefas concluídas de um arquivo específico
tasks file=Receita done

# Listar tarefas da nota diária de hoje
tasks daily

# Contar tarefas na nota diária
tasks daily total

# Listar tarefas com caminhos de arquivo e números de linha
tasks verbose

# Filtrar por status personalizado (use aspas em caracteres especiais)
tasks 'status=?'
```

### `task`

Mostrar ou atualizar uma tarefa.

```bash
ref=<caminho:linha>  # referência da tarefa (caminho:linha)
file=<nome>        # nome do arquivo
path=<caminho>     # caminho do arquivo
line=<n>           # número da linha
status="<char>"    # definir caractere de status

toggle             # alternar status da tarefa
daily              # nota diária
done               # marcar como concluída
todo               # marcar como pendente
```

**Exemplos:**

```bash
# Mostrar informações da tarefa
task file=Receita line=8
task ref="Receita.md:8"

# Alternar conclusão da tarefa
task ref="Receita.md:8" toggle

# Alternar tarefa na nota diária
task daily line=3 toggle

# Definir status da tarefa
task file=Receita line=8 done      # → [x]
task file=Receita line=8 todo      # → [ ]
task file=Receita line=8 status=-  # → [-]
task daily line=3 done             # Marcar tarefa da nota diária como concluída
```


## Modelos

Comandos para [[Plugins/Modelos|Modelos]].

### `templates`

Listar modelos.

```bash
total              # retornar contagem de modelos
```

### `template:read`

Ler conteúdo de um modelo.

```bash
name=<modelo>      # (obrigatório) nome do modelo
title=<título>     # título para resolução de variáveis

resolve            # resolver variáveis do modelo
```

### `template:insert`

Inserir modelo no arquivo ativo.

```bash
name=<modelo>      # (obrigatório) nome do modelo
```

**Notas:**
- A opção `resolve` processa as variáveis `{{date}}`, `{{time}}`, `{{title}}`
- Use `create path=<caminho> template=<nome>` para criar um arquivo com um modelo

## Temas e trechos

Comandos para [[Temas]] e [[Trechos CSS]].

### `themes`

Listar temas instalados.

```bash
versions           # incluir números de versão
```

### `theme`

Mostrar tema ativo ou obter informações.

```bash
name=<nome>        # nome do tema para detalhes
```

### `theme:set`

Definir tema ativo.

```bash
name=<nome>        # (obrigatório) nome do tema (vazio para padrão)
```

### `theme:install`

Instalar um tema da comunidade.

```bash
name=<nome>        # (obrigatório) nome do tema

enable             # ativar após instalar
```

### `theme:uninstall`

Desinstalar um tema.

```bash
name=<nome>        # (obrigatório) nome do tema
```

### `snippets`

Listar trechos CSS instalados.

### `snippets:enabled`

Listar trechos CSS ativados.

### `snippet:enable`

Ativar um trecho CSS.

```bash
name=<nome>        # (obrigatório) nome do trecho
```

### `snippet:disable`

Desativar um trecho CSS.

```bash
name=<nome>        # (obrigatório) nome do trecho
```

## Notas únicas

Comandos para [[Criador de nota única]].

### `unique`

Criar nota única.

```bash
name=<texto>       # nome da nota
content=<texto>    # conteúdo inicial
paneType=tab|split|window    # tipo de painel para abrir

open               # abrir arquivo após criar
```

## Cofre

### `vault`

Mostrar informações do cofre.

```bash
info=name|path|files|folders|size  # retornar apenas informação específica
```

### `vaults`

Listar cofres conhecidos.

```bash
total              # retornar contagem de cofres
verbose            # incluir caminhos dos cofres
```

### `vault:open`

Alternar para um cofre diferente (apenas TUI).

```bash
name=<nome>        # (obrigatório) nome do cofre
```

## Visualizador web

Comandos para [[Visualizador web]].

### `web`

Abrir URL no visualizador web.

```bash
url=<url>          # (obrigatório) URL a abrir

newtab             # abrir em nova aba
```

## Contagem de palavras

Comandos para [[Contagem de palavras]].

### `wordcount`

Contar palavras e caracteres (padrão: arquivo ativo).

```bash
file=<nome>        # nome do arquivo
path=<caminho>     # caminho do arquivo

words              # retornar apenas contagem de palavras
characters         # retornar apenas contagem de caracteres
```

## Área de trabalho

Comandos para [[Área de trabalho]] e o plugin [[Áreas de trabalho]].

### `workspace`

Mostrar árvore da área de trabalho.

```bash
ids                # incluir IDs dos itens da área de trabalho
```

### `workspaces`

Listar áreas de trabalho salvas.

```bash
total              # retornar contagem de áreas de trabalho
```

### `workspace:save`

Salvar layout atual como área de trabalho.

```bash
name=<nome>        # nome da área de trabalho
```

### `workspace:load`

Carregar uma área de trabalho salva.

```bash
name=<nome>        # (obrigatório) nome da área de trabalho
```

### `workspace:delete`

Excluir uma área de trabalho salva.

```bash
name=<nome>        # (obrigatório) nome da área de trabalho
```

### `tabs`

Listar abas abertas.

```bash
ids                # incluir IDs das abas
```

### `tab:open`

Abrir uma nova aba.

```bash
group=<id>         # ID do grupo de abas
file=<caminho>     # arquivo a abrir
view=<tipo>        # tipo de visualização a abrir
```

### `recents`

Listar arquivos abertos recentemente.

```bash
total              # retornar contagem de arquivos recentes
```

## Comandos para desenvolvedores

Comandos para ajudar no desenvolvimento de [[Plugins da comunidade]] e [[Temas]]. Saiba mais acessando a [Documentação para Desenvolvedores do Obsidian](https://docs.obsidian.md).

### `devtools`

Alternar ferramentas de desenvolvimento do Electron.

### `dev:debug`

Anexar/desanexar depurador do Chrome DevTools Protocol.

```bash
on                 # anexar depurador
off                # desanexar depurador
```

### `dev:cdp`

Executar um comando do Chrome DevTools Protocol.

```bash
method=<CDP.method>  # (obrigatório) método CDP a chamar
params=<json>        # parâmetros do método como JSON
```

### `dev:errors`

Mostrar erros JavaScript capturados.

```bash
clear              # limpar o buffer de erros
```

### `dev:screenshot`

Tirar uma captura de tela (retorna PNG em base64).

```bash
path=<nome-arquivo>  # caminho do arquivo de saída
```

### `dev:console`

Mostrar mensagens do console capturadas.

```bash
limit=<n>                        # máximo de mensagens a mostrar (padrão 50)
level=log|warn|error|info|debug  # filtrar por nível de log

clear                            # limpar o buffer do console
```

### `dev:css`

Inspecionar CSS com localizações de origem.

```bash
selector=<css>     # (obrigatório) seletor CSS
prop=<nome>        # filtrar por nome de propriedade
```

### `dev:dom`

Consultar elementos do DOM.

```bash
selector=<css>     # (obrigatório) seletor CSS
attr=<nome>        # obter valor do atributo
css=<prop>         # obter valor da propriedade CSS

total              # retornar contagem de elementos
text               # retornar conteúdo de texto
inner              # retornar innerHTML em vez de outerHTML
all                # retornar todas as correspondências em vez da primeira
```

### `dev:mobile`

Alternar emulação mobile.

```bash
on                 # ativar emulação mobile
off                # desativar emulação mobile
```

### `eval`

Executar JavaScript e retornar resultado.

```bash
code=<javascript>  # (obrigatório) código JavaScript a executar
```

## Atalhos de teclado

Esses atalhos estão disponíveis na [[#Usar a interface de terminal|TUI]].

### Navegação

| Ação                                                       | Atalho          |
| ---------------------------------------------------------- | --------------- |
| Mover cursor para a esquerda                               | `←` / `Ctrl+B`  |
| Mover cursor para a direita (aceita sugestão no fim da linha) | `→` / `Ctrl+F` |
| Ir para o início da linha                                  | `Ctrl+A`        |
| Ir para o fim da linha                                     | `Ctrl+E`        |
| Voltar uma palavra                                         | `Alt+B`         |
| Avançar uma palavra                                        | `Alt+F`         |

### Edição

| Ação                           | Atalho                      |
| ------------------------------ | --------------------------- |
| Excluir até o início da linha  | `Ctrl+U`                    |
| Excluir até o fim da linha     | `Ctrl+K`                    |
| Excluir palavra anterior       | `Ctrl+W` / `Alt+Backspace`  |

### Autocompletar

| Ação                                                    | Atalho       |
| ------------------------------------------------------- | ------------ |
| Entrar no modo de sugestão / aceitar sugestão selecionada | `Tab`        |
| Sair do modo de sugestão                                | `Shift+Tab`  |
| Entrar no modo de sugestão (a partir de entrada nova)   | `↓`          |
| Aceitar primeira/sugestão selecionada (no fim da linha) | `→`          |

### Histórico

| Ação                                                          | Atalho          |
| ------------------------------------------------------------- | --------------- |
| Entrada anterior do histórico / navegar sugestões acima       | `↑` / `Ctrl+P`  |
| Próxima entrada do histórico / navegar sugestões abaixo       | `↓` / `Ctrl+N`  |
| Busca reversa no histórico (digite para filtrar, `Ctrl+R` para ciclar) | `Ctrl+R`  |

### Outros

| Ação                                                    | Atalho               |
| ------------------------------------------------------- | -------------------- |
| Executar comando ou aceitar sugestão                    | `Enter`              |
| Desfazer autocompletar / sair do modo de sugestão / limpar entrada | `Escape`    |
| Limpar tela                                             | `Ctrl+L`             |
| Sair                                                    | `Ctrl+C` / `Ctrl+D`  |

## Solução de problemas

Se você estiver tendo problemas para executar o Obsidian CLI:

- Certifique-se de estar usando a versão mais recente do [[Atualizar o Obsidian|instalador do Obsidian]] (1.12.4 ou superior).
- Reinicie seu terminal após registrar o CLI para que as alterações no PATH entrem em vigor.
- O Obsidian deve estar em execução. O CLI se conecta à instância do Obsidian em execução. Se o Obsidian não estiver em execução, o primeiro comando do CLI deve iniciar o aplicativo.

### Windows

O Obsidian CLI no Windows requer o instalador do Obsidian 1.12.4+. Consulte [[Atualizar o Obsidian|Atualização da versão do instalador]].

O Windows usa um redirecionador de terminal que conecta o Obsidian ao stdin/stdout corretamente. Isso é necessário porque o Obsidian normalmente é executado como um aplicativo GUI, que é incompatível com saídas de terminal no Windows. Quando você instala o Obsidian 1.12.4+, o redirecionador de terminal `Obsidian.com` será adicionado na pasta onde você instalou o arquivo `Obsidian.exe`.

### macOS

O registro do CLI adiciona o diretório de binários do Obsidian ao seu PATH via `~/.zprofile`. Se estiver tendo problemas, verifique o seguinte:

Seu arquivo `~/.zprofile` deve conter a seguinte linha. Se estiver faltando, você pode adicioná-la manualmente:

```
export PATH="$PATH:/Applications/Obsidian.app/Contents/MacOS"
```

#### Shells alternativos

O registro do CLI modifica apenas `~/.zprofile`, que é usado pelo zsh (o shell padrão do macOS). Se você usar um shell diferente, adicione o diretório de binários do Obsidian ao arquivo de configuração do seu shell manualmente:

- Bash: adicione `export PATH="$PATH:/Applications/Obsidian.app/Contents/MacOS"` ao `~/.bash_profile`
- Fish: execute `fish_add_path /Applications/Obsidian.app/Contents/MacOS`


### Linux

O registro do CLI cria um link simbólico em `/usr/local/bin/obsidian` apontando para o binário do Obsidian (requer sudo).

#### AppImage

Para instalações via AppImage, o link simbólico aponta para o arquivo `.AppImage` em vez do binário interno, pois o caminho de montagem muda a cada execução. Se o sudo falhar, o link simbólico é criado em `~/.local/bin/obsidian` como alternativa. Se estiver tendo problemas, verifique o seguinte.

Verifique se o link simbólico existe e aponta para o binário correto:

```
ls -l /usr/local/bin/obsidian
```

Se o link simbólico estiver faltando, crie-o manualmente:

```
sudo ln -s /caminho/para/obsidian /usr/local/bin/obsidian
```

Se o link simbólico foi criado em `~/.local/bin/`, certifique-se de que esse diretório está no seu PATH. Adicione o seguinte ao seu `~/.bashrc` ou `~/.zshrc`:

```
export PATH="$PATH:$HOME/.local/bin"
```

Se o link simbólico quebrar após mover ou renomear o arquivo `.AppImage`, registre novamente o CLI ou atualize o link simbólico manualmente.

#### Snap

O pacote Snap armazena dados de compilação insider em seu próprio diretório de dados do usuário. Se o CLI não detectar o `.asar` insider, defina `XDG_CONFIG_HOME` para apontar para o caminho de configuração do Snap:

```
export XDG_CONFIG_HOME="$HOME/snap/obsidian/current/.config"
```

Adicione isso ao seu `~/.bashrc` ou `~/.zshrc` para torná-lo persistente.


#### Flatpak

O Obsidian tenta fazer isso automaticamente, mas abaixo estão as instruções manuais. Se for uma instalação do sistema:

```
ln -s /var/lib/flatpak/exports/bin/md.obsidian.Obsidian ~/.local/bin/obsidian
```

Se for uma instalação de usuário:

```
ln -s ~/.local/share/flatpak/exports/bin/md.obsidian.Obsidian ~/.local/bin/obsidian
```
