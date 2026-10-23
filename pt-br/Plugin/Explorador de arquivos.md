---
permalink: plugins/file-explorer
publish: true
mobile: true
description: O Explorador de arquivos é um plugin nativo que permite gerenciar arquivos e pastas dentro do seu cofre.
aliases:
  - Plugins/Explorador de arquivos
---
O Explorador de arquivos é um [[Plugins nativos|plugin nativo]] que permite gerenciar arquivos e pastas dentro do seu cofre. Você pode navegar por notas e outros [[Formatos de arquivo aceitos]] no seu cofre e realizar muitas operações comuns de arquivo:

- Criar, excluir e renomear arquivos e pastas.
- Mover arquivos e pastas com arrastar e soltar.
- Usar o [[#Usar o menu de contexto|menu de contexto]] para acessar todas as operações disponíveis.

> [!tip]- Arrastar e soltar arquivos
> Você pode arrastar um arquivo do Explorador de arquivos para sua nota para criar um link para ele, ou arrastar um arquivo para uma pasta no Explorador de arquivos para copiá-lo.

## Criar uma nova nota

Para criar uma nova nota no local padrão para novas notas:

1. Selecione **Nova nota** ![[lucide-pen-line.svg#icon]] no topo do Explorador de arquivos.
2. Digite o nome da nota e pressione `Enter`.

> [!tip]- Alterar o local padrão
> Você pode alterar o local padrão para novas notas em **[[Configurações]] → [[Configurações#Arquivos & Links|Arquivos & Links]] → [[Configurações#Local padrão para novas notas|Local padrão para novas notas]]**.

Para criar uma nova nota em uma pasta específica:

1. Clique com o botão direito na pasta e depois selecione **Nova nota**.
2. Digite o nome da nota e pressione `Enter`.

## Criar uma nova pasta

Para criar uma nova pasta na raiz do seu cofre:

1. Selecione **Nova pasta** ![[lucide-folder-plus.svg#icon]] no topo do Explorador de arquivos.
2. Digite o nome da pasta e pressione `Enter`.

Para criar uma subpasta:

1. Clique com o botão direito na pasta onde deseja criar a subpasta e depois selecione **Nova pasta**.
2. Digite o nome da pasta e pressione `Enter`.

## Mudar ordenação

Para mudar a ordenação dos seus arquivos:

1.  Selecione **Mudar ordenação** ![[lucide-arrow-up-narrow-wide.svg#icon]] no topo do Explorador de arquivos.
2. Escolha como deseja ordenar seus arquivos. Você pode ordenar em ordem crescente ou decrescente por nome, horário de modificação ou horário de criação.

## Revelar automaticamente o arquivo ativo

Quando você abre uma nota, o Explorador de arquivos pode rolar automaticamente até essa nota e destacá-la na árvore de pastas. Isso ajuda você a acompanhar onde sua nota ativa está localizada dentro do seu cofre.

Para alternar a revelação automática:

- Selecione **Revelar automaticamente arquivo ativo** ![[lucide-gallery-vertical.svg#icon]] no topo do Explorador de arquivos.

Quando ativado, o Explorador de arquivos seguirá e revelará automaticamente a nota ativa.

## Expandir ou recolher todas as pastas

Você pode expandir ou recolher todas as pastas no Explorador de arquivos de uma vez.

Para expandir todas as pastas:

- Selecione **Expandir tudo** ![[lucide-chevrons-up-down.svg#icon]] no topo do Explorador de arquivos.

Para recolher todas as pastas:

- Selecione **Recolher todos** ![[lucide-chevrons-down-up.svg#icon]] no topo do Explorador de arquivos.

## Excluir um arquivo ou pasta

1. Clique com o botão direito no arquivo que deseja excluir e depois selecione **Excluir**.
2. Se solicitado a confirmar que deseja excluir o arquivo, selecione **Excluir**.

Para mais informações, consulte [[Gerenciar notas#Excluir uma nota|Excluir uma nota]].

## Renomear um arquivo ou pasta

1. Clique com o botão direito no arquivo que deseja renomear e depois selecione **Renomear**.
2. Digite o novo nome e pressione `Enter`.

Para mais informações, consulte [[Gerenciar notas#Renomear uma nota|Renomear uma nota]].

## Mover um arquivo ou pasta

Para mover um arquivo ou pasta, você pode usar arrastar e soltar ou o menu de contexto.

**Arrastar e soltar:**

- Arraste um arquivo ou pasta para a pasta para onde deseja movê-lo.
- Com `Alt-Clique` (Windows/Linux) ou `Opt-Clique` (macOS) você pode selecionar múltiplos arquivos individuais e arrastá-los para outra pasta. Se estiverem todos em sequência, você pode usar `Shift-Clique` para isso.

**Menu de contexto:**

1. Clique com o botão direito em um arquivo e selecione **Mover arquivo para...**.
2. Pesquise o nome da pasta para onde deseja mover o arquivo e selecione-a na lista.

## Usar o menu de contexto

O menu de contexto lista as ações disponíveis para um arquivo ou pasta. Muitos dos itens de arquivo também aparecem no [[Menu Mais opções]].

### Desktop

Clique com o botão direito em um arquivo ou pasta no Explorador de arquivos.

**Arquivos**

- **Abrir em nova aba** e **Abrir à direita** abrem o arquivo em uma nova aba ou em um painel à direita.
- **Abrir em nova janela** abre o arquivo em sua própria janela. Veja [[Janelas pop-out]].
- **Duplicar** cria uma cópia do arquivo.
- **Mover arquivo para...** move o arquivo para outra pasta. Veja [[#Mover um arquivo ou pasta]].
- **Favoritar...** adiciona o arquivo aos seus favoritos. Requer o plugin Favoritos. Veja [[Favoritos#Adicionar um favorito]].
- **Mesclar arquivo inteiro com...** combina a nota com outra. Requer o plugin Compositor de notas. Veja [[Compositor de notas#Mesclar notas]].
- **Publicar arquivo atual** publica a nota no seu site. Requer o Obsidian Publish. Veja [[Introdução ao Obsidian Publish|Publish]].
- **Copiar caminho** copia a localização do arquivo como uma URL do Obsidian, a partir da pasta do cofre ou a partir da raiz do sistema.
- **Abrir histórico de versões** mostra versões anteriores do arquivo. Requer uma assinatura ativa do Obsidian Sync. Veja [[Histórico de versões]].
- **Abrir no aplicativo padrão** abre o arquivo no aplicativo que seu computador usa para aquele tipo de arquivo.
- **Revelar no sistema de arquivos** mostra o arquivo no seu gerenciador de arquivos. No macOS, o item aparece como **Revelar no Finder**. No Windows e Linux, aparece como **Mostrar no explorador do sistema**.
- **Renomear...** altera o nome do arquivo. Veja [[#Renomear um arquivo ou pasta]].
- **Excluir** exclui o arquivo. Veja [[#Excluir um arquivo ou pasta]].

**Pastas**

- **Nova nota** e **Nova pasta** criam uma nota ou uma pasta dentro da pasta. Veja [[#Criar uma nova nota]] e [[#Criar uma nova pasta]].
- **Novo canvas** cria um canvas na pasta. Veja [[Canvas]].
- **Nova base** cria uma base na pasta. Veja [[Introdução às Bases]].
- **Duplicar** cria uma cópia da pasta.
- **Mover pasta para...** move a pasta para dentro de outra pasta.
- **Pesquisar na pasta** pesquisa apenas os arquivos na pasta. Veja [[Pesquisa]].
- **Favoritar...** adiciona a pasta aos seus favoritos.
- **Copiar caminho** copia a localização da pasta a partir da pasta do cofre ou a partir da raiz do sistema.
- **Revelar no sistema de arquivos** mostra a pasta no seu gerenciador de arquivos, e aparece da mesma forma que para arquivos.
- **Renomear...** e **Excluir** alteram o nome da pasta ou excluem a pasta.

### Mobile

Pressione e segure uma pasta no Explorador de arquivos. O menu possui os mesmos itens do menu de pastas no desktop, exceto **Favoritar...** e **Revelar no sistema de arquivos**.
