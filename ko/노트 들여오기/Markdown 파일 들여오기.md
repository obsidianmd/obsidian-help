---
permalink: import/markdown
aliases:
  - Markdown 파일에서 노트 가져오기
cssclasses:
  - soft-embed
---
Obsidian은 주 노트 형식으로 Markdown `.md` 파일을 사용해요. 이로 인해 Markdown 파일을 Obsidian으로 가져오는 것이 쉬워요. 많은 앱이 Markdown 파일을 편집하거나 이 형식으로 내보낼 수 있어요.

Obsidian 보관소에 Markdown 파일을 추가하는 여러 가지 방법이 있어요:

1. [[파일 탐색기|파일 탐색기]] 창으로 파일이나 폴더를 끌어다 놓아요.
2. 시스템 파일 브라우저(예: Windows 탐색기 또는 macOS의 Finder)를 사용하여 파일을 직접 Obsidian 보관소 폴더로 이동해요.

## Importer를 사용하여 Markdown 파일 가져오기

가져오기 시 폴더를 선택하거나, `.zip` 아카이브를 가져오거나, 서식을 표준화하거나, 인라인 태그를 [[속성|속성]]으로 이동하거나, 템플릿을 적용하려면 공식 [[들여오기|Importer 플러그인]]을 사용하세요.

1. **[[설정|설정]] → 커뮤니티 플러그인**을 열고 [Importer를 설치](obsidian://show-plugin?id=obsidian-importer)하세요.
2. Importer 플러그인을 활성화하세요.
3. [[명령어 팔레트|명령어 팔레트]] 또는 리본 아이콘을 사용하여 **Importer**를 여세요.
4. **File format**에서 **Markdown (.md, .zip)**을 선택하세요.
5. 개별 Markdown 파일, 폴더 또는 zip 아카이브를 선택하세요.
6. 감지된 폴더, 출력 옵션, 생성된 템플릿 및 미리보기 예시를 검토하세요.
7. **Import**를 선택하고 가져오기가 완료될 때까지 기다리세요.

가져온 노트의 이름, 속성 및 내용을 사용자 지정하려면 [[임포터 템플릿]]를 참조하세요.

## 템플릿

데이터를 가져오는 방식을 완전히 구성하려면 [[임포터 템플릿|Importer 템플릿]]을 사용하세요.

![[임포터 템플릿#Variables]]
