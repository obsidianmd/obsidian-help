---
permalink: import/airtable
---
O Obsidian permite-lhe migrar os seus dados do Airtable utilizando o [[Importador|plugin Importador]]. Isto irá converter as suas bases do Airtable em ficheiros Markdown duráveis que pode usar offline com o Obsidian e muitas outras aplicações.

Cada tabela torna-se uma pasta de notas com uma nota por registo, mais um ficheiro [[Introdução ao Bases|Base]] que recria a tabela e as suas vistas. Como utiliza a API do Airtable, a importação requer um token de acesso pessoal e uma ligação à internet.

## Criar um token de acesso pessoal do Airtable

Para aceder aos seus dados do Airtable através da API, precisa de um token de acesso pessoal. Este passo demora cerca de dois minutos a concluir.

O token é uma cadeia longa de números e letras que tipicamente começa com `pat...` e que lhe permitirá transferir os seus dados do Airtable.

1. Inicie sessão no Airtable e vá à página [Personal access tokens](https://airtable.com/create/tokens) nas definições da sua conta.
2. Escolha **Create new token**.
3. Dê um nome ao seu token, por exemplo, "Obsidian". Qualquer nome pode ser usado.
4. Em **Scopes**, adicione `data.records:read` e `schema.bases:read`.
5. Em **Access**, adicione as bases que pretende importar, ou escolha todas as bases numa área de trabalho.
6. Escolha **Create token** e depois **Copy** para copiar o token.
7. Guarde o token num local seguro como o seu gestor de palavras-passe.

O Airtable só mostra o token uma vez. Se o perder, crie um novo.

## Importar os seus dados do Airtable

Vai precisar do plugin oficial [[Importador]] do Obsidian, que pode [instalar aqui](obsidian://show-plugin?id=obsidian-importer).

1. Abra as **[[Definições]]**.
2. Vá a **Plugins da comunidade** e [instale o Importador](obsidian://show-plugin?id=obsidian-importer).
3. Ative o plugin Importador.
4. Abra o plugin **Importador** usando a paleta de comandos ou o ícone na barra de ferramentas.
5. Em **File format** selecione **Airtable**.
6. Em **Airtable Personal Access Token**, clique em **Ligar...** para adicionar um novo segredo. Para o **ID**, dê-lhe um nome como `airtable`, e para o **Segredo** cole o seu token de acesso pessoal.
7. Clique em **Carregar** para navegar pelas suas bases e depois selecione as tabelas que pretende importar.
8. Reveja e edite as opções de importação.
9. Selecione **Import** para configurar como os seus campos serão convertidos em notas com [[Propriedades|propriedades]].
10. Clique em **Continuar** e aguarde até que a importação esteja concluída.
11. Está feito!

### Opções de importação

- **Convert formulas** — escolha se os campos de fórmula, lookup, rollup e contagem são reescritos como [[Fórmulas|fórmulas do Bases]], recorrendo ao valor calculado pelo Airtable quando não existe equivalente, ou importados apenas como valores estáticos.
- **Transferir anexos** — guarda os ficheiros de anexos no seu cofre, utilizando as definições de pasta de anexos e formato de ligação. Quando desativado, ou quando uma transferência falha, a nota liga ao URL do ficheiro no Airtable.
- **View property name** — a propriedade que regista a que vistas do Airtable um registo pertence. Cada vista no Base gerado filtra por esta propriedade. O valor predefinido é `base`.
- **Incremental import** — adiciona uma propriedade `airtable-id` a cada nota para que uma importação posterior possa ignorar registos que já foram importados. Numa importação completa, esta propriedade é removida novamente.

## Configurar como os campos do Airtable são importados

No segundo passo da importação, pode escolher como cada campo é importado.

Cada campo nas suas tabelas tem atribuída uma variável chamada `{{field_name}}`. Por predefinição, cada campo torna-se uma propriedade, e pode usar estas variáveis para renomear propriedades, alterar os seus valores ou escrever conteúdo no corpo de cada nota.

O campo primário de cada tabela é sempre usado como título da nota, e os registos são sempre colocados numa pasta com o nome da sua tabela, pelo que essas opções não são configuráveis.

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

- Uma nota por registo, com o campo primário como título da nota e os outros campos do registo como [[Propriedades|propriedades]].
- Um ficheiro `.base` por tabela, com cada vista do Airtable mapeada para uma [[Vistas|vista do Bases]]:
	- **Grid** torna-se uma [[Vista de Tabela]].
	- **Gallery** torna-se [[Vista de Cartões]].
	- **List** torna-se uma [[Vista de Lista]].
	- Todos os outros tipos de vista são convertidos para vista de tabela.
- Os tipos de campo do Airtable são mapeados para tipos de propriedade do Obsidian, sem substituir tipos que já tenha definido.
- Registos ligados tornam-se ligações para as notas correspondentes.
- Os anexos são transferidos para o seu cofre utilizando as definições do cofre.

## Limitações

> [!info] A importação do Airtable é nova
> O importador do Airtable é novo. Se encontrar problemas com a conversão, [submeta um relatório de erro](https://github.com/obsidianmd/obsidian-importer/issues) para que possamos melhorá-lo.

Devido aos limites de taxa da API do Airtable, importar bases grandes pode demorar bastante tempo. Por favor, seja paciente.

Devido a limitações na API do Airtable, alguns dados não estão disponíveis ou não podem ser convertidos:

- Os valores de rollup não são importados. A API não expõe a agregação usada para o valor calculado de um rollup, pelo que apenas o nome da propriedade é escrito, juntamente com uma fórmula do Bases quando o esquema do campo expõe uma expressão.
- Fórmulas que usam funções para as quais o Obsidian não tem equivalente, como `SWITCH`, `FIND`, `REGEX_EXTRACT` e `SQRT`, recorrem ao valor estático do Airtable.
- Apenas vistas de grid, gallery e list são importadas. Outros tipos de vista, como calendário, kanban, timeline e Gantt, são ignorados.
- Ligações para registos em tabelas que não selecionou tornam-se o título simples do registo em vez de uma ligação.
- Designs de interface, automatizações, comentários e histórico de revisões não são importados.
