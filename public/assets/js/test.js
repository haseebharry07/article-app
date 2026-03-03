!function () { if (window.modalflow) return; var q = [], mf = window.modalflow = { _q: q, _loaded: !1, _cdn: "https://hlptflowbuilder.s3.us-east-1.amazonaws.com/test" };["init", "identify", "startFlow", "endFlow", "on", "off", "reset"].forEach(function (m) { mf[m] = function () { q.push([m, [].slice.call(arguments)]); return mf } }); var s = document.createElement("script"); s.async = 1; s.src = mf._cdn + "/mf-flowbuilder.js?v=" + Date.now(); (document.head || document.documentElement).appendChild(s) }();
    modalflow.init('mf_jy9svvij708r5z9jhhlz4tb151', {
        licenseKey: '17921640110654'
    });
    modalflow.identify('{{user.id}}', {
        name: 'Bilal Khalid',
        email: 'bilal.khalid@baam.com'
    });