---
permalink: install
---
O Obsidian está disponível para todas as principais plataformas desktop e móveis. Estas são todas as formas suportadas de baixar e instalar o Obsidian.

## Instalar o Obsidian no Windows

1. Abra seu navegador e acesse [Baixar Obsidian](https://obsidian.md/pt-BR/download).
2. Em **Windows**, clique em **Universal** para baixar o arquivo de instalação.
3. Abra o arquivo de instalação e siga as instruções.
4. Abra o Obsidian da mesma forma que você abriria qualquer outro aplicativo.

## Instalar o Obsidian no macOS

1. Abra seu navegador e acesse [Baixar Obsidian](https://obsidian.md/pt-BR/download).
2. Em **macOS**, clique em **Universal** para baixar o arquivo de instalação.
3. Abra o arquivo de instalação.
4. Na janela que se abre, arraste o Obsidian para a pasta Aplicativos.
5. Abra o Obsidian da mesma forma que você abriria qualquer outro aplicativo.

## Instalar o Obsidian no Linux

Se você usa Linux, pode instalar o Obsidian de várias maneiras. Siga as instruções para o sistema de empacotamento que você está utilizando.

### Instalar o Obsidian usando Snap

1. Abra seu navegador e acesse [Baixar Obsidian](https://obsidian.md/pt-BR/download).
2. Em **Linux**, clique em **Snap** para baixar o arquivo de instalação.
3. Abra um terminal e navegue até a pasta onde você baixou o arquivo de instalação.
4. No terminal, execute o seguinte comando para instalar o pacote Snap: (a flag `--dangerous` é necessária porque a Canonical, a empresa que criou o Snap, não revisou nosso pacote; a flag `--classic` permite que o Obsidian acesse fora do sandbox, onde suas notas estão armazenadas)

   ```bash
   snap install obsidian_<version>_<arch>.snap --dangerous --classic
   ```

5. Abra o Obsidian da mesma forma que você abriria qualquer outro aplicativo.

### Instalar o Obsidian usando AppImage

1. Abra seu navegador e acesse [Baixar Obsidian](https://obsidian.md/pt-BR/download).
2. Em **Linux**, clique em **AppImage** para baixar o arquivo de instalação.
3. Abra um terminal e navegue até a pasta onde você baixou o arquivo de instalação.
4. No terminal, execute o seguinte comando para abrir o Obsidian:

   ```bash
   chmod u+x Obsidian-<version>.AppImage
   ./Obsidian-<version>.AppImage --no-sandbox
   ```
Nota: Em Chromebooks, o pacote `libnss3-dev` deve estar instalado ou você pode receber o erro `error while loading shared libraries: libnss3.so: cannot open shared object file: No such file or directory`.

### Instalar o Obsidian usando Flatpak

1. No seu terminal, execute o seguinte comando para instalar o Obsidian:

   ```bash
   flatpak install flathub md.obsidian.Obsidian
   ```

2. Abra o Obsidian executando o seguinte comando:

   ```bash
   flatpak run md.obsidian.Obsidian
   ```

## Instalar o Obsidian no Android

1. Encontre o Obsidian na [Play Store](https://play.google.com/store/apps/details?id=md.obsidian).
2. Toque em **Instalar** para baixar o aplicativo.
3. Abra o Obsidian da mesma forma que você abriria qualquer outro aplicativo.

Opcionalmente, você pode baixar o APK para Android na página [Baixar Obsidian](https://obsidian.md/pt-BR/download).

## Instalar o Obsidian no iPhone e iPad

1. Encontre o Obsidian na [App Store](https://apps.apple.com/us/app/obsidian-connected-notes/id1557175442).
2. Toque em **Obter** para baixar o aplicativo.
3. Abra o Obsidian da mesma forma que você abriria qualquer outro aplicativo.
