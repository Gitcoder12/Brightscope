// CORS Bypass Proxy – intercepts fetch and adds a public proxy
// Works with any API that doesn't block the proxy

const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';

// Save original fetch
const originalFetch = window.fetch;

// Override fetch
window.fetch = function(url, options = {}) {
    // Don't proxy if URL already has a proxy or is a local/relative path
    if (url.startsWith('http') && !url.includes(CORS_PROXY) && !url.includes('localhost')) {
        url = CORS_PROXY + url;
    }
    return originalFetch(url, options);
};

console.log('✅ CORS bypass active – using proxy:', CORS_PROXY);
