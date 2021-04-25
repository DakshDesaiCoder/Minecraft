const { app, BrowserWindow } = require('electron');
const path = require('path') 
const electron = require("electron")
const Menu = electron.Menu
if (require('electron-squirrel-startup')) {
  app.quit();
}

const createWindow = () => {
  
  const mainWindow = new BrowserWindow({
    minWidth: 800,
    minHeight: 600,
    icon:path.join(__dirname,'favicon.ico'),
    webPreferences:{
      devTools:false
    }
  });
  mainWindow.loadURL("https://minecraft-daksh-desai.web.app/")
  mainWindow.maximize()
};
app.on('ready', function(){
  createWindow()
  var template =[{label:"Controls",click:function(){
    const control = new BrowserWindow({
      width: 500,
      height: 500,
      minHeight:500,
      minWidth:500,
      maxHeight:500,
      maxWidth:500,
      icon:path.join(__dirname,'favicon.ico'),
      webPreferences:{
        devTools:false
      }
    });
    control.loadFile(path.join(__dirname,'controls.html'))
    Menu.setApplicationMenu(null)
  }}]
  var menu = Menu.buildFromTemplate(template)
  Menu.setApplicationMenu(menu)
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {

  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
