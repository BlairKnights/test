let n1 = process.argv[2];
let n2 = process.argv[3];

let comparison = (a, b) => a > b ? "true" : "false";
let result = comparison(n1, n2);

console.log(`\n Number ${n1} is greater than number ${n2}? => ${result} \n`);