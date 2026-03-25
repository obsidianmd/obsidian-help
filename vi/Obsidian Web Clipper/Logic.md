---
permalink: web-clipper/logic
description: 'Sử dụng câu lệnh điều kiện, vòng lặp và gán biến trong các mẫu Web Clipper.'
---
[[Giới thiệu về Obsidian Web Clipper|Web Clipper]] hỗ trợ logic mẫu cho điều kiện, vòng lặp và gán biến. Cú pháp này được lấy cảm hứng từ các ngôn ngữ mẫu [Twig](https://twig.symfony.com/) và [Liquid](https://shopify.github.io/liquid/).

> [!warning] Yêu cầu phiên bản mới nhất
> Các tính năng logic yêu cầu Obsidian Web Clipper 1.0.0 chưa được phê duyệt trên tất cả các cửa hàng tiện ích mở rộng.

## Điều kiện

Sử dụng `{% if %}` để đưa nội dung có điều kiện dựa trên biến hoặc biểu thức.

```twig
{% if author %}
Author: {{author}}
{% endif %}
```

Sử dụng `{% else %}` để cung cấp nội dung dự phòng, và `{% elseif %}` để nối nhiều điều kiện:

```twig
{% if status == "published" %}
Live article
{% elseif status == "draft" %}
Draft article
{% else %}
Unknown status
{% endif %}
```

### Toán tử so sánh

Các toán tử so sánh sau được hỗ trợ:

| Toán tử | Mô tả |
|----------|-------------|
| `==` | Bằng |
| `!=` | Không bằng |
| `>` | Lớn hơn |
| `<` | Nhỏ hơn |
| `>=` | Lớn hơn hoặc bằng |
| `<=` | Nhỏ hơn hoặc bằng |
| `contains` | Kiểm tra chuỗi chứa chuỗi con, hoặc mảng chứa giá trị |

Ví dụ:
- `{% if title == "Home" %}` — so sánh chuỗi bằng nhau
- `{% if price >= 100 %}` — so sánh số
- `{% if title contains "Review" %}` — kiểm tra chuỗi con
- `{% if tags contains "important" %}` — kiểm tra phần tử trong mảng

### Toán tử logic

Kết hợp các điều kiện bằng toán tử logic:

| Toán tử | Thay thế | Mô tả                              |
| -------- | ----------- | ----------------------------------- |
| `and`    | `&&`        | Cả hai điều kiện phải đúng          |
| `or`     | \|\|        | Ít nhất một điều kiện phải đúng     |
| `not`    | `!`         | Phủ định một điều kiện              |

Ví dụ:
- `{% if author and published %}` — cả hai phải tồn tại
- `{% if draft or archived %}` — một trong hai điều kiện
- `{% if not hidden %}` — phủ định
- `{% if (premium or featured) and published %}` — điều kiện nhóm

### Tính đúng/sai

Khi một biến được sử dụng mà không có toán tử so sánh, nó được đánh giá về "tính đúng/sai":

- `false`, `null`, `undefined`, chuỗi rỗng `""`, và `0` được coi là **sai (falsy)**.
- Mảng rỗng `[]` được coi là **sai (falsy)**.
- Mọi thứ khác được coi là **đúng (truthy)**.

```twig
{% if content %}
Has content
{% endif %}
```

## Gán biến

Sử dụng `{% set %}` để tạo hoặc sửa đổi biến trong mẫu của bạn:

```twig
{% set slug = title|lower|replace:" ":"-" %}
File: {{slug}}.md
```

Biến có thể được gán thành:
- Biến khác: `{% set name = author %}`
- Giá trị trực tiếp: `{% set count = 5 %}` hoặc `{% set label = "Draft" %}`
- Biểu thức với bộ lọc: `{% set excerpt = content|truncate:100 %}`
- Kết quả selector: `{% set comments = selector:.comment %}`

Các biến được gán bằng `{% set %}` có thể được sử dụng trong logic mẫu tiếp theo và trong đầu ra `{{variable}}`.

## Giá trị dự phòng

Sử dụng toán tử `??` để cung cấp giá trị dự phòng khi một biến rỗng hoặc không xác định:

```twig
{{title ?? "Untitled"}}
```

Nếu `title` rỗng, không xác định, hoặc sai (falsy), giá trị dự phòng `"Untitled"` sẽ được sử dụng thay thế.

Đây là cách viết tắt cho câu lệnh `if` tương đương:

```twig
{% if title %}{{title}}{% else %}Untitled{% endif %}
```

### Nối chuỗi giá trị dự phòng

Bạn có thể nối nhiều giá trị dự phòng:

```twig
{{title ?? headline ?? "No title"}}
```

Điều này sẽ sử dụng `title` nếu có, nếu không thì `headline`, nếu không thì chuỗi `"No title"`.

### Với bộ lọc

Bộ lọc có độ ưu tiên cao hơn `??`, vì vậy bộ lọc được áp dụng trước khi kiểm tra giá trị dự phòng:

```twig
{{title|upper ?? "UNTITLED"}}
```

Điều này áp dụng `upper` cho `title` trước, sau đó chuyển sang `"UNTITLED"` nếu kết quả rỗng. Để áp dụng bộ lọc cho giá trị dự phòng, hãy sử dụng dấu ngoặc đơn hoặc biểu thức riêng:

```twig
{{title ?? "Untitled"|lower}}
```

Điều này sẽ sử dụng `title` nếu có, nếu không thì áp dụng `lower` cho giá trị dự phòng, kết quả là `"untitled"`.

## Vòng lặp

Sử dụng `{% for %}` để lặp qua các mảng:

```twig
{% for item in schema:author %}
- {{item.name}}
{% endfor %}
```

### Nguồn vòng lặp

Bạn có thể lặp qua:
- Mảng schema: `{% for item in schema:author %}`
- Kết quả selector: `{% for comment in selector:.comment %}`
- Biến được gán trước đó: `{% set items = selector:.item %}{% for item in items %}`

### Biến vòng lặp

Bên trong vòng lặp, bạn có quyền truy cập vào đối tượng `loop` với các thuộc tính sau:

| Biến | Mô tả |
|----------|-------------|
| `loop.index` | Lần lặp hiện tại (bắt đầu từ 1) |
| `loop.index0` | Lần lặp hiện tại (bắt đầu từ 0) |
| `loop.first` | `true` nếu là lần lặp đầu tiên |
| `loop.last` | `true` nếu là lần lặp cuối cùng |
| `loop.length` | Tổng số phần tử |

```twig
{% for tag in tags %}
{{loop.index}}. {{tag}}
{% if loop.last %} (end of list){% endif %}
{% endfor %}
```

Để tương thích ngược, bạn cũng có thể sử dụng `item_index` (trong đó `item` là tên biến lặp của bạn) để lấy vị trí bắt đầu từ 0:

```twig
{% for tag in tags %}
{{tag_index}}. {{tag}}
{% endfor %}
```

### Truy cập phần tử mảng theo chỉ số

Sử dụng ký hiệu ngoặc vuông để truy cập các phần tử mảng theo chỉ số:

```twig
{{items[0]}}
{{items[loop.index0]}}
```

Điều này hữu ích khi bạn cần truy cập các phần tử từ nhiều mảng song song:

```twig
{% set transcripts = selector:.transcript-text %}
{% set timestamps = selector:.timestamp %}

{% for line in transcripts %}
{{timestamps[loop.index0]}} - {{line}}
{% endfor %}
```

Ký hiệu ngoặc vuông cũng hoạt động với thuộc tính đối tượng:

```twig
{{user["name"]}}
{{data["my-key"]}}
```

### Vòng lặp lồng nhau

Các vòng lặp có thể được lồng nhau cho các cấu trúc dữ liệu phức tạp:

```twig
{% for section in sections %}
## {{section.title}}
{% for item in section.items %}
- {{item}}
{% endfor %}
{% endfor %}
```

## Kết hợp logic

Điều kiện và vòng lặp có thể được kết hợp:

```twig
{% for item in items %}
{% if item.active %}
- {{item.name}}
{% endif %}
{% endfor %}
```

## Thứ tự đánh giá

Logic mẫu được xử lý theo thứ tự sau:

1. **Logic mẫu** — `{% if %}`, `{% for %}`, `{% set %}`, và `{{variables}}` được đánh giá trước
2. **Biến prompt** — [[Biến#Biến prompt|Biến prompt]] như `{{"summarize this"|prompt}}` được gửi đến Thông dịch sau khi logic mẫu hoàn tất

Điều này có nghĩa là bạn có thể sử dụng logic mẫu để xây dựng prompt một cách linh hoạt, nhưng kết quả prompt không khả dụng để sử dụng trong điều kiện hoặc vòng lặp.
