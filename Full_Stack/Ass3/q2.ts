let BM: number = 5;
if (true) {
    let BM: number = 10; 
}
BM += 5;
console.log("\n Let- Block-scoped and mutable: "+BM); 

const BI: string = "3.14";
console.log("\n const- Block-scoped and immutable: "+BI);

function exampleFunction() {
    var FM: boolean = true;
    if (FM) {
        var FM: boolean = false; 
    }
    console.log("\n var - Function scoped and mutable: "+FM+"\n"); 
}
exampleFunction();
