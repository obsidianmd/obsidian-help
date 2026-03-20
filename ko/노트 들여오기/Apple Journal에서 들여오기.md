---
permalink: import/apple-journal
---
Obsidian은 [[Importer|Importer 플러그인]]을 사용하여 Apple Journal에서 일기 항목을 쉽게 마이그레이션할 수 있습니다.
이 과정에서 일기가 내구성 있는 Markdown 파일로 변환되어 Obsidian 및 다른 많은 앱에서 사용할 수 있습니다.

## Apple Journal에서 데이터 내보내기

### iPhone에서
[iPhone의 Journal에서 항목 인쇄 및 내보내기](https://support.apple.com/guide/iphone/print-and-export-entries-iph4cad323fe/ios#iph1edf66806) 안내를 따르세요:

1. iPhone에서 Journal 앱으로 이동합니다.
2. 저널을 선택하거나 모든 항목을 탭합니다.
3. 화면 상단의 더 보기 버튼을 탭합니다.
4. 내보내기를 탭한 후 내보내기를 선택합니다.
5. 위치를 선택한 후 선택됨 버튼을 탭합니다.

### Mac (Tahoe)에서
[Mac의 Journal에서 항목 인쇄 및 내보내기](https://support.apple.com/guide/journal/print-and-export-entries-dev883fc2329/mac#devc24a8f09a) 안내를 따르세요:

1. Mac에서 Journal 앱으로 이동합니다.
2. 파일 > 내보내기로 이동한 후 내보내기를 선택합니다.

## Apple Journal 데이터를 Obsidian으로 들여오기

공식 Obsidian [[Importer]] 플러그인이 필요하며, [여기에서 설치](obsidian://show-plugin?id=obsidian-importer)할 수 있습니다.

1. **[[설정]]**을 엽니다.
2. **커뮤니티 플러그인**으로 이동하여 [Importer를 설치](obsidian://show-plugin?id=obsidian-importer)합니다.
3. Importer 플러그인을 활성화합니다.
4. 명령어 팔레트 또는 리본 아이콘을 사용하여 **Importer** 플러그인을 엽니다.
5. **파일 서식**에서 **Apple Journal (HTML Export)**를 선택합니다.
6. **들여올 파일**에서 내보낸 데이터가 있는 폴더(보통 _AppleJournalEntries_)를 선택하거나 _Entries_에서 개별 파일을 선택합니다.
7. 다른 들여오기 옵션을 검토하고 편집합니다.
8. 들여오기를 선택하고 들여오기가 완료될 때까지 기다립니다.
9. 완료되었습니다!


## 지원되는 콘텐츠

이 플러그인은 _state-of-mind_, _contacts_, _location_, _workout-route_ 등의 Journal 메타데이터를 프런트매터로 들여올 수 있습니다.

> [!note] 참고
> 이 플러그인은 자료를 들여오지 않습니다. 사진, 동영상, 오디오 녹음 등의 첨부 파일은 무시됩니다.
