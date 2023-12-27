const { app, BrowserWindow } = require('electron');

let mainWindow;



function createWindow() {

  mainWindow = new BrowserWindow({ 
    width: 1024,
    height: 768,
    minWidth: 1000, // Optional: Set a minimum width
    minHeight: 568, // Optional: Set a minimum height
   });
  mainWindow.loadFile('index.html');
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});
