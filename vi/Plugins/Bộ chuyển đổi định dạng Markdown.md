---
permalink: plugins/format-converter
publish: true
mobile: true
description: Format converter là plugin cốt lõi cho phép bạn chuyển đổi Markdown từ các ứng dụng khác sang định dạng Obsidian.
aliases:
  - Plugin/Markdown format converter
---
Bộ chuyển đổi định dạng Markdown là một [[Plugin cốt lõi|plugin cốt lõi]] cho phép bạn chuyển đổi Markdown từ các ứng dụng khác sang định dạng Obsidian. Nó cũng cho phép bạn chuyển đổi một số [[Thuộc tính]] nhất định sang các định dạng mới được yêu cầu.

> [!warning] Cảnh báo
> Bộ chuyển đổi định dạng Markdown chuyển đổi toàn bộ kho của bạn dựa trên cài đặt của bạn. [[Sao lưu tệp Obsidian của bạn]] trước khi bạn thực hiện chuyển đổi.

Để chuyển đổi tất cả ghi chú trong kho của bạn:

1. Trong [[Khay lệnh]], chọn **Mở trình chuyển đổi Markdown**. Bạn cũng có thể tìm thấy nó trong [[Thanh công cụ]] với biểu tượng **Mở trình chuyển đổi Markdown** ![[lucide-binary.svg#icon]].
2. Kích hoạt các định dạng bạn muốn chuyển đổi.
3. Nhấp **Bắt đầu Chuyển đổi**.

Để biết thêm thông tin, hãy tham khảo [[Cú pháp định dạng cơ bản]].

## Các định dạng được hỗ trợ

### Roam Research

Bộ chuyển đổi định dạng Markdown có thể chuyển đổi các cú pháp Roam Research sau:

- **Thẻ**: Chuyển đổi `#tag` và `#[[tag]]` thành `[[tag]]`
- **Tô sáng**: Chuyển đổi `^^highlight^^` thành `==highlight==`
- **Mục TODO**: Chuyển đổi `{{[[TODO]]}}` thành `[ ]`

### Bear

Bộ chuyển đổi định dạng Markdown có thể chuyển đổi các cú pháp Bear sau:

- **Tô sáng**: Chuyển đổi `::highlight::` thành `==highlight==`

### Zettelkasten

Bộ chuyển đổi định dạng Markdown có thể chuyển đổi các cú pháp Zettelkasten sau:

- **Liên kết đầy đủ**: Chuyển đổi `[[UID]]` thành `[[UID File Name]]`
- **Liên kết hiển thị đẹp**: Chuyển đổi `[[UID]]` thành `[[UID File Name|File Name]]`

### [[Thuộc tính]]

Kể từ Obsidian `1.9.3`, Bộ chuyển đổi định dạng Markdown có thể chuyển đổi các định dạng [[Thuộc tính#Thuộc tính không còn được dùng|thuộc tính không còn được dùng]] sang định dạng hiện tại:

**Bí danh**

```yaml
# Trước

alias: My Note Title

# Sau

aliases:
  - My Note Title
```

**Thẻ**

```yaml
# Trước

tag: project, important

# Sau

tags:
  - project
  - important
```

**Lớp CSS**

```yaml
# Trước

cssclass: custom-style

# Sau

cssclasses:
  - custom-style
```
