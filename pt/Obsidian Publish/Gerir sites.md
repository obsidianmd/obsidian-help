---
permalink: publish/sites
---
Esta página explica como gerir sites [[Introdução ao Obsidian Publish|Obsidian Publish]].

Um site é uma coleção de notas alojada pelo Obsidian Publish e disponível online, quer através de um endereço Obsidian Publish ou de um [[Domínios personalizados|domínio personalizado]].

## Criar um novo site

> [!note] O número de sites que pode ter em simultâneo é determinado pela sua subscrição do Obsidian Publish. Antes de criar um novo site, certifique-se de que a sua subscrição o permite.

1. Na barra de ferramentas, à esquerda da janela da aplicação, clique em **Publicar alterações** ![[lucide-send.svg#icon]].
2. Se já tiver um site existente, clique em **Trocar de site** ![[lucide-repeat.svg#icon]].
3. Em **ID do site**, introduza o caminho que pretende para o seu site. Por exemplo, um site com o ID `my-amazing-site` está disponível em publish.obsidian.md/my-amazing-site.
4. Clique em **Criar**.

## Eliminar um site existente

> [!note] As notas permanecem no seu cofre mesmo depois de eliminar um site.

1. Na barra de ferramentas, à esquerda da janela da aplicação, clique em **Publicar alterações** ![[lucide-send.svg#icon]].
2. Clique em **Trocar de site** ![[lucide-repeat.svg#icon]].
3. Clique em **Eliminar site** ![[lucide-x.svg#icon]] à direita do site que pretende eliminar.
4. Clique em **Eliminar** para confirmar.

## Alternar entre sites

1. Na barra de ferramentas, à esquerda da janela da aplicação, clique em **Publicar alterações** ![[lucide-send.svg#icon]].
2. Clique em **Trocar de site** ![[lucide-repeat.svg#icon]].
3. Clique em **Escolher** à direita do site para o qual pretende mudar.

## Alterar o ID do site

1. Na barra de ferramentas, à esquerda da janela da aplicação, clique em **Publicar alterações** ![[lucide-send.svg#icon]].
2. Clique em **Trocar de site** ![[lucide-repeat.svg#icon]].
3. Clique em **Editar ID do site** ![[lucide-edit-3.svg#icon]] à direita do site que pretende editar.
4. Em **ID do site**, introduza o novo ID para o seu site.
5. Clique em **Mudar**.

## Ver opções do site

1. Na barra de ferramentas, à esquerda da janela da aplicação, clique em **Publicar alterações** ![[lucide-send.svg#icon]].
2. Na caixa de diálogo **Publicar alterações**, clique em **Mudar configurações do site** ![[lucide-cog.svg#icon]].

## Opções do site

### Geral

| Opção                                         | Tipo   | Descrição                                                                                                                              |
| --------------------------------------------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------- |
| Nome do site                                  | Entrada| O nome público e título do seu site Obsidian Publish.                                                                                  |
| Ficheiro da página inicial                    | Entrada| A localização do ficheiro Markdown que pretende que funcione como página de entrada.                                                   |
| Logótipo                                      | Entrada| A imagem que pretende que funcione como banner do seu site. A imagem deve [[Publicar o seu conteúdo#Publicar notas\|estar publicada]]. |
| Colaboradores do site                         | Botão  | Declare outros utilizadores a quem pretende dar acesso para editar as suas notas publicadas. Os utilizadores devem ter uma conta Obsidian. |
| Domínio personalizado                         | Botão  | [[Domínios personalizados]]                                                                                                            |
| Não permitir indexação do motor de pesquisa   | Alternador | Impede que motores de pesquisa respeitáveis rastreiem o seu site ao adicionar um ficheiro `robots.txt`.                            |

### Aparência

| Opção                        | Tipo       | Descrição                                                                                          |
|------------------------------|------------|-----------------------------------------------------------------------------------------------------|
| Tema                         | Menu suspenso | Escolha como o seu tema se apresenta no seu site; **Claro**, **Escuro** ou **Adaptar ao sistema**. |
| Alternar entre Claro/Escuro  | Alternador | Permite que os utilizadores alternem entre o modo **Claro**/**Escuro** com um botão no seu site.   |

## Experiência de leitura

| Opção                        | Tipo       | Descrição                                                                                                    |
|------------------------------|------------|--------------------------------------------------------------------------------------------------------------|
| Mostrar pré-visualização     | Alternador | Ativar ou desativar a pré-visualização de página ao passar o cursor sobre uma ligação interna ativa.         |
| Esconde título da página     | Alternador | Ativar ou desativar a exibição do título em linha de uma nota publicada.                                     |
| Linhas de tamanho legível    | Alternador | Ativar ou desativar o comprimento legível de linhas no seu site.                                             |
| Quebra de linha estrita      | Alternador | Ativar ou desativar a exibição de quebras de linha simples no seu site.                                      |
| Usar rotação de painéis      | Alternador | Ativar ou desativar [[Separadores#Empilhar grupos de separadores\|Separadores empilhados]] no seu site.      |

### Componentes

| Opção                        | Tipo       | Descrição                                                                                                                                         |
|------------------------------|------------|---------------------------------------------------------------------------------------------------------------------------------------------------|
| Mostrar navegação            | Alternador | Ativar ou desativar a vista do [[Explorador de ficheiros]] no seu site publicado.                                                                 |
| Personalizar navegação       | Botão      | [[Personalizar o seu site#Personalizar navegação\|Personalizar]] a ordem como os seus ficheiros são listados se **Mostrar navegação** estiver ativado. |
| Mostrar barra de pesquisa    | Alternador | Ativar ou desativar uma barra de pesquisa no seu site.                                                                                            |
| Mostrar Visualização de diagrama de grafo | Alternador | Ativar ou desativar a vista de grafo na barra lateral direita do seu site.                                                          |
| Mostrar índice               | Alternador | Ativar ou desativar a vista do [[Índice\|Índice]] no seu site.                                                                                    |
| Mostrar backlinks            | Alternador | Ativar ou desativar os [[Links inversos]] no seu site.                                                                                            |

### Outras definições do site

| Opção                                        | Tipo   | Descrição                                                                                                              |
| -------------------------------------------- | ------ | ---------------------------------------------------------------------------------------------------------------------- |
| Palavras-passe                               | Botão  | [[Obsidian Publish/Segurança e privacidade#Add a site password\|Definir uma palavra-passe]] para restringir o acesso a todo o seu site. |
| Código de recolha de dados do Google Analytics | Entrada | **Apenas para URL de domínio personalizado**. Coloque aqui o código de rastreamento do Google Analytics para o seu site.             |
