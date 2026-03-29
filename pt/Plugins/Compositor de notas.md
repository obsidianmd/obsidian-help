---
permalink: plugins/note-composer
---
O [[Compositor de notas]] é um [[Plugins Base|plugin principal]] que lhe permite mesclar duas notas ou extrair parte de uma nota para uma nova nota.

## Mesclar notas

Mesclar notas adiciona uma nota a outra e remove a primeira. O compositor de notas atualiza todas as ligações para referenciar a nota mesclada.

Quando seleciona a nota na qual pretende mesclar, pode escolher entre os seguintes métodos:

- `Enter`: Adiciona a nota de origem no _final_ da nota de destino.
- `Shift+Enter`: Adiciona a nota de origem no _início_ da nota de destino.
- `Ctrl+Enter` (ou `Cmd+Enter` no macOS): Cria uma nova nota com o conteúdo da nota de origem.

Para mesclar a nota ativa com outra nota no seu cofre:

**Explorador de ficheiros**

1. No explorador de ficheiros, clique com o botão direito na nota que pretende mesclar.
2. Clique em **Fundir o ficheiro inteiro com...**.
3. Selecione a nota na qual pretende mesclar.
4. Clique em **Mesclar** para confirmar.

**Paleta de comandos**

1. Abra a [[Paleta de comando]].
2. Selecione **Compositor de notas: Fundir ficheiro atual com outro ficheiro...**.
3. Selecione a nota na qual pretende mesclar.
4. Clique em **Mesclar** para confirmar.

> [!tip] Dica
> Por predefinição, o compositor de notas pede-lhe confirmação ao mesclar notas. Se desativar a confirmação e mesclar uma nota por engano, ainda pode recuperá-la com o plugin [[Recuperação de ficheiros]].

## Extrair nota

Quando seleciona a nota para a qual pretende extrair a seleção, pode escolher entre os seguintes métodos:

- `Enter`: Adiciona o texto selecionado no _final_ da nota de destino.
- `Shift+Enter`: Adiciona o texto selecionado no _início_ da nota de destino.
- `Ctrl+Enter` (ou `Cmd+Enter` no macOS): Cria uma nova nota com o texto selecionado.

Para extrair texto para uma nova nota:

**Editor**

1. Enquanto estiver na vista de **Editor**, selecione o texto que pretende extrair.
2. Clique com o botão direito no texto selecionado.
3. Clique em **Extrair seleção atual...**.
4. Selecione a nota para a qual pretende extrair.

**Paleta de comandos**

1. Enquanto estiver na vista de **Editor**, selecione o texto que pretende extrair.
2. Abra a [[Paleta de comando]].
3. Selecione **Compositor de notas: Extrair seleção atual...**.
4. Selecione a nota para a qual pretende extrair.

> [!tip] Dica
> Por predefinição, o compositor de notas substitui o texto extraído por uma ligação para a nota de destino. Nas definições, também pode alterar para [[Incorporar ficheiros|incorporar]] a nota de destino, ou para não deixar nada no lugar.

## Ficheiro modelo

Ao configurar um modelo, pode personalizar o conteúdo antes de o adicionar à nova nota. Para usar um modelo, introduza uma **Localização do ficheiro modelo** nas definições do plugin.

O modelo pode conter as seguintes variáveis:

| Variável          | Descrição                                                                                                                                                     |
|-------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `{{content}}`     | O conteúdo para mesclar, ou a seleção de texto extraída. Se não incluir esta variável, o compositor de notas adiciona o conteúdo no final do modelo.          |
| `{{fromTitle}}`   | Nome da nota de origem.                                                                                                                                       |
| `{{newTitle}}`    | Nome da nota de destino. Por exemplo, para adicionar o nome do ficheiro como cabeçalho no topo do ficheiro.                                                   |
| `{{date:FORMAT}}` | Data de criação da nova nota. Por exemplo, `{{date:YYYY-MM-DD}}`.                                                                                             |
