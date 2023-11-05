"use strict";
/*
 QUESTION  NO 45;
Cars: Write a function that stores information about a car in a Object.
The function should always receive a manufacturer and a model name. It
should then accept an arbitrary number of keyword arguments. Call the function
with the required information and two other name-value pairs, such as a
color or an optional feature.
Print the Object that’s returned to make sure all the information was
stored correctly.*/
Object.defineProperty(exports, "__esModule", { value: true });
// ANSWER NO 45;
function creatCar(manufacturer, model, ...properties) {
    let car = {
        manufacturer,
        model,
    };
    for (const [key, value] of properties) {
        car[key] = value;
    }
    return car;
}
let funcPrint = creatCar("Honda", "1989", ["name", "civic"], ["color", "white"], ["OptionalFeature", "Sunroof"]);
console.log(funcPrint);
