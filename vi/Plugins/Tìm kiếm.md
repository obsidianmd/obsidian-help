---
permalink: plugins/search
publish: true
mobile: true
description: Search is a core plugin that helps you find data in your Obsidian vault by using search terms and operators to narrow down results.
aliases:
  - Plugin/Search
---
Tìm kiếm là một [[Plugin cốt lõi|plugin cốt lõi]] giúp bạn tìm dữ liệu trong kho Obsidian bằng cách sử dụng các từ khóa tìm kiếm và toán tử để thu hẹp kết quả.

Theo mặc định, bạn có thể tìm thấy Tìm kiếm ở thanh bên trái ![[lucide-search.svg#icon]]. Bạn cũng có thể mở Tìm kiếm bằng cách nhấn `Ctrl+Shift+F` (Windows/Linux) hoặc `Command+Shift+F` (macOS).

- **Tìm kiếm văn bản đã chọn**: Nếu bạn chọn văn bản trong trình chỉnh sửa và mở Tìm kiếm bằng phím tắt, Tìm kiếm sẽ hiển thị kết quả tìm kiếm cho văn bản đã chọn.
- **Tìm kiếm các từ khóa gần đây**: Mở Tìm kiếm với trường tìm kiếm trống để liệt kê các từ khóa tìm kiếm gần đây. Nhấp vào bất kỳ từ khóa nào để sử dụng lại.

> [!info] Tệp bị loại trừ
> Các tệp khớp với mẫu [[Cài đặt#Tệp bị loại trừ|Tệp bị loại trừ]] của bạn sẽ không xuất hiện trong kết quả Tìm kiếm.

## Từ khóa tìm kiếm

Từ khóa tìm kiếm là từ hoặc cụm từ mà bạn nhập vào trường tìm kiếm. Học cách viết từ khóa tìm kiếm hiệu quả có thể giúp bạn nhanh chóng tìm thấy những gì bạn đang tìm, ngay cả trong các kho lớn. Obsidian chỉ tìm kiếm nội dung của ghi chú và canvas.

> [!tip]- Tìm kiếm đường dẫn và tên tệp
> Theo mặc định, bạn chỉ có thể tìm kiếm đường dẫn và tên tệp của ghi chú và canvas. Để tìm kiếm đường dẫn hoặc tên tệp của bất kỳ tệp nào trong kho, hãy sử dụng toán tử `path` hoặc `file`.

Mỗi từ trong từ khóa tìm kiếm được khớp độc lập trong mỗi tệp. Để tìm kiếm một cụm từ chính xác, hãy đặt nó trong dấu ngoặc kép, ví dụ `"star wars"`. Để tìm kiếm văn bản có dấu ngoặc kép trong một cụm từ chính xác, bạn có thể _thoát_ dấu ngoặc kép bằng cách thêm dấu gạch chéo ngược (`\`) trước dấu ngoặc kép, ví dụ `"they said \"hello\" to each other"`.

Bạn có thể kiểm soát việc trả về các tệp chứa _tất cả_ các từ trong từ khóa tìm kiếm, hay _bất kỳ_ từ nào:

- `meeting work` trả về các tệp chứa cả `meeting` và `work`.
- `meeting OR work` trả về các tệp chứa `meeting` hoặc `work`.

Bạn thậm chí có thể kết hợp cả hai trong cùng một từ khóa tìm kiếm.

- `meeting work OR meetup personal` trả về các tệp cho các cuộc họp công việc và các buổi gặp mặt cá nhân.

Bạn có thể sử dụng dấu ngoặc đơn để kiểm soát mức độ ưu tiên của mỗi biểu thức.

- `meeting (work OR meetup) personal` trả về các tệp chứa `meeting`, `personal`, và `work` hoặc `meetup`.

Để loại trừ, hoặc phủ định, một từ khỏi kết quả tìm kiếm, thêm dấu gạch ngang (`-`) trước nó:

- `meeting -work` trả về các tệp chứa `meeting` nhưng không chứa `work`.

Bạn có thể loại trừ nhiều biểu thức:

- `meeting -work -meetup` trả về các tệp chứa `meeting` nhưng không chứa `work` hoặc `meetup`.

Bạn có thể loại trừ một tổ hợp biểu thức bằng dấu ngoặc đơn:

- `meeting -(work meetup)` trả về các tệp chứa `meeting` nhưng không chứa _cả_ `work` và `meetup`.

Để lọc kết quả bằng toán tử nhỏ hơn (`<`) và lớn hơn (`>`), hãy đặt chúng trong dấu ngoặc vuông (`[]`) hoặc dấu ngoặc kép (`""`):

- `meeting [duration:<5]` trả về các tệp có chứa meeting và duration nhỏ hơn 5.
- `meeting [duration:>5]` trả về các tệp có chứa meeting và duration lớn hơn 5.

> [!tip]- Giải thích từ khóa tìm kiếm
> Nếu bạn cần gỡ lỗi một từ khóa tìm kiếm phức tạp, bạn có thể nhấp **Giải thích từ khóa tìm kiếm** trong Tìm kiếm để xem giải thích về từ khóa tìm kiếm của bạn.

## Toán tử tìm kiếm

Toán tử tìm kiếm cho phép các từ khóa tìm kiếm chi tiết hơn để lọc kết quả của bạn hiệu quả hơn.

Một số toán tử thậm chí cho phép bạn thêm một từ khóa tìm kiếm lồng nhau trong dấu ngoặc đơn, ví dụ: `task:(call OR email)`.

| Toán tử tìm kiếm | Mô tả                                                                                                                                                                                                                                                                                                        |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `file:`         | Tìm văn bản trong tên tệp. Khớp với bất kỳ tệp nào trong kho.<p/>Ví dụ: `file:.jpg` hoặc `file:202209`.                                                                                                                                                                                                                    |
| `path:`         | Tìm văn bản trong đường dẫn tệp. Khớp với bất kỳ tệp nào trong kho.<p/>Ví dụ: `path:"Daily notes/2022-07"`.                                                                                                                                                                                                                   |
| `content:`      | Tìm văn bản trong nội dung tệp.<p/>Ví dụ: `content:"happy cat"`.                                                                                                                                                                                                                                                      |
| `match-case:`   | Khớp phân biệt chữ hoa/thường.<p/>Ví dụ: `match-case:HappyCat`.                                                                                                                                                                                                                                                           |
| `ignore-case:`  | Khớp không phân biệt chữ hoa/thường.<p/>Ví dụ: `ignore-case:ikea`.                                                                                                                                                                                                                                                            |
| `tag:`          | Tìm thẻ trong tệp.<p/>Ví dụ: `tag:#work`.<p/>Lưu ý rằng tìm kiếm `tag:#work` sẽ không trả về kết quả cho `#myjob/work`.<br /><br />**Lưu ý**: Vì `tag:` bỏ qua các khớp trong khối mã và trong nội dung không phải Markdown, nên thường nhanh hơn và chính xác hơn so với tìm kiếm toàn văn bản thông thường cho `#work`. |
| `line:`         | Tìm các tệp chứa ít nhất một dòng khớp với `x`.<p/>Ví dụ: `line:(mix flour)`.<p/><br>**Lưu ý:** Sử dụng `-line` sẽ phủ định tìm kiếm, nghĩa là sẽ tìm các tệp mà không có dòng nào khớp với `x`.                                                                                                                   |
| `block:`        | Tìm các khớp trong cùng một khối.<p/>Ví dụ: `block:(dog cat)`.<p/>**Lưu ý**: Vì `block:` yêu cầu Tìm kiếm phân tích nội dung Markdown trong mỗi tệp, nên có thể khiến từ khóa tìm kiếm của bạn mất nhiều thời gian hơn để hoàn thành.                                                                                               |
| `section:`      | Tìm các khớp trong cùng một phần (văn bản giữa hai tiêu đề).<p/>Ví dụ: `section:(dog cat)`.                                                                                                                                                                                                                     |
| `task:`         | Tìm các khớp trong một [[Cú pháp định dạng cơ bản#Danh sách công việc\|công việc]] trên cơ sở từng khối.<p/>Ví dụ: `task:call`.                                                                                                                                                                                                 |
| `task-todo:`    | Tìm các khớp trong một [[Cú pháp định dạng cơ bản#Danh sách công việc\|công việc]] *chưa hoàn thành* trên cơ sở từng khối.<p/>Ví dụ: `task-todo:call`.                                                                                                                                                                             |
| `task-done:`    | Tìm các khớp trong một [[Cú pháp định dạng cơ bản#Danh sách công việc\|công việc]] *đã hoàn thành* trên cơ sở từng khối.<p/>Ví dụ: `task-done:call`.                                                                                                                                                                                |

## Tìm kiếm thuộc tính

Bạn có thể sử dụng dữ liệu được lưu trữ trong [[Thuộc tính]] trong các từ khóa tìm kiếm của bạn.

Sử dụng dấu ngoặc vuông quanh tên thuộc tính `[property]` để trả về các tệp có thuộc tính đó:

- `[aliases]` trả về các tệp chứa thuộc tính `aliases`

Sử dụng dấu ngoặc vuông và dấu hai chấm `[property:value]` để trả về các tệp có thuộc tính và giá trị đó:

- `[aliases:Name]` trả về các tệp trong đó giá trị thuộc tính `aliases` là `Name`

Sử dụng `null` làm giá trị để tìm các thuộc tính không có giá trị:

- `[aliases:null]` trả về các tệp trong đó thuộc tính `aliases` tồn tại nhưng không có giá trị

> [!info]+ Giá trị trống
> Toán tử `null` hoạt động khi một thuộc tính trống (ví dụ: `aliases: `), nhưng không hoạt động khi thuộc tính chứa dấu ngoặc kép trống (`""`) hoặc dấu ngoặc vuông trống (`[]`).

Cả thuộc tính và giá trị đều cho phép các truy vấn con, chẳng hạn như dấu ngoặc đơn để nhóm, toán tử `OR`, dấu ngoặc kép để khớp chính xác, và biểu thức chính quy.

- `[status:Draft OR Published]` trả về các tệp trong đó giá trị thuộc tính `status` là `Draft` hoặc `Published`

## Thay đổi phân biệt chữ hoa/thường

Theo mặc định, các từ khóa tìm kiếm không phân biệt chữ hoa/thường. Nếu bạn muốn tìm kiếm chính xác chữ hoa/thường của từ khóa tìm kiếm, hãy chọn **Khớp chữ hoa/thường** ![[obsidian-icon-upper-lowercase.svg#icon]] bên trong thanh tìm kiếm.

Cài đặt này có thể bật/tắt. Nếu biểu tượng **Khớp chữ hoa/thường** được tô sáng, điều đó có nghĩa là bạn đang thực hiện tìm kiếm phân biệt chữ hoa/thường.

## Thay đổi thứ tự sắp xếp kết quả

1. Nhập một [[#Từ khóa tìm kiếm|từ khóa tìm kiếm]].
2. Dưới trường tìm kiếm, chọn menu thả xuống ở bên phải.
3. Chọn thứ tự sắp xếp bạn muốn. Mặc định là "Sắp xếp theo tên tệp (A đến Z)".

Các tùy chọn có sẵn sau:

- Sắp xếp theo tên tệp (A đến Z)
- Sắp xếp theo tên tệp (Z đến A)
- Sắp xếp theo thời gian chỉnh sửa (mới đến cũ)
- Sắp xếp theo thời gian chỉnh sửa (cũ đến mới)
- Thời gian tạo (mới đến cũ)
- Thời gian tạo (cũ đến mới)

## Sao chép kết quả tìm kiếm

1. Nhập một [[#Từ khóa tìm kiếm|từ khóa tìm kiếm]].
2. Dưới trường tìm kiếm, chọn biểu tượng ba chấm bên cạnh số lượng kết quả.
3. Chọn **Sao chép kết quả tìm kiếm**.

## Sử dụng biểu thức chính quy

Biểu thức chính quy là một tập hợp các ký tự mô tả một mẫu văn bản. Để sử dụng biểu thức chính quy trong từ khóa tìm kiếm, hãy đặt biểu thức trong dấu gạch chéo (`/`).

- `/\d{4}-\d{2}-\d{2}/` khớp với ngày ISO 8601, chẳng hạn như 2022-01-01.

Bạn thậm chí có thể kết hợp biểu thức chính quy với các toán tử tìm kiếm:

- `path:/\d{4}-\d{2}-\d{2}/` trả về các tệp có ngày trong đường dẫn tệp.

Để biết thêm thông tin về cách viết biểu thức chính quy, hãy tham khảo [Hướng dẫn Regex thực hành](https://www.freecodecamp.org/news/practical-regex-guide-with-real-life-examples/) của FreeCodeCamp hoặc [Biểu thức chính quy](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) của Mozilla.

> [!info]+ Biểu thức chính quy theo phong cách JavaScript
> Biểu thức chính quy có nhiều phong cách khác nhau có thể trông khác nhau. Obsidian sử dụng biểu thức chính quy theo phong cách JavaScript.

## Cấu hình cài đặt tìm kiếm

Để cấu hình Tìm kiếm, hãy chọn **Cài đặt tìm kiếm** ![[lucide-sliders-horizontal.svg#icon]] ở phía bên phải của thanh tìm kiếm để xem các tùy chọn bật/tắt.

| Cài đặt                 | Mô tả                                                                 |
|-------------------------|-----------------------------------------------------------------------------|
| **Giải thích từ khóa tìm kiếm** | Phân tích các từ khóa tìm kiếm và giải thích bằng văn bản thuần.                 |
| **Thu gọn kết quả**    | Bật/tắt hiển thị ngữ cảnh tìm kiếm.                                 |
| **Hiển thị nhiều ngữ cảnh hơn**   | Mở rộng kết quả tìm kiếm để hiển thị thêm văn bản xung quanh kết quả khớp.               |

## Nhúng kết quả tìm kiếm vào ghi chú

Để nhúng kết quả tìm kiếm vào ghi chú, hãy thêm một khối mã `query`:

````
```query
embed OR search
```
````

[[Giới thiệu về Obsidian Publish|Obsidian Publish]] không hỗ trợ [[Giới hạn của Publish#Tìm kiếm|kết quả tìm kiếm]] được nhúng. Để xem ví dụ hiển thị trực tiếp, hãy sử dụng khối mã trên trong kho của bạn.

![[search-query-rendered.png]]
