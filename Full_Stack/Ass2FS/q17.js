let x = process.argv[2];

const isSymbol = val => typeof val === 'symbol';
console.log("\n Is symbol: "+isSymbol(Symbol(x))+"\n");
