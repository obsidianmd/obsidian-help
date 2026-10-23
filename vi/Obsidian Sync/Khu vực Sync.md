---
permalink: sync/region
cssclasses:
  - soft-embed
publish: true
mobile: true
description: Di chuyển kho Sync của bạn sang một khu vực khác.
---
Khi bạn tạo một [[Kho lưu trữ cục bộ và từ xa|kho từ xa]] thông qua [[Giới thiệu về Obsidian Sync|Obsidian Sync]], dữ liệu của bạn được mã hóa và lưu trữ trên một trong các máy chủ Sync khu vực của Obsidian. Hướng dẫn này giải thích cách di chuyển kho Sync của bạn sang một máy chủ khu vực khác.

## Các khu vực khả dụng

Các khu vực sau đây khả dụng với Obsidian Sync. Chúng tôi khuyến nghị sử dụng **Tự động** hoặc chọn một vị trí gần bạn để giảm độ trễ và giúp quá trình đồng bộ hóa nhanh hơn.

![[Obsidian Sync/Bảo mật và quyền riêng tư#^sync-geo-regions]]

## Ghi lại cài đặt của bạn

Khi bạn kết nối một thiết bị với kho từ xa mới, Sync có thể sử dụng các cài đặt mà bạn đã bật tại thời điểm đó. Nếu bạn giữ các cài đặt khác nhau trên các thiết bị khác nhau, hãy ghi lại chúng trước khi bắt đầu. Ví dụ, bạn có thể không đồng bộ các tệp phương tiện lớn với điện thoại.

Trên mỗi thiết bị sử dụng kho từ xa, mở **[[Cài đặt]] → Sync** và ghi lại các cài đặt sau. Một ảnh chụp màn hình là cách tốt.

- **Đồng bộ hóa chọn lọc**
- **Đồng bộ hóa cấu hình hòm lưu trữ**
- **Thư mục đã loại trừ**
- Cài đặt riêng của thiết bị, chẳng hạn như **Tên thiết bị** và **Giải quyết xung đột**

Xem [[Cài đặt Sync và đồng bộ hóa chọn lọc]] để biết mỗi cài đặt làm gì và cài đặt nào được bật theo mặc định.

## Thay đổi khu vực Sync

Để thay đổi khu vực của kho từ xa, bạn sẽ cần tạo lại kho của mình trên một máy chủ Sync khác. Lưu ý rằng bạn cũng có thể thay đổi khu vực bằng cách sử dụng trợ lý di chuyển [[Nâng cấp mã hóa Sync]], nếu kho từ xa của bạn đang ở phiên bản cũ hơn.

> [!danger] Quá trình di chuyển có tính phá hủy
> 
> **Luôn [[Sao lưu tệp Obsidian của bạn|sao lưu]] kho của bạn trước khi tiếp tục quá trình di chuyển.**
> 
> Khi bạn di chuyển một kho từ xa, dữ liệu của bạn sẽ bị thay thế. Điều này có nghĩa là:
> 
> 1. Dữ liệu từ xa sẽ bị xóa khỏi các máy chủ Obsidian, và dữ liệu kho sẽ được tải lên lại thay thế.
> 2. Tất cả [[Lịch sử phiên bản|lịch sử phiên bản]] của kho sẽ bị mất.

![[Thiết lập Obsidian Sync#Ngắt kết nối khỏi kho từ xa]]

Nếu bạn đang sử dụng [[Gói và giới hạn lưu trữ|Gói Tiêu chuẩn]], bạn cũng sẽ cần [[Thiết lập Obsidian Sync#Xóa kho từ xa|xóa kho từ xa]] trước khi tiếp tục.

![[Thiết lập Obsidian Sync#Tạo kho từ xa mới]]

## Kết nối lại các thiết bị khác

Sau khi kho từ xa mới hoàn tất đồng bộ trên thiết bị đầu tiên của bạn, hãy chuyển đổi lần lượt từng thiết bị khác đã sử dụng kho từ xa cũ. Thực hiện trên từng thiết bị một.

1. Trên thiết bị, [[Thiết lập Obsidian Sync#Ngắt kết nối khỏi kho từ xa|ngắt kết nối khỏi kho từ xa cũ]].
2. [[Thiết lập Obsidian Sync#Đồng bộ kho từ xa trên thiết bị khác|Kết nối với kho từ xa mới]]. Chưa chọn **Bắt đầu đồng bộ**.
3. Đặt **Đồng bộ hóa chọn lọc**, **Đồng bộ hóa cấu hình hòm lưu trữ** và **Thư mục đã loại trừ** khớp với các cài đặt bạn đã ghi lại cho thiết bị này.
4. Khởi động lại Obsidian. Trên di động hoặc máy tính bảng, bạn có thể cần buộc đóng ứng dụng.
5. Chọn **Bắt đầu đồng bộ** hoặc **Tiếp tục**, và đợi cho đến khi Sync hoàn tất trước khi chuyển sang thiết bị tiếp theo.

Ngoài ra, bạn có thể [[Thiết lập Obsidian Sync#Xóa kho từ xa|xóa kho từ xa cũ]] sau khi đã xác nhận việc chuyển đổi sang kho từ xa mới và khu vực của nó.
