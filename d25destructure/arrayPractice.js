"use strict"
/* eslint-disable */
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
module.exports = { doubleNums, doubleAges, filterEven, filterOver10, findEvenNum, findEvenAge,includesEvenNum,includesEvenAge,findAverageOfNumbers,findMaxOfNumbers,findMaxOfAges}; //add all of your function names here that you need for the node mocha tests
 
function doubleNums(arr){
return arr.map(num => num * 2);
}
function doubleAges(arr){
     return(arr.map((item)=>{
             item.age=item.age*2;
             return item;
        }));
 
}
 
function filterEven(arr){;
     return (arr.filter((item)=>(item.age%2===0)? item:null));
     }
 
function filterOver10(arr) {
    return(arr.filter((item)=>item.age>10));
 
        }
 
function findEvenNum(arr){
    return (arr.filter((item)=>(item%2==0)?item:null));
 
  }
 
function findEvenAge(arr){
    return (arr.find((item)=>(item.age%2===0)? item:null));
      }


 
function includesEvenNum(arr){
 
    let even=arr.find((item)=>item%2===0);
    return (arr.includes(even)); 
       }
 
function includesEvenAge(arr){
    let evenage=arr.find((item)=>(item.age%2===0));
    return (arr.includes(evenage));
 
}
function findAverageOfNumbers(arr){
    return (arr.reduce((sum, current)=> (sum + current ,0))/arr.length);
}
function findMaxOfNumbers(arr){
    return (arr.reduce((a,b) => a > b ?a : b ));
}
function findMaxOfAges(arr){
    return (arr.reduce((a,b) => a.afe > b.age ?a.age : b.age ));
}