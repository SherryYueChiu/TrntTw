var iab;

document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    openTrnt();
}

function openTrnt() {
    let url = "https://trnt.tw";
    let target = "_blank";
    let options = "hidden=no,clearcache=no,clearsessioncache=no,footer=no,hardwareback=yes,hidenavigationbuttons=yes,hideurlbar=yes,zoom=no,mediaPlaybackRequiresUserAction=no,shouldPauseOnSuspend=yes,useWideViewPort=yes,fullscreen=yes,location=no";
    iab = cordova.InAppBrowser.open(url, target, options);
    bindEvent();
}

function bindEvent() {
    iab.addEventListener('loadstart', function (event) {
        console.warn("loadstart", event);
        openExteralLink(event.url);
    });

    iab.addEventListener('loadstop', function (event) {
        console.warn("loadstop", event);
        openExteralLink(event.url);
    });

    iab.addEventListener('loaderror', function (event) {
        console.warn("loaderror", event);
        openExteralLink(event.url);
    });
}

function insertScript() {
    //ref.executeScript({file: "myscript.js"});
}

function insertStyle() {
    //ref.insertCSS({file: "mystyles.css"});
}

function openExteralLink(url) {
    if (url.match(/^tel:/) ||
        url.match(/^sms:/) ||
        url.match(/^mailto:/) ||
        url.match(/^geo:/) ||
        url.match(/^whatsapp:/) ||
        url.match(/^tg:/) ||
        url.match(/^line:/)) {
        let target = "_system";
        let options = "hidden=no,clearcache=no,clearsessioncache=no,footer=no,hardwareback=yes,hidenavigationbuttons=yes,hideurlbar=yes,zoom=no,mediaPlaybackRequiresUserAction=no,shouldPauseOnSuspend=yes,useWideViewPort=yes,fullscreen=yes,location=no";
        iab = cordova.InAppBrowser.open(url, target, options);
    }
}