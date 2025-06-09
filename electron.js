const { app, BrowserWindow } = require("electron");
const path = require("path");

function createWindow() {
  const win = new BrowserWindow({
    width: 1000,
    height: 800,
    autoHideMenuBar: true,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  const startUrl = app.isPackaged
    ? `file://${path.join(__dirname, "dist/index.html")}`
    : "http://localhost:5173";

  win.loadURL(startUrl);
}

app.whenReady().then(() => {
  createWindow();
});
