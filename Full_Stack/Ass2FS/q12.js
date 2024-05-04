let longest = (...vals) => [...vals].sort((a, b) => b.length - a.length)[0];

// ...x means any no. of args
// criterion for sorting is given, try swapping lengths
// [0] defines which element of the result is to be returned

console.log(longest('this', 'is', 'a', 'testcase'));
console.log(longest(...['a', 'ab', 'abc']));
console.log(longest(...['a', 'ab', 'abc'], 'abcd'));
console.log(longest([1, 2, 3], [1, 2], [1, 2, 3, 4, 5]));
console.log(longest([1, 2, 3], 'foobar'));