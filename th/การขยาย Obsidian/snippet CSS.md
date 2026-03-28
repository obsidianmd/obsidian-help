---
permalink: snippets
publish: true
mobile: true
description: เรียนรู้วิธีเปลี่ยนส่วนต่าง ๆ ของรูปลักษณ์แอป Obsidian โดยไม่ต้องสร้างธีมเต็มรูปแบบ
---
เรียนรู้วิธีปรับเปลี่ยนลักษณะต่างๆ ของแอป Obsidian โดยไม่จำเป็นต้อง[สร้างธีม](https://docs.obsidian.md/Themes/App+themes/Build+a+theme)

> [!tip] หากคุณกำลังมองหาคำแนะนำเกี่ยวกับการจัดการ CSS สำหรับ [[แนะนำ Obsidian Publish|Obsidian Publish]] โปรดอ่าน [[ปรับแต่งเว็บไซต์ของคุณ]]

CSS เป็นภาษาที่ควบคุมลักษณะการแสดงผลของ HTML การเพิ่ม snippet CSS ช่วยให้คุณเปลี่ยนแปลงส่วนต่างๆ ของอินเทอร์เฟซผู้ใช้ Obsidian ได้ เช่น ขนาดและสีของหัวเรื่อง Obsidian มี[ตัวแปร CSS](https://docs.obsidian.md/Reference/CSS+variables/CSS+variables) ที่ช่วยให้คุณปรับแต่งอินเทอร์เฟซได้อย่างง่ายดาย

Obsidian ค้นหา snippet CSS ภายใน[[โฟลเดอร์การตั้งค่า]]ของห้องนิรภัย

## การเพิ่ม snippet

หากต้องการเพิ่ม snippet CSS บน**เดสก์ท็อป** ![[lucide-monitor-check.svg#icon]] ให้ทำตามขั้นตอนเหล่านี้:

1. เปิด **[[การตั้งค่า]]** ![[lucide-settings.svg#icon]]
2. ภายใต้ **ลักษณะ → snippet CSS** เลือก **เปิดโฟลเดอร์ snippets** ![[lucide-folder-open.svg#icon]]
3. ในโฟลเดอร์ snippets ให้สร้างไฟล์ CSS ที่มี snippet ของคุณ
4. ใน Obsidian ภายใต้ **ลักษณะ → snippet CSS** เลือก **รีโหลด snippets** ![[lucide-refresh-cw.svg#icon]] เพื่อดู snippet ในรายการ
5. เปิดใช้งาน snippet โดยคลิกที่ปุ่มสลับ

หากต้องการเพิ่ม snippet CSS บน**มือถือ/แท็บเล็ต** ![[obsidian-icon-smartphone.svg#icon]] คุณสามารถทำตามขั้นตอนเหล่านี้:

1. เปิดตัวจัดการไฟล์แล้วค้นหาห้องนิรภัยของคุณ คุณสามารถตรวจสอบตำแหน่งของห้องนิรภัยได้ใน _จัดการห้องนิรภัย…_ โดยแตะที่ห้องนิรภัยของคุณแล้วดูเส้นทาง
2. เปิด[[โฟลเดอร์การตั้งค่า]]แล้วสร้างโฟลเดอร์ชื่อ `snippets` หากยังไม่มี
3. เพิ่ม snippet CSS ของคุณลงในโฟลเดอร์นี้
4. เปิด **[[การตั้งค่า]]** ของ Obsidian ![[lucide-settings.svg#icon]]
5. เลือก **ลักษณะ** ทางด้านซ้าย
6. เลื่อนลงไปที่ส่วน **snippet CSS**
7. แตะ **รีโหลด snippets** ![[lucide-refresh-cw.svg#icon]] เพื่อรีเฟรชรายการ
8. แตะปุ่มสลับเพื่อเปิดใช้งาน snippet

อีกวิธีหนึ่ง คุณสามารถ
- [[ซิงค์โน้ตของคุณข้ามอุปกรณ์|ซิงค์]]การเปลี่ยนแปลงใดๆ ด้วยบริการซิงค์ของคุณ
- ใช้ปลั๊กอินชุมชนเพื่อสร้าง snippet จากภายใน Obsidian

เมื่อเปิดใช้งานแล้ว Obsidian จะตรวจจับการเปลี่ยนแปลงของ snippet CSS โดยอัตโนมัติและนำไปใช้เมื่อคุณเซฟไฟล์

> [!tip] คุณไม่จำเป็นต้องรีสตาร์ท Obsidian เพื่อให้การเปลี่ยนแปลงมีผล อย่างไรก็ตาม คุณอาจต้องใช้คำสั่งจาก[[กระดานคำสั่ง]]เพื่อโหลด Obsidian ใหม่โดยไม่บันทึก เพื่อดูการเปลี่ยนแปลงในธีมหรือโน้ตปัจจุบัน

## การเขียน CSS สำหรับ Obsidian

Obsidian มีหลายวิธีที่ทำให้การเขียน CSS ง่ายขึ้นและทรงพลังยิ่งขึ้น

มี[ตัวแปร CSS](https://docs.obsidian.md/Reference/CSS+variables/CSS+variables) จำนวนมากสำหรับแก้ไขส่วนต่างๆ ของ Obsidian ได้อย่างง่ายดาย และมี[[คุณสมบัติ#ประเภทคุณสมบัติ|ประเภทคุณสมบัติ]]ในตัวเพื่อเปลี่ยนลักษณะของโน้ตหนึ่งหรือหลายโน้ต

> [!example] ตัวแปร
> สร้างไฟล์ชื่อ `headers.css` ด้วยเนื้อหาต่อไปนี้เพื่อเปลี่ยนสีของ[[ไวยากรณ์การจัดรูปแบบพื้นฐาน#หัวเรื่อง|หัวเรื่อง]]ทั้งหกระดับเป็นสีรุ้ง:
>
> ```css
> body {
>   --h1-color: red;
>   --h2-color: orange;
>   --h3-color: yellow;
>   --h4-color: green;
>   --h5-color: blue;
>   --h6-color: pink;
> }
> ```

> [!example] คลาส CSS
> กำหนดชื่อของคลาส CSS กำหนดเอง (หรือรายการคลาส CSS) ให้กับ[[คุณสมบัติ|คุณสมบัติ]]ที่กำหนดไว้ล่วงหน้า `cssclasses` เพื่อให้โน้ตหนึ่งหรือหลายโน้ตมีลักษณะแตกต่างจากโน้ตอื่นๆ
> 
> **CSS**:
> ```css
> .red-border img {
>    border-color: #ff0000;
>    border-style: solid;
> }
> ```
> 
> **YAML/คุณสมบัติ**:
> ```yaml
> cssclasses:
>  - red-border
> ```
> 
> ในทุกโน้ตที่มีค่า `red-border` ในคุณสมบัติ `cssclasses` รูปภาพจะแสดงพร้อมกรอบสีแดง

เพื่อให้แน่ใจว่าไฟล์ CSS ถูกต้องและจัดรูปแบบอย่างเหมาะสม เราแนะนำให้ตรวจสอบด้วยเครื่องมืออย่าง [CSS Validation Service](https://jigsaw.w3.org/css-validator/) เนื่องจาก CSS ที่ไม่ถูกต้องจะไม่ทำงาน

## ข้อมูลเพิ่มเติม

- หากคุณเพิ่งเริ่มต้นกับ CSS ลองดู [Learn to style HTML using CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS) โดย Mozilla
- สำหรับข้อมูลเพิ่มเติมเกี่ยวกับการจัดสไตล์ Obsidian ดู:
  - [About styling](https://docs.obsidian.md/Reference/CSS+variables/About+styling)
  - [Build a theme](https://docs.obsidian.md/Themes/App+themes/Build+a+theme)
  - [Build a Publish theme](https://docs.obsidian.md/Themes/Obsidian+Publish+themes/Build+a+Publish+theme)
  - [Obsidian CSS Inspector workflow](https://forum.obsidian.md/t/obsidian-css-inspector-workflow/58178)
