Plugin Templates cho phép bạn chèn các đoạn văn bản vào ghi chú hiện tại của mình nhanh chóng.

### Thiết lập thư mục template

Mỗi đoạn code mẫu chỉ là một ghi chú Markdown bình thường, giống như mọi thứ khác trong Obsidian.

Để chỉ định các file mẫu, hãy đặt chúng vào một thư mục và chọn thư mục đó trong Settings -> Templates -> "Template folder location" sau khi bật plugin.

### Chèn template

Sau khi thiết lập vị trí thư mục, sử dụng biểu tượng dải băng để chèn template. Như mọi khi, bạn cũng có thể đặt hotkey cho tùy chọn này hoặc sử dụng bảng lệnh để truy cập nó.

Đoạn code mẫu sẽ được chèn vào vị trí dấu mũ hiện tại, với văn bản đặc biệt được thay thế bằng giá trị thực của chúng tại thời điểm chèn (xem bên dưới).

### Chèn tiêu đề

Nếu bạn muốn chèn tiêu đề của một ghi chú, bạn có thể đặt nó trong một template với `{{title}}`.

### Chèn ngày và giờ

Trong cài đặt plugin của Template, bạn cũng có thể đặt định dạng ngày tháng và định dạng thời gian.

Sau khi đặt các định dạng này, `{{date}}` và `{{time}}` trong file mẫu sẽ được thay thế bằng thời gian định dạng hiện tại.

Để biết tài liệu về cú pháp định dạng, [vui lòng xem tại đây](https://momentjs.com/docs/#/displaying/format/).

_Mẹo: nếu bạn muốn có hai định dạng ngày tháng hoặc hai định dạng thời gian, bạn có thể sử dụng `{{time}}` sau `{{date}}` hoặc `{{date}}` sau `{{time}}`._

### Định dạng ngày một lần

Ngoài `{{date}}` và `{{time}}`, sẽ hoạt động trong tất cả các file mẫu, bạn cũng có thể viết `{{date:YYYY-MM-DD}}` để chèn ngày bằng định dạng nhất định chỉ một lần. Điều này sẽ ghi đè định dạng `{{date}}`. Bất kỳ thứ gì sau dấu `:` sẽ được coi là một phần của định dạng ngày.

`{{time:HH:mm}}` hoạt động tương tự.

### Sử dụng định dạng ngày tùy chỉnh ở những nơi khác

Hiện tại, các ngày như `{{date:YYYY-MM-DD}}` và `{{time:HH:mm}}` cũng hoạt động trong file mẫu của [[Daily notes]] và plugin [[Zettelkasten prefixer]]. Tuy nhiên, `{{date}}` và `{{time}}` vẫn chưa hoạt động.
