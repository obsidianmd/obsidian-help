---
permalink: publish/publish
publish: true
mobile: true
description: Aprenda como publicar seu conteúdo usando o Obsidian Publish
aliases:
  - Obsidian Publish/Redirecionando notas antigas
---
Esta página explica como gerenciar seu conteúdo publicado. Para aprender como personalizar o estilo do seu site, veja [[Personalizar seu site]].

## Pré-requisitos

- Uma conta Obsidian. Se você não tem uma, [crie uma conta agora](https://obsidian.md/auth?returnto=%2Faccount%2Fpublish#signup).
- Uma assinatura ativa do Obsidian Publish. Se você não tem uma, assine no [painel da sua conta](https://obsidian.md/account/publish).
- O plugin nativo **Publish** está [[Configurar o Obsidian Publish#Ativar o Obsidian Publish|ativado]].
- Um [[Gerenciar sites#Criar um novo site|site Publish]] foi criado.

## Publicar notas

1. No **Menu lateral**, selecione **Publicar mudanças** (![[lucide-send.svg#icon]]).
2. Na caixa de diálogo **Publicar mudanças**, selecione **NOVO** para visualizar todas as notas não publicadas.
3. Selecione as notas que deseja publicar.
4. Selecione **Publicar**.

## Despublicar notas

As notas permanecem no seu cofre local mesmo após você despublicá-las.

1. No **Menu lateral**, selecione **Publicar mudanças** (![[lucide-send.svg#icon]]).
2. Na caixa de diálogo **Publicar mudanças**, selecione **SEM ALTERAÇÕES** para visualizar todas as notas publicadas.
3. Selecione as notas que deseja despublicar.
4. Selecione **Publicar**.

## Atualizar uma nota publicada

1. No **Menu lateral**, selecione **Publicar mudanças** (![[lucide-send.svg#icon]]).
2. Na caixa de diálogo **Publicar mudanças**, selecione **MUDANÇAS** para visualizar todas as notas modificadas desde a última publicação.
3. Selecione as notas que deseja atualizar.
4. Selecione **Publicar**.

> [!hint] A exclusão de notas renomeadas ou removidas e imagens do Publish acontece nesta etapa. Você deve marcar manualmente a caixa de seleção para excluir esses dados, pois ela não é selecionada automaticamente por segurança.

## Publicar dados vinculados

Ao publicar notas contendo links para outras notas ou imagens incorporadas, links quebrados podem ocorrer a menos que as notas vinculadas também sejam publicadas. O **Obsidian Publish** ajuda a prevenir isso selecionando automaticamente mídias vinculadas às notas que você já escolheu.

Para incluir todas as notas vinculadas, selecione **Adicionar conectados** na caixa de diálogo **Publicar mudanças**.

Antes de publicar, revise a seleção atualizada para garantir que ela não inclua dados que você ainda não está pronto para publicar.

> [!tip] A função **Adicionar conectados** respeita quaisquer exclusões definidas em [[#Ignorar dados]].

## Selecionar dados automaticamente para publicação

Defina `publish: true` nas [[Propriedades]] de uma nota para incluí-la automaticamente na publicação como nota nova ou alterada.

Você também pode selecionar automaticamente notas e imagens vinculadas em pastas específicas adicionando-as como pastas **Incluídas**:

1. No **Menu lateral**, selecione **Publicar mudanças** (![[lucide-send.svg#icon]]) ou abra a [[Paleta de comandos]] e digite **Publish: Publicar mudanças...**.
2. Selecione o ícone **Gerenciar filtros de publicação** (![[lucide-filter.svg#icon]]).
3. Na seção **Pastas incluídas**, selecione **Administrar**.
4. Escolha as pastas que deseja incluir no seletor.
5. A pasta é adicionada à lista de incluídas.
6. Selecione **Feito** quando terminar.

### Ignorar dados

Para ignorar uma nota no Obsidian Publish, defina `publish: false` nas [[Propriedades]] da nota. A nota não aparecerá mais na lista de notas para publicar.

Você também pode ignorar automaticamente notas e imagens em pastas específicas adicionando-as como pastas **Excluídas**:

1. No **Menu lateral**, selecione **Publicar mudanças** (![[lucide-send.svg#icon]]) ou abra a [[Paleta de comandos]] e digite **Publish: Publicar mudanças...**.
2. Selecione o ícone **Gerenciar filtros de publicação** (![[lucide-filter.svg#icon]]).
3. Na seção **Pastas excluídas**, selecione **Administrar**.
4. Escolha as pastas que deseja excluir no seletor.
5. A pasta é adicionada à lista de excluídas.
6. Selecione **Feito** quando terminar.

> [!note] `publish: true` sobrepõe pastas excluídas
> Se um arquivo tem `publish: true`, ele ainda será publicado mesmo que esteja em uma pasta ou filtro que está excluído. Isso ocorre porque `publish: true` oferece um controle mais específico.
