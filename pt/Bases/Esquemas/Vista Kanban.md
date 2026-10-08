---
permalink: bases/views/kanban
---
Kanban é um tipo de [[Vistas|vista]] que pode utilizar no [[Introdução ao Bases|Bases]].

Selecione ![[lucide-kanban-square.svg#icon]] **Kanban** no menu de vistas para apresentar ficheiros como cartões organizados em colunas. Cada coluna representa um valor da propriedade utilizada para agrupar resultados.


> [!note] Requer Obsidian 1.14+
> As vistas Kanban estão disponíveis no Obsidian 1.14 e posterior.


## Agrupar cartões em colunas

Uma vista Kanban requer uma propriedade para agrupar resultados.

1. Selecione **Grupo** na barra de ferramentas. Em telemóveis, selecione **Gráficos → Grupo**.
2. Em **Agrupar por**, escolha uma propriedade.

Ficheiros sem um valor para a propriedade selecionada aparecem na coluna **Nenhum**.

> [!info] 
> Se agrupar por uma fórmula ou uma propriedade de ficheiro diferente de `file.folder`, não pode mover cartões ou colunas, nem criar notas a partir das colunas. Pode ainda [[Vistas#Reordenar, ocultar e adicionar grupos|gerir a ordem e visibilidade dos grupos]] no menu **Grupo**.

## Trabalhar com cartões e colunas

- Arraste um cartão para outra coluna para atualizar a propriedade agrupada nessa nota. Apenas notas Markdown podem ser movidas entre colunas, exceto quando agrupar por `file.folder`, onde mover um cartão move o ficheiro para essa pasta.
- Selecione o ícone de adição no cabeçalho de uma coluna ou ![[lucide-plus.svg#icon]] **Novo** na parte inferior de uma coluna para criar uma nota com o valor dessa coluna.
- Arraste o cabeçalho de uma coluna para alterar a ordem das colunas. Para restaurar a ordem automática, abra **Grupo** e escolha uma ordem de ordenação automática em vez de **Manual**.
- Utilize **Grupo** para [[Vistas#Reordenar, ocultar e adicionar grupos|reordenar, ocultar ou adicionar colunas]].
- Utilize o menu ![[lucide-list.svg#icon]] **Propriedades** para escolher as propriedades apresentadas em cada cartão. A primeira propriedade é apresentada como o título do cartão.

## Definições

As definições da vista Kanban podem ser configuradas nas [[Vistas#Definições da vista|Definições da vista]].

- Ocultar colunas vazias
- Largura da coluna
- Propriedade da imagem
- Ajuste da imagem
- Proporção da imagem

### Ocultar colunas vazias

Oculta colunas que não contêm cartões.

### Largura da coluna

Define a largura de cada coluna e dos seus cartões.

### Propriedade da imagem

Os cartões Kanban suportam uma imagem de capa opcional que é apresentada no topo do cartão. Os valores de propriedade suportados são os mesmos que para a [[Vista de Cartões#Propriedade da imagem|propriedade da imagem na Vista de Cartões]].

### Ajuste da imagem

Se tiver uma propriedade de imagem configurada, esta opção determina como a imagem é apresentada no cartão.

- **Capa:** A imagem preenche a caixa de conteúdo do cartão. Se não couber, a imagem é recortada.
- **Conter:** A imagem é redimensionada até caber dentro da caixa de conteúdo do cartão. A imagem não é recortada.

### Proporção da imagem

A altura da imagem de capa é determinada pela sua proporção. Ajuste esta opção para tornar a imagem mais baixa ou mais alta.
