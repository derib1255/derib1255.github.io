"use strict";
/*eslint-disable */
constassert = require("assert");
/* product of a number's digits */

describe("test the product  a number's digit", function () {
    it("tests the product of a nuber's  1234   digit", function () {
        assert.strictEqual(multDigits(1234), 24);
    });
    it("tests the product of a number's  102  digit", function () {
        assert.strictEqual(multDigits(102), 0);
    });
    it("tests the product of a number 8 ", function () {
        assert.strictEqual(multDigits(8), 8);
    });

});



function multDigits(num) {

    letproduct = 1;
    lettemp = num;
    while (temp != 0) {
        product = product * (temp % 10);
        temp = Math.floor(temp / 10);
    }
    returnparseInt(product);
}