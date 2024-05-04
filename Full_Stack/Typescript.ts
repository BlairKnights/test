// https://www.tutorialsteacher.com/typescript/first-typescript-program
function addNumbers(a: number, b: number) { 
    return a + b; 
} 

var sum: number = addNumbers(10, 15) 

console.log('Sum of the two numbers is: ' +sum); 

// https://www.tutorialsteacher.com/typescript/typescript-number
let first:number = 123; // number 
let second: number = 0x37CF;  // hexadecimal
let third:number=0o377 ;      // octal
let fourth: number = 0b111001;// binary  

console.log(first);  // 123 
console.log(second); // 14287
console.log(third);  // 255
console.log(fourth); // 57 

https://www.tutorialsteacher.com/typescript/typescript-string 

let employeeName:string = "John Smith"; 
let employeeDept:string = "Finance"; 

// Pre-ES6 
let employeeDesc1: string = employeeName + " works in the " + employeeDept + " department."; 

// Post-ES6 
let employeeDesc2: string = `${employeeName} works in the ${employeeDept} department.`; 

console.log(employeeDesc1);//John Smith works in the Finance department. 
console.log(employeeDesc2);//John Smith works in the Finance department. 

//https://www.tutorialsteacher.com/typescript/typescript-booleanhttps://www.tutorialsteacher.com/typescript/typescript-boolean

//IMP DATA TYPES: ENUM INTERFACES CLASS GENERICS