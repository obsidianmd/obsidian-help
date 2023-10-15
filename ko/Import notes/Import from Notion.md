---
permalink: import/notion
---
Obsidian을 사용하면 [[Importer|Importer 플러그인]]을 사용하여 Notion에서 노트를 쉽게 마이그레이션할 수 있습니다.

## Export your data from Notion

Obsidian은 Notion의 HTML 내보내기 형식을 사용합니다. 전체 워크스페이스를 내보내는 방법에 대한 Notion의 지침은 [Notion 웹사이트](https://www.notion.so/help/export-your-content)에서 확인할 수 있습니다. 이 옵션을 보려면 워크스페이스 관리자 여야합니다.

1. 왼쪽 사이드바 상단의 **설정 및 구성원(Setting & members)** 으로 이동합니다.
2. 해당 창의 사이드바에서 **설정**을 선택합니다.
3. 아래로 스크롤하여 **워크스페이스 콘텐츠 전체 내보내기(Export all workspace content)** 버튼을 클릭합니다.
4. **내보내기 형식(Export format)** 에서 **HTML**을 선택합니다.
5. 이메일로 또는 브라우저에서 `.zip` 파일을 받게 됩니다.

![[notion-export.png]]

## Import your Notion data into Obsidian

공식 Obsidian [[Importer]] 플러그인이 필요하며, 이를 [여기에서 설치](obsidian://show-plugin?id=obsidian-importer)할 수 있습니다.

1. **설정**을 엽니다.
2. **커뮤니티 플러그인**으로 이동하고 [Importer를 설치](obsidian://show-plugin?id=obsidian-importer)합니다.
3. Importer 플러그인을 활성화합니다.
4. 명령어 팔레트나 리본 아이콘을 사용하여 **Importer** 플러그인을 엽니다.
5. **파일 형식**에서 **Notion (.zip)** 을 선택합니다.
6. 가져올 Notion 파일이 들어 있는 `.zip` 파일을 선택합니다. _내부 링크가 올바르게 조정될 수 있도록 모든 Notion을 한꺼번에 가져오는 것이 좋습니다._
7. 선택적으로 가져오기용 폴더를 선택하세요. Notion 페이지 및 데이터베이스가 이 폴더 내에 중첩됩니다.
8. **가져오기**를 클릭하고 가져오기가 완료될 때까지 기다립니다.
9. 끝났습니다!
