---
permalink: tags
---
Thẻ là các từ khóa hoặc chủ đề giúp bạn nhanh chóng tìm thấy các ghi chú bạn muốn.

## Thêm thẻ vào ghi chú

Để tạo thẻ, nhập ký hiệu thăng (`#`) trong trình chỉnh sửa, theo sau là một từ khóa. Ví dụ, `#meeting`.

Bạn cũng có thể thêm thẻ bằng [[Thuộc tính|thuộc tính]] `tags`. Thẻ trong YAML phải luôn được định dạng dưới dạng danh sách:

```yaml
---
tags:
  - recipe
  - cooking
---
```

## Tìm ghi chú bằng thẻ

Để tìm ghi chú bằng plugin [[Tìm kiếm]], sử dụng [[Tìm kiếm#Toán tử tìm kiếm|toán tử tìm kiếm]] `tag` trong cụm từ tìm kiếm của bạn, ví dụ `tag:#meeting`.

Bạn cũng có thể tìm kiếm thẻ bằng cách nhấp vào chúng trong ghi chú.

Để tìm ghi chú bằng plugin [[Cửa sổ thẻ|Cửa sổ thẻ]], chọn **Tags: Show tags** trong [[Khay lệnh]], sau đó chọn thẻ bạn muốn tìm kiếm.

## Thẻ lồng nhau

Thẻ lồng nhau xác định các cấp bậc thẻ giúp dễ dàng hơn trong việc tìm và lọc các thẻ liên quan.

Tạo thẻ lồng nhau bằng cách sử dụng dấu gạch chéo (`/`) trong tên thẻ, ví dụ `#inbox/to-read` và `#inbox/processing`.

- Trong [[Tìm kiếm]], `tag:inbox` sẽ khớp với `#inbox` cũng như tất cả các thẻ lồng nhau như `#inbox/to-read`.  
- Trong [[Cửa sổ thẻ]], thẻ lồng nhau được hiển thị thuộc về thẻ cha của chúng.  
- Trong [[Giới thiệu về Cơ sở|Cơ sở]], thẻ lồng nhau được nhận diện bởi hàm [[Hàm#hasTag|`hasTag`]], vì vậy `file.hasTag("a")` sẽ khớp cả `#a` và `#a/b`.  

## Định dạng thẻ

Bạn có thể sử dụng bất kỳ ký tự nào sau đây trong thẻ:

- Chữ cái
- Số
- Dấu gạch dưới (`_`)
- Dấu gạch nối (`-`)
- Dấu gạch chéo (`/`) cho [[#Thẻ lồng nhau]]

Thẻ phải chứa ít nhất một ký tự không phải số. Ví dụ, #1984 không phải là thẻ hợp lệ, nhưng #y1984 thì có.

Thẻ không phân biệt chữ hoa chữ thường. Ví dụ, #tag và #TAG sẽ được coi là giống nhau.

> [!note] 
> Thẻ sẽ hiển thị với kiểu chữ hoa/thường mà chúng được tạo lần đầu tiên trong [[Cửa sổ thẻ]]. 
> Ví dụ, tạo #Tag rồi sau đó #TAG sẽ hiển thị #Tag cho cả hai. 

Thẻ không thể chứa khoảng trắng. Để phân tách hai hoặc nhiều từ, bạn có thể sử dụng các định dạng sau:

- #camelCase
- #PascalCase
- #snake_case
- #kebab-case
