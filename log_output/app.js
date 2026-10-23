const {randomUUID} = require('crypto');
const randomstring = randomUUID();
function logMessage(){
    const timestamp = new Date().toISOString();
    console.log(`${timestamp}: ${randomstring}`);
}
logMessage();
setInterval(logMessage, 5000);
