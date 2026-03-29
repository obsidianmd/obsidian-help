---
permalink: import/zettelkasten
---
Se tem utilizado o método Zettelkasten para nomear e ligar as suas notas, pode precisar de converter ligações de `[[UID]]` para `[[UID Título da minha nota]]`.

Por exemplo, se tem uma nota com o nome `202301011230 Título da minha nota` e liga a ela a partir de outra nota usando apenas o UID, `[[202301011230]]`. Uma vez que o Obsidian usa o nome completo da nota para resolver ligações internas, ligações como estas deixarão de funcionar.

Para atualizar todas as ligações `[[UID]]` no seu cofre para usar o nome completo da nota, utilize o [[Importador de formato Markdown]].

1. Abra as **[[Definições]]**.
2. Em **Plugins Base**, ative o **Importador de formato Markdown** e feche a janela de Definições.
3. Na barra de ferramentas, no lado esquerdo da janela da aplicação, selecione **Open format convert** ![[lucide-binary.svg#icon]].
4. Ative o **Conversor de links de Zettelkasten**.
5. Selecione **Começar a conversão**. Isto irá converter todas as notas em todo o seu cofre.

> [!tip] Embelezador de link de Zettelkasten
> O [[Importador de formato Markdown]] também pode embelezar as suas ligações removendo o UID do nome apresentado. Por exemplo, `[[UID]]` converte para `[[UID Título da minha nota|Título da minha nota]]`.
>
> Para embelezar as suas ligações Zettelkasten, ative o **Embelezador de link de Zettelkasten** na janela do importador de formato.

Também pode usar o [[Criador de notas únicas]] para criar notas Zettelkasten no Obsidian.
