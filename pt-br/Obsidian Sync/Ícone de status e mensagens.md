---
permalink: sync/messages
publish: true
mobile: true
description: >-
  Esta página explica os ícones de status do Obsidian Sync e fornece detalhes
  sobre o registro de atividades de sincronização.
---
O Obsidian Sync fornece diversos elementos para indicar o status da sincronização, principalmente o [[#Ícone de status do Sync]] e o [[#Registro de atividades do Sync]]. Detalhes sobre controle de versão no Obsidian Sync são abordados na página [[Histórico de versões]].

## Ícone de status do Sync

O ícone de status do Sync está localizado na [[Barra de status]] na versão desktop e na [[Barra lateral#Abrir barras laterais escondidas|barra lateral direita]] em dispositivos móveis e tablets. O ícone reflete vários estados de sincronização:

- ![[obsidian-icon-sync-synced.svg#icon]] **Sincronizado**: O Obsidian Sync sincronizou completamente seus arquivos. Este ícone é tipicamente verde.
- ![[obsidian-icon-sync-syncing.svg#icon]] **Sincronizando**: O Obsidian está atualizando o cofre remoto no momento. Este ícone é geralmente roxo.
- ![[obsidian-icon-sync-paused.svg#icon]] **Pausado**: A sincronização foi pausada, mas o Obsidian ainda está conectado ao cofre remoto. O ícone é tipicamente roxo.
- ![[obsidian-icon-sync-disconnected.svg#icon]] **Desconectado**: O plugin nativo do Sync está ativo, mas o [[Cofres locais e remotos|cofre local]] não está conectado a um cofre remoto. Este ícone é tipicamente vermelho.

Clicar ou tocar no ícone abre um menu de contexto com as seguintes opções:
- ![[obsidian-icon-sync-paused.svg#icon]] Pausar (ou ![[lucide-circle-play.svg#icon]] Retomar se pausado)
- ![[lucide-history.svg#icon]] [[Histórico de versões]] (Esmaecido se não estiver visualizando uma nota)
- ![[lucide-align-left.svg#icon]] Abrir [[#Registro de atividades do Sync|Log de sincronização]]
- ![[lucide-trash-2.svg#icon]] [[Histórico de versões#Restaurar um arquivo deletado|Arquivos deletados]]
- ![[lucide-cog.svg#icon]] [[Configurações do Sync e sincronização seletiva|Configurações de sincronização]]

## Registro de atividades do Sync

O Obsidian Sync inclui um registro detalhado de sincronização que rastreia todas as interações entre seus arquivos locais e o cofre remoto. O registro mostra uploads, downloads, exclusões e quaisquer problemas como conflitos de mesclagem ou problemas de conectividade.

**Acessar o registro de atividades:**
- Clique no ícone de status do sync na barra de status
- Vá para **[[Configurações]] → Sync → Atividade da sincronização**
- Use **Paleta de comandos → Sync: Abrir o registro de atividades**

O registro fornece carimbos de data/hora e detalhes para cada operação de sincronização, sendo útil para solucionar problemas de sincronização.

> [!warning] O log de sincronização não persiste após o Obsidian ser fechado. Se você encontrar um problema, certifique-se de copiar o log _antes_ de fechar o aplicativo.

O registro categoriza mensagens nos seguintes tipos:

- [[#Mensagens gerais]]
- [[#Mensagens de erro]]
- [[#Mensagens de itens ignorados]]
- [[#Mensagens de conta]]

Você pode filtrar o log de sincronização por **Tudo**, **Erros**, **Ignorado** e **Mesclar conflitos**. Além disso, você pode pesquisar no log de sincronização usando a caixa de pesquisa na janela do Sync.

> [!summary] Incluímos abaixo algumas das mensagens mais prováveis que você pode ter encontrado. A lista não é exaustiva. Se você estiver enfrentando um problema e tiver uma mensagem no log de sincronização sobre a qual não tem certeza, [[Ajuda e suporte#Contatar o suporte do Obsidian|contate o suporte do Obsidian]].

### Mensagens gerais

Estas são mensagens comuns do dia a dia que você pode encontrar.

**Connecting to server**
O Obsidian está tentando se conectar ao [[Segurança e privacidade#Onde posso encontrar meu servidor Sync atual e onde ele está hospedado?|servidor do Sync]] do seu cofre remoto.

**Connected to server. Detecting changes...**
O Obsidian estabeleceu uma conexão e está comparando o cofre local com o cofre remoto para determinar se alterações são necessárias.

> [!info] Esta mensagem também pode indicar outros problemas potenciais do Sync. Se você a vir repetidamente e acreditar que ainda há itens para sincronizar, [[Ajuda e suporte#Contatar o suporte do Obsidian|contate o suporte do Obsidian]].

**Fully synced**
- Os cofres local e remoto estão totalmente sincronizados.

**Merging conflicted file**
Um conflito foi detectado durante a sincronização, e o arquivo foi mesclado em vez de sobrescrito. Consulte [[Solução de problemas do Obsidian Sync#Resolução de conflitos|resolução de conflitos]] para mais informações. Se a mesclagem for indesejada, você pode restaurar versões anteriores via [[Histórico de versões]] ou [[Recuperação de arquivos]].

**Rejected server change**
As alterações no cofre remoto são mais antigas que a versão no seu dispositivo local, então a versão local é mantida e a alteração remota é ignorada.

### Mensagens de erro

Estas são mensagens detalhando um erro na sincronização de um arquivo.

**Out of memory**
Este problema ocorre tipicamente em dispositivos móveis quando não há espaço de armazenamento ou memória suficiente disponível para baixar um arquivo. É mais comum com arquivos grandes, como vídeos.

### Mensagens de itens ignorados

Estas são mensagens detalhando o que foi ignorado, e potencialmente o porquê.

**Unable to download file with illegal name**

O arquivo contém um [caractere especial ou convenção de nomenclatura](https://stackoverflow.com/questions/1976007/what-characters-are-forbidden-in-windows-and-linux-directory-names) que não é permitido no sistema operacional receptor. Para facilitar, você pode renomear o arquivo no dispositivo de origem para remover todos os caracteres especiais exceto `-` e `_`.

Note que isso também inclui arquivos com múltiplos pontos `.` no nome em dispositivos Android.

### Mensagens de conta

Estas são mensagens relacionadas a uma mudança na sua assinatura ou conta.

**Vault limit exceeded**
Sua conta excedeu o [[Perguntas frequentes#How large can each remote vault be|tamanho máximo de armazenamento]]. Anexos e histórico de versões contribuem para esse tamanho. Mesmo que seu cofre pareça menor que o limite, versões mais antigas e arquivos podem ultrapassá-lo.

Para reduzir o tamanho do cofre:
1. Abra **[[Configurações]] → Sync**.
2. Use as opções em **O tamanho do cofre está acima do limite** para remover arquivos grandes.

**Vault not found**
`{"res":"err","msg":"Vault not found."}`

Este erro pode ocorrer nestes casos:

1. O cofre foi excluído de outro dispositivo.
2. A assinatura do sync ficou inativa por mais de 30 dias, causando a remoção do cofre remoto.
3. A assinatura foi cancelada ou reembolsada, resultando na exclusão do cofre remoto.

Nesses casos, você precisará [[Configurar o Obsidian Sync#Desconectar de um cofre remoto|desconectar do cofre remoto]] e [[Configurar o Obsidian Sync#Criar um novo cofre remoto|criar um novo cofre remoto]], garantindo que seus dados locais sejam preservados.

**Failed to authenticate: Your subscription to Obsidian Sync has expired**
Sua conta está agora em status totalmente expirado, pois não foi possível processar o pagamento registrado.

Para continuar usando o Obsidian Sync, você precisará reassinar dentro da [sua conta](https://obsidian.md/account/sync).

**Failed to authenticate: Not logged in**

O Obsidian Sync detectou que você não está conectado no momento. Você precisará entrar novamente no aplicativo na seção [[Configurações#Geral#Conta|Conta]] das **[[Configurações]]**.

Em alguns casos, um plugin da comunidade também pode impedir o Obsidian Sync de confirmar o status de login da sua conta. Por favor, entre no **[[Segurança de plugins#Modo restrito|Modo restrito]]** e tente novamente.

### Mensagens de rede

**Disconnected from server**
`Unable to connect to server`

O Obsidian Sync se desconectou do servidor do Sync por um motivo desconhecido. O Sync tentará se reconectar ao servidor periodicamente.

No iOS, esta mensagem é exibida como o seguinte erro:
`Null is not an object (evaluating 'this.socket.send')`

Significa exatamente o mesmo que a mensagem `Unable to connect to server`, e não é de forma alguma indicação de que algo diferente esteja errado.
