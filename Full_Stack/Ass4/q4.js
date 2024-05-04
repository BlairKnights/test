const EventEmitter = require('events'); 
const emitter = new EventEmitter();

const greetListener = () => {
    console.log("Hello, Event!");
};

emitter.on('greet', greetListener);

emitter.emit('greet');
