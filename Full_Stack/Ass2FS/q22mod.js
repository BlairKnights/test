function getPower(base, exponent) {
  return base ** exponent; 
}

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

function roundToDecimalPlace(number, decimals) {
  return Math.round(number * (10 ** decimals)) / (10 ** decimals);
}

module.exports = { capitalize, roundToDecimalPlace };
