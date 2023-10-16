---
aliases: Using Obsidian URI
---
Obsidian URI는 Obsidian에서 지원하는 사용자 정의 URI 프로토콜로, 노트를 열거나 생성하는 것과 같은 다양한 작업을 트리거할 수 있게 해줍니다. 이것은 주로 macOS 및 모바일 앱에서 자동화 및 앱 간 워크플로를 위해 사용됩니다.

Obsidian URI는 일반적으로 다음 형식을 따릅니다:

```
obsidian://action?param1=value&param2=value
```

`action` 매개 변수는 수행하려는 작업입니다.

> [!warning] 인코딩
> 값이 올바르게 URI 인코딩되었는지 확인하십시오. 예를 들어, 슬래시 문자 `/`는 `%2F`로 인코딩해야하며 공백 문자는 `%20`으로 인코딩해야합니다.
> 
> 이것은 특히 "예약" 문자가 제대로 인코딩되지 않으면 URI 해석이 깨질 수 있기 때문에 중요합니다. [자세한 내용은 여기를 참조하십시오](https://en.wikipedia.org/wiki/Percent-encoding).

## Register Obsidian URI

Windows 및 macOS에서 앱을 한 번 실행하면 컴퓨터에 Obsidian URI 프로토콜을 등록하는 데 충분합니다.

Linux의 경우, 더 복잡한 프로세스입니다:

1. `obsidian.desktop` 파일을 만들어야 합니다. [자세한 내용은 여기를 참조하십시오](https://developer.gnome.org/documentation/guidelines/maintainer/integrating.html#desktop-files).
2. 데스크톱 파일에서 `Exec` 필드를 `Exec=executable %u`로 지정해야합니다. `%u`는 `obsidian://` URI를 앱에 전달하기 위해 사용됩니다.
3. AppImage 설치 프로그램를 사용하는 경우, `Obsidian-x.y.z.AppImage --appimage-extract`를 사용하여 압축을 풀어야할 수 있습니다. 그런 다음 `Exec` 지시문이 압축을 푼 실행 파일을 가리키도록해야합니다.

## Open notes

Obsidian 보관소를 열거나 해당 보관소 내의 파일을 엽니다.

### Examples

- `obsidian://open?vault=my%20vault` 이 명령은 `my vault` 보관소를 엽니다. 이미 보관소가 열려있으면 해당 창에 중점을 둡니다.
    
- `obsidian://open?vault=ef6ca3e3b524d22f` 이 명령은 ID `ef6ca3e3b524d22f`로 식별된 보관소를 엽니다.
    
- `obsidian://open?vault=my%20vault&file=my%20note` 이 명령은 파일이 있는 경우 `my vault` 보관소에서 노트 `my note.md`를 엽니다.
    
- `obsidian://open?path=%2Fhome%2Fuser%2Fmy%20vault%2Fpath%2Fto%2Fmy%20note` 이 명령은 파일이 어떤 보관소에 있는지 검색합니다. 그런 다음 나머지 경로는 `file` 매개 변수로 전달됩니다. 예를 들어, `/home/user/my vault`에 보관소가 있으면 이것은 `file` 매개 변수가 `path/to/my note`로 설정된 것과 같습니다.


> [!tip] 헤딩 또는 블록 열기
> 올바른 URI 인코딩을 사용하면 노트 내의 헤딩이나 블록으로 이동할 수 있습니다. `Note%23Heading`는 "Heading"이라고 불리는 헤딩으로 이동하고 `Note%23%5EBlock`은 "Block"이라고 불리는 블록으로 이동합니다.

### Parameters

- `vault`는 보관소 이름 또는 보관소 ID[^1] 일 수 있습니다.
- `file`는 파일 이름 또는 지정된 파일까지의 보관소 루트로의 경로입니다. 파일 확장자가 `md` 인 경우 확장자를 생략할 수 있습니다.
- `path`는 파일 시스템의 절대 경로입니다.
    - 이 매개 변수를 사용하면 `vault` 및 `file` 모두 무시됩니다.
    - 이것은 앱이 지정된 파일 경로를 포함하는 가장 구체적인 보관소를 검색하게 합니다.
    - 그런 다음 경로의 나머지 부분이 `file` 매개 변수를 대체합니다.

## Open search

이 Obsidian URI 엔드포인트는 지정된 보관소에서 [[Search|검색]]을 열고 선택적으로 검색 쿼리를 수행합니다.

### Examples

- `obsidian://search?vault=my%20vault`
  이 명령은 `my vault` 보관소를 열고 [[Search|검색]]을 엽니다.

- `obsidian://search?vault=my%20vault&query=Obsidian`
  이 명령은 `my vault` 보관소를 열고 [[Search|검색]]을 열고 `Obsidian`에 대한 검색을 수행합니다.
  
### Parameters

- `vault`는 보관소 이름 또는 보관소 ID[^1] 일 수 있습니다. `open` 작업과 동일합니다.
- `query` (선택 사항) 수행할 검색 쿼리입니다.

## Create note

이 URI 엔드포인트는 보관소에 새 노트를 만들고 선택적으로 일부 내용을 포함합니다.

### Examples

- `obsidian://new?vault=my%20vault&name=my%20note`
  이 명령은 `my vault` 보관소를 열고 `my note`라는 새 노트를 만듭니다.
- `obsidian://new?vault=my%20vault&path=path%2Fto%2Fmy%20note`
  이 명령은 `my vault` 보관소를 열고 `path/to/my note`에 새 노트를 만듭니다.

### Parameters

- `vault`는 보관소 이름 또는 보관소 ID[^1] 일 수 있습니다. `open` 작업과 동일합니다.
- `name` 생성할 파일 이름입니다. 이 값이 지정된 경우 파일 위치는 "새 노트의 기본 위치" 환경 설정에 따라 선택됩니다.
- `file`는 보관소의 절대 경로, 파일 이름을 포함한 것입니다. 지정된 경우 `name`을 무시합니다.
- `path`는 전역 절대 경로입니다. `open` 작업의 `path` 옵션과 유사하게 작동합니다. `vault` 및 `file` 모두 무시합니다.
- `content` (선택 사항) 노트 내용입니다.
- `silent` (선택 사항) 이 매개 변수를 포함하면 새 노트를 열지 않습니다.
- `append` (선택 사항) 지정된 경우 기존 파일에 추가합니다.
- `overwrite` (선택 사항) 지정된 경우 기존 파일을 덮어씁니다. 단, `append`가 설정되지 않은 경우에만.
- `x-success` (선택 사항) [[#x-callback-url]] 참조.

## Integrate with Hook

이 Obsidian URI 엔드포인트는 [Hook](https://hookproductivity.com/)와 함께 사용되어야합니다.

### Example

`obsidian://hook-get-address`

### Parameters

- `vault` (선택 사항) 보관소 이름 또는 보관소 ID[^1] 일 수 있습니다. 지정하지 않으면 현재 또는 마지막으로 포커싱된 보관소가 사용됩니다.
- `x-success` (선택 사항) [[#x-callback-url]] 참조.
- `x-error` (선택 사항) [[#x-callback-url]] 참조.

`x-success`가 정의된 경우 이 API는 x-callback-url로 사용합니다. 그렇지 않으면 현재 포커스된 노트의 Markdown 링크를 클립보드로 복사하며 `obsidian://open` URL로 사용합니다.

## Use x-callback-url parameters

일부 엔드포인트는 x-callback-url 매개 변수 `x-success` 및 `x-error`을 허용합니다. 제공되면 Obsidian은 `x-success` 콜백에 다음을 제공합니다.

- 파일 이름은 확장자를 제외한 파일 이름입니다.
- 파일에 대한 `obsidian://` URI입니다.
- 파일에 대한 (데스크톱 전용) `file://` URL입니다.

예를 들어 Obsidian이 `obsidian://.....x-success=myapp://x-callback-url`을 수신하면 응답은 `myapp://x-callback-url?name=...&url=obsidian%3A%2F%2Fopen...&file=file%3A%2F%2F...`가 됩니다.

## Shorthand formats

위의 형식 외에도 보관소와 파일을 열기 위한 두 가지 "요약(shorthand)" 형식이 더 있습니다:

1. `obsidian://vault/my vault/my note`는 `obsidian://open?vault=my%20vault&file=my%20note`와 동등합니다.
2. `obsidian:///absolute/path/to/my note`는 `obsidian://open?path=%2Fabsolute%2Fpath%2Fto%2Fmy%20note`와 동등합니다.

---

[^1]: Vault ID는 보관소에 할당된 무작위 16자 코드로 예를 들어 `ef6ca3e3b524d22f`입니다. 이 ID는 컴퓨터의 각 폴더당 고유합니다. 이 ID를 찾는 쉬운 방법이 아직 없으며 나중에 보관소 전환기에서 제공될 것입니다. 현재 Windows의 경우 `%appdata%/obsidian/obsidian.json`에서 찾을 수 있습니다. macOS의 경우 `%appdata%`를 `~/Library/Application Support/`로 대체하십시오. Linux의 경우 `%appdata%`를 `~/.config/`로 대체하십시오.