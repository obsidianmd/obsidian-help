---
permalink: sync/settings
publish: true
mobile: true
description: Esta página explica as configurações do Sync e orienta você na seleção de quais arquivos sincronizar.
---
Quando você [[Planos e limites de armazenamento#Criar um novo cofre remoto|cria um cofre remoto]] e [[Configurar o Obsidian Sync#Conectar a um cofre remoto|conecta-se a ele]], o plugin nativo Sync se torna o local para gerenciar seu cofre remoto.

## Configurações do Sync

**Cofre remoto**
Esta seção mostra seu cofre remoto atualmente conectado. Ela inclui um botão **Desconectar** para desconectar do cofre remoto e um botão **Administrar** para visualizar todos os cofres remotos aos quais sua conta tem acesso (incluindo cofres compartilhados via [[Colaborar em um cofre compartilhado|colaboração]]).

> [!warning]+ Cofre remoto em serviço de sincronização de terceiros
> Se seu cofre remoto estiver localizado em um serviço de sincronização de terceiros, você verá uma mensagem de erro vermelha. Siga os passos em [[Migrar para o Obsidian Sync]] para resolver isso.

**Status da sincronização**
Exibe o status atual da sincronização do cofre remoto. Esta seção inclui um botão **Pausar** ou **Retomar**, dependendo do status.

**Nome do dispositivo**
Atribua um nome único ao dispositivo que está sincronizando no momento. Isso ajuda a rastrear a atividade no [[Ícone de status e mensagens#Log de atividade do Sync|log de sincronização]]. Esta configuração é específica do dispositivo, assim como a [[#Sincronização seletiva]].

**[[#Resolução de conflitos]]**
Escolha como resolver conflitos quando você modifica um arquivo em vários dispositivos. Esta configuração é específica do dispositivo, assim como a [[#Sincronização seletiva]].

**Arquivos deletados**
Contém um botão para **Visualizar** ou **Restaurar** arquivos deletados. Para mais detalhes, veja [[Histórico de versões]].

**Tamanho do cofre:**
Exibe uma barra de progresso mostrando quanto do seu armazenamento de sincronização está sendo utilizado.

> [!tip]- Tempo de processamento do servidor
> Pode levar até 30 minutos para o uso atual ser atualizado devido ao processamento do lado do servidor.

**Contatar suporte**
Fornece instruções sobre como [[Ajuda e suporte#Contatar o suporte do Obsidian|contatar o suporte do Obsidian]], incluindo opções para **Copiar informações de depuração** e **Suporte por e-mail**.

### Resolução de conflitos

Escolha como resolver conflitos quando você modifica um arquivo em vários dispositivos antes de sincronizar. Você pode mesclar automaticamente as alterações ou criar arquivos de conflito separados para revisão manual. Veja [[Solução de problemas do Obsidian Sync#Resolução de conflitos|Resolução de conflitos]] para detalhes sobre como os conflitos funcionam e como configurar esta opção.

> [!warning]+ Configure em cada dispositivo
> Esta configuração deve ser feita separadamente em cada dispositivo.

---

Você também pode escolher o que sincronizar nas configurações do plugin nativo Sync. Esta seção aborda a **sincronização seletiva** e a **sincronização de configuração do cofre**, junto com suas ressalvas associadas.

## Sincronização seletiva

Os arquivos sincronizados com seu [[Cofres locais e remotos|cofre remoto]] contribuem para seu [[Perguntas frequentes#Qual o tamanho máximo de cada cofre remoto|limite de armazenamento]]. Por padrão, o Obsidian Sync ativa a **sincronização seletiva** para os seguintes tipos de arquivo:
- Imagens
- Áudio
- Vídeos
- PDFs

Para sincronizar tipos de arquivo adicionais, ative a opção `Sincronizar todos os outros tipos`.

As configurações padrão de **sincronização de configuração do cofre** incluem:
- Outros tipos de arquivo
- Configurações principais
- Aparência
- Temas e Fragmentos
- Teclas de atalho
- Lista de plugins nativos ativos
- Configurações de plugins nativos

Para sincronizar plugins da comunidade, ative manualmente **Lista de plugins ativos da comunidade** e **Lista de plugins instalados da comunidade**.

### Alterar os tipos de arquivo que você deseja sincronizar

1. Abra **[[Configurações]] → Sincronização**.
2. Em **Sincronização seletiva**, ative os tipos de arquivo que deseja sincronizar.
3. Reinicie o aplicativo para aplicar as novas configurações. Em dispositivos móveis ou tablets, pode ser necessário forçar o encerramento.

Note que seu [[Planos e limites de armazenamento|plano do Sync]] define o tamanho máximo de arquivo que você pode sincronizar. O plano Standard permite sincronizar arquivos de até 5 MB, enquanto o plano Plus suporta arquivos de até 200 MB.

> [!info]+ Arquivos excluídos permanecem no cofre remoto
> Adicionar um arquivo à lista de **Arquivos excluídos** não o remove do cofre remoto se ele já tiver sido sincronizado. Configure suas opções do Sync antes de sincronizar para evitar o uso desnecessário de armazenamento.

### Excluir uma pasta da sincronização

Por padrão, o Obsidian sincroniza todos os arquivos e pastas do seu cofre. Para excluir uma pasta específica da sincronização:
1. Abra **[[Configurações]] → Sincronização**.
2. Ao lado de **Pastas excluídas**, selecione **Administrar**.
3. Selecione a pasta que deseja excluir da lista.
4. Selecione **Feito**.

Para remover uma pasta da lista de exclusão, selecione o botão ![[lucide-x.svg#icon]] ao lado do nome da pasta.

#### Sempre excluídos da sincronização

##### Versões de recuperação de arquivos

As versões no plugin [[Recuperação de arquivos]] não são sincronizadas via Obsidian Sync, pois as versões são mantidas nas [[Como o Obsidian armazena dados#Configurações globais|Configurações globais]].

##### Arquivos e pastas ocultos

Arquivos e pastas que começam com `.` são tratados como ocultos e excluídos da sincronização. A única exceção é a [[Pasta de configuração|pasta de configuração]] do cofre (`.obsidian`), que é sincronizada.

Exemplos comuns de arquivos e pastas ocultos que não são sincronizados:
- `.vscode`
- `.git`
- `.idea`
- `.gitignore`

##### Configurações do Sync

As configurações do Sync não são sincronizadas entre dispositivos. Você precisa configurá-las separadamente em cada dispositivo conforme necessário.

## Atualizando as configurações do seu cofre sincronizado

Para modificar as configurações de sincronização em vários dispositivos, siga estes passos:

> [!tip]- Dispositivos primário e secundário
> Os termos "primário" e "secundário" são usados apenas para clareza. O Sync não diferencia entre eles.

### Dispositivo primário

O dispositivo primário age como a fonte de verdade. As alterações feitas aqui são sincronizadas em todos os outros dispositivos.

1. Vá para **[[Configurações]] → Sincronização**.
2. Ative as configurações desejadas em **Sincronização de configuração do cofre**.
3. Recarregue ou reinicie o Obsidian. Em dispositivos móveis ou tablets, pode ser necessário forçar o encerramento.
4. Aguarde um tempo para que as configurações sejam sincronizadas com seu cofre remoto.

### Dispositivo(s) secundário(s)

Os dispositivos secundários (como seu celular) recebem atualizações do dispositivo primário.

1. Vá para **[[Configurações]] → Sincronização**.
2. Ative as configurações necessárias em **Sincronização de configuração do cofre**.
3. Aguarde as alterações serem baixadas do cofre remoto.
4. Recarregue ou reinicie o aplicativo para aplicar as configurações sincronizadas. Em dispositivos móveis ou tablets, pode ser necessário forçar o encerramento.

### Recarregamento de configurações

Certas configurações podem ser recarregadas a quente, enquanto outras requerem reinicialização:

- **Recarregamento a quente**: A maioria das configurações do Obsidian, incluindo teclas de atalho e propriedades, configurações de aparência e configurações de plugins nativos já habilitados.
- **Requer reinicialização**: Alterações de CSS (ex.: [[Trechos CSS]], [[Temas]]), configurações da visualização em gráfico e estados de plugins nativos (ex.: ativar/desativar Notas Diárias).

Os plugins da comunidade geralmente não suportam recarregamento a quente e requerem reinicialização quando novas configurações são aplicadas.

> [!info]+ Para desenvolvedores de plugins
> Saiba como [integrar a funcionalidade de recarregamento a quente com o Obsidian Sync](https://docs.obsidian.md/Reference/TypeScript+API/Plugin/onExternalSettingsChange).

## Perfis de configurações

O Obsidian Sync pode sincronizar múltiplas [[Pasta de configuração|pastas de configuração]] para o mesmo cofre remoto, permitindo que você crie perfis separados (ex.: um para dispositivos móveis, outro para seu laptop).

### Criar um perfil de configurações

Para criar um novo perfil de configurações:

1. Abra **[[Configurações]] → Arquivos & Links**.
2. Em **Sobrescrever pasta de configuração**, insira um nome para seu perfil, começando com um ponto (`.`), ex.: `.obsidian-mobile`.
3. Reinicie o Obsidian para aplicar as alterações.

> [!info]+ Evite baixar novamente plugins e temas
> Alterar o perfil de configurações exigirá reconfigurar suas configurações de sincronização. Para evitar baixar novamente plugins e temas, copie sua pasta `.obsidian` existente e renomeie-a para corresponder ao seu novo perfil (ex.: `.obsidian-mobile`) antes de fazer alterações.
