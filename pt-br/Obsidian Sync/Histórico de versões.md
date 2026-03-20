---
permalink: sync/version-history
cssclasses:
  - soft-embed
publish: true
mobile: true
description: O Obsidian Sync mantém um registro de todas as alterações feitas em suas notas e verifica regularmente se há atualizações, criando novas versões de suas notas.
---
O [[Introdução ao Obsidian Sync|Obsidian Sync]] verifica regularmente se há atualizações em seus [[Configurações do Sync e sincronização seletiva|arquivos sincronizados]], mantendo um registro de quaisquer alterações. Estas são armazenadas como novas entradas no [[#Histórico de versões]]. Essas informações podem ser acessadas de algumas formas:

- [[#Histórico do Sync]]
- [[#Histórico de versões]]

Embora não faça parte do Obsidian Sync, um histórico de versões local também está disponível em cada dispositivo se o plugin [[Recuperação de arquivos]] estiver ativado.

## Histórico do Sync

O recurso Histórico do Sync (ou barra lateral do Sync), introduzido na versão 1.7 do Obsidian, permite que você visualize rapidamente notas e anexos recentemente criados ou modificados que foram sincronizados. Você também pode pensar nele como um histórico de _edição_.

Na barra lateral, você pode selecionar um item para abrir seu arquivo na janela ativa. Os itens também possuem menus de contexto, permitindo que você execute ações como mover o arquivo ou visualizar seu [[#Notas e anexos|Histórico de versões]].

> [!compatibility] Recurso exclusivo para desktop
> Quando você passa o cursor sobre um arquivo sincronizado na barra lateral, é possível ver quem editou o arquivo por último. Isso é especialmente útil se você está [[Colaborar em um cofre compartilhado|colaborando]] em um cofre compartilhado.

> [!tip] 
> Configurações e itens excluídos não aparecerão na barra lateral do Histórico do Sync. Eles podem ser encontrados no [[#Notas e anexos|Histórico de versões]].

### Mostrar o histórico do Sync

Quando você ativa o plugin nativo [[Introdução ao Obsidian Sync|Sync]], o Histórico do Sync é automaticamente ativado, mas não aparece na barra lateral por padrão. Você precisará adicioná-lo manualmente usando um comando ou uma tecla de atalho.

#### Ativar via Paleta de comandos

> [!info] Esta opção requer que o plugin nativo [[Paleta de comandos]] esteja ativado.

**Desktop/Tablet** ![[lucide-monitor-check.svg#icon]]

1. Abra a **Paleta de comandos**. ( ![[lucide-terminal.svg#icon]] )
2. Digite "Sync".
3. Selecione a opção "Sync: Mostrar o histórico do Sync".

O Histórico do Sync aparecerá na [[Barra lateral|barra lateral direita]].

**Celular** ![[obsidian-icon-smartphone.svg#icon]]

1. Abra o [[Faixa de opções|Menu lateral]] ( ![[lucide-menu.svg#icon]] ).
2. Abra a **Paleta de comandos**. ( ![[lucide-terminal.svg#icon]] )
3. Digite "Sync".
4. Selecione a opção "Sync: Mostrar o histórico do Sync".

O Histórico do Sync aparecerá como uma opção suspensa na [[Barra lateral|barra lateral direita]].

#### Ativar via Tecla de atalho

1. Abra as **[[Configurações]]**.
2. Na categoria **Configurações**, selecione **Teclas de atalho**.
3. Na barra de pesquisa de teclas de atalho, digite "Sync".
4. Ao lado de "Sync: Mostrar o histórico do Sync," atribua sua tecla de atalho preferida.

## Histórico de versões

Além do [[#Histórico do Sync]], o Obsidian também mantém um histórico de versões para restaurar notas e anexos. Se você excluir acidentalmente uma nota ou quiser reverter para uma versão anterior, é possível restaurá-la a partir do histórico de versões.

O período de retenção do seu histórico de versões depende do seu [[Planos e limites de armazenamento|plano do Obsidian Sync]]. No plano Standard, as notas são retidas por 1 mês, enquanto no plano Plus, são mantidas por 12 meses. Após esse período, versões mais antigas de suas notas são excluídas.

Para [[Anexos|anexos]], versões mais antigas são armazenadas por <u>duas semanas</u>.

![[Colaborar em um cofre compartilhado#^version-history-image]]

### Notas e anexos

O processo para restaurar tanto notas quanto anexos é o mesmo.

#### Visualizar o histórico de versões de um arquivo

**Desktop/Tablet** ![[lucide-monitor-check.svg#icon]]
1. No **Explorador de arquivos**, selecione a nota que deseja restaurar.
2. Selecione **Abrir o histórico de versão**.
3. Selecione a versão da nota que deseja visualizar à esquerda. O conteúdo será exibido à direita.

**Celular** ![[obsidian-icon-smartphone.svg#icon]]
1. No **Explorador de arquivos**, selecione a nota que deseja restaurar.
2. Pressione e segure para abrir o menu de contexto.
3. Selecione **Abrir o histórico de versão**.
4. No menu pop-up, selecione a versão da nota que deseja visualizar.
5. Uma vez selecionada, o conteúdo da nota estará disponível para revisão.

#### Visualizar o histórico de versões de um arquivo excluído ou renomeado

1. Abra as **[[Configurações]]**.
2. Na barra lateral, em **Plugins nativos***, selecione **Sync**.
3. Ao lado de **Arquivos deletados**, selecione **Visualizar**.
4. Selecione a nota para a qual deseja visualizar o histórico de versões.
5. No pop-up do histórico de versões, selecione a versão da nota que deseja visualizar à esquerda.

#### Restaurar uma versão anterior de um arquivo

**Desktop/Tablet** ![[lucide-monitor-check.svg#icon]]
1. No **Explorador de arquivos**, selecione a nota que deseja restaurar.
2. Selecione **Abrir o histórico de versão**.
3. Selecione a versão da nota que deseja restaurar à esquerda. O conteúdo será exibido à direita.
4. Selecione o botão **Restaurar essa versão**.
5. O conteúdo da nota será substituído pela versão restaurada.

**Celular** ![[obsidian-icon-smartphone.svg#icon]]
1. No **Explorador de arquivos**, selecione a nota que deseja restaurar.
2. Pressione e segure para abrir o menu de contexto.
3. Selecione **Abrir o histórico de versão**.
4. No menu pop-up, selecione a versão da nota que deseja restaurar.
5. Uma vez selecionada, o conteúdo da nota estará disponível para revisão.
6. Selecione o botão **Restaurar essa versão**.
7. O conteúdo da nota será substituído pela versão restaurada.

#### Restaurar um arquivo excluído

1. Abra as **[[Configurações]]**.
2. Na barra lateral, em **Plugins nativos***, selecione **Sync**.
3. Ao lado de **Arquivos deletados**, selecione **Visualizar**.
4. Escolha a nota que deseja restaurar.
5. Na lista de versões à esquerda, selecione a versão que deseja restaurar.
6. Selecione o botão **Restaurar essa versão** à direita.
7. A nota será restaurada ao seu local original no sistema de arquivos.

> [!tip] Você pode selecionar múltiplas notas com **restauração em massa** marcando as caixas de seleção ou usando `shift+click`. Esses arquivos não poderão ser revisados neste menu.

### Histórico de configurações

O Obsidian Sync também acompanha as alterações feitas nas configurações do seu cofre.

#### Visualizar o histórico de versões de uma configuração

1. Abra as **[[Configurações]]**.
2. Na barra lateral, em **Plugins nativos***, selecione **Sync**.
3. Navegue até **Sincronização de configuração do cofre**.
4. Selecione o botão **Visualizar** ao lado de **Histórico de versões das [[Configurações]]**.
5. No pop-up de **Arquivo de [[Configurações]]**, escolha o arquivo de configurações que deseja visualizar.

#### Restaurar uma versão anterior de uma configuração

1. Abra as **[[Configurações]]**.
2. Na barra lateral, em **Plugins nativos**, selecione **Sync**.
3. Navegue até **Sincronização de configuração do cofre**.
4. Selecione o botão **Visualizar** ao lado de **Histórico de versões das [[Configurações]]**.
5. No pop-up de **Arquivo de [[Configurações]]**, escolha o arquivo de configurações que deseja visualizar.
6. Na janela de alterações, selecione o botão **Restaurar essa versão**.
7. Recarregue ou reinicie o Obsidian para que a configuração entre em vigor. Para mais detalhes, consulte as instruções em [[Configurar o Obsidian Sync#Ajustar as configurações do Obsidian Sync|Ajustar as configurações do Obsidian Sync]].
