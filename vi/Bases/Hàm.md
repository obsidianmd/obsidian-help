---
permalink: bases/functions
publish: true
mobile: true
description: Trang này trình bày chi tiết các hàm được sử dụng trong Obsidian Bases để thao tác dữ liệu từ các thuộc tính trong bộ lọc và công thức.
---
Các hàm được sử dụng trong [[Giới thiệu về Cơ sở|Cơ sở]] để thao tác dữ liệu từ [[Thuộc tính|thuộc tính]] trong [[Các chế độ xem#Bộ lọc|bộ lọc]] và [[Công thức|công thức]]. Xem tham chiếu [[Cú pháp Cơ sở|cú pháp cơ sở]] để tìm hiểu thêm về cách bạn có thể sử dụng các hàm.

Ngoài các hàm [[Hàm#Toàn cục|Toàn cục]], hầu hết các hàm phụ thuộc vào kiểu giá trị bạn muốn thao tác:

- [[Hàm#Bất kỳ|Bất kỳ]]
- [[Hàm#Ngày|Ngày]]
- [[Hàm#Chuỗi|Chuỗi]]
- [[Hàm#Số|Số]]
- [[Hàm#Danh sách|Danh sách]]
- [[Hàm#Liên kết|Liên kết]]
- [[Hàm#Tệp|Tệp]]
- [[Hàm#Đối tượng|Đối tượng]]
- [[Hàm#Biểu thức chính quy|Biểu thức chính quy]]

## Toàn cục

Các hàm toàn cục được sử dụng mà không cần kiểu.

### `escapeHTML()`

`escapeHTML(html: string): string`

- Thoát các ký tự đặc biệt trong chuỗi để đảm bảo an toàn khi đưa vào HTML.

### `date()`

`date(date: string): date`

- `date(string): date` phân tích chuỗi được cung cấp và trả về một đối tượng ngày.
- Chuỗi `date` phải có định dạng `YYYY-MM-DD HH:mm:ss`.

### `duration()`

`duration(value: string): duration`

- Phân tích chuỗi thành khoảng thời gian. Xem [[Cú pháp Cơ sở#Số học ngày|phần số học ngày]] để biết định dạng chuỗi `value`.
- Khoảng thời gian không cần phải được phân tích rõ ràng khi thực hiện số học ngày (ví dụ, `now() + '1d'`), nhưng cần thiết khi thực hiện phép tính trên khoảng thời gian (ví dụ, `now() + (duration('1d') * 2)`).
- Khi thực hiện phép tính trên khoảng thời gian với số vô hướng, khoảng thời gian phải ở bên trái. Ví dụ `duration('5h') * 2`, thay vì `2 * duration('5h')`.

### `file()`

`file(path: string | file | url): file`

- Trả về đối tượng tệp cho tệp hoặc đường dẫn đã cho.
- Ví dụ: `file(link("[[filename]]"))` hoặc `file("path to file")`.

### `html()`

`html(html: string): html`

- Chuyển đổi chuỗi thành đoạn mã được hiển thị dưới dạng HTML.

### `if()`

`if(condition: any, trueResult: any, falseResult?: any): any`

- `condition` là điều kiện cần đánh giá.
- `trueResult` là kết quả nếu điều kiện đúng.
- `falseResult` là kết quả tùy chọn nếu điều kiện sai. Nếu không được cung cấp, giá trị mặc định là `null`.
- Trả về `trueResult` nếu `condition` là đúng, hoặc là giá trị truthy, ngược lại trả về `falseResult`.
- Ví dụ: `if(isModified, "Modified", "Unmodified")`

### `image()`

`image(path: string | file | url): image`

- Trả về đối tượng hình ảnh sẽ hiển thị hình ảnh trong chế độ xem.
- Ví dụ: `image(image-property)` hoặc `image("https://obsidian.md/images/obsidian-logo-gradient.svg")`

### `icon()`

`icon(name: string): icon`

- Trả về giá trị sẽ hiển thị dưới dạng biểu tượng trong chế độ xem. Tên biểu tượng phải khớp với biểu tượng Lucide được hỗ trợ.
- Ví dụ: `icon("arrow-right")`.

### `link()`

`link(path: string | file, display?: value): Link`

- Phân tích chuỗi `path` và trả về đối tượng Link hiển thị dưới dạng liên kết đến đường dẫn đã cho.
- Tùy chọn cung cấp tham số `display` để thay đổi văn bản hiển thị của liên kết.

### `list()`

`list(element: any): List`

- Nếu phần tử được cung cấp là danh sách, trả về nguyên bản.
- Ngược lại, đặt `element` được cung cấp vào một danh sách, tạo danh sách với một phần tử duy nhất.
- Hàm này hữu ích khi một thuộc tính chứa hỗn hợp chuỗi hoặc danh sách trong kho.
- Ví dụ: `list("value")` trả về `["value"]`.

### `max()`

`max(value1: number, value2: number...): number`

- Trả về số lớn nhất trong tất cả các số được cung cấp.

### `min()`

`min(value1: number, value2: number...): number`

- Trả về số nhỏ nhất trong tất cả các số được cung cấp.

### `now()`

`now(): date`

- `now()` trả về đối tượng ngày đại diện cho thời điểm hiện tại.

### `number()`

`number(input: any): number`

- Cố gắng trả về giá trị được cung cấp dưới dạng số.
- Đối tượng ngày sẽ được trả về dưới dạng mili giây kể từ unix epoch.
- Boolean sẽ trả về 1 hoặc 0.
- Chuỗi sẽ được phân tích thành số và trả về lỗi nếu kết quả không hợp lệ.
- Ví dụ, `number("3.4")` trả về `3.4`.

### `duration()`

`duration(value: string): duration`

- Phân tích chuỗi thành khoảng thời gian. Xem [[Cú pháp Cơ sở#Số học ngày|phần số học ngày]] để biết định dạng chuỗi `value`.
- Khoảng thời gian không cần phải được phân tích rõ ràng khi thực hiện số học ngày (ví dụ, `now() + '1d'`), nhưng cần thiết khi thực hiện phép tính trên khoảng thời gian (ví dụ, `now() + (duration('1d') * 2)`).
- Khi thực hiện phép tính trên khoảng thời gian với số vô hướng, khoảng thời gian phải ở bên trái. Ví dụ `duration('5h') * 2`, thay vì `2 * duration('5h')`.

### `today()`

`today(): date`

- `today()` trả về đối tượng ngày đại diện cho ngày hiện tại. Phần thời gian được đặt về không.

### `random()`

`random(): number`

- `random()` trả về một số ngẫu nhiên từ 0 đến 1.
- Việc tạo số được làm mới mỗi khi một chế độ xem được tải. Điều hướng giữa các chế độ xem sẽ thay đổi số ngẫu nhiên.

## Bất kỳ

Các hàm bạn có thể sử dụng với bất kỳ giá trị nào. Bao gồm chuỗi (ví dụ: `"hello"`), số (ví dụ: `42`), danh sách (ví dụ: `[1,2,3]`), đối tượng, v.v.

### `isTruthy()`

`any.isTruthy(): boolean`

- Trả về giá trị được ép kiểu thành boolean.
- Ví dụ: `1.isTruthy()` trả về `true`.

### `isType()`

`any.isType(type: string): boolean`

- Trả về true nếu giá trị thuộc kiểu được cung cấp.
- Ví dụ: `"example".isType("string")` và `true.isType("boolean")` đều trả về true.

### `toString()`

`any.toString(): string`

- Trả về biểu diễn chuỗi của bất kỳ giá trị nào.
- Ví dụ: `123.toString()` trả về `"123"`.

## Ngày

Các hàm bạn có thể sử dụng với ngày và giờ như `date("2025-05-27")`. Phép so sánh ngày có thể được thực hiện bằng [[Cú pháp Cơ sở#Số học ngày|số học ngày]].

### Trường

Các trường sau có sẵn cho ngày:

| Trường             | Kiểu     | Mô tả                          |
| ------------------ | -------- | ------------------------------- |
| `date.year`        | `number` | Năm của ngày                    |
| `date.month`       | `number` | Tháng của ngày (1–12)           |
| `date.day`         | `number` | Ngày trong tháng                |
| `date.hour`        | `number` | Giờ (0–23)                      |
| `date.minute`      | `number` | Phút (0–59)                     |
| `date.second`      | `number` | Giây (0–59)                     |
| `date.millisecond` | `number` | Mili giây (0–999)               |

### `date()`

`date.date(): date`

- Trả về đối tượng ngày với phần thời gian bị loại bỏ.
- Ví dụ: `now().date().format("YYYY-MM-DD HH:mm:ss")` trả về chuỗi như "2025-12-31 00:00:00"

### `format()`

`date.format(format: string): string`

- `format` là chuỗi định dạng (ví dụ: `"YYYY-MM-DD"`).
- Trả về ngày được định dạng theo chuỗi định dạng Moment.js.
- Ví dụ: `date.format("YYYY-MM-DD")` trả về `"2025-05-27"`.

### `time()`

`date.time(): string`

- Trả về thời gian.
- Ví dụ: `now().time()` trả về chuỗi như "23:59:59"

### `relative()`

`date.relative(): string`

- Trả về phép so sánh dễ đọc của ngày so với thời điểm hiện tại.
- Ví dụ: `file.mtime.relative()` trả về giá trị như `3 days ago`.

### `isEmpty()`

`date.isEmpty(): boolean`

- Trả về false.

## Chuỗi

Các hàm bạn có thể sử dụng với một chuỗi ký tự như `"hello"`.

### Trường

| Trường          | Kiểu     | Mô tả                         |
| --------------- | -------- | ------------------------------ |
| `string.length` | `number` | Số ký tự trong chuỗi          |

### `contains()`

`string.contains(value: string): boolean`

- `value` là chuỗi con cần tìm kiếm.
- Trả về true nếu chuỗi chứa `value`.
- Ví dụ: `"hello".contains("ell")` trả về `true`.

### `containsAll()`

`string.containsAll(...values: string): boolean`

- `values` là một hoặc nhiều chuỗi con cần tìm kiếm.
- Trả về true nếu chuỗi chứa tất cả các `values`.
- Ví dụ: `"hello".containsAll("h", "e")` trả về `true`.

### `containsAny()`

`string.containsAny(...values: string): boolean`

- `values` là một hoặc nhiều chuỗi con cần tìm kiếm.
- Trả về true nếu chuỗi chứa ít nhất một trong các `values`.
- Ví dụ: `"hello".containsAny("x", "y", "e")` trả về `true`.

### `endsWith()`

`string.endsWith(query: string): boolean`

- `query` là chuỗi cần kiểm tra ở cuối.
- Trả về true nếu chuỗi kết thúc bằng `query`.
- Ví dụ: `"hello".endsWith("lo")` trả về `true`.

### `isEmpty()`

`string.isEmpty(): boolean`

- Trả về true nếu chuỗi không có ký tự, hoặc không tồn tại.
- Ví dụ: `"Hello world".isEmpty()` trả về `false`.
- Ví dụ: `"".isEmpty()` trả về `true`.

### `lower()`

`string.lower(): string`

- Trả về chuỗi được chuyển thành chữ thường.

### `replace()`

`string.replace(pattern: string | Regexp, replacement: string): string`

- `pattern` là giá trị cần tìm trong chuỗi đích.
- `replacement` là giá trị thay thế cho các mẫu tìm thấy.
- Nếu `pattern` là chuỗi, tất cả các lần xuất hiện của mẫu sẽ được thay thế.
- Nếu `pattern` là Regexp, cờ `g` xác định chỉ thay thế lần đầu tiên hay tất cả các lần xuất hiện.
- Ví dụ: `""a:b:c:d".replace(/:/, "-")` trả về `"a-b,c,d"`, trong khi `"a:b:c:d".replace(/:/g, "-")` trả về `"a-b-c-d"`.

### `repeat()`

`string.repeat(count: number): string`

- `count` là số lần lặp lại chuỗi.
- Ví dụ: `"123".repeat(2)` trả về `"123123"`

### `reverse()`

`string.reverse(): string`

- Đảo ngược chuỗi.
- Ví dụ: `"hello".reverse()` trả về `"olleh"`.

### `slice()`

`string.slice(start: number, end?: number): string`

- `start` là chỉ số bắt đầu bao gồm.
- `end` là chỉ số kết thúc không bao gồm (tùy chọn).
- Trả về chuỗi con từ `start` (bao gồm) đến `end` (không bao gồm).
- Ví dụ: `"hello".slice(1, 4)` trả về `"ell"`.
- Nếu `end` bị bỏ qua, cắt đến cuối chuỗi.

### `split()`

`string.split(separator: string | Regexp, n?: number): list`

- `separator` là ký tự phân tách để tách chuỗi.
- `n` là số tùy chọn. Nếu được cung cấp, kết quả sẽ có `n` phần tử đầu tiên.
- Trả về danh sách các chuỗi con.
- Ví dụ: `"a,b,c,d".split(",", 3)` hoặc `"a,b,c,d".split(/,/, 3)` trả về `["a", "b", "c"]`.

### `startsWith()`

`string.startsWith(query: string): boolean`

- `query` là chuỗi cần kiểm tra ở đầu.
- Trả về true nếu chuỗi bắt đầu bằng `query`.
- Ví dụ: `"hello".startsWith("he")` trả về `true`.

### `title()`

`string.title(): string`

- Chuyển chuỗi thành dạng viết hoa chữ cái đầu mỗi từ (title case).
- Ví dụ: `"hello world".title()` trả về `"Hello World"`.

### `trim()`

`string.trim(): string`

- Xóa khoảng trắng ở hai đầu chuỗi.
- Ví dụ: `"  hi  ".trim()` trả về `"hi"`.

## Số

Các hàm bạn có thể sử dụng với giá trị số như `42`, `3.14`.

### `abs()`

`number.abs(): number`

- Trả về giá trị tuyệt đối của số.
- Ví dụ: `(-5).abs()` trả về `5`.

### `ceil()`

`number.ceil(): number`

- Làm tròn số lên số nguyên gần nhất.
- Ví dụ: `(2.1).ceil()` trả về `3`.

### `floor()`

`number.floor(): number`

- Làm tròn số xuống số nguyên gần nhất.
- Ví dụ: `(2.9).floor()` trả về `2`.

### `isEmpty()`

`number.isEmpty(): boolean`

- Trả về true nếu số không tồn tại.
- Ví dụ: `5.isEmpty()` trả về `false`.

### `round()`

`number.round(digits: number): number`

- Làm tròn số đến số nguyên gần nhất.
- Tùy chọn, cung cấp tham số `digits` để làm tròn đến số chữ số thập phân đó.
- Ví dụ: `(2.5).round()` trả về `3`, và `(2.3333).round(2)` trả về `2.33`.

### `toFixed()`

`number.toFixed(precision: number): string`

- `precision` là số chữ số thập phân.
- Trả về chuỗi với số ở dạng ký hiệu dấu phẩy cố định.
- Ví dụ: `(3.14159).toFixed(2)` trả về `"3.14"`.

## Danh sách

Các hàm bạn có thể sử dụng với danh sách có thứ tự các phần tử như `[1, 2, 3]`.

### Trường

| Trường        | Kiểu     | Mô tả                            |
| ------------- | -------- | --------------------------------- |
| `list.length` | `number` | Số phần tử trong danh sách       |

### `contains()`

`list.contains(value: any): boolean`

- `value` là phần tử cần tìm kiếm.
- Trả về true nếu danh sách chứa `value`.
- Ví dụ: `[1,2,3].contains(2)` trả về `true`.

### `containsAll()`

`list.containsAll(...values: any): boolean`

- `values` là một hoặc nhiều phần tử cần tìm kiếm.
- Trả về true nếu danh sách chứa tất cả các `values`.
- Ví dụ: `[1,2,3].containsAll(2,3)` trả về `true`.

### `containsAny()`

`list.containsAny(...values: any): boolean`

- `values` là một hoặc nhiều phần tử cần tìm kiếm.
- Trả về true nếu danh sách chứa ít nhất một trong các `values`.
- Ví dụ: `[1,2,3].containsAny(3,4)` trả về `true`.

### `filter()`

`list.filter(value: Boolean): list`

- Lọc các phần tử của danh sách bằng cách gọi hàm lọc, sử dụng các biến `index` và `value`, và trả về giá trị boolean cho việc phần tử có được giữ lại hay không.
- `value` là giá trị của một mục trong danh sách.
- `index` là chỉ số của giá trị hiện tại.
- Ví dụ: `[1,2,3,4].filter(value > 2)` trả về `[3,4]`.

### `flat()`

`list.flat(): list`

- Làm phẳng danh sách lồng nhau thành một danh sách duy nhất.
- Ví dụ: `[1,[2,3]].flat()` trả về `[1,2,3]`.

### `isEmpty()`

`list.isEmpty(): boolean`

- Trả về true nếu danh sách không có phần tử.
- Ví dụ: `[1,2,3].isEmpty()` trả về `false`.

### `join()`

`list.join(separator: string): string`

- `separator` là chuỗi chèn giữa các phần tử.
- Nối tất cả phần tử danh sách thành một chuỗi duy nhất.
- Ví dụ: `[1,2,3].join(",")` trả về `"1,2,3"`.

### `map()`

`list.map(value: Any): list`

- Biến đổi mỗi phần tử của danh sách bằng cách gọi hàm chuyển đổi, sử dụng các biến `index` và `value`, và trả về giá trị mới để đặt vào danh sách.
- `value` là giá trị của một mục trong danh sách.
- `index` là chỉ số của giá trị hiện tại.
- Ví dụ: `[1,2,3,4].map(value + 1)` trả về `[2,3,4,5]`.

### `reduce()`

`list.reduce(expression: Any, acc: Any): Any`

- Rút gọn các phần tử của danh sách thành một giá trị duy nhất bằng cách chạy biểu thức cho mỗi phần tử. Biểu thức có thể sử dụng các biến `index`, `value`, và `acc` (bộ tích lũy), và nên trả về giá trị bộ tích lũy tiếp theo.
- `expression` được đánh giá cho mỗi phần tử trong danh sách.
- `value` là giá trị của mục hiện tại trong danh sách.
- `index` là chỉ số của mục hiện tại.
- `acc` là giá trị tích lũy cho đến nay.
- Ví dụ (tổng): `[1,2,3].reduce(acc + value, 0)` trả về `6`.
- Ví dụ (max): `values.filter(value.isType("number")).reduce(if(acc == null || value > acc, value, acc), null)` trả về số lớn nhất, hoặc `null` nếu không có.

### `reverse()`

`list.reverse(): list`

- Đảo ngược danh sách tại chỗ.
- Ví dụ: `[1,2,3].reverse()` trả về `[3,2,1]`.

### `slice()`

`list.slice(start: number, end?: number): list`

- `start` là chỉ số bắt đầu bao gồm.
- `end` là chỉ số kết thúc không bao gồm (tùy chọn).
- Trả về bản sao nông của một phần danh sách từ `start` (bao gồm) đến `end` (không bao gồm).
- Ví dụ: `[1,2,3,4].slice(1,3)` trả về `[2,3]`.
- Nếu `end` bị bỏ qua, cắt đến cuối danh sách.

### `sort()`

`list.sort(): list`

- Sắp xếp các phần tử danh sách từ nhỏ nhất đến lớn nhất.
- Ví dụ: `[3, 1, 2].sort()` trả về `[1, 2, 3]`.
- Ví dụ: `["c", "a", "b"].sort()` trả về `["a", "b", "c"]`.

### `unique()`

`list.unique(): list`

- Xóa các phần tử trùng lặp.
- Ví dụ: `[1,2,2,3].unique()` trả về `[1,2,3]`.

## Liên kết

Các hàm bạn có thể sử dụng trên liên kết. Liên kết có thể được tạo từ tệp (`file.asLink()`) hoặc đường dẫn (`link("path")`).

### `asFile()`

`link.asFile(): file`

- Trả về đối tượng tệp nếu liên kết tham chiếu đến tệp cục bộ hợp lệ.
- Ví dụ: `link("[[filename]]").asFile()`

### `linksTo()`

`link.linksTo(file): boolean`

- Trả về liệu tệp được đại diện bởi `link` có liên kết đến `file` hay không.

## Tệp

Các hàm bạn có thể sử dụng với tệp trong kho.

### Trường

Các trường sau có sẵn cho tệp:

| Trường            | Kiểu     | Mô tả                                                   |
| ----------------- | -------- | -------------------------------------------------------- |
| `file.name`       | `string` | Tên của tệp này.                                        |
| `file.basename`   | `string` | Tên tệp không có phần mở rộng.                          |
| `file.path`       | `string` | Đường dẫn đầy đủ đến tệp, tương đối với gốc kho.       |
| `file.folder`     | `string` | Đường dẫn đầy đủ đến thư mục cha.                       |
| `file.ext`        | `string` | Phần mở rộng tệp của tệp này.                           |
| `file.size`       | `number` | Kích thước tệp, tính bằng byte.                         |
| `file.properties` | `object` | Thuộc tính ghi chú của tệp này.                         |
| `file.tags`       | `list`   | Các thẻ của tệp này. Bao gồm thẻ nội tuyến.            |
| `file.links`      | `list`   | Các liên kết nội bộ trong tệp này.                      |
| `file.ctime`      | `date`   | Dấu thời gian khi tệp được tạo.                         |
| `file.mtime`      | `date`   | Dấu thời gian khi tệp được chỉnh sửa lần cuối.         |

### `asLink()`

`file.asLink(display?: string): Link`

- `display` văn bản hiển thị tùy chọn cho liên kết.
- Trả về đối tượng Link hiển thị dưới dạng liên kết hoạt động.
- Ví dụ: `file.asLink()`

### `hasLink()`

`file.hasLink(otherFile: file | string): boolean`

- `otherFile` là đối tượng tệp khác hoặc đường dẫn chuỗi cần kiểm tra.
- Trả về true nếu `file` liên kết đến `otherFile`.
- Ví dụ: `file.hasLink(otherFile)` trả về `true` nếu có liên kết từ `file` đến `otherFile`.

### `hasProperty()`

`file.hasProperty(name: string): boolean`

- Trả về true nếu ghi chú có thuộc tính tệp đã cho.

### `hasTag()`

`file.hasTag(...values: string): boolean`

- `values` là một hoặc nhiều tên thẻ.
- Trả về true nếu tệp có bất kỳ thẻ nào trong `values`.
- Ví dụ: `file.hasTag("tag1", "tag2")` trả về `true` nếu tệp có thẻ `#tag1` hoặc `#tag2`. Nó cũng bao gồm bất kỳ [[Thẻ#Thẻ lồng nhau|thẻ lồng nhau]] nào, như `#tag1/a` hoặc `#tag2/b`.

### `inFolder()`

`file.inFolder(folder: string): boolean`

- `folder` là tên thư mục cần kiểm tra.
- Trả về true nếu tệp nằm trong thư mục được chỉ định hoặc một trong các thư mục con của nó.
- Ví dụ: `file.inFolder("notes")` trả về `true`.

## Đối tượng

Các hàm bạn có thể sử dụng với tập hợp các cặp khóa-giá trị như `{"a": 1, "b": 2}`.

### `isEmpty()`

`object.isEmpty(): boolean`

- Trả về true nếu đối tượng không có thuộc tính riêng.
- Ví dụ: `{}.isEmpty()` trả về `true`.

### `keys()`

`object.keys(): list`

- Trả về danh sách chứa các khóa của đối tượng.

### `values()`

`object.values(): list`

- Trả về danh sách chứa các giá trị của đối tượng.

## Biểu thức chính quy

Các hàm bạn có thể sử dụng với mẫu biểu thức chính quy. Ví dụ: `/abc/`.

### `matches()`

`regexp.matches(value: string): boolean`

- `value` là chuỗi cần kiểm tra.
- Trả về true nếu biểu thức chính quy khớp với `value`.
- Ví dụ: `/abc/.matches("abcde")` trả về `true`.
