---
permalink: import/textbundle
---

Obsidian에서는 공식 [[들여오기|Importer 플러그인]]을 사용하여 [Textbundle](https://textbundle.org/) 파일을 쉽게 들여올 수 있어요.

특정 앱에서 노트를 들여오는 경우, 먼저 [[들여오기|Importer 플러그인]]이 지원하는 앱 목록을 검토하여 마이그레이션하려는 데이터를 더 잘 보존할 수 있는 전용 변환기가 있는지 확인하는 것이 좋아요.

Textbundle 형식은 Markdown 텍스트와 모든 참조 이미지를 단일 파일로 묶어, 샌드박스 앱에서 데이터를 이동하는 더 원활한 방법을 제공해요. Textbundle 내보내기는 Agenda, Craft, Taio, Ulysses, Zettlr 등 [많은 앱](https://textbundle.org/)에서 지원돼요.

## Textbundle 파일을 Obsidian으로 들여오기

공식 Obsidian [[들여오기]] 플러그인이 필요하며, [여기에서 설치](obsidian://show-plugin?id=obsidian-importer)할 수 있어요.

1. **[[설정]]**을 열어요.
2. **커뮤니티 플러그인**으로 이동하여 [Importer를 설치](obsidian://show-plugin?id=obsidian-importer)해요.
3. Importer 플러그인을 활성화해요.
4. 명령어 팔레트 또는 리본 아이콘을 사용하여 **Importer** 플러그인을 열어요.
5. **파일 서식**에서 **Textbundle (.textbundle, .textpack)**을 선택해요.
6. Textbundle 또는 Textpack 파일의 위치를 선택해요. Zip 파일도 지원돼요.
7. **들여오기**를 클릭하고 들여오기가 완료될 때까지 기다려요.
8. 완료되었어요!

## 문제 해결

### 들여오기할 파일이 선택되지 않음

Textbundle 들여오기는 한 번에 하나의 Textbundle 파일만 들여올 수 있으며, Mac 기기에서만 가능해요. 대신, 들여오려는 모든 Textbundle 파일을 하나의 .zip 파일로 압축한 후 모든 기기에서 해당 파일을 들여올 수 있어요.
