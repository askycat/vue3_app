const http = require('http');
const WebSocket = require('ws');

// 创建一个 HTTP server
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('WebSocket server running');
});

// 初始化 WebSocket server
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
    console.log('Client connected');

    setInterval(() => {
        ws.send('ping '+Date.now())
    }, 1000);
    
    // 当收到消息时触发
    ws.on('message', (message) => {
        console.log('Received:', message);
        // 回复客户端
        ws.send('Hello, Client!');
    });

    // 当连接关闭时触发
    ws.on('close', () => {
        console.log('Client disconnected');
    });
});

// 启动 HTTP 和 WebSocket 服务
server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});
