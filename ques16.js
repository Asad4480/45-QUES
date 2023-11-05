"use strict";
/*
             QUESTION NO 16:
More Guests: You just found a bigger dinner table, so now more space is
available. Think of three more guests to invite to dinner.

• Start with your program from Exercise 15. Add a print statement to the end
  of your program informing people that you found a
  bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array.
• Use append() to add one new guest to the end of your list.
• Print a new set of invitation messages, one for each person in your list.
*/
//             ANSWER NO 16:
Object.defineProperty(exports, "__esModule", { value: true });
let guestForDinner1 = ["kashan", "hasan", "shoaib"];
let guestCantMakeit1 = guestForDinner1[0];
let replacemanetGuest1 = ["raza"];
console.log(guestForDinner1);
console.log(`Unfortunately, ${guestCantMakeit1} can't make it dinner`);
console.log(`Instead, we would like to invite ${replacemanetGuest1} to join us`);
console.log("--------------Updated Dinner Invitation-------------");
console.log(`${guestForDinner1[1]}, you are corialy invite dinner at my place`);
console.log(`${guestForDinner1[2]}, you are corialy invite dinner at my place`);
console.log(`${replacemanetGuest1}, you are corialy invite dinner at my place`);
console.log("____i inform you that i decided to my dinner event is more bigger and i invite more friends___");
let newGuestForDinner = ["rehman", "hamza", "hassam"];
console.log(`${newGuestForDinner[1]}, you are corialy invite dinner at my place`);
console.log(`${newGuestForDinner[2]}, you are corialy invite dinner at my place`);
console.log(`${newGuestForDinner[0]}, you are corialy invite dinner at my place`);
