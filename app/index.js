const ipc = require('electron').ipcRenderer;

document.addEventListener("DOMContentLoaded", function(event) { 
    var btn = document.getElementById('signInBtn');

    btn.addEventListener('click', function () {
        ipc.send('open-login-window')
    });
});