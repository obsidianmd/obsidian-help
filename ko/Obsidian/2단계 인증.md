---
aliases:
  - 2FA
---

Obsidian 사용자는 [https://obsidian.md/account](https://obsidian.md/account "https://obsidian.md/account")에서 2단계 인증 (2FA)을 활성화할 수 있는 옵션을 제공합니다.

## Enable 2FA

[https://obsidian.md/account](https://obsidian.md/account "https://obsidian.md/account")에 웹 브라우저를 통해 Obsidian 계정에 로그인하세요.

- **계정** 섹션에서 `2단계 인증` 항목을 찾아 **활성화** 버튼을 선택하세요.
- 팝업 창이 나타나면 인증기 앱을 연결하라는 메시지가 표시됩니다.

> [!hint]- 인기있는 인증 앱
> - [Authy](https://authy.com "https://authy.com")
> - [Google Authenticator](https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2 "https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2")
> - [Microsoft Authenticator](https://www.microsoft.com/en-us/security/mobile-authenticator-app "https://www.microsoft.com/en-us/security/mobile-authenticator-app")
> - [iCloud Keychain](https://support.apple.com/en-gb/guide/iphone/ipha6173c19f/ios "https://support.apple.com/en-gb/guide/iphone/ipha6173c19f/ios")

- 연결한 후, 인증기 앱은 여섯 자리 코드를 제공합니다. 이 코드를 **QR 코드/설정 키** 아래에 입력하세요.
- 마지막으로, 현재 암호를 입력하세요.
- **설정 완료**를 선택하세요.
- 팝업 창은 확인 창으로 대체됩니다.

이제 2FA가 설정되었습니다.

> [!warning]- QR 코드/설정 키 백업
> **QR 코드** 또는 **설정 키**의 백업을 유지하기로 결정한 경우, 암호로 암호화된 시스템에 보관하는 것을 강력히 권장합니다.

## Disable 2FA

[https://obsidian.md/account](https://obsidian.md/account "https://obsidian.md/account")에 웹 브라우저를 통해 Obsidian 계정에 로그인하세요.

- **계정** 섹션에서 `2단계 인증` 항목을 찾아 **비활성화** 버튼을 선택하세요.
- Obsidian 암호를 입력하세요.
- 인증 앱에서 현재 여섯 자리 코드를 입력하세요.
- **2FA 비활성화**를 선택하세요.
- 계정 관리 화면으로 돌아가게 됩니다.

`2단계 인증` 섹션에 다시 **활성화** 버튼이 표시됩니다.

## FAQ

> [!question]- Q1. 2FA를 활성화하면 현재 Obsidian 기기에서 로그아웃되나요?
> 아니요. 
> 
> 2FA를 활성화하더라도 편의를 위해 모든 곳에서 로그아웃되지 않습니다. 필요한 경우 계정 페이지에서 수동으로 로그아웃한 다음 각 기기에서 다시 로그인할 수 있습니다.

> [!question]- Q2. 2FA를 활성화한 다음 비활성화했습니다. 다시 설정하려면 원래 QR 코드 또는 설정 키를 사용할 수 있나요?
> 아니요. 
> 
> 2FA 설정을 시작할 때마다 새 **QR 코드** 및 새 **설정 키**가 제공됩니다.

> [!question]- Q3.2FA를 활성화했지만 여러 번 로그아웃 및 로그인 시도 후에도 요청이 없습니다. 동작하고 있는 건가요?
> 브라우저 캐시를 사용하면 실제로는 저장된 데이터에 액세스할 때 페이지를 변경(예: 로그인 또는 로그아웃)하는 것처럼 나타날 수 있습니다. 개인 검색 창을 사용하여 로그인하여 2FA가 작동하는지 확인해보세요.
> 
> 이 문제가 계속 발생하면 [버그 보고서를 제출](https://forum.obsidian.md/c/bug-reports/7)해 주세요.

