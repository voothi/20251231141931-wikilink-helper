
## v1.3.2 (2025-12-31)
**Dark Mode Fixes**

- **Fix**: Resolved issue where wikilinks were invisible on dark-themed websites.
- **Change**: Links now inherit the native website color and style (using `<a>` tags instead of `<span>`).
- **Improvement**: Underline color adapts dynamically to match the text color.


## v1.3.0 (2025-12-31)
**GitHub Automation & Icons**

- **Feature**: **GitHub Auto-Navigate**. On GitHub and Gist, you can now toggle "Click Action" to "Auto-Navigate". This will simulate pressing `t`, typing the ID, and pressing Enter.
- **Feature**: Added extension icons (16, 48, 128px).
- **Update**: Extension now works on **all websites** for standard "Copy" functionality.
- **Privacy**: Added Privacy Policy (`PRIVACY.md`) and publishing guide (`PUBLISHING.md`).
- **DevOps**: Added cross-platform build scripts (`scripts/pack_crx.py`) to generate CRX and ZIP artifacts.

## v1.2.2 (2025-12-31)
**Link Format Support**

- **Feature**: Added "Link Format" setting to support explicit wikilink parsing.
  - **Auto**: Smart detection based on ZID pattern (default).
  - **Standard**: Forces `[[ID|Text]]` parsing.
  - **Reverse**: Forces `[[Text|ID]]` parsing.
- **Improvement**: Renamed "Dendron" mode to "Reverse" and "Obsidian" to "Standard" for clarity.

## v1.0.0 (2025-12-31)
**Initial Release**

- **Feature**: Automatically detects `[[ID|Text]]` wikilinks on web pages.
- **Feature**: Click-to-copy functionality.
- **Feature**: Supports Dendron-style links `[[Text|ID]]`.
- **Feature**: Popup setting to toggle copying Target ID, Description, or Both.
- **Feature**: Visual styling for wikilinks and toast notifications.
