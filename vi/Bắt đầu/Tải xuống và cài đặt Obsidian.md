---
permalink: install
---
Obsidian có sẵn trên tất cả các nền tảng máy tính để bàn và di động chính. Dưới đây là tất cả các cách được hỗ trợ để tải xuống và cài đặt Obsidian.

## Cài đặt Obsidian trên Windows

1. Mở trình duyệt của bạn và truy cập [Tải xuống Obsidian](https://obsidian.md/download).
2. Trong mục **Windows**, nhấp **Universal** để tải xuống tệp cài đặt.
3. Mở tệp cài đặt và làm theo hướng dẫn.
4. Mở Obsidian giống như cách bạn mở bất kỳ ứng dụng nào khác.

## Cài đặt Obsidian trên macOS

1. Mở trình duyệt của bạn và truy cập [Tải xuống Obsidian](https://obsidian.md/download).
2. Trong mục **macOS**, nhấp **Universal** để tải xuống tệp cài đặt.
3. Mở tệp cài đặt.
4. Trong cửa sổ mở ra, kéo Obsidian vào thư mục Applications.
5. Mở Obsidian giống như cách bạn mở bất kỳ ứng dụng nào khác.

## Cài đặt Obsidian trên Linux

Nếu bạn sử dụng Linux, bạn có thể cài đặt Obsidian theo nhiều cách. Hãy làm theo hướng dẫn cho hệ thống đóng gói mà bạn đang sử dụng.

### Cài đặt Obsidian bằng Snap

1. Mở trình duyệt của bạn và truy cập [Tải xuống Obsidian](https://obsidian.md/download).
2. Trong mục **Linux**, nhấp **Snap** để tải xuống tệp cài đặt.
3. Mở terminal và điều hướng đến thư mục nơi bạn đã tải xuống tệp cài đặt.
4. Trong terminal, chạy lệnh sau để cài đặt gói Snap: (cờ `--dangerous` là bắt buộc vì Canonical, công ty tạo ra Snap, chưa xem xét gói của chúng tôi, cờ `--classic` cho phép Obsidian truy cập bên ngoài sandbox, nơi các ghi chú của bạn được lưu trữ)

   ```bash
   snap install obsidian_<version>_<arch>.snap --dangerous --classic
   ```

5. Mở Obsidian giống như cách bạn mở bất kỳ ứng dụng nào khác.

### Cài đặt Obsidian bằng AppImage

1. Mở trình duyệt của bạn và truy cập [Tải xuống Obsidian](https://obsidian.md/download).
2. Trong mục **Linux**, nhấp **AppImage** để tải xuống tệp cài đặt.
3. Mở terminal và điều hướng đến thư mục nơi bạn đã tải xuống tệp cài đặt.
4. Trong terminal, chạy lệnh sau để mở Obsidian:

   ```bash
   chmod u+x Obsidian-<version>.AppImage
   ./Obsidian-<version>.AppImage --no-sandbox
   ```
Lưu ý: Trên Chromebook, gói `libnss3-dev` phải được cài đặt nếu không bạn có thể nhận được lỗi `error while loading shared libraries: libnss3.so: cannot open shared object file: No such file or directory`.

### Cài đặt Obsidian bằng Flatpak

1. Trong terminal của bạn, chạy lệnh sau để cài đặt Obsidian:

   ```bash
   flatpak install flathub md.obsidian.Obsidian
   ```

2. Mở Obsidian bằng cách chạy lệnh sau:

   ```bash
   flatpak run md.obsidian.Obsidian
   ```

## Cài đặt Obsidian trên Android

1. Tìm Obsidian trên [Play Store](https://play.google.com/store/apps/details?id=md.obsidian).
2. Nhấn **Cài đặt** để tải xuống ứng dụng.
3. Mở Obsidian giống như cách bạn mở bất kỳ ứng dụng nào khác.

Bạn cũng có thể tùy chọn tải xuống APK cho Android từ trang [Tải xuống Obsidian](https://obsidian.md/download).

## Cài đặt Obsidian trên iPhone và iPad

1. Tìm Obsidian trên [App Store](https://apps.apple.com/us/app/obsidian-connected-notes/id1557175442).
2. Nhấn **Nhận** để tải xuống ứng dụng.
3. Mở Obsidian giống như cách bạn mở bất kỳ ứng dụng nào khác.
