---
permalink: publish/publish
publish: true
mobile: true
description: Aprenda como publicar seu conteúdo usando o Obsidian Publish.
---
Esta página explica como gerir o seu conteúdo publicado. Para saber como personalizar o estilo do seu site, consulte [[Personalizar o seu site]].

## Pré-requisitos

- Uma conta Obsidian. Se não tiver uma, [crie uma conta agora](https://obsidian.md/auth?returnto=%2Faccount%2Fpublish#signup).
- Uma subscrição ativa do Obsidian Publish. Se não tiver uma, subscreva a partir do [painel da sua conta](https://obsidian.md/account/publish).
- O plugin principal **Publish** está [[Configurar o Obsidian Publish#Ativar o Obsidian Publish|ativado]].
- Um [[Gerir sites#Criar um novo site|site Publish]] está criado.

## Publicar notas

1. Na **Barra de ferramentas**, selecione **Publicar alterações** ![[lucide-send.svg#icon]].
2. Na caixa de diálogo **Publicar alterações**, selecione **NOVO** para ver todas as notas não publicadas.
3. Selecione as notas que pretende publicar.
4. Selecione **Publicar**.

## Anular publicação de notas

As notas permanecem no seu cofre local mesmo após anular a sua publicação.

1. Na **Barra de ferramentas**, selecione **Publicar alterações** ![[lucide-send.svg#icon]].
2. Na caixa de diálogo **Publicar alterações**, selecione **SEM ALTERAÇÕES** para ver todas as notas publicadas.
3. Selecione as notas cuja publicação pretende anular.
4. Selecione **Publicar**.

## Atualizar uma nota publicada

1. Na **Barra de ferramentas**, selecione **Publicar alterações** ![[lucide-send.svg#icon]].
2. Na caixa de diálogo **Publicar alterações**, selecione **ALTERAÇÕES** para ver todas as notas modificadas desde a última publicação.
3. Selecione as notas que pretende atualizar.
4. Selecione **Publicar**.

> [!hint] A eliminação de notas e imagens renomeadas ou removidas do Publish acontece neste passo. Deve selecionar manualmente a caixa de seleção para eliminar estes dados, pois não são automaticamente selecionados por segurança.

## Publicar dados ligados

Ao publicar notas que contêm ligações para outras notas ou imagens incorporadas, podem ocorrer ligações quebradas a menos que as notas ligadas também sejam publicadas. O **Obsidian Publish** ajuda a prevenir isto selecionando automaticamente os ficheiros multimédia ligados a partir das notas que já escolheu.

Para incluir todas as notas ligadas, selecione **Adicionar linkado** na caixa de diálogo **Publicar alterações**.

Antes de publicar, reveja a seleção atualizada para garantir que não inclui quaisquer dados que não esteja pronto para publicar.

> [!tip] A função **Adicionar linkado** respeita quaisquer exclusões definidas em [[#Ignorar dados]].

## Selecionar automaticamente dados para publicar

Defina `publish: true` nas [[Propriedades]] de uma nota para a incluir automaticamente para publicação como nota nova ou alterada.

Também pode selecionar automaticamente notas e imagens ligadas em pastas específicas, adicionando-as como pastas **Incluídas**:

1. Na **Barra de ferramentas**, selecione **Publicar alterações** ![[lucide-send.svg#icon]] ou abra a [[Paleta de comando]] e escreva **Publish: Publicar alterações...**.
2. Selecione o ícone **Gerir filtros de publicação** ![[lucide-filter.svg#icon]].
3. Na secção **Pastas incluídas**, selecione **Gerir**.
4. Escolha as pastas que pretende incluir a partir do sugestor.
5. A pasta é adicionada à lista de incluídas.
6. Selecione **Feito** quando terminar.

### Ignorar dados

Para ignorar uma nota no Obsidian Publish, defina `publish: false` nas [[Propriedades]] da nota. A nota deixa de aparecer na lista de notas para publicar.

Também pode ignorar automaticamente notas e imagens em pastas específicas, adicionando-as como pastas **Excluídas**:

1. Na **Barra de ferramentas**, selecione **Publicar alterações** ![[lucide-send.svg#icon]] ou abra a [[Paleta de comando]] e escreva **Publish: Publicar alterações...**.
2. Selecione o ícone **Gerir filtros de publicação** ![[lucide-filter.svg#icon]].
3. Na secção **Pastas excluídas**, selecione **Gerir**.
4. Escolha as pastas que pretende excluir a partir do sugestor.
5. A pasta é adicionada à lista de excluídas.
6. Selecione **Feito** quando terminar.

> [!note] `publish: true` sobrepõe-se às pastas excluídas
> Se um ficheiro tiver `publish: true`, será publicado mesmo que esteja numa pasta ou filtro excluído. Isto porque `publish: true` oferece um controlo mais específico.
