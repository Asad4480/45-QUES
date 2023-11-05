/* 
        QUESTION NO 15:
Changing Guest List: You just heard that one of your guests can’t make the 
dinner, so you need to send out a new set of invitations. You’ll have to think
of someone else to invite               */

// ANSWER NO 15: (METHOD 1)

// We're having a special dinner with friends!

// List of friends we're inviting.
let invitedFriends = ["shoaib ", "hasan", "kashan"];

// One friend can't make it, but we have a new friend to invite!
let newFriend = "raza";

// Let's update the guest list.
invitedFriends[2] = newFriend;

// Now, let's invite everyone!
for (let friend of invitedFriends) {
  console.log("Dear " + friend + ", you're invited to dinner. Please join us!");
}

//ANSWER NO 15: (METHOD 2)

const  guestForDinner : string[] = ["kashan" , "hasan" , "shoaib"]
const  guestCantMakeit : string = guestForDinner[0]
const replacemanetGuest : string[] = ["raza"]
console.log(guestForDinner);
console.log(`Unfortunately, ${guestCantMakeit} can't make it dinner`);
console.log(`Instead, we would like to invite ${replacemanetGuest} to join us`);
console.log("--------------Updated Dinner Invitation-------------");
console.log(`${guestForDinner[1]}, you are corialy invite dinner at my place`);
console.log(`${guestForDinner[2]}, you are corialy invite dinner at my place`);
console.log(`${replacemanetGuest}, you are corialy invite dinner at my place`);

export{}















  