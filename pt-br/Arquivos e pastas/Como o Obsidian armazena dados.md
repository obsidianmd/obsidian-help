---
permalink: data-storage
publish: true
mobile: true
description: Esta página explica como o Obsidian armazena seus dados no seu dispositivo.
---
O Obsidian armazena suas notas como arquivos de texto simples [[Sintaxe de formatação básica|formatados em Markdown]] em um _cofre_. Um cofre é uma pasta no seu sistema de arquivos local, incluindo quaisquer subpastas.

Como as notas são arquivos de texto simples, você pode usar outros editores de texto e gerenciadores de arquivos para editar e gerenciar notas. O Obsidian atualiza automaticamente seu cofre para acompanhar quaisquer alterações externas.

Você pode criar um cofre em qualquer lugar que seu sistema operacional permita. O Obsidian sincroniza com [[Introdução ao Obsidian Sync|Obsidian Sync]], Dropbox, iCloud, OneDrive, Git e muitos outros serviços de terceiros.

Você pode abrir várias pastas como cofres individuais, por exemplo, para separar notas de trabalho e da escola.

> [!warning] Cofres dentro de cofres
> Como os [[Links internos]] são locais a um cofre, recomendamos que você não crie cofres dentro de cofres. Os links podem não ser atualizados corretamente.

## Configurações do cofre

O Obsidian cria uma [[Pasta de configuração]] `.obsidian` na pasta raiz do cofre, que contém preferências específicas daquele cofre, como [[Teclas de atalho|teclas de atalho]], [[Temas|temas]] e [[Plugins da comunidade|plugins da comunidade]].

Por padrão, a maioria dos sistemas operacionais oculta pastas que começam com um ponto (`.`), então você pode precisar atualizar as configurações do seu gerenciador de arquivos para visualizá-la.

- **macOS**: No Finder, pressione `Cmd+Shift+.` (ponto) para mostrar arquivos ocultos.
- **Windows**: [Mostrar arquivos ocultos](https://support.microsoft.com/pt-br/windows/show-hidden-files-0320fe58-0117-fd59-6851-9b7f9840fdb2)
+ **GNU/Linux:** Na maioria dos Exploradores de Arquivos, pressione `Ctrl + h` para mostrar arquivos ocultos.

> [!tip] Adicionando `.obsidian` ao Git
> Os arquivos `.obsidian/workspace.json` e `.obsidian/workspaces.json` armazenam o leiaute atual da área de trabalho e são atualizados sempre que você abre um novo arquivo. Se você usa [Git](https://git-scm.com) para gerenciar seu cofre, pode querer adicionar esses arquivos ao `.gitignore`.

## Configurações globais

O Obsidian armazena configurações globais em uma pasta do sistema. A localização da pasta do sistema depende do sistema operacional que você está usando.

- **macOS**: `/Users/nomedeusuario/Library/Application Support/obsidian`
- **Windows**: `%APPDATA%\Obsidian\`
- **Linux**: `$XDG_CONFIG_HOME/obsidian/` ou `~/.config/obsidian/`

> [!warning] Não crie um cofre na pasta do sistema. Isso pode levar a dados corrompidos ou perda de dados.

## IndexedDB

IndexedDB é um banco de dados de baixo nível do lado do cliente que o Obsidian usa para armazenamento no backend. Ele ajuda a manter o estado das conexões do [[Introdução ao Obsidian Sync|Obsidian Sync]] e preserva o [[#Cache de metadados]] quando o aplicativo é fechado.

> [!warning] Se o [Modo de Bloqueio](<https://support.apple.com/en-us/105120>) da Apple estiver ativado e o Obsidian não estiver excluído, esses arquivos de banco de dados não serão salvos, exigindo reindexação toda vez que o aplicativo iniciar.

### Cache de metadados

Para proporcionar uma experiência rápida ao usar o aplicativo, o Obsidian mantém um registro local de metadados sobre os arquivos no seu cofre chamado **cache de metadados**. Esses metadados alimentam muitos recursos no aplicativo, desde a Visão de grafo até o Sumário.

O Obsidian mantém esse cache sincronizado com os arquivos no seu cofre, mas é possível que os dados fiquem dessincronizados com os arquivos subjacentes. Caso isso aconteça no seu cofre, você pode reconstruir seu cache de metadados nas configurações do aplicativo na seção *Arquivos & Links*.
