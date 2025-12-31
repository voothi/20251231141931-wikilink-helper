// src/handlers/github.js

class GitHubHandler extends window.BaseHandler {
    shouldHandle(url) {
        return url.includes('github.com');
    }

    async handleClick(linkData, settings) {
        // If "Click Action" is NOT 'navigate', fall back to default copy
        if (settings.clickAction !== 'navigate') {
            return super.handleClick(linkData, settings);
        }

        // --- Automation Logic ---

        // 1. Copy to clipboard anyway (user expectation)
        await navigator.clipboard.writeText(linkData.id);
        this.showToast(`Navigating to: ${linkData.id}`);

        // 2. Dispatch 't' keydown to open file finder
        const keyEvent = new KeyboardEvent('keydown', {
            key: 't',
            code: 'KeyT',
            keyCode: 84,
            bubbles: true,
            cancelable: true
        });
        document.body.dispatchEvent(keyEvent);

        // 3. Wait for the input to appear
        const input = await this.waitForSelector('[data-target="tree-finder-input.input"], input[aria-label="Go to file"]');

        if (input) {
            // 4. Set Value
            input.value = linkData.id;

            // 5. Dispatch input event so React/Framework picks it up
            input.dispatchEvent(new Event('input', { bubbles: true }));

            // Note: We don't press Enter automatically because GitHub search usually updates live 
            // and the user might want to select the correct file if there are duplicates.
            // But if user wants full auto:
            // setTimeout(() => {
            //     input.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', code: 'Enter', keyCode: 13, bubbles: true }));
            // }, 500);
        } else {
            console.error('GitHub file finder input not found');
        }

        return true;
    }

    waitForSelector(selector, timeout = 2000) {
        return new Promise(resolve => {
            if (document.querySelector(selector)) {
                return resolve(document.querySelector(selector));
            }

            const observer = new MutationObserver((mutations, obs) => {
                const el = document.querySelector(selector);
                if (el) {
                    obs.disconnect();
                    resolve(el);
                }
            });

            observer.observe(document.body, { childList: true, subtree: true });

            setTimeout(() => {
                observer.disconnect();
                resolve(null);
            }, timeout);
        });
    }
}

window.GitHubHandler = GitHubHandler;
