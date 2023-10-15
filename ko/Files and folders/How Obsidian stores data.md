---
aliases: Advanced topics/How Obsidian stores data
---

Obsidian은 노트를 [[Basic formatting syntax|Markdown-formatted ]]으로 서식 지정된 일반 텍스트 파일로 _보관소_라고 하는 로컬 파일 시스템의 폴더에 저장합니다. '보관소'는 로컬 파일 시스템의 폴더로서 하위 폴더를 포함합니다.

노트는 일반 텍스트 파일이므로 다른 텍스트 편집기와 파일 관리자를 사용하여 노트를 편집하고 관리할 수 있습니다. Obsidian은 외부 변경 사항을 반영하기 위해 '보관소'를 자동으로 새로 고칩니다.

Obsidian은 운영 체제가 허용하는 어느 곳에서나 '보관소'를 생성할 수 있습니다. Obsidian은 Dropbox, iCloud, OneDrive, Git 및 기타 다양한 제3자 서비스와 동기화할 수 있습니다.

작업 및 개인용 노트를 분리하기 위해 여러 폴더를 개별 '보관소'로 열 수 있습니다.

> [!warning] Vaults within vaults
> [[Internal links]]는 '보관소' 내부로 한정되기 때문에 '보관소' 내부에 다른 '보관소'를 생성하지 않는 것을 권장합니다. 링크가 올바르게 업데이트되지 않을 수 있습니다.

## Vault settings

"Obsidian은 '보관소'의 루트 폴더에 `.obsidian` 폴더를 생성합니다. 이 폴더에는 해당 '보관소'에 특정한 설정, 예를 들어 [[custom hotkeys]], [[themes]], 그리고 [[community plugins]]와 같은 내용이 포함됩니다."

기본적으로 대부분의 운영 체제에서는 점(`.`)으로 시작하는 폴더를 숨깁니다. 따라서 해당 폴더를 볼 수 있도록 파일 관리자의 설정을 업데이트해야 할 수 있습니다.

- **macOS**: Finder에서 숨겨진 파일을 보려면 `Cmd+Shift+.` (마침표)를 누르세요.
- **Windows**: [Show hidden files](https://support.microsoft.com/en-us/windows/show-hidden-files-0320fe58-0117-fd59-6851-9b7f9840fdb2)

> [!tip] Adding `.obsidian` to Git
> `.obsidian/workspace` 파일은 현재의 작업 공간 레이아웃을 저장하며, 새 파일을 열 때마다 변경됩니다. '보관소'를 버전 관리하기 위해 [Git](https://git-scm.com)을 사용한다면 `.obsidian/workspace` 파일을 `.gitignore`에 추가하는 것이 좋을 수 있습니다.

## Global settings

Obsidian은 전역 설정을 시스템 폴더에 저장합니다. 시스템 폴더의 위치는 사용 중인 운영 체제에 따라 다릅니다.

- **macOS**: `/Users/yourusername/Library/Application Support/obsidian`
- **Windows**: `%APPDATA%\Obsidian\`
- **Linux**: `$XDG_CONFIG_HOME/Obsidian/` or `~/.config/Obsidian/`

> [!warning]
> 시스템 폴더에 '보관소'를 생성하지 마십시오. 이로 인해 데이터 손상 또는 데이터 손실이 발생할 수 있습니다.
