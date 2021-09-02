"use strict";
/*eslint-disable
 */
const assert = require("assert");

describe("test of sum", function () {
    it("tests 123 input", function () {
        assert.equal(SumDiget(1233), 9);
    });
    it("tests 108 input", function () {
        assert.equal(SumDiget(102), 3);
    });
    it("tests sum 8 input", function () {
        assert.equal(SumDiget(8), 8);
    });
});



function SumDiget(n) {
    let sum = 0;
    while (n != 0) {//234;
        sum = sum + n % 10;//234%10=4//23%10=3 0+4+3+2
        n = n / 10;//234/10=23//23/10=2     
    }
    return parseInt(sum);
}
