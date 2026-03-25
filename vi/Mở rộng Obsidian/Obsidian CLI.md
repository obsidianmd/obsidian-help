---
permalink: cli
description: Mọi thao tác bạn có thể thực hiện trong Obsidian đều có thể được thực hiện từ dòng lệnh.
---
Obsidian CLI là một giao diện dòng lệnh cho phép bạn điều khiển Obsidian từ terminal để viết kịch bản, tự động hóa và tích hợp với các công cụ bên ngoài.

Mọi thứ bạn có thể làm trong Obsidian đều có thể thực hiện từ dòng lệnh. Obsidian CLI thậm chí còn bao gồm [[#Lệnh dành cho nhà phát triển|lệnh dành cho nhà phát triển]] để truy cập công cụ phát triển, kiểm tra phần tử, chụp ảnh màn hình, tải lại plugin và nhiều hơn nữa.

![[obsidian-cli.mp4#interface]]

> [!warning] Yêu cầu trình cài đặt Obsidian 1.12
> Sử dụng CLI yêu cầu trình cài đặt Obsidian 1.12. Xem [[Cập nhật Obsidian#Cập nhật trình cài đặt|hướng dẫn cập nhật phiên bản trình cài đặt]].

## Cài đặt Obsidian CLI

Nâng cấp lên [[Cập nhật Obsidian|phiên bản trình cài đặt Obsidian]] mới nhất (1.11.7) và [[Phiên bản truy cập sớm|phiên bản truy cập sớm]] mới nhất (1.12.x).

Kích hoạt Obsidian CLI trong Obsidian:

1. Đi tới **Cài đặt** → **Chung**.
2. Kích hoạt **Giao diện dòng lệnh**.
3. Làm theo hướng dẫn để đăng ký Obsidian CLI.

Nếu bạn gặp vấn đề khi cài đặt Obsidian CLI, xem [[#Khắc phục sự cố]].

## Bắt đầu

Obsidian CLI hỗ trợ cả lệnh đơn và giao diện người dùng terminal (TUI) với trợ giúp tương tác và tự động hoàn tất.

> [!info] Ứng dụng Obsidian phải đang chạy
> Obsidian CLI yêu cầu ứng dụng Obsidian đang chạy. Nếu Obsidian chưa chạy, lệnh đầu tiên bạn thực thi sẽ khởi chạy Obsidian.
>
> Muốn đồng bộ hóa mà không cần ứng dụng desktop? Xem [[Obsidian Headless|Obsidian Headless]].

### Chạy một lệnh

Chạy một lệnh đơn lẻ mà không mở TUI:

```shell
# Chạy lệnh trợ giúp
obsidian help
```

### Sử dụng giao diện terminal

Sử dụng TUI bằng cách nhập `obsidian`. Các lệnh tiếp theo có thể được nhập mà không cần `obsidian`.

```shell
# Mở TUI, sau đó chạy help
obsidian
help
```

TUI hỗ trợ tự động hoàn tất, lịch sử lệnh và tìm kiếm ngược. Sử dụng `Ctrl+R` để tìm kiếm lịch sử lệnh. Xem [[#Phím tắt]] để biết tất cả phím tắt có sẵn.

## Ví dụ

Dưới đây là một số ví dụ về những gì Obsidian CLI có thể làm.

### Sử dụng hàng ngày

```shell
# Mở ghi chú hàng ngày hôm nay
obsidian daily

# Thêm một tác vụ vào ghi chú hàng ngày
obsidian daily:append content="- [ ] Mua đồ tạp hóa"

# Tìm kiếm trong kho
obsidian search query="ghi chú cuộc họp"

# Đọc tệp đang hoạt động
obsidian read

# Liệt kê tất cả tác vụ từ ghi chú hàng ngày
obsidian tasks daily

# Tạo ghi chú mới từ mẫu
obsidian create name="Chuyến đi Paris" template=Travel

# Liệt kê tất cả thẻ trong kho với số lượng
obsidian tags counts

# So sánh hai phiên bản của một tệp
obsidian diff file=README from=1 to=3
```

### Dành cho nhà phát triển

Nhiều [[#Lệnh dành cho nhà phát triển]] có sẵn cho việc phát triển plugin và chủ đề. Các lệnh này cho phép các công cụ lập trình tự động kiểm tra và gỡ lỗi.

```shell
# Mở công cụ phát triển
obsidian devtools

# Tải lại một plugin cộng đồng bạn đang phát triển
obsidian plugin:reload id=my-plugin

# Chụp ảnh màn hình ứng dụng
obsidian dev:screenshot path=screenshot.png

# Chạy JavaScript trong bảng điều khiển ứng dụng
obsidian eval code="app.vault.getFiles().length"
```

## Hướng dẫn

### Sử dụng tham số và cờ

Các lệnh có thể sử dụng **tham số** và **cờ**. Hầu hết các lệnh không yêu cầu tham số hoặc cờ nào. Các tham số bắt buộc được đánh dấu là `required`. Ví dụ:

```shell
# Tạo ghi chú mới sử dụng tên mặc định "Untitled"
obsidian create
```

Một **tham số** nhận một giá trị, được viết dưới dạng `parameter=value`. Nếu giá trị có khoảng trắng, hãy bọc trong dấu ngoặc kép:

```shell
# Tạo ghi chú mới có tên "Note" với nội dung "Hello world"
obsidian create name=Note content="Hello world"
```

Một **cờ** là một công tắc boolean không có giá trị. Thêm nó vào để bật, ví dụ `open` và `overwrite` là các cờ:

```shell
# Tạo ghi chú và mở nó
obsidian create name=Note content="Hello" open overwrite
```

Đối với nội dung nhiều dòng, sử dụng `\n` cho dòng mới. Sử dụng `\t` cho tab.

```bash
obsidian create name=Note content="# Tiêu đề\n\nNội dung văn bản"
```

### Chỉ định kho

Nếu thư mục làm việc hiện tại của terminal là thư mục kho, kho đó sẽ được sử dụng theo mặc định. Nếu không, kho đang hoạt động sẽ được sử dụng.

Sử dụng `vault=<name>` hoặc `vault=<id>` để chỉ định một kho cụ thể. Tham số này phải đứng đầu tiên trước lệnh của bạn:

```shell
obsidian vault=Notes daily
obsidian vault="My Vault" search query="test"
```

Trong TUI, sử dụng `vault:open <name>` hoặc `<id>` để chuyển sang kho khác.

### Chỉ định tệp

Nhiều lệnh chấp nhận tham số `file` và `path` để chỉ định một tệp cụ thể. Nếu không cung cấp, lệnh sẽ mặc định sử dụng tệp đang hoạt động.

- `file=<name>` phân giải tệp sử dụng cùng cách phân giải liên kết như [[Liên kết nội bộ|liên kết wiki]], khớp theo tên tệp mà không yêu cầu đường dẫn đầy đủ hoặc phần mở rộng.
- `path=<path>` yêu cầu đường dẫn chính xác từ gốc kho, ví dụ `folder/note.md`.

```shell
# Các lệnh sau tương đương nếu "Recipe.md" là tệp duy nhất có tên đó
obsidian read file=Recipe
obsidian read path="Templates/Recipe.md"
```

### Sao chép đầu ra

Thêm `--copy` vào bất kỳ lệnh nào để sao chép đầu ra vào bảng tạm:

```shell
read --copy
search query="TODO" --copy
```


## Lệnh chung

### `help`

Hiển thị danh sách tất cả các lệnh có sẵn.

| Tham số     | Mô tả                              |
| ----------- | ----------------------------------- |
| `<command>` | Hiển thị trợ giúp cho lệnh cụ thể. |

### `version`

Hiển thị phiên bản Obsidian.

### `reload`

Tải lại cửa sổ ứng dụng.

### `restart`

Khởi động lại ứng dụng.


## Cơ sở

Lệnh cho [[Giới thiệu về Cơ sở|Cơ sở]].

### `bases`

Liệt kê tất cả tệp `.base` trong kho.

### `base:views`

Liệt kê các chế độ xem trong tệp cơ sở hiện tại.

### `base:create`

Tạo một mục mới trong cơ sở. Mặc định sử dụng chế độ xem cơ sở đang hoạt động nếu không chỉ định tệp.

```bash
file=<name>        # tên tệp cơ sở
path=<path>        # đường dẫn tệp cơ sở
view=<name>        # tên chế độ xem
name=<name>        # tên tệp mới
content=<text>     # nội dung ban đầu

open               # mở tệp sau khi tạo
newtab             # mở trong thẻ mới
```

### `base:query`

Truy vấn một cơ sở và trả về kết quả.

```bash
file=<name>                    # tên tệp cơ sở
path=<path>                    # đường dẫn tệp cơ sở
view=<name>                    # tên chế độ xem để truy vấn
format=json|csv|tsv|md|paths   # định dạng đầu ra (mặc định: json)
```

## Đánh dấu

Lệnh cho [[Đánh dấu]].

### `bookmarks`

Liệt kê dấu trang.

```bash
total              # trả về số lượng dấu trang
verbose            # bao gồm loại dấu trang
format=json|tsv|csv  # định dạng đầu ra (mặc định: tsv)
```

### `bookmark`

Thêm dấu trang.

```bash
file=<path>        # tệp cần đánh dấu
subpath=<subpath>  # đường dẫn con (tiêu đề hoặc khối) trong tệp
folder=<path>      # thư mục cần đánh dấu
search=<query>     # truy vấn tìm kiếm cần đánh dấu
url=<url>          # URL cần đánh dấu
title=<title>      # tiêu đề dấu trang
```

## Bảng lệnh

Lệnh cho [[Khay lệnh]] và [[Phím tắt]]. Bao gồm tất cả lệnh được đăng ký bởi plugin.

### `commands`

Liệt kê ID lệnh có sẵn.

```bash
filter=<prefix>    # lọc theo tiền tố ID
```

### `command`

Thực thi một lệnh Obsidian.

```bash
id=<command-id>    # (bắt buộc) ID lệnh cần thực thi
```

### `hotkeys`

Liệt kê phím tắt cho tất cả lệnh.

```bash
total              # trả về số lượng phím tắt
verbose            # hiển thị phím tắt có phải tùy chỉnh không
format=json|tsv|csv  # định dạng đầu ra (mặc định: tsv)
```

### `hotkey`

Lấy phím tắt cho một lệnh.

```bash
id=<command-id>    # (bắt buộc) ID lệnh

verbose            # hiển thị tùy chỉnh hay mặc định
```

## Ghi chú hàng ngày

Lệnh cho [[Ghi chú hàng ngày]].

### `daily`

Mở ghi chú hàng ngày.

```bash
paneType=tab|split|window    # loại panel để mở
```

### `daily:path`

Lấy đường dẫn ghi chú hàng ngày. Trả về đường dẫn dự kiến ngay cả khi tệp chưa được tạo.

### `daily:read`

Đọc nội dung ghi chú hàng ngày.

### `daily:append`

Thêm nội dung vào cuối ghi chú hàng ngày.

```bash
content=<text>     # (bắt buộc) nội dung cần thêm
paneType=tab|split|window    # loại panel để mở

inline             # thêm mà không xuống dòng
open               # mở tệp sau khi thêm
```

### `daily:prepend`

Thêm nội dung vào đầu ghi chú hàng ngày.

```bash
content=<text>     # (bắt buộc) nội dung cần thêm
paneType=tab|split|window    # loại panel để mở

inline             # thêm mà không xuống dòng
open               # mở tệp sau khi thêm
```

## Lịch sử tệp

### `diff`

Liệt kê hoặc so sánh các phiên bản từ [[Khôi phục tập tin]] cục bộ và [[Giới thiệu về Obsidian Sync|Sync]]. Các phiên bản được đánh số từ mới nhất đến cũ nhất.

```bash
file=<name>          # tên tệp
path=<path>          # đường dẫn tệp
from=<n>             # số phiên bản để so sánh từ
to=<n>               # số phiên bản để so sánh đến
filter=local|sync    # lọc theo nguồn phiên bản
```

**Ví dụ:**

```shell
# Liệt kê tất cả phiên bản của tệp đang hoạt động
diff

# Liệt kê tất cả phiên bản của một tệp cụ thể
diff file=Recipe

# So sánh phiên bản mới nhất với tệp hiện tại
diff file=Recipe from=1

# So sánh hai phiên bản
diff file=Recipe from=2 to=1

# Chỉ hiển thị phiên bản Sync
diff filter=sync
```

### `history`

Liệt kê các phiên bản từ [[Khôi phục tập tin]] chỉ. Xem [[#Sync|sync:history]] cho lệnh Sync tương đương.

```bash
file=<name>        # tên tệp
path=<path>        # đường dẫn tệp
```

### `history:list`

Liệt kê tất cả tệp có lịch sử cục bộ.

### `history:read`

Đọc một phiên bản lịch sử cục bộ.

```bash
file=<name>        # tên tệp
path=<path>        # đường dẫn tệp
version=<n>        # số phiên bản (mặc định: 1)
```

### `history:restore`

Khôi phục một phiên bản lịch sử cục bộ.

```bash
file=<name>        # tên tệp
path=<path>        # đường dẫn tệp
version=<n>        # (bắt buộc) số phiên bản
```

### `history:open`

Mở khôi phục tập tin.

```bash
file=<name>        # tên tệp
path=<path>        # đường dẫn tệp
```

## Tệp và thư mục

### `file`

Hiển thị thông tin tệp (mặc định: tệp đang hoạt động).

```bash
file=<name>        # tên tệp
path=<path>        # đường dẫn tệp
```

Ví dụ:

```
path       Notes/Recipe.md
name       Recipe
extension  md
size       1024
created    1700000000000
modified   1700001000000
```

### `files`

Liệt kê tệp trong kho.

```bash
folder=<path>      # lọc theo thư mục
ext=<extension>    # lọc theo phần mở rộng

total              # trả về số lượng tệp
```

### `folder`

Hiển thị thông tin thư mục.

```bash
path=<path>              # (bắt buộc) đường dẫn thư mục
info=files|folders|size  # chỉ trả về thông tin cụ thể
```

### `folders`

Liệt kê thư mục trong kho.

```bash
folder=<path>      # lọc theo thư mục cha

total              # trả về số lượng thư mục
```

### `open`

Mở một tệp.

```bash
file=<name>        # tên tệp
path=<path>        # đường dẫn tệp

newtab             # mở trong thẻ mới
```

### `create`

Tạo hoặc ghi đè một tệp.

```bash
name=<name>        # tên tệp
path=<path>        # đường dẫn tệp
content=<text>     # nội dung ban đầu
template=<name>    # mẫu để sử dụng

overwrite          # ghi đè nếu tệp đã tồn tại
open               # mở tệp sau khi tạo
newtab             # mở trong thẻ mới
```

### `read`

Đọc nội dung tệp (mặc định: tệp đang hoạt động).

```bash
file=<name>        # tên tệp
path=<path>        # đường dẫn tệp
```

### `append`

Thêm nội dung vào cuối tệp (mặc định: tệp đang hoạt động).

```bash
file=<name>        # tên tệp
path=<path>        # đường dẫn tệp
content=<text>     # (bắt buộc) nội dung cần thêm

inline             # thêm mà không xuống dòng
```

### `prepend`

Thêm nội dung sau siêu dữ liệu đầu tệp (mặc định: tệp đang hoạt động).

```bash
file=<name>        # tên tệp
path=<path>        # đường dẫn tệp
content=<text>     # (bắt buộc) nội dung cần thêm

inline             # thêm mà không xuống dòng
```

### `move`

Di chuyển hoặc đổi tên tệp (mặc định: tệp đang hoạt động). Lệnh này sẽ tự động cập nhật [[Liên kết nội bộ]] nếu được bật trong [[Cài đặt#Luôn cập nhật liên kết nội bộ|cài đặt kho]].

```bash
file=<name>        # tên tệp
path=<path>        # đường dẫn tệp
to=<path>          # (bắt buộc) thư mục hoặc đường dẫn đích
```

### `rename`

Đổi tên tệp (mặc định: tệp đang hoạt động). Phần mở rộng tệp được giữ nguyên tự động nếu bỏ qua trong tên mới. Sử dụng [[#`move`|move]] để đổi tên và di chuyển tệp cùng lúc. Lệnh này sẽ tự động cập nhật [[Liên kết nội bộ]] nếu được bật trong [[Cài đặt#Luôn cập nhật liên kết nội bộ|cài đặt kho]].

```bash
file=<name>        # tên tệp
path=<path>        # đường dẫn tệp
name=<name>        # (bắt buộc) tên tệp mới
```

### `delete`

Xóa tệp (mặc định: tệp đang hoạt động, chuyển vào thùng rác theo mặc định).

```bash
file=<name>        # tên tệp
path=<path>        # đường dẫn tệp

permanent          # bỏ qua thùng rác, xóa vĩnh viễn
```

## Liên kết

Lệnh cho [[Liên kết đến]] và [[Liên kết đi ra]].

### `backlinks`

Liệt kê liên kết ngược đến tệp (mặc định: tệp đang hoạt động).

```bash
file=<name>        # tên tệp đích
path=<path>        # đường dẫn tệp đích

counts             # bao gồm số lượng liên kết
total              # trả về số lượng liên kết ngược
format=json|tsv|csv  # định dạng đầu ra (mặc định: tsv)
```

### `links`

Liệt kê liên kết đi ra từ tệp (mặc định: tệp đang hoạt động).

```bash
file=<name>        # tên tệp
path=<path>        # đường dẫn tệp

total              # trả về số lượng liên kết
```

### `unresolved`

Liệt kê liên kết chưa phân giải trong kho.

```bash
total              # trả về số lượng liên kết chưa phân giải
counts             # bao gồm số lượng liên kết
verbose            # bao gồm tệp nguồn
format=json|tsv|csv  # định dạng đầu ra (mặc định: tsv)
```

### `orphans`

Liệt kê tệp không có liên kết đến.

```bash
total              # trả về số lượng tệp mô côi
```

### `deadends`

Liệt kê tệp không có liên kết đi ra.

```bash
total              # trả về số lượng tệp ngõ cụt
```

## Dàn ý

Lệnh cho [[Đề cương]].

### `outline`

Hiển thị tiêu đề cho tệp hiện tại.

```bash
file=<name>        # tên tệp
path=<path>        # đường dẫn tệp
format=tree|md|json  # định dạng đầu ra (mặc định: tree)

total              # trả về số lượng tiêu đề
```

## Plugin

Lệnh cho [[Plugin cốt lõi]] và [[Phần mở rộng từ cộng đồng]].

### `plugins`

Liệt kê plugin đã cài đặt.

```bash
filter=core|community  # lọc theo loại plugin

versions               # bao gồm số phiên bản
format=json|tsv|csv    # định dạng đầu ra (mặc định: tsv)
```

### `plugins:enabled`

Liệt kê plugin đã bật.

```bash
filter=core|community  # lọc theo loại plugin

versions               # bao gồm số phiên bản
format=json|tsv|csv    # định dạng đầu ra (mặc định: tsv)
```

### `plugins:restrict`

Bật/tắt hoặc kiểm tra chế độ hạn chế.

```bash
on                 # bật chế độ hạn chế
off                # tắt chế độ hạn chế
```

### `plugin`

Lấy thông tin plugin.

```bash
id=<plugin-id>     # (bắt buộc) ID plugin
```

### `plugin:enable`

Kích hoạt một plugin.

```bash
id=<id>                # (bắt buộc) ID plugin
filter=core|community  # loại plugin
```

### `plugin:disable`

Vô hiệu hóa một plugin.

```bash
id=<id>                # (bắt buộc) ID plugin
filter=core|community  # loại plugin
```

### `plugin:install`

Cài đặt một plugin cộng đồng.

```bash
id=<id>            # (bắt buộc) ID plugin

enable             # kích hoạt sau khi cài đặt
```

### `plugin:uninstall`

Gỡ bỏ cài đặt một plugin cộng đồng.

```bash
id=<id>            # (bắt buộc) ID plugin
```

### `plugin:reload`

Tải lại plugin (dành cho nhà phát triển).

```bash
id=<id>            # (bắt buộc) ID plugin
```

## Thuộc tính

Lệnh liên quan đến [[Thuộc tính]].

### `aliases`

Liệt kê bí danh trong kho. Sử dụng `active` hoặc `file`/`path` để hiển thị bí danh cho một tệp cụ thể.

```bash
file=<name>        # tên tệp
path=<path>        # đường dẫn tệp

total              # trả về số lượng bí danh
verbose            # bao gồm đường dẫn tệp
active             # hiển thị bí danh cho tệp đang hoạt động
```

### `properties`

Liệt kê thuộc tính trong kho. Sử dụng `active` hoặc `file`/`path` để hiển thị thuộc tính cho một tệp cụ thể.

```bash
file=<name>        # hiển thị thuộc tính cho tệp
path=<path>        # hiển thị thuộc tính cho đường dẫn
name=<name>        # lấy số lượng thuộc tính cụ thể
sort=count         # sắp xếp theo số lượng (mặc định: name)
format=yaml|json|tsv  # định dạng đầu ra (mặc định: yaml)

total              # trả về số lượng thuộc tính
counts             # bao gồm số lần xuất hiện
active             # hiển thị thuộc tính cho tệp đang hoạt động
```

### `property:set`

Đặt thuộc tính trên tệp (mặc định: tệp đang hoạt động).

```bash
name=<name>                                    # (bắt buộc) tên thuộc tính
value=<value>                                  # (bắt buộc) giá trị thuộc tính
type=text|list|number|checkbox|date|datetime   # loại thuộc tính
file=<name>                                    # tên tệp
path=<path>                                    # đường dẫn tệp
```

### `property:remove`

Xóa thuộc tính khỏi tệp (mặc định: tệp đang hoạt động).

```bash
name=<name>        # (bắt buộc) tên thuộc tính
file=<name>        # tên tệp
path=<path>        # đường dẫn tệp
```

### `property:read`

Đọc giá trị thuộc tính từ tệp (mặc định: tệp đang hoạt động).

```bash
name=<name>        # (bắt buộc) tên thuộc tính
file=<name>        # tên tệp
path=<path>        # đường dẫn tệp
```

## Publish

Lệnh cho [[Giới thiệu về Obsidian Publish|Obsidian Publish]].

### `publish:site`

Hiển thị thông tin trang Publish (slug, URL).

### `publish:list`

Liệt kê tệp đã xuất bản.

```bash
total              # trả về số lượng tệp đã xuất bản
```

### `publish:status`

Liệt kê các thay đổi Publish.

```bash
total              # trả về số lượng thay đổi
new                # chỉ hiển thị tệp mới
changed            # chỉ hiển thị tệp đã thay đổi
deleted            # chỉ hiển thị tệp đã xóa
```

### `publish:add`

Xuất bản tệp hoặc tất cả tệp đã thay đổi (mặc định: tệp đang hoạt động).

```bash
file=<name>        # tên tệp
path=<path>        # đường dẫn tệp

changed            # xuất bản tất cả tệp đã thay đổi
```

### `publish:remove`

Gỡ xuất bản tệp (mặc định: tệp đang hoạt động).

```bash
file=<name>        # tên tệp
path=<path>        # đường dẫn tệp
```

### `publish:open`

Mở tệp trên trang đã xuất bản (mặc định: tệp đang hoạt động).

```bash
file=<name>        # tên tệp
path=<path>        # đường dẫn tệp
```

## Ghi chú ngẫu nhiên

Lệnh cho [[Ghi chú ngẫu nhiên]].

### `random`

Mở ghi chú ngẫu nhiên.

```bash
folder=<path>      # giới hạn trong thư mục

newtab             # mở trong thẻ mới
```

### `random:read`

Đọc ghi chú ngẫu nhiên (bao gồm đường dẫn).

```bash
folder=<path>      # giới hạn trong thư mục
```

## Tìm kiếm

Lệnh cho [[Tìm kiếm]].

### `search`

Tìm kiếm văn bản trong kho. Trả về đường dẫn tệp khớp.

```bash
query=<text>       # (bắt buộc) truy vấn tìm kiếm
path=<folder>      # giới hạn trong thư mục
limit=<n>          # số tệp tối đa
format=text|json   # định dạng đầu ra (mặc định: text)

total              # trả về số kết quả khớp
case               # phân biệt chữ hoa/thường
```

### `search:context`

Tìm kiếm với ngữ cảnh dòng khớp. Trả về đầu ra kiểu grep `path:line: text`.

```bash
query=<text>       # (bắt buộc) truy vấn tìm kiếm
path=<folder>      # giới hạn trong thư mục
limit=<n>          # số tệp tối đa
format=text|json   # định dạng đầu ra (mặc định: text)

case               # phân biệt chữ hoa/thường
```

### `search:open`

Mở chế độ xem tìm kiếm.

```bash
query=<text>       # truy vấn tìm kiếm ban đầu
```

## Sync

Lệnh cho [[Giới thiệu về Obsidian Sync|Obsidian Sync]].

> [!tip] Đồng bộ hóa mà không cần ứng dụng desktop
> Các lệnh này điều khiển Sync trong ứng dụng Obsidian đang chạy. Để đồng bộ hóa kho từ dòng lệnh mà không cần ứng dụng desktop, xem [[Đồng bộ hóa không giao diện]].

### `sync`

Tạm dừng hoặc tiếp tục đồng bộ hóa.

```bash
on                 # tiếp tục đồng bộ hóa
off                # tạm dừng đồng bộ hóa
```

### `sync:status`

Hiển thị trạng thái và mức sử dụng đồng bộ hóa.

### `sync:history`

Liệt kê lịch sử phiên bản đồng bộ hóa cho tệp (mặc định: tệp đang hoạt động).

```bash
file=<name>        # tên tệp
path=<path>        # đường dẫn tệp

total              # trả về số lượng phiên bản
```

### `sync:read`

Đọc một phiên bản đồng bộ hóa (mặc định: tệp đang hoạt động).

```bash
file=<name>        # tên tệp
path=<path>        # đường dẫn tệp
version=<n>        # (bắt buộc) số phiên bản
```

### `sync:restore`

Khôi phục một phiên bản đồng bộ hóa (mặc định: tệp đang hoạt động).

```bash
file=<name>        # tên tệp
path=<path>        # đường dẫn tệp
version=<n>        # (bắt buộc) số phiên bản
```

### `sync:open`

Mở lịch sử đồng bộ hóa (mặc định: tệp đang hoạt động).

```bash
file=<name>        # tên tệp
path=<path>        # đường dẫn tệp
```

### `sync:deleted`

Liệt kê tệp đã xóa trong đồng bộ hóa.

```bash
total              # trả về số lượng tệp đã xóa
```

## Thẻ

Lệnh cho [[Thẻ]].

### `tags`

Liệt kê thẻ trong kho. Sử dụng `active` hoặc `file`/`path` để hiển thị thẻ cho một tệp cụ thể.

```bash
file=<name>        # tên tệp
path=<path>        # đường dẫn tệp
sort=count         # sắp xếp theo số lượng (mặc định: name)

total              # trả về số lượng thẻ
counts             # bao gồm số lượng thẻ
format=json|tsv|csv  # định dạng đầu ra (mặc định: tsv)
active             # hiển thị thẻ cho tệp đang hoạt động
```

### `tag`

Lấy thông tin thẻ.

```bash
name=<tag>         # (bắt buộc) tên thẻ

total              # trả về số lần xuất hiện
verbose            # bao gồm danh sách tệp và số lượng
```

## Tác vụ

Lệnh cho quản lý tác vụ.

### `tasks`

Liệt kê tác vụ trong kho. Sử dụng `active` hoặc `file`/`path` để hiển thị tác vụ cho một tệp cụ thể.

```bash
file=<name>        # lọc theo tên tệp
path=<path>        # lọc theo đường dẫn tệp
status="<char>"    # lọc theo ký tự trạng thái

total              # trả về số lượng tác vụ
done               # hiển thị tác vụ đã hoàn thành
todo               # hiển thị tác vụ chưa hoàn thành
verbose            # nhóm theo tệp với số dòng
format=json|tsv|csv  # định dạng đầu ra (mặc định: text)
active             # hiển thị tác vụ cho tệp đang hoạt động
daily              # hiển thị tác vụ từ ghi chú hàng ngày
```

**Ví dụ:**

```bash
# Liệt kê tất cả tác vụ trong kho
tasks

# Liệt kê tác vụ chưa hoàn thành trong kho
tasks todo

# Liệt kê tác vụ đã hoàn thành từ tệp cụ thể
tasks file=Recipe done

# Liệt kê tác vụ từ ghi chú hàng ngày hôm nay
tasks daily

# Đếm tác vụ trong ghi chú hàng ngày
tasks daily total

# Liệt kê tác vụ với đường dẫn tệp và số dòng
tasks verbose

# Lọc theo trạng thái tùy chỉnh (đặt ký tự đặc biệt trong ngoặc kép)
tasks 'status=?'
```

### `task`

Hiển thị hoặc cập nhật một tác vụ.

```bash
ref=<path:line>    # tham chiếu tác vụ (path:line)
file=<name>        # tên tệp
path=<path>        # đường dẫn tệp
line=<n>           # số dòng
status="<char>"    # đặt ký tự trạng thái

toggle             # chuyển đổi trạng thái tác vụ
daily              # ghi chú hàng ngày
done               # đánh dấu hoàn thành
todo               # đánh dấu chưa hoàn thành
```

**Ví dụ:**

```bash
# Hiển thị thông tin tác vụ
task file=Recipe line=8
task ref="Recipe.md:8"

# Chuyển đổi trạng thái hoàn thành tác vụ
task ref="Recipe.md:8" toggle

# Chuyển đổi tác vụ trong ghi chú hàng ngày
task daily line=3 toggle

# Đặt trạng thái tác vụ
task file=Recipe line=8 done      # → [x]
task file=Recipe line=8 todo      # → [ ]
task file=Recipe line=8 status=-  # → [-]
task daily line=3 done            # Đánh dấu tác vụ ghi chú hàng ngày hoàn thành
```


## Mẫu

Lệnh cho [[Mẫu]].

### `templates`

Liệt kê mẫu.

```bash
total              # trả về số lượng mẫu
```

### `template:read`

Đọc nội dung mẫu.

```bash
name=<template>    # (bắt buộc) tên mẫu
title=<title>      # tiêu đề để phân giải biến

resolve            # phân giải biến mẫu
```

### `template:insert`

Chèn mẫu vào tệp đang hoạt động.

```bash
name=<template>    # (bắt buộc) tên mẫu
```

**Ghi chú:**
- Tùy chọn `resolve` xử lý các biến `{{date}}`, `{{time}}`, `{{title}}`
- Sử dụng `create path=<path> template=<name>` để tạo tệp với mẫu

## Chủ đề và đoạn trích

Lệnh cho [[Chủ đề]] và [[Mẩu CSS]].

### `themes`

Liệt kê chủ đề đã cài đặt.

```bash
versions           # bao gồm số phiên bản
```

### `theme`

Hiển thị chủ đề đang hoạt động hoặc lấy thông tin.

```bash
name=<name>        # tên chủ đề để xem chi tiết
```

### `theme:set`

Đặt chủ đề đang hoạt động.

```bash
name=<name>        # (bắt buộc) tên chủ đề (để trống cho mặc định)
```

### `theme:install`

Cài đặt chủ đề cộng đồng.

```bash
name=<name>        # (bắt buộc) tên chủ đề

enable             # kích hoạt sau khi cài đặt
```

### `theme:uninstall`

Gỡ bỏ cài đặt chủ đề.

```bash
name=<name>        # (bắt buộc) tên chủ đề
```

### `snippets`

Liệt kê mẩu CSS đã cài đặt.

### `snippets:enabled`

Liệt kê mẩu CSS đã bật.

### `snippet:enable`

Kích hoạt mẩu CSS.

```bash
name=<name>        # (bắt buộc) tên đoạn trích
```

### `snippet:disable`

Vô hiệu hóa mẩu CSS.

```bash
name=<name>        # (bắt buộc) tên đoạn trích
```

## Ghi chú duy nhất

Lệnh cho [[Tạo ghi chú duy nhất]].

### `unique`

Tạo ghi chú duy nhất.

```bash
name=<text>        # tên ghi chú
content=<text>     # nội dung ban đầu
paneType=tab|split|window    # loại panel để mở

open               # mở tệp sau khi tạo
```

## Kho

### `vault`

Hiển thị thông tin kho.

```bash
info=name|path|files|folders|size  # chỉ trả về thông tin cụ thể
```

### `vaults`

Liệt kê các kho đã biết.

```bash
total              # trả về số lượng kho
verbose            # bao gồm đường dẫn kho
```

### `vault:open`

Chuyển sang kho khác (chỉ TUI).

```bash
name=<name>        # (bắt buộc) tên kho
```

## Trình xem web

Lệnh cho [[Trình xem web]].

### `web`

Mở URL trong trình xem web.

```bash
url=<url>          # (bắt buộc) URL cần mở

newtab             # mở trong thẻ mới
```

## Đếm từ

Lệnh cho [[Số từ]].

### `wordcount`

Đếm từ và ký tự (mặc định: tệp đang hoạt động).

```bash
file=<name>        # tên tệp
path=<path>        # đường dẫn tệp

words              # chỉ trả về số từ
characters         # chỉ trả về số ký tự
```

## Không gian làm việc

Lệnh cho [[Không gian làm việc]] và plugin [[Khung làm việc]].

### `workspace`

Hiển thị cây không gian làm việc.

```bash
ids                # bao gồm ID mục không gian làm việc
```

### `workspaces`

Liệt kê không gian làm việc đã lưu.

```bash
total              # trả về số lượng không gian làm việc
```

### `workspace:save`

Lưu bố cục hiện tại thành không gian làm việc.

```bash
name=<name>        # tên không gian làm việc
```

### `workspace:load`

Tải không gian làm việc đã lưu.

```bash
name=<name>        # (bắt buộc) tên không gian làm việc
```

### `workspace:delete`

Xóa không gian làm việc đã lưu.

```bash
name=<name>        # (bắt buộc) tên không gian làm việc
```

### `tabs`

Liệt kê thẻ đang mở.

```bash
ids                # bao gồm ID thẻ
```

### `tab:open`

Mở thẻ mới.

```bash
group=<id>         # ID nhóm thẻ
file=<path>        # tệp cần mở
view=<type>        # loại chế độ xem cần mở
```

### `recents`

Liệt kê tệp đã mở gần đây.

```bash
total              # trả về số lượng tệp gần đây
```

## Lệnh dành cho nhà phát triển

Lệnh giúp bạn phát triển [[Phần mở rộng từ cộng đồng]] và [[Chủ đề]]. Tìm hiểu thêm tại [Tài liệu dành cho nhà phát triển Obsidian](https://docs.obsidian.md).

### `devtools`

Bật/tắt công cụ phát triển Electron.

### `dev:debug`

Gắn/gỡ trình gỡ lỗi Chrome DevTools Protocol.

```bash
on                 # gắn trình gỡ lỗi
off                # gỡ trình gỡ lỗi
```

### `dev:cdp`

Chạy lệnh Chrome DevTools Protocol.

```bash
method=<CDP.method>  # (bắt buộc) phương thức CDP cần gọi
params=<json>        # tham số phương thức dạng JSON
```

### `dev:errors`

Hiển thị lỗi JavaScript đã bắt được.

```bash
clear              # xóa bộ đệm lỗi
```

### `dev:screenshot`

Chụp ảnh màn hình (trả về PNG dạng base64).

```bash
path=<filename>    # đường dẫn tệp đầu ra
```

### `dev:console`

Hiển thị thông báo console đã bắt được.

```bash
limit=<n>                        # số thông báo tối đa (mặc định 50)
level=log|warn|error|info|debug  # lọc theo mức log

clear                            # xóa bộ đệm console
```

### `dev:css`

Kiểm tra CSS với vị trí nguồn.

```bash
selector=<css>     # (bắt buộc) bộ chọn CSS
prop=<name>        # lọc theo tên thuộc tính
```

### `dev:dom`

Truy vấn phần tử DOM.

```bash
selector=<css>     # (bắt buộc) bộ chọn CSS
attr=<name>        # lấy giá trị thuộc tính
css=<prop>         # lấy giá trị thuộc tính CSS

total              # trả về số lượng phần tử
text               # trả về nội dung văn bản
inner              # trả về innerHTML thay vì outerHTML
all                # trả về tất cả kết quả khớp thay vì chỉ kết quả đầu tiên
```

### `dev:mobile`

Bật/tắt giả lập di động.

```bash
on                 # bật giả lập di động
off                # tắt giả lập di động
```

### `eval`

Thực thi JavaScript và trả về kết quả.

```bash
code=<javascript>  # (bắt buộc) mã JavaScript cần thực thi
```

## Phím tắt

Các phím tắt này có sẵn trong [[#Sử dụng giao diện terminal|TUI]].

### Điều hướng

| Hành động                                                    | Phím tắt        |
| ------------------------------------------------------------ | --------------- |
| Di chuyển con trỏ sang trái                                  | `←` / `Ctrl+B`  |
| Di chuyển con trỏ sang phải (chấp nhận gợi ý ở cuối dòng)   | `→` / `Ctrl+F`  |
| Nhảy đến đầu dòng                                            | `Ctrl+A`        |
| Nhảy đến cuối dòng                                           | `Ctrl+E`        |
| Lùi một từ                                                   | `Alt+B`         |
| Tiến một từ                                                  | `Alt+F`         |

### Chỉnh sửa

| Hành động                | Phím tắt                    |
| ------------------------ | --------------------------- |
| Xóa đến đầu dòng        | `Ctrl+U`                    |
| Xóa đến cuối dòng       | `Ctrl+K`                    |
| Xóa từ phía trước        | `Ctrl+W` / `Alt+Backspace`  |

### Tự động hoàn tất

| Hành động                                                   | Phím tắt     |
| ----------------------------------------------------------- | ------------ |
| Vào chế độ gợi ý / chấp nhận gợi ý đã chọn                | `Tab`        |
| Thoát chế độ gợi ý                                         | `Shift+Tab`  |
| Vào chế độ gợi ý (từ đầu vào mới)                          | `↓`          |
| Chấp nhận gợi ý đầu tiên/đã chọn (ở cuối dòng)            | `→`          |

### Lịch sử

| Hành động                                                             | Phím tắt        |
| --------------------------------------------------------------------- | --------------- |
| Mục lịch sử trước / điều hướng gợi ý lên                            | `↑` / `Ctrl+P`  |
| Mục lịch sử tiếp / điều hướng gợi ý xuống                           | `↓` / `Ctrl+N`  |
| Tìm kiếm lịch sử ngược (nhập để lọc, `Ctrl+R` để chuyển tiếp)       | `Ctrl+R`        |

### Khác

| Hành động                                                       | Phím tắt              |
| --------------------------------------------------------------- | --------------------- |
| Thực thi lệnh hoặc chấp nhận gợi ý                             | `Enter`               |
| Hoàn tác tự động hoàn tất / thoát chế độ gợi ý / xóa đầu vào  | `Escape`              |
| Xóa màn hình                                                    | `Ctrl+L`              |
| Thoát                                                           | `Ctrl+C` / `Ctrl+D`   |

## Khắc phục sự cố

Nếu bạn gặp khó khăn khi chạy Obsidian CLI:

- Đảm bảo bạn đang sử dụng [[Cập nhật Obsidian|phiên bản trình cài đặt Obsidian]] mới nhất (1.12.4 trở lên).
- Khởi động lại terminal sau khi đăng ký CLI để thay đổi PATH có hiệu lực.
- Obsidian phải đang chạy. CLI kết nối đến phiên bản Obsidian đang chạy. Nếu Obsidian chưa chạy, lệnh CLI đầu tiên sẽ khởi chạy ứng dụng.

### Windows

Obsidian CLI trên Windows yêu cầu trình cài đặt Obsidian 1.12.4+. Xem [[Cập nhật Obsidian|Cập nhật phiên bản trình cài đặt]].

Windows sử dụng trình chuyển hướng terminal kết nối Obsidian với stdin/stdout đúng cách. Điều này là cần thiết vì Obsidian thường chạy như ứng dụng GUI, không tương thích với đầu ra terminal trên Windows. Khi bạn cài đặt Obsidian 1.12.4+, trình chuyển hướng terminal `Obsidian.com` sẽ được thêm vào thư mục nơi bạn cài đặt tệp `Obsidian.exe`.

### macOS

Việc đăng ký CLI thêm thư mục nhị phân Obsidian vào PATH thông qua `~/.zprofile`. Nếu bạn gặp khó khăn, hãy kiểm tra những điều sau:

Tệp `~/.zprofile` của bạn nên chứa dòng sau. Nếu thiếu, bạn có thể thêm thủ công:

```
export PATH="$PATH:/Applications/Obsidian.app/Contents/MacOS"
```

#### Shell thay thế

Việc đăng ký CLI chỉ sửa đổi `~/.zprofile`, được sử dụng bởi zsh (shell mặc định trên macOS). Nếu bạn sử dụng shell khác, hãy thêm thư mục nhị phân Obsidian vào tệp cấu hình shell của bạn thủ công:

- Bash: thêm `export PATH="$PATH:/Applications/Obsidian.app/Contents/MacOS"` vào `~/.bash_profile`
- Fish: chạy `fish_add_path /Applications/Obsidian.app/Contents/MacOS`


### Linux

Việc đăng ký CLI tạo liên kết tượng trưng tại `/usr/local/bin/obsidian` trỏ đến nhị phân Obsidian (yêu cầu sudo).

#### AppImage

Đối với cài đặt AppImage, liên kết tượng trưng trỏ đến tệp `.AppImage` thay vì nhị phân bên trong, vì đường dẫn mount thay đổi mỗi lần khởi chạy. Nếu sudo thất bại, liên kết tượng trưng được tạo tại `~/.local/bin/obsidian` như phương án dự phòng. Nếu bạn gặp khó khăn, hãy kiểm tra những điều sau.

Kiểm tra liên kết tượng trưng tồn tại và trỏ đến nhị phân đúng:

```
ls -l /usr/local/bin/obsidian
```

Nếu liên kết tượng trưng bị thiếu, tạo thủ công:

```
sudo ln -s /path/to/obsidian /usr/local/bin/obsidian
```

Nếu liên kết tượng trưng được tạo trong `~/.local/bin/` thay vào đó, hãy đảm bảo thư mục đó nằm trong PATH. Thêm dòng sau vào `~/.bashrc` hoặc `~/.zshrc`:

```
export PATH="$PATH:$HOME/.local/bin"
```

Nếu liên kết tượng trưng bị hỏng sau khi di chuyển hoặc đổi tên tệp `.AppImage`, hãy đăng ký lại CLI hoặc cập nhật liên kết tượng trưng thủ công.

#### Snap

Gói Snap lưu trữ dữ liệu bản dựng Insider trong thư mục dữ liệu người dùng riêng. Nếu CLI không phát hiện tệp insider `.asar`, hãy đặt `XDG_CONFIG_HOME` trỏ đến đường dẫn cấu hình Snap:

```
export XDG_CONFIG_HOME="$HOME/snap/obsidian/current/.config"
```

Thêm dòng này vào `~/.bashrc` hoặc `~/.zshrc` để duy trì.


#### Flatpak

Obsidian cố gắng thực hiện tự động, nhưng dưới đây là hướng dẫn thủ công. Nếu là cài đặt hệ thống:

```
ln -s /var/lib/flatpak/exports/bin/md.obsidian.Obsidian ~/.local/bin/obsidian
```

Nếu là cài đặt người dùng:

```
ln -s ~/.local/share/flatpak/exports/bin/md.obsidian.Obsidian ~/.local/bin/obsidian
```
