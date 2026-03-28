---
permalink: import/apple-journal
---
Obsidian ช่วยให้คุณย้ายรายการบันทึกจาก Apple Journal ได้อย่างง่ายดายโดยใช้[[ตัวนำเข้า|ปลั๊กอิน Importer]]
ซึ่งจะแปลงบันทึกของคุณเป็นไฟล์ Markdown ที่ทนทาน ที่คุณสามารถใช้กับ Obsidian และแอปอื่นๆ ได้มากมาย

## ส่งออกข้อมูลของคุณจาก Apple Journal

### บน iPhone
ทำตามคำแนะนำสำหรับ [พิมพ์และส่งออกรายการใน Journal บน iPhone](https://support.apple.com/guide/iphone/print-and-export-entries-iph4cad323fe/ios#iph1edf66806):

1. ไปที่แอป Journal บน iPhone ของคุณ
2. เลือกบันทึกหรือแตะรายการทั้งหมด
3. แตะปุ่มเพิ่มเติมที่ด้านบนของหน้าจอ
4. แตะส่งออก จากนั้นเลือกส่งออก
5. เลือกตำแหน่ง จากนั้นแตะปุ่มเลือกแล้ว

### บน Mac (Tahoe)
ทำตามคำแนะนำสำหรับ [พิมพ์และส่งออกรายการใน Journal บน Mac](https://support.apple.com/guide/journal/print-and-export-entries-dev883fc2329/mac#devc24a8f09a):

1. ไปที่แอป Journal บน Mac ของคุณ
2. ไปที่ File > Export จากนั้นเลือก Export

## นำเข้าข้อมูล Apple Journal เข้าสู่ Obsidian

คุณจะต้องใช้ปลั๊กอิน [[ตัวนำเข้า]] อย่างเป็นทางการของ Obsidian ซึ่งคุณสามารถ[ติดตั้งได้ที่นี่](obsidian://show-plugin?id=obsidian-importer)

1. เปิด **[[การตั้งค่า]]**
2. ไปที่ **ปลั๊กอินโดยชุมชน** และ[ติดตั้ง Importer](obsidian://show-plugin?id=obsidian-importer)
3. เปิดใช้งานปลั๊กอิน Importer
4. เปิดปลั๊กอิน **Importer** โดยใช้กระดานคำสั่งหรือไอคอนริบบอน
5. ภายใต้ **รูปแบบไฟล์** เลือก **Apple Journal (HTML Export)**
6. ใน **ไฟล์ที่จะนำเข้า** เลือกโฟลเดอร์ที่มีข้อมูลที่ส่งออก ซึ่งปกติคือ _AppleJournalEntries_ หรือไฟล์แต่ละไฟล์จาก _Entries_
7. ตรวจสอบและแก้ไขตัวเลือกการนำเข้าอื่นๆ
8. เลือกนำเข้าและรอจนกว่าการนำเข้าจะเสร็จสมบูรณ์
9. เสร็จเรียบร้อย!


## เนื้อหาที่รองรับ

ปลั๊กอินสามารถนำเข้าเมทาดาทาของ Journal เป็นเมทาดาทาตอนต้น เช่น _state-of-mind_, _contacts_, _location_ และ _workout-route_

> [!note] หมายเหตุ
> ปลั๊กอินไม่นำเข้าทรัพยากร ไฟล์แนบเช่นรูปภาพ วิดีโอ และการบันทึกเสียงจะถูกข้ามไป
