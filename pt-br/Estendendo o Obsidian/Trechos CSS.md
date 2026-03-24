---
permalink: snippets
publish: true
mobile: true
description: Aprenda como modificar partes da aparência do aplicativo Obsidian sem criar um tema completo.
aliases:
  - Como/Adicionar estilos personalizados
  - Estendendo o Obsidian/Trechos de CSS
---
Aprenda como modificar aspectos da aparência do aplicativo Obsidian sem precisar [criar um tema](https://docs.obsidian.md/Themes/App+themes/Build+a+theme).

> [!tip] Se você está procurando orientações sobre como lidar com CSS para o [[Introdução ao Obsidian Publish|Obsidian Publish]], certifique-se de revisar [[Personalizar seu site]].

CSS é uma linguagem que controla a aparência do HTML. Ao adicionar fragmentos CSS, você pode alterar partes da interface de usuário do Obsidian, como o tamanho e a cor dos cabeçalhos. O Obsidian possui [variáveis CSS](https://docs.obsidian.md/Reference/CSS+variables/CSS+variables) que ajudam a personalizar a interface facilmente.

O Obsidian procura fragmentos CSS dentro da [[Pasta de configuração|pasta de configuração]] do cofre.

## Adicionando um fragmento

Para adicionar um fragmento CSS no **Desktop** ![[lucide-monitor-check.svg#icon]], siga estes passos:

1. Abra as **[[Configurações]]** ![[lucide-settings.svg#icon]].
2. Em **Aparência → Fragmentos CSS**, selecione **Abrir pasta de fragmentos** ![[lucide-folder-open.svg#icon]].
3. Na pasta de fragmentos, crie um arquivo CSS que contenha seu fragmento.
4. No Obsidian, em **Aparência → Fragmentos CSS**, selecione **Recarregar fragmentos** ![[lucide-refresh-cw.svg#icon]] para ver o fragmento na lista.
5. Ative o fragmento clicando no botão de alternância.

Para adicionar um fragmento CSS no **Celular/Tablet** ![[obsidian-icon-smartphone.svg#icon]], você pode seguir estes passos:

1. Abra um gerenciador de arquivos e encontre seu cofre. Você pode verificar a localização do cofre em _Gerenciar cofres…_ tocando no seu cofre e verificando o caminho.
2. Abra a [[Pasta de configuração]] e crie uma pasta chamada `snippets` se ela não existir.
3. Adicione seu fragmento CSS a esta pasta.
4. Abra as **[[Configurações]]** do Obsidian ![[lucide-settings.svg#icon]].
5. Selecione **Aparência** à esquerda.
6. Role para baixo até a seção **Fragmentos CSS**.
7. Toque em **Recarregar fragmentos** ![[lucide-refresh-cw.svg#icon]] para atualizar a lista.
8. Toque no botão de alternância para ativar o fragmento.

Alternativamente, você pode
- [[Sincronizar suas notas entre dispositivos|Sincronizar]] quaisquer alterações com seu serviço de sincronização.
- Usar um plugin da comunidade para criar um fragmento de dentro do Obsidian.

Uma vez ativado, o Obsidian detectará automaticamente alterações nos fragmentos CSS e as aplicará quando você salvar o arquivo.

> [!tip] Você não precisa reiniciar o Obsidian para que as alterações entrem em vigor. No entanto, pode ser necessário usar o comando da [[Paleta de comandos]] para Recarregar o Obsidian sem salvar para ver alterações no tema ou nota atual.

## Escrevendo CSS para o Obsidian

O Obsidian oferece vários métodos que tornam a escrita de CSS mais fácil e poderosa.

Ele possui uma série de [variáveis CSS](https://docs.obsidian.md/Reference/CSS+variables/CSS+variables) para modificar facilmente partes do Obsidian e um [[Propriedades#Tipos de propriedade|tipo de propriedade]] integrado para alterar a aparência de uma ou várias notas.

> [!example] Variáveis
> Crie um arquivo chamado `headers.css` com o seguinte conteúdo para mudar as cores dos seis [[Sintaxe de formatação básica#Cabeçalhos|níveis de cabeçalho]] para um arco-íris:
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
> Atribua o nome de uma classe CSS personalizada (ou uma lista de classes CSS) a uma [[Propriedades|propriedade]] predefinida `cssclasses` para fazer uma ou mais notas parecerem diferentes das outras.
> 
> **CSS**:
> ```css
> .red-border img {
>    border-color: #ff0000;
> }
> ```
> 
> **YAML/Propriedades**:
> ```yaml
> cssclasses:
>  - red-border
> ```
> 
> Em toda nota que contenha o valor `red-border` na propriedade `cssclasses`, as imagens são exibidas com uma borda vermelha.

Para garantir que o arquivo CSS seja válido e formatado corretamente, aconselhamos validá-lo com uma ferramenta como o [CSS Validation Service](https://jigsaw.w3.org/css-validator/), pois CSS inválido não funcionará.

## Saiba mais

- Se você é novo em CSS, confira [Aprenda a estilizar HTML usando CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS) da Mozilla.
- Para mais informações sobre estilização do Obsidian, veja:
  - [Sobre estilização](https://docs.obsidian.md/Reference/CSS+variables/About+styling)
  - [Criar um tema](https://docs.obsidian.md/Themes/App+themes/Build+a+theme)
  - [Criar um tema para o Publish](https://docs.obsidian.md/Themes/Obsidian+Publish+themes/Build+a+Publish+theme)
  - [Fluxo de trabalho do Inspetor CSS do Obsidian](https://forum.obsidian.md/t/obsidian-css-inspector-workflow/58178)
