const pick = (obj, keys) =>
    keys.reduce
    (
        (result, key) => 
        (
            key in obj && (result[key] = obj[key]), result
        ), 
        {} //initial value of 'result', for safe first iteration
    );

console.log(pick({ a: 1, b: '2', c: 3 }, ['a', 'c']));