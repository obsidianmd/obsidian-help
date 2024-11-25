Chúng tôi tin rằng [[Obsidian#Chúng tôi khác biệt như thế nào|dữ liệu của bạn luôn thuộc quyền sở hữu và kiểm soát của bạn]]. Ghi chú của bạn được lưu trữ trong markdown, đây là một định dạng mở dựa trên các file văn bản thuần túy và do đó, bất kỳ máy tính nào có thể xử lý file văn bản đều có thể đọc được các ghi chú trong tương lai. Bạn có thể tự do chỉnh sửa ghi chú trong phần mềm khác, ngay cả khi mở chúng trong Obsidian.

### Mỗi dữ liệu vault

Tuy nhiên, có một số dữ liệu cần thiết của phần mềm không được lưu trữ trong markdown. Obsidian tạo một thư mục có tên là `.obsidian` trong thư mục gốc của bất kỳ vault nào bạn tạo. Điều này chứa các cài đặt bao gồm các hotkey tùy chỉnh và plugin nào được bật. Bất kỳ thư mục nào bắt đầu bằng dấu `.` đều ẩn trên hầu hết các hệ thống, vì vậy bạn có thể sẽ không bao giờ nhìn thấy nó trừ khi bạn thay đổi cài đặt hiển thị. Nếu bạn xóa thư mục này, không có dữ liệu nào của bạn sẽ mất đi, nhưng bạn sẽ mất thông tin về cài đặt tùy chỉnh của mình. Nó sẽ được tạo lại khi bạn mở lại vault đó trong Obsidian. Nếu bạn đang sử dụng `git`, có lẽ tốt nhất bạn nên `ignore` file `.obsidian/workspace`, vì file này lưu trữ thông tin về các ngăn và các file của bạn, nhưng chúng tôi không thấy bất kỳ báo cáo về vấn đề nào khác nếu bạn không bỏ qua file này.

### Thư mục hệ thống

Obsidian cũng lưu trữ một số thông tin trong thư mục hệ thống. Điều này khác nhau trên mỗi Hệ điều hành; trên Mac là `/Users/yourusername/Library/Application Support/obsidian`, trên Windows là `%APPDATA%\Obsidian\`, và `$XDG_CONFIG_HOME/obsidian/` hoặc `~/.config/obsidian/` trên Linux. Do đó, chúng tôi khuyên bạn không nên tạo vault trong thư mục này.

Tuy nhiên, bên cạnh đó, bạn có thể tạo Vault ở bất kỳ đâu mà hệ điều hành của bạn cho phép. Các file Obsidian đồng bộ tốt với Dropbox, iCloud, OneDrive, git và mọi dịch vụ đồng bộ khác mà chúng tôi đã thử cho đến nay.

### Liên kết tượng trưng (Symlink)

Bắt đầu từ v0.11.1, Obsidian sẽ nhận ra các liên kết và điểm nối tượng trưng. Chúng tôi không chính thức khuyên bạn nên sử dụng chúng, nhưng chúng tôi nhận thấy có những trường hợp sử dụng hợp lệ. Sử dụng chúng có nguy cơ của riêng bạn.

Lưu ý rằng có rất nhiều cạm bẫy khi sử dụng Symlink, ​​một số trong số đó có thể gây ra các vấn đề nghiêm trọng như mất dữ liệu, hỏng file hoặc có thể làm hỏng Obsidian.

Dưới đây là một số hạn chế và vấn đề mà bạn cần lưu ý:

- Vòng lặp Symlink không được phép, để tránh sự cố Obsidian do vòng lặp vô hạn.
- Các đích của Symlink phải hoàn toàn tách biệt với vault gốc hoặc bất kỳ đích của symlink nào khác. Disjoint có nghĩa là một thư mục không chứa thư mục khác hoặc ngược lại. Obsidian sẽ bỏ qua bất kỳ symlink nào đến thư mục mẹ của vault hoặc từ một thư mục trong vault sang một thư mục khác trong cùng một vault. Đó là một biện pháp an toàn để đảm bảo bạn năng chặn các file trùng lặp trong vault của mình, điều này có thể khiến các liên kết bị che khuất.
- Symlink có thể không hoạt động tốt với Obsidian, hoặc _nhiều loại đồng bộ hóa khác_. Nếu đích của một symlink là một thư mục được đồng bộ hóa bởi một vault Obsidian khác, bạn có thể (có khả năng) gặp phải xung đột đồng bộ hóa hoặc mất dữ liệu. Một số công cụ đồng bộ hóa (ví dụ: git) không hỗ trợ các symlink, ​​mà đồng bộ hóa _path_ mà symlink trỏ tới, điều này có thể tạo ra kết quả không mong muốn nếu bạn chia sẻ vault của mình với người khác.
- Trình quản lý file của Obsidian không thể di chuyển file qua ranh giới thiết bị, vì vậy nếu bạn muốn tạo một symlink đến một thư mục trên ổ đĩa khác với vault của mình, bạn sẽ không thể kéo file giữa thư mục đó và các thư mục khác bằng file explorer của Obsidian. (Bạn sẽ cần sử dụng explorer của hệ điều hành cho những lần di chuyển như vậy và Obsidian sẽ nhận ra hành động này là xóa và tạo một file mới. Nó cũng sẽ _không_ cập nhật bất kỳ liên kết nào phụ thuộc vào đường dẫn của file đó.)
- File symlink (trái ngược với thư mục symlink) _có thể_ hoạt động, nhưng không được hỗ trợ chính thức tại thời điểm này. Các thay đổi được thực hiện bên ngoài Obsidian không được theo dõi, vì vậy nếu bạn thay đổi file trực tiếp, Obsidian sẽ không phát hiện ra thay đổi,không cập nhật chỉ mục tìm kiếm, v.v...
- Việc liên kết trong thư mục `.obsidian/` để chia sẻ giữa các vault **có khả năng cao làm hỏng cài đặt của bạn**, trừ khi bạn _thực sự_ biết mình đang làm gì. Nếu bạn quyết định đi theo hướng này, ít nhất phải có một bản sao lưu.
