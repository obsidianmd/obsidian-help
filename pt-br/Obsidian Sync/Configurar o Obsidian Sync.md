---
permalink: sync/setup
cssclasses:
  - soft-embed
publish: true
mobile: true
description: >-
  Você adquiriu o Obsidian Sync e está pronto para começar. Este guia ajudará
  você a configurar e ajustar as configurações do Obsidian Sync para uso diário.
aliases:
  - Obsidian Sync/Configurar Obsidian Sync
  - Obsidian Sync/Configure o Obsidian Sync em outro dispositivo
---
Você adquiriu o Obsidian Sync e está pronto para começar. Este guia ajudará você a configurar e ajustar as configurações do Obsidian Sync para uso diário.

- **Novo no Obsidian Sync?** Veja: [[#Configurar o Obsidian Sync pela primeira vez]]
- **Conectando um segundo dispositivo?** Veja: [[#Sincronizar um cofre remoto em outro dispositivo]]
- **Precisa fazer alterações?** Veja: [[#Gerenciar seus cofres remotos]]

## Configurar o Obsidian Sync pela primeira vez

Nesta seção, você criará um novo [[Cofres locais e remotos|cofre remoto]] e o conectará a um cofre local existente. Você não precisa criar um cofre local novo e vazio para usar o Obsidian Sync para essa finalidade.

> [!info] Seu cofre atual está em uma pasta do iCloud, OneDrive, Dropbox ou outro serviço de sincronização? Se **sim**, ou se você **não tem certeza**, por favor leia [[Perguntas frequentes#Posso usar uma sincronização de terceiros com o Obsidian Sync?|isto]] e [[Migrar para o Obsidian Sync]] antes de continuar.

**Pré-requisitos**

- Uma conta Obsidian. Se você não tem uma, [crie uma conta agora](https://obsidian.md/auth?returnto=%2Faccount%2Fsync#signup).
- Uma [[Planos e limites de armazenamento|assinatura]] ativa do Obsidian Sync. Se você não tem uma, assine pelo [painel da sua conta](https://obsidian.md/account/sync).
- **Recomendado**: Um [[Fazer backup dos seus arquivos do Obsidian|sistema de backup]] configurado para seus arquivos do Obsidian. Um serviço de sincronização não é um backup.

### Entrar com sua conta Obsidian

1. Abra **[[Configurações]]**.
2. Na barra lateral, selecione **Geral**.
3. Em **Conta → Sua conta**, selecione **Entrar**.
4. Em **E-mail**, insira seu e-mail.
5. Em **Senha**, insira sua senha.
6. Selecione **Entrar**.

### Ativar o Obsidian Sync

1. Abra **[[Configurações]]**.
2. Na barra lateral, em **Configurações**, selecione **Plugins nativos**.
3. Ative **Sync**.

### Criar um novo cofre remoto

1. Abra **[[Configurações]]**.
2. Na barra lateral, selecione **Sync**.
3. Ao lado de **Cofre remoto**, selecione **Escolher**.
4. Selecione **Criar novo cofre**.
5. Em **Nome do cofre**, insira o nome do cofre remoto.
6. Em **Região**, escolha a [[#Servidores de sincronização regionais|região]] do servidor para o seu cofre remoto.
7. Em **Senha de criptografia**, escolha uma senha para o seu cofre. Isso cria um cofre com criptografia de ponta a ponta. A senha do cofre é separada da sua conta Obsidian e pode ser diferente para cada um dos seus cofres. Para mais informações, consulte [[Segurança e privacidade]].
8. Selecione **Criar**.

### Conectar a um cofre remoto

1. Selecione **Conectar** ao lado do seu cofre recém-criado.
2. Insira a senha que você configurou para o cofre no campo **Senha de criptografia** se você optou pela [[Obsidian Sync/Segurança e privacidade#O que significa criptografia de ponta a ponta?|criptografia de ponta a ponta]].
3. Selecione **Desbloquear cofre**.
4. **Não comece a sincronizar ainda.** Verifique suas configurações de sincronização em [[#Ajustar configurações do Obsidian Sync|ajustar configurações do Obsidian Sync]].
    - Se você deseja começar a sincronizar imediatamente, prossiga para [[#Começar a sincronizar com o Obsidian Sync|começar a sincronizar com o Obsidian Sync]].
5. Se você ainda não fez isso, feche ou dispense a janela pop-up solicitando que você **Exclua Pastas** e **Comece a Sincronizar**. Prossiga para a próxima etapa.

#### Ajustar configurações do Obsidian Sync

1. Navegue até **[[Configurações]]** → **Sync** se necessário.
2. Se um nome de dispositivo ainda não foi adicionado, adicione um para facilitar a leitura dos logs do Sync!
3. Ative as configurações em **Sincronização seletiva** e **Sincronização de configuração do cofre** para indicar quais itens devem ser sincronizados de e para o cofre remoto.
    - **Nota**: Se você desconectou recentemente de um cofre remoto e está reconectando sem reiniciar o aplicativo, algumas configurações podem já estar ativadas.
4. Se você fizer alterações em qualquer configuração, reinicie o Obsidian completamente.
5. Depois que o Obsidian for reiniciado, retorne a **[[Configurações]]** → **Sync**.

#### Começar a sincronizar com o Obsidian Sync

Se você está começando a sincronizar após se conectar a um cofre remoto, verá um botão **Começar a sincronizar**. Selecione este botão para iniciar a sincronização.

Se você está começando a sincronizar após ajustar as configurações do Obsidian Sync e reiniciar o aplicativo, verá um botão **Retomar** dentro das configurações do Sync. Selecione este botão para iniciar a sincronização.

> [!done] Status da sincronização
> Quando o Obsidian Sync for concluído, um círculo verde com uma marca de verificação ( ![[obsidian-icon-sync-synced.svg#icon]] ) aparece no canto inferior direito (desktop) ou na barra lateral direita (mobile). O log de sincronização também exibirá "Totalmente sincronizado" como uma de suas mensagens mais recentes.
>
> Para mais detalhes sobre os status de sincronização, consulte [[Ícone de status e mensagens]].
^obsidian-sync-status

Para conectar outros dispositivos ao seu cofre remoto recém-criado e sincronizado, prossiga para [[Configurar o Obsidian Sync#Sincronizar um cofre remoto em outro dispositivo|Sincronizar um cofre remoto em outro dispositivo]].

Para saber mais sobre configurações e arquivos, prossiga para [[Configurações do Sync e sincronização seletiva]].

## Sincronizar um cofre remoto em outro dispositivo

Nesta seção, você já criou um cofre remoto e enviou dados para ele. Agora, você deseja conectar seus outros dispositivos a ele.

**Pré-requisitos**
- Uma conta Obsidian. Se você não tem uma, [crie uma conta agora](https://obsidian.md/account#mode=signup).
- Uma assinatura ativa do Obsidian Sync. Se você não tem uma, assine pelo [painel da sua conta](https://obsidian.md/account).
- Sync ativado nas configurações dos [[Plugins nativos]].
- Um cofre remoto ativo. Se você ainda não criou um, por favor crie um [[Configurar o Obsidian Sync#Criar um novo cofre remoto|cofre remoto]] primeiro.
- **Recomendado**: Um [[Fazer backup dos seus arquivos do Obsidian|sistema de backup]] configurado para seus arquivos do Obsidian no dispositivo mais utilizado. Um serviço de sincronização não é um backup.

### Sincronizar seu cofre pelo seletor de cofres

Se você instalou o Obsidian recentemente, ao abrir o programa será apresentado o [[Gerenciar cofres|Seletor de cofres]]. Para criar um novo cofre local a partir do conteúdo de um cofre remoto, você precisará seguir os seguintes passos.

1. Abra o Obsidian (assumindo que esta é a primeira vez que você o abre)
2. Selecione uma das opções dependendo da sua instalação:
	1. **Desktop**: Na seção que diz Conectar ao Obsidian Sync, escolha **Configurar**
	2. **Mobile/Tablet**: **Configurar Obsidian Sync**
3. Entre com sua conta de usuário Obsidian
	1. Se a [[Autenticação de 2 fatores|2FA]] estiver configurada, insira seu código 2FA.
4. Será solicitado que você escolha qual cofre remoto deseja sincronizar neste dispositivo. Selecione **Conectar**.
5. Será solicitado que você escolha um nome para o cofre local que será criado no dispositivo para armazenar esses dados. Insira o nome de sua preferência.
	1. Se você usa [[Obsidian URI]]s, você vai querer usar o mesmo nome do cofre local do seu outro dispositivo.
6. Selecione **Criar**.
7. A janela de cofres remotos aparecerá momentaneamente enquanto o Obsidian Sync se conecta ao servidor e valida a assinatura. Em seguida, apresentará uma janela *Configurar conexão*.
	1. É altamente recomendado que você feche ou deslize para baixo nesta janela e [[#Ajustar configurações do Obsidian Sync|ajuste as configurações do Obsidian Sync]] primeiro.
	2. Se você alterar qualquer configuração do Sync, por favor recarregue ou reinicie o Obsidian.

### Sincronizar seu cofre pelas Configurações do Obsidian

Se você já criou um cofre local neste dispositivo e deseja conectar este cofre local a um cofre remoto, as instruções são muito semelhantes a [[#Configurar o Obsidian Sync pela primeira vez]].

![[Configurar o Obsidian Sync#Entrar com sua conta Obsidian]]

![[Configurar o Obsidian Sync#Ativar o Obsidian Sync]]

#### Conectar a um cofre remoto

1. Abra **[[Configurações]]**.
2. Na barra lateral, selecione **Sync**.
3. Ao lado de **Escolher cofre remoto**, clique em **Escolher**.
4. Clique em **Conectar** ao lado do cofre remoto ao qual você deseja se conectar.
5. Em **Senha de criptografia**, insira a senha do seu cofre, se você tiver uma.
6. Você será solicitado a começar a sincronizar. É recomendado esperar e ajustar suas configurações de sincronização primeiro. Se você deseja sincronizar o cofre inteiro para o dispositivo como está, pode **Começar a sincronizar**.

> [!warning] Se o cofre no seu dispositivo já contém algumas notas (não recomendado), você será avisado de que essas notas serão mescladas antes de prosseguir. Conflitos serão resolvidos através da [[Solução de problemas do Obsidian Sync#Resolução de conflitos|resolução de conflitos do Sync]].

![[Configurar o Obsidian Sync#Ajustar configurações do Obsidian Sync]]

![[Configurar o Obsidian Sync#Começar a sincronizar com o Obsidian Sync]]

## Gerenciar seus cofres remotos

Você criou e se conectou a um cofre remoto. Você também pode ter sincronizado este cofre remoto em múltiplos dispositivos. Esta seção aborda algumas das outras instruções comuns que você pode precisar ao gerenciar este cofre remoto.

### Desconectar de um cofre remoto

1. Abra as **[[Configurações]]** do Obsidian.
2. Selecione **Sync** na barra lateral.
3. Clique no botão **Desconectar** ao lado de Cofres remotos.

Você agora está desconectado do cofre remoto e não está mais sincronizando neste dispositivo.

### Excluir um cofre remoto

> [!tip] Excluir um cofre remoto não excluirá seus dados locais no seu dispositivo.

1. Abra **[[Configurações]]**.
2. Na barra lateral, selecione **Sync**.
3. Selecione **Administrar** ao lado de Cofres remotos. Uma janela será aberta com sua lista de cofres remotos.
4. Selecione o ícone de lixeira ( ![[lucide-trash-2.svg#icon]] ) ao lado do cofre remoto que você deseja excluir.
5. Confirme a exclusão selecionando o botão vermelho **Excluir**.
6. Seu cofre remoto foi excluído.

> [!info] Se não houver ícone de lixeira visível, pode ser necessário primeiro desconectar do cofre remoto. Uma vez desconectado, selecione o botão **Escolher** para abrir a lista de cofres remotos.

### Servidores de sincronização regionais

O Obsidian Sync permite que você escolha a localização de hospedagem do seu cofre remoto. Se você está usando a versão `1.4.16` ou mais antiga do Obsidian, a localização será escolhida automaticamente para você.

Se você não tem certeza de qual é a região do seu cofre atual, consulte [[Obsidian Sync/Segurança e privacidade#Onde posso encontrar meu servidor Sync atual e onde ele está hospedado?|Onde posso encontrar meu servidor Sync atual e onde ele está hospedado?]] para orientação.

![[sync-regional-sync-servers.png#interface|300]]

Após selecionar uma localização, seu data center **não pode** ser movido para um servidor diferente sem reenviar seus dados. Para mudar de região, siga o [[Regiões do Sync|guia de regiões do Sync de cofres]].

![[Obsidian Sync/Segurança e privacidade#^sync-geo-regions]]

## Próximos passos

Aqui estão alguns documentos sugeridos para ler em seguida.

- Explore mais sobre [[Configurações do Sync e sincronização seletiva|seleção de arquivos e configurações para sincronizar]].
- Saiba o que acontece se seu cofre remoto [[Histórico de versões|ficar cheio]].
- [[Colaborar em um cofre compartilhado]] com outro usuário do Obsidian Sync.
- Confira as [[Perguntas frequentes|FAQ do Sync]] para respostas a perguntas comuns.
