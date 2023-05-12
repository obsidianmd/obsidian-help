[[Introdução ao Obsidian Sync|Obsidian Sync]] é um serviço para sincronizar suas anotações entre dispositivos. Embora ofereça recursos úteis como [[Histórico da versão|restauração de notas]], ele não foi projetado para ser usado para fazer backup do seu cofre.

Embora recomendemos que você faça backup regularmente do seu cofre, esteja ciente de que **o uso de um serviço de sincronização de terceiros junto com o Obsidian Sync pode resultar em corrupção ou perda de dados**.

Se você configurar o mesmo serviço de terceiros em vários dispositivos, como seu telefone, corre o risco de ter o serviço concorrendo com o Obsidian Sync sempre que fizer alterações em seu cofre. Isso pode levar a conflitos, arquivos duplicados ou arquivos corrompidos.

Para fazer backup de seu cofre usando um serviço de terceiros, configure o serviço para que os backups sejam feitos apenas de seu dispositivo principal. Por exemplo, se você escreve a maior parte do tempo em seu laptop, é aí que você deve configurar seus backups.

Recomendamos o uso de um serviço de backup dedicado que não atualize automaticamente os dados em seu dispositivo local a partir do backup.

> [!importante] Arquivos sob demanda
> Alguns serviços de armazenamento em nuvem, como o OneDrive, permitem que você baixe arquivos apenas quando os usar e depois os remova localmente para liberar espaço. Como os arquivos não estão mais disponíveis localmente, o Obsidian Sync acredita que eles foram excluídos e os remove do seu cofre remoto.
>
> Para usar o Obsidian Sync junto com arquivos sob demanda e recursos semelhantes, certifique-se de configurar o serviço para sempre manter os arquivos no dispositivo.

## Remova seu cofre de um serviço de sincronização de terceiros

Se estiver usando o Obsidian Sync e perceber que configurou seu cofre em uma pasta sincronizada por um serviço de terceiros, você pode usar as etapas a seguir para mover o cofre para um local mais seguro.

## Área de Trabalho

### Opção 1: mova seu cofre usando o alternador de cofre

1. No canto inferior esquerdo, selecione **Abrir outro cofre** (ícone do cofre).
2. Ao lado do cofre que deseja mover, selecione **Mais opções** (ícone de três pontos).
3. Escolha um novo local para o vault em seu sistema de arquivos.

### Opção 2: mova seu cofre manualmente
  
1. Faça backups do seu cofre. Copie a pasta do cofre para outro local que você não tocará durante o restante desta operação.
2. Saia do Obsidian.
3. Recorte e cole (ou mova arrastando e soltando) a pasta do cofre do local antigo para o local do cofre recém-selecionado. Não o coloque em uma pasta que está sendo sincronizada por outro serviço.
4. Certifique-se de que sua pasta de backup contém seu cofre.
5. Reinicie o Obsidian.
6. Abra o alternador do Vault e selecione **Abrir pasta como cofre**.
7. Navegue até o novo local do cofre e escolha a pasta do cofre.
8. Verifique e certifique-se de que o vault tenha a mesma aparência. Talvez seja necessário reativar os plug-ins da comunidade em **Configurações → Plug-ins da comunidade → Desativar o modo restrito**.)
9. Configure o Obsidian Sync novamente.

### iOS

1. Faça um backup do seu cofre.
2. No seu dispositivo, crie um novo cofre e desative **Salvar no iCloud Drive**.
3. Force o encerramento do aplicativo Obsidian em todos os seus dispositivos para evitar que o Sync execute qualquer operação enquanto você move os arquivos.
4. Em seu dispositivo iOS, abra o aplicativo Arquivos.
5. Em **iCloud Drive → Obsidian**, pressione e segure a pasta do cofre e selecione **Mover**.
6. Navegue até **No meu iPhone → Obsidian**. Certifique-se de que você pode ver o cofre que você criou anteriormente.
7. Pressione **Copiar**.
5. Depois que o cofre for copiado, volte para **iCloud Drive → Obsidian**.
6. Exclua a pasta do cofre.

Na próxima vez que você abrir o Obsidian e o alternador do Vault, seu cofre agora terá um ícone de cofre em vez de uma nuvem, indicando que não está mais no iCloud Drive.