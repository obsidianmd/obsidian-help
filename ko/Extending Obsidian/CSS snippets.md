[Build a theme](https://docs.obsidian.md/Themes/App+themes/Build+a+theme) 없이 Obsidian 외형의 일부를 수정하는 방법을 배워보세요.

CSS는 HTML 문서를 어떻게 표시할지를 설명하는 언어입니다. CSS 스니펫을 추가함으로써 Obsidian 사용자 인터페이스의 일부를 다시 정의할 수 있으며, 이때 제목의 크기 및 색상과 같은 부분을 사용자 정의할 수 있습니다. Obsidian에는 인터페이스 일부를 쉽게 사용자 정의할 수 있도록 [CSS variables](https://docs.obsidian.md/Reference/CSS+variables/CSS+variables)가 포함되어 있습니다.

Obsidian은 CSS 스니펫을 보관하는 폴더 내에서 CSS 스니펫을 찾습니다.

CSS 스니펫을 추가하려면 다음 단계를 따르세요.

1. **설정**(Settings)을 엽니다.
2. **외형 → CSS 스니펫**(Appearance → CSS snippets) 아래에서 **스니펫 폴더 열기**(Open snippets folder) (폴더 아이콘)를 선택합니다.
3. 스니펫 폴더에서 스니펫을 포함하는 CSS 파일을 만듭니다.
4. Obsidian에서 **외형 → CSS 스니펫**(Appearance → CSS snippets) 아래에서 **스니펫 다시 로드**(Reload snippets) (새로 고침 아이콘)를 선택하여 목록에서 스니펫을 볼 수 있습니다.

Obsidian은 CSS 스니펫의 변경 사항을 자동으로 감지하고 스니펫을 저장할 때 적용합니다. 변경 사항이 적용되기 위해 Obsidian을 다시 시작할 필요가 없습니다.

> [!tip] Example: Change text color
> 예를 들어, 텍스트 색상을 빨간색으로 변경하려면 다음 내용을 포함하는 `snippet.css`라는 파일을 만듭니다.
>
>
>
> ```css
> body {
>   --text-normal: red;
> }
> ```

## Learn more

- CSS에 익숙하지 않다면 Mozilla의 [Learn to style HTML using CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS)를 참조하세요.
- Obsidian 스타일링에 대한 추가 팁이 필요하면 [About styling](https://docs.obsidian.md/Reference/CSS+variables/About+styling)를 참조하세요.

