여러 소셜 네트워크는 사용자가 웹 사이트에 대한 링크를 공유할 때 해당 웹 사이트에 대한 리치 프리뷰를 표시합니다. [[Properties|속성]]를 사용하여 노트가 프리뷰에 어떻게 나타날지를 사용자 정의할 수 있습니다.

> [!warning]
> 이 섹션에서 재정의하는 태그는 웹 크롤러에게만 표시됩니다. 일반 웹 브라우저는 성능을 위해 수정되지 않은 페이지를 제공받습니다.

## Description

Obsidian은 노트 내용을 기반으로 자동으로 설명을 생성하지만, `description`을 사용하여 직접 제공할 수 있습니다.

```yaml
---
description: An introduction to our solar system.
---
```

> [!note] 메타 태그
> `description` overrides the auto-generated description in `<meta name="description" content="...">` and the equivalents for `og:description` and `twitter:description`.

## Image

링크 프리뷰를 위해 사용자 정의 이미지를 사용할 수 있으며, `image` 또는 `cover`와 이미지의 경로를 추가하여 설정할 수 있습니다.

이 경로는 보관소 루트에서의 절대 경로 일 수 있습니다.

```yaml
---
cover: "Attachments/Cover image.png"
---
```

또는 외부 URL 일 수 있습니다.

```yaml
---
image: "https://example.com/cover%20image.png"
---
```

`image`와 `cover`는 동일하며 둘 중 하나만 사용하십시오.

> [!note] Meta tags
> `image` and `cover` overrides the auto-generated image in `<meta property="og:image" content="...">`.
