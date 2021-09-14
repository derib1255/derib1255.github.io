"use strict";

const { timeStamp } = require("console");

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
module.exports = { Accumulator, Calculator }; //add all of your function names here that you need for the node mocha tests

/**
 * 
 * @returns {Accumulator} constructor function
 */
function Accumulator() {
    //implement this
    function Accumulator(currentValue,increment) {
        this.currentValue=currentValue;
        this.increment=increment;
        this.accumlet=function(){
            this.currentValue +=increment
        }
      this.report=function(){
          return currentValue;
      }
    
        };
      
      }
      



/**
 * @returns {Calculator} this is a constructor function
 */
function Calculator() {
    //implement this

    calculator.setvalues=function(x,y){
       
        this.x=x;
        this.y=y;
    },
    calculator.sum=function(){
        return this.x+this.y;
    },
    calculator.mul=function(){
        return this.x+this.y;
    }


}


    console.log(calculator. setvalues(2,3));
    console.log(calculator.sum);
    console.log(calculator.mul);
