---
permalink: publish/limitations
---
> [!tip] Membros da nossa incrível comunidade criaram soluções alternativas para algumas dessas limitações. Para mais informações, por favor visite nosso tópico [Publish Resources](https://forum.obsidian.md/t/obsidian-publish-resources/74582) nos fóruns do Obsidian.

## Plugins da comunidade

Obsidian Publish tem suporte mínimo para [[Plugins da comunidade]].

Plugins que geram saída em Markdown puro, como o plugin Waypoint, são compatíveis com o Publish porque não requerem o aplicativo para renderizar seus dados.

Enquanto um plugin que requer um bloco de código de plugin para renderizar, como Dataview ou Fantasy Statblocks, não funcionará por padrão no Publish.

## Grafo

O Publish oferece personalização básica de cores para sua visualização em gráfico usando CSS. Você pode modificar as cores dos nós no seu arquivo `publish.css` utilizando as [variáveis CSS da Visualização em Gráfico](https://docs.obsidian.md/Reference/CSS+variables/Plugins/Graph).

Note que o grafo publicado não suporta as opções abrangentes de ordenação e visualização disponíveis na [[Visão de grafo]] do aplicativo.

## Arquivos de mídia

Obsidian Publish não é otimizado para streaming de vídeo ou arquivos de áudio grandes. Incluímos algumas boas práticas para lidar com seus [[Arquivos de mídia|arquivos de mídia]] nesta documentação.

Para melhorar a experiência dos seus visitantes, recomendamos que você utilize um serviço de hospedagem de vídeo, como YouTube ou Vimeo.

Você pode enviar arquivos de **até 50mb** de tamanho para o seu site Publish. ^publish-media-limit

## PDFs

Em dispositivos móveis, tablets e computadores com telas pequenas, você pode encontrar problemas em que um PDF incorporado não carrega ou apenas a primeira página é exibida. Isso se deve a limitações do renderizador de PDF em dispositivos móveis.

Para conteúdo direcionado a usuários móveis, sugerimos fornecer links para PDFs hospedados externamente ou incluir links internos que permitam aos usuários baixar o PDF diretamente em seus dispositivos.

## Pesquisa

O Publish tem suporte básico para pesquisa de texto simples no conteúdo publicado. A preferência nos resultados de pesquisa é dada a:

- Nomes de arquivo
- Apelidos
- Nomes de cabeçalhos

Após pesquisar os itens acima por correspondências, a pesquisa incluirá então o texto simples das notas publicadas.

Para melhorar a capacidade de pesquisa do seu site publicado, é recomendado usar nomes de arquivo descritivos, incorporar múltiplos apelidos e selecionar nomes de cabeçalhos que reflitam com precisão o conteúdo.

Além disso, o Publish não suporta atualmente o recurso de [[Pesquisa#Incorporar resultados de pesquisa em uma nota|resultados de pesquisa incorporados]] do aplicativo.
