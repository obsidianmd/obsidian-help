---
permalink: properties
cssclasses:
  - soft-embed
publish: true
mobile: false
description: Propriedades permitem organizar informações sobre uma nota. Propriedades contêm dados estruturados como texto, links, datas, caixas de seleção e números.
---
Propriedades permitem organizar informações sobre uma nota. Propriedades contêm dados estruturados como texto, links, datas, caixas de seleção e números. Propriedades também podem ser usadas em combinação com [[Plugins da comunidade]] que podem fazer coisas úteis com seus dados estruturados.

## Adicionar propriedades a uma nota

Existem várias maneiras de adicionar uma propriedade a uma nota:

- Use o [[Paleta de comandos|comando]] **Adicionar propriedade**.
- Use a [[Teclas de atalho|tecla de atalho]] **`Cmd/Ctrl+;`**.
- Escolha **Adicionar propriedade** no menu **Mais ações** (acessado pelo ícone de três pontos ou clicando com o botão direito na aba).
- Digite `---` no início do arquivo.

Depois de adicionar uma propriedade, uma linha aparecerá no topo do arquivo com duas entradas: o _nome_ da propriedade e o _valor_ da propriedade.

Para o nome, você pode escolher o que quiser. O Obsidian fornece várias propriedades padrão: `tags`, `cssclasses` e `aliases`.

Depois de escolher o nome da propriedade, você pode atribuir um valor a ela.

### Tipos de propriedade

Além de um nome e valor, propriedades também têm um _tipo_. O tipo de uma propriedade determina que tipo de valores ela pode armazenar e como o Obsidian as trata. Para alterar o tipo de uma propriedade, clique no ícone de tipo ao lado do nome da propriedade e selecione uma opção diferente. Você também pode gerenciar tipos de propriedade usando o plugin nativo [[Visão de propriedades]].

O Obsidian suporta os seguintes tipos de propriedade:

