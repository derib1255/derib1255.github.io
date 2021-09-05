"use strict";
/*eslint-disable
 */

const assert = require("assert");
describe("test of Computdowen", function () {
    it("test of Computdowen", function () {
        assert.equal(calcDownpayment(40000), 2000);
    });
    it("test of Computdowen", function () {
        assert.equal(calcDownpayment(50000), 2500);
    });
    it("test of Computdowen", function () {
        assert.equal(calcDownpayment(100000), 7500);
    });
    it("test of Computdowen", function () {
        assert.equal(calcDownpayment(250000), 25000);
    });

});


console.log("expect 2000: ", calcDownpayment(40000));
console.log("expect 2500: ", calcDownpayment(50000));
console.log("expect 7500: ", calcDownpayment(100000));
console.log("expect 25000: ", calcDownpayment(250000));


function calcDownpayment(costOFHouse) {

    if (costOFHouse >= 200000) {
        return 20000 + (costOFHouse - 200000) * 0.1;
    }
    else if (costOFHouse >= 100000) {
        return 7500 + (costOFHouse - 100000) * 0.15;
    }
    else if (costOFHouse >= 50000) {
        return 2500 + (costOFHouse - 50000) * 0.1;

    }
    else {
        return costOFHouse * 0.05;
    }


}
