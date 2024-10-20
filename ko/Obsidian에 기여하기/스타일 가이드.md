Obsidian 문서는 [Google 개발자 문서 스타일 가이드](https://developers.google.com/style)를 사용합니다. Google 스타일 가이드에서 다루지 않는 주제에 대한 경우 [Microsoft 스타일 가이드](https://learn.microsoft.com/en-us/style-guide/)를 사용하세요.

이 페이지에서는 Google 스타일 가이드와의 차이점이나 강조할 가치가 있는 용어를 나열합니다.

> [!tip] 기여
> 이 스타일 가이드가 존재하기 전에 문서 대부분이 이미 존재했습니다. 이 스타일 가이드 위반을 발견하면 [이슈 생성](https://github.com/obsidianmd/obsidian-docs/issues/new) 또는 [obsidianmd/obsidian-docs](https://github.com/obsidianmd/obsidian-docs) 저장소로 풀 리퀘스트를 제출해 주세요.
> 영문으로 제품 설명이나 UI 기능을 설명할 때  선호하는 단어들을 기술합니다.

## Terminology

- "단축키(keyboard shortcut)" 대신 "키보드 단축키(hotkey)"를 선호합니다. Hotkey는 구체적인 기능을 나타낼 때 사용합니다.
- 모바일에서는 "Obsidian app"을, 데스크톱에서는 "Obsidian application"을 선호합니다.
- "synchronize" 또는 "synchronizing" 대신 "sync" 또는 "syncing" 를 선호합니다.
- "search query" 대신 "search term"를 선호합니다.
- 섹션을 소개하는 텍스트를 참조할 때 "header" 대신 "heading"을 선호합니다.
- "max" 대신 "maximum"를 선호하고 "min" 대신 "minimum"를 선호합니다.

### Product names

Obsidian 제품 이름은 "Obsidian"으로 시작합니다. 예를 들어 "Obsidian Publish"와 "Obsidian Sync"입니다.

단락이 지나치게 반복적인 경우 나중에 참조에서는 짧은 형식을 사용할 수 있습니다.

예를 들어:

_"기기별 구성을 허용하기 위해 Obsidian Sync는 자체 설정을 동기화하지 않습니다. 각 기기에 대해 Sync를 구성해야 합니다."_

_To allow device-specific configuration, Obsidian Sync doesn't sync its own settings. You need to configure Sync for each of your devices._

### UI and interactions

- "tap" 또는 "click" 대신 "select"를 선호합니다.
- "sidebar" 대신 "side bar"를 선호합니다.
- 명령 또는 작업을 참조할 때 "invoke" 또는 "execute" 대신 "execute"을 선호합니다.

연속적인 UI 상호 작용을 여러 번 언급할 때는 → (U+2192) 기호를 사용하세요. 예를 들어 "**Settings → Community plugins**".

### Notes, files, and folders

- 보관소(Vault)에 대한 언급 시 "노트(note)"를 사용합니다.
- Markdown 파일 이외의 파일 확장자를 언급할 때 "파일(file)"을 사용합니다.
- "노트 제목(note title)" 대신 "노트 이름(note name)"을 선호합니다.
- "현재 노트(current note)" 대신 "활성화 노트(active note)"를 선호합니다.
- "디렉토리(directory)" 대신 "폴더(folder)"를 선호합니다.
- 파일 콘텐츠의 데이터 형식을 구체적으로 언급하지 않는 한 "파일 형식(file format)" 대신 "파일 포맷(file type)"을 선호하세요.

노트 간 이동 시 대상이 숨겨진 경우 "열기(open)"를 사용하고 소스 및 대상 노트가 별도로 분할되어 열려 있는 경우 "전환(switch)"을 사용하세요.

## Reference documentation for settings

가능한 경우 모든 설정은 설명 텍스트를 사용하여 Obsidian 내에서 문서화되어야 합니다. Obsidian 도움말에 특정 설정을 문서화하지 않아야 합니다. 그렇게 해야 하는 경우는:

- 그것을 사용하는 방법과 시기에 대한 보다 심도 있는 지식이 필요한 경우.
- 그것이 일반적으로 오용되거나 물어보는 경우.
- 사용자 경험을 _극적으로_ 변경하는 경우.

특정 설정을 강조하려면 팁 콜아웃(tip callout)을 사용할 수 있습니다.

## Directional terms

방향성 용어를 형용사로 사용할 때 하이픈을 추가하세요. 방향성이 명사로 사용될 때는 하이픈을 사용하지 마세요.

**Recommended:**

- Select **Settings** in the bottom-left corner.
- Select **Settings** in the bottom left.

**Not recommended:**

- Select **Settings** in the bottom left corner.
- Select **Settings** in the bottom-left.

Prefer "upper-left" and "upper-right" over "top-left" and "top-right".

설정을 참조할 때 방향을 나타내지 마세요. 설정 컨트롤의 위치는 디바이스에 따라 다릅니다.

**Recommended:**

- Next to **Pick remote vault**, click **Choose**.

**Not recommended:**

- To the right of **Pick remote vault**, click **Choose**.

## Sentence case

헤딩, 버튼 및 제목에 대해서는 _문장 케이스_를 선호하세요. UI 요소를 참조할 때는 항상 UI 텍스트와 일치시킵니다.

**Recommended:**

- How Obsidian stores data

**Not recommended:**

- How Obsidian Stores Data


## Examples

무의미한 용어 대신 현실적인 예제를 선호하세요.

**Recommended:**

- `task:(call OR schedule)`

**Not recommended:**

- `task:(foo OR bar)`

## Key names

키보드의 문자를 이름으로 참조할 때 이름 바로 뒤에 문자를 괄호로 추가하세요:

**Recommended:**

- Add a hyphen (-) in front of the word.

**Not recommended:**

- Add a hyphen in front of the word.
- Add a `-` in front of the word.

## Markdown

Markdown 블록 사이에 새 줄을 사용하세요:

**Recommended:**

```md
# Heading 1

This is a section.

1. First item
2. Second item
3. Third item
```

**Not recommended:**

```md
# Heading 1
This is a section.
1. First item
2. Second item
3. Third item
```

## Images

이미지 또는 화면 크기를 설명할 때 "**너비** x **높이** 픽셀"을 사용하세요.

**Example:**

Recommended image dimensions: 1920 x 1080 pixels.
