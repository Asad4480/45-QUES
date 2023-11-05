"use strict";
/*
 QUESTION NO 34;
  Pizzas: Think of at least three kinds of your favorite pizza. Store these
pizza names in a array, and then use a for loop to print the name of each pizza.

• Modify your for loop to print a sentence using the name of the pizza
instead of printing just the name of the pizza. For each pizza you should
have one line of output containing a simple statement like I like pepperoni
pizza.

• Add a line at the end of your program, outside the for loop, that states
how much you like pizza. The output should consist of three or more lines
about the kinds of pizza you like and then an additional sentence, such as
I really love pizza!*/
Object.defineProperty(exports, "__esModule", { value: true });
// ANSWER NO 34;
let favoritePizza = ["chicken tikka", "fajita", "bbq", "malai boti"];
console.log(`\nMy favorite Pizza is:`);
for (let i = 0; i < favoritePizza.length; i++) {
    console.log(favoritePizza[i]);
}
console.log(`\nI like these Pizza`);
for (let i = 0; i < favoritePizza.length; i++) {
    console.log(`i like ${favoritePizza[i]} pizza`);
}
console.log(`\nI really love Pizza:`);
