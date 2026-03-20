---
permalink: publish/collaborate
publish: true
mobile: true
description: Aprenda como colaborar com outros usuários do Obsidian no seu site Obsidian Publish.
aliases:
  - Obsidian Publish/Colaborando
---
Aprenda como colaborar no seu site [[Introdução ao Obsidian Publish|Obsidian Publish]] com outros usuários do Obsidian. Ao adicionar seus amigos e colegas como colaboradores, eles podem publicar mudanças no seu site.

Apenas o proprietário do site precisa de uma assinatura ativa do Obsidian Publish. Os colaboradores precisam apenas de uma [conta Obsidian](https://obsidian.md/account).

> [!warning] Antes de publicar mudanças em um site compartilhado, certifique-se de [[#Sincronizar mudanças entre colaboradores|sincronizar mudanças entre colaboradores]]. Caso contrário, você corre o risco de sobrescrever mudanças de outros colaboradores.

## Adicionar um colaborador a um site

1. No [[Faixa de opções|Menu lateral]], selecione **Publicar mudanças** (![[lucide-send.svg#icon]]) ou abra a [[Paleta de comandos]] e digite **Publish: Publicar mudanças...**
2. Na caixa de diálogo **Publicar mudanças**, clique em **Alterar configurações do site** ![[lucide-cog.svg#icon]].
3. Ao lado de **Colaboração do site**, selecione **Administrar**.
4. Em **Convidar usuário**, insira o e-mail do colaborador.
5. Selecione **Adicionar**.

## Remover um colaborador de um site

1. No [[Faixa de opções|Menu lateral]], selecione **Publicar mudanças** (![[lucide-send.svg#icon]]) ou abra a [[Paleta de comandos]] e digite **Publish: Publicar mudanças...**
2. Na caixa de diálogo **Publicar mudanças**, clique em **Alterar configurações do site** ( ![[lucide-cog.svg#icon]] ).
3. Ao lado de **Colaboração do site**, selecione **Administrar**.
4. Ao lado do colaborador que deseja remover, selecione **Remover usuário** ( ![[lucide-x.svg#icon]]).

## Sincronizar mudanças entre colaboradores

O Obsidian Publish não sincroniza automaticamente as mudanças publicadas entre cofres locais. Em vez disso, os colaboradores precisam sincronizar manualmente as mudanças de outros colaboradores.

Para atualizar uma nota local com mudanças do site ao vivo:

1. No [[Faixa de opções|Menu lateral]], selecione **Publicar mudanças** (![[lucide-send.svg#icon]]) ou abra a [[Paleta de comandos]] e digite **Publish: Publicar mudanças...**
2. Clique com o botão direito ou pressione e segure a mudança que deseja sincronizar, e então selecione **Usar a versão ao vivo**. **Isso sobrescreverá a nota no seu cofre local.**

> [!tip] Recomendamos que você use outra ferramenta para sincronizar mudanças entre cofres, como o [[Introdução ao Obsidian Sync|Obsidian Sync]] ou [git](https://git-scm.com/).

## Permissões

A tabela a seguir lista as permissões de site disponíveis para proprietários e colaboradores:

| Ação                                          | Colaborador | Proprietário |
|-----------------------------------------------|:-----------:|:------------:|
| Publicar novas páginas                        | ✓           | ✓            |
| Publicar mudanças em páginas publicadas       | ✓           | ✓            |
| Despublicar páginas                           | ✓           | ✓            |
| Configurar opções do site                     |             | ✓            |
| Administrar permissões                        |             | ✓            |
