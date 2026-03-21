---
permalink: sync-notes
cssclasses:
  - soft-embed
publish: true
mobile: true
description: Como sincronizar suas notas do Obsidian entre dispositivos e plataformas.
---
O Obsidian armazena notas localmente no seu dispositivo para que você sempre tenha acesso a elas, mesmo offline. Para acessar suas notas em múltiplos dispositivos, você precisa configurar um método de sincronização.

Este guia aborda métodos comuns de sincronização, incluindo dicas para evitar perda de dados e garantir uma experiência tranquila.

Também recomendamos ler nosso [[Fazer backup dos seus arquivos do Obsidian|guia de backup]] para proteger seus dados.

## Métodos de sincronização

Com o Obsidian, seus dados são simplesmente armazenados como arquivos em uma pasta chamada [[Cofres locais e remotos|cofre]]. Isso significa que existem muitas maneiras de sincronizar seus dados.

Estes são alguns métodos de sincronização comumente usados relatados por membros da [Comunidade Obsidian](https://obsidian.md/pt-BR/community):

1. **Sincronização própria**: [[#Obsidian Sync]]
2. **Sincronização em nuvem de terceiros**: [[#iCloud]], [[#OneDrive]] e [[#Google Drive]]
3. **Sincronização local**: [[#Syncthing]]
4. **Controle de versão**: [[#Git]] e [[#Working Copy]]

## Obsidian Sync

**Sistemas recomendados**: `Windows`, `macOS`, `Linux`, `iOS`, `Android`

O método de sincronização mais direto e oficialmente suportado é nossa solução própria: [[Introdução ao Obsidian Sync|Obsidian Sync]].

O Obsidian Sync mantém seus cofres sincronizados em todos os dispositivos usando um cofre remoto externo para fazer cópias dos seus dados. Uma cópia local permanece nos seus dispositivos o tempo todo.

Siga o [[Configurar o Obsidian Sync|guia de configuração]] para configurar o Obsidian Sync.

## iCloud

**Sistemas recomendados**: `macOS`, `iOS`, `iPadOS`

O iCloud pode ser usado para sincronizar cofres entre iOS e macOS. No entanto, o **iCloud Drive no Windows** pode levar à duplicação ou corrupção de arquivos.

**Como criar e armazenar seu cofre no iCloud Drive**:

- **Ative o iCloud Drive**:
    - No macOS: Vá para **Preferências do Sistema → Apple ID → iCloud → iCloud Drive**.
    - No iOS: Vá para **Ajustes → [Seu Nome] → iCloud → iCloud Drive**.
- **Crie um novo cofre no iCloud**:
    - No macOS:
        1. Abra o **Obsidian** e selecione **Criar novo cofre**.
        2. No seletor de arquivos, navegue até **iCloud Drive → Obsidian**.
        3. Crie uma pasta para seu cofre e dê um nome.
        4. Selecione **Criar** para finalizar.
    - No iOS:
        1. Abra o **Obsidian** e toque em **Criar novo cofre**.
        2. Digite um nome para seu cofre.
        3. Ative **Armazenar no iCloud**.
        4. Toque em **Criar**.
- **Abra o cofre em outro dispositivo Apple**: 
    - Em outro dispositivo macOS ou iOS, abra o **Obsidian**, vá ao [[Gerenciar cofres|Alternador de cofres]] e selecione **Abrir pasta como um cofre**. Navegue até **iCloud Drive → Obsidian**.

> [!warning]+ Localização da pasta no iOS e iPadOS
> Ao usar o iCloud em dispositivos móveis, certifique-se de que seu cofre está armazenado no local correto: `iCloud Drive/Obsidian/[Nome do Seu Cofre]`.
> 
> Os cofres devem estar dentro da pasta **Obsidian** no iCloud Drive. A pasta à direita com o ícone do Obsidian é a correta. Não use a pasta simples sem o ícone do aplicativo.
> 
> ![[iCloud-folder-location.png#interface]]
> 
> Para verificar a localização do seu cofre, abra o aplicativo **Arquivos**, toque em **Explorar**, selecione **iCloud Drive** em **Locais** e confirme que seu cofre está dentro da pasta **Obsidian**. Se seu cofre estiver em um local diferente, você pode ter problemas de sincronização.

> [!tip] Melhores práticas
> - Para **macOS 14 (Sonoma) e anteriores**: Desative **Otimizar Armazenamento do Mac** nas configurações do iCloud para evitar que arquivos sejam removidos localmente. Esta configuração afeta todo o armazenamento do iCloud no dispositivo, não apenas o Obsidian.
> - Para **macOS 15 (Sequoia)**: Clique com o botão direito na pasta **Obsidian** no iCloud Drive e selecione **Manter Baixado**.

## OneDrive

**Sistemas recomendados**: `Windows`, `macOS` (funcionalidade limitada no Android)

O [OneDrive](https://support.microsoft.com/en-us/office/Sync-with-OneDrive-bb89981b-e382-4969-b8fd-d413a90b6db3#ID0EAABAAA=Set_up) é uma opção popular de armazenamento em nuvem para usuários de Windows e macOS. No entanto, ele tem limitações no Android e não é oficialmente suportado para sincronizar cofres do Obsidian no iOS.

> [!info] Manter arquivos disponíveis offline
> Antes de usar o OneDrive para sincronização, certifique-se de que a pasta do seu cofre esteja marcada como **Sempre manter neste dispositivo**. Isso evita que o OneDrive remova arquivos localmente e faça o Obsidian pensar que eles estão ausentes.

**Como criar e armazenar seu cofre no OneDrive**:

1. **Configure o OneDrive**:
   - No Windows: Entre pelo aplicativo OneDrive ou sua conta Microsoft.
   - No macOS: Baixe o aplicativo OneDrive e entre.
2. **Crie um novo cofre no OneDrive**:
   - No Windows/macOS:
     1. Abra o **Explorador de Arquivos** (Windows) ou **Finder** (macOS) e navegue até **OneDrive → Documentos**.
     2. Crie uma nova pasta (ex.: \"Cofre Obsidian\").
     3. Abra o **Obsidian**, selecione **Criar novo cofre** e selecione a pasta do OneDrive.
3. **Abra o cofre em outro dispositivo**:
   - Em outro dispositivo, abra o **Obsidian**, vá ao [[Gerenciar cofres|Alternador de cofres]] e selecione **Abrir pasta como um cofre**. Navegue até **OneDrive → Documentos**.

> [!info] Sincronização no Android
> O OneDrive pode não funcionar bem para sincronização no Android. Considere usar aplicativos como [Dropsync](https://play.google.com/store/apps/details?id=com.ttxapps.dropsync) ou [FolderSync](https://play.google.com/store/apps/details?id=dk.tacit.android.foldersync.lite).

> [!tip] Melhores práticas
> - Sempre mantenha os arquivos do seu cofre **Disponíveis Offline** clicando com o botão direito na pasta e selecionando **Sempre manter neste dispositivo**.
> - Evite usar o recurso **Arquivos sob Demanda** do OneDrive para cofres para prevenir problemas de sincronização.

## Google Drive

**Sistemas recomendados**: `Windows`, `macOS`, `Android` (funcionalidade limitada no iOS)

O [Google Drive](https://support.google.com/drive/answer/10838124?hl=en) é outra solução popular de armazenamento em nuvem. Embora não seja oficialmente suportado para sincronizar cofres do Obsidian, você pode usar aplicativos e plugins de terceiros para sincronizar entre dispositivos.

> [!info] Suporte ao iOS
> O Google Drive não é oficialmente suportado para sincronizar cofres do Obsidian no iOS. Considere usar uma solução de terceiros ou plugin para sincronizar no iOS.

**Como criar e armazenar seu cofre no Google Drive**:

1. **Configure o Google Drive**:
    - No Windows ou macOS: Baixe o aplicativo Google Drive e entre.
    - No Android: Certifique-se de que o Google Drive está ativado e conectado.
2. **Crie um novo cofre no Google Drive**:
    - No Windows/macOS:
        1. Abra o **Explorador de Arquivos** (Windows) ou **Finder** (macOS) e navegue até **Google Drive**.
        2. Crie uma nova pasta (ex.: \"Cofre Obsidian\").
        3. Abra o **Obsidian**, selecione **Criar novo cofre** e selecione a pasta do Google Drive.
3. **Abra o cofre em outro dispositivo**:
    - Em outro dispositivo, abra o **Obsidian**, vá ao [[Gerenciar cofres|Alternador de cofres]] e selecione **Abrir pasta como um cofre**. Navegue até sua pasta do Google Drive.

> [!tip] Melhores práticas
> - Defina os arquivos do cofre como **Disponíveis Offline** no Google Drive para evitar problemas de sincronização devido à remoção local de arquivos.
> - Para iOS, considere métodos alternativos como [[Introdução ao Obsidian Sync|Obsidian Sync]], [[#iCloud]], ou use o plugin **Remotely Save**.

## Syncthing

**Sistemas recomendados**: `Windows`, `macOS`, `Linux`

O Syncthing é uma ferramenta de sincronização de arquivos descentralizada que não depende de armazenamento em nuvem. Ele sincroniza seu cofre diretamente entre dispositivos pela rede ou internet.

> [!info]+ Suporte ao Android
> O aplicativo oficial do Syncthing para Android não é mais mantido. No entanto, um fork da comunidade chamado [Syncthing-Fork](https://github.com/Catfriend1/syncthing-android) continua em desenvolvimento ativo e pode ser usado em dispositivos Android.

**Como criar e armazenar seu cofre usando o Syncthing**:

1. **Configure o Syncthing**:
   - Instale o Syncthing em cada dispositivo. Consulte o [site do Syncthing](https://syncthing.net/) para guias de instalação.
   - No Android, instale o [Syncthing-Fork](https://github.com/Catfriend1/syncthing-android) a partir das releases do GitHub ou F-Droid.
2. **Crie e configure uma pasta compartilhada**:
   - Em todos os dispositivos:
     1. Abra o Syncthing e crie uma pasta compartilhada. Defina o caminho da pasta para o seu cofre do Obsidian.
     2. Certifique-se de que a mesma pasta está selecionada em todos os dispositivos.
     3. Configure as preferências de sincronização da pasta (ex.: **Enviar e Receber** para sincronização bidirecional).
3. **Abra o cofre no Obsidian**:
   - Uma vez que a pasta esteja sincronizada entre os dispositivos, abra o **Obsidian**, vá ao [[Gerenciar cofres|Alternador de cofres]] e selecione **Abrir pasta como um cofre**.

> [!info] Disponibilidade do dispositivo
> O Syncthing funciona melhor quando pelo menos um dispositivo está sempre ligado para garantir sincronização contínua.

> [!tip] Melhores práticas
> - Para sincronização local, certifique-se de que todos os dispositivos estejam conectados à mesma rede.
> - Exclua `.obsidian` da sincronização se você quiser configurações separadas em cada dispositivo.
> - Use padrões de ignorar para evitar sincronizar arquivos temporários ou de backup.

## Git

**Sistemas recomendados**: `Windows`, `macOS`, `Linux`

O **Git** é um sistema de controle de versão que permite rastrear mudanças, colaborar com outros e sincronizar seus cofres através de repositórios como GitHub, GitLab ou um servidor auto-hospedado.

**Como sincronizar seu cofre usando Git**:

1. **Configure um repositório remoto**:
    - Crie um repositório em uma plataforma de hospedagem Git (ex.: GitHub, GitLab ou um servidor auto-hospedado).
2. **Sincronize seu cofre**:
    1. Abra um terminal ou GUI do Git (ex.: GitKraken, Sourcetree).
    2. Inicialize um repositório Git na pasta do seu cofre usando `git init`.
    3. Adicione o repositório remoto: `git remote add origin [URL]`.
    4. Faça commit das suas alterações: `git add .` e `git commit -m "Sua mensagem"`.
    5. Envie as alterações: `git push origin main`.
3. **Puxe as alterações em outros dispositivos**:
    - Clone o repositório em outro dispositivo e puxe as alterações usando `git pull origin main`.

> [!info] Sincronização manual necessária
> O Git oferece forte controle de versão, mas a sincronização não é automática. Você deve enviar e puxar alterações manualmente.

## Sincronização no iPhone e iPad

**Opções recomendadas**:
- [[Introdução ao Obsidian Sync|Obsidian Sync]]
- [[#iCloud]]

> [!info] Evite misturar serviços de sincronização
> Evite sincronizar o mesmo cofre em múltiplos serviços (ex.: usar tanto Obsidian Sync quanto iCloud simultaneamente) para prevenir conflitos de dados ou corrupção.

**Opções não suportadas**:
Os seguintes serviços não são oficialmente suportados no iOS, mas usuários encontraram soluções alternativas usando ferramentas ou plugins de terceiros:

- Dropbox
- Google Drive
- OneDrive
- Syncthing

Alguns usuários conseguiram usar plugins como **Remotely Save** ou **LiveSync** para sincronizar cofres no iOS. No entanto, esses métodos não são oficialmente suportados e os resultados podem variar.

### Working Copy

**Sistemas recomendados**: `iOS`
**Requer**: [[#Git]]

O **Working Copy** é um cliente Git para iOS que permite clonar, fazer commit e enviar alterações para um repositório Git. Funciona bem para sincronizar cofres do Obsidian via Git, embora alguns recursos exijam uma compra dentro do aplicativo.

**Como sincronizar seu cofre usando o Working Copy**:

1. **Instale o Working Copy**:
    - Baixe o aplicativo **[Working Copy](https://apps.apple.com/us/app/working-copy-git-client/id896694807)** no seu iPhone ou iPad.
2. **Clone seu repositório Git**:
    - Abra o Working Copy, toque em **Adicionar Repositório** e insira a URL do seu repositório (ex.: GitHub, GitLab).
3. **Vincule o repositório ao Obsidian**:
    - Vincule a pasta do repositório clonado a um cofre vazio no **Obsidian**.
4. **Faça commit e envie as alterações**:
    - Após editar notas no Obsidian, use o Working Copy para fazer **Commit** e **Push** das alterações para o repositório remoto.
    - Em outros dispositivos, puxe as alterações usando Git para sincronizar o cofre.

> [!info] Uso pela comunidade
> Embora o Working Copy não seja oficialmente suportado, muitos usuários o utilizam com sucesso para sincronizar cofres com Git.

## Perguntas frequentes

**Por que meu serviço de sincronização preferido não é oficialmente suportado?**

Diferente de alguns aplicativos de notas que acessam um arquivo por vez, o Obsidian requer acesso a todo o cofre para seus recursos (ex.: atualizar links ao renomear um arquivo). Isso dificulta o funcionamento confiável de alguns serviços com o Obsidian.

**Por que preciso manter os arquivos "Disponíveis Offline"?**

Se serviços como OneDrive ou iCloud removerem arquivos localmente (ex.: usando **Arquivos sob Demanda** ou **Otimizar Armazenamento do Mac**), o Obsidian não consegue acessá-los, causando problemas de sincronização. Marque a pasta do seu cofre como **Sempre manter neste dispositivo** (OneDrive) ou certifique-se de que **Manter Baixado** está ativado (iCloud).

**Como gerencio diferentes configurações para meus cofres?**

O Obsidian permite personalizar a pasta de configuração por dispositivo usando o recurso de [[Pasta de configuração|Pastas de configuração]].
