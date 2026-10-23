---
permalink: import/google-keep
cssclasses:
  - soft-embed
---
O Obsidian permite-lhe migrar facilmente as suas notas do Google Keep usando o [[Importador|plugin Importador]]. Isto converte os seus dados do Google Keep em ficheiros Markdown duráveis que pode usar com o Obsidian e muitas outras aplicações.

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
7. Selecione **Importar** para rever o modelo gerado e pré-visualizar exemplos das suas notas.
8. Selecione **Importar** novamente e aguarde até que a importação termine.

## Limitações

- Todas as listas de verificação serão importadas como itens de nível superior porque o Google Keep não exporta informação de indentação.
- Lembretes e atribuições de utilizadores nas notas não serão importados porque estas funcionalidades não são suportadas pelo Obsidian.


## Modelos

Use [[Modelos do Importador|modelos do Importador]] para configurar completamente como os seus dados do Google Keep são importados.

![[Modelos do Importador#Variables]]

Adicionalmente, o Google Keep fornece variáveis para o texto original, listas, etiquetas, anexos, cores, dados de partilha, tarefas, anotações e estado da nota.

| Variável          | Descrição                                         |
| ----------------- | ------------------------------------------------- |
| `{{isArchived}}`  | Se a nota está arquivada.                         |
| `{{isPinned}}`    | Se a nota está fixada.                            |
| `{{isTrashed}}`   | Se a nota está no lixo.                           |
| `{{color}}`       | Nome da cor do Google Keep.                       |
| `{{labels}}`      | Lista de registos de etiquetas.                   |
| `{{sharees}}`     | Lista de pessoas com quem a nota foi partilhada.  |
| `{{annotations}}` | Lista de registos de anotações de ligações.       |

O título original do Google Keep está disponível como `{{source.title}}`. A variável partilhada `{{title}}` contém o título da nota importada.
