---
permalink: data-storage
publish: true
mobile: true
description: Esta página explica como o Obsidian armazena seus dados no seu dispositivo.
---
O Obsidian armazena as suas notas como ficheiros de texto simples [[Sintaxe de formatação básica|formatados em Markdown]] num _cofre_. Um cofre é uma pasta no seu sistema de ficheiros local, incluindo quaisquer subpastas.

Como as notas são ficheiros de texto simples, pode utilizar outros editores de texto e gestores de ficheiros para editar e gerir notas. O Obsidian atualiza automaticamente o seu cofre para acompanhar quaisquer alterações externas.

Pode criar um cofre em qualquer lugar que o seu sistema operativo permita. O Obsidian sincroniza com o [[Introdução ao Obsidian Sync|Obsidian Sync]], Dropbox, iCloud, OneDrive, Git e muitos outros serviços de terceiros.

Pode abrir múltiplas pastas como cofres individuais, por exemplo, para separar notas de trabalho e de estudo.

> [!warning] Cofres dentro de cofres
> Como as [[Ligações internas]] são locais a um cofre, recomendamos que não crie cofres dentro de cofres. As ligações podem não ser atualizadas corretamente.

## Definições do cofre

O Obsidian cria uma [[Pasta de configuração|pasta de configuração]] `.obsidian` na pasta raiz do cofre, que contém preferências específicas desse cofre, como [[Atalhos de teclado|atalhos de teclado]], [[Temas|temas]] e [[Plugins da comunidade|plugins da comunidade]].

Por predefinição, a maioria dos sistemas operativos oculta pastas que começam com um ponto (`.`), pelo que poderá necessitar de atualizar as definições do seu gestor de ficheiros para a visualizar.

- **macOS**: No Finder, pressione `Cmd+Shift+.` (ponto) para mostrar ficheiros ocultos.
- **Windows**: [Mostrar ficheiros ocultos](https://support.microsoft.com/en-us/windows/show-hidden-files-0320fe58-0117-fd59-6851-9b7f9840fdb2)
+ **GNU/Linux:** Na maioria dos exploradores de ficheiros, pressione `Ctrl + h` para mostrar ficheiros ocultos.

> [!tip] Adicionar `.obsidian` ao Git
> Os ficheiros `.obsidian/workspace.json` e `.obsidian/workspaces.json` armazenam o esquema atual da área de trabalho e atualizam-se sempre que abre um novo ficheiro. Se utilizar [Git](https://git-scm.com) para gerir o seu cofre, poderá querer adicionar estes ficheiros ao `.gitignore`.

## Definições globais

O Obsidian armazena definições globais numa pasta do sistema. A localização da pasta do sistema depende do sistema operativo que está a utilizar.

- **macOS**: `/Users/nomedeutilizador/Library/Application Support/obsidian`
- **Windows**: `%APPDATA%\Obsidian\`
- **Linux**: `$XDG_CONFIG_HOME/obsidian/` ou `~/.config/obsidian/`

> [!warning] Não crie um cofre na pasta do sistema. Isso pode levar a dados corrompidos ou perda de dados.

## IndexedDB

O IndexedDB é uma base de dados de baixo nível do lado do cliente que o Obsidian utiliza para armazenamento interno. Ajuda a manter o estado das ligações do [[Introdução ao Obsidian Sync|Obsidian Sync]] e preserva a [[#Cache de metadados]] quando a aplicação é encerrada.

> [!warning] Se o [Modo de Bloqueio](<https://support.apple.com/en-us/105120>) da Apple estiver ativado e o Obsidian não estiver excluído, estes ficheiros de base de dados não serão guardados, exigindo reindexação cada vez que a aplicação é iniciada.

### Cache de metadados

Para proporcionar uma experiência rápida ao utilizar a aplicação, o Obsidian mantém um registo local de metadados sobre os ficheiros no seu cofre chamado **cache de metadados**. Estes metadados alimentam muitas funcionalidades em toda a aplicação, desde a vista de grafo à vista de Índice.

O Obsidian mantém esta cache sincronizada com os ficheiros no seu cofre, mas é possível que os dados fiquem dessincronizados dos ficheiros subjacentes. Caso isso aconteça no seu cofre, pode reconstruir a sua cache de metadados a partir das definições da aplicação na secção *Ficheiros & Links*.
