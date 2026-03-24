---
permalink: snippets
publish: true
mobile: true
description: Learn how to change parts of the Obsidian app’s appearance without creating a full theme.
---

[테마를 빌드](https://docs.obsidian.md/Themes/App+themes/Build+a+theme)하지 않고도 Obsidian 앱의 외형을 수정하는 방법을 알아보세요.

> [!tip] [[Obsidian Publish 소개|Obsidian Publish]]의 CSS 처리에 대한 안내를 찾고 있다면 [[사이트 사용자 지정]]를 확인하세요.

CSS는 HTML의 외형을 제어하는 언어예요. CSS 스니펫을 추가하면 제목의 크기와 색상 등 Obsidian 사용자 인터페이스의 일부를 변경할 수 있어요. Obsidian에는 인터페이스를 쉽게 사용자 지정할 수 있도록 도와주는 [CSS 변수](https://docs.obsidian.md/Reference/CSS+variables/CSS+variables)가 있어요.

Obsidian은 보관함의 [[설정 폴더]] 내에서 CSS 스니펫을 찾아요.

## 스니펫 추가하기

**데스크톱** ![[lucide-monitor-check.svg#icon]]에서 CSS 스니펫을 추가하려면 다음 단계를 따르세요:

1. **[[설정]]**을 열어요 ![[lucide-settings.svg#icon]].
2. **외형 → CSS 스니펫**에서 **스니펫 폴더 열기** ![[lucide-folder-open.svg#icon]]를 선택해요.
3. 스니펫 폴더에서 스니펫이 포함된 CSS 파일을 생성해요.
4. Obsidian에서 **외형 → CSS 스니펫**의 **스니펫 다시 불러오기** ![[lucide-refresh-cw.svg#icon]]를 선택하면 목록에 스니펫이 나타나요.
5. 토글을 클릭하여 스니펫을 활성화해요.

**모바일/태블릿** ![[obsidian-icon-smartphone.svg#icon]]에서 CSS 스니펫을 추가하려면 다음 단계를 따르세요:

1. 파일 관리자를 열고 보관함을 찾아요. 보관함 위치는 _보관함 관리…_ 에서 보관함을 탭하고 경로를 확인하면 돼요.
2. [[설정 폴더]]를 열고 `snippets` 폴더가 없으면 생성해요.
3. 이 폴더에 CSS 스니펫을 추가해요.
4. Obsidian의 **[[설정]]** ![[lucide-settings.svg#icon]]을 열어요.
5. 왼쪽에서 **외형**을 선택해요.
6. **CSS 스니펫** 섹션까지 스크롤해요.
7. **스니펫 다시 불러오기** ![[lucide-refresh-cw.svg#icon]]를 탭하여 목록을 새로고침해요.
8. 토글을 탭하여 스니펫을 활성화해요.

또는 다음과 같은 방법도 있어요:
- 동기화 서비스를 사용하여 변경 사항을 [[기기 간 노트 동기화|동기화]]해요.
- 커뮤니티 플러그인을 사용하여 Obsidian 내에서 스니펫을 생성해요.

활성화되면 Obsidian은 CSS 스니펫의 변경 사항을 자동으로 감지하고 파일을 저장할 때 적용해요.

> [!tip] 변경 사항을 적용하기 위해 Obsidian을 다시 시작할 필요는 없어요. 그러나 현재 테마나 노트의 변경 사항을 보려면 [[명령어 팔레트]] 명령을 사용하여 저장 없이 Obsidian을 새로고침해야 할 수도 있어요.

## Obsidian용 CSS 작성하기

Obsidian은 CSS 작성을 더 쉽고 강력하게 만드는 여러 방법을 제공해요.

Obsidian의 일부를 쉽게 수정할 수 있는 다양한 [CSS 변수](https://docs.obsidian.md/Reference/CSS+variables/CSS+variables)와 하나 또는 여러 노트의 외형을 변경할 수 있는 내장 [[속성#속성 유형|속성 유형]]이 있어요.

> [!example] 변수
> 여섯 가지 [[기본 서식 구문#제목|제목 수준]]의 색상을 무지개색으로 변경하려면 다음 내용으로 `headers.css` 파일을 생성하세요:
>
> ```css
> body {
>   --h1-color: red;
>   --h2-color: orange;
>   --h3-color: yellow;
>   --h4-color: green;
>   --h5-color: blue;
>   --h6-color: pink;
> }
> ```

> [!example] CSS 클래스
> 사용자 지정 CSS 클래스 이름(또는 CSS 클래스 목록)을 미리 정의된 [[속성]] `cssclasses`에 할당하여 하나 이상의 노트를 다른 노트와 다르게 보이게 할 수 있어요.
> 
> **CSS**:
> ```css
> .red-border img {
>    border-color: #ff0000;
> }
> ```
> 
> **YAML/속성**:
> ```yaml
> cssclasses:
>  - red-border
> ```
> 
> `cssclasses` 속성에 `red-border` 값이 포함된 모든 노트에서 이미지가 빨간색 테두리로 표시돼요.

CSS 파일이 유효하고 올바르게 서식이 지정되었는지 확인하려면 [CSS Validation Service](https://jigsaw.w3.org/css-validator/)와 같은 도구로 검증하는 것을 권장해요. 유효하지 않은 CSS는 작동하지 않아요.

## 더 알아보기

- CSS를 처음 접하신다면 Mozilla의 [Learn to style HTML using CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS)를 확인하세요.
- Obsidian 스타일링에 대한 자세한 정보는 다음을 참고하세요:
  - [About styling](https://docs.obsidian.md/Reference/CSS+variables/About+styling)
  - [Build a theme](https://docs.obsidian.md/Themes/App+themes/Build+a+theme)
  - [Build a Publish theme](https://docs.obsidian.md/Themes/Obsidian+Publish+themes/Build+a+Publish+theme)
  - [Obsidian CSS Inspector workflow](https://forum.obsidian.md/t/obsidian-css-inspector-workflow/58178)
