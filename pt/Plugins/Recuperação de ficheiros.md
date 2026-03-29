---
permalink: plugins/file-recovery
publish: true
mobile: true
description: 'Recuperação de Arquivos ajuda a proteger seu trabalho contra perda acidental de dados, salvando automaticamente instantâneos das suas notas em intervalos regulares.'
---
A Recuperação de ficheiros é um [[Plugins Base|plugin principal]] que protege o seu trabalho de eliminações acidentais, corrupção de ficheiros ou alterações indesejadas ao guardar automaticamente cópias instantâneas completas das suas notas em intervalos regulares. A Recuperação de ficheiros não é uma solução completa de cópia de segurança, e recomendamos que também faça [[Fazer cópia de segurança dos ficheiros do Obsidian|cópia de segurança]] dos seus ficheiros do Obsidian separadamente.

Para evitar ocupar [[#Armazenamento e desempenho|demasiado espaço]], o Obsidian mantém as cópias instantâneas durante um determinado número de dias antes de as eliminar. As cópias instantâneas capturam o conteúdo completo dos seus ficheiros, não apenas as alterações, permitindo-lhe restaurar qualquer versão anterior.

> [!info]+ Info
> Por predefinição, as cópias instantâneas são guardadas com um mínimo de 5 minutos entre cada uma, e mantidas durante 7 dias. Pode configurar ambos os intervalos em **[[Definições]] → Plugins Base → Recuperação de ficheiros**.

As cópias instantâneas são mantidas nas [[Como o Obsidian armazena dados#Definições globais|Definições globais]], fora do cofre, para prevenir a perda de dados relacionada com o cofre. Isto significa que as cópias instantâneas são armazenadas com o caminho absoluto para a nota. Se moveu o seu cofre recentemente, poderá precisar de o mover de volta para a localização onde se encontrava quando a cópia instantânea foi criada.

> [!tip] Se está a utilizar o [[Introdução ao Obsidian Sync|Obsidian Sync]] ou [[Sincronizar notas entre dispositivos|outros serviços de sincronização]], as cópias instantâneas da Recuperação de ficheiros não serão sincronizadas entre dispositivos. As cópias instantâneas são específicas de cada dispositivo e permanecem locais em cada dispositivo.

## Recuperar uma cópia instantânea

1. Abra as **[[Definições]]**.
2. Na barra lateral, selecione **Recuperação de ficheiros** em **Plugins Base**.
3. Em **Cópias instantâneas**, selecione **Vista**.
4. No campo de nome de ficheiro, comece a escrever o nome do ficheiro que pretende recuperar e verá uma lista de sugestões.
5. Selecione o ficheiro, prima Enter, e verá uma lista de cópias instantâneas disponíveis.
6. Selecione a cópia instantânea que pretende recuperar.
    1. Se desejar copiar e colar numa nova nota, selecione o botão **Copiar**.
    2. Se desejar restaurar o ficheiro completamente, selecione o botão **Restaurar**.
7. Pode opcionalmente mostrar as diferenças entre cópias instantâneas ativando **Mostrar diferenças**. Isto apresenta o conteúdo que foi adicionado, removido ou modificado entre versões das cópias instantâneas.

## Limpar histórico de cópias instantâneas

> [!danger] Limpar o histórico de cópias instantâneas elimina irreversivelmente todas as cópias instantâneas no seu cofre.

1. Abra as **[[Definições]]**.
2. Na barra lateral, selecione **Recuperação de ficheiros** em **Plugins Base**.
3. Em **Limpar histórico**, selecione **Apagar**.
4. Confirme que pretende eliminar todas as cópias instantâneas, clicando em **Apagar**.

## Armazenamento e desempenho

As cópias instantâneas da Recuperação de ficheiros utilizam tipicamente espaço mínimo em disco, uma vez que apenas armazenam ficheiros alterados. No entanto, em cofres com muitos ficheiros grandes ou edições frequentes, as cópias instantâneas podem acumular-se ao longo do tempo. Monitorize a utilização do armazenamento e ajuste o período de retenção se necessário.

## Limitações

- **Modo de bloqueio da Apple**: Esta funcionalidade não está disponível em dispositivos Apple com o [modo de bloqueio](https://support.apple.com/en-us/105120) ativado, a menos que o Obsidian esteja isento.
- **Tipos de ficheiro**: Apenas ficheiros `.md` e `.canvas` podem ser restaurados utilizando a Recuperação de ficheiros.
- **Localização do cofre**: Se mover o seu cofre para uma localização diferente sem utilizar o [[Gerir cofres#Mover cofre para uma pasta diferente|alternador de cofres]], as cópias instantâneas existentes podem não estar acessíveis.
