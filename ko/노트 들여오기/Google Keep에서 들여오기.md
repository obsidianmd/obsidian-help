---
permalink: import/google-keep
aliases:
  - Google Keep에서 노트 가져오기
---

Obsidian을 사용하면 Google Keep에서 노트를 쉽게 마이그레이션할 수 있어요. 이를 위해서 [[Importer|Importer 플러그인]]을 사용해요.

## Google Keep에서 데이터 내보내기

1. [Google Takeout](https://takeout.google.com/settings/takeout)으로 이동하고 Google 계정에 로그인해요.
2. 오른쪽 상단의 **모두 선택 해제**를 클릭해요.
3. 아래로 스크롤하여 목록에서 **Keep**를 선택해요.
4. 페이지 하단으로 스크롤하고 **다음 단계**를 클릭해요.
5. 다음 화면에서 **내보내기 생성** 버튼을 클릭해요.
6. 사용 가능한 경우 `.zip` 파일을 다운로드해요.

## Google Keep 데이터를 Obsidian으로 들여오기

공식 Obsidian [[Importer]] 플러그인이 필요하며, 이를 [여기에서 설치](obsidian://show-plugin?id=obsidian-importer)할 수 있어요.

1. **설정**을 열어요.
2. **커뮤니티 플러그인**으로 이동하고 [Importer를 설치](obsidian://show-plugin?id=obsidian-importer)해요.
3. Importer 플러그인을 활성화해요.
4. 명령어 팔레트나 리본 아이콘을 사용하여 **Importer** 플러그인을 열어요.
5. **파일 형식**에서 **Google Keep (.zip)** 을 선택해요.
6. .zip 파일의 위치를 선택해요.
7. **가져오기**를 클릭하고 가져오기가 완료될 때까지 기다려요.
8. 끝났어요!

### 지원되는 기능

- Google Keep은 들여쓰기 정보를 내보내지 않기 때문에 모든 체크리스트는 최상위 항목으로 가져와요.
- 노트의 알림 및 사용자 할당은 Obsidian에서 지원되지 않기 때문에 가져오지 않아요.
- 기타 모든 정보는 내용과 태그의 조합으로 가져와요.
