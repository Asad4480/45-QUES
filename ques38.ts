/*
  QUESTION NO 38;
Cities: Write a function called describe_city() that accepts the name of
a city and its country. The function should print a simple sentence, such as
Karachi is in Pakistan. Give the parameter for the country a default value.
Call your function for three different cities, at least one of which is not in the
default country.*/

// ANSWER NO 38;

function describeCity(city:string, country: string = "Unknown Country") {
    console.log(`${city} is in ${country}`)
}

// calling the three different country
describeCity("karachi", "pakistan")// Output : karachi is in pakistan
describeCity("NewYork")// output : NewYork is in Unknown Country
describeCity("Berlin", "Germany")// Output : Berlin is in Germany




export{}
