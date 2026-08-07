---
permalink: import/airtable
---
Obsidian cho phép bạn di chuyển dữ liệu từ Airtable bằng [[Trình nhập|plugin Trình nhập]]. Thao tác này sẽ chuyển đổi các cơ sở Airtable của bạn thành các tệp Markdown bền vững mà bạn có thể sử dụng ngoại tuyến với Obsidian và nhiều ứng dụng khác.

Mỗi bảng trở thành một thư mục ghi chú với một ghi chú cho mỗi bản ghi, cùng với một tệp [[Giới thiệu về Cơ sở|Cơ sở]] tái tạo bảng và các chế độ xem của nó. Vì sử dụng Airtable API, việc nhập yêu cầu mã thông báo truy cập cá nhân và kết nối internet.

## Tạo mã thông báo truy cập cá nhân Airtable

Để truy cập dữ liệu Airtable của bạn qua API, bạn cần một mã thông báo truy cập cá nhân. Bước này mất khoảng hai phút để hoàn thành.

Mã thông báo là một chuỗi dài gồm số và chữ cái thường bắt đầu bằng `pat...` cho phép bạn tải xuống dữ liệu từ Airtable.

1. Đăng nhập Airtable và truy cập trang [Mã thông báo truy cập cá nhân](https://airtable.com/create/tokens) trong cài đặt tài khoản của bạn.
2. Chọn **Create new token**.
3. Đặt tên cho mã thông báo của bạn, ví dụ "Obsidian". Bạn có thể dùng bất kỳ tên nào.
4. Trong phần **Scopes**, thêm `data.records:read` và `schema.bases:read`.
5. Trong phần **Access**, thêm các cơ sở bạn muốn nhập, hoặc chọn tất cả các cơ sở trong một không gian làm việc.
6. Chọn **Create token**, sau đó **Copy** mã thông báo.
7. Lưu mã thông báo vào nơi an toàn như trình quản lý mật khẩu của bạn.

Airtable chỉ hiển thị mã thông báo một lần. Nếu bạn mất nó, hãy tạo một mã mới.

## Nhập dữ liệu Airtable của bạn

Bạn sẽ cần plugin [[Trình nhập]] chính thức của Obsidian, bạn có thể [cài đặt tại đây](obsidian://show-plugin?id=obsidian-importer).

1. Mở **[[Cài đặt]]**.
2. Đi đến **Phần mở rộng từ cộng đồng** và [cài đặt Trình nhập](obsidian://show-plugin?id=obsidian-importer).
3. Kích hoạt plugin Trình nhập.
4. Mở plugin **Trình nhập** bằng bảng lệnh hoặc biểu tượng thanh công cụ.
5. Trong phần **Định dạng tệp** chọn **Airtable**.
6. Trong phần **Mã thông báo truy cập cá nhân Airtable**, nhấp **Liên kết...** để thêm một bí mật mới. Với **ID**, đặt tên như `airtable`, và với **Bí mật** dán mã thông báo truy cập cá nhân của bạn.
7. Nhấp **Tải** để duyệt các cơ sở của bạn, sau đó chọn các bảng bạn muốn nhập.
8. Xem lại và chỉnh sửa các tùy chọn nhập.
9. Chọn **Nhập** để cấu hình cách các trường của bạn sẽ được chuyển đổi thành ghi chú với [[Thuộc tính|thuộc tính]].
10. Nhấp **Tiếp tục** và chờ cho đến khi quá trình nhập hoàn tất.
11. Bạn đã hoàn thành!

### Tùy chọn nhập

- **Chuyển đổi công thức** — chọn xem các trường công thức, tra cứu, tổng hợp và đếm có được viết lại thành [[Công thức|công thức Cơ sở]] hay không, sử dụng giá trị Airtable đã tính khi không có tương đương, hoặc chỉ nhập dưới dạng giá trị tĩnh.
- **Tải xuống tệp đính kèm** — lưu các tệp đính kèm vào kho của bạn, sử dụng thư mục tệp đính kèm và cài đặt định dạng liên kết của bạn. Khi bị vô hiệu hóa, hoặc khi tải xuống thất bại, ghi chú sẽ liên kết đến URL của tệp trên Airtable.
- **Tên thuộc tính chế độ xem** — thuộc tính ghi lại bản ghi thuộc về chế độ xem Airtable nào. Mỗi chế độ xem trong Cơ sở được tạo sẽ lọc theo thuộc tính này. Mặc định là `base`.
- **Nhập tăng dần** — thêm thuộc tính `airtable-id` vào mỗi ghi chú để lần nhập sau có thể bỏ qua các bản ghi đã được nhập. Khi nhập toàn bộ, thuộc tính này sẽ bị xóa.

## Cấu hình cách nhập các trường Airtable

Trong bước thứ hai của quá trình nhập, bạn có thể chọn cách nhập từng trường.

Mỗi trường trong bảng của bạn được gán một biến gọi là `{{field_name}}`. Theo mặc định, mỗi trường trở thành một thuộc tính, và bạn có thể sử dụng các biến này để đổi tên thuộc tính, thay đổi giá trị, hoặc ghi nội dung vào phần thân của mỗi ghi chú.

Trường chính của mỗi bảng luôn được sử dụng làm tiêu đề ghi chú, và các bản ghi luôn được đặt trong thư mục có tên theo bảng của chúng, vì vậy các tùy chọn đó không thể cấu hình.

## Những gì được nhập

Với một cơ sở có tên `Projects` với bảng `Tasks`, trình nhập sẽ tạo:

```
Airtable/
	Projects/
		Tasks.base
		Tasks/
			Write the proposal.md
			Review the draft.md
```

- Một ghi chú cho mỗi bản ghi, với trường chính làm tiêu đề ghi chú, và các trường khác của bản ghi làm [[Thuộc tính|thuộc tính]].
- Một tệp `.base` cho mỗi bảng, với mỗi chế độ xem Airtable được ánh xạ thành một [[Các chế độ xem|chế độ xem Cơ sở]]:
	- **Grid** trở thành [[Chế độ xem bảng]].
	- **Gallery** trở thành [[Chế độ xem thẻ]].
	- **List** trở thành [[Chế độ xem danh sách]].
	- Tất cả các loại chế độ xem khác được chuyển đổi thành chế độ xem bảng.
- Các loại trường Airtable được ánh xạ thành loại thuộc tính Obsidian, mà không ghi đè các loại bạn đã thiết lập.
- Các bản ghi được liên kết trở thành liên kết đến các ghi chú tương ứng.
- Tệp đính kèm được tải xuống vào kho của bạn theo cài đặt kho.

## Giới hạn

> [!info] Nhập Airtable là tính năng mới
> Trình nhập Airtable là mới. Nếu bạn gặp sự cố với quá trình chuyển đổi, [gửi báo cáo lỗi](https://github.com/obsidianmd/obsidian-importer/issues) để chúng tôi có thể cải thiện.

Do giới hạn tốc độ API của Airtable, việc nhập các cơ sở lớn có thể mất nhiều thời gian. Vui lòng kiên nhẫn.

Do giới hạn trong Airtable API, một số dữ liệu không khả dụng hoặc không thể chuyển đổi:

- Giá trị tổng hợp (rollup) không được nhập. API không cung cấp phép tổng hợp được sử dụng cho giá trị tính toán của rollup, vì vậy chỉ tên thuộc tính được ghi, cùng với công thức Cơ sở khi lược đồ trường cung cấp biểu thức.
- Các công thức sử dụng hàm mà Obsidian không có tương đương, chẳng hạn như `SWITCH`, `FIND`, `REGEX_EXTRACT`, và `SQRT`, sẽ sử dụng giá trị tĩnh từ Airtable.
- Chỉ các chế độ xem grid, gallery và list được nhập. Các loại chế độ xem khác, như calendar, kanban, timeline và Gantt, sẽ bị bỏ qua.
- Liên kết đến bản ghi trong các bảng bạn không chọn sẽ trở thành tiêu đề thuần của bản ghi thay vì liên kết.
- Thiết kế giao diện, tự động hóa, bình luận và lịch sử sửa đổi không được nhập.
