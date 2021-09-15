"use strict";


module.exports = { sumTo, factorial, fibonacci, outputList, outputListLoop, reverseList, reverseListLoop }; //add all of your function names here that you need for the node mocha tests




function sumTo(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}


function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
}

function fibonacci(n) {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

function outputListLoop(list) {
    let tmp = list;

    while (tmp) {
        alert(tmp.value);
        tmp = tmp.next;
    }

}

function outputList(list) {

    alert(list.value);

    if (list.next) {
        outputListLoop(list.next);
    }

}

function reverseList(list) {

    if (list.next) {
        printReverseList(list.next);
    }

    alert(list.value);
}


function reverseListLoop(list) {
    let arr = [];
    let tmp = list;

    while (tmp) {
        arr.push(tmp.value);
        tmp = tmp.next;
    }

    for (let i = arr.length - 1; i >= 0; i--) {
        alert(arr[i]);
    }
}