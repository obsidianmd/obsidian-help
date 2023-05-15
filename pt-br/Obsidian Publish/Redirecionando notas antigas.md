Esta página explica como gerenciar suas notas publicadas.

## Publicar notas

1. Na faixa de opções, à esquerda da janela do aplicativo, clique em **Publicar alterações** (ícone de avião de papel).
2. Na caixa de diálogo **Publicar alterações**, clique em **NOVO** para ver todas as notas que você ainda não publicou.
3. Selecione as notas que deseja publicar.
4. Clique em **Publicar**.

## Cancelar publicação de notas

As anotações permanecem em seu cofre local mesmo depois que você cancela a publicação.

1. Na faixa de opções, à esquerda da janela do aplicativo, clique em **Publicar alterações** (ícone de avião de papel).
2. Na caixa de diálogo **Publicar alterações**, clique em **INALTERADO** para ver todas as suas notas publicadas.
3. Selecione as notas que deseja cancelar a publicação.
4. Clique em **Publicar**.

## Atualizar uma nota publicada

1. Na faixa de opções, à esquerda da janela do aplicativo, clique em **Publicar alterações** (ícone de avião de papel).
2. Na caixa de diálogo **Publicar alterações**, clique em **ALTERADO** para ver todas as notas que foram alteradas desde a última vez que foram publicadas.
3. Selecione as notas que deseja atualizar.
4. Clique em **Publicar**.

## Publicar notas vinculadas

A publicação de notas com links para outras notas resulta em links quebrados, a menos que você também publique as notas vinculadas. Obsidian Publish pode ajudá-lo selecionando notas que estão vinculadas às notas que já estão selecionadas.

Para selecionar todas as notas vinculadas, clique em **Adicionar vinculadas** na caixa de diálogo **Publicar alterações**.

Revise a seleção atualizada para garantir que ela não inclua nenhuma nota que você ainda não esteja pronto para publicar.

## Selecionar notas automaticamente para publicar

Para selecionar automaticamente uma nota a ser publicada, defina `publish: true` em [[Metadata]] para a nota.

## Ignorar notas

Para ignorar uma nota no Obsidian Publish, defina `publish: false` no [[Metadata]] para a nota.

A nota não aparece mais na lista de notas a serem publicadas.

## Links permanentes

Você pode renomear o URL de suas anotações usando _permalinks_.

Por exemplo, você pode transformar isso:

```
https://publish.obsidian.md/username/Company/About+us
```

Nisso:

```
https://publish.obsidian.md/username/about
```

Para criar um permalink para uma nota, adicione a propriedade `permalink` ao seu [[Metadata]].

```yaml
---
link permanente: sobre
---
```

Se alguém visitar uma nota usando o URL original, será redirecionado automaticamente para o permalink.