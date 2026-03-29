---
permalink: publish/limitations
---
> [!tip] Membros da nossa incrível comunidade criaram soluções alternativas para algumas destas limitações. Para mais informações, por favor, visite o tópico [Publish Resources](https://forum.obsidian.md/t/obsidian-publish-resources/74582) nos fóruns do Obsidian.

## Plugins da comunidade

O Obsidian Publish tem suporte mínimo para [[Plugins da comunidade]].

Plugins que produzem saída em Markdown em bruto, como o plugin Waypoint, são compatíveis com o Publish porque não requerem a aplicação para renderizar os seus dados.

Enquanto que um plugin que requer um bloco de código de plugin para renderizar, como o Dataview ou Fantasy Statblocks, não funcionará por predefinição no Publish.

## Grafo

O Publish oferece personalização básica de cores para a sua vista de grafo usando CSS. Pode modificar as cores dos nós no seu ficheiro `publish.css` utilizando as [variáveis CSS da Vista de Grafo](https://docs.obsidian.md/Reference/CSS+variables/Plugins/Graph).

Note que o grafo publicado não suporta as opções abrangentes de ordenação e visualização disponíveis na [[Visualização de diagrama de grafo|vista de grafo]] da aplicação.

## Ficheiros multimédia

O Obsidian Publish não está otimizado para transmissão de vídeo ou ficheiros de áudio grandes. Incluímos algumas boas práticas para lidar com os seus [[Ficheiros multimédia|ficheiros multimédia]] nestes documentos.

Para melhorar a experiência dos seus visitantes, recomendamos que utilize um serviço de alojamento de vídeo, como o YouTube ou Vimeo.

Pode carregar ficheiros com **até 50mb** de tamanho para o seu site Publish. ^publish-media-limit

## PDFs

Em dispositivos móveis, tablets e computadores com ecrãs pequenos, pode encontrar problemas em que um PDF incorporado não carrega ou apenas a primeira página é exibida. Isto deve-se a limitações do Renderizador de PDF em dispositivos móveis.

Para conteúdo destinado a utilizadores móveis, sugerimos fornecer ligações para PDFs alojados externamente ou incluir ligações internas que permitam aos utilizadores transferir o PDF diretamente para o seu dispositivo.

## Pesquisa

O Publish tem suporte básico para pesquisar texto simples no conteúdo publicado. A preferência nos resultados de pesquisa é dada a:

- Nomes de ficheiros
- Alcunhas
- Nomes de cabeçalhos

Após pesquisar as correspondências acima, a pesquisa incluirá então o texto simples das notas publicadas.

Para melhorar a capacidade de pesquisa do seu site publicado, é recomendado usar nomes de ficheiros descritivos, incorporar múltiplas alcunhas e selecionar nomes de cabeçalhos que reflitam com precisão o conteúdo.

Adicionalmente, o Publish não suporta atualmente a funcionalidade de [[Pesquisar#Incorporar resultados de pesquisa numa nota|resultados de pesquisa incorporados]] da aplicação.
