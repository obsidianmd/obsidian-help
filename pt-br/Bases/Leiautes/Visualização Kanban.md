---
permalink: bases/views/kanban
---
Kanban é um tipo de [[Visualizações|visualização]] que você pode usar no [[Introdução ao Bases|Bases]].

Selecione ![[lucide-kanban-square.svg#icon]] **Kanban** no menu de visualização para exibir arquivos como cartões organizados em colunas. Cada coluna representa um valor da propriedade usada para agrupar os resultados.


> [!warning] Requer Obsidian 1.14+
> Visualizações Kanban requerem Obsidian 1.14, que atualmente está em [[Versões de acesso antecipado|acesso antecipado]].


## Agrupar cartões em colunas

Uma visualização Kanban requer uma propriedade para agrupar os resultados.

1. Selecione ![[lucide-arrow-up-down.svg#icon]] **Ordenar** na barra de ferramentas.
2. Em **Agrupar por**, selecione **Propriedade** e escolha uma propriedade.

Arquivos sem um valor para a propriedade selecionada aparecem na coluna **Nenhum**.

> [!info] 
> Se você agrupar por uma fórmula ou propriedade de arquivo, não poderá mover cartões ou colunas, nem criar notas a partir das colunas. Essas propriedades não podem ser editadas movendo um cartão.

## Trabalhar com cartões e colunas

- Arraste um cartão para outra coluna para atualizar a propriedade agrupada naquela nota. Apenas notas Markdown podem ser movidas entre colunas.
- Selecione o ícone de mais no cabeçalho de uma coluna ou ![[lucide-plus.svg#icon]] **Novo** na parte inferior de uma coluna para criar uma nota com o valor daquela coluna.
- Arraste o cabeçalho de uma coluna para alterar a ordem das colunas. Para restaurar a ordem original, clique com o botão direito em uma coluna e selecione **Redefinir ordem**.
- Use o menu ![[lucide-list.svg#icon]] **Propriedades** para escolher as propriedades exibidas em cada cartão. A primeira propriedade é exibida como o título do cartão.

## Configurações

As configurações da visualização Kanban podem ser configuradas em [[Visualizações#Configurações de visualização|Configurações de visualização]].

- Ocultar colunas vazias
- Largura da coluna
- Propriedade de imagem
- Ajuste de imagem
- Proporção da imagem

### Ocultar colunas vazias

Oculta colunas que não contêm nenhum cartão.

### Largura da coluna

Define a largura de cada coluna e seus cartões.

### Propriedade de imagem

Os cartões Kanban suportam uma imagem de capa opcional que é exibida no topo do cartão. Os valores de propriedade suportados são os mesmos da [[Visualização de cartões#Propriedade de imagem|propriedade de imagem na visualização de cartões]].

### Ajuste de imagem

Se você tiver uma propriedade de imagem configurada, esta opção determina como a imagem é exibida no cartão.

- **Cobrir:** A imagem preenche a caixa de conteúdo do cartão. Se não couber, a imagem é cortada.
- **Conter:** A imagem é redimensionada até caber dentro da caixa de conteúdo do cartão. A imagem não é cortada.

### Proporção da imagem

A altura da imagem de capa é determinada pela sua proporção. Ajuste esta opção para tornar a imagem mais baixa ou mais alta.
