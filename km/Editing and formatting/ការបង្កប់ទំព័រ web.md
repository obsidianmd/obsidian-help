---
alias: របៀប/បង្កប់ទំព័រ web
---

រៀនពីរបៀបប្រើ [iframe](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe) ធាតុ HTML ទៅបង្កប់ទំព័រ web នៅក្នុងកំណត់ត្រារបស់អ្នក ។

ដើម្បីបង្កប់ទំព័រ web, បន្ថែមផ្នែកខាងក្រោមទៅក្នុងកំណត់ត្រារបស់អ្នក ហើយជំនួស placeholder ទៅជា URL ទៅកាន់ទំព័រ web ដែលអ្នកចង់បង្កប់:

```html
<iframe src="INSERT YOUR URL HERE"></iframe>
```

> [!note]
> Websites មួយចំនួនមិនឲ្យអ្នកបង្កប់ពួកវាទេ ។ ប៉ុន្តែពួកគេអាចឲ្យ URLs សម្រាប់បង្កប់ពួកគេ ។ បើ website ណាមួយមិនព្រមឲ្យបង្កប់ អ្នកអាចសាកស្វែងរកតាម internet ដោយដាក់ឈ្មោះ website ហើយពាក្យ "embed iframe" ។ ឧទាហរណ៍ "youtube embed iframe" ។

> [!tip]
> បើអ្នកប្រើ [[Canvas]] អ្នកអាចបង្កប់ទំព័រ web ទៅក្នុងកាតមួយ ។ សម្រាប់ព័ត៌មានបន្ថែម, មើល [[Canvas#បន្ថែមកាត ពីគេហទំព័រ]] ។

## បង្កប់វីដេអូ YouTube

YouTube មិនឲ្យអ្នកបង្កប់វីដេអូដោយប្រើ URL ធម្មតាទេ ។ ប៉ុន្តែពួកគេឲ្យ `https://www.youtube.com/embed/VIDEO_ID` ។

អ្នកអាចរក video ID ដោយចូលទៅវីដេអូ ហើយមើល address bar នៅក្នុង browser​ របស់អ្នក ។ Video ID នៅបន្ទាប់ `?v=` ។

ឧទាហរណ៍ ដើម្បីបង្កប់វីដេអូ `https://www.youtube.com/watch?v=NnTvZWp5Q7o` ធ្វើដូចខាងក្រោមនៅក្នុងកំណត់ត្រារបស់អ្នក:

```html
<iframe src="https://www.youtube.com/embed/NnTvZWp5Q7o"></iframe>
```

<iframe src="https://www.youtube.com/embed/NnTvZWp5Q7o"></iframe>

## បង្កប់ tweet

ទោះបីជា Twitter គ្មានវិធីផ្លូវការក្នុងការបង្កប់ tweets ដោយប្រើ iframe អ្នកអាចប្រើសេវាកម្ម [TwitFrame](https://twitframe.com/) ទៅបង្កើត URL ដែលអ្នកអាចបង្កប់បាន ។ សម្រាប់ព័ត៌មានបន្ថែម, មើលឯកសារយោងរបស់ TwitFrame ។

```html
<iframe
  border="0"
  frameborder="0"
  height="763"
  width="550"
  src="https://twitframe.com/show?url=https%3A%2F%2Ftwitter.com%2Fobsdmd%2Fstatus%2F1580548874246443010"
>
</iframe>
```

<iframe
  border="0"
  frameborder="0"
  height="763"
  width="550"
  src="https://twitframe.com/show?url=https%3A%2F%2Ftwitter.com%2Fobsdmd%2Fstatus%2F1580548874246443010"
>
</iframe>
