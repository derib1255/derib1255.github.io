  

"use strict";
 
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser
*/
module.exports = {​​​​​​maxOfThree, sum, multiply,reverseArray,
findLongestWord,reverseArrayInPlace ,scoreExams,generateArray}​​​​​​; //add all of your function names here that you need for the node mocha tests
 
/**
 * 
 * @param{​​​​​​number}​​​​​​a is a number
 * @param{​​​​​​number}​​​​​​b is a number 
 * @param{​​​​​​number}​​​​​​c is a number
 * @returns{​​​​​​number}​​​​​​ largest of a, b, c
 */
function maxOfThree(a, b, c){​​​​​​ 
if(a>b&& a>c){​​​​​​
returna;
       }​​​​​​
else if(b>a && b>c){​​​​​​
   return b;
         }​​​​​​
else
returnc;
}​​​​​​
 
/**
 * 
 * @param{​​​​​​Array}​​​​​​arr of numbers
 * @returns{​​​​​​number}​​​​​​ sum of arr numbers
 */
function sum(arr){​​​​​​
let tot = 0;
for (const number of arr){​​​​​​
tot += number;
    }​​​​​​
returntot;
}​​​​​​
 
/**
 * 
 * @param{​​​​​​Array}​​​​​​arr of numbers
 * @returns{​​​​​​number}​​​​​​ sum of arr numbers
 */
function multiply(arr){​​​​​​
lettot = 1;
for(let array of arr){​​​​​​
tot=tot*array;
      }​​​​​​
 
returntot;
 
}​​​​​​
 
function findLongestWord(arraywords){​​​​​​
letword="";
for(let arr of arraywords){​​​​​​
if(arr.length>word.length){​​​​​​
word=arr;
               }​​​​​​
         }​​​​​​
 
returnword.length;   
 
}​​​​​​
function reverseArray(arr){​​​​​​
letreverseArray=[];
 
for(letk=0;k<arr.length;k++){​​​​​​
reverseArray[k]=arr[arr.length-1-k];
            }​​​​​​
returnreverseArray;
}​​​​​​
 
function reverseArrayInPlace(array){​​​​​​
letreverseArray=[];
for(letk=0;k<array.length;k++){​​​​​​
reverseArray.push(array.pop());
 
    }​​​​​​
returnreverseArray;
 
}​​​​​​
 
function scoreExams(student,answer){​​​​​​
letsecor=[];
for(letx=0;x<student.length;x++){​​​​​​
letcount=0;
for(let k=0;k<student[x].length;k++){​​​​​​
if(student[x][k]===answer[k]){​​​​​​
count++;
               }​​​​​​
            }​​​​​​
secor[x]=count;
        }​​​​​​
 
returnsecor;
}​​​​​​
function generateArray(num1,num2){​​​​​​//3,3 9

letfill=[];//intialized for single array
 
letarray=[];//intialized for multipdimanition array;

for(letk=1;k<=(num1*num2);k++){​​​​​​
fill.push(k);
          }​​​​​​
 
for(leti=0;i<num1;i++){​​​​​​//2,3
array[i]=[];
for(letj=0;j<num2;j++){​​​​​​
array[i][j]=fill.shift();
        }​​​​​​
    }​​​​​​
 
returnarray;
}​​​​​​

