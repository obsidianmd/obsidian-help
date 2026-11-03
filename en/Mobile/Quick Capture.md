---
permalink: mobile/quick-capture
description: Save notes to your vault from your phone's Lock Screen or Home Screen without waiting for your vault to load.
---
Quick Capture lets you save notes to your vault from your phone's Lock Screen or Home Screen without waiting for your vault to load. Depending on the capture location you select, Quick Capture can create a new note or add to an existing note.

## iOS

> [!note] Note
> Quick Capture requires Obsidian 1.14 or later and iOS or iPadOS 26 or later.

![[ios-quick-capture-view.png|400]]

To capture text:

1. Add the **Quick Capture** widget to your Lock Screen, Control Center, or Home Screen.
2. Tap the widget to open Quick Capture.
3. Enter your text.
4. To change where the text will be saved, tap the capture location at the top of the screen and select another location.
5. Tap the checkmark to save the text.

**Note**: If Live Activities are enabled, the quick capture note also appears on the Lock Screen and, on supported iPhone models, in the Dynamic Island. Tap the bar or Live Activity to continue editing.

![[ios-quick-capture-live-activity.png|400]]

### Voice Capture

Voice Capture lets you record a voice note with Quick Capture. Obsidian transcribes what you say as you speak, and can save the recording to your vault alongside the transcript.

To capture a voice note:

1. Open Quick Capture, then tap the microphone button in the bottom-left corner. Recording starts right away.
2. Speak your note. The transcript appears in the text area as you talk, and you can edit it at any time.
3. Tap the recording button at the bottom of the screen to pause, and tap it again to resume.
4. Tap the checkmark to save the transcript and recording to the selected capture location.

![[ios-voice-capture.png|400]]

You can also start recording directly from a widget. When customizing a Quick Capture widget, choose an action from the **Voice Capture** section.

Recording continues if you minimize Quick Capture or lock your device. While recording, the Lock Screen and Dynamic Island show the live transcript and a timer. Tap the timer to pause or resume recording.

![[ios-voice-capture-live-activity.png|400]]

#### Voice Capture settings

To change Voice Capture settings, tap the gear icon at the top of the screen while in Voice Capture.

- **Language**: The language used for transcription. See [[#Supported languages]]. Select **None** to turn off transcription and record audio only.
- **Microphone**: The microphone used for recording, such as the built-in microphone or a connected headset.
- **Save Audio File**: Whether to save the recording to your vault.
- **Audio from Other Apps**: What happens to music or other audio that's playing when you record: **Keep Playing**, **Lower Volume**, or **Pause**. Changes apply from your next recording.

#### Supported languages

Voice Capture can transcribe speech in the following languages. Some devices support fewer languages, and available languages may change with iOS updates. If your language isn't available, you can still record audio without a transcript.

- Bangla
- Cantonese
- Chinese
- English
- French
- German
- Gujarati
- Hindi
- Italian
- Japanese
- Kannada
- Kashmiri
- Korean
- Maithili
- Malayalam
- Marathi
- Nepali
- Odia
- Portuguese
- Punjabi
- Spanish
- Tamil
- Telugu
- Urdu

### Capture locations

Capture locations determine where Quick Capture saves your text. A capture location can:

- Create a new note in a selected folder, with an optional template and custom note name.
- Append or prepend the text to your daily note.
- Append or prepend the text to a bookmarked note.
- Append or prepend the text to another note you select.

To create a capture location:
1. Open Quick Capture.
2. Tap the capture location at the top of the screen.
3. Tap the plus (+) button.
4. Select a behavior and configure any optional settings.
5. Tap **Save**.

You can also use **Open Note after Capture** to choose whether Obsidian opens the destination note after saving the capture.

![[ios-quick-capture-locations.png|400]]

![[ios-quick-capture-config.png|400]]

### Quick Capture templates

You can apply a template to format the captured text. Quick Capture templates support the following placeholders:

| Placeholder | Description |
| --- | --- |
| `{{content}}` | Captured text |
| `{{date}}` | Current date |
| `{{time}}` | Current time |
| `{{latitude}}` | Current latitude |
| `{{longitude}}` | Current longitude |
| `{{shortAddress}}` | Short form of the current address |
| `{{fullAddress}}` | Full current address |
| `{{googleMapsLink}}` | Google Maps link to the current location |
| `{{appleMapsLink}}` | Apple Maps link to the current location |
| `{{openStreetMapLink}}` | OpenStreetMap link to the current location |

To configure a Quick Capture widget for a specific capture location, use the steps in [[Obsidian for iOS and iPadOS#Customizing widgets]]. Home Screen widgets can display multiple capture locations.

![[ios-quick-capture-widget.png|400]]
