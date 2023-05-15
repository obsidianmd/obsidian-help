Existem algumas diferenças entre a forma como vários PKM e sistemas de anotações funcionam, o que significa que mover-se entre eles pode ser um pouco complicado. Na maioria das vezes, se o que você estiver usando puder ser convertido em Markdown, funcionará razoavelmente bem no Obsidian. Mas algumas coisas, como tags e links, podem ser complicadas.

Em nosso Fórum há um [post coleta de métodos que outras pessoas desenvolveram](https://forum.obsidian.md/t/meta-post-migration-workflows/768). No momento, inclui:

- [Importar do Notion](https://forum.obsidian.md/t/import-from-notion/636)
- [Importar do Notion (automatizado)](https://forum.obsidian.md/t/notion-2-obsidian-migration-instructions/2728)
- [Importar do Evernote](https://forum.obsidian.md/t/import-from-evernote/108)
- [Importar do OneNote](https://forum.obsidian.md/t/new-tool-for-migration-from-onenote-updated-and-improved-version/3055)
- [Importar do Apple Notes](https://forum.obsidian.md/t/migrate-from-apple-notes-to-obsidian/732)
- [Importar do Bear](https://forum.obsidian.md/t/import-from-bear-app/2284)
- [Importar de Zkn3](https://forum.obsidian.md/t/migrating-from-zkn3-to-obsidian-without-losing-your-tags-and-internal-links-documentation/7457)
- [Importar do TiddlyWiki 5](https://forum.obsidian.md/t/migrate-from-tiddlywiki-5-to-obsidian/731)

Mas se você não encontrar seu sistema nesta lista, confira a postagem no fórum, alguém pode ter resolvido seu problema desde que este documento foi escrito.

Também digno de nota, os fabricantes do nvUltra, outro programa de anotações baseado em Markdown, têm uma lista em seu site de [maneiras de exportar para nvUltra](https://nvultra.com/help/importing). Em muitos casos, eles serão os mesmos ou, pelo menos, um ponto de partida útil.

## Ferramentas integradas

### Da pesquisa de roaming

Se você tiver dados no Roam, é fácil exportá-los e brincar com eles no Obsidian.

> 1. Escolha "Exportar tudo" no menu:
> ![[Pasted image.png]]

> 2. Clique no botão azul "Exportar tudo":
> ![[Pasted image 1.png]]

> 3. Descompacte o arquivo "Roam-Export-xxxxxxxxxxxxx.zip" em uma pasta.

> 4. Clique no ícone do cofre (a dica de ferramenta deve dizer "Abrir outro cofre") no canto inferior esquerdo do aplicativo e selecione "Abrir pasta como cofre".
> Escolha a pasta que você acabou de descompactar.

> 5. Use nosso [[Conversor de formato]] para converter o formato Markdown da Roam Research para o formato da Obsidian.
> Pode ser usado para transformar `#tag` em Obsidian `[[links]]`.
> Ele também pode converter `^^highlight^^` em `==highlight==`.

### Do Urso

Se você estiver importando do Bear, o plug-in [[Conversor de formatos]] tem a opção de converter `::highlight::` em `==highlight==`.

### Usando Zettelkasten

Se você estiver usando o método Zettelkasten para estruturar suas notas, aqui está algo que você pode querer saber:

Links em Obsidian requerem uma correspondência completa com o nome da nota. Isso significa que `[[202001010000]]` não será vinculado corretamente a `[[202001010000 My Note]]`.

Para corrigir isso, você pode usar nosso [[conversor de formato]] para converter seus links Zettelkasten em `[[202001010000 My Note]]` ou `[[202001010000 My Note|My Note]]`.

Você também pode estar interessado no plug-in [[Criador de nota exclusivo]].