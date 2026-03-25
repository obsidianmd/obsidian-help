---
permalink: publish/headless
cssclasses:
  - reference
description: Obsidian Publish offers a headless client to publish vaults without using the desktop app. Useful for CI pipelines and automated workflows.
---
[[Obsidian Publish 소개|Obsidian Publish]]는 데스크톱 앱 없이 보관함을 게재할 수 있는 헤드리스 클라이언트를 제공해요. CI 파이프라인이나 자동화 워크플로에 유용해요. 일정에 따라 또는 빌드 파이프라인의 일부로 최신 변경 사항을 게재할 수 있어요.

[[Obsidian Headless]] **(오픈 베타)**를 설치하면 Obsidian 데스크톱 앱 없이 명령줄에서 [[Obsidian Publish 소개|Obsidian Publish]]와 상호작용할 수 있어요.

## 빠른 시작

[[Obsidian Headless|Obsidian Headless]] **(오픈 베타)** 설치:

```shell
npm install -g obsidian-headless
```

활성화된 [[Obsidian Publish 소개|Obsidian Publish 구독]]이 필요해요.

```shell
# 로그인
ob login

# Publish 사이트 목록 보기
ob publish-list-sites

# 로컬 보관함을 Publish 사이트에 연결
cd ~/vaults/my-vault
ob publish-setup --site "my-site"

# 게재하지 않고 변경 사항 미리보기
ob publish --dry-run

# 변경 사항 게재
ob publish
```

## 명령

### `ob publish-list-sites`

계정에서 사용 가능한 모든 Publish 사이트를 나열해요.

### `ob publish-create-site`

새 Publish 사이트를 생성해요.

```
ob publish-create-site --slug <slug>
```

| 옵션 | 설명 |
| --- | --- |
| `--slug` | 사이트의 URL 식별자 (예: `my-notes`를 지정하면 `publish.obsidian.md/my-notes`가 생성돼요) |

### `ob publish-setup`

로컬 보관함을 Publish 사이트에 연결해요.

```
ob publish-setup [--site <id-or-slug>] [--path <local-path>]
```

| 옵션 | 설명 |
| --- | --- |
| `--site` | 사이트 ID 또는 slug |
| `--path` | 로컬 보관함 경로 (기본값: 현재 디렉터리) |

### `ob publish`

보관함 변경 사항을 사이트에 게재해요. 기본적으로 프런트매터에 `publish: true`가 있는 파일만 포함돼요.

```
ob publish [--path <local-path>] [--all] [--dry-run] [--yes]
```

| 옵션 | 설명 |
| --- | --- |
| `--path` | 로컬 보관함 경로 (기본값: 현재 디렉터리) |
| `--all` | 게재 플래그 여부와 관계없이 모든 파일 포함 |
| `--dry-run` | 게재하지 않고 변경 사항 표시 |
| `--yes` | 확인 없이 바로 게재 |

### `ob publish-config`

보관함의 포함/제외 폴더 설정을 확인하거나 변경해요. 옵션 없이 실행하면 현재 설정을 표시해요.

```
ob publish-config [--path <local-path>] [options]
```

| 옵션 | 설명 |
| --- | --- |
| `--path` | 로컬 보관함 경로 (기본값: 현재 디렉터리) |
| `--includes` | 포함할 폴더, 쉼표로 구분 (빈 문자열로 초기화) |
| `--excludes` | 제외할 폴더, 쉼표로 구분 (빈 문자열로 초기화) |

### `ob publish-site-options`

사이트 전체의 표시 및 내비게이션 설정을 확인하거나 업데이트해요. 옵션 없이 실행하면 현재 설정을 표시해요.

```
ob publish-site-options [--path <local-path>] [options]
```

| 옵션 | 설명 |
| --- | --- |
| `--path` | 로컬 보관함 경로 (기본값: 현재 디렉터리) |
| `--site-name` | 사이트 이름 |
| `--index-file` | 홈 페이지 파일 경로 |
| `--logo` | 로고 파일 경로 (빈 문자열로 초기화) |
| `--show-navigation` | 내비게이션 사이드바 표시 |
| `--show-graph` | 그래프 뷰 표시 |
| `--show-outline` | 목차 표시 |
| `--show-search` | 검색 표시 |
| `--show-backlinks` | 백링크 표시 |
| `--show-hover-preview` | 호버 미리보기 표시 |
| `--show-theme-toggle` | 테마 전환 버튼 표시 |
| `--default-theme` | 기본 테마: `light` 또는 `dark` |
| `--readable-line-length` | 읽기 쉬운 행 길이 |
| `--strict-line-breaks` | 엄격한 줄 바꿈 |
| `--hide-title` | 인라인 제목 숨기기 |
| `--sliding-window` | 슬라이딩 윈도우 모드 |
| `--nav-order` | 내비게이션 순서, 쉼표로 구분된 경로 (빈 문자열로 초기화) |
| `--nav-hidden` | 숨긴 내비게이션 항목, 쉼표로 구분된 경로 (빈 문자열로 초기화) |

### `ob publish-unlink`

보관함과 Publish 사이트의 연결을 끊어요.

```
ob publish-unlink [--path <local-path>]
```
