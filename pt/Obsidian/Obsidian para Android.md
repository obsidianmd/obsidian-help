---
permalink: android
---
A aplicação móvel Obsidian para Android traz poderosas capacidades de tomada de notas para o seu dispositivo Android. Pode transferi-la a partir do [Google Play](https://play.google.com/store/apps/details?id=md.obsidian) ou como um [ficheiro APK](https://obsidian.md/download).
Suporta versões do Android 5.1 e superiores.

Esta página cobre funcionalidades específicas do Android, incluindo widgets, integração com Definições Rápidas e atalhos.

## Sincronizar

Para sincronizar as suas notas com o Obsidian no Android, consulte [[Sincronizar notas entre dispositivos]].

## Localização do cofre

Quando iniciar o Obsidian no Android, será solicitado que escolha onde os dados do seu cofre devem ser armazenados. Pode escolher **armazenamento do dispositivo** (recomendado) ou **armazenamento da aplicação**.

### Armazenamento do dispositivo

Com a opção **armazenamento do dispositivo**, os seus dados são armazenados num local partilhado no seu dispositivo. Isto permite que o seu cofre Obsidian seja acedido por outras aplicações e serviços, como ferramentas de [[Sincronizar notas entre dispositivos|sincronização]] de terceiros.

Esta é a opção recomendada porque oferece melhor compatibilidade com ferramentas de sincronização e garante que os seus dados persistem mesmo que desinstale a aplicação. No entanto, esta opção requer permissões adicionais para aceder aos ficheiros do seu dispositivo.

Devido a limitações do Android, o Obsidian irá solicitar acesso a "Todos os ficheiros" para funcionar de forma fiável. A Google recomenda isto para aplicações como o Obsidian que são consideradas "aplicações de gestão de documentos". [Saber mais](https://developer.android.com/training/data-storage/manage-all-files).

A aplicação apenas utiliza esta permissão para o ajudar a aceder aos seus dados no seu dispositivo. Os seus dados nunca são acessíveis para nós. Para saber mais sobre como protegemos os seus dados e garantimos a sua privacidade, visite a nossa [página de Segurança](https://obsidian.md/security).

### Armazenamento da aplicação

Com a opção **armazenamento da aplicação**, os seus dados são armazenados no armazenamento privado da aplicação Obsidian. Isto mantém os seus dados isolados de outras aplicações para maior privacidade.

Esta é uma boa opção se não estiver a utilizar ferramentas de sincronização externas e preferir um isolamento mais restrito ao nível da aplicação para as suas notas.

Com esta opção pode utilizar o [[Introdução ao Obsidian Sync|Obsidian Sync]] e plugins de sincronização de terceiros disponíveis através dos [[Plugins da comunidade]], mas não pode utilizar ferramentas como o Syncthing que dependem de armazenamento partilhado.

> [!warning] Desinstalar o Obsidian eliminará as suas notas locais se estiver a utilizar o armazenamento da aplicação
> Se utilizar a opção **Armazenamento da aplicação**, os dados do seu cofre local serão eliminados se desinstalar a aplicação. Os dados do seu cofre Obsidian noutros dispositivos não serão eliminados.

## Widgets

O Obsidian para Android oferece várias opções de widgets para aceder rapidamente aos seus cofres e notas a partir do ecrã inicial. Os widgets disponíveis incluem:

- **Abrir Nota** — Abrir uma nota específica
- **Nova Nota** — Criar uma nova nota
- **Pesquisar** — Iniciar uma pesquisa
- **Nota Diária** — Abrir a sua nota diária
- **Abrir Obsidian** — Iniciar a aplicação

> [!note] Nota
> Estes widgets são estáticos e não mostram quaisquer pré-visualizações da nota ou cofre selecionado.

Para adicionar widgets ao seu ecrã inicial:
1. Toque e mantenha premido em qualquer lugar do ecrã inicial
2. Selecione "Widgets"
3. Encontre o Obsidian e selecione o widget que pretende utilizar.

> [!note] Nota
> Os widgets do Obsidian podem ser redimensionados. Para redimensionar um widget, toque e mantenha premido, depois arraste as pegas de redimensionamento.

Pode adicionar múltiplos widgets do mesmo tipo para abrir diferentes ficheiros ou acionar diferentes pesquisas.

Para configurar um widget, mantenha premido no ecrã inicial e encontre a opção "Editar" ou "Configurar". Isto permitirá especificar os parâmetros necessários para a ação ao tocar do widget funcionar, como Ficheiro ou Caminho, Pesquisa e Nome do vault.

Consulte este [artigo de Suporte do Google](https://support.google.com/android/answer/9450271?hl=en) para mais informações sobre Widgets do Android.

## Mosaicos de Definições Rápidas

Requer Android 7.0 ou superior.

Adicione um mosaico de Definições Rápidas do Obsidian para acesso rápido à aplicação a partir da cortina de notificações. Funciona no Ecrã Inicial e no Ecrã de Bloqueio.

> [!note] Nota
> Ao contrário dos widgets da aplicação, só pode adicionar um mosaico de Definições Rápidas do mesmo tipo.

Para adicionar um mosaico de definições rápidas à cortina de notificações:

1. Aceda à cortina de notificações, normalmente deslizando para baixo a partir da barra de estado. Nota: poderá precisar de deslizar mais uma vez para ver mais opções.
2. Nos mosaicos de Definições Rápidas, selecione "Editar" — esta é geralmente a mesma secção onde se encontram os botões como Wi-Fi, Bluetooth e Bloqueio de Orientação.
3. Encontre e selecione um mosaico de Definições Rápidas do Obsidian, depois reorganize-o ao seu gosto.
4. Para configurar um mosaico de Definições Rápidas, toque e mantenha premido para abrir o ecrã de configuração.

Consulte este [artigo de Suporte do Google](https://support.google.com/android/answer/9083864?hl=en) para mais informações sobre Definições Rápidas do Android.

## Atalhos

Requer Android 7.1 ou superior.

O Obsidian fornece atalhos da aplicação que podem ser acedidos de várias formas:

- Manter premido o ícone da aplicação Obsidian
- Arrastar o ícone do atalho para o ecrã inicial
- Aceder através da barra de pesquisa do seu launcher (disponível na maioria dos fabricantes de dispositivos)

Atalhos disponíveis:

- **Abrir nota** — Abrir uma nota específica no seu cofre
- **Nota diária** — Ir diretamente para a nota diária de hoje

> [!note] Nota
> Os atalhos no Obsidian 1.11 não são configuráveis e serão reformulados em versões posteriores para oferecer opções mais dinâmicas adaptadas às suas notas específicas.
