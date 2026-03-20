---
permalink: bases/views/map
---
Mapa é um tipo de [[Visualizações|visualização]] que você pode usar no [[Introdução ao Bases|Bases]]. Requer a instalação do [plugin Maps](obsidian://show-plugin?id=maps).

Selecione ![[lucide-map.svg#icon]]  **Mapa** no menu de visualização para exibir arquivos como um mapa interativo com marcadores para cada arquivo e uma pré-visualização que exibe as propriedades desse arquivo.

![[bases-map-places.png#interface]]

## Instalar o plugin Maps

Visualizações de mapa requerem o Obsidian 1.10. O [plugin Maps](obsidian://show-plugin?id=maps) é um [[Plugins da comunidade|plugin da comunidade]] oficial que você pode baixar separadamente.

1. Siga as instruções em [[Plugins da comunidade#Instalar um plugin da comunidade]]
2. Baixe e ative o [Maps](obsidian://show-plugin?id=maps) da lista

## Exemplo

Para começar, tente criar uma nota chamada **Torre Eiffel** e copie as seguintes propriedades nela:

```yaml
---
coordinates:
  - "48.85837"
  - "2.294481"
icon: "landmark"
color: "red"
tags:
  - places
---
```

Veja o que o código acima significa:

| Propriedade   | Valor                    |                                                                                                                                                                  |
| ------------- | ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `coordinates` | `48.85837`<br>`2.294481` | Coordenadas são armazenadas como `latitude, longitude`. Você pode obter coordenadas clicando com o botão direito em um local no mapa e selecionando **Copiar coordenadas**. |
| `icon`        | `landmark`               | O nome de um ícone da [biblioteca Lucide](https://lucide.dev/).                                                                                                  |
| `color`       | `red`                    | Um valor CSS válido: hex, RGB, cor nomeada, etc.                                                                                                                 |
| `tags`        | `places`                 | A etiqueta que usaremos para encontrar marcadores de mapa em nossa base.                                                                                         |
Agora crie uma visualização de mapa com um filtro para a etiqueta `places` e defina as coordenadas do marcador, ícone e cor usando as propriedades listadas acima.

Você também pode abrir estes [arquivos de exemplo](https://github.com/obsidianmd/obsidian-maps/tree/master/examples) no Obsidian para ver visualizações de mapa funcionais com marcadores, ícones e cores já configurados.

## Configurações

As configurações da visualização de mapa podem ser configuradas nas [[Visualizações#Configurações de visualização|Configurações de visualização]].

- Altura incorporada
- Coordenadas centrais
- Restrições de zoom
- Coordenadas, cor e ícone do marcador
- Plano de fundo

### Marcadores

#### Coordenadas

Para exibir pins no mapa, vá até as [[Visualizações#Configurações de visualização|configurações de visualização]] e selecione uma propriedade de **coordenadas do marcador**. A propriedade deve conter coordenadas de latitude e longitude. Os seguintes formatos são aceitos:

```yaml
# Propriedade de texto
coordinates: "lat, lng"

# Propriedade de lista
coordinates:
  - "lat"
  - "lng"
```

Se você armazenar coordenadas como propriedades separadas de `latitude` e `longitude`, pode combiná-las com uma propriedade de [[Sintaxe de Bases#Fórmulas|fórmula]] definindo-a como um array de coordenadas usando a seguinte fórmula: `[latitude, longitude]`.

#### Ícones

Adicione ícones aos marcadores definindo uma propriedade de **ícones de marcador**. Por exemplo, você pode adicionar uma propriedade chamada `icon` às suas notas e dar valores como `landmark` ou `utensils` da [biblioteca Lucide](https://lucide.dev/icons/) integrada ao Obsidian.

##### Usar uma fórmula para definir ícones

Digamos que você queira que todos os restaurantes tenham o mesmo ícone no mapa:

1. Crie uma nota chamada **Restaurantes** e adicione uma propriedade chamada `icon` com o valor `utensils`.
2. Dê às notas de restaurantes uma propriedade chamada `type` que vincula à nota `[[Restaurantes]]`.
3. Adicione uma propriedade de fórmula chamada `Type icon` à sua base com o seguinte código:
	```js
	list(type)[0].asFile().properties.icon
	```
4. Escolha `Type icon` como seu ícone de marcador nas configurações de visualização.

Voilà! Agora seu mapa exibirá ícones do *tipo* do lugar, não do lugar em si.

#### Cores

Defina a cor dos marcadores. Aceita valores como RGB `rgb(0,0,0)`, HEX `#000` ou variáveis CSS como `var(--color-blue)`. Assim como no exemplo de ícone acima, você pode usar uma propriedade de fórmula para definir cores dinamicamente.

### Plano de fundo

#### Tiles de mapa

Tiles de mapa são uma forma padrão de exibir mapas digitais. Existem vários serviços que você pode usar para personalizar mapas com estilos, cores e fontes únicos. O Maps suporta tanto tiles raster quanto vetoriais e aceita a maioria das URLs de tiles, incluindo URLs TileJSON.

O [OpenFreeMap](https://openfreemap.org/) oferece alguns estilos que você pode usar gratuitamente. Experimente usar uma das seguintes URLs na configuração **Tiles de mapa**:

| Nome     | URL                                              |
| -------- | ------------------------------------------------ |
| Dark     | `https://tiles.openfreemap.org/styles/dark`      |
| Positron | `https://tiles.openfreemap.org/styles/positron`  |
| Liberty  | ``https://tiles.openfreemap.org/styles/liberty`` |
#### Links úteis

- [Maputnik](https://maputnik.github.io/) para personalizar tiles de mapa.
- [Protomaps](https://protomaps.com/) para hospedar tiles de mapa por conta própria.
- Outros serviços hospedados com planos gratuitos incluem [MapTiler](https://www.maptiler.com/) e [Mapbox](https://www.mapbox.com/).


## Dicas

Você pode vincular a serviços de mapas populares usando [[Fórmulas]]. Por exemplo, seu pin pode mostrar um link para o Google Maps usando a seguinte fórmula:

```js
link("https://www.google.com/maps/search/" + file.name.replace(" ","+"),"Google Maps")
```

## Solução de problemas

Se o mapa aparecer em branco quando você carregar o plugin Maps pela primeira vez, tente [[Atualizar o Obsidian|atualizar a versão do instalador do Obsidian]].

O [plugin Maps](https://github.com/obsidianmd/obsidian-maps) é código aberto. Você pode ajudar contribuindo com relatórios de bugs, solicitações de recursos e pull requests.
