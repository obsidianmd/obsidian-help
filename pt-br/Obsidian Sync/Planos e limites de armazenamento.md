---
permalink: sync/plans
publish: true
mobile: true
description: Saiba mais sobre as diferentes opções de planos que temos disponíveis para o Obsidian Sync.
---
## Planos

Para sincronizar suas notas com o [[Introdução ao Obsidian Sync|Obsidian Sync]], você precisa de um plano de assinatura. Você pode comprar um plano do Sync fazendo login na [sua conta](https://obsidian.md/account/sync). Consulte a [página do Sync](https://obsidian.md/sync) para informações sobre preços.

Abaixo está uma comparação entre o plano Standard e o plano Plus:

|                                                               | Sync Standard | Sync Plus       |
| ------------------------------------------------------------- | ------------- | --------------- |
| Cofres sincronizados                                          | 1             | 10              |
| Tamanho máximo de arquivo                                     | 5 MB          | 200 MB          |
| Armazenamento total                                           | 1 GB          | 10 GB a 100 GB  |
| [[Histórico de versões]]                                      | 1 mês         | 12 meses        |
| Dispositivos                                                  | Ilimitados    | Ilimitados      |
| [[Colaborar em um cofre compartilhado\|Cofres compartilhados]] | Sim           | Sim             |

## Limites de armazenamento

A quantidade de dados que você pode armazenar usando o [[Introdução ao Obsidian Sync|Obsidian Sync]] depende do seu plano de assinatura. No plano Sync Plus, você pode comprar armazenamento adicional de até 100 GB pelo [painel da sua conta](https://obsidian.md/account/sync). Consulte [[Perguntas frequentes]] para mais detalhes.

Existe um limite único de armazenamento por conta para todas as notas em todos os seus cofres. O [[Histórico de versões]] e os [[Anexos|anexos]] também são contabilizados no limite de armazenamento da sua conta.

Quando você atingir o limite de armazenamento da sua conta, o plugin Sync deixará de sincronizar arquivos e você será solicitado a limpar seu(s) cofre(s) remoto(s).

### Identificar e excluir arquivos grandes

Para identificar e excluir arquivos grandes do cofre:

1. Abra **[[Configurações]] → Sync**.
2. Selecione **Ver os maiores arquivos** ao lado de **O tamanho do cofre está acima do limite**.
	1. Se você não vir **O tamanho do cofre está acima do limite**, significa que ==você ainda não atingiu o limite de tamanho==.
3. Feche o modal **Ver os maiores arquivos**.
4. Exclua alguns dos arquivos grandes que você não precisa mais.
5. Aguarde o Obsidian Sync concluir a tarefa. Isso pode demorar um pouco.
6. Abra **[[Configurações]] → Sync**.
7. Selecione **Limpar** ao lado de **O tamanho do cofre está acima do limite**. Isso removerá os arquivos excluídos do cofre remoto para liberar espaço.

Após a limpeza ser sincronizada com o servidor, o Obsidian Sync deve retomar o funcionamento.

### Criar um novo cofre remoto

Você pode **criar um novo cofre remoto** para excluir arquivos grandes antes de sincronizar. O histórico de versões dos seus arquivos será redefinido se você criar um novo cofre remoto. Certifique-se de que não precisa do histórico de versões de arquivos mais antigos antes de continuar.

Para sincronizar com um novo cofre remoto, siga estes passos:

1. Abra **[[Configurações]] → Sync**.
2. Selecione **Administrar** ao lado de **Cofre remoto**.
3. Escolha **Criar novo cofre** e siga os passos para criá-lo. Se você ficar sem cofres disponíveis, pode ser necessário [[Configurar o Obsidian Sync#Desconectar de um cofre remoto|desconectar]] do cofre remoto atual e [[Configurar o Obsidian Sync#Excluir um cofre remoto|excluí-lo]] primeiro.
4. Configure os arquivos excluídos antes de começar a sincronizar com o novo cofre remoto.
5. Reinicie o Obsidian para aplicar suas alterações.
6. Abra **[[Configurações]] → Sync**.
7. Selecione retomar para começar a sincronizar com o novo cofre remoto.

O novo cofre remoto deve ser menor que o cofre anterior, devido à ausência de histórico de versões e arquivos excluídos.

## Atualizar seu plano

Você pode atualizar seu plano fazendo login no [painel da sua conta](https://obsidian.md/account/sync). A partir daí, você poderá atualizar seu plano de Sync Standard para Sync Plus e aumentar o armazenamento até 100 GB.

## Fazer downgrade do seu plano

Se você quiser fazer downgrade do seu plano do Sync, mas seu uso de armazenamento exceder o limite do novo plano, será necessário liberar espaço no seu cofre remoto. Atualmente, não há um método direto para remover arquivos específicos de um cofre remoto existente rapidamente. Isso ocorre porque os anexos são retidos no histórico de versões por até duas semanas, e o histórico de versões conta para o seu limite de armazenamento.

A maneira mais rápida de reduzir o uso de armazenamento do Sync é criar um novo cofre remoto com os anexos desativados e, em seguida, excluir o cofre remoto antigo que excede os limites de armazenamento. Esteja ciente de que você perderá o histórico de versões ao fazer isso.

Se você estiver fazendo downgrade do Sync Plus para o Sync Standard, também precisará reduzir o número de cofres presentes para um antes que o downgrade seja permitido.

### Preservar o histórico de versões

Os anexos são mantidos no seu [[Histórico de versões|histórico de versões]] por até duas semanas. Se você planeja fazer downgrade em breve, pode começar removendo os anexos do seu cofre local.

Após duas semanas, eles serão eliminados do cofre remoto e não contarão mais para o seu limite de armazenamento. Nesse ponto, você poderá fazer downgrade do seu plano preservando o histórico de versões para outros tipos de arquivo, como arquivos Markdown.
