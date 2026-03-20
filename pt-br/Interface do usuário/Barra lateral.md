---
permalink: sidebar
publish: true
mobile: true
description: >-
  Aprenda sobre as barras laterais esquerda e direita do Obsidian e como
  gerenciar abas e grupos de abas.
---
O Obsidian possui duas barras laterais: uma barra lateral esquerda e uma barra lateral direita. As barras laterais contêm abas criadas por plugins, como [[Links inversos]], [[Links de saída]] e o [[Explorador de arquivos]]. No desktop, você também pode arrastar notas para a barra lateral para mantê-las visíveis ao lado do seu editor principal.

No desktop e em tablets maiores, a barra lateral esquerda inclui o [[Faixa de opções|Menu lateral]]. Em dispositivos móveis e tablets menores, as barras laterais são [[#Abrir barras laterais escondidas|recolhidas por padrão]].

## Abrir barras laterais escondidas

### Desktop e tablets maiores

No desktop e em tablets maiores, abra uma barra lateral recolhida selecionando o ícone de expandir à esquerda ( ![[obsidian-icon-side-bar-left.svg#icon]] ) ou expandir à direita ( ![[obsidian-icon-side-bar-right.svg#icon]] ).

### Dispositivos móveis e tablets menores

Em dispositivos móveis e tablets menores, você pode abrir barras laterais escondidas das seguintes maneiras:

- Deslize para a esquerda ou direita
- Selecione o ícone de expandir à esquerda ( ![[obsidian-icon-side-bar-left.svg#icon]] ) (apenas barra lateral esquerda)
- Use as opções *Alternar para a barra lateral à esquerda* ou *Alternar para a barra lateral à direita* na [[Paleta de comandos]].

## Abas

Por padrão, plugins criam novas abas em vez de novos [[#Grupos de abas]].

Você pode alternar entre abas selecionando o ícone. Uma dica de contexto aparece para ajudá-lo a identificar as abas.

Em cada painel, você só pode ver uma aba por vez. Algumas ações trazem automaticamente uma aba para a visualização. Por exemplo, quando você seleciona uma tag, sua aba é aberta.

### Abrir ou reabrir abas

Existem várias maneiras de adicionar abas às suas barras laterais:

- **Ativar um plugin**: Muitos plugins criam automaticamente abas na barra lateral quando ativados. Vá em **Configurações → Plugins da comunidade** (ou **Plugins nativos**) e ative o plugin da aba que você deseja.
- **Executar um comando**: Use a [[Paleta de comandos]] para buscar comandos que abrem abas específicas. Por exemplo, busque por "Links inversos" ou "Links de saída" para abrir essas abas.
- **Arrastar uma nota** (apenas desktop): No desktop, você pode arrastar uma nota do [[Explorador de arquivos]] ou de uma aba do editor para a barra lateral para abri-la lá.

Se você fechou uma aba e deseja recuperá-la, esses mesmos métodos irão reabri-la.

### Fechar abas

Algumas abas podem ser fechadas pelo menu de clique direito, enquanto outras não. Se você não quiser ver uma aba que não pode ser fechada, considere desativar o plugin correspondente ou recolher a barra lateral selecionando o ícone de seta.

### Reorganizar abas

Você pode arrastar e soltar ícones de abas para reorganizá-las dentro de um grupo de abas.

No desktop, você também pode arrastar abas da barra lateral para a área principal do editor para abri-las lá.

### Fixar abas

Você pode fixar uma aba na barra lateral para controlar como ela é atualizada quando você interage com outras partes do aplicativo.

Para fixar ou desafixar uma aba na barra lateral, arraste a aba para ou da barra lateral.

O comportamento de uma aba fixada na barra lateral depende do tipo de conteúdo:

- **Notas e Bases**: Uma aba de nota ou base fixada permanece no lugar. Novas notas abrem como abas separadas no editor principal em vez de substituir a aba fixada.
- **Painéis** (como [[Links inversos]] ou [[Links de saída]]): Um painel fixado permanece focado na última nota selecionada. Selecionar uma nota diferente não atualiza o painel fixado.

Para informações sobre fixar abas no editor principal, veja [[Abas#Fixar uma aba|Fixar uma aba]].

## Grupos de abas

Você pode ter múltiplos grupos de abas na barra lateral.

### Criar grupos de abas

Para criar um novo grupo de abas, arraste o ícone de uma aba acima ou abaixo de um grupo de abas existente. A área destacada indica onde o novo grupo de abas será criado.

### Fechar grupos de abas

Para fechar um grupo de abas, você pode [[#Fechar abas|fechar todas as abas nele]], ou arrastar todas as abas do grupo pelos seus ícones e soltá-las em grupos de abas existentes.

Quando apenas a área de abas de um grupo de abas está destacada, a aba sendo arrastada será mesclada com as outras abas daquele grupo.
