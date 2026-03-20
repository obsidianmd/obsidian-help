---
permalink: install
---
Obsidian은 주요 데스크톱 및 모바일 플랫폼에서 사용할 수 있습니다. 아래는 Obsidian을 다운로드하고 설치하는 지원 방법입니다.

## Windows에서 Obsidian 설치하기

1. 브라우저를 열고 [Obsidian 다운로드](https://obsidian.md/download) 페이지로 이동합니다.
2. **Windows** 아래에서 **Universal**을 클릭하여 설치 파일을 다운로드합니다.
3. 설치 파일을 열고 안내에 따라 진행합니다.
4. 다른 앱과 같은 방식으로 Obsidian을 실행합니다.

## macOS에서 Obsidian 설치하기

1. 브라우저를 열고 [Obsidian 다운로드](https://obsidian.md/download) 페이지로 이동합니다.
2. **macOS** 아래에서 **Universal**을 클릭하여 설치 파일을 다운로드합니다.
3. 설치 파일을 엽니다.
4. 열린 창에서 Obsidian을 Applications 폴더로 드래그합니다.
5. 다른 앱과 같은 방식으로 Obsidian을 실행합니다.

## Linux에서 Obsidian 설치하기

Linux를 사용하는 경우 여러 가지 방법으로 Obsidian을 설치할 수 있습니다. 사용 중인 패키지 시스템에 맞는 안내를 따르세요.

### Snap을 사용하여 Obsidian 설치하기

1. 브라우저를 열고 [Obsidian 다운로드](https://obsidian.md/download) 페이지로 이동합니다.
2. **Linux** 아래에서 **Snap**을 클릭하여 설치 파일을 다운로드합니다.
3. 터미널을 열고 설치 파일을 다운로드한 폴더로 이동합니다.
4. 터미널에서 다음 명령을 실행하여 Snap 패키지를 설치합니다. `--dangerous` 플래그는 Snap을 만든 Canonical이 이 패키지를 검토하지 않았기 때문에 필요하며, `--classic` 플래그는 Obsidian이 노트가 저장된 샌드박스 외부에 접근할 수 있도록 합니다.

   ```bash
   snap install obsidian_<version>_<arch>.snap --dangerous --classic
   ```

5. 다른 앱과 같은 방식으로 Obsidian을 실행합니다.

### AppImage를 사용하여 Obsidian 설치하기

1. 브라우저를 열고 [Obsidian 다운로드](https://obsidian.md/download) 페이지로 이동합니다.
2. **Linux** 아래에서 **AppImage**를 클릭하여 설치 파일을 다운로드합니다.
3. 터미널을 열고 설치 파일을 다운로드한 폴더로 이동합니다.
4. 터미널에서 다음 명령을 실행하여 Obsidian을 엽니다:

   ```bash
   chmod u+x Obsidian-<version>.AppImage
   ./Obsidian-<version>.AppImage --no-sandbox
   ```
참고: Chromebook에서는 `libnss3-dev` 패키지가 설치되어 있어야 합니다. 그렇지 않으면 `error while loading shared libraries: libnss3.so: cannot open shared object file: No such file or directory` 오류가 발생할 수 있습니다.

### Flatpak을 사용하여 Obsidian 설치하기

1. 터미널에서 다음 명령을 실행하여 Obsidian을 설치합니다:

   ```bash
   flatpak install flathub md.obsidian.Obsidian
   ```

2. 다음 명령을 실행하여 Obsidian을 엽니다:

   ```bash
   flatpak run md.obsidian.Obsidian
   ```

## Android에서 Obsidian 설치하기

1. [Play Store](https://play.google.com/store/apps/details?id=md.obsidian)에서 Obsidian을 찾습니다.
2. **설치**를 탭하여 앱을 다운로드합니다.
3. 다른 앱과 같은 방식으로 Obsidian을 실행합니다.

선택적으로 [Obsidian 다운로드](https://obsidian.md/download) 페이지에서 Android용 APK를 다운로드할 수도 있습니다.

## iPhone 및 iPad에서 Obsidian 설치하기

1. [App Store](https://apps.apple.com/us/app/obsidian-connected-notes/id1557175442)에서 Obsidian을 찾습니다.
2. **받기**를 탭하여 앱을 다운로드합니다.
3. 다른 앱과 같은 방식으로 Obsidian을 실행합니다.
