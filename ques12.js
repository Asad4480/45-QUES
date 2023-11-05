"use strict";
/*
   QUESTION NO 12:
Greetings: Start with the array you used in Exercise 11, but instead of just
printing each person’s name, print a message to them. The text of each message
 should be the same, but each message should be personalized with the person’s
 name.              */
Object.defineProperty(exports, "__esModule", { value: true });
// ANSWER NO 12:
let shahzaib = ("shahzaib is my 5 years old friend");
let areeb = ("areeb is my 4 years olf friend");
let rehman = ("rehman is my 6 years old friend");
let friendship = [shahzaib, areeb, rehman];
for (let i = 0; i < friendship.length; i++) {
    console.log(friendship[i]);
}
