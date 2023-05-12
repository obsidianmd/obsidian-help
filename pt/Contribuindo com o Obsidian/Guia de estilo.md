A documentação da Obsidian usa o [guia de estilo da documentação do desenvolvedor do Google](https://developers.google.com/style). Para quaisquer tópicos não cobertos pelo guia de estilo do Google, use o [Guia de estilo da Microsoft](https://learn.microsoft.com/en-us/style-guide/).

Esta página lista todos os desvios do guia de estilo do Google ou terminologia que vale a pena destacar.

> [!tip] Contribua
> A maior parte da documentação existia antes deste guia de estilo. Se você encontrar alguma violação deste guia de estilo, [crie um problema](https://github.com/obsidianmd/obsidian-docs/issues/new) ou envie uma solicitação pull para [obsidianmd/obsidian-docs](https ://github.com/obsidianmd/obsidian-docs).

## Terminologia

- Prefira "atalho de teclado" em vez de "tecla de atalho". Use a tecla de atalho ao se referir ao recurso específico.
- Prefira "o aplicativo Obsidian" no celular e "o aplicativo Obsidian" no computador.
- Prefira "sincronizar" ou "sincronizar" em vez de "sincronizar" ou "sincronizar".
- Prefira "termo de pesquisa" em vez de "consulta de pesquisa".
- Prefira "heading" a "header" quando se referir a um texto que introduz uma seção.
- Prefira "máximo" a "máximo" e "mínimo" a "min".

### Nomes de produtos

Os nomes dos produtos Obsidian começam com "Obsidian", por exemplo "Obsidian Publish" e "Obsidian Sync".

Se um parágrafo se tornar excessivamente repetitivo, você pode usar a forma abreviada nas referências subsequentes.

Por exemplo:

_Para permitir a configuração específica do dispositivo, o Obsidian Sync não sincroniza suas próprias configurações. Você precisa configurar o Sync para cada um dos seus dispositivos._

### IU e interações

- Prefira "selecionar" a "tocar" ou "clicar".
- Prefira "barra lateral" em vez de "barra lateral".
- Prefira "executar" a "invocar" e "executar" ao se referir a comandos ou ações.

Ao se referir a várias interações de interface do usuário em uma sequência, use o símbolo → (U+2192). Por exemplo, "**Configurações → Plug-ins da comunidade**".

### Notas, arquivos e pastas

- Use "nota" ao se referir a um arquivo Markdown no cofre.
- Use "arquivo" ao se referir a outras extensões de arquivo além do Markdown.
- Prefira "nome da nota" em vez de "título da nota".
- Prefira "nota ativa" em vez de "nota atual".
- Prefira "pasta" em vez de "diretório".
- Prefira "tipo de arquivo" em vez de "formato de arquivo", a menos que se refira especificamente ao formato de dados do conteúdo do arquivo.

Ao mover entre as notas, use "abrir" se o destino estiver oculto e "alternar" se as notas de origem e destino estiverem abertas em divisões separadas.

## Documentação de referência para configurações

Sempre que possível, todas as configurações devem ser documentadas no Obsidian usando um texto descritivo. Evite documentar uma configuração específica na Ajuda do Obsidian, a menos que:

- Requer um conhecimento mais aprofundado sobre como e quando usá-lo.
- É comumente mal utilizado ou questionado.
- Muda _drasticamente_ a experiência do usuário.

Considere usar uma legenda de dica se quiser chamar a atenção para uma configuração específica.

## Termos direcionais

Hifenize os termos direcionais ao usá-los como adjetivos. Evite a hifenização quando a direção for usada como um substantivo.

**Recomendado:**

- Selecione **Configurações** no canto inferior esquerdo.
- Selecione **Configurações** no canto inferior esquerdo.

**Não recomendado:**

- Selecione **Configurações** no canto inferior esquerdo.
- Selecione **Configurações** no canto inferior esquerdo.

Prefira "superior esquerdo" e "superior direito" em vez de "superior esquerdo" e "superior direito".

Não indique uma direção ao se referir às configurações. A localização do controle de configurações depende do dispositivo.

**Recomendado:**

- Ao lado de **Escolher cofre remoto**, clique em **Escolher**.

**Não recomendado:**

- À direita de **Escolher cofre remoto**, clique em **Escolher**.

## Exemplos

Prefira exemplos realistas a termos sem sentido.

**Recomendado:**

- `tarefa:(chamada OU agendamento)`

**Não recomendado:**

- `tarefa:(foo OR bar)`

## Nomes das chaves

Ao se referir a um caractere no teclado pelo nome, adicione o caractere entre parênteses logo após o nome:

**Recomendado:**

- Adicione um hífen (-) antes da palavra.

**Não recomendado:**

- Adicione um hífen antes da palavra.
- Adicione um `-` na frente da palavra.

## Remarcação

Use novas linhas entre os blocos Markdown:

**Recomendado:**

```md
# Cabeçallho 1

Esta é uma seção.

1. Primeiro item
2. Segundo item
3. Terceiro item
```

**Não recomendado:**

```md
# Cabeçallho 1
Esta é uma seção.
1. Primeiro item
2. Segundo item
3. Terceiro item
```

## Imagens

Use "**largura** x **altura** pixels" para descrever as dimensões da imagem ou da tela.

**Exemplo:**

Dimensões de imagem recomendadas: 1920 x 1080 pixels.