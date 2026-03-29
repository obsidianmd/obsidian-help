---
permalink: plugins/daily-notes
---
Notas diárias é um [[Plugins Base|plugin principal]] que abre uma nota com base na data de hoje, ou cria-a se ainda não existir. Utilize as notas diárias para criar diários, listas de tarefas ou registos diários de coisas que descobriu durante o dia.

Para abrir a nota diária de hoje, pode:

- Clicar em **Abrir nota de hoje** ![[lucide-calendar.svg#icon]] na [[Barra de ferramentas|barra de ferramentas]].
- Executar **Abrir nota de hoje** a partir da [[Paleta de comando]].
- [[Atalhos de teclado#Definir um atalho de teclado|Usar um atalho de teclado]] para o comando **Abrir nota de hoje**.

Por predefinição, o Obsidian cria uma nova nota vazia com o nome da data de hoje no formato AAAA-MM-DD.

> [!tip] Se preferir ter as suas notas diárias numa pasta separada, pode definir a <u>Nova localização do ficheiro</u> nas opções do plugin para alterar onde o Obsidian cria novas notas diárias.

> [!example]- Subpastas automáticas
> Pode organizar automaticamente as suas notas diárias em pastas utilizando a funcionalidade **Formato da data**.
> 
> Por exemplo, se definir o formato da data como `YYYY/MMMM/YYYY-MMM-DD`, as suas notas serão criadas como `2023/January/2023-Jan-01`. 
> 
> Pode explorar mais opções de formatação no site de documentação do [momentJS](https://momentjs.com/docs/#/displaying/format/).

## Criar uma nota diária a partir de um modelo

Se as suas notas diárias têm a mesma estrutura, pode usar um [[Plugins/Modelos|modelo]] para adicionar conteúdo pré-definido às suas notas diárias quando as cria.

1. Crie uma nova nota chamada "Modelo diário" com o seguinte texto (ou o que fizer sentido para si!):

   ```md
   # {{date:YYYY-MM-DD}}

   ## Tarefas

   - [ ]
   ```

2. Abra as **[[Definições]]**.
3. Na barra lateral, clique em **Notas diárias** em **Opções de Plugin**.
4. Na caixa de texto junto a **Localização do ficheiro modelo**, selecione a nota "Modelo diário".

O Obsidian utiliza o modelo na próxima vez que criar uma nova nota diária.

## Notas diárias e propriedades

Quando o plugin Notas diárias está ativado e uma propriedade de data está presente em qualquer nota, o Obsidian tentará automaticamente gerar uma ligação para a nota diária desse dia específico. Por exemplo, se uma nota intitulada `example.md` incluir uma propriedade de data como `2023-01-01`, esta data será transformada numa ligação clicável na secção de [[Vistas e modo de edição#Pré-visualização em direto|pré-visualização em direto]].

![[daily-notes-and-date-properties.png#interface|300]]
^daily-notes-date
