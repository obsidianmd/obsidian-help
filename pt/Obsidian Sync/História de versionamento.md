---
permalink: sync/version-history
cssclasses:
  - soft-embed
publish: true
mobile: true
description: 'O Obsidian Sync mantém um registro de todas as alterações feitas em suas notas e verifica regularmente por atualizações, criando novas versões de suas notas.'
---
O [[Introdução ao Obsidian Sync|Obsidian Sync]] verifica regularmente se existem atualizações nos seus [[Definições do Sync e sincronização seletiva|ficheiros sincronizados]], mantendo um registo de quaisquer alterações. Estas são armazenadas como novas entradas no [[#História de versionamento]]. Esta informação pode ser acedida de algumas formas:

- [[#Histórico do Sync]]
- [[#História de versionamento]]

Embora não faça parte do Obsidian Sync, um histórico de versões local também está disponível em cada dispositivo se o plugin [[Recuperação de ficheiros]] estiver ativado.

## Histórico do Sync

A funcionalidade de histórico do Sync (ou barra lateral do Sync), introduzida na versão 1.7 do Obsidian, permite-lhe ver rapidamente notas e anexos criados ou modificados recentemente que foram sincronizados. Pode também pensar nisto como um histórico de _edição_.

Na barra lateral, pode selecionar um item para abrir o seu ficheiro na janela ativa. Os itens também têm menus de contexto, permitindo-lhe realizar ações como mover o ficheiro ou ver a sua [[#Notas e anexos|História de versionamento]].

> [!compatibility] Funcionalidade apenas para computador
> Quando passa o cursor sobre um ficheiro sincronizado na barra lateral, pode ver quem editou o ficheiro por último. Isto é especialmente útil se estiver a [[Colaborar num cofre partilhado|colaborar]] num cofre partilhado.

> [!tip] 
> Definições e itens eliminados não aparecerão na barra lateral do histórico do Sync. Estes podem ser encontrados na [[#Notas e anexos|História de versionamento]].

### Mostrar histórico do Sync

Quando ativa o plugin principal [[Introdução ao Obsidian Sync|Sync]], o histórico do Sync é automaticamente ativado mas não aparece na barra lateral por predefinição. Terá de o adicionar manualmente usando um comando ou um atalho de teclado.

#### Ativar via Paleta de comandos

> [!info] Esta opção requer que o plugin principal [[Paleta de comando]] esteja ativado.

**Computador/Tablet** ![[lucide-monitor-check.svg#icon]]

1. Abra a **Paleta de comandos**. ![[lucide-terminal.svg#icon]]
2. Escreva "Sync".
3. Selecione a opção "Sync: Mostrar histórico do Sync".

O histórico do Sync aparecerá então na [[Barra lateral|barra lateral direita]].

**Móvel** ![[obsidian-icon-smartphone.svg#icon]]

1. Abra a [[Barra de ferramentas]] ![[lucide-menu.svg#icon]].
2. Abra a **Paleta de comandos**. ![[lucide-terminal.svg#icon]]
3. Escreva "Sync".
4. Selecione a opção "Sync: Mostrar histórico do Sync".

O histórico do Sync aparecerá então como uma opção suspensa na [[Barra lateral|barra lateral direita]].

#### Ativar via Atalho de teclado

1. Abra as **[[Definições]]**.
2. Na categoria **Opções**, selecione **Atalhos de teclado**.
3. Na barra de pesquisa de atalhos de teclado, escreva "Sync".
4. Junto a "Sync: Mostrar histórico do Sync", atribua o seu atalho de teclado preferido.

## História de versionamento

Além do [[#Histórico do Sync]], o Obsidian também mantém uma história de versionamento para restaurar notas e anexos. Se eliminar acidentalmente uma nota ou quiser reverter para uma versão anterior, pode restaurá-la a partir da história de versionamento.

O período de retenção da sua história de versionamento depende do seu [[Planos e limites de armazenamento|plano Obsidian Sync]]. No plano Standard, as notas são retidas durante 1 mês, enquanto no plano Plus, são mantidas durante 12 meses. Após este período, as versões mais antigas das suas notas são eliminadas.

Para [[Anexos|anexos]], as versões mais antigas são armazenadas durante <u>duas semanas</u>.

![[Colaborar num cofre partilhado#^version-history-image]]

### Notas e anexos

O processo para restaurar tanto notas como anexos é o mesmo.

#### Ver história de versionamento de um ficheiro

**Computador/Tablet** ![[lucide-monitor-check.svg#icon]]
1. No **Explorador de ficheiros**, selecione a nota que pretende restaurar.
2. Selecione **Abrir histórico de versões**.
3. Selecione a versão da nota que pretende ver à esquerda. O conteúdo será apresentado à direita.

**Móvel** ![[obsidian-icon-smartphone.svg#icon]]
1. No **Explorador de ficheiros**, selecione a nota que pretende restaurar.
2. Pressione longamente para abrir o menu de contexto.
3. Selecione **Abrir histórico de versões**.
4. No menu pop-up, selecione a versão da nota que pretende ver.
5. Uma vez selecionada, o conteúdo da nota estará disponível para revisão.

#### Ver história de versionamento de um ficheiro eliminado ou renomeado

1. Abra as **[[Definições]]**.
2. Na barra lateral, em **Plugins Base***, selecione **Sync**.
3. Junto a **Ficheiros eliminados**, selecione **Ver**.
4. Selecione a nota para a qual pretende ver a história de versionamento.
5. No pop-up da história de versionamento, selecione a versão da nota que pretende ver à esquerda.

#### Restaurar uma versão anterior de um ficheiro

**Computador/Tablet** ![[lucide-monitor-check.svg#icon]]
1. No **Explorador de ficheiros**, selecione a nota que pretende restaurar.
2. Selecione **Abrir histórico de versões**.
3. Selecione a versão da nota que pretende restaurar à esquerda. O conteúdo será apresentado à direita.
4. Selecione o botão **Restaurar**.
5. O conteúdo da nota será substituído pela versão restaurada.

**Móvel** ![[obsidian-icon-smartphone.svg#icon]]
1. No **Explorador de ficheiros**, selecione a nota que pretende restaurar.
2. Pressione longamente para abrir o menu de contexto.
3. Selecione **Abrir histórico de versões**.
4. No menu pop-up, selecione a versão da nota que pretende restaurar.
5. Uma vez selecionada, o conteúdo da nota estará disponível para revisão.
6. Selecione o botão **Restaurar**.
7. O conteúdo da nota será substituído pela versão restaurada.

#### Restaurar um ficheiro eliminado

1. Abra as **[[Definições]]**.
2. Na barra lateral, em **Plugins Base***, selecione **Sync**.
3. Junto a **Ficheiros eliminados**, selecione **Ver**.
4. Escolha a nota que pretende restaurar.
5. Na lista de versões à esquerda, selecione a versão que pretende restaurar.
6. Selecione o botão **Restaurar** à direita.
7. A nota será restaurada para a sua localização original no sistema de ficheiros.

> [!tip] Pode selecionar múltiplas notas com **restauração em massa** selecionando as caixas de seleção, ou usando `shift+click`. Estes ficheiros não poderão ser revistos neste menu.

### Histórico de definições

O Obsidian Sync também mantém um registo das alterações feitas às definições de configuração do seu cofre.

#### Ver história de versionamento de uma definição

1. Abra as **[[Definições]]**.
2. Na barra lateral, em **Plugins Base***, selecione **Sync**.
3. Navegue até **Sincronizar configurações do vault**.
4. Selecione o botão **Ver** junto a **História de versionamento das [[Definições]]**.
5. No pop-up **Ficheiro de [[Definições]]**, escolha um ficheiro de definições que pretende ver.

#### Restaurar uma versão anterior de uma definição

1. Abra as **[[Definições]]**.
2. Na barra lateral, em **Plugins Base**, selecione **Sync**.
3. Navegue até **Sincronizar configurações do vault**.
4. Selecione o botão **Ver** junto a **História de versionamento das [[Definições]]**.
5. No pop-up **Ficheiro de [[Definições]]**, escolha um ficheiro de definições que pretende ver.
6. Na janela de alterações, selecione o botão **Restaurar**.
7. Recarregue ou reinicie o Obsidian para que a definição tenha efeito. Para mais detalhes, consulte as instruções em [[Configurar o Obsidian Sync#Ajustar as definições do Obsidian Sync|Ajustar definições do Obsidian Sync]].
