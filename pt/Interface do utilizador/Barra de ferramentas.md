---
permalink: ribbon
publish: true
mobile: true
description: 'Aprenda a usar a faixa de opções, um espaço para comandos comuns no Obsidian, e a personalizá-la no desktop e no celular.'
---
A barra de ferramentas funciona como um espaço para comandos comuns dentro do Obsidian.

No computador, está localizada na [[Barra lateral#Abrir barras laterais ocultas|Barra lateral esquerda]] e permanece visível mesmo quando a Barra lateral esquerda está fechada.

No móvel, pode aceder às [[Aplicação móvel#Ações da barra de ferramentas|Ações da Barra de Ferramentas]] tocando na **Opção de menu** ![[lucide-menu.svg#icon]] no canto inferior direito da aplicação quando não está a editar uma nota.

## Ações

Cada ação é representada por um ícone na barra de ferramentas. Ao passar o cursor sobre estes ícones será apresentada uma dica, enquanto selecioná-los ativará a ação associada. No móvel, pode tocar nestes ícones para os ativar.

1. Abrir o **[[Gerir cofres|Alternador de cofres]]** ![[obsidian-icon-vault-switcher.svg#icon]].
2. Aceder à **ajuda** ![[lucide-help-circle.svg#icon]].
3. Abrir as **[[Definições]]** ![[lucide-settings.svg#icon]].

Na versão móvel, pode configurar uma ação de acesso rápido na barra de ferramentas. Para mais informações, consulte a [[#Móvel|secção móvel]] e [[Aplicação móvel]].

## Personalizar a barra de ferramentas

O esquema personalizado da barra de ferramentas é memorizado entre sessões. Sincroniza com outros dispositivos e a aplicação móvel quando as definições da aplicação (nos ficheiros `workspace.json` e `workspace-mobile.json`) são sincronizadas.

### Computador

Na versão de computador, pode personalizar a barra de ferramentas da seguinte forma:

- Reorganizar a ordem das ações da barra de ferramentas arrastando e largando os ícones.
- Para ocultar ações específicas, clique com o botão direito num espaço vazio dentro da barra de ferramentas e desmarque as ações que pretende ocultar.

#### Ocultar a barra de ferramentas

Pode ocultar a barra de ferramentas de duas formas:

- Clique com o botão direito na barra de ferramentas e selecione **Ocultar ribbon**.
- Abra **[[Definições]]** → **Aparência**, desloque-se até **Avançadas** e desative **Mostrar ribbon**.

#### Mostrar a barra de ferramentas

Se ocultou a barra de ferramentas e pretende mostrá-la novamente:

1. Abra **[[Definições]]** → **Aparência**.
2. Desloque-se até **Avançadas**.
3. Ative **Mostrar ribbon**.
4. A barra de ferramentas aparecerá novamente no lado esquerdo da janela.

> [!tip] CSS personalizado
> Se está a utilizar um tema da comunidade ou CSS personalizado, certifique-se de que não oculta a barra de ferramentas através de regras de estilo personalizadas.

### Móvel

Na versão móvel do Obsidian, pode realizar ações de acesso rápido, reorganizar itens e personalizar o menu da barra de ferramentas. Para aceder a estas personalizações, siga estes passos:

1. Abra as **[[Definições]]** do Obsidian ![[lucide-cog.svg#icon]].
2. Navegue até à secção **aparência**.
3. Desloque-se até às opções **avançadas**.
4. Selecione o botão **Gerir** no item **Ribbon Configuration**.

#### Acesso rápido

Por predefinição, a opção de acesso rápido está definida como "Abrir menu do ribbon" com um *toque curto*. Se escolher outra opção como acesso rápido:

- A opção selecionada será acionada com um *toque curto*.
- O acesso ao menu da barra de ferramentas mudará para um *toque longo*.

> [!info] As opções de acesso rápido dependem das definições do Obsidian e dos plugins principais que tem ativados.

#### Reorganizar e visibilidade

Para alterar a ordem dos itens no menu da barra de ferramentas, pressione e mantenha premido o botão de **arrastar e largar** ![[lucide-menu.svg#icon]] e mova o item selecionado para cima ou para baixo.

Pode mostrar ou ocultar itens no menu da barra de ferramentas utilizando os botões vermelho de **remover** ![[lucide-minus-circle.svg#icon]] ou verde de **adicionar** ![[lucide-plus-circle.svg#icon]] para alternar a sua visibilidade.

 ![[ribbon-rearrange-visibility.jpeg#interface]]
