---
permalink: import/apple-notes
aliases:
  - Apple Notes에서 노트 가져오기
---
Obsidian을 사용하면 [[Importer|Importer 플러그인]]을 통해 Apple Notes에서 노트를 쉽게 마이그레이션할 수 있습니다. Apple Notes 데이터를 Obsidian과 다양한 앱에서 사용할 수 있는 내구성 있는 Markdown 파일로 변환해 줍니다.

현재 Importer는 macOS의 Apple Notes에서만 마이그레이션을 지원합니다. iOS는 아직 지원되지 않습니다.

## Apple Notes 데이터를 Obsidian으로 들여오기

공식 Obsidian [[Importer]] 플러그인이 필요하며, [여기에서 설치](obsidian://show-plugin?id=obsidian-importer)할 수 있습니다.

1. **[[설정]]** 을 엽니다.
2. **커뮤니티 플러그인**으로 이동하고 [Importer를 설치](obsidian://show-plugin?id=obsidian-importer)합니다.
3. Importer 플러그인을 활성화합니다.
4. 명령어 팔레트나 리본 아이콘을 사용하여 **Importer** 플러그인을 엽니다.
5. **파일 형식**에서 **Apple Notes**를 선택합니다.
6. **들여오기(Import)** 를 클릭합니다.
7. `Obsidian이 Apple Notes 데이터를 읽을 수 있도록 "group.com.apple.notes" 폴더를 선택하세요`라는 팝업이 나타나면 **열기(Open)** 를 클릭합니다.
8. 들여오기가 완료될 때까지 기다립니다.
9. 끝났습니다!

## 지원되는 콘텐츠

Obsidian Importer 플러그인은 Apple Notes의 거의 모든 콘텐츠 유형을 지원합니다. 표, 이미지, 그림, 스캔, PDF, iOS 17에서 도입된 링크가 포함됩니다.

> [!Warning]
> 비밀번호로 보호된 노트는 Apple이 암호화하므로, 들여오기 전에 잠금을 해제해야 합니다. 잠긴 노트는 건너뜁니다.

### 스캔

Apple은 스캔이 생성된 방식에 따라 다양한 형식으로 저장합니다. 원본 데이터를 보존하기 위해 내보내기 방식이 다를 수 있습니다.

* 이전 버전의 macOS 또는 iOS에서 생성되거나 열람한 스캔은 잘리지 않은 이미지 시리즈로 내보내집니다.
* 최신 버전의 macOS 또는 iOS에서 생성되거나 열람한 스캔은 일반적으로 잘린 이미지로 내보내집니다.
* iOS 17에서 도입된 기능으로 편집된 스캔은 일반적으로 PDF로 내보내집니다.

## 대체 내보내기 방법

Apple은 노트를 내보내는 기본 옵션을 제공하지 않습니다. 그러나 Chintan Ghate의 [Exporter](https://apps.apple.com/us/app/exporter/id1099120373)와 같은 타사 도구가 있습니다. 대부분의 도구는 Apple Notes에서 내보낼 수 있는 데이터에 제한이 있으며 호환성 있는 출력 데이터를 제공하지 못할 수 있습니다. 이러한 도구는 Apple Notes가 주로 텍스트로만 구성되어 있고 첨부 파일이나 그림, 스캔 등 특수 기능이 적을 때 가장 잘 작동합니다.

사용한 도구에 따라 내보내기 형식이 Markdown 또는 HTML일 수 있습니다. 내보낸 파일 형식에 따라 아래 안내를 따르세요:

- [[HTML 파일 들여오기]]
- [[Markdown 파일 들여오기]]
