---
permalink: style-guide
publish: true
mobile: true
description: Esta página explica o guia de estilo para escrever nossa documentação de suporte.
aliases:
  - Contribuindo com o Obsidian/Guia de estilo
---
A documentação do Obsidian segue as diretrizes de estilo listadas nesta página. Essas diretrizes são baseadas nas melhores práticas da indústria, particularmente o [Guia de estilo de documentação para desenvolvedores do Google](<https://developers.google.com/style>) e o [Guia de Estilo da Microsoft](https://learn.microsoft.com/en-us/style-guide/). Para casos extremos não cobertos abaixo, consulte esses guias externos como referências secundárias.

> [!tip]- Contribua
> A maior parte da documentação existia antes deste guia de estilo.
> 
> Se você encontrar qualquer violação deste guia de estilo, por favor [crie uma issue](https://github.com/obsidianmd/obsidian-docs/issues/new) e envie um pull request para [obsidianmd/obsidian-docs](https://github.com/obsidianmd/obsidian-docs).

## Terminologia e gramática

### Estilo de linguagem

Para nossa documentação em inglês, recomenda-se o uso do [Inglês Global](https://docs.openedx.org/en/latest/documentors/references/doc_english_writing.html) para melhor atender nosso público mundial e auxiliar nas [[#Traduções]]. Isso significa:

- Evitar expressões idiomáticas e culturalmente específicas
- Usar voz ativa e construção direta de frases
- Preferir palavras simples e comuns em vez de terminologia complexa
- Ser explícito em vez de implícito
- Para convenções ortográficas, usar inglês americano (ex.: 'organize' e não 'organise').

### Termos

- Preferir "keyboard shortcut" em vez de "hotkey". Usar Hotkey ao se referir ao recurso específico.
- Preferir "the Obsidian app" em dispositivos móveis e "the Obsidian application" em desktop.
- Preferir "sync" ou "syncing" em vez de "synchronise" ou "synchronising".
- Preferir "search term" em vez de "search query".
- Preferir "heading" em vez de "header" ao se referir a um texto que introduz uma seção.
- Preferir "maximum" em vez de "max" e "minimum" em vez de "min".

### Nomes de produtos

Os nomes de produtos Obsidian começam com "Obsidian", por exemplo "Obsidian Publish" e "Obsidian Sync".

Se um parágrafo ficar excessivamente repetitivo, você pode usar a forma curta nas referências subsequentes.

Por exemplo:

_Para permitir configuração específica por dispositivo, o Obsidian Sync não sincroniza suas próprias configurações. Você precisa configurar o Sync para cada um dos seus dispositivos._

### Interface e interações

- Use **negrito** para indicar texto de botão
- Preferir "selecione" em vez de "toque" ou "clique".
	- Para instruções específicas de dispositivos móveis, "toque" é aceitável ao descrever interações por toque, já que "clique" não está disponível.
- Preferir "barra lateral" em vez de "barra lateral" (com espaço).
- Preferir "execute" em vez de "invoque" ao se referir a comandos ou ações.

Ao se referir a múltiplas interações de interface em sequência, use o símbolo → (U+2192). Por exemplo, "**[[Configurações]] → Plugins da comunidade**".

### Notas, arquivos e pastas

- Use "nota" ao se referir a um arquivo Markdown no cofre.
- Use "arquivo" ao se referir a outras extensões de arquivo que não sejam Markdown.
- Preferir "nome da nota" em vez de "título da nota".
- Preferir "nota ativa" em vez de "nota atual".
- Preferir "pasta" em vez de "diretório".
- Preferir "tipo de arquivo" em vez de "formato de arquivo", a menos que esteja se referindo especificamente ao formato de dados do conteúdo do arquivo.

Ao navegar entre notas, use "abrir" se o destino estiver oculto, e "alternar" se tanto a nota de origem quanto a de destino estiverem abertas em painéis separados.

### Documentação de referência para configurações

Quando possível, quaisquer configurações devem ser documentadas dentro do Obsidian usando um texto descritivo. Evite documentar uma configuração específica no Obsidian Help a menos que:

- Ela requeira conhecimento mais aprofundado sobre como e quando usá-la.
- Ela seja comumente mal utilizada ou perguntada.
- Ela mude _drasticamente_ a experiência do usuário.

Considere usar um callout de dica se quiser chamar atenção para uma configuração específica.

### Termos direcionais

Use hífen em termos direcionais quando usá-los como adjetivos. Evite hifenização quando a direção for usada como substantivo.

**Recomendado:**

- Selecione **[[Configurações]]** no canto inferior esquerdo.
- Selecione **[[Configurações]]** na parte inferior esquerda.

**Não recomendado:**

- Selecione **[[Configurações]]** no canto inferior esquerdo (sem hífen no adjetivo composto).
- Selecione **[[Configurações]]** na inferior-esquerda.

Preferir "superior esquerdo" e "superior direito" em vez de "topo esquerdo" e "topo direito".

Não indique uma direção ao se referir a configurações. A localização do controle de configurações depende do dispositivo.

**Recomendado:**

- Ao lado de **Escolher cofre remoto**, selecione **Escolher**.

**Não recomendado:**

- À direita de **Escolher cofre remoto**, selecione **Escolher**.

Ao descrever direção vertical em elementos de interface, use "acima" e "abaixo" para relações espaciais. Evite "para cima" e "para baixo" pois são ambíguos em diferentes contextos.

**Recomendado:**

- A caixa de busca aparece acima da lista de arquivos.
- Opções adicionais estão disponíveis abaixo.

**Não recomendado:**

- A caixa de busca fica acima da lista de arquivos (usando "para cima").
- Mais opções estão lá embaixo.

### Instruções

Use imperativos para nomes de guias, títulos de seções e instruções passo a passo. O modo imperativo é conciso e orientado à ação, o que é mais direto para usuários que seguem instruções.

- Preferir "Configure" em vez de "Configurando"
- Preferir "Mova um arquivo" em vez de "Movendo um arquivo"
- Preferir "Importe suas notas" em vez de "Importando suas notas"

### Maiúsculas e minúsculas em frases

Preferir *maiúscula apenas na primeira palavra* em vez de *maiúscula em todas as palavras* para cabeçalhos, botões e títulos. Ao referenciar elementos de interface, sempre corresponda ao uso de maiúsculas e minúsculas do texto na interface.

**Recomendado:**

- Como o Obsidian armazena dados

**Não recomendado:**

- Como O Obsidian Armazena Dados

### Exemplos

Preferir exemplos realistas em vez de termos sem sentido.

**Recomendado:**

- `task:(ligar OR agendar)`

**Não recomendado:**

- `task:(foo OR bar)`

### Nomes de teclas e atalhos de teclado

Ao se referir a teclas e atalhos de teclado, use notação consistente.

**Nomes de teclas individuais:**

Ao se referir a um caractere no teclado pelo nome, adicione o caractere entre parênteses logo após o nome.

**Recomendado:**

- Pressione a tecla hífen (-) para adicionar um travessão.
- Use o ponto de interrogação (?) para pesquisar.

**Não recomendado:**

- Pressione a tecla hífen para adicionar um travessão.
- Use o ? para pesquisar.
- Adicione um `-` na frente da palavra.

**Atalhos de teclado:**

Formate atalhos de teclado sem espaços ao redor do sinal de mais. Quando um atalho difere entre sistemas operacionais, especifique ambos.

**Recomendado:**

- Pressione `Ctrl+Z` (Windows) ou `Command+Z` (macOS) para desfazer.
- Pressione `Escape` para fechar esta janela.
- Use `Tab` para mover entre campos.

**Não recomendado:**

- Pressione `Cmd+Z` para desfazer.
- Pressione `Ctrl + Z` (com espaços) para desfazer.
- Pressione `Ctrl/Cmd+Z` para desfazer.

Para atalhos que são idênticos em todas as plataformas, não é necessário especificar o sistema operacional. Se não tiver certeza se um atalho difere por plataforma, especifique o sistema operacional por segurança. Windows e Linux geralmente usam os mesmos atalhos.

### Markdown

Use linhas em branco entre blocos Markdown:

**Recomendado:**

```md
# Cabeçalho 1

Esta é uma seção.

1. Primeiro item
2. Segundo item
3. Terceiro item
```

**Não recomendado:**

```md
# Cabeçalho 1
Esta é uma seção.
1. Primeiro item
2. Segundo item
3. Terceiro item
```

**Travessões em listas:**

Use travessões (—) para separar termos em negrito de suas descrições em listas com marcadores. Não use travessões em listas aninhadas simples com links.

**Recomendado:**

- **Menu de visualização** — criar, editar e alternar visualizações.
- **Calcular valores** — adicionar preços, calcular totais ou realizar operações matemáticas.

**Não recomendado:**

- [[Criar uma base]] — Aprenda como criar e incorporar uma base.

### Imagens

Use "**largura** x **altura** pixels" para descrever dimensões de imagem ou tela.

**Exemplo:**

Dimensões de imagem recomendadas: 1920 x 1080 pixels.

## Estrutura de informação

### Tipos de callout

Use callouts estrategicamente para destacar tipos específicos de informação:

**Dica** (`[!tip]-`) - Conselhos práticos ou melhores práticas que aprimoram o fluxo de trabalho do usuário. Use para atalhos, soluções alternativas ou informações não essenciais mas úteis. Esses callouts começam recolhidos.

**Informações** (`[!info]+`) - Contexto adicional, informações de fundo ou esclarecimentos. Use quando a informação adiciona compreensão mas não é necessária para completar uma tarefa. Esses callouts começam abertos.

**Aviso** (`[!warning]+`) - Precauções importantes que previnem perda de dados, erros ou consequências indesejadas. Use com moderação para situações genuinamente arriscadas. Esses callouts nunca devem ser recolhidos.

**Exemplo** (`[!example]-`) - Observações gerais ou detalhes complementares. Use para informações tangenciais que alguns usuários podem achar relevantes. Esses callouts começam recolhidos.

**Exemplos:**
```md
> [!tip]- Use atalhos de teclado
> Você pode acelerar seu fluxo de trabalho memorizando os atalhos mais usados.

> [!info]+ Este é um complemento pago
> Este recurso requer uma assinatura paga para uso.

> [!warning]+ Esta ação não pode ser desfeita
> Excluir um cofre é permanente. Considere exportar suas notas primeiro.

> [!example]- Uso avançado
> Você também pode configurar esta opção pelo menu do Grafo.
```

### Listas vs. prosa

Use listas ao apresentar itens discretos que não possuem relações sequenciais ou causais fortes. Use prosa e parágrafos quando os itens se complementam, requerem explicação ou se beneficiam de um fluxo narrativo.

**Use uma lista para:**
- Um conjunto de recursos não relacionados
- Requisitos de instalação
- Opções de configuração
- Passos de solução de problemas

**Use prosa para:**
- Explicações de como algo funciona
- Fluxos de trabalho com dependências
- Visões gerais conceituais
- Orientações que requerem contexto

### Tabelas

Use tabelas para comparar recursos, versões ou pontos de dados relacionados onde o alinhamento auxilia a compreensão. Evite tabelas para listas simples ou dados de uma única coluna.

**Bom caso de uso:**

| Recurso | Móvel | Desktop |
|---------|-------|---------|
| Sync | Sim | Sim |
| Plugins | Não | Sim |
| Temas | Limitado | Completo |

### Referências cruzadas

Use links wiki internos (`[[Nome da nota]]`) liberalmente para ajudar os usuários a navegar por tópicos relacionados. No entanto, evite excesso de links:

- Não vincule o mesmo termo múltiplas vezes em uma única página
- Vincule apenas quando a página referenciada forneça contexto adicional significativo
- Use texto de link descritivo quando útil: `[[Nome da nota#Seção|texto descritivo]]`

**Exemplo:**

Primeira menção: "Saiba mais sobre o [[Introdução ao Obsidian Sync|Obsidian Sync]] para manter seu cofre atualizado entre dispositivos."
Menção posterior: "Você pode configurar o Sync para cada dispositivo separadamente."

### Conteúdo específico por plataforma

Ao documentar recursos que diferem entre plataformas, use títulos de seção para organizar o conteúdo.

Use `Desktop` e `Móvel` como subtítulos de seção para separar instruções ou recursos específicos de cada plataforma.

**Recomendado:**
```md
## Personalizando a faixa de opções

### Desktop

Na versão desktop, você pode personalizar a faixa de opções da seguinte forma:

- Reorganize a ordem das ações da faixa de opções arrastando e soltando os ícones.
- Para ocultar ações específicas, clique com o botão direito em um espaço vazio e desmarque as ações que deseja ocultar.

### Móvel

Na versão móvel, você pode personalizar a faixa de opções através das configurações:

1. Abra **[[Configurações]]**.
2. Navegue até **Aparência**.
3. Clique em **Administrar** em **Configuração da faixa de opções**.
```

> [!info]+ Quando criar seções?
> Crie seções separadas apenas se o conteúdo diferir significativamente. Se as instruções forem basicamente as mesmas com variações menores, use notas em linha.

## Ícones e imagens

Inclua ícones e imagens quando eles tornarem mais fácil explicar coisas que são difíceis de descrever com palavras, ou quando você precisar mostrar partes importantes do aplicativo Obsidian. Você pode salvar imagens na pasta `Attachments`.

- A imagem deve tornar o texto que ela acompanha mais fácil de entender.

 **Exemplo**: Uma vez ativado, o plugin [[Contagem de palavras]] criará uma nova entrada na sua barra de status inferior.
 
![[Style-guide-zoomed-example.png#interface|300]]

- As imagens devem estar no formato `.png` ou `.svg`.
- Se uma imagem parecer muito grande na nota, reduza-a fora do Obsidian ou ajuste suas dimensões conforme explicado em [[Incorporar arquivos#Incorporar uma imagem em uma nota|incorporando uma imagem em uma nota]].
- Em casos raros, você pode querer colocar imagens especialmente grandes ou complexas em um [[Callouts#Frases de destaque dobráveis|callout recolhível]].
- Para janelas pop-up ou modais, a imagem deve mostrar toda a janela do aplicativo Obsidian.
 ![[Style-guide-modal-example.png#interface]]

### Ícones

Ícones do [Lucide](https://lucide.dev/icons/) e ícones personalizados do Obsidian podem ser usados junto a elementos detalhados para fornecer uma representação visual de um recurso.

**Exemplo:** Na faixa de opções à esquerda, selecione **Criar novo canvas** ![[lucide-layout-dashboard.svg#icon]] para criar um canvas na mesma pasta do arquivo ativo.

**Diretrizes para ícones**

- Armazene os ícones na pasta `Attachments/icons`.
- Adicione o prefixo `lucide-` antes do nome do ícone Lucide.
- Adicione o prefixo `obsidian-icon-` antes do nome do ícone Obsidian.

**Exemplo:** O ícone para criar um novo canvas deve ser nomeado `lucide-layout-dashboard`.

- Use a versão SVG dos ícones disponíveis.
- Os ícones devem ter `18` pixels de largura, `18` pixels de altura e uma espessura de traço de `1.5`. Você pode ajustar essas configurações nos dados SVG.

> [!info]- Ajustando tamanho e traço em um SVG
> ```html
> <svg xmlns="http://www.w3.org/2000/svg" width="LARGURA" height="ALTURA" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="ESPESSURA-DO-TRAÇO" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-layout-dashboard"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>
>```

- Utilize a âncora `icon` em imagens incorporadas para ajustar o espaçamento ao redor do ícone para que ele se alinhe corretamente com o texto nas proximidades.
- Os ícones devem ser cercados por parênteses. ![[lucide-cog.svg#icon]]

**Exemplo**: `![[lucide-cog.svg#icon]]`

### Tags de âncora de imagem

Tags de âncora de imagem estão disponíveis para adicionar mudanças decorativas às imagens incorporadas.

> [!warning] Aviso sobre Visualização ao vivo
> As tags de âncora de ícone não serão exibidas corretamente na **Visualização ao vivo.** Use a **Visualização de leitura** para confirmar que a tag de âncora foi aplicada.

**Ícone**

`![[lucide-menu.svg#icon]]`

A tag de âncora de ícone garante o alinhamento vertical correto para ícones usados para indicar elementos de interface.

O primeiro ícone de menu usa a tag de âncora ![[lucide-menu.svg#icon]], enquanto o segundo ícone de menu ( ![[lucide-menu.svg]] ) não usa.

**Interface**

`![[Vault picker.png#interface]]`

A tag de âncora de interface adiciona uma sombra decorativa ao redor da imagem. Na primeira imagem, a tag de âncora de interface está aplicada.
![[Vault picker.png#interface]]
Em contraste, a segunda imagem não possui a âncora de interface aplicada.

![[Vault picker.png]]

**Contorno**

`![[Backlinks.png#outline]]`

A tag de âncora de contorno adiciona uma borda sutil ao redor da imagem. Na primeira imagem, a tag de âncora de contorno está aplicada.

> [!tip] Observe o canto inferior esquerdo da imagem para ver a diferença.

![[Backlinks.png#outline]]

A segunda imagem não possui a tag de âncora de contorno.

![[Backlinks.png]]

### Otimização

Imagens diminuem o tempo de carregamento da página e ocupam espaço de armazenamento valioso do [[Introdução ao Obsidian Publish|Publish]]. Otimizar imagens permite reduzir o tamanho do arquivo, mantendo a integridade visual da imagem.

Tanto imagens quanto ícones devem ser otimizados.

> [!info] Ferramentas para otimizar imagens
> Aqui estão alguns programas recomendados para reduzir o tamanho das suas imagens.
> - **Windows:** [FileOptimizer](https://sourceforge.net/projects/nikkhokkho/)
> - **macOS:** [ImageOptim](https://imageoptim.com/)
> - **Linux/Unix** [Trimage](https://trimage.org)
> 
> Recomendamos uma taxa de otimização de 65-75%.

## Layout

### Links quebrados

Antes de enviar seu Pull Request, verifique se há links quebrados na documentação da tradução em que você está trabalhando e corrija-os. Links quebrados podem ocorrer naturalmente ao longo do tempo, então verificar sua precisão ajuda a manter a qualidade da documentação.

Você pode verificar links quebrados usando [[Plugins da comunidade]] ou ferramentas disponíveis no seu IDE.

### Descrições

Esta documentação é editada no GitHub e hospedada online via [[Introdução ao Obsidian Publish|Obsidian Publish]], que inclui [[Prévias de links em redes sociais#Descrição|descrições]] para cartões sociais e outros elementos de [[SEO]].

Se a página em que você está trabalhando não tiver uma [[Propriedades|propriedade]] `description`, por favor adicione uma. A descrição deve ter 150 caracteres ou menos e fornecer um resumo objetivo do conteúdo da página.

**Bom**: Aprenda a criar modelos que capturam e organizam metadados de páginas web automaticamente com o Web Clipper.
**Pode ser melhorado**: Aprenda como criar modelos que automaticamente capturam e organizam metadados de páginas web com o Web Clipper.

### Direções

Ao escrever ou reescrever [[#Instruções]] sobre como realizar uma ação dentro do aplicativo, certifique-se de incluir passos para as versões móvel e desktop.

Se você não tiver acesso a um dispositivo móvel ou desktop, por favor mencione isso ao enviar seu Pull Request.

## Traduções

Traduza a totalidade do conteúdo ao completar uma tradução. Isso inclui, mas não se limita a:

- Nomes de notas
- Nomes de pastas
- Apelidos
- Nomes de anexos
- Texto alternativo de links
