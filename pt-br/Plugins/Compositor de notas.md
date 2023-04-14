O compositor de notas permite que você realize a fusão entre duas notas ou extraia parte de uma nota em uma nova nota.

## Fundir notas

Fundir notas adiciona uma nota em outra e remove a primeira. O compositor de notas atualiza todos o links para referenciarem a nota fundida.

Quando você seleciona uma nota para ser fundida, você pode escolher os seguintes métodos:

- `Enter`: Adiciona a nota de origem no final da nota de destino.
- `Shift+Enter`: Adiciona a nota de origem no início da nota de destino.
- `Ctrl+Enter` (or `Cmd+Enter` on macOS): Cria uma nova nota com o conteúdo da nota de origem.

Para fundir a nota ativa com outra nota do seu cofre:

**Explorador de arquivos**

1. No explorador de arquivos, clique com o direito na nota que você deseja mesclar.
2. Clique **Mesclar o arquivo todo com...**
3. Selecione a nota que você deseja mesclar.
4. Clique **Mesclar** para confirmar.

**Paleta de comandos**

1. Abra a [[pt-br/Plugins/Paleta de comandos]].
2. Selecione **Mesclar o arquivo atual com outro arquivo...**.
3. Selecione a nota que você deseja mesclar.
4. Clique **Mesclar** para confirmar.

> [!dica]
> Por padrão, o compositor de notas solicitará confirmação antes de mesclar as notas. Se você desabilitar o modo de confirmação, e você mesclar uma nota acidentalmente, você pode recuperá-la com o plugin [[Recuperação de arquivos]].

## Extrair nota

Ao selecionar uma nota para realizar a extração de uma seleção, você pode escolher entre um dos seguintes métodos:

- `Enter`: Adiciona o texto selecionado no final da nota de destino.
- `Shift+Enter`: Adiciona o texto selecionado no início da nota de destino.
- `Ctrl+Enter` (ou `Cmd+Enter` no macOS): Cria uma nova nota com o texto selecionado.

Para extrair o texto em uma nova nota:

**Editor**

1. Enquanto estiver no modo de **Visualização de edição**, selecione o texto que você deseja extrair.
2. Clique com o direito no texto selecionado.
3. Clique **Extrair seleção atual...**.
4. Selecione a nota de destino.

**Paleta de comandos**

1. Enquanto estiver no modo de **Visualização de edição**, selecione o texto que você deseja extrair.
2. Abra a [[pt-br/Plugins/Paleta de comandos]].
3. Select **Note composer: Extract current selection...**.
4. Selecione **Compositor de notas: Extrair seleção atual...**.
5. Selecione a nota de destino.

> [!dica]
> Por padrão o compositor de notas substituir o texto extraido com o link da nota de destino. nas configurações, você pode configurar para [[en/Linking notes and files/Embedding files|incorporar]] a nota de destino ou deixar sem nada de referência.

## Arquivo modelo

Ao configurar um modelo, você  pode customizar o conteúdo antes de adicioná-lo em uma nova nota. Para usar o modelo, configure uma **Localização de arquivos modelo** nas configurações do plugin.

O modelo pode conter as seguintes variáveis:

| Variável         | Descrição                                                                                                                                              |
|-------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------|
| `{{content}}`     | O conteúdo para mesclar, ou a seleção de texto extraída. Se você não incluir essa variável, o compositor de notas adiciona o conteúdo no final do modelo. |
| `{{fromTitle}}`   | Nome da nota de origem.                                                                                                                              |
| `{{newTitle}}`    | Nome da nota de destino. Por exemplo, para adicionar o nome do arquivo como cabeçalho no topo do arquivo.                                                    |
| `{{date:FORMAT}}` | Data de criação da nova nota. Por exemplo, `{{date:YYYY-MM-DD}}`.                                                                                 |
