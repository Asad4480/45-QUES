/* 
QUESTION NO : 29
Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that 
check for certain fruits in your array.
*/
// Define an array of favorite fruits
let favoriteFruits: string[] = ["apple", "banana", "strawberry", "orange", "kiwi"];

// Check for specific fruits
let fruitToCheck2: string = "grape";
let fruitToCheck3: string = "strawberry";
let fruitToCheck1: string = "apple";

// Check if fruitToCheck1 is a favorite
if (favoriteFruits.indexOf(fruitToCheck1) !== -1) {
  console.log(`${fruitToCheck1} is one of my favorite fruits!`);
} else {
  console.log(`${fruitToCheck1} is not one of my favorite fruits.`);
}

// Check if fruitToCheck2 is a favorite
if (favoriteFruits.indexOf(fruitToCheck2) !== -1) {
  console.log(`${fruitToCheck2} is one of my favorite fruits!`);
} else {
  console.log(`${fruitToCheck2} is not one of my favorite fruits.`);
}

// Check if fruitToCheck3 is a favorite
if (favoriteFruits.indexOf(fruitToCheck3) !== -1) {
  console.log(`${fruitToCheck3} is one of my favorite fruits!`);
} else {
  console.log(`${fruitToCheck3} is not one of my favorite fruits.`);
}
export{}