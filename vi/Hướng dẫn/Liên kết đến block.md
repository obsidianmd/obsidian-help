Trong Obsidian 0.9.5 trở lên, ngoài [[Liên kết nội bộ#Liên kết đến tiêu đề|liên kết đến tiêu đề]], bạn cũng có thể liên kết tới các khối.

### Khối (Block) là gì?

Một "block" có thể là một đoạn, một trích dẫn, một mục danh sách v.v... Nói chung, bất kỳ thứ gì có dòng trống trước và sau đều có thể được coi là một block. ^dcf64c

### Liên kết đến block

Để liên kết đến một block trong một file cụ thể, trước tiên hãy nhập `[[filename` để hiển thị danh sách các file phù hợp. Sau khi chọn một file, hãy nhập `^` và tiếp tục nhập để tìm kiếm các block để liên kết..

Sau khi bạn nhấn enter, một liên kết đến block đó sẽ được tạo cho bạn, ở định dạng tương tự như `[[filename#^dcf64c]]`, trong đó `dcf64c` là block ID vừa được tạo cho bạn.

Nếu bạn không chắc chắn block đó nằm trong file nào, hãy nhập `[[^^` và tìm kiếm các block trong tất cả các file. Thao tác này sẽ tìm kiếm thông qua tất cả các khối trong vault của bạn, vì vậy hãy mong đợi một chút thời gian nếu vault của bạn lớn.

Ví dụ: [[#^dcf64c]] là một liên kết đến một block ở trên.

### Nhúng hoặc chuyển các block

Tương tự như [[Nhúng file|nhúng file]], bạn có thể chỉ cần sử dụng dấu `!` trước một liên kết đến block để nhúng nó.

Đây là một ví dụ:

![[#^dcf64c]]

### Block ID thủ công

Nếu bạn muốn sử dụng block ID, hãy nhập thủ công `^your-id` đã xác định sau block. Đảm bảo có ít nhất một khoảng trắng nếu bạn đặt ID ở cuối dòng.

Để tham chiếu đến các block phức tạp như bảng, hãy đặt block ID của chính nó sau block và đảm bảo có một dòng trống cả trước và sau block ID.

Sau khi bạn thêm block ID theo cách thủ công, khi bạn tham chiếu đến block đó, `your-id` sẽ được sử dụng thay vì block ID được tạo ngẫu nhiên.

Lưu ý rằng chỉ cho phép các chữ cái, số và dấu gạch ngang trong block ID thủ công.

### Khả năng tương tác

Xin lưu ý rằng tham chiếu block không phải là một phần của Markdown tiêu chuẩn, mà là hương vị cụ thể của Obsidian về Markdown. Điều đó có nghĩa là các liên kết này sẽ không hoạt động bên ngoài Obsidian.

Bạn vẫn có thể tìm thấy block được tham chiếu bằng cách tìm kiếm block ID, mặc dù đó là một quy trình khá thủ công. Kết nối không bị mất miễn là bạn có phần mềm có thể tìm kiếm trong một thư mục.
