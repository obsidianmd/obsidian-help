---
permalink: plugins/note-composer
aliases:
  - Plugins/Compositor de notas
---
O [[Plugins nativos|Compositor de notas]] é um [[Plugins nativos|plugin nativo]] que permite mesclar duas notas ou extrair parte de uma nota em uma nova nota.

## Mesclar notas

Mesclar notas adiciona uma nota a outra e remove a primeira. O Compositor de notas atualiza todos os links para referenciar a nota mesclada.

Ao selecionar a nota na qual deseja mesclar, você pode escolher entre os seguintes métodos:

- `Enter`: Adiciona a nota de origem no _final_ da nota de destino.
- `Shift+Enter`: Adiciona a nota de origem no _início_ da nota de destino.
- `Ctrl+Enter` (ou `Cmd+Enter` no macOS): Cria uma nova nota com o conteúdo da nota de origem.

Para mesclar a nota ativa com outra nota em seu cofre:

**Explorador de arquivos**

1. No Explorador de arquivos, clique com o botão direito na nota que deseja mesclar.
2. Clique em **Mesclar o arquivo todo com...**.
3. Selecione a nota na qual deseja mesclar.
4. Clique em **Mesclar** para confirmar.

**Paleta de comandos**

1. Abra a [[Paleta de comandos]].
2. Selecione **Compositor de notas: Mesclar arquivo atual com outro arquivo...**.
3. Selecione a nota na qual deseja mesclar.
4. Clique em **Mesclar** para confirmar.

> [!tip] Dica
> Por padrão, o Compositor de notas solicita confirmação ao mesclar notas. Se você desativar a confirmação e mesclar uma nota por engano, ainda poderá recuperá-la com o plugin [[Recuperação de arquivos]].

## Extrair nota

Ao selecionar a nota para a qual deseja extrair a seleção, você pode escolher entre os seguintes métodos:

- `Enter`: Adiciona o texto selecionado no _final_ da nota de destino.
- `Shift+Enter`: Adiciona o texto selecionado no _início_ da nota de destino.
- `Ctrl+Enter` (ou `Cmd+Enter` no macOS): Cria uma nova nota com o texto selecionado.

Para extrair texto em uma nova nota:

**Editor**

1. No **Editor**, selecione o texto que deseja extrair.
2. Clique com o botão direito no texto selecionado.
3. Clique em **Extrair seleção atual...**.
4. Selecione a nota para a qual deseja extrair.

**Paleta de comandos**

1. No **Editor**, selecione o texto que deseja extrair.
2. Abra a [[Paleta de comandos]].
3. Selecione **Compositor de notas: Extrair seleção atual...**.
4. Selecione a nota para a qual deseja extrair.

> [!tip] Dica
> Por padrão, o Compositor de notas substitui o texto extraído por um link para a nota de destino. Nas configurações, você também pode alterar para [[Incorporar arquivos|incorporar]] a nota de destino, ou não deixar nada no lugar.

## Arquivo de modelo

Ao configurar um modelo, você pode personalizar o conteúdo antes de adicioná-lo à nova nota. Para usar um modelo, insira uma **Localização do arquivo de modelo** nas configurações do plugin.

O modelo pode conter as seguintes variáveis:

| Variável           | Descrição                                                                                                                                                    |
|--------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `{{content}}`      | O conteúdo para mesclar, ou a seleção de texto extraída. Se você não incluir esta variável, o Compositor de notas adiciona o conteúdo no final do modelo.    |
| `{{fromTitle}}`    | Nome da nota de origem.                                                                                                                                      |
| `{{newTitle}}`     | Nome da nota de destino. Por exemplo, para adicionar o nome do arquivo como cabeçalho no topo do arquivo.                                                    |
| `{{date:FORMAT}}`  | Data de criação da nova nota. Por exemplo, `{{date:YYYY-MM-DD}}`.                                                                                            |
