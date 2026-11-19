---
permalink: plugins/format-converter
publish: true
mobile: true
description: Format converter là plugin cốt lõi cho phép bạn chuyển đổi Markdown từ các ứng dụng khác sang định dạng Obsidian.
aliases:
  - Plugin/Markdown format converter
---
Bộ chuyển đổi định dạng Markdown di chuyển [[Thuộc tính#Thuộc tính không còn được dùng|các định dạng thuộc tính không còn được dùng]] sang định dạng hiện tại được Obsidian sử dụng.

> [!warning] Sao lưu kho của bạn
> Chuyển đổi áp dụng cho toàn bộ kho của bạn. [[Sao lưu tệp Obsidian của bạn]] trước khi bạn bắt đầu.

Để chuyển đổi các thuộc tính trong ghi chú của bạn:

1. Mở [[Bảng lệnh]].
2. Chọn **Bộ chuyển đổi định dạng Markdown: Di chuyển siêu dữ liệu đầu tệp**.
3. Chọn **Bắt đầu Chuyển đổi**.

## Các định dạng thuộc tính được hỗ trợ

Bộ chuyển đổi cập nhật bí danh, thẻ và lớp CSS từ các định dạng không còn được dùng:

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
