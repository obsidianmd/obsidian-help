---
permalink: sync/messages
publish: true
mobile: true
description: This page explains the Obsidian Sync status icons and provides details about the sync activity log.
---
Obsidian Sync cung cấp một số yếu tố để chỉ báo trạng thái đồng bộ, chủ yếu là [[#Biểu tượng trạng thái đồng bộ]] và [[#Nhật ký hoạt động đồng bộ]]. Chi tiết về kiểm soát phiên bản trong Obsidian Sync được trình bày trong trang [[Lịch sử phiên bản]].

## Biểu tượng trạng thái đồng bộ

Biểu tượng trạng thái đồng bộ nằm ở [[Thanh trạng thái]] trên phiên bản máy tính và ở [[Thanh bên#Mở thanh bên ẩn|thanh bên phải]] trên di động và máy tính bảng. Biểu tượng phản ánh các trạng thái đồng bộ khác nhau:

- ![[obsidian-icon-sync-synced.svg#icon]] **Đã đồng bộ**: Obsidian Sync đã đồng bộ hoàn toàn các tệp của bạn. Biểu tượng này thường có màu xanh lá.
- ![[obsidian-icon-sync-syncing.svg#icon]] **Đang đồng bộ**: Obsidian đang cập nhật kho từ xa. Biểu tượng này thường có màu tím.
- ![[obsidian-icon-sync-paused.svg#icon]] **Tạm dừng**: Đồng bộ hóa đã được tạm dừng, nhưng Obsidian vẫn kết nối với kho từ xa. Biểu tượng thường có màu tím.
- ![[obsidian-icon-sync-disconnected.svg#icon]] **Ngắt kết nối**: Plugin cốt lõi Sync đang hoạt động, nhưng [[Kho lưu trữ cục bộ và từ xa|kho cục bộ]] không được kết nối với kho từ xa. Biểu tượng này thường có màu đỏ.

Nhấp hoặc chạm vào biểu tượng sẽ mở menu ngữ cảnh với các tùy chọn sau:
- ![[obsidian-icon-sync-paused.svg#icon]] Tạm dừng (hoặc ![[lucide-circle-play.svg#icon]] Tiếp tục nếu đã tạm dừng)
- ![[lucide-history.svg#icon]] [[Lịch sử phiên bản]] (Bị làm mờ nếu không đang xem ghi chú)
- ![[lucide-align-left.svg#icon]] Mở [[#Nhật ký hoạt động đồng bộ|Nhật ký đồng bộ hóa]]
- ![[lucide-trash-2.svg#icon]] [[Lịch sử phiên bản#Khôi phục tệp đã xóa|Các tập tin đã xóa]]
- ![[lucide-cog.svg#icon]] [[Cài đặt đồng bộ và đồng bộ hóa chọn lọc|Cài đặt đồng bộ]]

## Nhật ký hoạt động đồng bộ

Obsidian Sync bao gồm nhật ký đồng bộ chi tiết theo dõi tất cả tương tác giữa các tệp cục bộ và kho từ xa của bạn. Nhật ký hiển thị các thao tác tải lên, tải xuống, xóa và mọi vấn đề như xung đột hợp nhất hoặc sự cố kết nối.

**Truy cập nhật ký hoạt động:**
- Nhấp vào biểu tượng trạng thái đồng bộ trên thanh trạng thái
- Đi tới **[[Cài đặt]] → Sync → Nhật ký hoạt động**
- Sử dụng **Bảng lệnh → Sync: Mở nhật ký hoạt động**

Nhật ký cung cấp dấu thời gian và chi tiết cho mỗi thao tác đồng bộ, giúp ích cho việc khắc phục sự cố đồng bộ.

> [!warning] Nhật ký đồng bộ không được lưu lại sau khi Obsidian đóng. Nếu bạn gặp sự cố, hãy đảm bảo sao chép nhật ký _trước khi_ đóng ứng dụng.

Nhật ký phân loại thông báo thành các loại sau:

- [[#Thông báo chung]]
- [[#Thông báo lỗi]]
- [[#Thông báo bỏ qua]]
- [[#Thông báo tài khoản]]

Bạn có thể lọc nhật ký đồng bộ theo **Tất cả**, **Lỗi**, **Đã bỏ qua** và **Xung đột hợp nhất**. Ngoài ra, bạn có thể tìm kiếm nhật ký đồng bộ bằng hộp tìm kiếm trong cửa sổ Sync.

> [!summary] Chúng tôi đã bao gồm một số thông báo phổ biến mà bạn có thể gặp phải bên dưới. Danh sách này không đầy đủ. Nếu bạn đang gặp sự cố và có thông báo nhật ký đồng bộ mà bạn không chắc chắn, [[Trợ giúp và hỗ trợ#Liên hệ hỗ trợ Obsidian|liên hệ hỗ trợ Obsidian]].

### Thông báo chung

Đây là những thông báo hàng ngày phổ biến mà bạn có thể gặp.

**Connecting to server**  
Obsidian đang cố gắng kết nối với [[Obsidian Sync/Bảo mật và quyền riêng tư#Tôi có thể tìm máy chủ Sync hiện tại ở đâu và nó được lưu trữ tại đâu?|máy chủ Sync]] của kho từ xa.

**Connected to server. Detecting changes...**  
Obsidian đã thiết lập kết nối và đang so sánh kho cục bộ với kho từ xa để xác định xem có cần thay đổi gì không.

> [!info] Thông báo này cũng có thể chỉ ra các vấn đề Sync tiềm ẩn khác. Nếu bạn thấy nó lặp lại nhiều lần và tin rằng vẫn còn mục cần đồng bộ, [[Trợ giúp và hỗ trợ#Liên hệ hỗ trợ Obsidian|liên hệ hỗ trợ Obsidian]].

**Fully synced**  
- Kho cục bộ và kho từ xa đã được đồng bộ hoàn toàn.

**Merging conflicted file**  
Một xung đột đã được phát hiện trong quá trình đồng bộ và tệp đã được hợp nhất thay vì ghi đè. Xem [[Khắc phục sự cố Obsidian Sync#Giải quyết xung đột|giải quyết xung đột]] để biết thêm thông tin. Nếu việc hợp nhất không mong muốn, bạn có thể khôi phục các phiên bản trước qua [[Lịch sử phiên bản]] hoặc [[Khôi phục tập tin]].

**Rejected server change**  
Các thay đổi trên kho từ xa cũ hơn phiên bản trên thiết bị cục bộ của bạn, vì vậy phiên bản cục bộ được giữ lại và thay đổi từ xa bị bỏ qua.

### Thông báo lỗi

Đây là các thông báo chi tiết về lỗi trong quá trình đồng bộ tệp.

**Out of memory**  
Vấn đề này thường xảy ra trên thiết bị di động khi không có đủ dung lượng lưu trữ hoặc bộ nhớ để tải xuống tệp. Nó phổ biến nhất với các tệp lớn, chẳng hạn như video.

### Thông báo bỏ qua

Đây là các thông báo chi tiết về những gì đã bị bỏ qua và có thể là lý do tại sao.

**Unable to download file with illegal name**

Tệp chứa [ký tự đặc biệt hoặc quy ước đặt tên](https://stackoverflow.com/questions/1976007/what-characters-are-forbidden-in-windows-and-linux-directory-names) không được phép trên hệ điều hành nhận. Để dễ dàng, bạn có thể đổi tên tệp trên thiết bị nguồn để xóa tất cả ký tự đặc biệt ngoại trừ `-` và `_`.

Lưu ý rằng điều này cũng bao gồm các tệp có nhiều dấu chấm `.` trong tên trên thiết bị Android.

### Thông báo tài khoản

Đây là các thông báo liên quan đến thay đổi trong đăng ký hoặc tài khoản của bạn.

**Vault limit exceeded**  
Tài khoản của bạn đã vượt quá [[Câu hỏi thường gặp#How large can each remote vault be|kích thước lưu trữ tối đa]]. Tệp đính kèm và lịch sử phiên bản đóng góp vào kích thước này. Ngay cả khi kho của bạn có vẻ nhỏ hơn giới hạn, các phiên bản cũ và tệp có thể đẩy nó vượt quá.

Để giảm kích thước kho:
1. Mở **[[Cài đặt]] → Sync**.
2. Sử dụng các tùy chọn trong **Kích thước kho lưu trữ vượt quá giới hạn** để xóa các tệp lớn.

**Vault not found**  
`{"res":"err","msg":"Vault not found."}`

Lỗi này có thể xảy ra trong các trường hợp sau:

1. Kho đã bị xóa từ thiết bị khác.
2. Đăng ký đồng bộ không hoạt động hơn 30 ngày, khiến kho từ xa bị xóa.
3. Đăng ký đã bị hủy hoặc hoàn tiền, dẫn đến việc xóa kho từ xa.

Trong những trường hợp này, bạn sẽ cần [[Thiết lập Obsidian Sync#Ngắt kết nối khỏi kho từ xa|ngắt kết nối khỏi kho từ xa]] và [[Thiết lập Obsidian Sync#Tạo kho từ xa mới|tạo kho từ xa mới]], đảm bảo dữ liệu cục bộ của bạn được bảo toàn.

**Failed to authenticate: Your subscription to Obsidian Sync has expired**  
Tài khoản của bạn hiện ở trạng thái hết hạn hoàn toàn vì chúng tôi không thể xử lý thanh toán đã lưu.

Để tiếp tục sử dụng Obsidian Sync, bạn cần đăng ký lại trong [tài khoản của bạn](https://obsidian.md/account/sync).

**Failed to authenticate: Not logged in**

Obsidian Sync đã phát hiện rằng bạn hiện không đăng nhập. Bạn cần đăng nhập lại trên ứng dụng trong phần [[Cài đặt#General#Account|Tài khoản]] của **[[Cài đặt]]**.

Trong một số trường hợp, plugin cộng đồng cũng có thể ngăn Obsidian Sync xác nhận trạng thái đăng nhập tài khoản của bạn. Vui lòng vào **[[Bảo mật plugin#Chế độ hạn chế|Chế độ hạn chế]]** và thử lại.

### Thông báo mạng

**Disconnected from server**
`Unable to connect to server`

Obsidian Sync đã ngắt kết nối khỏi máy chủ Sync vì lý do không xác định. Sync sẽ cố gắng kết nối lại với máy chủ định kỳ.

Trên iOS, thông báo này hiển thị dưới dạng lỗi sau:
`Null is not an object (evaluating 'this.socket.send')`

Nó có nghĩa hoàn toàn giống với thông báo `Unable to connect to server`, và không phải là dấu hiệu cho thấy có điều gì khác sai.
