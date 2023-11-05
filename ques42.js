"use strict";
/*
QUESTION NO 42;
Great Magicians: Start with a copy of your program from Exercise 41.
Write a function called make_great() that modifies the array of magicians by adding
the phrase the Great to each magician’s name. Call show_magicians() to
see that the list has actually been modified.*/
Object.defineProperty(exports, "__esModule", { value: true });
// ANSWER NO 42;
// Array of megician name
let megiciansNames = ["Harry Houdini", "Penn & Teller", "Derren Brown", "Dai Vernon", "Lance Burton"];
function makeGreat(megicians) {
    for (const megician of megicians) {
        console.log(`the Great ${megician}`);
    }
}
//Call the function to show the orignal megician's name
console.log("Great Megicians:");
makeGreat(megiciansNames);
