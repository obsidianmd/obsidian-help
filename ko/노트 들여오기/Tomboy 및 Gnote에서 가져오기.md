---
permalink: import/tomboy
cssclasses:
  - soft-embed
---
Obsidian은 공식 [[들여오기|들여오기 플러그인]]을 사용해 Tomboy와 Gnote에서 노트를 이동시킬 수 있어요. 들여오기 플러그인은 앱의 `.note` 파일을 직접 읽고 XML 콘텐츠를 Markdown으로 변환해요.

## 노트 파일 찾기

Tomboy와 Gnote는 보통 다음 폴더에 노트를 저장해요:

- **macOS:** `~/Library/Application Support/Tomboy`
- **Windows:** `%APPDATA%\Tomboy`
- **Linux:** `~/.local/share/tomboy` 또는 `~/.local/share/gnote`

데이터 폴더를 옮겼거나 다른 버전의 앱을 사용하는 경우 정확한 위치가 다를 수 있어요.

## Tomboy 또는 Gnote 노트 들여오기

1. **[[설정]] → 커뮤니티 플러그인**을 열고 [들여오기를 설치](obsidian://show-plugin?id=obsidian-importer)하세요.
2. 들여오기 플러그인을 활성화하세요.
3. [[명령어 팔레트]] 또는 리본 아이콘을 사용해 **들여오기**를 여세요.
4. **파일 서식**에서 **Tomboy/Gnote (.note)**를 선택하세요.
5. 개별 `.note` 파일 또는 해당 파일이 포함된 폴더를 선택하세요.
6. 들여오기 옵션, 생성된 템플릿, 미리보기 예시를 검토하세요.
7. **Import**를 선택하고 들여오기가 완료될 때까지 기다리세요.

## 템플릿

[[임포터 템플릿|임포터 템플릿]]을 사용해 데이터가 들여와지는 방식을 완전히 설정할 수 있어요.

![[임포터 템플릿#변수]]
