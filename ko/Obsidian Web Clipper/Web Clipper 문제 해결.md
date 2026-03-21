---
permalink: web-clipper/troubleshoot
---

[[Obsidian Web Clipper 소개|Web Clipper]]에 문제가 발생하면 [공식 Discord 채널](https://discord.com/channels/686053708261228577/1285652864089198672)을 통해 도움을 받을 수 있어요. [GitHub 저장소](https://github.com/obsidianmd/obsidian-clipper)에서 버그를 보고할 수도 있어요.

## 일반

### 일부 콘텐츠가 누락됨

기본적으로 Web Clipper는 페이지에서 콘텐츠를 지능적으로 캡처하려고 해요. 그러나 모든 웹사이트에서 성공적으로 작동하지 않을 수 있어요.

Web Clipper는 [Defuddle](https://github.com/kepano/defuddle)을 사용하여 페이지의 주요 콘텐츠만 캡처해요. 이 과정에서 헤더, 푸터 및 기타 요소가 제외되지만, 때때로 지나치게 보수적으로 작동하여 유지하고 싶은 콘텐츠를 제거할 수 있어요. Defuddle에 [버그를 보고](https://github.com/kepano/defuddle)할 수 있어요.

Web Clipper에서 Defuddle을 우회하려면 다음 방법을 사용하세요:

- 텍스트를 선택하거나, `Cmd/Ctrl+A`를 사용하여 전체 텍스트를 선택해요.
- [[웹 페이지 하이라이트|콘텐츠를 하이라이트]]하여 캡처할 내용을 정확히 선택해요.
- 해당 사이트에 맞는 [[Obsidian Web Clipper/템플릿|커스텀 템플릿]]을 사용해요.

### Obsidian에 콘텐츠가 표시되지 않음

**Obsidian에 추가하기**를 클릭했을 때 Obsidian에 콘텐츠가 표시되지 않는 경우:

- Obsidian [[도움말 및 지원#콘솔 로그 캡처|개발자 콘솔]]에서 오류를 확인하세요.
- Web Clipper 설정의 보관함 이름이 Obsidian의 *보관함 이름*과 정확히 일치하는지 확인하세요. *보관함 경로가 아닌* 보관함 이름이어야 해요.
- 폴더 이름이 올바른 형식인지 확인하세요.

## Linux

#### Obsidian이 열리지 않음

- [[Obsidian URI]] 프로토콜이 [[Obsidian URI#Obsidian URI 등록|등록되어 있는지]] 확인하세요.
- Firefox를 사용하는 경우 [브라우저 설정에서 등록](https://kb.mozillazine.org/Register_protocol)해야 할 수 있어요.

#### Obsidian이 열리지만 파일 이름만 저장됨

Obsidian이 클립보드에 접근할 수 없는 것일 수 있어요. 브라우저에서 Obsidian으로 데이터를 전달하려면 클립보드 접근이 필요해요. 시스템 설정에 따라 앱의 샌드박스 방식과 클립보드 권한이 영향을 받을 수 있어요.

Wayland를 사용하는 경우, 앱에 포커스가 없을 때도 Obsidian이 클립보드를 읽을 수 있는 권한이 있는지 확인하세요. 이 설정은 타일링 윈도우 매니저(예: Hyprland 또는 Sway)에 있을 수 있어요.

Hyprland를 사용하는 경우:

```ini
# ~/.config/hypr/hyprland.conf
misc {
    focus_on_activate = true
}
```

Sway를 사용하는 경우:

```ini
# ~/.config/sway/config
for_window [class="obsidian"] focus_on_window_activation focus
```

- Flatpak을 사용하는 경우 [공식 지원 Obsidian 버전](https://obsidian.md/ko/download)을 사용해 보세요.
- KDE를 사용하는 경우 **시스템 설정** → **창 관리** → **창 규칙**으로 이동하여 Obsidian이 포커스를 가져올 수 있도록 허용하세요. [[web-clipper-kde.png|스크린샷 보기]].
- 대안으로, **Web Clipper 설정** → **일반**에서 **레거시 모드**로 전환해 보세요. 이렇게 하면 클립보드를 우회하고 URI를 통해 콘텐츠를 직접 저장해요. 단, 브라우저와 Linux 배포판에 따라 클리핑할 수 있는 문자 수가 제한될 수 있어요.

## iOS 및 iPadOS

Safari에서 Web Clipper 확장 프로그램을 활성화하려면:

1. Safari에서 브라우저 URL 바의 가장 왼쪽 버튼을 탭해요. 이 버튼은 아래에 줄이 있는 사각형 모양이에요.
2. **확장 프로그램 관리**를 탭해요.
3. 확장 프로그램 목록에서 **Obsidian Web Clipper**를 활성화해요.
4. 메뉴를 닫아요.
5. 확장 프로그램을 사용하려면 URL 바에서 **퍼즐 조각 아이콘을 탭**해요.

Web Clipper가 모든 웹사이트에서 실행되도록 허용하려면:

1. iOS **[[설정]]** → **앱** → **Safari** → **확장 프로그램**으로 이동해요.
2. **권한**에서 모든 웹사이트에서 실행을 허용해요.

Obsidian이 항상 Web Clipper 콘텐츠를 수신할 수 있도록 허용하려면:

1. iOS **[[설정]]** → **앱** → **Obsidian**으로 이동해요.
2. **다른 앱에서 붙여넣기**를 **허용**으로 설정해요.
