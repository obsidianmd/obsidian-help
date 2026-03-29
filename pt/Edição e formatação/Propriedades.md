---
permalink: properties
cssclasses:
  - soft-embed
publish: true
mobile: false
description: 'As propriedades permitem organizar informações sobre uma nota. As propriedades contêm dados estruturados, como texto, links, datas, caixas de seleção e números.'
---
As propriedades permitem-lhe organizar informação sobre uma nota. As propriedades contêm dados estruturados como texto, ligações, datas, caixas de seleção e números. As propriedades também podem ser usadas em combinação com [[Plugins da comunidade]] que podem fazer coisas úteis com os seus dados estruturados.

## Adicionar propriedades a uma nota

Existem várias formas de adicionar uma propriedade a uma nota:

- Usar o [[Paleta de comando|comando]] **Adicionar propriedade ao ficheiro**.
- Usar o [[Atalhos de teclado|atalho de teclado]] **`Cmd/Ctrl+;`**.
- Escolher **Adicionar propriedade ao ficheiro** no menu **Mais ações** (acedido pelo ícone de três pontos ou clicando com o botão direito no separador).
- Escrever `---` no início do ficheiro.

Depois de adicionar uma propriedade, aparecerá uma linha no topo do ficheiro com duas entradas: o _nome_ da propriedade e o _valor_ da propriedade.

Para o nome, pode escolher o que quiser. O Obsidian fornece várias propriedades predefinidas: `tags`, `cssclasses` e `aliases`.

Depois de escolher o nome da propriedade, pode atribuir-lhe um valor.

### Tipos de propriedade

Para além de um nome e valor, as propriedades também têm um _tipo_. O tipo de uma propriedade determina que tipo de valores pode armazenar e como o Obsidian os trata. Para alterar o tipo de uma propriedade, clique no ícone de tipo junto ao nome da propriedade e selecione uma opção diferente. Também pode gerir tipos de propriedade usando o plugin principal [[Vista de propriedades]].

O Obsidian suporta os seguintes tipos de propriedade:

