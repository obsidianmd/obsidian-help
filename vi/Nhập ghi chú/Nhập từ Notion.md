---
permalink: import/notion
cssclasses:
  - soft-embed
---
Obsidian cho phép bạn dễ dàng di chuyển dữ liệu từ Notion bằng [[Trình nhập|plugin Importer]]. Quá trình này sẽ chuyển đổi không gian làm việc Notion của bạn thành các tệp Markdown bền vững mà bạn có thể sử dụng ngoại tuyến với Obsidian và nhiều ứng dụng khác.

Obsidian cung cấp hai cách để nhập dữ liệu Notion của bạn:

1. **Tài khoản Notion (khuyến nghị)** kết nối trực tiếp với không gian làm việc của bạn và cho phép bạn bảo toàn Databases và công thức được chuyển đổi thành [[Giới thiệu về Cơ sở|Cơ sở]]. Yêu cầu token tích hợp Notion và kết nối internet.
2. **Nhập qua tệp** sử dụng các tệp xuất `.zip` của Notion. Không bảo toàn Databases nhưng không yêu cầu token API hoặc kết nối internet.

## Tùy chỉnh các trang đã nhập

Cả hai phương pháp nhập đều hiển thị bản xem trước trước khi quá trình nhập bắt đầu. Bạn có thể chỉnh sửa mẫu được tạo hoặc chọn một mẫu Markdown từ kho của bạn. Các cài đặt như ảnh bìa và tên thuộc tính database sẽ cập nhật các thuộc tính được tạo hiển thị trong bản xem trước. Xem [[Mẫu trình nhập|Mẫu Importer]].

## Nhập từ tài khoản Notion của bạn

### Tạo token truy cập Notion API

Để truy cập dữ liệu Notion của bạn qua API, bạn cần một token truy cập. Bước này mất khoảng hai phút để hoàn thành.

Token là một chuỗi dài các số và chữ cái thường bắt đầu bằng `ntn_...` cho phép bạn tải xuống dữ liệu từ Notion.

