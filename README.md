# Format Safe Paste Chrome Extension

This project is a Chrome extension designed to provide safe formatting when pasting content. Follow the instructions below to manually add and use this extension in your Chrome browser.

## How to Manually Add This Extension to Chrome

1. **Clone or Download the Repository**
   - Click the green **Code** button at the top of the repository page.
   - Select **Download ZIP** or use `git clone` if you are comfortable with Git:
     
     ```bash
     git clone https://github.com/krishnamouli8/format-safe-paste.git
     ```
   - Extract the ZIP file if you downloaded it as a ZIP.

2. **Open Chrome Extensions Page**
   - Open Google Chrome.
   - Navigate to `chrome://extensions/` in the address bar.

3. **Enable Developer Mode**
   - On the top right of the Extensions page, turn on the **Developer mode** toggle.

4. **Load the Extension**
   - Click the **Load unpacked** button.
   - In the file dialog, select the folder where you extracted or cloned the repository. Make sure the folder contains the following files:
     - `manifest.json`
     - `background.js`
     - `content.js`
     - `popup.html`
     - `popup.js`
   - Click **Select Folder** (or **Open**).

5. **Verify Installation**
   - The extension should now appear in your list of installed extensions.
   - You can pin it to your Chrome toolbar for easy access.

## Usage

- Click the extension icon in your Chrome toolbar.
- Use the popup interface as needed to safely paste formatted content.
- The extension works automatically on supported websites when you perform paste operations.

## Troubleshooting

- If the extension does not appear or doesn't work as expected, ensure all files are present and you have selected the correct folder.
- Reload the extension from the Extensions page if you make any changes to the files.
- For errors, check the Chrome extension logs by clicking **Details > Inspect views** next to your extension on the `chrome://extensions/` page.

---
For more information or to report issues, visit the [GitHub repository](https://github.com/krishnamouli8/format-safe-paste).