- **[[#Texto]]**
- **[[#Lista]]**
- **[[#Número]]**
- **[[#Caixa de seleção]]**
- **[[#Data]]**
- **[[#Data e hora]]**
- **[[#Etiquetas]]**

Uma vez atribuído um tipo de propriedade a um nome de propriedade, todas as propriedades com esse nome no seu cofre utilizarão o mesmo tipo.

## Utilizações avançadas

### Pesquisar propriedades

As propriedades têm a sua própria [[Pesquisar|sintaxe de pesquisa]] que pode usar em conjunto com outros termos e operadores de pesquisa. [[Pesquisar#Pesquisar propriedades|Ver sintaxe de pesquisa para propriedades]].

### Modelos

Pode adicionar propriedades a [[Plugins/Modelos|Modelos]].

Quando insere um modelo na nota ativa, todas as propriedades do modelo serão adicionadas à nota. O Obsidian também irá mesclar quaisquer propriedades que existam na sua nota com as propriedades do modelo. ^templates-properties

### Renomear propriedades

Pode renomear uma propriedade clicando com o botão direito sobre ela na [[Vista de propriedades|vista de todas as propriedades]].

### Modos de exibição

Pode alterar a forma como as propriedades são exibidas na sua nota indo a **[[Definições]] → Editor → Propriedades no documento**. As opções são:

- **Visíveis** (predefinido) – exibe as propriedades no topo da nota, se existirem.
- **Ocultas** – oculta as propriedades, que podem ainda ser exibidas na barra lateral através da [[Vista de propriedades]].
- **Origem** – exibe as propriedades em formato YAML de texto simples.

### Fragmentos CSS

Pode usar [[Fragmentos CSS]] para alterar a aparência de notas específicas.

### Funcionalidades não suportadas

Algumas funcionalidades não são atualmente suportadas no Obsidian:

- **Propriedades aninhadas**: Para visualizar propriedades aninhadas, recomendamos usar o [[Vistas e modo de edição#Modo de origem|modo de origem]].
- **Edição em massa de propriedades**: Para edição em massa aprofundada fora da [[Vista de propriedades]], recomendamos utilizar ferramentas de edição em massa como o VSCode, scripts e plugins da comunidade.
- **Markdown nas propriedades**: Esta é uma limitação intencional, pois as propriedades destinam-se a pequenos fragmentos atómicos de informação que são legíveis tanto por humanos como por máquinas.

## Atalhos de teclado

### Adicionar uma propriedade

| Ação | Atalho de teclado |
|---|---|
|Adicionar nova propriedade|`Cmd + ;`|

### Navegar entre propriedades

Quando uma propriedade está em foco

| Ação | Atalho de teclado |
|---|---|
|Focar na propriedade seguinte|`Seta para baixo` ou `Tab`|
|Focar na propriedade anterior|`Seta para cima` ou `Shift+Tab`|
|Saltar para o editor|`Alt+Seta para baixo`|

### Selecionar propriedades

| Ação | Atalho de teclado |
|---|---|
|Estender seleção para cima|`Shift+Seta para cima`|
|Estender seleção para baixo|`Shift+Seta para baixo`|
|Selecionar tudo|`Cmd+A`|

### Editar propriedades

| Ação | Atalho de teclado |
|---|---|
|Editar nome da propriedade|`Seta para a esquerda`|
|Editar valor da propriedade|`Seta para a direita`|
|Focar na propriedade|`Escape`|
|Eliminar propriedade|`Cmd+Backspace`<br><br>se houver propriedades selecionadas, eliminará a seleção em vez disso.|
|Anular|`Cmd+Z`|
|Refazer|`Cmd+Shift+Z`|

### Vim (avançado)

| Ação | Atalho de teclado |
|---|---|
|Mover para baixo|`j`|
|Mover para cima|`k`|
|Focar na chave|`h`|
|Focar no valor|`l`|
|Focar no valor (Cursor no final)|`A`|
|Focar no valor (Cursor no início)|`i`|
|Criar nova propriedade|`o`|

## Formato das propriedades

As propriedades são armazenadas em formato [YAML](https://yaml.org/) no topo do ficheiro. YAML é um formato popular que é fácil de ler tanto por humanos como por computadores.

Os nomes das propriedades são separados dos seus valores por dois pontos seguidos de um espaço:

```yaml
---
name: value
---
```

Embora a ordem de cada par nome-valor não importe, cada nome deve ser único dentro de uma nota. Por exemplo, não pode ter mais do que uma propriedade `tags`.

Os valores podem ser [[#Texto|texto]], [[#Número|números]], [[#Caixa de seleção|caixas de seleção]], [[#Data|datas]], [[#Data e hora|datas e horas]] ou [[#Lista|listas]].

### Texto

As propriedades de texto contêm uma única linha de texto. A formatação Markdown não é renderizada nas propriedades de texto. Os hashtags não criam etiquetas quando usados em propriedades de texto.

As propriedades de texto podem conter URLs e [[Ligações internas]] usando a sintaxe `[[Ligação]]`. As [[Ligações internas]] nas propriedades de texto devem ser envolvidas com aspas. O Obsidian adicionará automaticamente estas aspas se introduzir manualmente ligações internas nas propriedades, mas tenha cuidado ao adicioná-las quando usar plugins de modelos.

```yaml
---
title: A New Hope
link: "[[Episode IV]]"
url: https://www.example.com
---
```

### Lista

As propriedades de lista contêm múltiplos valores. Cada valor numa lista aparece na sua própria linha, precedido por um hífen (-) e um espaço.

Os valores de lista podem conter texto, números e [[Ligações internas]]. Ao usar [[Ligações internas]] nas propriedades de lista, envolva-as com aspas.

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

As propriedades do tipo número devem ser sempre um número literal, não uma expressão com operadores. Inteiros e decimais são ambos permitidos.

```yaml
---
year: 1977
pie: 3.14
---
```

### Caixa de seleção

As propriedades de caixa de seleção são `true` ou `false`. Na pré-visualização em direto, isto é exibido como uma caixa de seleção.

```yaml
---
favorite: true
reply: false
last: # Valor indeterminado; frequentemente tratado como false
```

### Data

As propriedades de data são armazenadas no seguinte formato:

```yaml
---
date: 2020-08-21
---
```

O seletor de data segue o formato predefinido de data e hora do seu sistema operativo. Pode alterá-lo nas preferências do sistema:

> [!info]- Windows
> **[[Definições]] → Hora e Idioma → Idioma e Região → Formato Regional → Alterar Formatos**
> 
> ![[Windows-OS-DateTime.png#interface]]

> [!info]- Mac OS
> **Preferências do Sistema → Idioma e Região → Formato da data**
> 
> ![[Mac-OS-DateTime.png|450]]

Com o plugin [[Notas diárias]] ativado, a propriedade de data funcionará adicionalmente como uma ligação interna para a nota diária correspondente a essa data.

![[Notas diárias#^daily-notes-date]]

### Data e hora

As propriedades de data e hora incluem tanto uma data como uma hora específica, armazenadas no seguinte formato:

```yaml
---
time: 2020-08-21T10:30:00
---
```

Tal como as [[#Data|propriedades de data]], o seletor de data e hora segue o formato predefinido do seu sistema operativo. Pode alterá-lo nas preferências do sistema.

### Etiquetas

As propriedades de etiquetas são um tipo de propriedade especial usado exclusivamente pela propriedade `tags`. Este tipo de propriedade não pode ser atribuído a outras propriedades.

As propriedades de etiquetas são formatadas como uma lista, com cada etiqueta na sua própria linha precedida por um hífen (-) e um espaço.

```yaml
---
tags: 
  - journal
  - personal
  - draft
---
```

A propriedade `tags` é uma das [[#Propriedades predefinidas]] do Obsidian. Consulte [[Etiquetas]] para mais informações sobre como usar etiquetas no Obsidian.

### Propriedades JSON

Embora recomendemos usar YAML para definir propriedades, também pode definir propriedades usando [JSON](https://www.json.org/):

```json
---
{
  "tags": ["journal"],
  "publish": false
}
---
```

Note que o bloco JSON será lido, interpretado e guardado como YAML.

## Propriedades predefinidas

O Obsidian vem com um conjunto de propriedades predefinidas:

| Propriedade  | Tipo | Descrição                                                    |
| ------------ | ---- | ------------------------------------------------------------ |
| `tags`       | Lista | Ver [[Edição e formatação/Etiquetas\|Etiquetas]].             |
| `aliases`    | Lista | Ver [[Alcunhas]].                                           |
| `cssclasses` | Lista | Permite estilizar notas individuais usando [[Fragmentos CSS]]. |

### Propriedades para o Obsidian Publish

As seguintes propriedades predefinidas podem ser usadas com o [[Introdução ao Obsidian Publish|Obsidian Publish]]:

| Propriedade   | Descrição                                                                                                  |
| ------------- | ---------------------------------------------------------------------------------------------------------- |
| `publish`     | Ver [[Publicar o seu conteúdo#Selecionar automaticamente dados para publicar\|Selecionar automaticamente dados para publicar]]. |
| `permalink`   | Ver [[Ligações permanentes\|Ligações permanentes]].                                                        |
| `description` | Ver [[Pré-visualizações de ligações em redes sociais#Descrição\|Descrição]].                               |
| `image`       | Ver [[Pré-visualizações de ligações em redes sociais#Imagem\|Imagem]].                                     |
| `cover`       | Ver [[Pré-visualizações de ligações em redes sociais#Imagem\|Imagem]].                                     |

### Propriedades descontinuadas

Estas propriedades foram descontinuadas no Obsidian 1.4 e devem ser substituídas pelos seus equivalentes modernos. O suporte para elas como [[#Propriedades predefinidas]] foi removido no Obsidian 1.9.

| Propriedade | Descrição |
|-|-|
| `tag` | Alcunha descontinuada para `tags`. |
| `alias` | Alcunha descontinuada para `aliases`. |
| `cssclass` | Alcunha descontinuada para `cssclasses`. |

> [!tip] Se precisar de converter os seus ficheiros no cofre para o formato das [[#Propriedades predefinidas]], pode usar o [[Importador de formato Markdown]] para alterar o seu cofre em massa.
