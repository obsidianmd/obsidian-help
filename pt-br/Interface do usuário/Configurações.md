---
permalink: settings
publish: true
mobile: true
description: Aprenda como personalizar o Obsidian através da interface de Configurações.
---
As Configurações permitem que você personalize sua experiência com o Obsidian. Configure opções gerais, preferências do editor, aparência, atalhos de teclado e gerencie tanto plugins nativos quanto da comunidade.

## Abrir Configurações

### Desktop

Na [[Barra lateral#Abrir barras laterais ocultas|barra lateral esquerda]], selecione **[[Configurações]]** ( ![[lucide-cog.svg#icon]] ). Você também pode abrir as Configurações com a [[Paleta de comandos]].

### Dispositivo móvel

Na barra lateral esquerda, selecione **[[Configurações]]** ( ![[lucide-cog.svg#icon]] ).

## Organização das configurações

As configurações são organizadas nas seguintes categorias:

- **Configurações** — Configurações principais do aplicativo, incluindo [[#Geral]], [[#Editor]], [[#Arquivos e links]], [[#Aparência]] e [[#Teclas de atalho]].
- **[[Plugins nativos]]** — Plugins integrados que vêm com o Obsidian.
- **[[Plugins da comunidade]]** — Plugins de terceiros instalados pela comunidade.

## Geral

A página Geral contém informações de versão, configurações de atualização, preferências de idioma e gerenciamento de conta.

### Versão e atualizações

Veja sua versão atual do Obsidian e a versão do instalador no topo da página. Selecione **Verificar por atualizações** para verificar manualmente novas versões, ou selecione **[Ler o changelog](<https://obsidian.md/changelog/>)** para ver as notas de lançamento.

**Atualizar automaticamente**

Quando ativado, o Obsidian verifica automaticamente novas versões e notifica você quando atualizações estão disponíveis.

**Receber compilações internas**

Atualizar automaticamente para as últimas [[Versões de acesso antecipado]]. Essas versões incluem novos recursos, mas podem ser menos estáveis.

> [!info]+ Licença Catalyst necessária
> Esta opção está disponível apenas para usuários com uma [[Licença Catalyst]].

### Idioma

Selecione seu idioma preferido para a interface do Obsidian. Selecione **[[Traduções|Saiba como adicionar um novo idioma ao Obsidian]]** para contribuir com uma tradução.

### Ajuda

Selecione **[[Início|Abrir]]** para acessar recursos de ajuda, incluindo documentação, fóruns da comunidade e guias de solução de problemas.

### Conta

Gerencie sua conta e licenças do Obsidian.

**Sua conta**

Veja as informações da sua conta, incluindo nome de usuário e e-mail. Selecione **[Gerenciar](https://obsidian.md/account)** para acessar as configurações da conta, ou selecione **Sair** para desconectar no aplicativo.

**Licença Catalyst**

Veja o status da sua licença Catalyst. Se você tem uma [[Licença Catalyst]] ativa, seu nível de licença aparece aqui.

**Licença comercial**

Se você apoia o [Obsidian para trabalho](<https://obsidian.md/blog/free-for-work/>), selecione **Ativar** para inserir uma chave de licença comercial, ou selecione **[Comprar](https://obsidian.md/account/commercial)** para adquirir uma licença. Selecione **[[Licença comercial|Saiba mais]]** para informações sobre Licenças Comerciais.

### Avançado

#### Notifique se a inicialização demorar mais do que o esperado

Quando ativado, o Obsidian exibe uma notificação se a inicialização estiver incomumente lenta. A notificação inclui informações de diagnóstico sobre o que está causando o atraso. Selecione o ícone de cronômetro ( ![[lucide-timer.svg#icon]] ) ao lado desta configuração para [[Ajuda e suporte#Verificar tempo de inicialização|verificar seu tempo de inicialização]].

## Editor

A página do Editor contém configurações sobre como você visualiza e edita notas.

### Sempre focar em novas abas

Ao abrir um link em uma nova aba, mudar para ela imediatamente.

### Visualização padrão para novas abas

A visualização padrão na qual uma nova aba de arquivo Markdown é aberta. Escolha entre [[Visualizações e modo de edição#Modo de leitura|Visualizar]] ou [[Visualizações e modo de edição#Modo de edição|Editor]].

### Modo de edição padrão

O modo de edição padrão com o qual um novo painel começará. Escolha entre [[Visualizações e modo de edição#Visualização ao vivo|Visualização ao vivo]] ou [[Visualizações e modo de edição#Modo de origem|Modo de origem]].

### Status do editor

Mostra o alternador de modo de edição na [[Barra de status|barra de status]].

### Tela

#### Margens de tamanho confortável

Limita a largura máxima das margens de uma nota. Cabe menos conteúdo na tela, mas deixa os parágrafos mais legíveis.

#### Quebra de linha estrita

As especificações do Markdown ignoram [[Sintaxe de formatação básica#Quebras de linha|Quebras de linha]] únicas no modo de leitura. Desative isto para tornar quebras de linha únicas visíveis.

#### Propriedades nos documentos

Escolha como as [[Propriedades|propriedades]] são exibidas no topo das notas. Selecione **Original** para mostrar as propriedades como YAML bruto.

#### Esconder seção

[[Dobramento|Esconde]] todo o conteúdo sob um cabeçalho selecionando o ícone de recolher ao lado dele.

### Esconder indentação

[[Dobramento|Esconde]] parte de uma indentação, como listas, selecionando o ícone de recolher.

#### Números de linha

Mostra os números das linhas.

#### Guias de recuo

Mostrar linhas de relacionamento verticais entre marcadores para orientação visual.

#### Direita para esquerda (RTL)

Define a direção do texto das notas a serem exibidas da direita para a esquerda.

#### Criação em pares de parênteses

Cria parênteses e aspas em pares.

#### Criação em pares de sintaxe Markdown

Cria símbolos para negrito e itálico em pares.

#### Listas com indentação inteligente

Cuida da indentação e marcadores de lista para você.

#### Usar tabulações

Use tabulações para recuar pressionando a tecla Tab. Desative isto para recuar usando 4 espaços.

#### Conversor automático de HTML

Converte automaticamente HTML para Markdown ao colar e arrastar e soltar de páginas web.

Use `Ctrl/Cmd+Shift+V` para colar HTML sem converter.

### Funcionamento

#### Verificação ortográfica

Ativa a verificação ortográfica. Selecione o ícone de engrenagem para remover itens salvos do dicionário personalizado.

#### Idiomas para verificação ortográfica

**Windows e Linux:**

Escolha os idiomas para o corretor ortográfico usar. Selecione o ícone de mais (+) para adicionar idiomas. Para remover um idioma, selecione o X ao lado dele.

**macOS:**

O corretor ortográfico nativo detecta automaticamente o idioma usado pelo SO.

#### Tamanho da tabulação

O número de espaços ao qual uma tabulação é equivalente.

### Avançado

#### Atalhos de teclado Vim

Permite utilizar atalhos Vim no editor.

## Arquivos e links

A página Arquivos e links contém configurações para gerenciamento de arquivos, links e comportamento do cofre.

### Local padrão para novas notas

Determine onde novas notas serão criadas. As opções incluem:

- **Raiz do cofre** — As notas são criadas na raiz do seu cofre.
- **Na mesma pasta que o arquivo atual** — As notas são criadas na mesma pasta da nota atualmente ativa.
- **Na pasta especificada abaixo** — As notas são criadas em uma pasta específica que você escolher.

### Pasta padrão para salvar novos arquivos

Onde novos [[Anexos|anexos]] adicionados são colocados. As opções incluem:

- **Raiz do cofre** — Os anexos são colocados na raiz do seu cofre.
- **Na pasta especificada abaixo** — Os anexos são colocados em uma pasta específica que você escolher.
- **Na mesma pasta que o arquivo atual** — Os anexos são colocados na mesma pasta da nota atualmente ativa.
- **Numa subpasta dentro da pasta em uso** — Os anexos são colocados em uma subpasta dentro da pasta da nota atual.

### Links

#### Formato para links novos

Qual formato de link inserir ao gerar [[Links internos|links internos]] automaticamente. As opções incluem:

- **Menor caminho possível** — Usa o menor caminho único para o arquivo vinculado.
- **Caminho relativo ao arquivo** — Usa um caminho relativo ao arquivo atual.
- **Caminho absoluto no cofre** — Usa o caminho completo a partir da raiz do cofre.

#### Sempre atualizar os links internos

Quando ativado, o Obsidian atualiza automaticamente os links internos quando você renomeia um arquivo. Desative isto para ser solicitado a atualizar links após renomear.

#### Usar Wikilinks

Gerar automaticamente Wikilinks para `[[links]]` e `![[imagens]]` em vez de links e imagens Markdown. Desative esta opção para gerar links Markdown.

#### Mostrar todos os tipos de arquivos

Mostre arquivos com extensões, mesmo para arquivos que não possam ser abertos no Obsidian para que eu possa inserir links e abri-los no File Explorer e Quick Switcher.

### Lixeira

#### Confirmar exclusão de arquivo

Perguntar antes de excluir um arquivo.

#### Arquivos deletados

Determine o que fazer com arquivos após os deletar. As opções incluem:

- **Mover para a lixeira do sistema** — Os arquivos são movidos para a lixeira do seu sistema operacional.
- **Mover para a lixeira do Obsidian** — Os arquivos são movidos para a pasta `.trash` no seu cofre.
- **Excluir permanentemente** — Os arquivos são excluídos permanentemente e não podem ser recuperados.

### Avançado

#### Arquivos excluídos

Os arquivos excluídos serão ocultados na [[Pesquisa]], [[Visão de grafo]] e Menções desvinculadas ([[Backlinks]] e [[Links de saída]]), e menos perceptíveis no [[Alternador rápido]] e sugestões de links. Selecione **Administrar** para configurar arquivos excluídos.

#### Sobrescrever pasta de configuração

Use uma [[Pasta de configuração|pasta de configuração]] diferente da padrão. Deve começar com um ponto.

#### Permitir callbacks de URI

Habilita o uso de x-callback-url através de x-success ou x-error ao lidar com [[Obsidian URI|URIs do Obsidian]].

#### Reconstruir cache do cofre

Reconstrói o [[Como o Obsidian armazena dados#Cache de metadados|cache de metadados]] do cofre. Reconstruir o cache pode levar de alguns segundos a alguns minutos, dependendo do tamanho do cofre. Selecione **Reconstruir** para iniciar o processo.

## Aparência

A página Aparência contém configurações para personalizar a aparência do Obsidian.

### Tema base

Escolha o esquema de cores padrão do Obsidian. As opções incluem:

- **Adaptar ao sistema** — Corresponde ao modo claro ou escuro do seu sistema operacional.
- **Claro** — Usa o modo claro.
- **Escuro** — Usa o modo escuro.

### Cor de destaque

Escolha a cor de destaque usada em todo o app. Selecione o seletor de cores ou o ícone de redefinir para personalizar.

### Temas

Gerencie os [[Temas|temas]] instalados e navegue pelos temas da comunidade. Selecione **Administrar** para visualizar e instalar temas. O menu suspenso mostra seu tema atualmente ativo. O ícone de pasta ( ![[lucide-folder-open.svg#icon]] ) abre a pasta de temas na sua [[Pasta de configuração|pasta de configuração]].

### Temas da comunidade atuais

Exibe o número de temas da comunidade que você tem instalados.

### Fonte

#### Fonte da interface

Definir fonte básica para todo o Obsidian. Selecione **Administrar** para escolher uma fonte personalizada ou inserir um nome de fonte.

#### Fonte do texto

Definir fonte para os modos de edição e leitura. Selecione **Administrar** para escolher uma fonte personalizada ou inserir um nome de fonte.

#### Fonte monoespaçada

Definir fonte para lugares como blocos de código e pré-texto. Selecione **Administrar** para escolher uma fonte personalizada ou inserir um nome de fonte.

#### Tamanho da fonte

Tamanho da fonte em pixels que afeta o editor e a pré-visualização. Ajuste usando o controle deslizante.

#### Ajuste rápido do tamanho da fonte

Ajuste o tamanho da fonte usando `Ctrl+Scroll` (Windows/Linux) ou `Cmd+Scroll` (macOS), ou usando o gesto de pinça no trackpad.

### Interface

#### Título em linha

Exibe o nome do arquivo como um título editável em linha com o conteúdo do arquivo. O título em linha age como um cabeçalho dentro do Obsidian, mas não adiciona um cabeçalho à sua nota.

#### Mostrar a barra de título da aba

Exibe o cabeçalho no topo de cada aba.

#### Mostrar o menu lateral

Exibir barra de ferramentas vertical na lateral da janela. Saiba mais sobre a [[Faixa de opções|faixa de opções]].

#### Configuração da faixa de opções

Configura quais itens devem aparecer na faixa de opções. Selecione **Administrar** para personalizar.

> [!info]+ Configuração da faixa de opções no celular
> No celular, a personalização da faixa de opções funciona de forma diferente. Veja [[Faixa de opções#Celular|Personalização da faixa de opções no celular]] para detalhes.

### Avançado

#### Zoom

Controla o nível de zoom geral do app. Ajuste usando o controle deslizante.

#### Menus nativos

Menus em todo o app corresponderão ao sistema operacional. Eles não serão afetados pelo seu tema.

#### Estilo da janela

Determina o estilo da barra de título das janelas do Obsidian. Requer uma reinicialização completa para ter efeito. As opções incluem:

- **Estilo do Obsidian** — Usa o quadro de janela personalizado do Obsidian.
- **Estilo nativo** — Usa o quadro de janela padrão do seu sistema operacional.
- **Quadro oculto** — Oculta a barra de título completamente.

#### Ícone customizado

Define um ícone customizado para o app. Selecione **Escolher** para selecionar um arquivo de ícone (`.icns`, `.ico`, `.png` ou `.svg`). Saiba mais sobre [[Aparência#Ícone customizado do app|ícones customizados do app]].

#### Janela translúcida

Ativa o efeito translúcido para realçar a percepção de profundidade. Aprimorado para o modo escuro. Não suportado no Linux.

> [!info]+ Apenas macOS
> Este recurso foi projetado principalmente para macOS. Saiba mais sobre [[Aparência#Translucidez|translucidez]].

#### Aceleração de Hardware

Ativa a Aceleração de Hardware, que usa sua GPU para deixar o Obsidian mais fluido. Se você desativar isto, o desempenho do app pode ser severamente degradado, mas pode resolver alguns problemas raros.

### Fragmentos CSS

Gerencie e visualize [[Trechos CSS|fragmentos CSS]] armazenados no seu cofre. Os Fragmentos CSS são armazenados em `/cofre/.obsidian/snippets/`. Selecione o ícone de atualizar para recarregar os fragmentos, ou o ícone de pasta ( ![[lucide-folder-open.svg#icon]] ) para abrir a pasta de fragmentos.

## Teclas de atalho

A página de [[Teclas de atalho]] permite que você visualize, defina e personalize [[Atalhos de edição|atalhos de teclado]] para comandos no Obsidian.

Use a barra de pesquisa para filtrar comandos, e selecione o ícone de filtro para mostrar apenas comandos com teclas de atalho atribuídas. Para adicionar uma tecla de atalho, selecione o ícone de mais (+) ao lado de um comando. Para remover uma tecla de atalho, selecione o ícone X ao lado da combinação de teclas.

## Plugins nativos

[[Plugins nativos]] são plugins integrados que vêm com o Obsidian. Cada plugin adiciona funcionalidades específicas ao app.

Para ativar ou desativar um plugin nativo, selecione o alternador ao lado do nome do plugin. Selecione o ícone de mais ( ![[lucide-plus-circle.svg#icon]] ) para visualizar as [[Teclas de atalho]] do plugin. Selecione o ícone de configurações ( ![[lucide-settings.svg#icon]] ) para abrir a página de configurações do plugin.

Use a barra de pesquisa para filtrar plugins por nome.

## Plugins da comunidade

[[Plugins da comunidade]] são plugins de terceiros criados pela comunidade do Obsidian. Navegue e instale plugins selecionando **Selecionar**.

### Modo restrito

O [[Segurança de plugins#Modo restrito|Modo restrito]] desabilita todos os plugins da comunidade por segurança. Selecione **Ligar** para ativar o modo restrito.

### Plugins atuais

Exibe o número de plugins da comunidade que você tem instalados. Selecione **Verificar por atualizações** para verificar atualizações de plugins.

### Plugins instalados

Visualize e gerencie seus plugins da comunidade instalados. Use a barra de pesquisa para filtrar plugins por nome. Cada plugin tem ícones para configurações, teclas de atalho, financiamento, desinstalação e um alternador para ativá-lo ou desativá-lo.
