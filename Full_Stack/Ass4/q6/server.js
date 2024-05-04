const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws) => 
    {
        console.log('Client connected');

        ws.on('message', (message) => 
            {
                console.log(`Client message: ${message}`);
                ws.send(`Server response: Received message - ${message}`);
            }
        );

        ws.on('close', () => 
            {
                console.log('Client disconnected');
            }
        );
    }
);

console.log('WebSocket server listening on port 8080');
