---
permalink: sync/security
publish: true
mobile: false
description: Tìm hiểu về các cân nhắc bảo mật và quyền riêng tư cho Obsidian Sync.
---
## Mã hóa

Vì sự an toàn của bạn, [[Giới thiệu về Obsidian Sync|Obsidian Sync]] mã hóa [[Kho lưu trữ cục bộ và từ xa|kho từ xa]] và tất cả giao tiếp với máy chủ của Obsidian.

Khi bạn tạo một kho từ xa mới, bạn có hai tùy chọn:

- **Mã hóa đầu cuối (mặc định)** cung cấp mức bảo mật mạnh nhất nhưng yêu cầu bạn lưu mật khẩu mã hóa một cách an toàn. Điều này đảm bảo rằng không ai — kể cả đội ngũ Obsidian — có thể truy cập ghi chú của bạn.
- **Mã hóa tiêu chuẩn** sử dụng khóa mã hóa được Obsidian quản lý để bảo vệ dữ liệu của bạn trong quá trình truyền tải và trên máy chủ của chúng tôi.

Chúng tôi khuyến nghị mã hóa đầu cuối cho tất cả người dùng vì đây là tùy chọn riêng tư và an toàn nhất. Tuy nhiên, hãy lưu ý rằng nếu bạn quên hoặc mất mật khẩu mã hóa, dữ liệu của bạn sẽ vẫn được mã hóa và không thể sử dụng mãi mãi. Chúng tôi không thể khôi phục mật khẩu hoặc bất kỳ dữ liệu được mã hóa nào cho bạn.

Lựa chọn của bạn chỉ ảnh hưởng đến kho từ xa. Obsidian không mã hóa kho cục bộ của bạn.

### Mã hóa đầu cuối nghĩa là gì?

Mã hóa đầu cuối có nghĩa là dữ liệu được mã hóa ngay từ thời điểm rời khỏi thiết bị của bạn, và chỉ có thể được giải mã bằng khóa mã hóa của bạn khi quay trở lại một trong các thiết bị của bạn.

Chúng tôi không thể đọc dữ liệu của bạn. Những kẻ nghe lén tiềm năng cũng không thể, chẳng hạn như nhà cung cấp dịch vụ internet của bạn.

Trong trường hợp hiếm hoi máy chủ bị xâm phạm hoàn toàn, dữ liệu của bạn vẫn được mã hóa — không ai có thể giải mã tệp của bạn mà không biết mật khẩu.

### Rủi ro khi sử dụng mã hóa tiêu chuẩn là gì?

Mã hóa tiêu chuẩn về cơ bản kém an toàn hơn mã hóa đầu cuối, nhưng đây có thể là một tùy chọn tiện lợi nếu bạn không mong đợi dữ liệu đang đồng bộ phải hoàn toàn riêng tư. Ví dụ, nếu kho đồng bộ của bạn được [[Giới thiệu về Obsidian Publish|xuất bản]] lên một trang web công khai như trang Trợ giúp này, thì mã hóa đầu cuối là không cần thiết.

Mã hóa tiêu chuẩn là phương pháp mã hóa tương tự được các công ty lưu trữ đám mây và nền tảng phần mềm dưới dạng dịch vụ sử dụng, chẳng hạn như Google Docs, Dropbox và iCloud (không có Advanced Data Protection). Khóa mã hóa được ứng dụng tạo ra và sử dụng để bảo vệ dữ liệu của bạn trong quá trình truyền tải và trên máy chủ. Vì khóa mã hóa được lưu trữ trên máy chủ của công ty, nó có thể được sử dụng để giải mã dữ liệu của bạn, ví dụ trong trường hợp công ty phải tuân theo lệnh khám xét, hoặc trong trường hợp bạn muốn truy cập dữ liệu qua trình duyệt web.

Mã hóa đầu cuối đảm bảo rằng Obsidian không bao giờ có thể truy cập dữ liệu của bạn và nên luôn được sử dụng để đồng bộ dữ liệu mà bạn muốn giữ hoàn toàn riêng tư và an toàn.

### Bạn sử dụng loại mã hóa nào?

