Obsidian doesn't provide a kanban board view.

If you want to jot down your tasks in Obsidian and interact with them on a Kanban board, there is a paid third party program, [imdone](https://imdone.io), that works well in conjunction with Obsidian.

You can [configure it](https://imdone.io/docs/#/editors?id=configuring-your-editor) to open the Markdown files from imdone in Obsidian.

When starting a new project in imdone, choose your Obsidian vault as folder.
You should place an `.imdoneignore` file in your vault's root directory with the following contents:

```
.obsidian
.trash
```

and perhaps also

```
_Attachments
```

in case you have an attachments folder. It is also wise to exlude big files to improve performance.
Example: `Javascript` note in the folder `Programming`:

```
Programming/Javascript
```

For adding tasks, you can use both of these syntaxes, although the first one seems preferable (see edit mode).

#TODO:0 # 9 am
- [ ] check emails
- [ ] make coffee

[# 10 am](#TODO:1)
- [ ] call Bob
- [ ] buy theater tickets

If you wish to hide the tasks in your notes so that you see them only in edit mode, you can use Obsidian's [[Format your notes#Comments|comment feature]] *(only visible in edit mode)*.

%%
#TODO:2 # 11 am
- [ ] write the report
- [ ] call HR to make an appointment

%%

The lower the number after `#TODO`, the higher it will appear in the list. The lowest number is `0` and you can also use numbers like this: `0.01`.

When you move around the cards in imdone, they get automatically updated in Obsidian. If you edit them in Obsidian, the changes are automatically reflected in imdone.