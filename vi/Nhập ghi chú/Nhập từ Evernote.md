---
permalink: import/evernote
---
Obsidian cho phép bạn dễ dàng di chuyển ghi chú từ Evernote bằng [[Trình nhập|plugin Trình nhập]]. Điều này sẽ chuyển đổi dữ liệu Evernote của bạn sang các tệp Markdown bền vững, mà bạn có thể sử dụng với Obsidian và nhiều ứng dụng khác.

## Xuất dữ liệu từ Evernote

Obsidian sử dụng định dạng xuất của Evernote là tệp `.enex`.

Bạn có thể tìm hướng dẫn xuất dữ liệu của Evernote [trên trang web của Evernote](https://help.evernote.com/hc/en-us/articles/209005557-Export-notes-and-notebooks-as-ENEX-or-HTML). Phương pháp này cho phép bạn xuất toàn bộ sổ tay trong ứng dụng máy tính.

1. Đi đến màn hình Sổ tay (Notebooks).
2. Nhấp vào **Tùy chọn khác** ( `•••` ) và chọn **Export Notebook...**
3. Chọn **ENEX** làm định dạng tệp.
3. Chọn vị trí cho tệp `.enex` đã xuất của bạn.

## Nhập dữ liệu Evernote vào Obsidian

Bạn sẽ cần plugin [[Trình nhập]] chính thức của Obsidian, bạn có thể [cài đặt tại đây](obsidian://show-plugin?id=obsidian-importer).

1. Mở **[[Cài đặt]]**.
2. Đi đến **Phần mở rộng từ cộng đồng** và [cài đặt Trình nhập](obsidian://show-plugin?id=obsidian-importer).
3. Kích hoạt plugin Trình nhập.
4. Mở plugin **Trình nhập** bằng bảng lệnh hoặc biểu tượng trên thanh công cụ.
5. Trong phần **Định dạng tệp** chọn **Evernote (.enex)**.
6. Chọn vị trí của tệp sao lưu Evernote của bạn.
7. Nhấp **Nhập** và đợi cho đến khi quá trình nhập hoàn tất.
8. Hoàn thành!

## Tùy chọn nhập nâng cao

### Duy trì phân cấp thẻ

Xuất từ Evernote không giữ lại phân cấp thẻ. Để giữ phân cấp thẻ của bạn, bạn có thể "làm phẳng" các thẻ được phân tách bằng "/". Ví dụ, giả sử bạn có cấu trúc thẻ sau:

```
ParentTag
    ChildTag
```

Những gì bạn cần làm để giữ các thẻ liên quan trong Obsidian là:

1. Nhấp chuột phải vào ChildTag.
2. Chọn "Đổi tên."
3. Đổi tên thành `ParentTag/ChildTag`.

### Xử lý ngăn xếp sổ tay

Vì quá trình xuất bị giới hạn ở từng sổ tay đơn lẻ, tệp xuất mặc định thiếu thông tin về ngăn xếp sổ tay. Tuy nhiên, trình nhập có thể nhận dạng các mẫu trong tên tệp enex để tái tạo ngăn xếp sổ tay dưới dạng thư mục.

Giả sử bạn có một sổ tay tên ```NotebookA``` trong ngăn xếp tên ```Stack1```, bạn có thể tái tạo ngăn xếp sổ tay bằng cách đổi tên tệp enex thành ```Stack1@@@NotebookA```.

Kết quả là các ghi chú đã chuyển đổi sẽ được tạo trong thư mục Stack1/NotebookA.

### Tùy chọn khác

Để có thêm các tùy chọn nhập nâng cao từ Evernote, bạn cũng có thể thử [nhập qua Yarle](https://github.com/akosbalasko/yarle).
