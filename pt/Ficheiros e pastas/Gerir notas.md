---
permalink: manage-notes
publish: true
mobile: false
description: null
---
Pode gerir ficheiros e pastas de várias formas, utilizando [[Atalhos de teclado]], [[Paleta de comando|comandos]], ou o [[Explorador de ficheiros]].

## Criar uma nova nota

Para criar um novo ficheiro:

1. Prima `Ctrl+N` (ou `Cmd+N` no macOS).
2. Introduza o nome da nota e depois prima `Enter` para começar a editar a nota.

Também pode criar notas utilizando o [[Explorador de ficheiros#Criar uma nova nota|Explorador de ficheiros]], ou selecionando **Criar nova nota** a partir da [[Paleta de comando]].

> [!hint] Limitação de caracteres do sistema
> O Obsidian respeita as limitações de nomes de ficheiro do sistema operativo onde cria a nota. Se planeia [[Sincronizar notas entre dispositivos|sincronizar as suas notas entre dispositivos]], certifique-se de que os nomes dos ficheiros são [seguros para outros sistemas operativos](https://stackoverflow.com/q/1976007).
^blockquote-system-limitation

## Abrir ficheiros fora do seu cofre

No desktop, pode abrir e editar ficheiros Markdown individuais fora do seu cofre. Os ficheiros abrem na sua janela atual e permanecem na sua localização original.

> [!note] Requer o Obsidian 1.14 e o instalador mais recente
> [[Atualizar o Obsidian#Atualizações do instalador|Atualize o seu instalador]] descarregando o Obsidian a partir de [obsidian.md/download](https://obsidian.md/download) e reinstalando a aplicação.

Para abrir um ficheiro Markdown:

1. Abra a [[Paleta de comando]].
2. Selecione **Abrir ficheiro de fora do cofre...**.
3. Escolha um ficheiro Markdown no seu computador.

Também pode utilizar o menu **Abrir com** do seu sistema operativo e selecionar **Obsidian**. Para abrir ficheiros Markdown no Obsidian por predefinição, defina-o como a aplicação predefinida para ficheiros `.md`.

As incorporações de imagens e ligações para outros ficheiros locais são resolvidas relativamente à pasta do ficheiro Markdown. Utilize o [[Esquema]] para navegar por cabeçalhos e as [[Ligações de saída]] para explorar ficheiros ligados.

### Pré-visualizar ficheiros com o Quick Look

No macOS, selecione um ficheiro Markdown no Finder e prima `Espaço` para o pré-visualizar com o **Quick Look**. As pré-visualizações do Quick Look funcionam mesmo quando o Obsidian está fechado.

## Renomear uma nota

Para renomear uma nota ativa:

1. Selecione o nome da nota no topo do editor (ou prima `F2`).
2. Introduza o novo nome e depois prima `Enter`.

Quando renomeia um ficheiro, o Obsidian atualiza automaticamente todas as ligações para esse ficheiro.

Pode renomear uma nota ou pasta sem a abrir, utilizando o [[Explorador de ficheiros#Renomear um ficheiro ou pasta|Explorador de ficheiros]]

## Eliminar uma nota

Para eliminar uma nota, selecione **Mais opções → Eliminar ficheiro** no canto superior direito de uma nota ativa.

Ou, selecione **Eliminar ficheiro atual** a partir da [[Paleta de comando]].

Também pode eliminar uma nota ou pasta, utilizando o [[Explorador de ficheiros#Eliminar um ficheiro ou pasta|Explorador de ficheiros]].

> [!note] O que acontece aos ficheiros depois de os eliminar?
> Para alterar o que acontece aos ficheiros eliminados, selecione uma das seguintes opções em **[[Definições]] → Ficheiros e Ligações**:
>
> - **Lixo do sistema**: Por predefinição, os ficheiros eliminados vão para o lixo do sistema do seu sistema operativo. Para restaurar um ficheiro, utilize o seu gestor de ficheiros preferido.
> - **Lixo do Obsidian**: Pode enviar ficheiros eliminados para uma pasta `.trash` no seu cofre.
> - **Eliminar permanentemente**: Os ficheiros são imediatamente eliminados sem qualquer forma de os restaurar.
