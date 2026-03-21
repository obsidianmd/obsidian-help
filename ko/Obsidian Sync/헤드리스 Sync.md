---
permalink: sync/headless
cssclasses:
  - reference
description: 'Obsidian Sync offers a headless client to sync vaults without using the desktop app. Useful for CI pipelines, agents, and automated workflows. Sync the latest changes or keep files continuously up to date.'
---

[[Obsidian Sync 소개|Obsidian Sync]]는 데스크톱 앱을 사용하지 않고 보관함을 동기화할 수 있는 헤드리스 클라이언트를 제공해요. CI 파이프라인, 에이전트, 자동화된 워크플로우에 유용해요. 최신 변경 사항을 동기화하거나 파일을 지속적으로 최신 상태로 유지할 수 있어요.

[[헤드리스 Sync|Obsidian Headless]] **(오픈 베타)**를 설치하면 Obsidian 데스크톱 앱 없이 명령줄에서 [[Obsidian Sync 소개|Obsidian Sync]]와 상호작용할 수 있어요. 헤드리스 Sync는 종단 간 암호화를 포함하여 데스크톱 앱과 동일한 [[보안 및 개인정보 보호|암호화 및 개인정보 보호]]를 사용해요.

## 빠른 시작

> [!error] 시작하기 전에 데이터를 백업하세요
> 1. 예기치 않은 상황에 대비하여 시작하기 전에 항상 데이터를 백업하세요.
> 2. 동일한 기기에서 데스크톱 앱 동기화와 헤드리스 동기화를 *동시에* 사용하지 마세요. 데이터 충돌이 발생할 수 있어요. 기기당 하나의 동기화 방법만 사용하세요.

[[헤드리스 Sync|Obsidian Headless]] **(오픈 베타)** 설치:

```shell
npm install -g obsidian-headless
```

활성화된 [[플랜 및 저장 용량 제한|Obsidian Sync 구독]]이 필요해요.

```shell
# 로그인
ob login

# 원격 보관함 목록 확인
ob sync-list-remote

# 동기화를 위한 보관함 설정
cd ~/vaults/my-vault
ob sync-setup --vault "My Vault"

# 일회성 동기화 실행
ob sync

# 연속 동기화 실행 (변경 사항 감시)
ob sync --continuous
```

## 명령

### `ob sync-list-remote`

공유 보관함을 포함하여 계정에서 사용 가능한 모든 원격 보관함을 나열해요.

### `ob sync-list-local`

로컬에 설정된 보관함과 경로를 나열해요.

### `ob sync-create-remote`

새 원격 보관함을 생성해요.

```
ob sync-create-remote --name "Vault Name" [--encryption <standard|e2ee>] [--password <password>] [--region <region>]
```

| 옵션 | 설명 |
| --- | --- |
| `--name` | 보관함 이름 (필수) |
| `--encryption` | `standard`는 관리형 암호화, `e2ee`는 종단 간 암호화 |
| `--password` | 종단 간 암호화 비밀번호 (생략 시 입력 프롬프트 표시) |
| `--region` | 서버 [[동기화 지역\|지역]] (생략 시 자동) |

### `ob sync-setup`

로컬 보관함과 원격 보관함 간의 동기화를 설정해요.

```
ob sync-setup --vault <id-or-name> [--path <local-path>] [--password <password>] [--device-name <name>] [--config-dir <name>]
```

| 옵션 | 설명 |
| --- | --- |
| `--vault` | 원격 보관함 ID 또는 이름 (필수) |
| `--path` | 로컬 디렉토리 (기본값: 현재 디렉토리) |
| `--password` | E2E 암호화 비밀번호 (생략 시 입력 프롬프트 표시) |
| `--device-name` | [[버전 기록\|동기화 버전 기록]]에 표시되는 장치 이름 |
| `--config-dir` | [[설정 폴더\|설정 디렉토리]] 이름 (기본값: `.obsidian`) |

### `ob sync`

설정된 보관함에 대해 동기화를 실행해요.

```
ob sync [--path <local-path>] [--continuous]
```

| 옵션 | 설명 |
| --- | --- |
| `--path` | 로컬 보관함 경로 (기본값: 현재 디렉토리) |
| `--continuous` | 변경 사항을 감시하며 연속 실행 |

### `ob sync-config`

보관함의 [[동기화 설정 및 선택적 동기화|동기화 설정]]을 확인하거나 변경해요. 옵션 없이 실행하면 현재 설정을 표시해요.

```
ob sync-config [--path <local-path>] [options]
```

| 옵션                  | 설명                                                                                                                                                                                                           |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--path`              | 로컬 보관함 경로 (기본값: 현재 디렉토리)                                                                                                                                                                      |
| `--mode`              | 동기화 모드: `bidirectional` (기본값), `pull-only` (다운로드만, 로컬 변경 무시), 또는 `mirror-remote` (다운로드만, 로컬 변경 되돌리기)                                                                          |
| `--conflict-strategy` | `merge` 또는 `conflict`                                                                                                                                                                                        |
| `--file-types`        | 동기화할 첨부 파일 유형: `image`, `audio`, `video`, `pdf`, `unsupported` (쉼표로 구분, 비워두면 해제)                                                                                                           |
| `--configs`           | 동기화할 설정 범주: `app`, `appearance`, `appearance-data`, `hotkey`, `core-plugin`, `core-plugin-data`, `community-plugin`, `community-plugin-data` (쉼표로 구분, 비워두면 설정 동기화 비활성화)                 |
| `--excluded-folders`  | 제외할 폴더 (쉼표로 구분, 비워두면 해제)                                                                                                                                                                       |
| `--device-name`       | 동기화 버전 기록에서 이 클라이언트를 식별하는 장치 이름                                                                                                                                                        |
| `--config-dir`        | 설정 디렉토리 이름 (기본값: `.obsidian`)                                                                                                                                                                       |

### `ob sync-status`

보관함의 동기화 상태 및 설정을 표시해요.

```
ob sync-status [--path <local-path>]
```

### `ob sync-unlink`

보관함의 동기화 연결을 해제하고 저장된 자격 증명을 제거해요.

```
ob sync-unlink [--path <local-path>]
```

## 네이티브 모듈

Obsidian Headless에는 Windows와 macOS에서 파일 생성 시간(birthtime)을 설정하기 위한 사전 빌드된 네이티브 애드온이 포함되어 있어요. 이를 통해 서버에서 파일을 다운로드할 때 원래 생성 타임스탬프가 보존돼요.

이 애드온은 N-API 버전 3을 대상으로 하므로, 컴파일된 바이너리는 ABI가 안정적이며 재컴파일 없이 여러 Node.js 버전에서 작동해요.

Linux에서는 birthtime이 지원되지 않아 애드온이 포함되지 않으며, 동기화는 이 기능 없이 정상적으로 작동해요.

사전 빌드된 바이너리는 다음 플랫폼에 포함되어 있어요:

- `win32-x64`
- `win32-arm64`
- `win32-ia32`
- `darwin-x64`
- `darwin-arm64`
