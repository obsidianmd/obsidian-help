---
permalink: sync/switch
cssclasses:
  - soft-embed
publish: true
mobile: true
description: Aprenda como fazer a transição da sua solução de sincronização atual para o Obsidian Sync.
---
Aprenda como fazer a transição da sua solução de sincronização atual para o Obsidian Sync.

> [!warning] Evite usar múltiplas soluções para sincronizar os mesmos ficheiros
> Nós [[Perguntas frequentes#Posso usar uma sincronização de terceiros com o Obsidian Sync?|não recomendamos]] usar o Obsidian Sync juntamente com serviços de armazenamento na nuvem (por exemplo, iCloud, Dropbox, OneDrive, Google Drive), pois isso pode causar conflitos. No entanto, os serviços de armazenamento na nuvem podem ter um papel na sua estratégia de [[Fazer cópia de segurança dos ficheiros do Obsidian|cópia de segurança]].

## Mover o seu cofre para fora do serviço de sincronização de terceiros ou armazenamento na nuvem

Se o seu cofre está armazenado em qualquer uma das seguintes localizações, é provável que esteja a ser sincronizado por um serviço de terceiros:

- **Windows**: `C:\Users\Username\Desktop` ou `C:\Users\Username\Documents`
- **macOS**: `/users/username/Desktop` ou `/users/username/Documents`
- **iOS**: A pasta **iCloud** dentro da aplicação Ficheiros
- **Outro**: Qualquer pasta sob um serviço de sincronização, como `Drive/my-vault`, `Dropbox/my-vault`, `pSync/my-vault`, etc.

Embora o Android e o Linux tendam a ter menos problemas com isto, vale a pena verificar a localização do cofre nestes dispositivos.

> [!tip] Se o seu cofre local atual estiver conectado a um cofre remoto, o Obsidian tentará detetar se o cofre está num serviço de sincronização. Se estiver, verá uma mensagem no topo das definições do Obsidian Sync.

Para evitar conflitos com serviços de sincronização, recomendamos armazenar os seus cofres do Obsidian nas seguintes localizações:

- **Windows**: Localizações recomendadas por ordem:
    1. `D:\` ou qualquer outra unidade que não seja C: e não seja de rede no seu dispositivo
    2. `C:\Vaults` (se tiver permissões para usar a unidade C:\)
    3. `C:\Users\Username\Vaults` (se precisar de manter o cofre dentro de C:\Users\Username, certifique-se de que o OneDrive está configurado para não remover ficheiros. O OneDrive é geralmente menos agressivo fora das pastas `Desktop` e `Documents`.)
- **macOS**: `/users/username/vaults`
- **Linux**: Sem recomendação específica devido à variedade de sistemas de ficheiros. Apenas certifique-se de que o Obsidian tem acesso total de leitura/escrita e que nenhum serviço de sincronização gere a pasta.
- **iOS/iPadOS**: Armazene o cofre em **No Meu iPhone** ou **No Dispositivo**.
- **Android**: Use a pasta `Documents/` no seu dispositivo.

## Mover o seu cofre usando o Obsidian no computador

![[Gerir cofres#Mover cofre para uma pasta diferente]]

## Mover o seu cofre no móvel

Em dispositivos móveis, o Obsidian opera num ambiente isolado (sandbox), o que significa que não pode mover cofres dentro da aplicação como pode no computador.

### Android

Os sistemas de ficheiros Android variam bastante conforme o dispositivo, mas geralmente, siga os mesmos passos que seguiria para mover o cofre manualmente, garantindo que é removido de qualquer serviço de sincronização no seu dispositivo.

### iOS e iPadOS

Para mover um cofre existente no iCloud para o seu dispositivo, siga estes passos:

> [!note] Se já tem os dados noutro dispositivo e configurou o Obsidian Sync, é recomendado [[Configurar o Obsidian Sync#Sincronizar um cofre remoto noutro dispositivo|configurar um novo cofre local a partir do Sync]].

- Faça uma [[Fazer cópia de segurança dos ficheiros do Obsidian|cópia de segurança]] do seu cofre.
- Crie um novo cofre no seu dispositivo, garantindo que **Guardar no iCloud Drive** está desativado.
- Force o encerramento da aplicação Obsidian em todos os dispositivos para pausar o Sync.
- Abra a aplicação **Ficheiros** no seu dispositivo iOS/iPadOS.
- Mantenha pressionada a pasta do cofre em **iCloud Drive → Obsidian** e selecione **Mover**.
- Mova o cofre para **No Meu iPhone/Dispositivo → Obsidian** e confirme que está agora visível.
- Toque em **Copiar**.
- Regresse a **iCloud Drive → Obsidian** e elimine a pasta do cofre antigo.

Quando reabrir o Obsidian, o cofre deverá mostrar um ícone de cofre em vez de um ícone de nuvem, confirmando que já não está no iCloud Drive. O Obsidian Sync também deixará de apresentar a mensagem de aviso nas suas definições.

## Próximos passos

- Quer começar com o Obsidian Sync? [[Configurar o Obsidian Sync]]
- Ainda precisa de ajuda? Consulte [[Resolver problemas do Obsidian Sync]]
