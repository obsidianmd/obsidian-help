Esta página lista problemas comuns que você pode encontrar e como resolvê-los.

## Resolução de conflitos

Um conflito ocorre quando você faz alterações no mesmo arquivo em dois ou mais dispositivos entre as sincronizações. Por exemplo, você pode ter alterado um arquivo em seu computador e, antes que essa alteração seja carregada, você também altera o mesmo arquivo em seu telefone.

Os conflitos geralmente acontecem com mais frequência se você trabalha offline, pois há mais alterações e um período de tempo maior entre as sincronizações e, portanto, mais conflitos em potencial.

Quando o Sync baixa uma nova versão de um arquivo e descobre que há conflitos com a versão local, as alterações são mescladas com o algoritmo diff-match-patch do Google.

> [!dica]
> Para descobrir quando ocorreram conflitos, você pode procurar por "Mesclar arquivo com conflito" em **Configurações → Sincronizar → Sincronizar atividade → Exibir**.

# Obsidian Sync excluiu uma nota que acabei de criar em dois dispositivos

Geralmente, o Obsidian Sync tenta [[#Resolução de conflitos|resolver conflitos]] entre dispositivos mesclando o conteúdo das notas conflitantes. Infelizmente, mesclar notas conflitantes pode causar problemas para usuários que geram notas automaticamente na inicialização, por exemplo, usando notas diárias.

Se uma nota foi criada localmente em um dispositivo menos de alguns minutos antes do Sync baixar uma versão remota dessa nota, o Sync mantém a versão remota sem tentar mesclar as duas. Você ainda pode recuperar a versão local usando [[Recuperação de arquivos]].

## O que significa o erro `limite de cofre excedido`?

Seu cofre excede o [[Limitações#Qual o tamanho de cada cofre remoto|tamanho máximo de 10 GB]].

Como os anexos e o histórico de versões contribuem para o tamanho total do cofre, ele pode exceder o tamanho máximo, mesmo que o tamanho real do cofre seja menor que o limite.

Para identificar e limpar arquivos grandes do cofre:

1. Abra **Configurações → Sincronizar**.
2. Explore as opções em **Tamanho do cofre acima do limite** para saber como reduzir o tamanho do seu cofre.