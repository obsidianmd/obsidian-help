---
permalink: web-clipper/filters
---
Bộ lọc cho phép bạn chỉnh sửa [[Biến|biến]] trong [[Obsidian Web Clipper/Mẫu|mẫu Web Clipper]]. Bộ lọc được áp dụng cho biến bằng cú pháp `{{variable|filter}}`.

- Bộ lọc hoạt động với mọi loại [[Biến|biến]] bao gồm biến `prompt`, `meta`, `selector` và `schema`.
- Bộ lọc có thể được nối chuỗi, ví dụ `{{variable|filter1|filter2}}`, và được áp dụng theo thứ tự chúng được thêm vào.

## Ngày tháng

Chuyển đổi và sửa đổi ngày tháng.

### `date`

Chuyển đổi ngày tháng sang định dạng được chỉ định, [xem tham khảo](https://day.js.org/docs/en/display/format).

- `{{date|date:"YYYY-MM-DD"}}` chuyển đổi ngày hiện tại sang "YYYY-MM-DD".
- Sử dụng `date:("outputFormat", "inputFormat")` để chỉ định định dạng đầu vào, ví dụ `"12/01/2024"|date:("YYYY-MM-DD", "MM/DD/YYYY")` phân tích "12/01/2024" và trả về `"2024-12-01"`.

### `date_modify` 

Sửa đổi ngày tháng bằng cách cộng hoặc trừ một khoảng thời gian được chỉ định, [xem tham khảo](https://day.js.org/docs/en/manipulate/add).

- `"2024-12-01"|date_modify:"+1 year"` trả về `"2025-12-01"`
- `"2024-12-01"|date_modify:"- 2 months"` trả về `"2024-10-01"`

### `duration`

Chuyển đổi chuỗi thời lượng ISO 8601 hoặc giây thành chuỗi thời gian được định dạng. Sử dụng các token: `HH` (giờ có đệm), `H` (giờ), `mm` (phút có đệm), `m` (phút), `ss` (giây có đệm), `s` (giây).

- `"PT1H30M"|duration:"HH:mm:ss"` trả về `"01:30:00"`.
- `"3665"|duration:"H:mm:ss"` trả về `"1:01:05"`.
- Đặt `duration` không có tham số sẽ sử dụng `HH:mm:ss` trên 1 giờ, `mm:ss` dưới 1 giờ.
- Hỗ trợ cả chuỗi thời lượng ISO 8601 (ví dụ, `PT6702S`, `PT1H30M`) và giây thuần.

## Chuyển đổi và viết hoa chữ

Chuyển đổi chuỗi văn bản từ định dạng này sang định dạng khác.

### `camel`

Chuyển đổi văn bản sang `camelCase`.

### `capitalize`

Viết hoa ký tự đầu tiên của giá trị và chuyển phần còn lại thành chữ thường, ví dụ `"hELLO wORLD"|capitalize` trả về `"Hello world"`.

### `decode_uri`

Giải mã chuỗi đã được mã hóa URI, ví dụ `"%E4%BD%A0%E5%A5%BD"|decode_uri` trả về `"你好"`.

- `"hello%20world"|decode_uri` trả về `"hello world"`.
- Trả về chuỗi gốc nếu giải mã thất bại (ví dụ chuỗi URI không đúng định dạng).

### `kebab`

Chuyển đổi văn bản sang `kebab-case`.

### `lower`

Chuyển đổi văn bản sang `lowercase`.

### `pascal`

Chuyển đổi văn bản sang `PascalCase`.

### `replace`

Thay thế các lần xuất hiện của văn bản được chỉ định:

- Thay thế đơn giản: `"hello!"|replace:",":""` xóa tất cả dấu phẩy.
- Thay thế nhiều lần: `"hello world"|replace:("e":"a","o":"0")` trả về `"hall0 w0rld"`.
- Các thay thế được áp dụng theo thứ tự chúng được chỉ định.
- Để xóa văn bản được chỉ định, sử dụng `""` làm giá trị thay thế.
- Các ký tự đặc biệt bao gồm `: | { } ( ) ' "` nên được thoát bằng dấu gạch chéo ngược khi sử dụng trong cụm từ tìm kiếm, ví dụ `\:` để tìm dấu hai chấm theo nghĩa đen.

Biểu thức chính quy được hỗ trợ bằng cú pháp regex JavaScript:

- Thay thế tất cả nguyên âm: `"hello world"|replace:"/[aeiou]/g":"*"` → `"h*ll* w*rld".`
- Không phân biệt hoa thường: `"HELLO world"|replace:"/hello/i":"hi"` → `"hi world".`
- Nhiều biểu thức chính quy: `"hello world"|replace:("/[aeiou]/g":"*","/\s+/":"-")` → `"h*ll*-w*rld"`.
- Các cờ có sẵn: `g` (toàn cục), `i` (không phân biệt hoa thường), `m` (nhiều dòng), `s` (dotAll), `u` (unicode), `y` (sticky).

### `safe_name`

Chuyển đổi văn bản thành tên tệp an toàn.

- Mặc định, `safe_name` áp dụng các quy tắc làm sạch bảo thủ nhất.
- Có thể áp dụng quy tắc theo hệ điều hành cụ thể với `safe_name:os` trong đó `os` có thể là `windows`, `mac`, hoặc `linux` để chỉ áp dụng quy tắc cho hệ điều hành đó.

### `snake`

Chuyển đổi văn bản sang `snake_case`.

### `title`

Chuyển đổi văn bản sang `Title Case`, ví dụ `"hello world"|title` trả về `"Hello World"`.

### `trim`

Xóa khoảng trắng ở cả hai đầu của chuỗi.

- `"  hello world  "|trim` trả về `"hello world"`.

### `uncamel`

Chuyển đổi camelCase hoặc PascalCase thành các từ phân cách bằng dấu cách, mà bạn có thể tiếp tục định dạng với các bộ lọc khác như `title` hoặc `capitalize`.

- `"camelCase"|uncamel` trả về `"camel case"`.
- `"PascalCase"|uncamel` trả về `"pascal case"`.

### `upper`

Chuyển đổi giá trị thành chữ in hoa, ví dụ `"hello world"|upper` trả về `"HELLO WORLD"`.

## Định dạng văn bản

Áp dụng [[Cú pháp định dạng cơ bản]] và [[Cú pháp định dạng nâng cao]] cho văn bản.

### `blockquote` 

Thêm tiền tố trích dẫn Markdown (`> `) vào mỗi dòng của đầu vào.

### `callout`

Tạo một [[Khung ghi chú|khung ghi chú]] với các tham số tùy chọn: `{{variable|callout:("type", "title", foldState)}}`

- `type` là loại khung ghi chú, mặc định là "info"
- `title` là tiêu đề khung ghi chú, mặc định là trống
- `foldState` là giá trị boolean để đặt trạng thái thu gọn (true để thu gọn, false để mở rộng, null để không thể thu gọn)

### `footnote`

Chuyển đổi mảng hoặc đối tượng thành danh sách chú thích Markdown.

- Với mảng: `["first item","second item"]|footnote` trả về: `[^1]: first item` v.v.
- Với đối tượng: `{"First Note": "Content 1", "Second Note": "Content 2"}|footnote` trả về: `[^first-note]: Content 1` v.v.

### `fragment_link`

Chuyển đổi chuỗi và mảng thành liên kết [đoạn văn bản](https://developer.mozilla.org/en-US/docs/Web/URI/Fragment/Text_fragments). Mặc định là "link" cho văn bản liên kết.

- `highlights|fragment_link` trả về `Highlight content [link](text-fragment-url)`
- `highlights|fragment_link:"custom title"` trả về `Highlight content [custom title](text-fragment-url)`

### `image` 

Chuyển đổi chuỗi, mảng hoặc đối tượng thành cú pháp hình ảnh Markdown.

- Với chuỗi: `"image.jpg"|image:"alt text"` trả về `![alt text](image.jpg)`.
- Với mảng: `["image1.jpg","image2.jpg"]|image:"alt text"` trả về mảng các chuỗi hình ảnh Markdown với cùng văn bản thay thế cho tất cả hình ảnh.
- Với đối tượng: `{"image1.jpg": "Alt 1", "image2.jpg": "Alt 2"}|image` trả về các chuỗi hình ảnh Markdown với văn bản thay thế từ khóa của đối tượng.

### `link`

Chuyển đổi chuỗi, mảng hoặc đối tượng thành cú pháp liên kết Markdown (không nhầm lẫn với [[Bộ lọc#`wikilink`|wikilink]]).

- Với chuỗi: `"url"|link:"author"` trả về `[author](url)`.
- Với mảng: `["url1","url2"]|link:"author"` trả về mảng các liên kết Markdown với cùng văn bản cho tất cả liên kết.
- Với đối tượng: `{"url1": "Author 1", "url2": "Author 2"}|link` trả về các liên kết Markdown với văn bản khớp với khóa của đối tượng.

### `list`

Chuyển đổi mảng thành danh sách Markdown.

- `list` để chuyển đổi thành danh sách dấu đầu dòng.
- `list:task` để chuyển đổi thành danh sách công việc.
- `list:numbered` để chuyển đổi thành danh sách đánh số.
- `list:numbered-task` để chuyển đổi thành danh sách công việc có đánh số.

### `table`

Chuyển đổi mảng hoặc mảng đối tượng thành [[Cú pháp định dạng nâng cao#Bảng|bảng Markdown]]:

- Với mảng đối tượng, nó sử dụng khóa của đối tượng làm tiêu đề.
- Với mảng các mảng, nó tạo bảng với mỗi mảng con là một hàng.
- Với mảng đơn giản, nó tạo bảng một cột với "Value" làm tiêu đề.
- Có thể chỉ định tiêu đề cột tùy chỉnh bằng: `table:("Column 1", "Column 2", "Column 3")`. Khi sử dụng với mảng đơn giản, nó tự động chia dữ liệu thành các hàng dựa trên số cột được chỉ định.

### `wikilink`

Chuyển đổi chuỗi, mảng hoặc đối tượng thành cú pháp [[Liên kết ghi chú|liên kết wiki]] của Obsidian.

- Với chuỗi: `"page"|wikilink` trả về `[[page]]`.
- Với chuỗi có bí danh: `"page"|wikilink:"alias"` trả về `[[page|alias]]`.
- Với mảng: `["page1","page2"]|wikilink` trả về mảng các liên kết wiki không có bí danh.
- Với mảng có bí danh: `["page1","page2"]|wikilink:"alias"` trả về mảng các liên kết wiki với cùng bí danh cho tất cả liên kết.
- Với đối tượng: `{"page1": "alias1", "page2": "alias2"}|wikilink` trả về các liên kết wiki với khóa là tên trang và giá trị là bí danh.

## Số

### `calc`

Thực hiện các phép tính số học cơ bản trên số.

- Hỗ trợ các toán tử: `+`, `-`, `*`, `/`, `**` (hoặc `^`) cho lũy thừa.
- Ví dụ: `5|calc:"+10"` trả về `15`.
- Ví dụ: `2|calc:"**3"` trả về `8` (2 lũy thừa 3).
- Trả về chuỗi gốc nếu đầu vào không phải là số.

### `length`

Trả về độ dài của chuỗi, mảng hoặc số khóa trong đối tượng.

- Với chuỗi: `"hello"|length` trả về `5`.
- Với mảng: `["a","b","c"]|length` trả về `3`.
- Với đối tượng: `{"a":1,"b":2}|length` trả về `2`.

### `round`

Làm tròn số đến số nguyên gần nhất hoặc đến số chữ số thập phân được chỉ định.

- Không có tham số: `3.7|round` trả về `4`.
- Với số chữ số thập phân được chỉ định: `3.14159|round:2` trả về `3.14`.

## Xử lý HTML

Xử lý nội dung HTML và chuyển đổi HTML sang Markdown. Lưu ý rằng [[Biến|biến]] đầu vào của bạn phải chứa nội dung HTML, ví dụ sử dụng `{{fullHtml}}`, `{{contentHtml}}` hoặc biến `{{selectorHtml:}}`.

### `markdown` 

Chuyển đổi chuỗi thành chuỗi được định dạng [[Obsidian Flavored Markdown]].

- Hữu ích khi kết hợp với các biến trả về HTML như `{{contentHtml}}`, `{{fullHtml}}`, và các biến selector như `{{selectorHtml:cssSelector}}`.

### `remove_attr` 

Chỉ xóa các thuộc tính HTML được chỉ định khỏi thẻ.

- Ví dụ: `"<div class="test" id="example">Content</div>"|remove_attr:"class"` trả về `<div id="example">Content</div>`.
- Nhiều thuộc tính: `{{fullHtml|remove_attr:("class,style,id")}}`

### `remove_html`

Xóa các phần tử HTML được chỉ định và nội dung của chúng khỏi chuỗi.

- Hỗ trợ tên thẻ, class hoặc id, ví dụ `{{fullHtml|remove_html:("img,.class-name,#element-id")}}`
- Để chỉ xóa thẻ HTML hoặc thuộc tính mà không xóa nội dung, sử dụng bộ lọc `strip_tags` hoặc `strip_attr`.

### `remove_tags` 

Chỉ xóa các thẻ HTML được chỉ định. Giữ lại nội dung của thẻ.

- Ví dụ: `"<p>Hello <b>world</b>!</p>"|remove_tags:"b"` trả về `"<p>Hello world!</p>"`.
- Nhiều thẻ: `{{fullHtml|remove_tags:("a,em,strong")}}`

### `replace_tags`

Thay thế thẻ HTML, giữ nguyên nội dung và thuộc tính của thẻ.

- `{{fullHtml|replace_tags:"strong":"h2"}}` thay thế tất cả thẻ `<strong>` bằng `<h2>`.

### `strip_attr`

Xóa **tất cả** thuộc tính HTML khỏi chuỗi.

- Sử dụng `strip_attr:("class, id")` để giữ lại các thuộc tính cụ thể.
- Ví dụ: `"<div class="test" id="example">Content</div>"|strip_attr:("class")` trả về `<div id="example">Content</div>`.

### `strip_md`

Xóa **tất cả** định dạng Markdown và trả về chuỗi văn bản thuần, ví dụ chuyển `**text**` thành `text`.

- Chuyển đổi văn bản đã định dạng thành văn bản thuần không định dạng, bao gồm in đậm, in nghiêng, tô sáng, tiêu đề, mã, trích dẫn khối, bảng, danh sách công việc và liên kết wiki.
- Xóa hoàn toàn bảng, chú thích, hình ảnh và các phần tử HTML.

### `strip_tags`

Xóa **tất cả** thẻ HTML khỏi chuỗi. Nội dung bên trong thẻ được giữ lại.

- Sử dụng `strip_tags:("p,strong,em")` để giữ lại các thẻ cụ thể.
- Ví dụ: `"<p>Hello <b>world</b>!</p>"|strip_tags:("b")` trả về `Hello <b>world</b>!`.

## Mảng và đối tượng

Xử lý mảng và đối tượng.

### `first` 

Trả về phần tử đầu tiên của mảng dưới dạng chuỗi.

- `["a","b","c"]|first` trả về `"a"`.
- Nếu đầu vào không phải mảng, nó trả về đầu vào không thay đổi.

### `join`

Kết hợp các phần tử của mảng thành một chuỗi.

- `["a","b","c"]|join` trả về `"a,b,c"`.
- Có thể chỉ định dấu phân cách tùy chỉnh: `["a","b","c"]|join:" "` trả về `"a b c"`. Sử dụng `join:"\n"` để phân cách các phần tử bằng ngắt dòng.
- Có thể hữu ích sau `split` hoặc `slice`: `"a,b,c,d"|split:","|slice:1,3|join:" "` trả về `"b c"`.

### `last`

Trả về phần tử cuối cùng của mảng dưới dạng chuỗi.

- `["a","b","c"]|last` trả về `"c"`.
- Nếu đầu vào không phải mảng, nó trả về đầu vào không thay đổi.

### `map`

Áp dụng phép biến đổi cho mỗi phần tử của mảng bằng cú pháp `map:item => item.property` hoặc `map:item => item.nested.property` cho thuộc tính lồng nhau.

- `[{gem: "obsidian", color: "black"}, {gem: "amethyst", color: "purple"}]|map:item => item.gem` trả về `["obsidian", "amethyst"]`.
- Sử dụng dấu ngoặc đơn cho object literal và biểu thức phức tạp: `map:item => ({key: value})`, ví dụ: `[{gem: "obsidian", color: "black"}, {gem: "amethyst", color: "purple"}]|map:item => ({name: item.gem, color: item.color})` trả về `[{name: "obsidian", color: "black"}, {name: "amethyst", color: "purple"}]`.

Chuỗi literal cũng được hỗ trợ, ví dụ `["rock", "pop"]|map:item => "genres/${item}"` trả về `["genres/rock", "genres/pop"]`.

Kết hợp `map` với bộ lọc `template`, ví dụ `map:item => ({name: ${item.gem}, color: item.color})|template:"- ${name} is ${color}\n"`. Với map chuỗi literal, sử dụng `${str}` trong mẫu, ví dụ `["rock", "pop"]|map:item => "genres/${item}"|template:"- ${str}"`.

Lưu ý: Không thể sử dụng bộ lọc tích hợp bên trong `map`. Điều này có nghĩa là, ví dụ, không thể cắt khoảng trắng mỗi giá trị của mảng bằng `map`.

### `merge`

Thêm giá trị mới vào mảng.

- Với mảng: `["a","b"]|merge:("c","d")` trả về `["a","b","c","d"]`.
- Giá trị đơn: `["a","b"]|merge:"c"` trả về `["a","b","c"]`.
- Nếu đầu vào không phải mảng, nó tạo mảng mới: `"a"|merge:("b","c")` trả về `["a","b","c"]`.
- Giá trị có thể được đặt trong dấu ngoặc kép: `["a"]|merge:('b,"c,d",e')` trả về `["a","b","c,d","e"]`.

### `nth`

Giữ lại các phần tử thứ n trong mảng bằng cú pháp kiểu nth-child của CSS và mẫu nhóm. Tất cả vị trí bắt đầu từ 1 (phần tử đầu tiên là vị trí 1).

- `array|nth:3` chỉ giữ phần tử thứ 3.
- `array|nth:3n` giữ mỗi phần tử thứ 3 (3, 6, 9, v.v.).
- `array|nth:n+3` giữ phần tử thứ 3 và tất cả phần tử tiếp theo.

Cú pháp mẫu nhóm cho cấu trúc lặp lại:

- `array|nth:1,2,3:5` giữ vị trí 1, 2, 3 từ mỗi nhóm 5 phần tử. Ví dụ: `[1,2,3,4,5,6,7,8,9,10]|nth:1,2,3:5` trả về `[1,2,3,6,7,8]`.

### `object`

Thao tác dữ liệu đối tượng:

- `object:array` chuyển đổi đối tượng thành mảng các cặp khóa-giá trị.
- `object:keys` trả về mảng các khóa của đối tượng.
- `object:values` trả về mảng các giá trị của đối tượng.
- Ví dụ: `{"a":1,"b":2}|object:array` trả về `[["a",1],["b",2]]`.

### `slice`

Trích xuất một phần của chuỗi hoặc mảng.

- Với chuỗi: `"hello"|slice:1,4` trả về `"ell"`.
- Với mảng: `["a","b","c","d"]|slice:1,3` trả về `["b","c"]`.
- Nếu chỉ cung cấp một tham số, nó cắt từ chỉ mục đó đến cuối: `"hello"|slice:2` trả về `"llo"`.
- Chỉ mục âm đếm từ cuối: `"hello"|slice:-3` trả về `"llo"`.
- Tham số thứ hai là không bao gồm: `"hello"|slice:1,4` bao gồm các ký tự tại chỉ mục 1, 2 và 3.
- Sử dụng tham số thứ hai âm để loại trừ các phần tử từ cuối: `"hello"|slice:0,-2` trả về `"hel"`.

### `split`

Chia chuỗi thành mảng các chuỗi con.

- `"a,b,c"|split:","` trả về `["a","b","c"]`.
- `"hello world"|split:" "` trả về `["hello","world"]`.
- Nếu không cung cấp dấu phân cách, nó chia theo từng ký tự: `"hello"|split` trả về `["h","e","l","l","o"]`.
- Có thể sử dụng biểu thức chính quy làm dấu phân cách: `"a1b2c3"|split:[0-9]` trả về `["a","b","c"]`.

### `template`

Áp dụng chuỗi mẫu cho đối tượng hoặc mảng đối tượng, bằng cú pháp `object|template:"Template with ${variable}"`.

- Truy cập thuộc tính lồng nhau: `{"gem":{"name":"Obsidian"}}|template:"${gem.name}"` trả về `"Obsidian"`.
- Với đối tượng: `{"gem":"obsidian","hardness":5}|template:"${gem} has a hardness of ${hardness}"` trả về `"obsidian has a hardness of 5"`.
- Với mảng: `[{"gem":"obsidian","hardness":5},{"gem":"amethyst","hardness":7}]|template:"- ${gem} has a hardness of ${hardness}\n"` trả về danh sách được định dạng.

Hoạt động với chuỗi literal từ `map` bằng `${str}`:

- Ví dụ: `["rock", "pop"]|map:item => "genres/${item}"|template:"- ${str}"` trả về danh sách được định dạng.

### `unique`

Xóa các giá trị trùng lặp khỏi mảng và đối tượng.

- Với mảng các giá trị nguyên thủy: `[1,2,2,3,3]|unique` trả về `[1,2,3]`.
- Với mảng đối tượng: `[{"a":1},{"b":2},{"a":1}]|unique` trả về `[{"a":1},{"b":2}]`.
- Với đối tượng, nó xóa các thuộc tính có giá trị trùng lặp, giữ lại khóa của lần xuất hiện cuối cùng.
- Với chuỗi, nó trả về đầu vào không thay đổi.
