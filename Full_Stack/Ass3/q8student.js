"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
var Student = /** @class */ (function () {
    function Student(name, age) {
        this.name = name;
        this.age = age;
        this.name = name;
        this.age = age;
    }
    Student.prototype.displayInfo = function () {
        console.log("Name: ".concat(this.name, ", Age: ").concat(this.age));
    };
    return Student;
}());
exports.Student = Student;
