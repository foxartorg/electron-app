const { app, BrowserWindow } = require('electron');
const path = require('path');
// const electronReload = require('electron-reload');
// electronReload(__dirname, {});
require('electron-reload')(__dirname, {
  electron: path.join(__dirname, 'node_modules', '.bin', 'electron'),
  // hardResetMethod: 'exit',
});

function createWindow() {
  const url = `file:///${path.join(__dirname, 'dist', 'electron-app', 'index.html')}`;
  const win = new BrowserWindow({
    width: 1280,
    height: 960,
    webPreferences: {
      nodeIntegration: true,
      // preload: path.join(__dirname, 'preload.js'),
      preload: path.join(__dirname, 'dist', 'electron-app', 'assets', 'preload.js'),
    },
  });
  win.loadURL(url).then(() => {
    win.webContents.openDevTools();
  });
  // win.loadFile(url).then(() => {
  //   win.webContents.openDevTools();
  // });
  win.on('closed', () => {
  });
}

/**
 * Opening your web page in a browser window
 */
app.whenReady().then(() => {
  createWindow();
  /**
   * Open a window if none are open (macOS)
   */
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});
/**
 * Quit the app when all windows are closed (Windows & Linux)
 */
app.on('window-all-closed', function() {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
