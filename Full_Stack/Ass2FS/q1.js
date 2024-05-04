function add(a, b)
{
    return a + b;
}

let a = parseInt(process.argv[2]);
let b = parseInt(process.argv[3]);
let result = add(a,b)

console.log("\n The result of addition is "+result+"\n");
  