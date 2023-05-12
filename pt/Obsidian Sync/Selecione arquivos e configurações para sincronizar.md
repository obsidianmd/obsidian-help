Quaisquer arquivos ou configurações que tenham sido sincronizados com seu [[Cofres locais e remotos|remoto vault]] contam para seu [[Limitações#How large can each remote vault be|espaço de armazenamento]]. Por padrão, [[Introdução ao Obsidian Sync|Obsidian Sync]] ignora arquivos maiores, como áudio, vídeo e PDFs.

**Notas:**

- Os arquivos sincronizados permanecem em seu cofre remoto, mesmo que você os exclua posteriormente. Se possível, defina os arquivos e as configurações que deseja sincronizar antes de começar a sincronizar seu cofre.
- O Obsidian só aplica as configurações do Vault durante a inicialização. Se você alterar uma configuração em um dispositivo, será necessário reiniciar o Obsidian nos outros dispositivos para que as novas alterações entrem em vigor. Por exemplo, se você alterar o caminho de suas anotações diárias no plug-in [[Daily Notes]], será necessário reiniciar o Obsidian em seus outros dispositivos para usar o novo caminho.
- ==O Sync não sincroniza as configurações do Sync.== Isso permite que os usuários configurem o Sync de forma diferente em cada dispositivo de acordo com suas necessidades. Isso significa, no entanto, que você deve definir configurações de sincronização personalizadas em cada dispositivo.

## Configuração do cofre de sincronização

1. Abra **Configurações → Sincronizar**.
2. Em **Sincronização de configuração do cofre**, ative as configurações que deseja sincronizar.

## Selecione os tipos de arquivo para sincronizar

1. Abra **Configurações → Sincronizar**.
2. Em **Sincronização seletiva**, ative os tipos de arquivo que deseja sincronizar.

## Excluir pasta de ser sincronizada

Por padrão, o Obsidian sincroniza todos os arquivos e pastas em seu cofre. Se você não deseja que o Obsidian sincronize uma determinada pasta, você pode excluí-la.

1. Abra **Configurações → Sincronizar**.
2. Em **Sincronização seletiva**, ao lado de **Pastas excluídas**, clique em **Gerenciar**.
3. Clique na caixa de seleção à esquerda da pasta que deseja excluir.
4. Clique em **Concluído**.

## Crie um perfil de configurações

O Obsidian Sync pode sincronizar várias pastas de configurações para o mesmo cofre remoto. Você pode usar isso para criar perfis diferentes, por exemplo, um para dispositivos móveis e outro para seu laptop.

Para definir sua pasta de configurações:

1. Abra **Configurações → Sobre**.
2. Em **Override config folder**, digite o nome do seu perfil, começando com um ponto (`.`). Por exemplo, `.obsidian-mobile`.