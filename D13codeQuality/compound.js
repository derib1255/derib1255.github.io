"use strict";
/*eslint-disable
 */
const assert = require("assert");

describe("test of compoundInterst", function () {
    it("monthly annual compound Interst in 1 year ", function () {
        assert.equal(compoundInterest(100, 10, 1), 110);
    });
    it("monthly annual compound interst  in 10 years ", function () {
        assert.equal(compoundInterest((10000, 5, 10), 16471));
    });
});





console.log("expect 110.47", compoundInterest(100, 10, 1));
console.log("expect 16470.09", compoundInterest(10000, 5, 10));



function compoundInterest(initalAMOUNT, annualInterstrate, numberOfYears) {
    const monthlyrate = annualInterstrate / (12 * 100);
    const compoundAmount = initalAMOUNT * (Math.pow((1 + monthlyrate), (numberOfYears * 12)));
    return parseInt(compoundAmount);
}
