"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
Large Shirts: Modify the make_shirt() function so that shirts are large
by default with a message that reads I love TypeScript. Make a large shirt and a
medium shirt with the default message, and a shirt of any size with a different
message. */
function makeShirt(size = "large", message = "I love TypeScript") {
    console.log(`Size: ${size} , Message: ${message}`);
}
// large size with default message
makeShirt(); // output : Size: large , Message: I love TypeScript
// small size with default message
makeShirt("small"); // output : Size: small , Message: I love TypeScript
// meduim size with hello typescript message
makeShirt("medium", "hello typescript"); // output : Size: medium , Message: hello typescript
