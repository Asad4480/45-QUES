"use strict";
/*
   QUESTION NO 17:
    
Shrinking Guest List: You just found out that your new dinner table won’t
arrive in time for the dinner, and you have space for only two guests.

• Start with your program from Exercise 16. Add a new line that prints
a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in
your list. Each time you pop a name from your list, print
a message to that person letting them know you’re sorry you can’t invite them
to dinner.

• Print a message to each of the two people still on your list, letting them
know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print
your list to make sure you actually have an empty list at the end of your
program.            */
Object.defineProperty(exports, "__esModule", { value: true });
let guestForDinner2 = ["kashan", "hasan", "shoaib"];
let guestCantMakeit2 = guestForDinner2[0];
let replacemanetGuest2 = ["raza"];
console.log(guestForDinner2);
console.log(`Unfortunately, ${guestCantMakeit2} can't make it dinner`);
console.log(`Instead, we would like to invite ${replacemanetGuest2} to join us`);
console.log("--------------Updated Dinner Invitation-------------");
console.log(`${guestForDinner2[1]}, you are corialy invite dinner at my place`);
console.log(`${guestForDinner2[2]}, you are corialy invite dinner at my place`);
console.log(`${replacemanetGuest2}, you are corialy invite dinner at my place`);
console.log("____i inform you that i decided to my dinner event is more bigger and i invite more friends___");
let newGuestForDinner1 = ["rehman", "hamza", "hassam"];
console.log(`${newGuestForDinner1[1]}, you are corialy invite dinner at my place`);
console.log(`${newGuestForDinner1[2]}, you are corialy invite dinner at my place`);
console.log(`${newGuestForDinner1[0]}, you are corialy invite dinner at my place`);
console.log("i inform to  my guest that i cant invite some friends to dinner at night due to space issue");
console.log(`i apologize ${guestForDinner2[0]} to cant invite you dinner in my place due to space issue`);
console.log(`i apologize ${newGuestForDinner1[0]} to cant invite you dinner in my place due to space issue`);
console.log(`i apologize ${guestForDinner2[1]} to cant invite you dinner in my place due to space issue`);
console.log(`i apologize ${newGuestForDinner1[1]} to cant invite you dinner in my place due to space issue`);
console.log(`i apologize ${newGuestForDinner1[2]} to cant invite you dinner in my place due to space issu`);
