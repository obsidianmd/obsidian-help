---
permalink: import/templates
description: 'Tùy chỉnh tên ghi chú, thuộc tính và nội dung được tạo bởi Importer.'
---
[[Trình nhập]] cho phép bạn định nghĩa các mẫu để kiểm soát cách ghi chú được nhập từ các ứng dụng khác. Điều này có nghĩa là bạn có thể sửa đổi tiêu đề, thuộc tính và nội dung của các ghi chú mà bạn nhập.

## Chỉnh sửa mẫu nhập

Chọn **Chỉnh sửa** phía trên phần xem trước để chỉnh sửa mẫu mặc định. Bạn có thể chỉnh sửa:

- Tên ghi chú được hiển thị dưới dạng tiêu đề nội tuyến.
- Thuộc tính ở đầu ghi chú.
- Nội dung Markdown của ghi chú.

Chọn **Lưu** để quay lại phần xem trước. Trình nhập ghi nhớ mẫu nội tuyến đã chỉnh sửa cho các lần nhập trong tương lai sử dụng cùng định dạng.

Ngoài ra, bạn có thể tải mẫu từ một tệp Markdown trong kho hiện tại.

## Xem trước kết quả

Phần xem trước hiển thị tối đa mười mẫu từ dữ liệu bạn đã chọn. Sử dụng các nút mũi tên để di chuyển giữa các mẫu. Các thay đổi đối với cài đặt nhập và mẫu sẽ cập nhật phần xem trước trước khi bất kỳ thứ gì được thêm vào kho của bạn.

Một số tệp đính kèm, mục từ xa và tham chiếu chéo giữa các ghi chú không thể được giải quyết đầy đủ cho đến khi quá trình nhập chạy. Trong những trường hợp đó, phần xem trước có thể giữ lại liên kết nguồn hoặc hiển thị một trình giữ chỗ.

## Cú pháp mẫu

Mẫu của Trình nhập sử dụng cú pháp bao gồm các biến, [[Bộ lọc]], và [[Logic]]. Nó sử dụng cùng cú pháp [Knap](https://github.com/obsidianmd/knap) như [[Giới thiệu về Obsidian Web Clipper|Web Clipper]].

Chèn biến bằng dấu ngoặc nhọn kép, chẳng hạn như `{{title}}`, `{{content}}`, hoặc `{{date}}`. Biến có thể được sử dụng trong tên ghi chú, thuộc tính và nội dung.

Bạn có thể sửa đổi biến bằng [[Bộ lọc]]. Ví dụ để thay đổi định dạng ngày bằng `{{date|date:"YYYY-MM-DD"}}`. Sử dụng [[Logic]] cho các điều kiện, vòng lặp và gán biến nâng cao hơn.

## Biến

Các biến sau đây có sẵn để sử dụng trong bất kỳ mẫu Trình nhập nào:

| Biến             | Mô tả                                                                                              |
| ---------------- | --------------------------------------------------------------------------------------------------- |
| `{{body}}`       | Phần thân Markdown không bao gồm thuộc tính (không có siêu dữ liệu đầu tệp).                     |
| `{{content}}`    | Markdown hoàn chỉnh trước khi mẫu đã chọn được áp dụng.                                           |
| `{{ctime}}`      | Thời gian tạo nguồn dưới dạng dấu thời gian ISO 8601; trống khi không có sẵn.                     |
| `{{date}}`       | Ngày và giờ hiện tại khi mẫu được kết xuất, dưới dạng dấu thời gian ISO 8601.                     |
| `{{importer}}`   | ID Trình nhập, chẳng hạn như `keep`, `html`, hoặc `notion-api`.                                    |
| `{{folder}}`     | Thư mục cha cuối cùng tương đối với kho. Trống khi ghi chú ở thư mục gốc của kho.                 |
| `{{mtime}}`      | Thời gian sửa đổi nguồn dưới dạng dấu thời gian ISO 8601; trống khi không có sẵn.                 |
| `{{noteName}}`   | Tên ghi chú đã giải quyết cuối cùng, sau khi loại bỏ ký tự không hợp lệ và thêm hậu tố cho các bản trùng. |
| `{{path}}`       | Đường dẫn cuối cùng tương đối với kho, bao gồm phần mở rộng `.md`.                                |
| `{{properties}}` | Đối tượng chứa các thuộc tính siêu dữ liệu đầu tệp.                                              |
| `{{source}}`     | Đối tượng chứa các thuộc tính được tạo và giá trị đặc thù của nguồn.                              |
| `{{sourceId}}`   | Định danh nguồn ổn định khi trình nhập cung cấp; nếu không thì trống.                             |
| `{{time}}`       | Bí danh cho `{{date}}`.                                                                             |
| `{{title}}`      | Tiêu đề ghi chú gốc trước khi được làm sạch và loại bỏ trùng lặp.                                |

## Giá trị nguồn cho thuộc tính

Đối với các định dạng nhập hỗ trợ [[Thuộc tính]], các giá trị nguồn cũng có sẵn dưới dạng biến cấp cao nhất để thuận tiện.

Nếu một giá trị nguồn có cùng tên với một biến chung, hãy truy cập nó thông qua `{{source}}`. Ví dụ, nếu nguồn nhập của bạn có một thuộc tính tên là `content` thì có thể truy cập bằng `{{source.content}}`, trong khi `{{content}}` vẫn là biến mặc định của Trình nhập.

Sử dụng ký pháp ngoặc vuông khi tên trường chứa khoảng trắng, dấu câu hoặc các ký tự đặc biệt khác:

```twig
{{source["Project: status"]}}
```

## Mẫu ví dụ

Đây là một ví dụ về mẫu sử dụng biến và [[Bộ lọc|bộ lọc]]:

```twig
---
created: {{ctime | date:"YYYY-MM-DD"}}
modified: {{mtime | date:"YYYY-MM-DD"}}
source: {{importer}}
---
# {{title}}

{{body}}
```

Bạn có thể thêm dữ liệu vào ghi chú có điều kiện bằng [[Logic]]:

```twig
{% if tags %}
## Thẻ
{% for tag in tags %}
- {{tag}}
{% endfor %}
{% endif %}
```
