---
permalink: sync/switch
cssclasses:
  - soft-embed
publish: true
mobile: true
description: Tìm hiểu cách chuyển đổi từ giải pháp đồng bộ hiện tại của bạn sang Obsidian Sync.
---
Tìm hiểu cách chuyển đổi từ giải pháp đồng bộ hóa hiện tại của bạn sang Obsidian Sync.

> [!warning] Tránh sử dụng nhiều giải pháp để đồng bộ cùng một tệp
> Chúng tôi [[Câu hỏi thường gặp#Tôi có thể sử dụng đồng bộ bên thứ ba cùng với Obsidian Sync không?|không khuyến nghị]] sử dụng Obsidian Sync cùng với các dịch vụ lưu trữ đám mây (ví dụ: iCloud, Dropbox, OneDrive, Google Drive) vì điều này có thể gây ra xung đột. Tuy nhiên, các dịch vụ lưu trữ đám mây có thể đóng vai trò trong chiến lược [[Sao lưu tệp Obsidian của bạn|sao lưu]] của bạn.

## Di chuyển kho ra khỏi dịch vụ đồng bộ bên thứ ba hoặc lưu trữ đám mây

Nếu kho của bạn được lưu trữ tại bất kỳ vị trí nào sau đây, rất có thể nó đang được đồng bộ bởi dịch vụ bên thứ ba:

- **Windows**: `C:\Users\Username\Desktop` hoặc `C:\Users\Username\Documents`
- **macOS**: `/users/username/Desktop` hoặc `/users/username/Documents`
- **iOS**: Thư mục **iCloud** trong ứng dụng Files
- **Khác**: Bất kỳ thư mục nào thuộc dịch vụ đồng bộ, chẳng hạn như `Drive/my-vault`, `Dropbox/my-vault`, `pSync/my-vault`, v.v.

Mặc dù Android và Linux thường ít gặp vấn đề hơn với điều này, vẫn nên kiểm tra vị trí kho trên các thiết bị này.

> [!tip] Nếu kho cục bộ hiện tại của bạn được kết nối với kho từ xa, Obsidian sẽ cố gắng phát hiện xem kho có nằm trong dịch vụ đồng bộ hay không. Nếu có, bạn sẽ thấy một thông báo ở đầu cài đặt của Obsidian Sync.

Để tránh xung đột với các dịch vụ đồng bộ, chúng tôi khuyến nghị lưu trữ kho Obsidian của bạn tại các vị trí sau:

- **Windows**: Vị trí được đề xuất theo thứ tự ưu tiên:
    1. `D:\` hoặc bất kỳ ổ đĩa nào không phải C, không phải ổ mạng trên thiết bị của bạn
    2. `C:\Vaults` (nếu bạn có quyền sử dụng ổ C:\)
    3. `C:\Users\Username\Vaults` (nếu bạn phải giữ kho trong C:\Users\Username, hãy đảm bảo OneDrive được cài đặt để không xóa tệp. OneDrive thường ít can thiệp hơn bên ngoài thư mục `Desktop` và `Documents`.)
- **macOS**: `/users/username/vaults`
- **Linux**: Không có khuyến nghị cụ thể do sự đa dạng của hệ thống tệp. Chỉ cần đảm bảo Obsidian có toàn quyền đọc/ghi và không có dịch vụ đồng bộ nào quản lý thư mục đó.
- **iOS/iPadOS**: Lưu trữ kho tại **On My iPhone** hoặc **On the Device**.
- **Android**: Sử dụng thư mục `Documents/` trên thiết bị của bạn.

## Di chuyển kho bằng Obsidian trên máy tính

![[Quản lý kho#Di chuyển kho đến thư mục khác]]

## Di chuyển kho trên di động

Trên thiết bị di động, Obsidian hoạt động trong môi trường sandbox, nghĩa là bạn không thể di chuyển kho trong ứng dụng như trên máy tính.

### Android

Hệ thống tệp Android khác nhau rất nhiều tùy thiết bị, nhưng nhìn chung, hãy làm theo các bước tương tự như khi bạn di chuyển kho thủ công, đảm bảo nó được loại bỏ khỏi bất kỳ dịch vụ đồng bộ nào trên thiết bị của bạn.

### iOS và iPadOS

Để di chuyển kho iCloud hiện có sang thiết bị của bạn, hãy làm theo các bước sau:

> [!note] Nếu bạn đã có dữ liệu trên thiết bị khác và đã thiết lập Obsidian Sync, khuyến nghị [[Thiết lập Obsidian Sync#Đồng bộ kho từ xa trên thiết bị khác|thiết lập kho cục bộ mới từ Sync]] thay thế.

- [[Sao lưu tệp Obsidian của bạn|Sao lưu]] kho của bạn.
- Tạo kho mới trên thiết bị của bạn, đảm bảo **Save in iCloud Drive** được tắt.
- Buộc đóng ứng dụng Obsidian trên tất cả thiết bị để tạm dừng Đồng bộ hóa.
- Mở ứng dụng **Files** trên thiết bị iOS/iPadOS của bạn.
- Nhấn giữ thư mục kho trong **iCloud Drive → Obsidian**, sau đó chọn **Move**.
- Di chuyển kho đến **On My iPhone/Device → Obsidian** và xác nhận rằng nó đã hiển thị.
- Nhấn **Copy**.
- Quay lại **iCloud Drive → Obsidian** và xóa thư mục kho cũ.

Khi bạn mở lại Obsidian, kho sẽ hiển thị biểu tượng kho thay vì biểu tượng đám mây, xác nhận rằng nó không còn nằm trong iCloud Drive. Obsidian Sync cũng sẽ không còn hiển thị thông báo cảnh báo trong cài đặt.

## Các bước tiếp theo

- Muốn bắt đầu với Obsidian Sync? [[Thiết lập Obsidian Sync]]
- Vẫn cần trợ giúp? Xem [[Khắc phục sự cố Obsidian Sync]]
