"use strict";
/* global Account  */

const acc = require("./account.js");//with node need the name of your file with your functions here
const Account = acc.Account;  //do this for all of the functions used in the Mocha tests

/* exports at end of file since exporting an object, which can only be referenced after definition   */

class CheckingAccount extends Account {
    constructor(number, balance, overdraft) {
        super(number, balance);
        this.overdraft = overdraft;
    }

    setOverdraft(overdraftlimit) {
        if (overdraftlimit <= 0) {
            throw new RangeError("amout limitation should  has to be greater than zero");
        }
        this.overdraft = overdraftlimit;

    }


    getOverdraft() {
        return this.overdraft;
    }

    withdraw(amount) {
        super.withdraw(amount);
        if (amount >= this.overdraft) {
            throw Error("The amount is Over limit");
        }
    }


    toString() {

        return super.toString() + " " + this.overdraft;
    }


    endOfMonth() {

        if (this.getBalance() <= 0) {
            return `low balance CheckingAccount ${this.getNumber()} balance is ${this.getBalance()} over limit :${this.getOverdraft()}`
        }
    }

}


exports.CheckingAccount = CheckingAccount;

