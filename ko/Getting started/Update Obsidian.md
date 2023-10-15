---
aliases:
  - How to/Update Obsidian
  - Installer version update
---

Obsidian은 정기적으로 새 업데이트를 확인합니다. 새 업데이트가 사용 가능한 경우 Obsidian은 응용 프로그램을 다시 시작할 때 해당 업데이트를 적용합니다.

## Check for an update and the current version

**설정 → 정보**(Settings -> About)를 엽니다.

현재 Obsidian 버전과 설치 프로그램 버전을 왼쪽 상단에서 확인할 수 있습니다.

![[application-installer-current-version.png]]

사용 가능한 업데이트를 적용하려면 **다시 시작**(Relaunch)을 클릭합니다.

## Disable automatic updates

Obsidian을 수동으로 업데이트하려는 경우 자동 업데이트를 비활성화할 수 있습니다.

1. **설정 → 정보**(Settings -> About)를 엽니다.
2. **자동 업데이트**(Automatic updates)를 비활성화합니다.

## Installer updates

가끔 Obsidian [release notes](https://obsidian.md/changelog/)에는 수동 설치 프로그램 업데이트가 필요하며 웹사이트로 연결되는 링크가 포함됩니다. 이러한 업데이트는 Obsidian의 구조에 대한 업데이트를 다루며 자동 업데이트 프로세스 내에서 처리할 수 없습니다.

> [!tip] 
> 설치 프로그램 버전을 업데이트하려면 Obsidian을 **제거할 필요가 없습니다**.

설치 프로그램 업데이트가 필요한 경우 Obsidian을 업데이트하려면 다음을 수행하십시오.

1. [https://obsidian.md/download](https://obsidian.md/download "https://obsidian.md/download")로 이동합니다.
2. 시스템에 설치 프로그램을 다운로드합니다.
    1. Obsidian이 열려 있으면 완전히 닫습니다.
3. [[Download and install Obsidian]]에 설명된 대로 설치 프로세스를 실행합니다.

설치 프로그램 업데이트가 완료되었습니다. 이제 Obsidian을 다시 열 수 있습니다.

> [!Question]- Q1. 플러그인 작성자 또는 테마 개발자가 내 설치 프로그램을 업데이트하라고 요청하지만 Obsidian 팀은 업데이트하지 않았습니다. 왜일까요?
> 이것은 설치 프로그램 내부 라이브러리 업데이트가 필요하지만 최소 응용 프로그램 버전 업데이트가 필요하지 않을 때 매우 일반적입니다. 그렇게 하면 모두가 업데이트해야 하는 상황이 발생합니다.
>
예를 들어 PDF 주석 플러그인을 사용하고 있고 Obsidian 내의 `pdf.js` 라이브러리를 업데이트한 경우 플러그인 작성자는 해당 라이브러리의 업데이트를 활용하려고 할 것입니다.
>
마찬가지로 업데이트된 CSS 기능은 테마 개발자가 설치 프로그램 업데이트를 요구할 수 있으며 이를 통해 새로운 스타일링 기능을 활용할 수 있습니다.

## Troubleshooting

일부 기능은 더 최신 설치 프로그램 버전에 의존할 수 있습니다. 최근에 추가된 기능에 문제가 발생하는 경우 설치 프로그램 버전을 업데이트하려면 Obsidian을 [[Download and install Obsidian|reinstalling Obsidian]] 하는 것을 고려해 보십시오.

