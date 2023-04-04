const {app, BrowserWindow, ipcMain, Menu} = require('electron')
const fs = require('fs')
const path = require('path')

function createWindow() {
    const window = new BrowserWindow({
        height: 600,
        width: 900,
        webPreferences: {
            preload: path.join(__dirname, '/backend-scripts/preload.js')
          },
    })

    ipcMain.on('sendFile', async (request, data)=> {
        console.log(data.toString())
        const file = await fs.readFile(`${data}`, (error, data)=> {
            console.log(`${__dirname}/temp/`)
            fs.writeFileSync(`${__dirname}/temp/test.txt`, data)
        })
        
    })
    window.loadFile('src/index.html')
}

app.whenReady().then(createWindow)

app.on('window-all-closed', _=> {
    if (process.platform !== 'darwin') {
        app.quit();
    }
})