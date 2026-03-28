---
permalink: install
---
Obsidian สามารถใช้ได้บนแพลตฟอร์มเดสก์ท็อปและมือถือหลักทั้งหมด ต่อไปนี้คือวิธีการดาวน์โหลดและติดตั้ง Obsidian ที่รองรับทั้งหมด

## ติดตั้ง Obsidian บน Windows

1. เปิดเบราว์เซอร์ของคุณแล้วไปที่ [ดาวน์โหลด Obsidian](https://obsidian.md/download)
2. ใต้ **Windows** คลิก **Universal** เพื่อดาวน์โหลดไฟล์ติดตั้ง
3. เปิดไฟล์ติดตั้งแล้วทำตามคำแนะนำ
4. เปิด Obsidian เหมือนกับที่คุณเปิดแอปพลิเคชันอื่นๆ

## ติดตั้ง Obsidian บน macOS

1. เปิดเบราว์เซอร์ของคุณแล้วไปที่ [ดาวน์โหลด Obsidian](https://obsidian.md/download)
2. ใต้ **macOS** คลิก **Universal** เพื่อดาวน์โหลดไฟล์ติดตั้ง
3. เปิดไฟล์ติดตั้ง
4. ในหน้าต่างที่เปิดขึ้น ลาก Obsidian ไปยังโฟลเดอร์ Applications
5. เปิด Obsidian เหมือนกับที่คุณเปิดแอปพลิเคชันอื่นๆ

## ติดตั้ง Obsidian บน Linux

หากคุณใช้ Linux คุณสามารถติดตั้ง Obsidian ได้หลายวิธี ทำตามคำแนะนำสำหรับระบบจัดการแพ็กเกจที่คุณใช้งาน

### ติดตั้ง Obsidian โดยใช้ Snap

1. เปิดเบราว์เซอร์ของคุณแล้วไปที่ [ดาวน์โหลด Obsidian](https://obsidian.md/download)
2. ใต้ **Linux** คลิก **Snap** เพื่อดาวน์โหลดไฟล์ติดตั้ง
3. เปิดเทอร์มินัลแล้วนำทางไปยังโฟลเดอร์ที่คุณดาวน์โหลดไฟล์ติดตั้ง
4. ในเทอร์มินัล รันคำสั่งต่อไปนี้เพื่อติดตั้งแพ็กเกจ Snap: (แฟล็ก `--dangerous` จำเป็นต้องใช้เนื่องจาก Canonical บริษัทที่สร้าง Snap ไม่ได้ตรวจสอบแพ็กเกจของเรา แฟล็ก `--classic` อนุญาตให้ Obsidian เข้าถึงนอก sandbox ซึ่งเป็นที่จัดเก็บโน้ตของคุณ)

   ```bash
   snap install obsidian_<version>_<arch>.snap --dangerous --classic
   ```

5. เปิด Obsidian เหมือนกับที่คุณเปิดแอปพลิเคชันอื่นๆ

### ติดตั้ง Obsidian โดยใช้ AppImage

1. เปิดเบราว์เซอร์ของคุณแล้วไปที่ [ดาวน์โหลด Obsidian](https://obsidian.md/download)
2. ใต้ **Linux** คลิก **AppImage** เพื่อดาวน์โหลดไฟล์ติดตั้ง
3. เปิดเทอร์มินัลแล้วนำทางไปยังโฟลเดอร์ที่คุณดาวน์โหลดไฟล์ติดตั้ง
4. ในเทอร์มินัล รันคำสั่งต่อไปนี้เพื่อเปิด Obsidian:

   ```bash
   chmod u+x Obsidian-<version>.AppImage
   ./Obsidian-<version>.AppImage --no-sandbox
   ```
หมายเหตุ: บน Chromebook จำเป็นต้องติดตั้งแพ็กเกจ `libnss3-dev` มิฉะนั้นคุณอาจได้รับข้อผิดพลาด `error while loading shared libraries: libnss3.so: cannot open shared object file: No such file or directory`

### ติดตั้ง Obsidian โดยใช้ Flatpak

1. ในเทอร์มินัลของคุณ รันคำสั่งต่อไปนี้เพื่อติดตั้ง Obsidian:

   ```bash
   flatpak install flathub md.obsidian.Obsidian
   ```

2. เปิด Obsidian โดยรันคำสั่งต่อไปนี้:

   ```bash
   flatpak run md.obsidian.Obsidian
   ```

## ติดตั้ง Obsidian บน Android

1. ค้นหา Obsidian บน [Play Store](https://play.google.com/store/apps/details?id=md.obsidian)
2. แตะ **ติดตั้ง** เพื่อดาวน์โหลดแอป
3. เปิด Obsidian เหมือนกับที่คุณเปิดแอปอื่นๆ

คุณสามารถดาวน์โหลด APK สำหรับ Android ได้จากหน้า [ดาวน์โหลด Obsidian](https://obsidian.md/download) เช่นกัน

## ติดตั้ง Obsidian บน iPhone และ iPad

1. ค้นหา Obsidian บน [App Store](https://apps.apple.com/us/app/obsidian-connected-notes/id1557175442)
2. แตะ **รับ** เพื่อดาวน์โหลดแอป
3. เปิด Obsidian เหมือนกับที่คุณเปิดแอปอื่นๆ
