Learn how to use the [iframe](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe) HTML element to embed web pages in your notes. 

To embed a web page, add the following in your note and replace the placeholder text with the URL of the web page you want to embed:

```html
<iframe src="INSERT YOUR URL HERE"></iframe>
```

> [!note]
> Some websites don't allow you to embed them. Instead, they may provide URLs that are meant for embedding them. If the website doesn't support embedding, try searching for the name of the website followed by "embed iframe". For example, "youtube embed iframe".

## Embed a YouTube video

YouTube doesn't allow you to embed a video using the regular URL. Instead, use `https://www.youtube.com/embed/VIDEO_ID`.

You can find the video ID by browsing to the video and looking in the address bar in your browser. The video ID is the text that comes after `?v=`. 

For example, to embed the video at `https://www.youtube.com/watch?v=NnTvZWp5Q7o`, add the following to your note:

```html
<iframe src="https://www.youtube.com/embed/NnTvZWp5Q7o"></iframe>
```

<iframe src="https://www.youtube.com/embed/NnTvZWp5Q7o"></iframe>

## Embed a tweet

While Twitter doesn't have an official way to embed tweets using iframe, you can use services like [TwitFrame](https://twitframe.com/) to generate an embeddable URL. For more information, refer to TwitFrame's own documentation.

```html
<iframe
	border=0
	frameborder=0
	height=250
	width=550  
	src="https://twitframe.com/show?url=https%3A%2F%2Ftwitter.com%2Fjack%2Fstatus%2F20">
</iframe>
```

<iframe
	border=0
	frameborder=0
	height=250
	width=550  
	src="https://twitframe.com/show?url=https%3A%2F%2Ftwitter.com%2Fjack%2Fstatus%2F20">
</iframe>