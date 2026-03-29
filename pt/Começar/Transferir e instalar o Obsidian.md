---
permalink: install
---
O Obsidian está disponível para todas as principais plataformas desktop e móveis. Estas são todas as formas suportadas para transferir e instalar o Obsidian.

## Instalar o Obsidian no Windows

1. Abra o seu navegador e aceda a [Transferir Obsidian](https://obsidian.md/download).
2. Em **Windows**, clique em **Universal** para transferir o ficheiro de instalação.
3. Abra o ficheiro de instalação e siga as instruções.
4. Abra o Obsidian da mesma forma que abriria qualquer outra aplicação.

## Instalar o Obsidian no macOS

1. Abra o seu navegador e aceda a [Transferir Obsidian](https://obsidian.md/download).
2. Em **macOS**, clique em **Universal** para transferir o ficheiro de instalação.
3. Abra o ficheiro de instalação.
4. Na janela que se abre, arraste o Obsidian para a pasta Aplicações.
5. Abra o Obsidian da mesma forma que abriria qualquer outra aplicação.

## Instalar o Obsidian no Linux

Se utiliza Linux, pode instalar o Obsidian de várias formas. Siga as instruções para o sistema de empacotamento que está a utilizar.

### Instalar o Obsidian usando Snap

1. Abra o seu navegador e aceda a [Transferir Obsidian](https://obsidian.md/download).
2. Em **Linux**, clique em **Snap** para transferir o ficheiro de instalação.
3. Abra um terminal e navegue até à pasta onde transferiu o ficheiro de instalação.
4. No terminal, execute o seguinte comando para instalar o pacote Snap: (o sinalizador `--dangerous` é necessário porque a Canonical, a empresa que criou o Snap, não reviu o nosso pacote; o sinalizador `--classic` permite ao Obsidian aceder fora da sandbox, onde as suas notas estão armazenadas)

   ```bash
   snap install obsidian_<version>_<arch>.snap --dangerous --classic
   ```

5. Abra o Obsidian da mesma forma que abriria qualquer outra aplicação.

### Instalar o Obsidian usando AppImage

1. Abra o seu navegador e aceda a [Transferir Obsidian](https://obsidian.md/download).
2. Em **Linux**, clique em **AppImage** para transferir o ficheiro de instalação.
3. Abra um terminal e navegue até à pasta onde transferiu o ficheiro de instalação.
4. No terminal, execute o seguinte comando para abrir o Obsidian:

   ```bash
   chmod u+x Obsidian-<version>.AppImage
   ./Obsidian-<version>.AppImage --no-sandbox
   ```
Nota: Em Chromebooks, o pacote `libnss3-dev` deve estar instalado ou poderá receber o erro `error while loading shared libraries: libnss3.so: cannot open shared object file: No such file or directory`.

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
2. Toque em **Instalar** para transferir a aplicação.
3. Abra o Obsidian da mesma forma que abriria qualquer outra aplicação.

Opcionalmente, pode transferir o APK para Android a partir da página [Transferir Obsidian](https://obsidian.md/download).

## Instalar o Obsidian no iPhone e iPad

1. Encontre o Obsidian na [App Store](https://apps.apple.com/us/app/obsidian-connected-notes/id1557175442).
2. Toque em **Obter** para transferir a aplicação.
3. Abra o Obsidian da mesma forma que abriria qualquer outra aplicação.
