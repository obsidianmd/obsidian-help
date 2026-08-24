---
permalink: import/html
aliases:
  - HTML 파일에서 노트 가져오기
cssclasses:
  - soft-embed
---
Obsidian을 사용하면 공식 [[들여오기|Importer 플러그인]]을 사용하여 개별 HTML 파일 및 전체 폴더의 HTML 파일을 쉽게 가져올 수 있어요. 이 기능은 웹 사이트 전체를 [[Obsidian 스타일 Markdown|Markdown]] 형식으로 저장하거나 HTML로 내보내는 도구에서 데이터를 가져오려는 경우 유용해요.

특정 앱에서 노트를 가져온다면 먼저 [[들여오기|Importer 플러그인]]에서 지원하는 앱 목록을 검토하여 이전하려는 데이터를 더 잘 보존하는 특정 변환기가 있는지 확인하는 것이 좋아요.

## HTML 데이터를 Obsidian으로 들여오기

공식 Obsidian [[들여오기]] 플러그인이 필요하며, [여기에서 설치](obsidian://show-plugin?id=obsidian-importer)할 수 있어요.

1. **설정**을 열어요.
2. **커뮤니티 플러그인**으로 이동하고 [Importer를 설치](obsidian://show-plugin?id=obsidian-importer)해요.
3. Importer 플러그인을 활성화해요.
4. 명령 팔레트나 리본 아이콘을 사용하여 **Importer** 플러그인을 열어요.
5. **파일 형식**에서 **HTML (.html)**을 선택해요.
6. HTML 파일 또는 폴더의 위치를 선택해요.
7. **Import**를 선택하여 생성된 템플릿을 검토하고 파일의 미리보기 예시를 확인해요.
8. **Import**를 다시 선택하고 가져오기가 완료될 때까지 기다려요.

### 들여오기 설정

- **첨부 파일 크기 제한(Attachment size limit)** : 지정된 크기보다 큰 첨부 파일을 가져오지 않아요.
- **최소 이미지 크기(Minimum image size)** : 지정된 크기보다 작은 이미지를 가져오지 않아요. 아이콘과 로고를 건너뛰는 데 사용할 수 있어요.

## 템플릿

[[Importer 템플릿|Importer 템플릿]]을 사용하여 데이터를 가져오는 방식을 완전히 구성할 수 있어요.

![[Importer 템플릿#Variables]]

또한 HTML 가져오기는 [[Obsidian Web Clipper 소개|Web Clipper]]와 동일한 많은 변수를 제공해요:

| 변수 | 설명 |
| --- | --- |
| `{{author}}` | 페이지 작성자. |
| `{{contentHtml}}` | HTML 형식으로 추출된 페이지 콘텐츠. |
| `{{description}}` | 페이지 설명 또는 발췌. |
| `{{domain}}` | 페이지 도메인. |
| `{{favicon}}` | 파비콘 URL. |
| `{{fullHtml}}` | 전체 페이지의 가공되지 않은 HTML. |
| `{{image}}` | 소셜 공유 이미지 URL. |
| `{{language}}` | 페이지 언어. |
| `{{published}}` | 게시 날짜, `date` 필터로 형식을 지정할 수 있어요. |
| `{{site}}` | 사이트 이름 또는 게시자. |
| `{{url}}` | 가져온 문서에서 발견된 소스 URL (사용 가능한 경우). |
| `{{words}}` | 단어 수. |
