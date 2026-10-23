---
permalink: import/textbundle
cssclasses:
  - soft-embed
---
O Obsidian permite importar facilmente ficheiros [Textbundle](https://textbundle.org/) utilizando o [[Importador|plugin Importador]] oficial.

Se está a importar notas de uma aplicação específica, pode querer primeiro rever a lista de aplicações suportadas pelo [[Importador|plugin Importador]] para verificar se existe um conversor específico que preserve melhor os dados que está a migrar.

O formato Textbundle agrupa texto Markdown e todas as imagens referenciadas num único ficheiro, proporcionando uma forma mais fluida de mover dados de uma aplicação em sandbox. A exportação Textbundle é suportada por [muitas aplicações](https://textbundle.org/), incluindo Agenda, Craft, Taio, Ulysses, Zettlr, entre outras.

## Importar ficheiros Textbundle para o Obsidian

Vai precisar do plugin oficial [[Importador]] do Obsidian, que pode [instalar aqui](obsidian://show-plugin?id=obsidian-importer).

1. Abra as **[[Definições]]**.
2. Vá a **Plugins da comunidade** e [instale o Importador](obsidian://show-plugin?id=obsidian-importer).
3. Ative o plugin Importador.
4. Abra o plugin **Importador** utilizando a paleta de comandos ou o ícone na barra de ferramentas.
5. Em **Formatação de ficheiro** escolha **Textbundle (.textbundle, .textpack).**
6. Selecione a localização dos seus ficheiros Textbundle ou Textpack. Ficheiros zip também são suportados.
7. Selecione **Importar** para rever o modelo gerado e pré-visualizar exemplos das suas notas.
8. Selecione **Importar** novamente e aguarde até que a importação termine.

## Personalizar notas importadas

Antes de a importação começar, o Importador mostra uma pré-visualização gerada a partir dos ficheiros Textbundle selecionados. Pode editar o modelo gerado ou escolher um modelo Markdown do seu cofre. Consulte [[Modelos do Importador]].

## Resolução de problemas

### Nenhum ficheiro selecionado para importação

A importação de Textbundle só consegue importar um ficheiro Textbundle de cada vez, e apenas em dispositivos Mac. Em alternativa, pode comprimir todos os ficheiros Textbundle que deseja importar num único ficheiro .zip e importar este em qualquer dispositivo.

## Modelos

Use [[Modelos do Importador|Modelos do Importador]] para configurar totalmente como os seus dados são importados. 

![[Modelos do Importador#Variables]]
