# Obsidian dành cho Android

Ứng dụng Android hiện ở [[Mobile app beta|closed beta]] và có sẵn dưới dạng APK đã ký.

## Làm cách nào để đồng bộ hóa dữ liệu của tôi?

Obsidian cho Android lưu trữ cục bộ tất cả các vault trong thư mục tài liệu công khai trên thiết bị của bạn. Bạn có thể chọn sử dụng [[Obsidian Sync]] để đồng bộ hóa các file của mình hoặc sử dụng bất kỳ nhà cung cấp đồng bộ hóa bên thứ ba nào có thể chọn đồng bộ hóa với thư mục tài liệu công cộng.

### Obsidian Sync

Cũng như với máy tính để bàn Obsidian, chúng tôi cung cấp dịch vụ [[Obsidian Sync]] trả phí được tích hợp sẵn của mình.

Để thiết lập một vault được đồng bộ hóa thông qua Obsidian Sync, trước tiên hãy tạo một vault cục bộ trống mới. Sau khi vault trống được mở, hãy mở thanh bên trái, nhấn vào nút cài đặt và thiết lập Obsidian Sync giống như bạn đã làm trên Máy tính để bàn:

1. Đăng nhập vào tài khoản Obsidian của bạn trong tab Account.
2. Kích hoạt plugin Sync core.
3. Chọn vault từ xa để đồng bộ hóa.
4. Giữ ứng dụng mở cho đến khi tất cả các file của bạn đã được đồng bộ hóa.

Để xem trạng thái đồng bộ của Obsidian Sync, hãy vuốt để kéo ngăn bên phải ra và bạn sẽ thấy trạng thái giống như nó hiển thị trên ứng dụng dành cho máy tính để bàn. Nhấn vào nó để biết thêm thông tin, chẳng hạn như xem nhật ký đồng bộ hóa để gỡ lỗi bất kỳ sự cố nào.

Lưu ý: Nếu bạn sử dụng Obsidian Sync cùng với dịch vụ đồng bộ hóa của bên thứ ba, hãy đảm bảo loại trừ `.obsidian/sync.json` trong đồng bộ hóa bên thứ ba của bạn để tránh phá vỡ Obsidian Sync. File này được sử dụng để theo dõi trạng thái đồng bộ hóa cho thiết bị cục bộ và có thể gây ra sự cố khi vô tình đồng bộ hóa.

### Đồng bộ hóa bên thứ ba

Bạn cũng có thể sử dụng giải pháp đồng bộ hóa ưa thích của mình để giữ cho thư mục cục bộ trên điện thoại của bạn được đồng bộ hóa với các thiết bị khác.

