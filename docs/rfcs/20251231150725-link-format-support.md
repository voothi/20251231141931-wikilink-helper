# RFC: Explicit Link Format Support

**ZID**: 20251231150725
**Date**: 2025-12-31
**Status**: Implemented

## Summary
Add support for explicit "Standard" and "Reverse" (formerly Dendron) link parsing modes, alongside the default "Auto" detection.

## Implementation Details

### Goals
- Allow users to handle wikilinks correctly even if the ZID (Timestamp) pattern `\d{14}-` is missing.
- Support users who strictly use one format (e.g., standard Obsidian `[[ID|Text]]` or Dendron/Reverse `[[Text|ID]]`) and want predictable behavior.

### Decisions
1.  **New Setting**: Added `linkFormat` to `chrome.storage.local`.
    - `auto` (Default): Uses existing logic (checks 2nd part for ZID pattern).
    - `standard`: Forces first part = ID, second part = Text.
    - `reverse`: Forces second part = ID, first part = Text.
2.  **Terminology**:
    - "Standard" replaces "Obsidian" to be more generic.
    - "Reverse" replaces "Dendron" to describe the structure (`Text|ID`) rather than a specific tool.
3.  **UI**:
    - Added radio buttons in the popup to switch between these modes.
    - Included brief examples in the UI for clarity.

### Analytics
- N/A (Privacy-first).
