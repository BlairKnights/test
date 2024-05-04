"use strict";
var BM = 5;
if (true) {
    var BM_1 = 10;
}
BM += 5;
console.log("\n Let- Block-scoped and mutable: " + BM);
var BI = "3.14";
console.log("\n const- Block-scoped and immutable: " + BI);
function exampleFunction() {
    var FM = true;
    if (FM) {
        var FM = false;
    }
    console.log("\n var - Function scoped and mutable: " + FM + "\n");
}
exampleFunction();
