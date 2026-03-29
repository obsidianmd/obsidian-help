---
permalink: backup
---
Se ainda não fez uma cópia de segurança do seu computador, comece agora! O plugin [[Recuperação de ficheiros]] do Obsidian é útil mas limitado. Só consegue recuperar uma certa quantidade de dados e armazena as informações de recuperação por dispositivo. Para uma proteção mais robusta, recomendamos que implemente um sistema de cópia de segurança adequado.

**Porquê fazer cópias de segurança dos seus dados?**

Por predefinição, o Obsidian armazena as suas notas **localmente** no seu dispositivo, não na nuvem. Isto significa que os [dados são inteiramente seus](https://obsidian.md/about), dando-lhe controlo sobre eles. No entanto, o armazenamento local pode ser afetado por problemas como corrupção ou perda de dados. Nunca é uma questão de se, mas de quando. Fazer cópias de segurança dos seus dados protege contra estas inevitabilidades e garante que mantém o controlo das suas notas.

## Sincronização não é uma cópia de segurança

Serviços como o [[Introdução ao Obsidian Sync|Obsidian Sync]], iCloud, OneDrive e Dropbox ajudam a sincronizar as suas notas entre diferentes dispositivos. Embora possam oferecer funcionalidades como [[História de versionamento|restauração de notas]], **não foram concebidos para cópias de segurança**. A sincronização mantém as suas notas atualizadas, mas não protege contra a perda de dados.

- **Sincronização:** A sincronização garante que os seus ficheiros são iguais em todos os dispositivos. Quando altera um ficheiro num dispositivo, ele é atualizado em todos os dispositivos sincronizados. Os serviços de sincronização não têm um dispositivo "principal".
- **Cópia de segurança:** Uma cópia de segurança guarda uma cópia dos seus dados numa localização diferente para ajudar a recuperá-los em caso de perda ou corrupção de dados. As cópias de segurança não se destinam a atualizações em tempo real ou colaboração.

Para fazer corretamente a cópia de segurança do seu cofre, use uma ferramenta de cópia de segurança dedicada que crie uma cópia unidirecional dos seus dados. Esta ferramenta enviará os seus dados para uma localização segura de cópia de segurança sem alterar os dados no seu dispositivo.

Se utiliza vários dispositivos com sincronização, escolha **um dispositivo** para ser o seu dispositivo de cópia de segurança. Este é geralmente o seu dispositivo principal ou "primário", aquele que utiliza mais. Note que a maioria dos serviços de sincronização não reconhece nenhum dispositivo como "primário"; este é apenas um conceito para o ajudar a gerir as cópias de segurança.

> [!Example] Utiliza o Obsidian Sync no seu portátil, tablet, telemóvel e computador de secretária do trabalho. Utiliza o seu cofre principalmente no computador do trabalho, às vezes no portátil, e raramente no tablet ou telemóvel. Neste caso, o seu computador de secretária do trabalho seria o seu "dispositivo primário" para cópia de segurança.

## Usar plugins da comunidade

Embora a equipa do Obsidian não possa endossar oficialmente nenhum plugin específico, reconhecemos dois plugins da comunidade que se tornaram populares entre os utilizadores para fazer cópias de segurança dos seus ficheiros:

- **[Obsidian Git](https://obsidian.md/plugins?id=obsidian-git):** Use este plugin para fazer cópia de segurança do seu cofre ao submeter o seu conteúdo para um [Repositório Git](https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository). É uma forma eficaz de controlar versões das suas notas e garantir a sua segurança num servidor remoto. No entanto, esteja ciente de que os seus dados podem ser armazenados numa [[#Usar serviços baseados na nuvem|plataforma de alojamento externa]] ao utilizar este método.
- **[Local Backup](https://obsidian.md/plugins?id=local-backup):** Este plugin permite criar cópias locais do seu cofre numa pasta à sua escolha, com opções de arquivo. Pode até usar uma pasta de sincronização, como uma pasta do Dropbox, para combinar cópias de segurança locais e na nuvem. Este método **combina bem** com as opções de cópia de segurança descritas abaixo.

## Usar serviços baseados na nuvem

> [!info] Não é recomendado que mantenha a localização do seu cofre no serviço de cópia de segurança escolhido.

Manter a sua cópia de segurança na nuvem é uma alternativa e um complemento ao armazenamento físico de dados, em vez de um disco rígido externo ou pen USB. Um disco rígido externo ou pen USB pode ser perdido ou danificado. A maior vantagem de armazenar ficheiros na nuvem é que estão disponíveis a qualquer momento, em qualquer lugar. A desvantagem é que a maioria dos serviços de cópia de segurança pertence a uma empresa privada.

Em termos de segurança, deve sempre prestar muita atenção ao acesso e segurança com cópias de segurança na nuvem. O [Worldbackupday](https://www.worldbackupday.com/en) mantém uma lista atualizada de serviços de cópia de segurança online a considerar.

## Usar drives externos

**Discos rígidos e drives SSD**
As cópias de segurança em discos rígidos externos continuam a ser valiosas num mundo cada vez mais baseado na nuvem, e são principalmente utilizadas para armazenamento de dados e cópias de segurança de computadores. A maior desvantagem de um drive externo é que pode avariar ou ser perdido. A maior vantagem é que o espaço de armazenamento só precisa de ser comprado uma vez. Usar um disco rígido externo é frequentemente combinado com uma [[#Usar cópias de segurança do computador|cópia de segurança do computador]].

**Pen drives USB**
As pen drives (também chamadas de memórias USB ou sticks de memória) são um método simples e eficaz para cópias de segurança rápidas.

1. Insira a pen drive no seu computador ou portátil.
2. Certifique-se de que o dispositivo é reconhecido e montado no seu sistema de ficheiros. Se necessário, formate a pen drive para ser compatível com o seu sistema de ficheiros.
3. Copie a pasta do seu cofre da sua localização atual para a pen drive.
4. Desmonte a pen drive em segurança.
5. Remova a pen drive do seu dispositivo.

**Cópia de segurança em NAS**
Para utilizadores experientes, fazer cópia de segurança dos dados num servidor NAS (Network Attached Storage) é um método bom e seguro, pois possui múltiplos discos rígidos e mecanismos adicionais de recuperação.

> [!tip] Se o seu drive externo contém informações sensíveis, é recomendado manter o drive externo seguro, como numa sala protegida.

## Usar cópias de segurança do computador

O seu próprio sistema operativo oferece a capacidade de ajudar a criar cópias de segurança, seja online na nuvem ou num drive externo.

- **[Windows](https://www.microsoft.com/en-us/windows/learning-center/back-up-files)**: Cópia de segurança com o OneDrive ou um drive externo.
- **[Mac](https://support.apple.com/en-us/104984)**: Cópia de segurança para um dispositivo externo com o Time Machine.
- **[Linux](https://linuxize.com/post/how-to-use-rsync-for-local-and-remote-data-transfer-and-synchronization/)**: `rsync` para um diretório ou drive à sua escolha.

## Próximos passos

Esta página de ajuda fornece uma breve visão geral das opções de cópia de segurança, mas não é exaustiva. Para informações mais aprofundadas, visite o [Worldbackupday.com](https://www.worldbackupday.com/en) ou pergunte a outros utilizadores do Obsidian na [nossa comunidade](https://obsidian.md/community) sobre as suas estratégias de cópia de segurança!
