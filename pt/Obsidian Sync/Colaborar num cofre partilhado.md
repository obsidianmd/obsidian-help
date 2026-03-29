---
permalink: sync/collaborate
publish: true
mobile: true
description: Esta página detalha como você pode colaborar com outros usuários do Obsidian Sync.
---
Com o [[Introdução ao Obsidian Sync|Obsidian Sync]] pode colaborar num cofre partilhado com a sua equipa.

Todos os colaboradores devem ter uma subscrição ativa do Sync para aceder a um cofre partilhado. Juntar-se a um cofre partilhado não conta para o seu [[Perguntas frequentes#Quantos cofres remotos posso ter?|limite de cofres]].

Se o cofre remoto tiver [[Segurança e privacidade|encriptação ponto a ponto]], os colaboradores devem introduzir a chave de encriptação quando configurarem o cofre.

## Gerir utilizadores

### Adicionar utilizadores

Para convidar um utilizador a partilhar um cofre remoto:

1. Abra as **[[Definições]]**.
2. No menu lateral, selecione **Sync**.
3. Junto a **Cofre remoto**, selecione **Gerir**.
4. Junto ao cofre remoto que pretende partilhar, selecione **Gerir partilha** ![[lucide-users.svg#icon]].
5. Em **Convidar utilizador**, introduza o e-mail do utilizador que pretende convidar.
6. Selecione **Adicionar**.

### Remover utilizadores

1. Abra as **[[Definições]]**.
2. No menu lateral, selecione **Sync**.
3. Junto a **Cofre remoto**, selecione **Gerir**.
4. Junto ao utilizador a quem pretende remover o acesso, selecione **Remover utilizador** ![[lucide-x.svg#icon]].

## Colaborar com a sua equipa

### Permissões

Permissões detalhadas ainda não são suportadas. Todos os colaboradores recebem as mesmas permissões que o proprietário do cofre, com uma exceção: apenas o proprietário do cofre pode convidar colaboradores.

### Edição em direto

Os cofres partilhados permitem que as equipas trabalhem em conjunto num conjunto de ficheiros, no entanto o Obsidian ainda não suporta edição colaborativa em direto no mesmo ficheiro. Não verá o cursor do outro utilizador, e as suas edições só aparecerão quando as alterações forem sincronizadas.

Se vários utilizadores estiverem a editar o mesmo ficheiro ao mesmo tempo, [[Resolver problemas do Obsidian Sync#Resolução de conflitos|as alterações serão mescladas]] durante o processo de sincronização. As alterações podem ser visualizadas e restauradas utilizando a [[História de versionamento]].

![[version-history-collaboration.png]]^version-history-image

## Limitações

Tenha em atenção que o Obsidian Sync tem [[Perguntas frequentes|Limitações]] que podem afetar a sua equipa:

- O número máximo de colaboradores num cofre partilhado é de 20 utilizadores.
- O tamanho máximo de ficheiro para anexos depende do [[Planos e limites de armazenamento|plano]] do anfitrião do seu cofre remoto, com 5 MB para o Plano Standard e 200 MB para o Plano Plus.

Saber mais sobre [[Sync para equipas]].
