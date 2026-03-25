---
permalink: headless
description: Obsidian Headless là một ứng dụng dòng lệnh dành cho các dịch vụ Obsidian. Đồng bộ hóa kho ghi chú của bạn mà không cần ứng dụng máy tính.
---
Obsidian Headless **(bản beta mở)** là một client không giao diện cho các dịch vụ Obsidian. Nó cho phép bạn [[Đồng bộ hóa không giao diện|đồng bộ kho]] từ dòng lệnh mà không cần ứng dụng máy tính, với tất cả tốc độ, quyền riêng tư và lợi ích mã hóa đầu cuối của [[Giới thiệu về Obsidian Sync|Obsidian Sync]].

Lý do bạn có thể sử dụng Obsidian Headless:

- Tự động hóa sao lưu từ xa.
- Tự động hóa xuất bản trang web.
- Cung cấp cho các công cụ tác nhân quyền truy cập vào kho mà không cần truy cập toàn bộ máy tính của bạn.
- Đồng bộ kho nhóm được chia sẻ đến máy chủ cung cấp cho các công cụ khác.
- Chạy các tự động hóa theo lịch, ví dụ: tổng hợp ghi chú hằng ngày thành bản tóm tắt hàng tuần, tự động gắn thẻ, v.v.

> [!info] Obsidian Headless vs Obsidian CLI
> [[Obsidian CLI]] điều khiển ứng dụng Obsidian máy tính từ terminal của bạn. Obsidian Headless là một client độc lập chạy riêng biệt, không cần ứng dụng máy tính.

## Cài đặt

Obsidian Headless **(bản beta mở)** yêu cầu Node.js 22 hoặc mới hơn. Cài đặt từ [npm](https://www.npmjs.com/package/obsidian-headless):

```shell
npm install -g obsidian-headless
```

## Xác thực

### Đăng nhập

```shell
ob login
```

Nếu đã đăng nhập, `ob login` hiển thị thông tin tài khoản của bạn. Để chuyển tài khoản, truyền `--email` và/hoặc `--password` để đăng nhập lại.

```
ob login [--email <email>] [--password <password>] [--mfa <code>]
```

Tất cả tùy chọn đều tương tác khi bị bỏ qua — email và mật khẩu sẽ được hỏi, và 2FA được yêu cầu tự động nếu đã bật trên tài khoản.

Để đăng xuất và xóa thông tin đăng nhập đã lưu:

```shell
ob logout
```

## Dịch vụ

- [[Đồng bộ hóa không giao diện]]: sử dụng [[Giới thiệu về Obsidian Sync|Obsidian Sync]] từ dòng lệnh mà không cần ứng dụng máy tính.
- [[Publish không giao diện]]: sử dụng [[Giới thiệu về Obsidian Publish|Obsidian Publish]] từ dòng lệnh mà không cần ứng dụng máy tính.
