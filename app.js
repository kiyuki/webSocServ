//httpモジュールをインポート
var http = require('http');
var dt = require('./myfirstmodule');
var WebSocketServer = require('ws').Server
var wss = new WebSocketServer({port:13315});

//Webサーバーの設定
/*
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write("The date and time are currently: " + dt.myDateTime());
    res.end('Hello World\n');
}).listen(13315);
*/

console.log('Server running at http://localhost:3000/');

wss.on('connection', function(ws){
    ws.send('connect')
});