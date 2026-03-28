---
permalink: uri
---
Obsidian URI là một giao thức URI tùy chỉnh được Obsidian hỗ trợ, cho phép bạn kích hoạt các hành động khác nhau, chẳng hạn như mở ghi chú hoặc tạo ghi chú. Obsidian URI cho phép tự động hóa và quy trình làm việc xuyên ứng dụng.

## Định dạng URI

Obsidian URI sử dụng định dạng sau:

```
obsidian://action?param1=value&param2=value
```

Tham số `action` là hành động bạn muốn thực hiện. Các hành động có sẵn bao gồm:

- `open` để mở một ghi chú.
- `new` để tạo hoặc thêm vào một ghi chú hiện có.
- `daily` để tạo hoặc mở ghi chú hằng ngày của bạn.
- `unique` để tạo một ghi chú duy nhất mới.
- `search` để mở tìm kiếm.
- `choose-vault` để mở trình quản lý kho.

> [!warning] Mã hóa
> Đảm bảo rằng các giá trị của bạn được mã hóa URI đúng cách. Ví dụ, ký tự gạch chéo `/` phải được mã hóa thành `%2F` và ký tự khoảng trắng phải được mã hóa thành `%20`.
> 
 Điều này đặc biệt quan trọng vì một ký tự "dành riêng" được mã hóa không đúng cách có thể làm hỏng việc phân tích URI. [Xem chi tiết tại đây](https://en.wikipedia.org/wiki/Percent-encoding).

## Mở ghi chú

Hành động `open` mở một kho Obsidian, hoặc mở một tệp trong kho đó.

### Ví dụ

- `obsidian://open?vault=my%20vault`
  Lệnh này mở kho `my vault`. Nếu kho đã được mở, nó sẽ tập trung vào cửa sổ đó.
- `obsidian://open?vault=ef6ca3e3b524d22f`
  Lệnh này mở kho được xác định bởi ID `ef6ca3e3b524d22f`.
- `obsidian://open?vault=my%20vault&file=my%20note`
  Lệnh này mở ghi chú `my note.md` trong kho `my vault`, giả sử tệp tồn tại.
- `obsidian://open?path=%2Fhome%2Fuser%2Fmy%20vault%2Fpath%2Fto%2Fmy%20note`
  Lệnh này sẽ tìm bất kỳ kho nào chứa đường dẫn `/home/user/my vault/path/to/my note`. Sau đó, phần còn lại của đường dẫn được truyền cho tham số `file`. Ví dụ, nếu một kho tồn tại tại `/home/user/my vault`, thì lệnh này tương đương với tham số `file` được đặt là `path/to/my note`.


> [!tip] Mở một tiêu đề hoặc khối
> Với mã hóa URI đúng cách, bạn có thể điều hướng đến một tiêu đề hoặc khối trong ghi chú. `Note%23Heading` sẽ điều hướng đến tiêu đề có tên "Heading", trong khi `Note%23%5EBlock` sẽ điều hướng đến khối có tên "Block".

### Tham số

- `vault` có thể là tên kho hoặc ID kho[^1].
- `file` có thể là tên tệp, hoặc đường dẫn từ thư mục gốc của kho đến tệp được chỉ định. Nếu phần mở rộng tệp là `md`, phần mở rộng có thể được bỏ qua.
- `path` là đường dẫn tuyệt đối trên hệ thống tệp đến một tệp.
  - Sử dụng tham số này sẽ ghi đè cả `vault` và `file`.
  - Điều này sẽ khiến ứng dụng tìm kiếm kho cụ thể nhất chứa đường dẫn tệp được chỉ định.
  - Sau đó phần còn lại của đường dẫn sẽ thay thế tham số `file`.
- `prepend` sẽ thêm vào đầu tệp và cố gắng hợp nhất thuộc tính.
- `append` sẽ thêm vào cuối tệp và cũng cố gắng hợp nhất thuộc tính.
- `paneType` (tùy chọn) xác định vị trí ghi chú sẽ được mở trong giao diện.
  - nếu không có, thẻ hoạt động cuối cùng sẽ bị thay thế.
  - `paneType=tab` mở trong thẻ mới.
  - `paneType=split` mở trong nhóm thẻ mới.
  - `paneType=window` mở trong cửa sổ bật ra (chỉ Desktop).

## Tạo ghi chú

Hành động `new` tạo một ghi chú mới trong kho, tùy chọn với một số nội dung.

### Ví dụ

- `obsidian://new?vault=my%20vault&name=my%20note`
  Lệnh này mở kho `my vault`, và tạo một ghi chú mới có tên `my note`.
- `obsidian://new?vault=my%20vault&file=path%2Fto%2Fmy%20note`
  Lệnh này mở kho `my vault`, và tạo một ghi chú mới tại `path/to/my note`.

### Tham số

- `vault` có thể là tên kho, hoặc ID kho[^1]. Giống như hành động `open`.
- `name` tên tệp sẽ được tạo. Nếu được chỉ định, vị trí tệp sẽ được chọn dựa trên tùy chọn "Vị trí mặc định cho ghi chú mới" của bạn.
- `file` đường dẫn tuyệt đối trong kho, bao gồm cả tên. Sẽ ghi đè `name` nếu được chỉ định.
- `path` đường dẫn tuyệt đối toàn cục. Hoạt động tương tự như tùy chọn `path` trong hành động `open`, sẽ ghi đè cả `vault` và `file`.
- `paneType` (tùy chọn) xác định vị trí ghi chú sẽ được mở trong giao diện. Giống như hành động `open`.
- `content` (tùy chọn) nội dung của ghi chú.
- `clipboard` (tùy chọn) sử dụng nội dung của bảng tạm thay vì chỉ định `content`.
- `silent` (tùy chọn) bao gồm tham số này nếu bạn không muốn mở ghi chú mới.
- `append` (tùy chọn) bao gồm tham số này để thêm vào cuối tệp hiện có nếu đã tồn tại.
- `overwrite` (tùy chọn) ghi đè tệp hiện có nếu đã tồn tại, nhưng chỉ khi `append` không được đặt.
- `x-success` (tùy chọn) xem [[#Sử dụng tham số x-callback-url]].

## Tạo hoặc mở ghi chú hằng ngày

Hành động `daily` tạo hoặc mở ghi chú hằng ngày của bạn. Plugin [[Ghi chú hàng ngày]] phải được bật.

### Ví dụ

- `obsidian://daily?vault=my%20vault`
  Lệnh này mở kho `my vault`, và tạo hoặc mở ghi chú hằng ngày.

### Tham số

Hành động `daily` chấp nhận các tham số giống như hành động `new`.

## Ghi chú duy nhất

Hành động `unique` tạo một ghi chú duy nhất mới trong kho. Plugin [[Tạo ghi chú duy nhất]] phải được bật.

### Ví dụ

- `obsidian://unique?vault=my%20vault`
  Lệnh này mở kho `my vault`, và tạo một ghi chú duy nhất mới.
- - `obsidian://unique?vault=my%20vault&content=Hello%20World`
  Lệnh này mở kho `my vault`, và tạo một ghi chú duy nhất mới với nội dung `Hello World`.

### Tham số

- `vault` có thể là tên kho, hoặc ID kho[^1]. Giống như hành động `open`.
- `paneType` (tùy chọn) xác định vị trí ghi chú sẽ được mở trong giao diện. Giống như hành động `open`.
- `content` (tùy chọn) nội dung của ghi chú.
- `clipboard` (tùy chọn) sử dụng nội dung của bảng tạm thay vì chỉ định `content`.
- `x-success` (tùy chọn) xem [[#Sử dụng tham số x-callback-url]].

## Mở tìm kiếm

Hành động `search` mở [[Tìm kiếm]] trong kho được chỉ định, và tùy chọn thực hiện một cụm từ tìm kiếm.

### Ví dụ

- `obsidian://search?vault=my%20vault`
  Lệnh này mở kho `my vault`, và mở [[Tìm kiếm]].
- `obsidian://search?vault=my%20vault&query=Obsidian`
  Lệnh này mở kho `my vault`, mở [[Tìm kiếm]], và thực hiện tìm kiếm `Obsidian`.

### Tham số

- `vault` có thể là tên kho, hoặc ID kho[^1]. Giống như hành động `open`.
- `query` (tùy chọn) cụm từ tìm kiếm cần thực hiện.

## Mở Trình quản lý kho

Hành động `choose-vault` mở [[Quản lý kho|trình quản lý kho]].

### Ví dụ

- `obsidian://choose-vault`

## Tích hợp với Hook

Hành động Obsidian URI này được sử dụng với [Hook](https://hookproductivity.com/).

### Ví dụ

`obsidian://hook-get-address`

### Tham số

- `vault` (tùy chọn) có thể là tên kho, hoặc ID kho[^1]. Nếu không được cung cấp, kho hiện tại hoặc kho được tập trung gần nhất sẽ được sử dụng.
- `x-success` (tùy chọn) xem [[#Sử dụng tham số x-callback-url]].
- `x-error` (tùy chọn) xem [[#Sử dụng tham số x-callback-url]].

Nếu `x-success` được định nghĩa, API này sẽ sử dụng nó làm x-callback-url. Nếu không, nó sẽ sao chép một liên kết Markdown của ghi chú đang được tập trung vào bảng tạm, dưới dạng URL `obsidian://open`.

## Sử dụng tham số x-callback-url

Một số điểm cuối sẽ chấp nhận các tham số x-callback-url `x-success` và `x-error`. Khi được cung cấp, Obsidian sẽ trả về các thông tin sau cho callback `x-success`:

- `name` tên của tệp, không bao gồm phần mở rộng tệp.
- `url` URI `obsidian://` cho tệp này.
- `file` (chỉ desktop) URL `file://` cho tệp này.

Ví dụ, nếu Obsidian nhận được
`obsidian://.....x-success=myapp://x-callback-url`, phản hồi sẽ là `myapp://x-callback-url?name=...&url=obsidian%3A%2F%2Fopen...&file=file%3A%2F%2F...`

## Định dạng viết tắt

Ngoài các định dạng trên, có thêm hai định dạng "viết tắt" có sẵn để mở kho và tệp:

1. `obsidian://vault/my vault/my note` tương đương với `obsidian://open?vault=my%20vault&file=my%20note`.
2. `obsidian:///absolute/path/to/my note` tương đương với `obsidian://open?path=%2Fabsolute%2Fpath%2Fto%2Fmy%20note`.

## Khắc phục sự cố

### Đăng ký Obsidian URI

Trên Windows và macOS, chạy ứng dụng một lần là đủ để đăng ký giao thức Obsidian URI trên máy tính của bạn.

Trên Linux, đây là một quy trình phức tạp hơn nhiều:

1. Đảm bảo bạn tạo tệp `obsidian.desktop`. [Xem chi tiết tại đây](https://developer.gnome.org/documentation/guidelines/maintainer/integrating.html#desktop-files).
2. Đảm bảo rằng tệp desktop của bạn chỉ định trường `Exec` là `Exec=executable %u`. `%u` được sử dụng để truyền các URI `obsidian://` cho ứng dụng.
3. Nếu bạn đang sử dụng trình cài đặt AppImage, bạn có thể cần giải nén nó bằng `Obsidian-x.y.z.AppImage --appimage-extract`. Sau đó đảm bảo chỉ thị `Exec` trỏ đến tệp thực thi đã giải nén.


[^1]: ID kho là mã ngẫu nhiên 16 ký tự được gán cho kho, ví dụ `ef6ca3e3b524d22f`. ID này là duy nhất cho mỗi thư mục trên máy tính của bạn. Bạn có thể tìm ID bằng cách mở trình chuyển kho và nhấp "Sao chép vault ID" trong menu ngữ cảnh cho kho mong muốn.
