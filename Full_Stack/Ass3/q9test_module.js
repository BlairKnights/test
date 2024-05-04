"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.greet = exports.add = exports.name = exports.hello = void 0;
exports.hello = 'Hello,';
exports.name = 'TypeScript!';
function add(a, b) {
    return a + b;
}
exports.add = add;
function greet(name) {
    return "Hello, ".concat(name, "!");
}
exports.greet = greet;
