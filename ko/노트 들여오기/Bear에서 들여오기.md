---
permalink: import/bear
aliases:
  - Bear에서 노트 가져오기
---

Obsidian을 사용하면 Bear에서 노트를 쉽게 마이그레이션할 수 있어요. 이를 위해서 [[Importer|Importer 플러그인]]을 사용해요.

## Bear에서 데이터 내보내기

Obsidian은 Bear의 백업 형식인 `.bear2bk` 파일을 사용해요. Bear의 백업을 생성하는 방법은 [Bear 웹사이트](https://bear.app/faq/backup-restore/)에서 확인할 수 있어요.

1. Bear를 열어요.
2. 백업 생성
    - macOS에서: **파일** → **노트 백업**.
    - iOS에서: 사이드바 상단에서 더 많은 메뉴 (⋮)를 클릭하고 **모든 노트 백업**을 선택해요.
3. 백업 파일을 저장할 위치를 선택해요.
4. **노트 내보내기(Export notes)** 를 클릭해요.
5. 이제 모든 노트를 포함하는 하나의 `.bear2bk` 파일이 있어야 해요.

## Bear 데이터를 Obsidian으로 들여오기

Obsidian에서 Bear 데이터를 가져오려면 공식 Obsidian [[Importer]] 플러그인이 필요하며, 이를 [여기에서 설치](obsidian://show-plugin?id=obsidian-importer)할 수 있어요.

1. **설정(Settings)** 을 열어요.
2. **커뮤니티 플러그인(Community Plugins)** 으로 이동하고 [Importer를 설치](obsidian://show-plugin?id=obsidian-importer)해요.
3. Importer 플러그인을 활성화해요.
4. 명령어 팔레트나 리본 아이콘을 사용하여 **Importer** 플러그인을 열어요.
5. **파일 형식**에서 **Bear (.bear2bk)** 을 선택해요.
6. Bear 백업 파일의 위치를 선택해요.
7. **가져오기**를 클릭하고 가져오기가 완료될 때까지 기다려요.
8. 끝났어요!
