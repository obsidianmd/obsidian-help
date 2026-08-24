---
permalink: import/notion
aliases:
  - Notion에서 노트 가져오기
cssclasses:
  - soft-embed
---
Obsidian을 사용하면 [[들여오기|Importer 플러그인]]을 통해 Notion에서 데이터를 쉽게 마이그레이션할 수 있어요. Notion 워크스페이스를 Obsidian과 다양한 앱에서 오프라인으로 사용할 수 있는 내구성 있는 Markdown 파일로 변환해 줘요.

Obsidian에서는 Notion 데이터를 들여오는 두 가지 방법을 제공해요:

1. **Notion 계정 (권장)** 은 워크스페이스에 직접 연결하여 데이터베이스와 수식([[베이스 소개|Bases]]로 변환)을 보존할 수 있어요. Notion 연동 토큰과 인터넷 연결이 필요해요.
2. **파일 들여오기**는 Notion의 `.zip` 내보내기 파일을 사용해요. 데이터베이스를 보존하지 않지만, API 토큰이나 인터넷 연결이 필요하지 않아요.

## 들여온 페이지 사용자 지정

두 가지 들여오기 방법 모두 들여오기 시작 전에 미리보기를 보여줘요. 생성된 템플릿을 편집하거나 보관함에서 Markdown 템플릿을 선택할 수 있어요. 커버 및 데이터베이스 속성 이름 등의 설정은 미리보기에 표시되는 생성된 속성을 업데이트해요. [[임포터 템플릿|Importer 템플릿]]을 참고하세요.

## Notion 계정에서 들여오기

### Notion API 액세스 토큰 생성

API를 통해 Notion 데이터에 접근하려면 액세스 토큰이 필요해요. 이 단계는 약 2분 정도 소요돼요.

토큰은 보통 `ntn_...`으로 시작하는 숫자와 문자의 긴 문자열로, Notion에서 데이터를 다운로드할 수 있게 해줘요.

