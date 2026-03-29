---
permalink: cli
description: Tudo o que você pode fazer no Obsidian pode ser feito a partir da linha de comando.
---
A CLI do Obsidian é uma interface de linha de comandos que permite controlar o Obsidian a partir do terminal para scripting, automação e integração com ferramentas externas.

Tudo o que pode fazer no Obsidian pode fazer a partir da linha de comandos. A CLI do Obsidian inclui até [[#Comandos para programadores|comandos para programadores]] para aceder a ferramentas de desenvolvimento, inspecionar elementos, tirar capturas de ecrã, recarregar plugins e muito mais.

![[obsidian-cli.mp4#interface]]

> [!warning] Requer o instalador do Obsidian 1.12
> A utilização da CLI requer o instalador do Obsidian 1.12. Consulte o [[Atualizar Obsidian#Atualizações do instalador|guia de atualização da versão do instalador]].

## Instalar a CLI do Obsidian

Atualize para a versão mais recente do [[Atualizar Obsidian|instalador do Obsidian]] (1.11.7) e a [[Versões de acesso antecipado|versão de acesso antecipado]] mais recente (1.12.x).

Ative a CLI do Obsidian no Obsidian:

1. Vá a **Definições** → **Geral**.
2. Ative **Interface de linha de comandos**.
3. Siga a instrução para registar a CLI do Obsidian.

Se encontrar problemas ao instalar a CLI do Obsidian, consulte [[#Resolução de problemas]].

## Começar

A CLI do Obsidian suporta tanto comandos individuais como uma interface de utilizador de terminal (TUI) com ajuda interativa e preenchimento automático.

> [!info] A aplicação Obsidian tem de estar em execução
> A CLI do Obsidian requer que a aplicação Obsidian esteja em execução. Se o Obsidian não estiver em execução, o primeiro comando que executar inicia o Obsidian.
>
> Procura sincronizar sem a aplicação de ambiente de trabalho? Consulte [[Obsidian Headless|Obsidian Headless]].

### Executar um comando

Execute um comando individual sem abrir a TUI:

```shell
# Executar o comando de ajuda
obsidian help
```

### Usar a interface de terminal

Use a TUI digitando `obsidian`. Os comandos subsequentes podem ser introduzidos sem `obsidian`.

```shell
# Abrir a TUI, depois executar ajuda
obsidian
help
```

A TUI suporta preenchimento automático, histórico de comandos e pesquisa inversa. Use `Ctrl+R` para pesquisar o histórico de comandos. Consulte [[#Atalhos de teclado]] para todos os atalhos disponíveis.

## Exemplos

Aqui estão alguns exemplos do que a CLI do Obsidian pode fazer.

### Uso diário

```shell
# Abrir a nota diária de hoje
obsidian daily

# Adicionar uma tarefa à nota diária
obsidian daily:append content="- [ ] Comprar mercearias"

# Pesquisar no cofre
obsidian search query="notas de reunião"

# Ler o ficheiro ativo
obsidian read

# Listar todas as tarefas da nota diária
obsidian tasks daily

# Criar uma nova nota a partir de um modelo
obsidian create name="Viagem a Paris" template=Viagem

# Listar todas as etiquetas no cofre com contagens
obsidian tags counts

# Comparar duas versões de um ficheiro
obsidian diff file=README from=1 to=3
```

### Para programadores

Muitos [[#Comandos para programadores]] estão disponíveis para desenvolvimento de plugins e temas. Estes comandos permitem que ferramentas de codificação com agentes testem e depurem automaticamente.

```shell
# Abrir ferramentas de desenvolvimento
obsidian devtools

# Recarregar um plugin da comunidade em desenvolvimento
obsidian plugin:reload id=my-plugin

# Tirar uma captura de ecrã da aplicação
obsidian dev:screenshot path=screenshot.png

# Executar JavaScript na consola da aplicação
obsidian eval code="app.vault.getFiles().length"
```

## Como fazer

### Usar parâmetros e flags

Os comandos podem usar **parâmetros** e **flags**. A maioria dos comandos não requer quaisquer parâmetros ou flags. Os parâmetros obrigatórios estão marcados como `required`. Por exemplo:

```shell
# Criar uma nova nota usando o nome predefinido "Sem título"
obsidian create
```

Um **parâmetro** recebe um valor, escrito como `parâmetro=valor`. Se o valor tiver espaços, envolva-o em aspas:

```shell
# Criar uma nova nota chamada "Nota" com conteúdo "Olá mundo"
obsidian create name=Nota content="Olá mundo"
```

Uma **flag** é um interruptor booleano sem valor. Inclua-a para ativar, por exemplo `open` e `overwrite` são flags:

```shell
# Criar uma nota e abri-la
obsidian create name=Nota content="Olá" open overwrite
```

Para conteúdo multilinha use `\n` para nova linha. Use `\t` para tabulação.

```bash
obsidian create name=Nota content="# Título\n\nTexto do corpo"
```

### Direcionar para um cofre

Se o diretório de trabalho atual do terminal for uma pasta de cofre, esse cofre é usado por predefinição. Caso contrário, é usado o cofre atualmente ativo.

Use `vault=<nome>` ou `vault=<id>` para direcionar para um cofre específico. Este deve ser o primeiro parâmetro antes do comando:

```shell
obsidian vault=Notas daily
obsidian vault="O meu Cofre" search query="teste"
```

Na TUI, use `vault:open <nome>` ou `<id>` para mudar para um cofre diferente.

### Direcionar para um ficheiro

Muitos comandos aceitam parâmetros `file` e `path` para direcionar para um ficheiro específico. Se nenhum for fornecido, o comando usa por predefinição o ficheiro ativo.

- `file=<nome>` resolve o ficheiro usando a mesma resolução de ligações que os [[Ligações internas|links wiki]], correspondendo pelo nome do ficheiro sem requerer o caminho completo ou extensão.
- `path=<caminho>` requer o caminho exato a partir da raiz do cofre, e.g. `pasta/nota.md`.

```shell
# Estes são equivalentes se "Receita.md" for o único ficheiro com esse nome
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

Recarregar a janela da aplicação.

### `restart`

Reiniciar a aplicação.


## Bases

Comandos para [[Introdução ao Bases|Bases]].

### `bases`

Listar todos os ficheiros `.base` no cofre.

### `base:views`

Listar vistas no ficheiro base atual.

### `base:create`

Criar um novo item numa base. Usa por predefinição a vista de base ativa se nenhum ficheiro for especificado.

```bash
file=<nome>        # nome do ficheiro base
path=<caminho>     # caminho do ficheiro base
view=<nome>        # nome da vista
name=<nome>        # nome do novo ficheiro
content=<texto>    # conteúdo inicial

open               # abrir ficheiro após criação
newtab             # abrir num novo separador
```

### `base:query`

Consultar uma base e devolver resultados.

```bash
file=<nome>                    # nome do ficheiro base
path=<caminho>                 # caminho do ficheiro base
view=<nome>                    # nome da vista a consultar
format=json|csv|tsv|md|paths   # formato de saída (predefinido: json)
```

## Marcadores

Comandos para [[Marcadores]].

### `bookmarks`

Listar marcadores.

```bash
total              # devolver contagem de marcadores
verbose            # incluir tipos de marcadores
format=json|tsv|csv  # formato de saída (predefinido: tsv)
```

### `bookmark`

Adicionar um marcador.

```bash
file=<caminho>     # ficheiro a marcar
subpath=<subcaminho>  # subcaminho (cabeçalho ou bloco) dentro do ficheiro
folder=<caminho>   # pasta a marcar
search=<consulta>  # consulta de pesquisa a marcar
url=<url>          # URL a marcar
title=<título>     # título do marcador
```

## Paleta de comandos

Comandos para [[Paleta de comando]] e [[Atalhos de teclado]]. Isto inclui todos os comandos registados por plugins.

### `commands`

Listar IDs de comandos disponíveis.

```bash
filter=<prefixo>   # filtrar por prefixo de ID
```

### `command`

Executar um comando do Obsidian.

```bash
id=<id-comando>    # (obrigatório) ID do comando a executar
```

### `hotkeys`

Listar atalhos de teclado para todos os comandos.

```bash
total              # devolver contagem de atalhos
verbose            # mostrar se o atalho é personalizado
format=json|tsv|csv  # formato de saída (predefinido: tsv)
```

### `hotkey`

Obter atalho de teclado para um comando.

```bash
id=<id-comando>    # (obrigatório) ID do comando

verbose            # mostrar se é personalizado ou predefinido
```

## Notas diárias

Comandos para [[Notas diárias]].

### `daily`

Abrir nota diária.

```bash
paneType=tab|split|window    # tipo de painel para abrir
```

### `daily:path`

Obter caminho da nota diária. Devolve o caminho esperado mesmo que o ficheiro ainda não tenha sido criado.

### `daily:read`

Ler conteúdos da nota diária.

### `daily:append`

Anexar conteúdo à nota diária.

```bash
content=<texto>    # (obrigatório) conteúdo a anexar
paneType=tab|split|window    # tipo de painel para abrir

inline             # anexar sem nova linha
open               # abrir ficheiro após adicionar
```

### `daily:prepend`

Antepor conteúdo à nota diária.

```bash
content=<texto>    # (obrigatório) conteúdo a antepor
paneType=tab|split|window    # tipo de painel para abrir

inline             # antepor sem nova linha
open               # abrir ficheiro após adicionar
```

## Histórico de ficheiros

### `diff`

Listar ou comparar versões da [[Recuperação de ficheiros]] local e do [[Introdução ao Obsidian Sync|Sync]]. As versões são numeradas da mais recente à mais antiga.

```bash
file=<nome>          # nome do ficheiro
path=<caminho>       # caminho do ficheiro
from=<n>             # número da versão de origem
to=<n>               # número da versão de destino
filter=local|sync    # filtrar por origem da versão
```

**Exemplos:**

```shell
# Listar todas as versões do ficheiro ativo
diff

# Listar todas as versões de um ficheiro específico
diff file=Receita

# Comparar a versão mais recente com o ficheiro atual
diff file=Receita from=1

# Comparar duas versões
diff file=Receita from=2 to=1

# Mostrar apenas versões do Sync
diff filter=sync
```

### `history`

Listar versões apenas da [[Recuperação de ficheiros]]. Consulte [[#Sync|sync:history]] para o comando equivalente do Sync.

```bash
file=<nome>        # nome do ficheiro
path=<caminho>     # caminho do ficheiro
```

### `history:list`

Listar todos os ficheiros com histórico local.

### `history:read`

Ler uma versão do histórico local.

```bash
file=<nome>        # nome do ficheiro
path=<caminho>     # caminho do ficheiro
version=<n>        # número da versão (predefinido: 1)
```

### `history:restore`

Restaurar uma versão do histórico local.

```bash
file=<nome>        # nome do ficheiro
path=<caminho>     # caminho do ficheiro
version=<n>        # (obrigatório) número da versão
```

### `history:open`

Abrir recuperação de ficheiros.

```bash
file=<nome>        # nome do ficheiro
path=<caminho>     # caminho do ficheiro
```

## Ficheiros e pastas

### `file`

Mostrar informação do ficheiro (predefinido: ficheiro ativo).

```bash
file=<nome>        # nome do ficheiro
path=<caminho>     # caminho do ficheiro
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

Listar ficheiros no cofre.

```bash
folder=<caminho>   # filtrar por pasta
ext=<extensão>     # filtrar por extensão

total              # devolver contagem de ficheiros
```

### `folder`

Mostrar informação da pasta.

```bash
path=<caminho>           # (obrigatório) caminho da pasta
info=files|folders|size  # devolver apenas informação específica
```

### `folders`

Listar pastas no cofre.

```bash
folder=<caminho>   # filtrar por pasta pai

total              # devolver contagem de pastas
```

### `open`

Abrir um ficheiro.

```bash
file=<nome>        # nome do ficheiro
path=<caminho>     # caminho do ficheiro

newtab             # abrir num novo separador
```

### `create`

Criar ou substituir um ficheiro.

```bash
name=<nome>        # nome do ficheiro
path=<caminho>     # caminho do ficheiro
content=<texto>    # conteúdo inicial
template=<nome>    # modelo a usar

overwrite          # substituir se o ficheiro existir
open               # abrir ficheiro após criação
newtab             # abrir num novo separador
```

### `read`

Ler conteúdos do ficheiro (predefinido: ficheiro ativo).

```bash
file=<nome>        # nome do ficheiro
path=<caminho>     # caminho do ficheiro
```

### `append`

Anexar conteúdo a um ficheiro (predefinido: ficheiro ativo).

```bash
file=<nome>        # nome do ficheiro
path=<caminho>     # caminho do ficheiro
content=<texto>    # (obrigatório) conteúdo a anexar

inline             # anexar sem nova linha
```

### `prepend`

Antepor conteúdo após metadados iniciais (predefinido: ficheiro ativo).

```bash
file=<nome>        # nome do ficheiro
path=<caminho>     # caminho do ficheiro
content=<texto>    # (obrigatório) conteúdo a antepor

inline             # antepor sem nova linha
```

### `move`

Mover ou renomear um ficheiro (predefinido: ficheiro ativo). Isto atualizará automaticamente as [[Ligações internas]] se estiver ativado nas [[Definições#Atualizar sempre os links internos|definições do cofre]].

```bash
file=<nome>        # nome do ficheiro
path=<caminho>     # caminho do ficheiro
to=<caminho>       # (obrigatório) pasta ou caminho de destino
```

### `rename`

Renomear um ficheiro (predefinido: ficheiro ativo). A extensão do ficheiro é preservada automaticamente se omitida do novo nome. Use [[#`move`|move]] para renomear e mover um ficheiro ao mesmo tempo. Isto atualizará automaticamente as [[Ligações internas]] se estiver ativado nas [[Definições#Atualizar sempre os links internos|definições do cofre]].

```bash
file=<nome>        # nome do ficheiro
path=<caminho>     # caminho do ficheiro
name=<nome>        # (obrigatório) novo nome do ficheiro
```

### `delete`

Eliminar um ficheiro (predefinido: ficheiro ativo, lixo por predefinição).

```bash
file=<nome>        # nome do ficheiro
path=<caminho>     # caminho do ficheiro

permanent          # ignorar lixo, eliminar permanentemente
```

## Ligações

Comandos para [[Links inversos]] e [[Links Externos]].

### `backlinks`

Listar links inversos para um ficheiro (predefinido: ficheiro ativo).

```bash
file=<nome>        # nome do ficheiro alvo
path=<caminho>     # caminho do ficheiro alvo

counts             # incluir contagens de ligações
total              # devolver contagem de links inversos
format=json|tsv|csv  # formato de saída (predefinido: tsv)
```

### `links`

Listar ligações de saída de um ficheiro (predefinido: ficheiro ativo).

```bash
file=<nome>        # nome do ficheiro
path=<caminho>     # caminho do ficheiro

total              # devolver contagem de ligações
```

### `unresolved`

Listar ligações não resolvidas no cofre.

```bash
total              # devolver contagem de ligações não resolvidas
counts             # incluir contagens de ligações
verbose            # incluir ficheiros de origem
format=json|tsv|csv  # formato de saída (predefinido: tsv)
```

### `orphans`

Listar ficheiros sem ligações de entrada.

```bash
total              # devolver contagem de órfãos
```

### `deadends`

Listar ficheiros sem ligações de saída.

```bash
total              # devolver contagem de becos sem saída
```

## Esquema

Comandos para [[Índice]].

### `outline`

Mostrar cabeçalhos para o ficheiro atual.

```bash
file=<nome>        # nome do ficheiro
path=<caminho>     # caminho do ficheiro
format=tree|md|json  # formato de saída (predefinido: tree)

total              # devolver contagem de cabeçalhos
```

## Plugins

Comandos para [[Plugins Base]] e [[Plugins da comunidade]].

### `plugins`

Listar plugins instalados.

```bash
filter=core|community  # filtrar por tipo de plugin

versions               # incluir números de versão
format=json|tsv|csv    # formato de saída (predefinido: tsv)
```

### `plugins:enabled`

Listar plugins ativados.

```bash
filter=core|community  # filtrar por tipo de plugin

versions               # incluir números de versão
format=json|tsv|csv    # formato de saída (predefinido: tsv)
```

### `plugins:restrict`

Alternar ou verificar o modo restrito.

```bash
on                 # ativar modo restrito
off                # desativar modo restrito
```

### `plugin`

Obter informação do plugin.

```bash
id=<id-plugin>     # (obrigatório) ID do plugin
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

enable             # ativar após instalação
```

### `plugin:uninstall`

Desinstalar um plugin da comunidade.

```bash
id=<id>            # (obrigatório) ID do plugin
```

### `plugin:reload`

Recarregar um plugin (para programadores).

```bash
id=<id>            # (obrigatório) ID do plugin
```

## Propriedades

Comandos relacionados com [[Propriedades]].

### `aliases`

Listar alcunhas no cofre. Use `active` ou `file`/`path` para mostrar alcunhas de um ficheiro específico.

```bash
file=<nome>        # nome do ficheiro
path=<caminho>     # caminho do ficheiro

total              # devolver contagem de alcunhas
verbose            # incluir caminhos de ficheiros
active             # mostrar alcunhas do ficheiro ativo
```

### `properties`

Listar propriedades no cofre. Use `active` ou `file`/`path` para mostrar propriedades de um ficheiro específico.

```bash
file=<nome>        # mostrar propriedades do ficheiro
path=<caminho>     # mostrar propriedades do caminho
name=<nome>        # obter contagem de propriedade específica
sort=count         # ordenar por contagem (predefinido: nome)
format=yaml|json|tsv  # formato de saída (predefinido: yaml)

total              # devolver contagem de propriedades
counts             # incluir contagens de ocorrências
active             # mostrar propriedades do ficheiro ativo
```

### `property:set`

Definir uma propriedade num ficheiro (predefinido: ficheiro ativo).

```bash
name=<nome>                                    # (obrigatório) nome da propriedade
value=<valor>                                  # (obrigatório) valor da propriedade
type=text|list|number|checkbox|date|datetime   # tipo de propriedade
file=<nome>                                    # nome do ficheiro
path=<caminho>                                 # caminho do ficheiro
```

### `property:remove`

Remover uma propriedade de um ficheiro (predefinido: ficheiro ativo).

```bash
name=<nome>        # (obrigatório) nome da propriedade
file=<nome>        # nome do ficheiro
path=<caminho>     # caminho do ficheiro
```

### `property:read`

Ler um valor de propriedade de um ficheiro (predefinido: ficheiro ativo).

```bash
name=<nome>        # (obrigatório) nome da propriedade
file=<nome>        # nome do ficheiro
path=<caminho>     # caminho do ficheiro
```

## Publish

Comandos para [[Introdução ao Obsidian Publish|Obsidian Publish]].

### `publish:site`

Mostrar informação do site publish (slug, URL).

### `publish:list`

Listar ficheiros publicados.

```bash
total              # devolver contagem de ficheiros publicados
```

### `publish:status`

Listar alterações de publicação.

```bash
total              # devolver contagem de alterações
new                # mostrar apenas ficheiros novos
changed            # mostrar apenas ficheiros alterados
deleted            # mostrar apenas ficheiros eliminados
```

### `publish:add`

Publicar um ficheiro ou todos os ficheiros alterados (predefinido: ficheiro ativo).

```bash
file=<nome>        # nome do ficheiro
path=<caminho>     # caminho do ficheiro

changed            # publicar todos os ficheiros alterados
```

### `publish:remove`

Despublicar um ficheiro (predefinido: ficheiro ativo).

```bash
file=<nome>        # nome do ficheiro
path=<caminho>     # caminho do ficheiro
```

### `publish:open`

Abrir ficheiro no site publicado (predefinido: ficheiro ativo).

```bash
file=<nome>        # nome do ficheiro
path=<caminho>     # caminho do ficheiro
```

## Notas aleatórias

Comandos para [[Nota aleatória]].

### `random`

Abrir uma nota aleatória.

```bash
folder=<caminho>   # limitar a pasta

newtab             # abrir num novo separador
```

### `random:read`

Ler uma nota aleatória (inclui caminho).

```bash
folder=<caminho>   # limitar a pasta
```

## Pesquisa

Comandos para [[Pesquisar]].

### `search`

Pesquisar texto no cofre. Devolve caminhos de ficheiros correspondentes.

```bash
query=<texto>      # (obrigatório) consulta de pesquisa
path=<pasta>       # limitar a pasta
limit=<n>          # máximo de ficheiros
format=text|json   # formato de saída (predefinido: text)

total              # devolver contagem de correspondências
case               # diferencia maiúsculas de minúsculas
```

### `search:context`

Pesquisar com contexto de linha correspondente. Devolve saída estilo grep `caminho:linha: texto`.

```bash
query=<texto>      # (obrigatório) consulta de pesquisa
path=<pasta>       # limitar a pasta
limit=<n>          # máximo de ficheiros
format=text|json   # formato de saída (predefinido: text)

case               # diferencia maiúsculas de minúsculas
```

### `search:open`

Abrir vista de pesquisa.

```bash
query=<texto>      # consulta de pesquisa inicial
```

## Sync

Comandos para [[Introdução ao Obsidian Sync|Obsidian Sync]].

> [!tip] Sincronizar sem a aplicação de ambiente de trabalho
> Estes comandos controlam o Sync dentro da aplicação Obsidian em execução. Para sincronizar cofres a partir da linha de comandos sem a aplicação de ambiente de trabalho, consulte [[Sync sem interface]].

### `sync`

Pausar ou retomar o sync.

```bash
on                 # retomar sync
off                # pausar sync
```

### `sync:status`

Mostrar estado e utilização do sync.

### `sync:history`

Listar histórico de versões do sync para um ficheiro (predefinido: ficheiro ativo).

```bash
file=<nome>        # nome do ficheiro
path=<caminho>     # caminho do ficheiro

total              # devolver contagem de versões
```

### `sync:read`

Ler uma versão do sync (predefinido: ficheiro ativo).

```bash
file=<nome>        # nome do ficheiro
path=<caminho>     # caminho do ficheiro
version=<n>        # (obrigatório) número da versão
```

### `sync:restore`

Restaurar uma versão do sync (predefinido: ficheiro ativo).

```bash
file=<nome>        # nome do ficheiro
path=<caminho>     # caminho do ficheiro
version=<n>        # (obrigatório) número da versão
```

### `sync:open`

Abrir histórico do sync (predefinido: ficheiro ativo).

```bash
file=<nome>        # nome do ficheiro
path=<caminho>     # caminho do ficheiro
```

### `sync:deleted`

Listar ficheiros eliminados no sync.

```bash
total              # devolver contagem de ficheiros eliminados
```

## Etiquetas

Comandos para [[Etiquetas]].

### `tags`

Listar etiquetas no cofre. Use `active` ou `file`/`path` para mostrar etiquetas de um ficheiro específico.

```bash
file=<nome>        # nome do ficheiro
path=<caminho>     # caminho do ficheiro
sort=count         # ordenar por contagem (predefinido: nome)

total              # devolver contagem de etiquetas
counts             # incluir contagens de etiquetas
format=json|tsv|csv  # formato de saída (predefinido: tsv)
active             # mostrar etiquetas do ficheiro ativo
```

### `tag`

Obter informação da etiqueta.

```bash
name=<etiqueta>    # (obrigatório) nome da etiqueta

total              # devolver contagem de ocorrências
verbose            # incluir lista de ficheiros e contagem
```

## Tarefas

Comandos para gestão de tarefas.

### `tasks`

Listar tarefas no cofre. Use `active` ou `file`/`path` para mostrar tarefas de um ficheiro específico.

```bash
file=<nome>        # filtrar por nome de ficheiro
path=<caminho>     # filtrar por caminho de ficheiro
status="<char>"    # filtrar por carácter de estado

total              # devolver contagem de tarefas
done               # mostrar tarefas concluídas
todo               # mostrar tarefas por concluir
verbose            # agrupar por ficheiro com números de linha
format=json|tsv|csv  # formato de saída (predefinido: text)
active             # mostrar tarefas do ficheiro ativo
daily              # mostrar tarefas da nota diária
```

**Exemplos:**

```bash
# Listar todas as tarefas no cofre
tasks

# Listar tarefas por concluir no cofre
tasks todo

# Listar tarefas concluídas de um ficheiro específico
tasks file=Receita done

# Listar tarefas da nota diária de hoje
tasks daily

# Contar tarefas na nota diária
tasks daily total

# Listar tarefas com caminhos de ficheiros e números de linha
tasks verbose

# Filtrar por estado personalizado (aspas para caracteres especiais)
tasks 'status=?'
```

### `task`

Mostrar ou atualizar uma tarefa.

```bash
ref=<caminho:linha>  # referência da tarefa (caminho:linha)
file=<nome>        # nome do ficheiro
path=<caminho>     # caminho do ficheiro
line=<n>           # número da linha
status="<char>"    # definir carácter de estado

toggle             # alternar estado da tarefa
daily              # nota diária
done               # marcar como concluída
todo               # marcar como por fazer
```

**Exemplos:**

```bash
# Mostrar informação da tarefa
task file=Receita line=8
task ref="Receita.md:8"

# Alternar conclusão da tarefa
task ref="Receita.md:8" toggle

# Alternar tarefa na nota diária
task daily line=3 toggle

# Definir estado da tarefa
task file=Receita line=8 done      # → [x]
task file=Receita line=8 todo      # → [ ]
task file=Receita line=8 status=-  # → [-]
task daily line=3 done             # Marcar tarefa da nota diária como concluída
```


## Modelos

Comandos para [[Modelos]].

### `templates`

Listar modelos.

```bash
total              # devolver contagem de modelos
```

### `template:read`

Ler conteúdo do modelo.

```bash
name=<modelo>      # (obrigatório) nome do modelo
title=<título>     # título para resolução de variáveis

resolve            # resolver variáveis do modelo
```

### `template:insert`

Inserir modelo no ficheiro ativo.

```bash
name=<modelo>      # (obrigatório) nome do modelo
```

**Notas:**
- A opção `resolve` processa variáveis `{{date}}`, `{{time}}`, `{{title}}`
- Use `create path=<caminho> template=<nome>` para criar um ficheiro com um modelo

## Temas e excertos

Comandos para [[Temas]] e [[Fragmentos CSS]].

### `themes`

Listar temas instalados.

```bash
versions           # incluir números de versão
```

### `theme`

Mostrar tema ativo ou obter informação.

```bash
name=<nome>        # nome do tema para detalhes
```

### `theme:set`

Definir tema ativo.

```bash
name=<nome>        # (obrigatório) nome do tema (vazio para predefinido)
```

### `theme:install`

Instalar um tema da comunidade.

```bash
name=<nome>        # (obrigatório) nome do tema

enable             # ativar após instalação
```

### `theme:uninstall`

Desinstalar um tema.

```bash
name=<nome>        # (obrigatório) nome do tema
```

### `snippets`

Listar excertos CSS instalados.

### `snippets:enabled`

Listar excertos CSS ativados.

### `snippet:enable`

Ativar um excerto CSS.

```bash
name=<nome>        # (obrigatório) nome do excerto
```

### `snippet:disable`

Desativar um excerto CSS.

```bash
name=<nome>        # (obrigatório) nome do excerto
```

## Notas únicas

Comandos para [[Criador de notas únicas]].

### `unique`

Criar nota única.

```bash
name=<texto>       # nome da nota
content=<texto>    # conteúdo inicial
paneType=tab|split|window    # tipo de painel para abrir

open               # abrir ficheiro após criação
```

## Cofre

### `vault`

Mostrar informação do cofre.

```bash
info=name|path|files|folders|size  # devolver apenas informação específica
```

### `vaults`

Listar cofres conhecidos.

```bash
total              # devolver contagem de cofres
verbose            # incluir caminhos dos cofres
```

### `vault:open`

Mudar para um cofre diferente (apenas TUI).

```bash
name=<nome>        # (obrigatório) nome do cofre
```

## Visualizador web

Comandos para [[Visualizador web]].

### `web`

Abrir URL no visualizador web.

```bash
url=<url>          # (obrigatório) URL a abrir

newtab             # abrir num novo separador
```

## Contagem de palavras

Comandos para [[Contagem de palavras]].

### `wordcount`

Contar palavras e caracteres (predefinido: ficheiro ativo).

```bash
file=<nome>        # nome do ficheiro
path=<caminho>     # caminho do ficheiro

words              # devolver apenas contagem de palavras
characters         # devolver apenas contagem de caracteres
```

## Área de trabalho

Comandos para [[Área de trabalho]] e o plugin [[Áreas de trabalho]].

### `workspace`

Mostrar árvore da área de trabalho.

```bash
ids                # incluir IDs dos itens da área de trabalho
```

### `workspaces`

Listar áreas de trabalho guardadas.

```bash
total              # devolver contagem de áreas de trabalho
```

### `workspace:save`

Guardar esquema atual como área de trabalho.

```bash
name=<nome>        # nome da área de trabalho
```

### `workspace:load`

Carregar uma área de trabalho guardada.

```bash
name=<nome>        # (obrigatório) nome da área de trabalho
```

### `workspace:delete`

Eliminar uma área de trabalho guardada.

```bash
name=<nome>        # (obrigatório) nome da área de trabalho
```

### `tabs`

Listar separadores abertos.

```bash
ids                # incluir IDs dos separadores
```

### `tab:open`

Abrir um novo separador.

```bash
group=<id>         # ID do grupo de separadores
file=<caminho>     # ficheiro a abrir
view=<tipo>        # tipo de vista a abrir
```

### `recents`

Listar ficheiros abertos recentemente.

```bash
total              # devolver contagem de ficheiros recentes
```

## Comandos para programadores

Comandos para ajudar a desenvolver [[Plugins da comunidade]] e [[Temas]]. Saiba mais visitando a [Documentação para Programadores do Obsidian](https://docs.obsidian.md).

### `devtools`

Alternar ferramentas de desenvolvimento Electron.

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

Tirar uma captura de ecrã (devolve PNG em base64).

```bash
path=<ficheiro>    # caminho do ficheiro de saída
```

### `dev:console`

Mostrar mensagens de consola capturadas.

```bash
limit=<n>                        # máximo de mensagens a mostrar (predefinido 50)
level=log|warn|error|info|debug  # filtrar por nível de log

clear                            # limpar o buffer da consola
```

### `dev:css`

Inspecionar CSS com localizações de origem.

```bash
selector=<css>     # (obrigatório) seletor CSS
prop=<nome>        # filtrar por nome de propriedade
```

### `dev:dom`

Consultar elementos DOM.

```bash
selector=<css>     # (obrigatório) seletor CSS
attr=<nome>        # obter valor do atributo
css=<prop>         # obter valor da propriedade CSS

total              # devolver contagem de elementos
text               # devolver conteúdo de texto
inner              # devolver innerHTML em vez de outerHTML
all                # devolver todas as correspondências em vez da primeira
```

### `dev:mobile`

Alternar emulação móvel.

```bash
on                 # ativar emulação móvel
off                # desativar emulação móvel
```

### `eval`

Executar JavaScript e devolver resultado.

```bash
code=<javascript>  # (obrigatório) código JavaScript a executar
```

## Atalhos de teclado

Estes atalhos estão disponíveis na [[#Usar a interface de terminal|TUI]].

### Navegação

| Ação                                                     | Atalho          |
| -------------------------------------------------------- | --------------- |
| Mover cursor para a esquerda                             | `←` / `Ctrl+B`  |
| Mover cursor para a direita (aceita sugestão no fim da linha) | `→` / `Ctrl+F` |
| Saltar para o início da linha                            | `Ctrl+A`        |
| Saltar para o fim da linha                               | `Ctrl+E`        |
| Recuar uma palavra                                       | `Alt+B`         |
| Avançar uma palavra                                      | `Alt+F`         |

### Edição

| Ação                             | Atalho                      |
| -------------------------------- | --------------------------- |
| Eliminar até ao início da linha  | `Ctrl+U`                    |
| Eliminar até ao fim da linha     | `Ctrl+K`                    |
| Eliminar palavra anterior        | `Ctrl+W` / `Alt+Backspace`  |

### Preenchimento automático

| Ação                                                      | Atalho       |
| --------------------------------------------------------- | ------------ |
| Entrar no modo de sugestão / aceitar sugestão selecionada | `Tab`        |
| Sair do modo de sugestão                                  | `Shift+Tab`  |
| Entrar no modo de sugestão (a partir de entrada nova)     | `↓`          |
| Aceitar primeira/sugestão selecionada (no fim da linha)   | `→`          |

### Histórico

| Ação                                                              | Atalho          |
| ----------------------------------------------------------------- | --------------- |
| Entrada anterior do histórico / navegar sugestões para cima       | `↑` / `Ctrl+P`  |
| Entrada seguinte do histórico / navegar sugestões para baixo      | `↓` / `Ctrl+N`  |
| Pesquisa inversa no histórico (escreva para filtrar, `Ctrl+R` para ciclar) | `Ctrl+R` |

### Outros

| Ação                                                          | Atalho               |
| ------------------------------------------------------------- | -------------------- |
| Executar comando ou aceitar sugestão                          | `Enter`              |
| Anular preenchimento automático / sair do modo de sugestão / limpar entrada | `Escape`  |
| Limpar ecrã                                                   | `Ctrl+L`             |
| Sair                                                          | `Ctrl+C` / `Ctrl+D`  |

## Resolução de problemas

Se estiver a ter dificuldades em executar a CLI do Obsidian:

- Certifique-se de que está a usar a versão mais recente do [[Atualizar Obsidian|instalador do Obsidian]] (1.12.4 ou superior).
- Reinicie o terminal após registar a CLI para que as alterações ao PATH entrem em vigor.
- O Obsidian tem de estar em execução. A CLI liga-se à instância do Obsidian em execução. Se o Obsidian não estiver em execução, o primeiro comando da CLI deve iniciar a aplicação.

### Windows

A CLI do Obsidian no Windows requer o instalador do Obsidian 1.12.4+. Consulte [[Atualizar Obsidian|Atualização da versão do instalador]].

O Windows usa um redirecionador de terminal que liga o Obsidian ao stdin/stdout corretamente. Isto é necessário porque o Obsidian normalmente executa como uma aplicação GUI que é incompatível com saídas de terminal no Windows. Quando instala o Obsidian 1.12.4+, o redirecionador de terminal `Obsidian.com` será adicionado na pasta onde instalou o ficheiro `Obsidian.exe`.

### macOS

O registo da CLI adiciona o diretório do binário do Obsidian ao seu PATH via `~/.zprofile`. Se estiver a ter dificuldades, verifique o seguinte:

O seu ficheiro `~/.zprofile` deve conter a seguinte linha. Se estiver em falta, pode adicioná-la manualmente:

```
export PATH="$PATH:/Applications/Obsidian.app/Contents/MacOS"
```

#### Shells alternativos

O registo da CLI apenas modifica `~/.zprofile`, que é usado pelo zsh (o shell predefinido do macOS). Se usar um shell diferente, adicione o diretório do binário do Obsidian ao ficheiro de configuração do seu shell manualmente:

- Bash: adicione `export PATH="$PATH:/Applications/Obsidian.app/Contents/MacOS"` a `~/.bash_profile`
- Fish: execute `fish_add_path /Applications/Obsidian.app/Contents/MacOS`


### Linux

O registo da CLI cria um symlink em `/usr/local/bin/obsidian` apontando para o binário do Obsidian (requer sudo).

#### AppImage

Para instalações AppImage, o symlink aponta para o ficheiro `.AppImage` em vez do binário interno, uma vez que o caminho de montagem muda a cada arranque. Se o sudo falhar, o symlink é criado em `~/.local/bin/obsidian` como alternativa. Se estiver a ter dificuldades, verifique o seguinte.

Verifique que o symlink existe e aponta para o binário correto:

```
ls -l /usr/local/bin/obsidian
```

Se o symlink estiver em falta, crie-o manualmente:

```
sudo ln -s /path/to/obsidian /usr/local/bin/obsidian
```

Se o symlink foi criado em `~/.local/bin/`, certifique-se de que esse diretório está no seu PATH. Adicione o seguinte ao seu `~/.bashrc` ou `~/.zshrc`:

```
export PATH="$PATH:$HOME/.local/bin"
```

Se o symlink quebrar após mover ou renomear o ficheiro `.AppImage`, registe novamente a CLI ou atualize o symlink manualmente.

#### Snap

O pacote Snap armazena dados de compilações Insider no seu próprio diretório de dados de utilizador. Se a CLI não detetar o `.asar` insider, defina `XDG_CONFIG_HOME` para apontar para o caminho de configuração do Snap:

```
export XDG_CONFIG_HOME="$HOME/snap/obsidian/current/.config"
```

Adicione isto ao seu `~/.bashrc` ou `~/.zshrc` para torná-lo persistente.


#### Flatpak

O Obsidian tenta fazer isto automaticamente, mas abaixo estão as instruções manuais. Se for uma instalação do sistema:

```
ln -s /var/lib/flatpak/exports/bin/md.obsidian.Obsidian ~/.local/bin/obsidian
```

Se for uma instalação de utilizador:

```
ln -s ~/.local/share/flatpak/exports/bin/md.obsidian.Obsidian ~/.local/bin/obsidian
```
