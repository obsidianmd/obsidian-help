---
permalink: plugins/format-converter
publish: true
mobile: true
description: Format converter เป็นปลั๊กอินหลักที่ให้คุณแปลง Markdown จากแอปพลิเคชันอื่นเป็นรูปแบบ Obsidian
---
นำเข้า Markdown ทำหน้าที่ย้ายข้อมูล[[คุณสมบัติ#คุณสมบัติที่เลิกใช้แล้ว|รูปแบบคุณสมบัติที่เลิกใช้แล้ว]]เป็นรูปแบบปัจจุบันที่ Obsidian ใช้

> [!warning] สำรองข้อมูลห้องนิรภัยของคุณ
> การแปลงจะมีผลกับห้องนิรภัยทั้งหมดของคุณ [[สำรองข้อมูลไฟล์ Obsidian ของคุณ]]ก่อนที่คุณจะเริ่มต้น

ในการแปลงคุณสมบัติในโน้ตของคุณ:

1. เปิด[[กระดานคำสั่ง]]
2. เลือก **Format converter: Frontmatter migration**
3. เลือก **เริ่มแปลงข้อมูล**

## รูปแบบคุณสมบัติที่รองรับ

ตัวแปลงจะอัปเดตนามแฝง แท็ก และคลาส CSS จากรูปแบบที่เลิกใช้แล้ว:

**นามแฝง**

```yaml
# ก่อน

alias: My Note Title

# หลัง

aliases:
  - My Note Title
```

**แท็ก**

```yaml
# ก่อน

tag: project, important

# หลัง

tags:
  - project
  - important
```

**คลาส CSS**

```yaml
# ก่อน

cssclass: custom-style

# หลัง

cssclasses:
  - custom-style
```
