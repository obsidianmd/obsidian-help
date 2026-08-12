---
permalink: import/onenote
---
Obsidian cho phép bạn dễ dàng di chuyển ghi chú từ Microsoft OneNote bằng [[Trình nhập|plugin Trình nhập]]. Công cụ này sẽ chuyển đổi dữ liệu OneNote của bạn sang các tệp Markdown bền vững, mà bạn có thể sử dụng với Obsidian và nhiều ứng dụng khác.

Obsidian cung cấp hai cách để nhập dữ liệu OneNote của bạn:

1. **Tài khoản Microsoft** đăng nhập vào tài khoản Microsoft của bạn và nhập các sổ tay đã đồng bộ với OneDrive. Yêu cầu kết nối internet.
2. **Nhập tệp** sử dụng các tệp xuất của OneNote (`.onepkg` và `.one`). Không yêu cầu tài khoản hoặc kết nối internet, và hoạt động với các sổ tay chưa bao giờ được đồng bộ.

## Nhập từ tài khoản Microsoft của bạn

> [!Warning]
> Chỉ có thể nhập các sổ tay thuộc sở hữu tài khoản của bạn. Các sổ tay mà người khác chia sẻ với bạn không được hỗ trợ, và tài khoản cơ quan hoặc trường học có thể cần tổ chức của bạn phê duyệt quyền truy cập.

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
10. Nhấp **Nhập** và đợi cho đến khi quá trình nhập hoàn tất.
11. Hoàn thành!

Nếu sổ tay của bạn thuộc tài khoản cơ quan hoặc trường học, OneNote có thể từ chối quyền truy cập plugin sau khi bạn đăng nhập. Khi điều đó xảy ra, nút **Sử dụng quyền truy cập cơ quan hoặc trường học** sẽ xuất hiện bên cạnh **Đăng xuất**. Sử dụng nút đó để đăng nhập lại với quyền mở rộng mà các tài khoản đó cần. Tổ chức của bạn có thể phải phê duyệt quyền đó trước khi nó hoạt động.

### Khắc phục sự cố

#### Không có phần hoặc sổ tay nào xuất hiện

Đảm bảo rằng các sổ tay bạn đang cố nhập đã được đồng bộ với OneDrive và hiển thị trong OneNote Web. Chúng phải thuộc sở hữu của bạn (sổ tay được chia sẻ do người khác tạo không được hỗ trợ).

Nếu một phần cụ thể bị thiếu, hãy đảm bảo rằng đó không phải là phần bị khóa, vì những phần đó sẽ không hiển thị nếu chưa gỡ khóa.

Nếu đó là sổ tay cơ quan hoặc trường học, hãy xem ghi chú về **Sử dụng quyền truy cập cơ quan hoặc trường học** ở trên.

#### Ghi chú đã nhập bị trống hoặc thiếu nội dung

Vấn đề này có thể xảy ra với các sổ tay mà bạn hiếm khi sử dụng. Để giải quyết vấn đề, hãy làm theo các bước sau:

