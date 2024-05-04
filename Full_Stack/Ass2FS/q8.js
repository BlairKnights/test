const iterate = (next, seed) => 
{
    let result = [],
    val = [null, seed];
    while (val = next(val[1])) 
        result.push(val[0]);
    return result;
};

var next = n => (n > 5 ? false : [n, n + 1]);
console.log("\n"+iterate(next, 1)+"\n");
