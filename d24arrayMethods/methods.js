"use strict"

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
module.exports = { groupById, unique, filterRangeInPlace, filterRange, Calculator }; //add all of your function names here that you need for the node mocha tests


function filterRange(arr, a, b) {
    return arr.filter(item => a <= item && item <= b);
}


function filterRangeInPlace(arr, a, b) {
    function filterRangeInPlace(arr, a, b) {

        for (let i = 0; i < arr.length; i++) {
            let mm = arr[i];


            if (mm < a || mm > b) {
                arr.splice(i, 1);
                i--;
            }
        }

    }

    let a = [5, 3, 8, 1];

    filterRangeInPlace(a, 1, 4);

    console.log(a);


    function Calculator() {

        this.methods = {
            "-": (a, b) => a - b,
            "+": (a, b) => a + b
        };

        this.calculate = function (str) {

            let split = str.split(' '),
                a = +split[0],
                op = split[1],
                b = +split[2];

            if (!this.methods[op] || isNaN(a) || isNaN(b)) {
                return NaN;
            }

            return this.methods[op](a, b);
        };

        this.addMethod = function (name, func) {
            this.methods[name] = func;
        };
    }

}

function unique(arr) {
    function unique(arr) {
        let result = [];

        for (let str of arr) {
            if (!result.includes(str)) {
                result.push(str);
            }
        }

        return result;
    }





}


function groupById(array) {
    let users = [
        { id: 'john', name: "John Smith", age: 20 },
        { id: 'ann', name: "Ann Smith", age: 24 },
        { id: 'pete', name: "Pete Peterson", age: 31 },
    ];

}



function sortByAge(arr) {
    arr.sort(function (a, b) {
        if (a.id > b.id) {
            return1;
        }
        else if (a.id === b.id) {
            return 0;
        }
        else
            return -1;
    });
 
}

