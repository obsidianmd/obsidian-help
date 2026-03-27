---
permalink: bases/syntax
publish: true
mobile: true
description: Trang này cung cấp phần giới thiệu về cú pháp Bases trong Obsidian.
---
Khi bạn [[Tạo một cơ sở|tạo một cơ sở]] trong Obsidian, nó được lưu dưới dạng tệp `.base`. Cơ sở thường được chỉnh sửa bằng giao diện ứng dụng, nhưng cú pháp cũng có thể được chỉnh sửa thủ công và nhúng trong một khối mã.

Cú pháp [[Giới thiệu về Cơ sở|Cơ sở]] định nghĩa [[Các chế độ xem]], bộ lọc và [[Công thức|công thức]]. Cơ sở phải là YAML hợp lệ tuân theo lược đồ được định nghĩa bên dưới.

## Ví dụ

Đây là một ví dụ về tệp cơ sở. Chúng ta sẽ đi qua từng phần chi tiết.

```yaml
filters:
  or:
    - file.hasTag("tag")
    - and:
        - file.hasTag("book")
        - file.hasLink("Textbook")
    - not:
        - file.hasTag("book")
        - file.inFolder("Required Reading")
formulas:
  formatted_price: 'if(price, price.toFixed(2) + " dollars")'
  ppu: "(price / age).toFixed(2)"
properties:
  status:
    displayName: Status
  formula.formatted_price:
    displayName: "Price"
  file.ext:
    displayName: Extension
summaries:
  customAverage: 'values.mean().round(3)'
views:
  - type: table
    name: "My table"
    limit: 10
    groupBy:
      property: note.age
      direction: DESC
    filters:
      and:
        - 'status != "done"'
        - or:
            - "formula.ppu > 5"
            - "price > 2.1"
    order:
      - file.name
      - file.ext
      - note.age
      - formula.ppu
      - formula.formatted_price
    summaries:
      formula.ppu: Average
```

### Bộ lọc

Theo mặc định, một cơ sở bao gồm mọi tệp trong kho. Không có `from` hoặc `source` như trong SQL hoặc Dataview. Phần `filters` cho phép bạn định nghĩa các điều kiện để thu hẹp tập dữ liệu.

```yaml
# Bộ lọc đơn giản:
filters:
  and:
    - file.hasTag("tag")

# Bộ lọc phức tạp:
filters:
  or:
    - file.hasTag("tag")
    - and:
        - file.hasTag("book")
        - file.hasLink("Textbook")
    - not:
        - file.hasTag("book")
        - file.inFolder("Required Reading")
```

Có hai cơ hội để áp dụng bộ lọc:

1. Ở cấp `filters` toàn cục (như trên) nơi chúng áp dụng cho tất cả các chế độ xem trong cơ sở.
2. Ở cấp `view` nơi chúng chỉ áp dụng cho một chế độ xem cụ thể.

Hai phần này có chức năng tương đương và khi đánh giá cho một chế độ xem, chúng sẽ được nối với nhau bằng `AND`.

Phần `filters` chứa một câu lệnh lọc đơn dưới dạng chuỗi, hoặc một đối tượng lọc được định nghĩa đệ quy. Các đối tượng lọc có thể chứa một trong `and`, `or`, hoặc `not`. Các khóa này là một danh sách hỗn hợp gồm các đối tượng lọc khác hoặc các câu lệnh lọc trong chuỗi. Một câu lệnh lọc là một dòng đánh giá thành đúng hoặc sai khi áp dụng cho một ghi chú. Nó có thể là một trong các loại sau:

- Một phép so sánh cơ bản sử dụng các toán tử số học tiêu chuẩn.
- Một hàm. Nhiều [[Hàm]] được tích hợp sẵn, và các plugin có thể bổ sung thêm các hàm.

Cú pháp và các hàm có sẵn cho bộ lọc và công thức là giống nhau.

### Công thức

Phần `formulas` định nghĩa [[Công thức|thuộc tính công thức]] có thể được hiển thị trên tất cả các chế độ xem trong tệp cơ sở.

```yaml
formulas:
  formatted_price: 'if(price, price.toFixed(2) + " dollars")'
  ppu: "(price / age).toFixed(2)"
```

Thuộc tính công thức hỗ trợ các toán tử số học cơ bản và nhiều [[Hàm]] tích hợp sẵn. Trong tương lai, các plugin sẽ có thể thêm các hàm để sử dụng trong công thức.

Bạn có thể tham chiếu thuộc tính theo các cách khác nhau tùy thuộc vào loại của chúng:

