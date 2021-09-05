"use strict";
/*eslint-disable
 */
const assert = require("assert");
describe("test of ComputSalesCommission", function () {
    it("tests salaried and 200 sales", function () {
        assert.strictEqual(computeSalesCommission(true, 200), 0);
    });
    it("tests not salaried and 200 sales", function () {
        assert.strictEqual(computeSalesCommission(false, 200), 0);
    });
    it("tests salaried and 300 sales", function () {
        assert.strictEqual(computeSalesCommission(true, 300), 3);
    });
    it("tests not salaried and 300 sales", function () {
        assert.strictEqual(computeSalesCommission(false, 300), 6);
    });
    it("tests salaried and 3500 sales", function () {
        assert.strictEqual(computeSalesCommission(true, 3500), 65);
    });
    it("tests not salaried and 3500 sales", function () {
        assert.strictEqual(computeSalesCommission(false, 3500), 100);
    });
});

function computeSalesCommission(Salaried, salesAmount) {


    if (Salaried === true) {

        if (salesAmount > 500) {
            // return salesAmount - 500 * 0.02 + 5;
            return ((salesAmount - 500) * 0.02 + 5);
        }
        else if (salesAmount >= 300) {
            return salesAmount * 0.01;
        }
        else
            return 0;
    }

    else
        if (salesAmount > 500) {
            return ((salesAmount - 500) * 0.03 + 10);
        }
        else if (salesAmount >= 300) {
            return (salesAmount * 0.02);
        }
    return 0;
}