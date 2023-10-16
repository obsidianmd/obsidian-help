---
aliases: 
- How to/Embed files
---

다른 노트와 미디어를 노트에 포함시키는 방법을 배우세요. 노트에 파일을 포함시켜서 보관소 내에서 콘텐츠를 재사용할 수 있습니다.

보관소에 파일을 포함시키려면 [[Internal links|내부 링크]] 앞에 느낌표 (`!`)를 추가하면 됩니다. 어떤 [[Accepted file formats|허용되는 파일 형식들]]에서든 파일을 포함시킬 수 있습니다.

## Embed a note in another note

노트를 포함시키려면:

```md
![[Internal links]]
```

또한 [[Internal links#Link to a heading in a note|제목]] 및 [[Internal links#Link to a block in a note|블럭]]에 링크를 포함시킬 수 있습니다.

```md
![[Internal links#^b15695]]
```

아래 텍스트는 포함된 블록의 예입니다:

![[Internal links#^b15695]]

## Embed an image in a note

이미지를 포함시키려면:

```md
![[Engelbart.jpg]]
```

![[Engelbart.jpg]]

링크 대상에 `|640x480`을 추가하여 이미지 크기를 변경할 수 있으며, 640은 너비이고 480은 높이입니다.

```md
![[Engelbart.jpg|100x145]]
```

너비만 지정하는 경우 이미지는 원래 종횡비에 따라 크기가 조정됩니다. 예를 들어 `![[Engelbart.jpg|100]]`.

![[Engelbart.jpg|100]]

## Embed an audio file in a note

오디오 파일을 포함시키려면:

```md
![[Excerpt from Mother of All Demos (1968).ogg]]
```

![[Excerpt from Mother of All Demos (1968).ogg]]

## Embed a PDF in a note

PDF를 포함시키려면:

```md
![[Document.pdf]]
```

페이지 번호를 지정하여 PDF에서 특정 페이지를 열 수도 있습니다. 이때 링크 대상에 `#page=N`을 추가하며 `N`은 페이지 번호입니다.
You can also open a specific page in the PDF, by adding `#page=N` to the link destination, where `N` is the number of the page:

```md
![[Document.pdf#page=3]]
```

포함된 PDF 뷰어의 높이를 픽셀로 지정할 수도 있습니다. 이 경우 링크에 `#height=[숫자]`를 추가하면 됩니다. 예를 들어:

```md
![[Document.pdf#height=400]]
```

## Embed a list in a note

다른 노트에서 목록을 포함시키려면 먼저 목록에 [[Internal links#Link to a block in a note|블럭 식별자]]를 추가하세요:

```md

- list item 1
- list item 2

^my-list-id
```

그런 다음 블록 식별자를 사용하여 목록에 링크를 추가합니다:

```md
![[My note#^my-list-id]]
```

## Embed search results 

![[Search#Embed search results in a note]]
