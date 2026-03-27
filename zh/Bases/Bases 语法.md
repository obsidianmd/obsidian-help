---
permalink: bases/syntax
publish: true
mobile: true
description: 本页面介绍了 Obsidian 中数据库的语法。
aliases:
  - Bases/Bases syntax
  - Bases syntax
---
当你在 Obsidian 中[[创建 Base|创建数据库]]时，它会保存为 `.base` 文件。数据库通常通过应用界面进行编辑，但其语法也可以手动编辑，并嵌入到代码块中。

[[Bases 简介|数据库]]语法定义了[[视图]]、筛选和[[公式]]。数据库必须是符合以下定义的模式的有效 YAML。

## 示例

以下是一个数据库文件的示例。我们将逐一详细介绍每个部分。

```yaml
filters:
  or:
    - file.hasTag("tag")
    - and:
        - file.hasTag("book")
        - file.hasLink("Textbook")
    - not:
        - file.hasTag("book")
        - file.inFolder("Required Reading")
formulas:
  formatted_price: 'if(price, price.toFixed(2) + " dollars")'
  ppu: "(price / age).toFixed(2)"
properties:
  status:
    displayName: Status
  formula.formatted_price:
    displayName: "Price"
  file.ext:
    displayName: Extension
summaries:
  customAverage: 'values.mean().round(3)'
views:
  - type: table
    name: "My table"
    limit: 10
    groupBy:
      property: note.age
      direction: DESC
    filters:
      and:
        - 'status != "done"'
        - or:
            - "formula.ppu > 5"
            - "price > 2.1"
    order:
      - file.name
      - file.ext
      - note.age
      - formula.ppu
      - formula.formatted_price
    summaries:
      formula.ppu: Average
```

### 筛选

默认情况下，数据库包含仓库中的所有文件。不像 SQL 或 Dataview 那样有 `from` 或 `source`。`filters` 部分允许你定义条件来缩小数据集。

```yaml
# 简单筛选：
filters:
  and:
    - file.hasTag("tag")

# 复杂筛选：
filters:
  or:
    - file.hasTag("tag")
    - and:
        - file.hasTag("book")
        - file.hasLink("Textbook")
    - not:
        - file.hasTag("book")
        - file.inFolder("Required Reading")
```

有两种应用筛选的方式：

1. 在全局 `filters` 层级（如上所示），应用于数据库中的所有视图。
2. 在 `view` 层级，仅应用于特定视图。

这两个部分在功能上是等价的，在对视图进行求值时，它们会通过 `AND` 连接。

`filters` 部分包含一个字符串形式的单个筛选语句，或一个递归定义的筛选对象。筛选对象可以包含 `and`、`or` 或 `not` 中的一个。这些键是其他筛选对象或字符串形式的筛选语句的混合列表。筛选语句是一行在应用到笔记时计算为真或假的表达式。它可以是以下之一：

- 使用标准算术运算符的基本比较。
- 函数。内置了多种[[函数]]，插件也可以添加额外的函数。

筛选和公式的语法及可用函数是相同的。

### 公式

`formulas` 部分定义了[[公式|公式属性]]，可以在数据库文件的所有视图中显示。

```yaml
formulas:
  formatted_price: 'if(price, price.toFixed(2) + " dollars")'
  ppu: "(price / age).toFixed(2)"
```

公式属性支持基本算术运算符和多种内置[[函数]]。未来，插件将能够添加可在公式中使用的函数。

你可以根据属性类型以不同方式引用属性：

- **笔记属性**是在笔记前置元数据中定义的属性。例如 `note.price` 或 `note["price"]`。
  如果没有指定前缀，则默认为 `note` 属性。
- **文件属性**描述文件本身。
  例如 `file.size` 或 `file.ext`。你也可以直接引用文件对象，如 `file.hasLink()`。
- **公式属性**是数据库中的其他公式。
  例如 `formula.formatted_price`。

