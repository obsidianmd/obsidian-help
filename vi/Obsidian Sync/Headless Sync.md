---
permalink: sync/headless
cssclasses:
  - reference
description: 'Obsidian Sync cung cấp một ứng dụng khách headless để đồng bộ kho lưu trữ mà không cần sử dụng ứng dụng desktop. Hữu ích cho các pipeline CI, agent và quy trình tự động. Đồng bộ các thay đổi mới nhất hoặc giữ các tệp được cập nhật liên tục.'
aliases:
  - Đồng bộ hóa không giao diện
---
[[Giới thiệu về Obsidian Sync|Obsidian Sync]] cung cấp một ứng dụng không giao diện để đồng bộ hóa kho mà không cần sử dụng ứng dụng máy tính. Hữu ích cho quy trình CI, tác nhân và các luồng công việc tự động. Đồng bộ hóa các thay đổi mới nhất hoặc giữ tệp liên tục được cập nhật.

Cài đặt [[Obsidian Headless]] **(bản beta mở)** để tương tác với [[Giới thiệu về Obsidian Sync|Obsidian Sync]] từ dòng lệnh mà không cần ứng dụng Obsidian trên máy tính. Đồng bộ hóa không giao diện sử dụng cùng [[Bảo mật và quyền riêng tư|các biện pháp mã hóa và bảo mật quyền riêng tư]] như ứng dụng máy tính, bao gồm mã hóa đầu cuối.

## Bắt đầu nhanh

> [!error] Sao lưu dữ liệu trước khi bắt đầu
> 1. Luôn sao lưu dữ liệu trước khi bắt đầu phòng trường hợp xảy ra sự cố bất ngờ.
> 2. Không sử dụng *đồng thời* Sync trên ứng dụng máy tính và Đồng bộ hóa không giao diện trên cùng một thiết bị, vì điều này có thể gây xung đột dữ liệu. Chỉ sử dụng một phương thức đồng bộ hóa trên mỗi thiết bị.

Cài đặt [[Obsidian Headless|Obsidian Headless]] **(bản beta mở)**:

```shell
npm install -g obsidian-headless
```

Bạn phải có [[Gói và giới hạn lưu trữ|gói đăng ký Obsidian Sync]] đang hoạt động.

```shell
# Đăng nhập
ob login

# Liệt kê các kho từ xa của bạn
ob sync-list-remote

# Thiết lập kho để đồng bộ hóa
cd ~/vaults/my-vault
ob sync-setup --vault "My Vault"

# Chạy đồng bộ hóa một lần
ob sync

# Chạy đồng bộ hóa liên tục (theo dõi thay đổi)
ob sync --continuous
```

## Các lệnh

### `ob sync-list-remote`

Liệt kê tất cả các kho từ xa có sẵn cho tài khoản của bạn, bao gồm các kho được chia sẻ.

### `ob sync-list-local`

Liệt kê các kho đã cấu hình cục bộ và đường dẫn của chúng.

### `ob sync-create-remote`

Tạo một kho từ xa mới.

```
ob sync-create-remote --name "Vault Name" [--encryption <standard|e2ee>] [--password <password>] [--region <region>]
```

| Tùy chọn | Mô tả |
| --- | --- |
| `--name` | Tên kho (bắt buộc) |
| `--encryption` | `standard` cho mã hóa được quản lý, `e2ee` cho mã hóa đầu cuối |
| `--password` | Mật khẩu mã hóa đầu cuối (sẽ được nhắc nếu bỏ qua) |
| `--region` | [[Khu vực Sync\|Khu vực]] máy chủ (tự động nếu bỏ qua) |

### `ob sync-setup`

Thiết lập đồng bộ hóa giữa kho cục bộ và kho từ xa.

```
ob sync-setup --vault <id-or-name> [--path <local-path>] [--password <password>] [--device-name <name>] [--config-dir <name>]
```

