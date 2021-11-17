Khi bạn muốn thêm các style tùy chỉnh vào vault của mình, có hai cách chính để thực hiện việc này:

## Vault style

### Chủ đề

Chủ đề cho phép bạn chuyển đổi giao diện của vault bằng menu thả xuống khi chúng đã được thêm vào thư mục chủ đề của vault của bạn.

Bạn có thể tìm thấy cấu hình này trong phần `Settings` > `Appearance` > `Themes` section of your vault settings.

### Tạo chủ đề tùy chỉnh

Nếu bạn đang tạo chủ đề của riêng mình, bạn có thể thực hiện việc này bằng cách:

1. Tạo file CSS chủ đề tùy chỉnh của bạn trong thư mục chủ đề `YOUR_VAULT/.obsidian/themes/YOUR_CUSTOM_THEME.css`
2. Bật nó trong menu thả xuống của chủ đề trong `Settings` > `Appearance` > `Themes`

Để biết thêm thông tin về cách tùy chỉnh kiểu của biểu đồ, bạn có thể tìm thêm thông tin trong [[Chế độ xem biểu đồ]].

### Sử dụng Chủ đề và/hoặc đoạn CSS

Bạn có thể tìm thấy cấu hình này trong Giao diện cài đặt. Bạn có thể chọn chủ đề cộng đồng hoặc đặt chủ đề do chính bạn lập trình. Nếu bạn đặt chủ đề cộng đồng, chủ đề đó sẽ tự động được đặt vào đúng thư mục. Nếu bạn lập trình chủ đề của riêng mình, bạn phải tự đặt nó vào vị trí thư mục được hiển thị.

Đoạn code CSS được coi là những đoạn CSS nhỏ cho những thay đổi nhỏ bạn muốn thực hiện/những thứ bạn muốn thêm vào. Những đoạn code này phải được đặt trong thư mục được hiển thị.

Bạn có thể đi đến các thư mục tương ứng bằng cách nhấp vào các nút thư mục. Nếu thư mục chưa được tạo, nó sẽ được tạo. Trong trường hợp các đoạn code hoặc chủ đề của bạn không hiển thị sau khi bạn đặt chúng ở đó, bạn có thể nhấp vào nút bên cạnh biểu tượng thư mục để làm mới danh sách.

## Obsidian Publish styles

Hiện tại, [[Obsidian Publish]] không thể tự động phát hiện vault đã định cấu hình [[Thêm style tùy chỉnh#Chủ đề|chủ đề]] và xuất bản các style tương ứng.

Dưới đây là cách khắc phục hạn chế này:

1. Vào `YOUR_VAULT/.obsidian/themes/CURRENT_THEME_FOLDER`;
2. Sao chép file CSS chính `CURRENT_THEME.css` trong thư mục;
3. Dán nó vào thư mục gốc của vault (`YOUR_VAULT`);
4. Đổi tên file CSS thành `publish.css`;
5. Trong plugin xuất bản, hãy tải lên file `publish.css`;
6. Nếu CSS của bạn không có hiệu lực trong vài phút, hãy thử làm mới bộ nhớ cache của trình duyệt vì CSS cũ có thể đã được lưu vào bộ nhớ cache.
