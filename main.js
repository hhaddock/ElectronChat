const {app, BrowserWindow} = require('electron') 
const url = require('url') 
const path = require('path')  

const ipc = require('electron').ipcMain

let win  

function dashWindow() { 
   win = new BrowserWindow({width: 1280, height: 720, titleBarStyle: 'hidden'}) 
   win.loadURL(url.format ({ 
      pathname: path.join(__dirname, 'app/index.html'), 
      protocol: 'file:', 
      frame: false,
      slashes: true 
   })) 
}  

function loginWindow() {
    win = new BrowserWindow({width: 400, height: 600, titleBarStyle: 'hidden'}) 
    win.loadURL(url.format ({ 
       pathname: path.join(__dirname, 'app/views/login/login.html'), 
       protocol: 'file:', 
       frame: false,
       slashes: true 
    })) 
}

app.on('ready', dashWindow) 

ipc.on('open-login-window', function (event, arg) {
    loginWindow();
})