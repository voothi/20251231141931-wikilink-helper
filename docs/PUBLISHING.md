# How to Publish to the Chrome Web Store

Currently, this extension exists only on your computer. To download it from the [Chrome Web Store](https://chromewebstore.google.com/), you must first **publish** it.

## 1. Prepare for Publishing
The Chrome Web Store accepts a **ZIP file** of your source code, not the `.crx` file we built locally. 
> **Important**: We have hardcoded the public key in `manifest.json`. This ensures the Web Store version and your local development version **share the same ID**: `mekebojdkoolcckoibjanfhfckknklhm`.

1. Run the build script to ensure `dist/` is fresh.
2. Locate `wikilink-helper.zip` in the `dist/` folder. (Our build script generates this alongside the CRX).

## 2. Register as a Developer
1. Go to the [Chrome Web Store Developer Dashboard](https://chrome.google.com/webstore/dev/dashboard).
2. Sign in with your Google Account.
3. Pay the **one-time registration fee** ($5 USD).

## 3. Upload Your Item
1. Click **+ New Item**.
2. Click **Browse files** and select `dist/v1.3.4-wikilink-helper.zip`.
3. The dashboard will analyze your manifest and upload the code.

## 4. Store Listing
You will need to provide:
- **Description**: A detailed explanation of what the extension does.
- **Icon**: Your 128x128 icon (already in `assets/`).
- **Screenshots**: At least one screenshot of the extension in action (1280x800 or 640x400).
- **Category**: e.g., "Productivity" or "Search tools".
- **Language**: English.

## 5. Submit for Review
1. Once all details are filled, click **Submit for review**.
2. Google’s team will review the code and listing (usually takes 1-3 days).
3. Once approved, your extension will be live, and you will get a permanent link (e.g., `https://chromewebstore.google.com/detail/wikilink-helper/...`).

- **ID Synchronization**: We have added the `key` field to `manifest.json`. This ensures that the local "unpacked" extension and the Web Store version share the same Extension ID. This is critical for consistent settings and storage.
