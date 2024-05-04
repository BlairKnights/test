function delayedMessage(callback) {
    setTimeout(() => {
        callback("Delayed message");
    }, 2000);
}
function handleMessage(message) {
    console.log(message);
}
delayedMessage(handleMessage);
