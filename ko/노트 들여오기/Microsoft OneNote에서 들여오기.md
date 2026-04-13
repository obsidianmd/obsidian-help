---
permalink: import/onenote
aliases:
  - Microsoft OneNote에서 노트 가져오기
---

Obsidian을 사용하면 Microsoft OneNote에서 노트를 쉽게 마이그레이션할 수 있어요. 이를 위해서 [[들여오기|Importer 플러그인]]을 사용해요.

## OneNote 데이터를 Obsidian으로 들여오기

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

![[OneNote-Importer-Select-Sections.png]]

10. **가져오기**를 클릭하고 가져오기가 완료될 때까지 기다려요.
11. 끝났어요!

## 문제 해결

### 섹션 또는 노트북이 표시되지 않음

가져오려는 노트북이 OneDrive에 동기화되어 있고 OneNote Web에서 볼 수 있어야 해요. 이러한 노트북은 사용자 본인의 것이어야 해요(다른 사용자가 작성한 공유 노트북은 지원되지 않아요).

특정 섹션이 누락된 경우 해당 섹션이 잠겨 있지 않은지 확인하세요. 잠긴 섹션은 잠금을 해제하지 않고는 표시되지 않아요.

### 가져온 노트가 비어 있거나 내용이 누락됨

이 문제는 드물게 사용하는 노트북에서 발생할 수 있어요. 문제를 해결하려면 다음 단계를 따르세요:

1. 브라우저에서 [OneNote Web](https://onenote.com/notebooks)를 열어요.
2. 내용이 누락된 노트북 위로 마우스 오른쪽 버튼을 클릭해요.
3. 메뉴에서 **노트북 내보내기**를 선택해요.
4. 방금 다운로드한 파일을 폴더로 **압축 해제**해요.
5. OneNote 노트북을 [여기](https://www.onenote.com/notebooks/exportimport?toImport=true)에 업로드해요.
6. **Obsidian Importer**를 열고 다시 가져오기를 시도하세요.

이러한 팁을 따르고도 문제가 해결되지 않으면 Microsoft 서버에 일시적인 문제가 있을 수 있어요. 그런 경우 몇 분 동안 기다리고 다시 시도하세요. 문제가 지속되면 [Obsidian Importer GitHub 리포지토리](https://github.com/obsidianmd/obsidian-importer/issues)에서 이슈를 열어주세요.

## 개인정보 보호

Obsidian Importer 플러그인은 Microsoft 계정과 연동하여 OneNote 노트북을 가져오기 위해 [OAuth](https://learn.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-auth-code-flow)를 사용해요. 이것은 귀하의 컴퓨터에서만 사용되며 저장되지 않는 귀하의 계정에 대한 단기 액세스 토큰을 부여해요. 가져오기가 완료되면 액세스 토큰을 [Microsoft 앱 및 서비스 페이지](https://account.live.com/consent/Manage)에서 선택적으로 취소할 수 있어요.