公式可以使用其他公式属性的值，只要不存在循环引用。

公式属性在 YAML 中始终以字符串形式存储，但其实际**输出数据类型**由底层数据的类型和所使用函数的返回值决定。

请注意，要在 YAML 字段中包含文本字面量，需要使用嵌套引号。文本字面量必须用单引号或双引号括起来。

### 属性

`properties` 部分允许存储每个属性的配置信息。如何使用这些配置值取决于各个视图。例如，在表格中，显示名称用作列标题。

```yaml
properties:
  status:
    displayName: Status
  formula.formatted_price:
    displayName: "Price"
  file.ext:
    displayName: Extension
```

显示名称不会在筛选或公式中使用。

### 汇总

`summaries` 部分可用于定义自定义汇总公式。除了在此定义汇总公式外，还有几个默认的汇总公式可用。

```yaml
summaries:
  customAverage: 'values.mean().round(3)'
```

在这个示例中，`customAverage` 公式与默认的 `Average` 相同，只是值被四舍五入到不同的小数位数。在汇总公式中，`values` 关键字是一个列表，包含结果集中所有笔记的该属性的所有值。汇总公式应返回单个 `Value`。

请注意，这个 `summaries` 部分与视图配置中的 `summaries` 部分（下文介绍）不同，后者将汇总公式分配给特定属性。

#### 默认汇总公式

| 名称      | 输入类型 | 描述                                                   |
| --------- | ---------- | ------------------------------------------------------------- |
| Average   | 数字     | 输入值中所有数字的算术平均值。   |
| Min       | 数字     | 输入值中的最小数字。                    |
| Max       | 数字     | 输入值中的最大数字。                     |
| Sum       | 数字     | 输入值中所有数字的总和。                          |
| Range     | 数字     | `Max` 和 `Min` 之间的差值。                       |
| Median    | 数字     | 输入值中所有数字的中位数。 |
| Stddev    | 数字     | 输入值中所有数字的标准差。  |
| Earliest  | 日期       | 输入值中最早的日期。                      |
| Latest    | 日期       | 输入值中最晚的日期。                        |
| Range     | 日期       | `Latest` 和 `Earliest` 之间的差值。               |
| Checked   | 布尔值    | `true` 值的数量。                                  |
| Unchecked | 布尔值    | `false` 值的数量。                                 |
| Empty     | 任意        | 输入值中为空的数量。             |
| Filled    | 任意        | 输入值中不为空的数量。         |
| Unique    | 任意        | 输入值中唯一值的数量。                     |

### 视图

`views` 部分定义了数据的呈现方式。`views` 列表中的每个条目定义了同一数据的一个独立视图，可以根据需要创建任意多个不同的视图。

```yaml
views:
  - type: table
    name: "My table"
    limit: 10
    groupBy:
      property: note.age
      direction: DESC
    filters:
      and:
        - 'status != "done"'
        - or:
            - "formula.ppu > 5"
            - "price > 2.1"
    order:
      - file.name
      - file.ext
      - note.age
      - formula.ppu
      - formula.formatted_price
    summaries:
      formula.ppu: Average
```

- `type` 从内置和插件添加的视图类型中选择。
- `name` 是显示名称，可用于定义默认视图。
- `filters` 与上述完全相同，但仅适用于该视图。
- `groupBy` 指定一个属性和排序方向。每行指定属性的值用于将行分组。
- `summaries` 将属性名称映射到命名的汇总。汇总对所有行中的属性执行聚合操作。

[[视图]]可以添加额外的数据来存储维护状态或正确渲染所需的任何信息，但插件作者应注意不要使用核心数据库插件已经使用的键。例如，表格视图可以用它来限制行数或选择用于排序的列及排序方向。不同的视图类型（如地图）可以用它来映射笔记中哪个属性对应经纬度，以及哪个属性应作为标记标题显示。

未来，API 将允许视图读写这些值，使视图能够构建自己的配置界面。

## 属性