1. [Notion Connections](https://app.notion.com/developers/connections) 대시보드에 로그인해요.
2. **새 연결(New connection)** 을 선택해요.
	1. 연결에 이름을 지정해요. 예: "Personal". 어떤 이름이든 사용 가능해요.
	2. 인증 방법으로 **액세스 토큰(Access token)** 을 선택해요.
	3. 내보낼 워크스페이스를 **설치 가능 대상(Installable in)** 으로 선택해요.

![[notion-integration.png#interface]]

3. **연결 생성(Create connection)** 을 클릭해요.
4. **구성(Configuration)** 탭에서 **액세스 토큰(Access token)** 필드에 API 토큰이 표시돼요.
5. **표시(Show)** 를 선택한 후 **복사(Copy)** 를 클릭해요.
6. 토큰을 비밀번호 관리자 등 안전한 곳에 저장해요.

![[notion-token.png#interface]]

다음으로, 들여올 Notion 페이지 및 데이터베이스에 연결 접근 권한을 부여해요.

1. 방금 생성한 연결의 **콘텐츠 접근(Content access)** 탭으로 이동해요.
2. 들여올 페이지 및 데이터베이스를 추가해요.

![[notion-content.png#interface]]

이제 Obsidian Importer를 사용하여 데이터를 변환할 수 있어요.

### API로 Notion 데이터 들여오기

공식 Obsidian [[들여오기]] 플러그인이 필요하며, [여기에서 설치](obsidian://show-plugin?id=obsidian-importer)할 수 있어요.

1. **[[설정]]** 을 열어요.
2. **커뮤니티 플러그인**으로 이동하고 [Importer를 설치](obsidian://show-plugin?id=obsidian-importer)해요.
3. Importer 플러그인을 활성화해요.
4. 명령어 팔레트나 리본 아이콘을 사용하여 **Importer** 플러그인을 열어요.
5. **파일 형식**에서 **Notion (API)** 를 선택해요.
6. **API 토큰** 아래에서 **연결...** 을 클릭하여 새 비밀을 추가해요. **ID**에는 `notion` 같은 이름을 지정하고, **비밀** 에는 Notion의 **액세스 토큰(Access token)** 을 붙여 넣어요.
7. **불러오기(Load)** 를 클릭하여 들여올 데이터베이스와 페이지를 선택해요.
8. 들여오기 옵션을 검토하고 편집해요.
9. **들여오기(Import)** 를 선택하여 생성된 템플릿을 검토하고 페이지의 미리보기 예시를 확인해요.
10. **들여오기(Import)** 를 다시 선택하고 들여오기가 완료될 때까지 기다려요.

### 제한 사항

> [!info] API 들여오기는 새 기능이에요
> Notion API 들여오기는 새로운 기능이에요. Notion 워크스페이스의 복잡성으로 인해 일부 엣지 케이스가 반영되지 않을 수 있어요. 변환 중 문제가 발생하면 [버그 리포트를 제출](https://github.com/obsidianmd/obsidian-importer/issues)해 주세요.

Notion API 속도 제한으로 인해 대용량 워크스페이스 들여오기에는 상당한 시간이 걸릴 수 있어요. 잠시 기다려 주세요.

Notion API의 제한으로 인해 일부 데이터는 사용할 수 없거나 변환되지 않을 수 있어요:

- 각 데이터베이스의 기본 보기만 들여와요.
- [연결된 데이터 소스](https://developers.notion.com/docs/working-with-databases#additional-types-of-databases)는 들여오지 않아요: *"Notion API는 현재 연결된 데이터 소스를 지원하지 않아요. 연동과 데이터베이스를 공유할 때 원본 데이터 소스가 포함되어 있는지 확인하세요!"*
- `People` 함수: `name()` 및 `email()`
- `Text` 함수: `style()` 및 `unstyle()`

또한 Importer는 다음과 같은 변경을 적용해요:

- 하위 페이지나 데이터베이스가 없는 페이지는 `[파일명]/[파일명].md` 대신 `[파일명].md`로 들여와요.
- 데이터베이스는 항상 `[데이터베이스 이름]` 폴더와 그 안의 `[데이터베이스 이름].base` 파일 형태로 표현돼요.

## Notion 파일 들여오기 (.zip)

파일 들여오기는 Notion 데이터를 들여오는 또 다른 방법이에요. 이 방법은 데이터베이스를 보존하지 않지만, API 토큰이나 인터넷 연결이 필요하지 않아요.

### Notion에서 데이터 내보내기

들여오기를 준비하려면 Notion의 HTML 내보내기 형식을 사용하여 전체 워크스페이스를 내보내야 해요. 중요한 데이터가 누락될 수 있으므로 Notion의 Markdown 내보내기는 사용하지 않는 것을 권장해요. 전체 워크스페이스 콘텐츠를 내보내려면 Notion 워크스페이스 관리자 권한이 필요해요.

1. Notion 사이드바 상단의 **설정(Settings)** 으로 이동해요.
2. **워크스페이스** 아래에서 **일반(General)** 을 선택해요.
3. **워크스페이스 콘텐츠 전체 내보내기(Export all workspace content)** 를 찾아 선택해요.
4. **내보내기 형식(Export format)** 에서 **HTML**을 선택해요.
5. **모두 포함(Include everything)** 을 선택해요.
6. **하위 페이지 폴더 생성(Create folders for subpages)** 을 활성화해요.
7. 이메일로 또는 브라우저에서 `.zip` 파일을 받게 돼요.

![[notion-export.png#interface]]

![[notion-export-2.png#interface]]

### Notion .zip 파일 들여오기

공식 Obsidian [[들여오기]] 플러그인이 필요하며, [여기에서 설치](obsidian://show-plugin?id=obsidian-importer)할 수 있어요.

1. **[[설정]]** 을 열어요.
2. **커뮤니티 플러그인**으로 이동하고 [Importer를 설치](obsidian://show-plugin?id=obsidian-importer)해요.
3. Importer 플러그인을 활성화해요.
4. 명령어 팔레트나 리본 아이콘을 사용하여 **Importer** 플러그인을 열어요.
5. **파일 형식**에서 **Notion (.zip)** 을 선택해요.
6. 들여올 Notion 파일이 들어 있는 `.zip` 파일을 선택해요. *내부 링크가 올바르게 조정될 수 있도록 모든 Notion 데이터를 한꺼번에 가져오는 것이 좋아요.*
7. _선택적으로_ 들여오기용 폴더를 선택하세요. Notion 페이지 및 데이터베이스가 이 폴더 내에 중첩돼요.
8. **하위 폴더에 상위 페이지 저장(Save parent pages in subfolders)** 을 활성화하여 Notion 구조를 유지하세요. *Notion에서는 폴더 안에 콘텐츠를 작성할 수 있지만 Obsidian에서는 불가능하며, 해당 페이지는 폴더 하위 페이지로 추가돼요.*
9. **들여오기(Import)** 를 선택하여 생성된 템플릿을 검토하고 페이지의 미리보기 예시를 확인해요.
10. **들여오기(Import)** 를 다시 선택하고 들여오기가 완료될 때까지 기다려요.

### 문제 해결

Notion에서 들여오기 중 문제가 발생하면:

- Notion에서 내보내기 형식으로 **Markdown이 아닌** **HTML**을 사용했는지 확인하세요.
- 들여오는 중 Obsidian이 멈추는 것처럼 보이면, 커뮤니티 플러그인을 비활성화하고 다시 시도하세요.

다른 문제가 발생했나요? [Importer 리포지토리](https://github.com/obsidianmd/obsidian-importer/issues)에서 다른 사용자들이 경험한 사례를 검색해 보세요.

#### 대용량 워크스페이스 들여오기

여러 기가바이트의 데이터가 포함된 워크스페이스를 들여오는 경우, Notion에서 내보낸 파일에 중첩된 `.zip` 파일이 포함될 수 있어요. 이 경우 다음과 같은 오류 메시지가 표시될 수 있어요:

```
Import failed {id}.zip/{id}-Part-1.zip undefined.
```

이 오류가 발생하면 Notion에서 받은 파일의 압축을 풀고, 중첩된 `Export-{id}-Part-1.zip` 파일을 들여오세요.

## 템플릿

[[임포터 템플릿|Importer 템플릿]]을 사용하여 Notion 데이터가 들여와지는 방식을 완전히 설정할 수 있어요.

![[임포터 템플릿#Variables]]
