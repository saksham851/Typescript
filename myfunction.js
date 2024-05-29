"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    //And we have not to do any conditional checking..
    // num.toUpperCase();//not allowed in typescript
    return num + 2;
}
//In case of variable it can manageor infer by itself so it is not compulsory to add annotaion 
//all the time but quite important/compulsory for functions...
var loginUser = function (name, email, ispaid) {
    if (ispaid === void 0) { ispaid = false; }
};
function signupUser(name, email, isPaid) {
}
addTwo(5);
signupUser("saksham", "sak@123", true);
loginUser("S", "S@123");
