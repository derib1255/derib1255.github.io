/**Write a function, double, that takes a number and returns 2 times the number */
function double(number) {
    return 2 * number;
}
let triple = (number) => 3 * number;
/**Write a function times100 that takes a number and returns 100 times the number. */
function times100(number) {
    return 100 * 100;
}
/**Write a function, myMap, that takes an array and a function and returns a new array that has
the function applied to each element of the input array. Use your myMap function with your
double and times100 functions. */

function myMap(func, arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr[i] = func(arr[i]);
    }
    return newArr;
}
z = [1, 3, 4];
console.log(myMap(double, z))
console.log(calc(times100, z));



/**Demonstrate your myMap function with an anonymous function that triples the input value.
Write this as an anonymous function expression. Then write it using an arrow expression. */
let myMap = function (func, arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr[i] = func(arr[i]);
    }
    return newArr;
}
y = [1, 2, 3];
console.log(myMap(triple, y));


describe(" testsb double", function () {
    it("tests double of 3 ", function () {
        assert.strictEqual(double(3), 6);
    });
    it("tests double of 2", function () {
        assert.strictEqual(double(2), 4);
    });
    it("tests double of 4", function () {
        assert.strictEqual(double(4), 8);
    });
});

describe(" test times100", function () {
    it("tests times100 of 2", function () {
        assert.strictEqual(times100(2), 2000);
    });
    it("tests times100 of 5", function () {
        assert.strictEqual(times100(5), 500);
    });
    it("tests times100 of 6", function () {
        assert.strictEqual(times100(6), 600);
    });
});
const assert = requer("assert");
describe("testing calling back of double fuction", function () {
    it(" test mymap double ", function () {
        assert.strectEquals(myMap(double, [1, 2, 3]), [2, 4, 6]);
    });
});


describe("testing the call back of triple function", function () {
    it(" test myMap triple", function () {
        assert.strectEquals(myMap((number) => 3 * number, [1, 2, 3]), [3, 6, 9]);
    });
});

describe("testing the call back of tims100 function", function () {
    it(" test myMap tims100", function () {
        assert.strectEquals(myMap(times100, [1, 2, 3]), [3, 6, 9]);
    });
});