Obsidian hỗ trợ giao thức URI tùy chỉnh `obsidian://` có thể được sử dụng để kích hoạt các hành động khác nhau trong ứng dụng. Điều này thường được sử dụng trên MacOS và các ứng dụng dành cho thiết bị di động để tự động hóa và quy trình làm việc giữa các ứng dụng.

Nếu bạn đã cài đặt Obsidian, liên kết này sẽ mở ứng dụng trên thiết bị của bạn: [Nhấn vào đây](obsidian://open)

## Cài đặt Obsidian URI

Để đảm bảo hệ điều hành của bạn chuyển hướng URI `obsidian://` đến ứng dụng Obsidian, có thể có các bước bạn cần thực hiện.

- Trên Windows, chỉ cần chạy ứng dụng một lần là đủ. Thao tác này sẽ đăng ký trình xử lý giao thức tùy chỉnh `obsidian://` trong sổ đăng ký Windows.
- Trên MacOS, chỉ cần chạy ứng dụng một lần là đủ, tuy nhiên, ứng dụng của bạn **phải** là phiên bản 0.8.12 trở lên.
- Trên Linux, cần thực hiện thêm các bước:
	- Đầu tiên, hãy đảm bảo bạn tạo một file `obsidian.desktop`. [Xem chi tiết tại đây](https://developer.gnome.org/integration-guide/stable/desktop-files.html.en)
	- Đảm bảo rằng file trên máy tính của bạn chỉ định trường `Exec` là `Exec=executable %u`. `%u` được sử dụng để chuyển các URI `obsidian://` vào ứng dụng.
	- Nếu đang sử dụng trình cài đặt AppImage, bạn có thể phải giải nén nó bằng cách sử dụng `Obsidian-x.y.z.AppImage --appimage-extract`. Sau đó, đảm bảo rằng chỉ thị `Exec` trỏ đến tệp thực thi được giải nén.

## Sử dụng Obsidian URI

Các Obsidian URI thường có định dạng sau:

```
obsidian://action?param1=value&param2=value
```

- `action` thường là hành động mà bạn muốn thực hiện.

### Mã hóa

==Quan trọng==

Đảm bảo rằng các giá trị được mã hóa URI chính xác. Ví dụ: các ký tự gạch chéo `/` phải được mã hóa thành `%2F` và các ký tự khoảng trắng phải được mã hóa thành `%20`.

Điều này đặc biệt quan trọng vì một ký tự "đặc biệt" được mã hóa không đúng có thể giảm khả năng diễn giải của URI. [Xem chi tiết tại đây](https://en.wikipedia.org/wiki/Percent-encoding)

### Hoạt động có sẵn

#### Hành động `open`

Mô tả: Mở vault Obsidian và có thể mở một file trong vault đó.

Các thông số có thể có:

- `vault` có thể là tên vault hoặc ID vault.
	- Tên vault chỉ đơn giản là tên của thư mục vault.
	- ID vault là mã 16 ký tự ngẫu nhiên được gán cho vault. ID này là duy nhất cho mỗi thư mục trên máy tính của bạn. Ví dụ: `ef6ca3e3b524d22f`. Hiện vẫn chưa có cách dễ dàng để tìm thấy ID này, một ID sẽ được cung cấp vào một ngày sau đó trong trình chuyển đổi vault. Hiện tại, bạn có thể tìm thấy nó trong `%appdata%/obsidian/obsidian.json` dành cho Windows. Đối với MacOS, thay thế `%appdata%` bằng `~/Library/Application Support/`. Đối với Linux, thay thế `%appdata%` bằng `~/.config/`.
- `file` có thể là tên file hoặc đường dẫn từ gốc vault đến file được chỉ định.
	- Để giải quyết đích của file, Obsidian sử dụng cùng một hệ thống phân giải liên kết như một `[[wikilink]]` thông thường trong vault.
	- Nếu phần mở rộng tệp là `md`, phần mở rộng có thể được bỏ qua.
- `path` một đường dẫn hệ thống file tuyệt đối đến một file.
	- Sử dụng tham số này sẽ ghi đè lên cả `vault` và `file`.
	- Điều này sẽ khiến ứng dụng tìm kiếm vault cụ thể nhất có chứa đường dẫn file được chỉ định.
	- Sau đó, phần còn lại của đường dẫn thay thế tham số `file`.

Ví dụ:

- `obsidian://open?vault=my%20vault`
	Điều này sẽ mở ra vault `my vault`. Nếu vault đã được mở, hãy tập trung vào cửa sổ.

- `obsidian://open?vault=ef6ca3e3b524d22f`
	Thao tác này sẽ mở vault được xác định bởi ID `ef6ca3e3b524d22f`.

- `obsidian://open?vault=my%20vault&file=my%20note`
	Thao tác này sẽ mở ghi chú `my note` trong vault `my vault`, giả sử rằng `my note` tồn tại và file là `my note.md`.

- `obsidian://open?vault=my%20vault&file=my%20note.md`
	Thao tác này sẽ mở ghi chú `my note` trong vault `my vault`.

- `obsidian://open?vault=my%20vault&file=path%2Fto%2Fmy%20note`
	Thao tác này sẽ mở ghi chú nằm tại `path/to/my note` trong vault `my vault`.

- `obsidian://open?path=%2Fhome%2Fuser%2Fmy%20vault%2Fpath%2Fto%2Fmy%20note`
	Thao tác này sẽ tìm kiếm bất kỳ vault nào có chứa đường dẫn `/home/user/my vault/path/to/my note`. Sau đó, phần còn lại của đường dẫn được chuyển đến tham số `file`. Ví dụ: nếu một vault tồn tại tại `/home/user/my vault`, thì điều này sẽ tương đương với tham số `file` được đặt thành `path/to/my note`.

- `obsidian://open?path=D%3A%5CDocuments%5CMy%20vault%5CMy%20note`
	Thao tác này sẽ tìm kiếm bất kỳ vault nào có chứa đường dẫn `D:\Documents\My vault\My note`. Sau đó, phần còn lại của đường dẫn được chuyển đến tham số `file`. Ví dụ: nếu một vault tồn tại tại `D:\Documents\My vault`, thì điều này sẽ tương đương với tham số `file` được đặt thành `My note`.
	
#### Hành động `search`

Mô tả: Mở ngăn tìm kiếm cho một vault và thực hiện một truy vấn tìm kiếm theo tùy chọn.

Các thông số có thể có:

- `vault` có thể là tên vault hoặc ID vault. Tương tự như hành động `open`.
- `query` (tùy chọn) Truy vấn tìm kiếm để thực hiện.

Ví dụ:

- `obsidian://search?vault=my%20vault`
	Thao tác này sẽ mở vault `my vault` và mở ngăn tìm kiếm.

- `obsidian://search?vault=my%20vault&query=MOC`
	Thao tác này sẽ mở vault `my vault`, mở ngăn tìm kiếm và thực hiện tìm kiếm cho `MOC`.
	
#### Hành động `new`

Mô tả: Tạo ghi chú mới trong vault, tùy chọn với một số nội dung.

Các thông số có thể có:

- `vault` có thể là tên vault hoặc ID vault. Tương tự như hành động `open`.
- `name` tên file sẽ được tạo. Nếu điều này được chỉ định, vị trí file sẽ được chọn dựa trên tùy chọn "Default location for new notes" (Vị trí mặc định cho ghi chú mới) của bạn.
- `file` một đường dẫn tuyệt đối của vault, bao gồm cả tên. Sẽ ghi đè `name` nếu được chỉ định.
- `path` một đường dẫn tuyệt đối toàn cục. Hoạt động tương tự như tùy chọn `path` trong hành động `open`, sẽ ghi đè lên cả `vault` và `file`.
- `content` (tùy chọn) nội dung của ghi chú.
- `silent` (tùy chọn) cài đặt điều này nếu bạn không muốn mở ghi chú mới.

Ví dụ:

- `obsidian://new?vault=my%20vault&name=my%20note`
	Thao tác này sẽ mở vault `my vault` và tạo một ghi chú mới có tên là `my note`.
- `obsidian://new?vault=my%20vault&path=path%2Fto%2Fmy%20note`
	Thao tác này sẽ mở vault `my vault` và tạo một ghi chú mới tại `path/to/my note`.
	
#### Hành động `hook-get-address`

Mô tả: Điểm cuối để sử dụng với [Hook](https://hookproductivity.com/). Sao chép liên kết markdown của ghi chú có tiêu điểm hiện tại vào khay nhớ tạm, dưới dạng URL `obsidian://open`. Sử dụng: `obsidian://hook-get-address`

Các thông số có thể có:

- `vault` (tùy chọn) có thể là tên vault hoặc ID vault. Nếu không được cung cấp, vault tập trung hiện tại hoặc cuối cùng sẽ được sử dụng.

## Định dạng tốc ký

Ngoài các định dạng ở trên, có hai định dạng "tốc ký" khác có sẵn để mở vault và tệp:

- `obsidian://vault/my vault/my note` tương đương với `obsidian://open?vault=my%20vault&file=my%20note`
- `obsidian:///absolute/path/to/my note` tương đương với `obsidian://open?path=%2Fabsolute%2Fpath%2Fto%2Fmy%20note`
