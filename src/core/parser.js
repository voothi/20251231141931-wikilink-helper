// src/core/parser.js

const Parser = {
    ID_PATTERN: /^\d{14}-/,

    /**
     * Parse raw wikilink text [[...]] into {id, text} based on format setting
     * @param {string} rawText - e.g. "[[2025...|Text]]"
     * @param {string} format - "auto", "standard", or "reverse"
     */
    parse(rawText, format = 'auto') {
        const content = rawText.slice(2, -2); // Remove [[ and ]]

        if (!content.includes('|')) {
            return { id: content, text: content };
        }

        const parts = content.split('|');
        const first = parts[0];
        const second = parts.slice(1).join('|');

        if (format === 'standard') {
            return { id: first, text: second };
        } else if (format === 'reverse') {
            return { id: second, text: first };
        } else {
            // Auto
            if (this.ID_PATTERN.test(second)) {
                return { id: second, text: first };
            }
            return { id: first, text: second };
        }
    }
};

// Make it available globally
window.WikilinkParser = Parser;
