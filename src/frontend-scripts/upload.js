
let uploadInput = document.getElementById("uploadInput")



uploadInput.addEventListener('change', async ()=> {
    console.log("What does this say?" + uploadInput.files[0])
    await electronAPI.sendFile(uploadInput.files[0].path)
})