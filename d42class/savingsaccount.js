"use strict";
/* global Account require  */
const acc = require("./account.js");//with node need the name of your file with your functions here
const Account = acc.Account;  //do this for all of the functions used in the Mocha tests

/* exports at end of file since exporting an object, which can only be referenced after definition   */


class SavingsAccount extends Account {
    constructor(number, balnce, interest) {
        super(number, balnce);
        this.interest = interest;
    }


    setInterest(interest) {
        if (interest <= 0) {
            throw new RangeError("Interst rate should has be to be greater than zero");
        }
        else {
            this.interest = interest;
        }
    }

    getInterest() {

        return this.interest;
    }

    addInterest() {
        this.balnce += balance * interest / 100;
    }

    toString() {
        return super.toString() + " " + " interstrate is " + this.interest;
    }

    endOfMonth() {

        return (`Interest added SavingAccount ${this.getNumber()}: 
                    balace ${this.getBalance()} Interest ${this.getInterest()}`);
    }
}




/* global exports */
exports.SavingsAccount = SavingsAccount;
