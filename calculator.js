"use strict";

const { readFile, read } = require("fs");

const calculator = function () { };

let calculator = {
    read() {
        this.a = +prompt("Enter first number", 0);
        this.b = +prompt("Enter next number", 0);
    },
    sum() {
        return this.a + this.b;
    },

    mul() {
        return this.a * this.b;
    },


};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());
// implement this








/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
/* must be at end of file if are exporting an object so the export is after the definition */
module.exports = { calculator }; //add all of your object names here that you need for the node mocha tests