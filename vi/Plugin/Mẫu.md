---
permalink: plugins/templates
cssclasses:
  - soft-embed
publish: true
mobile: true
description: Templates là plugin cốt lõi cho phép bạn chèn các đoạn văn bản được định nghĩa sẵn vào ghi chú đang hoạt động.
---
Mẫu là một [[Plugin cốt lõi|plugin cốt lõi]] cho phép bạn chèn các đoạn văn bản được định nghĩa sẵn vào ghi chú đang hoạt động.

## Thiết lập thư mục mẫu

1. Ở góc dưới bên trái, chọn **[[Cài đặt]]** ![[lucide-cog.svg#icon]].
2. Trong **Plugin cốt lõi → Mẫu → Vị trí thư mục mẫu**, nhập thư mục chứa các mẫu của bạn.

## Biến mẫu

Bạn có thể thêm thông tin động vào mẫu bằng cách sử dụng _biến mẫu_. Khi bạn chèn một mẫu có chứa biến mẫu, Mẫu sẽ thay thế biến đó bằng giá trị tương ứng.

| Biến          | Mô tả                                                       |
|---------------|--------------------------------------------------------------|
| `{{title}}`   | Tiêu đề của ghi chú đang hoạt động.                         |
| `{{date}}`    | Ngày hôm nay. **Định dạng mặc định:** `YYYY-MM-DD`.         |
| `{{time}}`    | Thời gian hiện tại. **Định dạng mặc định:** `HH:mm`.        |

Cả `{{date}}` và `{{time}}` đều cho phép bạn thay đổi định dạng mặc định bằng _chuỗi định dạng_.

Để thiết lập chuỗi định dạng, thêm dấu hai chấm (`:`) theo sau là một chuỗi [token định dạng Moment.js](https://momentjs.com/docs/#/displaying/format/), ví dụ `{{date:YYYY-MM-DD}}`.

Bạn có thể sử dụng `{{date}}` và `{{time}}` với chuỗi định dạng theo cùng một cách, ví dụ `{{time:YYYY-MM-DD}}`.

Bạn có thể thay đổi định dạng ngày và thời gian mặc định trong **[[Cài đặt]] → Plugin cốt lõi → Mẫu → Định dạng ngày** và **[[Cài đặt]] → Plugin cốt lõi → Mẫu → Định dạng thời gian**. ^template-settings-date-time-formatting

> [!tip]- Sử dụng biến ngày và thời gian trong các plugin khác
> Bạn cũng có thể sử dụng biến mẫu `{{date}}` và `{{time}}` trong plugin [[Ghi chú hàng ngày]] và [[Tạo ghi chú duy nhất]].

## Tạo một mẫu

Trong [[#Thiết lập thư mục mẫu|thư mục mẫu]], [[Quản lý ghi chú#Tạo ghi chú mới|tạo một ghi chú]] chứa nội dung bạn muốn xuất hiện khi sử dụng mẫu. Bạn có thể sử dụng [[#Biến mẫu|biến mẫu]] cho văn bản động như ngày hiện tại.

Ví dụ, đây là một mẫu cho ghi chú học tập:

```markdown
---
topic: 
date: "{{date}}"
course: 
tags:
  - studies
---

# {{title}}

## Khái niệm chính


## Chi tiết quan trọng


## Ví dụ


## Câu hỏi
- 

## Tóm tắt


## Chủ đề liên quan
- [[]]
```

> [!warning]+ Chỉnh sửa mẫu ở chế độ nguồn
> Trong [[Các chế độ xem và chế độ chỉnh sửa#Live Preview|Xem trước trực tiếp]], bảng **Thuộc tính trong tài liệu** có thể ghi đè các biến mẫu không có dấu ngoặc kép.
>
> Để tránh điều này, hãy chỉnh sửa mẫu ở [[Các chế độ xem và chế độ chỉnh sửa#Source mode|chế độ nguồn]], hoặc đặt **[[Cài đặt]] → Trình chỉnh sửa → [[Cài đặt#Properties in document|Thuộc tính trong tài liệu]]** thành **Nguồn**.

## Chèn mẫu vào ghi chú đang hoạt động

> [!todo] [[#Thiết lập thư mục mẫu]] trước khi chèn mẫu.

1. Trên thanh công cụ, chọn **Chèn mẫu**.
2. Chọn mẫu để chèn tại vị trí con trỏ trong ghi chú đang hoạt động.

Để chèn mẫu bằng [[Khay lệnh]] hoặc [[Phím tắt#Thiết lập phím tắt|phím tắt tùy chỉnh]], sử dụng lệnh `Mẫu: Chèn mẫu`.

Nội dung của mẫu được chèn tại vị trí con trỏ hiện tại. Nếu con trỏ của bạn không ở trong phần nội dung ghi chú, nội dung sẽ được chèn tại vị trí con trỏ cuối cùng.

### Thuộc tính mẫu

![[Thuộc tính#^templates-properties]]

## Chèn ngày và thời gian hiện tại vào ghi chú đang hoạt động

Sử dụng lệnh `Mẫu: Chèn ngày hiện tại` và `Mẫu: Chèn thời gian hiện tại` để chèn ngày và thời gian hiện tại tại vị trí con trỏ hiện tại. Giống như lệnh `Chèn mẫu`, bạn cũng có thể thực hiện những lệnh này bằng bảng lệnh hoặc phím tắt tùy chỉnh.

Ngày và thời gian được chèn sử dụng [[#^template-settings-date-time-formatting|định dạng được thiết lập trong cài đặt plugin]].
