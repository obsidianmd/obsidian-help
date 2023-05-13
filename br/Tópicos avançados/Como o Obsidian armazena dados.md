Nós acreditamos que [[Obsidian#How we're different|seus dados são sempre seus para possuir e controlar]]. Suas anotações são armazenadas em Markdown, que é um formato aberto baseado em arquivos de texto simples, e, como tal, devem poder ser lidos no futuro por qualquer computador capaz de manusear arquivos de texto. Você pode editar as anotações em outros aplicativos livremente, até mesmo enquanto elas estão abertas no Obsidian.

### Por dados do cofre

Existe alguns dados que são necessários para o aplicativo que não são armazenados em Markdown. O Obsidian cria uma pasta chamada `.obsidian` na raiz de qualquer cofre que você crie. Ela contém suas configurações, incluindo atalhos customizados de teclado e quais plugins estão habilitados. Qualquer pasta que comece com um `.` é invisível na maioria dos sistemas, então você provavelmente nunca as verá, a não ser que você queira. Se você deletar essa pasta, nenhum dado seu será perdido, mas você perderá suas configurações personalizadas. Ela será recriada quando você abrir o respectivo cofre no Obsidian novamente. Se você estiver usando o `git`, é aconselhável `ignorar` o arquivo `.obsidian/workspace`, porque este arquivo armazena seus painéis e arquivos abertos, mas não observamos nenhum outro problema com sua inclusão. 

### Diretório do sistema

O Obsidian também armazena algumas informações no diretório do sistema. Isso varia de acordo com o Sistema Operacional; no macOS é `/Users/seunome/Library/Application Support/obsidian`, no Windows `%APPDATA%\Obsidian\`, e `$XDG_CONFIG_HOME/Obsidian/` ou `~/.config/Obsidian/` no Linux. Como consequência, nós recomendamos que um cofre não seja criado nesse diretório.

Fora isso, no entanto, você pode criar um cofre em qualquer lugar que seu sistema operacional permita. Arquivos do Obsidian sincronizam com o Dropbox, iCloud, OneDrive, git e todos os outros serviços de sincronização que nós testamos até agora

### Links Simbólicos

Começando na versão v0.11.1, O Obsidian rechonhece links simbólicos e junções. Nós não recomendamos oficialmente usá-los, mas nós reconhecemos que existem casos válidos para o uso deles. Use-os por sua conta e risco.

Tenha em mente que existem muitas armadilhas no uso de links simbólicos, e algumas delass podem ter consequências graves, como a perda de dados, corrupção de arquivos, ou podem crashar o Obsidian.

Abaixo estão algumas limitações ou problemas que estamos cientes que você possa querer saber:

- Laços symlink não estão permitidos, para previnir que o Obsidian crashe devido a um loop infinito.
- Os alvos do symlink devem estar completamente desconectados da pasta raiz do cofre ou de outros alvos do symlink. Desconectar significa que uma pasta não contém outra, ou vice-versa. O Obsidian ignora qualquer symlink para uma pasta mãe do cofre, ou de uma pasta no cofre para outra pasta no mesmo cofre. Isso é um salvaguarda para garantir que você não acabe com arquivos duplicados em seu cofre, o que poderia fazer com que links se tornem ambíguos.
- Symlinks podem não funcionar direito com o Obsidian Sync, ou *qualquer outro tipo de sincronização*. Se o alvo de um symlink for ele mesmo uma pasta que está sincronizada por um outro cofre do Obsidian, você poderia (potencialmente) acabar com conflitos de sincronização ou perda de dados. Algumas ferramentas de sincronização, como o Git, não seguem os symlinks, mas sim sincronizam o *caminho* que o symlink aponta para, o qe poderia produzir resultados indesejáveis se você compartilhar seu cofre com outras pessoas desse jeito.
- O gerenciador de arquivos do Obsidian não pode mover arquivos através dos limites do dispositivo, então, se você usar um symlink para uma pasta em um disco diferente de seu cofre, você não consiguirá mover arquivos entre tal pasta e suas outras pastas utilizando o explorador de arquivos do Obsidian. (Você terá que usar o explorador do seu SO para tais movimentos, e o Obsidian verá o movimento como o apagamento de a criação de um novo arquivo. Ele também *não* atualizará qualquer link que dependesse do caminho de tal arquivo).
- Symlinks de arquivos (em oposição aos symlinks de pastas) *podem* funcionar, mas não são oficialmente suportados no momento. Mudanças realzidas fora do Obsidian não são vigiadas, então, se você modificar diretamente um arquivo, o Obsidian não detectará a mudança, não atualizará os índices de busca etc.
- Usar o symlink para coisas contidas na pasta `.obsidian/` de modo a poder compartilhá-las entre cofres **tem uma alta chance de corromper seuas configurações**, a não ser que você *realmente* saiba o que está fazendo. Se você decidir seguir este caminho, pelo menos tenha backups.
