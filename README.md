# Wikilink Helper Extension

[![Version](https://img.shields.io/badge/version-v1.3.4-blue)](https://github.com/voothi/20251231141931-wikilink-helper)
[![Chrome Web Store](https://img.shields.io/chrome-web-store/v/mekebojdkoolcckoibjanfhfckknklhm.svg)](https://chromewebstore.google.com/detail/wikilink-helper/mekebojdkoolcckoibjanfhfckknklhm)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Detects wikilinks on web pages (e.g., GitHub), displays them readably, and allows quick copying of target IDs or descriptions for easy navigation and searching.

## Table of Contents
- [Description](#description)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Privacy & Site Access](#privacy--site-access)
- [Kardenwort](#kardenwort)
- [License](#license)

---

## Description
This Chrome extension finds wikilink patterns like `[[20251231140239-target-page|Displayed Text]]` on any webpage. It replaces them with a clean, clickable element. Clicking the link copies the content to your clipboard based on your preferred settings (ID, Description, or both).

[Return to Top](#wikilink-helper-extension)

## Features
- **Smart Parsing**: Detects standard `[[ID|Text]]` and reverse `[[Text|ID]]` links.
- **Configurable Formats**: Support for `Standard (ID|Text)` and `Reverse (Text|ID)` formats.
- **Configurable Copying**:
  - **Copy ID**: `20251231140239-target-page` (Default)
  - **Copy Both**: `20251231140239-target-page Displayed Text`
  - **Copy Text**: `Displayed Text`
- **GitHub Auto-Navigate**: Simulates the 't' key file search workflow on GitHub (toggleable).
- **Visual Feedback**: Shows a "Copied" toast notification on click.
- **Privacy First**: Runs entirely locally. [Privacy Policy included](PRIVACY.md).

[Return to Top](#wikilink-helper-extension)

## Installation

### Option 1: Chrome Web Store (Recommended)
1. Go to the [Wikilink Helper on Chrome Web Store](https://chromewebstore.google.com/detail/wikilink-helper/mekebojdkoolcckoibjanfhfckknklhm).
2. Click **Add to Chrome**.
3. Confirm the installation.

### Option 2: Drag and Drop
1. Download the latest `.zip` file from the `dist/` folder (or releases).
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable **Developer mode** (toggle in the top right).
4. Drag and drop the `.zip` file onto the extensions page.

### Option 3: Load Unpacked
1. Download and **unzip** the release archive.
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable **Developer mode** (toggle in the top right).
4. Click **Load unpacked**.
5. Select the unzipped folder (the one containing `manifest.json`).

[Return to Top](#wikilink-helper-extension)

## Usage

1. **Navigate** to a page containing wikilinks (e.g., a GitHub issue or markdown file).
2. **Click** on a highlighted wikilink to copy its ID.
3. **Change Mode**:
   - Click the extension icon in the Chrome toolbar.
   - Select your preferred copy mode (Target ID, ID + Description, or Description Only).
   - **Click Action**: Choose between "Copy to Clipboard" or "Auto-Navigate" (GitHub only).
   - Future clicks will respect this setting.

[Return to Top](#wikilink-helper-extension)

## Privacy & Site Access

You can control exactly which websites this extension can access:

1. **Right-click** the extension icon in your toolbar.
2. Select **"This can read and change site data"**.
3. Choose your preferred level of access:
    - **When you click the extension**: (Recommended) The extension only runs when you explicitly click it.
    - **On [specific site]**: Limited only to the current domain (e.g., `github.com`).
    - **On all sites**: Standard behavior.

> [!TIP]
> For maximum privacy, set access to **"When you click the extension"**. You can then easily switch to a specific site if you use it frequently.

[Return to Top](#wikilink-helper-extension)

## Kardenwort Ecosystem

This project is part of the **[Kardenwort](https://github.com/kardenwort)** environment, designed to create a focused and efficient learning ecosystem.

[Return to Top](#table-of-contents)

## Development
To build the extension locally (generates `.crx` and `.zip` in `dist/`):
- **Windows**: Run `scripts\build.cmd`
- **Linux/macOS**: Run `scripts/build.sh`

See [PUBLISHING.md](docs/PUBLISHING.md) for instructions on how to publish to the Chrome Web Store.

## License
MIT License. See LICENSE file for details.

[Return to Top](#wikilink-helper-extension)
