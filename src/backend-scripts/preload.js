const {contextBridge, ipcRenderer} = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
  sendFile: (data) => ipcRenderer.send("sendFile", data),
})