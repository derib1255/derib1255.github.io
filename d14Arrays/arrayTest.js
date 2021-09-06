"use strict";

/* You need the assert and function name declarations to test in node.  
Comment these out when you send it to the browser with the index.html mocha setup page.
*/
const assert = require("assert");  //always need this with node
const myExports = require("./Arrays.js");  //with node need the name of your file with your functions here
const maxOfThree = myExports.maxOfThree;  //do this for all of the functions used in the Mocha tests
const multiply = myExports.multiply;
const sum = myExports.sum;
const findLongestWord = myExports.findLongestWord;
const reverseArray = myExports.reverseArray;
const reverseArrayInPlace = myExports.reverseArrayInPlace;
const scoreExams = myExports.scoreExams;
const generateArray = myExports.generateArray;

/* global assert maxOfThree sum multiply findLongestWord reverseArray reverseArrayInPlace scoreExams generateArray */

/* 1.   1.  Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.  */
describe("maxOfThree", function () {
    it("tests 1 2 3", function () {
        assert.strictEqual(maxOfThree(1, 2, 3), 3);
    });
    it("tests 1 3 2", function () {
        assert.strictEqual(maxOfThree(10, 30, 20), 30);
    });
    it("tests 2 1 3", function () {
        assert.strictEqual(maxOfThree(2, 1, 3), 3);
    });
    it("tests 2 3 1", function () {
        assert.strictEqual(maxOfThree(22, 33, 11), 33);
    });
    it("tests 3 2 1", function () {
        assert.strictEqual(maxOfThree(3, 2, 1), 3);
    });
    it("tests 3 1 2", function () {
        assert.strictEqual(maxOfThree(333, 111, 222), 333);
    });
    it("tests -1 -2 -3", function () {
        assert.strictEqual(maxOfThree(-1, -2, -3), -1);
    });
    it("tests -1 -2 -2", function () {
        assert.strictEqual(maxOfThree(-1, -2, -2), -1);
    });
    it("tests 5 5 -1", function () {
        assert.strictEqual(maxOfThree(5, 5, -1), 5);
    });
    it("tests -2 0 -2", function () {
        assert.strictEqual(maxOfThree(-2, 0, -2), 0);
    });
    it("tests 6 6 6", function () {
        assert.strictEqual(maxOfThree(6, 6, 6), 6);
    });
});



describe("sum and multiply", function () {
    it("tests sum of 1 2 3 and 1 2 3 4", function () {
        assert.strictEqual(sum([1, 2, 3]), 6);
        assert.strictEqual(sum([1, 2, 3, 4]), 10);
    });
    it("tests multiply 3 2 10 and 1 2 3 4", function () {
        assert.strictEqual(multiply([3, 2, 10]), 60);
        assert.strictEqual(multiply([1, 2, 3, 4]), 24);
    });
});

describe("findLongestWord", function () {
    it("tests longest", function () {
        assert.strictEqual(findLongestWord(["this", "is", "a", "test", "longest"]), 7);
    });
    it("tests longest with spaces", function () {
        assert.strictEqual(findLongestWord(["this", "is", "a word with spaces", "test", "longest"]), 18);
    });
    it("tests longest with equal length words", function () {
        assert.strictEqual(findLongestWord(["is", "is", "is", "is", "is"]), 2);
    });
    it("tests longest with some words equal length", function () {
        assert.strictEqual(findLongestWord(["this", "is", "this", "is", "is"]), 4);
    });
});


describe("reverseArray", function () {
    it("tests reverseArray odd number elements", function () {
        assert.deepEqual(reverseArray(["A", "B", "C"]), ["C", "B", "A"]);
    });
    it("tests reverse even number elements", function () {
        assert.deepEqual(reverseArrayInPlace(["A", "B", "C", "D"]), ["D", "C", "B", "A"]);
        assert.deepEqual(reverseArray(["A", "B", "C", "D"]), ["D", "C", "B", "A"]);
    });
    it("tests reverse odd number elements", function () {
        assert.deepEqual(reverseArrayInPlace([1, 2, 3, 4, 5]), [5, 4, 3, 2, 1]);
        assert.deepEqual(reverseArray([1, 2, 3, 4, 5]), [5, 4, 3, 2, 1]);
    });
});



describe("score exam", function () {
    const studentAnswers = [[1, 1, 2, 4], [2, 1, 2, 2], [3, 1, 3, 4]];
    const correctAnswers = [3, 1, 2, 4];
    it("exam with 3 students", function () {
        assert.deepEqual(scoreExams(studentAnswers, correctAnswers), [3, 2, 3]);
    });
    it("exam with 3 students: one student has all incorrect answers", function () {
        assert.deepEqual(scoreExams([[1, 1, 2, 4], [2, 1, 2, 2], [1, 2, 3, 1]], correctAnswers), [3, 2, 0]);
    });
    it("exam with 3 students: one student has all correct answers", function () {
        assert.deepEqual(scoreExams([[1, 1, 2, 4], [2, 1, 2, 2], [3, 1, 2, 4]], correctAnswers), [3, 2, 4]);
    });
});


describe("generate array", function () {
    const expected33 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
    const expected23 = [[1, 2, 3], [4, 5, 6]];
    const expected21 = [[1], [2]];
    it("expected33", function () {
        assert.deepEqual(generateArray(3, 3), expected33);
    });
    it("expected23", function () {
        assert.deepEqual(generateArray(2, 3), expected23);
    });
    it("expected21", function () {
        assert.deepEqual(generateArray(2, 1), expected21);
    });
});

