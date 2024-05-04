const mapObject = (arr, fn) =>
    arr.reduce(
        (acc, val) => 
        {
            acc[val] = fn(val); 
            return acc;
        }, 
        {}
    );

const square = arr => mapObject(arr, a => a * a);
console.log(square([1, 2, 3]));
