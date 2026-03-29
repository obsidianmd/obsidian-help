---
permalink: sync/setup
cssclasses:
  - soft-embed
publish: true
mobile: true
description: Você adquiriu o Obsidian Sync e está pronto para começar. Este guia ajudará você a configurar e ajustar as configurações do Obsidian Sync para uso diário.
---
Comprou o Obsidian Sync e está pronto para começar. Este guia vai ajudá-lo a configurar e ajustar as definições do Obsidian Sync para uso diário.

- **Novo no Obsidian Sync?** Veja: [[#Configurar o Obsidian Sync pela primeira vez]]
- **A conectar um segundo dispositivo?** Veja: [[#Sincronizar um cofre remoto noutro dispositivo]]
- **Precisa de fazer alterações?** Veja: [[#Gerir os seus cofres remotos]]

## Configurar o Obsidian Sync pela primeira vez

Nesta secção, vai criar um novo [[Cofres locais e remotos|cofre remoto]] e conectá-lo a um cofre local existente. Não precisa de criar um cofre local novo e vazio para usar o Obsidian Sync para este propósito.

> [!info] O seu cofre atual está numa pasta do iCloud, OneDrive, Dropbox ou outro serviço de sincronização? Se **sim**, ou se **não tem a certeza**, leia [[Perguntas frequentes#Posso usar uma sincronização de terceiros com o Obsidian Sync?|isto]] e [[Mudar para o Obsidian Sync]] antes de prosseguir.

**Pré-requisitos**

- Uma conta Obsidian. Se não tiver uma, [crie uma conta agora](https://obsidian.md/auth?returnto=%2Faccount%2Fsync#signup).
- Uma [[Planos e limites de armazenamento|subscrição]] ativa do Obsidian Sync. Se não tiver uma, subscreva a partir do [painel da sua conta](https://obsidian.md/account/sync).
- **Recomendado**: Um [[Fazer cópia de segurança dos ficheiros do Obsidian|sistema de cópia de segurança]] implementado para os seus ficheiros do Obsidian. Um serviço de sincronização não é uma cópia de segurança.

### Entrar com a sua conta Obsidian

1. Abra as **[[Definições]]**.
2. Na barra lateral, selecione **Geral**.
3. Em **Conta → A sua conta**, selecione **Entrar**.
4. Em **E-mail**, introduza o seu e-mail.
5. Em **Palavra-passe**, introduza a sua palavra-passe.
6. Selecione **Entrar**.

### Ativar o Obsidian Sync

1. Abra as **[[Definições]]**.
2. Na barra lateral, em **Opções**, selecione **Plugins Base**.
3. Ative **Sync**.

### Criar um novo cofre remoto

1. Abra as **[[Definições]]**.
2. Na barra lateral, selecione **Sync**.
3. Junto a **Cofre remoto**, selecione **Escolher**.
4. Selecione **Criar novo vault**.
5. Em **Nome do vault**, introduza o nome do cofre remoto.
6. Em **Região**, escolha a [[Configurar o Obsidian Sync#Servidores de sincronização regionais|região]] do servidor para o seu cofre remoto.
7. Em **Chave de encriptação**, escolha uma palavra-passe para o seu cofre. Isto cria um cofre com encriptação ponto a ponto. A palavra-passe do cofre é separada da sua conta Obsidian e pode ser diferente para cada um dos seus cofres. Para mais informações, consulte [[Segurança e privacidade]].
8. Selecione **Criar**.

### Conectar a um cofre remoto

1. Selecione **Conectar** junto ao cofre que acabou de criar.
2. Introduza a palavra-passe que configurou para o cofre no campo **Chave de encriptação**, caso tenha optado pela [[Segurança e privacidade#O que significa encriptação ponto a ponto?|encriptação ponto a ponto]].
3. Selecione **Desbloquear vault**.
4. **Não comece a sincronizar ainda.** Verifique as suas definições de sincronização em [[#Ajustar as definições do Obsidian Sync|ajustar as definições do Obsidian Sync]].
    - Se desejar começar a sincronizar imediatamente, avance para [[#Começar a sincronizar com o Obsidian Sync|começar a sincronizar com o Obsidian Sync]].
5. Se ainda não o fez, feche ou ignore a janela pop-up que o solicita a **Excluir Pastas** e **Começar sincronização**. Prossiga para o próximo passo.

#### Ajustar as definições do Obsidian Sync

1. Navegue até **[[Definições]]** → **Sync** se necessário.
2. Se ainda não foi adicionado um nome de dispositivo, adicione um para tornar a leitura dos registos do Sync mais fácil!
3. Ative/desative as definições em **Sincronização seletiva** e **Sincronizar configurações do vault** para indicar quais itens devem ser sincronizados de e para o cofre remoto.
    - **Nota**: Se desconectou recentemente de um cofre remoto e está a reconectar sem reiniciar a aplicação, algumas definições podem já estar ativadas.
4. Se fizer alterações a quaisquer definições, reinicie o Obsidian completamente.
5. Depois de reiniciar o Obsidian, regresse a **[[Definições]]** → **Sync**.

#### Começar a sincronizar com o Obsidian Sync

Se está a iniciar a sincronização após conectar a um cofre remoto, verá um botão **Começar sincronização**. Selecione este botão para começar a sincronizar.

Se está a iniciar a sincronização após ajustar as definições do Obsidian Sync e reiniciar a aplicação, verá um botão **Retomar** dentro das definições do Sync. Selecione este botão para começar a sincronizar.

> [!done] Estado da sincronização
> Quando o Obsidian Sync terminar, aparece um círculo verde com uma marca de verificação ![[obsidian-icon-sync-synced.svg#icon]] no canto inferior direito (computador) ou na barra lateral direita (móvel). O registo do Sync também mostrará "Fully Synced" como uma das suas mensagens mais recentes.
>
> Para mais detalhes sobre os estados de sincronização, consulte [[Ícone de estado e mensagens]].
^obsidian-sync-status

Para conectar outros dispositivos ao cofre remoto que acabou de criar e sincronizar, avance para [[Configurar o Obsidian Sync#Sincronizar um cofre remoto noutro dispositivo|Sincronizar um cofre remoto noutro dispositivo]].

Para saber mais sobre definições e ficheiros, avance para [[Definições do Sync e sincronização seletiva]].

## Sincronizar um cofre remoto noutro dispositivo

Nesta secção, já criou um cofre remoto e carregou dados para ele. Agora, quer conectar os seus outros dispositivos ao mesmo.

**Pré-requisitos**
- Uma conta Obsidian. Se não tiver uma, [crie uma conta agora](https://obsidian.md/account#mode=signup).
- Uma subscrição ativa do Obsidian Sync. Se não tiver uma, subscreva a partir do [painel da sua conta](https://obsidian.md/account).
- Sync ativado nas definições dos [[Plugins Base]].
- Um cofre remoto ativo. Se ainda não criou um, crie primeiro um [[Configurar o Obsidian Sync#Criar um novo cofre remoto|cofre remoto]].
- **Recomendado**: Um [[Fazer cópia de segurança dos ficheiros do Obsidian|sistema de cópia de segurança]] implementado para os seus ficheiros do Obsidian no dispositivo que mais utiliza. Um serviço de sincronização não é uma cópia de segurança.

### Sincronizar o seu cofre a partir do alternador de cofres

Se acabou de instalar o Obsidian, quando abrir o programa ser-lhe-á apresentado o [[Gerir cofres|Alternador de cofres]]. Para criar um novo cofre local a partir do conteúdo de um cofre remoto, siga os seguintes passos.

1. Abra o Obsidian (assumindo que é a primeira vez que o abre)
2. Selecione uma das opções dependendo da sua instalação:
	1. **Computador**: Na secção que diz Conectar ao Obsidian Sync, escolha **Configurar**
	2. **Móvel/Tablet**: **Configurar Obsidian Sync**
3. Inicie sessão com a sua conta de utilizador Obsidian
	1. Se a [[Autenticação de 2 fatores|2FA]] estiver configurada, introduza o seu código 2FA.
4. Ser-lhe-á pedido para escolher qual cofre remoto deseja sincronizar com este dispositivo. Selecione **Conectar**.
5. Ser-lhe-á pedido para escolher um nome para o cofre local que será criado no dispositivo para guardar estes dados. Introduza o nome da sua preferência.
	1. Se utiliza [[Obsidian URI]]s, vai querer usar o mesmo nome do cofre local no seu outro dispositivo.
6. Selecione **Criar**.
7. A janela de cofres remotos aparecerá momentaneamente enquanto o Obsidian Sync se conecta ao seu servidor e valida a subscrição. Depois apresentar-lhe-á uma janela *Configurar conexão*.
	1. É altamente recomendado que feche ou deslize para baixo nesta janela e [[#Ajustar as definições do Obsidian Sync|ajuste as definições do Obsidian Sync]] primeiro.
	2. Se alterar quaisquer definições do Sync, recarregue ou reinicie o Obsidian.

### Sincronizar o seu cofre a partir das Definições do Obsidian

Se já criou um cofre local neste dispositivo e quer conectar este cofre local a um cofre remoto, as instruções são muito semelhantes a [[#Configurar o Obsidian Sync pela primeira vez]].

![[Configurar o Obsidian Sync#Entrar com a sua conta Obsidian]]

![[Configurar o Obsidian Sync#Ativar o Obsidian Sync]]

#### Conectar a um cofre remoto

1. Abra as **[[Definições]]**.
2. Na barra lateral, selecione **Sync**.
3. Junto a **Escolher cofre remoto**, clique em **Escolher**.
4. Clique em **Conectar** junto ao cofre remoto ao qual deseja conectar.
5. Em **Chave de encriptação**, introduza a palavra-passe do seu cofre, se tiver uma.
6. Será solicitado a começar a sincronizar. É recomendado esperar e ajustar as suas definições de sincronização primeiro. Se quiser sincronizar todo o cofre para o dispositivo tal como está, pode selecionar **Começar sincronização**.

> [!warning] Se o cofre no seu dispositivo já contiver algumas notas (não recomendado), será avisado de que essas notas serão mescladas antes de prosseguir. Os conflitos serão resolvidos através da [[Resolver problemas do Obsidian Sync#Resolução de conflitos|resolução de conflitos do Sync]].

![[Configurar o Obsidian Sync#Ajustar as definições do Obsidian Sync]]

![[Configurar o Obsidian Sync#Começar a sincronizar com o Obsidian Sync]]

## Gerir os seus cofres remotos

Criou e conectou-se a um cofre remoto. Pode também ter sincronizado este cofre remoto com vários dispositivos. Esta secção aborda algumas das outras instruções comuns de que pode precisar para gerir este cofre remoto.

### Desconectar de um cofre remoto

1. Abra as **[[Definições]]** do Obsidian.
2. Selecione **Sync** na barra lateral.
3. Clique no botão **Desconectar** junto a Cofres remotos.

Está agora desconectado do cofre remoto e já não está a sincronizar neste dispositivo.

### Eliminar um cofre remoto

> [!tip] Eliminar um cofre remoto não eliminará os seus dados locais no seu dispositivo.

1. Abra as **[[Definições]]**.
2. Na barra lateral, selecione **Sync**.
3. Selecione **Gerir** junto a Cofres remotos. Abrirá uma janela com a lista dos seus cofres remotos.
4. Selecione o ícone do caixote do lixo ![[lucide-trash-2.svg#icon]] junto ao cofre remoto que deseja eliminar.
5. Confirme a eliminação selecionando o botão vermelho **Eliminar**.
6. O seu cofre remoto foi eliminado.

> [!info] Se não houver ícone de caixote do lixo visível, pode ser necessário desconectar primeiro do cofre remoto. Depois de desconectado, selecione o botão **Escolher** para abrir a lista de cofres remotos.

### Servidores de sincronização regionais

O Obsidian Sync permite-lhe escolher a localização de alojamento do seu cofre remoto. Se estiver a usar a versão `1.4.16` ou anterior do Obsidian, a localização será escolhida automaticamente.

Se não tem a certeza de qual é a região do seu cofre atual, consulte [[Segurança e privacidade#Onde posso encontrar o meu servidor Sync atual e onde está alojado?|Onde posso encontrar o meu servidor Sync atual e onde está alojado?]] para orientação.

![[sync-regional-sync-servers.png#interface|300]]

Após selecionar uma localização, o seu centro de dados **não pode** ser movido para um servidor diferente sem reenviar os seus dados. Para mudar de região, siga o [[Regiões do Sync|guia de regiões do Sync]].

![[Segurança e privacidade#^sync-geo-regions]]

## Próximos passos

Aqui estão alguns documentos sugeridos para ler a seguir.

- Explore mais sobre [[Definições do Sync e sincronização seletiva|selecionar ficheiros e definições para sincronizar]].
- Saiba o que acontece se o seu cofre remoto [[História de versionamento|ficar cheio]].
- [[Colaborar num cofre partilhado]] com outro utilizador do Obsidian Sync.
- Consulte as [[Perguntas frequentes|FAQ do Sync]] para algumas respostas a perguntas comuns.
