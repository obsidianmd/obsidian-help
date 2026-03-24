---
permalink: manage-vaults
---
Um **cofre** é uma pasta no seu sistema de arquivos que contém suas notas, [[Anexos|anexos]] e a [[Pasta de configuração|pasta de configuração]] com as configurações específicas do Obsidian. Para mais informações sobre cofres, consulte [[Como o Obsidian armazena dados]].

Você pode gerenciar seus cofres usando o **Alternador de cofres**. O *Perfil do cofre* abre na primeira vez que você abre o Obsidian.

Para abrir o alternador de cofres a partir de um cofre existente, selecione **Perfil do cofre** ![[lucide-chevrons-up-down.svg#icon]] na parte inferior da [[Barra lateral|barra lateral à esquerda]]. Ou selecione **Abrir outro cofre** na [[Paleta de comandos|paleta de comandos]].

## Criar novo cofre

1. No seu computador, abra o Obsidian.
2. No canto inferior esquerdo, selecione o **Perfil do cofre** ![[lucide-chevrons-up-down.svg#icon]].
3. Um menu de contexto aparecerá. Selecione **Gerenciar cofres...**.
3. À direita de **Criar novo cofre**, selecione **Criar**.
4. Em **Nome do cofre**, insira o nome do seu cofre.
5. Clique em **Selecionar** para escolher onde seu novo cofre será criado.
6. Clique em **Criar**.

## Criar cofre a partir de uma pasta existente

1. No seu computador, abra o Obsidian.
2. No canto inferior esquerdo, selecione o **Perfil do cofre** ![[lucide-chevrons-up-down.svg#icon]].
3. Um menu de contexto aparecerá. Selecione **Gerenciar cofres...**.
3. À direita de **Abrir pasta como um cofre**, clique em **Abrir**.
4. No explorador de arquivos, selecione a pasta que você deseja usar como seu cofre.
5. Clique em **Abrir**.

> [!tip] Conectar ao Obsidian Sync
> Se você deseja abrir um cofre remoto usando o Obsidian Sync, consulte [[Configurar o Obsidian Sync]].

## Renomear cofre

Como o nome de um cofre e da pasta subjacente são os mesmos, renomear um cofre também renomeia a pasta.

1. No seu computador, abra o Obsidian.
2. No canto inferior esquerdo, selecione o **Perfil do cofre** ![[lucide-chevrons-up-down.svg#icon]].
3. Um menu de contexto aparecerá. Selecione **Gerenciar cofres...**.
4. Na lista de cofres, selecione **Mais opções** ![[lucide-more-horizontal.svg#icon]] ao lado do cofre que você deseja renomear.
5. Selecione **Renomear cofre**.
6. Insira o novo nome para o cofre e pressione `Enter`.

## Mover cofre para uma pasta diferente

1. No seu computador, abra o Obsidian.
2. No canto inferior esquerdo, selecione o **Perfil do cofre** ![[lucide-chevrons-up-down.svg#icon]].
3. Um menu de contexto aparecerá. Selecione **Gerenciar cofres...**.
4. Feche a janela do cofre atual, mantendo a janela **Gerenciar cofres** aberta.
5. Na lista de cofres, selecione **Mais opções** ![[lucide-more-horizontal.svg#icon]] ao lado do cofre que você deseja mover.
6. Selecione **Mover cofre** e então selecione a nova localização.

Alguns sistemas operacionais não permitem que o cofre seja movido pelo Alternador de cofres. Nesses casos, você precisará mover seu cofre manualmente:

1. Feche o Obsidian.
2. Mova a pasta do seu cofre para uma nova localização, evitando pastas sincronizadas por outros serviços.
3. Reabra o Obsidian.
4. Clique no ícone **Perfil do cofre** no canto inferior esquerdo ![[lucide-chevrons-up-down.svg#icon]].
5. No menu pop-up, selecione **Gerenciar cofres...**.
6. Ao lado de **Abrir pasta como um cofre**, clique em **Abrir**.
7. Navegue até e selecione a nova pasta do seu cofre.
8. Clique em **Abrir**.
9. Verifique se o conteúdo do cofre não foi alterado. Se necessário, reative os plugins da comunidade navegando até **[[Configurações]] → Plugins da comunidade → Desativar modo restrito**.

## Remover cofre

Remover um cofre apenas o remove da lista de cofres.

1. No seu computador, abra o Obsidian.
2. No canto inferior esquerdo, selecione o **Perfil do cofre** ![[lucide-chevrons-up-down.svg#icon]].
3. Um menu de contexto aparecerá. Selecione **Gerenciar cofres...**.
4. Na lista de cofres, selecione **Mais opções** ![[lucide-more-horizontal.svg#icon]] ao lado do cofre que você deseja remover.
5. Selecione **Remover da lista**.

## Transferir configurações para outro cofre

Para usar as mesmas configurações em outro cofre, use seu gerenciador de arquivos preferido (ou terminal) para copiar a pasta `.obsidian` da raiz do cofre de origem para a raiz do cofre de destino.

Pode ser necessário reiniciar o Obsidian para aplicar as alterações.

> [!note] Onde encontro a pasta `.obsidian`?
> Por padrão, a maioria dos sistemas operacionais oculta pastas que começam com um ponto (`.`). Para mais informações sobre a pasta `.obsidian` e como acessá-la, consulte [[Como o Obsidian armazena dados#Configurações do cofre|configurações do cofre]] e [[Pasta de configuração|pastas de configuração]].
