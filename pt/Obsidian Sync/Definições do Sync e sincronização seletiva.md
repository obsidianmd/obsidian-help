---
permalink: sync/settings
publish: true
mobile: true
description: Esta página explica as configurações do Sync e orienta você na seleção de quais arquivos sincronizar.
---
Quando [[Planos e limites de armazenamento#Criar um novo cofre remoto|cria um cofre remoto]] e [[Configurar o Obsidian Sync#Conectar a um cofre remoto|se conecta a ele]], o plugin principal Sync torna-se o local para gerir o seu cofre remoto.

## Definições do Sync

**Cofre remoto**
Esta secção mostra o cofre remoto atualmente conectado. Inclui um botão **Desconectar** para desconectar do cofre remoto e um botão **Gerir** para ver todos os cofres remotos a que a sua conta tem acesso (incluindo cofres partilhados via [[Colaborar num cofre partilhado|colaboração]]).

> [!warning]+ Cofre remoto num serviço de sincronização de terceiros
> Se o seu cofre remoto estiver localizado num serviço de sincronização de terceiros, verá uma mensagem de erro a vermelho. Siga os passos em [[Mudar para o Obsidian Sync]] para resolver isto.

**Status da sincronização**
Apresenta o estado atual da sincronização do cofre remoto. Esta secção inclui um botão **Pausar** ou **Retomar**, dependendo do estado.

**Nome do dispositivo**
Atribua um nome único ao dispositivo que está atualmente a sincronizar. Isto ajuda a acompanhar a atividade no [[Ícone de estado e mensagens#Registo de atividade do Sync|registo de sincronização]]. Esta definição é específica do dispositivo, tal como a [[#Sincronização seletiva]].

**[[#Resolução de conflitos]]**
Escolha como resolver conflitos quando modifica um ficheiro em vários dispositivos. Esta definição é específica do dispositivo, tal como a [[#Sincronização seletiva]].

**Ficheiros eliminados**
Contém um botão para **Ver** ou **Restaurar** ficheiros eliminados. Para mais detalhes, consulte [[História de versionamento]].

**Vault size**
Apresenta uma barra de progresso que mostra quanto do seu armazenamento de sincronização está a ser utilizado.

> [!tip]- Tempo de processamento do servidor
> Pode demorar até 30 minutos para que a utilização atual seja atualizada devido ao processamento do lado do servidor.

**Contactar suporte**
Fornece instruções sobre como [[Ajuda e suporte#Contactar o suporte Obsidian|contactar o suporte Obsidian]], incluindo opções para **Copiar informações de depuração** e **Suporte de email**.

### Resolução de conflitos

Escolha como resolver conflitos quando modifica um ficheiro em vários dispositivos antes de sincronizar. Pode mesclar automaticamente as alterações ou criar ficheiros de conflito separados para revisão manual. Consulte [[Resolver problemas do Obsidian Sync#Resolução de conflitos|Resolução de conflitos]] para detalhes sobre como os conflitos funcionam e como configurar esta definição.

> [!warning]+ Configurar em cada dispositivo
> Esta definição deve ser configurada separadamente em cada dispositivo.

---

Também pode escolher o que sincronizar nas definições do plugin principal Sync. Esta secção abrange a **sincronização seletiva** e a **sincronização de configurações do vault**, juntamente com as respetivas ressalvas.

## Sincronização seletiva

Os ficheiros sincronizados com o seu [[Cofres locais e remotos|cofre remoto]] contribuem para o seu [[Perguntas frequentes#Qual o tamanho máximo de cada cofre remoto|limite de armazenamento]]. Por predefinição, o Obsidian Sync ativa a **sincronização seletiva** para os seguintes tipos de ficheiro:
- Imagens
- Áudio
- Vídeos
- PDFs

Para sincronizar tipos de ficheiro adicionais, ative a opção `Sincronizar todos os outros tipos`.

As definições predefinidas de **sincronização de configurações do vault** incluem:
- Outros tipos de ficheiro
- Configurações principais
- Aparência
- Temas e snippets
- Atalhos de teclado
- Lista de plugins base ativos
- Configurações de plugins base

Para sincronizar plugins da comunidade, ative manualmente **Lista de plugins da comunidade ativos** e **Lista de plugins da comunidade instalados**.

### Alterar os tipos de ficheiro que pretende sincronizar

1. Abra **[[Definições]] → Sync**.
2. Em **Sincronização seletiva**, ative os tipos de ficheiro que pretende sincronizar.
3. Reinicie a aplicação para aplicar as novas definições. Em móvel ou tablet, isto pode exigir um encerramento forçado.

Note que o seu [[Planos e limites de armazenamento|plano Sync]] define o tamanho máximo de ficheiro que pode sincronizar. O plano Standard permite sincronizar ficheiros até 5 MB, enquanto o plano Plus suporta ficheiros até 200 MB.

> [!info]+ Ficheiros excluídos permanecem no cofre remoto
> Adicionar um ficheiro à lista de **Ficheiros excluídos** não o remove do cofre remoto se já tiver sido sincronizado. Configure as suas definições do Sync antes de sincronizar para evitar utilizar armazenamento desnecessário.

### Excluir uma pasta da sincronização

Por predefinição, o Obsidian sincroniza todos os ficheiros e pastas no seu cofre. Para excluir uma pasta específica da sincronização:
1. Abra **[[Definições]] → Sync**.
2. Junto a **Pastas excluídas**, selecione **Gerir**.
3. Selecione a pasta que pretende excluir da lista.
4. Selecione **Feito**.

Para remover uma pasta da lista de exclusão, selecione o botão ![[lucide-x.svg#icon]] junto ao nome da pasta.

#### Sempre excluídos da sincronização

##### Cópias instantâneas da recuperação de ficheiros

As cópias instantâneas no plugin [[Recuperação de ficheiros]] não são sincronizadas via Obsidian Sync, pois as cópias instantâneas são mantidas nas [[Como o Obsidian armazena dados#Definições globais|Definições globais]].

##### Ficheiros e pastas ocultos

Ficheiros e pastas que começam com um `.` são tratados como ocultos e excluídos da sincronização. A única exceção é a [[Pasta de configuração|pasta de configuração]] do cofre (`.obsidian`), que é sincronizada.

Exemplos comuns de ficheiros e pastas ocultos que não são sincronizados:
- `.vscode`
- `.git`
- `.idea`
- `.gitignore`

##### Definições do Sync

As definições do Sync não são sincronizadas entre dispositivos. É necessário configurá-las separadamente em cada dispositivo conforme necessário.

## Atualizar as definições do cofre sincronizado

Para modificar as definições de sincronização em vários dispositivos, siga estes passos:

> [!tip]- Dispositivos primário e secundário
> Os termos "primário" e "secundário" são apenas para clareza. O Sync não diferencia entre eles.

### Dispositivo primário

O dispositivo primário funciona como a fonte de verdade. As alterações feitas aqui são sincronizadas com todos os outros dispositivos.

1. Vá a **[[Definições]] → Sync**.
2. Ative as definições desejadas em **Sincronizar configurações do vault**.
3. Recarregue ou reinicie o Obsidian. Em móvel ou tablet, pode ser necessário um encerramento forçado.
4. Aguarde que as definições sejam sincronizadas com o seu cofre remoto.

### Dispositivo(s) secundário(s)

Os dispositivos secundários (como o seu telemóvel) recebem atualizações do dispositivo primário.

1. Vá a **[[Definições]] → Sync**.
2. Ative as definições necessárias em **Sincronizar configurações do vault**.
3. Aguarde que as alterações sejam transferidas do cofre remoto.
4. Recarregue ou reinicie a aplicação para aplicar as definições sincronizadas. Em móvel ou tablet, pode ser necessário um encerramento forçado.

### Recarregamento de definições

Certas definições podem ser recarregadas a quente, enquanto outras requerem um reinício:

- **Recarregamento a quente**: A maioria das configurações do Obsidian, incluindo atalhos de teclado e propriedades, definições de aparência e configurações de plugins principais já ativados.
- **Requer reinício**: Alterações CSS (p. ex., [[Fragmentos CSS]], [[Temas]]), configurações da vista de grafo e estados de plugins principais (p. ex., ativar/desativar Notas Diárias).

Os plugins da comunidade tipicamente não suportam recarregamento a quente e requerem um reinício quando novas definições são aplicadas.

> [!info]+ Para programadores de plugins
> Saiba como [integrar a funcionalidade de recarregamento a quente com o Obsidian Sync](https://docs.obsidian.md/Reference/TypeScript+API/Plugin/onExternalSettingsChange).

## Perfis de definições

O Obsidian Sync pode sincronizar múltiplas [[Pasta de configuração|pastas de configuração]] para o mesmo cofre remoto, permitindo-lhe criar perfis separados (p. ex., um para móvel, outro para o seu portátil).

### Criar um perfil de definições

Para criar um novo perfil de definições:

1. Abra **[[Definições]] → Ficheiros & Links**.
2. Em **Substituir a pasta de configuração**, introduza um nome para o seu perfil, começando com um ponto (`.`), p. ex., `.obsidian-mobile`.
3. Reinicie o Obsidian para aplicar as alterações.

> [!info]+ Evitar transferir novamente plugins e temas
> Alterar o perfil de definições irá exigir reconfigurar as suas definições de sincronização. Para evitar transferir novamente plugins e temas, copie a sua pasta `.obsidian` existente e renomeie-a para corresponder ao seu novo perfil (p. ex., `.obsidian-mobile`) antes de fazer alterações.
