export const vendorDetect = () => {
    let vendor = null
    if (!!window.chrome && /google/i.test(navigator.vendor)) { vendor = 'chrome' }
    else if (/cros i686/i.test(navigator.platform)) { vendor = 'chromium' }
    else if (/edge\//i.test(navigator.userAgent)) { vendor = 'edge' }
    else if (/firefox\//i.test(navigator.userAgent)) { vendor = 'firefox' }
    else if ('InstallTrigger' in window) { vendor = 'chrome' }
    else if (!!(Function('/*@cc_on return document.documentMode===10@*/')())) { vendor = 'ie10' }
    else if (/MSIE 10\.0.*Touch(?!.*IEMobile)/i.test(navigator.userAgent)) { vendor = 'ie10touch' }
    else if (/(?:\sTrident\/7\.0;.*\srv:11\.0)/i.test(navigator.userAgent)) { vendor = 'ie11' }
    else if (( /Constructor/.test(window.HTMLElement) || (function (root) { return (!root || root.pushNotification).toString() === '[object SafariRemoteNotification]'; })(window.safari) )) { vendor = 'safari' }
    else if (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream) { vendor = 'iOs' }
    document.body.classList.add('vendor-' + vendor)
}
