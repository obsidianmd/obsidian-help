---
permalink: settings
publish: true
mobile: true
description: Aprenda a personalizar o Obsidian através da interface de Configurações.
---
As Definições permitem personalizar a sua experiência no Obsidian. Configure opções gerais, preferências do editor, aparência, atalhos de teclado e gerencie tanto plugins principais como da comunidade.

## Abrir Definições

### Computador

Na [[Barra lateral#Abrir barras laterais ocultas|barra lateral esquerda]], selecione **[[Definições]]** ![[lucide-cog.svg#icon]]. Também pode abrir as Definições com a [[Paleta de comando]].

### Móvel

Na barra lateral esquerda, selecione **[[Definições]]** ![[lucide-cog.svg#icon]].

## Organização das definições

As definições estão organizadas nas seguintes categorias:

- **Opções** — Definições principais da aplicação incluindo [[#Geral]], [[#Editor]], [[#Ficheiros e ligações]], [[#Aparência]] e [[#Atalhos de teclado]].
- **[[Plugins Base]]** — Plugins integrados que vêm com o Obsidian.
- **[[Plugins da comunidade]]** — Plugins de terceiros instalados pela comunidade.

## Geral

A página Geral contém informações de versão, definições de atualização, preferências de idioma e gestão de conta.

### Versão e atualizações

Veja a sua versão atual do Obsidian e a versão do instalador no topo da página. Selecione **Procurar por atualizações** para verificar manualmente novas versões, ou selecione **[Ler o registo de alterações](<https://obsidian.md/changelog/>)** para ver as notas de lançamento.

**Atualizações automáticas**

Quando ativado, o Obsidian verifica automaticamente novas versões e notifica-o quando atualizações estão disponíveis.

**Receber compilações internas**

Atualizar automaticamente para as últimas [[Versões de acesso antecipado]]. Estas versões incluem novas funcionalidades mas podem ser menos estáveis.

> [!info]+ Licença Catalyst necessária
> Esta opção está apenas disponível para utilizadores com uma [[Licença Catalyst]].

### Idioma

Selecione o seu idioma preferido para a interface do Obsidian. Selecione **[[Traduções|Saiba como adicionar um novo idioma ao Obsidian]]** para contribuir com uma tradução.

### Ajuda

Selecione **[[Início|Abrir]]** para aceder a recursos de ajuda, incluindo documentação, fóruns da comunidade e guias de resolução de problemas.

### Conta

Gerencie a sua conta Obsidian e licenças.

**A sua conta**

Veja as informações da sua conta, incluindo nome de utilizador e e-mail. Selecione **[Gerir](https://obsidian.md/account)** para aceder às definições da conta, ou selecione **Log Out** para terminar sessão na aplicação.

**Licença Catalyst**

Veja o estado da sua licença Catalyst. Se tiver uma [[Licença Catalyst]] ativa, o nível da sua licença aparece aqui.

**Licença comercial**

Se apoia o [Obsidian para trabalho](<https://obsidian.md/blog/free-for-work/>), selecione **Ativar** para introduzir uma chave de licença comercial, ou selecione **[Comprar](https://obsidian.md/account/commercial)** para adquirir uma licença. Selecione **[[Licença comercial|Saber mais]]** para informações sobre licenças comerciais.

### Avançadas

#### Notificar se o arranque for mais lento do que o esperado

Quando ativado, o Obsidian apresenta uma notificação se o arranque for invulgarmente lento. A notificação inclui informações de diagnóstico sobre o que está a causar o atraso. Selecione o ícone de temporizador ![[lucide-timer.svg#icon]] junto a esta definição para [[Ajuda e suporte#Verificar tempo de arranque|verificar o seu tempo de arranque]].

## Editor

A página do Editor contém definições sobre como visualiza e edita notas.

### Focar sempre novos separadores

Ao abrir uma ligação num novo separador, mudar imediatamente para ele.

### Vista predefinida para novas tabulações

A vista predefinida em que um novo separador de ficheiro Markdown é aberto. Escolha entre [[Vistas e modo de edição#Vista de leitura|Vista de leitura]] ou [[Vistas e modo de edição#Vista de edição|Vista de edição]].

### Vista de edição predefinida

A vista de edição predefinida que um painel novo irá usar. Escolha entre [[Vistas e modo de edição#Pré-visualização em direto|Pré-visualização em direto]] ou [[Vistas e modo de edição#Modo de origem|Modo de origem]].

### Estado do editor

Mostrar a alternância do modo de edição na [[Barra de estado|barra de estado]].

### Tela

#### Linhas de tamanho legível

Limitar o tamanho máximo da linha. Cabe menos conteúdo no ecrã, mas faz os parágrafos mais fáceis de ler.

#### Quebra de linha estrita

As especificações Markdown ignoram [[Sintaxe de formatação básica#Quebras de linha|quebras de linha]] simples na vista de leitura. Desative isto para tornar as quebras de linha simples visíveis.

#### Propriedades no documento

Escolha como as [[Propriedades|propriedades]] são apresentadas no topo das notas. Selecione **origem** para mostrar as propriedades como YAML em bruto.

#### Fechar títulos

[[Recolher|Recolher]] todo o conteúdo sob um cabeçalho selecionando o ícone de recolher junto ao mesmo.

### Fechar indentação

[[Recolher|Recolher]] parte de uma indentação, como listas, selecionando o ícone de recolher.

#### Números de linha

Mostra os números das linhas na goteira.

#### Guias de identação

Mostrar linhas de relacionamento verticais entre marcadores para orientação visual.

#### Direita para a esquerda (RTL)

Define a exibição do texto das notas para ser da direita para a esquerda.

#### Fecha parênteses automaticamente

Fecha parênteses e aspas automaticamente.

#### Combinar símbolos Markdown automaticamente

Fecha símbolos para negrito, itálico, destaque, texto rasurado e código automaticamente.

#### Listas com indentação inteligente

Trata da indentação e marcadores de lista por si.

#### Usar tabulações

Usar tabulações para recuar ao premir a tecla Tab. Desative isto para recuar usando 4 espaços.

#### Converter HTML automaticamente

Converter automaticamente HTML para Markdown ao colar e arrastar e largar de páginas web.

Use `Ctrl/Cmd+Shift+V` para colar HTML sem converter.

### Comportamento

#### Verificação ortográfica

Ativa a verificação ortográfica. Selecione o ícone de engrenagem para remover itens guardados do dicionário personalizado.

#### Linguagens para a verificação ortográfica

**Windows e Linux:**

Escolhe as linguagens que a verificação ortográfica irá usar. Selecione o ícone de mais (+) para adicionar idiomas. Para remover um idioma, selecione o X junto ao mesmo.

**macOS:**

A verificação ortográfica nativa deteta automaticamente o idioma usado pelo sistema operativo.

#### Tamanho da tabulação

Número de espaços equivalentes a uma tabulação.

### Avançadas

#### Atalhos do Vim

Utilize atalhos do Vim no editor.

## Ficheiros e ligações

A página Ficheiros e ligações contém definições para gestão de ficheiros, ligações e comportamento do cofre.

### Local padrão para novas notas

Onde colocar notas recém-criadas. As opções incluem:

- **Raíz do vault** — As notas são criadas na raiz do seu cofre.
- **Na mesma pasta do ficheiro atual** — As notas são criadas na mesma pasta da nota atualmente ativa.
- **Na pasta especificada abaixo** — As notas são criadas numa pasta específica que escolher.

### Localização padrão para novos anexos

Onde os [[Anexos|anexos]] recém-adicionados são colocados. As opções incluem:

- **Raíz do vault** — Os anexos são colocados na raiz do seu cofre.
- **Na pasta especificada abaixo** — Os anexos são colocados numa pasta específica que escolher.
- **Na mesma pasta do ficheiro atual** — Os anexos são colocados na mesma pasta da nota atualmente ativa.
- **Numa subpasta na pasta atual** — Os anexos são colocados numa subpasta dentro da pasta da nota atual.

### Ligações

#### Novo formato do link

Que ligações inserir ao gerar automaticamente [[Ligações internas|ligações internas]]. As opções incluem:

- **Menor caminho, quando possível** — Usa o caminho único mais curto para o ficheiro ligado.
- **Caminho relativo ao ficheiro** — Usa um caminho relativo ao ficheiro atual.
- **Caminho absoluto no cofre** — Usa o caminho completo a partir da raiz do cofre.

#### Atualizar sempre os links internos

Quando ativado, o Obsidian atualiza automaticamente as ligações internas quando renomeia um ficheiro. Desative isto para ser questionado sobre atualizar ligações após renomear.

#### Usar Wikilinks

Gerar automaticamente Wikilinks para `[[ligações]]` e `![[imagens]]` em vez de ligações e imagens Markdown. Desative esta opção para gerar ligações Markdown em vez disso.

#### Mostrar todo o tipo de ficheiros

Mostrar ficheiros com qualquer extensão mesmo que o Obsidian não os consiga abrir nativamente, para que possam ser vinculados e visualizados no Explorador de Ficheiros e Alternador Rápido.

### Lixo

#### Confirmar eliminação de ficheiro

Perguntar antes de eliminar um ficheiro.

#### Ficheiros eliminados

O que fazer com os ficheiros depois de os eliminar. As opções incluem:

- **Mover para a reciclagem do sistema** — Os ficheiros são movidos para a reciclagem do seu sistema operativo.
- **Mover para o lixo do Obsidian** — Os ficheiros são movidos para a pasta `.trash` no seu cofre.
- **Eliminar permanentemente** — Os ficheiros são eliminados permanentemente e não podem ser recuperados.

### Avançadas

#### Ficheiros excluídos

Os ficheiros excluídos ficarão ocultos em [[Pesquisar]], [[Visualização de diagrama de grafo]] e Menções sem link ([[Links inversos]] e [[Links Externos]]), e menos visíveis no [[Navegação rápida]] e sugestões de ligações. Selecione **Gerir** para configurar ficheiros excluídos.

#### Substituir a pasta de configuração

Usar uma [[Pasta de configuração|pasta de configuração]] diferente da predefinida. Deve começar com um ponto.

#### Permitir callbacks URI

Ativar o uso de x-callback-url através de x-success ou x-error ao processar [[Obsidian URI|URIs do Obsidian]].

#### Reconstruir cache do cofre

Reconstrói a [[Como o Obsidian armazena dados#Cache de metadados|cache de metadados]] do cofre. A reconstrução da cache pode demorar de alguns segundos a alguns minutos, dependendo do tamanho do cofre. Selecione **Reconstruir** para iniciar o processo.

## Aparência

A página Aparência contém definições para personalizar o aspeto do Obsidian.

### Tema base

Escolher o esquema de cores padrão do Obsidian. As opções incluem:

- **Adaptar ao sistema** — Corresponde ao modo claro ou escuro do seu sistema operativo.
- **Claro** — Usa o modo claro.
- **Escuro** — Usa o modo escuro.

### Cor de destaque

Escolha uma cor de destaque para ser usada na aplicação. Selecione o seletor de cores ou o ícone de reiniciar para personalizar.

### Temas

Gerir [[Temas|temas]] instalados e navegar pelos temas da comunidade. Selecione **Gerir** para visualizar e instalar temas. O menu suspenso mostra o seu tema atualmente ativo. O ícone de pasta ![[lucide-folder-open.svg#icon]] abre a pasta de temas na sua [[Pasta de configuração|pasta de configuração]].

### Temas da comunidade atuais

Apresenta o número de temas da comunidade que tem instalados.

### Fonte

#### Fonte da interface

Definir fonte base para todo o Obsidian. Selecione **Gerir** para escolher uma fonte personalizada ou introduzir um nome de fonte.

#### Fonte do texto

Definir fonte para as vistas de edição e leitura. Selecione **Gerir** para escolher uma fonte personalizada ou introduzir um nome de fonte.

#### Fonte monoespaçada

Definir fonte para lugares como blocos de código e metadados iniciais. Selecione **Gerir** para escolher uma fonte personalizada ou introduzir um nome de fonte.

#### Tamanho da fonte

Tamanho da fonte em pixels que afeta o editor e a visualização. Ajuste usando o cursor deslizante.

#### Ajuste rápido do tamanho da fonte

Ajustar o tamanho da fonte usando `Ctrl+Scroll` (Windows/Linux) ou `Cmd+Scroll` (macOS), ou usando o gesto de pinça no trackpad.

### Interface

#### Título em linha

Apresenta o nome do ficheiro como um título editável em linha com o conteúdo do ficheiro. O título em linha funciona como um cabeçalho dentro do Obsidian mas não adiciona um cabeçalho à sua nota.

#### Mostrar barra de título da tabulação

Mostrar o cabeçalho na parte superior de cada tabulação.

#### Mostrar ribbon

Mostrar a barra de ferramentas vertical na lateral da janela. Saiba mais sobre a [[Barra de ferramentas|barra de ferramentas]].

#### Ribbon menu

Configure what commands appear in the ribbon menu. Selecione **Gerir** para personalizar.

> [!info]+ Configuração do ribbon no móvel
> No móvel, a personalização do ribbon funciona de forma diferente. Veja [[Barra de ferramentas#Móvel|Personalização do ribbon no móvel]] para detalhes.

### Avançadas

#### Nível de zoom

Controla o nível geral de zoom da aplicação. Ajuste usando o cursor deslizante.

#### Menus nativos

Os menus da aplicação corresponderão aos do sistema operativo. Não serão afetados pelo seu tema.

#### Estilo da moldura da janela

Determina o estilo da barra de título das janelas do Obsidian. Requer uma reinicialização completa para as alterações entrarem em vigor. As opções incluem:

- **Moldura do Obsidian** — Usa a moldura de janela personalizada do Obsidian.
- **Moldura nativa** — Usa a moldura de janela predefinida do seu sistema operativo.
- **Moldura oculta** — Oculta completamente a barra de título.

#### Ícone personalizado da aplicação

Definir um ícone personalizado para a aplicação. Selecione **Escolher** para selecionar um ficheiro de ícone (`.icns`, `.ico`, `.png` ou `.svg`). Saiba mais sobre [[Aparência#Ícone personalizado da aplicação|ícones personalizados da aplicação]].

#### Janela translúcida

Ativa o efeito de transparência para realçar a perceção de profundidade. Otimizado para modo escuro. Não é suportado no Linux.

> [!info]+ Apenas macOS
> Esta funcionalidade é primariamente concebida para macOS. Saiba mais sobre [[Aparência#Translucidez|translucidez]].

#### Aceleração de Hardware

Ativa a Aceleração de Hardware, que usa o GPU para fazer o Obsidian mais estável. Se desativar isto, o desempenho da aplicação pode ser severamente degradado mas pode resolver alguns problemas raros.

### Fragmentos CSS

Gerir e visualizar [[Fragmentos CSS|fragmentos CSS]] armazenados no seu cofre. Os fragmentos CSS são armazenados em `/vault/.obsidian/snippets/`. Selecione o ícone de atualizar para recarregar fragmentos, ou o ícone de pasta ![[lucide-folder-open.svg#icon]] para abrir a pasta de fragmentos.

## Atalhos de teclado

A página [[Atalhos de teclado]] permite visualizar, definir e personalizar [[Atalhos de edição|atalhos de teclado]] para comandos no Obsidian.

Use a barra de pesquisa para filtrar comandos, e selecione o ícone de filtro para mostrar apenas comandos com atalhos atribuídos. Para adicionar um atalho, selecione o ícone de mais (+) junto a um comando. Para remover um atalho, selecione o ícone X junto à combinação de teclas.

## Plugins Base

Os [[Plugins Base]] são plugins integrados que vêm com o Obsidian. Cada plugin adiciona funcionalidade específica à aplicação.

Para ativar ou desativar um plugin principal, selecione o botão junto ao nome do plugin. Selecione o ícone de mais ![[lucide-plus-circle.svg#icon]] para ver os [[Atalhos de teclado]] do plugin. Selecione o ícone de definições ![[lucide-settings.svg#icon]] para abrir a página de definições do plugin.

Use a barra de pesquisa para filtrar plugins por nome.

## Plugins da comunidade

Os [[Plugins da comunidade]] são plugins de terceiros criados pela comunidade Obsidian. Navegue e instale plugins selecionando **Selecionar**.

### Modo restrito

O [[Segurança de plugins#Modo restrito|modo restrito]] desativa todos os plugins da comunidade por segurança. Selecione **Ligar** para ativar o modo restrito.

### Plugins atuais

Apresenta o número de plugins da comunidade que tem instalados. Selecione **Procurar por atualizações** para verificar atualizações de plugins.

### Plugins instalados

Visualize e gerencie os seus plugins da comunidade instalados. Use a barra de pesquisa para filtrar plugins por nome. Cada plugin tem ícones para definições, atalhos de teclado, financiamento, desinstalação e um botão para ativar ou desativar.