Có những ứng dụng trên Play Store cho phép bạn đồng bộ hóa thư mục trên điện thoại của mình với các thiết bị khác, chẳng hạn như [Dropsync](https://play.google.com/store/apps/details?id=com.ttxapps.dropsync) hoặc [FolderSync](https://play.google.com/store/apps/details?id=dk.tacit.android.foldersync.lite).

Tuy nhiên, chúng tôi chưa thử nghiệm các giải pháp này. Nếu bạn thành công hoặc có kinh nghiệm với bất kỳ điều nào trong số họ, vui lòng cho chúng tôi biết để chúng tôi có thể cung cấp thông tin trên trang này.

## Vault của tôi được lưu trữ ở đâu?

Trên Android, thư mục Obsidian được lưu trữ trong thư mục tài liệu công khai trong `Documents/Obsidian`. Thư mục `Documents` thường được lưu trữ trong thẻ SD hoặc bộ nhớ giả lập.

Bất kỳ thư mục nào trong thư mục chính này sẽ được coi là một vault. Nếu bạn đồng bộ hoặc sao chép một thư mục vault vào thư mục này, nó có thể được nhận ra khi bạn mở Obsidian.

# Obsidian dành cho iOS

Ứng dụng iOS hiện ở [[Mobile app beta|closed beta]] và có sẵn thông qua TestFlight.

## Làm cách nào để đồng bộ hóa dữ liệu của tôi?

Obsidian cho iOS có thể lưu trữ vault của bạn trong iCloud hoặc cục bộ. Hai giải pháp đồng bộ được thử nghiệm và đề xuất hiện tại là iCloud và Obsidian Sync.

Bất kỳ nhà cung cấp đồng bộ hóa bên thứ ba nào cung cấp đồng bộ hóa cho một thư mục cụ thể trên thiết bị của bạn cũng có thể hoạt động, nhưng chúng tôi không biết về bất kỳ điều gì. Điều này là do hạn chế của cơ chế chia sẻ file nhiều ứng dụng phức tạp trong iOS, không giống như Android cung cấp một thư mục chung mà tất cả các ứng dụng đều có thể truy cập. Do đó, hầu hết các nhà cung cấp đồng bộ hóa bên thứ ba không có cách triển khai phù hợp cho đồng bộ hóa nền trên iOS.

### Obsidian Sync

Bạn có thể làm theo các bước tương tự như đồng bộ hóa của Android như hình dưới đây, đảm bảo rằng bạn tạo một thư mục không phải iCloud vì chúng tôi không khuyên bạn nên sử dụng đồng thời cả Obsidian Sync và iCloud Sync vì đã được báo cáo là gây mất dữ liệu.

![[#Obsidian dành cho Android#Obsidian Sync]]

### Đồng bộ hóa iCloud Drive

Để thiết lập một vault được đồng bộ hóa thông qua iCloud Drive, trước tiên bạn phải cài đặt và mở ứng dụng Obsidian iOS. Thao tác này sẽ tạo một thư mục ứng dụng có tên "Obsidian" trong iCloud Drive của bạn, với biểu tượng của ứng dụng Obsidian. Lưu ý rằng thư mục này được iCloud coi là một thư mục đặc biệt và khác với thư mục bạn tạo thủ công trong iCloud Drive của mình.

Tiếp theo, trên máy tính của bạn, hãy di chuyển thư mục vault của bạn vào `iCloud Drive/Obsidian/`. Làm như vậy sẽ cho phép Obsidian đọc thư mục ứng dụng đặc biệt trong iCloud Drive của bạn.

Để iCloud đồng bộ hóa toàn bộ thư mục vault, hãy mở ứng dụng Obsidian trên thiết bị di động của bạn. Bạn sẽ thấy vault mà bạn vừa đặt vào, cùng với biểu tượng đám mây cho biết nó được lưu trữ trong iCloud.

Lần đầu tiên bạn mở vault đó, Obsidian có thể bị đóng băng một lúc vì iCloud đang tải xuống tất cả các file. Cuối cùng khi iCloud hoàn tất đồng bộ hóa mọi thứ với điện thoại, ứng dụng sẽ hoạt động trơn tru. Tuy nhiên, có thể yêu cầu bạn khởi động lại ứng dụng một vài lần.

### Bản sao làm việc

Ngoài ra, bạn có thể thiết lập Bản sao làm việc sử dụng Git để đồng bộ hóa vault của mình trên iOS. Để thực hiện việc này, trước tiên bạn nên tạo một vault cục bộ trống trên thiết bị của mình, sau đó bạn có thể "Setup Folder Sync" (Thiết lập đồng bộ hóa thư mục) và chọn một vault cục bộ bên trong ứng dụng Obsidian. Sau đó, bạn commit và push theo cách thủ công.

## Vault của tôi được lưu trữ ở đâu?

Nếu bạn chọn lưu trữ vault của mình trong iCloud, thì nó sẽ được lưu trữ trong một vùng chứa trong tài khoản iCloud Drive của bạn, trong một thư mục ứng dụng có tên "Obsidian", thư mục này sẽ có biểu tượng của biểu tượng của chúng tôi.

Nếu bạn chọn không sử dụng iCloud, thì vault của bạn sẽ được lưu trữ trong hệ thống file sandbox của ứng dụng Obsidian. Kể từ v0.0.14, vault cục bộ hiện có thể truy cập được từ bất kỳ ứng dụng nào khác hỗ trợ chọn một thư mục tạo thành hệ thống file. Do đó, các ứng dụng như Bản sao làm việc có thể được sử dụng để đồng bộ hóa với các vault cục bộ của Obsidian.

Hiện tại, Obsidian chưa hỗ trợ trực tiếp các nhà cung cấp đồng bộ hóa bên thứ ba có thể làm lộ hệ thống file ảo thông qua FileProvider. Chúng tôi sẽ cố gắng cải tiến điều này trong tương lai.

# Hỗ trợ đồng bộ hóa của bên thứ ba

Nhiều người dùng hỏi tại sao Obsidian dành cho Mobile không hỗ trợ giải pháp đồng bộ hóa ưa thích của họ. Dưới đây là giải thích ngắn gọn về trạng thái hiện tại của hỗ trợ đồng bộ hóa trên thiết bị di động.

Điều khác biệt về Obsidian so với các ứng dụng khác như 1Writer và iA Writer là Obsidian hoạt động hiệu quả với một vault chứ không phải là một ghi chú đơn giản. Nhiều chức năng cốt lõi của Obsidian phụ thuộc vào toàn bộ vault và tất cả các file bên trong, chẳng hạn như liên kết tự động hoàn thành, nhúng hình ảnh, ngăn tag, liên kết ngược và tất cả chức năng ghi chú chéo.

Ngược lại, hầu hết các ứng dụng chỉnh sửa Markdown chỉ đơn giản là "mở" một ghi chú duy nhất, để người dùng thực hiện chỉnh sửa, sau đó lưu lại ghi chú đó. Do đó, các nhà cung cấp đồng bộ hệ điều hành và bên thứ ba thường chỉ cung cấp một API để truy cập/làm việc với một file duy nhất, nhưng không nhiều để làm việc với vault (thư mục file có các thư mục con).

Để đồng bộ hóa, ứng dụng chỉnh sửa markdown thông thường có thể chỉ cần triển khai cơ bản "file tải xuống khi bạn mở file đã chọn" và "tải file lên trở lại khi bạn nhấn lưu". Obsidian phải tải xuống toàn bộ vault để hữu ích và theo dõi tất cả các file đã sửa đổi (chẳng hạn như khi bạn thực hiện đổi tên file, chúng tôi có thể cập nhật một loạt file khác cho các liên kết đã thay đổi do đổi tên). Trên hết, chúng tôi cần một cách để theo dõi các thay đổi thông qua giải pháp đồng bộ hóa để có thể cập nhật bộ nhớ đệm nội bộ của mình khi các file thay đổi, nhằm cung cấp các liên kết chính xác.

Giữ tất cả những thứ đó đồng bộ với nhà cung cấp đồng bộ hóa bên thứ ba sẽ khá tẻ nhạt - và đây thực sự là một phần lý do tại sao hầu hết các nhà cung cấp đồng bộ hóa không tạo ứng dụng khách đồng bộ hóa phù hợp cho thiết bị di động và bạn phải sử dụng ứng dụng của bên thứ ba (như DropSync hoặc FolderSync) để thực hiện. Thật không may, các ứng dụng như vậy không tồn tại trên iOS do hộp cát ứng dụng.