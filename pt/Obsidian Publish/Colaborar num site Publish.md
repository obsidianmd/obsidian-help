---
permalink: publish/collaborate
publish: true
mobile: true
description: Aprenda como colaborar com outros usuários do Obsidian no seu site do Obsidian Publish.
---
Aprenda a colaborar no seu site [[Introdução ao Obsidian Publish|Obsidian Publish]] com outros utilizadores do Obsidian. Ao adicionar os seus amigos e colegas como colaboradores, eles podem publicar alterações no seu site.

Apenas o proprietário do site precisa de uma subscrição ativa do Obsidian Publish. Os colaboradores apenas precisam de uma [conta Obsidian](https://obsidian.md/account).

> [!warning] Antes de publicar alterações num site partilhado, certifique-se de [[#Sincronizar alterações entre colaboradores|sincronizar alterações entre colaboradores]]. Caso contrário, corre o risco de substituir alterações de outros colaboradores.

## Adicionar um colaborador a um site

1. Na [[Barra de ferramentas]], selecione **Publicar alterações** ![[lucide-send.svg#icon]] ou abra a [[Paleta de comando]] e escreva **Publish: Publicar alterações...**
2. Na caixa de diálogo **Publicar alterações**, clique em **Mudar configurações do site** ![[lucide-cog.svg#icon]].
3. Junto a **Colaboradores do site**, selecione **Gerir**.
4. Em **Convidar utilizador**, introduza o e-mail do colaborador.
5. Selecione **Adicionar**.

## Remover um colaborador de um site

1. Na [[Barra de ferramentas]], selecione **Publicar alterações** ![[lucide-send.svg#icon]] ou abra a [[Paleta de comando]] e escreva **Publish: Publicar alterações...**
2. Na caixa de diálogo **Publicar alterações**, clique em **Mudar configurações do site** ![[lucide-cog.svg#icon]].
3. Junto a **Colaboradores do site**, selecione **Gerir**.
4. Junto ao colaborador que pretende remover, selecione **Remover utilizador** ![[lucide-x.svg#icon]].

## Sincronizar alterações entre colaboradores

O Obsidian Publish não sincroniza automaticamente as alterações publicadas entre cofres locais. Em vez disso, os colaboradores precisam de sincronizar manualmente as alterações de outros colaboradores.

Para atualizar uma nota local com alterações do site ao vivo:

1. Na [[Barra de ferramentas]], selecione **Publicar alterações** ![[lucide-send.svg#icon]] ou abra a [[Paleta de comando]] e escreva **Publish: Publicar alterações...**
2. Clique com o botão direito ou pressione longamente a alteração que pretende sincronizar e, em seguida, selecione **Usar versão ao vivo**. **Isto irá substituir a nota no seu cofre local.**

> [!tip] Recomendamos que utilize outra ferramenta para sincronizar alterações entre cofres, como o [[Introdução ao Obsidian Sync|Obsidian Sync]] ou o [git](https://git-scm.com/).

## Permissões

A tabela seguinte lista as permissões de site disponíveis para proprietários e colaboradores:

| Ação                                        | Colaborador | Proprietário |
|---------------------------------------------|:-----------:|:------------:|
| Publicar novas páginas                      | ✓           | ✓            |
| Publicar alterações em páginas publicadas   | ✓           | ✓            |
| Despublicar páginas                         | ✓           | ✓            |
| Configurar opções do site                   |             | ✓            |
| Gerir permissões                            |             | ✓            |
