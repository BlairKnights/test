const WebSocket = require('ws');

const ws = new WebSocket('ws://localhost:8080');

ws.onopen = () => {
    console.log('WebSocket client connected');
    ws.send('Hello from the client!');
};

ws.onmessage = (message) => {
    console.log(`Server message: ${message.data}`);
};

ws.onclose = () => {
    console.log('WebSocket client disconnected');
};
