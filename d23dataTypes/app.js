
"use strict";
/* eslint-disable */
 
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
module.exports = {​​​​​​ ucFirst, getMaxSubSum, truncate , camelize,extractCurrencyValue}​​​​​​; //add all of your function names here that you need for the node mocha tests


 
function ucFirst(str){​​​​​​
if (!str) returnstr;
 
return str[0].toUpperCase() + str.slice(1);
  }​​​​​​
 
function checkSpam(str){​​​​​​
letlowerStr = str.toLowerCase();
 
returnlowerStr.includes('viagra') || lowerStr.includes('xxx');

  }​​​​​​
 
function truncate(str, maxlength){​​​​​​
return (str.length > maxlength) ?
str.slice(0, maxlength - 1) + '…' : str;
 
  }​​​​​​



 
/**
 * 
 * @param{​​​​​​Array}​​​​​​arr of numbers
 * @returns{​​​​​​number}​​​​​​ the total of the maximal subarray

 */
function getMaxSubSum(arr){​​​​​​
 
lettotal = [];
for(leti = 0 ; i < arr.length; i++){​​​​​​
letsum = 0;
for(letj = i ; j < arr.length ; j++){​​​​​​
sum += +arr[j]
total.push(sum);
    }​​​​​​
    }​​​​​​
return(Math.max(...total));
    }​​​​​​
 
function extractCurrencyValue(str) {​​​​​​
return +str.slice(1);
}


