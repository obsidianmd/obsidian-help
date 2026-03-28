---
permalink: publish/headless
cssclasses:
  - reference
description: Obsidian Publish มีไคลเอนต์แบบ headless สำหรับเผยแพร่ vault โดยไม่ต้องใช้แอปเดสก์ท็อป เหมาะสำหรับ CI pipeline และเวิร์กโฟลว์อัตโนมัติ
---
[[แนะนำ Obsidian Publish|Obsidian Publish]] มีไคลเอนต์แบบ headless สำหรับเผยแพร่ห้องนิรภัยโดยไม่ต้องใช้แอปเดสก์ท็อป เหมาะสำหรับ CI pipeline และเวิร์กโฟลว์อัตโนมัติ เผยแพร่การเปลี่ยนแปลงล่าสุดตามกำหนดเวลาหรือเป็นส่วนหนึ่งของ build pipeline

ติดตั้ง [[Obsidian Headless]] **(open beta)** เพื่อโต้ตอบกับ [[แนะนำ Obsidian Publish|Obsidian Publish]] จากบรรทัดคำสั่งโดยไม่ต้องใช้แอปเดสก์ท็อป Obsidian

## เริ่มอย่างรวดเร็ว

ติดตั้ง [[Obsidian Headless|Obsidian Headless]] **(open beta)**:

```shell
npm install -g obsidian-headless
```

คุณต้องมี [[แนะนำ Obsidian Publish|การสมัครสมาชิก Obsidian Publish]] ที่ใช้งานอยู่

```shell
# เข้าสู่ระบบ
ob login

# แสดงรายการเว็บไซต์ Publish ของคุณ
ob publish-list-sites

# เชื่อมต่อห้องนิรภัยในเครื่องกับเว็บไซต์ Publish
cd ~/vaults/my-vault
ob publish-setup --site "my-site"

# พรีวิวการเปลี่ยนแปลงโดยไม่เผยแพร่
ob publish --dry-run

# เผยแพร่การเปลี่ยนแปลง
ob publish
```

## คำสั่ง

### `ob publish-list-sites`

แสดงรายการเว็บไซต์ Publish ทั้งหมดที่สามารถเข้าถึงได้จากบัญชีของคุณ

### `ob publish-create-site`

สร้างเว็บไซต์ Publish ใหม่

```
ob publish-create-site --slug <slug>
```

| ตัวเลือก | คำอธิบาย |
| --- | --- |
| `--slug` | ตัวระบุ URL สำหรับเว็บไซต์ของคุณ (เช่น `my-notes` จะสร้าง `publish.obsidian.md/my-notes`) |

### `ob publish-setup`

เชื่อมต่อห้องนิรภัยในเครื่องกับเว็บไซต์ Publish

```
ob publish-setup [--site <id-or-slug>] [--path <local-path>]
```

| ตัวเลือก | คำอธิบาย |
| --- | --- |
| `--site` | Site ID หรือ slug |
| `--path` | เส้นทางห้องนิรภัยในเครื่อง (ค่าเริ่มต้น: ไดเรกทอรีปัจจุบัน) |

### `ob publish`

เผยแพร่การเปลี่ยนแปลงห้องนิรภัยไปยังเว็บไซต์ของคุณ ตามค่าเริ่มต้น จะรวมเฉพาะไฟล์ที่มี `publish: true` ในเมทาดาทาตอนต้นเท่านั้น

```
ob publish [--path <local-path>] [--all] [--dry-run] [--yes]
```

| ตัวเลือก | คำอธิบาย |
| --- | --- |
| `--path` | เส้นทางห้องนิรภัยในเครื่อง (ค่าเริ่มต้น: ไดเรกทอรีปัจจุบัน) |
| `--all` | รวมไฟล์ทั้งหมด ไม่ใช่เฉพาะไฟล์ที่มีแฟล็กเผยแพร่ |
| `--dry-run` | แสดงการเปลี่ยนแปลงโดยไม่เผยแพร่ |
| `--yes` | เผยแพร่โดยไม่ต้องขอการยืนยัน |

### `ob publish-config`

ดูหรือเปลี่ยนแปลงการตั้งค่าโฟลเดอร์ที่รวม/ไม่รวมสำหรับห้องนิรภัย เรียกใช้โดยไม่มีตัวเลือกเพื่อแสดงการตั้งค่าปัจจุบัน

```
ob publish-config [--path <local-path>] [options]
```

| ตัวเลือก | คำอธิบาย |
| --- | --- |
| `--path` | เส้นทางห้องนิรภัยในเครื่อง (ค่าเริ่มต้น: ไดเรกทอรีปัจจุบัน) |
| `--includes` | โฟลเดอร์ที่ต้องการรวม คั่นด้วยจุลภาค (สตริงว่างเพื่อล้าง) |
| `--excludes` | โฟลเดอร์ที่ต้องการไม่รวม คั่นด้วยจุลภาค (สตริงว่างเพื่อล้าง) |

### `ob publish-site-options`

ดูหรืออัปเดตการตั้งค่าการแสดงผลและการนำทางทั้งเว็บไซต์ เรียกใช้โดยไม่มีตัวเลือกเพื่อแสดงการตั้งค่าปัจจุบัน

```
ob publish-site-options [--path <local-path>] [options]
```

| ตัวเลือก | คำอธิบาย |
| --- | --- |
| `--path` | เส้นทางห้องนิรภัยในเครื่อง (ค่าเริ่มต้น: ไดเรกทอรีปัจจุบัน) |
| `--site-name` | ชื่อเว็บไซต์ |
| `--index-file` | เส้นทางไฟล์หน้าแรก |
| `--logo` | เส้นทางไฟล์โลโก้ (สตริงว่างเพื่อล้าง) |
| `--show-navigation` | แสดงเมนูนำทางแถบด้านข้าง |
| `--show-graph` | แสดงมุมมองกราฟ |
| `--show-outline` | แสดงสารบัญเนื้อหา |
| `--show-search` | แสดงการค้นหา |
| `--show-backlinks` | แสดงแบ็คลิงค์ |
| `--show-hover-preview` | แสดงพรีวิวเมื่อชี้ลิงค์ |
| `--show-theme-toggle` | แสดงปุ่มสลับธีม |
| `--default-theme` | ธีมค่าเริ่มต้น: `light` หรือ `dark` |
| `--readable-line-length` | ความยาวบรรทัดที่เหมาะกับการอ่าน |
| `--strict-line-breaks` | การตัดบรรทัดแบบเข้มงวด |
| `--hide-title` | ซ่อนชื่อเรื่องแบบอินไลน์ |
| `--sliding-window` | โหมดหน้าต่างเลื่อน |
| `--nav-order` | ลำดับการนำทาง เส้นทางคั่นด้วยจุลภาค (สตริงว่างเพื่อล้าง) |
| `--nav-hidden` | รายการนำทางที่ซ่อน เส้นทางคั่นด้วยจุลภาค (สตริงว่างเพื่อล้าง) |

### `ob publish-unlink`

หยุดการเชื่อมต่อห้องนิรภัยจากเว็บไซต์ Publish

```
ob publish-unlink [--path <local-path>]
```
