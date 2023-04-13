Você pode usar modelos para inserir trechos pré-definidos de texto na sua nota ativa.

## Definir a pasta de modelos

1. No canto inferior esquerdo clique em **Configurações** (icone de engrenagem).
3. Em **Plugins nativos > Modelos > Localização da Pasta de Modelos**, insira a pasta que contém os seus modelos.

## Insira o modelo na nota ativa

**Importante:** Para inserir um modelo, você precisa primeiro [[#Definir a pasta de modelos]].

1. Na fita, clique em **Inserir modelo**.
3. Selecione o modelo para inserir na posição do cursor na nota ativa.

Se sua pasta de modelso contém apenas uma nota, a função inserir modelo vai inserir diretamente na nota ativa.

## Variáveis de modelo

Você pode adicionar informação dinâmica no seu modelo, usando variáveis de modelo. Quando você insere um modelo contendo uma variável de modelo, o modelo substituir a variável pelo valor correspondente.

| Variável    | Descrição                                     |
|-------------|-------------------------------------------------|
| `{{title}}` | Título da nota ativa.                       |
| `{{date}}`  | Data de hoje. **Formato padrão:** `YYYY-MM-DD`. |
| `{{time}}`  | Horário atual. **Formato padrão:** `HH:mm`.      |

Ambos `{{date}}` e `{{time}}` permitem que você mude o formato padrão usando uma string de formato.

Para configurar uma string de formato, adicione dois pontos (`:`) seguidos de uma string de [Moment.js format tokens](https://momentjs.com/docs/#/displaying/format/), por exemplo `{{date:DD-MM-YYYY}}`.

Você pode usar `{{date}}` e `{{time}}` intercambiavelmente com string de formato, por exemplo `{{time:YYYY-MM-DD}}`.

Você pode usar o padrão de formato de data e horário em **Configurações > Modelos > Formato de data** e **Configurações > Modelos > Formato do horário**.

> [!dica]
> Você pode usar as variáveis de modelo `{{date}}` e `{{time}}` nas [[Notas diárias]] e no plugin de [[Criador de notas únicas]].

