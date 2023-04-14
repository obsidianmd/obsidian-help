A visualização em gráfico permite que você visualize os relacionamento entre as notas do seu cofre.

Para abrir a visualização em gráfico, clique em **Abrir visualização em gráfico** na [[en/User interface/Workspace/Ribbon]].

- Os círculos representam as notas, ou laços (nós).
- Linhas representam [[Internal links]] entre dois nós.

Quanto mais nós referenciarem um mesmo nó, maior ele fica.

Para interagir com os nós no gráfico:

- Passe o mouse sobre cada círculo para destacar as conexões da nota.
- Clique na nota no gráfico para abrir a nota.
- Clique com o direito na nota para abrir o menu de contexto com as ações disponíveis para a nota.

Para navegar pelo gráfico:

- Aumente ou diminua o zoom com o scholl do mouse ou usando as teclas `+` e `-`.
- Mova o gráfico clicando e arrastando ou usando as setas do teclado.

Você pode pressionar Shift enquanto usa as setas do teclado para aumentar a velocidade dos movimentos.

## Configurações

Para abrir as configurações do gráfico, clique no icone de engrenagem no canto superior direito da visualização de gráfico.

Clique **Restaurar configurações padrão** no canto superior direito da caixa de configurações para resetar qualquer modificação feita.

### Filtros

Essa seção controla como os nós serão mostrados no gráfico.

- **Procurar arquivos** permite que você filtr notas baseado em uma query de pesquisa. Para saber mais sobre como você pode escrever consultas mais avançadas, veja [[Procurar]].
- **Etiquetas** alternam entre mostrar e ocultar as etiquetas no gráfico.
- **Anexos** alterna entre mostrar e ocultar os anexos no gráfico.
- **Apenas arquivos existentes** alterna para mostar arquivos que existem no seu cofre. Uma vez que uma nota não precisa existir para que seja referenciada, isso pode reduzir o número de notas mostradas para aquelas que realmente foram criadas no cofre.
- **Órfãos** alterna entre mostrar e ocultar notas sem qualquer links.

### Grupos

Cria grupos de notas para distingui-los entre si usando cores.

Para criar um novo grupo:

1. Clique **Novo grupo**.
2. Na caixa de pesquisa, digite o termo de pesquisa para procurar as notas que você deseja adicionar ao grupo.
3. Cilque no circulo colorido para adicionar uma cor ao grupo.

Para saber mais sobe como você pode criar pesquisas mais avançadas, veja [[Procurar]].

### Tela

Essa seção controla como visulizar os nós e links no gráfico.

- **Setas** alterna para mostrar a direção de cada link.
- **Limite para a visibilidade textual** controla a transparência do texto do nome de cada nota.
- **Tamanho dos nódulos** controla o tamanho de cada círculo representando cada nota.
- **Grossura dos links** controla a largura da linha de cada link.
- **Animar** inicia o [[#Start a time-lapse animation|time-lapse animation]].

### Forças

Essa seção controla as forças de ação que agem sobre cada nota no gráfico.

- **Força centrípeta** controla o quão compacto o gráfico está. Um valor alto cria um gráfico mais circular.
- **Força de repulsão** controla o quanto uma nota empurra outra na outra direção.
- **Link force** controls the pull on each link. If the link was a rubber band, the link force controls how tight or loose the band is.
- **Força dos links** controla a força de puxar de cada link. Se o link for um elástico, a força do link controlará o quanto o link está apertado ou solto.
- **Distância dos links** controla o comprimento da linha entre cada nota.

## Iniciar uma animação de lapso de tempo

As notas e anexos aparecem em ordem cronológica baseados no tempo de criação.


![[visualizacao_grafica-min.png]]

## Gráfico Local

Para abrir uma visualização de gráfico local, use o comando **Abrir Gráfico Local**. Enquanto a visualização gráfica mostra todas as notas do seu cofre, o gráfico local mostra somente as notas conectadas com a nota ativa.

A visualização de gráfico local pode usar todas as [[#Configurações]] disponíveis na visualização de gráfico global. Além disso, você pode mudar o nível de profundidade do gráfico local. Cada nível de profundidade vai mostrar notas conectadas com as notas reveladas na profunidade anterior. Para controlar a profundidade do gráfico local, use o controle deslizante no topo do painel de configuração do gráfico local.
