---
permalink: import/html
cssclasses:
  - soft-embed
---
O Obsidian permite importar facilmente ficheiros HTML individuais e pastas inteiras de ficheiros HTML utilizando o [[Importador|plugin Importador]] oficial. Isto é útil se pretender guardar websites inteiros no formato [[Obsidian Flavored Markdown|Markdown]], ou se pretender importar dados de uma ferramenta que exporta para HTML.

Se estiver a importar notas de uma aplicação específica, pode querer primeiro rever a lista de aplicações suportadas pelo [[Importador|plugin Importador]] para verificar se existe um conversor específico que preserve melhor os dados que está a migrar.

## Importar dados HTML para o Obsidian

Irá necessitar do plugin oficial [[Importador]] do Obsidian, que pode [instalar aqui](obsidian://show-plugin?id=obsidian-importer).

1. Abra as **[[Definições]]**.
2. Aceda a **Plugins da comunidade** e [instale o Importador](obsidian://show-plugin?id=obsidian-importer).
3. Ative o plugin Importador.
4. Abra o plugin **Importador** utilizando a paleta de comandos ou o ícone na barra de ferramentas.
5. Em **Formatação do ficheiro** escolha **HTML (.html).**
6. Selecione a localização dos seus ficheiros ou pastas HTML.
7. Selecione **Importar** para rever o modelo gerado e pré-visualizar exemplos dos seus ficheiros.
8. Selecione **Importar** novamente e aguarde até que a importação termine.

### Definições de importação

- **Limite de tamanho de anexos**: Ignorar a importação de anexos maiores do que o tamanho especificado.
- **Tamanho mínimo de imagem**: Ignorar a importação de imagens menores do que o tamanho especificado em qualquer dimensão. Pode ser utilizado para ignorar ícones e logótipos.

## Modelos

Utilize [[Modelos do Importador|modelos do Importador]] para configurar totalmente a forma como os seus dados são importados.

![[Modelos do Importador#Variables]]

Além disso, as importações HTML disponibilizam muitas das mesmas variáveis que o [[Introdução ao Obsidian Web Clipper|Web Clipper]]:

| Variável | Descrição |
| --- | --- |
| `{{author}}` | Autor da página. |
| `{{contentHtml}}` | Conteúdo extraído da página em formato HTML. |
| `{{description}}` | Descrição ou excerto da página. |
| `{{domain}}` | Domínio da página. |
| `{{favicon}}` | URL do favicon. |
| `{{fullHtml}}` | HTML não processado da página completa. |
| `{{image}}` | URL da imagem de partilha social. |
| `{{language}}` | Idioma da página. |
| `{{published}}` | Data de publicação, que pode ser formatada com o filtro `date`. |
| `{{site}}` | Nome do site ou editor. |
| `{{url}}` | URL de origem encontrado no documento importado, quando disponível. |
| `{{words}}` | Contagem de palavras. |
