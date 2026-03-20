---
permalink: obsidian-flavored-markdown
publish: true
mobile: true
description: 'Learn about Obsidian Flavored Markdown, including supported extensions and how Markdown interacts with HTML elements.'
---
Obsidian은 기존 형식을 깨뜨리지 않으면서 최대한의 기능을 제공하기 위해 노력합니다. 그 결과, 다양한 [[기본 서식 구문|Markdown]] 변형을 조합하여 사용합니다.

Obsidian은 [CommonMark](https://commonmark.org/), [GitHub Flavored Markdown](https://github.github.com/gfm/), 그리고 [LaTeX](https://www.latex-project.org/)를 지원합니다.

> [!tip]- HTML 내부의 Markdown
> Obsidian은 HTML 요소 내부의 Markdown 구문을 렌더링하지 않습니다. 이는 성능 최적화와 대용량 문서를 관리할 때 파서 복잡도를 낮게 유지하기 위한 의도적인 설계 결정입니다.
>
> 예를 들어, `**bold**`나 `` `code` ``와 같은 Markdown 서식은 `<div>`, `<span>`, `<table>` 또는 기타 HTML 태그 내부에서 처리되지 않습니다.
>
> ```md
> <div>
> This **will not** be bold.
> </div>
> ```

### 지원되는 Markdown 확장 기능

| 구문            | 설명                                                                  |
| --------------- | --------------------------------------------------------------------- |
| `[[Link]]`      | [[내부 링크]]                                                         |
| `![[Link]]`     | [[파일 임베드]]                                                       |
| `![[Link#^id]]` | [[내부 링크#노트의 블록에 링크하기\|블록 참조]]                       |
| `^id`           | [[내부 링크#노트의 블록에 링크하기\|블록 정의]]                       |
| `[^id]`         | [[기본 서식 구문#각주\|각주]]                                         |
| `%%Text%%`      | [[기본 서식 구문#주석\|주석]]                                         |
| `~~Text~~`      | [[기본 서식 구문#굵게, 기울임꼴, 강조 표시\|취소선]]                  |
| `==Text==`      | [[기본 서식 구문#굵게, 기울임꼴, 강조 표시\|강조 표시]]               |
| `` ``` ``       | [[기본 서식 구문#코드 블록\|코드 블록]]                               |
| `- [ ]`         | [[기본 서식 구문#작업 목록\|미완료 작업]]                             |
| `- [x]`         | [[기본 서식 구문#작업 목록\|완료된 작업]]                             |
| `> [!note]`     | [[콜아웃]]                                                            |
| (링크 참조)     | [[고급 서식 구문#표\|표]]                                             |
