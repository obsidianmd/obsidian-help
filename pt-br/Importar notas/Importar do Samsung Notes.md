---
permalink: import/samsung-notes
cssclasses:
  - soft-embed
---
O Obsidian permite migrar suas notas do Samsung Notes usando o [[Importador|plugin Importador]]. Isso converte suas notas em arquivos Markdown duráveis que você pode usar com o Obsidian e muitos outros aplicativos.

## Exportar suas notas do Samsung Notes

O Samsung Notes salva cada nota como um arquivo Samsung Notes (`.sdocx`).

1. Abra o Samsung Notes no seu celular ou tablet.
2. Toque e segure uma nota, depois selecione todas as notas que deseja exportar.
3. Toque em **Salvar como arquivo**, depois escolha **Arquivo Samsung Notes**.
4. Escolha uma pasta e toque em **Salvar**.
5. Mova os arquivos `.sdocx` para o dispositivo onde você usa o Obsidian, por exemplo, com um cabo USB, Quick Share ou um armazenamento em nuvem.

Se você tiver muitos arquivos, pode colocá-los em um arquivo `.zip` e importar esse arquivo. O Samsung Notes não inclui suas pastas nos arquivos que salva, mas o Importador mantém as pastas dentro do arquivo `.zip`. Para manter suas notas organizadas, salve as notas de cada pasta do Samsung Notes em uma pasta com o mesmo nome antes de compactá-las.

## Importar seus dados do Samsung Notes para o Obsidian

Você precisará do plugin oficial [[Importador]] do Obsidian, que pode ser [instalado aqui](obsidian://show-plugin?id=obsidian-importer).

1. Abra as **[[Configurações]]**.
2. Vá para **Plugins da comunidade** e [instale o Importador](obsidian://show-plugin?id=obsidian-importer).
3. Ative o plugin Importador.
4. Abra o plugin **Importador** usando a paleta de comandos ou o ícone na faixa de opções.
5. Em **Formato de arquivo**, escolha **Samsung Notes (.sdocx)**.
6. Selecione seus arquivos `.sdocx`, ou um arquivo `.zip` que os contenha.
7. Selecione **Importar** para revisar o modelo gerado e visualizar exemplos das suas notas.
8. Selecione **Importar** novamente e aguarde a importação ser concluída.

## Limitações

- Escrita à mão e formas desenhadas são importadas como uma imagem SVG no final da nota. Os traços mantêm sua forma e cor, mas não a largura variável de uma caneta sensível à pressão. Formas e linhas são importadas em preto.
- Caixas de texto, imagens posicionadas na página e PDFs anotados ainda não são importados.
- Itens de checklist são importados como não marcados.
- Cores de texto, fontes e tamanhos de fonte não são mantidos.
- Desbloqueie notas bloqueadas no Samsung Notes antes de exportá-las.

## Modelos

Use [[Modelos do importador|Modelos do importador]] para configurar completamente como seus dados do Samsung Notes são importados.

![[Modelos do importador#Variáveis]]
