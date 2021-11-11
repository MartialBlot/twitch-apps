const express = require('express')
const app = express()
const admin = express()
const http = require('http')
const server = http.createServer(app)
const serverAdmin = http.createServer(admin)
var path = require('path')
const { Server } = require("socket.io")
const ioClient = new Server(server)
const ioAdmin = new Server(serverAdmin)

//Client

app.get('/', (_req, res) => {
    const overlayHtmlPath = path.resolve(__dirname, '..', 'dist', 'index.html')
    res.sendFile(overlayHtmlPath)
})

app.get('/app.js', function (_req, res) {
    const overlayBundleJsPath = path.resolve(__dirname, '..', 'dist', 'app.js')
    res.sendfile(overlayBundleJsPath);
})

ioClient.on('connection', (socket) => {
    console.log('Cast on')
    socket.on('disconnect', () => {
        console.log('Cast off')
    })
})

server.listen(3000, () => {
    console.log('Server on')
})

//Admin

admin.get('/', (_req, res) => {
    const overlayHtmlPath = path.resolve(__dirname, '..', 'dist', 'admin.html')
    res.sendFile(overlayHtmlPath)
})

admin.get('/admin.js', function (_req, res) {
    const overlayBundleJsPath = path.resolve(__dirname, '..', 'dist', 'admin.js')
    res.sendfile(overlayBundleJsPath);
})

ioAdmin.on('connection', (socket) => {
    console.log('Admin connected')
    socket.on('message', (msg) => {
        ioClient.emit('message', msg)
    })
    socket.on('disconnect', () => {
        console.log('Admin disconnected')
    })
})

serverAdmin.listen(3001, () => {
    console.log('Server Admin on')
})