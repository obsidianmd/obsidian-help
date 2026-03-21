---
permalink: publish/sites
aliases:
  - Obsidian Publish/Gerenciar sites
---
Esta página explica como gerenciar sites do [[Introdução ao Obsidian Publish|Obsidian Publish]].

Um site é uma coleção de notas hospedada pelo Obsidian Publish e disponível online, seja por meio de um endereço do Obsidian Publish ou de um [[Domínios personalizados|domínio personalizado]].

## Criar um novo site

> [!note] O número de sites que você pode ter ao mesmo tempo é determinado pela sua assinatura do Obsidian Publish. Antes de criar um novo site, certifique-se de que sua assinatura permite isso.

1. No menu lateral, à esquerda da janela do aplicativo, clique em **Publicar alterações** ( ![[lucide-send.svg#icon]] ).
2. Se você já tiver um site existente, clique em **Trocar site** ( ![[lucide-repeat.svg#icon]] ).
3. Em **Identificação do site**, insira o caminho que deseja para seu site. Por exemplo, um site com o ID `my-amazing-site` estará disponível em publish.obsidian.md/my-amazing-site.
4. Clique em **Criar**.

## Excluir um site existente

> [!note] As notas permanecem no seu cofre mesmo após você excluir um site.

1. No menu lateral, à esquerda da janela do aplicativo, clique em **Publicar alterações** ( ![[lucide-send.svg#icon]] ).
2. Clique em **Trocar site** ( ![[lucide-repeat.svg#icon]] ).
3. Clique em **Deletar Site** ( ![[lucide-x.svg#icon]] ) à direita do site que deseja excluir.
4. Clique em **Excluir** para confirmar.

## Alternar entre sites

1. No menu lateral, à esquerda da janela do aplicativo, clique em **Publicar alterações** ( ![[lucide-send.svg#icon]] ).
2. Clique em **Trocar site** ( ![[lucide-repeat.svg#icon]] ).
3. Clique em **Escolher** à direita do site para o qual deseja alternar.

## Alterar a identificação do site

1. No menu lateral, à esquerda da janela do aplicativo, clique em **Publicar alterações** ( ![[lucide-send.svg#icon]] ).
2. Clique em **Trocar site** ( ![[lucide-repeat.svg#icon]] ).
3. Clique em **Editar identificação do site** ( ![[lucide-edit-3.svg#icon]] ) à direita do site que deseja editar.
4. Em **Identificação do site**, insira o novo ID para seu site.
5. Clique em **Mudar**.

## Ver opções do site

1. No menu lateral, à esquerda da janela do aplicativo, clique em **Publicar alterações** ( ![[lucide-send.svg#icon]] ).
2. Na caixa de diálogo **Publicar alterações**, clique em **Alterar configurações do site** ( ![[lucide-cog.svg#icon]] ).

## Opções do site

### Geral

| Opção                                          | Tipo   | Descrição                                                                                                                           |
| ---------------------------------------------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------- |
| Nome do site                                   | Texto  | O nome público e título do seu site Obsidian Publish.                                                                               |
| Arquivo raiz                                   | Texto  | A localização do arquivo markdown que você deseja usar como página inicial.                                                         |
| Logo                                           | Texto  | A imagem que você deseja usar como banner do seu site. A imagem deve [[Publicar seu conteúdo#Publicar notas\|estar publicada]].     |
| Colaboração do site                            | Botão  | Declare outros usuários aos quais deseja dar acesso para editar suas notas publicadas. Os usuários devem ter uma conta Obsidian.    |
| Domínio personalizado                          | Botão  | [[Domínios personalizados]]                                                                                                        |
| Desabilitar indexação por mecanismos de busca   | Toggle | Impede que mecanismos de busca respeitosos rastreiem seu site adicionando um arquivo `robots.txt`.                                  |

### Aparência

| Opção                  | Tipo       | Descrição                                                                                            |
|------------------------|------------|------------------------------------------------------------------------------------------------------|
| Tema                   | Dropdown   | Escolha como seu tema é apresentado no site; **Claro**, **Escuro** ou **Adaptar ao sistema**.        |
| Alternar claro/escuro  | Toggle     | Permite que os usuários alternem entre modo **Claro**/**Escuro** com um botão no seu site.           |

## Experiência de leitura

| Opção                                   | Tipo   | Descrição                                                                                                        |
|-----------------------------------------|--------|------------------------------------------------------------------------------------------------------------------|
| Ativar modo espião                      | Toggle | Ativa ou desativa a pré-visualização de página ao passar o mouse sobre um link interno ativo.                    |
| Esconder título da página               | Toggle | Ativa ou desativa a exibição do título em linha de uma nota publicada.                                           |
| Margens de tamanho confortável          | Toggle | Ativa ou desativa margens de tamanho confortável no seu site.                                                    |
| Quebra de linha estrita                 | Toggle | Ativa ou desativa a exibição de quebras de linha simples no seu site.                                            |
| Usar rotação de painéis                 | Toggle | Ativa ou desativa [[Abas#Empilhar grupos de abas\|Abas empilhadas]] no seu site.                                |

### Componentes

| Opção                        | Tipo   | Descrição                                                                                                                                               |
|------------------------------|--------|---------------------------------------------------------------------------------------------------------------------------------------------------------|
| Mostrar navegação            | Toggle | Ativa ou desativa a visualização do [[Explorador de arquivos]] no seu site publicado.                                                                   |
| Customizar a navegação       | Botão  | [[Personalizar seu site#Customizar a navegação\|Personalize]] a ordem de como seus arquivos são listados se **Mostrar navegação** estiver ativado.      |
| Mostrar barra de pesquisa    | Toggle | Ativa ou desativa uma barra de pesquisa no seu site.                                                                                                    |
| Mostrar visualização em gráfico | Toggle | Ativa ou desativa a visualização em gráfico na barra lateral direita do seu site.                                                                    |
| Mostrar índice               | Toggle | Ativa ou desativa a visualização do [[Sumário\|Índice]] no seu site.                                                                                    |
| Mostrar links inversos       | Toggle | Ativa ou desativa [[Links inversos]] no seu site.                                                                                                            |

### Outras configurações do site

| Opção                                          | Tipo   | Descrição                                                                                                          |
| ---------------------------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------ |
| Senhas                                         | Botão  | [[Obsidian Publish/Segurança e privacidade#Adicionar uma senha do site\|Defina uma senha]] para restringir o acesso a todo o seu site. |
| Código de rastreamento do Google Analytics      | Texto  | **Somente para URL de domínio personalizado**. Insira aqui o código de rastreamento do Google Analytics do seu site.               |
