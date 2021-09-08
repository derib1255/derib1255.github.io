"use strict";

let calculator = {};
// implement this
calculator.read = function () {
    this.a = +prompt("Enter first number", 0);
    this.b = +prompt("Enter next number", 0);
};
calulator.sum = function () {

    return this.a + this.b;
},

    calculator.mul = function () {
        return this.a * this.b;
    },

    calculator.read();
alert(calculator.sum());
alert(calculator.mul());



/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
/* must be at end of file if are exporting an object so the export is after the definition */
module.exports = { calculator }; //add all of your object names here that you need for the node mocha tests