---
permalink: plugins/graph
publish: true
mobile: true
description: Graph view là plugin cốt lõi cho phép bạn trực quan hóa các mối quan hệ giữa các ghi chú trong kho lưu trữ của bạn.
aliases:
  - Plugin/Graph view
---
Chế độ xem đồ thị là một [[Plugin cốt lõi|plugin cốt lõi]] cho phép bạn trực quan hóa các mối quan hệ giữa các ghi chú trong kho của bạn.

Để mở Chế độ xem đồ thị, nhấp vào **Mở xem biểu đồ** trong [[Thanh công cụ]].

- Các vòng tròn đại diện cho các ghi chú, hay _nút_.
- Các đường đại diện cho [[Liên kết nội bộ]] giữa hai nút.

Một nút được tham chiếu bởi càng nhiều nút khác thì nó càng lớn.

Để tương tác với các ghi chú trong đồ thị:

- Di chuột qua từng vòng tròn để tô sáng các kết nối của ghi chú đó.
- Nhấp vào một ghi chú trong đồ thị để mở ghi chú đó.
- Nhấp chuột phải vào một ghi chú để mở menu ngữ cảnh với các hành động có sẵn cho ghi chú đó.

Để điều hướng trong đồ thị:

- Phóng to và thu nhỏ bằng con lăn chuột, hoặc sử dụng phím `+` và `-`.
- Di chuyển đồ thị bằng cách kéo bằng con trỏ chuột, hoặc sử dụng các phím mũi tên.

Bạn có thể giữ Shift trong khi sử dụng bàn phím để tăng tốc độ di chuyển.

## Cài đặt

Để mở cài đặt đồ thị, nhấp vào biểu tượng bánh răng ở góc trên bên phải của chế độ xem đồ thị.

Nhấp vào **Khôi phục cài đặt mặc định** ở góc trên bên phải của hộp cài đặt để đặt lại bất kỳ thay đổi nào bạn đã thực hiện.

### Bộ lọc

Phần này kiểm soát những nút nào được hiển thị trong đồ thị.

- **Tìm kiếm tệp** cho phép bạn lọc ghi chú dựa trên cụm từ tìm kiếm. Để tìm hiểu cách viết các cụm từ tìm kiếm nâng cao hơn, hãy tham khảo [[Tìm kiếm]].
- **Thẻ** bật/tắt hiển thị thẻ trong đồ thị.
- **Tệp đính kèm** bật/tắt hiển thị tệp đính kèm trong đồ thị.
- **Chỉ hiển thị tệp hiện có** bật/tắt hiển thị các ghi chú tồn tại trong kho của bạn. Vì một ghi chú không cần tồn tại để liên kết đến nó, điều này có thể giúp giới hạn đồ thị của bạn chỉ hiển thị các ghi chú mà bạn thực sự có trong kho.
- **Tệp mô côi** bật/tắt hiển thị các ghi chú không có bất kỳ liên kết nào.

> [!info] Tệp bị loại trừ
> Các tệp khớp với mẫu [[Cài đặt#Tệp bị loại trừ|Tệp bị loại trừ]] của bạn sẽ không xuất hiện trong Chế độ xem đồ thị.

### Nhóm

Tạo các nhóm ghi chú để phân biệt chúng với nhau bằng màu sắc.

Để tạo một nhóm mới:

1. Nhấp vào **Nhóm đánh dấu mới**.
2. Trong hộp tìm kiếm, nhập cụm từ tìm kiếm cho các ghi chú bạn muốn thêm vào nhóm.
3. Nhấp vào vòng tròn màu để chọn màu cho nhóm.

Để tìm hiểu cách viết các cụm từ tìm kiếm nâng cao hơn, hãy tham khảo [[Tìm kiếm]].

### Hiển thị

Phần này kiểm soát cách trực quan hóa các nút và liên kết trong đồ thị.

- **Mũi tên** bật/tắt hiển thị hướng của mỗi liên kết.
- **Ngưỡng mờ văn bản** kiểm soát độ trong suốt của văn bản cho tên của mỗi ghi chú.
- **Kích thước nút** kiểm soát kích thước của vòng tròn đại diện cho mỗi ghi chú.
- **Độ dày liên kết** kiểm soát độ rộng đường cho mỗi liên kết.
- **Hoạt ảnh** bắt đầu một [[#Bắt đầu hoạt ảnh theo thời gian|hoạt ảnh theo thời gian]].

### Lực

Phần này kiểm soát các lực tác động lên mỗi nút trong đồ thị.

- **Lực tâm** kiểm soát mức độ chặt chẽ của đồ thị. Giá trị cao hơn tạo ra đồ thị tròn hơn.
- **Lực đẩy** kiểm soát mức độ một nút đẩy các nút khác ra xa nó.
- **Lực liên kết** kiểm soát lực kéo trên mỗi liên kết. Nếu liên kết là một dây cao su, lực liên kết kiểm soát mức độ căng hay lỏng của dây.
- **Khoảng cách liên kết** kiểm soát độ dài của các đường giữa mỗi ghi chú.

## Bắt đầu hoạt ảnh theo thời gian

Các ghi chú và tệp đính kèm xuất hiện theo thứ tự thời gian dựa trên thời gian tạo của chúng.

![[obsidian-graph-view.png#interface]]

## Đồ thị cục bộ

Để mở Chế độ xem đồ thị cục bộ, sử dụng lệnh **Mở biểu đồ cục bộ**. Trong khi Chế độ xem đồ thị hiển thị tất cả các ghi chú trong kho của bạn, Chế độ xem đồ thị cục bộ hiển thị các ghi chú được kết nối với ghi chú đang hoạt động.

Chế độ xem đồ thị cục bộ có thể sử dụng tất cả các [[#Cài đặt]] có sẵn cho Chế độ xem đồ thị toàn cục. Ngoài ra, bạn có thể thay đổi độ sâu của đồ thị cục bộ. Mỗi cấp độ sâu sẽ hiển thị các ghi chú được kết nối với các ghi chú đã được hiển thị ở cấp độ sâu trước đó. Để kiểm soát độ sâu của đồ thị cục bộ, sử dụng thanh trượt ở đầu bảng Cài đặt Bộ lọc của đồ thị cục bộ.
