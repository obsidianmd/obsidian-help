Sincronizar significa manter suas anotações atualizadas em todos os seus dispositivos, como laptop e telefone.

A maneira mais fácil de sincronizar suas notas entre seus dispositivos é usar [[Introdução ao Obsidian Sync|Obsidian Sync]]. Se você já possui uma assinatura do Obsidian Sync, veja como [[Configurar Obsidian Sync]].

Observe que o uso de vários serviços de sincronização ao mesmo tempo (por exemplo, Obsidian Sync _and_ Dropbox) pode causar perda de dados, corrupção e outros problemas. [[Obsidian Sync e serviços de terceiros||Saiba mais sobre como usar o Obsidian Sync com outros serviços aqui.]]

Se você não quiser usar o Obsidian Sync, esta página lista métodos alternativos para sincronizar seus cofres com vários dispositivos.

## Sincronize notas em vários desktops

Se você não usa o Obsidian em seus dispositivos móveis, pode usar qualquer serviço de terceiros que sincronize uma pasta local com um armazenamento em nuvem.

Por exemplo, você pode usar qualquer um dos seguintes serviços:

- Dropbox
- Google Drive
- iCloudDrive
- OneDrive
- Sincronizar

Para sincronizar suas notas, siga as instruções do serviço que você está usando para sincronizar uma pasta em seu sistema de arquivos local. Em seguida, abra a pasta como um cofre existente em todos os seus dispositivos de desktop.

## Sincronize suas notas no iPhone e iPad

Para sincronizar suas anotações com seu iPhone ou iPad, oferecemos suporte oficial às seguintes opções:

- [[Introdução ao Obsidian Sync|Obsidian Sync]]
- [[#iCloud Drive]]

**Observação:** os seguintes serviços não são compatíveis. Se você descobrir uma maneira de sincronizar suas anotações em seu dispositivo iOS usando qualquer um desses serviços, informe-nos em nossos canais da comunidade.

- Dropbox
- Google Drive
- OneDrive
- Sincronizar

### iCloud Drive

O Obsidian pode usar o iCloud Drive como um sistema de arquivos local.

Ao usar o iCloud Drive no macOS, certifique-se de atualizar a versão do instalador do aplicativo de desktop para v0.13.0 ou mais recente.

> [!note] Nota
> Não exceda o limite de armazenamento do iCloud. A sincronização pode parar.

#### Crie um novo cofre no iCloud Drive

Para criar um novo cofre no iCloud Drive em seu iPhone ou iPad:

1. Toque em **Criar novo cofre**.
2. Em **Nome do cofre**, digite o nome do seu cofre.
3. Ative **Armazenar no iCloud**.
4. Toque em **Criar**.

Obsidian criou uma nova pasta dentro do seu iCloud Drive. Para abrir a pasta do iCloud Drive como um cofre em seu computador:

1. Abra **Obsidian** no seu computador.
2. No seletor de cofre, à direita de **Abrir pasta como cofre**, clique em **Abrir**.
3. Navegue até **iCloud Drive → Obsidian**.
4. Selecione a pasta com o nome do cofre com o qual deseja sincronizar.

#### Sincronize um cofre existente com o iCloud Drive

Para sincronizar um cofre existente usando o iCloud, você precisa criar um cofre vazio no iCloud Drive e mover suas anotações em outro dispositivo para o cofre vazio.

Para criar um novo cofre vazio no iCloud Drive:

1. Toque em **Criar novo cofre**.
2. Em **Nome do cofre**, insira o mesmo nome do cofre com o qual deseja sincronizar.
3. Ative **Armazenar no iCloud**.
4. Toque em **Criar**.

Para mover suas notas para o novo cofre em seu iCloud Drive:

1. Em seu computador, abra a pasta **iCloud Drive**.
2. Abra a pasta **Obsidian**. Pode demorar alguns minutos para aparecer.
3. Mova os arquivos do seu cofre existente para a pasta com o nome do seu cofre.

O iCloud sincroniza os arquivos com seu dispositivo móvel. Dependendo do tamanho do seu cofre, isso pode levar alguns minutos.

### Cópia de trabalho

Se você armazenar suas anotações em um repositório [Git](https://git-scm.com/), talvez queira consultar [Cópia de trabalho](https://apps.apple.com/us/app/working -copy-git-client/id896694807) — um cliente Git para seu iOS.

Para sincronizar usando a cópia de trabalho:

1. Crie um cofre vazio em seu iPhone ou iPad.
2. Use a ação **Configurar sincronização de pasta** e selecione seu cofre vazio.
3. Confirme e envie quaisquer alterações para seu cofre usando o aplicativo Working Copy.

**Observação:** Embora não suportemos oficialmente esse método, vários de nossos usuários relataram que usaram a cópia de trabalho com sucesso para sincronizar suas anotações.

### Por que não consigo sincronizar usando o X?

Entendemos que muitos de vocês usam outros serviços para sincronizar arquivos e preferem usá-los para sincronizar suas notas também.

O Obsidian funciona de maneira diferente de outros editores Markdown no iOS. Editores como 1Writer e iA Writer acessam uma nota por vez, o que lhes permite usar o suporte integrado para documentos.

Por outro lado, muitos recursos do Obsidian precisam acessar todo o seu cofre. Por exemplo, se você renomear um arquivo, o Obsidian precisa atualizar todos os arquivos no cofre vinculados a esse arquivo.

A implementação de um sistema para ler, modificar e monitorar toda uma estrutura de pastas composta por possivelmente milhares de notas fora dos locais suportados é um desafio. Esperamos resolver essa limitação no futuro.

Se você for um desenvolvedor, poderá criar um plug-in que use as APIs da Web para cada serviço de sincronização individual.

### Onde meus cofres são armazenados?

Se você optar por não usar o iCloud Drive ao criar seu cofre, o Obsidian o armazenará em um sistema de arquivos local para o aplicativo Obsidian. Outros aplicativos, como [[#Cópia de trabalho]], podem acessar seu cofre selecionando-o no sistema de arquivos.

**Cuidado:** todas as notas armazenadas no sistema de arquivos local são excluídas pelo iOS quando você desinstala o aplicativo. Certifique-se de fazer backup de suas anotações antes de desinstalar o aplicativo Obsidian.

## Sincronizar notas no Android

A maneira mais fácil de sincronizar suas notas em seu dispositivo Android é usando [[Introdução ao Obsidian Sync|Obsidian Sync]].

Como o Obsidian armazena anotações em uma pasta local no seu dispositivo Android, você também pode usar qualquer aplicativo que permita sincronizar uma pasta, como:

- [Dropsync](https://play.google.com/store/apps/details?id=com.ttxapps.dropsync)
- [FolderSync](https://play.google.com/store/apps/details?id=dk.tacit.android.foldersync.lite)

**Observação:** Obsidian cria uma pasta Obsidian na pasta Documentos compartilhada. Qualquer pasta em `Documents/Obsidian` é considerada um cofre Obsidian.

> [!important] Lidando com armazenamento em nuvem sob demanda
> Alguns serviços de armazenamento em nuvem, como o OneDrive, permitem que você baixe arquivos apenas quando os usar e depois os remova localmente para liberar espaço. Como os arquivos não estão mais disponíveis localmente, o Obsidian Sync acredita que eles foram excluídos e os remove do seu cofre remoto.
>
> Para usar o Obsidian Sync junto com arquivos sob demanda e recursos semelhantes, certifique-se de configurar o serviço para sempre manter os arquivos no dispositivo.