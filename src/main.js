const {app, BrowserWindow, ipcMain, Menu} = require('electron')
const fs = require('fs')
const path = require('path')
const testPrompt = require('./backend-scripts/langchain.js');

testPrompt()
function createWindow() {
    const window = new BrowserWindow({
        height: 600,
        width: 900,
        webPreferences: {
            preload: path.join(__dirname, '/backend-scripts/preload.js')
          },
    })

    ipcMain.on('sendFile', async (request, filePath)=> {
        const file = await fs.readFile(`${filePath}`, (error, data)=> {
            const fileName_arr = filePath.split("/")
            const writeStream = fs.createWriteStream(`temp/${fileName_arr[fileName_arr.length - 1]}`);
            writeStream.write(data);
            writeStream.end();
            
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