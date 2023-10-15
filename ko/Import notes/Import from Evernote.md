---
permalink: import/evernote
---
Obsidian을 사용하면 Evernote에서 노트를 쉽게 마이그레이션할 수 있습니다. 이를 위해서 [[Importer|Importer 플러그인]]을 사용합니다.

## Export your data from Evernote

Obsidian은 Evernote의 내보내기 형식인 `.enex` 파일을 사용합니다.

데이터 내보내기에 대한 Evernote의 지침은 [Evernote 웹사이트](https://help.evernote.com/hc/en-us/articles/209005557-Export-notes-and-notebooks-as-ENEX-or-HTML)에서 확인할 수 있습니다. 이 방법을 사용하면 데스크톱 클라이언트에서 전체 노트북(Notebooks)을 내보낼 수 있습니다.

1. 노트북(Notebooks) 화면으로 이동합니다.
2. **더 많은 작업** (`•••` 아이콘)을 클릭하고 **노트북 내보내기...** 를 선택합니다.
3. 파일 형식으로 **ENEX**를 선택합니다.
4. 내보낸 `.enex` 파일을 저장할 위치를 선택합니다.

## Import your Evernote data into Obsidian

Evernote 데이터를 Obsidian으로 가져오려면 공식 Obsidian [[Importer]] 플러그인이 필요하며, 이를 [여기에서 설치](obsidian://show-plugin?id=obsidian-importer)할 수 있습니다.

1. **설정**을 엽니다.
2. **커뮤니티 플러그인**으로 이동하고 [Importer를 설치](obsidian://show-plugin?id=obsidian-importer)합니다.
3. Importer 플러그인을 활성화합니다.
4. 명령 팔레트나 리본 아이콘을 사용하여 **Importer** 플러그인을 엽니다.
5. **파일 형식**에서 **Evernote (.enex)** 을 선택합니다.
6. Evernote 백업 파일의 위치를 선택합니다.
7. **가져오기**를 클릭하고 가져오기가 완료될 때까지 기다립니다.
8. 끝났습니다!

### Import settings

Evernote에서 더 고급 가져오기 옵션을 사용하려면 [Yarle을 통한 가져오기를 시도](https://github.com/akosbalasko/yarle)할 수도 있습니다.
