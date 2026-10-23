---
permalink: manage-notes
publish: true
mobile: false
description: null
aliases:
  - Como/Renomear notas
---
Você pode gerenciar arquivos e pastas de várias maneiras, usando [[Teclas de atalho]], [[Paleta de comandos|comandos]] ou [[Explorador de arquivos]].

## Criar uma nova nota

Para criar um novo arquivo:

1. Pressione `Ctrl+N` (ou `Cmd+N` no macOS).
2. Digite o nome da nota e pressione `Enter` para começar a editá-la.

Você também pode criar notas usando o [[Explorador de arquivos#Criar uma nova nota|Explorador de arquivos]], ou selecionando **Criar nova nota** na [[Paleta de comandos]].

> [!hint] Limitação de caracteres do sistema
> O Obsidian respeitará as limitações de nome de arquivo do sistema operacional em que você criar a nota. Se você planeja [[Sincronizar suas notas entre dispositivos|sincronizar suas notas entre dispositivos]], certifique-se de que seus nomes de arquivo sejam [seguros para outros sistemas operacionais](https://stackoverflow.com/q/1976007).
^blockquote-system-limitation

## Abrir arquivos fora do seu cofre

No desktop, você pode abrir e editar arquivos Markdown individuais fora do seu cofre. Os arquivos abrem na sua janela atual e permanecem em sua localização original.

> [!note] Requer Obsidian 1.14 e o instalador mais recente
> [[Atualizar o Obsidian#Atualizações do instalador|Atualize seu instalador]] baixando o Obsidian em [obsidian.md/download](https://obsidian.md/download) e reinstalando o aplicativo.

Para abrir um arquivo Markdown:

1. Abra a [[Paleta de comandos]].
2. Selecione **Abrir arquivo de fora do cofre...**.
3. Escolha um arquivo Markdown no seu computador.

Você também pode usar o menu **Abrir com** do seu sistema operacional e selecionar **Obsidian**. Para abrir arquivos Markdown no Obsidian por padrão, defina-o como o aplicativo padrão para arquivos `.md`.

Incorporações de imagens e links para outros arquivos locais são resolvidos relativamente à pasta do arquivo Markdown. Use [[Esboço]] para navegar pelos cabeçalhos e [[Links de saída]] para explorar arquivos vinculados.

### Pré-visualizar arquivos com Quick Look

No macOS, selecione um arquivo Markdown no Finder e pressione `Espaço` para pré-visualizá-lo com o **Quick Look**. As pré-visualizações do Quick Look funcionam mesmo quando o Obsidian está fechado.

## Renomear uma nota

Para renomear uma nota ativa:

1. Selecione o nome da nota no topo do editor (ou pressione `F2`).
2. Digite o novo nome e pressione `Enter`.

Quando você renomeia um arquivo, o Obsidian atualiza automaticamente todos os links para esse arquivo.

Você pode renomear uma nota ou pasta sem abri-la, usando o [[Explorador de arquivos#Renomear um arquivo ou pasta|Explorador de arquivos]]

## Excluir uma nota

Para excluir uma nota, selecione **Mais opções → Excluir arquivo** no canto superior direito de uma nota ativa.

Ou selecione **Excluir o arquivo atual** na [[Paleta de comandos]].

Você também pode excluir uma nota ou pasta usando o [[Explorador de arquivos#Excluir um arquivo ou pasta|Explorador de arquivos]].

> [!note] O que acontece com os arquivos depois que eu os excluo?
> Para alterar o que acontece com os arquivos deletados, selecione uma das seguintes opções em **[[Configurações]] → Arquivos e Links**:
>
> - **Lixeira do sistema**: Por padrão, os arquivos deletados vão para a lixeira do sistema do seu sistema operacional. Para restaurar um arquivo, use seu gerenciador de arquivos preferido.
> - **Lixeira do Obsidian**: Você pode enviar arquivos deletados para uma pasta `.trash` no seu cofre.
> - **Excluir permanentemente**: Os arquivos são imediatamente excluídos sem nenhum meio de restaurá-los.
