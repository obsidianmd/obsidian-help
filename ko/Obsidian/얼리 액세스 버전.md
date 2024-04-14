아래에 옵션을 사용하여 향후 릴리스에 대한 조기 액세스를 얻으려면 'Insider 빌드'를 활성화하세요. 노트: 'Insider 빌드'는 [[Catalyst 라이선스|Catalyst 라이선스]]를 가진 사용자에게만 제공됩니다.

> [!warning]
> 'Insider 빌드'는 개발용 빌드로, 불안정할 수 있습니다. 더 안정적인 경험을 원한다면 'Insider 빌드'를 활성화하지 마세요.

## Enable Insider builds for desktop

새로운 'Insider 빌드'를 가능한 한 빨리 받으려면 다음 단계를 따르세요:

1. **설정(Settings)**을 엽니다.
2. 사이드바에서 **Obsidain 정보(About)**을 선택합니다.
3. **App** 아래에서 **Insider 빌드 받기**를 활성화합니다.

## Install Insider builds on mobile devices

모바일 기기에서 'Insider 빌드'를 설치하는 방법은 다음 단계를 따르세요:

1. [Obsidian Discord 서버](https://discord.gg/veuWUTm)에 가입하세요.
2. insider 채널에 접근하기 위해서 [[Catalyst 라이선스#Get your Discord badge|디스코드 뱃지를 가져오세요]].
3. Discord를 엽니다.
4. `#insider-mobile` 채널에서 **고정된 메시지(Pinned Messages)**를 엽니다.
    - 데스크톱에서는 오른쪽 상단에 있는 핀 아이콘을 선택하세요.
    - 모바일에서는 왼쪽으로 스와이프하고 **Pins**를 선택하세요.
5. **고정된 메시지(Pinned Messages)**에서 해당 기기용 설치 링크를 선택하세요:
    - iOS를 사용하는 경우 iPhone 또는 iPad에서 TestFlight 링크를 엽니다.
    - Android를 사용하는 경우 APK 파일을 다운로드하고 설치하세요.

## Report issues and other feedback

'Insider 빌드'에서 문제를 발견하면 Obsidian 팀에게 보고를 고려해보세요.

문제를 신고하기 전에 [알려진 문제 및 계획된 개선 목록](https://forum.obsidian.md/t/list-of-known-issues-and-planned-improvements/14286)을 확인하여 다른 사람이 이미 해당 문제를 신고했는지 확인하세요.

문제를 신고하려면 다음 채널 중 하나를 사용하세요:

- Discord에서 **#insider-build** 채널에서 문제를 신고하세요.
- 포럼에서 [버그 보고서](https://forum.obsidian.md/c/bug-reports/7) 아래에서 새 주제를 만드세요.

문제를 신고할 때 빌드 버전과 해당 기기의 운영 체제를 포함하세요. 빌드 버전은 **설정(Settings) → Obsidian 정보(About) → 앱(App) → 현재 버전(Current version)** 아래에서 찾을 수 있습니다.

## Change back to public builds on desktop

데스크톱에서 공개 버전(Insider가 아닌) 빌드로 변경하려면 다음 단계를 따르세요:

1. 'Insider 빌드'를 비활성화하세요.
    1. **설정(Settings)**을 엽니다.
    2. 사이드바에서 **Obsidian 정보(About)**을 선택합니다.
    3. **앱(App)** 아래에서 **Insider 빌드 받기**를 비활성화하세요.
2. Obsidian을 닫으세요.
3. Obsidian 버전에 해당하는 `obsidian-VERSION.asar` 파일을 삭제하세요 (여기서 `VERSION`은 Obsidian 버전입니다).
    - Windows: `%APPDATA%\obsidian\obsidian-VERSION.asar`
    - Mac: `~/Library/Application Support/obsidian/obsidian-VERSION.asar`
    - Linux: `~/.config/obsidian/obsidian-VERSION.asar`
4. Obsidian을 다시 시작하세요.
