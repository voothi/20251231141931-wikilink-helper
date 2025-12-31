# Wikilink Helper Extension

[![Version](https://img.shields.io/badge/version-v1.3.0-blue)](https://github.com/voothi/20251231141931-wikilink-helper)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Detects wikilinks on web pages (e.g., GitHub), displays them readably, and allows quick copying of target IDs or descriptions for easy navigation and searching.

## Table of Contents
- [Description](#description)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
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

### Load Unpacked (Recommended for local use)
1. Clone or download this repository (or unzip the release archive).
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable **Developer mode** (toggle in the top right).
4. Click **Load unpacked**.
5. Select the extension folder (containing `manifest.json`).

### Install from .CRX (Advanced)
If you build the `.crx` file using the provided scripts, you can drag and drop it into `chrome://extensions/`.
**Note:** Chrome may flag self-signed extensions as "Not from the Chrome Web Store" or "Unsafe". This is expected because the extension is signed with a private key (`key.pem`) generated locally, not one trusted by the Web Store.
- To use it, you may need to accept the warning or use "Load Unpacked" instead.

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

## Kardenwort Ecosystem

This project is part of the **[Kardenwort](https://github.com/kardenwort)** environment, designed to create a focused and efficient learning ecosystem.

[Return to Top](#table-of-contents)

## License
MIT License. See LICENSE file for details.

[Return to Top](#wikilink-helper-extension)
