var yandex = {
    "v1": 54182332,
    "v2": 54182335,
    "v3": 54182338,
    "v4": 54182341,
    "v4c": 54182344
};


function $_GET(key) {
    var s = window.location.search;
    s = s.match(new RegExp(key + '=([^&=]+)'));
    return s ? s[1] : '';
}

var site = $_GET('version').replace('99', '')

if (!site) {
    var site = document.location.pathname
        .replace(/\/+/g, '')
        .replace('index.html', '')
        .replace('index2.html', '')
        .replace('prelp', '')
        .replace('confirm.html', '')
        .replace('99', '');
}

console.log(site);


yandexId = yandex[site];


(function(d, w, c, id) {
    (w[c] = w[c] || []).push(function() {
        try {
            var n = 'yaCounter' + id;
            w.n = new Ya.Metrika({
                id: id,
                clickmap: true,
                trackLinks: true,
                accurateTrackBounce: true,
                webvisor: true
            });
        } catch (e) {}
    });

    var n = d.getElementsByTagName("script")[0],
        s = d.createElement("script"),
        f = function() { n.parentNode.insertBefore(s, n); };
    s.type = "text/javascript";
    s.async = true;
    s.src = "https://mc.yandex.ru/metrika/watch.js";

    if (w.opera == "[object Opera]") {
        d.addEventListener("DOMContentLoaded", f, false);
    } else { f(); }
})(document, window, "yandex_metrika_callbacks", yandexId);