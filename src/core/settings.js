// src/core/settings.js

const Settings = {
    defaults: {
        copyMode: 'id',
        linkFormat: 'auto',
        clickAction: 'copy' // 'copy' or 'navigate'
    },

    /**
     * Load settings from storage
     * @returns {Promise<Object>}
     */
    load() {
        return new Promise((resolve) => {
            chrome.storage.local.get(null, (items) => {
                resolve({ ...this.defaults, ...items });
            });
        });
    },

    /**
     * Determine text to copy based on mode
     * @param {Object} linkData - {id, text}
     * @param {string} mode - 'id', 'text', 'both'
     */
    getCopyText(linkData, mode) {
        if (mode === 'text') return linkData.text;
        if (mode === 'both') return `${linkData.id} ${linkData.text}`;
        return linkData.id;
    }
};

window.WikilinkSettings = Settings;
