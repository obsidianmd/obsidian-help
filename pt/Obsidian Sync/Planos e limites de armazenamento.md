---
permalink: sync/plans
publish: true
mobile: true
description: Conheça as diferentes opções de plano disponíveis para o Obsidian Sync.
---
## Planos

Para sincronizar as suas notas com o [[Introdução ao Obsidian Sync|Obsidian Sync]], precisa de um plano de subscrição. Pode comprar um plano Sync iniciando sessão na [sua conta](https://obsidian.md/account/sync). Consulte a [página do Sync](https://obsidian.md/sync) para informações sobre preços.

Abaixo está uma comparação entre o plano Standard e o plano Plus:

|                                                             | Sync Standard | Sync Plus       |
| ----------------------------------------------------------- | ------------- | --------------- |
| Cofres sincronizados                                        | 1             | 10              |
| Tamanho máximo de ficheiro                                  | 5 MB          | 200 MB          |
| Armazenamento total                                         | 1 GB          | 10 GB a 100 GB  |
| [[História de versionamento]]                               | 1 mês         | 12 meses        |
| Dispositivos                                                | Ilimitados    | Ilimitados      |
| [[Colaborar num cofre partilhado\|Cofres partilhados]]     | Sim           | Sim             |

## Limites de armazenamento

A quantidade de dados que pode armazenar usando o [[Introdução ao Obsidian Sync|Obsidian Sync]] depende do seu plano de subscrição. No plano Sync Plus, pode comprar armazenamento adicional até 100 GB através do [painel da sua conta](https://obsidian.md/account/sync). Consulte as [[Perguntas frequentes]] para mais detalhes.

Existe um limite de armazenamento único ao nível da conta para todas as notas em todos os seus cofres. A [[História de versionamento]] e os [[Anexos|anexos]] também contam para o limite de armazenamento da sua conta.

Quando atingir o limite de armazenamento da sua conta, o plugin Sync deixará de sincronizar ficheiros e será solicitado a limpar o(s) seu(s) cofre(s) remoto(s).

### Identificar e eliminar ficheiros grandes

Para identificar e eliminar ficheiros grandes do cofre:

1. Abra **[[Definições]] → Sync**.
2. Selecione **Ver ficheiros maiores** junto a **Tamanho do vault acima do limite**.
	1. Se não vir **Tamanho do vault acima do limite**, significa que ==ainda não atingiu o limite de tamanho==.
3. Feche a janela **Ver ficheiros maiores**.
4. Elimine alguns dos ficheiros grandes que já não precisa.
5. Aguarde que o Obsidian Sync termine a tarefa. Isto pode demorar algum tempo.
6. Abra **[[Definições]] → Sync**.
7. Selecione **Limpar** junto a **Tamanho do vault acima do limite**. Isto removerá os ficheiros eliminados do cofre remoto para libertar espaço.

Após a limpeza ser sincronizada com o servidor, o Obsidian Sync deverá retomar o funcionamento.

### Criar um novo cofre remoto

Pode **criar um novo cofre remoto** para excluir ficheiros grandes antes de sincronizar. O histórico de versões dos seus ficheiros será reiniciado se criar um novo cofre remoto. Certifique-se de que não precisa do histórico de versões de ficheiros mais antigos antes de continuar.

Para sincronizar com um novo cofre remoto, siga estes passos:

1. Abra **[[Definições]] → Sync**.
2. Selecione **Gerir** junto a **Cofre remoto**.
3. Escolha **Criar novo vault** e siga os passos para o criar. Se ficar sem cofres disponíveis, poderá precisar de [[Configurar o Obsidian Sync#Desconectar de um cofre remoto|desconectar]] do cofre remoto atual e [[Configurar o Obsidian Sync#Eliminar um cofre remoto|eliminá-lo]] primeiro.
4. Configure os ficheiros excluídos antes de começar a sincronizar com o novo cofre remoto.
5. Reinicie o Obsidian para aplicar as suas alterações.
6. Abra **[[Definições]] → Sync**.
7. Selecione retomar para começar a sincronizar com o novo cofre remoto.

O novo cofre remoto deverá ser mais pequeno que o cofre anterior, devido à ausência de histórico de versões e ficheiros excluídos.

## Atualizar o seu plano

Pode atualizar o seu plano iniciando sessão no [painel da sua conta](https://obsidian.md/account/sync). A partir daí, poderá atualizar o seu plano de Sync Standard para Sync Plus e aumentar o armazenamento até 100 GB.

## Fazer downgrade do seu plano

Se quiser fazer downgrade do seu plano Sync, mas o seu uso de armazenamento exceder o limite do novo plano, precisará de libertar espaço no seu cofre remoto. Atualmente, não existe um método direto para remover rapidamente ficheiros específicos de um cofre remoto existente. Isto deve-se ao facto de os anexos serem mantidos no histórico de versões durante até duas semanas, e o histórico de versões conta para o seu limite de armazenamento.

A forma mais rápida de reduzir o uso de armazenamento do Sync é criar um novo cofre remoto com os anexos desativados e depois eliminar o cofre remoto antigo que excede os limites de armazenamento. Esteja ciente de que perderá o histórico de versões ao fazer isto.

Se estiver a fazer downgrade de Sync Plus para Sync Standard, também precisará de reduzir o número de cofres presentes para um antes que o downgrade seja permitido.

### Preservar o histórico de versões

Os anexos são mantidos no seu [[História de versionamento|histórico de versões]] durante até duas semanas. Se planeia fazer downgrade num futuro próximo, pode começar por remover os anexos do seu cofre local.

Após duas semanas, estes serão removidos do cofre remoto e deixarão de contar para o seu limite de armazenamento. Nesse ponto, poderá fazer downgrade do seu plano preservando o histórico de versões para outros tipos de ficheiros, como ficheiros Markdown.
