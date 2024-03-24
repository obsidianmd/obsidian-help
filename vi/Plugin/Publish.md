Plugin Publish cho phép bạn xuất bản các ghi chú từ vault lên trang web của mình, tất cả đều từ trong ứng dụng Obsidian.

Để biết thêm thông tin về dịch vụ Obsidian Publish™, những gì được bao gồm, cách hoạt động và quyền riêng tư, hãy xem dịch vụ bổ trợ [[Obsidian Publish]].

### Bật plugin

Trong Obsidian > Settings > Plugin, bật plugin Publish. Sau đó, biểu tượng Publish (trông giống như một mặt giấy) sẽ xuất hiện trong ngăn ribbon.

Sau khi được bật, bạn cũng có thể đặt hotkey cho tùy chọn này hoặc sử dụng bảng lệnh để truy cập nó.

### Thiết lập và định cấu hình trang web của bạn

Trong plugin Publish, bạn sẽ thấy một tùy chọn để tạo một trang web bằng cách nhập một ID trang web duy nhất. Sau khi được xuất bản, trang web của bạn sẽ có sẵn tại `https://publish.obsidian.md/{site-id}`.

Sau khi tạo một ID trang web duy nhất, bạn sẽ có tùy chọn đặt tên cho trang web của mình, chọn trang chủ, đặt chủ đề và chuyển đổi các thành phần khác nhau như chế độ xem đồ họa, mục lục, v.v... Bạn có thể chuyển đổi các tùy chọn này bằng cách nhấp vào biểu tượng bánh răng gần tên trang web của bạn ở đầu plugin Publish.

### Chọn file để xuất bản

Sau khi thiết lập trang web của bạn, bây giờ bạn có thể xuất bản ghi chú của mình!

Với một trang web trống, mới, tất cả các ghi chú của bạn sẽ xuất hiện trong phần "New", có nghĩa là chúng mới đối với trang web của bạn. Tại thời điểm này, bạn có thể chọn file bạn muốn xuất bản, sau đó nhấp vào nút "Publish".

==Lưu ý về quyền riêng tư: Obsidian Publish không nhận biết (cũng như lưu giữ) về bất kỳ ghi chú nào bạn chọn không xuất bản (cũng như bất kỳ ghi chú nào bạn sau đó xóa khỏi trang web đã xuất bản của mình).==

### Thực hiện thay đổi

Khi bạn thực hiện các thay đổi đối với các ghi chú đã được xuất bản, những thay đổi đó sẽ tự động được chọn khi bạn mở hộp thoại plugin Publish. Bạn có thể bỏ chọn bất kỳ file nào bạn không muốn xuất bản lên trang web của mình.

### Thay đổi tùy chọn trang web

Bạn có thể thay đổi các tùy chọn trang web khác nhau bằng cách nhấp vào biểu tượng bánh răng gần tên trang web của bạn khi ở trong hộp thoại "Publish changes".

#### Metadata

Trong phần này, bạn có thể đặt tên trang web, tệp trang chủ (file mà khách truy cập nhìn thấy khi họ truy cập vào trang web của bạn) và quản lý domain tùy chỉnh (vui lòng xem [[Obsidian Publish#Tùy chỉnh domain|hướng dẫn]] để thiết lập tùy chỉnh domain).

#### Giao diện

Ở đây bạn có thể thay đổi chủ đề giữa sáng và tối.

Nếu muốn tùy chỉnh nhiều hơn, bạn có thể xem xét thiết lập [[Obsidian Publish#Tùy chủnh CSS]] và [[Obsidian Publish#Favicon|favicon]].

#### Kinh nghiệm đọc

Trong phần này, bạn có thể:

- Kích hoạt một chế độ đặc biệt gọi là "sliding windows" trông giống như [ghi chú của Andy Matuschak](https://notes.andymatuschak.org/);
- Kích hoạt tính năng xem trước trang khi di chuột giống như khi sử dụng plugin [[Trang xem trước]] trong ứng dụng;
- Định cấu hình độ dài dòng và ngắt dòng.

#### Component

Trang web của bạn có một số component mà bạn có thể bật hoặc tắt. Bao gồm:

- File explorer (mặc định bật)
- Local graph (mặc định bật)
- Outline (mặc định tắt)
- Backlink ở dưới cùng (mặc định tắt)
- Thanh tìm kiếm (mặc định tắt, yêu cầu file explorer)

#### Bảo mật

Tại đây bạn có thể đặt mật khẩu để bảo vệ trang web của mình. Sau khi thiết lập, tất cả khách truy cập cần nhập một trong các mật khẩu để vào trang web của bạn.

Nhiều mật khẩu tạo điều kiện chia sẻ với nhiều nhóm. Khi bạn không muốn chia sẻ với một nhóm khách truy cập nữa, bạn có thể chỉ cần xóa mật khẩu đó. Mỗi mật khẩu cũng có thể được đặt tên để thuận tiện cho bạn.

Kể từ ngày 20/01/2021, tất cả các ghi chú trên trang web của bạn đều được bảo vệ bằng cùng một bộ mật khẩu.

### Thêm ghi chú được liên kết

Nút "Add linked" cho phép bạn bao gồm để xuất bản bất kỳ ghi chú nào trong vault của bạn được tham chiếu (liên kết đến) bởi bất kỳ ghi chú nào hiện được chọn. Đây là một cách tốt để đảm bảo không có liên kết chết nào trên trang web đã xuất bản của bạn.

Ví dụ, giả sử bạn chọn Ghi chú A để xuất bản. Giả sử Ghi chú A có các liên kết đến Ghi chú P, Ghi chú Q và Ghi chú R, sau đó nếu bạn nhấp vào nút "Add linked", tất cả các Ghi chú P, Q và R sẽ được chọn để xuất bản cùng với Ghi chú A hiện đang được chọn.

Mỗi lần bạn nhấp vào nút "Add linked", plugin Publish sẽ tìm kiếm các liên kết trong mỗi file hiện được chọn để đưa vào để xuất bản. Hãy chắc chắn rằng bạn xem lại danh sách các file đã chọn trước khi nhấp vào nút "Publish".

### Xóa các ghi chú đã xuất bản

Bạn luôn có tùy chọn xóa bất kỳ ghi chú nào đã được xuất bản lên trang web của mình. Trong plugin Publish, tất cả các ghi chú đã xuất bản sẽ được liệt kê, trong đó có thể chọn bất kỳ/tất cả để xóa. Xóa ghi chú khỏi trang web của bạn **không** xóa ghi chú khỏi vault, do đó cung cấp cho bạn tùy chọn để xuất bản lại ghi chú một lần nữa trong tương lai.

### Xóa toàn bộ trang web

Nếu bạn muốn xóa toàn bộ trang web, hãy nhấp vào biểu tượng chuyển trang web (mũi tên) gần đầu plugin Publish. Sau đó nhấp vào nút X để xóa trang web của bạn. Lưu ý: điều này chỉ xóa trang web công khai của bạn nhưng không ảnh hưởng đến bất kỳ file nào trong vault của bạn. Bạn luôn có thể chọn xuất bản lại ghi chú của mình.
