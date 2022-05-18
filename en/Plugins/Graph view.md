The Graph view lets you visualize the relationships between the notes in your vault.

To open the Graph view, click **Open graph view** in the [[ribbon]].

- Circles represent notes, or _nodes_. 
- Lines represents [[Internal link|internal links]] between two nodes.

The more nodes that reference a given node, the bigger it gets.

To interact with notes in the graph:

- Hover over each circle to highlight that note's connections.
- Click a note in the graph to open that note.
- Right-click a note to open a context menu with the actions available for that note.

To navigate around the graph:

- Zoom in and out using the scroll wheel on your mouse, or using the `+` and `-` keys.
- Move the graph around by dragging it with your mouse cursor, or using the arrow keys.

You can hold Shift while using the keyboard to speed up the movements.

## Settings

To open the graph settings, click the cog icon in the top-left corner of the graph view.

Click **Restore default settings** in the top-right corner of the settings box to reset any changes you make.

### Filters

This section controls what nodes to show in the graph.

- **Search files** lets you filter notes based on a search query. To learn about how you can write more advanced search queries, refer to [[Search]].
- **Tags** toggles whether to show tags in the graph.
- **Attachments** toggles whether to show attachments in the graph.
- **Existing files only** toggles whether to show notes that exists in your vault. Since a note doesn't need to exist to link to it, this can help reduce limit your graph to notes that you actually have in your vault.
- **Orphans** toggles whether to show notes without any links.

### Groups

Create groups of notes to distinguish them from each other using color. 

To create a new group:

1. Click **New group**.
2. In the search box, type a search query for the notes you want to add to the group.
3. Click the colored circle to give the group a color.

To learn about how you can write more advanced search queries, refer to [[Search]].

### Display

This section controls how to visualize nodes and links in the graph.

- **Arrows** toggles whether to show the direction of each link.
- **Text fade threshold** controls the text transparency for the name of each note.
- **Node size** controls the size of the circle representing each note.
- **Link thickness** controls the line width for each link.
- **Animate** starts a [[#Start a timelapse animation|timelapse animation]].

### Forces

This section controls the forces that act on each node in the graph.

- **Center force** controls how compact the graph is. A higher value creates a more circular graph.
- **Repel force** controls how much a node pushes other nodes away from it.
- **Link force** controls the pull on each link. If the link was a rubber band, the link force controls how tight or loose the band is.
- **Link distance** controls the length of the lines between each note.

## Start a timelapse animation

Notes and attachments appear in chronological order based on their creation time. 

![[Pasted image 10.png]]