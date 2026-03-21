---
permalink: html
publish: true
mobile: true
description: 'Learn how to use HTML in Obsidian, including limitations with Markdown rendering, and HTML block requirements.'
---

Obsidian은 노트를 원하는 방식으로 표시하거나 [[웹 페이지 삽입|웹 페이지를 삽입]]할 수 있도록 HTML을 지원해요. 노트 내에서 HTML을 허용하면 위험이 따라요. 악성 코드가 피해를 주는 것을 방지하기 위해 Obsidian은 노트의 모든 HTML을 _살균(sanitize)_ 해요.

> [!example] 
> `<script>` 요소는 일반적으로 로드될 때마다 JavaScript를 실행할 수 있게 해요. Obsidian이 HTML을 살균하지 않으면 공격자가 컴퓨터에서 민감한 정보를 추출하여 자신에게 전송하는 JavaScript가 포함된 텍스트를 붙여넣도록 유도할 수 있어요.

그렇긴 하지만, Markdown 구문이 모든 형태의 스타일링을 지원하지는 않으므로 살균된 HTML을 사용하면 노트의 품질을 향상시키는 또 다른 방법이 될 수 있어요. 일반적으로 자주 사용되는 HTML 사용법을 아래에 포함했어요.

## HTML 제한 사항

Obsidian은 노트에서 HTML을 사용할 때 특정 제한 사항이 있어요:

### HTML 내부에서 Markdown 사용 불가

Obsidian은 HTML 요소 내부의 Markdown 구문을 렌더링하지 않아요. 이는 성능 최적화와 대규모 문서를 관리할 때 파서 복잡도를 낮게 유지하기 위한 의도적인 설계 결정이에요.

예를 들어, 다음은 예상대로 작동하지 않아요:

```md
<div>
This **will not** be bold and this `will not` be code.
</div>
```

### HTML 블록은 자체적으로 완결되어야 해요

HTML 블록은 완전해야 하며 내부에 빈 줄을 포함할 수 없어요. 빈 줄은 HTML 블록을 깨뜨려요.

다음은 작동해요:

```md
<table>
<tr>
<td>Content here</td>
</tr>
</table>
```

다음은 올바르게 작동하지 않아요:

```md
<table>

<tr>

<td>Content here</td>

</tr>

</table>
```

### HTML에서 Markdown이 작동하는 것처럼 보이는 경우

`<span>`이나 `<a>`와 같은 일부 인라인 HTML 태그는 제한된 기능을 가지며 Markdown을 렌더링하는 것처럼 보일 수 있지만, 실제로는 그렇지 않아요. Markdown은 HTML 컨텍스트 외부에서 처리되고 있는 거예요.

Obsidian이 Markdown을 처리하는 방식에 대한 자세한 내용은 [[Obsidian 스타일 Markdown]]을 참조하세요.

## 일반적인 HTML 사용법

> [!info] `<iframe>` 사용에 대한 자세한 내용은 [[웹 페이지 삽입]]에서 확인할 수 있어요.

### 주석

[[기본 서식 구문#주석|Markdown 주석]]은 노트 내에 숨겨진 주석을 추가하는 데 권장되는 방법이에요. 그러나 [Pandoc](https://pandoc.org)과 같은 일부 Markdown 노트 변환 방법은 Markdown 주석에 대한 지원이 제한적이에요. 이런 경우에는 `<!-- HTML Comment -->`를 대신 사용할 수 있어요!

### 밑줄

노트에서 항목에 빠르게 밑줄을 쳐야 한다면, `<u>Example</u>`을 사용하여 <u>밑줄 친 텍스트</u>를 만들 수 있어요.

### Span/Div

Span과 div 태그는 [[CSS 스니펫|CSS 스니펫]]의 사용자 정의 클래스나 직접 정의한 스타일링을 선택한 텍스트 영역에 적용하는 데 사용할 수 있어요. 예를 들어, `<span style="font-family: cursive">your text</span>`을 사용하면 빠르게 <span style="font-family: cursive">폰트를 변경</span>할 수 있어요.

## 취소선

<s>일부 텍스트</s>에 취소선을 그어야 하나요? `<s>this</s>`를 사용하여 취소선을 적용하세요.
