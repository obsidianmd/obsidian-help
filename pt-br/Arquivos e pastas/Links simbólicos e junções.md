---
permalink: symlinks
---
Você pode usar [links simbólicos](https://en.wikipedia.org/wiki/Symbolic_link) (symlinks) e [junções](https://learn.microsoft.com/en-us/windows/win32/fileio/hard-links-and-junctions#junctions) no seu cofre para armazenar arquivos fora do cofre e da [[Como o Obsidian armazena dados#Configurações globais|pasta do sistema]].

> [!danger] Use por sua própria conta e risco
> Nós desaconselhamos fortemente o uso de links simbólicos. Ao usar links simbólicos e junções no seu cofre, você corre o risco de perder ou corromper seus dados, ou travar o Obsidian. Certifique-se de realizar backups regulares do seu cofre e configurações.

Abaixo estão algumas limitações ou problemas dos quais estamos cientes e que você pode querer ter em mente:

- Loops de symlinks não são permitidos, para evitar que o Obsidian trave devido a um loop infinito.
- Os destinos dos symlinks devem ser completamente disjuntos da raiz do cofre ou de quaisquer outros destinos de symlinks. Disjunto significa que uma pasta não contém outra, ou vice-versa. O Obsidian ignora qualquer symlink para uma pasta pai do cofre, ou de uma pasta no cofre para outra pasta no mesmo cofre. Isso é uma medida de segurança para garantir que você não acabe com arquivos duplicados no seu cofre, o que poderia tornar os links ambíguos.
- Symlinks podem não funcionar bem com o Obsidian Sync, ou _qualquer outro tipo de sincronização_. Se o destino de um symlink for ele próprio uma pasta sincronizada por um cofre Obsidian diferente, você pode (potencialmente) acabar com conflitos de sincronização ou perda de dados. Algumas ferramentas de sincronização, como o Git, não seguem symlinks, mas sincronizam o _caminho_ para o qual o symlink aponta, o que pode produzir resultados indesejados se você compartilhar seu cofre com outras pessoas dessa forma.
- O gerenciador de arquivos do Obsidian não pode mover arquivos entre limites de dispositivos, então se você criar um symlink para uma pasta em uma unidade diferente do seu cofre, não será possível arrastar arquivos entre essa pasta e outras pastas usando o explorador de arquivos do Obsidian. (Você precisará usar o explorador do seu sistema operacional para essas movimentações, e o Obsidian verá a movimentação como uma exclusão e a criação de um novo arquivo. Ele também _não_ atualizará nenhum link que dependia do caminho desse arquivo.)
- Symlinks de arquivos (ao contrário de symlinks de pastas) _podem_ funcionar, mas não são oficialmente suportados neste momento. Alterações realizadas fora do Obsidian não são monitoradas, então se você alterar o arquivo diretamente, o Obsidian não detectará a mudança, não atualizará os índices de pesquisa, etc.
- Criar symlinks de itens dentro da pasta `.obsidian/` para compartilhá-los entre cofres **tem uma alta chance de corromper suas configurações**, a menos que você _realmente_ saiba o que está fazendo. Se decidir seguir esse caminho, pelo menos tenha backups.
