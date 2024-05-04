const invertKeyValues = (obj, custom) =>
    Object.keys(obj).reduce(
    (acc, key) => 
    {
        const val = custom ? custom(obj[key]) : obj[key];   
        //if custom function exists, use it
        acc[val] = acc[val] || [];
        //retrieve or write new
        acc[val].push(key);
        //append
        return acc;
    }, 
    {}
);

console.log(invertKeyValues({ a: 1, b: 2, c: 1 }));
console.log(invertKeyValues({ a: 1, b: 2, c: 1 }, value => 'group' + value));