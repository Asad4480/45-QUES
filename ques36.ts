/*
 QUESTION NO 36;
 T-Shirt: Write a function called make_shirt() that accepts a size and the
text of a message that should be printed on the shirt. The function should print
a sentence summarizing the size of the shirt and the message printed on it.
Call the function.*/

// ANSWER NO 36;
const make_shirt = (size:string, message :string):void =>{
    console.log(`Size: ${size} , Message: ${message}`);
}
make_shirt("medium" , "hello world")


export{}