1. Mở [OneNote Web](https://onenote.com/notebooks) trong trình duyệt.
2. **Nhấp chuột phải** vào các Sổ tay bị thiếu nội dung.
3. Chọn **Xuất Sổ tay** từ menu.
4. **Giải nén** tệp bạn vừa tải xuống vào một thư mục.
5. Tải lên sổ tay OneNote của bạn [tại đây](https://www.onenote.com/notebooks/exportimport?toImport=true).
6. Mở **Obsidian Trình nhập** và thử nhập lại

Nếu bạn đã làm theo các mẹo trên mà vấn đề vẫn chưa được giải quyết, có thể đang có sự cố tạm thời với máy chủ Microsoft. Trong trường hợp đó, hãy đợi vài phút và thử lại. Nếu vấn đề vẫn tiếp tục, vui lòng tạo một issue trên [kho GitHub của Obsidian Importer](https://github.com/obsidianmd/obsidian-importer/issues).

## Nhập tệp OneNote (.one, .onepkg)

Nhập tệp là cách thay thế để nhập dữ liệu OneNote của bạn. Nó đọc các tệp xuất do chính OneNote tạo ra, nên không cần tài khoản Microsoft và không cần kết nối internet. Sử dụng nó cho các sổ tay chỉ lưu trên máy tính, các sổ tay mà tài khoản của bạn không thể truy cập, hoặc khi bạn không muốn đăng nhập.

### Xuất sổ tay từ OneNote

Chúng tôi khuyến nghị xuất mỗi sổ tay dưới dạng **Gói OneNote** (`.onepkg`). Một gói chứa mọi phần của sổ tay, nên bạn có thể xuất và nhập một sổ tay trong một bước duy nhất, và Trình nhập sẽ liệt kê các phần để bạn chọn.

Chức năng xuất chỉ có sẵn trong **OneNote cho Windows**, ứng dụng desktop đi kèm với Microsoft 365. Ứng dụng OneNote cho Mac và ứng dụng OneNote cho Windows 10 cũ hơn không thể xuất sang các định dạng này.

1. Mở sổ tay bạn muốn xuất trong OneNote cho Windows.
2. Đi tới **File → Export**.
3. Trong mục **Export current** chọn **Notebook**.
4. Trong mục **Select format** chọn **OneNote Package (\*.onepkg)**.
5. Nhấp **Export** và chọn nơi lưu tệp.
6. Lặp lại cho mỗi sổ tay bạn muốn nhập.

Để xuất một phần đơn lẻ, chọn **Section** ở bước 3 và **OneNote 2010-2016 Section (\*.one)** ở bước 4.

Bạn cũng có thể nhập các tệp phần mà OneNote đã lưu sẵn trên ổ đĩa, mà không cần xuất gì:

- Các sổ tay lưu trên máy tính nằm trong `Documents\OneNote Notebooks`, mỗi phần một tệp `.one`.
- Bản sao lưu của các sổ tay đã đồng bộ nằm trong `%LOCALAPPDATA%\Microsoft\OneNote\16.0\Backup`.

### Nhập tệp OneNote của bạn

Bạn sẽ cần plugin [[Trình nhập]] chính thức của Obsidian, bạn có thể [cài đặt tại đây](obsidian://show-plugin?id=obsidian-importer).

1. Mở **[[Cài đặt]]**.
2. Đi tới **Phần mở rộng từ cộng đồng** và [cài đặt Trình nhập](obsidian://show-plugin?id=obsidian-importer).
3. Kích hoạt plugin Trình nhập.
4. Mở plugin **Trình nhập** bằng bảng lệnh hoặc biểu tượng trên thanh công cụ.
5. Trong mục **Định dạng tệp** chọn **Microsoft OneNote (.one, .onepkg)**.
6. Chọn các tệp `.onepkg` và `.one` bạn muốn nhập. Bạn có thể chọn nhiều tệp cùng lúc, để tất cả sổ tay có thể được nhập cùng nhau.
7. Trong mục **Các phần để nhập**, các phần tìm thấy trong những tệp đó được liệt kê, tất cả đều được đánh dấu. Bỏ đánh dấu những phần bạn không muốn.
8. Tùy chọn, chọn **Thư mục đầu ra** cho quá trình nhập, nơi lưu tệp đính kèm, và cách xử lý **Ghi chú hiện có** nếu bạn nhập cùng một sổ tay lần nữa.
9. Nhấp **Nhập** và đợi cho đến khi quá trình nhập hoàn tất.
10. Hoàn thành!

Mỗi phần trở thành một thư mục, và mỗi trang trong đó trở thành một ghi chú. Trang con được lưu trong thư mục có tên theo trang phía trên nó, giữ nguyên cấu trúc mà OneNote hiển thị và tránh trùng tên giữa hai trang con. Các trang trong thùng rác của sổ tay không được nhập.

### Hạn chế

- Các phần được bảo vệ bằng mật khẩu được lưu trữ ở dạng mã hóa, và các trang của chúng sẽ bị bỏ qua. Hãy gỡ mật khẩu trong OneNote và xuất lại để nhập chúng.
- Các tệp được bảo vệ bằng quyền chỉ có thể được mở bởi tài khoản mà chính sách cho phép, và Trình nhập không thể đọc được.

## Quyền riêng tư

Nếu bạn chọn nhập bằng tài khoản Microsoft, plugin Obsidian Trình nhập sử dụng [OAuth](https://learn.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-auth-code-flow) để xác thực và nhập sổ tay OneNote của bạn. Quá trình này cấp một mã truy cập ngắn hạn cho tài khoản của bạn, chỉ được sử dụng từ máy tính của bạn và không bao giờ được lưu trữ. Sau khi quá trình nhập hoàn tất, bạn có thể tùy chọn thu hồi mã từ [trang ứng dụng & dịch vụ Microsoft](https://account.live.com/consent/Manage).

Nhập tệp không bao giờ kết nối đến Microsoft: các tệp bạn chọn được đọc trên máy tính của bạn, mà không cần bất kỳ kết nối mạng nào.
