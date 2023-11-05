"use strict";
/*
        QUESTION NO 32;

  Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a
  unique username.
• Make a list of five or more usernames called current_users.
• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the
  current_users list.
• Loop through the new_users list to see if each new username has already been used. If it has, print a message that
  the person will need to enter a
  new username. If a username has not been used, print a message saying that the username is available.
• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.*/
Object.defineProperty(exports, "__esModule", { value: true });
//     ANSWER NO 32;
let CurrentUsers = ["Raza", "Hasan", "Shoaib", "Kashan", "Ali"];
let newUsers = ["raza", "shahzaib", "Ali", "nawaz", "Kashan", "mahid", "nehal", "Shoaib"];
function checkUsers(currentUsers, newUsers) {
    const lowercaseCurrentUsers = currentUsers.map(user => user.toLowerCase());
    for (const newuser of newUsers) {
        const lowercaseNewUsers = newuser.toLowerCase();
        if (lowercaseCurrentUsers.includes(lowercaseNewUsers)) {
            console.log(`Username "${newuser}" is already taken, Please enter a new username`);
        }
        else {
            console.log(`Username "${newuser} is available`);
        }
    }
}
console.log("");
console.log(`Current Users : ${CurrentUsers}`);
console.log("");
checkUsers(CurrentUsers, newUsers);