| Tùy chọn | Mô tả |
| --- | --- |
| `--vault` | ID hoặc tên kho từ xa (bắt buộc) |
| `--path` | Thư mục cục bộ (mặc định: thư mục hiện tại) |
| `--password` | Mật khẩu mã hóa đầu cuối (sẽ được nhắc nếu bỏ qua) |
| `--device-name` | Tên thiết bị hiển thị trong [[Lịch sử phiên bản|lịch sử phiên bản đồng bộ]] |
| `--config-dir` | Tên [[Thư mục cấu hình|thư mục cấu hình]] (mặc định: `.obsidian`) |

### `ob sync`

Chạy đồng bộ hóa cho kho đã cấu hình.

```
ob sync [--path <local-path>] [--continuous]
```

| Tùy chọn | Mô tả |
| --- | --- |
| `--path` | Đường dẫn kho cục bộ (mặc định: thư mục hiện tại) |
| `--continuous` | Chạy liên tục, theo dõi thay đổi |

### `ob sync-config`

Xem hoặc thay đổi [[Cài đặt đồng bộ và đồng bộ hóa chọn lọc|cài đặt đồng bộ]] cho một kho. Chạy không có tùy chọn để hiển thị cấu hình hiện tại.

```
ob sync-config [--path <local-path>] [options]
```

| Tùy chọn                | Mô tả                                                                                                                                                                                                    |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--path`              | Đường dẫn kho cục bộ (mặc định: thư mục hiện tại)                                                                                                                                                                  |
| `--mode`              | Chế độ đồng bộ: `bidirectional` (mặc định), `pull-only` (chỉ tải xuống, bỏ qua thay đổi cục bộ), hoặc `mirror-remote` (chỉ tải xuống, hoàn nguyên thay đổi cục bộ)                                                              |
| `--conflict-strategy` | `merge` hoặc `conflict`                                                                                                                                                                                          |
| `--file-types`        | Loại tệp đính kèm cần đồng bộ: `image`, `audio`, `video`, `pdf`, `unsupported` (phân tách bằng dấu phẩy, để trống để xóa)                                                                                                    |
| `--configs`           | Danh mục cấu hình cần đồng bộ: `app`, `appearance`, `appearance-data`, `hotkey`, `core-plugin`, `core-plugin-data`, `community-plugin`, `community-plugin-data` (phân tách bằng dấu phẩy, để trống để tắt đồng bộ cấu hình) |
| `--excluded-folders`  | Thư mục cần loại trừ (phân tách bằng dấu phẩy, để trống để xóa)                                                                                                                                                           |
| `--device-name`       | Tên thiết bị để nhận dạng client này trong lịch sử phiên bản đồng bộ                                                                                                                                                |
| `--config-dir`        | Tên thư mục cấu hình (mặc định: `.obsidian`)                                                                                                                                                                   |

### `ob sync-status`

Hiển thị trạng thái đồng bộ hóa và cấu hình cho một kho.

```
ob sync-status [--path <local-path>]
```

### `ob sync-unlink`

Ngắt kết nối kho khỏi đồng bộ hóa và xóa thông tin đăng nhập đã lưu.

```
ob sync-unlink [--path <local-path>]
```

## Module gốc

Obsidian Headless bao gồm một addon gốc được biên dịch sẵn để thiết lập thời gian tạo tệp (birthtime) trên Windows và macOS. Điều này giúp bảo toàn dấu thời gian tạo ban đầu khi tải tệp xuống từ máy chủ.

Addon nhắm tới N-API phiên bản 3, do đó các tệp nhị phân được biên dịch sẵn có ABI ổn định và hoạt động trên các phiên bản Node.js mà không cần biên dịch lại.

Trên Linux, birthtime không được hỗ trợ — addon không được bao gồm và đồng bộ hóa hoạt động bình thường mà không có nó.

Các tệp nhị phân được biên dịch sẵn bao gồm cho:

- `win32-x64`
- `win32-arm64`
- `win32-ia32`
- `darwin-x64`
- `darwin-arm64`
