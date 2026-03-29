---
permalink: bases/views/map
---
Mapa é um tipo de [[Vistas|vista]] que pode usar no [[Introdução ao Bases|Bases]]. Requer a instalação do [plugin Maps](obsidian://show-plugin?id=maps).

Selecione ![[lucide-map.svg#icon]]  **Mapa** no menu de vistas para apresentar ficheiros como um mapa interativo com marcadores para cada ficheiro, e uma pré-visualização que mostra as propriedades desse ficheiro.

![[bases-map-places.png#interface]]

## Instalar o plugin Maps

As vistas de mapa requerem o Obsidian 1.10. O [plugin Maps](obsidian://show-plugin?id=maps) é um [[Plugins da comunidade|plugin da comunidade]] oficial que pode transferir separadamente.

1. Siga as instruções em [[Plugins da comunidade#Instalar um plugin da comunidade]]
2. Transfira e ative o [Maps](obsidian://show-plugin?id=maps) a partir da lista

## Exemplo

Para começar, experimente criar uma nota chamada **Torre Eiffel** e copie as seguintes propriedades para ela:

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

Eis o que o código acima significa:

| Propriedade   | Valor                    |                                                                                                                                                                   |
| ------------- | ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `coordinates` | `48.85837`<br>`2.294481` | As coordenadas são armazenadas como `latitude, longitude`. Pode obter coordenadas clicando com o botão direito numa localização no mapa e selecionando **Copiar coordenadas**. |
| `icon`        | `landmark`               | O nome de um ícone da [biblioteca Lucide](https://lucide.dev/).                                                                                                   |
| `color`       | `red`                    | Um valor CSS válido: hex, RGB, cor nomeada, etc.                                                                                                                  |
| `tags`        | `places`                 | A etiqueta que usaremos para encontrar marcadores de mapa na nossa base.                                                                                          |
Agora crie uma vista de mapa com um filtro para a etiqueta `places` e defina as coordenadas, ícone e cor dos marcadores usando as propriedades listadas acima.

Também pode abrir estes [ficheiros de exemplo](https://github.com/obsidianmd/obsidian-maps/tree/master/examples) no Obsidian para ver vistas de mapa funcionais com marcadores, ícones e cores já configurados.

## Definições

As definições da vista de mapa podem ser configuradas nas [[Vistas#Definições da vista|Definições da vista]].

- Altura incorporada
- Coordenadas centrais
- Restrições de zoom
- Coordenadas, cor e ícone dos marcadores
- Fundo

### Marcadores

#### Coordenadas

Para mostrar pinos no mapa, vá às [[Vistas#Definições da vista|definições da vista]] e selecione uma propriedade de **coordenadas do marcador**. A propriedade deve conter coordenadas de latitude e longitude. Os seguintes formatos são aceites:

```yaml
# Propriedade de texto
coordinates: "lat, lng"

# Propriedade de lista
coordinates:
  - "lat"
  - "lng"
```

Se armazenar coordenadas como propriedades separadas de `latitude` e `longitude`, pode combiná-las com uma propriedade de [[Sintaxe de Bases#Fórmulas|fórmula]] definindo-a como um array de coordenadas usando a seguinte fórmula: `[latitude, longitude]`.

#### Ícones

Adicione ícones aos marcadores definindo uma propriedade de **ícones do marcador**. Por exemplo, pode adicionar uma propriedade chamada `icon` às suas notas e dar-lhe valores como `landmark` ou `utensils` da [biblioteca Lucide](https://lucide.dev/icons/) integrada no Obsidian.

##### Usar uma fórmula para definir ícones

Digamos que quer que todos os restaurantes tenham o mesmo ícone no mapa:

1. Crie uma nota chamada **Restaurantes** e adicione uma propriedade chamada `icon` com o valor `utensils`.
2. Dê às notas de restaurantes uma propriedade chamada `type` que liga à nota `[[Restaurantes]]`.
3. Adicione uma propriedade de fórmula chamada `Type icon` à sua base com o seguinte código:
	```js
	list(type)[0].asFile().properties.icon
	```
4. Escolha `Type icon` como o ícone do marcador nas definições da vista.

Voilà! Agora o seu mapa irá mostrar ícones do *tipo* do lugar, não do lugar em si.

#### Cores

Defina a cor dos marcadores. Aceita valores como RGB `rgb(0,0,0)`, HEX `#000`, ou variáveis CSS como `var(--color-blue)`. Tal como no exemplo dos ícones acima, pode usar uma propriedade de fórmula para definir cores dinamicamente.

### Fundo

#### Mosaicos de mapa

Os mosaicos de mapa são uma forma padrão de apresentar mapas digitais. Existem vários serviços que pode usar para personalizar mapas com estilos, cores e fontes únicos. O Maps suporta mosaicos raster e vetoriais, e aceita a maioria dos URLs de mosaicos, incluindo URLs TileJSON.

O [OpenFreeMap](https://openfreemap.org/) oferece alguns estilos que pode usar gratuitamente. Experimente usar um dos seguintes URLs na definição **Mosaicos de mapa**:

| Nome     | URL                                              |
| -------- | ------------------------------------------------ |
| Dark     | `https://tiles.openfreemap.org/styles/dark`      |
| Positron | `https://tiles.openfreemap.org/styles/positron`  |
| Liberty  | ``https://tiles.openfreemap.org/styles/liberty`` |
#### Ligações úteis

- [Maputnik](https://maputnik.github.io/) para personalizar mosaicos de mapa.
- [Protomaps](https://protomaps.com/) para auto-alojamento de mosaicos de mapa.
- Outros serviços alojados com níveis gratuitos incluem [MapTiler](https://www.maptiler.com/) e [Mapbox](https://www.mapbox.com/).


## Dicas

Pode criar ligações para serviços de mapeamento populares usando [[Fórmulas]]. Por exemplo, o seu pino pode mostrar uma ligação para o Google Maps usando a seguinte fórmula:

```js
link("https://www.google.com/maps/search/" + file.name.replace(" ","+"),"Google Maps")
```

## Resolução de problemas

Se o mapa aparecer em branco quando carrega o plugin Maps pela primeira vez, experimente [[Atualizar Obsidian|atualizar a versão do instalador do Obsidian]].

O [plugin Maps](https://github.com/obsidianmd/obsidian-maps) é código aberto. Pode ajudar contribuindo com relatórios de erros, pedidos de funcionalidades e pull requests.
