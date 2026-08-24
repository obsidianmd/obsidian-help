---
permalink: import/google-keep
aliases:
  - Google Keep에서 노트 가져오기
cssclasses:
  - soft-embed
---
Obsidian을 사용하면 Google Keep에서 노트를 쉽게 마이그레이션할 수 있어요. 이를 위해서 [[들여오기|Importer 플러그인]]을 사용해요. Google Keep 데이터를 Obsidian 및 다른 많은 앱에서 사용할 수 있는 내구성 있는 마크다운 파일로 변환해요.

## Google Keep에서 데이터 내보내기

1. [Google Takeout](https://takeout.google.com/settings/takeout)으로 이동하고 Google 계정에 로그인해요.
2. 오른쪽 상단의 **모두 선택 해제**를 클릭해요.
3. 아래로 스크롤하여 목록에서 **Keep**를 선택해요.
4. 페이지 하단으로 스크롤하고 **다음 단계**를 클릭해요.
5. 다음 화면에서 **내보내기 생성** 버튼을 클릭해요.
6. 사용 가능한 경우 `.zip` 파일을 다운로드해요.

## Google Keep 데이터를 Obsidian으로 들여오기

공식 Obsidian [[들여오기]] 플러그인이 필요하며, 이를 [여기에서 설치](obsidian://show-plugin?id=obsidian-importer)할 수 있어요.

1. **설정**을 열어요.
2. **커뮤니티 플러그인**으로 이동하고 [Importer를 설치](obsidian://show-plugin?id=obsidian-importer)해요.
3. Importer 플러그인을 활성화해요.
4. 명령어 팔레트나 리본 아이콘을 사용하여 **Importer** 플러그인을 열어요.
5. **파일 형식**에서 **Google Keep (.zip)** 을 선택해요.
6. .zip 파일의 위치를 선택해요.
7. **Import**를 선택하여 생성된 템플릿을 검토하고 노트의 미리보기 예시를 확인해요.
8. **Import**를 다시 선택하고 가져오기가 완료될 때까지 기다려요.

## 제한 사항

- Google Keep은 들여쓰기 정보를 내보내지 않기 때문에 모든 체크리스트는 최상위 항목으로 가져와요.
- 노트의 알림 및 사용자 할당은 Obsidian에서 지원되지 않기 때문에 가져오지 않아요.


## 템플릿

[[임포터 템플릿|Importer 템플릿]]을 사용하여 Google Keep 데이터가 가져와지는 방식을 완전히 구성할 수 있어요.

![[임포터 템플릿#Variables]]

또한 Google Keep은 원본 텍스트, 목록, 라벨, 첨부 파일, 색상, 공유 데이터, 작업, 주석 및 노트 상태에 대한 변수를 제공해요.

| 변수          | 설명                                       |
| ----------------- | ------------------------------------------------- |
| `{{isArchived}}`  | 노트가 보관되었는지 여부.                     |
| `{{isPinned}}`    | 노트가 고정되었는지 여부.                       |
| `{{isTrashed}}`   | 노트가 휴지통에 있는지 여부.                 |
| `{{color}}`       | Google Keep 색상 이름.                           |
| `{{labels}}`      | 라벨 레코드 배열.                           |
| `{{sharees}}`     | 노트가 공유된 사람들의 배열.    |
| `{{annotations}}` | 링크 주석 레코드 배열.                 |

원본 Google Keep 제목은 `{{source.title}}`로 사용할 수 있어요. 공유된 `{{title}}` 변수는 가져온 노트 제목을 포함해요.
