---
permalink: plugins/daily-notes
aliases:
  - Plugin/Daily notes
---
Ghi chú hàng ngày là một [[Plugin cốt lõi|plugin cốt lõi]] mở ghi chú dựa trên ngày hôm nay, hoặc tạo mới nếu ghi chú chưa tồn tại. Sử dụng ghi chú hàng ngày để tạo nhật ký, danh sách việc cần làm, hoặc nhật ký hàng ngày cho những điều bạn khám phá trong ngày.

Để mở ghi chú hàng ngày hôm nay, bạn có thể:

- Nhấp vào **Mở ghi chú hôm nay** ![[lucide-calendar.svg#icon]] trên [[Thanh công cụ|thanh công cụ]].
- Chạy **Mở ghi chú hôm nay** từ [[Khay lệnh]].
- [[Phím tắt#Đặt phím tắt|Sử dụng phím tắt]] cho lệnh **Mở ghi chú hôm nay**.

Theo mặc định, Obsidian tạo một ghi chú trống mới được đặt tên theo ngày hôm nay ở định dạng YYYY-MM-DD.

> [!tip] Nếu bạn muốn lưu ghi chú hàng ngày trong một thư mục riêng, bạn có thể đặt <u>Vị trí tập tin mới</u> trong tùy chọn plugin để thay đổi nơi Obsidian tạo ghi chú hàng ngày mới.

> [!example]- Thư mục con tự động
> Bạn có thể tự động sắp xếp ghi chú hàng ngày vào các thư mục bằng tính năng **Định dạng ngày**.
> 
> Ví dụ, nếu bạn đặt định dạng ngày là `YYYY/MMMM/YYYY-MMM-DD`, ghi chú của bạn sẽ được tạo dưới dạng `2023/January/2023-Jan-01`. 
> 
> Bạn có thể khám phá thêm các tùy chọn định dạng trên trang tài liệu [momentJS](https://momentjs.com/docs/#/displaying/format/).

## Tạo ghi chú hàng ngày từ mẫu

Nếu các ghi chú hàng ngày của bạn có cùng cấu trúc, bạn có thể sử dụng [[Plugins/Mẫu|mẫu]] để thêm nội dung được định nghĩa trước vào ghi chú hàng ngày khi bạn tạo chúng.

1. Tạo một ghi chú mới có tên "Mẫu hàng ngày" với nội dung sau (hoặc bất cứ gì phù hợp với bạn!):

   ```md
   # {{date:YYYY-MM-DD}}

   ## Nhiệm vụ

   - [ ]
   ```

2. Mở **[[Cài đặt]]**.
3. Trong thanh bên, nhấp vào **Ghi chú hàng ngày** dưới **Tùy chọn plugin**.
4. Trong ô văn bản bên cạnh **Vị trí tập tin mẫu**, chọn ghi chú "Mẫu hàng ngày".

Obsidian sẽ sử dụng mẫu này vào lần tiếp theo bạn tạo ghi chú hàng ngày mới.

## Ghi chú hàng ngày và thuộc tính

Khi plugin Ghi chú hàng ngày được kích hoạt và một thuộc tính ngày có trong bất kỳ ghi chú nào, Obsidian sẽ tự động cố gắng tạo liên kết đến ghi chú hàng ngày cho ngày cụ thể đó. Ví dụ, nếu một ghi chú có tiêu đề `example.md` bao gồm thuộc tính ngày như `2023-01-01`, ngày này sẽ chuyển thành liên kết có thể nhấp trong phần [[Các chế độ xem và chế độ chỉnh sửa#Xem trước trực tiếp|xem trước trực tiếp]].

![[daily-notes-and-date-properties.png#interface|300]]
^daily-notes-date
