---
permalink: sync/messages
publish: true
mobile: true
description: Esta página explica os ícones de status do Obsidian Sync e fornece detalhes sobre o registro de atividades de sincronização.
---
O Obsidian Sync fornece vários elementos para indicar o estado da sincronização, principalmente o [[#Ícone de estado do Sync]] e o [[#Registo de atividade do Sync]]. Os detalhes sobre o controlo de versões no Obsidian Sync são abordados na página [[História de versionamento]].

## Ícone de estado do Sync

O ícone de estado do Sync está localizado na [[Barra de estado]] na versão de computador e na [[Barra lateral#Abrir barras laterais ocultas|barra lateral direita]] em dispositivos móveis e tablets. O ícone reflete vários estados de sincronização:

- ![[obsidian-icon-sync-synced.svg#icon]] **Sincronizado**: O Obsidian Sync sincronizou totalmente os seus ficheiros. Este ícone é tipicamente verde.
- ![[obsidian-icon-sync-syncing.svg#icon]] **A sincronizar**: O Obsidian está atualmente a atualizar o cofre remoto. Este ícone é normalmente roxo.
- ![[obsidian-icon-sync-paused.svg#icon]] **Pausado**: A sincronização foi pausada, mas o Obsidian ainda está conectado ao cofre remoto. O ícone é tipicamente roxo.
- ![[obsidian-icon-sync-disconnected.svg#icon]] **Desconectado**: O plugin principal do Sync está ativo, mas o [[Cofres locais e remotos|cofre local]] não está conectado a um cofre remoto. Este ícone é tipicamente vermelho.

Clicar ou tocar no ícone abre um menu contextual com as seguintes opções:
- ![[obsidian-icon-sync-paused.svg#icon]] Pausar (ou ![[lucide-circle-play.svg#icon]] Retomar se pausado)
- ![[lucide-history.svg#icon]] [[História de versionamento]] (Esmaecido se não estiver a visualizar uma nota)
- ![[lucide-align-left.svg#icon]] Abrir [[#Registo de atividade do Sync|Registo do Sync]]
- ![[lucide-trash-2.svg#icon]] [[História de versionamento#Restaurar um ficheiro eliminado|Ficheiros eliminados]]
- ![[lucide-cog.svg#icon]] [[Definições do Sync e sincronização seletiva|Definições do Sync]]

## Registo de atividade do Sync

O Obsidian Sync inclui um registo de sincronização detalhado que rastreia todas as interações entre os seus ficheiros locais e o cofre remoto. O registo mostra carregamentos, transferências, eliminações e quaisquer problemas como conflitos de mesclagem ou problemas de conectividade.

**Aceder ao registo de atividade:**
- Clique no ícone de estado do Sync na barra de estado
- Vá a **[[Definições]] → Sync → Registo de atividade**
- Use **Paleta de comandos → Sync: Abrir registo de atividade**

O registo fornece carimbos de data/hora e detalhes para cada operação de sincronização, tornando-o útil para resolver problemas de sincronização.

> [!warning] O registo do Sync não persiste depois de o Obsidian ser fechado. Se encontrar um problema, certifique-se de que copia o registo _antes_ de fechar a aplicação.

O registo categoriza as mensagens nos seguintes tipos:

- [[#Mensagens gerais]]
- [[#Mensagens de erro]]
- [[#Mensagens de itens ignorados]]
- [[#Mensagens de conta]]

Pode filtrar o registo do Sync por **Tudo**, **Erros**, **Ignorados** e **Conflitos de mesclagem**. Adicionalmente, pode pesquisar o registo do Sync utilizando a caixa de pesquisa na janela do Sync.

> [!summary] Incluímos abaixo algumas das mensagens mais prováveis que poderá ter encontrado. A lista não é exaustiva. Se estiver a ter um problema e tiver uma mensagem no registo de sincronização sobre a qual não tem a certeza, [[Ajuda e suporte#Contactar o suporte do Obsidian|contacte o suporte do Obsidian]].

### Mensagens gerais

Estas são mensagens comuns do dia a dia que poderá encontrar.

**Connecting to server**
O Obsidian está a tentar conectar-se ao [[Obsidian Sync/Segurança e privacidade#Onde posso encontrar o meu servidor Sync atual e onde está alojado?|servidor Sync]] do seu cofre remoto.

**Connected to server. Detecting changes...**
O Obsidian estabeleceu uma conexão e está a comparar o cofre local com o cofre remoto para determinar se são necessárias alterações.

> [!info] Esta mensagem também pode indicar outros potenciais problemas do Sync. Se a vir repetidamente e acreditar que ainda há itens para sincronizar, [[Ajuda e suporte#Contactar o suporte do Obsidian|contacte o suporte do Obsidian]].

**Fully synced**
- O cofre local e o cofre remoto estão totalmente sincronizados.

**Merging conflicted file**
Foi detetado um conflito durante a sincronização e o ficheiro foi mesclado em vez de substituído. Consulte [[Resolver problemas do Obsidian Sync#Resolução de conflitos|resolução de conflitos]] para mais informações. Se a mesclagem não for desejada, pode restaurar versões anteriores através da [[História de versionamento]] ou da [[Recuperação de ficheiros]].

**Rejected server change**
As alterações no cofre remoto são mais antigas do que a versão no seu dispositivo local, pelo que a versão local é mantida e a alteração remota é ignorada.

### Mensagens de erro

Estas são mensagens que detalham um erro na sincronização de um ficheiro.

**Out of memory**
Este problema ocorre tipicamente em dispositivos móveis quando não há espaço de armazenamento ou memória suficiente disponível para transferir um ficheiro. É mais comum com ficheiros grandes, como vídeos.

### Mensagens de itens ignorados

Estas são mensagens que detalham o que foi ignorado e, potencialmente, porquê.

**Unable to download file with illegal name**

O ficheiro contém um [carácter especial ou convenção de nomenclatura](https://stackoverflow.com/questions/1976007/what-characters-are-forbidden-in-windows-and-linux-directory-names) que não é permitido no sistema operativo de receção. Para facilitar, pode renomear o ficheiro no dispositivo de origem para remover todos os caracteres especiais exceto `-` e `_`.

Note que isto também inclui ficheiros com múltiplos pontos `.` no seu nome em dispositivos Android.

### Mensagens de conta

Estas são mensagens relacionadas com uma alteração na sua subscrição ou conta.

**Vault limit exceeded**
A sua conta excedeu o [[Perguntas frequentes#Qual pode ser o tamanho máximo de cada cofre remoto|tamanho máximo de armazenamento]]. Os anexos e a história de versionamento contribuem para este tamanho. Mesmo que o seu cofre pareça mais pequeno do que o limite, versões e ficheiros mais antigos podem fazê-lo ultrapassar.

Para reduzir o tamanho do cofre:
1. Abra **[[Definições]] → Sync**.
2. Utilize as opções em **Tamanho do vault acima do limite** para remover ficheiros grandes.

**Vault not found**
`{"res":"err","msg":"Vault not found."}`

Este erro pode ocorrer nestes casos:

1. O cofre foi eliminado a partir de outro dispositivo.
2. A subscrição do Sync esteve inativa por mais de 30 dias, causando a remoção do cofre remoto.
3. A subscrição foi cancelada ou reembolsada, resultando na eliminação do cofre remoto.

Nestes casos, precisará de [[Configurar o Obsidian Sync#Desconectar de um cofre remoto|desconectar do cofre remoto]] e [[Configurar o Obsidian Sync#Criar um novo cofre remoto|criar um novo cofre remoto]], garantindo que os seus dados locais são preservados.

**Failed to authenticate: Your subscription to Obsidian Sync has expired**
A sua conta está agora num estado totalmente expirado, pois não foi possível processar o pagamento registado.

Para continuar a utilizar o Obsidian Sync, precisará de voltar a subscrever na [sua conta](https://obsidian.md/account/sync).

**Failed to authenticate: Not logged in**

O Obsidian Sync detetou que não tem sessão iniciada atualmente. Precisará de iniciar sessão novamente na aplicação na secção [[Definições#Geral#Conta|Conta]] das **[[Definições]]**.

Em alguns casos, um plugin da comunidade também pode impedir o Obsidian Sync de confirmar o estado de início de sessão da sua conta. Por favor entre em **[[Segurança de plugins#Modo restrito|modo restrito]]** e tente novamente.

### Mensagens de rede

**Disconnected from server**
`Unable to connect to server`

O Obsidian Sync desconectou-se do servidor Sync por uma razão desconhecida. O Sync tentará reconectar-se ao servidor periodicamente.

No iOS, esta mensagem é apresentada como o seguinte erro:
`Null is not an object (evaluating 'this.socket.send')`

Significa exatamente o mesmo que a mensagem `Unable to connect to server`, e não é de forma alguma indicação de que algo mais esteja errado.
