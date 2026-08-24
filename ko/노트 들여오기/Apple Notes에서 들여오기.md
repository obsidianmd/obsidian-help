---
permalink: import/apple-notes
aliases:
  - Apple Notes에서 노트 가져오기
cssclasses:
  - soft-embed
---
Obsidian을 사용하면 [[들여오기|Importer 플러그인]]을 통해 Apple Notes에서 노트를 쉽게 마이그레이션할 수 있어요. Apple Notes 데이터를 Obsidian과 다양한 앱에서 사용할 수 있는 내구성 있는 Markdown 파일로 변환해 줘요.

현재 Importer는 macOS의 Apple Notes에서만 마이그레이션을 지원해요. iOS는 아직 지원되지 않아요.

## Apple Notes 데이터를 Obsidian으로 들여오기

공식 Obsidian [[들여오기]] 플러그인이 필요하며, [여기에서 설치](obsidian://show-plugin?id=obsidian-importer)할 수 있어요.

1. **[[설정]]** 을 열어요.
2. **커뮤니티 플러그인**으로 이동하고 [Importer를 설치](obsidian://show-plugin?id=obsidian-importer)해요.
3. Importer 플러그인을 활성화해요.
4. 명령어 팔레트나 리본 아이콘을 사용하여 **Importer** 플러그인을 열어요.
5. **파일 형식**에서 **Apple Notes**를 선택해요.
6. **들여오기(Import)** 를 선택해요.
7. `Obsidian이 Apple Notes 데이터를 읽을 수 있도록 "group.com.apple.notes" 폴더를 선택하세요`라는 팝업에서 **열기(Open)** 를 선택해요.
8. 생성된 템플릿을 검토하고 노트의 미리보기 예시를 확인해요.
9. **들여오기(Import)** 를 선택하고 들여오기가 완료될 때까지 기다려요.

## 들여온 노트 사용자 지정

들여오기가 시작되기 전에 Importer는 Apple Notes 선택 항목에서 생성된 미리보기를 보여줘요. 생성된 템플릿, 속성, 노트 이름을 편집하거나 보관함에서 Markdown 템플릿을 선택할 수 있어요. [[Importer 템플릿]]을 참조하세요.

## 지원되는 콘텐츠

Obsidian Importer 플러그인은 Apple Notes의 거의 모든 콘텐츠 유형을 지원해요. 표, 이미지, 그림, 스캔, PDF, iOS 17에서 도입된 링크가 포함돼요.

> [!Warning]
> 비밀번호로 보호된 노트는 Apple이 암호화하므로, 들여오기 전에 잠금을 해제해야 해요. 잠긴 노트는 건너뛰어요.

### 스캔

Apple은 스캔이 생성된 방식에 따라 다양한 형식으로 저장해요. 원본 데이터를 보존하기 위해 내보내기 방식이 다를 수 있어요.

* 이전 버전의 macOS 또는 iOS에서 생성되거나 열람한 스캔은 잘리지 않은 이미지 시리즈로 내보내져요.
* 최신 버전의 macOS 또는 iOS에서 생성되거나 열람한 스캔은 일반적으로 잘린 이미지로 내보내져요.
* iOS 17에서 도입된 기능으로 편집된 스캔은 일반적으로 PDF로 내보내져요.

## 템플릿

[[Importer 템플릿|Importer 템플릿]]을 사용하여 Apple Notes 데이터가 들여오기되는 방식을 완전히 구성할 수 있어요.

![[Importer 템플릿#Variables]]

추가로 Apple Notes는 다음 변수를 제공해요.

| 변수             | 설명                        |
| ---------------- | --------------------------- |
| `{{isPinned}}`   | 노트가 고정되어 있는지 여부. |
