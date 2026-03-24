---
permalink: import/zettelkasten
---
Se você tem usado o método Zettelkasten para nomear e vincular suas notas, pode ser necessário converter links de `[[UID]]` para `[[UID Título da minha nota]]`.

Por exemplo, se você tem uma nota com o nome `202301011230 Título da minha nota` e cria um link para ela a partir de outra nota usando apenas o UID, `[[202301011230]]`. Como o Obsidian usa o nome completo da nota para resolver links internos, links como esses serão quebrados.

Para atualizar todos os links `[[UID]]` no seu cofre para usar o nome completo da nota, use o [[Conversor de formato]].

1. Abra as **[[Configurações]]**.
2. Em **Plugins nativos**, ative o **Importador de formato Markdown** e feche a janela de Configurações.
3. No menu lateral, no lado esquerdo da janela do aplicativo, selecione **Abrir conversor de formato** ![[lucide-binary.svg#icon]].
4. Ative o **Conversor de links Zettelkasten**.
5. Selecione **Começar conversão**. Isso converterá todas as notas em todo o seu cofre.

> [!tip] Embelezador de links Zettelkasten
> O [[Conversor de formato]] também pode embelezar seus links removendo o UID do nome de exibição. Por exemplo, `[[UID]]` é convertido para `[[UID Título da minha nota|Título da minha nota]]`.
>
> Para embelezar seus links Zettelkasten, ative o **Embelezador de links Zettelkasten** na janela do conversor de formato.

Você também pode usar o [[Criador de nota única]] para criar notas Zettelkasten no Obsidian.
