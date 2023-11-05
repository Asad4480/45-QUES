"use strict";
/*
        QUESTION NO 31;

 No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.

• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed.*/
Object.defineProperty(exports, "__esModule", { value: true });
//    ANSWER NO 31
//   Non empty array
console.log(`\nfor non empty array`);
let userNames = ["admin", "shahzain", "Raza", "Hasan", "shoaib"];
function greetUser(usernames) {
    if (usernames.length === 0) {
        console.log("we need to find some users");
        return;
    }
}
;
for (let username of userNames) {
    if (username.toLowerCase() === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
}
;
greetUser(userNames);
// Empty array 
userNames = [];
console.log(`\n\nfor empty array:`);
greetUser(userNames);