- **Thuộc tính ghi chú** là các thuộc tính được định nghĩa trong siêu dữ liệu đầu tệp của ghi chú. Ví dụ `note.price` hoặc `note["price"]`.
  Nếu không chỉ định tiền tố, thuộc tính được giả định là thuộc tính `note`.
- **Thuộc tính tệp** mô tả chính tệp đó.
  Ví dụ `file.size` hoặc `file.ext`. Bạn cũng có thể tham chiếu trực tiếp đối tượng tệp, ví dụ `file.hasLink()`.
- **Thuộc tính công thức** là các công thức khác trong cơ sở.
  Ví dụ `formula.formatted_price`.

Một công thức có thể sử dụng giá trị từ các thuộc tính công thức khác, miễn là không có tham chiếu vòng.

Thuộc tính công thức luôn được lưu trữ dưới dạng chuỗi trong YAML, nhưng **kiểu dữ liệu đầu ra** thực tế của chúng được xác định bởi kiểu dữ liệu cơ bản và giá trị trả về của bất kỳ hàm nào được sử dụng.

Lưu ý việc sử dụng dấu ngoặc kép lồng nhau là cần thiết để bao gồm các chuỗi ký tự văn bản trong trường YAML. Các chuỗi ký tự văn bản phải được bao trong dấu ngoặc đơn hoặc dấu ngoặc kép.

### Thuộc tính

Phần `properties` cho phép lưu trữ thông tin cấu hình về mỗi thuộc tính. Cách sử dụng các giá trị cấu hình này tùy thuộc vào từng chế độ xem. Ví dụ, trong bảng, tên hiển thị được sử dụng cho tiêu đề cột.

```yaml
properties:
  status:
    displayName: Status
  formula.formatted_price:
    displayName: "Price"
  file.ext:
    displayName: Extension
```

Tên hiển thị không được sử dụng trong bộ lọc hoặc công thức.

### Tóm tắt

Phần `summaries` có thể được sử dụng để định nghĩa các công thức tóm tắt tùy chỉnh. Ngoài việc định nghĩa công thức tóm tắt ở đây, có một số công thức tóm tắt mặc định có sẵn.

```yaml
summaries:
  customAverage: 'values.mean().round(3)'
```

Trong ví dụ này, công thức `customAverage` giống với `Average` mặc định, ngoại trừ giá trị được làm tròn đến số chữ số thập phân khác. Trong các công thức tóm tắt, từ khóa `values` là một danh sách chứa tất cả các giá trị cho thuộc tính đó trên mọi ghi chú trong tập kết quả. Công thức tóm tắt nên trả về một `Value` đơn.

Lưu ý rằng phần `summaries` này khác với phần `summaries` trong cấu hình chế độ xem (được giải thích bên dưới) nơi các công thức tóm tắt được gán cho các thuộc tính cụ thể.

#### Công thức tóm tắt mặc định

| Tên       | Kiểu đầu vào | Mô tả                                                        |
| --------- | ------------- | ------------------------------------------------------------- |
| Average   | Số            | Giá trị trung bình cộng của tất cả các số từ giá trị đầu vào. |
| Min       | Số            | Số nhỏ nhất từ giá trị đầu vào.                              |
| Max       | Số            | Số lớn nhất từ giá trị đầu vào.                              |
| Sum       | Số            | Tổng của tất cả các số trong đầu vào.                        |
| Range     | Số            | Hiệu giữa `Max` và `Min`.                                    |
| Median    | Số            | Giá trị trung vị toán học của tất cả các số từ giá trị đầu vào. |
| Stddev    | Số            | Độ lệch chuẩn của tất cả các số từ giá trị đầu vào.         |
| Earliest  | Ngày          | Ngày sớm nhất từ giá trị đầu vào.                            |
| Latest    | Ngày          | Ngày muộn nhất từ giá trị đầu vào.                           |
| Range     | Ngày          | Hiệu giữa `Latest` và `Earliest`.                            |
| Checked   | Boolean       | Số lượng giá trị `true`.                                      |
| Unchecked | Boolean       | Số lượng giá trị `false`.                                     |
| Empty     | Bất kỳ        | Số lượng giá trị trong đầu vào là trống.                     |
| Filled    | Bất kỳ        | Số lượng giá trị trong đầu vào không trống.                  |
| Unique    | Bất kỳ        | Số lượng giá trị duy nhất trong đầu vào.                     |

### Các chế độ xem

