---
permalink: ios
---
# Obsidian para iOS e iPadOS

A aplicação móvel Obsidian para iOS e iPadOS traz poderosas capacidades de tomada de notas para o seu iPhone e iPad. Pode transferi-la a partir da [Apple App Store](https://apps.apple.com/us/app/obsidian-connected-notes/id1557175442).

Esta página cobre funcionalidades específicas do iOS, incluindo widgets, integração com Siri e Atalhos.

## Sincronização

Para informações sobre sincronização de notas entre dispositivos, consulte [[Sincronizar notas entre dispositivos]].

## Widgets

O Obsidian para iOS oferece vários widgets para realizar ações rápidas no seu cofre.

> [!note] Nota
> Os widgets estão disponíveis no iOS e iPadOS 18 e superior.
> Os widgets não estão disponíveis ao utilizar "Exigir Face ID" para desbloquear a aplicação.


### Widgets do ecrã de bloqueio e do Centro de Controlo

Os widgets do ecrã de bloqueio e do Centro de Controlo permitem-lhe:
- Abrir Captura Rápida
- Criar uma nova nota
- Abrir uma nota específica
- Abrir nota diária
- Abrir pesquisa
- Abrir Obsidian

### Widgets do ecrã principal

Os widgets do ecrã principal permitem-lhe:
- Abrir Captura Rápida
- Criar uma nota
- Visualizar uma nota
- Abrir a sua nota diária

### Personalizar widgets

Pode personalizar widgets para se adequarem ao seu fluxo de trabalho, como escolher qual cofre usar ou especificar uma nota particular para abrir.

- **Widgets do ecrã principal:** Toque e mantenha premido o widget, depois selecione **Editar Widget**.
- **Widgets do ecrã de bloqueio:** Toque e mantenha premido o ecrã de bloqueio, toque em **Personalizar**, selecione o ecrã de bloqueio e depois toque no widget que deseja personalizar.
- **Widgets do Centro de Controlo:** Abra o Centro de Controlo, toque no botão **+** no canto superior esquerdo para começar a editar e depois toque no widget que deseja personalizar.

Opções de configuração do widget **Nova Nota**:

![[ios-new-note-configuration.png|400]]

Opções de configuração do widget **Ver Nota**:

![[ios-view-note-configuration.png|400]]

## Captura Rápida

A Captura Rápida permite-lhe guardar texto no seu cofre a partir dos widgets do ecrã de bloqueio, Centro de Controlo, ecrã principal ou Atalhos sem esperar que o seu cofre carregue. Dependendo da localização de captura que selecionar, a Captura Rápida pode criar uma nova nota ou adicionar o texto a uma nota existente.

![[ios-quick-capture-view.png|400]]

> [!note] Nota
> A Captura Rápida requer o Obsidian 1.14 ou posterior e iOS ou iPadOS 26 ou posterior.

Para capturar texto:

1. Adicione o widget **Captura Rápida** ao seu ecrã de bloqueio, Centro de Controlo ou ecrã principal.
2. Toque no widget para abrir a Captura Rápida.
3. Introduza o seu texto.
4. Para alterar onde o texto será guardado, toque na localização de captura no topo do ecrã e selecione outra localização.
5. Toque na marca de verificação para guardar o texto.

**Nota**: Se as Atividades em Direto estiverem ativadas, a nota de captura rápida também aparece no ecrã de bloqueio e, em modelos de iPhone compatíveis, na Dynamic Island. Toque na barra ou na Atividade em Direto para continuar a editar.

![[ios-quick-capture-live-activity.png|400]]

### Captura por Voz

A Captura por Voz permite-lhe gravar uma nota de voz com a Captura Rápida. O Obsidian transcreve o que diz à medida que fala e pode guardar a gravação no seu cofre juntamente com a transcrição.

Para capturar uma nota de voz:

1. Abra a Captura Rápida e toque no botão do microfone no canto inferior esquerdo. A gravação começa imediatamente.
2. Dite a sua nota. A transcrição aparece na área de texto à medida que fala e pode editá-la a qualquer momento.
3. Toque no botão de gravação na parte inferior do ecrã para pausar e toque novamente para retomar.
4. Toque na marca de verificação para guardar a transcrição e a gravação na localização de captura selecionada.

![[ios-voice-capture.png|400]]

Também pode iniciar a gravação diretamente a partir de um widget. Ao personalizar um widget de Captura Rápida, escolha uma ação da secção **Captura por Voz**.

A gravação continua se minimizar a Captura Rápida ou bloquear o seu dispositivo. Durante a gravação, o ecrã de bloqueio e a Dynamic Island mostram a transcrição em direto e um temporizador. Toque no temporizador para pausar ou retomar a gravação.

![[ios-voice-capture-live-activity.png|400]]

#### Definições da Captura por Voz

Para alterar as definições da Captura por Voz, toque no ícone de engrenagem no topo do ecrã enquanto estiver na Captura por Voz.

- **Idioma**: O idioma usado para a transcrição. Consulte [[#Idiomas suportados]]. Selecione **Nenhum** para desativar a transcrição e gravar apenas áudio.
- **Microfone**: O microfone usado para a gravação, como o microfone integrado ou uns auscultadores ligados.
- **Guardar Ficheiro de Áudio**: Se a gravação deve ser guardada no seu cofre.
- **Áudio de Outras Aplicações**: O que acontece à música ou outro áudio que esteja a reproduzir quando grava: **Continuar a Reproduzir**, **Baixar Volume** ou **Pausar**. As alterações aplicam-se a partir da próxima gravação.

#### Idiomas suportados

A Captura por Voz pode transcrever fala nos seguintes idiomas. Alguns dispositivos suportam menos idiomas, e os idiomas disponíveis podem mudar com atualizações do iOS. Se o seu idioma não estiver disponível, ainda pode gravar áudio sem transcrição.

- Bangla
- Cantonês
- Chinês
- Inglês
- Francês
- Alemão
- Guzerate
- Hindi
- Italiano
- Japonês
- Canarês
- Caxemirense
- Coreano
- Maithili
- Malaiala
- Marata
- Nepali
- Odia
- Português
- Panjabi
- Espanhol
- Tâmil
- Telugu
- Urdu

### Localizações de captura

As localizações de captura determinam onde a Captura Rápida guarda o seu texto. Uma localização de captura pode:

- Criar uma nova nota numa pasta selecionada, com um modelo opcional e nome de nota personalizado.
- Anexar ou preceder o texto à sua nota diária.
- Anexar ou preceder o texto a uma nota marcada.
- Anexar ou preceder o texto a outra nota que selecionar.

Para criar uma localização de captura:
1. Abra a Captura Rápida.
2. Toque na localização de captura no topo do ecrã.
3. Toque no botão mais (+).
4. Selecione um comportamento e configure quaisquer definições opcionais.
5. Toque em **Guardar**.

Também pode usar **Abrir Nota após Captura** para escolher se o Obsidian abre a nota de destino após guardar a captura.

![[ios-quick-capture-locations.png|400]]

![[ios-quick-capture-config.png|400]]

### Modelos da Captura Rápida

Pode aplicar um modelo para formatar o texto capturado. Os modelos da Captura Rápida suportam os seguintes marcadores de posição:

| Marcador de posição | Descrição |
| --- | --- |
| `{{content}}` | Texto capturado |
| `{{date}}` | Data atual |
| `{{time}}` | Hora atual |
| `{{latitude}}` | Latitude atual |
| `{{longitude}}` | Longitude atual |
| `{{shortAddress}}` | Forma abreviada do endereço atual |
| `{{fullAddress}}` | Endereço atual completo |
| `{{googleMapsLink}}` | Ligação do Google Maps para a localização atual |
| `{{appleMapsLink}}` | Ligação do Apple Maps para a localização atual |
| `{{openStreetMapLink}}` | Ligação do OpenStreetMap para a localização atual |

Para configurar um widget de Captura Rápida para uma localização de captura específica, use os passos em [[#Personalizar widgets]]. Os widgets do ecrã principal podem apresentar múltiplas localizações de captura.

![[ios-quick-capture-widget.png|400]]

## Atalhos

O Obsidian integra-se com a aplicação Atalhos da Apple, permitindo-lhe criar automações poderosas. Os atalhos disponíveis incluem:

- **Captura Rápida** — Abrir a Captura Rápida usando uma localização de captura configurada
- **Abrir Marcador** - Abrir uma nota marcada do seu cofre
- **Abrir Nova Nota** — Criar uma nova nota no seu cofre
- **Abrir Nota Diária** — Ir diretamente para a nota diária de hoje
- **Capturar para a Nota Diária** — Anexar ou preceder texto à nota diária sem abrir a aplicação Obsidian
- **Capturar para Marcador** — Anexar ou preceder texto a uma nota marcada sem abrir a aplicação Obsidian
- **Obter Nota Marcada** — Obtém texto de uma nota marcada
- **Obter Nota Diária** — Obtém texto de uma nota diária
- **Pesquisar no Cofre** — Pesquisar no seu cofre por uma palavra-chave
- **Marcar Ligação** — Adicionar uma ligação web aos seus marcadores
- **Abrir Obsidian** — Abre o Obsidian

Os atalhos de captura são particularmente úteis para tomar notas rapidamente, pois permitem-lhe adicionar conteúdo a uma nota em segundo plano.

## Folha de Partilha

A Folha de Partilha do Obsidian permite-lhe capturar conteúdo de páginas web. Também funciona com aplicações como o YouTube e outras redes sociais.

> [!note]
> - A Folha de Partilha nativa está disponível no iOS e iPadOS 18 e superior.
> - As funcionalidades da Folha de Partilha descritas nesta secção requerem o Obsidian 1.13.0 ou posterior.

Use a Folha de Partilha para enviar rapidamente conteúdo de outra aplicação para o Obsidian:
1. Noutra aplicação, toque no botão **Partilhar**.
2. Selecione **Obsidian**.
3. Escolha uma Localização.
4. Reveja ou edite o conteúdo capturado.
5. Toque em **Guardar**.

![[ios-share-sheet-extension.png|400]]

### Localizações

As Localizações permitem-lhe decidir para onde o conteúdo partilhado deve ir antes de o guardar.

As Localizações podem capturar para:
- **Nova nota** — Criar uma nova nota num cofre ou pasta.
- **Nota diária** — Anexar ou preceder conteúdo à nota diária de hoje.
- **Nota marcada** — Anexar ou preceder conteúdo a uma nota marcada.
- **Nota** — Escolher uma nota existente no seu cofre.
- **Novo marcador** — Guardar um URL partilhado nos marcadores do Obsidian.

![[ios-share-sheet-locations.png|400]]

### Personalizar Localizações

Pode criar Localizações para fluxos de trabalho comuns, como guardar artigos numa caixa de entrada, anexar citações à sua nota diária ou adicionar ligações aos marcadores.

Para personalizar Localizações:

1. Abra o Obsidian a partir da Folha de Partilha do iOS.
2. Toque na Localização atual na barra de ferramentas.
3. Toque no botão **+** para criar uma nova Localização, ou selecione uma Localização existente para editar.
4. Escolha o cofre, comportamento e definições opcionais.

Dependendo do tipo de `Comportamento`, pode configurar opções como:
- Pasta
- Modelo
- Grupo de marcadores
- Posição de anexar ou preceder
- Se as ligações partilhadas capturam o **Texto Completo** ou apenas o **URL**

![[ios-share-sheet-add-location.png|400]]

### Usar um Modelo ao Partilhar

Pode usar um modelo ao partilhar conteúdo a partir da Folha de Partilha. Os modelos permitem-lhe formatar conteúdo web capturado com detalhes como o título da página, autor, site de origem e data de publicação.

Para configurar uma Localização com um modelo:

1. Abra o Obsidian a partir da Folha de Partilha do iOS.
2. Toque na Localização atual na barra de ferramentas.
3. Toque no botão **+** para criar uma nova Localização.
4. Introduza um nome para a Localização.
5. Selecione um cofre.
6. Defina **Comportamento** como **Nova Nota**.
7. Na secção **Opcional**, toque em **Modelo**.
8. Selecione uma nota do seu cofre para usar como modelo.
9. Toque em **Guardar** para guardar a Localização.

![[ios-share-sheet-set-template.png|400]]

Quando partilha uma ligação usando esta Localização, o Obsidian aplica o modelo primeiro e depois adiciona o conteúdo partilhado.

Marcadores de posição suportados no modelo:

| Marcador de posição | Descrição |
| --- | --- |
| `{{author}}` | Autor do artigo |
| `{{description}}` | Descrição ou resumo do artigo |
| `{{domain}}` | Nome do domínio do site |
| `{{favicon}}` | URL do favicon do site |
| `{{image}}` | URL da imagem principal do artigo |
| `{{published}}` | Data de publicação do artigo, usando o formato de data predefinido |
| `{{published: YYYY-MM-DD}}` | Data de publicação usando um formato de data personalizado |
| `{{site}}` | Nome do site |
| `{{title}}` | Título do artigo |
| `{{url}}` | URL do artigo |
| `{{wordCount}}` | Número total de palavras no conteúdo extraído |

Também pode usar os marcadores de posição padrão de data e hora do modelo:

| Marcador de posição | Descrição |
| --- | --- |
| `{{date}}` | Data atual |
| `{{date: YYYY-MM-DD}}` | Data atual usando um formato personalizado |
| `{{time}}` | Hora atual |
| `{{time: HH:mm}}` | Hora atual usando um formato personalizado |

## Integração com Siri

Pode usar comandos de voz do Siri para interagir com o Obsidian:

- "Capturar usando Obsidian"
- "Capturar para Obsidian"
- "Abrir a minha nota diária no Obsidian"
- "Pesquisar no Obsidian"

## Integração com Spotlight

Quando pesquisa por "Obsidian" no Spotlight do iOS, verá ações rápidas:
- Nova Nota
- Pesquisar
- Nota Diária
