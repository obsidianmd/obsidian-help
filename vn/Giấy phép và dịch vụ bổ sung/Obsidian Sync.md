Obsidian Sync™ là một dịch vụ trả phí để đồng bộ hóa ghi chú giữa các vault trên nhiều thiết bị khác nhau.

### Cách hoạt động của Obsidian Sync

Obsidian Sync khá đơn giản: sau khi bạn kết nối các vault cục bộ từ nhiều thiết bị với cùng một vault từ xa, các thay đổi sẽ được tự động đồng bộ hóa giữa các vault cục bộ này, ngoại trừ các file và thư mục mà bạn yêu cầu Obsidian bỏ qua.

### Tính năng

Hiện tại, Obsidian Sync có các tính năng:

- Mã hóa đầu cuối
- Lịch sử phiên bản được tích hợp vào Obsidian
- Xem các file đã xóa
- Đồng bộ có chọn lọc
- Loại trừ các thư mục nhất định
- Chuyển đổi đồng bộ hóa cho các file hình ảnh, âm thanh, video và PDF
- Chuyển đổi giữa nhiều vault từ xa

Trong tương lai, chúng tôi sẽ cải thiện Obsidian Sync với:

- Chia sẻ Vault
- Đồng bộ cấu hình `.obsidian` nếu muốn (để đồng bộ các plugin và chủ đề)


### Bật plugin Obsidian Sync

Trong Obsidian v0.9.21 trở lên, bạn có thể bật Obsidian Sync bằng cách bật plugin "Sync" trong Settings -> Core plugins.

### Thiết lập vault từ xa

