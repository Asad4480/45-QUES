/*
QUESTION NO 43;

Unchanged Magicians: Start with your work from Exercise 40. Call the
function make_great() with a copy of the array of magicians’ names. Because the
original array will be unchanged, return the new array and store it in a separate array.
Call show_magicians() with each array to show that you have one array of the original
names and one array with the Great added to each magician’s name.*/


// ANSWER NO 43;


let megiciansNames = ["Harry Houdini","Penn & Teller","Derren Brown","Dai Vernon","Lance Burton"]

function showMagicians(megicians:string[]):void {
    for (const megician of megicians){
        console.log(megician)
    }
}
//megicians.map(megician => `the Great ${megician}`)
function make_great(megicians:string[]):string[]{
    let greatMagician = megicians.map(megician => `the Great ${megician}`)
    return greatMagician ;
}

// Modify the array to add "the Great" to each megician's name
let greatMagicianNames = make_great(megiciansNames)

//Call the function to show the orignal megician's name
console.log("Orignal megician:")
showMagicians(megiciansNames)
 
// Call the function to show thw great megician's name
console.log(`\nGreat Megicians:`)
showMagicians(greatMagicianNames)


export{}