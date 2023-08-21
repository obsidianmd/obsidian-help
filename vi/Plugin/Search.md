![[Search.png]]

Search là một tính năng mạnh mẽ và có khả năng gây nhầm lẫn. Trong hầu hết các trường hợp, nếu bạn chỉ cần nhập những gì bạn muốn tìm, nó sẽ hoạt động. Nhưng tìm kiếm có nhiều khả năng thu hẹp để tìm chính xác những gì bạn muốn.

## Mẹo nhanh

### Bắt đầu tìm kiếm

Bạn có thể gọi tìm kiếm bằng cách nhấn `Ctrl-Shift-F` hoặc `Cmd-Shift-F`. Bạn cũng có thể tùy chỉnh hotkey này trong Settings → Hotkeys. Khi tìm kiếm được gọi, tiêu điểm sẽ tự động được đưa vào thanh tìm kiếm để bạn có thể bắt đầu nhập truy vấn của mình ngay lập tức.

### Tìm kiếm văn bản đã chọn

Sau khi bạn chọn văn bản, bạn có thể tìm kiếm nó bằng cách gọi tìm kiếm như trên.

## Lịch sử tìm kiếm

Obsidian sẽ ghi nhớ các truy vấn tìm kiếm được sử dụng gần đây nhất của bạn.

Các truy vấn này sẽ được hiển thị cho bạn khi truy vấn tìm kiếm của bạn trống. Bạn có thể nhấp vào bất kỳ một trong số chúng để tìm kiếm lại, cho phép bạn dễ dàng chạy lại các truy vấn trước đó.

Để xóa lịch sử tìm kiếm, chỉ cần nhấp vào nút "X".

## Thiết lập tìm kiếm

Có một số chuyển đổi có sẵn trong khi tìm kiếm:

- `Match case` chuyển đổi giữa đối sánh phân biệt chữ hoa chữ thường, nhưng lưu ý rằng nó có thể được ghi đè trên cơ sở mỗi tìm kiếm bằng cách sử dụng các toán tử `match-case:` và `ignore-case:` đã giải thích ở trên.
- `Explain search term` sẽ hiển thị cho bạn những gì truy vấn tìm kiếm thực sự làm bằng các thuật ngữ đơn giản.
- `Collapse results` sẽ chuyển đổi giữa việc chỉ hiển thị các tên ghi chú phù hợp và hiển thị các dòng mà các kết quả phù hợp xuất hiện. Các kết quả mở rộng này có thể được chuyển đổi cho từng ghi chú bằng cách nhấp vào hình tam giác thu gọn bên cạnh tên file.
- `Show more context` sẽ mở rộng hiển thị các kết quả để hiển thị nhiều văn bản hơn xung quanh kết quả.
- `Change sort order` sắp xếp kết quả theo nhiều thứ tự khác nhau, tương tự như cách sắp xếp tệp trong [[File explorer]].

## Sao chép kết quả tìm kiếm

Để nhanh chóng và dễ dàng đưa các kết quả tìm kiếm của bạn vào danh sách, hãy sử dụng tùy chọn "copy search result".

Bạn có thể tùy chỉnh xem bạn có muốn hiển thị đường dẫn hay không, kiểu liên kết nào sẽ sử dụng (liên kết wikilink hoặc liên kết Markdown) và cách bạn muốn danh sách của mình xuất hiện.

## Nhúng kết quả tìm kiếm

Bạn có thể nhúng kết quả tìm kiếm vào một ghi chú.

Ví dụ, nếu bạn viết:

<pre><code>```query
embed OR search
```</code></pre>

Bạn sẽ thấy chế độ xem tìm kiếm được nhúng (lưu ý: nó không hoạt động trên [[Obsidian Publish]] 
kể từ 2020/01/18):

```query
embed OR search
```

## Cú pháp tìm kiếm

### Kết hợp các truy vấn phụ

Khi tạo một truy vấn tìm kiếm, hãy nhớ rằng việc nhấp vào "Explain Search Term" sẽ đưa ra lời giải thích về những gì đang được tìm kiếm, điều này có thể rất hữu ích khi gỡ lỗi một tìm kiếm phức tạp.