Phần `views` định nghĩa cách dữ liệu có thể được hiển thị. Mỗi mục trong danh sách `views` định nghĩa một chế độ xem riêng biệt của cùng một dữ liệu, và có thể có nhiều chế độ xem khác nhau tùy ý.

```yaml
views:
  - type: table
    name: "My table"
    limit: 10
    groupBy:
      property: note.age
      direction: DESC
    filters:
      and:
        - 'status != "done"'
        - or:
            - "formula.ppu > 5"
            - "price > 2.1"
    order:
      - file.name
      - file.ext
      - note.age
      - formula.ppu
      - formula.formatted_price
    summaries:
      formula.ppu: Average
```

- `type` chọn từ các kiểu chế độ xem tích hợp sẵn và do plugin thêm vào.
- `name` là tên hiển thị, và có thể được sử dụng để định nghĩa chế độ xem mặc định.
- `filters` hoàn toàn giống như mô tả ở trên, nhưng chỉ áp dụng cho chế độ xem đó.
- `groupBy` chỉ định một thuộc tính và hướng sắp xếp. Giá trị của thuộc tính được chỉ định cho mỗi hàng được sử dụng để đặt hàng vào các nhóm.
- `summaries` ánh xạ tên thuộc tính đến một tóm tắt có tên. Tóm tắt thực hiện phép tổng hợp trên thuộc tính trên tất cả các hàng.

[[Các chế độ xem]] có thể thêm dữ liệu bổ sung để lưu trữ bất kỳ thông tin nào cần thiết để duy trì trạng thái hoặc hiển thị đúng cách, tuy nhiên các tác giả plugin nên cẩn thận không sử dụng các khóa đã được plugin Cơ sở cốt lõi sử dụng. Ví dụ, một chế độ xem bảng có thể sử dụng điều này để giới hạn số hàng hoặc để chọn cột nào được sử dụng để sắp xếp hàng và theo hướng nào. Một kiểu chế độ xem khác như bản đồ có thể sử dụng điều này để ánh xạ thuộc tính nào trong ghi chú tương ứng với vĩ độ và kinh độ và thuộc tính nào sẽ được hiển thị làm tiêu đề ghim.

Trong tương lai, API sẽ cho phép các chế độ xem đọc và ghi các giá trị này, cho phép chế độ xem xây dựng giao diện cấu hình riêng của mình.

## Thuộc tính

Có ba loại thuộc tính được sử dụng trong cơ sở:

1. **Thuộc tính ghi chú**, được lưu trữ trong siêu dữ liệu đầu tệp của các tệp Markdown.
2. **Thuộc tính tệp**, có thể truy cập cho tất cả các loại tệp.
3. **Thuộc tính công thức**, được định nghĩa trong chính tệp `.base` (xem ở trên).

### Thuộc tính ghi chú

[[Thuộc tính|Thuộc tính ghi chú]] chỉ khả dụng cho các tệp Markdown, và được lưu trữ trong siêu dữ liệu đầu tệp YAML của mỗi ghi chú. Các thuộc tính này có thể được truy cập bằng định dạng `note.author` hoặc đơn giản là `author` dưới dạng viết tắt.

### Thuộc tính tệp

Thuộc tính tệp tham chiếu đến tệp hiện đang được kiểm tra hoặc đánh giá. Thuộc tính tệp có sẵn cho tất cả [[Định dạng tệp được hỗ trợ|các loại tệp]], bao gồm tệp đính kèm.

Ví dụ, bộ lọc `file.ext == "md"` sẽ đúng cho tất cả các tệp Markdown và sai trong các trường hợp khác.

| Thuộc tính    | Kiểu   | Mô tả                                                        |
| ------------- | ------ | ------------------------------------------------------------- |
| `file.backlinks`  | Danh sách | Danh sách các tệp liên kết ngược. Lưu ý: Thuộc tính này tốn nhiều hiệu năng. Khi có thể, hãy đảo ngược tra cứu và sử dụng `file.links`. Không tự động làm mới kết quả khi kho bị thay đổi. |
| `file.ctime`  | Ngày   | Thời gian tạo                                                |
| `file.embeds` | Danh sách | Danh sách tất cả các nhúng trong ghi chú                    |
| `file.ext`    | Chuỗi  | Phần mở rộng tệp                                            |
| `file.file`   | Tệp    | Đối tượng tệp, chỉ sử dụng được trong các hàm cụ thể       |
| `file.folder` | Chuỗi  | Đường dẫn thư mục tệp                                       |
| `file.links`  | Danh sách | Danh sách tất cả liên kết nội bộ trong ghi chú, bao gồm siêu dữ liệu đầu tệp |
| `file.mtime`  | Ngày   | Thời gian sửa đổi                                           |
| `file.name`   | Chuỗi  | Tên tệp                                                     |
| `file.path`   | Chuỗi  | Đường dẫn tệp                                               |
| `file.properties`   | Đối tượng | Tất cả thuộc tính trên tệp. Lưu ý: Không tự động làm mới kết quả khi kho bị thay đổi. |
| `file.size`   | Số     | Kích thước tệp                                              |
| `file.tags`   | Danh sách | Danh sách tất cả các thẻ trong nội dung tệp và siêu dữ liệu đầu tệp |

