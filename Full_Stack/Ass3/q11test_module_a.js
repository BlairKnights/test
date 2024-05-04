"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sayHelloFromA = void 0;
var q11test_module_b_1 = require("./q11test_module_b");
function sayHelloFromA() {
    console.log('Hello from module A');
    (0, q11test_module_b_1.sayHelloFromB)();
}
exports.sayHelloFromA = sayHelloFromA;
