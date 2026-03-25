---
permalink: import/onenote
---
Obsidian cho phép bạn dễ dàng di chuyển ghi chú từ Microsoft OneNote bằng [[Trình nhập|plugin Trình nhập]]. Công cụ này sẽ chuyển đổi dữ liệu OneNote của bạn sang các tệp Markdown bền vững, mà bạn có thể sử dụng với Obsidian và nhiều ứng dụng khác.

> [!Warning]
> Chỉ có thể nhập các sổ tay thuộc sở hữu tài khoản cá nhân của bạn. Ghi chú được chia sẻ, hoặc tài khoản từ cơ quan và trường học không được hỗ trợ.

## Nhập dữ liệu OneNote vào Obsidian

Bạn sẽ cần plugin [[Trình nhập]] chính thức của Obsidian, bạn có thể [cài đặt tại đây](obsidian://show-plugin?id=obsidian-importer).

1. Mở **[[Cài đặt]]**.
2. Đi tới **Phần mở rộng từ cộng đồng** và [cài đặt Trình nhập](obsidian://show-plugin?id=obsidian-importer).
3. Kích hoạt plugin Trình nhập.
4. Mở plugin **Trình nhập** bằng bảng lệnh hoặc biểu tượng trên thanh công cụ.
5. Trong mục **Định dạng tệp** chọn **Microsoft OneNote**.
6. Nhấp **Đăng nhập** để mở trình duyệt web đến trang đăng nhập Microsoft. Nhập thông tin đăng nhập cho tài khoản Microsoft chứa Sổ tay OneNote của bạn. Thông tin thêm về quy trình đăng nhập Microsoft có sẵn bên dưới.
7. Nhấp **Chấp nhận** để cấp quyền cho Obsidian xem Sổ tay OneNote của bạn.
8. Nhấp **Mở liên kết** để cho phép trình duyệt chuyển hướng bạn đến ứng dụng Obsidian.
9. Trong ứng dụng Obsidian, hộp thoại Trình nhập sẽ hiển thị rằng bạn đã đăng nhập và liệt kê các Sổ tay và Phần OneNote của bạn. Đánh dấu các phần bạn muốn nhập.

![[OneNote-Importer-Select-Sections.png]]

10. Nhấp **Nhập** và đợi cho đến khi quá trình nhập hoàn tất.
11. Hoàn thành!

## Khắc phục sự cố

### Không có phần hoặc sổ tay nào xuất hiện

Đảm bảo rằng các sổ tay bạn đang cố nhập đã được đồng bộ với OneDrive và hiển thị trong OneNote Web. Chúng phải thuộc sở hữu của bạn (sổ tay được chia sẻ do người khác tạo không được hỗ trợ).

Nếu một phần cụ thể bị thiếu, hãy đảm bảo rằng đó không phải là phần bị khóa — những phần đó sẽ không hiển thị nếu chưa gỡ khóa.

### Ghi chú đã nhập bị trống hoặc thiếu nội dung

Vấn đề này có thể xảy ra với các sổ tay mà bạn hiếm khi sử dụng. Để giải quyết vấn đề, hãy làm theo các bước sau:

1. Mở [OneNote Web](https://onenote.com/notebooks) trong trình duyệt.
2. **Nhấp chuột phải** vào các Sổ tay bị thiếu nội dung.
3. Chọn **Xuất Sổ tay** từ menu.
4. **Giải nén** tệp bạn vừa tải xuống vào một thư mục.
5. Tải lên sổ tay OneNote của bạn [tại đây](https://www.onenote.com/notebooks/exportimport?toImport=true).
6. Mở **Obsidian Trình nhập** và thử nhập lại

Nếu bạn đã làm theo các mẹo trên mà vấn đề vẫn chưa được giải quyết, có thể đang có sự cố tạm thời với máy chủ Microsoft. Trong trường hợp đó, hãy đợi vài phút và thử lại. Nếu vấn đề vẫn tiếp tục, vui lòng tạo một issue trên [kho GitHub của Obsidian Importer](https://github.com/obsidianmd/obsidian-importer/issues).

## Quyền riêng tư

Plugin Obsidian Trình nhập sử dụng [OAuth](https://learn.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-auth-code-flow) để xác thực với tài khoản Microsoft của bạn và nhập sổ tay OneNote. Quá trình này cấp một mã truy cập ngắn hạn cho tài khoản của bạn, chỉ được sử dụng từ máy tính của bạn và không bao giờ được lưu trữ. Sau khi quá trình nhập hoàn tất, bạn có thể tùy chọn thu hồi mã từ [trang ứng dụng & dịch vụ Microsoft](https://account.live.com/consent/Manage).