Cảnh báo: Chúng tôi khuyên bạn không nên sử dụng các dịch vụ đồng bộ hóa của bên thứ ba để đồng bộ hóa cùng một vault với Obsidian Sync. [[#Đồng bộ hóa bên thứ ba|Tìm hiểu thêm về điều này]].

Để bắt đầu đồng bộ hóa, trước tiên bạn cần tạo một vault từ xa để lưu trữ dữ liệu được mã hóa của bạn.

Để làm điều đó, hãy vào Setting -> Sync -> Pick remote vault -> Choose -> Create new vault.

Sau khi tạo nó, bạn có thể kết nối ngay với vault bằng cách nhấp vào nút "Connect" bên cạnh nó.

Bạn có thể chọn bắt đầu đồng bộ hóa ngay sau khi kết nối hoặc chọn các thư mục để bỏ qua.

##### Đặt mật khẩu mã hóa

Theo mặc định, bạn cần đặt mật khẩu mã hóa cho vault của mình. Mật khẩu này được sử dụng để mã hóa và giải mã dữ liệu của bạn và cực kỳ quan trọng.

Bạn sẽ được yêu cầu nhập mật khẩu bất cứ khi nào bạn thiết lập đồng bộ hóa với một vault được mã hóa. ==Nếu bạn quên hoặc mất mật khẩu, dữ liệu của bạn sẽ vẫn được mã hóa và không sử dụng được mãi mãi. Chúng tôi không thể khôi phục mật khẩu hoặc bất kỳ dữ liệu được mã hóa nào cho bạn.== Các file cục bộ của bạn không bị ảnh hưởng.

Bạn cũng có thể chọn tắt tùy chọn "Custom end-to-end password" để cho phép chúng tôi quản lý khóa mã hóa. Điều này vẫn khá an toàn và mang lại sự tiện lợi khi không phải nhớ mật khẩu.

### Kiểm tra trạng thái đồng bộ hóa

Sau khi kết nối với một vault từ xa, bạn có thể kiểm tra trạng thái đồng bộ hóa hiện tại trong thanh trạng thái dưới cùng. Bạn có thể di chuột qua biểu tượng trạng thái để đọc thêm về những gì đang diễn ra.

Nhấp vào biểu tượng trạng thái sẽ mở ra cài đặt đồng bộ hóa dưới dạng phím tắt.

### Lịch sử phiên bản

Khi bạn chỉnh sửa ghi chú của mình, các phiên bản được lưu khoảng 10 giây một lần. ==Lịch sử phiên bản chỉ có sẵn cho ghi chú, không có attachment.==

Bạn có thể nhấp chuột phải vào file trong ngăn file explorer để xem lịch sử phiên bản của nó. Tùy chọn này cũng có sẵn trong menu tùy chọn khác.

Sau khi chọn phiên bản ở cột bên trái trong màn hình lịch sử phiên bản, bạn có thể khôi phục file về phiên bản này bằng cách nhấp vào nút "Restore".

### File đã xóa

Sau khi xáo file, bạn có thể xem file đó trong Setting -> Sync -> Deleted files -> View.

Nhấp vào một file đã xóa sẽ mở lịch sử phiên bản của nó. Sau đó, bạn có thể chọn khôi phục file về phiên bản trước.

### Đồng bộ hóa có chọn lọc

Bạn có thể đồng bộ hóa các file một cách chọn lọc theo thư mục hoặc loại file. ==Đồng bộ hóa có chọn lọc chỉ áp dụng cho các thay đổi trong tương lai. Bất kỳ file nào đã được tải lên sẽ không bị xóa ngay cả khi bạn chọn bỏ qua chúng. Hãy chắc chắn định cấu hình nó trước khi bắt đầu quá trình đồng bộ hóa.==

##### Bỏ chọn các thư mục

Bạn có thể bỏ chọn các thư mục trong Settings -> Sync -> Excluded folders -> Manage để ngăn chúng được đồng bộ hóa.

Các thư mục bị bỏ chọn sẽ bị bỏ qua khi cả tải lên và tải xuống đều thay đổi.

#### Loại file

Bạn có thể chuyển đổi đồng bộ hóa cho các file hình ảnh, âm thanh, video và PDF trong Settings -> Sync -> Selective sync.


### Đồng bộ hóa bên thứ ba

Nếu bạn đang sử dụng Obsidian Sync,chúng tôi khuyên bạn không nên sử dụng các dịch vụ đồng bộ của bên thứ ba như Dropbox, Google Drive, OneDrive hoặc iCloud để đồng bộ hóa cùng một vault giữa các thiết bị giống nhau bằng Obsidian Sync. Làm như vậy có thể gây ra xung đột, trùng lặp file hoặc trong trường hợp xấu nhất có thể dẫn đến file bị hỏng.

Nếu bạn thiết lập Obsidian Sync và dịch vụ đồng bộ hóa của bên thứ ba để đồng bộ hóa vault giữa hai thiết bị, thì điều sau sẽ xảy ra:
- Nếu Obsidian Sync "thắng" xung đột và đồng bộ hóa tệp của bạn trước, thì dịch vụ đồng bộ hóa bên thứ ba của bạn sẽ tạo ra một "bản sao bị xung đột".
- Nếu dịch vụ đồng bộ hóa bên thứ ba của bạn "thắng" xung đột và đồng bộ hóa file của bạn trước, thì Obsidian Sync sẽ cố gắng hợp nhất hai phiên bản hơi khác nhau, thường khiến một số ký tự cuối cùng bạn vừa nhập bị lùi lại.

Nếu bạn muốn duy trì bản sao lưu vault của mình bằng cách sử dụng dịch vụ đồng bộ hóa của bên thứ ba, bạn vẫn có thể làm như vậy bằng cách thiết lập nhà cung cấp dịch vụ đồng bộ hóa trên thiết bị duy nhất chính của mình chứ không phải trên các thiết bị phụ của bạn. Điều này sẽ đảm bảo rằng dịch vụ đồng bộ hóa bên thứ ba của bạn không "chạy đua" với Obsidian Sync.

### FAQ

##### Mã hóa end-to-end là gì?

Mã hóa end-to-end có nghĩa là dữ liệu được mã hóa ngay từ thời điểm nó rời khỏi thiết bị của bạn và chỉ có thể được giải mã bằng khóa mã hóa sau khi nó trở lại trên một trong các thiết bị của bạn.

Chúng tôi không có khả năng đọc dữ liệu của bạn, cũng như không có bất kỳ kẻ nghe trộm tiềm năng nào, chẳng hạn như nhà cung cấp dịch vụ internet của bạn.

Trong trường hợp hiếm hoi là do một máy chủ bị vi phạm hoàn toàn, dữ liệu của bạn sẽ vẫn được mã hóa và không ai có khả năng giải mã các tệp của bạn mà không biết mật khẩu của bạn.

##### Tôi có thể có bao nhiêu vault từ xa?

Mỗi tài khoản có Obsidian Sync có thể có tối đa 5 vault từ xa.

##### Lịch sử phiên bản được lưu giữ trong bao lâu?

Lịch sử phiên bản được lưu giữ tối đa một năm trước khi chúng tôi xóa nó.

##### Mỗi vault từ xa có thể lớn đến mức nào?

Hiện tại, mỗi vault dữ liệu từ xa có thể có tối đa 4 GB dữ liệu, bao gồm cả lịch sử phiên bản.

##### Dữ liệu của tôi có được mã hóa trên đĩa cứng không?

Không, dữ liệu của bạn vẫn ở dạng văn bản thuần trên đĩa cứng của bạn. Nếu bạn muốn mã hóa nó khỏi những người sử dụng máy tính của mình, bạn nên tìm giải pháp mã hóa đĩa.

##### Dữ liệu của tôi được lưu giữ trong bao lâu sau khi đăng ký của tôi hết hạn?

Dữ liệu trong vault từ xa của bạn, bao gồm cả lịch sử phiên bản, được lưu giữ cho bạn trong một tháng, sau khi đăng ký của bạn hết hạn.

Nó sẽ không ảnh hưởng đến việc sử dụng miễn là bạn gia hạn trong vòng một tháng.

##### Tôi có thể sử dụng Obsidian Sync làm giải pháp dự phòng không?

Obsidian Sync được thiết kế như một dịch vụ đồng bộ hóa dữ liệu, chứ không phải là một dịch vụ sao lưu.

Với lịch sử phiên bản, nó cung cấp một số tính năng sao lưu, tuy nhiên chúng tôi vẫn khuyên bạn nên có các biện pháp sao lưu bổ sung.

Obsidian Sync hiện đang trong giai đoạn thử nghiệm beta, vì vậy chúng tôi đặc biệt khuyên bạn nên có bản sao lưu, trong trường hợp có lỗi và trục trặc phần mềm.

##### Tôi có nên chọn mật khẩu mã hóa của riêng mình không?

Chọn mật khẩu của bạn nếu bạn yêu cầu mức độ bảo mật và quyền riêng tư cao nhất. Điều này đảm bảo rằng bất kỳ ai không biết mật khẩu của bạn sẽ không bao giờ có thể đọc ghi chú của bạn.

Việc cho phép chúng tôi quản lý khóa mã hóa của bạn sẽ thuận tiện hơn và bạn không có nguy cơ quên hoặc mất mật khẩu của mình.

Vault cục bộ của bạn không bị ảnh hưởng bởi tùy chọn này. Nếu bạn sao lưu đúng cách vault cục bộ của mình, đây không phải là vấn đề đối với bạn.

##### Mã hóa end-to-end có mạnh không?

Chúng tôi sử dụng AES-256 tiêu chuẩn công nghiệp để mã hóa dữ liệu của bạn. AES-256 là đặc điểm kỹ thuật mã hóa cấp quân sự được sử dụng rộng rãi trong ngân hàng trực tuyến.

Dưới đây là chi tiết kỹ thuật cho những người quan tâm:

- Chức năng dẫn xuất khóa được sử dụng: scrypt with salt
- Thuật toán mã hóa được sử dụng: AES-256 sử dụng GCM
