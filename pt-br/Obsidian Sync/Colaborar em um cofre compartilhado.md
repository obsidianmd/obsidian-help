---
permalink: sync/collaborate
publish: true
mobile: true
description: Esta página detalha como você pode colaborar com outros usuários do Obsidian Sync.
aliases:
  - Obsidian Sync/Compartilhar cofres remotos
---
Com o [[Introdução ao Obsidian Sync|Obsidian Sync]] você pode colaborar em um cofre compartilhado com sua equipe.

Todos os colaboradores devem ter uma assinatura ativa do Sync para acessar um cofre compartilhado. Fazer parte de um cofre compartilhado não conta para o seu [[Perguntas frequentes#Quantos cofres remotos posso ter?|limite de cofres]].

Se o cofre remoto for [[Obsidian Sync/Segurança e privacidade|criptografado de ponta a ponta]], os colaboradores devem inserir a senha de criptografia ao configurar o cofre.

## Gerenciar usuários

### Adicionar usuários

Para convidar um usuário para compartilhar um cofre remoto:

1. Abra **[[Configurações]]**.
2. No menu lateral, selecione **Sincronização**.
3. Ao lado de **Cofre remoto**, selecione **Administrar**.
4. Ao lado do cofre remoto que deseja compartilhar, selecione **Gerenciar compartilhamento** ![[lucide-users.svg#icon]].
5. Em **Convidar usuário**, insira o e-mail do usuário que deseja convidar.
6. Selecione **Adicionar**.

### Remover usuários

1. Abra **[[Configurações]]**.
2. No menu lateral, selecione **Sincronização**.
3. Ao lado de **Cofre remoto**, selecione **Administrar**.
4. Ao lado do usuário do qual deseja remover o acesso, selecione **Remover usuário** ![[lucide-x.svg#icon]].

## Colaborar com sua equipe

### Permissões

Permissões granulares ainda não são suportadas. Todos os colaboradores recebem as mesmas permissões que o proprietário do cofre, com uma exceção: apenas o proprietário do cofre pode convidar colaboradores.

### Edição ao vivo

Cofres compartilhados permitem que equipes trabalhem juntas em um conjunto de arquivos, no entanto o Obsidian ainda não suporta edição colaborativa ao vivo no mesmo arquivo. Você não verá o cursor do outro usuário, e suas edições só aparecerão quando as alterações forem sincronizadas.

Se múltiplos usuários estiverem editando o mesmo arquivo ao mesmo tempo, [[Solução de problemas do Obsidian Sync#Resolução de conflitos|as alterações serão mescladas]] durante o processo de sincronização. As alterações podem ser visualizadas e restauradas usando o [[Histórico de versões]].

![[version-history-collaboration.png]]^version-history-image

## Limitações

Esteja ciente de que o Obsidian Sync possui [[Perguntas frequentes|Limitações]] que podem afetar sua equipe:

- O número máximo de colaboradores em um cofre compartilhado é de 20 usuários.
- O tamanho máximo de arquivo para anexos depende do [[Planos e limites de armazenamento|plano]] do host do seu cofre remoto, com 5 MB para o Plano Standard e 200 MB para o Plano Plus.

Saiba mais sobre [[Sync para equipes]].