- Các từ trong truy vấn tìm kiếm cách nhau bởi dấu cách sẽ được tìm kiếm độc lập trong mỗi ghi chú. Ví dụ: `foo bar` sẽ tìm thấy một ghi chú bao gồm cả `foo` và `bar` ở bất kỳ đâu trong đó.
- `"Quoted strings"` có thể được sử dụng để tìm kiếm nhiều từ liên tiếp được phân tách bằng dấu cách, hay nói cách khác là một cụm từ. Vì vậy, tìm kiếm `"foo bar"` với dấu ngoặc kép sẽ chỉ tìm thấy các ghi chú bao gồm các từ đó bên cạnh nhau. Bạn có thể sử dụng dấu gạch chéo ngược `\"` để thoát khỏi dấu ngoặc kép nếu bạn thực sự muốn tìm kiếm một chuỗi bao gồm dấu ngoặc kép. Và `\\` sẽ làm tương tự đối với dấu gạch chéo ngược.
- Có thể sử dụng các phép toán Boolean. Sử dụng `OR` để so khớp một hoặc một khác. Sử dụng `-` để phủ định một truy vấn. Ký tự khoảng trắng được sử dụng cho boolean "and".
	- Ví dụ: `foo OR bar` sẽ tìm tất cả các ghi chú có chứa một trong hai từ đó, chúng không nhất thiết phải nằm trong cùng một ghi chú. `foo -bar` sẽ tìm thấy tất cả các ghi chú có chứa `foo`, nhưng không phải nếu chúng cũng chứa `bar`.
- Dấu ngoặc đơn có thể được sử dụng để nhóm các phép toán boolean. Ví dụ `((a OR b) (c OR d))`. Điều này có thể hữu ích khi tạo các tìm kiếm phức tạp để đảm bảo mọi thứ diễn ra theo thứ tự bạn muốn.
- Biểu thức chính quy (regex) hiện có thể được sử dụng trong tìm kiếm. Sử dụng dấu gạch chéo để biểu thị một biểu thức chính quy. Ví dụ: `/[a-z]{3}/`. Obsidian chấp nhận các biểu thức chính quy  JavaScript. Bạn có thể tìm hiểu thêm về nó [tại đây](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions).

### Toán tử tìm kiếm

Một số toán tử đặc biệt có sẵn. Một số toán tử cho phép các truy vấn lồng vào nhau bằng cách sử dụng dấu ngoặc đơn, ví dụ: `file:("to be" OR -"2B")`.

- `file:(...)` sẽ thực hiện truy vấn con sau trên tên file. Ví dụ: `file:.jpg`. Nếu bạn sử dụng Zettelkasten-style UID, điều này có thể hữu ích để thu hẹp phạm vi thời gian, ví dụ: `file:202007` cho các file được tạo vào tháng 7 năm 2020.
- `path:(...)` sẽ thực hiện truy vấn con sau trên đường dẫn file, tuyệt đối từ gốc. Ví dụ: `path:"Daily Notes/2020-07"`.
- `content:(...)` sẽ thực hiện truy vấn con sau trên đường dẫn nội dung file. Ví dụ: `content:"happy cat"`.
- `match-case:(...)` và `ignore-case(...):` sẽ ghi đè logic đối sánh phân biệt chữ hoa chữ thường cho truy vấn con sau.
- `tag:` sẽ tìm kiếm thẻ được chỉ định của bạn trong một, Ví dụ `tag:#work`. Điều này nhanh hơn và chính xác hơn so với tìm kiếm thẻ trong văn bản rõ ràng `#work`, vì nó sử dụng thông tin được lưu trong bộ nhớ cache và bỏ qua văn bản trong các khối mã và phần không phải là văn bản markdown.
- `line:(...)` sẽ thực hiện truy vấn con trên cơ sở từng dòng, thay vì từng file. Ví dụ, nếu bạn tìm kiếm `foo bar`, điều này có thể khớp với một file có `foo` trong đoạn đầu tiên và `bar` trong đoạn cuối cùng. Tìm kiếm `line:(foo bar)` sẽ chỉ khớp nếu `foo` và `bar` nằm trên cùng một dòng.
- `block:(...)` sẽ thực hiện truy vấn con trên cơ sở từng block, trong đó mỗi block được xác định là một block markdown, thường được phân tách bằng các dòng trống hoặc các mục danh sách. Điều này là tốn kém về mặt tính toán vì nó yêu cầu phân tích cú pháp từng file, có nghĩa là điều này có thể chậm hơn so với các chế độ khác.
- `section:(...)` sẽ thực hiện truy vấn con trên cơ sở từng phần, trong đó mỗi phần là văn bản nằm giữa hai tiêu đề, bao gồm cả tiêu đề đầu tiên.
- `task:(...)` sẽ chỉ thực hiện truy vấn con trên mỗi [[Định dạng ghi chú#Danh sách tác vụ|task]] và trên cơ sở từng block. Sử dụng `task:""` để đánh dấu tất cả các task.
- `task-todo:(...)` sẽ chỉ thực hiện truy vấn con trên mỗi task *chưa hoàn thành* [[Định dạng ghi chú#Danh sách tác vụ|task]] và trên cơ sở từng block. Sử dụng `task-todo:""` để đánh dấu tất cả các task chưa hoàn thành.
- `task-done:(...)` sẽ chỉ thực hiện truy vấn con trên mỗi *completed* [[Định dạng ghi chú#Danh sách tác vụ|task]] và trên cơ sở từng block. Sử dụng `task-done:""` để đánh dấu tất cả các task hoàn thành.
