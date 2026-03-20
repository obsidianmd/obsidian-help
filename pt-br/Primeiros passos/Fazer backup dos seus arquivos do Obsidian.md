---
permalink: backup
---
Se você ainda não fez backup do seu computador, comece agora! O plugin [[Recuperação de arquivos]] do Obsidian é útil, mas limitado. Ele só pode recuperar uma certa quantidade de dados e armazena informações de recuperação por dispositivo. Para uma proteção mais robusta, recomendamos que você implemente um sistema de backup adequado.

**Por que fazer backup dos seus dados?**

Por padrão, o Obsidian armazena suas notas **localmente** no seu dispositivo, não na nuvem. Isso significa que os [dados são totalmente seus](https://obsidian.md/about), dando a você controle sobre eles. No entanto, o armazenamento local pode ser afetado por problemas como corrupção ou perda de dados. Nunca é uma questão de se, mas de quando. Fazer backup dos seus dados protege contra essas inevitabilidades e garante que você mantenha o controle das suas notas.

## Sincronização não é backup

Serviços como [[Introdução ao Obsidian Sync|Obsidian Sync]], iCloud, OneDrive e Dropbox ajudam você a sincronizar suas notas entre diferentes dispositivos. Embora possam oferecer recursos como [[Histórico de versões|restauração de notas]], **eles não são projetados para backups**. A sincronização mantém suas notas atualizadas, mas não protege contra perda de dados.

- **Sincronização:** A sincronização garante que seus arquivos sejam os mesmos em todos os dispositivos. Quando você altera um arquivo em um dispositivo, ele é atualizado em todos os dispositivos sincronizados. Serviços de sincronização não têm um dispositivo "principal".
- **Backup:** Um backup salva uma cópia dos seus dados em um local diferente para ajudar a recuperá-los em caso de perda de dados ou corrupção. Backups não são destinados a atualizações em tempo real ou colaboração.

Para fazer backup adequado do seu cofre, use uma ferramenta de backup dedicada que crie uma cópia unidirecional dos seus dados. Essa ferramenta enviará seus dados para um local de backup seguro sem alterar os dados no seu dispositivo.

Se você usa múltiplos dispositivos com sincronização, escolha **um dispositivo** para ser seu dispositivo de backup. Geralmente é seu dispositivo principal ou "primário", aquele que você mais usa. Note que a maioria dos serviços de sincronização não reconhece nenhum dispositivo como "primário"; isso é apenas um conceito para ajudá-lo a gerenciar backups.

> [!Example] Você usa Obsidian Sync no seu laptop, tablet, celular e desktop do trabalho. Você usa seu cofre principalmente no desktop do trabalho, às vezes no laptop e raramente no tablet ou celular. Nesse caso, seu desktop do trabalho seria seu "dispositivo primário" para backup.

## Use plugins da comunidade

Embora a Equipe Obsidian não possa endossar oficialmente nenhum plugin específico, reconhecemos dois plugins da comunidade que se tornaram populares entre os usuários para fazer backup de seus arquivos:

- **[Obsidian Git](https://obsidian.md/plugins?id=obsidian-git):** Use este plugin para fazer backup do seu cofre commitando seu conteúdo em um [Repositório Git](https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository). É uma forma eficaz de versionar suas notas e garantir sua segurança em um servidor remoto. No entanto, esteja ciente de que seus dados podem ser armazenados em uma [[#Use serviços baseados em nuvem|plataforma de hospedagem externa]] usando este método.
- **[Local Backup](https://obsidian.md/plugins?id=local-backup):** Este plugin permite criar cópias locais do seu cofre em uma pasta de sua escolha, com opções de arquivamento. Você pode até usar uma pasta de sincronização, como uma pasta do Dropbox, para combinar backups locais e na nuvem. Este método **combina bem** com as opções de backup descritas abaixo.

## Use serviços baseados em nuvem

> [!info] Não é recomendado que você mantenha a localização do seu cofre dentro do serviço de backup escolhido.

Manter seu backup na nuvem é uma alternativa e um complemento ao armazenamento físico de dados, em vez de um disco rígido externo ou pen drive. Um disco rígido externo ou pen drive pode ser perdido ou danificado. A maior vantagem de armazenar arquivos na nuvem é que eles estão disponíveis a qualquer hora, em qualquer lugar. A desvantagem é que a maioria dos serviços de backup pertence a uma empresa privada.

Em termos de segurança, você deve sempre prestar muita atenção ao acesso e à segurança com backups na nuvem. O [Worldbackupday](https://www.worldbackupday.com/en) mantém uma lista atualizada de serviços de backup online a considerar.

## Use drives externos

**Discos rígidos e drives SSD**
Backups em discos rígidos externos ainda são valiosos em um mundo cada vez mais baseado em nuvem, e são usados principalmente para armazenamento de dados e backups de computador. A maior desvantagem de um drive externo é que o drive pode quebrar ou ser perdido. A maior vantagem é que o espaço de armazenamento só precisa ser comprado uma vez. Usar um disco rígido externo é frequentemente combinado com um [[#Use backups do computador|backup do computador]].

**Pen drives USB**
Pen drives (também chamados de drives flash, memory sticks ou pen drives) são um método simples e eficaz para backups rápidos.

1. Insira o pen drive no seu computador ou laptop.
2. Certifique-se de que o dispositivo seja reconhecido e montado no seu sistema de arquivos. Se necessário, formate o pen drive para ser compatível com seu sistema de arquivos.
3. Copie a pasta do seu cofre da localização atual para o pen drive.
4. Desmonte o pen drive com segurança.
5. Remova o pen drive do seu dispositivo.

**Backup em NAS**
Para usuários experientes, fazer backup de dados em um servidor NAS (Network Attached Storage) é um método bom e seguro, pois possui múltiplos discos rígidos e mecanismos adicionais de recuperação.

> [!tip] Se seu drive externo contém informações sensíveis, é recomendado manter o drive externo em segurança, como em uma sala trancada.

## Use backups do computador

Seu próprio sistema operacional oferece a capacidade de ajudar a criar backups, seja online na nuvem ou em um drive externo.

- **[Windows](https://www.microsoft.com/en-us/windows/learning-center/back-up-files)**: Backup com OneDrive ou um drive externo.
- **[Mac](https://support.apple.com/en-us/104984)**: Backup para um dispositivo externo com Time Machine.
- **[Linux](https://linuxize.com/post/how-to-use-rsync-for-local-and-remote-data-transfer-and-synchronization/)**: `rsync` para um diretório ou drive de sua escolha.

## Próximos passos

Esta página de ajuda fornece uma visão geral breve das opções de backup, mas não é exaustiva. Para informações mais detalhadas, visite [Worldbackupday.com](https://www.worldbackupday.com/en) ou pergunte a outros usuários do Obsidian em [nossa comunidade](https://obsidian.md/community) sobre suas estratégias de backup!
