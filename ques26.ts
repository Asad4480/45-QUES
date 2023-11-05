/*
      QUESTION NO 26;
 Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and
write an if-else chain.

• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

• If the alien’s color isn’t green, print a statement that the player just earned 10 points.

• Write one version of this program that runs the if block and another that runs the else block.*/

//     ANSWER NO 26;

// Write one version of this program that runs the if block ;

let alienColor: string = ("green")


console.log("1st version");
if (alienColor === "green")
{
    console.log("player won 5 points for shoot the alien")
}
else if(alienColor !== "green"){
    console.log("player won 10 points for shoot the alien")
}


console.log("2nd version");
// Another that runs the else block.
alienColor = ("blue")
if (alienColor === "green")
{
    console.log("player won 5 points for shoot the alien")
}
else if(alienColor !== "green"){
    console.log("here we run else block");
    console.log("player won 10 points for shoot the alien")
}



export{}