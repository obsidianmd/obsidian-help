---
permalink: manage-vaults
---
Um **cofre** é uma pasta no seu sistema de ficheiros que contém as suas notas, [[Anexos|anexos]] e a [[Pasta de configuração|pasta de configuração]] com definições específicas do Obsidian. Para mais informações sobre cofres, consulte [[Como o Obsidian armazena dados]].

Pode gerir os seus cofres usando o **Alternador de cofres**. O *Perfil do cofre* abre na primeira vez que abre o Obsidian.

Para abrir o alternador de cofres a partir de um cofre existente, selecione **Perfil do cofre** ![[lucide-chevrons-up-down.svg#icon]] na parte inferior da [[Barra lateral|barra lateral esquerda]]. Ou selecione **Abrir outro cofre** na [[Paleta de comando|paleta de comandos]].

## Criar novo cofre

1. No seu computador, abra o Obsidian.
2. No canto inferior esquerdo, selecione o **Perfil do cofre** ![[lucide-chevrons-up-down.svg#icon]].
3. Um menu de contexto aparecerá. Selecione **Gerir cofres...**.
3. À direita de **Criar novo cofre**, selecione **Criar**.
4. Em **Nome do vault**, introduza o nome do seu cofre.
5. Clique em **Selecionar** para escolher onde o seu novo cofre será criado.
6. Clique em **Criar**.

## Criar cofre a partir de uma pasta existente

1. No seu computador, abra o Obsidian.
2. No canto inferior esquerdo, selecione o **Perfil do cofre** ![[lucide-chevrons-up-down.svg#icon]].
3. Um menu de contexto aparecerá. Selecione **Gerir cofres...**.
3. À direita de **Abrir pasta como vault**, clique em **Abrir**.
4. No explorador de ficheiros, selecione a pasta que pretende usar como cofre.
5. Clique em **Abrir**.

> [!tip] Abrir cofre a partir do Obsidian Sync
> Se pretende abrir um cofre remoto usando o Obsidian Sync, consulte [[Configurar o Obsidian Sync]].

## Renomear cofre

Uma vez que o nome de um cofre e da pasta subjacente são o mesmo, renomear um cofre também renomeia a pasta.

1. No seu computador, abra o Obsidian.
2. No canto inferior esquerdo, selecione o **Perfil do cofre** ![[lucide-chevrons-up-down.svg#icon]].
3. Um menu de contexto aparecerá. Selecione **Gerir cofres...**.
4. Na lista de cofres, selecione **Mais opções** ![[lucide-more-horizontal.svg#icon]] junto ao cofre que pretende renomear.
5. Selecione **Renomear cofre**.
6. Introduza o novo nome para o cofre e prima `Enter`.

## Mover cofre para uma pasta diferente

1. No seu computador, abra o Obsidian.
2. No canto inferior esquerdo, selecione o **Perfil do cofre** ![[lucide-chevrons-up-down.svg#icon]].
3. Um menu de contexto aparecerá. Selecione **Gerir cofres...**.
4. Feche a janela do cofre atual, mantendo a janela **Gerir cofres** aberta.
5. Na lista de cofres, selecione **Mais opções** ![[lucide-more-horizontal.svg#icon]] junto ao cofre que pretende mover.
6. Selecione **Mover cofre** e depois selecione a nova localização.

Alguns sistemas operativos não permitem que o cofre seja movido com o Alternador de cofres. Nestes casos, precisará de mover o seu cofre manualmente:

1. Feche o Obsidian.
2. Mova a pasta do cofre para uma nova localização, evitando pastas sincronizadas por outros serviços.
3. Reabra o Obsidian.
4. Clique no ícone **Perfil do cofre** no canto inferior esquerdo ![[lucide-chevrons-up-down.svg#icon]].
5. No menu pop-up, selecione **Gerir cofres...**.
6. Junto a **Abrir pasta como vault**, clique em **Abrir**.
7. Navegue até e selecione a nova pasta do cofre.
8. Clique em **Abrir**.
9. Verifique que o conteúdo do cofre não foi alterado. Se necessário, reative os plugins da comunidade navegando para **[[Definições]] → Plugins da comunidade → Desativar modo restrito**.

## Remover cofre

Remover um cofre apenas o remove da lista de cofres.

1. No seu computador, abra o Obsidian.
2. No canto inferior esquerdo, selecione o **Perfil do cofre** ![[lucide-chevrons-up-down.svg#icon]].
3. Um menu de contexto aparecerá. Selecione **Gerir cofres...**.
4. Na lista de cofres, selecione **Mais opções** ![[lucide-more-horizontal.svg#icon]] junto ao cofre que pretende remover.
5. Selecione **Remover da lista**.

## Transferir definições para outro cofre

Para usar as mesmas definições noutro cofre, utilize o seu gestor de ficheiros preferido (ou terminal) para copiar a pasta `.obsidian` da raiz do cofre de origem para a raiz do cofre de destino.

Poderá precisar de reiniciar o Obsidian para aplicar as alterações.

> [!note] Onde encontro a pasta `.obsidian`?
> Por predefinição, a maioria dos sistemas operativos oculta pastas que começam com um ponto (`.`). Para mais informações sobre a pasta `.obsidian` e como aceder a ela, consulte [[Como o Obsidian armazena dados#Definições do cofre|definições do cofre]] e [[Pasta de configuração|pastas de configuração]].
