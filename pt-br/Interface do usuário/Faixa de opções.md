---
permalink: ribbon
publish: true
mobile: true
description: Aprenda como usar a faixa de opções, um espaço para comandos comuns no Obsidian, e personalizá-la no desktop e no celular.
---
A faixa de opções funciona como um espaço para comandos comuns dentro do Obsidian.

No desktop, ela está localizada na [[Barra lateral#Abrir barras laterais escondidas|barra lateral esquerda]] e permanece visível mesmo quando a barra lateral esquerda está fechada.

No celular, você pode acessar as [[Aplicativo móvel#Ações da faixa de opções|Ações da faixa de opções]] tocando na **opção Menu** ![[lucide-menu.svg#icon]] no canto inferior direito do aplicativo quando você não está editando uma nota.

## Ações

Cada ação é representada por um ícone na faixa de opções. Passar o mouse sobre esses ícones exibirá uma dica de ferramenta, enquanto selecioná-los ativará a ação associada. No celular, você pode tocar nesses ícones para ativá-los.

1. Abrir o **[[Gerenciar cofres|Alternador de cofres]]** ![[obsidian-icon-vault-switcher.svg#icon]].
2. Acessar a **ajuda** ![[lucide-help-circle.svg#icon]].
3. Abrir as **[[Configurações]]** ![[lucide-settings.svg#icon]].

Na versão móvel, você pode configurar uma ação de acesso rápido na faixa de opções. Para mais informações, consulte a [[#Celular|seção móvel]] e [[Aplicativo móvel]].

## Personalizar a faixa de opções

O leiaute personalizado da sua faixa de opções é lembrado entre sessões. Ele sincroniza com outros dispositivos e o aplicativo móvel quando as configurações do aplicativo (nos arquivos `workspace.json` e `workspace-mobile.json`) são sincronizadas.

### Desktop

Na versão desktop, você pode personalizar a faixa de opções da seguinte forma:

- Reorganize a ordem das ações da faixa de opções arrastando e soltando os ícones.
- Para ocultar ações específicas, clique com o botão direito em um espaço vazio dentro da faixa de opções e desmarque as ações que deseja ocultar.

#### Esconder a faixa de opções

Você pode esconder a faixa de opções de duas maneiras:

- Clique com o botão direito na faixa de opções e selecione **Esconder fita**.
- Abra **[[Configurações]]** → **Aparência**, role até **Avançado** e desative **Mostrar o menu lateral**.

#### Mostrar a faixa de opções

Se você ocultou a faixa de opções e deseja exibi-la novamente:

1. Abra **[[Configurações]]** → **Aparência**.
2. Role até **Avançado**.
3. Ative **Mostrar o menu lateral**.
4. A faixa de opções aparecerá novamente no lado esquerdo da janela.

> [!tip] CSS personalizado
> Se você está usando um tema da comunidade ou CSS personalizado, certifique-se de que ele não oculte a faixa de opções por meio de regras de estilo personalizadas.

### Celular

Na versão móvel do Obsidian, você pode realizar ações de acesso rápido, reorganizar itens e personalizar o menu da faixa de opções. Para acessar essas personalizações, siga estes passos:

1. Abra as **[[Configurações]]** do Obsidian ![[lucide-cog.svg#icon]].
2. Navegue até a seção **Aparência**.
3. Role até as opções **Avançado**.
4. Selecione o botão **Administrar** sob o item **Configuração da faixa de opções**.

#### Acesso rápido

Por padrão, a opção de acesso rápido está definida como "Abrir o menu lateral" com um *toque curto*. Se você escolher outra opção como seu acesso rápido:

- A opção selecionada será acionada com um *toque curto*.
- O acesso ao menu da faixa de opções mudará para um *toque longo*.

> [!info] As opções de acesso rápido dependem das configurações do Obsidian e dos plugins nativos que você ativou.

#### Reorganizar e visibilidade

Para alterar a ordem dos itens no menu da faixa de opções, pressione e segure o botão de **arrastar e soltar** ![[lucide-menu.svg#icon]] e mova o item selecionado para cima ou para baixo.

Você pode mostrar ou ocultar itens no menu da faixa de opções usando os botões vermelho **remover** ![[lucide-minus-circle.svg#icon]] ou verde **adicionar** ![[lucide-plus-circle.svg#icon]] para alternar sua visibilidade.

 ![[ribbon-rearrange-visibility.jpeg#interface]]
