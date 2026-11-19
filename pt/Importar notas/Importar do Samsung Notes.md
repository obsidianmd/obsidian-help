---
permalink: import/samsung-notes
cssclasses:
  - soft-embed
---
O Obsidian permite-lhe migrar as suas notas do Samsung Notes utilizando o [[Importador|plugin Importador]]. Isto converte as suas notas em ficheiros Markdown duráveis que pode utilizar com o Obsidian e muitas outras aplicações.

## Exportar as suas notas do Samsung Notes

O Samsung Notes guarda cada nota como um ficheiro Samsung Notes (`.sdocx`).

1. Abra o Samsung Notes no seu telemóvel ou tablet.
2. Toque e mantenha premida uma nota, depois selecione todas as notas que pretende exportar.
3. Toque em **Guardar como ficheiro**, depois escolha **Ficheiro Samsung Notes**.
4. Escolha uma pasta e toque em **Guardar**.
5. Mova os ficheiros `.sdocx` para o dispositivo onde utiliza o Obsidian, por exemplo com um cabo USB, Quick Share ou uma unidade na nuvem.

Se tiver muitos ficheiros, pode colocá-los num ficheiro `.zip` e importar esse ficheiro em vez disso. O Samsung Notes não inclui as suas pastas nos ficheiros que guarda, mas o Importador mantém as pastas dentro do ficheiro `.zip`. Para manter as suas notas organizadas, guarde as notas de cada pasta do Samsung Notes numa pasta com o mesmo nome antes de as comprimir.

## Importar os seus dados do Samsung Notes para o Obsidian

Vai precisar do plugin oficial [[Importador]] do Obsidian, que pode [instalar aqui](obsidian://show-plugin?id=obsidian-importer).

1. Abra as **[[Definições]]**.
2. Vá a **Plugins da comunidade** e [instale o Importador](obsidian://show-plugin?id=obsidian-importer).
3. Ative o plugin Importador.
4. Abra o plugin **Importador** utilizando a paleta de comandos ou o ícone na barra de ferramentas.
5. Em **Formatação do ficheiro**, escolha **Samsung Notes (.sdocx)**.
6. Selecione os seus ficheiros `.sdocx`, ou um ficheiro `.zip` que os contenha.
7. Selecione **Importar** para rever o modelo gerado e pré-visualizar exemplos das suas notas.
8. Selecione **Importar** novamente e aguarde que a importação termine.

## Limitações

- A escrita manual e as formas desenhadas são importadas como uma imagem SVG no final da nota. Os traços mantêm a sua forma e cor, mas não a largura variável de uma caneta sensível à pressão. As formas e linhas são importadas a preto.
- As caixas de texto, imagens colocadas na página e PDFs anotados ainda não são importados.
- Os itens da lista de verificação são importados como não marcados.
- As cores do texto, fontes e tamanhos de fonte não são mantidos.
- Desbloqueie as notas bloqueadas no Samsung Notes antes de as exportar.

## Modelos

Utilize os [[Modelos do Importador|modelos do Importador]] para configurar totalmente como os seus dados do Samsung Notes são importados.

![[Modelos do Importador#Variáveis]]
