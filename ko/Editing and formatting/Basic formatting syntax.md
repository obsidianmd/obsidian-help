---
aliases:
  - How to/Format your notes
  - Markdown
---

[마크다운](https://daringfireball.net/projects/markdown/)을 사용하여 노트에 기본 서식을 적용하는 방법을 알아보세요. 고급 서식 구문에 대해서는 [[Advanced formatting syntax|고급 서식 구문]]을 참조하세요.

## Paragraphs

단락을 만들려면 하나 이상의 텍스트 줄을 구분하기 위해 빈 줄을 사용합니다.

```
This is a paragraph.

This is another paragraph.
```

> [!note] 다중 공백
> [[Editing and Previewing Markdown#Editor views|Reading view]] 및 [[Introduction to Obsidian Publish|Obsidian Publish]] 사이트에서 노트를 표시할 때 단락 내부 및 단락 사이의 여러 인접 공백이 단일 공백으로 축소됩니다.
> 
> 
> ```md
> Multiple          adjacent          spaces
> 
> 
> 
> and multiple newlines between paragraphs.
> ```
> 
> > Multiple          adjacent          spaces
> > 
> > 
> > 
> > and multiple newlines between paragraphs.
> 
> 여러 개의 공백을 추가하려면 노트에 `&nbsp;`(공백) 및 `<br>`(줄바꿈)을 추가할 수 있습니다.

## Headings

다음과 같이 최대 여섯 개의 `#` 기호를 제목 텍스트 앞에 추가하여 제목을 생성할 수 있습니다. `#` 기호의 수가 제목의 크기를 결정합니다.

```md
# 이것은 제목 1입니다 
## 이것은 제목 2입니다 
### 이것은 제목 3입니다 
#### 이것은 제목 4입니다 
##### 이것은 제목 5입니다 
###### 이것은 제목 6입니다
```

%% 이러한 제목은 아웃라인/목차를 난잡하게 만들지 않도록 HTML을 사용합니다 %%

<h1>이것은 제목 1입니다</h1> <h2>이것은 제목 2입니다</h2> <h3>이것은 제목 3입니다</h3> <h4>이것은 제목 4입니다</h4> <h5>이것은 제목 5입니다</h5> <h6>이것은 제목 6입니다</h6>

## Styling text

| Style | Syntax | Example | Output |
|-|-|-|-|
| 굵게 | `** **` or `__ __` | `**Bold text**` | **Bold text** |
| 이탤릭체 | `* *` or `_ _`  | `*Italic text*` | *Italic text* |
| 취소선 | `~~ ~~` |  `~~Striked out text~~` | ~~Striked out text~~ |
| 하이라이트 | `== ==` |  `==Highlighted text==` | ==Highlighted text== |
| 굵게 및 중첩 이탤릭체 | `** **` and `_ _`  | `**Bold text and _nested italic_ text**` | **Bold text and _nested italic_ text** |
| 굵게 및 이탤릭체 | `*** ***` or `___ ___` |  `***Bold and italic text***` | ***Bold and italic text*** |

## Quotes

텍스트를 인용하려면 텍스트 앞에 `>` 기호를 추가하면 됩니다.

```md
> 인간은 점점 복잡하고 긴급한 문제에 직면하고 있으며, 이러한 문제에 대한 효과적인 대응은 사회의 안정과 지속적인 발전에 중요한 문제입니다.

\- 더그 엥겔바트, 1961
```

> 인간은 점점 복잡하고 긴급한 문제에 직면하고 있으며, 이러한 문제에 대한 효과적인 대응은 사회의 안정과 지속적인 발전에 중요한 문제입니다.

\- 더그 엥겔바트, 1961

> [!tip]
> 인용문을 [[Callouts|콜아웃]]으로 변경하려면 인용문의 첫 번째 줄로 `[!info]`를 추가하십시오.

## Code

코드는 문장 내에서 인라인으로 형식화하거나 자체 블록에서 형식화할 수 있습니다.

### Inline code

문장 내에서 코드를 형식화하려면 단일 역따옴표를 사용할 수 있습니다.

```md
역따옴표 내의 `텍스트`는 코드처럼 형식화됩니다.
```

역따옴표 내의 `텍스트`는 코드처럼 형식화됩니다.

만약 당신이 인라인 코드 블록 내에서 역따옴표를 사용하려면 다음과 같이 두 개의 역따옴표로 감싸면 됩니다: `inline ``code with a backtick` inside``.`

### Code blocks

코드 블록을 형식화하려면 코드를 삼중 역따옴표로 둘러싸세요.

~~~
```
cd ~/Desktop
```
~~~

```md
cd ~/Desktop
```

코드 블록을 형식화하려면 `Tab` 또는 4개의 공백으로 텍스트를 들여 쓸 수도 있습니다.

```md
    cd ~/Desktop
```

첫 번째 세트의 역따옴표 뒤에 언어 코드를 추가하여 코드 블록에 구문 강조를 추가할 수도 있습니다.

~~~md
```js
function fancyAlert(arg) {
  if(arg) {
    $.facebox({div:'#foo'})
  }
}
```
~~~

```js
function fancyAlert(arg) {
  if(arg) {
    $.facebox({div:'#foo'})
  }
}
```

Obsidian은 구문 강조를 위해 Prism을 사용합니다. 자세한 정보는 [지원되는 언어](https://prismjs.com/#supported-languages)를 참조하십시오.

> [!note]
> [[Live Preview update|라이브 미리보기 모드]]에서는 PrismJS를 지원하지 않으며 구문 강조가 다르게 표시될 수 있습니다.

## External links

외부 URL로 연결하려면 괄호(`[ ]`)로 링크 텍스트를 둘러싸고 괄호(`( )`)로 URL을 둘러싸는 인라인 링크를 생성할 수 있습니다.

```md
[Obsidian Help](https://help.obsidian.md)
```

[Obsidian Help](https://help.obsidian.md)

> [!tip]
> 내 보관소 안의 파일로 연결하려면 [[Internal links|내부 링크]]를 고려하십시오.

[[Obsidian URI|Obsidian URI]]에 연결하여 다른 보관소에 있는 파일에 대한 외부 링크를 생성할 수도 있습니다.

```md
[Note](obsidian://open?vault=MainVault&file=Note.md)
```

### Escape blank spaces in links

URL에 공백이 포함된 경우 `%20`로 대체하여 이스케이프해야 합니다.

```md
[My Note](obsidian://open?vault=MainVault&file=My%20Note.md)
```

각진 괄호(`< >`)로 URL을 감싸서 URL을 이스케이프할 수도 있습니다.

```md
[My Note](<obsidian://open?vault=MainVault&file=My Note.md>)
```

## External images

외부 URL을 통해 이미지를 추가할 때는 [[#External links|외부 링크]] 앞에 `!` 기호를 추가합니다.

```md
![Engelbart](https://history-computer.com/ModernComputer/Basis/images/Engelbart.jpg)
```

![Engelbart](https://history-computer.com/ModernComputer/Basis/images/Engelbart.jpg)

링크 대상에 `|640x480`를 추가하여 이미지 크기를 변경할 수도 있으며, 여기서 640은 너비이고 480은 높이입니다.

```md
![Engelbart|100x145](https://history-computer.com/ModernComputer/Basis/images/Engelbart.jpg)
```

너비만 지정하면 이미지는 원래 종횡비에 따라 크기가 조정됩니다. 예를 들어 `![[Engelbart.jpg|100]]`입니다.

> [!tip]
> 내 보관함 내에서 이미지를 추가하려면 노트에 이미지를 [[Embedding files#Embed an image in a note|포함할 수도 있습니다]].

## Lists

텍스트 앞에 `-`, `*`, 또는 `+`를 추가하여 정렬되지 않은 목록을 생성할 수 있습니다.

```md
- 첫 번째 목록 항목
- 두 번째 목록 항목
- 세 번째 목록 항목
```

- 첫 번째 목록 항목
- 두 번째 목록 항목
- 세 번째 목록 항목

순서 목록을 만들려면 각 줄을 숫자 다음에 `.` 기호를 붙입니다.

```md
1. 첫 번째 목록 항목
2. 두 번째 목록 항목
3. 세 번째 목록 항목
```

1. 첫 번째 목록 항목
2. 두 번째 목록 항목
3. 세 번째 목록 항목

들여쓰기를 사용하여 하나 이상의 목록 항목을 중첩 목록으로 만들 수 있습니다.

```md
1. 첫 번째 목록 항목
   1. 정렬된 중첩 목록 항목
2. 두 번째 목록 항목
   - 정렬되지 않은 중첩 목록 항목
```

1. 첫 번째 목록 항목
   1. 정렬된 중첩 목록 항목
2. 두 번째 목록 항목
   - 정렬되지 않은 중첩 목록 항목

하나 이상의 선택한 목록 항목을 들여 쓰거나 들여 쓰기를 해제하려면 `Tab` 또는 `Shift+Tab`을 누르세요.

### Task lists

작업 목록을 만들려면 각 목록 항목을 하이픈과 `[ ]`로 시작합니다.

```md
- [x] 이 항목은 완료되었습니다.
- [ ] 이 항목은 완료되지 않았습니다.
```

- [x] 이 항목은 완료되었습니다.
- [ ] 이 항목은 완료되지 않았습니다.

읽기 보기에서 체크 박스를 선택하여 작업 목록을 토글할 수 있습니다.

> [!tip]
> 완료되었다는 표시를 위해 대괄호 내에 어떤 문자든 사용할 수 있습니다.
>
> ```md
> - [x] 우유
> - [?] 달걀
> - [-] 달걀
> ```
>
> - [x] 우유
> - [?] 달걀
> - [-] 달걀

## Horizontal bar

수평선을 추가하려면 `***`, `---`, 또는 `_ _ _` 세 개 이상의 별표, 하이픈 또는 밑줄을 자체 행에 넣습니다. 또한 기호 사이에 공백을 넣을 수 있습니다.

```md
***
****
* * *
---
----
- - -
___
____
_ _ _
```

***

---

## Footnotes

다음과 같은 구문을 사용하여 노트에 각주[^각주]를 추가할 수 있습니다:

[^각주] 이것은 각주입니다.

```md
이것은 간단한 각주[^1]입니다.

[^1]: 이것은 참조된 텍스트입니다.
[^2]: 각 새로운 줄에서 2개의 공백을 추가합니다.
  이렇게 하면 여러 줄에 걸친 각주를 작성할 수 있습니다.
[^note]: 이름이 지정된 각주는 숫자로 나타나지만 식별과 참조가 더 쉬울 수 있습니다.
```

문장에 각주를 삽입할 수도 있습니다. 윗꺽쇠은 괄호 바깥으로 나갑니다.

```md
인라인 각주를 사용할 수도 있습니다. ^[이것은 인라인 각주입니다.]
```

> [!note]
> 인라인 각주는 읽기보기 모드에서만 작동하며 라이브 미리보기에서는 작동하지 않습니다.

## Comments

텍스트를 `%%`로 둘러싸서 주석을 추가할 수 있습니다. 주석은 편집 보기에서만 볼 수 있습니다.

```md
이것은 %%인라인%% 주석입니다.

%%
이것은 블록 주석입니다.

블록 주석은 여러 줄에 걸칠 수 있습니다.
%%
```

## Learn more

표, 다이어그램, 수학 표현식 등 고급 서식 구문에 대해 알아보려면 [[Advanced formatting syntax|고급 서식 구문]]을 참조하세요.

Obsidian이 Markdown을 구문 분석하는 방법에 대해 자세히 알아보려면 [[Obsidian Flavored Markdown]]을 참조하세요.
