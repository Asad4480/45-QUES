"use strict";
/*
    QUESTION NO 03
Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and
titlecase.*/
Object.defineProperty(exports, "__esModule", { value: true });
//   ANSWER NO 03
let myName = ("SYED Raza ali");
let uppercase = myName.toLocaleUpperCase();
let lowercase = myName.toLocaleLowerCase();
let tittlecase = myName
    .toLocaleLowerCase()
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
console.log("Uppercase: ", uppercase);
console.log("lowercase: ", lowercase);
console.log("tittlecase: ", tittlecase);
