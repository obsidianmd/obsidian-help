---
permalink: plugins/file-recovery
publish: true
mobile: true
description: Recuperação de arquivos ajuda a proteger seu trabalho contra perda de dados não intencional, salvando automaticamente versões de suas notas em intervalos regulares.
---
Recuperação de arquivos é um [[Plugins nativos|plugin nativo]] que protege seu trabalho contra exclusões acidentais, corrupção de arquivos ou alterações indesejadas, salvando automaticamente versões completas de suas notas em intervalos regulares. Recuperação de arquivos não é uma solução completa de backup, e recomendamos também [[Fazer backup dos seus arquivos do Obsidian|fazer backup]] dos seus arquivos do Obsidian separadamente.

Para evitar ocupar [[#Armazenamento e desempenho|espaço demais]], o Obsidian mantém as versões por um certo número de dias antes de excluí-las. As versões capturam o conteúdo completo dos seus arquivos, não apenas as alterações, permitindo que você restaure qualquer versão anterior.

> [!info]+ Informações
> Por padrão, as versões são salvas com um intervalo mínimo de 5 minutos entre cada uma e mantidas por 7 dias. Você pode configurar ambos os intervalos em **[[Configurações]] → Plugins nativos → Recuperação de arquivos**.

As versões são mantidas nas [[Como o Obsidian armazena dados#Configurações globais|Configurações globais]], fora do cofre, para proteger contra perda de dados relacionada ao cofre. Isso significa que as versões são armazenadas com o caminho absoluto da nota. Se você moveu seu cofre recentemente, pode ser necessário movê-lo de volta para o local onde estava quando a versão foi salva.

> [!tip] Se você está usando [[Introdução ao Obsidian Sync|Obsidian Sync]] ou [[Sincronizar suas notas entre dispositivos|outros serviços de sincronização]], as versões da Recuperação de arquivos não serão sincronizadas entre dispositivos. As versões são específicas de cada dispositivo e permanecem locais em cada um.

## Recuperar uma versão

1. Abra **[[Configurações]]**.
2. Na barra lateral, selecione **Recuperação de arquivos** em **Plugins nativos**.
3. Em **Versões**, selecione **Visualizar**.
4. No campo de nome do arquivo, comece a digitar o nome do arquivo que deseja recuperar, e você verá uma lista de sugestões.
5. Selecione o arquivo, pressione Enter, e você verá uma lista de versões disponíveis.
6. Selecione a versão que deseja recuperar.
    1. Se deseja copiar e colar em uma nova nota, selecione o botão **Copiar**.
    2. Se deseja restaurar o arquivo completamente, selecione o botão **Restaurar essa versão**.
7. Opcionalmente, você pode mostrar as diferenças entre versões alternando **Mostrar diferenças**. Isso exibe qual conteúdo foi adicionado, removido ou modificado entre as versões.

## Limpar histórico de versões

> [!danger] Limpar o histórico de versões exclui irreversivelmente todas as versões do seu cofre.

1. Abra **[[Configurações]]**.
2. Na barra lateral, selecione **Recuperação de arquivos** em **Plugins nativos**.
3. Em **Limpar histórico**, selecione **Deletar**.
4. Confirme que deseja excluir todas as versões, clicando em **Deletar**.

## Armazenamento e desempenho

As versões da Recuperação de arquivos normalmente utilizam espaço mínimo em disco, pois armazenam apenas arquivos alterados. No entanto, em cofres com muitos arquivos grandes ou edições frequentes, as versões podem se acumular ao longo do tempo. Monitore o uso de armazenamento e ajuste o período de retenção se necessário.

## Limitações

- **Modo de bloqueio da Apple**: Este recurso não está disponível em dispositivos Apple com o [Modo de bloqueio](https://support.apple.com/en-us/105120) ativado, a menos que o Obsidian seja isento.
- **Tipos de arquivo**: Apenas arquivos `.md` e `.canvas` podem ser restaurados usando a Recuperação de arquivos.
- **Localização do cofre**: Se você mover seu cofre para um local diferente sem usar o [[Gerenciar cofres#Mover cofre para uma pasta diferente|alternador de cofres]], as versões existentes podem não estar acessíveis.
