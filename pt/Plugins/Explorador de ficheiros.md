---
permalink: plugins/file-explorer
publish: true
mobile: true
description: O Explorador de arquivos é um plugin principal que permite gerenciar arquivos e pastas dentro do seu cofre.
---
O explorador de ficheiros é um [[Plugins Base|plugin principal]] que lhe permite gerir ficheiros e pastas dentro do seu cofre. Pode navegar por notas e outros [[Formatos de ficheiro aceites]] no seu cofre e realizar muitas operações comuns com ficheiros:

- Criar, eliminar e renomear ficheiros e pastas.
- Mover ficheiros e pastas com arrastar e soltar.
- Usar o [[#Usar o menu de contexto|menu de contexto]] para aceder a todas as operações disponíveis.

> [!tip]- Arrastar e soltar ficheiros
> Pode arrastar um ficheiro do explorador de ficheiros para a sua nota para criar uma ligação para ele, ou arrastar um ficheiro para uma pasta no explorador de ficheiros para o copiar.

## Criar uma nova nota

Para criar uma nova nota no local padrão para novas notas:

1. Selecione **Nova nota** ![[lucide-pen-line.svg#icon]] no topo do explorador de ficheiros.
2. Escreva o nome da nota e pressione `Enter`.

> [!tip]- Mudar o local predefinido
> Pode mudar o local predefinido para novas notas em **[[Definições]] → [[Definições#Ficheiros & Links|Ficheiros & Links]] → [[Definições#Local padrão para novas notas|Local padrão para novas notas]]**.

Para criar uma nova nota numa pasta específica:

1. Clique com o botão direito na pasta e depois selecione **Nova nota**.
2. Escreva o nome da nota e pressione `Enter`.

## Criar uma nova pasta

Para criar uma nova pasta na raiz do seu cofre:

1. Selecione **Nova pasta** ![[lucide-folder-plus.svg#icon]] no topo do explorador de ficheiros.
2. Escreva o nome da pasta e pressione `Enter`.

Para criar uma subpasta:

1. Clique com o botão direito na pasta onde pretende criar a subpasta e depois selecione **Nova pasta**.
2. Escreva o nome da pasta e pressione `Enter`.

## Mudar ordem de ordenação

Para mudar a ordem de ordenação dos seus ficheiros:

1.  Selecione **Mudar ordem** ![[lucide-arrow-up-narrow-wide.svg#icon]] no topo do explorador de ficheiros.
2. Escolha como pretende ordenar os seus ficheiros. Pode ordenar por ordem ascendente ou descendente por nome de ficheiro, hora de modificação ou hora de criação.

## Revelar automaticamente o ficheiro ativo

Quando abre uma nota, o explorador de ficheiros pode deslocar automaticamente e realçar essa nota na árvore de pastas. Isto ajuda-o a manter o controlo sobre onde a sua nota ativa está localizada dentro do seu cofre.

Para alternar a revelação automática:

- Selecione **Revelar automaticamente ficheiro ativo** ![[lucide-gallery-vertical.svg#icon]] no topo do explorador de ficheiros.

Quando ativado, o explorador de ficheiros seguirá e revelará automaticamente a nota ativa.

## Expandir ou recolher todas as pastas

Pode expandir ou recolher todas as pastas no explorador de ficheiros de uma só vez.

Para expandir todas as pastas:

- Selecione **Expandir tudo** ![[lucide-chevrons-up-down.svg#icon]] no topo do explorador de ficheiros.

Para recolher todas as pastas:

- Selecione **Recolher tudo** ![[lucide-chevrons-down-up.svg#icon]] no topo do explorador de ficheiros.

## Eliminar um ficheiro ou pasta

1. Clique com o botão direito no ficheiro que pretende eliminar e depois selecione **Eliminar**.
2. Se for solicitado a confirmar que pretende eliminar o ficheiro, selecione **Eliminar**.

Para mais informações, consulte [[Gerir notas#Eliminar uma nota|Eliminar uma nota]].

## Renomear um ficheiro ou pasta

1. Clique com o botão direito no ficheiro que pretende renomear e depois selecione **Renomear**.
2. Escreva o novo nome e pressione `Enter`.

Para mais informações, consulte [[Gerir notas#Renomear uma nota|Renomear uma nota]].

## Mover um ficheiro ou pasta

Para mover um ficheiro ou pasta, pode usar arrastar e soltar ou o menu de contexto.

**Arrastar e soltar:**

- Arraste um ficheiro ou pasta para a pasta para onde pretende movê-lo.
- Com `Alt-Click` (Windows/Linux) ou `Opt-Click` (macOS) pode selecionar vários ficheiros individuais e arrastá-los para outra pasta. Se estiverem todos em sequência, pode usar `Shift-Click` para isso.

**Menu de contexto:**

1. Clique com o botão direito num ficheiro e depois selecione **Mover ficheiro para...**.
2. Pesquise o nome da pasta para onde pretende mover o ficheiro e depois selecione-a da lista.

## Usar o menu de contexto

O menu de contexto lista as ações disponíveis para um ficheiro ou pasta. Muitos dos itens de ficheiro também aparecem no [[Menu de mais opções]].

### Desktop

Clique com o botão direito num ficheiro ou pasta no explorador de ficheiros.

**Ficheiros**

- **Abrir numa nova aba** e **Abrir à direita** abrem o ficheiro num novo separador ou num painel à direita.
- **Abrir numa nova janela** abre o ficheiro na sua própria janela. Consulte [[Janelas pop-out]].
- **Duplicar** cria uma cópia do ficheiro.
- **Mover ficheiro para...** move o ficheiro para outra pasta. Consulte [[#Mover um ficheiro ou pasta]].
- **Marcar...** adiciona o ficheiro aos seus marcadores. Requer o plugin Marcadores. Consulte [[Marcadores#Adicionar um marcador]].
- **Fundir ficheiro inteiro com...** combina a nota com outra. Requer o plugin Compositor de notas. Consulte [[Compositor de notas#Mesclar notas]].
- **Publicar ficheiro atual** publica a nota no seu site. Requer o Obsidian Publish. Consulte [[Introdução ao Obsidian Publish|Publish]].
- **Copiar caminho** copia a localização do ficheiro como URL do Obsidian, a partir da pasta do cofre ou a partir da raiz do sistema.
- **Abrir histórico de versões** mostra versões anteriores do ficheiro. Requer uma subscrição ativa do Obsidian Sync. Consulte [[História de versionamento]].
- **Abrir no aplicativo padrão** abre o ficheiro na aplicação que o seu computador usa para esse tipo de ficheiro.
- **Revelar no sistema de ficheiros** mostra o ficheiro no seu gestor de ficheiros. No macOS, o item apresenta **Revelar no Finder**. No Windows e Linux, apresenta **Mostrar na pasta**.
- **Renomear...** altera o nome do ficheiro. Consulte [[#Renomear um ficheiro ou pasta]].
- **Eliminar** elimina o ficheiro. Consulte [[#Eliminar um ficheiro ou pasta]].

**Pastas**

- **Nova nota** e **Nova pasta** criam uma nota ou uma pasta dentro da pasta. Consulte [[#Criar uma nova nota]] e [[#Criar uma nova pasta]].
- **Novo Canvas** cria um Canvas na pasta. Consulte [[Canvas]].
- **Nova base** cria uma base na pasta. Consulte [[Introdução ao Bases]].
- **Duplicar** cria uma cópia da pasta.
- **Mover pasta para...** move a pasta para dentro de outra pasta.
- **Pesquisar na pasta** pesquisa apenas os ficheiros na pasta. Consulte [[Pesquisar]].
- **Marcar...** adiciona a pasta aos seus marcadores.
- **Copiar caminho** copia a localização da pasta a partir da pasta do cofre ou a partir da raiz do sistema.
- **Revelar no sistema de ficheiros** mostra a pasta no seu gestor de ficheiros, e apresenta o mesmo que para ficheiros.
- **Renomear...** e **Eliminar** alteram o nome da pasta ou eliminam a pasta.

### Móvel

Toque e mantenha premido numa pasta no explorador de ficheiros. O menu tem os mesmos itens que o menu de pasta do desktop, exceto **Marcar...** e **Revelar no sistema de ficheiros**.
