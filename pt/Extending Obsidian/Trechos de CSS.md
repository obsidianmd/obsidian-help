Aprenda a modificar aspectos da aparência da Obsidiana sem precisar [[Criar temas|desenvolver um tema]].

CSS é uma linguagem para descrever como apresentar um documento HTML. Ao adicionar trechos de CSS, você pode redefinir partes da interface do usuário do Obsidian, como o tamanho e a cor dos cabeçalhos.

O Obsidian procura trechos de CSS dentro da pasta de configuração do vault.

Para adicionar um trecho de CSS, siga estas etapas:

1. Abra **Configurações**.
2. Em **Aparência > Trechos CSS**, selecione **Abrir pasta de trechos** (ícone de pasta).
3. Na pasta snippets, crie um arquivo CSS que contenha seu snippet.
4. No Obsidian, em **Appearance > CSS snippets**, selecione **Reload snippets** (ícone de atualização) para ver o snippet na lista.

O Obsidian detecta alterações nos snippets CSS automaticamente e as aplica quando você salva seu snippet. Você não precisa reiniciar o Obsidian para que as alterações entrem em vigor.

> [!dica] Exemplo: Alterar a cor do texto
> Por exemplo, crie um arquivo chamado `snippet.css` com o seguinte conteúdo para alterar a cor do texto para vermelho:
>
>
>
> ```css
> corpo {
> --texto-normal: vermelho;
> }
> ```

## Saber mais

- Se você é novo em CSS, consulte [Aprenda a estilizar HTML usando CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS) da Mozilla.
- Se você quiser mais dicas sobre como estilizar Obsidian, consulte [[Criar temas]].