import { app, BrowserWindow, nativeTheme, ipcMain, dialog } from 'electron'
import path from 'path'

try {
  if (process.platform === 'win32' && nativeTheme.shouldUseDarkColors === true) {
    require('fs').unlinkSync(require('path').join(app.getPath('userData'), 'DevTools Extensions'))
  }
} catch (_) { }

let mainWindow

function createWindow () {
  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    width: 1000,
    height: 600,
    useContentSize: true,
    autoHideMenuBar: true,
    webPreferences: {
      contextIsolation: true,
      // More info: /quasar-cli/developing-electron-apps/electron-preload-script
      preload: path.resolve(__dirname, process.env.QUASAR_ELECTRON_PRELOAD)
    }
  })

  mainWindow.loadURL(process.env.APP_URL)

  if (process.env.DEBUGGING) {
    // if on DEV or Production with debug enabled
    mainWindow.webContents.openDevTools()
  } else {
    // we're on production; no access to devtools pls
    mainWindow.webContents.on('devtools-opened', () => {
      mainWindow.webContents.closeDevTools()
    })
  }

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})

import { Api } from '../src/shared/api'
const appApi = new Api();

ipcMain.handle('importFile', async (events, collectionName, action) => {
  const {filePaths} = await dialog.showOpenDialog({
    properties: ['openFile'],
    filters: [{ name: 'JSON/LJSON', extensions: ['json', 'ljson'] }]
  })
  if (filePaths && filePaths.length > 0) {
    let documents = require('fs').readFileSync(filePaths[0])
    try {
      documents = JSON.parse(documents)
    } catch (e) {
      // asume ljson
    }
    return appApi.importDocuments(collectionName, documents, action);
  }
});

Object.getOwnPropertyNames( Api.prototype ).forEach((f) => {
  ipcMain.handle(f, (event, ...args) => {
    return appApi[f](...args);
  });
})
