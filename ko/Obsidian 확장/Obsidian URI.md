---
permalink: uri
---
Obsidian URI는 Obsidian이 지원하는 사용자 지정 URI 프로토콜로, 노트 열기 또는 노트 생성 등 다양한 작업을 트리거할 수 있어요. Obsidian URI를 사용하면 자동화 및 앱 간 워크플로우를 구현할 수 있어요.

## URI 형식

Obsidian URI는 다음과 같은 형식을 사용해요:

```
obsidian://action?param1=value&param2=value
```

`action` 매개변수는 수행하려는 작업이에요. 사용 가능한 작업은 다음과 같아요:

- `open` 노트를 열어요.
- `new` 새 노트를 생성하거나 기존 노트에 내용을 추가해요.
- `daily` 일일 노트를 생성하거나 열어요.
- `unique` 새 고유 노트를 생성해요.
- `search` 검색을 열어요.
- `choose-vault` 보관함 관리자를 열어요.

> [!warning] 인코딩
> 값이 올바르게 URI 인코딩되었는지 확인하세요. 예를 들어, 슬래시 문자 `/`는 `%2F`로, 공백 문자는 `%20`으로 인코딩해야 해요.
> 
 이는 잘못 인코딩된 "예약" 문자가 URI 해석을 방해할 수 있기 때문에 특히 중요해요. [자세한 내용은 여기를 참조하세요](https://en.wikipedia.org/wiki/Percent-encoding).

## 노트 열기

`open` 작업은 Obsidian 보관함을 열거나, 해당 보관함 내의 파일을 열어요.

### 예시

- `obsidian://open?vault=my%20vault`
  `my vault` 보관함을 열어요. 보관함이 이미 열려 있으면 해당 창으로 포커스해요.
- `obsidian://open?vault=ef6ca3e3b524d22f`
  ID가 `ef6ca3e3b524d22f`인 보관함을 열어요.
- `obsidian://open?vault=my%20vault&file=my%20note`
  `my vault` 보관함에서 `my note.md` 노트를 열어요(파일이 존재하는 경우).
- `obsidian://open?path=%2Fhome%2Fuser%2Fmy%20vault%2Fpath%2Fto%2Fmy%20note`
  `/home/user/my vault/path/to/my note` 경로를 포함하는 보관함을 찾아요. 그런 다음 나머지 경로가 `file` 매개변수로 전달돼요. 예를 들어, `/home/user/my vault`에 보관함이 있으면 `file` 매개변수가 `path/to/my note`로 설정된 것과 동일해요.


> [!tip] 제목 또는 블록 열기
> 올바른 URI 인코딩을 사용하면 노트 내의 제목이나 블록으로 이동할 수 있어요. `Note%23Heading`은 "Heading"이라는 제목으로 이동하고, `Note%23%5EBlock`은 "Block"이라는 블록으로 이동해요.

### 매개변수

- `vault`는 보관함 이름 또는 보관함 ID[^1]예요.
- `file`은 파일 이름이거나, 보관함 루트에서 지정된 파일까지의 경로예요. 파일 확장자가 `md`인 경우 확장자를 생략할 수 있어요.
- `path`는 파일의 절대 파일 시스템 경로예요.
  - 이 매개변수를 사용하면 `vault`와 `file` 모두 재정의돼요.
  - 앱이 지정된 파일 경로를 포함하는 가장 구체적인 보관함을 검색해요.
  - 그런 다음 나머지 경로가 `file` 매개변수를 대체해요.
- `prepend`는 파일 상단에 내용을 추가하고 속성 병합을 시도해요.
- `append`는 파일 하단에 내용을 추가하고 속성 병합을 시도해요.
- `paneType` (선택사항)은 노트가 UI에서 열리는 위치를 결정해요.
  - 지정하지 않으면 마지막 활성 탭이 대체돼요.
  - `paneType=tab` 새 탭에서 열어요.
  - `paneType=split` 새 탭 그룹에서 열어요.
  - `paneType=window` 팝아웃 창에서 열어요(데스크톱 전용).

## 노트 생성

`new` 작업은 보관함에 새 노트를 생성하며, 선택적으로 내용을 포함할 수 있어요.

### 예시

- `obsidian://new?vault=my%20vault&name=my%20note`
  `my vault` 보관함을 열고 `my note`라는 새 노트를 생성해요.
- `obsidian://new?vault=my%20vault&file=path%2Fto%2Fmy%20note`
  `my vault` 보관함을 열고 `path/to/my note`에 새 노트를 생성해요.

### 매개변수

- `vault`는 보관함 이름 또는 보관함 ID[^1]예요. `open` 작업과 동일해요.
- `name`은 생성할 파일 이름이에요. 이를 지정하면 "새 노트를 생성하는 위치" 환경설정에 따라 파일 위치가 선택돼요.
- `file`은 이름을 포함한 보관함 절대 경로예요. 지정하면 `name`을 재정의해요.
- `path`는 전역 절대 경로예요. `open` 작업의 `path` 옵션과 유사하게 작동하며, `vault`와 `file` 모두 재정의해요.
- `paneType` (선택사항)은 노트가 UI에서 열리는 위치를 결정해요. `open` 작업과 동일해요.
- `content` (선택사항)은 노트의 내용이에요.
- `clipboard` (선택사항)은 `content`를 지정하는 대신 클립보드의 내용을 사용해요.
- `silent` (선택사항)은 새 노트를 열지 않으려면 이 매개변수를 포함해요.
- `append` (선택사항)은 기존 파일이 있으면 해당 파일에 내용을 추가해요.
- `overwrite` (선택사항)은 기존 파일이 있으면 덮어써요. 단, `append`가 설정되지 않은 경우에만 적용돼요.
- `x-success` (선택사항)은 [[#x-callback-url 매개변수 사용]]을 참조하세요.

## 일일 노트 생성 또는 열기

`daily` 작업은 일일 노트를 생성하거나 열어요. [[일일 노트]] 플러그인이 활성화되어 있어야 해요.

### 예시

- `obsidian://daily?vault=my%20vault`
  `my vault` 보관함을 열고 일일 노트를 생성하거나 열어요.

### 매개변수

`daily` 작업은 `new` 작업과 동일한 매개변수를 받아요.

## 고유 노트

`unique` 작업은 보관함에 새 고유 노트를 생성해요. [[고유 노트 생성]] 플러그인이 활성화되어 있어야 해요.

### 예시

- `obsidian://unique?vault=my%20vault`
  `my vault` 보관함을 열고 새 고유 노트를 생성해요.
- - `obsidian://unique?vault=my%20vault&content=Hello%20World`
  `my vault` 보관함을 열고 `Hello World` 내용으로 새 고유 노트를 생성해요.

### 매개변수

- `vault`는 보관함 이름 또는 보관함 ID[^1]예요. `open` 작업과 동일해요.
- `paneType` (선택사항)은 노트가 UI에서 열리는 위치를 결정해요. `open` 작업과 동일해요.
- `content` (선택사항)은 노트의 내용이에요.
- `clipboard` (선택사항)은 `content`를 지정하는 대신 클립보드의 내용을 사용해요.
- `x-success` (선택사항)은 [[#x-callback-url 매개변수 사용]]을 참조하세요.

## 검색 열기

`search` 작업은 지정된 보관함에서 [[검색]]을 열고, 선택적으로 검색어를 실행해요.

### 예시

- `obsidian://search?vault=my%20vault`
  `my vault` 보관함을 열고 [[검색]]을 열어요.
- `obsidian://search?vault=my%20vault&query=Obsidian`
  `my vault` 보관함을 열고 [[검색]]을 열어 `Obsidian`을 검색해요.

### 매개변수

- `vault`는 보관함 이름 또는 보관함 ID[^1]예요. `open` 작업과 동일해요.
- `query` (선택사항)은 실행할 검색어예요.

## 보관함 관리자 열기

`choose-vault` 작업은 [[보관함 관리|보관함 관리자]]를 열어요.

### 예시

- `obsidian://choose-vault`

## Hook과 통합

이 Obsidian URI 작업은 [Hook](https://hookproductivity.com/)과 함께 사용하기 위한 것이에요.

### 예시

`obsidian://hook-get-address`

### 매개변수

- `vault` (선택사항)은 보관함 이름 또는 보관함 ID[^1]예요. 제공하지 않으면 현재 또는 마지막으로 포커스된 보관함이 사용돼요.
- `x-success` (선택사항)은 [[#x-callback-url 매개변수 사용]]을 참조하세요.
- `x-error` (선택사항)은 [[#x-callback-url 매개변수 사용]]을 참조하세요.

`x-success`가 정의된 경우, 이 API는 이를 x-callback-url로 사용해요. 그렇지 않으면 현재 포커스된 노트의 Markdown 링크를 `obsidian://open` URL로 클립보드에 복사해요.

## x-callback-url 매개변수 사용

일부 엔드포인트는 x-callback-url 매개변수 `x-success`와 `x-error`를 허용해요. 제공된 경우, Obsidian은 `x-success` 콜백에 다음을 전달해요:

- `name` 파일 확장자를 제외한 파일 이름.
- `url` 이 파일에 대한 `obsidian://` URI.
- `file` (데스크톱 전용) 이 파일에 대한 `file://` URL.

예를 들어, Obsidian이
`obsidian://.....x-success=myapp://x-callback-url`을 수신하면, 응답은 `myapp://x-callback-url?name=...&url=obsidian%3A%2F%2Fopen...&file=file%3A%2F%2F...`이 돼요.

## 단축 형식

위의 형식 외에도 보관함과 파일을 열기 위한 두 가지 "단축" 형식을 사용할 수 있어요:

1. `obsidian://vault/my vault/my note`는 `obsidian://open?vault=my%20vault&file=my%20note`와 동일해요.
2. `obsidian:///absolute/path/to/my note`는 `obsidian://open?path=%2Fabsolute%2Fpath%2Fto%2Fmy%20note`와 동일해요.

## 문제 해결

### Obsidian URI 등록

Windows와 macOS에서는 앱을 한 번 실행하면 컴퓨터에 Obsidian URI 프로토콜이 등록돼요.

Linux에서는 좀 더 복잡한 과정이 필요해요:

1. `obsidian.desktop` 파일을 생성했는지 확인하세요. [자세한 내용은 여기를 참조하세요](https://developer.gnome.org/documentation/guidelines/maintainer/integrating.html#desktop-files).
2. 데스크톱 파일에서 `Exec` 필드를 `Exec=executable %u`로 지정했는지 확인하세요. `%u`는 `obsidian://` URI를 앱에 전달하는 데 사용돼요.
3. AppImage 설치 프로그램을 사용하는 경우, `Obsidian-x.y.z.AppImage --appimage-extract`를 사용하여 압축을 풀어야 할 수 있어요. 그런 다음 `Exec` 지시자가 압축 해제된 실행 파일을 가리키는지 확인하세요.


[^1]: 보관함 ID는 보관함에 할당된 임의의 16자리 코드예요(예: `ef6ca3e3b524d22f`). 이 ID는 컴퓨터의 폴더마다 고유해요. ID는 보관함 전환기를 열고 원하는 보관함의 컨텍스트 메뉴에서 "보관함 ID 복사하기"를 클릭하여 확인할 수 있어요.
