---
permalink: publish/headless
cssclasses:
  - reference
description: Obsidian Publish offers a headless client to publish vaults without using the desktop app. Useful for CI pipelines and automated workflows.
---
[[Giới thiệu về Obsidian Publish|Obsidian Publish]] cung cấp một ứng dụng không giao diện để xuất bản kho mà không cần sử dụng ứng dụng máy tính. Hữu ích cho quy trình CI và các luồng công việc tự động hóa. Xuất bản các thay đổi mới nhất của bạn theo lịch trình hoặc như một phần của quy trình xây dựng.

Cài đặt [[Obsidian Headless]] **(bản beta mở)** để tương tác với [[Giới thiệu về Obsidian Publish|Obsidian Publish]] từ dòng lệnh mà không cần ứng dụng Obsidian trên máy tính.

## Bắt đầu nhanh

Cài đặt [[Obsidian Headless|Obsidian Headless]] **(bản beta mở)**:

```shell
npm install -g obsidian-headless
```

Bạn phải có gói đăng ký [[Giới thiệu về Obsidian Publish|Obsidian Publish]] đang hoạt động.

```shell
# Đăng nhập
ob login

# Liệt kê các trang publish của bạn
ob publish-list-sites

# Kết nối kho cục bộ với một trang publish
cd ~/vaults/my-vault
ob publish-setup --site "my-site"

# Xem trước thay đổi mà không xuất bản
ob publish --dry-run

# Xuất bản thay đổi
ob publish
```

## Các lệnh

### `ob publish-list-sites`

Liệt kê tất cả các trang Publish có sẵn cho tài khoản của bạn.

### `ob publish-create-site`

Tạo một trang Publish mới.

```
ob publish-create-site --slug <slug>
```

| Tùy chọn | Mô tả |
| --- | --- |
| `--slug` | Định danh URL cho trang của bạn (ví dụ: `my-notes` tạo ra `publish.obsidian.md/my-notes`) |

### `ob publish-setup`

Kết nối kho cục bộ với một trang Publish.

```
ob publish-setup [--site <id-or-slug>] [--path <local-path>]
```

| Tùy chọn | Mô tả |
| --- | --- |
| `--site` | ID hoặc slug của trang |
| `--path` | Đường dẫn kho cục bộ (mặc định: thư mục hiện tại) |

### `ob publish`

Xuất bản các thay đổi trong kho lên trang của bạn. Theo mặc định, chỉ các tệp có `publish: true` trong siêu dữ liệu đầu tệp mới được bao gồm.

```
ob publish [--path <local-path>] [--all] [--dry-run] [--yes]
```

| Tùy chọn | Mô tả |
| --- | --- |
| `--path` | Đường dẫn kho cục bộ (mặc định: thư mục hiện tại) |
| `--all` | Bao gồm tất cả tệp, không chỉ những tệp có cờ publish |
| `--dry-run` | Hiển thị thay đổi mà không xuất bản |
| `--yes` | Xuất bản mà không yêu cầu xác nhận |

### `ob publish-config`

Xem hoặc thay đổi cài đặt bao gồm/loại trừ thư mục cho một kho. Chạy không có tùy chọn để hiển thị cấu hình hiện tại.

```
ob publish-config [--path <local-path>] [options]
```

| Tùy chọn | Mô tả |
| --- | --- |
| `--path` | Đường dẫn kho cục bộ (mặc định: thư mục hiện tại) |
| `--includes` | Các thư mục cần bao gồm, phân cách bằng dấu phẩy (chuỗi rỗng để xóa) |
| `--excludes` | Các thư mục cần loại trừ, phân cách bằng dấu phẩy (chuỗi rỗng để xóa) |

### `ob publish-site-options`

Xem hoặc cập nhật cài đặt hiển thị và điều hướng toàn trang. Chạy không có tùy chọn để hiển thị cài đặt hiện tại.

```
ob publish-site-options [--path <local-path>] [options]
```

| Tùy chọn | Mô tả |
| --- | --- |
| `--path` | Đường dẫn kho cục bộ (mặc định: thư mục hiện tại) |
| `--site-name` | Tên trang web |
| `--index-file` | Đường dẫn tệp trang chủ |
| `--logo` | Đường dẫn tệp logo (chuỗi rỗng để xóa) |
| `--show-navigation` | Hiển thị thanh bên điều hướng |
| `--show-graph` | Hiển thị chế độ xem biểu đồ |
| `--show-outline` | Hiển thị mục lục |
| `--show-search` | Hiển thị tìm kiếm |
| `--show-backlinks` | Hiển thị các liên kết trả về |
| `--show-hover-preview` | Hiển thị xem trước khi di chuột |
| `--show-theme-toggle` | Hiển thị nút chuyển đổi chủ đề |
| `--default-theme` | Chủ đề mặc định: `light` hoặc `dark` |
| `--readable-line-length` | Độ dài dòng dễ đọc |
| `--strict-line-breaks` | Ngắt dòng nghiêm ngặt |
| `--hide-title` | Ẩn tiêu đề nội tuyến |
| `--sliding-window` | Chế độ cửa sổ trượt |
| `--nav-order` | Thứ tự điều hướng, các đường dẫn phân cách bằng dấu phẩy (chuỗi rỗng để xóa) |
| `--nav-hidden` | Các mục điều hướng ẩn, các đường dẫn phân cách bằng dấu phẩy (chuỗi rỗng để xóa) |

### `ob publish-unlink`

Ngắt kết nối kho khỏi trang Publish.

```
ob publish-unlink [--path <local-path>]
```
