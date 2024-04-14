Obsidian은 기존 포맷을 깨지 않으면서 최대한의 기능을 제공하려고 노력합니다. 그 결과로 Obsidian은 다양한 [[기본 서식 구문|마크다운]] 스타일을 혼합하여 사용합니다.

Obsidian은 [CommonMark](https://commonmark.org/), [GitHub Flavored Markdown](https://github.github.com/gfm/), 그리고 [LaTeX](https://www.latex-project.org/)을 지원합니다. Obsidian은 HTML 태그 내부에서의 Markdown 형식이나 빈 줄 사용을 지원하지 않습니다.

### Supported Markdown extensions

Syntax | Description
-|-
`[[Link]]` | [[Internal links]]
`![[Link]]` | [[Embedding files]]
`![[Link#^id]]` | [[Internal links#Link to a block in a note\|Block references]]
`^id` | [[Internal links#Link to a block in a note\|Defining a block]]
`%%Text%%` | [[기본 서식 구문#Comments|Comments]]
`~~Text~~`| [[기본 서식 구문#Styling text|Strikethroughs]]
`==Text==`| [[기본 서식 구문#Styling text|Highlights]]
`` ``` ``  | [[기본 서식 구문#Code blocks|Code blocks]]
`- [ ]`  | [[기본 서식 구문#Task lists|Incomplete task]]
`- [x]`  | [[기본 서식 구문#Task lists|Completed task]]
`> [!note]` | [[콜아웃]]
| (see link) | [[고급 서식 구문#Tables|Tables]]