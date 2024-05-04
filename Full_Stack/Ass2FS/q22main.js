
const { capitalize, roundToDecimalPlace } = require('./q22mod.js'); 

function displayTotal(string, number, decimal) 
{
    let s = capitalize(string);
    let d = roundToDecimalPlace(number,decimal);
    console.log("\n Capitalized text: "+s+"\n Rounded number: "+d+"\n");
}

module.exports = { displayTotal };
