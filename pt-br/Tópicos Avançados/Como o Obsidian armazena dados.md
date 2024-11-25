Acreditamos [[Obsidian#Como somos diferentes|seus dados são sempre seus para possuir e controlar]]. Suas anotações são armazenadas no Markdown, que é um formato aberto baseado em arquivos de texto simples e, portanto, deve ser lido no futuro por qualquer computador que possa lidar com arquivos de texto. Você pode editar notas livremente em outro software, mesmo enquanto as abre no Obsidian.

### Dados por cofre

Existem alguns dados necessários ao software que não são armazenados no Markdown. Obsidian cria uma pasta chamada `.obsidian` na raiz de qualquer vault que você criar. Isso contém sua configuração, incluindo teclas de atalho personalizadas e quais plug-ins estão ativados. Qualquer pasta que comece com `.` é invisível na maioria dos sistemas, então você provavelmente nunca a verá, a menos que tente. Se você excluir esta pasta, nenhum de seus dados será perdido, mas você perderá suas configurações personalizadas. Ele será recriado quando você abrir o cofre no Obsidian novamente. Se você estiver usando `git`, provavelmente é melhor `ignorar` o arquivo `.obsidian/workspace`, porque este arquivo armazena seus painéis e arquivos abertos, mas não observamos nenhum outro problema ao incluí-lo.

### Diretório do sistema

O Obsidian também armazena algumas informações no diretório do sistema. Isso é diferente por sistema operacional; no macOS é `/Users/yourusername/Library/Application Support/obsidian`, no Windows `%APPDATA%\Obsidian\`, e `$XDG_CONFIG_HOME/obsidian/` ou `~/.config/obsidian/` no Linux. Como resultado, recomendamos não criar um cofre neste diretório.

Além disso, você pode criar um cofre em qualquer lugar que seu sistema operacional permitir. Os arquivos Obsidian sincronizam bem com Dropbox, iCloud, OneDrive, git e todos os outros serviços de sincronização que tentamos até agora.

### Links Simbólicos

A partir da v0.11.1, o Obsidian reconhece links e junções simbólicas. Não recomendamos oficialmente o uso deles, mas reconhecemos que existem casos de uso válidos para eles. Use-os por sua conta e risco.

Esteja ciente de que existem muitas armadilhas no uso de links simbólicos, e algumas delas podem ter sérias consequências, como perda de dados, corrupção de arquivos ou podem travar o Obsidian.

Abaixo estão algumas limitações ou problemas de que estamos cientes e que você pode querer ter em mente:

- Os loops do Symlink não são permitidos, para evitar a falha do Obsidian devido a um loop infinito.
- Os destinos do link simbólico devem ser totalmente separados da raiz do cofre ou de qualquer outro destino do link simbólico. Disjunto significa que uma pasta não contém outra, ou vice-versa. Obsidian ignora qualquer link simbólico para uma pasta pai do vault, ou de uma pasta no vault para outra pasta no mesmo vault. É uma proteção para garantir que você não acabe com arquivos duplicados em seu cofre, o que pode fazer com que os links se tornem ambíguos.
- Os links simbólicos podem não funcionar bem com a sincronização do Obsidian ou _qualquer outro tipo de sincronização_. Se o alvo de um link simbólico for uma pasta que é sincronizada por um cofre diferente da Obsidian, você pode (potencialmente) acabar com conflitos de sincronização ou perda de dados. Algumas ferramentas de sincronização, como o Git, não seguem links simbólicos, mas sincronizam o _path_ para o qual o link simbólico aponta, o que pode produzir resultados indesejáveis se você compartilhar seu cofre com outras pessoas dessa maneira.
- O gerenciador de arquivos do Obsidian não pode mover arquivos além dos limites do dispositivo, portanto, se você criar um link simbólico para uma pasta em uma unidade diferente do seu cofre, não poderá arrastar arquivos entre essa pasta e outras pastas usando o explorador de arquivos do Obsidian. (Você precisará usar o explorador do seu sistema operacional para tais movimentos, e o Obsidian verá o movimento como uma exclusão e a criação de um novo arquivo. Ele também _não_ atualizará nenhum link que dependa do caminho desse arquivo.)
- Links simbólicos de arquivo (ao contrário de links simbólicos de pasta) _podem_ funcionar, mas não são oficialmente suportados no momento. As alterações realizadas fora do Obsidian não são observadas, portanto, se você alterar o arquivo diretamente, o Obsidian não detectará a alteração, atualizará os índices de pesquisa etc.
- Criar links simbólicos na pasta `.obsidian/` para compartilhá-los entre cofres **tem uma grande chance de corromper suas configurações**, a menos que você _realmente_ saiba o que está fazendo. Se você decidir seguir esse caminho, pelo menos tenha backups.
