Obsidian supports HTML to allow you to display your notes the way you want, or even [[Embedding web pages|embed web pages]]. But allowing HTML inside your notes comes with risks. To prevent malicious code from doing harm, Obsidian _sanitizes_ any HTML in your notes.

The Obsidian team takes security seriously, and as a result, some HTML elements or features may not be available.

For example, the `<script>` element normally lets you run JavaScript whenever it loads. If Obsidian didn't sanitize HTML, an attacker could convince you to paste a text containing JavaScript that extracts sensitive information from your computer and sends back to them.
