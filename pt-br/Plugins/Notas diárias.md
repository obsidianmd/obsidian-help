O plugin de notas diárias abre uma nota baseada da data de hoje, ou cria uma caso não exista. Utilize notas diárias para criar *journals*, lista de tarefas, ou registros diários para coisas que você descobrir ao longo do dia.

Você pode abrir as notas diárias com os seguintes procedimentos:

- Clique **Abrir nota de hoje** (icone do calendário) na fita.
- Execute o comando **Abrir nota de hoje** na [[pt-br/Plugins/Paleta de comandos]].
- [[Custom hotkeys#Setting hotkeys|Use a hotkey]] para o comando de **Abrir nota de hoje**.

Por padrão, o Obsidian cria uma nova nota com a data de hoje como nome, no formato YYYY-MM-DD.

> [!dica]
> Se você preferir ter suas notas diárias em uma pasta separada, você pode configurar a opção **Local para novos arquivos** do plugin para mudar o local onde o Obsidian cria as novas notas.

## Criar uma nota diária a partir de um modelo

Se sua nota diária tiver a mesma estrutura, você pode usar um [[Modelos|modelo]] para adicionar conteúdo pré-definido na sua nota diária quando você criá-la.

1. Crie uma nova nota chamada "Modelo diário" com os seguintes textos (ou qualquer coisa que faça sentido para você!):

   ```md
   # {{data:YYYY-MM-DD}}

   ## Tarefas

   - [ ]
   ```

2. Abra **Configurações**.
3. Na barra lateral, clique em **Notas diárias** na seção de **Plugins Nativos**.
4. Na caixa de texto ao lado de **Local do arquivo modelo**, selecione a nota "Modelo diário".

O Obsidian utilizará o modelo na próxima vez que você criar uma nota diária.
