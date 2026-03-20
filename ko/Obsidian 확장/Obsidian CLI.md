---
permalink: cli
description: Anything you can do in Obsidian can be done from the command line.
aliases:
  - Obsidian/Obsidian
---
Obsidian CLI는 터미널에서 Obsidian을 제어할 수 있는 명령줄 인터페이스로, 스크립팅, 자동화, 외부 도구와의 통합에 활용할 수 있습니다.

Obsidian에서 할 수 있는 모든 작업을 명령줄에서 수행할 수 있습니다. Obsidian CLI에는 개발자 도구에 접근하고, 요소를 검사하고, 스크린샷을 찍고, 플러그인을 새로고침하는 등의 [[#개발자 명령어|개발자 명령어]]도 포함되어 있습니다.

![[obsidian-cli.mp4#interface]]

> [!warning] Obsidian 1.12 설치 프로그램 필요
> CLI를 사용하려면 Obsidian 1.12 설치 프로그램이 필요합니다. [[Obsidian 업데이트#설치 프로그램 업데이트|설치 프로그램 버전 업데이트 가이드]]를 참조하세요.

## Obsidian CLI 설치

최신 [[Obsidian 업데이트|Obsidian 설치 프로그램 버전]] (1.11.7)과 최신 [[얼리 액세스 버전|얼리 액세스 버전]] (1.12.x)으로 업그레이드하세요.

Obsidian에서 Obsidian CLI를 활성화합니다:

1. **설정** → **일반**으로 이동합니다.
2. **명령줄 인터페이스**를 활성화합니다.
3. 프롬프트에 따라 Obsidian CLI를 등록합니다.

Obsidian CLI 설치에 문제가 있으면 [[#문제 해결]]을 참조하세요.

## 시작하기

Obsidian CLI는 단일 명령어와 대화형 도움말 및 자동 완성을 제공하는 터미널 사용자 인터페이스(TUI)를 모두 지원합니다.

> [!info] Obsidian 앱이 실행 중이어야 합니다
> Obsidian CLI를 사용하려면 Obsidian 앱이 실행 중이어야 합니다. Obsidian이 실행 중이 아닌 경우, 첫 번째 명령어 실행 시 Obsidian이 시작됩니다.
>
> 데스크톱 앱 없이 동기화하고 싶으신가요? [[헤드리스 Sync|Obsidian Headless]]를 참조하세요.

### 명령어 실행

TUI를 열지 않고 개별 명령어를 실행합니다:

```shell
# 도움말 명령어 실행
obsidian help
```

### 터미널 인터페이스 사용

`obsidian`을 입력하여 TUI를 사용합니다. 이후 명령어는 `obsidian` 없이 입력할 수 있습니다.

```shell
# TUI를 열고 도움말 실행
obsidian
help
```

TUI는 자동 완성, 명령어 기록, 역방향 검색을 지원합니다. `Ctrl+R`을 사용하여 명령어 기록을 검색하세요. 사용 가능한 모든 단축키는 [[#키보드 단축키]]를 참조하세요.

## 예제

다음은 Obsidian CLI로 할 수 있는 몇 가지 예제입니다.

### 일상적인 사용

```shell
# 오늘의 일일 노트 열기
obsidian daily

# 일일 노트에 할 일 추가
obsidian daily:append content="- [ ] 장보기"

# 보관함 검색
obsidian search query="회의 노트"

# 활성 파일 읽기
obsidian read

# 일일 노트의 모든 할 일 목록 표시
obsidian tasks daily

# 템플릿으로 새 노트 만들기
obsidian create name="파리 여행" template=Travel

# 보관함의 모든 태그와 횟수 표시
obsidian tags counts

# 파일의 두 버전 비교
obsidian diff file=README from=1 to=3
```

### 개발자용

플러그인 및 테마 개발을 위한 많은 [[#개발자 명령어]]가 제공됩니다. 이 명령어들을 통해 에이전트 코딩 도구가 자동으로 테스트하고 디버그할 수 있습니다.

```shell
# 개발자 도구 열기
obsidian devtools

# 개발 중인 커뮤니티 플러그인 새로고침
obsidian plugin:reload id=my-plugin

# 앱 스크린샷 찍기
obsidian dev:screenshot path=screenshot.png

# 앱 콘솔에서 JavaScript 실행
obsidian eval code="app.vault.getFiles().length"
```

## 사용법

### 매개변수와 플래그 사용

명령어는 **매개변수**와 **플래그**를 사용할 수 있습니다. 대부분의 명령어는 매개변수나 플래그가 필요하지 않습니다. 필수 매개변수는 `required`로 표시됩니다. 예:

```shell
# 기본 "제목 없음" 이름으로 새 노트 만들기
obsidian create
```

**매개변수**는 값을 받으며, `parameter=value` 형식으로 작성합니다. 값에 공백이 있으면 따옴표로 감쌉니다:

```shell
# "Note"라는 이름과 "Hello world" 내용으로 새 노트 만들기
obsidian create name=Note content="Hello world"
```

**플래그**는 값 없는 불리언 스위치입니다. 포함하면 켜집니다. 예를 들어 `open`과 `overwrite`는 플래그입니다:

```shell
# 노트를 만들고 열기
obsidian create name=Note content="Hello" open overwrite
```

여러 줄 내용에는 `\n`을 줄바꿈으로 사용하세요. `\t`는 탭입니다.

```bash
obsidian create name=Note content="# 제목\n\n본문 텍스트"
```

### 보관함 지정

터미널의 현재 작업 디렉터리가 보관함 폴더인 경우 해당 보관함이 기본으로 사용됩니다. 그렇지 않으면 현재 활성 보관함이 사용됩니다.

`vault=<name>` 또는 `vault=<id>`를 사용하여 특정 보관함을 지정합니다. 이것은 명령어 앞에 첫 번째 매개변수로 와야 합니다:

```shell
obsidian vault=Notes daily
obsidian vault="My Vault" search query="test"
```

TUI에서는 `vault:open <name>` 또는 `<id>`를 사용하여 다른 보관함으로 전환합니다.

### 파일 지정

많은 명령어가 특정 파일을 지정하기 위해 `file`과 `path` 매개변수를 받습니다. 둘 다 제공하지 않으면 활성 파일이 기본값입니다.

- `file=<name>`은 [[내부 링크|위키 링크]]와 동일한 링크 해석을 사용하여 파일을 찾으며, 전체 경로나 확장자 없이 파일 이름으로 매칭합니다.
- `path=<path>`는 보관함 루트부터의 정확한 경로가 필요합니다. 예: `folder/note.md`.

```shell
# "Recipe.md"가 해당 이름의 유일한 파일인 경우 동일합니다
obsidian read file=Recipe
obsidian read path="Templates/Recipe.md"
```

### 출력 복사

모든 명령어에 `--copy`를 추가하면 출력이 클립보드에 복사됩니다:

```shell
read --copy
search query="TODO" --copy
```


## 일반 명령어

### `help`

사용 가능한 모든 명령어 목록을 표시합니다.

| 매개변수      | 설명                          |
| ----------- | --------------------------------- |
| `<command>` | 특정 명령어의 도움말을 표시합니다. |

### `version`

Obsidian 버전을 표시합니다.

### `reload`

앱 창을 새로고침합니다.

### `restart`

앱을 다시 시작합니다.


## 베이스

[[베이스 소개|베이스]] 관련 명령어입니다.

### `bases`

보관함의 모든 `.base` 파일을 나열합니다.

### `base:views`

현재 베이스 파일의 뷰를 나열합니다.

### `base:create`

베이스에 새 항목을 만듭니다. 파일이 지정되지 않으면 활성 베이스 뷰가 기본값입니다.

```bash
file=<name>        # 베이스 파일 이름
path=<path>        # 베이스 파일 경로
view=<name>        # 뷰 이름
name=<name>        # 새 파일 이름
content=<text>     # 초기 내용

open               # 생성 후 파일 열기
newtab             # 새 탭에서 열기
```

### `base:query`

베이스를 쿼리하고 결과를 반환합니다.

```bash
file=<name>                    # 베이스 파일 이름
path=<path>                    # 베이스 파일 경로
view=<name>                    # 쿼리할 뷰 이름
format=json|csv|tsv|md|paths   # 출력 형식 (기본값: json)
```

## 북마크

[[북마크]] 관련 명령어입니다.

### `bookmarks`

북마크를 나열합니다.

```bash
total              # 북마크 수 반환
verbose            # 북마크 유형 포함
format=json|tsv|csv  # 출력 형식 (기본값: tsv)
```

### `bookmark`

북마크를 추가합니다.

```bash
file=<path>        # 북마크할 파일
subpath=<subpath>  # 파일 내 하위 경로 (제목 또는 블록)
folder=<path>      # 북마크할 폴더
search=<query>     # 북마크할 검색 쿼리
url=<url>          # 북마크할 URL
title=<title>      # 북마크 제목
```

## 명령어 팔레트

[[명령어 팔레트]] 및 [[단축키]] 관련 명령어입니다. 플러그인에서 등록한 모든 명령어를 포함합니다.

### `commands`

사용 가능한 명령어 ID를 나열합니다.

```bash
filter=<prefix>    # ID 접두사로 필터링
```

### `command`

Obsidian 명령어를 실행합니다.

```bash
id=<command-id>    # (필수) 실행할 명령어 ID
```

### `hotkeys`

모든 명령어의 키보드 단축키를 나열합니다.

```bash
total              # 단축키 수 반환
verbose            # 커스텀 단축키 여부 표시
format=json|tsv|csv  # 출력 형식 (기본값: tsv)
```

### `hotkey`

명령어의 키보드 단축키를 가져옵니다.

```bash
id=<command-id>    # (필수) 명령어 ID

verbose            # 커스텀 또는 기본값 여부 표시
```

## 일일 노트

[[일일 노트]] 관련 명령어입니다.

### `daily`

일일 노트를 엽니다.

```bash
paneType=tab|split|window    # 열 창 유형
```

### `daily:path`

일일 노트 경로를 가져옵니다. 파일이 아직 생성되지 않았더라도 예상 경로를 반환합니다.

### `daily:read`

일일 노트 내용을 읽습니다.

### `daily:append`

일일 노트에 내용을 추가합니다.

```bash
content=<text>     # (필수) 추가할 내용
paneType=tab|split|window    # 열 창 유형

inline             # 줄바꿈 없이 추가
open               # 추가 후 파일 열기
```

### `daily:prepend`

일일 노트 앞에 내용을 삽입합니다.

```bash
content=<text>     # (필수) 삽입할 내용
paneType=tab|split|window    # 열 창 유형

inline             # 줄바꿈 없이 삽입
open               # 추가 후 파일 열기
```

## 파일 기록

### `diff`

로컬 [[파일 복원]] 및 [[Obsidian Sync 소개|Sync]]의 버전을 나열하거나 비교합니다. 버전은 최신순에서 오래된순으로 번호가 매겨집니다.

```bash
file=<name>          # 파일 이름
path=<path>          # 파일 경로
from=<n>             # 비교 시작 버전 번호
to=<n>               # 비교 대상 버전 번호
filter=local|sync    # 버전 소스로 필터링
```

**예제:**

```shell
# 활성 파일의 모든 버전 나열
diff

# 특정 파일의 모든 버전 나열
diff file=Recipe

# 최신 버전과 현재 파일 비교
diff file=Recipe from=1

# 두 버전 비교
diff file=Recipe from=2 to=1

# Sync 버전만 표시
diff filter=sync
```

### `history`

[[파일 복원]]의 버전만 나열합니다. Sync 관련 명령어는 [[#Sync|sync:history]]를 참조하세요.

```bash
file=<name>        # 파일 이름
path=<path>        # 파일 경로
```

### `history:list`

로컬 기록이 있는 모든 파일을 나열합니다.

### `history:read`

로컬 기록 버전을 읽습니다.

```bash
file=<name>        # 파일 이름
path=<path>        # 파일 경로
version=<n>        # 버전 번호 (기본값: 1)
```

### `history:restore`

로컬 기록 버전을 복원합니다.

```bash
file=<name>        # 파일 이름
path=<path>        # 파일 경로
version=<n>        # (필수) 버전 번호
```

### `history:open`

파일 복원을 엽니다.

```bash
file=<name>        # 파일 이름
path=<path>        # 파일 경로
```

## 파일 및 폴더

### `file`

파일 정보를 표시합니다 (기본값: 활성 파일).

```bash
file=<name>        # 파일 이름
path=<path>        # 파일 경로
```

예:

```
path       Notes/Recipe.md
name       Recipe
extension  md
size       1024
created    1700000000000
modified   1700001000000
```

### `files`

보관함의 파일을 나열합니다.

```bash
folder=<path>      # 폴더로 필터링
ext=<extension>    # 확장자로 필터링

total              # 파일 수 반환
```

### `folder`

폴더 정보를 표시합니다.

```bash
path=<path>              # (필수) 폴더 경로
info=files|folders|size  # 특정 정보만 반환
```

### `folders`

보관함의 폴더를 나열합니다.

```bash
folder=<path>      # 상위 폴더로 필터링

total              # 폴더 수 반환
```

### `open`

파일을 엽니다.

```bash
file=<name>        # 파일 이름
path=<path>        # 파일 경로

newtab             # 새 탭에서 열기
```

### `create`

파일을 만들거나 덮어씁니다.

```bash
name=<name>        # 파일 이름
path=<path>        # 파일 경로
content=<text>     # 초기 내용
template=<name>    # 사용할 템플릿

overwrite          # 파일이 존재하면 덮어쓰기
open               # 생성 후 파일 열기
newtab             # 새 탭에서 열기
```

### `read`

파일 내용을 읽습니다 (기본값: 활성 파일).

```bash
file=<name>        # 파일 이름
path=<path>        # 파일 경로
```

### `append`

파일에 내용을 추가합니다 (기본값: 활성 파일).

```bash
file=<name>        # 파일 이름
path=<path>        # 파일 경로
content=<text>     # (필수) 추가할 내용

inline             # 줄바꿈 없이 추가
```

### `prepend`

프런트매터 뒤에 내용을 삽입합니다 (기본값: 활성 파일).

```bash
file=<name>        # 파일 이름
path=<path>        # 파일 경로
content=<text>     # (필수) 삽입할 내용

inline             # 줄바꿈 없이 삽입
```

### `move`

파일을 이동하거나 이름을 바꿉니다 (기본값: 활성 파일). [[설정#항상 업데이트되는 내부 링크|보관함 설정]]에서 활성화된 경우 [[내부 링크]]가 자동으로 업데이트됩니다.

```bash
file=<name>        # 파일 이름
path=<path>        # 파일 경로
to=<path>          # (필수) 대상 폴더 또는 경로
```

### `rename`

파일 이름을 바꿉니다 (기본값: 활성 파일). 새 이름에서 파일 확장자를 생략하면 자동으로 유지됩니다. 파일 이름 변경과 이동을 동시에 하려면 [[#`move`|move]]를 사용하세요. [[설정#항상 업데이트되는 내부 링크|보관함 설정]]에서 활성화된 경우 [[내부 링크]]가 자동으로 업데이트됩니다.

```bash
file=<name>        # 파일 이름
path=<path>        # 파일 경로
name=<name>        # (필수) 새 파일 이름
```

### `delete`

파일을 삭제합니다 (기본값: 활성 파일, 기본적으로 휴지통으로 이동).

```bash
file=<name>        # 파일 이름
path=<path>        # 파일 경로

permanent          # 휴지통을 건너뛰고 영구 삭제
```

## 링크

[[백링크]] 및 [[나가는 링크]] 관련 명령어입니다.

### `backlinks`

파일의 백링크를 나열합니다 (기본값: 활성 파일).

```bash
file=<name>        # 대상 파일 이름
path=<path>        # 대상 파일 경로

counts             # 링크 수 포함
total              # 백링크 수 반환
format=json|tsv|csv  # 출력 형식 (기본값: tsv)
```

### `links`

파일의 나가는 링크를 나열합니다 (기본값: 활성 파일).

```bash
file=<name>        # 파일 이름
path=<path>        # 파일 경로

total              # 링크 수 반환
```

### `unresolved`

보관함의 미해결 링크를 나열합니다.

```bash
total              # 미해결 링크 수 반환
counts             # 링크 수 포함
verbose            # 원본 파일 포함
format=json|tsv|csv  # 출력 형식 (기본값: tsv)
```

### `orphans`

들어오는 링크가 없는 파일을 나열합니다.

```bash
total              # 고아 파일 수 반환
```

### `deadends`

나가는 링크가 없는 파일을 나열합니다.

```bash
total              # 막다른 파일 수 반환
```

## 개요

[[개요]] 관련 명령어입니다.

### `outline`

현재 파일의 제목을 표시합니다.

```bash
file=<name>        # 파일 이름
path=<path>        # 파일 경로
format=tree|md|json  # 출력 형식 (기본값: tree)

total              # 제목 수 반환
```

## 플러그인

[[코어 플러그인]] 및 [[커뮤니티 플러그인]] 관련 명령어입니다.

### `plugins`

설치된 플러그인을 나열합니다.

```bash
filter=core|community  # 플러그인 유형으로 필터링

versions               # 버전 번호 포함
format=json|tsv|csv    # 출력 형식 (기본값: tsv)
```

### `plugins:enabled`

활성화된 플러그인을 나열합니다.

```bash
filter=core|community  # 플러그인 유형으로 필터링

versions               # 버전 번호 포함
format=json|tsv|csv    # 출력 형식 (기본값: tsv)
```

### `plugins:restrict`

제한 모드를 전환하거나 확인합니다.

```bash
on                 # 제한 모드 활성화
off                # 제한 모드 비활성화
```

### `plugin`

플러그인 정보를 가져옵니다.

```bash
id=<plugin-id>     # (필수) 플러그인 ID
```

### `plugin:enable`

플러그인을 활성화합니다.

```bash
id=<id>                # (필수) 플러그인 ID
filter=core|community  # 플러그인 유형
```

### `plugin:disable`

플러그인을 비활성화합니다.

```bash
id=<id>                # (필수) 플러그인 ID
filter=core|community  # 플러그인 유형
```

### `plugin:install`

커뮤니티 플러그인을 설치합니다.

```bash
id=<id>            # (필수) 플러그인 ID

enable             # 설치 후 활성화
```

### `plugin:uninstall`

커뮤니티 플러그인을 삭제합니다.

```bash
id=<id>            # (필수) 플러그인 ID
```

### `plugin:reload`

플러그인을 새로고침합니다 (개발자용).

```bash
id=<id>            # (필수) 플러그인 ID
```

## 속성

[[속성]] 관련 명령어입니다.

### `aliases`

보관함의 별칭을 나열합니다. `active` 또는 `file`/`path`를 사용하여 특정 파일의 별칭을 표시합니다.

```bash
file=<name>        # 파일 이름
path=<path>        # 파일 경로

total              # 별칭 수 반환
verbose            # 파일 경로 포함
active             # 활성 파일의 별칭 표시
```

### `properties`

보관함의 속성을 나열합니다. `active` 또는 `file`/`path`를 사용하여 특정 파일의 속성을 표시합니다.

```bash
file=<name>        # 파일의 속성 표시
path=<path>        # 경로의 속성 표시
name=<name>        # 특정 속성 횟수 가져오기
sort=count         # 횟수순 정렬 (기본값: 이름)
format=yaml|json|tsv  # 출력 형식 (기본값: yaml)

total              # 속성 수 반환
counts             # 발생 횟수 포함
active             # 활성 파일의 속성 표시
```

### `property:set`

파일에 속성을 설정합니다 (기본값: 활성 파일).

```bash
name=<name>                                    # (필수) 속성 이름
value=<value>                                  # (필수) 속성 값
type=text|list|number|checkbox|date|datetime   # 속성 유형
file=<name>                                    # 파일 이름
path=<path>                                    # 파일 경로
```

### `property:remove`

파일에서 속성을 제거합니다 (기본값: 활성 파일).

```bash
name=<name>        # (필수) 속성 이름
file=<name>        # 파일 이름
path=<path>        # 파일 경로
```

### `property:read`

파일에서 속성 값을 읽습니다 (기본값: 활성 파일).

```bash
name=<name>        # (필수) 속성 이름
file=<name>        # 파일 이름
path=<path>        # 파일 경로
```

## Publish

[[Obsidian Publish 소개|Obsidian Publish]] 관련 명령어입니다.

### `publish:site`

게재 사이트 정보를 표시합니다 (슬러그, URL).

### `publish:list`

게재된 파일을 나열합니다.

```bash
total              # 게재된 파일 수 반환
```

### `publish:status`

게재 변경 사항을 나열합니다.

```bash
total              # 변경 수 반환
new                # 새 파일만 표시
changed            # 변경된 파일만 표시
deleted            # 삭제된 파일만 표시
```

### `publish:add`

파일 또는 변경된 모든 파일을 게재합니다 (기본값: 활성 파일).

```bash
file=<name>        # 파일 이름
path=<path>        # 파일 경로

changed            # 변경된 모든 파일 게재
```

### `publish:remove`

파일 게재를 취소합니다 (기본값: 활성 파일).

```bash
file=<name>        # 파일 이름
path=<path>        # 파일 경로
```

### `publish:open`

게재된 사이트에서 파일을 엽니다 (기본값: 활성 파일).

```bash
file=<name>        # 파일 이름
path=<path>        # 파일 경로
```

## 무작위 노트

[[무작위 노트]] 관련 명령어입니다.

### `random`

무작위 노트를 엽니다.

```bash
folder=<path>      # 폴더로 제한

newtab             # 새 탭에서 열기
```

### `random:read`

무작위 노트를 읽습니다 (경로 포함).

```bash
folder=<path>      # 폴더로 제한
```

## 검색

[[검색]] 관련 명령어입니다.

### `search`

보관함에서 텍스트를 검색합니다. 일치하는 파일 경로를 반환합니다.

```bash
query=<text>       # (필수) 검색 쿼리
path=<folder>      # 폴더로 제한
limit=<n>          # 최대 파일 수
format=text|json   # 출력 형식 (기본값: text)

total              # 일치 수 반환
case               # 대소문자 구분
```

### `search:context`

일치하는 줄 컨텍스트와 함께 검색합니다. grep 스타일의 `path:line: text` 출력을 반환합니다.

```bash
query=<text>       # (필수) 검색 쿼리
path=<folder>      # 폴더로 제한
limit=<n>          # 최대 파일 수
format=text|json   # 출력 형식 (기본값: text)

case               # 대소문자 구분
```

### `search:open`

검색 뷰를 엽니다.

```bash
query=<text>       # 초기 검색 쿼리
```

## Sync

[[Obsidian Sync 소개|Obsidian Sync]] 관련 명령어입니다.

> [!tip] 데스크톱 앱 없이 동기화
> 이 명령어들은 실행 중인 Obsidian 앱 내에서 Sync를 제어합니다. 데스크톱 앱 없이 명령줄에서 보관함을 동기화하려면 [[헤드리스 Sync]]를 참조하세요.

### `sync`

동기화를 중지하거나 재개합니다.

```bash
on                 # 동기화 재개
off                # 동기화 중지
```

### `sync:status`

동기화 상태와 사용량을 표시합니다.

### `sync:history`

파일의 동기화 버전 기록을 나열합니다 (기본값: 활성 파일).

```bash
file=<name>        # 파일 이름
path=<path>        # 파일 경로

total              # 버전 수 반환
```

### `sync:read`

동기화 버전을 읽습니다 (기본값: 활성 파일).

```bash
file=<name>        # 파일 이름
path=<path>        # 파일 경로
version=<n>        # (필수) 버전 번호
```

### `sync:restore`

동기화 버전을 복원합니다 (기본값: 활성 파일).

```bash
file=<name>        # 파일 이름
path=<path>        # 파일 경로
version=<n>        # (필수) 버전 번호
```

### `sync:open`

동기화 기록을 엽니다 (기본값: 활성 파일).

```bash
file=<name>        # 파일 이름
path=<path>        # 파일 경로
```

### `sync:deleted`

동기화에서 삭제된 파일을 나열합니다.

```bash
total              # 삭제된 파일 수 반환
```

## 태그

[[태그]] 관련 명령어입니다.

### `tags`

보관함의 태그를 나열합니다. `active` 또는 `file`/`path`를 사용하여 특정 파일의 태그를 표시합니다.

```bash
file=<name>        # 파일 이름
path=<path>        # 파일 경로
sort=count         # 횟수순 정렬 (기본값: 이름)

total              # 태그 수 반환
counts             # 태그 횟수 포함
format=json|tsv|csv  # 출력 형식 (기본값: tsv)
active             # 활성 파일의 태그 표시
```

### `tag`

태그 정보를 가져옵니다.

```bash
name=<tag>         # (필수) 태그 이름

total              # 발생 횟수 반환
verbose            # 파일 목록과 횟수 포함
```

## 작업

작업 관리 명령어입니다.

### `tasks`

보관함의 작업을 나열합니다. `active` 또는 `file`/`path`를 사용하여 특정 파일의 작업을 표시합니다.

```bash
file=<name>        # 파일 이름으로 필터링
path=<path>        # 파일 경로로 필터링
status="<char>"    # 상태 문자로 필터링

total              # 작업 수 반환
done               # 완료된 작업 표시
todo               # 미완료 작업 표시
verbose            # 줄 번호와 함께 파일별로 그룹화
format=json|tsv|csv  # 출력 형식 (기본값: text)
active             # 활성 파일의 작업 표시
daily              # 일일 노트의 작업 표시
```

**예제:**

```bash
# 보관함의 모든 작업 나열
tasks

# 보관함의 미완료 작업 나열
tasks todo

# 특정 파일의 완료된 작업 나열
tasks file=Recipe done

# 오늘의 일일 노트 작업 나열
tasks daily

# 일일 노트의 작업 수 세기
tasks daily total

# 파일 경로와 줄 번호와 함께 작업 나열
tasks verbose

# 커스텀 상태로 필터링 (특수 문자는 따옴표 사용)
tasks 'status=?'
```

### `task`

작업을 표시하거나 업데이트합니다.

```bash
ref=<path:line>    # 작업 참조 (경로:줄)
file=<name>        # 파일 이름
path=<path>        # 파일 경로
line=<n>           # 줄 번호
status="<char>"    # 상태 문자 설정

toggle             # 작업 상태 전환
daily              # 일일 노트
done               # 완료로 표시
todo               # 미완료로 표시
```

**예제:**

```bash
# 작업 정보 표시
task file=Recipe line=8
task ref="Recipe.md:8"

# 작업 완료 상태 전환
task ref="Recipe.md:8" toggle

# 일일 노트에서 작업 전환
task daily line=3 toggle

# 작업 상태 설정
task file=Recipe line=8 done      # → [x]
task file=Recipe line=8 todo      # → [ ]
task file=Recipe line=8 status=-  # → [-]
task daily line=3 done            # 일일 노트 작업을 완료로 표시
```


## 템플릿

[[템플릿]] 관련 명령어입니다.

### `templates`

템플릿을 나열합니다.

```bash
total              # 템플릿 수 반환
```

### `template:read`

템플릿 내용을 읽습니다.

```bash
name=<template>    # (필수) 템플릿 이름
title=<title>      # 변수 해석용 제목

resolve            # 템플릿 변수 해석
```

### `template:insert`

활성 파일에 템플릿을 삽입합니다.

```bash
name=<template>    # (필수) 템플릿 이름
```

**참고:**
- `resolve` 옵션은 `{{date}}`, `{{time}}`, `{{title}}` 변수를 처리합니다
- `create path=<path> template=<name>`을 사용하여 템플릿으로 파일을 만들 수 있습니다

## 테마 및 스니펫

[[테마]] 및 [[CSS 스니펫]] 관련 명령어입니다.

### `themes`

설치된 테마를 나열합니다.

```bash
versions           # 버전 번호 포함
```

### `theme`

활성 테마를 표시하거나 정보를 가져옵니다.

```bash
name=<name>        # 상세 정보를 위한 테마 이름
```

### `theme:set`

활성 테마를 설정합니다.

```bash
name=<name>        # (필수) 테마 이름 (비어 있으면 기본 테마)
```

### `theme:install`

커뮤니티 테마를 설치합니다.

```bash
name=<name>        # (필수) 테마 이름

enable             # 설치 후 활성화
```

### `theme:uninstall`

테마를 삭제합니다.

```bash
name=<name>        # (필수) 테마 이름
```

### `snippets`

설치된 CSS 스니펫을 나열합니다.

### `snippets:enabled`

활성화된 CSS 스니펫을 나열합니다.

### `snippet:enable`

CSS 스니펫을 활성화합니다.

```bash
name=<name>        # (필수) 스니펫 이름
```

### `snippet:disable`

CSS 스니펫을 비활성화합니다.

```bash
name=<name>        # (필수) 스니펫 이름
```

## 고유 노트

[[고유 노트 생성]] 관련 명령어입니다.

### `unique`

고유 노트를 만듭니다.

```bash
name=<text>        # 노트 이름
content=<text>     # 초기 내용
paneType=tab|split|window    # 열 창 유형

open               # 생성 후 파일 열기
```

## 보관함

### `vault`

보관함 정보를 표시합니다.

```bash
info=name|path|files|folders|size  # 특정 정보만 반환
```

### `vaults`

알려진 보관함을 나열합니다.

```bash
total              # 보관함 수 반환
verbose            # 보관함 경로 포함
```

### `vault:open`

다른 보관함으로 전환합니다 (TUI 전용).

```bash
name=<name>        # (필수) 보관함 이름
```

## 웹 뷰어

[[웹 뷰어]] 관련 명령어입니다.

### `web`

웹 뷰어에서 URL을 엽니다.

```bash
url=<url>          # (필수) 열 URL

newtab             # 새 탭에서 열기
```

## 단어 수

[[단어 개수]] 관련 명령어입니다.

### `wordcount`

단어와 문자 수를 셉니다 (기본값: 활성 파일).

```bash
file=<name>        # 파일 이름
path=<path>        # 파일 경로

words              # 단어 수만 반환
characters         # 문자 수만 반환
```

## 작업 공간

[[작업 공간]] 및 [[작업 공간]] 플러그인 관련 명령어입니다.

### `workspace`

작업 공간 트리를 표시합니다.

```bash
ids                # 작업 공간 항목 ID 포함
```

### `workspaces`

저장된 작업 공간을 나열합니다.

```bash
total              # 작업 공간 수 반환
```

### `workspace:save`

현재 레이아웃을 작업 공간으로 저장합니다.

```bash
name=<name>        # 작업 공간 이름
```

### `workspace:load`

저장된 작업 공간을 불러옵니다.

```bash
name=<name>        # (필수) 작업 공간 이름
```

### `workspace:delete`

저장된 작업 공간을 삭제합니다.

```bash
name=<name>        # (필수) 작업 공간 이름
```

### `tabs`

열린 탭을 나열합니다.

```bash
ids                # 탭 ID 포함
```

### `tab:open`

새 탭을 엽니다.

```bash
group=<id>         # 탭 그룹 ID
file=<path>        # 열 파일
view=<type>        # 열 뷰 유형
```

### `recents`

최근에 연 파일을 나열합니다.

```bash
total              # 최근 파일 수 반환
```

## 개발자 명령어

[[커뮤니티 플러그인]] 및 [[테마]] 개발을 돕는 명령어입니다. [Obsidian 개발자 문서](https://docs.obsidian.md)에서 자세히 알아보세요.

### `devtools`

Electron 개발자 도구를 전환합니다.

### `dev:debug`

Chrome DevTools Protocol 디버거를 연결/해제합니다.

```bash
on                 # 디버거 연결
off                # 디버거 해제
```

### `dev:cdp`

Chrome DevTools Protocol 명령어를 실행합니다.

```bash
method=<CDP.method>  # (필수) 호출할 CDP 메서드
params=<json>        # JSON 형식의 메서드 매개변수
```

### `dev:errors`

캡처된 JavaScript 오류를 표시합니다.

```bash
clear              # 오류 버퍼 지우기
```

### `dev:screenshot`

스크린샷을 찍습니다 (base64 PNG 반환).

```bash
path=<filename>    # 출력 파일 경로
```

### `dev:console`

캡처된 콘솔 메시지를 표시합니다.

```bash
limit=<n>                        # 표시할 최대 메시지 수 (기본값 50)
level=log|warn|error|info|debug  # 로그 레벨로 필터링

clear                            # 콘솔 버퍼 지우기
```

### `dev:css`

소스 위치와 함께 CSS를 검사합니다.

```bash
selector=<css>     # (필수) CSS 선택자
prop=<name>        # 속성 이름으로 필터링
```

### `dev:dom`

DOM 요소를 쿼리합니다.

```bash
selector=<css>     # (필수) CSS 선택자
attr=<name>        # 속성 값 가져오기
css=<prop>         # CSS 속성 값 가져오기

total              # 요소 수 반환
text               # 텍스트 내용 반환
inner              # outerHTML 대신 innerHTML 반환
all                # 첫 번째 대신 모든 일치 항목 반환
```

### `dev:mobile`

모바일 에뮬레이션을 전환합니다.

```bash
on                 # 모바일 에뮬레이션 활성화
off                # 모바일 에뮬레이션 비활성화
```

### `eval`

JavaScript를 실행하고 결과를 반환합니다.

```bash
code=<javascript>  # (필수) 실행할 JavaScript 코드
```

## 키보드 단축키

이 단축키들은 [[#터미널 인터페이스 사용|TUI]]에서 사용할 수 있습니다.

### 내비게이션

| 동작                                                  | 단축키          |
| ----------------------------------------------------- | -------------- |
| 커서 왼쪽으로 이동                                      | `←` / `Ctrl+B` |
| 커서 오른쪽으로 이동 (줄 끝에서 제안 수락)                | `→` / `Ctrl+F` |
| 줄 시작으로 이동                                        | `Ctrl+A`       |
| 줄 끝으로 이동                                          | `Ctrl+E`       |
| 한 단어 뒤로 이동                                       | `Alt+B`        |
| 한 단어 앞으로 이동                                     | `Alt+F`        |

### 편집

| 동작                    | 단축키                      |
| ----------------------- | -------------------------- |
| 줄 시작까지 삭제         | `Ctrl+U`                   |
| 줄 끝까지 삭제           | `Ctrl+K`                   |
| 이전 단어 삭제           | `Ctrl+W` / `Alt+Backspace` |

### 자동 완성

| 동작                                              | 단축키       |
| -------------------------------------------------- | ----------- |
| 제안 모드 진입 / 선택된 제안 수락                    | `Tab`       |
| 제안 모드 종료                                      | `Shift+Tab` |
| 제안 모드 진입 (새 입력에서)                         | `↓`         |
| 첫 번째/선택된 제안 수락 (줄 끝에서)                  | `→`         |

### 기록

| 동작                                                        | 단축키          |
| ---------------------------------------------------------- | -------------- |
| 이전 기록 항목 / 제안 위로 탐색                               | `↑` / `Ctrl+P` |
| 다음 기록 항목 / 제안 아래로 탐색                              | `↓` / `Ctrl+N` |
| 역방향 기록 검색 (입력하여 필터링, `Ctrl+R`로 순환)            | `Ctrl+R`       |

### 기타

| 동작                                                    | 단축키               |
| ------------------------------------------------------ | ------------------- |
| 명령어 실행 또는 제안 수락                                | `Enter`             |
| 자동 완성 실행 취소 / 제안 모드 종료 / 입력 지우기         | `Escape`            |
| 화면 지우기                                              | `Ctrl+L`            |
| 종료                                                    | `Ctrl+C` / `Ctrl+D` |

## 문제 해결

Obsidian CLI 실행에 문제가 있는 경우:

- 최신 [[Obsidian 업데이트|Obsidian 설치 프로그램 버전]] (1.12.4 이상)을 사용하고 있는지 확인하세요.
- CLI를 등록한 후 PATH 변경 사항이 적용되도록 터미널을 다시 시작하세요.
- Obsidian이 실행 중이어야 합니다. CLI는 실행 중인 Obsidian 인스턴스에 연결됩니다. Obsidian이 실행 중이 아닌 경우, 첫 번째 CLI 명령어가 앱을 시작해야 합니다.

### Windows

Windows에서 Obsidian CLI를 사용하려면 Obsidian 1.12.4+ 설치 프로그램이 필요합니다. [[Obsidian 업데이트|설치 프로그램 버전 업데이트]]를 참조하세요.

Windows는 Obsidian을 stdin/stdout에 올바르게 연결하는 터미널 리다이렉터를 사용합니다. 이는 Obsidian이 일반적으로 Windows에서 터미널 출력과 호환되지 않는 GUI 앱으로 실행되기 때문에 필요합니다. Obsidian 1.12.4+를 설치하면 `Obsidian.exe` 파일이 설치된 폴더에 `Obsidian.com` 터미널 리다이렉터가 추가됩니다.

### macOS

CLI 등록은 `~/.zprofile`을 통해 Obsidian 바이너리 디렉터리를 PATH에 추가합니다. 문제가 있는 경우 다음을 확인하세요:

`~/.zprofile` 파일에 다음 줄이 포함되어 있어야 합니다. 누락된 경우 수동으로 추가할 수 있습니다:

```
export PATH="$PATH:/Applications/Obsidian.app/Contents/MacOS"
```

#### 대체 셸

CLI 등록은 zsh(macOS 기본 셸)에서 사용하는 `~/.zprofile`만 수정합니다. 다른 셸을 사용하는 경우, 셸 설정 파일에 Obsidian 바이너리 디렉터리를 수동으로 추가하세요:

- Bash: `~/.bash_profile`에 `export PATH="$PATH:/Applications/Obsidian.app/Contents/MacOS"` 추가
- Fish: `fish_add_path /Applications/Obsidian.app/Contents/MacOS` 실행


### Linux

CLI 등록은 Obsidian 바이너리를 가리키는 심볼릭 링크를 `/usr/local/bin/obsidian`에 생성합니다 (sudo 필요).

#### AppImage

AppImage 설치의 경우, 마운트 경로가 매번 실행 시 변경되므로 심볼릭 링크는 내부 바이너리 대신 `.AppImage` 파일을 가리킵니다. sudo가 실패하면 대체로 `~/.local/bin/obsidian`에 심볼릭 링크가 생성됩니다. 문제가 있는 경우 다음을 확인하세요.

심볼릭 링크가 존재하고 올바른 바이너리를 가리키는지 확인합니다:

```
ls -l /usr/local/bin/obsidian
```

심볼릭 링크가 없으면 수동으로 생성합니다:

```
sudo ln -s /path/to/obsidian /usr/local/bin/obsidian
```

심볼릭 링크가 `~/.local/bin/`에 대신 생성된 경우, 해당 디렉터리가 PATH에 포함되어 있는지 확인하세요. `~/.bashrc` 또는 `~/.zshrc`에 다음을 추가합니다:

```
export PATH="$PATH:$HOME/.local/bin"
```

`.AppImage` 파일을 이동하거나 이름을 변경한 후 심볼릭 링크가 깨지면, CLI를 다시 등록하거나 심볼릭 링크를 수동으로 업데이트하세요.

#### Snap

Snap 패키지는 자체 사용자 데이터 디렉터리에 Insider 빌드 데이터를 저장합니다. CLI가 Insider `.asar`를 감지하지 못하는 경우, `XDG_CONFIG_HOME`을 Snap 설정 경로로 설정하세요:

```
export XDG_CONFIG_HOME="$HOME/snap/obsidian/current/.config"
```

이를 지속적으로 적용하려면 `~/.bashrc` 또는 `~/.zshrc`에 추가하세요.


#### Flatpak

Obsidian이 이를 자동으로 처리하려고 하지만, 아래는 수동 지침입니다. 시스템 설치인 경우:

```
ln -s /var/lib/flatpak/exports/bin/md.obsidian.Obsidian ~/.local/bin/obsidian
```

사용자 설치인 경우:

```
ln -s ~/.local/share/flatpak/exports/bin/md.obsidian.Obsidian ~/.local/bin/obsidian
```
