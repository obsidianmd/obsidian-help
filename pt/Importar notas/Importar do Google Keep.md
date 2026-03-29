---
permalink: import/google-keep
---
O Obsidian permite-lhe migrar facilmente as suas notas do Google Keep usando o [[Importador|plugin Importador]]. Isto converterá os seus dados do Google Keep em ficheiros Markdown duráveis, que pode usar com o Obsidian e muitas outras aplicações.

## Exportar os seus dados do Google Keep

1. Aceda ao [Google Takeout](https://takeout.google.com/settings/takeout) e entre na sua conta Google.
2. Clique em **Desselecionar tudo** no canto superior direito.
3. Desloque-se para baixo e selecione **Keep** na lista.
4. Desloque-se até ao fundo da página e clique em **Próximo passo**.
5. No ecrã seguinte, clique no botão **Criar exportação**.
6. Transfira o ficheiro `.zip` assim que estiver disponível.

## Importar os seus dados do Google Keep para o Obsidian

Vai precisar do plugin oficial [[Importador]] do Obsidian, que pode [instalar aqui](obsidian://show-plugin?id=obsidian-importer).

1. Abra as **[[Definições]]**.
2. Vá a **Plugins da comunidade** e [instale o Importador](obsidian://show-plugin?id=obsidian-importer).
3. Ative o plugin Importador.
4. Abra o plugin **Importador** usando a paleta de comandos ou o ícone da barra de ferramentas.
5. Em **Formatação do ficheiro** escolha **Google Keep (.zip).**
6. Selecione a localização do seu ficheiro `.zip`.
7. Clique em **Importar** e aguarde até que a importação esteja completa.
8. Está feito!

### Funcionalidades suportadas

- Todas as listas de verificação serão importadas como itens de nível superior porque o Google Keep não exporta informação de indentação.
- Lembretes e atribuições de utilizadores nas notas não serão importados porque estas funcionalidades não são suportadas pelo Obsidian.
- Todas as outras informações devem ser importadas como uma combinação de conteúdo e etiquetas.