数据库中使用三种属性：

1. **笔记属性**，存储在 Markdown 文件的前置元数据中。
2. **文件属性**，适用于所有文件类型。
3. **公式属性**，在 `.base` 文件本身中定义（见上文）。

### 笔记属性

[[属性|笔记属性]]仅适用于 Markdown 文件，存储在每篇笔记的 YAML 前置元数据中。这些属性可以使用 `note.author` 格式访问，也可以简写为 `author`。

### 文件属性

文件属性指当前正在测试或求值的文件。文件属性适用于所有[[支持的文件格式|文件类型]]，包括附件。

例如，筛选条件 `file.ext == "md"` 对所有 Markdown 文件为真，其他文件为假。

| 属性      | 类型   | 描述                                                   |
| ------------- | ------ | ------------------------------------------------------------- |
| `file.backlinks`  | 列表   | 反向链接文件列表。注意：此属性对性能影响较大。如果可能，请反转查找方向并使用 `file.links`。当仓库发生更改时不会自动刷新结果。 |
| `file.ctime`  | 日期   | 创建时间                                                  |
| `file.embeds` | 列表   | 笔记中所有嵌入的列表                                |
| `file.ext`    | 字符串 | 文件扩展名                                                |
| `file.file`   | 文件   | 文件对象，仅可在特定函数中使用                |
| `file.folder` | 字符串 | 文件所在文件夹的路径                                       |
| `file.links`  | 列表   | 笔记中所有内部链接的列表，包括前置元数据 |
| `file.mtime`  | 日期   | 修改时间                                                 |
| `file.name`   | 字符串 | 文件名称                                                     |
| `file.path`   | 字符串 | 文件路径                                              |
| `file.properties`   | 对象 | 文件上的所有属性。注意：当仓库发生更改时不会自动刷新结果。 |
| `file.size`   | 数字 | 文件大小                                                     |
| `file.tags`   | 列表   | 文件内容和前置元数据中所有标签的列表          |

### 使用 `this` 访问属性

使用 `this` 对象来访问文件属性。`this` 所指向的内容取决于数据库显示的位置。

当数据库在主内容区域中打开时，`this` 指向数据库文件本身的属性。例如，使用 `this.file.folder` 返回数据库所在的文件夹路径。

当数据库嵌入到另一个文件中时，`this` 指向_嵌入文件_（包含数据库的笔记或白板）的属性。例如，使用 `this.file.name` 返回嵌入文件的名称，而不是数据库的名称。

当数据库在侧边栏中时，`this` 指向主内容区域中的活动文件。这使你可以基于活动文件创建查询。例如，你可以使用 `file.hasLink(this.file)` 来复现反向链接面板的功能。

## 运算符

### 算术运算符

算术运算符对数字执行算术运算。例如，`radius * (2 * 3.14)`。

| 运算符 | 描述 |
| -------- | ----------- |
| `+`      | 加        |
| `-`      | 减       |
| `*`      | 乘    |
| `/`      | 除      |
| `%`      | 取模      |
| `( )`    | 括号 |

### 日期运算

可以通过加减持续时间来修改日期。持续时间单位接受多种格式：

| 单位                     | 持续时间 |
| ------------------------ | -------- |
| `y`、`year`、`years`     | 年     |
| `M`、`month`、`months`   | 月    |
| `d`、`day`、`days`       | 日      |
| `w`、`week`、`weeks`     | 周     |
| `h`、`hour`、`hours`     | 小时     |
| `m`、`minute`、`minutes` | 分钟   |
| `s`、`second`、`seconds` | 秒   |

要修改或偏移日期对象，使用 `+` 或 `-` 运算符配合持续时间字符串。例如，`date + "1M"` 为日期加 1 个月，而 `date - "2h"` 为日期减 2 小时。

全局[[函数]] `today()` 可用于获取当前日期，`now()` 可用于获取包含时间的当前日期。

