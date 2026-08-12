---
permalink: import/onenote
aliases:
  - Microsoft OneNote에서 노트 가져오기
---
Obsidian을 사용하면 Microsoft OneNote에서 노트를 쉽게 마이그레이션할 수 있어요. 이를 위해서 [[들여오기|Importer 플러그인]]을 사용해요.

Obsidian은 OneNote 데이터를 가져오는 두 가지 방법을 제공해요:

1. **Microsoft 계정**은 Microsoft 계정에 로그인하여 OneDrive에 동기화된 노트북을 가져와요. 인터넷 연결이 필요해요.
2. **파일 가져오기**는 OneNote의 내보내기 파일(`.onepkg` 및 `.one`)을 사용해요. 계정이나 인터넷 연결이 필요 없으며, 동기화된 적 없는 노트북에도 사용할 수 있어요.

## Microsoft 계정으로 가져오기

> [!Warning]
> 본인 계정이 소유한 노트북만 가져올 수 있어요. 다른 사람이 공유한 노트북은 지원되지 않으며, 직장 또는 학교 계정은 조직의 액세스 승인이 필요할 수 있어요.

공식 Obsidian [[들여오기]] 플러그인이 필요하며, 이를 [여기에서 설치](obsidian://show-plugin?id=obsidian-importer)할 수 있어요.

1. **설정(Settings)** 을 열어요.
2. **커뮤니티 플러그인**으로 이동하고 [Importer를 설치](obsidian://show-plugin?id=obsidian-importer)해요.
3. Importer 플러그인을 활성화해요.
4. 명령어 팔레트나 리본 아이콘을 사용하여 **Importer** 플러그인을 열어요.
5. **파일 형식**에서 **Microsoft OneNote**를 선택해요.
6. **로그인**을 클릭하여 Microsoft 계정에 대한 자격 증명을 입력할 수 있는 Microsoft 로그인 페이지가 있는 웹 브라우저를 열어요. Microsoft 로그인 프로세스에 대한 자세한 정보는 아래에서 확인할 수 있어요.
7. Obsidian이 OneNote 노트북을 볼 수 있는 권한을 부여하기 위해 **수락**을 클릭해요.
8. 브라우저가 Obsidian 앱으로 리디렉션될 수 있도록 **링크 열기**를 클릭해요.
9. Obsidian 앱에서 Importer 대화 상자에 로그인한 상태로 표시되며 OneNote 노트북 및 섹션을 나열해요. 가져오려는 섹션을 확인해요.
10. **가져오기**를 클릭하고 가져오기가 완료될 때까지 기다려요.
11. 끝났어요!

노트북이 직장 또는 학교 계정에 속한 경우, 로그인 후 OneNote가 플러그인의 액세스를 거부할 수 있어요. 이 경우 **로그아웃** 옆에 **직장 또는 학교 액세스 사용** 버튼이 나타나요. 해당 계정에 필요한 더 넓은 권한으로 다시 로그인하려면 이 버튼을 사용하세요. 조직에서 해당 권한을 승인해야 작동할 수 있어요.

### 문제 해결

#### 섹션 또는 노트북이 표시되지 않음

가져오려는 노트북이 OneDrive에 동기화되어 있고 OneNote Web에서 볼 수 있어야 해요. 이러한 노트북은 사용자 본인의 것이어야 해요(다른 사용자가 작성한 공유 노트북은 지원되지 않아요).

특정 섹션이 누락된 경우 해당 섹션이 잠겨 있지 않은지 확인하세요. 잠긴 섹션은 잠금을 해제하지 않고는 표시되지 않아요.

직장 또는 학교 노트북인 경우, 위의 **직장 또는 학교 액세스 사용**에 대한 안내를 참고하세요.

#### 가져온 노트가 비어 있거나 내용이 누락됨

이 문제는 드물게 사용하는 노트북에서 발생할 수 있어요. 문제를 해결하려면 다음 단계를 따르세요:

1. 브라우저에서 [OneNote Web](https://onenote.com/notebooks)를 열어요.
2. 내용이 누락된 노트북 위로 마우스 오른쪽 버튼을 클릭해요.
3. 메뉴에서 **노트북 내보내기**를 선택해요.
4. 방금 다운로드한 파일을 폴더로 **압축 해제**해요.
5. OneNote 노트북을 [여기](https://www.onenote.com/notebooks/exportimport?toImport=true)에 업로드해요.
6. **Obsidian Importer**를 열고 다시 가져오기를 시도하세요.

이러한 팁을 따르고도 문제가 해결되지 않으면 Microsoft 서버에 일시적인 문제가 있을 수 있어요. 그런 경우 몇 분 동안 기다리고 다시 시도하세요. 문제가 지속되면 [Obsidian Importer GitHub 리포지토리](https://github.com/obsidianmd/obsidian-importer/issues)에서 이슈를 열어주세요.

## OneNote 파일 가져오기 (.one, .onepkg)

파일 가져오기는 OneNote 데이터를 가져오는 대안적인 방법이에요. OneNote가 직접 작성하는 내보내기 파일을 읽기 때문에 Microsoft 계정이나 인터넷 연결이 필요 없어요. 컴퓨터에만 저장된 노트북, 계정으로 접근할 수 없는 노트북, 또는 로그인하지 않으려는 경우에 사용하세요.

### OneNote에서 노트북 내보내기

각 노트북을 **OneNote Package**(`.onepkg`)로 내보내는 것을 권장해요. 하나의 패키지에 노트북의 모든 섹션이 포함되므로 한 번에 노트북을 내보내고 가져올 수 있으며, Importer가 선택할 수 있는 섹션 목록을 표시해줘요.

내보내기는 Microsoft 365에 포함된 데스크톱 앱인 **Windows용 OneNote**에서만 가능해요. Mac용 OneNote 앱과 이전 버전인 Windows 10용 OneNote 앱에서는 이러한 형식으로 내보낼 수 없어요.

1. Windows용 OneNote에서 내보내려는 노트북을 열어요.
2. **파일 → 내보내기**로 이동해요.
3. **현재 항목 내보내기**에서 **노트북**을 선택해요.
4. **형식 선택**에서 **OneNote Package (\*.onepkg)**를 선택해요.
5. **내보내기**를 클릭하고 파일을 저장할 위치를 선택해요.
6. 가져오려는 각 노트북에 대해 반복해요.

단일 섹션만 내보내려면 3단계에서 **섹션**을, 4단계에서 **OneNote 2010-2016 Section (\*.one)**을 선택하세요.

내보내기 없이 OneNote가 디스크에 이미 보관하고 있는 섹션 파일을 직접 가져올 수도 있어요:

- 컴퓨터에 저장된 노트북은 `Documents\OneNote Notebooks`에 있으며, 섹션당 하나의 `.one` 파일이에요.
- 동기화된 노트북의 백업은 `%LOCALAPPDATA%\Microsoft\OneNote\16.0\Backup`에 있어요.

### OneNote 파일 가져오기

공식 Obsidian [[들여오기]] 플러그인이 필요하며, 이를 [여기에서 설치](obsidian://show-plugin?id=obsidian-importer)할 수 있어요.

1. **설정(Settings)** 을 열어요.
2. **커뮤니티 플러그인**으로 이동하고 [Importer를 설치](obsidian://show-plugin?id=obsidian-importer)해요.
3. Importer 플러그인을 활성화해요.
4. 명령어 팔레트나 리본 아이콘을 사용하여 **Importer** 플러그인을 열어요.
5. **파일 형식**에서 **Microsoft OneNote (.one, .onepkg)**를 선택해요.
6. 가져오려는 `.onepkg` 및 `.one` 파일을 선택해요. 한 번에 여러 파일을 선택할 수 있으므로 모든 노트북을 함께 가져올 수 있어요.
7. **가져올 섹션**에 해당 파일에서 찾은 섹션이 모두 체크된 상태로 나열돼요. 원하지 않는 항목의 체크를 해제하세요.
8. 선택적으로 가져오기의 **출력 폴더**, 첨부 파일 저장 위치, 같은 노트북을 다시 가져올 때 **기존 노트**를 어떻게 처리할지 선택해요.
9. **가져오기**를 클릭하고 가져오기가 완료될 때까지 기다려요.
10. 끝났어요!

각 섹션은 폴더가 되고, 그 안의 각 페이지는 노트가 돼요. 하위 페이지는 상위 페이지 이름을 딴 폴더에 저장되어 OneNote에서 보여주던 구조를 유지하고, 같은 이름의 하위 페이지가 충돌하는 것을 방지해요. 노트북의 휴지통에 있는 페이지는 가져오지 않아요.

### 제한 사항

- 비밀번호로 보호된 섹션은 암호화되어 저장되며, 해당 페이지는 건너뛰어요. OneNote에서 비밀번호를 제거하고 다시 내보내면 가져올 수 있어요.
- 권한 보호된 파일은 정책이 허용하는 계정만 열 수 있으며, Importer에서 읽을 수 없어요.

## 개인정보 보호

Microsoft 계정을 사용하여 가져오기를 선택한 경우, Obsidian Importer 플러그인은 Microsoft 계정과 연동하여 OneNote 노트북을 가져오기 위해 [OAuth](https://learn.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-auth-code-flow)를 사용해요. 이것은 귀하의 컴퓨터에서만 사용되며 저장되지 않는 귀하의 계정에 대한 단기 액세스 토큰을 부여해요. 가져오기가 완료되면 액세스 토큰을 [Microsoft 앱 및 서비스 페이지](https://account.live.com/consent/Manage)에서 선택적으로 취소할 수 있어요.

파일 가져오기는 Microsoft에 연결하지 않아요. 선택한 파일은 네트워크 연결 없이 컴퓨터에서 직접 읽어요.
