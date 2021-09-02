
"use strict";
/*eslint-disable */
constassert = require("assert");
/*the magnitude of two point coordinate */
describe("test the distance of two coordinte point ", function () {
    it("tests the distance of point(0,0) and point(5,5) ", function () {
        assert.strictEqual(calcDistance(0, 0, 5, 5), 7);
    });
    it("tests the distance of point(0,4) and point(7,8)", function () {
        assert.strictEqual(calcDistance(0, 4, 7, 8), 8);
    });
    it("tests the distance of point(3,4) and point(6,6) ", function () {
        assert.strictEqual(calcDistance(3, 4, 6, 6), 3);
    });

});
function calcDistance(x1, y1, x2, y2) {
    constdistanceOfTowPoint = (Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)));
    returnparseInt(distanceOfTowPoint);
}

console.log("expected 7.07: ", +calcDistance(0, 0, 5, 5));
console.log("expected 7.07: ", +calcDistance(0, 4, 7, 8));
console.log("expected 7.07: ", +calcDistance(3, 4, 6, 6));