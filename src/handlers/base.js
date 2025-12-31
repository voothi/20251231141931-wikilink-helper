// src/handlers/base.js

class BaseHandler {
    constructor() { }

    /**
     * Check if this handler supports the current URL
     * @param {string} url 
     * @returns {boolean}
     */
    shouldHandle(url) {
        return false;
    }

    /**
     * Handle link click
     * @param {Object} linkData - {id, text}
     * @param {Object} settings - All settings
     * @returns {Promise<boolean>} - true if handled (stopped propagation)
     */
    async handleClick(linkData, settings) {
        // Default behavior: Copy to clipboard
        const text = window.WikilinkSettings.getCopyText(linkData, settings.copyMode);
        await navigator.clipboard.writeText(text);
        this.showToast(`Copied: ${text}`);
        return true;
    }

    showToast(message) {
        let toast = document.getElementById('wikilink-toast');
        if (!toast) {
            toast = document.createElement('div');
            toast.id = 'wikilink-toast';
            document.body.appendChild(toast);
        }
        toast.textContent = message;
        toast.classList.add('show');
        setTimeout(() => {
            toast.classList.remove('show');
        }, 2000);
    }
}

window.BaseHandler = BaseHandler;
