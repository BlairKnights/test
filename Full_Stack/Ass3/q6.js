"use strict";
var Bus = /** @class */ (function () {
    function Bus(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    return Bus;
}());
var myBus = new Bus("Volvo", "9400 B11R", 2019);
console.log("\nMake:", myBus.make);
console.log("Model:", myBus.model);
console.log("Year:", myBus.year, "\n");
