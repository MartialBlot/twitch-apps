const express = require('express')
const app = express()
const http = require('http')
const server = http.createServer(app)
var path = require('path')

app.get('/', (_req, res) => {
    const overlayHtmlPath = path.resolve(__dirname, '..', 'dist', 'index.html')
    res.sendFile(overlayHtmlPath)
})

app.get('/bundle.js', function (_req, res) {
    const overlayBundleJsPath = path.resolve(__dirname, '..', 'dist', 'bundle.js')
    res.sendfile(overlayBundleJsPath);
})

server.listen(3000, () => {
    console.log('Server on')
})