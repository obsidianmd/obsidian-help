---
permalink: data-storage
publish: true
mobile: true
description: This page explains how Obsidian stores its data on your device.
---

Obsidian은 노트를 [[기본 서식 구문|Markdown 형식의]] 일반 텍스트 파일로 _보관함_에 저장해요. 보관함은 하위 폴더를 포함하여 로컬 파일 시스템의 폴더예요.

노트는 일반 텍스트 파일이므로, 다른 텍스트 편집기와 파일 관리자를 사용하여 노트를 편집하고 관리할 수 있어요. Obsidian은 외부 변경 사항을 반영하기 위해 보관함을 자동으로 새로 고쳐요.

운영 체제에서 허용하는 모든 위치에 보관함을 생성할 수 있어요. Obsidian은 [[Obsidian Sync 소개|Obsidian Sync]], Dropbox, iCloud, OneDrive, Git 및 기타 많은 타사 서비스와 동기화돼요.

여러 폴더를 개별 보관함으로 열 수 있어요. 예를 들어, 업무용 노트와 학교용 노트를 분리할 수 있어요.

> [!warning] 보관함 안의 보관함
> [[내부 링크]]는 보관함 내에서만 유효하므로, 보관함 안에 보관함을 만들지 않는 것을 권장해요. 링크가 올바르게 업데이트되지 않을 수 있어요.

## 보관함 설정

Obsidian은 보관함의 루트 폴더에 `.obsidian` [[설정 폴더]]를 생성하며, 여기에는 [[단축키]], [[테마]], [[커뮤니티 플러그인]] 등 해당 보관함에 특정한 환경 설정이 포함돼요.

기본적으로 대부분의 운영 체제는 마침표(`.`)로 시작하는 폴더를 숨기므로, 이를 확인하려면 파일 관리자의 설정을 변경해야 할 수 있어요.

- **macOS**: Finder에서 `Cmd+Shift+.`(마침표)를 눌러 숨김 파일을 표시해요.
- **Windows**: [숨김 파일 표시](https://support.microsoft.com/en-us/windows/show-hidden-files-0320fe58-0117-fd59-6851-9b7f9840fdb2)
+ **GNU/Linux:** 대부분의 파일 탐색기에서 `Ctrl + h`를 눌러 숨김 파일을 표시해요.

> [!tip] `.obsidian`을 Git에 추가
> `.obsidian/workspace.json` 및 `.obsidian/workspaces.json` 파일은 현재 작업 공간 레이아웃을 저장하며, 새 파일을 열 때마다 업데이트돼요. [Git](https://git-scm.com)을 사용하여 보관함을 관리하는 경우, 이 파일들을 `.gitignore`에 추가하는 것이 좋아요.

## 전역 설정

Obsidian은 전역 설정을 시스템 폴더에 저장해요. 시스템 폴더의 위치는 사용 중인 운영 체제에 따라 달라요.

- **macOS**: `/Users/yourusername/Library/Application Support/obsidian`
- **Windows**: `%APPDATA%\Obsidian\`
- **Linux**: `$XDG_CONFIG_HOME/obsidian/` 또는 `~/.config/obsidian/`

> [!warning] 시스템 폴더에 보관함을 생성하지 마세요. 데이터 손상이나 데이터 손실이 발생할 수 있어요.

## IndexedDB

IndexedDB는 Obsidian이 백엔드 저장소로 사용하는 저수준 클라이언트 측 데이터베이스예요. [[Obsidian Sync 소개|Obsidian Sync]] 연결 상태를 유지하고, 앱이 종료될 때 [[#메타데이터 캐시]]를 보존하는 데 도움을 줘요.

> [!warning] Apple의 [잠금 모드](<https://support.apple.com/en-us/105120>)가 활성화되어 있고 Obsidian이 제외되지 않은 경우, 이러한 데이터베이스 파일이 저장되지 않아 앱이 시작될 때마다 재색인이 필요해요.

### 메타데이터 캐시

앱 사용 시 빠른 경험을 제공하기 위해, Obsidian은 보관함의 파일에 대한 메타데이터의 로컬 기록인 **메타데이터 캐시**를 유지해요. 이 메타데이터는 그래프 뷰에서 개요 뷰에 이르기까지 앱 전반의 많은 기능을 지원해요.

Obsidian은 이 캐시를 보관함의 파일과 동기화 상태로 유지하지만, 기본 파일과 데이터가 동기화되지 않을 수 있어요. 보관함에서 이러한 문제가 발생하면, 앱 설정의 *파일 및 링크* 섹션에서 메타데이터 캐시를 다시 빌드할 수 있어요.
