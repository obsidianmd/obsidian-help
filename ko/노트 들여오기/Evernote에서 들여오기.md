---
permalink: import/evernote
aliases:
  - Evernote에서 노트 가져오기
---

Obsidian을 사용하면 [[Importer|Importer 플러그인]]을 통해 Evernote에서 노트를 쉽게 마이그레이션할 수 있어요. Evernote 데이터를 Obsidian과 다양한 앱에서 사용할 수 있는 내구성 있는 Markdown 파일로 변환해 줘요.

## Evernote에서 데이터 내보내기

Obsidian은 Evernote의 내보내기 형식인 `.enex` 파일을 사용해요.

데이터 내보내기에 대한 Evernote의 안내는 [Evernote 웹사이트](https://help.evernote.com/hc/en-us/articles/209005557-Export-notes-and-notebooks-as-ENEX-or-HTML)에서 확인할 수 있어요. 이 방법을 사용하면 데스크톱 클라이언트에서 전체 노트북을 내보낼 수 있어요.

1. 노트북 화면으로 이동해요.
2. **더 많은 작업** (`•••`)을 클릭하고 **노트북 내보내기...** 를 선택해요.
3. 파일 형식으로 **ENEX**를 선택해요.
4. 내보낸 `.enex` 파일을 저장할 위치를 선택해요.

## Evernote 데이터를 Obsidian으로 들여오기

공식 Obsidian [[Importer]] 플러그인이 필요하며, [여기에서 설치](obsidian://show-plugin?id=obsidian-importer)할 수 있어요.

1. **[[설정]]** 을 열어요.
2. **커뮤니티 플러그인**으로 이동하고 [Importer를 설치](obsidian://show-plugin?id=obsidian-importer)해요.
3. Importer 플러그인을 활성화해요.
4. 명령어 팔레트나 리본 아이콘을 사용하여 **Importer** 플러그인을 열어요.
5. **파일 형식**에서 **Evernote (.enex)** 를 선택해요.
6. Evernote 백업 파일의 위치를 선택해요.
7. **들여오기(Import)** 를 클릭하고 완료될 때까지 기다려요.
8. 끝났어요!

## 고급 들여오기 옵션

### 태그 계층 구조 유지

Evernote 내보내기는 태그 계층 구조를 보존하지 않아요. 태그 계층 구조를 유지하려면 "/"로 구분하여 태그를 "평탄화"할 수 있어요. 예를 들어, 다음과 같은 태그 구조가 있다고 가정해요:

```
ParentTag
    ChildTag
```

Obsidian에서 태그 관계를 유지하려면:

1. ChildTag를 오른쪽 클릭해요.
2. "이름 바꾸기"를 선택해요.
3. `ParentTag/ChildTag`로 이름을 변경해요.

### 노트북 스택 처리

내보내기 과정이 단일 노트북으로 제한되어 있어 기본 내보내기 파일에는 노트북 스택 정보가 포함되지 않아요. 그러나 Importer는 enex 파일 이름의 패턴을 인식하여 노트북 스택을 폴더로 재현할 수 있어요.

`Stack1`이라는 스택에 `NotebookA`라는 노트북이 있다고 가정하면, enex 파일 이름을 `Stack1@@@NotebookA`로 변경하여 노트북 스택을 재현할 수 있어요.

이렇게 하면 변환된 노트가 Stack1/NotebookA 폴더 안에 생성돼요.

### 더 많은 옵션

Evernote에서 더 고급 들여오기 옵션을 사용하려면 [Yarle을 통한 들여오기](https://github.com/akosbalasko/yarle)를 시도해 볼 수도 있어요.