### Truy cập thuộc tính với `this`

Sử dụng đối tượng `this` để truy cập thuộc tính tệp. `this` tham chiếu đến gì sẽ phụ thuộc vào nơi cơ sở được hiển thị.

Khi cơ sở được mở trong vùng nội dung chính, `this` trỏ đến thuộc tính của chính tệp cơ sở. Ví dụ, sử dụng `this.file.folder` trả về đường dẫn thư mục nơi cơ sở được đặt.

Khi cơ sở được nhúng trong một tệp khác, `this` trỏ đến thuộc tính của tệp _nhúng_ (ghi chú hoặc Canvas chứa cơ sở). Ví dụ, sử dụng `this.file.name` trả về tên của tệp nhúng, không phải cơ sở.

Khi cơ sở ở trong thanh bên, `this` tham chiếu đến tệp đang hoạt động trong vùng nội dung chính. Điều này cho phép bạn tạo truy vấn dựa trên tệp đang hoạt động. Ví dụ, bạn có thể sử dụng `file.hasLink(this.file)` để tái tạo bảng liên kết ngược.

## Toán tử

### Toán tử số học

Toán tử số học thực hiện phép tính số học trên các số. Ví dụ, `radius * (2 * 3.14)`.

| Toán tử  | Mô tả     |
| -------- | --------- |
| `+`      | cộng      |
| `-`      | trừ       |
| `*`      | nhân      |
| `/`      | chia      |
| `%`      | modulo    |
| `( )`    | ngoặc đơn |

### Phép tính ngày tháng

Ngày tháng có thể được sửa đổi bằng cách cộng và trừ khoảng thời gian. Đơn vị khoảng thời gian chấp nhận nhiều định dạng:

| Đơn vị                   | Khoảng thời gian |
| ------------------------ | ---------------- |
| `y`, `year`, `years`     | năm              |
| `M`, `month`, `months`   | tháng            |
| `d`, `day`, `days`       | ngày             |
| `w`, `week`, `weeks`     | tuần             |
| `h`, `hour`, `hours`     | giờ              |
| `m`, `minute`, `minutes` | phút             |
| `s`, `second`, `seconds` | giây             |

Để sửa đổi hoặc dịch chuyển đối tượng Ngày, sử dụng toán tử `+` hoặc `-` với một chuỗi khoảng thời gian. Ví dụ, `date + "1M"` thêm 1 tháng vào ngày, trong khi `date - "2h"` trừ 2 giờ khỏi ngày.

[[Hàm|Hàm]] toàn cục `today()` có thể được sử dụng để lấy ngày hiện tại, và `now()` có thể được sử dụng để lấy ngày hiện tại kèm giờ.

- `now() + "1 day"` trả về một ngày giờ chính xác 24 giờ kể từ thời điểm thực thi.
- `file.mtime > now() - "1 week"` trả về `true` nếu tệp được sửa đổi trong vòng một tuần qua.
- `date("2024-12-01") + "1M" + "4h" + "3m"` trả về một đối tượng Ngày biểu diễn `2025-01-01 04:03:00`.
- Trừ hai ngày để lấy hiệu millisecond giữa hai ngày, ví dụ, `now() - file.ctime`.
- Để lấy phần ngày của một Ngày có giờ, sử dụng `datetime.date()`.
- Để định dạng một đối tượng Ngày, sử dụng hàm `format()`, ví dụ `datetime.format("YYYY-MM-DD")`.

### Toán tử so sánh

Toán tử so sánh có thể được sử dụng để so sánh các số, hoặc đối tượng Ngày. Bằng và không bằng có thể được sử dụng với bất kỳ loại giá trị nào, không chỉ số và ngày.

| Toán tử  | Mô tả                  |
| -------- | ---------------------- |
| `==`     | bằng                   |
| `!=`     | không bằng             |
| `>`      | lớn hơn               |
| `<`      | nhỏ hơn               |
| `>=`     | lớn hơn hoặc bằng     |
| `<=`     | nhỏ hơn hoặc bằng     |

