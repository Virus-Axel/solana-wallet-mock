const inject = (filename) => {
    var s = document.createElement('script');
    s.src = chrome.runtime.getURL(filename);
    s.onload = function() { this.remove(); };
    (document.head || document.documentElement).appendChild(s);
};

(() => {
    inject("solana_web3.js");
    inject("wallet_mock.js");
})();