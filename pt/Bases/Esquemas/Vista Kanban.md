---
permalink: bases/views/kanban
---
Kanban é um tipo de [[Vistas|vista]] que pode utilizar no [[Introdução ao Bases|Bases]].

Selecione ![[lucide-kanban-square.svg#icon]] **Kanban** no menu de vistas para apresentar ficheiros como cartões organizados em colunas. Cada coluna representa um valor da propriedade utilizada para agrupar resultados.


> [!warning] Requer Obsidian 1.14+
> As vistas Kanban requerem o Obsidian 1.14, que está atualmente em [[Versões de acesso antecipado|acesso antecipado]].


## Agrupar cartões em colunas

Uma vista Kanban requer uma propriedade para agrupar resultados.

1. Selecione ![[lucide-arrow-up-down.svg#icon]] **Ordenar** na barra de ferramentas.
2. Em **Agrupar por**, selecione **Propriedade** e escolha uma propriedade.

Ficheiros sem um valor para a propriedade selecionada aparecem na coluna **Nenhum**.

> [!info] 
> Se agrupar por uma fórmula ou propriedade de ficheiro, não pode mover cartões ou colunas, nem criar notas a partir das colunas. Estas propriedades não podem ser editadas ao mover um cartão.

## Trabalhar com cartões e colunas

- Arraste um cartão para outra coluna para atualizar a propriedade agrupada nessa nota. Apenas notas Markdown podem ser movidas entre colunas.
- Selecione o ícone de adição no cabeçalho de uma coluna ou ![[lucide-plus.svg#icon]] **Novo** na parte inferior de uma coluna para criar uma nota com o valor dessa coluna.
- Arraste o cabeçalho de uma coluna para alterar a ordem das colunas. Para restaurar a ordem original, clique com o botão direito numa coluna e selecione **Repor ordem**.
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
