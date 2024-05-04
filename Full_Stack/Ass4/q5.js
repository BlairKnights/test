const fs = require('fs');

const filePath = 'data.txt';

const readableStream = fs.createReadStream(filePath, { encoding: 'utf-8' });

readableStream.on('data', (chunk) => {
    console.log(chunk);
});

readableStream.on('end', () => {
    console.log('End of stream reached.');
});

readableStream.on('error', (error) => {
    console.error('Error reading file:', error.message);
});
