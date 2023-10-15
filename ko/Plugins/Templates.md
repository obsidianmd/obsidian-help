템플릿을 사용하여 미리 정의된 텍스트 스니펫을 활성 노트에 삽입할 수 있습니다.
You can use Templates to insert pre-defined snippets of text into your active note.

## Set your template folder

1. 좌측 하단에서 **설정(Settings)** (톱니바퀴 아이콘)를 클릭합니다.
2. **코어 플러그인(Core plugins) → 템플릿(Templates) → 템플릿 폴더 위치(Template folder location)**에서 템플릿이 포함된 폴더를 입력합니다.

## Insert a template into the active note

**중요:** 템플릿을 삽입하려면 먼저 [[#Set your template folder|템플릿 폴더 설정]]을 해야 합니다.

1. 리본에서 **템플릿 삽입(Insert template)**을 클릭합니다.
2. 활성 노트의 커서 위치에 삽입할 템플릿을 선택합니다.

템플릿 폴더에 노트가 하나만 포함된 경우, 템플릿은 해당 노트를 직접 활성 노트에 삽입합니다.

## Template variables

템플릿에 동적 정보를 추가할 수 있는 _템플릿 변수_를 사용할 수 있습니다. 템플릿 변수가 포함된 템플릿을 삽입하면 템플릿은 해당 값을 해당하는 값으로 대체합니다.

| 변수    | 설명                                     |
|-------------|-------------------------------------------------|
| `{{title}}` | 활성 노트의 제목입니다.                       |
| `{{date}}`  | 오늘의 날짜입니다. **기본 형식:** `YYYY-MM-DD`. |
| `{{time}}`  | 현재 시간입니다.   **기본 형식:** `HH:mm`.      |

`{{date}}` 및 `{{time}}`은 기본 형식을 변경할 수 있는 _형식 문자열(format string)_을 사용합니다.

형식 문자열을 설정하려면, [Moment.js format tokens](https://momentjs.com/docs/#/displaying/format/)에서 사용할 문자열 뒤에 콜론(`:`)을 추가하십시오. 예를 들어 `{{date:YYYY-MM-DD}}`.

기본 날짜 및 시간 형식은 **설정(Settings) → 템플릿(Templates) → 날짜 형식(Date format)** 및 **설정(Settings) → 템플릿(Templates) → 시간 형식(Time format)**에서 변경할 수 있습니다.

> [!tip]
> [[Daily notes|데일리 노트]] 및 [[Unique note creator|유니크 노트 생성자]] 플러그인에서도 `{{date}}` 및 `{{time}}` 템플릿 변수를 사용할 수 있습니다.
