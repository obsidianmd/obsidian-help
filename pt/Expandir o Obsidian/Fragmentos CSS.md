---
permalink: snippets
publish: true
mobile: true
description: Aprenda a alterar partes da aparência do aplicativo Obsidian sem criar um tema completo.
---
Aprenda como modificar aspetos da aparência da aplicação Obsidian sem precisar de [construir um tema](https://docs.obsidian.md/Themes/App+themes/Build+a+theme).

> [!tip] Se procura orientação sobre como lidar com CSS para o [[Introdução ao Obsidian Publish|Obsidian Publish]], certifique-se de rever [[Personalizar o seu site]].

CSS é uma linguagem que controla a aparência do HTML. Ao adicionar excertos CSS, pode alterar partes da interface de utilizador do Obsidian, como o tamanho e a cor dos cabeçalhos. O Obsidian tem [variáveis CSS](https://docs.obsidian.md/Reference/CSS+variables/CSS+variables) que o ajudam a personalizar a interface facilmente.

O Obsidian procura excertos CSS dentro da [[Pasta de configuração|pasta de configuração]] do cofre.

## Adicionar um excerto

Para adicionar um excerto CSS no **Ambiente de trabalho** ![[lucide-monitor-check.svg#icon]], siga estes passos:

1. Abra as **[[Definições]]** ![[lucide-settings.svg#icon]].
2. Em **Aparência → Fragmentos CSS**, selecione **Abrir pasta de fragmentos** ![[lucide-folder-open.svg#icon]].
3. Na pasta de fragmentos, crie um ficheiro CSS que contenha o seu excerto.
4. No Obsidian, em **Aparência → Fragmentos CSS**, selecione **Recarregar fragmentos** ![[lucide-refresh-cw.svg#icon]] para ver o excerto na lista.
5. Ative o excerto clicando no botão de alternância.

Para adicionar um excerto CSS no **Móvel/Tablet** ![[obsidian-icon-smartphone.svg#icon]], pode seguir estes passos:

1. Abra um gestor de ficheiros e encontre o seu cofre. Pode verificar a localização do cofre em _Gerir cofres…_ tocando no seu cofre e consultando o caminho.
2. Abra a [[Pasta de configuração]] e crie uma pasta chamada `snippets` se ainda não existir.
3. Adicione o seu excerto CSS a esta pasta.
4. Abra as **[[Definições]]** do Obsidian ![[lucide-settings.svg#icon]].
5. Selecione **Aparência** à esquerda.
6. Desloque-se até à secção **Fragmentos CSS**.
7. Toque em **Recarregar fragmentos** ![[lucide-refresh-cw.svg#icon]] para atualizar a lista.
8. Toque no botão de alternância para ativar o excerto.

Em alternativa, pode
- [[Sincronizar notas entre dispositivos|Sincronizar]] quaisquer alterações com o seu serviço de sincronização.
- Usar um plugin da comunidade para criar um excerto a partir do Obsidian.

Uma vez ativado, o Obsidian detetará automaticamente alterações nos excertos CSS e aplicá-las-á quando guardar o ficheiro.

> [!tip] Não precisa de reiniciar o Obsidian para que as alterações tenham efeito. No entanto, poderá precisar de usar o comando da [[Paleta de comando]] para Recarregar o Obsidian sem guardar para ver alterações no tema ou nota atual.

## Escrever CSS para o Obsidian

O Obsidian oferece vários métodos que tornam a escrita de CSS mais fácil e poderosa.

Possui uma série de [variáveis CSS](https://docs.obsidian.md/Reference/CSS+variables/CSS+variables) para modificar facilmente partes do Obsidian e um [[Propriedades#Tipo de propriedade|tipo de propriedade]] integrado para alterar a aparência de uma ou várias notas.

> [!example] Variáveis
> Crie um ficheiro chamado `headers.css` com o seguinte conteúdo para alterar as cores dos seis [[Sintaxe de formatação básica#Cabeçalhos|níveis de cabeçalho]] para um arco-íris:
>
> ```css
> body {
>   --h1-color: red;
>   --h2-color: orange;
>   --h3-color: yellow;
>   --h4-color: green;
>   --h5-color: blue;
>   --h6-color: pink;
> }
> ```

> [!example] Classes CSS
> Atribua o nome de uma classe CSS personalizada (ou uma lista de classes CSS) a uma [[Propriedades|propriedade]] predefinida `cssclasses` para fazer com que uma ou mais notas tenham um aspeto diferente das outras.
> 
> **CSS**:
> ```css
> .red-border img {
>    border-color: #ff0000;
>    border-style: solid;
> }
> ```
> 
> **YAML/Propriedades**:
> ```yaml
> cssclasses:
>  - red-border
> ```
> 
> Em cada nota que contenha o valor `red-border` na propriedade `cssclasses`, as imagens são apresentadas com uma borda vermelha.

Para garantir que o ficheiro CSS é válido e está formatado corretamente, aconselhamos a validá-lo com uma ferramenta como o [CSS Validation Service](https://jigsaw.w3.org/css-validator/), pois CSS inválido não funcionará.

## Saber mais

- Se é novo em CSS, consulte [Learn to style HTML using CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS) da Mozilla.
- Para mais informações sobre estilização do Obsidian, consulte:
  - [About styling](https://docs.obsidian.md/Reference/CSS+variables/About+styling)
  - [Build a theme](https://docs.obsidian.md/Themes/App+themes/Build+a+theme)
  - [Build a Publish theme](https://docs.obsidian.md/Themes/Obsidian+Publish+themes/Build+a+Publish+theme)
  - [Obsidian CSS Inspector workflow](https://forum.obsidian.md/t/obsidian-css-inspector-workflow/58178)
