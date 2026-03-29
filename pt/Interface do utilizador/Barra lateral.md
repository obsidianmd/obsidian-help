---
permalink: sidebar
publish: true
mobile: true
description: Saiba mais sobre as barras laterais esquerda e direita do Obsidian e como gerenciar abas e grupos de abas.
---
O Obsidian tem duas barras laterais: uma barra lateral esquerda e uma barra lateral direita. As barras laterais contêm separadores criados por plugins, como [[Links inversos]], [[Links Externos]] e o [[Explorador de ficheiros]]. No ambiente de trabalho, também pode arrastar notas para a barra lateral para as manter visíveis ao lado do seu editor principal.

No ambiente de trabalho e em tablets maiores, a barra lateral esquerda inclui a [[Barra de ferramentas]]. Em dispositivos móveis e tablets mais pequenos, as barras laterais estão [[#Abrir barras laterais ocultas|recolhidas por predefinição]].

## Abrir barras laterais ocultas

### Ambiente de trabalho e tablets maiores

No ambiente de trabalho e em tablets maiores, abra uma barra lateral recolhida selecionando o ícone de expandir à esquerda ![[obsidian-icon-side-bar-left.svg#icon]] ou expandir à direita ![[obsidian-icon-side-bar-right.svg#icon]].

### Dispositivos móveis e tablets mais pequenos

Em dispositivos móveis e tablets mais pequenos, pode abrir as barras laterais ocultas das seguintes formas:

- Deslizar para a esquerda ou para a direita
- Selecionar o ícone de expandir à esquerda ![[obsidian-icon-side-bar-left.svg#icon]] (apenas barra lateral esquerda)
- Utilizar as opções *Alternar Barra Lateral da Esquerda* ou *Alternar Barra Lateral da Direita* da [[Paleta de comando]].

## Separadores

Por predefinição, os plugins criam novos separadores em vez de novos [[#Grupos de separadores]].

Pode alternar entre separadores selecionando o ícone. Uma dica aparece para o ajudar a identificar os separadores.

Em cada painel, só pode ver um separador de cada vez. Algumas ações trazem automaticamente um separador para vista. Por exemplo, quando seleciona uma etiqueta, o seu separador abre-se.

### Abrir ou reabrir separadores

Existem várias formas de adicionar separadores às suas barras laterais:

- **Ativar um plugin**: Muitos plugins criam automaticamente separadores na barra lateral quando são ativados. Vá a **Definições → Plugins da comunidade** (ou **Plugins Base**) e ative o plugin para o separador que pretende.
- **Executar um comando**: Utilize a [[Paleta de comando]] para pesquisar comandos que abrem separadores específicos. Por exemplo, pesquise "Links inversos" ou "Links Externos" para abrir esses separadores.
- **Arrastar uma nota** (apenas no ambiente de trabalho): No ambiente de trabalho, pode arrastar uma nota do [[Explorador de ficheiros]] ou de um separador do editor para a barra lateral para a abrir lá.

Se fechou um separador e quer recuperá-lo, estes mesmos métodos irão reabri-lo.

### Fechar separadores

Alguns separadores podem ser fechados através do menu de clique direito, enquanto outros não. Se não pretende ver um separador que não pode ser fechado, considere desativar o plugin relevante ou recolher a barra lateral selecionando o ícone de seta.

### Reorganizar separadores

Pode arrastar e largar os ícones dos separadores para os reorganizar dentro de um grupo de separadores.

No ambiente de trabalho, também pode arrastar separadores da barra lateral para a área principal do editor para os abrir lá.

### Fixar separadores

Pode fixar um separador na barra lateral para controlar como este é atualizado quando interage com outras partes da aplicação.

Para fixar ou desafixar um separador na barra lateral, arraste o separador para ou da barra lateral.

O comportamento de um separador fixado na barra lateral depende do seu tipo de conteúdo:

- **Notas e Bases**: Um separador de nota ou base fixado permanece no lugar. Novas notas abrem como separadores separados no editor principal em vez de substituir o separador fixado.
- **Painéis** (como [[Links inversos]] ou [[Links Externos]]): Um painel fixado mantém-se focado na última nota selecionada. Selecionar uma nota diferente não atualiza o painel fixado.

Para informações sobre fixar separadores no editor principal, consulte [[Separadores#Fixar um separador|Fixar um separador]].

## Grupos de separadores

Pode ter múltiplos grupos de separadores na barra lateral.

### Criar grupos de separadores

Para criar um novo grupo de separadores, arraste o ícone de um separador acima ou abaixo de um grupo de separadores existente. A área realçada indica onde o novo grupo de separadores será criado.

### Fechar grupos de separadores

Para fechar um grupo de separadores, pode [[#Fechar separadores|fechar todos os separadores nele]], ou arrastar todos os separadores do grupo pelos seus ícones e largá-los em grupos de separadores existentes.

Quando apenas a área de separadores de um grupo de separadores está realçada, o separador que está a ser arrastado será mesclado com outros separadores nesse grupo.
