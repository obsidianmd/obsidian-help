---
permalink: ios
aliases:
  - Obsidian/Aplicativo iOS
---
O aplicativo móvel Obsidian para iOS e iPadOS traz recursos poderosos de anotações para seu iPhone e iPad. Você pode baixá-lo na [Apple App Store](https://apps.apple.com/us/app/obsidian-connected-notes/id1557175442).

Esta página aborda recursos específicos do iOS, incluindo widgets, integração com Siri e Atalhos.

## Sincronização

Para informações sobre sincronizar notas entre dispositivos, consulte [[Sincronizar suas notas entre dispositivos]].

## Widgets

O Obsidian para iOS oferece vários widgets para realizar ações rápidas no seu cofre.

> [!note] Nota
> Widgets estão disponíveis no iOS e iPadOS 18 e superior.
> Widgets não estão disponíveis ao usar "Exigir Face ID" para desbloquear o aplicativo.


### Widgets da Tela de Bloqueio e Central de Controle

Os widgets da Tela de Bloqueio e Central de Controle permitem:
- Criar uma nova nota
- Abrir uma nota específica
- Abrir nota diária
- Abrir pesquisa
- Abrir o Obsidian

### Widgets da Tela Inicial

Os widgets da Tela Inicial permitem:
- Criar uma nota
- Visualizar uma nota
- Abrir sua nota diária

### Personalizando widgets

Você pode personalizar widgets para se adequar ao seu fluxo de trabalho, como escolher qual cofre usar ou especificar uma nota particular para abrir.

- **Widgets da Tela Inicial:** Toque e segure o widget, depois selecione **Editar Widget**.
- **Widgets da Tela de Bloqueio:** Toque e segure sua Tela de Bloqueio, toque em **Personalizar**, selecione a Tela de Bloqueio e depois toque no widget que deseja personalizar.
- **Widgets da Central de Controle:** Abra a Central de Controle, toque no botão **+** no canto superior esquerdo para começar a editar, depois toque no widget que deseja personalizar.

Opções de configuração do widget **Nova Nota**:

![[ios-new-note-configuration.png|400]]

Opções de configuração do widget **Visualizar Nota**:

![[ios-view-note-configuration.png|400]]

## Atalhos

O Obsidian se integra com o aplicativo Atalhos da Apple, permitindo criar automações poderosas. Os atalhos disponíveis incluem:

- **Abrir uma nota** — Abrir uma nota específica no seu cofre
- **Criar uma nova nota** — Criar uma nova nota no seu cofre
- **Abrir nota diária** — Ir diretamente para a nota diária de hoje
- **Capturar na Nota Diária** — Adicionar texto ao final ou início da nota diária sem abrir o aplicativo Obsidian
- **Capturar no Marcador** — Adicionar texto ao final ou início de uma nota marcada sem abrir o aplicativo Obsidian

Os atalhos de captura são particularmente úteis para anotações rápidas, pois permitem adicionar conteúdo a uma nota em segundo plano.

## Folha de Compartilhamento

A Folha de Compartilhamento do Obsidian permite capturar conteúdo de páginas web. Também funciona com aplicativos como YouTube e outras redes sociais.

> [!note]
> - A Folha de Compartilhamento nativa está disponível no iOS e iPadOS 18 e superior.
> - Os recursos da Folha de Compartilhamento descritos nesta seção requerem o Obsidian 1.13.0 ou posterior.

Use a Folha de Compartilhamento para enviar rapidamente conteúdo de outro aplicativo para o Obsidian:
1. Em outro aplicativo, toque no botão **Compartilhar**.
2. Selecione **Obsidian**.
3. Escolha um Local.
4. Revise ou edite o conteúdo capturado.
5. Toque em **Salvar**.

![[ios-share-sheet-extension.png|400]]

### Locais

Os Locais permitem decidir para onde o conteúdo compartilhado deve ir antes de salvá-lo.

Os Locais podem capturar para:
- **Nova nota** — Criar uma nova nota em um cofre ou pasta.
- **Nota diária** — Adicionar conteúdo ao final ou início da nota diária de hoje.
- **Nota marcada** — Adicionar conteúdo ao final ou início de uma nota marcada.
- **Nota** — Escolher uma nota existente no seu cofre.
- **Novo marcador** — Salvar uma URL compartilhada nos marcadores do Obsidian.

![[ios-share-sheet-locations.png|400]]

### Personalizando Locais

Você pode criar Locais para fluxos de trabalho comuns, como salvar artigos em uma caixa de entrada, adicionar citações à sua nota diária ou adicionar links aos marcadores.

Para personalizar Locais:

1. Abra o Obsidian a partir da Folha de Compartilhamento do iOS.
2. Toque no Local atual na barra de ferramentas.
3. Toque no botão **+** para criar um novo Local, ou selecione um Local existente para editar.
4. Escolha o cofre, comportamento e configurações opcionais.

Dependendo do tipo de `Comportamento`, você pode configurar opções como:
- Pasta
- Modelo
- Grupo de marcadores
- Posição de adicionar ao final ou início
- Se os links compartilhados capturam o **Texto Completo** ou apenas a **URL**

![[ios-share-sheet-add-location.png|400]]

### Usando um Modelo ao Compartilhar

Você pode usar um modelo ao compartilhar conteúdo da Folha de Compartilhamento. Os modelos permitem formatar o conteúdo web capturado com detalhes como título da página, autor, site de origem e data de publicação.

Para configurar um Local com um modelo:

1. Abra o Obsidian a partir da Folha de Compartilhamento do iOS.
2. Toque no Local atual na barra de ferramentas.
3. Toque no botão **+** para criar um novo Local.
4. Insira um nome para o Local.
5. Selecione um cofre.
6. Defina **Comportamento** como **Nova Nota**.
7. Na seção **Opcional**, toque em **Modelo**.
8. Selecione uma nota do seu cofre para usar como modelo.
9. Toque em **Salvar** para salvar o Local.

![[ios-share-sheet-set-template.png|400]]

Quando você compartilhar um link usando este Local, o Obsidian aplica o modelo primeiro e depois adiciona o conteúdo compartilhado.

Marcadores de posição de modelo suportados:

| Marcador de posição | Descrição |
| --- | --- |
| `{{author}}` | Autor do artigo |
| `{{description}}` | Descrição ou resumo do artigo |
| `{{domain}}` | Nome de domínio do site |
| `{{favicon}}` | URL do favicon do site |
| `{{image}}` | URL da imagem principal do artigo |
| `{{published}}` | Data de publicação do artigo, usando o formato de data padrão |
| `{{published: YYYY-MM-DD}}` | Data de publicação usando um formato de data personalizado |
| `{{site}}` | Nome do site |
| `{{title}}` | Título do artigo |
| `{{url}}` | URL do artigo |
| `{{wordCount}}` | Número total de palavras no conteúdo extraído |

Você também pode usar marcadores de posição padrão de data e hora do modelo:

| Marcador de posição | Descrição |
| --- | --- |
| `{{date}}` | Data atual |
| `{{date: YYYY-MM-DD}}` | Data atual usando um formato personalizado |
| `{{time}}` | Hora atual |
| `{{time: HH:mm}}` | Hora atual usando um formato personalizado |

## Integração com Siri

Você pode usar comandos de voz da Siri para interagir com o Obsidian:

- "Capturar usando Obsidian"
- "Capturar no Obsidian"
- "Abrir minha nota diária no Obsidian"
- "Pesquisar no Obsidian"

## Integração com Spotlight

Quando você pesquisar por "Obsidian" no Spotlight do iOS, verá ações rápidas:
- Nova Nota
- Pesquisar
- Nota Diária
