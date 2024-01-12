---
aliases:
- How to/Internal link
- How to/Link to blocks
---

_내부 링크_를 사용하여 노트에서 노트, 첨부 파일 및 기타 파일에 연결하는 방법을 알아보세요. 노트를 연결하면 지식 네트워크를 만들 수 있습니다. ^b15695

Obsidian은 파일 이름을 바꿀 때 내부 링크를 자동으로 업데이트할 수 있습니다. 대신 프롬프트를 받고 싶다면 **설정 → 파일 및 링크 → 내부 링크 자동 업데이트**(**Settings → Files & Links → Automatically update internal links**)를 비활성화할 수 있습니다.

## Supported formats for internal links

Obsidian은 다음과 같은 링크 형식을 지원합니다:

- 위키링크: `[[Three laws of motion]]`
- 마크다운: `[Three laws of motion](Three%20laws%20of%20motion.md)`

위의 예제는 동등하며, 에디터에서 동일하게 표시되며 동일한 노트로 연결됩니다.

> [!note]
> 마크다운 형식을 사용할 때는 [URL 인코딩](https://en.wikipedia.org/wiki/Percent-encoding)을 제대로 해야 합니다. 예를 들어, 공백은 `%20`으로 변환되어야 합니다.

기본적으로 더 간략한 형식인 위키링크 형식을 사용하도록 설정되어 있습니다. 상호 운용성이 중요하다면 위키링크를 비활성화하고 대신 마크다운 링크를 사용할 수 있습니다.

마크다운 형식을 사용하려면:

1. **설정**을 엽니다.
2. **파일 및 링크** 아래에서 **\[\[위키링크\]\]**를 비활성화합니다.

위키링크 형식을 비활성화하더라도 두 개의 대괄호 `[[`를 입력하여 링크를 자동완성할 수 있습니다. 제안된 파일 중 하나를 선택하면 Obsidian은 대신 마크다운 링크를 생성합니다.]]

## Link to a file

편집 보기에서 링크를 만들려면 다음 방법 중 하나를 사용하세요:

- 에디터에서 `[[`를 입력한 다음 만들 링크를 선택합니다.
- 에디터에서 텍스트를 선택한 다음 `[[`를 입력합니다.
- [[Command palette|명령어 팔레트]]를 열고 **내부 링크 추가**를 선택합니다.

[[Accepted file formats|허용된 파일 형식]] 중 어떤 것이든 링크할 수 있지만, Markdown 이외의 파일 형식에 대한 링크는 파일 확장자를 포함해야 합니다. 예를 들어 `[[Figure 1.png]]`와 같습니다.

## Link to a heading in a note

노트 내의 특정 제목, 즉 _앵커 링크_에 링크를 걸 수 있습니다.

제목에 링크를 걸려면 링크 대상 끝에 `#`를 추가하고 그 뒤에 제목 텍스트를 입력하세요.

예를 들어 `[[Three laws of motion#Second law]]`과 같이 말이죠.

하위 제목마다 여러 번 `#`을 추가할 수 있습니다.

예를 들어 `[[My note#Heading 1#Heading 2]]`과 같이 말이죠.

## Link to a block in a note

블록은 노트 내의 텍스트 단위로, 단락, 블록 인용, 목록 항목과 같은 것입니다.

블록에 링크를 걸려면 링크 대상 끝에 `#^`를 추가하고 고유한 블록 식별자를 입력하세요. 예를 들어 `[[2023-01-01#^37066d]]`와 같이 말이죠.

다행히도 식별자를 알 필요가 없습니다. `^`를 입력하면 올바른 식별자를 삽입할 수 있는 제안 목록에서 블록을 선택할 수 있습니다.

또한 블록 뒤에 공백과 식별자를 추가함으로써 사람이 읽기 편한 블록 식별자를 만들 수도 있습니다. 예를 들어 블록의 끝에 `^quote-of-the-day`와 같이 입력할 수 있습니다.

```md
"You do not rise to the level of your goals. You fall to the level of your systems." by James Clear ^quote-of-the-day
```

이제 `[[2023-01-01#^quote-of-the-day]]`을 입력하여 블록에 연결할 수 있습니다.

블록 식별자는 문자, 숫자, 대시로만 이루어져야 합니다.

> [!warning] 상호 운용성
> 블록 참조는 Obsidian의 특수한 기능이며 표준 마크다운 형식의 일부가 아닙니다. 블록 참조가 포함된 링크는 Obsidian 이외에서 작동하지 않습니다.

## Change the link display text

링크를 표시하는 데 사용되는 텍스트를 변경할 수 있습니다. 이는 파일 이름을 사용하지 않고도 문장에 링크를 삽입하고자 할 때 유용합니다.

**위키링크 형식(Wikilink format):**

링크를 표시하는 데 사용할 텍스트를 변경하려면 수직 바 (`|`)를 사용하세요.
You can use the vertical bar (`|`) to change the text used to display a link.

예를 들어, `[[Internal links|사용자 정의 표시 텍스트]]`는 [[Internal links|사용자 정의 표시 텍스트]]처럼 나타납니다.

**마크다운 형식(Markdown format):**

대괄호 (`[]`) 사이에 표시 텍스트를 입력하세요.

예를 들어, `[사용자 정의 표시 텍스트](Internal%20links.md)`는 [사용자 정의 표시 텍스트](Internal%20links.md)처럼 나타납니다.

## Preview a linked file

> [!note]
> 연결된 파일을 미리보려면 먼저 [[Page preview|페이지 미리보기]]를 활성화해야 합니다.

연결된 파일을 미리보려면 링크 위로 커서를 가져가면서 `Ctrl` (또는 macOS의 경우 `Cmd`) 키를 누르세요. 파일 내용의 미리보기가 커서 옆에 나타납니다.

