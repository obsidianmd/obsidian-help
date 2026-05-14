---
permalink: plugin-security
---
Đội ngũ Obsidian rất coi trọng vấn đề bảo mật. Trang này giải thích các rủi ro liên quan khi cài đặt plugin cộng đồng, và những gì đội ngũ Obsidian làm để giải quyết chúng.

## Chế độ hạn chế

Theo mặc định, Obsidian chạy ở Chế độ hạn chế để ngăn việc thực thi mã từ bên thứ ba. Chỉ tắt chế độ hạn chế khi bạn tin tưởng các tác giả của plugin mà bạn cài đặt.

Để tắt chế độ hạn chế:

1. Mở **[[Cài đặt]]**.
2. Trong menu bên, chọn **Phần mở rộng từ cộng đồng**.
3. Chọn **Bật phần mở rộng từ cộng đồng**.

Để bật chế độ hạn chế:

1. Mở **[[Cài đặt]]**.
2. Trong menu bên, chọn **Phần mở rộng từ cộng đồng**.
3. Bên cạnh **Chế độ hạn chế**, chọn **Bật**.

Các plugin đã cài đặt vẫn còn trong kho của bạn ngay cả khi bạn bật chế độ hạn chế, nhưng sẽ bị Obsidian bỏ qua.

## Khả năng của plugin

Do hạn chế kỹ thuật, Obsidian không thể giới hạn plugin một cách đáng tin cậy ở các quyền hoặc mức truy cập cụ thể. Điều này có nghĩa là các plugin sẽ kế thừa mức truy cập của Obsidian. Do đó, hãy xem xét các ví dụ sau về những gì plugin cộng đồng có thể làm:

- Plugin cộng đồng có thể truy cập các tệp trên máy tính của bạn.
- Plugin cộng đồng có thể kết nối internet.
- Plugin cộng đồng có thể cài đặt các chương trình bổ sung.

> [!tip] 
> Nếu bạn làm việc với dữ liệu nhạy cảm và muốn cài đặt plugin cộng đồng, chúng tôi khuyến nghị bạn thực hiện kiểm tra bảo mật độc lập đối với plugin trước khi sử dụng.

## Quy trình xét duyệt plugin

Tất cả plugin cộng đồng phải tuân thủ [Chính sách dành cho nhà phát triển Obsidian](https://docs.obsidian.md/Developer+policies). Obsidian tự động quét mọi phiên bản plugin để tìm lỗ hổng bảo mật, vấn đề chất lượng mã và phần mềm độc hại. Trang của mỗi plugin trong [thư mục plugin](https://community.obsidian.md) hiển thị kết quả dưới dạng bảng điểm an toàn.

Việc xét duyệt thủ công vẫn tiếp tục được thực hiện cho các plugin phổ biến, được giới thiệu và bị gắn cờ.

- Nếu bạn phát hiện lỗ hổng bảo mật trong plugin cộng đồng, hãy tham khảo tệp `security.md` hoặc `readme.md` của tác giả plugin để biết cách báo cáo. Đối với các lỗ hổng nghiêm trọng, vui lòng báo cáo vấn đề tới [[Trợ giúp và hỗ trợ#Liên hệ hỗ trợ Obsidian|hỗ trợ Obsidian]] cũng như vậy.
- Nếu bạn nghi ngờ rằng một plugin cộng đồng có tính chất độc hại, bạn có thể gắn cờ trực tiếp từ trang thư mục plugin của nó, báo cáo tới [[Trợ giúp và hỗ trợ#Liên hệ hỗ trợ Obsidian|hỗ trợ Obsidian]], hoặc gửi tin nhắn riêng cho các quản trị viên của chúng tôi.
