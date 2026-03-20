---
permalink: plugins/daily-notes
---
Notas diárias é um [[Plugins nativos|plugin nativo]] que abre uma nota baseada na data de hoje, ou a cria caso ela não exista. Use notas diárias para criar diários, listas de tarefas ou registros diários de coisas que você descobriu durante o dia.

Para abrir a nota diária de hoje, faça uma das seguintes opções:

- Clique em **Abrir a nota de hoje** ( ![[lucide-calendar.svg#icon]] ) no [[Faixa de opções|menu lateral]].
- Execute **Abrir a nota de hoje** a partir da [[Paleta de comandos]].
- [[Teclas de atalho#Definir teclas de atalho|Use uma tecla de atalho]] para o comando **Abrir a nota de hoje**.

Por padrão, o Obsidian cria uma nova nota vazia com o nome da data de hoje no formato AAAA-MM-DD.

> [!tip] Se você preferir manter suas notas diárias em uma pasta separada, pode definir a <u>Nova localização do arquivo</u> nas configurações de plugin para alterar onde o Obsidian cria novas notas diárias.

> [!example]- Subpastas automáticas
> Você pode organizar automaticamente suas notas diárias em pastas usando o recurso **Formato da data**.
> 
> Por exemplo, se você definir o formato da data como `YYYY/MMMM/YYYY-MMM-DD`, suas notas serão criadas como `2023/January/2023-Jan-01`. 
> 
> Você pode explorar mais opções de formatação no site de documentação do [momentJS](https://momentjs.com/docs/#/displaying/format/).

## Criar uma nota diária a partir de modelo

Se suas notas diárias possuem a mesma estrutura, você pode usar um [[Plugins/Modelos|modelo]] para adicionar conteúdo pré-definido às suas notas diárias ao criá-las.

1. Crie uma nova nota chamada "Modelo diário" com o seguinte texto (ou o que fizer sentido para você!):

   ```md
   # {{date:YYYY-MM-DD}}

   ## Tarefas

   - [ ]
   ```

2. Abra as **[[Configurações]]**.
3. Na barra lateral, clique em **Notas diárias** em **Configurações de plugin**.
4. Na caixa de texto ao lado de **Localização do arquivo de modelo**, selecione a nota "Modelo diário".

O Obsidian usará o modelo na próxima vez que você criar uma nova nota diária.

## Notas diárias e propriedades

Quando o plugin Notas diárias está ativado e uma propriedade de data está presente em qualquer nota, o Obsidian tentará automaticamente gerar um link para a nota diária daquele dia específico. Por exemplo, se uma nota intitulada `example.md` incluir uma propriedade de data como `2023-01-01`, essa data se transformará em um link clicável na seção de [[Visualizações e modo de edição#Visualização ao vivo|visualização ao vivo]].

![[daily-notes-and-date-properties.png#interface|300]]
^daily-notes-date
