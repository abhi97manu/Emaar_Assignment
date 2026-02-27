const http = require('http');
const {Server} = require('socket.io');
const httpServer = require('./Server');
const server  = http.createServer(httpServer);
const socket = new Server(server)


module.exports = socket;