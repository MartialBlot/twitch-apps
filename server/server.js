const express = require('express')
const app = express()
const http = require('http')
const server = http.createServer(app)
var path = require('path')
const { Server } = require("socket.io")
const io = new Server(server)

app.get('/', (_req, res) => {
    const overlayHtmlPath = path.resolve(__dirname, '..', 'dist', 'index.html')
    res.sendFile(overlayHtmlPath)
})

app.get('/bundle.js', function (_req, res) {
    const overlayBundleJsPath = path.resolve(__dirname, '..', 'dist', 'bundle.js')
    res.sendfile(overlayBundleJsPath);
})

io.on('connection', (socket) => {
    console.log('Cast on')
    //Send a message to client
    io.emit('message', 'Coucou')
    socket.on('disconnect', () => {
        console.log('Cast off')
    })
})

server.listen(3000, () => {
    console.log('Server on')
})