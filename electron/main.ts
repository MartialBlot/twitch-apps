const { app, BrowserWindow, screen: electronScreen } = require('electron')
const path = require("path")

const createMainWindow = () => {
    //Native
    let hiddenWindow = new BrowserWindow({
        show: false,
        nodeIntegration: true,
        nodeIntegrationInWorker: true
    })
    hiddenWindow.loadURL(path.join('file://', __dirname, '../server/', 'server.html'))
    hiddenWindow.once('ready-to-show', () => hiddenWindow.show())
    hiddenWindow.on('closed', () => {
        mainWindow = null
    })

    let mainWindow = new BrowserWindow({
        width: electronScreen.getPrimaryDisplay().workArea.width,
        height: electronScreen.getPrimaryDisplay().workArea.height,
        show: false,
        backgroundColor: 'white',
        webPreferences: {
            nodeIntegration: false
        },
        autoHideMenuBar: true,
        roundedCorners: true,
        darkTheme: true,
        icon: __dirname + '/favicon.ico'
    })
    const startURL = 'http://localhost:3001'

    mainWindow.loadURL(startURL)

    mainWindow.once('ready-to-show', () => mainWindow.show())

    mainWindow.on('closed', () => {
        mainWindow = null
        hiddenWindow = null
    })
}

app.whenReady().then(() => {
    createMainWindow()

    app.on('activate', () => {
        if (!BrowserWindow.getAllWindows().length) {
            createMainWindow()
        }
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})