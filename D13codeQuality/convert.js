"use strict";
/*eslint-disable */
const assert = require("assert");
/*Temprature scale Conversion */

describe("test the conversion of degree Fahrenhiet to Celsus", function () {
    it("tests 49 Fahrenhiet to Celsus.", function () {
        assert.strictEqual(convertFahrenhiet(49), 9);
    });
    it("tests 70 Fahrenhiet to Celsus", function () {
        assert.strictEqual(convertFahrenhiet(70), 21);
    });
    it("tests 90 Fahrenhiet to Celsus", function () {
        assert.strictEqual(convertFahrenhiet(90), 32);
    });

});

function convertFahrenhiet(tempfahrenheit) {
    const tempInCelsius = parseInt(5 / 9 * (tempfahrenheit - 32));;
    return tempInCelsius

}

console.log(convertFahrenhiet(49));
console.log(convertFahrenhiet(70));
console.log(convertFahrenhiet(90));