---
permalink: import/airtable
cssclasses:
  - soft-embed
---
O Obsidian permite migrar seus dados do Airtable usando o [[Importador|plugin Importador]]. Isso converterá suas bases do Airtable em arquivos Markdown duráveis que você pode usar offline com o Obsidian e muitos outros aplicativos.

Cada tabela se torna uma pasta de notas com uma nota por registro, além de um arquivo [[Introdução ao Bases|Base]] que recria a tabela e suas visualizações. Como utiliza a API do Airtable, a importação requer um token de acesso pessoal e uma conexão com a internet.

## Criar um token de acesso pessoal do Airtable

Para acessar seus dados do Airtable via API, você precisa de um token de acesso pessoal. Esta etapa leva cerca de dois minutos para ser concluída.

O token é uma longa sequência de números e letras que geralmente começa com `pat...` e permitirá que você baixe seus dados do Airtable.

1. Faça login no Airtable e acesse a página de [Tokens de acesso pessoal](https://airtable.com/create/tokens) nas configurações da sua conta.
2. Escolha **Create new token**.
3. Dê um nome ao seu token, por exemplo, "Obsidian". Qualquer nome pode ser usado.
4. Em **Scopes**, adicione `data.records:read` e `schema.bases:read`.
5. Em **Access**, adicione as bases que deseja importar, ou escolha todas as bases em um workspace.
6. Escolha **Create token** e depois **Copy** para copiar o token.
7. Salve o token em um local seguro, como seu gerenciador de senhas.

O Airtable mostra o token apenas uma vez. Se você perdê-lo, crie um novo.

## Importar seus dados do Airtable

Você precisará do plugin oficial [[Importador]] do Obsidian, que pode ser [instalado aqui](obsidian://show-plugin?id=obsidian-importer).

1. Abra as **[[Configurações]]**.
2. Vá para **Plugins da comunidade** e [instale o Importador](obsidian://show-plugin?id=obsidian-importer).
3. Ative o plugin Importador.
4. Abra o plugin **Importador** usando a paleta de comandos ou o ícone na faixa de opções.
5. Em **Formato de arquivo**, selecione **Airtable**.
6. Em **Token de Acesso Pessoal do Airtable**, clique em **Vincular...** para adicionar um novo segredo. Para o **ID**, dê um nome como `airtable`, e para o **Segredo** cole seu token de acesso pessoal.
7. Clique em **Carregar** para navegar pelas suas bases e selecione as tabelas que deseja importar.
8. Revise e edite as opções de importação.
9. Selecione **Importar** para configurar como seus campos serão convertidos em notas com [[Propriedades|propriedades]].
10. Clique em **Continuar** e aguarde até que a importação seja concluída.
11. Pronto!

### Opções de importação

- **Converter fórmulas** — escolha se os campos de fórmula, lookup, rollup e contagem serão reescritos como [[Fórmulas|fórmulas do Bases]], recorrendo ao valor calculado pelo Airtable quando não houver equivalente, ou importados apenas como valores estáticos.
- **Baixar anexos** — salva os arquivos de anexo no seu cofre, usando as configurações de pasta de anexos e formato de link. Quando desativado, ou quando um download falhar, a nota vincula à URL do arquivo no Airtable.
- **Nome da propriedade de visualização** — a propriedade que registra a quais visualizações do Airtable um registro pertence. Cada visualização no Base gerado filtra por esta propriedade. O padrão é `base`.
- **Importação incremental** — adiciona uma propriedade `airtable-id` a cada nota para que uma importação posterior possa pular registros que já foram importados. Em uma importação completa, esta propriedade é removida novamente.

## Configurar como os campos do Airtable são importados

Na segunda etapa da importação, você pode escolher como cada campo é importado.

Cada campo nas suas tabelas recebe uma variável chamada `{{field_name}}`. Por padrão, cada campo se torna uma propriedade, e você pode usar essas variáveis para renomear propriedades, alterar seus valores ou escrever conteúdo no corpo de cada nota.

O campo primário de cada tabela é sempre usado como título da nota, e os registros são sempre colocados em uma pasta com o nome da tabela, portanto essas opções não são configuráveis.

## O que é importado

Para uma base chamada `Projects` com uma tabela `Tasks`, o importador cria:

```
Airtable/
	Projects/
		Tasks.base
		Tasks/
			Write the proposal.md
			Review the draft.md
```

- Uma nota por registro, com o campo primário como título da nota e os outros campos do registro como [[Propriedades|propriedades]].
- Um arquivo `.base` por tabela, com cada visualização do Airtable mapeada para uma [[Visualizações|visualização do Bases]]:
	- **Grid** se torna uma [[Visualização de tabela]].
	- **Gallery** se torna [[Visualização de cartões]].
	- **List** se torna uma [[Visualização de lista]].
	- Todos os outros tipos de visualização são convertidos para visualização de tabela.
- Os tipos de campo do Airtable são mapeados para tipos de propriedade do Obsidian, sem sobrescrever tipos que você já tenha definido.
- Registros vinculados se tornam links para as notas correspondentes.
- Anexos são baixados para o seu cofre usando as configurações do cofre.

## Limitações

> [!info] A importação do Airtable é nova
> O importador do Airtable é novo. Se você encontrar problemas com a conversão, [envie um relatório de bug](https://github.com/obsidianmd/obsidian-importer/issues) para que possamos melhorá-lo.

Devido aos limites de taxa da API do Airtable, importar bases grandes pode levar um tempo considerável. Por favor, tenha paciência.

Devido a limitações na API do Airtable, alguns dados não estão disponíveis ou não podem ser convertidos:

- Valores de rollup não são importados. A API não expõe a agregação usada para o valor calculado de um rollup, então apenas o nome da propriedade é escrito, junto com uma fórmula do Bases quando o esquema do campo expõe uma expressão.
- Fórmulas que usam funções para as quais o Obsidian não tem equivalente, como `SWITCH`, `FIND`, `REGEX_EXTRACT` e `SQRT`, recorrem ao valor estático do Airtable.
- Apenas visualizações de grid, gallery e list são importadas. Outros tipos de visualização, como calendário, kanban, linha do tempo e Gantt, são ignorados.
- Links para registros em tabelas que você não selecionou se tornam o título simples do registro em vez de um link.
- Designs de interface, automações, comentários e histórico de revisões não são importados.