- `now() + "1 day"` 返回从执行时刻起正好 24 小时后的日期时间。
- `file.mtime > now() - "1 week"` 如果文件在最近一周内被修改则返回 `true`。
- `date("2024-12-01") + "1M" + "4h" + "3m"` 返回表示 `2025-01-01 04:03:00` 的日期对象。
- 两个日期相减可得到两者之间的毫秒差，例如 `now() - file.ctime`。
- 要获取包含时间的日期中的日期部分，使用 `datetime.date()`。
- 要格式化日期对象，使用 `format()` 函数，例如 `datetime.format("YYYY-MM-DD")`。

### 比较运算符

比较运算符可用于比较数字或日期对象。等于和不等于可以用于任何类型的值，不仅限于数字和日期。

| 运算符 | 描述              |
| -------- | ------------------------ |
| `==`     | 等于                   |
| `!=`     | 不等于                |
| `>`      | 大于             |
| `<`      | 小于                |
| `>=`     | 大于或等于 |
| `<=`     | 小于或等于    |

### 布尔运算符

布尔运算符可用于组合或反转逻辑值，结果为真或假。

| 运算符 | 描述 |
| -------- | ----------- |
| `!`      | 逻辑非 |
| `&&`     | 逻辑与 |
| \|\|     | 逻辑或  |

## 函数

请参阅可在公式和[[视图|筛选]]中使用的[[函数|函数列表]]。

## 类型

数据库有一套类型系统，公式和筛选通过它将函数应用到属性上。

### 字符串、数字和布尔值

字符串、数字和布尔值是"原始"值，不需要函数来创建。

- 字符串用单引号或双引号括起来，例如 `"message"`。
- 数字写成数字形式，可以选择用括号括起来以提高清晰度。例如 `1` 或 `(2.5)`。
- 布尔值写作不带引号的 `true` 或 `false`。

### 日期和持续时间

日期表示特定的日期，或包含时间的日期，取决于创建它们的函数或分配给[[属性]]的类型。

- 要构造日期，使用 `date` 函数，例如 `date("2025-01-01 12:00:00")`
- 要修改日期，加上或减去持续时间，例如 `now() + "1 hour"` 或 `today() + "7d"`
- 使用比较运算符（如 `>` 或 `<`）和算术运算符比较日期（例如，`(now() + "1d") - now()` 返回 `86400000` 毫秒。）
- 要提取日期的部分内容，使用可用字段（`now().hour`），或便捷函数（`now.time()`）。
- 日期对象上还有许多其他[[函数|字段和函数]]可用。

### 对象和列表

- 使用 `list()` 函数将单个元素转换为列表。这对于可能包含列表和单个值混合的属性特别有用。
- 使用方括号和从 0 开始的索引访问列表元素。例如，`property[0]` 返回列表中的第一个元素。
- 使用方括号和元素名称或点号表示法访问对象元素。例如，`property.subprop` 或 `property["subprop"]`。

### 文件和链接

[[链接笔记|Wiki 链接]]在[[属性|前置元数据属性]]中会被自动识别为链接对象。链接在[[视图]]中会渲染为可点击的链接。

- 要构造链接，使用全局 `link` [[函数]]，例如 `link("filename")` 或 `link("https://obsidian.md")`。
- 你可以从任何字符串创建链接，例如 `link(file.ctime.date().toString())`。
- 要设置显示文本，传入可选的字符串或图标作为第二个参数，例如 `link("filename", "display")` 或 `link("filename", icon("plus"))`。

文件对象可以使用 `file.asLink()` 转换为链接，可选传入显示文本。

链接可以用 `==` 和 `!=` 进行比较。只要它们指向同一个文件就视为相等；如果文件在查找时不存在，则链接文本必须完全相同。

链接可以与 `file` 或 `this` 等文件进行比较。如果链接解析到该文件则相等。例如，`author == this`。

链接也可以在列表包含检查中使用，例如 `authors.contains(this)`。
