---
permalink: import/html
cssclasses:
  - soft-embed
---
O Obsidian permite importar facilmente arquivos HTML individuais e pastas inteiras de arquivos HTML usando o [[Importador|plugin Importador]] oficial. Isso é útil se você deseja salvar sites inteiros no formato [[Markdown do Obsidian|Markdown]], ou se deseja importar dados de uma ferramenta que exporta para HTML.

Se você está importando notas de um aplicativo específico, pode ser interessante primeiro revisar a lista de aplicativos suportados pelo [[Importador|plugin Importador]] para verificar se existe um conversor específico que preservará melhor os dados que você está migrando.

## Importar dados HTML para o Obsidian

Você precisará do plugin oficial [[Importador]] do Obsidian, que pode ser [instalado aqui](obsidian://show-plugin?id=obsidian-importer).

1. Abra as **[[Configurações]]**.
2. Vá para **Plugins da comunidade** e [instale o Importador](obsidian://show-plugin?id=obsidian-importer).
3. Ative o plugin Importador.
4. Abra o plugin **Importador** usando a paleta de comandos ou o ícone no menu lateral.
5. Em **Formatar** escolha **HTML (.html).**
6. Selecione a destinação dos seus arquivos ou pastas HTML.
7. Selecione **Importar** para revisar o modelo gerado e visualizar exemplos dos seus arquivos.
8. Selecione **Importar** novamente e aguarde até que a importação seja concluída.

### Configurações de importação

- **Limite de tamanho de anexos**: Pular a importação de anexos maiores que o tamanho especificado.
- **Tamanho mínimo de imagem**: Pular a importação de imagens menores que o tamanho especificado em qualquer dimensão. Pode ser usado para pular ícones e logos.

## Modelos

Use [[Modelos do Importador|Modelos do Importador]] para configurar completamente como seus dados são importados.

![[Modelos do Importador#Variáveis]]

Além disso, as importações de HTML fornecem muitas das mesmas variáveis que o [[Introdução ao Obsidian Web Clipper|Web Clipper]]:

| Variável | Descrição |
| --- | --- |
| `{{author}}` | Autor da página. |
| `{{contentHtml}}` | Conteúdo extraído da página em formato HTML. |
| `{{description}}` | Descrição ou resumo da página. |
| `{{domain}}` | Domínio da página. |
| `{{favicon}}` | URL do favicon. |
| `{{fullHtml}}` | HTML não processado da página completa. |
| `{{image}}` | URL da imagem de compartilhamento social. |
| `{{language}}` | Idioma da página. |
| `{{published}}` | Data de publicação, que pode ser formatada com o filtro `date`. |
| `{{site}}` | Nome do site ou editor. |
| `{{url}}` | URL de origem encontrada no documento importado, quando disponível. |
| `{{words}}` | Contagem de palavras. |
