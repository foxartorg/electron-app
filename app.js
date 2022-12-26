const { app, BrowserWindow } = require('electron');
const index = `file:///${__dirname}/dist/electron-app/index.html`;
let ApplicationWindow;

function createApplicationWindow() {
  ApplicationWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });
  ApplicationWindow.loadURL(index).then(() => {
    ApplicationWindow.webContents.openDevTools();
  });
  // Open the DevTools.
  ApplicationWindow.on('closed', function() {
    ApplicationWindow = null;
  });
}

app.on('ready', createApplicationWindow);
app.on('window-all-closed', function() {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
app.on('activate', function() {
  if (ApplicationWindow === null) {
    createApplicationWindow();
  }
});
