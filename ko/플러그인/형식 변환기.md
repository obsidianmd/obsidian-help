마크다운 형식 가져오기를 사용하면 다른 애플리케이션에서 Obsidian 형식으로 Markdown을 변환할 수 있습니다.

> [!warning]
> 마크다운 형식 가져오기는 설정에 따라 보관소 전체를 변환합니다. 변환 작업을 수행하기 전에 노트를 백업하세요.

보관소의 모든 노트를 변환하려면:

1. 리본에서 **마크다운 형식 가져오기 열기** (1과 0 아이콘)를 클릭합니다.
2. 변환하려는 형식을 활성화합니다.
3. **변환 시작**을 클릭합니다.

더 많은 정보는 [[기본 서식 구문|기본 서식 구문]]을 참조하세요.

## Supported formats

| Application   | From                  | To                                                              |
|---------------|-----------------------|-----------------------------------------------------------------|
| Roam Research | `#tag` and `#[[tag]]` | `[[tag]]`                                                       |
| Roam Research | `^^highlight^^`       | `==highlight==`                                                 |
| Roam Research | `{{[[TODO]]}}`        | `[ ]`                                                           |
| Bear          | `::highlight::`       | `==highlight==`                                                 |
| Zettelkasten  | `[[UID]]`             | `[[UID File Name]]` (full link)                                 |
| Zettelkasten  | `[[UID]]`             | <code>\[\[UID File Name&#124;File Name\]\]</code> (pretty link) |

