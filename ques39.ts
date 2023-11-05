/*
  QUESTION NO 39;
City Names: Write a function called city_country() that takes in the name
of a city and its country. The function should return a string formatted like this:

"Lahore, Pakistan"

Call your function with at least three city-country pairs, and print the value
that’s returned.  */
 
// ANSWER NO 39

let cityCountry = (city: string, country: string):string =>{
    return `${city} is in ${country}`
}
console.log(cityCountry("islamabad","Pakistan" ));
console.log(cityCountry("NewYork","USA" ))
console.log(cityCountry("Tokyo","Japan" ))


export{}