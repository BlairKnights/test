function accept()
{
    let data = process.argv[2];
    let arr = data.split(",");
    console.log("\n Original input:");  console.log(arr);
    arr = arr.map(x => parseInt(x));
    console.log("\n Map function:");    console.log(arr);
    return arr;
}

let arr = accept();
let even = arr.filter(
    function(ele)
    {
        return ele % 2 === 0;
    }
);
console.log("\n Filter function:"); console.log(even);

arr.length = 0;
console.log(`\n Length function:`); console.log(arr);
for(i=0; i<even.length; i++)
{
    arr.push(even[i]);
}
console.log("\n Push function:");   console.log(arr);
console.log();