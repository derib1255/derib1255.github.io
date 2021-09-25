"use strict";
/* global exports require Account   SavingsAccount CheckingAccount */

/* exports at end of file since exporting an object, which can only be referenced after definition   */

const acc = require("./account.js");//with node need the name of your file with your functions here
const Account = acc.Account;  //do this for all of the functions used in the Mocha tests
const chk = require("./checkingaccount.js");
const CheckingAccount = chk.CheckingAccount;
const sav = require("./savingsaccount.js");
const SavingsAccount = sav.SavingsAccount;


class Bank {
    static nextNumber = 0
    constructor() {
        this.account = [];
    }

    addAccount() {
        let accountnumber = prompt("add acount number ", 1);
        let intialbalance = +prompt("add initial deposit amout ", 2000);
        let account = new Account(accountnuber, intialbalance);


        for (let member of this.account) {
            let acountnum = member.number;
            if (acountnum !== accountnumber) {
                this.account.push(account);

            }

        }

        return accountnumber;
    }


    addSavingsAccount(interest) {
        let accountnum = +prompt("enter accountnumber");
        interest = +prompt("Enter interest rate ", 2);
        let acc = this.account.find((intem) => intem.accountnumber === accountnum);

        if (acc) {
            acc.setInterest(interest);
            return acc.getNumber();
        }

    }


    addCheckingAccount(overdraft) {
        let accountnum = +prompt("enter accountnumber");
        overdraft = +prompt("Enter interest rate ", 2);
        let acc = this.account.find((intem) => intem.accountnumber === accountnum);
        if (acc) {
            acc.setOverdraft(overdraft);
            return acc.getNumber();
        }

    }

    closeAccount(number) {
        let acc = this.account.find((intem) => intem.accountnumber === number);
        for (let member of this.account) {
            if (acc) {
                delete member;
                return acc.getNumber();
            }
        }

    }

    accountReport() {
        for (const elements of this.account) {
            nextNumber = nextNumber + 1;

            let statics = `Acount number: ${nextNumber}  it is $${elements} : it has  $${elements.getBalance()}"\n"
                              interst rate  ${elements.getInterst()}  and Overdraft  ${elements.getOverdraft()}`

            return statics + "\n";
        }

    }



    endOfMonth() {
        for (const element of this.Account) {
            console.log(element.endOfMonth());
        }
    }

}

exports.Bank = Bank;