Để bảo mật dữ liệu, chúng tôi triển khai các giao thức mã hóa tiêu chuẩn ngành. Cụ thể, chúng tôi sử dụng [AES-256](https://www.nist.gov/publications/advanced-encryption-standard-aes-0), tiêu chuẩn mã hóa mạnh nhất, được sử dụng rộng rãi trong các bối cảnh như ngân hàng trực tuyến. Quá trình mã hóa bao gồm các chi tiết kỹ thuật sau:

- **Hàm dẫn xuất khóa:** [scrypt](https://en.wikipedia.org/wiki/Scrypt) với salt
- **Thuật toán mã hóa:** AES-256 sử dụng [Galois/Counter Mode (GCM)](https://en.wikipedia.org/wiki/Galois/Counter_Mode)

### Tôi có thể xác minh dữ liệu của mình được mã hóa đầu cuối không?

Có. Xem hướng dẫn của chúng tôi, [cách xác minh mã hóa đầu cuối của Obsidian Sync](https://obsidian.md/blog/verify-obsidian-sync-encryption/). Hướng dẫn này cung cấp các bước chi tiết để bạn xác minh một cách không cần tin tưởng việc mã hóa đầu cuối dữ liệu khi được gửi và nhận qua máy chủ Sync.

### Obsidian đã hoàn thành kiểm toán bảo mật bên thứ ba chưa?

Có. Obsidian đã được kiểm toán độc lập. Truy cập [trang Bảo mật](https://obsidian.md/security) của chúng tôi để xem các báo cáo kiểm toán. Các cuộc kiểm toán định kỳ bởi các công ty bảo mật bên thứ ba đảm bảo rằng mã nguồn và quy trình của Obsidian đáp ứng các tiêu chuẩn bảo mật cao nhất.

### Điều gì xảy ra nếu tôi quên mật khẩu mã hóa?

Nếu bạn mất hoặc quên mật khẩu mã hóa, bạn sẽ không thể kết nối thêm kho vào kho từ xa. Vì mật khẩu mã hóa không được lưu ở bất kỳ đâu, nó sẽ bị mất vĩnh viễn.

Tuy nhiên, dữ liệu của bạn thường được lưu trữ an toàn tại máy cục bộ trên mỗi thiết bị.

Để tiếp tục sử dụng Obsidian Sync, chúng tôi khuyến nghị thực hiện thiết lập lại hoàn toàn để có thể thêm thiết bị mới vào hệ thống Sync của bạn:

1. Tạo bản sao lưu đầy đủ kho trên thiết bị chính, phòng trường hợp xảy ra sự cố. Điều này có thể đơn giản như sao chép thư mục kho hoặc tạo tệp zip từ kho.
2. Ngắt kết nối kho từ xa trên mỗi thiết bị. Bạn có thể thực hiện bằng cách vào **[[Cài đặt]] → Sync → Chọn kho từ xa → Ngắt kết nối**.
3. [[Thiết lập Obsidian Sync#Tạo kho từ xa mới|Tạo kho từ xa mới]] trên thiết bị chính từ cùng trang Cài đặt. Tùy chọn, bạn có thể xóa kho từ xa trước đó vì dù sao bạn cũng không có mật khẩu cho nó. (Bạn có thể phải xóa kho từ xa trước đó nếu đã đạt [[Câu hỏi thường gặp#Tôi có thể có bao nhiêu kho từ xa?|giới hạn kho]])
4. Đợi thiết bị chính đồng bộ. Theo dõi chỉ báo đồng bộ ở góc dưới bên phải màn hình cho đến khi hiển thị dấu kiểm màu xanh.
5. Kết nối từng thiết bị vào cùng kho từ xa vừa tạo. Khi kết nối, bạn sẽ thấy cảnh báo về việc hợp nhất kho, điều này là bình thường và bạn có thể tiếp tục. Đợi mỗi thiết bị đồng bộ hoàn toàn trước khi chuyển sang thiết bị tiếp theo. Điều này giảm khả năng xảy ra sự cố.
6. Bây giờ tất cả thiết bị của bạn đã được kết nối với kho từ xa mới.

## Lưu trữ

### Máy chủ Obsidian Sync được lưu trữ ở đâu?

Các trung tâm dữ liệu của chúng tôi, được hỗ trợ bởi [DigitalOcean](https://www.digitalocean.com), cung cấp các tùy chọn lưu trữ kho từ xa theo khu vực địa lý tại các vị trí sau:

> [!abstract] Khu vực Sync
> **Tự động**: Trung tâm dữ liệu được chọn dựa trên vị trí IP của bạn, tại thời điểm bạn thiết lập lần đầu.
> 
> **Châu Á**: Singapore
> **Châu Âu**: Frankfurt, Đức
> **Bắc Mỹ**: San Francisco, Hoa Kỳ
> **Châu Đại Dương**: Sydney, Úc
^sync-geo-regions

### Tôi có thể tìm máy chủ Sync hiện tại ở đâu và nó được lưu trữ tại đâu?

Để xác định máy chủ Obsidian Sync của bạn, hãy làm theo các bước sau:
1. Vào **[[Cài đặt]]** → **Sync** → **Sao chép thông tin gỡ lỗi**.
2. Dán thông tin đã sao chép vào một ghi chú hoặc tệp.
3. Tìm dòng tương tự như sau: `Host server: wss://sync-xx.obsidian.md`

Dòng này cho biết máy chủ nơi kho từ xa của bạn được lưu trữ. Để biết thêm chi tiết về vị trí và thời gian hoạt động của máy chủ, hãy truy cập [trang trạng thái](https://status.obsidian.md/) của chúng tôi.

## Mạng và truy cập

### Quản lý truy cập Obsidian Sync trên mạng của bạn

Để điều chỉnh quyền truy cập Obsidian Sync trên mạng của bạn, bạn cần quản lý các tên miền sau:

`sync-xx.obsidian.md`

`xx` trong trường hợp này là một số trong khoảng từ `1 - 100`.

> [!tip] Nếu hệ thống tường lửa của bạn hỗ trợ, chúng tôi khuyến nghị đưa `sync-*.obsidian.md` vào danh sách trắng để phù hợp với sự tăng trưởng liên tục của số lượng tên miền phụ.

## Giới hạn

Obsidian Sync được thiết kế để giữ ghi chú của bạn riêng tư và an toàn. Để cung cấp đồng bộ nhanh, đáng tin cậy và lưu trữ hiệu quả trên các thiết bị, chúng tôi thực hiện một số đánh đổi có chủ đích trong cách áp dụng mã hóa.

### Mã hóa hash tệp xác định

Chúng tôi mã hóa hash tệp một cách xác định: cùng nội dung tệp, sử dụng cùng khóa mã hóa và salt, luôn tạo ra cùng hash được mã hóa trên máy chủ. Điều này giúp Sync phát hiện bản trùng lặp và tránh tải lên hoặc lưu trữ lại dữ liệu giống hệt nhau, tiết kiệm băng thông và dung lượng lưu trữ từ xa, đặc biệt trong lịch sử phiên bản hoặc khi các tệp lớn lặp lại.

Tuy nhiên, nếu kẻ tấn công xâm phạm máy chủ Sync, và họ có cách riêng để buộc người dùng tải lên các tệp theo ý muốn, thì kẻ tấn công có thể buộc người dùng tải lên các tệp cụ thể và xác định xem tệp đó có khớp với tệp người dùng đã tải lên trước đó hay không.

### Không có ràng buộc mật mã giữa đường dẫn và nội dung

Một số siêu dữ liệu không được mã hóa đầu cuối: thiết bị nào đã tải lên hoặc xóa tệp, thời điểm tải lên, và *ánh xạ* giữa đường dẫn tệp được mã hóa và nội dung được mã hóa. Dữ liệu này có thể đọc được bởi máy chủ để có thể định tuyến các thay đổi, xác định lịch sử phiên bản cho tệp và giữ các thiết bị đồng bộ.

Nếu máy chủ Sync bị xâm phạm, kẻ tấn công có thể can thiệp vào ánh xạ đó, khiến nội dung của một tệp được mã hóa được phân phối dưới một đường dẫn tệp khác. Điều này không tiết lộ dữ liệu văn bản thuần của bạn, nó vẫn được mã hóa.