1. Đăng nhập vào bảng điều khiển [Notion Connections](https://app.notion.com/developers/connections) của bạn.
2. Chọn **New connection**.
	1. Đặt tên cho kết nối của bạn, ví dụ "Personal". Bạn có thể dùng bất kỳ tên nào.
	2. Chọn **Access token** làm phương thức xác thực.
	3. Chọn không gian làm việc bạn muốn xuất làm **Installable in**.

![[notion-integration.png#interface]]

3. Nhấp **Create connection**.
4. Trong thẻ **Configuration**, token API của bạn có thể truy cập trong trường **Access token**.
5. Chọn **Show** rồi **Copy**.
6. Lưu token vào nơi an toàn như trình quản lý mật khẩu của bạn.

![[notion-token.png#interface]]

Tiếp theo, cấp cho kết nối của bạn quyền truy cập vào các trang và databases Notion mà bạn muốn nhập.

1. Đi tới thẻ **Content access** của kết nối bạn vừa tạo.
2. Thêm các trang và databases mà bạn muốn nhập.

![[notion-content.png#interface]]

Bây giờ bạn có thể chuyển đổi dữ liệu của mình bằng Obsidian Importer.

### Nhập dữ liệu Notion qua API

Bạn sẽ cần plugin [[Trình nhập|Importer]] chính thức của Obsidian, bạn có thể [cài đặt tại đây](obsidian://show-plugin?id=obsidian-importer).

1. Mở **[[Cài đặt]]**.
2. Đi tới **Phần mở rộng từ cộng đồng** và [cài đặt Importer](obsidian://show-plugin?id=obsidian-importer).
3. Kích hoạt plugin Importer.
4. Mở plugin **Importer** bằng bảng lệnh hoặc biểu tượng thanh công cụ.
5. Trong **Định dạng tệp** chọn **Notion (API)**
6. Trong **API token**, nhấp **Liên kết...** để thêm một bí mật mới. Với **ID**, đặt tên như `notion`, và với **Bí mật** dán **Access token** từ Notion của bạn.
7. Nhấp **Tải** để chọn các databases và trang bạn muốn nhập.
8. Xem lại và chỉnh sửa các tùy chọn nhập.
9. Chọn **Nhập** để xem lại mẫu được tạo và xem trước các ví dụ từ các trang của bạn.
10. Chọn **Nhập** lần nữa và đợi cho quá trình nhập hoàn tất.

### Hạn chế

> [!info] Nhập qua API là tính năng mới
> Trình nhập Notion API là tính năng mới. Do sự phức tạp của không gian làm việc Notion, một số trường hợp đặc biệt có thể chưa được xem xét. Nếu bạn gặp vấn đề với quá trình chuyển đổi, [gửi báo cáo lỗi](https://github.com/obsidianmd/obsidian-importer/issues) để chúng tôi có thể cải thiện.

Do giới hạn tốc độ API của Notion, việc nhập các không gian làm việc lớn có thể mất thời gian đáng kể. Vui lòng kiên nhẫn.

Do hạn chế trong Notion API, một số dữ liệu không khả dụng hoặc không thể chuyển đổi:

- Chỉ chế độ xem chính của mỗi database được nhập.
- [Nguồn dữ liệu liên kết](https://developers.notion.com/docs/working-with-databases#additional-types-of-databases) không được nhập: *"API của Notion hiện không hỗ trợ nguồn dữ liệu liên kết. Khi chia sẻ database với tích hợp của bạn, hãy đảm bảo nó chứa nguồn dữ liệu gốc!"*
- Hàm `People`: `name()` và `email()`
- Hàm `Text`: `style()` và `unstyle()`

Ngoài ra, Importer sẽ thực hiện các thay đổi sau:

- Các trang không có trang con hoặc databases sẽ được nhập dưới dạng `[tên tệp].md` thay vì `[tên tệp]/[tên tệp].md`.
- Databases luôn được biểu diễn dưới dạng thư mục có tên `[tên database]` với tệp `[tên database].base` bên trong.

## Nhập tệp Notion (.zip)

Nhập qua tệp là cách thay thế để nhập dữ liệu Notion của bạn. Phương pháp này không bảo toàn Databases nhưng không yêu cầu token API hoặc kết nối internet.

### Xuất dữ liệu từ Notion

Để chuẩn bị dữ liệu cho việc nhập, bạn cần xuất toàn bộ không gian làm việc bằng định dạng xuất HTML của Notion. Chúng tôi khuyến nghị bạn không sử dụng xuất Markdown của Notion vì nó bỏ sót dữ liệu quan trọng. Bạn phải có quyền quản trị viên đối với không gian làm việc Notion để xuất tất cả nội dung không gian làm việc.

1. Đi tới **Settings** ở đầu thanh bên Notion.
2. Trong **Workspace** chọn **General**.
3. Tìm và chọn **Export all workspace content**.
4. Trong **Export format** chọn **HTML**.
5. Chọn **Include everything**.
6. Bật **Create folders for subpages**.
7. Bạn sẽ nhận được tệp `.zip` qua email hoặc trực tiếp trong trình duyệt.

![[notion-export.png#interface]]

![[notion-export-2.png#interface]]

### Nhập tệp .zip Notion của bạn

Bạn sẽ cần plugin [[Trình nhập|Importer]] chính thức của Obsidian, bạn có thể [cài đặt tại đây](obsidian://show-plugin?id=obsidian-importer).

1. Mở **[[Cài đặt]]**.
2. Đi tới **Phần mở rộng từ cộng đồng** và [cài đặt Importer](obsidian://show-plugin?id=obsidian-importer).
3. Kích hoạt plugin Importer.
4. Mở plugin **Importer** bằng bảng lệnh hoặc biểu tượng thanh công cụ.
5. Trong **Định dạng tệp** chọn **Notion (.zip)**
6. Chọn tệp `.zip` chứa các tệp Notion bạn muốn nhập. *Khuyến nghị nhập tất cả Notion của bạn cùng một lúc để các liên kết nội bộ có thể được đối chiếu chính xác.*
7. _Tùy chọn_, chọn một thư mục cho việc nhập. Các trang và databases Notion của bạn sẽ được lồng bên trong thư mục này.
8. Bật **Save parent pages in subfolders** để giữ cấu trúc Notion. *Lưu ý rằng trong Notion bạn có thể viết nội dung trong Thư mục, điều này không thể thực hiện trong Obsidian và các trang này sẽ được thêm dưới dạng trang con trong thư mục.*
9. Chọn **Nhập** để xem lại mẫu được tạo và xem trước các ví dụ từ các trang của bạn.
10. Chọn **Nhập** lần nữa và đợi cho quá trình nhập hoàn tất.

### Khắc phục sự cố

Nếu bạn gặp vấn đề khi nhập từ Notion:

- Đảm bảo bạn sử dụng **HTML** làm định dạng xuất trong Notion, **không phải Markdown**.
- Nếu Obsidian bị đơ trong quá trình nhập, hãy vô hiệu hóa các plugin cộng đồng và thử lại.

Gặp vấn đề khác? Tìm kiếm tại [kho lưu trữ Importer](https://github.com/obsidianmd/obsidian-importer/issues) để xem liệu người khác đã gặp phải vấn đề tương tự chưa.

#### Nhập không gian làm việc lớn

Nếu bạn đang nhập một không gian làm việc có nhiều gigabyte dữ liệu, bản xuất từ Notion có thể chứa các tệp `.zip` lồng nhau. Trong trường hợp này, bạn có thể thấy thông báo lỗi nhập trông giống như sau:

```
Import failed {id}.zip/{id}-Part-1.zip undefined.
```

Nếu bạn thấy lỗi này, bạn có thể giải nén tệp từ Notion, sau đó nhập các tệp `Export-{id}-Part-1.zip` lồng bên trong.

## Mẫu

Sử dụng [[Mẫu trình nhập|Mẫu Importer]] để cấu hình đầy đủ cách dữ liệu Notion của bạn được nhập.

![[Mẫu trình nhập#Biến]]
