---
permalink: symlinks
---
Pode utilizar [ligações simbólicas](https://en.wikipedia.org/wiki/Symbolic_link) (symlinks) e [junções](https://learn.microsoft.com/en-us/windows/win32/fileio/hard-links-and-junctions#junctions) no seu cofre para armazenar ficheiros fora do cofre e da [[Como o Obsidian armazena dados#Definições globais|pasta do sistema]].

> [!danger] Use por sua conta e risco
> Desaconselhamos fortemente o uso de ligações simbólicas. Ao utilizar ligações simbólicas e junções no seu cofre, arrisca-se a perder ou corromper os seus dados, ou a causar uma falha no Obsidian. Certifique-se de que realiza cópias de segurança regulares do seu cofre e definições.

Abaixo estão algumas limitações ou problemas de que temos conhecimento e que pode querer ter em conta:

- Ciclos de symlinks são proibidos, para evitar que o Obsidian falhe devido a um ciclo infinito.
- Os destinos dos symlinks devem ser totalmente disjuntos da raiz do cofre ou de quaisquer outros destinos de symlinks. Disjuntos significa que uma pasta não contém outra, ou vice-versa. O Obsidian ignora qualquer symlink para uma pasta pai do cofre, ou de uma pasta no cofre para outra pasta no mesmo cofre. Trata-se de uma salvaguarda para garantir que não acaba com ficheiros duplicados no seu cofre, o que poderia tornar as ligações ambíguas.
- Os symlinks podem não funcionar bem com o Obsidian Sync, ou _qualquer outro tipo de sincronização_. Se o destino de um symlink for uma pasta que é sincronizada por um cofre Obsidian diferente, poderá (potencialmente) acabar com conflitos de sincronização ou perda de dados. Algumas ferramentas de sincronização, como o Git, não seguem symlinks, mas sincronizam o _caminho_ para o qual o symlink aponta, o que pode produzir resultados indesejados se partilhar o seu cofre com outras pessoas dessa forma.
- O gestor de ficheiros do Obsidian não consegue mover ficheiros entre limites de dispositivos, por isso, se criar um symlink para uma pasta num disco diferente do seu cofre, não poderá arrastar ficheiros entre essa pasta e outras pastas utilizando o explorador de ficheiros do Obsidian. (Terá de usar o explorador do seu sistema operativo para essas movimentações, e o Obsidian verá a movimentação como uma eliminação e a criação de um novo ficheiro. Também _não_ atualizará quaisquer ligações que dependiam do caminho desse ficheiro.)
- Symlinks de ficheiros (em oposição a symlinks de pastas) _podem_ funcionar, mas não são oficialmente suportados neste momento. Alterações realizadas fora do Obsidian não são monitorizadas, por isso, se alterar o ficheiro diretamente, o Obsidian não detetará a alteração, não atualizará os índices de pesquisa, etc.
- Criar symlinks dentro da pasta `.obsidian/` para as partilhar entre cofres **tem uma alta probabilidade de corromper as suas definições**, a menos que _realmente_ saiba o que está a fazer. Se decidir seguir este caminho, tenha pelo menos cópias de segurança.
