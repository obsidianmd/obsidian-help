---
permalink: android
aliases:
  - Obsidian/Aplicativo Android
---
O aplicativo móvel Obsidian para Android traz poderosas capacidades de anotações para o seu dispositivo Android. Você pode baixá-lo no [Google Play](https://play.google.com/store/apps/details?id=md.obsidian) ou como um [arquivo APK](https://obsidian.md/download).
Ele suporta versões do Android 5.1 e superiores.

Esta página cobre recursos específicos do Android, incluindo widgets, integração com Configurações Rápidas e atalhos.

## Sincronização

Para sincronizar suas notas com o Obsidian no Android, veja [[Sincronizar suas notas entre dispositivos]].

## Localização do cofre

Ao iniciar o Obsidian no Android, será solicitado que você escolha onde os dados do seu cofre devem ser armazenados. Você pode escolher **armazenamento do dispositivo** (recomendado) ou **armazenamento do aplicativo**.

### Armazenamento do dispositivo

Com a opção **armazenamento do dispositivo**, seus dados são armazenados em um local compartilhado no seu dispositivo. Isso permite que seu cofre do Obsidian seja acessado por outros aplicativos e serviços, como ferramentas de [[Sincronizar suas notas entre dispositivos|sincronização]] de terceiros.

Esta é a opção recomendada porque oferece melhor compatibilidade com ferramentas de sincronização e garante que seus dados persistam mesmo se você desinstalar o aplicativo. No entanto, esta opção requer permissões adicionais para acessar os arquivos do seu dispositivo.

Devido a limitações do Android, o Obsidian solicitará acesso a "Todos os arquivos" para funcionar de forma confiável. O Google recomenda isso para aplicativos como o Obsidian, que são considerados "aplicativos de gerenciamento de documentos". [Saiba mais](https://developer.android.com/training/data-storage/manage-all-files).

O aplicativo usa essa permissão apenas para ajudá-lo a acessar seus dados no seu dispositivo. Seus dados nunca são acessíveis para nós. Para saber mais sobre como protegemos seus dados e garantimos sua privacidade, visite nossa [página de Segurança](https://obsidian.md/security).

### Armazenamento do aplicativo

Com a opção **armazenamento do aplicativo**, seus dados são armazenados no armazenamento privado do aplicativo Obsidian. Isso mantém seus dados isolados de outros aplicativos para maior privacidade.

Esta é uma boa opção se você não está usando nenhuma ferramenta de sincronização externa e prefere um isolamento mais rígido no nível do aplicativo para suas notas.

Com esta opção, você pode usar o [[Introdução ao Obsidian Sync|Obsidian Sync]] e plugins de sincronização de terceiros disponíveis através dos [[Plugins da comunidade]], mas não pode usar ferramentas como o Syncthing que dependem de armazenamento compartilhado.

> [!warning] Desinstalar o Obsidian excluirá suas notas locais se você estiver usando o armazenamento do aplicativo
> Se você usar a opção **Armazenamento do aplicativo**, os dados do seu cofre local serão excluídos se você desinstalar o aplicativo. Os dados do seu cofre do Obsidian em outros dispositivos não serão excluídos.

## Widgets

O Obsidian para Android oferece várias opções de widgets para acessar rapidamente seus cofres e notas a partir da tela inicial. Os widgets disponíveis incluem:

- **Abrir Nota** — Abrir uma nota específica
- **Nova Nota** — Criar uma nova nota
- **Pesquisa** — Iniciar uma consulta de pesquisa
- **Nota Diária** — Abrir sua nota diária
- **Abrir Obsidian** — Iniciar o aplicativo

> [!note] Nota
> Esses widgets são estáticos e não mostram nenhuma visualização da nota ou cofre selecionado.

Para adicionar widgets à sua tela inicial:
1. Toque e segure em qualquer lugar da sua tela inicial
2. Selecione "Widgets"
3. Encontre o Obsidian e selecione o widget que deseja usar.

> [!note] Nota
> Os widgets do Obsidian podem ser redimensionados. Para redimensionar um widget, toque e segure-o, depois arraste as alças de redimensionamento.

Você pode adicionar múltiplos widgets do mesmo tipo para abrir diferentes arquivos ou acionar diferentes consultas de pesquisa.

Para configurar um widget, pressione e segure-o na sua tela inicial, depois encontre a opção "Editar" ou "Configurar". Isso permitirá que você especifique os parâmetros específicos necessários para a ação de toque desse widget funcionar, como Arquivo ou Caminho, Consulta de Pesquisa e Nome do cofre.

Veja este [artigo de suporte do Google](https://support.google.com/android/answer/9450271?hl=en) para mais informações sobre Widgets do Android.

## Blocos de Configurações Rápidas

Requer Android 7.0 ou superior.

Adicione um bloco de Configurações Rápidas do Obsidian para acesso rápido ao aplicativo a partir da cortina de notificações. Funciona na sua Tela Inicial e na Tela de Bloqueio.

> [!note] Nota
> Diferentemente dos widgets de aplicativos, você só pode adicionar um bloco de Configurações Rápidas do mesmo tipo.

Para adicionar um bloco de configurações rápidas à sua cortina de notificações:

1. Acesse sua cortina de notificações, normalmente deslizando para baixo a partir da barra de status. Nota: pode ser necessário deslizar mais uma vez para ver mais opções.
2. Nos blocos de Configurações Rápidas, selecione "Editar" — geralmente é a mesma seção onde ficam os botões como Wi-Fi, Bluetooth e Bloqueio de Orientação.
3. Encontre e selecione um bloco de Configurações Rápidas do Obsidian, depois reorganize-o como preferir.
4. Para configurar um bloco de Configurações Rápidas, toque e segure-o para abrir a tela de configuração.

Veja este [artigo de suporte do Google](https://support.google.com/android/answer/9083864?hl=en) para mais informações sobre Configurações Rápidas do Android.

## Atalhos

Requer Android 7.1 ou superior.

O Obsidian fornece atalhos de aplicativo que podem ser acessados de várias maneiras:

- Pressionar e segurar o ícone do aplicativo Obsidian
- Arrastar o ícone do atalho para sua tela inicial
- Acessar pela barra de pesquisa do seu launcher (disponível na maioria dos fabricantes de dispositivos)

Atalhos disponíveis:

- **Abrir nota** — Abrir uma nota específica no seu cofre
- **Nota diária** — Ir diretamente para a nota diária de hoje

> [!note] Nota
> Os atalhos no Obsidian 1.11 não são configuráveis e serão reformulados em versões posteriores para oferecer opções mais dinâmicas adaptadas às suas notas específicas.
