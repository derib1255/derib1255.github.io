"use strict";
/* exports at end of file since exporting an object, which can only be referenced after definition */
/* eslint-disable */

function askPassword(ok, fail, password) {

    if (password === "rockstar") {
        return ok();
    }

    else

        return fail();

}

let user = {

    name: 'John',

    loginOk() {
        console.log(`${this.name} logged in`);
    },

    loginFail() {
        console.log(`${this.name} failed to log in`);
    },

};

askPassword(user.loginOk.bind(user), user.loginFail.bind(user), "rockstar");

function askPassword2(ok, fail, password) {
    if (password == "rockstar")

        return ok();

    else return fail();
}



let user2 = {
    name: 'John',

    login(result) {
        console.log(this.name + (result ? ' logged in' : ' failed to log in'));
    }
};
askPassword2(user2.login.bind(user, true), user2.login.bind(user2, true), "rockstar");



/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser 
*/
module.exports = { askPassword, user, askPassword2, user2 }; //add all of your function names here that you need for the node mocha tests