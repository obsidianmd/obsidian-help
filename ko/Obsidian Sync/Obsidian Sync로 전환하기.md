---
permalink: sync/switch
cssclasses:
  - soft-embed
publish: true
mobile: true
description: Learn how to transition from your current syncing solution to Obsidian Sync.
---
현재 사용 중인 동기화 솔루션에서 Obsidian Sync로 전환하는 방법을 알아보세요.

> [!warning] 동일한 파일을 여러 솔루션으로 동기화하지 마세요
> Obsidian Sync를 클라우드 저장소 서비스(예: iCloud, Dropbox, OneDrive, Google Drive)와 함께 사용하는 것은 충돌을 일으킬 수 있으므로 [[자주 묻는 질문#타사 동기화를 Obsidian Sync와 함께 사용할 수 있나요?|권장하지 않습니다]]. 그러나 클라우드 저장소 서비스는 [[Obsidian 파일 백업|백업]] 전략에서 활용할 수 있습니다.

## 타사 동기화 서비스 또는 클라우드 저장소에서 보관함 이동하기

보관함이 다음 위치 중 하나에 저장되어 있다면 타사 서비스에 의해 동기화되고 있을 가능성이 높습니다:

- **Windows**: `C:\Users\Username\Desktop` 또는 `C:\Users\Username\Documents`
- **macOS**: `/users/username/Desktop` 또는 `/users/username/Documents`
- **iOS**: Files 앱 내의 **iCloud** 폴더
- **기타**: `Drive/my-vault`, `Dropbox/my-vault`, `pSync/my-vault` 등 동기화 서비스 하위의 모든 폴더

Android와 Linux는 이러한 문제가 비교적 적지만, 이러한 기기에서도 보관함 위치를 확인하는 것이 좋습니다.

> [!tip] 현재 로컬 보관함이 원격 보관함에 연결되어 있는 경우, Obsidian은 보관함이 동기화 서비스 내에 있는지 감지하려고 시도합니다. 동기화 서비스 내에 있으면 Obsidian Sync 설정 상단에 메시지가 표시됩니다.

동기화 서비스와의 충돌을 방지하기 위해 Obsidian 보관함을 다음 위치에 저장하는 것을 권장합니다:

- **Windows**: 권장 위치 순서:
    1. `D:\` 또는 C 드라이브나 네트워크 드라이브가 아닌 다른 드라이브
    2. `C:\Vaults` (C:\ 드라이브 사용 권한이 있는 경우)
    3. `C:\Users\Username\Vaults` (C:\Users\Username 내에 보관함을 유지해야 하는 경우, OneDrive가 파일을 제거하지 않도록 설정하세요. OneDrive는 일반적으로 `Desktop` 및 `Documents` 폴더 외부에서는 덜 공격적으로 작동합니다.)
- **macOS**: `/users/username/vaults`
- **Linux**: 파일 시스템이 다양하므로 특정 권장 사항은 없습니다. Obsidian이 완전한 읽기/쓰기 권한을 가지고 있으며 동기화 서비스가 해당 폴더를 관리하지 않는지 확인하세요.
- **iOS/iPadOS**: 보관함을 **나의 iPhone** 또는 **이 기기**에 저장하세요.
- **Android**: 기기의 `Documents/` 폴더를 사용하세요.

## 데스크톱에서 Obsidian을 사용하여 보관함 이동하기

![[보관함 관리#다른 폴더로 보관함 이동하기]]

## 모바일에서 보관함 이동하기

모바일 기기에서 Obsidian은 샌드박스 환경에서 작동하므로 데스크톱처럼 앱 내에서 보관함을 이동할 수 없습니다.

### Android

Android 파일 시스템은 기기에 따라 매우 다양하지만, 일반적으로 보관함을 수동으로 이동하는 것과 동일한 단계를 따르되, 기기의 동기화 서비스에서 제거되었는지 확인하세요.

### iOS 및 iPadOS

기존 iCloud 보관함을 기기로 이동하려면 다음 단계를 따르세요:

> [!note] 다른 기기에 이미 데이터가 있고 Obsidian Sync를 설정한 경우, [[Obsidian Sync 설정하기#다른 기기에서 원격 보관함 동기화하기|Sync에서 새 로컬 보관함을 설정]]하는 것이 권장됩니다.

- 보관함을 [[Obsidian 파일 백업|백업]]하세요.
- 기기에 새 보관함을 생성하고 **iCloud Drive에 저장**이 비활성화되어 있는지 확인하세요.
- 모든 기기에서 Obsidian 앱을 강제 종료하여 동기화를 중지하세요.
- iOS/iPadOS 기기에서 **Files** 앱을 여세요.
- **iCloud Drive → Obsidian** 아래의 보관함 폴더를 길게 누른 후 **이동**을 선택하세요.
- 보관함을 **나의 iPhone/기기 → Obsidian**으로 이동하고 보이는지 확인하세요.
- **복사**를 탭하세요.
- **iCloud Drive → Obsidian**으로 돌아가서 이전 보관함 폴더를 삭제하세요.

Obsidian을 다시 열면 보관함에 클라우드 아이콘 대신 보관함 아이콘이 표시되어 더 이상 iCloud Drive에 있지 않음을 확인할 수 있습니다. Obsidian Sync도 설정 내에서 더 이상 경고 메시지를 표시하지 않습니다.

## 다음 단계

- Obsidian Sync를 시작하고 싶으신가요? [[Obsidian Sync 설정하기]]
- 추가 도움이 필요하신가요? [[Obsidian Sync 문제 해결]]을 확인하세요
