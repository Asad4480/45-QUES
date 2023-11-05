"use strict";
/*
        QUESTION NO 27;
 Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.

• If the alien is green, print a message that the player earned 5 points.

• If the alien is yellow, print a message that the player earned 10 points.

• If the alien is red, print a message that the player earned 15 points.

• Write three versions of this program, making sure each message is printed for the appropriate color alien.*/
Object.defineProperty(exports, "__esModule", { value: true });
// ANSWER NO 27;
// 1st version   =======================================================================================
console.log("1st version");
let alienColor1 = "green";
if (alienColor1 === "green") {
    console.log("player won 5 points for shoot the alien");
}
else if (alienColor1 === "blue") {
    console.log("player won 10 points for shoot the alien");
}
else if (alienColor1 === "red") {
    console.log("player won 10 points for shoot the alien");
}
// 2nd version ============================================================================================
console.log("2nd version");
alienColor1 = "blue";
if (alienColor1 === "green") {
    console.log("player won 5 points for shoot the alien");
}
else if (alienColor1 === "blue") {
    console.log("player won 10 points for shoot the alien");
}
else if (alienColor1 === "red") {
    console.log("player won 10 points for shoot the alien");
}
// 3rd version  ============================================================================================
console.log("3st version");
alienColor1 = "red";
if (alienColor1 === "green") {
    console.log("player won 5 points for shoot the alien");
}
else if (alienColor1 === "blue") {
    console.log("player won 10 points for shoot the alien");
}
else if (alienColor1 === "red") {
    console.log("player won 10 points for shoot the alien");
}
