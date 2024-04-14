노트 이름 변경 및 삭제는 활성화된 보관소를 유지 관리하는 일부입니다. Obsidian은 로컬 보관소 내에서 노트를 이동할 때 링크를 자동으로 업데이트하지만, 다른 웹 사이트는 여전히 [[Introduction to Obsidian Publish|Obsidian Publish]] 사이트에서 이전 노트에 링크할 수 있습니다. 이 기사에서는 한 노트에서 다른 노트로 독자를 리디렉션하는 방법을 배우게 됩니다.

예를 들어, 한 폴더에서 노트를 다른 폴더로 이동하려고 합니다:

- **가이드**
  - ~~Making friends.md~~ (removed)
- **튜토리얼**
  - *How to make friends.md* (added)

노트를 이동한 후 Obsidian은 보관소 내의 모든 링크를 자동으로 업데이트합니다. 그러나 이러한 변경 사항을 Publish 사이트에 출판하면 `/Guides/Making+friends`로의 모든 링크는 404 오류를 반환할 것입니다.

`/Guides/Making+friends`에서 `/Tutorials/How+to+make+friends`로 독자를 리디렉션하려면 리디렉션하려는 노트인 `How to make friends.md`에 [[별칭|alias]]를 추가해야 합니다.

```md
---
alias: Guides/Making friends
---

# How to make friends
```

> [!important]
> 기존 노트에 대한 alias에는 이전 노트의 전체 경로를 포함해야 합니다. 로컬 보관소에서 노트 이름만을 alias로 사용하는 것은 작동하지만, Publish는 리디렉션하기 위해 노트의 전체 경로가 필요합니다.

여러 노트를 리디렉션하려면 각각의 alias를 추가할 수 있습니다.

```md
---
aliases: 
  - Guides/Making friends
  - Developing friendships
---

# How to make friends
```