---
permalink: import/google-keep
---
O Obsidian permite que você migre facilmente suas notas do Google Keep usando o [[Importador|plugin Importador]]. Isso converterá seus dados do Google Keep em arquivos Markdown duráveis, que você pode usar com o Obsidian e muitos outros aplicativos.

## Exporte seus dados do Google Keep

1. Acesse o [Google Takeout](https://takeout.google.com/settings/takeout) e entre na sua conta do Google.
2. Clique em **Deselecionar tudo** no canto superior direito.
3. Role para baixo e selecione **Keep** na lista.
4. Role até o final da página e clique em **Próximo passo**.
5. Na próxima tela, clique no botão **Criar exportação**.
6. Baixe o arquivo `.zip` assim que estiver disponível.

## Importe seus dados do Google Keep para o Obsidian

Você precisará do plugin oficial [[Importador]] do Obsidian, que pode ser [instalado aqui](obsidian://show-plugin?id=obsidian-importer).

1. Abra as **[[Configurações]]**.
2. Vá para **Plugins da comunidade** e [instale o Importador](obsidian://show-plugin?id=obsidian-importer).
3. Ative o plugin Importador.
4. Abra o plugin **Importador** usando a paleta de comandos ou o ícone do menu lateral.
5. Em **Formato do arquivo** escolha **Google Keep (.zip).**
6. Selecione a destinação do seu arquivo `.zip`.
7. Clique em **Importar** e aguarde até que a importação seja concluída.
8. Pronto!

### Recursos suportados

- Todas as listas de verificação serão importadas como itens de nível superior porque o Google Keep não exporta informações de indentação.
- Lembretes e atribuições de usuários nas notas não serão importados porque esses recursos não são suportados pelo Obsidian.
- Todas as outras informações devem ser importadas como uma combinação de conteúdo e etiquetas.