### Toán tử logic

Toán tử logic có thể được sử dụng để kết hợp hoặc đảo ngược các giá trị logic, cho kết quả là giá trị đúng hoặc sai.

| Toán tử  | Mô tả       |
| -------- | ----------- |
| `!`      | phủ định logic |
| `&&`     | và logic    |
| \|\|     | hoặc logic  |

## Hàm

Xem [[Hàm|danh sách các hàm]] có thể được sử dụng trong công thức và [[Các chế độ xem|bộ lọc]].

## Kiểu dữ liệu

Cơ sở có một hệ thống kiểu dữ liệu được sử dụng bởi công thức và bộ lọc để áp dụng các hàm cho thuộc tính.

### Chuỗi, số và boolean

Chuỗi, số và boolean là các giá trị "nguyên thủy" không cần hàm để tạo.

- Chuỗi được bao trong dấu ngoặc đơn hoặc kép, ví dụ `"message"`.
- Số được viết dưới dạng chữ số, và có thể tùy chọn được bao trong ngoặc đơn cho rõ ràng. Ví dụ, `1` hoặc `(2.5)`.
- Boolean được viết là `true` hoặc `false` không có dấu ngoặc kép.

### Ngày và khoảng thời gian

Ngày biểu diễn một ngày cụ thể, hoặc một ngày và giờ tùy thuộc vào hàm được sử dụng để tạo chúng, hoặc kiểu đã được gán cho [[Thuộc tính|thuộc tính]].

- Để tạo một ngày, sử dụng hàm `date`, ví dụ `date("2025-01-01 12:00:00")`
- Để sửa đổi một ngày, cộng hoặc trừ một khoảng thời gian, ví dụ `now() + "1 hour"` hoặc `today() + "7d"`
- So sánh ngày bằng toán tử so sánh (ví dụ `>` hoặc `<`) và toán tử số học (ví dụ, `(now() + "1d") - now()` trả về `86400000` millisecond.)
- Để trích xuất các phần của một ngày, sử dụng các trường có sẵn (`now().hour`), hoặc hàm tiện ích (`now.time()`).
- Nhiều [[Hàm|trường và hàm]] khác có sẵn trên đối tượng ngày.

### Đối tượng và danh sách

- Chuyển một phần tử đơn thành danh sách bằng hàm `list()`. Điều này đặc biệt hữu ích cho các thuộc tính có thể chứa hỗn hợp danh sách hoặc giá trị đơn.
- Truy cập các phần tử danh sách bằng dấu ngoặc vuông và chỉ số bắt đầu từ 0. Ví dụ, `property[0]` trả về phần tử đầu tiên từ danh sách.
- Truy cập các phần tử đối tượng bằng dấu ngoặc vuông và tên phần tử hoặc ký pháp dấu chấm. Ví dụ, `property.subprop` hoặc `property["subprop"]`.

### Tệp và liên kết

[[Liên kết ghi chú|Liên kết wiki]] trong [[Thuộc tính|thuộc tính siêu dữ liệu đầu tệp]] được tự động nhận dạng là đối tượng Liên kết. Liên kết sẽ hiển thị dưới dạng liên kết có thể nhấp trong [[Các chế độ xem|chế độ xem]].

- Để tạo một liên kết, sử dụng [[Hàm|hàm]] toàn cục `link`, ví dụ `link("filename")` hoặc `link("https://obsidian.md")`.
- Bạn có thể tạo liên kết từ bất kỳ chuỗi nào, ví dụ, `link(file.ctime.date().toString())`.
- Để đặt văn bản hiển thị, truyền vào một chuỗi hoặc biểu tượng tùy chọn làm tham số thứ hai, ví dụ `link("filename", "display")` hoặc `link("filename", icon("plus"))`.

Một đối tượng Tệp có thể được chuyển thành liên kết bằng `file.asLink()` với văn bản hiển thị tùy chọn.

Liên kết có thể được so sánh với `==` và `!=`. Chúng tương đương miễn là chúng trỏ đến cùng một tệp, hoặc nếu tệp không tồn tại khi tra cứu, văn bản liên kết của chúng phải giống hệt nhau.

Liên kết có thể được so sánh với tệp như `file` hoặc `this`. Chúng sẽ bằng nhau nếu liên kết phân giải đến tệp đó. Ví dụ, `author == this`.

Liên kết cũng có thể được kiểm tra trong phép chứa danh sách, ví dụ, `authors.contains(this)`.
