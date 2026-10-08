---
permalink: import/roam
cssclasses:
  - soft-embed
---
O Obsidian permite-lhe migrar facilmente as suas notas do Roam Research utilizando o [[Importador|plugin Importador]]. Isto converte os seus dados do Roam em ficheiros Markdown duráveis que pode usar com o Obsidian e muitas outras aplicações.

## Exportar os seus dados do Roam Research

1. No Roam Research, clique em **Mais ações** ( `•••` ) no canto superior direito e depois selecione **Export All**.
   
   ![[Roam-exporting.png#interface]]
2. Em **Export Format**, selecione "JSON" e depois selecione **Export All** para transferir um arquivo com as suas notas.

## Importar os seus dados do Roam Research para o Obsidian

Vai precisar do plugin oficial [[Importador]] do Obsidian, que pode [instalar aqui](obsidian://show-plugin?id=obsidian-importer).

1. Abra as **[[Definições]]**.
2. Vá a **Plugins da comunidade** e [instale o Importador](obsidian://show-plugin?id=obsidian-importer).
3. Ative o plugin Importador.
4. Abra o plugin **Importador** usando a paleta de comandos ou o ícone na barra de ferramentas.
5. Em **Formatação do ficheiro** escolha **Roam Research (.json).**
6. Selecione a localização do seu ficheiro `.json`.
7. Em **Pasta de destino**, escolha onde os seus ficheiros devem ser importados.
8. Se quiser também importar anexos, ative **Transferir todos os anexos**.
9. Selecione **Importar** para rever o modelo gerado e pré-visualizar exemplos das suas páginas.
10. Selecione **Importar** novamente e aguarde até que a importação termine.

![[Roam-Importer-importing.png]]

## Modelos

Use [[Modelos do Importador|modelos do Importador]] para configurar totalmente como os seus dados do Roam Research são importados.

![[Modelos do Importador#Variables]]
