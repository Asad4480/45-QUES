/*
QUESTION NO 41;
Magicians: Make a array of magician’s names. Pass the array to a function
called show_magicians(), which prints the name of each magician in the array. */


// ANSWER NO 41;

let megicianName = ["Harry Houdini","Penn & Teller","Derren Brown","Dai Vernon","Lance Burton"]

function show_magicians(megicians:string[]) {
    for (const megician of megicians){
        console.log(megician)
    }
}

show_magicians(megicianName)


export{}