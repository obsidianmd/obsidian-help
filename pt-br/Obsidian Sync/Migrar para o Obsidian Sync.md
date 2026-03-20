---
permalink: sync/switch
cssclasses:
  - soft-embed
publish: true
mobile: true
description: >-
  Aprenda como fazer a transição da sua solução de sincronização atual para o
  Obsidian Sync.
---
Aprenda como fazer a transição da sua solução de sincronização atual para o Obsidian Sync.

> [!warning] Evite usar múltiplas soluções para sincronizar os mesmos arquivos
> [[Perguntas frequentes#Posso usar uma sincronização de terceiros com o Obsidian Sync?|Não recomendamos]] usar o Obsidian Sync junto com serviços de armazenamento em nuvem (ex.: iCloud, Dropbox, OneDrive, Google Drive), pois isso pode causar conflitos. No entanto, serviços de armazenamento em nuvem podem ter um papel na sua estratégia de [[Fazer backup dos seus arquivos do Obsidian|backup]].

## Mova seu cofre para fora do seu serviço de sincronização de terceiros ou armazenamento em nuvem

Se seu cofre está armazenado em qualquer uma das seguintes localizações, provavelmente está sendo sincronizado por um serviço de terceiros:

- **Windows**: `C:\Users\Username\Desktop` ou `C:\Users\Username\Documents`
- **macOS**: `/users/username/Desktop` ou `/users/username/Documents`
- **iOS**: A pasta **iCloud** dentro do aplicativo Arquivos
- **Outros**: Qualquer pasta dentro de um serviço de sincronização, como `Drive/my-vault`, `Dropbox/my-vault`, `pSync/my-vault`, etc.

Embora Android e Linux tendam a ter menos problemas com isso, ainda vale a pena verificar a localização do seu cofre nesses dispositivos.

> [!tip] Se seu cofre local atual está conectado a um cofre remoto, o Obsidian tentará detectar se o cofre está em um serviço de sincronização. Se estiver, você verá uma mensagem no topo das configurações do Obsidian Sync.

Para evitar conflitos com serviços de sincronização, recomendamos armazenar seus cofres do Obsidian nas seguintes localizações:

- **Windows**: Localizações recomendadas em ordem:
    1. `D:\` ou qualquer outro drive que não seja C: e não seja de rede no seu dispositivo
    2. `C:\Vaults` (se você tiver permissões para usar o drive C:\)
    3. `C:\Users\Username\Vaults` (se você precisar manter seu cofre dentro de C:\Users\Username, certifique-se de que o OneDrive está configurado para não remover arquivos. O OneDrive geralmente é menos agressivo fora das pastas `Desktop` e `Documents`.)
- **macOS**: `/users/username/vaults`
- **Linux**: Sem recomendação específica devido à variedade de sistemas de arquivos. Apenas certifique-se de que o Obsidian tem acesso completo de leitura/escrita e que nenhum serviço de sincronização gerencia a pasta.
- **iOS/iPadOS**: Armazene o cofre em **No Meu iPhone** ou **No Dispositivo**.
- **Android**: Use a pasta `Documents/` no seu dispositivo.

## Mova seu cofre usando o Obsidian no desktop

![[Gerenciar cofres#Mover cofre para uma pasta diferente]]

## Mova seu cofre no celular

Em dispositivos móveis, o Obsidian opera em um ambiente isolado (sandbox), o que significa que você não pode mover cofres dentro do aplicativo como pode no desktop.

### Android

Os sistemas de arquivos Android variam muito por dispositivo, mas geralmente, siga os mesmos passos que você seguiria para mover seu cofre manualmente, garantindo que ele seja removido de qualquer serviço de sincronização no seu dispositivo.

### iOS e iPadOS

Para mover um cofre existente do iCloud para o seu dispositivo, siga estes passos:

> [!note] Se você já tem os dados em outro dispositivo e configurou o Obsidian Sync, é recomendado [[Configurar o Obsidian Sync#Sincronizar um cofre remoto em outro dispositivo|configurar um novo cofre local a partir do Sync]].

- Faça [[Fazer backup dos seus arquivos do Obsidian|backup]] do seu cofre.
- Crie um novo cofre no seu dispositivo, garantindo que **Salvar no iCloud Drive** esteja desativado.
- Force o encerramento do aplicativo Obsidian em todos os dispositivos para pausar o Sync.
- Abra o aplicativo **Arquivos** no seu dispositivo iOS/iPadOS.
- Pressione e segure a pasta do cofre em **iCloud Drive → Obsidian**, então selecione **Mover**.
- Mova o cofre para **No Meu iPhone/Dispositivo → Obsidian** e confirme que ele está visível.
- Toque em **Copiar**.
- Retorne a **iCloud Drive → Obsidian** e exclua a pasta antiga do cofre.

Ao reabrir o Obsidian, o cofre deve mostrar um ícone de cofre em vez de um ícone de nuvem, confirmando que ele não está mais no iCloud Drive. O Obsidian Sync também não exibirá mais a mensagem de aviso nas suas configurações.

## Próximos passos

- Quer começar com o Obsidian Sync? [[Configurar o Obsidian Sync]]
- Ainda precisa de ajuda? Confira [[Solução de problemas do Obsidian Sync]]
