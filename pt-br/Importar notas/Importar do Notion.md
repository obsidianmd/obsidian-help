---
permalink: import/notion
---
O Obsidian permite que você migre facilmente suas notas do Notion usando o [[Importador|plugin Importador]]. Isso converterá seus dados do Notion em arquivos Markdown duráveis que você pode usar offline com o Obsidian e muitos outros aplicativos.

O Obsidian oferece duas maneiras de importar seus dados do Notion:

1. **Importação via API** preserva todo o seu workspace incluindo Databases e fórmulas que são convertidas para [[Introdução ao Bases|Bases]], mas requer um token de integração do Notion e uma conexão com a internet.
2. **Importação de arquivo** não preserva Databases, mas não requer um token de API nem conexão com a internet.

## Importação via API

### Criar um token de integração da API do Notion

Para acessar seus dados do Notion via API, você precisa de um token de integração. Esta etapa leva cerca de 2 minutos para ser concluída.

O token é uma longa sequência de números e letras que geralmente começa com `ntn_...` que permitirá que você baixe seus dados do Notion.

1. Entre no seu painel de [Integrações do Notion](https://www.notion.so/profile/integrations/internal).
2. Escolha **New integration**.

![[notion-integration.png#interface]]

2. Dê um nome à sua integração, por exemplo, "Pessoal". Qualquer nome pode ser usado.
3. Escolha o workspace que você deseja exportar.
4. Clique em **Save** e continue para **Configure integration settings**.
5. Na aba **Configuration**, seu token de API está acessível no campo **Internal Integration Secret**.
6. Selecione **Show** e depois **Copy**.
7. Salve o token em um local seguro, como seu gerenciador de senhas.

![[notion-token.png#interface]]

Em seguida, dê à sua integração acesso às páginas e databases do Notion que você deseja importar.

1. Vá para a aba **Access** da integração que você acabou de criar.
2. Clique em **Edit access**.
3. Adicione as páginas e databases que você deseja importar.

Agora você pode converter seus dados usando o Importador do Obsidian.

### Importar seus dados do Notion via API

Você precisará do plugin oficial [[Importador]] do Obsidian, que você pode [instalar aqui](obsidian://show-plugin?id=obsidian-importer).

1. Abra **[[Configurações]]**.
2. Vá para **Plugins da comunidade** e [instale o Importador](obsidian://show-plugin?id=obsidian-importer).
3. Ative o plugin Importador.
4. Abra o plugin **Importador** usando a paleta de comandos ou o ícone do menu lateral.
5. Em **Formatar** selecione **Notion (API)**
6. Em **API token**, cole seu **Internal Integration Secret** do Notion.
7. Clique em **Carregar** para escolher os databases e páginas que você deseja importar.
8. Revise e edite as opções de importação.
9. Selecione **Import** e aguarde até que a importação seja concluída
10. Pronto!

### Limitações

> [!info] A importação via API é nova
> O importador via API do Notion é novo. Devido à complexidade dos workspaces do Notion, alguns casos extremos podem não ter sido considerados. Se você encontrar problemas com a conversão, [envie um relatório de bug](https://github.com/obsidianmd/obsidian-importer/issues) para que possamos melhorá-lo.

Devido aos limites de taxa da API do Notion, a importação de workspaces grandes pode levar um tempo considerável. Por favor, tenha paciência.

Devido a limitações na API do Notion, alguns dados não estão disponíveis ou não podem ser convertidos:

- Apenas a visualização principal de cada database é importada.
- [Fontes de dados vinculadas](https://developers.notion.com/docs/working-with-databases#additional-types-of-databases) não são importadas: *"A API do Notion atualmente não suporta fontes de dados vinculadas. Ao compartilhar um database com sua integração, certifique-se de que ele contém a fonte de dados original!"*
- Funções de `People`: `name()` e `email()`
- Funções de `Text`: `style()` e `unstyle()`

Além disso, o Importador fará as seguintes alterações:

- Páginas sem subpáginas ou databases serão importadas como `[nome do arquivo].md` em vez de `[nome do arquivo]/[nome do arquivo].md`.
- Databases são sempre representados como pastas nomeadas `[nome do database]` com um arquivo `[nome do database].base` dentro.

## Importação de arquivo

A importação de arquivo é uma forma alternativa de importar seus dados do Notion. Este método não preserva Databases, mas não requer um token de API nem conexão com a internet.

### Exportar seus dados do Notion

Para preparar seus dados para importação, você precisará exportar todo o seu workspace usando o formato de exportação HTML do Notion. Recomendamos que você não use a exportação Markdown do Notion, pois ela omite dados importantes. Você deve ter acesso de administrador ao workspace do Notion para exportar todo o conteúdo do workspace.

1. Vá para **[[Configurações]]** no topo da barra lateral do Notion.
2. Em **Workspace** selecione **General**.
3. Encontre e selecione **Export all workspace content**.
4. Em **Export format** selecione **HTML**.
5. Escolha **Include everything**.
6. Ative **Create folders for subpages**.
7. Você receberá um arquivo `.zip` por e-mail ou diretamente no navegador.

![[notion-export.png#interface]]

![[notion-export-2.png#interface]]

### Importar seu arquivo .zip do Notion

Você precisará do plugin oficial [[Importador]] do Obsidian, que você pode [instalar aqui](obsidian://show-plugin?id=obsidian-importer).

1. Abra **[[Configurações]]**.
2. Vá para **Plugins da comunidade** e [instale o Importador](obsidian://show-plugin?id=obsidian-importer).
3. Ative o plugin Importador.
4. Abra o plugin **Importador** usando a paleta de comandos ou o ícone do menu lateral.
5. Em **Formatar** selecione **Notion (.zip)**
6. Escolha o arquivo `.zip` com os arquivos do Notion que você deseja importar. *É recomendado importar todo o seu Notion de uma vez para que os links internos possam ser reconciliados corretamente.*
7. _Opcionalmente_, selecione uma pasta para a importação. Suas páginas e databases do Notion serão aninhados dentro desta pasta.
8. Ative **Save parent pages in subfolders** para manter a estrutura do Notion. *Observe que no Notion você pode escrever conteúdo em Pastas; isso não é possível no Obsidian e essas páginas serão adicionadas como uma subpágina dentro da pasta.*
9. Selecione **Import** e aguarde até que a importação seja concluída
10. Pronto!

### Solução de problemas

Se você encontrar problemas ao importar do Notion:

- Certifique-se de usar **HTML** como formato de exportação no Notion, **não Markdown**.
- Se o Obsidian parecer travar durante a importação, desative os plugins da comunidade e tente novamente.

Encontrou algo diferente? Pesquise no [repositório do Importador](https://github.com/obsidianmd/obsidian-importer/issues) para ver se outros já experimentaram o mesmo problema.

#### Importando workspaces grandes

Se você está importando um workspace com vários gigabytes de dados, a exportação do Notion pode conter arquivos `.zip` aninhados. Neste caso, você pode ver uma mensagem de erro de importação parecida com esta:

```
Import failed {id}.zip/{id}-Part-1.zip undefined.
```

Se você vir este erro, pode descompactar o arquivo do Notion e então importar os arquivos `Export-{id}-Part-1.zip` aninhados.
