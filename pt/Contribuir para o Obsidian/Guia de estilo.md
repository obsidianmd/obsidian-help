---
permalink: style-guide
publish: true
mobile: true
description: Esta página explica o guia de estilo para a escrita da nossa documentação de suporte.
---
A documentação do Obsidian segue as diretrizes de estilo listadas nesta página. Estas diretrizes baseiam-se nas melhores práticas da indústria, particularmente o [Google developer documentation style guide](<https://developers.google.com/style>) e o [Microsoft Style Guide](https://learn.microsoft.com/en-us/style-guide/). Para casos específicos não cobertos abaixo, consulte esses guias externos como referências secundárias.

> [!tip]- Contribuir
> A maior parte da documentação já existia antes deste guia de estilo.
> 
> Se encontrar alguma violação deste guia de estilo, por favor [crie uma issue](https://github.com/obsidianmd/obsidian-docs/issues/new) e submeta um pull request para [obsidianmd/obsidian-docs](https://github.com/obsidianmd/obsidian-docs).

## Terminologia e gramática

### Estilo de linguagem

Para a nossa documentação em inglês, é recomendado usar [Global English](https://docs.openedx.org/en/latest/documentors/references/doc_english_writing.html) para melhor servir o nosso público mundial e para auxiliar nas [[#Traduções]]. Isto significa:

- Evitar expressões idiomáticas e culturalmente específicas
- Usar voz ativa e construção direta de frases
- Preferir palavras simples e comuns em vez de terminologia complexa
- Ser explícito em vez de implícito
- Para convenções ortográficas, usar inglês americano (por exemplo, 'organize' e não 'organise').

### Termos

- Preferir "keyboard shortcut" em vez de "hotkey". Usar Hotkey quando se referir à funcionalidade específica.
- Preferir "a aplicação Obsidian" no móvel, e "a aplicação Obsidian" no desktop.
- Preferir "sync" ou "syncing" em vez de "synchronise" ou "synchronising".
- Preferir "termo de pesquisa" em vez de "consulta de pesquisa".
- Preferir "cabeçalho" em vez de "header" quando se referir a um texto que introduz uma secção.
- Preferir "máximo" em vez de "máx" e "mínimo" em vez de "mín".

### Nomes de produtos

Os nomes de produtos Obsidian começam com "Obsidian", por exemplo "Obsidian Publish" e "Obsidian Sync".

Se um parágrafo se tornar excessivamente repetitivo, pode usar a forma abreviada nas referências subsequentes.

Por exemplo:

_Para permitir configuração específica por dispositivo, o Obsidian Sync não sincroniza as suas próprias definições. Precisa de configurar o Sync para cada um dos seus dispositivos._

### Interface e interações

- Use **negrito** para indicar texto de botões
- Preferir "selecionar" em vez de "tocar" ou "clicar".
	- Para instruções específicas de dispositivos móveis, "tocar" é aceitável ao descrever interações por toque, uma vez que "clicar" não está disponível.
- Preferir "barra lateral" em vez de "barra lateral" (forma separada).
- Preferir "executar" em vez de "invocar" quando se referir a comandos ou ações.

Quando se referir a múltiplas interações de interface numa sequência, use o símbolo → (U+2192). Por exemplo, "**[[Definições]] → Plugins da comunidade**".

### Notas, ficheiros e pastas

- Use "nota" quando se referir a um ficheiro Markdown no cofre.
- Use "ficheiro" quando se referir a outras extensões de ficheiro que não Markdown.
- Preferir "nome da nota" em vez de "título da nota".
- Preferir "nota ativa" em vez de "nota atual".
- Preferir "pasta" em vez de "diretório".
- Preferir "tipo de ficheiro" em vez de "formato de ficheiro", a menos que se refira especificamente ao formato de dados do conteúdo do ficheiro.

Ao mover-se entre notas, use "abrir" se o destino estiver oculto, e "alternar" se tanto a nota de origem como a de destino estiverem abertas em divisões separadas.

### Documentação de referência para definições

Quando possível, quaisquer definições devem ser documentadas dentro do Obsidian usando um texto descritivo. Evite documentar uma definição específica na Ajuda do Obsidian a menos que:

- Requeira conhecimento mais aprofundado sobre como e quando usá-la.
- Seja comummente mal utilizada ou questionada.
- Altere _drasticamente_ a experiência do utilizador.

Considere usar um bloco de destaque de dica se quiser chamar a atenção para uma definição específica.

### Termos direcionais

Use hífen em termos direcionais quando os usar como adjetivos. Evite hifenização quando a direção é usada como substantivo.

**Recomendado:**

- Selecione **[[Definições]]** no canto inferior esquerdo.
- Selecione **[[Definições]]** no canto inferior esquerdo.

**Não recomendado:**

- Selecione **[[Definições]]** no canto inferior-esquerdo.

Preferir "superior esquerdo" e "superior direito" em vez de "topo esquerdo" e "topo direito".

Não indique uma direção quando se referir a definições. A localização do controlo de definições depende do dispositivo.

**Recomendado:**

- Junto a **Escolher cofre remoto**, selecione **Escolher**.

**Não recomendado:**

- À direita de **Escolher cofre remoto**, selecione **Escolher**.

Ao descrever a direção vertical em elementos de interface, use "acima" e "abaixo" para relações espaciais. Evite "para cima" e "para baixo" pois são ambíguos em contextos diferentes.

**Recomendado:**

- A caixa de pesquisa aparece acima da lista de ficheiros.
- Opções adicionais estão disponíveis abaixo.

**Não recomendado:**

- A caixa de pesquisa está para cima da lista de ficheiros.
- Mais opções estão lá em baixo.

### Instruções

Use imperativos para os nomes de guias, títulos de secções e instruções passo a passo. O modo imperativo é conciso e orientado para a ação, o que é mais direto para utilizadores que seguem instruções.

- Preferir "Configurar" em vez de "Configurando"
- Preferir "Mover um ficheiro" em vez de "Movendo um ficheiro"
- Preferir "Importar as suas notas" em vez de "Importando as suas notas"

### Capitalização de frases

Preferir *capitalização de frase* em vez de *capitalização de título* para cabeçalhos, botões e títulos. Ao referenciar elementos de interface, corresponda sempre à capitalização do texto na interface.

**Recomendado:**

- Como o Obsidian armazena dados

**Não recomendado:**

- Como O Obsidian Armazena Dados

### Exemplos

Preferir exemplos realistas em vez de termos sem sentido.

**Recomendado:**

- `task:(telefonar OR agendar)`

**Não recomendado:**

- `task:(foo OR bar)`

### Nomes de teclas e atalhos de teclado

Ao referir-se a teclas do teclado e atalhos, use uma notação consistente.

**Nomes de teclas individuais:**

Ao referir-se a um carácter no teclado pelo nome, adicione o carácter entre parênteses logo após o nome.

**Recomendado:**

- Prima a tecla hífen (-) para adicionar um traço.
- Use o ponto de interrogação (?) para pesquisar.

**Não recomendado:**

- Prima a tecla hífen para adicionar um traço.
- Use o ? para pesquisar.
- Adicione um `-` antes da palavra.

**Atalhos de teclado:**

Formate atalhos de teclado sem espaços à volta do sinal de mais. Quando um atalho difere entre sistemas operativos, especifique ambos.

**Recomendado:**

- Prima `Ctrl+Z` (Windows) ou `Command+Z` (macOS) para anular.
- Prima `Escape` para fechar esta janela.
- Use `Tab` para mover entre campos.

**Não recomendado:**

- Prima `Cmd+Z` para anular.
- Prima `Ctrl + Z` (com espaços) para anular.
- Prima `Ctrl/Cmd+Z` para anular.

Para atalhos que são idênticos em todas as plataformas, não precisa de especificar o sistema operativo. Se não tiver a certeza se um atalho difere por plataforma, especifique o SO para maior segurança. Windows e Linux tipicamente usam os mesmos atalhos.

### Markdown

Use novas linhas entre blocos Markdown:

**Recomendado:**

```md
# Cabeçalho 1

Esta é uma secção.

1. Primeiro item
2. Segundo item
3. Terceiro item
```

**Não recomendado:**

```md
# Cabeçalho 1
Esta é uma secção.
1. Primeiro item
2. Segundo item
3. Terceiro item
```

**Travessões em listas:**

Use travessões (—) para separar termos em negrito das suas descrições em listas com marcadores. Não use travessões em listas aninhadas simples com ligações.

**Recomendado:**

- **Menu de vista** — criar, editar e alternar vistas.
- **Calcular valores** — adicionar preços, calcular totais ou realizar operações matemáticas.

**Não recomendado:**

- [[Criar uma base]] — Aprenda a criar e incorporar uma base.

### Imagens

Use "**largura** x **altura** pixéis" para descrever dimensões de imagens ou ecrã.

**Exemplo:**

Dimensões de imagem recomendadas: 1920 x 1080 pixéis.

## Estrutura de informação

### Tipos de blocos de destaque

Use blocos de destaque estrategicamente para destacar tipos específicos de informação:

**Dica** (`[!tip]-`) - Conselhos práticos ou boas práticas que melhoram o fluxo de trabalho do utilizador. Use para atalhos, soluções alternativas ou informações não essenciais mas úteis. Estes blocos de destaque começam recolhidos.

**Info** (`[!info]+`) - Contexto adicional, informação de fundo ou esclarecimentos. Use quando a informação acrescenta compreensão mas não é necessária para completar uma tarefa. Estes blocos de destaque começam expandidos.

**Aviso** (`[!warning]+`) - Avisos importantes que previnem perda de dados, erros ou consequências não intencionais. Use com moderação para situações genuinamente arriscadas. Estes blocos de destaque nunca devem estar recolhidos.

**Exemplo** (`[!example]-`) - Observações gerais ou detalhes suplementares. Use para informação tangencial que alguns utilizadores possam considerar relevante. Estes blocos de destaque começam recolhidos.

**Exemplos:**
```md
> [!tip]- Use atalhos de teclado
> Pode acelerar o seu fluxo de trabalho memorizando os atalhos mais usados.

> [!info]+ Este é um complemento pago
> Esta funcionalidade requer uma subscrição paga para ser utilizada.

> [!warning]+ Esta ação não pode ser anulada
> Eliminar um cofre é permanente. Considere exportar as suas notas primeiro.

> [!example]- Uso avançado
> Também pode configurar esta definição através do menu de Grafo.
```

### Listas vs. prosa

Use listas ao apresentar itens discretos que não têm relações sequenciais ou causais fortes. Use prosa e parágrafos quando os itens se baseiam uns nos outros, requerem explicação ou beneficiam de um fluxo narrativo.

**Use uma lista para:**
- Um conjunto de funcionalidades não relacionadas
- Requisitos de instalação
- Opções de configuração
- Passos de resolução de problemas

**Use prosa para:**
- Explicações de como algo funciona
- Fluxos de trabalho com dependências
- Visões gerais conceptuais
- Orientação que requer contexto

### Tabelas

Use tabelas para comparar funcionalidades, versões ou pontos de dados relacionados onde o alinhamento ajuda à compreensão. Evite tabelas para listas simples ou dados de uma única coluna.

**Bom caso de uso:**

| Funcionalidade | Móvel | Desktop |
|----------------|-------|---------|
| Sync | Sim | Sim |
| Plugins | Não | Sim |
| Temas | Limitado | Completo |

### Referências cruzadas

Use ligações wiki internas (`[[Nome da nota]]`) generosamente para ajudar os utilizadores a navegar por tópicos relacionados. No entanto, evite ligar em excesso:

- Não ligue o mesmo termo múltiplas vezes numa única página
- Ligue apenas quando a página referenciada forneça contexto adicional significativo
- Use texto de ligação descritivo quando útil: `[[Nome da nota#Secção|texto descritivo]]`

**Exemplo:**

Primeira menção: "Saiba mais sobre o [[Introdução ao Obsidian Sync|Obsidian Sync]] para manter o seu cofre atualizado entre dispositivos."
Menção posterior: "Pode configurar o Sync para cada dispositivo separadamente."

### Conteúdo específico por plataforma

Ao documentar funcionalidades que diferem entre plataformas, use títulos de secção para organizar o conteúdo.

Use `Desktop` e `Móvel` como títulos de subsecção para separar instruções ou funcionalidades específicas de plataforma.

**Recomendado:**
```md
## Personalizar a barra de ferramentas

### Desktop

Na versão desktop, pode personalizar a barra de ferramentas da seguinte forma:

- Reorganize a ordem das ações da barra de ferramentas arrastando e largando os ícones.
- Para ocultar ações específicas, clique com o botão direito num espaço vazio e desmarque as ações que deseja ocultar.

### Móvel

Na versão móvel, pode personalizar a barra de ferramentas através das definições:

1. Abra as **[[Definições]]**.
2. Navegue até **Aparência**.
3. Clique em **Gerir** em **Ribbon Configuration**.
```

> [!info]+ Quando criar secções?
> Crie secções separadas apenas se o conteúdo diferir significativamente. Se as instruções forem praticamente iguais com variações menores, use notas inline em vez disso.

## Ícones e imagens

Inclua ícones e imagens quando facilitarem a explicação de coisas difíceis de descrever com palavras, ou quando precisar de mostrar partes importantes da aplicação Obsidian. Pode guardar imagens na pasta `Attachments`.

- A imagem deve tornar o texto que acompanha mais fácil de compreender.

 **Exemplo**: Uma vez ativado, o plugin [[Contagem de palavras]] criará uma nova entrada na sua barra de estado inferior.
 
![[Style-guide-zoomed-example.png#interface|300]]

- As imagens devem estar no formato `.png` ou `.svg`.
- Se uma imagem parecer demasiado grande na nota, reduza-a fora do Obsidian ou ajuste as suas dimensões como explicado em [[Incorporar ficheiros#Incorporar uma imagem numa nota|incorporar uma imagem numa nota]].
- Em casos raros, pode querer colocar imagens especialmente grandes ou complexas num [[Chamamentos#Blocos de destaque recolhíveis|bloco de destaque recolhido]].
- Para janelas pop-up ou modais, a imagem deve mostrar a janela inteira da aplicação Obsidian.
 ![[Style-guide-modal-example.png#interface]]

### Ícones

Ícones [Lucide](https://lucide.dev/icons/) e ícones personalizados do Obsidian podem ser usados junto a elementos detalhados para fornecer uma representação visual de uma funcionalidade.

**Exemplo:** Na barra de ferramentas à esquerda, selecione **Criar novo Canvas** ![[lucide-layout-dashboard.svg#icon]] para criar um canvas na mesma pasta do ficheiro ativo.

**Diretrizes para ícones**

- Guarde os ícones na pasta `Attachments/icons`.
- Adicione o prefixo `lucide-` antes do nome do ícone Lucide.
- Adicione o prefixo `obsidian-icon-` antes do nome do ícone Obsidian.

**Exemplo:** O ícone para criar um novo canvas deve chamar-se `lucide-layout-dashboard`.

- Use a versão SVG dos ícones disponíveis.
- Os ícones devem ter `18` pixéis de largura, `18` pixéis de altura e uma largura de traço de `1.5`. Pode ajustar estas definições nos dados SVG.

> [!info]- Ajustar tamanho e traço num SVG
> ```html
> <svg xmlns="http://www.w3.org/2000/svg" width="WIDTH" height="HEIGHT" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="STROKE-WIDTH" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-layout-dashboard"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>
>```

- Utilize a âncora `icon` em imagens incorporadas, para ajustar o espaçamento à volta do ícone de modo a que se alinhe corretamente com o texto nas proximidades.
- Os ícones devem estar rodeados por parênteses. ![[lucide-cog.svg#icon]]

**Exemplo**: `![[lucide-cog.svg#icon]]`

### Etiquetas de âncora de imagem

As etiquetas de âncora de imagem estão disponíveis para adicionar alterações decorativas às imagens incorporadas.

> [!warning] Aviso sobre pré-visualização em direto
> As etiquetas de âncora de ícone não serão apresentadas corretamente na **pré-visualização em direto.** Use a **vista de leitura** para confirmar que a etiqueta de âncora foi aplicada.

**Ícone**

`![[lucide-menu.svg#icon]]`

A etiqueta de âncora de ícone garante o alinhamento vertical correto para ícones usados para indicar elementos de interface.

O primeiro ícone de menu usa a etiqueta de âncora ![[lucide-menu.svg#icon]], enquanto o segundo ícone de menu ( ![[lucide-menu.svg]] ) não usa.

**Interface**

`![[Vault picker.png#interface]]`

A etiqueta de âncora de interface adiciona uma sombra decorativa à volta da imagem. Na primeira imagem, a etiqueta de âncora de interface está aplicada.
![[Vault picker.png#interface]]
Em contraste, a segunda imagem não tem a âncora de interface aplicada.

![[Vault picker.png]]

**Contorno**

`![[Backlinks.png#outline]]`

A etiqueta de âncora de contorno adiciona um contorno subtil à volta da imagem. Na primeira imagem, a etiqueta de âncora de contorno está aplicada.

> [!tip] Observe o canto inferior esquerdo da imagem para ver a diferença.

![[Backlinks.png#outline]]

A segunda imagem não tem a etiqueta de âncora de contorno.

![[Backlinks.png]]

### Otimização

As imagens atrasam o tempo de carregamento da página e ocupam valioso espaço de armazenamento do [[Introdução ao Obsidian Publish|Publish]]. Otimizar imagens permite uma redução no tamanho do ficheiro, mas mantém a integridade visual da imagem.

Tanto as imagens como os ícones devem ser otimizados.

> [!info] Ferramentas para otimizar imagens
> Aqui estão alguns programas recomendados para reduzir o tamanho das suas imagens.
> - **Windows:** [FileOptimizer](https://sourceforge.net/projects/nikkhokkho/)
> - **macOS:** [ImageOptim](https://imageoptim.com/)
> - **Linux/Unix** [Trimage](https://trimage.org)
> 
> Recomendamos uma taxa de otimização de 65-75%.

## Disposição

### Ligações quebradas

Antes de submeter o seu Pull Request, verifique se existem ligações quebradas na documentação da tradução em que está a trabalhar e corrija-as. Ligações quebradas podem ocorrer naturalmente ao longo do tempo, por isso verificar a sua precisão ajuda a manter a qualidade da documentação.

Pode verificar ligações quebradas usando [[Plugins da comunidade]] ou ferramentas disponíveis no seu IDE.

### Descrições

Esta documentação é editada no GitHub e alojada online através do [[Introdução ao Obsidian Publish|Obsidian Publish]], que inclui [[Pré-visualizações de ligações em redes sociais#Descrição|descrições]] para cartões sociais e outros elementos de [[SEO]].

Se a página em que está a trabalhar não tiver uma [[Propriedades|propriedade]] `description`, por favor adicione uma. A descrição deve ter 150 caracteres ou menos e fornecer um resumo objetivo do conteúdo da página.

**Bom**: Aprenda a criar modelos que capturam e organizam metadados de páginas web automaticamente com o Web Clipper.
**Pode ser melhorado**: Aprenda como criar modelos que automaticamente capturam e organizam metadados de páginas web com o Web Clipper.

### Direções

Ao escrever ou reescrever [[#Instruções]] sobre como realizar uma ação dentro da aplicação, certifique-se de incluir passos tanto para a versão móvel como para a versão desktop.

Se não tiver acesso a um dispositivo móvel ou desktop, por favor mencione isso ao submeter o seu Pull Request.

## Traduções

Traduza a totalidade do conteúdo ao completar uma tradução. Isto inclui e não se limita a:

- Nomes de notas
- Nomes de pastas
- Alcunhas
- Nomes de anexos
- Texto alternativo de ligações
