---
permalink: sync-notes
cssclasses:
  - soft-embed
publish: true
mobile: true
description: Como sincronizar as suas notas do Obsidian entre dispositivos e plataformas.
---
O Obsidian armazena notas localmente no seu dispositivo para que tenha sempre acesso a elas, mesmo offline. Para aceder às suas notas em vários dispositivos, precisa de configurar um método de sincronização.

Este guia abrange métodos de sincronização comuns, incluindo dicas para evitar perda de dados e garantir uma experiência tranquila.

Também recomendamos a leitura do nosso [[Fazer cópia de segurança dos ficheiros do Obsidian|guia de cópias de segurança]] para proteger os seus dados.

## Métodos de sincronização

Com o Obsidian, os seus dados são simplesmente armazenados como ficheiros numa pasta chamada [[Cofres locais e remotos|cofre]]. Isto significa que existem muitas formas de sincronizar os seus dados.

Estes são alguns métodos de sincronização comummente utilizados, reportados por membros da [Comunidade Obsidian](https://obsidian.md/community):

1. **Sincronização própria**: [[#Obsidian Sync]]
2. **Sincronização na nuvem de terceiros**: [[#iCloud]], [[#OneDrive]] e [[#Google Drive]]
3. **Sincronização local**: [[#Syncthing]]
4. **Controlo de versões**: [[#Git]] e [[#Working Copy]]

## Obsidian Sync

**Sistemas recomendados**: `Windows`, `macOS`, `Linux`, `iOS`, `Android`

O método de sincronização mais direto e oficialmente suportado é a nossa solução própria: [[Introdução ao Obsidian Sync|Obsidian Sync]].

O Obsidian Sync mantém os seus cofres sincronizados em todos os dispositivos, utilizando um cofre remoto externo para fazer cópias dos seus dados. Uma cópia local permanece nos seus dispositivos em todos os momentos.

Siga o [[Configurar o Obsidian Sync|guia de configuração]] para configurar o Obsidian Sync.

## iCloud

**Sistemas recomendados**: `macOS`, `iOS`, `iPadOS`

O iCloud pode ser utilizado para sincronizar cofres entre iOS e macOS. No entanto, o **iCloud Drive no Windows** pode levar a duplicação ou corrupção de ficheiros.

**Como criar e armazenar o seu cofre no iCloud Drive**:

- **Ativar o iCloud Drive**:
    - No macOS: Vá a **Preferências do Sistema → Apple ID → iCloud → iCloud Drive**.
    - No iOS: Vá a **Definições → [O Seu Nome] → iCloud → iCloud Drive**.
- **Criar um novo cofre no iCloud**:
    - No macOS:
        1. Abra o **Obsidian** e selecione **Criar novo vault**.
        2. No seletor de ficheiros, navegue até **iCloud Drive → Obsidian**.
        3. Crie uma pasta para o seu cofre e dê-lhe um nome.
        4. Selecione **Criar** para terminar.
    - No iOS:
        1. Abra o **Obsidian** e toque em **Criar novo vault**.
        2. Introduza um nome para o seu cofre.
        3. Ative **Armazenar no iCloud**.
        4. Toque em **Criar**.
- **Abrir o cofre noutro dispositivo Apple**: 
    - Noutro dispositivo macOS ou iOS, abra o **Obsidian**, vá ao [[Gerir cofres|Alternador de cofres]] e selecione **Abrir pasta como vault**. Navegue até **iCloud Drive → Obsidian**.

> [!warning]+ Localização de pasta no iOS e iPadOS
> Ao utilizar o iCloud em dispositivos móveis, certifique-se de que o seu cofre está armazenado na localização correta: `iCloud Drive/Obsidian/[Nome do Seu Cofre]`.
> 
> Os cofres devem estar dentro da pasta **Obsidian** no iCloud Drive. A pasta à direita com o ícone do Obsidian é a correta. Não utilize a pasta simples sem o ícone da aplicação.
> 
> ![[iCloud-folder-location.png#interface]]
> 
> Para verificar a localização do seu cofre, abra a aplicação **Ficheiros**, toque em **Selecionar**, selecione **iCloud Drive** em **Localizações** e confirme que o seu cofre está dentro da pasta **Obsidian**. Se o seu cofre estiver numa localização diferente, poderá ter problemas de sincronização.

> [!tip] Boas práticas
> - Para **macOS 14 (Sonoma) e anteriores**: Desative **Otimizar Armazenamento do Mac** nas definições do iCloud para evitar que os ficheiros sejam descarregados do dispositivo. Esta definição afeta todo o armazenamento do iCloud no dispositivo, não apenas o Obsidian.
> - Para **macOS 15 (Sequoia)**: Clique com o botão direito na pasta **Obsidian** no iCloud Drive e selecione **Manter Transferido**.

## OneDrive

**Sistemas recomendados**: `Windows`, `macOS` (funcionalidade limitada no Android)

O [OneDrive](https://support.microsoft.com/en-us/office/Sync-with-OneDrive-bb89981b-e382-4969-b8fd-d413a90b6db3#ID0EAABAAA=Set_up) é uma opção popular de armazenamento na nuvem para utilizadores de Windows e macOS. No entanto, tem limitações no Android e não é oficialmente suportado para sincronizar cofres do Obsidian no iOS.

> [!info] Manter ficheiros disponíveis offline
> Antes de utilizar o OneDrive para sincronização, certifique-se de que a pasta do seu cofre está marcada como **Manter sempre neste dispositivo**. Isto evita que o OneDrive descarregue ficheiros do dispositivo e faça o Obsidian pensar que estão em falta.

**Como criar e armazenar o seu cofre no OneDrive**:

1. **Configurar o OneDrive**:
   - No Windows: Inicie sessão através da aplicação OneDrive ou da sua conta Microsoft.
   - No macOS: Transfira a aplicação OneDrive e inicie sessão.
2. **Criar um novo cofre no OneDrive**:
   - No Windows/macOS:
     1. Abra o **Explorador de Ficheiros** (Windows) ou o **Finder** (macOS) e navegue até **OneDrive → Documentos**.
     2. Crie uma nova pasta (por exemplo, \"Cofre Obsidian\").
     3. Abra o **Obsidian**, selecione **Criar novo vault** e selecione a pasta do OneDrive.
3. **Abrir o cofre noutro dispositivo**:
   - Noutro dispositivo, abra o **Obsidian**, vá ao [[Gerir cofres|Alternador de cofres]] e selecione **Abrir pasta como vault**. Navegue até **OneDrive → Documentos**.

> [!info] Sincronização no Android
> O OneDrive pode não funcionar bem para sincronização no Android. Considere utilizar aplicações como [Dropsync](https://play.google.com/store/apps/details?id=com.ttxapps.dropsync) ou [FolderSync](https://play.google.com/store/apps/details?id=dk.tacit.android.foldersync.lite).

> [!tip] Boas práticas
> - Mantenha sempre os ficheiros do seu cofre **Disponíveis Offline** clicando com o botão direito na pasta e selecionando **Manter sempre neste dispositivo**.
> - Evite utilizar a funcionalidade **Ficheiros a Pedido** do OneDrive para cofres, de forma a evitar problemas de sincronização.

## Google Drive

**Sistemas recomendados**: `Windows`, `macOS`, `Android` (funcionalidade limitada no iOS)

O [Google Drive](https://support.google.com/drive/answer/10838124?hl=en) é outra solução popular de armazenamento na nuvem. Embora não seja oficialmente suportado para sincronizar cofres do Obsidian, pode utilizar aplicações e plugins de terceiros para sincronizar entre dispositivos.

> [!info] Suporte para iOS
> O Google Drive não é oficialmente suportado para sincronizar cofres do Obsidian no iOS. Considere utilizar uma solução ou plugin de terceiros para sincronizar no iOS.

**Como criar e armazenar o seu cofre no Google Drive**:

1. **Configurar o Google Drive**:
    - No Windows ou macOS: Transfira a aplicação Google Drive e inicie sessão.
    - No Android: Certifique-se de que o Google Drive está ativado e que iniciou sessão.
2. **Criar um novo cofre no Google Drive**:
    - No Windows/macOS:
        1. Abra o **Explorador de Ficheiros** (Windows) ou o **Finder** (macOS) e navegue até **Google Drive**.
        2. Crie uma nova pasta (por exemplo, \"Cofre Obsidian\").
        3. Abra o **Obsidian**, selecione **Criar novo vault** e selecione a pasta do Google Drive.
3. **Abrir o cofre noutro dispositivo**:
    - Noutro dispositivo, abra o **Obsidian**, vá ao [[Gerir cofres|Alternador de cofres]] e selecione **Abrir pasta como vault**. Navegue até à sua pasta do Google Drive.

> [!tip] Boas práticas
> - Defina os ficheiros do cofre como **Disponíveis Offline** no Google Drive para evitar problemas de sincronização devido à descarga de ficheiros do dispositivo.
> - Para iOS, considere métodos alternativos como o [[Introdução ao Obsidian Sync|Obsidian Sync]], [[#iCloud]], ou utilize o plugin **Remotely Save**.

## Syncthing

**Sistemas recomendados**: `Windows`, `macOS`, `Linux`

O Syncthing é uma ferramenta de sincronização de ficheiros descentralizada que não depende de armazenamento na nuvem. Sincroniza o seu cofre diretamente entre dispositivos através da rede ou da internet.

> [!info]+ Suporte para Android
> A aplicação oficial do Syncthing para Android já não é mantida. No entanto, um fork da comunidade chamado [Syncthing-Fork](https://github.com/Catfriend1/syncthing-android) continua em desenvolvimento ativo e pode ser utilizado em dispositivos Android.

**Como criar e armazenar o seu cofre utilizando o Syncthing**:

1. **Configurar o Syncthing**:
   - Instale o Syncthing em cada dispositivo. Consulte o [site do Syncthing](https://syncthing.net/) para guias de instalação.
   - No Android, instale o [Syncthing-Fork](https://github.com/Catfriend1/syncthing-android) a partir dos lançamentos do GitHub ou do F-Droid.
2. **Criar e configurar uma pasta partilhada**:
   - Em todos os dispositivos:
     1. Abra o Syncthing e crie uma pasta partilhada. Defina o caminho da pasta para o seu cofre do Obsidian.
     2. Certifique-se de que a mesma pasta está selecionada em todos os dispositivos.
     3. Configure as preferências de sincronização da pasta (por exemplo, **Enviar e Receber** para sincronização bidirecional).
3. **Abrir o cofre no Obsidian**:
   - Assim que a pasta estiver sincronizada entre dispositivos, abra o **Obsidian**, vá ao [[Gerir cofres|Alternador de cofres]] e selecione **Abrir pasta como vault**.

> [!info] Disponibilidade do dispositivo
> O Syncthing funciona melhor quando pelo menos um dispositivo está sempre ligado para garantir sincronização contínua.

> [!tip] Boas práticas
> - Para sincronização local, certifique-se de que todos os dispositivos estão ligados à mesma rede.
> - Exclua `.obsidian` da sincronização se quiser definições separadas em cada dispositivo.
> - Utilize padrões de ignorar para evitar sincronizar ficheiros temporários ou de cópia de segurança.

## Git

**Sistemas recomendados**: `Windows`, `macOS`, `Linux`

O **Git** é um sistema de controlo de versões que permite acompanhar alterações, colaborar com outros e sincronizar os seus cofres através de repositórios como GitHub, GitLab ou um servidor auto-hospedado.

**Como sincronizar o seu cofre utilizando Git**:

1. **Configurar um repositório remoto**:
    - Crie um repositório numa plataforma de hospedagem Git (por exemplo, GitHub, GitLab ou um servidor auto-hospedado).
2. **Sincronizar o seu cofre**:
    1. Abra um terminal ou interface Git (por exemplo, GitKraken, Sourcetree).
    2. Inicialize um repositório Git na pasta do seu cofre utilizando `git init`.
    3. Adicione o repositório remoto: `git remote add origin [URL]`.
    4. Faça commit das suas alterações: `git add .` e `git commit -m "A sua mensagem"`.
    5. Envie as alterações: `git push origin main`.
3. **Obter alterações noutros dispositivos**:
    - Clone o repositório noutro dispositivo e obtenha as alterações utilizando `git pull origin main`.

> [!info] Sincronização manual necessária
> O Git oferece controlo de versões robusto, mas a sincronização não é automática. Deve enviar e obter alterações manualmente.

## Sincronização no iPhone e iPad

**Opções recomendadas**:
- [[Introdução ao Obsidian Sync|Obsidian Sync]]
- [[#iCloud]]

> [!info] Evite misturar serviços de sincronização
> Evite sincronizar o mesmo cofre através de múltiplos serviços (por exemplo, utilizar o Obsidian Sync e o iCloud simultaneamente) para evitar conflitos de dados ou corrupção.

**Opções não suportadas**:
Os seguintes serviços não são oficialmente suportados no iOS, mas os utilizadores encontraram soluções alternativas utilizando ferramentas ou plugins de terceiros:

- Dropbox
- Google Drive
- OneDrive
- Syncthing

Alguns utilizadores utilizaram com sucesso plugins como **Remotely Save** ou **LiveSync** para sincronizar cofres no iOS. No entanto, estes métodos não são oficialmente suportados e os resultados podem variar.

### Working Copy

**Sistemas recomendados**: `iOS`
**Requer**: [[#Git]]

O **Working Copy** é um cliente Git para iOS que permite clonar, fazer commit e enviar alterações para um repositório Git. Funciona bem para sincronizar cofres do Obsidian via Git, embora algumas funcionalidades requeiram uma compra dentro da aplicação.

**Como sincronizar o seu cofre utilizando o Working Copy**:

1. **Instalar o Working Copy**:
    - Transfira a aplicação **[Working Copy](https://apps.apple.com/us/app/working-copy-git-client/id896694807)** no seu iPhone ou iPad.
2. **Clonar o seu repositório Git**:
    - Abra o Working Copy, toque em **Adicionar Repositório** e introduza o URL do seu repositório (por exemplo, GitHub, GitLab).
3. **Ligar o repositório ao Obsidian**:
    - Ligue a pasta do repositório clonado a um cofre vazio no **Obsidian**.
4. **Fazer commit e enviar alterações**:
    - Após editar notas no Obsidian, utilize o Working Copy para fazer **Commit** e **Push** das alterações para o repositório remoto.
    - Noutros dispositivos, obtenha as alterações utilizando Git para sincronizar o cofre.

> [!info] Utilização pela comunidade
> Embora o Working Copy não seja oficialmente suportado, muitos utilizadores utilizaram-no com sucesso para sincronizar cofres com Git.

## Perguntas frequentes

**Porque é que o meu serviço de sincronização preferido não é oficialmente suportado?**

Ao contrário de algumas aplicações de notas que acedem a um ficheiro de cada vez, o Obsidian requer acesso a todo o cofre para as suas funcionalidades (por exemplo, atualizar ligações ao renomear um ficheiro). Isto torna difícil para alguns serviços funcionarem de forma fiável com o Obsidian.

**Porque é que preciso de manter os ficheiros "Disponíveis Offline"?**

Se serviços como o OneDrive ou o iCloud descarregam ficheiros do dispositivo (por exemplo, utilizando **Ficheiros a Pedido** ou **Otimizar Armazenamento do Mac**), o Obsidian não consegue aceder a eles, causando problemas de sincronização. Marque a pasta do seu cofre como **Manter sempre neste dispositivo** (OneDrive) ou certifique-se de que **Manter Transferido** está ativado (iCloud).

**Como posso gerir diferentes configurações para os meus cofres?**

O Obsidian permite personalizar a pasta de configuração por dispositivo utilizando a funcionalidade de [[Pasta de configuração|Pastas de configuração]].
