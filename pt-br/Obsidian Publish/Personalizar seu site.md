---
permalink: publish/customize
publish: true
description: Aprenda como personalizar a aparência e o estilo do seu site Obsidian Publish.
aliases:
  - Obsidian Publish/Personalize seu site
---
Esta página explica como você pode personalizar a aparência e o estilo do seu site [[Introdução ao Obsidian Publish|Obsidian Publish]].

## Recursos estáticos

Você pode personalizar seu site [[Publicar seu conteúdo#Publicar notas|publicando]] os seguintes arquivos no seu site:

- `publish.css` para adicionar CSS personalizado
- `publish.js` para adicionar JavaScript personalizado
- `favicon-32x32.png` para definir o favicon

**Observações:**

- [Variáveis CSS para Publish](https://docs.obsidian.md/Reference/CSS+variables/Publish/Publish) podem ser encontradas em nosso site de Documentação.
- Como o Obsidian não suporta arquivos CSS ou JavaScript, você precisa usar outro aplicativo para criá-los e editá-los.
- Tanto `publish.css` quanto `publish.js` devem estar localizados no diretório raiz (`/`) do seu cofre.
- Por padrão, `publish.css` e `publish.js` não aparecem no explorador de arquivos, mas você ainda pode publicá-los a partir da caixa de diálogo **Publicar mudanças**.
- Para usar JavaScript personalizado com `publish.js`, você precisa de [[Domínios personalizados]].

Para favicons, o Obsidian Publish suporta as seguintes convenções de nomenclatura, onde `32` representa as dimensões do ícone em pixels:

- `favicon-32.png`
- `favicon-32x32.png`
- `favicon.ico`

Recomendamos que você forneça uma ou mais das seguintes dimensões:

- `favicon-32x32.png`
- `favicon-128x128.png`
- `favicon-152x152.png`
- `favicon-167x167.png`
- `favicon-180x180.png`
- `favicon-192x192.png`
- `favicon-196x196.png`

Você tem flexibilidade para colocar favicons em qualquer lugar dentro do cofre, desde que sejam publicados no seu site.

## Usar um tema da comunidade

Para usar um dos temas da comunidade no seu site:

1. Abra seu cofre no explorador de arquivos padrão do seu sistema operacional.
2. Vá para a pasta de configurações do cofre (padrão: `.obsidian`).
3. Abra a pasta `themes`.
4. Copie o arquivo CSS do tema que você deseja usar no seu site.
5. Cole o arquivo na pasta raiz do seu cofre.
6. Renomeie o arquivo CSS para `publish.css`.
7. [[Publicar seu conteúdo#Publicar notas|Publique]] `publish.css`.

**Observações:**

- Se o estilo não atualizar em alguns minutos, tente limpar o cache do seu navegador.
- Você pode alternar entre modo claro e escuro nas [[Gerenciar sites#Visualizar opções do site|opções do site]].
- Muitos temas da comunidade usam **Style Settings** para estilização personalizada, mas essas configurações não funcionam no Obsidian Publish.

> [!tip] Desenvolvendo temas
> Não encontrou o tema ideal para você? Aprenda como [Criar um tema para Publish](https://docs.obsidian.md/Themes/Obsidian+Publish+themes/Build+a+Publish+theme) você mesmo.

## Ativar recursos de interface

Você pode alternar vários recursos de interface no seu site, como a visualização em gráfico ou um índice.

Navegue pelos recursos de interface disponíveis nas seções **Experiência de leitura** e **Componentes** nas [[Gerenciar sites#Visualizar opções do site|opções do site]]

### Customizar a navegação

Dentro do Obsidian Publish, você tem a capacidade de personalizar a ordem de navegação e a exibição de arquivos e pastas dentro do [[Explorador de arquivos]] do Publish. Os itens de navegação são listados em ordem de publicação por padrão. Notas não publicadas não aparecerão neste painel.

#### Acessando opções de Customizar a navegação

1. Na [[Faixa de opções]], selecione **Publicar mudanças** (![[lucide-send.svg#icon]]) ou abra a [[Paleta de comandos]] e digite **Publish: Publicar mudanças...**
2. Na caixa de diálogo **Publicar mudanças**, selecione **Alterar configurações do site** ( ![[lucide-cog.svg#icon]] ).
3. Em **Configurações de componentes**, ao lado de **Customizar a navegação**, selecione o botão **Administrar**.

Uma nova janela pop-up intitulada **Navegação** aparecerá sobre a janela **Alterar configurações do site**.

#### Ajustar itens de navegação

Na seção chamada **Pré-visualização da navegação**, você pode ajustar a ordem de exibição do seu conteúdo publicado.

1. Selecione a pasta ou nota que deseja ajustar.
2. Arraste a nota ou pasta para cima ou para baixo até a posição desejada.
3. No canto inferior direito da janela **Navegação**, selecione **Feito**.

O Publish enviará suas alterações de navegação para o seu site.

#### Ocultar e exibir itens de navegação

Se houver notas ou pastas que você publicou, mas não deseja que fiquem visíveis na sua Navegação, você pode optar por ocultar esses itens.

1. Selecione a pasta ou nota que deseja ajustar.
2. Clique com o botão direito e selecione **Ocultar na navegação**. O item deve desaparecer da **Pré-visualização da navegação**.
3. No canto inferior direito da janela **Navegação**, selecione **Feito**.

O Publish enviará suas alterações de navegação para o seu site.

> [!tip] Você pode **Mostrar ocultos** selecionando a caixa de seleção à direita do título **Pré-visualização da navegação**

## Perguntas frequentes

**Posso mover arquivos de uma pasta para outra dentro da Navegação?**

Não. A estrutura de navegação de arquivos para notas dentro de pastas precisa ser mantida. Você pode ajustar a ordem das notas dentro de pastas (incluindo a raiz do cofre) e a ordem das pastas dentro de outras pastas.

**Posso editar a ordem de várias notas e pastas antes de selecionar Feito?**

Sim.

**Como faço para reverter essas alterações?**

- **Ordem de exibição**: Selecione o ícone **Restaurar ao padrão** (seta de rotação anti-horária) ao lado de **Ordem de apresentação do item de navegação**. Isso restaurará seus itens de navegação para a ordem alfabética.
- **Status de ocultação**: Selecione o ícone **Restaurar ao padrão** (seta de rotação anti-horária) ao lado de **Ocultar páginas ou pastas da navegação**. Isso restaurará seus itens de navegação ocultos para um estado visível.