- **[[#Texto]]**
- **[[#Lista]]**
- **[[#Número]]**
- **[[#Caixa de seleção]]**
- **[[#Data]]**
- **[[#Data & hora]]**
- **[[#Etiquetas]]**

Uma vez que um tipo de propriedade é atribuído a um nome de propriedade, todas as propriedades com esse nome em todo o seu cofre usarão o mesmo tipo.

## Usos avançados

### Pesquisar propriedades

Propriedades têm sua própria [[Pesquisa|sintaxe de pesquisa]] que você pode usar junto com outros termos e operadores de pesquisa. [[Pesquisa#Pesquisar propriedades|Veja a sintaxe de pesquisa para propriedades]].

### Modelos

Você pode adicionar propriedades a [[Plugins/Modelos|Modelos]].

Quando você insere um modelo na nota ativa, todas as propriedades do modelo serão adicionadas à nota. O Obsidian também mesclará quaisquer propriedades que existam na sua nota com as propriedades do modelo. ^templates-properties

### Renomear propriedades

Você pode renomear uma propriedade clicando com o botão direito nela na [[Visão de propriedades|visualização Todas as propriedades]].

### Modos de exibição

Você pode alterar como as propriedades são exibidas na sua nota indo em **[[Configurações]] → Editor → Propriedades nos documentos**. As opções são:

- **Visíveis** (padrão) – exibe propriedades no topo da nota, se houver alguma.
- **Escondidas** – oculta propriedades, que ainda podem ser exibidas na barra lateral via [[Visão de propriedades]].
- **Original** – exibe propriedades em formato YAML de texto simples.

### Trechos CSS

Você pode usar [[Trechos CSS]] para alterar a aparência de notas específicas.

### Não suportado

Alguns recursos não são atualmente suportados no Obsidian:

- **Propriedades aninhadas**: Para visualizar propriedades aninhadas, recomendamos usar o [[Visualizações e modo de edição#Modo de origem|modo de origem]].
- **Edição em massa de propriedades**: Para edição em massa aprofundada fora da [[Visão de propriedades]], recomendamos usar ferramentas de edição em massa como VSCode, scripts e plugins da comunidade.
- **Markdown em propriedades**: Esta é uma limitação intencional, pois propriedades são destinadas a pequenas porções atômicas de informação que são legíveis tanto por humanos quanto por máquinas.

## Teclas de atalho

### Adicionar uma propriedade

| Ação | Tecla de atalho |
|---|---|
|Adicionar nova propriedade|`Cmd + ;`|

### Navegar entre propriedades

Quando uma propriedade está em foco

| Ação | Tecla de atalho |
|---|---|
|Focar próxima propriedade|`Seta para baixo` ou `Tab`|
|Focar propriedade anterior|`Seta para cima` ou `Shift+Tab`|
|Ir para o editor|`Alt+Seta para baixo`|

### Selecionar propriedades

| Ação | Tecla de atalho |
|---|---|
|Estender seleção para cima|`Shift+Seta para cima`|
|Estender seleção para baixo|`Shift+Seta para baixo`|
|Selecionar tudo|`Cmd+A`|

### Editar propriedades

| Ação | Tecla de atalho |
|---|---|
|Editar nome da propriedade|`Seta para esquerda`|
|Editar valor da propriedade|`Seta para direita`|
|Focar propriedade|`Escape`|
|Excluir propriedade|`Cmd+Backspace`<br><br>se alguma propriedade estiver selecionada, excluirá a seleção.|
|Desfazer|`Cmd+Z`|
|Refazer|`Cmd+Shift+Z`|

### Vim (avançado)

| Ação | Tecla de atalho |
|---|---|
|Mover para baixo|`j`|
|Mover para cima|`k`|
|Focar chave|`h`|
|Focar valor|`l`|
|Focar valor (cursor no final)|`A`|
|Focar valor (cursor no início)|`i`|
|Criar nova propriedade|`o`|

## Formato de propriedade

Propriedades são armazenadas no formato [YAML](https://yaml.org/) no topo do arquivo. YAML é um formato popular que é fácil de ler tanto por humanos quanto por computadores.

Os nomes das propriedades são separados de seus valores por dois pontos seguidos de um espaço:

```yaml
---
name: value
---
```

Embora a ordem de cada par nome-valor não importe, cada nome deve ser único dentro de uma nota. Por exemplo, você não pode ter mais de uma propriedade `tags`.

Os valores podem ser [[#Texto|texto]], [[#Número|números]], [[#Caixa de seleção|caixas de seleção]], [[#Data|datas]], [[#Data & hora|datas e horas]] ou [[#Lista|listas]].

### Texto

Propriedades de texto contêm uma única linha de texto. A formatação Markdown não é renderizada em propriedades de texto. Hashtags não criam tags quando usadas em propriedades de texto.

Propriedades de texto podem conter URLs e [[Links internos]] usando a sintaxe `[[Link]]`. [[Links internos]] em propriedades de texto devem ser cercados com aspas. O Obsidian adicionará automaticamente essas aspas se você inserir manualmente links internos nas propriedades, mas tenha cuidado ao adicioná-las ao usar plugins de modelo.

```yaml
---
title: A New Hope
link: "[[Episode IV]]"
url: https://www.example.com
---
```

### Lista

Propriedades de lista contêm múltiplos valores. Cada valor em uma lista aparece em sua própria linha, precedido por um hífen (-) e um espaço.

Os valores de lista podem conter texto, números e [[Links internos]]. Ao usar [[Links internos]] em propriedades de lista, cerque-os com aspas.

```yaml
---
cast: 
  - Mark Hamill
  - Harrison Ford
  - Carrie Fisher
links:
  - "[[Link]]" 
  - "[[Link2]]"
---
```

### Número

Propriedades do tipo número devem sempre ser um número literal, não uma expressão com operadores. Inteiros e decimais são permitidos.

```yaml
---
year: 1977
pie: 3.14
---
```

### Caixa de seleção

Propriedades de caixa de seleção são `true` ou `false`. Na Visualização ao vivo, isso é exibido como uma caixa de seleção.

```yaml
---
favorite: true
reply: false
last: # Valor indeterminado; frequentemente tratado como false
```

### Data

Propriedades de data são armazenadas no seguinte formato:

```yaml
---
date: 2020-08-21
---
```

O seletor de data segue o formato padrão de data e hora do seu sistema operacional. Você pode alterá-lo nas preferências do sistema:

> [!info]- Windows
> **[[Configurações]] → Hora e Idioma → Idioma e Região → Formato Regional → Alterar Formatos**
> 
> ![[Windows-OS-DateTime.png#interface]]

> [!info]- Mac OS
> **Preferências do Sistema → Idioma e Região → Formato de data**
> 
> ![[Mac-OS-DateTime.png|450]]

Com o plugin [[Notas diárias]] ativado, a propriedade de data funcionará adicionalmente como um link interno para a nota diária correspondente àquela data.

![[Notas diárias#^daily-notes-date]]

### Data & hora

Propriedades de data & hora incluem tanto uma data quanto um horário específico, armazenadas no seguinte formato:

```yaml
---
time: 2020-08-21T10:30:00
---
```

Assim como as [[#Data|propriedades de data]], o seletor de data e hora segue o formato padrão do seu sistema operacional. Você pode alterá-lo nas preferências do sistema.

### Etiquetas

Propriedades de etiquetas são um tipo de propriedade especial usado exclusivamente pela propriedade `tags`. Este tipo de propriedade não pode ser atribuído a outras propriedades.

Propriedades de etiquetas são formatadas como uma lista, com cada tag em sua própria linha precedida por um hífen (-) e um espaço.

```yaml
---
tags: 
  - journal
  - personal
  - draft
---
```

A propriedade `tags` é uma das [[#Propriedades padrão]] do Obsidian. Veja [[Tags|Tags]] para mais informações sobre o uso de tags no Obsidian.

### Propriedades JSON

Embora recomendemos usar YAML para definir propriedades, você também pode defini-las usando [JSON](https://www.json.org/):

```json
---
{
  "tags": ["journal"],
  "publish": false
}
---
```

Note que o bloco JSON será lido, interpretado e salvo como YAML.

## Propriedades padrão

O Obsidian vem com um conjunto de propriedades padrão:

| Propriedade  | Tipo  | Descrição                                                    |
| ------------ | ----- | ------------------------------------------------------------ |
| `tags`       | Lista | Veja [[Tags\|Tags]].                 |
| `aliases`    | Lista | Veja [[Apelidos]].                                          |
| `cssclasses` | Lista | Permite estilizar notas individuais usando [[Trechos CSS]]. |

### Propriedades para Obsidian Publish

As seguintes propriedades padrão podem ser usadas com [[Introdução ao Obsidian Publish|Obsidian Publish]]:

| Propriedade   | Descrição                                                                                                            |
| ------------- | -------------------------------------------------------------------------------------------------------------------- |
| `publish`     | Veja [[Publicar seu conteúdo#Selecionar automaticamente notas para publicar\|Selecionar automaticamente notas para publicar]]. |
| `permalink`   | Veja [[Permalinks\|Permalinks]].                                                                                     |
| `description` | Veja [[Prévias de links em redes sociais#Description\|Descrição]].                                                   |
| `image`       | Veja [[Prévias de links em redes sociais#Image\|Imagem]].                                                            |
| `cover`       | Veja [[Prévias de links em redes sociais#Image\|Imagem]].                                                            |

### Propriedades descontinuadas

Estas propriedades foram descontinuadas no Obsidian 1.4 e devem ser substituídas por seus equivalentes modernos. O suporte a elas como [[#Propriedades padrão]] foi removido no Obsidian 1.9.

| Propriedade | Descrição |
|-|-|
| `tag` | Alias descontinuado para `tags`. |
| `alias` | Alias descontinuado para `aliases`. |
| `cssclass` | Alias descontinuado para `cssclasses`. |

> [!tip] Se você precisar converter os arquivos no seu cofre para o formato de [[#Propriedades padrão]], você pode usar o [[Conversor de formato]] para alterar seu cofre em massa.
