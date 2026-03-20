---
permalink: import/textbundle
---
O Obsidian permite importar facilmente arquivos [Textbundle](https://textbundle.org/) usando o [[Importador|plugin Importador]] oficial.

Se você está importando notas de um aplicativo específico, pode ser útil primeiro revisar a lista de aplicativos suportados pelo [[Importador|plugin Importador]] para verificar se existe um conversor específico que preservará melhor os dados que você está migrando.

O formato Textbundle agrupa texto Markdown e todas as imagens referenciadas em um único arquivo, proporcionando uma maneira mais fluida de exportar dados de um aplicativo isolado (sandboxed). A exportação em Textbundle é suportada por [muitos aplicativos](https://textbundle.org/), incluindo Agenda, Craft, Taio, Ulysses, Zettlr, e outros.

## Importar arquivos Textbundle para o Obsidian

Você precisará do plugin oficial [[Importador]] do Obsidian, que pode ser [instalado aqui](obsidian://show-plugin?id=obsidian-importer).

1. Abra as **[[Configurações]]**.
2. Vá para **Plugins da comunidade** e [instale o Importador](obsidian://show-plugin?id=obsidian-importer).
3. Ative o plugin Importador.
4. Abra o plugin **Importador** usando a paleta de comandos ou o ícone no menu lateral.
5. Em **Formatar arquivo** escolha **Textbundle (.textbundle, .textpack).**
6. Selecione a localização dos seus arquivos Textbundle ou Textpack. Arquivos zip também são suportados.
7. Clique em **Importar** e aguarde até que a importação seja concluída.
8. Pronto!

## Solução de problemas

### Nenhum arquivo selecionado para importação

A importação de Textbundle só pode importar um arquivo Textbundle por vez, e apenas em dispositivos Mac. Em vez disso, você pode comprimir todos os arquivos Textbundle que deseja importar em um único arquivo .zip e importá-lo a partir de qualquer dispositivo.
