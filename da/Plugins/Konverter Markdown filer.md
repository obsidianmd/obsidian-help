Du kan konvertere filer fra andre variationer af Markdown formatet til Obsidians Markdown format.

> [!Advarsel]
> Dette plugin konverterer alle dine noter i boksen baseret på dine indstillinger, så tag for sikkerhed skyld en backup før du anvender denne konvertering.

Sådan konverterer du alle noter i din boks:

1. Klik på **Konverter Markdown filer** (Ikonet med nul- og ettaller)
2. Aktiver det format du som duønsker at konvertere fra
3. Klik på **Start konvertering**

## Supported formats

| Application   | From                  | To                                                              |
|---------------|-----------------------|-----------------------------------------------------------------|
| Roam Research | `#tag` and `#[[tag]]` | `[[tag]]`                                                       |
| Roam Research | `^^fremhævning^^`       | `==fremhævning==`                                                 |
| Roam Research | `{{[[TODO]]}}`        | `[ ]`                                                           |
| Bear          | `::fremhævning::`       | `==fremhævning==`                                                 |
| Zettelkasten  | `[[UID]]`             | `[[UID Fil Navn]` (fuld link)                                 |
| Zettelkasten  | `[[UID]]`             | <code>\[\[UID Fil Navn&#124;Fil Navn\]\]</code> (pænt link) |

Du kan læse mere information om, at [[Formater dine noter|formatere dine noter her]].


