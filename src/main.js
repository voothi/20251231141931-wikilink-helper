// src/main.js

(async function init() {
    // 1. Initialize Settings
    const settings = await window.WikilinkSettings.load();
    let currentSettings = settings;

    // Listen for changes
    chrome.storage.onChanged.addListener((changes, namespace) => {
        if (namespace === 'local') {
            if (changes.linkFormat) currentSettings.linkFormat = changes.linkFormat.newValue;
            if (changes.copyMode) currentSettings.copyMode = changes.copyMode.newValue;
            if (changes.clickAction) currentSettings.clickAction = changes.clickAction.newValue;
        }
    });

    // 2. Determine Handler
    const handlers = [
        new window.GitHubHandler(),
        new window.BaseHandler() // Fallback
    ];

    const activeHandler = handlers.find(h => h.shouldHandle(window.location.href));
    console.log('[WikilinkHelper] Active Handler:', activeHandler.constructor.name);

    // 3. Process Content
    function processNode(node) {
        if (node.nodeType === 3) { // Text node
            const text = node.nodeValue;
            const regex = /\[\[(.*?)\]\]/g;

            if (regex.test(text)) {
                const fragment = document.createDocumentFragment();
                let lastIndex = 0;
                let match;

                regex.lastIndex = 0;

                while ((match = regex.exec(text)) !== null) {
                    if (match.index > lastIndex) {
                        fragment.appendChild(document.createTextNode(text.slice(lastIndex, match.index)));
                    }

                    const rawMatch = match[0];
                    const linkData = window.WikilinkParser.parse(rawMatch, currentSettings.linkFormat);

                    const span = document.createElement('span');
                    span.className = 'wikilink-helper';
                    span.textContent = linkData.text;
                    span.title = `ID: ${linkData.id}\nClick to ${currentSettings.clickAction === 'navigate' ? 'Navigate' : 'Copy'}`;

                    span.addEventListener('click', (e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        activeHandler.handleClick(linkData, currentSettings);
                    });

                    fragment.appendChild(span);
                    lastIndex = regex.lastIndex;
                }

                if (lastIndex < text.length) {
                    fragment.appendChild(document.createTextNode(text.slice(lastIndex)));
                }

                node.parentNode.replaceChild(fragment, node);
            }
        } else if (node.nodeType === 1) { // Element node
            const tagName = node.tagName.toLowerCase();
            if (tagName === 'script' || tagName === 'style' || tagName === 'textarea' || tagName === 'input' || node.classList.contains('wikilink-helper')) {
                return;
            }
            Array.from(node.childNodes).forEach(processNode);
        }
    }

    // 4. Start Observation
    processNode(document.body);

    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            mutation.addedNodes.forEach((node) => {
                processNode(node);
            });
        });
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });

})();
